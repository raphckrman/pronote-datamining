IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DonneesListe_PieceJointe = void 0;
    const ObjetTri_1 = require('ObjetTri');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetDonneesListe_1 = require('ObjetDonneesListe');
    const ObjetFenetre_PieceJointeCP_1 = require('ObjetFenetre_PieceJointeCP');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetChaine_1 = require('ObjetChaine');
    const UtilitaireSelecFile_1 = require('UtilitaireSelecFile');
    class DonneesListe_PieceJointe extends ObjetFenetre_PieceJointeCP_1.DonneesListe_PieceJointeCP {
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
        this.PourMemeMatiere = false;
        this.PourMemeClasseEtGroupe = false;
        this.erreurURL = 'erreur_URLInexistante';
        this.setOptions({ avecEtatSaisie: aAvecEtatSaisie });
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
          D.existeNumero()
        );
      }
      getCouleurCellule(aParams) {
        return this.genreRessourceDocJoint !==
          Enumere_Ressource_1.EGenreRessource.DocJointEtablissement &&
          aParams.colonne === 3
          ? ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Fixe
          : ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Blanc;
      }
      surCreation(D, V) {
        const lFile = V[-1];
        if (
          UtilitaireSelecFile_1.UtilitaireSelecFile.estFichierCloudPartage(
            lFile,
          )
        ) {
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
        if (aErreur && typeof aErreur !== 'string' && aErreur.estFichierCloud) {
          return '';
        }
        if (aErreur === this.erreurURL) {
          return 'L'adresse internet est incorrecte.';
        } else {
          return super.getMessageCreationImpossible(aErreur);
        }
      }
      avecEdition(aParams) {
        if (
          this.genreRessourceDocJoint !==
          Enumere_Ressource_1.EGenreRessource.DocJointEtablissement
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
          V = ObjetChaine_1.GChaine.verifierURLHttp(V);
          if (V.toLowerCase() === 'http://' || V.toLowerCase() === 'https://') {
            return this.erreurURL;
          }
        }
        return super.surEdition(aParams, V);
      }
      getMessageEditionImpossible(aParams, aErreur) {
        if (aErreur === this.erreurURL) {
          return 'L'adresse internet est incorrecte.';
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
        if (
          aGenreRessource !==
          Enumere_Ressource_1.EGenreRessource.DocJointEtablissement
        ) {
          return true;
        } else {
          return aPJ.modifiable !== false;
        }
      }
    }
    exports.DonneesListe_PieceJointe = DonneesListe_PieceJointe;
  },
  fn: 'donneesliste_piecejointe.js',
});