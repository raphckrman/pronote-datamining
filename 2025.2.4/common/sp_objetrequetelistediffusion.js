IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteListeDiffusion = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    class ObjetRequeteListeDiffusion extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
    exports.ObjetRequeteListeDiffusion = ObjetRequeteListeDiffusion;
    CollectionRequetes_1.Requetes.inscrire(
      'ListeDiffusion',
      ObjetRequeteListeDiffusion,
    );
  },
  fn: 'objetrequetelistediffusion.js',
});