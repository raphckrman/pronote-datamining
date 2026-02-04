IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MethodesTableau = MethodesTableau;
    require('DeclarationExtensionsObjetNatif');
    function MethodesTableau() {}
    MethodesTableau.intersection = function (aTableau1, aTableau2) {
      if (aTableau1 && aTableau1.filter) {
        return aTableau1.filter((aElement) => {
          return aTableau2.indexOf(aElement) !== -1;
        });
      }
      let lResult = [];
      for (let i = 0; i < aTableau1.length; i++) {
        if (aTableau2.includes(aTableau1[i])) {
          lResult.push(aTableau1[i]);
        }
      }
      return lResult;
    };
    MethodesTableau.existeIntersection = function (aTableau1, aTableau2) {
      return MethodesTableau.intersection(aTableau1, aTableau2).length > 0;
    };
    function _everyInclus(aTableauCompare, aElement) {
      return aTableauCompare.indexOf(aElement) !== -1;
    }
    MethodesTableau.inclus = function (aTableau1, aTableau2) {
      if (!Array.isArray(aTableau1) || !Array.isArray(aTableau2)) {
        return false;
      }
      if (aTableau1.every) {
        return !!aTableau1.every(_everyInclus.bind(this, aTableau2));
      }
      for (let I = 0; I < aTableau1.length; I++) {
        if (!_everyInclus(aTableau2, aTableau1[I])) {
          return false;
        }
      }
      return true;
    };
    MethodesTableau.insererElement = function (aValeur, aTableau, aIndex) {
      if (!Array.isArray(aTableau)) {
        return false;
      }
      if (aIndex >= 0) {
        const T = aTableau.slice(aIndex);
        aTableau.length = aIndex;
        aTableau.push(aValeur);
        Array.prototype.push.apply(aTableau, T);
      } else {
        aTableau.push(aValeur);
      }
    };
    MethodesTableau.supprimerElement = function (aTableau, aIndex) {
      aTableau.splice(aIndex, 1);
    };
    MethodesTableau.supprimerTabIndex = function (aTableau, aTabIndexSuppr) {
      if (aTabIndexSuppr && Array.isArray(aTabIndexSuppr)) {
        [...aTabIndexSuppr]
          .sort((a, b) => a - b)
          .reverse()
          .forEach((aIndiceSuppr) => {
            if (aIndiceSuppr >= 0) {
              aTableau.splice(aIndiceSuppr, 1);
            }
          });
      }
    };
    MethodesTableau.remove = function (aTableau, aElement) {
      let lIndex = aTableau.indexOf(aElement);
      let lResult = false;
      while (lIndex >= 0) {
        aTableau.splice(lIndex, 1);
        lResult = true;
        lIndex = aTableau.indexOf(aElement);
      }
      return lResult;
    };
    MethodesTableau.nombreElements = function (aTableau) {
      let lNombre = 0;
      for (let i = 0; i < aTableau.length; i++) {
        let lElement = aTableau[i];
        if (lElement !== null || lElement !== undefined) {
          lNombre++;
        }
      }
      return lNombre;
    };
    MethodesTableau.binaryIndexOf = function (aArray, aIndex) {
      if (!Array.isArray(aArray)) {
        return -1;
      }
      let lMinIndex = 0;
      let lMaxIndex = aArray.length - 1;
      let lIndexCourant;
      let lElementCourant;
      while (lMinIndex <= lMaxIndex) {
        lIndexCourant = ((lMinIndex + lMaxIndex) / 2) | 0;
        lElementCourant = aArray[lIndexCourant];
        if (lElementCourant < aIndex) {
          lMinIndex = lIndexCourant + 1;
        } else if (lElementCourant > aIndex) {
          lMaxIndex = lIndexCourant - 1;
        } else {
          return lIndexCourant;
        }
      }
      return -1;
    };
    MethodesTableau.indexOfMask = function (aArray, aMask) {
      let lIndice = -1;
      if (!Array.isArray(aArray)) {
        return lIndice;
      }
      if (!aMask || aArray.length === 0) {
        return lIndice;
      }
      try {
        const lKeys = Object.keys(aMask);
        if (lKeys.length > 0) {
          aArray.every((aElement, aIndice) => {
            let lTrouve = true;
            lKeys.every((aKey) => {
              if (
                aElement &&
                aKey in aMask &&
                aKey in aElement &&
                aMask[aKey] === aElement[aKey]
              ) {
                return true;
              }
              lTrouve = false;
              return false;
            });
            if (lTrouve) {
              lIndice = aIndice;
            }
            return lIndice < 0;
          });
        }
      } catch (e) {
        lIndice = -1;
      }
      return lIndice;
    };
  },
  fn: 'methodestableau.js',
});