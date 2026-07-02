IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetNavigation = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    class ObjetNavigation {
      constructor() {
        this.TableauxRessources = {};
        this.avecCoursAnnule = true;
        this.triDevoirs = false;
      }
      setRessource(AGenreRessource, AParametre, ANumero, AGenre) {
        if (AParametre instanceof ObjetListeElements_1.ObjetListeElements) {
          this.TableauxRessources[AGenreRessource] =
            MethodesObjet_1.MethodesObjet.dupliquer(AParametre);
        } else if (MethodesObjet_1.MethodesObjet.isObject(AParametre)) {
          this.TableauxRessources[AGenreRessource] =
            new ObjetListeElements_1.ObjetListeElements().addElement(
              MethodesObjet_1.MethodesObjet.dupliquer(AParametre),
            );
        } else {
          this.TableauxRessources[AGenreRessource] =
            new ObjetListeElements_1.ObjetListeElements().addElement(
              new ObjetElement_1.ObjetElement(AParametre, ANumero, AGenre),
            );
        }
      }
      getRessource(AGenreRessource) {
        return this.TableauxRessources[AGenreRessource]
          ? this.TableauxRessources[AGenreRessource].get(0)
          : null;
      }
      getRessources(AGenreRessource) {
        return this.TableauxRessources[AGenreRessource];
      }
      getNumeroRessource(AGenreRessource) {
        return this.getRessource(AGenreRessource)
          ? this.getRessource(AGenreRessource).getNumero()
          : null;
      }
      getGenreRessource(AGenreRessource) {
        return this.getRessource(AGenreRessource)
          ? this.getRessource(AGenreRessource).getGenre()
          : null;
      }
      getLibelleRessource(AGenreRessource) {
        return this.getRessource(AGenreRessource)
          ? this.getRessource(AGenreRessource).getLibelle()
          : null;
      }
    }
    exports.ObjetNavigation = ObjetNavigation;
  },
  fn: 'objetnavigation.js',
});