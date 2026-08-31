IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgEllipsis_vertical = IconeSvgEllipsis_vertical;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgEllipsis_vertical(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'ellipsis_vertical', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M8.946 3.781h-1.891c-0.263 0-0.485-0.091-0.669-0.275s-0.275-0.408-0.275-0.669v-1.891c0-0.263 0.091-0.485 0.275-0.669s0.408-0.275 0.669-0.275h1.891c0.263 0 0.485 0.091 0.669 0.275s0.275 0.406 0.275 0.667v1.891c0 0.263-0.091 0.485-0.275 0.669-0.184 0.186-0.408 0.277-0.669 0.277z',
        }),
        IE.jsx.str('path', {
          d: 'M8.946 9.89h-1.891c-0.263 0-0.485-0.091-0.669-0.275s-0.275-0.408-0.275-0.669v-1.891c0-0.263 0.091-0.485 0.275-0.669s0.408-0.275 0.669-0.275h1.891c0.263 0 0.485 0.091 0.669 0.275s0.275 0.408 0.275 0.669v1.891c0 0.263-0.091 0.485-0.275 0.669s-0.408 0.275-0.669 0.275z',
        }),
        IE.jsx.str('path', {
          d: 'M8.946 16h-1.891c-0.263 0-0.485-0.091-0.669-0.275s-0.275-0.408-0.275-0.669v-1.891c0-0.263 0.091-0.485 0.275-0.669s0.408-0.275 0.669-0.275h1.891c0.263 0 0.485 0.091 0.669 0.275s0.275 0.406 0.275 0.667v1.891c0 0.263-0.091 0.485-0.275 0.669s-0.408 0.277-0.669 0.277z',
        }),
      );
    }
  },
  fn: 'iconesvgellipsis_vertical.js',
});