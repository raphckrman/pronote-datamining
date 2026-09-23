IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgDiffuser_sondage = IconeSvgDiffuser_sondage;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgDiffuser_sondage(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'diffuser_sondage', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M9.575 7.021h6.357c0.038 0 0.068-0.031 0.068-0.068v0 0c0-3.578-2.844-6.508-6.42-6.614-0.144-0.002-0.262 0.113-0.264 0.255 0 0.002 0 0.002 0 0.005v6.161c0 0.146 0.116 0.262 0.26 0.262z',
        }),
        IE.jsx.str('path', {
          d: 'M7.557 8.386v-7.27c-2.663-0.101-5.153 1.258-6.515 3.522-0.031 0.054-0.456 0.821-0.701 1.548-0.264 0.836-0.378 1.716-0.33 2.594 0.191 3.652 3.151 6.64 6.8 6.866 4.23 0.262 7.74-3.087 7.74-7.261h-6.994z',
        }),
      );
    }
  },
  fn: 'iconesvgdiffuser_sondage.js',
});