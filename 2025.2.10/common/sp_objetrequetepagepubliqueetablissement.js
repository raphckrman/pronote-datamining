IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequetePagePubliqueEtablissement = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    class ObjetRequetePagePubliqueEtablissement extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequetePagePubliqueEtablissement =
      ObjetRequetePagePubliqueEtablissement;
    CollectionRequetes_1.Requetes.inscrire(
      'PagePubliqueEtablissement',
      ObjetRequetePagePubliqueEtablissement,
    );
  },
  fn: 'objetrequetepagepubliqueetablissement.js',
});