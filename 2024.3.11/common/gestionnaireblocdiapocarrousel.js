IE.fModule({
  f: function (exports, require, module, global) {
    const { GestionnaireBlocDeBase } = require('GestionnaireBloc.js');
    const { ObjetDiapoCarrousel } = require('ObjetDiapoCarrousel.js');
    class GestionnaireBlocDiapoCarrousel extends GestionnaireBlocDeBase {
      constructor(...aParams) {
        super(...aParams);
      }
      composeBloc(aDataBloc) {
        const lInstance = this.getInstanceObjetMetier(
          aDataBloc,
          ObjetDiapoCarrousel,
        );
        return {
          html: this.composeZoneInstance(lInstance),
          controleur: lInstance.controleur,
        };
      }
      composeZoneInstance(aInstance) {
        return (
          '<div id="' + aInstance.getNom() + '" class="container-bloc"></div>'
        );
      }
    }
    module.exports = { GestionnaireBlocDiapoCarrousel };
  },
  fn: 'gestionnaireblocdiapocarrousel.js',
});