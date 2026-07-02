IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAllergene_gluten = IconeSvgAllergene_gluten;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAllergene_gluten(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'allergene_gluten', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M15.97 0l-7.531 2.514v3.93l7.531-2.504v-3.94z',
        }),
        IE.jsx.str('path', {
          d: 'M8.439 7.302v3.93l7.531-2.504v-3.93l-7.531 2.504z',
        }),
        IE.jsx.str('path', {
          d: 'M8.439 12.070v3.93l7.531-2.504v-3.93l-7.531 2.504z',
        }),
        IE.jsx.str('path', {
          d: 'M0.030 0v3.93l7.591 2.504v-3.92l-7.591-2.514z',
        }),
        IE.jsx.str('path', {
          d: 'M0.030 8.728l7.591 2.504v-3.93l-7.591-2.504v3.93z',
        }),
        IE.jsx.str('path', {
          d: 'M0.030 13.486l7.591 2.504v-3.93l-7.591-2.504v3.93z',
        }),
      );
    }
  },
  fn: 'iconesvgallergene_gluten.js',
});