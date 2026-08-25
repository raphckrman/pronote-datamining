IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreElementAssociation = void 0;
    var TypeGenreElementAssociation;
    (function (TypeGenreElementAssociation) {
      TypeGenreElementAssociation[
        (TypeGenreElementAssociation['GEA_Texte'] = 0)
      ] = 'GEA_Texte';
      TypeGenreElementAssociation[
        (TypeGenreElementAssociation['GEA_Image'] = 1)
      ] = 'GEA_Image';
      TypeGenreElementAssociation[
        (TypeGenreElementAssociation['GEA_Son'] = 2)
      ] = 'GEA_Son';
    })(
      TypeGenreElementAssociation ||
        (exports.TypeGenreElementAssociation = TypeGenreElementAssociation =
          {}),
    );
  },
  fn: 'typegenreassociationquestionqcm.js',
});