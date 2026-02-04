IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireCss = UtilitaireCss;
    const MethodesObjet_1 = require('MethodesObjet');
    function UtilitaireCss() {}
    let uCacheReglesCss = null;
    let uCacheCss = null;
    const uTailleMaxCacheCss = 50;
    function _trouverSelecteur(aSelecteursTexte, aNomRegleCss) {
      if (aSelecteursTexte && aSelecteursTexte.join) {
        for (let i = 0; i < aSelecteursTexte.length; i++) {
          if (aSelecteursTexte[i] === aNomRegleCss) {
            return true;
          }
        }
      }
      return false;
    }
    function _remplirCacheReglesCss() {
      let lStyleSheet, lRules, lRegles, lRegle, lSelecteurTexte;
      uCacheReglesCss = [];
      for (let I = document.styleSheets.length - 1; I >= 0; I--) {
        lStyleSheet = document.styleSheets[I];
        if (lStyleSheet && lStyleSheet.href) {
          try {
            lRules = lStyleSheet.cssRules || lStyleSheet.rules;
          } catch (e) {
            lRules = null;
            IE.log.addLog('lecture cssRules : exception=> ' + e);
          }
          if (lRules) {
            lRegles = [];
            uCacheReglesCss.push(lRegles);
            for (let J = 0; J < lRules.length; J++) {
              try {
                lSelecteurTexte = lRules[J].selectorText;
              } catch (e) {
                IE.log.addLog(e);
              }
              lRegle = { selecteurs: [], regle: lRules[J] };
              if (lSelecteurTexte && lSelecteurTexte.split) {
                const lTabSelector = lSelecteurTexte.split(',');
                if (lTabSelector) {
                  for (let i = 0; i < lTabSelector.length; i++) {
                    lRegle.selecteurs.push(
                      lTabSelector[i] &&
                        lTabSelector[i].trim &&
                        lTabSelector[i].trim().toLowerCase().replace(/'/g, '"'),
                    );
                  }
                }
              }
              lRegles.push(lRegle);
            }
          }
        }
      }
    }
    function _chercherReglesCss(aNomRegleCss) {
      if (
        !aNomRegleCss ||
        !MethodesObjet_1.MethodesObjet.isString(aNomRegleCss)
      ) {
        return null;
      }
      aNomRegleCss = aNomRegleCss.toLowerCase();
      if (!uCacheReglesCss) {
        _remplirCacheReglesCss();
      }
      if (uCacheCss && uCacheCss[aNomRegleCss]) {
        return uCacheCss[aNomRegleCss];
      }
      const lRegles = [];
      try {
        aNomRegleCss = aNomRegleCss.trim().toLowerCase().replace(/'/g, '"');
        for (let I = uCacheReglesCss.length - 1; I >= 0; I--) {
          const lRules = uCacheReglesCss[I];
          if (lRules) {
            for (let J = lRules.length - 1; J >= 0; J--) {
              const lRegle = lRules[J];
              if (lRegle) {
                if (_trouverSelecteur(lRegle.selecteurs, aNomRegleCss)) {
                  lRegles.push(lRegle.regle);
                }
              }
            }
          }
        }
        if (lRegles.length > 0) {
          if (!uCacheCss) {
            uCacheCss = [];
          }
          if (uCacheCss.length >= uTailleMaxCacheCss) {
            for (let lProp in uCacheCss) {
              delete uCacheCss[lProp];
              break;
            }
          }
          uCacheCss[aNomRegleCss] = lRegles;
          return lRegles;
        } else {
          return null;
        }
      } catch (e) {
        IE.log.addLog('lecture cssRules : exception=> ' + e);
      }
    }
    function _convertirProprieteCSS(aProprieteCSS) {
      const lTab = aProprieteCSS.split('-');
      for (let i = 1; i < lTab.length; i++) {
        lTab[i] = lTab[i].ucfirst();
      }
      return lTab.join('');
    }
    function _modifierProprieteCSS(aRule, aProprieteCSS, aValeur) {
      try {
        if (aRule && aRule.style) {
          if (aRule.style.setProperty) {
            aRule.style.setProperty(aProprieteCSS, aValeur, null);
          } else {
            aProprieteCSS = _convertirProprieteCSS(aProprieteCSS);
            if (
              !MethodesObjet_1.MethodesObjet.isUndefined(
                aRule.style[aProprieteCSS],
              )
            ) {
              aRule.style[aProprieteCSS] = aValeur;
            }
          }
        }
      } catch (e) {
        return false;
      }
      return true;
    }
    function _getRegleQuiDefinitProprieteCSS(aTabRegles, aProprieteCSS) {
      if (!aTabRegles) {
        return null;
      }
      let lAttribut;
      for (let i = 0; i < aTabRegles.length; i++) {
        const lRegle = aTabRegles[i];
        if (lRegle && lRegle.style) {
          aProprieteCSS = _convertirProprieteCSS(aProprieteCSS);
          lAttribut = lRegle.style[aProprieteCSS];
          if (
            lAttribut !== null &&
            lAttribut !== undefined &&
            lAttribut !== ''
          ) {
            return lRegle;
          }
        }
      }
      return null;
    }
    UtilitaireCss.modifierRegleCss = function (
      aNomRegleCss,
      aProprieteCSS,
      aValeur,
    ) {
      const lRegles = _chercherReglesCss(aNomRegleCss);
      if (!lRegles) {
        return false;
      }
      let lRegleAModifier = _getRegleQuiDefinitProprieteCSS(
        lRegles,
        aProprieteCSS,
      );
      if (lRegleAModifier === null || lRegleAModifier === undefined) {
        lRegleAModifier = lRegles[0];
      }
      return _modifierProprieteCSS(lRegleAModifier, aProprieteCSS, aValeur);
    };
    UtilitaireCss.chercherAttributReglesCss = function (
      aNomRegleCss,
      aAttribut,
    ) {
      const lRegles = _chercherReglesCss(aNomRegleCss);
      if (!lRegles) {
        return '';
      }
      let lAttribut;
      for (let i = 0; i < lRegles.length; i++) {
        if (lRegles[i] && lRegles[i].style) {
          lAttribut = lRegles[i].style[aAttribut];
          if (
            lAttribut !== null &&
            lAttribut !== undefined &&
            lAttribut !== ''
          ) {
            return lRegles[i].style[aAttribut];
          }
        }
      }
      return '';
    };
    UtilitaireCss.extraireUrlReglesCss = function (aNomRegleCss) {
      const lUrl = UtilitaireCss.chercherAttributReglesCss(
        aNomRegleCss,
        'backgroundImage',
      );
      if (!lUrl || lUrl.length === 0) {
        return '';
      }
      const lTabSplitDoubleQuote = lUrl.split('"');
      let lTab = lTabSplitDoubleQuote[1];
      if (!lTab) {
        const lTabSplitSimpleQuote = lUrl.split("'");
        lTab = lTabSplitSimpleQuote[1];
      }
      if (!lTab) {
        const lTabSplitOuvParenthese = lUrl.split('(');
        lTab = lTabSplitOuvParenthese[1];
        if (!lTab) {
          return '';
        }
        const lTabSplitFermParenthese = lTab.split(')');
        lTab = lTabSplitFermParenthese[0];
      }
      if (!lTab) {
        return '';
      }
      const lTabSplitSlash = lTab.split('/');
      const lTab2 = [];
      for (let j = 0; j < lTabSplitSlash.length; j++) {
        if (lTabSplitSlash[j] !== '..') {
          lTab2.push(lTabSplitSlash[j]);
        }
      }
      return lTab2.join('/');
    };
  },
  fn: 'utilitairecss.js',
});