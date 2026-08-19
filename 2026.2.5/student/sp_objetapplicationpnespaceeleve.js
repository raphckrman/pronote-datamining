IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const tslib_1 = require('tslib');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetApplicationPNEspace_1 = require('@scolys/espace/script/ObjetApplicationPNEspace');
    global.Start = function (aParam) {
      const lApp = new ObjetApplicationPNEspaceEleve();
      (0, AccessApp_1.setApp)(lApp);
      lApp.lancer(aParam);
    };
    class ObjetApplicationPNEspaceEleve extends ObjetApplicationPNEspace_1.ObjetApplicationPNEspace {
      async createDeclarationOnglets() {
        const { DeclarationOngletsPNEspaceEleve } =
          await Promise.resolve().then(() =>
            tslib_1.__importStar(
              require('@scolys/espace/script/DeclarationOngletsPNEspaceEleve'),
            ),
          );
        return new DeclarationOngletsPNEspaceEleve();
      }
    }
  },
  fn: 'objetapplicationpnespaceeleve.js',
});