IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFermeture_widget = IconeSvgFermeture_widget;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFermeture_widget(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'fermeture_widget', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M10.031 8.001l5.969-5.969-2.031-2.031-0.268 0.27-5.699 5.699-5.969-5.969-2.031 2.031 0.27 0.268 5.699 5.701-5.969 5.968 2.031 2.031 0.268-0.27 5.701-5.699 5.968 5.969 2.031-2.031-0.27-0.268-5.699-5.699z',
        }),
      );
    }
  },
  fn: 'iconesvgfermeture_widget.js',
});