IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgCase_indetermine = IconeSvgCase_indetermine;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgCase_indetermine(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'case_indetermine', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M12.759 0h-9.531c-0.864 0.005-1.687 0.352-2.29 0.965-0.608 0.613-0.946 1.44-0.937 2.299v9.509c0.018 1.783 1.463 3.218 3.246 3.223h9.531c0.859-0.005 1.687-0.352 2.29-0.969 0.608-0.613 0.942-1.44 0.937-2.299v-9.509c-0.023-1.778-1.467-3.214-3.246-3.218zM12.242 8.768c0 0.128-0.105 0.238-0.238 0.238h-8.014c-0.128 0-0.238-0.105-0.238-0.238v-1.536c0-0.128 0.105-0.238 0.238-0.238h8.018c0.128 0 0.238 0.105 0.238 0.238v1.536z',
        }),
      );
    }
  },
  fn: 'iconesvgcase_indetermine.js',
});