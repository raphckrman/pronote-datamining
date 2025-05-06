IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GPosition = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_1 = require('ObjetStyle');
    class ObjetPosition {
      constructor() {
        this._cacheFontSize = null;
      }
      getWidth(aId) {
        const lElement = ObjetHtml_1.GHtml.getElement(aId);
        return ObjetHtml_1.GHtml.estElement(lElement)
          ? lElement.offsetWidth
          : 0;
      }
      getHeight(aId) {
        const lElement = ObjetHtml_1.GHtml.getElement(aId);
        return ObjetHtml_1.GHtml.estElement(lElement)
          ? lElement.offsetHeight
          : 0;
      }
      getLeft(aId) {
        const lElement = ObjetHtml_1.GHtml.getElement(aId);
        return ObjetHtml_1.GHtml.estElement(lElement)
          ? this.getClientRect(lElement).left
          : 0;
      }
      getTop(aId) {
        const lElement = ObjetHtml_1.GHtml.getElement(aId);
        return ObjetHtml_1.GHtml.estElement(lElement)
          ? this.getClientRect(aId).top
          : 0;
      }
      setWidth(aId, aWidth, aAjuster, aFormat) {
        try {
          if (aWidth === undefined || aWidth === null || isNaN(aWidth)) {
            IE.log.addLog('setWidth invalide : ' + aWidth);
            return;
          }
          const lElement = ObjetHtml_1.GHtml.getElement(aId);
          if (!lElement || !lElement.style) {
            return;
          }
          const lWidthEnString = MethodesObjet_1.MethodesObjet.isString(aWidth);
          aFormat = !aFormat && !lWidthEnString ? 'px' : aFormat;
          if (lWidthEnString && aWidth === 'auto') {
            lElement.style.width = aWidth;
          } else {
            aWidth = Math.max(0, aWidth);
            lElement.style.width = aWidth + aFormat;
          }
          if (
            aAjuster &&
            aFormat === 'px' &&
            ObjetHtml_1.GHtml.getDisplay(lElement)
          ) {
            const lWidth = this.getWidth(lElement);
            if (aWidth !== lWidth) {
              lElement.style.width =
                Math.max(0, aWidth - (lWidth - aWidth)) + aFormat;
            }
          }
        } catch (e) {}
      }
      setHeight(aId, aHeight, aAjuster, aFormat) {
        try {
          if (aHeight === undefined || aHeight === null || isNaN(aHeight)) {
            IE.log.addLog('setHeight invalide : ' + aHeight);
            return;
          }
          const lElement = ObjetHtml_1.GHtml.getElement(aId);
          if (!lElement || !lElement.style) {
            return;
          }
          const lHeightEnString =
            MethodesObjet_1.MethodesObjet.isString(aHeight);
          aFormat = !aFormat && !lHeightEnString ? 'px' : aFormat;
          if (lHeightEnString && aHeight === 'auto') {
            lElement.style.height = aHeight;
          } else {
            aHeight = Math.max(0, aHeight);
            lElement.style.height = aHeight + aFormat;
          }
          if (
            aAjuster &&
            aFormat === 'px' &&
            ObjetHtml_1.GHtml.getDisplay(lElement)
          ) {
            const lHeight = this.getHeight(lElement);
            if (aHeight !== lHeight) {
              lElement.style.height =
                Math.max(0, aHeight - (lHeight - aHeight)) + aFormat;
            }
          }
        } catch (e) {}
      }
      setLeft(aId, aLeft, aAjuster, aFormat) {
        aFormat = !aFormat ? 'px' : aFormat;
        try {
          if (aLeft === undefined || aLeft === null || isNaN(aLeft)) {
            IE.log.addLog('setLeft invalide : ' + aLeft);
            return;
          }
          const lElement = ObjetHtml_1.GHtml.getElement(aId);
          if (!lElement || !lElement.style) {
            return;
          }
          aLeft = isNaN(aLeft) ? 0 : aLeft;
          lElement.style.left = aLeft + aFormat;
          if (
            aAjuster &&
            aFormat === 'px' &&
            ObjetHtml_1.GHtml.getDisplay(lElement)
          ) {
            const lLeft = this.getLeft(lElement);
            if (aLeft !== lLeft) {
              lElement.style.left = aLeft - (lLeft - aLeft) + aFormat;
            }
          }
        } catch (e) {}
      }
      setTop(aId, aTop, aAjuster, aFormat) {
        aFormat = !aFormat ? 'px' : aFormat;
        try {
          if (aTop === undefined || aTop === null || isNaN(aTop)) {
            IE.log.addLog('setTop invalide : ' + aTop);
            return;
          }
          const lElement = ObjetHtml_1.GHtml.getElement(aId);
          if (!lElement || !lElement.style) {
            return;
          }
          aTop = isNaN(aTop) ? 0 : aTop;
          lElement.style.top = aTop + aFormat;
          if (
            aAjuster &&
            aFormat === 'px' &&
            ObjetHtml_1.GHtml.getDisplay(lElement)
          ) {
            const lTop = this.getTop(lElement);
            if (aTop !== lTop) {
              lElement.style.top = aTop - (lTop - aTop) + aFormat;
            }
          }
        } catch (e) {}
      }
      getRect(aId, aPositionAbsolue) {
        const lElement = ObjetHtml_1.GHtml.getElement(aId);
        if (lElement && lElement.getBoundingClientRect) {
          const lBoundingRect = lElement.getBoundingClientRect();
          if (lBoundingRect) {
            const lOffsetX = window.pageXOffset || 0;
            const lOffsetY = window.pageYOffset || 0;
            const lRect = {
              left: lBoundingRect.left + lOffsetX,
              right: lBoundingRect.right + lOffsetX,
              top: lBoundingRect.top + lOffsetY,
              bottom: lBoundingRect.bottom + lOffsetY,
              x: lBoundingRect.left + lOffsetX,
              y: lBoundingRect.top + lOffsetY,
              width: lBoundingRect.right - lBoundingRect.left,
              height: lBoundingRect.bottom - lBoundingRect.top,
              leftScroll: aPositionAbsolue ? lBoundingRect.left : 0,
              topScroll: aPositionAbsolue ? lBoundingRect.top : 0,
            };
            if (!aPositionAbsolue) {
              const lOffsetParent = $(lElement).offsetParent().get(0);
              if (lOffsetParent && lOffsetParent !== document.documentElement) {
                const lRectOffset = this.getRect(lOffsetParent, true);
                Object.assign(lRect, {
                  x: lRect.x - lRectOffset.x,
                  y: lRect.y - lRectOffset.y,
                  left: lRect.left - lRectOffset.left,
                  right: lRect.left - lRectOffset.left + lRect.width,
                  top: lRect.top - lRectOffset.top,
                  bottom: lRect.top - lRectOffset.top + lRect.height,
                });
              }
            }
            try {
              Object.assign(lRect, this.getComputedBoxRect(lElement));
              Object.assign(lRect, {
                contentLeft: lRect.left + lRect.paddingLeft + lRect.borderLeft,
                contentRight:
                  lRect.right - lRect.paddingRight - lRect.borderRight,
                contentTop: lRect.top + lRect.paddingTop + lRect.borderTop,
                contentBottom:
                  lRect.bottom - lRect.paddingBottom - lRect.borderBottom,
              });
              lRect.contentWidth = lRect.contentRight - lRect.contentLeft;
              lRect.contentHeight = lRect.contentBottom - lRect.contentTop;
              Object.assign(lRect, {
                innerLeft: lRect.contentLeft - lRect.paddingLeft,
                innerRight: lRect.contentRight + lRect.paddingRight,
                innerTop: lRect.contentTop - lRect.paddingTop,
                innerBottom: lRect.contentBottom + lRect.paddingBottom,
              });
              lRect.innerWidth = lRect.innerRight - lRect.innerLeft;
              lRect.innerHeight = lRect.innerBottom - lRect.innerTop;
              Object.assign(lRect, {
                outerLeft: lRect.left - lRect.marginLeft,
                outerRight: lRect.right + lRect.marginRight,
                outerTop: lRect.top - lRect.marginTop,
                outerBottom: lRect.bottom + lRect.marginBottom,
              });
              lRect.outerWidth = lRect.outerRight - lRect.outerLeft;
              lRect.outerHeight = lRect.outerBottom - lRect.outerTop;
            } catch (e) {}
            return lRect;
          }
        }
        return {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          leftScroll: 0,
          topScroll: 0,
          erreur: true,
        };
      }
      getClientRect(aId) {
        return this.getRect(aId, true);
      }
      getComputedBoxRect(aId) {
        const lElement = ObjetHtml_1.GHtml.getElement(aId);
        let lComputedStyle = null;
        if (lElement) {
          lComputedStyle = global.getComputedStyle(lElement);
        }
        const lBox = {};
        ['left', 'right', 'top', 'bottom'].forEach((aVal) => {
          const lValMaj = aVal.ucfirst();
          lBox[`padding${lValMaj}`] = lComputedStyle
            ? parseFloat(lComputedStyle.getPropertyValue(`padding-${aVal}`))
            : 0;
          lBox[`margin${lValMaj}`] = lComputedStyle
            ? parseFloat(lComputedStyle.getPropertyValue(`margin-${aVal}`))
            : 0;
          lBox[`border${lValMaj}`] = lComputedStyle
            ? parseFloat(
                lComputedStyle.getPropertyValue(`border-${aVal}-width`),
              )
            : 0;
        });
        return lBox;
      }
      setPosition(aId, aLeft, aTop, aAjuster, aFormat) {
        this.setLeft(aId, aLeft, aAjuster, aFormat);
        this.setTop(aId, aTop, aAjuster, aFormat);
      }
      centrer(aId) {
        let lLeft, lTop, lWidth, lHeight;
        lLeft = window.pageXOffset || 0;
        lTop = window.pageYOffset || 0;
        if (document.documentElement) {
          lLeft = lLeft || document.documentElement.scrollLeft;
          lTop = lTop || document.documentElement.scrollTop;
        }
        if (window.visualViewport) {
          lLeft = lLeft || window.visualViewport.offsetLeft;
          lTop = lTop || window.visualViewport.offsetTop;
        }
        if (GNavigateur.isTactile && window.visualViewport) {
          lWidth = window.visualViewport.width;
          lHeight = window.visualViewport.height;
        } else if (GNavigateur.isTactile && window.innerHeight) {
          lWidth = window.innerWidth;
          lHeight = window.innerHeight;
        } else {
          lWidth = GNavigateur.clientL;
          lHeight = GNavigateur.clientH;
        }
        const lWidthId = this.getWidth(aId),
          lHeightId = this.getHeight(aId);
        if (lWidthId * lHeightId) {
          const lPosition = {
            x: Math.max(0, lLeft + (lWidth - lWidthId) / 2),
            y: Math.max(0, lTop + (lHeight - lHeightId) / 2),
            width: lWidthId,
            height: lHeightId,
          };
          _ramenerPositionDansLAffichage(lPosition);
          this.setPosition(
            aId,
            Math.max(0, lPosition.x),
            Math.max(0, lPosition.y),
            true,
          );
        }
      }
      placer(aId, aLeft, aTop, aEcartBordEcran) {
        let lX1 = MethodesObjet_1.MethodesObjet.isNumber(aLeft)
          ? aLeft
          : GNavigateur.pointerX || 0;
        const lX2 = lX1 + this.getWidth(aId);
        let lY1 = MethodesObjet_1.MethodesObjet.isNumber(aTop)
          ? aTop
          : GNavigateur.pointerY || 0;
        const lY2 = lY1 + this.getHeight(aId);
        const lEcartBordEcran = $.extend({ x: 2, y: 2 }, aEcartBordEcran);
        if (lX2 + lEcartBordEcran.x > GNavigateur.ecranL) {
          lX1 = GNavigateur.ecranL - this.getWidth(aId) - lEcartBordEcran.x;
        }
        if (lY2 + lEcartBordEcran.y > GNavigateur.ecranH) {
          lY1 = GNavigateur.ecranH - this.getHeight(aId) - lEcartBordEcran.y;
        }
        this.setPosition(
          aId,
          Math.max(lEcartBordEcran.x, lX1),
          Math.max(lEcartBordEcran.y, lY1),
          true,
        );
      }
      placerFiche(aId, aIdSource, aVisible, aDecalage) {
        const lPositionSource = _getPositionElement(aIdSource);
        this.placerFicheSource(
          aId,
          lPositionSource.x,
          lPositionSource.x + lPositionSource.width,
          lPositionSource.y,
          lPositionSource.y + lPositionSource.height,
          aVisible,
          aDecalage,
        );
      }
      placerFicheSource(
        aId,
        aX1Source,
        aX2Source,
        aY1Source,
        aY2Source,
        aVisible,
        aDecalage,
      ) {
        const lVisible =
            aVisible === null || aVisible === undefined
              ? ObjetHtml_1.GHtml.getElement(aId).style.visibility === 'visible'
              : aVisible,
          lDecalage = $.extend({ x: 6, y: 0 }, aDecalage);
        const lPosition = _getPositionElement(aId),
          lPositionSource = {
            x: aX1Source,
            y: aY1Source,
            width: aX2Source - aX1Source,
            height: aY2Source - aY1Source,
          };
        _ramenerPositionDansLAffichage(lPosition);
        if (!lVisible || _avecChevauchement(lPosition, lPositionSource)) {
          lPosition.x = lPositionSource.x + lPositionSource.width;
          if (
            lPosition.x + lPosition.width + lDecalage.x >
            GNavigateur.ecranL
          ) {
            lPosition.x = Math.max(
              aX1Source - lPosition.width - lDecalage.x,
              1,
            );
          } else {
            lPosition.x += lDecalage.x;
          }
          if (!lVisible) {
            lPosition.y = lPositionSource.y;
            if (
              lPosition.y + lPosition.height + lDecalage.y >
              GNavigateur.ecranH
            ) {
              lPosition.y = Math.max(
                lPositionSource.y +
                  lPositionSource.height -
                  lPosition.height -
                  lDecalage.y,
                1,
              );
            } else {
              lPosition.y += lDecalage.y;
            }
          }
        }
        _modifierPositionSiChevauchement(lPosition, lPositionSource);
        _ramenerPositionDansLAffichage(lPosition);
        if (lPosition.x < 10) {
          lPosition.x = 10;
        }
        if (lPosition.y < 10) {
          lPosition.y = 10;
        }
        this.setPosition(
          aId,
          Math.max(0, lPosition.x),
          Math.max(0, lPosition.y),
          true,
        );
      }
      deplacerSiChevauchement(aIdMobile, aIdReference) {
        const lPosition = _getPositionElement(aIdMobile),
          lPositionSource = _getPositionElement(aIdReference);
        _modifierPositionSiChevauchement(lPosition, lPositionSource);
        this.setPosition(
          aIdMobile,
          Math.max(0, lPosition.x),
          Math.max(0, lPosition.y),
          true,
        );
      }
      getScrollTop(aId) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        return E ? E.scrollTop : 0;
      }
      setScrollTop(aId, aScrollTop) {
        const E = ObjetHtml_1.GHtml.getElement(aId);
        if (E && ObjetHtml_1.GHtml.estElement(E)) {
          E.scrollTop = aScrollTop;
        }
      }
      setTaille(aId, aWidth, aHeight, aFormat) {
        this.setWidth(aId, aWidth, !!aFormat, aFormat);
        this.setHeight(aId, aHeight, !!aFormat, aFormat);
      }
      positionDansZone(aPosition, aId) {
        const lRect = this.getClientRect(aId);
        return (
          !!aPosition &&
          aPosition.x > lRect.left &&
          aPosition.x < lRect.right &&
          aPosition.y > lRect.top &&
          aPosition.y < lRect.bottom
        );
      }
      estEnCollision(aId1, aId2) {
        const E1 = ObjetHtml_1.GHtml.getElement(aId1);
        const E2 = ObjetHtml_1.GHtml.getElement(aId2);
        if (!!E1 && !!E2) {
          const x1 = this.getLeft(aId1);
          const y1 = this.getTop(aId1);
          const h1 = this.getHeight(aId1);
          const w1 = this.getWidth(aId1);
          const b1 = y1 + h1;
          const r1 = x1 + w1;
          const x2 = this.getLeft(aId2);
          const y2 = this.getTop(aId2);
          const h2 = this.getHeight(aId2);
          const w2 = this.getWidth(aId2);
          const b2 = y2 + h2;
          const r2 = x2 + w2;
          return !(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2);
        }
        return false;
      }
      getPositionEventJQuery(aEvent) {
        if (!aEvent) {
          return { x: 0, y: 0 };
        }
        if (aEvent.pageX !== undefined) {
          return { x: Math.round(aEvent.pageX), y: Math.round(aEvent.pageY) };
        }
        const lEventTouch = aEvent;
        if (
          lEventTouch.originalEvent &&
          lEventTouch.originalEvent.changedTouches &&
          lEventTouch.originalEvent.changedTouches[0]
        ) {
          return {
            x: lEventTouch.originalEvent.changedTouches[0].pageX || 0,
            y: lEventTouch.originalEvent.changedTouches[0].pageY || 0,
          };
        }
        return { x: 0, y: 0 };
      }
      remToPixels(aRem) {
        if (!this._cacheFontSize) {
          this._cacheFontSize = ObjetStyle_1.GStyle.getFloatComputedValue(
            document.documentElement,
            'font-size',
          );
        }
        return aRem * this._cacheFontSize;
      }
      scrollToElement(aElement, aElementScrollParent) {
        const lElement = ObjetHtml_1.GHtml.getElement(aElement);
        const lElementScroll =
          ObjetHtml_1.GHtml.getElement(aElementScrollParent);
        if (!lElement || !lElementScroll) {
          return;
        }
        const lRect = this.getRect(lElement, true);
        const lRectScroll = this.getRect(lElementScroll, true);
        let lTop = 0;
        let lLeft = 0;
        let lJElement = $(lElement);
        while (
          lJElement.get(0) !== lElementScroll &&
          $.contains(lElementScroll, lJElement.get(0))
        ) {
          const lPosElement = lJElement.position();
          lTop += lPosElement.top;
          lLeft += lPosElement.left;
          lJElement = lJElement.offsetParent();
          if (/^body|html$/i.test(lJElement[0].nodeName)) {
            break;
          }
        }
        const lPosition = {
          top: lTop,
          left: lLeft,
          heightVisible: Math.min(lRect.height, lRectScroll.height),
          widthVisible: Math.min(lRect.width, lRectScroll.width),
        };
        if (lPosition.top < 0) {
          lElementScroll.scrollTop = -lPosition.top;
        } else if (
          lPosition.top + lPosition.heightVisible - lElementScroll.scrollTop >
          lRectScroll.height
        ) {
          lElementScroll.scrollTop =
            lPosition.top +
            lPosition.heightVisible -
            lElementScroll.scrollTop -
            lRectScroll.height;
        }
        if (lPosition.left < 0) {
          lElementScroll.scrollLeft = -lPosition.left;
        } else if (
          lPosition.left + lPosition.widthVisible - lElementScroll.scrollLeft >
          lRectScroll.width
        ) {
          lElementScroll.scrollLeft =
            lPosition.left +
            lPosition.widthVisible -
            lElementScroll.scrollLeft -
            lRectScroll.width;
        }
      }
    }
    function _ramenerPositionDansLAffichage(aPosition) {
      if (aPosition.x + aPosition.width > GNavigateur.ecranL) {
        aPosition.x = Math.max(0, GNavigateur.ecranL - aPosition.width);
      }
      if (aPosition.y + aPosition.height > GNavigateur.ecranH) {
        aPosition.y = Math.max(0, GNavigateur.ecranH - aPosition.height);
      }
    }
    function _avecChevauchement(aPosition, aPositionSource) {
      return (
        aPosition.x < aPositionSource.x + aPositionSource.width &&
        aPosition.x + aPosition.width > aPositionSource.x &&
        aPosition.y < aPositionSource.y + aPositionSource.height &&
        aPosition.y + aPosition.height > aPositionSource.y
      );
    }
    function _getPositionElement(aElement) {
      const lX = GPosition.getLeft(aElement),
        lY = GPosition.getTop(aElement),
        lWidth = GPosition.getWidth(aElement),
        lHeight = GPosition.getHeight(aElement);
      return { x: lX, y: lY, width: lWidth, height: lHeight };
    }
    function _modifierPositionSiChevauchement(
      aPositionMobile,
      aPositionSource,
    ) {
      if (aPositionMobile.x + aPositionMobile.width > GNavigateur.ecranL) {
        aPositionMobile.x = GNavigateur.ecranL - aPositionMobile.width;
      }
      if (aPositionMobile.y + aPositionMobile.height > GNavigateur.ecranH) {
        aPositionMobile.y = GNavigateur.ecranH - aPositionMobile.height;
      }
      if (_avecChevauchement(aPositionMobile, aPositionSource)) {
        aPositionMobile.x = aPositionSource.x + aPositionSource.width + 6;
        if (aPositionMobile.x + aPositionMobile.width > GNavigateur.ecranL) {
          aPositionMobile.x = Math.max(
            aPositionSource.x - aPositionMobile.width,
            1,
          );
        }
      }
      if (aPositionMobile.x + aPositionMobile.width > GNavigateur.ecranL) {
        aPositionMobile.x = GNavigateur.ecranL - aPositionMobile.width;
      }
      if (aPositionMobile.x < 6) {
        aPositionMobile.x = 6;
      }
      if (_avecChevauchement(aPositionMobile, aPositionSource)) {
        aPositionMobile.y = aPositionSource.y + aPositionSource.height + 6;
        if (aPositionMobile.y + aPositionMobile.height > GNavigateur.ecranH) {
          aPositionMobile.y = Math.max(
            aPositionSource.y - aPositionMobile.height,
            1,
          );
        }
      }
      if (aPositionMobile.y + aPositionMobile.height > GNavigateur.ecranH) {
        aPositionMobile.y = GNavigateur.ecranH - aPositionMobile.height;
      }
    }
    const GPosition = new ObjetPosition();
    exports.GPosition = GPosition;
    $(window).one('load', () => {
      GPosition._cacheFontSize = null;
    });
  },
  fn: 'objetposition.js',
});