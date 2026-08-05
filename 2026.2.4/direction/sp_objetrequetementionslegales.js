IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteMentionsLegales = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequeteMentionsLegales extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequeteMentionsLegales = ObjetRequeteMentionsLegales;
    ObjetRequeteMentionsLegales.inscrire('MentionsLegales');
  },
  fn: 'objetrequetementionslegales.js',
});