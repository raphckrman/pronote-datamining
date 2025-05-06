IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireIdentifiantNavigateur = void 0;
    const LocalStorage_1 = require('LocalStorage');
    const c_marqueur = '_idNavIndex_';
    exports.UtilitaireIdentifiantNavigateur = {
      get() {
        try {
          return LocalStorage_1.IELocalStorage.getItem(c_marqueur);
        } catch (e) {
          return '';
        }
      },
      set(aValue) {
        try {
          LocalStorage_1.IELocalStorage.setItem(c_marqueur, aValue);
        } catch (e) {}
      },
    };
  },
  fn: 'utilitaireidentifiantnavigateur.js',
});