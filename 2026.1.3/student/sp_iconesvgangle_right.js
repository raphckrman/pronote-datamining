IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAngle_right = IconeSvgAngle_right;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAngle_right(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'angle_right', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M12.665 8q0 0.208-0.16 0.369l-7.471 7.471q-0.16 0.16-0.369 0.16t-0.369-0.16l-0.802-0.802q-0.16-0.16-0.16-0.369t0.16-0.369l6.301-6.301-6.301-6.301q-0.16-0.16-0.16-0.369t0.16-0.369l0.802-0.802q0.16-0.16 0.369-0.16t0.369 0.16l7.471 7.471q0.16 0.16 0.16 0.369z',
        }),
      );
    }
  },
  fn: 'iconesvgangle_right.js',
});