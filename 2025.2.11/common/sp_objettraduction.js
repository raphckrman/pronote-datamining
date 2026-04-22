IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GTraductions = exports.TraductionsModule = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    require('Divers');
    const DeclarationTraductions = require('traductions');
    const AccessApp_1 = require('AccessApp');
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
          if (typeof aValeur === 'function') {
            aValeur.call(this, aNom);
            return;
          }
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
      getModule(aNomModule) {
        const lObj = this[`$${aNomModule}`];
        return lObj;
      }
      _passerEnCleDeTraductionsDEBUG(aChaine) {}
    }
    class TraductionsModule {
      static getModule(aNomModule, aModele) {
        const lObj = Traductions[`$${aNomModule}`];
        if (!lObj) {
          return aModele;
        }
        TraductionsModule.populate(lObj, aModele, aNomModule);
        return lObj;
      }
      static format(aTrad, aFormat) {
        var _a;
        return (
          ((_a = aTrad === null || aTrad === void 0 ? void 0 : aTrad.format) ===
            null || _a === void 0
            ? void 0
            : _a.call(aTrad, aFormat)) || ''
        );
      }
      static populate(aTradDict, aModel, aNomModule) {
        for (const lKey of Object.keys(aModel)) {
          const lValModel = aModel[lKey];
          if (typeof lValModel === 'string') {
            if (typeof aTradDict[lKey] !== 'string') {
              aTradDict[lKey] = '';
            }
          } else if (typeof lValModel === 'number') {
            if (typeof aTradDict[lKey] !== 'number') {
              aTradDict[lKey] = '';
            }
          } else if (lValModel && Array.isArray(lValModel)) {
            if (!aTradDict[lKey]) {
              aTradDict[lKey] = lValModel;
            }
          } else if (lValModel && typeof lValModel === 'object') {
            if (!aTradDict[lKey]) {
              aTradDict[lKey] = {};
            }
            TraductionsModule.populate(aTradDict[lKey], lValModel, aNomModule);
          } else {
          }
        }
      }
    }
    exports.TraductionsModule = TraductionsModule;
    const Traductions = new ObjetTraduction();
    if (DeclarationTraductions && DeclarationTraductions.trad) {
      const lFunc = function (aNom, aValeur, aAccepteTableau) {
        Traductions.add(aNom, aValeur, aAccepteTableau);
      };
      DeclarationTraductions.trad(lFunc);
    }
    exports.GTraductions = Traductions;
  },
  fn: 'objettraduction.js',
});