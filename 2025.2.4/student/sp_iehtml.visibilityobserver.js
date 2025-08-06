IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const c_id_attribut_nodeVisibility = 'ie-visibility-observer';
    let uObserver_ie_node_visibility = null;
    try {
      uObserver_ie_node_visibility = new IntersectionObserver(
        (aObservables) => {
          for (const lObservable of aObservables) {
            if (lObservable && lObservable.target) {
              const lCallbackChange = $(lObservable.target).data(
                c_id_attribut_nodeVisibility,
              );
              if (lCallbackChange) {
                const lVisible =
                  lObservable.intersectionRatio > 0 ||
                  lObservable.isIntersecting;
                lCallbackChange(lVisible);
              }
            }
          }
        },
      );
    } catch (e) {
      uObserver_ie_node_visibility = null;
    }
    IEHtml.addAttribut(
      c_id_attribut_nodeVisibility,
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
          const lCallback = (aVisible) => {
            if (
              lInfos.callback([aVisible, aContexteCourant.node, ...aParams]) ===
              false
            ) {
              $(aContexteCourant.node).data(c_id_attribut_nodeVisibility, null);
              uObserver_ie_node_visibility.unobserve(aContexteCourant.node);
            }
          };
          if (uObserver_ie_node_visibility) {
            $(aContexteCourant.node).data(
              c_id_attribut_nodeVisibility,
              lCallback,
            );
            uObserver_ie_node_visibility.observe(aContexteCourant.node);
            $(aContexteCourant.node).on(
              `destroyed.${c_id_attribut_nodeVisibility}`,
              () => {
                uObserver_ie_node_visibility.unobserve(aContexteCourant.node);
              },
            );
          } else {
            lCallback(true);
          }
        });
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `${c_id_attribut_nodeVisibility}="${lValue}"`,
        );
        return true;
      },
    );
  },
  fn: 'iehtml.visibilityobserver.js',
});