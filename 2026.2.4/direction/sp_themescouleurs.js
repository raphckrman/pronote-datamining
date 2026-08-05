IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ThemesCouleurs = void 0;
    const TypeThemeCouleur_1 = require('@cp/script/Theme/TypeThemeCouleur');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const AccessApp_1 = require('@cp/script/AccessApp');
    class ThemesCouleurs {
      constructor() {
        var _a, _b, _c, _d;
        this.elementZoneFenetre = null;
        this.choixDarkMode = TypeThemeCouleur_1.ChoixDarkMode.clair;
        this.estDarkModeSysteme = false;
        this.setTheme(null);
        Invocateur_1.Invocateur.abonner('creationZoneFenetre', (aElement) => {
          this.elementZoneFenetre = aElement;
          $(this.elementZoneFenetre).addClass(this.getClassThemeCourant());
        });
        if (global.matchMedia) {
          try {
            this.estDarkModeSysteme =
              (_a = global.matchMedia) === null || _a === void 0
                ? void 0
                : _a.call(global, '(prefers-color-scheme: dark)').matches;
            (_d =
              (_c =
                (_b = global.matchMedia) === null || _b === void 0
                  ? void 0
                  : _b.call(global, '(prefers-color-scheme: dark)')) === null ||
              _c === void 0
                ? void 0
                : _c.addEventListener) === null || _d === void 0
              ? void 0
              : _d.call(_c, 'change', (event) => {
                  var _a, _b;
                  this.estDarkModeSysteme =
                    (_b =
                      (_a = global.matchMedia) === null || _a === void 0
                        ? void 0
                        : _a.call(global, '(prefers-color-scheme: dark)')) ===
                      null || _b === void 0
                      ? void 0
                      : _b.matches;
                  this.actualiserDarkMode();
                });
          } catch (e) {}
        }
      }
      setTheme(aGenreTheme) {
        this.genreTheme = aGenreTheme;
        if (document.body && (0, AccessApp_1.getApp)()) {
          this.actualiserDarkMode();
          this.actualiserTheme();
        }
      }
      getThemeCourant() {
        var _a;
        return (_a = this.genreTheme) !== null && _a !== void 0 ? _a : null;
      }
      getClassThemeCourant() {
        let lNomTheme = '';
        (0, TypeThemeCouleur_1.forEachThemesCouleurEtProduitEtCollectivite)(
          (aTheme, aKey) => {
            if (aTheme === this.genreTheme) {
              lNomTheme = aKey;
            }
          },
        );
        if (lNomTheme) {
          return 'Theme' + lNomTheme;
        } else {
          return 'ThemeNeutre';
        }
      }
      actualiserTheme() {
        const lTabRemove = ['ThemeNeutre'];
        (0, TypeThemeCouleur_1.forEachThemesCouleurEtProduitEtCollectivite)(
          (aTheme, aKey) => {
            lTabRemove.push('Theme' + aKey);
          },
        );
        const lNomTheme = this.getClassThemeCourant();
        $('#' + (0, AccessApp_1.getApp)().getIdConteneur().escapeJQ())
          .removeClass(lTabRemove.join(' '))
          .addClass(lNomTheme);
        if (this.elementZoneFenetre) {
          $(this.elementZoneFenetre)
            .removeClass(lTabRemove.join(' '))
            .addClass(lNomTheme);
        }
      }
      getDarkMode() {
        switch (this.choixDarkMode) {
          case TypeThemeCouleur_1.ChoixDarkMode.clair: {
            return false;
          }
          case TypeThemeCouleur_1.ChoixDarkMode.sombre: {
            return true;
          }
          case TypeThemeCouleur_1.ChoixDarkMode.systeme: {
            return this.estDarkModeSysteme;
          }
          default:
        }
        return false;
      }
      setChoixDarkMode(aChoixThemeSombre) {
        this.choixDarkMode = aChoixThemeSombre;
        this.actualiserDarkMode();
      }
      actualiserDarkMode() {
        if (this.getDarkMode()) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }
    }
    const lThemesCouleurs = new ThemesCouleurs();
    exports.ThemesCouleurs = lThemesCouleurs;
  },
  fn: 'themescouleurs.js',
});