IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireJsPdf = void 0;
    const tslib_1 = require('tslib');
    const DeferLoadingScript_1 = require('@librairies/script/Divers/DeferLoadingScript');
    class UtilitaireJsPdf {
      static declarer(aApp) {
        aApp.setGeneric('lib-jspdf', async () => {
          if (this.jspdf) {
            return this.jspdf;
          }
          try {
            await DeferLoadingScript_1.deferLoadingScript.loadAsync('jspdf');
            const lLibJsPDF = await Promise.resolve().then(() =>
              tslib_1.__importStar(require('jspdf.min')),
            );
            if (!lLibJsPDF) {
              throw new Error('Erreur chargemetn jspdf');
            }
            this.jspdf = lLibJsPDF.jsPDF;
            return this.jspdf;
          } catch (_a) {
            throw new Error(`Erreur chargemetn jspdf`);
          }
        });
      }
    }
    exports.UtilitaireJsPdf = UtilitaireJsPdf;
  },
  fn: 'utilitairejspdf.js',
});