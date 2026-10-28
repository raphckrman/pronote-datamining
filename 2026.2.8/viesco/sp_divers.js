IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DiversLib = void 0;
    require('@librairies/script/ExtensionsObjetsNatifs/DeclarationExtensionsObjetNatif');
    const assert = (aIgnorer, aMessage) => {};
    global.assert = assert;
    let uIsLoaded = false;
    let uTabFunc = [];
    function _loaded() {
      uIsLoaded = true;
      for (const lFunc of uTabFunc) {
        try {
          lFunc();
        } catch (e) {}
      }
      uTabFunc = [];
    }
    if (document.body) {
      _loaded();
    } else {
      window.addEventListener('load', () => {
        _loaded();
      });
    }
    var DiversLib;
    (function (DiversLib) {
      DiversLib.abonnerLoadingPage = function (aFunc) {
        if (uIsLoaded) {
          aFunc();
        } else {
          uTabFunc.push(aFunc);
        }
      };
    })(DiversLib || (exports.DiversLib = DiversLib = {}));
  },
  fn: 'divers.js',
});