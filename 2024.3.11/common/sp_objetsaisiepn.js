IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetSaisiePN = void 0;
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetSaisie_1 = require('ObjetSaisie');
    class ObjetSaisiePN extends ObjetSaisie_1.ObjetSaisie {
      constructor(...aParams) {
        super(...aParams);
        this.ListeElements = new ObjetListeElements_1.ObjetListeElements();
      }
      initialiserOptionsObjetSaisie() {
        super.initialiserOptionsObjetSaisie();
        $.extend(this._options, {
          avecEventSurFermetureListe: true,
          forcerBoutonDeploiement: false,
        });
      }
      setDonnees(AListeElements, ASelection, aSansSelection) {
        if (this.listeDeroulee) {
          this.fermerListe(false);
        }
        this.ListeElements = AListeElements
          ? AListeElements
          : new ObjetListeElements_1.ObjetListeElements();
        if (this._options.avecTriListeElements) {
          this.ListeElements.trier();
        }
        this.listeDeroulee = false;
        this.cache.heightScroll = 0;
        this._remplirListe();
        let LLibelle = '&nbsp;';
        if (
          this._options.initAutoSelectionAvecUnElement &&
          !this._options.multiSelection
        ) {
          if (this.ListeElements && this.ListeElements.count() === 1) {
            const lElement = this.ListeElements.get(0);
            if (
              lElement.existe() &&
              lElement.getLibelle() &&
              lElement.getLibelle().length
            ) {
              ASelection = this.Selection = 0;
              LLibelle = this.ListeElements.getLibelle(this.Selection);
            } else {
              this.Selection = -1;
            }
          }
          if (this._options.celluleAvecTexteHtml) {
            this.bouton.setLibelleHtml(LLibelle);
          } else {
            this.bouton.setLibelle(LLibelle);
          }
        }
        if (!aSansSelection) {
          this._surSetDonnnes = true;
          this.setSelection(ASelection);
        }
        const lNbElements = this.ListeElements
          ? this.ListeElements.getNbrElementsExistes()
          : 0;
        if (lNbElements > 1 || this._options.forcerBoutonDeploiement) {
          this.bouton.setAvecBouton(true);
          this.bouton.setActif(true);
        } else {
          this.bouton.setAvecBouton(false);
          this.bouton.setActif(false);
        }
      }
    }
    exports.ObjetSaisiePN = ObjetSaisiePN;
  },
  fn: 'objetsaisiepn.js',
});