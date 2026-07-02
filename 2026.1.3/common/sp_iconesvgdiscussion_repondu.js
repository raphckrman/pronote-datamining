IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgDiscussion_repondu = IconeSvgDiscussion_repondu;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgDiscussion_repondu(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'discussion_repondu', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M12.649 4.878h-9.093l3.63-3.584-1.312-1.294-5.874 5.806 5.851 5.787 1.312-1.294-3.616-3.57h9.102c0.818 0 1.481 0.654 1.481 1.463v4.494c0 0.809-0.663 1.467-1.481 1.467 0 0 0 0-0.005 0h-3.845v1.847h3.849c1.851-0.005 3.346-1.486 3.351-3.31v-4.498c-0.005-1.829-1.504-3.31-3.351-3.314z',
        }),
      );
    }
  },
  fn: 'iconesvgdiscussion_repondu.js',
});