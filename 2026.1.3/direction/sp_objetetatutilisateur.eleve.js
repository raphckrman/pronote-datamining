IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetEtatUtilisateurEleve = void 0;
    const ObjetEtatUtilisateur_Espace_1 = require('@scolys/espace/script/ObjetEtatUtilisateur_Espace');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    class ObjetEtatUtilisateurEleve extends ObjetEtatUtilisateur_Espace_1.ObjetEtatUtilisateur_Espace {
      getOngletListePeriodes() {
        return this.getOnglet().listePeriodes;
      }
      getOngletListePaliers() {
        return this.getOnglet().listePaliers;
      }
      getOngletPeriodeParDefaut() {
        const lPeriode = this.Navigation.getRessource(
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Periode,
        );
        return lPeriode ? lPeriode : this.getOnglet().periodeParDefaut;
      }
      getPeriode() {
        return this.page && this.page.periode
          ? this.page.periode
          : this.getOngletPeriodeParDefaut();
      }
    }
    exports.ObjetEtatUtilisateurEleve = ObjetEtatUtilisateurEleve;
  },
  fn: 'objetetatutilisateur.eleve.js',
});