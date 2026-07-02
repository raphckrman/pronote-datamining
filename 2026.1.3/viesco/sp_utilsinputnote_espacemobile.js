IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilsInputNoteGetMinMax = UtilsInputNoteGetMinMax;
    exports.UtilsInputNoteInitOptions = UtilsInputNoteInitOptions;
    const TypeNote_1 = require('@cp/script/Type/TypeNote');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    function UtilsInputNoteGetMinMax(aMinMax) {
      let lValeurMin;
      if (MethodesObjet_1.MethodesObjet.isFunction(aMinMax)) {
        lValeurMin = aMinMax();
      } else {
        lValeurMin = aMinMax;
      }
      return lValeurMin;
    }
    function UtilsInputNoteInitOptions() {
      return {
        avecVirgule: true,
        afficherAvecVirgule: true,
        avecAnnotation: true,
        listeAnnotations: undefined,
        sansNotePossible: true,
        min: 0,
        max: 100,
        selectionSurFocus: true,
        textAlign: 'right',
        ignorerMessageErreur: false,
        sansTooltipMinMax: false,
        titreMessageMinMax: '',
        messageMinMax: TypeNote_1.TradTypeNote.InputNote.MinMax,
        maxLength: 15,
        avecSigneMoins: false,
        htmlContexte: '',
      };
    }
  },
  fn: 'utilsinputnote_espacemobile.js',
});