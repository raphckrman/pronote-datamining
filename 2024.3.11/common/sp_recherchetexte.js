IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.RechercheTexte = void 0;
    const ComparateurChaines_1 = require('ComparateurChaines');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetPosition_1 = require('ObjetPosition');
    const tag_1 = require('tag');
    class RechercheTexte {
      static getTabRechercheTexteNormalize(aStrSearch) {
        let lRecherche =
          aStrSearch && aStrSearch.trim
            ? aStrSearch
                .trim()
                .replace(/\s\s/g, '')
                .replace(/[-[\]/{}()*+?.\\^$|']/g, '\\$&')
            : '';
        const lTabRecherches = [];
        ComparateurChaines_1.ComparateurChaines.normalize(lRecherche)
          .split(' ')
          .forEach((aVal) => {
            if (
              aVal &&
              aVal.trim &&
              aVal.trim() &&
              !lTabRecherches.includes(aVal)
            ) {
              lTabRecherches.push(aVal.trim());
            }
          });
        return lTabRecherches;
      }
      static trouverRechercheTabTexteNormalize(aParams) {
        const lParams = Object.assign(
          {
            str: '',
            str_avecEntites: true,
            tabSearch: null,
            strSearch: null,
            strSearch_avecEntites: true,
          },
          aParams,
        );
        if (!lParams.str || !lParams.str.trim) {
          return false;
        }
        if (lParams.str_avecEntites) {
          lParams.str = ObjetChaine_1.GChaine.enleverEntites(lParams.str);
        }
        if (!lParams.tabSearch && lParams.strSearch) {
          lParams.tabSearch = RechercheTexte.getTabRechercheTexteNormalize(
            lParams.strSearch,
          );
        }
        if (!lParams.tabSearch || !lParams.tabSearch.every) {
          return true;
        }
        return lParams.tabSearch.every((aSearch) => {
          const lSearch = lParams.strSearch_avecEntites
            ? ObjetChaine_1.GChaine.enleverEntites(aSearch)
            : aSearch;
          return new RegExp(lSearch, 'i').test(
            ComparateurChaines_1.ComparateurChaines.normalize(lParams.str),
          );
        });
      }
      static surlignage(aTabDOM, aStrSearch) {
        if (!aTabDOM || !aTabDOM.every) {
          return false;
        }
        try {
          const lTabRanges = [];
          const lTabRecherches =
            RechercheTexte.getTabRechercheTexteNormalize(aStrSearch);
          const lDOMSuppression = [];
          aTabDOM.forEach((aElementDOM) => {
            if (
              aElementDOM.classList.contains(
                RechercheTexte.cssSurlignageConteneur,
              )
            ) {
              lDOMSuppression.push(aElementDOM);
            }
            lTabRecherches.forEach((aStrSearch) => {
              const lRegEx = new RegExp(aStrSearch, 'ig');
              let lRange = null;
              const lRectConteneur =
                ObjetPosition_1.GPosition.getClientRect(aElementDOM);
              let lMatch = lRegEx.exec(
                ComparateurChaines_1.ComparateurChaines.normalize(
                  aElementDOM.textContent,
                ),
              );
              while (lMatch) {
                let lStrSearch = lMatch[0];
                let lCurrentIndex = 0;
                _iterateNodeText(aElementDOM, (aNodeText) => {
                  if (
                    lMatch.index >= lCurrentIndex &&
                    aNodeText.nodeValue &&
                    lMatch.index < lCurrentIndex + aNodeText.nodeValue.length
                  ) {
                    lRange = new Range();
                    lRange.setStart(aNodeText, lMatch.index - lCurrentIndex);
                  }
                  if (
                    lRange &&
                    lMatch.index + lStrSearch.length >= lCurrentIndex &&
                    lMatch.index + lStrSearch.length <=
                      lCurrentIndex + aNodeText.nodeValue.length
                  ) {
                    lRange.setEnd(
                      aNodeText,
                      lMatch.index + lStrSearch.length - lCurrentIndex,
                    );
                    lTabRanges.push({
                      node: aElementDOM,
                      rects: lRange.getClientRects(),
                      rectCellule: lRectConteneur,
                    });
                    lRange = null;
                  }
                  lCurrentIndex += aNodeText.nodeValue.length;
                });
                lMatch = lRegEx.exec(aElementDOM.textContent);
              }
            });
          });
          lDOMSuppression.forEach((aElementDOM) => {
            $(aElementDOM)
              .removeClass(RechercheTexte.cssSurlignageConteneur)
              .find(`.${RechercheTexte.cssSurlignage}`)
              .remove();
          });
          lTabRanges.forEach((aInfos) => {
            const lRectCellule = aInfos.rectCellule;
            for (let i = 0; i < aInfos.rects.length; i++) {
              const lRect = aInfos.rects[i];
              if (lRect.width > 0 && lRect.height > 0) {
                if (i > 0) {
                  const lRectPrec = aInfos.rects[i - 1];
                  if (
                    lRectPrec.x === lRect.x &&
                    lRectPrec.y === lRect.y &&
                    lRectPrec.width === lRect.width &&
                    lRectPrec.height === lRect.height
                  ) {
                    continue;
                  }
                }
                $(aInfos.node)
                  .addClass(RechercheTexte.cssSurlignageConteneur)
                  .append(
                    (0, tag_1.tag)('div', {
                      class: RechercheTexte.cssSurlignage,
                      style: `top:${lRect.y - lRectCellule.y}px; left:${lRect.x - lRectCellule.x}px; width:${lRect.width}px; height:${lRect.height}px;"`,
                    }),
                  );
              }
            }
          });
          return true;
        } catch (e) {
          return false;
        }
      }
      static removeSurlignage(aJElement) {
        if (aJElement.hasClass(RechercheTexte.cssSurlignageConteneur)) {
          aJElement
            .removeClass(RechercheTexte.cssSurlignageConteneur)
            .find(`.${RechercheTexte.cssSurlignage}`)
            .remove();
        } else {
          aJElement
            .find(`.${RechercheTexte.cssSurlignageConteneur}`)
            .removeClass(RechercheTexte.cssSurlignageConteneur)
            .find(`.${RechercheTexte.cssSurlignage}`)
            .remove();
        }
      }
    }
    exports.RechercheTexte = RechercheTexte;
    RechercheTexte.cssSurlignageConteneur = 'surlignage-conteneur';
    RechercheTexte.cssSurlignage = 'surlignage-recherche-texte';
    function _iterateNodeText(aNode, aFunc) {
      if (aNode && aNode.childNodes) {
        for (let i = 0; i < aNode.childNodes.length; i++) {
          const lNode = aNode.childNodes[i];
          if (lNode.nodeType === Node.TEXT_NODE) {
            aFunc(lNode);
          } else {
            _iterateNodeText(lNode, aFunc);
          }
        }
      }
    }
  },
  fn: 'recherchetexte.js',
});