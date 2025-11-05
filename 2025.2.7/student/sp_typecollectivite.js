IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeCollectiviteToTypeThemeCollectivite = exports.TypeCollectivite =
      void 0;
    const TypeThemeCouleur_1 = require('TypeThemeCouleur');
    var TypeCollectivite;
    (function (TypeCollectivite) {
      TypeCollectivite[(TypeCollectivite['TCL_Aucune'] = 0)] = 'TCL_Aucune';
      TypeCollectivite[(TypeCollectivite['TCL_IleDeFrance'] = 1)] =
        'TCL_IleDeFrance';
    })(TypeCollectivite || (exports.TypeCollectivite = TypeCollectivite = {}));
    const TypeCollectiviteToTypeThemeCollectivite = (aType) => {
      switch (aType) {
        case TypeCollectivite.TCL_IleDeFrance:
          return TypeThemeCouleur_1.TypeThemeCollectivite.ColIdf;
      }
    };
    exports.TypeCollectiviteToTypeThemeCollectivite =
      TypeCollectiviteToTypeThemeCollectivite;
  },
  fn: 'typecollectivite.js',
});