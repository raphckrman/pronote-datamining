IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SIESwitch = void 0;
    require('./IESwitch.scss');
    exports.SIESwitch = {
      switchField: 'switch-field',
      switch: 'switch',
      lever: 'lever',
      iconeSvg: 'icone-svg',
      off: 'off',
      on: 'on',
      tabbed: 'tabbed',
    };
  },
  fn: 'ieswitch.css.js',
});