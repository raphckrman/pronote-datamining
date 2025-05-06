IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireOAuth2 = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const Invocateur_1 = require('Invocateur');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const UtilitaireOAuth2 = {
      revocation(aIdOAuth2, aCallback) {
        new ObjetRequeteOAuth2Attente()
          .lancerRequete({ idOAuth2: aIdOAuth2, revocation: true })
          .then((aJSON) => {
            if (!!aJSON) {
              GEtatUtilisateur.listeCloud.parcourir((aCloud) => {
                if (!!aCloud.idOAuth2 && aCloud.idOAuth2 === aIdOAuth2) {
                  delete aCloud.idOAuth2;
                }
              });
              GEtatUtilisateur.listeCloudDepotServeur.parcourir((aCloud) => {
                if (!!aCloud.idOAuth2 && aCloud.idOAuth2 === aIdOAuth2) {
                  delete aCloud.idOAuth2;
                }
              });
              aCallback.call(this);
            }
          });
      },
      authentificationPromise(aIdOAuth2) {
        const lIdentAbonnement =
          ObjetRequeteJSON_1.utils.getIdentNotification('tokenOAuth2');
        return new ObjetRequeteOAuth2Attente({})
          .lancerRequete({ idOAuth2: aIdOAuth2 })
          .then((aJSON) => {
            if (aJSON.urlAuthorize) {
              window.open(aJSON.urlAuthorize);
              let lAvecInterruption = true;
              const lPromiseMessage = GApplication.getMessage()
                .afficher({
                  message: 'Veuillez vous connecter sur votre cloud.\n\n%s si votre fenêtre de connexion au cloud ne s'est pas ouverte.\n\nFermer ce message pour annuler la connexion au cloud.',
                      ),
                    ],
                  ).replaceRCToHTML(),
                })
                .then(() => {
                  if (lAvecInterruption) {
                    return new ObjetRequeteOAuth2Attente({}).lancerRequete({
                      interruption: true,
                    });
                  }
                })
                .then(() => {
                  return Promise.reject({ sansMessage: true });
                });
              const lPromiseNotif = new Promise((aResolve, aReject) => {
                Invocateur_1.Invocateur.abonnerUnique(
                  lIdentAbonnement,
                  (aNotif) => {
                    lAvecInterruption = false;
                    if (aNotif && aNotif.ok) {
                      aResolve();
                    } else {
                      aReject(aNotif.message);
                    }
                  },
                );
              });
              return Promise.race([lPromiseMessage, lPromiseNotif]).finally(
                () => {
                  GApplication.getMessage().fermer();
                  Invocateur_1.Invocateur.desabonner(lIdentAbonnement);
                },
              );
            }
            if (!aJSON.ok) {
              return Promise.reject(aJSON.message);
            }
          })
          .catch((aError) => {
            if (aError && aError.sansMessage) {
              return Promise.reject();
            }
            return GApplication.getMessage()
              .afficher({
                message:
                  aError ||
                  'Impossible d'accéder au cloud, veuillez réessayer ultérieurement.',
              })
              .then(() => {
                return Promise.reject();
              });
          });
      },
    };
    exports.UtilitaireOAuth2 = UtilitaireOAuth2;
    class ObjetRequeteOAuth2Attente extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    CollectionRequetes_1.Requetes.inscrire(
      'OAuth2Attente',
      ObjetRequeteOAuth2Attente,
    );
  },
  fn: 'utilitaireoauth2.js',
});