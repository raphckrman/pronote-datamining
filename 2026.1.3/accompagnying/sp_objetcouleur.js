IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetCouleur = void 0;
    const _ObjetCouleur_1 = require('@cp/script/_ObjetCouleur');
    class ObjetCouleur extends _ObjetCouleur_1._ObjetCouleur {
      constructor(aAvecNonEditable) {
        super(aAvecNonEditable);
        this.grilleOccupation = {
          fond: '#808080',
          placeLibre: '#FFFFFF',
          bordure: '#f9f4f0',
        };
        this.diagnostic = {
          placeLibre: 'white',
          occupation: 'red',
          occupationPermanence: '#FFBF3A',
          demiPension: '#884605',
          site: '#FF00CC',
          absenceRessource: '#CC0033',
          indisponibilite: '#d5818a',
          gaev: '#CC0033',
          recreation: '#784c1e',
        };
        $.extend(this.grille, {
          indisponibilite: '#F18280',
          indisponibiliteSouple: '#f9d059',
          voeu: '#8acb63',
          priorite1: '#f000f0',
          priorite2: '#990099',
          priorite3: '#500070',
          demiPensionActive: '#52E252',
          demiPensionInactive: '#B54095',
          indisponibiliteSession: '#0066CC',
          indisponibiliteSessionPlanning: '#326699',
          horsPlageSessionRencontre: '#F0F0F0',
          recreations: '#F4D217',
        });
      }
    }
    exports.ObjetCouleur = ObjetCouleur;
  },
  fn: 'objetcouleur.js',
});