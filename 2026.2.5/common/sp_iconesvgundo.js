IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgUndo = IconeSvgUndo;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgUndo(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'undo', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M16 8q0 1.625-0.635 3.104t-1.708 2.552-2.552 1.708-3.104 0.635q-1.792 0-3.406-0.755t-2.75-2.13q-0.073-0.104-0.068-0.234t0.089-0.214l1.427-1.437q0.104-0.094 0.26-0.094 0.167 0.021 0.24 0.125 0.76 0.99 1.865 1.531t2.344 0.542q1.083 0 2.068-0.422t1.703-1.141 1.141-1.703 0.422-2.068-0.422-2.068-1.141-1.703-1.703-1.141-2.068-0.422q-1.021 0-1.958 0.37t-1.667 1.057l1.427 1.437q0.323 0.313 0.146 0.719-0.177 0.417-0.615 0.417h-4.667q-0.271 0-0.469-0.198t-0.198-0.469v-4.667q0-0.437 0.417-0.615 0.406-0.177 0.719 0.146l1.354 1.344q1.115-1.052 2.547-1.63t2.964-0.578q1.625 0 3.104 0.635t2.552 1.708 1.708 2.552 0.635 3.104z',
        }),
      );
    }
  },
  fn: 'iconesvgundo.js',
});