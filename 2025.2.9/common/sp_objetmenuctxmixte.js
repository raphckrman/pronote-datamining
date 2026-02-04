IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetMenuCtxMixte = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetMenuContextuel_1 = require('ObjetMenuContextuel');
    const Enumere_MenuCtxModeMixte_1 = require('Enumere_MenuCtxModeMixte');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetPosition_1 = require('ObjetPosition');
    const ObjetTraduction_1 = require('ObjetTraduction');
    require('ObjetMenuCtxMixte.css');
    const jsx_1 = require('jsx');
    class ObjetMenuCtxMixte extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.menuContextuel = ObjetIdentite_1.Identite.creerInstance(
          ObjetMenuContextuel_1.ObjetMenuContextuel,
          { pere: this },
        );
        IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(
          this.menuContextuel.getNom(),
        );
        this.menuContextuel.setOptions({ estModeMixte: true });
        this.setOptions({
          callbackAddCommandes: null,
          avecBoutonEllipsis: true,
        });
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          cmdMenuCtxMixte: {
            event: function (aGenre, aIndex) {
              const lCmd = aInstance._getListeCmdDeGenre(aGenre).get(aIndex);
              if (
                lCmd &&
                MethodesObjet_1.MethodesObjet.isFunction(
                  lCmd.callbackValidation,
                )
              ) {
                lCmd.callbackValidation.call(aInstance.Pere || aInstance, lCmd);
              } else {
                aInstance.callback.appel(lCmd);
              }
            },
            getDisabled: function (aGenre, aIndex) {
              const lCmd = aInstance._getListeCmdDeGenre(aGenre).get(aIndex);
              return !lCmd.actif;
            },
          },
          cmdEllipsis: {
            event: function () {
              const lPosBtn = ObjetPosition_1.GPosition.getClientRect(
                this.node,
              );
              aInstance.menuContextuel.afficher({
                x: lPosBtn.left,
                y: lPosBtn.bottom + 10,
              });
            },
            getDisabled: function () {
              return false;
            },
          },
        });
      }
      construireAffichage() {
        if (
          this.options.callbackAddCommandes &&
          MethodesObjet_1.MethodesObjet.isFunction(
            this.options.callbackAddCommandes,
          )
        ) {
          this.menuContextuel.vider();
          this.options.callbackAddCommandes(this.menuContextuel);
        }
        const lListeBtn = this._getListeCmdDeGenre(
          Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.bouton,
        );
        const lListeIcones = this._getListeCmdDeGenre(
          Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
        );
        const lListeEllipsis = this._getListeCmdDeGenre(
          Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.ellipsis,
        );
        return IE.jsx.str('ul', { class: 'ObjetMenuCtxMixte' }, (H) => {
          lListeBtn.parcourir((D, aIndex) => {
            H.push(
              IE.jsx.str(
                'li',
                null,
                IE.jsx.str(
                  'ie-bouton',
                  {
                    'ie-model': (0, jsx_1.jsxFuncAttr)('cmdMenuCtxMixte', [
                      Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.bouton,
                      aIndex,
                    ]),
                    class: 'eltBouton themeBoutonPrimaire',
                    'aria-haspopup': D.ariaHasPopup || false,
                  },
                  D.getLibelle(),
                ),
              ),
            );
          });
          lListeIcones.parcourir((D, aIndex) => {
            H.push(
              IE.jsx.str(
                'li',
                null,
                IE.jsx.str('ie-btnicon', {
                  'ie-model': (0, jsx_1.jsxFuncAttr)('cmdMenuCtxMixte', [
                    Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                    aIndex,
                  ]),
                  class: ['avecFond ', D.icon],
                  title: D.getLibelle(),
                  'aria-haspopup': D.ariaHasPopup || false,
                }),
              ),
            );
          });
          if (lListeEllipsis.count() > 0 && this.options.avecBoutonEllipsis) {
            const lGetAttrEllipsis = () => {
              return {
                'aria-expanded': this.menuContextuel.getEstAfficher()
                  ? 'true'
                  : 'false',
              };
            };
            H.push(
              IE.jsx.str(
                'li',
                null,
                IE.jsx.str('ie-btnicon', {
                  'ie-model': 'cmdEllipsis',
                  class: 'icon_ellipsis_vertical',
                  title:
                    'Cliquer pour déployer les actions',
                  'aria-haspopup': 'menu',
                  'ie-attr': lGetAttrEllipsis,
                }),
              ),
            );
          }
        });
      }
      actualiser() {
        return this.afficher();
      }
      getMenuContextuel() {
        return this.menuContextuel;
      }
      _getListeCmdDeGenre(aGenre) {
        return this.menuContextuel.getListeLignes().getListeElements((D) => {
          if (
            aGenre === Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.ellipsis
          ) {
            return (
              D.typeAffEnModeMixte !==
              Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.bouton
            );
          }
          return D.typeAffEnModeMixte === aGenre;
        });
      }
    }
    exports.ObjetMenuCtxMixte = ObjetMenuCtxMixte;
  },
  fn: 'objetmenuctxmixte.js',
});