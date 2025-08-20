IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetEtatUtilisateurPersonnel = void 0;
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const ObjetEtatUtilisateur_Espace_1 = require('ObjetEtatUtilisateur_Espace');
    const Enumere_Onglet_1 = require('Enumere_Onglet');
    class ObjetEtatUtilisateurPersonnel extends ObjetEtatUtilisateur_Espace_1.ObjetEtatUtilisateur_Espace {
      getListeClassesDOnglet() {
        const lGenreOnglet = this.getGenreOnglet();
        const lAvecClasse = true;
        const lAvecGroupe = ![
          Enumere_Onglet_1.EGenreOnglet.CahierDeTextesClasse,
          Enumere_Onglet_1.EGenreOnglet.BulletinCompetences,
          Enumere_Onglet_1.EGenreOnglet.NiveauxDeMaitriseParMatiere,
          Enumere_Onglet_1.EGenreOnglet.EquipePedagogique,
          Enumere_Onglet_1.EGenreOnglet.Trombinoscope_EquipePedagogique,
          Enumere_Onglet_1.EGenreOnglet.Releve,
          Enumere_Onglet_1.EGenreOnglet.Bulletins,
          Enumere_Onglet_1.EGenreOnglet.BilanFinDeCycle,
          Enumere_Onglet_1.EGenreOnglet.ReleveEvaluationsParClasse,
          Enumere_Onglet_1.EGenreOnglet.ParcoursEducatif_BullCompetence,
          Enumere_Onglet_1.EGenreOnglet.CompetencesNumeriques,
        ].includes(lGenreOnglet);
        const lSeuleMesClasse =
          ![
            Enumere_Onglet_1.EGenreOnglet.Trombinoscope_EquipePedagogique,
            Enumere_Onglet_1.EGenreOnglet.SaisieAppreciationDeFinDeStage,
          ].includes(lGenreOnglet) &&
          !(
            lGenreOnglet ===
              Enumere_Onglet_1.EGenreOnglet.TrombinoscopeClasse &&
            this.applicationSco.droits.get(
              ObjetDroitsPN_1.TypeDroits.trombinoscope
                .autoriseAConsulterPhotosDeTousLesEleves,
            )
          );
        const lSeuleClasseStagiaire = [
          Enumere_Onglet_1.EGenreOnglet.SaisieAppreciationDeFinDeStage,
        ].includes(lGenreOnglet);
        return this.getListeClasses({
          avecClasse: lAvecClasse,
          avecGroupe: lAvecGroupe,
          uniquementClasseEnseignee: lSeuleMesClasse,
          uniquementClasseStagiaire: lSeuleClasseStagiaire,
        });
      }
      getListeProfesseurs() {
        return this.getUtilisateur().listeProfesseurs;
      }
      setListeClasses(aNumero) {
        var _a;
        if (!this._listeClassesOrigine) {
          this._listeClassesOrigine = this.listeClasses;
        }
        if (aNumero) {
          this.listeClasses =
            (_a =
              this.getUtilisateur().listeProfesseurs.getElementParNumero(
                aNumero,
              )) === null || _a === void 0
              ? void 0
              : _a.listeClasses;
        } else {
          this.listeClasses = this._listeClassesOrigine;
        }
      }
      setOngletListeEleves(aListeEleves) {
        this.getClasse().listeEleves = aListeEleves;
      }
      getOngletListeEleves() {
        return this.getClasse().listeEleves;
      }
    }
    exports.ObjetEtatUtilisateurPersonnel = ObjetEtatUtilisateurPersonnel;
  },
  fn: 'objetetatutilisateur.personnel.js',
});