IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const MethodesObjet_1 = require('MethodesObjet');
    const GImageConnexion = require('ObjetImageConnexion');
    const imagesConnexion = require('imagesconnexion');
    try {
      if (
        imagesConnexion &&
        MethodesObjet_1.MethodesObjet.isFunction(
          imagesConnexion.imagesConnexion,
        )
      ) {
        imagesConnexion.imagesConnexion(GImageConnexion);
      }
    } catch (e) {}
  },
  fn: 'declarationimagesconnexiondynamiques.js',
});