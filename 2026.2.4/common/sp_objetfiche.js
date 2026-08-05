IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFiche = void 0;
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const ObjetFenetre_Espace_css_1 = require('@cp/Espace/Css/ObjetFenetre_Espace.css');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const FocusTrap_1 = require('@cp/Produit/Script/FocusTrap');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IEHtml_BtnImage_css_1 = require('@cp/Produit/Css/IEHtml.BtnImage.css');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const fonts_css_1 = require('@cp/Produit/Css/fonts.css');
    class ObjetFiche extends ObjetFenetre_1.ObjetFenetre {
      constructor(aParams) {
        super(aParams);
        this.idCorpsContenu = this.Nom + '_corpsContenu';
        this.idBandeau = this.Nom + '_Bandeau';
        this.EnAffichage = false;
        this.idContenu = this.Nom + '_ContenuFiche';
        this.IdPremierElement = this.idContenu;
        this.setOptionsFenetre({
          estFicheMobile: true,
          modale: false,
          largeur: null,
          hauteur: null,
          avecAbonnementBlocage: true,
          avecAbonnementPremierPlan: true,
          htmlContenu: '',
          avecBandeauFiche: !IE.estMobile,
          avecDeplacementSurBandeau: !IE.estMobile,
          avecDeplacementSurFiche: false,
          positionnerFenetreSurAfficher: false,
          conserverCoordonnees: false,
          avecTitre: false,
        });
        if (!IE.estMobile) {
          this.NomFenetre = this.IdContenu;
          this.setOptionsFenetre({
            avecTailleSelonContenu: true,
            bloquerFocus: false,
          });
        }
      }
      compose() {
        if (IE.estMobile) {
          return IE.jsx.str(
            'div',
            { tabindex: '-1', id: this.idContenu },
            this.optionsFenetre.htmlContenu || this.composeContenu(),
          );
        }
        return IE.jsx.str(
          'div',
          {
            id: this.idContenu,
            class: [
              ObjetFenetre_Espace_css_1.SObjetFenetre_Espace
                .ObjetFenetre_Espace,
              this.optionsFenetre.cssFenetre || '',
            ],
          },
          IE.jsx.str(
            'div',
            {
              class: [
                ObjetFenetre_Espace_css_1.SObjetFenetre_Espace.Fenetre_Cadre,
                ObjetFenetre_Espace_css_1.SObjetFenetre_Espace.ombreCadre,
              ],
              style:
                ObjetStyle_1.GStyle.composeWidth(this.optionsFenetre.largeur) +
                ObjetStyle_1.GStyle.composeCouleurFond(
                  this.optionsFenetre.couleurFond,
                ),
            },
            this.optionsFenetre.avecBandeauFiche
              ? IE.jsx.str(
                  'div',
                  {
                    id: this.idBandeau,
                    class:
                      ObjetFenetre_Espace_css_1.SObjetFenetre_Espace
                        .bandeauHeader,
                  },
                  this.composeBandeau(),
                )
              : IE.jsx.str(
                  'div',
                  {
                    class: [
                      ObjetFenetre_Espace_css_1.SObjetFenetre_Espace
                        .Fenetre_Titre,
                      ObjetFenetre_Espace_css_1.SObjetFenetre_Espace
                        .sansBandeau,
                    ],
                  },
                  this._construireBtnFermer(),
                ),
            IE.jsx.str(
              'div',
              {
                id: this.idCorpsContenu,
                class: [
                  'ObjetFenetre_Edition',
                  'content',
                  this.optionsFenetre.avecDeplacementSurFiche
                    ? Divers_css_1.SD.AvecMove
                    : '',
                ],
                style: 'height:100%;',
                tabindex: '-1',
                ie_draggable: this.optionsFenetre.avecDeplacementSurFiche
                  ? this.getDragFenetre.bind(this)
                  : false,
              },
              this.optionsFenetre.htmlContenu || this.composeContenu(),
            ),
          ),
        );
      }
      composeBandeau() {
        return IE.jsx.str(
          'div',
          {
            class: ObjetFenetre_Espace_css_1.SObjetFenetre_Espace.Fenetre_Titre,
          },
          IE.jsx.str('h1', {
            id: this.IdTitre,
            class: this.optionsFenetre.avecDeplacementSurBandeau
              ? Divers_css_1.SD.AvecMove
              : '',
            ie_draggable: this.optionsFenetre.avecDeplacementSurBandeau
              ? this.getDragFenetre.bind(this)
              : false,
            ie_html: this._getTitreFenetre.bind(this),
            tabindex: '-1',
          }),
          this._construireBtnFermer(),
        );
      }
      construireStructureAffichageAutre() {
        if (IE.estMobile) {
          return super.construireStructureAffichageAutre();
        }
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            FocusTrap_1.FocusTrap,
            { nodeQuiPrendFocusSiAucunElementFocusable: this.IdTitre },
            IE.jsx.str('div', {
              id: this.NomFenetre,
              ie_node: this.jsxNodeCreationNodeFenetre.bind(this),
              role: this.optionsFenetre.roleWAI || 'dialog',
              'aria-modal': 'true',
              ie_attr: this.jsxFuncAttrConteneur.bind(this),
            }),
          ),
        );
      }
      jsxFuncAttrConteneur() {
        const lEstAffiche = this.estAffiche();
        return {
          'aria-labelledby':
            lEstAffiche &&
            (this.optionsFenetre.avecTitre ||
              this.optionsFenetre.avecBandeauFiche)
              ? this.IdTitre
              : null,
          'aria-describedby':
            lEstAffiche && this.optionsFenetre.avecAriaDescribedByContenu
              ? this.idCorpsContenu
              : null,
        };
      }
      surPreAffichage() {}
      surAfficher() {
        if (this.surPreAffichage) {
          this.surPreAffichage();
        }
        if (!IE.estMobile) {
          this.positionnerFenetre(this._parametresAffichageFiche);
        }
      }
      actualiser(...aParams) {
        if (IE.estMobile) {
          return this.afficher();
        }
        return this.afficher(this.idCours);
      }
      afficher(aIdCours, aLeft, aTop) {
        if (IE.estMobile) {
          return super.afficher(this.compose());
        }
        return this.afficherFiche({
          id: aIdCours,
          left: aLeft,
          top: aTop,
          positionSurSouris: true,
          positionSurSourisSiAffiche: false,
        });
      }
      async afficherFiche(aParametres) {
        if (IE.estMobile) {
          return this.afficher();
        }
        this._parametresAffichageFiche = $.extend(
          {
            enAffichage: this.EnAffichage,
            left: undefined,
            top: undefined,
            id: undefined,
            positionSurSouris: false,
            positionSurSourisSiAffiche: false,
            centrerParDefaut: false,
          },
          aParametres,
        );
        if (this.EnAffichage) {
          if (this.destructionSurFermeture === true) {
            this._parametresAffichageFiche.enAffichage = false;
            this.EnAffichage = false;
            ObjetHtml_1.GHtml.setHtml(this.NomFenetre, '');
          } else {
            await this.fermer(false);
          }
        }
        this.idCours = this._parametresAffichageFiche.id;
        const lProm = super.afficher(this.compose());
        if (!this.optionsFenetre.bloquerFocus) {
          this.focusSurPremierElement();
        }
        if (this.surAfficher) {
          this.surAfficher();
        }
        return await lProm;
      }
      async fermer(aSurInteractionUtilisateur) {
        const lEstEnAffichage = this.EnAffichage;
        await super.fermer();
        if (
          lEstEnAffichage &&
          !this._estDetruite &&
          aSurInteractionUtilisateur !== false
        ) {
          this.callback.appel();
        }
        if (!this._estDetruite && !IE.estMobile) {
          ObjetHtml_1.GHtml.setHtml(this.NomFenetre, '');
        }
      }
      surValidation(aNumeroBouton) {
        if (!IE.estMobile) {
          this.fermer();
        } else {
          super.surValidation(aNumeroBouton);
        }
      }
      _construireBtnFermer() {
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            'div',
            {
              class:
                ObjetFenetre_Espace_css_1.SObjetFenetre_Espace.ctaConteneur,
            },
            IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
              class: [
                IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImageIcon,
                ObjetFenetre_Espace_css_1.SObjetFenetre_Espace.asButton,
                fonts_css_1.SF.icon_fermeture_widget,
              ],
              ie_model: this.jsxModeleBoutonCroixFermeture.bind(this),
              title: 'Fermer',
            }),
            this.construireBtnDeplacer(
              ObjetFenetre_Espace_css_1.SObjetFenetre_Espace.asButton,
            ),
          ),
        );
      }
    }
    exports.ObjetFiche = ObjetFiche;
  },
  fn: 'objetfiche.js',
});