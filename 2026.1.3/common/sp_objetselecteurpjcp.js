IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetSelecteurPJCP = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetInterface_1 = require('@cp/script/ObjetInterface');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetMenuContextuel_1 = require('@cp/Produit/Script/ObjetMenuContextuel');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetModulePJ_1 = require('@cp/Espace/Script/ObjetsGraphiques/ObjetModulePJ');
    const UtilitaireSelecFile_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireSelecFile');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const UtilitaireActionContextuelleCP_1 = require('@cp/Produit/Script/UtilitaireActionContextuelleCP');
    const GlossaireSelecFile_1 = require('@cp/script/Communication/GlossaireSelecFile');
    class ObjetSelecteurPJCP extends ObjetInterface_1.ObjetInterface {
      constructor(aParams) {
        super(aParams);
        this.AvecCadre = false;
        this._initialiserOptions();
      }
      creerFenetrePieceJointe() {
        return null;
      }
      _initialiserOptions() {
        this._options = {
          genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
          genreRessourcePJ: -1,
          title: 'Ajouter une nouvelle pièce jointe',
          maxFiles: 0,
          maxSize: 1048576,
          avecAjoutExistante: false,
          interdireDoublonsLibelle: true,
          avecCmdAjoutNouvelle: true,
          idLibellePJ: '',
          avecEtatSaisie: true,
          avecBoutonSupp: false,
          avecMenuSuppressionPJ: !IE.estMobile,
          maxWidthLibelle: 0,
          libelleSelecteur: '',
          avecInActifVisible: false,
          ouvrirFenetreChoixTypesAjout: false,
          ouvrirFenetreGestionnaireSurClick: false,
          avecMenuContextuel: true,
          masquerListeChips: false,
          fenetrePieceJointe: {
            avecBoutonActualiser: true,
            avecFiltreExtensionSurRemplacer: false,
          },
          avecCallbackAjouterPJs: false,
          multiple: false,
          acceptDragDrop: true,
          avecTransformationFlux: true,
          optionsCloud: {
            avecCloud: false,
            callbackChoixFichierParFichier: null,
            callbackChoixFichierFinal: null,
          },
        };
      }
      estUtilisateurConnecteEnModeConsultation() {
        return false;
      }
      setOptions(aOptions) {
        $.extend(this._options, aOptions);
        if (this._options.maxFiles === 1) {
          this._options.avecCmdAjoutNouvelle = false;
        }
        return this;
      }
      supprimerPJ(aElementPJ) {
        this._supprimerPJ(aElementPJ);
        return this;
      }
      construireInstances() {
        this.identPJ = this.add(
          ObjetModulePJ_1.ObjetModulePJ,
          this.evntModulePJ,
          this.initModulePJ,
        );
      }
      jsxModelChipsPieceJointe(aIndice) {
        return () => {
          return {
            eventBtn: () => {
              const lElement = this.listePJ ? this.listePJ.get(aIndice) : null;
              if (lElement) {
                this._supprimerPJ(lElement);
              }
            },
            getOptions: () => {
              return {
                avecBtn:
                  this._options.avecBoutonSupp &&
                  !this.estUtilisateurConnecteEnModeConsultation(),
              };
            },
            getDisabled: () => {
              const lElement = this.listePJ ? this.listePJ.get(aIndice) : null;
              return !lElement;
            },
          };
        };
      }
      setActif(AActif) {
        this.Actif = AActif;
        if (this.getInstance(this.identPJ)) {
          this.getInstance(this.identPJ).setActif(AActif);
          this.getInstance(this.identPJ).setLibellesPJ(this.listePJ);
        }
      }
      setDonnees(aParam) {
        this.avecInputFile =
          this._options.genrePJ !==
          Enumere_DocumentJoint_1.EGenreDocumentJoint.Url;
        this.listePJTotale = aParam.listeTotale;
        this.listePJ = aParam.listePJ;
        const lParam = {
          listePJ: this.listePJ,
          genreRessourcePJ: this._options.genreRessourcePJ,
          idListePJ: '',
        };
        if (aParam.idListePJ) {
          lParam.idListePJ = aParam.idListePJ;
        }
        this.getInstance(this.identPJ)
          .setOptions({
            genrePJ: this._options.genrePJ,
            addFiles: this._addFiles.bind(this),
            getDisabledFiles: this._getDisabledFiles.bind(this),
            getOptionsSelecFile: this._getOptionsSelecFile.bind(this),
          })
          .setDonnees(lParam);
      }
      setTailleMaxPJ(aTailleMax) {
        this._options.maxSize = aTailleMax;
      }
      controlerFichierSelectionne(aParam) {
        if (
          !UtilitaireSelecFile_1.UtilitaireSelecFile.estFichierCloudPartage(
            aParam,
          ) &&
          this._isLibelleFichierExiste(aParam.getLibelle())
        ) {
          return {
            succes: false,
            msg: GlossaireSelecFile_1.TradGlossaireSelecFile
              .msgEchecLibelleFichierAvecInfo,
          };
        }
        return { succes: true, msg: '' };
      }
      _isLibelleFichierExiste(aNomFichier) {
        var _a;
        if (!this._options.interdireDoublonsLibelle) {
          return false;
        }
        const lNbrElts =
          ((_a = this.listePJTotale) === null || _a === void 0
            ? void 0
            : _a.count()) || 0;
        for (let I = 0; I < lNbrElts; I++) {
          let lElt = this.listePJTotale.get(I);
          const lLibelle = lElt.getLibelle();
          if (
            lElt.existe() &&
            lLibelle &&
            aNomFichier &&
            lLibelle.toLowerCase &&
            aNomFichier.toLowerCase &&
            lLibelle.trim().toLowerCase() === aNomFichier.trim().toLowerCase()
          ) {
            return true;
          }
        }
        return false;
      }
      initModulePJ(aInstance) {
        if (this._options.idLibellePJ) {
          aInstance.setIdPourLibellesPJ(this._options.idLibellePJ);
        }
        aInstance.setOptions({
          genrePJ: this._options.genrePJ,
          forcerEvenementSurClickIcon:
            this._options.ouvrirFenetreGestionnaireSurClick ||
            !!this._options.ouvrirFenetreChoixTypesAjout,
          jsxModelChipsPJ: this.jsxModelChipsPieceJointe.bind(this),
          title: this._options.title,
          maxWidthLibelle: this._options.maxWidthLibelle,
          libelleSelecteur: this._options.libelleSelecteur,
          masquerListeChips: this._options.masquerListeChips,
        });
      }
      initEditionPJ(aInstance) {
        if (aInstance.setOptionsFenetre) {
          aInstance.setOptionsFenetre(this._options.fenetrePieceJointe);
        }
      }
      addFilesDeSelecFile(aParams) {
        return this._addFiles(aParams);
      }
      evntModulePJ(aParam) {
        if (!this.Actif) {
          return;
        }
        switch (aParam.action) {
          case this.getInstance(this.identPJ).genreCommande.menuContext:
            if (this._options.avecMenuContextuel) {
              this._afficherMenuContextuel();
            }
            break;
          case this.getInstance(this.identPJ).genreCommande.click:
            if (
              this._options.avecAjoutExistante &&
              this._options.ouvrirFenetreChoixTypesAjout
            ) {
              this._ouvrirFenetreChoixTypesAjout(
                this._options.optionsCloud,
                aParam.id,
              );
            } else if (
              this._options.avecAjoutExistante &&
              (this._options.genrePJ ===
                Enumere_DocumentJoint_1.EGenreDocumentJoint.Url ||
                this._options.ouvrirFenetreGestionnaireSurClick)
            ) {
              this._ouvrirFenetrePJ();
            }
            break;
          default:
            break;
        }
      }
      evntEditionPJ() {
        if (!this.Actif) {
          return;
        }
        if (!this.listePJ) {
          return;
        }
        const alisteDocumentsJoints = this.listePJTotale;
        if (!alisteDocumentsJoints) {
          return;
        }
        for (let I = 0; I < alisteDocumentsJoints.count(); I++) {
          const lDocumentJoint = this.listePJ.getElementParNumero(
            alisteDocumentsJoints.getNumero(I),
          );
          const lActif =
            alisteDocumentsJoints.get(I).Actif &&
            alisteDocumentsJoints.existe(I);
          if (lDocumentJoint) {
            if (!lActif) {
              lDocumentJoint.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
            } else {
              const lDoc = alisteDocumentsJoints.get(I);
              if (lDoc.getEtat() === Enumere_Etat_1.EGenreEtat.Modification) {
                lDocumentJoint.Libelle = lDoc.Libelle;
              }
            }
          } else {
            if (lActif) {
              const lDoc = alisteDocumentsJoints.get(I);
              if (lDoc.Fichier) {
                lDoc.idFichier = lDoc.Fichier.idFichier;
                lDoc.Libelle = lDoc.Fichier.Libelle;
                lDoc.nomOriginal = lDoc.Fichier.nomOriginal;
                lDoc.file = lDoc.Fichier.file;
              }
              let lEltFichier = MethodesObjet_1.MethodesObjet.dupliquer(lDoc);
              lEltFichier.file = lDoc.file;
              lEltFichier.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
              this.listePJ.addElement(lEltFichier);
            }
          }
        }
        this.getInstance(this.identPJ).setLibellesPJ(this.listePJ);
        this.callback.appel({ evnt: ObjetSelecteurPJCP.genreEvnt.editionPJ });
      }
      callbackFenetreCloud(aParams, aCallbackParFichier, aCallbackFinal) {}
      _getOptionsSelecFile() {
        return {
          title: this._options.title,
          maxFiles: this._options.maxFiles,
          maxSize: this._options.maxSize,
          genrePJ: this._options.genrePJ,
          multiple: this._options.multiple,
          acceptDragDrop: this._options.acceptDragDrop,
          avecTransformationFlux: this._options.avecTransformationFlux,
        };
      }
      _getDisabledFiles() {
        return (
          !this.Actif ||
          !!(
            this._options.maxFiles !== 0 &&
            this.listePJ &&
            this.listePJ.getNbrElementsExistes() >= this._options.maxFiles
          )
        );
      }
      _addFiles(aParams) {
        const lListeFichiersClouds =
          UtilitaireSelecFile_1.UtilitaireSelecFile.extraireListeFichiersCloudsPartage(
            aParams.listeFichiers,
          );
        let lParam;
        const lFiles = [];
        aParams.listeFichiers.parcourir((aFichier) => {
          var _a, _b;
          const lControle = this.controlerFichierSelectionne(aFichier);
          lParam = null;
          if (lControle.succes) {
            (_a = this.listePJTotale) === null || _a === void 0
              ? void 0
              : _a.addElement(aFichier);
            (_b = this.listePJ) === null || _b === void 0
              ? void 0
              : _b.addElement(aFichier);
            lParam = {
              evnt: ObjetSelecteurPJCP.genreEvnt.selectionPJ,
              fichier: aFichier,
            };
            lFiles.push(aFichier);
            if (this._options.avecEtatSaisie) {
              this.setEtatSaisie(true);
            }
          } else {
            (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
                message: lControle.msg,
              });
          }
          this.getInstance(this.identPJ).setLibellesPJ(this.listePJ);
          if (lParam) {
            this.callback.appel(lParam);
          }
        });
        if (lFiles.length > 0 && this._options.avecCallbackAjouterPJs) {
          this.callback.appel({
            evnt: ObjetSelecteurPJCP.genreEvnt.ajouterPJs,
            tabFichiers: lFiles,
          });
        }
        if (lListeFichiersClouds.count() > 0) {
          if (
            this._options.optionsCloud &&
            this._options.optionsCloud.callbackChoixFichierParFichier &&
            this._options.optionsCloud.callbackChoixFichierFinal
          ) {
            lListeFichiersClouds.parcourir((aFichier) => {
              this._options.optionsCloud.callbackChoixFichierParFichier(
                aFichier,
              );
            });
            this._options.optionsCloud.callbackChoixFichierFinal();
          } else {
          }
        }
      }
      _ouvrirFenetreChoixTypesAjout(aParametresCloud = {}, aId) {
        const lThis = this;
        const lUtilitaireActionContextuelle = (0,
        AccessApp_1.getApp)().getUtilitaireActionContextuelle();
        if (!lUtilitaireActionContextuelle) {
          return;
        }
        const lParametreFenetrePJ = this.getParametreFenetrePJ();
        lUtilitaireActionContextuelle.addBtn(
          UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP
            .EGenreAction.AjouterParmiDocumentsExistants,
          {
            callback: () => this.evntEditionPJ(),
            paramFenetrePJ: Object.assign(
              Object.assign({}, lParametreFenetrePJ),
              { listePJ: lParametreFenetrePJ.listePJContexte },
            ),
            avecDupliquerListe: false,
          },
        );
        lUtilitaireActionContextuelle.addBtn(
          UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP
            .EGenreAction.PrendrePhoto,
          {
            callback: (aParamsInput) => {
              if (aParamsInput) {
                lThis._addFiles(aParamsInput);
              }
            },
            optionsSelecFile: {
              title: '',
              maxFiles: this._options.maxFiles,
              maxSize: this._options.maxSize,
              genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
              acceptDragDrop: false,
              capture: 'environment',
              accept: 'image/*',
            },
          },
        );
        lUtilitaireActionContextuelle.addBtn(
          UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP
            .EGenreAction.AjouterDepuisMaGalerie,
          {
            callback: (aParamsInput) => {
              if (aParamsInput) {
                lThis._addFiles(aParamsInput);
              }
            },
            optionsSelecFile: {
              title: '',
              maxFiles: this._options.maxFiles,
              maxSize: this._options.maxSize,
              genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
              multiple: this._options.maxFiles !== 1,
              acceptDragDrop: false,
              accept: 'image/*',
            },
          },
        );
        lUtilitaireActionContextuelle.addBtn(
          UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP
            .EGenreAction.AjouterDepuisStockageLocal,
          {
            callback: (aParamsInput) => {
              if (aParamsInput) {
                lThis._addFiles(aParamsInput);
              }
            },
            optionsSelecFile: {
              maxSize: this._options.maxSize,
              maxFiles: this._options.maxFiles,
              multiple: this._options.maxFiles !== 1,
              avecTransformationFlux: this._options.avecTransformationFlux,
              avecTransformationFlux_versCloud:
                GEtatUtilisateur.avecCloudDisponibles() &&
                aParametresCloud.avecCloud,
            },
          },
        );
        if (aParametresCloud.avecCloud) {
          lUtilitaireActionContextuelle.addBtn(
            UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP
              .EGenreAction.AjouterDepuisCloud,
            {
              callback: (aParamsCloud) => {
                this.callbackFenetreCloud(
                  aParamsCloud,
                  aParametresCloud.callbackChoixFichierParFichier,
                  aParametresCloud.callbackChoixFichierFinal,
                );
              },
            },
          );
          lUtilitaireActionContextuelle.addBtn(
            UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP
              .EGenreAction.AjouterDepuisCloudENEJ,
            {
              callback: (aParamsCloud) => {
                this.callbackFenetreCloud(
                  aParamsCloud,
                  aParametresCloud.callbackChoixFichierParFichier,
                  aParametresCloud.callbackChoixFichierFinal,
                );
              },
            },
          );
        }
        lUtilitaireActionContextuelle.ouvrir();
      }
      _ouvrirFenetrePJ() {
        const lFenetrePieceJointe = this.creerFenetrePieceJointe();
        if (lFenetrePieceJointe) {
          lFenetrePieceJointe.afficherFenetrePJ(this.getParametreFenetrePJ());
        }
      }
      getParametreFenetrePJ() {
        return {
          listePJTot: this.listePJTotale,
          listePJContexte: this.listePJ,
          genreFenetrePJ: this._options.genrePJ,
          genrePJ: this._options.genrePJ,
          genreRessourcePJ: this._options.genreRessourcePJ,
          avecFiltre: { date: true },
          avecEtatSaisie: this._options.avecEtatSaisie,
          avecInActifVisible: this._options.avecInActifVisible,
          optionsSelecFile: this._getOptionsSelecFile(),
        };
      }
      _afficherMenuContextuel() {
        ObjetMenuContextuel_1.ObjetMenuContextuel.afficher({
          pere: this,
          initCommandes: (aInstance) => {
            if (this._options.avecCmdAjoutNouvelle && this.avecInputFile) {
              aInstance.addSelecFile(
                this._options.genrePJ ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
                  ? 'Ajouter un nouveau lien'
                  : 'Ajouter une nouvelle pièce jointe',
                {
                  getOptionsSelecFile: this._getOptionsSelecFile.bind(this),
                  addFiles: this._addFiles.bind(this),
                },
                !this._getDisabledFiles(),
              );
              aInstance.avecSeparateurSurSuivant();
            }
            if (this._options.avecAjoutExistante) {
              aInstance.add(
                this._options.genrePJ ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
                  ? 'Ouvrir le gestionnaire de liens'
                  : 'Ouvrir le gestionnaire de pièces jointes',
                true,
                () => {
                  this._ouvrirFenetrePJ();
                },
              );
            }
            if (this._options.avecMenuSuppressionPJ) {
              if (
                this._options.avecCmdAjoutNouvelle ||
                this._options.avecAjoutExistante
              ) {
                aInstance.avecSeparateurSurSuivant();
              }
              const lListePJ = new ObjetListeElements_1.ObjetListeElements();
              if (this.listePJ && this.listePJ.getNbrElementsExistes() > 0) {
                this.listePJ.parcourir((aElement) => {
                  if (
                    aElement.existe() &&
                    (aElement.getGenre() === undefined ||
                      aElement.getGenre() === null ||
                      aElement.getGenre() === this._options.genrePJ)
                  ) {
                    lListePJ.addElement(aElement);
                  }
                });
              }
              if (lListePJ.count() > 0) {
                aInstance.addSousMenu(
                  'Supprimer',
                  (aInstanceSousMenu) => {
                    lListePJ.parcourir((aElement) => {
                      aInstanceSousMenu.add(
                        aElement.getLibelle(),
                        aElement.actif,
                        () => {
                          this._supprimerPJ(aElement);
                        },
                        {
                          image: aElement.image,
                          largeurImage: aElement.largeurImage,
                        },
                      );
                    });
                  },
                );
              }
            }
          },
        });
      }
      _supprimerPJ(aElementASupprimer) {
        if (!this.Actif || !aElementASupprimer) {
          return;
        }
        const message =
          '<div style="word-break: break-all;">' +
          (this._options.genrePJ ===
          Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
            ? 'Confirmez-vous la suppression du lien « %s » ?'],
              )
            : 'Confirmez-vous la suppression du document « %s » ?'],
              )) +
          '</div>';
        (0, AccessApp_1.getApp)()
          .getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: message,
          })
          .then((aAccepte) => {
            if (aAccepte !== Enumere_Action_1.EGenreAction.Valider) {
              return;
            }
            aElementASupprimer.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
            if (this._options.avecEtatSaisie) {
              this.setEtatSaisie(true);
            }
            this.getInstance(this.identPJ).setLibellesPJ(this.listePJ);
            this.callback.appel({
              evnt: ObjetSelecteurPJCP.genreEvnt.suppressionPJ,
            });
            this.$refresh();
          });
      }
    }
    exports.ObjetSelecteurPJCP = ObjetSelecteurPJCP;
    ObjetSelecteurPJCP.genreEvnt = {
      selectionPJ: 1,
      suppressionPJ: 2,
      editionPJ: 3,
      ajouterPJs: 4,
    };
  },
  fn: 'objetselecteurpjcp.js',
});