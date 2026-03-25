IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreEvenementObjetSaisie = void 0;
    var EGenreEvenementObjetSaisie;
    (function (EGenreEvenementObjetSaisie) {
      EGenreEvenementObjetSaisie[
        (EGenreEvenementObjetSaisie['selection'] = 0)
      ] = 'selection';
      EGenreEvenementObjetSaisie[
        (EGenreEvenementObjetSaisie['deploiement'] = 1)
      ] = 'deploiement';
      EGenreEvenementObjetSaisie[
        (EGenreEvenementObjetSaisie['fermeture'] = 2)
      ] = 'fermeture';
    })(
      EGenreEvenementObjetSaisie ||
        (exports.EGenreEvenementObjetSaisie = EGenreEvenementObjetSaisie = {}),
    );
  },
  fn: 'enumere_evenementobjetsaisie.js',
});