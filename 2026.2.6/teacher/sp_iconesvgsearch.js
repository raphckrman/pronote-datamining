IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgSearch = IconeSvgSearch;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgSearch(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'search', viewBox: '0 0 15 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M10.32 6.853q0-1.657-1.178-2.835t-2.835-1.178-2.835 1.178-1.178 2.835 1.178 2.835 2.835 1.178 2.835-1.178 1.178-2.835zM14.906 14.307q0 0.466-0.34 0.806t-0.806 0.34q-0.484 0-0.806-0.34l-3.073-3.064q-1.604 1.111-3.574 1.111-1.281 0-2.45-0.497t-2.016-1.344-1.344-2.016-0.497-2.45 0.497-2.45 1.344-2.016 2.016-1.344 2.45-0.497 2.45 0.497 2.016 1.344 1.344 2.016 0.497 2.45q0 1.971-1.111 3.574l3.073 3.073q0.331 0.331 0.331 0.806z',
        }),
      );
    }
  },
  fn: 'iconesvgsearch.js',
});