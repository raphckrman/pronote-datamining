IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgCheck_empty = IconeSvgCheck_empty;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgCheck_empty(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'check_empty', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M12.628 1.506h-9.381q-0.744 0-1.274 0.53t-0.53 1.274v9.381q0 0.744 0.53 1.274t1.274 0.53h9.381q0.744 0 1.274-0.53t0.53-1.274v-9.381q0-0.744-0.53-1.274t-1.274-0.53zM15.875 3.31v9.381q0 1.342-0.953 2.294t-2.294 0.953h-9.381q-1.342 0-2.294-0.953t-0.953-2.294v-9.381q0-1.342 0.953-2.294t2.294-0.953h9.381q1.342 0 2.294 0.953t0.953 2.294z',
        }),
      );
    }
  },
  fn: 'iconesvgcheck_empty.js',
});