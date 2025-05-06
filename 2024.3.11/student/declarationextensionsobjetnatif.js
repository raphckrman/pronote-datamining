IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('Object.js');
    require('String');
    require('Math');
    require('Promise.js');
    if (!global.ResizeObserver) {
      global.ResizeObserver = require('ResizeObserver_polyfill.js');
    }
    require('IntersectionObserver_polyfill.js');
  },
  fn: 'declarationextensionsobjetnatif.js',
});