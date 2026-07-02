IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteListeManuelsRessourcesGranulaires = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequeteListeManuelsRessourcesGranulaires extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequeteListeManuelsRessourcesGranulaires =
      ObjetRequeteListeManuelsRessourcesGranulaires;
    ObjetRequeteListeManuelsRessourcesGranulaires.inscrire(
      'listeManuelsRessourcesGranulaires',
    );
  },
  fn: 'objetrequetelistemanuelsressourcesgranulaires.js',
});