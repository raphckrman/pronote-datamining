IE.fModule({
  f: function (exports, require, module, global) {
    const {
      ObjetDonneesListeFlatDesign,
    } = require('ObjetDonneesListeFlatDesign.js');
    class DonneesListe_SelectionDiffusion extends ObjetDonneesListeFlatDesign {
      constructor(aDonnees) {
        super(aDonnees);
        this.uniquementMesListes =
          GApplication.parametresUtilisateur.get(
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
    module.exports = { DonneesListe_SelectionDiffusion };
  },
  fn: 'donneesliste_selectiondiffusion.js',
});