IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgToggle_switch_off = IconeSvgToggle_switch_off;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgToggle_switch_off(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'toggle_switch_off', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M9 8q0-0.812-0.316-1.551t-0.855-1.277-1.277-0.855-1.551-0.316-1.551 0.316-1.277 0.855-0.855 1.277-0.316 1.551 0.316 1.551 0.855 1.277 1.277 0.855 1.551 0.316 1.551-0.316 1.277-0.855 0.855-1.277 0.316-1.551zM15 8q0-0.812-0.316-1.551t-0.855-1.277-1.277-0.855-1.551-0.316h-3.016q0.93 0.703 1.473 1.75t0.543 2.25-0.543 2.25-1.473 1.75h3.016q0.812 0 1.551-0.316t1.277-0.855 0.855-1.277 0.316-1.551zM16 8q0 1.016-0.398 1.941t-1.066 1.594-1.594 1.066-1.941 0.398h-6q-1.016 0-1.941-0.398t-1.594-1.066-1.066-1.594-0.398-1.941 0.398-1.941 1.066-1.594 1.594-1.066 1.941-0.398h6q1.016 0 1.941 0.398t1.594 1.066 1.066 1.594 0.398 1.941z',
        }),
      );
    }
  },
  fn: 'iconesvgtoggle_switch_off.js',
});