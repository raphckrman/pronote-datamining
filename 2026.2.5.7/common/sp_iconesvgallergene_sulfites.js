IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAllergene_sulfites = IconeSvgAllergene_sulfites;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAllergene_sulfites(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'allergene_sulfites', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M15.616 12.941l-5.061-5.699v-6.103c0.309 0 0.562-0.247 0.562-0.555 0-0.007 0-0.014 0-0.014 0.027-0.288-0.178-0.542-0.466-0.569-0.034 0-0.062 0-0.096 0h-5.13c-0.309 0-0.562 0.247-0.562 0.555 0 0.007 0 0.014 0 0.014 0.021 0.302 0.261 0.549 0.562 0.569h0.069v6.103l-5.13 5.699c-0.624 0.864-0.425 2.071 0.439 2.695 0.322 0.233 0.706 0.357 1.104 0.363h12.227c1.049-0.021 1.886-0.892 1.865-1.948 0-0.398-0.137-0.789-0.384-1.111z',
        }),
      );
    }
  },
  fn: 'iconesvgallergene_sulfites.js',
});