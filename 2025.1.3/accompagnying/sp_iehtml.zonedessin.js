IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ZoneDessinEvenement = void 0;
    const IEHtml = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const DeferLoadingScript_1 = require('DeferLoadingScript');
    require('signature_pad.umd.min.js');
    require('signature_pad.umd.js');
    const IEHtml_ZoneDessin_module_css_1 = require('IEHtml.ZoneDessin.module.css');
    var ZoneDessinEvenement;
    (function (ZoneDessinEvenement) {
      ZoneDessinEvenement['DebutDessin'] = 'ZD_DebutDessin';
      ZoneDessinEvenement['FinDessin'] = 'ZD_FinDessin';
      ZoneDessinEvenement['Effacement'] = 'ZD_Effacement';
      ZoneDessinEvenement['AnnulerDernierTrait'] = 'ZD_AnnulerDernierTrait';
    })(
      ZoneDessinEvenement ||
        (exports.ZoneDessinEvenement = ZoneDessinEvenement = {}),
    );
    const cFacteurTraitTailleMin = 0.5;
    const cFacteurTraitTailleMax = 2.5;
    IEHtml.addBalise('ie-zonedessin', (aContexteCourant, aOutils) => {
      let lEstZoneDessinDisabled = false;
      let lSignaturePad;
      let lInfosDestroy;
      const lInnerDivGlobal = IE.jsx.str('div', {
        class:
          IEHtml_ZoneDessin_module_css_1.StylesIEHtmlZoneDessin.ieZonedessin,
      });
      const lElementDivGlobal = ObjetHtml_1.GHtml.htmlToDOM(lInnerDivGlobal);
      const lJDivGlobal = $(lElementDivGlobal);
      let lJDivCanvas = null;
      let lFaireInitTaille = true;
      const lFuncVisibility = (aVisible) => {
        if (aVisible && lFaireInitTaille) {
          lFaireInitTaille = false;
          const lWidthParent = lJDivGlobal.width();
          const lHeightParent = lJDivGlobal.height();
          lJDivCanvas.attr('width', lWidthParent).attr('height', lHeightParent);
        }
      };
      aOutils.injectHTML({
        element: lElementDivGlobal,
        html: IE.jsx.str('canvas', {
          'ie-visibility-observer': lFuncVisibility,
        }),
        ignorerScroll: true,
        contexte: aContexteCourant.contexte,
      });
      lJDivCanvas = $(lElementDivGlobal).find('>canvas');
      const lElementCanvas = lJDivCanvas.get(0);
      const lOptionsZoneDessin = { couleurCrayon: '#000', tailleCrayon: 1 };
      DeferLoadingScript_1.deferLoadingScript
        .loadAsync(['signature-pad'])
        .then(() => {
          let lInfosInitialiseZoneDessin;
          let lInfosSurEvenementZoneDessin;
          const lModele = aOutils.getModel(aContexteCourant);
          if (lModele) {
            lInfosInitialiseZoneDessin = aOutils.getAccesParametresModel(
              'initialiseZoneDessin',
              aContexteCourant,
            );
            lInfosDestroy = aOutils.getAccesParametresModel(
              'destroy',
              aContexteCourant,
            );
            const lInfosGetOptions = aOutils.getAccesParametresModel(
              'getOptions',
              aContexteCourant,
            );
            if (lInfosGetOptions && lInfosGetOptions.estFonction) {
              Object.assign(lOptionsZoneDessin, lInfosGetOptions.callback([]));
            }
            const lInfosGetDisabled = aOutils.getAccesParametresModel(
              'getDisabled',
              aContexteCourant,
            );
            if (lInfosGetDisabled && lInfosGetDisabled.estFonction) {
              const lGetter = function () {
                return !!lInfosGetDisabled.callback([]);
              };
              lEstZoneDessinDisabled = !!lGetter();
              aOutils.abonnerRefresh(
                () => {
                  const lDisabled = !!lGetter();
                  if (lDisabled !== lEstZoneDessinDisabled) {
                    lEstZoneDessinDisabled = lDisabled;
                    if (lEstZoneDessinDisabled) {
                      $(aContexteCourant.node)
                        .find('canvas')
                        .attr('disabled', 'disabled');
                      lSignaturePad.off();
                    } else {
                      $(aContexteCourant.node)
                        .find('canvas')
                        .removeAttr('disabled');
                      lSignaturePad.on();
                    }
                  }
                },
                lElementDivGlobal,
                aContexteCourant,
              );
            }
            lInfosSurEvenementZoneDessin = aOutils.getAccesParametresModel(
              'surEvenementZoneDessin',
              aContexteCourant,
            );
          }
          const lDefaultOptionsSignaturePad = {
            dotSize: 1,
            minWidth: 0.5,
            maxWidth: 2.5,
            throttle: 0,
            minDistance: 5,
            backgroundColor: '#FFF',
            penColor: '#000',
            velocityFilterWeight: 0.7,
          };
          const lOptionsSignaturePad = Object.assign(
            lDefaultOptionsSignaturePad,
            {
              minWidth:
                cFacteurTraitTailleMin * lOptionsZoneDessin.tailleCrayon,
              maxWidth:
                cFacteurTraitTailleMax * lOptionsZoneDessin.tailleCrayon,
              dotSize: lDefaultOptionsSignaturePad.maxWidth,
              penColor: lOptionsZoneDessin.couleurCrayon,
            },
          );
          lSignaturePad = new global.SignaturePad(
            lElementCanvas,
            lOptionsSignaturePad,
          );
          if (
            lInfosInitialiseZoneDessin &&
            lInfosInitialiseZoneDessin.estFonction
          ) {
            lInfosInitialiseZoneDessin.callback([lSignaturePad]);
          }
          if (lEstZoneDessinDisabled) {
            lSignaturePad.off();
          }
          if (
            lInfosSurEvenementZoneDessin &&
            lInfosSurEvenementZoneDessin.estFonction
          ) {
            lSignaturePad.addEventListener('beginStroke', () => {
              lInfosSurEvenementZoneDessin.callback([
                ZoneDessinEvenement.DebutDessin,
              ]);
            });
          }
          lSignaturePad.addEventListener('endStroke', () => {
            if (
              lInfosSurEvenementZoneDessin &&
              lInfosSurEvenementZoneDessin.estFonction
            ) {
              lInfosSurEvenementZoneDessin.callback([
                ZoneDessinEvenement.FinDessin,
              ]);
            }
            aContexteCourant.contexte.refresh();
          });
          const downloadBlob = (aBlob, aNomFichier) => {
            const url = window.URL.createObjectURL(aBlob);
            const a = document.createElement('a');
            a.style = 'display: none';
            a.href = url;
            a.download = aNomFichier;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          };
          const dataURLToBlob = (aDataURL) => {
            const lInfosB64 = aDataURL.split(';base64,');
            const lContentType = lInfosB64[0].split(':')[1];
            const lRaw = window.atob(lInfosB64[1]);
            const lRawLength = lRaw.length;
            const lUInt = new Uint8Array(lRawLength);
            for (let i = 0; i < lRawLength; ++i) {
              lUInt[i] = lRaw.charCodeAt(i);
            }
            return new Blob([lUInt], { type: lContentType });
          };
          const dataURLToUint8Array = (aDataURL) => {
            const lInfosB64 = aDataURL.split(';base64,');
            const lRaw = window.atob(lInfosB64[1]);
            const lRawLength = lRaw.length;
            const lUInt = new Uint8Array(lRawLength);
            for (let i = 0; i < lRawLength; ++i) {
              lUInt[i] = lRaw.charCodeAt(i);
            }
            return lUInt;
          };
          lSignaturePad.getImageBase64 = () => {
            return lSignaturePad.toDataURL('image/png');
          };
          lSignaturePad.recupererBlob = (aCallback) => {
            lElementCanvas.toBlob(aCallback);
          };
          lSignaturePad.getDataUrl = (aType, aEncoderOptions) => {
            switch (aType) {
              case 'image/png':
              case 'image/jpeg':
                return lSignaturePad.toDataURL(aType, aEncoderOptions);
                break;
              default:
                return '';
            }
          };
          lSignaturePad.getSVGDataUrl = (aEncoderOptions) => {
            return lSignaturePad.toDataURL(
              'image/svg+xml',
              aEncoderOptions
                ? aEncoderOptions
                : { includeBackgroundColor: false },
            );
          };
          lSignaturePad.getSVGUint8Array = (aEncoderOptions) => {
            let lDataUrl = lSignaturePad.getSVGDataUrl(aEncoderOptions);
            return dataURLToUint8Array(lDataUrl);
          };
          lSignaturePad.downloadAsType = (
            aType,
            aNomFichier,
            aEncoderOptions,
          ) => {
            let lDataURL = lSignaturePad.getDataUrl(aType, aEncoderOptions);
            let lBlob = dataURLToBlob(lDataURL);
            downloadBlob(lBlob, aNomFichier);
          };
          lSignaturePad.downloadAsSVG = (aNomFichier, aEncoderOptions) => {
            let lDataURL = lSignaturePad.getSVGDataUrl(aEncoderOptions);
            let lBlob = dataURLToBlob(lDataURL);
            downloadBlob(lBlob, aNomFichier);
          };
          lSignaturePad.enregistrerImage = (aNomFichier) => {
            lElementCanvas.toBlob((aBlobDeCanvas) => {
              downloadBlob(aBlobDeCanvas, aNomFichier);
            });
          };
          lSignaturePad.estZoneDessinVide = () => {
            return lSignaturePad.isEmpty();
          };
          lSignaturePad.annulerDernierTrait = () => {
            const lDataActuelle = lSignaturePad.toData();
            if (lDataActuelle) {
              lDataActuelle.pop();
              lSignaturePad.fromData(lDataActuelle);
            }
            if (
              lInfosSurEvenementZoneDessin &&
              lInfosSurEvenementZoneDessin.estFonction
            ) {
              lInfosSurEvenementZoneDessin.callback([
                ZoneDessinEvenement.AnnulerDernierTrait,
              ]);
            }
          };
          lSignaturePad.effacerZoneDessin = () => {
            lSignaturePad.clear();
            if (
              lInfosSurEvenementZoneDessin &&
              lInfosSurEvenementZoneDessin.estFonction
            ) {
              lInfosSurEvenementZoneDessin.callback([
                ZoneDessinEvenement.Effacement,
              ]);
            }
          };
          lSignaturePad.getCouleurTrait = () => {
            return lSignaturePad.penColor;
          };
          lSignaturePad.changerCouleurTrait = (aCouleur) => {
            lOptionsZoneDessin.couleurCrayon = aCouleur;
            lSignaturePad.penColor = lOptionsZoneDessin.couleurCrayon;
          };
        });
      lJDivCanvas.on('destroyed', () => {
        lSignaturePad = null;
        if (lInfosDestroy && lInfosDestroy.estFonction) {
          lInfosDestroy.callback([]);
        }
      });
      aOutils.copyAttributs(aContexteCourant.node, lElementDivGlobal);
      const lRacine = lElementDivGlobal;
      aOutils.replaceNode(aContexteCourant.node, lRacine);
      aContexteCourant.node = lRacine;
      aOutils.surNodeEtNodeAfter(aContexteCourant);
      aOutils.addCommentaireDebug(lElementDivGlobal, 'ie-zonedessin');
      return { node: lElementDivGlobal };
    });
  },
  fn: 'iehtml.zonedessin.js',
});