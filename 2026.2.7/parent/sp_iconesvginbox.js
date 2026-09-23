IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgInbox = IconeSvgInbox;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgInbox(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'inbox', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M10.656 8.667h3.292q-0.010-0.031-0.026-0.089t-0.026-0.078l-2.208-5.167h-7.375l-2.208 5.167q-0.010 0.031-0.026 0.089t-0.026 0.078h3.292l0.99 2h3.333zM16 8.979v5.021q0 0.271-0.198 0.469t-0.469 0.198h-14.667q-0.271 0-0.469-0.198t-0.198-0.469v-5.021q0-0.646 0.26-1.281l2.479-5.75q0.104-0.26 0.38-0.437t0.547-0.177h8.667q0.271 0 0.547 0.177t0.38 0.437l2.479 5.75q0.26 0.635 0.26 1.281z',
        }),
      );
    }
  },
  fn: 'iconesvginbox.js',
});