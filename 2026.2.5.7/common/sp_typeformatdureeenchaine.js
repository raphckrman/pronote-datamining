IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeFormatDureeEnChaine = void 0;
    var TypeFormatDureeEnChaine;
    (function (TypeFormatDureeEnChaine) {
      TypeFormatDureeEnChaine[
        (TypeFormatDureeEnChaine['fdcHeuresMinutes'] = 0)
      ] = 'fdcHeuresMinutes';
      TypeFormatDureeEnChaine[
        (TypeFormatDureeEnChaine['fdcHeuresCentiemes'] = 1)
      ] = 'fdcHeuresCentiemes';
      TypeFormatDureeEnChaine[(TypeFormatDureeEnChaine['fdcSequences'] = 2)] =
        'fdcSequences';
      TypeFormatDureeEnChaine[
        (TypeFormatDureeEnChaine['fdcPersonnalise'] = 3)
      ] = 'fdcPersonnalise';
    })(
      TypeFormatDureeEnChaine ||
        (exports.TypeFormatDureeEnChaine = TypeFormatDureeEnChaine = {}),
    );
  },
  fn: 'typeformatdureeenchaine.js',
});