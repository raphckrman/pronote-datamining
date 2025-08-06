IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteSaisieURLPartenaireCDI = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetTraduction_1 = require('ObjetTraduction');
    class ObjetRequeteSaisieURLPartenaireCDI extends ObjetRequeteJSON_1.ObjetRequeteSaisie {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({
          avecControleModeExclusif: false,
          messageDetail: 'Veuillez patienter...',
        });
      }
    }
    exports.ObjetRequeteSaisieURLPartenaireCDI =
      ObjetRequeteSaisieURLPartenaireCDI;
    CollectionRequetes_1.Requetes.inscrire(
      'SaisieURLPartenaireCDI',
      ObjetRequeteSaisieURLPartenaireCDI,
    );
  },
  fn: 'objetrequetesaisieurlpartenairecdi.js',
});