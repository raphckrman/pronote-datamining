IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const ObjetApplicationCommunSco_1 = require('@scolys/espace/script/ObjetApplicationCommunSco');
    const AccessApp_1 = require('@cp/script/AccessApp');
    require('@scolys/espace/declaration/DeclarationImagePN');
    require('@scolys/espace/script/DeclarationImagesConnexionDynamiques');
    class ObjetApplicationPageCommune extends ObjetApplicationCommunSco_1.ObjetApplicationCommunSco {}
    global.Start = function (aParametres) {
      (0, AccessApp_1.setApp)(new ObjetApplicationPageCommune());
      GApplication.lancer(aParametres);
    };
  },
  fn: 'objetapplicationpagecommune.js',
});