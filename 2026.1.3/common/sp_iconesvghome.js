IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgHome = IconeSvgHome;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgHome(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'home', viewBox: '0 0 15 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M12.779 8.901v4.438q0 0.24-0.176 0.416t-0.416 0.176h-3.55v-3.55h-2.367v3.55h-3.55q-0.24 0-0.416-0.176t-0.176-0.416v-4.438q0-0.009 0.005-0.028t0.005-0.028l5.316-4.383 5.316 4.383q0.009 0.018 0.009 0.055zM14.841 8.264l-0.573 0.684q-0.074 0.083-0.194 0.102h-0.028q-0.12 0-0.194-0.065l-6.398-5.335-6.398 5.335q-0.111 0.074-0.222 0.065-0.12-0.018-0.194-0.102l-0.573-0.684q-0.074-0.092-0.065-0.217t0.102-0.199l6.648-5.538q0.296-0.24 0.703-0.24t0.703 0.24l2.256 1.886v-1.803q0-0.129 0.083-0.213t0.213-0.083h1.775q0.129 0 0.213 0.083t0.083 0.213v3.772l2.025 1.683q0.092 0.074 0.102 0.199t-0.065 0.217z',
        }),
      );
    }
  },
  fn: 'iconesvghome.js',
});