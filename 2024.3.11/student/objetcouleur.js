IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetCouleur = void 0;
    const _ObjetCouleur_1 = require('_ObjetCouleur');
    const ObjetStyle_1 = require('ObjetStyle');
    class ObjetCouleur extends _ObjetCouleur_1._ObjetCouleur {
      constructor(aAvecNonEditable) {
        super(aAvecNonEditable);
        this.service = this.intermediaire;
        this.note = '#FFFFCC';
        this.periodesFonce = [
          '',
          '#CC33CC',
          '#399361',
          '#3399FF',
          '#CC33CC',
          '#399361',
          '#CC33CC',
        ];
        this.periodesClair = [
          '',
          '#EBA2D5',
          '#8CE4A3',
          '#A9D4E9',
          '#EBA2D5',
          '#8CE4A3',
          '#EBA2D5',
        ];
        this.grilleOccupation = {
          fond: '#808080',
          placeLibre: '#FFFFFF',
          bordure: '#f9f4f0',
        };
        this.grilleSlider = {
          fond: '#D8D8D8',
          fondBouton: '#F0F0F0',
          fondBoutonSurvol: '#D0D0D0',
          fondBoutonSelectionne: '#FFFFFF',
          boutonBordureFonce: '#A0A0A0',
          boutonBordureClaire: '#FFFFFF',
        };
        this.voeuxRencontres = ['#FFFFFF', '#F7B95D', '#7EECAA', '#F95959'];
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
      composeCouleurSelection() {
        return ObjetStyle_1.GStyle.composeCouleur(
          this.selection.fond,
          this.selection.texte,
        );
      }
      setCouleurSelection(aId) {
        ObjetStyle_1.GStyle.setCouleur(
          aId,
          this.selection.fond,
          this.selection.texte,
        );
      }
    }
    exports.ObjetCouleur = ObjetCouleur;
  },
  fn: 'objetcouleur.js',
});