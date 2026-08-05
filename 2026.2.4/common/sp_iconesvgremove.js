IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgRemove = IconeSvgRemove;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgRemove(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'remove', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M16 12.875q0 0.539-0.377 0.916l-1.832 1.832q-0.377 0.377-0.916 0.377t-0.916-0.377l-3.96-3.96-3.96 3.96q-0.377 0.377-0.916 0.377t-0.916-0.377l-1.832-1.832q-0.377-0.377-0.377-0.916t0.377-0.916l3.96-3.96-3.96-3.96q-0.377-0.377-0.377-0.916t0.377-0.916l1.832-1.832q0.377-0.377 0.916-0.377t0.916 0.377l3.96 3.96 3.96-3.96q0.377-0.377 0.916-0.377t0.916 0.377l1.832 1.832q0.377 0.377 0.377 0.916t-0.377 0.916l-3.96 3.96 3.96 3.96q0.377 0.377 0.377 0.916z',
        }),
      );
    }
  },
  fn: 'iconesvgremove.js',
});