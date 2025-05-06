IE.fModule({
  f: function (exports, require, module, global) {
    const { ObjetRequeteSaisie } = require('ObjetRequeteJSON.js');
    const { Requetes } = require('CollectionRequetes.js');
    const { GTraductions } = require('ObjetTraduction.js');
    class ObjetRequeteSaisieURLPartenaireCDI extends ObjetRequeteSaisie {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({ avecControleModeExclusif: false });
      }
      lancerRequete(aDonnees) {
        this.JSON.url = aDonnees.url;
        return this.appelAsynchrone({
          messageDetail: GTraductions.getValeur('requete.VeuillezPatienter'),
        });
      }
      actionApresRequete() {
        this.callbackReussite.appel(this.JSONRapportSaisie.urlSSO);
      }
    }
    Requetes.inscrire(
      'SaisieURLPartenaireCDI',
      ObjetRequeteSaisieURLPartenaireCDI,
    );
    module.exports = { ObjetRequeteSaisieURLPartenaireCDI };
  },
  fn: 'objetrequetesaisieurlpartenairecdi.js',
});