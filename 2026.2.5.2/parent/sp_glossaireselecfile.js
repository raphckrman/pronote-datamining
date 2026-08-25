IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradGlossaireSelecFile = void 0;
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const TradGlossaireSelecFile =
      ObjetTraduction_1.TraductionsModule.getModule('GlossaireSelecFile', {
        echecSelection: '',
        msgEchecTailleFichier: '',
        msgDocJointVide: '',
        msgEchecLibelleFichier: '',
        msgEchecLibelleFichierAvecInfo: '',
        EchecAjoutFichier: '',
        echecEnvoi: '',
        AnnulerLEnvoi: '',
        msgEnvoiFichierAnnule: '',
        msgPreparationFichier: '',
        XImageReduite_S: '',
        echecImagePDF_S: '',
        echecImagesPDF_S: '',
      });
    exports.TradGlossaireSelecFile = TradGlossaireSelecFile;
  },
  fn: 'glossaireselecfile.js',
});