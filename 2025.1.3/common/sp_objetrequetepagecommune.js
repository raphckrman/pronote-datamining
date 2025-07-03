IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequetePageCommune = void 0;
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const TypesRequeteJSON_1 = require('TypesRequeteJSON');
    class ObjetRequetePageCommune extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequetePageCommune = ObjetRequetePageCommune;
    CollectionRequetes_1.Requetes.inscrire(
      TypesRequeteJSON_1.ConstantesIdRequetesAjaxCP.fonctionParametres,
      ObjetRequetePageCommune,
    );
  },
  fn: 'objetrequetepagecommune.js',
});