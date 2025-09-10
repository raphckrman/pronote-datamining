IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetOptionsEspaceLocal = void 0;
    const LocalStorage_1 = require('LocalStorage');
    const ThemesCouleurs_1 = require('ThemesCouleurs');
    const TypeThemeCouleur_1 = require('TypeThemeCouleur');
    const MethodesObjet_1 = require('MethodesObjet');
    const AccessApp_1 = require('AccessApp');
    class ObjetOptionsEspaceLocal {
      constructor(aOptions) {
        this.options = $.extend(
          { racine: 'OPTIONS_ESPACE_', nomProduit: '', espace: '' },
          aOptions,
        );
        try {
          ThemesCouleurs_1.ThemesCouleurs.setChoixDarkMode(
            this.getChoixDarkMode(),
          );
        } catch (e) {}
      }
      getOptionsJSON() {
        let lJSON = LocalStorage_1.IELocalStorage.getItemJSON(
          this.options.racine + (this.options.nomProduit || ''),
        );
        if (!lJSON) {
          lJSON = {};
        }
        return lJSON;
      }
      setOptionsJSON(aJSON) {
        LocalStorage_1.IELocalStorage.setItemJSON(
          this.options.racine + (this.options.nomProduit || ''),
          aJSON,
        );
      }
      getOptionEspace(aNomOption) {
        return this.getOptionsJSON()[aNomOption + '_' + this.options.espace];
      }
      setOptionEspace(aNomOption, aValeur) {
        const lJSON = this.getOptionsJSON();
        if (aValeur) {
          lJSON[aNomOption + '_' + this.options.espace] = aValeur;
        } else if (
          aValeur === undefined ||
          aValeur === null ||
          aValeur === false
        ) {
          delete lJSON[aNomOption + '_' + this.options.espace];
        }
        this.setOptionsJSON(lJSON);
        return this;
      }
      getAvecCodeCompetences() {
        return !!this.getOptionEspace('avecCC');
      }
      setAvecCodeCompetences(aModeAccessible) {
        this.setOptionEspace('avecCC', aModeAccessible);
      }
      getChoixDarkMode() {
        let lResult = this.getOptionEspace('choix-darkmode');
        if (
          !MethodesObjet_1.MethodesObjet.valueInEnum(
            lResult,
            TypeThemeCouleur_1.ChoixDarkMode,
          )
        ) {
          lResult = TypeThemeCouleur_1.ChoixDarkMode.clair;
        }
        return lResult;
      }
      setChoixDarkMode(aChoix) {
        this.setOptionEspace('choix-darkmode', aChoix);
        ThemesCouleurs_1.ThemesCouleurs.setChoixDarkMode(aChoix);
      }
      getSyntheseVocaleActif() {
        return false;
      }
      setSyntheseVocaleActif(aActif) {
        return this;
      }
      getSyntheseVocaleAvecSurlignage() {
        return !!this.getOptionEspace('ieSVSurLignage');
      }
      setSyntheseVocaleAvecSurlignage(aValeur) {
        return this;
      }
      getVoixSyntheseVocale() {
        return this.getOptionEspace('ieSVVoix');
      }
      setVoixSyntheseVocale(aUriVoix) {
        this.setOptionEspace('ieSVVoix', aUriVoix);
        return this;
      }
    }
    exports.ObjetOptionsEspaceLocal = ObjetOptionsEspaceLocal;
  },
  fn: 'objetoptionsespacelocal.js',
});