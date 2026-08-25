IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Callback = void 0;
    class Callback {
      constructor(aPere, aEvenement, aIdentifiant) {
        this.pere = aPere;
        this.evenement = aEvenement;
        this.identifiant = aIdentifiant;
      }
      appel(...aParams) {
        if (this.pere && this.evenement) {
          return this.evenement.call(this.pere, ...aParams);
        }
      }
    }
    exports.Callback = Callback;
  },
  fn: 'callback.js',
});