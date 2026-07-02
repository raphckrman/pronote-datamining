IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteListeDiffusion = void 0;
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    const Cache_1 = require('@scolys/produit/script/Cache');
    class ObjetRequeteListeDiffusion extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
      static getCleCacheListeDiffFiltreParGenre(aGenres) {
        return `listeDiffusionParGenre_${aGenres.join('-')}`;
      }
      static getCacheListeDiffFiltreParGenre(aGenres) {
        const lCle =
          ObjetRequeteListeDiffusion.getCleCacheListeDiffFiltreParGenre(
            aGenres,
          );
        if (Cache_1.GCache.general.existeDonnee(lCle)) {
          return Cache_1.GCache.general.getDonnee(lCle);
        }
      }
      static setCacheListeDiffFiltreParGenre(aGenres, aDonnees) {
        const lCle =
          ObjetRequeteListeDiffusion.getCleCacheListeDiffFiltreParGenre(
            aGenres,
          );
        return Cache_1.GCache.general.setDonnee(lCle, aDonnees);
      }
    }
    exports.ObjetRequeteListeDiffusion = ObjetRequeteListeDiffusion;
    ObjetRequeteListeDiffusion.inscrire('ListeDiffusion');
  },
  fn: 'objetrequetelistediffusion.js',
});