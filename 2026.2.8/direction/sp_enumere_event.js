IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EEvent = void 0;
    var EEvent;
    (function (EEvent) {
      EEvent[(EEvent['SurClick'] = 5)] = 'SurClick';
      EEvent[(EEvent['SurKeyDown'] = 7)] = 'SurKeyDown';
      EEvent[(EEvent['SurKeyUp'] = 8)] = 'SurKeyUp';
      EEvent[(EEvent['SurMouseMove'] = 10)] = 'SurMouseMove';
      EEvent[(EEvent['SurMouseDown'] = 11)] = 'SurMouseDown';
      EEvent[(EEvent['SurMouseUp'] = 13)] = 'SurMouseUp';
      EEvent[(EEvent['SurBlur'] = 15)] = 'SurBlur';
      EEvent[(EEvent['SurFocus'] = 18)] = 'SurFocus';
      EEvent[(EEvent['SurFocusOut'] = 20)] = 'SurFocusOut';
    })(EEvent || (exports.EEvent = EEvent = {}));
  },
  fn: 'enumere_event.js',
});