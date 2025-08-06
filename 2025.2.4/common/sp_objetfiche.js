IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFiche = void 0;
    const ObjetFiche_DesktopMobile_1 = require('ObjetFiche_DesktopMobile');
    const ObjetFiche_Espace_1 = require('ObjetFiche_Espace');
    class ObjetFiche extends ObjetFiche_DesktopMobile_1.ObjetFiche_DesktopMobile {}
    exports.ObjetFiche = ObjetFiche;
    if (!IE.estMobile) {
      exports.ObjetFiche = ObjetFiche = ObjetFiche_Espace_1.ObjetFiche_Espace;
    } else {
      exports.ObjetFiche = ObjetFiche =
        ObjetFiche_DesktopMobile_1.ObjetFiche_DesktopMobile;
    }
  },
  fn: 'objetfiche.js',
});