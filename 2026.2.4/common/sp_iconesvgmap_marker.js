IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgMap_marker = IconeSvgMap_marker;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgMap_marker(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'map_marker', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M10.667 5.333q0-1.104-0.781-1.885t-1.885-0.781-1.885 0.781-0.781 1.885 0.781 1.885 1.885 0.781 1.885-0.781 0.781-1.885zM13.333 5.333q0 1.135-0.344 1.865l-3.792 8.063q-0.167 0.344-0.495 0.542t-0.703 0.198-0.703-0.198-0.484-0.542l-3.802-8.063q-0.344-0.729-0.344-1.865 0-2.208 1.563-3.771t3.771-1.563 3.771 1.563 1.563 3.771z',
        }),
      );
    }
  },
  fn: 'iconesvgmap_marker.js',
});