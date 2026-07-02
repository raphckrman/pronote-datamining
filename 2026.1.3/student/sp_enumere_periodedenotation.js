IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenrePeriodeDeNotationUtil = exports.EGenrePeriodeDeNotation =
      void 0;
    var EGenrePeriodeDeNotation;
    (function (EGenrePeriodeDeNotation) {
      EGenrePeriodeDeNotation[(EGenrePeriodeDeNotation['Trimestre1'] = 0)] =
        'Trimestre1';
      EGenrePeriodeDeNotation[(EGenrePeriodeDeNotation['Trimestre2'] = 1)] =
        'Trimestre2';
      EGenrePeriodeDeNotation[(EGenrePeriodeDeNotation['Trimestre3'] = 2)] =
        'Trimestre3';
      EGenrePeriodeDeNotation[(EGenrePeriodeDeNotation['Semestre1'] = 3)] =
        'Semestre1';
      EGenrePeriodeDeNotation[(EGenrePeriodeDeNotation['Semestre2'] = 4)] =
        'Semestre2';
      EGenrePeriodeDeNotation[(EGenrePeriodeDeNotation['Annuelle'] = 5)] =
        'Annuelle';
      EGenrePeriodeDeNotation[(EGenrePeriodeDeNotation['Utilisateur'] = 6)] =
        'Utilisateur';
    })(
      EGenrePeriodeDeNotation ||
        (exports.EGenrePeriodeDeNotation = EGenrePeriodeDeNotation = {}),
    );
    const EGenrePeriodeDeNotationUtil = {
      estTrimestrielle(aGenrePeriodeDeNotation) {
        return [
          EGenrePeriodeDeNotation.Trimestre1,
          EGenrePeriodeDeNotation.Trimestre2,
          EGenrePeriodeDeNotation.Trimestre3,
        ].includes(aGenrePeriodeDeNotation);
      },
      estSemestrielle(aGenrePeriodeDeNotation) {
        return [
          EGenrePeriodeDeNotation.Semestre1,
          EGenrePeriodeDeNotation.Semestre2,
        ].includes(aGenrePeriodeDeNotation);
      },
      estAnnuelle(aGenrePeriodeDeNotation) {
        return [EGenrePeriodeDeNotation.Annuelle].includes(
          aGenrePeriodeDeNotation,
        );
      },
      estOfficielle(aGenrePeriodeDeNotation) {
        return (
          EGenrePeriodeDeNotationUtil.estTrimestrielle(
            aGenrePeriodeDeNotation,
          ) ||
          EGenrePeriodeDeNotationUtil.estSemestrielle(
            aGenrePeriodeDeNotation,
          ) ||
          EGenrePeriodeDeNotationUtil.estAnnuelle(aGenrePeriodeDeNotation)
        );
      },
    };
    exports.EGenrePeriodeDeNotationUtil = EGenrePeriodeDeNotationUtil;
  },
  fn: 'enumere_periodedenotation.js',
});