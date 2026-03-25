IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteIdentification = void 0;
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetMoteurConnexion_1 = require('ObjetMoteurConnexion');
    const TypesRequeteJSON_1 = require('TypesRequeteJSON');
    class ObjetRequeteIdentification extends ObjetMoteurConnexion_1
      .ObjetMoteurConnexion.ObjetRequeteIdentificationCP {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({
          messageDetail:
            'Identification',
        });
      }
      lancerRequete(aParam) {
        Object.assign(this.JSON, aParam);
        return this.appelAsynchrone();
      }
    }
    exports.ObjetRequeteIdentification = ObjetRequeteIdentification;
    CollectionRequetes_1.Requetes.inscrire(
      TypesRequeteJSON_1.ConstantesIdRequetesAjaxCP.identification,
      ObjetRequeteIdentification,
    );
  },
  fn: 'objetrequeteidentification.js',
});