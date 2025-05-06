IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteRecupIdMDP = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetCryptage_1 = require('ObjetCryptage');
    const ObjetTraduction_1 = require('ObjetTraduction');
    class ObjetRequeteRecupIdMDP extends ObjetRequeteJSON_1.ObjetRequeteSaisie {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({
          afficherMessageErreur: false,
          messageDetail: 'Enregistrement en cours',
          messageEchecModeExclusif: 'la récupération de votre identifiant / mot de passe n'est pas possible en mode consultation',
        });
      }
      lancerRequete(aObjet) {
        const lEtape = aObjet.etape;
        const lEstCreation = aObjet.estCreation;
        const lCourriel = aObjet.courriel;
        const lNom = aObjet.nom;
        const lPrenom = aObjet.prenom;
        delete aObjet.etape;
        delete aObjet.nom;
        delete aObjet.prenom;
        this.JSON.etape = lEtape;
        if (lEstCreation) {
          this.JSON.estCreation = lEstCreation;
          if (lEtape === 3) {
            this.JSON.courriel = lCourriel;
            delete aObjet.courriel;
          }
          this.JSON.nom = lNom;
          this.JSON.prenom = lPrenom;
        }
        this.JSON.donnee =
          lEtape === 3
            ? ObjetCryptage_1.GCryptage.cryptageRSA.encrypter2048(
                new forge.util.ByteBuffer(JSON.stringify(aObjet)),
              )
            : JSON.stringify(aObjet);
        return this.appelAsynchrone();
      }
      traiterReponseSaisieMessage(
        aMessagesErreurRapportSaisie,
        aReponse,
        aTitre,
      ) {
        super.traiterReponseSaisieMessage(
          aMessagesErreurRapportSaisie,
          aReponse,
          aTitre,
        );
        if (this.messageErreur) {
          this.messageErreur.titre = aTitre;
        }
      }
      actionApresRequete(aGenreReponse) {
        const lResult = Object.assign(
          {
            requeteReussite:
              aGenreReponse === ObjetRequeteJSON_1.EGenreReponseSaisie.succes,
            JSONSignature: this.JSONSignature,
            messageErreur: this.messageErreur,
          },
          this.JSONReponse,
        );
        lResult.estEchec = this.JSONReponse.estEchec !== false;
        GEtatUtilisateur.setReglesSaisieMotDePasse(this.JSONReponse);
        this.callbackReussite.appel(lResult);
      }
    }
    exports.ObjetRequeteRecupIdMDP = ObjetRequeteRecupIdMDP;
    CollectionRequetes_1.Requetes.inscrire(
      'RecupererInfosConnexion',
      ObjetRequeteRecupIdMDP,
    );
  },
  fn: 'objetrequeterecupidmdp.js',
});