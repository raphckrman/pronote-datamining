IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgMobile_phone = IconeSvgMobile_phone;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgMobile_phone(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'mobile_phone', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M12.267-0.001h-8.527c-0.978 0-1.772 0.794-1.772 1.772v12.458c0 0.978 0.794 1.772 1.772 1.772h8.519c0.978 0 1.772-0.794 1.772-1.772v-12.45c0.006-0.978-0.787-1.78-1.764-1.78v0zM9.861 14.152c0 0.25-0.2 0.452-0.452 0.452h-2.478c-0.25 0-0.452-0.2-0.452-0.452v-0.175c0-0.25 0.2-0.452 0.452-0.452h2.478c0.25 0 0.452 0.2 0.452 0.452v0.175zM13.019 3.634v8.389h-10.031v-8.514h10.022v0.125h0.009z',
        }),
      );
    }
  },
  fn: 'iconesvgmobile_phone.js',
});