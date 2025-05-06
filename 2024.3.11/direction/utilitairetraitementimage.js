IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireTraitementImage = void 0;
    const DeferLoadingScript_1 = require('DeferLoadingScript');
    const Invocateur_1 = require('Invocateur');
    const UtilitaireTraitementImage = {
      browserAutoRotate: false,
      fileToDataUrlPromise(aFile) {
        return new Promise((aResolve, aReject) => {
          if (!aFile) {
            aReject();
          }
          const lReader = new FileReader();
          lReader.onloadend = function (e) {
            if (e.target.readyState === FileReader.DONE) {
              aResolve(e.target.result);
            }
          };
          lReader.onerror = function () {
            aReject();
          };
          lReader.onabort = function () {
            aReject();
          };
          lReader.readAsDataURL(aFile);
        });
      },
      loadImageDataUrlPromise(aDataUrl, aImage) {
        return new Promise((aResolve, aReject) => {
          const lImg = aImage || new Image();
          lImg.onload = function () {
            aResolve(lImg);
          };
          lImg.onerror = function () {
            aReject();
          };
          lImg.src = aDataUrl;
        });
      },
      fileToImgPromise(aFile, aImage) {
        return UtilitaireTraitementImage.fileToDataUrlPromise(aFile)
          .then((aDataUrl) => {
            return UtilitaireTraitementImage.loadImageDataUrlPromise(
              aDataUrl,
              aImage,
            );
          })
          .then((aImg) => {
            let lOrientation = -2;
            return Promise.resolve()
              .then(() => {
                if (UtilitaireTraitementImage.avecOrientationPossible(aFile)) {
                  return UtilitaireTraitementImage.getOrientationPromise(
                    aFile,
                  ).then(
                    (aOrientation) => {
                      lOrientation = aOrientation;
                    },
                    () => {},
                  );
                }
              })
              .then(() => {
                return { img: aImg, orientation: lOrientation };
              });
          });
      },
      getOrientationPromise(file) {
        return new Promise((aResolve, aReject) => {
          const reader = new FileReader();
          reader.onload = function (e) {
            try {
              const view = new DataView(e.target.result);
              if (view.getUint16(0, false) != 0xffd8) {
                return aResolve(-2);
              }
              const length = view.byteLength;
              let offset = 2;
              while (offset < length) {
                if (view.getUint16(offset + 2, false) <= 8) {
                  return aResolve(-1);
                }
                const marker = view.getUint16(offset, false);
                offset += 2;
                if (marker == 0xffe1) {
                  if (view.getUint32((offset += 2), false) != 0x45786966) {
                    return aResolve(-1);
                  }
                  const little = view.getUint16((offset += 6), false) == 0x4949;
                  offset += view.getUint32(offset + 4, little);
                  const tags = view.getUint16(offset, little);
                  offset += 2;
                  for (let i = 0; i < tags; i++) {
                    if (view.getUint16(offset + i * 12, little) == 0x0112) {
                      return aResolve(
                        view.getUint16(offset + i * 12 + 8, little),
                      );
                    }
                  }
                } else if ((marker & 0xff00) != 0xff00) {
                  break;
                } else {
                  offset += view.getUint16(offset, false);
                }
              }
              return aResolve(-1);
            } catch (e) {
              aReject(e);
            }
          };
          reader.onerror = function (e) {
            aReject(e);
          };
          reader.readAsArrayBuffer(file);
        });
      },
      avecOrientationPossible(aFile) {
        return (
          !!(aFile && aFile.type === 'image/jpeg') && !this.browserAutoRotate
        );
      },
      resizeEtOrientationImgToCanvas(aParams) {
        const lParams = Object.assign(
          {
            img: null,
            width: 0,
            height: 0,
            widthResize: 0,
            heightResize: 0,
            orientation: -1,
          },
          aParams,
        );
        const lWidth = lParams.widthResize || lParams.width;
        const lHeight = lParams.heightResize || lParams.height;
        const lCanvasResult = document.createElement('canvas');
        const lCtxDest = lCanvasResult.getContext('2d');
        lCanvasResult.width = lWidth;
        lCanvasResult.height = lHeight;
        if (lParams.orientation > 0) {
          const lCanvas = document.createElement('canvas');
          const lCtx = lCanvas.getContext('2d');
          lCanvas.width = lParams.width;
          lCanvas.height = lParams.height;
          lCtx.drawImage(lParams.img, 0, 0, lCanvas.width, lCanvas.height);
          if (4 < lParams.orientation && lParams.orientation < 9) {
            lCanvasResult.width = lHeight;
            lCanvasResult.height = lWidth;
          }
          switch (lParams.orientation) {
            case 2:
              lCtxDest.transform(-1, 0, 0, 1, lWidth, 0);
              break;
            case 3:
              lCtxDest.transform(-1, 0, 0, -1, lWidth, lHeight);
              break;
            case 4:
              lCtxDest.transform(1, 0, 0, -1, 0, lHeight);
              break;
            case 5:
              lCtxDest.transform(0, 1, 1, 0, 0, 0);
              break;
            case 6:
              lCtxDest.transform(0, 1, -1, 0, lHeight, 0);
              break;
            case 7:
              lCtxDest.transform(0, -1, -1, 0, lHeight, lWidth);
              break;
            case 8:
              lCtxDest.transform(0, -1, 1, 0, 0, lWidth);
              break;
            default:
              break;
          }
          lCtxDest.drawImage(lCanvas, 0, 0, lWidth, lHeight);
        } else {
          lCtxDest.drawImage(lParams.img, 0, 0, lWidth, lHeight);
        }
        return lCanvasResult;
      },
      resizeImgToCanvas(aImg, aMaxWidth, aMaxHeight, aOrientation) {
        const lWidthOriginal = aImg.width;
        const lHeightOriginal = aImg.height;
        const lMAX_WIDTH = aMaxWidth || 1500;
        const lMAX_HEIGHT = aMaxHeight || 1500;
        let lWidth = lWidthOriginal;
        let lHeight = lHeightOriginal;
        if (lWidth > lHeight) {
          if (lWidth > lMAX_WIDTH) {
            lHeight *= lMAX_WIDTH / lWidth;
            lWidth = lMAX_WIDTH;
          }
        } else {
          if (lHeight > lMAX_HEIGHT) {
            lWidth *= lMAX_HEIGHT / lHeight;
            lHeight = lMAX_HEIGHT;
          }
        }
        let lCanvasResult = null;
        const lAvecResize =
          lHeightOriginal !== lHeight || lWidthOriginal !== lWidth;
        if (lAvecResize) {
          lCanvasResult =
            UtilitaireTraitementImage.resizeEtOrientationImgToCanvas({
              img: aImg,
              width: lWidthOriginal,
              height: lHeightOriginal,
              widthResize: lWidth,
              heightResize: lHeight,
              orientation: aOrientation,
            });
        }
        return {
          avecResize: lAvecResize,
          canvas: lCanvasResult,
          img: aImg,
          width: lWidth,
          height: lHeight,
          widthOriginal: lWidthOriginal,
          heightOriginal: lHeightOriginal,
        };
      },
      canvasToBlobPromise(aCanvas, aType, aName, aCompression) {
        return new Promise((aResolve) => {
          aCanvas.toBlob(
            (aBlob) => {
              aBlob.name = aName;
              aResolve(aBlob);
            },
            aType,
            aCompression,
          );
        });
      },
      resizeFilePromise(aFile, aMaxWidth, aMaxHeight, aCompression) {
        return UtilitaireTraitementImage.fileToImgPromise(aFile)
          .then((aParamsFileToPromise) => {
            const lResult = UtilitaireTraitementImage.resizeImgToCanvas(
              aParamsFileToPromise.img,
              aMaxWidth,
              aMaxHeight,
              aParamsFileToPromise.orientation,
            );
            if (lResult.avecResize && lResult.canvas) {
              return UtilitaireTraitementImage.canvasToBlobPromise(
                lResult.canvas,
                aFile.type,
                aFile.name,
                aCompression,
              ).then((aBlob) => {
                lResult.file = aBlob;
                return lResult;
              });
            }
            lResult.file = aFile;
            return lResult;
          })
          .catch((e) => {
            return null;
          });
      },
      avecResizePossible(aFile) {
        return !!(
          aFile &&
          aFile.type &&
          [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/bmp',
            'image/webp',
          ].indexOf(aFile.type) >= 0
        );
      },
      async genererPdfAsync(aListeFichiers) {
        try {
          await DeferLoadingScript_1.deferLoadingScript.loadAsync('jspdf');
        } catch (_a) {
          throw { erreurLib: true };
        }
        const lJsPDF = await Promise.resolve().then(() =>
          require('jspdf.min.js'),
        );
        if (!lJsPDF) {
          throw { erreurLib: true };
        }
        return Promise.resolve()
          .then(() => {
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.patience,
              true,
              { delai: 100 },
            );
            const lPromises = [];
            if (aListeFichiers) {
              aListeFichiers.parcourir((aFichier) => {
                if (
                  !aFichier.estResize &&
                  UtilitaireTraitementImage.avecOrientationPossible(
                    aFichier.file,
                  )
                ) {
                  lPromises.push(
                    UtilitaireTraitementImage.fileToImgPromise(aFichier.file)
                      .then((aParamsFileToPromise) => {
                        if (aParamsFileToPromise.orientation >= 2) {
                          const lCanvasResult =
                            UtilitaireTraitementImage.resizeEtOrientationImgToCanvas(
                              {
                                img: aParamsFileToPromise.img,
                                width: aParamsFileToPromise.img.width,
                                height: aParamsFileToPromise.img.height,
                                orientation: aParamsFileToPromise.orientation,
                              },
                            );
                          return UtilitaireTraitementImage.canvasToBlobPromise(
                            lCanvasResult,
                            aFichier.file.type,
                            aFichier.file.name,
                          ).then((aBlob) => {
                            aFichier.file = aBlob;
                          });
                        }
                      })
                      .catch(() => {
                        return Promise.reject({ nom: aFichier.Libelle });
                      }),
                  );
                }
              });
            }
            return Promise.all(lPromises);
          })
          .then(() => {
            return new Promise((aResolve, aReject) => {
              const lNbFichiers = aListeFichiers ? aListeFichiers.count() : 0;
              if (aListeFichiers && lNbFichiers > 0) {
                let lNb = 0;
                const lFilesDataUrl = [];
                aListeFichiers.parcourir((aFichier, aIndex) => {
                  const lFichier = aFichier;
                  UtilitaireTraitementImage.fileToDataUrlPromise(
                    lFichier.file,
                  ).then(
                    ((aIndex, aDataUrl) => {
                      lNb += 1;
                      lFilesDataUrl[aIndex] = {
                        dataUrl: aDataUrl,
                        fichier: aFichier,
                        type: lFichier.file.type,
                      };
                      if (lNb >= lNbFichiers) {
                        aResolve(lFilesDataUrl);
                      }
                    }).bind(null, aIndex),
                    ((aLibelle) => {
                      aReject({ nom: aLibelle });
                    }).bind(null, lFichier.Libelle),
                  );
                });
              } else {
                aResolve(null);
              }
            });
          })
          .then((aFilesDataUrl) => {
            if (aFilesDataUrl && aFilesDataUrl.length > 0) {
              const lPDF = new lJsPDF();
              const lPromisesErreursJsPDF = [];
              aFilesDataUrl.forEach((aFile) => {
                try {
                  aFile.imageProp = lPDF.getImageProperties(aFile.dataUrl);
                } catch (e) {
                  lPromisesErreursJsPDF.push(
                    new Promise((aResolve, aReject) => {
                      let lTypePDF = '';
                      switch (aFile.type) {
                        case 'image/jpeg':
                          lTypePDF = 'JPEG';
                          break;
                        case 'image/png':
                          lTypePDF = 'PNG';
                          break;
                        default:
                          aReject({ nom: aFile.fichier.Libelle });
                          return;
                      }
                      UtilitaireTraitementImage.loadImageDataUrlPromise(
                        aFile.dataUrl,
                      ).then(
                        ((aFile, aTypePDF, aImage) => {
                          aFile.imageProp = {
                            width: aImage.width,
                            height: aImage.height,
                            fileType: aTypePDF,
                          };
                          aResolve();
                        }).bind(null, aFile, lTypePDF),
                        ((aFile) => {
                          return Promise.reject({ nom: aFile.fichier.Libelle });
                        }).bind(null, aFile),
                      );
                    }),
                  );
                }
              });
              return Promise.all(lPromisesErreursJsPDF).then(() => {
                return aFilesDataUrl;
              });
            }
          })
          .then((aFilesDataUrl) => {
            if (aFilesDataUrl && aFilesDataUrl.length > 0) {
              return new Promise((aResolve, aReject) => {
                let lPDF = new lJsPDF();
                aFilesDataUrl.every((aFile, aIndex) => {
                  try {
                    const lImageProp = aFile.imageProp;
                    if (aIndex !== 0) {
                      lPDF.addPage([lImageProp.width, lImageProp.height]);
                    } else {
                      lPDF = new lJsPDF({
                        format: [lImageProp.width, lImageProp.height],
                        unit: 'px',
                        orientation:
                          lImageProp.width >= lImageProp.height ? 'l' : 'p',
                        compress: true,
                      });
                    }
                    lPDF.addImage(
                      aFile.dataUrl,
                      lImageProp.fileType,
                      0,
                      0,
                      lImageProp.width / lPDF.internal.scaleFactor,
                      lImageProp.height / lPDF.internal.scaleFactor,
                      NaN,
                      'SLOW',
                    );
                    return true;
                  } catch (e) {
                    aReject({ nom: aFile.fichier.Libelle });
                    return false;
                  }
                });
                const lFile = lPDF.output('blob');
                lFile.name = 'file.pdf';
                aResolve({ file: lFile });
              });
            }
          })
          .finally(() => {
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.patience,
              false,
            );
          });
      },
      getTabMimePDFImage() {
        return [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/bmp',
          'image/gif',
        ];
      },
    };
    exports.UtilitaireTraitementImage = UtilitaireTraitementImage;
    function _browserAutoRotatesPromise() {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = function () {
          resolve(image.naturalWidth === 1);
        };
        image.onerror = reject;
        image.src =
          'data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z';
      });
    }
    _browserAutoRotatesPromise().then((aVal) => {
      UtilitaireTraitementImage.browserAutoRotate = !!aVal;
    });
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function (callback, type, quality) {
          const canvas = this;
          setTimeout(() => {
            const binStr = atob(canvas.toDataURL(type, quality).split(',')[1]),
              len = binStr.length,
              arr = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
              arr[i] = binStr.charCodeAt(i);
            }
            callback(new Blob([arr], { type: type || 'image/png' }));
          });
        },
      });
    }
  },
  fn: 'utilitairetraitementimage.js',
});