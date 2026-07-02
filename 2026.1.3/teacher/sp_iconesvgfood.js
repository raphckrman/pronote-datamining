IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFood = IconeSvgFood;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFood(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'food', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M7.429 0.571v5.714q0 0.545-0.317 0.991t-0.826 0.625v6.955q0 0.464-0.339 0.804t-0.804 0.339h-1.143q-0.464 0-0.804-0.339t-0.339-0.804v-6.955q-0.509-0.179-0.826-0.625t-0.317-0.991v-5.714q0-0.232 0.17-0.402t0.402-0.17 0.402 0.17 0.17 0.402v3.714q0 0.232 0.17 0.402t0.402 0.17 0.402-0.17 0.17-0.402v-3.714q0-0.232 0.17-0.402t0.402-0.17 0.402 0.17 0.17 0.402v3.714q0 0.232 0.17 0.402t0.402 0.17 0.402-0.17 0.17-0.402v-3.714q0-0.232 0.17-0.402t0.402-0.17 0.402 0.17 0.17 0.402zM14.286 0.571v14.286q0 0.464-0.339 0.804t-0.804 0.339h-1.143q-0.464 0-0.804-0.339t-0.339-0.804v-4.571h-2q-0.116 0-0.201-0.085t-0.085-0.201v-7.143q0-1.179 0.839-2.018t2.018-0.839h2.286q0.232 0 0.402 0.17t0.17 0.402z',
        }),
      );
    }
  },
  fn: 'iconesvgfood.js',
});