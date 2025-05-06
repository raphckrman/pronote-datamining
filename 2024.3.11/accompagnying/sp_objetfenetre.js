IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre = void 0;
    const _ObjetFenetre_1 = require('_ObjetFenetre');
    class ObjetFenetre extends _ObjetFenetre_1._ObjetFenetre {}
    exports.ObjetFenetre = ObjetFenetre;
    if (IE.estMobile) {
      const { ObjetFenetreMobile } = require('ObjetFenetre_Mobile.js');
      exports.ObjetFenetre = ObjetFenetre = ObjetFenetreMobile;
    } else {
      const { ObjetFenetreEspace } = require('ObjetFenetre_Espace.js');
      exports.ObjetFenetre = ObjetFenetre = ObjetFenetreEspace;
    }
  },
  fn: 'objetfenetre.js',
});