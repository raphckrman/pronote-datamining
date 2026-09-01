IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgPunition = IconeSvgPunition;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgPunition(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'punition', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M6.772 6.925l0.145 2.181c0.038 0.572 0.463 1.015 0.975 1.015 0.504 0 0.926-0.43 0.973-0.993l0.184-2.178c0.058-0.684-0.375-1.296-0.982-1.39v0c-0.721-0.111-1.349 0.551-1.295 1.364z',
        }),
        IE.jsx.str('path', {
          d: 'M9.073 12c0 0.641-0.52 1.161-1.161 1.161s-1.161-0.52-1.161-1.161c0-0.641 0.52-1.161 1.161-1.161s1.161 0.52 1.161 1.161z',
        }),
        IE.jsx.str('path', {
          d: 'M15.91 13.994l-7.484-12.645c-0.114-0.191-0.32-0.317-0.556-0.317-0.239 0-0.447 0.13-0.559 0.323l-0.002 0.003-7.225 12.645c-0.054 0.092-0.085 0.202-0.085 0.32 0 0.356 0.289 0.645 0.645 0.645 0 0 0 0 0 0h14.71c0.356-0 0.645-0.289 0.645-0.645 0-0.121-0.034-0.235-0.092-0.332l0.002 0.003zM1.757 13.678l6.124-10.717 6.343 10.717z',
        }),
      );
    }
  },
  fn: 'iconesvgpunition.js',
});