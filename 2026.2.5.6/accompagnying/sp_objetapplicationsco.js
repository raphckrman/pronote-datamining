IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationSco = void 0;
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const ObjetRequeteFonctionParametres_1 = require('@scolys/produit/script/requete/ObjetRequeteFonctionParametres');
    const Parametres_1 = require('@scolys/espace/script/Parametres');
    const DeferLoadingScript_1 = require('@librairies/script/Divers/DeferLoadingScript');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const ObjetCycles_1 = require('@cp/script/ObjetCycles');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const TypeEnsembleNombre_1 = require('@cp/script/Type/TypeEnsembleNombre');
    const ObjetAccesPN_1 = require('@scolys/produit/script/ObjetAccesPN');
    const ObjetOptionsEspaceLocalPN_1 = require('@scolys/espace/script/ObjetOptionsEspaceLocalPN');
    const TypeModeGrillesEDT_1 = require('@scolys/produit/script/enumere/TypeModeGrillesEDT');
    const ObjetApplicationProduit_1 = require('@cp/script/ObjetApplicationProduit');
    const UtilitaireMAJServeur_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireMAJServeur');
    const ObjetDonneesCentraleNotificationsSco_1 = require('@scolys/produit/script/ObjetDonneesCentraleNotificationsSco');
    const UtilitaireDeconnexion_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireDeconnexion');
    const ObjetParametresUtilisateur_1 = require('@scolys/produit/script/ObjetParametresUtilisateur');
    require('@scolys/produit/script/requete/DeclarationObjetRequetePN');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const UtilitaireActionContextuelle_1 = require('@scolys/espace/script/professeur/UtilitaireActionContextuelle');
    const UtilitaireJsPdf_1 = require('@cp/Mobile/Script/UtilitaireJsPdf');
    class ObjetApplicationSco extends ObjetApplicationProduit_1.ObjetApplicationProduit {
      constructor() {
        super();
        this.nomProduit = 'PRONOTE';
        if (this.chargeEniFrame) {
          window.parent.postMessage('OK', '*');
        }
      }
      declarer() {
        super.declarer();
        UtilitaireJsPdf_1.UtilitaireJsPdf.declarer(this);
      }
      creerCentraleNotifications() {
        this.donneesCentraleNotifications =
          new ObjetDonneesCentraleNotificationsSco_1.ObjetDonneesCentraleNotificationsSco();
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
        try {
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
            lParametres.numeroJeton,
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
            fail: (aNom) => {
              this.getCommunication().sendLogClient(
                `erreur chargement script defer : ${aNom}`,
              );
              UtilitaireDeconnexion_1.UtilitaireDeconnexion.deconnexionEchecChargement();
            },
            messageChargement: 'Chargement',
          });
          this.initialisation(lParametres);
          this.lancerRequeteParametres(lParametres);
          let lNomProduitSysteme = 'pronote';
          if (this.getEtatUtilisateur().pourPrimaire()) {
            lNomProduitSysteme = 'primaire';
          }
          this.nomProduitSysteme = lNomProduitSysteme;
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
        } catch (e) {
          this.getCommunication().sendLogClient(
            `Exception ObjetApplicationSco.lancer - ${e}`,
          );
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
        var _a, _b;
        (_b =
          (_a = (0, AccessApp_1.getApp)().getInterfaceRacine()) === null ||
          _a === void 0
            ? void 0
            : _a.free) === null || _b === void 0
          ? void 0
          : _b.call(_a);
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
      }
      construireEnTetePageFinSession(aParametres) {
        const T = [];
        const lGParametres = GParametres;
        if (
          window.GParametres &&
          (lGParametres.NomEspace || lGParametres.NomEtablissementConnexion)
        ) {
          T.push(
            IE.jsx.str(
              'header',
              { role: 'banner' },
              lGParametres.NomEspace
                ? IE.jsx.str('h1', null, lGParametres.NomEspace)
                : '',
              lGParametres.NomEtablissementConnexion
                ? IE.jsx.str('h2', null, lGParametres.NomEtablissementConnexion)
                : '',
            ),
          );
        }
        return T.join('');
      }
      getUtilitaireActionContextuelle() {
        return new UtilitaireActionContextuelle_1.UtilitaireActionContextuelle();
      }
    }
    exports.ObjetApplicationSco = ObjetApplicationSco;
  },
  fn: 'objetapplicationsco.js',
});