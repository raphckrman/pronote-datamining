IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireVisios = void 0;
    const UtilitaireVisios_1 = require('UtilitaireVisios');
    class UtilitaireVisiosSco extends UtilitaireVisios_1.UtilitaireVisios {
      getTailleMaxLibelle() {
        return GParametres.tailleMaxLibelleUrlCours;
      }
      getTailleMaxCommentaire() {
        return GParametres.tailleMaxCommentaireUrlCours;
      }
    }
    const lUtilitaireVisiosSco = new UtilitaireVisiosSco();
    exports.UtilitaireVisios = lUtilitaireVisiosSco;
  },
  fn: 'utilitairevisiossco.js',
});