IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetSaisie = void 0;
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const ControleSaisieEvenement_1 = require('@cp/script/ControleSaisieEvenement');
    const Enumere_EvenementObjetSaisie_1 = require('@cp/script/Enumere/Enumere_EvenementObjetSaisie');
    const Enumere_Event_1 = require('@cp/script/Enumere/Enumere_Event');
    const Enumere_Saisie_1 = require('@cp/script/Enumere/Enumere_Saisie');
    const ObjetCelluleBouton_1 = require('@cp/script/ObjetsGraphiques/ObjetCelluleBouton');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const ObjetSaisie_css_1 = require('@cp/Produit/Css/ObjetSaisie.css');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const IEHtml_DraggableDroppable_1 = require('@cp/Produit/Script/IEHtml.DraggableDroppable');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Form_components_css_1 = require('@cp/Produit/Css/Form-components.css');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const IconeSvgAngle_left_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAngle_left');
    const IconeSvgAngle_right_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAngle_right');
    class ObjetSaisie extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
        this.nomContFenetreDeroulant = this.Nom + '_cont_fenetre';
        this.Survolee = -1;
        this.Selection = -1;
        this.Timer = null;
        this._listeSelections = new ObjetListeElements_1.ObjetListeElements();
        this.NomListe = this.Nom + '_Liste';
        this.idContenu = this.Nom + '_Contenu';
        this.idContenuScroll = this.Nom + '_ContenuScroll';
        this.idWrapperBouton = this.Nom + '_wrapperbouton';
        this.NomLabel = this.Nom + '_Label';
        this.idBtnValidation = this.Nom + '_btnValidation';
        this.idBloc = this.Nom + '_bloc';
        this.idLibelleHaut = this.Nom + '_lib_haut';
        this.cache = { editionEnCours: false };
        this.init();
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.resizeNavigateur,
          () => {
            if (this.listeDeroulee) {
              this.fermerListe(false);
            }
          },
          this,
        );
        if (IE.estMobile) {
          Invocateur_1.Invocateur.abonner(
            `surAffichageFenetre`,
            () => {
              if (this.listeDeroulee) {
                this.fermerListe(false);
              }
            },
            this,
          );
        }
      }
      init() {
        this._initParseur();
        this.bouton = new ObjetCelluleBouton_1.ObjetCelluleBouton({
          pere: this,
          evenement: this._surEvenementBouton,
          nomObjet: 'bouton',
        });
        this.IdPremierElement = this.bouton.NomEdit;
        this.initialiserOptionsObjetSaisie();
        this.decalageTopOuvertureInverse = 15;
      }
      detruireInstances() {
        $('#' + this.idContenu.escapeJQ()).stop(true, true);
        clearTimeout(this.cache.timerMAJ);
        clearTimeout(this._timerInitParseur);
        clearTimeout(this._timerEditionRecherche);
        $(`#${this.nomContFenetreDeroulant.escapeJQ()}`).remove();
      }
      static calculTailleMaxLibelle(aLibelle, aEstGras) {
        return (
          Math.ceil(
            ObjetChaine_1.GChaine.getLongueurChaineDansDiv(
              aLibelle,
              '1.2rem',
              aEstGras,
            ),
          ) +
          4 +
          1
        );
      }
      initialiserOptionsObjetSaisie() {
        this._options = {
          mode: Enumere_Saisie_1.EGenreSaisie.Combo,
          multiSelection: false,
          avecElementObligatoire: false,
          avecDesignMobile: false,
          avecOuvertureDeroulantPopup: IE.estMobile,
          longueur: 125,
          hauteur: null,
          hauteurLigneDefault: 18,
          largeurListe: null,
          estLargeurAuto: false,
          getTailleElementlargeurAuto: function (aElement, aEstGras) {
            var _a;
            return ObjetSaisie.calculTailleMaxLibelle(
              (_a = aElement.getLibelle()) !== null && _a !== void 0 ? _a : '',
              aEstGras,
            );
          },
          largeurAutoMin: 40,
          largeurAutoMax: 500,
          avecBouton: true,
          iconeGauche: '',
          deroulerListeSeulementSiPlusieursElements: true,
          initAutoSelectionAvecUnElement: true,
          controlerNbrElements: false,
          avecTriListeElements: false,
          nbrLignes: 15,
          classTexte: '',
          classBackground: undefined,
          placeHolder: '',
          desactiverAideSaisie: false,
          couleurFondDeroulant: null,
          celluleAvecTexteHtml: false,
          getContenuCellule: null,
          texteEdit: '',
          styleTexteEdit: '',
          classTexteEdit: '',
          largeurTexteEdit: 0,
          getClassElement: null,
          getContenuElement: null,
          getEstElementNonSelectionnable: null,
          getElementSelectionnableParPrecSuiv: null,
          getEnteteListe: null,
          getPiedListe: null,
          libelleHaut: '',
          avecEventSurFermetureListe: false,
          avecFondSelectionSurSurvol: true,
          avecGrasSurSurvol: false,
          modifierContenuCelluleSurSelection: true,
          avecReservationPlaceBarreScroll: false,
          desactiverScrollInfini: false,
          nbBlocsScrollInfini: 2,
          roleWAI: 'combobox',
          labelWAICellule: '',
          ariaLabelledBy: '',
          ariaDescribedBy: '',
          required: false,
          avecBoutonsPrecSuiv: false,
          avecBoutonsPrecSuivVisiblesInactifs: true,
          avecBoutonsPrecSuiv_boucle: false,
          optionsBouton: {},
          surValidation: null,
          getInfosElementCB: null,
          libelleElementSiVide: GlossaireCP_1.TradGlossaireCP.Aucun,
          getLibelleCelluleMultiSelection: function (aListeSelections) {
            return aListeSelections
              ? aListeSelections.getTableauLibelles().join(', ')
              : '';
          },
          getLibelleBoutonValider: function (aNombreSelectionnes, aNombre) {
            return aNombre > 0
              ? ObjetChaine_1.GChaine.format('%s (%d / %d)', [
                  'Valider',
                  aNombreSelectionnes,
                  aNombre,
                ])
              : 'Valider';
          },
          surEditionRecherche: null,
          nbCarMinRecherche: 2,
          delaiSurEditionRecherche: 500,
          rechercheTout: ['', '*'],
          avecSurlignageSuggestion: true,
          couleurSurlignageSuggestion: (0, AccessApp_1.getApp)().getCouleur()
            .surlignageTexte,
          avecSurlignageElement: null,
          callbackToutCalcule: null,
          dureeAnimationDeploiement: 150,
        };
      }
      setOptionsObjetSaisie(aOptions) {
        $.extend(this._options, aOptions);
        const lEstListeOuCombo = [Enumere_Saisie_1.EGenreSaisie.Combo].includes(
          this._options.mode,
        );
        const lAvecSaisieRechercheDynamique =
          this._avecSaisieRechercheDynamique();
        const lLabelledBy =
          this._options.ariaLabelledBy ||
          (this._options.texteEdit ? this.NomLabel : undefined) ||
          (this._options.libelleHaut ? this.idLibelleHaut : undefined);
        const lOptionsBouton = $.extend(
          {
            estSaisissable: !lEstListeOuCombo,
            avecZoneSaisie: !lEstListeOuCombo,
            genreBouton: this._options.avecBouton
              ? lEstListeOuCombo
                ? ObjetCelluleBouton_1.EGenreBoutonCellule.Fleche
                : ObjetCelluleBouton_1.EGenreBoutonCellule.Loupe
              : ObjetCelluleBouton_1.EGenreBoutonCellule.Aucun,
            largeur:
              this._options.avecDesignMobile && IE.estMobile
                ? '100%'
                : this._options.longueur,
            hauteur: this._options.hauteur || undefined,
            iconeGauche: this._options.avecBoutonsPrecSuiv
              ? ''
              : this._options.iconeGauche,
            classTexte: this._options.classTexte,
            classBackground: this._options.classBackground,
            placeHolder: this._options.placeHolder,
            desactiverAideSaisie:
              this._options.desactiverAideSaisie ||
              this._options.mode ===
                Enumere_Saisie_1.EGenreSaisie.SaisieRecherche,
            roleWAI: this._options.roleWAI || undefined,
            ariaLabel: this._options.labelWAICellule || undefined,
            popupWAI: 'listbox',
            ariaLabelledBy: lLabelledBy,
            ariaDescribedBy: this._options.ariaDescribedBy || '',
            required: this._options.required || undefined,
            setValue:
              this._options.mode ===
              Enumere_Saisie_1.EGenreSaisie.SaisieRecherche
                ? this._modificationSaisieBoutonRecherche.bind(this)
                : null,
            editAvecTrim: lAvecSaisieRechercheDynamique,
            selectionSaisieSurFocus: lAvecSaisieRechercheDynamique,
          },
          aOptions.optionsBouton,
        );
        this.bouton.setOptionsObjetCelluleBouton(lOptionsBouton);
        this.$refresh();
        return this;
      }
      chercherIndiceSelectionSelonSens(
        aIndice,
        aPrecedent,
        aEnBoucle,
        aMethodeSelec,
      ) {
        if (!this.ListeElements || !this.ListeElements.count) {
          return -1;
        }
        let lIndice = aIndice;
        const lNbr = this.ListeElements.count();
        if (lIndice !== null && lIndice !== undefined) {
          while (
            lIndice < lNbr &&
            lIndice >= 0 &&
            (!this._estSelectionnable(this.ListeElements.get(lIndice)) ||
              (aMethodeSelec &&
                aMethodeSelec({ element: this.ListeElements.get(lIndice) }) !==
                  true))
          ) {
            lIndice += aPrecedent ? -1 : 1;
          }
        } else {
          lIndice = -1;
        }
        if (lIndice >= lNbr) {
          lIndice = -1;
        }
        if (aEnBoucle && lIndice === -1) {
          return this.chercherIndiceSelectionSelonSens(
            aPrecedent ? lNbr - 1 : 0,
            aPrecedent,
            false,
            aMethodeSelec,
          );
        }
        return lIndice;
      }
      setParametres(
        AMode,
        ALongueur,
        AAvecBouton,
        aAvecStyleSite,
        aControlerNbrElements,
        aHauteur,
        aClassTexte,
      ) {
        this.setOptionsObjetSaisie({
          mode: AMode,
          longueur:
            ALongueur === null || ALongueur === undefined
              ? undefined
              : ALongueur,
          hauteur: aHauteur,
          avecBouton:
            AAvecBouton === null || AAvecBouton === undefined
              ? undefined
              : AAvecBouton,
          controlerNbrElements: aControlerNbrElements,
          classTexte: aClassTexte,
        });
        IE.log.addLog(
          'ObjetSaisie.setParametres deprecated!',
          null,
          IE.log.genre.Deprecated,
        );
      }
      setLabel(aTexte, aClass, aStyle) {
        this._options.texteEdit = aTexte;
        $.extend(this._options, {
          classTexteEdit: aClass ? aClass : undefined,
          styleTexteEdit: aStyle ? aStyle : undefined,
        });
        const lElementLabel = ObjetHtml_1.GHtml.getElement(this.NomLabel);
        if (ObjetHtml_1.GHtml.estElement(lElementLabel)) {
          ObjetHtml_1.GHtml.setHtml(
            lElementLabel,
            ObjetChaine_1.GChaine.insecable(this._options.texteEdit) + '&nbsp;',
          );
          if (this._options.classTexteEdit) {
            ObjetHtml_1.GHtml.setClass(
              lElementLabel,
              this._options.classTexteEdit,
            );
          }
          if (this._options.styleTexteEdit) {
            ObjetStyle_1.GStyle.setStyle(
              lElementLabel,
              this._options.styleTexteEdit,
            );
          }
        }
      }
      recupererDonnees() {
        this.setOptionsObjetSaisie({});
        this.bouton.initialiser();
      }
      construireAffichage() {
        if (ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
          return this.construireHtml();
        }
        return;
      }
      construireHtml() {
        $('#' + this.idContenu.escapeJQ()).stop(true, true);
        const lOuvertureMobile = this._estOuvertureMobile();
        const lDesignMobile = this._options.avecDesignMobile && IE.estMobile;
        const lCssBtn = lDesignMobile ? '' : 'icon btnImageIcon';
        const lJSXifLibelleHaut = () => !!this._options.libelleHaut;
        const lJSXhtmlLibelleHaut = () => this._options.libelleHaut;
        const lJSXgetClassesDynamiques = () => {
          const lClasses = [];
          if (!this.getActif()) {
            lClasses.push('input-wrapper-disabled');
          }
          return lClasses.join(' ');
        };
        const lJSXListeEventOut = () => {
          return {
            nodesExclus: [ObjetHtml_1.GHtml.getElement(this.bouton.getNom())],
            callback: () => {
              if (this.listeDeroulee && this.activerEventOut) {
                this._declencherFermetureListe();
              }
            },
          };
        };
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str('label', {
            class: 'ie-titre-petit display-block m-bottom',
            ie_if: lJSXifLibelleHaut,
            ie_html: lJSXhtmlLibelleHaut,
            id: this.idLibelleHaut,
          }),
          IE.jsx.str(
            'div',
            {
              role: 'presentation',
              class: [
                'input-wrapper',
                ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie,
                this._options.longueur === '100%' || lDesignMobile
                  ? ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie_100P
                  : '',
              ],
              ie_class: lJSXgetClassesDynamiques,
              id: this.idWrapperBouton,
            },
            () => {
              if (this._options.texteEdit && this._options.texteEdit.trim()) {
                const lLabel = IE.jsx.str(
                  'label',
                  {
                    id: this.NomLabel,
                    class: MethodesObjet_1.MethodesObjet.isString(
                      this._options.classTexteEdit,
                    )
                      ? this._options.classTexteEdit
                      : ' label-default',
                    style: this._options.styleTexteEdit || false,
                    for:
                      this._options.labelWAICellule ||
                      [Enumere_Saisie_1.EGenreSaisie.Combo].includes(
                        this._options.mode,
                      )
                        ? false
                        : this.bouton.NomEdit,
                  },
                  ObjetChaine_1.GChaine.insecable(this._options.texteEdit) +
                    '&nbsp;',
                );
                if (this._options.largeurTexteEdit) {
                  return IE.jsx.str(
                    'div',
                    {
                      style: ObjetStyle_1.GStyle.composeWidth(
                        this._options.largeurTexteEdit,
                      ),
                    },
                    lLabel,
                  );
                }
                return lLabel;
              }
            },
            this._options.avecBoutonsPrecSuiv
              ? IE.jsx.str(
                  IEHtml_BtnImage_1.BtnIcon,
                  {
                    class: [lCssBtn],
                    ie_model: this.jsxModelBtnSuivPrec.bind(this, true),
                    ie_style: this.jsxGetStyleBtnSuivPrec.bind(this, true),
                    title: GlossaireCP_1.TradGlossaireCP.Precedent,
                    'aria-label':
                      (this._options.labelWAICellule
                        ? this._options.labelWAICellule + ' - '
                        : '') + GlossaireCP_1.TradGlossaireCP.Precedent,
                  },
                  IE.jsx.str(IconeSvgAngle_left_1.IconeSvgAngle_left, null),
                )
              : '',
            IE.jsx.str(
              'div',
              { class: ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie_cont },
              IE.jsx.str('div', {
                id: this.bouton.getNom(),
                ie_node: this.jsxGetNodeBouton.bind(this),
                class:
                  this._options.avecBoutonsPrecSuiv && IE.estMobile
                    ? 'btn-prev-suiv text-center'
                    : '',
              }),
              () => {
                const lHtmlList = IE.jsx.str('div', {
                  id: this.NomListe,
                  ie_eventout: lJSXListeEventOut,
                  class: [
                    ObjetSaisie_css_1.SObjetSaisie.deroulantConteneurShowHide,
                    lOuvertureMobile
                      ? ObjetSaisie_css_1.SObjetSaisie.openMobile
                      : '',
                    ObjetNavigateur_1.Navigateur.isTactile ? ' is-tactile' : '',
                  ],
                  style: { display: 'none' },
                });
                if (lOuvertureMobile) {
                  const lNodeConteneur = document.querySelector(
                    `#${this.nomContFenetreDeroulant.escapeJQ()}`,
                  );
                  if (!lNodeConteneur) {
                    IEHtml_1.IEHtml.injectHTMLParams({
                      element:
                        IEZoneFenetre_1.ZoneFenetre.getElementZoneFenetre(),
                      html: IE.jsx.str(
                        'div',
                        {
                          id: this.nomContFenetreDeroulant,
                          class: [ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie],
                        },
                        lHtmlList,
                      ),
                      instance: this,
                    });
                  } else {
                    ObjetHtml_1.GHtml.setHtml(lNodeConteneur, lHtmlList, {
                      instance: this,
                      ignorerScroll: true,
                    });
                  }
                  return '';
                }
                return lHtmlList;
              },
            ),
            this._options.avecBoutonsPrecSuiv
              ? IE.jsx.str(
                  IEHtml_BtnImage_1.BtnIcon,
                  {
                    class: [lCssBtn],
                    ie_model: this.jsxModelBtnSuivPrec.bind(this, false),
                    ie_style: this.jsxGetStyleBtnSuivPrec.bind(this, false),
                    title: GlossaireCP_1.TradGlossaireCP.Suivant,
                    'aria-label':
                      (this._options.labelWAICellule
                        ? this._options.labelWAICellule + ' - '
                        : '') + GlossaireCP_1.TradGlossaireCP.Suivant,
                  },
                  IE.jsx.str(IconeSvgAngle_right_1.IconeSvgAngle_right, null),
                )
              : '',
          ),
        );
      }
      jsxGetNodeBouton(aNode) {
        $(aNode).on({
          swipeleft: () => {
            if (
              this._options.avecBoutonsPrecSuiv &&
              this._boutonPrecSuivOK(false)
            ) {
              this._surPrecedentSuivant(false);
            }
          },
          swiperight: () => {
            if (
              this._options.avecBoutonsPrecSuiv &&
              this._boutonPrecSuivOK(true)
            ) {
              this._surPrecedentSuivant(true);
            }
          },
        });
      }
      jsxModelBtnSuivPrec(aPrecedent) {
        return {
          event: () => {
            this._surPrecedentSuivant(aPrecedent);
          },
          getDisabled: () => {
            return !this._boutonPrecSuivOK(aPrecedent);
          },
        };
      }
      jsxGetStyleBtnSuivPrec(aPrecedent) {
        if (this._options.avecBoutonsPrecSuivVisiblesInactifs) {
          return;
        }
        return {
          visibility: this._boutonPrecSuivOK(aPrecedent) ? '' : 'hidden',
        };
      }
      setSelection(ASelection) {
        const lIndice = this.chercherIndiceSelectionSelonSens(
          ASelection,
          false,
        );
        if (lIndice >= 0) {
          if (this._options.multiSelection) {
            this._selectionnerUnElementEnMultiSelection(lIndice);
          }
          this.surValidation(false, lIndice);
        }
      }
      surSelection(aParams) {
        if (
          (this.getNbElementsVisible() > 0 ||
            !this._options.deroulerListeSeulementSiPlusieursElements) &&
          !this.actualiserListe
        ) {
          this._deroulerListe();
        } else {
          this.surValidation(false, undefined, aParams);
        }
      }
      deroulerListe() {
        this._deroulerListe();
      }
      surValidation(aInteractionUtilisateur, ASelection, aParams) {
        this.InteractionUtilisateur = aInteractionUtilisateur;
        this.cache.surDemandeSaisieRechercheTout = false;
        const lParams = Object.assign(
          {
            saisieRecherche: false,
            validationMultiSelection: false,
            surBoutonCellule: false,
          },
          aParams,
        );
        const lEstMultiSelection = this._options.multiSelection;
        if (
          !this.ListeElements ||
          !this.ListeElements.get(ASelection) ||
          this._estSelectionnable(this.ListeElements.get(ASelection))
        ) {
          this.Selection = ASelection;
          this.fermerListe(true);
          this.$refresh();
          clearTimeout(this._timerEditionRecherche);
          let LValeur;
          const lEditionEnCours = this.cache.editionEnCours;
          this.cache.editionEnCours = false;
          if (lEstMultiSelection) {
            if (!this._listeSelections) {
              this._listeSelections =
                new ObjetListeElements_1.ObjetListeElements();
            }
            this._listeSelections.vider();
            const lListeIndices = [];
            if (this.ListeElements) {
              this.ListeElements.parcourir((D, aIndex) => {
                const lInfos = this._infosElementsCbs
                  ? this._infosElementsCbs[aIndex]
                  : null;
                if (lInfos && ASelection === aIndex && lInfos.estCumul) {
                  this.Selection = -1;
                }
                if (lInfos && !lInfos.estCumul && lInfos.selectionne) {
                  this._listeSelections.addElement(D);
                  lListeIndices.push(aIndex);
                }
              });
            }
            let lMAJContenu =
              lParams.validationMultiSelection ||
              this.Selection >= 0 ||
              this._listeSelections.count() > 0;
            if (
              lParams.surBoutonCellule &&
              this._options.mode ===
                Enumere_Saisie_1.EGenreSaisie.SaisieRecherche &&
              !lEditionEnCours
            ) {
              LValeur = '';
              lMAJContenu = false;
              this.cache.surDemandeSaisieRechercheTout = true;
            } else if (
              lParams.saisieRecherche ||
              lEditionEnCours ||
              (this._options.mode ===
                Enumere_Saisie_1.EGenreSaisie.SaisieRecherche &&
                this._listeSelections.count() === 0 &&
                !lParams.validationMultiSelection)
            ) {
              LValeur = this.getContenu();
            } else {
              LValeur = this._options.getLibelleCelluleMultiSelection(
                this._listeSelections,
              );
            }
            if (
              this._options.modifierContenuCelluleSurSelection &&
              lMAJContenu
            ) {
              this.setContenu(LValeur);
            }
            const lIdDescendant =
              this.Nom + '_' + lListeIndices.join(',' + this.Nom + '_');
            this._actualiserWAICombo(lIdDescendant);
          } else if (
            ASelection >= -1 &&
            !lParams.validationMultiSelection &&
            !lParams.saisieRecherche
          ) {
            const lElement =
              ASelection >= 0 ? this.ListeElements.get(this.Selection) : null;
            LValeur = lElement ? lElement.getLibelle() : '';
            if (this._options.modifierContenuCelluleSurSelection) {
              if (this._options.getContenuCellule) {
                this._appliquerGetContenuCellule(lElement);
              } else if (
                this._options.celluleAvecTexteHtml &&
                lElement &&
                lElement.libelleHtml
              ) {
                this.bouton.setLibelleHtml(lElement.libelleHtml);
              } else {
                this.setContenu(LValeur);
              }
              const lIdDescendant = this.Nom + '_' + ASelection;
              this._actualiserWAICombo(lIdDescendant);
            }
          } else {
            if (
              lParams.surBoutonCellule &&
              this._options.mode ===
                Enumere_Saisie_1.EGenreSaisie.SaisieRecherche &&
              !lEditionEnCours
            ) {
              LValeur = '';
              this.cache.surDemandeSaisieRechercheTout = true;
            } else {
              LValeur = [Enumere_Saisie_1.EGenreSaisie.Combo].includes(
                this._options.mode,
              )
                ? '*'
                : this.getContenu();
            }
          }
          if (
            (ASelection >= 0 || lEstMultiSelection) &&
            this.ControleNavigation &&
            ControleSaisieEvenement_1.ControleSaisieEvenement
          ) {
            (0, ControleSaisieEvenement_1.ControleSaisieEvenement)(
              this._retourSurNavigation.bind(
                this,
                Object.assign(
                  { valeur: LValeur, retourSaisieAnnule: true },
                  lParams,
                ),
              ),
            );
          } else {
            this._retourSurNavigation(
              Object.assign(
                { valeur: LValeur, retourSaisieAnnule: false },
                lParams,
              ),
            );
          }
        }
      }
      _remplirListe() {
        const lHeightScroll = this.cache.heightScroll;
        this.cache = {
          scrollInfiniActif: false,
          blocs: [],
          nbVisibles: 0,
          toutCalcule: false,
          heightScroll: lHeightScroll,
          largeurCellule:
            this._options.avecDesignMobile && IE.estMobile
              ? '100%'
              : this._options.longueur,
          editionEnCours: false,
          surDemandeSaisieRechercheTout:
            this.cache.surDemandeSaisieRechercheTout,
        };
        if (!this.ListeElements) {
          if (this._options.multiSelection) {
            this._infosElementsCbs = {};
          }
          return;
        }
        this._trierElements();
        let lBlocs = { debut: 0, fin: 0, lignesVisibles: [] };
        let lNb = 0;
        let lTailleMaxLibelle = 0;
        this.cache.blocs.push(lBlocs);
        this.ListeElements.parcourir((aElement, aIndex) => {
          if (lNb >= this._options.nbrLignes) {
            lBlocs = { debut: aIndex, fin: aIndex, lignesVisibles: [] };
            this.cache.blocs.push(lBlocs);
            lNb = 0;
          }
          lBlocs.debut = Math.min(lBlocs.debut, aIndex);
          lBlocs.fin = Math.max(lBlocs.debut, aIndex);
          if (aElement.existe() && aElement.Visible !== false) {
            lNb += 1;
            lBlocs.lignesVisibles.push(aIndex);
            this.cache.nbVisibles += 1;
            if (
              this._options.estLargeurAuto &&
              MethodesObjet_1.MethodesObjet.isFunction(
                this._options.getTailleElementlargeurAuto,
              )
            ) {
              lTailleMaxLibelle =
                Math.max(
                  lTailleMaxLibelle,
                  this._options.getTailleElementlargeurAuto(
                    aElement,
                    this._options.classTexte === 'Gras',
                  ),
                ) + (this._options.multiSelection ? 10 : 0);
            }
          }
        });
        if (
          this._options.estLargeurAuto &&
          lTailleMaxLibelle &&
          MethodesObjet_1.MethodesObjet.isNumeric(this.cache.largeurCellule)
        ) {
          this.cache.largeurCellule = Math.min(
            Math.max(lTailleMaxLibelle, this._options.largeurAutoMin),
            this._options.largeurAutoMax,
          );
          this.bouton.setLargeur(this.cache.largeurCellule);
        }
        this.cache.scrollInfiniActif =
          !this._options.desactiverScrollInfini &&
          this.cache.blocs.length > 2 * this._options.nbBlocsScrollInfini + 2 &&
          this.cache.nbVisibles > 100;
        this.cache.avecCBMultiSelection = false;
        if (this._options.multiSelection) {
          if (!this._infosElementsCbs) {
            this._infosElementsCbs = {};
          }
          this.ListeElements.parcourir((aElement, aIndex) => {
            if (aElement.existe() && aElement.Visible !== false) {
              this._initInfosElementsCBs(aIndex);
              if (this._infosElementsCbs[aIndex].avecCB) {
                this.cache.avecCBMultiSelection =
                  this._infosElementsCbs[aIndex].avecCB;
              }
            }
          });
        }
        if (
          this.cache.nbVisibles === 0 &&
          this._options.deroulerListeSeulementSiPlusieursElements
        ) {
          return;
        }
        if ($('#' + this.Nom.escapeJQ()).length === 0) {
          return;
        }
        let lLargeurListe = this._getLargeurListe(),
          lCompteurLigne = 0,
          lNumeroDerniereLigne = 0,
          lNumeroLigneReference = -1,
          lEstMultiSelection = this._options.multiSelection,
          lAvecScroll = false;
        this.cache.recherchesSurlignage = null;
        this.cache.avecSurlignage =
          this._options.avecSurlignageSuggestion &&
          this._options.mode === Enumere_Saisie_1.EGenreSaisie.SaisieRecherche;
        const lEstOuvertureMobile = this._estOuvertureMobile();
        if (!lEstOuvertureMobile) {
          ObjetStyle_1.GStyle.setStyles(this.NomListe, {
            '--width-deroulant': `${lLargeurListe}px`,
          });
        }
        if (lEstMultiSelection && !this._infosElementsCbs) {
          this._infosElementsCbs = {};
        }
        if (
          this.cache.avecSurlignage &&
          !this.cache.surDemandeSaisieRechercheTout
        ) {
          const lRecherche = this.bouton.getLibelle().trim();
          if (
            lRecherche &&
            lRecherche.length > 0 &&
            (!this._options.rechercheTout ||
              !this._options.rechercheTout.includes(lRecherche))
          ) {
            this.cache.recherchesSurlignage = lRecherche.split(' ');
          }
        }
        if (!this._avecDeroulerListe()) {
          return;
        }
        let lEnteteListe = null;
        if (
          MethodesObjet_1.MethodesObjet.isFunction(this._options.getEnteteListe)
        ) {
          lEnteteListe = this._options.getEnteteListe(this);
        }
        let lPiedListe = null;
        if (
          MethodesObjet_1.MethodesObjet.isFunction(this._options.getPiedListe)
        ) {
          lPiedListe = this._options.getPiedListe(this);
        }
        if (lLargeurListe > 0) {
          lLargeurListe = lLargeurListe - 1;
        }
        this.ListeElements.parcourir((aElement, aIndex) => {
          if (aElement.existe() && aElement.Visible !== false) {
            lNumeroDerniereLigne = aIndex;
            lCompteurLigne += 1;
            if (lCompteurLigne === this._options.nbrLignes) {
              lNumeroLigneReference = aIndex;
            }
            if (lCompteurLigne > this._options.nbrLignes) {
              lAvecScroll = true;
            }
          }
        });
        this.cache.largeurContenu =
          lLargeurListe -
          (ObjetNavigateur_1.Navigateur.getLargeurBarreDeScroll &&
          (lAvecScroll || this._options.avecReservationPlaceBarreScroll)
            ? ObjetNavigateur_1.Navigateur.getLargeurBarreDeScroll() - 2
            : 0);
        const lEstContenuVide = this.cache.nbVisibles === 0;
        if (ObjetHtml_1.GHtml.elementExiste(this.NomListe)) {
          const lHtmlEnteteListe = lEnteteListe ? lEnteteListe.getHtml() : '';
          const lHtmlPiedListe = lPiedListe ? lPiedListe.getHtml() : '';
          const lHtmlCombo = IE.jsx.str(
            'div',
            {
              role: 'presentation',
              style: {
                backgroundColor:
                  this._options.couleurFondDeroulant || undefined,
              },
            },
            lHtmlEnteteListe
              ? IE.jsx.str('div', {
                  class:
                    ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie_entete_liste,
                })
              : '',
            IE.jsx.str(
              'div',
              {
                id: this.idContenu,
                tabindex: '-1',
                role: 'presentation',
                ie_node: this.jsxGetNodeContenu.bind(this),
                class: [
                  IEHtml_DraggableDroppable_1.SIEHtmlDraggableDroppableSelecteur
                    .ieDraggableHandleCancel,
                  ObjetSaisie_css_1.SObjetSaisie.deroulantScroll,
                ],
              },
              IE.jsx.str(
                'ul',
                {
                  class: [
                    'liste-as-options',
                    this.cache.avecCBMultiSelection ? ' multi-selections ' : '',
                  ],
                  id: this.idContenuScroll,
                  role: 'listbox',
                  'aria-multiselectable': this.cache.avecCBMultiSelection
                    ? 'true'
                    : false,
                },
                (aTab) => {
                  if (lEstContenuVide) {
                    aTab.push(
                      IE.jsx.str(
                        'li',
                        {
                          ie_eventmap: {
                            name: 'fermerLigneVide',
                            validation: () => this.fermerListe(),
                          },
                        },
                        IE.jsx.str(
                          'div',
                          { class: 'as-li ObjetSaisie_contenuvide' },
                          'La liste ne contient aucune donnée.',
                        ),
                      ),
                    );
                  } else {
                    if (this.cache.scrollInfiniActif) {
                      for (
                        let i = 0;
                        i <= this._options.nbBlocsScrollInfini;
                        i++
                      ) {
                        aTab.push(this._composeBloc(this.cache.blocs[i], i));
                      }
                    } else {
                      this.cache.blocs.forEach((aBloc, aIndex) => {
                        aTab.push(this._composeBloc(aBloc, aIndex));
                      });
                    }
                  }
                },
              ),
            ),
            !!lHtmlPiedListe
              ? IE.jsx.str('div', {
                  class: ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie_pied_liste,
                })
              : '',
            lEstMultiSelection
              ? IE.jsx.str(
                  'div',
                  { class: 'validate-conteneur' },
                  IE.jsx.str(IEHtml_Bouton_1.Bouton, {
                    ie_model: this.jsxBtnModelValidationCB.bind(this),
                    ie_node: this.jsxGetNodeBtnValidationCB.bind(this),
                    ie_html: this.jsxGetHtmlBtnValidationCB.bind(this),
                    class: Type_ThemeBouton_1.TypeThemeBouton.primaire,
                    id: this.idBtnValidation,
                  }),
                )
              : '',
          );
          ObjetHtml_1.GHtml.setDisplay(this.NomListe, true);
          ObjetHtml_1.GHtml.setHtml(this.NomListe, lHtmlCombo, {
            instance: this,
            ignorerScroll: true,
          });
          if (!!lHtmlEnteteListe) {
            $(
              `#${this.NomListe.escapeJQ()} .${ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie_entete_liste}`,
            ).ieHtml(lHtmlEnteteListe);
          }
          if (!!lHtmlPiedListe) {
            $(
              `#${this.NomListe.escapeJQ()} .${ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie_pied_liste}`,
            ).ieHtml(lHtmlPiedListe);
          }
          if (this.cache.scrollInfiniActif) {
            let lTop = 0,
              lNbLignesVisibles = 0,
              lAvecBlocInvisible = false;
            this.cache.blocs.forEach((aBloc, aNumeroBloc) => {
              if (aBloc.dessine) {
                this._majBloc(aNumeroBloc);
                lTop += aBloc.height;
                lNbLignesVisibles += aBloc.lignesVisibles.length;
              } else {
                lAvecBlocInvisible = true;
              }
            });
            if (!this.cache.heightScroll) {
              this.cache.heightScroll = lTop;
              if (lAvecBlocInvisible) {
                this.cache.heightScroll =
                  (lTop / lNbLignesVisibles) * this.cache.nbVisibles;
              }
            }
            $('#' + this.idContenuScroll.escapeJQ()).height(
              this.cache.heightScroll,
            );
            this._majBlocsTacheFond();
          }
          const lEventMap = {
            'focusin.saisie': this._surFocusLigne,
            'click.saisie': this._surClickListe,
            'mousemove.saisie': this._surMouseMoveListe,
          };
          $('#' + this.NomListe.escapeJQ())
            .off(lEventMap)
            .on(lEventMap, '.' + lClasseJQ, { instance: this });
          const lEventMap2 = {
            focusin: this._surFocusLigne,
            keydown: this._surKeyDownListe,
            keyup: this._surKeyUpListe,
          };
          $('#' + this.NomListe.escapeJQ())
            .off(lEventMap2)
            .on(lEventMap2, { instance: this });
        }
        if (lNumeroLigneReference < 0) {
          lNumeroLigneReference = lNumeroDerniereLigne;
        }
        this._ouvertureInverse = false;
        const lJLigne = lEstContenuVide
          ? $('#' + this.Nom.escapeJQ() + ' .ObjetSaisie_contenuvide')
          : $('#' + this.Nom.escapeJQ() + '_' + lNumeroLigneReference);
        if (lJLigne.length > 0) {
          this.hauteurContenu =
            lJLigne.position().top + lJLigne.outerHeight(true);
        } else {
          this.hauteurContenu = 0;
        }
        if (lEstMultiSelection) {
          this.hauteurContenu += 1;
        }
        const lJBouton = $('#' + this.bouton.getNom().escapeJQ());
        let lPositionBouton = lJBouton.position();
        if (!lPositionBouton) {
          lPositionBouton = { top: 0, left: 0 };
        }
        const lRectRef = ObjetPosition_1.GPosition.getClientRect(
          IE.estMobile ? this.Nom : lJBouton.get(0),
        );
        const lJListe = $('#' + this.NomListe.escapeJQ());
        const lDecalageOmbre = 1;
        const lCorrectionHauteur =
          lDecalageOmbre +
          10 +
          (lEstMultiSelection
            ? $(
                '#' + this.NomListe.escapeJQ() + ' .validate-conteneur',
              ).outerHeight()
            : 0) +
          (lEnteteListe
            ? $(
                `#${this.NomListe.escapeJQ()} .${ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie_entete_liste}`,
              ).outerHeight() + ObjetPosition_1.GPosition.remToPixels(0.4 * 2)
            : 0) +
          (lPiedListe
            ? $(
                `#${this.NomListe.escapeJQ()} .${ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie_pied_liste}`,
              ).outerHeight() + ObjetPosition_1.GPosition.remToPixels(0.4 * 2)
            : 0);
        const lHauteurVersBas =
          ObjetNavigateur_1.Navigateur.ecranH -
          lRectRef.outerBottom -
          lCorrectionHauteur;
        const lHauteurVersHaut = lRectRef.top - lCorrectionHauteur;
        this.decalageTopOuvertureInverse = lDecalageOmbre + 5;
        if (
          this.hauteurContenu > lHauteurVersBas &&
          lHauteurVersHaut > 20 &&
          (lHauteurVersHaut * 2) / 3 > lHauteurVersBas
        ) {
          this._ouvertureInverse = true;
          this.hauteurContenu = Math.min(this.hauteurContenu, lHauteurVersHaut);
          if (lJListe.length) {
            const lTop = lRectRef.top - this.decalageTopOuvertureInverse;
            lJListe.css({ top: lTop + 'px' });
          }
        } else {
          if (lJListe.length) {
            lJListe.css({
              top:
                lRectRef.outerBottom +
                lDecalageOmbre +
                (lEstOuvertureMobile ? 2 : 0) +
                'px',
            });
          }
          this.hauteurContenu = Math.min(this.hauteurContenu, lHauteurVersBas);
        }
        if (!lEstOuvertureMobile) {
          let lLeft = lRectRef.left;
          if (this._options.largeurListe) {
            const lWidthListe = $('#' + this.NomListe.escapeJQ()).width();
            if (
              lRectRef.left + lWidthListe >
              ObjetNavigateur_1.Navigateur.clientL
            ) {
              lLeft = Math.max(
                2,
                Math.min(
                  lRectRef.left + lRectRef.width - lWidthListe,
                  lRectRef.left -
                    (lRectRef.left +
                      lWidthListe -
                      ObjetNavigateur_1.Navigateur.clientL) -
                    2,
                ),
              );
            }
          }
          lJListe.css({ left: lLeft });
        }
        if (this.cache.largeurCellule === 0) {
          this.cache.largeurCellule = ObjetHtml_1.GHtml.getElement(
            this.NomListe,
          ).scrollWidth;
          this.bouton.setLargeur(this.cache.largeurCellule);
          ObjetStyle_1.GStyle.setStyles(this.NomListe, {
            '--width-deroulant': `${this.cache.largeurCellule}px`,
          });
        }
        ObjetHtml_1.GHtml.setDisplay(this.NomListe, false);
      }
      jsxBtnModelValidationCB() {
        return {
          event: (aEvent) => {
            aEvent.stopPropagation();
            this.surValidation(true, -1, { validationMultiSelection: true });
          },
          getDisabled: () => {
            var _a;
            let lDisabled = false;
            if (this._options.avecElementObligatoire) {
              let lNbSelectionnes = 0;
              (_a = this.ListeElements) === null || _a === void 0
                ? void 0
                : _a.parcourir((aElement, aIndex) => {
                    const lInfosCBs = this._infosElementsCbs
                      ? this._infosElementsCbs[aIndex]
                      : null;
                    if (
                      lInfosCBs &&
                      !lInfosCBs.estCumul &&
                      this._estSelectionnable(aElement)
                    ) {
                      if (lInfosCBs.selectionne) {
                        lNbSelectionnes += 1;
                      }
                    }
                  });
              lDisabled = lNbSelectionnes === 0;
            }
            return lDisabled;
          },
        };
      }
      jsxGetNodeContenu(aNode) {
        const lInstance = this;
        $(aNode).on({
          keydown(aEvent) {
            if (
              !aEvent.altKey &&
              (aEvent.which === ToucheClavier_1.ToucheClavier.FlecheBas ||
                aEvent.which === ToucheClavier_1.ToucheClavier.FlecheHaut)
            ) {
              aEvent.preventDefault();
            }
          },
          wheel(aEvent) {
            if (this.scrollHeight > this.clientHeight) {
              aEvent.originalEvent.__wheelSurCombo__ = true;
            }
          },
        });
        if (this.cache.scrollInfiniActif) {
          $(aNode).on('scroll', function () {
            lInstance._majBlocsDeTop(this.scrollTop);
          });
        }
      }
      jsxGetNodeBtnValidationCB(aNode) {
        $(aNode).on({
          mouseover: () => {
            this._survolBoutonMultiSelection();
          },
        });
      }
      jsxGetHtmlBtnValidationCB() {
        let lNb = 0;
        let lNbSelectionnes = 0;
        if (this.ListeElements) {
          this.ListeElements.parcourir((aElement, aIndex) => {
            const lInfosCBs = this._infosElementsCbs
              ? this._infosElementsCbs[aIndex]
              : null;
            if (
              lInfosCBs &&
              !lInfosCBs.estCumul &&
              this._estSelectionnable(aElement)
            ) {
              lNb += 1;
              if (lInfosCBs.selectionne) {
                lNbSelectionnes += 1;
              }
            }
          });
        }
        return this._options.getLibelleBoutonValider(lNbSelectionnes, lNb);
      }
      getNbElementsVisible() {
        let lResult = 0;
        if (this.ListeElements) {
          for (let i = 0, lNb = this.ListeElements.count(); i < lNb; i++) {
            const lElement = this.ListeElements.get(i);
            if (lElement.existe() && lElement.Visible !== false) {
              lResult++;
            }
          }
        }
        return lResult;
      }
      fermerListe(AAvecFocus) {
        if (this.Selection >= 0) {
          this._majBlocsDeLigne(this.Selection, true);
        }
        if (this.listeDeroulee) {
          this._arreterFermetureListe();
          clearTimeout(this._timerEditionRecherche);
          clearTimeout(this.cache.timerMAJ);
          this._selectionLigne(this.Survolee, false);
          this.Survolee = -1;
          if (AAvecFocus) {
            this.setFocus();
          }
          this.listeDeroulee = false;
          this.activerEventOut = false;
          this.bouton.setOptionsObjetCelluleBouton({
            ariaExpanded: false,
            ariaControls: '',
          });
          const lElementListe = ObjetHtml_1.GHtml.getElement(this.NomListe);
          const lElementContenuListe = ObjetHtml_1.GHtml.getElement(
            this.idContenu,
          );
          if (
            ObjetHtml_1.GHtml.estElement(lElementListe) &&
            ObjetHtml_1.GHtml.estElement(lElementContenuListe)
          ) {
            lElementContenuListe.classList.add(
              ObjetSaisie_css_1.SObjetSaisie.deroulantOpeningClossing,
            );
            lElementListe.classList.add(ObjetSaisie_css_1.SObjetSaisie.closing);
            const lObjet = this;
            if (this._ouvertureInverse) {
              $(lElementListe).css({
                top: -lObjet.hauteurContenu - this.decalageTopOuvertureInverse,
              });
            }
            $(lElementContenuListe)
              .css({ height: lObjet.hauteurContenu })
              .animate(
                { height: 0 },
                {
                  duration: this._options.dureeAnimationDeploiement,
                  step: this._ouvertureInverse
                    ? this._etapeFermetureInverse.bind(this, $(lElementListe))
                    : undefined,
                },
              )
              .queue(function () {
                lObjet._eventAnimationFermetureFin();
                $(this).dequeue();
              });
          }
        }
      }
      surLigne(ASurvolee, aSansFocusLigne) {
        if (!this.listeDeroulee || !this.ListeElements) {
          return;
        }
        const lAvecFocus = aSansFocusLigne !== true;
        if (
          this.Survolee !== ASurvolee &&
          MethodesObjet_1.MethodesObjet.isNumber(ASurvolee)
        ) {
          this._majBlocsDeLigne(ASurvolee);
          const N = this.ListeElements.count() || 0;
          if (this._estSelectionnable(this.ListeElements.get(ASurvolee))) {
            if (this.Survolee > -1 && this.Survolee < N) {
              this._selectionLigne(this.Survolee, false);
            }
            this.Survolee = ASurvolee;
            this._selectionLigne(this.Survolee, true);
          }
          const lElementContenu = ObjetHtml_1.GHtml.getElement(this.idContenu);
          if (lElementContenu) {
            const lJContenuElement = $(
              '#' + this.Nom.escapeJQ() + '_' + this.Survolee,
            );
            if (lJContenuElement.length === 1) {
              if (this.Survolee === 0) {
                lElementContenu.scrollTop = 0;
              } else {
                ObjetPosition_1.GPosition.scrollToElement(
                  lJContenuElement.get(0),
                  lElementContenu,
                );
              }
            }
          }
          if (lAvecFocus) {
            ObjetHtml_1.GHtml.setFocus(this.Nom + '_' + this.Survolee);
          }
        } else if (ASurvolee === -1) {
          if (lAvecFocus) {
            this._majBlocsDeLigne(ASurvolee);
            ObjetHtml_1.GHtml.setFocus(this.NomListe);
          }
        }
      }
      setDonneesObjetSaisie(aParams) {
        var _a, _b;
        const lParams = Object.assign(
          {
            liste: null,
            selection: null,
            deroulerListe: false,
            actualiserListe: false,
            ignorerSelectionAutomatiqueAvecUnElement: false,
            options: null,
          },
          aParams,
        );
        if (lParams.options) {
          this.setOptionsObjetSaisie(lParams.options);
        }
        if (this.listeDeroulee) {
          this.fermerListe(false);
        }
        clearTimeout(this.cache.timerMAJ);
        this.ListeElements = lParams.liste;
        this.actualiserListe = lParams.actualiserListe;
        this._trierElements();
        this.listeDeroulee = false;
        this.activerEventOut = false;
        this.cache.heightScroll = 0;
        let lAvecSelectionAutomatique = false;
        if (
          this._options.initAutoSelectionAvecUnElement &&
          !this._options.multiSelection &&
          !lParams.ignorerSelectionAutomatiqueAvecUnElement
        ) {
          lAvecSelectionAutomatique = this._gererCasUnSeulElement();
        }
        this._remplirListe();
        if (
          !lAvecSelectionAutomatique &&
          typeof lParams.selection === 'number'
        ) {
          this.setSelection(lParams.selection);
        }
        if (
          this._options.multiSelection &&
          lParams.selection instanceof ObjetListeElements_1.ObjetListeElements
        ) {
          this._initListeSelections(lParams.selection);
        }
        if (
          lParams.deroulerListe &&
          (this.getNbElementsVisible() > 1 ||
            !this._options.deroulerListeSeulementSiPlusieursElements)
        ) {
          this._deroulerListe(lParams.selection ? null : 0);
        }
      }
      setDonnees(AListeElements, ASelection, ADeroulerListe, AActualiserListe) {
        this.setDonneesObjetSaisie({
          liste: AListeElements,
          selection: ASelection,
          deroulerListe: ADeroulerListe,
          actualiserListe: AActualiserListe,
        });
      }
      setFocus() {
        this.bouton.setFocus();
        if (this._avecSaisieRechercheDynamique()) {
          setTimeout(() => {
            ObjetHtml_1.GHtml.setCursorAtEnd(this.bouton.NomEdit);
          }, 0);
        }
      }
      viderContenu() {
        this.setContenu('');
        this._actualiserWAICombo(null);
      }
      setContenu(AContenu) {
        var _a;
        let lLibelle = '';
        if (AContenu instanceof ObjetListeElements_1.ObjetListeElements) {
          lLibelle = this._options.getLibelleCelluleMultiSelection(AContenu);
        } else if (AContenu instanceof ObjetElement_1.ObjetElement) {
          lLibelle =
            (_a = AContenu.getLibelle()) !== null && _a !== void 0 ? _a : '';
        } else {
          lLibelle = AContenu || '';
        }
        this.bouton.setLibelle(lLibelle);
      }
      getContenu() {
        var _a;
        if (
          [Enumere_Saisie_1.EGenreSaisie.Combo].includes(this._options.mode) &&
          !this.estComboMultiSelection()
        ) {
          return this.Selection > -1 && this.ListeElements
            ? (_a = this.ListeElements.get(this.Selection).getLibelle()) !==
                null && _a !== void 0
              ? _a
              : ''
            : '';
        } else {
          return this.bouton.getLibelle();
        }
      }
      getListeElements() {
        return this.ListeElements;
      }
      estComboMultiSelection() {
        return this._options.multiSelection;
      }
      reset() {
        this.setDonnees(new ObjetListeElements_1.ObjetListeElements());
        this.viderContenu();
        this.Selection = -1;
      }
      getSelection() {
        return this.Selection > -1 && this.ListeElements
          ? this.ListeElements.get(this.Selection)
          : null;
      }
      initSelectionParNumeroEtGenre(ANumero, AGenre, AIndiceSiNonTrouve) {
        if (
          (ANumero === null || ANumero === undefined) &&
          (AGenre === null || AGenre === undefined)
        ) {
          ANumero = 0;
        }
        if (this.ListeElements) {
          let LIndice = this.ListeElements.getIndiceParNumeroEtGenre(
            ANumero,
            AGenre,
          );
          if (LIndice === null || LIndice === undefined) {
            LIndice = AIndiceSiNonTrouve;
          }
          this.initSelection(LIndice);
        }
      }
      initSelection(aSelection) {
        this.Selection = aSelection >= 0 ? aSelection : -1;
        if (
          this.ListeElements &&
          this.Selection >= 0 &&
          this._options.modifierContenuCelluleSurSelection
        ) {
          const lElement = this.ListeElements.get(this.Selection);
          if (lElement) {
            if (this._options.getContenuCellule) {
              this._appliquerGetContenuCellule(lElement);
            } else if (
              this._options.celluleAvecTexteHtml &&
              lElement.libelleHtml
            ) {
              this.bouton.setLibelleHtml(lElement.libelleHtml);
            } else {
              this.setContenu(lElement.getLibelle());
            }
            const lIdDescendant = this.Nom + '_' + this.Selection;
            this._actualiserWAICombo(lIdDescendant);
          }
        }
        this.$refresh();
      }
      setSelectionParNumeroEtGenre(ANumero, AGenre, AIndice) {
        let lResult = false;
        if (
          (ANumero === null || ANumero === undefined) &&
          (AGenre === null || AGenre === undefined)
        ) {
          ANumero = 0;
        }
        if (this.ListeElements) {
          let LIndice = this.ListeElements.getIndiceParNumeroEtGenre(
            ANumero,
            AGenre,
          );
          if (LIndice === null || LIndice === undefined) {
            LIndice = AIndice;
          }
          lResult = LIndice >= 0;
          this.setSelection(LIndice);
        }
        return lResult;
      }
      setSelectionParIndice(aIndice) {
        if (
          !this.ListeElements ||
          this.ListeElements.getNbrElementsExistes() <= 1
        ) {
          return;
        }
        this.setSelection(aIndice);
      }
      setSelectionParElement(aElement, aIndice) {
        if (aElement) {
          this.setSelectionParNumeroEtGenre(
            aElement.getNumero(),
            aElement.getGenre(),
            aIndice,
          );
        } else {
          this.setSelectionParNumeroEtGenre(null, null, aIndice);
        }
      }
      setListeSelections(aListeSelections) {
        let lResult = false;
        if (this._infosElementsCbs) {
          lResult = this._initListeSelections(aListeSelections);
        }
        this.surValidation(false, -1, { validationMultiSelection: true });
        return lResult;
      }
      surPrecedentSuivant(aPrecedent) {
        this._surPrecedentSuivant(aPrecedent);
      }
      setActif(AActif) {
        super.setActif(AActif);
        this.bouton.setActif(AActif);
        this.$refresh();
      }
      getDonneesPourHTMLCombo() {
        return { options: this._options, bouton: this.bouton };
      }
      _avecSaisieRechercheDynamique() {
        return (
          this._options.mode ===
            Enumere_Saisie_1.EGenreSaisie.SaisieRecherche &&
          !!this._options.surEditionRecherche
        );
      }
      _trierElements() {
        if (this._options.avecTriListeElements && this.ListeElements) {
          this.ListeElements.trier();
        }
      }
      _callbackRecherche(aParam) {
        const lParam = Object.assign({ liste: null }, aParam);
        if (lParam.liste && lParam.liste.count() > 0) {
          this.ListeElements = lParam.liste;
          this._trierElements();
          this.fermerListe(false);
          this._deroulerListe(0, false, true);
        } else {
          this.fermerListe(false);
        }
      }
      _modificationSaisieBoutonRecherche(aValue) {
        this.ListeElements = new ObjetListeElements_1.ObjetListeElements();
        this.Selection = -1;
        const lValue = (aValue + '').trim();
        clearTimeout(this._timerEditionRecherche);
        if (lValue.length < this._options.nbCarMinRecherche) {
          this.fermerListe(false);
        } else if (this._options.surEditionRecherche) {
          this.cache.editionEnCours = true;
          if (this._avecSaisieRechercheDynamique()) {
            if (this._options.delaiSurEditionRecherche >= 0) {
              this._timerEditionRecherche = setTimeout(() => {
                this.cache.surDemandeSaisieRechercheTout = false;
                this._options.surEditionRecherche(
                  lValue,
                  this._callbackRecherche.bind(this),
                );
              }, this._options.delaiSurEditionRecherche);
            } else {
              this.cache.surDemandeSaisieRechercheTout = false;
              this._options.surEditionRecherche(
                lValue,
                this._callbackRecherche.bind(this),
              );
            }
          }
        }
      }
      _boutonPrecSuivOK(aPrecedent) {
        const lListe = this.ListeElements;
        if (!lListe || !lListe.count || lListe.count() < 2) {
          return false;
        }
        if (!this.getActif()) {
          return false;
        }
        let lIndice = this.Selection;
        const lEnBoucle = this._options.avecBoutonsPrecSuiv_boucle;
        if (lIndice === -1) {
          if (aPrecedent) {
            lIndice = lEnBoucle ? 0 : -1;
          } else {
            return lListe.count() > 0;
          }
        }
        const lElement = lListe.get(lIndice);
        if (!lElement) {
          return false;
        }
        if (
          aPrecedent &&
          lListe.get(
            this.chercherIndiceSelectionSelonSens(
              lIndice - 1,
              true,
              lEnBoucle,
              this._options.getElementSelectionnableParPrecSuiv,
            ),
          )
        ) {
          return true;
        }
        if (
          !aPrecedent &&
          lListe.get(
            this.chercherIndiceSelectionSelonSens(
              lIndice + 1,
              false,
              lEnBoucle,
              this._options.getElementSelectionnableParPrecSuiv,
            ),
          )
        ) {
          return true;
        }
        return false;
      }
      _parcourirFilsDeCumul(aIndice, aFunction) {
        var _a;
        const lInfos = this._infosElementsCbs[aIndice];
        (_a = this.ListeElements) === null || _a === void 0
          ? void 0
          : _a.parcourir((D, aIndex) => {
              if (
                aIndice !== aIndex &&
                D.Visible !== false &&
                (!lInfos.estFilsCumul || lInfos.estFilsCumul(D))
              ) {
                aFunction.call(this, D, aIndex);
              }
            }, this);
      }
      _getSelectionElement(aInfos, aIndice) {
        const lResult = { selectionne: false, nbFils: 0, nbFilsSelectionne: 0 };
        if (!aInfos.estCumul) {
          lResult.selectionne = !!aInfos.selectionne;
        } else {
          this._parcourirFilsDeCumul(aIndice, (D, aIndex) => {
            lResult.nbFils += 1;
            const lInfosFils = this._infosElementsCbs[aIndex];
            if (lInfosFils && lInfosFils.selectionne) {
              lResult.nbFilsSelectionne += 1;
            }
          });
          lResult.selectionne =
            lResult.nbFilsSelectionne > 0 &&
            lResult.nbFilsSelectionne === lResult.nbFils;
        }
        return lResult;
      }
      getValueElementCB(aIndice) {
        const lInfos = this._infosElementsCbs
          ? this._infosElementsCbs[aIndice]
          : null;
        if (lInfos) {
          return this._getSelectionElement(lInfos, aIndice).selectionne;
        }
        return false;
      }
      _modifierSelectionElement(aIndice, aValue, aProfondeur) {
        const lInfos = this._infosElementsCbs
          ? this._infosElementsCbs[aIndice]
          : null;
        if (lInfos && this.ListeElements) {
          lInfos.selectionne = aValue;
          const lElementSource = this.ListeElements.get(aIndice),
            lProfondeur = aProfondeur || 0;
          if (lProfondeur > 1) {
            return;
          }
          this.ListeElements.parcourir((D, aIndex) => {
            const lInfosElement = this._infosElementsCbs
              ? this._infosElementsCbs[aIndex]
              : null;
            if (
              aIndice !== aIndex &&
              D.Visible !== false &&
              lInfosElement &&
              !lInfosElement.estCumul &&
              lInfosElement.setModifierSelection
            ) {
              const lResult = lInfosElement.setModifierSelection({
                elementCourantSelectionne: !!lInfosElement.selectionne,
                elementSource: lElementSource,
                elementSourceSelectionne: aValue,
              });
              if (
                (lResult === true && lInfosElement.selectionne !== true) ||
                (lResult === false && lInfosElement.selectionne !== false)
              ) {
                this._modifierSelectionElement(
                  aIndex,
                  lResult,
                  lProfondeur + 1,
                );
              }
            }
          }, this);
        }
      }
      _setValueElementCB(aIndice, aValue) {
        const lInfos = this._infosElementsCbs
          ? this._infosElementsCbs[aIndice]
          : null;
        if (lInfos) {
          if (lInfos.estCumul) {
            this._parcourirFilsDeCumul(aIndice, (D, aIndex) => {
              this._modifierSelectionElement(aIndex, aValue);
            });
          } else {
            this._modifierSelectionElement(aIndice, aValue);
          }
        }
      }
      _surPrecedentSuivant(aPrecedent) {
        let lIndice = this.Selection;
        const lListe = this.ListeElements;
        const lEnBoucle = this._options.avecBoutonsPrecSuiv_boucle;
        const lMethodeSelec = this._options.getElementSelectionnableParPrecSuiv;
        if (this._options.multiSelection && lListe) {
          lListe.parcourir((D, aIndex) => {
            const lInfos = this._infosElementsCbs
              ? this._infosElementsCbs[aIndex]
              : null;
            if (lInfos && !lInfos.estCumul && lInfos.selectionne) {
              lIndice = aIndex;
              if (aPrecedent) {
                return false;
              }
            }
          }, this);
        }
        if (lIndice === -1 && aPrecedent) {
          lIndice = lEnBoucle ? 0 : -1;
        }
        if (
          MethodesObjet_1.MethodesObjet.isNumber(lIndice) &&
          lListe &&
          lListe.get
        ) {
          if (aPrecedent && (lListe.get(lIndice - 1) || lEnBoucle)) {
            lIndice = this.chercherIndiceSelectionSelonSens(
              lIndice - 1,
              true,
              lEnBoucle,
              lMethodeSelec,
            );
          } else if (!aPrecedent && (lListe.get(lIndice + 1) || lEnBoucle)) {
            lIndice = this.chercherIndiceSelectionSelonSens(
              lIndice + 1,
              false,
              lEnBoucle,
              lMethodeSelec,
            );
          }
          if (lIndice >= 0) {
            if (this._options.multiSelection) {
              lListe.parcourir((D, aIndex) => {
                const lInfos = this._infosElementsCbs
                  ? this._infosElementsCbs[aIndex]
                  : null;
                if (lInfos && lInfos.selectionne) {
                  lInfos.selectionne = false;
                }
              }, this);
              this._setValueElementCB(lIndice, true);
              this.surValidation(true, lIndice);
            } else {
              this.surValidation(true, lIndice);
            }
          }
        }
      }
      _getLargeurListe() {
        return this._options.largeurListe
          ? this._options.largeurListe
          : ($('#' + this.bouton.getNom().escapeJQ()).width() || 0) - 2;
      }
      _surEvenementBouton(aGenreEvent, aEvent, aEvenementSurEdit) {
        var _a;
        switch (aGenreEvent) {
          case Enumere_Event_1.EEvent.SurClick: {
            if (aEvenementSurEdit) {
              if (
                [Enumere_Saisie_1.EGenreSaisie.Combo].includes(
                  this._options.mode,
                )
              ) {
                this.surSelection();
              }
            } else {
              this.surSelection({ surBoutonCellule: true });
            }
            break;
          }
          case Enumere_Event_1.EEvent.SurKeyUp: {
            switch (this._options.mode) {
              case Enumere_Saisie_1.EGenreSaisie.Combo: {
                if (!this.listeDeroulee) {
                  if (
                    aEvent.which === ToucheClavier_1.ToucheClavier.FlecheHaut ||
                    aEvent.which === ToucheClavier_1.ToucheClavier.FlecheBas
                  ) {
                    this._deroulerListe();
                  } else if (
                    aEvent.which === ToucheClavier_1.ToucheClavier.Debut
                  ) {
                    this._deroulerListe(0);
                  } else if (
                    aEvent.which === ToucheClavier_1.ToucheClavier.Fin
                  ) {
                    this._deroulerListe(this._getDerniereLingeSelectionnable());
                  }
                }
                if (
                  !this.listeDeroulee &&
                  !aEvent.altKey &&
                  (aEvent.which ===
                    ToucheClavier_1.ToucheClavier.FlecheGauche ||
                    aEvent.which ===
                      ToucheClavier_1.ToucheClavier.FlecheDroite) &&
                  !this._options.multiSelection &&
                  !((_a = ObjetHtml_1.GHtml.getElement(this.getNom())) ===
                    null || _a === void 0
                    ? void 0
                    : _a.closest('[role="toolbar"]'))
                ) {
                  this._surPrecedentSuivant(
                    aEvent.which === ToucheClavier_1.ToucheClavier.FlecheGauche,
                  );
                }
                break;
              }
              case Enumere_Saisie_1.EGenreSaisie.SaisieRecherche: {
                const lNbVisibles = this.getNbElementsVisible();
                if (
                  !this.listeDeroulee &&
                  aEvent.which === ToucheClavier_1.ToucheClavier.FlecheBas &&
                  (lNbVisibles > 0 ||
                    !this._options.deroulerListeSeulementSiPlusieursElements)
                ) {
                  this._deroulerListe(0, true);
                } else {
                  this._defilerFleches(aEvent);
                }
                if (
                  ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(
                    aEvent,
                  )
                ) {
                  if (
                    this.listeDeroulee &&
                    (lNbVisibles > 0 ||
                      !this._options.deroulerListeSeulementSiPlusieursElements)
                  ) {
                    this.surValidation(
                      true,
                      this.Selection >= 0 ? this.Selection : 0,
                    );
                  } else if (
                    (lNbVisibles > 0 ||
                      !this._options
                        .deroulerListeSeulementSiPlusieursElements) &&
                    !this.actualiserListe
                  ) {
                    if (
                      lNbVisibles > 1 ||
                      !this._options.deroulerListeSeulementSiPlusieursElements
                    ) {
                      this._deroulerListe(0, true);
                    } else {
                      this._gererCasUnSeulElement();
                    }
                  } else {
                    this.surValidation(false, -1, { saisieRecherche: true });
                  }
                }
                return;
              }
            }
            if (ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent)) {
              this.surSelection();
            }
            break;
          }
          case Enumere_Event_1.EEvent.SurFocusOut: {
            switch (this._options.mode) {
              case Enumere_Saisie_1.EGenreSaisie.SaisieRecherche:
                if (this._avecSaisieRechercheDynamique()) {
                  this._declencherFermetureListe();
                }
                break;
            }
            break;
          }
        }
      }
      _appliquerGetContenuCellule(aElement) {
        if (!aElement) {
          this.setContenu('');
          return;
        }
        const lContenuCellule = this._options.getContenuCellule(aElement, this);
        if (typeof lContenuCellule === 'string') {
          if (lContenuCellule) {
            this.setContenu(lContenuCellule);
          }
        } else if (lContenuCellule) {
          if (
            MethodesObjet_1.MethodesObjet.isString(lContenuCellule.libelleHtml)
          ) {
            this.bouton.setLibelleHtml(lContenuCellule.libelleHtml);
          } else if (
            MethodesObjet_1.MethodesObjet.isString(lContenuCellule.libelle)
          ) {
            this.setContenu(lContenuCellule.libelle);
          }
        }
      }
      _getParamsCallback(aParams) {
        return Object.assign(
          {
            combo: this,
            genreEvenement: -1,
            element: null,
            indice: null,
            genre: this.Genre,
            surSetDonnees: null,
            listeSelections: null,
            estComboMultiSelection: this._options.multiSelection,
            interactionUtilisateur: this.InteractionUtilisateur,
            estSelectionManuelle: false,
            editionEnCours: this.cache.editionEnCours,
            valeur: null,
            saisieRecherche: false,
            validationMultiSelection: false,
            surBoutonCellule: false,
          },
          aParams,
        );
      }
      _callback(aParams) {
        return this.callback.appel(aParams);
      }
      _retourSurNavigation(aParams) {
        var _a;
        if (aParams.retourSaisieAnnule) {
          this.setEtatSaisie(false);
        }
        const lSurSetDonnes = this._surSetDonnnes;
        const lParams = this._getParamsCallback(
          Object.assign(
            {
              genreEvenement:
                Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                  .selection,
              element:
                this.Selection >= 0
                  ? (_a = this.ListeElements) === null || _a === void 0
                    ? void 0
                    : _a.get(this.Selection)
                  : null,
              indice: this.Selection || 0,
              genre: this.Genre,
              surSetDonnees: lSurSetDonnes,
              listeSelections: this._listeSelections,
              estSelectionManuelle: this.InteractionUtilisateur,
            },
            aParams,
          ),
        );
        delete this._surSetDonnnes;
        if (
          lParams.element &&
          lParams.element.callbackSelection &&
          MethodesObjet_1.MethodesObjet.isFunction(
            lParams.element.callbackSelection,
          )
        ) {
          lParams.element.callbackSelection(lParams);
        }
        this._callback(lParams);
        if (this._options.surValidation) {
          this._options.surValidation.call(this.Pere, lParams);
        }
        IEHtml_1.IEHtml.refresh();
        if (
          this._options.mode === Enumere_Saisie_1.EGenreSaisie.SaisieRecherche
        ) {
          this.ListeElements = new ObjetListeElements_1.ObjetListeElements();
        }
      }
      _survolBoutonMultiSelection() {
        this._selectionLigne(this.Survolee, false);
        this.Survolee += 1;
      }
      _defilerFleches(aEvent, aSurKeyDown) {
        if (this.listeDeroulee && this.ListeElements) {
          if (this._estEventFermetureFleche(aEvent)) {
            if (!aSurKeyDown) {
              this.fermerListe(true);
            }
            return false;
          }
          if (aEvent.which === ToucheClavier_1.ToucheClavier.FlecheBas) {
            if (
              this._chercherSuivantSelectionnable(this.Survolee, true) <
              this.ListeElements.count()
            ) {
              this.surLigne(
                this._chercherSuivantSelectionnable(this.Survolee, true),
              );
              return true;
            }
            if (
              this._options.multiSelection &&
              this.Survolee < this.ListeElements.count()
            ) {
              this._survolBoutonMultiSelection();
              ObjetHtml_1.GHtml.setFocus(this.idBtnValidation, true);
              return true;
            }
          }
          if (aEvent.which === ToucheClavier_1.ToucheClavier.FlecheHaut) {
            if (
              this._chercherSuivantSelectionnable(this.Survolee, false) > -1
            ) {
              this.surLigne(
                this._chercherSuivantSelectionnable(this.Survolee, false),
              );
            }
            return true;
          }
        }
        return false;
      }
      _defiler(aEvent, aIgnorerFleches) {
        if (
          !this.listeDeroulee &&
          [Enumere_Saisie_1.EGenreSaisie.Combo].includes(this._options.mode)
        ) {
          if (ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(aEvent)) {
            this._deroulerListe();
          }
        }
        if (this.listeDeroulee && this.ListeElements) {
          if (
            ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent) ||
            this._estEventFermetureFleche(aEvent)
          ) {
            this._surValidationClavier();
          } else if (aEvent.which === ToucheClavier_1.ToucheClavier.Echap) {
            this.fermerListe(true);
          } else if (
            !(!aIgnorerFleches && this._defilerFleches(aEvent)) &&
            ToucheClavier_1.ToucheClavierUtil.estEventCaractereAlphaNumerique(
              aEvent,
            )
          ) {
            clearTimeout(this._timerInitParseur);
            this._timerInitParseur = setTimeout(
              this._initParseur.bind(this),
              500,
            );
            this._parseur = this._parseur + aEvent.key;
            const lIndice = this.ListeElements.getIndiceParParsingLibelle(
              this._parseur,
            );
            if (lIndice >= 0) {
              this.surLigne(lIndice);
            }
          }
        }
      }
      _surValidationClavier() {
        if (this._options.multiSelection) {
          this._setValueElementCB(
            this.Survolee,
            !this.getValueElementCB(this.Survolee),
          );
          this.$refresh();
        } else {
          this.surValidation(true, this.Survolee);
        }
      }
      _estEventFermetureFleche(aEvent) {
        return (
          aEvent &&
          aEvent.altKey &&
          aEvent.which === ToucheClavier_1.ToucheClavier.FlecheHaut
        );
      }
      _initParseur() {
        this._parseur = '';
      }
      _chercherSuivantSelectionnable(aIndice, aSensSuivant) {
        var _a;
        const lSens = aSensSuivant ? 1 : -1;
        aIndice = aIndice + lSens;
        const N =
          ((_a = this.ListeElements) === null || _a === void 0
            ? void 0
            : _a.count()) || 0;
        while (
          aIndice > -1 &&
          aIndice < N &&
          this.ListeElements &&
          this.ListeElements.get(aIndice) &&
          !this._estSelectionnable(this.ListeElements.get(aIndice))
        ) {
          aIndice += lSens;
        }
        return aIndice;
      }
      _initInfosElementsCBs(aNumeroLigne) {
        if (!this.ListeElements) {
          return;
        }
        const lElement = this.ListeElements.get(aNumeroLigne);
        const lSelectionnable = !!this._estSelectionnable(lElement);
        this._infosElementsCbs[aNumeroLigne] = {
          selectionne:
            lSelectionnable &&
            !!this._listeSelections.getElementParElement(lElement),
          avecCB: lSelectionnable,
          selectionnable: lSelectionnable,
          nonEditable: false,
          estCumul: false,
          estFilsCumul: null,
          setModifierSelection: null,
        };
        if (this._options.getInfosElementCB && lElement) {
          $.extend(
            this._infosElementsCbs[aNumeroLigne],
            this._options.getInfosElementCB(lElement),
          );
        }
      }
      _composeLigne(aElement, I, aLignesVisibles) {
        var _a, _b, _c;
        if (!aElement || !this.ListeElements) {
          return '';
        }
        const lPaddingLeft = 3;
        const lParams = {
          element: aElement,
          indice: I,
          largeur: this.cache.largeurContenu - lPaddingLeft,
        };
        let LLibelle =
          (_a = aElement.getLibelle()) !== null && _a !== void 0 ? _a : '';
        let lEstLibelleVide = false;
        if (aElement.libelleHtml || this._options.getContenuElement) {
          LLibelle = this._options.getContenuElement
            ? (_b = this._options.getContenuElement(lParams)) !== null &&
              _b !== void 0
              ? _b
              : ''
            : (_c = aElement.libelleHtml) !== null && _c !== void 0
              ? _c
              : '';
        }
        if (!LLibelle && this._options.libelleElementSiVide) {
          LLibelle = IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str('span', { 'aria-hidden': 'true' }, '<'),
            this._options.libelleElementSiVide,
            IE.jsx.str('span', { 'aria-hidden': 'true' }, '>'),
          );
          lEstLibelleVide = true;
        }
        const lEstCumul = !!(
          this._options.getEstCumul && this._options.getEstCumul(aElement)
        );
        const lClassElement = this._options.getClassElement
          ? this._options.getClassElement(lParams)
          : lEstCumul
            ? 'titre-liste'
            : '';
        let lAvecEllipsis =
          !this._options.getContenuElement && !this._estOuvertureMobile();
        if (
          this.cache.avecSurlignage &&
          this.cache.recherchesSurlignage &&
          !aElement.libelleHtml &&
          !lEstLibelleVide &&
          !this._options.getContenuElement &&
          (!this._options.avecSurlignageElement ||
            this._options.avecSurlignageElement(lParams))
        ) {
          LLibelle = ObjetChaine_1.GChaine.getLibelleSurligne(
            LLibelle,
            this.cache.recherchesSurlignage,
            { couleur: this._options.couleurSurlignageSuggestion },
          );
        }
        LLibelle = ObjetChaine_1.GChaine.avecEspaceSiVide(LLibelle);
        const lAvecSelection = this._estSelectionnable(aElement);
        if (
          !aElement.libelleHtml &&
          !this._options.getContenuElement &&
          (aElement.ClassAffichage || aElement.StyleAffichage)
        ) {
          LLibelle = IE.jsx.str(
            'div',
            {
              ie_ellipsis: !!lAvecEllipsis,
              class: aElement.ClassAffichage || false,
              style: aElement.StyleAffichage || false,
            },
            LLibelle,
          );
          lAvecEllipsis = false;
        }
        const lGetIdLigne = (aLigne) => {
          return `${this.Nom}_${aLigne}`;
        };
        const lLineHeight = this._options.hauteur
          ? this._options.hauteur
          : this._options.hauteurLigneDefault;
        let lRole = 'option';
        let lAriaOwns = [];
        if (!lAvecSelection) {
          if (lEstCumul) {
            lRole = 'group';
            aLignesVisibles.forEach((aNumeroLigne) => {
              const lLigne = this.ListeElements.get(aNumeroLigne);
              if (
                lLigne !== aElement &&
                this._options.getEstFilsDeCumul &&
                this._options.getEstFilsDeCumul(lLigne, aElement)
              ) {
                lAriaOwns.push(lGetIdLigne(aNumeroLigne));
              }
            });
          } else {
            lRole = 'presentation';
          }
        }
        return IE.jsx.str(
          'li',
          { class: lClassElement || false, role: 'presentation' },
          this.cache.avecCBMultiSelection &&
            this._infosElementsCbs &&
            this._infosElementsCbs[lParams.indice] &&
            this._infosElementsCbs[lParams.indice].avecCB
            ? IE.jsx.str(
                'div',
                {
                  class: 'check-conteneur',
                  role: 'presentation',
                  ie_node: this.jsxGetNodeCBMulti.bind(this),
                },
                IE.jsx.str(IEHtml_CheckboxRadio_1.Checkbox, {
                  'aria-hidden': 'true',
                  tabindex: '-1',
                  ie_model: this.jsxModelCbElement.bind(this, I),
                }),
              )
            : '',
          IE.jsx.str(
            'div',
            {
              id: lGetIdLigne(I),
              role: lRole,
              ie_attr: lAvecSelection
                ? this.jsxGetAttrWAIOption.bind(this, I)
                : false,
              ie_ellipsis: lAvecEllipsis,
              class: [
                'as-li',
                lClasseJQ,
                lEstLibelleVide
                  ? Form_components_css_1.SFormComponents.text_empty
                  : '',
                IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple,
              ],
              style:
                'line-height:' + lLineHeight * 0.1 + 'rem; overflow: hidden;',
              tabindex: lAvecSelection ? '-1' : false,
              'aria-owns': lAriaOwns.length > 0 ? lAriaOwns.join(' ') : false,
              'aria-label':
                lRole === 'group' && !aElement.libelleHtml ? LLibelle : false,
            },
            LLibelle,
          ),
        );
      }
      jsxGetNodeCBMulti(aNode) {
        $(aNode).on({
          'mouseenter mouseleave': (event) => {
            if (event.type === 'mouseenter') {
              this._selectionLigne(this.Survolee, false);
              this.Survolee = -1;
            }
          },
        });
      }
      jsxModelCbElement(aIndice) {
        return {
          getValue: () => {
            return this.getValueElementCB(aIndice);
          },
          setValue: (aValue) => {
            this._setValueElementCB(aIndice, aValue);
          },
          getIndeterminate: () => {
            const lInfos = this._infosElementsCbs
              ? this._infosElementsCbs[aIndice]
              : null;
            if (lInfos) {
              const lSelection = this._getSelectionElement(lInfos, aIndice);
              return (
                lSelection.nbFilsSelectionne > 0 &&
                lSelection.nbFilsSelectionne < lSelection.nbFils
              );
            }
            return false;
          },
          getDisabled: () => {
            const lInfos = this._infosElementsCbs
              ? this._infosElementsCbs[aIndice]
              : null;
            if (lInfos) {
              return !!lInfos.nonEditable;
            }
            return false;
          },
        };
      }
      jsxGetAttrWAIOption(aLigne) {
        const lResult = {};
        if (this._options.multiSelection) {
          const lInfos = this._infosElementsCbs[aLigne];
          lResult['aria-selected'] =
            '' +
            !!(
              (lInfos === null || lInfos === void 0 ? void 0 : lInfos.avecCB) &&
              (lInfos === null || lInfos === void 0
                ? void 0
                : lInfos.selectionne)
            );
        } else {
          lResult['aria-selected'] = '' + (this.Selection === aLigne);
        }
        return lResult;
      }
      _composeBloc(aBloc, aNumeroBloc) {
        if (aBloc && aBloc.lignesVisibles && this.ListeElements) {
          aBloc.dessine = true;
          aBloc.calcule = false;
          aBloc.top = 0;
          aBloc.height = 0;
          const T = [];
          aBloc.lignesVisibles.forEach((aNumeroLigne) => {
            T.push(
              this._composeLigne(
                this.ListeElements.get(aNumeroLigne),
                aNumeroLigne,
                aBloc.lignesVisibles,
              ),
            );
          });
          if (this.cache.scrollInfiniActif) {
            return IE.jsx.str(
              'li',
              {
                id: this.idBloc + aNumeroBloc,
                style: 'position:absolute;top:-1000px',
                role: 'presentation',
              },
              IE.jsx.str(
                'ul',
                {
                  class:
                    'liste-as-options' +
                    (this.cache.avecCBMultiSelection
                      ? ' multi-selections '
                      : ''),
                  role: 'presentation',
                },
                T.join(''),
              ),
            );
          }
          return T.join('');
        }
        return '';
      }
      _majBlocsTacheFond() {
        clearTimeout(this.cache.timerMAJ);
        if (!this.listeDeroulee) {
          return;
        }
        if (this.cache.toutCalcule) {
          return;
        }
        let lNumeroACalculer = 0;
        const lToutCalcule = this.cache.blocs.every((aBloc, aNumeroBloc) => {
          if (!aBloc.calcule) {
            lNumeroACalculer = aNumeroBloc;
          }
          return !!aBloc.calcule;
        });
        if (lNumeroACalculer > 0) {
          this.cache.timerMAJ = setTimeout(
            function (aNumeroBloc) {
              const lBloc = this.cache.blocs[aNumeroBloc];
              const lASupprimer = !lBloc.dessine;
              this._majBloc(aNumeroBloc);
              if (lASupprimer) {
                $('#' + (this.idBloc + aNumeroBloc).escapeJQ()).remove();
                lBloc.dessine = false;
              }
              this._majBlocsTacheFond();
            }.bind(this, lNumeroACalculer),
            0,
          );
        }
        if (!this.cache.toutCalcule && lToutCalcule) {
          this.cache.toutCalcule = true;
          if (this._options.callbackToutCalcule) {
            this._options.callbackToutCalcule();
          }
          const lDernierBloc = this.cache.blocs[this.cache.blocs.length - 1];
          const lHeightScroll = lDernierBloc.top + lDernierBloc.height;
          if (lHeightScroll !== this.cache.heightScroll) {
            this.cache.heightScroll = lHeightScroll;
            $('#' + this.idContenuScroll.escapeJQ()).height(lHeightScroll);
          }
        }
      }
      _majBloc(aNumeroBloc, aSurFermeture) {
        if (!aSurFermeture) {
          const lBlocPrecedent = this.cache.blocs[aNumeroBloc - 1];
          if (lBlocPrecedent && !lBlocPrecedent.calcule) {
            this._majBloc(aNumeroBloc - 1);
          }
        }
        const lBloc = this.cache.blocs[aNumeroBloc];
        if (!lBloc) {
          return;
        }
        if (
          !lBloc.dessine &&
          ObjetHtml_1.GHtml.elementExiste(this.idContenuScroll)
        ) {
          lBloc.dessine = true;
          ObjetHtml_1.GHtml.addHtml(
            this.idContenuScroll,
            this._composeBloc(lBloc, aNumeroBloc),
            { instance: this, ignorerScroll: true },
          );
        }
        if (!lBloc.calcule && !aSurFermeture) {
          const lJBloc = $('#' + (this.idBloc + aNumeroBloc).escapeJQ());
          lBloc.height = lJBloc.height();
          lBloc.top =
            aNumeroBloc === 0
              ? 0
              : this.cache.blocs[aNumeroBloc - 1].top +
                this.cache.blocs[aNumeroBloc - 1].height;
          lBloc.calcule = true;
          lJBloc.css('top', lBloc.top);
        }
      }
      _visibiliteSurNumeroBloc(aNumeroBlocVisible, aSurFermeture) {
        this.cache.blocs.forEach((aBloc, aNumeroBloc) => {
          const lVisible = aSurFermeture
            ? aNumeroBloc === aNumeroBlocVisible
            : aNumeroBloc <=
                aNumeroBlocVisible + this._options.nbBlocsScrollInfini &&
              aNumeroBloc >=
                aNumeroBlocVisible - this._options.nbBlocsScrollInfini;
          const lSurvolSurBloc =
            aBloc.debut <= this.Survolee && aBloc.fin >= this.Survolee;
          if (lVisible) {
            const lEstDejaDessine = aBloc.dessine;
            this._majBloc(aNumeroBloc, aSurFermeture);
            if (!lEstDejaDessine && lSurvolSurBloc) {
              this._selectionLigne(this.Survolee, true);
              ObjetHtml_1.GHtml.setFocus(this.Nom + '_' + this.Survolee);
            }
          } else {
            if (aBloc.dessine) {
              $('#' + (this.idBloc + aNumeroBloc).escapeJQ()).remove();
            }
            aBloc.dessine = false;
            if (lSurvolSurBloc) {
              ObjetHtml_1.GHtml.setFocus(this.idContenu);
            }
          }
        });
      }
      _majBlocsDeLigne(aLigne, aSurFermeture) {
        if (!this.cache.scrollInfiniActif) {
          return;
        }
        let lNumeroBloc = 0;
        this.cache.blocs.every((aBloc, aNumeroBloc) => {
          lNumeroBloc = aNumeroBloc;
          return aLigne >= 0 && (aLigne < aBloc.debut || aLigne > aBloc.fin);
        });
        this._visibiliteSurNumeroBloc(lNumeroBloc, aSurFermeture);
        if (!aSurFermeture) {
          this._majBlocsTacheFond();
        }
      }
      _majBlocsDeTop(aTop) {
        if (!this.cache.scrollInfiniActif) {
          return;
        }
        let lNumeroBlocVisible = 0;
        let lTrouve = false;
        let lDernierBlocCalcule = 0;
        this.cache.blocs.every((aBloc, aNumeroBloc) => {
          if (aBloc.calcule) {
            lDernierBlocCalcule = aNumeroBloc;
          }
          return !!aBloc.calcule;
        });
        this.cache.blocs.every((aBloc, aNumeroBloc) => {
          if (
            aBloc.calcule &&
            aBloc.top <= aTop &&
            aBloc.top + aBloc.height > aTop
          ) {
            lNumeroBlocVisible = aNumeroBloc;
            lTrouve = true;
          }
          return !lTrouve;
        });
        if (!lTrouve) {
          if (lDernierBlocCalcule >= 0) {
            this._majBloc(lDernierBlocCalcule + 1);
            this._majBlocsDeTop(aTop);
          }
          return;
        }
        this._visibiliteSurNumeroBloc(lNumeroBlocVisible);
        this._majBlocsTacheFond();
      }
      _surFocusLigne(event) {
        event.data.instance._arreterFermetureListe();
      }
      _surKeyDownListe(aEvent) {
        const lThis = aEvent.data.instance;
        if (
          lThis.listeDeroulee &&
          aEvent.which === ToucheClavier_1.ToucheClavier.Tab
        ) {
          if (!lThis._options.multiSelection) {
            lThis._surValidationClavier();
          }
        } else if (aEvent.which === ToucheClavier_1.ToucheClavier.Debut) {
          lThis.surLigne(lThis.chercherIndiceSelectionSelonSens(0));
          aEvent.stopPropagation();
        } else if (aEvent.which === ToucheClavier_1.ToucheClavier.Fin) {
          lThis.surLigne(lThis._getDerniereLingeSelectionnable());
          aEvent.stopPropagation();
        } else {
          lThis._defilerFleches(aEvent, true);
        }
      }
      _surKeyUpListe(event) {
        event.data.instance._defiler(event, true);
        if (event.which === ToucheClavier_1.ToucheClavier.Echap) {
          ObjetNavigateur_1.Navigateur.stopperEvenement(event.originalEvent);
        }
      }
      _selectionnerUnElementEnMultiSelection(aIndice) {
        if (
          this._infosElementsCbs &&
          this._infosElementsCbs[aIndice] &&
          !this._infosElementsCbs[aIndice].selectionnable
        ) {
          return false;
        }
        if (this.ListeElements) {
          this.ListeElements.parcourir((D, aIndex) => {
            const lInfos = this._infosElementsCbs
              ? this._infosElementsCbs[aIndex]
              : null;
            if (lInfos && lInfos.selectionne) {
              lInfos.selectionne = false;
            }
          }, this);
        }
        this._setValueElementCB(aIndice, true);
        return true;
      }
      _surClickListe(event) {
        const T = this.id.split('_'),
          lIndice = parseInt(T[T.length - 1], 10),
          lInstance = event.data.instance;
        if (lInstance._options.multiSelection) {
          lInstance._selectionnerUnElementEnMultiSelection(lIndice);
        }
        lInstance.surValidation(true, lIndice);
      }
      _surMouseMoveListe(event) {
        const T = this.id.split('_');
        const lIndice = parseInt(T[T.length - 1], 10);
        const lInstance = event.data.instance;
        lInstance.surLigne(lIndice);
        lInstance._arreterFermetureListe();
      }
      _avecDeroulerListe() {
        const lNbVisibles = this.getNbElementsVisible();
        return (
          lNbVisibles > 1 ||
          (lNbVisibles > 0 &&
            this._options.mode ===
              Enumere_Saisie_1.EGenreSaisie.SaisieRecherche) ||
          (lNbVisibles > 0 &&
            this._options.multiSelection &&
            this._options.mode === Enumere_Saisie_1.EGenreSaisie.Combo) ||
          (!this._options.deroulerListeSeulementSiPlusieursElements &&
            lNbVisibles <= 1)
        );
      }
      _estOuvertureMobile() {
        return IE.estMobile
          ? !!this._options.avecOuvertureDeroulantPopup
          : false;
      }
      _deroulerListe(ASurvolee, aListeDejaRemplie, aSansFocusLigne) {
        if (this.listeDeroulee) {
          this.fermerListe();
          this.listeDeroulee = false;
          return;
        }
        const lParams = this._getParamsCallback({
          genreEvenement:
            Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
              .deploiement,
        });
        if (this._callback(lParams) === false) {
          IEHtml_1.IEHtml.refresh();
          return;
        }
        if (this._avecDeroulerListe()) {
          this._arreterFermetureListe();
          if (this._avecSaisieRechercheDynamique()) {
            setTimeout(this._arreterFermetureListe.bind(this), 0);
          }
          if (!aListeDejaRemplie) {
            this._remplirListe();
          }
          this.listeDeroulee = true;
          this.bouton.setOptionsObjetCelluleBouton({
            ariaExpanded: true,
            ariaControls: this.idContenuScroll,
          });
          const lElementListe = ObjetHtml_1.GHtml.getElement(this.NomListe);
          const lElementContenuListe = ObjetHtml_1.GHtml.getElement(
            this.idContenu,
          );
          ObjetHtml_1.GHtml.setDisplay(lElementListe, true);
          lElementListe === null || lElementListe === void 0
            ? void 0
            : lElementListe.classList.remove(
                ObjetSaisie_css_1.SObjetSaisie.closing,
              );
          lElementContenuListe === null || lElementContenuListe === void 0
            ? void 0
            : lElementContenuListe.classList.add(
                ObjetSaisie_css_1.SObjetSaisie.deroulantOpeningClossing,
              );
          this.activerEventOut = false;
          setTimeout(() => {
            this.activerEventOut = true;
          }, 50);
          const lObjet = this;
          $(lElementContenuListe)
            .css({ height: 0 })
            .animate(
              { height: lObjet.hauteurContenu + 'px' },
              this._options.dureeAnimationDeploiement,
            );
          if (this._ouvertureInverse) {
            const lRectRef = ObjetPosition_1.GPosition.getClientRect(this.Nom);
            const lTopFinal =
              lRectRef.top -
              this.hauteurContenu -
              this.decalageTopOuvertureInverse;
            $(lElementListe)
              .css({ top: lRectRef.top - this.decalageTopOuvertureInverse })
              .animate(
                { top: lTopFinal + 'px' },
                this._options.dureeAnimationDeploiement,
              );
          }
          $(lElementContenuListe).queue(function () {
            lElementContenuListe === null || lElementContenuListe === void 0
              ? void 0
              : lElementContenuListe.classList.remove(
                  ObjetSaisie_css_1.SObjetSaisie.deroulantOpeningClossing,
                );
            lObjet._eventAnimationOuvertureFin(ASurvolee, !!aSansFocusLigne);
            $(this).dequeue();
          });
        } else {
          this._gererCasUnSeulElement();
        }
      }
      _eventAnimationOuvertureFin(ASurvolee, aSansFocusLigne) {
        let lNumeroLigne =
          ASurvolee === null || ASurvolee === undefined
            ? this.Selection === null || this.Selection === undefined
              ? 0
              : this.Selection
            : ASurvolee;
        lNumeroLigne = this.chercherIndiceSelectionSelonSens(
          lNumeroLigne >= 0 ? lNumeroLigne : 0,
        );
        this.surLigne(lNumeroLigne, aSansFocusLigne);
      }
      _declencherFermetureListe(AAvecFocus) {
        clearTimeout(this.Timer);
        this.Timer = setTimeout(this.fermerListe.bind(this, AAvecFocus), 100);
      }
      _arreterFermetureListe() {
        clearTimeout(this.Timer);
        this.Timer = null;
      }
      _etapeFermetureInverse(aJElement, aNow) {
        aJElement.css({ top: -aNow - this.decalageTopOuvertureInverse });
      }
      _eventAnimationFermetureFin() {
        const lElementListe = ObjetHtml_1.GHtml.getElement(this.NomListe);
        lElementListe === null || lElementListe === void 0
          ? void 0
          : lElementListe.classList.remove(
              ObjetSaisie_css_1.SObjetSaisie.closing,
            );
        setTimeout(() => ObjetHtml_1.GHtml.setDisplay(lElementListe, false), 5);
        if (this._options.avecEventSurFermetureListe) {
          this._callback(
            this._getParamsCallback({
              genreEvenement:
                Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                  .fermeture,
              indice: 0,
            }),
          );
          IEHtml_1.IEHtml.refresh();
        }
      }
      _estSelectionnable(aElement) {
        return (
          !!aElement &&
          aElement.AvecSelection !== false &&
          aElement.Visible !== false &&
          (!this._options.getEstElementNonSelectionnable ||
            this._options.getEstElementNonSelectionnable(aElement) !== true)
        );
      }
      _selectionLigne(aLigne, aSelectionner) {
        if (
          aLigne > -1 &&
          this.ListeElements &&
          aLigne < this.ListeElements.count()
        ) {
          const lElement = this.ListeElements.get(aLigne);
          if (aSelectionner && !this._estSelectionnable(lElement)) {
            return;
          }
          const lJDOM = $(`#${this.Nom.escapeJQ() + '_' + aLigne}`);
          if (lJDOM.length === 0) {
            return;
          }
          if (aSelectionner) {
            lJDOM.attr('tabindex', '0');
          } else {
            lJDOM.attr('tabindex', '-1');
          }
          if (this._options.avecFondSelectionSurSurvol) {
            if (aSelectionner) {
              lJDOM.addClass('selected');
            } else {
              lJDOM.removeClass('selected');
            }
          }
          if (this._options.avecGrasSurSurvol) {
            if (aSelectionner) {
              lJDOM.addClass('Gras');
            } else {
              lJDOM.removeClass('Gras');
            }
          }
        }
      }
      _gererCasUnSeulElement() {
        var _a, _b;
        let lResult = false;
        if (this.ListeElements && this.getNbElementsVisible() === 1) {
          let LLibelle = '';
          let lEstHtml = false;
          let lElement;
          const lIndex = this.ListeElements.getIndiceElementParFiltre((aEl) => {
            return aEl.Visible !== false;
          });
          lElement = this.ListeElements.get(lIndex);
          if (lElement) {
            LLibelle =
              (_a = lElement.getLibelle()) !== null && _a !== void 0 ? _a : '';
            if (this._options.getContenuElement) {
              LLibelle =
                (_b = this._options.getContenuElement({
                  element: lElement,
                  indice: lIndex,
                })) !== null && _b !== void 0
                  ? _b
                  : '';
            } else if (
              this._options.celluleAvecTexteHtml &&
              lElement.libelleHtml
            ) {
              LLibelle = lElement.libelleHtml;
              lEstHtml = true;
            }
          }
          if (LLibelle) {
            this.Selection = lIndex;
            if (this._options.controlerNbrElements) {
              ObjetHtml_1.GHtml.setHtml(
                this.Nom,
                IE.jsx.str('span', { class: 'Gras Insecable' }, LLibelle),
              );
            }
            this.surValidation(false, this.Selection);
            lResult = true;
          } else {
            this.Selection = -1;
          }
          if (this._options.modifierContenuCelluleSurSelection) {
            if (this._options.getContenuCellule) {
              this._appliquerGetContenuCellule(lElement);
            } else if (lEstHtml) {
              this.bouton.setLibelleHtml(LLibelle);
            } else {
              this.setContenu(LLibelle);
            }
            const lIdDescendant =
              this.Selection > -1 ? this.Nom + '_' + this.Selection : '';
            this._actualiserWAICombo(lIdDescendant);
          }
        }
        this.$refresh();
        return lResult;
      }
      _actualiserWAICombo(aIdDescendant) {
        const lId =
          aIdDescendant && ObjetHtml_1.GHtml.getElement(aIdDescendant)
            ? aIdDescendant
            : null;
        $('#' + this.bouton.NomEdit.escapeJQ()).attr({
          'aria-activedescendant': lId,
        });
      }
      _initListeSelections(aListeSelections) {
        const lListeSelections =
          MethodesObjet_1.MethodesObjet.dupliquer(aListeSelections);
        if (!this._listeSelections) {
          this._listeSelections = new ObjetListeElements_1.ObjetListeElements();
        }
        this._listeSelections.vider();
        let lResult = false;
        if (this.ListeElements) {
          this.ListeElements.parcourir((D, aIndex) => {
            const lElement = lListeSelections
              ? lListeSelections.getElementParNumero(D.getNumero())
              : null;
            if (lElement) {
              lResult = true;
              this._listeSelections.addElement(lElement);
              if (this._infosElementsCbs && this._infosElementsCbs[aIndex]) {
                this._infosElementsCbs[aIndex].selectionne = true;
              }
            } else if (
              this._infosElementsCbs &&
              this._infosElementsCbs[aIndex]
            ) {
              this._infosElementsCbs[aIndex].selectionne = false;
            }
          });
          if (this._listeSelections.count() > 0) {
            this.setContenu(this._listeSelections);
          }
        }
        return lResult;
      }
      _getDerniereLingeSelectionnable() {
        return this.ListeElements && this.ListeElements.count
          ? this.chercherIndiceSelectionSelonSens(
              this.ListeElements.count() - 1,
              true,
            )
          : 0;
      }
    }
    exports.ObjetSaisie = ObjetSaisie;
    const lClasseJQ = GUID_1.GUID.getClassCss();
  },
  fn: 'objetsaisie.js',
});