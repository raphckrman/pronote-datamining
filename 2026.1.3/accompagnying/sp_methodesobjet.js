IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MethodesObjet = void 0;
    require('@librairies/script/Divers/NamespaceIE');
    require('@librairies/script/ExtensionsObjetsNatifs/DeclarationExtensionsObjetNatif');
    class MethodesObjet {
      static getObjectClass(aObjet) {
        if (aObjet && aObjet.constructor) {
          return MethodesObjet.getNomClassDeConstructeur(aObjet.constructor);
        }
        return undefined;
      }
      static dupliquer(aObjet, aDuplicationParesseuse) {
        return this._dupliquer(aObjet, 0, !!aDuplicationParesseuse, [], []);
      }
      static isArray(object) {
        return Array.isArray(object);
      }
      static isFunction(object) {
        return typeof object === 'function';
      }
      static isString(object) {
        return Object.prototype.toString.call(object) === '[object String]';
      }
      static isNumber(object) {
        return (
          !isNaN(object) &&
          Object.prototype.toString.call(object) === '[object Number]'
        );
      }
      static isUndefined(object) {
        return typeof object === 'undefined';
      }
      static isObject(object) {
        return !!object && typeof object === 'object';
      }
      static isDate(object) {
        return Object.prototype.toString.call(object) === '[object Date]';
      }
      static isNan(object) {
        const rdigit = /\d/;
        return (
          object === null ||
          object === undefined ||
          !rdigit.test(object) ||
          isNaN(object)
        );
      }
      static isNumeric(object) {
        return !isNaN(parseFloat(object)) && isFinite(object);
      }
      static isBoolean(object) {
        return object === true || object === false;
      }
      static isWindow(object) {
        return (
          !!object && typeof object === 'object' && 'setInterval' in object
        );
      }
      static isBlob(object) {
        return Object.prototype.toString.call(object) === '[object Blob]';
      }
      static get(aObjet, aAccesseur) {
        var _a;
        let lObjet, i, lNomProp, lIndexProp;
        if (!aObjet || !aAccesseur || !aAccesseur.length) {
          return aObjet;
        }
        if (typeof aAccesseur === 'string') {
          aAccesseur = aAccesseur.split('.');
        }
        const lLength = aAccesseur.length;
        if (lLength === 0) {
          return aObjet;
        }
        lObjet = aObjet;
        for (i = 0; i < lLength; i++) {
          if (!lObjet) {
            return undefined;
          }
          lNomProp = aAccesseur[i];
          lIndexProp = false;
          if (
            lNomProp.indexOf('[') > 0 &&
            lNomProp.indexOf(']') === lNomProp.length - 1
          ) {
            lIndexProp =
              (_a = lNomProp.match(/\[['"]?(.*)['"]?\]$/)) === null ||
              _a === void 0
                ? void 0
                : _a[1];
            lNomProp = lNomProp.replace(/\[['"]?(.*)['"]?\]$/, '');
          }
          lObjet = lObjet[lNomProp];
          if (lIndexProp) {
            lObjet = lObjet[lIndexProp];
          }
        }
        return lObjet;
      }
      static set(aObjet, aAccesseur, aValue) {
        if (aAccesseur && typeof aAccesseur === 'string') {
          aAccesseur = aAccesseur.split('.');
        }
        let lConteneur;
        let lNomProp;
        if (!aAccesseur || !aAccesseur.length) {
          return false;
        }
        lNomProp = aAccesseur[aAccesseur.length - 1];
        if (aAccesseur.length === 1) {
          lConteneur = aObjet;
        } else {
          lConteneur = MethodesObjet.get(
            aObjet,
            aAccesseur.slice(0, aAccesseur.length - 1),
          );
        }
        if (lConteneur && lNomProp) {
          lConteneur[lNomProp] = aValue;
          return true;
        }
        return false;
      }
      static nomProprieteDeValeur(aObjet, aValeur) {
        const lKeys = Object.keys(aObjet);
        for (let i = 0; i < lKeys.length; i++) {
          if (aValeur === aObjet[lKeys[i]]) {
            return lKeys[i];
          }
        }
        return '';
      }
      static _indenterEnumere(aEnumere, aParam) {
        let lProp;
        if (!aParam) {
          aParam = {};
        }
        aParam.indice = aParam.indice || 0;
        if (!aEnumere) {
          return;
        }
        for (lProp in aEnumere) {
          if (MethodesObjet.isNumber(aEnumere[lProp])) {
            aEnumere[lProp] = aParam.indice;
            aParam.indice += 1;
          } else if (MethodesObjet.isObject(aEnumere[lProp])) {
            this._indenterEnumere(aEnumere[lProp], aParam);
          }
        }
      }
      static indenterEnumere(aEnumere, aIndiceInitiale) {
        if (MethodesObjet.isObject(aEnumere)) {
          this._indenterEnumere(aEnumere, { indice: aIndiceInitiale });
        }
      }
      static objetsIdentiques(aObjet1, aObjet2, aComparaisonProfonde) {
        if ((!aObjet1 && aObjet2) || (aObjet1 && !aObjet2)) {
          return false;
        }
        if (!aObjet1 && !aObjet2) {
          return true;
        }
        if (aObjet1 === aObjet2) {
          return true;
        }
        let i;
        let lKeys = Object.keys(aObjet1);
        const lDejaCompare = {};
        for (i = 0; i < lKeys.length; i++) {
          if (aObjet1[lKeys[i]] !== aObjet2[lKeys[i]]) {
            if (
              aComparaisonProfonde === true &&
              MethodesObjet.isObject(aObjet1[lKeys[i]]) &&
              MethodesObjet.isObject(aObjet2[lKeys[i]])
            ) {
              lDejaCompare[lKeys[i]] = true;
              if (
                !MethodesObjet.objetsIdentiques(
                  aObjet1[lKeys[i]],
                  aObjet2[lKeys[i]],
                  true,
                )
              ) {
                return false;
              }
            } else {
              return false;
            }
          }
        }
        lKeys = Object.keys(aObjet2);
        for (i = 0; i < lKeys.length; i++) {
          if (aObjet1[lKeys[i]] !== aObjet2[lKeys[i]]) {
            if (aComparaisonProfonde === true) {
              if (
                !lDejaCompare[lKeys[i]] &&
                MethodesObjet.isObject(aObjet1[lKeys[i]]) &&
                MethodesObjet.isObject(aObjet2[lKeys[i]]) &&
                !MethodesObjet.objetsIdentiques(
                  aObjet1[lKeys[i]],
                  aObjet2[lKeys[i]],
                  true,
                )
              ) {
                return false;
              }
            } else {
              return false;
            }
          }
        }
        return true;
      }
      static enumKeys(aEnum) {
        return Object.keys(aEnum || {}).filter((aVal) => Number.isNaN(+aVal));
      }
      static enumValues(aEnum) {
        return MethodesObjet.enumKeys(aEnum).map((aKey) => aEnum[aKey]);
      }
      static valueInEnum(aValue, aEnum) {
        for (const lKey of MethodesObjet.enumKeys(aEnum)) {
          const lVal = aEnum[lKey];
          if (lVal === aValue) {
            return true;
          }
        }
        return false;
      }
      static _dupliquer(
        aObjet,
        _aProfondeur,
        _aDuplicationParesseuse,
        aProprietaires,
        aProprietairesCopie,
      ) {
        if (!aObjet || !MethodesObjet.isObject(aObjet)) {
          return aObjet;
        }
        if (
          'dupliquer' in aObjet &&
          MethodesObjet.isFunction(aObjet.dupliquer)
        ) {
          return aObjet.dupliquer();
        }
        if (Object.prototype.toString.call(aObjet) === '[object File]') {
          return aObjet;
        }
        if (_aProfondeur > 1000) {
          return aObjet;
        }
        let lIndice = -1;
        if (aProprietaires.length > 0) {
          lIndice = aProprietaires.indexOf(aObjet);
        }
        if (lIndice >= 0) {
          return aProprietairesCopie[lIndice];
        }
        let lObjetDuplique, lProp;
        if (MethodesObjet.isArray(aObjet)) {
          lObjetDuplique = new Array(aObjet.length);
        } else if (MethodesObjet.isDate(aObjet)) {
          lObjetDuplique = new Date();
          lObjetDuplique.setTime(aObjet.getTime());
        } else if (MethodesObjet.isBlob(aObjet)) {
          lObjetDuplique = new Blob([aObjet], { type: aObjet.type });
        } else {
          lObjetDuplique = Object.create(aObjet.constructor.prototype);
        }
        const lProfondeur = _aProfondeur + 1;
        aProprietaires.push(aObjet);
        aProprietairesCopie.push(lObjetDuplique);
        try {
          const lKeys = Object.keys(aObjet);
          for (let i = 0; i < lKeys.length; i++) {
            lProp = lKeys[i];
            const lValeur = aObjet[lProp];
            if (MethodesObjet.isObject(lValeur)) {
              if (_aDuplicationParesseuse && _aProfondeur === 0) {
                lObjetDuplique[lProp] = lValeur;
              } else {
                lObjetDuplique[lProp] = this._dupliquer(
                  lValeur,
                  lProfondeur,
                  false,
                  aProprietaires,
                  aProprietairesCopie,
                );
              }
            } else {
              lObjetDuplique[lProp] = lValeur;
            }
          }
        } finally {
          aProprietaires.pop();
          aProprietairesCopie.pop();
        }
        return lObjetDuplique;
      }
      static assertNever(x) {
        throw new Error(`Unexpected value: ${x}`);
      }
    }
    exports.MethodesObjet = MethodesObjet;
    MethodesObjet.getNomClassDeConstructeur = function (aConstructeur) {
      if (aConstructeur && aConstructeur.name) {
        return aConstructeur.name;
      }
      if (
        aConstructeur &&
        aConstructeur.toString &&
        MethodesObjet.isFunction(aConstructeur)
      ) {
        const T = aConstructeur.toString().match(/function\s*(\w+)/);
        if (T && T.length === 2) {
          return T[1];
        }
      }
      return undefined;
    };
  },
  fn: 'methodesobjet.js',
});