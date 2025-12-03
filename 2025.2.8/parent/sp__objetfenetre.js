IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports._ObjetFenetre = void 0;
    const ObjetInterface_1 = require('ObjetInterface');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const Enumere_StructureAffichage_1 = require('Enumere_StructureAffichage');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const MethodesTableau_1 = require('MethodesTableau');
    const GestionnaireModale_1 = require('GestionnaireModale');
    const Invocateur_1 = require('Invocateur');
    const ToucheClavier_1 = require('ToucheClavier');
    class _ObjetFenetre extends ObjetInterface_1.ObjetInterface {
      constructor(aParams, ...aSuiteDeprecated) {
        super(aParams, ...aSuiteDeprecated);
        this._structureBoutons = [];
        this.__surDestructionApresFermeture_ = false;
        this.optionsFenetre = {
          roleWAI: 'dialog',
          listeBoutonsInvisibles: [],
          opaciteVoileModale: GestionnaireModale_1.OpaciteVoileBloquant.default,
        };
        this.EnAffichage = false;
        this.promise = null;
        this._promiseResolve = null;
        this.NomFenetre = this.Nom + '_Fenetre';
        this.idFenetreContenu = this.Nom + '_FenetreContenu';
        this.IdTitre = this.Nom + '_Titre';
        this.IdTitreImage = this.IdTitre + '_image';
        this.IdContenu = this.Nom + '_Contenu';
        this.IdPremierElement = this.NomFenetre;
        this.GenreStructure =
          Enumere_StructureAffichage_1.EStructureAffichage.Autre;
        this.optionsInterne = {
          closeStart: () => {},
          closeEnd: async () => {},
        };
      }
      setOptionsFenetre(aOptions) {
        Object.assign(this.optionsFenetre, aOptions);
        this._structureBoutons = null;
        this.$refreshSelf();
        return this;
      }
      _getOptionsFenetre() {
        return this.optionsFenetre;
      }
      setBoutonActif(I, AActif) {
        if (this.optionsFenetre.listeBoutonsInactifs) {
          this.optionsFenetre.listeBoutonsInactifs[I] = !AActif;
          this.$refreshSelf();
        }
      }
      composeBoutons() {
        return '';
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          $off: function () {
            return aInstance.estControleurOff();
          },
          listeBoutons() {
            if (!aInstance._structureBoutons) {
              aInstance._structureBoutons = [];
              const T = aInstance._structureBoutons;
              aInstance.optionsFenetre.listeBoutons.forEach(
                (aElement, aIndex) => {
                  const lElement = {
                    index: null,
                    libelle: null,
                    theme: null,
                    sansFermeture: null,
                  };
                  if (typeof aElement === 'string') {
                    lElement.libelle = aElement;
                  } else {
                    Object.assign(lElement, aElement);
                  }
                  if (aElement) {
                    lElement.index = aIndex;
                    lElement.theme = lElement.theme
                      ? lElement.theme
                      : lElement.libelle ===
                          'Valider'
                        ? Type_ThemeBouton_1.TypeThemeBouton.primaire
                        : Type_ThemeBouton_1.TypeThemeBouton.secondaire;
                    lElement.sansFermeture = lElement.sansFermeture
                      ? lElement.sansFermeture
                      : false;
                    T.push(lElement);
                  }
                },
              );
            }
            return aInstance._structureBoutons || [];
          },
          fenetreBtn: {
            event(aBoutonRepeat) {
              aInstance.surValidation(aBoutonRepeat.element.index);
            },
            getLibelle(aBoutonRepeat) {
              return aBoutonRepeat.element.libelle;
            },
            getDisabled(aBoutonRepeat) {
              if (aBoutonRepeat.element.getDisabled) {
                return aBoutonRepeat.element.getDisabled();
              }
              return (
                aInstance.optionsFenetre.listeBoutonsInactifs &&
                aInstance.optionsFenetre.listeBoutonsInactifs[
                  aBoutonRepeat.element.index
                ] === true
              );
            },
            getOptions(aBoutonRepeat) {
              if (
                MethodesObjet_1.MethodesObjet.isObject(
                  aBoutonRepeat.element.options,
                )
              ) {
                return aBoutonRepeat.element.options;
              }
            },
          },
        });
      }
      composeContenu() {
        return '';
      }
      jsxNodeCreationNodeFenetre(aNode) {
        const lInstance = this;
        Invocateur_1.Invocateur.desabonner(
          Invocateur_1.ObjetInvocateur.events.fermerFenetres,
          this,
        );
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.fermerFenetres,
          (aForcer) => {
            if (
              aForcer ||
              this.optionsFenetre.avecAbonnementFermetureFenetreGenerale
            ) {
              this.fermer();
            }
          },
        );
        $(aNode).on({
          keyup(aEvent) {
            if (aEvent.which === ToucheClavier_1.ToucheClavier.Echap) {
              lInstance.eventSurCroixFermeture();
            }
          },
          pointerdown() {
            if (!IE.estMobile) {
              GestionnaireModale_1.GestionnaireModale.enPremierPlan(
                lInstance.getNom(),
              );
            }
          },
        });
      }
      focusSurPremierElement() {
        if (ObjetHtml_1.GHtml.elementExiste(this.IdTitre)) {
          ObjetHtml_1.GHtml.setFocus(this.IdTitre);
          return;
        }
        this.focusSurPemierOuDernierElement(false);
      }
      focusSurPemierOuDernierElement(aDernierElementFocus) {
        var _a;
        const lTab = ObjetHtml_1.GHtml.getElementsFocusablesDElement(
          this.NomFenetre,
          { avecTabindexNegatif: false },
        );
        if (lTab.length > 0) {
          const lNode = aDernierElementFocus ? lTab[lTab.length - 1] : lTab[0];
          (_a = lNode === null || lNode === void 0 ? void 0 : lNode.focus) ===
            null || _a === void 0
            ? void 0
            : _a.call(lNode);
          let lFocusReussi = true;
          try {
            lFocusReussi = !!lNode && document.activeElement === lNode;
          } catch (e) {}
          if (lFocusReussi) {
            return;
          }
        }
        if (ObjetHtml_1.GHtml.elementExiste(this.IdTitre)) {
          ObjetHtml_1.GHtml.setFocus(this.IdTitre);
        } else {
        }
      }
      jsxNodeFocusSurPremierOuDernierElement(aPrecedent, aNode) {
        $(aNode).on('focus', () => {
          this.focusSurPemierOuDernierElement(aPrecedent);
        });
      }
      getBoutonNumero(aNumeroBouton) {
        let lBouton = {};
        if (this.optionsFenetre.listeBoutons) {
          const lBoutonFenetre =
            this.optionsFenetre.listeBoutons[aNumeroBouton];
          if (typeof lBoutonFenetre === 'string') {
            lBouton = { libelle: lBoutonFenetre };
          } else {
            lBouton = lBoutonFenetre;
          }
        }
        return lBouton || { annuler: true };
      }
      setBoutonVisible(I, aVisible) {
        this.optionsFenetre.listeBoutonsInvisibles[I] = !aVisible;
        this.$refreshSelf();
      }
      getParametresValidation(aNumeroBouton) {
        const lParametres = {
          instance: this,
          bouton: this.getBoutonNumero(aNumeroBouton),
          numeroBouton: aNumeroBouton,
        };
        if (
          MethodesObjet_1.MethodesObjet.isFunction(
            this.optionsFenetre.addParametresValidation,
          )
        ) {
          Object.assign(
            lParametres,
            this.optionsFenetre.addParametresValidation.call(
              this.Pere,
              lParametres,
            ),
          );
        }
        return lParametres;
      }
      promiseResolve(aParams) {
        if (this._promiseResolve) {
          this._promiseResolve(aParams);
          this._promiseResolve = null;
        }
      }
      surValidation(ANumeroBouton) {
        const lParams = this.getParametresValidation(ANumeroBouton);
        this.promiseResolve(lParams);
        if (this.optionsFenetre.surValiderAvantFermer) {
          this.optionsFenetre.surValiderAvantFermer.call(this.Pere, lParams);
        }
        if (
          !lParams ||
          !lParams.bouton ||
          typeof lParams.bouton !== 'object' ||
          !lParams.bouton.sansFermeture
        ) {
          this.fermer();
        }
        if (this.optionsFenetre.callback) {
          this.optionsFenetre.callback.call(this.Pere, ANumeroBouton, lParams);
        }
        this.callback.appel(ANumeroBouton, lParams);
      }
      async fermer(aSurInteractionUtilisateur) {
        if (!this.estAffiche()) {
          return Promise.resolve();
        }
        this.optionsInterne.closeStart();
        try {
          if (this._focusPrecedent && $(this._focusPrecedent).length === 1) {
            if (ObjetHtml_1.GHtml.focusEstDansElement(this.Nom)) {
              $(this._focusPrecedent).focus();
            }
            this._focusPrecedent = null;
          }
        } catch (e) {}
        this.EnAffichage = false;
        if (this.surFermer) {
          this.surFermer();
        }
        if (
          MethodesObjet_1.MethodesObjet.isFunction(
            this.optionsFenetre.callbackFermer,
          )
        ) {
          this.optionsFenetre.callbackFermer();
        }
        if (
          MethodesObjet_1.MethodesObjet.isFunction(
            this.optionsFenetre.callbackApresFermer,
          )
        ) {
          this.optionsFenetre.callbackApresFermer();
        }
        this.promiseResolve({ surFermer: true });
        this.$refresh();
        const lResultPromise = this.optionsInterne.closeEnd();
        const lFunc = () => {
          ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
          if (this.destructionSurFermeture && !this.__enCoursDeDestruction) {
            this.__surDestructionApresFermeture_ = true;
            this.free();
          }
        };
        if (lResultPromise && lResultPromise.then) {
          return lResultPromise.then(lFunc);
        }
        lFunc();
        return Promise.resolve();
      }
      async afficher(...aParams) {
        return;
      }
      surAfficher() {}
      actualiser() {}
      surFermer() {}
      estAffiche() {
        return this.EnAffichage === true;
      }
      jsxModeleBoutonCroixFermeture() {
        return {
          event: () => {
            this.eventSurCroixFermeture();
          },
        };
      }
      eventSurCroixFermeture() {
        this.surValidation(this.optionsFenetre.indiceCroixFermeture);
      }
      setBoutonFocus(aVal, avecDecalageFocus) {
        let lIndice = aVal;
        if (MethodesObjet_1.MethodesObjet.isObject(aVal)) {
          lIndice = MethodesTableau_1.MethodesTableau.indexOfMask(
            this.optionsFenetre.listeBoutons,
            aVal,
          );
        }
        if (lIndice >= 0) {
          ObjetHtml_1.GHtml.setFocus(
            this._getIdBoutons(lIndice),
            true,
            avecDecalageFocus,
          );
        }
        return this;
      }
      composeBas() {
        return this.optionsFenetre.htmlFooter || '';
      }
      positionnerFenetre(aParams) {
        return this;
      }
      existeCoordonnees() {
        return false;
      }
      setCoordonnees() {}
      positionnerSousId(aId) {}
      surFixerTaille() {}
      _getIdBoutons(aIndice) {
        return this.Nom + '_btns_' + aIndice;
      }
      setBoutonLibelle(I, aLibelle) {}
      debutRetaillage() {}
      finRetaillage() {}
      getHeightMaxIdSelonEcran(aId) {
        return 0;
      }
      estObjetGraphiqueFenetre() {
        return true;
      }
      construireBouton(aBoutonRepeat, aMargin) {
        return '';
      }
      getDragFenetre() {
        return null;
      }
      estControleurOff() {
        return !this.EnAffichage;
      }
      initAfficher(aParametres) {
        var _a;
        this.destructionSurFermeture =
          (_a =
            aParametres === null || aParametres === void 0
              ? void 0
              : aParametres.destructionSurFermeture) !== null && _a !== void 0
            ? _a
            : true;
        IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(
          this.getNom(),
          this.getZIndex ? this.getZIndex() : 1100,
        );
        $('#' + this.getNom().escapeJQ()).on('destroyed', () => {
          var _a;
          (_a =
            aParametres === null || aParametres === void 0
              ? void 0
              : aParametres.surFermeture) === null || _a === void 0
            ? void 0
            : _a.call(aParametres, this);
          if (this.destructionSurFermeture) {
            this.free();
          }
        });
        if (
          aParametres === null || aParametres === void 0
            ? void 0
            : aParametres.options
        ) {
          this.setOptionsFenetre(aParametres.options);
        }
        if (
          (aParametres === null || aParametres === void 0
            ? void 0
            : aParametres.initialiser) !== false
        ) {
          if (
            MethodesObjet_1.MethodesObjet.isFunction(
              aParametres === null || aParametres === void 0
                ? void 0
                : aParametres.initialiser,
            )
          ) {
            aParametres.initialiser.call(this.Pere, this);
          }
          this.initialiser();
        }
        return this;
      }
      static creerInstanceFenetre(aConstructeur, aParametres, aOptionsFenetre) {
        return new aConstructeur(aParametres).initAfficher({
          initialiser:
            aParametres === null || aParametres === void 0
              ? void 0
              : aParametres.initialiser,
          destructionSurFermeture:
            aParametres === null || aParametres === void 0
              ? void 0
              : aParametres.destructionSurFermeture,
          options: aOptionsFenetre,
        });
      }
      static creerInstance() {
        throw new Error('creerInstance incorrect');
      }
    }
    exports._ObjetFenetre = _ObjetFenetre;
  },
  fn: '_objetfenetre.js',
});