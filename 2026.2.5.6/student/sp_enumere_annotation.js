IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreAnnotation = void 0;
    var EGenreAnnotation;
    (function (EGenreAnnotation) {
      EGenreAnnotation[(EGenreAnnotation['erreur'] = -1)] = 'erreur';
      EGenreAnnotation[(EGenreAnnotation['note'] = 0)] = 'note';
      EGenreAnnotation[(EGenreAnnotation['absent'] = 1)] = 'absent';
      EGenreAnnotation[(EGenreAnnotation['dispense'] = 2)] = 'dispense';
      EGenreAnnotation[(EGenreAnnotation['nonNote'] = 3)] = 'nonNote';
      EGenreAnnotation[(EGenreAnnotation['inapte'] = 4)] = 'inapte';
      EGenreAnnotation[(EGenreAnnotation['nonRendu'] = 5)] = 'nonRendu';
      EGenreAnnotation[(EGenreAnnotation['absentZero'] = 6)] = 'absentZero';
      EGenreAnnotation[(EGenreAnnotation['nonRenduZero'] = 7)] = 'nonRenduZero';
      EGenreAnnotation[(EGenreAnnotation['felicitations'] = 8)] =
        'felicitations';
    })(EGenreAnnotation || (exports.EGenreAnnotation = EGenreAnnotation = {}));
  },
  fn: 'enumere_annotation.js',
});