IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const UtilitaireLoaderImage_1 = require('UtilitaireLoaderImage');
    let uObserverImgSrc = null;
    const cDataImageBlank =
      'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    function addOnErreurNode(aNode) {
      $(aNode).on('error', () => {
        var _a, _b;
        if (aNode.classList.contains('img-portrait')) {
          aNode.setAttribute(
            'src',
            (_a = IEHtml.outils.getObject('img-portrait')) === null ||
              _a === void 0
              ? void 0
              : _a.srcPortrait,
          );
          aNode.classList.add('img-portrait-empty');
        }
        (_b = IEHtml.outils.getObject('ie-imgviewer')) === null || _b === void 0
          ? void 0
          : _b.detachViewer(aNode);
      });
    }
    IEHtml.addAttribut(
      'ie-load-src',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        var _a;
        const lUrl = aAttributValue || '';
        if (lUrl) {
          if (
            (_a = lUrl.startsWith) === null || _a === void 0
              ? void 0
              : _a.call(lUrl, 'data:')
          ) {
            aContexteCourant.node.setAttribute('src', lUrl);
            aOutils.addCommentaireDebug(
              aContexteCourant.node,
              `ie-load-src="data:...base64.."`,
            );
            return true;
          }
          aContexteCourant.node.setAttribute('data-src', lUrl);
          if (!aContexteCourant.node.getAttribute('src')) {
            aContexteCourant.node.setAttribute('src', cDataImageBlank);
          }
          aOutils.surInjectionHtml(aContexteCourant, () => {
            if (uObserverImgSrc) {
              uObserverImgSrc.observe(aContexteCourant.node);
            } else {
              addOnErreurNode(aContexteCourant.node);
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
    IEHtml.outils.addObject('ie-load-src', {
      imgWithoutSrc(aNode) {
        return (
          aNode &&
          aNode.hasAttribute &&
          !aNode.hasAttribute('src') &&
          !aNode.hasAttribute('ie-load-src') &&
          !aNode.hasAttribute('data-src')
        );
      },
      imgWithoutLoadSrc(aNode) {
        return (
          aNode &&
          aNode.hasAttribute &&
          !aNode.hasAttribute('ie-load-src') &&
          !aNode.hasAttribute('data-src')
        );
      },
    });
    try {
      uObserverImgSrc = new IntersectionObserver((aObservables) => {
        aObservables.forEach((aObservable) => {
          if (aObservable.intersectionRatio > 0 || aObservable.isIntersecting) {
            const lNode = aObservable.target;
            if (lNode) {
              const lUrl = lNode.dataset.src;
              addOnErreurNode(lNode);
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