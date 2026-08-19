IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFiche_cours_partage = IconeSvgFiche_cours_partage;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFiche_cours_partage(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'fiche_cours_partage', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M3.341 5.202c0.787 0 1.53 0.35 2.055 0.918l4.503-2.536c-0.044-0.262-0.087-0.525-0.087-0.831 0-1.53 1.224-2.754 2.754-2.754s2.798 1.224 2.798 2.754c0 1.574-1.268 2.798-2.798 2.798-0.831 0-1.53-0.35-2.055-0.918l-4.546 2.579c0.087 0.219 0.131 0.481 0.131 0.787 0 0.262-0.044 0.525-0.131 0.787l4.546 2.579c0.525-0.568 1.224-0.918 2.055-0.918 1.53 0 2.798 1.224 2.798 2.754s-1.268 2.798-2.798 2.798-2.754-1.268-2.754-2.798c0-0.262 0.044-0.525 0.087-0.787l-4.503-2.579c-0.525 0.568-1.268 0.918-2.055 0.918-1.574 0-2.798-1.224-2.798-2.754s1.224-2.798 2.798-2.798z',
        }),
      );
    }
  },
  fn: 'iconesvgfiche_cours_partage.js',
});