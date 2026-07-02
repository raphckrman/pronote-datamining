IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgCase_on = IconeSvgCase_on;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgCase_on(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'case_on', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M12.776 16.002h-9.531c-1.783-0.005-3.227-1.44-3.246-3.223v-9.509c-0.009-0.859 0.329-1.691 0.937-2.299 0.603-0.613 1.426-0.96 2.29-0.965h9.531c1.778 0.005 3.227 1.44 3.241 3.223v9.509c0.009 0.859-0.329 1.691-0.937 2.299-0.599 0.613-1.422 0.96-2.286 0.965zM4.908 7.056c-0.128 0-0.251 0.050-0.343 0.137l-0.663 0.667c-0.096 0.087-0.151 0.206-0.146 0.334 0 0.128 0.055 0.251 0.146 0.343l2.601 2.574c0.091 0.087 0.215 0.137 0.343 0.137h0.014c0.123 0 0.242-0.050 0.329-0.137l4.91-4.864c0.096-0.091 0.146-0.215 0.146-0.347 0-0.128-0.050-0.251-0.146-0.343l-0.663-0.658c-0.091-0.091-0.215-0.146-0.343-0.146s-0.251 0.055-0.338 0.146l-3.899 3.863-1.586-1.573c-0.091-0.087-0.215-0.137-0.343-0.137l-0.018 0.005z',
        }),
      );
    }
  },
  fn: 'iconesvgcase_on.js',
});