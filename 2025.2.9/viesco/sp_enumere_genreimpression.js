IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreImpression = void 0;
    var EGenreImpression;
    (function (EGenreImpression) {
      EGenreImpression[(EGenreImpression['Aucune'] = 0)] = 'Aucune';
      EGenreImpression[(EGenreImpression['Normale'] = 1)] = 'Normale';
      EGenreImpression[(EGenreImpression['Format'] = 2)] = 'Format';
      EGenreImpression[(EGenreImpression['Proportion'] = 3)] = 'Proportion';
      EGenreImpression[(EGenreImpression['ProportionTempSaisieNotes'] = 4)] =
        'ProportionTempSaisieNotes';
      EGenreImpression[(EGenreImpression['GenerationPDF'] = 5)] =
        'GenerationPDF';
    })(EGenreImpression || (exports.EGenreImpression = EGenreImpression = {}));
  },
  fn: 'enumere_genreimpression.js',
});