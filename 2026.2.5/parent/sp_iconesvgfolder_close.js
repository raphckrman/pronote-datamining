IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFolder_close = IconeSvgFolder_close;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFolder_close(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'folder_close', viewBox: '0 0 15 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M14.906 5.993v6.307q0 0.824-0.591 1.415t-1.415 0.591h-10.893q-0.824 0-1.415-0.591t-0.591-1.415v-8.6q0-0.824 0.591-1.415t1.415-0.591h2.867q0.824 0 1.415 0.591t0.591 1.415v0.287h6.020q0.824 0 1.415 0.591t0.591 1.415z',
        }),
      );
    }
  },
  fn: 'iconesvgfolder_close.js',
});