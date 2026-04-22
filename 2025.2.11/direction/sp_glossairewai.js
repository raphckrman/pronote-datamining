IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradGlossaireWAI = void 0;
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TradGlossaireWAI = ObjetTraduction_1.TraductionsModule.getModule(
      'GlossaireWAI',
      {
        wai: { Aide: '' },
        heures: '',
        colonne: '',
        ligne: '',
        Coche: '',
        Decoche: '',
        CochePartiel: '',
        PeriodeCloturee: '',
        ContenusExcluRGAA: '',
      },
    );
    exports.TradGlossaireWAI = TradGlossaireWAI;
  },
  fn: 'glossairewai.js',
});