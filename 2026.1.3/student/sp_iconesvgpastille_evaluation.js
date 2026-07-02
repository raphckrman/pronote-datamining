IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgPastille_evaluation = IconeSvgPastille_evaluation;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgPastille_evaluation(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'pastille_evaluation', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M16 8q0 2.177-1.073 4.016t-2.911 2.911-4.016 1.073-4.016-1.073-2.911-2.911-1.073-4.016 1.073-4.016 2.911-2.911 4.016-1.073 4.016 1.073 2.911 2.911 1.073 4.016z',
        }),
      );
    }
  },
  fn: 'iconesvgpastille_evaluation.js',
});