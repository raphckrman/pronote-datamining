IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ModaleBottomSheet = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    let u_nbFenetreClavier_EnCours = 0;
    class ModaleBottomSheet extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({ evntSurCloseStart: null });
        this.ids = { modale: GUID_1.GUID.getId() };
      }
      setOptions(aOptions) {
        $.extend(true, this.options, aOptions);
        return this;
      }
      afficher() {
        this.fermer();
        this._fenetreClavier = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_1.ObjetFenetre,
          {
            pere: this,
            initialiser: (aFenetre) => {
              aFenetre.setOptionsFenetre({
                fermerFenetreSurClicHorsFenetre: true,
                avecTailleSelonContenuMobile: true,
                listeBoutons: [],
                avecCroixFermetureMobile: false,
                sansPaddingContenu: true,
                avecAnimationOuverture: u_nbFenetreClavier_EnCours === 0,
                callbackFermer: () => {
                  this._fenetreClavier.setOptionsFenetre({
                    avecAnimationFermeture: u_nbFenetreClavier_EnCours === 1,
                  });
                  if (
                    MethodesObjet_1.MethodesObjet.isFunction(
                      this.options.evntSurCloseStart,
                    )
                  ) {
                    this.options.evntSurCloseStart();
                  }
                },
                callbackApresFermer: () => {
                  this._fenetreClavier = null;
                  u_nbFenetreClavier_EnCours -= 1;
                },
              });
            },
          },
        );
        u_nbFenetreClavier_EnCours += 1;
        this._fenetreClavier.afficher(this.getHtmlContenu());
      }
      fermer() {
        if (this._fenetreClavier) {
          this._fenetreClavier.fermer();
          this._fenetreClavier = null;
        }
      }
      getHtmlContenu() {
        return '';
      }
    }
    exports.ModaleBottomSheet = ModaleBottomSheet;
  },
  fn: 'modalebottomsheet.js',
});