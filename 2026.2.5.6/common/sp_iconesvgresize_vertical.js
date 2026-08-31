IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgResize_vertical = IconeSvgResize_vertical;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgResize_vertical(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'resize_vertical', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M10.857 2.857q0 0.232-0.17 0.402t-0.402 0.17h-1.143v9.143h1.143q0.232 0 0.402 0.17t0.17 0.402-0.17 0.402l-2.286 2.286q-0.17 0.17-0.402 0.17t-0.402-0.17l-2.286-2.286q-0.17-0.17-0.17-0.402t0.17-0.402 0.402-0.17h1.143v-9.143h-1.143q-0.232 0-0.402-0.17t-0.17-0.402 0.17-0.402l2.286-2.286q0.17-0.17 0.402-0.17t0.402 0.17l2.286 2.286q0.17 0.17 0.17 0.402z',
        }),
      );
    }
  },
  fn: 'iconesvgresize_vertical.js',
});