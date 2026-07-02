IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SToast = void 0;
    require('./Toast.scss');
    exports.SToast = {
      toast: 'toast',
      iconeSvg: 'icone-svg',
      btn: 'btn',
      shown: 'shown',
      top: 'top',
      toRight: 'to-right',
      EspaceMobileIndex: 'EspaceMobileIndex',
      introBottom: 'intro-bottom',
      introTop: 'intro-top',
      openToast: 'open-toast',
    };
  },
  fn: 'toast.css.js',
});