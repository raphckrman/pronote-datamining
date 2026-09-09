IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteSaisiePanierRessourceKiosque = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequeteSaisiePanierRessourceKiosque extends ObjetRequeteJSON_1.ObjetRequeteSaisie {}
    exports.ObjetRequeteSaisiePanierRessourceKiosque =
      ObjetRequeteSaisiePanierRessourceKiosque;
    ObjetRequeteSaisiePanierRessourceKiosque.inscrire(
      'SaisiePanierRessourceKiosque',
    );
  },
  fn: 'objetrequetesaisiepanierressourcekiosque.js',
});