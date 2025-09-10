IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MoteurMailTo = void 0;
    const UtilitaireEmail_1 = require('UtilitaireEmail');
    const ObjetChaine_1 = require('ObjetChaine');
    class MoteurMailTo {
      constructor(aParametres) {
        this.listeAdresses = [];
        this.parametres = Object.assign(
          { separateur: ';', longueurMax: 2000, prefixeLien: 'mailto:' },
          aParametres,
        );
        this.longueurTotale = this.parametres.prefixeLien.length;
      }
      ajouterAdresseEmail(aAdresse) {
        let result = false;
        if (!!aAdresse && aAdresse.length > 0) {
          if (UtilitaireEmail_1.TUtilitaireEmail.estValide(aAdresse)) {
            const lAdresseSansEntites =
              ObjetChaine_1.GChaine.enleverEntites(aAdresse);
            if (this.listeAdresses.indexOf(lAdresseSansEntites) === -1) {
              let lLongueurNouvelleAdresse = lAdresseSansEntites.length;
              if (this.listeAdresses.length > 1) {
                lLongueurNouvelleAdresse += this.parametres.separateur.length;
              }
              if (
                this.longueurTotale + lLongueurNouvelleAdresse <
                this.parametres.longueurMax
              ) {
                result = true;
                this.longueurTotale += lLongueurNouvelleAdresse;
                this.listeAdresses.push(lAdresseSansEntites);
              }
            }
          }
        }
        return result;
      }
      toString() {
        return (
          this.parametres.prefixeLien +
          this.listeAdresses.join(this.parametres.separateur)
        );
      }
    }
    exports.MoteurMailTo = MoteurMailTo;
  },
  fn: 'moteurmailto.js',
});