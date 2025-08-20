IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('Object');
    require('String');
    require('Math');
    require('Promise');
    if (!global.ResizeObserver) {
      global.ResizeObserver = require('ResizeObserver_polyfill.js');
    }
    require('IntersectionObserver_polyfill');
  },
  fn: 'declarationextensionsobjetnatif.js',
});