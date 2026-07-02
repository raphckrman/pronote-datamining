IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgFiltre = IconeSvgFiltre;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgFiltre(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'filtre', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M15.802 1.448c0.128-0.158 0.198-0.356 0.198-0.559 0-0.491-0.398-0.889-0.889-0.889h-14.222c-0.361 0-0.688 0.22-0.822 0.556-0.045 0.105-0.067 0.219-0.067 0.333 0 0.206 0.072 0.405 0.202 0.564l0.563 0.686 3.172 3.872 2.011 2.444c0.18 0.17 0.28 0.408 0.275 0.656v6c0 0.491 0.398 0.889 0.889 0.889 0.184 0 0.364-0.058 0.514-0.164l0.053-0.041 1.753-1.316c0.219-0.167 0.345-0.427 0.347-0.702v-4.667c0-0.242 0.098-0.475 0.273-0.642l5.75-7.020z',
        }),
      );
    }
  },
  fn: 'iconesvgfiltre.js',
});