IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteSaisieAccepterReglement = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    class ObjetRequeteSaisieAccepterReglement extends ObjetRequeteJSON_1.ObjetRequeteSaisie {}
    exports.ObjetRequeteSaisieAccepterReglement =
      ObjetRequeteSaisieAccepterReglement;
    CollectionRequetes_1.Requetes.inscrire(
      'SaisieAccepterReglement',
      ObjetRequeteSaisieAccepterReglement,
    );
  },
  fn: 'objetrequetesaisieaccepterreglement.js',
});