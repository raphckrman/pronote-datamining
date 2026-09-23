IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFichier_powerpoint = IconeSvgFichier_powerpoint;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFichier_powerpoint(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'fichier_powerpoint', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M14.25 3.393q0.25 0.25 0.429 0.679t0.179 0.786v10.286q0 0.357-0.25 0.607t-0.607 0.25h-12q-0.357 0-0.607-0.25t-0.25-0.607v-14.286q0-0.357 0.25-0.607t0.607-0.25h8q0.357 0 0.786 0.179t0.679 0.429zM10.286 1.214v3.357h3.357q-0.089-0.259-0.196-0.366l-2.795-2.795q-0.107-0.107-0.366-0.196zM13.714 14.857v-9.143h-3.714q-0.357 0-0.607-0.25t-0.25-0.607v-3.714h-6.857v13.714h11.429zM4.857 12.768v0.946h2.92v-0.946h-0.83v-1.491h1.223q0.679 0 1.054-0.134 0.598-0.205 0.951-0.777t0.353-1.304q0-0.723-0.33-1.259t-0.893-0.777q-0.429-0.17-1.161-0.17h-3.286v0.955h0.821v4.955h-0.821zM8.009 10.268h-1.063v-2.393h1.071q0.464 0 0.741 0.161 0.5 0.295 0.5 1.027 0 0.795-0.554 1.071-0.277 0.134-0.696 0.134z',
        }),
      );
    }
  },
  fn: 'iconesvgfichier_powerpoint.js',
});