IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgCheck_fin = IconeSvgCheck_fin;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgCheck_fin(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'check_fin', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M5.627 13.922l-5.627-5.567 1.627-1.645 4.009 3.963 8.742-8.595 1.622 1.65z',
        }),
      );
    }
  },
  fn: 'iconesvgcheck_fin.js',
});