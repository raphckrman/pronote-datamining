IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireLoaderImage = void 0;
    const UtilitaireTraitementImage_1 = require('UtilitaireTraitementImage');
    const GUID_1 = require('GUID');
    const c_pilesImages = {
      enCours: [],
      enAttente: [],
      nbMax: 2,
      timeoutEchec: 60 * 1000,
    };
    let UtilitaireLoaderImage = {
      loadImage(aNodeImage, aUrl) {
        if (c_pilesImages.enCours.length >= c_pilesImages.nbMax) {
          c_pilesImages.enAttente.push({ node: aNodeImage, url: aUrl });
        } else {
          _loadImage(aNodeImage, aUrl);
        }
      },
    };
    exports.UtilitaireLoaderImage = UtilitaireLoaderImage;
    const uGenerateurGUID = new GUID_1.GUID.generateur();
    function _loadImage(aNodeImage, aUrl) {
      if (!aNodeImage || !document.body.contains(aNodeImage)) {
        _depiler();
        return;
      }
      const lId = uGenerateurGUID.get();
      c_pilesImages.enCours.push(lId);
      return Promise.race([
        UtilitaireTraitementImage_1.UtilitaireTraitementImage.loadImageDataUrlPromise(
          aUrl,
          aNodeImage,
        ).catch(() => {}),
        new Promise((aResolve) => {
          setTimeout(() => {
            aResolve();
          }, c_pilesImages.timeoutEchec);
        }),
      ]).then(() => {
        const lIndex = c_pilesImages.enCours.indexOf(lId);
        if (lIndex >= 0) {
          c_pilesImages.enCours.splice(lIndex, 1);
        }
        _depiler();
      });
    }
    function _depiler() {
      if (
        c_pilesImages.enAttente.length > 0 &&
        c_pilesImages.enCours.length < c_pilesImages.nbMax
      ) {
        const lAttente = c_pilesImages.enAttente.shift();
        _loadImage(lAttente.node, lAttente.url);
      }
    }
  },
  fn: 'utilitaireloaderimage.js',
});