IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GestionnaireBlocDiapoCarrousel = void 0;
    const GestionnaireBloc_1 = require('GestionnaireBloc');
    const ObjetDiapoCarrousel_1 = require('ObjetDiapoCarrousel');
    class GestionnaireBlocDiapoCarrousel extends GestionnaireBloc_1.GestionnaireBlocDeBase {
      composeBloc(aDataBloc) {
        const lInstance = this.getInstanceObjetMetier(
          aDataBloc,
          ObjetDiapoCarrousel_1.ObjetDiapoCarrousel,
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
    exports.GestionnaireBlocDiapoCarrousel = GestionnaireBlocDiapoCarrousel;
  },
  fn: 'gestionnaireblocdiapocarrousel.js',
});