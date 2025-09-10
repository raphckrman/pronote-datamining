IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreObservationVS = void 0;
    var TypeGenreObservationVS;
    (function (TypeGenreObservationVS) {
      TypeGenreObservationVS[(TypeGenreObservationVS['OVS_DefautCarnet'] = 0)] =
        'OVS_DefautCarnet';
      TypeGenreObservationVS[
        (TypeGenreObservationVS['OVS_ObservationParent'] = 1)
      ] = 'OVS_ObservationParent';
      TypeGenreObservationVS[
        (TypeGenreObservationVS['OVS_Encouragement'] = 2)
      ] = 'OVS_Encouragement';
      TypeGenreObservationVS[(TypeGenreObservationVS['OVS_Autres'] = 3)] =
        'OVS_Autres';
    })(
      TypeGenreObservationVS ||
        (exports.TypeGenreObservationVS = TypeGenreObservationVS = {}),
    );
  },
  fn: 'typegenreobservationvs.js',
});