IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgExternal_link = IconeSvgExternal_link;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgExternal_link(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'external_link', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M12.571 9.429v2.857q0 1.063-0.754 1.817t-1.817 0.754h-7.429q-1.063 0-1.817-0.754t-0.754-1.817v-7.429q0-1.063 0.754-1.817t1.817-0.754h6.286q0.125 0 0.205 0.080t0.080 0.205v0.571q0 0.125-0.080 0.205t-0.205 0.080h-6.286q-0.589 0-1.009 0.42t-0.42 1.009v7.429q0 0.589 0.42 1.009t1.009 0.42h7.429q0.589 0 1.009-0.42t0.42-1.009v-2.857q0-0.125 0.080-0.205t0.205-0.080h0.571q0.125 0 0.205 0.080t0.080 0.205zM16 1.714v4.571q0 0.232-0.17 0.402t-0.402 0.17-0.402-0.17l-1.571-1.571-5.821 5.821q-0.089 0.089-0.205 0.089t-0.205-0.089l-1.018-1.018q-0.089-0.089-0.089-0.205t0.089-0.205l5.821-5.821-1.571-1.571q-0.17-0.17-0.17-0.402t0.17-0.402 0.402-0.17h4.571q0.232 0 0.402 0.17t0.17 0.402z',
        }),
      );
    }
  },
  fn: 'iconesvgexternal_link.js',
});