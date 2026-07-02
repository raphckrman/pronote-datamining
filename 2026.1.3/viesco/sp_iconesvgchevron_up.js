IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgChevron_up = IconeSvgChevron_up;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgChevron_up(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'chevron_up', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M15.811 11.31l-1.648 1.638q-0.189 0.189-0.447 0.189t-0.447-0.189l-5.27-5.27-5.27 5.27q-0.189 0.189-0.447 0.189t-0.447-0.189l-1.648-1.638q-0.189-0.189-0.189-0.452t0.189-0.452l7.365-7.355q0.189-0.189 0.447-0.189t0.447 0.189l7.365 7.355q0.189 0.189 0.189 0.452t-0.189 0.452z',
        }),
      );
    }
  },
  fn: 'iconesvgchevron_up.js',
});