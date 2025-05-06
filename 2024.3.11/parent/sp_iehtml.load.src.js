IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const UtilitaireLoaderImage_1 = require('UtilitaireLoaderImage');
    let uObserverImgSrc = null;
    IEHtml.addAttribut(
      'ie-load-src',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lUrl = aAttributValue || '';
        if (lUrl) {
          const lJNode = $(aContexteCourant.node);
          aContexteCourant.node.setAttribute('data-src', lUrl);
          lJNode.on('error', () => {
            if (lJNode.hasClass('img-portrait')) {
              aContexteCourant.node.removeAttribute('src');
            }
            aContexteCourant.node.classList.remove('ie-imgviewer');
          });
          aOutils.surInjectionHtml(aContexteCourant, () => {
            if (uObserverImgSrc) {
              uObserverImgSrc.observe(aContexteCourant.node);
            } else {
              UtilitaireLoaderImage_1.UtilitaireLoaderImage.loadImage(
                aContexteCourant.node,
                lUrl,
              );
            }
          });
        }
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `ie-load-src="${lUrl}"`,
        );
        return true;
      },
    );
    try {
      uObserverImgSrc = new IntersectionObserver((aObservables) => {
        aObservables.forEach((aObservable) => {
          if (aObservable.intersectionRatio > 0 || aObservable.isIntersecting) {
            const lNode = aObservable.target;
            if (lNode) {
              const lUrl = lNode.dataset.src;
              UtilitaireLoaderImage_1.UtilitaireLoaderImage.loadImage(
                lNode,
                lUrl,
              );
              uObserverImgSrc.unobserve(lNode);
            }
          }
        });
      });
    } catch (e) {
      uObserverImgSrc = null;
    }
  },
  fn: 'iehtml.load.src.js',
});