IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeStatutInterrogationCloud = void 0;
    var TypeStatutInterrogationCloud;
    (function (TypeStatutInterrogationCloud) {
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_Inconnu'] = 0)
      ] = 'sic_Inconnu';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_OK'] = 1)
      ] = 'sic_OK';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_TokenInvalide'] = 2)
      ] = 'sic_TokenInvalide';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_Timeout'] = 3)
      ] = 'sic_Timeout';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_ArretApplication'] = 4)
      ] = 'sic_ArretApplication';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_DossierTropGros'] = 5)
      ] = 'sic_DossierTropGros';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_DossierInconnu'] = 6)
      ] = 'sic_DossierInconnu';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_RacineInconnue'] = 7)
      ] = 'sic_RacineInconnue';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_ImpossibleDePartagerLeFichier'] = 8)
      ] = 'sic_ImpossibleDePartagerLeFichier';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_AdresseMailNonVerifiee'] = 9)
      ] = 'sic_AdresseMailNonVerifiee';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_ImpossibleDePartagerUnDossier'] = 10)
      ] = 'sic_ImpossibleDePartagerUnDossier';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_FichierDejaExistant'] = 11)
      ] = 'sic_FichierDejaExistant';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_FichierTropGros'] = 12)
      ] = 'sic_FichierTropGros';
      TypeStatutInterrogationCloud[
        (TypeStatutInterrogationCloud['sic_PlusDEspace'] = 13)
      ] = 'sic_PlusDEspace';
    })(
      TypeStatutInterrogationCloud ||
        (exports.TypeStatutInterrogationCloud = TypeStatutInterrogationCloud =
          {}),
    );
  },
  fn: 'typestatutinterrogationcloud.js',
});