IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeModeCorrectionQCM = void 0;
    var TypeModeCorrectionQCM;
    (function (TypeModeCorrectionQCM) {
      TypeModeCorrectionQCM[(TypeModeCorrectionQCM['FBQ_CorrigeSans'] = 0)] =
        'FBQ_CorrigeSans';
      TypeModeCorrectionQCM[
        (TypeModeCorrectionQCM['FBQ_CorrigeApresQuestion'] = 1)
      ] = 'FBQ_CorrigeApresQuestion';
      TypeModeCorrectionQCM[(TypeModeCorrectionQCM['FBQ_CorrigeALaFin'] = 2)] =
        'FBQ_CorrigeALaFin';
      TypeModeCorrectionQCM[(TypeModeCorrectionQCM['FBQ_CorrigeALaDate'] = 3)] =
        'FBQ_CorrigeALaDate';
    })(
      TypeModeCorrectionQCM ||
        (exports.TypeModeCorrectionQCM = TypeModeCorrectionQCM = {}),
    );
  },
  fn: 'typemodecorrectionqcm.js',
});