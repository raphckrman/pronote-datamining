IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetListe = void 0;
    const _ObjetListe_1 = require('_ObjetListe');
    const ObjetListe_Mobile_1 = require('ObjetListe_Mobile');
    const ObjetListe_Espace_1 = require('ObjetListe_Espace');
    class _ObjetListe extends _ObjetListe_1.ObjetListe {}
    exports.ObjetListe = _ObjetListe;
    if (IE.estMobile) {
      exports.ObjetListe = _ObjetListe = ObjetListe_Mobile_1.ObjetListe_Mobile;
    } else {
      exports.ObjetListe = _ObjetListe = ObjetListe_Espace_1.ObjetListeEspace;
    }
  },
  fn: 'objetliste.js',
});