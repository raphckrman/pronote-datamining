IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationScoEspace = void 0;
    const tslib_1 = require('tslib');
    require('@librairies/script/Divers/NamespaceIE');
    require('@librairies/Declaration/DeclarationJQuery');
    require('@scolys/espace/declaration/DeclarationPagesErreurSco');
    require('@cp/Produit/Css/general/Divers.css');
    require('@scolys/espace/declaration/DeclarationGeogebra');
    require('@cp/images/Themes/scss/Theme_Modele.css');
    require('@cp/Produit/Css/SurFocus.css');
    require('@cp/Espace/Css/communEspace.css');
    require('@scolys/espace/css/Page.css');
    require('@cp/Espace/Css/Widget.css');
    require('@cp/Produit/Script/ObjetNavigateur');
    const ObjetApplicationSco_1 = require('@scolys/produit/script/ObjetApplicationSco');
    require('@scolys/espace/script/Parametres');
    const DeferLoadingScript_1 = require('@librairies/script/Divers/DeferLoadingScript');
    const CommunicationProduit_1 = require('@cp/script/Communication/CommunicationProduit');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const TypeGenreOngletInternet_1 = require('@scolys/produit/script/enumere/TypeGenreOngletInternet');
    const UtilitaireDeconnexion_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireDeconnexion');
    require('@cp/tiny/DeclarationTinyInitEspacesDefer');
    const InterfaceConnexionEspace_1 = require('@scolys/espace/script/InterfaceConnexionEspace');
    const ObjetEtatUtilisateur_Professeur_1 = require('@scolys/espace/script/ObjetEtatUtilisateur.Professeur');
    const ObjetEtatUtilisateur_Eleve_1 = require('@scolys/espace/script/ObjetEtatUtilisateur.Eleve');
    const ObjetEtatUtilisateur_Personnel_1 = require('@scolys/espace/script/ObjetEtatUtilisateur.Personnel');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const CookieAnnonce_1 = require('@cp/Produit/Script/CookieAnnonce');
    class ObjetApplicationScoEspace extends ObjetApplicationSco_1.ObjetApplicationSco {
      constructor() {
        super();
      }
      getEtatUtilisateur() {
        return GEtatUtilisateur;
      }
      getInterfaceRacine() {
        return this.interfaceRacine;
      }
      _getInterfaceConnexion() {
        return this.interfaceRacine;
      }
      initialisation(aParametres) {
        var _a;
        const lPageInscription =
          '?page={"Onglet":' +
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_InscriptionEtablissement +
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
            case Enumere_Espace_1.TypeGenreEspace.Espace_Inscription:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateur_Professeur_1.ObjetEtatUtilisateurProfesseur;
              break;
            case Enumere_Espace_1.TypeGenreEspace.Espace_Parent:
            case Enumere_Espace_1.TypeGenreEspace.Espace_Eleve:
            case Enumere_Espace_1.TypeGenreEspace.Espace_Entreprise:
            case Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent:
            case Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateur_Eleve_1.ObjetEtatUtilisateurEleve;
              break;
            case Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur:
            case Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant:
            case Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateur_Eleve_1.ObjetEtatUtilisateurEleve;
              break;
            case Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement:
            case Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur:
            case Enumere_Espace_1.TypeGenreEspace.Espace_PrimPeriscolaire:
            case Enumere_Espace_1.TypeGenreEspace.Espace_PrimMairie:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateur_Personnel_1.ObjetEtatUtilisateurPersonnel;
              break;
            case Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection:
            case Enumere_Espace_1.TypeGenreEspace.Espace_Professeur:
            case Enumere_Espace_1.TypeGenreEspace.Espace_Academie:
            case Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur:
              lClassEtatUtilisateur =
                ObjetEtatUtilisateur_Professeur_1.ObjetEtatUtilisateurProfesseur;
              break;
            default:
          }
          global.GEtatUtilisateur = new lClassEtatUtilisateur(
            aParametres.genreEspace,
          );
          global.GEtatUtilisateur.premierChargement = true;
        } catch (e) {
          (_a = global.IE) === null || _a === void 0
            ? void 0
            : _a.sendLogFailStart(
                aParametres.numeroSession,
                'Erreur sur initialisation de "GCommunication"',
              );
        }
      }
      async initialisationApresParametres(aParametres) {
        super.initialisationApresParametres(aParametres);
        this.getEtatUtilisateur().initialiser();
        this.interfaceRacine =
          new InterfaceConnexionEspace_1.InterfaceConnexionEspace({
            estRacine: true,
          });
        this._getInterfaceConnexion().initialiser();
        if (this.acces.estConnexionCAS() || this.acces.estConnexionCookie()) {
          this._getInterfaceConnexion().traiterEvenementValidation(
            this.acces.utilisateur.identifiant,
            this.acces.utilisateur.password,
            true,
          );
        } else if (
          !this.getDemo() &&
          GEtatUtilisateur.GenreEspace !==
            Enumere_Espace_1.TypeGenreEspace.Espace_Commun &&
          this.optionsDebug &&
          this.optionsDebug.identificationAuto &&
          this.optionsDebug.getLogin() &&
          this.optionsDebug.getMdp()
        ) {
          this._getInterfaceConnexion().traiterEvenementValidation(
            this.optionsDebug.getLogin(),
            this.optionsDebug.getMdp(),
          );
          IE.log.addLog('Tentative connexion automatique DEBUG');
        }
        CookieAnnonce_1.CookieAnnonce.afficher();
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
        var _a, _b;
        try {
          (_b =
            (_a = this._getInterfaceConnexion()) === null || _a === void 0
              ? void 0
              : _a.free) === null || _b === void 0
            ? void 0
            : _b.call(_a);
          const MultiObjetInterfaceEspace = await Promise.resolve().then(() =>
            tslib_1.__importStar(
              require('@scolys/espace/script/InterfaceEspace'),
            ),
          );
          if (!MultiObjetInterfaceEspace) {
            throw new Error(
              `Erreur await import('@scolys/espace/script/InterfaceEspace')`,
            );
          }
          this.declarationOnglets = await this.createDeclarationOnglets();
          this.interfaceRacine = new MultiObjetInterfaceEspace.InterfaceEspace({
            estRacine: true,
          });
          this.getInterfaceRacine().setDonnees(
            aParametres.libelle,
            aParametres.listeRessource,
          );
          this.getCommunication().activerPolling();
          if (this.avecGestionModeExclusif()) {
            if (this.getModeExclusif()) {
              this.entreeModeExclusif();
            }
          }
          this.getInterfaceRacine().focusAuDebut();
        } catch (e) {
          this.getCommunication().sendLogClient('apresAuthentification/' + e);
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