IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgChevron_down = IconeSvgChevron_down;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgChevron_down(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'chevron_down', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M15.811 5.593l-7.365 7.355q-0.189 0.189-0.447 0.189t-0.447-0.189l-7.365-7.355q-0.189-0.189-0.189-0.452t0.189-0.452l1.648-1.638q0.189-0.189 0.447-0.189t0.447 0.189l5.271 5.271 5.271-5.271q0.189-0.189 0.447-0.189t0.447 0.189l1.648 1.638q0.189 0.189 0.189 0.452t-0.189 0.452z',
        }),
      );
    }
  },
  fn: 'iconesvgchevron_down.js',
});