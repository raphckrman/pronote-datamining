IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GUID = exports.GenerateurGUID = void 0;
    require('NamespaceIE');
    let lGUID_id = 1;
    let lGUID_ClassCss = 1;
    class GenerateurGUID {
      constructor() {
        this.fGUID = 1;
        this.fCompteur = 0;
      }
      get() {
        let lResult = 'g';
        if (this.fCompteur > 0) {
          lResult += this.fCompteur + 'x';
        }
        lResult += this.fGUID;
        if (this.fGUID === Number.MAX_VALUE) {
          this.fGUID = 1;
          this.fCompteur += 1;
        } else {
          this.fGUID += 1;
        }
        return lResult;
      }
    }
    exports.GenerateurGUID = GenerateurGUID;
    let GUID = {
      getId() {
        const lResult = 'id_' + lGUID_id;
        lGUID_id += 1;
        return lResult;
      },
      getClassCss() {
        const lResult = 'c_' + lGUID_ClassCss;
        lGUID_ClassCss += 1;
        return lResult;
      },
      generateur: GenerateurGUID,
      getGUIDDelphiVide() {
        return '{00000000-0000-0000-0000-000000000000}';
      },
    };
    exports.GUID = GUID;
  },
  fn: 'guid.js',
});