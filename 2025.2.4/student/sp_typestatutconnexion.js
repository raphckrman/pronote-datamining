IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreStatutConnexionUtil =
      exports.TypeGenreStatutConnexionBase =
      exports.TypeGenreStatutConnexion =
        void 0;
    var TypeGenreStatutConnexion;
    (function (TypeGenreStatutConnexion) {
      TypeGenreStatutConnexion[
        (TypeGenreStatutConnexion['GSC_Disponible'] = 0)
      ] = 'GSC_Disponible';
      TypeGenreStatutConnexion[(TypeGenreStatutConnexion['GSC_EnCours'] = 1)] =
        'GSC_EnCours';
      TypeGenreStatutConnexion[
        (TypeGenreStatutConnexion['GSC_NePasDeranger'] = 2)
      ] = 'GSC_NePasDeranger';
      TypeGenreStatutConnexion[
        (TypeGenreStatutConnexion['GSC_Deconnecte'] = 3)
      ] = 'GSC_Deconnecte';
    })(
      TypeGenreStatutConnexion ||
        (exports.TypeGenreStatutConnexion = TypeGenreStatutConnexion = {}),
    );
    var TypeGenreStatutConnexionBase;
    (function (TypeGenreStatutConnexionBase) {
      TypeGenreStatutConnexionBase[
        (TypeGenreStatutConnexionBase['SCB_Connecte'] = 0)
      ] = 'SCB_Connecte';
      TypeGenreStatutConnexionBase[
        (TypeGenreStatutConnexionBase['SCB_NePasDeranger'] = 1)
      ] = 'SCB_NePasDeranger';
      TypeGenreStatutConnexionBase[
        (TypeGenreStatutConnexionBase['SCB_Invisible'] = 2)
      ] = 'SCB_Invisible';
    })(
      TypeGenreStatutConnexionBase ||
        (exports.TypeGenreStatutConnexionBase = TypeGenreStatutConnexionBase =
          {}),
    );
    const ObjetTraduction_1 = require('ObjetTraduction');
    require('TypeStatutConnexion.css');
    const TypeGenreStatutConnexionUtil = {
      getClassIcon(aGenre) {
        switch (aGenre) {
          case TypeGenreStatutConnexion.GSC_Disponible:
            return 'TypeGenreStatutConnexion-GSC_Disponible';
          case TypeGenreStatutConnexion.GSC_EnCours:
            return 'TypeGenreStatutConnexion-GSC_EnCours';
          case TypeGenreStatutConnexion.GSC_NePasDeranger:
            return 'TypeGenreStatutConnexion-GSC_NePasDeranger';
          default:
            return 'TypeGenreStatutConnexion-GSC_Deconnecte';
        }
      },
      toLibelle(aGenre, aAvecLibelleInvisible) {
        switch (aGenre) {
          case TypeGenreStatutConnexion.GSC_Disponible:
            return 'Disponible';
          case TypeGenreStatutConnexion.GSC_EnCours:
            return 'En cours';
          case TypeGenreStatutConnexion.GSC_NePasDeranger:
            return 'Ne pas déranger';
          default:
            return aAvecLibelleInvisible
              ? 'Invisible'
              : 'Non connecté(e)';
        }
      },
    };
    exports.TypeGenreStatutConnexionUtil = TypeGenreStatutConnexionUtil;
  },
  fn: 'typestatutconnexion.js',
});