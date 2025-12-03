IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetIndexsUnique = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    class ObjetIndexsUnique {
      constructor() {
        this._indexsUnique = [];
      }
      ajouterIndex(aChamps) {
        if (
          !MethodesObjet_1.MethodesObjet.isArray(aChamps) &&
          !MethodesObjet_1.MethodesObjet.isString(aChamps)
        ) {
          return this;
        }
        if (!this._indexsUnique) {
          this._indexsUnique = [];
        }
        const lChamps = [];
        let lChampIndexCalcul;
        if (!Array.isArray(aChamps)) {
          aChamps = [aChamps];
        }
        for (let i = 0; i < aChamps.length; i++) {
          const lChampIndex = aChamps[i];
          if (
            typeof lChampIndex === 'string' ||
            typeof lChampIndex === 'function'
          ) {
            lChampIndexCalcul = ObjetIndexsUnique.ajouterChamp(lChampIndex);
          } else {
            lChampIndexCalcul = lChampIndex;
          }
          lChamps.push(lChampIndexCalcul);
        }
        this._indexsUnique.push(lChamps);
        return this;
      }
      estDoublon(a, b) {
        for (let i = 0; i < this._indexsUnique.length; i++) {
          if (this._estDoublonComparaisonET(this._indexsUnique[i], a, b)) {
            return true;
          }
        }
        return false;
      }
      estDoublonDansTableau(aElement, aTableau) {
        for (const i in aTableau) {
          if (this.estDoublon(aElement, aTableau[i])) {
            return true;
          }
        }
        return false;
      }
      existeIndex() {
        return this._indexsUnique.length > 0;
      }
      _estDoublonComparaisonET(aIndexUnique, a, b) {
        let lResult = false;
        for (let i = 0; i < aIndexUnique.length; i++) {
          if (aIndexUnique[i]) {
            if (this._comparateurChampIndex(aIndexUnique[i], a, b)) {
              lResult = true;
            } else {
              return false;
            }
          }
        }
        return lResult;
      }
      _comparateurChampIndex(aChampIndex, a, b) {
        if (!aChampIndex || !aChampIndex.valeur) {
          return false;
        }
        if (!a || !b) {
          return false;
        }
        let lValeurA;
        let lValeurB;
        if (aChampIndex.estFonction) {
          lValeurA = aChampIndex.valeur(a);
          lValeurB = aChampIndex.valeur(b);
        } else if (aChampIndex.estAccesseurChaine) {
          lValeurA = MethodesObjet_1.MethodesObjet.get(a, aChampIndex.valeur);
          lValeurB = MethodesObjet_1.MethodesObjet.get(b, aChampIndex.valeur);
        } else {
          lValeurA = a[aChampIndex.valeur];
          lValeurB = b[aChampIndex.valeur];
        }
        if (lValeurA && lValeurA.getTime) {
          lValeurA = lValeurA.getTime();
        }
        if (lValeurB && lValeurB.getTime) {
          lValeurB = lValeurB.getTime();
        }
        if (aChampIndex.sensibleCasse !== true) {
          if (lValeurA && lValeurA.toLowerCase) {
            lValeurA = lValeurA.toLowerCase();
          }
          if (lValeurB && lValeurB.toLowerCase) {
            lValeurB = lValeurB.toLowerCase();
          }
        }
        if (
          lValeurA === lValeurB &&
          (lValeurA === '' || lValeurA === undefined || lValeurA === null)
        ) {
          return !!aChampIndex.videEstDoublon;
        } else {
          return lValeurA === lValeurB;
        }
      }
      static ajouterChamp(aValeur, aVideEstDoublon, aSensibleCasse) {
        return {
          valeur: aValeur,
          videEstDoublon: !!aVideEstDoublon,
          sensibleCasse: !!aSensibleCasse,
          estFonction: MethodesObjet_1.MethodesObjet.isFunction(aValeur),
          estAccesseurChaine:
            MethodesObjet_1.MethodesObjet.isString(aValeur) &&
            aValeur.indexOf('.') >= 0,
        };
      }
    }
    exports.ObjetIndexsUnique = ObjetIndexsUnique;
  },
  fn: 'objetindexsunique.js',
});