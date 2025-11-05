IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('DeclarationJQuery');
    $.fn.extend({
      inputChecked(aValue) {
        const $this = $(this);
        if (aValue === undefined) {
          return $this.is(':checked');
        }
        $this.prop('checked', aValue);
        $this.trigger('IEChecked');
        return $this;
      },
    });
  },
  fn: 'jinputchecked.js',
});