IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradObjetFenetre_SelectionCategories =
      exports.ObjetFenetre_SelectionCategories = void 0;
    const ObjetDonneesListeFlatDesign_1 = require('@cp/script/ObjetDonneesListeFlatDesign');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_EvenementListe_1 = require('@cp/script/Enumere/Enumere_EvenementListe');
    const ObjetIndexsUnique_1 = require('@cp/script/ObjetIndexsUnique');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const IEHtml_Liste_1 = require('@cp/Produit/Script/IEHtml.Liste');
    const Form_components_css_1 = require('@cp/Produit/Css/Form-components.css');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const ObjetTraduction_2 = require('@cp/script/ObjetTraduction');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetFenetre_SelecteurCouleur_1 = require('@cp/Espace/Script/Fenetres/ObjetFenetre_SelecteurCouleur');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const Categorie_1 = require('@cp/Produit/Script/Categorie');
    const IconeSvgPencil_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPencil');
    const IconeSvgTrash_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTrash');
    class ObjetFenetre_SelectionCategories extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.options = this.initOptions();
        this.avecModification = false;
        this._saisieEnCours = false;
        this.setOptionsFenetre({
          addParametresValidation: this.addParametresValidation.bind(this),
          largeur: 400,
          hauteur: 500,
        });
      }
      addParametresValidation(aParams) {
        var _a;
        const lResult = {
          avecModification: this.avecModification,
          listeCategories: this.listeCategories,
        };
        if (
          this.options.avecMultiSelection &&
          ((_a = aParams.bouton) === null || _a === void 0
            ? void 0
            : _a.valider)
        ) {
          lResult.selections = this.getSelections();
        }
        return lResult;
      }
      getSelections() {
        var _a;
        var _b;
        return (_b =
          (_a = this.liste) === null || _a === void 0
            ? void 0
            : _a.getListeArticlesCochees()) !== null && _b !== void 0
          ? _b
          : new ObjetListeElements_1.ObjetListeElements();
      }
      initOptions() {
        return { avecMultiSelection: false };
      }
      setOptions(aOptions) {
        this.options = Object.assign(Object.assign({}, this.options), aOptions);
        return this;
      }
      async setDonnees({ listeCategories, callbackSaisie }) {
        this.listeCategories =
          MethodesObjet_1.MethodesObjet.dupliquer(listeCategories);
        this._callbackSaisie = callbackSaisie;
        this.setOptionsFenetre({
          listeBoutons: this.options.avecMultiSelection
            ? [
                'Annuler',
                {
                  libelle: 'Valider',
                  valider: true,
                },
              ]
            : ['Fermer'],
          titre: this.options.avecMultiSelection
            ? TradObjetFenetre_SelectionCategories.selectionnerCategories
            : TradObjetFenetre_SelectionCategories.editerCategorie,
        });
        const lResult = this.afficher(this.composeContenu());
        this.afficherListe();
        return await lResult;
      }
      async saisie(aParams) {
        var _a, _b, _c;
        if (!this._callbackSaisie || !this.listeCategories) {
          return;
        }
        this.avecModification = true;
        this._saisieEnCours = true;
        try {
          const lResultSaisie = await this._callbackSaisie(
            Object.assign(Object.assign({}, aParams), {
              listeCategories: this.listeCategories,
            }),
          );
          switch (aParams.genreSaisie) {
            case ObjetFenetre_SelectionCategories.GenreSaisie.Creation: {
              let lElementCree;
              if (lResultSaisie instanceof ObjetElement_1.ObjetElement) {
                lElementCree = lResultSaisie;
              }
              if (lResultSaisie && 'categorieCree' in lResultSaisie) {
                lElementCree = lResultSaisie.categorieCree;
              }
              if (!(lElementCree instanceof ObjetElement_1.ObjetElement)) {
                return;
              }
              const lCategorie = aParams.categorie;
              lCategorie.setNumero(lElementCree.getNumero());
              lCategorie.setEtat(Enumere_Etat_1.EGenreEtat.Aucun);
              (_a = this.listeCategories) === null || _a === void 0
                ? void 0
                : _a.add(aParams.categorie);
              break;
            }
            case ObjetFenetre_SelectionCategories.GenreSaisie.Modification: {
              const lCategorie =
                (_b = this.listeCategories) === null || _b === void 0
                  ? void 0
                  : _b.getElementParFiltre(
                      (aCategorie) =>
                        aCategorie.getNumero() ===
                        aParams.categorie.getNumero(),
                    );
              if (lCategorie) {
                lCategorie.setEtat(Enumere_Etat_1.EGenreEtat.Aucun);
              }
              break;
            }
            default:
              break;
          }
          if (lResultSaisie && 'listeCategorie' in lResultSaisie) {
            this.listeCategories = lResultSaisie.listeCategorie;
          }
        } finally {
          this._saisieEnCours = false;
        }
        (_c = this.liste) === null || _c === void 0
          ? void 0
          : _c.actualiser(true);
      }
      afficherListe(aListe = this.listeCategories) {
        if (!this.liste || !aListe) {
          return;
        }
        this.liste.setDonnees(
          new DonneesListe_EditionCateries(aListe, {
            avecCB: this.options.avecMultiSelection,
            callbackEdition: this.editerCategorie.bind(this),
            callbackSuppression: this.supprimerCategorie.bind(this),
          }),
        );
      }
      async supprimerCategorie(aCategorie) {
        aCategorie.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
        await this.saisie({
          genreSaisie: ObjetFenetre_SelectionCategories.GenreSaisie.Suppresion,
          categorie: aCategorie,
        });
      }
      editerCategorie(aCategorie) {
        this.ouvrirFenetreEditionCategorie(aCategorie, true);
      }
      avecBoutonCreation() {
        return true;
      }
      jsxModelListe() {
        return {
          pere: this,
          init: (aListe) => {
            this.initListe(aListe);
          },
          evenement: (aParams) => {
            switch (aParams.genreEvenement) {
              case Enumere_EvenementListe_1.EGenreEvenementListe.Creation:
                this.ouvrirFenetreEditionCategorie(this.initCategorie(), false);
                break;
              case Enumere_EvenementListe_1.EGenreEvenementListe.Edition:
                if (aParams.article) {
                  this.editerCategorie(aParams.article);
                }
                break;
              case Enumere_EvenementListe_1.EGenreEvenementListe
                .ModificationCBLigne:
                this.surModificationCBListe(aParams.article);
                break;
            }
          },
        };
      }
      initListe(aInstance) {
        this.liste = aInstance;
        aInstance.setOptionsListe({
          avecBoutonCreation: this.avecBoutonCreation(),
          skin: ObjetListe_1.ObjetListe.skin.flatDesign,
          ariaLabel: this.options.avecMultiSelection
            ? TradObjetFenetre_SelectionCategories.selectionnerCategories
            : TradObjetFenetre_SelectionCategories.editerCategorie,
        });
      }
      surModificationCBListe(aArticle) {}
      initCategorie() {
        const lCategorie = ObjetElement_1.ObjetElement.create({
          Libelle: '',
          couleur: Categorie_1.Categorie.c_couleurParDefaultCategorie,
        });
        lCategorie.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
        return lCategorie;
      }
      async ouvrirFenetreEditionCategorie(aCategorie, aEstModification = true) {
        if (!this.listeCategories) {
          return;
        }
        const lFenetre = new ObjetFenetre_EditionCategorie({ pere: this });
        lFenetre.initAfficher({
          initialiser: (aFenetre) => {
            aFenetre.setOptionsFenetre({
              titre: aEstModification
                ? TradObjetFenetre_SelectionCategories.modifierCategorie
                : TradObjetFenetre_SelectionCategories.creerCategorie,
            });
          },
          options: {},
        });
        const lResult = await lFenetre.setDonnees(
          aCategorie,
          this.listeCategories,
        );
        if (
          (lResult === null || lResult === void 0
            ? void 0
            : lResult.numeroBouton) === 1
        ) {
          if (lResult.categorie) {
            this.saisie({
              genreSaisie: aEstModification
                ? ObjetFenetre_SelectionCategories.GenreSaisie.Modification
                : ObjetFenetre_SelectionCategories.GenreSaisie.Creation,
              categorie: lResult.categorie,
            });
          }
        }
      }
      surValidation(aNumeroBouton) {
        if (this._saisieEnCours) {
          return;
        }
        super.surValidation(aNumeroBouton);
      }
      composeContenu() {
        if (!this.listeCategories) {
          return '';
        }
        return IE.jsx.str(IEHtml_Liste_1.Liste, {
          class: [Divers_css_1.SD.fullHeight],
          model: this.jsxModelListe.bind(this),
        });
      }
    }
    exports.ObjetFenetre_SelectionCategories = ObjetFenetre_SelectionCategories;
    (function (ObjetFenetre_SelectionCategories) {
      let GenreSaisie;
      (function (GenreSaisie) {
        GenreSaisie[(GenreSaisie['Creation'] = 0)] = 'Creation';
        GenreSaisie[(GenreSaisie['Modification'] = 1)] = 'Modification';
        GenreSaisie[(GenreSaisie['Suppresion'] = 2)] = 'Suppresion';
      })(
        (GenreSaisie =
          ObjetFenetre_SelectionCategories.GenreSaisie ||
          (ObjetFenetre_SelectionCategories.GenreSaisie = {})),
      );
    })(
      ObjetFenetre_SelectionCategories ||
        (exports.ObjetFenetre_SelectionCategories =
          ObjetFenetre_SelectionCategories =
            {}),
    );
    class DonneesListe_EditionCateries extends ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign {
      constructor(aDonnees, aParams) {
        super(aDonnees);
        this.setOptions({
          avecCB: aParams.avecCB,
          avecCocheCBSurLigne: true,
          avecBoutonActionLigne: true,
        });
        this.callbackEdition = aParams.callbackEdition;
        this.callbackSuppression = aParams.callbackSuppression;
      }
      getVisible(aDonnee) {
        if (aDonnee.getEtat() === Enumere_Etat_1.EGenreEtat.Suppression) {
          return false;
        }
        return true;
      }
      getZoneGauche({ article }) {
        return IE.jsx.str(
          Categorie_1.CarreCategorie,
          { couleur: article.couleur },
          article.abr,
        );
      }
      remplirMenuContextuel(aParams) {
        aParams.menuContextuel.add(
          GlossaireCP_1.TradGlossaireCP.Modifier,
          true,
          () => {
            this.callbackEdition(aParams.article);
          },
          {
            iconeSvg: IE.jsx.str(IconeSvgPencil_1.IconeSvgPencil, null),
            ariaHasPopup: 'dialog',
          },
        );
        aParams.menuContextuel.add(
          GlossaireCP_1.TradGlossaireCP.Supprimer,
          true,
          () => {
            this.callbackSuppression(aParams.article);
          },
          { iconeSvg: IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null) },
        );
        return true;
      }
    }
    class ObjetFenetre_EditionCategorie extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          largeur: 300,
          listeBoutons: [
            'Annuler',
            'Valider',
          ],
          addParametresValidation: this.addParametresValidation.bind(this),
        });
        this._indexsUnique = new ObjetIndexsUnique_1.ObjetIndexsUnique();
        this._indexsUnique.ajouterIndex(['Libelle']);
      }
      jsxModelInputLibelle() {
        return {
          getValue: () => {
            var _a;
            var _b;
            return (_b =
              (_a = this.categorie) === null || _a === void 0
                ? void 0
                : _a.getLibelle()) !== null && _b !== void 0
              ? _b
              : '';
          },
          setValue: (aValue) => {
            if (this.categorie) {
              this.categorie.setLibelle(aValue);
              this.categorie.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
            }
          },
        };
      }
      jsxModelInputAbbr() {
        return {
          getValue: () => {
            var _a;
            var _b;
            return (_b =
              (_a = this.categorie) === null || _a === void 0
                ? void 0
                : _a.abr) !== null && _b !== void 0
              ? _b
              : '';
          },
          setValue: (aValue) => {
            if (this.categorie) {
              this.categorie.abr = aValue;
              this.categorie.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
            }
          },
        };
      }
      jsxGetHtmlCouleur(aCategorie) {
        return IE.jsx.str(Categorie_1.CarreCategorie, {
          couleur: aCategorie.couleur,
        });
      }
      ouvrirFenetreSelectionCouleur(aCategorie) {
        const lFenetreChoixCouleur =
          new ObjetFenetre_SelecteurCouleur_1.ObjetFenetre_SelecteurCouleur({
            pere: this,
            evenement: (aGenreBouton, aCouleur) => {
              if (aGenreBouton === 1) {
                if (aCategorie.couleur !== aCouleur) {
                  aCategorie.couleur = aCouleur;
                  aCategorie.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
                }
              }
            },
          });
        lFenetreChoixCouleur.initAfficher({
          initialiser: () => {},
          options: {},
        });
        lFenetreChoixCouleur.setDonnees(aCategorie.couleur);
      }
      composeContenu() {
        if (!this.categorie) {
          return '';
        }
        const lStyle = { minWidth: '5rem' };
        const lIdNom = GUID_1.GUID.getId();
        const lIdAbr = GUID_1.GUID.getId();
        const lIdCou = GUID_1.GUID.getId();
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            'div',
            { class: [Divers_css_1.SD.fieldContain] },
            IE.jsx.str(
              'label',
              { for: lIdNom, style: lStyle },
              TradObjetFenetre_SelectionCategories.nom,
            ),
            IE.jsx.str('input', {
              id: lIdNom,
              type: 'text',
              class: [Divers_css_1.SD.fullWidth],
              ie_model: this.jsxModelInputLibelle.bind(this),
              maxlength: '1000',
            }),
          ),
          IE.jsx.str(
            'div',
            { class: [Divers_css_1.SD.fieldContain] },
            IE.jsx.str(
              'label',
              { for: lIdAbr, style: lStyle },
              TradObjetFenetre_SelectionCategories.abreviation,
            ),
            IE.jsx.str('input', {
              id: lIdAbr,
              type: 'text',
              class: [Divers_css_1.SD.fullWidth],
              ie_model: this.jsxModelInputAbbr.bind(this),
              maxlength: '1',
            }),
          ),
          IE.jsx.str(
            'div',
            { class: [Divers_css_1.SD.fieldContain] },
            IE.jsx.str(
              'label',
              { id: lIdCou, style: lStyle },
              TradObjetFenetre_SelectionCategories.couleur,
            ),
            IE.jsx.str('div', {
              role: 'button',
              'aria-labelledby': lIdCou,
              'aria-haspopup': 'dialog',
              class: [
                Form_components_css_1.SFormComponents.likeInput,
                Form_components_css_1.SFormComponents.asColorPicker,
              ],
              ie_eventmap: {
                validation: this.ouvrirFenetreSelectionCouleur.bind(
                  this,
                  this.categorie,
                ),
              },
              tabindex: '0',
              ie_html: this.jsxGetHtmlCouleur.bind(this, this.categorie),
            }),
          ),
        );
      }
      async setDonnees(aCategorie, aListeCategories) {
        this.categorie = aCategorie;
        this.listeCategories = aListeCategories;
        return await this.afficher(this.composeContenu());
      }
      surValidation(aNumeroBouton) {
        if (aNumeroBouton !== 1) {
          this.fermer();
          return;
        }
        if (!this.categorie.getLibelle()) {
          (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message: TradObjetFenetre_SelectionCategories.libelleObligatoire,
            });
          return;
        }
        let lTestLibelleExisteDeja = false;
        if (this.listeCategories) {
          this.listeCategories.parcourir((aCategorie) => {
            if (
              !aCategorie.egalParNumeroEtGenre(
                this.categorie.getNumero(),
                this.categorie.getGenre(),
              ) &&
              aCategorie.getEtat() !== Enumere_Etat_1.EGenreEtat.Suppression
            ) {
              if (this._indexsUnique.estDoublon(this.categorie, aCategorie)) {
                lTestLibelleExisteDeja = true;
                return false;
              }
            }
          });
        }
        if (lTestLibelleExisteDeja) {
          (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message: GlossaireListe_1.TradGlossaireListe.doublonNom.format([
                this.categorie.getLibelle(),
              ]),
            });
          return;
        }
        super.surValidation(aNumeroBouton);
      }
      addParametresValidation(aParams) {
        this.categorie.setLibelle(this.categorie.getLibelle().trim());
        return { categorie: this.categorie };
      }
    }
    const TradObjetFenetre_SelectionCategories =
      ObjetTraduction_2.TraductionsModule.getModule(
        'ObjetFenetre_SelectionCategories',
        {
          selectionnerCategories: '',
          editerCategorie: '',
          creerCategorie: '',
          modifierCategorie: '',
          nom: '',
          abreviation: '',
          couleur: '',
          libelleObligatoire: '',
        },
      );
    exports.TradObjetFenetre_SelectionCategories =
      TradObjetFenetre_SelectionCategories;
  },
  fn: 'objetfenetre_selectioncategories.js',
});