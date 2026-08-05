IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteParametresUtilisateur = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequeteParametresUtilisateur extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequeteParametresUtilisateur =
      ObjetRequeteParametresUtilisateur;
    ObjetRequeteParametresUtilisateur.inscrire('ParametresUtilisateur');
  },
  fn: 'objetrequeteparametresutilisateur.js',
});