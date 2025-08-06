IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplicationProduit = exports.EtatApplication = void 0;
    const ObjetApplication_1 = require('ObjetApplication');
    const GUID_1 = require('GUID');
    const Invocateur_1 = require('Invocateur');
    const ObjetDonneesCentraleNotifications_1 = require('ObjetDonneesCentraleNotifications');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetHtml_1 = require('ObjetHtml');
    require('DeclarationJournauxCP.js');
    require('DeclarationFontMontserrat.js');
    require('DeclarationLottie');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const GlossaireCP_1 = require('GlossaireCP');
    const AccessApp_1 = require('AccessApp');
    const TypeThemeCouleur_1 = require('TypeThemeCouleur');
    var EtatApplication;
    (function (EtatApplication) {
      EtatApplication[(EtatApplication['normal'] = 1)] = 'normal';
      EtatApplication[(EtatApplication['modeExclusif'] = 2)] = 'modeExclusif';
    })(EtatApplication || (exports.EtatApplication = EtatApplication = {}));
    global.GEtatUtilisateur = undefined;
    global.GParametres = undefined;
    global.GInterface = undefined;
    class ObjetApplicationProduit extends ObjetApplication_1.ObjetApplication {
      constructor() {
        super();
        this.donneesCentraleNotifications =
          new ObjetDonneesCentraleNotifications_1.ObjetDonneesCentraleNotifications();
        this.estPrimaire = false;
        this.etatApplication = EtatApplication.normal;
        this.communication = null;
        this.estDemo = false;
        this.pileAbonnementInvocateur = {};
        this.idLigneSeparateur = GUID_1.GUID.getId();
        this.idLigneBandeau = 'ligne_bandeau';
        this.idBandeau = GUID_1.GUID.getId();
        this.idBreadcrumbCombo = 'breadcrumbBandeauCombo';
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
      getEtatUtilisateur() {
        return GEtatUtilisateur;
      }
      getObjetParametres() {
        return GParametres;
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
          jsonErreur: null,
          statut: '',
          couleur: lCouleur,
          sansBoutonSeConnecter: false,
        };
        Object.assign(lParametresFin, aParametres);
        let lTitre = null;
        let lMessage = null,
          lGenreErreur;
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
        const T = [];
        T.push(
          `<div class="page-deconnexion ImageFond bg-espace-${!lEstPrimaire ? '' : `primaire`}">`,
        );
        try {
          T.push(this.construireEnTetePageFinSession(lParametresFin));
        } catch (e) {}
        T.push(`<div class="deco-content" role="main">`);
        T.push(
          IE.jsx.str('h1', {
            class: `deco-titre-${!lEstPrimaire ? this.nomProduit.toLowerCase() : `primaire`}`,
            'aria-label': this.nomProduit,
          }),
        );
        T.push(
          `<p id="waispan_id">${'Vous avez été déconnecté'}</p>`,
        );
        if (lTitre) {
          T.push(
            '<p class="pageDeconnexion_titre">' +
              lTitre +
              (lParametresFin.statut
                ? ' (' +
                  'Erreur' +
                  ' ' +
                  lParametresFin.statut +
                  ')'
                : '') +
              '</p>',
          );
        }
        if (lMessage) {
          T.push(IE.jsx.str('p', { class: 'message' }, lMessage));
        }
        if (lGenreErreur !== 7 && !lParametresFin.sansBoutonSeConnecter) {
          const lModel = () => {
            return {
              event() {
                window.location.reload();
              },
            };
          };
          T.push(
            IE.jsx.str(
              'ie-bouton',
              {
                class: 'themeBoutonPrimaire m-top',
                'aria-describedby': 'waispan_id',
                'ie-model': lModel,
              },
              'Se connecter',
            ),
          );
        }
        T.push(`</div>`);
        ObjetHtml_1.GHtml.setHtml(this.getIdConteneur(), T.join(''));
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
      initApp(aParams) {
        var _a, _b, _c;
        this.estAppliMobile = true;
        if (aParams.darkMode) {
          const lModeSombreActive =
            aParams.darkMode === 'sombre' ||
            (aParams.darkMode === 'systeme' &&
              aParams.darkModeSysteme === true);
          this.getOptionsEspaceLocal().setChoixDarkMode(
            lModeSombreActive
              ? TypeThemeCouleur_1.ChoixDarkMode.sombre
              : TypeThemeCouleur_1.ChoixDarkMode.clair,
          );
        }
        if (
          (_c =
            (_b =
              (_a =
                window === null || window === void 0
                  ? void 0
                  : window.webkit) === null || _a === void 0
                ? void 0
                : _a.messageHandlers) === null || _b === void 0
              ? void 0
              : _b.cordova_iab) === null || _c === void 0
            ? void 0
            : _c.postMessage
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