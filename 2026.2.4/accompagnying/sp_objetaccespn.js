IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetAccesPN = void 0;
    const Enumere_Acces_1 = require('@cp/Produit/Script/Enumere/Enumere_Acces');
    const ObjetAcces_1 = require('@cp/Produit/Script/ObjetAcces');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    class ObjetAccesPN extends ObjetAcces_1.ObjetAcces {
      constructor(aGenreAcces, aGenreEspace, aGenreOnglet, aNumeroRessource) {
        super(aGenreAcces, aGenreEspace, aGenreOnglet, aNumeroRessource);
      }
      estConnexionEspaceEtudiant() {
        if (this.genre === Enumere_Acces_1.TypeHttpAcces.HttpAcces_Espace) {
        }
        let lResult =
          this.genre ===
          Enumere_Acces_1.TypeHttpAcces.HttpAcces_ConnexionJetonEspace;
        lResult =
          lResult &&
          this.genreEspace === Enumere_Espace_1.TypeGenreEspace.Espace_Eleve;
        return lResult;
      }
    }
    exports.ObjetAccesPN = ObjetAccesPN;
  },
  fn: 'objetaccespn.js',
});