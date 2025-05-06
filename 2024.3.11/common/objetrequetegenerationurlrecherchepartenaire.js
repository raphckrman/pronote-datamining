IE.fModule({
  f: function (exports, require, module, global) {
    const { ObjetRequeteConsultation } = require('ObjetRequeteJSON.js');
    const { Requetes } = require('CollectionRequetes.js');
    class ObjetRequeteGenerationURLRecherchePartenaire extends ObjetRequeteConsultation {
      constructor(...aParams) {
        super(...aParams);
      }
      lancerRequete(aDonnees) {
        this.JSON = aDonnees;
        return this.appelAsynchrone();
      }
      actionApresRequete() {
        this.callbackReussite.appel(this.JSONReponse.urlRecherche);
      }
    }
    Requetes.inscrire(
      'GenerationURLRecherchePartenaire',
      ObjetRequeteGenerationURLRecherchePartenaire,
    );
    module.exports = { ObjetRequeteGenerationURLRecherchePartenaire };
  },
  fn: 'objetrequetegenerationurlrecherchepartenaire.js',
});