IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_ActionContextuelle = void 0;
    const ObjetFenetre_1 = require('ObjetFenetre');
    const tag_1 = require('tag');
    const MethodesObjet_1 = require('MethodesObjet');
    const SelecFile_1 = require('SelecFile');
    const ObjetTraduction_1 = require('ObjetTraduction');
    require('ObjetFenetre_ActionContextuelle.css');
    class ObjetFenetre_ActionContextuelle extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          modale: false,
          largeur: 380,
          hauteur: 200,
          fermerFenetreSurClicHorsFenetre: true,
          titre: 'Insérer une pièce jointe',
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
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          action: {
            event: function (aIndice) {
              if (!!aInstance.actions[aIndice].event) {
                if (!aInstance.actions[aIndice].selecFile) {
                  aInstance.fermer();
                  aInstance.actions[aIndice].event();
                }
              } else {
              }
            },
            getOptionsSelecFile: function (aIndice) {
              return aInstance.actions[aIndice].optionsSelecFile;
            },
            addFiles: function (aIndice, aParams) {
              aInstance.fermer();
              aInstance.actions[aIndice].event.call(aInstance, aParams);
            },
          },
        });
      }
      setDonnees(aTabActions) {
        this.actions = aTabActions;
        this.afficher(this.composeContenu());
      }
      composeContenu() {
        return this.actions
          ? '<div class="fenetre-actionContextuelle"><div class="btas-wrapper cnt-' +
              this.actions.length +
              '">' +
              this._construireActions() +
              '</div></div>'
          : '';
      }
      _construireActions() {
        const H = [];
        if (!!this.actions && this.actions.length) {
          this.actions.forEach((aActions, i) => {
            if (!!aActions.icon) {
              H.push(
                (0, tag_1.tag)(
                  'div',
                  { class: 'bta-contain' },
                  (0, tag_1.tag)('ie-btnicon', {
                    class:
                      'bt-activable bt-big ' +
                      aActions.icon +
                      (!!aActions.class ? ' ' + aActions.class : ''),
                    title: aActions.libelle || '',
                    'ie-model': 'action(' + i + ')',
                    'ie-selecFile': !!aActions.selecFile,
                  }),
                  aActions.libelle
                    ? (0, tag_1.tag)('label', aActions.libelle)
                    : '',
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