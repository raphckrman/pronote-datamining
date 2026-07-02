IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFichier_word = IconeSvgFichier_word;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFichier_word(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'fichier_word', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M14.25 3.393q0.25 0.25 0.429 0.679t0.179 0.786v10.286q0 0.357-0.25 0.607t-0.607 0.25h-12q-0.357 0-0.607-0.25t-0.25-0.607v-14.286q0-0.357 0.25-0.607t0.607-0.25h8q0.357 0 0.786 0.179t0.679 0.429zM10.286 1.214v3.357h3.357q-0.089-0.259-0.196-0.366l-2.795-2.795q-0.107-0.107-0.366-0.196zM13.714 14.857v-9.143h-3.714q-0.357 0-0.607-0.25t-0.25-0.607v-3.714h-6.857v13.714h11.429zM3.223 6.857v0.955h0.625l1.464 5.902h1.42l1.143-4.33q0.063-0.179 0.089-0.411 0.018-0.143 0.018-0.214h0.036l0.027 0.214q0.009 0.027 0.031 0.179t0.049 0.232l1.143 4.33h1.42l1.464-5.902h0.625v-0.955h-2.679v0.955h0.804l-0.884 3.911q-0.045 0.179-0.063 0.411l-0.018 0.188h-0.036q0-0.027-0.004-0.058t-0.013-0.071-0.009-0.058q-0.009-0.045-0.036-0.188t-0.045-0.223l-1.286-4.866h-1.018l-1.286 4.866q-0.018 0.080-0.040 0.219t-0.031 0.192l-0.036 0.188h-0.036l-0.018-0.188q-0.018-0.232-0.063-0.411l-0.884-3.911h0.804v-0.955h-2.679z',
        }),
      );
    }
  },
  fn: 'iconesvgfichier_word.js',
});