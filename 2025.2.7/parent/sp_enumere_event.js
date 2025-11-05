IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EEvent = void 0;
    var EEvent;
    (function (EEvent) {
      EEvent[(EEvent['SurError'] = 1)] = 'SurError';
      EEvent[(EEvent['SurResize'] = 2)] = 'SurResize';
      EEvent[(EEvent['SurPreResize'] = 3)] = 'SurPreResize';
      EEvent[(EEvent['SurPostResize'] = 4)] = 'SurPostResize';
      EEvent[(EEvent['SurClick'] = 5)] = 'SurClick';
      EEvent[(EEvent['SurScroll'] = 6)] = 'SurScroll';
      EEvent[(EEvent['SurKeyDown'] = 7)] = 'SurKeyDown';
      EEvent[(EEvent['SurKeyUp'] = 8)] = 'SurKeyUp';
      EEvent[(EEvent['SurKeyPress'] = 9)] = 'SurKeyPress';
      EEvent[(EEvent['SurMouseMove'] = 10)] = 'SurMouseMove';
      EEvent[(EEvent['SurMouseDown'] = 11)] = 'SurMouseDown';
      EEvent[(EEvent['SurSelectStart'] = 12)] = 'SurSelectStart';
      EEvent[(EEvent['SurMouseUp'] = 13)] = 'SurMouseUp';
      EEvent[(EEvent['SurFinDeplacement'] = 14)] = 'SurFinDeplacement';
      EEvent[(EEvent['SurBlur'] = 15)] = 'SurBlur';
      EEvent[(EEvent['SurChange'] = 16)] = 'SurChange';
      EEvent[(EEvent['SurDblClick'] = 17)] = 'SurDblClick';
      EEvent[(EEvent['SurFocus'] = 18)] = 'SurFocus';
      EEvent[(EEvent['SurFocusIn'] = 19)] = 'SurFocusIn';
      EEvent[(EEvent['SurFocusOut'] = 20)] = 'SurFocusOut';
      EEvent[(EEvent['SurLoad'] = 21)] = 'SurLoad';
      EEvent[(EEvent['SurUnload'] = 22)] = 'SurUnload';
      EEvent[(EEvent['SurMouseOut'] = 23)] = 'SurMouseOut';
      EEvent[(EEvent['SurMouseOver'] = 24)] = 'SurMouseOver';
      EEvent[(EEvent['SurFinResize'] = 25)] = 'SurFinResize';
    })(EEvent || (exports.EEvent = EEvent = {}));
  },
  fn: 'enumere_event.js',
});