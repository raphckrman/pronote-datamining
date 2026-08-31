IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationPNEspace = void 0;
    const ObjetApplicationScoEspace_1 = require('@scolys/espace/script/ObjetApplicationScoEspace');
    require('@scolys/espace/declaration/DeclarationImagePN');
    require('@scolys/espace/declaration/DeclarationCollectivite');
    require('@scolys/espace/script/DeclarationImagesConnexionDynamiques');
    require('@cp/Produit/Css/ImagesQCM.css');
    class ObjetApplicationPNEspace extends ObjetApplicationScoEspace_1.ObjetApplicationScoEspace {
      constructor() {
        super();
      }
    }
    exports.ObjetApplicationPNEspace = ObjetApplicationPNEspace;
  },
  fn: 'objetapplicationpnespace.js',
});