IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports._Cache = void 0;
    class _Cache {
      constructor() {
        this._actif = true;
        this._donnees = {};
      }
      setActif(aActif) {
        this._actif = aActif;
      }
      getActif() {
        const lApp = GApplication;
        if (lApp.getOptionsDebug() && lApp.getOptionsDebug().desactiver_Cache) {
          return false;
        }
        return this._actif;
      }
      getCle(aTableauElements) {
        let lCle = '';
        for (let i = 0; i < aTableauElements.length; i++) {
          lCle += aTableauElements[i].getCle();
        }
        return lCle;
      }
      vider(aCle) {
        if (aCle) {
          if (this.existeDonnee(aCle)) {
            this.effacer(aCle);
          }
        } else {
          this._donnees = {};
        }
      }
      effacer(aCle) {
        const tmpArray = {};
        for (const x in this._donnees) {
          if (x !== aCle) {
            tmpArray[x] = this._donnees[x];
          }
        }
        this._donnees = tmpArray;
      }
      existeDonnee(aCle) {
        const lApp = GApplication;
        if (lApp.getOptionsDebug() && lApp.getOptionsDebug().desactiver_Cache) {
          return false;
        }
        if (!this.getActif()) {
          return false;
        }
        return this._donnees[aCle] !== undefined;
      }
      getDonnee(aCle) {
        return this._donnees[aCle];
      }
      setDonnee(aCle, aObjetDonnee) {
        this._donnees[aCle] = aObjetDonnee;
      }
    }
    exports._Cache = _Cache;
  },
  fn: '_cache.js',
});