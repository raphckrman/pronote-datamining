IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHint_1 = require('ObjetHint');
    const ObjetStyle_1 = require('ObjetStyle');
    const c_PPP = '…';
    function _reductionTextMultiline(aNode, aNodeText, aChaine, aOptions) {
      let lAvecModif = false;
      try {
        const lConteneur = $(aNode).parent();
        let lHeight = 0;
        const lWidth = Math.round(lConteneur.width());
        let lLineHeight = 0;
        if (
          MethodesObjet_1.MethodesObjet.isNumber(aOptions.nbLignesMax) &&
          aOptions.nbLignesMax > 0
        ) {
          try {
            lLineHeight = ObjetStyle_1.GStyle.getComputedValue(
              aNode,
              'line-height',
            );
            if (lLineHeight === 'normal') {
              lLineHeight =
                Math.ceil(
                  ObjetStyle_1.GStyle.getFloatComputedValue(aNode, 'font-size'),
                ) * 1.2;
            } else {
              lLineHeight = Math.ceil(parseFloat(lLineHeight));
            }
          } catch (e) {
            return true;
          }
          lHeight =
            lLineHeight *
            (aOptions.nbLignesMax > 0 &&
            MethodesObjet_1.MethodesObjet.isNumber(aOptions.nbLignesMax)
              ? aOptions.nbLignesMax
              : 1);
          if (!MethodesObjet_1.MethodesObjet.isNumber(lHeight)) {
            return true;
          }
        } else {
          lHeight = Math.floor(lConteneur.height());
        }
        const lEnOverflowHeight = function () {
          return lHeight > 0 && aNode.clientHeight - 1 > lHeight;
        };
        const lEnOverflow = function () {
          return (
            lHeight > 0 &&
            lWidth > 0 &&
            (lEnOverflowHeight() || aNode.scrollWidth - 1 > lWidth)
          );
        };
        if (lEnOverflow()) {
          lAvecModif = true;
          const cMinNbCar = 1;
          const lMinIndex = cMinNbCar;
          let lMaxIndex = aChaine.length;
          while (lMaxIndex > lMinIndex && lEnOverflow()) {
            const lMaxTemp = Math.floor((lMaxIndex + lMinIndex) / 2 || 0);
            if (lMaxTemp > lMinIndex) {
              if (lEnOverflowHeight()) {
                aNodeText.nodeValue = aChaine.slice(0, lMaxTemp) + c_PPP;
                if (lEnOverflowHeight()) {
                  lMaxIndex = lMaxTemp;
                }
              } else {
                const lClientHeight = aNode.clientHeight;
                aNodeText.nodeValue = aChaine.slice(0, lMaxTemp) + c_PPP;
                if (lEnOverflow() && aNode.clientHeight === lClientHeight) {
                  lMaxIndex = lMaxTemp;
                }
              }
            }
            lMaxIndex = lMaxIndex - 1;
            aNodeText.nodeValue = aChaine.slice(0, lMaxIndex) + c_PPP;
          }
        }
      } catch (e) {}
      if (
        lAvecModif &&
        aOptions.avecHint &&
        !ObjetHint_1.ObjetHint.getDisabled() &&
        !ObjetHint_1.ObjetHint.nodeDansHint(aNode)
      ) {
        ObjetHint_1.ObjetHint.attach({
          $Element: MethodesObjet_1.MethodesObjet.isFunction(
            aOptions.getJNodeHint,
          )
            ? $(aOptions.getJNodeHint(aNode))
            : $(aNode),
          namespace: 'ieellipsismultiline',
          contenu: aChaine,
          off: false,
        });
      }
      return true;
    }
    IEHtml.addAttribut(
      'ie-ellipsis-multiline',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lOptions = {
          nbLignesMax: aAttributValue || '',
          avecHint: true,
          getJNodeHint: null,
        };
        if (lOptions.nbLignesMax) {
          const lGetOptions = aOutils.getAccesParametres(
            aAttributValue,
            aContexteCourant,
          );
          if (lGetOptions.estFonction) {
            Object.assign(lOptions, lGetOptions.callback());
          } else {
            lOptions.nbLignesMax = parseInt(lOptions.nbLignesMax, 10);
          }
          if (!MethodesObjet_1.MethodesObjet.isNumber(lOptions.nbLignesMax)) {
            lOptions.nbLignesMax = '';
          }
        }
        if (
          !aContexteCourant.node.childNodes ||
          aContexteCourant.node.childNodes.length > 1
        ) {
          return true;
        }
        if (aContexteCourant.node.childNodes.length === 0) {
          return true;
        }
        const lNodeText = aContexteCourant.node.childNodes[0];
        if (!lNodeText || lNodeText.nodeType !== 3) {
          return true;
        }
        const lValueText = lNodeText.nodeValue;
        if (
          !lValueText ||
          !MethodesObjet_1.MethodesObjet.isString(lValueText) ||
          lValueText.length < 3
        ) {
          return true;
        }
        let lTraite = false;
        aOutils.surInjectionHtml(aContexteCourant, () => {
          if (
            !lTraite &&
            aContexteCourant.node.clientHeight > 0 &&
            aContexteCourant.node.clientWidth > 0
          ) {
            lTraite = _reductionTextMultiline(
              aContexteCourant.node,
              lNodeText,
              lValueText,
              lOptions,
            );
          }
        });
        aOutils.abonnerRefresh(
          () => {
            if (
              !lTraite &&
              aContexteCourant.node.scrollHeight > 0 &&
              aContexteCourant.node.clientWidth > 0
            ) {
              lTraite = _reductionTextMultiline(
                aContexteCourant.node,
                lNodeText,
                lValueText,
                lOptions,
              );
            }
          },
          aContexteCourant.node,
          aContexteCourant,
        );
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie-ellipsis-multiline="' + lOptions.nbLignesMax + '"',
        );
        return true;
      },
    );
  },
  fn: 'iehtml.ellipisismultiline.js',
});