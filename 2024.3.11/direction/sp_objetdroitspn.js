IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDroitsPN = exports.TypeDroits = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const TypeDomaine_1 = require('TypeDomaine');
    exports.TypeDroits = {
      estEnConsultation: 1,
      cours: {
        domaineConsultationEDT: 1,
        avecReservationCreneauxLibres: 1,
        modifierElevesDetachesSurCoursDeplaceCreneauLibre: 1,
        modifierMatieres: 1,
        modifierMatieresCoursEPIEtAP: 1,
        modifierClasses: 1,
        modifierProfesseurs: 1,
        modifierSalles: 1,
        modifierMateriels: 1,
        creerCours: 1,
        creerCoursPermanenceFeuilleAppel: 1,
        deplacerCours: 1,
        estSemaineModifiable: 1,
        estGestionnaireSalle: 1,
        estGestionnaireMateriel: 1,
        avecMateriel: 1,
        avecFicheCoursConseil: 1,
        masquerPartiesDeClasse: 1,
        afficherElevesDetachesDansCours: 1,
      },
      eleves: {
        voirTousLesEleves: 1,
        consulterIdentiteEleve: 1,
        consulterFichesResponsables: 1,
        consulterPhotosEleves: 1,
        avecSaisieParcoursPedagogique: 1,
        avecAffectationElevesGroupesNonGAEV: 1,
        avecAffectationElevesGroupesGAEV: 1,
        avecSaisieProjetIndividuel: 1,
        avecSaisieAttestations: 1,
        consulterDonneesAdministrativesAutresEleves: 1,
      },
      communication: {
        toutesClasses: 1,
        avecDiscussion: 1,
        discussionDesactiveeSelonHoraire: 1,
        messageDiscussionDesactiveeSelonHoraire: 1,
        discussionInterdit: 1,
        avecDiscussionPersonnels: 1,
        avecDiscussionProfesseurs: 1,
        avecDiscussionParents: 1,
        avecDiscussionEleves: 1,
        avecMessageInstantane: 1,
        avecContactVS: 1,
        lancerAlertesPPMS: 1,
        estDestinataireChat: 1,
        avecDiscussionAvancee: 1,
        avecPublicationPageEtablissement: 0,
      },
      absences: {
        domaineRecapitulatifAbsences: 1,
        avecSaisieAppelEtVS: 1,
        avecSaisieAppel: 1,
        avecSaisieCours: 1,
        avecSaisieAbsenceOuverte: 1,
        avecSaisieHorsCours: 1,
        avecSaisieSurGrille: 1,
        avecSaisieSurGrilleAppelProf: 1,
        avecSaisieAbsence: 1,
        avecSaisieRetard: 1,
        avecSaisiePassageInfirmerie: 1,
        avecSaisieExclusion: 1,
        avecSaisiePunition: 1,
        avecSaisieObservation: 1,
        avecConsultationDefautCarnet: 1,
        avecSaisieDefautCarnet: 1,
        avecSaisieObservationsParents: 1,
        avecSaisieEncouragements: 1,
        avecAccesAuxEvenementsAutresCours: 1,
        avecSaisieAbsencesToutesPermanences: 1,
        listeDatesSaisieAbsence: 1,
        avecAnciennesFeuilleDAppel: 1,
        avecSaisieAbsencesGrilleAbsencesRepas: 1,
        avecSaisieAbsencesGrilleAbsencesInternat: 1,
        avecSuiviAbsenceRetard: 1,
        avecSaisieMotifRetard: 1,
        avecDeclarerUneAbsence: 1,
        avecDeclarerDispensePonctuelle: 1,
        avecDeclarerDispenseLongue: 1,
      },
      competence: {
        avecSaisieEvaluations: 1,
        avecSaisieItems: 1,
        avecValidationCompetences: 1,
      },
      agenda: { avecSaisieAgenda: 1 },
      actualite: { avecSaisieActualite: 1 },
      listeDiffusion: { avecPublication: 1 },
      casierNumerique: {
        avecAccesALaListeDesDocumentEleve: 1,
        avecSaisieDocumentsCasiersIntervenant: 1,
        avecSaisieDocumentsCasiersResponsable: 1,
      },
      dossierVS: {
        creerDossiersVS: 1,
        modifierDossiersVS: 1,
        saisieMotifsDossiersVS: 1,
        publierDossiersVS: 1,
        consulterMemosEleve: 1,
        saisirMemos: 1,
      },
      decrochageScolaire: { acces: 1, suivi: 1 },
      dispenses: { saisie: 1 },
      incidents: {
        acces: 1,
        uniquementMesIncidentsSignales: 1,
        saisie: 1,
        publier: 1,
      },
      punition: {
        avecPublicationPunitions: 1,
        acces: 1,
        saisie: 1,
        avecRecapPunitions: 1,
        avecRecapSanctions: 1,
      },
      creerMotifIncidentPunitionSanction: 1,
      stage: { autoriserEditionToutesOffresStages: 1 },
      cahierDeTexte: {
        avecSaisieCahierDeTexte: 1,
        creerCategoriesDeCahierDeTexte: 1,
        avecSaisiePieceJointe: 1,
        tailleMaxPieceJointe: 1,
      },
      notation: { avecSaisieDevoirs: 1 },
      compte: {
        avecSaisieIdentifiant: 1,
        avecSaisieMotDePasse: 1,
        avecSaisieMotDePasseEleve: 1,
        avecInformationsPersonnelles: 1,
        avecSaisieInfosPersoCoordonnees: 1,
        avecSaisieInfosPersoAutorisations: 1,
      },
      intendance: {
        avecDemandeTravauxIntendance: 1,
        uniquementMesTravauxIntendance: 1,
        avecExecutionTravauxIntendance: 1,
        avecGestionTravauxIntendance: 1,
        avecDemandeTachesSecretariat: 1,
        uniquementMesTachesSecretariat: 1,
        avecExecutionTachesSecretariat: 1,
        avecDemandeTachesInformatique: 1,
        uniquementMesTachesInformatique: 1,
        avecExecutionTachesInformatique: 1,
        avecGestionTachesInformatique: 1,
        avecDemandeCommandes: 1,
        uniquementMesCommandes: 1,
        avecExecutionCommandes: 1,
        avecGestionCommandes: 1,
      },
      services: { avecCreationSousServices: 1, avecModificationCoefGeneral: 1 },
      trombinoscope: { autoriseAConsulterPhotosDeTousLesEleves: 1 },
      forum: { avecCreationSujetForum: 1, avecModificationForumAPosteriori: 1 },
      autoriserImpressionBulletinReleveBrevet: 1,
      fonctionnalites: {
        gestionNotation: 1,
        gestionCompetences: 1,
        gestionBrevet: 1,
        gestionProgrammesBO: 1,
        gestionStages: 1,
        gestionIPR: 1,
        appelSaisirMotifJustifDAbsence: 1,
        gestionTwitter: 1,
        gestionBulletinClasse: 1,
        gestionNathan: 1,
        gestionPunitions: 1,
        gestionInfirmerie: 1,
        gestionPermanence: 1,
        gestionAbsencesDemiPension: 1,
        gestionAbsencesInternat: 1,
        gestionEtendueEleves: 1,
        gestionEleves: 1,
        gestionPersonnels: 1,
        forcerARInfos: 1,
        gestionSondageAnonyme: 1,
        gestionAbsenceDJParUtilisateur: 1,
        attestationEtendue: 1,
        afficherProjetsAccompagnement: 1,
        saisieEtendueAbsenceDepuisAppel: 1,
        importExportEducationNationale: 1,
        gestionCDT: 1,
        gestionPeriodeNotation: 1,
        gestionARBulletins: 1,
        avecTransformationFluxFichier: 1,
      },
      avecAccesRemplacementsProfs: 1,
      voirAbsencesEtRemplacementsProfs: 1,
      sePorterVolontaireRemplacement: 1,
      avecSaisieAppreciationsGenerales: 1,
      assistantSaisieAppreciations: 1,
      tailleMaxDocJointEtablissement: 1,
      tailleMaxRenduTafEleve: 1,
      tailleTravailAFaire: 1000,
      tailleCirconstance: 1000,
      tailleCommentaire: 1000,
      avecDroitDeconnexionMessagerie: 1,
      estDirecteur: 1,
      estEnseignant: 1,
      tailleMaxUpload: 1,
    };
    MethodesObjet_1.MethodesObjet.indenterEnumere(exports.TypeDroits);
    class ObjetDroitsPN {
      constructor() {
        this.init();
        this.initDroitsSession();
      }
      get(aGenreDroit, aNumeroSemine) {
        const lEstEnConsultation = GApplication.getModeExclusif();
        switch (aGenreDroit) {
          case exports.TypeDroits.estEnConsultation:
            return lEstEnConsultation;
          case exports.TypeDroits.tailleMaxUpload:
            return 50 * 1024 * 1024;
          case exports.TypeDroits.cours.domaineConsultationEDT:
            return this._droits.cours.domaineConsultationEDT;
          case exports.TypeDroits.cours.avecReservationCreneauxLibres:
            return (
              this._droits.cours.avecReservationCreneauxLibres &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.cours
            .modifierElevesDetachesSurCoursDeplaceCreneauLibre:
            return (
              this._droits.cours
                .modifierElevesDetachesSurCoursDeplaceCreneauLibre &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.cours.modifierMatieres:
            return this._droits.cours.modifierMatieres && !lEstEnConsultation;
          case exports.TypeDroits.cours.modifierMatieresCoursEPIEtAP:
            return (
              this._droits.cours.modifierMatieresCoursEPIEtAP &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.cours.modifierClasses:
            return this._droits.cours.modifierClasses && !lEstEnConsultation;
          case exports.TypeDroits.cours.modifierProfesseurs:
            return (
              this._droits.cours.modifierProfesseurs && !lEstEnConsultation
            );
          case exports.TypeDroits.cours.modifierSalles:
            return this._droits.cours.modifierSalles && !lEstEnConsultation;
          case exports.TypeDroits.cours.modifierMateriels:
            return this._droits.cours.modifierMateriels && !lEstEnConsultation;
          case exports.TypeDroits.cours.deplacerCours:
            return this._droits.cours.deplacerCours && !lEstEnConsultation;
          case exports.TypeDroits.cours.creerCours:
            return this._droits.cours.creerCours && !lEstEnConsultation;
          case exports.TypeDroits.cours.creerCoursPermanenceFeuilleAppel:
            return (
              this._droits.cours.creerCoursPermanenceFeuilleAppel &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.cours.estSemaineModifiable:
            if (lEstEnConsultation) {
              return false;
            }
            if (this._droits.cours.modificationNonLimiteAuxSemaine) {
              return true;
            }
            if (!this._droits.cours.domaineModificationCours) {
              return false;
            }
            return this._droits.cours.domaineModificationCours.getValeur(
              aNumeroSemine,
            );
          case exports.TypeDroits.cours.estGestionnaireSalle:
            return (
              this._droits.cours.estGestionnaireSalle && !lEstEnConsultation
            );
          case exports.TypeDroits.cours.estGestionnaireMateriel:
            return (
              this._droits.cours.estGestionnaireMateriel && !lEstEnConsultation
            );
          case exports.TypeDroits.cours.avecMateriel:
            return this._droits.cours.avecMateriel;
          case exports.TypeDroits.cours.avecFicheCoursConseil:
            return this._droits.cours.avecFicheCoursConseil;
          case exports.TypeDroits.cours.masquerPartiesDeClasse:
            return this._droits.cours.masquerPartiesDeClasse;
          case exports.TypeDroits.cours.afficherElevesDetachesDansCours:
            return this._droits.cours.afficherElevesDetachesDansCours;
          case exports.TypeDroits.eleves.voirTousLesEleves:
            return this._droits.VoirTousLesEleves;
          case exports.TypeDroits.eleves.consulterIdentiteEleve:
            return this._droits.ConsulterIdentiteEleve;
          case exports.TypeDroits.eleves.consulterFichesResponsables:
            return this._droits.ConsulterFichesResponsables;
          case exports.TypeDroits.eleves.consulterPhotosEleves:
            return this._droits.ConsulterPhotosEleves;
          case exports.TypeDroits.eleves.avecSaisieParcoursPedagogique:
            return (
              this._droits.avecSaisieParcoursPedagogique && !lEstEnConsultation
            );
          case exports.TypeDroits.eleves.avecAffectationElevesGroupesNonGAEV:
            return (
              this._droits.AvecAffectationElevesGroupesNonGAEV &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.eleves.avecAffectationElevesGroupesGAEV:
            return (
              this._droits.AvecAffectationElevesGroupesGAEV &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.eleves.avecSaisieProjetIndividuel:
            return (
              this._droits.AvecSaisieProjetIndividuel && !lEstEnConsultation
            );
          case exports.TypeDroits.eleves.avecSaisieAttestations:
            return this._droits.AvecSaisieAttestations && !lEstEnConsultation;
          case exports.TypeDroits.eleves
            .consulterDonneesAdministrativesAutresEleves:
            return this._droits.consulterDonneesAdministrativesAutresEleves;
          case exports.TypeDroits.communication.toutesClasses:
            return this._droits.AutoriserCommunicationsToutesClasses;
          case exports.TypeDroits.communication.avecDiscussion:
            return this._droits.AvecDiscussion;
          case exports.TypeDroits.communication
            .discussionDesactiveeSelonHoraire:
            return this._droits.discussionDesactiveeSelonHoraire;
          case exports.TypeDroits.communication
            .messageDiscussionDesactiveeSelonHoraire:
            return this._droits.messageDiscussionDesactiveeSelonHoraire;
          case exports.TypeDroits.communication.discussionInterdit:
            return this._droits.discussionInterdit;
          case exports.TypeDroits.communication.avecDiscussionPersonnels:
            return this._droits.AvecDiscussionPersonnels;
          case exports.TypeDroits.communication.avecDiscussionProfesseurs:
            return this._droits.AvecDiscussionProfesseurs;
          case exports.TypeDroits.communication.avecDiscussionParents:
            return this._droits.AvecDiscussionParents;
          case exports.TypeDroits.communication.avecDiscussionEleves:
            return this._droits.AvecDiscussionEleves;
          case exports.TypeDroits.communication.avecMessageInstantane:
            return this._droits.avecMessageInstantane && !lEstEnConsultation;
          case exports.TypeDroits.communication.avecContactVS:
            return this._droits.AvecContactVS && !lEstEnConsultation;
          case exports.TypeDroits.communication.lancerAlertesPPMS:
            return this._droits.lancerAlertesPPMS && !lEstEnConsultation;
          case exports.TypeDroits.communication.estDestinataireChat:
            return this._droits.estDestinataireChat;
          case exports.TypeDroits.communication.avecDiscussionAvancee:
            return this._droits.AvecDiscussionAvancee;
          case exports.TypeDroits.absences.domaineRecapitulatifAbsences:
            return this._droits.DomaineRecapitulatifAbsences;
          case exports.TypeDroits.absences.avecSaisieAppelEtVS:
            return this._droits.AvecSaisieAppelEtVS;
          case exports.TypeDroits.absences.avecSaisieAppel:
            return this._droits.AvecSaisieAppel;
          case exports.TypeDroits.absences.avecSaisieCours:
            return this._droits.AvecSaisieCours;
          case exports.TypeDroits.absences.avecSaisieAbsenceOuverte:
            return this._droits.AvecSaisieAbsenceOuverte;
          case exports.TypeDroits.absences.avecSaisieHorsCours:
            return this._droits.AvecSaisieHorsCours;
          case exports.TypeDroits.absences.avecSaisieSurGrille:
            return this._droits.AvecSaisieSurGrille;
          case exports.TypeDroits.absences.avecSaisieSurGrilleAppelProf:
            return this._droits.AvecSaisieSurGrilleAppelProf;
          case exports.TypeDroits.absences.avecSaisieAbsence:
            return this._droits.AvecSaisieAbsence;
          case exports.TypeDroits.absences.avecSaisieRetard:
            return this._droits.AvecSaisieRetard;
          case exports.TypeDroits.absences.avecSaisiePassageInfirmerie:
            return this._droits.AvecSaisiePassageInfirmerie;
          case exports.TypeDroits.absences.avecAnciennesFeuilleDAppel:
            return this._droits.avecAnciennesFeuilleDAppel;
          case exports.TypeDroits.absences.avecSaisieExclusion:
            return this._droits.AvecSaisieExclusion;
          case exports.TypeDroits.absences.avecSaisiePunition:
            return this._droits.AvecSaisiePunition;
          case exports.TypeDroits.absences.avecSaisieObservation:
            return this._droits.AvecSaisieObservation;
          case exports.TypeDroits.absences.avecConsultationDefautCarnet:
            return this._droits.AvecConsultationDefautCarnet;
          case exports.TypeDroits.absences.avecSaisieDefautCarnet:
            return this._droits.AvecSaisieDefautCarnet;
          case exports.TypeDroits.absences.avecSaisieObservationsParents:
            return this._droits.AvecSaisieObservationsParents;
          case exports.TypeDroits.absences.avecSaisieEncouragements:
            return this._droits.AvecSaisieEncouragements;
          case exports.TypeDroits.absences.avecAccesAuxEvenementsAutresCours:
            return this._droits.AvecAccesAuxEvenementsAutresCours;
          case exports.TypeDroits.absences.avecSaisieAbsencesToutesPermanences:
            return this._droits.AvecSaisieAbsencesToutesPermanences;
          case exports.TypeDroits.absences.listeDatesSaisieAbsence:
            return (
              MethodesObjet_1.MethodesObjet.dupliquer(
                this._droits.listeDatesSaisieAbsence,
              ) || new ObjetListeElements_1.ObjetListeElements()
            );
          case exports.TypeDroits.absences
            .avecSaisieAbsencesGrilleAbsencesRepas:
            return this._droits.AvecSaisieAbsencesGrilleAbsencesRepas;
          case exports.TypeDroits.absences
            .avecSaisieAbsencesGrilleAbsencesInternat:
            return this._droits.AvecSaisieAbsencesGrilleAbsencesInternat;
          case exports.TypeDroits.absences.avecSuiviAbsenceRetard:
            return this._droits.AvecSuiviAbsenceRetard;
          case exports.TypeDroits.absences.avecSaisieMotifRetard:
            return this._droits.AvecSaisieMotifRetard;
          case exports.TypeDroits.absences.avecDeclarerUneAbsence:
            return this._droits.AvecDeclarerUneAbsence;
          case exports.TypeDroits.absences.avecDeclarerDispensePonctuelle:
            return this._droits.AvecDeclarerDispensePonctuelle;
          case exports.TypeDroits.absences.avecDeclarerDispenseLongue:
            return this._droits.AvecDeclarerDispenseLongue;
          case exports.TypeDroits.competence.avecSaisieEvaluations:
            return this._droits.AvecSaisieEvaluations && !lEstEnConsultation;
          case exports.TypeDroits.competence.avecSaisieItems:
            return this._droits.AvecSaisieItems && !lEstEnConsultation;
          case exports.TypeDroits.competence.avecValidationCompetences:
            return (
              this._droits.AvecValidationCompetences && !lEstEnConsultation
            );
          case exports.TypeDroits.agenda.avecSaisieAgenda:
            return this._droits.AvecSaisieAgenda && !lEstEnConsultation;
          case exports.TypeDroits.actualite.avecSaisieActualite:
            return this._droits.AvecSaisieActualite && !lEstEnConsultation;
          case exports.TypeDroits.communication
            .avecPublicationPageEtablissement:
            return (
              this._droits.avecPublicationPageEtablissement &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.listeDiffusion.avecPublication:
            return (
              this._droits.avecPublicationListeDiffusion && !lEstEnConsultation
            );
          case exports.TypeDroits.casierNumerique
            .avecSaisieDocumentsCasiersIntervenant:
            return (
              this._droits.avecSaisieDocumentsCasiersIntervenant &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.casierNumerique
            .avecSaisieDocumentsCasiersResponsable:
            return (
              this._droits.avecSaisieDocumentsCasiersResponsable &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.casierNumerique
            .avecAccesALaListeDesDocumentEleve:
            return this._droits.avecAccesALaListeDesDocumentEleve;
          case exports.TypeDroits.dossierVS.creerDossiersVS:
            return this._droits.CreerDossiersVS && !lEstEnConsultation;
          case exports.TypeDroits.dossierVS.modifierDossiersVS:
            return this._droits.ModifierDossiersVS && !lEstEnConsultation;
          case exports.TypeDroits.dossierVS.saisieMotifsDossiersVS:
            return this._droits.SaisieMotifsDossiersVS && !lEstEnConsultation;
          case exports.TypeDroits.dossierVS.publierDossiersVS:
            return this._droits.PublierDossiersVS && !lEstEnConsultation;
          case exports.TypeDroits.dossierVS.consulterMemosEleve:
            return this._droits.ConsulterMemosEleve;
          case exports.TypeDroits.dossierVS.saisirMemos:
            return this._droits.SaisirMemos && !lEstEnConsultation;
          case exports.TypeDroits.decrochageScolaire.acces:
            return this._droits.accesDecrochage;
          case exports.TypeDroits.decrochageScolaire.suivi:
            return this._droits.suiviDecrochage && !lEstEnConsultation;
          case exports.TypeDroits.dispenses.saisie:
            return this._droits.avecSaisieDispense && !lEstEnConsultation;
          case exports.TypeDroits.incidents.acces:
            return this._droits.incidents.acces;
          case exports.TypeDroits.incidents.saisie:
            return this._droits.incidents.saisie && !lEstEnConsultation;
          case exports.TypeDroits.incidents.uniquementMesIncidentsSignales:
            return this._droits.incidents.uniquementMesIncidentsSignales;
          case exports.TypeDroits.incidents.publier:
            return this._droits.incidents.publier && !lEstEnConsultation;
          case exports.TypeDroits.punition.avecPublicationPunitions:
            return this._droits.AvecPublicationPunitions;
          case exports.TypeDroits.punition.acces:
            return this._droits.avecAccesPunitions;
          case exports.TypeDroits.punition.saisie:
            return this._droits.avecSaisiePunitions && !lEstEnConsultation;
          case exports.TypeDroits.creerMotifIncidentPunitionSanction:
            return (
              this._droits.avecCreerMotifIncidentPunitionSanction &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.punition.avecRecapPunitions:
            return this._droits.avecRecapPunitions;
          case exports.TypeDroits.punition.avecRecapSanctions:
            return this._droits.avecRecapSanctions;
          case exports.TypeDroits.stage.autoriserEditionToutesOffresStages:
            return (
              this._droits.autoriserEditionToutesOffresStages &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.cahierDeTexte.avecSaisieCahierDeTexte:
            return this._droits.avecSaisieCahierDeTexte && !lEstEnConsultation;
          case exports.TypeDroits.cahierDeTexte.creerCategoriesDeCahierDeTexte:
            return (
              this._droits.creerCategoriesDeCahierDeTexte && !lEstEnConsultation
            );
          case exports.TypeDroits.cahierDeTexte.avecSaisiePieceJointe:
            return (
              this._droits.avecSaisiePieceJointeCahierDeTexte &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.cahierDeTexte.tailleMaxPieceJointe:
            return Math.min(
              this._droits.tailleMaxPieceJointeCahierDeTexte,
              this.get(exports.TypeDroits.tailleMaxUpload),
            );
          case exports.TypeDroits.notation.avecSaisieDevoirs:
            return this._droits.AvecSaisieDevoirs && !lEstEnConsultation;
          case exports.TypeDroits.compte.avecSaisieIdentifiant:
            return (
              this._droits.compte.avecSaisieIdentifiant && !lEstEnConsultation
            );
          case exports.TypeDroits.compte.avecSaisieMotDePasse:
            return (
              this._droits.compte.avecSaisieMotDePasse && !lEstEnConsultation
            );
          case exports.TypeDroits.compte.avecSaisieMotDePasseEleve:
            return (
              this._droits.compte.avecSaisieMotDePasseEleve &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.compte.avecInformationsPersonnelles:
            return this._droits.compte.avecInformationsPersonnelles;
          case exports.TypeDroits.compte.avecSaisieInfosPersoCoordonnees:
            return (
              this._droits.compte.avecSaisieInfosPersoCoordonnees &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.compte.avecSaisieInfosPersoAutorisations:
            return (
              this._droits.compte.avecSaisieInfosPersoAutorisations &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecDemandeTravauxIntendance:
            return (
              this._droits.intendance.avecDemandeTravauxIntendance &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.uniquementMesTravauxIntendance:
            return (
              this._droits.intendance.uniquementMesTravauxIntendance &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecExecutionTravauxIntendance:
            return (
              this._droits.intendance.avecExecutionTravauxIntendance &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecGestionTravauxIntendance:
            return (
              this._droits.intendance.avecGestionTravauxIntendance &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecDemandeTachesSecretariat:
            return (
              this._droits.intendance.avecDemandeTachesSecretariat &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.uniquementMesTachesSecretariat:
            return (
              this._droits.intendance.uniquementMesTachesSecretariat &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecExecutionTachesSecretariat:
            return (
              this._droits.intendance.avecExecutionTachesSecretariat &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecDemandeTachesInformatique:
            return (
              this._droits.intendance.avecDemandeTachesInformatique &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.uniquementMesTachesInformatique:
            return (
              this._droits.intendance.uniquementMesTachesInformatique &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecExecutionTachesInformatique:
            return (
              this._droits.intendance.avecExecutionTachesInformatique &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecGestionTachesInformatique:
            return (
              this._droits.intendance.avecGestionTachesInformatique &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecDemandeCommandes:
            return (
              this._droits.intendance.avecDemandeCommandes &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.uniquementMesCommandes:
            return (
              this._droits.intendance.uniquementMesCommandes &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecExecutionCommandes:
            return (
              this._droits.intendance.avecExecutionCommandes &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.intendance.avecGestionCommandes:
            return (
              this._droits.intendance.avecGestionCommandes &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.services.avecCreationSousServices:
            return (
              this._droits.services.avecCreationSousServices &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.services.avecModificationCoefGeneral:
            return (
              this._droits.services.avecModificationCoefGeneral &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.trombinoscope
            .autoriseAConsulterPhotosDeTousLesEleves:
            return this._droits.autoriseAConsulterPhotosDeTousLesEleves;
          case exports.TypeDroits.forum.avecCreationSujetForum:
            return this._droits.avecCreationSujetForum;
          case exports.TypeDroits.forum.avecModificationForumAPosteriori:
            return this._droits.avecModificationForumAPosteriori;
          case exports.TypeDroits.avecAccesRemplacementsProfs:
            return this._droits.avecAccesRemplacementsProfs;
          case exports.TypeDroits.voirAbsencesEtRemplacementsProfs:
            return this._droits.voirAbsencesEtRemplacementsProfs;
          case exports.TypeDroits.sePorterVolontaireRemplacement:
            return this._droits.sePorterVolontaireRemplacement;
          case exports.TypeDroits.avecSaisieAppreciationsGenerales:
            return (
              this._droits.avecSaisieAppreciationsGenerales &&
              !lEstEnConsultation
            );
          case exports.TypeDroits.assistantSaisieAppreciations:
            return (
              this._droits.AssistantSaisieAppreciations && !lEstEnConsultation
            );
          case exports.TypeDroits.tailleMaxDocJointEtablissement:
            return Math.min(
              this._droits.tailleMaxDocJointEtablissement,
              this.get(exports.TypeDroits.tailleMaxUpload),
            );
          case exports.TypeDroits.tailleMaxRenduTafEleve:
            return Math.min(
              this._droits.tailleMaxRenduTafEleve,
              this.get(exports.TypeDroits.tailleMaxUpload),
            );
          case exports.TypeDroits.tailleTravailAFaire:
            return this._droits.tailleTravailAFaire;
          case exports.TypeDroits.tailleCirconstance:
            return this._droits.tailleCirconstance;
          case exports.TypeDroits.tailleCommentaire:
            return this._droits.tailleCommentaire;
          case exports.TypeDroits.autoriserImpressionBulletinReleveBrevet:
            return this._droits.autoriserImpressionBulletinReleveBrevet;
          case exports.TypeDroits.avecDroitDeconnexionMessagerie:
            return this._droits.avecDroitDeconnexionMessagerie;
          case exports.TypeDroits.estDirecteur:
            return this._droits.estDirecteur;
          case exports.TypeDroits.estEnseignant:
            return this._droits.estEnseignant;
          case exports.TypeDroits.fonctionnalites.gestionNotation:
            return this._droitsSession.fonctionnalites.gestionNotation;
          case exports.TypeDroits.fonctionnalites.gestionCompetences:
            return this._droitsSession.fonctionnalites.gestionCompetences;
          case exports.TypeDroits.fonctionnalites.gestionBrevet:
            return this._droitsSession.fonctionnalites.gestionBrevet;
          case exports.TypeDroits.fonctionnalites.gestionProgrammesBO:
            return this._droitsSession.fonctionnalites.gestionProgrammesBO;
          case exports.TypeDroits.fonctionnalites.gestionStages:
            return this._droitsSession.fonctionnalites.gestionStages;
          case exports.TypeDroits.fonctionnalites.gestionIPR:
            return this._droitsSession.fonctionnalites.gestionIPR;
          case exports.TypeDroits.fonctionnalites
            .appelSaisirMotifJustifDAbsence:
            return this._droitsSession.fonctionnalites
              .appelSaisirMotifJustifDAbsence;
          case exports.TypeDroits.fonctionnalites
            .saisieEtendueAbsenceDepuisAppel:
            return this._droitsSession.fonctionnalites
              .saisieEtendueAbsenceDepuisAppel;
          case exports.TypeDroits.fonctionnalites.gestionTwitter:
            return this._droitsSession.fonctionnalites.gestionTwitter;
          case exports.TypeDroits.fonctionnalites.gestionBulletinClasse:
            return this._droitsSession.fonctionnalites.gestionBulletinClasse;
          case exports.TypeDroits.fonctionnalites.gestionNathan:
            return this._droitsSession.fonctionnalites.gestionNathan;
          case exports.TypeDroits.fonctionnalites.gestionPunitions:
            return this._droitsSession.fonctionnalites.gestionPunitions;
          case exports.TypeDroits.fonctionnalites.gestionCDT:
            return this._droitsSession.fonctionnalites.gestionCDT;
          case exports.TypeDroits.fonctionnalites.gestionPeriodeNotation:
            return this._droitsSession.fonctionnalites.gestionPeriodeNotation;
          case exports.TypeDroits.fonctionnalites.gestionInfirmerie:
            return this._droitsSession.fonctionnalites.gestionInfirmerie;
          case exports.TypeDroits.fonctionnalites.gestionPermanence:
            return this._droitsSession.fonctionnalites.gestionPermanence;
          case exports.TypeDroits.fonctionnalites.gestionAbsencesDemiPension:
            return this._droitsSession.fonctionnalites
              .gestionAbsencesDemiPension;
          case exports.TypeDroits.fonctionnalites.gestionAbsencesInternat:
            return this._droitsSession.fonctionnalites.gestionAbsencesInternat;
          case exports.TypeDroits.fonctionnalites.gestionEtendueEleves:
            return this._droitsSession.fonctionnalites.gestionEtendueEleves;
          case exports.TypeDroits.fonctionnalites.gestionEleves:
            return this._droitsSession.fonctionnalites.gestionEleves;
          case exports.TypeDroits.fonctionnalites.gestionPersonnels:
            return this._droitsSession.fonctionnalites.gestionPersonnels;
          case exports.TypeDroits.fonctionnalites.forcerARInfos:
            return this._droitsSession.fonctionnalites.forcerARInfos;
          case exports.TypeDroits.fonctionnalites.gestionSondageAnonyme:
            return this._droitsSession.fonctionnalites.gestionSondageAnonyme;
          case exports.TypeDroits.fonctionnalites
            .gestionAbsenceDJParUtilisateur:
            return this._droitsSession.fonctionnalites
              .gestionAbsenceDJParUtilisateur;
          case exports.TypeDroits.fonctionnalites.attestationEtendue:
            return this._droitsSession.fonctionnalites.attestationEtendue;
          case exports.TypeDroits.fonctionnalites.afficherProjetsAccompagnement:
            return this._droitsSession.fonctionnalites
              .afficherProjetsAccompagnement;
          case exports.TypeDroits.fonctionnalites.gestionARBulletins:
            return this._droitsSession.fonctionnalites.gestionARBulletins;
          case exports.TypeDroits.fonctionnalites
            .importExportEducationNationale:
            return this._droitsSession.fonctionnalites
              .importExportEducationNationale;
          case exports.TypeDroits.fonctionnalites.avecTransformationFluxFichier:
            return this._droitsSession.fonctionnalites
              .avecTransformationFluxFichier;
          default:
            return false;
        }
      }
      init() {
        this._droits = {
          AssistantSaisieAppreciations: false,
          VoirTousLesEleves: false,
          ConsulterIdentiteEleve: false,
          ConsulterFichesResponsables: false,
          ConsulterPhotosEleves: false,
          avecSaisieParcoursPedagogique: false,
          AvecAffectationElevesGroupesNonGAEV: false,
          AvecAffectationElevesGroupesGAEV: false,
          AvecSaisieProjetIndividuel: false,
          AvecSaisieAttestations: false,
          consulterDonneesAdministrativesAutresEleves: true,
          AutoriserCommunicationsToutesClasses: false,
          AvecDiscussion: false,
          discussionDesactiveeSelonHoraire: false,
          messageDiscussionDesactiveeSelonHoraire: '',
          discussionInterdit: false,
          AvecDiscussionPersonnels: false,
          AvecDiscussionProfesseurs: false,
          AvecDiscussionParents: false,
          AvecDiscussionEleves: false,
          avecMessageInstantane: false,
          AvecContactVS: false,
          lancerAlertesPPMS: false,
          estDestinataireChat: false,
          AvecDiscussionAvancee: false,
          DomaineRecapitulatifAbsences: new TypeDomaine_1.TypeDomaine(),
          AvecSaisieAppelEtVS: false,
          AvecSaisieAppel: false,
          AvecSaisieCours: false,
          AvecSaisieAbsenceOuverte: false,
          AvecSaisieHorsCours: false,
          AvecSaisieSurGrille: false,
          AvecSaisieSurGrilleAppelProf: false,
          AvecSaisieAbsence: false,
          AvecSaisieRetard: false,
          AvecSaisiePassageInfirmerie: false,
          avecAnciennesFeuilleDAppel: false,
          AvecSaisieExclusion: false,
          AvecSaisiePunition: false,
          AvecSaisieObservation: false,
          AvecConsultationDefautCarnet: false,
          AvecSaisieDefautCarnet: false,
          AvecSaisieObservationsParents: false,
          AvecSaisieEncouragements: false,
          AvecAccesAuxEvenementsAutresCours: false,
          AvecSaisieAbsencesToutesPermanences: false,
          DateSaisieAbsence: null,
          AvecDeclarerUneAbsence: false,
          AvecDeclarerDispensePonctuelle: false,
          AvecDeclarerDispenseLongue: false,
          AvecSaisieAbsencesGrilleAbsencesRepas: false,
          AvecSaisieAbsencesGrilleAbsencesInternat: false,
          AvecSuiviAbsenceRetard: false,
          AvecSaisieEvaluations: false,
          AvecSaisieItems: false,
          AvecValidationCompetences: false,
          AvecSaisieAgenda: false,
          AvecSaisieActualite: false,
          avecPublicationPageEtablissement: false,
          avecPublicationListeDiffusion: false,
          avecSaisieDocumentsCasiersIntervenant: false,
          avecSaisieDocumentsCasiersResponsable: false,
          avecAccesALaListeDesDocumentEleve: false,
          CreerDossiersVS: false,
          ModifierDossiersVS: false,
          SaisieMotifsDossiersVS: false,
          PublierDossiersVS: false,
          ConsulterMemosEleve: false,
          SaisirMemos: false,
          accesDecrochage: false,
          suiviDecrochage: false,
          avecSaisieDispense: false,
          incidents: { acces: false, saisie: false, publier: false },
          AvecPublicationPunitions: false,
          avecAccesPunitions: false,
          avecSaisiePunitions: false,
          avecRecapPunitions: false,
          avecRecapSanctions: false,
          avecCreerMotifIncidentPunitionSanction: false,
          avecAccesRemplacementsProfs: false,
          voirAbsencesEtRemplacementsProfs: false,
          sePorterVolontaireRemplacement: false,
          avecSaisieAppreciationsGenerales: false,
          cours: {
            domaineConsultationEDT: new TypeDomaine_1.TypeDomaine(),
            avecReservationCreneauxLibres: false,
            modifierElevesDetachesSurCoursDeplaceCreneauLibre: false,
            modifierMatieres: false,
            modifierMatieresCoursEPIEtAP: false,
            modifierClasses: false,
            modifierProfesseurs: false,
            modifierSalles: false,
            modifierMateriels: false,
            creerCours: false,
            creerCoursPermanenceFeuilleAppel: false,
            deplacerCours: false,
            modificationNonLimiteAuxSemaine: false,
            domaineModificationCours: new TypeDomaine_1.TypeDomaine(),
            estGestionnaireSalle: false,
            estGestionnaireMateriel: false,
            avecMateriel: false,
            avecFicheCoursConseil: false,
            masquerPartiesDeClasse: false,
            afficherElevesDetachesDansCours: false,
          },
          autoriserEditionToutesOffresStages: false,
          avecSaisieCahierDeTexte: false,
          creerCategoriesDeCahierDeTexte: false,
          avecSaisiePieceJointeCahierDeTexte: false,
          tailleMaxPieceJointeCahierDeTexte: 0,
          AvecSaisieDevoirs: false,
          tailleMaxDocJointEtablissement: 0,
          tailleMaxRenduTafEleve: 0,
          tailleTravailAFaire: 1000,
          tailleCirconstance: 1000,
          tailleCommentaire: 1000,
          compte: {
            avecSaisieIdentifiant: false,
            avecSaisieMotDePasse: false,
            avecSaisieMotDePasseEleve: false,
            avecInformationsPersonnelles: false,
            avecSaisieInfosPersoCoordonnees: false,
            avecSaisieInfosPersoAutorisations: false,
          },
          intendance: {
            avecDemandeTravauxIntendance: false,
            uniquementMesTravauxIntendance: false,
            avecExecutionTravauxIntendance: false,
            avecGestionTravauxIntendance: false,
            avecDemandeTachesSecretariat: false,
            uniquementMesTachesSecretariat: false,
            avecExecutionTachesSecretariat: false,
            avecDemandeTachesInformatique: false,
            uniquementMesTachesInformatique: false,
            avecExecutionTachesInformatique: false,
            avecGestionTachesInformatique: false,
            avecDemandeCommandes: false,
            uniquementMesCommandes: false,
            avecExecutionCommandes: false,
            avecGestionCommandes: false,
          },
          services: {
            avecCreationSousServices: false,
            avecModificationCoefGeneral: false,
          },
          autoriseAConsulterPhotosDeTousLesEleves: false,
          avecCreationSujetForum: false,
          avecModificationForumAPosteriori: false,
          autoriserImpressionBulletinReleveBrevet: false,
          avecDroitDeconnexionMessagerie: false,
          estDirecteur: false,
          estEnseignant: false,
        };
      }
      initDroitsSession() {
        this._droitsSession = {
          fonctionnalites: {
            gestionNotation: true,
            gestionCompetences: true,
            gestionBrevet: true,
            gestionProgrammesBO: true,
            gestionStages: true,
            gestionIPR: true,
            appelSaisirMotifJustifDAbsence: false,
            gestionTwitter: false,
            gestionBulletinClasse: true,
            gestionNathan: true,
            gestionPunitions: true,
            gestionInfirmerie: true,
            gestionPermanence: true,
            gestionAbsencesDemiPension: true,
            gestionAbsencesInternat: true,
            gestionEtendueEleves: true,
            gestionEleves: true,
            gestionPersonnels: true,
            forcerARInfos: false,
            gestionSondageAnonyme: true,
            gestionAbsenceDJParUtilisateur: false,
            attestationEtendue: true,
            afficherProjetsAccompagnement: true,
            saisieEtendueAbsenceDepuisAppel: false,
            importExportEducationNationale: true,
            gestionCDT: true,
            gestionPeriodeNotation: true,
            gestionARBulletins: false,
            avecTransformationFluxFichier: false,
          },
        };
      }
      chargerJSON(aJSON) {
        if (aJSON && aJSON.autorisationsSession) {
          this.initDroitsSession();
          $.extend(true, this._droitsSession, aJSON.autorisationsSession);
        }
        if (aJSON && aJSON.autorisations) {
          this._autorisationsChargees = true;
          this.init();
          $.extend(true, this._droits, aJSON.autorisations);
          this._droits.listeDatesSaisieAbsence =
            new ObjetListeElements_1.ObjetListeElements();
          for (
            let I = 0;
            this._droits.DateSaisieAbsence &&
            I < this._droits.DateSaisieAbsence.length;
            I++
          ) {
            const lDate = new ObjetElement_1.ObjetElement();
            lDate.Date = aJSON.autorisations.DateSaisieAbsence[I];
            lDate.Libelle = ObjetDate_1.GDate.formatDate(
              lDate.Date,
              '%JJJJ %JJ %MMM',
            );
            this._droits.listeDatesSaisieAbsence.addElement(lDate);
          }
        }
      }
    }
    exports.ObjetDroitsPN = ObjetDroitsPN;
  },
  fn: 'objetdroitspn.js',
});