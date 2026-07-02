IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreDocumentJoint = void 0;
    var EGenreDocumentJoint;
    (function (EGenreDocumentJoint) {
      EGenreDocumentJoint[(EGenreDocumentJoint['Url'] = 0)] = 'Url';
      EGenreDocumentJoint[(EGenreDocumentJoint['Fichier'] = 1)] = 'Fichier';
      EGenreDocumentJoint[(EGenreDocumentJoint['Cloud'] = 2)] = 'Cloud';
      EGenreDocumentJoint[(EGenreDocumentJoint['LienKiosque'] = 3)] =
        'LienKiosque';
      EGenreDocumentJoint[(EGenreDocumentJoint['LienVisio'] = 4)] = 'LienVisio';
    })(
      EGenreDocumentJoint ||
        (exports.EGenreDocumentJoint = EGenreDocumentJoint = {}),
    );
  },
  fn: 'enumere_documentjoint.js',
});