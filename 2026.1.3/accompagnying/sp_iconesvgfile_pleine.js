IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFile_pleine = IconeSvgFile_pleine;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFile_pleine(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'file_pleine', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M10.567 5.501c-0.86 0-1.557-0.697-1.557-1.557v-3.944h-6.84c-0.283 0-0.513 0.23-0.513 0.513v14.973c0 0.284 0.23 0.513 0.513 0.513h11.658c0.284 0 0.513-0.23 0.513-0.513v-9.986h-3.775zM10.919 12.619c0 0.13-0.105 0.235-0.235 0.235h-5.816c-0.13 0-0.235-0.105-0.235-0.235v-0.878c0-0.13 0.105-0.235 0.235-0.235h5.818c0.13 0 0.235 0.105 0.235 0.235v0.878zM10.919 10.43c0 0.13-0.105 0.235-0.235 0.235h-5.816c-0.13 0-0.235-0.105-0.235-0.235v-0.878c0-0.13 0.105-0.235 0.235-0.235h5.818c0.13 0 0.235 0.105 0.235 0.235v0.878zM10.919 8.129c0 0.13-0.105 0.235-0.235 0.235h-5.816c-0.13 0-0.235-0.105-0.235-0.235v-0.878c0-0.13 0.105-0.235 0.235-0.235h5.818c0.13 0 0.235 0.105 0.235 0.235v0.878z',
        }),
        IE.jsx.str('path', {
          d: 'M10.435 0.112h-0.161v3.215c0 0.468 0.381 0.849 0.849 0.849h3.219v-0.156l-3.908-3.908z',
        }),
      );
    }
  },
  fn: 'iconesvgfile_pleine.js',
});