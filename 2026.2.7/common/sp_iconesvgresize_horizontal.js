IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgResize_horizontal = IconeSvgResize_horizontal;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgResize_horizontal(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'resize_horizontal', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M16 8q0 0.232-0.17 0.402l-2.286 2.286q-0.17 0.17-0.402 0.17t-0.402-0.17-0.17-0.402v-1.143h-9.143v1.143q0 0.232-0.17 0.402t-0.402 0.17-0.402-0.17l-2.286-2.286q-0.17-0.17-0.17-0.402t0.17-0.402l2.286-2.286q0.17-0.17 0.402-0.17t0.402 0.17 0.17 0.402v1.143h9.143v-1.143q0-0.232 0.17-0.402t0.402-0.17 0.402 0.17l2.286 2.286q0.17 0.17 0.17 0.402z',
        }),
      );
    }
  },
  fn: 'iconesvgresize_horizontal.js',
});