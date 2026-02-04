IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFiche_Espace = void 0;
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_1 = require('ObjetStyle');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetFiche_DesktopMobile_1 = require('ObjetFiche_DesktopMobile');
    const Divers_css_1 = require('Divers.css');
    class ObjetFiche_Espace extends ObjetFiche_DesktopMobile_1.ObjetFiche_DesktopMobile {
      constructor(...aParams) {
        super(...aParams);
        this.EnAffichage = false;
        this.NomFenetre = this.IdContenu;
        this.idContenu = this.Nom + '_ContenuFiche';
        this.IdPremierElement = this.idContenu;
        this.idCorpsContenu = this.Nom + '_corpsContenu';
        this.idBandeau = this.Nom + '_Bandeau';
        this.avecBandeau = true;
        this.avecDeplacementSurBandeau = true;
        this.avecDeplacementSurFiche = false;
        this.avecBoutonFermer = true;
        this.setOptionsFenetre({
          modale: false,
          largeur: null,
          hauteur: null,
          avecAbonnementBlocage: true,
          avecAbonnementPremierPlan: true,
          avecTailleSelonContenu: true,
          positionnerFenetreSurAfficher: false,
          conserverCoordonnees: false,
          htmlContenu: '',
          avecTitre: false,
          bloquerFocus: false,
        });
      }
      compose() {
        const lClasses = ['ObjetFenetre_Edition', 'content'];
        if (this.avecDeplacementSurFiche) {
          lClasses.push('AvecMove');
        }
        return IE.jsx.str(
          'div',
          {
            id: this.idContenu,
            class: [
              'ObjetFenetre_Espace',
              this.optionsFenetre.cssFenetre || '',
            ],
          },
          IE.jsx.str(
            'div',
            {
              class: 'Fenetre_Cadre ombre-cadre',
              style:
                ObjetStyle_1.GStyle.composeWidth(this.optionsFenetre.largeur) +
                ObjetStyle_1.GStyle.composeCouleurFond(
                  this.optionsFenetre.couleurFond,
                ),
            },
            this.avecBandeau
              ? IE.jsx.str(
                  'div',
                  { id: this.idBandeau, class: 'bandeau-header' },
                  this.composeBandeau(this.avecBoutonFermer),
                )
              : this.avecBoutonFermer
                ? IE.jsx.str(
                    'div',
                    { class: 'Fenetre_Titre sans-bandeau' },
                    this._construireBtnFermer(),
                  )
                : '',
            IE.jsx.str(
              'div',
              {
                id: this.idCorpsContenu,
                class: lClasses.join(' '),
                style: 'height:100%;',
                tabindex: '-1',
                'ie-draggable': this.avecDeplacementSurFiche
                  ? this.getDragFenetre.bind(this)
                  : '',
              },
              this.optionsFenetre.htmlContenu || this.composeContenu(),
            ),
          ),
        );
      }
      composeBandeau(AAvecBoutonFermer) {
        const lHtml = [];
        this.avecBoutonFermer = AAvecBoutonFermer;
        lHtml.push('<div class="Fenetre_Titre">');
        const lClassesTitre = [];
        if (this.avecDeplacementSurBandeau) {
          lClassesTitre.push('AvecMove');
        }
        lHtml.push(
          IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str('h1', {
              id: this.IdTitre,
              class: lClassesTitre.join(' '),
              'ie-draggable': this.avecDeplacementSurBandeau
                ? this.getDragFenetre.bind(this)
                : '',
              'ie-html': 'getTitre',
              tabindex: '-1',
            }),
          ),
        );
        if (AAvecBoutonFermer) {
          lHtml.push(this._construireBtnFermer());
        }
        lHtml.push('</div>');
        return lHtml.join('');
      }
      actualiser() {
        return this.afficher(this.idCours);
      }
      surAfficher() {
        if (this.surPreAffichage) {
          this.surPreAffichage();
        }
        this.positionnerFenetre(this._parametresAffichageFiche);
      }
      jsxFuncAttrConteneur() {
        const lEstAffiche = this.estAffiche();
        return {
          'aria-labelledby':
            lEstAffiche && (this.optionsFenetre.avecTitre || this.avecBandeau)
              ? this.IdTitre
              : null,
          'aria-describedby':
            lEstAffiche && this.optionsFenetre.avecAriaDescribedByContenu
              ? this.idCorpsContenu
              : null,
        };
      }
      construireStructureAffichageAutre() {
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str('span', {
            class: Divers_css_1.StylesDivers.srOnly,
            tabindex: '0',
            'ie-node': this.jsxNodeFocusSurPremierOuDernierElement.bind(
              this,
              true,
            ),
          }),
          IE.jsx.str('div', {
            id: this.NomFenetre,
            'ie-node': this.jsxNodeCreationNodeFenetre.bind(this),
            role: this.optionsFenetre.roleWAI || 'dialog',
            'aria-modal': 'true',
            'ie-attr': this.jsxFuncAttrConteneur.bind(this),
          }),
          IE.jsx.str('span', {
            class: Divers_css_1.StylesDivers.srOnly,
            tabindex: '0',
            'ie-node': this.jsxNodeFocusSurPremierOuDernierElement.bind(
              this,
              false,
            ),
          }),
        );
      }
      afficher(AIdCours, aLeft, aTop) {
        return this.afficherFiche({
          id: AIdCours,
          left: aLeft,
          top: aTop,
          positionSurSouris: true,
          positionSurSourisSiAffiche: false,
        });
      }
      afficherFiche(aParametres) {
        this._parametresAffichageFiche = $.extend(
          {
            enAffichage: this.EnAffichage,
            left: null,
            top: null,
            id: null,
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
            this.fermer(false);
          }
        }
        this.idCours = this._parametresAffichageFiche.id;
        const lProm = super.afficher();
        if (!this.optionsFenetre.bloquerFocus) {
          this.focusSurPremierElement();
        }
        if (this.surAfficher) {
          this.surAfficher();
        }
        return lProm;
      }
      fermer(aSurInteractionUtilisateur) {
        const lProm = super.fermer(aSurInteractionUtilisateur);
        ObjetHtml_1.GHtml.setHtml(this.NomFenetre, '');
        return lProm;
      }
      surValidation() {
        this.fermer();
      }
      _construireBtnFermer() {
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            'div',
            { class: 'cta-conteneur' },
            IE.jsx.str('ie-btnimage', {
              class: 'btnImageIcon as-button icon_fermeture_widget',
              'ie-model': this.jsxModeleBoutonCroixFermeture.bind(this),
              title: 'Fermer',
            }),
          ),
        );
      }
      estControleurOff() {
        return false;
      }
    }
    exports.ObjetFiche_Espace = ObjetFiche_Espace;
  },
  fn: 'objetfiche_espace.js',
});