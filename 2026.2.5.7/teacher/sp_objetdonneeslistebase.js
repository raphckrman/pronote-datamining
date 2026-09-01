IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDonneesListeBase = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    class ObjetDonneesListeBase {
      constructor(aDonnees) {
        this.estFlatDesign = false;
        this.mapPereFils = null;
        this.Donnees = !aDonnees
          ? new ObjetListeElements_1.ObjetListeElements()
          : aDonnees;
        this.enImpression = false;
        this.enConstruction_cacheRechercheTexte = false;
        this.options = {
          avecSelection: true,
          avecEvnt_Selection: false,
          avecEvnt_ModificationSelection: false,
          avecEvnt_SelectionClick: false,
          avecEvnt_SelectionDblClick: false,
          avecEvnt_Creation: false,
          avecEvnt_ApresCreation: false,
          avecEvnt_KeyPressListe: false,
          avecTimeoutEvent_KeyPressListe: true,
          avecEvnt_KeyUpListe: false,
          avecEvnt_Deploiement: false,
          avecMultiSelection: false,
          avecMultiSelectionSurCtrl: true,
          avecMultiSelectionSurShift: true,
          avecSelectionSurNavigationClavier: false,
          avecRechercheSelectionMiroir: false,
          avecDeselectionSurNonSelectionnable: true,
          avecDeselectionMonoSelectionClick: false,
          avecDeselectionMonoSelectionClickCtrl: false,
          avecTri: true,
          avecDeploiement: false,
          avecDeploiementSurColonne: true,
          avecImageSurColonneDeploiement: false,
          avecEventDeploiementSurCellule: true,
          indentationCelluleEnfant: 12,
          hauteurMinCellule: ObjetDonneesListeBase.hauteurMinCellule,
          hauteurMinContenuCellule: 0,
          avecLigneDraggable: false,
          avecLigneDroppable: false,
          dragNDropLigneInsertion: true,
          avecHtmlDetailsDraggableOver: true,
          getValeur: undefined,
          nonEditable: false,
          avecPereVisibleSurRechercheTexte: true,
          ignorerDeploiementSurRechercheTexte: true,
          racineCss: MethodesObjet_1.MethodesObjet.getObjectClass(this),
        };
        this.paramsListe = {
          liste: null,
          idWAILigneLue: '',
          versionMobile: false,
          getIdsColonnes: null,
          getParams: null,
          avecRechercheTexteEnCours: false,
          ouvrirMenuContextuel: null,
          jsxNodeDeploiementLigne: null,
          jsxGetModelCBLigneFlatDesign: null,
          jsxGetAttrCBLigneFlatDesign: null,
        };
      }
      setOptions(aOptions) {
        $.extend(this.options, aOptions);
        return this;
      }
      avecSelection(aParams) {
        return !!this.options.avecSelection;
      }
      avecDeselection(aParams) {
        return this.avecMultiSelection()
          ? true
          : !!(
              this.options.avecDeselectionMonoSelectionClickCtrl ||
              this.options.avecDeselectionMonoSelectionClick
            );
      }
      avecEdition(aParams) {
        return false;
      }
      avecTri() {
        return !!this.options.avecTri;
      }
      avecMenuContextuel(aParams) {
        return aParams.article && aParams.ligne >= 0
          ? this.options.avecContextMenuSansSelection ||
              this.avecSelection(aParams)
          : false;
      }
      avecDeploiement() {
        return !!this.options.avecDeploiement;
      }
      avecDeploiementSurColonne(aParams) {
        return !!this.options.avecDeploiementSurColonne;
      }
      avecImageSurColonneDeploiement(aParams) {
        return !!this.options.avecImageSurColonneDeploiement;
      }
      avecEventDeploiementSurCellule(aParams) {
        return !!this.options.avecEventDeploiementSurCellule;
      }
      surDeploiement(I, J, D) {
        D.estDeploye = !D.estDeploye;
      }
      avecEvenementSelection(aParams) {
        return !!this.options.avecEvnt_Selection;
      }
      avecEvenementSelectionClick(aParams) {
        return !!this.options.avecEvnt_SelectionClick;
      }
      avecEvenementSelectionDblClick(aParams) {
        return !!this.options.avecEvnt_SelectionDblClick;
      }
      avecEvenementCreation() {
        return !!this.options.avecEvnt_Creation;
      }
      avecEvenementDeploiement(aParams) {
        return !!this.options.avecEvnt_Deploiement;
      }
      avecEvenementApresCreation() {
        return !!this.options.avecEvnt_ApresCreation;
      }
      avecEvenementApresErreurCreation() {
        return false;
      }
      surSelectionLigne(aLigne, aDonnee, aSelectionner) {}
      surSelection(aColonne, aDonnee, aLigne, aSelectionner) {}
      avecSelecFile(aParams) {
        return false;
      }
      getOptionsSelecFile(aParams) {
        return null;
      }
      evenementSurSelecFile(aParams, aParamsSelecFile) {}
      avecLigneDraggable(aParams) {
        return !!this.options.avecLigneDraggable;
      }
      getLibelleDraggable(aParams) {
        return '';
      }
      getHtmlDetailsDraggableOver(aParams, aDataDrag) {
        if (!this.options.avecHtmlDetailsDraggableOver) {
          return '';
        }
        return (
          '<div class="draggable_details_Deplacer"></div><label>' +
          (this.options.dragNDropLigneInsertion
            ? GlossaireListe_1.TradGlossaireListe.ChangerRang
            : GlossaireListe_1.TradGlossaireListe.EchangerRang) +
          '</label>'
        );
      }
      avecLigneDroppable(aParams) {
        return !!this.options.avecLigneDroppable;
      }
      autoriserDeplacementElementSurLigne(
        aParamsLigneDestination,
        aParamsSource,
      ) {
        return !!(
          aParamsSource.instance &&
          aParamsLigneDestination.instance &&
          aParamsSource.instance.getNom() ===
            aParamsLigneDestination.instance.getNom() &&
          aParamsLigneDestination.article &&
          aParamsSource.article &&
          aParamsLigneDestination.ligne !== aParamsSource.ligne
        );
      }
      surDeplacementElementSurLigne(aParamsLigneDestination, aParamsSource) {
        return false;
      }
      getTri(aColonneDeTri, aGenreTri) {
        return null;
      }
      getVisible(aDonnee) {
        return true;
      }
      getValeur(aParams) {
        if (MethodesObjet_1.MethodesObjet.isFunction(this.options.getValeur)) {
          return this.options.getValeur(aParams);
        }
        return aParams.article ? aParams.article.getLibelle() : '';
      }
      getValeurPourTri(aColonne, aArticle) {
        return this.getValeur(
          this.paramsListe.getParams(aColonne, -1, {
            surTri: true,
            article: aArticle,
          }),
        );
      }
      getValeurPourAffichage(aParams) {
        return this.getValeur(aParams);
      }
      getTooltip(aParams) {
        return '';
      }
      getTypeValeur(aParams) {
        return ObjetDonneesListeBase.ETypeCellule.Texte;
      }
      getClassCelluleConteneur(aParams) {
        return '';
      }
      getClass(aParams) {
        return '';
      }
      getStyle(aParams) {
        return '';
      }
      getAriaHasPopup(aParams) {
        return false;
      }
      getAriaLabel(aParams) {
        return '';
      }
      avecMultiSelection() {
        return !!this.options.avecMultiSelection;
      }
      avecMultiSelectionSurCtrl() {
        return !!this.options.avecMultiSelectionSurCtrl;
      }
      avecMultiSelectionSurShift() {
        return !!this.options.avecMultiSelectionSurShift;
      }
      estSelectionCibleMiroirDeSelectionSource(
        aParamsCelluleSource,
        aParamsCelluleCible,
      ) {
        var _a, _b;
        return (
          !!((_a = aParamsCelluleSource.article) === null || _a === void 0
            ? void 0
            : _a.getNumero()) &&
          aParamsCelluleSource.article.getNumero() ===
            ((_b = aParamsCelluleCible.article) === null || _b === void 0
              ? void 0
              : _b.getNumero())
        );
      }
      executerEvenementMenuContextuelCreation(aParametres, aLigneData) {
        aParametres.liste.executerEvenementMenuContextuelCreation(aLigneData);
      }
      executerEvenementMenuContextuelEdition(aParametres) {
        aParametres.liste.executerEvenementMenuContextuelEdition(
          aParametres.colonne,
          aParametres.ligne,
        );
      }
      executerEvenementMenuContextuelSuppression(aParametres) {
        aParametres.liste.surSuppression();
      }
      remplirMenuContextuel(aParametres) {
        if (!aParametres.menuContextuel) {
          return false;
        }
        if (aParametres.surFondListe) {
          return false;
        }
        let lAvecCommandeActive = false;
        if (aParametres.avecCreation) {
          const lCommandeCreationActif = !aParametres.nonEditable;
          aParametres.menuContextuel.add(
            GlossaireListe_1.TradGlossaireListe.creer,
            lCommandeCreationActif,
            () => {
              this.executerEvenementMenuContextuelCreation(aParametres);
            },
          );
          if (lCommandeCreationActif) {
            lAvecCommandeActive = true;
          }
        }
        const lCommandeEditionActive =
          !aParametres.nonEditable &&
          (!aParametres.listeSelection ||
            aParametres.listeSelection.count() <= 1) &&
          this.avecEdition(aParametres);
        aParametres.menuContextuel.add(
          GlossaireListe_1.TradGlossaireListe.modifier,
          lCommandeEditionActive,
          () => {
            this.executerEvenementMenuContextuelEdition(aParametres);
          },
        );
        if (lCommandeEditionActive) {
          lAvecCommandeActive = true;
        }
        const lCommandeSuppressionActive =
          !aParametres.nonEditable &&
          aParametres &&
          aParametres.avecSuppression &&
          this._avecSuppression(aParametres);
        aParametres.menuContextuel.add(
          GlossaireListe_1.TradGlossaireListe.supprimer,
          lCommandeSuppressionActive,
          () => {
            this.executerEvenementMenuContextuelSuppression(aParametres);
          },
        );
        if (lCommandeSuppressionActive) {
          lAvecCommandeActive = true;
        }
        return lAvecCommandeActive;
      }
      initialisationObjetContextuel(aParametres) {
        if (!aParametres.menuContextuel) {
          return;
        }
        const lAvecCommandeActive = this.remplirMenuContextuel(aParametres);
        if (lAvecCommandeActive !== false) {
          aParametres.menuContextuel.afficher(aParametres.id);
        }
      }
      evenementMenuContextuel(aParametres) {}
      _avecSelection(aParams) {
        return this.avecSelection(aParams);
      }
      _avecDeselection(aParams) {
        return this.avecDeselection(aParams);
      }
      _avecSuppression(aParams) {
        return false;
      }
      _getVisible(aDonnee, aParams) {
        return this.getVisible(aDonnee);
      }
      _surSelectionLigne(aLigne, aSelectionner) {
        return this.surSelectionLigne(
          aLigne,
          this.Donnees.get(aLigne),
          aSelectionner,
        );
      }
      _surSelection(aColonne, aLigne, aSelectionner) {
        return this.surSelection(
          aColonne,
          this.Donnees.get(aLigne),
          aColonne,
          aSelectionner,
        );
      }
      estUnDeploiement(aParams) {
        return !!(
          aParams &&
          aParams.article &&
          aParams.article.estUnDeploiement
        );
      }
      estUnDeploiementValide(aParams) {
        return (
          this.estUnDeploiement(aParams) &&
          this.avecFilsVisibleDePere(aParams.article)
        );
      }
      _estDeploye(aLigne) {
        return this._articleDeploye(this.Donnees.get(aLigne));
      }
      getIndice(aDonnee) {
        for (let J = 0; J < this.getNbrLignes(); J++) {
          if (this.Donnees.get(J) === aDonnee) {
            return J;
          }
        }
        return -1;
      }
      _getContenuAffichage(aParams) {
        const lVal = this._getValeur(aParams);
        const lContenu = { valeur: '', tooltip: '' };
        if (MethodesObjet_1.MethodesObjet.isString(lVal)) {
          lContenu.valeur = lVal;
        } else if (
          lVal &&
          MethodesObjet_1.MethodesObjet.isObject(lVal) &&
          'libelle' in lVal
        ) {
          const lValFD = lVal;
          lContenu.valeur = lValFD.libelle;
          lContenu.idsLabel = lValFD.idsLabel;
        } else {
          lContenu.valeur = lVal;
        }
        if (!this.enImpression && !this.enConstruction_cacheRechercheTexte) {
          lContenu.tooltip = this.getTooltip(aParams) || '';
        }
        if (aParams.avecContenuTronque) {
          switch (aParams.typeValeur) {
            case ObjetDonneesListeBase.ETypeCellule.Texte:
            case ObjetDonneesListeBase.ETypeCellule.ZoneTexte: {
              const lChaineAffichage = this.getValeurPourAffichage(aParams);
              lContenu.valeur = lChaineAffichage;
              if (!this.enImpression && !lContenu.tooltip) {
                lContenu.attrOverflow = 'ie_ellipsis';
              }
            }
          }
        }
        lContenu.valeur = ObjetChaine_1.GChaine.avecEspaceSiVide(
          lContenu.valeur + '',
        );
        if (aParams.typeValeur !== ObjetDonneesListeBase.ETypeCellule.Html) {
          lContenu.valeur = lContenu.valeur
            .replace(/\r\n/g, '<br>')
            .replace(/\n/g, '<br>');
        }
        return lContenu;
      }
      getValeurPourParsing(aParams) {
        return this._getValeur(aParams);
      }
      getChaineDeDate(aDate, aParams) {
        return MethodesObjet_1.MethodesObjet.isDate(aDate)
          ? ObjetDate_1.GDate.formatDate(aDate, '%JJ/%MM/%AA')
          : '';
      }
      estVisible(aLigne, aParams) {
        return this._estDonneesVisible(this.Donnees.get(aLigne), aParams);
      }
      trier() {
        if (this.avecTri() && this.Donnees) {
          const lTri = this.getTri(undefined, undefined);
          if (lTri) {
            this.Donnees.setTri(lTri);
          }
          this.Donnees.trier();
        }
      }
      getNbrLignes() {
        return this.Donnees ? this.Donnees.count() : 0;
      }
      calculCacheListeFilsDirectsDePere() {
        this.mapPereFils = new Map();
        this.Donnees.parcourir((aArticle, aIndex) => {
          if (aArticle && this.mapPereFils) {
            if (!this.mapPereFils.has(aArticle)) {
              this.mapPereFils.set(aArticle, []);
            }
            if (aArticle.pere) {
              if (!this.mapPereFils.has(aArticle.pere)) {
                this.mapPereFils.set(aArticle.pere, []);
              }
              let lParamsFils = this.mapPereFils.get(aArticle.pere);
              lParamsFils.push({ ligne: aIndex, article: aArticle });
            }
          }
        });
      }
      avecFilsVisibleDePere(aArticlePere) {
        return this._getArrayFilsVisiblesDePere(aArticlePere, true).length > 0;
      }
      getArrayFilsVisiblesDePere(aArticlePere) {
        return this._getArrayFilsVisiblesDePere(aArticlePere, false);
      }
      _getArrayFilsVisiblesDePere(aArticlePere, aArretSurPremierFils) {
        let lResult;
        if (aArticlePere) {
          if (!this.mapPereFils) {
            this.calculCacheListeFilsDirectsDePere();
          }
          const lResultTous = this.mapPereFils.get(aArticlePere);
          if (lResultTous) {
            lResult = [];
            lResultTous.every((aFils) => {
              if (this._getVisible(aFils.article)) {
                lResult.push(aFils);
                if (aArretSurPremierFils) {
                  return false;
                }
              }
              return true;
            });
            return lResult;
          }
        }
        lResult = [];
        this.Donnees.parcourir((aArticle, aIndex) => {
          if (
            ((!aArticlePere && !aArticle.pere) ||
              aArticle.pere === aArticlePere) &&
            this._getVisible(aArticle)
          ) {
            lResult.push({ article: this.Donnees.get(aIndex), ligne: aIndex });
            if (aArretSurPremierFils) {
              return false;
            }
          }
        });
        return lResult;
      }
      _getEtatCocheSimple(aParams) {
        return this._getValeur(aParams);
      }
      getEtatCocheSelonFils(
        aElementPere,
        aParams,
        aMethodeAvecEdition,
        aPourCocheTout,
      ) {
        if (
          aElementPere &&
          (!aElementPere.estUnDeploiement ||
            !this.estCocheSelonFilsSurLigneDeploiement(aElementPere))
        ) {
          return this._getEtatCocheSimple(aParams);
        }
        let lEtat = ObjetDonneesListeBase.EGenreCoche.Aucune,
          lInit = false;
        let lArrayParcours = [];
        if (aPourCocheTout) {
          this.Donnees.parcourir((aArticle, aIndex) => {
            if (this._getVisible(aArticle)) {
              lArrayParcours.push({ article: aArticle, ligne: aIndex });
            }
          });
        } else {
          lArrayParcours = this.getArrayFilsVisiblesDePere(aElementPere);
        }
        lArrayParcours.every((aElementParcours) => {
          const lParams = Object.assign({}, aParams, aElementParcours, {
            pourCocheTout: !!aPourCocheTout,
          });
          if (
            (aMethodeAvecEdition &&
              MethodesObjet_1.MethodesObjet.isFunction(aMethodeAvecEdition) &&
              aMethodeAvecEdition(lParams)) ||
            this.avecEdition(lParams)
          ) {
            if (this.estCocheSelonFilsSurLigneDeploiement(lParams.article)) {
              const lEtatFils = this.getEtatCocheSelonFils(
                lParams.article,
                lParams,
                aMethodeAvecEdition,
              );
              if (
                lEtatFils === ObjetDonneesListeBase.EGenreCoche.Verte &&
                lEtat === ObjetDonneesListeBase.EGenreCoche.Aucune
              ) {
                lEtat = lInit
                  ? ObjetDonneesListeBase.EGenreCoche.Grise
                  : ObjetDonneesListeBase.EGenreCoche.Verte;
              } else if (
                lEtatFils === ObjetDonneesListeBase.EGenreCoche.Grise
              ) {
                lEtat = ObjetDonneesListeBase.EGenreCoche.Grise;
              } else if (
                lEtatFils === ObjetDonneesListeBase.EGenreCoche.Aucune &&
                lEtat === ObjetDonneesListeBase.EGenreCoche.Verte
              ) {
                lEtat = ObjetDonneesListeBase.EGenreCoche.Grise;
              }
            } else {
              const lValeur = this._getEtatCocheSimple(lParams);
              if (
                (!lValeur ||
                  lValeur === ObjetDonneesListeBase.EGenreCoche.Aucune) &&
                lEtat === ObjetDonneesListeBase.EGenreCoche.Verte
              ) {
                lEtat = ObjetDonneesListeBase.EGenreCoche.Grise;
              }
              if (
                (lValeur === true ||
                  lValeur === ObjetDonneesListeBase.EGenreCoche.Verte) &&
                lEtat === ObjetDonneesListeBase.EGenreCoche.Aucune
              ) {
                lEtat = lInit
                  ? ObjetDonneesListeBase.EGenreCoche.Grise
                  : ObjetDonneesListeBase.EGenreCoche.Verte;
              }
            }
            if (lEtat === ObjetDonneesListeBase.EGenreCoche.Grise) {
              return false;
            }
            lInit = true;
          }
          return true;
        });
        return lEtat;
      }
      estCocheSelonFilsSurLigneDeploiement(aArticle) {
        return true;
      }
      rechercheTexteForcerLignePrecSuivVisible(
        aParamsLigneVisible,
        aParamsLignePrecSuivCachee,
      ) {
        return false;
      }
      getId(aNumeroColonne) {
        return this.paramsListe.getIdsColonnes()[aNumeroColonne];
      }
      getNumeroColonneDId(aId) {
        return this.paramsListe.getIdsColonnes().indexOf(aId);
      }
      avecSurvolCelluleVisible(aParams) {
        return this._avecSelection(aParams);
      }
      estConcerneParSurvolCelluleVisible(aParams, aParamsCelluleHover) {
        if (aParams.ligne >= 0 && aParams.ligne === aParamsCelluleHover.ligne) {
          return true;
        }
        return false;
      }
      avecDessinHover(aParams) {
        return false;
      }
      estConcerneParDessinHover(aParams, aParamsCelluleHover) {
        return false;
      }
      construireHtmlHover(aParams) {
        var _a, _b;
        if (!aParams.node) {
          return '';
        }
        const H = [];
        const lHeight = 22;
        const lWidthCorpsFleche = 10;
        const lWidthPointeFleche = 11;
        const lHeightCorpsFleche = 10;
        const lWidth = lWidthCorpsFleche + lWidthPointeFleche;
        const lCouleurBord = 'white';
        const lCouleur = (0, AccessApp_1.getApp)().getCouleur().selection.fond;
        let lStyle = '';
        switch (aParams.direction) {
          case ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.droite:
          case ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.gauche:
            lStyle +=
              'top:' +
              Math.round(($(aParams.node).height() || 0) / 2 - lHeight / 2) +
              'px;';
            break;
          case ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.haut:
            lStyle += 'top:0px;';
            break;
          case ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.bas:
            lStyle += 'bottom:0px;';
            break;
        }
        switch (aParams.direction) {
          case ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.droite:
            lStyle += 'left: -' + (lWidth + 1) + 'px;';
            break;
          case ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.gauche:
            lStyle += 'right: -' + (lWidth + 1) + 'px;';
            break;
          case ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.haut:
          case ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.bas:
            lStyle +=
              'left:' +
              Math.round(($(aParams.node).width() || 0) / 2 - lWidth / 2) +
              'px;';
            break;
        }
        H.push(
          '<div class="',
          (_a = aParams.classHover) !== null && _a !== void 0 ? _a : '',
          ' dessinHoverListe_',
          (_b = aParams.direction) !== null && _b !== void 0 ? _b : '',
          '" style="',
          lStyle,
          '">',
        );
        H.push(
          '<svg xmlns="http://www.w3.org/2000/svg" width="',
          lWidth + 1,
          '" height="',
          lHeight + 1,
          '">',
          ObjetChaine_1.GChaine.format(
            '<line x1="0" y1="%0:s" x2="%1:s" y2="%0:s" stroke="%3:s" stroke-width="%2:s" />',
            [lHeight / 2, lWidthCorpsFleche, lHeightCorpsFleche, lCouleurBord],
          ),
          ObjetChaine_1.GChaine.format(
            '<polygon points="%2:s 0, %3:s %1:s, %2:s %0:s" fill="%4:s" stroke-width="1" stroke="%5:s"/>',
            [
              lHeight,
              lHeight / 2,
              lWidthCorpsFleche,
              lWidth,
              lCouleur,
              lCouleurBord,
            ],
          ),
          ObjetChaine_1.GChaine.format(
            '<line x1="1" y1="%0:s" x2="%1:s" y2="%0:s" stroke="%3:s" stroke-width="%2:s" />',
            [
              lHeight / 2,
              lWidthCorpsFleche + 1,
              lHeightCorpsFleche - 2,
              lCouleur,
            ],
          ),
          '</svg>',
        );
        H.push('</div>');
        if (
          aParams.direction ===
            ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.droite ||
          aParams.direction ===
            ObjetDonneesListeBase.TypeDirectionElementSurvolCellule.gauche
        ) {
          H.push(
            '<div class="' +
              aParams.classHover +
              ' dessinHoverListe_cadre"></div>',
          );
        }
        return H.join('');
      }
      estCelluleCopie(aParams) {
        return false;
      }
      surCopier(aParams) {
        return false;
      }
      surColler(aParams) {
        return false;
      }
      getHauteurMinCellule(aParams) {
        return this.options.hauteurMinCellule || 0;
      }
      getHauteurMinContenuCellule(aParams) {
        return this.options.hauteurMinContenuCellule || 0;
      }
      _getClassCelluleConteneur(aParams) {
        return this.getClassCelluleConteneur(aParams) || '';
      }
      _setParamsListe(aParams) {
        Object.assign(this.paramsListe, aParams);
        return this;
      }
      actualiserListe(aParamsActualiser) {
        this.paramsListe.actualiserListe(aParamsActualiser);
      }
      _estDonneesVisible(aDonnees, aParams) {
        if (!aDonnees) {
          return false;
        }
        if (
          aDonnees.pere &&
          this.avecDeploiement() &&
          (this._articleDeploye(aDonnees.pere) === false ||
            !this._estDonneesVisible(aDonnees.pere))
        ) {
          return false;
        }
        if (
          aDonnees.getEtat() === Enumere_Etat_1.EGenreEtat.Suppression ||
          !this._getVisible(aDonnees, aParams)
        ) {
          return false;
        }
        return true;
      }
      _articleDeploye(aArticle) {
        if (
          this.options.ignorerDeploiementSurRechercheTexte &&
          (this.enConstruction_cacheRechercheTexte ||
            this.paramsListe.avecRechercheTexteEnCours)
        ) {
          return true;
        }
        return !!(aArticle && aArticle.estDeploye !== false);
      }
    }
    exports.ObjetDonneesListeBase = ObjetDonneesListeBase;
    ObjetDonneesListeBase.hauteurMinCellule = 40;
    ObjetDonneesListeBase.EGenreCoche = {
      Verte: true,
      Grise: null,
      Aucune: false,
    };
    (function (ObjetDonneesListeBase) {
      let TypeDirectionElementSurvolCellule;
      (function (TypeDirectionElementSurvolCellule) {
        TypeDirectionElementSurvolCellule['haut'] = 'haut';
        TypeDirectionElementSurvolCellule['bas'] = 'bas';
        TypeDirectionElementSurvolCellule['gauche'] = 'gauche';
        TypeDirectionElementSurvolCellule['droite'] = 'droite';
      })(
        (TypeDirectionElementSurvolCellule =
          ObjetDonneesListeBase.TypeDirectionElementSurvolCellule ||
          (ObjetDonneesListeBase.TypeDirectionElementSurvolCellule = {})),
      );
      let ETypeCellule;
      (function (ETypeCellule) {
        ETypeCellule[(ETypeCellule['Texte'] = 0)] = 'Texte';
        ETypeCellule[(ETypeCellule['ZoneTexte'] = 1)] = 'ZoneTexte';
        ETypeCellule[(ETypeCellule['Html'] = 2)] = 'Html';
        ETypeCellule[(ETypeCellule['Date'] = 3)] = 'Date';
        ETypeCellule[(ETypeCellule['Note'] = 4)] = 'Note';
        ETypeCellule[(ETypeCellule['Coche'] = 5)] = 'Coche';
        ETypeCellule[(ETypeCellule['CocheDeploiement'] = 6)] =
          'CocheDeploiement';
        ETypeCellule[(ETypeCellule['Image'] = 7)] = 'Image';
        ETypeCellule[(ETypeCellule['Icon'] = 8)] = 'Icon';
        ETypeCellule[(ETypeCellule['DateCalendrier'] = 9)] = 'DateCalendrier';
        ETypeCellule[(ETypeCellule['HeureMinute'] = 10)] = 'HeureMinute';
      })(
        (ETypeCellule =
          ObjetDonneesListeBase.ETypeCellule ||
          (ObjetDonneesListeBase.ETypeCellule = {})),
      );
    })(
      ObjetDonneesListeBase ||
        (exports.ObjetDonneesListeBase = ObjetDonneesListeBase = {}),
    );
  },
  fn: 'objetdonneeslistebase.js',
});