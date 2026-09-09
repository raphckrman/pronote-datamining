IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SFicheEtablissement = void 0;
    require('./Fiche-Etablissement.scss');
    exports.SFicheEtablissement = {
      ficheEtablissement: 'fiche-etablissement',
      informations: 'informations',
      logo: 'logo',
      infosContain: 'infos-contain',
    };
  },
  fn: 'fiche-etablissement.css.js',
});