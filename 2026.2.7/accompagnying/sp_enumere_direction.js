IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreDirection = void 0;
    var EGenreDirection;
    (function (EGenreDirection) {
      EGenreDirection[(EGenreDirection['SensInverse'] = -1)] = 'SensInverse';
      EGenreDirection[(EGenreDirection['DeuxSenses'] = 0)] = 'DeuxSenses';
      EGenreDirection[(EGenreDirection['SensNormal'] = 1)] = 'SensNormal';
    })(EGenreDirection || (exports.EGenreDirection = EGenreDirection = {}));
  },
  fn: 'enumere_direction.js',
});