IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreCryptage = void 0;
    var EGenreCryptage;
    (function (EGenreCryptage) {
      EGenreCryptage[(EGenreCryptage['Aucun'] = 0)] = 'Aucun';
      EGenreCryptage[(EGenreCryptage['Unicode'] = 1)] = 'Unicode';
      EGenreCryptage[(EGenreCryptage['AES'] = 2)] = 'AES';
      EGenreCryptage[(EGenreCryptage['RSA1024'] = 3)] = 'RSA1024';
      EGenreCryptage[(EGenreCryptage['RSA2048'] = 4)] = 'RSA2048';
    })(EGenreCryptage || (exports.EGenreCryptage = EGenreCryptage = {}));
  },
  fn: 'enumere_cryptage.js',
});