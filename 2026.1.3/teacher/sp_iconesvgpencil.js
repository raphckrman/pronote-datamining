IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgPencil = IconeSvgPencil;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgPencil(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'pencil', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M-0 12.373v3.627h3.627l10.044-10.044-3.627-3.627-10.044 10.044zM3.165 14.883v0h-0.933v-1.117h-1.115v-0.934l0.794-0.794 2.048 2.049-0.794 0.796z',
        }),
        IE.jsx.str('path', {
          d: 'M16 3.167c0-0.302-0.108-0.567-0.323-0.794l-2.050-2.041c-0.221-0.221-0.486-0.332-0.793-0.332-0.313 0-0.575 0.111-0.785 0.332l-1.447 1.439 3.627 3.627 1.447-1.447c0.214-0.216 0.323-0.478 0.323-0.785v0z',
        }),
      );
    }
  },
  fn: 'iconesvgpencil.js',
});