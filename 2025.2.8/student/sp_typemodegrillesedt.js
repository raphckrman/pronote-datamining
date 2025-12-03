IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeModeGrillesEDT = void 0;
    var TypeModeGrillesEDT;
    (function (TypeModeGrillesEDT) {
      TypeModeGrillesEDT[(TypeModeGrillesEDT['TMG_CycleHebdomadaire'] = 0)] =
        'TMG_CycleHebdomadaire';
      TypeModeGrillesEDT[(TypeModeGrillesEDT['TMG_CycleAvecferies'] = 1)] =
        'TMG_CycleAvecferies';
      TypeModeGrillesEDT[(TypeModeGrillesEDT['TMG_CycleSansFeries'] = 2)] =
        'TMG_CycleSansFeries';
    })(
      TypeModeGrillesEDT ||
        (exports.TypeModeGrillesEDT = TypeModeGrillesEDT = {}),
    );
  },
  fn: 'typemodegrillesedt.js',
});