IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre = void 0;
    const _ObjetFenetre_1 = require('_ObjetFenetre');
    const ObjetFenetre_Mobile_1 = require('ObjetFenetre_Mobile');
    const ObjetFenetre_Espace_1 = require('ObjetFenetre_Espace');
    class ObjetFenetre extends _ObjetFenetre_1._ObjetFenetre {}
    exports.ObjetFenetre = ObjetFenetre;
    if (IE.estMobile) {
      exports.ObjetFenetre = ObjetFenetre =
        ObjetFenetre_Mobile_1.ObjetFenetreMobile;
    } else {
      exports.ObjetFenetre = ObjetFenetre =
        ObjetFenetre_Espace_1.ObjetFenetreEspace;
    }
  },
  fn: 'objetfenetre.js',
});