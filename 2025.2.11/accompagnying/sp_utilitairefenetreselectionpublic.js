IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.getCumulPourFenetrePublic = void 0;
    const ObjetFenetre_SelectionPublic_1 = require('ObjetFenetre_SelectionPublic');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const getCumulPourFenetrePublic = function (aGenre, aChecked, aNombre) {
      switch (aGenre) {
        case Enumere_Ressource_1.EGenreRessource.Eleve:
          return aChecked === true
            ? ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                .initial
            : ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                .classe;
        case Enumere_Ressource_1.EGenreRessource.Responsable:
          return aNombre > 200
            ? ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                .initial
            : ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.sans;
        case Enumere_Ressource_1.EGenreRessource.Classe:
        case Enumere_Ressource_1.EGenreRessource.Enseignant:
        case Enumere_Ressource_1.EGenreRessource.Personnel:
        case Enumere_Ressource_1.EGenreRessource.MaitreDeStage:
        case Enumere_Ressource_1.EGenreRessource.InspecteurPedagogique:
          return ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
            .sans;
        default:
          return;
      }
    };
    exports.getCumulPourFenetrePublic = getCumulPourFenetrePublic;
  },
  fn: 'utilitairefenetreselectionpublic.js',
});