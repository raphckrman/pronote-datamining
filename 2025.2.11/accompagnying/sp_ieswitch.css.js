IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StylesIESwitch = void 0;
    require('IESwitch.css');
    exports.StylesIESwitch = {
      switchField: 'switch-field',
      switch: 'switch',
      lever: 'lever',
      tabbed: 'tabbed',
    };
  },
  fn: 'ieswitch.css.js',
});