IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgEcole = IconeSvgEcole;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgEcole(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'ecole', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M15.99 11.11v0l0.010-1.443c-0.026-0.064-0.090-0.106-0.157-0.106l-2.877-1.155v-2.378c0-0.045-0.016-0.086-0.051-0.115l-4.746-3.773v-0.528h1.501c0.093 0 0.17-0.074 0.17-0.163v-1.101c0-0.093-0.074-0.163-0.17-0.163h-1.501v-0.022c0-0.093-0.074-0.163-0.17-0.163-0.093 0-0.17 0.074-0.17 0.163v1.978l-4.755 3.77c-0.032 0.032-0.051 0.074-0.051 0.115v2.378l-2.867 1.158c-0.070 0-0.134 0.042-0.157 0.106l0.010 1.443c-0.006 0.016-0.010 0.035-0.010 0.051v0 4.838h6.464v-4.134h3.072v4.134h6.464v-4.832c0-0.019-0.003-0.038-0.010-0.058zM8 7.93c-0.691 0-1.251-0.56-1.251-1.251s0.56-1.251 1.251-1.251 1.251 0.56 1.251 1.251-0.56 1.251-1.251 1.251z',
        }),
      );
    }
  },
  fn: 'iconesvgecole.js',
});