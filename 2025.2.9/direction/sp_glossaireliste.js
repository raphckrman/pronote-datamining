IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradGlossaireListe = void 0;
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TradGlossaireListe = ObjetTraduction_1.TraductionsModule.getModule(
      'GlossaireListe',
      { wai: { treegrid: '', tree: '', toolbar: '' } },
    );
    exports.TradGlossaireListe = TradGlossaireListe;
  },
  fn: 'glossaireliste.js',
});