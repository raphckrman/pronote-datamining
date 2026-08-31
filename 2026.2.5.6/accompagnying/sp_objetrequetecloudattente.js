IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteCloudAttente = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequeteCloudAttente extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequeteCloudAttente = ObjetRequeteCloudAttente;
    ObjetRequeteCloudAttente.inscrire('CloudAttente');
  },
  fn: 'objetrequetecloudattente.js',
});