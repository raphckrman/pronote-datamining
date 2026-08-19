IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgQuestion = IconeSvgQuestion;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgQuestion(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'question', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M9.826 12.5v3q0 0.2-0.15 0.35t-0.35 0.15h-3q-0.2 0-0.35-0.15t-0.15-0.35v-3q0-0.2 0.15-0.35t0.35-0.15h3q0.2 0 0.35 0.15t0.15 0.35zM13.776 5q0 0.675-0.194 1.262t-0.438 0.956-0.688 0.744-0.719 0.544-0.762 0.444q-0.513 0.288-0.856 0.812t-0.344 0.837q0 0.213-0.15 0.406t-0.35 0.194h-3q-0.187 0-0.319-0.231t-0.131-0.469v-0.562q0-1.037 0.812-1.956t1.787-1.356q0.738-0.338 1.050-0.7t0.313-0.95q0-0.525-0.581-0.925t-1.344-0.4q-0.812 0-1.35 0.362-0.438 0.313-1.337 1.437-0.162 0.2-0.387 0.2-0.15 0-0.313-0.1l-2.050-1.563q-0.163-0.125-0.194-0.313t0.069-0.35q2-3.325 5.8-3.325 1 0 2.012 0.387t1.825 1.037 1.325 1.594 0.513 1.981z',
        }),
      );
    }
  },
  fn: 'iconesvgquestion.js',
});