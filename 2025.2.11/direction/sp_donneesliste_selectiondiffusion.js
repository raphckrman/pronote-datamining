IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DonneesListe_SelectionDiffusion = void 0;
    const AccessApp_1 = require('AccessApp');
    const ObjetDonneesListeFlatDesign_1 = require('ObjetDonneesListeFlatDesign');
    class DonneesListe_SelectionDiffusion extends ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign {
      constructor(aDonnees) {
        super(aDonnees);
        this.uniquementMesListes =
          (0, AccessApp_1.getApp)().parametresUtilisateur.get(
            'listeDiffusion.uniquementMesListes',
          ) || false;
        this.setOptions({
          avecCB: true,
          avecCocheCBSurLigne: true,
          avecBoutonActionLigne: false,
          avecEvnt_Selection: true,
        });
      }
      setUniquementMesListes(aUniquementMesListes) {
        this.uniquementMesListes = aUniquementMesListes;
      }
      getVisible(D) {
        return !this.uniquementMesListes || D.estAuteur;
      }
      getValueCB(aParams) {
        return aParams.article ? !!aParams.article.cmsActif : false;
      }
      setValueCB(aParams, aValue) {
        aParams.article.cmsActif = aValue;
      }
    }
    exports.DonneesListe_SelectionDiffusion = DonneesListe_SelectionDiffusion;
  },
  fn: 'donneesliste_selectiondiffusion.js',
});