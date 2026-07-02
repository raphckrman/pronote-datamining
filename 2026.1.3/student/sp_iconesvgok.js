IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgOk = IconeSvgOk;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgOk(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'ok', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M16 4.263q0 0.413-0.289 0.702l-8.877 8.877q-0.289 0.289-0.702 0.289t-0.702-0.289l-5.141-5.141q-0.289-0.289-0.289-0.702t0.289-0.702l1.404-1.404q0.289-0.289 0.702-0.289t0.702 0.289l3.035 3.045 6.772-6.782q0.289-0.289 0.702-0.289t0.702 0.289l1.404 1.404q0.289 0.289 0.289 0.702z',
        }),
      );
    }
  },
  fn: 'iconesvgok.js',
});