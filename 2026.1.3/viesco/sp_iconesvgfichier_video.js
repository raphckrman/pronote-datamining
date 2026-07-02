IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFichier_video = IconeSvgFichier_video;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFichier_video(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'fichier_video', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M14.25 3.393q0.25 0.25 0.429 0.679t0.179 0.786v10.286q0 0.357-0.25 0.607t-0.607 0.25h-12q-0.357 0-0.607-0.25t-0.25-0.607v-14.286q0-0.357 0.25-0.607t0.607-0.25h8q0.357 0 0.786 0.179t0.679 0.429zM10.286 1.214v3.357h3.357q-0.089-0.259-0.196-0.366l-2.795-2.795q-0.107-0.107-0.366-0.196zM13.714 14.857v-9.143h-3.714q-0.357 0-0.607-0.25t-0.25-0.607v-3.714h-6.857v13.714h11.429zM8 6.857q0.464 0 0.804 0.339t0.339 0.804v3.429q0 0.464-0.339 0.804t-0.804 0.339h-3.429q-0.464 0-0.804-0.339t-0.339-0.804v-3.429q0-0.464 0.339-0.804t0.804-0.339h3.429zM12.393 6.875q0.179 0.071 0.179 0.268v5.143q0 0.196-0.179 0.268-0.071 0.018-0.107 0.018-0.125 0-0.205-0.080l-2.366-2.375v-0.804l2.366-2.375q0.080-0.080 0.205-0.080 0.036 0 0.107 0.018z',
        }),
      );
    }
  },
  fn: 'iconesvgfichier_video.js',
});