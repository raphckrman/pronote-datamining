IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetParametres = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetCycles_1 = require('@cp/script/ObjetCycles');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ThemesCouleurs_1 = require('@cp/script/Theme/ThemesCouleurs');
    const TypeDomaine_1 = require('@cp/script/Type/TypeDomaine');
    const TypeNote_1 = require('@cp/script/Type/TypeNote');
    const Enumere_DomaineFrequence_1 = require('@scolys/espace/script/enumere/Enumere_DomaineFrequence');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const Enumere_PeriodeDeNotation_1 = require('@scolys/produit/script/enumere/Enumere_PeriodeDeNotation');
    const TypeThemeCouleur_1 = require('@cp/script/Theme/TypeThemeCouleur');
    const ObjetParametresCP_1 = require('@cp/script/ObjetParametresCP');
    const ObjetCouleur_1 = require('@scolys/espace/script/ObjetCouleur');
    const TypeCollectivite_1 = require('@scolys/produit/script/enumere/TypeCollectivite');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const UtilitaireTelephone_1 = require('@cp/script/UtilitaireTelephone');
    global.GParametres = null;
    class ObjetParametres extends ObjetParametresCP_1.ObjetParametresCP {
      constructor(aJSON) {
        var _a, _b, _c, _d, _e, _f, _g;
        super();
        this.estAfficheDansENT = false;
        this.version = '';
        this.versionPN = '';
        this.millesime = '';
        this.nomProduit = '';
        this.urlAccesTwitter = '';
        this.urlCanope = '';
        this.avecChoixConnexion = false;
        this.numeroPremiereSemaine = 0;
        this.PremierJourSemaine = 0;
        this.DernierJourSemaine = 0;
        this.listeJoursFeries = new ObjetListeElements_1.ObjetListeElements();
        this.PlacesParHeure = 0;
        this.DureeSequence = 0;
        this.PlaceDemiJournee = 0;
        this.saisirAbsencesParDJ = 0;
        this.joursOuvresParCycle = 0;
        this.grillesEDTEnCycle = 0;
        this.activationDemiPension = false;
        this.debutDemiPension = 0;
        this.finDemiPension = 0;
        this.LibellesHeures = new ObjetListeElements_1.ObjetListeElements();
        this.LibellesHeuresFin = new ObjetListeElements_1.ObjetListeElements();
        this.LibellesHeuresFinPourVS =
          new ObjetListeElements_1.ObjetListeElements();
        this.afficherSequences = false;
        this.ActivationMessagerieEntreParents = false;
        this.GestionParcoursExcellence = false;
        this.activerBlog = false;
        this.NomEspace = '';
        this.listeComboPeriodes = new ObjetListeElements_1.ObjetListeElements();
        this.tailleMaxAppreciation = [];
        this.nbJDecalageDatePublicationParDefautDevoirEval = 0;
        this.nbJDecalagePublicationAuxParents = 0;
        this.avecAffichageDecalagePublicationNotesAuxParents = false;
        this.avecAffichageDecalagePublicationEvalsAuxParents = false;
        this.tailleLibelleElementGrilleCompetence = 0;
        this.tailleCommentaireDevoir = 0;
        this.tailleMaxLibelleUrlCours = 0;
        this.tailleMaxCommentaireUrlCours = 0;
        this.avecRecuperationInfosConnexion = false;
        this.parentAutoriseChangerMDP = false;
        this.avecElevesRattaches = false;
        this.nomCookieAppli = '';
        this.application = (0, AccessApp_1.getApp)();
        this.application.initDateServeur(aJSON.DateServeurHttp);
        this.application.setDateDemo(aJSON.DateDemo);
        if (aJSON.urlLogout) {
          this.application.urlLogout = aJSON.urlLogout;
        }
        this.avecMembre = aJSON.avecMembre;
        this.pourNouvelleCaledonie = aJSON.pourNouvelleCaledonie;
        this.genreImageConnexion = aJSON.genreImageConnexion;
        this.urlImageConnexion = aJSON.urlImageConnexion;
        this.urlFondEcran =
          (_a = aJSON.urlFondEcran) !== null && _a !== void 0 ? _a : '';
        this.avecAccesMobile = aJSON.AvecEspaceMobile;
        this.URLMobile =
          (_b = aJSON.URLMobile) !== null && _b !== void 0 ? _b : '';
        this.URLEspace =
          (_c = aJSON.URLEspace) !== null && _c !== void 0 ? _c : '';
        this.logoProduitCss = aJSON.logoProduitCss;
        this.listePolices = aJSON.listePolices;
        this.PageEtablissement = aJSON.PageEtablissement;
        this.estAfficheDansENT =
          (_d = aJSON.estAfficheDansENT) !== null && _d !== void 0 ? _d : false;
        const lJGeneral = (this.general = aJSON.General);
        this.version = lJGeneral.version;
        this.versionPN = lJGeneral.versionPN;
        this.millesime = lJGeneral.millesime;
        this.nomProduit = lJGeneral.nomProduit;
        this.langue = lJGeneral.langue;
        this.langID = lJGeneral.langID;
        this.listeLangues = lJGeneral.listeLangues;
        this.publierMentions = lJGeneral.publierMentions;
        this.estHebergeEnFrance = lJGeneral.estHebergeEnFrance;
        this.urlSiteIndexEducation = lJGeneral.urlSiteIndexEducation;
        this.urlInfosHebergement = lJGeneral.urlSiteInfosHebergement;
        this.urlAide = lJGeneral.UrlAide;
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
        this.afficherSequences = lJGeneral.afficherSequences;
        this.sequences = lJGeneral.sequences;
        this.ActivationMessagerieEntreParents =
          lJGeneral.ActivationMessagerieEntreParents;
        this.GestionParcoursExcellence = lJGeneral.GestionParcoursExcellence;
        this.activerBlog = lJGeneral.activerBlog;
        this.NomEtablissement = lJGeneral.NomEtablissement;
        this.NomEtablissementConnexion = lJGeneral.NomEtablissementConnexion;
        this.NomEspace = (_e = aJSON.Nom) !== null && _e !== void 0 ? _e : '';
        this.listeComboPeriodes = lJGeneral.listeComboPeriodes;
        this.listeAnneesPrecedentes = lJGeneral.listeAnneesPrecedentes;
        this.tailleMaxAppreciation =
          (_f = lJGeneral.TailleMaxAppreciation) !== null && _f !== void 0
            ? _f
            : [];
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
        if (lJGeneral.heurePublicationObservationEspaceParents) {
          this.heurePublicationObservationEspaceParents =
            lJGeneral.heurePublicationObservationEspaceParents;
        }
        this.listeNiveauxDAcquisitions = lJGeneral.ListeNiveauxDAcquisitions;
        this.afficherAbbreviationNiveauDAcquisition =
          lJGeneral.AfficherAbbreviationNiveauDAcquisition;
        this.avecRecuperationInfosConnexion =
          lJGeneral.AvecRecuperationInfosConnexion;
        this.parentAutoriseChangerMDP = !!lJGeneral.parentAutoriseChangerMDP;
        this.avecElevesRattaches = lJGeneral.AvecElevesRattaches;
        this.collectivite = lJGeneral.Collectivite;
        this.publicationSuiviStageParDefaut = !!lJGeneral.publicationSuiviStage;
        if (lJGeneral.maskTelephone) {
          UtilitaireTelephone_1.UtilitaireTelephone.setMaskTelephone(
            lJGeneral.maskTelephone,
          );
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
        this.nomCookieAppli =
          (_g = lJGeneral.nomCookieAppli) !== null && _g !== void 0 ? _g : '';
        if (
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.TypeGenreEspace.Espace_Inscription &&
          aJSON.infosInscription
        ) {
          this.infosInscription = aJSON.infosInscription;
        }
        this.mentionsPagesPubliques = aJSON.mentionsPagesPubliques;
        this.aideContextuelle = null;
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
        if (aJSON.versionAppliMobile) {
          this.versionAppliMobile = aJSON.versionAppliMobile;
        }
        if (aJSON.derniereVersionAppliMobile) {
          this.derniereVersionAppliMobile = aJSON.derniereVersionAppliMobile;
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
            Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
            Enumere_Espace_1.TypeGenreEspace.Espace_Inscription,
            Enumere_Espace_1.TypeGenreEspace.Espace_Eleve,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve,
            Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant,
            Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur,
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