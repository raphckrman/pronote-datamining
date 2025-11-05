IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreNiveauResponsabiliteUtil =
      exports.TypeGenreNiveauResponsabilite = void 0;
    var TypeGenreNiveauResponsabilite;
    (function (TypeGenreNiveauResponsabilite) {
      TypeGenreNiveauResponsabilite[
        (TypeGenreNiveauResponsabilite['gnrAucun'] = 0)
      ] = 'gnrAucun';
      TypeGenreNiveauResponsabilite[
        (TypeGenreNiveauResponsabilite['gnrLegal'] = 1)
      ] = 'gnrLegal';
      TypeGenreNiveauResponsabilite[
        (TypeGenreNiveauResponsabilite['gnrEnCharge'] = 2)
      ] = 'gnrEnCharge';
      TypeGenreNiveauResponsabilite[
        (TypeGenreNiveauResponsabilite['gnrContact'] = 3)
      ] = 'gnrContact';
    })(
      TypeGenreNiveauResponsabilite ||
        (exports.TypeGenreNiveauResponsabilite = TypeGenreNiveauResponsabilite =
          {}),
    );
    const C_GenreNiveauResponsabiliteLegauxEnCharge = [
      TypeGenreNiveauResponsabilite.gnrLegal,
      TypeGenreNiveauResponsabilite.gnrEnCharge,
    ];
    exports.TypeGenreNiveauResponsabiliteUtil = {
      estFiltreParDefautActif(aTypeFonction) {
        return C_GenreNiveauResponsabiliteLegauxEnCharge.includes(
          aTypeFonction,
        );
      },
    };
  },
  fn: 'typegenreniveauresponsabilite.js',
});