IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDiapoCarrousel = void 0;
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetVignette_1 = require('ObjetVignette');
    const Enumere_Etat_1 = require('Enumere_Etat');
    class ObjetDiapoCarrousel extends ObjetVignette_1.ObjetVignette {
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
            lDocCasier.getEtat() === Enumere_Etat_1.EGenreEtat.Creation
              ? lDocCasier.urlBlob
              : ObjetChaine_1.GChaine.creerUrlBruteLienExterne(lDocCasier, {
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
    exports.ObjetDiapoCarrousel = ObjetDiapoCarrousel;
  },
  fn: 'objetdiapocarrousel.js',
});