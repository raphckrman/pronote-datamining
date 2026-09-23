IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ConstantesIdRequetesAjaxCP =
      exports.ConstantesUploadFile =
      exports.ConstantesJSON =
        void 0;
    var ConstantesJSON;
    (function (ConstantesJSON) {
      ConstantesJSON['Signature'] = 'Signature';
      ConstantesJSON['SignatureAttente'] = 'SignatureAttente';
      ConstantesJSON['SignatureAttenteParametres'] = 'ParametresAtt';
      ConstantesJSON['Donnees'] = 'data';
      ConstantesJSON['numeroSession'] = 'session';
      ConstantesJSON['numeroOrdre'] = 'no';
      ConstantesJSON['donneesSecurisee'] = 'dataSec';
      ConstantesJSON['donneesNonSecurisee'] = 'dataNonSec';
      ConstantesJSON['idRequete'] = 'id';
      ConstantesJSON['echecReseau'] = 'echecReseau';
      ConstantesJSON['fichiersBase64'] = 'fichiers';
    })(ConstantesJSON || (exports.ConstantesJSON = ConstantesJSON = {}));
    var ConstantesUploadFile;
    (function (ConstantesUploadFile) {
      ConstantesUploadFile['numeroOrdre'] = 'u_no';
      ConstantesUploadFile['numeroSession'] = 'u_ns';
      ConstantesUploadFile['idRequete'] = 'u_idR';
      ConstantesUploadFile['idFichier'] = 'u_idF';
      ConstantesUploadFile['md5'] = 'u_md5';
    })(
      ConstantesUploadFile ||
        (exports.ConstantesUploadFile = ConstantesUploadFile = {}),
    );
    var ConstantesIdRequetesAjaxCP;
    (function (ConstantesIdRequetesAjaxCP) {
      ConstantesIdRequetesAjaxCP['fonctionParametres'] = 'FonctionParametres';
      ConstantesIdRequetesAjaxCP['identification'] = 'Identification';
      ConstantesIdRequetesAjaxCP['authentification'] = 'Authentification';
      ConstantesIdRequetesAjaxCP['recupererInfosConnexion'] =
        'RecupererInfosConnexion';
    })(
      ConstantesIdRequetesAjaxCP ||
        (exports.ConstantesIdRequetesAjaxCP = ConstantesIdRequetesAjaxCP = {}),
    );
  },
  fn: 'typesrequetejson.js',
});