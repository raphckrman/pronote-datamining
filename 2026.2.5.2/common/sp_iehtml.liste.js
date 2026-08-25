IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Liste = Liste;
    const tslib_1 = require('tslib');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    function Liste(_a) {
      var _b;
      var { model } = _a,
        aProps = tslib_1.__rest(_a, ['model']);
      const lModel = model();
      const lParamsIdent = {
        create: () =>
          new ObjetListe_1.ObjetListe({
            pere: lModel.pere,
            evenement: lModel.evenement,
          }),
        start: lModel.init,
        destroy: lModel.destroy,
      };
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        IEHtml_1.IEHtml.getCommentHtmlDebug(
          `<Liste> model="${(_b = model.name) !== null && _b !== void 0 ? _b : 'JSX anonyme'}"`,
        ),
        IE.jsx.str(
          'div',
          Object.assign({}, aProps, { ie_identite: () => lParamsIdent }),
        ),
      );
    }
  },
  fn: 'iehtml.liste.js',
});