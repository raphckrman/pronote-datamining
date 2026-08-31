IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgQuestion_sign = IconeSvgQuestion_sign;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgQuestion_sign(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'question_sign', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M9.333 13v-2q0-0.146-0.094-0.24t-0.24-0.094h-2q-0.146 0-0.24 0.094t-0.094 0.24v2q0 0.146 0.094 0.24t0.24 0.094h2q0.146 0 0.24-0.094t0.094-0.24zM12 6q0-0.917-0.578-1.698t-1.443-1.208-1.771-0.427q-2.531 0-3.865 2.219-0.156 0.25 0.083 0.437l1.375 1.042q0.073 0.062 0.198 0.062 0.167 0 0.26-0.125 0.552-0.708 0.896-0.958 0.354-0.25 0.896-0.25 0.5 0 0.891 0.271t0.391 0.615q0 0.396-0.208 0.635t-0.708 0.469q-0.656 0.292-1.203 0.901t-0.547 1.307v0.375q0 0.146 0.094 0.24t0.24 0.094h2q0.146 0 0.24-0.094t0.094-0.24q0-0.198 0.224-0.516t0.568-0.516q0.333-0.188 0.51-0.297t0.479-0.365 0.464-0.5 0.292-0.63 0.13-0.844zM16 8q0 2.177-1.073 4.016t-2.911 2.911-4.016 1.073-4.016-1.073-2.911-2.911-1.073-4.016 1.073-4.016 2.911-2.911 4.016-1.073 4.016 1.073 2.911 2.911 1.073 4.016z',
        }),
      );
    }
  },
  fn: 'iconesvgquestion_sign.js',
});