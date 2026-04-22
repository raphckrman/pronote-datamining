IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeEtatUpload = void 0;
    var TypeEtatUpload;
    (function (TypeEtatUpload) {
      TypeEtatUpload[(TypeEtatUpload['TEU_Inconnu'] = 0)] = 'TEU_Inconnu';
      TypeEtatUpload[(TypeEtatUpload['TEU_Reussi'] = 1)] = 'TEU_Reussi';
      TypeEtatUpload[(TypeEtatUpload['TEU_Erreur'] = 2)] = 'TEU_Erreur';
      TypeEtatUpload[(TypeEtatUpload['TEU_EnCours'] = 3)] = 'TEU_EnCours';
    })(TypeEtatUpload || (exports.TypeEtatUpload = TypeEtatUpload = {}));
  },
  fn: 'typeetatupload.js',
});