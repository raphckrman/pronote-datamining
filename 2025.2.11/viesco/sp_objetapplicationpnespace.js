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
    const AccessApp_1 = require('AccessApp');
    global.Start = function (aParam) {
      (0, AccessApp_1.setApp)(new ObjetApplicationPNEspace());
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