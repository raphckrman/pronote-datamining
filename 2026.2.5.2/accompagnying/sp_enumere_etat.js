IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreEtat = void 0;
    var EGenreEtat;
    (function (EGenreEtat) {
      EGenreEtat[(EGenreEtat['Aucun'] = 0)] = 'Aucun';
      EGenreEtat[(EGenreEtat['Creation'] = 1)] = 'Creation';
      EGenreEtat[(EGenreEtat['Modification'] = 2)] = 'Modification';
      EGenreEtat[(EGenreEtat['Suppression'] = 3)] = 'Suppression';
      EGenreEtat[(EGenreEtat['FilsModification'] = 4)] = 'FilsModification';
    })(EGenreEtat || (exports.EGenreEtat = EGenreEtat = {}));
  },
  fn: 'enumere_etat.js',
});