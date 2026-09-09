IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteSaisieAccepterReglement = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequeteSaisieAccepterReglement extends ObjetRequeteJSON_1.ObjetRequeteSaisie {}
    exports.ObjetRequeteSaisieAccepterReglement =
      ObjetRequeteSaisieAccepterReglement;
    ObjetRequeteSaisieAccepterReglement.inscrire('SaisieAccepterReglement');
  },
  fn: 'objetrequetesaisieaccepterreglement.js',
});