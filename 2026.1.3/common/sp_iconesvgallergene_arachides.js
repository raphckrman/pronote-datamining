IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAllergene_arachides = IconeSvgAllergene_arachides;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAllergene_arachides(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'allergene_arachides', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M14.030 1.789c-0.006-0.006-0.012-0.018-0.018-0.024-0.018-0.024-0.041-0.041-0.059-0.065s-0.036-0.041-0.053-0.065c-0.089-0.101-0.178-0.196-0.273-0.285-0.018-0.018-0.036-0.036-0.053-0.053-1.938-1.814-4.973-1.713-6.787 0.225-0.83 0.889-1.298 2.063-1.298 3.278 0 0.107 0.006 0.219 0.012 0.326 0.018 0.658-0.403 1.245-1.031 1.44-2.561 0.682-4.078 3.313-3.396 5.874s3.313 4.078 5.874 3.396c2.341-0.628 3.847-2.904 3.509-5.305 0-0.119 0.041-0.231 0.113-0.332l0.012-0.012v-0.006l0.012-0.018c0.089-0.124 0.184-0.249 0.29-0.356 0.16-0.178 0.367-0.302 0.599-0.362 2.572-0.658 4.12-3.278 3.456-5.85-0.172-0.652-0.48-1.274-0.907-1.808z',
        }),
      );
    }
  },
  fn: 'iconesvgallergene_arachides.js',
});