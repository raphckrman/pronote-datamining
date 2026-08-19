IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EModeAffichageTimeline = void 0;
    var EModeAffichageTimeline;
    (function (EModeAffichageTimeline) {
      EModeAffichageTimeline[(EModeAffichageTimeline['classique'] = 1)] =
        'classique';
      EModeAffichageTimeline[(EModeAffichageTimeline['widget'] = 2)] = 'widget';
      EModeAffichageTimeline[(EModeAffichageTimeline['grille'] = 3)] = 'grille';
      EModeAffichageTimeline[(EModeAffichageTimeline['compact'] = 4)] =
        'compact';
      EModeAffichageTimeline[(EModeAffichageTimeline['liste'] = 5)] = 'liste';
    })(
      EModeAffichageTimeline ||
        (exports.EModeAffichageTimeline = EModeAffichageTimeline = {}),
    );
  },
  fn: 'enumere_modeaffichagetimeline.js',
});