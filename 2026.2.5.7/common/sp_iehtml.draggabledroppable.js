IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SIEHtmlDraggableDroppableSelecteur = void 0;
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const IEHtml_DraggableDroppable_css_1 = require('@cp/Produit/Css/IEHtml.DraggableDroppable.css');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    const u_invocateur_dragdrop = new Invocateur_1.ObjetInvocateur();
    exports.SIEHtmlDraggableDroppableSelecteur = {
      ieDraggableHandleCancel: 'ie-draggable-handle-cancel',
    };
    IEHtml_1.IEHtml.addAttribut(
      'ie_draggable',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        const lInfos = aOutils.getAccesParametres(
          aAttributValue,
          aAttrName,
          aContexteCourant,
        );
        if (!aAttributValue || !lInfos.estFonction) {
          return true;
        }
        const lParams = Object.assign(
          {
            start: null,
            drag: null,
            stop: null,
            distanceStart: 0,
            containment: document.body,
            avecDrop: false,
          },
          lInfos.callback([aContexteCourant.node]),
        );
        _drag(aContexteCourant, lParams);
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie_draggable="' + (lInfos.nomCommentaire || aAttributValue) + '"',
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_draggable_fantome',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        const lInfos = aOutils.getAccesParametres(
          aAttributValue,
          aAttrName,
          aContexteCourant,
        );
        if (!aAttributValue || !lInfos.estFonction) {
          return true;
        }
        const lParams = {
          start: undefined,
          drag: undefined,
          stop: undefined,
          containment: document.body,
          getIdZone: undefined,
          distanceStart: 5,
          avecDrop: true,
        };
        const lParamsInfos = lInfos.callback([aContexteCourant.node]);
        Object.assign(lParams, lParamsInfos, {
          start(aParamsDrag) {
            const lData = { libelle: '' };
            aParamsDrag.data = lData;
            let lResult = lParamsInfos.start(aParamsDrag);
            if (lResult === false) {
              return lResult;
            }
            const lJConteneur = $(
              IEZoneFenetre_1.ZoneFenetre.getElementZoneFenetre(),
            );
            lJConteneur.find('>.FantomeDraggable').remove();
            const lGetHtmlFantome = () => {
              const lHtml = lData.libelle || '';
              let lSupp = '';
              if (lData.getHtmlDetailsDraggable) {
                lSupp = lData.getHtmlDetailsDraggable(lData);
              } else if (lData.horsZoneSuppression) {
                lSupp = IE.jsx.str(
                  IE.jsx.fragment,
                  null,
                  IE.jsx.str('i', {
                    class: 'icon_remove',
                    style: 'font-size:15px; color:red;',
                    role: 'presentation',
                  }),
                  IE.jsx.str(
                    'label',
                    null,
                    GlossaireCP_1.TradGlossaireCP.Supprimer,
                  ),
                );
              }
              return IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str('div', { class: 'draggable-libelle' }, lHtml),
                lSupp
                  ? IE.jsx.str('div', { class: 'draggable_details' }, lSupp)
                  : '',
              );
            };
            IEHtml_1.IEHtml.injectHTMLParams({
              element: lJConteneur.get(0),
              html: IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str(
                  'div',
                  { class: 'FantomeDraggable' },
                  IE.jsx.str('div', {
                    class: 'draggable',
                    ie_html: lGetHtmlFantome,
                  }),
                  IE.jsx.str('div', { class: 'overlay' }),
                ),
              ),
            });
            aParamsDrag.data.jDraggable = lJConteneur.find(
              '>.FantomeDraggable>.draggable',
            );
            return lResult;
          },
          drag: function (aParamsDrag, aEvent) {
            const lIdZone = lParamsInfos.getIdZone
              ? lParamsInfos.getIdZone()
              : null;
            aParamsDrag.horsZone = lIdZone
              ? !ObjetPosition_1.GPosition.positionDansZone(
                  aParamsDrag.pos,
                  lIdZone,
                )
              : false;
            if (lParamsInfos.drag) {
              lParamsInfos.drag(aParamsDrag, aEvent);
              IEHtml_1.IEHtml.refresh();
            }
            let lTop = Math.max(
              aParamsDrag.rectContrainte.top,
              aParamsDrag.pos.y - 10,
            );
            let lLeft = Math.max(
              aParamsDrag.rectContrainte.left,
              aParamsDrag.pos.x - 15,
            );
            let lRectDraggable = null;
            aParamsDrag.data.jDraggable
              .find('.draggable-libelle, .draggable_details')
              .each(function () {
                const lRectChild =
                  ObjetPosition_1.GPosition.getClientRect(this);
                if (!lRectDraggable) {
                  lRectDraggable = lRectChild;
                } else {
                  lRectDraggable.left = Math.min(
                    lRectDraggable.left,
                    lRectChild.left,
                  );
                  lRectDraggable.top = Math.min(
                    lRectDraggable.top,
                    lRectChild.top,
                  );
                  lRectDraggable.right = Math.max(
                    lRectDraggable.right,
                    lRectChild.right,
                  );
                  lRectDraggable.bottom = Math.max(
                    lRectDraggable.bottom,
                    lRectChild.bottom,
                  );
                }
              });
            lLeft = Math.min(
              lLeft,
              aParamsDrag.rectContrainte.left +
                aParamsDrag.rectContrainte.width -
                (lRectDraggable.right - lRectDraggable.left),
            );
            lTop = Math.min(
              lTop,
              aParamsDrag.rectContrainte.top +
                aParamsDrag.rectContrainte.height -
                (lRectDraggable.bottom - lRectDraggable.top),
            );
            aParamsDrag.data.jDraggable.css({ left: lLeft, top: lTop });
            const lElement = aParamsDrag.data.jDraggable.get(0);
            aParamsDrag.scrollIntoViewSurNode(lElement);
          },
          stop: function (aParamsDrag, aEvent) {
            try {
              if (lParamsInfos.stop) {
                const lIdZone = lParamsInfos.getIdZone
                  ? lParamsInfos.getIdZone()
                  : null;
                aParamsDrag.horsZone = lIdZone
                  ? !ObjetPosition_1.GPosition.positionDansZone(
                      aParamsDrag.pos,
                      lIdZone,
                    )
                  : false;
                lParamsInfos.stop(aParamsDrag, aEvent);
                IEHtml_1.IEHtml.refresh();
              }
            } finally {
              $(IEZoneFenetre_1.ZoneFenetre.getElementZoneFenetre())
                .find(`>.FantomeDraggable`)
                .remove();
            }
          },
        });
        _drag(aContexteCourant, lParams);
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie_draggable_fantome="' +
            (lInfos.nomCommentaire || aAttributValue) +
            '"',
        );
        return true;
      },
    );
    function _drag(aContexteCourant, aParams) {
      let lDrag = null;
      let lDetach;
      const lOnMove = (aEvent) => {
        const lEventTouch = aEvent;
        if (
          lDrag &&
          lDrag.touch &&
          lEventTouch &&
          lEventTouch.originalEvent &&
          lEventTouch.originalEvent.changedTouches &&
          lEventTouch.originalEvent.changedTouches.length > 0
        ) {
          if (lDrag.identifierTouchMove < 0) {
            lDrag.identifierTouchMove =
              lEventTouch.originalEvent.changedTouches[0].identifier;
          } else if (
            lDrag.identifierTouchMove !==
            lEventTouch.originalEvent.changedTouches[0].identifier
          ) {
            return false;
          }
        }
        if (!lDrag || (!aEvent.which && !lDrag.touch)) {
          lOnStop(aEvent);
          return false;
        }
        let lContainment;
        if (
          aParams.containment &&
          MethodesObjet_1.MethodesObjet.isFunction(aParams.containment)
        ) {
          lContainment = aParams.containment(lDrag.node);
        } else {
          lContainment = aParams.containment;
        }
        lDrag.rectContrainte = lContainment
          ? ObjetPosition_1.GPosition.getClientRect(lContainment)
          : null;
        lDrag.pos = ObjetPosition_1.GPosition.getPositionEventJQuery(aEvent);
        if (lDrag.rectContrainte) {
          lDrag.pos.x = Math.max(
            lDrag.rectContrainte.left,
            Math.min(
              lDrag.rectContrainte.left + lDrag.rectContrainte.width,
              lDrag.pos.x,
            ),
          );
          lDrag.pos.y = Math.max(
            lDrag.rectContrainte.top,
            Math.min(
              lDrag.rectContrainte.top + lDrag.rectContrainte.height,
              lDrag.pos.y,
            ),
          );
        }
        lDrag.offset.x = lDrag.pos.x - lDrag.posStart.x;
        lDrag.offset.y = lDrag.pos.y - lDrag.posStart.y;
        let lResult = true;
        try {
          if (!lDrag._started) {
            if (
              aParams.distanceStart > 0 &&
              aParams.distanceStart >
                Math.max(Math.abs(lDrag.offset.x), Math.abs(lDrag.offset.y))
            ) {
              return false;
            }
            if (aParams.start) {
              if (aParams.start(lDrag) === false) {
                lDetach();
                lDrag = null;
                return false;
              }
            }
            lDrag._started = true;
            if (aParams.avecDrop) {
              u_invocateur_dragdrop.evenement('start-drag', lDrag);
            }
          }
          if (aParams.drag) {
            aParams.drag(lDrag, aEvent);
          }
          if (aParams.avecDrop) {
            u_invocateur_dragdrop.evenement('move-drag', lDrag);
          }
          lResult = false;
        } catch (e) {
          lDetach();
          lDrag = null;
        }
        return lDrag && lDrag.touch ? true : lResult;
      };
      const lOnStop = (aEvent) => {
        if (lDrag && lDrag.touch && aEvent) {
          const lEvent = aEvent;
          if (
            lEvent.originalEvent &&
            lEvent.originalEvent.changedTouches &&
            lEvent.originalEvent.changedTouches.length > 0 &&
            lDrag.identifierTouchMove >= 0 &&
            lDrag.identifierTouchMove !==
              lEvent.originalEvent.changedTouches[0].identifier
          ) {
            return;
          }
        }
        const lDragTemp = lDrag;
        lDrag = null;
        lDetach();
        if (lDragTemp && lDragTemp._started) {
          if (aParams.avecDrop) {
            u_invocateur_dragdrop.evenement('stop-drag', lDragTemp);
          }
          if (aParams.stop) {
            try {
              aParams.stop(lDragTemp, aEvent);
            } catch (e) {}
          }
        }
      };
      lDetach = () => {
        $(document).off('touchmove.iedrag mousemove.iedrag', lOnMove);
        if (lDrag) {
          $(document).off(
            'touchend.iedrag touchcancel.iedrag mouseup.iedrag',
            lOnStop,
          );
        }
      };
      $(aContexteCourant.node).on({
        pointerdown(aEvent) {
          const lEstTouch = aEvent.pointerType === 'touch';
          if (lDrag) {
            if (lDrag.pointerId !== aEvent.pointerId) {
              return;
            }
            lOnStop(aEvent);
          }
          lDrag = {
            node: this,
            pointerId: aEvent.pointerId,
            identifierTouchMove: -1,
            rect: ObjetPosition_1.GPosition.getClientRect(this),
            posStart: ObjetPosition_1.GPosition.getPositionEventJQuery(aEvent),
            touch: lEstTouch,
            offset: { x: 0, y: 0 },
            rectContrainte: null,
            scrollIntoViewSurNode(aNode) {
              if (aNode && aNode.scrollIntoView) {
                aNode.scrollIntoView({ block: 'nearest', inline: 'nearest' });
              }
            },
          };
          lDetach();
          $(document).on({
            [lEstTouch ? 'touchmove.iedrag' : 'mousemove.iedrag']: lOnMove,
            [lEstTouch
              ? 'touchend.iedrag touchcancel.iedrag'
              : 'mouseup.iedrag']: lOnStop,
          });
        },
        dragstart() {
          return false;
        },
        destroyed() {
          lOnStop();
        },
      });
      if (!aParams.autoriserEventMove) {
        $(aContexteCourant.node).addClass(
          IEHtml_DraggableDroppable_css_1.SIEHtmlDraggableDroppable
            .ieDraggableHandle,
        );
      }
    }
    IEHtml_1.IEHtml.addAttribut(
      'ie_droppable',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        const lInfos = aOutils.getAccesParametres(
          aAttributValue,
          aAttrName,
          aContexteCourant,
        );
        if (!aAttributValue || !lInfos.estFonction) {
          return true;
        }
        const lParams = Object.assign(
          {
            accept: null,
            activate: null,
            deactivate: null,
            drop: null,
            over: null,
            out: null,
          },
          lInfos.callback([aContexteCourant.node]),
        );
        let lFuncDetach = null;
        let lObjetDrop = null;
        const lFuncMove = function () {
          if (lObjetDrop && lObjetDrop.drag) {
            const lEstDansZone = !!ObjetPosition_1.GPosition.positionDansZone(
              lObjetDrop.drag.pos,
              aContexteCourant.node,
            );
            if (lObjetDrop.hoverDrop !== lEstDansZone) {
              lObjetDrop.hoverDrop = lEstDansZone;
              if (lObjetDrop.hoverDrop) {
                $(aContexteCourant.node).addClass('ie_droppable-hover');
                if (lParams.over) {
                  lParams.over(lObjetDrop);
                }
              } else {
                $(aContexteCourant.node).removeClass('ie_droppable-hover');
                if (lParams.out) {
                  lParams.out(lObjetDrop);
                }
              }
            }
          }
        };
        const lFuncEnd = () => {
          const lDropTemp = lObjetDrop;
          lObjetDrop = null;
          if (lDropTemp) {
            lFuncDetach();
            $(aContexteCourant.node).removeClass(
              'ie_droppable-active ie_droppable-hover',
            );
            if (lDropTemp.hoverDrop) {
              lDropTemp.drag.isDropped = true;
              if (lParams.drop) {
                lParams.drop(lDropTemp);
              }
            }
            if (lParams.deactivate) {
              lParams.deactivate(lDropTemp);
            }
          }
        };
        lFuncDetach = () => {
          u_invocateur_dragdrop.desabonner(`stop-drag`, lFuncEnd);
          u_invocateur_dragdrop.desabonner(`move-drag`, lFuncMove);
        };
        const lFuncStart = (aParamsDrag) => {
          lObjetDrop = {
            drag: aParamsDrag,
            drop: { node: aContexteCourant.node },
            hoverDrop: false,
          };
          if (lParams.accept && !lParams.accept(lObjetDrop)) {
            lObjetDrop = null;
            return;
          }
          lFuncDetach();
          u_invocateur_dragdrop.abonner(`stop-drag`, lFuncEnd);
          u_invocateur_dragdrop.abonner(`move-drag`, lFuncMove);
          $(aContexteCourant.node).addClass('ie_droppable-active');
          if (lParams.activate) {
            lParams.activate(lObjetDrop);
          }
          lFuncMove();
        };
        u_invocateur_dragdrop.abonner(`start-drag`, lFuncStart);
        $(aContexteCourant.node)
          .on('destroyed', () => {
            lObjetDrop = null;
            u_invocateur_dragdrop.desabonner(`start-drag`, lFuncStart);
            lFuncDetach();
          })
          .addClass('ie_droppable');
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie_droppable="' + (lInfos.nomCommentaire || aAttributValue) + '"',
        );
        return true;
      },
    );
  },
  fn: 'iehtml.draggabledroppable.js',
});