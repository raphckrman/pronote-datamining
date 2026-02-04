IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeOrigineCreationLabelAlimentaireUtil =
      exports.TypeOrigineCreationLabelAlimentaire = void 0;
    var TypeOrigineCreationLabelAlimentaire;
    (function (TypeOrigineCreationLabelAlimentaire) {
      TypeOrigineCreationLabelAlimentaire[
        (TypeOrigineCreationLabelAlimentaire['OCLA_Utilisateur'] = 0)
      ] = 'OCLA_Utilisateur';
      TypeOrigineCreationLabelAlimentaire[
        (TypeOrigineCreationLabelAlimentaire['OCLA_Bio'] = 1)
      ] = 'OCLA_Bio';
      TypeOrigineCreationLabelAlimentaire[
        (TypeOrigineCreationLabelAlimentaire['OCLA_FaitMaison'] = 2)
      ] = 'OCLA_FaitMaison';
      TypeOrigineCreationLabelAlimentaire[
        (TypeOrigineCreationLabelAlimentaire['OCLA_Assemble'] = 3)
      ] = 'OCLA_Assemble';
      TypeOrigineCreationLabelAlimentaire[
        (TypeOrigineCreationLabelAlimentaire['OCLA_Local'] = 4)
      ] = 'OCLA_Local';
    })(
      TypeOrigineCreationLabelAlimentaire ||
        (exports.TypeOrigineCreationLabelAlimentaire =
          TypeOrigineCreationLabelAlimentaire =
            {}),
    );
    const TypeOrigineCreationLabelAlimentaireUtil = {
      getClassIcone(aType) {
        let lClass;
        switch (aType) {
          case TypeOrigineCreationLabelAlimentaire.OCLA_Utilisateur:
            lClass = '';
            break;
          case TypeOrigineCreationLabelAlimentaire.OCLA_Bio:
            lClass = 'icon_cantine_bio';
            break;
          case TypeOrigineCreationLabelAlimentaire.OCLA_FaitMaison:
            lClass = 'icon_home';
            break;
          case TypeOrigineCreationLabelAlimentaire.OCLA_Assemble:
            lClass = 'icon_cantine_assembler_place';
            break;
          case TypeOrigineCreationLabelAlimentaire.OCLA_Local:
            lClass = 'icon_map_marker';
            break;
          default:
            lClass = '';
            break;
        }
        return lClass;
      },
    };
    exports.TypeOrigineCreationLabelAlimentaireUtil =
      TypeOrigineCreationLabelAlimentaireUtil;
  },
  fn: 'typeoriginecreationlabelalimentaire.js',
});