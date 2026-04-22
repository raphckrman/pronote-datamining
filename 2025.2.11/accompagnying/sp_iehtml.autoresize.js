IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml_1 = require('IEHtml');
    IEHtml_1.default.addAttribut(
      'ie-autoresize',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        if (aNodeName === 'ie-textareamax') {
          return true;
        }
        if (aNodeName !== 'textarea') {
          return true;
        }
        let lEstTextAreaMaxWrapper = false;
        let lJNode = $(aContexteCourant.node);
        let lInitBesoinObserveur = true;
        const lCalcul = function () {
          const lEstVisible = aContexteCourant.node.scrollHeight > 0;
          if (!lEstVisible) {
            if (lInitBesoinObserveur) {
              lInitBesoinObserveur = false;
              let lObserver;
              try {
                lObserver = new IntersectionObserver((aObservables) => {
                  if (
                    aObservables[0] &&
                    (aObservables[0].intersectionRatio > 0 ||
                      aObservables[0].isIntersecting)
                  ) {
                    lObserver.disconnect();
                    lCalcul();
                  }
                });
                lObserver.observe(aContexteCourant.node);
              } catch (e) {
                lObserver = null;
              }
            }
            return;
          }
          lInitBesoinObserveur = false;
          aContexteCourant.node.style.height = '5px';
          const lComputedStyle = global.getComputedStyle(aContexteCourant.node);
          let lTaille = Math.ceil(
            aContexteCourant.node.scrollHeight +
              parseFloat(lComputedStyle.getPropertyValue('border-top-width')) +
              parseFloat(
                lComputedStyle.getPropertyValue('border-bottom-width'),
              ),
          );
          aContexteCourant.node.style.height = lTaille + 'px';
          if (lEstTextAreaMaxWrapper) {
            const lNodeWrapper = aContexteCourant.node.closest(
              '.textareamax-wrapper',
            );
            if (!lNodeWrapper) {
              return;
            }
            const lHeightParent = $(lNodeWrapper).height();
            if (lTaille > lHeightParent) {
              aContexteCourant.node.style.height = lHeightParent + 'px';
            } else if (lTaille < lHeightParent) {
              aContexteCourant.node.style.height = '100%';
            }
          }
        };
        let lVal = lJNode.val();
        let lValPlaceHolder = lJNode.attr('placeholder');
        lJNode.on('input', () => {
          const lNewVal = lJNode.val();
          if (lVal !== lNewVal) {
            lVal = lNewVal;
            lCalcul();
          }
        });
        aOutils.abonnerRefresh(
          () => {
            const lNewVal = lJNode.val();
            const lNewValPlaceHolder = lJNode.attr('placeholder');
            if (lVal !== lNewVal || lValPlaceHolder !== lNewValPlaceHolder) {
              lVal = lNewVal;
              lValPlaceHolder = lNewValPlaceHolder;
              lCalcul();
            }
          },
          aContexteCourant.node,
          aContexteCourant,
        );
        aOutils.surInjectionHtml(aContexteCourant, () => {
          lEstTextAreaMaxWrapper =
            lJNode.hasClass('textareamax') &&
            !!aContexteCourant.node.closest('.textareamax-wrapper');
          lCalcul();
        });
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-autoresize');
      },
    );
  },
  fn: 'iehtml.autoresize.js',
});