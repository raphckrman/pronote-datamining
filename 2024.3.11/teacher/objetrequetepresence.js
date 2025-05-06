IE.fModule({
  f: function (exports, require, module, global) {
    const { ObjetRequeteConsultation } = require('ObjetRequeteJSON.js');
    const { Requetes } = require('CollectionRequetes.js');
    class ObjetRequetePresence extends ObjetRequeteConsultation {
      constructor() {
        super(
          null,
          () => {},
          () => {},
        );
        this.setOptions({ sansBlocageInterface: true });
      }
      lancerRequete() {
        return this.appelAsynchrone();
      }
      actionApresRequete() {}
    }
    Requetes.inscrire('Presence', ObjetRequetePresence);
    module.exports = { ObjetRequetePresence };
  },
  fn: 'objetrequetepresence.js',
});