IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeFormatPublication = exports.TTypeElementCloud = void 0;
    var TTypeElementCloud;
    (function (TTypeElementCloud) {
      TTypeElementCloud[(TTypeElementCloud['tec_Fichier'] = 0)] = 'tec_Fichier';
      TTypeElementCloud[(TTypeElementCloud['tec_Dossier'] = 1)] = 'tec_Dossier';
    })(
      TTypeElementCloud || (exports.TTypeElementCloud = TTypeElementCloud = {}),
    );
    var TypeFormatPublication;
    (function (TypeFormatPublication) {
      TypeFormatPublication[(TypeFormatPublication['FP_NonPublie'] = 0)] =
        'FP_NonPublie';
      TypeFormatPublication[(TypeFormatPublication['FP_Natif'] = 1)] =
        'FP_Natif';
      TypeFormatPublication[(TypeFormatPublication['FP_Pdf'] = 2)] = 'FP_Pdf';
    })(
      TypeFormatPublication ||
        (exports.TypeFormatPublication = TypeFormatPublication = {}),
    );
  },
  fn: 'ttypeelementcloud.js',
});