IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireBoutonBandeau = void 0;
    const IconeSvgPencil_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPencil');
    const IconeSvgStar_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgStar');
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    const IconeSvgCog_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCog');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const IconeSvgVs_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgVs');
    const IconeSvgOrdre_chronologique_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgOrdre_chronologique');
    const IconeSvgTable_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTable');
    const IconeSvgResize_horizontal_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgResize_horizontal');
    const IconeSvgResize_vertical_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgResize_vertical');
    const IconeSvgGraphe_araigne_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgGraphe_araigne');
    const IconeSvgListe_etudiant_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgListe_etudiant');
    const IconeSvgDefaut_de_carnet_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDefaut_de_carnet');
    const IconeSvgPushpin_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPushpin');
    const IconeSvgQuestion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgQuestion');
    const IconeSvgPhoto_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPhoto');
    const IconeSvgFiche_eleve_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFiche_eleve');
    const IconeSvgFiche_T_triple_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFiche_T_triple');
    const IconeSvgCharge_travail_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCharge_travail');
    const IconeSvgIcal_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgIcal');
    const IconeSvgFont_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFont');
    const IconeSvgGlobe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgGlobe');
    const IconeSvgPiece_jointe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPiece_jointe');
    const IconeSvgQcm_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgQcm');
    const IconeSvgExercice_numerique_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgExercice_numerique');
    const IconeSvgTrash_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTrash');
    const IconeSvgMagic_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgMagic');
    const IconeSvgGroupes_accompagnement_personnalise_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgGroupes_accompagnement_personnalise');
    const IconeSvgDiffuser_information_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_information');
    const IconeSvgCompetence_absent_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCompetence_absent');
    const IconeSvgAutre_service_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAutre_service');
    const IconeSvgInfo_sign_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgInfo_sign');
    exports.UtilitaireBoutonBandeau = {
      getHtmlBtnParametrer(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: 'bt-activable',
            title: 'Voir les paramètres d'affichage',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgCog_1.IconeSvgCog, null),
        );
      },
      getHtmlBtnAssistantSaisie(aModelBtnIcon) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aModelBtnIcon, class: 'bt-activable' },
          IE.jsx.str(
            IconeSvg_1.IconeSvg,
            null,
            IE.jsx.str(IconeSvgPencil_1.IconeSvgPencil, null),
            IE.jsx.str(IconeSvgStar_1.IconeSvgStar, { class: 'icone-badge' }),
          ),
        );
      },
      getHtmlBtnRecapitulatifVS(aModelBtnIcon) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aModelBtnIcon, class: 'bt-activable' },
          IE.jsx.str(IconeSvgVs_1.IconeSvgVs, null),
        );
      },
      getHtmlBtnTriOrdreChronologique(aModelBtnIcon) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aModelBtnIcon, class: 'bt-activable' },
          IE.jsx.str(
            IconeSvgOrdre_chronologique_1.IconeSvgOrdre_chronologique,
            null,
          ),
        );
      },
      getHtmlBtnCompacterColonnes(aModelBtnIcon) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aModelBtnIcon, class: 'bt-activable' },
          IE.jsx.str(
            IconeSvg_1.IconeSvg,
            null,
            IE.jsx.str(IconeSvgTable_1.IconeSvgTable, null),
            IE.jsx.str(IconeSvgResize_horizontal_1.IconeSvgResize_horizontal, {
              class: 'icone-badge',
            }),
          ),
        );
      },
      getHtmlBtnCompacterLignes(aModelBtnIcon) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aModelBtnIcon, class: 'bt-activable' },
          IE.jsx.str(
            IconeSvg_1.IconeSvg,
            null,
            IE.jsx.str(IconeSvgTable_1.IconeSvgTable, null),
            IE.jsx.str(IconeSvgResize_vertical_1.IconeSvgResize_vertical, {
              class: 'icone-badge',
            }),
          ),
        );
      },
      getHtmlBtnGrapheAraignee(aModelBtnIcon) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aModelBtnIcon,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgGraphe_araigne_1.IconeSvgGraphe_araigne, null),
        );
      },
      getHtmlBtnAvecListeEleves(aModelBtnIcon) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aModelBtnIcon, class: 'bt-activable' },
          IE.jsx.str(IconeSvgListe_etudiant_1.IconeSvgListe_etudiant, null),
        );
      },
      getHtmlBtnAfficherCoursAnnules(aModelBtnIcon, aJSXModelClasse) {
        return IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
          ie_model: aModelBtnIcon,
          class: 'bt-activable icon_fiche_T i-small',
          ie_class: aJSXModelClasse,
        });
      },
      getClassesMixIconAfficherCoursAnnules(aAvecCoursAnnules) {
        const lClasses = ['i-top'];
        if (aAvecCoursAnnules) {
          lClasses.push('mix-icon_ok', 'i-green');
        } else {
          lClasses.push('mix-icon_remove', 'i-red');
        }
        return lClasses.join(' ');
      },
      getHtmlBtnAfficherCahiersDeTextesDetaches(aModelBtnIcon) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aModelBtnIcon,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgDefaut_de_carnet_1.IconeSvgDefaut_de_carnet, null),
        );
      },
      getHtmlBtnAfficherMasquerZone(aModelBtnIcon) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aModelBtnIcon, class: 'bt-activable' },
          IE.jsx.str(IconeSvgPushpin_1.IconeSvgPushpin, null),
        );
      },
      getHtmlBtnMonsieurFiche(aIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aIEModel,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgQuestion_1.IconeSvgQuestion, null),
        );
      },
      getHtmlBtnSaisieHorizontalVertical(aNomIEModel, aJSXModelClasse) {
        return IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
          ie_model: aNomIEModel,
          class: 'bt-activable icon_pencil i-small',
          ie_class: aJSXModelClasse,
        });
      },
      getClassesMixIconSaisieHorizontalVertical(aSaisieVerticale) {
        const lClasses = ['i-bottom'];
        if (aSaisieVerticale) {
          lClasses.push('mix-icon_arrow_down');
        } else {
          lClasses.push('mix-icon_arrow_right');
        }
        return lClasses.join(' ');
      },
      getHtmlBtnAfficherPhotoEleve(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgPhoto_1.IconeSvgPhoto, null),
        );
      },
      getHtmlBtnAfficherFicheEleve(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgFiche_eleve_1.IconeSvgFiche_eleve, null),
        );
      },
      getHtmlBtnAfficherEmploiDuTemps(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aNomIEModel, class: 'bt-activable' },
          IE.jsx.str(IconeSvgFiche_T_triple_1.IconeSvgFiche_T_triple, null),
        );
      },
      getHtmlBtnChargeDeTravail(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgCharge_travail_1.IconeSvgCharge_travail, null),
        );
      },
      getHtmlBtnICal(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgIcal_1.IconeSvgIcal, null),
        );
      },
      getHtmlBtnMiseEnFormeTexte(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgFont_1.IconeSvgFont, null),
        );
      },
      getHtmlBtnSitesInternet(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aNomIEModel, class: 'bt-activable' },
          IE.jsx.str(IconeSvgGlobe_1.IconeSvgGlobe, null),
        );
      },
      getHtmlBtnPiecesJointes(aNomIEModel, aId) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            id: aId,
            ie_model: aNomIEModel,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(IconeSvgPiece_jointe_1.IconeSvgPiece_jointe, null),
        );
      },
      getHtmlBtnQCM(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aNomIEModel, class: 'bt-activable' },
          IE.jsx.str(IconeSvgQcm_1.IconeSvgQcm, null),
        );
      },
      getHtmlBtnKiosque(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aNomIEModel, class: 'bt-activable' },
          IE.jsx.str(
            IconeSvgExercice_numerique_1.IconeSvgExercice_numerique,
            null,
          ),
        );
      },
      getHtmlBtnZoomPlusMoins(aNomIEModel, aJsxFuncClasseIcone) {
        return IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
          ie_model: aNomIEModel,
          class: 'bt-activable',
          ie_class: aJsxFuncClasseIcone,
        });
      },
      getClassesIconZoomPlusMoins(aEtatAgrandi) {
        const lClasses = [];
        if (aEtatAgrandi) {
          lClasses.push('icon_zoom_out');
        } else {
          lClasses.push('icon_zoom_in');
        }
        return lClasses.join(' ');
      },
      getHtmlBtnSupprimer(aNomIEModel, aAriaHaspopup) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: 'bt-activable',
            'aria-haspopup': aAriaHaspopup,
          },
          IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null),
        );
      },
      getHtmlBtnCrayonMagique(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: 'bt-activable',
            'aria-haspopup': 'menu',
          },
          IE.jsx.str(IconeSvgMagic_1.IconeSvgMagic, null),
        );
      },
      getHtmlBtnListesDiffusion(aNomIEModel, aClass = []) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: ['bt-activable', ...aClass],
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(
            IconeSvgGroupes_accompagnement_personnalise_1.IconeSvgGroupes_accompagnement_personnalise,
            null,
          ),
        );
      },
      getHtmlBtnDiffuserInformation(aNomIEModel, aLabel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            'aria-label': aLabel,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str(
            IconeSvgDiffuser_information_1.IconeSvgDiffuser_information,
            null,
          ),
        );
      },
      getHtmlBtnRecapitulatifAbsences(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aNomIEModel, class: 'bt-activable' },
          IE.jsx.str(
            IconeSvgCompetence_absent_1.IconeSvgCompetence_absent,
            null,
          ),
        );
      },
      getHtmlBtnUniquementMesServices(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          { ie_model: aNomIEModel, class: 'bt-activable' },
          IE.jsx.str(IconeSvgAutre_service_1.IconeSvgAutre_service, null),
        );
      },
      getHtmlBtnInformationsGrille(aNomIEModel) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            ie_model: aNomIEModel,
            class: 'bt-activable',
            'aria-haspopup': 'dialog',
            title: ObjetTraduction_1.GTraductions.getValeur(
              'ObjetGrille.TitreInfosDetails',
            ),
          },
          IE.jsx.str(IconeSvgInfo_sign_1.IconeSvgInfo_sign, null),
        );
      },
    };
  },
  fn: 'utilitaireboutonbandeau.js',
});