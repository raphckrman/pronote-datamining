IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgOff = IconeSvgOff;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgOff(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'off', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M15.385 8.615q0 1.5-0.587 2.865t-1.577 2.356-2.356 1.577-2.865 0.587-2.865-0.587-2.356-1.577-1.577-2.356-0.587-2.865q0-1.75 0.774-3.298t2.178-2.596q0.413-0.308 0.918-0.24t0.803 0.481q0.308 0.404 0.236 0.909t-0.476 0.813q-0.942 0.712-1.457 1.74t-0.514 2.192q0 1 0.389 1.909t1.053 1.572 1.572 1.053 1.909 0.389 1.909-0.389 1.572-1.053 1.053-1.572 0.389-1.909q0-1.163-0.514-2.192t-1.457-1.74q-0.404-0.308-0.476-0.813t0.236-0.909q0.298-0.413 0.808-0.481t0.913 0.24q1.404 1.048 2.178 2.596t0.774 3.298zM9.231 1.231v6.154q0 0.5-0.365 0.865t-0.865 0.365-0.865-0.365-0.365-0.865v-6.154q0-0.5 0.365-0.865t0.865-0.365 0.865 0.365 0.365 0.865z',
        }),
      );
    }
  },
  fn: 'iconesvgoff.js',
});