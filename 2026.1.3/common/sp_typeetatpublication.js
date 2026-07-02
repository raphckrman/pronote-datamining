IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeItemEnumUtil =
      exports.TypeModeAff =
      exports.TypeItemEnum =
      exports.TypeEtatPublication =
        void 0;
    var TypeEtatPublication;
    (function (TypeEtatPublication) {
      TypeEtatPublication[(TypeEtatPublication['Publiee'] = 0)] = 'Publiee';
      TypeEtatPublication[(TypeEtatPublication['PublieeFutur'] = 1)] =
        'PublieeFutur';
      TypeEtatPublication[(TypeEtatPublication['PublieePasse'] = 2)] =
        'PublieePasse';
      TypeEtatPublication[(TypeEtatPublication['Brouillon'] = 3)] = 'Brouillon';
    })(
      TypeEtatPublication ||
        (exports.TypeEtatPublication = TypeEtatPublication = {}),
    );
    var TypeItemEnum;
    (function (TypeItemEnum) {
      TypeItemEnum[(TypeItemEnum['IE_Reception'] = 0)] = 'IE_Reception';
      TypeItemEnum[(TypeItemEnum['IE_Diffusion_Tout'] = 1)] =
        'IE_Diffusion_Tout';
      TypeItemEnum[(TypeItemEnum['IE_Diffusion_Publiee'] = 2)] =
        'IE_Diffusion_Publiee';
      TypeItemEnum[(TypeItemEnum['IE_Diffusion_PublieeFutur'] = 3)] =
        'IE_Diffusion_PublieeFutur';
      TypeItemEnum[(TypeItemEnum['IE_Diffusion_PublieePasse'] = 4)] =
        'IE_Diffusion_PublieePasse';
      TypeItemEnum[(TypeItemEnum['IE_Brouillon'] = 5)] = 'IE_Brouillon';
      TypeItemEnum[(TypeItemEnum['IE_Modele_Sondage'] = 6)] =
        'IE_Modele_Sondage';
      TypeItemEnum[(TypeItemEnum['IE_Modele_Info'] = 7)] = 'IE_Modele_Info';
      TypeItemEnum[(TypeItemEnum['IE_SansEtiquette'] = 8)] = 'IE_SansEtiquette';
    })(TypeItemEnum || (exports.TypeItemEnum = TypeItemEnum = {}));
    var TypeModeAff;
    (function (TypeModeAff) {
      TypeModeAff[(TypeModeAff['MA_Reception'] = 0)] = 'MA_Reception';
      TypeModeAff[(TypeModeAff['MA_Diffusion'] = 1)] = 'MA_Diffusion';
      TypeModeAff[(TypeModeAff['MA_Brouillon'] = 2)] = 'MA_Brouillon';
      TypeModeAff[(TypeModeAff['MA_Modele'] = 3)] = 'MA_Modele';
    })(TypeModeAff || (exports.TypeModeAff = TypeModeAff = {}));
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const IconeSvgBrouillon_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgBrouillon_discussion');
    const IconeSvgDiffuser_sondage_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_sondage');
    const IconeSvgDiffuser_information_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_information');
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    const IconeSvgOk_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgOk');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const IconeSvgEdt_permanence_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEdt_permanence');
    const IconeSvgInbox_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgInbox');
    const IconeSvgInfo_sondage_publier_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgInfo_sondage_publier');
    const IconeSvgEnvoyer_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEnvoyer');
    const TypeItemEnumUtil = {
      getStr(aItem) {
        switch (aItem) {
          case TypeItemEnum.IE_Reception:
            return 'Reçus';
          case TypeItemEnum.IE_Diffusion_Tout:
            return 'Diffusés';
          case TypeItemEnum.IE_Diffusion_Publiee:
            return 'En cours';
          case TypeItemEnum.IE_Diffusion_PublieeFutur:
            return 'À venir';
          case TypeItemEnum.IE_Diffusion_PublieePasse:
            return 'Passés';
          case TypeItemEnum.IE_Brouillon:
            return 'Brouillons';
          case TypeItemEnum.IE_Modele_Sondage:
            return 'Modèles de sondage';
          case TypeItemEnum.IE_Modele_Info:
            return 'Modèles d'information';
          default:
            return '';
        }
      },
      getIconeSvg(aItem) {
        switch (aItem) {
          case TypeItemEnum.IE_Reception:
            return IE.jsx.str(IconeSvgInbox_1.IconeSvgInbox, null);
          case TypeItemEnum.IE_Diffusion_Tout:
            return IE.jsx.str(IconeSvgEnvoyer_1.IconeSvgEnvoyer, null);
          case TypeItemEnum.IE_Diffusion_Publiee:
            return IE.jsx.str(
              IconeSvg_1.IconeSvg,
              null,
              IE.jsx.str(
                IconeSvgInfo_sondage_publier_1.IconeSvgInfo_sondage_publier,
                null,
              ),
              IE.jsx.str(IconeSvgOk_1.IconeSvgOk, {
                class: Divers_css_1.SD.iconeBadge,
              }),
            );
          case TypeItemEnum.IE_Diffusion_PublieeFutur:
            return IE.jsx.str(
              IconeSvg_1.IconeSvg,
              null,
              IE.jsx.str(
                IconeSvgInfo_sondage_publier_1.IconeSvgInfo_sondage_publier,
                null,
              ),
              IE.jsx.str(IconeSvgEdt_permanence_1.IconeSvgEdt_permanence, {
                class: Divers_css_1.SD.iconeBadge,
              }),
            );
          case TypeItemEnum.IE_Diffusion_PublieePasse:
            return IE.jsx.str(
              IconeSvgInfo_sondage_publier_1.IconeSvgInfo_sondage_publier,
              null,
            );
          case TypeItemEnum.IE_Brouillon:
            return IE.jsx.str(
              IconeSvgBrouillon_discussion_1.IconeSvgBrouillon_discussion,
              null,
            );
          case TypeItemEnum.IE_Modele_Sondage:
            return IE.jsx.str(
              IconeSvgDiffuser_sondage_1.IconeSvgDiffuser_sondage,
              null,
            );
          case TypeItemEnum.IE_Modele_Info:
            return IE.jsx.str(
              IconeSvgDiffuser_information_1.IconeSvgDiffuser_information,
              null,
            );
          default:
            return '';
        }
      },
      getTypeModeAffDeTypeItemEnum(aItem) {
        switch (aItem) {
          case TypeItemEnum.IE_Reception:
            return TypeModeAff.MA_Reception;
          case TypeItemEnum.IE_Diffusion_Tout:
          case TypeItemEnum.IE_Diffusion_PublieePasse:
          case TypeItemEnum.IE_Diffusion_Publiee:
          case TypeItemEnum.IE_Diffusion_PublieeFutur:
            return TypeModeAff.MA_Diffusion;
          case TypeItemEnum.IE_Brouillon:
            return TypeModeAff.MA_Brouillon;
          case TypeItemEnum.IE_Modele_Sondage:
          case TypeItemEnum.IE_Modele_Info:
            return TypeModeAff.MA_Modele;
          case TypeItemEnum.IE_SansEtiquette: {
            return null;
          }
          default: {
            return null;
          }
        }
      },
    };
    exports.TypeItemEnumUtil = TypeItemEnumUtil;
  },
  fn: 'typeetatpublication.js',
});