IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgReply = IconeSvgReply;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgReply(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'reply', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M16 10.286q0 1.482-1.134 4.027-0.027 0.063-0.094 0.214t-0.121 0.268-0.116 0.196q-0.107 0.152-0.25 0.152-0.134 0-0.21-0.089t-0.076-0.223q0-0.080 0.022-0.237t0.022-0.21q0.045-0.607 0.045-1.098 0-0.902-0.156-1.616t-0.433-1.237-0.714-0.902-0.942-0.621-1.187-0.379-1.375-0.192-1.567-0.054h-2v2.286q0 0.232-0.17 0.402t-0.402 0.17-0.402-0.17l-4.571-4.571q-0.17-0.17-0.17-0.402t0.17-0.402l4.571-4.571q0.17-0.17 0.402-0.17t0.402 0.17 0.17 0.402v2.286h2q6.366 0 7.812 3.598 0.473 1.196 0.473 2.973z',
        }),
      );
    }
  },
  fn: 'iconesvgreply.js',
});