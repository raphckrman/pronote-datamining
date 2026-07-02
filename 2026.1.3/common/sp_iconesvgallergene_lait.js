IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAllergene_lait = IconeSvgAllergene_lait;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAllergene_lait(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'allergene_lait', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M13.385 2.793v-2.195c0-0.33-0.268-0.598-0.598-0.598h-9.548c-0.33 0-0.598 0.268-0.598 0.598v2.195h10.744z',
        }),
        IE.jsx.str('path', {
          d: 'M2.445 3.864l-1.33 2.74h10.628l1.312-2.731h-10.61z',
        }),
        IE.jsx.str('path', {
          d: 'M0.812 7.656v7.746c0 0.33 0.268 0.598 0.598 0.598h10.146v-8.344h-10.744z',
        }),
        IE.jsx.str('path', {
          d: 'M13.903 4.542l-1.312 2.695v8.531l2.195-0.732c0.241-0.080 0.41-0.303 0.402-0.562v-7.219l-1.285-2.713z',
        }),
      );
    }
  },
  fn: 'iconesvgallergene_lait.js',
});