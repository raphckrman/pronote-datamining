IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StylesCurseur = void 0;
    require('Curseur.css');
    exports.StylesCurseur = {
      AvecMain: 'AvecMain',
      SansMain: 'SansMain',
      AvecAide: 'AvecAide',
      AvecResize: 'AvecResize',
      AvecResizeHorizontal: 'AvecResizeHorizontal',
      AvecResizeVertical: 'AvecResizeVertical',
      AvecInterdiction: 'AvecInterdiction',
      AvecMove: 'AvecMove',
      AvecTexte: 'AvecTexte',
      Curseur_DoubleClick: 'Curseur_DoubleClick',
      Curseur_Pinceau: 'Curseur_Pinceau',
      Curseur_PinceauVert: 'Curseur_PinceauVert',
      Curseur_PinceauGris: 'Curseur_PinceauGris',
      Curseur_PeriodeCloturee: 'Curseur_PeriodeCloturee',
      Curseur_AssistantSaisieActif: 'Curseur_AssistantSaisieActif',
      Curseur_MethodeCalculMoyenneActif: 'Curseur_MethodeCalculMoyenneActif',
    };
  },
  fn: 'curseur.css.js',
});