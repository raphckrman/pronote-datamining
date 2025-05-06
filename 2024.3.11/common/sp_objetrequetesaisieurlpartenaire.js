IE.fModule({
  f: function (exports, require, module, global) {
    const { ObjetRequeteSaisie } = require('ObjetRequeteJSON.js');
    const { Requetes } = require('CollectionRequetes.js');
    const { GTraductions } = require('ObjetTraduction.js');
    class ObjetRequeteSaisieURLPartenaire extends ObjetRequeteSaisie {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({ avecControleModeExclusif: false });
      }
      lancerRequete(aDonnees) {
        this.JSON.SSO = aDonnees.SSO;
        return this.appelAsynchrone({
          messageDetail: GTraductions.getValeur('requete.VeuillezPatienter'),
        });
      }
      actionApresRequete() {
        this.callbackReussite.appel(this.JSONRapportSaisie.urlSSO);
      }
    }
    Requetes.inscrire('SaisieURLPartenaire', ObjetRequeteSaisieURLPartenaire);
    module.exports = { ObjetRequeteSaisieURLPartenaire };
  },
  fn: 'objetrequetesaisieurlpartenaire.js',
});