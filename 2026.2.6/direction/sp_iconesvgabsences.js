IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgAbsences = IconeSvgAbsences;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgAbsences(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'absences', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M5.984 9.096h-4.888v-3.353h0.362c0.014 0 0.025-0.011 0.025-0.025v0-4.206c0-0.014-0.011-0.025-0.025-0.025h-1.434c-0.014 0-0.025 0.011-0.025 0.025v0 12.848c0 0.014 0.011 0.025 0.025 0.025v0h1.047c0.014 0 0.025-0.011 0.025-0.025v0-4.231h3.869v4.36c0 0 0 0 0 0 0 0.014 0.011 0.025 0.025 0.025 0 0 0 0 0 0h0.982c0 0 0 0 0 0 0.014 0 0.025-0.011 0.025-0.025 0 0 0 0 0 0v0-4.364c0.007-0.004 0.012-0.012 0.012-0.021 0-0 0-0 0-0v0-0.982c0-0 0-0 0-0 0-0.014-0.011-0.025-0.024-0.025h-0z',
        }),
        IE.jsx.str('path', {
          d: 'M15.262 4.087l-8.867 2.586c-0.267 0.078-0.455 0.364-0.455 0.692v0c0 0.439 0.329 0.774 0.692 0.703l0.856-0.166v6.576c0 0.019 0.016 0.035 0.035 0.035 0 0 0 0 0 0h1.376c0.019 0 0.035-0.015 0.035-0.035v0-6.156h5.622v6.157c0 0.019 0.016 0.035 0.035 0.035 0 0 0 0 0 0h1.376c0.019 0 0.035-0.015 0.035-0.035v0-9.7c0-0.462-0.362-0.802-0.738-0.692z',
        }),
      );
    }
  },
  fn: 'iconesvgabsences.js',
});