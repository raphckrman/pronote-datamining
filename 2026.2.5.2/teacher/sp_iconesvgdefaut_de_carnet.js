IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgDefaut_de_carnet = IconeSvgDefaut_de_carnet;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgDefaut_de_carnet(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'Defaut_de_carnet', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', { d: 'M4.591 3.622h5.36v1.329h-5.36v-1.329z' }),
        IE.jsx.str('path', { d: 'M4.591 6.111h5.36v1.329h-5.36v-1.329z' }),
        IE.jsx.str('path', {
          d: 'M13.905 11.678l1.321-1.321c0.364-0.364 0.364-0.957 0-1.321s-0.957-0.364-1.321 0l-1.321 1.321-1.321-1.324c-0.364-0.364-0.957-0.364-1.321 0s-0.364 0.957 0 1.321l1.321 1.321-1.321 1.321c-0.364 0.364-0.364 0.957 0 1.321s0.957 0.364 1.321 0l1.321-1.321 1.321 1.321c0.364 0.364 0.957 0.364 1.321 0s0.364-0.957 0-1.321l-1.321-1.318z',
        }),
        IE.jsx.str('path', {
          d: 'M1.776 14.723v-13.448h9.366v3.889h1.37v2.142h1.277v-2.142h0.707v-0.854c0 0 0 0 0 0v-4.311h-12.835c-0.639 0-1.16 0.521-1.16 1.16v13.681c0 0.639 0.521 1.16 1.16 1.16h7.666v-1.276h-7.55z',
        }),
      );
    }
  },
  fn: 'iconesvgdefaut_de_carnet.js',
});