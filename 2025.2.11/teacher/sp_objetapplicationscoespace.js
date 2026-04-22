IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationScoEspace = void 0;
    require('NamespaceIE.js');
    require('DeclarationJQuery.js');
    require('DeclarationPagesErreurSco.js');
    require('DeclarationCurseurPN.js');
    require('DeclarationGeogebra.js');
    require('Theme_Modele.css');
    require('Couleurs.css');
    require('Divers.css');
    require('Styles.css');
    require('Texte.css');
    require('SurFocus.css');
    require('communEspace.css');
    require('Page.css');
    require('Widget.css');
    require('ObjetNavigateur.js');
    const ObjetApplicationSco_1 = require('ObjetApplicationSco');
    require('Parametres.js');
    const DeferLoadingScript_1 = require('DeferLoadingScript');
    const CommunicationProduit_1 = require('CommunicationProduit');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const Enumere_Onglet_1 = require('Enumere_Onglet');
    const UtilitaireMenuContextuelNatif_1 = require('UtilitaireMenuContextuelNatif');
    const UtilitaireDeconnexion_1 = require('UtilitaireDeconnexion');
    require('DeclarationTinyInitEspacesDefer.js');
    const InterfaceConnexionEspace_1 = require('InterfaceConnexionEspace');
    const ObjetEtatUtilisateurInscription = require('ObjetEtatUtilisateur.Professeur.js');
    const ObjetEtatUtilisateurEleve = require('ObjetEtatUtilisateur.Eleve.js');
    const ObjetEtatUtilisateurAccomp = require('ObjetEtatUtilisateur.Eleve.js');
    const ObjetEtatUtilisateurPersonnel = require('ObjetEtatUtilisateur.Personnel.js');
    const ObjetEtatUtilisateurProf = require('ObjetEtatUtilisateur.Professeur.js');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    class ObjetApplicationScoEspace extends ObjetApplicationSco_1.ObjetApplicationSco {
      constructor() {
        super();
      }
      getEtatUtilisateur() {
        return GEtatUtilisateur;
      }
      getInterfaceEspace() {
        return GInterface;
      }
      initialisation(aParametres) {
        UtilitaireMenuContextuelNatif_1.UtilitaireMenuContextuelNatif.desactiverSurElement(
          $(document),
        );
        const lPageInscription =
          '?page={"Onglet":' +
          Enumere_Onglet_1.EGenreOnglet.InscriptionsEtablissement +
          '}';
        if (decodeURI(window.location.search) === lPageInscription) {
          const lpage = window.location.pathname;
          history.replaceState(null, '', lpage);
        }
        try {
          this.setCommunication(
            new CommunicationProduit_1.CommunicationProduit(
              aParametres.genreEspace,
              aParametres.numeroSession,
            ),
          );
          let lClassEtatUtilisateur = null;
          switch (aParametres.genreEspace) {
            case Enumere_Espace_1.EGenreEspace.Inscription:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateurInscription.ObjetEtatUtilisateurProfesseur;
              break;
            case Enumere_Espace_1.EGenreEspace.Parent:
            case Enumere_Espace_1.EGenreEspace.Eleve:
            case Enumere_Espace_1.EGenreEspace.Entreprise:
            case Enumere_Espace_1.EGenreEspace.PrimParent:
            case Enumere_Espace_1.EGenreEspace.PrimEleve:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateurEleve.ObjetEtatUtilisateurEleve;
              break;
            case Enumere_Espace_1.EGenreEspace.Tuteur:
            case Enumere_Espace_1.EGenreEspace.Accompagnant:
            case Enumere_Espace_1.EGenreEspace.PrimAccompagnant:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateurAccomp.ObjetEtatUtilisateurEleve;
              break;
            case Enumere_Espace_1.EGenreEspace.Etablissement:
            case Enumere_Espace_1.EGenreEspace.Administrateur:
            case Enumere_Espace_1.EGenreEspace.PrimPeriscolaire:
            case Enumere_Espace_1.EGenreEspace.PrimMairie:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateurPersonnel.ObjetEtatUtilisateurPersonnel;
              break;
            case Enumere_Espace_1.EGenreEspace.PrimDirection:
            case Enumere_Espace_1.EGenreEspace.Professeur:
            case Enumere_Espace_1.EGenreEspace.Academie:
            case Enumere_Espace_1.EGenreEspace.PrimProfesseur:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateurProf.ObjetEtatUtilisateurProfesseur;
              break;
            default:
          }
          global.GEtatUtilisateur = new lClassEtatUtilisateur(
            aParametres.genreEspace,
          );
          global.GEtatUtilisateur.premierChargement = true;
        } catch (e) {
          window.messageErreur('Erreur sur initialisation de "GCommunication"');
        }
      }
      async initialisationApresParametres(aParametres) {
        super.initialisationApresParametres(aParametres);
        this.getEtatUtilisateur().initialiser();
        const lInterface = (global.GInterface =
          new InterfaceConnexionEspace_1.InterfaceConnexionEspace({
            nomComplet: 'GInterface',
            estRacine: true,
          }));
        lInterface.initialiser();
        if (this.acces.estConnexionCAS() || this.acces.estConnexionCookie()) {
          lInterface.traiterEvenementValidation(
            this.acces.utilisateur.identifiant,
            this.acces.utilisateur.password,
            true,
          );
        } else if (
          !this.getDemo() &&
          GEtatUtilisateur.GenreEspace !==
            Enumere_Espace_1.EGenreEspace.Commun &&
          this.optionsDebug &&
          this.optionsDebug.identificationAuto &&
          this.optionsDebug.getLogin() &&
          this.optionsDebug.getMdp()
        ) {
          lInterface.traiterEvenementValidation(
            this.optionsDebug.getLogin(),
            this.optionsDebug.getMdp(),
          );
          IE.log.addLog('Tentative connexion automatique DEBUG');
        }
        await DeferLoadingScript_1.deferLoadingScript.loadAsync(['defer'], {
          eventIO: false,
        });
        this._finLoadingScript();
      }
      afficherEspaceApresAuthentification(aParametres) {
        if (this._scriptsCharges) {
          this._afficherEspaceApresAuthentification(aParametres);
        } else {
          this._authentification = aParametres;
          if (!DeferLoadingScript_1.deferLoadingScript.afficherPatience()) {
            this._afficherEspaceApresAuthentification(aParametres);
          }
        }
      }
      _finLoadingScript() {
        this._scriptsCharges = true;
        if (this._authentification) {
          this._afficherEspaceApresAuthentification(this._authentification);
        }
      }
      async _afficherEspaceApresAuthentification(aParametres) {
        try {
          if (GInterface && GInterface.free) {
            GInterface.free();
          }
          const MultiObjetInterfaceEspace = await Promise.resolve().then(() =>
            require('InterfaceEspace'),
          );
          if (!MultiObjetInterfaceEspace) {
            throw new Error(`Erreur await import('InterfaceEspace')`);
          }
          const lInterfaceEspace = (GInterface =
            new MultiObjetInterfaceEspace.ObjetInterfaceEspace({
              nomComplet: 'GInterface',
              estRacine: true,
            }));
          lInterfaceEspace.setDonnees(
            aParametres.libelle,
            aParametres.listeRessource,
          );
          this.getCommunication().activerPolling();
          if (this.avecGestionModeExclusif()) {
            if (this.getModeExclusif()) {
              this.entreeModeExclusif();
            }
          }
          lInterfaceEspace.focusAuDebut();
        } catch (e) {
          if (window.messageErreur) {
            window.messageErreur('apresAuthentification/' + e);
          }
          UtilitaireDeconnexion_1.UtilitaireDeconnexion.deconnexionEchecChargement();
        }
        if (aParametres.message) {
          GApplication.getMessage().afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
            message: aParametres.message,
          });
        }
      }
    }
    exports.ObjetApplicationScoEspace = ObjetApplicationScoEspace;
  },
  fn: 'objetapplicationscoespace.js',
});