IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IELocalStorage = void 0;
    let lLocalStorage = null;
    try {
      lLocalStorage =
        window.localStorage ||
        (window.globalStorage
          ? window.globalStorage[window.location.hostname]
          : null);
      if (lLocalStorage.setItem) {
        lLocalStorage.setItem('_bidon_', '1');
        lLocalStorage.removeItem('_bidon_');
      }
    } catch (e) {
      lLocalStorage = null;
    }
    exports.IELocalStorage = {
      actif: !!lLocalStorage,
      getItem(aCle) {
        if (lLocalStorage) {
          try {
            return lLocalStorage.getItem
              ? lLocalStorage.getItem(aCle)
              : lLocalStorage[aCle];
          } catch (e) {}
        }
        return null;
      },
      getItemJSON(aCle) {
        const lResult = this.getItem(aCle);
        let lJSON = null;
        try {
          lJSON = lResult ? JSON.parse(lResult) : null;
        } catch (e) {
          lJSON = null;
        }
        return lJSON;
      },
      setItem(aCle, aValeur) {
        if (lLocalStorage) {
          try {
            if (lLocalStorage.setItem) {
              lLocalStorage.setItem(aCle, aValeur);
            } else {
              lLocalStorage[aCle] = aValeur;
            }
          } catch (e) {}
        }
      },
      setItemJSON(aCle, aJSON) {
        let lChaineJSON = '';
        try {
          lChaineJSON = JSON.stringify(aJSON);
        } catch (e) {}
        this.setItem(aCle, lChaineJSON || '');
      },
      removeItem(aCle) {
        if (lLocalStorage) {
          try {
            if (lLocalStorage.removeItem) {
              lLocalStorage.removeItem(aCle);
            } else {
              lLocalStorage[aCle] = null;
            }
          } catch (e) {}
        }
      },
    };
  },
  fn: 'localstorage.js',
});