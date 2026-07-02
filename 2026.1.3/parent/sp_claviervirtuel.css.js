IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SClavierVirtuel = void 0;
    require('./ClavierVirtuel.scss');
    exports.SClavierVirtuel = {
      clavierVirtuel: 'clavierVirtuel',
      zoneVisuSaisie: 'zoneVisuSaisie',
      paveNum: 'paveNum',
      ligneClavierVirtuel: 'ligneClavierVirtuel',
      toucheClavierVirtuel: 'toucheClavierVirtuel',
      contenuToucheClavier: 'contenuToucheClavier',
      ieRipple: 'ie-ripple',
      toucheAnnot: 'toucheAnnot',
      toucheNum: 'toucheNum',
      toucheAction: 'toucheAction',
    };
  },
  fn: 'claviervirtuel.css.js',
});