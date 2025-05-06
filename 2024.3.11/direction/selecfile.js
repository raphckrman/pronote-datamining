IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SelecFile = void 0;
    const IEHtml = require('IEHtml');
    const GUID_1 = require('GUID');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTri_1 = require('ObjetTri');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const UtilitaireTraitementImage_1 = require('UtilitaireTraitementImage');
    const UtilitaireSelecFile_1 = require('UtilitaireSelecFile');
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
          maxSize: null,
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
          capture: '',
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
            for (const lFichier of lParams.listeFichiers) {
              if (
                this.options.avecResizeImage &&
                UtilitaireTraitementImage_1.UtilitaireTraitementImage.avecResizePossible(
                  lFichier.file,
                )
              ) {
                await this.scaleImage(lParams, lFichier, lMessagesErreur);
              }
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
              await GApplication.getObject(
                'transformationFlux',
              ).transformationFluxPromise(lParams.listeFichiers, this.options);
            } catch (aError) {}
            lParams.listeFichiers =
              UtilitaireSelecFile_1.UtilitaireSelecFile.controleTailleFichiers(
                lParams.listeFichiers,
                lMessagesErreur,
                this.options.maxSize,
              );
          }
          if (lMessagesErreur.length > 0) {
            await GApplication.getMessage().afficher({
              message: lMessagesErreur.join('<br>'),
            });
          }
          if (lParams.listeFichiers.count() > 0) {
            lParams.eltFichier = lParams.listeFichiers.get(0);
            IEHtml.refresh(true);
            return lParams;
          }
        } catch (e) {
          await GApplication.getMessage().afficher({
            message: 'Echec lors de l'ajout du fichier',
          });
          return null;
        }
      }
      createInput(aResolve) {
        this.removeInput();
        if (this.timeoutClean) {
          clearTimeout(this.timeoutClean);
        }
        this.timeoutClean = null;
        if (!ObjetHtml_1.GHtml.getElement(uIdConteneurInputFile)) {
          IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(uIdConteneurInputFile, -1);
        }
        const lAccept =
          (this.options.genererPDFImages
            ? this.options.accept_genererPDFImages
            : '') || this.options.accept;
        this.jInput = $(
          IEHtml.injectHTMLParams({
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
                aResolve(null);
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
        this.timeoutClean = null;
        $(`#${uIdConteneurInputFile}`).remove();
        this.jInput = null;
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
              'Le fichier "%s" est refusé car il a une taille de 0 ko',
            );
          } else if (
            this.options.extensions &&
            this.options.extensions.length > 0 &&
            !this.options.extensions.includes(
              aFile.name.replace(/(.*)\.([^./]+)$/, '$2').toLowerCase(),
            )
          ) {
            aMessagesErreur.push(
              'Le fichier sélectionné n'est pas valide. Il doit avoir l'extension %s'],
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
      async scaleImage(aParams, aFichier, aMessagesErreur) {
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
            const lAncienFichier = aFichier.file;
            aFichier.file = aParamsTraitement.file;
            aFichier.estResize = true;
            aMessagesErreur.push(
              ObjetChaine_1.GChaine.format(
                'Le fichier %s a été réduit : %dx%d (%d ko) -> %dx%d (%d ko)',
                [
                  aFichier.Libelle,
                  aParamsTraitement.widthOriginal,
                  aParamsTraitement.heightOriginal,
                  lAncienFichier.size / 1024,
                  Math.round(aParamsTraitement.width),
                  Math.round(aParamsTraitement.height),
                  aFichier.file.size / 1024,
                ],
              ),
            );
          }
        } catch (e) {
          return null;
        }
      }
      avecTransformationFlux() {
        if (this.options.avecTransformationFlux && global.GApplication) {
          const lTransformationFlux =
            GApplication.getObject('transformationFlux');
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