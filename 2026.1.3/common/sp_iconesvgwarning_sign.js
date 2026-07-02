IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgWarning_sign = IconeSvgWarning_sign;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgWarning_sign(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'warning_sign', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M9.142 12.843v-1.694q0-0.125-0.085-0.21t-0.201-0.085h-1.712q-0.116 0-0.201 0.085t-0.085 0.21v1.694q0 0.125 0.085 0.21t0.201 0.085h1.712q0.116 0 0.201-0.085t0.085-0.21zM9.124 9.507l0.161-4.094q0-0.107-0.089-0.169-0.116-0.098-0.214-0.098h-1.962q-0.098 0-0.214 0.098-0.089 0.062-0.089 0.187l0.152 4.076q0 0.089 0.089 0.147t0.214 0.058h1.65q0.125 0 0.21-0.058t0.094-0.147zM8.999 1.177l6.849 12.557q0.312 0.562-0.018 1.124-0.152 0.259-0.415 0.41t-0.566 0.152h-13.699q-0.303 0-0.566-0.152t-0.415-0.41q-0.33-0.562-0.018-1.124l6.849-12.557q0.152-0.276 0.419-0.437t0.58-0.161 0.58 0.161 0.419 0.437z',
        }),
      );
    }
  },
  fn: 'iconesvgwarning_sign.js',
});