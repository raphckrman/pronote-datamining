IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgGraphe_araigne = IconeSvgGraphe_araigne;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgGraphe_araigne(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'graphe_araigne', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M10.15 6.861l5.831-5.831-1.009-1.008-5.811 5.811v-5.792h-2.322v5.811l-5.83-5.83-1.009 1.008 5.831 5.831h-5.813v2.32h5.792l-5.811 5.813 1.009 1.008 5.83-5.83v5.83h2.322v-5.811l5.811 5.811 1.009-1.008-5.813-5.813h5.813v-2.32h-0.305z',
        }),
      );
    }
  },
  fn: 'iconesvggraphe_araigne.js',
});