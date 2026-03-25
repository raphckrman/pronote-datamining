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
    })(TypeItemEnum || (exports.TypeItemEnum = TypeItemEnum = {}));
    var TypeModeAff;
    (function (TypeModeAff) {
      TypeModeAff[(TypeModeAff['MA_Reception'] = 0)] = 'MA_Reception';
      TypeModeAff[(TypeModeAff['MA_Diffusion'] = 1)] = 'MA_Diffusion';
      TypeModeAff[(TypeModeAff['MA_Brouillon'] = 2)] = 'MA_Brouillon';
      TypeModeAff[(TypeModeAff['MA_Modele'] = 3)] = 'MA_Modele';
    })(TypeModeAff || (exports.TypeModeAff = TypeModeAff = {}));
    const ObjetTraduction_1 = require('ObjetTraduction');
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
      getIcon(aItem) {
        switch (aItem) {
          case TypeItemEnum.IE_Reception:
            return 'icon_inbox';
          case TypeItemEnum.IE_Diffusion_Tout:
            return 'icon_envoyer';
          case TypeItemEnum.IE_Diffusion_Publiee:
            return 'icon_info_sondage_publier mix-icon_ok';
          case TypeItemEnum.IE_Diffusion_PublieeFutur:
            return 'icon_info_sondage_publier mix-icon_edt_permanence';
          case TypeItemEnum.IE_Diffusion_PublieePasse:
            return 'icon_info_sondage_publier';
          case TypeItemEnum.IE_Brouillon:
            return 'icon_brouillon_discussion';
          case TypeItemEnum.IE_Modele_Sondage:
            return 'icon_diffuser_sondage';
          case TypeItemEnum.IE_Modele_Info:
            return 'icon_diffuser_information';
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
          default:
            return null;
        }
      },
    };
    exports.TypeItemEnumUtil = TypeItemEnumUtil;
  },
  fn: 'typeetatpublication.js',
});