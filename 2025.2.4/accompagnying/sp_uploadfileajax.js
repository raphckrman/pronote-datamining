IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UploadFileAjax = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const XmlHttp_1 = require('XmlHttp');
    const Invocateur_1 = require('Invocateur');
    const u_blobSlice =
      global.Blob &&
      (Blob.prototype.slice ||
        Blob.prototype.webkitSlice ||
        Blob.prototype.mozSlice);
    class UploadFileAjax {
      static sendPromise(aParams) {
        const lParams = Object.assign(
          {
            url: '',
            file: null,
            remplisseurFormData: null,
            remplisseurHeaders: null,
            responseType: 'json',
            maxChunkSize: 100 * 1024,
            fournisseurAbort: null,
            callbackProgress: null,
          },
          aParams,
        );
        if (!lParams.url || !lParams.file) {
          return Promise.reject();
        }
        Object.assign(lParams, {
          _fileSize: lParams.file.size,
          funcAbort: () => {},
        });
        if (lParams.fournisseurAbort) {
          lParams.fournisseurAbort(() => {
            return lParams.funcAbort();
          });
          Invocateur_1.Invocateur.evenement(
            Invocateur_1.ObjetInvocateur.events.refreshIEHtml,
          );
        }
        return this._sendChunk(lParams, 0).finally(() => {
          if (lParams.fournisseurAbort) {
            lParams.fournisseurAbort(null);
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.refreshIEHtml,
            );
          }
        });
      }
      static _sendChunk(aParams, aIndexStart) {
        let lIndexStartSuivant = aIndexStart;
        return new Promise((aResolve, aReject) => {
          if (aParams._aborted) {
            aReject({
              fail: true,
              isAborted: true,
              estReponseRequete: false,
              statut: 0,
              response: null,
            });
            return;
          }
          const lRequete = (0, XmlHttp_1.getXmlHttp)();
          if (aParams.responseType) {
            lRequete.responseType = aParams.responseType;
          }
          lRequete.open('POST', aParams.url);
          let lFile = null;
          if (
            aParams._fileSize > aParams.maxChunkSize &&
            aParams.maxChunkSize > 0 &&
            u_blobSlice
          ) {
            const lIndexEnd = Math.min(
              aIndexStart + aParams.maxChunkSize,
              aParams._fileSize,
            );
            lFile = u_blobSlice.call(
              aParams.file,
              aIndexStart,
              lIndexEnd,
              aParams.file.type,
            );
            lRequete.setRequestHeader(
              'content-range',
              `bytes ${aIndexStart}-${lIndexEnd - 1}/${aParams._fileSize}`,
            );
            lIndexStartSuivant += aParams.maxChunkSize;
          } else {
            lFile = aParams.file;
            lIndexStartSuivant += aParams._fileSize;
          }
          if (aParams.file.name) {
            lRequete.setRequestHeader(
              'content-disposition',
              `attachment; filename="${encodeURI(aParams.file.name)}"`,
            );
          }
          let lBody = null;
          if (
            MethodesObjet_1.MethodesObjet.isFunction(
              aParams.remplisseurFormData,
            )
          ) {
            lBody = new FormData();
            aParams.remplisseurFormData(lBody, lFile);
          } else {
            lBody = lFile;
          }
          if (
            MethodesObjet_1.MethodesObjet.isFunction(aParams.remplisseurHeaders)
          ) {
            aParams.remplisseurHeaders(lRequete);
          }
          lRequete.onreadystatechange = () => {
            if (lRequete.readyState === 4) {
              aParams.funcAbort = () => {
                aParams._aborted = true;
              };
              if (aParams.callbackProgress) {
                aParams.callbackProgress({
                  pourcent:
                    (Math.min(
                      aIndexStart + aParams.maxChunkSize,
                      aParams._fileSize,
                    ) *
                      100) /
                    aParams._fileSize,
                });
              }
              const lResult = {
                estReponseRequete: true,
                statut: lRequete.status,
                response: lRequete.response,
              };
              if (lRequete.status >= 200 && lRequete.status < 300) {
                aResolve(Object.assign(lResult, { done: true }));
              } else {
                aReject(
                  Object.assign(lResult, {
                    fail: true,
                    isAborted: !!lRequete._aborted && lRequete.status === 0,
                  }),
                );
              }
            }
          };
          aParams.funcAbort = () => {
            lRequete._aborted = true;
            lRequete.abort();
          };
          lRequete.send(lBody);
        }).then((aResult) => {
          if (lIndexStartSuivant < aParams._fileSize) {
            return this._sendChunk(aParams, lIndexStartSuivant);
          }
          return aResult;
        });
      }
    }
    exports.UploadFileAjax = UploadFileAjax;
  },
  fn: 'uploadfileajax.js',
});