IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_Liste = void 0;
    const Enumere_EvenementListe_1 = require('@cp/script/Enumere/Enumere_EvenementListe');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    class ObjetFenetre_Liste extends ObjetFenetre_1.ObjetFenetre {
      constructor(aParams) {
        super(aParams);
        this.modeActivationBtnValider = {
          surModification: 1,
          auMoinsUnEltSelectionne: 2,
          toujoursActifs: 3,
          autre: 4,
        };
        this.valeurFiltre = false;
        this.fermerSurValidation = true;
        this.setOptionsFenetre({
          modeActivationBtnValider:
            this.modeActivationBtnValider.surModification,
          avecVerificationLigneSelectionne: false,
        });
      }
      construireInstances() {
        this.identListe = this.add(
          ObjetListe_1.ObjetListe,
          this.evenementSurListe,
          this.initialiserListe,
        );
      }
      verifierActivationBtnValider(aBouton) {
        return false;
      }
      getDisabledFenetreBtn(aBouton) {
        if (
          this.optionsFenetre.modeActivationBtnValider ===
          this.modeActivationBtnValider.autre
        ) {
          return !this.verifierActivationBtnValider(aBouton);
        }
        if (
          this.optionsFenetre.modeActivationBtnValider ===
          this.modeActivationBtnValider.toujoursActifs
        ) {
          return false;
        }
        if (
          this.optionsFenetre.modeActivationBtnValider ===
            this.modeActivationBtnValider.auMoinsUnEltSelectionne &&
          aBouton.index === 1
        ) {
          let lDisabled = true;
          this.getInstance(this.identListe)
            .getListeArticles()
            .parcourir((aArticle) => {
              if (aArticle.cmsActif) {
                lDisabled = false;
                return false;
              }
            });
          return lDisabled;
        } else {
          return (
            this.optionsFenetre.listeBoutonsInactifs[aBouton.index] === true
          );
        }
      }
      initialiserListe(aInstance) {
        var _a;
        var _b;
        const lOptions = {
          listeCreations:
            this.paramsListe.creations !== null
              ? this.paramsListe.creations
              : undefined,
          avecBoutonCreation:
            this.paramsListe.avecCreation !== null
              ? this.paramsListe.avecCreation
              : undefined,
          avecCreationEnLigneDesignClassique: true,
          titreCreation:
            this.paramsListe.titreCreation !== null
              ? this.paramsListe.titreCreation
              : undefined,
        };
        if (Array.isArray(this.paramsListe.tailles)) {
          lOptions.colonnes = [];
          this.paramsListe.tailles.forEach((aVal) => {
            lOptions.colonnes.push({ taille: aVal });
          });
        }
        if (Array.isArray(this.paramsListe.titres)) {
          this.paramsListe.titres.forEach((aVal, aIndex) => {
            if (lOptions.colonnes[aIndex]) {
              lOptions.colonnes[aIndex].titre = aVal;
            }
          });
        }
        if (Array.isArray(this.paramsListe.hintTitres)) {
          this.paramsListe.hintTitres.forEach((aVal, aIndex) => {
            if (lOptions.colonnes[aIndex]) {
              lOptions.colonnes[aIndex].hint = aVal;
            }
          });
        }
        aInstance.setOptionsListe(lOptions);
        if (this.paramsListe.colonnesCachees) {
          aInstance.setOptionsListe({
            colonnesCachees: this.paramsListe.colonnesCachees,
          });
        }
        if (this.paramsListe.editable !== undefined) {
          aInstance.setOptionsListe({
            nonEditable: !this.paramsListe.editable,
          });
        }
        if (this.paramsListe.optionsListe) {
          aInstance.setOptionsListe(this.paramsListe.optionsListe);
        }
        aInstance.setOptionsListe({
          ariaLabel:
            (_b =
              (_a = this.paramsListe.optionsListe) === null || _a === void 0
                ? void 0
                : _a.ariaLabel) !== null && _b !== void 0
              ? _b
              : () => {
                  return this.optionsFenetre.titre;
                },
        });
      }
      setDonnees(
        aObjetDonneesListe,
        aAvecValidation,
        aLigneSelectionnee,
        aParamsSetDonneesListe,
      ) {
        this.afficher();
        this.avecValidation = aAvecValidation;
        this.setBoutonActif(1, false);
        if (this.avecValidation) {
          this.setBoutonVisible(1, false);
        }
        this.getInstance(this.identListe).setDonnees(
          aObjetDonneesListe,
          aLigneSelectionnee,
          aParamsSetDonneesListe,
        );
        if (
          !!this.paramsListe &&
          this.paramsListe.optionsListe &&
          this.paramsListe.optionsListe.hauteurAdapteContenu
        ) {
          this.positionnerFenetre();
        }
      }
      actualiserListe(aConserverSelection, aActivationBouton) {
        this.getInstance(this.identListe).actualiser(aConserverSelection);
        if (aActivationBouton) {
          this.setBoutonActif(1, aActivationBouton);
        }
      }
      annulerCreation() {
        this.getInstance(this.identListe).annulerCreation();
      }
      jsxDisplayCheckboxFiltre() {
        return this.paramsListe ? !!this.paramsListe.callbckFiltre : false;
      }
      jsxModelCheckboxFiltre() {
        return {
          getValue: () => {
            return this.valeurFiltre;
          },
          setValue: (aValue) => {
            this._evenementSurCB(aValue);
          },
          getLibelle: () => {
            return this.paramsListe && this.paramsListe.labelFiltre
              ? this.paramsListe.labelFiltre
              : '';
          },
        };
      }
      composeContenu() {
        const T = [];
        T.push(
          IE.jsx.str(
            'div',
            { class: 'flex-contain cols full-size flex-gap-l' },
            IE.jsx.str(
              'div',
              {
                class: 'fix-bloc m-left-s',
                ie_display: this.jsxDisplayCheckboxFiltre.bind(this),
              },
              IE.jsx.str(IEHtml_CheckboxRadio_1.Checkbox, {
                ie_model: this.jsxModelCheckboxFiltre.bind(this),
              }),
            ),
            IE.jsx.str('div', {
              class: 'fluid-bloc',
              id: this.getNomInstance(this.identListe),
            }),
          ),
        );
        return T.join('');
      }
      evenementSurListe(aParametres) {
        switch (aParametres.genreEvenement) {
          case Enumere_EvenementListe_1.EGenreEvenementListe.Selection:
          case Enumere_EvenementListe_1.EGenreEvenementListe.SelectionClick:
            if (
              this.optionsFenetre.modeActivationBtnValider !==
              this.modeActivationBtnValider.autre
            ) {
              this.setBoutonActif(
                1,
                aParametres.ligne !== -1 ||
                  !this.optionsFenetre.avecVerificationLigneSelectionne,
              );
            }
            if (this.avecValidation) {
              this.surValidation(1);
            }
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe.SelectionDblClick:
            this.surValidation(1);
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe.Suppression:
            if (
              this.optionsFenetre.modeActivationBtnValider !==
              this.modeActivationBtnValider.autre
            ) {
              this.setBoutonActif(1, false);
            }
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe.Creation:
            if (this.paramsListe.avecCreation) {
              if (this.paramsListe.callbckCreation) {
                this.changementListe = true;
                return this.paramsListe.callbckCreation(
                  aParametres.colonne,
                  aParametres.ligne,
                );
              }
            }
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe.ApresCreation:
            if (
              this.optionsFenetre.modeActivationBtnValider !==
              this.modeActivationBtnValider.autre
            ) {
              this.setBoutonActif(1, true);
            }
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe.ApresEdition:
            this.setBoutonActif(1, true);
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe.Edition:
            if (this.paramsListe.callbckEdition) {
              this.changementListe = true;
              return this.paramsListe.callbckEdition(aParametres);
            }
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe
            .ModificationCBLigne:
            this.setBoutonActif(1, true);
            break;
          case Enumere_EvenementListe_1.EGenreEvenementListe.ApresSuppression:
            this.setBoutonActif(1, true);
            break;
        }
        if (
          [
            Enumere_EvenementListe_1.EGenreEvenementListe.Creation,
            Enumere_EvenementListe_1.EGenreEvenementListe.Edition,
            Enumere_EvenementListe_1.EGenreEvenementListe.ApresEdition,
            Enumere_EvenementListe_1.EGenreEvenementListe.Suppression,
            Enumere_EvenementListe_1.EGenreEvenementListe.ApresSuppression,
            Enumere_EvenementListe_1.EGenreEvenementListe.ModificationCBLigne,
          ].includes(aParametres.genreEvenement)
        ) {
          this.changementListe = true;
        }
      }
      surValidation(aNumeroBouton) {
        const lMaSelection = this.getInstance(this.identListe).getSelection();
        const lSelections = this.getInstance(
          this.identListe,
        ).getListeArticlesCochees();
        if (this.fermerSurValidation) {
          this.fermer();
        }
        if (this.optionsFenetre.callback) {
          this.optionsFenetre.callback(
            aNumeroBouton,
            lMaSelection,
            this.changementListe,
            lSelections,
          );
        }
        this.callback.appel(aNumeroBouton, lMaSelection, this.changementListe);
        IEHtml_1.IEHtml.refresh();
      }
      _evenementSurCB(aValue) {
        this.valeurFiltre = !!aValue;
        if (this.paramsListe.callbckFiltre) {
          this.paramsListe.callbckFiltre(this.valeurFiltre, this);
        }
      }
      setFermerSurValidation(aFermer) {
        this.fermerSurValidation = aFermer;
      }
      setListeElementsSelection(aListeElements) {
        this.getInstance(this.identListe).setListeElementsSelection(
          aListeElements,
        );
      }
      getListe() {
        return this.getInstance(this.identListe);
      }
    }
    exports.ObjetFenetre_Liste = ObjetFenetre_Liste;
  },
  fn: 'objetfenetre_liste.js',
});