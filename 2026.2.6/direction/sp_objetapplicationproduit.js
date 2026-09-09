IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationProduit = exports.EtatApplication = void 0;
    const tslib_1 = require('tslib');
    const ObjetApplication_1 = require('@cp/script/ObjetApplication');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const ObjetDonneesCentraleNotifications_1 = require('@cp/Produit/Script/ObjetDonneesCentraleNotifications');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const TypeThemeCouleur_1 = require('@cp/script/Theme/TypeThemeCouleur');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const GestionnaireStickyScroll_1 = require('@cp/Produit/Script/GestionnaireStickyScroll');
    require('@cp/Declaration/DeclarationJournauxCP');
    require('@cp/Declaration/DeclarationFontMontserrat');
    require('@librairies/Declaration/DeclarationLottie');
    const pages_connexion_css_1 = require('@cp/Produit/Css/pages_connexion.css');
    var EtatApplication;
    (function (EtatApplication) {
      EtatApplication[(EtatApplication['normal'] = 1)] = 'normal';
      EtatApplication[(EtatApplication['modeExclusif'] = 2)] = 'modeExclusif';
    })(EtatApplication || (exports.EtatApplication = EtatApplication = {}));
    global.GEtatUtilisateur = undefined;
    global.GParametres = undefined;
    if (IE.estMobile) {
      GestionnaireStickyScroll_1.GestionnaireStickyScroll.activer();
    }
    class ObjetApplicationProduit extends ObjetApplication_1.ObjetApplication {
      constructor() {
        super();
        this.estPrimaire = false;
        this.etatApplication = EtatApplication.normal;
        this.communication = null;
        this.estDemo = false;
        this.pileAbonnementInvocateur = {};
        this.interfaceRacine = {};
        this.idLigneSeparateur = GUID_1.GUID.getId();
        this.idLigneBandeau = 'ligne_bandeau';
        this.idBreadcrumb = 'breadcrumbBandeau';
        this.idBreadcrumbPerso = 'breadcrumbBandeauPerso';
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.erreurCommunication,
          this.finSession,
          this,
        );
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.modificationModeExclusif,
          this._setModeExclusif,
          this,
        );
        try {
          this.chargeEniFrame = window.parent && window.parent !== window;
        } catch (error) {
          this.chargeEniFrame = false;
        }
      }
      declarer() {
        super.declarer();
        this.creerCentraleNotifications();
      }
      creerCentraleNotifications() {
        this.donneesCentraleNotifications =
          new ObjetDonneesCentraleNotifications_1.ObjetDonneesCentraleNotifications();
      }
      getEtatUtilisateur() {
        return GEtatUtilisateur;
      }
      getObjetParametres() {
        return GParametres;
      }
      getInterfaceRacine() {
        return this.interfaceRacine;
      }
      getCommunication() {
        return this.communication;
      }
      setCommunication(aInstanceCommunication) {
        this.communication = aInstanceCommunication;
        if (this.communication) {
          this.communication.setNom(this.getNom() + '.getCommunication ()');
        }
        this.sendMessageChargementEniFrame();
      }
      sendMessageChargementEniFrame() {
        var _a;
        try {
          if (this.chargeEniFrame && this.communication) {
            this.communication.sendLogClient(
              `${((_a = this.constructor) === null || _a === void 0 ? void 0 : _a.name) || ''} - Chargé en iframe : ${document.referrer}`,
            );
          }
        } catch (error) {}
      }
      getDemo() {
        return this.estDemo;
      }
      setDemo(aValeur) {
        this.estDemo = aValeur;
      }
      getDateDemo() {
        return this.dateDemo;
      }
      setDateDemo(aDateDemo) {
        this.dateDemo = aDateDemo;
      }
      initDateServeur(aDate) {
        this.dateServeurReferant = aDate;
        this.dateClientReferant = new Date();
      }
      getDateServeur() {
        if (!this.dateServeurReferant || !this.dateClientReferant) {
          return new Date();
        }
        return new Date(
          this.dateServeurReferant.getTime() +
            new Date().getTime() -
            this.dateClientReferant.getTime(),
        );
      }
      getEtatApplication() {
        return this.etatApplication;
      }
      getModeExclusif() {
        return this.getEtatApplication() === EtatApplication.modeExclusif;
      }
      entreeModeExclusif() {
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.modeExclusif,
          true,
        );
      }
      sortieModeExclusif() {
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.modeExclusif,
          false,
        );
      }
      changerEtatApplication(aEtat) {
        switch (this.etatApplication) {
          case EtatApplication.normal:
            switch (aEtat) {
              case EtatApplication.normal:
                break;
              case EtatApplication.modeExclusif:
                this.etatApplication = aEtat;
                this.entreeModeExclusif();
                break;
              default:
            }
            break;
          case EtatApplication.modeExclusif:
            switch (aEtat) {
              case EtatApplication.normal:
                this.etatApplication = aEtat;
                this.sortieModeExclusif();
                break;
              case EtatApplication.modeExclusif:
                break;
              default:
            }
            break;
          default:
        }
      }
      async creerFenetreDebug(aFuncGetTraitement) {}
      getOptionsDebug() {
        return this.optionsDebug;
      }
      getOptionsEspaceLocal() {
        return this.optionsEspaceLocal;
      }
      finSession(aParametres) {
        Invocateur_1.Invocateur.desabonner(
          Invocateur_1.ObjetInvocateur.events.erreurCommunication,
          this,
        );
        const lParametresFin = { constructionPage: false };
        Object.assign(lParametresFin, aParametres);
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.fermerFenetres,
          true,
        );
        Invocateur_1.Invocateur.evenement('finSession');
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.nettoyerJSX,
        );
        Invocateur_1.Invocateur.desabonner(
          Invocateur_1.ObjetInvocateur.events.modificationModeExclusif,
          this,
        );
        $(document).off();
        $(window).off();
        Invocateur_1.Invocateur.desabonner(
          Invocateur_1.ObjetInvocateur.events.autorisationRechargementPage,
        );
        ObjetNavigateur_1.Navigateur.viderCache();
        if (lParametresFin.constructionPage) {
          try {
            this.construirePageFinSession(lParametresFin);
          } catch (e) {
            IE.log.addLog('Exception construirePageFinSession : ' + e);
          }
        }
        this.SESSION_FINI = true;
        if (this.communication) {
          this.communication.arreter();
        }
        this.communication = null;
      }
      construirePageFinSession(aParametres) {
        if (this.unloadEnCours) {
          return;
        }
        const lCouleur = { texte: 'black', fond: 'white', bordure: 'black' };
        if (global.GCouleur) {
          Object.assign(lCouleur, GCouleur);
        }
        const lParametresFin = {
          jsonErreur: undefined,
          statut: '',
          couleur: lCouleur,
          sansBoutonSeConnecter: false,
        };
        Object.assign(lParametresFin, aParametres);
        let lTitre;
        let lMessage;
        let lGenreErreur;
        if (lParametresFin.jsonErreur) {
          lGenreErreur = lParametresFin.jsonErreur.G;
          lTitre = lParametresFin.jsonErreur.Titre;
          lMessage = lParametresFin.jsonErreur.Message;
        }
        lTitre =
          lTitre === null || lTitre === undefined
            ? 'La page que vous recherchez est actuellement indisponible ou inexistante.'
            : lTitre;
        lMessage =
          lMessage === null || lMessage === undefined
            ? 'Impossible d'afficher la page'
            : lMessage;
        const lEstPrimaire = !!this.estPrimaire;
        let lHeader = '';
        try {
          lHeader = this.construireEnTetePageFinSession(lParametresFin);
        } catch (e) {}
        const lHtml = IE.jsx.str(
          'div',
          {
            class: `page-deconnexion ImageFond bg-espace-${!lEstPrimaire ? this.nomProduit.toLowerCase() : `primaire`}`,
          },
          lHeader,
          IE.jsx.str(
            'main',
            {
              class: pages_connexion_css_1.SPages_connexion.decoContent,
              role: 'main',
            },
            IE.jsx.str('h1', {
              class: 'deco-titre-' + this.nomProduitSysteme.toLowerCase(),
              'aria-label': this.nomProduit,
            }),
            IE.jsx.str(
              'p',
              { id: 'waispan_id' },
              'Vous avez été déconnecté',
            ),
            lTitre &&
              IE.jsx.str(
                'p',
                {
                  class:
                    pages_connexion_css_1.SPages_connexion
                      .pageDeconnexion_titre,
                },
                lTitre +
                  (lParametresFin.statut
                    ? ' (' +
                      'Erreur' +
                      ' ' +
                      lParametresFin.statut +
                      ')'
                    : ''),
              ),
            lMessage && IE.jsx.str('p', { class: 'message' }, lMessage),
            () => {
              if (lGenreErreur !== 7 && !lParametresFin.sansBoutonSeConnecter) {
                const lModel = () => ({
                  event() {
                    window.location.reload();
                  },
                });
                return IE.jsx.str(
                  IEHtml_Bouton_1.Bouton,
                  {
                    class: 'themeBoutonPrimaire m-top',
                    'aria-describedby': 'waispan_id',
                    ie_model: lModel,
                  },
                  'Se connecter',
                );
              }
            },
          ),
        );
        ObjetHtml_1.GHtml.setHtml(this.getIdConteneur(), lHtml);
        (0, AccessApp_1.getApp)()
          .getObjetParametres()
          .setDocumentTitle(GlossaireCP_1.TradGlossaireCP.PageDeconnexion);
      }
      construireEnTetePageFinSession(aParametres) {
        return '';
      }
      _setModeExclusif(aEstModeExclusif) {
        this.changerEtatApplication(
          aEstModeExclusif
            ? EtatApplication.modeExclusif
            : EtatApplication.normal,
        );
      }
      getPileAbonnement() {
        return this.pileAbonnementInvocateur;
      }
      getUtilitaireActionContextuelle() {}
      initApp(aParams) {
        var _a, _b, _c, _d;
        this.estAppliMobile = true;
        if (aParams.darkMode) {
          const lModeSombreActive =
            aParams.darkMode === 'sombre' ||
            (aParams.darkMode === 'systeme' &&
              aParams.darkModeSysteme === true);
          (_a = this.getOptionsEspaceLocal()) === null || _a === void 0
            ? void 0
            : _a.setChoixDarkMode(
                lModeSombreActive
                  ? TypeThemeCouleur_1.ChoixDarkMode.sombre
                  : TypeThemeCouleur_1.ChoixDarkMode.clair,
              );
        }
        if (
          (_d =
            (_c =
              (_b =
                window === null || window === void 0
                  ? void 0
                  : window.webkit) === null || _b === void 0
                ? void 0
                : _b.messageHandlers) === null || _c === void 0
              ? void 0
              : _c.cordova_iab) === null || _d === void 0
            ? void 0
            : _d.postMessage
        ) {
          window.open = function (url) {
            window.webkit.messageHandlers.cordova_iab.postMessage(
              JSON.stringify({ action: 'openLink', link: url }),
            );
            return null;
          };
        }
      }
    }
    exports.ObjetApplicationProduit = ObjetApplicationProduit;
    $(document).on(
      'click',
      '*:not(.tab) > a[href][target="_blank"], *:not(.tab) > a[href]:not([target])',
      function (aEvent) {
        var _a, _b, _c, _d;
        if (
          ((_a = global.GApplication) === null || _a === void 0
            ? void 0
            : _a.estAppliMobile) &&
          ((_d =
            (_c =
              (_b =
                window === null || window === void 0
                  ? void 0
                  : window.webkit) === null || _b === void 0
                ? void 0
                : _b.messageHandlers) === null || _c === void 0
              ? void 0
              : _c.cordova_iab) === null || _d === void 0
            ? void 0
            : _d.postMessage)
        ) {
          window.webkit.messageHandlers.cordova_iab.postMessage(
            JSON.stringify({
              action: 'openLink',
              link: aEvent.currentTarget.href,
            }),
          );
          aEvent.preventDefault();
          aEvent.stopImmediatePropagation();
          return false;
        }
      },
    );
  },
  fn: 'objetapplicationproduit.js',
});