IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeQualificatifReponse = void 0;
    var TypeQualificatifReponse;
    (function (TypeQualificatifReponse) {
      TypeQualificatifReponse[(TypeQualificatifReponse['qrBonne'] = 0)] =
        'qrBonne';
      TypeQualificatifReponse[
        (TypeQualificatifReponse['qrBonnePartielle'] = 1)
      ] = 'qrBonnePartielle';
      TypeQualificatifReponse[(TypeQualificatifReponse['qrFausse'] = 2)] =
        'qrFausse';
      TypeQualificatifReponse[(TypeQualificatifReponse['qrSansReponse'] = 3)] =
        'qrSansReponse';
    })(
      TypeQualificatifReponse ||
        (exports.TypeQualificatifReponse = TypeQualificatifReponse = {}),
    );
  },
  fn: 'typequalificatifreponse.js',
});