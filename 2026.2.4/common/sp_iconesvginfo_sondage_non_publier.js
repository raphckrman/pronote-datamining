IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgInfo_sondage_non_publier = IconeSvgInfo_sondage_non_publier;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgInfo_sondage_non_publier(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'info_sondage_non_publier', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M11.675 10.199l2.661-2.661 1.49 1.481-2.665 2.665 2.661 2.67-1.49 1.486-2.656-2.665-2.665 2.665-1.49-1.486 2.665-2.665-2.665-2.665 1.49-1.486z',
        }),
        IE.jsx.str('path', { d: 'M15.099 11.685v0c0 0 0 0 0 0v0z' }),
        IE.jsx.str('path', {
          d: 'M15.305 6.565l-0.969-0.965-0.174 0.174c-0.654-1.806-2.085-3.259-3.936-3.931 0.768 1.714 1.166 3.561 1.179 5.44h1.253l-0.978 0.978-1.769-1.769c-0.265-3.214-1.321-4.965-1.906-4.965-0.631 0-1.806 2.039-1.947 5.751h1.275l-1.746 1.746 0.521 0.521c0.128 1.504 0.425 2.688 0.768 3.515l-1.093 1.093c-0.763-1.71-1.166-3.561-1.179-5.435h-3.118c0.279 2.482 1.943 4.59 4.288 5.44l-0.192 0.192 1.605 1.605c-4.032-0.402-7.186-3.813-7.186-7.954 0-4.416 3.584-8 8-8 4.151 0 7.57 3.168 7.963 7.218l-0.658-0.654zM1.486 7.278h3.118c0.014-1.879 0.416-3.73 1.189-5.445-2.359 0.85-4.023 2.962-4.306 5.445z',
        }),
      );
    }
  },
  fn: 'iconesvginfo_sondage_non_publier.js',
});