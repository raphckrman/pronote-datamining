IE.fModule({
  f: function (exports, require, module, global) {
    const { ObjetTri } = require('ObjetTri.js');
    const { EGenreRessource } = require('Enumere_Ressource.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const {
      ObjetDonneesListeFlatDesign,
    } = require('ObjetDonneesListeFlatDesign.js');
    const { EGenreEtat } = require('Enumere_Etat.js');
    class DonneesListe_PieceJointeFlat extends ObjetDonneesListeFlatDesign {
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
        if (this.avecGestionLibelleSurLiens) {
          this.creerIndexUnique(['url', 'Libelle', 'Genre']);
        } else {
          this.creerIndexUnique(['Libelle', 'Genre']);
        }
        this.setOptions({
          avecCB: true,
          avecCocheCBSurLigne: true,
          avecEvnt_Creation: true,
          avecSelection: false,
          avecEdition: false,
          avecSuppression: false,
          avecBoutonActionLigne: true,
        });
      }
      getValueCB(aParams) {
        return aParams.article ? aParams.article.Actif : false;
      }
      setValueCB(aParams, aValue) {
        aParams.article.setEtat(EGenreEtat.Modification);
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
        return [ObjetTri.init('Libelle')];
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
          (D.getEtat() === EGenreEtat.Creation || D.existeNumero())
        );
      }
      editionAutorisee(aParams) {
        return (
          this.genreRessourceDocJoint !==
            EGenreRessource.DocJointEtablissement ||
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
        if (aGenreRessource !== EGenreRessource.DocJointEtablissement) {
          return true;
        } else {
          return aPJ.modifiable !== false;
        }
      }
      remplirMenuContextuel(aParams) {
        const lMenu = aParams.menuContextuel;
        const lArticle = aParams.article;
        lMenu.add(
          GTraductions.getValeur('Modifier'),
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
          GTraductions.getValeur('Supprimer'),
          this.suppressionAutoriseePJ(lArticle, this.genreRessourceDocJoint),
          () => {
            this.callbacks.supprimerSiteWeb({ data: lArticle });
          },
          { icon: 'icon_trash' },
        );
      }
    }
    module.exports = { DonneesListe_PieceJointeFlat };
  },
  fn: 'donneesliste_piecejointeflat.js',
});