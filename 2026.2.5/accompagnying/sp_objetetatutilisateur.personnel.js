IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetEtatUtilisateurPersonnel = void 0;
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const ObjetEtatUtilisateur_Espace_1 = require('@scolys/espace/script/ObjetEtatUtilisateur_Espace');
    const TypeGenreOngletInternet_1 = require('@scolys/produit/script/enumere/TypeGenreOngletInternet');
    class ObjetEtatUtilisateurPersonnel extends ObjetEtatUtilisateur_Espace_1.ObjetEtatUtilisateur_Espace {
      getListeClassesDOnglet() {
        const lGenreOnglet = this.getGenreOnglet();
        const lAvecClasse = true;
        const lAvecGroupe = ![
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            ._Onglet_CahierDeTextesClasse,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_BulletinCompetences,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_NiveauxDeMaitriseParMatiere,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_EquipePedagogique,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_Trombinoscope_EquipePedagogique,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet.Onglet_Releve,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet.Onglet_Bulletin,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_BilanFinDeCycle,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_ReleveEvaluationsParClasse,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_ParcoursEducatif_BullCompetence,
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_CompetencesNumeriques,
        ].includes(lGenreOnglet);
        const lSeuleMesClasse =
          ![
            TypeGenreOngletInternet_1.TypeGenreOngletInternet
              .Onglet_Trombinoscope_EquipePedagogique,
            TypeGenreOngletInternet_1.TypeGenreOngletInternet
              .Onglet_Saisie_AppreciationDeFinDeStage,
          ].includes(lGenreOnglet) &&
          !(
            lGenreOnglet ===
              TypeGenreOngletInternet_1.TypeGenreOngletInternet
                .Onglet_TrombinoscopeClasse &&
            this.applicationSco.droits.get(
              ObjetDroitsPN_1.TypeDroits.trombinoscope
                .autoriseAConsulterPhotosDeTousLesEleves,
            )
          );
        const lSeuleClasseStagiaire = [
          TypeGenreOngletInternet_1.TypeGenreOngletInternet
            .Onglet_Saisie_AppreciationDeFinDeStage,
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
    }
    exports.ObjetEtatUtilisateurPersonnel = ObjetEtatUtilisateurPersonnel;
  },
  fn: 'objetetatutilisateur.personnel.js',
});