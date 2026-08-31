IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFichier_excel = IconeSvgFichier_excel;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFichier_excel(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'fichier_excel', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M14.25 3.393q0.25 0.25 0.429 0.679t0.179 0.786v10.286q0 0.357-0.25 0.607t-0.607 0.25h-12q-0.357 0-0.607-0.25t-0.25-0.607v-14.286q0-0.357 0.25-0.607t0.607-0.25h8q0.357 0 0.786 0.179t0.679 0.429zM10.286 1.214v3.357h3.357q-0.089-0.259-0.196-0.366l-2.795-2.795q-0.107-0.107-0.366-0.196zM13.714 14.857v-9.143h-3.714q-0.357 0-0.607-0.25t-0.25-0.607v-3.714h-6.857v13.714h11.429zM4.973 12.768v0.946h2.509v-0.946h-0.67l0.92-1.438q0.045-0.063 0.089-0.147t0.067-0.121 0.031-0.036h0.018q0.009 0.036 0.045 0.089 0.018 0.036 0.040 0.067t0.054 0.071 0.058 0.076l0.955 1.438h-0.679v0.946h2.598v-0.946h-0.607l-1.714-2.438 1.741-2.518h0.598v-0.955h-2.491v0.955h0.661l-0.92 1.42q-0.036 0.063-0.089 0.147t-0.080 0.121l-0.018 0.027h-0.018q-0.009-0.036-0.045-0.089-0.054-0.098-0.152-0.205l-0.946-1.42h0.679v-0.955h-2.589v0.955h0.607l1.688 2.429-1.732 2.527h-0.607z',
        }),
      );
    }
  },
  fn: 'iconesvgfichier_excel.js',
});