IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.STheme_Modele = void 0;
    require('./Theme_Modele.scss');
    exports.STheme_Modele = {
      Lien: 'Lien',
      LienAccueil: 'LienAccueil',
      SansMain: 'SansMain',
      Bouton: 'Bouton',
      CelluleZoneTexte: 'CelluleZoneTexte',
      CelluleTexte: 'CelluleTexte',
    };
  },
  fn: 'theme_modele.css.js',
});