IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeOrigineCreationAllergeneAlimentaireUtil =
      exports.TypeOrigineCreationAllergeneAlimentaire = void 0;
    var TypeOrigineCreationAllergeneAlimentaire;
    (function (TypeOrigineCreationAllergeneAlimentaire) {
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Utilisateur'] = 0)
      ] = 'OCAA_Utilisateur';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Gluten'] = 1)
      ] = 'OCAA_Gluten';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Crustace'] = 2)
      ] = 'OCAA_Crustace';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Oeuf'] = 3)
      ] = 'OCAA_Oeuf';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Poisson'] = 4)
      ] = 'OCAA_Poisson';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Arachide'] = 5)
      ] = 'OCAA_Arachide';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Soja'] = 6)
      ] = 'OCAA_Soja';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Lait'] = 7)
      ] = 'OCAA_Lait';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_FruitACoque'] = 8)
      ] = 'OCAA_FruitACoque';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Celeri'] = 9)
      ] = 'OCAA_Celeri';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Moutarde'] = 10)
      ] = 'OCAA_Moutarde';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Sesame'] = 11)
      ] = 'OCAA_Sesame';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Sulfites'] = 12)
      ] = 'OCAA_Sulfites';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Lupin'] = 13)
      ] = 'OCAA_Lupin';
      TypeOrigineCreationAllergeneAlimentaire[
        (TypeOrigineCreationAllergeneAlimentaire['OCAA_Mollusque'] = 14)
      ] = 'OCAA_Mollusque';
    })(
      TypeOrigineCreationAllergeneAlimentaire ||
        (exports.TypeOrigineCreationAllergeneAlimentaire =
          TypeOrigineCreationAllergeneAlimentaire =
            {}),
    );
    const TypeOrigineCreationAllergeneAlimentaireUtil = {
      getClassIcone(aType) {
        let lClass;
        switch (aType) {
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Utilisateur:
            lClass = '';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Gluten:
            lClass = 'icon_allergene_gluten';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Crustace:
            lClass = 'icon_allergene_crustaces';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Oeuf:
            lClass = 'icon_allergene_oeufs';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Poisson:
            lClass = 'icon_allergene_poissons';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Arachide:
            lClass = 'icon_allergene_arachides';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Soja:
            lClass = 'icon_allergene_soja';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Lait:
            lClass = 'icon_allergene_lait';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_FruitACoque:
            lClass = 'icon_allergene_fruits_coques';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Celeri:
            lClass = 'icon_allergene_celeri';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Moutarde:
            lClass = 'icon_allergene_moutarde';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Sesame:
            lClass = 'icon_allergene_sesame';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Sulfites:
            lClass = 'icon_allergene_sulfites';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Lupin:
            lClass = 'icon_allergene_lupin';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Mollusque:
            lClass = 'icon_allergene_mollusques';
            break;
          default:
            lClass = 'icon_exclamation_sign';
            break;
        }
        return lClass;
      },
    };
    exports.TypeOrigineCreationAllergeneAlimentaireUtil =
      TypeOrigineCreationAllergeneAlimentaireUtil;
  },
  fn: 'typeoriginecreationallergenealimentaire.js',
});