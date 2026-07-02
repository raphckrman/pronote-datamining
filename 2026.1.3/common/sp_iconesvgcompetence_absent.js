IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgCompetence_absent = IconeSvgCompetence_absent;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgCompetence_absent(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'competence_absent', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M12.665 13.333v-8.082c-0.031-3.656-1.052-5.251-5.333-5.251h-5.333v2.667h3.625c2.625 0 3.969-0.086 3.969 2.99v0.5h-3.253c-3.233 0.038-4.781 1.969-4.781 5 0 2.938 1.292 4.843 4.886 4.843h8v-2.667zM9.815 11.419c-0 0.82-0.665 1.484-1.484 1.484h-1.677c-0.819 0-1.484-0.664-1.484-1.484v0-0.645c0-0.819 0.664-1.484 1.484-1.484v0h1.677c0.82 0 1.484 0.664 1.484 1.484v0z',
        }),
      );
    }
  },
  fn: 'iconesvgcompetence_absent.js',
});