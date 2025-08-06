IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetIdentification = void 0;
    class ObjetIdentification {
      constructor(aRessource, aListeRessources) {
        this.ressource = aRessource;
        this.setListeRessources(aListeRessources);
      }
      getMembre() {
        return this.NumeroEleve
          ? this.ListeRessources.getElementParNumero(this.NumeroEleve)
          : this.ressource;
      }
      setListeRessources(AListeRessources) {
        this.ListeRessources = AListeRessources;
        this.NumeroEleve = null;
        for (
          let I = 0;
          I < this.ListeRessources.count() &&
          (this.NumeroEleve === null || this.NumeroEleve === undefined);
          I++
        ) {
          if (this.ListeRessources.get(I).AvecSelection !== false) {
            this.NumeroEleve = this.ListeRessources.getNumero(I);
          }
        }
      }
      getLibelleClasse() {
        const LEleve = this.getMembre();
        return LEleve && LEleve.Classe ? LEleve.Classe.getLibelle() : '';
      }
      getNumeroClasse() {
        const LEleve = this.getMembre();
        return LEleve && LEleve.Classe ? LEleve.Classe.getNumero() : '';
      }
      getLibelleGroupes() {
        const LEleve = this.getMembre();
        if (LEleve) {
          const LListeGroupes = LEleve.ListeGroupes;
          const N = !!LListeGroupes ? LListeGroupes.count() : 0;
          const H = [];
          for (let I = 0; I < N; I++) {
            H.push(LListeGroupes.getLibelle(I));
          }
          return H.join(', ');
        }
        return '';
      }
    }
    exports.ObjetIdentification = ObjetIdentification;
  },
  fn: 'objetidentification.js',
});