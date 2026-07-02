IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitairePatienceCP = void 0;
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Enumere_MessageHtml_1 = require('@cp/script/Enumere/Enumere_MessageHtml');
    class UtilitairePatienceCP {
      constructor(aParams) {
        this.parametres = {
          target: '_blank',
          genre: Enumere_MessageHtml_1.EGenreMessageHtml.patiencePartenaire,
        };
        if (aParams) {
          $.extend(this.parametres, aParams);
        }
      }
      ouvrirPatience() {
        try {
          const lApp = (0, AccessApp_1.getApp)();
          if (!lApp.estAppliMobile) {
            const lUrl =
              Enumere_MessageHtml_1.EGenreMessageHtmlUtil.construireUrl(
                this.parametres.genre,
              );
            this.windowURL = window.open(lUrl, this.parametres.target);
          }
        } catch (e) {
          this.windowURL = null;
        }
      }
      fermerPatience() {
        if (this.windowURL) {
          this.windowURL.close();
          this.windowURL = null;
        }
      }
      ouvrirUrl(aUrl, aForcerPatience) {
        if (aForcerPatience) {
          this.ouvrirPatience();
        }
        if (this.windowURL) {
          setTimeout(() => {
            this.windowURL.location.replace(aUrl);
          }, 0);
        } else {
          window.open(aUrl, this.parametres.target);
        }
      }
    }
    exports.UtilitairePatienceCP = UtilitairePatienceCP;
  },
  fn: 'utilitairepatiencecp.js',
});