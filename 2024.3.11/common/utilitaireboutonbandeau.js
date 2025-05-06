IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireBoutonBandeau = void 0;
    const ObjetTraduction_1 = require('ObjetTraduction');
    exports.UtilitaireBoutonBandeau = {
      getHtmlBtnParametrer(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_cog',
          title: 'Voir les paramètres d'affichage',
          'aria-haspopup': 'dialog',
        });
      },
      getHtmlBtnAssistantSaisie(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_pencil mix-icon_star i-top"></ie-btnicon>`;
      },
      getHtmlBtnTriOrdreChronologique(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_ordre_chronologique"></ie-btnicon>`;
      },
      getHtmlBtnCompacterColonnes(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_table mix-icon_resize_horizontal i-top"></ie-btnicon>`;
      },
      getHtmlBtnCompacterLignes(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_table mix-icon_resize_vertical i-top"></ie-btnicon>`;
      },
      getHtmlBtnGrapheAraignee(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_graphe_araigne"></ie-btnicon>`;
      },
      getHtmlBtnAvecListeEleves(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_liste_etudiant"></ie-btnicon>`;
      },
      getHtmlBtnAfficherCoursAnnules(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_fiche_T i-small" ie-class="${aNomIEModel}.getClassesMixIcon"></ie-btnicon>`;
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
      getHtmlBtnAfficherCahiersDeTextesDetaches(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_Defaut_de_carnet"></ie-btnicon>`;
      },
      getHtmlBtnAfficherMasquerZone(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_pushpin"></ie-btnicon>`;
      },
      getHtmlBtnMonsieurFiche(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_question"></ie-btnicon>`;
      },
      getHtmlBtnSaisieHorizontalVertical(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_pencil i-small" ie-class="${aNomIEModel}.getClassesMixIcon"></ie-btnicon>`;
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
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_photo"></ie-btnicon>`;
      },
      getHtmlBtnAfficherFicheEleve(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_fiche_eleve"></ie-btnicon>`;
      },
      getHtmlBtnAfficherEmploiDuTemps(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_fiche_T_triple"></ie-btnicon>`;
      },
      getHtmlBtnChargeDeTravail(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_charge_travail"></ie-btnicon>`;
      },
      getHtmlBtnICal(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_ical"></ie-btnicon>`;
      },
      getHtmlBtnMiseEnFormeTexte(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_font"></ie-btnicon>`;
      },
      getHtmlBtnCloud(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_cloud"></ie-btnicon>`;
      },
      getHtmlBtnSitesInternet(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_globe"></ie-btnicon>`;
      },
      getHtmlBtnPiecesJointes(aNomIEModel, aId) {
        return `<ie-btnicon ${!!aId ? `id="${aId}"` : ''} ie-model="${aNomIEModel}" class="bt-activable icon_piece_jointe"></ie-btnicon>`;
      },
      getHtmlBtnQCM(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_qcm"></ie-btnicon>`;
      },
      getHtmlBtnKiosque(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_exercice_numerique"></ie-btnicon>`;
      },
      getHtmlBtnZoomPlusMoins(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable" ie-class="${aNomIEModel}.getClassesIcon"></ie-btnicon>`;
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
      getHtmlBtnSupprimer(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_trash"></ie-btnicon>`;
      },
      getHtmlBtnCrayonMagique(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_magic"></ie-btnicon>`;
      },
      getHtmlBtnListesDiffusion(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_groupes_accompagnement_personnalise"></ie-btnicon>`;
      },
      getHtmlBtnDiffuserInformation(aNomIEModel, aLabel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          'aria-label': aLabel,
          class: 'bt-activable icon_diffuser_information',
          'aria-haspopup': 'dialog',
        });
      },
      getHtmlBtnRecapitulatifAbsences(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_competence_absent"></ie-btnicon>`;
      },
      getHtmlBtnUniquementMesServices(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_autre_service"></ie-btnicon>`;
      },
      getHtmlBtnInformationsGrille(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_info_sign',
          'aria-haspopup': 'dialog',
          title: ObjetTraduction_1.GTraductions.getValeur(
            'ObjetGrille.TitreInfosDetails',
          ),
        });
      },
    };
  },
  fn: 'utilitaireboutonbandeau.js',
});