IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequetePagePubliqueEtablissement = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequetePagePubliqueEtablissement extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequetePagePubliqueEtablissement =
      ObjetRequetePagePubliqueEtablissement;
    ObjetRequetePagePubliqueEtablissement.inscrire('PagePubliqueEtablissement');
  },
  fn: 'objetrequetepagepubliqueetablissement.js',
});