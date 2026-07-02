IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgInfo_sondage_publier = IconeSvgInfo_sondage_publier;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgInfo_sondage_publier(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'info_sondage_publier', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M8 0c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8c-0.005-4.416-3.584-7.995-8-8zM14.519 7.278h-3.118c-0.014-1.879-0.421-3.73-1.189-5.445 2.354 0.85 4.018 2.958 4.302 5.445zM8 14.473c-0.631 0-1.806-2.039-1.947-5.751h3.899c-0.146 3.712-1.321 5.751-1.952 5.751zM6.053 7.278c0.142-3.712 1.317-5.751 1.947-5.751s1.806 2.039 1.947 5.751h-3.895zM5.783 1.833c-0.768 1.714-1.17 3.566-1.184 5.445h-3.113c0.279-2.487 1.947-4.594 4.297-5.445zM1.486 8.722h3.118c0.014 1.879 0.416 3.73 1.189 5.445-2.359-0.85-4.023-2.962-4.306-5.445zM10.222 14.162c0.768-1.714 1.166-3.566 1.179-5.445h3.113c-0.279 2.487-1.947 4.594-4.302 5.445z',
        }),
      );
    }
  },
  fn: 'iconesvginfo_sondage_publier.js',
});