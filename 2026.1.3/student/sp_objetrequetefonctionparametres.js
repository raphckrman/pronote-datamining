IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteFonctionParametres = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    const UtilitaireIdentifiantNavigateur_1 = require('@cp/Espace/Script/Utilitaire/UtilitaireIdentifiantNavigateur');
    const TypesRequeteJSON_1 = require('@cp/script/Communication/TypesRequeteJSON');
    class ObjetRequeteFonctionParametres extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
      lancerRequete(aObjet) {
        this.JSON = {
          Uuid: aObjet.uuidRSA,
          identifiantNav:
            UtilitaireIdentifiantNavigateur_1.UtilitaireIdentifiantNavigateur.get(),
        };
        return this.appelAsynchrone();
      }
      actionApresRequete() {
        if (this.JSONReponse.identifiantNav) {
          UtilitaireIdentifiantNavigateur_1.UtilitaireIdentifiantNavigateur.set(
            this.JSONReponse.identifiantNav,
          );
        }
        this.callbackReussite.appel(this.JSONReponse);
      }
    }
    exports.ObjetRequeteFonctionParametres = ObjetRequeteFonctionParametres;
    ObjetRequeteFonctionParametres.inscrire(
      TypesRequeteJSON_1.ConstantesIdRequetesAjaxCP.fonctionParametres,
    );
  },
  fn: 'objetrequetefonctionparametres.js',
});