IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('DeclarationJQuery');
    $.fn.extend({
      inputDisabled(aValue) {
        const $this = $(this);
        if (aValue === undefined) {
          return $this.is(':disabled');
        } else {
          $this.attr('disabled', aValue ? 'disabled' : null);
          $this.trigger('IEDisabled');
          return $this;
        }
      },
    });
  },
  fn: 'jinputdisabled.js',
});