IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetBloc =
      exports.GestionnaireBloc =
      exports.GestionnaireBlocDeBase =
        void 0;
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const UtilitaireBloc_1 = require('@cp/script/UtilitaireBloc');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetInterface_1 = require('@cp/script/ObjetInterface');
    const Enumere_ModeAffichageTimeline_1 = require('@cp/script/Enumere/Enumere_ModeAffichageTimeline');
    const AccessApp_1 = require('@cp/script/AccessApp');
    class GestionnaireBlocDeBase extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
        this._instances = [];
        this._options = {};
      }
      setOptions(aOptions) {
        Object.assign(this._options, aOptions);
        return this;
      }
      instancierObjetMetier(
        aDataBloc,
        aConstructeurObjMetier,
        aParamObjMetier,
      ) {
        const lIndiceObjMetier = this._instances.length;
        $.extend(aDataBloc, {
          indiceInstanceMetier: lIndiceObjMetier,
          estSelectionne: false,
        });
        this._instances[lIndiceObjMetier] = new aConstructeurObjMetier({
          pere: aParamObjMetier.pere,
          evenement: aParamObjMetier.evenement,
        });
        this._instances[lIndiceObjMetier].setParametres(
          aDataBloc,
          this._options,
        );
        return this._instances[lIndiceObjMetier];
      }
      getInstanceObjetMetier(aDataBloc, aConstructeurObjMetier) {
        const lIndice =
          aDataBloc === null || aDataBloc === void 0
            ? void 0
            : aDataBloc.indiceInstanceMetier;
        if (
          lIndice !== null &&
          lIndice !== undefined &&
          this._instances[lIndice] !== null &&
          this._instances[lIndice] !== undefined
        ) {
          return this._instances[lIndice];
        } else {
          return this.instancierObjetMetier(aDataBloc, aConstructeurObjMetier, {
            pere: this,
            evenement: this.surEvntMetier.bind(this),
          });
        }
      }
      surEvntMetier(aDataBloc, aGenreEvnt, aParam) {
        if (this.Pere && this.Evenement) {
          this.callback.appel(aDataBloc, aGenreEvnt, aParam);
        }
      }
      composeZoneInstance(aInstance) {
        return (
          '<div id="' +
          aInstance.getNom() +
          '" tabindex="0" class="container-bloc"></div>'
        );
      }
      composeBloc(aDataBloc) {
        return;
      }
      refresh() {
        const lNbr = this._instances.length;
        for (let i = 0; i < lNbr; i++) {
          this.refreshInstance(i);
        }
      }
      refreshInstance(aIndice) {
        const lInstance = this._instances[aIndice];
        if (lInstance !== null && lInstance !== undefined) {
          lInstance.initialiser();
        }
      }
      reinit() {
        const lNbr = this._instances.length;
        for (let i = 0; i < lNbr; i++) {
          this.reInitInstance(i);
        }
        this._instances = [];
      }
      reInitInstance(aIndice) {
        const lInstance = this._instances[aIndice];
        const lNomInstance = lInstance.getNom();
        if (lInstance && !lInstance.isDestroyed() && lInstance.free) {
          lInstance.free();
        }
        this._instances[aIndice] = null;
        return lNomInstance;
      }
      composeBlocComplet(aDataBloc) {
        return null;
      }
    }
    exports.GestionnaireBlocDeBase = GestionnaireBlocDeBase;
    class GestionnaireBloc extends GestionnaireBlocDeBase {
      constructor(aParams) {
        super(aParams);
        this._options = { avecZoneAction: true };
      }
      setGenreBloc(aGenreBloc) {
        this.GenreBloc = aGenreBloc;
      }
      saisGererBloc(aDataBloc) {
        return aDataBloc.genreBloc === this.GenreBloc;
      }
      getParamsBloc(aDataBloc) {
        return {};
      }
      setUtilitaires(aUtilitaires) {
        this.utilitaires = aUtilitaires;
      }
      composeBlocComplet(aDataBloc) {
        const lParamBloc = Object.assign(
          {
            estSelectionne: aDataBloc.estSelectionne,
            dateAffichee: aDataBloc.DateDebut,
          },
          this.getParamsBloc(aDataBloc),
        );
        lParamBloc.genreRessourceDocumentJoint =
          this.getRessourceDocumentJoint();
        return { html: UtilitaireBloc_1.TUtilitaireBloc.compose(lParamBloc) };
      }
      getRessourceDocumentJoint() {
        return this.utilitaires
          ? this.utilitaires.genreRessource.getRessourceDocumentJoint()
          : 0;
      }
      getRessourceAucune() {
        return this.utilitaires
          ? this.utilitaires.genreRessource.getRessourceAucune()
          : 0;
      }
    }
    exports.GestionnaireBloc = GestionnaireBloc;
    class ObjetBloc extends ObjetInterface_1.ObjetInterface {
      constructor(aParams) {
        super(aParams);
        this.donneesRecues = false;
        this._options = {};
      }
      setUtilitaires(aUtilitaires) {
        this.utilitaires = aUtilitaires;
      }
      setParametres(aElement, aOptions) {
        this.donneesRecues = true;
        this._options = Object.assign(this._options, aOptions);
        this.donnee = aElement;
      }
      getParamsBloc() {
        return {
          titre: this.getTitre(),
          infoSousTitre: this.getInfoSsTitre(),
          infoTitre: this.getInfoTitre(),
          widthColDroite: this.getWidthColDroite(),
          widthBtnAction: this.getWidthBtnAction(),
          marqueurV: {
            couleur: this.getCouleurMarqueur(),
            avecMarqueur: this.getAvecMarqueurV(),
          },
          avecMargeGauche: this.getAvecMargeGauche(),
          couleursBloc: {
            fondBloc: this.getCouleurFondBloc(),
            fondTitre: this.getCouleurFondTitre(),
          },
          ombre: { avecOmbre: this.avecOmbre() },
          bordure: {
            avecBordure: this.avecBordure(),
            couleur: this.couleurBordure2(),
          },
          menuContextuel: {
            actif: this.avecMenuContextuel(),
            libelle: this.libelleMenuContextuel(),
            jsxModelBouton: this.getJsxModelBoutonMenuContextuel(),
            param: { pere: this },
          },
          documents: {
            genreRessource: this.getGenreRessourceDocuments(),
            avecDocuments: this.getAvecDocuments(),
            listeDocuments: this.getListeDocuments(),
          },
          boutonsActions: this.getTabBtnActions(),
          estPlie: this.estBlocFerme(),
          jsxNodeEventPropagationTitreBloc:
            this.jsxNodeEventPropagationTitreBloc(),
          modeAffichage: this._options.modeAffichage,
        };
      }
      getCouleurMarqueur() {
        return (0, AccessApp_1.getApp)().getCouleur().themeNeutre.sombre;
      }
      getAvecMarqueurV() {
        return (
          this._options.modeAffichage !==
          Enumere_ModeAffichageTimeline_1.EModeAffichageTimeline.compact
        );
      }
      getAvecMargeGauche() {
        return !IE.estMobile;
      }
      jsxNodeEventPropagationTitreBloc() {
        return false;
      }
      getCouleurFondBloc() {
        return 'var(--color-background)';
      }
      getCouleurFondTitre() {
        return 'var(--color-background)';
      }
      avecOmbre() {
        return true;
      }
      avecBordure() {
        return false;
      }
      couleurBordure2() {
        return (0, AccessApp_1.getApp)().getCouleur().themeNeutre.claire;
      }
      estBlocFerme() {
        return false;
      }
      getTitre(aTitre) {
        let lResult = aTitre !== null && aTitre !== undefined ? aTitre : '';
        if (lResult === '') {
          lResult = 'Sans titre';
        }
        return lResult;
      }
      getInfoSsTitre() {
        const lStrSsTitre = [];
        return { avecInfo: false, strInfo: lStrSsTitre.join('') };
      }
      getInfoTitre() {
        const lAvecInfo = false;
        const lStrInfo = [];
        return { avecInfo: lAvecInfo, strInfo: lStrInfo.join('') };
      }
      getGenreRessourceDocuments() {
        return this.utilitaires.genreRessource.getRessourceDocumentJoint();
      }
      getAvecDocuments() {
        return false;
      }
      getListeDocuments() {
        return new ObjetListeElements_1.ObjetListeElements();
      }
      getWidthColDroite(aValeur) {
        if (
          this._options !== null &&
          this._options !== undefined &&
          this._options.avecZoneAction === false &&
          this.getInfoTitre().avecInfo === false
        ) {
          return 0;
        }
        return aValeur !== null && aValeur !== void 0 ? aValeur : 0;
      }
      getWidthBtnAction(aValeur) {
        if (
          this._options !== null &&
          this._options !== undefined &&
          this._options.avecZoneAction === false
        ) {
          return 0;
        }
        return aValeur !== null && aValeur !== void 0 ? aValeur : 0;
      }
      avecMenuContextuel() {
        if (
          this._options !== null &&
          this._options !== undefined &&
          this._options.avecZoneAction === false
        ) {
          return false;
        }
        return false;
      }
      libelleMenuContextuel() {
        return 'Editer';
      }
      getJsxModelBoutonMenuContextuel() {
        return null;
      }
      getTabBtnActions() {
        const lResult = [];
        return lResult;
      }
    }
    exports.ObjetBloc = ObjetBloc;
  },
  fn: 'gestionnairebloc.js',
});