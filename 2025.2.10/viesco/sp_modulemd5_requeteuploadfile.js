IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ModuleMD5_RequeteUploadFile = void 0;
    require('DeclarationForge');
    const ObjetTraduction_1 = require('ObjetTraduction');
    function _toBinaryString(aParams) {
      return new Promise((aResolve) => {
        const lChunk = 100 * 1024;
        if (aParams.start >= aParams.bytes.length) {
          aParams.done = true;
        } else {
          aParams.tabResult.push(
            String.fromCharCode.apply(
              null,
              aParams.bytes.slice(aParams.start, aParams.start + lChunk),
            ),
          );
        }
        aParams.eventAjaxIOProgression.call(aParams.instance, {
          message: 'Préparation du fichier à envoyer',
          pourcent: Math.round(
            (aParams.compteur * lChunk) / (aParams.bytes.length * 100 * 1024),
          ),
          md5: true,
        });
        aParams.start += lChunk;
        aParams.compteur += 1;
        setTimeout(() => {
          aResolve(aParams);
        }, 0);
      });
    }
    function _toBinaryStringPromise(aParams) {
      return _toBinaryString(aParams).then(() => {
        if (!aParams.done) {
          return _toBinaryStringPromise(aParams);
        }
      });
    }
    exports.ModuleMD5_RequeteUploadFile = {
      calculMD5(aParams) {
        const lParams = Object.assign(
          {
            instance: null,
            fichier: null,
            eventAjaxIOProgression: null,
            maxSizePourMD5: 30 * 1024 * 1024,
          },
          aParams,
        );
        return new Promise((aResolve, aReject) => {
          if (!window.FileReader || !window.Uint8Array) {
            IE.log.addLog(
              'FileReader ou Uint8Array non supporté => pas de controle de MD5',
            );
            aReject();
            return;
          }
          if (lParams.fichier.file.size > lParams.maxSizePourMD5) {
            IE.log.addLog('Fichier trop gros pur calculer le MD5');
            aReject();
            return;
          }
          try {
            lParams.eventAjaxIOProgression.call(lParams.instance, {
              message: 'Préparation du fichier à envoyer',
            });
            const lReader = new FileReader();
            lReader.onload = function () {
              try {
                const lParamsReader = Object.assign(
                  {
                    bytes: new Uint8Array(lReader.result),
                    tabResult: [],
                    start: 0,
                    compteur: 0,
                  },
                  lParams,
                );
                if (!lParamsReader.bytes.slice) {
                  lParamsReader.bytes = Array.from(lParamsReader.bytes);
                }
                _toBinaryStringPromise(lParamsReader).then(
                  () => {
                    let lMd5 = '';
                    if (lParamsReader.done) {
                      lMd5 = forge.md.md5
                        .create()
                        .update(lParamsReader.tabResult.join(''))
                        .digest()
                        .toHex();
                    }
                    aResolve(lMd5);
                  },
                  () => {
                    aReject();
                  },
                );
              } catch (e) {}
            }.bind(lParams.instance);
            lReader.onerror = function () {
              aReject();
            }.bind(lParams.instance);
            lReader.readAsArrayBuffer(lParams.fichier.file);
          } catch (e) {
            aReject();
          }
        });
      },
    };
  },
  fn: 'modulemd5_requeteuploadfile.js',
});