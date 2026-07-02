IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteAuthentificationPN = void 0;
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetMoteurConnexion_1 = require('@cp/Produit/Script/moteur/ObjetMoteurConnexion');
    const TypesRequeteJSON_1 = require('@cp/script/Communication/TypesRequeteJSON');
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
    ObjetRequeteAuthentificationPN.inscrire(
      TypesRequeteJSON_1.ConstantesIdRequetesAjaxCP.authentification,
    );
  },
  fn: 'objetrequeteauthentificationpn.js',
});