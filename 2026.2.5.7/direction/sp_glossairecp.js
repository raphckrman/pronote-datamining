IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradGlossaireCP = void 0;
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
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
        Precedent: '',
        Suivant: '',
        Agrandir: '',
        Reduire: '',
        Ajouter: '',
        Modifier: '',
        Supprimer: '',
        Modifier_S: '',
        Supprimer_S: '',
      },
    );
    exports.TradGlossaireCP = TradGlossaireCP;
  },
  fn: 'glossairecp.js',
});