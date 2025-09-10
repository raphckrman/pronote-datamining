IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const c_id_attribut_resizeObserver = 'ie-resize-observer';
    IEHtml.addAttribut(
      c_id_attribut_resizeObserver,
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        const lValue = aAttributValue || '';
        if (!lValue) {
          return true;
        }
        const lInfos = aOutils.getAccesParametres(
          lValue,
          aAttrName,
          aContexteCourant,
        );
        if (!lInfos.estFonction) {
          return true;
        }
        aOutils.surInjectionHtml(aContexteCourant, (...aParams) => {
          try {
            let lResizeObserver = new ResizeObserver((aObservers) => {
              const lObserver = aObservers[0];
              if (lObserver && lObserver.contentRect) {
                let lResult = false;
                try {
                  lResult = lInfos.callback([
                    {
                      node: aContexteCourant.node,
                      observer: lObserver,
                      contentRect: lObserver.contentRect,
                    },
                    ...aParams,
                  ]);
                } catch (e) {
                  lResult = false;
                }
                if (lResult === false && lResizeObserver) {
                  lResizeObserver.disconnect();
                  lResizeObserver = null;
                }
              }
            });
            lResizeObserver.observe(aContexteCourant.node);
            $(aContexteCourant.node).on(
              `destroyed.${c_id_attribut_resizeObserver}`,
              () => {
                if (lResizeObserver) {
                  lResizeObserver.disconnect();
                  lResizeObserver = null;
                }
              },
            );
          } catch (e) {}
        });
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `${c_id_attribut_resizeObserver}="${lValue}"`,
        );
        return true;
      },
    );
  },
  fn: 'iehtml.resizeobserver.js',
});