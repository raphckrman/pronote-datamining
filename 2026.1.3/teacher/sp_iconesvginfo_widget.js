IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgInfo_widget = IconeSvgInfo_widget;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgInfo_widget(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'info_widget', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M9.11 13.778v-8.445h-2.222v0.005h-2v2.222h2v6.219h-2v2.222h6.223v-2.222z',
        }),
        IE.jsx.str('path', {
          d: 'M9.199 1.778c0 0.982-0.796 1.778-1.778 1.778s-1.778-0.796-1.778-1.778c0-0.982 0.796-1.778 1.778-1.778s1.778 0.796 1.778 1.778z',
        }),
      );
    }
  },
  fn: 'iconesvginfo_widget.js',
});