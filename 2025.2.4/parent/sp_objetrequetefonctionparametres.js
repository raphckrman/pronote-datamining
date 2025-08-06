IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteFonctionParametres = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const UtilitaireIdentifiantNavigateur_1 = require('UtilitaireIdentifiantNavigateur');
    const TypesRequeteJSON_1 = require('TypesRequeteJSON');
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
    CollectionRequetes_1.Requetes.inscrire(
      TypesRequeteJSON_1.ConstantesIdRequetesAjaxCP.fonctionParametres,
      ObjetRequeteFonctionParametres,
    );
  },
  fn: 'objetrequetefonctionparametres.js',
});