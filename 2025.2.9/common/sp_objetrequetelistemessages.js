IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteListeMessages = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const Enumere_Onglet_1 = require('Enumere_Onglet');
    const Invocateur_1 = require('Invocateur');
    class ObjetRequeteListeMessages extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
      lancerRequete(aParametres) {
        const lParametres = $.extend({}, aParametres);
        Object.assign(this.JSON, lParametres);
        this.JSON.marquerCommeLu = aParametres.marquerCommeLu;
        this.JSON.estNonPossede = lParametres.message.estNonPossede;
        lParametres.message.listePossessionsMessages.setSerialisateurJSON({
          ignorerEtatsElements: true,
          nePasTrierPourValidation: true,
          methodeSerialisation: function (aElement) {
            if (aElement.ignorerSerialisation === true) {
              return false;
            }
          },
        });
        this.JSON.listePossessionsMessages =
          lParametres.message.listePossessionsMessages;
        if (
          lParametres.message.estUneDiscussion &&
          lParametres.message.profondeur > 0
        ) {
          this.JSON.estSousDiscussion = true;
        }
        return this.appelAsynchrone();
      }
      actionApresRequete() {
        this.callbackReussite.appel(this.JSONReponse);
        if (this.JSONReponse.nbMarquerLu > 0) {
          Invocateur_1.Invocateur.evenement(
            'modifier_notification_communication',
            Enumere_Onglet_1.EGenreOnglet.Messagerie,
            -this.JSONReponse.nbMarquerLu,
          );
        }
      }
    }
    exports.ObjetRequeteListeMessages = ObjetRequeteListeMessages;
    CollectionRequetes_1.Requetes.inscrire(
      'ListeMessages',
      ObjetRequeteListeMessages,
    );
  },
  fn: 'objetrequetelistemessages.js',
});