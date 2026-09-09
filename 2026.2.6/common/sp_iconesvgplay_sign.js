IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgPlay_sign = IconeSvgPlay_sign;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgPlay_sign(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'play_sign', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M8 0q2.177 0 4.016 1.073t2.911 2.911 1.073 4.016-1.073 4.016-2.911 2.911-4.016 1.073-4.016-1.073-2.911-2.911-1.073-4.016 1.073-4.016 2.911-2.911 4.016-1.073zM12 8.573q0.333-0.188 0.333-0.573t-0.333-0.573l-5.667-3.333q-0.323-0.198-0.667-0.010-0.333 0.198-0.333 0.583v6.667q0 0.385 0.333 0.583 0.167 0.083 0.333 0.083 0.177 0 0.333-0.094z',
        }),
      );
    }
  },
  fn: 'iconesvgplay_sign.js',
});