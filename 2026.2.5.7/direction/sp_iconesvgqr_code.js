IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgQr_code = IconeSvgQr_code;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgQr_code(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'qr_code', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M7.275 0v7.275h-7.275v-7.275h7.275zM7.275 8.743v7.257h-7.275v-7.257h7.275zM5.81 5.828v-4.359h-4.363v4.363h4.363zM5.81 14.532v-4.341h-4.363v4.341h4.363zM4.363 2.916v1.468h-1.447v-1.468h1.447zM4.363 13.106h-1.447v-1.468h1.447v1.468zM16 0v7.275h-7.275v-7.275h7.275zM16 13.106h-4.363v-1.468h-1.447v4.363h-1.468v-7.257h4.363v1.447h1.468v-1.447h1.447v4.363zM10.19 5.828h4.363v-4.359h-4.363v4.359zM13.084 4.38h-1.447v-1.465h1.447v1.465zM13.084 16h-1.447v-1.447h1.447v1.447zM16 14.553v1.447h-1.447v-1.447h1.447z',
        }),
      );
    }
  },
  fn: 'iconesvgqr_code.js',
});