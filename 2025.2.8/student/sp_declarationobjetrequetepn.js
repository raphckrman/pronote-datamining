IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetElement_1 = require('ObjetElement');
    const Enumere_Onglet_1 = require('Enumere_Onglet');
    const TypeHttpNotificationDonnes_1 = require('TypeHttpNotificationDonnes');
    const UtilitaireRequetesCloud_1 = require('UtilitaireRequetesCloud');
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const TypesRequeteJSON_1 = require('TypesRequeteJSON');
    ObjetRequeteJSON_1.ObjetRequeteJSON.declarerModules({
      initialiser: function (aFuncInitSignature) {
        if (global.GEtatUtilisateur && GEtatUtilisateur.Identification) {
          const lSignature = {};
          if (GEtatUtilisateur.estEspaceAvecMembre()) {
            const lMembre = GEtatUtilisateur.getMembre();
            if (lMembre) {
              lSignature.membre = new ObjetElement_1.ObjetElement(
                '',
                lMembre.getNumero(),
                lMembre.getGenre(),
              );
            }
          }
          lSignature.onglet =
            GEtatUtilisateur.getGenreOnglet() >= 0 &&
            MethodesObjet_1.MethodesObjet.isNumber(
              GEtatUtilisateur.getGenreOnglet(),
            )
              ? GEtatUtilisateur.getGenreOnglet()
              : Enumere_Onglet_1.EGenreOnglet.GeneralRacine;
          aFuncInitSignature(lSignature);
        }
      },
      deserialiserSignature: function (aJSONSignature) {
        _deserialisationSignatureRequeteConsultSaisie(aJSONSignature);
      },
      factoryModuleUploadCloud: function () {
        return _getModuleUploadCloud();
      },
      deserialiserPolling: function (aJSONSignature, aJSONRacine) {
        Object.assign(
          aJSONSignature,
          aJSONRacine[TypesRequeteJSON_1.ConstantesJSON.Donnees],
        );
        _deserialisationSignature(aJSONSignature);
      },
    });
    function _deserialisationSignatureRequeteConsultSaisie(aJSON) {
      if (aJSON) {
        if (aJSON.ModeExclusif === true || aJSON.ModeExclusif === false) {
          Invocateur_1.Invocateur.evenement(
            Invocateur_1.ObjetInvocateur.events.modificationModeExclusif,
            aJSON.ModeExclusif,
          );
        }
        _deserialisationSignature(aJSON);
      }
    }
    function _deserialisationSignature(aJSON) {
      if (GApplication.droits) {
        GApplication.droits.chargerJSON(aJSON);
      }
      if (aJSON.notificationsCommunication) {
        Invocateur_1.Invocateur.evenement(
          'notification_communication',
          aJSON.notificationsCommunication,
        );
      }
      if (aJSON.actualisationMessage) {
        Invocateur_1.Invocateur.evenement('notification_actualisationMessage');
      }
      if (aJSON.notificationsChatVS) {
        Invocateur_1.Invocateur.evenement(
          'notification_chatVS',
          aJSON.notificationsChatVS,
        );
        Invocateur_1.Invocateur.evenement(
          'notification_actualisationMessage',
          true,
        );
      }
      if (aJSON.notificationsKiosque) {
        Invocateur_1.Invocateur.evenement('notification_Kiosque');
      }
      if (aJSON.notifications) {
        Object.keys(aJSON.notifications).forEach((aCle) => {
          Invocateur_1.Invocateur.evenement(
            ObjetRequeteJSON_1.utils.getIdentNotification(aCle),
            aJSON.notifications[aCle],
          );
        });
      }
      if (aJSON.listeDonnees) {
        const lEtatUtil = GEtatUtilisateur;
        if (!lEtatUtil.listeDonnees) {
          lEtatUtil.listeDonnees = {};
        }
        const lDonnees = {},
          lJSON = aJSON.listeDonnees;
        if (
          lJSON[
            TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes
              .THND_ListeClasseNiveau
          ]
        ) {
          lDonnees[
            TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes.THND_ListeClasseNiveau
          ] =
            lJSON[
              TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes.THND_ListeClasseNiveau
            ];
        }
        if (
          lJSON[
            TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes
              .THND_ListeGroupe
          ]
        ) {
          lDonnees[
            TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes.THND_ListeGroupe
          ] =
            lJSON[
              TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes.THND_ListeGroupe
            ];
        }
        if (
          lJSON[
            TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes
              .THND_ListeProfesseur
          ]
        ) {
          lDonnees[
            TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes.THND_ListeProfesseur
          ] =
            lJSON[
              TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes.THND_ListeProfesseur
            ];
        }
        if (
          lJSON[
            TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes
              .THND_ListeDocJointEtablissement
          ]
        ) {
          lDonnees[
            TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes.THND_ListeDocJointEtablissement
          ] =
            lJSON[
              TypeHttpNotificationDonnes_1.TypeHttpNotificationDonnes.THND_ListeDocJointEtablissement
            ];
        }
        Object.assign(lEtatUtil.listeDonnees, lDonnees);
      }
    }
    function _getModuleUploadCloud() {
      return {
        setListePJs: function (aListe) {
          this.listePJs = aListe;
        },
        actif: function () {
          return (
            this.listePJs && this.listePJs.count && this.listePJs.count() > 0
          );
        },
        lancer: function () {
          const lListePJs = this.listePJs;
          this.listePJs = null;
          return UtilitaireRequetesCloud_1.UtilitaireRequetesCloud.requetePartageListeFichiers(
            lListePJs,
          );
        },
      };
    }
  },
  fn: 'declarationobjetrequetepn.js',
});