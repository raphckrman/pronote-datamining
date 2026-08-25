IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgDiffuser_information = IconeSvgDiffuser_information;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgDiffuser_information(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'diffuser_information', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M11.029 0.693c0.925 0.925 0.925 2.424 0 3.348s-2.424 0.925-3.348 0c-0.925-0.925-0.925-2.424 0-3.348s2.424-0.925 3.348 0z',
        }),
        IE.jsx.str('path', {
          d: 'M11.721 7.895c0-0.995-0.806-1.801-1.801-1.801h-3.842c-0.995 0-1.801 0.806-1.801 1.801v0c0 0.995 0.806 1.801 1.801 1.801h1.258v4.111c0 1.21 0.983 2.194 2.194 2.194s2.19-0.981 2.192-2.194v-5.521c0-0.069-0.004-0.138-0.010-0.205 0.008-0.061 0.010-0.122 0.010-0.186v0z',
        }),
      );
    }
  },
  fn: 'iconesvgdiffuser_information.js',
});