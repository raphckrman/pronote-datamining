IE.fModule({
  f: function (exports, require, module, global) {
    const { Identite } = require('ObjetIdentite.js');
    const { TUtilitaireBloc } = require('UtilitaireBloc.js');
    const { ObjetElement } = require('ObjetElement.js');
    const { ObjetListeElements } = require('ObjetListeElements.js');
    const { EGenreTitreBloc } = require('UtilitaireBloc.js');
    const { EGenreProfondeurBloc } = require('UtilitaireBloc.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { ObjetInterface } = require('ObjetInterface.js');
    const {
      EModeAffichageTimeline,
    } = require('Enumere_ModeAffichageTimeline.js');
    const { GHtml } = require('ObjetHtml.js');
    class GestionnaireBlocDeBase extends Identite {
      constructor(...aParams) {
        super(...aParams);
        this._instances = [];
        this._options = {};
      }
      setOptions(aOptions) {
        $.extend(this._options, aOptions);
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
        this._instances[lIndiceObjMetier] = new aConstructeurObjMetier(
          this.Nom + '._instances',
          lIndiceObjMetier,
          aParamObjMetier.pere,
          aParamObjMetier.evenement,
        );
        this._instances[lIndiceObjMetier].setParametres(
          aDataBloc,
          this._options,
        );
        return this._instances[lIndiceObjMetier];
      }
      getInstanceObjetMetier(aDataBloc, aConstructeurObjMetier) {
        const lIndice = aDataBloc.indiceInstanceMetier;
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
      composeBloc() {}
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
        if (lInstance && !lInstance._estDetruite && lInstance.free) {
          lInstance.free();
        }
        this._instances[aIndice] = null;
        return lNomInstance;
      }
      setDataInstance(aIndice, aDataBloc) {
        const lInstance = this._instances[aIndice];
        if (lInstance !== null && lInstance !== undefined) {
          lInstance.setParametres(aDataBloc, this._options);
          lInstance.initialiser();
        }
      }
      getInstanceObjetMetierDeNumeroDataBloc(aNumeroDataBloc) {
        for (let i = 0, lNbr = this._instances.length; i < lNbr; i++) {
          const lInstance = this._instances[i];
          if (lInstance !== null && lInstance !== undefined) {
            const lDataBloc = lInstance.donnee;
            if (lDataBloc !== null && lDataBloc !== undefined) {
              if (lDataBloc.getNumero() === aNumeroDataBloc) {
                return lInstance;
              }
            }
          }
        }
      }
      rafraichirBloc(aDataBloc) {
        const lEltBloc = this.composeBlocComplet(aDataBloc);
        GHtml.setHtml(aDataBloc.idBloc, lEltBloc.html, {
          controleur: lEltBloc.controleur,
        });
        this.refreshInstance(aDataBloc.indiceInstanceMetier);
      }
    }
    class GestionnaireBloc extends GestionnaireBlocDeBase {
      constructor(...aParams) {
        super(...aParams);
        this._options = { avecZoneAction: true, avecPastille: false };
      }
      setGenreBloc(aGenreBloc) {
        this.GenreBloc = aGenreBloc;
      }
      saisGererBloc(aDataBloc) {
        return aDataBloc.genreBloc === this.GenreBloc;
      }
      getParamsBloc() {
        return {};
      }
      setConstructeurBloc(aConstructeurBloc) {
        this.constructeurBloc = aConstructeurBloc;
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
        return {
          html: TUtilitaireBloc.compose(lParamBloc),
          controleur: lParamBloc.controleur,
        };
      }
      getRessourceDocumentJoint() {
        return this.utilitaires.genreRessource.getRessourceDocumentJoint();
      }
      getRessourceAucune() {
        return this.utilitaires.genreRessource.getRessourceAucune();
      }
      memoriserContexteAvantRedirection() {}
      redirection(aOnglet, aGenreRessource, aNumeroDataBloc, aEvent) {
        this.memoriserContexteAvantRedirection(aNumeroDataBloc);
        const lPage = { Onglet: aOnglet };
        if (aGenreRessource !== this.getRessourceAucune()) {
          $.extend(lPage, { ressource: aGenreRessource });
        }
        GEtatUtilisateur.setPage(lPage);
        if (GEtatUtilisateur.getGenreOnglet()) {
          const lOnglet = new ObjetElement(
            '',
            0,
            GEtatUtilisateur.getGenreOnglet(),
          );
          if (GInterface.getInstance(GInterface.IdentBandeauEntete)) {
            GInterface.getInstance(
              GInterface.IdentBandeauEntete,
            ).evenementSurMenuOnglets(lOnglet);
          }
        }
        aEvent.stopPropagation();
      }
      getInfosPastille() {}
      getAvecPastille() {
        return this._options.avecPastille;
      }
      setDataPastille(aData) {
        this.dataPastille = aData;
      }
      getDataPastille() {
        return this.dataPastille;
      }
    }
    class ObjetBloc extends ObjetInterface {
      constructor(...aParams) {
        super(...aParams);
        this.donneesRecues = false;
        this._options = {};
      }
      setUtilitaires(aUtilitaires) {
        this.utilitaires = aUtilitaires;
      }
      setParametres(aElement, aOptions) {
        this.donneesRecues = true;
        this._options = $.extend(this._options, aOptions);
        this.donnee = aElement;
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          eventPropagationTitre() {
            $(this.node).eventValidation((aEvent) => {
              aInstance.eventPropagationTitre(aEvent);
            });
          },
        });
      }
      memoriserContexteAvantRedirection() {}
      getParamsBloc() {
        return {
          estListe: this.getAvecDateAffichee(),
          controleur: this.controleur,
          titre: this.getTitre(),
          estTitreAvecEspace: this.estTitreAvecEspace(),
          estTitreMaigre: this.avecTitreMaigre(),
          infoSousTitre: this.getInfoSsTitre(),
          infoTitre: this.getInfoTitre(),
          widthColDroite: this.getWidthColDroite(),
          widthBtnAction: this.getWidthBtnAction(),
          eventParDefaut: this.getEventParDefaut(),
          marqueurV: {
            couleur: this.getCouleurMarqueur(),
            avecMarqueur: this.getAvecMarqueurV(),
            epaisseur: this.getEpaisseurMarqueur(),
          },
          avecArrondis: this.getAvecArrondis(),
          avecDateAffichee: this.getAvecDateAffichee(),
          avecMargeGauche: this.getAvecMargeGauche(),
          avecNoWrap: this.getAvecNoWrap(),
          couleursBloc: {
            fondBloc: this.getCouleurFondBloc(),
            texteBloc: this.getCouleurTexteBloc(),
            fondTitre: this.getCouleurFondTitre(),
            fondContenu: this.getCouleurFondContenu(),
            texteTitre: this.getCouleurTexteTitre(),
            texteContenu: this.getCouleurTexteContenu(),
          },
          ombre: {
            avecOmbre: this.avecOmbre(),
            profondeur: this.getProfondeurOmbre(),
          },
          bordure: {
            avecBordure: this.avecBordure(),
            couleur: this.couleurBordure(),
          },
          menuContextuel: {
            actif: this.avecMenuContextuel(),
            libelle: this.libelleMenuContextuel(),
            avecBtn3Pts: this.avecMenuContextuelBtn3Pts(),
            estMasque: this.estMenuContextuelMasque(),
            param: { pere: this },
          },
          documents: {
            genreRessource: this.getGenreRessourceDocuments(),
            avecDocuments: this.getAvecDocuments(),
            listeDocuments: this.getListeDocuments(),
          },
          boutonsActions: this.getTabBtnActions(),
          avecVoile: this.avecVoile(),
          estPlie: this.estBlocFerme(),
          eventPropagationTitre: this.eventPropagationTitre
            ? this.Nom + '.eventPropagationTitre'
            : null,
          eventPropagationSurBlocEntier:
            this.getEventPropagationSurBlocEntier(),
          modeAffichage: this._options.modeAffichage,
        };
      }
      getCouleurMarqueur() {
        return GCouleur.themeNeutre.sombre;
      }
      getAvecMarqueurV() {
        return this._options.modeAffichage !== EModeAffichageTimeline.compact;
      }
      getAvecArrondis() {
        return this._options.modeAffichage !== EModeAffichageTimeline.compact;
      }
      getAvecDateAffichee() {
        return this._options.modeAffichage === EModeAffichageTimeline.liste;
      }
      getAvecMargeGauche() {
        return !IE.estMobile;
      }
      getAvecNoWrap() {
        return false;
      }
      getEpaisseurMarqueur() {
        return 3;
      }
      getCouleurFondBloc() {
        return GCouleur.blanc;
      }
      getCouleurTexteBloc() {
        return GCouleur.themeCouleur.foncee;
      }
      getCouleurFondTitre() {
        return '#ffffff';
      }
      getCouleurFondContenu() {
        return '#ffffff';
      }
      getCouleurTexteTitre() {
        return 'black';
      }
      getCouleurTexteContenu() {
        return 'black';
      }
      avecVoile() {
        return false;
      }
      avecOmbre() {
        return true;
      }
      avecBordure() {
        return false;
      }
      couleurBordure() {
        return GCouleur.themeNeutre.claire;
      }
      estBlocFerme() {
        return false;
      }
      getEventPropagationSurBlocEntier() {
        return false;
      }
      getProfondeurOmbre() {
        return EGenreProfondeurBloc.petite;
      }
      getGenreTitre() {
        return EGenreTitreBloc.texte;
      }
      getTitre(aTitre) {
        if (this.getGenreTitre() === EGenreTitreBloc.texte) {
          let lResult = aTitre !== null && aTitre !== undefined ? aTitre : '';
          if (lResult === '') {
            lResult = GTraductions.getValeur('SansTitre');
          }
          return lResult;
        }
        return new ObjetElement();
      }
      avecTitreMaigre() {
        return false;
      }
      estTitreAvecEspace() {
        return true;
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
        return new ObjetListeElements();
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
        return aValeur;
      }
      getEventParDefaut() {
        return 'toggleElement';
      }
      getWidthBtnAction(aValeur) {
        if (
          this._options !== null &&
          this._options !== undefined &&
          this._options.avecZoneAction === false
        ) {
          return 0;
        }
        return aValeur;
      }
      avecMenuContextuel(aValeur) {
        if (
          this._options !== null &&
          this._options !== undefined &&
          this._options.avecZoneAction === false
        ) {
          return false;
        }
        return aValeur !== null && aValeur !== undefined ? aValeur : false;
      }
      libelleMenuContextuel() {
        return GTraductions.getValeur('Editer');
      }
      avecMenuContextuelBtn3Pts() {
        return false;
      }
      estMenuContextuelMasque() {
        return false;
      }
      getTabBtnActions() {
        const lResult = [];
        return lResult;
      }
      estEspaceParent(aGenreEspace) {
        return this.utilitaires.genreEspace.estEspaceParent(aGenreEspace);
      }
    }
    module.exports = { GestionnaireBlocDeBase, GestionnaireBloc, ObjetBloc };
  },
  fn: 'gestionnairebloc.js',
});