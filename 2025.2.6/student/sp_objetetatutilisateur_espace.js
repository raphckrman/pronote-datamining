IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetEtatUtilisateur_Espace = void 0;
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_GenreImpression_1 = require('Enumere_GenreImpression');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetEtatUtilisateur_1 = require('ObjetEtatUtilisateur');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TypeDomaine_1 = require('TypeDomaine');
    const Enumere_Connexion_1 = require('Enumere_Connexion');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const Enumere_Onglet_1 = require('Enumere_Onglet');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetFenetre_EnvoiEMail_1 = require('ObjetFenetre_EnvoiEMail');
    class ObjetEtatUtilisateur_Espace extends ObjetEtatUtilisateur_1.ObjetEtatUtilisateur {
      constructor(aGenreEspace) {
        super(aGenreEspace);
        this.widgets = [];
        this.parametresSco = [];
        this._indiceProgressionSelection = 0;
        this._domaineConsultation = new TypeDomaine_1.TypeDomaine();
        this.setGenreConnexion = (aGenreConnexion) => {
          this.genreConnexion =
            this.GenreEspace === Enumere_Espace_1.EGenreEspace.Professeur
              ? aGenreConnexion
              : Enumere_Connexion_1.EGenreConnexion.Normale;
          if (
            this.applicationSco.acces.estConnexionCAS() ||
            this.applicationSco.acces.estConnexionCookie()
          ) {
            this.genreConnexion = Enumere_Connexion_1.EGenreConnexion.Normale;
          }
          if (this.applicationSco.getOptionsEspaceLocal()) {
            this.applicationSco
              .getOptionsEspaceLocal()
              .setGenreConnexion(aGenreConnexion);
          }
        };
        this.genreConnexion = Enumere_Connexion_1.EGenreConnexion.Normale;
        this.page = {};
      }
      initialiserEtatsParDefaut() {
        this.Aide = true;
      }
      initialiser() {
        this.initialiserEtatsParDefaut();
        this.setSemaineSelectionnee(IE.Cycles.cycleCourant());
        this.setDomaineSelectionne(
          new TypeDomaine_1.TypeDomaine().setValeur(
            true,
            IE.Cycles.cycleCourant(),
          ),
        );
      }
      getAvecSaisie() {
        return [
          Enumere_Espace_1.EGenreEspace.Professeur,
          Enumere_Espace_1.EGenreEspace.Entreprise,
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Eleve,
          Enumere_Espace_1.EGenreEspace.Accompagnant,
          Enumere_Espace_1.EGenreEspace.Tuteur,
          Enumere_Espace_1.EGenreEspace.Etablissement,
          Enumere_Espace_1.EGenreEspace.Administrateur,
          Enumere_Espace_1.EGenreEspace.Mobile_Professeur,
          Enumere_Espace_1.EGenreEspace.PrimProfesseur,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.PrimDirection,
          Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      avecCommunication() {
        let lEstEspaceAvecCommunication = false;
        if (
          [
            Enumere_Espace_1.EGenreEspace.Professeur,
            Enumere_Espace_1.EGenreEspace.Etablissement,
            Enumere_Espace_1.EGenreEspace.Administrateur,
            Enumere_Espace_1.EGenreEspace.Tuteur,
            Enumere_Espace_1.EGenreEspace.Eleve,
            Enumere_Espace_1.EGenreEspace.Parent,
            Enumere_Espace_1.EGenreEspace.Accompagnant,
          ].includes(this.GenreEspace)
        ) {
          lEstEspaceAvecCommunication = true;
        }
        if (
          this.GenreEspace === Enumere_Espace_1.EGenreEspace.Professeur &&
          this.genreConnexion === Enumere_Connexion_1.EGenreConnexion.Allegee
        ) {
          lEstEspaceAvecCommunication = false;
        }
        const lAvecDiscussion =
          this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussion,
          ) &&
          !this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.discussionInterdit,
          );
        const lAvecInfoSondage = this.applicationSco.droits.get(
          ObjetDroitsPN_1.TypeDroits.actualite.avecSaisieActualite,
        );
        const lAvecDepotCasierIntervenant = this.applicationSco.droits.get(
          ObjetDroitsPN_1.TypeDroits.casierNumerique
            .avecSaisieDocumentsCasiersIntervenant,
        );
        const lAvecDepotCasierResponsable = this.applicationSco.droits.get(
          ObjetDroitsPN_1.TypeDroits.casierNumerique
            .avecSaisieDocumentsCasiersResponsable,
        );
        const lAvecRedirectionOngletEleves = this.estOngletAutorise(
          Enumere_Onglet_1.EGenreOnglet.ListeEleves,
        );
        const lAvecRedirectionOngletResponsables = this.estOngletAutorise(
          Enumere_Onglet_1.EGenreOnglet.ListeResponsables,
        );
        const lAvecRedirectionOngletProfs = this.estOngletAutorise(
          Enumere_Onglet_1.EGenreOnglet.ListeProfesseurs,
        );
        const lAvecRedirectionOngletEquipePeda = this.estOngletAutorise(
          Enumere_Onglet_1.EGenreOnglet.EquipePedagogique,
        );
        const lAvecRedirectionOngletPersonnels = this.estOngletAutorise(
          Enumere_Onglet_1.EGenreOnglet.ListePersonnels,
        );
        const lAvecEnvoiEmail =
          ObjetFenetre_EnvoiEMail_1.ObjetFenetre_EnvoiEMail.avecAuMoinsUnTypeDeDestinatairesPossible();
        return (
          lEstEspaceAvecCommunication &&
          (lAvecDiscussion ||
            lAvecInfoSondage ||
            lAvecDepotCasierIntervenant ||
            lAvecDepotCasierResponsable ||
            lAvecRedirectionOngletEleves ||
            lAvecRedirectionOngletResponsables ||
            lAvecRedirectionOngletProfs ||
            lAvecRedirectionOngletEquipePeda ||
            lAvecRedirectionOngletPersonnels ||
            lAvecEnvoiEmail)
        );
      }
      avecFenetreKiosque() {
        return (
          this.avecKiosque &&
          [
            Enumere_Espace_1.EGenreEspace.Eleve,
            Enumere_Espace_1.EGenreEspace.PrimEleve,
          ].includes(GEtatUtilisateur.GenreEspace)
        );
      }
      avecKiosque() {
        return (
          this.autorisationKiosque &&
          [
            Enumere_Espace_1.EGenreEspace.Professeur,
            Enumere_Espace_1.EGenreEspace.Eleve,
            Enumere_Espace_1.EGenreEspace.PrimProfesseur,
            Enumere_Espace_1.EGenreEspace.PrimEleve,
          ].includes(GEtatUtilisateur.GenreEspace)
        );
      }
      avecImports() {
        return false;
      }
      avecFicheEtablissement() {
        let lEtablissement;
        let lAvecInfo = false;
        if (this.listeInformationsEtablissements) {
          if (
            [
              Enumere_Espace_1.EGenreEspace.Parent,
              Enumere_Espace_1.EGenreEspace.Accompagnant,
              Enumere_Espace_1.EGenreEspace.Entreprise,
              Enumere_Espace_1.EGenreEspace.PrimParent,
              Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
              Enumere_Espace_1.EGenreEspace.Tuteur,
            ].includes(GEtatUtilisateur.GenreEspace)
          ) {
            if (!!this.getMembre().Etablissement) {
              lEtablissement =
                this.listeInformationsEtablissements.getElementParNumero(
                  this.getMembre().Etablissement.getNumero(),
                );
              if (!!lEtablissement && lEtablissement.avecInformations) {
                lAvecInfo = true;
              }
            }
          } else {
            for (
              let i = 0, lNbr = this.listeInformationsEtablissements.count();
              i < lNbr;
              i++
            ) {
              lEtablissement = this.listeInformationsEtablissements.get(i);
              if (lEtablissement.avecInformations) {
                lAvecInfo = true;
              }
            }
          }
        }
        return lAvecInfo;
      }
      getSemaineSelectionnee() {
        return this.SemaineSelectionnee;
      }
      setSemaineSelectionnee(aSemaine) {
        if (this.SemaineSelectionnee !== aSemaine) {
          this.DomaineSelectionne = new TypeDomaine_1.TypeDomaine().setValeur(
            true,
            aSemaine,
          );
        }
        this.SemaineSelectionnee = aSemaine;
      }
      getDomaineSelectionne() {
        return this.DomaineSelectionne && this.DomaineSelectionne.dupliquer
          ? this.DomaineSelectionne.dupliquer()
          : new TypeDomaine_1.TypeDomaine();
      }
      setDomaineSelectionne(aDomaine) {
        if (
          aDomaine &&
          this.DomaineSelectionne &&
          !aDomaine.estVide() &&
          !aDomaine.egal(this.DomaineSelectionne)
        ) {
          this.SemaineSelectionnee = aDomaine.getPremierePosition();
        }
        this.DomaineSelectionne = aDomaine.dupliquer();
      }
      setGenreRessource(aGenreRessource) {
        this.genreRessourceSelectionne = aGenreRessource;
      }
      getGenreRessource() {
        return this.genreRessourceSelectionne;
      }
      resetGenreRessource() {
        this.genreRessourceSelectionne = null;
      }
      setPageCourante(aInstancePage) {
        super.setPageCourante(aInstancePage);
        this.EtatImpression = Enumere_GenreImpression_1.EGenreImpression.Aucune;
      }
      getNiveau() {
        return this.Navigation.Niveau;
      }
      setNiveau(aNiveau) {
        this.Navigation.Niveau = aNiveau;
      }
      setNavigationDate(aDate) {
        this.Navigation.Date = aDate;
      }
      getNavigationDate() {
        return this.Navigation.Date;
      }
      setNavigationCours(aCours) {
        this.Navigation.cours = aCours;
      }
      getNavigationCours() {
        return this.Navigation.cours;
      }
      getTriDevoirs() {
        return this.Navigation.triDevoirs;
      }
      inverserTriDevoirs() {
        this.Navigation.triDevoirs = !this.Navigation.triDevoirs;
      }
      getModeAffichageTimeLine() {
        if (
          this.Navigation.modeAffichageTimeLine !== null &&
          this.Navigation.modeAffichageTimeLine !== undefined
        ) {
          return this.Navigation.modeAffichageTimeLine;
        } else {
          return undefined;
        }
      }
      setModeAffichageTimeLine(aMode) {
        this.Navigation.modeAffichageTimeLine = aMode;
      }
      getDateDebutTimeLineCDT() {
        if (
          this.Navigation.dateDebutTimeLineCDT !== null &&
          this.Navigation.dateDebutTimeLineCDT !== undefined
        ) {
          return this.Navigation.dateDebutTimeLineCDT;
        } else {
          return undefined;
        }
      }
      setDateDebutTimeLineCDT(aDate) {
        this.Navigation.dateDebutTimeLineCDT = aDate;
      }
      getUniquementMesIncidents() {
        return this.Navigation.uniquementMesIncidents !== false;
      }
      setUniquementMesIncidents(aBoolean) {
        this.Navigation.uniquementMesIncidents = aBoolean;
      }
      getUniquementNonRegle() {
        return this.Navigation.uniquementNonRegle !== false;
      }
      setUniquementNonRegle(aBoolean) {
        this.Navigation.uniquementNonRegle = aBoolean;
      }
      getNrIncidentSelectionne() {
        return this.Navigation.nrIncidentSelectionne;
      }
      setNrIncidentSelectionne(aNumeroSelectionne) {
        this.Navigation.nrIncidentSelectionne = aNumeroSelectionne;
      }
      getNrPunitionSelectionnee() {
        return this.Navigation.nrPunitionSelectionnee;
      }
      setNrPunitionSelectionnee(aNumeroSelectionnee) {
        this.Navigation.nrPunitionSelectionnee = aNumeroSelectionnee;
      }
      getFiltreSurveillances() {
        return this.Navigation.filtreSurveillances === undefined
          ? 1
          : this.Navigation.filtreSurveillances;
      }
      setFiltreSurveillances(aValeur) {
        this.Navigation.filtreSurveillances = aValeur;
      }
      getAvecCoursAnnule() {
        if (this.getAvecChoixCoursAnnule()) {
          return !!this.applicationSco.parametresUtilisateur.get(
            'EDT.afficherCoursAnnules',
          );
        }
        return this.Navigation.avecCoursAnnule;
      }
      setAvecCoursAnnule(aAvecCoursAnnule) {
        if (this.getAvecChoixCoursAnnule()) {
          this.applicationSco.parametresUtilisateur.set(
            'EDT.afficherCoursAnnules',
            aAvecCoursAnnule,
          );
        } else {
          this.Navigation.avecCoursAnnule = aAvecCoursAnnule;
        }
      }
      getAfficherListeElevesEDT() {
        return !!this.applicationSco.parametresUtilisateur.get(
          'EDT.afficherListeEleves',
        );
      }
      setAfficherListeElevesEDT(aAfficher) {
        this.applicationSco.parametresUtilisateur.set(
          'EDT.afficherListeEleves',
          !!aAfficher,
        );
      }
      getAvecChoixCoursAnnule() {
        return [
          Enumere_Espace_1.EGenreEspace.Professeur,
          Enumere_Espace_1.EGenreEspace.Etablissement,
          Enumere_Espace_1.EGenreEspace.Administrateur,
          Enumere_Espace_1.EGenreEspace.Academie,
          Enumere_Espace_1.EGenreEspace.PrimProfesseur,
          Enumere_Espace_1.EGenreEspace.PrimDirection,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      getGenreOngletPere() {
        this.genreOngletPere = this.listeOnglets.getElementParGenre(
          this.genreOnglet,
        );
        return this.genreOngletPere && this.genreOngletPere.onglet
          ? this.genreOngletPere.onglet.Genre
          : null;
      }
      getLibelleOnglet(aGenreOnglet) {
        const lOnglet = this.listeOnglets.getElementParGenre(
          aGenreOnglet ? aGenreOnglet : this.genreOnglet,
        );
        return lOnglet ? lOnglet.getLibelle() : '';
      }
      getLibelleLongOnglet(aGenreOnglet) {
        const lOnglet = this.listeOnglets.getElementParGenre(
          aGenreOnglet ? aGenreOnglet : this.genreOnglet,
        );
        return lOnglet
          ? lOnglet.libelleLong
            ? lOnglet.libelleLong
            : lOnglet.getLibelle()
          : '';
      }
      ongletEstVisible(aGenreOnglet) {
        let lOngletVisible = false;
        this.listeOnglets.parcourir((D) => {
          if (
            D.Genre === aGenreOnglet &&
            D.Visible &&
            D.Actif &&
            !D.estUnOnglet
          ) {
            lOngletVisible = true;
            return false;
          }
        });
        return lOngletVisible;
      }
      getDomainePresence(aElementRessource) {
        const lOnglet = this.getOnglet();
        if (!lOnglet.domaineDePresenceRessources) {
          return null;
        }
        const lElement =
          lOnglet.domaineDePresenceRessources.getElementParNumeroEtGenre(
            aElementRessource.getNumero(),
            aElementRessource.getGenre(),
          );
        if (lElement) {
          return lElement.domaineDePresence;
        } else {
          return null;
        }
      }
      setDomainePresence(aElementRessource, aDomainePresence) {
        const lOnglet = this.getOnglet();
        if (!lOnglet.domaineDePresenceRessources) {
          lOnglet.domaineDePresenceRessources =
            new ObjetListeElements_1.ObjetListeElements();
        }
        let lElement =
          lOnglet.domaineDePresenceRessources.getElementParNumeroEtGenre(
            aElementRessource.getNumero(),
            aElementRessource.getGenre(),
          );
        if (!lElement) {
          lElement = MethodesObjet_1.MethodesObjet.dupliquer(
            aElementRessource,
            true,
          );
          lOnglet.domaineDePresenceRessources.addElement(lElement);
        }
        lElement.domaineDePresence = aDomainePresence;
      }
      getOnglet(aGenreOnglet) {
        const lGenreOnglet = aGenreOnglet
          ? aGenreOnglet
          : this.getGenreOnglet();
        if (!this.getMembre().tableauOnglets) {
          this.getMembre().tableauOnglets = [];
        }
        if (!this.getMembre().tableauOnglets[lGenreOnglet]) {
          this.getMembre().tableauOnglets[lGenreOnglet] = {};
        }
        return this.getMembre().tableauOnglets[lGenreOnglet];
      }
      avecOngletPeriode() {
        return ![
          Enumere_Onglet_1.EGenreOnglet.Evaluation,
          Enumere_Onglet_1.EGenreOnglet.FicheBrevet,
          Enumere_Onglet_1.EGenreOnglet.SaisieAppreciationDeFinDeStage,
          Enumere_Onglet_1.EGenreOnglet.SuiviPluriannuel,
          Enumere_Onglet_1.EGenreOnglet.LivretScolaire_Fiche,
          Enumere_Onglet_1.EGenreOnglet.Saisie_CarnetCorrespondance,
        ].includes(this.getGenreOnglet());
      }
      getListeSalles() {
        return this.listeSalles;
      }
      setListeSalles(aListeSalles) {
        this.listeSalles = aListeSalles;
      }
      getOngletListePeriodes() {
        return this.listePeriodes;
      }
      setOngletListePeriodes(aListePeriodes) {
        this.listePeriodes = aListePeriodes;
      }
      setOngletPeriodeParDefaut(aPeriodeParDefaut) {
        this.periodeParDefaut = aPeriodeParDefaut;
      }
      getOngletPeriodeParDefaut() {
        return this.periodeParDefaut;
      }
      getServiceDePilier() {
        const lPilier = this.Navigation.getRessource(
          Enumere_Ressource_1.EGenreRessource.Pilier,
        );
        return lPilier && lPilier.estPilierLVE
          ? this.Navigation.getRessource(
              Enumere_Ressource_1.EGenreRessource.Service,
            )
          : null;
      }
      getPeriode() {
        return this.avecOngletPeriode()
          ? this.listePeriodes.getElementParNumeroEtGenre(
              this.Navigation.getNumeroRessource(
                Enumere_Ressource_1.EGenreRessource.Periode,
              ),
              this.Navigation.getGenreRessource(
                Enumere_Ressource_1.EGenreRessource.Periode,
              ),
            )
          : null;
      }
      getIndiceDateSaisieAbsence(aDate) {
        const lListeDatesSaisieAbsence = this.applicationSco.droits.get(
          ObjetDroitsPN_1.TypeDroits.absences.listeDatesSaisieAbsence,
        );
        const lDate = aDate ? aDate : this.getNavigationDate();
        if (lDate) {
          for (
            let I = 0;
            lListeDatesSaisieAbsence && I < lListeDatesSaisieAbsence.count();
            I++
          ) {
            const lDateSaisieAbsence = lListeDatesSaisieAbsence.get(I);
            if (ObjetDate_1.GDate.estJourEgal(lDateSaisieAbsence.Date, lDate)) {
              return I;
            }
          }
        }
        return -1;
      }
      setListeRessources(aListeRessources) {
        this.Identification.setListeRessources(aListeRessources);
      }
      getIndiceProgressionSelection() {
        return this._indiceProgressionSelection;
      }
      setIndiceProgressionSelection(aIndice) {
        this._indiceProgressionSelection = aIndice;
      }
      getLibelleImpression(
        aMessage,
        aAvecPeriode,
        aAvecClasse,
        aAvecEleve,
        aAvecMatiere,
        aAvecProfesseur,
      ) {
        let lLibelle = aMessage;
        if (aAvecPeriode) {
          lLibelle +=
            ' (' +
            this.Navigation.getLibelleRessource(
              Enumere_Ressource_1.EGenreRessource.Periode,
            ) +
            ')';
        }
        if (aAvecClasse) {
          let lGenreRessource = this.Navigation.getGenreRessource(
            Enumere_Ressource_1.EGenreRessource.Classe,
          );
          let lLibelleRessource = this.Navigation.getLibelleRessource(
            Enumere_Ressource_1.EGenreRessource.Classe,
          );
          if (lGenreRessource === null || lGenreRessource === undefined) {
            lGenreRessource = Enumere_Ressource_1.EGenreRessource.Classe;
            lLibelleRessource = this.Identification.getLibelleClasse();
          }
          lLibelle +=
            ' / ' +
            (lGenreRessource === Enumere_Ressource_1.EGenreRessource.Classe
              ? 'Classe'
              : 'Groupe') +
            ' : ' +
            lLibelleRessource;
        }
        if (aAvecEleve) {
          let lLibelleEleve = this.Navigation.getLibelleRessource(
            Enumere_Ressource_1.EGenreRessource.Eleve,
          );
          if (lLibelleEleve === null || lLibelleEleve === undefined) {
            lLibelleEleve = this.getMembre().getLibelle();
          }
          lLibelle +=
            ' / ' +
            'Élève' +
            ' : ' +
            lLibelleEleve;
        }
        if (aAvecMatiere) {
          lLibelle +=
            ' / ' +
            'Matière' +
            ' : ' +
            this.Navigation.getLibelleRessource(
              Enumere_Ressource_1.EGenreRessource.Matiere,
            );
        }
        if (aAvecProfesseur) {
          lLibelle +=
            ' / ' +
            'Professeur' +
            ' : ' +
            this.Navigation.getLibelleRessource(
              Enumere_Ressource_1.EGenreRessource.Enseignant,
            );
        }
        return lLibelle;
      }
      avecParametrageWidget() {
        return [
          Enumere_Espace_1.EGenreEspace.Professeur,
          Enumere_Espace_1.EGenreEspace.Etablissement,
          Enumere_Espace_1.EGenreEspace.Administrateur,
          Enumere_Espace_1.EGenreEspace.PrimProfesseur,
          Enumere_Espace_1.EGenreEspace.PrimDirection,
        ].includes(this.GenreEspace);
      }
      setParametres(aParametres) {
        this.parametresSco[this.getGenreOnglet()] = aParametres;
      }
      getParametres() {
        return this.parametresSco[this.getGenreOnglet()];
      }
      getAcces() {
        const lMembre = this.getMembre();
        if (lMembre && lMembre.acces) {
          return lMembre.acces;
        }
        return {
          autorise: true,
          autoriseSurDate: true,
          dateDebut: null,
          dateFin: null,
        };
      }
      setTriListe(aParams) {
        return super.setTriListe(
          $.extend({ onglet: this.getGenreOnglet() }, aParams),
        );
      }
    }
    exports.ObjetEtatUtilisateur_Espace = ObjetEtatUtilisateur_Espace;
  },
  fn: 'objetetatutilisateur_espace.js',
});