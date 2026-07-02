IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreObservationVSUtil = exports.TypeGenreObservationVS =
      void 0;
    var TypeGenreObservationVS;
    (function (TypeGenreObservationVS) {
      TypeGenreObservationVS[(TypeGenreObservationVS['OVS_DefautCarnet'] = 0)] =
        'OVS_DefautCarnet';
      TypeGenreObservationVS[
        (TypeGenreObservationVS['OVS_ObservationParent'] = 1)
      ] = 'OVS_ObservationParent';
      TypeGenreObservationVS[
        (TypeGenreObservationVS['OVS_Encouragement'] = 2)
      ] = 'OVS_Encouragement';
      TypeGenreObservationVS[(TypeGenreObservationVS['OVS_Autres'] = 3)] =
        'OVS_Autres';
    })(
      TypeGenreObservationVS ||
        (exports.TypeGenreObservationVS = TypeGenreObservationVS = {}),
    );
    const IconeSvgInfo_sign_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgInfo_sign');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const IconeSvgDefaut_de_carnet_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDefaut_de_carnet');
    const IconeSvgSmile_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgSmile');
    const IconeSvgObservation_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgObservation');
    exports.TypeGenreObservationVSUtil = {
      getIconeSVG(aGenre, aTabClass = []) {
        switch (aGenre) {
          case TypeGenreObservationVS.OVS_DefautCarnet:
            return IE.jsx.str(
              IconeSvgDefaut_de_carnet_1.IconeSvgDefaut_de_carnet,
              { class: aTabClass },
            );
          case TypeGenreObservationVS.OVS_ObservationParent:
            return IE.jsx.str(IconeSvgObservation_1.IconeSvgObservation, {
              class: aTabClass,
            });
          case TypeGenreObservationVS.OVS_Encouragement:
            return IE.jsx.str(IconeSvgSmile_1.IconeSvgSmile, {
              class: aTabClass,
            });
          case TypeGenreObservationVS.OVS_Autres:
            return IE.jsx.str(IconeSvgInfo_sign_1.IconeSvgInfo_sign, {
              class: aTabClass,
            });
          default:
            break;
        }
        return '';
      },
      getRubriqueLibelle(typeRubrique) {
        let lLabelRubrique;
        switch (typeRubrique) {
          case TypeGenreObservationVS.OVS_ObservationParent:
            lLabelRubrique = 'Observations';
            break;
          case TypeGenreObservationVS.OVS_DefautCarnet:
            lLabelRubrique = 'Défauts de carnet/carte';
            break;
          case TypeGenreObservationVS.OVS_Encouragement:
            lLabelRubrique = 'Encouragements';
            break;
          default:
            break;
        }
        return lLabelRubrique;
      },
      getLabelPourButtonCreation(typeRubrique) {
        let lLabelButton;
        switch (typeRubrique) {
          case TypeGenreObservationVS.OVS_ObservationParent:
            lLabelButton = 'Saisir une nouvelle observation';
            break;
          case TypeGenreObservationVS.OVS_DefautCarnet:
            lLabelButton = 'Saisir un nouveau défaut de carnet/carte';
            break;
          case TypeGenreObservationVS.OVS_Encouragement:
            lLabelButton = 'Saisir un nouvel encouragement/valorisation';
            break;
          default:
            break;
        }
        return lLabelButton;
      },
      estRubriqueModifiable(aGenre) {
        return [
          TypeGenreObservationVS.OVS_ObservationParent,
          TypeGenreObservationVS.OVS_Encouragement,
          TypeGenreObservationVS.OVS_DefautCarnet,
        ].includes(aGenre);
      },
    };
  },
  fn: 'typegenreobservationvs.js',
});