IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DonneesListe_SelectionRessource_fd = void 0;
    const ObjetDonneesListeFlatDesign_1 = require('ObjetDonneesListeFlatDesign');
    const AccessApp_1 = require('AccessApp');
    class DonneesListe_SelectionRessource_fd extends ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign {
      constructor(aDonnees) {
        super(aDonnees);
        this.setOptions({
          avecBoutonActionLigne: false,
          avecCB: true,
          avecCocheCBSurLigne: true,
          avecSelection: false,
        });
      }
      getValueCB(aParams) {
        return aParams.article.selectionne;
      }
      setValueCB(aParams, aValue) {
        aParams.article.selectionne = aValue;
      }
      getDisabledCB(aParams) {
        return aParams.article.nonEditable;
      }
      estLigneOff(aParams) {
        return aParams.article.nonEditable;
      }
      getStyle(aParams) {
        return aParams.article.getActif()
          ? ''
          : `color:${(0, AccessApp_1.getApp)().getCouleur().rouge};`;
      }
      getClass(aParams) {
        return this._options && this._options.getClassRessource
          ? this._options.getClassRessource(aParams.article)
          : '';
      }
      getTooltip(aParams) {
        return this._options && this._options.getHintRessource
          ? this._options.getHintRessource(aParams.article)
          : '';
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
    }
    exports.DonneesListe_SelectionRessource_fd =
      DonneesListe_SelectionRessource_fd;
  },
  fn: 'donneesliste_selectionressource_fd.js',
});