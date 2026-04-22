IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Requetes = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const lCollectionRequetes = {};
    const lRequetes = function (aIdentRequete, ...aParams) {
      const lClasseRequete = lCollectionRequetes[aIdentRequete];
      if (!lClasseRequete) {
        return { lancerRequete: function () {} };
      }
      const lInstanceRequete = new lClasseRequete(...aParams);
      lInstanceRequete.nom = aIdentRequete;
      return lInstanceRequete;
    };
    exports.Requetes = lRequetes;
    lRequetes.inscrire = function (aIdentRequete, aClasse) {
      if (!aIdentRequete) {
        return this;
      }
      if (!aClasse) {
        return this;
      }
      if (lCollectionRequetes[aIdentRequete]) {
        if (lCollectionRequetes[aIdentRequete] !== aClasse) {
        }
        return this;
      }
      if (
        !(
          aClasse === ObjetRequeteJSON_1.ObjetRequeteConsultation ||
          aClasse === ObjetRequeteJSON_1.ObjetRequeteSaisie
        )
      ) {
        aClasse.prototype.nom = aIdentRequete;
      }
      lCollectionRequetes[aIdentRequete] = aClasse;
    };
    lRequetes.collection = lCollectionRequetes;
  },
  fn: 'collectionrequetes.js',
});