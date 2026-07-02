IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgTime = IconeSvgTime;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgTime(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'time', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M9.333 4.333v4.667q0 0.146-0.094 0.24t-0.24 0.094h-3.333q-0.146 0-0.24-0.094t-0.094-0.24v-0.667q0-0.146 0.094-0.24t0.24-0.094h2.333v-3.667q0-0.146 0.094-0.24t0.24-0.094h0.667q0.146 0 0.24 0.094t0.094 0.24zM13.667 8q0-1.542-0.76-2.844t-2.063-2.063-2.844-0.76-2.844 0.76-2.063 2.063-0.76 2.844 0.76 2.844 2.063 2.063 2.844 0.76 2.844-0.76 2.063-2.063 0.76-2.844zM16 8q0 2.177-1.073 4.016t-2.911 2.911-4.016 1.073-4.016-1.073-2.911-2.911-1.073-4.016 1.073-4.016 2.911-2.911 4.016-1.073 4.016 1.073 2.911 2.911 1.073 4.016z',
        }),
      );
    }
  },
  fn: 'iconesvgtime.js',
});