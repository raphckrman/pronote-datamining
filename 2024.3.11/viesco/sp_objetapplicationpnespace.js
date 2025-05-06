IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationPNEspace = void 0;
    const ObjetApplicationScoEspace_1 = require('ObjetApplicationScoEspace');
    require('DeclarationImagePN.js');
    require('DeclarationCollectivite.js');
    require('DeclarationImagesConnexionDynamiques.js');
    require('ImagesQCM.css');
    global.Start = function (aParam) {
      GApplication = new ObjetApplicationPNEspace();
      GApplication.lancer(aParam);
    };
    class ObjetApplicationPNEspace extends ObjetApplicationScoEspace_1.ObjetApplicationScoEspace {
      constructor() {
        super();
      }
    }
    exports.ObjetApplicationPNEspace = ObjetApplicationPNEspace;
  },
  fn: 'objetapplicationpnespace.js',
});