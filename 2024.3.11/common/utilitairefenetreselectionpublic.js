IE.fModule({
  f: function (exports, require, module, global) {
    const {
      TypeGenreCumulSelectionPublic,
    } = require('ObjetFenetre_SelectionPublic.js');
    const { EGenreRessource } = require('Enumere_Ressource.js');
    module.exports.getCumulPourFenetrePublic = function (
      aGenre,
      aChecked,
      aNombre,
    ) {
      switch (aGenre) {
        case EGenreRessource.Eleve:
          return aChecked === true
            ? TypeGenreCumulSelectionPublic.initial
            : TypeGenreCumulSelectionPublic.classe;
        case EGenreRessource.Responsable:
          return aNombre > 200
            ? TypeGenreCumulSelectionPublic.initial
            : TypeGenreCumulSelectionPublic.sans;
        case EGenreRessource.Enseignant:
        case EGenreRessource.Personnel:
        case EGenreRessource.MaitreDeStage:
        case EGenreRessource.InspecteurPedagogique:
          return TypeGenreCumulSelectionPublic.sans;
        default:
          return;
      }
    };
  },
  fn: 'utilitairefenetreselectionpublic.js',
});