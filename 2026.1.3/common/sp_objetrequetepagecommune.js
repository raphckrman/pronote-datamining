IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequetePageCommune = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    const TypesRequeteJSON_1 = require('@cp/script/Communication/TypesRequeteJSON');
    class ObjetRequetePageCommune extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequetePageCommune = ObjetRequetePageCommune;
    ObjetRequetePageCommune.inscrire(
      TypesRequeteJSON_1.ConstantesIdRequetesAjaxCP.fonctionParametres,
    );
  },
  fn: 'objetrequetepagecommune.js',
});