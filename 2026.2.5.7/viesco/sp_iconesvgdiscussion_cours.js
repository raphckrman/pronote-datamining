IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgDiscussion_cours = IconeSvgDiscussion_cours;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgDiscussion_cours(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign(
          { type: 'discussion_cours', viewBox: '0 0 16 16' },
          aAttrs,
        ),
        IE.jsx.str('path', {
          d: 'M15.292 14.977c-0.15 0-0.298-0.050-0.398-0.15l-2.391-1.842h-10.959c-0.847 0-1.544-0.647-1.544-1.494v-8.924c0-0.847 0.697-1.544 1.544-1.544h12.253c0.847 0 1.544 0.697 1.544 1.544v8.874l0.647 2.789c0.050 0.248-0.050 0.548-0.298 0.697-0.148 0.050-0.298 0.050-0.397 0.050v0zM1.544 2.367c-0.1 0-0.2 0.1-0.2 0.2v8.924c0 0.1 0.1 0.2 0.2 0.2h11.207c0.15 0 0.298 0.050 0.398 0.15l1.095 0.847-0.298-1.045c0-0.050 0-0.1 0-0.15v-8.926c0-0.1-0.1-0.2-0.2-0.2h-12.203z',
        }),
        IE.jsx.str('path', {
          d: 'M5.827 6.934c0 0.55-0.445 0.997-0.997 0.997s-0.997-0.445-0.997-0.997c0-0.55 0.445-0.997 0.997-0.997s0.997 0.447 0.997 0.997v0z',
        }),
        IE.jsx.str('path', {
          d: 'M8.468 6.934c0 0.55-0.445 0.997-0.997 0.997s-0.997-0.445-0.997-0.997c0-0.55 0.445-0.997 0.997-0.997s0.997 0.447 0.997 0.997v0z',
        }),
        IE.jsx.str('path', {
          d: 'M11.107 6.934c0 0.55-0.445 0.997-0.997 0.997-0.55 0-0.997-0.445-0.997-0.997 0-0.55 0.445-0.997 0.997-0.997s0.997 0.447 0.997 0.997v0z',
        }),
      );
    }
  },
  fn: 'iconesvgdiscussion_cours.js',
});