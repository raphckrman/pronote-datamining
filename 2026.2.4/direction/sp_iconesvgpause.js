IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgPause = IconeSvgPause;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgPause(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'pause', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M2 0.001h2c1.105 0 2 0.895 2 2v12c0 1.105-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2v-12c0-1.105 0.895-2 2-2z',
        }),
        IE.jsx.str('path', {
          d: 'M12 0.001h2c1.105 0 2 0.895 2 2v12c0 1.105-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2v-12c0-1.105 0.895-2 2-2z',
        }),
      );
    }
  },
  fn: 'iconesvgpause.js',
});