IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFullscreen = IconeSvgFullscreen;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFullscreen(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'fullscreen', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M13.364 4.302l-3.698 3.698 3.698 3.698 1.5-1.5q0.302-0.323 0.729-0.146 0.406 0.177 0.406 0.615v4.667q0 0.271-0.198 0.469t-0.469 0.198h-4.667q-0.437 0-0.615-0.417-0.177-0.406 0.146-0.719l1.5-1.5-3.698-3.698-3.698 3.698 1.5 1.5q0.323 0.313 0.146 0.719-0.177 0.417-0.615 0.417h-4.667q-0.271 0-0.469-0.198t-0.198-0.469v-4.667q0-0.437 0.417-0.615 0.406-0.177 0.719 0.146l1.5 1.5 3.698-3.698-3.698-3.698-1.5 1.5q-0.198 0.198-0.469 0.198-0.125 0-0.25-0.052-0.417-0.177-0.417-0.615v-4.667q0-0.271 0.198-0.469t0.469-0.198h4.667q0.437 0 0.615 0.417 0.177 0.406-0.146 0.719l-1.5 1.5 3.698 3.698 3.698-3.698-1.5-1.5q-0.323-0.313-0.146-0.719 0.177-0.417 0.615-0.417h4.667q0.271 0 0.469 0.198t0.198 0.469v4.667q0 0.437-0.406 0.615-0.135 0.052-0.26 0.052-0.271 0-0.469-0.198z',
        }),
      );
    }
  },
  fn: 'iconesvgfullscreen.js',
});