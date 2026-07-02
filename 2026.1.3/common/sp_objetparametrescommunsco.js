IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetParametresCommunSco = void 0;
    const ObjetParametresCP_1 = require('@cp/script/ObjetParametresCP');
    class ObjetParametresCommunSco extends ObjetParametresCP_1.ObjetParametresCP {
      constructor(aJSON) {
        super();
        Object.assign(this, aJSON);
        if (aJSON.urlSiteInfosHebergement) {
          this.urlInfosHebergement = aJSON.urlSiteInfosHebergement;
        }
      }
      setDocumentTitle(aLibelleOnglet) {
        const lLibelleOnglet = aLibelleOnglet ? aLibelleOnglet + ' - ' : '';
        const lLibelleProduit =
          this.nomProduit + (this.versionPN ? ' ' + this.versionPN : '');
        document.title = `${lLibelleOnglet}${lLibelleProduit} - ${this.NomEtablissementConnexion}`;
      }
    }
    exports.ObjetParametresCommunSco = ObjetParametresCommunSco;
  },
  fn: 'objetparametrescommunsco.js',
});