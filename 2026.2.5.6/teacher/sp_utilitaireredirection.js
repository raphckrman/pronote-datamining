IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireRedirection = void 0;
    class UtilitaireRedirection {
      constructor() {
        this.parametresAConserver = [
          'login',
          'fd',
          'redirect',
          'redirect_sauthm',
        ];
        this.parametres = [];
        const lSearches = window.location.search.replace(/^\?/, '').split('&');
        for (const i in lSearches) {
          const lItems = lSearches[i].split('=');
          if (lItems.length === 2) {
            this.parametres.push({ parametre: lItems[0], valeur: lItems[1] });
          }
        }
      }
      getParametresUrl(aObjet) {
        let lParamUrl = '';
        const lParametres = [];
        let lParametre;
        if (aObjet && aObjet.parametresAConserver) {
          this.parametresAConserver = aObjet.parametresAConserver;
        }
        for (const i in this.parametres) {
          lParametre = this.parametres[i];
          const lRegExpParametre = new RegExp(lParametre.parametre, 'i');
          if (
            lRegExpParametre.test(this.parametresAConserver.join(' ')) &&
            (!aObjet ||
              !aObjet.parametresASupprimer ||
              !lRegExpParametre.test(aObjet.parametresASupprimer.join(' ')))
          ) {
            lParametres.push(lParametre);
          }
        }
        if (aObjet && aObjet.parametres) {
          for (const i in aObjet.parametres) {
            lParametre = aObjet.parametres[i];
            if (!this.existParametre(lParametre.parametre)) {
              lParametres.push(lParametre);
            }
          }
        }
        for (const i in lParametres) {
          lParametre = lParametres[i];
          lParamUrl +=
            (lParamUrl ? '&' : '') +
            lParametre.parametre +
            '=' +
            lParametre.valeur;
        }
        return (lParamUrl ? '?' : '') + lParamUrl;
      }
      existParametre(aParametre) {
        const obj = this.parametres.filter((aItem) => {
          return aItem.parametre === aParametre;
        });
        return obj !== undefined && obj.length > 0;
      }
    }
    exports.UtilitaireRedirection = UtilitaireRedirection;
  },
  fn: 'utilitaireredirection.js',
});