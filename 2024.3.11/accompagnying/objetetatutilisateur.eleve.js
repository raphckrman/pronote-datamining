IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetEtatUtilisateurEleve = void 0;
    const ObjetEtatUtilisateur_Espace_1 = require('ObjetEtatUtilisateur_Espace');
    const ObjetDate_1 = require('ObjetDate');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    class ObjetEtatUtilisateurEleve extends ObjetEtatUtilisateur_Espace_1.ObjetEtatUtilisateur_Espace {
      getOngletListePeriodes() {
        return this.getOnglet().listePeriodes;
      }
      getOngletListePaliers() {
        return this.getOnglet().listePaliers;
      }
      getOngletPeriodeParDefaut() {
        const lPeriode = this.Navigation.getRessource(
          Enumere_Ressource_1.EGenreRessource.Periode,
        );
        return lPeriode ? lPeriode : this.getOnglet().periodeParDefaut;
      }
      getPeriode() {
        return this.page && this.page.periode
          ? this.page.periode
          : this.getOngletPeriodeParDefaut();
      }
      getDate() {
        return this.page && this.page.Date
          ? this.page.Date
          : ObjetDate_1.GDate.getDateCourante();
      }
    }
    exports.ObjetEtatUtilisateurEleve = ObjetEtatUtilisateurEleve;
  },
  fn: 'objetetatutilisateur.eleve.js',
});