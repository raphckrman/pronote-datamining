IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgRefresh = IconeSvgRefresh;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgRefresh(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'refresh', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M15.74 9.667q0 0.052-0.010 0.073-0.667 2.792-2.792 4.526t-4.979 1.734q-1.521 0-2.943-0.573t-2.536-1.635l-1.344 1.344q-0.198 0.198-0.469 0.198t-0.469-0.198-0.198-0.469v-4.667q0-0.271 0.198-0.469t0.469-0.198h4.667q0.271 0 0.469 0.198t0.198 0.469-0.198 0.469l-1.427 1.427q0.74 0.688 1.677 1.063t1.948 0.375q1.396 0 2.604-0.677t1.938-1.865q0.115-0.177 0.552-1.219 0.083-0.24 0.313-0.24h2q0.135 0 0.234 0.099t0.099 0.234zM16 1.333v4.667q0 0.271-0.198 0.469t-0.469 0.198h-4.667q-0.271 0-0.469-0.198t-0.198-0.469 0.198-0.469l1.437-1.437q-1.542-1.427-3.635-1.427-1.396 0-2.604 0.677t-1.938 1.865q-0.115 0.177-0.552 1.219-0.083 0.24-0.313 0.24h-2.073q-0.135 0-0.234-0.099t-0.099-0.234v-0.073q0.677-2.792 2.813-4.526t5-1.734q1.521 0 2.958 0.578t2.552 1.63l1.354-1.344q0.198-0.198 0.469-0.198t0.469 0.198 0.198 0.469z',
        }),
      );
    }
  },
  fn: 'iconesvgrefresh.js',
});