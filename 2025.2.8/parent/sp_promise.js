IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('es6-promise.auto.min.js');
    require('es6-promise.auto.js');
    if (!Promise.prototype['finally']) {
      Promise.prototype['finally'] = function finallyPolyfill(callback) {
        let { constructor } = this;
        return this.then(
          (value) => {
            return constructor.resolve(callback()).then(() => {
              return value;
            });
          },
          (reason) => {
            return constructor.resolve(callback()).then(() => {
              throw reason;
            });
          },
        );
      };
    }
  },
  fn: 'promise.js',
});