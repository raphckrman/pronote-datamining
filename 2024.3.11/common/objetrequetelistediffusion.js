IE.fModule({
  f: function (exports, require, module, global) {
    const { ObjetRequeteConsultation } = require('ObjetRequeteJSON.js');
    const { Requetes } = require('CollectionRequetes.js');
    class ObjetRequeteListeDiffusion extends ObjetRequeteConsultation {}
    Requetes.inscrire('ListeDiffusion', ObjetRequeteListeDiffusion);
    module.exports = { ObjetRequeteListeDiffusion };
  },
  fn: 'objetrequetelistediffusion.js',
});