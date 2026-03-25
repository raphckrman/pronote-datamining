IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Widget = void 0;
    const ObjetIdentite_1 = require('ObjetIdentite');
    var Widget;
    (function (Widget) {
      class ObjetWidget extends ObjetIdentite_1.Identite {}
      Widget.ObjetWidget = ObjetWidget;
    })(Widget || (exports.Widget = Widget = {}));
  },
  fn: 'objetwidget.js',
});