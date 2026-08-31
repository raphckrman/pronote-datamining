IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgMedkit = IconeSvgMedkit;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgMedkit(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'medkit', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M11.429 10v-1.714q0-0.125-0.080-0.205t-0.205-0.080h-2v-2q0-0.125-0.080-0.205t-0.205-0.080h-1.714q-0.125 0-0.205 0.080t-0.080 0.205v2h-2q-0.125 0-0.205 0.080t-0.080 0.205v1.714q0 0.125 0.080 0.205t0.205 0.080h2v2q0 0.125 0.080 0.205t0.205 0.080h1.714q0.125 0 0.205-0.080t0.080-0.205v-2h2q0.125 0 0.205-0.080t0.080-0.205zM5.714 3.429h4.571v-1.143h-4.571v1.143zM2.286 3.429v11.429h-0.286q-0.821 0-1.411-0.589t-0.589-1.411v-7.429q0-0.821 0.589-1.411t1.411-0.589h0.286zM12.857 3.429v11.429h-9.714v-11.429h1.429v-1.429q0-0.357 0.25-0.607t0.607-0.25h5.143q0.357 0 0.607 0.25t0.25 0.607v1.429h1.429zM16 5.429v7.429q0 0.821-0.589 1.411t-1.411 0.589h-0.286v-11.429h0.286q0.821 0 1.411 0.589t0.589 1.411z',
        }),
      );
    }
  },
  fn: 'iconesvgmedkit.js',
});