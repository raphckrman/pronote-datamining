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
      getHtmlBtnAssistantSaisie(aModelBtnIcon) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aModelBtnIcon,
          class: 'bt-activable icon_pencil mix-icon_star i-top',
        });
      },
      getHtmlBtnTriOrdreChronologique(aModelBtnIcon) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aModelBtnIcon,
          class: 'bt-activable icon_ordre_chronologique',
        });
      },
      getHtmlBtnCompacterColonnes(aModelBtnIcon) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aModelBtnIcon,
          class: 'bt-activable icon_table mix-icon_resize_horizontal i-top',
        });
      },
      getHtmlBtnCompacterLignes(aModelBtnIcon) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aModelBtnIcon,
          class: 'bt-activable icon_table mix-icon_resize_vertical i-top',
        });
      },
      getHtmlBtnGrapheAraignee(aModelBtnIcon) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aModelBtnIcon,
          class: 'bt-activable icon_graphe_araigne',
          'aria-haspopup': 'dialog',
        });
      },
      getHtmlBtnAvecListeEleves(aModelBtnIcon) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aModelBtnIcon,
          class: 'bt-activable icon_liste_etudiant',
        });
      },
      getHtmlBtnAfficherCoursAnnules(aModelBtnIcon, aJSXModelClasse) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aModelBtnIcon,
          class: 'bt-activable icon_fiche_T i-small',
          'ie-class': aJSXModelClasse,
        });
      },
      getHtmlBtnAfficherCoursAnnulesControleur(aNomIEModel) {
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
      getHtmlBtnAfficherCahiersDeTextesDetaches(aModelBtnIcon) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aModelBtnIcon,
          class: 'bt-activable icon_Defaut_de_carnet',
          'aria-haspopup': 'dialog',
        });
      },
      getHtmlBtnAfficherMasquerZone(aModelBtnIcon) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aModelBtnIcon,
          class: 'bt-activable icon_pushpin',
        });
      },
      getHtmlBtnMonsieurFiche(aIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aIEModel,
          class: 'bt-activable icon_question',
          'aria-haspopup': 'dialog',
        });
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
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_photo',
          'aria-haspopup': 'dialog',
        });
      },
      getHtmlBtnAfficherFicheEleve(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_fiche_eleve',
          'aria-haspopup': 'dialog',
        });
      },
      getHtmlBtnAfficherEmploiDuTemps(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_fiche_T_triple',
        });
      },
      getHtmlBtnChargeDeTravail(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_charge_travail',
          'aria-haspopup': 'dialog',
        });
      },
      getHtmlBtnICal(aNomIEModel) {
        return `<ie-btnicon ie-model="${aNomIEModel}" class="bt-activable icon_ical" aria-haspopup="dialog"></ie-btnicon>`;
      },
      getHtmlBtnMiseEnFormeTexte(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_font',
          'aria-haspopup': 'dialog',
        });
      },
      getHtmlBtnCloud(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_cloud',
        });
      },
      getHtmlBtnSitesInternet(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_globe',
        });
      },
      getHtmlBtnPiecesJointes(aNomIEModel, aId) {
        return `<ie-btnicon ${!!aId ? `id="${aId}"` : ''} ie-model="${aNomIEModel}" class="bt-activable icon_piece_jointe" aria-haspopup="dialog"></ie-btnicon>`;
      },
      getHtmlBtnQCM(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_qcm',
        });
      },
      getHtmlBtnKiosque(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_exercice_numerique',
        });
      },
      getHtmlBtnZoomPlusMoins(aNomIEModel, aJsxFuncClasseIcone) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable',
          'ie-class': aJsxFuncClasseIcone,
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
      getHtmlBtnSupprimer(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_trash',
        });
      },
      getHtmlBtnCrayonMagique(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_magic',
          'aria-haspopup': 'menu',
        });
      },
      getHtmlBtnListesDiffusion(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_groupes_accompagnement_personnalise',
          'aria-haspopup': 'dialog',
        });
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
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_competence_absent',
        });
      },
      getHtmlBtnUniquementMesServices(aNomIEModel) {
        return IE.jsx.str('ie-btnicon', {
          'ie-model': aNomIEModel,
          class: 'bt-activable icon_autre_service',
        });
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