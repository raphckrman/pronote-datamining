IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeEtatExecutionQCMPourRepondant = void 0;
    var TypeEtatExecutionQCMPourRepondant;
    (function (TypeEtatExecutionQCMPourRepondant) {
      TypeEtatExecutionQCMPourRepondant[
        (TypeEtatExecutionQCMPourRepondant['EQR_EnCours'] = 0)
      ] = 'EQR_EnCours';
      TypeEtatExecutionQCMPourRepondant[
        (TypeEtatExecutionQCMPourRepondant['EQR_Termine'] = 1)
      ] = 'EQR_Termine';
      TypeEtatExecutionQCMPourRepondant[
        (TypeEtatExecutionQCMPourRepondant['EQR_DureeMaxDepassee'] = 2)
      ] = 'EQR_DureeMaxDepassee';
      TypeEtatExecutionQCMPourRepondant[
        (TypeEtatExecutionQCMPourRepondant['EQR_ARefaire'] = 3)
      ] = 'EQR_ARefaire';
    })(
      TypeEtatExecutionQCMPourRepondant ||
        (exports.TypeEtatExecutionQCMPourRepondant =
          TypeEtatExecutionQCMPourRepondant =
            {}),
    );
  },
  fn: 'typeetatexecutionqcmpourrepondant.js',
});