IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgStar = IconeSvgStar;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgStar(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'star', viewBox: '0 0 15 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M14.904 6.402q0 0.197-0.233 0.43l-3.251 3.17 0.77 4.477q0.009 0.063 0.009 0.179 0 0.188-0.094 0.318t-0.273 0.13q-0.17 0-0.358-0.107l-4.021-2.113-4.021 2.113q-0.197 0.107-0.358 0.107-0.188 0-0.282-0.13t-0.094-0.318q0-0.054 0.018-0.179l0.77-4.477-3.26-3.17q-0.224-0.242-0.224-0.43 0-0.331 0.501-0.412l4.495-0.654 2.015-4.074q0.17-0.367 0.439-0.367t0.439 0.367l2.015 4.074 4.495 0.654q0.501 0.081 0.501 0.412z',
        }),
      );
    }
  },
  fn: 'iconesvgstar.js',
});