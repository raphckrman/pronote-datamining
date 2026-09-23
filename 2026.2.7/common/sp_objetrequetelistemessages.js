IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteListeMessages = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    const TypeGenreOngletInternet_1 = require('@scolys/produit/script/enumere/TypeGenreOngletInternet');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
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
            TypeGenreOngletInternet_1.TypeGenreOngletInternet.Onglet_Messagerie,
            -this.JSONReponse.nbMarquerLu,
          );
        }
      }
    }
    exports.ObjetRequeteListeMessages = ObjetRequeteListeMessages;
    ObjetRequeteListeMessages.inscrire('ListeMessages');
  },
  fn: 'objetrequetelistemessages.js',
});