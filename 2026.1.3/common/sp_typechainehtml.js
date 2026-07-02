IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeChaineHtml = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const Enumere_ChampsJSON_1 = require('@cp/script/Enumere/Enumere_ChampsJSON');
    const TypeHttpVariable_1 = require('@cp/script/Enumere/TypeHttpVariable');
    class TypeChaineHtml {
      constructor(aChaineHtml) {
        this.chaineHtml = MethodesObjet_1.MethodesObjet.isString(aChaineHtml)
          ? aChaineHtml
          : '';
      }
      toJSON() {
        const lJSON = {};
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type] =
          TypeHttpVariable_1.TypeHttpVariable.TypeHttpHtml;
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur] = this.chaineHtml;
        return lJSON;
      }
    }
    exports.TypeChaineHtml = TypeChaineHtml;
  },
  fn: 'typechainehtml.js',
});