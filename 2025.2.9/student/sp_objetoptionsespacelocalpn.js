IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetOptionsEspaceLocalPN = void 0;
    const AccessApp_1 = require('AccessApp');
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
        const lApp = (0, AccessApp_1.getApp)();
        return lApp.estPrimaire && !!this.getOptionEspace('ieSVActive');
      }
      setSyntheseVocaleActif(aActif) {
        const lApp = (0, AccessApp_1.getApp)();
        if (lApp.estPrimaire) {
          this.setOptionEspace('ieSVActive', aActif);
        } else {
        }
        return this;
      }
      getSyntheseVocaleAvecSurlignage() {
        const lApp = (0, AccessApp_1.getApp)();
        return lApp.estPrimaire && !!this.getOptionEspace('ieSVSurLignage');
      }
      setSyntheseVocaleAvecSurlignage(aValeur) {
        const lApp = (0, AccessApp_1.getApp)();
        if (
          lApp.estPrimaire ||
          (lApp.getOptionsDebug() &&
            lApp.getOptionsDebug().forcerSyntheseVocale)
        ) {
          this.setOptionEspace('ieSVSurLignage', aValeur);
        }
        return this;
      }
    }
    exports.ObjetOptionsEspaceLocalPN = ObjetOptionsEspaceLocalPN;
  },
  fn: 'objetoptionsespacelocalpn.js',
});