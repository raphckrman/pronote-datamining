IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgDoc_certifie = IconeSvgDoc_certifie;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgDoc_certifie(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'doc_certifie', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M13.537 5.537c0-3.059-2.478-5.537-5.537-5.537s-5.537 2.478-5.537 5.537c0 1.817 0.874 3.427 2.222 4.439v5.724c0 0.25 0.288 0.389 0.48 0.235l2.659-2.11c0.107-0.085 0.261-0.085 0.368 0l2.633 2.105c0.192 0.155 0.48 0.016 0.48-0.235v-5.719c1.359-1.013 2.233-2.622 2.233-4.439zM11.571 4.136l-4.109 4.109c-0.091 0.091-0.197 0.133-0.325 0.133s-0.234-0.043-0.325-0.133l-2.382-2.382c-0.091-0.091-0.133-0.197-0.133-0.325s0.043-0.234 0.133-0.325l0.65-0.65c0.091-0.091 0.197-0.133 0.325-0.133s0.234 0.043 0.325 0.133l1.402 1.407 3.134-3.139c0.091-0.091 0.197-0.133 0.325-0.133s0.235 0.043 0.325 0.133l0.656 0.656c0.091 0.091 0.133 0.197 0.133 0.325v0c0 0.128-0.048 0.234-0.133 0.325z',
        }),
      );
    }
  },
  fn: 'iconesvgdoc_certifie.js',
});