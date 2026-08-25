IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAllergene_lupin = IconeSvgAllergene_lupin;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAllergene_lupin(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'allergene_lupin', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M4.13 7.699c-1.857 0.25-4.111-0.46-4.082-2.68-0.25-1.857 0.46-4.111 2.68-4.082 1.857-0.25 4.111 0.46 4.082 2.68 0.255 1.862-0.46 4.116-2.68 4.082z',
        }),
        IE.jsx.str('path', {
          d: 'M10.273 13.871c-1.59 1.011-3.469 2.152-4.815 0.085-1.011-1.59-2.152-3.469-0.085-4.815 1.59-1.011 3.469-2.152 4.815-0.085 1.011 1.595 2.152 3.469 0.085 4.815z',
        }),
        IE.jsx.str('path', {
          d: 'M11.096 7.904c-1.788-0.914-3.236-2.413-2.044-4.468 0.914-1.788 2.413-3.236 4.468-2.044 1.788 0.914 3.236 2.413 2.044 4.468-0.914 1.788-2.413 3.236-4.468 2.044z',
        }),
      );
    }
  },
  fn: 'iconesvgallergene_lupin.js',
});