IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgRadio_off = IconeSvgRadio_off;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgRadio_off(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'radio_off', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M8 1.499c3.584 0 6.501 2.917 6.501 6.501s-2.917 6.501-6.501 6.501-6.501-2.917-6.501-6.501 2.917-6.501 6.501-6.501zM8 0c-4.416 0-8 3.584-8 8 0 4.421 3.584 8 8 8s8-3.579 8-8c0-4.416-3.584-8-8-8v0z',
        }),
      );
    }
  },
  fn: 'iconesvgradio_off.js',
});