IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAsterisk = IconeSvgAsterisk;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAsterisk(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'asterisk', viewBox: '0 0 15 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M14.224 9.604q0.479 0.271 0.62 0.807t-0.13 1.016l-0.667 1.146q-0.271 0.479-0.807 0.62t-1.016-0.13l-2.771-1.594v3.198q0 0.542-0.396 0.938t-0.938 0.396h-1.333q-0.542 0-0.938-0.396t-0.396-0.938v-3.198l-2.771 1.594q-0.479 0.271-1.016 0.13t-0.807-0.62l-0.667-1.146q-0.271-0.479-0.13-1.016t0.62-0.807l2.771-1.604-2.771-1.604q-0.479-0.271-0.62-0.807t0.13-1.016l0.667-1.146q0.271-0.479 0.807-0.62t1.016 0.13l2.771 1.594v-3.198q0-0.542 0.396-0.938t0.938-0.396h1.333q0.542 0 0.938 0.396t0.396 0.938v3.198l2.771-1.594q0.479-0.271 1.016-0.13t0.807 0.62l0.667 1.146q0.271 0.479 0.13 1.016t-0.62 0.807l-2.771 1.604z',
        }),
      );
    }
  },
  fn: 'iconesvgasterisk.js',
});