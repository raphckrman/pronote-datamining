IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreExerciceDeQuestionnaireUtil =
      exports.TypeGenreExerciceDeQuestionnaire = void 0;
    var TypeGenreExerciceDeQuestionnaire;
    (function (TypeGenreExerciceDeQuestionnaire) {
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_Inconnu'] = 0)
      ] = 'GEQ_Inconnu';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_SingleChoice'] = 1)
      ] = 'GEQ_SingleChoice';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_MultiChoice'] = 2)
      ] = 'GEQ_MultiChoice';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_TrueFalse'] = 3)
      ] = 'GEQ_TrueFalse';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_NumericalAnswer'] = 4)
      ] = 'GEQ_NumericalAnswer';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_ShortAnswer'] = 5)
      ] = 'GEQ_ShortAnswer';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_SpellAnswer'] = 6)
      ] = 'GEQ_SpellAnswer';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_Matching'] = 7)
      ] = 'GEQ_Matching';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_ClozeField'] = 8)
      ] = 'GEQ_ClozeField';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_ClozeFixed'] = 9)
      ] = 'GEQ_ClozeFixed';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_ClozeVariable'] = 10)
      ] = 'GEQ_ClozeVariable';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_Essay'] = 11)
      ] = 'GEQ_Essay';
      TypeGenreExerciceDeQuestionnaire[
        (TypeGenreExerciceDeQuestionnaire['GEQ_WordOrder'] = 12)
      ] = 'GEQ_WordOrder';
    })(
      TypeGenreExerciceDeQuestionnaire ||
        (exports.TypeGenreExerciceDeQuestionnaire =
          TypeGenreExerciceDeQuestionnaire =
            {}),
    );
    const TypeGenreExerciceDeQuestionnaireUtil = {
      getClasseImage(aGenreQuestion) {
        let lClass = '';
        if (
          aGenreQuestion === TypeGenreExerciceDeQuestionnaire.GEQ_SingleChoice
        ) {
          lClass = 'Image_QCM_ChoixUnique';
        } else if (
          aGenreQuestion === TypeGenreExerciceDeQuestionnaire.GEQ_MultiChoice
        ) {
          lClass = 'Image_QCM_ChoixMultiple';
        } else if (
          aGenreQuestion ===
          TypeGenreExerciceDeQuestionnaire.GEQ_NumericalAnswer
        ) {
          lClass = 'Image_QCM_ReponseNumerique';
        } else if (
          aGenreQuestion === TypeGenreExerciceDeQuestionnaire.GEQ_ShortAnswer
        ) {
          lClass = 'Image_QCM_ReponseASaisir';
        } else if (
          aGenreQuestion === TypeGenreExerciceDeQuestionnaire.GEQ_SpellAnswer
        ) {
          lClass = 'Image_QCM_ReponseEpellation';
        } else if (
          aGenreQuestion === TypeGenreExerciceDeQuestionnaire.GEQ_Matching
        ) {
          lClass = 'Image_QCM_Association';
        } else if (
          aGenreQuestion === TypeGenreExerciceDeQuestionnaire.GEQ_ClozeField
        ) {
          lClass = 'Image_QCM_TexteATrou_Saisie';
        } else if (
          aGenreQuestion === TypeGenreExerciceDeQuestionnaire.GEQ_ClozeFixed
        ) {
          lClass = 'Image_QCM_TexteATrou_Liste';
        } else if (
          aGenreQuestion === TypeGenreExerciceDeQuestionnaire.GEQ_ClozeVariable
        ) {
          lClass = 'Image_QCM_TexteATrou_Listes';
        }
        return lClass;
      },
    };
    exports.TypeGenreExerciceDeQuestionnaireUtil =
      TypeGenreExerciceDeQuestionnaireUtil;
  },
  fn: 'typegenreexercicedequestionnaire.js',
});