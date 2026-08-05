IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.getApp = getApp;
    exports.setApp = setApp;
    setApp(null);
    function getApp() {
      return global.GApplication;
    }
    function setApp(aApp) {
      global.GApplication = aApp;
    }
  },
  fn: 'accessapp.js',
});