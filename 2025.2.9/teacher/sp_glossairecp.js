IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradGlossaireCP = void 0;
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TradGlossaireCP = ObjetTraduction_1.TraductionsModule.getModule(
      'GlossaireCP',
      {
        PiecesJointes: '',
        ConsulterLesPiecesJointes: '',
        PageConnexion: '',
        PageDeconnexion: '',
        PageCommune: '',
        Aucun: '',
        Aucune: '',
      },
    );
    exports.TradGlossaireCP = TradGlossaireCP;
  },
  fn: 'glossairecp.js',
});