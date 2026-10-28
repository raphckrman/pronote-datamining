IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeHttpReponseMessage = void 0;
    var TypeHttpReponseMessage;
    (function (TypeHttpReponseMessage) {
      TypeHttpReponseMessage[(TypeHttpReponseMessage['rm_Envoi'] = 0)] =
        'rm_Envoi';
      TypeHttpReponseMessage[(TypeHttpReponseMessage['rm_EnvoiATous'] = 1)] =
        'rm_EnvoiATous';
      TypeHttpReponseMessage[(TypeHttpReponseMessage['rm_Relance'] = 2)] =
        'rm_Relance';
      TypeHttpReponseMessage[
        (TypeHttpReponseMessage['rm_EnvoiATousSaufParentEleve'] = 3)
      ] = 'rm_EnvoiATousSaufParentEleve';
      TypeHttpReponseMessage[
        (TypeHttpReponseMessage['rm_RelanceATousSaufParentEleve'] = 4)
      ] = 'rm_RelanceATousSaufParentEleve';
      TypeHttpReponseMessage[(TypeHttpReponseMessage['rm_ClotureAlerte'] = 5)] =
        'rm_ClotureAlerte';
    })(
      TypeHttpReponseMessage ||
        (exports.TypeHttpReponseMessage = TypeHttpReponseMessage = {}),
    );
  },
  fn: 'typehttpreponsemessage.js',
});