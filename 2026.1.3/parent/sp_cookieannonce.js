IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.CookieAnnonce = void 0;
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const LocalStorage_1 = require('@librairies/script/Divers/LocalStorage');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const TradCookieAnnonce = ObjetTraduction_1.TraductionsModule.getModule(
      'CookieAnnonce',
      {
        CookieInfo_Message_1: '',
        CookieInfo_Message_2_S: '',
        PolitiqueConfidentialite: '',
      },
    );
    class CookieAnnonce {
      static async afficher() {
        var _a;
        var _b;
        const lApp = (0, AccessApp_1.getApp)();
        if (lApp.getDemo()) {
          return;
        }
        const lEtatUtil = lApp.getEtatUtilisateur();
        let lKeyStorage =
          this.CookieLocalStorage +
          (lEtatUtil ? '_' + lEtatUtil.GenreEspace : '');
        if (!LocalStorage_1.IELocalStorage.getItem(lKeyStorage)) {
          LocalStorage_1.IELocalStorage.setItem(lKeyStorage, 'true');
        }
        if (LocalStorage_1.IELocalStorage.getItem(lKeyStorage) !== 'true') {
          return;
        }
        const lUrl =
          (_b =
            (_a = lApp.getObjetParametres()) === null || _a === void 0
              ? void 0
              : _a.urlConfidentialite) !== null && _b !== void 0
            ? _b
            : '';
        if (!lUrl) {
          return;
        }
        await lApp
          .getMessage()
          .afficher({
            message: IE.jsx.str(
              'p',
              {
                class: [
                  Divers_css_1.SD.tailleM,
                  Divers_css_1.SD.fontWeightMedium,
                ],
              },
              `${TradCookieAnnonce.CookieInfo_Message_1} ${TradCookieAnnonce.CookieInfo_Message_2_S.format(
                [
                  IE.jsx.str(
                    'a',
                    { href: lUrl, class: 'as-link' },
                    TradCookieAnnonce.PolitiqueConfidentialite,
                  ),
                ],
              )} `,
            ),
            avecAbonnementFermetureFenetreGenerale: false,
          });
        LocalStorage_1.IELocalStorage.setItem(lKeyStorage, 'false');
      }
    }
    exports.CookieAnnonce = CookieAnnonce;
    CookieAnnonce.CookieLocalStorage = 'etatAffichageCookiesInfo';
  },
  fn: 'cookieannonce.js',
});