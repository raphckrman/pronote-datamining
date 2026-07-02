IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAffichage_widget = IconeSvgAffichage_widget;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAffichage_widget(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'affichage_widget', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M3.783 0v2.733h7.548l-11.33 11.33 1.955 1.955 11.312-11.33v7.584h2.733v-12.271h-12.217z',
        }),
      );
    }
  },
  fn: 'iconesvgaffichage_widget.js',
});