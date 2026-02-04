IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StylesToast = void 0;
    require('Toast.css');
    exports.StylesToast = {
      toast: 'toast',
      btn: 'btn',
      info: 'info',
      alert: 'alert',
      error: 'error',
      success: 'success',
      message: 'message',
      shown: 'shown',
      top: 'top',
      toRight: 'to-right',
      introBottom: 'intro-bottom',
      introTop: 'intro-top',
      openToast: 'open-toast',
    };
  },
  fn: 'toast.css.js',
});