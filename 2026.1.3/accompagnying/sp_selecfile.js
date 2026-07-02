IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SelecFile = void 0;
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const UtilitaireTraitementImage_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireTraitementImage');
    const UtilitaireSelecFile_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireSelecFile');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const GlossaireSelecFile_1 = require('@cp/script/Communication/GlossaireSelecFile');
    const Toast_1 = require('@cp/Produit/Script/Toast');
    class SelecFile {
      static async select(aOptions) {
        return await new ObjetSelecFile(aOptions).select();
      }
      static async addFiles(aOptions, aFiles) {
        return await new ObjetSelecFile(aOptions).addFiles(aFiles);
      }
      static getOptionsDefaut() {
        return {
          accept: '',
          extensions: null,
          maxSize: 0,
          multiple: false,
          maxFiles: 0,
          genrePJ: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
          avecResizeImage: true,
          hauteurMaxImageResize: 1500,
          largeurMaxImageResize: 1500,
          compressionImage: 0.88,
          avecTransformationFlux: true,
          avecTransformationFlux_versCloud: false,
          genererPDFImages: false,
          nomPDFaGenerer: '',
          accept_genererPDFImages:
            UtilitaireTraitementImage_1.UtilitaireTraitementImage.getTabMimePDFImage().join(
              ', ',
            ),
          capture: false,
        };
      }
    }
    exports.SelecFile = SelecFile;
    const uIdConteneurInputFile = GUID_1.GUID.getId();
    class ObjetSelecFile {
      constructor(aOptions) {
        this.options = SelecFile.getOptionsDefaut();
        Object.assign(this.options, aOptions);
      }
      async select() {
        if (
          !MethodesObjet_1.MethodesObjet.isNumber(this.options.maxSize) ||
          this.options.maxSize < 0
        ) {
          this.options.maxSize = 0;
        }
        if (this.options.maxSize <= 0) {
          this.options.maxSize = 50 * 1024 * 1024;
        }
        return new Promise((aResolve) => {
          this.createInput(aResolve);
          if (!this.jInput) {
            return false;
          }
          if (this.options.surOuvertureSelecteur) {
            this.options.surOuvertureSelecteur();
          }
          this.jInput.trigger('click');
        });
      }
      async addFiles(aFiles) {
        const lParams = {
          files: aFiles,
          listeFichiers: new ObjetListeElements_1.ObjetListeElements(),
        };
        const lMessagesErreur = [];
        this.construireListeFichiers(lParams, lMessagesErreur);
        let lAvecBlocageInterface = false;
        try {
          if (lParams.listeFichiers.count() > 0) {
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.patience,
              true,
              { delai: 500 },
            );
            lAvecBlocageInterface = true;
          }
          try {
            let lNbImages = 0;
            for (const lFichier of lParams.listeFichiers) {
              if (
                this.options.avecResizeImage &&
                UtilitaireTraitementImage_1.UtilitaireTraitementImage.avecResizePossible(
                  lFichier.file,
                )
              ) {
                if (await this.scaleImage(lParams, lFichier)) {
                  lNbImages += 1;
                }
              }
            }
            if (lNbImages > 0) {
              Toast_1.Toast.afficher({
                type: Toast_1.ETypeToast.info,
                msg: GlossaireSelecFile_1.TradGlossaireSelecFile.XImageReduite_S.format(
                  lNbImages,
                ),
              });
            }
            if (!this.avecTransformationFlux()) {
              lParams.listeFichiers =
                UtilitaireSelecFile_1.UtilitaireSelecFile.controleTailleFichiers(
                  lParams.listeFichiers,
                  lMessagesErreur,
                  this.options.maxSize,
                );
            }
            if (
              this.options.genererPDFImages &&
              lParams.listeFichiers.count() > 0
            ) {
              await UtilitaireSelecFile_1.UtilitaireSelecFile.genererPdfAsync(
                lParams.listeFichiers,
                lMessagesErreur,
                this.options.nomPDFaGenerer,
                this.options.genrePJ,
              );
              if (!this.avecTransformationFlux()) {
                lParams.listeFichiers =
                  UtilitaireSelecFile_1.UtilitaireSelecFile.controleTailleFichiers(
                    lParams.listeFichiers,
                    lMessagesErreur,
                    this.options.maxSize,
                  );
              }
            }
          } finally {
            if (lAvecBlocageInterface) {
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.patience,
                false,
              );
            }
          }
          if (this.avecTransformationFlux()) {
            try {
              await (0, AccessApp_1.getApp)()
                .getGeneric('transformationFlux')
                .transformationFluxPromise(lParams.listeFichiers, this.options);
            } catch (aError) {}
            lParams.listeFichiers =
              UtilitaireSelecFile_1.UtilitaireSelecFile.controleTailleFichiers(
                lParams.listeFichiers,
                lMessagesErreur,
                this.options.maxSize,
              );
          }
          if (lMessagesErreur.length > 0) {
            await (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({ message: lMessagesErreur.join('<br>') });
          }
          if (lParams.listeFichiers.count() > 0) {
            lParams.eltFichier = lParams.listeFichiers.get(0);
            IEHtml_1.IEHtml.refresh();
            return lParams;
          }
        } catch (e) {
          await (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
              message:
                GlossaireSelecFile_1.TradGlossaireSelecFile.EchecAjoutFichier,
            });
        }
        return;
      }
      createInput(aResolve) {
        this.removeInput();
        if (this.timeoutClean) {
          clearTimeout(this.timeoutClean);
        }
        this.timeoutClean = undefined;
        if (!ObjetHtml_1.GHtml.getElement(uIdConteneurInputFile)) {
          IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(uIdConteneurInputFile, -1);
        }
        const lAccept =
          (this.options.genererPDFImages
            ? this.options.accept_genererPDFImages
            : '') || this.options.accept;
        this.jInput = $(
          IEHtml_1.IEHtml.injectHTMLParams({
            element: ObjetHtml_1.GHtml.getElement(uIdConteneurInputFile),
            html: IE.jsx.str('input', {
              type: 'file',
              style: 'display:none',
              multiple: !!this.options.multiple,
              accept: lAccept || false,
              capture: this.options.capture || false,
            }),
            ignorerScroll: true,
          }),
        );
        this.jInput.on(
          {
            change: async function (aEvent) {
              const lInstance = aEvent.data.this;
              try {
                const lResult = await lInstance.addFiles(
                  Array.from(this.files),
                );
                lInstance.removeInput();
                aResolve(lResult);
              } catch (e) {
                lInstance.removeInput();
                aResolve(undefined);
              }
            },
          },
          { this: this },
        );
      }
      removeInput() {
        if (this.timeoutClean) {
          clearTimeout(this.timeoutClean);
        }
        this.timeoutClean = undefined;
        $(`#${uIdConteneurInputFile}`).remove();
        this.jInput = undefined;
      }
      construireListeFichiers(aParams, aMessagesErreur) {
        let lNbMax = this.options.maxFiles;
        if (!this.options.multiple) {
          lNbMax = 1;
        }
        Array.from(aParams.files).forEach((aFile, aIndex) => {
          const lFichierRefuse =
            lNbMax > 0 &&
            MethodesObjet_1.MethodesObjet.isNumber(lNbMax) &&
            aIndex >= lNbMax;
          IE.log.addLog(
            'Fichier ' +
              (lFichierRefuse ? 'refusé (max atteint)' : 'ajouté') +
              ' : ' +
              aFile.name +
              ' - Taille : ' +
              Math.ceil(aFile.size / 1024) +
              'ko',
          );
          if (lFichierRefuse) {
            return;
          }
          if (aFile.size === 0) {
            aMessagesErreur.push(
              GlossaireSelecFile_1.TradGlossaireSelecFile.msgDocJointVide.format(
                [aFile.name],
              ),
            );
          } else if (
            this.options.extensions &&
            this.options.extensions.length > 0 &&
            !this.options.extensions.includes(
              aFile.name.replace(/(.*)\.([^./]+)$/, '$2').toLowerCase(),
            )
          ) {
            aMessagesErreur.push(
              GlossaireSelecFile_1.TradGlossaireSelecFile.echecSelection.format(
                [this.options.extensions.join(', ')],
              ),
            );
          } else {
            UtilitaireSelecFile_1.UtilitaireSelecFile.addFileDansListe(
              aFile,
              aParams.listeFichiers,
              this.options.genrePJ,
            );
          }
        });
        if (aParams.listeFichiers) {
          aParams.listeFichiers.setTri([
            ObjetTri_1.ObjetTri.init('lastModified'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]);
          aParams.listeFichiers.trier();
        }
      }
      async scaleImage(aParams, aFichier) {
        if (!aFichier.file) {
          return false;
        }
        try {
          const aParamsTraitement =
            await UtilitaireTraitementImage_1.UtilitaireTraitementImage.resizeFilePromise(
              aFichier.file,
              this.options.largeurMaxImageResize,
              this.options.hauteurMaxImageResize,
              this.options.compressionImage,
            );
          if (
            aParamsTraitement &&
            aParamsTraitement.avecResize &&
            aParamsTraitement.file &&
            aParamsTraitement.file.size < aFichier.file.size
          ) {
            aFichier.file = aParamsTraitement.file;
            aFichier.estResize = true;
            return true;
          }
        } catch (e) {}
        return false;
      }
      avecTransformationFlux() {
        if (this.options.avecTransformationFlux && (0, AccessApp_1.getApp)()) {
          const lTransformationFlux = (0, AccessApp_1.getApp)().getGeneric(
            'transformationFlux',
          );
          return (
            !!lTransformationFlux &&
            lTransformationFlux.getActif() &&
            !['image/*', 'application/zip'].includes(this.options.accept)
          );
        }
        return false;
      }
    }
  },
  fn: 'selecfile.js',
});