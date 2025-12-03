IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreRessourceUtil = exports.EGenreRessource = void 0;
    var EGenreRessource;
    (function (EGenreRessource) {
      EGenreRessource[(EGenreRessource['Aucune'] = 0)] = 'Aucune';
      EGenreRessource[(EGenreRessource['Classe'] = 1)] = 'Classe';
      EGenreRessource[(EGenreRessource['Groupe'] = 2)] = 'Groupe';
      EGenreRessource[(EGenreRessource['Enseignant'] = 3)] = 'Enseignant';
      EGenreRessource[(EGenreRessource['Eleve'] = 4)] = 'Eleve';
      EGenreRessource[(EGenreRessource['Responsable'] = 5)] = 'Responsable';
      EGenreRessource[(EGenreRessource['Niveau'] = 6)] = 'Niveau';
      EGenreRessource[(EGenreRessource['Orientation'] = 7)] = 'Orientation';
      EGenreRessource[(EGenreRessource['Specialite'] = 8)] = 'Specialite';
      EGenreRessource[(EGenreRessource['OptionSpecialite'] = 9)] =
        'OptionSpecialite';
      EGenreRessource[(EGenreRessource['Etablissement'] = 10)] =
        'Etablissement';
      EGenreRessource[(EGenreRessource['Periode'] = 11)] = 'Periode';
      EGenreRessource[(EGenreRessource['Service'] = 12)] = 'Service';
      EGenreRessource[(EGenreRessource['Absence'] = 13)] = 'Absence';
      EGenreRessource[(EGenreRessource['Retard'] = 14)] = 'Retard';
      EGenreRessource[(EGenreRessource['Exclusion'] = 15)] = 'Exclusion';
      EGenreRessource[(EGenreRessource['Matiere'] = 16)] = 'Matiere';
      EGenreRessource[(EGenreRessource['Salle'] = 17)] = 'Salle';
      EGenreRessource[(EGenreRessource['CoEnseignant'] = 18)] = 'CoEnseignant';
      EGenreRessource[(EGenreRessource['Suivis'] = 19)] = 'Suivis';
      EGenreRessource[(EGenreRessource['Cours'] = 20)] = 'Cours';
      EGenreRessource[(EGenreRessource['Infirmerie'] = 21)] = 'Infirmerie';
      EGenreRessource[(EGenreRessource['AbsenceRepas'] = 22)] = 'AbsenceRepas';
      EGenreRessource[(EGenreRessource['Pilier'] = 23)] = 'Pilier';
      EGenreRessource[(EGenreRessource['ElementPilier'] = 24)] =
        'ElementPilier';
      EGenreRessource[(EGenreRessource['Competence'] = 25)] = 'Competence';
      EGenreRessource[(EGenreRessource['_DisciplineBrevet'] = 26)] =
        '_DisciplineBrevet';
      EGenreRessource[(EGenreRessource['Palier'] = 27)] = 'Palier';
      EGenreRessource[(EGenreRessource['SousItem'] = 28)] = 'SousItem';
      EGenreRessource[(EGenreRessource['Evaluation'] = 29)] = 'Evaluation';
      EGenreRessource[(EGenreRessource['Stage'] = 30)] = 'Stage';
      EGenreRessource[(EGenreRessource['SousMatiere'] = 31)] = 'SousMatiere';
      EGenreRessource[(EGenreRessource['MaitreDeStage'] = 32)] =
        'MaitreDeStage';
      EGenreRessource[(EGenreRessource['InspecteurPedagogique'] = 33)] =
        'InspecteurPedagogique';
      EGenreRessource[(EGenreRessource['Personnel'] = 34)] = 'Personnel';
      EGenreRessource[(EGenreRessource['EvaluationHistorique'] = 35)] =
        'EvaluationHistorique';
      EGenreRessource[(EGenreRessource['DossierProgression'] = 36)] =
        'DossierProgression';
      EGenreRessource[(EGenreRessource['ContenuDeCours'] = 37)] =
        'ContenuDeCours';
      EGenreRessource[(EGenreRessource['TravailAFaire'] = 38)] =
        'TravailAFaire';
      EGenreRessource[(EGenreRessource['Progression'] = 39)] = 'Progression';
      EGenreRessource[(EGenreRessource['Dispense'] = 40)] = 'Dispense';
      EGenreRessource[(EGenreRessource['Punition'] = 41)] = 'Punition';
      EGenreRessource[(EGenreRessource['Sanction'] = 42)] = 'Sanction';
      EGenreRessource[(EGenreRessource['Communication'] = 43)] =
        'Communication';
      EGenreRessource[(EGenreRessource['AbsenceInternat'] = 44)] =
        'AbsenceInternat';
      EGenreRessource[(EGenreRessource['Observation'] = 45)] = 'Observation';
      EGenreRessource[(EGenreRessource['ObservationProfesseurEleve'] = 46)] =
        'ObservationProfesseurEleve';
      EGenreRessource[(EGenreRessource['ConvocationVS'] = 47)] =
        'ConvocationVS';
      EGenreRessource[(EGenreRessource['DocumentJoint'] = 48)] =
        'DocumentJoint';
      EGenreRessource[(EGenreRessource['InternetCategorie'] = 49)] =
        'InternetCategorie';
      EGenreRessource[(EGenreRessource['DocJointEtablissement'] = 50)] =
        'DocJointEtablissement';
      EGenreRessource[(EGenreRessource['Option'] = 51)] = 'Option';
      EGenreRessource[(EGenreRessource['ProgrammationPunition'] = 52)] =
        'ProgrammationPunition';
      EGenreRessource[(EGenreRessource['ReportPunition'] = 53)] =
        'ReportPunition';
      EGenreRessource[(EGenreRessource['DisciplineLivretScolaire'] = 54)] =
        'DisciplineLivretScolaire';
      EGenreRessource[(EGenreRessource['QCM'] = 55)] = 'QCM';
      EGenreRessource[(EGenreRessource['ExecutionQCM'] = 56)] = 'ExecutionQCM';
      EGenreRessource[(EGenreRessource['PartieDeClasse'] = 57)] =
        'PartieDeClasse';
      EGenreRessource[(EGenreRessource['DocJointEleve'] = 58)] =
        'DocJointEleve';
      EGenreRessource[(EGenreRessource['Devoir'] = 59)] = 'Devoir';
      EGenreRessource[(EGenreRessource['InternetEnumere'] = 60)] =
        'InternetEnumere';
      EGenreRessource[
        (EGenreRessource['AppreciationBulletinCompetence'] = 61)
      ] = 'AppreciationBulletinCompetence';
      EGenreRessource[(EGenreRessource['Entreprise'] = 62)] = 'Entreprise';
      EGenreRessource[(EGenreRessource['DomaineProfessionnel'] = 63)] =
        'DomaineProfessionnel';
      EGenreRessource[(EGenreRessource['OffreDeStage'] = 64)] = 'OffreDeStage';
      EGenreRessource[(EGenreRessource['SujetDeStage'] = 65)] = 'SujetDeStage';
      EGenreRessource[(EGenreRessource['DocumentCasier'] = 66)] =
        'DocumentCasier';
      EGenreRessource[(EGenreRessource['Message'] = 67)] = 'Message';
      EGenreRessource[(EGenreRessource['PossessionMessage'] = 68)] =
        'PossessionMessage';
      EGenreRessource[
        (EGenreRessource['RelationMessageDocJointEtablissement'] = 69)
      ] = 'RelationMessageDocJointEtablissement';
      EGenreRessource[(EGenreRessource['Engagement'] = 70)] = 'Engagement';
      EGenreRessource[(EGenreRessource['MesureConservatoire'] = 71)] =
        'MesureConservatoire';
      EGenreRessource[(EGenreRessource['SousCategorieObjetDossier'] = 72)] =
        'SousCategorieObjetDossier';
      EGenreRessource[(EGenreRessource['Incident'] = 73)] = 'Incident';
      EGenreRessource[(EGenreRessource['ProtagonisteIncident'] = 74)] =
        'ProtagonisteIncident';
      EGenreRessource[
        (EGenreRessource['RelationIncidentFichierExterne'] = 75)
      ] = 'RelationIncidentFichierExterne';
      EGenreRessource[(EGenreRessource['RegimeEleve'] = 76)] = 'RegimeEleve';
      EGenreRessource[(EGenreRessource['RepasAPreparer'] = 77)] =
        'RepasAPreparer';
      EGenreRessource[(EGenreRessource['SessionDeStage'] = 78)] =
        'SessionDeStage';
      EGenreRessource[(EGenreRessource['Materiel'] = 79)] = 'Materiel';
      EGenreRessource[(EGenreRessource['Bourse'] = 80)] = 'Bourse';
      EGenreRessource[(EGenreRessource['RelationTravailAFaireEleve'] = 81)] =
        'RelationTravailAFaireEleve';
      EGenreRessource[(EGenreRessource['LieuDossier'] = 82)] = 'LieuDossier';
      EGenreRessource[(EGenreRessource['ElementProgramme'] = 83)] =
        'ElementProgramme';
      EGenreRessource[(EGenreRessource['ChapitreEltPgm'] = 84)] =
        'ChapitreEltPgm';
      EGenreRessource[(EGenreRessource['EltPgmTravailleCDT'] = 85)] =
        'EltPgmTravailleCDT';
      EGenreRessource[(EGenreRessource['Appreciation'] = 86)] = 'Appreciation';
      EGenreRessource[(EGenreRessource['ExecutionDevoirKiosque'] = 87)] =
        'ExecutionDevoirKiosque';
      EGenreRessource[(EGenreRessource['PanierRessourceKiosque'] = 88)] =
        'PanierRessourceKiosque';
      EGenreRessource[(EGenreRessource['RessourceNumeriqueKiosque'] = 89)] =
        'RessourceNumeriqueKiosque';
      EGenreRessource[(EGenreRessource['MetaMatiere'] = 90)] = 'MetaMatiere';
      EGenreRessource[(EGenreRessource['EvaluationSujet'] = 91)] =
        'EvaluationSujet';
      EGenreRessource[(EGenreRessource['EvaluationCorrige'] = 92)] =
        'EvaluationCorrige';
      EGenreRessource[(EGenreRessource['LibelleCours'] = 93)] = 'LibelleCours';
      EGenreRessource[(EGenreRessource['Site'] = 94)] = 'Site';
      EGenreRessource[(EGenreRessource['QuestionQCM'] = 95)] = 'QuestionQCM';
      EGenreRessource[
        (EGenreRessource['RelationElevePilierDeCompetence'] = 96)
      ] = 'RelationElevePilierDeCompetence';
      EGenreRessource[(EGenreRessource['QuestionCopieQCM'] = 97)] =
        'QuestionCopieQCM';
      EGenreRessource[(EGenreRessource['Coordonnees'] = 98)] = 'Coordonnees';
      EGenreRessource[(EGenreRessource['ResponsablePostulant'] = 99)] =
        'ResponsablePostulant';
      EGenreRessource[(EGenreRessource['ExecutionQCMEleve'] = 100)] =
        'ExecutionQCMEleve';
      EGenreRessource[(EGenreRessource['DocJointInscription'] = 101)] =
        'DocJointInscription';
      EGenreRessource[(EGenreRessource['CategorieDossier'] = 102)] =
        'CategorieDossier';
      EGenreRessource[(EGenreRessource['MEFGEP'] = 103)] = 'MEFGEP';
      EGenreRessource[(EGenreRessource['AutreOrientation'] = 104)] =
        'AutreOrientation';
      EGenreRessource[(EGenreRessource['Commission'] = 105)] = 'Commission';
      EGenreRessource[(EGenreRessource['ReponseEducative'] = 106)] =
        'ReponseEducative';
      EGenreRessource[(EGenreRessource['SuiviReponseEducative'] = 107)] =
        'SuiviReponseEducative';
      EGenreRessource[(EGenreRessource['NatureDocumentEleve'] = 108)] =
        'NatureDocumentEleve';
      EGenreRessource[
        (EGenreRessource['RelationCommissionFichierExterne'] = 109)
      ] = 'RelationCommissionFichierExterne';
      EGenreRessource[(EGenreRessource['Signataire'] = 110)] = 'Signataire';
      EGenreRessource[(EGenreRessource['DocumentSignature'] = 111)] =
        'DocumentSignature';
      EGenreRessource[(EGenreRessource['PersonnelHistorique'] = 112)] =
        'PersonnelHistorique';
      EGenreRessource[(EGenreRessource['EnseignantHistorique'] = 113)] =
        'EnseignantHistorique';
      EGenreRessource[(EGenreRessource['DemandeDispense'] = 114)] =
        'DemandeDispense';
      EGenreRessource[(EGenreRessource['DocJointPriseDeRDV'] = 115)] =
        'DocJointPriseDeRDV';
      EGenreRessource[(EGenreRessource['Mediatheque'] = 116)] = 'Mediatheque';
      EGenreRessource[(EGenreRessource['DossierMediatheque'] = 117)] =
        'DossierMediatheque';
      EGenreRessource[(EGenreRessource['Dortoir'] = 118)] = 'Dortoir';
      EGenreRessource[(EGenreRessource['Chambre'] = 119)] = 'Chambre';
      EGenreRessource[(EGenreRessource['DocJointAbsenceRessource'] = 120)] =
        'DocJointAbsenceRessource';
      EGenreRessource[(EGenreRessource['RetardInternat'] = 121)] =
        'RetardInternat';
    })(EGenreRessource || (exports.EGenreRessource = EGenreRessource = {}));
    const ObjetTraduction_1 = require('ObjetTraduction');
    const UtilitaireUrl_1 = require('UtilitaireUrl');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const TypeGenreObservationVS_1 = require('TypeGenreObservationVS');
    const TypeGenrePunition_1 = require('TypeGenrePunition');
    const EGenreRessourceUtil = {
      correspondAuGenreUtilisateurEspaceCourant(aGenre) {
        switch (GApplication.getEtatUtilisateur().GenreEspace) {
          case Enumere_Espace_1.EGenreEspace.Academie:
            return aGenre === EGenreRessource.InspecteurPedagogique;
          case Enumere_Espace_1.EGenreEspace.Eleve:
          case Enumere_Espace_1.EGenreEspace.Mobile_Eleve:
          case Enumere_Espace_1.EGenreEspace.PrimEleve:
          case Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve:
            return aGenre === EGenreRessource.Eleve;
          case Enumere_Espace_1.EGenreEspace.Entreprise:
          case Enumere_Espace_1.EGenreEspace.Mobile_Entreprise:
            return aGenre === EGenreRessource.MaitreDeStage;
          case Enumere_Espace_1.EGenreEspace.Etablissement:
            return aGenre === EGenreRessource.Personnel;
          case Enumere_Espace_1.EGenreEspace.Parent:
          case Enumere_Espace_1.EGenreEspace.Mobile_Parent:
          case Enumere_Espace_1.EGenreEspace.PrimParent:
          case Enumere_Espace_1.EGenreEspace.Mobile_PrimParent:
            return aGenre === EGenreRessource.Responsable;
          case Enumere_Espace_1.EGenreEspace.Tuteur:
          case Enumere_Espace_1.EGenreEspace.Mobile_Tuteur:
          case Enumere_Espace_1.EGenreEspace.Accompagnant:
          case Enumere_Espace_1.EGenreEspace.Mobile_Accompagnant:
          case Enumere_Espace_1.EGenreEspace.PrimAccompagnant:
          case Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant:
          case Enumere_Espace_1.EGenreEspace.PrimPeriscolaire:
          case Enumere_Espace_1.EGenreEspace.Mobile_PrimPeriscolaire:
          case Enumere_Espace_1.EGenreEspace.PrimMairie:
          case Enumere_Espace_1.EGenreEspace.Mobile_PrimMairie:
            return aGenre === EGenreRessource.Personnel;
          case Enumere_Espace_1.EGenreEspace.Professeur:
          case Enumere_Espace_1.EGenreEspace.Mobile_Professeur:
          case Enumere_Espace_1.EGenreEspace.PrimProfesseur:
          case Enumere_Espace_1.EGenreEspace.Mobile_PrimProfesseur:
            return aGenre === EGenreRessource.Enseignant;
          case Enumere_Espace_1.EGenreEspace.PrimDirection:
          case Enumere_Espace_1.EGenreEspace.Mobile_PrimDirection:
          case Enumere_Espace_1.EGenreEspace.Administrateur:
          case Enumere_Espace_1.EGenreEspace.Mobile_Administrateur:
            return aGenre === EGenreRessource.Personnel;
          default:
            return false;
        }
      },
      getGenrePereCompetence(aGenre, aGenrePourEvaluation) {
        switch (aGenre) {
          case EGenreRessource.ElementPilier:
            return null;
          case EGenreRessource.Competence:
            return EGenreRessource.ElementPilier;
          case EGenreRessource.SousItem:
            return EGenreRessource.Competence;
          case EGenreRessource.Evaluation:
            return aGenrePourEvaluation;
        }
      },
      getNomImageAbsence(aGenreRessource, aObjet = {}) {
        switch (aGenreRessource) {
          case EGenreRessource.ObservationProfesseurEleve:
            switch (aObjet.genreObservation) {
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_DefautCarnet:
                return 'Color_RecapVS_Lue icon_Defaut_de_carnet';
              case TypeGenreObservationVS_1.TypeGenreObservationVS.OVS_Autres:
                if (aObjet.estLue === false) {
                  return 'Color_RecapVS_NonLue icon_asterisk';
                }
                return 'Color_RecapVS_Lue icon_asterisk';
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_ObservationParent:
                if (aObjet.estLue === false) {
                  return 'Color_RecapVS_NonLue icon_observation';
                }
                return 'Color_RecapVS_Lue icon_observation';
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_Encouragement:
                if (aObjet.estLue === false) {
                  return 'Color_RecapVS_NonLue icon_smile';
                }
                return 'Color_RecapVS_Lue icon_smile';
              default:
                return '';
            }
          case EGenreRessource.Absence:
            if (
              aObjet.estUneCreationParent === true ||
              (aObjet.confirmee === true && aObjet.justifie === true)
            ) {
              if (aObjet.refusee === true) {
                return 'Color_RecapVS_NonLue iconVSDetail icon_exclamation';
              } else if (aObjet.justifie === true) {
                return 'Color_RecapVS_Lue iconVSDetail icon_absences';
              } else {
                return 'Color_RecapVS_Lue iconVSDetail icon_absences_prevue';
              }
            } else if (aObjet.justifie === false) {
              return 'Color_RecapVS_NonLue icon_absences';
            }
            return 'Color_RecapVS_Lue icon_absences';
          case EGenreRessource.AbsenceRepas:
            return 'Color_RecapVS_Lue icon_food';
          case EGenreRessource.AbsenceInternat:
            return 'Color_RecapVS_Lue icon_internat';
          case EGenreRessource.Retard:
            if (aObjet.justifie === false) {
              return 'Color_RecapVS_NonLue icon_retard';
            }
            return 'Color_RecapVS_Lue icon_retard';
          case EGenreRessource.RetardInternat:
            return 'Color_RecapVS_Lue icon_internat mix-icon_time';
          case EGenreRessource.Infirmerie:
            return 'Color_RecapVS_Lue icon_f0fe';
          case EGenreRessource.Incident:
            return 'Color_RecapVS_Lue icon_bolt';
          case EGenreRessource.Exclusion:
            return 'Color_RecapVS_Lue icon_punition_exclusion';
          case EGenreRessource.Punition:
            if (aObjet.estProgrammation) {
              return 'Color_RecapVS_Lue icon_recap_vs_programmation';
            }
            switch (aObjet.genreNature) {
              case TypeGenrePunition_1.TypeGenrePunition.GP_ExclusionCours:
                return 'Color_RecapVS_Lue icon_punition_exclusion';
              case TypeGenrePunition_1.TypeGenrePunition.GP_Retenues:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Devoir:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Autre:
                return 'Color_RecapVS_Lue icon_punition';
              default:
                return 'Color_RecapVS_Lue icon_punition';
            }
          case EGenreRessource.Sanction:
            if (aObjet.avecSursis === true) {
              return 'Color_RecapVS_Lue icon_legal';
            }
            return 'Color_RecapVS_Lue icon_legal';
          case EGenreRessource.MesureConservatoire:
            return 'Color_RecapVS_Lue icon_mesure_conservatoire';
          case EGenreRessource.Commission:
            return 'Color_RecapVS_Lue icon_mode_conseil_classe';
          case EGenreRessource.Dispense:
            return 'Color_RecapVS_Lue icon_dispense';
        }
        return '';
      },
      getIconAbsence(aGenreRessource, aObjet) {
        switch (aGenreRessource) {
          case EGenreRessource.Observation:
          case EGenreRessource.ObservationProfesseurEleve:
            switch (aObjet.genreObservation) {
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_DefautCarnet:
                return 'icon_Defaut_de_carnet';
              case TypeGenreObservationVS_1.TypeGenreObservationVS.OVS_Autres:
                return 'icon_asterisk';
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_ObservationParent:
                return 'icon_observation';
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_Encouragement:
                return 'icon_smile';
              default:
                return '';
            }
          case EGenreRessource.Absence:
            return 'icon_absences';
          case EGenreRessource.AbsenceRepas:
          case EGenreRessource.RepasAPreparer:
            return 'icon_food';
          case EGenreRessource.AbsenceInternat:
            return 'icon_internat';
          case EGenreRessource.Retard:
            return 'icon_retard';
          case EGenreRessource.Infirmerie:
            return 'icon_medkit';
          case EGenreRessource.Dispense:
            return 'icon_dispense';
          case EGenreRessource.Incident:
            return 'icon_bolt';
          case EGenreRessource.Exclusion:
            return 'icon_punition_exclusion';
          case EGenreRessource.Punition:
            switch (aObjet.genreNature) {
              case TypeGenrePunition_1.TypeGenrePunition.GP_ExclusionCours:
                return 'icon_punition_exclusion';
              case TypeGenrePunition_1.TypeGenrePunition.GP_Retenues:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Devoir:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Autre:
                return 'icon_punition';
              default:
                return 'icon_punition';
            }
          case EGenreRessource.Sanction:
            return 'icon_legal';
          case EGenreRessource.MesureConservatoire:
            return 'icon_mesure_conservatoire';
        }
        return '';
      },
      getPositionAbsence(aGenreRessource, aObjet = { genreObservation: null }) {
        let lResult = 0;
        switch (aGenreRessource) {
          case EGenreRessource.ObservationProfesseurEleve:
            switch (aObjet.genreObservation) {
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_ObservationParent:
                lResult = 0;
                break;
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_Encouragement:
                lResult = 1;
                break;
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_DefautCarnet:
                lResult = 2;
                break;
              case TypeGenreObservationVS_1.TypeGenreObservationVS.OVS_Autres:
                lResult = 60;
                break;
              default:
                lResult = 60;
                break;
            }
            break;
          case EGenreRessource.Absence:
            lResult = 10;
            break;
          case EGenreRessource.AbsenceRepas:
            lResult = 12;
            break;
          case EGenreRessource.AbsenceInternat:
            lResult = 13;
            break;
          case EGenreRessource.Retard:
            lResult = 21;
            break;
          case EGenreRessource.Dispense:
            lResult = 22;
            break;
          case EGenreRessource.Infirmerie:
            lResult = 20;
            break;
          case EGenreRessource.Incident:
            lResult = 25;
            break;
          case EGenreRessource.Exclusion:
            lResult = 30;
            break;
          case EGenreRessource.Punition:
            lResult = 30;
            break;
          case EGenreRessource.MesureConservatoire:
            lResult = 40;
            break;
          case EGenreRessource.Sanction:
            lResult = 50;
            break;
          case EGenreRessource.Commission:
            lResult = 55;
            break;
          default:
            lResult = 9999;
            break;
        }
        return lResult;
      },
      getTitreFenetreSelectionRessource(aGenre, aSingulier = false) {
        switch (aGenre) {
          case EGenreRessource.Eleve:
            return aSingulier
              ? 'Sélectionner un élève'
              : 'Sélectionner des élèves';
          case EGenreRessource.Enseignant:
            return aSingulier
              ? 'Sélectionner un professeur'
              : 'Sélectionner des professeurs';
          case EGenreRessource.Responsable:
            return aSingulier
              ? 'Sélectionner un responsable'
              : 'Sélectionner des responsables';
          case EGenreRessource.Personnel:
            return aSingulier
              ? 'Sélectionner un personnel'
              : 'Sélectionner des personnels';
          case EGenreRessource.MaitreDeStage:
            return aSingulier
              ? 'Sélectionner un maître de stage'
              : 'Sélectionner des maîtres de stage';
          case EGenreRessource.InspecteurPedagogique:
            return aSingulier
              ? 'Sélectionner un inspecteur pédagogique'
              : 'Sélectionner des inspecteurs pédagogiques';
          case EGenreRessource.Periode:
            return aSingulier
              ? 'Sélectionner une période'
              : 'Sélectionner des périodes';
          case EGenreRessource.Classe:
            return aSingulier
              ? 'Sélectionner une classe'
              : 'Sélectionner des classes';
        }
        return '';
      },
    };
    exports.EGenreRessourceUtil = EGenreRessourceUtil;
    UtilitaireUrl_1.UtilitaireUrl.genreRessourceDefault =
      EGenreRessource.DocumentJoint;
  },
  fn: 'enumere_ressource.js',
});