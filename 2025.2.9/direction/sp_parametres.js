IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetParametres = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetCycles_1 = require('ObjetCycles');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ThemesCouleurs_1 = require('ThemesCouleurs');
    const TypeDomaine_1 = require('TypeDomaine');
    const TypeNote_1 = require('TypeNote');
    const Enumere_DomaineFrequence_1 = require('Enumere_DomaineFrequence');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const Enumere_PeriodeDeNotation_1 = require('Enumere_PeriodeDeNotation');
    const TypeThemeCouleur_1 = require('TypeThemeCouleur');
    const ObjetParametresCP_1 = require('ObjetParametresCP');
    const ObjetCouleur_1 = require('ObjetCouleur');
    const TypeCollectivite_1 = require('TypeCollectivite');
    global.GParametres = null;
    class ObjetParametres extends ObjetParametresCP_1.ObjetParametresCP {
      constructor(aJSON) {
        var _a;
        super();
        this.application = GApplication;
        this.application.initDateServeur(aJSON.DateServeurHttp);
        this.application.setDateDemo(aJSON.DateDemo);
        if (aJSON.urlLogout) {
          this.application.urlLogout = aJSON.urlLogout;
        }
        this.avecMembre = aJSON.avecMembre;
        this.pourNouvelleCaledonie = aJSON.pourNouvelleCaledonie;
        this.genreImageConnexion = aJSON.genreImageConnexion;
        this.urlImageConnexion = aJSON.urlImageConnexion;
        this.urlFondEcran = aJSON.urlFondEcran;
        this.avecAccesMobile = aJSON.AvecEspaceMobile;
        this.URLMobile = aJSON.URLMobile;
        this.URLEspace = aJSON.URLEspace;
        this.logoProduitCss = aJSON.logoProduitCss;
        this.listeCivilites = aJSON.listeCivilites;
        this.listePays = aJSON.listePays;
        this.listeLienParente = aJSON.listeLienParente;
        this.listeMatieres = aJSON.listeMatieres;
        this.listeOrientations = aJSON.listeOrientations;
        this.listeVilles = aJSON.listeVilles;
        this.listeRegimes = aJSON.listeRegimes;
        this.listeEtablissements = aJSON.listeEtablissements;
        this.listeSituations = aJSON.listeSituations;
        this.listeProfessions = aJSON.listeProfessions;
        this.listeSessionsInscriptions = aJSON.listeSessionsInscriptions;
        this.listePolices = aJSON.listePolices;
        this.PageEtablissement = aJSON.PageEtablissement;
        this.estAfficheDansENT =
          (_a = aJSON.estAfficheDansENT) !== null && _a !== void 0 ? _a : false;
        const lJGeneral = (this.general = aJSON.General);
        this.version = lJGeneral.version;
        this.versionPN = lJGeneral.versionPN;
        this.millesime = lJGeneral.millesime;
        this.nomProduit = lJGeneral.nomProduit;
        this.langue = lJGeneral.langue;
        this.langID = lJGeneral.langID;
        this.listeLangues = lJGeneral.listeLangues;
        this.publierMentions = lJGeneral.publierMentions;
        this.avecForum = lJGeneral.avecForum;
        this.estHebergeEnFrance = lJGeneral.estHebergeEnFrance;
        this.urlSiteIndexEducation = lJGeneral.urlSiteIndexEducation;
        this.urlInfosHebergement = lJGeneral.urlSiteInfosHebergement;
        this.urlAide = lJGeneral.UrlAide;
        this.urlAccesVideos = lJGeneral.urlAccesVideos;
        this.urlAccesTwitter = lJGeneral.urlAccesTwitter;
        this.urlFAQEnregistrementDoubleAuth =
          lJGeneral.urlFAQEnregistrementDoubleAuth;
        this.urlTutoVideoSecurite = lJGeneral.urlTutoVideoSecurite;
        this.urlTutoEnregistrerAppareils =
          lJGeneral.urlTutoEnregistrerAppareils;
        this.urlCanope = lJGeneral.urlCanope;
        this.urlDeclarationAccessibilite =
          lJGeneral.urlDeclarationAccessibilite;
        this.accessibiliteNonConforme = lJGeneral.accessibiliteNonConforme;
        this.urlConfidentialite = aJSON.urlConfidentialite;
        this.labelLienProduit = aJSON.labelLienProduit;
        this.urlLogo = lJGeneral.urlLogo;
        this.logoDepartementImage = lJGeneral.logoDepartementImage;
        this.logoDepartementLien = lJGeneral.logoDepartementLien;
        this.avecChoixConnexion = lJGeneral.AvecChoixConnexion;
        this.numeroPremiereSemaine = lJGeneral.numeroPremiereSemaine;
        this.anneeScolaire = lJGeneral.AnneeScolaire;
        this.dateDebutPremierCycle = lJGeneral.dateDebutPremierCycle;
        this.PremierLundi = lJGeneral.PremierLundi;
        this.PremiereDate = lJGeneral.PremiereDate;
        this.DerniereDate = lJGeneral.DerniereDate;
        this.PremierJourSemaine = ObjetDate_1.GDate.getJourDeDate(
          this.PremierLundi,
        );
        this.DernierJourSemaine = (this.PremierJourSemaine + 6) % 7;
        this.listeJoursFeries = lJGeneral.listeJoursFeries;
        this.JourOuvre = lJGeneral.JourOuvre;
        this.JoursOuvres = lJGeneral.JoursOuvres;
        this.DemiJourneesOuvrees = lJGeneral.DemiJourneesOuvrees;
        this.joursDemiPension = lJGeneral.JoursDemiPension;
        this.JoursFeries = this.getJoursFeries();
        this.PlacesParJour = lJGeneral.PlacesParJour;
        this.PlacesParHeure = lJGeneral.PlacesParHeure;
        this.DureeSequence = lJGeneral.DureeSequence;
        this.PlaceDemiJournee = lJGeneral.PlaceDemiJourneeAbsence;
        this.saisirAbsencesParDJ = lJGeneral.saisirAbsencesParDJ;
        this.joursOuvresParCycle = lJGeneral.joursOuvresParCycle;
        this.premierJourSemaine = lJGeneral.premierJourSemaine;
        this.grillesEDTEnCycle = lJGeneral.grillesEDTEnCycle;
        this.setOfJoursCycleOuvre = lJGeneral.setOfJoursCycleOuvre;
        this.activationDemiPension = lJGeneral.activationDemiPension;
        this.debutDemiPension = lJGeneral.debutDemiPension;
        this.finDemiPension = lJGeneral.finDemiPension;
        this.recreations = lJGeneral.recreations;
        this.AvecHeuresPleinesApresMidi = lJGeneral.AvecHeuresPleinesApresMidi;
        this.LibellesHeures = lJGeneral.ListeHeures;
        this.LibellesHeuresFin = lJGeneral.ListeHeuresFin;
        this.LibellesHeuresFinPourVS = lJGeneral.ListeHeuresFinPourVS;
        this.PremiereHeure = lJGeneral.PremiereHeure;
        this.afficherSequences = lJGeneral.afficherSequences;
        this.sequences = lJGeneral.sequences;
        this.ActivationMessagerieEntreParents =
          lJGeneral.ActivationMessagerieEntreParents;
        this.GestionParcoursExcellence = lJGeneral.GestionParcoursExcellence;
        this.activerBlog = lJGeneral.activerBlog;
        this.NomEtablissement = lJGeneral.NomEtablissement;
        this.NomEtablissementConnexion = lJGeneral.NomEtablissementConnexion;
        this.NomEspace = aJSON.Nom;
        this.listeComboPeriodes = lJGeneral.listeComboPeriodes;
        this.listeAnneesPrecedentes = lJGeneral.listeAnneesPrecedentes;
        this.tailleMaxAppreciation = lJGeneral.TailleMaxAppreciation;
        this.baremeNotation = lJGeneral.BaremeNotation;
        if (TypeNote_1.TypeNote) {
          TypeNote_1.TypeNote.baremeNotation = this.baremeNotation;
        }
        this.baremeMaxDevoirs = lJGeneral.BaremeMaxDevoirs;
        this.nbJDecalageDatePublicationParDefautDevoirEval =
          lJGeneral.NbJDecalageDatePublicationParDefaut || 0;
        this.nbJDecalagePublicationAuxParents =
          lJGeneral.NbJDecalagePublicationAuxParents || 0;
        this.avecAffichageDecalagePublicationNotesAuxParents =
          !!lJGeneral.AvecAffichageDecalagePublicationNotesAuxParents;
        this.avecAffichageDecalagePublicationEvalsAuxParents =
          !!lJGeneral.AvecAffichageDecalagePublicationEvalsAuxParents;
        if (TypeNote_1.TypeNote) {
          TypeNote_1.TypeNote.listeAnnotationsAutorisees =
            lJGeneral.listeAnnotationsAutorisees;
        }
        this.minBaremeQuestionQCM = lJGeneral.minBaremeQuestionQCM;
        this.maxBaremeQuestionQCM = lJGeneral.maxBaremeQuestionQCM;
        this.maxNombrePointsQCM = lJGeneral.maxNbPointQCM;
        this.maxNiveauQCM = lJGeneral.maxNiveauQCM;
        this.tailleLibelleElementGrilleCompetence =
          lJGeneral.tailleLibelleElementGrilleCompetence;
        this.tailleCommentaireDevoir = lJGeneral.tailleCommentaireDevoir;
        this.tailleMaxLibelleUrlCours = lJGeneral.tailleLibelleUrlCours;
        this.tailleMaxCommentaireUrlCours = lJGeneral.tailleCommentaireUrlCours;
        this.listeNiveauxDAcquisitions = lJGeneral.ListeNiveauxDAcquisitions;
        this.afficherAbbreviationNiveauDAcquisition =
          lJGeneral.AfficherAbbreviationNiveauDAcquisition;
        this.avecEvaluationHistorique = lJGeneral.AvecEvaluationHistorique;
        this.avecRecuperationInfosConnexion =
          lJGeneral.AvecRecuperationInfosConnexion;
        this.parentAutoriseChangerMDP = !!lJGeneral.parentAutoriseChangerMDP;
        this.avecElevesRattaches = lJGeneral.AvecElevesRattaches;
        this.police = lJGeneral.Police;
        this.taillePolice = lJGeneral.TaillePolice + 'px';
        this.collectivite = lJGeneral.Collectivite;
        this.publicationSuiviStageParDefaut = !!lJGeneral.publicationSuiviStage;
        if (lJGeneral.maskTelephone) {
          ObjetChaine_1.GChaine.maskTelephone = lJGeneral.maskTelephone;
        }
        const lDomainesFrequences = lJGeneral.DomainesFrequences;
        const lLibellesFrequences = lJGeneral.LibellesFrequences;
        this.frequences = null;
        if (!this.application.getEtatUtilisateur().pourPrimaire()) {
          this.frequences = [];
          for (
            let lNumeroSemaine = 1;
            lNumeroSemaine <= ObjetCycles_1.ObjetCycles.C_MaxDomaineCycle;
            lNumeroSemaine++
          ) {
            this.frequences[lNumeroSemaine] = {};
            for (const lKey of MethodesObjet_1.MethodesObjet.enumKeys(
              Enumere_DomaineFrequence_1.EGenreDomaineFrequence,
            )) {
              const lGenre =
                Enumere_DomaineFrequence_1.EGenreDomaineFrequence[lKey];
              if (
                lGenre ===
                  Enumere_DomaineFrequence_1.EGenreDomaineFrequence.QZ1 ||
                lGenre === Enumere_DomaineFrequence_1.EGenreDomaineFrequence.QZ2
              ) {
                if (lDomainesFrequences[lGenre].getValeur(lNumeroSemaine)) {
                  this.frequences[lNumeroSemaine].genre = lGenre;
                  this.frequences[lNumeroSemaine].libelle =
                    lLibellesFrequences[lGenre];
                }
              }
            }
          }
        }
        this.initialiserCouleur();
        this.listePeriodes =
          new ObjetListeElements_1.ObjetListeElements().fromJSON(
            lJGeneral.ListePeriodes,
            this._ajouterPeriode,
          );
        this.nomCookieAppli = lJGeneral.nomCookieAppli;
        if (
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.EGenreEspace.Inscription &&
          aJSON.infosInscription
        ) {
          this.infosInscription = aJSON.infosInscription;
        }
        this.mentionsPagesPubliques = aJSON.mentionsPagesPubliques;
        this.aideContextuelle = false;
        if (lJGeneral.aideContextuelle) {
          this.aideContextuelle = lJGeneral.aideContextuelle;
          this.aideContextuelle.getNombreDeGenreOnglet = function (aGenre) {
            let lResult = 0;
            let lAccessor;
            if (MethodesObjet_1.MethodesObjet.isNumber(aGenre)) {
              lAccessor = aGenre.toString();
            } else if (MethodesObjet_1.MethodesObjet.isString(aGenre)) {
              lAccessor = aGenre;
            }
            if (lAccessor !== undefined) {
              lResult = this[lAccessor];
              if (lResult === undefined) {
                lResult = 0;
              }
            }
            return lResult;
          };
        }
        if (aJSON.tableauVersion) {
          this.tableauVersion = aJSON.tableauVersion;
        }
      }
      getLibelleHeure(aPlace) {
        try {
          return this.LibellesHeures.getLibelle(aPlace);
        } catch (e) {
          return '';
        }
      }
      initAuthentification(aParam) {
        this.domaineVerrou = aParam.domaineVerrou
          ? aParam.domaineVerrou
          : new TypeDomaine_1.TypeDomaine();
        if (aParam.avecMembre !== undefined) {
          this.avecMembre = aParam.avecMembre;
        }
      }
      initialiserCouleur() {
        var _a, _b;
        this.themeParDefaut = this.application.estEDT
          ? TypeThemeCouleur_1.TypeThemeProduit.EDT
          : TypeThemeCouleur_1.TypeThemeProduit.Pronote;
        if (
          (this === null || this === void 0 ? void 0 : this.collectivite) &&
          Object.values(TypeCollectivite_1.TypeCollectivite).includes(
            (_a =
              this === null || this === void 0 ? void 0 : this.collectivite) ===
              null || _a === void 0
              ? void 0
              : _a.genreCollectivite,
          ) &&
          ((_b =
            this === null || this === void 0 ? void 0 : this.collectivite) ===
            null || _b === void 0
            ? void 0
            : _b.genreCollectivite) !==
            TypeCollectivite_1.TypeCollectivite.TCL_Aucune
        ) {
          const lThemeCollectivite = (0,
          TypeCollectivite_1.TypeCollectiviteToTypeThemeCollectivite)(
            this.collectivite.genreCollectivite,
          );
          if (lThemeCollectivite) {
            this.themeParDefaut = lThemeCollectivite;
          }
        }
        ThemesCouleurs_1.ThemesCouleurs.setTheme(this.themeParDefaut);
        global.GCouleur = new ObjetCouleur_1.ObjetCouleur(
          ![
            Enumere_Espace_1.EGenreEspace.Parent,
            Enumere_Espace_1.EGenreEspace.Inscription,
            Enumere_Espace_1.EGenreEspace.Eleve,
            Enumere_Espace_1.EGenreEspace.PrimParent,
            Enumere_Espace_1.EGenreEspace.PrimEleve,
            Enumere_Espace_1.EGenreEspace.Accompagnant,
            Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
            Enumere_Espace_1.EGenreEspace.Tuteur,
          ].includes(GEtatUtilisateur.GenreEspace),
        );
      }
      getNomEspace() {
        return this.NomEspace;
      }
      getCookieValidationAppli() {
        return this.nomCookieAppli;
      }
      getJoursFeries() {
        const lJoursFeries = new TypeDomaine_1.TypeDomaine(
          null,
          ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
            this.dateDebutPremierCycle,
            this.DerniereDate,
          ) + 1,
        );
        for (let I = 0; I < this.listeJoursFeries.count(); I++) {
          const lJourFerie = this.listeJoursFeries.get(I);
          lJoursFeries.setValeur(
            true,
            ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
              this.dateDebutPremierCycle,
              lJourFerie.dateDebut,
            ) + 1,
            ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
              this.dateDebutPremierCycle,
              lJourFerie.dateFin,
            ) + 1,
          );
        }
        return lJoursFeries;
      }
      getDomaineCycleFerie() {
        if (!this.domaineCycleFerie) {
          this.domaineCycleFerie = new TypeDomaine_1.TypeDomaine();
          let LSemaineFeriee;
          const lNombreCycles = IE.Cycles.nombreCyclesAnneeScolaire();
          const lNombreJoursCycle = IE.Cycles.nombreJoursOuvresParCycle();
          for (let lCycle = 1; lCycle <= lNombreCycles; lCycle += 1) {
            LSemaineFeriee = true;
            for (
              let lJourCycle = 0;
              lJourCycle < lNombreJoursCycle && LSemaineFeriee;
              lJourCycle += 1
            ) {
              const lJourAnnuel = ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
                this.dateDebutPremierCycle,
                IE.Cycles.jourCycleEnDate(lJourCycle, lCycle),
              );
              LSemaineFeriee = this.JoursFeries.getValeur(lJourAnnuel + 1);
            }
            this.domaineCycleFerie.setValeur(LSemaineFeriee, lCycle);
          }
        }
        return this.domaineCycleFerie;
      }
      getTailleMaxAppreciationParEnumere(aGenre) {
        let lTailleMaxAppreciation = 255;
        if (aGenre !== null) {
          lTailleMaxAppreciation = this.tailleMaxAppreciation[aGenre];
        }
        return lTailleMaxAppreciation ? lTailleMaxAppreciation : 1000000;
      }
      _ajouterPeriode(aJSON, aElement) {
        aElement.periodeNotation = aJSON.periodeNotation;
        aElement.dates = { debut: aJSON.dateDebut, fin: aJSON.dateFin };
      }
      getDatesPeriodeDeNotation(aNumeroPeriode) {
        const lPeriode = this.listePeriodes.getElementParNumero(aNumeroPeriode);
        return lPeriode ? lPeriode.dates : null;
      }
      getDateDansPeriodeDeNotation(aDate, aNumeroPeriode) {
        const lDates = this.getDatesPeriodeDeNotation(aNumeroPeriode);
        const lDate = aDate ? aDate : ObjetDate_1.GDate.getDateCourante();
        if (lDates && lDate > lDates.fin) {
          return lDates.fin;
        }
        if (lDates && lDate < lDates.debut) {
          return lDates.debut;
        }
        return lDate;
      }
      getPeriodeDeNotation(aNumeroPeriode) {
        const lPeriode = this.listePeriodes.getElementParNumero(aNumeroPeriode);
        return lPeriode ? lPeriode.periodeNotation : null;
      }
      getPeriodeDeNotationParGenre(aGenrePeriodeDeNotation) {
        for (let i = 0; i < this.listePeriodes.count(); i++) {
          const lPeriode = this.listePeriodes.get(i);
          if (aGenrePeriodeDeNotation === lPeriode.periodeNotation) {
            return lPeriode;
          }
        }
      }
      estPeriodeTrimestrielle(aNumeroPeriode) {
        return Enumere_PeriodeDeNotation_1.EGenrePeriodeDeNotationUtil.estTrimestrielle(
          this.getPeriodeDeNotation(aNumeroPeriode),
        );
      }
      estPeriodeSemestrielle(aNumeroPeriode) {
        return Enumere_PeriodeDeNotation_1.EGenrePeriodeDeNotationUtil.estSemestrielle(
          this.getPeriodeDeNotation(aNumeroPeriode),
        );
      }
      estPeriodeAnnuelle(aNumeroPeriode) {
        return Enumere_PeriodeDeNotation_1.EGenrePeriodeDeNotationUtil.estAnnuelle(
          this.getPeriodeDeNotation(aNumeroPeriode),
        );
      }
      estPeriodeOfficielle(aNumeroPeriode) {
        return Enumere_PeriodeDeNotation_1.EGenrePeriodeDeNotationUtil.estOfficielle(
          this.getPeriodeDeNotation(aNumeroPeriode),
        );
      }
      getListeComboPeriodes(aGenres) {
        if (!aGenres) {
          return this.listeComboPeriodes;
        }
        const lListePeriodes = new ObjetListeElements_1.ObjetListeElements();
        for (let I = 0; I < this.listeComboPeriodes.count(); I++) {
          const lPeriode = this.listeComboPeriodes.get(I);
          if (aGenres.includes(lPeriode.getGenre())) {
            lListePeriodes.addElement(lPeriode);
          }
        }
        return lListePeriodes;
      }
      setDocumentTitle(aLibelleOnglet) {
        const lLibelleOnglet = aLibelleOnglet ? aLibelleOnglet + ' - ' : '';
        const lLibelleProduit =
          this.nomProduit + (this.versionPN ? ' ' + this.versionPN : '');
        document.title = `${lLibelleOnglet}${this.NomEspace} - ${lLibelleProduit} - ${this.NomEtablissementConnexion}`;
      }
    }
    exports.ObjetParametres = ObjetParametres;
  },
  fn: 'parametres.js',
});