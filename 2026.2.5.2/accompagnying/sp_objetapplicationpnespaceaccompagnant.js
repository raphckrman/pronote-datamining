IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const tslib_1 = require('tslib');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetApplicationPNEspace_1 = require('@scolys/espace/script/ObjetApplicationPNEspace');
    global.Start = function (aParam) {
      const lApp = new ObjetApplicationPNEspaceAccompagnant();
      (0, AccessApp_1.setApp)(lApp);
      lApp.lancer(aParam);
    };
    class ObjetApplicationPNEspaceAccompagnant extends ObjetApplicationPNEspace_1.ObjetApplicationPNEspace {
      async createDeclarationOnglets() {
        const { DeclarationOngletsPNEspaceAccompagnant } =
          await Promise.resolve().then(() =>
            tslib_1.__importStar(
              require('@scolys/espace/script/DeclarationOngletsPNEspaceAccompagnant'),
            ),
          );
        return new DeclarationOngletsPNEspaceAccompagnant();
      }
    }
  },
  fn: 'objetapplicationpnespaceaccompagnant.js',
});