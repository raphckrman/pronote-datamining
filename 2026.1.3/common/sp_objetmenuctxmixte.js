IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetMenuCtxMixte = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const ObjetMenuContextuel_1 = require('@cp/Produit/Script/ObjetMenuContextuel');
    const Enumere_MenuCtxModeMixte_1 = require('@cp/Produit/Script/Enumere/Enumere_MenuCtxModeMixte');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    require('@cp/Produit/Css/ObjetMenuCtxMixte.css');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const IconeSvgEllipsis_vertical_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEllipsis_vertical');
    class ObjetMenuCtxMixte extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
        this.menuContextuel =
          ObjetMenuContextuel_1.ObjetMenuContextuel.createSpecialMixte({
            pere: this,
          });
        this.setOptions({
          callbackAddCommandes: null,
          avecBoutonEllipsis: true,
        });
      }
      jsxModeleBoutonEllipsis() {
        return {
          event: (aEvent, aNode) => {
            const lPosBtn = ObjetPosition_1.GPosition.getClientRect(aNode);
            this.menuContextuel.afficher({
              x: lPosBtn.left,
              y: lPosBtn.bottom + 10,
            });
          },
        };
      }
      jsxModeleBoutonContexteMixte(aGenre, aIndex) {
        return {
          event: () => {
            const lCmd = this._getListeCmdDeGenre(aGenre).get(aIndex);
            if (
              lCmd &&
              MethodesObjet_1.MethodesObjet.isFunction(lCmd.callbackValidation)
            ) {
              lCmd.callbackValidation.call(this.Pere || this, lCmd);
            } else {
              this.callback.appel(lCmd);
            }
          },
          getDisabled: () => {
            const lCmd = this._getListeCmdDeGenre(aGenre).get(aIndex);
            return !lCmd.actif;
          },
        };
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
        if (!ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
          return '';
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
                  IEHtml_Bouton_1.Bouton,
                  {
                    ie_model: this.jsxModeleBoutonContexteMixte.bind(
                      this,
                      Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.bouton,
                      aIndex,
                    ),
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
                IE.jsx.str(
                  IEHtml_BtnImage_1.BtnIcon,
                  {
                    ie_model: this.jsxModeleBoutonContexteMixte.bind(
                      this,
                      Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                      aIndex,
                    ),
                    class: ['bt-activable', 'bt-large'],
                    title: D.getLibelle(),
                    'aria-haspopup': D.ariaHasPopup || false,
                  },
                  D.iconeSvg,
                ),
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
                IE.jsx.str(
                  IEHtml_BtnImage_1.BtnIcon,
                  {
                    ie_model: this.jsxModeleBoutonEllipsis.bind(this),
                    title: GlossaireListe_1.TradGlossaireListe.BtnAction,
                    'aria-haspopup': 'menu',
                    ie_attr: lGetAttrEllipsis,
                  },
                  IE.jsx.str(
                    IconeSvgEllipsis_vertical_1.IconeSvgEllipsis_vertical,
                    null,
                  ),
                ),
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