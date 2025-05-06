IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ThemesCouleurs = void 0;
    const TypeThemeCouleur_1 = require('TypeThemeCouleur');
    const Invocateur_1 = require('Invocateur');
    class ObjetThemesCouleurs {
      constructor() {
        var _a;
        this.elementZoneFenetre = null;
        this.choixDarkMode = TypeThemeCouleur_1.ChoixDarkMode.clair;
        this.estDarkModeSysteme = false;
        this.avecChoixForcerDarkMode_DEBUG = !IE.estMobile;
        this.setTheme(null, true);
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
            global
              .matchMedia('(prefers-color-scheme: dark)')
              .addEventListener('change', (event) => {
                var _a;
                this.estDarkModeSysteme =
                  (_a = global.matchMedia) === null || _a === void 0
                    ? void 0
                    : _a.call(global, '(prefers-color-scheme: dark)').matches;
                this.actualiserDarkMode();
              });
          } catch (e) {}
        }
      }
      setTheme(aGenreTheme, aModeAccessible) {
        this.genreTheme = aGenreTheme;
        this.estModeAccessible = aModeAccessible;
        if (document.body && global.GApplication) {
          this.setModeAccessible(aModeAccessible);
          this.actualiserDarkMode();
          this.actualiserTheme();
        }
      }
      getClassThemeCourant() {
        if (!this.estModeAccessible) {
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
        return 'ThemeNeutre';
      }
      actualiserTheme() {
        const lTabRemove = ['ThemeNeutre'];
        (0, TypeThemeCouleur_1.forEachThemesCouleurEtProduitEtCollectivite)(
          (aTheme, aKey) => {
            lTabRemove.push('Theme' + aKey);
          },
        );
        const lNomTheme = this.getClassThemeCourant();
        $('#' + GApplication.getIdConteneur().escapeJQ())
          .removeClass(lTabRemove.join(' '))
          .addClass(lNomTheme);
        if (this.elementZoneFenetre) {
          $(this.elementZoneFenetre)
            .removeClass(lTabRemove.join(' '))
            .addClass(lNomTheme);
        }
      }
      getDarkMode() {
        var _a, _b, _c, _d, _e;
        if (
          this.avecChoixForcerDarkMode_DEBUG &&
          ((_b =
            (_a = global.GApplication) === null || _a === void 0
              ? void 0
              : _a.estDebug) === null || _b === void 0
            ? void 0
            : _b.call(_a))
        ) {
          return (_e =
            (_d =
              (_c = global.GApplication) === null || _c === void 0
                ? void 0
                : _c.getOptionsDebug) === null || _d === void 0
              ? void 0
              : _d.call(_c)) === null || _e === void 0
            ? void 0
            : _e.forcerDarkMode;
        }
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
      getModeAccessible() {
        return this.estModeAccessible;
      }
      setModeAccessible(aModeAccessible) {
        this.estModeAccessible = aModeAccessible;
        if (this.estModeAccessible) {
          document.body.classList.add('ThemeAccessible');
        } else {
          document.body.classList.remove('ThemeAccessible');
        }
        this.actualiserTheme();
      }
    }
    exports.ThemesCouleurs = new ObjetThemesCouleurs();
  },
  fn: 'themescouleurs.js',
});