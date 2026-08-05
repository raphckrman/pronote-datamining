IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgDispense = IconeSvgDispense;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgDispense(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'dispense', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M6.45 13.558c-0.356-0.352-0.556-0.831-0.555-1.333 0-1.042 0.845-1.887 1.888-1.887h1.917c0.044 0 0.086 0.003 0.128 0.011l0.597-4.066h-5.414c-1.25 0.002-2.264 1.014-2.266 2.266v5.942c0 0.834 0.675 1.509 1.509 1.509 0 0 0 0 0.002 0h5.791c0.834 0 1.509-0.675 1.509-1.509 0 0 0 0 0-0.002v-0.378h-3.773c-0.502 0.003-0.981-0.197-1.333-0.553z',
        }),
        IE.jsx.str('path', {
          d: 'M6.733 12.194c0.002 0.581 0.472 1.052 1.052 1.052h1.417l0.364-2.105h-1.781c-0.58 0-1.052 0.469-1.052 1.050 0 0.002 0 0.002 0 0.003z',
        }),
        IE.jsx.str('path', {
          d: 'M12.316 6.283l-0.003 4.809v2.266h0.378c0.625 0.002 1.131-0.505 1.133-1.13 0-0.002 0-0.002 0-0.003v-4.431c0-0.833-0.675-1.509-1.508-1.511z',
        }),
        IE.jsx.str('path', {
          d: 'M5.25 2.811c0 0.002 0 0.005 0 0.006 0 1.556 1.261 2.817 2.817 2.817s2.817-1.261 2.817-2.817c0-0.361-0.069-0.706-0.192-1.023l-5.442 1.017z',
        }),
        IE.jsx.str('path', {
          d: 'M9.925 0.7c-0.497-0.436-1.147-0.7-1.858-0.7-1.202 0-2.228 0.753-2.633 1.813l4.491-1.113z',
        }),
      );
    }
  },
  fn: 'iconesvgdispense.js',
});