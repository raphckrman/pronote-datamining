IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAllergene_soja = IconeSvgAllergene_soja;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAllergene_soja(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'allergene_soja', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M11.88 0.006c-2.164 0-3.953 1.675-4.101 3.833-2.091 0.141-3.746 1.836-3.833 3.933-2.272 0.094-4.034 2.010-3.94 4.282s2.010 4.034 4.282 3.94c2.137-0.087 3.853-1.802 3.94-3.94 2.097-0.087 3.793-1.735 3.933-3.833 2.265-0.154 3.98-2.111 3.833-4.375-0.154-2.164-1.95-3.839-4.114-3.839zM4.080 13.146c-0.777 0-1.414-0.63-1.414-1.414 0-0.777 0.63-1.414 1.414-1.414 0.777 0 1.414 0.63 1.414 1.414v0c0 0.777-0.637 1.414-1.414 1.414zM8.127 9.233c-0.777 0-1.414-0.63-1.414-1.414 0-0.777 0.63-1.414 1.414-1.414 0.777 0 1.414 0.63 1.414 1.414 0 0.777-0.637 1.414-1.414 1.414v0zM11.759 5.494c-0.777 0-1.414-0.63-1.414-1.414 0-0.777 0.63-1.414 1.414-1.414 0.777 0 1.414 0.63 1.414 1.414v0c0 0.777-0.63 1.414-1.414 1.414z',
        }),
      );
    }
  },
  fn: 'iconesvgallergene_soja.js',
});