IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireDeconnexion = void 0;
    const Invocateur_1 = require('Invocateur');
    const ObjetRequeteSaisieDeconnexion_1 = require('ObjetRequeteSaisieDeconnexion');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_Action_1 = require('Enumere_Action');
    const ControleSaisieEvenement_1 = require('ControleSaisieEvenement');
    const Enumere_MessageHtml_1 = require('Enumere_MessageHtml');
    const Enumere_MessageHtml_2 = require('Enumere_MessageHtml');
    exports.UtilitaireDeconnexion = {
      async confirmationDeconnexion(aSansPageDeconnexion) {
        return GApplication.getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: 'Confirmez-vous la déconnexion ?',
          })
          .then((aGenreBouton) => {
            if (aGenreBouton === Enumere_Action_1.EGenreAction.Valider) {
              return new Promise((aResolve) => {
                (0, ControleSaisieEvenement_1.ControleSaisieEvenement)(() => {
                  exports.UtilitaireDeconnexion.deconnexion(
                    aSansPageDeconnexion,
                  );
                  aResolve(true);
                });
              });
            } else {
              return false;
            }
          });
      },
      async deconnexion(aSansPageDeconnexion) {
        Invocateur_1.Invocateur.desabonner(
          Invocateur_1.ObjetInvocateur.events.autorisationRechargementPage,
        );
        if (GEtatUtilisateur.reset) {
          GEtatUtilisateur.reset();
        }
        return exports.UtilitaireDeconnexion.requeteDeconnexion().then(() => {
          const lApplicationProduit = GApplication;
          if (aSansPageDeconnexion) {
            window.location.reload();
          } else if (lApplicationProduit.urlLogout) {
            window.location.href = lApplicationProduit.urlLogout;
          } else if (lApplicationProduit.acces.estConnexionCAS()) {
            window.location.href =
              Enumere_MessageHtml_2.EGenreMessageHtmlUtil.construireUrl(
                IE.estMobile
                  ? Enumere_MessageHtml_1.EGenreMessageHtml
                      .deconnexionENT_Mobile
                  : Enumere_MessageHtml_1.EGenreMessageHtml.deconnexionENT,
              );
          } else {
            lApplicationProduit.finSession({
              constructionPage: true,
              statut: 0,
              jsonErreur: { Titre: '', Message: '' },
            });
          }
        });
      },
      async deconnexionEchecChargement() {
        return exports.UtilitaireDeconnexion.requeteDeconnexion().then(() => {
          GApplication.finSession({
            constructionPage: true,
            statut: 0,
            jsonErreur: {
              Titre: '',
              Message: 'Échec lors du chargement de la page',
            },
          });
        });
      },
      async requeteDeconnexion() {
        return new ObjetRequeteSaisieDeconnexion_1.ObjetRequeteSaisieDeconnexion(
          {},
        ).lancerRequete();
      },
    };
  },
  fn: 'utilitairedeconnexion.js',
});