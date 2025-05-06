IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.NSListe = exports.ObjetListe = void 0;
    require('ObjetListeEspaceMobile.css');
    require('DeclarationJQuery.js');
    const TypeFusionTitreListe_1 = require('TypeFusionTitreListe');
    const IEHtml = require('IEHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const MethodesObjet_1 = require('MethodesObjet');
    const _ObjetCouleur_1 = require('_ObjetCouleur');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_1 = require('ObjetStyle');
    const Enumere_Action_1 = require('Enumere_Action');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const Enumere_EvenementListe_1 = require('Enumere_EvenementListe');
    const Enumere_TriElement_1 = require('Enumere_TriElement');
    require('IEHtml.InputNote.js');
    require('IEHtml.SelecFile');
    require('IEHtml.TextareaMax.js');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetDonneesListe_1 = require('ObjetDonneesListe');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ToucheClavier_1 = require('ToucheClavier');
    const Invocateur_1 = require('Invocateur');
    const ComparateurChaines_1 = require('ComparateurChaines');
    const tag_1 = require('tag');
    const Enumere_CommandeMenu_1 = require('Enumere_CommandeMenu');
    const ObjetMenuContextuel_1 = require('ObjetMenuContextuel');
    const RechercheTexte_1 = require('RechercheTexte');
    const ObjetDonneesListeFlatDesign_1 = require('ObjetDonneesListeFlatDesign');
    const jsx_1 = require('jsx');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetWAI_1 = require('ObjetWAI');
    const _CONST_largeurMinColonne = 10;
    class ObjetListe extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.IdPremierElement = this.Nom + '_ObjetListe';
        this.IdEdition = this.Nom + '_Edition';
        this.idZone = this.Nom + '_Zone';
        this.IdZoneTexte = this.Nom + '_ZoneTexte';
        this.idTotaux = this.Nom + '_totaux';
        this.idPiedDeListe = this.Nom + '_piedDeListe';
        this.ids = {
          zoneFils: this.IdPremierElement,
          titre: this.Nom + '_titreTout',
          contenu: this.Nom + '_contenuListe_',
          colonneDeTri: this.Nom + '_triCol_',
          curseurTri: this.Nom + '_curseurTri_',
          curseurTriSurvol: this.Nom + '_curseurTriSurvol_',
          survolTitre: this.Nom + '_survolTitre_',
          cadreSelection: this.Nom + '_cadreSel_',
          rolloverTitre: this.Nom + '_rolloverTitre_',
          rolloverContenuLigne: this.Nom + '_rolloverContenuLigne_',
          rolloverContenuColonne: this.Nom + '_rolloverContenuColonne_',
          rolloverContenuCellule: this.Nom + '_rolloverContenuCellule_',
          dragInsertion: this.Nom + '_dragInsertion',
          surligneur_edition: this.Nom + '_surligneuredition',
          WAIDescribeTreeGrid: this.Nom + '_descrtreegrid',
          WAIDescribeTreeGridTotal: this.Nom + '_descrtreegrid_total',
          WAIDescribeTri: this.Nom + '_descr_tri',
          WAICelluleEditable: this.Nom + '_celEdit',
          btnCreation: `${this.Nom}_btnCreation`,
          WAIGrid: `${this.Nom}_waiGrid`,
          WAILigneLue: `${this.Nom}_waiLigneLue`,
        };
        this._init();
      }
      resetOptions() {
        this._options = {
          colonnes: null,
          gestionModificationColonnes: null,
          messageContenuVide: '',
          avecFiltresVisibles: false,
          listeTailles: [],
          listeTitres: null,
          hintTitres: null,
          colonnesCachees: null,
          colonnesCacheesImpression: null,
          zoneScrollH: null,
          avecLigneCreation: false,
          listeCreations: [],
          titreCreation:
            'Nouveau',
          iconeTitreCreation: false,
          avecCBToutCocher: false,
          avecToutSelectionner: true,
          nonEditable: false,
          nonEditableSurModeExclusif: false,
          AvecSuppression: true,
          parsingSurColonne: -1,
          scrollHorizontal: false,
          scrollHorizontalSurLargeurComplete: true,
          avecScrollEnTactileV: !GNavigateur.isLayoutTactile,
          avecScrollEnTactileH: !GNavigateur.isLayoutTactile,
          colonnesTriables: false,
          numeroColonneTriDefaut: undefined,
          evenementSurTri: null,
          avecModeAccessible: false,
          boutons: [],
          tailleBoutons: 17,
          positionBoutons: NSListe.positionBoutons.entete,
          avecCreationEnBoutonDesignClassique: false,
          skin: ObjetListe.skin.classique,
          avecListeNeutre: undefined,
          couleursListe: GCouleur.liste,
          avecReservationPlaceScrollHorizontal: false,
          hauteurAdapteContenu: false,
          getHauteurMaxAdapteListe: null,
          hauteurMaxAdapteContenu: null,
          avecLigneTotal: false,
          avecConstructionDynamiqueContenu: true,
          colonnesSansBordureDroit: [],
          avecCadreSelection: true,
          paddingCelluleLR: 8,
          paddingCelluleTB: 4,
          hauteurCelluleTitreStandard:
            ObjetDonneesListe_1.ObjetDonneesListe.hauteurMinCellule,
          widthTri: 14,
          heightTri: 8,
          avecRollover: true,
          hauteurZoneContenuListeMin:
            ObjetDonneesListe_1.ObjetDonneesListe.hauteurMinCellule,
          largeurZoneContenuListeMin: 20,
          largeurImage: 18,
          borduresContenu_couleur: null,
          borduresContenu_top: 1,
          borduresContenu_bottom: 1,
          borduresContenu_left: 1,
          borduresContenu_right: 1,
          paddingContenu_LR: 0,
          borduresCellule_couleur: null,
          borduresCellule_horizontal: 1,
          borduresCellule_vertical: 1,
          alternanceCouleurLigneContenu: false,
          avecCouleurAlternanceParDefaut: false,
          couleurAlternance0: new _ObjetCouleur_1.ObjectCouleurCellule(
            GCouleur.blanc,
            GCouleur.noir,
            null,
          ),
          couleurAlternance1: new _ObjetCouleur_1.ObjectCouleurCellule(
            GCouleur.fond,
            GCouleur.noir,
            null,
          ),
          avecTraitSeparationDeploiementAlternance: false,
          avecOmbreDroite: false,
          forcerOmbreScrollTop: false,
          forcerOmbreScrollBottom: false,
          avecSelectionLigneSurImpression: true,
          piedDeListe: null,
          maxLengthTextareaIgnore: 1000000,
          delaiSurEditionRecherche: 10,
          callbackResizeObserverContenu: null,
        };
        return this;
      }
      setOptionsListe(aOptions, aAvecActualisation) {
        return this._setOptionsListe(aOptions, aAvecActualisation);
      }
      getDonneesListe() {
        return this.Donnees;
      }
      setDonnees(ADonnees, aLigneSelectionne, aParams) {
        return this._setDonnees(ADonnees, aLigneSelectionne, aParams);
      }
      actualiser(aObjetOuConserverSelection, aSansTriDonnees) {
        const lParametres = {
          ignorerFocusListe: false,
          ignorerCalculTri: true,
        };
        if (
          MethodesObjet_1.MethodesObjet.isObject(aObjetOuConserverSelection)
        ) {
          Object.assign(lParametres, aObjetOuConserverSelection);
        } else {
          Object.assign(lParametres, {
            conserverSelection: !!aObjetOuConserverSelection,
            conserverFocusSelection: !!aObjetOuConserverSelection,
            sansTriDonnees: aSansTriDonnees,
          });
        }
        this._cache.calculsPreRenduAFaire = true;
        this._actualiser(lParametres);
      }
      effacer(aMessage) {
        this._donneesRecus = false;
        ObjetHtml_1.GHtml.setHtml(this.Nom, aMessage || '&nbsp;', {
          ignorerScroll: true,
        });
        return this;
      }
      surSelection(aNumeroColonne, aNumeroLigne, aParams) {
        return this._surSelection(aNumeroColonne, aNumeroLigne, aParams);
      }
      selectionnerLigne(aParametres) {
        this._cache.lignesSelectionnees_prec = [
          ...this._cache.lignesSelectionnees,
        ];
        this._selectionner(
          Object.assign(
            { colonne: -1, avecEvenementModificationSelection: true },
            aParametres,
          ),
        );
      }
      selectionnerCellule(aParametres) {
        this._cache.lignesSelectionnees_prec = [
          ...this._cache.lignesSelectionnees,
        ];
        this._selectionner(
          Object.assign(
            { avecEvenementModificationSelection: true },
            aParametres,
          ),
        );
      }
      getSelection() {
        if (this._getListeElementsSelection().count() === 0) {
          return -1;
        }
        return this._cache.selectionCellule.ligne;
      }
      getSelectionCellule() {
        return Object.assign({}, this._cache.selectionCellule);
      }
      getElementSelection() {
        const lListe = this._getListeElementsSelection();
        return lListe.count() > 0 ? lListe.get(0) : null;
      }
      getListeElementsSelection() {
        return this._getListeElementsSelection();
      }
      setListeElementsSelection(aListeElements, aParams) {
        return this._setListeElementsSelection(aListeElements, aParams);
      }
      getTableauCellulesSelection() {
        const lSelections = [];
        this._getCellulesSelection().forEach((aElement) => {
          aElement.colonnes.forEach((aNumeroColonne, aIndex) => {
            lSelections.push({
              article: aElement.article,
              ligne: aElement.ligne,
              colonne: aNumeroColonne,
              idColonne: aElement.idsColonnes[aIndex],
              declarationColonne:
                this._cache.declColonnesByIds[aElement.idsColonnes[aIndex]],
            });
          });
        });
        return lSelections;
      }
      setTableauCellulesSelection(aListe, aParams) {
        return this._setTableauCellulesSelection(aListe, aParams);
      }
      selectionnerCelluleSuivante(aParametres) {
        return this._selectionnerCelluleSuivante(aParametres);
      }
      scrollTo(aParams) {
        const lParams = Object.assign(
          { ligne: -1, avecScrollTopLigne: true, ecartForce: 0 },
          aParams,
        );
        this._scrollSurLigne({
          ligne: lParams.ligne,
          avecScrollTopLigne: lParams.avecScrollTopLigne,
          ecartForce: lParams.ecartForce,
        });
      }
      getArticleDeLigne(aLigne) {
        if (this.Donnees && this.Donnees.Donnees) {
          return this.Donnees.Donnees.get(aLigne);
        }
        return null;
      }
      getListeArticles() {
        if (this.Donnees && this.Donnees.Donnees) {
          return this.Donnees.Donnees;
        }
        return new ObjetListeElements_1.ObjetListeElements();
      }
      getListeArticlesCochees() {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        const lDonnees =
          this.Donnees &&
          this.Donnees instanceof
            ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign
            ? this.Donnees
            : null;
        if (lDonnees) {
          this.getListeArticles().parcourir((aArticle, aIndex) => {
            const lParams = this._getParamsCellule(-1, aIndex);
            if (
              lDonnees._getVisible(aArticle) &&
              lDonnees.avecCB(lParams) &&
              lDonnees.getValueCB(lParams)
            ) {
              lListe.add(aArticle);
            }
          });
        }
        return lListe;
      }
      demarrerEditionSurCellule(aLigne, aColonne) {
        const lElement = ObjetHtml_1.GHtml.getElement(
          this.getIdCellule(aColonne, aLigne, true),
        );
        if (ObjetHtml_1.GHtml.elementExiste(lElement)) {
          ObjetHtml_1.GHtml.setFocus(lElement);
        } else if (this._estLigneDansRangeNonConstruitDyn(aLigne)) {
          this._scrollSurLigne({ ligne: aLigne, colonne: aColonne });
        }
        this.surEditionDeb(aColonne, aLigne);
        if (this._cache.timeout_ignorerScrollSortieEdition) {
          clearTimeout(this._cache.timeout_ignorerScrollSortieEdition);
          delete this._cache.timeout_ignorerScrollSortieEdition;
        }
        this._cache.timeout_ignorerScrollSortieEdition = setTimeout(() => {
          delete this._cache.timeout_ignorerScrollSortieEdition;
        }, 100);
        return this;
      }
      ajouterElementCreation(aLibelle, aValeurCreation) {
        return this._ajouterElementCreation(aLibelle, aValeurCreation);
      }
      annulerCreation() {
        this._annulerCreation();
      }
      setCreationLigne(aCreationLigneBis) {
        return this._setCreationLigne(aCreationLigneBis);
      }
      surSuppression() {
        return this._surSuppression();
      }
      getIdCellule(aColonne, aLigne, aPourFocus) {
        const lTab = [this.Nom, aColonne];
        if (aLigne !== null && aLigne !== undefined) {
          lTab.push(aLigne);
        }
        if (aPourFocus) {
          lTab.push('div');
        }
        return lTab.join('_');
      }
      getIdColonneDeNumeroColonne(aNumeroColonne) {
        return this._cache.colonnes.listeIds[aNumeroColonne] || '';
      }
      getNumeroColonneDIdColonne(aIdColonne) {
        const lNumero = this._cache.colonnes.listeIds.indexOf(aIdColonne);
        return lNumero >= 0 ? lNumero : -1;
      }
      getRechercheTexte() {
        return this._cache.rechercheTexte.saisie;
      }
      setRechercheTexte(aTexte, aSansTriDonnees) {
        this._setRechercheSaisie(aTexte);
        clearTimeout(this._cache.rechercheTexte.timerSaisie);
        let lParams;
        if (aSansTriDonnees) {
          lParams = { sansTriDonnees: true };
        }
        if (this._options.delaiSurEditionRecherche >= 0) {
          this._cache.rechercheTexte.timerSaisie = setTimeout(() => {
            this._filtreRechercheTexte(lParams);
          }, this._options.delaiSurEditionRecherche);
        } else {
          this._filtreRechercheTexte(lParams);
        }
        return this;
      }
      composeImpression(aProportion) {
        return '';
      }
      construireCopieCSV() {}
      getPositionScrollV() {
        const lBackupScroll = this._backupScroll({
          conserverPositionScroll: true,
        });
        return lBackupScroll.scrollTop;
      }
      setPositionScrollV(aPosition) {
        const lBackupScroll = this._backupScroll({
          conserverPositionScroll: true,
        });
        lBackupScroll.scrollTop = aPosition;
        this._setScroll(lBackupScroll);
      }
      getTriCourant() {
        return Object.assign(
          {
            id: this._triCourant.colonne.map((aColonne) =>
              this.getIdColonneDeNumeroColonne(aColonne),
            ),
          },
          this._triCourant,
        );
      }
      reset() {
        return this._setDonnees(null);
      }
      resize() {}
      surPreResize() {}
      surPostResize() {}
      async setColonneTri(aColonne, aGenre, aNumeroTri) {
        return this._setColonneTri(aColonne, aGenre, aNumeroTri);
      }
      focusSuivant(AId, AOrientation, ADirection) {
        return this._focusSuivant(AId, AOrientation, ADirection);
      }
      free() {
        super.free();
        clearTimeout(this._cache.rechercheTexte.timerSaisie);
        clearTimeout(this._cache.timerKeyPress);
        this._desabonnementResizeObserver();
      }
      _init() {
        this.resetOptions();
        this._cache = {
          taillesColonne: [],
          heightConteneur: 0,
          largeurPage: null,
          avecPourcentage: false,
          largeurTotalFixe: 0,
          largeurBlocFixe: 0,
          infosZonesColonnes: [],
          listeCorrespondancesColonnes: [],
          declColonnesByIds: {},
          colonnes: { listeIds: [], listeTailles: [] },
          tableauColonnesCachees: [],
          nbColonnesCachees: 0,
          reserverPlaceScrollHorizontal: false,
          calculsPreRenduAFaire: true,
          calculsTailleColonnesAFaire: true,
          calculTriAFaire: true,
          listeNonInitialisee: true,
          lignesFusionParColonne: {},
          declarationsColonnes: [],
          colonnesTri: null,
          colonnesSansBordureDroit: [],
          boutons: null,
          rolloverVisible: false,
          survoleTitreTriVisible: false,
          lignesVisibles: [],
          lignesVisiblesSansRechercheTexte: [],
          strResultRecherche: '',
          couleursAlternanceParLigne: [],
          selectionCellule: { ligne: -1, colonne: -1 },
          celluleClicNonShift: { ligne: -1, colonne: -1 },
          lignesSelectionnees: [],
          lignesSelectionnees_prec: [],
          editionEnCours: false,
          editionEnCoursEvenement: false,
          creationEnCours: false,
          creationEnCoursEvenement: false,
          positionCreation: 0,
          listeValeursCreation: [],
          numeroColonneCreationEnCours: null,
          numeroLigneCreationDynamique: null,
          ouvrirSelecteurFileParLigne: {},
          positionsCelluleCadreSelection: {},
          keysControleurTitre: {},
          keysControleurDonneesListe: {},
          rechercheTexte: {
            saisie: '',
            textesParLigne: null,
            lignesCachees: [],
            timerSaisie: null,
          },
          timerKeyPress: null,
          collectionFuncConstructCellule: {},
          refresh: {
            nbLignes: 10,
            observer: new IntersectionObserver(
              this._callbackObserverRefreshContenu.bind(this),
            ),
            init: () => {
              const lCacheRef = this._cache.refresh;
              lCacheRef.structure = [];
              lCacheRef.mapNodesObs = new WeakMap();
              lCacheRef.mapRangesExist = new Map();
              lCacheRef.mapRangesExist.min = Number.MAX_VALUE;
              lCacheRef.mapRangesExist.max = -1;
              (lCacheRef.node_gab_start = null),
                (lCacheRef.node_gab_end = null),
                (lCacheRef.hauteurMoyenneLigne = 20);
              lCacheRef.getHeightStructure = (aStructure) => {
                return aStructure.height < 0
                  ? lCacheRef.hauteurMoyenneLigne * aStructure.nbLignes
                  : aStructure.height;
              };
            },
          },
        };
        this._cache.refresh.init();
        this.optionsInterne = { versionMobile: false };
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.modeExclusif,
          () => {
            if (this._options.nonEditableSurModeExclusif) {
              this._actualiser({
                conserverSelection: true,
                sansTriDonnees: true,
              });
            }
          },
          this,
        );
      }
      getControleur(aInstance) {
        const lControleur = {
          getClassListe: function () {
            const lClasses = ['skin_' + aInstance._options.skin];
            if (!aInstance.Donnees || aInstance.Donnees.Donnees.count() === 0) {
              lClasses.push('vide');
            }
            if (aInstance._options.avecOmbreDroite) {
              lClasses.push('ombre-droite');
            }
            if (aInstance.optionsInterne.getClassListe) {
              lClasses.push(aInstance.optionsInterne.getClassListe(aInstance));
            }
            if (aInstance.Donnees && aInstance.Donnees.options.racineCss) {
              lClasses.push(aInstance.Donnees.options.racineCss);
            }
            if (!aInstance._options.avecCadreSelection) {
              lClasses.push('background-selec');
            }
            return lClasses.join(' ');
          },
          getAttrListe() {
            const lAttrs = {};
            let lLabelsWAIListe = [];
            if (aInstance._options.labelWAI) {
              lLabelsWAIListe.push(aInstance._options.labelWAI);
            } else {
              lLabelsWAIListe.push(
                `${'Liste'}`,
              );
            }
            lAttrs['aria-label'] = lLabelsWAIListe.join(' - ');
            return lAttrs;
          },
          getNodePremierElement() {
            $(this.node).on({
              focusin() {
                $(`#${aInstance.Nom.escapeJQ()} .liste-focus-grid`).attr(
                  'tabindex',
                  '-1',
                );
              },
              focusout() {
                $(`#${aInstance.Nom.escapeJQ()} .liste-focus-grid`).attr(
                  'tabindex',
                  '0',
                );
              },
              focus(aEvent) {
                if (!aEvent.relatedTarget) {
                  return;
                }
                if (
                  aEvent.relatedTarget &&
                  aEvent.relatedTarget !== this &&
                  $(this).find(aEvent.relatedTarget).length > 0
                ) {
                  return;
                }
                aInstance.startNavigationContenu();
              },
            });
          },
          getNodeAferToolbar() {
            const lTabElements =
              ObjetHtml_1.GHtml.getElementsFocusablesDElement(this.node);
            lTabElements.forEach(function (aNode, aIndex) {
              $(aNode).attr('tabindex', aIndex === 0 ? 0 : -1);
              $(aNode).on({
                'keyup.listetoolbar'(aEvent) {
                  if (
                    ToucheClavier_1.ToucheClavierUtil.estToucheFleche(
                      aEvent.which,
                    ) ||
                    aEvent.which === ToucheClavier_1.ToucheClavier.Debut ||
                    aEvent.which === ToucheClavier_1.ToucheClavier.Fin
                  ) {
                    aEvent.stopImmediatePropagation();
                    let lNav;
                    switch (aEvent.which) {
                      case ToucheClavier_1.ToucheClavier.FlecheGauche:
                        lNav =
                          ObjetWAI_1.ObjetWAI.ModeRechercheNavigation.prevCycle;
                        break;
                      case ToucheClavier_1.ToucheClavier.FlecheDroite:
                        lNav =
                          ObjetWAI_1.ObjetWAI.ModeRechercheNavigation.nextCycle;
                        break;
                      case ToucheClavier_1.ToucheClavier.Debut:
                        lNav =
                          ObjetWAI_1.ObjetWAI.ModeRechercheNavigation.first;
                        break;
                      case ToucheClavier_1.ToucheClavier.Fin:
                        lNav = ObjetWAI_1.ObjetWAI.ModeRechercheNavigation.last;
                        break;
                      default:
                        return;
                    }
                    const lNextNode =
                      ObjetWAI_1.GObjetWAI.getNodeRechercheNavigation(
                        lTabElements,
                        this,
                        lNav,
                      );
                    this.setAttribute('tabindex', '-1');
                    if (lNextNode) {
                      lNextNode.setAttribute('tabindex', '0');
                      lNextNode.focus();
                    }
                  }
                },
                focusin(aEvent) {
                  if (lTabElements.includes(aEvent.target)) {
                    aEvent.target.setAttribute('tabindex', '0');
                  }
                },
              });
            });
          },
          nodeBtnEnteteLibre: function (aIndex) {
            const lElement = aInstance._cache.boutons[aIndex];
            if (lElement && lElement.html) {
              ObjetHtml_1.GHtml.setHtml(this.node, lElement.html, {
                controleur: lElement.controleur,
              });
            }
          },
          btnCreationEntete: {
            event: function (aEvent) {
              if (aInstance.Donnees.avecEvenementCreation()) {
                aInstance.surCreationEvenement(-1, {
                  nodeBouton: this.node,
                  event: aEvent,
                });
              } else if (
                aInstance.ListeCreations &&
                aInstance.ListeCreations.length === 1
              ) {
                aInstance.surCreationDeb(false, { creationEnFenetre: true });
              } else {
              }
            },
            getDisabled: function () {
              return aInstance._getNonEditable();
            },
          },
          boutonListe: {
            event(aIndex, aEvent) {
              const lBouton = aInstance._cache.boutons[aIndex];
              const lParams = {
                bouton: lBouton,
                event: aEvent,
                liste: aInstance,
                node: this.node,
              };
              lBouton.event(lParams);
            },
            getDisabled(aIndex) {
              const lBouton = aInstance._cache.boutons[aIndex];
              return lBouton.getDisabled
                ? lBouton.getDisabled({
                    bouton: lBouton,
                    node: this.node,
                    liste: aInstance,
                  })
                : false;
            },
            getSelection(aIndex) {
              const lBouton = aInstance._cache.boutons[aIndex];
              return lBouton.getSelection
                ? lBouton.getSelection({
                    bouton: lBouton,
                    node: this.node,
                    liste: aInstance,
                  })
                : false;
            },
            getVisible(aIndex) {
              const lBouton = aInstance._cache.boutons[aIndex];
              if (lBouton.getVisible) {
                return lBouton.getVisible({
                  bouton: lBouton,
                  node: this.node,
                  liste: aInstance,
                });
              }
              return true;
            },
            getClass(aIndex) {
              const lBouton = aInstance._cache.boutons[aIndex];
              if (lBouton.getClass) {
                return lBouton.getClass({
                  bouton: lBouton,
                  node: this.node,
                  liste: aInstance,
                });
              }
              return '';
            },
          },
          getNodeFiltres() {
            const lDonnees = aInstance.Donnees;
            const lHtml = lDonnees._construireFiltres();
            if (lHtml) {
              ObjetHtml_1.GHtml.setHtml(this.node, lHtml, {
                controleur: lDonnees._getControleurFiltres(lDonnees, aInstance),
              });
            }
          },
          btnReinitFiltres: {
            event() {
              aInstance.Donnees.reinitFiltres();
            },
          },
          rechercheTexte: {
            getValue: function () {
              return aInstance.getRechercheTexte();
            },
            setValue: function (aValue) {
              aInstance.setRechercheTexte(aValue);
            },
            node: function () {
              $(this.node).on({
                focusout: function () {
                  if (aInstance._estRechercheTexteVide()) {
                    aInstance._annulerRechercheTexte();
                  }
                },
                keyup: function (aEvent) {
                  if (aEvent.which === ToucheClavier_1.ToucheClavier.Echap) {
                    aInstance._annulerRechercheTexte();
                    aEvent.stopPropagation();
                    return;
                  }
                },
              });
            },
          },
          btnRechercheTexte: {
            event: function () {
              aInstance._annulerRechercheTexte();
            },
          },
          getHtmlResultRecherche() {
            return aInstance._cache.strResultRecherche;
          },
          saisieTexte: {
            getValue: function () {
              return aInstance._valeurEnEdition;
            },
            setValue: function (
              aLigne,
              aColonne,
              aEnCreation,
              aEstNote,
              aEstTextareaMax,
              aIgnorerEventsNode,
              aValue,
            ) {
              aInstance._setValueModel({
                ligne: aLigne,
                colonne: aColonne,
                surCreation: aEnCreation,
                node: this.node,
                value: aValue,
              });
            },
            getNote() {
              return aInstance._valeurEnEdition;
            },
            setNote: function (
              aLigne,
              aColonne,
              aEnCreation,
              aEstNote,
              aEstTextareaMax,
              aIgnorerEventsNode,
              aNote,
            ) {
              if (
                aInstance.optionsInterne.versionMobile &&
                aEstNote &&
                aNote === null &&
                aInstance._cache.finEditionCreation
              ) {
                aInstance._cache.finEditionCreation();
                return;
              }
              aInstance._setValueModel({
                ligne: aLigne,
                colonne: aColonne,
                surCreation: aEnCreation,
                node: this.node,
                value: aNote,
                estNote: aEstNote,
              });
              if (
                aInstance.optionsInterne.versionMobile &&
                aEstNote &&
                aInstance._cache.finEditionCreation
              ) {
                aInstance._cache.finEditionCreation();
              }
            },
            getOptionsNote: function (aLigne, aColonne, aEnCreation) {
              if (aInstance.Donnees) {
                return (
                  aInstance.Donnees.getOptionsNote(
                    aInstance._getParamsCellule(aColonne, aLigne, {
                      surLigneCreation: aEnCreation,
                    }),
                  ) || null
                );
              }
            },
            fromDisplay: function (
              aLigne,
              aColonne,
              aEnCreation,
              aEstNote,
              aEstTextareaMax,
              aIgnorerEventsNode,
              aValue,
            ) {
              if (aEstNote) {
                return aValue;
              }
              const lControle = aInstance.Donnees
                ? aInstance.Donnees.getControleCaracteresInput(
                    aInstance._getParamsCellule(aColonne, aLigne, {
                      surLigneCreation: aEnCreation,
                    }),
                  )
                : null;
              if (lControle && lControle.fromDisplay) {
                aValue = lControle.fromDisplay(aColonne, aLigne, aValue);
              }
              return aValue;
            },
            toDisplay: function (
              aLigne,
              aColonne,
              aEnCreation,
              aEstNote,
              aEstTextareaMax,
              aIgnorerEventsNode,
              aValue,
            ) {
              if (aEstNote) {
                return aValue;
              }
              const lControle = aInstance.Donnees
                ? aInstance.Donnees.getControleCaracteresInput(
                    aInstance._getParamsCellule(aColonne, aLigne, {
                      surLigneCreation: aEnCreation,
                    }),
                  )
                : null;
              if (lControle && lControle.toDisplay) {
                aValue = lControle.toDisplay(aColonne, aLigne, aValue);
              }
              return aValue;
            },
            node(
              aLigne,
              aColonne,
              aEnCreation,
              aEstNote,
              aEstTextareaMax,
              aIgnorerEventsNode,
            ) {
              aInstance._cache.avecModificationSaisie = false;
              const lForceSetNote =
                aEstNote && this.data.forceExitChange
                  ? () => {
                      const lParamsExit = {};
                      this.data.forceExitChange(lParamsExit);
                      if (
                        lParamsExit.resultValidation &&
                        !lParamsExit.resultValidation.estValide
                      ) {
                        if (aEnCreation) {
                          aInstance._annulerCreation();
                        } else {
                          aInstance._surEditionFin({
                            colonne: aInstance._cache.selectionCellule.colonne,
                            ligne: aInstance._cache.selectionCellule.ligne,
                          });
                          if (
                            lParamsExit.resultValidation.promiseMessageErreur
                          ) {
                            lParamsExit.resultValidation.promiseMessageErreur.then(
                              () => {
                                aInstance.demarrerEditionSurCellule(
                                  aInstance._cache.selectionCellule.ligne,
                                  aInstance._cache.selectionCellule.colonne,
                                );
                              },
                            );
                            return { avecMessagerErreur: true };
                          }
                        }
                      }
                    }
                  : null;
              aInstance._cache.finEditionCreation = function () {
                aInstance._cache.finEditionCreation = null;
                if (aEstNote && lForceSetNote) {
                  const lResultSetNote = lForceSetNote();
                  if (lResultSetNote) {
                    return lResultSetNote;
                  }
                }
                const lParams = aInstance._getParamsCellule(aColonne, aLigne, {
                  surEdition: true,
                });
                if (aEnCreation) {
                  aInstance._surCreation(aInstance._valeurEnEdition);
                } else {
                  aInstance._surEdition(
                    lParams,
                    aInstance._valeurEnEdition,
                    aInstance._cache.avecModificationSaisie,
                  );
                }
              };
              aInstance._cache.finEditionCreation.estCreation = aEnCreation;
              if (aIgnorerEventsNode) {
                return;
              }
              $(this.node).on({
                keydown: function (aEvent) {
                  delete aInstance._cache._keyDownSansNavigationFleche;
                  if (
                    aInstance._isToucheRetourChariot(aEvent) ||
                    aEvent.which === ToucheClavier_1.ToucheClavier.Echap ||
                    aEvent.which === ToucheClavier_1.ToucheClavier.Tab
                  ) {
                    if (
                      aEstNote &&
                      lForceSetNote &&
                      aEvent.which !== ToucheClavier_1.ToucheClavier.Echap
                    ) {
                      lForceSetNote();
                    }
                    aEvent.stopPropagation();
                    aEvent.preventDefault();
                    return false;
                  }
                  if (
                    aInstance.Donnees.options
                      .avecNavigationClavierFlechesEnEdition
                  ) {
                    const lNodeName = this.nodeName.toLowerCase();
                    if (
                      (lNodeName === 'input' || lNodeName === 'textarea') &&
                      ((aEvent.which ===
                        ToucheClavier_1.ToucheClavier.FlecheGauche &&
                        !aInstance._estCurseurEnBorneDeSelection(this, true)) ||
                        (aEvent.which ===
                          ToucheClavier_1.ToucheClavier.FlecheDroite &&
                          !aInstance._estCurseurEnBorneDeSelection(
                            this,
                            false,
                          )))
                    ) {
                      aInstance._cache._keyDownSansNavigationFleche = true;
                    }
                  }
                },
                keyup: function (aEvent) {
                  if (
                    aInstance._isToucheRetourChariot(aEvent) ||
                    aEvent.which === ToucheClavier_1.ToucheClavier.Echap ||
                    aEvent.which === ToucheClavier_1.ToucheClavier.Tab
                  ) {
                    if (aEvent.which === ToucheClavier_1.ToucheClavier.Echap) {
                      if (aEnCreation) {
                        aInstance._annulerCreation();
                      } else {
                        aInstance._surEditionFin({
                          colonne: aInstance._cache.selectionCellule.colonne,
                          ligne: aInstance._cache.selectionCellule.ligne,
                        });
                      }
                    } else {
                      if (aEstNote && lForceSetNote) {
                        if (lForceSetNote()) {
                          return;
                        }
                      }
                      const lParams = aInstance._getParamsCellule(
                        aColonne,
                        aLigne,
                        { surEdition: true },
                      );
                      let lParamSelecCelluleSuiv = null;
                      if (
                        aInstance.Donnees.options
                          .avecCelluleSuivanteSurFinEdition
                      ) {
                        lParamSelecCelluleSuiv =
                          aInstance.Donnees.getParametresSelectionnerCelluleSuivanteFinEdition(
                            lParams,
                          );
                        if (lParamSelecCelluleSuiv.entrerEdition) {
                          lParams.sansTriDonnees = true;
                        }
                      }
                      const lFuncSuite = () => {
                        if (
                          aInstance.Donnees.options
                            .avecCelluleSuivanteSurFinEdition
                        ) {
                          aInstance._selectionnerCelluleSuivante(
                            Object.assign(lParams, lParamSelecCelluleSuiv),
                          );
                          if (
                            lParams.sansTriDonnees &&
                            !aInstance._cache.editionEnCours &&
                            !aInstance._cache.editionEnCoursEvenement
                          ) {
                            aInstance._actualiser({
                              conserverSelection: true,
                              zonesActualisation: {
                                contenu: true,
                                total: true,
                              },
                              avecEvenementModificationSelection: false,
                            });
                          }
                        }
                      };
                      if (aEnCreation) {
                        aInstance._surCreation(aInstance._valeurEnEdition);
                        lFuncSuite();
                      } else {
                        const lResult = aInstance._surEdition(
                          lParams,
                          aInstance._valeurEnEdition,
                          aInstance._cache.avecModificationSaisie,
                          aInstance.Donnees.options
                            .avecEvnt_ApresEditionValidationSansModification,
                        );
                        if (lResult && lResult.then) {
                          lResult.then((aError) => {
                            if (aError && aError.annulerEdition) {
                            } else {
                              lFuncSuite();
                            }
                          });
                        } else {
                          lFuncSuite();
                        }
                      }
                    }
                    aEvent.stopPropagation();
                    return false;
                  }
                  if (aInstance._estToucheNavigationFlechesClavier(aEvent)) {
                    if (
                      aInstance.Donnees.options
                        .avecNavigationClavierFlechesEnEdition &&
                      !aInstance._cache._keyDownSansNavigationFleche
                    ) {
                      aInstance._navigationFlechesClavier(
                        aEvent,
                        aInstance._getParamsCellule(aColonne, aLigne, {
                          surEdition: true,
                          node: this,
                          event: aEvent,
                          avecCelluleEditable: true,
                          avecSelection: true,
                          entrerEdition: true,
                        }),
                      );
                    }
                    aEvent.stopPropagation();
                  }
                },
                'blur focusout': function () {
                  if (!aEstTextareaMax && aInstance._cache.finEditionCreation) {
                    aInstance._cache.finEditionCreation();
                  }
                },
                focusout_TextareaMax: function () {
                  if (aEstTextareaMax && aInstance._cache.finEditionCreation) {
                    aInstance._cache.finEditionCreation();
                  }
                },
              });
            },
          },
          getClassCellulePere(aLigne, aColonne) {
            const lParamsCellule = aInstance._getParamsCellule(
              aColonne,
              aLigne,
            );
            return (
              aInstance.Donnees._getClassCelluleConteneur(lParamsCellule) || ''
            );
          },
          attrCellule(aLigne, aColonne, aRoleGrid) {
            const lAttr = {};
            const lParams = aInstance._getParamsCellule(aColonne, aLigne);
            if (aInstance.Donnees.enConstruction_cacheRechercheTexte) {
              return lAttr;
            }
            if (aInstance.Donnees._avecSelection(lParams)) {
              lAttr['aria-selected'] = !!aInstance._etatSelectionCellule({
                ligne: aLigne,
                colonne: aColonne,
              });
            }
            if (
              !aRoleGrid &&
              aInstance.Donnees instanceof
                ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign &&
              aInstance.Donnees.options.avecCocheCBSurLigne &&
              aInstance.Donnees.avecCB(lParams)
            ) {
              const lVal = aInstance._getValueCBFlatDesign(aLigne);
              lAttr['aria-checked'] =
                lVal === ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
                  ? 'mixed'
                  : aInstance._getValueCBFlatDesign(aLigne) === true;
              if (aInstance.Donnees.getDisabledCB(lParams)) {
                lAttr['aria-disabled'] = true;
              } else {
                lAttr['aria-disabled'] = null;
                aInstance._cache.avecWAICocheLigne = true;
              }
            }
            return lAttr;
          },
          modeleSelecFileCellule: {
            getOptionsSelecFile(aLigne, aColonne, aSurCreation, aGetSelecFile) {
              const lParams = aInstance._getParamsCellule(aColonne, aLigne, {
                surCreation: aSurCreation,
              });
              const lOptions = Object.assign(
                {
                  classDrag: 'selecfile_classDrag',
                  classDragHoverSelec: 'selecfile_classDrag_survol',
                },
                aInstance.Donnees.getOptionsSelecFile(lParams),
              );
              if (
                lOptions.eventClick !== false &&
                !aInstance.optionsInterne.versionMobile
              ) {
                aInstance._cache.ouvrirSelecteurFileParLigne[
                  aLigne + '_' + aColonne
                ] = aGetSelecFile();
              }
              return lOptions;
            },
            addFiles(aLigne, aColonne, aSurCreation, aParamsFiles) {
              const lParamsCellule = aInstance._getParamsCellule(
                aColonne,
                aLigne,
                { surCreation: aSurCreation },
              );
              if (aSurCreation && aInstance.ListeCreations.length === 1) {
                aParamsFiles.listeFichiers.parcourir((aFichier) => {
                  aInstance.ajouterElementCreation(aFichier.Libelle, aFichier);
                });
                return true;
              }
              return aInstance.Donnees.evenementSurSelecFile(
                lParamsCellule,
                aParamsFiles,
              );
            },
          },
          btnEllipsisLigne: {
            event: function (aNumeroLigne) {
              const lParams = aInstance._getParamsCellule(-1, aNumeroLigne);
              if (aInstance.Donnees.avecMenuContextuel(lParams)) {
                lParams.node = this.node;
                aInstance._ouvrirMenuContextuel(lParams);
              }
            },
          },
          nodeDeploiementLigne: function (aLigne, aColonne) {
            $(this.node).eventValidation((aEvent) => {
              aInstance.surDeploiement(aEvent, aColonne, aLigne, true);
            });
          },
          cb_ligne_flatDesign: {
            getValue: function (aLigne) {
              const lResult = aInstance._getValueCBFlatDesign(aLigne);
              return lResult === true;
            },
            getIndeterminate: function (aLigne) {
              return (
                aInstance._getValueCBFlatDesign(aLigne) ===
                ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
              );
            },
            setValue: function (aLigne, aValue) {
              let lValue = aValue;
              if (
                aInstance._getValueCBFlatDesign(aLigne) ===
                ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
              ) {
                lValue = !aInstance._getValueCBFlatDesign(aLigne, true);
              }
              aInstance.setValueCBFlatDesignEvent(
                aInstance._getParamsCellule(-1, aLigne),
                lValue,
              );
            },
            getDisabled: function (aLigne) {
              if (aInstance._getNonEditable()) {
                return true;
              }
              if (
                aLigne < 0 &&
                (!aInstance._cache.lignesVisibles ||
                  aInstance._cache.lignesVisibles.length === 0)
              ) {
                return true;
              }
              if (
                aLigne >= 0 &&
                aInstance.Donnees.getDisabledCB(
                  aInstance._getParamsCellule(-1, aLigne),
                )
              ) {
                return true;
              }
              return false;
            },
            getAttr(aLigne) {
              let lLabel = '';
              if (aLigne < 0) {
                if (
                  aInstance._options.avecCBToutCocher ===
                  ObjetListe.typeLibelleCocheCBEntete.vide
                ) {
                  lLabel = $(this.node).hasClass('is-checked')
                    ? 'Tout décocher'
                    : 'Tout cocher';
                } else if (
                  aInstance._options.avecCBToutCocher ===
                    ObjetListe.typeLibelleCocheCBEntete.compteurSelec &&
                  aInstance.getListeArticlesCochees().count() === 0
                ) {
                  lLabel =
                    'Tout cocher';
                }
              } else {
                lLabel =
                  aInstance._getValueCBFlatDesign(aLigne) ===
                  ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte
                    ? 'Décocher la ligne'
                    : 'Cocher la ligne';
              }
              return { 'aria-label': lLabel };
            },
            getHtmlCBEntete() {
              if (
                !aInstance._options.avecCBToutCocher ||
                aInstance._options.avecCBToutCocher ===
                  ObjetListe.typeLibelleCocheCBEntete.vide
              ) {
                return '';
              }
              if (
                typeof aInstance._options.avecCBToutCocher === 'object' &&
                'libelle' in aInstance._options.avecCBToutCocher
              ) {
                return aInstance._options.avecCBToutCocher.libelle || '';
              }
              switch (aInstance._options.avecCBToutCocher) {
                case true:
                case ObjetListe.typeLibelleCocheCBEntete.toutCocher: {
                  return $(this.node).hasClass('is-checked')
                    ? 'Tout décocher'
                    : 'Tout cocher';
                }
                case ObjetListe.typeLibelleCocheCBEntete.compteurSelec: {
                  const lNb = aInstance.getListeArticlesCochees().count();
                  if (lNb <= 0) {
                    return '';
                  }
                  if (lNb === 1) {
                    return '%d élément sélectionné';
                  }
                  return '%d éléments sélectionnés';
                }
              }
              if (
                typeof aInstance._options.avecCBToutCocher === 'object' &&
                'getLibelle' in aInstance._options.avecCBToutCocher
              ) {
                return aInstance._options.avecCBToutCocher.getLibelle() || '';
              }
            },
          },
          cocheTitreClassique: {
            getValue(aColonne) {
              if (aInstance.Donnees) {
                const lEtatCoche = aInstance.Donnees.getEtatCocheSelonFils(
                  null,
                  aInstance._getParamsCellule(aColonne),
                );
                if (
                  lEtatCoche ===
                  ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte
                ) {
                  return true;
                }
              }
              return false;
            },
            setValue(aColonne, aVal) {
              aInstance._clickSurCocheTitre(aColonne);
            },
            getAttr(aColonne) {
              let lTitle = '';
              lTitle =
                'Tout cocher';
              if (aInstance.Donnees) {
                const lEtatCoche = aInstance.Donnees.getEtatCocheSelonFils(
                  null,
                  aInstance._getParamsCellule(aColonne),
                );
                switch (lEtatCoche) {
                  case ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Aucune:
                    lTitle =
                      'Tout cocher';
                    break;
                  case ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte:
                    lTitle =
                      'Tout décocher';
                    break;
                }
              }
              return { title: lTitle, 'aria-label': lTitle };
            },
          },
          nodeGabaritRefresh(aStart, aIndiceInfosColonne) {
            const lCacheRef = aInstance._cache.refresh;
            const lNom = aStart ? 'node_gab_start' : 'node_gab_end';
            if (!lCacheRef[lNom]) {
              lCacheRef[lNom] = {};
            }
            lCacheRef[lNom][aIndiceInfosColonne] = this.node;
            lCacheRef.observer.observe(this.node);
            lCacheRef.mapNodesObs.set(this.node, { gabarit: true });
            $(this.node).on('mousedown', () => {
              aInstance._refreshContenuDynamique();
            });
          },
          nodeObsRange(aStart, aIndiceRange, aIndiceInfosColonnees) {
            const lCacheRef = aInstance._cache.refresh;
            lCacheRef.observer.observe(this.node);
            lCacheRef.mapNodesObs.set(this.node, { gabarit: false });
            let lRange = lCacheRef.mapRangesExist.get(aIndiceRange);
            if (!lRange) {
              lRange = {};
              lCacheRef.mapRangesExist.set(aIndiceRange, lRange);
              lCacheRef.mapRangesExist.min = Math.min(
                aIndiceRange,
                lCacheRef.mapRangesExist.min,
              );
              lCacheRef.mapRangesExist.max = Math.max(
                aIndiceRange,
                lCacheRef.mapRangesExist.max,
              );
            }
            if (aIndiceInfosColonnees === 0) {
              lRange[aStart ? 'node_start' : 'node_end'] = this.node;
            }
            $(this.node).on('destroyed', function () {
              lCacheRef.mapNodesObs.delete(this);
              if (aIndiceInfosColonnees === 0) {
                lCacheRef.mapRangesExist.delete(aIndiceRange);
                let lMin = Number.MAX_VALUE;
                let lMax = -1;
                for (const lKey of lCacheRef.mapRangesExist.keys()) {
                  lMin = Math.min(lKey, lMin);
                  lMax = Math.max(lKey, lMax);
                }
                lCacheRef.mapRangesExist.min = lMin;
                lCacheRef.mapRangesExist.max = lMax;
              }
            });
            if (lCacheRef.structure[aIndiceRange].height < 0) {
              aInstance._actualiserHeightRanges(aIndiceRange);
            }
          },
          nodeTotalFd(aNumeroLigne, aNumeroColonne) {
            $(this.node).on({
              mousedown(aEvent) {
                aInstance._surEventDownLigne({
                  event: aEvent,
                  ligne: aNumeroLigne,
                  colonne: aNumeroColonne,
                });
              },
              click() {
                const lParams = aInstance._getParamsCellule(
                  aNumeroColonne,
                  aNumeroLigne,
                );
                if (aInstance.evenementSelectionClick(lParams)) {
                  return;
                }
              },
              keyup(aEvent) {
                if (
                  ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent)
                ) {
                  aInstance._surSelection(aNumeroColonne, aNumeroLigne, {
                    surInteractionUtilisateur: true,
                  });
                  aInstance.surSelectionEvenement(
                    aNumeroColonne,
                    aNumeroLigne,
                    true,
                  );
                  aInstance._editionDebSurSelection(
                    aNumeroColonne,
                    aNumeroLigne,
                    aEvent,
                  );
                }
              },
            });
          },
          attrTotalFd(aNumeroLigne, aNumeroColonne, aAvecSelection) {
            const lAttrs = {};
            if (aAvecSelection) {
              lAttrs['aria-pressed'] = !!aInstance._etatSelectionCellule({
                ligne: aNumeroLigne,
                colonne: aNumeroColonne,
              });
            }
            return lAttrs;
          },
          getHtmlDescribeTreeGrid() {
            const T = [];
            if (aInstance._cache.avecWAICocheLigne) {
              T.push(
                IE.jsx.str(
                  'span',
                  null,
                  'Modifiez les cases à cocher avec la touche Barre espace',
                ),
              );
            }
            return T.join('');
          },
        };
        return $.extend(true, super.getControleur(aInstance), {
          liste: lControleur,
        });
      }
      recupererDonnees() {
        this._cache.listeNonInitialisee = true;
      }
      _ouvrirFenetreParametrageColonnes() {}
      _preparerBoutons(aParams) {
        this._cache.boutons = [];
        if (this._options.boutons && this._options.boutons.forEach) {
          this._options.boutons.forEach((aBouton) => {
            if (!aBouton) {
              return;
            }
            if (aBouton.html) {
              this._cache.boutons.push(aBouton);
              return;
            }
            const lBouton = {
              event: null,
              getDisabled: null,
              getSelection: null,
              estBoutonPiedFlottant_mobile: false,
              class: '',
              title: '',
              id: this.Nom + '_btnliste_' + this._cache.boutons.length,
            };
            switch (aBouton.genre) {
              case ObjetListe.typeBouton.monter:
                lBouton.class = 'icon_chevron_up';
                lBouton.title = 'Monter';
                lBouton.getDisabled = () => {
                  if (
                    !this.Donnees ||
                    this.getListeElementsSelection().count() !== 1 ||
                    this._getNonEditable()
                  ) {
                    return true;
                  }
                  const lParamsCelluleSource = this._getParamsCellule(
                    -1,
                    this.getSelection(),
                  );
                  const lParamsCelluleDest =
                    this._rechercheDeplacementPrecedenteSuivant(
                      lParamsCelluleSource,
                      false,
                    );
                  return !lParamsCelluleDest || !lParamsCelluleDest.article;
                };
                lBouton.event = () => {
                  const lParamsCelluleSource = this._getParamsCellule(
                    -1,
                    this.getSelection(),
                  );
                  const lParamsCelluleDest =
                    this._rechercheDeplacementPrecedenteSuivant(
                      lParamsCelluleSource,
                      false,
                    );
                  if (lParamsCelluleDest) {
                    this._surDeplacementLigneSurAutreLigne(
                      lParamsCelluleDest,
                      lParamsCelluleSource,
                    );
                  }
                };
                break;
              case ObjetListe.typeBouton.descendre:
                lBouton.class = 'icon_chevron_down';
                lBouton.title = 'Descendre';
                lBouton.getDisabled = () => {
                  if (
                    !this.Donnees ||
                    this.getListeElementsSelection().count() !== 1 ||
                    this._getNonEditable()
                  ) {
                    return true;
                  }
                  const lParamsCelluleSource = this._getParamsCellule(
                    -1,
                    this.getSelection(),
                  );
                  const lParamsCelluleDest =
                    this._rechercheDeplacementPrecedenteSuivant(
                      lParamsCelluleSource,
                      true,
                    );
                  return !lParamsCelluleDest || !lParamsCelluleDest.article;
                };
                lBouton.event = () => {
                  const lParamsCelluleSource = this._getParamsCellule(
                    -1,
                    this.getSelection(),
                  );
                  const lParamsCelluleDest =
                    this._rechercheDeplacementPrecedenteSuivant(
                      lParamsCelluleSource,
                      true,
                    );
                  if (lParamsCelluleDest) {
                    this._surDeplacementLigneSurAutreLigne(
                      lParamsCelluleDest,
                      lParamsCelluleSource,
                    );
                  }
                };
                break;
              case ObjetListe.typeBouton.deployer:
                if (
                  aBouton.cacherSansDeploiement === true &&
                  !this._existeDeploiementDansListe()
                ) {
                  return false;
                }
                lBouton.deploye = null;
                lBouton.class = 'btn-deploiement-entete defaut';
                lBouton.title = 'Tout réduire / Tout déployer';
                lBouton.getDisabled = () => {
                  return (
                    this._avecDeploiementDesactive() ||
                    !this._existeDeploiementDansListe()
                  );
                };
                lBouton.getClass = (aParam) => {
                  let lEstDeploye = false;
                  if (
                    aParam.bouton.deploye === false ||
                    aParam.bouton.deploye === true
                  ) {
                    lEstDeploye = aParam.bouton.deploye;
                  } else {
                    lEstDeploye = this._getBoutonDeploye();
                  }
                  return lEstDeploye
                    ? 'icon_fleche_num_bas'
                    : 'icon_fleche_num';
                };
                lBouton.event = (aParam) => {
                  if (
                    aParam.bouton.deploye === false ||
                    aParam.bouton.deploye === true
                  ) {
                    aParam.bouton.deploye = !aParam.bouton.deploye;
                  } else {
                    aParam.bouton.deploye = !this._getBoutonDeploye();
                  }
                  if (this.Donnees && this.Donnees.Donnees) {
                    let lAvecModif = false;
                    this.Donnees.Donnees.parcourir((aElement, aLigne) => {
                      const lParams = this._getParamsCellule(-1, aLigne);
                      if (
                        this.Donnees.estUnDeploiement(lParams) &&
                        this._estLigneVisible(aLigne)
                      ) {
                        if (
                          this.Donnees._estDeploye(aLigne) ===
                          aParam.bouton.deploye
                        ) {
                          return;
                        }
                        lAvecModif = true;
                        this.Donnees.surDeploiement(-1, aLigne, aElement);
                        if (this.Donnees.avecEvenementDeploiement(lParams)) {
                          this.callback.appel(
                            this._getParamsCallback(
                              Enumere_EvenementListe_1.EGenreEvenementListe
                                .Deploiement,
                              -1,
                              aLigne,
                            ),
                            Enumere_EvenementListe_1.EGenreEvenementListe
                              .Deploiement,
                            -1,
                            aLigne,
                          );
                          this._refreshSelf();
                        }
                      }
                    });
                    if (lAvecModif) {
                      this._actualiser({
                        conserverSelection: true,
                        sansTriDonnees: true,
                        zonesActualisation: { contenu: true },
                      });
                      if (aParam.bouton.deploye === this._getBoutonDeploye()) {
                        aParam.bouton.deploye = null;
                      } else {
                      }
                    }
                  }
                };
                break;
              case ObjetListe.typeBouton.supprimer:
                lBouton.class = 'icon_trash';
                lBouton.title =
                  'Supprimer';
                lBouton.getDisabled = (aParam) => {
                  return !this._avecSuppressionSelectionCourante(
                    this._cache.selectionCellule.ligne,
                    this._cache.selectionCellule.colonne,
                  );
                };
                lBouton.event = (aParam) => {
                  this._surSuppression();
                };
                break;
              case ObjetListe.typeBouton.editer:
                lBouton.class = 'icon_pencil';
                lBouton.title =
                  'Modifier';
                lBouton.getDisabled = () => {
                  if (
                    this._getNonEditable() ||
                    this._cache.editionEnCours ||
                    !this.Donnees
                  ) {
                    return true;
                  }
                  const lParams = this._getParamsCellule(
                    this._cache.selectionCellule.colonne,
                    this._cache.selectionCellule.ligne,
                    { surEdition: true },
                  );
                  return !this.Donnees.avecEdition(lParams);
                };
                lBouton.event = (aParam) => {
                  this.demarrerEditionSurCellule(
                    this._cache.selectionCellule.ligne,
                    this._cache.selectionCellule.colonne,
                  );
                };
                break;
              case ObjetListe.typeBouton.filtrer: {
                Object.assign(lBouton, {
                  class: 'icon_filtre',
                  title:
                    'Filtrer la liste',
                  event: async (aParams) => {
                    this._options.avecFiltresVisibles =
                      !this._options.avecFiltresVisibles;
                    this._actualiser({
                      conserverSelection: true,
                      sansTriDonnees: true,
                      conserverPositionScroll: false,
                    });
                    ObjetHtml_1.GHtml.setFocus(aParams.node.id, true);
                  },
                  getVisible: () => {
                    return true;
                  },
                  getSelection: () => {
                    return !!this._options.avecFiltresVisibles;
                  },
                  getDisabled: () => {
                    return !(this.Donnees && this.Donnees.construireFiltres);
                  },
                  getClass: () => {
                    if (
                      this.Donnees &&
                      this.Donnees.estFiltresParDefaut &&
                      !this.Donnees.estFiltresParDefaut()
                    ) {
                      return 'mix-icon_rond i-orange';
                    }
                    return '';
                  },
                });
                break;
              }
              case ObjetListe.typeBouton.parametrer:
                lBouton.class = 'icon_wrench';
                lBouton.title = 'Paramétrer';
                lBouton.event = (aParam) => {
                  this._ouvrirFenetreParametrageColonnes();
                };
                lBouton.getDisabled = function () {
                  return false;
                };
                break;
              case ObjetListe.typeBouton.exportCSV:
                if (aParams && aParams.createExportCSV) {
                  aParams.createExportCSV(lBouton);
                } else {
                  return;
                }
                break;
              case ObjetListe.typeBouton.rechercher:
                lBouton.class = 'icon_search';
                lBouton.title =
                  'Rechercher dans la liste';
                lBouton.widthInput = 0;
                lBouton.getDisabled = () => {
                  return this._cache.lignesVisibles.length === 0;
                };
                lBouton.event = () => {
                  this._creerZoneRechercheTexte(true);
                };
                break;
            }
            Object.assign(lBouton, aBouton);
            if (!lBouton.class && !lBouton.getClass) {
              return;
            }
            if (!lBouton.event) {
              return;
            }
            this._cache.boutons.push(lBouton);
          });
        }
      }
      _getInfosZonesColonnes(aCache) {}
      _construireAffichage() {
        return '';
      }
      construireAffichage(aParamsActualiser) {
        this._cache.survoleTitreTriVisible = false;
        this._cache.ouvrirSelecteurFileParLigne = {};
        this._cache.avecWAICocheLigne = false;
        this._cache.gridTotalAccess = { nav: null, ordres: [] };
        if (!ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
          return '';
        }
        if (!this._cache.largeurPage && this._cache.avecPourcentage) {
          return '';
        }
        if (!this.ListeTailles || this.ListeTailles.length === 0) {
          return '';
        }
        if (this._options.avecListeNeutre === undefined) {
          this._options.avecListeNeutre =
            $('#' + this.Nom.escapeJQ()).parents(
              '#' + IEZoneFenetre_1.ZoneFenetre.idZoneFenetre.escapeJQ(),
            ).length > 0;
          this._options.couleursListe = this._options.avecListeNeutre
            ? GCouleur.listeNeutre
            : GCouleur.liste;
        }
        this._initCacheLignes(aParamsActualiser);
        return this._construireAffichage();
      }
      composeWAICommun() {
        return IE.jsx.str(
          'span',
          { class: 'sr-only', 'aria-hidden': 'true' },
          IE.jsx.str(
            'span',
            { class: 'sr-only', id: this.ids.WAICelluleEditable },
            ObjetWAI_1.GObjetWAI.getInfo(ObjetWAI_1.EGenreObjet.AvecEdition),
          ),
          IE.jsx.str('span', {
            class: 'sr-only',
            id: this.ids.WAIDescribeTreeGrid,
            'ie-html': 'liste.getHtmlDescribeTreeGrid',
          }),
          IE.jsx.str(
            'span',
            { class: 'sr-only', id: this.ids.WAIDescribeTri },
            'Déplacez le(s) tri(s) avec les flèches gauche et droite, changez l'ordre de tri avec touches Entrée ou Barre espace',
          ),
          IE.jsx.str(
            'span',
            { class: 'sr-only', id: this.ids.WAIDescribeTreeGridTotal },
            'Total',
          ),
          IE.jsx.str(
            'span',
            { class: 'sr-only', id: this.ids.WAILigneLue },
            'Lu',
          ),
        );
      }
      _composeImpression(aProportion) {
        return '';
      }
      _gererModificationsColonnes() {
        this._cache.listeCorrespondancesColonnes = [];
      }
      _backupScroll(aParams) {
        return null;
      }
      _setScroll(aBackupScroll, aSurResizeHeightContenu) {}
      _construireContenuRange(aInfosColonnes, aIndiceRange) {}
      _controleHeightLigne() {}
      _setStyleCellule(aId, aColonne, aLigne, aSelectionne, aCreation) {
        if (aId) {
          const lJCellule = ObjetHtml_1.GHtml.estElement(aId)
            ? $(aId)
            : $('#' + aId.escapeJQ());
          if (aSelectionne) {
            lJCellule.addClass('selected');
          } else {
            lJCellule.removeClass('selected');
          }
        }
      }
      _ouvrirMenuContextuel(aParams) {
        let lId;
        let lRect;
        if (aParams.surLigneCreation) {
          let lIdLigneCreation = '';
          if (this._options.avecCreationEnBoutonDesignClassique) {
            lIdLigneCreation = this.ids.btnCreation;
          } else {
            lIdLigneCreation = this._getIdCreation(
              this._cache.infosZonesColonnes[0]
                ? this._cache.infosZonesColonnes[0].colonnesVisibles[0]
                : 0,
              aParams.ligne,
            );
            if (!ObjetHtml_1.GHtml.getElement(lIdLigneCreation)) {
              lIdLigneCreation = this._getIdCreation(
                this.ListeCreations[0],
                aParams.ligne,
              );
            }
          }
          lRect = ObjetPosition_1.GPosition.getClientRect(lIdLigneCreation);
          lId = {
            x: lRect.x,
            y: this._options.avecCreationEnBoutonDesignClassique
              ? lRect.bottom + 5
              : lRect.y,
          };
        }
        if (aParams.node) {
          lRect = ObjetPosition_1.GPosition.getClientRect(aParams.node);
          lId = { x: lRect.x, y: lRect.bottom + 5 };
        } else if (aParams.event && aParams.event.type === 'contextmenu') {
          lId = { x: aParams.event.pageX + 5, y: aParams.event.pageY + 5 };
        }
        const lParametres = Object.assign(
          {
            id: lId,
            avecCreation: this._options.avecLigneCreation,
            nonEditable: this._getNonEditable(),
            avecSuppression: this._options.AvecSuppression,
            listeSelection: this._getListeElementsSelection(),
            tableauSelection: this.getTableauCellulesSelection(),
            copier: this.optionsInterne.copierCellule,
            coller: this.optionsInterne.collerCellule,
            liste: this,
          },
          aParams,
        );
        ObjetMenuContextuel_1.ObjetMenuContextuel.afficher({
          pere: this,
          evenement: this._evenementMenuContextuel.bind(this, lParametres),
          initCommandes: function (aInstance) {
            this.Donnees.initialisationObjetContextuel(
              Object.assign({ menuContextuel: aInstance }, lParametres),
            );
          },
          affichageSurInitCommandes: true,
          surKeyPress: (aEvent) => {
            if (
              this.Pere &&
              this.Evenement &&
              this.Donnees &&
              this.Donnees.options &&
              this.Donnees.options.avecEvnt_KeyPressListe
            ) {
              const lResult = this.callback.appel({
                instance: this,
                event: aEvent,
                genreEvenement:
                  Enumere_EvenementListe_1.EGenreEvenementListe.KeyPressListe,
              });
              this._refreshSelf();
              return lResult;
            }
            return false;
          },
          surKeyUp: (aEvent) => {
            if (
              this.Pere &&
              this.Evenement &&
              this.Donnees &&
              this.Donnees.options &&
              this.Donnees.options.avecEvnt_KeyUpListe
            ) {
              const lResult = this.callback.appel({
                instance: this,
                event: aEvent,
                genreEvenement:
                  Enumere_EvenementListe_1.EGenreEvenementListe.KeyUpListe,
              });
              this._refreshSelf();
              return lResult;
            }
            return false;
          },
          options: { preventScrollSurRestaurationFocus: true },
        });
      }
      _entrerDateCalendrier(aParams) {}
      _testUnitaireGetIdCreation(I, J) {
        return this._getIdCreation(I, J);
      }
      getIdCelluleTotal(aColonne, aLigne, aPourCell) {
        return `${this.Nom}_CelluleTotal_${aColonne}_${aLigne}${aPourCell ? '_cell' : ''}`;
      }
      static initColonne(aPourcentage, aMinPx, aMaxPx) {
        return { valeur: aPourcentage, min: aMinPx, max: aMaxPx };
      }
      static getTitreCreation(aTitre) {
        const T = [];
        T.push(
          `<i class="icon_plus_cercle liste-creation" role="presentation"></i>`,
        );
        T.push(
          '<div class="EspaceGauche InlineBlock AlignementMilieuVertical" style="',
          ObjetStyle_1.GStyle.composeCouleurTexte(GCouleur.texteListeCreation),
          '">',
          aTitre,
          '</div>',
        );
        return T.join('');
      }
      _setRechercheSaisie(aVal) {
        this._cache.rechercheTexte.saisie = aVal || '';
      }
      _setOptionsListe(aOptions, aAvecActualisation) {
        if (aOptions && aOptions.skin) {
          this._affecterOptionsSkin(aOptions);
        }
        if (aOptions.colonnesCachees) {
          this._options.colonnesCachees = [];
        }
        $.extend(this._options, aOptions);
        if (aOptions && aOptions.colonnes) {
          this._cache.declarationsColonnes = [].concat(aOptions.colonnes);
          this._cache.colonnes.listeIds = [];
          this._cache.colonnes.listeTailles = [];
          this._cache.declColonnesByIds = {};
          const lControleIds = {};
          let lIndex = 0;
          for (const aIndex in aOptions.colonnes) {
            const D = aOptions.colonnes[aIndex];
            if (!D) {
              continue;
            }
            if (D.id === undefined) {
              D.id = aIndex.toString();
            }
            lControleIds[D.id] = true;
            this._cache.colonnes.listeIds[lIndex] = D.id;
            this._cache.colonnes.listeTailles[lIndex] = D.taille || 0;
            this._cache.declColonnesByIds[D.id] = D;
            lIndex += 1;
          }
        }
        this._options.couleursListe = this._options.avecListeNeutre
          ? GCouleur.listeNeutre
          : GCouleur.liste;
        this._cache.calculsPreRenduAFaire = true;
        this._cache.calculsTailleColonnesAFaire = true;
        if (aAvecActualisation === true) {
          this._actualiser({ conserverSelection: true, sansTriDonnees: true });
        }
        return this;
      }
      _affecterOptionsSkin(aOptions) {
        switch (aOptions.skin) {
          case ObjetListe.skin.classique:
            break;
          case ObjetListe.skin.alternance:
            Object.assign(this._options, {
              alternanceCouleurLigneContenu: true,
              avecCouleurAlternanceParDefaut: true,
              avecTraitSeparationDeploiementAlternance: true,
              avecCadreSelection: false,
              ignorerCouleurInlineCellule: false,
              hauteurAdapteContenu: true,
              nonEditable: true,
            });
            break;
          case ObjetListe.skin.flatDesign:
            if (!aOptions.colonnes) {
              aOptions.colonnes = [{ taille: '100%' }];
            }
            Object.assign(this._options, {
              nonEditable: false,
              AvecSuppression: false,
              positionBoutons: NSListe.positionBoutons.entete,
              avecCadreSelection: false,
              paddingCelluleLR: 1,
              paddingCelluleTB: 1,
              borduresCellule_horizontal: 0,
              borduresCellule_vertical: 0,
              borduresContenu_top: 0,
              borduresContenu_bottom: 0,
              borduresContenu_left: 0,
              borduresContenu_right: 0,
              paddingContenu_LR: this.optionsInterne.versionMobile ? 0 : 3,
              ignorerCouleurInlineCellule: true,
            });
            break;
          default:
        }
      }
      _getValueCBFlatDesign(aLigne, aIgnorerCBDisabled) {
        if (!this.Donnees) {
          return false;
        }
        const lParams = this._getParamsCellule(-1, aLigne);
        const LDonneesListe = this.Donnees;
        return LDonneesListe.getEtatCocheSelonFils(
          lParams.article,
          lParams,
          (aParamsCellule) => {
            return (
              !this._cache.rechercheTexte.lignesCachees[aParamsCellule.ligne] &&
              LDonneesListe.avecCB(aParamsCellule) &&
              (!aIgnorerCBDisabled ||
                !LDonneesListe.getDisabledCB(aParamsCellule))
            );
          },
          aLigne === -1,
        );
      }
      _setValueCBFlatDesign(aParams, aValue, aParentCocheTout) {
        const LDonneesListe = this.Donnees;
        if (!aParams.article && aParams.ligne >= 0) {
          return false;
        }
        if (aParams.ligne >= 0 && LDonneesListe.getDisabledCB(aParams)) {
          return false;
        }
        let lLigneCacheeRecherche = !!(
          aParams.article &&
          this._cache.rechercheTexte.lignesCachees[aParams.ligne]
        );
        if (
          aParams.article &&
          (!aParams.article.estUnDeploiement ||
            !LDonneesListe.estCocheSelonFilsSurLigneDeploiement(
              aParams.article,
            )) &&
          LDonneesListe.avecCB(aParams) &&
          !lLigneCacheeRecherche
        ) {
          LDonneesListe.setValueCB(aParams, aValue);
        }
        if (
          !aParams.article ||
          aParentCocheTout ||
          LDonneesListe.estCocheSelonFilsSurLigneDeploiement(aParams.article)
        ) {
          LDonneesListe.getArrayFilsVisiblesDePere(aParams.article).forEach(
            (aElementParcours) => {
              const lParams = Object.assign({}, aParams, aElementParcours);
              this._setValueCBFlatDesign(lParams, aValue, !aParams.article);
            },
          );
        }
      }
      setValueCBFlatDesignEvent(aParams, aValue) {
        const lResult = this._setValueCBFlatDesign(aParams, aValue);
        if (
          this.Donnees.options.avecEvnt_CB &&
          this.Evenement &&
          lResult !== false
        ) {
          this.callback.appel(
            this._getParamsCallback(
              Enumere_EvenementListe_1.EGenreEvenementListe.ModificationCBLigne,
              -1,
              aParams.ligne,
              { listeCochees: this.getListeArticlesCochees() },
            ),
            Enumere_EvenementListe_1.EGenreEvenementListe.ModificationCBLigne,
            -1,
            aParams.ligne,
          );
          this._refreshSelf();
        }
      }
      _modifierCBLigneFlatDesign(aParams) {
        this.setValueCBFlatDesignEvent(
          aParams,
          !this._getValueCBFlatDesign(aParams.ligne, true),
        );
        this._refreshSelf();
      }
      async _clickSurCocheTitre(aColonne) {
        const lDonneesListe = this.Donnees;
        if (!lDonneesListe) {
          return;
        }
        if (this._getNonEditable() || this._cache.editionEnCours) {
          return;
        }
        const lEtatCoche = lDonneesListe.getEtatCocheSelonFils(
            null,
            this._getParamsCellule(aColonne),
          ),
          lValeur =
            lEtatCoche !==
            ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte,
          lLignes = lDonneesListe.getTableauLignesModifieesCocheTitre(
            aColonne,
            lValeur,
          );
        let lParams;
        const lListeParamsCellules = [];
        for (let i = 0; i < lLignes.length; i++) {
          lParams = this._getParamsCellule(aColonne, lLignes[i]);
          if (
            lParams.article &&
            lDonneesListe.avecEdition(lParams) &&
            !lDonneesListe.editionRefusee(lParams)
          ) {
            lListeParamsCellules.push(lParams);
          }
        }
        await lDonneesListe.surEditionCocheTitre(lListeParamsCellules, lValeur);
        this._actualiser({
          conserverSelection: true,
          zonesActualisation: { contenu: true, total: true },
        });
        this.surApresEditionEvenement(
          this._getParamsCellule(aColonne, -1, { avecModification: true }),
        );
        this._refreshSelf();
      }
      _getNonEditable() {
        return (
          !this.Donnees ||
          this._options.nonEditable ||
          (this._options.nonEditableSurModeExclusif &&
            GApplication.getModeExclusif())
        );
      }
      _isToucheRetourChariot(aEvent) {
        return (
          aEvent &&
          aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot &&
          !aEvent.shiftKey &&
          !aEvent.altKey &&
          !aEvent.ctrlKey
        );
      }
      _estCurseurEnBorneDeSelection(aElement, aDebut) {
        if (aElement) {
          if (document.selection) {
            const LCurseurCourant = document.selection.createRange();
            const LCurseurElement = aElement.createTextRange();
            LCurseurElement.collapse(true);
            return (
              LCurseurCourant.boundingWidth === 0 &&
              LCurseurCourant.boundingLeft === LCurseurElement.boundingLeft
            );
          }
          if (
            aElement.selectionStart !== null &&
            aElement.selectionStart !== undefined &&
            aElement.selectionStart === aElement.selectionEnd
          ) {
            return aDebut
              ? aElement.selectionStart === 0
              : aElement.selectionStart === aElement.value.length;
          }
        }
        return false;
      }
      _navigationFlechesClavier(aEvent, aParams) {
        if (!this._estToucheNavigationFlechesClavier(aEvent)) {
          return;
        }
        if (
          aEvent.target &&
          aEvent.target.closest(`#${this.Nom.escapeJQ()} .ObjetSaisie`)
        ) {
          return;
        }
        if (
          aEvent.target &&
          aEvent.target.matches &&
          aEvent.target.matches('input[type="radio"]') &&
          ToucheClavier_1.ToucheClavierUtil.estToucheFleche(aEvent.which)
        ) {
          return;
        }
        const lParam = Object.assign(
          {
            ligne: this._cache.selectionCellule.ligne,
            colonne: this._cache.selectionCellule.colonne,
            orientationVerticale: false,
            sensInverse: false,
            avecSelection:
              this.Donnees.options.avecSelectionSurNavigationClavier,
            entrerEdition: false,
          },
          aParams,
        );
        switch (aEvent.which) {
          case ToucheClavier_1.ToucheClavier.FlecheHaut: {
            lParam.sensInverse = true;
            lParam.orientationVerticale = true;
            break;
          }
          case ToucheClavier_1.ToucheClavier.FlecheBas: {
            lParam.orientationVerticale = true;
            break;
          }
          case ToucheClavier_1.ToucheClavier.Debut: {
            if (aEvent.ctrlKey || this.ListeTailles.length === 1) {
              lParam.ligne = -1;
              lParam.sensInverse = false;
              lParam.orientationVerticale = true;
            } else {
              lParam.colonne = -1;
              lParam.sensInverse = false;
              lParam.orientationVerticale = false;
            }
            break;
          }
          case ToucheClavier_1.ToucheClavier.Fin: {
            if (aEvent.ctrlKey || this.ListeTailles.length === 1) {
              lParam.ligne = this.Donnees.Donnees.count();
              lParam.sensInverse = true;
              lParam.orientationVerticale = true;
            } else {
              lParam.colonne = this.ListeTailles.length;
              lParam.sensInverse = true;
              lParam.orientationVerticale = false;
            }
            break;
          }
          case ToucheClavier_1.ToucheClavier.PageBas: {
            const lIndexLigneVisible = this._cache.lignesVisibles.indexOf(
              lParam.ligne,
            );
            let lLigne = this.Donnees.Donnees.count();
            if (
              lIndexLigneVisible >= 0 &&
              lIndexLigneVisible + 11 < this._cache.lignesVisibles.length
            ) {
              lLigne = this._cache.lignesVisibles[lIndexLigneVisible + 11];
            }
            Object.assign(lParam, {
              orientationVerticale: true,
              sensInverse: true,
              ligneEtColonneFixe: true,
              ligne: lLigne,
            });
            break;
          }
          case ToucheClavier_1.ToucheClavier.PageHaut: {
            const lIndexLigneVisible = this._cache.lignesVisibles.indexOf(
              lParam.ligne,
            );
            let lLigne = -1;
            if (lIndexLigneVisible >= 0 && lIndexLigneVisible - 11 >= 0) {
              lLigne = this._cache.lignesVisibles[lIndexLigneVisible - 11];
            }
            Object.assign(lParam, {
              orientationVerticale: true,
              sensInverse: false,
              ligneEtColonneFixe: true,
              ligne: lLigne,
            });
            break;
          }
          case ToucheClavier_1.ToucheClavier.FlecheGauche: {
            lParam.sensInverse = true;
            if (!this._estRoleTreeGrid()) {
              if (lParam.entrerEdition) {
                return;
              }
              const lParamsCellule = this._getParamsCellule(-1, lParam.ligne);
              if (
                this.Donnees.estUnDeploiement(lParamsCellule) &&
                this.Donnees._estDeploye(lParam.ligne)
              ) {
                this.surDeploiement(aEvent, lParam.colonne, lParam.ligne, true);
                return;
              }
              if (lParamsCellule.article && lParamsCellule.article.pere) {
                const lStruct =
                  this._cache.structArborescenceLignes[
                    this._cache.lignesVisibles.indexOf(lParamsCellule.ligne)
                  ];
                if (lStruct && lStruct.paramLigneParent) {
                  Object.assign(lParam, {
                    ligne: lStruct.paramLigneParent.ligne,
                    sansRecherche: true,
                  });
                }
              } else {
                return;
              }
            }
            break;
          }
          case ToucheClavier_1.ToucheClavier.FlecheDroite: {
            if (!this._estRoleTreeGrid()) {
              if (lParam.entrerEdition) {
                return;
              }
              const lParamsCellule = this._getParamsCellule(-1, lParam.ligne);
              if (
                this.Donnees.estUnDeploiement(lParamsCellule) &&
                !this.Donnees._estDeploye(lParam.ligne)
              ) {
                this.surDeploiement(aEvent, lParam.colonne, lParam.ligne, true);
                return;
              }
              const lNumeroLigne =
                this._cache.lignesVisibles[
                  this._cache.lignesVisibles.indexOf(lParamsCellule.ligne) + 1
                ];
              const lParamsCelluleFils = this._getParamsCellule(
                -1,
                lNumeroLigne,
              );
              if (
                lParamsCelluleFils.article &&
                lParamsCelluleFils.article.pere === lParamsCellule.article
              ) {
                Object.assign(lParam, {
                  ligne: lParamsCelluleFils.ligne,
                  sansRecherche: true,
                });
              } else {
                return;
              }
            }
            break;
          }
        }
        if (lParam.entrerEdition) {
          this._selectionnerCelluleSuivante(lParam);
        } else {
          this._navigationCelluleSuivante(lParam);
        }
      }
      _estToucheNavigationFlechesClavier(aEvent) {
        return (
          !!aEvent &&
          (ToucheClavier_1.ToucheClavierUtil.estToucheFleche(aEvent.which) ||
            aEvent.which === ToucheClavier_1.ToucheClavier.Fin ||
            aEvent.which === ToucheClavier_1.ToucheClavier.Debut ||
            aEvent.which === ToucheClavier_1.ToucheClavier.PageBas ||
            aEvent.which === ToucheClavier_1.ToucheClavier.PageHaut)
        );
      }
      _getLeftCurseurTri(aPositionColonne, aDerniereColonneDeBloc) {
        return (
          aPositionColonne.left +
          Math.round(aPositionColonne.width / 2 - this._options.widthTri / 2) +
          (aDerniereColonneDeBloc ? 0 : 1)
        );
      }
      _positionnerCurseurTri(aInfosZonesColonnes, aNode, aNumeroTri) {
        const lNumeroColonne = this._triCourant.colonne[aNumeroTri],
          lPosition = aInfosZonesColonnes.gabaritColonnesTitre[lNumeroColonne],
          lDerniereColonne =
            lNumeroColonne ===
            aInfosZonesColonnes.colonnesVisibles[
              aInfosZonesColonnes.colonnesVisibles.length - 1
            ];
        if (!lPosition) {
          $(aNode)
            .attr('tabindex', '-1')
            .addClass('sr-only')
            .parent()
            .attr('aria-hidden', 'true');
        } else {
          $(aNode)
            .attr('tabindex', '0')
            .removeClass('sr-only')
            .css(
              'left',
              this._getLeftCurseurTri(lPosition, lDerniereColonne) + 'px',
            )
            .parent()
            .attr('aria-hidden', null);
        }
      }
      _avecBoutonsListeHautScroll() {
        return (
          this._cache.boutons &&
          this._cache.boutons.length > 0 &&
          this._options.positionBoutons === NSListe.positionBoutons.hautScroll
        );
      }
      _getTabBoutonsEnteteOuPiedFD(aPourEntete) {
        const lTab = [];
        if (
          this._cache.boutons &&
          this._cache.boutons.length > 0 &&
          this._options.positionBoutons === NSListe.positionBoutons.entete
        ) {
          this._cache.boutons.forEach((aBouton, aIndex) => {
            if (aBouton) {
              const lPiedMobile =
                this.optionsInterne.versionMobile &&
                aBouton.estBoutonPiedFlottant_mobile;
              if (
                (!aPourEntete && lPiedMobile) ||
                (aPourEntete && !lPiedMobile)
              ) {
                lTab.push({ bouton: aBouton, index: aIndex });
              }
            }
          });
        }
        return lTab;
      }
      _initCacheLignes(aParamsActualiser) {
        const lParamsActualiser = Object.assign(
          { initCacheDyn: true },
          aParamsActualiser,
        );
        const lCache = this._cache;
        lCache.lignesFusionParColonne = {};
        if (this.Donnees) {
          this.Donnees.lignesFusionParColonne = lCache.lignesFusionParColonne;
        }
        if (!lParamsActualiser || !lParamsActualiser.estFiltreRechercheTexte) {
          lCache.rechercheTexte.textesParLigne = null;
          lCache.rechercheTexte.lignesCachees = [];
        }
        lCache.lignesVisibles = [];
        lCache.lignesVisiblesSansRechercheTexte = [];
        lCache.strResultRecherche = '';
        lCache.structArborescenceLignes = [];
        if (this.ListeTailles && this.Donnees) {
          for (let J = 0, lNb = this.Donnees.getNbrLignes(); J < lNb; J++) {
            if (this.Donnees.estVisible(J)) {
              lCache.lignesVisiblesSansRechercheTexte.push(J);
              lCache.lignesVisibles.push(J);
            }
          }
          if (lParamsActualiser && lParamsActualiser.estFiltreRechercheTexte) {
            lCache.lignesVisibles = [];
            lCache.lignesVisiblesSansRechercheTexte.forEach((aLigne) => {
              if (!lCache.rechercheTexte.lignesCachees[aLigne]) {
                lCache.lignesVisibles.push(aLigne);
              }
            });
          }
          const lTabProfondeur = [{ level: 0, count: 0 }];
          lCache.lignesVisibles.forEach((aLigneDonnees) => {
            const lParamCelluleLigne = this._getParamsCellule(
              -1,
              aLigneDonnees,
            );
            const lStructPrec =
              lCache.structArborescenceLignes.length > 0
                ? lCache.structArborescenceLignes[
                    lCache.structArborescenceLignes.length - 1
                  ]
                : null;
            let lProfondeur = 1;
            let lArticleRechercheProfondeur = lParamCelluleLigne.article;
            while (
              lArticleRechercheProfondeur &&
              lArticleRechercheProfondeur.pere
            ) {
              lProfondeur += 1;
              lArticleRechercheProfondeur = lArticleRechercheProfondeur.pere;
            }
            let lInfosProfondeurParent = lTabProfondeur[lProfondeur - 1];
            if (
              !lInfosProfondeurParent ||
              (lProfondeur > 1 &&
                lStructPrec &&
                lProfondeur > lStructPrec.level)
            ) {
              lInfosProfondeurParent = {
                count: 0,
                paramsLigne: lStructPrec ? lStructPrec.paramsLigne : null,
              };
              if (lStructPrec) {
                lStructPrec.avecFilsVisible = true;
              }
              lTabProfondeur[lProfondeur - 1] = lInfosProfondeurParent;
            }
            lInfosProfondeurParent.count += 1;
            lCache.structArborescenceLignes.push({
              paramsLigne: lParamCelluleLigne,
              paramLigneParent: lInfosProfondeurParent.paramsLigne,
              level: lProfondeur,
              index: lInfosProfondeurParent.count,
              _count() {
                return lInfosProfondeurParent.count;
              },
            });
          });
          lCache.structArborescenceLignes.forEach((aStruct) => {
            aStruct.count = aStruct._count();
            delete aStruct._count;
          });
        }
        const lCacheRef = lCache.refresh;
        if (lParamsActualiser.initCacheDyn) {
          lCacheRef.init();
        }
        lCacheRef.avecConstructionDynamiqueContenu =
          this._options.avecConstructionDynamiqueContenu &&
          lCache.lignesVisibles.length > lCacheRef.nbLignes * 5;
        lCacheRef.structure = [];
        this.optionsInterne.initStructureDynamique();
      }
      _estLigneVisible(aNumeroLigne, aParams) {
        return (
          !this._cache.rechercheTexte.lignesCachees[aNumeroLigne] &&
          this.Donnees.estVisible(aNumeroLigne, aParams)
        );
      }
      _estSelectionParCellule(aLigne, aColonne) {
        if (aColonne < 0) {
          return false;
        }
        return (
          !!this.Donnees &&
          this.Donnees.selectionParCellule(
            aColonne,
            this.Donnees.Donnees.get(aLigne),
          )
        );
      }
      _calculerTitres() {
        const _completerCelluleVide = (aLigne, aColonne) => {
          return this.ListeTitres[aLigne - 1] &&
            this.ListeTitres[aLigne - 1][aColonne] ===
              TypeFusionTitreListe_1.TypeFusionTitreListe.FusionGauche
            ? TypeFusionTitreListe_1.TypeFusionTitreListe.FusionGauche
            : TypeFusionTitreListe_1.TypeFusionTitreListe.FusionHaute;
        };
        let lNbLignes, iLigne, iColonne, lNumeroColonne;
        const lHintTitres = [];
        if (
          this._options.colonnes &&
          this._cache.declarationsColonnes &&
          this._cache.declarationsColonnes.length > 0
        ) {
          this.ListeTitres = null;
          lNbLignes = 0;
          for (
            iColonne = 0;
            iColonne < this._cache.declarationsColonnes.length;
            iColonne++
          ) {
            if (this._cache.declarationsColonnes[iColonne]) {
              const lDecl = this._cache.declarationsColonnes[iColonne];
              if (Array.isArray(lDecl.titre)) {
                lNbLignes = Math.max(lNbLignes, lDecl.titre.length);
              } else if (lDecl.titre) {
                lNbLignes = Math.max(lNbLignes, 1);
              }
              if (
                this._cache.declarationsColonnes[iColonne].sansBordureDroite
              ) {
                if (!this._options.colonnesSansBordureDroit) {
                  this._options.colonnesSansBordureDroit = [];
                }
                this._options.colonnesSansBordureDroit.push(
                  this._cache.declarationsColonnes[iColonne].id,
                );
              }
            }
          }
          if (lNbLignes > 0) {
            this.ListeTitres = [];
            lNumeroColonne = 0;
            for (
              iColonne = 0;
              iColonne < this._cache.declarationsColonnes.length;
              iColonne++
            ) {
              if (this._cache.declarationsColonnes[iColonne]) {
                for (iLigne = 0; iLigne < lNbLignes; iLigne++) {
                  if (!this.ListeTitres[iLigne]) {
                    this.ListeTitres[iLigne] = [];
                  }
                  if (!lHintTitres[iLigne]) {
                    lHintTitres[iLigne] = [];
                  }
                  const lValeur =
                    this._cache.declarationsColonnes[iColonne].titre;
                  if (MethodesObjet_1.MethodesObjet.isArray(lValeur)) {
                    const lValeurTitre = lValeur[iLigne];
                    if (lValeurTitre !== undefined && lValeurTitre !== null) {
                      this.ListeTitres[iLigne][lNumeroColonne] = lValeurTitre;
                    } else {
                      this.ListeTitres[iLigne][lNumeroColonne] =
                        iLigne === 0
                          ? lNumeroColonne === 0
                            ? ''
                            : TypeFusionTitreListe_1.TypeFusionTitreListe
                                .FusionGauche
                          : _completerCelluleVide.call(
                              this,
                              iLigne,
                              lNumeroColonne,
                            );
                    }
                  } else {
                    this.ListeTitres[iLigne][lNumeroColonne] =
                      iLigne === 0
                        ? lValeur !== undefined && lValeur !== null
                          ? lValeur
                          : lNumeroColonne === 0
                            ? ''
                            : TypeFusionTitreListe_1.TypeFusionTitreListe
                                .FusionGauche
                        : _completerCelluleVide.call(
                            this,
                            iLigne,
                            lNumeroColonne,
                          );
                  }
                  if (
                    MethodesObjet_1.MethodesObjet.isArray(
                      this._cache.declarationsColonnes[iColonne].hint,
                    )
                  ) {
                    if (
                      this._cache.declarationsColonnes[iColonne].hint[iLigne]
                    ) {
                      lHintTitres[iLigne][lNumeroColonne] =
                        this._cache.declarationsColonnes[iColonne].hint[iLigne];
                    }
                  } else if (this._cache.declarationsColonnes[iColonne].hint) {
                    lHintTitres[iLigne][lNumeroColonne] =
                      this._cache.declarationsColonnes[iColonne].hint;
                  }
                }
                lNumeroColonne += 1;
              }
            }
          }
        }
        const lDescripteurSkin = {
          getCouleurFond: null,
          getCouleurTexte: null,
          estCoche: false,
          largeurClasseCssImage: null,
        };
        for (iLigne in this.ListeTitres) {
          for (iColonne in this.ListeTitres[iLigne]) {
            const lDescripteur = this.ListeTitres[iLigne][iColonne],
              lDescripteurModele = Object.assign({}, lDescripteurSkin);
            if (!lDescripteur) {
              lDescripteurModele.libelle = '';
            } else if (MethodesObjet_1.MethodesObjet.isObject(lDescripteur)) {
              Object.assign(lDescripteurModele, lDescripteur);
              if (
                MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
                  TypeFusionTitreListe_1.TypeFusionTitreListe,
                  lDescripteur.libelle,
                ) !== ''
              ) {
                lDescripteurModele.fusion = lDescripteur.libelle;
              }
              if (lDescripteurModele.couleurFond) {
                lDescripteurModele.getCouleurFond = function () {
                  return this.couleurFond;
                };
              }
              if (lDescripteurModele.couleurTexte) {
                lDescripteurModele.getCouleurTexte = function () {
                  return this.couleurTexte;
                };
              }
              if (
                lDescripteurModele.controleur &&
                MethodesObjet_1.MethodesObjet.isObject(
                  lDescripteurModele.controleur,
                )
              ) {
                Object.keys(lDescripteurModele.controleur).forEach((aKey) => {
                  if (!this._cache.keysControleurTitre[aKey]) {
                    if (
                      this.controleur[aKey] ||
                      this._cache.keysControleurDonneesListe[aKey]
                    ) {
                      return;
                    }
                    this._cache.keysControleurTitre[aKey] = true;
                  }
                });
                $.extend(true, this.controleur, lDescripteurModele.controleur);
              }
            } else if (
              MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
                TypeFusionTitreListe_1.TypeFusionTitreListe,
                lDescripteur,
              ) !== ''
            ) {
              lDescripteurModele.fusion = lDescripteur;
            } else if (MethodesObjet_1.MethodesObjet.isString(lDescripteur)) {
              const lStrDescripteur = lDescripteur;
              if (
                lStrDescripteur.charAt(0) === '[' &&
                lStrDescripteur.charAt(lStrDescripteur.length - 1) === ']'
              ) {
                lDescripteurModele.classeCssImage = lStrDescripteur.substring(
                  1,
                  1 + lStrDescripteur.length - 2,
                );
              } else if (
                lStrDescripteur.charAt(0) === '{' &&
                lStrDescripteur.charAt(lStrDescripteur.length - 1) === '}'
              ) {
                lDescripteurModele.libelleHtml = lStrDescripteur.substring(
                  1,
                  1 + lStrDescripteur.length - 2,
                );
              } else {
                lDescripteurModele.libelle = lStrDescripteur;
              }
            } else {
              lDescripteurModele.libelle = '';
              IE.log.addLog(
                '_ObjetListe.setOptionsListe : pas de descripteur de colonnes',
                null,
                IE.log.genre.Avertissement,
              );
            }
            if (
              !lDescripteurModele.title &&
              lHintTitres &&
              lHintTitres[iLigne] &&
              lHintTitres[iLigne][iColonne]
            ) {
              lDescripteurModele.title = lHintTitres[iLigne][iColonne];
            }
            this.ListeTitres[iLigne][iColonne] = lDescripteurModele;
          }
        }
      }
      _estRechercheTexteVide() {
        return this._cache.rechercheTexte.saisie.trim() === '';
      }
      _filtreRechercheTexte(aParamsActualiser) {
        const lCache = this._cache;
        const lOldCache = lCache.rechercheTexte.lignesCachees;
        lCache.rechercheTexte.lignesCachees = [];
        const lRechercheVide = this._estRechercheTexteVide();
        let lAvecContructionCache = false;
        if (!lRechercheVide && !lCache.rechercheTexte.textesParLigne) {
          this.Donnees.enConstruction_cacheRechercheTexte = true;
          try {
            lAvecContructionCache = true;
            this._initCacheLignes({ initCacheDyn: false });
            lCache.rechercheTexte.textesParLigne = [];
            this.construireCacheRechercheTextes();
          } finally {
            this.Donnees.enConstruction_cacheRechercheTexte = false;
          }
        }
        if (!lRechercheVide) {
          const lTabRecherches =
            RechercheTexte_1.RechercheTexte.getTabRechercheTexteNormalize(
              this._cache.rechercheTexte.saisie,
            );
          const lIndexsLignesVisibles = [];
          const lFuncRendrePereArticleVisible = (aLigne) => {
            const lArticleFils = this.getArticleDeLigne(aLigne);
            if (lArticleFils && lArticleFils.pere) {
              for (
                let lIndiceLigne = aLigne - 1;
                lIndiceLigne >= 0;
                lIndiceLigne--
              ) {
                const lArticleRechereche = this.getArticleDeLigne(lIndiceLigne);
                if (lArticleRechereche === lArticleFils.pere) {
                  lCache.rechercheTexte.lignesCachees[lIndiceLigne] = false;
                  lFuncRendrePereArticleVisible(lIndiceLigne);
                  return;
                }
              }
            }
          };
          lCache.rechercheTexte.textesParLigne.forEach((aInfosLigne) => {
            const lLigneVisible =
              RechercheTexte_1.RechercheTexte.trouverRechercheTabTexteNormalize(
                {
                  tabSearch: lTabRecherches,
                  str: aInfosLigne.texte,
                  str_avecEntites: false,
                  strSearch_avecEntites: false,
                },
              );
            if (!lLigneVisible) {
              lCache.rechercheTexte.lignesCachees[aInfosLigne.ligne] = true;
            }
            if (
              lLigneVisible &&
              this.Donnees.options.avecPereVisibleSurRechercheTexte &&
              this.Donnees.Donnees
            ) {
              lFuncRendrePereArticleVisible(aInfosLigne.ligne);
            }
          });
          lCache.rechercheTexte.textesParLigne.forEach(
            (aInfosLigne, aIndex) => {
              if (!lCache.rechercheTexte.lignesCachees[aInfosLigne.ligne]) {
                lIndexsLignesVisibles.push(aIndex);
              }
            },
          );
          lCache.rechercheTexte.lignesCachees.forEach((aCachee, aLigne) => {
            if (!aCachee) {
              return;
            }
            const lIndice =
              lCache.lignesVisiblesSansRechercheTexte.indexOf(aLigne);
            if (lIndice <= 0) {
              return;
            }
            const lLignePrec =
              lCache.lignesVisiblesSansRechercheTexte[lIndice - 1];
            lCache.infosZonesColonnes.forEach((aBloc) => {
              if (lCache.rechercheTexte.lignesCachees[aLigne]) {
                aBloc.colonnesVisibles.forEach((aNumeroColonne) => {
                  if (
                    lCache.rechercheTexte.lignesCachees[aLigne] &&
                    !lCache.rechercheTexte.lignesCachees[lLignePrec] &&
                    this.Donnees.fusionCelluleAvecLignePrecedente(
                      this._getParamsCellule(aNumeroColonne, aLigne, {
                        celluleLignePrecedente: this._getParamsCellule(
                          aNumeroColonne,
                          lLignePrec,
                        ),
                      }),
                    )
                  ) {
                    lCache.rechercheTexte.lignesCachees[aLigne] = undefined;
                  }
                });
              }
            });
          });
          lIndexsLignesVisibles.forEach((aIndex) => {
            const lInfosLigneInitiale =
              lCache.rechercheTexte.textesParLigne[aIndex];
            if (!lInfosLigneInitiale) {
              return;
            }
            const lFuncBoucle = function (aInc) {
              let lLigneVisible = lInfosLigneInitiale.ligne;
              let lIndex = aIndex + (aInc ? 1 : -1);
              while (
                lIndex >= 0 &&
                lIndex < lCache.rechercheTexte.textesParLigne.length
              ) {
                const lInfosLigne =
                  lCache.rechercheTexte.textesParLigne[lIndex];
                if (
                  !lInfosLigne ||
                  !lCache.rechercheTexte.lignesCachees[lInfosLigne.ligne]
                ) {
                  break;
                }
                if (
                  this.Donnees.rechercheTexteForcerLignePrecSuivVisible(
                    this._getParamsCellule(-1, lLigneVisible),
                    this._getParamsCellule(-1, lInfosLigne.ligne),
                  )
                ) {
                  lCache.rechercheTexte.lignesCachees[lInfosLigne.ligne] =
                    undefined;
                  lLigneVisible = lInfosLigne.ligne;
                } else {
                  break;
                }
                lIndex += aInc ? 1 : -1;
              }
            };
            lFuncBoucle.call(this, false);
            lFuncBoucle.call(this, true);
          });
        }
        if (
          lAvecContructionCache ||
          !MethodesObjet_1.MethodesObjet.objetsIdentiques(
            lCache.rechercheTexte.lignesCachees,
            lOldCache,
          )
        ) {
          const lParams = Object.assign(aParamsActualiser || {}, {
            conserverSelection: true,
            selections: null,
            zonesActualisation: { contenu: true },
            estFiltreRechercheTexte: true,
            conserverPositionScroll: false,
          });
          this._actualiser(lParams);
          const lInput = this._getJConteneurInputRecherche()
            .find('.liste_rechercheTexte input')
            .get(0);
          if (lInput) {
            ObjetHtml_1.GHtml.setFocusEdit(lInput);
          }
        } else {
          this._surlignageRechercheTexte();
        }
        if (lRechercheVide) {
          lCache.strResultRecherche = 'Aucune ligne trouvée';
        } else {
          this._getJConteneurInputRecherche()
            .find('.liste_rechercheTexte_alerte.hide')
            .removeClass('hide');
          const lNbLignesResult = lCache.lignesVisibles.length;
          const lStrRecherche = this.getRechercheTexte();
          if (lNbLignesResult === 0) {
            lCache.strResultRecherche =
              'Aucune ligne trouvée pour "%s"';
          } else if (lNbLignesResult === 1) {
            lCache.strResultRecherche =
              '%d sur %d ligne trouvée pour "%s"';
          } else {
            lCache.strResultRecherche =
              '%d sur %d lignes trouvées pour "%s"';
          }
        }
        this.$refreshSelf();
      }
      construireCacheRechercheTextes() {
        const lCache = this._cache;
        const lCacheRef = lCache.refresh;
        let lStructure = [];
        if (!lCache.refresh.avecConstructionDynamiqueContenu) {
          lStructure.push({ deb: 0, fin: lCache.lignesVisibles.length - 1 });
        } else {
          lStructure = lCacheRef.structure;
        }
        lStructure.forEach((aStructure, aIndiceRange) => {
          let lIndiceLigne;
          let lInfos;
          let lFragment = IEHtml.outils.createSafeFragment();
          let lJFragment;
          try {
            lCache.infosZonesColonnes.forEach((aInfosZoneColonnes, aIndex) => {
              let lDiv = document.createElement('div');
              lFragment.appendChild(lDiv);
              lDiv.id = `frag${aIndex}`;
              const lHtml = this._construireContenuRange(
                aInfosZoneColonnes,
                aIndiceRange,
              );
              $(lDiv).ieHtmlAppend('<div>' + lHtml + '</div>', {
                controleur: this.controleur,
              });
              lDiv = null;
            });
            lJFragment = $(lFragment);
            for (
              lIndiceLigne = aStructure.deb;
              lIndiceLigne <= aStructure.fin;
              lIndiceLigne++
            ) {
              lInfos = {
                ligne: lCache.lignesVisibles[lIndiceLigne],
                texte: '',
              };
              lCache.rechercheTexte.textesParLigne.push(lInfos);
              lCache.infosZonesColonnes.forEach(
                (aInfosZoneColonnes, aIndex) => {
                  const lTab = [];
                  lFragment
                    .querySelectorAll(
                      `#frag${aIndex} .liste_celluleGrid_${lIndiceLigne + 1} :not(.sr-only)`,
                    )
                    .forEach((aNode) => {
                      if (aNode.childNodes && aNode.childNodes.length > 0) {
                        aNode.childNodes.forEach((aChildNode) => {
                          if (aChildNode.nodeType === Node.TEXT_NODE) {
                            const lValue = aChildNode.nodeValue || '';
                            if (lValue) {
                              lTab.push(lValue);
                            }
                          }
                        });
                      }
                    });
                  lInfos.texte +=
                    ' ' +
                    ComparateurChaines_1.ComparateurChaines.normalize(
                      lTab.join(' '),
                    );
                },
              );
            }
          } finally {
            lJFragment.children().remove();
            lJFragment.remove();
            lJFragment = null;
            lFragment = null;
          }
        });
      }
      _calculerTailles() {
        this.ListeTailles = this._cache.colonnes.listeTailles || [];
        let lElement, i, lValeur;
        for (i = 0; i < this.ListeTailles.length; i++) {
          lElement = this.ListeTailles[i];
          if (
            lElement &&
            typeof lElement === 'string' &&
            lElement.search &&
            lElement.search(/%/) >= 0
          ) {
            this.ListeTailles[i] = ObjetListe.initColonne(
              parseInt(lElement, 10),
            );
          } else if (
            lElement &&
            typeof lElement === 'string' &&
            lElement.toLowerCase().endsWith('rem')
          ) {
            let lTailleRem = parseFloat(
              lElement.toLowerCase().replace('rem', ''),
            );
            lTailleRem = isNaN(lTailleRem) ? 0 : lTailleRem;
            this.ListeTailles[i] = {
              estREM: true,
              valeurRem: lElement,
              valeurPx: Math.max(
                0,
                ObjetPosition_1.GPosition.remToPixels(lTailleRem),
              ),
            };
          } else if (
            lElement &&
            !MethodesObjet_1.MethodesObjet.isObject(lElement)
          ) {
            lValeur = parseInt(lElement, 10);
            this.ListeTailles[i] = Math.max(0, isNaN(lValeur) ? 0 : lValeur);
          }
        }
      }
      _trierDonnees() {
        this.Donnees.setTriCourantDeListe(this._triCourant);
        this.Donnees.trier();
      }
      _setDonnees(ADonnees, aLigneSelectionne, aParams) {
        this._donneesRecus = true;
        this.Donnees = ADonnees;
        const lControleurDonnees = this.Donnees
          ? this.Donnees.getControleur(this.Donnees, this)
          : null;
        if (lControleurDonnees) {
          Object.keys(lControleurDonnees).forEach((aKey) => {
            if (!this._cache.keysControleurDonneesListe[aKey]) {
              if (
                this.controleur[aKey] ||
                this._cache.keysControleurTitre[aKey]
              ) {
                return;
              }
              this._cache.keysControleurDonneesListe[aKey] = true;
            }
          });
          $.extend(true, this.controleur, lControleurDonnees);
        }
        if (this.Donnees) {
          if (this._options.skin === ObjetListe.skin.flatDesign) {
          } else {
          }
        }
        this._cache.listeNonInitialisee = false;
        this._setRechercheSaisie('');
        clearTimeout(this._cache.timerKeyPress);
        this._cache.selectionCellule = { ligne: -1, colonne: -1 };
        this._cache.celluleClicNonShift = { ligne: -1, colonne: -1 };
        if (this.Donnees) {
          this._cache.lignesSelectionnees = new Array(
            this.Donnees.getNbrLignes(),
          );
          this._cache.lignesSelectionnees_prec = [];
        }
        this._calculsPreRendu();
        if (this.Donnees) {
          this.Donnees._setParamsListe({
            liste: this,
            idWAILigneLue: this.ids.WAILigneLue,
            versionMobile: this.optionsInterne.versionMobile,
            getIdsColonnes: () => {
              return this._cache.colonnes.listeIds;
            },
            getParams: this._getParamsCellule.bind(this),
            actualiserListe: (aParams) => {
              this._actualiser(
                Object.assign(
                  {
                    conserverSelection: true,
                    zonesActualisation: { contenu: true },
                    ignorerFocusListe: true,
                  },
                  aParams,
                ),
              );
            },
          });
        }
        let lSelections = null;
        if (
          this.Donnees &&
          this.Donnees.Donnees &&
          aLigneSelectionne >= 0 &&
          MethodesObjet_1.MethodesObjet.isNumber(aLigneSelectionne)
        ) {
          this._cache.selectionCellule.ligne = aLigneSelectionne;
          this._trierDonnees();
          lSelections = [
            {
              article: this.Donnees.Donnees.get(
                this._cache.selectionCellule.ligne,
              ),
            },
          ];
        } else if (
          this.Donnees &&
          this.Donnees.Donnees &&
          aParams &&
          aParams.listeElementsSelection &&
          aParams.listeElementsSelection.count &&
          aParams.listeElementsSelection.count() > 0
        ) {
          lSelections = [];
          aParams.listeElementsSelection.parcourir((aElement) => {
            lSelections = [{ article: aElement }];
          });
          aParams.listeElementsSelection = null;
          aParams.instancesIdentiquesSelections = false;
          this._trierDonnees();
        }
        this._actualiser(
          Object.assign(
            {
              selections: lSelections,
              sansTriDonnees: !!lSelections,
              avecEvenementSelection: !!lSelections && lSelections.length > 0,
              avecScrollSelection: !!lSelections && lSelections.length > 0,
              conserverPositionScroll: false,
            },
            aParams,
          ),
        );
        return this;
      }
      _getLargeurPage() {
        const lJElement = $('#' + this.Nom.escapeJQ());
        if (lJElement.html() === '') {
          lJElement.html('&nbsp;');
        }
        return Math.floor(lJElement.width());
      }
      _calculerColonnes() {
        this._cache.largeurPage = this._getLargeurPage();
        this._cache.colonnesSansBordureDroit = [];
        if (this._options.colonnesSansBordureDroit) {
          this._options.colonnesSansBordureDroit.forEach((aElement, aIndex) => {
            if (aElement === true || aElement === false) {
              this._cache.colonnesSansBordureDroit[aIndex] = aElement;
            } else if (MethodesObjet_1.MethodesObjet.isString(aElement)) {
              this._cache.colonnesSansBordureDroit[
                this._getNumeroColonneSelonNumeroOuId(aElement)
              ] = true;
            }
          }, this);
        }
        this._cache.taillesColonne = this._calculerTaillesColonnes(this._cache);
        this._cache.calculsTailleColonnesAFaire = !this._cache.largeurPage;
      }
      _getNumeroColonneSelonNumeroOuId(aColonne, aAccepteErreur) {
        let lNumeroColonne = aColonne;
        if (
          MethodesObjet_1.MethodesObjet.isString(aColonne) &&
          this._cache.colonnes.listeIds
        ) {
          lNumeroColonne = this._cache.colonnes.listeIds.indexOf(aColonne);
          if (lNumeroColonne < 0) {
            lNumeroColonne = null;
          }
        }
        return lNumeroColonne;
      }
      _calculerTri() {
        let lNombreTri = 0,
          lNumerosColonnesTriDefaut = [],
          lGenreTriColonneTriDefaut = [],
          lGenreColonne,
          lNumeroColonne,
          lErreurTriCorrigee = false,
          i;
        function _chercherColonneTriValide(
          aNumeroColonne,
          aNumerosColonnesTriDefaut,
        ) {
          let lNumeroColonne = aNumeroColonne;
          if (!MethodesObjet_1.MethodesObjet.isNumber(lNumeroColonne)) {
            lNumeroColonne = 0;
            lErreurTriCorrigee = true;
          }
          while (
            lNumeroColonne >= 0 &&
            (!this._estColonneVisible(lNumeroColonne) ||
              this._cache.colonnesTri[lNumeroColonne] !== true ||
              aNumerosColonnesTriDefaut.includes(lNumeroColonne))
          ) {
            lNumeroColonne += -1;
            lErreurTriCorrigee = true;
          }
          if (lNumeroColonne < 0) {
            let lTrouve = false;
            this._cache.infosZonesColonnes.forEach((aBloc) => {
              aBloc.colonnesVisibles.forEach((aNumeroColonne) => {
                if (
                  !lTrouve &&
                  this._cache.colonnesTri[aNumeroColonne] === true &&
                  !aNumerosColonnesTriDefaut.includes(aNumeroColonne)
                ) {
                  lTrouve = true;
                  lNumeroColonne = aNumeroColonne;
                  lErreurTriCorrigee = true;
                }
              });
            });
          }
          return lNumeroColonne;
        }
        if (this._options.colonnesTriables === true) {
          this._cache.colonnesTri = [];
          for (i = 0; i < this.ListeTailles.length; i++) {
            this._cache.colonnesTri[i] = true;
          }
        } else {
          this._cache.colonnesTri = [];
          if (
            this._options.colonnesTriables &&
            Array.isArray(this._options.colonnesTriables)
          ) {
            const lCols = this._options.colonnesTriables;
            this._cache.listeCorrespondancesColonnes.forEach(
              (aNumeroColonneReelle, aNumeroColonneInitiale) => {
                if (
                  lCols[aNumeroColonneInitiale] === true ||
                  lCols[aNumeroColonneInitiale] === false
                ) {
                  if (aNumeroColonneReelle >= 0) {
                    this._cache.colonnesTri[aNumeroColonneReelle] =
                      lCols[aNumeroColonneInitiale];
                  }
                } else if (
                  MethodesObjet_1.MethodesObjet.isString(
                    lCols[aNumeroColonneInitiale],
                  )
                ) {
                  lNumeroColonne = this._getNumeroColonneSelonNumeroOuId(
                    lCols[aNumeroColonneInitiale],
                    true,
                  );
                  if (lNumeroColonne !== null) {
                    this._cache.colonnesTri[lNumeroColonne] = true;
                  }
                }
              },
            );
          }
          if (this._cache.colonnesTri.length === 0) {
            this._cache.colonnesTri = null;
          }
        }
        let lOptionsTriParDefaut = this._options.numeroColonneTriDefaut;
        if (MethodesObjet_1.MethodesObjet.isFunction(lOptionsTriParDefaut)) {
          lOptionsTriParDefaut = lOptionsTriParDefaut();
        }
        if (this._cache.colonnesTri && this._cache.colonnesTri.length > 0) {
          if (MethodesObjet_1.MethodesObjet.isArray(lOptionsTriParDefaut)) {
            lNumerosColonnesTriDefaut = [];
            for (i = 0; i < lOptionsTriParDefaut.length; i++) {
              lNumeroColonne = null;
              const lOptTri = lOptionsTriParDefaut[i];
              if (MethodesObjet_1.MethodesObjet.isObject(lOptTri)) {
                if (lOptTri.id) {
                  lNumeroColonne = this._getNumeroColonneSelonNumeroOuId(
                    lOptTri.id,
                    true,
                  );
                }
                if (lNumeroColonne === null) {
                  lNumeroColonne = lOptTri.numero || 0;
                  lErreurTriCorrigee = true;
                }
                lNumeroColonne = lOptTri.numero || 0;
                lGenreColonne =
                  lOptTri.genre ||
                  Enumere_TriElement_1.EGenreTriElement.Croissant;
              } else {
                lNumeroColonne =
                  this._getNumeroColonneSelonNumeroOuId(lOptTri, true) || 0;
                lGenreColonne = Enumere_TriElement_1.EGenreTriElement.Croissant;
              }
              lNumeroColonne = _chercherColonneTriValide.call(
                this,
                lNumeroColonne,
                lNumerosColonnesTriDefaut,
              );
              if (lNumeroColonne >= 0) {
                lNumerosColonnesTriDefaut.push(lNumeroColonne);
                lGenreTriColonneTriDefaut.push(lGenreColonne);
              }
            }
            lNombreTri = lNumerosColonnesTriDefaut.length;
          } else {
            lNombreTri = 1;
            lNumeroColonne = null;
            if (MethodesObjet_1.MethodesObjet.isObject(lOptionsTriParDefaut)) {
              if (lOptionsTriParDefaut.id) {
                lNumeroColonne =
                  this._getNumeroColonneSelonNumeroOuId(
                    lOptionsTriParDefaut.id,
                    true,
                  ) || 0;
              }
              if (lNumeroColonne === null) {
                lNumeroColonne = lOptionsTriParDefaut.numero || 0;
                lErreurTriCorrigee = true;
              }
              lGenreColonne =
                lOptionsTriParDefaut.genre ||
                Enumere_TriElement_1.EGenreTriElement.Croissant;
            } else {
              lNumeroColonne =
                this._getNumeroColonneSelonNumeroOuId(
                  lOptionsTriParDefaut,
                  true,
                ) || 0;
              lGenreColonne = Enumere_TriElement_1.EGenreTriElement.Croissant;
            }
            lNumeroColonne = _chercherColonneTriValide.call(
              this,
              parseInt(lNumeroColonne || 0, 10),
              lNumerosColonnesTriDefaut,
            );
            lNumerosColonnesTriDefaut = [lNumeroColonne];
            lGenreTriColonneTriDefaut = [lGenreColonne];
          }
        }
        this._triCourant = { colonne: [], genre: [], nombreTri: lNombreTri };
        for (i = 0; i < lNombreTri; i++) {
          this._triCourant.colonne[i] = lNumerosColonnesTriDefaut[i];
          this._triCourant.genre[i] = lGenreTriColonneTriDefaut[i];
        }
        if (lErreurTriCorrigee) {
          this._setOptionEvenementSurTri();
        }
      }
      _calculerParametresCreation() {
        function _ajouterColonne(aColonne) {
          const lNumeroColonne =
            this._getNumeroColonneSelonNumeroOuId(aColonne);
          if (MethodesObjet_1.MethodesObjet.isNumber(lNumeroColonne)) {
            if (
              this._cache.colonnes.listeTailles &&
              (lNumeroColonne < 0 ||
                lNumeroColonne >= this._cache.colonnes.listeTailles.length)
            ) {
              IE.log.addLog(
                'options.listeCreations [_calculerParametresCreation], la colonne numero ' +
                  aColonne +
                  " n'existe pas !",
              );
            }
            this.ListeCreations.push(lNumeroColonne);
          }
        }
        this.ListeCreations = [];
        if (Array.isArray(this._options.listeCreations)) {
          this._options.listeCreations.forEach(_ajouterColonne, this);
        } else {
          _ajouterColonne.call(this, this._options.listeCreations);
        }
      }
      _avecLigneCreationTitre() {
        let lAvecLigneCreation =
          !this._getNonEditable() &&
          this._options.avecLigneCreation &&
          !!this.Donnees;
        if (lAvecLigneCreation && this._cache.infosZonesColonnes.length > 1) {
          lAvecLigneCreation = false;
        }
        return lAvecLigneCreation;
      }
      _getLargeurPartieScrollV() {
        return Math.max(
          this._getLargeurScrollV(),
          this._avecBoutonsListeHautScroll()
            ? this._options.tailleBoutons + 1
            : 0,
        );
      }
      _getLargeurScrollV() {
        return 0;
      }
      _calculerTaillesColonnes(aCache, aPourImpression) {
        const lTaillesColonne = [];
        if (!this.ListeTailles) {
          return lTaillesColonne;
        }
        this.ListeTailles.forEach(() => {
          lTaillesColonne.push({ px: 0 });
        });
        let i,
          lTailleRestante,
          lTaille,
          lTotalValeurs = 0,
          lElement,
          lNumeroColonne;
        const lColonnesPourcent = [];
        aCache.avecPourcentage = false;
        aCache.largeurTotalFixe = 0;
        aCache.largeurTotalCalcule = 0;
        for (i = 0; i < this.ListeTailles.length; i++) {
          if (this._estColonneVisible(i)) {
            const lTailleCol = this.ListeTailles[i];
            const lTailleREM = this.ListeTailles[i];
            const lTaillePx = this.ListeTailles[i];
            if (lTailleCol && lTailleCol.valeur && !lTailleREM.estREM) {
              aCache.avecPourcentage = true;
              lTotalValeurs += lTailleCol.valeur;
              lElement = {
                indice: i,
                valeur: lTailleCol.valeur,
                min: Math.max(
                  _CONST_largeurMinColonne,
                  lTailleCol.min ? parseInt(lTailleCol.min + '', 10) : 0,
                ),
                max: lTailleCol.max ? parseInt(lTailleCol.max + '', 10) : 0,
              };
              lColonnesPourcent.push(lElement);
              Object.assign(lTaillesColonne[i], lElement, {
                estPourcent: true,
              });
              aCache.largeurTotalFixe +=
                lElement.min + 2 * this._options.paddingCelluleLR + 1;
            } else if (lTailleREM && lTailleREM.estREM) {
              lTaillesColonne[i].px = lTailleREM.valeurPx;
              Object.assign(lTaillesColonne[i], lTailleREM);
              aCache.largeurTotalFixe +=
                lTailleREM.valeurPx + 2 * this._options.paddingCelluleLR + 1;
            } else {
              lTaillesColonne[i].px = lTaillePx;
              aCache.largeurTotalFixe +=
                lTaillePx + 2 * this._options.paddingCelluleLR + 1;
            }
          }
        }
        let lTotal = 0;
        lTaillesColonne.forEach((aCol) => {
          if (aCol.estPourcent) {
            aCol.pourcent = Math.floor((aCol.valeur * 100) / lTotalValeurs);
            lTotal += aCol.pourcent;
          }
        });
        if (lTotal < 100) {
          lTaillesColonne.forEach((aCol) => {
            if (aCol.estPourcent) {
              aCol.pourcent += 100 - lTotal;
              return false;
            }
            return true;
          });
        }
        aCache.largeurTotalFixe = Math.max(0, aCache.largeurTotalFixe - 1);
        aCache.largeurTotalCalcule = aCache.largeurTotalFixe;
        if (!aCache.largeurPage) {
          return lTaillesColonne;
        }
        if (aCache.avecPourcentage) {
          lTailleRestante =
            aCache.largeurPage -
            aCache.largeurTotalFixe -
            this._getDiffLargeurContenu(aPourImpression);
          lTailleRestante = Math.max(0, lTailleRestante);
          let lAvecMax = true;
          while (lAvecMax) {
            lAvecMax = false;
            for (i in lColonnesPourcent) {
              lElement = lColonnesPourcent[i];
              if (!lElement) {
                continue;
              }
              lTaille =
                lElement.min +
                Math.max(
                  0,
                  Math.round(
                    (lTailleRestante * lElement.valeur) / lTotalValeurs,
                  ),
                );
              if (lElement.max && lTaille > lElement.max) {
                lTaillesColonne[lElement.indice].px = lTaille = lElement.max;
                lTailleRestante -= lTaille - lElement.min;
                lTotalValeurs -= lElement.valeur;
                aCache.largeurTotalCalcule += lTaille - lElement.min;
                lAvecMax = true;
                delete lColonnesPourcent[i];
                break;
              }
            }
          }
          for (i in lColonnesPourcent) {
            lElement = lColonnesPourcent[i];
            if (!lElement) {
              continue;
            }
            lNumeroColonne = lElement.indice;
            lTaillesColonne[lNumeroColonne].px =
              lElement.min +
              Math.max(
                0,
                Math.round((lTailleRestante * lElement.valeur) / lTotalValeurs),
              );
            lTailleRestante -=
              lTaillesColonne[lNumeroColonne].px - lElement.min;
            lTotalValeurs -= lElement.valeur;
            aCache.largeurTotalCalcule +=
              lTaillesColonne[lNumeroColonne].px - lElement.min;
          }
        }
        aCache.largeurBlocFixe = 0;
        aCache.infosZonesColonnes.forEach((aInfos) => {
          aInfos.largeurBloc = 0;
          aInfos.colonnesVisibles.forEach((aNumeroCol) => {
            const lTaille =
              lTaillesColonne[aNumeroCol].px +
              2 * this._options.paddingCelluleLR +
              1;
            aInfos.largeurBloc += lTaille;
            if (aInfos.estBlocFixe) {
              aCache.largeurBlocFixe += lTaille;
            }
          });
        });
        return lTaillesColonne;
      }
      _getDiffLargeurContenu(aPourImpression) {
        return (
          (aPourImpression ? 0 : this._getLargeurPartieScrollV()) +
          this._options.borduresContenu_left +
          this._options.borduresContenu_right +
          this._options.paddingContenu_LR * 2
        );
      }
      _calculsPreRendu(aIgnorerCalculTri) {
        const lAvecCalculPreRendu = this._cache.calculsPreRenduAFaire;
        if (lAvecCalculPreRendu) {
          this._cache.calculsPreRenduAFaire = false;
          this._gererModificationsColonnes();
          this._preparerBoutons();
          this._calculerTailles();
          this._calculColonnesCachees(this._cache);
          this._getInfosZonesColonnes(this._cache);
          this._calculerTitres();
          this._calculerParametresCreation();
          if (aIgnorerCalculTri !== true || this._cache.calculTriAFaire) {
            this._cache.calculTriAFaire = false;
            this._calculerTri();
          }
        }
        if (this._cache.calculsTailleColonnesAFaire || lAvecCalculPreRendu) {
          this._calculerColonnes();
        }
      }
      _actualiser(aParams) {
        const lParams = Object.assign(
          {
            conserverSelection: false,
            conserverFocusSelection: false,
            ignorerFocusListe: true,
            sansTriDonnees: false,
            ignorerCalculTri: false,
            selections: null,
            instancesIdentiquesSelections: true,
            avecEvenementSelection: false,
            avecScrollSelection: false,
            avecSelectionSurLigneInvisible: false,
            conserverPositionScroll: true,
            avecEvenementModificationSelection: true,
            conserverPositionElement: null,
          },
          aParams,
        );
        let lZonesActualisation = lParams.zonesActualisation;
        if (this._cache.creationEnCours) {
          lZonesActualisation = false;
        }
        this._cache.creationEnCours = false;
        this._cache.editionEnCours = false;
        this._cache.editionEnCoursEvenement = false;
        this._cache.positionCreation = 0;
        this._cache.listeValeursCreation = [];
        this._cache.finEditionCreation = null;
        clearTimeout(this._cache.rechercheTexte.timerSaisie);
        this._cache.collectionFuncConstructCellule = {};
        this._nettoyerElementsEditionEnCours();
        if (!ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
          return;
        }
        let lSelections = null,
          lIdFocusARestaurer = '',
          lFocusSurListe;
        if (
          !lParams.ignorerFocusListe &&
          ObjetHtml_1.GHtml.focusEstDansElement &&
          ObjetHtml_1.GHtml.focusEstDansElement(this.Nom)
        ) {
          lFocusSurListe = true;
          lIdFocusARestaurer = this.IdPremierElement;
        }
        let lSelectionsPrecedente = null;
        if (this.Donnees) {
          this.Donnees.setOptions({ nonEditable: this._getNonEditable() });
          this.Donnees._setParamsListe({
            avecRechercheTexteEnCours: !this._estRechercheTexteVide(),
          });
          if (lParams.selections) {
            lSelections = lParams.selections;
          } else if (lParams.conserverSelection) {
            lSelections = this._getCellulesSelection();
          } else {
            if (lParams.avecEvenementModificationSelection) {
              lSelectionsPrecedente = this._getCellulesSelection(true);
            }
            this._cache.selectionCellule.ligne = -1;
            this._cache.selectionCellule.colonne = -1;
            this._cache.lignesSelectionnees = new Array(
              this.Donnees.getNbrLignes(),
            );
            this._cache.lignesSelectionnees_prec = [];
          }
          if (lParams.sansTriDonnees !== true) {
            this._trierDonnees();
          }
          if (
            lFocusSurListe &&
            lParams.conserverFocusSelection &&
            this._cache.selectionCellule.ligne >= 0 &&
            this._cache.selectionCellule.colonne >= 0
          ) {
            lIdFocusARestaurer = this.getIdCellule(
              this._cache.selectionCellule.colonne,
              this._cache.selectionCellule.ligne,
              true,
            );
          }
        }
        const lBackupScroll = this._backupScroll(lParams);
        this._desabonnementResizeObserver();
        if (!lZonesActualisation) {
          ObjetHtml_1.GHtml.setHtml(this.Nom, '', { ignorerScroll: true });
          this._cache.heightConteneur = Math.floor(
            ObjetPosition_1.GPosition.getClientRect(this.Nom).contentHeight,
          );
          const lForcerNouveauTri =
            this.Donnees &&
            this._cache.calculsPreRenduAFaire &&
            lParams.ignorerCalculTri !== true &&
            lParams.sansTriDonnees !== true;
          this._calculsPreRendu(lParams.ignorerCalculTri);
          if (lForcerNouveauTri) {
            this._trierDonnees();
          }
        }
        let lAvecFiltreRecherche = !lParams.estFiltreRechercheTexte;
        if (lZonesActualisation) {
          this._actualiserZones(lZonesActualisation, lParams);
          if (lZonesActualisation.total) {
            const lJTotalHeader = $(
              `#${this.Nom.escapeJQ()} .liste-totale-fd.liste-header`,
            );
            if (lJTotalHeader.length === 1) {
              ObjetHtml_1.GHtml.setHtml(
                lJTotalHeader.get(0),
                this.construireTotalInterneFD(true),
                { controleur: this.controleur, ignorerScroll: true },
              );
            }
            const lJTotalFooter = $(
              `#${this.Nom.escapeJQ()} .liste-totale-fd.liste-footer`,
            );
            if (lJTotalFooter.length === 1) {
              ObjetHtml_1.GHtml.setHtml(
                lJTotalHeader.get(0),
                this.construireTotalInterneFD(false),
                { controleur: this.controleur, ignorerScroll: true },
              );
            }
          }
          lAvecFiltreRecherche =
            lAvecFiltreRecherche && lZonesActualisation.contenu;
        } else {
          let lCommentaireDebug = '';
          ObjetHtml_1.GHtml.setHtml(
            this.Nom,
            this.construireAffichage(lParams),
            {
              controleur: this.controleur,
              ignorerScroll: true,
              commentaireHtmlDebug: lCommentaireDebug,
            },
          );
          this._controleHeightLigne();
        }
        this._refreshContenuDynamique({ surInitialisation: true });
        if (
          this._options.piedDeListe &&
          this._options.piedDeListe.getContenu &&
          !lZonesActualisation
        ) {
          ObjetHtml_1.GHtml.setHtml(
            this.idPiedDeListe,
            IE.jsx.str(
              'div',
              {
                class: 'pied-liste',
                tabindex: '0',
                style:
                  ObjetStyle_1.GStyle.composeHeight(
                    this._options.piedDeListe.height,
                  ) +
                  (this.optionsInterne.versionMobile
                    ? ''
                    : ObjetStyle_1.GStyle.composeWidth(
                        this._cache.largeurTotalCalcule + 1,
                      )),
              },
              this._options.piedDeListe.getContenu(),
            ),
            {
              controleur:
                this._options.piedDeListe.controleur || this.controleur,
              ignorerScroll: true,
            },
          );
        }
        this._setScroll(lBackupScroll);
        this._refreshContenuDynamique({
          avecBackupScroll: true,
          refreshRecursif: true,
          conserverPositionElement: lParams.conserverPositionElement,
        });
        this._abonnementResizeObserver();
        if (lIdFocusARestaurer) {
          if (!ObjetHtml_1.GHtml.elementExiste(lIdFocusARestaurer)) {
            lIdFocusARestaurer = this.IdPremierElement;
          }
          ObjetHtml_1.GHtml.setFocus(lIdFocusARestaurer);
        }
        if (Array.isArray(lSelections)) {
          this._setCellulesSelection(lSelections, {
            instancesIdentiques: lParams.instancesIdentiquesSelections,
            avecEvenement: lParams.avecEvenementSelection,
            avecScroll: lParams.avecScrollSelection,
            avecSelectionSurLigneInvisible:
              lParams.avecSelectionSurLigneInvisible,
            avecEvenementModificationSelection:
              lParams.avecEvenementModificationSelection,
          });
        } else if (
          lParams.avecEvenementModificationSelection &&
          lSelectionsPrecedente &&
          lSelectionsPrecedente.length > 0
        ) {
          this._surModificationSelectionEvenement(lSelectionsPrecedente);
        }
        if (
          !this._estRechercheTexteVide() ||
          (lParams.estFiltreRechercheTexte &&
            !lParams.annulerRechercheTexte &&
            !lZonesActualisation)
        ) {
          this._creerZoneRechercheTexte(!lZonesActualisation);
        } else if (
          !lParams.estFiltreRechercheTexte ||
          lParams.annulerRechercheTexte
        ) {
          this._supprimerZoneRechercheTexte();
        }
        if (lAvecFiltreRecherche) {
          this._filtreRechercheTexte(lParams);
        }
        this._surlignageRechercheTexte();
        this.$refreshSelf();
      }
      _abonnementResizeObserver() {
        this._desabonnementResizeObserver();
        const lListeIdsResizeObs = [];
        this._getTabElementsPourRsizeObserver().forEach((aElement) => {
          if (aElement) {
            lListeIdsResizeObs.push({
              element: aElement,
              height: ObjetPosition_1.GPosition.getClientRect(aElement).height,
            });
          }
        });
        if (lListeIdsResizeObs.length > 0) {
          this._cache.resizeObserverContenu = new ResizeObserver(
            (aObservers) => {
              if (aObservers) {
                const lAvecActualisation = !lListeIdsResizeObs.every(
                  (aElement, aIndex) => {
                    const lHeight =
                      aObservers[aIndex] && aObservers[aIndex].contentRect
                        ? aObservers[aIndex].contentRect.height || 0
                        : 0;
                    if (
                      lHeight > 0 &&
                      Math.abs(lHeight - aElement.height) > 1
                    ) {
                      return false;
                    }
                    return true;
                  },
                );
                if (lAvecActualisation || this.optionsInterne.versionMobile) {
                  this._cache.positionsCelluleCadreSelection = {};
                  this._actualiserCadreSelection();
                }
                if (lAvecActualisation) {
                  this._controleHeightLigne();
                  this._setScroll(
                    this._backupScroll({ conserverPositionScroll: true }),
                    true,
                  );
                  if (this._options.callbackResizeObserverContenu) {
                    this._options.callbackResizeObserverContenu(this);
                  }
                }
              }
            },
          );
          lListeIdsResizeObs.forEach((aElement) => {
            this._cache.resizeObserverContenu.observe(aElement.element);
          });
        }
      }
      _desabonnementResizeObserver() {
        if (this._cache.resizeObserverContenu) {
          this._cache.resizeObserverContenu.disconnect();
          this._cache.resizeObserverContenu = null;
        }
      }
      _getHeightCellule(aParamsCellule) {
        return (
          this.Donnees.getHauteurMinCellule(aParamsCellule) ||
          ObjetDonneesListe_1.ObjetDonneesListe.hauteurMinCellule
        );
      }
      async _afficherMessage(aParamsCellule) {
        const LMessage = this.Donnees.getMessage();
        if (LMessage) {
          await GApplication.getMessage().afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
            message: LMessage,
          });
        } else if (this.Donnees.avecEtatSaisie(aParamsCellule)) {
          this.setEtatSaisie(true);
        }
      }
      surCreationEvenement(I, aParamsSupp) {
        if (this.Donnees) {
          if (this.Donnees.avecEvenementCreation()) {
            if (this.Pere && this.Evenement) {
              const lResult = this.callback.appel(
                this._getParamsCallback(
                  Enumere_EvenementListe_1.EGenreEvenementListe.Creation,
                  I,
                  null,
                  Object.assign(
                    { listeValeursCreation: this._cache.listeValeursCreation },
                    aParamsSupp,
                  ),
                ),
                Enumere_EvenementListe_1.EGenreEvenementListe.Creation,
                I,
                null,
              );
              this._refreshSelf();
              return lResult;
            }
          }
        }
      }
      _setOptionEvenementSurTri() {
        if (
          this._options.evenementSurTri &&
          this._triCourant &&
          this._triCourant.colonne &&
          this._cache.colonnes.listeIds
        ) {
          const lTabTri = [];
          for (let i = 0; i < this._triCourant.colonne.length; i++) {
            lTabTri.push({
              numero: this._triCourant.colonne[i],
              id: this._cache.colonnes.listeIds[this._triCourant.colonne[i]],
              genre: this._triCourant.genre[i],
            });
          }
          this._options.evenementSurTri(lTabTri);
        }
      }
      _construireTriActif(aInfosZoneColonnes, aIndiceTri) {
        return '';
      }
      async _setColonneTri(aColonne, aGenre, aNumeroTri) {
        const lNumeroTri = aNumeroTri || 0,
          lNumeroColonne = MethodesObjet_1.MethodesObjet.isString(aColonne)
            ? this.getNumeroColonneDIdColonne(aColonne)
            : aColonne,
          lNumeroAncienTri = this._triCourant.colonne.indexOf(lNumeroColonne);
        if (lNumeroAncienTri >= 0 && lNumeroAncienTri !== lNumeroTri) {
          this._triCourant.colonne[lNumeroAncienTri] =
            this._triCourant.colonne[lNumeroTri];
        }
        this._triCourant.genre[lNumeroTri] =
          aGenre !== null && aGenre !== undefined
            ? aGenre
            : Enumere_TriElement_1.EGenreTriElement.Croissant;
        this._triCourant.colonne[lNumeroTri] = lNumeroColonne;
        this._setOptionEvenementSurTri();
        this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
          $(
            '#' +
              this.ids.curseurTriSurvol.escapeJQ() +
              aInfosZoneColonnes.indiceBloc,
          ).hide();
          const lJParent = $(
            `#${this.ids.curseurTri.escapeJQ() + aInfosZoneColonnes.indiceBloc + '_row'}`,
          );
          lJParent.empty();
          for (let lITri = 0; lITri < this._triCourant.nombreTri; lITri++) {
            if (lJParent.length === 1) {
              const lNode = IEHtml.injectHTMLParams({
                element: lJParent.get(0),
                html: this._construireTriActif(aInfosZoneColonnes, lITri),
                controleur: this.controleur,
              });
              const lNumeroColonne = this._triCourant.colonne[lITri];
              if (
                lNode &&
                lNumeroTri === lITri &&
                aInfosZoneColonnes.gabaritColonnesTitre[lNumeroColonne]
              ) {
                lNode.focus();
              }
            }
          }
        });
        await new Promise((aResolve) => {
          setTimeout(aResolve, 0);
        });
        this._actualiser({
          conserverSelection: true,
          sansTriDonnees: false,
          ignorerCalculTri: true,
          zonesActualisation: { contenu: true },
        });
      }
      _extraireInfosId(aId) {
        if (!aId) {
          return false;
        }
        const lInfos = {};
        const lIds = aId.split('_');
        if (lIds[lIds.length - 1] === 'div') {
          lInfos.ligne = parseInt(lIds[lIds.length - 2], 10);
          lInfos.colonne = parseInt(lIds[lIds.length - 3], 10);
        } else {
          lInfos.ligne = parseInt(lIds[lIds.length - 1], 10);
          lInfos.colonne = parseInt(lIds[lIds.length - 2], 10);
        }
        return lInfos;
      }
      _focusSuivant(AId, AOrientation, ADirection) {
        const LIdSuivant = this.getIdNavigationSuivant(
          AId,
          AOrientation,
          ADirection,
        );
        if (LIdSuivant) {
          ObjetHtml_1.GHtml.setFocus(LIdSuivant);
          if (this.Donnees.options.avecSelectionSurNavigationClavier) {
            const lInfos = this._extraireInfosId(LIdSuivant);
            if (lInfos) {
              this.selectionnerCellule({
                ligne: lInfos.ligne,
                colonne: lInfos.colonne,
                deselectionnerTout: true,
                selectionner: true,
                avecEvenement: true,
              });
            }
          }
        }
      }
      _evenementMenuContextuel(aParametres, aLigne) {
        const lParametres = Object.assign(
          {
            ligneMenu: aLigne,
            numeroMenu: aLigne ? aLigne.getNumero() : -1,
            avecActualisation: true,
          },
          aParametres,
        );
        if (aLigne) {
          switch (aLigne.getNumero()) {
            case Enumere_CommandeMenu_1.EGenreCommandeMenu.Creation:
              if (this._avecLigneCreationUnique) {
                const LId = this._getIdCreation(-1, -1);
                ObjetHtml_1.GHtml.setDisplay(LId + '_Creation', false);
                ObjetHtml_1.GHtml.setDisplay(LId + '_Creation_Edit', true);
              }
              this._cache.positionCreation = 0;
              this.surCreationDeb(false, { origine: 'menucontextuel' });
              if (aLigne.data) {
                if (this._cache.listeValeursCreation) {
                  this._cache.listeValeursCreation.data = aLigne.data;
                }
              }
              break;
            case Enumere_CommandeMenu_1.EGenreCommandeMenu.Edition:
              this.surEditionDeb(lParametres.colonne, lParametres.ligne);
              break;
            case Enumere_CommandeMenu_1.EGenreCommandeMenu.Suppression:
              this._surSuppression();
              break;
            default: {
              this.Donnees.evenementMenuContextuel(lParametres);
              if (lParametres.avecActualisation) {
                this._actualiser({
                  conserverSelection: true,
                  zonesActualisation: { contenu: true, total: true },
                });
              }
            }
          }
        }
      }
      surSelectionEvenement(I, J, aSurClavier, aSurInteractionUtilisateur) {
        const lParams = this._getParamsCellule(I, J);
        if (this.Donnees && J > -1) {
          if (this.Donnees.avecEvenementSelection(lParams)) {
            if (this.Pere && this.Evenement) {
              this.callback.appel(
                this._getParamsCallback(
                  Enumere_EvenementListe_1.EGenreEvenementListe.Selection,
                  I,
                  J,
                  {
                    surClavier: aSurClavier,
                    surInteractionUtilisateur:
                      aSurInteractionUtilisateur !== false,
                  },
                ),
                Enumere_EvenementListe_1.EGenreEvenementListe.Selection,
                I,
                J,
              );
            }
          }
        }
        this._refreshSelf();
        return true;
      }
      _surModificationSelectionEvenement(
        aSelectionsAncienne,
        aSurInteractionUtilisateur,
      ) {
        if (
          !this.Donnees ||
          !this.Donnees.options.avecEvnt_ModificationSelection
        ) {
          return false;
        }
        const lSelectionCourante = this._getCellulesSelection();
        if (
          aSelectionsAncienne &&
          lSelectionCourante &&
          aSelectionsAncienne.length === lSelectionCourante.length
        ) {
          const lIdentique = lSelectionCourante.every((aSelection, aIndex) => {
            const lSelection = aSelectionsAncienne[aIndex];
            return (
              aSelection.ligne === lSelection.ligne &&
              aSelection.article === lSelection.article &&
              MethodesObjet_1.MethodesObjet.objetsIdentiques(
                aSelection.colonnes,
                lSelection.colonnes,
              )
            );
          });
          if (lIdentique) {
            return false;
          }
        }
        if (this.Pere && this.Evenement) {
          this.callback.appel(
            this._getParamsCallback(
              Enumere_EvenementListe_1.EGenreEvenementListe
                .ModificationSelection,
              -1,
              -1,
              {
                cellulesSelection: lSelectionCourante,
                surInteractionUtilisateur: !!aSurInteractionUtilisateur,
              },
            ),
            Enumere_EvenementListe_1.EGenreEvenementListe.ModificationSelection,
            -1,
            -1,
          );
          this._refreshSelf();
          return true;
        }
        return false;
      }
      _refreshSelf() {
        if (
          this.Pere &&
          this.Pere instanceof ObjetIdentite_1.Identite &&
          this.Pere.$refresh
        ) {
          this.Pere.$refresh();
        } else {
          this.$refreshSelf();
        }
      }
      surSuppressionEvenement(aParams) {
        let lResult = false;
        if (
          this.Donnees &&
          (aParams.ligne > -1 ||
            (aParams.listeSuppressions &&
              aParams.listeSuppressions.count() > 0))
        ) {
          if (this.Donnees.avecEvenementSuppression(aParams)) {
            if (this.Pere && this.Evenement) {
              lResult = true;
              this.callback.appel(
                this._getParamsCallback(
                  Enumere_EvenementListe_1.EGenreEvenementListe.Suppression,
                  aParams.colonne,
                  aParams.ligne,
                  aParams,
                ),
                Enumere_EvenementListe_1.EGenreEvenementListe.Suppression,
                aParams.colonne,
                aParams.ligne,
              );
            }
          }
        }
        this._refreshSelf();
        return lResult;
      }
      surApresCreationEvenement(aLigne) {
        if (!this.Donnees) {
          return;
        }
        const lParams = this._getParamsCallback(
          Enumere_EvenementListe_1.EGenreEvenementListe.ApresCreation,
          null,
          aLigne,
        );
        if (this.Donnees.avecEvenementApresCreation()) {
          if (this.Pere && this.Evenement) {
            const lResult = this.callback.appel(
              lParams,
              Enumere_EvenementListe_1.EGenreEvenementListe.ApresCreation,
              null,
              null,
            );
            this._refreshSelf();
            return lResult;
          }
        }
      }
      surApresErreurCreationEvenement() {
        if (this.Donnees) {
          if (this.Donnees.avecEvenementApresErreurCreation()) {
            if (this.Pere && this.Evenement) {
              const lResult = this.callback.appel(
                this._getParamsCallback(
                  Enumere_EvenementListe_1.EGenreEvenementListe
                    .ApresErreurCreation,
                  null,
                  null,
                ),
                Enumere_EvenementListe_1.EGenreEvenementListe
                  .ApresErreurCreation,
                null,
                null,
              );
              this._refreshSelf();
              return lResult;
            }
          }
        }
      }
      surApresEditionEvenement(aParams) {
        if (this.Donnees) {
          if (this.Donnees.avecEvenementApresEdition(aParams)) {
            if (this.Pere && this.Evenement) {
              this.callback.appel(
                this._getParamsCallback(
                  Enumere_EvenementListe_1.EGenreEvenementListe.ApresEdition,
                  aParams.colonne,
                  aParams.ligne,
                  { avecModification: !!aParams.avecModification },
                ),
                Enumere_EvenementListe_1.EGenreEvenementListe.ApresEdition,
                aParams.colonne,
                aParams.ligne,
              );
            }
          }
        }
        this._refreshSelf();
        return true;
      }
      surApresSuppressionEvenement(aParams) {
        if (this.Donnees) {
          if (this.Donnees.avecEvenementApresSuppression()) {
            if (this.Pere && this.Evenement) {
              this.callback.appel(
                this._getParamsCallback(
                  Enumere_EvenementListe_1.EGenreEvenementListe
                    .ApresSuppression,
                  aParams.colonne,
                  aParams.ligne,
                  aParams,
                ),
                Enumere_EvenementListe_1.EGenreEvenementListe.ApresSuppression,
                aParams.colonne,
                aParams.ligne,
              );
            }
          }
        }
        this._refreshSelf();
      }
      entrerEdition() {
        this._nettoyerElementsEditionEnCours();
        this._setStyleCellule(this.IdCellule, null, null, false, true);
      }
      _getMapHTMLControleTexte(aParams) {
        const lControle = this.Donnees.getControleCaracteresInput(aParams);
        let lResult = {};
        if (lControle && lControle.mask) {
          lResult['ie-mask'] = '/[^' + lControle.mask + ']/i';
        }
        if (
          lControle &&
          lControle.tailleMax > 0 &&
          lControle.tailleMax < this._options.maxLengthTextareaIgnore
        ) {
          lResult.maxlength = lControle.tailleMax;
        }
        if (
          !lResult.maxlength &&
          IEHtml.MAX_LENGTH_Default > 0 &&
          this.Donnees._getTailleTexteMax(aParams) > IEHtml.MAX_LENGTH_Default
        ) {
          lResult.maxlength = 0;
        }
        return lResult;
      }
      _toString(aValeur) {
        return aValeur + '';
      }
      _setValueModel(aParams) {
        const lParams = Object.assign(
          {
            node: null,
            ligne: -1,
            colonne: -1,
            surCreation: false,
            value: '',
            estNote: false,
          },
          aParams,
        );
        this._cache.avecModificationSaisie = true;
        if (this._fenetreInformationAffichee) {
          return;
        }
        if (lParams.surCreation) {
          if (this._messageEnCoursSurCreation) {
            return;
          }
          if (!this._cache.creationEnCours) {
            return;
          }
          lParams.colonne = this._cache.numeroColonneCreationEnCours;
          lParams.ligne = -1;
        } else {
          if (!this._cache.editionEnCours) {
            return;
          }
        }
        if (lParams.estNote) {
          this._valeurEnEdition = lParams.value;
          return;
        }
        this._valeurEnEdition = this._toString(lParams.value);
        const lParamsCellule = this._getParamsCellule(
          lParams.colonne,
          lParams.ligne,
          {
            surEdition: true,
            surLigneCreation: lParams.surCreation,
            surInputSaisie: true,
          },
        );
        const lControle = ObjetChaine_1.GChaine.controleTailleTexte({
          chaine: this._valeurEnEdition,
          tailleTexteMax: this.Donnees._getTailleTexteMax(lParamsCellule),
        });
        if (!lControle.controleOK) {
          this._valeurEnEdition = lControle.chaine;
          this._fenetreInformationAffichee = true;
          GApplication.getMessage().afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
            message: this.Donnees.getMessageTailleMaximaleSaisie(),
            callback: () => {
              this._fenetreInformationAffichee = false;
              ObjetHtml_1.GHtml.setFocus(lParams.node);
            },
          });
        }
      }
      getIndiceColonneVisibleDeColonne(aColonne) {
        let lNumeroColonneVisible = 0;
        for (const lInfo of this._cache.infosZonesColonnes) {
          for (const lNumeroColonne of lInfo.colonnesVisibles) {
            lNumeroColonneVisible += 1;
            if (lNumeroColonne === aColonne) {
              return lNumeroColonneVisible;
            }
          }
        }
        return lNumeroColonneVisible || 1;
      }
      entrerTexte(
        aColonne,
        aLigne,
        aSurLigneCreation,
        aTypeCellule,
        aIgnorerEventsNode,
        aForcerEnFenetre,
      ) {
        const lParamsCellule = this._getParamsCellule(aColonne, aLigne, {
          surEdition: true,
          surLigneCreation: aSurLigneCreation,
          surInputSaisie: true,
        });
        let LValeur = this.Donnees._getValeur(lParamsCellule),
          lClass = '';
        const lEstNote =
          aTypeCellule ===
          ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Note;
        if (!lEstNote) {
          LValeur = this._toString(LValeur);
        }
        this._valeurEnEdition = LValeur;
        try {
          lClass = this.Donnees.getClass(lParamsCellule);
        } catch (e) {
          lClass = '';
        }
        const lEditionEnFenetre =
          aForcerEnFenetre ||
          (this.optionsInterne.versionMobile && aSurLigneCreation);
        const lIgnorerEventsNode = lEditionEnFenetre
          ? true
          : aIgnorerEventsNode;
        const H = [];
        const lIndexLigne = this._cache.lignesVisibles.indexOf(aLigne);
        let lAriaLabel = this.Donnees.getWAIInputEdition(lParamsCellule);
        if (lAriaLabel.trim() !== '') {
          lAriaLabel += ' ';
        }
        if (!aSurLigneCreation) {
          lAriaLabel += `${'ligne'} ${lIndexLigne >= 0 ? lIndexLigne + 1 : aLigne} ${'colonne'} ${this.getIndiceColonneVisibleDeColonne(aColonne)}`;
        }
        const lMapAttr = Object.assign(
          {
            id: this.IdEdition,
            class: [
              'Texte10 Liste_Input_Texte',
              lClass || '',
              lEditionEnFenetre ? 'round-style full-width' : '',
            ],
            style: lEditionEnFenetre ? false : 'border: 0px;',
            'ie-model': (0, jsx_1.jsxFuncAttr)('liste.saisieTexte', [
              aLigne,
              aColonne,
              !!aSurLigneCreation,
              lEstNote,
              false,
              lIgnorerEventsNode,
            ]),
            'aria-label': lAriaLabel,
            autocomplete: lEstNote ? 'off' : false,
            autocorrect: lEstNote ? 'off' : false,
            autocapitalize: lEstNote ? 'off' : false,
            spellcheck: lEstNote ? 'false' : false,
            size: aSurLigneCreation ? '1' : false,
          },
          this._getMapHTMLControleTexte(lParamsCellule),
        );
        const lHtmlInput = lEstNote
          ? IE.jsx.str('ie-inputnote', Object.assign({}, lMapAttr))
          : IE.jsx.str('input', Object.assign({}, lMapAttr));
        if (lEditionEnFenetre) {
          this.surEditionTextFenetreAsync({
            html: lHtmlInput,
            surCreation: aSurLigneCreation,
            surInputText: true,
            colonne: aColonne,
          });
          return;
        }
        const lHeightCellule = $('#' + this.IdCellule.escapeJQ()).height();
        const lHeight =
          this._getHeightCellule(lParamsCellule) -
          2 * this._options.paddingCelluleTB;
        if (this.optionsInterne.versionMobile) {
          H.push(
            IE.jsx.str(
              'div',
              {
                style: lHeightCellule
                  ? 'height:' +
                    lHeightCellule +
                    'px; line-height:' +
                    lHeightCellule +
                    'px;'
                  : '',
              },
              lHtmlInput,
            ),
          );
        } else {
          H.push(
            IE.jsx.str(
              'div',
              {
                style: `width: 100%; height:${lHeightCellule}px; line-height:${Math.min(lHeight, lHeightCellule)}px;`,
              },
              lHtmlInput,
            ),
          );
        }
        ObjetHtml_1.GHtml.setHtml(this.IdCellule, H.join(''), {
          instance: this,
        });
      }
      getIdAriaTitreDeColonne(aColonne) {
        if (this.ListeTitres && this.ListeTitres.length > 0) {
          return `${this.Nom}_titreAriaCelCol_${aColonne}`;
        }
        return '';
      }
      _getInfosZoneColonneDeNumeroColonne(aNumeroColonne) {
        let lInfosZone = null;
        this._cache.infosZonesColonnes.every((aZone) => {
          if (
            aNumeroColonne >= aZone.indiceColonneDebut &&
            aNumeroColonne <= aZone.indiceColonneFin
          ) {
            lInfosZone = aZone;
            return false;
          }
          return true;
        });
        return (
          lInfosZone ||
          this._cache.infosZonesColonnes[
            this._cache.infosZonesColonnes.length - 1
          ]
        );
      }
      afficherMarqueurEditionSurCellule(aColonne, aLigne) {
        if (this._options.skin === ObjetListe.skin.flatDesign) {
          return;
        }
        const lJConteneur = $('#' + this.ids.zoneFils.escapeJQ());
        $('#' + this.ids.surligneur_edition.escapeJQ()).remove();
        const lFunc = () => {
          const lRectCellule = ObjetPosition_1.GPosition.getClientRect(
            this.getIdCellule(aColonne, aLigne),
          );
          const lRectContenur = ObjetPosition_1.GPosition.getClientRect(
            this.ids.zoneFils,
          );
          const lInfosZone = this._getInfosZoneColonneDeNumeroColonne(aColonne);
          const lPremiereColonneBlocFixeDroite =
            lInfosZone.estBlocFixeDroite &&
            aColonne === lInfosZone.indiceColonneDebut;
          const lPos = {
            top: lRectCellule.top - lRectContenur.top - 2,
            left:
              lRectCellule.left +
              (lPremiereColonneBlocFixeDroite ? 1 : 0) -
              lRectContenur.left -
              2,
            height: lRectCellule.height + 3,
            width: lRectCellule.width + 3,
          };
          if (lPos.left + lPos.width > lRectContenur.width) {
            lPos.width = Math.max(
              1,
              lPos.width - (lPos.left + lPos.width - lRectContenur.width + 2),
            );
          }
          return lPos;
        };
        const lPos = lFunc();
        lJConteneur.ieHtmlAppend(
          [
            '<div id="',
            this.ids.surligneur_edition,
            '" class="liste_surligneur_edition" style="',
            ObjetStyle_1.GStyle.composeWidth(lPos.width),
            ObjetStyle_1.GStyle.composeHeight(lPos.height),
            'top:' + lPos.top + 'px;',
            'left:' + lPos.left + 'px;',
            '">',
            '</div>',
          ].join(''),
        );
        $('#' + this.ids.surligneur_edition.escapeJQ()).data('positionnement', {
          func: () => {
            const lPos = lFunc();
            $('#' + this.ids.surligneur_edition.escapeJQ()).css({
              left: lPos.left,
              top: lPos.top,
            });
          },
        });
      }
      entrerZoneTexte(
        aColonne,
        aLigne,
        aSurLigneCreation,
        aNumeroLigneCreation,
        aIgnorerEventsNode,
        aForcerEnFenetre,
      ) {
        const lParamsCellule = this._getParamsCellule(aColonne, aLigne, {
          surEdition: true,
          surLigneCreation: aSurLigneCreation,
          surInputSaisie: true,
          numeroLigneCreation: aNumeroLigneCreation,
        });
        this._valeurEnEdition = this._toString(
          this.Donnees._getValeur(lParamsCellule),
        );
        let lTailleMax = 0;
        const lControle =
          this.Donnees.getControleCaracteresInput(lParamsCellule);
        if (lControle) {
          lTailleMax = lControle.tailleMax || 0;
        }
        if (
          lTailleMax === 0 ||
          !MethodesObjet_1.MethodesObjet.isNumber(lControle.tailleMax)
        ) {
          lTailleMax = this.Donnees._getTailleTexteMax(lParamsCellule) || 0;
        }
        if (
          lTailleMax >= this._options.maxLengthTextareaIgnore ||
          !MethodesObjet_1.MethodesObjet.isNumber(lTailleMax)
        ) {
          lTailleMax = 0;
        }
        const lEditionEnFenetre =
          aForcerEnFenetre || this.optionsInterne.versionMobile;
        const lIgnorerEventsNode =
          this.optionsInterne.versionMobile || lEditionEnFenetre
            ? true
            : aIgnorerEventsNode;
        const T = [];
        T.push(
          IE.jsx.str(
            'ie-textareamax',
            Object.assign(
              {
                id: this.IdEdition,
                'ie-autoresize': lEditionEnFenetre,
                class: 'liste_textarea',
                'ie-model': (0, jsx_1.jsxFuncAttr)('liste.saisieTexte', [
                  aLigne,
                  aColonne,
                  !!aSurLigneCreation,
                  false,
                  true,
                  lIgnorerEventsNode,
                ]),
              },
              this._getMapHTMLControleTexte(lParamsCellule),
              { 'ie-compteurmax': lTailleMax > 0 ? lTailleMax : false },
            ),
          ),
        );
        const lInfosZone = this._getInfosZoneColonneDeNumeroColonne(aColonne),
          lPremiereColonneBlocFixeDroite =
            lInfosZone.estBlocFixeDroite &&
            aColonne === lInfosZone.indiceColonneDebut,
          lEstLigneCreationTitre =
            aSurLigneCreation && !(aNumeroLigneCreation >= 0);
        if (lEditionEnFenetre) {
          this.surEditionTextFenetreAsync({
            html: T.join(''),
            surCreation: aSurLigneCreation,
            colonne: aColonne,
          });
          return;
        }
        const lOffset = $('#' + this.IdCellule.escapeJQ()).offset();
        const lJConteneur = $('#' + this.ids.zoneFils.escapeJQ());
        const lOffsetConteneur = lJConteneur.offset();
        const lHeightConteneur = lJConteneur.height();
        const lPositionnement = {
          width:
            ObjetPosition_1.GPosition.getWidth(this.IdCellule) +
            (lInfosZone.dernierBloc && aColonne === lInfosZone.indiceColonneFin
              ? 1
              : 0) +
            (lPremiereColonneBlocFixeDroite ? -1 : 0),
          height: Math.max(
            Math.min(100, lHeightConteneur),
            ObjetPosition_1.GPosition.getHeight(this.IdCellule) + 1,
          ),
          left:
            lOffset.left -
            1 +
            (lPremiereColonneBlocFixeDroite ? 1 : 0) -
            lOffsetConteneur.left,
          top:
            lOffset.top +
            (lEstLigneCreationTitre ? 0 : -1) -
            lOffsetConteneur.top,
        };
        if (
          lOffset.top - lOffsetConteneur.top + lPositionnement.height >=
          lHeightConteneur
        ) {
          lPositionnement.top = Math.max(
            0,
            lPositionnement.top -
              (lOffset.top -
                lOffsetConteneur.top +
                lPositionnement.height -
                lHeightConteneur),
          );
        }
        lJConteneur.ieHtmlAppend(
          [
            '<div id="' +
              this.IdZoneTexte +
              '" class="liste_saisie_textarea" style="',
            ObjetStyle_1.GStyle.composeWidth(lPositionnement.width),
            ObjetStyle_1.GStyle.composeHeight(lPositionnement.height),
            'top:' + lPositionnement.top + 'px;',
            'left:' + lPositionnement.left + 'px;',
            '">' + T.join('') + '</div>',
          ].join(''),
          { controleur: this.controleur },
        );
      }
      _nettoyerElementsEditionEnCours() {
        $('#' + this.IdZoneTexte.escapeJQ()).remove();
        $('#' + this.ids.surligneur_edition.escapeJQ()).remove();
      }
      _surSelection(aNumeroColonne, aNumeroLigne, aParams) {
        if (this._cache.creationEnCours || this._cache.editionEnCours) {
          return false;
        }
        if (!this.Donnees) {
          return false;
        }
        const lParams = Object.assign(
          {
            avecFocus: true,
            forcerMonoSelection: false,
            ctrlKey: false,
            shiftKey: false,
            avecEvenementModificationSelection: true,
            surInteractionUtilisateur: false,
          },
          aParams,
        );
        this._cache.lignesSelectionnees_prec = [
          ...this._cache.lignesSelectionnees,
        ];
        const lSelections = lParams.avecEvenementModificationSelection
          ? this._getCellulesSelection(true)
          : null;
        let iLigne, iColonne;
        const lAvecMultiSelection =
            this.Donnees.avecMultiSelection() && !lParams.forcerMonoSelection,
          lEstSelectionParCellule = this._estSelectionParCellule(
            aNumeroLigne,
            aNumeroColonne,
          ),
          lMultiSelectionCtrl =
            lAvecMultiSelection &&
            (!this.Donnees.avecMultiSelectionSurCtrl() || lParams.ctrlKey),
          lMultiSelectionShift =
            lAvecMultiSelection &&
            (!this.Donnees.avecMultiSelectionSurShift() || lParams.shiftKey);
        if (!lMultiSelectionCtrl && !lMultiSelectionShift) {
          const lParamsCellule = this._getParamsCellule(
            aNumeroColonne,
            aNumeroLigne,
          );
          if (
            this._etatSelectionCellule({
              ligne: aNumeroLigne,
              colonne: aNumeroColonne,
              cacheSelection: this._cache.lignesSelectionnees_prec,
            }) &&
            this.Donnees._avecDeselection(lParamsCellule) &&
            !lAvecMultiSelection &&
            (lParams.ctrlKey ||
              this.Donnees.options.avecDeselectionMonoSelectionClick)
          ) {
            this._selectionner({
              deselectionnerTout: true,
              selectionner: false,
              avecEvenementModificationSelection: true,
            });
            this._cache.selectionCellule.ligne = -1;
            this._cache.selectionCellule.colonne = -1;
            this.Donnees._surSelection(aNumeroLigne, aNumeroColonne, false);
            return;
          }
          if (
            aNumeroColonne === this._cache.selectionCellule.colonne &&
            aNumeroLigne === this._cache.selectionCellule.ligne &&
            !lAvecMultiSelection &&
            this._etatSelectionCellule({
              ligne: aNumeroLigne,
              colonne: aNumeroColonne,
            })
          ) {
            return;
          }
          this._cache.selectionCellule.ligne = aNumeroLigne;
          this._cache.selectionCellule.colonne = aNumeroColonne;
          this._selectionner({
            ligne: aNumeroLigne,
            colonne: aNumeroColonne,
            deselectionnerTout: true,
            selectionner: true,
            _avecVisuCadreSelection: false,
          });
        } else if (lMultiSelectionShift) {
          if (
            !this._cache.celluleClicNonShift ||
            this._cache.celluleClicNonShift.ligne < 0 ||
            this._cache.celluleClicNonShift.colonne < 0
          ) {
            return;
          }
          const lMinLigne = Math.min(
              aNumeroLigne,
              this._cache.celluleClicNonShift.ligne,
            ),
            lMaxLigne = Math.max(
              aNumeroLigne,
              this._cache.celluleClicNonShift.ligne,
            );
          if (lEstSelectionParCellule) {
            const lMinColonne = Math.min(
                aNumeroColonne,
                this._cache.celluleClicNonShift.colonne,
              ),
              lMaxColonne = Math.max(
                aNumeroColonne,
                this._cache.celluleClicNonShift.colonne,
              );
            for (
              iLigne = 0;
              iLigne < this._cache.lignesSelectionnees.length;
              iLigne++
            ) {
              for (
                iColonne = 0;
                iColonne < this.ListeTailles.length;
                iColonne++
              ) {
                const lParamsCellule = this._getParamsCellule(iColonne, iLigne);
                if (
                  iColonne >= lMinColonne &&
                  iColonne <= lMaxColonne &&
                  iLigne >= lMinLigne &&
                  iLigne <= lMaxLigne &&
                  this._estLigneVisible(iLigne, { contexteSelection: true })
                ) {
                  if (
                    !this._etatSelectionCellule({
                      ligne: iLigne,
                      colonne: iColonne,
                    })
                  ) {
                    this._selectionner({
                      ligne: iLigne,
                      colonne: iColonne,
                      selectionner: true,
                      _avecVisuCadreSelection: false,
                    });
                  }
                } else if (
                  this._etatSelectionCellule({
                    ligne: iLigne,
                    colonne: iColonne,
                  }) &&
                  this.Donnees._avecDeselection(lParamsCellule)
                ) {
                  this._selectionner({
                    ligne: iLigne,
                    colonne: iColonne,
                    selectionner: false,
                    _avecVisuCadreSelection: false,
                  });
                }
              }
            }
          } else {
            for (
              iLigne = 0;
              iLigne < this._cache.lignesSelectionnees.length;
              iLigne++
            ) {
              const lParamsCellule = this._getParamsCellule(
                aNumeroColonne,
                iLigne,
              );
              if (
                iLigne >= lMinLigne &&
                iLigne <= lMaxLigne &&
                this._estLigneVisible(iLigne, { contexteSelection: true })
              ) {
                this._selectionner({
                  ligne: iLigne,
                  selectionner: true,
                  _avecVisuCadreSelection: false,
                });
              } else if (
                this._etatSelectionCellule({ ligne: iLigne }) &&
                this.Donnees._avecDeselection(lParamsCellule)
              ) {
                this._selectionner({
                  ligne: iLigne,
                  selectionner: false,
                  _avecVisuCadreSelection: false,
                });
              }
            }
          }
        } else if (lMultiSelectionCtrl) {
          const lNumeroColonneTraite = lEstSelectionParCellule
            ? aNumeroColonne
            : -1;
          if (
            this._etatSelectionCellule({
              ligne: aNumeroLigne,
              colonne: lNumeroColonneTraite,
            })
          ) {
            this._selectionner({
              ligne: aNumeroLigne,
              colonne: aNumeroColonne,
              selectionner: false,
              _avecVisuCadreSelection: false,
            });
            this._cache.selectionCellule.ligne = -1;
            this._cache.selectionCellule.colonne = -1;
          } else {
            this._selectionner({
              ligne: aNumeroLigne,
              colonne: aNumeroColonne,
              selectionner: true,
              _avecVisuCadreSelection: false,
            });
            this._cache.selectionCellule.ligne = aNumeroLigne;
            this._cache.selectionCellule.colonne = aNumeroColonne;
          }
        }
        this._actualiserCadreSelection();
        if (lParams.avecFocus) {
          const lNumeroColonne = aNumeroColonne > -1 ? aNumeroColonne : 0;
          if (this._estLigneDansRangeNonConstruitDyn(aNumeroLigne)) {
            this._scrollSurLigne({
              ligne: aNumeroLigne,
              colonne: lNumeroColonne,
            });
          }
          ObjetHtml_1.GHtml.setFocus(
            this.getIdCellule(lNumeroColonne, aNumeroLigne, true),
          );
        }
        this.Donnees._surSelection(
          this._cache.selectionCellule.colonne,
          this._cache.selectionCellule.ligne,
          true,
        );
        if (lParams.avecEvenementModificationSelection) {
          this._surModificationSelectionEvenement(
            lSelections,
            lParams.surInteractionUtilisateur,
          );
        }
        return true;
      }
      _celluleAvecBordureDroite(aEstDerniereColonne) {
        return (
          !aEstDerniereColonne && this._options.borduresCellule_horizontal > 0
        );
      }
      _getFusionColonnesCellule(aParametres) {
        const lFusion = {},
          lHash = {};
        let lNumeroColonneFusionEnCoursPrec = null,
          lParamsCellule,
          lDerniereColonne,
          lNumeroColonneFusion,
          lNumeroColonneReferenceFusion = aParametres.colonnesVisibles[0];
        const lTailles = aParametres.tailles || this._cache.taillesColonne;
        aParametres.colonnesVisibles.forEach((aNumeroColonne) => {
          if (aParametres.total) {
            lParamsCellule = aParametres.getParamsCellule(aNumeroColonne);
          } else {
            lParamsCellule = this._getParamsCellule(
              aNumeroColonne,
              aParametres.ligne,
              { colonnesVisibles: aParametres.colonnesVisibles },
            );
          }
          if (aParametres.total) {
            lNumeroColonneFusion =
              this.Donnees.getColonneDeFusionTotal(lParamsCellule);
          } else {
            lNumeroColonneFusion =
              this.Donnees.getColonneDeFusion(lParamsCellule);
          }
          if (
            lNumeroColonneFusion === undefined ||
            lNumeroColonneFusion === null
          ) {
            lNumeroColonneFusion = aNumeroColonne;
          } else if (
            MethodesObjet_1.MethodesObjet.isString(lNumeroColonneFusion)
          ) {
            lNumeroColonneFusion =
              this.getNumeroColonneDIdColonne(lNumeroColonneFusion);
          } else if (
            !MethodesObjet_1.MethodesObjet.isNumber(lNumeroColonneFusion)
          ) {
            lNumeroColonneFusion = aNumeroColonne;
          }
          if (
            lNumeroColonneFusion !== aNumeroColonne &&
            !this._estColonneVisible(lNumeroColonneFusion)
          ) {
            IE.log.addLog(
              '[_getFusionColonnesCellule] la colonne de fusion est invisible',
            );
            lNumeroColonneFusion = aNumeroColonne;
          }
          if (
            lNumeroColonneFusion !== aNumeroColonne &&
            (lNumeroColonneFusion > aParametres.indiceColonneFin ||
              lNumeroColonneFusion < aParametres.indiceColonneDebut)
          ) {
            IE.log.addLog(
              '[_getFusionColonnesCellule] la colonne de fusion est hors du bloc',
            );
            lNumeroColonneFusion =
              lNumeroColonneFusion > aParametres.indiceColonneFin
                ? aParametres.indiceColonneFin
                : aParametres.indiceColonneDebut;
          }
          if (
            lNumeroColonneFusionEnCoursPrec !== null &&
            lNumeroColonneFusion < lNumeroColonneFusionEnCoursPrec
          ) {
            IE.log.addLog(
              '[_getFusionColonnesCellule] erreur getColonneDeFusion sur colonne ' +
                aNumeroColonne,
            );
            Object.keys(lHash).forEach((aCle) => {
              if (lHash[aCle] === lNumeroColonneFusionEnCoursPrec) {
                lHash[aCle] = parseInt(aCle, 10);
              }
            });
          }
          if (
            lNumeroColonneFusion === aNumeroColonne &&
            aNumeroColonne > 0 &&
            !aParametres.total &&
            this.Donnees.fusionCelluleAvecColonnePrecedente(lParamsCellule)
          ) {
            lNumeroColonneFusion = lNumeroColonneReferenceFusion;
          } else {
            lNumeroColonneReferenceFusion = aNumeroColonne;
          }
          lHash[aNumeroColonne] = lNumeroColonneFusion;
          lNumeroColonneFusionEnCoursPrec = lNumeroColonneFusion;
        });
        aParametres.colonnesVisibles.forEach((aNumeroColonne) => {
          const lColPrimaire = lHash[aNumeroColonne];
          if (!lFusion[lColPrimaire]) {
            lFusion[lColPrimaire] = {
              nbCol: 0,
              taille: parseInt(lTailles[lColPrimaire].px + '', 10),
              debut: lColPrimaire,
              fin: lColPrimaire,
            };
          }
          lFusion[lColPrimaire].nbCol += 1;
          if (lColPrimaire !== aNumeroColonne) {
            lDerniereColonne =
              aParametres.indiceColonneFin === aNumeroColonne &&
              aParametres.dernierBloc;
            lFusion[lColPrimaire].taille +=
              parseInt(lTailles[aNumeroColonne].px + '', 10) +
              2 * this._options.paddingCelluleLR +
              (this._celluleAvecBordureDroite(lDerniereColonne) ? 1 : 0);
            lFusion[lColPrimaire].debut = Math.min(
              aNumeroColonne,
              lFusion[lColPrimaire].debut,
            );
            lFusion[lColPrimaire].fin = Math.max(
              aNumeroColonne,
              lFusion[lColPrimaire].fin,
            );
          }
        });
        return lFusion;
      }
      setCadreSelectionInterne(aParams, aArrayTraitements) {
        if (
          !aParams.selection &&
          (!aParams.posCellulePrec || !aParams.posCellulePrec.selection)
        ) {
          return;
        }
        const lElement = ObjetHtml_1.GHtml.getElement(aParams.idCellule);
        if (lElement) {
          this._setStyleCellule(
            lElement,
            aParams.colonne,
            aParams.ligne,
            aParams.selection,
          );
        }
        let lNumeroColonne;
        const lIdSelecCellule =
          this.ids.cadreSelection +
          '_sel_' +
          aParams.ligne +
          '_' +
          aParams.colonne;
        let lPositionCache = this._cache.positionsCelluleCadreSelection[
          aParams.ligne
        ]
          ? this._cache.positionsCelluleCadreSelection[aParams.ligne][
              aParams.colonne
            ]
          : null;
        if (aParams.selection) {
          if (!this._cache.positionsCelluleCadreSelection[aParams.ligne]) {
            this._cache.positionsCelluleCadreSelection[aParams.ligne] = {};
          }
          if (
            !this._cache.positionsCelluleCadreSelection[aParams.ligne][
              aParams.colonne
            ]
          ) {
            let lParamsCellule;
            try {
              const lIndexLigne = this._cache.lignesVisibles.indexOf(
                aParams.ligne,
              );
              lParamsCellule = this._getParamsCellule(
                aParams.colonne,
                aParams.ligne,
                {
                  celluleLignePrecedente:
                    lIndexLigne > 0
                      ? this._getParamsCellule(
                          aParams.colonne,
                          this._cache.lignesVisibles[lIndexLigne - 1],
                        )
                      : null,
                  celluleLigneSuivante:
                    lIndexLigne >= 0 &&
                    lIndexLigne + 1 < this._cache.lignesVisibles.length
                      ? this._getParamsCellule(
                          aParams.colonne,
                          this._cache.lignesVisibles[lIndexLigne + 1],
                        )
                      : null,
                },
              );
            } catch (e) {
              lParamsCellule = null;
            }
            let lModifHeight = 0;
            const lNode = ObjetHtml_1.GHtml.getElement(aParams.idCellule);
            if (!lNode) {
              $('#' + lIdSelecCellule.escapeJQ()).remove();
              return;
            }
            if (!this.optionsInterne.versionMobile) {
              if (
                this.Donnees &&
                this._options.borduresCellule_vertical > 0 &&
                lParamsCellule &&
                !this.Donnees.avecBordureBas(lParamsCellule)
              ) {
                lModifHeight += this._options.borduresCellule_vertical;
              } else {
                lModifHeight = ObjetStyle_1.GStyle.getFloatComputedValue(
                  lNode,
                  'border-bottom-width',
                );
              }
            }
            const lRect = ObjetPosition_1.GPosition.getRect(lNode, true);
            let lRectScroll = { top: 0, left: 0 };
            const lConteneurSel = ObjetHtml_1.GHtml.getElement(
              this.ids.cadreSelection + aParams.bloc.indiceBloc,
            );
            if (lConteneurSel) {
              lRectScroll = ObjetPosition_1.GPosition.getRect(
                lConteneurSel,
                true,
              );
            }
            this._cache.positionsCelluleCadreSelection[aParams.ligne][
              aParams.colonne
            ] = {
              top: lRect.top - lRectScroll.top,
              left: lRect.left - lRectScroll.left,
              height: lRect.height - lModifHeight,
              width: lRect.width,
            };
            lPositionCache =
              this._cache.positionsCelluleCadreSelection[aParams.ligne][
                aParams.colonne
              ];
          }
        }
        if (lPositionCache) {
          lPositionCache.selection = !!aParams.selection;
        }
        if (aParams.selection) {
          let lBloc;
          const lFusionLigneIdentique = function (aColonne) {
            if (
              !this._cache.lignesFusionParColonne[
                aColonne + '_' + aParams.ligne
              ] &&
              !this._cache.lignesFusionParColonne[
                aParams.colonne + '_' + aParams.ligne
              ]
            ) {
              return true;
            }
            if (
              this._cache.lignesFusionParColonne[
                lNumeroColonne + '_' + aParams.ligne
              ] &&
              this._cache.lignesFusionParColonne[
                aParams.colonne + '_' + aParams.ligne
              ] &&
              this._cache.lignesFusionParColonne[
                aParams.colonne + '_' + aParams.ligne
              ].ligneOrigine ===
                this._cache.lignesFusionParColonne[
                  aParams.colonne + '_' + aParams.ligne
                ].ligneOrigine
            ) {
              return true;
            }
            return false;
          };
          const lFusions = this._getFusionColonnesCellule({
            colonnesVisibles: aParams.bloc.colonnesVisibles,
            ligne: aParams.ligne,
            indiceColonneDebut: aParams.bloc.indiceColonneDebut,
            indiceColonneFin: aParams.bloc.indiceColonneFin,
            dernierBloc:
              aParams.bloc.dernierBloc ||
              (!aParams.bloc.dernierBloc && !aParams.bloc.estBlocFixe),
          });
          let lIndiceCol = aParams.bloc.colonnesVisibles.indexOf(
            lFusions[aParams.colonne].debut,
          );
          lNumeroColonne = aParams.bloc.colonnesVisibles[lIndiceCol - 1];
          if (lIndiceCol === 0) {
            lBloc = this._cache.infosZonesColonnes[aParams.bloc.indiceBloc - 1];
            if (lBloc) {
              lNumeroColonne =
                lBloc.colonnesVisibles[lBloc.colonnesVisibles.length - 1];
            }
          }
          const lParamsCellulePrec = this._getParamsCellule(
            lNumeroColonne,
            aParams.ligne,
          );
          lPositionCache.selColPrec =
            (aParams.bloc.indiceBloc > 0 ||
              aParams.colonne > aParams.bloc.colonnesVisibles[0]) &&
            lFusionLigneIdentique.call(this, lNumeroColonne) &&
            this._etatSelectionCellule({
              ligne: aParams.ligne,
              colonne: lNumeroColonne,
            }) &&
            this.Donnees._avecSelection(lParamsCellulePrec);
          lIndiceCol = aParams.bloc.colonnesVisibles.indexOf(
            lFusions[aParams.colonne].fin,
          );
          lNumeroColonne = aParams.bloc.colonnesVisibles[lIndiceCol + 1];
          if (lIndiceCol >= aParams.bloc.colonnesVisibles.length - 1) {
            lBloc = this._cache.infosZonesColonnes[aParams.bloc.indiceBloc + 1];
            if (lBloc) {
              lNumeroColonne = lBloc.colonnesVisibles[0];
            }
          }
          const lParamsCelluleSuiv = this._getParamsCellule(
            lNumeroColonne,
            aParams.ligne,
          );
          lPositionCache.selColSuivante =
            (!aParams.bloc.dernierBloc ||
              aParams.colonne <
                aParams.bloc.colonnesVisibles[
                  aParams.bloc.colonnesVisibles.length - 1
                ]) &&
            lFusionLigneIdentique.call(this, lNumeroColonne) &&
            this._etatSelectionCellule({
              ligne: aParams.ligne,
              colonne: lNumeroColonne,
            }) &&
            this.Donnees._avecSelection(lParamsCelluleSuiv);
          if (
            aParams.posCellulePrec &&
            aParams.posCellulePrec.selection &&
            aParams.posCellulePrec.selColPrec === lPositionCache.selColPrec &&
            aParams.posCellulePrec.selColSuivante ===
              lPositionCache.selColSuivante
          ) {
            return;
          }
          const lStyle =
            ObjetStyle_1.GStyle.composeWidth(
              lPositionCache.width +
                (lPositionCache.selColPrec ? 1 : 0) +
                (lPositionCache.selColSuivante ? 1 : 0),
            ) +
            'left:' +
            (lPositionCache.selColPrec ? -1 : 0) +
            'px;';
          const lId = this.ids.cadreSelection + aParams.bloc.indiceBloc;
          $('#' + lIdSelecCellule.escapeJQ()).remove();
          aArrayTraitements.cacheHTML[lId] =
            (aArrayTraitements.cacheHTML[lId] || '') +
            (0, tag_1.tag)(
              'div',
              {
                class: 'liste_ligneSelection',
                id: lIdSelecCellule,
                style:
                  'top:' +
                  lPositionCache.top +
                  'px;' +
                  'left:' +
                  lPositionCache.left +
                  'px;',
              },
              !lPositionCache.selColPrec
                ? (0, tag_1.tag)('div', {
                    class: 'liste_ligneSelection_g',
                    style: ObjetStyle_1.GStyle.composeHeight(
                      lPositionCache.height,
                    ),
                  })
                : '',
              (0, tag_1.tag)('div', {
                class: 'liste_ligneSelection_h',
                style: lStyle,
              }),
              !lPositionCache.selColSuivante
                ? (0, tag_1.tag)('div', {
                    class: 'liste_ligneSelection_d',
                    style:
                      'left:' +
                      (lPositionCache.width - 2) +
                      'px;' +
                      ObjetStyle_1.GStyle.composeHeight(lPositionCache.height),
                  })
                : '',
              (0, tag_1.tag)('div', {
                class: 'liste_ligneSelection_b',
                style: 'top:' + (lPositionCache.height - 2) + 'px;' + lStyle,
              }),
            );
        } else {
          if (aParams.posCellulePrec && aParams.posCellulePrec.selection) {
            $('#' + lIdSelecCellule.escapeJQ()).remove();
          }
        }
      }
      _actualiserCadreSelection() {
        if (this._options.avecCadreSelection) {
          this._getTraitementsAffichageSelection().forEach(
            (aTraitement, aIndex, aArray) => {
              this._setCadreSelection(aTraitement, aIndex, aArray);
            },
          );
        }
      }
      _setCadreSelection(aParams, aIndexTraitement, aArrayTraitements) {
        if (aIndexTraitement === 0) {
          aArrayTraitements.cacheHTML = {};
        }
        this.setCadreSelectionInterne(aParams, aArrayTraitements);
        if (aIndexTraitement >= aArrayTraitements.length - 1) {
          for (const lKey in aArrayTraitements.cacheHTML) {
            const lElementBloc = ObjetHtml_1.GHtml.getElement(lKey);
            if (lElementBloc) {
              lElementBloc.innerHTML += aArrayTraitements.cacheHTML[lKey];
            }
          }
        }
      }
      _etatSelectionCellule(aParametres, aSelectionne) {
        const lParametres = Object.assign(
          {
            ligne: -1,
            colonne: -1,
            cacheSelection: this._cache.lignesSelectionnees,
          },
          aParametres,
        );
        if (arguments.length > 1) {
          if (aSelectionne) {
            const lParamsCellule = this._getParamsCellule(
              lParametres.colonne,
              lParametres.ligne,
            );
            if (
              lParametres.colonne >= 0 &&
              !this.Donnees._avecSelection(lParamsCellule)
            ) {
              return;
            }
            if (!lParametres.cacheSelection[lParametres.ligne]) {
              lParametres.cacheSelection[lParametres.ligne] = [];
            }
            if (lParametres.colonne < 0) {
              for (let i = 0; i < this.ListeTailles.length; i++) {
                lParametres.cacheSelection[lParametres.ligne][i] = true;
              }
            } else {
              lParametres.cacheSelection[lParametres.ligne][
                lParametres.colonne
              ] = aSelectionne;
            }
          } else {
            if (!lParametres.cacheSelection[lParametres.ligne]) {
              return;
            }
            if (lParametres.colonne < 0) {
              delete lParametres.cacheSelection[lParametres.ligne];
              return;
            }
            lParametres.cacheSelection[lParametres.ligne][lParametres.colonne] =
              false;
            if (
              lParametres.cacheSelection[lParametres.ligne].every(
                (aColonne) => {
                  return aColonne !== true;
                },
              )
            ) {
              delete lParametres.cacheSelection[lParametres.ligne];
            }
          }
        } else {
          if (!lParametres.cacheSelection[lParametres.ligne]) {
            return false;
          }
          if (lParametres.colonne < 0) {
            return !!lParametres.cacheSelection[lParametres.ligne];
          }
          return !!lParametres.cacheSelection[lParametres.ligne][
            lParametres.colonne
          ];
        }
      }
      _getTraitementsAffichageSelection() {
        const lTraitements = [];
        if (!this.Donnees) {
          return lTraitements;
        }
        this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
          this.Donnees.Donnees.parcourir((aArticle, aLigne) => {
            if (this._estLigneVisible(aLigne, { contexteSelection: true })) {
              aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
                const lPosCellule =
                  this._cache.positionsCelluleCadreSelection[aLigne] &&
                  this._cache.positionsCelluleCadreSelection[aLigne][
                    aNumeroColonne
                  ]
                    ? this._cache.positionsCelluleCadreSelection[aLigne][
                        aNumeroColonne
                      ]
                    : null;
                const lParamsCellule = this._getParamsCellule(
                  aNumeroColonne,
                  aLigne,
                );
                const lTraitement = {
                  bloc: aInfosZoneColonnes,
                  ligne: aLigne,
                  colonne: aNumeroColonne,
                  idCellule: this.getIdCellule(aNumeroColonne, aLigne),
                  selection:
                    !!this._etatSelectionCellule({
                      ligne: aLigne,
                      colonne: aNumeroColonne,
                    }) && !!this.Donnees._avecSelection(lParamsCellule),
                  posCellulePrec: Object.assign({}, lPosCellule),
                };
                lTraitements.push(lTraitement);
              });
            }
          });
        });
        return lTraitements;
      }
      _selectionner(aParametres) {
        if (!this.Donnees) {
          return;
        }
        const lParametres = Object.assign(
          {
            ligne: -1,
            colonne: -1,
            selectionner: true,
            avecScroll: false,
            avecEvenement: false,
            deselectionnerTout: false,
            avecFocusCellule: false,
            _avecVisuCadreSelection: true,
            avecEvenementModificationSelection: false,
          },
          aParametres,
        );
        let lNumeroColonne = lParametres.colonne;
        let lTrouverLignePourScroll = false;
        const lEstSelectionParCellule = this._estSelectionParCellule(
          lParametres.ligne,
          lNumeroColonne,
        );
        const lAvecMultiSelection = this.Donnees.avecMultiSelection();
        const lParamsCellule = this._getParamsCellule(
          lParametres.colonne,
          lParametres.ligne,
        );
        const lCelluleAvecSelection =
          lParametres.ligne >= 0
            ? this.Donnees._avecSelection(lParamsCellule)
            : true;
        if (
          lParametres.selectionner &&
          lEstSelectionParCellule &&
          !lCelluleAvecSelection
        ) {
          return;
        }
        if (!lEstSelectionParCellule) {
          lNumeroColonne = -1;
        }
        if (
          lParametres.selectionner &&
          lParametres.ligne > -1 &&
          !lAvecMultiSelection &&
          !lParametres._surMultiSelectionMiroir
        ) {
          if (lParametres.deselectionnerTout === false) {
            lParametres.deselectionnerTout = true;
          } else if (
            lParametres.deselectionnerTout &&
            !lCelluleAvecSelection &&
            lParametres.ligne >= 0 &&
            !this.Donnees.options.avecDeselectionSurNonSelectionnable
          ) {
            lParametres.deselectionnerTout = false;
          }
        }
        const lSelectionsPrecedente =
          lParametres.avecEvenementModificationSelection
            ? this._getCellulesSelection(true)
            : null;
        if (lParametres.deselectionnerTout) {
          let lAvecDeselectionCellule = false;
          for (
            let lLigne = 0;
            lLigne < this._cache.lignesSelectionnees.length;
            lLigne++
          ) {
            if (lEstSelectionParCellule) {
              for (
                let lColonne = 0;
                lColonne < this.ListeTailles.length;
                lColonne++
              ) {
                if (
                  this._etatSelectionCellule({
                    ligne: lLigne,
                    colonne: lColonne,
                  })
                ) {
                  if (
                    lLigne !== lParametres.ligne ||
                    lColonne !== lNumeroColonne
                  ) {
                    lAvecDeselectionCellule = true;
                  }
                  this._selectionner({
                    ligne: lLigne,
                    colonne: lColonne,
                    selectionner: false,
                    _avecVisuCadreSelection: false,
                  });
                }
              }
            } else {
              if (this._etatSelectionCellule({ ligne: lLigne })) {
                if (lLigne !== lParametres.ligne) {
                  lAvecDeselectionCellule = true;
                }
                this._selectionner({
                  ligne: lLigne,
                  selectionner: false,
                  _avecVisuCadreSelection: false,
                });
              }
            }
          }
          if (lAvecDeselectionCellule && lAvecMultiSelection) {
            this._cache.lignesSelectionnees_prec = [];
          }
        }
        let lOldlignesSelection = null;
        if (lParametres.ligne > -1) {
          lOldlignesSelection = [...this._cache.lignesSelectionnees];
          if (!lParametres.selectionner && lNumeroColonne === -1) {
            this._etatSelectionCellule(
              { ligne: lParametres.ligne, colonne: lNumeroColonne },
              lParametres.selectionner,
            );
          }
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            this.Donnees.Donnees.parcourir((aElementLigne, aLigne) => {
              if (aElementLigne) {
                const lEstLigneVisible = this._estLigneVisible(aLigne, {
                  contexteSelection: true,
                });
                aInfosZoneColonnes.colonnesVisibles.forEach(
                  (aNumeroColonne) => {
                    const lParamsCelluleDeColonne = this._getParamsCellule(
                      aNumeroColonne,
                      aLigne,
                    );
                    if (
                      !this._estColonneVisible(aNumeroColonne) ||
                      !this.Donnees._avecSelection(lParamsCelluleDeColonne)
                    ) {
                      return;
                    }
                    if (
                      lParametres.selectionner &&
                      lParametres.ligne === aLigne &&
                      !lEstLigneVisible
                    ) {
                      IE.log.addLog(
                        'MMh ? selection de ligne invisible ? voir fv',
                      );
                      return;
                    }
                    if (
                      lParametres.ligne === aLigne &&
                      (lNumeroColonne === -1 ||
                        lNumeroColonne === aNumeroColonne)
                    ) {
                      this._etatSelectionCellule(
                        { ligne: lParametres.ligne, colonne: aNumeroColonne },
                        lParametres.selectionner,
                      );
                    } else if (
                      !lEstSelectionParCellule &&
                      this.Donnees.options.avecMultiSelectionSurLigneFusion &&
                      lParametres.ligne !== aLigne &&
                      lParametres.colonne >= 0
                    ) {
                      let lAvecModif = false;
                      let lFusionCellule;
                      lFusionCellule =
                        this._cache.lignesFusionParColonne[
                          lParametres.colonne + '_' + lParametres.ligne
                        ];
                      if (
                        lFusionCellule &&
                        lFusionCellule.lignesCumuls &&
                        lFusionCellule.lignesCumuls[aLigne]
                      ) {
                        lAvecModif = true;
                      }
                      if (!lAvecModif) {
                        lFusionCellule =
                          this._cache.lignesFusionParColonne[
                            aNumeroColonne + '_' + aLigne
                          ];
                        if (
                          lFusionCellule &&
                          lFusionCellule.lignesCumuls &&
                          lFusionCellule.lignesCumuls[lParametres.ligne]
                        ) {
                          lAvecModif = true;
                        }
                      }
                      if (lAvecModif) {
                        this._etatSelectionCellule(
                          { ligne: aLigne, colonne: aNumeroColonne },
                          lParametres.selectionner,
                        );
                      }
                    }
                  },
                );
              }
            });
          });
          if (
            lParametres.selectionner &&
            !lParametres._surMultiSelectionMiroir
          ) {
            this._cache.selectionCellule.ligne = lParametres.ligne;
            this._cache.selectionCellule.colonne = lParametres.colonne;
          }
          if (lNumeroColonne < 0 && !lParametres._surMultiSelectionMiroir) {
            this.Donnees._surSelectionLigne(
              lParametres.ligne,
              lParametres.selectionner,
            );
          }
        }
        if (
          !lEstSelectionParCellule &&
          lParametres.ligne >= 0 &&
          !lParametres._surMultiSelectionMiroir &&
          this.Donnees.options.avecRechercheSelectionMiroir
        ) {
          const lParamsCellule = this._getParamsCellule(
            lParametres.colonne,
            lParametres.ligne,
            { selectionner: lParametres.selectionner },
          );
          if (lParamsCellule.article) {
            this.Donnees.Donnees.parcourir((aElement, aLigne) => {
              if (aLigne !== lParametres.ligne && aElement) {
                const lParamsCelluleCible = this._getParamsCellule(
                  lParametres.colonne,
                  aLigne,
                  {
                    estLigneVisible: this._estLigneVisible(aLigne, {
                      contexteSelection: true,
                    }),
                  },
                );
                if (
                  this.Donnees.estSelectionCibleMiroirDeSelectionSource(
                    lParamsCellule,
                    lParamsCelluleCible,
                  )
                ) {
                  this._selectionner({
                    ligne: aLigne,
                    colonne: -1,
                    selectionner: lParametres.selectionner,
                    _avecVisuCadreSelection:
                      lParametres._avecVisuCadreSelection,
                    _surMultiSelectionMiroir: true,
                  });
                }
              }
            });
          }
        }
        let lTraitements = null;
        if (
          this._options.avecCadreSelection &&
          lParametres._avecVisuCadreSelection
        ) {
          lTraitements = this._getTraitementsAffichageSelection();
          lTraitements.forEach((aTraitement, aIndex, aArray) => {
            this._setCadreSelection(aTraitement, aIndex, aArray);
          });
        }
        if (lParametres.ligne > -1) {
          let lLignePourScroll = Number.MAX_VALUE;
          let lColonnePourScroll = 0;
          if (
            !lTraitements &&
            lOldlignesSelection &&
            (!this._options.avecCadreSelection ||
              (lParametres.selectionner && lParametres.avecScroll))
          ) {
            lTraitements = this._getTraitementsAffichageSelection();
          }
          if (lTraitements) {
            lTraitements.forEach((aTraitement) => {
              const lOldSelec = lOldlignesSelection[aTraitement.ligne]
                ? !!lOldlignesSelection[aTraitement.ligne][aTraitement.colonne]
                : false;
              if (!this._options.avecCadreSelection) {
                const lElement = ObjetHtml_1.GHtml.getElement(
                  aTraitement.idCellule,
                );
                if (lElement) {
                  this._setStyleCellule(
                    lElement,
                    aTraitement.colonne,
                    aTraitement.ligne,
                    aTraitement.selection,
                  );
                }
              }
              if (lOldSelec !== aTraitement.selection) {
                if (
                  lParametres.selectionner &&
                  lParametres.avecScroll &&
                  aTraitement.ligne < lLignePourScroll
                ) {
                  lLignePourScroll = aTraitement.ligne;
                  lColonnePourScroll = aTraitement.colonne;
                  lTrouverLignePourScroll = true;
                }
              }
            });
          }
          if (lParametres.avecFocusCellule && lParametres.colonne >= 0) {
            const lIdCellule = this.getIdCellule(
              lParametres.colonne,
              lParametres.ligne,
              true,
            );
            const lElementFocus = ObjetHtml_1.GHtml.getElement(lIdCellule);
            if (ObjetHtml_1.GHtml.estElement(lElementFocus)) {
              ObjetHtml_1.GHtml.setFocus(lElementFocus, true, 0);
            } else if (
              this._estLigneDansRangeNonConstruitDyn(lParametres.ligne)
            ) {
              this._scrollSurLigne({
                ligne: lParametres.ligne,
                colonne: lParametres.colonne,
              });
              ObjetHtml_1.GHtml.setFocus(lIdCellule, true, 0);
            }
          }
          if (
            lParametres.selectionner &&
            lParametres.avecScroll &&
            lTrouverLignePourScroll
          ) {
            this._scrollSurLigne({
              ligne: lLignePourScroll,
              colonne: lColonnePourScroll,
            });
          }
        }
        if (lParametres.avecEvenementModificationSelection) {
          this._surModificationSelectionEvenement(lSelectionsPrecedente);
        }
        if (lParametres.avecEvenement && lParametres.selectionner) {
          this.surSelectionEvenement(-1, lParametres.ligne, false, false);
        }
        this._refreshSelf();
      }
      _estCellulePrecedemmentSelectionnee(aColonne, aLigne) {
        if (!this._cache.lignesSelectionnees_prec) {
          return false;
        }
        if (
          this._etatSelectionCellule({
            ligne: aLigne,
            colonne: aColonne,
            cacheSelection: this._cache.lignesSelectionnees_prec,
          })
        ) {
          return true;
        }
        const lInfosFusion =
          this._cache.lignesFusionParColonne[aColonne + '_' + aLigne];
        if (lInfosFusion && lInfosFusion.lignesCumuls) {
          for (const lLigne in lInfosFusion.lignesCumuls) {
            if (
              this._etatSelectionCellule({
                ligne: parseInt(lLigne, 10),
                colonne: aColonne,
                cacheSelection: this._cache.lignesSelectionnees_prec,
              })
            ) {
              return true;
            }
          }
        }
        return false;
      }
      _avecEditionApresSelection(aParamsCellule) {
        let lParamsCellule = aParamsCellule;
        let lNumeroColonne = lParamsCellule.colonne;
        if (
          lNumeroColonne &&
          MethodesObjet_1.MethodesObjet.isString(lNumeroColonne)
        ) {
          lNumeroColonne = this.getNumeroColonneDIdColonne(lNumeroColonne);
        }
        if (
          lNumeroColonne < 0 ||
          !MethodesObjet_1.MethodesObjet.isNumber(lNumeroColonne)
        ) {
          lParamsCellule = this._getParamsCellule(
            lNumeroColonne,
            lParamsCellule.ligne,
            { surEdition: true },
          );
        }
        lParamsCellule.typeValeur = this.Donnees.getTypeValeur(lParamsCellule);
        return this.Donnees.avecEditionApresSelection(lParamsCellule);
      }
      _editionDebSurSelection(aColonne, aLigne, aEvent) {
        if (this._cache.creationEnCours || this._cache.editionEnCours) {
          return;
        }
        const lParams = this._getParamsCellule(aColonne, aLigne, {
          surEdition: true,
        });
        if (this.evenementSelectionClick(lParams)) {
          return;
        }
        if (
          aEvent &&
          (aEvent.type === 'click' || aEvent.type === 'mouseup') &&
          (aEvent.ctrlKey === true || aEvent.shiftKey === true)
        ) {
          return;
        }
        if (
          !this._avecEditionApresSelection(lParams) ||
          !this.Donnees._avecSelection(lParams) ||
          this._estCellulePrecedemmentSelectionnee(
            lParams.colonne,
            lParams.ligne,
          ) ||
          this.Donnees.avecSelecFile(lParams)
        ) {
          this.surEditionDeb(aColonne, aLigne);
        }
      }
      evenementSelectionClick(aParamsCellule) {
        let lResult = false;
        if (this.Donnees && aParamsCellule.ligne > -1) {
          if (this.Donnees.avecEvenementSelectionClick(aParamsCellule)) {
            if (this.Pere && this.Evenement) {
              lResult = this.callback.appel(
                this._getParamsCallback(
                  Enumere_EvenementListe_1.EGenreEvenementListe.SelectionClick,
                  aParamsCellule.colonne,
                  aParamsCellule.ligne,
                ),
                Enumere_EvenementListe_1.EGenreEvenementListe.SelectionClick,
                aParamsCellule.colonne,
                aParamsCellule.ligne,
              );
              this._refreshSelf();
            }
          }
        }
        return lResult;
      }
      _ajouterElementCreation(aLibelle, aValeurCreation) {
        if (aLibelle) {
          if (this._getNonEditable()) {
            return;
          }
          if (!this._cache.creationEnCours) {
            this._cache.creationEnCours = true;
            this._cache.creationEnCoursEvenement = false;
          }
          this._cache.listeValeursCreation[-1] = aValeurCreation;
          if (this._cache.positionCreation === 0) {
            this._cache.numeroColonneCreationEnCours =
              this.ListeCreations[this._cache.positionCreation++];
          }
          this._surCreation(aLibelle);
        } else {
          this._annulerCreation();
        }
        return this;
      }
      _surLigneCreationUnique(aSurClick, aLigne, aSurToucheEdition) {
        const lParams = this._getParamsCellule(-1, aLigne, {
            surCreation: true,
          }),
          lAvecInputFile = this.Donnees && this.Donnees.avecSelecFile(lParams);
        if (
          lAvecInputFile &&
          this._cache.ouvrirSelecteurFileParLigne[aLigne + '_-1']
        ) {
          this._cache.ouvrirSelecteurFileParLigne[aLigne + '_-1']();
          return;
        }
        if (!aSurClick && !aSurToucheEdition) {
          return;
        }
        const LId = this._getIdCreation(-1, aLigne);
        ObjetHtml_1.GHtml.setDisplay(LId + '_Creation', false);
        ObjetHtml_1.GHtml.setDisplay(LId + '_Creation_Edit', true);
        this.surCreationDeb(false, { numeroLigneCreation: aLigne });
      }
      surCreationDeb(ASuivant, aParams) {
        const lParamsCreation = Object.assign(
          {
            origine: null,
            numeroLigneCreation: -1,
            idCellule: null,
            ignorerEventsNode: false,
            creationEnFenetre: false,
          },
          aParams,
        );
        if (this._getNonEditable() || !this.Donnees) {
          return;
        }
        if (this._cache.positionCreation === 0) {
          this._cache.listeValeursCreation = [];
        }
        let lInterrompreCreation = false;
        if (!this._cache.creationEnCours || ASuivant) {
          this._cache.numeroColonneCreationEnCours =
            this.ListeCreations[this._cache.positionCreation++];
          const lParams = this._getParamsCellule(
            this._cache.numeroColonneCreationEnCours,
            -1,
            { surLigneCreation: true, surEdition: true },
          );
          this._cache.creationEnCoursEvenement = this.surCreationEvenement(
            lParams.colonne,
          );
          if (
            this._cache.creationEnCoursEvenement ===
            Enumere_EvenementListe_1.EGenreEvenementListe.Creation
          ) {
            lInterrompreCreation = true;
          } else if (
            lParamsCreation.origine !== 'menucontextuel' &&
            this._cache.positionCreation === 1 &&
            this.Donnees.avecMenuContextuel(lParams)
          ) {
            this._cache.positionCreation = 0;
            this._ouvrirMenuContextuel(lParams);
            lInterrompreCreation = true;
          }
          if (lInterrompreCreation) {
            const LId = this._getIdCreation(-1, lParams.ligne);
            ObjetHtml_1.GHtml.setDisplay(LId + '_Creation_Edit', false);
            ObjetHtml_1.GHtml.setDisplay(LId + '_Creation', true);
            return;
          }
          this._surSelection(-1, -1, { avecFocus: false });
          this._cache.creationEnCours = true;
          this.IdCellule =
            lParamsCreation.idCellule ||
            this._getIdCreation(
              this._colonneCreationUniqueEnErreur()
                ? 0
                : this._cache.numeroColonneCreationEnCours,
              this._cache.numeroLigneCreationDynamique === null ||
                this._cache.numeroLigneCreationDynamique === undefined
                ? -1
                : this._cache.numeroLigneCreationDynamique,
            );
          this.entrerEdition();
          const lType = this.Donnees.getTypeValeur(lParams);
          switch (lType) {
            case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.ZoneTexte:
              this.entrerZoneTexte(
                lParams.colonne,
                undefined,
                true,
                lParamsCreation.numeroLigneCreation,
                lParamsCreation.ignorerEventsNode,
                lParamsCreation.creationEnFenetre,
              );
              break;
            default:
              this.entrerTexte(
                lParams.colonne,
                undefined,
                true,
                lType,
                lParamsCreation.ignorerEventsNode,
                lParamsCreation.creationEnFenetre,
              );
              break;
          }
          if (!this._cache.creationEnCoursEvenement) {
            ObjetHtml_1.GHtml.setFocusEdit(this.IdEdition);
            ObjetHtml_1.GHtml.setSelectionEdit(this.IdEdition);
          }
        }
      }
      _annulerCreation() {
        this.surCreationFin(-1, true);
      }
      surCreationFin(ASelectionLigne, aAnnuler) {
        if (this._cache.creationEnCours) {
          this._refreshSelf();
          this._cache.creationEnCours = false;
          this._cache.creationEnCoursEvenement = false;
          this._cache.finEditionCreation = null;
          this._cache.positionCreation = 0;
          this._cache.listeValeursCreation = [];
          this._cache.numeroColonneCreationEnCours = null;
          this._cache.numeroLigneCreationDynamique = null;
          this._setRechercheSaisie('');
          this._actualiser();
          this._surSelection(-1, ASelectionLigne, { avecFocus: false });
          this.surSelectionEvenement(-1, ASelectionLigne);
          if (aAnnuler && ASelectionLigne === -1) {
            ObjetHtml_1.GHtml.setFocus(this.IdPremierElement);
          } else {
            ObjetHtml_1.GHtml.setFocus(
              this.getIdCellule(0, ASelectionLigne, true),
            );
          }
          if (ASelectionLigne >= 0) {
            this.surApresCreationEvenement(ASelectionLigne);
          } else {
            this.surApresErreurCreationEvenement();
          }
          this._refreshSelf();
        }
      }
      _surCreation(aValeur) {
        if (this._fenetreInformationAffichee) {
          return;
        }
        if (this._messageEnCoursSurCreation) {
          return;
        }
        if (!this._cache.creationEnCours) {
          return;
        }
        delete this._valeurEnEdition;
        const lColonne = this._cache.numeroColonneCreationEnCours;
        let lLigne = -1,
          lValeur = aValeur;
        let lParams = this._getParamsCellule(lColonne, lLigne, {
          surEdition: true,
          surCreation: true,
        });
        if (
          MethodesObjet_1.MethodesObjet.isString(lValeur) &&
          this.Donnees.avecTrimSurEdition(lParams)
        ) {
          lValeur = lValeur.trim();
        }
        if (
          lValeur !== null &&
          lValeur !== undefined &&
          (lValeur !== '' ||
            this.Donnees.autoriserChaineVideSurEdition(lParams))
        ) {
          this._cache.listeValeursCreation[lColonne] = lValeur;
          if (
            this.ListeCreations[this._cache.positionCreation] === null ||
            this.ListeCreations[this._cache.positionCreation] === undefined
          ) {
            lParams = this._getParamsCellule(-1, -1, {
              surEdition: true,
              surCreation: true,
            });
            lLigne = this.Donnees._surCreation(
              this._cache.listeValeursCreation,
              this._cache.numeroLigneCreationDynamique === null ||
                this._cache.numeroLigneCreationDynamique === undefined
                ? -1
                : this._cache.numeroLigneCreationDynamique,
              lParams,
            );
            this._messageEnCoursSurCreation = true;
            try {
              this._afficherMessage(lParams);
            } finally {
              delete this._messageEnCoursSurCreation;
            }
          } else {
            this._cache.creationEnCours = false;
            this._setStyleCellule(
              this.IdCellule,
              lColonne,
              lLigne,
              false,
              true,
            );
            if (MethodesObjet_1.MethodesObjet.isString(lValeur)) {
              ObjetHtml_1.GHtml.setHtml(this.IdCellule, lValeur);
            }
            this.surCreationDeb(true);
            return;
          }
        }
        this.surCreationFin(lLigne);
      }
      _setCreationLigne(aCreationLigneBis) {
        if (
          aCreationLigneBis < 0 ||
          !MethodesObjet_1.MethodesObjet.isNumber(aCreationLigneBis)
        ) {
          return;
        }
        this._cache.numeroLigneCreationDynamique = aCreationLigneBis;
        this._actualiser();
        this._surLigneCreationUnique(
          true,
          this._cache.numeroLigneCreationDynamique,
        );
        this.surCreationDeb();
      }
      _getParamsCellule(aNumeroColonne, aNumeroLigne, aParamsSupp) {
        const lParams = {
          ligne: aNumeroLigne,
          colonne: aNumeroColonne,
          article: null,
          idColonne: null,
          declarationColonne: {},
          instance: this,
        };
        if (
          lParams.ligne >= 0 &&
          this.Donnees &&
          MethodesObjet_1.MethodesObjet.isNumber(lParams.ligne)
        ) {
          lParams.article = this.getArticleDeLigne(lParams.ligne);
        }
        if (
          lParams.colonne >= 0 &&
          this.Donnees &&
          MethodesObjet_1.MethodesObjet.isNumber(lParams.colonne)
        ) {
          lParams.idColonne = this.Donnees.getId(lParams.colonne);
          lParams.declarationColonne =
            this._cache.declColonnesByIds[lParams.idColonne];
        }
        if (aParamsSupp) {
          Object.assign(lParams, aParamsSupp);
        }
        return lParams;
      }
      _getParamsCallback(aGenre, I, J, aParamsSupp) {
        return Object.assign(
          { genreEvenement: aGenre, surClavier: false },
          this._getParamsCellule(I, J, aParamsSupp),
        );
      }
      _surEditionDebutApresConfirmation(aParams) {
        const lIdCellule = this.getIdCellule(aParams.colonne, aParams.ligne);
        if (
          this._cache.ouvrirSelecteurFileParLigne[
            aParams.ligne + '_' + aParams.colonne
          ] &&
          this.Donnees.avecSelecFile(aParams)
        ) {
          this._cache.ouvrirSelecteurFileParLigne[
            aParams.ligne + '_' + aParams.colonne
          ]();
        } else if (this.Donnees.avecEvenementEdition(aParams)) {
          this._cache.editionEnCoursEvenement = true;
          this.afficherMarqueurEditionSurCellule(
            aParams.colonne,
            aParams.ligne,
          );
          const lIdCelluleFocus = this.getIdCellule(
            aParams.colonne,
            aParams.ligne,
            true,
          );
          ObjetHtml_1.GHtml.setFocus(lIdCelluleFocus, true);
          const lthis = this;
          $('#' + lIdCelluleFocus.escapeJQ()).one('focusout', () => {
            $('#' + lIdCelluleFocus.escapeJQ()).one('focusin', () => {
              if (lthis._cache.editionEnCoursEvenement) {
                lthis._cache.editionEnCoursEvenement = false;
                lthis._nettoyerElementsEditionEnCours();
              }
            });
          });
          const lParamsCallback = this._getParamsCallback(
            Enumere_EvenementListe_1.EGenreEvenementListe.Edition,
            aParams.colonne,
            aParams.ligne,
          );
          lParamsCallback.actualisationApresEdition = (
            aIgnorerActualisation,
          ) => {
            if (this.isDestroyed()) {
              return;
            }
            this._finaliserEdition({
              ligne: aParams.ligne,
              colonne: aParams.colonne,
              ignorerActualisation: aIgnorerActualisation,
            });
          };
          lParamsCallback.ouvrirMenuContextuel = (aParamsPerso) => {
            this._ouvrirMenuContextuel(
              Object.assign(
                { id: this.getIdCellule(aParams.colonne, aParams.ligne) },
                aParams,
                aParamsPerso,
              ),
            );
          };
          this.callback.appel(
            lParamsCallback,
            Enumere_EvenementListe_1.EGenreEvenementListe.Edition,
            aParams.colonne,
            aParams.ligne,
          );
          this._refreshSelf();
        } else {
          this._cache.editionEnCours = true;
          for (
            let iLigne = 0;
            iLigne < this._cache.lignesSelectionnees.length;
            iLigne++
          ) {
            if (
              iLigne !== aParams.ligne &&
              this._cache.lignesSelectionnees[iLigne]
            ) {
              this.selectionnerLigne({
                ligne: iLigne,
                selectionner: false,
                avecEvenementModificationSelection: false,
              });
            }
          }
          this.IdCellule = lIdCellule;
          this.entrerEdition();
          this.afficherMarqueurEditionSurCellule(
            aParams.colonne,
            aParams.ligne,
          );
          const lTypeValeur = this.Donnees.getTypeValeur(aParams);
          switch (lTypeValeur) {
            case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.ZoneTexte:
              this.entrerZoneTexte(aParams.colonne, aParams.ligne, false);
              break;
            case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Image:
            case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon:
            case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche:
              this._surEdition(aParams, 'coche', true);
              break;
            case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
              .DateCalendrier:
              this._entrerDateCalendrier(aParams);
              break;
            default:
              this.entrerTexte(
                aParams.colonne,
                aParams.ligne,
                false,
                lTypeValeur,
              );
              break;
          }
          if (
            ![
              ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche,
              ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Image,
              ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon,
              ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.DateCalendrier,
            ].includes(lTypeValeur)
          ) {
            const lElement = ObjetHtml_1.GHtml.getElement(this.IdEdition);
            if (lElement) {
              ObjetHtml_1.GHtml.setFocus(lElement);
              if (lElement.select) {
                lElement.select();
              }
            }
            if (
              this.optionsInterne.versionMobile &&
              lTypeValeur ===
                ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Note
            ) {
              if (lElement && lElement.click) {
                lElement.click();
              } else {
                this._finaliserEdition({
                  ligne: aParams.ligne,
                  colonne: aParams.colonne,
                });
              }
            }
          }
        }
      }
      surEditionDeb(aColonne, aLigne) {
        if (this._getNonEditable()) {
          return;
        }
        this._cache.selectionCellule.ligne = aLigne;
        this._cache.selectionCellule.colonne = aColonne;
        let lParams = this._getParamsCellule(aColonne, aLigne, {
          surEdition: true,
        });
        let lNumeroColonne = this.Donnees.getColonneTransfertEdition(lParams);
        if (
          lNumeroColonne &&
          MethodesObjet_1.MethodesObjet.isString(lNumeroColonne)
        ) {
          lNumeroColonne = this.getNumeroColonneDIdColonne(lNumeroColonne);
        }
        if (
          MethodesObjet_1.MethodesObjet.isNumber(lNumeroColonne) &&
          lNumeroColonne >= 0
        ) {
          lParams = this._getParamsCellule(lNumeroColonne, aLigne, {
            surEdition: true,
          });
        }
        if (
          lParams.article &&
          !this._cache.editionEnCours &&
          (this.Donnees.avecEdition(lParams) ||
            this.Donnees.avecEvenementEdition(lParams) ||
            this.Donnees.avecSelecFile(lParams))
        ) {
          this._nettoyerElementsEditionEnCours();
          if (this.Donnees.editionRefusee(lParams)) {
            return;
          }
          if (this.Donnees._editionConfirmation(lParams)) {
            GApplication.getMessage().afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
              message: this.Donnees.getMessage(),
              callback: (AAccepte) => {
                if (AAccepte === Enumere_Action_1.EGenreAction.Valider) {
                  this._surEditionDebutApresConfirmation(lParams);
                }
              },
            });
          } else {
            this._surEditionDebutApresConfirmation(lParams);
          }
        }
      }
      _surEdition(aParams, aValeur, aAvecModification, aForcerEvenement) {
        if (this._fenetreInformationAffichee) {
          return;
        }
        if (this._cache.editionEnCours || this._cache.editionEnCoursEvenement) {
          delete this._valeurEnEdition;
          delete this._cache.avecModificationSaisie;
          if (!aAvecModification) {
            this._surEditionFin({
              ligne: aParams.ligne,
              colonne: aParams.colonne,
              avecEvenement: aForcerEvenement,
              sansTriDonnees: aParams.sansTriDonnees,
            });
            return;
          }
          let lValeur = aValeur;
          if (
            MethodesObjet_1.MethodesObjet.isString(lValeur) &&
            this.Donnees.avecTrimSurEdition(aParams)
          ) {
            lValeur = lValeur.trim();
          }
          const lParamsFinEdition = {
            ligne: aParams.ligne,
            colonne: aParams.colonne,
            avecEvenement: true,
            avecModification: true,
            sansTriDonnees: aParams.sansTriDonnees,
          };
          if (
            ((lValeur !== null && lValeur !== undefined) ||
              this.Donnees.getTypeValeur(aParams) ===
                ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
                  .DateCalendrier) &&
            (lValeur !== '' ||
              this.Donnees.autoriserChaineVideSurEdition(aParams))
          ) {
            aParams.valeur = lValeur;
            const lFuncAfficherMessage = (aParams) => {
              if (!this._messageEnCoursDAffichage) {
                this._messageEnCoursDAffichage = true;
                this._afficherMessage(aParams);
                delete this._messageEnCoursDAffichage;
              }
            };
            let lResult;
            const lFinEditionCreation = this._cache.finEditionCreation;
            this._cache.finEditionCreation = null;
            try {
              lResult = this.Donnees._surEdition(aParams);
            } finally {
              this._cache.finEditionCreation = lFinEditionCreation;
            }
            if (lResult && lResult.then) {
              return lResult.then((aError) => {
                lFuncAfficherMessage(aParams);
                this._surEditionFin(lParamsFinEdition);
                if (
                  aError &&
                  aError.annulerEdition &&
                  aError.enEditionSurCelllule
                ) {
                  this.demarrerEditionSurCellule(
                    aParams.ligne,
                    aParams.colonne,
                  );
                }
                return aError;
              });
            }
            lFuncAfficherMessage(aParams);
          }
          this._surEditionFin(lParamsFinEdition);
        }
      }
      _finaliserEdition(aParametres) {
        const lParametres = Object.assign(
          {
            ligne: -1,
            colonne: -1,
            avecEvenement: false,
            avecModification: false,
            ignorerActualisation: false,
            sansTriDonnees: false,
          },
          aParametres,
        );
        this._cache.editionEnCours = false;
        this._cache.editionEnCoursEvenement = false;
        this._cache.finEditionCreation = null;
        if (this._cache.timeout_ignorerScrollSortieEdition) {
          clearTimeout(this._cache.timeout_ignorerScrollSortieEdition);
          delete this._cache.timeout_ignorerScrollSortieEdition;
        }
        this._nettoyerElementsEditionEnCours();
        if (lParametres.ignorerActualisation !== true) {
          let lEstColonneTriCourant = false;
          if (this._triCourant.colonne) {
            this._triCourant.colonne.forEach((aNumeroColonne) => {
              if (lParametres.colonne === aNumeroColonne) {
                lEstColonneTriCourant = true;
              }
            });
          }
          const lElementCellule = ObjetHtml_1.GHtml.getElement(
            this.getIdCellule(lParametres.colonne, lParametres.ligne),
          );
          const lFuncConstructCellule =
            this._cache.collectionFuncConstructCellule[
              lParametres.ligne + '_' + lParametres.colonne
            ];
          if (
            lEstColonneTriCourant ||
            !lFuncConstructCellule ||
            !lElementCellule ||
            this.Donnees.forcerActualisationListeSurEdition(lParametres)
          ) {
            this._actualiser({
              conserverSelection: false,
              zonesActualisation: { contenu: true, total: true },
              avecEvenementModificationSelection: false,
              conserverPositionElement: lElementCellule
                ? {
                    rectCellule:
                      ObjetPosition_1.GPosition.getClientRect(lElementCellule),
                    ligne: lParametres.ligne,
                    colonne: lParametres.colonne,
                  }
                : null,
              sansTriDonnees: lParametres.sansTriDonnees,
            });
          } else {
            ObjetHtml_1.GHtml.setHtml(
              lElementCellule,
              lFuncConstructCellule(),
              { controleur: this.controleur },
            );
            this._selectionner({ deselectionnerTout: true });
          }
          this._surSelection(lParametres.colonne, lParametres.ligne, {
            avecFocus: false,
          });
          if (lParametres.ligne >= 0 && lParametres.colonne >= 0) {
            const lElement = ObjetHtml_1.GHtml.getElement(
              this.getIdCellule(lParametres.colonne, lParametres.ligne, true),
            );
            if (ObjetHtml_1.GHtml.elementExiste(lElement) && lElement.focus) {
              try {
                lElement.focus({ preventScroll: true });
              } catch (e) {}
            }
          } else {
            ObjetHtml_1.GHtml.setFocus(this.IdPremierElement, true);
          }
        }
        this._refreshSelf();
        if (lParametres.colonne >= 0 && lParametres.avecEvenement) {
          this.surApresEditionEvenement(
            this._getParamsCellule(lParametres.colonne, lParametres.ligne, {
              avecModification: !!lParametres.avecModification,
            }),
          );
        }
      }
      _surEditionFin(aParams) {
        this._finaliserEdition(
          Object.assign(aParams, {
            ignorerActualisation:
              !this._cache.editionEnCours &&
              !this._cache.editionEnCoursEvenement,
          }),
        );
      }
      _surSuppression() {
        const lListeSelections = this._getListeElementsSelection();
        if (
          this._options.AvecSuppression &&
          !this._getNonEditable() &&
          (this._cache.selectionCellule.ligne > -1 ||
            (lListeSelections && lListeSelections.count() > 0))
        ) {
          const lParamsCellule = this._getParamsCellule(
            this._cache.selectionCellule.colonne,
            this._cache.selectionCellule.ligne,
            { surSuppression: true },
          );
          if (
            this.Donnees._suppressionImpossible(
              this._cache.selectionCellule.ligne,
              lListeSelections,
            )
          ) {
            this._afficherMessage(lParamsCellule);
          } else if (
            this.Donnees._suppressionConfirmation(
              this._cache.selectionCellule.ligne,
              lListeSelections,
            )
          ) {
            GApplication.getMessage()
              .afficher({
                type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
                message: this.Donnees.getMessage(),
              })
              .then((aGenreAction) => {
                this.surSuppressionApresConfirmation(
                  lListeSelections,
                  lParamsCellule,
                  aGenreAction,
                );
              });
          } else {
            this.surSuppressionApresConfirmation(
              lListeSelections,
              lParamsCellule,
              Enumere_Action_1.EGenreAction.Valider,
            );
          }
        }
      }
      surSuppressionApresConfirmation(
        aListeSelections,
        aParamsCellule,
        AAccepte,
      ) {
        if (AAccepte === Enumere_Action_1.EGenreAction.Valider) {
          Object.assign(aParamsCellule, {
            listeSelections: aListeSelections,
            listeSuppressions: new ObjetListeElements_1.ObjetListeElements(),
          });
          if (aListeSelections) {
            aParamsCellule.listeSuppressions =
              this.Donnees.getListeSupprimables(
                aListeSelections,
                aParamsCellule,
              );
          }
          const lAvecEvenement = this.surSuppressionEvenement(aParamsCellule);
          if (lAvecEvenement && this.Donnees.avecInterruptionSuppression()) {
            this._cache.selectionCellule.ligne = -1;
          } else {
            this._cache.selectionCellule.ligne = this.Donnees._surSuppression(
              aParamsCellule.ligne,
              aParamsCellule.listeSuppressions,
            );
            this._actualiser();
            if (this.Donnees.avecEtatSaisie(aParamsCellule)) {
              this.setEtatSaisie(true);
            }
          }
          this.surApresSuppressionEvenement(aParamsCellule);
        }
        ObjetHtml_1.GHtml.setFocus(this.IdPremierElement, true, 0);
      }
      _getIdCreation(I, J) {
        return (
          this.Nom +
          '_Creation_' +
          I +
          (J === null || J === undefined ? '' : '_' + J)
        );
      }
      _getListeElementsSelection() {
        const lSelections = new ObjetListeElements_1.ObjetListeElements();
        if (this._cache.lignesSelectionnees) {
          for (let i = 0; i < this._cache.lignesSelectionnees.length; i++) {
            if (this._cache.lignesSelectionnees[i]) {
              const lElement = this.getArticleDeLigne(i);
              if (lElement) {
                lSelections.addElement(lElement);
              }
            }
          }
        }
        return lSelections;
      }
      _getCellulesSelection(aAvecLignesInvisible) {
        const lSelections = [];
        if (this._cache.lignesSelectionnees && this.Donnees) {
          this._cache.lignesSelectionnees.forEach((aSelectionLigne, aLigne) => {
            if (
              !aAvecLignesInvisible &&
              !this._estLigneVisible(aLigne, { contexteSelection: true })
            ) {
              return;
            }
            let lLigne = null,
              lAvecSelectionParCelluleSurLigne = false;
            if (aSelectionLigne && aSelectionLigne.forEach) {
              aSelectionLigne.forEach((aSelectionne, aColonne) => {
                if (aSelectionne && this._estColonneVisible(aColonne)) {
                  const lParamsCellule = this._getParamsCellule(
                    aColonne,
                    aLigne,
                  );
                  if (this.Donnees._avecSelection(lParamsCellule)) {
                    if (!lLigne) {
                      lLigne = {
                        ligne: aLigne,
                        article: this.getArticleDeLigne(aLigne),
                        hashColonnesSelecParCellule: {},
                        colonnes: [],
                        idsColonnes: [],
                      };
                    }
                    lLigne.hashColonnesSelecParCellule[aColonne] = true;
                    lLigne.colonnes.push(aColonne);
                    lLigne.idsColonnes.push(
                      this.getIdColonneDeNumeroColonne(aColonne),
                    );
                    if (
                      !lAvecSelectionParCelluleSurLigne &&
                      this._estSelectionParCellule(aLigne, aColonne)
                    ) {
                      lAvecSelectionParCelluleSurLigne = true;
                    }
                  }
                }
              });
            } else if (aSelectionLigne) {
            }
            if (lLigne) {
              if (!lAvecSelectionParCelluleSurLigne) {
                delete lLigne.hashColonnesSelecParCellule;
              }
              lSelections.push(lLigne);
            }
          });
        }
        return lSelections;
      }
      _setCellulesSelection(aListe, aParams) {
        let iColonne, lElement, lElementTrouve, lHashColonnesSelectionnees;
        const lParams = Object.assign(
          {
            instancesIdentiques: false,
            avecScroll: false,
            avecEvenement: false,
            avecEvenementModificationSelection: true,
            ajoutSelection: false,
            funcRecherche: null,
            avecSelectionSurLigneInvisible: false,
          },
          aParams,
        );
        const lFuncRecherche =
          lParams.funcRecherche &&
          MethodesObjet_1.MethodesObjet.isFunction(lParams.funcRecherche)
            ? lParams.funcRecherche
            : null;
        const _gererSelection = (
          aParams,
          aElementTrouve,
          aNumeroLigne,
          aNumeroColonne,
          aEtatSelec,
        ) => {
          if (!aElementTrouve && aEtatSelec) {
            if (!aParams.ajoutSelection) {
              this._selectionner({
                ligne: aNumeroLigne,
                colonne: aNumeroColonne,
                selectionner: false,
                avecEvenement: aParams.avecEvenement,
                _avecVisuCadreSelection: false,
              });
            }
          } else if (aElementTrouve) {
            const lEstSelection = aEtatSelec;
            if (!lEstSelection) {
              this._selectionner({
                ligne: aNumeroLigne,
                colonne: aNumeroColonne,
                selectionner: true,
                avecScroll: aParams.avecScroll,
                deselectionnerTout:
                  aParams.ignorerControleMultiSelection === true ? null : false,
                avecEvenement: aParams.avecEvenement && !lEstSelection,
                _avecVisuCadreSelection: false,
              });
            }
          }
        };
        function _trouveIdentique(aElement) {
          if (aElement && aElement.article && aElement.article === lElement) {
            lElementTrouve = true;
            lHashColonnesSelectionnees = aElement.hashColonnesSelecParCellule;
            return false;
          }
          return true;
        }
        function _trouveNumeroGenre(aElement) {
          if (
            aElement &&
            aElement.article &&
            aElement.article.egalParNumeroEtGenre(
              lElement.getNumero(),
              lElement.getGenre(),
            )
          ) {
            lElementTrouve = aElement;
            lHashColonnesSelectionnees = aElement.hashColonnesSelecParCellule;
            return false;
          }
          return true;
        }
        function _trouverAvecRecherche(aElement) {
          if (lFuncRecherche(lElement, aElement.article) === true) {
            lElementTrouve = true;
            lHashColonnesSelectionnees = aElement.hashColonnesSelecParCellule;
            return false;
          }
          return true;
        }
        if (!aListe || !Array.isArray(aListe)) {
          aListe = [];
        }
        const lSelectionsPrecedente = lParams.avecEvenementModificationSelection
          ? this._getCellulesSelection(true)
          : null;
        const lFuncs = [];
        for (
          let lNumeroLigne = this.Donnees.getNbrLignes() - 1;
          lNumeroLigne >= 0;
          lNumeroLigne--
        ) {
          lElement = this.getArticleDeLigne(lNumeroLigne);
          lElementTrouve = false;
          lHashColonnesSelectionnees = null;
          if (
            lElement &&
            aListe.length > 0 &&
            (lParams.avecSelectionSurLigneInvisible ||
              this._estLigneVisible(lNumeroLigne, { contexteSelection: true }))
          ) {
            if (lFuncRecherche) {
              aListe.every(_trouverAvecRecherche);
            } else if (lParams.instancesIdentiques) {
              aListe.every(_trouveIdentique);
            } else {
              aListe.every(_trouveNumeroGenre);
            }
          }
          let lEtatSelec;
          const lColonnes = [];
          if (lHashColonnesSelectionnees) {
            lEtatSelec = [];
            for (
              iColonne = 0;
              iColonne < this.ListeTailles.length;
              iColonne++
            ) {
              if (this._estColonneVisible(iColonne)) {
                lColonnes.push(iColonne);
                lEtatSelec.push(
                  this._etatSelectionCellule({
                    ligne: lNumeroLigne,
                    colonne: iColonne,
                  }),
                );
              }
            }
          } else {
            lEtatSelec = this._etatSelectionCellule({
              ligne: lNumeroLigne,
              colonne: -1,
            });
          }
          lFuncs.push({
            hashColonnesSelectionnees: lHashColonnesSelectionnees,
            elementTrouve: lElementTrouve,
            numeroLigne: lNumeroLigne,
            colonnes: lColonnes,
            etatSelec: lEtatSelec,
          });
        }
        lFuncs.forEach((aParam) => {
          if (aParam.hashColonnesSelectionnees) {
            aParam.colonnes.forEach((aColonne) => {
              _gererSelection(
                lParams,
                aParam.elementTrouve &&
                  aParam.hashColonnesSelectionnees[aColonne],
                aParam.numeroLigne,
                aColonne,
                aParam.etatSelec[aColonne],
              );
            });
          } else {
            _gererSelection(
              lParams,
              aParam.elementTrouve,
              aParam.numeroLigne,
              -1,
              aParam.etatSelec,
            );
          }
        });
        this._actualiserCadreSelection();
        if (lParams.avecEvenementModificationSelection) {
          this._surModificationSelectionEvenement(lSelectionsPrecedente);
        }
        return this;
      }
      _setTableauCellulesSelection(aListe, aParams) {
        let lIndexTrouve = -1;
        if (!aListe || !Array.isArray(aListe)) {
          aListe = [];
        }
        this._cache.lignesSelectionnees_prec = [
          ...this._cache.lignesSelectionnees,
        ];
        function _trouveIdentique(aCherche, aElement, aIndex) {
          if (
            aElement &&
            aCherche &&
            aElement.article &&
            aElement.article === aCherche
          ) {
            lIndexTrouve = aIndex;
            return false;
          }
          return true;
        }
        const lListe = [];
        if (aListe && Array.isArray(aListe)) {
          aListe.forEach((aElement) => {
            let lLigne = null;
            if (!aElement.article) {
              return;
            }
            lIndexTrouve = -1;
            if (
              !lListe.every(_trouveIdentique.bind(this, aElement.article)) &&
              lIndexTrouve >= 0
            ) {
              lLigne = lListe[lIndexTrouve];
            }
            if (!lLigne) {
              lLigne = { article: aElement.article };
            }
            let lNumeroColonne = -1;
            if (aElement.idColonne) {
              lNumeroColonne = this.getNumeroColonneDIdColonne(
                aElement.idColonne,
              );
            }
            if (lNumeroColonne < 0 && aElement.colonne >= 0) {
              lNumeroColonne = aElement.colonne;
            }
            if (lNumeroColonne >= 0) {
              if (!lLigne.hashColonnesSelecParCellule) {
                lLigne.hashColonnesSelecParCellule = {};
              }
              lLigne.hashColonnesSelecParCellule[lNumeroColonne] = true;
            }
            lListe.push(lLigne);
          });
        }
        return this._setCellulesSelection(lListe, aParams);
      }
      _setListeElementsSelection(aListeElements, aParams) {
        this._cache.lignesSelectionnees_prec = [
          ...this._cache.lignesSelectionnees,
        ];
        if (!aListeElements || !aListeElements.getElementParElement) {
          aListeElements = new ObjetListeElements_1.ObjetListeElements();
        }
        const lListe = [];
        aListeElements.parcourir((D) => {
          lListe.push({ article: D });
        });
        return this._setCellulesSelection(lListe, aParams);
      }
      _navigationCelluleSuivante(aParametres) {
        if (!this.Donnees) {
          return false;
        }
        if (this._cache.finEditionCreation) {
          const lResultFinEdition = this._cache.finEditionCreation();
          if (
            lResultFinEdition &&
            typeof lResultFinEdition === 'object' &&
            'avecMessagerErreur' in lResultFinEdition &&
            lResultFinEdition.avecMessagerErreur
          ) {
            return;
          }
        }
        const lParametres = Object.assign(
          {
            ligne: this._cache.selectionCellule.ligne,
            colonne: this._cache.selectionCellule.colonne,
            orientationVerticale: false,
            sensInverse: false,
            ligneEtColonneFixe: false,
            avecSelection: false,
            avecCelluleEditable: false,
            avecFocusCellule: true,
            forcerNavigationFocus: false,
            sansRecherche: false,
          },
          aParametres,
        );
        let lLigne = lParametres.ligne,
          lColonne = lParametres.colonne,
          lElement = null;
        let lAvecSelectionOuEdition = false;
        const lNbLignes = this.Donnees.Donnees.count(),
          lNbColonnes = this.ListeTailles.length;
        let lParamsCellule;
        if (lLigne < 0 || lColonne < 0) {
          if (lParametres.orientationVerticale) {
            lLigne = Math.max(lLigne, -1);
            lColonne = Math.max(lColonne, 0);
          } else {
            lLigne = Math.max(lLigne, 0);
            lColonne = Math.max(lColonne, -1);
          }
          lParametres.sensInverse = false;
        }
        while (!lElement) {
          if (!lParametres.sansRecherche) {
            if (lParametres.orientationVerticale) {
              lLigne += lParametres.sensInverse ? -1 : 1;
              if (lParametres.ligneEtColonneFixe) {
              } else if (lLigne >= lNbLignes || lLigne < 0) {
                lLigne = lParametres.sensInverse ? lNbLignes - 1 : 0;
                lColonne += lParametres.sensInverse ? -1 : 1;
              }
            } else {
              lColonne += lParametres.sensInverse ? -1 : 1;
              if (lParametres.ligneEtColonneFixe) {
              } else if (lColonne >= lNbColonnes || lColonne < 0) {
                lColonne = lParametres.sensInverse ? lNbColonnes - 1 : 0;
                lLigne += lParametres.sensInverse ? -1 : 1;
              }
            }
          }
          if (
            lLigne >= lNbLignes ||
            lColonne >= lNbColonnes ||
            lLigne < 0 ||
            lColonne < 0 ||
            isNaN(lLigne) ||
            isNaN(lColonne)
          ) {
            break;
          }
          lParamsCellule = this._getParamsCellule(lColonne, lLigne);
          if (
            this._estColonneVisible(lColonne) &&
            this._estLigneVisible(lLigne)
          ) {
            lAvecSelectionOuEdition =
              (lParametres.avecCelluleEditable ||
                !lParametres.avecSelection ||
                this.Donnees._avecSelection(lParamsCellule)) &&
              (!lParametres.avecCelluleEditable ||
                (!this._getNonEditable() &&
                  (this.Donnees.avecEdition(lParamsCellule) ||
                    this.Donnees.avecEvenementEdition(lParamsCellule))));
            if (lParametres.forcerNavigationFocus || lAvecSelectionOuEdition) {
              const lIdCellule = this.getIdCellule(lColonne, lLigne, true);
              lElement = ObjetHtml_1.GHtml.getElement(lIdCellule);
              if (!lElement && this._estLigneDansRangeNonConstruitDyn(lLigne)) {
                this._scrollSurLigne({ ligne: lLigne, colonne: lColonne });
                lElement = ObjetHtml_1.GHtml.getElement(lIdCellule);
              }
            }
          }
          if (lParametres.sansRecherche) {
            break;
          }
        }
        if (lElement) {
          if (lParametres.avecSelection && lAvecSelectionOuEdition) {
            const lAvecFocusCellule =
              lParametres.avecFocusCellule &&
              [
                ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.ZoneTexte,
              ].indexOf(this.Donnees.getTypeValeur(lParamsCellule)) < 0;
            this.selectionnerCellule({
              ligne: lLigne,
              colonne: lColonne,
              deselectionnerTout: true,
              avecFocusCellule: lAvecFocusCellule,
              avecEvenement: true,
            });
          } else {
            ObjetHtml_1.GHtml.setFocus(lElement);
          }
          this._cache.selectionCellule = { ligne: lLigne, colonne: lColonne };
          return true;
        }
        return false;
      }
      _selectionnerCelluleSuivante(aParametres) {
        const lParametres = Object.assign(
          {
            ligne: this._cache.selectionCellule.ligne,
            colonne: this._cache.selectionCellule.colonne,
            orientationVerticale: false,
            sensInverse: false,
            avecSelection: true,
            avecCelluleEditable: false,
            entrerEdition: false,
          },
          aParametres,
        );
        if (lParametres.ligne < 0 || lParametres.colonne < 0 || !this.Donnees) {
          return this;
        }
        if (lParametres.entrerEdition) {
          lParametres.avecCelluleEditable = true;
        }
        if (
          this._navigationCelluleSuivante(lParametres) &&
          lParametres.entrerEdition &&
          (lParametres.entrerEdition === true ||
            (MethodesObjet_1.MethodesObjet.isFunction(
              lParametres.entrerEdition,
            ) &&
              lParametres.entrerEdition(
                this._getParamsCellule(
                  this._cache.selectionCellule.colonne,
                  this._cache.selectionCellule.ligne,
                ),
              )))
        ) {
          this.demarrerEditionSurCellule(
            this._cache.selectionCellule.ligne,
            this._cache.selectionCellule.colonne,
          );
        }
        return this;
      }
      estColonneVisibleDIdColonne(aIdColonne) {
        return this._estColonneVisible(
          this.getNumeroColonneDIdColonne(aIdColonne),
          this._cache,
        );
      }
      _estColonneVisible(aNumeroColonne, aCache) {
        return (
          aNumeroColonne >= 0 &&
          this.ListeTailles &&
          aNumeroColonne < this.ListeTailles.length &&
          (aCache || this._cache).tableauColonnesCachees[aNumeroColonne] !==
            true
        );
      }
      _calculColonnesCachees(aCache) {
        let lColonnesCachees = [],
          lTabColonnes = this._options.colonnesCachees;
        if (
          this.Donnees &&
          this.Donnees.enImpression &&
          this._options.colonnesCacheesImpression
        ) {
          lTabColonnes = this._options.colonnesCacheesImpression;
        }
        if (
          !MethodesObjet_1.MethodesObjet.isArray(lTabColonnes) &&
          isFinite(lTabColonnes)
        ) {
          lColonnesCachees.push(lTabColonnes);
        } else if (MethodesObjet_1.MethodesObjet.isArray(lTabColonnes)) {
          lColonnesCachees = lColonnesCachees.concat(lTabColonnes);
        }
        lColonnesCachees.sort();
        aCache.nbColonnesCachees = 0;
        aCache.tableauColonnesCachees = [];
        aCache.tableauColonnesCacheesOriginal = [];
        if (this.ListeTailles && this.ListeTailles.forEach) {
          this.ListeTailles.forEach((aTaille, aIndex) => {
            let lIdCol;
            let lNonTrouve = lColonnesCachees.indexOf(aIndex) === -1;
            if (lNonTrouve && this._cache.colonnes.listeIds) {
              lIdCol = this._cache.colonnes.listeIds[aIndex];
              if (lIdCol) {
                lNonTrouve = lColonnesCachees.indexOf(lIdCol) === -1;
              }
            }
            let lIndexOriginal = aIndex;
            if (aCache.listeCorrespondancesColonnes && lIdCol) {
              lIndexOriginal =
                aCache.listeCorrespondancesColonnes.indexOf(aIndex);
            }
            if (lNonTrouve) {
              aCache.tableauColonnesCachees[aIndex] = false;
              aCache.tableauColonnesCacheesOriginal[lIndexOriginal] = false;
            } else {
              aCache.tableauColonnesCachees[aIndex] = true;
              aCache.tableauColonnesCacheesOriginal[lIndexOriginal] = true;
              aCache.nbColonnesCachees++;
            }
          });
        }
      }
      _colonneCreationUniqueEnErreur() {
        return (
          this.ListeCreations.length === 1 &&
          (this.ListeCreations[0] < 0 ||
            this.ListeCreations[0] >= this.ListeTailles.length)
        );
      }
      _deploiementSurCellule(aParams) {
        const lTypeValeur = this.Donnees.getTypeValeur(aParams);
        return (
          this.Donnees.avecDeploiement() &&
          this.Donnees.avecDeploiementSurColonne(aParams) &&
          this.Donnees.estUnDeploiement(aParams) &&
          lTypeValeur !==
            ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche
        );
      }
      surDeploiement(aEvent, aColonne, aLigne, aDeploiementSurImage) {
        if (this._cache.creationEnCours || this._cache.editionEnCours) {
          return;
        }
        if (this._avecDeploiementDesactive()) {
          return;
        }
        if (aEvent.type !== 'keyup' && aEvent.which === 2) {
          return;
        }
        const lParams = this._getParamsCellule(aColonne, aLigne, {
          surDeploiement: true,
        });
        if (
          !aDeploiementSurImage &&
          !this.Donnees.avecEventDeploiementSurCellule(lParams)
        ) {
          return;
        }
        if (this._deploiementSurCellule(lParams)) {
          this.Donnees.surDeploiement(aColonne, aLigne, lParams.article);
          this._actualiser({
            sansTriDonnees: true,
            conserverSelection: true,
            conserverFocusSelection: true,
            ignorerFocusListe: false,
          });
          if (this.Donnees.avecEvenementDeploiement(lParams)) {
            this.callback.appel(
              this._getParamsCallback(
                Enumere_EvenementListe_1.EGenreEvenementListe.Deploiement,
                aColonne,
                aLigne,
              ),
              Enumere_EvenementListe_1.EGenreEvenementListe.Deploiement,
              aColonne,
              aLigne,
            );
            this._refreshSelf();
          }
          return true;
        }
      }
      _avecSuppressionSelectionCourante(aNumeroLigne, aNumeroColonne) {
        const lListe = this._getListeElementsSelection(),
          lParams = this._getParamsCellule(aNumeroColonne, aNumeroLigne, {
            listeSelection: lListe,
            surSuppression: true,
          });
        return (
          this._options.AvecSuppression &&
          !this._getNonEditable() &&
          !this._cache.editionEnCours &&
          lListe.count() > 0 &&
          this.Donnees._avecSuppression(lParams)
        );
      }
      _surClickCelluleTotal(event) {
        const lInstance = event.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos) {
          return;
        }
        const lListeLignesTotal = lInstance.Donnees
          ? lInstance.Donnees.getListeLignesTotal()
          : null;
        const lParams = lInstance._getParamsCellule(lInfos.colonne, -1, {
          surTotal: true,
        });
        lParams.ligne = lInfos.ligne;
        if (!!lListeLignesTotal) {
          lParams.article = lListeLignesTotal.get(lInfos.ligne);
        }
        if (
          lInstance.Donnees &&
          lInstance.Donnees.avecEvenementSelectionClickTotal(lParams)
        ) {
          if (lInstance.Pere && lInstance.Evenement) {
            const lParamsCallback = lInstance._getParamsCallback(
              Enumere_EvenementListe_1.EGenreEvenementListe.SelectionClickTotal,
              lParams.colonne,
              lParams.ligne,
            );
            lInstance.callback.appel(
              lParamsCallback,
              Enumere_EvenementListe_1.EGenreEvenementListe.SelectionClickTotal,
              lParams.colonne,
              lParams.ligne,
            );
          }
        }
      }
      _rechercheDeplacementPrecedenteSuivant(aParamsCelluleSource, aSuivant) {
        let lInc = aSuivant ? 1 : -1;
        const lIndiceLigne = this._cache.lignesVisibles.indexOf(
          aParamsCelluleSource.ligne,
        );
        if (lIndiceLigne < 0) {
          return null;
        }
        let lParamsCelluleDest = this._getParamsCellule(
          -1,
          this._cache.lignesVisibles[lIndiceLigne + lInc],
        );
        while (lParamsCelluleDest && lParamsCelluleDest.article) {
          if (
            this.Donnees.autoriserDeplacementElementSurLigne(
              lParamsCelluleDest,
              aParamsCelluleSource,
            )
          ) {
            return lParamsCelluleDest;
          }
          lInc += aSuivant ? 1 : -1;
          lParamsCelluleDest = this._getParamsCellule(
            -1,
            this._cache.lignesVisibles[lIndiceLigne + lInc],
          );
        }
        return null;
      }
      _surDeplacementLigneSurAutreLigne(aParamsDroppable, aParamsDraggable) {
        if (
          aParamsDraggable &&
          this.Donnees.surDeplacementElementSurLigne(
            aParamsDroppable,
            aParamsDraggable,
          ) !== false
        ) {
          this._actualiser({
            conserverSelection: false,
            zonesActualisation: { contenu: true },
            avecEvenementModificationSelection: false,
          });
          this.selectionnerLigne({
            ligne: aParamsDroppable.ligne,
            avecScroll: true,
            avecEvenement: true,
          });
        }
      }
      _existeDeploiementDansListe() {
        if (!this.Donnees || !this.Donnees.Donnees) {
          return false;
        }
        let lAvecDeploiement = false;
        this.Donnees.Donnees.parcourir((aElement, aLigne) => {
          const lParams = this._getParamsCellule(-1, aLigne);
          if (
            this.Donnees.estUnDeploiement(lParams) &&
            this._estLigneVisible(aLigne) &&
            this.Donnees.estUnDeploiementValide(lParams)
          ) {
            lAvecDeploiement = true;
            return false;
          }
        });
        return lAvecDeploiement;
      }
      _getBoutonDeploye() {
        if (
          !this.Donnees ||
          !this.Donnees.avecDeploiement() ||
          !this.Donnees.Donnees
        ) {
          return false;
        }
        let lEstDeploye = false;
        this.Donnees.Donnees.parcourir((aElement, aLigne) => {
          const lParams = this._getParamsCellule(-1, aLigne);
          if (
            this.Donnees.estUnDeploiement(lParams) &&
            this.Donnees._estDeploye(aLigne) &&
            this._estLigneVisible(aLigne) &&
            this.Donnees.estUnDeploiementValide(lParams)
          ) {
            lEstDeploye = true;
            return false;
          }
        });
        return lEstDeploye;
      }
      avecBoutonCreationDansEntete() {
        return (
          this._options.avecCreationEnBoutonDesignClassique ||
          this._options.skin === ObjetListe.skin.flatDesign
        );
      }
      _construireBoutonsEntete(aCssWidth) {
        const lAvecBoutonsListeEntete =
          this._getTabBoutonsEnteteOuPiedFD(true).length > 0;
        const lAvecCBToutCocher = this._options.avecCBToutCocher;
        const lAvecBtnCreation =
          this.avecBoutonCreationDansEntete() &&
          (!this._options.estBoutonCreationPiedFlottant_mobile ||
            !this.optionsInterne.versionMobile) &&
          this._avecLigneCreationTitre();
        const lHtmlLigneTotale = this._construireTotalFD(true);
        const H = [];
        if (
          lAvecBoutonsListeEntete ||
          this._options.avecCBToutCocher ||
          lAvecBtnCreation
        ) {
          const _construireBouton = (aBouton, aIndex) => {
            return IE.jsx.str('ie-btnicon', {
              'ie-model': (0, jsx_1.jsxFuncAttr)('liste.boutonListe', aIndex),
              'ie-if': (0, jsx_1.jsxFuncAttr)(
                'liste.boutonListe.getVisible',
                aIndex,
              ),
              'ie-class': aBouton.getClass
                ? (0, jsx_1.jsxFuncAttr)('liste.boutonListe.getClass', aIndex)
                : false,
              title: aBouton.title ? aBouton.title : '',
              id: aBouton.id,
              class: [
                aBouton.class,
                aBouton.genre === ObjetListe.typeBouton.deployer
                  ? 'bt-activable'
                  : 'bt-activable bt-large',
              ],
            });
          };
          H.push(
            IE.jsx.str(
              'div',
              {
                class: 'liste_btnentete',
                'ie-nodeafter': 'liste.getNodeAferToolbar',
                style: aCssWidth ? `width:${aCssWidth}` : false,
                role: 'toolbar',
                'aria-label':
                  'Entête de liste' +
                  ' ' +
                  'Utilisez les flèches gauche et droite pour naviguer. ',
              },
              (aTab) => {
                const lIndexBtnDeployer = this._cache.boutons.findIndex(
                  (aBouton) => aBouton.genre === ObjetListe.typeBouton.deployer,
                );
                if (lIndexBtnDeployer >= 0) {
                  const lBoutonDeployer =
                    this._cache.boutons[lIndexBtnDeployer];
                  aTab.push(
                    _construireBouton(lBoutonDeployer, lIndexBtnDeployer),
                  );
                }
                if (lAvecCBToutCocher) {
                  aTab.push(
                    IE.jsx.str('ie-checkbox', {
                      'ie-model': (0, jsx_1.jsxFuncAttr)(
                        'liste.cb_ligne_flatDesign',
                        -1,
                      ),
                      'ie-html': (0, jsx_1.jsxFuncAttr)(
                        'liste.cb_ligne_flatDesign.getHtmlCBEntete',
                      ),
                      'ie-attr': (0, jsx_1.jsxFuncAttr)(
                        'liste.cb_ligne_flatDesign.getAttr',
                        -1,
                      ),
                      'ie-textright': true,
                      style: this._options.paddingContenu_LR
                        ? 'padding-left:' +
                          this._options.paddingContenu_LR +
                          'px;'
                        : false,
                    }),
                  );
                }
                if (lAvecBtnCreation) {
                  aTab.push(
                    IE.jsx.str(
                      'ie-bouton',
                      {
                        id: this.ids.btnCreation,
                        'ie-model': 'liste.btnCreationEntete',
                        class: 'themeBoutonPrimaire',
                        'ie-icon': this._options.iconeTitreCreation,
                      },
                      this._options.titreCreation,
                    ),
                  );
                }
                if (lAvecBoutonsListeEntete) {
                  aTab.push(
                    (0, tag_1.tag)(
                      'div',
                      { class: 'liste_btnentete_droite', role: 'presentation' },
                      (aTabBtn) => {
                        this._cache.boutons.forEach((aBouton, aIndex) => {
                          if (
                            aBouton.genre === ObjetListe.typeBouton.deployer
                          ) {
                            return;
                          }
                          if (
                            this.optionsInterne.versionMobile &&
                            aBouton.estBoutonPiedFlottant_mobile
                          ) {
                            return;
                          }
                          if (aBouton.html) {
                            aTabBtn.push(
                              IE.jsx.str('div', {
                                'ie-node': (0, jsx_1.jsxFuncAttr)(
                                  'liste.nodeBtnEnteteLibre',
                                  aIndex,
                                ),
                                role: 'presentation',
                              }),
                            );
                            return;
                          }
                          let H = _construireBouton(aBouton, aIndex);
                          if (
                            aBouton.genre === ObjetListe.typeBouton.rechercher
                          ) {
                            H = IE.jsx.str(
                              'div',
                              {
                                class: 'liste_contbtnRechercheEntete',
                                role: 'presentation',
                              },
                              H,
                            );
                          }
                          aTabBtn.push(H);
                        });
                      },
                    ),
                  );
                }
              },
            ),
          );
        }
        if (lHtmlLigneTotale) {
          H.push(lHtmlLigneTotale);
        }
        return H.join('');
      }
      _construireTotalFD(aPourHeader) {
        const lHtml = this.construireTotalInterneFD(aPourHeader);
        if (lHtml) {
          return IE.jsx.str(
            'div',
            {
              class: [
                'liste-totale-fd',
                aPourHeader ? 'liste-header' : 'liste-footer',
              ],
            },
            lHtml,
          );
        }
        return '';
      }
      construireTotalInterneFD(aPourHeader) {
        if (
          this._options.skin === ObjetListe.skin.flatDesign &&
          this.Donnees &&
          this.Donnees instanceof
            ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign &&
          this.Donnees.getTotal &&
          this.Donnees._getLigneTotaleSelectionnableFd
        ) {
          let lLigneTotale = this.Donnees.getTotal(aPourHeader);
          if (!lLigneTotale) {
            this.getListeArticles().parcourir((aArticle, aIndex) => {
              const lLigne =
                this.Donnees._getLigneTotaleSelectionnableFd(aIndex);
              if (
                lLigne &&
                !!lLigne.header === !!aPourHeader &&
                lLigne.estVisible
              ) {
                lLigneTotale = lLigne;
                return false;
              }
            });
          }
          if (lLigneTotale) {
            const lAvecSelection =
              lLigneTotale.avecSelection && !!lLigneTotale.article;
            let lEstSelectionne = false;
            if (
              !this.Donnees.enConstruction_cacheRechercheTexte &&
              lAvecSelection
            ) {
              lEstSelectionne = this._etatSelectionCellule({
                ligne: lLigneTotale.ligne,
                colonne: lLigneTotale.colonne,
              });
            }
            const lEnRecherche =
              this.Donnees.enConstruction_cacheRechercheTexte;
            let lMargin = '';
            if (!IE.estMobile) {
              lMargin = `0 ${this._options.paddingContenu_LR + this._getLargeurScrollV()}px 0 ${this._options.paddingContenu_LR}px`;
            }
            return (0, tag_1.tag)(
              'div',
              {
                class: [
                  lAvecSelection ? 'selectable' : '',
                  lEstSelectionne ? 'selected' : '',
                  lAvecSelection &&
                  IE.estMobile &&
                  !this.Donnees.enConstruction_cacheRechercheTexte
                    ? 'ie-ripple'
                    : '',
                ],
                style: tag_1.tag.styleToStr('margin', lMargin),
                id: lAvecSelection
                  ? this.getIdCellule(lLigneTotale.colonne, lLigneTotale.ligne)
                  : false,
                'ie-node':
                  lAvecSelection && !lEnRecherche
                    ? (0, jsx_1.jsxFuncAttr)('liste.nodeTotalFd', [
                        lLigneTotale.ligne,
                        lLigneTotale.colonne,
                      ])
                    : false,
                'ie-attr': !lEnRecherche
                  ? (0, jsx_1.jsxFuncAttr)('liste.attrTotalFd', [
                      lLigneTotale.ligne,
                      lLigneTotale.colonne,
                      lAvecSelection,
                    ])
                  : false,
                tabindex: '0',
                role: lAvecSelection ? 'button' : false,
              },
              (aHtml) => {
                aHtml.push(
                  (0, tag_1.tag)(
                    'span',
                    {
                      class: [
                        lLigneTotale.avecEtiquette ? 'total-etiqu' : 'sr-only',
                      ],
                    },
                    'Total',
                  ),
                );
                if (lLigneTotale.avecEtiquette) {
                  aHtml.push(IE.jsx.str('div', { class: 'total-etiqu-sep' }));
                }
                aHtml.push(
                  (0, tag_1.tag)(
                    'div',
                    {
                      class: 'total-content',
                      'aria-label': lLigneTotale.wai || false,
                    },
                    lLigneTotale.html || '',
                  ),
                );
              },
            );
          }
        }
        return '';
      }
      _getJConteneurInputRecherche() {
        return this._options.positionBoutons === NSListe.positionBoutons.entete
          ? $('#' + this.Nom.escapeJQ() + ' .liste_contbtnRechercheEntete')
          : $('#' + this.Nom.escapeJQ() + ' .liste_cont_btnscroll');
      }
      _creerZoneRechercheTexte(aAvecFocus) {
        const lJContenur = this._getJConteneurInputRecherche();
        if (lJContenur.find('.liste_rechercheTexte').length === 0) {
          let lAvecRecherche = false;
          if (this._cache.boutons) {
            lAvecRecherche = !!this._cache.boutons.find(
              (aBouton) => aBouton.genre === ObjetListe.typeBouton.rechercher,
            );
          }
          if (!lAvecRecherche) {
            return;
          }
          const H = IE.jsx.str(
            'div',
            { class: 'liste_rechercheTexte like-input' },
            IE.jsx.str('input', {
              type: 'text',
              'ie-textbrut': true,
              'ie-model': 'liste.rechercheTexte',
              placeholder:
                'Rechercher dans la liste',
              title:
                'Rechercher dans la liste',
              'aria-label':
                'Rechercher dans la liste',
              autocorrect: 'off',
              autocapitalize: 'off',
              spellcheck: 'off',
              class: 'browser-default',
            }),
            IE.jsx.str('ie-btnicon', {
              class: 'icon_fermeture_widget',
              'ie-model': 'liste.btnRechercheTexte',
              title:
                'Supprimer',
            }),
            IE.jsx.str('div', {
              role: 'alert',
              class: 'liste_rechercheTexte_alerte sr-only hide',
              'ie-html': 'liste.getHtmlResultRecherche',
              'aria-atomic': 'true',
            }),
          );
          lJContenur.ieHtmlAppend(H, { controleur: this.controleur });
        }
        if (aAvecFocus) {
          setTimeout(() => {
            const lElement = lJContenur
              .find('.liste_rechercheTexte input')
              .get(0);
            ObjetHtml_1.GHtml.setFocusEdit(lElement);
          }, 0);
        }
      }
      _supprimerZoneRechercheTexte() {
        this._getJConteneurInputRecherche()
          .find('.liste_rechercheTexte')
          .remove();
      }
      _annulerRechercheTexte() {
        this._setRechercheSaisie('');
        this._supprimerZoneRechercheTexte();
        const lCacheBouton = this._cache.boutons.find(
          (aBouton) => aBouton.genre === ObjetListe.typeBouton.rechercher,
        );
        ObjetHtml_1.GHtml.setFocus(
          lCacheBouton && lCacheBouton.id
            ? lCacheBouton.id
            : this.IdPremierElement,
        );
        this._filtreRechercheTexte({ annulerRechercheTexte: true });
      }
      _estLigneDansRangeNonConstruitDyn(aNumeroLigne) {
        const lCacheRef = this._cache.refresh;
        if (!lCacheRef.avecConstructionDynamiqueContenu) {
          return false;
        }
        const lIndexLigneVisible =
          this._cache.lignesVisibles.indexOf(aNumeroLigne);
        if (lIndexLigneVisible < 0) {
          return false;
        }
        const lStructureMin = lCacheRef.structure[lCacheRef.mapRangesExist.min];
        const lStructureMax = lCacheRef.structure[lCacheRef.mapRangesExist.max];
        if (lStructureMin && lStructureMax) {
          return (
            lIndexLigneVisible < lStructureMin.deb ||
            lIndexLigneVisible > lStructureMax.fin
          );
        }
        return false;
      }
      _getPositionTopLigneDynamiqueEvaluee(aNumeroLigne) {
        const lCacheRef = this._cache.refresh;
        if (!lCacheRef.avecConstructionDynamiqueContenu) {
          return null;
        }
        const lIndexLigne = this._cache.lignesVisibles.indexOf(aNumeroLigne);
        if (lIndexLigne < 0) {
          return null;
        }
        let lPosTop_Cellule = ObjetPosition_1.GPosition.getClientRect(
          lCacheRef.node_gab_start[0],
        ).top;
        for (const lStructure of lCacheRef.structure) {
          const lHeightStruct = lCacheRef.getHeightStructure(lStructure);
          if (lIndexLigne > lStructure.fin) {
            lPosTop_Cellule += lHeightStruct;
          } else {
            lPosTop_Cellule +=
              (lHeightStruct / (lStructure.fin - lStructure.deb + 1)) *
              (lIndexLigne - lStructure.deb);
            break;
          }
        }
        return lPosTop_Cellule;
      }
      _actualiserHeightRanges(aIndiceRange) {
        const lCacheRef = this._cache.refresh;
        let lAvecActualisation = false;
        const lTabIndices = [];
        if (aIndiceRange >= 0) {
          lTabIndices.push(aIndiceRange);
        } else {
          for (
            let lIndice = lCacheRef.mapRangesExist.min;
            lIndice <= lCacheRef.mapRangesExist.max;
            lIndice++
          ) {
            lTabIndices.push(lIndice);
          }
        }
        for (const lIndice of lTabIndices) {
          const lRangeConstruit = lCacheRef.mapRangesExist.get(lIndice);
          const lStructure = lCacheRef.structure[lIndice];
          if (!lRangeConstruit || !lStructure) {
            continue;
          }
          if (lRangeConstruit.node_start && lRangeConstruit.node_end) {
            lStructure.height =
              ObjetPosition_1.GPosition.getClientRect(lRangeConstruit.node_end)
                .top -
              ObjetPosition_1.GPosition.getClientRect(
                lRangeConstruit.node_start,
              ).bottom;
            lAvecActualisation = true;
          }
        }
        if (lAvecActualisation) {
          let lHeightTotal = 0;
          let lNbLignesTotal = 0;
          lCacheRef.structure.forEach((aStructure) => {
            if (aStructure.height > 0) {
              lHeightTotal += aStructure.height;
              lNbLignesTotal += aStructure.nbLignes;
            }
          });
          if (lNbLignesTotal > 0) {
            lCacheRef.hauteurMoyenneLigne = lHeightTotal / lNbLignesTotal;
          }
        }
      }
      _callbackObserverRefreshContenu(aObservables) {
        let lAvecRefresh = false;
        aObservables.forEach((aObservable) => {
          const lVisible =
            aObservable.intersectionRatio > 0 || aObservable.isIntersecting;
          const lData = this._cache.refresh.mapNodesObs.get(aObservable.target);
          if (lData) {
            if (lVisible) {
              lAvecRefresh = true;
            } else {
              if (!lData.gabarit) {
                lAvecRefresh = true;
              }
            }
          }
        });
        if (lAvecRefresh) {
          this._refreshContenuDynamique({
            avecBackupScroll: this.optionsInterne.versionMobile,
          });
          this._cache.refresh.surRefreshContenu = true;
          setTimeout(() => {
            this._cache.refresh.surRefreshContenu = false;
          }, 100);
        }
      }
      addContenuSurRefreshDyn(aParams) {
        const lParams = Object.assign({ start: false, indices: [] }, aParams);
        const lCache = this._cache;
        const lCacheRef = lCache.refresh;
        lCache.infosZonesColonnes.forEach((aInfosZoneColonnes, aIndex) => {
          const H = [];
          for (const lIndice of lParams.indices) {
            H.push(this._construireContenuRange(aInfosZoneColonnes, lIndice));
          }
          if (H) {
            let lNode = lCacheRef.node_gab_end[aIndex];
            if (lParams.start) {
              lNode = lCacheRef.node_gab_start[aIndex].nextSibling;
            }
            if (!lNode || !lNode.parentNode) {
              return;
            }
            IEHtml.injectHTMLParams({
              html: H.join(''),
              element: lNode.parentNode,
              insererAvantLeNode: lNode,
              controleur: this.controleur,
              ignorerScroll: true,
            });
          }
        });
      }
      _getClassRange(aIndiceRange) {
        return `_range_${aIndiceRange}`;
      }
      _refreshContenuDynamique(aParams) {
        const lCache = this._cache;
        const lCacheRef = lCache.refresh;
        if (!lCacheRef.avecConstructionDynamiqueContenu) {
          return;
        }
        const lParams = Object.assign(
          {
            surInitialisation: false,
            avecBackupScroll: false,
            refreshRecursif: false,
            conserverPositionElement: null,
          },
          aParams,
        );
        let lIndiceRangeDebut = lCacheRef.mapRangesExist.min;
        let lIndiceRangeFin = lCacheRef.mapRangesExist.max;
        if (
          !lCacheRef.mapRangesExist.has(lIndiceRangeDebut) ||
          !lCacheRef.mapRangesExist.has(lIndiceRangeFin)
        ) {
          return;
        }
        let lRectListe = ObjetPosition_1.GPosition.getClientRect(
          ObjetHtml_1.GHtml.getElement(this.Nom),
        );
        let lRectListe2 = ObjetPosition_1.GPosition.getClientRect(
          $(`#${this.Nom.escapeJQ()}>.ObjetListe`).get(0),
        );
        if (lRectListe2.height > lRectListe.height) {
          IE.log.addLog(
            `_ObjetListe : _refreshContenuDynamique avec overflow visible du contenu (demander à fv) ?`,
          );
          lRectListe = lRectListe2;
        }
        if (lRectListe.width === 0 || lRectListe.height === 0) {
          return;
        }
        let lAvecModif = false;
        let lBackupScroll = null;
        if (!lParams.surInitialisation) {
          if (lParams.avecBackupScroll) {
            lBackupScroll = this._backupScroll({
              conserverPositionScroll: true,
            });
          }
          const lBorneListeBottom = Math.min(
            GNavigateur.ecranH,
            lRectListe.bottom,
          );
          const lBorneListeTop = Math.max(0, lRectListe.top);
          const lRectStart = ObjetPosition_1.GPosition.getClientRect(
            lCacheRef.node_gab_start[0],
          );
          const lMapIndexVisibles = new Map();
          let lPos = lRectStart.top;
          for (let lIndex = 0; lIndex < lCacheRef.structure.length; lIndex++) {
            const lStructure = lCacheRef.structure[lIndex];
            const lHeight = lCacheRef.getHeightStructure(lStructure);
            if (lPos + lHeight > lBorneListeTop && lPos < lBorneListeBottom) {
              lMapIndexVisibles.set(lIndex, true);
              if (lIndex > 0) {
                lMapIndexVisibles.set(lIndex - 1, true);
              }
              if (lIndex < lCacheRef.structure.length - 1) {
                lMapIndexVisibles.set(lIndex + 1, true);
              }
            } else if (lPos + lHeight > lBorneListeBottom) {
              break;
            }
            lPos += lHeight;
          }
          if (lMapIndexVisibles.size === 0) {
            lMapIndexVisibles.set(0, true);
          }
          const lIndices_suppr = [];
          for (
            let lIndiceRange = lIndiceRangeDebut;
            lIndiceRange <= lIndiceRangeFin;
            lIndiceRange++
          ) {
            if (
              lCacheRef.mapRangesExist.has(lIndiceRange) &&
              !lMapIndexVisibles.has(lIndiceRange)
            ) {
              lIndices_suppr.push(lIndiceRange);
            }
          }
          if (lIndices_suppr.length > 0) {
            let lElementFocus = null;
            if (
              ObjetHtml_1.GHtml.focusEstDansElement &&
              ObjetHtml_1.GHtml.focusEstDansElement(this.Nom)
            ) {
              lElementFocus = ObjetHtml_1.GHtml.getElementEnFocus();
            }
            lAvecModif = true;
            const lFindExpr = [];
            lIndices_suppr.forEach((aIndex) => {
              lFindExpr.push(`.${this._getClassRange(aIndex)}`);
            });
            for (const lIndex in lCache.infosZonesColonnes) {
              $(lCacheRef.node_gab_end[lIndex])
                .parent()
                .find(lFindExpr.join(','))
                .remove();
            }
            if (lElementFocus && !$.contains(document.body, lElementFocus)) {
              ObjetHtml_1.GHtml.setFocus(this.IdPremierElement);
            }
          }
          const lIndices_ajout_after = [];
          const lIndices_ajout_before = [];
          for (const lIndice of lMapIndexVisibles.keys()) {
            if (lIndice > lIndiceRangeFin) {
              lIndices_ajout_after.push(lIndice);
            }
            if (lIndice < lIndiceRangeDebut) {
              lIndices_ajout_before.push(lIndice);
            }
          }
          const lFuncSortNumber = (a, b) => a - b;
          if (lIndices_ajout_after.length > 0) {
            lAvecModif = true;
            this.addContenuSurRefreshDyn({
              indices: lIndices_ajout_after.sort(lFuncSortNumber),
              start: false,
            });
          }
          if (lIndices_ajout_before.length > 0) {
            lAvecModif = true;
            this.addContenuSurRefreshDyn({
              indices: lIndices_ajout_before.sort(lFuncSortNumber),
              start: true,
            });
          }
          if (lAvecModif) {
            this._controleHeightLigne();
            this._surlignageRechercheTexte();
          }
        }
        if (lAvecModif || lParams.surInitialisation) {
          lIndiceRangeFin = lCacheRef.mapRangesExist.max;
          lIndiceRangeDebut = lCacheRef.mapRangesExist.min;
          let lheight_start = 0;
          let lHeight_end = 0;
          lCacheRef.structure.forEach((aStructure, aIndice) => {
            const lHeight = lCacheRef.getHeightStructure(aStructure);
            if (aIndice < lIndiceRangeDebut) {
              lheight_start += lHeight;
            } else if (aIndice > lIndiceRangeFin) {
              lHeight_end += lHeight;
            }
          });
          for (const lIndex in lCache.infosZonesColonnes) {
            lCacheRef.observer.unobserve(lCacheRef.node_gab_start[lIndex]);
            lCacheRef.observer.unobserve(lCacheRef.node_gab_end[lIndex]);
            lheight_start = Math.max(0, lheight_start);
            $(lCacheRef.node_gab_start[lIndex]).height(lheight_start);
            lCacheRef.observer.observe(lCacheRef.node_gab_start[lIndex]);
            lHeight_end = Math.max(0, lHeight_end);
            $(lCacheRef.node_gab_end[lIndex]).height(lHeight_end);
            lCacheRef.observer.observe(lCacheRef.node_gab_end[lIndex]);
          }
          if (lBackupScroll) {
            this._setScroll(lBackupScroll);
          }
          this._cache.positionsCelluleCadreSelection = {};
          this._actualiserCadreSelection();
        }
        let lConserverPositionElement = lParams.conserverPositionElement;
        if (lParams.conserverPositionElement) {
          const lElementCellule = ObjetHtml_1.GHtml.getElement(
            this.getIdCellule(
              lParams.conserverPositionElement.colonne,
              lParams.conserverPositionElement.ligne,
            ),
          );
          const lBackupScrollElement = this._backupScroll({
            conserverPositionScroll: true,
          });
          if (lBackupScrollElement) {
            let lPos = 0;
            if (lElementCellule) {
              lPos =
                ObjetPosition_1.GPosition.getClientRect(lElementCellule).top;
              lConserverPositionElement = null;
            } else if (!lBackupScroll) {
              lPos = this._getPositionTopLigneDynamiqueEvaluee(
                lParams.conserverPositionElement.ligne,
              );
            }
            const lDiffY =
              lPos - lParams.conserverPositionElement.rectCellule.top;
            if (lDiffY !== 0 && lPos !== null) {
              lBackupScrollElement.scrollTop += lDiffY;
              this._setScroll(lBackupScrollElement);
            }
          }
        }
        if (lAvecModif && lParams.refreshRecursif) {
          if (lParams.indiceRecursif > 10) {
            return;
          }
          this._refreshContenuDynamique({
            refreshRecursif: true,
            indiceRecursif:
              lParams.indiceRecursif > 0 ? lParams.indiceRecursif + 1 : 1,
            conserverPositionElement: lConserverPositionElement,
          });
        }
      }
      _scrollSurLigne(aParams) {
        if (this._enResize) {
          return;
        }
        if (this._cache.lignesVisibles.indexOf(aParams.ligne) < 0) {
          return;
        }
        const lBackupScroll = this._backupScroll({
          conserverPositionScroll: true,
        });
        if (!lBackupScroll) {
          return;
        }
        if (!lBackupScroll.elementScrollV) {
          return;
        }
        const lLigneAConstruire = this._estLigneDansRangeNonConstruitDyn(
          aParams.ligne,
        );
        let lTopCelluleDansContenu = 0;
        let lHeightCellule = 0;
        const lRectContenuScroll = ObjetPosition_1.GPosition.getClientRect(
          lBackupScroll.elementScrollV,
        );
        if (lLigneAConstruire) {
          const lCacheRef = this._cache.refresh;
          if (!lCacheRef.avecConstructionDynamiqueContenu) {
            return;
          }
          lHeightCellule = lCacheRef.hauteurMoyenneLigne;
          lTopCelluleDansContenu = this._getPositionTopLigneDynamiqueEvaluee(
            aParams.ligne,
          );
        } else {
          let lJCellule =
            aParams.colonne >= 0
              ? $(
                  '#' +
                    this.getIdCellule(
                      aParams.colonne,
                      aParams.ligne,
                    ).escapeJQ(),
                )
              : null;
          if (!lJCellule || lJCellule.length === 0) {
            this._cache.infosZonesColonnes.every((aBloc) => {
              return aBloc.colonnesVisibles.every((aNumeroColonne) => {
                lJCellule = $(
                  '#' +
                    this.getIdCellule(aNumeroColonne, aParams.ligne).escapeJQ(),
                );
                return lJCellule.length === 0;
              });
            });
            if (lJCellule.length === 0) {
              return;
            }
          }
          const lRectCellule = ObjetPosition_1.GPosition.getClientRect(
            lJCellule.get(0),
          );
          lHeightCellule =
            lRectCellule.outerHeight + (aParams.ecartForce * 2 || 0);
          lTopCelluleDansContenu =
            lRectCellule.top -
            lRectContenuScroll.top -
            (aParams.ecartForce || 0);
        }
        let lDecalageScroll = 0;
        if (lTopCelluleDansContenu < 0) {
          lDecalageScroll = lTopCelluleDansContenu;
        } else if (
          lTopCelluleDansContenu > 0 &&
          (aParams.avecScrollTopLigne || lRectContenuScroll.height === 0)
        ) {
          lDecalageScroll = lTopCelluleDansContenu;
        } else {
          const lZoneHeight = lRectContenuScroll.contentHeight;
          if (
            lTopCelluleDansContenu + lHeightCellule > lZoneHeight &&
            lTopCelluleDansContenu > 0
          ) {
            lDecalageScroll =
              lTopCelluleDansContenu + lHeightCellule - lZoneHeight;
          }
        }
        if (lDecalageScroll !== 0) {
          lBackupScroll.scrollTop = lBackupScroll.scrollTop + lDecalageScroll;
          this._setScroll(lBackupScroll);
          this._refreshContenuDynamique({
            avecBackupScroll: true,
            refreshRecursif: true,
          });
        }
        if (lLigneAConstruire) {
          if (!aParams._appelRecursif) {
            this._scrollSurLigne(
              Object.assign({}, aParams, { _appelRecursif: true }),
            );
            return;
          }
        }
      }
      _construireFiltres() {
        if (
          this._options.avecFiltresVisibles &&
          this.Donnees &&
          this.Donnees instanceof
            ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign &&
          this.Donnees._construireFiltres &&
          this.Donnees._getControleurFiltres &&
          this._cache.boutons &&
          this._cache.boutons.length > 0
        ) {
          const lAvecFiltre = !this._cache.boutons.every(
            (aBouton) => aBouton.genre !== ObjetListe.typeBouton.filtrer,
          );
          if (lAvecFiltre) {
            const lRoleGrid = this._estRoleTreeGrid();
            return IE.jsx.str(
              'div',
              {
                class: 'zone-filtres',
                role: lRoleGrid ? 'row' : 'group',
                'aria-label':
                  'Filtrer la liste',
              },
              IE.jsx.str('div', {
                'ie-node': 'liste.getNodeFiltres',
                role: lRoleGrid ? 'treegrid' : 'treeitem',
              }),
            );
          }
        }
        return '';
      }
      _surEventDownLigne(aParams) {
        if (
          aParams &&
          aParams.event &&
          aParams.event.target &&
          aParams.event.target.id === this.IdEdition
        ) {
          return;
        }
        delete this._cache.infosMouseDownCellule_apresFinEdition;
        if (this._cache.finEditionCreation) {
          const lResultFinEdition = this._cache.finEditionCreation();
          if (
            !this.Donnees.options.editionSurSelectionApresFinEdition ||
            (lResultFinEdition &&
              typeof lResultFinEdition === 'object' &&
              'avecMessagerErreur' in lResultFinEdition &&
              lResultFinEdition.avecMessagerErreur)
          ) {
            return;
          }
          this._cache.infosMouseDownCellule_apresFinEdition = {
            ligne: aParams.ligne,
            colonne: aParams.colonne,
          };
          return;
        }
        if (this._cache.editionEnCoursEvenement) {
          this._cache.editionEnCoursEvenement = false;
          this._nettoyerElementsEditionEnCours();
        }
        if (this._estEventSansSelect(aParams.event)) {
          return;
        }
        if (aParams.gestionShift && !aParams.event.shiftKey) {
          this._cache.celluleClicNonShift = {
            ligne: aParams.ligne,
            colonne: aParams.colonne,
          };
        }
        const lAvecMultiSelection = this.Donnees.avecMultiSelection();
        let lSansSelection = false;
        if (aParams.gestionMultiSelection) {
          lSansSelection =
            aParams.event.button === 2 &&
            this._etatSelectionCellule({
              ligne: aParams.ligne,
              colonne: aParams.colonne,
            }) &&
            lAvecMultiSelection &&
            (this._getListeElementsSelection().count() > 1 ||
              (this._estSelectionParCellule(aParams.ligne, aParams.colonne) &&
                this.getTableauCellulesSelection().length > 0));
        }
        if (!lSansSelection) {
          lSansSelection = !this._surSelection(aParams.colonne, aParams.ligne, {
            ctrlKey: aParams.event.ctrlKey,
            shiftKey: aParams.event.shiftKey,
            surInteractionUtilisateur: true,
          });
        }
        if (
          !aParams.gestionMultiSelection ||
          !lAvecMultiSelection ||
          (!aParams.event.ctrlKey && !aParams.event.shiftKey)
        ) {
          if (
            this.surDeploiement(aParams.event, aParams.colonne, aParams.ligne)
          ) {
            aParams.event.preventDefault();
          }
        }
        if (!lSansSelection) {
          this.surSelectionEvenement(aParams.colonne, aParams.ligne);
        }
      }
      _estEventSansSelect(aEvent) {
        if (aEvent && aEvent.target) {
          const lNode = ObjetHtml_1.GHtml.getClosestFocusable(aEvent.target);
          if (
            lNode &&
            !lNode.classList.contains('liste-cellule-focusable') &&
            !!lNode.closest('.liste-cellule-focusable')
          ) {
            return true;
          }
        }
        return false;
      }
      _estRoleTreeGrid() {
        return this._options.skin !== ObjetListe.skin.flatDesign;
      }
      _avecDeploiementDesactive() {
        if (!this.Donnees) {
          return true;
        }
        if (this.Donnees.options.ignorerDeploiementSurRechercheTexte) {
          return !this._estRechercheTexteVide();
        }
        return false;
      }
      _surlignageRechercheTexte() {
        if (this._estRechercheTexteVide()) {
          RechercheTexte_1.RechercheTexte.removeSurlignage(
            $(`#${this.Nom.escapeJQ()}`),
          );
          return;
        }
        const lRangeLignes = {
          debut: 0,
          fin: this._cache.lignesVisibles.length,
        };
        if (this._cache.refresh.avecConstructionDynamiqueContenu) {
          const lCacheRef = this._cache.refresh;
          lRangeLignes.debut =
            lCacheRef.structure[lCacheRef.mapRangesExist.min].deb;
          lRangeLignes.fin =
            lCacheRef.structure[lCacheRef.mapRangesExist.max].fin + 1;
        }
        let lTabDOM = [];
        for (
          let iIndice = lRangeLignes.debut;
          iIndice < lRangeLignes.fin;
          iIndice++
        ) {
          const lNumeroLigne = this._cache.lignesVisibles[iIndice];
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
              const lElement = ObjetHtml_1.GHtml.getElement(
                this.getIdCellule(
                  aInfosZoneColonnes.colonnesVisibles[aNumeroColonne],
                  lNumeroLigne,
                ),
              );
              if (lElement) {
                lTabDOM.push(lElement);
              }
            });
          });
        }
        if (
          !RechercheTexte_1.RechercheTexte.surlignage(
            lTabDOM,
            this._cache.rechercheTexte.saisie,
          )
        ) {
          RechercheTexte_1.RechercheTexte.removeSurlignage(
            $(`#${this.Nom.escapeJQ()}`),
          );
        }
      }
      _getTabElementsPourRsizeObserver() {
        return [];
      }
      _actualiserZones(aZonesActualisation, aParams) {}
      composeIconEtImage(aParamsCellule, aEstIcon) {
        const lValeur = this.Donnees._getValeur(aParamsCellule);
        const lHintHtml = this.Donnees.getHintHtmlForce(aParamsCellule);
        const lHint = this.Donnees.getHintForce(aParamsCellule),
          lStyle = this.Donnees.getStyle(aParamsCellule),
          lClass = this.Donnees.getClass(aParamsCellule);
        const lAttrs = {
          'ie-hint': lHintHtml ? `'${lHintHtml}'` : false,
          title: lHint && !lHintHtml ? lHint : false,
        };
        const lClasses = [
          'liste_contenu_ligne',
          lValeur,
          lClass ? ' ' + lClass : '',
        ];
        if (aEstIcon) {
          lClasses.push('AlignementMilieu');
          return IE.jsx.str(
            'i',
            Object.assign({ class: lClasses, style: lStyle || false }, lAttrs),
          );
        }
        const lLargeurImage =
          this._options.largeurImage > 0
            ? `width:${this._options.largeurImage}px;`
            : '';
        return IE.jsx.str(
          'div',
          Object.assign(
            { style: 'width: 100%', class: 'AlignementMilieu' },
            lAttrs,
          ),
          IE.jsx.str(
            'div',
            {
              class: lClasses,
              style: lLargeurImage + (lStyle ? ' ' + lStyle : ''),
            },
            '\u00A0',
          ),
        );
      }
      async surEditionTextFenetreAsync(aParams) {
        const lParams = Object.assign(
          { html: '', surCreation: false, surInputText: false, colonne: -1 },
          aParams,
        );
        let lStrTitre =
          lParams.surCreation && this._options.titreCreation
            ? this._options.titreCreation
            : '';
        if (this.ListeTitres && this.ListeTitres[0]) {
          const lDescripteurTitre = this.ListeTitres[0][lParams.colonne];
          let lStr = '';
          if (lDescripteurTitre) {
            lStr = lDescripteurTitre.libelleHtml
              ? lDescripteurTitre.libelleHtml
              : lDescripteurTitre.estCoche
                ? ''
                : lDescripteurTitre.libelle || '';
          }
          if (lStr) {
            if (lParams.surCreation && this._options.titreCreation) {
              lStrTitre = lStrTitre + ' - ' + lStr;
            }
            if (!lParams.surCreation) {
              lStrTitre =
                'Modifier' +
                ' - ' +
                lStr;
            }
          }
        }
        class ObjetFenetreEditionText extends ObjetFenetre_1.ObjetFenetre {
          constructor(...aParams) {
            super(...aParams);
            this.setOptionsFenetre({
              listeBoutons: [
                'Fermer',
                {
                  estValider: true,
                  libelle: 'Valider',
                },
              ],
              largeur: 400,
              titre: lStrTitre,
              avecCroixFermeture: true,
              fermerFenetreSurClicHorsFenetre: IE.estMobile,
              empilerFenetre: false,
              bloquerFocus: IE.estMobile,
            });
          }
          getControleur(aInstance) {
            return $.extend(true, super.getControleur(aInstance), {
              getNode() {
                ObjetHtml_1.GHtml.setHtml(
                  this.node,
                  IE.jsx.str(
                    IE.jsx.fragment,
                    null,
                    IE.jsx.str(
                      'label',
                      { for: aInstance.IdEdition, class: 'sr-only' },
                      lStrTitre,
                    ),
                    lParams.html,
                  ),
                  { instance: aInstance.Pere },
                );
                if (lParams.surInputText) {
                  $(this.node).on('keyup', (aEvent) => {
                    if (
                      ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(
                        aEvent,
                      )
                    ) {
                      aInstance.surValidation(1);
                    }
                  });
                }
              },
            });
          }
          composeContenu() {
            return IE.jsx.str('div', { 'ie-node': 'getNode' });
          }
          surAfficher() {
            if (lParams.surCreation) {
              ObjetHtml_1.GHtml.setFocusEdit(this.IdEdition);
              ObjetHtml_1.GHtml.setSelectionEdit(this.IdEdition);
            }
          }
        }
        const lResult = await ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetreEditionText,
          {
            pere: this,
            initialiser: function (aInstanceFenetre) {
              aInstanceFenetre.IdEdition = this.IdEdition;
            },
          },
        ).afficher();
        if (lResult && lResult.bouton && lResult.bouton.estValider) {
          if (this._cache.finEditionCreation) {
            this._cache.finEditionCreation();
          }
        } else {
          if (lParams.surCreation) {
            this._annulerCreation();
            $(`#${this.ids.btnCreation.escapeJQ()}`).trigger('focus');
          } else {
            this._surEditionFin({
              colonne: this._cache.selectionCellule.colonne,
              ligne: this._cache.selectionCellule.ligne,
            });
          }
        }
      }
      startNavigationContenu() {
        let lResult = false;
        if (this._cache.selectionCellule.ligne >= 0) {
          lResult = this._navigationCelluleSuivante({
            sansRecherche: true,
            forcerNavigationFocus: true,
          });
        }
        if (!lResult) {
          lResult = this._navigationCelluleSuivante({
            ligne: -1,
            colonne: -1,
            forcerNavigationFocus: true,
          });
        }
      }
    }
    exports.ObjetListe = ObjetListe;
    ObjetListe.typeInterTitre =
      ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign.typeInterTitre;
    ObjetListe.parsingSurColonneTri = Number.MAX_VALUE;
    var NSListe;
    (function (NSListe) {
      let positionBoutons;
      (function (positionBoutons) {
        positionBoutons[(positionBoutons['entete'] = 0)] = 'entete';
        positionBoutons[(positionBoutons['hautScroll'] = 1)] = 'hautScroll';
      })(
        (positionBoutons =
          NSListe.positionBoutons || (NSListe.positionBoutons = {})),
      );
      let FlecheTri;
      (function (FlecheTri) {
        FlecheTri['principal'] = 'principal';
        FlecheTri['secondaire'] = 'secondaire';
        FlecheTri['survol'] = 'survol';
      })((FlecheTri = NSListe.FlecheTri || (NSListe.FlecheTri = {})));
    })(NSListe || (exports.NSListe = NSListe = {}));
    (function (ObjetListe) {
      let typeLibelleCocheCBEntete;
      (function (typeLibelleCocheCBEntete) {
        typeLibelleCocheCBEntete['toutCocher'] = 'toutCocher';
        typeLibelleCocheCBEntete['compteurSelec'] = 'compteurSelec';
        typeLibelleCocheCBEntete['vide'] = 'vide';
      })(
        (typeLibelleCocheCBEntete =
          ObjetListe.typeLibelleCocheCBEntete ||
          (ObjetListe.typeLibelleCocheCBEntete = {})),
      );
      let skin;
      (function (skin) {
        skin['classique'] = 'classique';
        skin['alternance'] = 'alternance';
        skin['flatDesign'] = 'flatDesign';
      })((skin = ObjetListe.skin || (ObjetListe.skin = {})));
      let typeBouton;
      (function (typeBouton) {
        typeBouton['monter'] = 'monter';
        typeBouton['descendre'] = 'descendre';
        typeBouton['deployer'] = 'deployer';
        typeBouton['supprimer'] = 'supprimer';
        typeBouton['editer'] = 'editer';
        typeBouton['exportCSV'] = 'exportCSV';
        typeBouton['parametrer'] = 'parametrer';
        typeBouton['rechercher'] = 'rechercher';
        typeBouton['filtrer'] = 'filtrer';
      })((typeBouton = ObjetListe.typeBouton || (ObjetListe.typeBouton = {})));
    })(ObjetListe || (exports.ObjetListe = ObjetListe = {}));
  },
  fn: '_objetliste.js',
});