IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetParametresCP = void 0;
    class ObjetParametresCP {
      getNomEspace() {
        return '';
      }
      getCookieValidationAppli() {
        return '';
      }
      estPeriodeTrimestrielle(aNumeroPeriode) {
        return false;
      }
      estPeriodeSemestrielle(aNumeroPeriode) {
        return false;
      }
      estPeriodeOfficielle(aNumeroPeriode) {
        return true;
      }
      setDocumentTitle(aLibelleOnglet) {
        return;
      }
    }
    exports.ObjetParametresCP = ObjetParametresCP;
  },
  fn: 'objetparametrescp.js',
});