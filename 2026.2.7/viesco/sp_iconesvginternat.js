IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgInternat = IconeSvgInternat;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgInternat(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'internat', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M2 9.322h13.5c0.136 0 0.253 0.050 0.352 0.148s0.148 0.216 0.148 0.352v4.172h-2v-2.672h-12v2.672h-2v-11.488c0-0.136 0.050-0.253 0.148-0.352s0.216-0.148 0.352-0.148h1c0.136 0 0.253 0.050 0.352 0.148s0.148 0.216 0.148 0.352v6.816zM6.5 6.172c0-0.552-0.195-1.023-0.586-1.414s-0.862-0.586-1.414-0.586-1.023 0.195-1.414 0.586c-0.391 0.391-0.586 0.862-0.586 1.414s0.195 1.023 0.586 1.414c0.391 0.391 0.862 0.586 1.414 0.586s1.023-0.195 1.414-0.586c0.391-0.391 0.586-0.862 0.586-1.414zM16 8.172v-0.5c0-0.828-0.294-1.534-0.88-2.12s-1.294-0.878-2.12-0.88h-5.5c-0.136 0-0.253 0.050-0.352 0.148s-0.148 0.216-0.148 0.352v3h9z',
        }),
      );
    }
  },
  fn: 'iconesvginternat.js',
});