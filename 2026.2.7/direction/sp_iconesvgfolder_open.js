IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFolder_open = IconeSvgFolder_open;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFolder_open(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'folder_open', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M16 9.022q0 0.264-0.264 0.562l-2.861 3.372q-0.366 0.434-1.026 0.737t-1.222 0.302h-9.265q-0.29 0-0.515-0.111t-0.226-0.366q0-0.264 0.264-0.562l2.861-3.372q0.366-0.434 1.026-0.737t1.222-0.302h9.265q0.29 0 0.515 0.111t0.226 0.366zM13.079 6.093v1.362h-7.085q-0.801 0-1.677 0.404t-1.396 1.018l-2.912 3.423q0-0.034-0.004-0.106t-0.004-0.106v-8.175q0-0.783 0.562-1.345t1.345-0.562h2.725q0.783 0 1.345 0.562t0.562 1.345v0.272h4.632q0.783 0 1.345 0.562t0.562 1.345z',
        }),
      );
    }
  },
  fn: 'iconesvgfolder_open.js',
});