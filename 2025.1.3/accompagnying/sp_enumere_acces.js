IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeHttpAcces = void 0;
    var TypeHttpAcces;
    (function (TypeHttpAcces) {
      TypeHttpAcces[(TypeHttpAcces['HttpAcces_Espace'] = 0)] =
        'HttpAcces_Espace';
      TypeHttpAcces[(TypeHttpAcces['HttpAcces_ConnexionEspace'] = 1)] =
        'HttpAcces_ConnexionEspace';
      TypeHttpAcces[(TypeHttpAcces['HttpAcces_ConnexionDirect'] = 2)] =
        'HttpAcces_ConnexionDirect';
      TypeHttpAcces[(TypeHttpAcces['HttpAcces_ConnexionJetonEspace'] = 3)] =
        'HttpAcces_ConnexionJetonEspace';
      TypeHttpAcces[(TypeHttpAcces['HttpAcces_ConnexionJetonDirect'] = 4)] =
        'HttpAcces_ConnexionJetonDirect';
      TypeHttpAcces[(TypeHttpAcces['HttpAcces_ConnexionCookie'] = 5)] =
        'HttpAcces_ConnexionCookie';
    })(TypeHttpAcces || (exports.TypeHttpAcces = TypeHttpAcces = {}));
  },
  fn: 'enumere_acces.js',
});