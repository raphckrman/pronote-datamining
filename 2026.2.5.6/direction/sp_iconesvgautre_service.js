IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAutre_service = IconeSvgAutre_service;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAutre_service(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'autre_service', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M0 3.953v12.047h16v-12.047h-16zM3.467 14.919h-2.589v-2.589h2.589v2.589zM3.467 11.134h-2.589v-2.589h2.589v2.589zM3.467 7.364h-2.589v-2.589h2.589v2.589zM7.034 14.919h-2.589v-2.589h2.589v2.589zM7.034 11.134h-2.589v-2.589h2.589v2.589zM7.034 7.364h-2.589v-2.589h2.589v2.589zM15.016 14.919h-7.003v-2.589h7.003v2.589zM15.016 11.134h-7.003v-2.589h7.003v2.589zM15.016 7.364h-7.003v-2.589h7.003v2.589z',
        }),
        IE.jsx.str('path', {
          d: 'M9.55 1.087h-1.089v-1.087h-0.922v1.087h-1.089v0.923h1.089v1.087h0.922v-1.087h1.089z',
        }),
      );
    }
  },
  fn: 'iconesvgautre_service.js',
});