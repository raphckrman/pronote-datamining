IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteIdentification = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetTraduction_1 = require('ObjetTraduction');
    class ObjetRequeteIdentification extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
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
      'Identification',
      ObjetRequeteIdentification,
    );
  },
  fn: 'objetrequeteidentification.js',
});