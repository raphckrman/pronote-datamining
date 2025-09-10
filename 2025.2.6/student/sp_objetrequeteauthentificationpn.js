IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteAuthentificationPN = void 0;
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetMoteurConnexion_1 = require('ObjetMoteurConnexion');
    const TypesRequeteJSON_1 = require('TypesRequeteJSON');
    class ObjetRequeteAuthentificationPN extends ObjetMoteurConnexion_1
      .ObjetMoteurConnexion.ObjetRequeteAuthentificationCP {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({
          messageDetail:
            'Authentification',
        });
      }
      lancerRequete(aParam) {
        this.JSON.connexion = aParam.genreConnexion;
        this.JSON.challenge = aParam.challenge;
        this.JSON.espace = GEtatUtilisateur.GenreEspace;
        return this.appelAsynchrone();
      }
    }
    exports.ObjetRequeteAuthentificationPN = ObjetRequeteAuthentificationPN;
    CollectionRequetes_1.Requetes.inscrire(
      TypesRequeteJSON_1.ConstantesIdRequetesAjaxCP.authentification,
      ObjetRequeteAuthentificationPN,
    );
  },
  fn: 'objetrequeteauthentificationpn.js',
});