IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvgBolt = IconeSvgBolt;
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    function IconeSvgBolt(aAttrs) {
      return IE.jsx.str(
        IconeSvg_1.IconeSvgCustom_,
        Object.assign({ type: 'bolt', viewBox: '0 0 16 16' }, aAttrs),
        IE.jsx.str('path', {
          d: 'M12.201 4.212q0.173 0.192 0.067 0.423l-5.192 11.125q-0.125 0.24-0.404 0.24-0.038 0-0.135-0.019-0.163-0.048-0.245-0.183t-0.043-0.288l1.894-7.769-3.904 0.971q-0.038 0.010-0.115 0.010-0.173 0-0.298-0.106-0.173-0.144-0.125-0.375l1.933-7.933q0.038-0.135 0.154-0.221t0.269-0.087h3.154q0.183 0 0.308 0.12t0.125 0.284q0 0.077-0.048 0.173l-1.644 4.452 3.808-0.942q0.077-0.019 0.115-0.019 0.183 0 0.327 0.144z',
        }),
      );
    }
  },
  fn: 'iconesvgbolt.js',
});