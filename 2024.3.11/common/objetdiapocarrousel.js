IE.fModule({
  f: function (exports, require, module, global) {
    const { GChaine } = require('ObjetChaine.js');
    const { ObjetVignette } = require('ObjetVignette.js');
    const { EGenreEtat } = require('Enumere_Etat.js');
    class ObjetDiapoCarrousel extends ObjetVignette {
      constructor(...aParams) {
        super(...aParams);
      }
      construireAffichage() {
        return this.afficher();
      }
      setParametres(aElement, aOptions) {
        const lOptions = {
          genreRessource: null,
          dimensionPhoto: 300,
          avecEtiquette: false,
          avecSuppression: false,
          avecEditionLegende: false,
          afficherNomFichierSiLibelleVide: false,
          sansBlocLibelle: false,
          altImage: '',
        };
        if (aOptions === null || aOptions === undefined) {
          aOptions = {};
        }
        $.extend(lOptions, aOptions);
        const lParamVignette = {
          avecSurvol: true,
          avecSelection: false,
          avecImage: true,
          avecImgViewer: true,
          estDiapo: true,
          avecEtiquette: lOptions.avecEtiquette,
          avecSuppression: lOptions.avecSuppression,
          avecEditionLegende: lOptions.avecEditionLegende,
          largeur: lOptions.dimensionPhoto,
          hauteur: lOptions.dimensionPhoto,
          hauteurEntete: 50,
          sansBlocLibelle: lOptions.sansBlocLibelle,
          altImage: lOptions.altImage,
        };
        this.setParam(lParamVignette);
        const lDocCasier = aElement.documentCasier;
        $.extend(aElement, {
          libelle: !!aElement.libelle
            ? aElement.libelle
            : aElement.getLibelle() !== ''
              ? aElement.getLibelle()
              : lOptions.afficherNomFichierSiLibelleVide === true
                ? lDocCasier.getLibelle()
                : '',
        });
        const lData = {
          data: aElement,
          lien:
            lDocCasier.getEtat() === EGenreEtat.Creation
              ? lDocCasier.urlBlob
              : GChaine.creerUrlBruteLienExterne(lDocCasier, {
                  genreRessource: lOptions.genreRessource,
                  miniature: lDocCasier.miniature,
                }),
          strEtiquette:
            lParamVignette.avecEtiquette && aElement.strEtiquette
              ? aElement.strEtiquette
              : '',
          estImg: true,
          estSiteWeb: false,
          estFichier: false,
          estCloud: false,
        };
        this.setDonnees(lData);
      }
    }
    module.exports = { ObjetDiapoCarrousel };
  },
  fn: 'objetdiapocarrousel.js',
});