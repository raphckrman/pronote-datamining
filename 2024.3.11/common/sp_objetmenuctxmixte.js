IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetMenuCtxMixte = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetMenuContextuel_1 = require('ObjetMenuContextuel');
    const Enumere_MenuCtxModeMixte_1 = require('Enumere_MenuCtxModeMixte');
    const ObjetHtml_1 = require('ObjetHtml');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetPosition_1 = require('ObjetPosition');
    const ObjetTraduction_1 = require('ObjetTraduction');
    require('ObjetMenuCtxMixte.css');
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
        const H = [];
        H.push('<div class="ObjetMenuCtxMixte">');
        lListeBtn.parcourir((D, aIndex) => {
          H.push(
            '<ie-bouton ',
            ObjetHtml_1.GHtml.composeAttr('ie-model', 'cmdMenuCtxMixte', [
              Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.bouton,
              aIndex,
            ]),
            ' class="eltBouton themeBoutonPrimaire">',
            D.getLibelle(),
            '</ie-bouton>',
          );
        });
        lListeIcones.parcourir((D, aIndex) => {
          H.push(
            '<ie-btnicon ',
            ObjetHtml_1.GHtml.composeAttr('ie-model', 'cmdMenuCtxMixte', [
              Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
              aIndex,
            ]),
            ' class="avecFond ',
            D.icon,
            '" title="',
            D.getLibelle(),
            '"></ie-btnicon>',
          );
        });
        if (lListeEllipsis.count() > 0 && this.options.avecBoutonEllipsis) {
          H.push(
            IE.jsx.str('ie-btnicon', {
              'ie-model': 'cmdEllipsis',
              class: 'icon_ellipsis_vertical',
              title:
                'Cliquer pour déployer les actions',
            }),
          );
        }
        H.push('</div>');
        return H.join('');
      }
      actualiser() {
        return this.afficher();
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