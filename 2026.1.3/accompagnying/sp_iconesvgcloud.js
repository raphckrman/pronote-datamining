IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgCloud = IconeSvgCloud;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgCloud(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'cloud', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M16 10.666q0 1.325-0.938 2.263t-2.263 0.938h-9.067q-1.542 0-2.637-1.096t-1.096-2.637q0-1.1 0.592-2.013t1.558-1.362q-0.017-0.233-0.017-0.358 0-1.767 1.25-3.017t3.017-1.25q1.317 0 2.387 0.733t1.562 1.917q0.583-0.517 1.383-0.517 0.883 0 1.508 0.625t0.625 1.508q0 0.625-0.342 1.15 1.075 0.25 1.775 1.121t0.7 1.996z',
        }),
      );
    }
  },
  fn: 'iconesvgcloud.js',
});