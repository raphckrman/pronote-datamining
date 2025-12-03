IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDonneesCentraleNotifications = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const Invocateur_1 = require('Invocateur');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetFenetre_MessageDynamiqueDemarrage_1 = require('ObjetFenetre_MessageDynamiqueDemarrage');
    var TypeNotif;
    (function (TypeNotif) {
      TypeNotif['surModification'] = 'odcn_surModification';
    })(TypeNotif || (TypeNotif = {}));
    class ObjetDonneesCentraleNotifications {
      constructor() {
        this.nbNotifs = 0;
        this.modeSimulationCompteurNotif = false;
        Invocateur_1.Invocateur.abonner(
          ObjetRequeteJSON_1.utils.getIdentNotification(
            'compteurCentraleNotif',
          ),
          (aCompteur) => {
            this.finSimulationSuppressionNotif(false);
            this.nbNotifs = aCompteur;
            this._notifSurModification({ compteurCentraleNotif: true });
          },
        );
      }
      _notifSurModification(aParams) {
        Invocateur_1.Invocateur.evenement(
          TypeNotif.surModification,
          Object.assign(aParams || {}, this.getDonnees()),
        );
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.refreshIEHtml,
        );
      }
      getDonnees(aParam) {
        return { nbNotifs: this.nbNotifs };
      }
      simulerSuppressionNotif() {
        if (!this.modeSimulationCompteurNotif) {
          this.modeSimulationCompteurNotif = true;
          this.nbNotifs = Math.max(0, this.nbNotifs - 1);
          this._notifSurModification({ masquerNbNotifs: true });
        }
      }
      finSimulationSuppressionNotif(aRollbackSimulation) {
        if (this.modeSimulationCompteurNotif) {
          this.modeSimulationCompteurNotif = false;
          if (aRollbackSimulation) {
            this.nbNotifs = Math.max(0, this.nbNotifs + 1);
            this._notifSurModification({ masquerNbNotifs: true });
          }
        }
      }
      addMessagesDynamiques(aTabMessages) {
        this.listeMessagesDynamiques = [];
        if (aTabMessages && aTabMessages.length > 0 && aTabMessages.forEach) {
          aTabMessages.forEach((aMessage) => {
            if (aMessage && aMessage.id && aMessage.contenu) {
              this.listeMessagesDynamiques.push(aMessage);
            } else {
            }
          });
        }
      }
      initSurInterfaceDisponible() {
        if (
          this.listeMessagesDynamiques &&
          this.listeMessagesDynamiques.length > 0
        ) {
          ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
            ObjetFenetre_MessageDynamiqueDemarrage_1.ObjetFenetre_MessageDynamiqueDemarrage,
            { pere: {} },
            { messages: this.listeMessagesDynamiques },
          ).afficher();
          this.listeMessagesDynamiques = [];
        }
        this._notifSurModification();
      }
    }
    exports.ObjetDonneesCentraleNotifications =
      ObjetDonneesCentraleNotifications;
    ObjetDonneesCentraleNotifications.typeNotif = TypeNotif;
  },
  fn: 'objetdonneescentralenotifications.js',
});