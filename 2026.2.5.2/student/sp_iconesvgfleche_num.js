IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFleche_num = IconeSvgFleche_num;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFleche_num(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'fleche_num', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M2.818 0.604v14.794c0 0.534 0.646 0.803 1.024 0.429l9.162-7.258c0.234-0.23 0.237-0.611 0.010-0.848l-9.162-7.539c-0.378-0.387-1.034-0.118-1.034 0.422v0z',
        }),
      );
    }
  },
  fn: 'iconesvgfleche_num.js',
});