IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgEdt_permanence = IconeSvgEdt_permanence;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgEdt_permanence(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'edt_permanence', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M13.867 14.462h-0.575l0.014-2.034c-0.020-1.975-1.225-3.748-3.053-4.498 1.839-0.725 3.052-2.498 3.052-4.48v-1.909h0.569c0.387-0.033 0.683-0.375 0.65-0.77 0.027-0.389-0.261-0.736-0.65-0.77h-11.747c-0.387 0.033-0.683 0.375-0.65 0.77-0.027 0.387 0.261 0.736 0.65 0.77h0.556v1.908c-0.008 1.983 1.203 3.756 3.052 4.48-1.828 0.75-3.027 2.523-3.053 4.498l0.014 2.034h-0.569c-0.389 0.033-0.683 0.375-0.65 0.77-0.027 0.387 0.261 0.736 0.65 0.77h11.747c0.387-0.033 0.683-0.375 0.65-0.77 0.039-0.402-0.262-0.742-0.656-0.769z',
        }),
      );
    }
  },
  fn: 'iconesvgedt_permanence.js',
});