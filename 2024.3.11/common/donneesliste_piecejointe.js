IE.fModule({
  f: function (exports, require, module, global) {
    const { ObjetTri } = require('ObjetTri.js');
    const { EGenreRessource } = require('Enumere_Ressource.js');
    const { ObjetDonneesListe } = require('ObjetDonneesListe.js');
    const {
      DonneesListe_PieceJointeCP,
    } = require('ObjetFenetre_PieceJointeCP.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { GChaine } = require('ObjetChaine.js');
    const { UtilitaireSelecFile } = require('UtilitaireSelecFile.js');
    class DonneesListe_PieceJointe extends DonneesListe_PieceJointeCP {
      constructor(
        aDonnees,
        aAvecEtatSaisie,
        aGenre,
        aGenreRessourceDocJoint,
        aMultiSelection,
        aAvecGestionLibelleSurLiens,
      ) {
        super(
          aDonnees,
          aGenre,
          aGenreRessourceDocJoint,
          false,
          aMultiSelection,
          aAvecGestionLibelleSurLiens,
        );
        this.setOptions({ avecEtatSaisie: aAvecEtatSaisie });
        this.PourMemeMatiere = false;
        this.PourMemeClasseEtGroupe = false;
        this.erreurURL = 'erreur_URLInexistante';
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
          D.existeNumero()
        );
      }
      getCouleurCellule(aParams) {
        return this.genreRessourceDocJoint !==
          EGenreRessource.DocJointEtablissement && aParams.colonne === 3
          ? ObjetDonneesListe.ECouleurCellule.Fixe
          : ObjetDonneesListe.ECouleurCellule.Blanc;
      }
      surCreation(D, V) {
        const lFile = V[-1];
        if (UtilitaireSelecFile.estFichierCloudPartage(lFile)) {
          return { estFichierCloud: true };
        }
        if (this.avecGestionLibelleSurLiens) {
          if (
            V[1].toLowerCase() === 'http://' ||
            V[1].toLowerCase() === 'https://'
          ) {
            return this.erreurURL;
          }
        }
        super.surCreation(D, V);
        D.PourMemeMatiere = true;
        D.PourMemeClasseEtGroupe = true;
      }
      getMessageCreationImpossible(aErreur) {
        if (aErreur && aErreur.estFichierCloud) {
          return '';
        }
        if (aErreur === this.erreurURL) {
          return GTraductions.getValeur('URLIncorrecte');
        } else {
          return super.getMessageCreationImpossible(aErreur);
        }
      }
      avecEdition(aParams) {
        if (
          this.genreRessourceDocJoint !== EGenreRessource.DocJointEtablissement
        ) {
          return (
            (aParams.colonne < 2 || this.avecGestionLibelleSurLiens) &&
            aParams.colonne !== 3
          );
        } else {
          return (
            aParams.colonne === 0 ||
            (aParams.colonne === 1 &&
              DonneesListe_PieceJointe.suppressionAutoriseePJ(
                aParams.article,
                this.genreRessourceDocJoint,
              ))
          );
        }
      }
      surEdition(aParams, V) {
        if (this.avecGestionLibelleSurLiens && aParams.colonne === 1) {
          V = GChaine.verifierURLHttp(V);
          if (V.toLowerCase() === 'http://' || V.toLowerCase() === 'https://') {
            return this.erreurURL;
          }
        }
        return super.surEdition(aParams, V);
      }
      getMessageEditionImpossible(aParams, aErreur) {
        if (aErreur === this.erreurURL) {
          return GTraductions.getValeur('URLIncorrecte');
        } else {
          return super.getMessageEditionImpossible(aParams, aErreur);
        }
      }
      avecSuppression(aParams) {
        return DonneesListe_PieceJointe.suppressionAutoriseePJ(
          aParams.article,
          this.genreRessourceDocJoint,
        );
      }
      avecBordureDroite() {
        return this.options.avecBordure;
      }
      static suppressionAutoriseePJ(aPJ, aGenreRessource) {
        if (!aPJ) {
          return false;
        }
        if (aGenreRessource !== EGenreRessource.DocJointEtablissement) {
          return true;
        } else {
          return aPJ.modifiable !== false;
        }
      }
    }
    module.exports = { DonneesListe_PieceJointe };
  },
  fn: 'donneesliste_piecejointe.js',
});