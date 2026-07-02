IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SelectionClouds = void 0;
    const Enumere_EvenementListe_1 = require('@cp/script/Enumere/Enumere_EvenementListe');
    const ObjetDonneesListeFlatDesign_1 = require('@cp/script/ObjetDonneesListeFlatDesign');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const UtilitaireOAuth2_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireOAuth2');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const TypeClientRest_1 = require('@cp/script/Enumere/TypeClientRest');
    const IconeSvgCog_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCog');
    const IconeSvgDoc_certifie_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDoc_certifie');
    const IconeSvgInfo_widget_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgInfo_widget');
    const IconeSvgPost_it_rempli_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPost_it_rempli');
    const Image_css_1 = require('@cp/images/css/Image.css');
    class ObjetFenetre_SelectionClouds extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.avecPDF = true;
        this.avecClouds = true;
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
          iconMessage: IE.jsx.str(
            IconeSvgPost_it_rempli_1.IconeSvgPost_it_rempli,
            null,
          ),
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
      jsxModeleBoutonParametrer() {
        return {
          event: () => {
            this.callbackParametrage();
          },
        };
      }
      jsxModelBoutonVoirLeDocument() {
        return {
          event: () => {
            if (this.callbackTelechargement) {
              this.callbackTelechargement();
              this.avecActionEffectuee = true;
            }
          },
        };
      }
      jsxModelBoutonGenererPDF() {
        return {
          event: () => {
            this.fermer();
            this.callback.appel();
            if (this.callbackFermeture) {
              this.callbackFermeture(this.avecActionEffectuee);
            }
          },
        };
      }
      setMessage(aMessage) {
        this.message = aMessage;
      }
      setOptionsFenetreSelectionClouds(aOptions) {
        Object.assign(this.optionsFenetreSelectionClouds, aOptions);
      }
      jsxIfAfficherCtnMessage() {
        return (
          !!this.optionsFenetreSelectionClouds.avecMessage &&
          this.message &&
          this.message !== ''
        );
      }
      composeContenu() {
        const H = [];
        H.push('<div class="flex-contain cols full-size">');
        H.push('<div id="', this.idConteneurBouton, '" style="display:none">');
        H.push('<div class="Espace flex-contain cols">');
        H.push(
          IE.jsx.str(
            'div',
            {
              class: ['flex-contain', 'm-bottom-xl'],
              ie_if: this.jsxIfAfficherCtnMessage.bind(this),
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
            IEHtml_Bouton_1.Bouton,
            {
              class: [Type_ThemeBouton_1.TypeThemeBouton.primaire, 'm-y-l'],
              id: this.idBtnTelecharger,
              ie_model: this.jsxModelBoutonVoirLeDocument.bind(this),
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
          IE.jsx.str(
            IEHtml_Bouton_1.Bouton,
            {
              ie_model: this.jsxModelBoutonGenererPDF.bind(this),
              class: 'themeBoutonPrimaire fluid-bloc',
            },
            'Voir le PDF',
          ),
        );
        if (!IE.estMobile) {
          H.push(
            IE.jsx.str(
              IEHtml_BtnImage_1.BtnIcon,
              {
                id: this.idBtnParams,
                title: 'Options de génération du PDF',
                ie_model: this.jsxModeleBoutonParametrer.bind(this),
                class: 'bt-activable bt-large fix-bloc',
              },
              IE.jsx.str(IconeSvgCog_1.IconeSvgCog, null),
            ),
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
                return this._addCommandesMenuContextuel({
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
        return true;
      }
      _initialiserListe(aInstance) {
        aInstance.setOptionsListe({
          skin: ObjetListe_1.ObjetListe.skin.flatDesign,
          hauteurAdapteContenu: true,
          hauteurMaxAdapteContenu: 400,
          ariaLabel: this._getTitreFenetre(),
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
            IE.jsx.str(IconeSvgDoc_certifie_1.IconeSvgDoc_certifie, {
              class: 'svg-medium',
              ie_tooltiplabel: 'Documents certifiés',
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
            IE.jsx.str(
              IEHtml_BtnImage_1.BtnIcon,
              {
                ie_model: this.jsxModeleBoutonInfo.bind(
                  this,
                  aParams.article.getGenre(),
                ),
                title: 'Informations sur les documents certifiés',
                class: ['bt-activable'],
              },
              IE.jsx.str(IconeSvgInfo_widget_1.IconeSvgInfo_widget, null),
            ),
          );
        }
        return lIcones.join('');
      }
      avecBoutonActionLigne(aParams) {
        return this._estConnecte(aParams.article);
      }
      getZoneIconeGaucheContenuFormate(aParams) {
        if (aParams.article.logoBase64) {
          return IE.jsx.str('img', {
            src: `data:image/png;base64, ${aParams.article.logoBase64}`,
            'aria-hidden': 'true',
            alt: '',
            class: Image_css_1.SImage.iconCloudLogoBase64,
          });
        }
        if (aParams.article.nomIcone) {
          return IE.jsx.str('div', {
            class: `Image_Icone_${aParams.article.nomIcone}`,
          });
        }
      }
      remplirMenuContextuel(aParametres) {
        if (!aParametres.menuContextuel) {
          return;
        }
        return this.options.addCommandesMenuContextuel(aParametres);
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