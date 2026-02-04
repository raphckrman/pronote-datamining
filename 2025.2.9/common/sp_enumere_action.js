IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreAction = void 0;
    var EGenreAction;
    (function (EGenreAction) {
      EGenreAction[(EGenreAction['Valider'] = 0)] = 'Valider';
      EGenreAction[(EGenreAction['NePasValider'] = 1)] = 'NePasValider';
      EGenreAction[(EGenreAction['Annuler'] = 2)] = 'Annuler';
    })(EGenreAction || (exports.EGenreAction = EGenreAction = {}));
  },
  fn: 'enumere_action.js',
});