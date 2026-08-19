IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeOrigineCreationLabelAlimentaireUtil =
      exports.TypeOrigineCreationLabelAlimentaire = void 0;
    const IconeSvgCantine_bio_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCantine_bio');
    const IconeSvgHome_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgHome');
    const IconeSvgCantine_assembler_place_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCantine_assembler_place');
    const IconeSvgMap_marker_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgMap_marker');
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
      getIconeSvg(aType, aLabel, aColor) {
        let lIconeSvg;
        switch (aType) {
          case TypeOrigineCreationLabelAlimentaire.OCLA_Utilisateur:
            lIconeSvg = '';
            break;
          case TypeOrigineCreationLabelAlimentaire.OCLA_Bio:
            lIconeSvg = IE.jsx.str(IconeSvgCantine_bio_1.IconeSvgCantine_bio, {
              class: 'i-medium',
              ie_tooltiplabel: aLabel,
              style: aColor,
            });
            break;
          case TypeOrigineCreationLabelAlimentaire.OCLA_FaitMaison:
            lIconeSvg = IE.jsx.str(IconeSvgHome_1.IconeSvgHome, {
              class: 'i-medium',
              ie_tooltiplabel: aLabel,
              style: aColor,
            });
            break;
          case TypeOrigineCreationLabelAlimentaire.OCLA_Assemble:
            lIconeSvg = IE.jsx.str(
              IconeSvgCantine_assembler_place_1.IconeSvgCantine_assembler_place,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationLabelAlimentaire.OCLA_Local:
            lIconeSvg = IE.jsx.str(IconeSvgMap_marker_1.IconeSvgMap_marker, {
              class: 'i-medium',
              ie_tooltiplabel: aLabel,
              style: aColor,
            });
            break;
          default:
            lIconeSvg = '';
            break;
        }
        return lIconeSvg;
      },
    };
    exports.TypeOrigineCreationLabelAlimentaireUtil =
      TypeOrigineCreationLabelAlimentaireUtil;
  },
  fn: 'typeoriginecreationlabelalimentaire.js',
});