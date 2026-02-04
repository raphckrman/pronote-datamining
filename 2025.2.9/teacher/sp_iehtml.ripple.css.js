IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StylesIEHtmlRipple = void 0;
    require('IEHtml.Ripple.css');
    exports.StylesIEHtmlRipple = {
      ieRipple: 'ie-ripple',
      disabled: 'disabled',
      ieRippleDisabled: 'ie-ripple-disabled',
      ieRippleClaire: 'ie-ripple-claire',
      ieRippleActivation: 'ie-ripple-activation',
      ieRippleDeactivation: 'ie-ripple-deactivation',
      ieRippleRadiusIn: 'ie-ripple-radius-in',
      ieRippleOpacityIn: 'ie-ripple-opacity-in',
      ieRippleOpacityOut: 'ie-ripple-opacity-out',
    };
  },
  fn: 'iehtml.ripple.css.js',
});