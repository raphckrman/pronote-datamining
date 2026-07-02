IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Math.borner = function (aValeur, aMin, aMax) {
      return Math.max(Math.min(aValeur, aMax), aMin);
    };
    Math.log10 =
      Math.log10 ||
      function (x) {
        return Math.log(x) * Math.LOG10E;
      };
    (function () {
      function decimalAdjust(type, value, exp) {
        if (typeof exp === 'undefined' || +exp === 0) {
          return Math[type](value);
        }
        value = +value;
        exp = +exp;
        if (
          value === null ||
          isNaN(value) ||
          !(typeof exp === 'number' && exp % 1 === 0)
        ) {
          return NaN;
        }
        if (value < 0) {
          return -decimalAdjust(type, -value, exp);
        }
        value = value.toString().split('e');
        value = Math[type](
          +(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)),
        );
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
      }
      if (!Math.round10) {
        Math.round10 = function (value, exp) {
          return decimalAdjust('round', value, exp);
        };
      }
      if (!Math.floor10) {
        Math.floor10 = function (value, exp) {
          return decimalAdjust('floor', value, exp);
        };
      }
      if (!Math.ceil10) {
        Math.ceil10 = function (value, exp) {
          return decimalAdjust('ceil', value, exp);
        };
      }
    })();
  },
  fn: 'math.js',
});