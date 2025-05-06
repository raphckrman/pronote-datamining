IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreOnglet = void 0;
    var EGenreOnglet;
    (function (EGenreOnglet) {
      EGenreOnglet[(EGenreOnglet['MenuOnglets'] = -2)] = 'MenuOnglets';
      EGenreOnglet[(EGenreOnglet['GeneralAccueil'] = -1)] = 'GeneralAccueil';
      EGenreOnglet[(EGenreOnglet['GeneralRacine'] = 0)] = 'GeneralRacine';
      EGenreOnglet[(EGenreOnglet['GeneralVieEtablissement'] = 2)] =
        'GeneralVieEtablissement';
      EGenreOnglet[(EGenreOnglet['GeneralNotes'] = 3)] = 'GeneralNotes';
      EGenreOnglet[(EGenreOnglet['GeneralBulletins'] = 4)] = 'GeneralBulletins';
      EGenreOnglet[(EGenreOnglet['GeneralVieScolaire'] = 5)] =
        'GeneralVieScolaire';
      EGenreOnglet[(EGenreOnglet['GeneralCompte'] = 6)] = 'GeneralCompte';
      EGenreOnglet[(EGenreOnglet['Accueil'] = 7)] = 'Accueil';
      EGenreOnglet[(EGenreOnglet['Informations'] = 8)] = 'Informations';
      EGenreOnglet[(EGenreOnglet['Agenda'] = 9)] = 'Agenda';
      EGenreOnglet[(EGenreOnglet['Menus'] = 10)] = 'Menus';
      EGenreOnglet[(EGenreOnglet['Vacances'] = 11)] = 'Vacances';
      EGenreOnglet[(EGenreOnglet['Releve'] = 12)] = 'Releve';
      EGenreOnglet[(EGenreOnglet['Bulletins'] = 13)] = 'Bulletins';
      EGenreOnglet[(EGenreOnglet['Orientation'] = 14)] = 'Orientation';
      EGenreOnglet[(EGenreOnglet['SaisieOrientation'] = 15)] =
        'SaisieOrientation';
      EGenreOnglet[(EGenreOnglet['EmploiDuTemps'] = 16)] = 'EmploiDuTemps';
      EGenreOnglet[(EGenreOnglet['CahierDeTexte'] = 17)] = 'CahierDeTexte';
      EGenreOnglet[(EGenreOnglet['Remplacements'] = 18)] = 'Remplacements';
      EGenreOnglet[(EGenreOnglet['VieScolaire_Recapitulatif'] = 19)] =
        'VieScolaire_Recapitulatif';
      EGenreOnglet[(EGenreOnglet['Dossiers'] = 20)] = 'Dossiers';
      EGenreOnglet[(EGenreOnglet['Compte'] = 21)] = 'Compte';
      EGenreOnglet[(EGenreOnglet['CompteEleve'] = 22)] = 'CompteEleve';
      EGenreOnglet[(EGenreOnglet['SaisieNotes'] = 23)] = 'SaisieNotes';
      EGenreOnglet[(EGenreOnglet['DEV_AppelEtSuivi'] = 24)] =
        'DEV_AppelEtSuivi';
      EGenreOnglet[(EGenreOnglet['SaisieAppreciationsBulletin'] = 25)] =
        'SaisieAppreciationsBulletin';
      EGenreOnglet[(EGenreOnglet['SaisieAppreciationsBulletinGroupe'] = 26)] =
        'SaisieAppreciationsBulletinGroupe';
      EGenreOnglet[(EGenreOnglet['SaisieAppreciationsGenerales'] = 27)] =
        'SaisieAppreciationsGenerales';
      EGenreOnglet[(EGenreOnglet['SaisieCahierDeTextes'] = 28)] =
        'SaisieCahierDeTextes';
      EGenreOnglet[(EGenreOnglet['SaisieAbsences'] = 29)] = 'SaisieAbsences';
      EGenreOnglet[(EGenreOnglet['SaisieAppreciationsReleve'] = 30)] =
        'SaisieAppreciationsReleve';
      EGenreOnglet[(EGenreOnglet['SaisieAppreciationsReleve_Gpe'] = 31)] =
        'SaisieAppreciationsReleve_Gpe';
      EGenreOnglet[(EGenreOnglet['FicheBrevet'] = 34)] = 'FicheBrevet';
      EGenreOnglet[(EGenreOnglet['CompteGadget'] = 35)] = 'CompteGadget';
      EGenreOnglet[(EGenreOnglet['InfoMedicale'] = 36)] = 'InfoMedicale';
      EGenreOnglet[(EGenreOnglet['EquipePedagogique'] = 37)] =
        'EquipePedagogique';
      EGenreOnglet[(EGenreOnglet['Graphique'] = 38)] = 'Graphique';
      EGenreOnglet[(EGenreOnglet['GeneralResultats'] = 39)] =
        'GeneralResultats';
      EGenreOnglet[(EGenreOnglet['GeneralOrientations'] = 40)] =
        'GeneralOrientations';
      EGenreOnglet[(EGenreOnglet['ConseilDeClasse'] = 41)] = 'ConseilDeClasse';
      EGenreOnglet[(EGenreOnglet['SaisieAppreciationDeFinDeStage'] = 42)] =
        'SaisieAppreciationDeFinDeStage';
      EGenreOnglet[(EGenreOnglet['GeneralDansLaClasse'] = 43)] =
        'GeneralDansLaClasse';
      EGenreOnglet[(EGenreOnglet['SuiviPluriannuel'] = 44)] =
        'SuiviPluriannuel';
      EGenreOnglet[(EGenreOnglet['BilanParDomaine'] = 45)] = 'BilanParDomaine';
      EGenreOnglet[(EGenreOnglet['CahierDeTextes_Contenu'] = 47)] =
        'CahierDeTextes_Contenu';
      EGenreOnglet[(EGenreOnglet['CahierDeTextes_TravailAFaire'] = 48)] =
        'CahierDeTextes_TravailAFaire';
      EGenreOnglet[(EGenreOnglet['InfosPerso'] = 49)] = 'InfosPerso';
      EGenreOnglet[(EGenreOnglet['GeneralStage'] = 52)] = 'GeneralStage';
      EGenreOnglet[(EGenreOnglet['SaisieAppreciationsFicheBrevet'] = 53)] =
        'SaisieAppreciationsFicheBrevet';
      EGenreOnglet[(EGenreOnglet['GeneralCompetence'] = 55)] =
        'GeneralCompetence';
      EGenreOnglet[(EGenreOnglet['Evaluation'] = 56)] = 'Evaluation';
      EGenreOnglet[(EGenreOnglet['GeneralBrevet'] = 57)] = 'GeneralBrevet';
      EGenreOnglet[(EGenreOnglet['GeneralEquipePedagogique'] = 58)] =
        'GeneralEquipePedagogique';
      EGenreOnglet[(EGenreOnglet['GeneralMesClasses'] = 59)] =
        'GeneralMesClasses';
      EGenreOnglet[(EGenreOnglet['EmploiDuTempsClasse'] = 60)] =
        'EmploiDuTempsClasse';
      EGenreOnglet[(EGenreOnglet['General_CahierDeTextes'] = 61)] =
        'General_CahierDeTextes';
      EGenreOnglet[(EGenreOnglet['CahierDeTextesClasse'] = 62)] =
        'CahierDeTextesClasse';
      EGenreOnglet[(EGenreOnglet['ResultatsClasses'] = 64)] =
        'ResultatsClasses';
      EGenreOnglet[(EGenreOnglet['ListeEvaluation'] = 65)] = 'ListeEvaluation';
      EGenreOnglet[(EGenreOnglet['ListeEvaluationHistorique'] = 67)] =
        'ListeEvaluationHistorique';
      EGenreOnglet[(EGenreOnglet['Punitions'] = 68)] = 'Punitions';
      EGenreOnglet[(EGenreOnglet['Entreprise'] = 69)] = 'Entreprise';
      EGenreOnglet[(EGenreOnglet['CahierDeTexte_Progression'] = 71)] =
        'CahierDeTexte_Progression';
      EGenreOnglet[(EGenreOnglet['Dispenses'] = 72)] = 'Dispenses';
      EGenreOnglet[(EGenreOnglet['AbsencesEtRetards'] = 73)] =
        'AbsencesEtRetards';
      EGenreOnglet[(EGenreOnglet['SuivisAbsenceRetard'] = 74)] =
        'SuivisAbsenceRetard';
      EGenreOnglet[(EGenreOnglet['Affectation_Progression'] = 75)] =
        'Affectation_Progression';
      EGenreOnglet[(EGenreOnglet['RecapitulatifAbsences'] = 76)] =
        'RecapitulatifAbsences';
      EGenreOnglet[(EGenreOnglet['TrombinoscopeClasse'] = 77)] =
        'TrombinoscopeClasse';
      EGenreOnglet[(EGenreOnglet['Saisie_CarnetCorrespondance'] = 78)] =
        'Saisie_CarnetCorrespondance';
      EGenreOnglet[(EGenreOnglet['IManuels'] = 79)] = 'IManuels';
      EGenreOnglet[(EGenreOnglet['EmploiDuTempsSalle'] = 81)] =
        'EmploiDuTempsSalle';
      EGenreOnglet[(EGenreOnglet['Trombinoscope'] = 82)] = 'Trombinoscope';
      EGenreOnglet[(EGenreOnglet['LivretScolaire_Fiche'] = 83)] =
        'LivretScolaire_Fiche';
      EGenreOnglet[(EGenreOnglet['QCM'] = 84)] = 'QCM';
      EGenreOnglet[(EGenreOnglet['QCM_Saisie'] = 85)] = 'QCM_Saisie';
      EGenreOnglet[(EGenreOnglet['QCM_Bibliotheque'] = 86)] =
        'QCM_Bibliotheque';
      EGenreOnglet[(EGenreOnglet['QCM_Reponse'] = 87)] = 'QCM_Reponse';
      EGenreOnglet[(EGenreOnglet['CDT_TAF'] = 88)] = 'CDT_TAF';
      EGenreOnglet[(EGenreOnglet['CDT_Contenu'] = 89)] = 'CDT_Contenu';
      EGenreOnglet[(EGenreOnglet['Rencontre'] = 90)] = 'Rencontre';
      EGenreOnglet[(EGenreOnglet['Rencontre_Indisponibilites'] = 91)] =
        'Rencontre_Indisponibilites';
      EGenreOnglet[(EGenreOnglet['Rencontre_Desideratas'] = 92)] =
        'Rencontre_Desideratas';
      EGenreOnglet[(EGenreOnglet['CreneauxLibres'] = 93)] = 'CreneauxLibres';
      EGenreOnglet[(EGenreOnglet['General_Rencontre_Planning'] = 94)] =
        'General_Rencontre_Planning';
      EGenreOnglet[(EGenreOnglet['QCM_BibliothequeNathan'] = 96)] =
        'QCM_BibliothequeNathan';
      EGenreOnglet[(EGenreOnglet['EmploiDuTempsProfesseur'] = 97)] =
        'EmploiDuTempsProfesseur';
      EGenreOnglet[(EGenreOnglet['SaisieOffresStage'] = 98)] =
        'SaisieOffresStage';
      EGenreOnglet[(EGenreOnglet['RessourcePedagogique'] = 99)] =
        'RessourcePedagogique';
      EGenreOnglet[(EGenreOnglet['BulletinCompetences'] = 100)] =
        'BulletinCompetences';
      EGenreOnglet[(EGenreOnglet['OffresStage'] = 101)] = 'OffresStage';
      EGenreOnglet[(EGenreOnglet['Casier'] = 102)] = 'Casier';
      EGenreOnglet[(EGenreOnglet['Casier_Documents'] = 103)] =
        'Casier_Documents';
      EGenreOnglet[(EGenreOnglet['Casier_MonCasier'] = 104)] =
        'Casier_MonCasier';
      EGenreOnglet[(EGenreOnglet['ListeEleves'] = 105)] = 'ListeEleves';
      EGenreOnglet[(EGenreOnglet['Genral_Classes'] = 106)] = 'Genral_Classes';
      EGenreOnglet[(EGenreOnglet['General_Salles'] = 107)] = 'General_Salles';
      EGenreOnglet[(EGenreOnglet['LivretScolaire'] = 108)] = 'LivretScolaire';
      EGenreOnglet[(EGenreOnglet['LivretScolaire_Appreciations'] = 109)] =
        'LivretScolaire_Appreciations';
      EGenreOnglet[(EGenreOnglet['LivretScolaire_Competences'] = 110)] =
        'LivretScolaire_Competences';
      EGenreOnglet[(EGenreOnglet['Graphique_Profil'] = 111)] =
        'Graphique_Profil';
      EGenreOnglet[(EGenreOnglet['Graphique_Evolution'] = 112)] =
        'Graphique_Evolution';
      EGenreOnglet[(EGenreOnglet['SaisieAbsences_AppelEtSuivi'] = 113)] =
        'SaisieAbsences_AppelEtSuivi';
      EGenreOnglet[(EGenreOnglet['SaisieAbsences_Appel'] = 114)] =
        'SaisieAbsences_Appel';
      EGenreOnglet[(EGenreOnglet['Remplacements_Grille'] = 118)] =
        'Remplacements_Grille';
      EGenreOnglet[(EGenreOnglet['Remplacements_Tableau'] = 119)] =
        'Remplacements_Tableau';
      EGenreOnglet[(EGenreOnglet['Rencontre_Planning_Liste'] = 120)] =
        'Rencontre_Planning_Liste';
      EGenreOnglet[(EGenreOnglet['Rencontre_Planning_Grille'] = 121)] =
        'Rencontre_Planning_Grille';
      EGenreOnglet[(EGenreOnglet['GeneralReleveDeNotes'] = 122)] =
        'GeneralReleveDeNotes';
      EGenreOnglet[(EGenreOnglet['ListeProfesseurs'] = 123)] =
        'ListeProfesseurs';
      EGenreOnglet[(EGenreOnglet['ListeClasses'] = 124)] = 'ListeClasses';
      EGenreOnglet[(EGenreOnglet['ListeGroupes'] = 125)] = 'ListeGroupes';
      EGenreOnglet[(EGenreOnglet['ListeResponsables'] = 126)] =
        'ListeResponsables';
      EGenreOnglet[(EGenreOnglet['ListePersonnels'] = 127)] = 'ListePersonnels';
      EGenreOnglet[(EGenreOnglet['Genral_Eleves'] = 128)] = 'Genral_Eleves';
      EGenreOnglet[(EGenreOnglet['General_Professeurs'] = 129)] =
        'General_Professeurs';
      EGenreOnglet[(EGenreOnglet['EmploiDuTempsEleve'] = 130)] =
        'EmploiDuTempsEleve';
      EGenreOnglet[(EGenreOnglet['Messagerie'] = 131)] = 'Messagerie';
      EGenreOnglet[(EGenreOnglet['General_Messagerie'] = 132)] =
        'General_Messagerie';
      EGenreOnglet[
        (EGenreOnglet['EmploiDuTempsPersonnelEtablissement'] = 134)
      ] = 'EmploiDuTempsPersonnelEtablissement';
      EGenreOnglet[(EGenreOnglet['Incidents'] = 135)] = 'Incidents';
      EGenreOnglet[(EGenreOnglet['SaisieAbsences_Appel_Professeur'] = 136)] =
        'SaisieAbsences_Appel_Professeur';
      EGenreOnglet[(EGenreOnglet['AutorisationSortie'] = 137)] =
        'AutorisationSortie';
      EGenreOnglet[(EGenreOnglet['RecapAbsences'] = 138)] = 'RecapAbsences';
      EGenreOnglet[(EGenreOnglet['RecapFeuilleAppel'] = 139)] =
        'RecapFeuilleAppel';
      EGenreOnglet[(EGenreOnglet['RecapPunitions'] = 140)] = 'RecapPunitions';
      EGenreOnglet[(EGenreOnglet['ProgrammesBO'] = 141)] = 'ProgrammesBO';
      EGenreOnglet[(EGenreOnglet['Trombinoscope_Professeur'] = 142)] =
        'Trombinoscope_Professeur';
      EGenreOnglet[(EGenreOnglet['Trombinoscope_Personnel'] = 143)] =
        'Trombinoscope_Personnel';
      EGenreOnglet[(EGenreOnglet['ParametresUtilisateur'] = 144)] =
        'ParametresUtilisateur';
      EGenreOnglet[(EGenreOnglet['ListeStagiaires'] = 145)] = 'ListeStagiaires';
      EGenreOnglet[(EGenreOnglet['CoursNonAssures'] = 146)] = 'CoursNonAssures';
      EGenreOnglet[(EGenreOnglet['General_Personnels'] = 147)] =
        'General_Personnels';
      EGenreOnglet[(EGenreOnglet['DocumentsATelecharger'] = 148)] =
        'DocumentsATelecharger';
      EGenreOnglet[(EGenreOnglet['General_Progression'] = 149)] =
        'General_Progression';
      EGenreOnglet[(EGenreOnglet['BibliothequeProgression'] = 150)] =
        'BibliothequeProgression';
      EGenreOnglet[(EGenreOnglet['General_CahierDeTextes_Saisie'] = 151)] =
        'General_CahierDeTextes_Saisie';
      EGenreOnglet[
        (EGenreOnglet['General_CahierDeTextes_Consultation'] = 152)
      ] = 'General_CahierDeTextes_Consultation';
      EGenreOnglet[(EGenreOnglet['General_Documentation'] = 153)] =
        'General_Documentation';
      EGenreOnglet[(EGenreOnglet['ListeDevoirSurTable'] = 154)] =
        'ListeDevoirSurTable';
      EGenreOnglet[(EGenreOnglet['AbsencesGrille'] = 155)] = 'AbsencesGrille';
      EGenreOnglet[(EGenreOnglet['General_Materiels'] = 156)] =
        'General_Materiels';
      EGenreOnglet[(EGenreOnglet['EmploiDuTempsMateriel'] = 157)] =
        'EmploiDuTempsMateriel';
      EGenreOnglet[(EGenreOnglet['ListeDiffusion'] = 158)] = 'ListeDiffusion';
      EGenreOnglet[(EGenreOnglet['RecapitulatifScolarite'] = 161)] =
        'RecapitulatifScolarite';
      EGenreOnglet[(EGenreOnglet['PlanningParSemaine'] = 162)] =
        'PlanningParSemaine';
      EGenreOnglet[(EGenreOnglet['PlanningParSemaine_Professeur'] = 163)] =
        'PlanningParSemaine_Professeur';
      EGenreOnglet[(EGenreOnglet['PlanningParSemaine_Eleve'] = 164)] =
        'PlanningParSemaine_Eleve';
      EGenreOnglet[(EGenreOnglet['PlanningParSemaine_Classe'] = 165)] =
        'PlanningParSemaine_Classe';
      EGenreOnglet[(EGenreOnglet['PlanningParSemaine_Salle'] = 166)] =
        'PlanningParSemaine_Salle';
      EGenreOnglet[
        (EGenreOnglet['PlanningParSemaine_PersonnelEtablissement'] = 167)
      ] = 'PlanningParSemaine_PersonnelEtablissement';
      EGenreOnglet[(EGenreOnglet['PlanningParSemaine_Materiel'] = 168)] =
        'PlanningParSemaine_Materiel';
      EGenreOnglet[(EGenreOnglet['PlanningParRessource_Professeur'] = 169)] =
        'PlanningParRessource_Professeur';
      EGenreOnglet[(EGenreOnglet['PlanningParRessource_Eleve'] = 170)] =
        'PlanningParRessource_Eleve';
      EGenreOnglet[(EGenreOnglet['PlanningParRessource_Classe'] = 171)] =
        'PlanningParRessource_Classe';
      EGenreOnglet[(EGenreOnglet['PlanningParRessource_Salle'] = 172)] =
        'PlanningParRessource_Salle';
      EGenreOnglet[
        (EGenreOnglet['PlanningParRessource_PersonnelEtablissement'] = 173)
      ] = 'PlanningParRessource_PersonnelEtablissement';
      EGenreOnglet[(EGenreOnglet['PlanningParRessource_Materiel'] = 174)] =
        'PlanningParRessource_Materiel';
      EGenreOnglet[(EGenreOnglet['General_Intendance'] = 175)] =
        'General_Intendance';
      EGenreOnglet[(EGenreOnglet['Intendance_SaisieDemandesTravaux'] = 176)] =
        'Intendance_SaisieDemandesTravaux';
      EGenreOnglet[(EGenreOnglet['RessourcePedagogique_Partage'] = 177)] =
        'RessourcePedagogique_Partage';
      EGenreOnglet[(EGenreOnglet['BilanFinDeCycle'] = 178)] = 'BilanFinDeCycle';
      EGenreOnglet[(EGenreOnglet['Trombinoscope_EquipePedagogique'] = 179)] =
        'Trombinoscope_EquipePedagogique';
      EGenreOnglet[(EGenreOnglet['ParcoursEducatif_Bulletin'] = 180)] =
        'ParcoursEducatif_Bulletin';
      EGenreOnglet[(EGenreOnglet['ParcoursEducatif_BullCompetence'] = 181)] =
        'ParcoursEducatif_BullCompetence';
      EGenreOnglet[
        (EGenreOnglet['General_Competences_NouveauSocleCommun'] = 182)
      ] = 'General_Competences_NouveauSocleCommun';
      EGenreOnglet[(EGenreOnglet['Saisie_Punitions'] = 192)] =
        'Saisie_Punitions';
      EGenreOnglet[(EGenreOnglet['Saisie_Dispenses'] = 193)] =
        'Saisie_Dispenses';
      EGenreOnglet[(EGenreOnglet['ListeDevoirs'] = 194)] = 'ListeDevoirs';
      EGenreOnglet[(EGenreOnglet['EvaluationAccueilStage'] = 195)] =
        'EvaluationAccueilStage';
      EGenreOnglet[(EGenreOnglet['ListeServices'] = 196)] = 'ListeServices';
      EGenreOnglet[(EGenreOnglet['RecapitulatifExportLSU'] = 197)] =
        'RecapitulatifExportLSU';
      EGenreOnglet[(EGenreOnglet['DernieresNotes'] = 198)] = 'DernieresNotes';
      EGenreOnglet[(EGenreOnglet['Competences_GrillesParDomaine'] = 199)] =
        'Competences_GrillesParDomaine';
      EGenreOnglet[(EGenreOnglet['Competences_GrillesParMatiere'] = 200)] =
        'Competences_GrillesParMatiere';
      EGenreOnglet[(EGenreOnglet['DernieresEvaluations'] = 201)] =
        'DernieresEvaluations';
      EGenreOnglet[(EGenreOnglet['ReleveEvaluationsParService'] = 202)] =
        'ReleveEvaluationsParService';
      EGenreOnglet[(EGenreOnglet['General_Competences_Grilles'] = 203)] =
        'General_Competences_Grilles';
      EGenreOnglet[(EGenreOnglet['General_Competences_Evaluation'] = 204)] =
        'General_Competences_Evaluation';
      EGenreOnglet[
        (EGenreOnglet['General_Competences_BilanPeriodique'] = 205)
      ] = 'General_Competences_BilanPeriodique';
      EGenreOnglet[
        (EGenreOnglet['General_Competences_BilanFinDeCycle'] = 206)
      ] = 'General_Competences_BilanFinDeCycle';
      EGenreOnglet[(EGenreOnglet['General_MonEmploiDuTemps'] = 207)] =
        'General_MonEmploiDuTemps';
      EGenreOnglet[(EGenreOnglet['General_MesEleves'] = 208)] =
        'General_MesEleves';
      EGenreOnglet[(EGenreOnglet['General_MesCollegues'] = 209)] =
        'General_MesCollegues';
      EGenreOnglet[(EGenreOnglet['General_OutilsPedagogiques'] = 210)] =
        'General_OutilsPedagogiques';
      EGenreOnglet[(EGenreOnglet['General_CDT'] = 211)] = 'General_CDT';
      EGenreOnglet[(EGenreOnglet['General_VieScolaire_Recapitulatif'] = 212)] =
        'General_VieScolaire_Recapitulatif';
      EGenreOnglet[(EGenreOnglet['General_RessourcesPedagogiques'] = 214)] =
        'General_RessourcesPedagogiques';
      EGenreOnglet[(EGenreOnglet['ReleveEvaluationsParClasse'] = 215)] =
        'ReleveEvaluationsParClasse';
      EGenreOnglet[(EGenreOnglet['NiveauxDeMaitriseParMatiere'] = 216)] =
        'NiveauxDeMaitriseParMatiere';
      EGenreOnglet[(EGenreOnglet['General_BulletinsEleveClasse'] = 217)] =
        'General_BulletinsEleveClasse';
      EGenreOnglet[
        (EGenreOnglet['General_BulletinCompetencesEleveClasse'] = 218)
      ] = 'General_BulletinCompetencesEleveClasse';
      EGenreOnglet[(EGenreOnglet['BulletinCompetencesClasse'] = 219)] =
        'BulletinCompetencesClasse';
      EGenreOnglet[(EGenreOnglet['General_MesColleguesPersonnels'] = 220)] =
        'General_MesColleguesPersonnels';
      EGenreOnglet[(EGenreOnglet['General_ProceduresDisciplinaires'] = 221)] =
        'General_ProceduresDisciplinaires';
      EGenreOnglet[(EGenreOnglet['General_Dispenses'] = 222)] =
        'General_Dispenses';
      EGenreOnglet[(EGenreOnglet['General_Competences_BilanDomaine'] = 223)] =
        'General_Competences_BilanDomaine';
      EGenreOnglet[
        (EGenreOnglet['SaisieAppreciationsGenerales_Competences'] = 224)
      ] = 'SaisieAppreciationsGenerales_Competences';
      EGenreOnglet[(EGenreOnglet['General_Appreciations'] = 225)] =
        'General_Appreciations';
      EGenreOnglet[(EGenreOnglet['General_Appreciations_Competences'] = 226)] =
        'General_Appreciations_Competences';
      EGenreOnglet[(EGenreOnglet['BulletinAnneesPrec_Note'] = 227)] =
        'BulletinAnneesPrec_Note';
      EGenreOnglet[(EGenreOnglet['BulletinAnneesPrec_Competence'] = 228)] =
        'BulletinAnneesPrec_Competence';
      EGenreOnglet[(EGenreOnglet['ListeMatieres'] = 229)] = 'ListeMatieres';
      EGenreOnglet[(EGenreOnglet['ReleveDeCompetences'] = 230)] =
        'ReleveDeCompetences';
      EGenreOnglet[(EGenreOnglet['TableauDeBord'] = 231)] = 'TableauDeBord';
      EGenreOnglet[(EGenreOnglet['ServicesPeriscolaires'] = 232)] =
        'ServicesPeriscolaires';
      EGenreOnglet[(EGenreOnglet['Inscriptions'] = 233)] = 'Inscriptions';
      EGenreOnglet[(EGenreOnglet['EmploiDuTemps_Annuel_Classe'] = 234)] =
        'EmploiDuTemps_Annuel_Classe';
      EGenreOnglet[(EGenreOnglet['InfosEnfant_Prim'] = 235)] =
        'InfosEnfant_Prim';
      EGenreOnglet[(EGenreOnglet['General_BilanParDomaine'] = 237)] =
        'General_BilanParDomaine';
      EGenreOnglet[(EGenreOnglet['General_CahierJournal'] = 238)] =
        'General_CahierJournal';
      EGenreOnglet[(EGenreOnglet['SaisieProgressions'] = 239)] =
        'SaisieProgressions';
      EGenreOnglet[(EGenreOnglet['General_PyramideDesAges'] = 240)] =
        'General_PyramideDesAges';
      EGenreOnglet[(EGenreOnglet['PyramideDesAges_Histogramme'] = 241)] =
        'PyramideDesAges_Histogramme';
      EGenreOnglet[(EGenreOnglet['PyramideDesAges_Repartition'] = 242)] =
        'PyramideDesAges_Repartition';
      EGenreOnglet[
        (EGenreOnglet['General_CahierDeTextes_Planification'] = 243)
      ] = 'General_CahierDeTextes_Planification';
      EGenreOnglet[(EGenreOnglet['CDT_Planning'] = 244)] = 'CDT_Planning';
      EGenreOnglet[(EGenreOnglet['QCM_Collaboratif'] = 245)] =
        'QCM_Collaboratif';
      EGenreOnglet[(EGenreOnglet['AppreciationsBulletinParEleve'] = 246)] =
        'AppreciationsBulletinParEleve';
      EGenreOnglet[(EGenreOnglet['Intendance_SaisieSecretariat'] = 247)] =
        'Intendance_SaisieSecretariat';
      EGenreOnglet[
        (EGenreOnglet['Competences_GrillesCompetencesNumeriques'] = 248)
      ] = 'Competences_GrillesCompetencesNumeriques';
      EGenreOnglet[(EGenreOnglet['CompetencesNumeriques'] = 249)] =
        'CompetencesNumeriques';
      EGenreOnglet[(EGenreOnglet['ManuelsNumeriques'] = 250)] =
        'ManuelsNumeriques';
      EGenreOnglet[(EGenreOnglet['General_Blog'] = 251)] = 'General_Blog';
      EGenreOnglet[(EGenreOnglet['Blog_FilActu'] = 253)] = 'Blog_FilActu';
      EGenreOnglet[(EGenreOnglet['Blog_Mediatheque'] = 254)] =
        'Blog_Mediatheque';
      EGenreOnglet[(EGenreOnglet['SaisieTravailAFaire'] = 255)] =
        'SaisieTravailAFaire';
      EGenreOnglet[(EGenreOnglet['General_InscriptionsEtablissement'] = 256)] =
        'General_InscriptionsEtablissement';
      EGenreOnglet[(EGenreOnglet['InscriptionsEtablissement'] = 257)] =
        'InscriptionsEtablissement';
      EGenreOnglet[
        (EGenreOnglet['SaisieAbsences_AppelEtSuiviProfesseur'] = 259)
      ] = 'SaisieAbsences_AppelEtSuiviProfesseur';
      EGenreOnglet[(EGenreOnglet['SaisieAvisProfesseur'] = 260)] =
        'SaisieAvisProfesseur';
      EGenreOnglet[(EGenreOnglet['SuiviElevesTutores'] = 261)] =
        'SuiviElevesTutores';
      EGenreOnglet[(EGenreOnglet['Onglet_General_Suivi'] = 262)] =
        'Onglet_General_Suivi';
      EGenreOnglet[(EGenreOnglet['SuiviJustificationsAbsencesRetards'] = 263)] =
        'SuiviJustificationsAbsencesRetards';
      EGenreOnglet[
        (EGenreOnglet['Intendance_SaisieDemandesInformatique'] = 264)
      ] = 'Intendance_SaisieDemandesInformatique';
      EGenreOnglet[(EGenreOnglet['Intendance_SaisieCommandes'] = 265)] =
        'Intendance_SaisieCommandes';
      EGenreOnglet[(EGenreOnglet['SaisieCahierJournal'] = 266)] =
        'SaisieCahierJournal';
      EGenreOnglet[(EGenreOnglet['Onglet_General_Apprentissages'] = 267)] =
        'Onglet_General_Apprentissages';
      EGenreOnglet[(EGenreOnglet['ListeApprentissages'] = 268)] =
        'ListeApprentissages';
      EGenreOnglet[(EGenreOnglet['CarnetDeSuivi'] = 269)] = 'CarnetDeSuivi';
      EGenreOnglet[(EGenreOnglet['SyntheseAcquis'] = 270)] = 'SyntheseAcquis';
      EGenreOnglet[(EGenreOnglet['DocumentsParents'] = 271)] =
        'DocumentsParents';
      EGenreOnglet[(EGenreOnglet['RecapDevoirRendu'] = 272)] =
        'RecapDevoirRendu';
      EGenreOnglet[(EGenreOnglet['SaisieAvisParcoursup'] = 273)] =
        'SaisieAvisParcoursup';
      EGenreOnglet[(EGenreOnglet['SaisieAppelPeriScolaire'] = 274)] =
        'SaisieAppelPeriScolaire';
      EGenreOnglet[(EGenreOnglet['ForumPedagogique'] = 275)] =
        'ForumPedagogique';
      EGenreOnglet[
        (EGenreOnglet['General_Competences_SuiviCompetences'] = 276)
      ] = 'General_Competences_SuiviCompetences';
      EGenreOnglet[(EGenreOnglet['SuiviResultatsCompetences'] = 277)] =
        'SuiviResultatsCompetences';
      EGenreOnglet[(EGenreOnglet['BilanCompetencesParMatiere'] = 278)] =
        'BilanCompetencesParMatiere';
      EGenreOnglet[(EGenreOnglet['SaisieApprGeneralesReleve'] = 279)] =
        'SaisieApprGeneralesReleve';
      EGenreOnglet[(EGenreOnglet['Onglet_General_Pedagogie'] = 280)] =
        'Onglet_General_Pedagogie';
      EGenreOnglet[(EGenreOnglet['BilanAnnuelApprentissage'] = 281)] =
        'BilanAnnuelApprentissage';
      EGenreOnglet[(EGenreOnglet['General_SuiviApprentissages'] = 282)] =
        'General_SuiviApprentissages';
      EGenreOnglet[(EGenreOnglet['Commissions'] = 283)] = 'Commissions';
      EGenreOnglet[(EGenreOnglet['RDV'] = 284)] = 'RDV';
      EGenreOnglet[(EGenreOnglet['RemplacementsEnseignants'] = 285)] =
        'RemplacementsEnseignants';
      EGenreOnglet[(EGenreOnglet['SaisieAppelInternat'] = 286)] =
        'SaisieAppelInternat';
      EGenreOnglet[(EGenreOnglet['General_RemplacementsEnseignants'] = 287)] =
        'General_RemplacementsEnseignants';
    })(EGenreOnglet || (exports.EGenreOnglet = EGenreOnglet = {}));
  },
  fn: 'enumere_onglet.js',
});