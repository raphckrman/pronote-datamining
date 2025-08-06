IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GStyle = exports.ObjetStyle = exports.EGenreBordure = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetSupport_1 = require('ObjetSupport');
    const EGenreBordure = {
      gauche: 1,
      haut: 2,
      droite: 4,
      bas: 8,
      avecBordure(aBordures, aGenreBordure) {
        return aGenreBordure > 0 && aBordures > 0
          ? !!(aBordures & aGenreBordure)
          : false;
      },
    };
    exports.EGenreBordure = EGenreBordure;
    class ObjetStyle {
      composeCouleur(
        aCouleurFond,
        aCouleurTexte,
        aCouleurBordure,
        aLargeurBordure,
        aListeBordures,
      ) {
        return (
          this.composeCouleurFond(aCouleurFond) +
          this.composeCouleurTexte(aCouleurTexte) +
          this.composeCouleurBordure(
            aCouleurBordure,
            aLargeurBordure,
            aListeBordures,
          )
        );
      }
      composeCouleurBordure(
        aCouleurBordure,
        aLargeurBordure = 1,
        aListeBordures = 0,
        aStyle = 'solid',
      ) {
        if (
          aCouleurBordure &&
          MethodesObjet_1.MethodesObjet.isString(aCouleurBordure)
        ) {
          const lStyle = aStyle || 'solid';
          if (!MethodesObjet_1.MethodesObjet.isNumeric(aLargeurBordure)) {
            aLargeurBordure = 1;
          }
          if (!aListeBordures) {
            return (
              ' border: ' +
              aLargeurBordure +
              'px ' +
              lStyle +
              ' ' +
              aCouleurBordure +
              ';'
            );
          }
          const H = [];
          H.push(
            aListeBordures & EGenreBordure.gauche
              ? ' border-left: ' +
                  aLargeurBordure +
                  'px ' +
                  lStyle +
                  ' ' +
                  aCouleurBordure +
                  ';'
              : '',
          );
          H.push(
            aListeBordures & EGenreBordure.haut
              ? ' border-top: ' +
                  aLargeurBordure +
                  'px ' +
                  lStyle +
                  ' ' +
                  aCouleurBordure +
                  ';'
              : '',
          );
          H.push(
            aListeBordures & EGenreBordure.droite
              ? ' border-right: ' +
                  aLargeurBordure +
                  'px ' +
                  lStyle +
                  ' ' +
                  aCouleurBordure +
                  ';'
              : '',
          );
          H.push(
            aListeBordures & EGenreBordure.bas
              ? ' border-bottom: ' +
                  aLargeurBordure +
                  'px ' +
                  lStyle +
                  ' ' +
                  aCouleurBordure +
                  ';'
              : '',
          );
          return H.join('');
        }
        return '';
      }
      composeCouleurFond(aCouleurFond) {
        if (!aCouleurFond) {
          return '';
        }
        if (MethodesObjet_1.MethodesObjet.isString(aCouleurFond)) {
          return ' background-color:' + aCouleurFond + ';';
        }
        return '';
      }
      composeCouleurTexte(aCouleurTexte) {
        if (!aCouleurTexte) {
          return '';
        }
        if (MethodesObjet_1.MethodesObjet.isString(aCouleurTexte)) {
          return ' color:' + aCouleurTexte + ';';
        }
        return '';
      }
      composeHeight(aValeur, aFormat) {
        if (
          aValeur &&
          MethodesObjet_1.MethodesObjet.isString(aValeur) &&
          aValeur.indexOf &&
          aValeur.indexOf('%') > 0
        ) {
          aValeur = parseFloat(aValeur);
          aFormat = '%';
        }
        if (!MethodesObjet_1.MethodesObjet.isNumber(aValeur)) {
          return '';
        }
        if (!aFormat) {
          aFormat = 'px';
        }
        return 'height:' + aValeur + aFormat + ';';
      }
      composeWidth(aValeur, aFormat) {
        if (
          aValeur &&
          MethodesObjet_1.MethodesObjet.isString(aValeur) &&
          aValeur.indexOf &&
          aValeur.indexOf('%') > 0
        ) {
          aValeur = parseFloat(aValeur);
          aFormat = '%';
        }
        if (!MethodesObjet_1.MethodesObjet.isNumber(aValeur)) {
          return '';
        }
        if (!aFormat) {
          aFormat = 'px';
        }
        return 'width:' + aValeur + aFormat + ';';
      }
      composeHeightCalc(aValeur) {
        if (!MethodesObjet_1.MethodesObjet.isNumber(aValeur)) {
          return '';
        }
        return 'height: calc(100% - ' + aValeur + 'px);';
      }
      composeWidthCalc(aValeur) {
        if (!MethodesObjet_1.MethodesObjet.isNumber(aValeur)) {
          return '';
        }
        return 'width: calc(100% - ' + aValeur + 'px);';
      }
      composeMarge(aHaut, aBas, aGauche, aDroit) {
        let lResult = '';
        if (MethodesObjet_1.MethodesObjet.isNumeric(aHaut)) {
          lResult += 'margin-top: ' + aHaut + 'px; ';
        }
        if (MethodesObjet_1.MethodesObjet.isNumeric(aBas)) {
          lResult += 'margin-bottom: ' + aBas + 'px; ';
        }
        if (MethodesObjet_1.MethodesObjet.isNumeric(aGauche)) {
          lResult += 'margin-left: ' + aGauche + 'px; ';
        }
        if (MethodesObjet_1.MethodesObjet.isNumeric(aDroit)) {
          lResult += 'margin-right: ' + aDroit + 'px; ';
        }
        return lResult;
      }
      composeOpacite(aOpacite) {
        if (
          !MethodesObjet_1.MethodesObjet.isNumeric(aOpacite) ||
          aOpacite < 0 ||
          aOpacite > 1
        ) {
          return '';
        }
        aOpacite = Math.borner(aOpacite, 0, 1);
        if (
          ObjetSupport_1.Support.supportOpacity[
            ObjetSupport_1.Support.GenreNavigateur.Standard
          ]
        ) {
          return 'opacity: ' + aOpacite + ';';
        } else if (
          ObjetSupport_1.Support.supportOpacity[
            ObjetSupport_1.Support.GenreNavigateur.Webkit
          ]
        ) {
          return '-webkit-opacity: ' + aOpacite + ';';
        } else if (
          ObjetSupport_1.Support.supportOpacity[
            ObjetSupport_1.Support.GenreNavigateur.Moz
          ]
        ) {
          return '-moz-opacity: ' + aOpacite + ';';
        } else if (ObjetSupport_1.Support.supportFilterIE) {
          return (
            'FILTER: progid:DXImageTransform.Microsoft.Alpha(opacity=' +
            aOpacite * 100 +
            ')' +
            ';'
          );
        } else {
          return '';
        }
      }
      getStyle(aId) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        if (E) {
          return E.style;
        }
      }
      setStyle(aId, aStyle) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        if (E) {
          if (E.setAttribute) {
            E.setAttribute('style', aStyle);
          }
        }
      }
      setCouleurBordure(aId, aCouleur) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        if (E) {
          E.style.borderColor = aCouleur;
        }
      }
      setCouleurBordureHaut(aId, aCouleur) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        if (E) {
          E.style.borderTopColor = aCouleur;
        }
      }
      setCouleurBordureBas(aId, aCouleur) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        if (E && E.style) {
          E.style.borderBottomColor = aCouleur;
        }
      }
      setCouleurBordureGauche(aId, aCouleur) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        if (E) {
          E.style.borderLeftColor = aCouleur;
        }
      }
      setCouleurBordureDroit(aId, aCouleur) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        if (E) {
          E.style.borderRightColor = aCouleur;
        }
      }
      setCouleur(aId, aCouleurFond, aCouleurTexte, aCouleurBordure) {
        if (aCouleurFond || aCouleurFond === '') {
          this.setCouleurFond(aId, aCouleurFond);
        }
        if (aCouleurTexte || aCouleurTexte === '') {
          this.setCouleurTexte(aId, aCouleurTexte);
        }
        if (aCouleurBordure || aCouleurBordure === '') {
          this.setCouleurBordure(aId, aCouleurBordure);
        }
      }
      setCouleurFond(aId, aCouleurFond) {
        const S = this.getStyle(aId);
        if (S) {
          S.backgroundColor = aCouleurFond;
        }
      }
      setCouleurTexte(aId, aCouleurTexte) {
        const S = this.getStyle(aId);
        if (S) {
          S.color = aCouleurTexte;
        }
      }
      setVisible(aId, aVisible) {
        const S = this.getStyle(aId);
        if (S) {
          S.visibility = aVisible ? 'visible' : 'hidden';
        }
      }
      setGras(aId, aGras) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        if (E && ObjetHtml_1.GHtml.estElement(E)) {
          E.style.fontWeight = aGras ? 'bold' : 'normal';
        }
      }
      getZindex(aId) {
        const S = this.getStyle(aId);
        if (S && S.zIndex) {
          return parseInt(S.zIndex);
        }
      }
      setZindex(aId, aZindex) {
        const S = this.getStyle(aId);
        if (S) {
          S.zIndex = aZindex;
        }
      }
      getDisplay(aId) {
        const S = this.getStyle(aId);
        return S.display === '';
      }
      setDisplay(aId, aDisplay, aSpeed) {
        ObjetHtml_1.GHtml.setDisplay(aId, aDisplay, aSpeed);
      }
      getVisible(aId) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        return E.style ? E.style.visibility === 'visible' : false;
      }
      composeDegradeVertical(aCouleurDebut, aCouleurFin) {
        let lResult = this.composeCouleurFond(aCouleurDebut);
        if (ObjetSupport_1.Support.supportFilterIE) {
          lResult +=
            ' FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=' +
            aCouleurDebut +
            ',endColorStr=' +
            aCouleurFin +
            ');';
        } else if (
          ObjetSupport_1.Support.supportGradient[
            ObjetSupport_1.Support.GenreNavigateur.Standard
          ]
        ) {
          lResult +=
            ' background: linear-gradient(to bottom, ' +
            aCouleurDebut +
            ', ' +
            aCouleurFin +
            ');';
        } else if (
          ObjetSupport_1.Support.supportGradient[
            ObjetSupport_1.Support.GenreNavigateur.IE
          ]
        ) {
          lResult +=
            ' background: -ms-linear-gradient(top, ' +
            aCouleurDebut +
            ', ' +
            aCouleurFin +
            ');';
        } else if (
          ObjetSupport_1.Support.supportGradient[
            ObjetSupport_1.Support.GenreNavigateur.Moz
          ]
        ) {
          lResult +=
            ' background: -moz-linear-gradient(top, ' +
            aCouleurDebut +
            ', ' +
            aCouleurFin +
            ');';
        } else if (
          ObjetSupport_1.Support.supportGradient[
            ObjetSupport_1.Support.GenreNavigateur.Webkit
          ]
        ) {
          lResult +=
            ' background: -webkit-gradient(linear, left top, left bottom, from(' +
            aCouleurDebut +
            '), to(' +
            aCouleurFin +
            '));';
        }
        return lResult;
      }
      setImageFond(aId, aImage) {
        const S = this.getStyle(aId);
        if (S) {
          S.backgroundImage = 'url(' + aImage + ')';
          S.backgroundAttachment = 'fixed';
        }
      }
      getComputedValue(aNode, aPropertyName) {
        const lNode = ObjetHtml_1.GHtml.getElement(aNode);
        if (lNode && global.getComputedStyle && aPropertyName) {
          try {
            return global
              .getComputedStyle(lNode)
              .getPropertyValue(aPropertyName);
          } catch (e) {}
        }
        return '';
      }
      getFloatComputedValue(aNode, aPropertyName) {
        const lNumber = parseFloat(this.getComputedValue(aNode, aPropertyName));
        return isNaN(lNumber) ? 0 : lNumber;
      }
      styleSheetDisabled() {
        let lResult = false;
        try {
          const lBody = document.getElementsByTagName('BODY')[0];
          const lElement = document.createElement('div');
          lBody.appendChild(lElement);
          lElement.classList.add('support-css-test');
          lResult = this.getFloatComputedValue(lElement, 'height') === 0;
          lBody.removeChild(lElement);
        } catch (e) {}
        return lResult;
      }
    }
    exports.ObjetStyle = ObjetStyle;
    const GStyle = new ObjetStyle();
    exports.GStyle = GStyle;
  },
  fn: 'objetstyle.js',
});