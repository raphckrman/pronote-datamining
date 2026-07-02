IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.NSListe = exports.ObjetListe = void 0;
    const ObjetListeEspaceMobile_css_1 = require('@cp/Produit/Css/ObjetListeEspaceMobile.css');
    const ObjetListe_Mobile_css_1 = require('@cp/Mobile/Css/ObjetListe_Mobile.css');
    const ObjetListe_Desktop_css_1 = require('@cp/Espace/Css/ObjetListe_Desktop.css');
    require('@librairies/Declaration/DeclarationJQuery');
    const TypeFusionTitreListe_1 = require('@cp/script/Enumere/TypeFusionTitreListe');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const _ObjetCouleur_1 = require('@cp/script/_ObjetCouleur');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_EvenementListe_1 = require('@cp/script/Enumere/Enumere_EvenementListe');
    const Enumere_TriElement_1 = require('@cp/script/Enumere/Enumere_TriElement');
    require('@cp/Produit/Script/IEHtml.SelecFile');
    require('@cp/Produit/Script/IEHtml.TextareaMax');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const ObjetDonneesListe_1 = require('@cp/script/ObjetDonneesListe');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const ComparateurChaines_1 = require('@cp/script/ComparateurChaines');
    const ObjetMenuContextuel_1 = require('@cp/Produit/Script/ObjetMenuContextuel');
    const RechercheTexte_1 = require('@cp/Produit/Script/RechercheTexte');
    const ObjetDonneesListeFlatDesign_1 = require('@cp/script/ObjetDonneesListeFlatDesign');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetDonneesListeBase_1 = require('@cp/script/ObjetDonneesListeBase');
    const jsx_1 = require('@librairies/script/Outils/jsx');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const ObjetDonneesListeFlatDesign_css_1 = require('@cp/script/css/ObjetDonneesListeFlatDesign.css');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const GlossaireWAI_1 = require('@cp/script/GlossaireWAI');
    const Tooltip_1 = require('@cp/Produit/Script/Tooltip');
    const Tooltip_module_css_1 = require('@cp/Produit/Css/Tooltip.module.css');
    const IEHtml_InputNote_1 = require('@cp/Produit/Script/IEHtml.InputNote');
    const IEHtml_TextareaMax_1 = require('@cp/Produit/Script/IEHtml.TextareaMax');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const ObjetFiltre_1 = require('@cp/Produit/Script/ObjetFiltre');
    const IconeSvgSearch_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgSearch');
    const IconeSvgWrench_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgWrench');
    const IconeSvgTrash_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTrash');
    const IconeSvgPencil_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPencil');
    const IconeSvgFleche_num_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFleche_num');
    const IconeSvgChevron_up_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgChevron_up');
    const IconeSvgChevron_down_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgChevron_down');
    const ObjetFenetre_Date_1 = require('@cp/script/ObjetsGraphiques/Fenetre/ObjetFenetre_Date');
    const ObjetScroll_1 = require('@cp/script/ObjetsGraphiques/ObjetScroll');
    const ObjetFenetre_ParametrageColonnesListe_1 = require('@cp/script/ObjetFenetre_ParametrageColonnesListe');
    const ExportBlob_1 = require('@cp/script/ExportBlob');
    const ObjetSupport_1 = require('@cp/script/ObjetSupport');
    const IconeSvgCopier_liste_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCopier_liste');
    const IEHtml_Ripple_1 = require('@cp/Produit/Script/IEHtml.Ripple');
    const IconeSvgPlus_fin_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPlus_fin');
    const IEHtmlComposants_1 = require('@cp/Produit/Script/IEHtmlComposants');
    const GestionnaireStickyScroll_1 = require('@cp/Produit/Script/GestionnaireStickyScroll');
    const IconeSvgCheck_fin_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCheck_fin');
    const IEHtml_BtnImage_css_1 = require('@cp/Produit/Css/IEHtml.BtnImage.css');
    const IconeSvgFleche_num_bas_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFleche_num_bas');
    const _CONST_largeurMinColonne = 10;
    const _CONST_hauteurImageTri = 4;
    var EGenreZoneScroll;
    (function (EGenreZoneScroll) {
      EGenreZoneScroll[(EGenreZoneScroll['contenu'] = 1)] = 'contenu';
      EGenreZoneScroll[(EGenreZoneScroll['titre'] = 2)] = 'titre';
      EGenreZoneScroll[(EGenreZoneScroll['tri'] = 3)] = 'tri';
      EGenreZoneScroll[(EGenreZoneScroll['total'] = 4)] = 'total';
      EGenreZoneScroll[(EGenreZoneScroll['contenuFixe'] = 5)] = 'contenuFixe';
      EGenreZoneScroll[(EGenreZoneScroll['titreFixe'] = 6)] = 'titreFixe';
      EGenreZoneScroll[(EGenreZoneScroll['triFixe'] = 7)] = 'triFixe';
      EGenreZoneScroll[(EGenreZoneScroll['totalFixe'] = 8)] = 'totalFixe';
      EGenreZoneScroll[(EGenreZoneScroll['contenuFixeFin'] = 9)] =
        'contenuFixeFin';
      EGenreZoneScroll[(EGenreZoneScroll['titreFixeFin'] = 10)] =
        'titreFixeFin';
      EGenreZoneScroll[(EGenreZoneScroll['triFixeFin'] = 11)] = 'triFixeFin';
      EGenreZoneScroll[(EGenreZoneScroll['totalFixeFin'] = 12)] =
        'totalFixeFin';
    })(EGenreZoneScroll || (EGenreZoneScroll = {}));
    let uParseur = '',
      uTimerParseur = null;
    class ObjetListe extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
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
          WAICelluleEditable: this.Nom + '_celEdit',
          btnCreation: `${this.Nom}_btnCreation`,
          btnFiltre: `${this.Nom}_btnFiltre`,
          WAIGrid: `${this.Nom}_waiGrid`,
          WAILigneLue: `${this.Nom}_waiLigneLue`,
          WAILignesContenu: `${this.Nom}_wailignes_cont`,
          WAILabelListe: `${this.Nom}_labelListe`,
          WAIToolbar: `${this.Nom}_toolbar`,
          WAIFiltre: `${this.Nom}_filtre`,
        };
        this.estMobile = !!IE.estMobile;
        this.idZoneActua = '';
        this._init();
        if (this.estMobile) {
          this.ids.zoneFils = this.idZone;
          this.IdPremierElement = this.idZone;
          this.idZoneActua = `${this.Nom}_contenu_int`;
        } else {
          this.IdPremierElement = this.getIdGridFocus(0);
        }
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
          avecBoutonCreation: false,
          listeCreations: [],
          titreCreation: GlossaireListe_1.TradGlossaireListe.nouveau,
          btnCreationEnBtnIcone: false,
          tooltipDescribeBoutonCreation: '',
          svgIconeTitreCreation: false,
          ariaHasPopupBtnCreation: 'dialog',
          avecCBToutCocher: false,
          avecToutSelectionner: true,
          nonEditable: false,
          nonEditableSurModeExclusif: false,
          AvecSuppression: true,
          ariaDescribedBy: '',
          parsingSurColonne: -1,
          scrollHorizontal: false,
          scrollHorizontalSurLargeurComplete: true,
          colonnesTriables: false,
          numeroColonneTriDefaut: undefined,
          evenementSurTri: null,
          boutons: [],
          tailleBoutons: 17,
          positionBoutons: NSListe.positionBoutons.entete,
          avecBoutonRechercheParDefautHorsFlatDesignMinimal: true,
          avecCreationEnLigneDesignClassique: false,
          skin: ObjetListe.skin.classique,
          avecListeNeutre: undefined,
          couleursListe: (0, AccessApp_1.getApp)().getCouleur().liste,
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
            ObjetDonneesListeBase_1.ObjetDonneesListeBase.hauteurMinCellule,
          widthTri: 14,
          heightTri: 8,
          avecRollover: true,
          hauteurZoneContenuListeMin:
            ObjetDonneesListeBase_1.ObjetDonneesListeBase.hauteurMinCellule,
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
            (0, AccessApp_1.getApp)().getCouleur().blanc,
            (0, AccessApp_1.getApp)().getCouleur().noir,
          ),
          couleurAlternance1: new _ObjetCouleur_1.ObjectCouleurCellule(
            (0, AccessApp_1.getApp)().getCouleur().fond,
            (0, AccessApp_1.getApp)().getCouleur().noir,
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
        if (this.estMobile) {
          Object.assign(this._options, {
            nonEditable: true,
            forcerScrollV_mobile: null,
            avecCelluleEditableTriangle: true,
            avecCocheCheckBox: false,
            paddingCelluleLR: 0,
            paddingCelluleTB: 0,
            estBoutonCreationPiedFlottant_mobile: true,
          });
        }
        return this;
      }
      setOptionsListe(aOptions, aAvecActualisation) {
        return this._setOptionsListe(aOptions, aAvecActualisation);
      }
      getOptionsListe() {
        return this._options;
      }
      getDonneesListe() {
        return this.Donnees;
      }
      setDonnees(ADonnees, aLigneSelectionne, aParams) {
        return this._setDonnees(
          ADonnees !== null && ADonnees !== void 0 ? ADonnees : undefined,
          aLigneSelectionne,
          aParams,
        );
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
      getListeArticlesVisibles() {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        if (this._cache.lignesVisibles) {
          this._cache.lignesVisibles.forEach((aLigneDonnees) => {
            const lElement = this.getArticleDeLigne(aLigneDonnees);
            if (lElement) {
              lListe.addElement(lElement);
            }
          });
        }
        return lListe;
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
        const lDonneesFlatD = this.estDonneeListeFlatDesign(this.Donnees)
          ? this.Donnees
          : null;
        if (lDonneesFlatD) {
          this.getListeArticles().parcourir((aArticle, aIndex) => {
            const lParams = this._getParamsCellule(-1, aIndex);
            if (
              lDonneesFlatD._getVisible(aArticle) &&
              lDonneesFlatD.avecCB(lParams) &&
              lDonneesFlatD.getValueCB(lParams)
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
      setCreationLigneEnFenetre(aNumeroLigne) {
        if (
          aNumeroLigne < 0 ||
          !MethodesObjet_1.MethodesObjet.isNumber(aNumeroLigne)
        ) {
          return;
        }
        this._cache.numeroLigneCreationDynamique = aNumeroLigne;
        this.surCreationDeb(false, {
          creationEnFenetre: true,
          numeroLigneCreation: aNumeroLigne,
        });
      }
      surSuppression() {
        return this._surSuppression();
      }
      getIdCellule(aColonne, aLigne, aPourFocus, aPourWAI) {
        const lTab = [
          this.Nom,
          aColonne !== null && aColonne !== void 0 ? aColonne : '__',
        ];
        if (aLigne !== null && aLigne !== undefined) {
          lTab.push(aLigne);
        }
        if (aPourFocus) {
          lTab.push('div');
        }
        if (aPourWAI) {
          lTab.push('wai');
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
        var _a;
        return (
          ((_a = this._cache.rechercheTexte) === null || _a === void 0
            ? void 0
            : _a.saisie) || ''
        );
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
        return this._composeImpression(aProportion);
      }
      _gererModificationsColonnes() {
        this._cache.listeCorrespondancesColonnes = [];
        if (!this._options.gestionModificationColonnes) {
          this._cache.colonnes.listeTailles.forEach((a, aIndex) => {
            this._cache.listeCorrespondancesColonnes[aIndex] = aIndex;
          });
          return;
        }
        if (
          !MethodesObjet_1.MethodesObjet.isFunction(
            this._options.gestionModificationColonnes.getColonnes,
          ) ||
          !Array.isArray(this._options.colonnes)
        ) {
          return;
        }
        this._cache.parametrageColonnes =
          this._options.gestionModificationColonnes.getColonnes();
        if (
          !this._cache.parametrageColonnes ||
          !this._cache.parametrageColonnes.length
        ) {
          this._cache.parametrageColonnes = [];
          this._cache.colonnes.listeIds.forEach((aId) => {
            this._cache.parametrageColonnes.push({ id: aId });
          });
        }
        const lOriginalIds = [];
        this._options.colonnes.forEach((aCol, aIndex) => {
          this._cache.listeCorrespondancesColonnes[aIndex] = -1;
          lOriginalIds.push(aCol.id);
        });
        this._cache.colonnes.listeIds = [];
        this._cache.colonnes.listeTailles = [];
        this._cache.declarationsColonnes = [];
        this._cache.parametrageColonnes.forEach((aColonne) => {
          if (!aColonne) {
            return;
          }
          const lId = aColonne.id;
          const lDecl = this._cache.declColonnesByIds[lId];
          if (!lDecl) {
            return;
          }
          if (aColonne.visible === false) {
            return;
          }
          this._cache.declarationsColonnes.push(lDecl);
          const lNumeroColonne = this._cache.declarationsColonnes.length - 1;
          this._cache.colonnes.listeIds[lNumeroColonne] = lDecl.id;
          this._cache.colonnes.listeTailles[lNumeroColonne] = lDecl.taille || 0;
          this._cache.listeCorrespondancesColonnes[
            lOriginalIds.indexOf(lDecl.id)
          ] = lNumeroColonne;
        });
        if (
          this._cache.declarationsColonnes.length === 0 &&
          this._options.colonnes &&
          this._options.colonnes.length > 0
        ) {
          IE.log.addLog('Aucune colonne visible dans le parametrage');
          const lDecl =
            this._cache.declColonnesByIds[this._options.colonnes[0]];
          this._cache.declarationsColonnes.push(lDecl);
          this._cache.colonnes.listeIds[0] = lDecl.id;
          this._cache.colonnes.listeTailles[0] = lDecl.taille || 0;
          this._cache.listeCorrespondancesColonnes[0] = 0;
        }
      }
      _backupScroll(aParams) {
        if (this.estMobile) {
          let lHeightEnteteARetirer =
            GestionnaireStickyScroll_1.GestionnaireStickyScroll.getBottomSousStickyTop(
              document.querySelector(`#${this.Nom.escapeJQ()}`),
            );
          let lGetterScroll = () => {
            return ObjetHtml_1.GHtml.getParentScrollable(this.Nom);
          };
          let lScroll = lGetterScroll();
          const lScrollTrouve = ObjetHtml_1.GHtml.getParentScrollable(lScroll);
          if (lScrollTrouve) {
            return {
              elementScrollV: lScrollTrouve,
              getterScroll:
                lScroll === lScrollTrouve ? lGetterScroll : undefined,
              scrollTop: aParams.conserverPositionScroll
                ? lScrollTrouve.scrollTop
                : 0,
              heightEnteteSticky: lHeightEnteteARetirer,
            };
          }
          return null;
        }
        if (
          !aParams.conserverPositionScroll ||
          !this.ScrollH ||
          !this.ScrollV
        ) {
          return { scrollTop: 0, scrollLeft: 0, heightEnteteSticky: 0 };
        }
        let lScrollTop = 0;
        let lScrollLeft = 0;
        if (this._cache.avecScrollHorizontal) {
          lScrollLeft = $(
            '#' + this.ScrollH.getIdZone(EGenreZoneScroll.contenu).escapeJQ(),
          ).scrollLeft();
        }
        if (this.ScrollV.avecScrollVisible()) {
          lScrollTop = ObjetPosition_1.GPosition.getScrollTop(
            this.ScrollV.getIdZone(EGenreZoneScroll.contenu),
          );
        } else {
          const lElementScroll = ObjetHtml_1.GHtml.getParentScrollable(
            this.Nom,
          );
          if (lElementScroll) {
            return {
              elementScrollV: lElementScroll,
              scrollTop: lElementScroll.scrollTop,
              scrollLeft: lScrollLeft,
              heightEnteteSticky: 0,
            };
          }
        }
        return {
          elementScrollV: ObjetHtml_1.GHtml.getElement(
            this.ScrollV.getIdZone(EGenreZoneScroll.contenu),
          ),
          estObjetScroll: true,
          scrollTop: lScrollTop,
          scrollLeft: lScrollLeft,
          heightEnteteSticky: 0,
        };
      }
      _setScroll(aBackupScroll, aSurResizeHeightContenu) {
        if (this.estMobile) {
          if (aBackupScroll && aBackupScroll.elementScrollV) {
            let lElement = aBackupScroll.elementScrollV;
            if (aBackupScroll.getterScroll) {
              lElement = aBackupScroll.getterScroll() || lElement;
            }
            if (lElement) {
              lElement.scrollTop = aBackupScroll.scrollTop;
            }
          }
          return;
        }
        if (!this.ScrollV || !this.ScrollH) {
          return;
        }
        let lUniquementActualisationHeightContenu = false;
        if (aSurResizeHeightContenu) {
          lUniquementActualisationHeightContenu =
            this.ScrollV.surModificationHeightContenu();
        }
        if (!lUniquementActualisationHeightContenu) {
          this.ScrollV.setDonnees(
            EGenreZoneScroll.contenu,
            EGenreZoneScroll.contenuFixe,
            EGenreZoneScroll.contenuFixeFin,
          );
          if (this._cache.avecScrollHorizontal) {
            this.ScrollH.setDonnees(
              EGenreZoneScroll.contenu,
              EGenreZoneScroll.titre,
              EGenreZoneScroll.tri,
              EGenreZoneScroll.total,
            );
          } else {
            this.ScrollH.setDonnees(null);
          }
          if (aBackupScroll) {
            if (aBackupScroll.elementScrollV && !aBackupScroll.estObjetScroll) {
              aBackupScroll.elementScrollV.scrollTop = aBackupScroll.scrollTop;
            } else {
              this.ScrollV.scrollTo(aBackupScroll.scrollTop);
            }
            if (this._cache.avecScrollHorizontal) {
              this.ScrollH.scrollTo(aBackupScroll.scrollLeft);
            }
          }
        }
        if (this._options.skin === ObjetListe.skin.flatDesign) {
          const lClassesOmbre = [];
          if (!this._cache.ombreTopForce) {
            lClassesOmbre.push('ombre-top');
          }
          if (!this._options.forcerOmbreScrollBottom) {
            lClassesOmbre.push('ombre-bottom');
          }
          if (lClassesOmbre.length > 0) {
            if (this.ScrollV.avecScrollVisible()) {
              $(`#${this.idZone.escapeJQ()}`).addClass(lClassesOmbre.join(' '));
            } else {
              $(`#${this.idZone.escapeJQ()}`).removeClass(
                lClassesOmbre.join(' '),
              );
            }
          }
        }
        this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
          var _a;
          const lJContenu = $(
            `#${(_a = this.ScrollV) === null || _a === void 0 ? void 0 : _a.getIdContenu(aInfosZoneColonnes.idScrollContenu).escapeJQ()}`,
          );
          const lJOmbres = $(
            `#${(this.ids.contenu + aInfosZoneColonnes.indiceBloc).escapeJQ()} > div.conteneur-ombre-zone > div.ombre`,
          );
          if (lJOmbres.length > 0 && lJContenu.length === 1) {
            lJOmbres.height(lJContenu.height()).css({ bottom: 'auto' });
          }
        });
      }
      _construireContenuRange(aInfosColonnes, aIndiceRange) {
        if (this.estMobile) {
          return this.construireContenuRangeMobile(
            aInfosColonnes,
            aIndiceRange,
          );
        }
        return this.construireContenuListeInterneLignes(
          aInfosColonnes,
          aIndiceRange,
        );
      }
      construireContenuRangeMobile(aInfosColonnes, aIndiceRange) {
        const H = [];
        const lNbColonnesVisibles = aInfosColonnes.colonnesVisibles.length;
        const lRoleGrid = this._estRoleTreeGrid();
        const lNumeroLignesEntete =
          (this._cache.structureWAI.titres.length || 0) +
          (this.avecTriColonne() ? 1 : 0) +
          (this._avecLigneCreationTitreEnLigne() ? 1 : 0);
        const lClasseRange = this._cache.refresh
          .avecConstructionDynamiqueContenu
          ? this._getClassRange(aIndiceRange)
          : '';
        let lRangeLignes;
        if (this._cache.refresh.avecConstructionDynamiqueContenu) {
          lRangeLignes = {
            debut: this._cache.refresh.structure[aIndiceRange].deb,
            fin: this._cache.refresh.structure[aIndiceRange].fin + 1,
          };
        } else {
          lRangeLignes = { debut: 0, fin: this._cache.lignesVisibles.length };
        }
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        const lDonneesFlatDesign = this.estDonneeListeFlatDesign(this.Donnees)
          ? this.Donnees
          : null;
        for (
          let lIndiceLigne = lRangeLignes.debut;
          lIndiceLigne < lRangeLignes.fin;
          lIndiceLigne++
        ) {
          const lNumeroLigne = this._cache.lignesVisibles[lIndiceLigne];
          if (
            (lIndiceLigne > 0 || aIndiceRange > 0) &&
            !this.Donnees.enConstruction_cacheRechercheTexte &&
            lNbColonnesVisibles === 1 &&
            lDonneesFlatDesign &&
            lDonneesFlatDesign.avecSeparateurLigneHautFlatdesign &&
            lDonneesFlatDesign.avecSeparateurLigneHautFlatdesign(
              this._getParamsCellule(-1, lNumeroLigne),
              this._getParamsCellule(-1, lNumeroLigne - 1),
            )
          ) {
            H.push(
              IE.jsx.str('hr', {
                class: [
                  ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                    .liste_sepligne,
                  lClasseRange,
                ],
                role: 'presentation',
              }),
            );
          }
          aInfosColonnes.colonnesVisibles.forEach((aNumeroColonne, aIndex) => {
            const lEstDerniereColonne = aIndex + 1 >= lNbColonnesVisibles;
            const lParamsCellule = this._getParamsCellule(
              aNumeroColonne,
              lNumeroLigne,
            );
            const lTypeValeur = this.Donnees.getTypeValeur(lParamsCellule);
            const lTaille = this._cache.taillesColonne[aNumeroColonne];
            const lClasses = [];
            let lCelluleSelectionnee = false;
            if (
              !this.Donnees.enConstruction_cacheRechercheTexte &&
              this.Donnees._avecSelection(lParamsCellule)
            ) {
              lCelluleSelectionnee = this._etatSelectionCellule({
                ligne: lNumeroLigne,
                colonne: aNumeroColonne,
              });
              lClasses.push(IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple);
            }
            Object.assign(lParamsCellule, {
              k: 0,
              surEdition: false,
              typeValeur: lTypeValeur,
              taille: lTaille.px,
            });
            lClasses.push(
              'collection-item',
              'liste_celluleGrid_' + (lIndiceLigne + 1),
              this._getClassCouleurCelluleMobile(lParamsCellule) || '',
              lCelluleSelectionnee ? 'selected' : '',
              lClasseRange,
            );
            if (
              !lEstDerniereColonne &&
              !(lDonneesTableau === null || lDonneesTableau === void 0
                ? void 0
                : lDonneesTableau.avecBordureDroite(lParamsCellule))
            ) {
              lClasses.push('liste_sansBordureD');
            }
            const lId = this.getIdCellule(aNumeroColonne, lNumeroLigne);
            if (lRoleGrid) {
              const lRowIndex = lNumeroLignesEntete + aIndex + 1;
              const lAddLigneWAI = (aLigne, aRowIndex, aColonne, aId) => {
                if (!this._cache.structureWAI.lignes[aLigne]) {
                  this._cache.structureWAI.lignes[aLigne] = {
                    ids: [],
                    rowIndex: aRowIndex,
                    indiceRange: this._cache.refresh
                      .avecConstructionDynamiqueContenu
                      ? aIndiceRange
                      : -1,
                  };
                }
                this._cache.structureWAI.lignes[aLigne].ids[aColonne] = aId;
              };
              lAddLigneWAI(
                lParamsCellule.ligne,
                lRowIndex,
                lParamsCellule.colonne,
                lId,
              );
            }
            this._cache.collectionFuncConstructCellule[
              lParamsCellule.ligne + '_' + lParamsCellule.colonne
            ] = this._construireCelluleMobile.bind(
              this,
              lParamsCellule,
              lTypeValeur,
              lId,
              lTaille,
            );
            H.push(
              IE.jsx.str(
                'div',
                {
                  id: lId,
                  ie_nodeafter: !this.Donnees.enConstruction_cacheRechercheTexte
                    ? this.jsxNodeCellulePereMobile.bind(
                        this,
                        lNumeroLigne,
                        aNumeroColonne,
                      )
                    : false,
                  class: lClasses,
                  ie_class: this.jsxGetClassCellulePere.bind(
                    this,
                    lParamsCellule,
                  ),
                },
                this._cache.collectionFuncConstructCellule[
                  lParamsCellule.ligne + '_' + lParamsCellule.colonne
                ](),
              ),
            );
          });
        }
        let lResult = H.join('');
        if (
          this._cache.refresh.avecConstructionDynamiqueContenu &&
          !this.Donnees.enConstruction_cacheRechercheTexte &&
          lRangeLignes.fin > lRangeLignes.debut
        ) {
          lResult = IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str('div', {
              class: lClasseRange,
              style:
                'height:0; grid-column:1/' + (lNbColonnesVisibles + 1) + ';',
              ie_nodeafter: this.jsxNodeObsRange.bind(
                this,
                true,
                aIndiceRange,
                aInfosColonnes.indiceBloc,
              ),
              role: 'presentation',
            }),
            lResult,
            IE.jsx.str('div', {
              class: lClasseRange,
              style:
                'height:0; grid-column:1/' + (lNbColonnesVisibles + 1) + ';',
              ie_nodeafter: this.jsxNodeObsRange.bind(
                this,
                false,
                aIndiceRange,
                aInfosColonnes.indiceBloc,
              ),
              role: 'presentation',
            }),
          );
        }
        return lResult;
      }
      jsxNodeCellulePereMobile(aLigne, aColonne, aNode) {
        const lThis = this;
        const lEventMapCellulePere = {
          mousedown(aEvent) {
            lThis._surEventDownLigne({
              event: aEvent,
              ligne: aLigne,
              colonne: aColonne,
            });
          },
          click(aEvent) {
            if (lThis._estEventSansSelect(aEvent)) {
              return;
            }
            lThis._editionDebSurSelection(aColonne, aLigne, aEvent);
            if (
              lThis.estDonneeListeFlatDesign(lThis.Donnees) &&
              lThis.Donnees.options.avecCocheCBSurLigne
            ) {
              lThis._modifierCBLigneFlatDesign(
                lThis._getParamsCellule(aColonne, aLigne),
              );
            }
          },
          keyup: this._surKeyUpCellulePere,
        };
        $(aNode).on(lEventMapCellulePere, { instance: this });
      }
      _getClassCouleurCelluleMobile(aParamsCellule) {
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        const lClassAction =
          (this._options.avecCelluleEditableTriangle &&
          lDonneesTableau &&
          lDonneesTableau.avecBordureDroite(aParamsCellule)
            ? 'with-action'
            : 'with-action-simple') +
          ' ' +
          IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple;
        let lClass = '';
        if (
          !this._getNonEditable() &&
          lDonneesTableau &&
          (lDonneesTableau.avecEdition(aParamsCellule) ||
            lDonneesTableau.avecEvenementEdition(aParamsCellule))
        ) {
          lClass = lClassAction;
        }
        const LCouleurCellule = lDonneesTableau
          ? lDonneesTableau.getCouleurCellule(
              aParamsCellule,
              new _ObjetCouleur_1.ObjectCouleurCellule(),
            )
          : null;
        if (LCouleurCellule !== null && LCouleurCellule !== undefined) {
          switch (LCouleurCellule) {
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Blanc:
              return lClassAction;
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Gris:
              return '';
            default:
              return lClass;
          }
        } else {
          return lClass;
        }
      }
      _getTabElementsPourRsizeObserver() {
        if (this.estMobile) {
          return [ObjetHtml_1.GHtml.getElement(this.idZone)];
        }
        return [
          EGenreZoneScroll.contenu,
          EGenreZoneScroll.contenuFixe,
          EGenreZoneScroll.contenuFixeFin,
        ].map((aGenre) => {
          var _a;
          return ObjetHtml_1.GHtml.getElement(
            (_a = this.ScrollV) === null || _a === void 0
              ? void 0
              : _a.getIdContenu(aGenre),
          );
        });
      }
      _getInfosZonesColonnesDesktop(aCache) {
        function _addZone(aInfos) {
          const lInfos = Object.assign(
            {
              dernierBloc: true,
              indiceColonneDebut: 0,
              indiceColonneFin: 0,
              indiceBloc: aCache.infosZonesColonnes.length,
              idScrollTri: EGenreZoneScroll.tri,
              idScrollTitre: EGenreZoneScroll.titre,
              idScrollContenu: EGenreZoneScroll.contenu,
              idScrollTotal: EGenreZoneScroll.total,
              estBlocFixe: false,
              gabaritColonnesTitre: [],
              colonnesVisibles: [],
              largeurBloc: 0,
              indiceColVisibleDebut: 0,
            },
            aInfos,
          );
          for (
            let lColonne = lInfos.indiceColonneDebut;
            lColonne <= lInfos.indiceColonneFin;
            lColonne++
          ) {
            if (!aCache.tableauColonnesCachees[lColonne]) {
              lInfos.colonnesVisibles.push(lColonne);
            }
          }
          if (lInfos.colonnesVisibles.length > 0) {
            lInfos.indiceColonneDebut = lInfos.colonnesVisibles[0];
            lInfos.indiceColonneFin =
              lInfos.colonnesVisibles[lInfos.colonnesVisibles.length - 1];
            if (aCache.infosZonesColonnes.length > 0) {
              const lBlocPrec =
                aCache.infosZonesColonnes[aCache.infosZonesColonnes.length - 1];
              if (lBlocPrec) {
                lBlocPrec.dernierBloc = false;
                lInfos.indiceColVisibleDebut =
                  lBlocPrec.indiceColVisibleDebut +
                  lBlocPrec.colonnesVisibles.length;
              }
            }
            aCache.infosZonesColonnes.push(lInfos);
            return lInfos;
          }
          return null;
        }
        function _rechercheColonneVisible(aNumeroColonne, aRechercheAvant) {
          let lNumeroColonne = aNumeroColonne;
          while (
            lNumeroColonne >= 0 &&
            lNumeroColonne < aCache.tableauColonnesCachees.length
          ) {
            if (!aCache.tableauColonnesCachees[lNumeroColonne]) {
              return lNumeroColonne;
            }
            lNumeroColonne += aRechercheAvant ? -1 : 1;
          }
          return -1;
        }
        aCache.infosZonesColonnes = [];
        aCache.avecScrollHorizontal = this._options.scrollHorizontal !== false;
        aCache.avecScrollHMultiZonePrevu =
          !!this._options.scrollHorizontal &&
          this._options.scrollHorizontal !== true;
        if (!this.ListeTailles) {
          return;
        }
        let lDerniereColonneFixe = -1;
        let lColonneDebutFixeFin = this.ListeTailles.length - 1;
        let lAvecBlocFixeFin = false;
        let lColScrollDebut = null;
        let lColScrollFin = null;
        if (aCache.avecScrollHorizontal) {
          let lNumeroColonneAvecScroll = 0;
          let lNumeroColonneFinScroll = this.ListeTailles.length - 1;
          lColScrollDebut = this._options.scrollHorizontal;
          if (typeof this._options.scrollHorizontal === 'object') {
            if (this._options.scrollHorizontal.debut !== undefined) {
              lColScrollDebut = this._options.scrollHorizontal.debut;
            }
            if (this._options.scrollHorizontal.fin !== undefined) {
              lColScrollFin = this._options.scrollHorizontal.fin;
            }
          }
          if (MethodesObjet_1.MethodesObjet.isString(lColScrollDebut)) {
            lNumeroColonneAvecScroll =
              this.getNumeroColonneDIdColonne(lColScrollDebut);
          } else if (
            MethodesObjet_1.MethodesObjet.isNumber(lColScrollDebut) &&
            lColScrollDebut > 0
          ) {
            lNumeroColonneAvecScroll = lColScrollDebut;
          }
          if (lNumeroColonneAvecScroll > 0) {
            lNumeroColonneAvecScroll = _rechercheColonneVisible(
              lNumeroColonneAvecScroll,
              false,
            );
          }
          if (MethodesObjet_1.MethodesObjet.isString(lColScrollFin)) {
            lNumeroColonneFinScroll =
              this.getNumeroColonneDIdColonne(lColScrollFin);
          } else if (
            MethodesObjet_1.MethodesObjet.isNumber(lColScrollFin) &&
            lColScrollFin > 0
          ) {
            lNumeroColonneFinScroll = lColScrollFin;
          }
          if (lNumeroColonneFinScroll > 0) {
            lNumeroColonneFinScroll = _rechercheColonneVisible(
              lNumeroColonneFinScroll,
              true,
            );
          }
          if (lNumeroColonneAvecScroll > 0) {
            lDerniereColonneFixe = lNumeroColonneAvecScroll - 1;
          }
          if (
            lNumeroColonneFinScroll > 1 &&
            lNumeroColonneFinScroll < this.ListeTailles.length - 1 &&
            lNumeroColonneFinScroll > lNumeroColonneAvecScroll
          ) {
            lColonneDebutFixeFin = lNumeroColonneFinScroll;
          }
        }
        if (
          lColonneDebutFixeFin - lDerniereColonneFixe < 2 ||
          lDerniereColonneFixe >= this.ListeTailles.length - 1
        ) {
          aCache.avecScrollHorizontal = false;
        }
        lAvecBlocFixeFin = lColonneDebutFixeFin < this.ListeTailles.length - 1;
        if (
          !aCache.avecScrollHorizontal ||
          (lDerniereColonneFixe < 0 && !lAvecBlocFixeFin)
        ) {
          _addZone({
            indiceColonneDebut: 0,
            indiceColonneFin: this.ListeTailles.length - 1,
          });
          return;
        }
        if (lDerniereColonneFixe >= 0) {
          _addZone({
            estBlocFixe: true,
            indiceColonneDebut: 0,
            indiceColonneFin: lDerniereColonneFixe,
            idScrollTri: EGenreZoneScroll.triFixe,
            idScrollTitre: EGenreZoneScroll.titreFixe,
            idScrollContenu: EGenreZoneScroll.contenuFixe,
            idScrollTotal: EGenreZoneScroll.totalFixe,
          });
        }
        _addZone({
          indiceColonneDebut: lDerniereColonneFixe + 1,
          indiceColonneFin: lColonneDebutFixeFin,
        });
        if (lAvecBlocFixeFin) {
          _addZone({
            estBlocFixe: true,
            estBlocFixeDroite: true,
            indiceColonneDebut: lColonneDebutFixeFin + 1,
            indiceColonneFin: this.ListeTailles.length - 1,
            idScrollTri: EGenreZoneScroll.triFixeFin,
            idScrollTitre: EGenreZoneScroll.titreFixeFin,
            idScrollContenu: EGenreZoneScroll.contenuFixeFin,
            idScrollTotal: EGenreZoneScroll.totalFixeFin,
          });
        }
      }
      _getInfosZonesColonnesMobile(aCache) {
        aCache.infosZonesColonnes = [];
        aCache.avecScrollHorizontal = false;
        aCache.avecScrollHMultiZonePrevu = false;
        if (!this.ListeTailles) {
          return;
        }
        const lInfos = {
          dernierBloc: true,
          indiceColonneDebut: 0,
          indiceColonneFin: this.ListeTailles.length - 1,
          indiceBloc: aCache.infosZonesColonnes.length,
          estBlocFixe: false,
          gabaritColonnesTitre: [],
          colonnesVisibles: [],
          largeurBloc: 0,
        };
        for (
          let lColonne = lInfos.indiceColonneDebut;
          lColonne <= lInfos.indiceColonneFin;
          lColonne++
        ) {
          if (!aCache.tableauColonnesCachees[lColonne]) {
            lInfos.colonnesVisibles.push(lColonne);
          }
        }
        if (lInfos.colonnesVisibles.length > 0) {
          lInfos.indiceColonneDebut = lInfos.colonnesVisibles[0];
          lInfos.indiceColonneFin =
            lInfos.colonnesVisibles[lInfos.colonnesVisibles.length - 1];
          if (aCache.infosZonesColonnes.length > 0) {
            aCache.infosZonesColonnes[
              aCache.infosZonesColonnes.length - 1
            ].dernierBloc = false;
          }
          aCache.infosZonesColonnes.push(lInfos);
        }
      }
      _construireAffichageDesktop() {
        let lLargeurTable;
        if (!this._cache.largeurTotalCalcule) {
          lLargeurTable = '100%';
        } else {
          lLargeurTable = this._getLargeurConteneur() + 'px';
        }
        const lEstTreeGrid = this._estRoleTreeGrid();
        this._cache.gridTotalAccess.nav = null;
        return IE.jsx.str(
          'div',
          {
            ie_node: this.jsxGetNodeListe.bind(this, this),
            ie_nodeafter: this.jsxGetNodeAfterListe.bind(this),
            class: [
              ObjetListeEspaceMobile_css_1.SObjetListeEspaceMobile.ObjetListe,
              ObjetListe_Desktop_css_1.SObjetListe_Desktop.desktop,
            ],
            ie_class: this.jsxGetClassListe.bind(this),
            ie_attr: this.jsxGetAttrListe.bind(this),
            style: this._cache.listeNonInitialisee
              ? ' visibility:hidden'
              : false,
          },
          (T) => {
            const lHtmlEntete = this._construireBoutonsEntete(lLargeurTable);
            if (lHtmlEntete) {
              T.push(IE.jsx.str('div', { role: 'presentation' }, lHtmlEntete));
            }
            this._cache.ombreTopForce =
              this._options.skin === ObjetListe.skin.flatDesign &&
              !!(lHtmlEntete || this._options.forcerOmbreScrollTop);
            const lHtmlPiedDeListe = this._options.piedDeListe
              ? IE.jsx.str('div', {
                  id: this.idPiedDeListe,
                  class: 'liste-pied',
                })
              : '';
            T.push(
              IE.jsx.str(
                'div',
                {
                  id: this.idZone,
                  class: [
                    'liste_zone conteneur-ombre-zone ',
                    this._cache.ombreTopForce ? ' ombre-top' : '',
                    this._options.forcerOmbreScrollBottom
                      ? ' ombre-bottom'
                      : '',
                  ],
                  style: `width:${lLargeurTable}`,
                  'data-tooltip-align': Tooltip_1.Tooltip.Align.bottom,
                },
                () => {
                  let lResultZone = IE.jsx.str(
                    'div',
                    {
                      id: this.ids.zoneFils,
                      class: 'liste_zoneFils NoWrap',
                      role: 'presentation',
                    },
                    (aTabGrid) => {
                      const lAvecTri = this.avecTriColonne();
                      const lAvecGridTotal = this._avecLigneTotal();
                      const lTabTitre = [];
                      this._cache.infosZonesColonnes.forEach(
                        (aInfosZoneColonnes) => {
                          const lConstructionTitre = this._construireTitre(
                            aInfosZoneColonnes,
                            lAvecTri,
                          );
                          if (lConstructionTitre) {
                            lTabTitre.push(lConstructionTitre);
                          }
                        },
                      );
                      const lTabGridVisuel = [];
                      if (lTabTitre.length > 0) {
                        lTabGridVisuel.push(
                          IE.jsx.str(
                            'div',
                            { class: 'liste-heriar' },
                            lTabTitre.join(''),
                          ),
                        );
                      }
                      lTabGridVisuel.push(
                        IE.jsx.str(
                          'div',
                          { class: 'liste-heriar', role: 'presentation' },
                          (aTab) => {
                            this._cache.infosZonesColonnes.forEach(
                              (aInfosZoneColonnes) => {
                                aTab.push(
                                  this._construireContenuListe(
                                    aInfosZoneColonnes,
                                  ),
                                );
                              },
                            );
                          },
                        ),
                      );
                      if (lAvecGridTotal) {
                        lTabGridVisuel.push(
                          IE.jsx.str(
                            'div',
                            { class: 'liste-heriar', role: 'presentation' },
                            (aTab) => {
                              this._cache.infosZonesColonnes.forEach(
                                (aInfosZoneColonnes) => {
                                  aTab.push(
                                    this._construireLigneTotal(
                                      aInfosZoneColonnes,
                                    ),
                                  );
                                },
                              );
                            },
                          ),
                        );
                      }
                      let lAvecScrollH = false;
                      this._cache.infosZonesColonnes.forEach(
                        (aInfosZoneColonnes) => {
                          if (
                            !aInfosZoneColonnes.estBlocFixe &&
                            this._cache.avecScrollHorizontal &&
                            this._cache.reserverPlaceScrollHorizontal
                          ) {
                            lAvecScrollH = true;
                          }
                        },
                      );
                      if (lAvecScrollH) {
                        lTabGridVisuel.push(
                          IE.jsx.str(
                            'div',
                            { class: 'liste-heriar', role: 'presentation' },
                            (aTab) => {
                              this._cache.infosZonesColonnes.forEach(
                                (aInfosZoneColonnes) => {
                                  var _a, _b;
                                  if (aInfosZoneColonnes.estBlocFixe) {
                                    aTab.push(
                                      IE.jsx.str('div', {
                                        style: {
                                          width: aInfosZoneColonnes.largeurBloc,
                                        },
                                      }),
                                    );
                                  } else {
                                    aTab.push(
                                      IE.jsx.str('div', {
                                        id:
                                          (_a = this.ScrollH) === null ||
                                          _a === void 0
                                            ? void 0
                                            : _a.getIdScroll(),
                                        role: 'presentation',
                                        style:
                                          ObjetStyle_1.GStyle.composeHeight(
                                            (_b = this.ScrollH) === null ||
                                              _b === void 0
                                              ? void 0
                                              : _b.Largeur,
                                          ) +
                                          (this._options.borduresContenu_left >
                                            0 &&
                                          aInfosZoneColonnes.indiceBloc === 0
                                            ? 'padding-left:' +
                                              this._options
                                                .borduresContenu_left +
                                              'px;'
                                            : ''),
                                      }),
                                    );
                                  }
                                },
                              );
                            },
                          ),
                        );
                      }
                      if (
                        this._options.skin !== ObjetListe.skin.flatDesign &&
                        lHtmlPiedDeListe
                      ) {
                        lTabGridVisuel.push(lHtmlPiedDeListe);
                      }
                      if (lEstTreeGrid) {
                        aTabGrid.push(
                          this.construireGridWAI(lAvecTri, lAvecGridTotal),
                        );
                      }
                      aTabGrid.push(lTabGridVisuel.join(''));
                    },
                  );
                  lResultZone += IE.jsx.str(
                    'div',
                    {
                      class:
                        'liste_cont_btnscroll AlignementGauche InlineBlock AlignementHaut',
                    },
                    () => {
                      var _a, _b, _c;
                      let lResult = '';
                      const lAvecBoutons = this._avecBoutonsListeHautScroll();
                      if (lAvecBoutons) {
                        lResult += IE.jsx.str(
                          'div',
                          { class: 'liste_btnsDroite' },
                          (aTab) => {
                            this._cache.boutons.forEach((aBouton, aIndex) => {
                              aTab.push(
                                IE.jsx.str(
                                  'div',
                                  {
                                    style:
                                      ObjetStyle_1.GStyle.composeWidth(
                                        this._options.tailleBoutons + 1,
                                      ) +
                                      ObjetStyle_1.GStyle.composeHeight(
                                        this._options.tailleBoutons + 1,
                                      ),
                                  },
                                  IE.jsx.str(IEHtml_BtnImage_1.BtnImage, {
                                    ie_model: this.jsxModeleBoutonListe.bind(
                                      this,
                                      this,
                                      aBouton,
                                    ),
                                    title: aBouton.title || false,
                                    id: aBouton.id,
                                    class: ['btnImageIcon', aBouton.class],
                                  }),
                                ),
                              );
                            });
                          },
                        );
                      }
                      lResult += IE.jsx.str(
                        'div',
                        {
                          id:
                            (_a = this.ScrollV) === null || _a === void 0
                              ? void 0
                              : _a.getIdScroll(),
                          class: 'AlignementBas',
                          style:
                            ObjetStyle_1.GStyle.composeWidth(
                              (_b = this.ScrollV) === null || _b === void 0
                                ? void 0
                                : _b.Largeur,
                            ) +
                            'min-height:' +
                            ((_c = this.ScrollV) === null || _c === void 0
                              ? void 0
                              : _c.tailleMin) +
                            'px;',
                        },
                        '\u00A0',
                      );
                      return lResult;
                    },
                  );
                  return lResultZone;
                },
              ),
            );
            T.push(this._construireTotalFD(false, false));
            if (
              this._options.skin === ObjetListe.skin.flatDesign &&
              lHtmlPiedDeListe
            ) {
              T.push(lHtmlPiedDeListe);
            }
            T.push(this.composeWAICommun());
          },
        );
      }
      _construireAffichageMobile() {
        const lHtmlEntete = this._construireBoutonsEntete();
        const lHtmlPiedDeListe = this._options.piedDeListe
          ? IE.jsx.str('div', {
              id: this.idPiedDeListe,
              class: [
                ObjetListe_Mobile_css_1.SObjetListe_Mobile.listePied,
                GestionnaireStickyScroll_1.GestionnaireStickyScroll
                  .stickyBottom,
              ],
            })
          : '';
        const lHtmlTotal_fd = this._construireTotalFD(false, false);
        return IE.jsx.str(
          'div',
          {
            class: [
              ObjetListeEspaceMobile_css_1.SObjetListeEspaceMobile.ObjetListe,
              ObjetListe_Mobile_css_1.SObjetListe_Mobile.mobile,
            ],
            ie_class: this.jsxGetClassListe.bind(this),
            ie_node: this.jsxGetNodeListe.bind(this, this),
            ie_attr: this.jsxGetAttrListe.bind(this),
            id: this.idZone,
          },
          lHtmlEntete
            ? IE.jsx.str(
                'div',
                {
                  class: [
                    ObjetListe_Mobile_css_1.SObjetListe_Mobile.entete,
                    GestionnaireStickyScroll_1.GestionnaireStickyScroll
                      .stickyTop,
                  ],
                },
                lHtmlEntete,
              )
            : '',
          IE.jsx.str(
            'div',
            {
              class: ObjetListe_Mobile_css_1.SObjetListe_Mobile.liste_content,
              role: 'presentation',
            },
            this._construireZoneContentMobile(),
          ),
          lHtmlTotal_fd,
          lHtmlPiedDeListe,
          this.composeWAICommun(),
        );
      }
      _construireZoneContentMobile() {
        const lEstTreeGrid = this._estRoleTreeGrid();
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str('div', {
            id: this.ids.cadreSelection + '0',
            class: 'liste_conteneurCadreSelection',
            role: 'presentation',
          }),
          this._construireFiltres(),
          this._construireTotalFD(true, true),
          IE.jsx.str(
            'div',
            {
              id: this.idZoneActua,
              class: [
                'collection',
                'with-header',
                ObjetListeEspaceMobile_css_1.SObjetListeEspaceMobile
                  .liste_content_lignes,
                ObjetListe.SelecteurCss.focusGrid,
              ],
              role: lEstTreeGrid ? 'presentation' : 'tree',
              style: this._getStyleGridColumn(),
              tabindex: '0',
              'aria-labelledby': lEstTreeGrid ? false : this.ids.WAILabelListe,
              ie_node: this.jsxGetNodePremierElementMobile.bind(this),
            },
            this.construireZoneScrollInterneMobile(),
          ),
          this._construireTotalFD(false, true),
          this._construireBoutonsMobile(),
          this._estRoleTreeGrid() && this.construireGridWAI(false, false),
        );
      }
      jsxGetNodePremierElementMobile(aNode) {
        this.jsxGetNodePremierElement(this, aNode);
        $(aNode).on(
          this.getEventMapCelluleFocusable(),
          'div.collection-item:not(:has(.Liste_Input_Texte))',
          { instance: this },
        );
      }
      _construireTotalMobile() {
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        const lListeTotal = lDonneesTableau
          ? lDonneesTableau.getListeLignesTotal()
          : null;
        if (
          !this._options.avecLigneTotal &&
          (!lListeTotal || lListeTotal.count() === 0)
        ) {
          return '';
        }
        const H = [];
        const lLignes = this.getListeLignesTotal();
        const lInfosColonnes = this._cache.infosZonesColonnes[0];
        lLignes.parcourir((aArticle, aIndexLigne) => {
          const lArticle = !(aArticle === null || aArticle === void 0
            ? void 0
            : aArticle.totalbidon)
            ? aArticle
            : undefined;
          let lFusions = null;
          if (lDonneesTableau) {
            lFusions = this._getFusionColonnesCellule({
              total: true,
              getParamsCellule: (aNumeroColonne) => {
                return this._getParamsCellule(aNumeroColonne, -1, {
                  surTotal: true,
                  ligne: aIndexLigne,
                  article: lArticle,
                });
              },
              colonnesVisibles: lInfosColonnes.colonnesVisibles,
              indiceColonneDebut: lInfosColonnes.indiceColonneDebut,
              indiceColonneFin: lInfosColonnes.indiceColonneFin,
              dernierBloc: true,
            });
          }
          let lIndiceColonne = 0;
          lInfosColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
            if (
              lFusions &&
              (!lFusions[aNumeroColonne] || !lFusions[aNumeroColonne].nbCol)
            ) {
              return;
            }
            lIndiceColonne += 1;
            const lParams = this._getParamsCellule(aNumeroColonne, -1, {
              surTotal: true,
            });
            if (lArticle) {
              lParams.ligne = aIndexLigne;
              lParams.article = lArticle;
            }
            let lContenu = '';
            let lClassLi = '';
            let lGridColumn = '';
            let lStyle;
            let lAriaHaspopup = false;
            if (lDonneesTableau) {
              lParams.typeCellule =
                lDonneesTableau.getTypeCelluleTotal(lParams);
              const lAvecBordureTotalVisible =
                lDonneesTableau.avecBordureTotalVisible(lParams);
              if (
                lFusions[aNumeroColonne] &&
                lFusions[aNumeroColonne].nbCol > 1
              ) {
                lGridColumn =
                  'grid-column:' +
                  lIndiceColonne +
                  ' / ' +
                  (lIndiceColonne + lFusions[aNumeroColonne].nbCol) +
                  ';';
              }
              lStyle =
                lGridColumn + (lDonneesTableau._getStyleTotal(lParams) || '');
              lClassLi =
                'collection-item liste_ligne_total ' +
                (lDonneesTableau.getClassTotal(lParams) || '');
              if (!lAvecBordureTotalVisible) {
                lClassLi += ' liste_sansBordureD';
              }
              lContenu = lDonneesTableau.getContenuTotal(lParams);
              lAriaHaspopup =
                lDonneesTableau.getAriaHasPopupTotal(lParams) || false;
            }
            const lNodeCelluleTotal = (aNode) => {
              const lEventMapCelluleTd = {
                validation: this._surClickCelluleTotal,
              };
              const lData = { instance: this };
              $(aNode).on(lEventMapCelluleTd, lData);
            };
            const lIdCellule = this.getIdCelluleTotal(
              lParams.colonne,
              lParams.ligne,
              false,
            );
            if (!this._cache.structureWAI.totals[aIndexLigne]) {
              this._cache.structureWAI.totals[aIndexLigne] = [];
            }
            this._cache.structureWAI.totals[aIndexLigne].push(lIdCellule);
            H.push(
              IE.jsx.str(
                'div',
                {
                  id: lIdCellule,
                  ie_node: lNodeCelluleTotal,
                  class: [
                    'liste_cellule_total',
                    lClassLi,
                    lParams.typeCellule ===
                    ObjetDonneesListe_1.ObjetDonneesListe.typeCelluleTotal
                      .defaut
                      ? Divers_css_1.SD.focusVisibleContrasted
                      : '',
                  ],
                  style: lStyle || false,
                  role: 'gridcell',
                  'aria-haspopup': lAriaHaspopup,
                },
                IE.jsx.str('div', { class: 'liste_cellule_div' }, lContenu),
              ),
            );
          });
        });
        return H.join('');
      }
      _getStyleGridColumn() {
        const H = [];
        const lNbColonnesVisibles =
          this._cache.infosZonesColonnes[0].colonnesVisibles.length;
        this._cache.infosZonesColonnes[0].colonnesVisibles.forEach(
          (aNumeroColonne, aIndex) => {
            const lTaille = this._cache.taillesColonne[aNumeroColonne];
            let lStyle = '';
            if (lTaille.estPourcent) {
              lStyle = 'minmax(1rem, ' + lTaille.pourcent / 100 + 'fr)';
            } else {
              const lEstDerniereColonne = aIndex + 1 >= lNbColonnesVisibles;
              lStyle = lTaille.px + 8 + (lEstDerniereColonne ? 0 : 1) + 'px';
            }
            H.push(lStyle);
          },
        );
        return H.length > 0 ? 'grid-template-columns:' + H.join(' ') + ';' : '';
      }
      _initStructureDynamique() {
        const lCacheRef = this._cache.refresh;
        if (lCacheRef.avecConstructionDynamiqueContenu) {
          let lNbLignesRestantes = this._cache.lignesVisibles.length;
          let lIndiceLigneDebut = 0;
          while (lNbLignesRestantes > 0) {
            const lNbLignes =
              lNbLignesRestantes < lCacheRef.nbLignes
                ? lNbLignesRestantes
                : lCacheRef.nbLignes;
            lCacheRef.structure.push({
              deb: lIndiceLigneDebut,
              fin: lIndiceLigneDebut + lNbLignes - 1,
              nbLignes: lNbLignes,
              height: -1,
            });
            lIndiceLigneDebut += lNbLignes;
            lNbLignesRestantes = Math.max(0, lNbLignesRestantes - lNbLignes);
          }
        }
      }
      _surBtnCreation(aNodeBouton) {
        if (this.avecBoutonCreationDansEntete()) {
          this.surCreationEvenement(-1, { nodeBouton: aNodeBouton });
        } else {
          this.surCreationDeb(false);
        }
      }
      _construireTitreMobile() {
        const H = [];
        if (!this.ListeTitres) {
          return '';
        }
        this.ListeTitres.forEach((aTitre, aIndexLigne) => {
          aTitre.forEach((aLigne, aIndice) => {
            const lId = `${this.Nom}_titrecell_${aIndexLigne}_${aIndice}`;
            if (!this._cache.structureWAI.titres[aIndexLigne]) {
              this._cache.structureWAI.titres[aIndexLigne] = {
                ids: [],
                estLigneAIgnorer: false,
              };
            }
            this._cache.structureWAI.titres[aIndexLigne].ids[
              this.getIndiceColonneVisibleDeColonne(aIndice)
            ] = lId;
            const lDescripteurTitre = aLigne;
            H.push(
              IE.jsx.str(
                'div',
                { class: 'collection-header', id: lId, role: 'columnheader' },
                lDescripteurTitre.getLibelleHtml
                  ? lDescripteurTitre.getLibelleHtml()
                  : lDescripteurTitre.libelleHtml
                    ? lDescripteurTitre.libelleHtml
                    : lDescripteurTitre.estCoche
                      ? IE.jsx.str(
                          'div',
                          {
                            style:
                              'position:relative; left: .4rem; width:16px; overflow:hidden;',
                          },
                          IE.jsx.str(IEHtml_CheckboxRadio_1.Checkbox, {
                            ie_model: this.jsxGetModelCocheTitreClassique.bind(
                              this,
                              this,
                              aIndice,
                            ),
                            ie_attr: this.jsxGetAttrCocheTitreClassique.bind(
                              this,
                              aIndice,
                            ),
                          }),
                        )
                      : lDescripteurTitre.libelle || '',
              ),
            );
          });
        });
        return H.join('');
      }
      _contruireBoutonMobile(aSvgIcone, aLibelle, aAttrs) {
        var _a;
        return IE.jsx.str(
          'button',
          Object.assign(
            {
              class: [
                'btn-float',
                IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple,
                IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleClaire,
              ],
            },
            aAttrs,
            {
              ie_tooltiplabel: aLibelle || false,
              'aria-haspopup':
                (_a = this._options.ariaHasPopupBtnCreation) !== null &&
                _a !== void 0
                  ? _a
                  : 'dialog',
            },
          ),
          aSvgIcone,
        );
      }
      _construireBoutonsMobile() {
        const H = [];
        const lHtmlBoutons = [];
        const lAvecCreation =
          this._options.estBoutonCreationPiedFlottant_mobile &&
          this._avecLigneCreationTitre();
        this._getTabBoutonsEnteteOuPiedFD(false).forEach((aInfoBouton) => {
          const lBouton = aInfoBouton.bouton;
          lHtmlBoutons.push(
            this._contruireBoutonMobile(lBouton.svg, lBouton.title, {
              ie_attr: (aNode) => {
                if (lBouton.getDisabled) {
                  return {
                    disabled: lBouton.getDisabled({
                      bouton: lBouton,
                      node: aNode,
                      liste: this,
                    }),
                  };
                }
              },
              ie_node: (aNode) => {
                if (lBouton.event) {
                  const lThis = this;
                  $(aNode).on('validation', function (aEvent) {
                    const lParams = {
                      bouton: lBouton,
                      event: aEvent,
                      liste: lThis,
                      node: this,
                    };
                    lBouton.event(lParams);
                  });
                }
              },
            }),
          );
        });
        if (lAvecCreation) {
          const lParams = this._getParamsCellule(-1, -1, { surCreation: true });
          const lAvecInputFile = this.Donnees.avecSelecFile(lParams);
          const lAttr = lAvecInputFile
            ? {
                ie_model: this.jsxModeleSelecFile.bind(
                  this,
                  this,
                  lParams,
                  true,
                ),
                ie_selecfile: true,
              }
            : {
                ie_node: (aNode) => {
                  const lThis = this;
                  $(aNode).on('validation', function () {
                    lThis._surBtnCreation(this);
                  });
                },
              };
          const H = this._contruireBoutonMobile(
            this._options.svgIconeTitreCreation ||
              IE.jsx.str(IconeSvgPlus_fin_1.IconeSvgPlus_fin, null),
            this._options.titreCreation ||
              this._options.tooltipDescribeBoutonCreation,
            lAttr,
          );
          if (this._options.skin === ObjetListe.skin.flatDesign) {
            lHtmlBoutons.push(H);
          } else {
            lHtmlBoutons.splice(0, 0, H);
          }
        }
        if (lHtmlBoutons.length > 0) {
          H.push(
            IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str('div', { class: 'liste_separateur_boutons' }),
              IE.jsx.str(
                'section',
                {
                  class: [
                    ObjetListe_Mobile_css_1.SObjetListe_Mobile.liste_boutons,
                    GestionnaireStickyScroll_1.GestionnaireStickyScroll
                      .stickyBottom,
                    GestionnaireStickyScroll_1.GestionnaireStickyScroll
                      .stickyAlwaysVisible,
                    GestionnaireStickyScroll_1.GestionnaireStickyScroll
                      .stickyTransparent,
                  ],
                },
                lHtmlBoutons.join(''),
              ),
            ),
          );
        }
        return H.join('');
      }
      construireZoneScrollInterneMobile() {
        return (
          this._construireTitreMobile() +
          this._construireContenuMobile() +
          this._construireTotalMobile() +
          (this._cache.lignesVisibles.length === 0 &&
          this._options.messageContenuVide
            ? IE.jsx.str(
                'div',
                {
                  class:
                    ObjetListe_Mobile_css_1.SObjetListe_Mobile
                      .liste_messageVide,
                  role: this._estRoleTreeGrid() ? 'gridcell' : 'treeitem',
                },
                this._options.messageContenuVide,
                IE.jsx.str('div', {
                  class: 'm-top-xl Image_No_Data',
                  'aria-hidden': 'true',
                }),
              )
            : '')
        );
      }
      jsxGetNodeAfterListe() {
        var _a;
        const lAvecBoutons = this._avecBoutonsListeHautScroll();
        if (this._options.borduresContenu_top || !lAvecBoutons) {
          let lTop =
            (this._zoneContenuAvecTraitHaut()
              ? this._options.borduresContenu_top
              : 0) || 0;
          if (!lAvecBoutons) {
            let lMax = 0;
            this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
              lMax = Math.max(
                lMax,
                ObjetPosition_1.GPosition.getHeight(
                  this.ids.titre + aInfosZoneColonnes.indiceBloc,
                ),
              );
            });
            lTop += lMax;
          }
          $(
            '#' +
              ((_a = this.ScrollV) === null || _a === void 0
                ? void 0
                : _a.getIdScroll().escapeJQ()),
          ).css('padding-top', lTop + 'px');
        }
      }
      _getDessinCurseurTri(aParams) {
        const lParams = Object.assign(
          {
            triCroissant: true,
            tri: NSListe.FlecheTri.principal,
            width: this._options.widthTri,
            height: this._options.heightTri,
            top: 0,
            left: 0,
          },
          aParams,
        );
        if (lParams.tri === NSListe.FlecheTri.secondaire) {
          lParams.width += -2;
          lParams.height += -1;
        }
        const lWidth = lParams.width + lParams.left;
        const lHeight = lParams.height + lParams.top;
        return IE.jsx.str(
          'svg',
          {
            class: ['svg-tri', lParams.tri],
            width: lWidth + 'px',
            height: lHeight + 'px',
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'presentation',
          },
          IE.jsx.str('polygon', {
            points: ObjetChaine_1.GChaine.format(
              !lParams.triCroissant
                ? '%4:s,%3:s %1:s,%3:s %2:s,%0:s'
                : '%4:s,%0:s %1:s,%0:s %2:s,%3:s',
              [
                lParams.height - 2 + lParams.top + 1 + 0.5,
                lParams.width - 2 + lParams.left + 1 + 0.5,
                (lParams.width - 2) / 2 + lParams.left + 1 + 0.5,
                lParams.top + 1 + 0.5,
                lParams.left + 1 + 0.5,
              ],
            ),
          }),
        );
      }
      _setStyleCellule(aId, aColonne, aLigne, aSelectionne, aCreation) {
        if (!aId) {
          return;
        }
        const lJCellule = ObjetHtml_1.GHtml.estElement(aId)
          ? $(aId)
          : $('#' + aId.escapeJQ());
        if (aSelectionne) {
          lJCellule.addClass('selected');
        } else {
          lJCellule.removeClass('selected');
        }
        if (!this.estMobile) {
          if (
            this._options.avecCadreSelection ||
            this._options.ignorerCouleurInlineCellule
          ) {
            return;
          }
          let lJeuxCouleurs;
          if (aCreation && !aSelectionne) {
            lJeuxCouleurs = this._options.couleursListe.editable;
          } else {
            lJeuxCouleurs = this._getJeuxCouleur(
              this._getParamsCellule(aColonne, aLigne),
              aSelectionne,
            );
          }
          ObjetStyle_1.GStyle.setCouleur(
            aId,
            lJeuxCouleurs.getFond(false),
            lJeuxCouleurs.getTexte(false),
          );
        }
      }
      _actualiserZones(aZonesActualisation, aParamsActualiser) {
        if (this.estMobile) {
          this._initCacheLignes(aParamsActualiser);
          this._cache.structureWAI.lignes = [];
          this._cache.structureWAI.totals = [];
          $(`#${this.ids.cadreSelection.escapeJQ()}0`).empty();
          const lElement = ObjetHtml_1.GHtml.getElement(this.idZoneActua);
          if (lElement) {
            ObjetHtml_1.GHtml.setHtml(
              lElement,
              this.construireZoneScrollInterneMobile(),
              { instance: this, ignorerScroll: true },
            );
          }
          this.actualiserLignesContenusWAI();
          return;
        }
        if (aZonesActualisation.contenu) {
          this._initCacheLignes(aParamsActualiser);
          this._cache.structureWAI.lignes = [];
        }
        const lFunc = (aCallbackContenu, aCallbackTotal) => {
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            var _a, _b, _c;
            if (aZonesActualisation.contenu) {
              const lJTotalDansScroll = $(
                `#${this.Nom.escapeJQ()} .${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeTotaleFd}.${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeHeaderFooterInScroll}`,
              );
              if (lJTotalDansScroll.length > 0) {
                lJTotalDansScroll.remove();
              }
              $(
                ObjetHtml_1.GHtml.getElement(
                  this.getIdGridFocus(aInfosZoneColonnes.indiceBloc),
                ),
              ).remove();
              const lElement = ObjetHtml_1.GHtml.getElement(
                (_a = this.ScrollV) === null || _a === void 0
                  ? void 0
                  : _a.getIdContenu(aInfosZoneColonnes.idScrollContenu),
              );
              if (lElement) {
                IEHtml_1.IEHtml.injectHTMLParams({
                  element: lElement,
                  html: aCallbackContenu
                    ? aCallbackContenu(aInfosZoneColonnes)
                    : '',
                  instance: this,
                  ignorerScroll: true,
                });
              }
            }
            if (aZonesActualisation.total && this._avecLigneTotal()) {
              this._cache.structureWAI.totals = [];
              const lElement =
                (_b = this.ScrollH) === null || _b === void 0
                  ? void 0
                  : _b.getIdZone(aInfosZoneColonnes.idScrollTotal);
              if (lElement) {
                ObjetHtml_1.GHtml.setHtml(
                  (_c = this.ScrollH) === null || _c === void 0
                    ? void 0
                    : _c.getIdZone(aInfosZoneColonnes.idScrollTotal),
                  aCallbackTotal ? aCallbackTotal(aInfosZoneColonnes) : '',
                  { instance: this, ignorerScroll: true },
                );
              }
            }
          });
        };
        lFunc();
        lFunc(
          (aInfosZoneColonnes) => {
            $(
              `#${this.ids.cadreSelection.escapeJQ() + aInfosZoneColonnes.indiceBloc}`,
            ).empty();
            return this.construireContenuListeInterne(aInfosZoneColonnes);
          },
          (aInfosZoneColonnes) =>
            this._construireContenuTotal(aInfosZoneColonnes).html,
        );
        this.actualiserLignesContenusWAI();
        this._controleHeightLigne();
      }
      _controleHeightLigne() {
        if (this.estMobile) {
          return;
        }
        if (this._cache.infosZonesColonnes.length < 2) {
          return;
        }
        if (!this.Donnees || !this.ListeTailles) {
          return;
        }
        const lTabModif = [];
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
        let iIndice,
          lNumeroLigne,
          lHeightMinLigne,
          lHeightMaxLigne,
          lHeightIds,
          lId;
        for (
          iIndice = lRangeLignes.debut;
          iIndice < lRangeLignes.fin;
          iIndice++
        ) {
          lNumeroLigne = this._cache.lignesVisibles[iIndice];
          lHeightMinLigne = Number.MAX_VALUE;
          lHeightMaxLigne = -1;
          lHeightIds = {};
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            lId = this.getIdCellule(
              aInfosZoneColonnes.colonnesVisibles[0],
              lNumeroLigne,
            );
            lHeightIds[lId] = $(
              ObjetHtml_1.GHtml.getElement(
                this.getIdCellule(
                  aInfosZoneColonnes.colonnesVisibles[0],
                  lNumeroLigne,
                ),
              ),
            ).height();
            lHeightMinLigne = Math.min(lHeightIds[lId], lHeightMinLigne);
            lHeightMaxLigne = Math.max(lHeightIds[lId], lHeightMaxLigne);
          });
          if (lHeightMinLigne < lHeightMaxLigne) {
            for (lId in lHeightIds) {
              if (lHeightIds[lId] < lHeightMaxLigne) {
                lTabModif.push({ id: lId + '_div', height: lHeightMaxLigne });
              }
            }
          }
          lHeightIds = null;
        }
        lTabModif.forEach((aElement) => {
          ObjetPosition_1.GPosition.setHeight(aElement.id, aElement.height);
        });
      }
      _entrerDateCalendrier(aParams) {
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
        this.fenetreDate = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_Date_1.ObjetFenetre_Date,
          {
            pere: this,
            evenement: this._evenementFenetreDate.bind(this, aParams),
          },
        );
        this.fenetreDate.setOptionsFenetre({
          callbackApresFermer: () => {
            delete this.fenetreDate;
          },
        });
        this.Donnees._initialiserObjetGraphique(aParams, this.fenetreDate);
        this.Donnees._setDonneesObjetGraphique(aParams, this.fenetreDate);
        this.fenetreDate.positionnerSousId(this.IdCellule);
      }
      construireCopieCSV() {
        ExportBlob_1.ExportBlob.create(
          this._construireCopieCSV(),
          'Export CSV',
          'text/csv',
        );
      }
      _getLibelleDraggable(aParamsCellule) {
        let lLibelle = this.Donnees.getLibelleDraggable(aParamsCellule);
        if (!lLibelle) {
          if (!this.estDonneeListeTableau(this.Donnees)) {
            return '&nbsp;';
          }
          const lEstColonneAutorisee = (aParams) => {
            const lType = this.Donnees.getTypeValeur(aParams);
            return (
              [
                ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche,
                ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
                  .CocheDeploiement,
              ].indexOf(
                lType !== null && lType !== void 0
                  ? lType
                  : ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte,
              ) < 0
            );
          };
          let lColonne = 0;
          if (
            this.estDonneeListeTableau(this.Donnees) &&
            this.Donnees.selectionParCellule(
              aParamsCellule.colonne,
              aParamsCellule.article,
            )
          ) {
            lColonne = aParamsCellule.colonne;
          } else if (this.ListeCreations && this.ListeCreations.length > 0) {
            lColonne = this.ListeCreations[0];
          }
          const lParams = this._getParamsCellule(
            lColonne,
            aParamsCellule.ligne,
            { surSuppression: true },
          );
          if (lEstColonneAutorisee(lParams)) {
            lLibelle = this.Donnees._getValeur(lParams);
          }
          if (!lLibelle) {
            this._cache.infosZonesColonnes.every((aInfosZoneColonnes) => {
              return aInfosZoneColonnes.colonnesVisibles.every(
                (aNumeroColonne) => {
                  const lParams = this._getParamsCellule(
                    aNumeroColonne,
                    aParamsCellule.ligne,
                    { surSuppression: true },
                  );
                  if (lEstColonneAutorisee(lParams)) {
                    lLibelle = this.Donnees._getValeur(lParams);
                  }
                  return !lLibelle;
                },
              );
            });
          }
        }
        if (!lLibelle) {
          lLibelle = '&nbsp;';
        }
        return lLibelle;
      }
      _eventKeyDownApplication(aEvent) {
        if (this._cache.rolloverVisible && !aEvent.ctrlKey) {
          this._gererRollover(false);
        } else if (
          !this._cache.rolloverVisible &&
          aEvent.ctrlKey &&
          !this._cache.mouseOUTListe &&
          this._avecRollover() &&
          MethodesObjet_1.MethodesObjet.isNumber(
            ObjetNavigateur_1.Navigateur.pointerX,
          ) &&
          MethodesObjet_1.MethodesObjet.isNumber(
            ObjetNavigateur_1.Navigateur.pointerY,
          )
        ) {
          let lElement = document.elementFromPoint(
            ObjetNavigateur_1.Navigateur.pointerX,
            ObjetNavigateur_1.Navigateur.pointerY,
          );
          if (!lElement) {
            return;
          }
          let lJElement = $(lElement);
          let lInfos = null;
          while (
            lJElement &&
            this.ScrollV &&
            lJElement.length > 0 &&
            lJElement.parents(
              '#' +
                this.ScrollV.getIdContenu(EGenreZoneScroll.contenu).escapeJQ(),
            ).length > 0
          ) {
            lElement = lJElement.get(0);
            if (
              lElement &&
              lElement.nodeName &&
              lElement.nodeName.toLowerCase() === 'td'
            ) {
              lInfos = this._extraireInfosId(lElement.id);
              if (lInfos) {
                break;
              }
            }
            lJElement = lJElement.parent();
          }
          if (lInfos) {
            this._gererRollover(true, lElement, lInfos);
          }
        }
      }
      _getColonneDePositionEvent(aEvent, aNode, aInfosZonesColonnes) {
        return this._getColonneDePositionLeft(
          ObjetPosition_1.GPosition.getPositionEventJQuery(aEvent).x,
          aNode,
          aInfosZonesColonnes,
        );
      }
      _getColonneDePositionLeft(aPosleft, aNode, aInfosZonesColonnes) {
        if (!MethodesObjet_1.MethodesObjet.isNumber(aPosleft)) {
          return -1;
        }
        let lNumeroColonne = -1;
        const lLeftBorne = Math.max(0, aPosleft - $(aNode).offset().left);
        aInfosZonesColonnes.gabaritColonnesTitre.every((aPos, aIndex) => {
          if (aPos && aPos.left >= 0) {
            if (aPos.left <= lLeftBorne) {
              lNumeroColonne = aIndex;
              return aPos.left + aPos.width <= lLeftBorne;
            }
          }
        });
        return lNumeroColonne;
      }
      _nodeTableTitrePourTri(aNode, aInfosZonesColonnes) {
        if (!this.ScrollH) {
          return;
        }
        this._cache.survoleColTitreTriVisible = -1;
        const lHeightNode = ObjetPosition_1.GPosition.getHeight(aNode);
        $(
          '#' +
            (
              this.ScrollH.getIdZone(aInfosZonesColonnes.idScrollTri) +
              '_conteneur'
            ).escapeJQ(),
        ).css(
          'top',
          lHeightNode - Math.round(this._options.heightTri) + 1 + 'px',
        );
        const lIdSurvol =
          this.ids.survolTitre.escapeJQ() + aInfosZonesColonnes.indiceBloc;
        const lStrSelecTrisSurvol = `#${this.Nom.escapeJQ()} .flecheSurvol_${aInfosZonesColonnes.indiceBloc}`;
        $('#' + lIdSurvol).height(lHeightNode);
        $(aNode).on(
          {
            'click contextmenu': function (aEvent) {
              aEvent.stopPropagation();
            },
            mousemove: function (aEvent) {
              if (lThis._cache.survoleColTitreTriVisible >= 0) {
                $('#' + lIdSurvol).hide();
                $(lStrSelecTrisSurvol).addClass(Divers_css_1.SD.srOnly);
              }
              aEvent.stopPropagation();
            },
          },
          `.${ObjetListe.StyleElementInteractifTitreSansTri}`,
        );
        const lThis = this;
        $(aNode).on({
          click: function (aEvent) {
            const lNumeroColonne = lThis._getColonneDePositionEvent(
              aEvent,
              this,
              aInfosZonesColonnes,
            );
            if (
              lNumeroColonne < 0 ||
              !lThis._cache.colonnesTri[lNumeroColonne]
            ) {
              if (lNumeroColonne < 0) {
                IE.log.addLog('_nodeTableTitrePourTri => colonne non trouvée');
              }
              return;
            }
            let lGenreTri = Enumere_TriElement_1.EGenreTriElement.Croissant;
            let lNumeroTri = lThis._triCourant.colonne.indexOf(lNumeroColonne);
            if (lNumeroTri === -1) {
              lNumeroTri = 0;
            }
            if (lThis._triCourant.colonne[lNumeroTri] === lNumeroColonne) {
              lGenreTri =
                lThis._triCourant.genre[lNumeroTri] ===
                Enumere_TriElement_1.EGenreTriElement.Croissant
                  ? Enumere_TriElement_1.EGenreTriElement.Decroissant
                  : Enumere_TriElement_1.EGenreTriElement.Croissant;
            }
            lThis.setColonneTri(lNumeroColonne, lGenreTri, lNumeroTri);
          },
          contextmenu: function (aEvent) {
            const lNumeroColonne = lThis._getColonneDePositionEvent(
              aEvent,
              this,
              aInfosZonesColonnes,
            );
            if (lNumeroColonne < 0) {
              IE.log.addLog('_nodeTableTitrePourTri => colonne non trouvée');
              return;
            }
            if (lThis._cache.colonnesTri[lNumeroColonne]) {
              lThis.afficherMenuContextuelTri(lNumeroColonne, aEvent);
            }
          },
          mouseleave: function () {
            if (lThis._cache.survoleColTitreTriVisible >= 0) {
              $('#' + lIdSurvol).hide();
              $(lStrSelecTrisSurvol).addClass(Divers_css_1.SD.srOnly);
            }
            lThis._cache.survoleColTitreTriVisible = -1;
          },
          mousemove: function (aEvent) {
            const lNumeroColonne = lThis._getColonneDePositionEvent(
              aEvent,
              this,
              aInfosZonesColonnes,
            );
            if (
              lNumeroColonne < 0 ||
              !lThis._cache.colonnesTri[lNumeroColonne]
            ) {
              if (lThis._cache.survoleColTitreTriVisible < 0) {
                $('#' + lIdSurvol).hide();
                $(lStrSelecTrisSurvol).addClass(Divers_css_1.SD.srOnly);
              }
              return;
            }
            const lPosition =
              aInfosZonesColonnes.gabaritColonnesTitre[lNumeroColonne];
            if (lPosition) {
              const lAncienneColSurvol = lThis._cache.survoleColTitreTriVisible;
              lThis._cache.survoleColTitreTriVisible = lNumeroColonne;
              $('#' + lIdSurvol)
                .show()
                .css({
                  left: lPosition.left + 'px',
                  width: lPosition.width + 'px',
                });
              if (lAncienneColSurvol >= 0) {
                $(
                  `#${lThis.getIdBtnTri(aInfosZonesColonnes.indiceBloc, lAncienneColSurvol).escapeJQ()}.flecheSurvol_${aInfosZonesColonnes.indiceBloc}`,
                ).addClass(Divers_css_1.SD.srOnly);
              }
              const lJSelcCurseurTriSurvol = $(
                `#${lThis.getIdBtnTri(aInfosZonesColonnes.indiceBloc, lNumeroColonne).escapeJQ()}.flecheSurvol_${aInfosZonesColonnes.indiceBloc}`,
              );
              if (lJSelcCurseurTriSurvol.length > 0) {
                if (lJSelcCurseurTriSurvol.data('dragEnCours')) {
                  lJSelcCurseurTriSurvol.addClass(Divers_css_1.SD.srOnly);
                } else {
                  lJSelcCurseurTriSurvol.removeClass(Divers_css_1.SD.srOnly);
                }
              }
            }
          },
        });
      }
      _getLigneElementParParseur(aParseur, aColonne) {
        let lLigne = -1;
        let lValeur;
        this._cache.lignesVisibles.every((aLigne) => {
          const lParams = this._getParamsCellule(aColonne, aLigne);
          lValeur = this.Donnees.getValeurPourParsing(lParams);
          if (lValeur && lValeur.toString) {
            lValeur = lValeur.toString();
          }
          lLigne = aLigne;
          if (
            lValeur &&
            ComparateurChaines_1.ComparateurChaines.compare(
              lValeur,
              aParseur,
            ) >= 0
          ) {
            return false;
          }
          return true;
        });
        return lLigne;
      }
      gererParsingSurEventKey(event) {
        let lColonne = this._options.parsingSurColonne;
        if (lColonne === ObjetListe.parsingSurColonneTri) {
          if (this._triCourant.nombreTri > 0) {
            lColonne = this._triCourant.colonne[0];
          } else {
            return;
          }
        } else if (MethodesObjet_1.MethodesObjet.isString(lColonne)) {
          lColonne = this.getNumeroColonneDIdColonne(lColonne);
        }
        if (lColonne === -1) {
          return;
        }
        if (!this.Donnees) {
          return;
        }
        const lCar = ComparateurChaines_1.ComparateurChaines.normalize(
          String.fromCharCode(event.which),
        );
        if (
          !event.altKey &&
          !event.ctrlKey &&
          event.which !== 0 &&
          lCar.search(/[a-z0-9 ]/gi) >= 0
        ) {
          uParseur += lCar;
          clearTimeout(uTimerParseur);
          uTimerParseur = setTimeout(this._initParseur, 500);
          if (!this._estColonneVisible(lColonne)) {
            return;
          }
          const lLigne = this._getLigneElementParParseur(uParseur, lColonne);
          if (lLigne < 0) {
            this._initParseur();
            return;
          }
          if (this.Donnees.avecMultiSelection()) {
            for (
              let iLigne = 0;
              iLigne < this._cache.lignesSelectionnees.length;
              iLigne++
            ) {
              if (this._etatSelectionCellule({ ligne: iLigne })) {
                this.selectionnerLigne({ ligne: iLigne, selectionner: false });
              }
            }
          }
          this._surSelection(lColonne, lLigne, {
            forcerMonoSelection: true,
            surInteractionUtilisateur: true,
          });
          this.surSelectionEvenement(lColonne, lLigne, false);
        } else {
          this._initParseur();
        }
      }
      _construireCopieCSV() {
        let lType, lContenuLigne, lTitresLigne, lValeur;
        const lResult = [];
        let lParamsCellule;
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        const lEstColonneExportee = (aNumeroColonne) => {
          return (
            this._estColonneVisible(aNumeroColonne) &&
            (!this._cache.declarationsColonnes[aNumeroColonne] ||
              !this._cache.declarationsColonnes[aNumeroColonne]
                .ignorerExportCSV)
          );
        };
        const lGetValCSV = function (aValue) {
          if (typeof aValue === 'number') {
            return aValue;
          }
          return '"' + aValue + '"';
        };
        if (this.ListeTitres) {
          for (
            let lNumeroLigne = 0;
            lNumeroLigne < this.ListeTitres.length;
            lNumeroLigne++
          ) {
            lContenuLigne = [];
            lTitresLigne = this.ListeTitres[lNumeroLigne];
            for (
              let lNumeroColonne = 0;
              lNumeroColonne < this.ListeTailles.length;
              lNumeroColonne++
            ) {
              if (lEstColonneExportee(lNumeroColonne)) {
                let lLibelle = '';
                if (lTitresLigne && lTitresLigne[lNumeroColonne]) {
                  const lFuncGetLibelleCSV =
                    lTitresLigne[lNumeroColonne].getLibelleCSV;
                  if (!!lFuncGetLibelleCSV) {
                    lLibelle = lFuncGetLibelleCSV() || '';
                  }
                  if (!lLibelle) {
                    lLibelle = lTitresLigne[lNumeroColonne].libelle || '';
                  }
                }
                lContenuLigne.push(lLibelle);
              }
            }
            lResult.push(lContenuLigne.join(';'));
          }
        }
        if (this.Donnees) {
          for (let i = 0; i < this._cache.lignesVisibles.length; i++) {
            const lNumeroLigne = this._cache.lignesVisibles[i];
            lContenuLigne = [];
            for (
              let lNumeroColonne = 0;
              lNumeroColonne < this.ListeTailles.length;
              lNumeroColonne++
            ) {
              if (lEstColonneExportee(lNumeroColonne)) {
                lParamsCellule = this._getParamsCellule(
                  lNumeroColonne,
                  lNumeroLigne,
                  {
                    surEdition: false,
                    surProportion: false,
                    surExportCSV: true,
                  },
                );
                lType = this.Donnees.getTypeValeur(lParamsCellule);
                const lContenuValeurs = [];
                switch (lType) {
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
                    .CocheDeploiement:
                    break;
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche:
                    lValeur = this.Donnees._getValeur(lParamsCellule);
                    if (
                      lValeur === true ||
                      lValeur ===
                        ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte
                    ) {
                      lContenuValeurs.push('X');
                    } else if (
                      lValeur ===
                      ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
                    ) {
                      lContenuValeurs.push('P');
                    } else {
                      lContenuValeurs.push('');
                    }
                    break;
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Note:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
                    .ZoneTexte:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Image:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Html:
                    lValeur =
                      this.Donnees.getValeurPourAffichage(lParamsCellule);
                    lContenuValeurs.push(lGetValCSV(lValeur));
                    break;
                  default:
                    lContenuValeurs.push(
                      this.Donnees._getValeur(lParamsCellule),
                    );
                    break;
                }
                lContenuLigne.push(lContenuValeurs.join(' - '));
              }
            }
            lResult.push(lContenuLigne.join(';'));
          }
        }
        if (lDonneesTableau && this._avecLigneTotal()) {
          this.getListeLignesTotal().parcourir((aArticle, aIndexLigne) => {
            const lArticle = !(aArticle === null || aArticle === void 0
              ? void 0
              : aArticle.totalbidon)
              ? aArticle
              : undefined;
            lContenuLigne = [];
            for (
              let lNumeroColonne = 0;
              lNumeroColonne < this.ListeTailles.length;
              lNumeroColonne++
            ) {
              if (lEstColonneExportee(lNumeroColonne)) {
                const lParams = this._getParamsCellule(lNumeroColonne, -1, {
                  surTotal: true,
                  surExportCSV: true,
                });
                if (lArticle) {
                  lParams.ligne = aIndexLigne;
                  lParams.article = lArticle;
                }
                const lContenuTotal = lDonneesTableau.getContenuTotal(lParams);
                lContenuLigne.push(lGetValCSV(lContenuTotal));
              }
            }
            lResult.push(lContenuLigne.join(';'));
          });
        }
        return ObjetChaine_1.GChaine.enleverEntites(
          lResult.join('\r\n').replace(/&nbsp;/gi, ''),
        );
      }
      _colonneEnFusionAvecColonnePrecedente(aTitresLigne, aNumeroColonne) {
        let lNumeroColVisiblePrec = aNumeroColonne - 1;
        while (
          lNumeroColVisiblePrec > 0 &&
          !this._estColonneVisible(lNumeroColVisiblePrec)
        ) {
          lNumeroColVisiblePrec += -1;
        }
        if (
          !aTitresLigne ||
          !aTitresLigne[aNumeroColonne] ||
          !aTitresLigne[lNumeroColVisiblePrec]
        ) {
          return false;
        }
        if (
          aTitresLigne[aNumeroColonne].fusion ===
          TypeFusionTitreListe_1.TypeFusionTitreListe.FusionGauche
        ) {
          return true;
        }
        if (
          aTitresLigne[aNumeroColonne].avecFusionColonne &&
          (((aTitresLigne[aNumeroColonne].libelle ||
            aTitresLigne[aNumeroColonne].libelle === '') &&
            aTitresLigne[aNumeroColonne].libelle ===
              aTitresLigne[lNumeroColVisiblePrec].libelle) ||
            (aTitresLigne[aNumeroColonne].libelleHtml &&
              aTitresLigne[aNumeroColonne].libelleHtml ===
                aTitresLigne[lNumeroColVisiblePrec].libelleHtml) ||
            (aTitresLigne[aNumeroColonne].getLibelleHtml &&
              jsx_1.JSXUtils.DictionaryCallbacks.getStrSimulation(() =>
                aTitresLigne[aNumeroColonne].getLibelleHtml(),
              ) ===
                jsx_1.JSXUtils.DictionaryCallbacks.getStrSimulation(() => {
                  var _a, _b;
                  var _c;
                  return (_c =
                    (_b = (_a = aTitresLigne[lNumeroColVisiblePrec])
                      .getLibelleHtml) === null || _b === void 0
                      ? void 0
                      : _b.call(_a)) !== null && _c !== void 0
                    ? _c
                    : '';
                })) ||
            (aTitresLigne[aNumeroColonne].classeCssImage &&
              aTitresLigne[aNumeroColonne].classeCssImage ===
                aTitresLigne[lNumeroColVisiblePrec].classeCssImage))
        ) {
          return true;
        }
        return false;
      }
      _construireTaillesGrid(aInfosZoneColonnes) {
        const lDecalageBordureHDuContenu =
          this._options.borduresCellule_horizontal - 1;
        const lResult = {
          width: 0,
          tabWidth: [],
          styleGrid: '',
          gabaritColonne: [],
        };
        const lTabStyleTemplate = [];
        aInfosZoneColonnes.colonnesVisibles.forEach(
          (aNumeroColonne, aIndex) => {
            let lWidthCol =
              this._cache.taillesColonne[aNumeroColonne].px +
              lDecalageBordureHDuContenu +
              2 * this._options.paddingCelluleLR;
            if (
              aIndex < aInfosZoneColonnes.colonnesVisibles.length - 1 ||
              (aInfosZoneColonnes.estBlocFixe &&
                !aInfosZoneColonnes.dernierBloc)
            ) {
              lWidthCol += 1;
            }
            if (
              aInfosZoneColonnes.estBlocFixeDroite &&
              aNumeroColonne === aInfosZoneColonnes.indiceColonneDebut
            ) {
              lWidthCol += 1;
            }
            lResult.gabaritColonne[aNumeroColonne] = {
              width: lWidthCol,
              left:
                lResult.width + (aInfosZoneColonnes.estBlocFixeDroite ? 1 : 0),
            };
            lResult.tabWidth.push({
              width: lWidthCol,
              colonne: aNumeroColonne,
            });
            lTabStyleTemplate.push(lWidthCol + 'px');
            lResult.width += lWidthCol;
          },
        );
        lResult.styleGrid =
          lTabStyleTemplate.length > 0
            ? 'grid-template-columns:' + lTabStyleTemplate.join(' ') + ';'
            : '';
        return lResult;
      }
      _construireTri(aInfosZoneColonnes, aNumeroColonne, aIndiceTri) {
        const lTriInactif = aIndiceTri < 0;
        const lTriCroissant = lTriInactif
          ? true
          : this._triCourant.genre[aIndiceTri] ===
            Enumere_TriElement_1.EGenreTriElement.Croissant;
        const lAvecDragTri = this._cache.infosZonesColonnes.length < 2;
        return IE.jsx.str(
          'div',
          {
            id: this.getIdBtnTri(aInfosZoneColonnes.indiceBloc, aNumeroColonne),
            tabindex: '0',
            ie_nodeafter: this.jsxGetNodeAfterCurseurTri.bind(
              this,
              aNumeroColonne,
              aIndiceTri,
              aInfosZoneColonnes.indiceBloc,
            ),
            ie_draggable:
              lAvecDragTri && !lTriInactif
                ? this.jsxDragCurseurTriDraggable.bind(
                    this,
                    aNumeroColonne,
                    aIndiceTri,
                    aInfosZoneColonnes.indiceBloc,
                  )
                : false,
            class: [
              'flecheTri',
              lTriInactif
                ? `sr-only flecheSurvol_${aInfosZoneColonnes.indiceBloc}`
                : 'flecheTriNonSurvol AvecMain',
            ],
            style: { height: this._options.heightTri },
            role: 'button',
            'aria-pressed': lTriInactif || lTriCroissant ? false : 'true',
            'aria-haspopup':
              !lTriInactif && this._triCourant.nombreTri > 1 ? 'true' : false,
            ie_tooltiplabel: lTriInactif
              ? GlossaireListe_1.TradGlossaireListe.wai.TrierColonne
              : GlossaireListe_1.TradGlossaireListe.wai.WAI_Tri_D.format(
                  aIndiceTri + 1,
                ),
          },
          this._getDessinCurseurTri({
            triCroissant: lTriCroissant,
            tri: lTriInactif
              ? NSListe.FlecheTri.survol
              : aIndiceTri === 0
                ? NSListe.FlecheTri.principal
                : NSListe.FlecheTri.secondaire,
          }),
        );
      }
      _construireTitre(aInfosZoneColonnes, aAvecTri) {
        var _a, _b;
        const T = [];
        let I;
        const lAvecTri = this.avecTriColonne();
        let iLigne, lTitresLigne, lNumeroDerniereColonneVisible;
        const lTaillesGrid = this._construireTaillesGrid(aInfosZoneColonnes);
        aInfosZoneColonnes.gabaritColonnesTitre = lTaillesGrid.gabaritColonne;
        this._cache.heightLigneTitre = null;
        const lAvecLigneCreation = this._avecLigneCreationTitreEnLigne();
        if (!this.ListeTitres && !lAvecLigneCreation) {
          return '';
        }
        const lCssTitreZone = ['liste-titre-zone'];
        if (!this.ListeTitres && !lAvecLigneCreation) {
          lCssTitreZone.push('hide');
        }
        if (this._cache.avecScrollHorizontal) {
          lCssTitreZone.push('scroll-h');
        }
        if (aInfosZoneColonnes.dernierBloc) {
          lCssTitreZone.push('b-right');
        }
        if (aInfosZoneColonnes.indiceBloc === 0) {
          lCssTitreZone.push('b-left');
        }
        const lGetIdTitre = (aLigne, aCol) => {
          return `${this.Nom}_titrecell_${aLigne}_${aCol}`;
        };
        let iColonne;
        const lColonnesGabaritCalculFusion = {};
        if (this.ListeTitres) {
          for (iLigne = 0; iLigne < this.ListeTitres.length; iLigne++) {
            lTitresLigne = this.ListeTitres[iLigne];
            const lMaxIndiceCol = Math.min(
              lTitresLigne.length,
              aInfosZoneColonnes.indiceColonneFin + 1,
            );
            lNumeroDerniereColonneVisible = -1;
            if (
              aInfosZoneColonnes.dernierBloc ||
              (!aInfosZoneColonnes.dernierBloc &&
                !aInfosZoneColonnes.estBlocFixe)
            ) {
              for (
                I = aInfosZoneColonnes.indiceColonneDebut;
                lTitresLigne && I < lMaxIndiceCol;
                I++
              ) {
                if (
                  !this._colonneEnFusionAvecColonnePrecedente(
                    lTitresLigne,
                    I,
                  ) &&
                  (this._estColonneVisible(I) ||
                    this._colonneEnFusionAvecColonnePrecedente(
                      lTitresLigne,
                      I + 1,
                    ))
                ) {
                  lNumeroDerniereColonneVisible = I;
                }
              }
            }
            let lIndiceBasCol = -1;
            for (
              let I = aInfosZoneColonnes.indiceColonneDebut;
              lTitresLigne && I < lMaxIndiceCol;
              I++
            ) {
              const lDescripteurTitre = lTitresLigne[I];
              const lEstColonneVisible = this._estColonneVisible(I);
              if (lEstColonneVisible) {
                lIndiceBasCol += 1;
              }
              if (
                ((!lDescripteurTitre.fusion &&
                  !this._colonneEnFusionAvecColonnePrecedente(
                    lTitresLigne,
                    I,
                  )) ||
                  (I === aInfosZoneColonnes.indiceColonneDebut &&
                    lDescripteurTitre.fusion ===
                      TypeFusionTitreListe_1.TypeFusionTitreListe
                        .FusionGauche)) &&
                (lEstColonneVisible ||
                  this._colonneEnFusionAvecColonnePrecedente(
                    lTitresLigne,
                    I + 1,
                  ))
              ) {
                let lNbCol = lEstColonneVisible ? 1 : 0;
                let lNbLigne = 1;
                for (let j = iLigne + 1; j < this.ListeTitres.length; j++) {
                  if (
                    this.ListeTitres[j][I].fusion !==
                    TypeFusionTitreListe_1.TypeFusionTitreListe.FusionHaute
                  ) {
                    break;
                  } else {
                    lNbLigne++;
                  }
                }
                const lId = lGetIdTitre(iLigne, I);
                for (
                  let iColonne = I + 1;
                  iColonne < lMaxIndiceCol;
                  iColonne++
                ) {
                  const lEstColonneEnFusionPrec =
                    this._colonneEnFusionAvecColonnePrecedente(
                      lTitresLigne,
                      iColonne,
                    );
                  const lEstColVisibleBoucle =
                    this._estColonneVisible(iColonne);
                  if (lEstColonneEnFusionPrec) {
                    if (lEstColVisibleBoucle) {
                      lNbCol++;
                    }
                  } else {
                    break;
                  }
                }
                if (lNbCol === 0) {
                  continue;
                }
                const lChaineTitre = lDescripteurTitre.libelle;
                const lClassImage = lDescripteurTitre.classeCssImage;
                const lAvecChaineHtml = !!(
                  lDescripteurTitre.getLibelleHtml ||
                  lDescripteurTitre.libelleHtml
                );
                let lNbLignesTexte = 0;
                if (lChaineTitre && !lClassImage && !lAvecChaineHtml) {
                  lNbLignesTexte =
                    lDescripteurTitre.nbLignes === 0
                      ? 0
                      : lDescripteurTitre.nbLignes > 0 &&
                          MethodesObjet_1.MethodesObjet.isNumber(
                            lDescripteurTitre.nbLignes,
                          )
                        ? lDescripteurTitre.nbLignes
                        : 1;
                }
                const lCss = ['Titre liste_gridTitre_cel'];
                if (iLigne > 0) {
                  lCss.push('b-top');
                }
                if (I !== lNumeroDerniereColonneVisible) {
                  lCss.push('b-right');
                }
                if (
                  aInfosZoneColonnes.estBlocFixeDroite &&
                  I === aInfosZoneColonnes.indiceColonneDebut
                ) {
                  lCss.push('b-left');
                }
                const lIndiceGridCol = lIndiceBasCol + 1;
                let lGridColumn = lIndiceGridCol + '';
                if (lNbCol > 1) {
                  lGridColumn += ' / ' + (lIndiceGridCol + lNbCol);
                }
                let lGridRow = iLigne + 1;
                let lGridRowStr = iLigne + 1 + '';
                if (lNbLigne > 1) {
                  lGridRowStr += ' / ' + (lGridRow + lNbLigne);
                }
                const lIndicColVisible =
                  this.getIndiceColonneVisibleDeColonne(I);
                if (!this._cache.structureWAI.titres[iLigne]) {
                  this._cache.structureWAI.titres[iLigne] = {
                    ids: [],
                    estLigneAIgnorer: true,
                  };
                }
                this._cache.structureWAI.titres[iLigne].ids[lIndicColVisible] =
                  lId;
                this._cache.structureWAI.titres[iLigne].estLigneAIgnorer =
                  false;
                const lHtmlSpan = [];
                for (
                  let lILigneSpan = 0;
                  lILigneSpan < lNbLigne;
                  lILigneSpan++
                ) {
                  for (
                    let lIColonneSpan = 0;
                    lIColonneSpan < lNbCol;
                    lIColonneSpan++
                  ) {
                    if (lILigneSpan > 0 || lIColonneSpan > 0) {
                      const lNumLigne = iLigne + lILigneSpan;
                      const lIndiceColVisibleSpan =
                        lIndicColVisible + lIColonneSpan;
                      const lIdColBidon =
                        lGetIdTitre(
                          iLigne + lILigneSpan,
                          lIndiceColVisibleSpan,
                        ) + '_wai';
                      if (!this._cache.structureWAI.titres[lNumLigne]) {
                        this._cache.structureWAI.titres[lNumLigne] = {
                          ids: [],
                          estLigneAIgnorer: true,
                        };
                      }
                      this._cache.structureWAI.titres[lNumLigne].ids[
                        lIndiceColVisibleSpan
                      ] = lIdColBidon;
                      lHtmlSpan.push(
                        IE.jsx.str('div', {
                          role: 'columnheader',
                          id: lIdColBidon,
                          'aria-labelledby': lILigneSpan > 0 ? false : lId,
                        }),
                      );
                    }
                  }
                }
                const lGetClassTriGridTitre = function (aCol) {
                  return this._triCourant.colonne.includes(I)
                    ? 'liste_gridTitre_cel-tri'
                    : '';
                }.bind(this, I);
                let lAriaLabelTitre = '';
                if (lDescripteurTitre.title) {
                  lAriaLabelTitre = lDescripteurTitre.title;
                }
                let lEstTooltipDyn = false;
                let lFuncTooltipLabel = null;
                if (lDescripteurTitre.titleHtml) {
                  if (
                    MethodesObjet_1.MethodesObjet.isFunction(
                      lDescripteurTitre.titleHtml,
                    )
                  ) {
                    lFuncTooltipLabel = lDescripteurTitre.titleHtml;
                    lEstTooltipDyn = true;
                  } else if (
                    MethodesObjet_1.MethodesObjet.isString(
                      lDescripteurTitre.titleHtml,
                    )
                  ) {
                    lFuncTooltipLabel = () => lDescripteurTitre.titleHtml;
                  }
                }
                const lAttrTitre = lAvecTri
                  ? () => {
                      let lAriaSort = null;
                      if (aAvecTri && this._cache.colonnesTri[I]) {
                        const lNumeroTri = this._triCourant.colonne.indexOf(I);
                        if (lNumeroTri >= 0) {
                          const lTriCroissant =
                            this._triCourant.genre[lNumeroTri] ===
                            Enumere_TriElement_1.EGenreTriElement.Croissant;
                          lAriaSort = lTriCroissant
                            ? 'ascending'
                            : 'descending';
                        } else {
                          lAriaSort = 'none';
                        }
                      }
                      return { 'aria-sort': lAriaSort };
                    }
                  : false;
                const lIdTooltip =
                  lAriaLabelTitre || lFuncTooltipLabel
                    ? `${lId}_tooltip_t`
                    : '';
                let lHtmlTooltip = '';
                if (lIdTooltip) {
                  const lAttrs = {
                    id: lIdTooltip,
                    'aria-hidden': 'true',
                    class: Divers_css_1.SD.srOnly,
                  };
                  if (
                    !lEstTooltipDyn &&
                    (lAriaLabelTitre || lFuncTooltipLabel)
                  ) {
                    lHtmlTooltip = IE.jsx.str(
                      'div',
                      Object.assign({}, lAttrs),
                      lAriaLabelTitre ||
                        (lFuncTooltipLabel === null ||
                        lFuncTooltipLabel === void 0
                          ? void 0
                          : lFuncTooltipLabel()),
                    );
                  } else if (lEstTooltipDyn && lFuncTooltipLabel) {
                    lHtmlTooltip = IE.jsx.str(
                      'div',
                      Object.assign({}, lAttrs, {
                        class: Divers_css_1.SD.srOnly,
                        ie_html: lFuncTooltipLabel,
                      }),
                    );
                  }
                }
                T.push(
                  IE.jsx.str(
                    'div',
                    {
                      id: lId,
                      ie_attr: lAttrTitre,
                      role: 'columnheader',
                      'aria-colspan': lNbCol > 1 ? lNbCol : false,
                      'aria-rowspan': lNbLigne > 1 ? lNbLigne : false,
                      class: lCss,
                      ie_class: aAvecTri ? lGetClassTriGridTitre : false,
                      style:
                        this._composePaddingCellule() +
                        'grid-column:' +
                        lGridColumn +
                        ';' +
                        'grid-row:' +
                        lGridRowStr +
                        ';' +
                        'min-height:' +
                        this._options.hauteurCelluleTitreStandard +
                        'px;',
                      'data-tooltip': lIdTooltip
                        ? Tooltip_1.Tooltip.Type.default
                        : false,
                      'data-tooltip-id': lIdTooltip || false,
                      'aria-labelledby': lIdTooltip || false,
                    },
                    () => {
                      var _a;
                      const lAvecTitleExistant = !!(
                        lDescripteurTitre.title || lDescripteurTitre.titleHtml
                      );
                      const lChaineHtml =
                        ((_a = lDescripteurTitre.getLibelleHtml) === null ||
                        _a === void 0
                          ? void 0
                          : _a.call(lDescripteurTitre)) ||
                        lDescripteurTitre.libelleHtml;
                      let lEstContenuEllipsisCss = lNbLignesTexte > 1;
                      let lContenuTitre = lChaineHtml ? lChaineHtml : '';
                      if (lClassImage) {
                        lContenuTitre += IE.jsx.str(
                          'div',
                          {
                            class: lClassImage,
                            style:
                              (lDescripteurTitre.largeurClasseCssImage
                                ? 'width:' +
                                  lDescripteurTitre.largeurClasseCssImage +
                                  'px;'
                                : '') + 'margin-left:auto;margin-right:auto;',
                          },
                          '\u00A0',
                        );
                      } else {
                        if (!lChaineHtml) {
                          if (lDescripteurTitre.estCoche) {
                            lContenuTitre += IE.jsx.str(
                              IEHtml_CheckboxRadio_1.Checkbox,
                              {
                                ie_model:
                                  this.jsxGetModelCocheTitreClassique.bind(
                                    this,
                                    this,
                                    I,
                                  ),
                                ie_attr:
                                  this.jsxGetAttrCocheTitreClassique.bind(
                                    this,
                                    I,
                                  ),
                              },
                            );
                          } else {
                            if (lEstContenuEllipsisCss) {
                              lContenuTitre += IE.jsx.str(
                                'span',
                                {
                                  class: [
                                    Divers_css_1.SD.ellipsisMultilignes,
                                    Divers_css_1.SD.ellipsisSansHyphens,
                                    lAvecTitleExistant
                                      ? IEHtmlComposants_1.SIEHtmlComposants
                                          .ellipsisCancelTitle
                                      : '',
                                  ],
                                  style: {
                                    '--clamp-number':
                                      lNbLignesTexte !== 2
                                        ? lNbLignesTexte
                                        : undefined,
                                  },
                                },
                                lChaineTitre,
                              );
                            } else {
                              lContenuTitre += IE.jsx.str(
                                'span',
                                null,
                                lChaineTitre,
                              );
                            }
                          }
                        }
                      }
                      return IE.jsx.str(
                        IE.jsx.fragment,
                        null,
                        IE.jsx.str(
                          'div',
                          {
                            style:
                              (lAvecChaineHtml &&
                                lDescripteurTitre.ignorerOverflowHidden) ||
                              lDescripteurTitre.estCoche
                                ? false
                                : 'overflow:hidden;',
                            role: 'presentation',
                            ie_ellipsis: lNbLignesTexte === 1,
                            'data-tooltip-disabled':
                              !!lAriaLabelTitre && lNbLignesTexte === 1
                                ? 'true'
                                : false,
                          },
                          lContenuTitre,
                          lAriaLabelTitre
                            ? IE.jsx.str(
                                'p',
                                { class: 'sr-only' },
                                '\u00A0',
                                lAriaLabelTitre,
                              )
                            : '',
                        ),
                        lHtmlTooltip,
                        lHtmlSpan.length > 0
                          ? IE.jsx.str(
                              'div',
                              {
                                'aria-hidden': 'true',
                                role: 'presentation',
                                class: Divers_css_1.SD.srOnly,
                              },
                              lHtmlSpan.join(''),
                            )
                          : '',
                      );
                    },
                  ),
                );
                if (
                  !lColonnesGabaritCalculFusion[I] &&
                  lNbCol > 1 &&
                  iLigne === this.ListeTitres.length - 1 &&
                  aInfosZoneColonnes.gabaritColonnesTitre[I]
                ) {
                  const lLeft = aInfosZoneColonnes.gabaritColonnesTitre[I].left;
                  let lWidth = 0;
                  for (let iColonne = I; iColonne < I + lNbCol; iColonne++) {
                    lColonnesGabaritCalculFusion[iColonne] = true;
                    if (aInfosZoneColonnes.gabaritColonnesTitre[iColonne]) {
                      lWidth +=
                        aInfosZoneColonnes.gabaritColonnesTitre[iColonne].width;
                    }
                  }
                  for (iColonne = I; iColonne < I + lNbCol; iColonne++) {
                    if (aInfosZoneColonnes.gabaritColonnesTitre[iColonne]) {
                      aInfosZoneColonnes.gabaritColonnesTitre[iColonne] = {
                        width: lWidth,
                        left: lLeft,
                      };
                    }
                  }
                }
              }
            }
          }
          if (this._cache.infosZonesColonnes.length > 1) {
            for (iLigne = 0; iLigne < this.ListeTitres.length; iLigne++) {
              T.push(
                IE.jsx.str('div', {
                  class: 'liste_titreGabLigne',
                  style: 'grid-column:1; grid-row:' + (iLigne + 1),
                }),
              );
            }
          }
        }
        const lPaddingLeft =
            aInfosZoneColonnes.indiceBloc === 0
              ? this._options.borduresContenu_left - 1
              : 0,
          lPaddingRight = aInfosZoneColonnes.dernierBloc
            ? this._options.borduresContenu_right - 1
            : 0;
        return IE.jsx.str(
          'div',
          {
            id: this.ids.titre + aInfosZoneColonnes.indiceBloc,
            style:
              'position:relative; ' +
              (lPaddingLeft > 0 ? 'padding-left:' + lPaddingLeft + 'px;' : '') +
              (lPaddingRight > 0
                ? 'padding-right:' + lPaddingRight + 'px;'
                : ''),
            role: 'presentation',
          },
          IE.jsx.str(
            'div',
            {
              id:
                (_a = this.ScrollH) === null || _a === void 0
                  ? void 0
                  : _a.getIdZone(aInfosZoneColonnes.idScrollTitre),
              class: lCssTitreZone.join(' '),
              role: 'presentation',
            },
            IE.jsx.str(
              'div',
              {
                class: 'liste-titre-contenu',
                id:
                  (_b = this.ScrollH) === null || _b === void 0
                    ? void 0
                    : _b.getIdContenu(aInfosZoneColonnes.idScrollTitre),
                role: 'presentation',
              },
              IE.jsx.str(
                'div',
                {
                  class: 'liste_gridTitre',
                  role: 'presentation',
                  ie_node:
                    this._cache.infosZonesColonnes.length > 1
                      ? this.jsxGetNodeTableTitre.bind(
                          this,
                          aInfosZoneColonnes.indiceBloc,
                        )
                      : false,
                  ie_nodeafter: this.jsxGetNodeAfterTableTitre.bind(
                    this,
                    aInfosZoneColonnes.indiceBloc,
                  ),
                  style:
                    lTaillesGrid.styleGrid +
                    (lTaillesGrid.width > 0
                      ? ObjetStyle_1.GStyle.composeWidth(lTaillesGrid.width)
                      : ''),
                  'data-tooltip-align': Tooltip_1.Tooltip.Align.top,
                },
                T.join(''),
              ),
              lAvecLigneCreation
                ? this.composeCreation(-1, lTaillesGrid, !!this.ListeTitres)
                : '',
              this._avecRollover()
                ? IE.jsx.str(
                    'div',
                    {
                      id:
                        this.ids.rolloverTitre + aInfosZoneColonnes.indiceBloc,
                      class: 'liste_conteneur_rollover titre',
                    },
                    IE.jsx.str('div', null),
                  )
                : '',
              aAvecTri && ObjetSupport_1.Support.supportPointerEventsNone
                ? IE.jsx.str('div', {
                    id: this.ids.survolTitre + aInfosZoneColonnes.indiceBloc,
                    class: 'voileBleuTitre',
                  })
                : '',
            ),
          ),
          () => {
            var _a, _b, _c;
            if (aAvecTri) {
              return IE.jsx.str(
                'div',
                {
                  id:
                    ((_a = this.ScrollH) === null || _a === void 0
                      ? void 0
                      : _a.getIdZone(aInfosZoneColonnes.idScrollTri)) +
                    '_conteneur',
                  class: 'conteneurTri_scroll',
                  role: 'presentation',
                },
                IE.jsx.str(
                  'div',
                  {
                    id:
                      (_b = this.ScrollH) === null || _b === void 0
                        ? void 0
                        : _b.getIdZone(aInfosZoneColonnes.idScrollTri),
                    role: 'presentation',
                  },
                  IE.jsx.str(
                    'div',
                    {
                      id:
                        (_c = this.ScrollH) === null || _c === void 0
                          ? void 0
                          : _c.getIdContenu(aInfosZoneColonnes.idScrollTri),
                      class: 'tri_scroll_contenu',
                      role: 'presentation',
                      style: `height:${this._options.heightTri}px;${lTaillesGrid.width > 0 ? ObjetStyle_1.GStyle.composeWidth(lTaillesGrid.width) : ''}`,
                    },
                    IE.jsx.str(
                      'div',
                      {
                        id:
                          this.ids.curseurTri +
                          aInfosZoneColonnes.indiceBloc +
                          '_row',
                        role: 'presentation',
                      },
                      ' ',
                      (aTabTri) => {
                        aInfosZoneColonnes.colonnesVisibles.forEach(
                          (aNumeroColonne) => {
                            if (this._cache.colonnesTri[aNumeroColonne]) {
                              const lNumeroTri =
                                this._triCourant.colonne.indexOf(
                                  aNumeroColonne,
                                );
                              aTabTri.push(
                                this._construireTri(
                                  aInfosZoneColonnes,
                                  aNumeroColonne,
                                  lNumeroTri,
                                ),
                              );
                            }
                          },
                        );
                      },
                    ),
                  ),
                ),
              );
            }
            return '';
          },
        );
      }
      _getJeuxCouleurNonSelection(aParamsCellule) {
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        let lCouleurs = null;
        if (
          this._options.alternanceCouleurLigneContenu &&
          this._options.avecCouleurAlternanceParDefaut
        ) {
          lCouleurs =
            this._cache.couleursAlternanceParLigne[aParamsCellule.ligne] ===
            true
              ? this._options.couleurAlternance0
              : this._options.couleurAlternance1;
        } else if (
          this.Donnees.avecEdition(aParamsCellule) &&
          !this._getNonEditable()
        ) {
          lCouleurs = this._options.alternanceCouleurLigneContenu
            ? this._cache.couleursAlternanceParLigne[aParamsCellule.ligne] ===
              true
              ? this._options.couleursListe.editableAlternee1
              : this._options.couleursListe.editableAlternee2
            : this._options.couleursListe.editable;
        } else {
          lCouleurs = this._options.alternanceCouleurLigneContenu
            ? this._cache.couleursAlternanceParLigne[aParamsCellule.ligne] ===
              true
              ? this._options.couleursListe.nonEditableAlternee1
              : this._options.couleursListe.nonEditableAlternee2
            : this._options.couleursListe.nonEditable;
        }
        const LCouleurCellule = lDonneesTableau
          ? lDonneesTableau.getCouleurCellule(
              aParamsCellule,
              new _ObjetCouleur_1.ObjectCouleurCellule(
                lCouleurs.fond,
                lCouleurs.texte,
                lCouleurs.bordure,
              ),
            )
          : null;
        if (
          LCouleurCellule !== null &&
          LCouleurCellule !== undefined &&
          lDonneesTableau
        ) {
          switch (LCouleurCellule) {
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Blanc:
              return this._options.couleursListe.editable;
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Gris:
              return this._options.couleursListe.nonEditable;
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule
              .Deploiement:
              return this._options.couleursListe.cumul[
                lDonneesTableau.getNiveauDeploiement(aParamsCellule)
              ];
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Fixe:
              return this._options.couleursListe.colonneFixe;
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Total:
              return this._options.couleursListe.total;
            default:
              return LCouleurCellule;
          }
        } else {
          return lCouleurs;
        }
      }
      _getJeuxCouleur(aParamsCellule, aEstSelectionne) {
        const lJeuxCouleur = this._getJeuxCouleurNonSelection(aParamsCellule);
        if (aEstSelectionne) {
          return new _ObjetCouleur_1.ObjectCouleurCellule(
            '',
            '',
            lJeuxCouleur.bordure,
          );
        }
        return lJeuxCouleur;
      }
      _composePaddingCellule() {
        return ObjetChaine_1.GChaine.format('padding: %spx %spx;', [
          this._options.paddingCelluleTB,
          this._options.paddingCelluleLR,
        ]);
      }
      getPositionScrollV() {
        const lBackupScroll = this._backupScroll({
          conserverPositionScroll: true,
        });
        return (
          (lBackupScroll === null || lBackupScroll === void 0
            ? void 0
            : lBackupScroll.scrollTop) || 0
        );
      }
      setPositionScrollV(aPosition) {
        const lBackupScroll = this._backupScroll({
          conserverPositionScroll: true,
        });
        if (lBackupScroll) {
          lBackupScroll.scrollTop = aPosition;
          this._setScroll(lBackupScroll);
        }
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
        return this._setDonnees(undefined);
      }
      resize() {
        this._surPreResize();
        this._surPostResize();
      }
      surPreResize() {
        this._surPreResize();
      }
      surPostResize() {
        this._surPostResize();
      }
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
          survoleColTitreTriVisible: -1,
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
              lCacheRef.node_gab_start = null;
              lCacheRef.node_gab_end = null;
              lCacheRef.hauteurMoyenneLigne = 20;
              lCacheRef.getHeightStructure = (aStructure) => {
                return aStructure.height < 0
                  ? lCacheRef.hauteurMoyenneLigne * aStructure.nbLignes
                  : aStructure.height;
              };
            },
          },
        };
        this.initCacheStructureWAI();
        this._cache.refresh.init();
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
        if (!this.estMobile) {
          if (this.Nom) {
            if (this.avecEventResizeNavigateur()) {
              Invocateur_1.Invocateur.abonner(
                Invocateur_1.ObjetInvocateur.events.startResizeNavigateur,
                () => {
                  this._surPreResize();
                },
                this,
              );
              Invocateur_1.Invocateur.abonner(
                Invocateur_1.ObjetInvocateur.events.endResizeNavigateur,
                () => {
                  this._surPostResize();
                },
                this,
              );
            }
            Invocateur_1.Invocateur.abonner(
              ObjetNavigateur_1.Navigateur.getEventInvocateur('keydown'),
              this._eventKeyDownApplication,
              this,
            );
            Invocateur_1.Invocateur.abonner(
              ObjetNavigateur_1.Navigateur.getEventInvocateur('keyup') +
                ' ' +
                ObjetNavigateur_1.Navigateur.getEventInvocateur('mousemove'),
              (event) => {
                if (this._cache.rolloverVisible && !event.ctrlKey) {
                  this._gererRollover(false);
                }
              },
              this,
            );
            this.ScrollV = new ObjetScroll_1.ObjetScroll({
              pere: this,
              evenement: this._evenementScrollV,
              genreScroll: ObjetScroll_1.EGenreScroll.Vertical,
            });
            this.ScrollV.pas = 50;
            this.ScrollH = new ObjetScroll_1.ObjetScroll({
              pere: this,
              evenement: this._evenementScrollH,
              genreScroll: ObjetScroll_1.EGenreScroll.Horizontal,
            });
            this.ScrollH.pas = 20;
          }
        }
      }
      recupererDonnees() {
        this._cache.listeNonInitialisee = true;
      }
      _ouvrirFenetreParametrageColonnes() {
        if (!this.estMobile) {
          ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
            ObjetFenetre_ParametrageColonnesListe_1.ObjetFenetre_ParametrageColonnesListe,
            {
              pere: this,
              evenement(aNumeroBouton, aParams) {
                var _a;
                if (
                  (_a = aParams.bouton) === null || _a === void 0
                    ? void 0
                    : _a.valider
                ) {
                  this._cache.parametrageColonnes = aParams.parametrage;
                  this._options.gestionModificationColonnes.setColonnes(
                    aParams.parametrage,
                  );
                  this._cache.calculsPreRenduAFaire = true;
                  this._cache.calculsTailleColonnesAFaire = true;
                  this._actualiser({
                    conserverSelection: true,
                    sansTriDonnees: true,
                  });
                }
              },
            },
            {
              titre: GlossaireListe_1.TradGlossaireListe.PersonnaliserListe,
              classObjetListe: ObjetListe,
              boutonsListe: [
                { genre: ObjetListe.typeBouton.monter },
                { genre: ObjetListe.typeBouton.descendre },
              ],
            },
          ).setDonnees({
            declarationColonnes: this._options.colonnes,
            parametrageColonnes: this._cache.parametrageColonnes,
            tableauColonnesCachees: this._cache.tableauColonnesCacheesOriginal,
          });
        }
      }
      _preparerBoutons(aParams) {
        var _a;
        this._cache.boutons = [];
        const lTabBoutons = this._options.boutons || [];
        if (
          this._options.avecBoutonRechercheParDefautHorsFlatDesignMinimal &&
          (!this.estDonneeListeFlatDesign(this.Donnees) ||
            !((_a = this.Donnees) === null || _a === void 0
              ? void 0
              : _a.options.flatDesignMinimal))
        ) {
          let lAvecAjoutRecherche = true;
          lTabBoutons.every((aBouton) => {
            if (
              (aBouton === null || aBouton === void 0
                ? void 0
                : aBouton.genre) === ObjetListe.typeBouton.rechercher
            ) {
              lAvecAjoutRecherche = false;
              return false;
            }
            return true;
          });
          if (lAvecAjoutRecherche) {
            lTabBoutons.push({ genre: ObjetListe.typeBouton.rechercher });
          }
        }
        lTabBoutons.forEach((aBouton) => {
          if (!aBouton) {
            return;
          }
          if (aBouton.getHtml) {
            this._cache.boutons.push(aBouton);
            return;
          }
          const lBouton = {
            event: undefined,
            getDisabled: undefined,
            getSelection: undefined,
            estBoutonPiedFlottant_mobile: false,
            class: '',
            title: '',
            id: this.Nom + '_btnliste_' + this._cache.boutons.length,
          };
          switch (aBouton.genre) {
            case ObjetListe.typeBouton.monter:
              lBouton.svg = IE.jsx.str(
                IconeSvgChevron_up_1.IconeSvgChevron_up,
                null,
              );
              lBouton.title =
                GlossaireListe_1.TradGlossaireListe.HintBoutonMonter;
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
              lBouton.svg = IE.jsx.str(
                IconeSvgChevron_down_1.IconeSvgChevron_down,
                null,
              );
              lBouton.title =
                GlossaireListe_1.TradGlossaireListe.HintBoutonDescendre;
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
            case ObjetListe.typeBouton.deployer: {
              if (
                aBouton.cacherSansDeploiement === true &&
                !this._existeDeploiementDansListe()
              ) {
                return false;
              }
              lBouton.deploye = undefined;
              lBouton.class = 'btn-deploiement-entete defaut';
              lBouton.svg = IE.jsx.str(
                IconeSvgFleche_num_1.IconeSvgFleche_num,
                null,
              );
              lBouton.title =
                GlossaireListe_1.TradGlossaireListe.HintBoutonDeploiement;
              lBouton.getDisabled = () => {
                return (
                  this._avecDeploiementDesactive() ||
                  !this._existeDeploiementDansListe()
                );
              };
              const lGetEstDeploye = (aParam) => {
                let lEstDeploye = false;
                if (
                  aParam.bouton.deploye === false ||
                  aParam.bouton.deploye === true
                ) {
                  lEstDeploye = aParam.bouton.deploye;
                } else {
                  lEstDeploye = this._getBoutonDeploye();
                }
                return lEstDeploye;
              };
              lBouton.getClass = (aParam) => {
                return lGetEstDeploye(aParam) ? 'expanded' : '';
              };
              lBouton.getAttrs = (aParam) => {
                return {
                  'aria-expanded': lGetEstDeploye(aParam) ? 'true' : 'false',
                };
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
                      aParam.bouton.deploye = undefined;
                    } else {
                    }
                  }
                }
              };
              break;
            }
            case ObjetListe.typeBouton.supprimer:
              lBouton.svg = IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null);
              lBouton.title = GlossaireListe_1.TradGlossaireListe.supprimer;
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
              lBouton.svg = IE.jsx.str(IconeSvgPencil_1.IconeSvgPencil, null);
              lBouton.title = GlossaireListe_1.TradGlossaireListe.modifier;
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
              this._cache.boutons.push({
                genre: ObjetListe.typeBouton.filtrer,
                getHtml: () => IE.jsx.str('div', { id: this.ids.btnFiltre }),
              });
              return;
            }
            case ObjetListe.typeBouton.parametrer: {
              lBouton.svg = IE.jsx.str(IconeSvgWrench_1.IconeSvgWrench, null);
              lBouton.title =
                GlossaireListe_1.TradGlossaireListe.HintBoutonParametre;
              lBouton.ariaHasPopup = 'dialog';
              lBouton.event = (aParam) => {
                this._ouvrirFenetreParametrageColonnes();
              };
              lBouton.getDisabled = function () {
                return false;
              };
              break;
            }
            case ObjetListe.typeBouton.exportCSV:
              if (!this.estMobile) {
                if (!ObjetSupport_1.Support.supportBlob) {
                  IE.log.addLog(
                    'ObjetListe : bouton exportCSV sans support javascript du Blob => bouton ignoré',
                  );
                  return;
                }
                lBouton.svg = IE.jsx.str(
                  IconeSvgCopier_liste_1.IconeSvgCopier_liste,
                  null,
                );
                lBouton.title = GlossaireListe_1.TradGlossaireListe.HintCopier;
                if (
                  !MethodesObjet_1.MethodesObjet.isFunction(
                    lBouton.getNomFichier,
                  )
                ) {
                  lBouton.getNomFichier = function () {
                    return GlossaireListe_1.TradGlossaireListe.TitreExportCSV;
                  };
                }
                lBouton.getDisabled = function () {
                  return false;
                };
                lBouton.event = (aParam) => {
                  ExportBlob_1.ExportBlob.create(
                    this._construireCopieCSV(),
                    aParam.bouton.getNomFichier(),
                    'text/csv',
                  );
                };
              } else {
                return;
              }
              break;
            case ObjetListe.typeBouton.rechercher:
              lBouton.svg = IE.jsx.str(IconeSvgSearch_1.IconeSvgSearch, null);
              lBouton.title = GlossaireListe_1.TradGlossaireListe.Rechercher;
              lBouton.getDisabled = () => {
                return this._cache.lignesVisibles.length === 0;
              };
              lBouton.event = () => {
                this._creerZoneRechercheTexte(true);
              };
              break;
          }
          Object.assign(lBouton, aBouton);
          if (!lBouton.class && !lBouton.getClass && !lBouton.svg) {
            return;
          }
          if (!lBouton.event) {
            return;
          }
          this._cache.boutons.push(lBouton);
        });
        if (this.ScrollV) {
          this.ScrollV.tailleScrollPersonnalisee =
            this._avecBoutonsListeHautScroll();
        }
      }
      _getInfosZonesColonnes(aCache) {
        if (this.estMobile) {
          this._getInfosZonesColonnesMobile(aCache);
        } else {
          this._getInfosZonesColonnesDesktop(aCache);
        }
      }
      _construireAffichage() {
        if (this.estMobile) {
          return this._construireAffichageMobile();
        }
        return this._construireAffichageDesktop();
      }
      construireAffichage(aParamsActualiser) {
        this._cache.survoleColTitreTriVisible = -1;
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
            ? (0, AccessApp_1.getApp)().getCouleur().listeNeutre
            : (0, AccessApp_1.getApp)().getCouleur().liste;
        }
        this._initCacheLignes(aParamsActualiser);
        this.initCacheStructureWAI();
        return this._construireAffichage();
      }
      composeWAICommun() {
        const lGetHtmlDescribeTreeGrid = () => {
          const T = [];
          if (this._cache.avecWAICocheLigne) {
            T.push(
              IE.jsx.str(
                'span',
                null,
                GlossaireListe_1.TradGlossaireListe.wai.ModifierCoche,
              ),
            );
          }
          return T.join('');
        };
        return IE.jsx.str(
          'span',
          { class: Divers_css_1.SD.srOnly, 'aria-hidden': 'true' },
          IE.jsx.str('span', {
            class: Divers_css_1.SD.srOnly,
            id: this.ids.WAILabelListe,
            ie_html: () => this.getAriaLabelListe(),
          }),
          IE.jsx.str(
            'span',
            { class: Divers_css_1.SD.srOnly, id: this.ids.WAIToolbar },
            '- ' + GlossaireListe_1.TradGlossaireListe.wai.toolbar,
          ),
          IE.jsx.str(
            'span',
            { class: Divers_css_1.SD.srOnly, id: this.ids.WAIFiltre },
            '- ' + GlossaireListe_1.TradGlossaireListe.Filtrer,
          ),
          IE.jsx.str(
            'span',
            { class: Divers_css_1.SD.srOnly, id: this.ids.WAICelluleEditable },
            GlossaireListe_1.TradGlossaireListe.wai.Edition,
          ),
          IE.jsx.str('span', {
            class: Divers_css_1.SD.srOnly,
            id: this.ids.WAIDescribeTreeGrid,
            ie_html: lGetHtmlDescribeTreeGrid,
          }),
          IE.jsx.str(
            'span',
            {
              class: Divers_css_1.SD.srOnly,
              id: this.ids.WAIDescribeTreeGridTotal,
            },
            GlossaireListe_1.TradGlossaireListe.total,
          ),
          IE.jsx.str(
            'span',
            { class: Divers_css_1.SD.srOnly, id: this.ids.WAILigneLue },
            GlossaireListe_1.TradGlossaireListe.wai.Lu,
          ),
        );
      }
      _ouvrirMenuContextuel(aParams) {
        let lId;
        let lRect;
        if (aParams.surLigneCreation) {
          let lIdLigneCreation = '';
          if (!this._options.avecCreationEnLigneDesignClassique) {
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
            y: !this._options.avecCreationEnLigneDesignClassique
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
            avecCreation: this._options.avecBoutonCreation,
            nonEditable: this._getNonEditable(),
            avecSuppression: this._options.AvecSuppression,
            listeSelection: this._getListeElementsSelection(),
            tableauSelection: this.getTableauCellulesSelection(),
            copier: this._copierCellule.bind(this),
            coller: this._collerCellule.bind(this),
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
          options: {
            preventScrollSurRestaurationFocus: true,
            annulerSiPasDeCommandesActives: true,
          },
        });
      }
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
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str('i', {
            class: 'icon_plus_cercle liste-creation',
            role: 'presentation',
          }),
          IE.jsx.str(
            'div',
            {
              class: 'EspaceGauche InlineBlock AlignementMilieuVertical',
              style: {
                color: (0, AccessApp_1.getApp)().getCouleur()
                  .texteListeCreation,
              },
            },
            aTitre,
          ),
        );
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
          this._cache.declarationsColonnes = [...aOptions.colonnes];
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
          ? (0, AccessApp_1.getApp)().getCouleur().listeNeutre
          : (0, AccessApp_1.getApp)().getCouleur().liste;
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
              paddingContenu_LR: this.estMobile ? 0 : 3,
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
        return true;
      }
      setValueCBFlatDesignEvent(aParams, aValue) {
        const lResult = this._setValueCBFlatDesign(aParams, !!aValue);
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
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        if (!lDonneesTableau) {
          return;
        }
        if (this._getNonEditable() || this._cache.editionEnCours) {
          return;
        }
        const lEtatCoche = lDonneesTableau.getEtatCocheSelonFils(
            null,
            this._getParamsCellule(aColonne),
          ),
          lValeur =
            lEtatCoche !==
            ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte,
          lLignes = lDonneesTableau.getTableauLignesModifieesCocheTitre(
            aColonne,
            lValeur,
          );
        let lParams;
        const lListeParamsCellules = [];
        for (let i = 0; i < lLignes.length; i++) {
          lParams = this._getParamsCellule(aColonne, lLignes[i]);
          if (
            lParams.article &&
            lDonneesTableau.avecEdition(lParams) &&
            !lDonneesTableau.editionRefusee(lParams)
          ) {
            lListeParamsCellules.push(lParams);
          }
        }
        await lDonneesTableau.surEditionCocheTitre(
          lListeParamsCellules,
          lValeur,
        );
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
          !!this._options.nonEditable ||
          !!(
            this._options.nonEditableSurModeExclusif &&
            (0, AccessApp_1.getApp)().getModeExclusif()
          )
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
        var _a;
        if (aElement) {
          if (document.selection) {
            const LCurseurCourant = document.selection.createRange();
            const LCurseurElement =
              (_a = aElement.createTextRange) === null || _a === void 0
                ? void 0
                : _a.call(aElement);
            LCurseurElement === null || LCurseurElement === void 0
              ? void 0
              : LCurseurElement.collapse(true);
            return (
              LCurseurCourant.boundingWidth === 0 &&
              LCurseurCourant.boundingLeft ===
                (LCurseurElement === null || LCurseurElement === void 0
                  ? void 0
                  : LCurseurElement.boundingLeft)
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
                this.Donnees &&
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
                this.Donnees &&
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
      _positionnerCurseurTri(aInfosZonesColonnes, aNode, aNumeroColonne) {
        const lPosition =
            aInfosZonesColonnes.gabaritColonnesTitre[aNumeroColonne],
          lDerniereColonne =
            aNumeroColonne ===
            aInfosZonesColonnes.colonnesVisibles[
              aInfosZonesColonnes.colonnesVisibles.length - 1
            ];
        const lNumeroTri = this._triCourant.colonne.indexOf(aNumeroColonne);
        if (!lPosition) {
          $(aNode).attr('tabindex', '-1').addClass(Divers_css_1.SD.srOnly);
        } else {
          $(aNode)
            .attr('tabindex', '0')
            .css(
              'left',
              this._getLeftCurseurTri(lPosition, lDerniereColonne) + 'px',
            );
          if (lNumeroTri >= 0) {
            $(aNode).removeClass(Divers_css_1.SD.srOnly);
          }
        }
      }
      _avecBoutonsListeHautScroll() {
        return (
          !!this._cache.boutons &&
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
                this.estMobile && aBouton.estBoutonPiedFlottant_mobile;
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
        if (this.estMobile) {
          this.initStructureDynamiqueMobile();
        } else {
          this.initStructureDynamiqueDesktop();
        }
      }
      _estLigneVisible(aNumeroLigne, aParams) {
        return (
          !this._cache.rechercheTexte.lignesCachees[aNumeroLigne] &&
          !!this.Donnees &&
          this.Donnees.estVisible(aNumeroLigne, aParams)
        );
      }
      _estSelectionParCellule(aLigne, aColonne) {
        if (aColonne < 0) {
          return false;
        }
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        return !!(
          lDonneesTableau &&
          lDonneesTableau.selectionParCellule(
            aColonne,
            lDonneesTableau.Donnees.get(aLigne),
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
          estCoche: false,
          largeurClasseCssImage: undefined,
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
                lDescripteurModele.getLibelleHtml = () =>
                  lStrDescripteur.substring(1, 1 + lStrDescripteur.length - 2);
              } else {
                lDescripteurModele.libelle = lStrDescripteur;
              }
            } else {
              lDescripteurModele.libelle = '';
              IE.log.addLog(
                'ObjetListe.setOptionsListe : pas de descripteur de colonnes',
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
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        let lAvecContructionCache = false;
        if (!lRechercheVide && !lCache.rechercheTexte.textesParLigne) {
          this.Donnees.enConstruction_cacheRechercheTexte = true;
          try {
            lAvecContructionCache = true;
            this._initCacheLignes({ initCacheDyn: false });
            lCache.rechercheTexte.textesParLigne = [];
            lCache.structureWAI.lignes = [];
            this.construireCacheRechercheTextes();
          } finally {
            this.Donnees.enConstruction_cacheRechercheTexte = false;
          }
        }
        if (!lRechercheVide) {
          const lTabRecherches =
            RechercheTexte_1.RechercheTexte.getTabRechercheTexteNormalize(
              this.getRechercheTexte().enleverEntites(),
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
              !!this.Donnees &&
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
                    lDonneesTableau &&
                    lDonneesTableau.fusionCelluleAvecLignePrecedente(
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
          lCache.strResultRecherche =
            GlossaireListe_1.TradGlossaireListe.wai.MsgRechercheNonTrouve;
        } else {
          this._getJConteneurInputRecherche()
            .find('.liste_rechercheTexte_alerte.hide')
            .removeClass('hide');
          const lNbLignesResult = lCache.lignesVisibles.length;
          const lStrRecherche = this.getRechercheTexte();
          if (lNbLignesResult === 0) {
            lCache.strResultRecherche =
              GlossaireListe_1.TradGlossaireListe.wai.MsgRechercheNonTrouvePour_S.format(
                [lStrRecherche],
              );
          } else if (lNbLignesResult === 1) {
            lCache.strResultRecherche =
              GlossaireListe_1.TradGlossaireListe.wai.MsgRechercheXTrouveePour_DDS.format(
                [
                  lNbLignesResult,
                  lCache.lignesVisiblesSansRechercheTexte.length,
                  lStrRecherche,
                ],
              );
          } else {
            lCache.strResultRecherche =
              GlossaireListe_1.TradGlossaireListe.wai.MsgRechercheXTrouveesPour_DDS.format(
                [
                  lNbLignesResult,
                  lCache.lignesVisiblesSansRechercheTexte.length,
                  lStrRecherche,
                ],
              );
          }
        }
        this.$refresh();
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
          let lFragment = IEHtml_1.IEHtml.outils.createSafeFragment();
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
                instance: this,
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
                      `#frag${aIndex} .liste_celluleGrid_${lIndiceLigne + 1} :not(.${Divers_css_1.SD.srOnly})`,
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
            if (lJFragment) {
              lJFragment.children().remove();
              lJFragment.remove();
              lJFragment = undefined;
            }
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
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        if (lDonneesTableau) {
          lDonneesTableau.setTriCourantDeListe(this._triCourant);
        }
        this.Donnees.trier();
      }
      _setDonnees(ADonnees, aLigneSelectionne, aParams) {
        IEHtml_1.IEHtml.refresh(true);
        this._donneesRecus = true;
        this.Donnees = ADonnees;
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
            versionMobile: this.estMobile,
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
            ouvrirMenuContextuel: this._ouvrirMenuContextuel.bind(this),
            jsxNodeDeploiementLigne: this.jsxNodeDeploiementLigne.bind(this),
            jsxGetModelCBLigneFlatDesign:
              this.jsxGetModelCBLigneFlatDesign.bind(this, this),
            jsxGetAttrCBLigneFlatDesign:
              this.jsxGetAttrCBLigneFlatDesign.bind(this),
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
          aParams.listeElementsSelection = undefined;
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
        var _a;
        const lJElement = $('#' + this.Nom.escapeJQ());
        if (lJElement.html() === '') {
          lJElement.html('&nbsp;');
        }
        return Math.floor(
          (_a = lJElement.width()) !== null && _a !== void 0 ? _a : 0,
        );
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
        let lNumeroColonne =
          aColonne !== null && aColonne !== void 0 ? aColonne : null;
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
          this._options.avecBoutonCreation &&
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
        return this.ScrollV ? this.ScrollV.Largeur : 0;
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
        var _a;
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
            conserverPositionElement: undefined,
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
        if (this._cache.actualisationEnCours) {
          return;
        }
        let lAvecFiltreRecherche = !lParams.estFiltreRechercheTexte;
        let lSelections = null;
        let lIdFocusARestaurer = '';
        let lFocusSurListe = false;
        let lSelectionsPrecedente = null;
        this._cache.actualisationEnCours = true;
        try {
          if (
            !lParams.ignorerFocusListe &&
            ObjetHtml_1.GHtml.focusEstDansElement &&
            ObjetHtml_1.GHtml.focusEstDansElement(this.Nom)
          ) {
            lFocusSurListe = true;
            lIdFocusARestaurer = this.IdPremierElement;
          }
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
          if (lZonesActualisation) {
            this._actualiserZones(lZonesActualisation, lParams);
            if (lZonesActualisation.total) {
              const lJTotalHeader = $(
                `#${this.Nom.escapeJQ()}${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeTotaleFd}.${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeHeader}`,
              );
              if (lJTotalHeader.length === 1) {
                ObjetHtml_1.GHtml.setHtml(
                  lJTotalHeader.get(0),
                  this.construireTotalInterneFD(true, false),
                  { instance: this, ignorerScroll: true },
                );
              }
              const lJTotalFooter = $(
                `#${this.Nom.escapeJQ()}${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeTotaleFd}.${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeFooter}`,
              );
              if (lJTotalFooter.length === 1) {
                ObjetHtml_1.GHtml.setHtml(
                  lJTotalFooter.get(0),
                  this.construireTotalInterneFD(false, false),
                  { instance: this, ignorerScroll: true },
                );
              }
            }
            lAvecFiltreRecherche =
              lAvecFiltreRecherche && !!lZonesActualisation.contenu;
          } else {
            let lCommentaireDebug = '';
            ObjetHtml_1.GHtml.setHtml(
              this.Nom,
              this.construireAffichage(lParams),
              {
                instance: this,
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
                  class:
                    ObjetListeEspaceMobile_css_1.SObjetListeEspaceMobile
                      .piedListe,
                  style:
                    ObjetStyle_1.GStyle.composeHeight(
                      this._options.piedDeListe.height,
                    ) +
                    (this.estMobile
                      ? ''
                      : ObjetStyle_1.GStyle.composeWidth(
                          this._cache.largeurTotalCalcule + 1,
                        )),
                },
                this._options.piedDeListe.getContenu(),
              ),
              { instance: this, ignorerScroll: true },
            );
          }
          this._setScroll(lBackupScroll);
          this._refreshContenuDynamique({
            avecBackupScroll: true,
            refreshRecursif: true,
            conserverPositionElement: lParams.conserverPositionElement,
          });
          this._abonnementResizeObserver();
        } finally {
          this._cache.actualisationEnCours = false;
        }
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
        this.$refresh();
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
                if (lAvecActualisation || this.estMobile) {
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
        var _a;
        const lVal =
          ((_a = this.Donnees) === null || _a === void 0
            ? void 0
            : _a.getHauteurMinCellule(aParamsCellule)) ||
          ObjetDonneesListeBase_1.ObjetDonneesListeBase.hauteurMinCellule;
        return lVal <= 0
          ? ObjetDonneesListeBase_1.ObjetDonneesListeBase.hauteurMinCellule
          : lVal;
      }
      async _afficherMessage(aParamsCellule) {
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
        const LMessage = this.Donnees.getMessage();
        if (LMessage) {
          await (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
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
                  -1,
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
          const lJParent = $(
            `#${this.ids.curseurTri.escapeJQ() + aInfosZoneColonnes.indiceBloc + '_row'}`,
          );
          lJParent.empty();
          if (lJParent.length === 1) {
            aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
              if (this._cache.colonnesTri[aNumeroColonne]) {
                const lNumeroTriDessin =
                  this._triCourant.colonne.indexOf(aNumeroColonne);
                const lNode = IEHtml_1.IEHtml.injectHTMLParams({
                  element: lJParent.get(0),
                  html: this._construireTri(
                    aInfosZoneColonnes,
                    aNumeroColonne,
                    lNumeroTriDessin,
                  ),
                  instance: this,
                });
                if (
                  lNode &&
                  lNumeroTri === lNumeroTriDessin &&
                  aInfosZoneColonnes.gabaritColonnesTitre[aNumeroColonne]
                ) {
                  lNode.focus();
                }
              }
            });
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
      executerEvenementMenuContextuelCreation(aLigneData) {
        if (this._avecLigneCreationUnique) {
          const LId = this._getIdCreation(-1, -1);
          ObjetHtml_1.GHtml.setDisplay(LId + '_Creation', false);
          ObjetHtml_1.GHtml.setDisplay(LId + '_Creation_Edit', true);
        }
        this._cache.positionCreation = 0;
        this.surCreationDeb(false, {
          origine: 'menucontextuel',
          creationEnFenetre: !this._options.avecCreationEnLigneDesignClassique,
        });
        if (aLigneData) {
          if (this._cache.listeValeursCreation) {
            this._cache.listeValeursCreation.data = aLigneData;
          }
        }
      }
      executerEvenementMenuContextuelEdition(aColonne, aLigne) {
        this.surEditionDeb(aColonne, aLigne);
      }
      _evenementMenuContextuel(aParametres, aLigne) {
        var _a;
        const lParametres = Object.assign(
          {
            ligneMenu: aLigne,
            numeroMenu:
              (_a =
                aLigne === null || aLigne === void 0
                  ? void 0
                  : aLigne.getNumero()) !== null && _a !== void 0
                ? _a
                : -1,
            avecActualisation: true,
          },
          aParametres,
        );
        if (aLigne) {
          this.Donnees.evenementMenuContextuel(lParametres);
          if (lParametres.avecActualisation) {
            this._actualiser({
              conserverSelection: true,
              zonesActualisation: { contenu: true, total: true },
            });
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
          this.$refresh();
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
          if (this.estDonneeListeFlatDesign(this.Donnees)) {
            return false;
          }
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
                  -1,
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
          if (this.estDonneeListeFlatDesign(this.Donnees)) {
            return false;
          }
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
          if (this.estDonneeListeFlatDesign(this.Donnees)) {
            return;
          }
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
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
        const lControle = this.Donnees.getControleCaracteresInput(aParams);
        let lResult = {};
        if (lControle && lControle.mask) {
          lResult['ie_mask'] = '/[^' + lControle.mask + ']/i';
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
          IEHtml_1.IEHtml.MAX_LENGTH_Default > 0 &&
          this.Donnees._getTailleTexteMax(aParams) >
            IEHtml_1.IEHtml.MAX_LENGTH_Default
        ) {
          lResult.maxlength = 0;
        }
        return lResult;
      }
      _toString(aValeur) {
        return aValeur + '';
      }
      async _setValueModel(aParams) {
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
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
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
          await (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message: this.Donnees.getMessageTailleMaximaleSaisie(),
            });
          this._fenetreInformationAffichee = false;
          ObjetHtml_1.GHtml.setFocus(lParams.node);
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
      getAriaLabelInputEdition(aParamsCellule, aSurLigneCreation) {
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return '';
        }
        let lAriaLabel = this.Donnees.getWAIInputEdition(aParamsCellule);
        if (lAriaLabel.trim() !== '') {
          lAriaLabel += ' ';
        }
        if (!aSurLigneCreation) {
          const lIndexLigne = this._cache.lignesVisibles.indexOf(
            aParamsCellule.ligne,
          );
          lAriaLabel += `${GlossaireWAI_1.TradGlossaireWAI.ligne} ${lIndexLigne >= 0 ? lIndexLigne + 1 : aParamsCellule.colonne} ${GlossaireWAI_1.TradGlossaireWAI.colonne} ${this.getIndiceColonneVisibleDeColonne(aParamsCellule.colonne)}`;
        }
        return lAriaLabel;
      }
      entrerTexte(
        aColonne,
        aLigne,
        aSurLigneCreation,
        aTypeCellule,
        aIgnorerEventsNode,
        aForcerEnFenetre,
      ) {
        var _a;
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
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
          lClass =
            (_a = this.Donnees.getClass(lParamsCellule)) !== null &&
            _a !== void 0
              ? _a
              : '';
        } catch (e) {
          lClass = '';
        }
        const lEditionEnFenetre =
          aForcerEnFenetre || (this.estMobile && aSurLigneCreation);
        const lIgnorerEventsNode = lEditionEnFenetre
          ? true
          : aIgnorerEventsNode;
        const H = [];
        const lMapAttr = Object.assign(
          {
            id: this.IdEdition,
            class: [
              'Texte10 Liste_Input_Texte',
              lClass || '',
              lEditionEnFenetre ? 'full-width' : '',
            ],
            style: {
              border: lEditionEnFenetre ? undefined : '0px',
              minWidth: aSurLigneCreation ? '4rem' : undefined,
            },
            ie_model: this.jsxModeleSaisieTexte.bind(
              this,
              this,
              lParamsCellule,
              lEstNote,
              false,
              lIgnorerEventsNode,
            ),
            'aria-label': this.getAriaLabelInputEdition(
              lParamsCellule,
              aSurLigneCreation,
            ),
            autocomplete: lEstNote ? 'off' : false,
            autocorrect: lEstNote ? 'off' : false,
            autocapitalize: lEstNote ? 'off' : false,
            spellcheck: lEstNote ? 'false' : false,
          },
          this._getMapHTMLControleTexte(lParamsCellule),
        );
        const lHtmlInput = lEstNote
          ? IE.jsx.str(
              IEHtml_InputNote_1.InputNote,
              Object.assign({}, lMapAttr),
            )
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
        if (!ObjetHtml_1.GHtml.elementExiste(this.IdCellule)) {
          if (aSurLigneCreation) {
            this._annulerCreation();
          } else {
            this._surEditionFin({
              colonne: this._cache.selectionCellule.colonne,
              ligne: this._cache.selectionCellule.ligne,
            });
          }
          return;
        }
        const lHeightCellule = $('#' + this.IdCellule.escapeJQ()).height();
        const lHeight =
          this._getHeightCellule(lParamsCellule) -
          2 * this._options.paddingCelluleTB;
        if (this.estMobile) {
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
          IE.jsx.str('div', {
            id: this.ids.surligneur_edition,
            class:
              ObjetListeEspaceMobile_css_1.SObjetListeEspaceMobile
                .liste_surligneur_edition,
            style: {
              width: lPos.width,
              height: lPos.height,
              top: lPos.top,
              left: lPos.left,
            },
          }),
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
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
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
        const lEditionEnFenetre = aForcerEnFenetre || this.estMobile;
        const lIgnorerEventsNode =
          this.estMobile || lEditionEnFenetre ? true : aIgnorerEventsNode;
        const T = [];
        T.push(
          IE.jsx.str(
            IEHtml_TextareaMax_1.TextareaMax,
            Object.assign(
              {
                id: this.IdEdition,
                ie_autoresize: lEditionEnFenetre,
                class: 'liste_textarea',
                ie_model: this.jsxModeleSaisieTexte.bind(
                  this,
                  this,
                  lParamsCellule,
                  false,
                  true,
                  !!lIgnorerEventsNode,
                ),
              },
              this._getMapHTMLControleTexte(lParamsCellule),
              {
                ie_compteurmax: lTailleMax > 0 ? lTailleMax : false,
                'aria-label': this.getAriaLabelInputEdition(
                  lParamsCellule,
                  aSurLigneCreation,
                ),
              },
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
        if (lOffset && lOffsetConteneur && lHeightConteneur) {
          const lPositionnement = {
            width:
              ObjetPosition_1.GPosition.getWidth(this.IdCellule) +
              (lInfosZone.dernierBloc &&
              aColonne === lInfosZone.indiceColonneFin
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
            { instance: this },
          );
        }
      }
      _nettoyerElementsEditionEnCours() {
        $('#' + this.IdZoneTexte.escapeJQ()).remove();
        $('#' + this.ids.surligneur_edition.escapeJQ()).remove();
        if (this.fenetreDate) {
          this.fenetreDate.fermer();
          delete this.fenetreDate;
        }
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
        const lFusion = {};
        let lHash = {};
        let lNumeroColonneFusionEnCoursPrec = null,
          lParamsCellule,
          lDerniereColonne,
          lNumeroColonneFusion,
          lNumeroColonneReferenceFusion = aParametres.colonnesVisibles[0];
        const lTailles = aParametres.tailles || this._cache.taillesColonne;
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        aParametres.colonnesVisibles.forEach((aNumeroColonne) => {
          var _a;
          lNumeroColonneFusion = aNumeroColonne;
          if (this._options.skin !== ObjetListe.skin.flatDesign) {
            if (aParametres.total) {
              lParamsCellule = aParametres.getParamsCellule(aNumeroColonne);
            } else {
              lParamsCellule = this._getParamsCellule(
                aNumeroColonne,
                (_a = aParametres.ligne) !== null && _a !== void 0 ? _a : -1,
                { colonnesVisibles: aParametres.colonnesVisibles },
              );
            }
            if (lDonneesTableau) {
              if (aParametres.total) {
                lNumeroColonneFusion =
                  lDonneesTableau.getColonneDeFusionTotal(lParamsCellule);
              } else {
                lNumeroColonneFusion =
                  lDonneesTableau.getColonneDeFusion(lParamsCellule);
              }
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
            lDonneesTableau &&
            lDonneesTableau.fusionCelluleAvecColonnePrecedente(lParamsCellule)
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
              indexCols: [lColPrimaire],
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
            lFusion[lColPrimaire].indexCols.push(aNumeroColonne);
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
            if (!this.estMobile) {
              if (
                this.Donnees &&
                this._options.borduresCellule_vertical > 0 &&
                lParamsCellule &&
                this.estDonneeListeTableau(this.Donnees) &&
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
            !!this._etatSelectionCellule({
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
            !!this._etatSelectionCellule({
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
            IE.jsx.str(
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
                ? IE.jsx.str('div', {
                    class: 'liste_ligneSelection_g',
                    style: ObjetStyle_1.GStyle.composeHeight(
                      lPositionCache.height,
                    ),
                  })
                : '',
              IE.jsx.str('div', {
                class: 'liste_ligneSelection_h',
                style: lStyle,
              }),
              !lPositionCache.selColSuivante
                ? IE.jsx.str('div', {
                    class: 'liste_ligneSelection_d',
                    style:
                      'left:' +
                      (lPositionCache.width - 2) +
                      'px;' +
                      ObjetStyle_1.GStyle.composeHeight(lPositionCache.height),
                  })
                : '',
              IE.jsx.str('div', {
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
              return false;
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
              return false;
            }
            if (lParametres.colonne < 0) {
              delete lParametres.cacheSelection[lParametres.ligne];
              return false;
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
        return false;
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
        const lDonneesTableau = !this.estDonneeListeFlatDesign(this.Donnees)
          ? this.Donnees
          : null;
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
                      (!lDonneesTableau ||
                        lDonneesTableau.options
                          .avecMultiSelectionSurLigneFusion) &&
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
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return false;
        }
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
        });
        const lAvecInputFile =
          this.Donnees && this.Donnees.avecSelecFile(lParams);
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
        var _a;
        const lParamsCreation = Object.assign(
          {
            origine: undefined,
            numeroLigneCreation: -1,
            idCellule: undefined,
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
          if (
            lParamsCreation.paramsSuppBoutonCreation &&
            !(this.ListeCreations && this.ListeCreations.length > 0)
          ) {
            this._cache.numeroColonneCreationEnCours = -1;
            lInterrompreCreation = true;
          } else {
            this._cache.numeroColonneCreationEnCours =
              this.ListeCreations[this._cache.positionCreation++];
          }
          const lParams = this._getParamsCellule(
            this._cache.numeroColonneCreationEnCours,
            -1,
            { surLigneCreation: true, surEdition: true },
          );
          this._cache.creationEnCoursEvenement = this.surCreationEvenement(
            lParams.colonne,
            lParamsCreation.paramsSuppBoutonCreation,
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
            if (!lParamsCreation.paramsSuppBoutonCreation) {
              const LId = this._getIdCreation(-1, lParams.ligne);
              ObjetHtml_1.GHtml.setDisplay(LId + '_Creation_Edit', false);
              ObjetHtml_1.GHtml.setDisplay(LId + '_Creation', true);
            }
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
          const lType =
            (_a = this.Donnees.getTypeValeur(lParams)) !== null && _a !== void 0
              ? _a
              : ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
          switch (lType) {
            case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.ZoneTexte:
              this.entrerZoneTexte(
                lParams.colonne,
                -1,
                true,
                lParamsCreation.numeroLigneCreation,
                lParamsCreation.ignorerEventsNode,
                lParamsCreation.creationEnFenetre,
              );
              break;
            default:
              this.entrerTexte(
                lParams.colonne,
                -1,
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
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
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
      _getParamsCellule(aNumeroColonne, aNumeroLigne, aParamsSupp) {
        var _a;
        const lParams = {
          ligne:
            aNumeroLigne !== null && aNumeroLigne !== void 0
              ? aNumeroLigne
              : -1,
          colonne:
            aNumeroColonne !== null && aNumeroColonne !== void 0
              ? aNumeroColonne
              : -1,
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
          if (aParamsSupp && aParamsSupp.surTotal) {
            const lListeTotal = this.estDonneeListeTableau(this.Donnees)
              ? (_a = this.Donnees) === null || _a === void 0
                ? void 0
                : _a.getListeLignesTotal()
              : null;
            if (lListeTotal) {
              lParams.article = lListeTotal.get(lParams.ligne);
            }
          } else {
            lParams.article = this.getArticleDeLigne(lParams.ligne);
          }
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
        var _a;
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
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
          const lTypeValeur =
            (_a = this.Donnees.getTypeValeur(aParams)) !== null && _a !== void 0
              ? _a
              : ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
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
              this.estMobile &&
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
        if (this._getNonEditable() || !this.Donnees) {
          return;
        }
        this._cache.selectionCellule.ligne = aLigne;
        this._cache.selectionCellule.colonne = aColonne;
        let lParams = this._getParamsCellule(aColonne, aLigne, {
          surEdition: true,
        });
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
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
            (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
                message: this.Donnees.getMessage(),
              })
              .then((aGenreAction) => {
                if (aGenreAction === Enumere_Action_1.EGenreAction.Valider) {
                  this._surEditionDebutApresConfirmation(lParams);
                }
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
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
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
            (this.estDonneeListeTableau(this.Donnees) &&
              this.Donnees.forcerActualisationListeSurEdition(lParametres))
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
              { instance: this },
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
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
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
            (0, AccessApp_1.getApp)()
              .getMessage()
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
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return;
        }
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
        var _a;
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
            return false;
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
        const lRoleGrid = this._estRoleTreeGrid();
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
            lAvecSelectionOuEdition = !!(
              (lParametres.avecCelluleEditable ||
                !lParametres.avecSelection ||
                this.Donnees._avecSelection(lParamsCellule)) &&
              (!lParametres.avecCelluleEditable ||
                (!this._getNonEditable() &&
                  this.estDonneeListeTableau(this.Donnees) &&
                  (this.Donnees.avecEdition(lParamsCellule) ||
                    this.Donnees.avecEvenementEdition(lParamsCellule))))
            );
            if (lParametres.forcerNavigationFocus || lAvecSelectionOuEdition) {
              const lIdCellule = this.getIdCellule(lColonne, lLigne, true);
              lElement = ObjetHtml_1.GHtml.getElement(lIdCellule);
              if (!lElement && this._estLigneDansRangeNonConstruitDyn(lLigne)) {
                this._scrollSurLigne({ ligne: lLigne, colonne: lColonne });
                lElement = ObjetHtml_1.GHtml.getElement(lIdCellule);
              }
              if (!lElement && lRoleGrid) {
                const lIdCellulleWAI = this.getIdCellule(
                  lColonne,
                  lLigne,
                  true,
                  true,
                );
                const lElementWAI =
                  ObjetHtml_1.GHtml.getElement(lIdCellulleWAI);
                if (lElementWAI) {
                  const lLigneRef = parseInt(
                    lElementWAI.dataset.fusionrow || '-1',
                  );
                  const lColRef = parseInt(
                    lElementWAI.dataset.fusioncol || '-1',
                  );
                  if (
                    lLigneRef >= 0 &&
                    lColRef >= 0 &&
                    (lColonne !== lColRef || lLigne !== lLigneRef)
                  ) {
                    let lAccepterNav = true;
                    if (lParametres.orientationVerticale) {
                      if (!lParametres.sensInverse && lLigneRef < lLigne) {
                        lAccepterNav = false;
                      } else if (
                        lParametres.sensInverse &&
                        lLigneRef > lLigne
                      ) {
                        lAccepterNav = false;
                      }
                    } else {
                      if (!lParametres.sensInverse && lColRef < lColonne) {
                        lAccepterNav = false;
                      } else if (
                        lParametres.sensInverse &&
                        lColRef > lColonne
                      ) {
                        lAccepterNav = false;
                      }
                    }
                    if (lAccepterNav) {
                      const lElementRef = this.getIdCellule(
                        lColRef,
                        lLigneRef,
                        true,
                      );
                      if (lElementRef) {
                        lElement = lElementRef;
                        lColonne = lColRef;
                        lLigne = lLigneRef;
                      }
                    }
                  }
                }
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
              ].indexOf(
                (_a = this.Donnees.getTypeValeur(lParamsCellule)) !== null &&
                  _a !== void 0
                  ? _a
                  : ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte,
              ) < 0;
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
          return false;
        }
        if (this._avecDeploiementDesactive()) {
          return false;
        }
        if (
          aEvent.type !== 'keyup' &&
          aEvent.type !== 'validation' &&
          aEvent.which === 2
        ) {
          return false;
        }
        const lParams = this._getParamsCellule(aColonne, aLigne, {
          surDeploiement: true,
        });
        if (
          !aDeploiementSurImage &&
          !this.Donnees.avecEventDeploiementSurCellule(lParams)
        ) {
          return false;
        }
        if (
          !aDeploiementSurImage &&
          this.estDonneeListeFlatDesign(this.Donnees) &&
          this.Donnees.options.avecCocheCBSurLigne &&
          this.Donnees.avecCB(lParams)
        ) {
          return false;
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
        return false;
      }
      _avecSuppressionSelectionCourante(aNumeroLigne, aNumeroColonne) {
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return false;
        }
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
        if (event.data.instance.estDonneeListeFlatDesign(lInstance.Donnees)) {
          return;
        }
        const lParams = lInstance._getParamsCellule(
          lInfos.colonne,
          lInfos.ligne,
          { surTotal: true },
        );
        if (
          lInstance.Donnees &&
          lInstance.Donnees.avecEvenementSelectionClickTotal(lParams)
        ) {
          if (lInstance.Pere && lInstance.Evenement) {
            const lParamsCallback = lInstance._getParamsCallback(
              Enumere_EvenementListe_1.EGenreEvenementListe.SelectionClickTotal,
              lParams.colonne,
              lParams.ligne,
              { surTotal: true },
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
          !this._options.avecCreationEnLigneDesignClassique ||
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
            !this.estMobile) &&
          this._avecLigneCreationTitre();
        const lHtmlLigneTotale = this._construireTotalFD(true, false);
        const H = [];
        if (
          lAvecBoutonsListeEntete ||
          this._options.avecCBToutCocher ||
          lAvecBtnCreation
        ) {
          const _construireBouton = (aBouton) => {
            return IE.jsx.str(
              IEHtml_BtnImage_1.BtnIcon,
              {
                ie_model: this.jsxModeleBoutonListe.bind(this, this, aBouton),
                ie_if: aBouton.getVisible
                  ? this.jsxIfBoutonListe.bind(this, aBouton)
                  : false,
                ie_class: aBouton.getClass
                  ? this.jsxGetClassBoutonListe.bind(this, aBouton)
                  : false,
                ie_attr: aBouton.getAttrs
                  ? this.jsxGetAttrsBoutonListe.bind(this, aBouton)
                  : false,
                title: aBouton.title ? aBouton.title : '',
                id: aBouton.id,
                class: [
                  aBouton.class,
                  aBouton.genre === ObjetListe.typeBouton.deployer
                    ? 'bt-activable'
                    : 'bt-activable bt-large',
                ],
                'aria-haspopup': aBouton.ariaHasPopup || false,
              },
              aBouton.svg,
            );
          };
          H.push(
            IE.jsx.str(
              'div',
              {
                class: [
                  ObjetListeEspaceMobile_css_1.SObjetListeEspaceMobile
                    .liste_btnentete,
                ],
                ie_nodeafter: this.jsxGetNodeAfterToolbar.bind(this),
                style: aCssWidth ? `width:${aCssWidth}` : false,
                role: 'toolbar',
                'aria-labelledby':
                  this.ids.WAILabelListe + ' ' + this.ids.WAIToolbar,
              },
              (aTab) => {
                var _a;
                const lIndexBtnDeployer = this._cache.boutons.findIndex(
                  (aBouton) => aBouton.genre === ObjetListe.typeBouton.deployer,
                );
                if (lIndexBtnDeployer >= 0) {
                  const lBoutonDeployer =
                    this._cache.boutons[lIndexBtnDeployer];
                  aTab.push(_construireBouton(lBoutonDeployer));
                }
                if (lAvecCBToutCocher) {
                  aTab.push(
                    IE.jsx.str(IEHtml_CheckboxRadio_1.Checkbox, {
                      ie_model: this.jsxGetModelCBLigneFlatDesign.bind(
                        this,
                        this,
                        -1,
                      ),
                      ie_html: this.jsxGetHtmlCBEntete.bind(this),
                      ie_attr: this.jsxGetAttrCBLigneFlatDesign.bind(this, -1),
                      style: this._options.paddingContenu_LR
                        ? 'padding-left:' +
                          this._options.paddingContenu_LR +
                          'px;'
                        : false,
                    }),
                  );
                }
                if (lAvecBtnCreation) {
                  const lParamsCellule = this._getParamsCellule(-1, -1, {
                    surCreation: true,
                  });
                  const lAvecSelecFile =
                    !this._getNonEditable() &&
                    !!((_a = this.Donnees) === null || _a === void 0
                      ? void 0
                      : _a.avecSelecFile(lParamsCellule));
                  if (!this._options.btnCreationEnBtnIcone) {
                    aTab.push(
                      IE.jsx.str(
                        IEHtml_Bouton_1.Bouton,
                        {
                          id: this.ids.btnCreation,
                          ie_model: this.jsxModeleBtnCreationEntete.bind(
                            this,
                            this,
                            lParamsCellule,
                            lAvecSelecFile,
                          ),
                          ie_selecfile: !!lAvecSelecFile,
                          class: 'themeBoutonPrimaire',
                          svg: this._options.svgIconeTitreCreation,
                          ie_tooltipdescribe:
                            this._options.tooltipDescribeBoutonCreation,
                          'aria-haspopup': lAvecSelecFile
                            ? 'dialog'
                            : this._options.ariaHasPopupBtnCreation,
                        },
                        this._options.titreCreation,
                      ),
                    );
                  } else {
                    aTab.push(
                      IE.jsx.str(
                        IEHtml_BtnImage_1.BtnIcon,
                        {
                          id: this.ids.btnCreation,
                          ie_model: this.jsxModeleBtnCreationEntete.bind(
                            this,
                            this,
                            lParamsCellule,
                            lAvecSelecFile,
                          ),
                          ie_selecfile: !!lAvecSelecFile,
                          class: [
                            IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btActivable,
                            IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btLarge,
                          ],
                          ie_tooltiplabel:
                            this._options.tooltipDescribeBoutonCreation ||
                            this._options.titreCreation,
                          'aria-haspopup': lAvecSelecFile
                            ? 'dialog'
                            : this._options.ariaHasPopupBtnCreation,
                        },
                        this._options.svgIconeTitreCreation ||
                          IE.jsx.str(IconeSvgPlus_fin_1.IconeSvgPlus_fin, null),
                      ),
                    );
                  }
                }
                if (lAvecBoutonsListeEntete) {
                  aTab.push(
                    IE.jsx.str(
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
                            this.estMobile &&
                            aBouton.estBoutonPiedFlottant_mobile
                          ) {
                            return;
                          }
                          if (aBouton.getHtml) {
                            aTabBtn.push(
                              IE.jsx.str('div', {
                                ie_node: this.jsxNodeBtnEnteteLibre.bind(
                                  this,
                                  aIndex,
                                ),
                                role: 'presentation',
                              }),
                            );
                            return;
                          }
                          let H = _construireBouton(aBouton);
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
      jsxGetHtmlCBEntete() {
        var _a;
        if (!this._options.avecCBToutCocher) {
          return '';
        }
        if (
          typeof this._options.avecCBToutCocher === 'object' &&
          'libelle' in this._options.avecCBToutCocher
        ) {
          return this._options.avecCBToutCocher.libelle || '';
        }
        switch (this._options.avecCBToutCocher) {
          case true:
          case ObjetListe.typeLibelleCocheCBEntete.toutCocher: {
            return GlossaireListe_1.TradGlossaireListe.toutCocher;
          }
          case ObjetListe.typeLibelleCocheCBEntete.compteurSelec: {
            const lNb = this.getListeArticlesCochees().count();
            if (lNb <= 0) {
              return '';
            }
            if (lNb === 1) {
              return GlossaireListe_1.TradGlossaireListe.ElementSelectionne_D.format(
                [lNb],
              );
            }
            return GlossaireListe_1.TradGlossaireListe.ElementsSelectionnes_D.format(
              [lNb],
            );
          }
        }
        if (
          typeof this._options.avecCBToutCocher === 'object' &&
          'getLibelle' in this._options.avecCBToutCocher
        ) {
          return (_a = this._options.avecCBToutCocher.getLibelle()) !== null &&
            _a !== void 0
            ? _a
            : '';
        }
        return '';
      }
      _construireTotalFD(aPourHeader, aTotalDansScroll) {
        const lHtml = this.construireTotalInterneFD(
          aPourHeader,
          aTotalDansScroll,
        );
        let lCss = '';
        if (!aTotalDansScroll) {
          lCss = aPourHeader
            ? ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                .listeHeader
            : ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                .listeFooter;
        } else {
          lCss =
            ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
              .listeHeaderFooterInScroll;
        }
        if (lHtml) {
          return IE.jsx.str(
            'div',
            {
              class: [
                ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                  .listeTotaleFd,
                lCss,
                !aTotalDansScroll && !aPourHeader && this.estMobile
                  ? GestionnaireStickyScroll_1.GestionnaireStickyScroll
                      .stickyBottom
                  : '',
              ],
              role: 'group',
              'aria-labelledby': this.ids.WAILabelListe,
            },
            lHtml,
          );
        }
        return '';
      }
      construireTotalInterneFD(aPourHeader, aTotalDansScroll) {
        if (
          this._options.skin === ObjetListe.skin.flatDesign &&
          this.Donnees &&
          this.estDonneeListeFlatDesign(this.Donnees) &&
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
            if (!!lLigneTotale.totalDansScroll !== aTotalDansScroll) {
              return '';
            }
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
            if (!this.estMobile && !aTotalDansScroll) {
              lMargin = `0 ${this._options.paddingContenu_LR + this._getLargeurScrollV()}px 0 ${this._options.paddingContenu_LR}px`;
            }
            const lFuncAttrTotalFd = () => {
              const lAttrs = {};
              if (lAvecSelection) {
                lAttrs['aria-pressed'] = !!this._etatSelectionCellule({
                  ligne: lLigneTotale.ligne,
                  colonne: lLigneTotale.colonne,
                });
              }
              return lAttrs;
            };
            return IE.jsx.str(
              'div',
              {
                class: [
                  lAvecSelection
                    ? ObjetDonneesListeFlatDesign_css_1
                        .SObjetDonneesListeFlatDesign.selectable
                    : '',
                  lEstSelectionne
                    ? ObjetDonneesListeFlatDesign_css_1
                        .SObjetDonneesListeFlatDesign.selected
                    : '',
                  lAvecSelection &&
                  !this.Donnees.enConstruction_cacheRechercheTexte
                    ? IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple
                    : '',
                ],
                style: { margin: lMargin },
                id: lAvecSelection
                  ? this.getIdCellule(lLigneTotale.colonne, lLigneTotale.ligne)
                  : false,
                ie_node:
                  lAvecSelection && !lEnRecherche
                    ? this.jsxNodeTotalFd.bind(
                        this,
                        this,
                        lLigneTotale.ligne,
                        lLigneTotale.colonne,
                      )
                    : false,
                ie_attr: !lEnRecherche ? lFuncAttrTotalFd : false,
                tabindex: '0',
                role: lAvecSelection ? 'button' : false,
              },
              (aHtml) => {
                var _a, _b;
                aHtml.push(
                  IE.jsx.str(
                    'span',
                    {
                      class: [
                        lLigneTotale.avecEtiquette
                          ? ObjetDonneesListeFlatDesign_css_1
                              .SObjetDonneesListeFlatDesign.totalEtiqu
                          : Divers_css_1.SD.srOnly,
                      ],
                    },
                    GlossaireListe_1.TradGlossaireListe.total,
                  ),
                );
                if (lLigneTotale.avecEtiquette) {
                  aHtml.push(
                    IE.jsx.str('div', {
                      class:
                        ObjetDonneesListeFlatDesign_css_1
                          .SObjetDonneesListeFlatDesign.totalEtiquSep,
                    }),
                  );
                }
                aHtml.push(
                  IE.jsx.str(
                    'div',
                    {
                      class:
                        ObjetDonneesListeFlatDesign_css_1
                          .SObjetDonneesListeFlatDesign.totalContent,
                      'aria-label': lLigneTotale.wai || false,
                    },
                    ((_b = (_a = lLigneTotale).getHtml) === null ||
                    _b === void 0
                      ? void 0
                      : _b.call(_a)) || '',
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
          const lFuncHtmlRecherche = () => this._cache.strResultRecherche;
          const H = IE.jsx.str(
            'div',
            { class: 'liste_rechercheTexte like-input' },
            IE.jsx.str('input', {
              type: 'text',
              ie_model: this.jsxModelRecherche.bind(this, this),
              placeholder: GlossaireListe_1.TradGlossaireListe.Rechercher,
              title: GlossaireListe_1.TradGlossaireListe.Rechercher,
              'aria-label': GlossaireListe_1.TradGlossaireListe.Rechercher,
              autocorrect: 'off',
              autocapitalize: 'off',
              spellcheck: 'false',
              class: 'browser-default',
            }),
            IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
              class: 'icon_fermeture_widget',
              ie_model: this.jsxBtnRechercheTexte.bind(this, this),
              title: GlossaireListe_1.TradGlossaireListe.supprimer,
            }),
            IE.jsx.str('div', {
              role: 'alert',
              class: [
                'liste_rechercheTexte_alerte',
                Divers_css_1.SD.srOnly,
                'hide',
              ],
              ie_html: lFuncHtmlRecherche,
              'aria-atomic': 'true',
            }),
          );
          lJContenur.ieHtmlAppend(H, { instance: this });
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
          this._refreshContenuDynamique({ avecBackupScroll: this.estMobile });
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
            if (!lNode || !lNode.parentNode || lNode.isConnected === false) {
              return;
            }
            IEHtml_1.IEHtml.injectHTMLParams({
              html: H.join(''),
              element: lNode.parentNode,
              insererAvantLeNode: lNode,
              instance: this,
              ignorerScroll: true,
              clearJSX: true,
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
          if (!this.estMobile) {
            IE.log.addLog(
              `ObjetListe : _refreshContenuDynamique avec overflow visible du contenu (demander à fv) ?`,
            );
          }
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
            ObjetNavigateur_1.Navigateur.ecranH,
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
            lIndices_suppr.forEach((aIndexRange) => {
              lFindExpr.push(`.${this._getClassRange(aIndexRange)}`);
              this._cache.structureWAI.lignes.forEach(
                (aLigne, aIndexStruct) => {
                  if (aLigne && aLigne.indiceRange === aIndexRange) {
                    this._cache.structureWAI.lignes[aIndexStruct] = null;
                  }
                },
              );
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
            this.actualiserLignesContenusWAI();
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
            lBackupScroll.heightEnteteSticky -
            (aParams.ecartForce || 0);
        }
        let lDecalageScroll = 0;
        if (lTopCelluleDansContenu < 0) {
          lDecalageScroll = lTopCelluleDansContenu;
        } else if (
          lTopCelluleDansContenu > 0 &&
          (aParams.avecScrollTopLigne ||
            lRectContenuScroll.height + lBackupScroll.heightEnteteSticky === 0)
        ) {
          lDecalageScroll = lTopCelluleDansContenu;
        } else {
          const lZoneHeight =
            lRectContenuScroll.contentHeight + lBackupScroll.heightEnteteSticky;
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
      _construireLignesContenusWAI() {
        return IE.jsx.str(IE.jsx.fragment, null, (aTabLignes) => {
          this._cache.structureWAI.lignes.forEach((aStructure, aLigne) => {
            if (aStructure) {
              aTabLignes.push(
                IE.jsx.str('div', {
                  role: 'row',
                  'aria-rowindex': aStructure.rowIndex,
                  'aria-owns': aStructure.ids.join(' ').trim(),
                }),
              );
            }
          });
        });
      }
      avecTriColonne() {
        return !!(
          this.Donnees &&
          this.ListeTitres &&
          !!this._cache.colonnesTri
        );
      }
      actualiserLignesContenusWAI() {
        const lElement = ObjetHtml_1.GHtml.getElement(
          this.ids.WAILignesContenu,
        );
        if (lElement) {
          $(lElement).html(this._construireLignesContenusWAI());
        }
      }
      _avecLigneCreationTitreEnLigne() {
        return (
          !this.estMobile &&
          !this.avecBoutonCreationDansEntete() &&
          this._avecLigneCreationTitre()
        );
      }
      avecFiltresDisabled() {
        return (
          !this.estDonneeListeFlatDesign(this.Donnees) ||
          !!(
            this.Donnees.options.avecFiltresDisabledSiVidesEtListeVide &&
            this.Donnees.getNbrLignes() === 0 &&
            this.Donnees.lesFiltresSontVides()
          )
        );
      }
      avecFiltresVisibles() {
        return (
          !!this._options.avecFiltresVisibles && !this.avecFiltresDisabled()
        );
      }
      _construireFiltres() {
        if (
          this.Donnees &&
          this.estDonneeListeFlatDesign(this.Donnees) &&
          this.Donnees._construireFiltres &&
          this._cache.boutons &&
          this._cache.boutons.length > 0
        ) {
          const lAvecFiltre = !this._cache.boutons.every(
            (aBouton) => aBouton.genre !== ObjetListe.typeBouton.filtrer,
          );
          if (lAvecFiltre) {
            return IE.jsx.str(
              ObjetFiltre_1.Filtre,
              {
                idBtnFiltre: this.ids.btnFiltre,
                parametres: {
                  ariaLabelledby:
                    this.ids.WAILabelListe + ' ' + this.ids.WAIFiltre,
                  aveMarginBouton: false,
                  lesFiltresSontVides: this.Donnees.lesFiltresSontVides.bind(
                    this.Donnees,
                  ),
                  reinitFiltres: this.Donnees.reinitFiltres.bind(this.Donnees),
                  callbackSurBtnFiltre: () => {
                    this._options.avecFiltresVisibles =
                      !this._options.avecFiltresVisibles;
                  },
                  getDisabledBtnFiltre: () => {
                    if (this.avecFiltresDisabled()) {
                      return true;
                    }
                    return false;
                  },
                  avecAffichageDirect: this.avecFiltresVisibles(),
                },
              },
              this.Donnees._construireFiltres(),
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
        const lEventContextMenu = aParams.event.type === 'contextmenu';
        delete this._cache.infosMouseDownCellule_apresFinEdition;
        if (this._cache.finEditionCreation) {
          if (this.estDonneeListeFlatDesign(this.Donnees)) {
            return;
          }
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
            ctrlKey: aParams.event.ctrlKey && !lEventContextMenu,
            shiftKey: aParams.event.shiftKey && !lEventContextMenu,
            surInteractionUtilisateur: true,
          });
          if (
            aParams.gestionMultiSelection &&
            !lEventContextMenu &&
            aParams.event.shiftKey &&
            lAvecMultiSelection &&
            this.Donnees.avecMultiSelectionSurShift()
          ) {
            aParams.event.preventDefault();
          }
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
                this.getIdCellule(aNumeroColonne, lNumeroLigne),
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
            this.getRechercheTexte().enleverEntites(),
          )
        ) {
          RechercheTexte_1.RechercheTexte.removeSurlignage(
            $(`#${this.Nom.escapeJQ()}`),
          );
        }
      }
      composeIconEtImage(aParamsCellule, aEstIcon) {
        var _a;
        const lValeur = this.Donnees._getValeur(aParamsCellule);
        const lStyle = this.Donnees.getStyle(aParamsCellule);
        const lClass = this.Donnees.getClass(aParamsCellule);
        let lTooltip =
          (_a = this.Donnees.getTooltip(aParamsCellule)) !== null &&
          _a !== void 0
            ? _a
            : '';
        if (!lTooltip && lValeur !== '') {
          lTooltip = GlossaireWAI_1.TradGlossaireWAI.Coche;
        }
        const lClasses = [
          'liste_contenu_ligne',
          lValeur,
          lClass ? ' ' + lClass : '',
        ];
        if (aEstIcon) {
          lClasses.push('AlignementMilieu');
          return {
            html: IE.jsx.str('i', {
              class: lClasses,
              style: lStyle || false,
              role: 'presentation',
            }),
            tooltip: lTooltip,
            labelledby: true,
          };
        }
        const lLargeurImage =
          this._options.largeurImage > 0
            ? `width:${this._options.largeurImage}px;`
            : '';
        return {
          html: IE.jsx.str(
            'div',
            { style: 'width: 100%', class: 'AlignementMilieu' },
            IE.jsx.str(
              'div',
              {
                class: lClasses,
                style: lLargeurImage + (lStyle ? ' ' + lStyle : ''),
              },
              '\u00A0',
            ),
          ),
          tooltip: lTooltip,
          labelledby: true,
        };
      }
      async surEditionTextFenetreAsync(aParams) {
        const lParams = Object.assign(
          { html: '', surCreation: false, surInputText: false, colonne: -1 },
          aParams,
        );
        const lTitre =
          this._options.titreCreation ||
          this._options.tooltipDescribeBoutonCreation;
        let lStrTitre = lParams.surCreation && lTitre ? lTitre : '';
        if (this.ListeTitres && this.ListeTitres[0]) {
          const lDescripteurTitre = this.ListeTitres[0][lParams.colonne];
          let lStr = '';
          if (lDescripteurTitre) {
            lStr = lDescripteurTitre.estCoche
              ? ''
              : lDescripteurTitre.libelle || '';
          }
          if (lStr) {
            if (lParams.surCreation && lTitre) {
              lStrTitre = lStrTitre + ' - ' + lStr;
            }
            if (!lParams.surCreation) {
              lStrTitre =
                GlossaireListe_1.TradGlossaireListe.modifier + ' - ' + lStr;
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
              fermerFenetreSurClicHorsFenetre: IE.estMobile,
              bloquerFocus: IE.estMobile,
            });
          }
          composeContenu() {
            const lGetNode = (aNode) => {
              ObjetHtml_1.GHtml.setHtml(
                aNode,
                IE.jsx.str(
                  IE.jsx.fragment,
                  null,
                  IE.jsx.str(
                    'label',
                    { for: this.IdEdition, class: Divers_css_1.SD.srOnly },
                    lStrTitre,
                  ),
                  lParams.html,
                ),
                { instance: this.Pere },
              );
              if (lParams.surInputText) {
                $(aNode).on('keyup', (aEvent) => {
                  if (
                    ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(
                      aEvent,
                    )
                  ) {
                    this.surValidation(1);
                  }
                });
              }
            };
            return IE.jsx.str('div', { ie_node: lGetNode });
          }
          surAfficher() {
            if (lParams.surCreation) {
              ObjetHtml_1.GHtml.setFocusEdit(this.IdEdition);
              ObjetHtml_1.GHtml.setSelectionEdit(this.IdEdition);
            }
          }
        }
        const lResult = await new ObjetFenetreEditionText({ pere: this })
          .initAfficher({
            initialiser: function (aInstanceFenetre) {
              aInstanceFenetre.IdEdition = this.IdEdition;
            },
          })
          .afficher();
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
      initCacheStructureWAI() {
        this._cache.structureWAI = { titres: [], lignes: [], totals: [] };
      }
      estDonneeListeFlatDesign(aDonnees) {
        return !!(this.Donnees && this.Donnees.estFlatDesign);
      }
      estDonneeListeTableau(aDonnees) {
        return !!(this.Donnees && !this.Donnees.estFlatDesign);
      }
      getListeLignesTotal() {
        return (
          (this.estDonneeListeTableau(this.Donnees)
            ? this.Donnees.getListeLignesTotal()
            : null) ||
          new ObjetListeElements_1.ObjetListeElements().add(
            ObjetElement_1.ObjetElement.create({ totalbidon: true }),
          )
        );
      }
      jsxGetClassCellulePere(aParams) {
        return this.Donnees._getClassCelluleConteneur(aParams) || '';
      }
      jsxAttrCellule(aParamsCellule, aRoleGrid) {
        const lAttr = {};
        if (this.Donnees.enConstruction_cacheRechercheTexte) {
          return lAttr;
        }
        if (this.Donnees._avecSelection(aParamsCellule)) {
          lAttr['aria-selected'] = !!this._etatSelectionCellule({
            ligne: aParamsCellule.ligne,
            colonne: aParamsCellule.colonne,
          });
        }
        if (
          !aRoleGrid &&
          this.Donnees instanceof
            ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign &&
          this.Donnees.options.avecCocheCBSurLigne &&
          this.Donnees.avecCB(aParamsCellule)
        ) {
          const lVal = this._getValueCBFlatDesign(aParamsCellule.ligne);
          lAttr['aria-checked'] =
            lVal === ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
              ? 'mixed'
              : this._getValueCBFlatDesign(aParamsCellule.ligne) === true;
          if (this.Donnees.getDisabledCB(aParamsCellule)) {
            lAttr['aria-disabled'] = true;
          } else {
            lAttr['aria-disabled'] = null;
            this._cache.avecWAICocheLigne = true;
          }
        }
        return lAttr;
      }
      jsxGetClassListe() {
        var _a, _b, _c;
        const lClasses = ['skin_' + this._options.skin];
        if (!this.Donnees || this.Donnees.Donnees.count() === 0) {
          lClasses.push('vide');
        }
        if (this._options.avecOmbreDroite) {
          lClasses.push('ombre-droite');
        }
        if (this.estMobile) {
        } else {
          if (this._options.hauteurAdapteContenu) {
            lClasses.push(
              ObjetListe_Desktop_css_1.SObjetListe_Desktop.hauteurAuto,
            );
          }
        }
        if (this.Donnees && this.Donnees.options.racineCss) {
          lClasses.push(this.Donnees.options.racineCss);
        }
        if (!this._options.avecCadreSelection) {
          lClasses.push('background-selec');
        }
        if (
          (_c =
            (_b = (_a = (0, AccessApp_1.getApp)()).getOptionsDebug) === null ||
            _b === void 0
              ? void 0
              : _b.call(_a)) === null || _c === void 0
            ? void 0
            : _c.RGAAForcerResumeTableau
        ) {
          if (!this.getAriaLabelListe(false)) {
            lClasses.push(
              ObjetListeEspaceMobile_css_1.SObjetListeEspaceMobile
                .debuglabelmanquant,
            );
          }
        }
        return lClasses.join(' ');
      }
      jsxGetAttrListe() {
        var _a, _b, _c;
        const lAttrs = {};
        if (
          (_c =
            (_b = (_a = (0, AccessApp_1.getApp)()).getOptionsDebug) === null ||
            _b === void 0
              ? void 0
              : _b.call(_a)) === null || _c === void 0
            ? void 0
            : _c.RGAAForcerResumeTableau
        ) {
          let lLabel = this.getAriaLabelListe(false);
          let lClass = Tooltip_module_css_1.STooltip.debugOK;
          if (!lLabel) {
            lLabel = '! ObjetListe avec option "ariaLabel" manquante !';
            lClass = Tooltip_module_css_1.STooltip.debugKO;
          }
          lAttrs[Tooltip_1.Tooltip.attrType] = Tooltip_1.Tooltip.Type.default;
          lAttrs[Tooltip_1.Tooltip.attrClass] = lClass;
          lAttrs[Tooltip_1.Tooltip.attrText] = lLabel;
        }
        const lDescr = Array.isArray(this._options.ariaDescribedBy)
          ? this._options.ariaDescribedBy.join(' ')
          : this._options.ariaDescribedBy || null;
        if (lDescr) {
          lAttrs['aria-describedby'] = lDescr;
          lAttrs.role = 'group';
        }
        return lAttrs;
      }
      getAriaLabelListe(aAvecDefaut = true) {
        let lLabel = '';
        if (this._options.ariaLabel) {
          lLabel = MethodesObjet_1.MethodesObjet.isFunction(
            this._options.ariaLabel,
          )
            ? this._options.ariaLabel() || ''
            : this._options.ariaLabel;
        }
        if (!lLabel) {
          lLabel = aAvecDefaut
            ? this._estRoleTreeGrid()
              ? GlossaireListe_1.TradGlossaireListe.wai.treegrid
              : GlossaireListe_1.TradGlossaireListe.wai.tree
            : '';
        }
        return lLabel;
      }
      jsxGetNodePremierElement(aInstance, aNode) {
        $(aNode).on({
          focusin() {
            $(
              `#${aInstance.Nom.escapeJQ()} .${ObjetListe.SelecteurCss.focusGrid}`,
            ).attr('tabindex', '-1');
          },
          focusout() {
            $(
              `#${aInstance.Nom.escapeJQ()} .${ObjetListe.SelecteurCss.focusGrid}`,
            ).attr('tabindex', '0');
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
      }
      jsxGetNodeAfterToolbar(aNode) {
        const lTabElements =
          ObjetHtml_1.GHtml.getElementsFocusablesDElement(aNode);
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
                      ObjetHtml_1.ObjetHtml.ModeRechercheNavigation.prevCycle;
                    break;
                  case ToucheClavier_1.ToucheClavier.FlecheDroite:
                    lNav =
                      ObjetHtml_1.ObjetHtml.ModeRechercheNavigation.nextCycle;
                    break;
                  case ToucheClavier_1.ToucheClavier.Debut:
                    lNav = ObjetHtml_1.ObjetHtml.ModeRechercheNavigation.first;
                    break;
                  case ToucheClavier_1.ToucheClavier.Fin:
                    lNav = ObjetHtml_1.ObjetHtml.ModeRechercheNavigation.last;
                    break;
                  default:
                    return;
                }
                const lNextNode = ObjetHtml_1.GHtml.getNodeRechercheNavigation(
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
      }
      jsxNodeBtnEnteteLibre(aIndex, aNode) {
        var _a;
        const lElement = this._cache.boutons[aIndex];
        if (
          lElement &&
          lElement.getHtml &&
          MethodesObjet_1.MethodesObjet.isFunction(lElement.getHtml)
        ) {
          ObjetHtml_1.GHtml.setHtml(
            aNode,
            (_a = lElement.getHtml()) !== null && _a !== void 0 ? _a : '',
          );
        }
      }
      jsxModeleBtnCreationEntete(aInstance, aParamsCellule, aAvecSelecFile) {
        const lModele = {
          event(aEvent, aNode) {
            if (aAvecSelecFile) {
              return;
            }
            aInstance.surCreationDeb(false, {
              creationEnFenetre: true,
              paramsSuppBoutonCreation: { nodeBouton: aNode, event: aEvent },
            });
          },
          getDisabled() {
            return aInstance._getNonEditable();
          },
        };
        if (aAvecSelecFile) {
          Object.assign(
            lModele,
            this.jsxModeleSelecFile(aInstance, aParamsCellule, true),
          );
        }
        return lModele;
      }
      jsxModeleBoutonListe(aInstance, aBouton) {
        const lModele = {
          event(aEvent, aNode) {
            const lParams = {
              bouton: aBouton,
              event: aEvent,
              liste: aInstance,
              node: aNode,
            };
            aBouton.event(lParams);
          },
        };
        if (aBouton.getDisabled) {
          lModele.getDisabled = (aNode) => {
            return aBouton.getDisabled({
              bouton: aBouton,
              node: aNode,
              liste: aInstance,
            });
          };
        }
        if (aBouton.getSelection) {
          lModele.getSelection = (aNode) => {
            return aBouton.getSelection({
              bouton: aBouton,
              node: aNode,
              liste: aInstance,
            });
          };
        }
        if (aBouton.getTooltip) {
          lModele.getTitle = (aNode) => {
            return aBouton.getTooltip({
              bouton: aBouton,
              node: aNode,
              liste: aInstance,
            });
          };
        }
        return lModele;
      }
      jsxIfBoutonListe(aBouton, aNode) {
        return aBouton.getVisible({
          bouton: aBouton,
          node: aNode,
          liste: this,
        });
      }
      jsxGetClassBoutonListe(aBouton, aNode) {
        return aBouton.getClass({ bouton: aBouton, node: aNode, liste: this });
      }
      jsxGetAttrsBoutonListe(aBouton, aNode) {
        return aBouton.getAttrs({ bouton: aBouton, node: aNode, liste: this });
      }
      jsxModelRecherche(aInstance) {
        return {
          getValue() {
            return aInstance.getRechercheTexte();
          },
          setValue(aValue) {
            aInstance.setRechercheTexte(aValue);
          },
          node(aNode) {
            $(aNode).on({
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
        };
      }
      jsxBtnRechercheTexte(aInstance) {
        return {
          event() {
            aInstance._annulerRechercheTexte();
          },
        };
      }
      jsxModeleSelecFile(aInstance, aParamsCellule, aSurBoutonEntete) {
        return {
          getOptionsSelecFile(aGetSelecFile) {
            const lOptions = Object.assign(
              {
                classDrag: 'selecfile_classDrag',
                classDragHoverSelec: 'selecfile_classDrag_survol',
              },
              aInstance.Donnees.getOptionsSelecFile(aParamsCellule),
            );
            if (
              lOptions.eventValidation !== false &&
              !aInstance.estMobile &&
              !aSurBoutonEntete
            ) {
              aInstance._cache.ouvrirSelecteurFileParLigne[
                aParamsCellule.ligne + '_' + aParamsCellule.colonne
              ] = aGetSelecFile();
            }
            return lOptions;
          },
          addFiles(aParamsFiles) {
            if (
              'surCreation' in aParamsCellule &&
              aParamsCellule.surCreation &&
              aInstance.ListeCreations.length === 1
            ) {
              aParamsFiles.listeFichiers.parcourir((aFichier) => {
                aInstance.ajouterElementCreation(
                  aFichier.getLibelle(),
                  aFichier,
                );
              });
              return true;
            }
            return aInstance.Donnees.evenementSurSelecFile(
              aParamsCellule,
              aParamsFiles,
            );
          },
        };
      }
      jsxModeleSaisieTexte(
        aInstance,
        aParamsCellule,
        aEstNote,
        aEstTextareaMax,
        aIgnorerEventsNode,
      ) {
        return {
          getValue() {
            return aInstance._valeurEnEdition;
          },
          setValue(aValue, aParams) {
            aInstance._setValueModel({
              ligne: aParamsCellule.ligne,
              colonne: aParamsCellule.colonne,
              surCreation: !!aParamsCellule.surLigneCreation,
              node: aParams.node,
              value: aValue,
            });
          },
          getNote() {
            return aInstance._valeurEnEdition;
          },
          setNote(aNote, aNode) {
            if (
              aInstance.estMobile &&
              aEstNote &&
              aNote === null &&
              aInstance._cache.finEditionCreation
            ) {
              aInstance._cache.finEditionCreation();
              return;
            }
            aInstance._setValueModel({
              ligne: aParamsCellule.ligne,
              colonne: aParamsCellule.colonne,
              surCreation: !!aParamsCellule.surLigneCreation,
              node: aNode,
              value: aNote,
              estNote: aEstNote,
            });
            if (
              aInstance.estMobile &&
              aEstNote &&
              aInstance._cache.finEditionCreation
            ) {
              aInstance._cache.finEditionCreation();
            }
          },
          getOptionsNote() {
            if (aInstance.Donnees) {
              return aInstance.Donnees.getOptionsNote(aParamsCellule) || null;
            }
            return null;
          },
          fromDisplay(aValue) {
            if (aEstNote) {
              return aValue;
            }
            const lControle = aInstance.Donnees
              ? aInstance.Donnees.getControleCaracteresInput(aParamsCellule)
              : null;
            if (lControle && lControle.fromDisplay) {
              aValue = lControle.fromDisplay(
                aParamsCellule.colonne,
                aParamsCellule.ligne,
                aValue,
              );
            }
            return aValue;
          },
          toDisplay(aValue) {
            if (aEstNote) {
              return aValue;
            }
            const lControle = aInstance.estDonneeListeTableau(aInstance.Donnees)
              ? aInstance.Donnees.getControleCaracteresInput(aParamsCellule)
              : null;
            if (lControle && lControle.toDisplay) {
              aValue = lControle.toDisplay(
                aParamsCellule.colonne,
                aParamsCellule.ligne,
                aValue,
              );
            }
            return aValue;
          },
          node(aNode, aMeasure, aContexteCourant) {
            aInstance._cache.avecModificationSaisie = false;
            const lDonneesTableau = aInstance.estDonneeListeFlatDesign(
              aInstance.Donnees,
            )
              ? null
              : aInstance.Donnees;
            const lForceSetNote =
              aEstNote && aContexteCourant.data.forceExitChange
                ? () => {
                    const lParamsExit = {};
                    aContexteCourant.data.forceExitChange(lParamsExit);
                    if (
                      lParamsExit.resultValidation &&
                      !lParamsExit.resultValidation.estValide
                    ) {
                      if (aParamsCellule.surLigneCreation) {
                        aInstance._annulerCreation();
                      } else {
                        aInstance._surEditionFin({
                          colonne: aInstance._cache.selectionCellule.colonne,
                          ligne: aInstance._cache.selectionCellule.ligne,
                        });
                        if (lParamsExit.resultValidation.promiseMessageErreur) {
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
              const lParams = aInstance._getParamsCellule(
                aParamsCellule.colonne,
                aParamsCellule.ligne,
                { surEdition: true },
              );
              if (aParamsCellule.surLigneCreation) {
                aInstance._surCreation(aInstance._valeurEnEdition);
              } else {
                aInstance._surEdition(
                  lParams,
                  aInstance._valeurEnEdition,
                  aInstance._cache.avecModificationSaisie,
                );
              }
            };
            aInstance._cache.finEditionCreation.estCreation =
              aParamsCellule.surLigneCreation;
            if (aIgnorerEventsNode) {
              return;
            }
            $(aNode).on({
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
                  lDonneesTableau &&
                  lDonneesTableau.options.avecNavigationClavierFlechesEnEdition
                ) {
                  const lNodeName = this.nodeName.toLowerCase();
                  if (
                    (lNodeName === 'input' || lNodeName === 'textarea') &&
                    ((aEvent.which ===
                      ToucheClavier_1.ToucheClavier.FlecheGauche &&
                      !aInstance._estCurseurEnBorneDeSelection(this, true)) ||
                      (aEvent.which ===
                        ToucheClavier_1.ToucheClavier.FlecheDroite &&
                        !aInstance._estCurseurEnBorneDeSelection(this, false)))
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
                    if (aParamsCellule.surLigneCreation) {
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
                      aParamsCellule.colonne,
                      aParamsCellule.ligne,
                      { surEdition: true },
                    );
                    let lParamSelecCelluleSuiv = null;
                    if (
                      lDonneesTableau &&
                      lDonneesTableau.options.avecCelluleSuivanteSurFinEdition
                    ) {
                      lParamSelecCelluleSuiv =
                        lDonneesTableau.getParametresSelectionnerCelluleSuivanteFinEdition(
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
                            zonesActualisation: { contenu: true, total: true },
                            avecEvenementModificationSelection: false,
                          });
                        }
                      }
                    };
                    if (aParamsCellule.surLigneCreation) {
                      aInstance._surCreation(aInstance._valeurEnEdition);
                      lFuncSuite();
                    } else {
                      const lResult = aInstance._surEdition(
                        lParams,
                        aInstance._valeurEnEdition,
                        aInstance._cache.avecModificationSaisie,
                        lDonneesTableau.options
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
                    lDonneesTableau &&
                    lDonneesTableau.options
                      .avecNavigationClavierFlechesEnEdition &&
                    !aInstance._cache._keyDownSansNavigationFleche
                  ) {
                    aInstance._navigationFlechesClavier(
                      aEvent,
                      aInstance._getParamsCellule(
                        aParamsCellule.colonne,
                        aParamsCellule.ligne,
                        {
                          surEdition: true,
                          node: this,
                          event: aEvent,
                          avecCelluleEditable: true,
                          avecSelection: true,
                          entrerEdition: true,
                        },
                      ),
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
        };
      }
      jsxNodeDeploiementLigne(aParamsCellule, aNode) {
        const lThis = this;
        $(aNode).on('validation', (aEvent) => {
          lThis.surDeploiement(
            aEvent,
            aParamsCellule.colonne,
            aParamsCellule.ligne,
            true,
          );
        });
      }
      jsxGetModelCBLigneFlatDesign(aInstance, aLigne) {
        return {
          getValue() {
            const lResult = aInstance._getValueCBFlatDesign(aLigne);
            return lResult === true;
          },
          getIndeterminate() {
            return (
              aInstance._getValueCBFlatDesign(aLigne) ===
              ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
            );
          },
          setValue(aValue) {
            if (
              aLigne >= 0 &&
              aInstance.estDonneeListeFlatDesign(aInstance.Donnees) &&
              aInstance.Donnees.options.avecCocheCBSurLigne
            ) {
              return;
            }
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
          getDisabled() {
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
        };
      }
      jsxGetAttrCBLigneFlatDesign(aLigne, aNode) {
        let lLabel = '';
        if (aLigne < 0) {
          if (
            this._options.avecCBToutCocher ===
              ObjetListe.typeLibelleCocheCBEntete.compteurSelec &&
            this.getListeArticlesCochees().count() === 0
          ) {
            lLabel = GlossaireListe_1.TradGlossaireListe.toutCocher;
          }
        } else {
          lLabel =
            this._getValueCBFlatDesign(aLigne) ===
            ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte
              ? GlossaireListe_1.TradGlossaireListe.wai.DecocherLigne
              : GlossaireListe_1.TradGlossaireListe.wai.CocherLigne;
        }
        return { 'aria-label': lLabel };
      }
      jsxGetModelCocheTitreClassique(aInstance, aColonne) {
        return {
          getValue() {
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
          setValue() {
            aInstance._clickSurCocheTitre(aColonne);
          },
        };
      }
      jsxGetAttrCocheTitreClassique(aColonne) {
        let lTitle = '';
        lTitle = GlossaireListe_1.TradGlossaireListe.toutCocher;
        if (this.Donnees) {
          const lEtatCoche = this.Donnees.getEtatCocheSelonFils(
            null,
            this._getParamsCellule(aColonne, -1),
          );
          switch (lEtatCoche) {
            case ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Aucune:
              lTitle = GlossaireListe_1.TradGlossaireListe.toutCocher;
              break;
            case ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte:
              lTitle = GlossaireListe_1.TradGlossaireListe.toutDecocher;
              break;
          }
        }
        return { title: lTitle, 'aria-label': lTitle };
      }
      jsxNodeGabaritRefresh(aStart, aIndiceInfosColonne, aNode) {
        const lCacheRef = this._cache.refresh;
        const lNom = aStart ? 'node_gab_start' : 'node_gab_end';
        if (!lCacheRef[lNom]) {
          lCacheRef[lNom] = {};
        }
        lCacheRef[lNom][aIndiceInfosColonne] = aNode;
        lCacheRef.observer.observe(aNode);
        lCacheRef.mapNodesObs.set(aNode, { gabarit: true });
        const lThis = this;
        $(aNode).on('mousedown', () => {
          lThis._refreshContenuDynamique();
        });
      }
      jsxNodeObsRange(aStart, aIndiceRange, aIndiceInfosColonnees, aNode) {
        const lCacheRef = this._cache.refresh;
        lCacheRef.observer.observe(aNode);
        lCacheRef.mapNodesObs.set(aNode, { gabarit: false });
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
          lRange[aStart ? 'node_start' : 'node_end'] = aNode;
        }
        $(aNode).on('destroyed', function () {
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
          this._actualiserHeightRanges(aIndiceRange);
        }
      }
      jsxNodeTotalFd(aInstance, aLigne, aColonne, aNode) {
        $(aNode).on({
          mousedown(aEvent) {
            aInstance._surEventDownLigne({
              event: aEvent,
              ligne: aLigne,
              colonne: aColonne,
            });
          },
          click() {
            const lParams = aInstance._getParamsCellule(aColonne, aLigne);
            if (aInstance.evenementSelectionClick(lParams)) {
              return;
            }
          },
          keyup(aEvent) {
            if (ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent)) {
              aInstance._surSelection(aColonne, aLigne, {
                surInteractionUtilisateur: true,
              });
              aInstance.surSelectionEvenement(aColonne, aLigne, true);
              aInstance._editionDebSurSelection(aColonne, aLigne, aEvent);
            }
          },
        });
      }
      jsxNodeAfterCellule(aNode) {
        ObjetHtml_1.GHtml.getElementsFocusablesDElement(aNode, {
          ignoreAriaHidden: false,
        }).forEach((aNode) => {
          aNode.setAttribute('tabindex', '-1');
        });
      }
      getEventMapCelluleFocusable() {
        return {
          focus() {
            ObjetHtml_1.GHtml.getElementsFocusablesDElement(this, {
              avecAriaDisabled: false,
            }).forEach((aNode) => {
              aNode.setAttribute('tabindex', '0');
            });
          },
          blur() {
            ObjetHtml_1.GHtml.getElementsFocusablesDElement(this, {
              avecAriaDisabled: false,
            }).forEach((aNode) => {
              aNode.setAttribute('tabindex', '-1');
            });
          },
        };
      }
      getIdBtnTri(aInfosIndiceBloc, aNumeroCol) {
        return this.ids.curseurTri + aInfosIndiceBloc + '_' + aNumeroCol;
      }
      getAttrsWAICellule(aParamsCellule, aParams) {
        if (this.Donnees.enConstruction_cacheRechercheTexte) {
          return {};
        }
        const lRoleGrid = this._estRoleTreeGrid();
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        let lAriaDescribedByTab = [];
        if (lRoleGrid) {
          if (
            !this._getNonEditable() &&
            lDonneesTableau &&
            (lDonneesTableau.avecEdition(aParamsCellule) ||
              lDonneesTableau.avecEvenementEdition(aParamsCellule))
          ) {
            lAriaDescribedByTab.push(this.ids.WAICelluleEditable);
          }
        }
        const lAttrs = {
          tabindex: '-1',
          'aria-haspopup':
            this.Donnees.getAriaHasPopup(aParamsCellule) || false,
          'aria-expanded': aParamsCellule._estDeploiement
            ? !!aParamsCellule._estDeploiement.expanded
              ? 'true'
              : 'false'
            : false,
          'aria-describedby':
            lAriaDescribedByTab.length > 0
              ? lAriaDescribedByTab.join(' ')
              : false,
          'aria-label': this.Donnees.getAriaLabel(aParamsCellule) || false,
        };
        if (lRoleGrid) {
          Object.assign(lAttrs, {
            role:
              lDonneesTableau &&
              lDonneesTableau.estCelluleWAIRowHeader(aParamsCellule)
                ? 'rowheader'
                : 'gridcell',
            'aria-colspan':
              aParams && aParams.nombreColonnesFusion > 1
                ? aParams.nombreColonnesFusion
                : false,
            'aria-rowspan':
              aParams && aParams.nombreLignesEnFusion > 1
                ? aParams.nombreLignesEnFusion
                : false,
          });
        } else {
          let lStruct =
            this._cache.structArborescenceLignes[
              this._cache.lignesVisibles.indexOf(aParamsCellule.ligne)
            ];
          const lEstUnDeploiement =
            this.Donnees.estUnDeploiement(aParamsCellule);
          if (!lStruct) {
            lStruct = { level: 1, index: 1, count: 1 };
          }
          Object.assign(lAttrs, {
            role: 'treeitem',
            'aria-level': lStruct.level,
            'aria-posinset': lStruct.index,
            'aria-setsize': lStruct.count,
            'aria-expanded':
              !aParamsCellule._estDeploiement &&
              (lStruct.avecFilsVisible || lEstUnDeploiement)
                ? !!(
                    (!lEstUnDeploiement && lStruct.avecFilsVisible) ||
                    this.Donnees._estDeploye(aParamsCellule.ligne)
                  )
                  ? 'true'
                  : 'false'
                : false,
          });
        }
        return lAttrs;
      }
      jsxGetNodeListe(aInstance, aNode) {
        $(aNode).on({
          keydown: function (aEvent) {
            if (
              aEvent.ctrlKey &&
              String.fromCharCode(aEvent.which).toLowerCase() === 'a' &&
              aInstance._options.avecToutSelectionner &&
              !aEvent.target.closest('input') &&
              !aInstance._cache.editionEnCours &&
              !aInstance._cache.creationEnCours &&
              aInstance.Donnees &&
              aInstance.Donnees.avecMultiSelection()
            ) {
              for (
                let iLigne = 0;
                iLigne < aInstance._cache.lignesSelectionnees.length;
                iLigne++
              ) {
                if (!aInstance._etatSelectionCellule({ ligne: iLigne })) {
                  aInstance.selectionnerLigne({
                    ligne: iLigne,
                    selectionner: true,
                    _avecVisuCadreSelection: false,
                  });
                }
              }
              aInstance._actualiserCadreSelection();
              aEvent.preventDefault();
            }
          },
          keypress(aEvent) {
            if (
              aEvent.target.closest('input, textarea') ||
              aEvent.target.closest('.flecheTri')
            ) {
              return;
            }
            aInstance.gererParsingSurEventKey(aEvent);
            if (
              aInstance.Pere &&
              aInstance.Evenement &&
              aInstance.Donnees &&
              aInstance.Donnees.options &&
              aInstance.Donnees.options.avecEvnt_KeyPressListe
            ) {
              const lCallback = function () {
                aInstance.Evenement.call(aInstance.Pere, {
                  instance: aInstance,
                  event: aEvent,
                  genreEvenement:
                    Enumere_EvenementListe_1.EGenreEvenementListe.KeyPressListe,
                });
                aInstance._refreshSelf();
              };
              if (aInstance.Donnees.options.avecTimeoutEvent_KeyPressListe) {
                clearTimeout(aInstance._cache.timerKeyPress);
                aInstance._cache.timerKeyPress = setTimeout(() => {
                  if (!aInstance.isDestroyed()) {
                    lCallback();
                  }
                }, 0);
              } else {
                lCallback();
              }
            }
          },
          keyup: function (aEvent) {
            if (aEvent.target.closest('input, textarea')) {
              return;
            }
            if (
              ToucheClavier_1.ToucheClavierUtil.estEventSupprimer(aEvent) &&
              aInstance._avecSuppressionSelectionCourante(
                aInstance._cache.selectionCellule.ligne,
                aInstance._cache.selectionCellule.colonne,
              )
            ) {
              aInstance._surSuppression();
            } else if (
              aInstance.Pere &&
              aInstance.Evenement &&
              aInstance.Donnees &&
              aInstance.Donnees.options &&
              aInstance.Donnees.options.avecEvnt_KeyUpListe
            ) {
              aInstance.Evenement.call(aInstance.Pere, {
                instance: aInstance,
                event: aEvent,
                genreEvenement:
                  Enumere_EvenementListe_1.EGenreEvenementListe.KeyUpListe,
              });
              aInstance._refreshSelf();
            }
            if (aInstance._estToucheNavigationFlechesClavier(aEvent)) {
              aInstance._navigationFlechesClavier(aEvent, {
                ligneEtColonneFixe: true,
                forcerNavigationFocus: true,
              });
              ObjetNavigateur_1.Navigateur.stopperEvenement(
                aEvent.originalEvent,
              );
            }
          },
          mousenter: function () {
            aInstance._cache.mouseOUTListe = false;
          },
          mouseleave: function () {
            aInstance._cache.mouseOUTListe = true;
          },
        });
      }
      _surKeyUpCellulePere(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos) {
          return;
        }
        if (
          lInstance._cache.creationEnCours ||
          lInstance._cache.editionEnCours
        ) {
          return;
        }
        const lParamsCellule = lInstance._getParamsCellule(
          lInfos.colonne,
          lInfos.ligne,
        );
        if (
          (ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent) ||
            ToucheClavier_1.ToucheClavierUtil.estEventEdition(aEvent)) &&
          lInstance._estEventSansSelect(aEvent)
        ) {
          return;
        }
        let lBoquerSelection = false;
        if (
          lInstance.Donnees &&
          lInstance._options.skin === ObjetListe.skin.flatDesign &&
          lInstance.estDonneeListeFlatDesign(lInstance.Donnees) &&
          lInstance.Donnees.avecCB &&
          lInstance.Donnees.avecCB(lParamsCellule) &&
          (ToucheClavier_1.ToucheClavierUtil.estEventEspace(aEvent) ||
            (ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(aEvent) &&
              !lInstance.Donnees._avecSelection(lParamsCellule)))
        ) {
          lInstance._modifierCBLigneFlatDesign(lParamsCellule);
          lBoquerSelection = true;
        }
        if (
          ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(aEvent) &&
          lInstance._estRoleTreeGrid() &&
          lInstance.surDeploiement(aEvent, lInfos.colonne, lInfos.ligne, true)
        ) {
          return;
        }
        if (
          !lBoquerSelection &&
          (ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent) ||
            ToucheClavier_1.ToucheClavierUtil.estEventEdition(aEvent))
        ) {
          lInstance._surSelection(lInfos.colonne, lInfos.ligne, {
            surInteractionUtilisateur: true,
          });
          lInstance.surSelectionEvenement(lInfos.colonne, lInfos.ligne, true);
        }
        if (ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent)) {
          if (lInstance.surDeploiement(aEvent, lInfos.colonne, lInfos.ligne)) {
            return;
          }
          lInstance._editionDebSurSelection(
            lInfos.colonne,
            lInfos.ligne,
            aEvent,
          );
        }
        if (ToucheClavier_1.ToucheClavierUtil.estEventEdition(aEvent)) {
          lInstance.surEditionDeb(lInfos.colonne, lInfos.ligne);
        } else if (lInstance._estToucheNavigationFlechesClavier(aEvent)) {
          lInstance._navigationFlechesClavier(
            aEvent,
            Object.assign(lInfos, {
              ligneEtColonneFixe: true,
              forcerNavigationFocus: true,
            }),
          );
          aEvent.stopPropagation();
        }
      }
      construireGridWAI(aAvecTri, aAvecGridTotal) {
        const lNbLignesTitre = this._cache.structureWAI.titres.length || 0;
        const lNbLignesTri = aAvecTri ? 1 : 0;
        const lNbLignesCreation = this._avecLigneCreationTitreEnLigne() ? 1 : 0;
        const lNbLignesTotal = aAvecGridTotal
          ? this._cache.structureWAI.totals.length
          : 0;
        const lNbLignesContenus =
          this._cache.lignesVisibles.length +
          lNbLignesTitre +
          lNbLignesTri +
          lNbLignesCreation;
        const lRowsTitre =
          this._cache.structureWAI.titres.length > 0
            ? IE.jsx.str('div', { role: 'rowgroup' }, (aTabTitre) => {
                this._cache.structureWAI.titres.forEach((aIds, aLigne) => {
                  if (
                    (aIds === null || aIds === void 0 ? void 0 : aIds.ids) &&
                    !(aIds === null || aIds === void 0
                      ? void 0
                      : aIds.estLigneAIgnorer)
                  ) {
                    aTabTitre.push(
                      IE.jsx.str('div', {
                        role: 'row',
                        'aria-rowindex': aLigne + 1,
                        'aria-owns': aIds.ids.join(' '),
                      }),
                    );
                  }
                });
              })
            : '';
        return IE.jsx.str(
          'div',
          {
            class: Divers_css_1.SD.srOnly,
            role: 'treegrid',
            'aria-rowcount': lNbLignesContenus + lNbLignesTotal,
            'aria-describedby': this.ids.WAIDescribeTreeGrid,
            'aria-labelledby': this.ids.WAILabelListe,
          },
          lRowsTitre,
          () => {
            if (aAvecTri) {
              return IE.jsx.str(
                'div',
                { role: 'rowgroup' },
                IE.jsx.str('div', { role: 'row' }, (aTabTri) => {
                  let lIndiceColVisible = 0;
                  this._cache.infosZonesColonnes.forEach(
                    (aInfosZoneColonnes) => {
                      aInfosZoneColonnes.colonnesVisibles.forEach(
                        (aNumeroColonne) => {
                          lIndiceColVisible += 1;
                          aTabTri.push(
                            IE.jsx.str('div', {
                              role: 'gridcell',
                              'aria-colindex': lIndiceColVisible,
                              'aria-rowindex': 1 + lNbLignesTitre,
                              'aria-owns': this._cache.colonnesTri[
                                aNumeroColonne
                              ]
                                ? this.getIdBtnTri(
                                    aInfosZoneColonnes.indiceBloc,
                                    aNumeroColonne,
                                  )
                                : false,
                            }),
                          );
                        },
                      );
                    },
                  );
                }),
              );
            }
          },
          lNbLignesCreation > 0
            ? IE.jsx.str(
                'div',
                { role: 'rowgroup' },
                IE.jsx.str('div', {
                  role: 'row',
                  'aria-owns': this._getIdCreation(-1, -1),
                }),
              )
            : '',
          IE.jsx.str(
            'div',
            { role: 'rowgroup', id: this.ids.WAILignesContenu },
            this._construireLignesContenusWAI(),
          ),
          aAvecGridTotal && this._cache.structureWAI.totals.length > 0
            ? IE.jsx.str(
                'div',
                {
                  role: 'rowgroup',
                  'aria-labelledby': this.ids.WAIDescribeTreeGridTotal,
                },
                (aTabLignes) => {
                  this._cache.structureWAI.totals.forEach(
                    (aIdsLigne, aIndex) => {
                      if (aIdsLigne && aIdsLigne.length > 0) {
                        const lNumeroLigne = lNbLignesContenus + aIndex + 1;
                        aTabLignes.push(
                          IE.jsx.str('div', {
                            role: 'row',
                            'aria-rowindex': lNumeroLigne,
                            'aria-owns': aIdsLigne.join(' '),
                          }),
                        );
                      }
                    },
                  );
                },
              )
            : '',
        );
      }
      _construireCopySVG() {
        return IE.jsx.str(
          'div',
          {
            class: ObjetListe_Desktop_css_1.SObjetListe_Desktop.copySVG,
            'aria-hidden': 'true',
          },
          IE.jsx.str(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '100%',
              height: '100%',
            },
            IE.jsx.str('rect', {
              x: '0',
              y: '0',
              width: '100%',
              height: '100%',
            }),
          ),
        );
      }
      _construireCelluleDesktop(aParamsCellule, aParams) {
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        const lInfosContenu = this._composeContenuCellule(
          aParamsCellule,
          aParams.taille - aParams.indentation,
        );
        const lEstAlignVCenter =
          lDonneesTableau && lDonneesTableau.alignVCenter(aParamsCellule);
        const lRoleGrid = this._estRoleTreeGrid();
        const lAvecSelecFile =
          !this._getNonEditable() && this.Donnees.avecSelecFile(aParamsCellule);
        const lAttrs = {
          id: aParams.id,
          class: [
            'liste_contenu_cellule',
            lEstAlignVCenter ? ' liste_cellule_alignVCenter' : '',
            'liste-cellule-focusable',
          ],
          style:
            aParams.indentation > 0
              ? `padding-left:${aParams.indentation}px;`
              : false,
        };
        let lStrTooltip = '';
        let lIdWAITooltip = '';
        if (!this.Donnees.enConstruction_cacheRechercheTexte) {
          Object.assign(lAttrs, {
            ie_model: lAvecSelecFile
              ? this.jsxModeleSelecFile.bind(this, this, aParamsCellule, false)
              : false,
            ie_selecfile: lAvecSelecFile,
            ie_attr: this.jsxAttrCellule.bind(this, aParamsCellule, lRoleGrid),
          });
          Object.assign(
            lAttrs,
            this.getAttrsWAICellule(aParamsCellule, aParams),
          );
          if (lInfosContenu.tooltip) {
            lStrTooltip = lInfosContenu.tooltip;
            lIdWAITooltip = `${this.Nom}_${aParamsCellule.ligne}_${aParamsCellule.colonne}_tooltip_cell`;
            const lAttrWAi = lInfosContenu.labelledby
              ? 'aria-labelledby'
              : 'aria-describedby';
            Object.assign(lAttrs, {
              'data-tooltip': Tooltip_1.Tooltip.Type.default,
              'data-tooltip-id': lIdWAITooltip,
              [lAttrWAi]: lAttrs[lAttrWAi]
                ? lIdWAITooltip + ' ' + lAttrs[lAttrWAi]
                : lIdWAITooltip,
            });
          }
          if (lInfosContenu.idsLabel) {
            let lIds = lInfosContenu.idsLabel;
            if (lAttrs['aria-labelledby']) {
              lIds = lAttrs['aria-labelledby'] + ' ' + lIds;
            }
            lAttrs['aria-labelledby'] = lIds || false;
          }
        }
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            'div',
            Object.assign({}, lAttrs, {
              ie_nodeafter: !this.Donnees.enConstruction_cacheRechercheTexte
                ? this.jsxNodeAfterCellule.bind(this)
                : false,
            }),
            lInfosContenu.html,
          ),
          this.Donnees.estCelluleCopie(aParamsCellule)
            ? this._construireCopySVG()
            : '',
          aParams.htmlCellulesSpan
            ? IE.jsx.str(
                'div',
                {
                  'aria-hidden': 'true',
                  role: 'presentation',
                  class: Divers_css_1.SD.srOnly,
                },
                aParams.htmlCellulesSpan,
              )
            : '',
          lStrTooltip
            ? IE.jsx.str(
                'div',
                {
                  'aria-hidden': 'true',
                  role: 'presentation',
                  id: lIdWAITooltip,
                  class: [Divers_css_1.SD.srOnly],
                },
                lStrTooltip.replaceRCToHTML(),
              )
            : '',
        );
      }
      _construireCelluleMobile(aParamsCellule, aTypeValeur, aId, aTaille) {
        const lRoleGrid = this._estRoleTreeGrid();
        let lContenuAffichage = { valeur: '' };
        let lAvecDeploiementCellule = false;
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        switch (aTypeValeur) {
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche:
            lContenuAffichage = { valeur: this._composeCoche(aParamsCellule) };
            break;
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
            .CocheDeploiement:
            if (this.Donnees.estUnDeploiement(aParamsCellule)) {
              lContenuAffichage.valeur =
                this._composeDeploiementMobile(aParamsCellule);
            }
            break;
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Image:
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon:
            lContenuAffichage.valeur = this.composeIconEtImage(
              aParamsCellule,
              aTypeValeur ===
                ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon,
            ).html;
            break;
          default:
            lContenuAffichage =
              this.Donnees._getContenuAffichage(aParamsCellule);
            if (
              this._deploiementSurCellule(aParamsCellule) &&
              this.Donnees.avecImageSurColonneDeploiement(aParamsCellule)
            ) {
              lAvecDeploiementCellule = true;
              const lAvecEvent =
                !this.Donnees.avecEventDeploiementSurCellule(aParamsCellule);
              lContenuAffichage.valeur = [
                IE.jsx.str(
                  'div',
                  {
                    ie_node: lAvecEvent
                      ? this.jsxNodeDeploiementLigne.bind(this, aParamsCellule)
                      : false,
                  },
                  this._composeDeploiementMobile(aParamsCellule),
                ),
                lContenuAffichage.valeur,
              ].join('');
            }
        }
        const lClassesDIV = [
          'liste_cellule_div',
          'liste_contenu_ligne',
          'liste-cellule-focusable',
          IEHtml_Ripple_1.StylesCustomIEHTMLRipple.ieRippleAllowpass,
          this.Donnees.getClass(aParamsCellule) || '',
        ];
        if (lAvecDeploiementCellule) {
          lClassesDIV.push('liste_cellule_div_depl');
        }
        let lStyleDIV = '';
        if (!aTaille.estPourcent && !aTaille.valeurRem) {
          lStyleDIV = 'width:' + aTaille.px + 'px;';
        }
        const lIndentation =
          (lDonneesTableau === null || lDonneesTableau === void 0
            ? void 0
            : lDonneesTableau.getIndentationCellule(aParamsCellule)) || 0;
        if (lIndentation > 0) {
          lStyleDIV += 'padding-left:' + lIndentation + 'px;';
        }
        lStyleDIV += this.Donnees.getStyle(aParamsCellule) || '';
        return [
          IE.jsx.str(
            'div',
            Object.assign(
              {
                id: this.getIdCellule(
                  aParamsCellule.colonne,
                  aParamsCellule.ligne,
                  true,
                ),
                class: lClassesDIV,
                style: lStyleDIV,
                ie_nodeafter: !this.Donnees.enConstruction_cacheRechercheTexte
                  ? this.jsxNodeAfterCellule.bind(this)
                  : false,
                ie_attr: !this.Donnees.enConstruction_cacheRechercheTexte
                  ? this.jsxAttrCellule.bind(this, aParamsCellule, lRoleGrid)
                  : false,
              },
              this.getAttrsWAICellule(aParamsCellule),
            ),
            lContenuAffichage.valeur,
          ),
        ].join('');
      }
      _construireContenuMobile() {
        const H = [];
        this._cache.positionsCelluleCadreSelection = {};
        const lCacheRef = this._cache.refresh;
        const lIndiceInfosColonne = 0;
        const lInfosColonnes =
          this._cache.infosZonesColonnes[lIndiceInfosColonne];
        const lNbColonnesVisibles = lInfosColonnes.colonnesVisibles.length;
        const lStyles = { 'grid-column': `1/${lNbColonnesVisibles + 1}` };
        if (lCacheRef.avecConstructionDynamiqueContenu) {
          H.push(
            IE.jsx.str('div', {
              ie_node: this.jsxNodeGabaritRefresh.bind(
                this,
                true,
                lIndiceInfosColonne,
              ),
              class: 'gabarit-refresh',
              style: lStyles,
            }),
          );
        }
        H.push(this._construireContenuRange(lInfosColonnes, 0));
        if (lCacheRef.avecConstructionDynamiqueContenu) {
          H.push(
            IE.jsx.str('div', {
              ie_node: this.jsxNodeGabaritRefresh.bind(
                this,
                false,
                lIndiceInfosColonne,
              ),
              class: 'gabarit-refresh',
              style: lStyles,
            }),
          );
        }
        return H.join('');
      }
      _composeDeploiementMobile(aParamsCellule) {
        return this.Donnees._estDeploye(aParamsCellule.ligne)
          ? IE.jsx.str(IconeSvgFleche_num_bas_1.IconeSvgFleche_num_bas, null)
          : IE.jsx.str(IconeSvgFleche_num_1.IconeSvgFleche_num, null);
      }
      construireContenuListeInterne(aInfosZoneColonnes) {
        const lCacheRef = this._cache.refresh;
        this._cache.couleursAlternanceParLigne = [];
        this._cache.positionsCelluleCadreSelection = {};
        const lStyleGabarit = {
          'grid-column': `1/${aInfosZoneColonnes.colonnesVisibles.length + 1}`,
        };
        const lTaillesGrid = this._construireTaillesGrid(aInfosZoneColonnes);
        const lPremierBloc = aInfosZoneColonnes.indiceBloc === 0;
        const lEstTreeGrid = this._estRoleTreeGrid();
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          this._construireTotalFD(true, true),
          IE.jsx.str(
            'div',
            {
              id: this.getIdGridFocus(aInfosZoneColonnes.indiceBloc),
              class: [
                'SansMain',
                ObjetListeEspaceMobile_css_1.SObjetListeEspaceMobile
                  .liste_content_lignes,
                ObjetListe.SelecteurCss.focusGrid,
              ],
              style:
                lTaillesGrid.styleGrid +
                (lTaillesGrid.width > 0
                  ? ObjetStyle_1.GStyle.composeWidth(lTaillesGrid.width)
                  : ''),
              role: lEstTreeGrid ? false : 'tree',
              'aria-labelledby': lEstTreeGrid ? false : this.ids.WAILabelListe,
              tabindex: lPremierBloc ? '0' : '-1',
              ie_node: this.jsxGetNodePremierElement.bind(this, this),
            },
            (T) => {
              if (lCacheRef.avecConstructionDynamiqueContenu) {
                T.push(
                  IE.jsx.str('div', {
                    ie_node: this.jsxNodeGabaritRefresh.bind(
                      this,
                      true,
                      aInfosZoneColonnes.indiceBloc,
                    ),
                    class: 'gabarit-refresh',
                    style: lStyleGabarit,
                    role: 'presentation',
                  }),
                );
              }
              T.push(
                this.construireContenuListeInterneLignes(aInfosZoneColonnes, 0),
              );
              if (lCacheRef.avecConstructionDynamiqueContenu) {
                T.push(
                  IE.jsx.str('div', {
                    ie_node: this.jsxNodeGabaritRefresh.bind(
                      this,
                      false,
                      aInfosZoneColonnes.indiceBloc,
                    ),
                    class: 'gabarit-refresh',
                    style: lStyleGabarit,
                    role: 'presentation',
                  }),
                );
              }
            },
          ),
          this._construireTotalFD(false, true),
        );
      }
      construireContenuListeInterneLignes(aInfosZoneColonnes, aIndiceRange) {
        const T = [];
        let lJeuxCouleurs,
          lDerniereLigne,
          lStyleBordures,
          lCouleurBorduresCellules,
          lNumeroPremiereColonneFusion,
          lNumeroDerniereColonneFusion,
          lDerniereColonne,
          lNombreColonnesFusion,
          lPremiereColonne,
          lNombreLignesEnFusion,
          lClassLigne,
          lFusions,
          lCouleurAlternance = false,
          lAvecSeparateurDeploiement = false;
        let lErreurFusionLigne = false;
        const lNbColonnesVisibles = aInfosZoneColonnes.colonnesVisibles.length;
        const lNbLignesVisibles = this._cache.lignesVisibles.length;
        const lRoleGrid = this._estRoleTreeGrid();
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        const lDonneesFD = this.estDonneeListeFlatDesign(this.Donnees)
          ? this.Donnees
          : null;
        const lNumeroLignesEntete =
          (this._cache.structureWAI.titres.length || 0) +
          (this.avecTriColonne() ? 1 : 0) +
          (this._avecLigneCreationTitreEnLigne() ? 1 : 0);
        if (lNbLignesVisibles === 0 && this._options.messageContenuVide) {
          T.push(
            IE.jsx.str(
              'div',
              {
                class:
                  ObjetListeEspaceMobile_css_1.SObjetListeEspaceMobile
                    .liste_messageVide,
                style:
                  'grid-column: 1 / ' +
                  (aInfosZoneColonnes.colonnesVisibles.length + 1),
                role: lRoleGrid ? 'presentation' : 'treeitem',
              },
              this._options.messageContenuVide,
            ),
          );
        }
        if (!this.Donnees || !this.ListeTailles) {
          return T.join('');
        }
        const lClasseRange = this._cache.refresh
          .avecConstructionDynamiqueContenu
          ? this._getClassRange(aIndiceRange)
          : '';
        const lRangeLignes = { debut: 0, fin: lNbLignesVisibles };
        if (this._cache.refresh.avecConstructionDynamiqueContenu) {
          const lStructure = this._cache.refresh.structure[aIndiceRange];
          lRangeLignes.debut = lStructure.deb;
          lRangeLignes.fin = lStructure.fin + 1;
        }
        const lAvecObserver =
          this._cache.refresh.avecConstructionDynamiqueContenu &&
          !this.Donnees.enConstruction_cacheRechercheTexte &&
          lRangeLignes.fin > lRangeLignes.debut;
        if (lAvecObserver) {
          T.push(
            IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str('div', {
                class: lClasseRange,
                role: 'presentation',
                style:
                  'height:0; grid-column:1/' + (lNbColonnesVisibles + 1) + ';',
                ie_nodeafter: this.jsxNodeObsRange.bind(
                  this,
                  true,
                  aIndiceRange,
                  aInfosZoneColonnes.indiceBloc,
                ),
              }),
            ),
          );
        }
        let lParamCelluleLigne = null;
        for (
          let iIndice = lRangeLignes.debut;
          iIndice < lRangeLignes.fin;
          iIndice++
        ) {
          const J = this._cache.lignesVisibles[iIndice];
          lPremiereColonne = true;
          lAvecSeparateurDeploiement = false;
          lParamCelluleLigne = this._getParamsCellule(-1, J);
          if (
            (iIndice > 0 || aIndiceRange > 0) &&
            lNbColonnesVisibles === 1 &&
            !this.Donnees.enConstruction_cacheRechercheTexte &&
            lDonneesFD &&
            lDonneesFD.avecSeparateurLigneHautFlatdesign &&
            lDonneesFD.avecSeparateurLigneHautFlatdesign(
              lParamCelluleLigne,
              this._getParamsCellule(
                -1,
                this._cache.lignesVisibles[iIndice - 1],
              ),
            )
          ) {
            T.push(
              IE.jsx.str('hr', {
                class: [
                  ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                    .liste_sepligne,
                  lClasseRange,
                ],
                role: 'presentation',
              }),
            );
          }
          let lAvecLigneDraggable =
            !this.Donnees.enConstruction_cacheRechercheTexte &&
            this.Donnees.avecLigneDraggable(lParamCelluleLigne);
          if (
            !lAvecLigneDraggable &&
            this._options.AvecSuppression &&
            !this._getNonEditable() &&
            this.Donnees
          ) {
            if (!ObjetNavigateur_1.Navigateur.isTactile) {
              this._cache.infosZonesColonnes.every((aInfosZoneColonnes) => {
                return aInfosZoneColonnes.colonnesVisibles.every(
                  (aNumeroColonne) => {
                    const lParamsCellule = this._getParamsCellule(
                      aNumeroColonne,
                      J,
                      { surSuppression: true },
                    );
                    lAvecLigneDraggable =
                      !!lDonneesTableau &&
                      lDonneesTableau._avecSuppression(lParamsCellule);
                    return !lAvecLigneDraggable;
                  },
                );
              });
            }
          }
          lFusions = this._getFusionColonnesCelluleDeZone(
            J,
            aInfosZoneColonnes,
          );
          let lIndiceColonneVisible = 1;
          aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
            var _a;
            var _b;
            if (!lFusions[aNumeroColonne] || !lFusions[aNumeroColonne].nbCol) {
              return;
            }
            const lParamsCellule = this._getParamsCellule(aNumeroColonne, J, {
              celluleLignePrecedente:
                J > 0
                  ? this._getParamsCellule(
                      aNumeroColonne,
                      this._cache.lignesVisibles[iIndice - 1],
                    )
                  : null,
              celluleLigneSuivante:
                iIndice + 1 < lNbLignesVisibles
                  ? this._getParamsCellule(
                      aNumeroColonne,
                      this._cache.lignesVisibles[iIndice + 1],
                    )
                  : null,
            });
            if (
              lPremiereColonne &&
              this._options.alternanceCouleurLigneContenu
            ) {
              const lResultAlternance =
                lDonneesTableau &&
                lDonneesTableau.avecAlternanceCouleurLigne(lParamsCellule);
              if (lResultAlternance === true || lResultAlternance === false) {
                lCouleurAlternance = lResultAlternance
                  ? !lCouleurAlternance
                  : lCouleurAlternance;
              } else if (
                MethodesObjet_1.MethodesObjet.isNumber(lResultAlternance)
              ) {
                lCouleurAlternance = lResultAlternance % 2 === 0;
              } else {
              }
              if (this.Donnees.estUnDeploiement(lParamsCellule)) {
                this._cache.couleursAlternanceParLigne[J] = lCouleurAlternance;
                lAvecSeparateurDeploiement =
                  this._options.avecTraitSeparationDeploiementAlternance &&
                  this._options.couleurAlternance0 &&
                  !!this._options.couleurAlternance0.fond;
              } else {
                this._cache.couleursAlternanceParLigne[J] = lCouleurAlternance;
              }
            }
            lNumeroPremiereColonneFusion = lFusions[aNumeroColonne].debut;
            lNumeroDerniereColonneFusion = lFusions[aNumeroColonne].fin;
            lDerniereColonne =
              aInfosZoneColonnes.indiceColonneFin ===
                lNumeroDerniereColonneFusion &&
              (aInfosZoneColonnes.dernierBloc ||
                (!aInfosZoneColonnes.dernierBloc &&
                  !aInfosZoneColonnes.estBlocFixe));
            let lTaille = lFusions[aNumeroColonne].taille;
            lNombreColonnesFusion = lFusions[aNumeroColonne].nbCol;
            if (
              this._cache.colonnesSansBordureDroit[
                lNumeroDerniereColonneFusion
              ] &&
              this._celluleAvecBordureDroite(lDerniereColonne)
            ) {
              lTaille += 1;
            }
            lNombreLignesEnFusion = this._chercherLignesFusionVertical(
              lParamsCellule,
              iIndice,
              lRangeLignes,
              lFusions,
              aInfosZoneColonnes,
            );
            lDerniereLigne =
              iIndice + lNombreLignesEnFusion >= lNbLignesVisibles;
            if (
              lNombreLignesEnFusion !== 1 &&
              this._cache.infosZonesColonnes.length > 1
            ) {
              lErreurFusionLigne = true;
            }
            if (lNombreLignesEnFusion <= 0) {
              lIndiceColonneVisible += lNombreColonnesFusion;
              return;
            }
            const lIndiceGridCol = lIndiceColonneVisible;
            let lGridColumn = lIndiceColonneVisible + '';
            if (lNombreColonnesFusion > 1) {
              lGridColumn += ' / ' + (lIndiceGridCol + lNombreColonnesFusion);
            }
            const lAriaColIndex = lIndiceColonneVisible + 1;
            lIndiceColonneVisible += lNombreColonnesFusion;
            let lGridRowEnd = '';
            if (lNombreLignesEnFusion > 1) {
              lGridRowEnd = `span ${lNombreLignesEnFusion}`;
            }
            let lCelluleSelectionnee = false;
            if (
              !this.Donnees.enConstruction_cacheRechercheTexte &&
              this.Donnees._avecSelection(lParamsCellule)
            ) {
              lCelluleSelectionnee = this._etatSelectionCellule({
                ligne: J,
                colonne: aNumeroColonne,
              });
            }
            lJeuxCouleurs = this._getJeuxCouleur(
              lParamsCellule,
              this._options.avecCadreSelection ? false : lCelluleSelectionnee,
            );
            lCouleurBorduresCellules =
              this._options.borduresCellule_couleur ||
              lJeuxCouleurs.getBordure(false);
            if (this.Donnees.enConstruction_cacheRechercheTexte) {
              lStyleBordures = '';
            } else {
              lStyleBordures =
                ((lDerniereLigne && this._hauteurAdapteAuContenu()) ||
                this._options.borduresCellule_vertical <= 0 ||
                !(lDonneesTableau === null || lDonneesTableau === void 0
                  ? void 0
                  : lDonneesTableau.avecBordureBas(lParamsCellule))
                  ? ''
                  : ObjetStyle_1.GStyle.composeCouleurBordure(
                      lCouleurBorduresCellules,
                      this._options.borduresCellule_vertical,
                      ObjetStyle_1.EGenreBordure.bas,
                    )) +
                (this._options.borduresCellule_vertical > 0 &&
                (lDonneesTableau === null || lDonneesTableau === void 0
                  ? void 0
                  : lDonneesTableau.avecBordureHaut(lParamsCellule))
                  ? ObjetStyle_1.GStyle.composeCouleurBordure(
                      lCouleurBorduresCellules,
                      this._options.borduresCellule_vertical,
                      ObjetStyle_1.EGenreBordure.haut,
                    )
                  : '') +
                (!this._celluleAvecBordureDroite(lDerniereColonne) ||
                this._cache.colonnesSansBordureDroit[
                  lNumeroDerniereColonneFusion
                ] ||
                (aInfosZoneColonnes.indiceColonneFin !==
                  lNumeroDerniereColonneFusion &&
                  !(lDonneesTableau === null || lDonneesTableau === void 0
                    ? void 0
                    : lDonneesTableau.avecBordureDroite(lParamsCellule)))
                  ? ''
                  : ObjetStyle_1.GStyle.composeCouleurBordure(
                      lCouleurBorduresCellules,
                      this._options.borduresCellule_horizontal,
                      ObjetStyle_1.EGenreBordure.droite,
                    )) +
                (aInfosZoneColonnes.estBlocFixeDroite &&
                lNumeroPremiereColonneFusion ===
                  aInfosZoneColonnes.indiceColonneDebut &&
                this._options.borduresCellule_horizontal > 0
                  ? ObjetStyle_1.GStyle.composeCouleurBordure(
                      lCouleurBorduresCellules,
                      this._options.borduresCellule_horizontal,
                      ObjetStyle_1.EGenreBordure.gauche,
                    )
                  : '');
            }
            const lIndentation = lDonneesTableau
              ? Math.min(
                  lDonneesTableau.getIndentationCellule(lParamsCellule) || 0,
                  lTaille,
                )
              : 0;
            let lPadding = lDonneesTableau
              ? lDonneesTableau.getPadding(lParamsCellule)
              : false;
            let lPaddingTB = this._options.paddingCelluleTB;
            let lPaddingLR = this._options.paddingCelluleLR;
            if (typeof lPadding === 'number' && lPadding >= 0) {
              lTaille += 2 * (this._options.paddingCelluleLR - lPadding);
              lPaddingTB = lPadding;
              lPaddingLR = lPadding;
            } else {
              lPadding = false;
            }
            const lHeightCellule = this._getHeightCellule(lParamsCellule);
            let lAvecMain =
              !this._getNonEditable() &&
              lDonneesTableau &&
              lDonneesTableau.avecEvenementEdition(lParamsCellule);
            if (!lAvecMain && !this._getNonEditable()) {
              const lTypeCellule = this.Donnees.getTypeValeur(lParamsCellule);
              lAvecMain =
                lTypeCellule ===
                  ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche &&
                this.Donnees.avecEdition(lParamsCellule);
            }
            lClassLigne = lAvecMain ? 'AvecMain ' : '';
            const LId = this.getIdCellule(aNumeroColonne, J);
            delete this._cache.ouvrirSelecteurFileParLigne[
              lParamsCellule.ligne + '_' + lParamsCellule.colonne
            ];
            const lindiceColVsible =
              lAriaColIndex -
              1 +
              (aInfosZoneColonnes.indiceColVisibleDebut || 0);
            const lRowIndex = lNumeroLignesEntete + iIndice + 1;
            let lTabHtmlCellulesSpan = [];
            if (lRoleGrid && this._cache.structureWAI.lignes) {
              const lAddLigneWAI = (aLigne, aRowIndex, aColonne, aId) => {
                if (!this._cache.structureWAI.lignes[aLigne]) {
                  this._cache.structureWAI.lignes[aLigne] = {
                    ids: [],
                    rowIndex: aRowIndex,
                    indiceRange: this._cache.refresh
                      .avecConstructionDynamiqueContenu
                      ? aIndiceRange
                      : -1,
                  };
                }
                this._cache.structureWAI.lignes[aLigne].ids[aColonne] = aId;
              };
              lAddLigneWAI(
                iIndice,
                lRowIndex,
                lindiceColVsible,
                this.getIdCellule(aNumeroColonne, J, true),
              );
              for (
                let lILigneSpan = 0;
                lILigneSpan < lNombreLignesEnFusion;
                lILigneSpan++
              ) {
                for (
                  let lIColonneSpan = 0;
                  lIColonneSpan < lNombreColonnesFusion;
                  lIColonneSpan++
                ) {
                  if (lILigneSpan > 0 || lIColonneSpan > 0) {
                    const lIndexs = lFusions[aNumeroColonne].indexCols;
                    const lNumLigne = iIndice + lILigneSpan;
                    const lIndiceColFusion =
                      (_b =
                        lIndexs === null || lIndexs === void 0
                          ? void 0
                          : lIndexs[lIColonneSpan]) !== null && _b !== void 0
                        ? _b
                        : -1;
                    if (lIndiceColFusion < 0) {
                      continue;
                    }
                    const lIdColSpan = this.getIdCellule(
                      lIndiceColFusion,
                      lNumLigne,
                      true,
                      true,
                    );
                    lAddLigneWAI(
                      lNumLigne,
                      lRowIndex + lILigneSpan,
                      lindiceColVsible + lIColonneSpan,
                      lIdColSpan,
                    );
                    lTabHtmlCellulesSpan.push(
                      IE.jsx.str('div', {
                        role: 'gridcell',
                        id: lIdColSpan,
                        'data-fusionrow': J,
                        'data-fusioncol': aNumeroColonne,
                      }),
                    );
                  }
                }
              }
            }
            this._cache.collectionFuncConstructCellule[
              lParamsCellule.ligne + '_' + lParamsCellule.colonne
            ] = this._construireCelluleDesktop.bind(this, lParamsCellule, {
              id: this.getIdCellule(aNumeroColonne, J, true),
              taille: lTaille,
              indentation: lIndentation,
              indiceColonneVisible: lindiceColVsible,
              nombreColonnesFusion: lNombreColonnesFusion,
              nombreLignesEnFusion: lNombreLignesEnFusion,
              htmlCellulesSpan: lTabHtmlCellulesSpan.join(''),
            });
            let lJSXDrop = false;
            if (
              !this.Donnees.enConstruction_cacheRechercheTexte &&
              !ObjetNavigateur_1.Navigateur.isTactile &&
              this.Donnees &&
              this.Donnees.avecLigneDroppable(lParamCelluleLigne)
            ) {
              lJSXDrop = this.jsxDropCelluleDroppable.bind(
                this,
                lParamsCellule.ligne,
                lParamsCellule.colonne,
              );
            }
            const lCouleurTexte = lJeuxCouleurs.getTexte(false);
            const lFocusVisibleContrasted =
              lCouleurTexte === (0, AccessApp_1.getApp)().getCouleur().blanc ||
              ((_a =
                lCouleurTexte === null || lCouleurTexte === void 0
                  ? void 0
                  : lCouleurTexte.toLowerCase) === null || _a === void 0
                ? void 0
                : _a.call(lCouleurTexte)) === '#ffffff';
            T.push(
              IE.jsx.str(
                'div',
                {
                  id: LId,
                  role: 'presentation',
                  'data-colonne': lParamsCellule.colonne,
                  class: [
                    'liste_celluleGrid',
                    `liste_celluleGrid_${iIndice + 1}`,
                    lCelluleSelectionnee ? 'selected' : '',
                    lClassLigne,
                    lClasseRange,
                    lFocusVisibleContrasted
                      ? Divers_css_1.SD.focusVisibleContrasted
                      : '',
                  ],
                  ie_class: this.jsxGetClassCellulePere.bind(
                    this,
                    lParamsCellule,
                  ),
                  style: [
                    `grid-column:${lGridColumn};`,
                    lGridRowEnd ? `grid-row-end:${lGridRowEnd};` : '',
                    `min-height:${lHeightCellule}px;`,
                    this._options.ignorerCouleurInlineCellule
                      ? ''
                      : ObjetStyle_1.GStyle.composeCouleurFond(
                          lJeuxCouleurs.getFond(false),
                        ),
                    this._options.ignorerCouleurInlineCellule
                      ? ''
                      : ObjetStyle_1.GStyle.composeCouleurTexte(lCouleurTexte),
                    lStyleBordures,
                    `padding:${lPaddingTB}px ${lPaddingLR}px;`,
                  ].join(''),
                  ie_droppable: lJSXDrop,
                  ie_draggable_fantome: lAvecLigneDraggable
                    ? this.jsxDragFantomeCellule.bind(
                        this,
                        lParamsCellule.ligne,
                        lParamsCellule.colonne,
                      )
                    : false,
                },
                this._cache.collectionFuncConstructCellule[
                  lParamsCellule.ligne + '_' + lParamsCellule.colonne
                ](),
              ),
            );
            lPremiereColonne = false;
          });
          if (
            lAvecSeparateurDeploiement &&
            !this.Donnees.enConstruction_cacheRechercheTexte
          ) {
            T.push(
              IE.jsx.str('div', {
                class: ['liste_traitSepDeploiement', lClasseRange],
                style: {
                  'grid-column':
                    '1 / ' + (aInfosZoneColonnes.colonnesVisibles.length + 1),
                  margin: '1px ' + this._options.paddingCelluleLR + 'px',
                  'background-color': this._options.couleurAlternance0.fond,
                },
              }),
            );
          }
          if (
            this._cache.numeroLigneCreationDynamique === J &&
            !this.Donnees.enConstruction_cacheRechercheTexte
          ) {
            T.push(
              '<div class="liste_celluleGrid ' + lClasseRange + '" style="',
              'grid-column:',
              '1 / ',
              aInfosZoneColonnes.colonnesVisibles.length + 1,
              ';',
              '">',
              this.composeCreation(
                J,
                this._construireTaillesGrid(aInfosZoneColonnes),
              ),
              '</div>',
            );
          }
        }
        if (lAvecObserver) {
          T.push(
            IE.jsx.str('div', {
              class: lClasseRange,
              style: 'height:0; grid-column:1/' + (lNbColonnesVisibles + 1),
              ie_nodeafter: this.jsxNodeObsRange.bind(
                this,
                false,
                aIndiceRange,
                aInfosZoneColonnes.indiceBloc,
              ),
              role: 'presentation',
            }),
          );
        }
        return T.join('');
      }
      _construireContenuListe(aInfosZoneColonnes) {
        var _a;
        const T = [];
        const lCouleurBorduresContenu =
          this._options.borduresContenu_couleur ||
          this._options.couleursListe.editable.getBordure(false);
        const lAvecOmbre = this._options.skin !== ObjetListe.skin.flatDesign;
        const lCss = [
          ObjetListe_Desktop_css_1.SObjetListe_Desktop.liste_content,
          ObjetListe_Desktop_css_1.SObjetListe_Desktop.conteneurOmbreZone,
        ];
        if (lAvecOmbre) {
          lCss.push('ombre-top');
          if (!aInfosZoneColonnes.dernierBloc) {
            lCss.push('ombre-top-droite');
          }
          if (aInfosZoneColonnes.indiceBloc > 0) {
            lCss.push('ombre-top-gauche');
          }
        }
        T.push(
          '<div id="',
          this.ids.contenu + aInfosZoneColonnes.indiceBloc,
          '" role="presentation">',
          '<div role="presentation"',
          ' class="' + lCss.join(' ') + '"',
          ' style="',
          this._options.borduresContenu_top > 0
            ? ObjetStyle_1.GStyle.composeCouleurBordure(
                lCouleurBorduresContenu,
                this._options.borduresContenu_top,
                ObjetStyle_1.EGenreBordure.haut,
              )
            : '',
          this._options.borduresContenu_right > 0 &&
            aInfosZoneColonnes.dernierBloc
            ? ObjetStyle_1.GStyle.composeCouleurBordure(
                lCouleurBorduresContenu,
                this._options.borduresContenu_right,
                ObjetStyle_1.EGenreBordure.droite,
              )
            : '',
          this._options.borduresContenu_bottom > 0 &&
            (this._cache.lignesVisibles.length > 0 ||
              !this._hauteurAdapteAuContenu())
            ? ObjetStyle_1.GStyle.composeCouleurBordure(
                lCouleurBorduresContenu,
                this._options.borduresContenu_bottom,
                ObjetStyle_1.EGenreBordure.bas,
              )
            : '',
          this._options.borduresContenu_left > 0 &&
            aInfosZoneColonnes.indiceBloc === 0
            ? ObjetStyle_1.GStyle.composeCouleurBordure(
                lCouleurBorduresContenu,
                this._options.borduresContenu_left,
                ObjetStyle_1.EGenreBordure.gauche,
              )
            : '',
          this._options.paddingContenu_LR
            ? 'padding:0 ' + this._options.paddingContenu_LR + 'px;'
            : '',
          '">',
        );
        if (lAvecOmbre) {
          T.push(this.construireOmbreZoneScroll(aInfosZoneColonnes));
        }
        if (this.ListeTailles) {
          T.push(
            IE.jsx.str(
              'div',
              {
                id:
                  (_a = this.ScrollV) === null || _a === void 0
                    ? void 0
                    : _a.getIdZone(aInfosZoneColonnes.idScrollContenu),
                style: 'overflow:hidden;position:relative;',
                ie_node: this.jsxGetNodeScrollContenuParent.bind(this, this),
                role: 'presentation',
              },
              (aHtmlZone) => {
                var _a;
                const lTaillesGrid =
                  this._construireTaillesGrid(aInfosZoneColonnes);
                aHtmlZone.push(
                  IE.jsx.str(
                    IE.jsx.fragment,
                    null,
                    IE.jsx.str('div', {
                      id:
                        this.ids.cadreSelection + aInfosZoneColonnes.indiceBloc,
                      class: 'liste_conteneurCadreSelection',
                      role: 'presentation',
                    }),
                    IE.jsx.str(
                      'div',
                      {
                        id:
                          (_a = this.ScrollV) === null || _a === void 0
                            ? void 0
                            : _a.getIdContenu(
                                aInfosZoneColonnes.idScrollContenu,
                              ),
                        role: 'presentation',
                        ie_node: this.jsxGetNodeScrollContenu.bind(this, this),
                        style:
                          lTaillesGrid.width > 0
                            ? ObjetStyle_1.GStyle.composeWidth(
                                lTaillesGrid.width,
                              )
                            : false,
                      },
                      () => {
                        return (
                          (aInfosZoneColonnes.indiceBloc === 0
                            ? this._construireFiltres()
                            : '') +
                          this.construireContenuListeInterne(aInfosZoneColonnes)
                        );
                      },
                    ),
                  ),
                );
                if (this._avecRollover()) {
                  aHtmlZone.push(
                    IE.jsx.str(
                      'div',
                      {
                        id:
                          this.ids.rolloverContenuLigne +
                          aInfosZoneColonnes.indiceBloc,
                        class: 'liste_conteneur_rollover left',
                        style:
                          'left:' +
                          (aInfosZoneColonnes.indiceBloc === 0 ? 0 : -1) +
                          'px;',
                      },
                      IE.jsx.str('div', null),
                    ),
                  );
                  aHtmlZone.push(
                    IE.jsx.str(
                      'div',
                      {
                        id:
                          this.ids.rolloverContenuColonne +
                          aInfosZoneColonnes.indiceBloc,
                        class: 'liste_conteneur_rollover top',
                      },
                      IE.jsx.str('div', null),
                    ),
                  );
                  aHtmlZone.push(
                    IE.jsx.str(
                      'div',
                      {
                        id:
                          this.ids.rolloverContenuCellule +
                          aInfosZoneColonnes.indiceBloc,
                        class: 'liste_conteneur_rollover center',
                      },
                      IE.jsx.str('div', null),
                    ),
                  );
                }
              },
            ),
          );
        } else {
          T.push(
            IE.jsx.str('div', {
              id: this.IdPremierElement,
              tabindex: '-1',
              style: 'width:100%; height:100%; overflow:auto',
            }),
          );
        }
        T.push('</div></div>');
        return T.join('');
      }
      _copierCellule(aParamsCellule) {
        if (
          this.Donnees &&
          aParamsCellule &&
          this.Donnees.surCopier(aParamsCellule)
        ) {
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            this._cache.lignesVisibles.forEach((aLigne) => {
              aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
                const lParamsCelluleCible = this._getParamsCellule(
                  aNumeroColonne,
                  aLigne,
                );
                const lNode = ObjetHtml_1.GHtml.getElement(
                  this.getIdCellule(aNumeroColonne, aLigne),
                );
                if (lNode) {
                  const lJNodeSVG = $(lNode).find('.copySVG');
                  if (this.Donnees.estCelluleCopie(lParamsCelluleCible)) {
                    if (lJNodeSVG.length === 0) {
                      ObjetHtml_1.GHtml.addHtml(
                        lNode,
                        this._construireCopySVG(),
                      );
                    }
                  } else if (lJNodeSVG.length > 0) {
                    lJNodeSVG.remove();
                  }
                }
              });
            });
          });
        }
      }
      _collerCellule(aParamsCellule) {
        if (this.Donnees && aParamsCellule) {
          this.Donnees.surColler(aParamsCellule);
        }
      }
      initStructureDynamiqueDesktop() {
        const lCacheRef = this._cache.refresh;
        if (!lCacheRef.avecConstructionDynamiqueContenu) {
          return;
        }
        let lNbLignesRestantes = this._cache.lignesVisibles.length;
        const lRangeLignes = {
          debut: 0,
          fin: this._cache.lignesVisibles.length,
        };
        let lLigneDebut = 0;
        while (lNbLignesRestantes > 0) {
          let lNbLignes =
            lNbLignesRestantes < lCacheRef.nbLignes
              ? lNbLignesRestantes
              : lCacheRef.nbLignes;
          let iIndiceLigne = lLigneDebut;
          while (
            iIndiceLigne <= lLigneDebut + lNbLignes - 1 &&
            iIndiceLigne < this._cache.lignesVisibles.length
          ) {
            const lNumeroLigne = this._cache.lignesVisibles[iIndiceLigne];
            this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
              const lFusions = this._getFusionColonnesCelluleDeZone(
                lNumeroLigne,
                aInfosZoneColonnes,
              );
              aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
                const lParamsCellule = this._getParamsCellule(
                  aNumeroColonne,
                  lNumeroLigne,
                  {
                    celluleLignePrecedente:
                      lNumeroLigne > 0
                        ? this._getParamsCellule(
                            aNumeroColonne,
                            this._cache.lignesVisibles[iIndiceLigne - 1],
                          )
                        : null,
                    celluleLigneSuivante:
                      iIndiceLigne + 1 < lRangeLignes.fin
                        ? this._getParamsCellule(
                            aNumeroColonne,
                            this._cache.lignesVisibles[iIndiceLigne + 1],
                          )
                        : null,
                  },
                );
                const lNombreLignesEnFusion =
                  this._chercherLignesFusionVertical(
                    lParamsCellule,
                    iIndiceLigne,
                    lRangeLignes,
                    lFusions,
                    aInfosZoneColonnes,
                  );
                if (lNombreLignesEnFusion > 1) {
                  lNbLignes = Math.min(
                    Math.max(
                      lNbLignes,
                      iIndiceLigne + lNombreLignesEnFusion - lLigneDebut,
                    ),
                    lNbLignesRestantes,
                  );
                }
              });
            });
            iIndiceLigne += 1;
          }
          lCacheRef.structure.push({
            deb: lLigneDebut,
            fin: lLigneDebut + lNbLignes - 1,
            nbLignes: lNbLignes,
            height: -1,
          });
          lLigneDebut += lNbLignes;
          lNbLignesRestantes = Math.max(0, lNbLignesRestantes - lNbLignes);
        }
      }
      _getFusionColonnesCelluleDeZone(aLigne, aInfosZoneColonnes) {
        return this._getFusionColonnesCellule({
          colonnesVisibles: aInfosZoneColonnes.colonnesVisibles,
          ligne: aLigne,
          indiceColonneDebut: aInfosZoneColonnes.indiceColonneDebut,
          indiceColonneFin: aInfosZoneColonnes.indiceColonneFin,
          dernierBloc:
            aInfosZoneColonnes.dernierBloc ||
            (!aInfosZoneColonnes.dernierBloc &&
              !aInfosZoneColonnes.estBlocFixe),
        });
      }
      _fusionCelluleAvecLignePrecedente(
        aParamsCellule,
        aFusionColonnes,
        aInfosZoneColonnes,
      ) {
        if (this.estDonneeListeFlatDesign(this.Donnees)) {
          return false;
        }
        const lAvecFusionLigne =
          this.Donnees.fusionCelluleAvecLignePrecedente(aParamsCellule);
        if (lAvecFusionLigne && aParamsCellule.celluleLignePrecedente) {
          const lFusionsLignePrec = this._getFusionColonnesCelluleDeZone(
            aParamsCellule.celluleLignePrecedente.ligne,
            aInfosZoneColonnes,
          );
          if (!lFusionsLignePrec) {
            return true;
          }
          if (
            !aFusionColonnes[aParamsCellule.colonne] &&
            !lFusionsLignePrec[aParamsCellule.colonne]
          ) {
            return true;
          }
          if (
            aFusionColonnes[aParamsCellule.colonne] &&
            lFusionsLignePrec[aParamsCellule.colonne] &&
            aFusionColonnes[aParamsCellule.colonne].debut ===
              lFusionsLignePrec[aParamsCellule.colonne].debut &&
            aFusionColonnes[aParamsCellule.colonne].fin ===
              lFusionsLignePrec[aParamsCellule.colonne].fin
          ) {
            return true;
          }
          return false;
        }
        return lAvecFusionLigne;
      }
      _chercherLignesFusionVertical(
        aParamsCellule,
        aIndiceLigne,
        aRangeLignes,
        aFusionColonnes,
        aInfosZoneColonnes,
      ) {
        let lNombreLignesEnFusion = 1;
        let lLigneSuivante;
        let lLignePrecedente;
        let lIndiceFusionLigne;
        if (
          aIndiceLigne > aRangeLignes.debut &&
          this._fusionCelluleAvecLignePrecedente(
            aParamsCellule,
            aFusionColonnes,
            aInfosZoneColonnes,
          )
        ) {
          if (
            aParamsCellule.celluleLignePrecedente &&
            this._estLigneVisible(aParamsCellule.celluleLignePrecedente.ligne)
          ) {
            return 0;
          }
          return 1;
        }
        for (
          lIndiceFusionLigne = aIndiceLigne + 1;
          lIndiceFusionLigne < aRangeLignes.fin;
          lIndiceFusionLigne++
        ) {
          lLigneSuivante = this._cache.lignesVisibles[lIndiceFusionLigne];
          lLignePrecedente = this._cache.lignesVisibles[lIndiceFusionLigne - 1];
          if (
            this._estLigneVisible(lLignePrecedente) &&
            this._fusionCelluleAvecLignePrecedente(
              this._getParamsCellule(aParamsCellule.colonne, lLigneSuivante, {
                celluleLignePrecedente: this._getParamsCellule(
                  aParamsCellule.colonne,
                  lLignePrecedente,
                ),
              }),
              this._getFusionColonnesCelluleDeZone(
                lLigneSuivante,
                aInfosZoneColonnes,
              ),
              aInfosZoneColonnes,
            )
          ) {
            this._cache.lignesFusionParColonne[
              aParamsCellule.colonne + '_' + lLigneSuivante
            ] = { ligneOrigine: aParamsCellule.ligne };
            const lCle = aParamsCellule.colonne + '_' + aParamsCellule.ligne;
            if (!this._cache.lignesFusionParColonne[lCle]) {
              this._cache.lignesFusionParColonne[lCle] = {
                ligneOrigine: aParamsCellule.ligne,
                lignesCumuls: {},
              };
            }
            this._cache.lignesFusionParColonne[lCle].lignesCumuls[
              lLigneSuivante
            ] = true;
            lNombreLignesEnFusion += 1;
          } else {
            return lNombreLignesEnFusion;
          }
        }
        return lNombreLignesEnFusion;
      }
      _hauteurAdapteAuContenu() {
        return (
          !!this._options.hauteurAdapteContenu &&
          (this._cache.lignesVisibles.length > 0 ||
            !!this._options.messageContenuVide)
        );
      }
      initStructureDynamiqueMobile() {
        const lCacheRef = this._cache.refresh;
        if (lCacheRef.avecConstructionDynamiqueContenu) {
          let lNbLignesRestantes = this._cache.lignesVisibles.length;
          let lIndiceLigneDebut = 0;
          while (lNbLignesRestantes > 0) {
            const lNbLignes =
              lNbLignesRestantes < lCacheRef.nbLignes
                ? lNbLignesRestantes
                : lCacheRef.nbLignes;
            lCacheRef.structure.push({
              deb: lIndiceLigneDebut,
              fin: lIndiceLigneDebut + lNbLignes - 1,
              nbLignes: lNbLignes,
              height: -1,
            });
            lIndiceLigneDebut += lNbLignes;
            lNbLignesRestantes = Math.max(0, lNbLignesRestantes - lNbLignes);
          }
        }
      }
      getIdGridFocus(aIndiceBloc) {
        return `${this.Nom}_grid_${aIndiceBloc}`;
      }
      _composeImpression(aProportion) {
        var _a, _b;
        const lProportion = MethodesObjet_1.MethodesObjet.isNumber(aProportion)
          ? aProportion
          : 100;
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        if (this.Donnees) {
          this.Donnees.enImpression = true;
        }
        try {
          const lObjetLargeur = {};
          Invocateur_1.Invocateur.evenement(
            'LargeurZoneImpression',
            lObjetLargeur,
          );
          const lCache = {
            largeurPage: lObjetLargeur.width,
            avecScrollHorizontal: false,
          };
          this._calculColonnesCachees(lCache);
          this._getInfosZonesColonnes(lCache);
          const lTaillesColonnes = this._calculerTaillesColonnes(lCache, true);
          const lRatio = (lProportion || 100) / 100;
          const T = [];
          let lTaille, lNombreColonnesFusion;
          const lColonnesVisibles = [];
          if (this.ListeTailles) {
            for (let I = 0; I < this.ListeTailles.length; I++) {
              if (this._estColonneVisible(I, lCache)) {
                lColonnesVisibles.push(I);
              }
            }
          }
          const lLigneFixeTailleColonne = function (aTab) {
            aTab.push('<tr>');
            lColonnesVisibles.forEach((aNumeroColonne) => {
              aTab.push(
                IE.jsx.str(
                  'td',
                  {
                    style:
                      'height:0px;line-height:0px;padding-top: 0px; padding-bottom: 0px;',
                  },
                  IE.jsx.str(
                    'div',
                    {
                      style:
                        lTaillesColonnes[aNumeroColonne].px > 0
                          ? ObjetStyle_1.GStyle.composeWidth(
                              lTaillesColonnes[aNumeroColonne].px * lRatio + 1,
                            )
                          : '',
                    },
                    '\u00A0',
                  ),
                ),
              );
            });
            aTab.push('</tr>');
          };
          T.push('<table class="ObjetListe_Impression tableConteneur">');
          if (!this.ListeTitres && this.ListeTailles) {
            T.push('<tr style="font-size:0px;">');
            lColonnesVisibles.forEach((aNumeroColonne) => {
              T.push(
                IE.jsx.str('td', {
                  style:
                    'padding-left:2px; padding-right:3px; height: 0px;' +
                    (lTaillesColonnes[aNumeroColonne].px > 0
                      ? 'width:' + lTaillesColonnes[aNumeroColonne].px + 'px;'
                      : ''),
                }),
              );
            });
            T.push('</tr>');
          } else if (this.ListeTitres) {
            for (let iLigne = 0; iLigne < this.ListeTitres.length; iLigne++) {
              T.push('<tr class="AlignementMilieu trTitre">');
              const lTitresLigne = this.ListeTitres[iLigne];
              for (let I = 0; lTitresLigne && I < lTitresLigne.length; I++) {
                if (
                  !lTitresLigne[I].fusion &&
                  (this._estColonneVisible(I, lCache) ||
                    (lTitresLigne[I + 1] &&
                      lTitresLigne[I + 1].fusion ===
                        TypeFusionTitreListe_1.TypeFusionTitreListe
                          .FusionGauche))
                ) {
                  let lNbCol = this._estColonneVisible(I, lCache) ? 1 : 0;
                  let lNbLigne = 1;
                  let lTailleColonneCourante =
                    lNbCol > 0 ? lTaillesColonnes[I].px * lRatio - 1 : 0;
                  for (
                    let iColonne = I + 1;
                    iColonne < lTitresLigne.length;
                    iColonne++
                  ) {
                    if (
                      lTitresLigne[iColonne].fusion ===
                        TypeFusionTitreListe_1.TypeFusionTitreListe
                          .FusionGauche &&
                      this._estColonneVisible(iColonne, lCache)
                    ) {
                      lNbCol++;
                      lTailleColonneCourante +=
                        lTaillesColonnes[iColonne].px * lRatio - 1;
                    } else if (
                      lTitresLigne[iColonne].fusion ===
                        TypeFusionTitreListe_1.TypeFusionTitreListe
                          .FusionGauche &&
                      !this._estColonneVisible(iColonne, lCache)
                    ) {
                      continue;
                    } else {
                      break;
                    }
                  }
                  if (lNbCol === 0) {
                    break;
                  }
                  for (let j = iLigne + 1; j < this.ListeTitres.length; j++) {
                    if (
                      this.ListeTitres[j][I] &&
                      this.ListeTitres[j][I].fusion ===
                        TypeFusionTitreListe_1.TypeFusionTitreListe.FusionHaute
                    ) {
                      lNbLigne += 1;
                    } else {
                      break;
                    }
                  }
                  const lColSpan =
                    lNbCol === 1 ? '' : ' colspan="' + lNbCol + '"';
                  const lRowSpan =
                    lNbLigne === 1 ? '' : ' rowspan="' + lNbLigne + '"';
                  const lChaineTitre = lTitresLigne[I].libelle;
                  const lChaineHtml =
                    ((_b = (_a = lTitresLigne[I]).getLibelleHtml) === null ||
                    _b === void 0
                      ? void 0
                      : _b.call(_a, true)) || lTitresLigne[I].libelleHtml;
                  const lAvecTri = this.Donnees && !!this._cache.colonnesTri;
                  const lEstTriColonne =
                    lAvecTri &&
                    this._cache.colonnesTri[I] &&
                    lNbCol === 1 &&
                    (iLigne === this.ListeTitres.length - 1 ||
                      lNbLigne + iLigne === this.ListeTitres.length);
                  T.push(
                    '<th style="font-size:',
                    1.1 * lRatio,
                    'rem;',
                    I === 0 ? 'border-left:#000 1px solid;' : '',
                    '"' + lRowSpan + lColSpan,
                    '>',
                  );
                  if (lEstTriColonne) {
                    const lNumeroTri = this._triCourant.colonne.indexOf(I);
                    const lCarTri =
                      lNumeroTri >= 0 &&
                      this._triCourant.colonne[lNumeroTri] === I
                        ? this._triCourant.genre[lNumeroTri] ===
                          Enumere_TriElement_1.EGenreTriElement.Croissant
                          ? '&#x25BC;'
                          : '&#x25B2;'
                        : '';
                    const lLeft = lTailleColonneCourante / 2 - 9 / 2;
                    T.push(
                      '<div style="position:relative; top:0px; height:' +
                        lRatio * _CONST_hauteurImageTri +
                        'px;">',
                      '<div style="position:absolute; z-index:1; top:-1px; left:',
                      lLeft,
                      'px; font-size:',
                      0.9 * lRatio,
                      'rem;line-height:',
                      0.9 * lRatio,
                      'rem;">',
                      lCarTri,
                      '</div>',
                      '&nbsp;</div>',
                    );
                  }
                  T.push(
                    IE.jsx.str(
                      'div',
                      {
                        style:
                          lTailleColonneCourante > 0
                            ? 'width:' + lTailleColonneCourante + 'px;'
                            : '',
                        class: !lChaineHtml ? 'ie_ellipsis' : false,
                      },
                      lChaineHtml
                        ? lChaineHtml
                        : IE.jsx.str('span', null, lChaineTitre),
                    ),
                    '</th>',
                  );
                }
              }
              T.push('</tr>');
            }
          }
          if (this.ListeTailles && this.Donnees) {
            const lLignesVisibles = [];
            for (let J = 0, lNb = this.Donnees.getNbrLignes(); J < lNb; J++) {
              if (this._estLigneVisible(J)) {
                lLignesVisibles.push(J);
              }
            }
            for (let iIndice = 0; iIndice < lLignesVisibles.length; iIndice++) {
              const J = lLignesVisibles[iIndice];
              const lFusions = this._getFusionColonnesCellule({
                colonnesVisibles: lColonnesVisibles,
                ligne: J,
                indiceColonneDebut: lColonnesVisibles[0],
                indiceColonneFin:
                  lColonnesVisibles[lColonnesVisibles.length - 1],
                dernierBloc: true,
                tailles: lTaillesColonnes,
              });
              T.push('<tr valign="top" class="trContenu">');
              let lPremiereColonne = true;
              lColonnesVisibles.forEach((aNumeroColonne) => {
                var _a;
                if (
                  !lFusions[aNumeroColonne] ||
                  !lFusions[aNumeroColonne].nbCol
                ) {
                  return;
                }
                const lParamsCellule = this._getParamsCellule(
                  aNumeroColonne,
                  J,
                );
                lTaille = lFusions[aNumeroColonne].taille * lRatio;
                lNombreColonnesFusion = lFusions[aNumeroColonne].nbCol;
                let lIndentation =
                  (lDonneesTableau === null || lDonneesTableau === void 0
                    ? void 0
                    : lDonneesTableau.getIndentationCellule(lParamsCellule)) ||
                  0;
                let lSelection = false;
                if (
                  this._options.avecSelectionLigneSurImpression &&
                  lPremiereColonne &&
                  this._etatSelectionCellule({ ligne: J, colonne: -1 })
                ) {
                  lSelection = true;
                  lIndentation += 8;
                }
                const lInfosContenu = this._composeContenu(
                  Object.assign(lParamsCellule, {
                    taille: lTaille - lIndentation,
                    enImpression: true,
                    surProportion: lProportion,
                    avecContenuTronque:
                      !!lDonneesTableau &&
                      lDonneesTableau.avecContenuTronque(lParamsCellule),
                  }),
                  (_a = this.Donnees.getTypeValeur(lParamsCellule)) !== null &&
                    _a !== void 0
                    ? _a
                    : ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte,
                );
                T.push(
                  IE.jsx.str(
                    'td',
                    {
                      class: lSelection ? 'ligneSelectionImp' : '',
                      style:
                        'font-size:' +
                        1.1 * lRatio +
                        'rem;' +
                        (lPremiereColonne ? 'border-left:#000 1px solid;' : ''),
                      colspan:
                        lNombreColonnesFusion > 1
                          ? lNombreColonnesFusion
                          : false,
                    },
                    IE.jsx.str(
                      'div',
                      {
                        style:
                          (lTaille > 0
                            ? 'width:' + (lTaille - lIndentation) + 'px;'
                            : '') +
                          (lIndentation > 0
                            ? 'padding-left:' + lIndentation + 'px;'
                            : ''),
                      },
                      lInfosContenu.html,
                    ),
                  ),
                );
                lPremiereColonne = false;
              });
              T.push('</tr>');
            }
            lLigneFixeTailleColonne(T);
          }
          T.push('</table>');
          if (this._avecLigneTotal() && this.ListeTailles && lDonneesTableau) {
            T.push(
              IE.jsx.str(
                'table',
                {
                  class: 'ObjetListe_Impression tableConteneur',
                  style: 'margin-top:1em;',
                },
                (aTab) => {
                  const lLignes = this.getListeLignesTotal();
                  lLignes.parcourir((aArticle, aIndex) => {
                    aTab.push(
                      IE.jsx.str('tr', { class: 'trTotal' }, (aTab) => {
                        lColonnesVisibles.forEach((aNumeroColonne) => {
                          const lParams = this._getParamsCellule(
                            aNumeroColonne,
                            -1,
                            { surTotal: true },
                          );
                          if (aArticle) {
                            lParams.ligne = aIndex;
                            lParams.article = aArticle;
                          }
                          const lSansBordureDroite =
                            this._cache.colonnesSansBordureDroit[
                              aNumeroColonne
                            ];
                          const lClassTotal = lDonneesTableau
                            ? lDonneesTableau.getClassTotal(lParams)
                            : '';
                          const lAvecBorduresTotal =
                            lDonneesTableau &&
                            lDonneesTableau.avecBordureTotalVisible(lParams);
                          let lStyleTotal = '';
                          if (lAvecBorduresTotal) {
                            lStyleTotal =
                              ObjetStyle_1.GStyle.composeCouleurBordure(
                                '#000',
                                1,
                                (lSansBordureDroite
                                  ? 0
                                  : ObjetStyle_1.EGenreBordure.droite) +
                                  ObjetStyle_1.EGenreBordure.bas +
                                  ObjetStyle_1.EGenreBordure.gauche,
                              );
                          }
                          const lContenuTotal = lDonneesTableau
                            ? lDonneesTableau.getContenuTotal(lParams)
                            : '';
                          aTab.push(
                            IE.jsx.str(
                              'td',
                              {
                                style:
                                  'font-size:' +
                                  1.1 * lRatio +
                                  'rem;' +
                                  lStyleTotal,
                                class: lClassTotal,
                              },
                              IE.jsx.str(
                                'div',
                                {
                                  style: ObjetStyle_1.GStyle.composeWidth(
                                    lTaillesColonnes[aNumeroColonne].px *
                                      lRatio,
                                  ),
                                },
                                (lContenuTotal !== null &&
                                lContenuTotal !== void 0
                                  ? lContenuTotal
                                  : '&nbsp;') + '',
                              ),
                            ),
                          );
                        });
                      }),
                    );
                  });
                  lLigneFixeTailleColonne(aTab);
                },
              ),
            );
          }
          return T.join('');
        } finally {
          if (this.Donnees) {
            this.Donnees.enImpression = false;
          }
        }
      }
      _avecLigneTotal() {
        const lListeTotal = this.estDonneeListeTableau(this.Donnees)
          ? this.Donnees.getListeLignesTotal()
          : null;
        return (
          this._options.avecLigneTotal ||
          !!(lListeTotal && lListeTotal.count() > 0)
        );
      }
      _construireContenuTotal(aInfosZoneColonnes) {
        var _a;
        const T = [];
        const lTaillesGrid = this._construireTaillesGrid(aInfosZoneColonnes);
        let lSansBordureDroite = false;
        let lClassTotal = '';
        let lContenuTotal = '';
        let lDerniereColonne = false;
        let lAvecBordureTotalVisible = false;
        let lAvecPremiereBordureGauche = false;
        const lLignes = this.getListeLignesTotal();
        const lNbLignes = lLignes.count();
        const lDonneesTableau = this.estDonneeListeFlatDesign(this.Donnees)
          ? null
          : this.Donnees;
        lLignes.parcourir((aArticle, aIndexLigne) => {
          const lArticle = !(aArticle === null || aArticle === void 0
            ? void 0
            : aArticle.totalbidon)
            ? aArticle
            : undefined;
          if (!this._cache.gridTotalAccess.ordres[aIndexLigne]) {
            this._cache.gridTotalAccess.ordres[aIndexLigne] = [];
          }
          const lTabAcessLigne =
            this._cache.gridTotalAccess.ordres[aIndexLigne];
          this._cache.gridTotalAccess.sansArticle = true;
          let lFusions = null;
          if (this.Donnees) {
            lFusions = this._getFusionColonnesCellule({
              total: true,
              getParamsCellule: (aNumeroColonne) => {
                return this._getParamsCellule(aNumeroColonne, -1, {
                  surTotal: true,
                  ligne: aIndexLigne,
                  article: lArticle,
                });
              },
              colonnesVisibles: aInfosZoneColonnes.colonnesVisibles,
              indiceColonneDebut: aInfosZoneColonnes.indiceColonneDebut,
              indiceColonneFin: aInfosZoneColonnes.indiceColonneFin,
              dernierBloc:
                aInfosZoneColonnes.dernierBloc ||
                (!aInfosZoneColonnes.dernierBloc &&
                  !aInfosZoneColonnes.estBlocFixe),
            });
          }
          let lIndexColonne = 0;
          aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
            if (
              lFusions &&
              (!lFusions[aNumeroColonne] || !lFusions[aNumeroColonne].nbCol)
            ) {
              if (lTabAcessLigne.length > 0) {
                lTabAcessLigne.push(lTabAcessLigne[lTabAcessLigne.length - 1]);
              }
              return;
            }
            lTabAcessLigne.push(aNumeroColonne);
            lIndexColonne += 1;
            const lParams = this._getParamsCellule(aNumeroColonne, -1, {
              surTotal: true,
            });
            if (lArticle) {
              lParams.ligne = aIndexLigne;
              lParams.article = lArticle;
              this._cache.gridTotalAccess.sansArticle = false;
            }
            let lStyleTotal = '';
            let lBordures = 0;
            let lNbColonnes = 0;
            let lAriaHaspopup = false;
            if (lDonneesTableau) {
              lParams.typeCellule =
                lDonneesTableau.getTypeCelluleTotal(lParams);
              lSansBordureDroite =
                this._cache.colonnesSansBordureDroit[
                  lFusions[aNumeroColonne].fin
                ];
              lDerniereColonne =
                aInfosZoneColonnes.dernierBloc &&
                aInfosZoneColonnes.indiceColonneFin ===
                  lFusions[aNumeroColonne].fin;
              lClassTotal = lDonneesTableau.getClassTotal(lParams);
              lAvecBordureTotalVisible =
                lDonneesTableau.avecBordureTotalVisible(lParams);
              if (
                lAvecBordureTotalVisible &&
                !lSansBordureDroite &&
                !lDerniereColonne
              ) {
                lBordures += ObjetStyle_1.EGenreBordure.droite;
                lClassTotal += ' b-right';
              }
              if (
                !lAvecBordureTotalVisible &&
                !lDerniereColonne &&
                !this._cache.colonnesSansBordureDroit[
                  lFusions[aNumeroColonne].fin + 1
                ]
              ) {
                const lParamsColSuivante = this._getParamsCellule(
                  lFusions[aNumeroColonne].fin + 1,
                  -1,
                  { surTotal: true, ligne: aIndexLigne, article: lArticle },
                );
                lParamsColSuivante.typeCellule =
                  lDonneesTableau.getTypeCelluleTotal(lParamsColSuivante);
                if (
                  lDonneesTableau.avecBordureTotalVisible(lParamsColSuivante)
                ) {
                  lBordures += ObjetStyle_1.EGenreBordure.droite;
                  lClassTotal += ' b-right';
                }
              }
              if (lAvecBordureTotalVisible) {
                lBordures += ObjetStyle_1.EGenreBordure.bas;
                lClassTotal += ' b-bottom';
              }
              if (!lAvecBordureTotalVisible && aIndexLigne < lNbLignes - 1) {
                const lParamsLigneSuiv = Object.assign({}, lParams, {
                  ligne: aIndexLigne + 1,
                  article: lLignes.get(aIndexLigne + 1),
                });
                lParamsLigneSuiv.typeCellule =
                  lDonneesTableau.getTypeCelluleTotal(lParamsLigneSuiv);
                if (lDonneesTableau.avecBordureTotalVisible(lParamsLigneSuiv)) {
                  lBordures += ObjetStyle_1.EGenreBordure.bas;
                  lClassTotal += ' b-bottom';
                }
              }
              if (
                aInfosZoneColonnes.indiceBloc === 0 &&
                lFusions[aNumeroColonne].debut === 0 &&
                aIndexLigne === 0
              ) {
                lAvecPremiereBordureGauche = lAvecBordureTotalVisible;
              }
              lNbColonnes = lFusions[aNumeroColonne].nbCol;
              lStyleTotal =
                this._composePaddingCellule() +
                `min-height:${this._getHeightCellule(lParams)}px;` +
                lDonneesTableau._getStyleTotal(lParams) +
                'grid-column:' +
                lIndexColonne +
                (lNbColonnes > 1 ? ' / ' + (lIndexColonne + lNbColonnes) : '') +
                ';' +
                'grid-row:' +
                (aIndexLigne + 1) +
                ';';
              lContenuTotal = lDonneesTableau.getContenuTotal(lParams);
              if (lNbColonnes > 1) {
                lIndexColonne += lNbColonnes - 1;
              }
              lAriaHaspopup =
                lDonneesTableau.getAriaHasPopupTotal(lParams) || false;
            }
            const lIdGridCell = this.getIdCelluleTotal(
              lParams.colonne,
              lParams.ligne,
              true,
            );
            if (!this._cache.structureWAI.totals[aIndexLigne]) {
              this._cache.structureWAI.totals[aIndexLigne] = [];
            }
            this._cache.structureWAI.totals[aIndexLigne].push(lIdGridCell);
            const lTabHtmlSpan = [];
            for (
              let lIColonneSpan = 1;
              lIColonneSpan < lNbColonnes;
              lIColonneSpan++
            ) {
              const lIdColSpan = `${lIdGridCell}_wai_${lIColonneSpan}`;
              this._cache.structureWAI.totals[aIndexLigne].push(lIdColSpan);
              lTabHtmlSpan.push(
                IE.jsx.str('div', { role: 'gridcell', id: lIdColSpan }),
              );
            }
            const lTaille =
              (lFusions
                ? lFusions[aNumeroColonne].taille
                : this._cache.taillesColonne[aNumeroColonne].px) +
              (lDerniereColonne ||
              ObjetStyle_1.EGenreBordure.avecBordure(
                lBordures,
                ObjetStyle_1.EGenreBordure.droite,
              )
                ? 0
                : 1) +
              (ObjetStyle_1.EGenreBordure.avecBordure(
                lBordures,
                ObjetStyle_1.EGenreBordure.gauche,
              )
                ? -1
                : 0);
            let lTabIndex = -1;
            if (!this._cache.gridTotalAccess.nav) {
              this._cache.gridTotalAccess.nav = {
                ligne: lParams.ligne,
                colonne: lParams.colonne,
              };
              lTabIndex = 0;
            } else {
              if (
                this._cache.gridTotalAccess.nav.ligne === lParams.ligne &&
                this._cache.gridTotalAccess.nav.colonne === lParams.colonne
              ) {
                lTabIndex = 0;
              }
            }
            const lGetNodeCelluleTotal = (aNode) => {
              const lData = { instance: this };
              const lThis = this;
              $(aNode).on(
                {
                  validation: this._surClickCelluleTotal,
                  focusin() {
                    var _a, _b;
                    if (lThis._cache.gridTotalAccess.nav) {
                      (_a = ObjetHtml_1.GHtml.getElement(
                        lThis.getIdCelluleTotal(
                          lThis._cache.gridTotalAccess.nav.colonne,
                          lThis._cache.gridTotalAccess.nav.ligne,
                          true,
                        ),
                      )) === null || _a === void 0
                        ? void 0
                        : _a.setAttribute('tabindex', '-1');
                    }
                    lThis._cache.gridTotalAccess.nav = {
                      ligne: parseInt(this.dataset.row),
                      colonne: parseInt(this.dataset.col),
                    };
                    (_b = ObjetHtml_1.GHtml.getElement(
                      lThis.getIdCelluleTotal(
                        lThis._cache.gridTotalAccess.nav.colonne,
                        lThis._cache.gridTotalAccess.nav.ligne,
                        true,
                      ),
                    )) === null || _b === void 0
                      ? void 0
                      : _b.setAttribute('tabindex', '0');
                  },
                },
                lData,
              );
            };
            const lGetNodeCelluleTotalCell = (aNode) => {
              $(aNode).on({
                keyup: (aEvent) => {
                  this.navigationClavierGridTotal(aEvent);
                },
              });
            };
            T.push(
              IE.jsx.str(
                'div',
                {
                  id: this.getIdCelluleTotal(
                    lParams.colonne,
                    lParams.ligne,
                    false,
                  ),
                  role: 'presentation',
                  'data-row': lParams.ligne,
                  'data-col': lParams.colonne,
                  ie_node: lGetNodeCelluleTotal,
                  class: [
                    'liste_cellule_total',
                    lClassTotal,
                    lParams.typeCellule ===
                    ObjetDonneesListe_1.ObjetDonneesListe.typeCelluleTotal
                      .defaut
                      ? Divers_css_1.SD.focusVisibleContrasted
                      : '',
                  ],
                  style: lStyleTotal,
                },
                IE.jsx.str(
                  'div',
                  {
                    id: lIdGridCell,
                    style: ObjetStyle_1.GStyle.composeWidth(lTaille),
                    role: 'gridcell',
                    tabindex: lTabIndex,
                    'data-row': lParams.ligne,
                    'data-col': lParams.colonne,
                    ie_node: lGetNodeCelluleTotalCell,
                    'aria-colspan': lNbColonnes > 1 ? lNbColonnes : false,
                    'aria-haspopup': lAriaHaspopup,
                  },
                  (lContenuTotal !== null && lContenuTotal !== void 0
                    ? lContenuTotal
                    : '&nbsp;') + '',
                ),
                lTabHtmlSpan.length > 0
                  ? IE.jsx.str(
                      'div',
                      {
                        'aria-hidden': 'true',
                        role: 'presentation',
                        class: 'sr-only',
                      },
                      lTabHtmlSpan.join(''),
                    )
                  : '',
              ),
            );
          });
        });
        const lHtml = IE.jsx.str(
          'div',
          {
            id:
              (_a = this.ScrollH) === null || _a === void 0
                ? void 0
                : _a.getIdContenu(aInfosZoneColonnes.idScrollTotal),
            role: 'presentation',
            class: 'liste_scroll_total',
            style:
              lTaillesGrid.styleGrid +
              (lTaillesGrid.width > 0
                ? ObjetStyle_1.GStyle.composeWidth(lTaillesGrid.width)
                : ''),
          },
          T.join(''),
        );
        return {
          html: lHtml,
          avecPremiereBordureGauche: lAvecPremiereBordureGauche,
          avecDerniereBordureDroite:
            aInfosZoneColonnes.dernierBloc && lAvecBordureTotalVisible,
        };
      }
      _construireLigneTotal(aInfosZoneColonnes) {
        var _a;
        if (!this.ListeTailles) {
          return '';
        }
        const lTotal = this._construireContenuTotal(aInfosZoneColonnes);
        return IE.jsx.str(
          'div',
          {
            class: this.Donnees ? false : 'hide',
            style:
              aInfosZoneColonnes.indiceBloc === 0
                ? ObjetStyle_1.GStyle.composeCouleurBordure(
                    lTotal.avecPremiereBordureGauche
                      ? this._options.couleursListe.editable.getBordure(false)
                      : 'transparent',
                    1,
                    ObjetStyle_1.EGenreBordure.gauche,
                  )
                : '' + aInfosZoneColonnes.dernierBloc
                  ? ObjetStyle_1.GStyle.composeCouleurBordure(
                      lTotal.avecDerniereBordureDroite
                        ? this._options.couleursListe.editable.getBordure(false)
                        : 'transparent',
                      1,
                      ObjetStyle_1.EGenreBordure.droite,
                    )
                  : '',
          },
          IE.jsx.str(
            'div',
            {
              id: this.idTotaux + aInfosZoneColonnes.indiceBloc,
              class: 'conteneur-ombre-zone',
            },
            this.construireOmbreZoneScroll(aInfosZoneColonnes),
            IE.jsx.str(
              'div',
              {
                id:
                  (_a = this.ScrollH) === null || _a === void 0
                    ? void 0
                    : _a.getIdZone(aInfosZoneColonnes.idScrollTotal),
                style: 'overflow:hidden;position:relative;',
              },
              lTotal.html,
            ),
          ),
        );
      }
      construireOmbreZoneScroll(aInfosZoneColonnes) {
        const T = [];
        if (!aInfosZoneColonnes.estBlocFixe) {
          if (aInfosZoneColonnes.indiceBloc > 0) {
            T.push(IE.jsx.str('div', { class: 'ombre gauche' }));
          }
          if (!aInfosZoneColonnes.dernierBloc) {
            T.push(IE.jsx.str('div', { class: 'ombre droite' }));
          }
        }
        return T.join('');
      }
      composeCreation(aLigne, aTaillesGrid, aAvecTraitHaut) {
        var _a;
        const T = [];
        const lEventMapNavigation = {
          keyup: (aEvent, aNode) => {
            this.navigationClavier(aNode.id);
            if (
              ToucheClavier_1.ToucheClavierUtil.estToucheFleche(aEvent.which)
            ) {
              aEvent.stopPropagation();
            }
          },
        };
        const lUneSeuleColonneCreation = this.ListeCreations.length === 1;
        let LId;
        const lNbColonnesVisible = lUneSeuleColonneCreation
          ? 1
          : aTaillesGrid.tabWidth.length;
        this._avecLigneCreationUnique = false;
        if (aTaillesGrid.tabWidth.length > 0) {
          this._avecLigneCreationUnique = true;
          LId = this._getIdCreation(-1, aLigne);
          const lParams = this._getParamsCellule(-1, aLigne, {
            surCreation: true,
          });
          const lAvecInputFile =
            this.Donnees && this.Donnees.avecSelecFile(lParams);
          delete this._cache.ouvrirSelecteurFileParLigne[aLigne + '_-1'];
          let lNbCol = 0;
          for (const lInfos of this._cache.infosZonesColonnes) {
            lNbCol += lInfos.colonnesVisibles.length;
          }
          const lNodeSurLigneCreationUnique = (aNode) => {
            const lThis = this;
            $(aNode).on({
              click: function () {
                lThis._surLigneCreationUnique(true, aLigne);
              },
              keyup: function (aEvent) {
                lThis._surLigneCreationUnique(
                  false,
                  aLigne,
                  ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(
                    aEvent,
                  ) ||
                    ToucheClavier_1.ToucheClavierUtil.estEventEdition(aEvent),
                );
              },
            });
          };
          T.push(
            IE.jsx.str(
              'div',
              {
                id: LId + '_Creation',
                role: 'presentation',
                tabindex: '-1',
                ie_node: lNodeSurLigneCreationUnique,
                class: 'ligne-creation-modele',
                style:
                  aTaillesGrid.width > 0
                    ? ObjetStyle_1.GStyle.composeWidth(aTaillesGrid.width)
                    : '',
              },
              IE.jsx.str(
                'div',
                {
                  id: LId,
                  class: this.getClassCreation(),
                  role: 'gridcell',
                  tabindex: '0',
                  'aria-rowindex':
                    (((_a = this.ListeTitres) === null || _a === void 0
                      ? void 0
                      : _a.length) || 0) +
                    (this.avecTriColonne() ? 1 : 0) +
                    1,
                  'aria-colindex': 1,
                  'aria-colspan': lNbCol,
                  style:
                    aLigne === -1
                      ? aAvecTraitHaut
                        ? ObjetStyle_1.GStyle.composeCouleurBordure(
                            this._options.couleursListe.editable.getBordure(
                              false,
                            ),
                            1,
                            ObjetStyle_1.EGenreBordure.haut,
                          )
                        : ''
                      : ObjetStyle_1.GStyle.composeCouleurBordure(
                          this._options.couleursListe.editable.getBordure(
                            false,
                          ),
                          1,
                          ObjetStyle_1.EGenreBordure.bas,
                        ),
                },
                IE.jsx.str(
                  'div',
                  {
                    id: LId + '_div',
                    tabindex: '-1',
                    class: 'liste_celluleGrid divLigneCreation',
                    ie_eventmap: lEventMapNavigation,
                    'aria-label':
                      GlossaireListe_1.TradGlossaireListe.wai.NouvelElement,
                    ie_model: lAvecInputFile
                      ? this.jsxModeleSelecFile.bind(this, this, lParams, false)
                      : false,
                    ie_selecfile: !!lAvecInputFile,
                    style: this._composePaddingCellule(),
                  },
                  IE.jsx.str(
                    'div',
                    {
                      style: `height:${this._getHeightCellule(lParams) - 2 * this._options.paddingCelluleTB}px;`,
                    },
                    IE.jsx.str(
                      'div',
                      null,
                      ObjetListe.getTitreCreation(this._options.titreCreation),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
        const lFuncNodeLigneCreation = (aNode) => {
          $(aNode).on('validation', () => {
            this.surCreationDeb(false);
          });
        };
        T.push(
          IE.jsx.str(
            'div',
            {
              id: LId + '_Creation_Edit',
              tabindex: '-1',
              ie_node: lFuncNodeLigneCreation,
              class: 'liste-creation-edition',
              style:
                (this._avecLigneCreationUnique ? 'display:none;' : '') +
                (!lUneSeuleColonneCreation ? aTaillesGrid.styleGrid : '') +
                (aTaillesGrid.width > 0
                  ? ObjetStyle_1.GStyle.composeWidth(aTaillesGrid.width)
                  : ''),
            },
            (aTab) => {
              let lTaille;
              aTaillesGrid.tabWidth.every((aInfosCol, aIndex) => {
                if (
                  !lUneSeuleColonneCreation ||
                  this.ListeCreations[0] === aInfosCol.colonne ||
                  this._colonneCreationUniqueEnErreur()
                ) {
                  lTaille =
                    lNbColonnesVisible === 1
                      ? aTaillesGrid.width
                      : aInfosCol.width;
                  const lEstDerniereColonne =
                    lNbColonnesVisible === 1 ||
                    aIndex === aTaillesGrid.tabWidth.length - 1;
                  const lParams = this._getParamsCellule(
                      aInfosCol.colonne,
                      aLigne,
                      { surCreation: true },
                    ),
                    LId = this._getIdCreation(aInfosCol.colonne, aLigne);
                  const lListeBordures =
                    aLigne === -1
                      ? (aAvecTraitHaut ? ObjetStyle_1.EGenreBordure.haut : 0) +
                        (!lEstDerniereColonne
                          ? ObjetStyle_1.EGenreBordure.droite
                          : 0)
                      : ObjetStyle_1.EGenreBordure.bas +
                        (!lEstDerniereColonne
                          ? ObjetStyle_1.EGenreBordure.droite
                          : 0);
                  aTab.push(
                    IE.jsx.str(
                      'div',
                      {
                        id: LId,
                        class: this.getClassCreation() + ' Maigre',
                        role: 'presentation',
                        style:
                          this._composePaddingCellule() +
                          (lTaille > 0
                            ? ObjetStyle_1.GStyle.composeWidth(lTaille)
                            : '') +
                          (lListeBordures > 0
                            ? ObjetStyle_1.GStyle.composeCouleurBordure(
                                this._options.couleursListe.editable.getBordure(
                                  false,
                                ),
                                1,
                                lListeBordures,
                              )
                            : ''),
                      },
                      IE.jsx.str(
                        'div',
                        {
                          id: LId + '_div',
                          tabindex: '-1',
                          role: 'presentation',
                          ie_eventmap: lEventMapNavigation,
                          style: `height:${this._getHeightCellule(lParams) - 2 * this._options.paddingCelluleTB}px;`,
                          'arial-label': !this._avecLigneCreationUnique
                            ? GlossaireListe_1.TradGlossaireListe.wai
                                .NouvelElement
                            : false,
                        },
                        lNbColonnesVisible === 1
                          ? ObjetListe.getTitreCreation(
                              this._options.titreCreation,
                            )
                          : '',
                      ),
                    ),
                  );
                  if (lUneSeuleColonneCreation) {
                    return false;
                  }
                }
                return true;
              });
            },
          ),
        );
        return T.join('');
      }
      jsxModelCelluleCocheMobile(aNumeroLigne, aNumeroColonne, aValeur) {
        return {
          getValue() {
            return (
              aValeur === true ||
              aValeur ===
                ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte
            );
          },
          getIndeterminate() {
            return (
              aValeur ===
              ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
            );
          },
          setValue() {},
          getDisabled: () => {
            if (this._getNonEditable()) {
              return true;
            }
            const lParamsCellule = this._getParamsCellule(
              aNumeroColonne,
              aNumeroLigne,
            );
            return !this.Donnees.avecEdition(lParamsCellule);
          },
        };
      }
      _composeCoche(aParams) {
        const lValeur = this.Donnees._getValeur(aParams);
        const lAvecEdition = this.Donnees.avecEdition(aParams);
        if (this.estMobile && this._options.avecCocheCheckBox) {
          return [
            IE.jsx.str(
              'div',
              { class: 'liste_cellule_cb' },
              IE.jsx.str(IEHtml_CheckboxRadio_1.Checkbox, {
                ie_model: this.jsxModelCelluleCocheMobile.bind(
                  this,
                  aParams.ligne,
                  aParams.colonne,
                  lValeur,
                ),
              }),
            ),
          ].join('');
        }
        if (typeof lValeur === 'string' && lValeur !== '') {
          return IE.jsx.str(
            'div',
            {
              role: 'checkbox',
              'aria-checked': 'true',
              'aria-label': GlossaireWAI_1.TradGlossaireWAI.Coche,
              'aria-disabled': lAvecEdition ? false : 'true',
              class: lValeur,
              style: 'width:18px; margin:0 auto;',
            },
            '\u00A0',
          );
        }
        if (
          lValeur === true ||
          lValeur === ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte
        ) {
          return IE.jsx.str(IconeSvgCheck_fin_1.IconeSvgCheck_fin, {
            role: 'checkbox',
            'aria-checked': 'true',
            'aria-label': GlossaireWAI_1.TradGlossaireWAI.Coche,
            'aria-disabled': lAvecEdition ? false : 'true',
            class: 'color-success svg-large m-y-none m-x-top',
          });
        }
        if (
          lValeur === ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
        ) {
          return IE.jsx.str(IconeSvgCheck_fin_1.IconeSvgCheck_fin, {
            role: 'checkbox',
            'aria-checked': 'mixed',
            'aria-label': GlossaireWAI_1.TradGlossaireWAI.CochePartiel,
            'aria-disabled': lAvecEdition ? false : 'true',
            class: 'color-disabled svg-large m-y-none m-x-top',
          });
        }
        if (
          !lValeur ||
          lValeur === ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Aucune
        ) {
          return IE.jsx.str('div', {
            style: 'width: 18px; height:16px; margin:0 auto;',
            role: 'checkbox',
            'aria-checked': 'false',
            'aria-label': GlossaireWAI_1.TradGlossaireWAI.Decoche,
            'aria-disabled': lAvecEdition ? false : 'true',
          });
        }
        return '';
      }
      _composeContenu(aParamsCellule, aTypeValeur) {
        var _a;
        switch (aTypeValeur) {
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Image:
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon: {
            return this.composeIconEtImage(
              aParamsCellule,
              aTypeValeur ===
                ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon,
            );
          }
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche: {
            return {
              html: IE.jsx.str(
                'div',
                { class: 'AlignementMilieu', style: 'width: 100%;' },
                this._composeCoche(aParamsCellule),
              ),
              tooltip:
                (_a = this.Donnees.getTooltip(aParamsCellule)) !== null &&
                _a !== void 0
                  ? _a
                  : '',
            };
          }
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
            .CocheDeploiement: {
            const lEstDeploiement =
              this.Donnees.estUnDeploiement(aParamsCellule);
            let lDeploye = false;
            if (lEstDeploiement) {
              lDeploye = this.Donnees._estDeploye(aParamsCellule.ligne);
              aParamsCellule._estDeploiement = { expanded: !!lDeploye };
            }
            return {
              html: lEstDeploiement
                ? lDeploye
                  ? IE.jsx.str(
                      IconeSvgFleche_num_bas_1.IconeSvgFleche_num_bas,
                      {
                        class:
                          ObjetListe_Desktop_css_1.SObjetListe_Desktop
                            .iconDeploiement,
                      },
                    )
                  : IE.jsx.str(IconeSvgFleche_num_1.IconeSvgFleche_num, {
                      class:
                        ObjetListe_Desktop_css_1.SObjetListe_Desktop
                          .iconDeploiement,
                    })
                : IE.jsx.str('div', { style: 'height:13px;' }),
              tooltip: lEstDeploiement
                ? lDeploye
                  ? GlossaireListe_1.TradGlossaireListe.ReduireLigne
                  : GlossaireListe_1.TradGlossaireListe.DeployerLigne
                : '',
            };
          }
        }
        const lInfosContenu = { html: '', tooltip: '' };
        const H = [];
        const lParams = Object.assign(aParamsCellule, {
          surEdition: false,
          typeValeur: aTypeValeur,
        });
        const lContenuAffichage = this.Donnees._getContenuAffichage(lParams);
        const lClassLigne =
          (this.Donnees.getClass(lParams) || '') +
          (lParams.avecContenuTronque ? ' Insecable' : '');
        let lStyle = this.Donnees.getStyle(lParams) || '';
        if (lStyle && lStyle.trim && lStyle.endsWith) {
          lStyle = lStyle.trim();
          if (!lStyle.endsWith(';')) {
            lStyle += ';';
          }
        }
        if (!this.Donnees.enConstruction_cacheRechercheTexte) {
          if (lContenuAffichage.tooltip) {
            if (lContenuAffichage.tooltip.startsWith) {
              lInfosContenu.tooltip = lContenuAffichage.tooltip;
            }
          }
          lInfosContenu.idsLabel = lContenuAffichage.idsLabel;
        }
        H.push(
          IE.jsx.str(
            'div',
            {
              style:
                lStyle +
                (lParams.taille > 0
                  ? ' width:' + lParams.taille + 'px;overflow:hidden;'
                  : '') +
                '',
              class: ['liste_contenu_ligne', lClassLigne ? lClassLigne : ''],
              ie_ellipsis:
                lContenuAffichage.attrOverflow === 'ie_ellipsis' || false,
            },
            lContenuAffichage.valeur,
          ),
        );
        lInfosContenu.html = ObjetChaine_1.GChaine.avecEspaceSiVide(H.join(''));
        return lInfosContenu;
      }
      _composeContenuCellule(aParamsCellule, aLargeur) {
        var _a;
        const H = [];
        let lTaille = aLargeur;
        const lType =
          (_a = this.Donnees.getTypeValeur(aParamsCellule)) !== null &&
          _a !== void 0
            ? _a
            : ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
        let lHeightContenu =
          this.Donnees.getHauteurMinContenuCellule(aParamsCellule);
        if (!lHeightContenu) {
          lHeightContenu =
            this._getHeightCellule(aParamsCellule) -
            2 * this._options.paddingCelluleTB -
            1;
        }
        const lStyle = `min-height:${lHeightContenu}px;`;
        let lAvecDeploiement = false;
        if (
          this._deploiementSurCellule(aParamsCellule) &&
          lType !==
            ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
              .CocheDeploiement &&
          this.Donnees.avecImageSurColonneDeploiement(aParamsCellule)
        ) {
          const lAvecEvent =
            !this.Donnees.avecEventDeploiementSurCellule(aParamsCellule);
          const lEstDeploye = this.Donnees._estDeploye(aParamsCellule.ligne);
          aParamsCellule._estDeploiement = { expanded: !!lEstDeploye };
          H.push(
            IE.jsx.str(
              'div',
              {
                class: [
                  'liste_contenu_cellule_deploiement',
                  lAvecEvent ? ' AvecMain' : '',
                ],
                style: lStyle,
                ie_node: lAvecEvent
                  ? this.jsxNodeDeploiementLigne.bind(this, aParamsCellule)
                  : false,
              },
              lEstDeploye
                ? IE.jsx.str(IconeSvgFleche_num_bas_1.IconeSvgFleche_num_bas, {
                    class:
                      ObjetListe_Desktop_css_1.SObjetListe_Desktop
                        .iconDeploiement,
                    role: 'note',
                    ie_tooltiplabel:
                      GlossaireListe_1.TradGlossaireListe.ReduireLigne,
                  })
                : IE.jsx.str(IconeSvgFleche_num_1.IconeSvgFleche_num, {
                    class:
                      ObjetListe_Desktop_css_1.SObjetListe_Desktop
                        .iconDeploiement,
                    role: 'note',
                    ie_tooltiplabel:
                      GlossaireListe_1.TradGlossaireListe.DeployerLigne,
                  }),
            ),
          );
          lTaille = lTaille - 13 - 2;
          lAvecDeploiement = true;
        }
        const lInfosContenu = this._composeContenu(
          Object.assign(aParamsCellule, {
            taille: lTaille,
            avecContenuTronque:
              this.estDonneeListeTableau(this.Donnees) &&
              this.Donnees.avecContenuTronque(aParamsCellule),
            avecDeploiementDansCellule: lAvecDeploiement,
          }),
          lType,
        );
        H.push(
          IE.jsx.str(
            'div',
            {
              class: 'liste_contenu_cellule_contenu',
              style: ObjetStyle_1.GStyle.composeWidth(lTaille) + lStyle,
            },
            lInfosContenu.html,
          ),
        );
        lInfosContenu.html = H.join('');
        return lInfosContenu;
      }
      _surPreResize() {
        var _a;
        if (this.estMobile || !this.ScrollV) {
          return;
        }
        this._cache.calculsTailleColonnesAFaire = true;
        if (!this._donneesRecus) {
          return;
        }
        this.ScrollV.vider();
        if (this._cache.avecScrollHorizontal) {
          (_a = this.ScrollH) === null || _a === void 0 ? void 0 : _a.vider();
        }
        this._enResize = ObjetHtml_1.GHtml.getDisplay(this.Nom);
        if (!this._enResize) {
          return;
        }
        this._annulerCreation();
        this._finaliserEdition({ ignorerActualisation: true });
        this._nettoyerElementsEditionEnCours();
        clearTimeout(this._cache.rechercheTexte.timerSaisie);
        ObjetHtml_1.GHtml.setHtml(this.Nom, '&nbsp;', { ignorerScroll: true });
      }
      _surPostResize() {
        if (!this._donneesRecus) {
          return;
        }
        if (this._enResize && this.Actif) {
          this._actualiser({ conserverSelection: true, sansTriDonnees: true });
        }
        delete this._enResize;
      }
      afficherMenuContextuelTri(aColonne, aEvent) {
        const lGetTri = (aNumeroTri) => {
          let lGenreTri = this._triCourant.genre[aNumeroTri];
          if (this._triCourant.colonne[aNumeroTri] === aColonne) {
            lGenreTri =
              this._triCourant.genre[aNumeroTri] ===
              Enumere_TriElement_1.EGenreTriElement.Croissant
                ? Enumere_TriElement_1.EGenreTriElement.Decroissant
                : Enumere_TriElement_1.EGenreTriElement.Croissant;
          }
          return lGenreTri;
        };
        if (this._triCourant.nombreTri > 1) {
          ObjetMenuContextuel_1.ObjetMenuContextuel.afficher({
            pere: this,
            initCommandes: (aInstance) => {
              for (let i = 0; i < this._triCourant.nombreTri; i++) {
                aInstance.add(
                  GlossaireListe_1.TradGlossaireListe.tri + ' ' + (i + 1),
                  true,
                  function (aNumeroTri) {
                    this.setColonneTri(
                      aColonne,
                      lGetTri(aNumeroTri),
                      aNumeroTri,
                    );
                  }.bind(this, i),
                  {
                    imageFormate: true,
                    image: IE.jsx.str(
                      'div',
                      {
                        style:
                          'margin-left:auto; margin-right:auto; height:9px;',
                        class: 'AlignementMilieu',
                      },
                      this._getDessinCurseurTri({
                        tri:
                          i === 0
                            ? NSListe.FlecheTri.principal
                            : NSListe.FlecheTri.secondaire,
                        triCroissant:
                          lGetTri(i) ===
                          Enumere_TriElement_1.EGenreTriElement.Croissant,
                        top: 1,
                        left: 1,
                      }),
                    ),
                  },
                );
              }
            },
            id: aEvent,
          });
        }
      }
      _surDblClickCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos) {
          return;
        }
        const lParams = lInstance._getParamsCellule(
          lInfos.colonne,
          lInfos.ligne,
        );
        if (lInstance.Donnees && lParams.ligne > -1) {
          if (lInstance.Donnees.avecEvenementSelectionDblClick(lParams)) {
            if (lInstance.Pere && lInstance.Evenement) {
              lInstance.callback.appel(
                lInstance._getParamsCallback(
                  Enumere_EvenementListe_1.EGenreEvenementListe
                    .SelectionDblClick,
                  lParams.colonne,
                  lParams.ligne,
                ),
                Enumere_EvenementListe_1.EGenreEvenementListe.SelectionDblClick,
                lParams.colonne,
                lParams.ligne,
              );
            }
          }
        }
      }
      _getHeightListeHorsContenu() {
        var _a;
        let lResult =
          ObjetPosition_1.GPosition.getHeight(this.ids.titre + '0') +
          (this._zoneContenuAvecTraitHaut()
            ? this._options.borduresContenu_top
            : 0) +
          this._options.borduresContenu_bottom;
        lResult +=
          this._options.borduresContenu_top +
          this._options.borduresContenu_bottom;
        if (
          this._cache.avecScrollHorizontal &&
          this._cache.reserverPlaceScrollHorizontal
        ) {
          lResult +=
            ((_a = this.ScrollH) === null || _a === void 0
              ? void 0
              : _a.Largeur) || 0;
        }
        if (this._options.piedDeListe && this._options.piedDeListe.height > 0) {
          lResult += this._options.piedDeListe.height + 5;
        }
        if (this._avecLigneTotal()) {
          lResult += $(
            ObjetHtml_1.GHtml.getElement(this.idTotaux + '0'),
          ).outerHeight(true);
        }
        $(
          `#${this.Nom.escapeJQ()} .liste_btnentete,\n #${this.Nom.escapeJQ()} .${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeTotaleFd}.${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeFooter},\n #${this.Nom.escapeJQ()} .${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeTotaleFd}.${ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.listeHeader}`,
        ).each(function () {
          const lRect = ObjetPosition_1.GPosition.getClientRect(this);
          lResult += Math.ceil(lRect.outerHeight);
        });
        return lResult;
      }
      _surMouseDownCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        delete lInstance._cache.infosMouseDownCellule_apresFinEdition;
        if (!lInfos) {
          return;
        }
        lInstance._surEventDownLigne({
          event: aEvent,
          ligne: lInfos.ligne,
          colonne: lInfos.colonne,
          gestionShift: true,
          gestionMultiSelection: true,
        });
      }
      _surMouseUpCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        const lInfosMouseDown_afe =
          lInstance._cache.infosMouseDownCellule_apresFinEdition;
        delete lInstance._cache.infosMouseDownCellule_apresFinEdition;
        if (lInstance._estEventSansSelect(aEvent)) {
          return;
        }
        $(this).find('>article').focus();
        if (!lInfos) {
          return;
        }
        if (
          lInfos &&
          lInfosMouseDown_afe &&
          lInfosMouseDown_afe.ligne === lInfos.ligne &&
          lInfosMouseDown_afe.colonne === lInfos.colonne
        ) {
          lInstance._editionDebSurSelection(
            lInfos.colonne,
            lInfos.ligne,
            aEvent,
          );
        }
      }
      _surContextMenuCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (aEvent.originalEvent) {
          aEvent.originalEvent.__contextMenuSurContenu__ = true;
        }
        if (!lInfos || !lInstance.Donnees) {
          return;
        }
        if (
          ObjetNavigateur_1.Navigateur.isTactile &&
          lInstance.estDonneeListeTableau(lInstance.Donnees)
        ) {
          lInstance._surEventDownLigne({
            event: aEvent,
            ligne: lInfos.ligne,
            colonne: lInfos.colonne,
            gestionShift: false,
            gestionMultiSelection: false,
          });
        }
        const lParams = lInstance._getParamsCellule(
          lInfos.colonne,
          lInfos.ligne,
          { event: aEvent },
        );
        if (
          lInstance.Donnees.avecMenuContextuel(lParams) &&
          !ObjetMenuContextuel_1.ObjetMenuContextuel.forcerMenuContextuelNatif(
            aEvent.target,
          )
        ) {
          lInstance._ouvrirMenuContextuel(lParams);
        }
      }
      _getBlocDeNumeroColonne(aNumeroColonne) {
        let lInfosBloc = null;
        for (
          let lIndiceBloc = 0;
          lIndiceBloc < this._cache.infosZonesColonnes.length;
          lIndiceBloc++
        ) {
          lInfosBloc = this._cache.infosZonesColonnes[lIndiceBloc];
          if (
            aNumeroColonne >= lInfosBloc.indiceColonneDebut &&
            aNumeroColonne <= lInfosBloc.indiceColonneFin
          ) {
            break;
          }
        }
        return lInfosBloc;
      }
      _afficherRollover(aElement, aLigneColonne) {
        var _a;
        let lPosGabaritColonne = null;
        let lNumeroColonne = aLigneColonne.colonne;
        const lInfosBloc = this._getBlocDeNumeroColonne(aLigneColonne.colonne);
        if (!lInfosBloc) {
          return false;
        }
        while (
          !lPosGabaritColonne &&
          lNumeroColonne >= lInfosBloc.indiceColonneDebut
        ) {
          lPosGabaritColonne = lInfosBloc.gabaritColonnesTitre[lNumeroColonne];
          if (!lPosGabaritColonne) {
            lNumeroColonne += -1;
          }
        }
        if (!lPosGabaritColonne) {
          return false;
        }
        const lPosition = ObjetPosition_1.GPosition.getRect(aElement);
        let lWidth = lPosGabaritColonne.width + 1;
        let lWidthBloc;
        const lHeight = lPosition.height;
        let lLeftBloc;
        const lTop =
          lPosition.top +
          (((_a = this.ScrollV) === null || _a === void 0
            ? void 0
            : _a.Position) || 0);
        const lEstPremiereLigne =
          aLigneColonne.ligne === this._cache.lignesVisibles[0];
        const lEstPremiereColonne =
          lInfosBloc.indiceBloc === 0 &&
          lInfosBloc.colonnesVisibles[0] === lNumeroColonne;
        const lEcartColonne = lEstPremiereColonne ? 1 : 0;
        const lEcartLigne = 0;
        let lForcerAffichageBlocPrec;
        let lEstBlocCourant;
        if (
          lInfosBloc.dernierBloc &&
          lInfosBloc.indiceColonneFin === lNumeroColonne &&
          this._cache.infosZonesColonnes.length > 1
        ) {
          lWidth += 1;
        }
        for (let lIBloc = 0; lIBloc <= lInfosBloc.indiceBloc; lIBloc++) {
          lForcerAffichageBlocPrec =
            lInfosBloc.indiceBloc > 0 &&
            lNumeroColonne === lInfosBloc.indiceColonneDebut &&
            lIBloc === lInfosBloc.indiceBloc - 1;
          lEstBlocCourant = lIBloc === lInfosBloc.indiceBloc;
          lLeftBloc = lEstBlocCourant
            ? lPosGabaritColonne.left - 1 + lEcartColonne
            : this._cache.infosZonesColonnes[lIBloc].largeurBloc - 1;
          lWidthBloc = lEstBlocCourant ? lWidth - lEcartColonne : 1;
          if (lEstBlocCourant || lForcerAffichageBlocPrec) {
            $('#' + this.ids.rolloverTitre.escapeJQ() + lIBloc)
              .show()
              .css({ left: lLeftBloc, width: lWidthBloc });
          } else {
            $('#' + this.ids.rolloverTitre.escapeJQ() + lIBloc).hide();
          }
          if (lEstPremiereColonne) {
            $('#' + this.ids.rolloverContenuLigne.escapeJQ() + lIBloc).hide();
          } else {
            $('#' + this.ids.rolloverContenuLigne.escapeJQ() + lIBloc)
              .show()
              .css({
                top: lTop - 1 + lEcartLigne,
                height: lHeight + 1 - lEcartLigne,
                width:
                  (lIBloc === 0 && lInfosBloc.indiceBloc > 0
                    ? this._cache.infosZonesColonnes[lIBloc].largeurBloc + 2
                    : lLeftBloc) + (lInfosBloc.indiceBloc > 0 ? 1 : 0),
              });
          }
          if (
            !lEstPremiereLigne &&
            (lEstBlocCourant || lForcerAffichageBlocPrec)
          ) {
            $('#' + this.ids.rolloverContenuColonne.escapeJQ() + lIBloc)
              .show()
              .css({ left: lLeftBloc, height: lTop, width: lWidthBloc });
          } else {
            $('#' + this.ids.rolloverContenuColonne.escapeJQ() + lIBloc).hide();
          }
          if (lEstBlocCourant || lForcerAffichageBlocPrec) {
            $('#' + this.ids.rolloverContenuCellule.escapeJQ() + lIBloc)
              .show()
              .css({
                left: lLeftBloc,
                top: lTop - 1 + lEcartLigne,
                height: lHeight + 1 - lEcartLigne,
                width: lWidthBloc,
              });
          } else {
            $('#' + this.ids.rolloverContenuCellule.escapeJQ() + lIBloc).hide();
          }
        }
        if (
          !lInfosBloc.dernierBloc &&
          !lInfosBloc.estBlocFixe &&
          lNumeroColonne === lInfosBloc.indiceColonneFin
        ) {
          const lIndiceBloc = lInfosBloc.indiceBloc + 1;
          $('#' + this.ids.rolloverTitre.escapeJQ() + lIndiceBloc)
            .show()
            .css({ left: -1, width: 0 });
          $('#' + this.ids.rolloverContenuColonne.escapeJQ() + lIndiceBloc)
            .show()
            .css({ left: -1, height: lTop, width: 0 });
          $('#' + this.ids.rolloverContenuCellule.escapeJQ() + lIndiceBloc)
            .show()
            .css({
              left: -1,
              top: lTop - 1 + lEcartLigne,
              height: lHeight + 1 - lEcartLigne,
              width: 0,
            });
        }
        return true;
      }
      _gererRollover(aAfficher, aElement, aLigneColonne) {
        if (
          aAfficher &&
          this._avecRollover() &&
          aElement &&
          aLigneColonne &&
          this._afficherRollover(aElement, aLigneColonne)
        ) {
          this._cache.rolloverVisible = true;
        } else if (this._cache.rolloverVisible) {
          this._cache.rolloverVisible = false;
          this._cache.infosZonesColonnes.forEach((aBloc) => {
            $(
              '#' + this.ids.rolloverTitre.escapeJQ() + aBloc.indiceBloc,
            ).hide();
            $(
              '#' + this.ids.rolloverContenuLigne.escapeJQ() + aBloc.indiceBloc,
            ).hide();
            $(
              '#' +
                this.ids.rolloverContenuColonne.escapeJQ() +
                aBloc.indiceBloc,
            ).hide();
            $(
              '#' +
                this.ids.rolloverContenuCellule.escapeJQ() +
                aBloc.indiceBloc,
            ).hide();
          });
        }
      }
      _parcourirCellulesVoileBleu(aParamsCellule, aFunc) {
        this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
          this._cache.lignesVisibles.forEach((aLigne) => {
            aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
              const lParamsCelluleCible = this._getParamsCellule(
                aNumeroColonne,
                aLigne,
              );
              if (
                this.Donnees.estConcerneParSurvolCelluleVisible(
                  lParamsCelluleCible,
                  aParamsCellule,
                )
              ) {
                const lNode = ObjetHtml_1.GHtml.getElement(
                  this.getIdCellule(aNumeroColonne, aLigne),
                );
                if (lNode) {
                  aFunc(lNode);
                }
              }
            });
          });
        });
      }
      _gererHoverSurCellule(aNode, aInfos, aEvent) {
        if (ObjetNavigateur_1.Navigateur.isTactile) {
          return;
        }
        const lJNodeOrigine = $(aNode);
        const lParamsCellule = this._getParamsCellule(
          aInfos.colonne,
          aInfos.ligne,
        );
        if (
          !(aEvent.ctrlKey && this._avecRollover()) &&
          this.Donnees &&
          this.Donnees.avecSurvolCelluleVisible(lParamsCellule)
        ) {
          this._parcourirCellulesVoileBleu(lParamsCellule, (aNode) => {
            $(aNode).addClass('voileBleuCellule');
            lJNodeOrigine.one('mouseleave', () => {
              $(aNode).removeClass('voileBleuCellule');
            });
          });
        }
        if (this.Donnees && this.Donnees.avecDessinHover(lParamsCellule)) {
          let lAvecElementHaut = false;
          let lAvecElementBas = false;
          let lAvecDessinHover = false;
          const lClassDessinHover = 'dessinHoverListe';
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            const lNodeZone = ObjetHtml_1.GHtml.getElement(
              ObjetHtml_1.GHtml.getElement(
                this.ids.contenu + aInfosZoneColonnes.indiceBloc,
              ),
            );
            const lViewHeight = $(lNodeZone).height();
            this._cache.lignesVisibles.forEach((aLigne) => {
              aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
                const lParamsCelluleCible = this._getParamsCellule(
                  aNumeroColonne,
                  aLigne,
                );
                if (
                  this.Donnees.estConcerneParDessinHover(
                    lParamsCelluleCible,
                    lParamsCellule,
                  )
                ) {
                  let lDirection;
                  const lNode = ObjetHtml_1.GHtml.getElement(
                    this.getIdCellule(aNumeroColonne, aLigne),
                  );
                  if (lNode) {
                    lDirection =
                      ObjetDonneesListe_1.ObjetDonneesListe
                        .TypeDirectionElementSurvolCellule.droite;
                    if (lParamsCelluleCible.colonne < lParamsCellule.colonne) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.gauche;
                    }
                    const lJNode = $(lNode);
                    const lPosition = lJNode.position();
                    const lHeightCellule = lJNode.height();
                    if (lPosition.top + lHeightCellule / 2 < 0) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.haut;
                    } else if (
                      lPosition.top + lHeightCellule / 2 >
                      lViewHeight
                    ) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.bas;
                    }
                  } else {
                    if (aLigne < aInfos.ligne) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.haut;
                    } else if (aLigne > aInfos.ligne) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.bas;
                    } else {
                      return;
                    }
                  }
                  let lConteneur = null;
                  switch (lDirection) {
                    case ObjetDonneesListe_1.ObjetDonneesListe
                      .TypeDirectionElementSurvolCellule.haut:
                      if (!lAvecElementHaut) {
                        lConteneur = lNodeZone;
                        lAvecElementHaut = true;
                      }
                      break;
                    case ObjetDonneesListe_1.ObjetDonneesListe
                      .TypeDirectionElementSurvolCellule.bas:
                      if (!lAvecElementBas) {
                        lConteneur = lNodeZone;
                        lAvecElementBas = true;
                      }
                      break;
                    default:
                      lConteneur = lNode;
                  }
                  if (lConteneur !== null) {
                    lParamsCelluleCible.node = lConteneur;
                    lParamsCelluleCible.direction = lDirection;
                    lParamsCelluleCible.classHover = lClassDessinHover;
                    ObjetHtml_1.GHtml.addHtml(
                      lConteneur,
                      this.Donnees.construireHtmlHover(lParamsCelluleCible),
                    );
                    lAvecDessinHover = true;
                  }
                }
              });
            });
          });
          if (lAvecDessinHover) {
            const lNom = this.Nom.escapeJQ();
            lJNodeOrigine.one('mouseleave', () => {
              $('#' + lNom + ' .' + lClassDessinHover).remove();
            });
          }
        }
      }
      _surMouseEnterOverCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos || !lInstance.Donnees) {
          return;
        }
        if (aEvent.type === 'mouseenter') {
          lInstance._gererHoverSurCellule(this, lInfos, aEvent);
        }
        lInstance._gererRollover(
          !!aEvent.ctrlKey && aEvent.type === 'mouseover',
          this,
          lInfos,
        );
      }
      _surClickCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos) {
          return;
        }
        if (lInstance._estEventSansSelect(aEvent)) {
          return;
        }
        lInstance._editionDebSurSelection(lInfos.colonne, lInfos.ligne, aEvent);
        if (
          lInstance.Donnees &&
          lInstance.estDonneeListeFlatDesign(lInstance.Donnees) &&
          lInstance.Donnees.options.avecCocheCBSurLigne
        ) {
          const lParamsCellule = lInstance._getParamsCellule(
            lInfos.colonne,
            lInfos.ligne,
          );
          if (lInstance.Donnees.avecCB(lParamsCellule)) {
            lInstance._modifierCBLigneFlatDesign(lParamsCellule);
          }
        }
      }
      _surKeyDownCellule(event) {
        const lInstance = event.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos) {
          return;
        }
        if (
          !lInstance._cache.creationEnCours &&
          !lInstance._cache.editionEnCours &&
          event.ctrlKey &&
          !event.shiftKey
        ) {
          const lCar = String.fromCharCode(event.which).toLowerCase();
          if (lCar === 'c') {
            lInstance._copierCellule(
              lInstance._getParamsCellule(lInfos.colonne, lInfos.ligne),
            );
          } else if (lCar === 'v') {
            lInstance._collerCellule(
              lInstance._getParamsCellule(lInfos.colonne, lInfos.ligne),
            );
          }
        }
      }
      _getLargeurConteneur() {
        this._cache.reserverPlaceScrollHorizontal = false;
        let lLargeur =
          this._cache.largeurTotalCalcule + this._getDiffLargeurContenu();
        if (this._cache.avecScrollHorizontal) {
          this._cache.reserverPlaceScrollHorizontal =
            this._options.avecReservationPlaceScrollHorizontal ||
            lLargeur > this._cache.largeurPage;
          lLargeur = Math.max(
            this._cache.largeurBlocFixe,
            Math.min(lLargeur, this._cache.largeurPage),
          );
        }
        return lLargeur;
      }
      getClassCreation() {
        return 'FondBlanc';
      }
      _zoneContenuAvecTraitHaut() {
        return !(this.ListeTitres && !this._avecLigneCreationTitreEnLigne());
      }
      _surDeplacementScroll() {
        if (!this._cache.timeout_ignorerScrollSortieEdition) {
          if (this._cache.finEditionCreation) {
            if (!this._cache.finEditionCreation.estCreation) {
              this._cache.finEditionCreation();
            }
          } else {
            this._nettoyerElementsEditionEnCours();
          }
        } else {
          const lJSurligneur = $('#' + this.ids.surligneur_edition.escapeJQ());
          if (lJSurligneur.length > 0) {
            const lData = lJSurligneur.data('positionnement');
            if (lData && lData.func) {
              lData.func();
            }
          }
        }
        $(`#${this.Nom.escapeJQ()} .liste_dragInsertion`).remove();
      }
      _evenementScrollV(aGenre, aScrollTop) {
        var _a, _b, _c, _d, _e, _f, _g;
        switch (aGenre) {
          case ObjetScroll_1.EGenreScrollEvenement.Deplacement:
            this._surDeplacementScroll();
            return aScrollTop;
          case ObjetScroll_1.EGenreScrollEvenement.TailleZone: {
            const lHeightListeHorsContenu = this._getHeightListeHorsContenu();
            if (this._hauteurAdapteAuContenu()) {
              aScrollTop = $(
                ObjetHtml_1.GHtml.getElement(
                  (_a = this.ScrollV) === null || _a === void 0
                    ? void 0
                    : _a.getIdContenu(EGenreZoneScroll.contenu),
                ),
              ).outerHeight();
              let lHeightMaxListe = null;
              if (
                MethodesObjet_1.MethodesObjet.isFunction(
                  this._options.getHauteurMaxAdapteListe,
                )
              ) {
                lHeightMaxListe = this._options.getHauteurMaxAdapteListe(
                  this.Nom,
                );
              }
              if (MethodesObjet_1.MethodesObjet.isNumber(lHeightMaxListe)) {
                aScrollTop = Math.min(
                  aScrollTop,
                  lHeightMaxListe - lHeightListeHorsContenu,
                );
              } else if (
                this._options.hauteurMaxAdapteContenu > 0 &&
                MethodesObjet_1.MethodesObjet.isNumber(
                  this._options.hauteurMaxAdapteContenu,
                )
              ) {
                aScrollTop = Math.min(
                  aScrollTop,
                  this._options.hauteurMaxAdapteContenu,
                );
              } else if (
                this._options.hauteurAdapteContenu !== Infinity &&
                this._cache.heightConteneur > 0 &&
                !this._options.hauteurMaxAdapteContenu
              ) {
                aScrollTop = Math.min(
                  aScrollTop,
                  this._cache.heightConteneur - lHeightListeHorsContenu,
                );
              }
            } else {
              aScrollTop =
                this._cache.heightConteneur - lHeightListeHorsContenu;
            }
            if (this._options.hauteurZoneContenuListeMin === -1) {
              if (this._cache.lignesVisibles.length > 0) {
                aScrollTop = Math.max(
                  aScrollTop,
                  $('#' + this.getIdCellule(0, 0).escapeJQ()).outerHeight(),
                );
              }
            } else {
              aScrollTop = Math.max(
                aScrollTop,
                this._options.hauteurZoneContenuListeMin,
              );
            }
            return Math.ceil(aScrollTop);
          }
          case ObjetScroll_1.EGenreScrollEvenement.TailleContenu:
            if (!this._hauteurAdapteAuContenu()) {
              const lHauteurContenu = ObjetPosition_1.GPosition.getHeight(
                (_b = this.ScrollV) === null || _b === void 0
                  ? void 0
                  : _b.getIdContenu(EGenreZoneScroll.contenu),
              );
              if (
                (((_c = this.ScrollV) === null || _c === void 0
                  ? void 0
                  : _c.TailleZone) || 0) > lHauteurContenu
              ) {
                aScrollTop =
                  ((_d = this.ScrollV) === null || _d === void 0
                    ? void 0
                    : _d.TailleZone) || 0;
              } else {
                aScrollTop = lHauteurContenu - 1;
              }
            }
            return Math.ceil(aScrollTop);
          case ObjetScroll_1.EGenreScrollEvenement.TailleScroll:
            return Math.ceil(
              Math.max(
                ((_e = this.ScrollV) === null || _e === void 0
                  ? void 0
                  : _e.tailleMin) || 0,
                (((_f = this.ScrollV) === null || _f === void 0
                  ? void 0
                  : _f.TailleZone) || 0) +
                  ObjetPosition_1.GPosition.getHeight(
                    (_g = this.ScrollV) === null || _g === void 0
                      ? void 0
                      : _g.getIdZone(EGenreZoneScroll.titre),
                  ) +
                  1 -
                  (this._avecBoutonsListeHautScroll()
                    ? (this._options.tailleBoutons + 1) *
                      this._cache.boutons.length
                    : 0) -
                  this._options.borduresContenu_bottom,
              ),
            );
        }
      }
      _getLargeurMaxZone() {
        return this._cache.largeurPage - this._getDiffLargeurContenu();
      }
      _evenementScrollH(aGenre, aScrollLeft) {
        switch (aGenre) {
          case ObjetScroll_1.EGenreScrollEvenement.Deplacement:
            this._surDeplacementScroll();
            return aScrollLeft;
          case ObjetScroll_1.EGenreScrollEvenement.TailleContenu:
            return aScrollLeft;
          case ObjetScroll_1.EGenreScrollEvenement.TailleZone: {
            let lTaille = this._cache.largeurTotalCalcule;
            const lTailleMax = this._getLargeurMaxZone();
            let lInc;
            if (lTaille > lTailleMax) {
              if (this._options.scrollHorizontalSurLargeurComplete) {
                lTaille = lTailleMax - this._cache.largeurBlocFixe;
              } else {
                lTaille = 0;
                this._cache.infosZonesColonnes.forEach((aInfos) => {
                  if (aInfos.estBlocFixe) {
                    return;
                  }
                  aInfos.colonnesVisibles.every((aNumeroColonne) => {
                    lInc =
                      this._cache.taillesColonne[aNumeroColonne].px +
                      2 * this._options.paddingCelluleLR +
                      1;
                    if (
                      lTaille + lInc >
                      lTailleMax - this._cache.largeurBlocFixe
                    ) {
                      return false;
                    }
                    lTaille += lInc;
                    return true;
                  });
                });
                if (lTaille === 0) {
                  lTaille = lTailleMax - this._cache.largeurBlocFixe;
                } else {
                  lTaille -= 1;
                }
              }
            }
            return Math.max(lTaille, this._options.largeurZoneContenuListeMin);
          }
        }
      }
      _avecRollover() {
        return !!(
          this._options.avecRollover &&
          ObjetSupport_1.Support.supportPointerEventsNone &&
          this.ListeTitres
        );
      }
      _initParseur() {
        uParseur = '';
        clearTimeout(uTimerParseur);
      }
      _evenementFenetreDate(aParams, aGenreBouton, aDate) {
        if (aGenreBouton === -1) {
          if (aParams.ligne < 0) {
            this.surCreationFin(-1);
          } else {
            this._surEditionFin({
              colonne: aParams.colonne,
              ligne: aParams.ligne,
            });
          }
        } else {
          const lValeur =
            aGenreBouton === 1
              ? this.Donnees.getChaineDeDate(aDate, aParams)
              : null;
          if (aParams.ligne < 0) {
            this._surCreation(lValeur);
          } else {
            this._surEdition(aParams, lValeur, true);
          }
        }
      }
      navigationClavierGridTotal(aEvent) {
        var _a, _b, _c, _d, _e, _f;
        if (this._estToucheNavigationFlechesClavier(aEvent)) {
          aEvent.stopPropagation();
          const lNav = this._cache.gridTotalAccess.nav;
          const lNavLigneCorrige = Math.max(0, lNav.ligne);
          const lOrdres = this._cache.gridTotalAccess.ordres;
          switch (aEvent.which) {
            case ToucheClavier_1.ToucheClavier.FlecheGauche: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lCols) {
                const lIndice = lCols.indexOf(lNav.colonne);
                if (lIndice > 0) {
                  (_a = ObjetHtml_1.GHtml.getElement(
                    this.getIdCelluleTotal(
                      lCols[lIndice - 1],
                      lNav.ligne,
                      true,
                    ),
                  )) === null || _a === void 0
                    ? void 0
                    : _a.focus();
                }
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.FlecheDroite: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lCols) {
                let lIndice = lCols.indexOf(lNav.colonne);
                let lTrouve = false;
                while (lIndice >= 0 && lIndice < lCols.length - 1 && !lTrouve) {
                  lIndice += 1;
                  if (lCols[lIndice] > lNav.colonne) {
                    (_b = ObjetHtml_1.GHtml.getElement(
                      this.getIdCelluleTotal(lCols[lIndice], lNav.ligne, true),
                    )) === null || _b === void 0
                      ? void 0
                      : _b.focus();
                    lTrouve = true;
                  }
                }
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.FlecheBas: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lNavLigneCorrige < lOrdres.length - 1) {
                let lIndiceCol = lCols.indexOf(lNav.colonne);
                const lColsSuiv = lOrdres[lNavLigneCorrige + 1];
                lIndiceCol = Math.min(lIndiceCol, lColsSuiv.length - 1);
                (_c = ObjetHtml_1.GHtml.getElement(
                  this.getIdCelluleTotal(
                    lColsSuiv[lIndiceCol],
                    lNavLigneCorrige + 1,
                    true,
                  ),
                )) === null || _c === void 0
                  ? void 0
                  : _c.focus();
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.FlecheHaut: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lNavLigneCorrige > 0) {
                let lIndiceCol = lCols.indexOf(lNav.colonne);
                const lColsPrec = lOrdres[lNavLigneCorrige - 1];
                lIndiceCol = Math.min(lIndiceCol, lColsPrec.length - 1);
                (_d = ObjetHtml_1.GHtml.getElement(
                  this.getIdCelluleTotal(
                    lColsPrec[lIndiceCol],
                    lNavLigneCorrige - 1,
                    true,
                  ),
                )) === null || _d === void 0
                  ? void 0
                  : _d.focus();
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.Debut: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lCols) {
                let lIndiceCol = lCols.indexOf(lNav.colonne);
                let lLigne = lNav.ligne;
                if (aEvent.ctrlKey) {
                  const lColsDebut = lOrdres[0];
                  lLigne = 0;
                  lIndiceCol = Math.min(lIndiceCol, lColsDebut.length - 1);
                } else {
                  lIndiceCol = 0;
                }
                if (lIndiceCol >= 0) {
                  (_e = ObjetHtml_1.GHtml.getElement(
                    this.getIdCelluleTotal(lCols[lIndiceCol], lLigne, true),
                  )) === null || _e === void 0
                    ? void 0
                    : _e.focus();
                  aEvent.preventDefault();
                }
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.Fin: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lCols) {
                let lIndiceCol = lCols.indexOf(lNav.colonne);
                let lLigne = lNav.ligne;
                if (aEvent.ctrlKey) {
                  lLigne = lOrdres.length - 1;
                  const lColsFin = lOrdres[lLigne];
                  lIndiceCol = Math.min(lIndiceCol, lColsFin.length - 1);
                } else {
                  lIndiceCol = lCols.length - 1;
                }
                if (lIndiceCol < lCols.length) {
                  (_f = ObjetHtml_1.GHtml.getElement(
                    this.getIdCelluleTotal(lCols[lIndiceCol], lLigne, true),
                  )) === null || _f === void 0
                    ? void 0
                    : _f.focus();
                  aEvent.preventDefault();
                }
              }
              break;
            }
          }
        }
      }
      jsxGetNodeScrollContenuParent(aInstance, aNode) {
        $(aNode).on({
          contextmenu: function (aEvent) {
            if (
              aEvent.originalEvent &&
              '__contextMenuSurContenu__' in aEvent.originalEvent &&
              aEvent.originalEvent.__contextMenuSurContenu__
            ) {
              return;
            }
            const lParams = aInstance._getParamsCellule(null, -2, {
              surFondListe: true,
            });
            if (
              aInstance.Donnees.avecMenuContextuel(lParams) &&
              !ObjetMenuContextuel_1.ObjetMenuContextuel.forcerMenuContextuelNatif(
                aEvent.target,
              )
            ) {
              aInstance._ouvrirMenuContextuel(lParams);
            }
          },
        });
      }
      jsxGetNodeScrollContenu(aInstance, aNode) {
        const lEventMapCelluleTd = {
          mousedown: aInstance._surMouseDownCellule,
          mouseup: aInstance._surMouseUpCellule,
          click: aInstance._surClickCellule,
          dblclick: aInstance._surDblClickCellule,
          keyup: aInstance._surKeyUpCellulePere,
          keydown: aInstance._surKeyDownCellule,
          contextmenu: aInstance._surContextMenuCellule,
          mouseenter: aInstance._surMouseEnterOverCellule,
          mouseover: aInstance._surMouseEnterOverCellule,
        };
        Object.assign(lEventMapCelluleTd, this.getEventMapCelluleFocusable());
        const lData = { instance: aInstance };
        $(aNode)
          .on(
            lEventMapCelluleTd,
            'div.liste_celluleGrid:not(:has(.Liste_Input_Texte))',
            lData,
          )
          .on('mouseleave', () => {
            aInstance._gererRollover(false);
          });
      }
      jsxGetNodeTableTitre(aIndiceBloc, aNode) {
        const lThis = this;
        if (this._cache.infosZonesColonnes.length > 1) {
          $(aNode)
            .find('.liste_titreGabLigne')
            .each(function (aIndexLigne) {
              if (!lThis._cache.heightLigneTitre) {
                lThis._cache.heightLigneTitre = {};
              }
              if (!lThis._cache.heightLigneTitre[aIndexLigne]) {
                lThis._cache.heightLigneTitre[aIndexLigne] = {
                  min: Number.MAX_VALUE,
                  max: -1,
                };
              }
              const lInfosLigne = lThis._cache.heightLigneTitre[aIndexLigne];
              const lHeight = $(this).height();
              lInfosLigne[aIndiceBloc] = lHeight;
              lInfosLigne.min = Math.min(lHeight, lInfosLigne.min);
              lInfosLigne.max = Math.max(lHeight, lInfosLigne.max);
            });
        }
      }
      jsxGetNodeAfterTableTitre(aIndiceBloc, aNode) {
        const lThis = this;
        if (this._cache.heightLigneTitre) {
          $(aNode)
            .find('.liste_titreGabLigne')
            .each(function (aIndexLigne) {
              const lInfosLigne = lThis._cache.heightLigneTitre[aIndexLigne];
              if (lInfosLigne && lInfosLigne[aIndiceBloc] < lInfosLigne.max) {
                $(this).height(lInfosLigne.max);
              }
            });
        }
        const lInfos = this._cache.infosZonesColonnes[aIndiceBloc];
        if (this._cache.colonnesTri) {
          this._nodeTableTitrePourTri(aNode, lInfos);
        }
      }
      jsxGetNodeAfterCurseurTri(
        aNumeroColonne,
        aNumeroTri,
        aIndiceBloc,
        aNode,
      ) {
        const lInfos = this._cache.infosZonesColonnes[aIndiceBloc];
        this._positionnerCurseurTri(lInfos, aNode, aNumeroColonne);
        const lTriActif = aNumeroTri >= 0;
        const lThis = this;
        if (lTriActif) {
          $(aNode).on({
            contextmenu: function (aEvent) {
              lThis.afficherMenuContextuelTri(
                lThis._triCourant.colonne[aNumeroTri],
                aEvent,
              );
            },
          });
        } else {
          $(aNode).on({
            focus() {
              $(this).removeClass(Divers_css_1.SD.srOnly);
            },
            blur() {
              $(this).addClass(Divers_css_1.SD.srOnly);
            },
          });
        }
        $(aNode).on('validation', function (aEvent) {
          if ($(this).data('dragEnCours')) {
            return;
          }
          if (
            aNumeroTri >= 0 &&
            lThis._triCourant.nombreTri > 1 &&
            aEvent.typeOrigine === 'keyup'
          ) {
            lThis.afficherMenuContextuelTri(
              lThis._triCourant.colonne[aNumeroTri],
              aEvent,
            );
          } else {
            const lGenreTri =
              lTriActif &&
              lThis._triCourant.genre[aNumeroTri] ===
                Enumere_TriElement_1.EGenreTriElement.Croissant
                ? Enumere_TriElement_1.EGenreTriElement.Decroissant
                : Enumere_TriElement_1.EGenreTriElement.Croissant;
            lThis._setColonneTri(
              aNumeroColonne,
              lGenreTri,
              lTriActif ? aNumeroTri : 0,
            );
          }
        });
      }
      jsxDragCurseurTriDraggable(aColonne, aNumeroTri, aIndiceBloc, aNode) {
        const lIdCurseurTriSurvol = `#${this.getIdBtnTri(aIndiceBloc, aColonne).escapeJQ()}.flecheSurvol_${aIndiceBloc}`;
        const lThis = this;
        return {
          start(aParamsDrag) {
            $(aParamsDrag.node).data('dragEnCours', true);
            $(lIdCurseurTriSurvol).data('dragEnCours', true);
          },
          drag(aParamsDrag) {
            var _a, _b;
            const lNumeroColonne = lThis._getColonneDePositionLeft(
              aParamsDrag.pos.x,
              ObjetHtml_1.GHtml.getElement(
                (_a = lThis.ScrollH) === null || _a === void 0
                  ? void 0
                  : _a.getIdContenu(EGenreZoneScroll.tri),
              ),
              lThis._cache.infosZonesColonnes[aIndiceBloc],
            );
            aParamsDrag.numeroColonneTri = lNumeroColonne;
            const lRectContainer = ObjetPosition_1.GPosition.getClientRect(
              ObjetHtml_1.GHtml.getElement(
                (_b = lThis.ScrollH) === null || _b === void 0
                  ? void 0
                  : _b.getIdZone(EGenreZoneScroll.tri),
              ),
            );
            let lLeft =
              aParamsDrag.pos.x -
              lRectContainer.left -
              aParamsDrag.rect.width / 2;
            lLeft = Math.max(lLeft, 0);
            lLeft = Math.min(
              lLeft,
              lRectContainer.width - aParamsDrag.rect.width,
            );
            $(aParamsDrag.node).css({ left: lLeft });
          },
          stop(aParamsDrag) {
            $(aParamsDrag.node).data('dragEnCours', null);
            $(lIdCurseurTriSurvol).data('dragEnCours', null);
            if (
              aParamsDrag.numeroColonneTri < 0 ||
              !lThis._cache.colonnesTri[aParamsDrag.numeroColonneTri]
            ) {
              return;
            }
            lThis._setColonneTri(
              aParamsDrag.numeroColonneTri,
              lThis._triCourant.genre[aNumeroTri],
              aNumeroTri,
            );
          },
        };
      }
      jsxDragFantomeCellule(aLigne, aColonne) {
        const lThis = this;
        return {
          getIdZone() {
            return lThis.idZone;
          },
          start(aParamsDrag) {
            if (lThis._cache.finEditionCreation) {
              lThis._cache.finEditionCreation();
              return false;
            }
            const lParamsCellule = lThis._getParamsCellule(aColonne, aLigne, {
              draggable: true,
            });
            Object.assign(
              aParamsDrag.data,
              {
                estObjetListe: true,
                instance: lThis,
                avecSuppression: lThis._avecSuppressionSelectionCourante(
                  lParamsCellule.ligne,
                  lParamsCellule.colonne,
                ),
                libelle: lThis._getLibelleDraggable(lParamsCellule),
              },
              lParamsCellule,
            );
          },
          drag: function (aParamsDrag) {
            const lData = aParamsDrag.data;
            lData.horsZoneSuppression = false;
            if (
              !lData.droppableCourant &&
              lData.avecSuppression &&
              aParamsDrag.horsZone
            ) {
              lData.horsZoneSuppression = true;
            }
          },
          stop: function (aParamsDrag) {
            const lData = aParamsDrag.data;
            if (lData) {
              if (lData.horsZoneSuppression) {
                lThis._surSuppression();
              } else {
                ObjetHtml_1.GHtml.setFocus(
                  lThis.getIdCellule(lData.colonne, lData.ligne, true),
                );
              }
            }
          },
        };
      }
      jsxDropCelluleDroppable(aLigne, aColonne) {
        const lParamsCellule = this._getParamsCellule(-1, aLigne);
        const lThis = this;
        return {
          accept(aParamsDrop) {
            const lData = aParamsDrop.drag.data;
            const lElement = $(aParamsDrop.drag.node);
            return (
              lData &&
              lThis.Donnees.autoriserDeplacementElementSurLigne(
                lParamsCellule,
                Object.assign({ jDraggable: lElement }, lData),
              )
            );
          },
          over(aParamsDrop) {
            var _a, _b;
            const lData = aParamsDrop.drag.data;
            lData.getHtmlDetailsDraggable = function () {
              return lThis.Donnees.getHtmlDetailsDraggableOver(
                lParamsCellule,
                lData,
              );
            };
            lData.celluleDroppableHover = { ligne: aLigne, colonne: aColonne };
            lData.droppableCourant = aParamsDrop.drop.node;
            IEHtml_1.IEHtml.refresh(true);
            lThis._parcourirCellulesVoileBleu(lParamsCellule, (aNode) => {
              $(aNode).addClass('voileDropCellule');
            });
            const lEstPremiereLigne =
              lParamsCellule.ligne === lThis._cache.lignesVisibles[0];
            const lEstDerniereLigne =
              lParamsCellule.ligne ===
              lThis._cache.lignesVisibles[
                lThis._cache.lignesVisibles.length - 1
              ];
            if (lThis.Donnees.options.dragNDropLigneInsertion) {
              const lJConteneur = $('#' + lThis.ids.zoneFils.escapeJQ());
              const lRect = ObjetPosition_1.GPosition.getClientRect(
                aParamsDrop.drop.node,
              );
              let lTop =
                lRect.top +
                (lParamsCellule.ligne < lData.ligne ? -1 : lRect.height) -
                ObjetPosition_1.GPosition.getClientRect(lJConteneur.get(0))
                  .top -
                1;
              if (lEstPremiereLigne) {
                lTop += 2;
              } else if (lEstDerniereLigne) {
                lTop += -2;
              }
              lJConteneur.ieHtmlAppend(
                [
                  IE.jsx.str(
                    'div',
                    {
                      id: lThis.ids.dragInsertion + lParamsCellule.ligne,
                      class: 'liste_dragInsertion',
                      style: { top: lTop },
                    },
                    IE.jsx.str('div', { class: 'liste_dragInsertion_fg' }),
                    IE.jsx.str('div', { class: 'liste_dragInsertion_fd' }),
                  ),
                ].join(''),
              );
            }
            const lIgnorerScroll =
              (lEstPremiereLigne &&
                ((_a = lThis.ScrollV) === null || _a === void 0
                  ? void 0
                  : _a.estScrollSurBorne(true))) ||
              (lEstDerniereLigne &&
                ((_b = lThis.ScrollV) === null || _b === void 0
                  ? void 0
                  : _b.estScrollSurBorne(false)));
            if (!lIgnorerScroll) {
              setTimeout(() => {
                lThis.scrollTo({
                  ligne: lParamsCellule.ligne,
                  avecScrollTopLigne: false,
                  ecartForce: 10,
                });
              }, 50);
            }
          },
          out(aParamsDrop) {
            const lData = aParamsDrop.drag.data;
            let lLigneDroppableChange = true;
            if (
              lData.celluleDroppableHover &&
              lData.celluleDroppableHover.ligne === aLigne
            ) {
              if (lData.celluleDroppableHover.colonne === aColonne) {
                lData.celluleDroppableHover = undefined;
              } else {
                lLigneDroppableChange = false;
              }
            }
            if (lLigneDroppableChange) {
              lThis._parcourirCellulesVoileBleu(lParamsCellule, (aNode) => {
                $(aNode).removeClass('voileDropCellule');
              });
              if (lThis.Donnees.options.dragNDropLigneInsertion) {
                $(
                  '#' +
                    (lThis.ids.dragInsertion + lParamsCellule.ligne).escapeJQ(),
                ).remove();
              }
              if (lData.droppableCourant === aParamsDrop.drop.node) {
                lData.droppableCourant = undefined;
                lData.getHtmlDetailsDraggable = undefined;
              }
              IEHtml_1.IEHtml.refresh();
            }
          },
          drop(aParamsDrop) {
            const lData = aParamsDrop.drag.data;
            lThis._parcourirCellulesVoileBleu(lParamsCellule, (aNode) => {
              $(aNode).removeClass('voileDropCellule');
            });
            if (lData) {
              if (lThis.Donnees.options.dragNDropLigneInsertion) {
                $(
                  '#' +
                    (lThis.ids.dragInsertion + lParamsCellule.ligne).escapeJQ(),
                ).remove();
              }
              const lElement = $(aParamsDrop.drag.node);
              lThis._surDeplacementLigneSurAutreLigne(
                lParamsCellule,
                Object.assign({ jDraggable: lElement }, lData),
              );
            }
          },
        };
      }
    }
    exports.ObjetListe = ObjetListe;
    ObjetListe.SelecteurCss = { focusGrid: 'liste-focus-grid' };
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
      ObjetListe.StyleElementInteractifTitreSansTri = 'TitreListeSansTri';
    })(ObjetListe || (exports.ObjetListe = ObjetListe = {}));
  },
  fn: 'objetliste.js',
});