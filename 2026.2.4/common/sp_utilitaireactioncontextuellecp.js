IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireActionContextuelleCP = void 0;
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const ObjetFenetre_EditionUrl_1 = require('@cp/Espace/Script/Fenetres/ObjetFenetre_EditionUrl');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetFenetre_ActionContextuelle_1 = require('@cp/Produit/Script/ObjetFenetre_ActionContextuelle');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const UtilitaireTraitementImage_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireTraitementImage');
    const ObjetFenetre_PieceJointeCP_1 = require('@cp/Produit/Script/ObjetFenetre_PieceJointeCP');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const UtilitaireQCM_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireQCM');
    const ObjetFenetre_SelectionQCM_1 = require('@cp/Espace/Script/Fenetres/ObjetFenetre_SelectionQCM');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const MethodesTableau_1 = require('@librairies/script/Outils/MethodesTableau');
    const IconeSvgCloud_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCloud');
    const IconeSvgFile_alt_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFile_alt');
    const IconeSvgFolder_open_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFolder_open');
    const IconeSvgGlobe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgGlobe');
    const IconeSvgQcm_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgQcm');
    const IconeSvgExercice_numerique_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgExercice_numerique');
    const IconeSvgCamera_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCamera');
    const IconeSvgPicture_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPicture');
    const IconeSvgFile_pleine_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFile_pleine');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const IconeSvgPlus_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPlus');
    class UtilitaireActionContextuelleCP extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
        this.init();
      }
      ouvrir(aParams = {}) {
        if (this.actions.length === 0) {
        }
        this.verificationActions();
        const lParams = { pere: this };
        if (aParams.optionsFenetre) {
          lParams.optionsFenetre = aParams.optionsFenetre;
        }
        ObjetFenetre_ActionContextuelle_1.ObjetFenetre_ActionContextuelle.ouvrir(
          this.actions,
          lParams,
        );
      }
      addBouton(aParams) {
        this.ajouterAction(aParams);
        return this;
      }
      addBtn(aGenre, aParams) {
        this.ajouterAction({ params: aParams, genre: aGenre });
        return this;
      }
      reset() {
        this.init();
      }
      init() {
        this.actions = [];
        this.infosActions = [];
      }
      verificationActions() {}
      eventAjouterLienKiosque(aInfos) {}
      async eventAjouterDepuisCloud(aInfos) {}
      async eventAjouterDepuisCloudENEJ(aInfos) {}
      eventAjouterImagesMultiples(aParamsInput, aInfos) {}
      avecRessourceGranulaire() {
        return false;
      }
      getAction(aGenre) {
        return this.infosActions.find(({ genre }) => genre === aGenre);
      }
      ajouterAction(aInfos, aIndice) {
        if (!this.avecActionDisponible(aInfos.genre)) {
          return;
        }
        const lAvecDoublon =
          aInfos.genre !==
            UtilitaireActionContextuelleCP.EGenreAction.Personnalise &&
          this.getAction(aInfos.genre);
        if (lAvecDoublon) {
          return;
        }
        const lPush = (aAction, aInfosAction) => {
          const lAvecIndice = MethodesObjet_1.MethodesObjet.isNumber(aIndice);
          lAvecIndice
            ? MethodesTableau_1.MethodesTableau.insererElement(
                aAction,
                this.actions,
                aIndice,
              )
            : this.actions.push(aAction);
          lAvecIndice
            ? MethodesTableau_1.MethodesTableau.insererElement(
                aInfosAction,
                this.infosActions,
                aIndice,
              )
            : this.infosActions.push(aInfosAction);
        };
        switch (aInfos.genre) {
          case UtilitaireActionContextuelleCP.EGenreAction.Personnalise:
            lPush(aInfos.params, aInfos);
            break;
          default:
            lPush(this.getParamsActionContextuelle(aInfos), aInfos);
            break;
        }
      }
      getEventAction(aInfos) {
        switch (aInfos.genre) {
          case UtilitaireActionContextuelleCP.EGenreAction.PrendrePhoto:
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisMaGalerie:
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisStockageLocal:
            return (aParamsInput) =>
              aInfos.params.callback(
                Object.assign(Object.assign({}, aParamsInput), {
                  genre: aInfos.genre,
                }),
              );
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterImagesMultiples:
            return (aParamsInput) =>
              this.eventAjouterImagesMultiples(aParamsInput, aInfos);
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterLien:
            return () => this.eventAjouterLien(aInfos);
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterQCM:
            return () => {
              this.eventAjouterQCM(aInfos);
            };
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterDepuisCloud:
            return () => {
              this.eventAjouterDepuisCloud(aInfos);
            };
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisCloudENEJ:
            return () => {
              this.eventAjouterDepuisCloudENEJ(aInfos);
            };
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterLienKiosque:
            return () => this.eventAjouterLienKiosque(aInfos);
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterParmiDocumentsExistants:
            return () => this.eventAjouterParmiDocumentsExistants(aInfos);
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterParmiLiensExistants:
            return () => this.eventAjouterParmiLiensExistants(aInfos);
          default:
        }
      }
      eventAjouterParmiLiensExistants(aInfos) {
        var _a;
        const lParamsFenetrePJ = Object.assign(
          {
            genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Url,
            avecFiltre: { date: true },
            avecEtatSaisie: true,
            optionsSelecFile: this.getOptionsSelecFile(aInfos.genre),
            avecInActifVisible: false,
          },
          aInfos.params.paramFenetrePJ,
        );
        (_a = lParamsFenetrePJ.genreRessourcePJ) !== null && _a !== void 0
          ? _a
          : (lParamsFenetrePJ.genreRessourcePJ = -1);
        const lCallback = (aParams) => {
          aInfos.params.callback(
            Object.assign({ genre: aInfos.genre }, aParams),
          );
        };
        this.ouvrirFenetrePJ({
          parametresFenetrePJ: lParamsFenetrePJ,
          optionsFenetre: aInfos.params.optionsFenetre,
          callback: lCallback,
          avecDupliquerListe: aInfos.params.avecDupliquerListe,
        });
      }
      eventAjouterParmiDocumentsExistants(aInfos) {
        var _a;
        const lParamsFenetrePJ = Object.assign(
          {
            genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
            avecFiltre: { date: true },
            avecEtatSaisie: true,
            optionsSelecFile: this.getOptionsSelecFile(aInfos.genre),
            avecInActifVisible: false,
          },
          aInfos.params.paramFenetrePJ,
        );
        (_a = lParamsFenetrePJ.genreRessourcePJ) !== null && _a !== void 0
          ? _a
          : (lParamsFenetrePJ.genreRessourcePJ = -1);
        const lCallback = (aParams) => {
          aInfos.params.callback(
            Object.assign({ genre: aInfos.genre }, aParams),
          );
        };
        this.ouvrirFenetrePJ({
          parametresFenetrePJ: lParamsFenetrePJ,
          optionsFenetre: aInfos.params.optionsFenetre,
          callback: lCallback,
          avecDupliquerListe: aInfos.params.avecDupliquerListe,
        });
      }
      eventAjouterLien(aInfos) {
        var _a;
        const lFenetreEditionSiteWeb =
          ObjetFenetre_EditionUrl_1.ObjetFenetre_EditionUrl.creerInstanceFenetreEditionUrl(
            {
              pere: this,
              evenement(aGenreBouton, aDonnees) {
                if (aGenreBouton === 1) {
                  aInfos.params.callback(
                    Object.assign(Object.assign({}, aDonnees.donnee), {
                      genre: aInfos.genre,
                    }),
                  );
                }
              },
            },
          );
        lFenetreEditionSiteWeb.setOptionsFenetreEditionUrl(
          (_a = aInfos.params.optionsFenetre) !== null && _a !== void 0
            ? _a
            : { avecCommentaire: false },
        );
        lFenetreEditionSiteWeb.setDonnees({ libelle: '', url: 'https://' });
      }
      async eventAjouterQCM(aInfos) {
        var _a, _b, _c, _d;
        var _e, _f, _g, _h;
        const lGenreRessourcesDefault = this.getGenreRessourcesQCM();
        const lGenreRessources = {
          genreQCM:
            (_e =
              (_a = aInfos.params.genreRessources) === null || _a === void 0
                ? void 0
                : _a.genreQCM) !== null && _e !== void 0
              ? _e
              : lGenreRessourcesDefault.genreQCM,
          genreNiveau:
            (_f =
              (_b = aInfos.params.genreRessources) === null || _b === void 0
                ? void 0
                : _b.genreNiveau) !== null && _f !== void 0
              ? _f
              : lGenreRessourcesDefault.genreNiveau,
          genreMatiere:
            (_g =
              (_c = aInfos.params.genreRessources) === null || _c === void 0
                ? void 0
                : _c.genreMatiere) !== null && _g !== void 0
              ? _g
              : lGenreRessourcesDefault.genreMatiere,
          genreAucun:
            (_h =
              (_d = aInfos.params.genreRessources) === null || _d === void 0
                ? void 0
                : _d.genreAucun) !== null && _h !== void 0
              ? _h
              : lGenreRessourcesDefault.genreAucun,
        };
        const lCallback = (aParams) => {
          aInfos.params.callback(
            Object.assign({ genre: aInfos.genre }, aParams),
          );
        };
        this.ouvrirFenetreSelectionQCM({
          optionsFenetre: aInfos.params.optionsFenetre,
          genreRessources: lGenreRessources,
          callback: lCallback,
        });
      }
      getClassFenetrePJ() {
        return ObjetFenetre_PieceJointeCP_1.ObjetFenetre_PieceJointeCP;
      }
      ouvrirFenetrePJ(aParams) {
        var _a;
        (_a = aParams.avecDupliquerListe) !== null && _a !== void 0
          ? _a
          : (aParams.avecDupliquerListe = true);
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          this.getClassFenetrePJ(),
          {
            pere: this,
            evenement: (aNumeroBtn) =>
              this.evenementFenetrePJ(
                aNumeroBtn,
                aParams.parametresFenetrePJ,
                aParams.callback,
              ),
          },
        );
        if (aParams.optionsFenetre) {
          lFenetre.setOptionsFenetre(aParams.optionsFenetre);
        }
        if (aParams.avecDupliquerListe) {
          const lProps = ['listePJTot', 'listePJContexte', 'listePJ'];
          lProps.forEach((aProps) => {
            if (aParams.parametresFenetrePJ[aProps]) {
              aParams.parametresFenetrePJ[aProps] =
                MethodesObjet_1.MethodesObjet.dupliquer(
                  aParams.parametresFenetrePJ[aProps],
                );
            }
          });
        }
        lFenetre.afficherFenetrePJ(aParams.parametresFenetrePJ);
      }
      evenementFenetrePJ(aBumeroBtn, aParams, aCallback) {
        const lListeTotale = aParams.listePJTot;
        const lListeCtx = aParams.listePJ;
        lListeTotale.parcourir((aDocument) => {
          let lDocumentJoint = lListeCtx.getElementParNumero(
            aDocument.getNumero(),
          );
          const lActif = aDocument.Actif && aDocument.existe();
          if (lDocumentJoint) {
            if (lActif) {
              if (
                aDocument.getEtat() === Enumere_Etat_1.EGenreEtat.Modification
              ) {
                lDocumentJoint.Libelle = aDocument.Libelle;
              }
            } else {
              lDocumentJoint.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
            }
          } else {
            if (lActif) {
              if (aDocument.Fichier) {
                aDocument.idFichier = aDocument.Fichier.idFichier;
                aDocument.Libelle = aDocument.Fichier.Libelle;
                aDocument.nomOriginal = aDocument.Fichier.nomOriginal;
                aDocument.file = aDocument.Fichier.file;
              }
              lDocumentJoint =
                MethodesObjet_1.MethodesObjet.dupliquer(aDocument);
              if (aDocument.url) {
                lDocumentJoint.url = aDocument.url;
              }
              lDocumentJoint.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
              lListeCtx.addElement(lDocumentJoint);
            }
          }
        });
        lListeTotale.trier();
        aCallback({
          numeroBouton: aBumeroBtn,
          listePJ: lListeCtx,
          listePJTot: lListeTotale,
        });
      }
      async ouvrirFenetreSelectionQCM(aParams) {
        const [lListeQCM, lMessage, lDonnees] = await this.getDonneesQCM();
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_SelectionQCM_1.ObjetFenetre_SelectionQCM,
          {
            pere: this,
            evenement: (aNumeroBouton, aEltQCM) => {
              if (aNumeroBouton === 1) {
                aParams.callback({ qcm: aEltQCM });
              }
            },
            initialiser: (aInstance) => {
              UtilitaireQCM_1.UtilitaireQCM.initFenetreSelectionQCM(aInstance);
              aInstance.setGenreRessources(aParams.genreRessources);
            },
          },
        );
        if (aParams.optionsFenetre) {
          lFenetre.setOptionsFenetre(aParams.optionsFenetre);
        }
        lFenetre.setDonnees(lListeQCM, lMessage, lDonnees);
      }
      estActionAvecSelecFile(aGenre) {
        return [
          UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisStockageLocal,
          UtilitaireActionContextuelleCP.EGenreAction.PrendrePhoto,
          UtilitaireActionContextuelleCP.EGenreAction.AjouterDepuisMaGalerie,
          UtilitaireActionContextuelleCP.EGenreAction.AjouterImagesMultiples,
        ].includes(aGenre);
      }
      getOptionsSelecFile(aGenre) {
        switch (aGenre) {
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterParmiDocumentsExistants:
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterParmiLiensExistants:
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisStockageLocal:
            return {
              maxSize: this.getTailleMaxDocJointEtablissement(),
              multiple: false,
              avecTransformationFlux_versCloud:
                this.etatUtilisateur.avecCloudDisponibles(),
            };
          case UtilitaireActionContextuelleCP.EGenreAction.PrendrePhoto:
            return {
              title: '',
              maxFiles: 0,
              genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
              maxSize: this.getTailleMaxDocJointEtablissement(),
              acceptDragDrop: false,
              capture: 'environment',
              accept: 'image/*',
            };
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterImagesMultiples:
            return {
              avecResizeImage: true,
              multiple: false,
              avecTransformationFlux: false,
              accept:
                UtilitaireTraitementImage_1.UtilitaireTraitementImage.getTabMimePDFImage().join(
                  ', ',
                ),
              maxSize: this.getTailleMaxDocJointEtablissement(),
            };
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisMaGalerie:
            return {
              title: '',
              maxFiles: 0,
              maxSize: this.getTailleMaxDocJointEtablissement(),
              genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
              multiple: false,
              acceptDragDrop: false,
              accept: 'image/*',
            };
        }
      }
      getStyleAction(aGenre) {
        switch (aGenre) {
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisStockageLocal:
            return {
              libelle: IE.estMobile
                ? 'Depuis mes documents'
                : 'Depuis mon poste',
              iconSvg: IE.jsx.str(
                IconeSvgFolder_open_1.IconeSvgFolder_open,
                null,
              ),
              class: 'bg-orange-claire',
            };
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterParmiDocumentsExistants:
            return {
              libelle: 'Parmi les documents déjà utilisés',
              iconSvg: IE.jsx.str(IconeSvgFile_alt_1.IconeSvgFile_alt, null),
              class: 'bg-green-claire',
            };
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterLien:
            return {
              libelle: 'Nouveau lien',
              iconSvg: UtilitaireActionContextuelleCP.IconeSvgGlobePlus(),
              class: 'bg-blue-claire',
            };
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterParmiLiensExistants:
            return {
              libelle: 'Parmi les liens déjà utilisés',
              iconSvg: IE.jsx.str(IconeSvgGlobe_1.IconeSvgGlobe, null),
              class: 'bg-green-claire',
            };
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterQCM:
            return {
              libelle: 'Parmi les QCM de révision',
              iconSvg: IE.jsx.str(IconeSvgQcm_1.IconeSvgQcm, null),
              class: 'bg-green-claire',
            };
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterDepuisCloud:
            return {
              libelle: 'Depuis mon cloud',
              iconSvg: IE.jsx.str(IconeSvgCloud_1.IconeSvgCloud, null),
              class: 'bg-orange-claire',
            };
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisCloudENEJ:
            return UtilitaireActionContextuelleCP.getStyleActionENEJ();
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterImagesMultiples:
            return {
              libelle: 'prendre plusieurs images',
              iconSvg: IE.jsx.str(IconeSvgCamera_1.IconeSvgCamera, null),
              class: 'bg-orange-claire',
            };
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterLienKiosque:
            return {
              libelle: 'Depuis un manuel numérique',
              iconSvg: IE.jsx.str(
                IconeSvgExercice_numerique_1.IconeSvgExercice_numerique,
                null,
              ),
              class: 'bg-orange-claire',
            };
          case UtilitaireActionContextuelleCP.EGenreAction.PrendrePhoto:
            return {
              libelle: 'Prendre une photo',
              iconSvg: IE.jsx.str(IconeSvgCamera_1.IconeSvgCamera, null),
              class: 'bg-orange-claire',
            };
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisMaGalerie:
            return {
              libelle: 'Depuis ma galerie',
              iconSvg: IE.jsx.str(IconeSvgPicture_1.IconeSvgPicture, null),
              class: 'bg-orange-claire',
            };
          default:
            return null;
        }
      }
      getParamsActionContextuelle(aInfos) {
        const lOptionsSelecFile =
          'optionsSelecFile' in aInfos.params
            ? aInfos.params.optionsSelecFile
            : this.estActionAvecSelecFile(aInfos.genre)
              ? this.getOptionsSelecFile(aInfos.genre)
              : undefined;
        return Object.assign(
          {
            event: this.getEventAction(aInfos),
            selecFile: this.estActionAvecSelecFile(aInfos.genre),
            optionsSelecFile: lOptionsSelecFile,
          },
          this.getStyleAction(aInfos.genre),
        );
      }
      avecActionDisponible(aGenre) {
        switch (aGenre) {
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisStockageLocal:
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterParmiDocumentsExistants:
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterLien:
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterParmiLiensExistants:
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterQCM:
            return true;
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterDepuisCloud:
            return this.etatUtilisateur.avecCloudDisponibles();
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisCloudENEJ:
            return this.etatUtilisateur.avecCloudENEJDisponible();
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterImagesMultiples:
            return this.etatUtilisateur.avecGestionAppareilPhoto();
          case UtilitaireActionContextuelleCP.EGenreAction.AjouterLienKiosque:
            return this.avecRessourceGranulaire();
          case UtilitaireActionContextuelleCP.EGenreAction.PrendrePhoto:
          case UtilitaireActionContextuelleCP.EGenreAction
            .AjouterDepuisMaGalerie:
            return this.etatUtilisateur.avecGestionAppareilPhoto();
          case UtilitaireActionContextuelleCP.EGenreAction.Personnalise:
            return true;
          default:
            return false;
        }
      }
      static getActionENEJ(aCallback) {
        if (
          (0, AccessApp_1.getApp)()
            .getEtatUtilisateur()
            .avecCloudENEJDisponible()
        ) {
          return Object.assign(
            Object.assign(
              {},
              UtilitaireActionContextuelleCP.getStyleActionENEJ(),
            ),
            {
              event() {
                aCallback();
              },
            },
          );
        }
      }
      static getStyleActionENEJ() {
        var _a;
        const lEtatUtil = (0, AccessApp_1.getApp)().getEtatUtilisateur();
        if (lEtatUtil.avecCloudENEJDisponible()) {
          return {
            libelle: 'Parmi les documents de "%s"') === null || _a === void 0
                  ? void 0
                  : _a.getLibelle()) || '',
              ],
            ),
            iconSvg: IE.jsx.str(
              IconeSvgFile_pleine_1.IconeSvgFile_pleine,
              null,
            ),
            class: 'bg-enej',
          };
        }
      }
    }
    exports.UtilitaireActionContextuelleCP = UtilitaireActionContextuelleCP;
    (function (UtilitaireActionContextuelleCP) {
      let EGenreAction;
      (function (EGenreAction) {
        EGenreAction['AjouterDepuisStockageLocal'] =
          'AjouterDepuisStockageLocal';
        EGenreAction['AjouterParmiDocumentsExistants'] =
          'AjouterParmiDocumentsExistants';
        EGenreAction['AjouterLien'] = 'AjouterLien';
        EGenreAction['AjouterParmiLiensExistants'] =
          'AjouterParmiLiensExistants';
        EGenreAction['AjouterQCM'] = 'AjouterQCM';
        EGenreAction['PrendrePhoto'] = 'PrendrePhoto';
        EGenreAction['AjouterDepuisMaGalerie'] = 'AjouterDepuisMaGalerie';
        EGenreAction['Personnalise'] = 'Personnalise';
        EGenreAction['AjouterImagesMultiples'] = 'AjouterImagesMultiples';
        EGenreAction['AjouterLienKiosque'] = 'AjouterLienKiosque';
        EGenreAction['AjouterDepuisCloud'] = 'AjouterDepuisCloud';
        EGenreAction['AjouterDepuisCloudENEJ'] = 'AjouterDepuisCloudENEJ';
      })(
        (EGenreAction =
          UtilitaireActionContextuelleCP.EGenreAction ||
          (UtilitaireActionContextuelleCP.EGenreAction = {})),
      );
    })(
      UtilitaireActionContextuelleCP ||
        (exports.UtilitaireActionContextuelleCP =
          UtilitaireActionContextuelleCP =
            {}),
    );
    (function (UtilitaireActionContextuelleCP) {
      UtilitaireActionContextuelleCP.IconeSvgGlobePlus = () => {
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(IconeSvgGlobe_1.IconeSvgGlobe, null),
          IE.jsx.str(IconeSvgPlus_1.IconeSvgPlus, {
            class: [Divers_css_1.SD.iconeBadge, Divers_css_1.SD.badgeBr],
          }),
        );
      };
    })(
      UtilitaireActionContextuelleCP ||
        (exports.UtilitaireActionContextuelleCP =
          UtilitaireActionContextuelleCP =
            {}),
    );
  },
  fn: 'utilitaireactioncontextuellecp.js',
});