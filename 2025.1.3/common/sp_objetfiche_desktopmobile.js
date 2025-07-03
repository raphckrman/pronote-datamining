IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFiche_DesktopMobile = void 0;
    const ObjetFenetre_1 = require('ObjetFenetre');
    class ObjetFiche_DesktopMobile extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
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
        });
      }
      compose() {
        return IE.jsx.str(
          'div',
          { tabindex: '-1', id: this.idContenu },
          this.optionsFenetre.htmlContenu || this.composeContenu(),
        );
      }
      surPreAffichage() {}
      surAfficher() {
        if (this.surPreAffichage) {
          this.surPreAffichage();
        }
      }
      actualiser(...aParams) {
        return this.afficher();
      }
      afficher(AIdCours, aLeft, aTop) {
        return super.afficher(this.compose());
      }
      afficherFiche(aParams) {
        return this.afficher();
      }
      fermer(aSurInteractionUtilisateur) {
        const lEstEnAffichage = this.EnAffichage;
        const lProm = super.fermer();
        if (lEstEnAffichage) {
          const LSurInteractionUtilisateur =
            aSurInteractionUtilisateur === null ||
            aSurInteractionUtilisateur === undefined
              ? true
              : aSurInteractionUtilisateur;
          if (LSurInteractionUtilisateur) {
            this.callback.appel();
          }
        }
        return lProm;
      }
    }
    exports.ObjetFiche_DesktopMobile = ObjetFiche_DesktopMobile;
  },
  fn: 'objetfiche_desktopmobile.js',
});