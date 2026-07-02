IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const ObjetImageConnexion_1 = require('@scolys/produit/script/ObjetImageConnexion');
    const TypeArrierePlanAuthentification_1 = require('@scolys/produit/script/enumere/TypeArrierePlanAuthentification');
    require('@cp/script/imagesconnexion');
    try {
      const lImages = [];
      lImages[
        TypeArrierePlanAuthentification_1.TypeArrierePlanAuthentification.Louvre
      ] = window.IMAGES_FOND_CONNEXION || [];
      ObjetImageConnexion_1.ImageConnexion.setDefinitionImages(lImages);
    } catch (e) {}
  },
  fn: 'declarationimagesconnexiondynamiques.js',
});