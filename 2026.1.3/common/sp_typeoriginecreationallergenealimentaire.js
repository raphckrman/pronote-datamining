IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeOrigineCreationAllergeneAlimentaireUtil =
      exports.TypeOrigineCreationAllergeneAlimentaire = void 0;
    const IconeSvgAllergene_arachides_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_arachides');
    const IconeSvgAllergene_lait_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_lait');
    const IconeSvgAllergene_oeufs_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_oeufs');
    const IconeSvgAllergene_poissons_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_poissons');
    const IconeSvgAllergene_soja_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_soja');
    const IconeSvgAllergene_crustaces_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_crustaces');
    const IconeSvgAllergene_gluten_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_gluten');
    const IconeSvgAllergene_fruits_coques_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_fruits_coques');
    const IconeSvgAllergene_celeri_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_celeri');
    const IconeSvgAllergene_moutarde_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_moutarde');
    const IconeSvgAllergene_sesame_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_sesame');
    const IconeSvgAllergene_sulfites_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_sulfites');
    const IconeSvgAllergene_lupin_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_lupin');
    const IconeSvgAllergene_mollusques_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAllergene_mollusques');
    const IconeSvgExclamation_sign_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgExclamation_sign');
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
      getIconeSvg(aType, aLabel, aColor) {
        let lIconeSvg;
        switch (aType) {
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Utilisateur:
            lIconeSvg = '';
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Gluten:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_gluten_1.IconeSvgAllergene_gluten,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Crustace:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_crustaces_1.IconeSvgAllergene_crustaces,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Oeuf:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_oeufs_1.IconeSvgAllergene_oeufs,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Poisson:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_poissons_1.IconeSvgAllergene_poissons,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Arachide:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_arachides_1.IconeSvgAllergene_arachides,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Soja:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_soja_1.IconeSvgAllergene_soja,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Lait:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_lait_1.IconeSvgAllergene_lait,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_FruitACoque:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_fruits_coques_1.IconeSvgAllergene_fruits_coques,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Celeri:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_celeri_1.IconeSvgAllergene_celeri,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Moutarde:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_moutarde_1.IconeSvgAllergene_moutarde,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Sesame:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_sesame_1.IconeSvgAllergene_sesame,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Sulfites:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_sulfites_1.IconeSvgAllergene_sulfites,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Lupin:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_lupin_1.IconeSvgAllergene_lupin,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          case TypeOrigineCreationAllergeneAlimentaire.OCAA_Mollusque:
            lIconeSvg = IE.jsx.str(
              IconeSvgAllergene_mollusques_1.IconeSvgAllergene_mollusques,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
          default:
            lIconeSvg = IE.jsx.str(
              IconeSvgExclamation_sign_1.IconeSvgExclamation_sign,
              { class: 'i-medium', ie_tooltiplabel: aLabel, style: aColor },
            );
            break;
        }
        return lIconeSvg;
      },
    };
    exports.TypeOrigineCreationAllergeneAlimentaireUtil =
      TypeOrigineCreationAllergeneAlimentaireUtil;
  },
  fn: 'typeoriginecreationallergenealimentaire.js',
});