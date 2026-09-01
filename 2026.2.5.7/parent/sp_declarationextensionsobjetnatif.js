IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const tslib_1 = require('tslib');
    require('@librairies/script/ExtensionsObjetsNatifs/Object');
    require('@librairies/script/ExtensionsObjetsNatifs/String');
    require('@librairies/script/ExtensionsObjetsNatifs/Math');
    require('@librairies/script/ExtensionsObjetsNatifs/Promise');
    const ResizeObserver_polyfill_js_1 = tslib_1.__importDefault(
      require('@librairies/script/ExtensionsObjetsNatifs/ResizeObserver_polyfill.js'),
    );
    if (!global.ResizeObserver) {
      global.ResizeObserver = ResizeObserver_polyfill_js_1.default;
    }
    require('@librairies/script/ExtensionsObjetsNatifs/IntersectionObserver_polyfill.js');
  },
  fn: 'declarationextensionsobjetnatif.js',
});