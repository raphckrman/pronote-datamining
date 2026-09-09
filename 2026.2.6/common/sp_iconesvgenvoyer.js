IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgEnvoyer = IconeSvgEnvoyer;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgEnvoyer(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'envoyer', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M15.747 0.107q0.294 0.214 0.241 0.571l-2.284 13.706q-0.045 0.259-0.286 0.402-0.125 0.071-0.277 0.071-0.098 0-0.214-0.045l-4.703-1.919-2.659 2.918q-0.161 0.187-0.419 0.187-0.125 0-0.205-0.036-0.17-0.062-0.268-0.21t-0.098-0.326v-4.033l-4.212-1.722q-0.33-0.125-0.357-0.491-0.027-0.348 0.286-0.526l14.849-8.567q0.312-0.187 0.607 0.018zM12.695 13.484l1.972-11.806-12.796 7.38 2.998 1.223 7.701-5.702-4.265 7.112z',
        }),
      );
    }
  },
  fn: 'iconesvgenvoyer.js',
});