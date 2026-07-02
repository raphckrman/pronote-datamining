IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgToggle_switch_on = IconeSvgToggle_switch_on;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgToggle_switch_on(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'toggle_switch_on', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M0 8q0-1.016 0.398-1.941t1.066-1.594 1.594-1.066 1.941-0.398h6q1.016 0 1.941 0.398t1.594 1.066 1.066 1.594 0.398 1.941-0.398 1.941-1.066 1.594-1.594 1.066-1.941 0.398h-6q-1.016 0-1.941-0.398t-1.594-1.066-1.066-1.594-0.398-1.941zM11 12q0.812 0 1.551-0.316t1.277-0.855 0.855-1.277 0.316-1.551-0.316-1.551-0.855-1.277-1.277-0.855-1.551-0.316-1.551 0.316-1.277 0.855-0.855 1.277-0.316 1.551 0.316 1.551 0.855 1.277 1.277 0.855 1.551 0.316z',
        }),
      );
    }
  },
  fn: 'iconesvgtoggle_switch_on.js',
});