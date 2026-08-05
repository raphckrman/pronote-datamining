IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgEye_open = IconeSvgEye_open;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgEye_open(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'eye_open', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M14.857 8q-1.357-2.107-3.402-3.152 0.545 0.929 0.545 2.009 0 1.652-1.174 2.826t-2.826 1.174-2.826-1.174-1.174-2.826q0-1.080 0.545-2.009-2.045 1.045-3.402 3.152 1.187 1.83 2.978 2.915t3.879 1.085 3.879-1.085 2.978-2.915zM8.429 4.572q0-0.179-0.125-0.304t-0.304-0.125q-1.116 0-1.915 0.799t-0.799 1.915q0 0.179 0.125 0.304t0.304 0.125 0.304-0.125 0.125-0.304q0-0.768 0.545-1.312t1.312-0.545q0.179 0 0.304-0.125t0.125-0.304zM16 8q0 0.304-0.179 0.616-1.25 2.054-3.362 3.29t-4.46 1.237-4.46-1.241-3.362-3.286q-0.179-0.313-0.179-0.616t0.179-0.616q1.25-2.045 3.362-3.286t4.46-1.241 4.46 1.241 3.362 3.286q0.179 0.313 0.179 0.616z',
        }),
      );
    }
  },
  fn: 'iconesvgeye_open.js',
});