IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreDiscussion = void 0;
    var TypeGenreDiscussion;
    (function (TypeGenreDiscussion) {
      TypeGenreDiscussion[(TypeGenreDiscussion['GD_Discussion'] = 0)] =
        'GD_Discussion';
      TypeGenreDiscussion[(TypeGenreDiscussion['GD_ContactVS'] = 1)] =
        'GD_ContactVS';
      TypeGenreDiscussion[(TypeGenreDiscussion['GD_Conversation'] = 2)] =
        'GD_Conversation';
      TypeGenreDiscussion[(TypeGenreDiscussion['GD_Alerte'] = 3)] = 'GD_Alerte';
      TypeGenreDiscussion[(TypeGenreDiscussion['GD_Harcelement'] = 4)] =
        'GD_Harcelement';
    })(
      TypeGenreDiscussion ||
        (exports.TypeGenreDiscussion = TypeGenreDiscussion = {}),
    );
  },
  fn: 'typegenrediscussion.js',
});