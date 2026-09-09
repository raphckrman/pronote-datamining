IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const tslib_1 = require('tslib');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetApplicationPNEspace_1 = require('@scolys/espace/script/ObjetApplicationPNEspace');
    global.Start = function (aParam) {
      const lApp = new ObjetApplicationPNEspaceEtablissement();
      (0, AccessApp_1.setApp)(lApp);
      lApp.lancer(aParam);
    };
    class ObjetApplicationPNEspaceEtablissement extends ObjetApplicationPNEspace_1.ObjetApplicationPNEspace {
      async createDeclarationOnglets() {
        const { DeclarationOngletsPNEspaceEtablissement } =
          await Promise.resolve().then(() =>
            tslib_1.__importStar(
              require('@scolys/espace/script/DeclarationOngletsPNEspaceEtablissement'),
            ),
          );
        return new DeclarationOngletsPNEspaceEtablissement();
      }
    }
  },
  fn: 'objetapplicationpnespaceetablissement.js',
});