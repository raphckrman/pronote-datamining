IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DonneesListe_SelectionRessource = void 0;
    const ObjetStyle_1 = require('ObjetStyle');
    const ObjetDonneesListe_1 = require('ObjetDonneesListe');
    const AccessApp_1 = require('AccessApp');
    class DonneesListe_SelectionRessource extends ObjetDonneesListe_1.ObjetDonneesListe {
      constructor(aDonnees) {
        super(aDonnees);
        this.setOptions({
          avecSuppression: false,
          avecDeploiement: true,
          avecEtatSaisie: false,
        });
      }
      avecEdition(aParams) {
        return aParams.colonne === 0 && !aParams.article.nonEditable;
      }
      getColonneTransfertEdition(aParams) {
        if (!this.avecSelection(aParams) && !this.avecEdition(aParams)) {
          return 0;
        }
      }
      avecEvenementApresEdition(aParams) {
        return true;
      }
      surEdition(aParams, V) {
        switch (aParams.colonne) {
          case 0:
            if (aParams.article.estUnDeploiement) {
              this.Donnees.parcourir((aFils) => {
                if (aFils.pere === aParams.article) {
                  aFils.selectionne = V;
                }
              });
            } else {
              aParams.article.selectionne = V;
            }
            break;
        }
      }
      getValeur(aParams) {
        switch (aParams.colonne) {
          case 0:
            if (aParams.article.estUnDeploiement) {
              return this.getEtatCocheSelonFils(aParams.article, aParams);
            }
            return aParams.article.selectionne;
          case 1:
            return aParams.article.getLibelle();
        }
        return '';
      }
      getTypeValeur(aParams) {
        switch (aParams.colonne) {
          case 0:
            return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche;
          case 1:
            return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
        }
        return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
      }
      getStyle(aParams) {
        switch (aParams.colonne) {
          case 1:
            return aParams.article.getActif()
              ? ''
              : ObjetStyle_1.GStyle.composeCouleurTexte(
                  (0, AccessApp_1.getApp)().getCouleur().rouge,
                );
        }
        return '';
      }
      getClass(aParams) {
        switch (aParams.colonne) {
          case 1:
            return this._options && this._options.getClassRessource
              ? this._options.getClassRessource(aParams.article)
              : aParams.article && aParams.article.estUnDeploiement
                ? 'Gras'
                : '';
        }
        return '';
      }
      getCouleurCellule(aParams) {
        if (aParams.article.estUnDeploiement && aParams.colonne !== 0) {
          return ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule
            .Deploiement;
        }
      }
      getTooltip(aParams) {
        switch (aParams.colonne) {
          case 1:
            return this._options && this._options.getHintRessource
              ? this._options.getHintRessource(aParams.article)
              : '';
        }
        return '';
      }
      getVisible(D) {
        if (!this._options || !this._options.filtres) {
          return true;
        }
        let lVisible = true;
        for (const i in this._options.filtres) {
          const lFiltre = this._options.filtres[i];
          lVisible = lVisible && lFiltre.filtre(D, lFiltre.checked);
          if (!lVisible) {
            D.selectionne = false;
            return false;
          }
        }
        return lVisible;
      }
      avecImageSurColonneDeploiement(aParams) {
        return aParams.colonne === 1;
      }
      getIndentationCellule(aParams) {
        if (aParams.colonne === 1) {
          return this.getIndentationCelluleSelonParente(aParams);
        }
        return 0;
      }
    }
    exports.DonneesListe_SelectionRessource = DonneesListe_SelectionRessource;
  },
  fn: 'donneesliste_selectionressource.js',
});