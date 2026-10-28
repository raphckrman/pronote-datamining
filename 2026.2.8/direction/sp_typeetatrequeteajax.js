IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeEtatRequeteAjax = void 0;
    var TypeEtatRequeteAjax;
    (function (TypeEtatRequeteAjax) {
      TypeEtatRequeteAjax[(TypeEtatRequeteAjax['initial'] = 0)] = 'initial';
      TypeEtatRequeteAjax[(TypeEtatRequeteAjax['preparationEnvoi'] = 1)] =
        'preparationEnvoi';
      TypeEtatRequeteAjax[(TypeEtatRequeteAjax['envoye'] = 2)] = 'envoye';
      TypeEtatRequeteAjax[(TypeEtatRequeteAjax['recu'] = 3)] = 'recu';
      TypeEtatRequeteAjax[(TypeEtatRequeteAjax['termine'] = 4)] = 'termine';
    })(
      TypeEtatRequeteAjax ||
        (exports.TypeEtatRequeteAjax = TypeEtatRequeteAjax = {}),
    );
  },
  fn: 'typeetatrequeteajax.js',
});