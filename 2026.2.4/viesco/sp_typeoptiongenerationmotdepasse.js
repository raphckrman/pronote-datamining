IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeOptionGenerationMotDePasse = void 0;
    var TypeOptionGenerationMotDePasse;
    (function (TypeOptionGenerationMotDePasse) {
      TypeOptionGenerationMotDePasse[
        (TypeOptionGenerationMotDePasse['OGMDP_AvecAuMoinsUneLettre'] = 0)
      ] = 'OGMDP_AvecAuMoinsUneLettre';
      TypeOptionGenerationMotDePasse[
        (TypeOptionGenerationMotDePasse['OGMDP_AvecAuMoinsUnChiffre'] = 1)
      ] = 'OGMDP_AvecAuMoinsUnChiffre';
      TypeOptionGenerationMotDePasse[
        (TypeOptionGenerationMotDePasse['OGMDP_AvecAuMoinsUnCaractereSpecial'] =
          2)
      ] = 'OGMDP_AvecAuMoinsUnCaractereSpecial';
      TypeOptionGenerationMotDePasse[
        (TypeOptionGenerationMotDePasse['OGMDP_AvecMelangeMinusculeMajuscule'] =
          3)
      ] = 'OGMDP_AvecMelangeMinusculeMajuscule';
      TypeOptionGenerationMotDePasse[
        (TypeOptionGenerationMotDePasse[
          'OGMDP_AvecControleIdentifiantDifferent'
        ] = 4)
      ] = 'OGMDP_AvecControleIdentifiantDifferent';
    })(
      TypeOptionGenerationMotDePasse ||
        (exports.TypeOptionGenerationMotDePasse =
          TypeOptionGenerationMotDePasse =
            {}),
    );
  },
  fn: 'typeoptiongenerationmotdepasse.js',
});