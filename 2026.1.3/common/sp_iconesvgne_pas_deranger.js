IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgNe_pas_deranger = IconeSvgNe_pas_deranger;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgNe_pas_deranger(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'ne_pas_deranger', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M8 0c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zM13.499 9.321h-10.999v-2.642h10.999v2.642z',
        }),
      );
    }
  },
  fn: 'iconesvgne_pas_deranger.js',
});