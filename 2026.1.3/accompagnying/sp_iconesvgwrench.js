IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgWrench = IconeSvgWrench;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgWrench(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'wrench', viewBox: '0 0 15 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M3.297 12.746q0-0.236-0.173-0.409t-0.409-0.173-0.409 0.173-0.173 0.409 0.173 0.409 0.409 0.173 0.409-0.173 0.173-0.409zM9.147 8.931l-6.195 6.195q-0.336 0.336-0.818 0.336-0.472 0-0.827-0.336l-0.963-0.981q-0.345-0.327-0.345-0.818 0-0.481 0.345-0.827l6.186-6.186q0.354 0.89 1.040 1.576t1.576 1.040zM14.906 4.98q0 0.354-0.209 0.963-0.427 1.217-1.494 1.976t-2.348 0.759q-1.681 0-2.875-1.195t-1.195-2.875 1.195-2.875 2.875-1.195q0.527 0 1.104 0.15t0.977 0.422q0.145 0.1 0.145 0.254t-0.145 0.254l-2.662 1.535v2.035l1.753 0.972q0.045-0.027 0.718-0.441t1.231-0.736 0.64-0.322q0.136 0 0.213 0.091t0.077 0.227z',
        }),
      );
    }
  },
  fn: 'iconesvgwrench.js',
});