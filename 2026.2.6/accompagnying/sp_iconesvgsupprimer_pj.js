IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgSupprimer_pj = IconeSvgSupprimer_pj;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgSupprimer_pj(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'supprimer_pj', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M8 0c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zM10.976 9.993l0.142 0.142-0.818 0.818-2.135-2.135-2.135 2.135-0.818-0.818 2.135-2.135-2.135-2.135 0.818-0.818 2.135 2.135 2.135-2.135 0.818 0.818-2.135 2.135 1.993 1.993z',
        }),
      );
    }
  },
  fn: 'iconesvgsupprimer_pj.js',
});