IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DonneesListe_PieceJointeFlat = void 0;
    const ObjetTri_1 = require('ObjetTri');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetDonneesListeFlatDesign_1 = require('ObjetDonneesListeFlatDesign');
    const Enumere_Etat_1 = require('Enumere_Etat');
    class DonneesListe_PieceJointeFlat extends ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign {
      constructor(
        aDonnees,
        aAvecEtatSaisie,
        aGenre,
        aGenreRessourceDocJoint,
        aMultiSelection,
        aAvecGestionLibelleSurLiens,
        aCallbacks,
      ) {
        super(aDonnees);
        this.Genre = aGenre;
        this.genreRessourceDocJoint = aGenreRessourceDocJoint;
        this.avecGestionLibelleSurLiens = aAvecGestionLibelleSurLiens;
        this.callbacks = aCallbacks;
        this.PourMemeMatiere = false;
        this.PourMemeClasseEtGroupe = false;
        this.setOptions({
          avecCB: true,
          avecCocheCBSurLigne: true,
          avecEvnt_Creation: true,
          avecSelection: false,
          avecBoutonActionLigne: true,
        });
      }
      getValueCB(aParams) {
        return aParams.article ? aParams.article.Actif : false;
      }
      setValueCB(aParams, aValue) {
        aParams.article.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        aParams.article.Actif = aValue;
      }
      getTitreZonePrincipale(aParams) {
        const H = [];
        if (this.avecGestionLibelleSurLiens) {
          const lDonnee = aParams.article;
          H.push(lDonnee.Libelle);
        }
        return H.join('');
      }
      getInfosSuppZonePrincipale(aParams) {
        const H = [];
        if (this.avecGestionLibelleSurLiens) {
          const lDonnee = aParams.article;
          H.push(lDonnee.url);
        }
        return H.join('');
      }
      setDonnees(
        aAvecFiltre,
        aPourMemeMatiere,
        aPourMemeClasseEtGroupe,
        aDateDeb,
        aDateFin,
        aDateCours,
      ) {
        this.avecFiltre = aAvecFiltre;
        this.PourMemeMatiere = aPourMemeMatiere;
        this.PourMemeClasseEtGroupe = aPourMemeClasseEtGroupe;
        this.DateDeb = aDateDeb;
        this.DateFin = aDateFin;
        this.DateCours = aDateCours;
      }
      getTri() {
        return [ObjetTri_1.ObjetTri.init('Libelle')];
      }
      getVisible(D) {
        const lEstDansDate =
          !D.Date || (D.Date >= this.DateDeb && D.Date <= this.DateFin);
        let lEstDuGenre = true;
        if (D.estDuGenre !== undefined) {
          lEstDuGenre = D.estDuGenre;
        }
        return (
          D.getGenre() === this.Genre &&
          lEstDuGenre &&
          (D.Actif ||
            ((!this.avecFiltre || !this.PourMemeMatiere || D.PourMemeMatiere) &&
              (!this.PourMemeClasseEtGroupe || D.PourMemeClasseEtGroupe) &&
              lEstDansDate)) &&
          (D.getEtat() === Enumere_Etat_1.EGenreEtat.Creation ||
            D.existeNumero())
        );
      }
      editionAutorisee(aParams) {
        return (
          this.genreRessourceDocJoint !==
            Enumere_Ressource_1.EGenreRessource.DocJointEtablissement ||
          this.suppressionAutoriseePJ(
            aParams.article,
            this.genreRessourceDocJoint,
          )
        );
      }
      suppressionAutoriseePJ(aPJ, aGenreRessource) {
        if (!aPJ) {
          return false;
        }
        if (
          aGenreRessource !==
          Enumere_Ressource_1.EGenreRessource.DocJointEtablissement
        ) {
          return true;
        } else {
          return aPJ.modifiable !== false;
        }
      }
      remplirMenuContextuel(aParams) {
        const lMenu = aParams.menuContextuel;
        const lArticle = aParams.article;
        lMenu.add(
          'Modifier',
          this.editionAutorisee(aParams),
          () => {
            this.callbacks.editerSiteWeb({
              estCreation: false,
              data: lArticle,
              donneesListe: this,
            });
          },
          { icon: 'icon_pencil' },
        );
        lMenu.add(
          'Supprimer',
          this.suppressionAutoriseePJ(lArticle, this.genreRessourceDocJoint),
          () => {
            this.callbacks.supprimerSiteWeb({ data: lArticle });
          },
          { icon: 'icon_trash' },
        );
      }
    }
    exports.DonneesListe_PieceJointeFlat = DonneesListe_PieceJointeFlat;
  },
  fn: 'donneesliste_piecejointeflat.js',
});