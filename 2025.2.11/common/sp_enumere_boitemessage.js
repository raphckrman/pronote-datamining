IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreBoiteMessage = void 0;
    var EGenreBoiteMessage;
    (function (EGenreBoiteMessage) {
      EGenreBoiteMessage[(EGenreBoiteMessage['Information'] = 0)] =
        'Information';
      EGenreBoiteMessage[(EGenreBoiteMessage['Confirmation'] = 1)] =
        'Confirmation';
      EGenreBoiteMessage[(EGenreBoiteMessage['MrFiche'] = 2)] = 'MrFiche';
    })(
      EGenreBoiteMessage ||
        (exports.EGenreBoiteMessage = EGenreBoiteMessage = {}),
    );
  },
  fn: 'enumere_boitemessage.js',
});