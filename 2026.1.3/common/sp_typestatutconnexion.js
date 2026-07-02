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
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    require('@scolys/produit/css/TypeStatutConnexion.css');
    const IconeSvgNe_pas_deranger_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgNe_pas_deranger');
    const IconeSvgSupprimer_pj_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgSupprimer_pj');
    const IconeSvgPastille_evaluation_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPastille_evaluation');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
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
      getClassIconSvg(aGenre, aClasseCss = Divers_css_1.SD.badgeBr) {
        switch (aGenre) {
          case TypeGenreStatutConnexion.GSC_Disponible:
            return IE.jsx.str(
              IconeSvgPastille_evaluation_1.IconeSvgPastille_evaluation,
              { class: ['icone-badge badge-br badge-success', aClasseCss] },
            );
          case TypeGenreStatutConnexion.GSC_EnCours:
            return IE.jsx.str(IconeSvgSupprimer_pj_1.IconeSvgSupprimer_pj, {
              class: ['icone-badge badge-error', aClasseCss],
            });
          case TypeGenreStatutConnexion.GSC_NePasDeranger:
            return IE.jsx.str(
              IconeSvgNe_pas_deranger_1.IconeSvgNe_pas_deranger,
              { class: ['icone-badge badge-warning', aClasseCss] },
            );
          default:
            return IE.jsx.str(
              IconeSvgPastille_evaluation_1.IconeSvgPastille_evaluation,
              { class: ['icone-badge badge-stroke-disabled', aClasseCss] },
            );
        }
      },
      toLibelle(aGenre, aAvecLibelleInvisible) {
        switch (aGenre) {
          case TypeGenreStatutConnexion.GSC_Disponible:
            return ObjetTraduction_1.GTraductions.getValeur(
              'Messagerie.Connectee',
            );
          case TypeGenreStatutConnexion.GSC_EnCours:
            return ObjetTraduction_1.GTraductions.getValeur(
              'Messagerie.EnClasse',
            );
          case TypeGenreStatutConnexion.GSC_NePasDeranger:
            return ObjetTraduction_1.GTraductions.getValeur(
              'Messagerie.NePasDeranger',
            );
          default:
            return aAvecLibelleInvisible
              ? ObjetTraduction_1.GTraductions.getValeur('Messagerie.Invisible')
              : ObjetTraduction_1.GTraductions.getValeur(
                  'Messagerie.NonConnectee',
                );
        }
      },
    };
    exports.TypeGenreStatutConnexionUtil = TypeGenreStatutConnexionUtil;
  },
  fn: 'typestatutconnexion.js',
});