IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GTraductions = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    require('Divers.js');
    const trad = require('traductions.js');
    class ObjetTraduction {
      getValeur(aNom, aTableauRemplacements) {
        return this._getValeur(aNom, aTableauRemplacements);
      }
      getTabValeurs(aNom) {
        const lVal = this._getValeur(aNom);
        if (Array.isArray(lVal)) {
          return lVal;
        }
        return lVal;
      }
      hasTabValeurs(aNom) {
        let lValeur = MethodesObjet_1.MethodesObjet.get(this, aNom);
        return !!lValeur && Array.isArray(lValeur);
      }
      getTitreMFiche(aIdRessource) {
        const lChaine = this.getValeur(aIdRessource);
        if (lChaine !== '' && typeof lChaine === 'string') {
          const lJson = JSON.parse(lChaine);
          if (lJson && lJson.titre) {
            return lJson.titre;
          } else {
          }
        } else {
        }
      }
      _getValeur(aNom, aTableauRemplacements) {
        let lValeur = MethodesObjet_1.MethodesObjet.get(this, aNom);
        if (!lValeur && !MethodesObjet_1.MethodesObjet.isString(lValeur)) {
          return lValeur || '';
        }
        if (aTableauRemplacements) {
          if (typeof lValeur === 'string') {
            lValeur = lValeur.format(aTableauRemplacements);
          } else {
          }
        }
        return lValeur;
      }
      add(aNom, aValeur, aAccepteTableau) {
        try {
          let lNomDernierNoeud = aNom;
          let lObjet = this;
          if (aNom.indexOf('.') > 0) {
            const T = aNom.split('.');
            for (let J = 0; J < T.length - 1; J++) {
              const lProp = aNom.split('.')[J];
              if (!lObjet[lProp]) {
                lObjet[lProp] = new ObjetTraduction();
              }
              lObjet = lObjet[lProp];
            }
            if (T.length > 0) {
              lNomDernierNoeud = aNom.split('.')[T.length - 1];
            }
          }
          if (MethodesObjet_1.MethodesObjet.isString(lObjet)) {
            return;
          }
          if (lObjet[lNomDernierNoeud] || lObjet[lNomDernierNoeud] === '') {
            if (
              MethodesObjet_1.MethodesObjet.isString(lObjet[lNomDernierNoeud])
            ) {
              lObjet[lNomDernierNoeud] = [lObjet[lNomDernierNoeud]];
            }
            lObjet[lNomDernierNoeud].push(aValeur || '');
          } else {
            lObjet[lNomDernierNoeud] = aValeur || '';
          }
        } catch (e) {}
      }
      _passerEnCleDeTraductionsDEBUG(aChaine) {}
    }
    const GTraductions = new ObjetTraduction();
    exports.GTraductions = GTraductions;
    if (trad) {
      const lFunc = function (aNom, aValeur, aAccepteTableau) {
        GTraductions.add(aNom, aValeur, aAccepteTableau);
      };
      trad(lFunc);
    }
  },
  fn: 'objettraduction.js',
});