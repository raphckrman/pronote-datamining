IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgPlus_fin = IconeSvgPlus_fin;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgPlus_fin(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'plus_fin', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M9.161 9.161h6.839v-2.327h-6.839v-6.834h-2.327v6.834h-6.834v2.327h6.839v6.839h2.327v-0.306l-0.005-6.533z',
        }),
      );
    }
  },
  fn: 'iconesvgplus_fin.js',
});