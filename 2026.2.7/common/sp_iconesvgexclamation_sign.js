IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgExclamation_sign = IconeSvgExclamation_sign;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgExclamation_sign(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'exclamation_sign', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M8 0q2.177 0 4.016 1.073t2.911 2.911 1.073 4.016-1.073 4.016-2.911 2.911-4.016 1.073-4.016-1.073-2.911-2.911-1.073-4.016 1.073-4.016 2.911-2.911 4.016-1.073zM9.333 12.99v-1.979q0-0.146-0.094-0.245t-0.229-0.099h-2q-0.135 0-0.24 0.104t-0.104 0.24v1.979q0 0.135 0.104 0.24t0.24 0.104h2q0.135 0 0.229-0.099t0.094-0.245zM9.312 9.406l0.188-6.469q0-0.125-0.104-0.188-0.104-0.083-0.25-0.083h-2.292q-0.146 0-0.25 0.083-0.104 0.062-0.104 0.188l0.177 6.469q0 0.104 0.104 0.182t0.25 0.078h1.927q0.146 0 0.245-0.078t0.109-0.182z',
        }),
      );
    }
  },
  fn: 'iconesvgexclamation_sign.js',
});