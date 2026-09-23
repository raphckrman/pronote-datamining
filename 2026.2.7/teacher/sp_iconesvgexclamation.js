IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgExclamation = IconeSvgExclamation;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgExclamation(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'exclamation', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M10.182 12.727v2.545q0 0.295-0.216 0.511t-0.511 0.216h-2.909q-0.295 0-0.511-0.216t-0.216-0.511v-2.545q0-0.295 0.216-0.511t0.511-0.216h2.909q0.295 0 0.511 0.216t0.216 0.511zM10.523 0.727l-0.318 8.727q-0.011 0.295-0.233 0.511t-0.517 0.216h-2.909q-0.295 0-0.517-0.216t-0.233-0.511l-0.318-8.727q-0.011-0.295 0.199-0.511t0.506-0.216h3.636q0.295 0 0.506 0.216t0.199 0.511z',
        }),
      );
    }
  },
  fn: 'iconesvgexclamation.js',
});