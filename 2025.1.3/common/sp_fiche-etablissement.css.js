IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StylesFicheEtablissement = void 0;
    require('Fiche-Etablissement.css');
    exports.StylesFicheEtablissement = {
      ficheEtablissement: 'fiche-etablissement',
      onglet: 'onglet',
      selectionne: 'selectionne',
      informations: 'informations',
      logo: 'logo',
      infosContain: 'infos-contain',
    };
  },
  fn: 'fiche-etablissement.css.js',
});