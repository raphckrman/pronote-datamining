IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const ToucheClavier_1 = require('ToucheClavier');
    const ObjetWAI_1 = require('ObjetWAI');
    IEHtml.addAttribut(
      'ie-zonenavigation',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        const lParams = {
          returnNavNode(aNode) {
            $(aNode).focus();
          },
          retourNavigationDefaut: null,
          nodeBackup: null,
        };
        if (aAttributValue) {
          const lInfos = aOutils.getAccesParametres(
            aAttributValue,
            aAttrName,
            aContexteCourant,
          );
          if (!lInfos.estFonction) {
            return true;
          }
          Object.assign(lParams, lInfos.callback([aContexteCourant.node]));
        }
        if (!lParams) {
          return true;
        }
        $(aContexteCourant.node)
          .data('ie-zonenavigation', lParams)
          .addClass('ie-zonenavigation')
          .on({
            keyup(aEvent) {
              if (
                aEvent.which ===
                ToucheClavier_1.ToucheClavierUtil.ToucheRetourNavigation
              ) {
                const lPreviousZone =
                  ObjetWAI_1.GObjetWAI.getNodeRechercheNavigation(
                    $(document).find('.ie-zonenavigation').toArray(),
                    aContexteCourant.node,
                    ObjetWAI_1.ObjetWAI.ModeRechercheNavigation.prev,
                  );
                if (lPreviousZone) {
                  const lParamsPrevious =
                    $(lPreviousZone).data('ie-zonenavigation');
                  if (lParamsPrevious) {
                    if (
                      lParamsPrevious.nodeBackup &&
                      lParamsPrevious.returnNavNode &&
                      $(lPreviousZone).find(lParamsPrevious.nodeBackup).length >
                        0
                    ) {
                      lParamsPrevious.returnNavNode(lParamsPrevious.nodeBackup);
                      return;
                    }
                    if (lParamsPrevious.retourNavigationDefaut) {
                      lParamsPrevious.retourNavigationDefaut();
                      return;
                    }
                  } else {
                  }
                }
              }
            },
            focusout(aEvent) {
              lParams.nodeBackup = aEvent.target;
            },
          });
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          aAttributValue
            ? `ie-zonenavigation="${aAttributValue}"`
            : 'ie-zonenavigation',
        );
        return true;
      },
    );
  },
  fn: 'iehtml.zonenavigation.js',
});