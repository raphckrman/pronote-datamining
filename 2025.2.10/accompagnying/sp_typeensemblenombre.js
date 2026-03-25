IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeEnsembleNombre = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const MethodesTableau_1 = require('MethodesTableau');
    const Enumere_ChampsJSON_1 = require('Enumere_ChampsJSON');
    const TypeHttpVariable_1 = require('TypeHttpVariable');
    class TypeEnsembleNombre {
      constructor(aValeur) {
        this._set = new Set();
        this._cacheItems = null;
        this.clear();
        if (aValeur !== undefined) {
          this.add(aValeur);
        }
      }
      clear() {
        this._set = new Set();
        this._cacheItems = null;
        return this;
      }
      add(aValeur) {
        this._cacheItems = null;
        if (typeof aValeur === 'number') {
          this._set.add(aValeur);
        } else if (aValeur instanceof TypeEnsembleNombre) {
          aValeur.items().forEach((aVal) => {
            this._set.add(aVal);
          });
        } else if (MethodesObjet_1.MethodesObjet.isArray(aValeur)) {
          aValeur.forEach((aVal) => {
            if (typeof aVal === 'number') {
              this._set.add(aVal);
            }
          });
        }
        return this;
      }
      remove(aValeur) {
        this._cacheItems = null;
        if (typeof aValeur === 'number') {
          this._set.delete(aValeur);
        } else if (aValeur instanceof TypeEnsembleNombre) {
          aValeur.items().forEach((aVal) => {
            this._set.delete(aVal);
          });
        } else if (MethodesObjet_1.MethodesObjet.isArray(aValeur)) {
          aValeur.forEach((aVal) => {
            this._set.delete(aVal);
          });
        }
        return this;
      }
      contains(aValeur) {
        if (typeof aValeur === 'number') {
          return this._set.has(aValeur);
        }
        let lItems = null;
        if (aValeur instanceof TypeEnsembleNombre) {
          lItems = aValeur.items();
        } else if (MethodesObjet_1.MethodesObjet.isArray(aValeur)) {
          lItems = aValeur;
        }
        if (lItems) {
          if (lItems.length === 0) {
            return false;
          }
          return lItems.every((aVal) => {
            return this._set.has(aVal);
          });
        }
        return false;
      }
      intersect(aValeur) {
        const lSet = new Set();
        this._cacheItems = null;
        let lItems = null;
        if (aValeur instanceof TypeEnsembleNombre) {
          lItems = aValeur.items();
        } else if (MethodesObjet_1.MethodesObjet.isArray(aValeur)) {
          lItems = aValeur;
        } else {
        }
        if (lItems) {
          lItems.forEach((aVal) => {
            if (this._set.has(aVal)) {
              lSet.add(aVal);
            }
          });
          this._set = lSet;
        }
        return this;
      }
      get(aIndex) {
        const lItems = this.items();
        if (
          aIndex < 0 ||
          aIndex > lItems.length ||
          !MethodesObjet_1.MethodesObjet.isNumber(aIndex)
        ) {
          return null;
        }
        return lItems[aIndex];
      }
      indexOf(aValeur) {
        if (!this._set.has(aValeur)) {
          return -1;
        }
        return MethodesTableau_1.MethodesTableau.binaryIndexOf(
          this.items(),
          aValeur,
        );
      }
      items() {
        if (!this._cacheItems) {
          this._cacheItems = [];
          for (const lVal of this._set.values()) {
            this._cacheItems.push(lVal);
          }
          this._cacheItems.sort(_sort);
        }
        return this._cacheItems;
      }
      count() {
        return this._set.size;
      }
      each(aMethode, thisArg) {
        this.items().forEach((aItem, aIndex) => {
          aMethode.call(thisArg, aItem, aIndex);
        });
        return this;
      }
      dupliquer() {
        return new TypeEnsembleNombre(this);
      }
      toString() {
        let lResult = '',
          lNbDeSuite = 0,
          lValeur,
          lItems = this.items();
        for (let lIx = 1; lIx <= lItems.length; lIx++) {
          lValeur = lItems[lIx];
          if (lItems.length > lIx && lValeur === lItems[lIx - 1] + 1) {
            lNbDeSuite++;
          } else {
            if (lResult.length > 0) {
              lResult += ',';
            }
            if (lNbDeSuite > 0) {
              lResult += lItems[lIx - 1 - lNbDeSuite] + '..';
            }
            lResult += lItems[lIx - 1];
            lNbDeSuite = 0;
          }
        }
        return '[' + lResult + ']';
      }
      fromString(aChaine) {
        if (!aChaine || !aChaine.length || aChaine.length < 2) {
          return this;
        }
        aChaine = aChaine.substring(1, aChaine.length - 1);
        const T1 = aChaine.split(',');
        let T2, V1, V2;
        for (let I = 0; I < T1.length; I++) {
          T2 = T1[I].split('..');
          V1 = parseInt(T2[0], 10);
          V2 = parseInt(T2.length === 1 ? T2[0] : T2[1], 10);
          for (let J = V1; J <= V2; J++) {
            this._set.add(J);
          }
        }
        return this;
      }
      toJSON() {
        const lJSON = {};
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type] =
          TypeHttpVariable_1.TypeHttpVariable.TypeHttpEnsembleNombre;
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur] = this.toString();
        return lJSON;
      }
    }
    exports.TypeEnsembleNombre = TypeEnsembleNombre;
    function _sort(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
  },
  fn: 'typeensemblenombre.js',
});