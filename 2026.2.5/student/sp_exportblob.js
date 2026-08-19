IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ExportBlob = void 0;
    exports.ExportBlob = {
      create(aContenu, aNomFichier, aTypeMime) {
        let lFile = null;
        let lExt = null;
        let lReussite = false;
        if (aTypeMime === 'text/csv') {
          lFile = ['\ufeff', aContenu];
          lExt = '.csv';
        } else if (aTypeMime === 'text/xml') {
          lFile = [aContenu];
          lExt = '.xml';
        }
        if (lFile) {
          let lBlob;
          try {
            lBlob = new Blob(lFile, { type: aTypeMime });
          } catch (e1) {
            try {
              const BlobBuilder =
                window.MozBlobBuilder ||
                window.WebKitBlobBuilder ||
                window.BlobBuilder;
              if (e1.name === 'TypeError' && window.BlobBuilder) {
                const bb = new BlobBuilder();
                bb.append(lFile);
                lBlob = bb.getBlob(aTypeMime);
              } else if (e1.name === 'InvalidStateError') {
                lBlob = new Blob(lFile, { type: aTypeMime });
              }
            } catch (e2) {
              IE.log.addLog('echec BlobBuilder');
              return false;
            }
          }
          let lAhref = null;
          try {
            lAhref = $(
              '<a href="' +
                (window.webkitURL || window.URL).createObjectURL(lBlob) +
                '" download="' +
                aNomFichier +
                lExt +
                '" style="display:none;"></a>',
            );
          } catch (e) {
            IE.log.addLog('echec createObjectURL');
            return false;
          }
          $('body').append(lAhref);
          try {
            if (window.navigator && window.navigator.msSaveBlob) {
              window.navigator.msSaveBlob(lBlob, aNomFichier + lExt);
              lReussite = true;
            }
          } catch (e2) {
            IE.log.addLog('echec msSaveBlob');
          }
          if (!lReussite) {
            try {
              lAhref.get(0).click();
              lReussite = true;
            } catch (e) {}
          }
          lAhref.remove();
        } else {
        }
        return lReussite;
      },
    };
  },
  fn: 'exportblob.js',
});