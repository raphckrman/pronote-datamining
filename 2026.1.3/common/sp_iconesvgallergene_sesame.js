IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAllergene_sesame = IconeSvgAllergene_sesame;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAllergene_sesame(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'allergene_sesame', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M9.329 1.424l-0.591-0.591c-0.423-0.423-1.101-0.423-1.517 0l-0.591 0.591c-1.987 1.987-1.987 5.201 0 7.188 0.745 0.745 1.953 0.745 2.698 0 0 0 0 0 0 0 1.987-1.98 1.987-5.201 0-7.188z',
        }),
        IE.jsx.str('path', {
          d: 'M1.913 8.497h-0.839c-0.591 0-1.074 0.483-1.074 1.074 0 0 0 0 0 0v0.832c0 2.805 2.275 5.081 5.081 5.081 1.054 0 1.913-0.852 1.913-1.913v0 0c0-2.799-2.275-5.074-5.081-5.074 0 0 0 0 0 0z',
        }),
        IE.jsx.str('path', {
          d: 'M14.094 8.497h0.832c0.591 0 1.074 0.483 1.074 1.074 0 0 0 0 0 0v0.832c0 2.805-2.275 5.081-5.081 5.081 0 0 0 0 0 0-1.054 0-1.913-0.852-1.913-1.913v0 0c0.007-2.799 2.282-5.074 5.087-5.074 0.007 0 0.007 0 0 0z',
        }),
      );
    }
  },
  fn: 'iconesvgallergene_sesame.js',
});