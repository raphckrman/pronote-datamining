IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteListeRessourcesPourCommunication = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    class ObjetRequeteListeRessourcesPourCommunication extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequeteListeRessourcesPourCommunication =
      ObjetRequeteListeRessourcesPourCommunication;
    CollectionRequetes_1.Requetes.inscrire(
      'ListeRessourcesPourCommunication',
      ObjetRequeteListeRessourcesPourCommunication,
    );
  },
  fn: 'objetrequetelisteressourcespourcommunication.js',
});