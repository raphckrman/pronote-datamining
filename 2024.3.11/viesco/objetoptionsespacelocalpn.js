IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetOptionsEspaceLocalPN = void 0;
    const ObjetOptionsEspaceLocal_1 = require('ObjetOptionsEspaceLocal');
    class ObjetOptionsEspaceLocalPN extends ObjetOptionsEspaceLocal_1.ObjetOptionsEspaceLocal {
      getGenreConnexion() {
        return this.getOptionsJSON().genreConnexion;
      }
      setGenreConnexion(aGenreConnexion) {
        const lJSON = this.getOptionsJSON();
        lJSON.genreConnexion = aGenreConnexion;
        this.setOptionsJSON(lJSON);
      }
      getSyntheseVocaleActif() {
        const lApp = GApplication;
        return lApp.estPrimaire && !!this.getOptionEspace('ieSVActive');
      }
      setSyntheseVocaleActif(aActif) {
        const lApp = GApplication;
        if (lApp.estPrimaire) {
          this.setOptionEspace('ieSVActive', aActif);
        }
        return this;
      }
      getSyntheseVocaleAvecSurlignage() {
        const lApp = GApplication;
        return lApp.estPrimaire && !!this.getOptionEspace('ieSVSurLignage');
      }
      setSyntheseVocaleAvecSurlignage(aValeur) {
        const lApp = GApplication;
        if (lApp.estPrimaire) {
          this.setOptionEspace('ieSVSurLignage', aValeur);
        }
        return this;
      }
    }
    exports.ObjetOptionsEspaceLocalPN = ObjetOptionsEspaceLocalPN;
  },
  fn: 'objetoptionsespacelocalpn.js',
});