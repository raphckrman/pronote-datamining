IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.assert = void 0;
    exports.breakpoint = breakpoint;
    require('DeclarationExtensionsObjetNatif');
    const assert = (aIgnorer, aMessage) => {};
    exports.assert = assert;
    global.assert = assert;
    function breakpoint() {}
  },
  fn: 'divers.js',
});