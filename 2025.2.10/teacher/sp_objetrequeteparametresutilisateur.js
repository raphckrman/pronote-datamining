IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteParametresUtilisateur = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    class ObjetRequeteParametresUtilisateur extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequeteParametresUtilisateur =
      ObjetRequeteParametresUtilisateur;
    CollectionRequetes_1.Requetes.inscrire(
      'ParametresUtilisateur',
      ObjetRequeteParametresUtilisateur,
    );
  },
  fn: 'objetrequeteparametresutilisateur.js',
});