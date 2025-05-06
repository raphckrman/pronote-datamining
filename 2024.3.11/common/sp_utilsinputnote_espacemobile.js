IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilsInputNoteGetMinMax = UtilsInputNoteGetMinMax;
    exports.UtilsInputNoteInitOptions = UtilsInputNoteInitOptions;
    const ObjetTraduction_1 = require('ObjetTraduction');
    const MethodesObjet_1 = require('MethodesObjet');
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
        listeAnnotations: null,
        sansNotePossible: true,
        min: 0,
        max: 100,
        selectionSurFocus: true,
        textAlign: 'right',
        hintSurErreur: false,
        titreMessageMinMax: '',
        messageMinMax:
          'La valeur doit être comprise entre %s et %s',
        maxLength: 15,
        avecSigneMoins: false,
        htmlContexte: '',
      };
    }
  },
  fn: 'utilsinputnote_espacemobile.js',
});