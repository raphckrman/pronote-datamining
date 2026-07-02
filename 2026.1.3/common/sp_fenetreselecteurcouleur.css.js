IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SFenetreSelecteurCouleur = void 0;
    require('./FenetreSelecteurCouleur.scss');
    exports.SFenetreSelecteurCouleur = {
      ObjetFenetre_SelecteurCouleur_racine:
        'ObjetFenetre_SelecteurCouleur_racine',
      conteneur: 'conteneur',
      EspaceMobileIndex: 'EspaceMobileIndex',
      conteneur_droit: 'conteneur_droit',
      FSC_ConteneurPickColor: 'FSC_ConteneurPickColor',
      FSC_PickColor: 'FSC_PickColor',
      iecb: 'iecb',
      iconeSvg: 'icone-svg',
      FSC_ZoneChoix: 'FSC_ZoneChoix',
      FSC_CouleurSelection: 'FSC_CouleurSelection',
    };
  },
  fn: 'fenetreselecteurcouleur.css.js',
});