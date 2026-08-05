IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgMagic = IconeSvgMagic;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgMagic(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'magic', viewBox: '0 0 15 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M10.59 5.837l2.668-2.668-0.974-0.974-2.668 2.668zM14.66 3.169q0 0.246-0.164 0.41l-11.71 11.71q-0.164 0.164-0.41 0.164t-0.41-0.164l-1.803-1.803q-0.164-0.164-0.164-0.41t0.164-0.41l11.71-11.71q0.164-0.164 0.41-0.164t0.41 0.164l1.803 1.803q0.164 0.164 0.164 0.41zM2.358 1.439l0.892 0.273-0.892 0.273-0.273 0.892-0.273-0.892-0.892-0.273 0.892-0.273 0.273-0.892zM5.545 2.914l1.785 0.546-1.785 0.546-0.546 1.785-0.546-1.785-1.785-0.546 1.785-0.546 0.546-1.785zM14.014 7.267l0.892 0.273-0.892 0.273-0.273 0.892-0.273-0.892-0.892-0.273 0.892-0.273 0.273-0.892zM8.186 1.439l0.892 0.273-0.892 0.273-0.273 0.892-0.273-0.892-0.892-0.273 0.892-0.273 0.273-0.892z',
        }),
      );
    }
  },
  fn: 'iconesvgmagic.js',
});