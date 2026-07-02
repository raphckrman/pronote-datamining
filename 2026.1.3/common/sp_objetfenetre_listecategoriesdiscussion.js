IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_ListeCategoriesDiscussion = void 0;
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetDonneesListe_1 = require('@cp/script/ObjetDonneesListe');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const TypeOrigineCreationEtiquetteMessage_1 = require('@scolys/espace/script/enumere/TypeOrigineCreationEtiquetteMessage');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetFenetre_SelectionCategories_1 = require('@cp/Produit/Script/Fenetre/ObjetFenetre_SelectionCategories');
    const ObjetRequeteSaisieEtiquetteMessage_1 = require('@scolys/produit/script/requete/ObjetRequeteSaisieEtiquetteMessage');
    class ObjetFenetre_ListeCategoriesDiscussion extends ObjetFenetre_SelectionCategories_1.ObjetFenetre_SelectionCategories {
      constructor(...aParams) {
        super(...aParams);
        this.applicationSco = (0, AccessApp_1.getApp)();
      }
      async setDonneesDiscussion(aParams) {
        const lListeFormatte = this.formatterDonnees(
          aParams.listeEtiquettes,
          aParams.listeMessages,
        );
        this.parametres = Object.assign(Object.assign({}, aParams), {
          listeFormette: lListeFormatte,
        });
        if (this.parametres.listeMessages) {
          this.setOptions({ avecMultiSelection: true });
        }
        return await this.setDonnees({
          callbackSaisie: this.callbackSaisie.bind(this),
          listeCategories: lListeFormatte,
        });
      }
      surValidation(aNumeroBouton) {
        if (this._saisieEnCours) {
          return;
        }
        Promise.resolve()
          .then(() => {
            if (this.parametres.listeMessages && aNumeroBouton === 1) {
              const lListePossessions =
                new ObjetListeElements_1.ObjetListeElements();
              this.parametres.listeMessages.parcourir((aMessage) => {
                if (aMessage.possessionMessage) {
                  lListePossessions.addElement(aMessage.possessionMessage);
                } else if (aMessage.listePossessionsMessages) {
                  lListePossessions.add(aMessage.listePossessionsMessages);
                } else {
                }
              });
              const lListeEtiquettesPlus =
                  new ObjetListeElements_1.ObjetListeElements(),
                lListeEtiquettesMoins =
                  new ObjetListeElements_1.ObjetListeElements();
              this.liste.getListeArticles().parcourir((aArticle) => {
                if (
                  aArticle.getEtat() === Enumere_Etat_1.EGenreEtat.Modification
                ) {
                  switch (aArticle.estCoche) {
                    case ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche
                      .Aucune:
                      lListeEtiquettesMoins.addElement(aArticle);
                      break;
                    case ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche
                      .Verte:
                      lListeEtiquettesPlus.addElement(aArticle);
                      break;
                    default:
                  }
                }
              });
              if (
                lListeEtiquettesPlus.count() > 0 ||
                lListeEtiquettesMoins.count() > 0
              ) {
                this.avecModification = true;
                return new ObjetRequeteSaisieEtiquetteMessage_1.ObjetRequeteSaisieEtiquetteMessage(
                  this,
                ).lancerRequete({
                  commande: 'modifierEtiquettesMessages',
                  listePossessionsMessages:
                    lListePossessions.setSerialisateurJSON({
                      ignorerEtatsElements: true,
                    }),
                  listeEtiquettesPlus:
                    lListeEtiquettesPlus.setSerialisateurJSON({
                      ignorerEtatsElements: true,
                    }),
                  listeEtiquettesMoins:
                    lListeEtiquettesMoins.setSerialisateurJSON({
                      ignorerEtatsElements: true,
                    }),
                });
              }
            }
          })
          .then(() => {
            super.surValidation(aNumeroBouton);
          });
      }
      surModificationCBListe(aArticle) {
        aArticle.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
      }
      async callbackSaisie(aParams) {
        const lDonneesJSON =
          await new ObjetRequeteSaisieEtiquetteMessage_1.ObjetRequeteSaisieEtiquetteMessage(
            this,
          ).lancerRequete(
            ObjetRequeteSaisieEtiquetteMessage_1.ObjetRequeteSaisieEtiquetteMessage.getParametresRequeteSaisie(
              aParams,
            ),
          );
        let lListeCategorie;
        let lCategorieCree;
        if (
          lDonneesJSON &&
          lDonneesJSON.genreReponse ===
            ObjetRequeteJSON_1.EGenreReponseSaisie.succes
        ) {
          if (
            lDonneesJSON.JSONReponse &&
            lDonneesJSON.JSONReponse.listeEtiquettes
          ) {
            this.parametres.listeEtiquettes =
              lDonneesJSON.JSONReponse.listeEtiquettes.trier();
            lListeCategorie = this.formatterDonnees(
              this.parametres.listeEtiquettes,
              this.parametres.listeMessages,
              aParams.listeCategories,
            );
          }
          if (
            aParams.genreSaisie ===
              ObjetFenetre_SelectionCategories_1
                .ObjetFenetre_SelectionCategories.GenreSaisie.Creation &&
            lDonneesJSON.JSONRapportSaisie &&
            lDonneesJSON.JSONRapportSaisie.etiquetteCree
          ) {
            lCategorieCree = lDonneesJSON.JSONRapportSaisie.etiquetteCree;
          }
        }
        if (lListeCategorie || lCategorieCree) {
          return {
            listeCategorie: lListeCategorie,
            categorieCree: lCategorieCree,
          };
        }
        return;
      }
      initListe(aInstance) {
        super.initListe(aInstance);
        const lEstEnConsultation = this.applicationSco.droits.get(
          ObjetDroitsPN_1.TypeDroits.estEnConsultation,
        );
        aInstance.setOptionsListe({
          avecBoutonCreation: !lEstEnConsultation,
          nonEditable: lEstEnConsultation,
        });
      }
      formatterDonnees(
        aListeEtiquettes,
        aListeMessages,
        aOldListeAffichage = null,
      ) {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        aListeEtiquettes.parcourir((aEtiquette) => {
          if (
            !TypeOrigineCreationEtiquetteMessage_1.TypeOrigineCreationEtiquetteMessageUtil.estEtiquettePerso(
              aEtiquette.getGenre(),
            )
          ) {
            return true;
          }
          const lElement = ObjetElement_1.ObjetElement.create({
            Libelle: aEtiquette.Libelle,
            Numero: aEtiquette.getNumero(),
            abr: aEtiquette.abr,
            couleur: aEtiquette.couleur,
            estCoche: ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Aucune,
          });
          lListe.addElement(lElement);
          let lInit = false;
          if (aListeMessages) {
            aListeMessages.parcourir((aMessage) => {
              let lEtiquetteExiste = null;
              if (aMessage && aMessage.listeEtiquettes) {
                lEtiquetteExiste = aMessage.listeEtiquettes.getElementParNumero(
                  aEtiquette.getNumero(),
                );
              }
              if (
                !lEtiquetteExiste &&
                lElement.estCoche ===
                  ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte
              ) {
                lElement.estCoche =
                  ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise;
                return false;
              }
              if (
                lEtiquetteExiste &&
                lElement.estCoche ===
                  ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Aucune
              ) {
                lElement.estCoche = lInit
                  ? ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
                  : ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte;
              }
              if (
                lElement.estCoche ===
                ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
              ) {
                return false;
              }
              lInit = true;
            });
          }
          if (aOldListeAffichage) {
            const lOldEtiquette = aOldListeAffichage.getElementParNumeroEtGenre(
              lElement.getNumero(),
            );
            if (
              lOldEtiquette &&
              lOldEtiquette.getEtat() ===
                Enumere_Etat_1.EGenreEtat.Modification &&
              lElement.estCoche !== lOldEtiquette.estCoche
            ) {
              lElement.estCoche = lOldEtiquette.estCoche;
              lElement.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
            }
          }
        });
        return lListe;
      }
    }
    exports.ObjetFenetre_ListeCategoriesDiscussion =
      ObjetFenetre_ListeCategoriesDiscussion;
  },
  fn: 'objetfenetre_listecategoriesdiscussion.js',
});