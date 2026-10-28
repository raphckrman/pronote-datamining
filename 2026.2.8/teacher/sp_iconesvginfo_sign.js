IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgInfo_sign = IconeSvgInfo_sign;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgInfo_sign(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'info_sign', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M10.667 13v-1.667q0-0.146-0.094-0.24t-0.24-0.094h-1v-5.333q0-0.146-0.094-0.24t-0.24-0.094h-3.333q-0.146 0-0.24 0.094t-0.094 0.24v1.667q0 0.146 0.094 0.24t0.24 0.094h1v3.333h-1q-0.146 0-0.24 0.094t-0.094 0.24v1.667q0 0.146 0.094 0.24t0.24 0.094h4.667q0.146 0 0.24-0.094t0.094-0.24zM9.333 3.667v-1.667q0-0.146-0.094-0.24t-0.24-0.094h-2q-0.146 0-0.24 0.094t-0.094 0.24v1.667q0 0.146 0.094 0.24t0.24 0.094h2q0.146 0 0.24-0.094t0.094-0.24zM16 8q0 2.177-1.073 4.016t-2.911 2.911-4.016 1.073-4.016-1.073-2.911-2.911-1.073-4.016 1.073-4.016 2.911-2.911 4.016-1.073 4.016 1.073 2.911 2.911 1.073 4.016z',
        }),
      );
    }
  },
  fn: 'iconesvginfo_sign.js',
});