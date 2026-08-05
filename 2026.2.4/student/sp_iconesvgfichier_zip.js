IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFichier_zip = IconeSvgFichier_zip;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFichier_zip(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'fichier_zip', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M6.857 3.429v-1.143h-1.143v1.143h1.143zM8 4.571v-1.143h-1.143v1.143h1.143zM6.857 5.714v-1.143h-1.143v1.143h1.143zM8 6.857v-1.143h-1.143v1.143h1.143zM14.25 3.393q0.25 0.25 0.429 0.679t0.179 0.786v10.286q0 0.357-0.25 0.607t-0.607 0.25h-12q-0.357 0-0.607-0.25t-0.25-0.607v-14.286q0-0.357 0.25-0.607t0.607-0.25h8q0.357 0 0.786 0.179t0.679 0.429zM10.286 1.214v3.357h3.357q-0.089-0.259-0.196-0.366l-2.795-2.795q-0.107-0.107-0.366-0.196zM13.714 14.857v-9.143h-3.714q-0.357 0-0.607-0.25t-0.25-0.607v-3.714h-1.143v1.143h-1.143v-1.143h-4.571v13.714h11.429zM8.116 8.42l0.955 3.116q0.071 0.241 0.071 0.464 0 0.741-0.647 1.228t-1.638 0.487-1.638-0.487-0.647-1.228q0-0.223 0.071-0.464 0.188-0.562 1.071-3.536v-1.143h1.143v1.143h0.705q0.196 0 0.348 0.116t0.205 0.304zM6.857 12.571q0.473 0 0.808-0.17t0.335-0.402-0.335-0.402-0.808-0.17-0.808 0.17-0.335 0.402 0.335 0.402 0.808 0.17z',
        }),
      );
    }
  },
  fn: 'iconesvgfichier_zip.js',
});