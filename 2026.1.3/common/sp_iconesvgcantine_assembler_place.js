IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgCantine_assembler_place = IconeSvgCantine_assembler_place;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgCantine_assembler_place(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'cantine_assembler_place', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', { d: 'M9.624 0h6.344v6.344h-6.344v-6.344z' }),
        IE.jsx.str('path', {
          d: 'M7.092 2.322h-7.060v13.678h13.584v-7.136h-6.524z',
        }),
      );
    }
  },
  fn: 'iconesvgcantine_assembler_place.js',
});