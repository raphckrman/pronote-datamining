IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreArrondi = void 0;
    var EGenreArrondi;
    (function (EGenreArrondi) {
      EGenreArrondi[(EGenreArrondi['sans'] = 0)] = 'sans';
      EGenreArrondi[(EGenreArrondi['superieur'] = 1)] = 'superieur';
      EGenreArrondi[(EGenreArrondi['inferieur'] = 2)] = 'inferieur';
      EGenreArrondi[(EGenreArrondi['plusProche'] = 3)] = 'plusProche';
    })(EGenreArrondi || (exports.EGenreArrondi = EGenreArrondi = {}));
  },
  fn: 'enumere_arrondi.js',
});