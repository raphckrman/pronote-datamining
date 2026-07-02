IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteListeRessourcesPourCommunication = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    class ObjetRequeteListeRessourcesPourCommunication extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequeteListeRessourcesPourCommunication =
      ObjetRequeteListeRessourcesPourCommunication;
    ObjetRequeteListeRessourcesPourCommunication.inscrire(
      'ListeRessourcesPourCommunication',
    );
  },
  fn: 'objetrequetelisteressourcespourcommunication.js',
});