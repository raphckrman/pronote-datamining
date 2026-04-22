IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireChangementLangueProduit = void 0;
    require('ChangementLangue.css');
    const uNomCookieLangue = 'ielang';
    exports.UtilitaireChangementLangueProduit = {
      affecterLangue(aIdLang) {
        const lDate = new Date();
        lDate.setDate(lDate.getDate() + 365);
        document.cookie =
          uNomCookieLangue +
          '=' +
          aIdLang +
          '; expires=' +
          lDate.toUTCString() +
          '; path=/;';
        window.location.reload();
      },
      getImageCss(aLangId) {
        switch (aLangId) {
          case 12:
          case 1036:
            return 'Image_flagFR';
          case 1033:
            return 'Image_flagGB';
          case 1031:
            return 'Image_flagDE';
          case 9:
          case 2057:
            return 'Image_flagGB';
          case 2060:
            return 'Image_flagBE';
          case 3084:
            return 'Image_flagCA';
          case 4108:
            return 'Image_flagCH';
          case 16:
          case 1040:
            return 'Image_flagIT';
          case 2067:
            return 'Image_flagNL';
          case 6145:
            return 'Image_flagMA';
          case 10:
          case 3082:
            return 'Image_flagES';
          default:
            return 'Image_flagFR';
        }
      },
      getCodeLangueIso639(aLangId) {
        switch (aLangId) {
          case 12:
          case 1036:
            return 'fr';
          case 1033:
            return 'en';
          case 1031:
            return 'de';
          case 9:
          case 2057:
            return 'en';
          case 2060:
            return 'fr';
          case 3084:
            return 'ca';
          case 4108:
            return 'ch';
          case 16:
          case 1040:
            return 'it';
          case 2067:
            return 'nl';
          case 6145:
            return 'ar';
          case 10:
          case 3082:
            return 'es';
          default:
            return 'fr';
        }
      },
      getCodeLangueIetf(aLangId) {
        switch (aLangId) {
          case 12:
          case 1036:
            return 'fr-FR';
          case 1033:
            return 'en-US';
          case 1031:
            return 'de-DE';
          case 9:
          case 2057:
            return 'en-GB';
          case 2060:
            return 'fr-BE';
          case 3084:
            return 'fr-CA';
          case 4108:
            return 'fr-CH';
          case 16:
          case 1040:
            return 'it-IT';
          case 2067:
            return 'nl-BE';
          case 6145:
            return 'ar-MA';
          case 10:
          case 3082:
            return 'es-ES';
          default:
            return 'fr-FR';
        }
      },
    };
  },
  fn: 'utilitairechangementlangueproduit.js',
});