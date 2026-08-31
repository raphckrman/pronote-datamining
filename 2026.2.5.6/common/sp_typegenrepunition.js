IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenrePunition = void 0;
    var TypeGenrePunition;
    (function (TypeGenrePunition) {
      TypeGenrePunition[(TypeGenrePunition['GP_ExclusionCours'] = 0)] =
        'GP_ExclusionCours';
      TypeGenrePunition[(TypeGenrePunition['GP_Retenues'] = 1)] = 'GP_Retenues';
      TypeGenrePunition[(TypeGenrePunition['GP_Devoir'] = 2)] = 'GP_Devoir';
      TypeGenrePunition[(TypeGenrePunition['GP_Autre'] = 3)] = 'GP_Autre';
    })(
      TypeGenrePunition || (exports.TypeGenrePunition = TypeGenrePunition = {}),
    );
  },
  fn: 'typegenrepunition.js',
});