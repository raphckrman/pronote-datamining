IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreEvntActuUtil = exports.EGenreEvntActu = void 0;
    var EGenreEvntActu;
    (function (EGenreEvntActu) {
      EGenreEvntActu[(EGenreEvntActu['SurAR'] = 1)] = 'SurAR';
      EGenreEvntActu[(EGenreEvntActu['SurValidationSondage'] = 2)] =
        'SurValidationSondage';
      EGenreEvntActu[(EGenreEvntActu['SurMenuCtxActu'] = 3)] = 'SurMenuCtxActu';
      EGenreEvntActu[(EGenreEvntActu['SurValidationModif'] = 4)] =
        'SurValidationModif';
      EGenreEvntActu[(EGenreEvntActu['SurCreationActu'] = 5)] =
        'SurCreationActu';
      EGenreEvntActu[(EGenreEvntActu['SurValidationDirecte'] = 6)] =
        'SurValidationDirecte';
      EGenreEvntActu[(EGenreEvntActu['SurDiffusionResultats'] = 7)] =
        'SurDiffusionResultats';
      EGenreEvntActu[(EGenreEvntActu['SurSelectionInfoSondage'] = 8)] =
        'SurSelectionInfoSondage';
      EGenreEvntActu[(EGenreEvntActu['SurAnnulationSondage'] = 9)] =
        'SurAnnulationSondage';
      EGenreEvntActu[(EGenreEvntActu['SurVoirResultats'] = 10)] =
        'SurVoirResultats';
      EGenreEvntActu[(EGenreEvntActu['SurMarquerVuSansAR'] = 11)] =
        'SurMarquerVuSansAR';
    })(EGenreEvntActu || (exports.EGenreEvntActu = EGenreEvntActu = {}));
    const EGenreEvntActuUtil = {
      estEvntSaisieReponse(aGenreEvntActu) {
        switch (aGenreEvntActu) {
          case EGenreEvntActu.SurValidationSondage:
          case EGenreEvntActu.SurAR:
          case EGenreEvntActu.SurValidationDirecte:
            return true;
        }
        return false;
      },
    };
    exports.EGenreEvntActuUtil = EGenreEvntActuUtil;
  },
  fn: 'egenreevntactu.js',
});