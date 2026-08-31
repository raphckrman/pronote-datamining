IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAllergene_moutarde = IconeSvgAllergene_moutarde;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAllergene_moutarde(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'allergene_moutarde', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M5.302 5.112h5.406c0.019 0 0.038-0.019 0.038-0.038v0-1.673c0-0.019-0.019-0.038-0.038-0.038v0h-5.406c-0.019 0-0.038 0.019-0.038 0.038v1.679c0 0.019 0.019 0.031 0.038 0.031z',
        }),
        IE.jsx.str('path', {
          d: 'M9.199 2.525h-2.387l0.439-2.525h1.572l0.376 2.525z',
        }),
        IE.jsx.str('path', {
          d: 'M13.108 11.903c-0.038-0.783-0.232-1.547-0.57-2.255l-1.566-3.352h-5.933l-1.572 3.352c-0.338 0.708-0.532 1.472-0.57 2.255 0 0.075-0.006 0.15-0.006 0.226s0 0.144 0.006 0.219c0.056 1.234 0.514 2.412 1.297 3.358l0.238 0.294h7.129l0.238-0.294c0.789-0.946 1.247-2.13 1.297-3.358 0-0.075 0.006-0.144 0.006-0.219s0.013-0.15 0.006-0.226z',
        }),
      );
    }
  },
  fn: 'iconesvgallergene_moutarde.js',
});