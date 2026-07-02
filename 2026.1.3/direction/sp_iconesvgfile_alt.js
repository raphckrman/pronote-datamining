IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFile_alt = IconeSvgFile_alt;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFile_alt(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'file_alt', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M14.25 3.393q0.25 0.25 0.429 0.679t0.179 0.786v10.286q0 0.357-0.25 0.607t-0.607 0.25h-12q-0.357 0-0.607-0.25t-0.25-0.607v-14.286q0-0.357 0.25-0.607t0.607-0.25h8q0.357 0 0.786 0.179t0.679 0.429zM10.286 1.214v3.357h3.357q-0.089-0.259-0.196-0.366l-2.795-2.795q-0.107-0.107-0.366-0.196zM13.714 14.857v-9.143h-3.714q-0.357 0-0.607-0.25t-0.25-0.607v-3.714h-6.857v13.714h11.429z',
        }),
      );
    }
  },
  fn: 'iconesvgfile_alt.js',
});