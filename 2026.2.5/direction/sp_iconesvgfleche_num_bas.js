IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFleche_num_bas = IconeSvgFleche_num_bas;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFleche_num_bas(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'fleche_num_bas', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M15.396 2.818h-14.794c-0.534 0-0.803 0.646-0.429 1.024l7.258 9.162c0.23 0.234 0.611 0.237 0.848 0.010l7.539-9.162c0.387-0.378 0.118-1.034-0.422-1.034v0z',
        }),
      );
    }
  },
  fn: 'iconesvgfleche_num_bas.js',
});