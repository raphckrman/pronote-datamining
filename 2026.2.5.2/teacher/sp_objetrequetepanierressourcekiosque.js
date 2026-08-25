IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequetePanierRessourceKiosque = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequetePanierRessourceKiosque extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequetePanierRessourceKiosque =
      ObjetRequetePanierRessourceKiosque;
    ObjetRequetePanierRessourceKiosque.inscrire('listeRessourceKiosque');
  },
  fn: 'objetrequetepanierressourcekiosque.js',
});