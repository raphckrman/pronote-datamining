IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_ActionContextuelle = void 0;
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const SelecFile_1 = require('@cp/Produit/Script/SelecFile');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    require('@cp/Produit/Css/ObjetFenetre_ActionContextuelle.css');
    class ObjetFenetre_ActionContextuelle extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          modale: false,
          largeur: 380,
          hauteur: 200,
          avecTailleSelonContenuMobile: true,
          fermerFenetreSurClicHorsFenetre: true,
          titre: 'Ajouter une pièce jointe',
        });
      }
      static ouvrir(aTabActions, aParam) {
        var _a;
        if (
          aTabActions &&
          aTabActions.length === 1 &&
          aTabActions[0].selecFile === true
        ) {
          const [lAction] = aTabActions;
          SelecFile_1.SelecFile.select(lAction.optionsSelecFile).then(
            (aResult) => {
              var _a;
              if (aResult) {
                (_a =
                  lAction === null || lAction === void 0
                    ? void 0
                    : lAction.event) === null || _a === void 0
                  ? void 0
                  : _a.call(lAction, aResult);
              }
            },
          );
        } else {
          if (!aParam) {
            return;
          }
          ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
            ObjetFenetre_ActionContextuelle,
            {
              pere: (_a = aParam.pere) !== null && _a !== void 0 ? _a : {},
              initialiser: function (aInstance) {
                if (
                  MethodesObjet_1.MethodesObjet.isObject(aParam.optionsFenetre)
                ) {
                  aInstance.setOptionsFenetre(aParam.optionsFenetre);
                }
              },
            },
          ).setDonnees(aTabActions);
        }
      }
      setDonnees(aTabActions) {
        this.actions = aTabActions;
        this.afficher(this.composeContenu());
      }
      composeContenu() {
        return this.actions
          ? IE.jsx.str(
              'div',
              { class: 'fenetre-actionContextuelle' },
              IE.jsx.str(
                'ul',
                { class: ['btas-wrapper', 'cnt-' + this.actions.length] },
                this._construireActions(),
              ),
            )
          : '';
      }
      jsxModeleBoutonAction(aIndice) {
        return {
          event: () => {
            if (!!this.actions[aIndice].event) {
              if (!this.actions[aIndice].selecFile) {
                this.fermer();
                this.actions[aIndice].event();
              }
            } else {
            }
          },
          getOptionsSelecFile: () => {
            return this.actions[aIndice].optionsSelecFile;
          },
          addFiles: (aParams) => {
            var _a;
            this.fermer();
            (_a = this.actions[aIndice].event) === null || _a === void 0
              ? void 0
              : _a.call(this, aParams);
          },
        };
      }
      _construireActions() {
        const H = [];
        if (!!this.actions && this.actions.length) {
          this.actions.forEach((aActions, i) => {
            if (!!aActions.iconSvg) {
              const lClassesBtn = ['bt-activable', 'bt-big'];
              let lLibelle = '';
              if (aActions.libelle) {
                lLibelle = IE.jsx.str('label', null, aActions.libelle);
              }
              H.push(
                IE.jsx.str(
                  'li',
                  { class: 'bta-contain' },
                  IE.jsx.str(
                    IEHtml_BtnImage_1.BtnIcon,
                    {
                      class: lClassesBtn.join(' '),
                      title: aActions.libelle || '',
                      ie_model: this.jsxModeleBoutonAction.bind(this, i),
                      ie_selecfile: !!aActions.selecFile,
                      'aria-haspopup': 'dialog',
                    },
                    aActions.iconSvg,
                  ),
                  lLibelle,
                ),
              );
            }
          });
        }
        return H.join('');
      }
    }
    exports.ObjetFenetre_ActionContextuelle = ObjetFenetre_ActionContextuelle;
  },
  fn: 'objetfenetre_actioncontextuelle.js',
});