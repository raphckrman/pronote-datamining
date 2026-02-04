IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireVisios = exports.ObjetRequeteSaisieVisio = void 0;
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetFenetre_SaisieVisiosCours_1 = require('ObjetFenetre_SaisieVisiosCours');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetElement_1 = require('ObjetElement');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const AccessApp_1 = require('AccessApp');
    class ObjetRequeteSaisieVisio extends ObjetRequeteJSON_1.ObjetRequeteSaisie {}
    exports.ObjetRequeteSaisieVisio = ObjetRequeteSaisieVisio;
    CollectionRequetes_1.Requetes.inscrire(
      'SaisieVisio',
      ObjetRequeteSaisieVisio,
    );
    class UtilitaireVisios {
      constructor() {}
      getTailleMaxLibelle() {
        return 0;
      }
      getTailleMaxCommentaire() {
        return 0;
      }
      getNomIconeParametrageVisios() {
        return 'icon_cours_virtuel_lien';
      }
      getNomIconePresenceVisios() {
        return 'icon_cours_virtuel';
      }
      getHintListeVisiosCours(aListeVisiosCours) {
        const H = [];
        if (
          !!aListeVisiosCours &&
          aListeVisiosCours.getNbrElementsExistes() > 0
        ) {
          aListeVisiosCours.parcourir((aVisioCours) => {
            H.push(this.getHintVisio(aVisioCours));
          });
        }
        return H.join('');
      }
      getHintVisio(aElementVisios) {
        const H = [];
        if (aElementVisios) {
          if (!!aElementVisios.libelleLien) {
            const lStrLibelle = aElementVisios.libelleLien.ajouterEntites();
            H.push(
              IE.jsx.str('span', { style: 'font-weight: bold;' }, lStrLibelle),
            );
          } else if (!!aElementVisios.url) {
            H.push(aElementVisios.url.ajouterEntites());
          }
          if (!!aElementVisios.commentaire) {
            if (H.length > 0) {
              H.push('<br/>');
            }
            H.push(
              ObjetChaine_1.GChaine.replaceRCToHTML(aElementVisios.commentaire),
            );
          }
        }
        return H.join('');
      }
      ouvrirLiensVisioCours(aListeVisiosCours) {
        if (
          !!aListeVisiosCours &&
          aListeVisiosCours.getNbrElementsExistes() > 0
        ) {
          this.ouvrirLienVisioCours(aListeVisiosCours.getPremierElement());
        }
      }
      ouvrirLienVisioCours(aVisioCours) {
        if (
          !!aVisioCours &&
          !!aVisioCours.url &&
          aVisioCours.url !== '##BBB##'
        ) {
          const lURLCorrigee = ObjetChaine_1.GChaine.verifierURLHttp(
            aVisioCours.url,
          );
          window.open(lURLCorrigee);
        } else if (!!aVisioCours && aVisioCours.url === '##BBB##') {
          this.visioEnCours(aVisioCours).then(
            (aJSON) => {
              const lJSON = aJSON;
              if (!lJSON.estEnCours) {
                (0, AccessApp_1.getApp)()
                  .getMessage()
                  .afficher({ message: aJSON.message })
                  .then(() => {});
              } else {
                this.visioUrl(aVisioCours).then(
                  (aJSON) => {
                    const lJSON = aJSON;
                    if (lJSON.urlVisio) {
                      window.open(lJSON.urlVisio);
                    }
                  },
                  () => {},
                );
              }
            },
            () => {},
          );
        } else {
          (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
              message:
                'Une erreur s'est produite',
            })
            .then(() => {});
        }
      }
      ouvrirFenetreEditionVisios(
        aVisio,
        aCallbackApresModification,
        aCallbackValidation,
      ) {
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_SaisieVisiosCours_1.ObjetFenetre_SaisieVisiosCours,
          {
            pere: this,
            initialiser: function (aInstance) {
              if (aVisio.titreFenetre) {
                aInstance.setOptionsFenetre({ titre: aVisio.titreFenetre });
              }
            },
            evenement: function (aNumeroBouton) {
              if (
                aNumeroBouton ===
                ObjetFenetre_SaisieVisiosCours_1.ObjetFenetre_SaisieVisiosCours
                  .TypeBouton.Annuler
              ) {
                if (aVisio.getEtat() === Enumere_Etat_1.EGenreEtat.Creation) {
                  aVisio.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
                }
              } else {
                if (!!aCallbackApresModification) {
                  aCallbackApresModification();
                }
              }
            },
          },
        );
        const lParams = {
          lienVisio: aVisio,
          tailleMaxLibelle: this.getTailleMaxLibelle(),
          tailleMaxCommentaire: this.getTailleMaxCommentaire(),
          callbackValider: aCallbackValidation,
        };
        lFenetre.setAvecSaisieDirecte(true);
        lFenetre.setCallbackOuvrirLienVisio(this.ouvrirLienVisioCours);
        lFenetre.setDonnees(lParams);
      }
      ouvrirFenetreEditionVisiosCoursNSeances(
        aToutesSeances,
        aCours,
        aCallbackApresModification,
        aDomaine,
        aEstConteu,
      ) {
        let lVisio;
        if (!!aCours && !!aCours.listeVisios) {
          aCours.listeVisios.parcourir((aElt) => {
            if (aElt.concerneProgression === aToutesSeances) {
              lVisio = aElt;
            }
          });
        }
        if (!lVisio) {
          lVisio = new ObjetElement_1.ObjetElement();
          lVisio.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
          if (!aCours.listeVisios) {
            aCours.listeVisios = new ObjetListeElements_1.ObjetListeElements();
          }
          aCours.listeVisios.add(lVisio);
        }
        this.ouvrirFenetreEditionVisios(
          lVisio,
          aCallbackApresModification,
          this.callbackValidationCours.bind(
            this,
            aCours,
            aEstConteu,
            aCallbackApresModification,
            aDomaine,
          ),
        );
      }
      ouvrirFenetreEditionVisiosCours(
        aCours,
        aCallbackApresModification,
        aDomaine,
        aEstConteu,
      ) {
        let lVisio;
        if (!!aDomaine && aDomaine.getNbrValeurs() > 1) {
          lVisio = new ObjetElement_1.ObjetElement();
          lVisio.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
          if (!aCours.listeVisios) {
            aCours.listeVisios = new ObjetListeElements_1.ObjetListeElements();
          }
          aCours.listeVisios.add(lVisio);
        } else {
          lVisio = this.obtenirLienVisioDeCours(aCours);
        }
        this.ouvrirFenetreEditionVisios(
          lVisio,
          aCallbackApresModification,
          this.callbackValidationCours.bind(
            this,
            aCours,
            aEstConteu,
            aCallbackApresModification,
            aDomaine,
          ),
        );
      }
      obtenirLienVisioDeCours(aElement) {
        let lVisio;
        if (!!aElement) {
          if (!aElement.listeVisios) {
            aElement.listeVisios =
              new ObjetListeElements_1.ObjetListeElements();
          }
          if (aElement.listeVisios.getNbrElementsExistes() === 0) {
            const lNouveauVisio = new ObjetElement_1.ObjetElement();
            lNouveauVisio.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
            aElement.listeVisios.add(lNouveauVisio);
          }
          lVisio = aElement.listeVisios.getPremierElement();
          aElement.listeVisios.parcourir((aElt) => {
            if (!aElt.concerneProgression) {
              lVisio = aElt;
            }
          });
        }
        return lVisio;
      }
      ouvrirFenetreEditionVisiosProgramme(
        aProgramme,
        aEstContenu,
        aCallbackApresModification,
      ) {
        let lVisio;
        if (!!aProgramme) {
          if (!aProgramme.liensVisio) {
            aProgramme.liensVisio =
              new ObjetListeElements_1.ObjetListeElements();
          }
          if (aProgramme.liensVisio.getNbrElementsExistes() === 0) {
            const lNouveauVisio = new ObjetElement_1.ObjetElement();
            lNouveauVisio.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
            aProgramme.liensVisio.add(lNouveauVisio);
          }
          lVisio = aProgramme.liensVisio.getPremierElement();
        }
        this.ouvrirFenetreEditionVisios(
          lVisio,
          aCallbackApresModification,
          this.callbackValidationProgramme.bind(
            this,
            aProgramme,
            aEstContenu,
            aCallbackApresModification,
          ),
        );
      }
      callbackValidationCours(
        aCours,
        aEstContenu,
        aCallbackApresModification,
        aDomaine,
      ) {
        const lParamsSaisie = {
          cours: aCours.toJSON(),
          domaine: aDomaine,
          estContenu: aEstContenu,
          estProgramme: !aEstContenu,
          estCours: true,
          elementParent: aCours.toJSON(),
          listeVisio: aCours.listeVisios,
        };
        lParamsSaisie.cours.dateCours = aCours.DateDuCours;
        lParamsSaisie.listeVisio.setSerialisateurJSON({
          methodeSerialisation: function (aElement, AJSON) {
            AJSON.url = aElement.url;
            AJSON.libelleLien = aElement.libelleLien;
            AJSON.commentaire = aElement.commentaire;
          },
        });
        new ObjetRequeteSaisieVisio(this)
          .lancerRequete(lParamsSaisie)
          .then(() => {
            if (aCallbackApresModification) {
              aCallbackApresModification.call(this);
            }
          });
      }
      callbackValidationProgramme(
        aProgramme,
        aEstContenu,
        aCallbackApresModification,
      ) {
        const lParamsSaisie = {
          estContenu: aEstContenu,
          estProgramme: !aEstContenu,
          estCours: false,
          elementParent: aProgramme.toJSON(),
          listeVisio: aProgramme.liensVisio,
        };
        lParamsSaisie.listeVisio.setSerialisateurJSON({
          methodeSerialisation: function (aElement, AJSON) {
            AJSON.url = aElement.url;
            AJSON.libelleLien = aElement.libelleLien;
            AJSON.commentaire = aElement.commentaire;
          },
        });
        if (
          !aProgramme.existeNumero() &&
          aProgramme.listeServices &&
          aProgramme.listeServices.count() > 0
        ) {
          aProgramme.listeServices.setSerialisateurJSON({
            methodeSerialisation: () => {
              return true;
            },
          });
          lParamsSaisie.elementParent.listeServices =
            aProgramme.listeServices.toJSON();
        }
        new ObjetRequeteSaisieVisio(this)
          .lancerRequete(lParamsSaisie)
          .then(() => {
            if (aCallbackApresModification) {
              aCallbackApresModification.call(this);
            }
          });
      }
      ouvrirFenetreConsultVisio(aElementVisio, aOptions) {
        if (aElementVisio && aElementVisio.url) {
          const lUrl = aElementVisio.url;
          const lLibelleLien = aElementVisio.libelleLien;
          const lCommentaire = aElementVisio.commentaire;
          const lAvecLibelleLien = !!lLibelleLien && lLibelleLien.length > 0;
          const lAvecCommentaire = !!lCommentaire && lCommentaire.length > 0;
          if (lUrl !== '##BBB##' && (lAvecLibelleLien || lAvecCommentaire)) {
            const lStrLien = lAvecLibelleLien
              ? lLibelleLien
              : 'Lancer la visio';
            const lMessage = [];
            lMessage.push(
              IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str(
                  'div',
                  { class: 'AlignementMilieu' },
                  IE.jsx.str(
                    'ie-chips',
                    {
                      class: 'iconic ' + this.getNomIconePresenceVisios(),
                      href: ObjetChaine_1.GChaine.verifierURLHttp(lUrl),
                    },
                    lStrLien,
                  ),
                ),
              ),
            );
            if (lAvecCommentaire) {
              lMessage.push(
                '<div class="EspaceHaut10">',
                ObjetChaine_1.GChaine.replaceRCToHTML(lCommentaire),
                '</div>',
              );
            }
            const lFenetreLienVisioCours =
              ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
                ObjetFenetre_1.ObjetFenetre,
                {
                  pere: this,
                  initialiser: function (aInstance) {
                    aInstance.setOptionsFenetre({
                      modale: true,
                      largeur: 350,
                      titre: aOptions && aOptions.titre ? aOptions.titre : '',
                      fermerFenetreSurClicHorsFenetre: true,
                    });
                  },
                },
              );
            lFenetreLienVisioCours.afficher(lMessage.join(''));
          } else {
            this.ouvrirLienVisioCours(aElementVisio);
          }
        }
      }
      visioEnCours(aIdVisio) {
        return new ObjetRequeteVisioAttente({})
          .lancerRequete({ visioEnCours: true, visio: aIdVisio })
          .then((aJSON) => {
            return aJSON;
          })
          .catch((aError) => {
            if (aError && aError.sansMessage) {
              return Promise.reject();
            }
            return (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                message:
                  aError ||
                  ObjetTraduction_1.GTraductions.getValeur(
                    'UtilitaireVisio.echec',
                  ),
              })
              .then(() => {
                return Promise.reject();
              });
          });
      }
      visioUrl(aIdVisio) {
        return new ObjetRequeteVisioAttente({})
          .lancerRequete({ getUrlVisio: true, visio: aIdVisio })
          .then((aJSON) => {
            return aJSON;
          })
          .catch((aError) => {
            if (aError && aError.sansMessage) {
              return Promise.reject();
            }
            return (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                message:
                  aError ||
                  ObjetTraduction_1.GTraductions.getValeur(
                    'UtilitaireVisio.echec',
                  ),
              })
              .then(() => {
                return Promise.reject();
              });
          });
      }
    }
    exports.UtilitaireVisios = UtilitaireVisios;
    class ObjetRequeteVisioAttente extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    CollectionRequetes_1.Requetes.inscrire(
      'VisioAttente',
      ObjetRequeteVisioAttente,
    );
  },
  fn: 'utilitairevisios.js',
});