IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationSco = void 0;
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const ObjetRequeteFonctionParametres_1 = require('ObjetRequeteFonctionParametres');
    const Parametres_1 = require('Parametres');
    const DeferLoadingScript_1 = require('DeferLoadingScript');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const ObjetCycles_1 = require('ObjetCycles');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const ObjetAccesPN_1 = require('ObjetAccesPN');
    const ObjetOptionsEspaceLocalPN_1 = require('ObjetOptionsEspaceLocalPN');
    const TypeModeGrillesEDT_1 = require('TypeModeGrillesEDT');
    const ObjetApplicationProduit_1 = require('ObjetApplicationProduit');
    const UtilitaireMAJServeur_1 = require('UtilitaireMAJServeur');
    const ObjetDonneesCentraleNotificationsSco_1 = require('ObjetDonneesCentraleNotificationsSco');
    const UtilitaireDeconnexion_1 = require('UtilitaireDeconnexion');
    const ObjetParametresUtilisateur_1 = require('ObjetParametresUtilisateur');
    const AccessApp_1 = require('AccessApp');
    require('DeclarationObjetRequetePN.js');
    class ObjetApplicationSco extends ObjetApplicationProduit_1.ObjetApplicationProduit {
      constructor() {
        super();
        this.nomProduit = 'PRONOTE';
        this.donneesCentraleNotifications =
          new ObjetDonneesCentraleNotificationsSco_1.ObjetDonneesCentraleNotificationsSco();
        if (this.chargeEniFrame) {
          window.parent.postMessage('OK', '*');
        }
      }
      getEtatUtilisateur() {
        return GEtatUtilisateur;
      }
      getObjetParametres() {
        return GParametres;
      }
      getCouleur() {
        return GCouleur;
      }
      lancer(aParam) {
        this.setDemo(!!aParam.d);
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.initChiffrement,
          aParam,
        );
        const lParametres = {
          genreEspace: aParam.a,
          numeroJeton: aParam.e ? aParam.e : -1,
          cleJeton: aParam.f ? aParam.f : '',
          genreAcces: aParam.g ? aParam.g : 0,
          numeroSession: aParam.h,
          forcerInscription: aParam.fi,
          page: aParam.p,
        };
        this.acces = new ObjetAccesPN_1.ObjetAccesPN(
          lParametres.genreAcces,
          lParametres.genreEspace,
          0,
          0,
          lParametres.numeroJeton,
          0,
        );
        if (this.acces.estConnexionCAS() || this.acces.estConnexionCookie()) {
          this.acces.setIdentification(
            lParametres.numeroJeton,
            lParametres.cleJeton,
          );
        }
        this.droits = new ObjetDroitsPN_1.ObjetDroitsPN();
        this.parametresUtilisateur =
          new ObjetParametresUtilisateur_1.ObjetParametresUtilisateur();
        this.optionsEspaceLocal =
          new ObjetOptionsEspaceLocalPN_1.ObjetOptionsEspaceLocalPN({
            nomProduit: this.nomProduit,
            espace: lParametres.genreEspace,
          });
        DeferLoadingScript_1.deferLoadingScript.setOptions({
          done() {},
          fail(aNom) {
            (0, AccessApp_1.getApp)()
              .getCommunication()
              .sendLogClient(`erreur chargement script defer : ${aNom}`);
            UtilitaireDeconnexion_1.UtilitaireDeconnexion.deconnexionEchecChargement();
          },
          messageChargement: 'Chargement',
        });
        this.initialisation(lParametres);
        this.lancerRequeteParametres(lParametres);
        UtilitaireMAJServeur_1.UtilitaireMAJServeur.initialiser({
          afficherMessageDelaiLong:
            !this.getEtatUtilisateur().estEspacePourEleve(),
          afficherMessageImminentEleve:
            this.getEtatUtilisateur().estEspacePourEleve(),
          cssImage: this.getEtatUtilisateur().pourPrimaire()
            ? 'Image_AlerteMiseAJourPRM'
            : 'Image_AlerteMiseAJourPRN',
        });
        if (aParam.fi) {
          this.getEtatUtilisateur().forcerOngletInscription = true;
        }
        if (this.optionsEspaceLocal) {
          if (this.optionsEspaceLocal.getAvecCodeCompetences) {
            this.getEtatUtilisateur().setAvecCodeCompetences(
              this.optionsEspaceLocal.getAvecCodeCompetences(),
            );
          }
        }
      }
      initialisation(aParametres) {}
      lancerRequeteParametres(aParametres) {
        new ObjetRequeteFonctionParametres_1.ObjetRequeteFonctionParametres(
          this,
        )
          .lancerRequete({
            uuidRSA: this.getCommunication().serialiserIVAESPourSeveur(),
          })
          .then((aJSON) => {
            try {
              GParametres = new Parametres_1.ObjetParametres(aJSON);
              this.initialisationApresParametres(aParametres);
            } catch (e) {
              alert('Erreur : ' + e.message);
            }
          });
        this.getCommunication().setIvAES();
      }
      initialisationApresParametres(aParametres) {
        function _surUnload() {
          this.getCommunication().desactiverPolling();
        }
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.surRechargementPage,
          _surUnload.bind(this),
        );
        const lGParametres = GParametres;
        ObjetDate_1.GDate.setDonnees(
          lGParametres.PremierLundi,
          lGParametres.PremiereDate,
          lGParametres.DerniereDate,
          lGParametres.PlacesParJour,
          lGParametres.PlacesParHeure,
          lGParametres.DureeSequence,
          lGParametres.PremiereHeure,
          lGParametres.LibellesHeures,
          lGParametres.LibellesHeuresFin,
          lGParametres.JoursOuvres,
        );
        let lJourFerie;
        let lIndiceJour;
        lGParametres.ensembleJoursFeries =
          new TypeEnsembleNombre_1.TypeEnsembleNombre();
        for (
          let I = 0, lNb = lGParametres.listeJoursFeries.count();
          I < lNb;
          I++
        ) {
          lJourFerie = lGParametres.listeJoursFeries.get(I);
          for (
            lIndiceJour = ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
              lGParametres.dateDebutPremierCycle,
              lJourFerie.dateDebut,
            );
            lIndiceJour <=
            ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
              lGParametres.dateDebutPremierCycle,
              lJourFerie.dateFin,
            );
            lIndiceJour++
          ) {
            lGParametres.ensembleJoursFeries.add(lIndiceJour + 1);
          }
        }
        IE.Cycles = new ObjetCycles_1.ObjetCycles();
        IE.Cycles.init({
          premiereDate: lGParametres.PremiereDate,
          derniereDate: lGParametres.DerniereDate,
          dateDebutPremierCycle: lGParametres.dateDebutPremierCycle,
          joursOuvresParCycle: lGParametres.joursOuvresParCycle,
          premierJourSemaine: lGParametres.premierJourSemaine,
          joursOuvres: lGParametres.setOfJoursCycleOuvre,
          cyclesSansFeries:
            lGParametres.grillesEDTEnCycle ===
            TypeModeGrillesEDT_1.TypeModeGrillesEDT.TMG_CycleSansFeries,
          cyclesHebdomadaire:
            lGParametres.grillesEDTEnCycle ===
            TypeModeGrillesEDT_1.TypeModeGrillesEDT.TMG_CycleHebdomadaire,
          joursFeries: lGParametres.ensembleJoursFeries,
        });
      }
      initAuthentification(aParam) {
        this.parametresUtilisateurBase = aParam.parametresUtilisateurBase;
        if (aParam.parametresUtilisateur) {
          this.parametresUtilisateur.chargerJSON(aParam.parametresUtilisateur);
        }
        this.droits.chargerJSON(aParam);
      }
      destructionInterface() {
        if (window.GInterface && GInterface.free) {
          GInterface.free();
        }
      }
      getJeton(aFrames) {
        let lJeton;
        for (let i = 0; i < aFrames.length && !lJeton; i++) {
          try {
            lJeton = aFrames[i].frames[0].GJeton;
          } catch (e) {}
          try {
            if (!lJeton && aFrames[i].frames.length > 0) {
              lJeton = this.getJeton(aFrames[i].frames);
            }
          } catch (e) {}
        }
        return lJeton;
      }
      avecGestionModeExclusif() {
        return this.getEtatUtilisateur().Identification;
      }
      entreeModeExclusif() {
        if (!this.avecGestionModeExclusif()) {
          return;
        }
        super.entreeModeExclusif();
        const lEtatUtilisateur = this.getEtatUtilisateur();
        const lEstEspaceParentEleve =
          lEtatUtilisateur.estEspaceEleve() ||
          lEtatUtilisateur.estEspaceParent();
        const lTitreModeExclusif = lEstEspaceParentEleve
          ? 'Maintenance en cours'
          : 'Usage exclusif';
        const lMessageModeExclusif = lEstEspaceParentEleve
          ? 'Des opérations de maintenance sont réalisées par la direction de l'établissement. Seule la consultation des données est possible, vous ne pouvez pas effectuer de saisie.'
          : 'Des opérations doivent être effectuées sur la base de données. Vous êtes temporairement mis en mode consultation.';
        this.getMessage().afficher({
          type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
          titre: lTitreModeExclusif,
          message: lMessageModeExclusif,
          delaiFermeture: true,
        });
      }
      sortieModeExclusif() {
        if (!this.avecGestionModeExclusif()) {
          return;
        }
        super.sortieModeExclusif();
        const lEtatUtilisateur = this.getEtatUtilisateur();
        const lEstEspaceParentEleve =
          lEtatUtilisateur.estEspaceEleve() ||
          lEtatUtilisateur.estEspaceParent();
        const lTitreModeExclusif = lEstEspaceParentEleve
          ? 'Maintenance terminée'
          : 'Usage exclusif';
        const lMessageModeExclusif = lEstEspaceParentEleve
          ? 'Les opérations de maintenance sont terminées, vous pouvez à nouveau effectuer des saisies. Merci de votre patience'
          : 'L'administrateur a terminé ses opérations sur la base. Cette dernière va être mise à jour et vous allez retrouver vos droits.';
        this.getMessage().afficher({
          type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
          titre: lTitreModeExclusif,
          message: lMessageModeExclusif,
          delaiFermeture: true,
        });
      }
      finSession(aParametres) {
        this.getCommunication().desactiverPolling();
        this.destructionInterface();
        super.finSession(aParametres);
        global.GInterface = null;
      }
      construireEnTetePageFinSession(aParametres) {
        const T = [];
        const lGParametres = GParametres;
        if (
          window.GParametres &&
          (lGParametres.NomEspace || lGParametres.NomEtablissementConnexion)
        ) {
          T.push('<header>');
          if (lGParametres.NomEspace) {
            T.push('<h1>', lGParametres.NomEspace, '</h1>');
          }
          if (lGParametres.NomEtablissementConnexion) {
            T.push('<h2>', lGParametres.NomEtablissementConnexion, '</h2>');
          }
          T.push('</header>');
        }
        return T.join('');
      }
    }
    exports.ObjetApplicationSco = ObjetApplicationSco;
  },
  fn: 'objetapplicationsco.js',
});