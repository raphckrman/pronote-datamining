IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgCharge_travail = IconeSvgCharge_travail;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgCharge_travail(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'charge_travail', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M9.245 4.558v-2.067h2.316v-2.491h-7.122v2.491h2.316v2.067h-5.205v11.442h12.9v-11.442z',
        }),
      );
    }
  },
  fn: 'iconesvgcharge_travail.js',
});