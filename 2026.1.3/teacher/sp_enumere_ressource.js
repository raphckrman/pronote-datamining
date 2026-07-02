IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeHttpRessourceUtil = exports.TypeHttpRessource = void 0;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    const IconeSvgDefaut_de_carnet_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDefaut_de_carnet');
    const IconeSvgAsterisk_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAsterisk');
    const IconeSvgObservation_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgObservation');
    const IconeSvgSmile_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgSmile');
    const IconeSvgAbsences_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAbsences');
    const IconeSvgFood_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFood');
    const IconeSvgInternat_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgInternat');
    const IconeSvgRetard_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgRetard');
    const IconeSvgTime_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTime');
    const IconeSvgF0fe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgF0fe');
    const IconeSvgBolt_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgBolt');
    const IconeSvgPunition_exclusion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPunition_exclusion');
    const IconeSvgRecap_vs_programmation_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgRecap_vs_programmation');
    const IconeSvgPunition_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPunition');
    const IconeSvgLegal_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgLegal');
    const IconeSvgMesure_conservatoire_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgMesure_conservatoire');
    const IconeSvgMode_conseil_classe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgMode_conseil_classe');
    const IconeSvgDispense_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDispense');
    var TypeHttpRessource;
    (function (TypeHttpRessource) {
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Aucune'] = 0)] =
        'HttpRessource_Aucune';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Classe'] = 1)] =
        'HttpRessource_Classe';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Groupe'] = 2)] =
        'HttpRessource_Groupe';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Enseignant'] = 3)] =
        'HttpRessource_Enseignant';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Eleve'] = 4)] =
        'HttpRessource_Eleve';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Responsable'] = 5)] =
        'HttpRessource_Responsable';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Niveau'] = 6)] =
        'HttpRessource_Niveau';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Orientation'] = 7)] =
        'HttpRessource_Orientation';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Specialite'] = 8)] =
        'HttpRessource_Specialite';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_OptionSpecialite'] = 9)
      ] = 'HttpRessource_OptionSpecialite';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_Etablissement'] = 10)
      ] = 'HttpRessource_Etablissement';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Periode'] = 11)] =
        'HttpRessource_Periode';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Service'] = 12)] =
        'HttpRessource_Service';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Absence'] = 13)] =
        'HttpRessource_Absence';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Retard'] = 14)] =
        'HttpRessource_Retard';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Exclusion'] = 15)] =
        'HttpRessource_Exclusion';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Matiere'] = 16)] =
        'HttpRessource_Matiere';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Salle'] = 17)] =
        'HttpRessource_Salle';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_CoEnseignant'] = 18)
      ] = 'HttpRessource_CoEnseignant';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Suivis'] = 19)] =
        'HttpRessource_Suivis';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Cours'] = 20)] =
        'HttpRessource_Cours';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Infirmerie'] = 21)] =
        'HttpRessource_Infirmerie';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_AbsenceRepas'] = 22)
      ] = 'HttpRessource_AbsenceRepas';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_PilierDeCompetence'] = 23)
      ] = 'HttpRessource_PilierDeCompetence';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ElementPilier'] = 24)
      ] = 'HttpRessource_ElementPilier';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Competence'] = 25)] =
        'HttpRessource_Competence';
      TypeHttpRessource[
        (TypeHttpRessource['_HttpRessource_DisciplineBrevet'] = 26)
      ] = '_HttpRessource_DisciplineBrevet';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Palier'] = 27)] =
        'HttpRessource_Palier';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_SousItem'] = 28)] =
        'HttpRessource_SousItem';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Evaluation'] = 29)] =
        'HttpRessource_Evaluation';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Stage'] = 30)] =
        'HttpRessource_Stage';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_SousMatiere'] = 31)] =
        'HttpRessource_SousMatiere';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_MaitreDeStage'] = 32)
      ] = 'HttpRessource_MaitreDeStage';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_InspecteurPedagogique'] = 33)
      ] = 'HttpRessource_InspecteurPedagogique';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Personnel'] = 34)] =
        'HttpRessource_Personnel';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_EvaluationHistorique'] = 35)
      ] = 'HttpRessource_EvaluationHistorique';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DossierProgression'] = 36)
      ] = 'HttpRessource_DossierProgression';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ContenuDeCours'] = 37)
      ] = 'HttpRessource_ContenuDeCours';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_TravailAFaire'] = 38)
      ] = 'HttpRessource_TravailAFaire';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Progression'] = 39)] =
        'HttpRessource_Progression';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Dispense'] = 40)] =
        'HttpRessource_Dispense';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Punition'] = 41)] =
        'HttpRessource_Punition';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Sanction'] = 42)] =
        'HttpRessource_Sanction';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_Communication'] = 43)
      ] = 'HttpRessource_Communication';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_AbsenceInternat'] = 44)
      ] = 'HttpRessource_AbsenceInternat';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Observation'] = 45)] =
        'HttpRessource_Observation';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ObservationIndividuEleve'] = 46)
      ] = 'HttpRessource_ObservationIndividuEleve';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ConvocationVS'] = 47)
      ] = 'HttpRessource_ConvocationVS';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DocumentJoint'] = 48)
      ] = 'HttpRessource_DocumentJoint';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_InternetCategorie'] = 49)
      ] = 'HttpRessource_InternetCategorie';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DocJointEtablissement'] = 50)
      ] = 'HttpRessource_DocJointEtablissement';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Option'] = 51)] =
        'HttpRessource_Option';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ProgrammationPunition'] = 52)
      ] = 'HttpRessource_ProgrammationPunition';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ReportPunition'] = 53)
      ] = 'HttpRessource_ReportPunition';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DisciplineLivretScolaire'] = 54)
      ] = 'HttpRessource_DisciplineLivretScolaire';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_QCM'] = 55)] =
        'HttpRessource_QCM';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ExecutionQCM'] = 56)
      ] = 'HttpRessource_ExecutionQCM';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_PartieDeClasse'] = 57)
      ] = 'HttpRessource_PartieDeClasse';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DocJointEleve'] = 58)
      ] = 'HttpRessource_DocJointEleve';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Devoir'] = 59)] =
        'HttpRessource_Devoir';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_InternetEnumere'] = 60)
      ] = 'HttpRessource_InternetEnumere';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_AppreciationBulletinCompetence'] = 61)
      ] = 'HttpRessource_AppreciationBulletinCompetence';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Entreprise'] = 62)] =
        'HttpRessource_Entreprise';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DomaineProfessionnel'] = 63)
      ] = 'HttpRessource_DomaineProfessionnel';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_OffreDeStage'] = 64)
      ] = 'HttpRessource_OffreDeStage';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_SujetDeStage'] = 65)
      ] = 'HttpRessource_SujetDeStage';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DocumentCasier'] = 66)
      ] = 'HttpRessource_DocumentCasier';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Message'] = 67)] =
        'HttpRessource_Message';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_PossessionMessage'] = 68)
      ] = 'HttpRessource_PossessionMessage';
      TypeHttpRessource[
        (TypeHttpRessource[
          'HttpRessource_RelationMessageDocJointEtablissement'
        ] = 69)
      ] = 'HttpRessource_RelationMessageDocJointEtablissement';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Engagement'] = 70)] =
        'HttpRessource_Engagement';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_MesureConservatoire'] = 71)
      ] = 'HttpRessource_MesureConservatoire';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_SousCategorieObjetDossier'] = 72)
      ] = 'HttpRessource_SousCategorieObjetDossier';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Incident'] = 73)] =
        'HttpRessource_Incident';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ProtagonisteIncident'] = 74)
      ] = 'HttpRessource_ProtagonisteIncident';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_RelationIncidentFichierExterne'] = 75)
      ] = 'HttpRessource_RelationIncidentFichierExterne';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_RegimeEleve'] = 76)] =
        'HttpRessource_RegimeEleve';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_RepasAPreparer'] = 77)
      ] = 'HttpRessource_RepasAPreparer';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_SessionDeStage'] = 78)
      ] = 'HttpRessource_SessionDeStage';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Materiel'] = 79)] =
        'HttpRessource_Materiel';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Bourse'] = 80)] =
        'HttpRessource_Bourse';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_RelationTravailAFaireEleve'] = 81)
      ] = 'HttpRessource_RelationTravailAFaireEleve';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_LieuDossier'] = 82)] =
        'HttpRessource_LieuDossier';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ElementProgramme'] = 83)
      ] = 'HttpRessource_ElementProgramme';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ChapitreEltPgm'] = 84)
      ] = 'HttpRessource_ChapitreEltPgm';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_EltPgmTravailleCDT'] = 85)
      ] = 'HttpRessource_EltPgmTravailleCDT';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_Appreciation'] = 86)
      ] = 'HttpRessource_Appreciation';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ExecutionDevoirKiosque'] = 87)
      ] = 'HttpRessource_ExecutionDevoirKiosque';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_PanierRessourceKiosque'] = 88)
      ] = 'HttpRessource_PanierRessourceKiosque';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_RessourceNumeriqueKiosque'] = 89)
      ] = 'HttpRessource_RessourceNumeriqueKiosque';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_MetaMatiere'] = 90)] =
        'HttpRessource_MetaMatiere';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_EvaluationSujet'] = 91)
      ] = 'HttpRessource_EvaluationSujet';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_EvaluationCorrige'] = 92)
      ] = 'HttpRessource_EvaluationCorrige';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_LibelleCours'] = 93)
      ] = 'HttpRessource_LibelleCours';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Site'] = 94)] =
        'HttpRessource_Site';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_QuestionQCM'] = 95)] =
        'HttpRessource_QuestionQCM';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_RelationElevePilierDeCompetence'] =
          96)
      ] = 'HttpRessource_RelationElevePilierDeCompetence';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_QuestionCopieQCM'] = 97)
      ] = 'HttpRessource_QuestionCopieQCM';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Coordonnees'] = 98)] =
        'HttpRessource_Coordonnees';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ResponsablePostulant'] = 99)
      ] = 'HttpRessource_ResponsablePostulant';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ExecutionQCMEleve'] = 100)
      ] = 'HttpRessource_ExecutionQCMEleve';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DocJointInscription'] = 101)
      ] = 'HttpRessource_DocJointInscription';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_CategorieDossier'] = 102)
      ] = 'HttpRessource_CategorieDossier';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_MEFGEP'] = 103)] =
        'HttpRessource_MEFGEP';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_AutreOrientation'] = 104)
      ] = 'HttpRessource_AutreOrientation';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Commission'] = 105)] =
        'HttpRessource_Commission';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_ReponseEducative'] = 106)
      ] = 'HttpRessource_ReponseEducative';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_SuiviReponseEducative'] = 107)
      ] = 'HttpRessource_SuiviReponseEducative';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_NatureDocumentEleve'] = 108)
      ] = 'HttpRessource_NatureDocumentEleve';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_RelationCommissionFichierExterne'] =
          109)
      ] = 'HttpRessource_RelationCommissionFichierExterne';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Signataire'] = 110)] =
        'HttpRessource_Signataire';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DocumentSignature'] = 111)
      ] = 'HttpRessource_DocumentSignature';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_PersonnelHistorique'] = 112)
      ] = 'HttpRessource_PersonnelHistorique';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_EnseignantHistorique'] = 113)
      ] = 'HttpRessource_EnseignantHistorique';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DemandeDispense'] = 114)
      ] = 'HttpRessource_DemandeDispense';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DocJointPriseDeRDV'] = 115)
      ] = 'HttpRessource_DocJointPriseDeRDV';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_Mediatheque'] = 116)
      ] = 'HttpRessource_Mediatheque';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DossierMediatheque'] = 117)
      ] = 'HttpRessource_DossierMediatheque';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Dortoir'] = 118)] =
        'HttpRessource_Dortoir';
      TypeHttpRessource[(TypeHttpRessource['HttpRessource_Chambre'] = 119)] =
        'HttpRessource_Chambre';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_DocJointAbsenceRessource'] = 120)
      ] = 'HttpRessource_DocJointAbsenceRessource';
      TypeHttpRessource[
        (TypeHttpRessource['HttpRessource_RetardInternat'] = 121)
      ] = 'HttpRessource_RetardInternat';
    })(
      TypeHttpRessource || (exports.TypeHttpRessource = TypeHttpRessource = {}),
    );
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const TypeGenreObservationVS_1 = require('@scolys/produit/script/enumere/TypeGenreObservationVS');
    const TypeGenrePunition_1 = require('@scolys/espace/script/enumere/TypeGenrePunition');
    const IconeSvgMedkit_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgMedkit');
    const TypeHttpRessourceUtil = {
      correspondAuGenreUtilisateurEspaceCourant(aGenre) {
        switch (GApplication.getEtatUtilisateur().GenreEspace) {
          case Enumere_Espace_1.TypeGenreEspace.Espace_Academie:
            return (
              aGenre === TypeHttpRessource.HttpRessource_InspecteurPedagogique
            );
          case Enumere_Espace_1.TypeGenreEspace.Espace_Eleve:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_Eleve:
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_PrimEleve:
            return aGenre === TypeHttpRessource.HttpRessource_Eleve;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Entreprise:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_Entreprise:
            return aGenre === TypeHttpRessource.HttpRessource_MaitreDeStage;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement:
            return aGenre === TypeHttpRessource.HttpRessource_Personnel;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Parent:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_Parent:
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent:
            return aGenre === TypeHttpRessource.HttpRessource_Responsable;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_Tuteur:
          case Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_Accompagnant:
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_PrimAccompagnant:
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimPeriscolaire:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_PrimPeriscolaire:
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimMairie:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_PrimMairie:
            return aGenre === TypeHttpRessource.HttpRessource_Personnel;
          case Enumere_Espace_1.TypeGenreEspace.Espace_Professeur:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_Professeur:
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_PrimProfesseur:
            return aGenre === TypeHttpRessource.HttpRessource_Enseignant;
          case Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_PrimDirection:
          case Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur:
          case Enumere_Espace_1.TypeGenreEspace.Mobile_Administrateur:
            return aGenre === TypeHttpRessource.HttpRessource_Personnel;
          default:
            return false;
        }
      },
      getGenrePereCompetence(aGenre, aGenrePourEvaluation) {
        switch (aGenre) {
          case TypeHttpRessource.HttpRessource_ElementPilier:
            return null;
          case TypeHttpRessource.HttpRessource_Competence:
            return TypeHttpRessource.HttpRessource_ElementPilier;
          case TypeHttpRessource.HttpRessource_SousItem:
            return TypeHttpRessource.HttpRessource_Competence;
          case TypeHttpRessource.HttpRessource_Evaluation:
            return aGenrePourEvaluation;
        }
      },
      getNomImageAbsence(aGenreRessource, aObjet = {}) {
        switch (aGenreRessource) {
          case TypeHttpRessource.HttpRessource_ObservationIndividuEleve:
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
          case TypeHttpRessource.HttpRessource_Absence:
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
          case TypeHttpRessource.HttpRessource_AbsenceRepas:
            return 'Color_RecapVS_Lue icon_food';
          case TypeHttpRessource.HttpRessource_AbsenceInternat:
            return 'Color_RecapVS_Lue icon_internat';
          case TypeHttpRessource.HttpRessource_Retard:
            if (aObjet.justifie === false) {
              return 'Color_RecapVS_NonLue icon_retard';
            }
            return 'Color_RecapVS_Lue icon_retard';
          case TypeHttpRessource.HttpRessource_RetardInternat:
            return 'Color_RecapVS_Lue icon_internat mix-icon_time';
          case TypeHttpRessource.HttpRessource_Infirmerie:
            return 'Color_RecapVS_Lue icon_f0fe';
          case TypeHttpRessource.HttpRessource_Incident:
            return 'Color_RecapVS_Lue icon_bolt';
          case TypeHttpRessource.HttpRessource_Exclusion:
            return 'Color_RecapVS_Lue icon_punition_exclusion';
          case TypeHttpRessource.HttpRessource_Punition:
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
          case TypeHttpRessource.HttpRessource_Sanction:
            if (aObjet.avecSursis === true) {
              return 'Color_RecapVS_Lue icon_legal';
            }
            return 'Color_RecapVS_Lue icon_legal';
          case TypeHttpRessource.HttpRessource_MesureConservatoire:
            return 'Color_RecapVS_Lue icon_mesure_conservatoire';
          case TypeHttpRessource.HttpRessource_Commission:
            return 'Color_RecapVS_Lue icon_mode_conseil_classe';
          case TypeHttpRessource.HttpRessource_Dispense:
            return 'Color_RecapVS_Lue icon_dispense';
        }
        return '';
      },
      getNomIconeSvgAbsence(aGenreRessource, aObjet, alabel) {
        switch (aGenreRessource) {
          case TypeHttpRessource.HttpRessource_ObservationIndividuEleve:
            switch (aObjet.genreObservation) {
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_DefautCarnet:
                return IE.jsx.str(
                  IconeSvgDefaut_de_carnet_1.IconeSvgDefaut_de_carnet,
                  { class: 'Color_RecapVS_Lue', 'aria-label': alabel },
                );
              case TypeGenreObservationVS_1.TypeGenreObservationVS.OVS_Autres:
                if (aObjet.estLue === false) {
                  return IE.jsx.str(IconeSvgAsterisk_1.IconeSvgAsterisk, {
                    class: 'Color_RecapVS_NonLue svg-medium',
                    'aria-label': alabel,
                  });
                }
                return IE.jsx.str(IconeSvgAsterisk_1.IconeSvgAsterisk, {
                  class: 'Color_RecapVS_Lue svg-medium',
                  'aria-label': alabel,
                });
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_ObservationParent:
                if (aObjet.estLue === false) {
                  return IE.jsx.str(IconeSvgObservation_1.IconeSvgObservation, {
                    class: 'Color_RecapVS_NonLue svg-medium svg-medium',
                    'aria-label': alabel,
                  });
                }
                return IE.jsx.str(IconeSvgObservation_1.IconeSvgObservation, {
                  class: 'Color_RecapVS_Lue svg-medium',
                });
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_Encouragement:
                if (aObjet.estLue === false) {
                  return IE.jsx.str(IconeSvgSmile_1.IconeSvgSmile, {
                    class: 'Color_RecapVS_NonLue svg-medium',
                    'aria-label': alabel,
                  });
                }
                return IE.jsx.str(IconeSvgSmile_1.IconeSvgSmile, {
                  class: 'Color_RecapVS_Lue svg-medium',
                  'aria-label': alabel,
                });
              default:
                return '';
            }
          case TypeHttpRessource.HttpRessource_Absence:
            if (aObjet.actionParentDemande) {
              return IE.jsx.str(IconeSvgAbsences_1.IconeSvgAbsences, {
                class: 'Color_RecapVS_NonLue svg-medium',
              });
            }
            if (aObjet.class) {
              return IE.jsx.str(IconeSvgAbsences_1.IconeSvgAbsences, {
                class: aObjet.class,
              });
            }
            return IE.jsx.str(IconeSvgAbsences_1.IconeSvgAbsences, {
              class: 'Color_RecapVS_Lue svg-medium',
            });
          case TypeHttpRessource.HttpRessource_AbsenceRepas:
            return IE.jsx.str(IconeSvgFood_1.IconeSvgFood, {
              class: 'Color_RecapVS_Lue svg-medium',
            });
          case TypeHttpRessource.HttpRessource_AbsenceInternat:
            return IE.jsx.str(IconeSvgInternat_1.IconeSvgInternat, {
              class: 'Color_RecapVS_Lue svg-medium',
            });
          case TypeHttpRessource.HttpRessource_Retard:
            if (aObjet.actionParentDemande) {
              return IE.jsx.str(IconeSvgRetard_1.IconeSvgRetard, {
                class: 'Color_RecapVS_NonLue svg-medium',
              });
            }
            if (aObjet.class) {
              return IE.jsx.str(IconeSvgRetard_1.IconeSvgRetard, {
                class: aObjet.class,
              });
            }
            return IE.jsx.str(IconeSvgRetard_1.IconeSvgRetard, {
              class: 'Color_RecapVS_Lue svg-medium',
            });
          case TypeHttpRessource.HttpRessource_RetardInternat:
            return IE.jsx.str(
              IconeSvg_1.IconeSvg,
              { class: 'Color_RecapVS_Lue svg-medium' },
              IE.jsx.str(IconeSvgInternat_1.IconeSvgInternat, null),
              IE.jsx.str(IconeSvgTime_1.IconeSvgTime, {
                class: 'icone-badge badge-tr',
              }),
            );
          case TypeHttpRessource.HttpRessource_Infirmerie:
            return IE.jsx.str(IconeSvgF0fe_1.IconeSvgF0fe, {
              class: 'Color_RecapVS_Lue svg-medium',
            });
          case TypeHttpRessource.HttpRessource_Incident:
            return IE.jsx.str(IconeSvgBolt_1.IconeSvgBolt, {
              class: 'Color_RecapVS_Lue svg-medium',
            });
          case TypeHttpRessource.HttpRessource_Exclusion:
            return IE.jsx.str(
              IconeSvgPunition_exclusion_1.IconeSvgPunition_exclusion,
              { class: 'Color_RecapVS_Lue svg-medium' },
            );
          case TypeHttpRessource.HttpRessource_Punition:
            if (aObjet.estProgrammation) {
              return IE.jsx.str(
                IconeSvgRecap_vs_programmation_1.IconeSvgRecap_vs_programmation,
                { class: 'Color_RecapVS_Lue svg-medium' },
              );
            }
            switch (aObjet.genreNature) {
              case TypeGenrePunition_1.TypeGenrePunition.GP_ExclusionCours:
                return IE.jsx.str(
                  IconeSvgPunition_exclusion_1.IconeSvgPunition_exclusion,
                  { class: 'Color_RecapVS_Lue svg-medium' },
                );
              case TypeGenrePunition_1.TypeGenrePunition.GP_Retenues:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Devoir:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Autre:
                return IE.jsx.str(IconeSvgPunition_1.IconeSvgPunition, {
                  class: 'Color_RecapVS_Lue svg-medium',
                });
              default:
                return IE.jsx.str(IconeSvgPunition_1.IconeSvgPunition, {
                  class: 'Color_RecapVS_Lue svg-medium',
                });
            }
          case TypeHttpRessource.HttpRessource_Sanction:
            if (aObjet.avecSursis === true) {
              return IE.jsx.str(IconeSvgLegal_1.IconeSvgLegal, {
                class: 'Color_RecapVS_Lue svg-medium',
              });
            }
            return IE.jsx.str(IconeSvgLegal_1.IconeSvgLegal, {
              class: 'Color_RecapVS_Lue svg-medium',
            });
          case TypeHttpRessource.HttpRessource_MesureConservatoire:
            return IE.jsx.str(
              IconeSvgMesure_conservatoire_1.IconeSvgMesure_conservatoire,
              { class: 'Color_RecapVS_Lue svg-medium' },
            );
          case TypeHttpRessource.HttpRessource_Commission:
            return IE.jsx.str(
              IconeSvgMode_conseil_classe_1.IconeSvgMode_conseil_classe,
              { class: 'Color_RecapVS_Lue svg-medium' },
            );
          case TypeHttpRessource.HttpRessource_Dispense:
            return IE.jsx.str(IconeSvgDispense_1.IconeSvgDispense, {
              class: 'Color_RecapVS_Lue svg-medium',
            });
        }
        return '';
      },
      getIconAbsence(aGenreRessource, aObjet) {
        switch (aGenreRessource) {
          case TypeHttpRessource.HttpRessource_Observation:
          case TypeHttpRessource.HttpRessource_ObservationIndividuEleve:
            switch (
              aObjet === null || aObjet === void 0
                ? void 0
                : aObjet.genreObservation
            ) {
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
          case TypeHttpRessource.HttpRessource_Absence:
            return 'icon_absences';
          case TypeHttpRessource.HttpRessource_AbsenceRepas:
          case TypeHttpRessource.HttpRessource_RepasAPreparer:
            return 'icon_food';
          case TypeHttpRessource.HttpRessource_AbsenceInternat:
            return 'icon_internat';
          case TypeHttpRessource.HttpRessource_Retard:
            return 'icon_retard';
          case TypeHttpRessource.HttpRessource_Infirmerie:
            return 'icon_medkit';
          case TypeHttpRessource.HttpRessource_Dispense:
            return 'icon_dispense';
          case TypeHttpRessource.HttpRessource_Incident:
            return 'icon_bolt';
          case TypeHttpRessource.HttpRessource_Exclusion:
            return 'icon_punition_exclusion';
          case TypeHttpRessource.HttpRessource_Punition:
            switch (
              aObjet === null || aObjet === void 0 ? void 0 : aObjet.genreNature
            ) {
              case TypeGenrePunition_1.TypeGenrePunition.GP_ExclusionCours:
                return 'icon_punition_exclusion';
              case TypeGenrePunition_1.TypeGenrePunition.GP_Retenues:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Devoir:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Autre:
                return 'icon_punition';
              default:
                return 'icon_punition';
            }
          case TypeHttpRessource.HttpRessource_Sanction:
            return 'icon_legal';
          case TypeHttpRessource.HttpRessource_MesureConservatoire:
            return 'icon_mesure_conservatoire';
        }
        return '';
      },
      getIconSvgAbsence(aGenreRessource, aObjet) {
        switch (aGenreRessource) {
          case TypeHttpRessource.HttpRessource_Observation:
          case TypeHttpRessource.HttpRessource_ObservationIndividuEleve:
            switch (
              aObjet === null || aObjet === void 0
                ? void 0
                : aObjet.genreObservation
            ) {
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_DefautCarnet:
                return IE.jsx.str(
                  IconeSvgDefaut_de_carnet_1.IconeSvgDefaut_de_carnet,
                  null,
                );
              case TypeGenreObservationVS_1.TypeGenreObservationVS.OVS_Autres:
                return IE.jsx.str(IconeSvgAsterisk_1.IconeSvgAsterisk, null);
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_ObservationParent:
                return IE.jsx.str(
                  IconeSvgObservation_1.IconeSvgObservation,
                  null,
                );
              case TypeGenreObservationVS_1.TypeGenreObservationVS
                .OVS_Encouragement:
                return IE.jsx.str(IconeSvgSmile_1.IconeSvgSmile, null);
              default:
                return '';
            }
          case TypeHttpRessource.HttpRessource_Absence:
            return IE.jsx.str(IconeSvgAbsences_1.IconeSvgAbsences, null);
          case TypeHttpRessource.HttpRessource_AbsenceRepas:
          case TypeHttpRessource.HttpRessource_RepasAPreparer:
            return IE.jsx.str(IconeSvgFood_1.IconeSvgFood, null);
          case TypeHttpRessource.HttpRessource_AbsenceInternat:
            return IE.jsx.str(IconeSvgInternat_1.IconeSvgInternat, null);
          case TypeHttpRessource.HttpRessource_Retard:
            return IE.jsx.str(IconeSvgRetard_1.IconeSvgRetard, null);
          case TypeHttpRessource.HttpRessource_Infirmerie:
            return IE.jsx.str(IconeSvgMedkit_1.IconeSvgMedkit, null);
          case TypeHttpRessource.HttpRessource_Dispense:
            return IE.jsx.str(IconeSvgDispense_1.IconeSvgDispense, null);
          case TypeHttpRessource.HttpRessource_Incident:
            return IE.jsx.str(IconeSvgBolt_1.IconeSvgBolt, null);
          case TypeHttpRessource.HttpRessource_Exclusion:
            return IE.jsx.str(
              IconeSvgPunition_exclusion_1.IconeSvgPunition_exclusion,
              null,
            );
          case TypeHttpRessource.HttpRessource_Punition:
            switch (
              aObjet === null || aObjet === void 0 ? void 0 : aObjet.genreNature
            ) {
              case TypeGenrePunition_1.TypeGenrePunition.GP_ExclusionCours:
                return IE.jsx.str(
                  IconeSvgPunition_exclusion_1.IconeSvgPunition_exclusion,
                  null,
                );
              case TypeGenrePunition_1.TypeGenrePunition.GP_Retenues:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Devoir:
              case TypeGenrePunition_1.TypeGenrePunition.GP_Autre:
                return IE.jsx.str(IconeSvgPunition_1.IconeSvgPunition, null);
              default:
                return IE.jsx.str(IconeSvgPunition_1.IconeSvgPunition, null);
            }
          case TypeHttpRessource.HttpRessource_Sanction:
            return IE.jsx.str(IconeSvgLegal_1.IconeSvgLegal, null);
          case TypeHttpRessource.HttpRessource_MesureConservatoire:
            return IE.jsx.str(
              IconeSvgMesure_conservatoire_1.IconeSvgMesure_conservatoire,
              null,
            );
        }
        return '';
      },
      getPositionAbsence(aGenreRessource, aObjet = { genreObservation: null }) {
        let lResult = 0;
        switch (aGenreRessource) {
          case TypeHttpRessource.HttpRessource_ObservationIndividuEleve:
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
          case TypeHttpRessource.HttpRessource_Absence:
            lResult = 10;
            break;
          case TypeHttpRessource.HttpRessource_AbsenceRepas:
            lResult = 12;
            break;
          case TypeHttpRessource.HttpRessource_AbsenceInternat:
            lResult = 13;
            break;
          case TypeHttpRessource.HttpRessource_Retard:
            lResult = 21;
            break;
          case TypeHttpRessource.HttpRessource_Dispense:
            lResult = 22;
            break;
          case TypeHttpRessource.HttpRessource_Infirmerie:
            lResult = 20;
            break;
          case TypeHttpRessource.HttpRessource_Incident:
            lResult = 25;
            break;
          case TypeHttpRessource.HttpRessource_Exclusion:
            lResult = 30;
            break;
          case TypeHttpRessource.HttpRessource_Punition:
            lResult = 30;
            break;
          case TypeHttpRessource.HttpRessource_MesureConservatoire:
            lResult = 40;
            break;
          case TypeHttpRessource.HttpRessource_Sanction:
            lResult = 50;
            break;
          case TypeHttpRessource.HttpRessource_Commission:
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
          case TypeHttpRessource.HttpRessource_Eleve:
            return aSingulier
              ? 'Sélectionner un élève'
              : 'Sélectionner des élèves';
          case TypeHttpRessource.HttpRessource_Enseignant:
            return aSingulier
              ? 'Sélectionner un professeur'
              : 'Sélectionner des professeurs';
          case TypeHttpRessource.HttpRessource_Responsable:
            return aSingulier
              ? 'Sélectionner un responsable'
              : 'Sélectionner des responsables';
          case TypeHttpRessource.HttpRessource_Personnel:
            return aSingulier
              ? 'Sélectionner un personnel'
              : 'Sélectionner des personnels';
          case TypeHttpRessource.HttpRessource_MaitreDeStage:
            return aSingulier
              ? 'Sélectionner un maître de stage'
              : 'Sélectionner des maîtres de stage';
          case TypeHttpRessource.HttpRessource_InspecteurPedagogique:
            return aSingulier
              ? 'Sélectionner un inspecteur pédagogique'
              : 'Sélectionner des inspecteurs pédagogiques';
          case TypeHttpRessource.HttpRessource_Periode:
            return aSingulier
              ? 'Sélectionner une période'
              : 'Sélectionner des périodes';
          case TypeHttpRessource.HttpRessource_Classe:
            return aSingulier
              ? 'Sélectionner une classe'
              : 'Sélectionner des classes';
        }
        return '';
      },
      getLabelResource(aResourceType) {
        let lLabel = '';
        switch (aResourceType) {
          case TypeHttpRessource.HttpRessource_Aucune:
            lLabel =
              'Classes' +
              ' ' +
              'Groupes';
            break;
          case TypeHttpRessource.HttpRessource_Classe:
            lLabel =
              'Classes';
            break;
          case TypeHttpRessource.HttpRessource_Groupe:
            lLabel =
              'Groupes';
            break;
          case TypeHttpRessource.HttpRessource_Eleve:
            lLabel =
              'Élèves';
            break;
          case TypeHttpRessource.HttpRessource_Enseignant:
            lLabel = 'Professeurs';
            break;
          case TypeHttpRessource.HttpRessource_Responsable:
            lLabel = 'Responsables';
            break;
          case TypeHttpRessource.HttpRessource_Personnel:
            lLabel = 'Personnels';
            break;
          case TypeHttpRessource.HttpRessource_MaitreDeStage:
            lLabel = 'Maîtres de stage';
            break;
          case TypeHttpRessource.HttpRessource_InspecteurPedagogique:
            lLabel = 'Inspecteurs pédagogiques';
            break;
          default:
            break;
        }
        return lLabel;
      },
      getLabelChips(aResourceType) {
        let lLabel = '';
        switch (aResourceType) {
          case TypeHttpRessource.HttpRessource_Aucune:
            lLabel =
              'classe(s) sélectionée(s)' +
              ' ' +
              'groupe(s) seélectionné(s)';
            break;
          case TypeHttpRessource.HttpRessource_Classe:
            lLabel = 'classe(s) sélectionée(s)';
            break;
          case TypeHttpRessource.HttpRessource_Groupe:
            lLabel = 'groupe(s) seélectionné(s)';
            break;
          case TypeHttpRessource.HttpRessource_Eleve:
            lLabel = 'élève(s) sélectionné(s)';
            break;
          case TypeHttpRessource.HttpRessource_Enseignant:
            lLabel =
              'professeur(s) sélectionné(s)';
            break;
          case TypeHttpRessource.HttpRessource_Responsable:
            lLabel = 'responsable(s) sélectionné(s)';
            break;
          case TypeHttpRessource.HttpRessource_Personnel:
            lLabel = 'personnel(s) sélectionné(s)';
            break;
          case TypeHttpRessource.HttpRessource_MaitreDeStage:
            lLabel = 'maître(s) de stage sélectionné(s)';
            break;
          case TypeHttpRessource.HttpRessource_InspecteurPedagogique:
            lLabel = 'inspecteur(s) sélectionné(s)';
            break;
          default:
            break;
        }
        return lLabel;
      },
    };
    exports.TypeHttpRessourceUtil = TypeHttpRessourceUtil;
    UtilitaireUrl_1.UtilitaireUrl.genreRessourceDefault =
      TypeHttpRessource.HttpRessource_DocumentJoint;
  },
  fn: 'enumere_ressource.js',
});