IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgPlus = IconeSvgPlus;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgPlus(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'plus', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M16 6.909v2.182q0 0.455-0.318 0.773t-0.773 0.318h-4.727v4.727q0 0.455-0.318 0.773t-0.773 0.318h-2.182q-0.455 0-0.773-0.318t-0.318-0.773v-4.727h-4.727q-0.455 0-0.773-0.318t-0.318-0.773v-2.182q0-0.455 0.318-0.773t0.773-0.318h4.727v-4.727q0-0.455 0.318-0.773t0.773-0.318h2.182q0.455 0 0.773 0.318t0.318 0.773v4.727h4.727q0.455 0 0.773 0.318t0.318 0.773z',
        }),
      );
    }
  },
  fn: 'iconesvgplus.js',
});