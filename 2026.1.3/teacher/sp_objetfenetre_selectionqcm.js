IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SelectionQCM = void 0;
    const DonneesListe_SelectionQCM_1 = require('@cp/Espace/Script/DonneesListe/DonneesListe_SelectionQCM');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_EvenementListe_1 = require('@cp/script/Enumere/Enumere_EvenementListe');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const AccessApp_1 = require('@cp/script/AccessApp');
    class ObjetFenetre_SelectionQCM extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
      }
      construireInstances() {
        this.identListeQCM = this.add(
          ObjetListe_1.ObjetListe,
          this.evenementSurListeQCM,
          this._initialiserListeQCM,
        );
      }
      setDonnees(aListeQCM, aMessage, aDonnees) {
        if (aMessage) {
          const lThis = this;
          (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message: aMessage,
              callback: function () {
                lThis.callback.appel(0);
              },
            });
        } else {
          this.donnees = { avecNiveaux: true };
          $.extend(this.donnees, aDonnees);
          this.listeQCM = aListeQCM;
          this.actualiser();
          this.afficher();
          this.setBoutonActif(1, false);
          this._actualiserListe();
        }
      }
      setGenreRessources(aParam) {
        this.ress = aParam;
      }
      composeContenu() {
        const T = [];
        T.push(
          IE.jsx.str('div', {
            id: this.getInstance(this.identListeQCM).getNom(),
            style: 'width: 100%; height: 100%;',
          }),
        );
        return T.join('');
      }
      surValidation(aNumeroBouton) {
        this.callback.appel(
          aNumeroBouton,
          this.donnees.multiSelection
            ? this.getInstance(this.identListeQCM).getListeElementsSelection()
            : this.selectionCourante,
          this.donnees,
        );
        this.fermer();
      }
      evenementSurListeQCM(aParametres, aGenreEvenementListe, I, J) {
        switch (aGenreEvenementListe) {
          case Enumere_EvenementListe_1.EGenreEvenementListe.Selection: {
            this.selectionCourante = this.listeQCM.get(J);
            let lEstSelectionValide =
              this.selectionCourante.getGenre() === this.ress.genreQCM ||
              this.selectionCourante.getGenre() === this.ress.genreAucun;
            this.setBoutonActif(1, lEstSelectionValide);
            if (!this.donnees.multiSelection && lEstSelectionValide) {
              this.surValidation(1);
            }
            break;
          }
        }
      }
      _initialiserListeQCM(aInstance) {
        aInstance.setOptionsListe({
          skin: ObjetListe_1.ObjetListe.skin.flatDesign,
          ariaLabel: 'Liste des QCM',
        });
      }
      _actualiserListe() {
        this.getInstance(this.identListeQCM).setDonnees(
          new DonneesListe_SelectionQCM_1.DonneesListe_SelectionQCM(
            this.listeQCM,
            null,
            {
              formatBiblio: false,
              multiSelection: this.donnees.multiSelection,
              genreQCM: this.ress.genreQCM,
              estFDMinimal: false,
            },
          ),
        );
      }
    }
    exports.ObjetFenetre_SelectionQCM = ObjetFenetre_SelectionQCM;
  },
  fn: 'objetfenetre_selectionqcm.js',
});