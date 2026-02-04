IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SelectionClouds = void 0;
    const Enumere_EvenementListe_1 = require('Enumere_EvenementListe');
    const ObjetDonneesListeFlatDesign_1 = require('ObjetDonneesListeFlatDesign');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetListe_1 = require('ObjetListe');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const UtilitaireOAuth2_1 = require('UtilitaireOAuth2');
    const GUID_1 = require('GUID');
    const ObjetHtml_1 = require('ObjetHtml');
    const TypeClientRest_1 = require('TypeClientRest');
    class ObjetFenetre_SelectionClouds extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.avecChoixFiltrageEnseignees = false;
        this.avecPDF = true;
        this.avecClouds = true;
        this.filtreEnseignees = false;
        this.autoriserEventCloud = 0;
        this.idConteneurBouton = GUID_1.GUID.getId();
        this.idTexteExplicatif = GUID_1.GUID.getId();
        this.idConteneurBoutonBas = GUID_1.GUID.getId();
        this.idBtnParams = GUID_1.GUID.getId();
        this.idConteneurMessage = GUID_1.GUID.getId();
        this.idBtnTelecharger = GUID_1.GUID.getId();
        this.idConteneurBoutonPDF = GUID_1.GUID.getId();
        this.avecActionEffectuee = false;
        this.message = null;
        this.optionsFenetreSelectionClouds = {
          avecMessage: false,
          iconMessage: 'icon_post_it_rempli',
          avecBtnTelecharger: false,
          masquerENEJ: true,
        };
      }
      construireInstances() {
        this.identListe = this.add(
          ObjetListe_1.ObjetListe,
          this.evenementSurListe,
          this._initialiserListe,
        );
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          genererPDF: {
            event() {
              aInstance.fermer();
              aInstance.callback.appel();
              if (aInstance.callbackFermeture) {
                aInstance.callbackFermeture(aInstance.avecActionEffectuee);
              }
            },
          },
          surParametrage: {
            event() {
              aInstance.callbackParametrage();
            },
          },
          ctnMessage: {
            afficher() {
              return (
                !!aInstance.optionsFenetreSelectionClouds.avecMessage &&
                aInstance.message &&
                aInstance.message !== ''
              );
            },
          },
          voirLeDocument: {
            event() {
              if (aInstance.callbackTelechargement) {
                aInstance.callbackTelechargement();
                aInstance.avecActionEffectuee = true;
              }
            },
          },
        });
      }
      setMessage(aMessage) {
        this.message = aMessage;
      }
      setOptionsFenetreSelectionClouds(aOptions) {
        Object.assign(this.optionsFenetreSelectionClouds, aOptions);
      }
      composeContenu() {
        const H = [];
        H.push('<div class="flex-contain cols full-size">');
        H.push('<div id="', this.idConteneurBouton, '" style="display:none">');
        H.push('<div  class="Espace flex-contain cols">');
        H.push(
          IE.jsx.str(
            'div',
            {
              class: ['flex-contain', 'm-bottom-xl'],
              'ie-if': 'ctnMessage.afficher',
              id: this.idConteneurMessage,
              style: 'overflow: auto; max-height: 30rem;',
            },
            IE.jsx.str('i', {
              class: [
                this.optionsFenetreSelectionClouds.iconMessage,
                'i-small',
                'm-right',
                'theme_color_moyen1',
              ],
              role: 'presentation',
              title: 'Commentaire associé au document',
            }),
            IE.jsx.str('div', null, this.message),
          ),
        );
        H.push(
          IE.jsx.str(
            'ie-bouton',
            {
              class: [Type_ThemeBouton_1.TypeThemeBouton.primaire, 'm-y-l'],
              id: this.idBtnTelecharger,
              'ie-model': 'voirLeDocument',
            },
            'Voir le document',
          ),
        );
        H.push(
          '<div data-usedAs="conteneurBoutonPDF" id="' +
            this.idConteneurBoutonPDF +
            '" class="flex-contain justify-between flex-gap-l">',
        );
        H.push(
          '<ie-bouton  ie-model="genererPDF" class="themeBoutonPrimaire fluid-bloc">' +
            'Voir le PDF' +
            '</ie-bouton>',
        );
        if (!IE.estMobile) {
          H.push(
            IE.jsx.str('ie-btnicon', {
              id: this.idBtnParams,
              title: ObjetTraduction_1.GTraductions.getValeur(
                'GenerationPDF.Titre',
              ),
              'ie-model': 'surParametrage',
              class: 'bt-activable bt-large icon_cog fix-bloc',
            }),
          );
        }
        H.push('</div>');
        H.push(
          '<div class="GrandEspaceHaut EspaceBas" id="',
          this.idTexteExplicatif,
          '" style="display:none">',
        );
        H.push(
          '<span> ',
          'Cliquez sur un cloud pour y déposer le PDF.',
          '</span>',
        );
        H.push('</div>');
        H.push('</div>');
        H.push('</div>');
        H.push(
          '<div class="full-size" id="',
          this.getNomInstance(this.identListe),
          '">',
        );
        H.push('</div>');
        H.push('</div>');
        return H.join('');
      }
      setDonnees(aParams) {
        this.avecPDF =
          aParams.avecPDF === undefined || aParams.avecPDF === null
            ? this.avecPDF
            : aParams.avecPDF;
        this.avecClouds =
          aParams.avecClouds === undefined || aParams.avecClouds === null
            ? this.avecClouds
            : aParams.avecClouds;
        this.avecDepot =
          aParams.avecDepot === undefined || aParams.avecDepot === null
            ? this.avecDepot
            : aParams.avecDepot;
        this.callbackParametrage = aParams.callbackParametrage;
        this.callbackTelechargement = aParams.callbackTelechargement;
        this.callbackFermeture = aParams.callbackFermeture;
        this.actualiser();
        this.afficher();
        const lDisplayCtnBtn =
          this.avecPDF ||
          this.optionsFenetreSelectionClouds.avecMessage ||
          this.optionsFenetreSelectionClouds.avecBtnTelecharger;
        const lDisplaytexteExpliatif =
          (this.avecPDF && this.avecClouds) ||
          (this.optionsFenetreSelectionClouds.avecBtnTelecharger &&
            this.avecClouds);
        ObjetHtml_1.GHtml.setDisplay(this.idConteneurBouton, lDisplayCtnBtn);
        ObjetHtml_1.GHtml.setDisplay(
          this.idConteneurBoutonBas,
          !IE.estMobile && this.avecPDF,
        );
        ObjetHtml_1.GHtml.setDisplay(
          this.idTexteExplicatif,
          lDisplaytexteExpliatif,
        );
        ObjetHtml_1.GHtml.setDisplay(
          this.idBtnParams,
          !!this.callbackParametrage,
        );
        ObjetHtml_1.GHtml.setDisplay(
          this.idBtnTelecharger,
          !!this.callbackTelechargement,
        );
        ObjetHtml_1.GHtml.setDisplay(
          this.idConteneurMessage,
          !!this.optionsFenetreSelectionClouds.avecMessage,
        );
        ObjetHtml_1.GHtml.setDisplay(this.idConteneurBoutonPDF, this.avecPDF);
        if (this.avecClouds) {
          let lListe = this.avecDepot
            ? GEtatUtilisateur.listeCloudDepotServeur
            : GEtatUtilisateur.listeCloud;
          this.setBoutonActif(1, false);
          this.getInstance(this.identListe).setDonnees(
            new DonneesListe_SelectionCloud(lListe).setOptions({
              addCommandesMenuContextuel: (aParametres) => {
                this._addCommandesMenuContextuel({
                  idOAuth2: aParametres.article.idOAuth2,
                  menuContextuel: aParametres.menuContextuel,
                });
              },
              masquerENEJ: this.optionsFenetreSelectionClouds.masquerENEJ,
            }),
          );
        }
      }
      surValidation() {
        const lNiveauSelectionne = this.getInstance(
          this.identListe,
        ).getElementSelection();
        this.fermer();
        if (!!lNiveauSelectionne) {
          this.callback.appel(
            !!lNiveauSelectionne ? lNiveauSelectionne.getNumero() : null,
          );
          this.avecActionEffectuee = true;
        }
        if (this.callbackFermeture) {
          this.callbackFermeture(this.avecActionEffectuee);
        }
      }
      evenementSurListe(aParametres) {
        switch (aParametres.genreEvenement) {
          case Enumere_EvenementListe_1.EGenreEvenementListe.Selection:
            this.fermer();
            this.callback.appel(aParametres.ligne, aParametres.article);
            this.avecActionEffectuee = true;
            if (this.callbackFermeture) {
              this.callbackFermeture(this.avecActionEffectuee);
            }
            break;
        }
      }
      _addCommandesMenuContextuel(aParametres) {
        aParametres.menuContextuel.add(
          'Se déconnecter du cloud',
          true,
          () => {
            UtilitaireOAuth2_1.UtilitaireOAuth2.revocation(
              aParametres.idOAuth2,
              this.setDonnees.bind(this, {}),
            );
          },
        );
        aParametres.menuContextuel.setDonnees();
      }
      _initialiserListe(aInstance) {
        aInstance.setOptionsListe({
          skin: ObjetListe_1.ObjetListe.skin.flatDesign,
          hauteurAdapteContenu: true,
          hauteurMaxAdapteContenu: 400,
        });
      }
    }
    exports.ObjetFenetre_SelectionClouds = ObjetFenetre_SelectionClouds;
    class DonneesListe_SelectionCloud extends ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign {
      constructor(aDonnees) {
        super(aDonnees);
        this.setOptions({ avecEvnt_Selection: true, flatDesignMinimal: true });
      }
      _estConnecte(aArticle) {
        return !!aArticle && !!aArticle.idOAuth2;
      }
      _estCertifie(aArticle) {
        return aArticle.aveccertification;
      }
      jsxModeleBoutonInfo(aGenre) {
        return {
          event: () => {
            const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
              ObjetFenetre_1.ObjetFenetre,
              {
                pere: this,
                initialiser(aInstanceFenetre) {
                  aInstanceFenetre.setOptionsFenetre({
                    avecTailleSelonContenu: true,
                    largeur: 350,
                    listeBoutons: [
                      'Fermer',
                    ],
                    titre: 'Documents certifiés',
                  });
                },
              },
            );
            const lListeElement = this.Donnees;
            const lCloud =
              lListeElement && lListeElement.getElementParGenre(aGenre);
            lFenetre.afficher(
              IE.jsx.str(
                'div',
                null,
                lCloud && lCloud.detailscertification
                  ? lCloud.detailscertification
                  : '',
              ),
            );
          },
        };
      }
      getTitreZonePrincipale(aParams) {
        return aParams.article.getLibelle();
      }
      getInfosSuppZonePrincipale(aParams) {
        const lInfosSupp = [];
        const lEstConnecte = this._estConnecte(aParams.article);
        if (lEstConnecte) {
          lInfosSupp.push(
            'Connecté',
          );
        }
        if (this._estCertifie(aParams.article)) {
          if (lEstConnecte) {
            lInfosSupp.push(' - ');
          }
          lInfosSupp.push(
            'Documents certifiés',
            ' ',
            IE.jsx.str('i', {
              class: ['icon_doc_certifie', 'i-medium'],
              'ie-tooltiplabel': 'Documents certifiés',
              role: 'img',
            }),
          );
        }
        const H = lInfosSupp.join('');
        return H.length > 0 ? H : '&nbsp;';
      }
      getZoneComplementaire(aParams) {
        const lIcones = [];
        if (this._estCertifie(aParams.article)) {
          lIcones.push(
            IE.jsx.str('ie-btnicon', {
              'ie-model': this.jsxModeleBoutonInfo.bind(
                this,
                aParams.article.getGenre(),
              ),
              title: 'Informations sur les documents certifiés',
              class: ['bt-activable', 'icon_info_widget'],
            }),
          );
        }
        return lIcones.join('');
      }
      avecBoutonActionLigne(aParams) {
        return this._estConnecte(aParams.article);
      }
      getIconeGaucheContenuFormate(aParams) {
        if (aParams.article.logoBase64) {
          return {
            css: 'icon-cloud-logoBase64 ',
            html: IE.jsx.str('img', {
              src: `data:image/png;base64, ${aParams.article.logoBase64}`,
              'aria-hidden': 'true',
            }),
          };
        }
        if (aParams.article.nomIcone) {
          return `Image_Icone_${aParams.article.nomIcone}`;
        }
      }
      initialisationObjetContextuel(aParametres) {
        if (!aParametres.menuContextuel) {
          return;
        }
        this.options.addCommandesMenuContextuel(aParametres);
        aParametres.menuContextuel.setDonnees(aParametres.id);
      }
      getVisible(aDonnee) {
        if (
          this.options.masquerENEJ &&
          aDonnee.typeClientRest === TypeClientRest_1.TypeClientRest.crENEJ
        ) {
          return false;
        }
        return super.getVisible(aDonnee);
      }
    }
  },
  fn: 'objetfenetre_selectionclouds.js',
});