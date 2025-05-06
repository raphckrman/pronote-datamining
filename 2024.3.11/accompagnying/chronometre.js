IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Chronometre = void 0;
    class Chronometre {
      constructor() {
        this.reset();
        this.actif = true;
      }
      start() {
        this.dateChrono = Date.now();
        this.actif = true;
      }
      stop() {
        this.valeur += Date.now() - this.dateChrono;
        this.actif = false;
      }
      reset() {
        this.dateChrono = Date.now();
        this.valeur = 0;
      }
      toString() {
        const lValeur =
          this.valeur + (this.actif ? Date.now() - this.dateChrono : 0);
        if (lValeur > 1000) {
          return lValeur / 1000 + ' s';
        }
        return lValeur + ' ms';
      }
    }
    exports.Chronometre = Chronometre;
  },
  fn: 'chronometre.js',
});