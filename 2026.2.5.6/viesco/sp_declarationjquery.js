IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('jquery');
    require('jquery.min');
    (function ($) {
      $.event.special.destroyed = {
        remove: function (event, ...aRest) {
          if (event.handler) {
            event.handler.call(this, event, ...aRest);
          }
        },
      };
    })(jQuery);
  },
  fn: 'declarationjquery.js',
});