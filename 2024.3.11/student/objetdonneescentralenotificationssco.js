IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDonneesCentraleNotificationsSco = void 0;
    const Invocateur_1 = require('Invocateur');
    const ObjetDonneesCentraleNotifications_1 = require('ObjetDonneesCentraleNotifications');
    const TypeStatutConnexion_1 = require('TypeStatutConnexion');
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    class ObjetDonneesCentraleNotificationsSco extends ObjetDonneesCentraleNotifications_1.ObjetDonneesCentraleNotifications {
      constructor(...aParams) {
        super(...aParams);
        this.compteurNotifsParOnglet = {};
        Invocateur_1.Invocateur.abonner(
          'notification_communication',
          (aNotifs) => {
            for (let i = 0; i < aNotifs.length; i++) {
              this.compteurNotifsParOnglet[aNotifs[i].onglet] = aNotifs[i];
            }
            this._notifSurModification({ notification_communication: true });
          },
          this,
        );
        Invocateur_1.Invocateur.abonner(
          'modifier_notification_communication',
          (aGenreOnglet, aModificateur) => {
            if (aModificateur === 0) {
              return;
            }
            if (!this.compteurNotifsParOnglet[aGenreOnglet]) {
              this.compteurNotifsParOnglet[aGenreOnglet] = {
                nb: 0,
                onglet: aGenreOnglet,
              };
            }
            this.compteurNotifsParOnglet[aGenreOnglet].nb =
              (this.compteurNotifsParOnglet[aGenreOnglet].nb || 0) +
              aModificateur;
            this.nbNotifs += aModificateur;
            this._notifSurModification({
              modifier_notification_communication: true,
            });
          },
          this,
        );
        Invocateur_1.Invocateur.abonnerUnique(
          'notification_chatVS',
          (aListe) => {
            this.listeNotifsChatVS = aListe;
          },
        );
        this.nbConversationEnCours = 0;
        Invocateur_1.Invocateur.abonner(
          'modifier_nb_conversationEnCours',
          (aNb) => {
            this.nbConversationEnCours = aNb;
            this._notifSurModification();
          },
          this,
        );
        this.statutConnexionCommunication =
          TypeStatutConnexion_1.TypeGenreStatutConnexion.GSC_Deconnecte;
        Invocateur_1.Invocateur.abonner(
          ObjetRequeteJSON_1.utils.getIdentNotification('statutConnexion'),
          (aStatut) => {
            this.statutConnexionCommunication = aStatut;
          },
        );
      }
      _notifSurModification(aParams) {
        super._notifSurModification(aParams);
      }
      getDonnees(...aParams) {
        return Object.assign(
          {},
          {
            compteurNotifsParOnglet: this.compteurNotifsParOnglet,
            nbConversationEnCours: this.nbConversationEnCours,
          },
          super.getDonnees(...aParams),
        );
      }
    }
    exports.ObjetDonneesCentraleNotificationsSco =
      ObjetDonneesCentraleNotificationsSco;
  },
  fn: 'objetdonneescentralenotificationssco.js',
});