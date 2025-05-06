IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('IEHtml.ImgViewer.css');
    const IEHtml = require('IEHtml');
    const Invocateur_1 = require('Invocateur');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ToucheClavier_1 = require('ToucheClavier');
    const GUID_1 = require('GUID');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const jsx_1 = require('jsx');
    const ObjetSupport_1 = require('ObjetSupport');
    const MethodesObjet_1 = require('MethodesObjet');
    const uSingleton_IdViewer = `id-imgviewer-${GUID_1.GUID.getId()}`;
    let uSingleton_ViewerIsVisible = false;
    const uViewerSurZoom = {
      estZoom: false,
      styleIdViewer: {},
      styleIdArticle: {},
      styleIdViewerImg: {},
      meta: IE.estMobile ? $('meta[name=viewport]').get(0).content : '',
    };
    const uIdBtnZoomIn = 'btnZoomIn' + GUID_1.GUID.getId();
    const uIdBtnZoomOut = 'btnZoomOut' + GUID_1.GUID.getId();
    const uIdBtnNext = 'btnNext' + GUID_1.GUID.getId();
    const uIdBtnPrev = 'btnPrev' + GUID_1.GUID.getId();
    const uIdTitre = 'zoneTitre' + GUID_1.GUID.getId();
    const uIdBtnFermer = 'btnFermer' + GUID_1.GUID.getId();
    let uIdNavGauche;
    let uIdNavDroite;
    let lWidthDefaut;
    let lHeightDefaut;
    let uState;
    let uFocusPrecedent = null;
    IEHtml.addAttribut(
      'ie-imgviewer',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        $(aContexteCourant.node).addClass('ie-imgviewer');
        $(aContexteCourant.node).eventValidation((aEvent) => {
          if (aNodeName !== 'img') {
            return true;
          }
          if (!aContexteCourant.node.classList.contains('ie-imgviewer')) {
            return;
          }
          uFocusPrecedent = document.activeElement;
          if (!IE.estMobile) {
            _ouvrirViewer(aContexteCourant.node, aEvent, true);
          } else {
            window.open(_getUrlImg(aContexteCourant.node));
          }
          if (ObjetSupport_1.Support.supportEventOnPopState) {
            uState = MethodesObjet_1.MethodesObjet.dupliquer(
              window.history.state,
            );
            window.history.pushState({ popStateViewer: true }, '');
          }
        });
        aOutils.addCommentaireDebug(aContexteCourant.node, `ie-imgviewer`);
        return true;
      },
    );
    function _ouvrirViewer(aNode, aEvent, aAvecAnimationOuverture) {
      var _a;
      lWidthDefaut = 0;
      lHeightDefaut = 0;
      const lUrl = _getUrlImg(aNode);
      if (lUrl) {
        if (aEvent) {
          aEvent.stopPropagation();
        }
        _fermer();
        let lIndicePrec = -1;
        let lIndiceSuiv = -1;
        let lJImgsNav;
        const lNodeDiapos = aNode.closest('.ie-imgviewer-container');
        if (lNodeDiapos) {
          lJImgsNav = $(lNodeDiapos).find('img.ie-imgviewer');
          if (lJImgsNav.length > 1) {
            const lIndexImageCourante = lJImgsNav.index(aNode);
            lIndicePrec =
              lIndexImageCourante === 0
                ? lJImgsNav.length - 1
                : lIndexImageCourante - 1;
            lIndiceSuiv =
              lIndexImageCourante >= lJImgsNav.length - 1
                ? 0
                : lIndexImageCourante + 1;
            if (!_getUrlImg(lJImgsNav.get(lIndicePrec))) {
              lIndicePrec = -1;
            }
            if (!_getUrlImg(lJImgsNav.get(lIndiceSuiv))) {
              lIndiceSuiv = -1;
            }
          }
        }
        uSingleton_ViewerIsVisible = true;
        const lControleur = {
          nodeFocus(aNextTab) {
            $(this.node).on('focus', () => {
              const lJQBandeau = $('.BandeauViewer >');
              ObjetHtml_1.GHtml.setFocus(
                aNextTab ? lJQBandeau.first().get(0) : lJQBandeau.last().get(0),
              );
            });
          },
          getNode() {
            $(this.node).on({
              destroyed: () => {
                if (uIdNavGauche) {
                  Invocateur_1.Invocateur.desabonner([uIdNavGauche]);
                }
                if (uIdNavDroite) {
                  Invocateur_1.Invocateur.desabonner([uIdNavDroite]);
                }
              },
              'ie-doubletap': () => {
                if (IE.estMobile) {
                  if (!uViewerSurZoom.estZoom) {
                    _surEntreeDansModeZoom();
                  } else {
                    _surSortieDuModeZoom();
                  }
                  this.controleur.$refreshSelf();
                }
              },
            });
            if (!IE.estMobile) {
              $(this.node)
                .find('img')
                .on({
                  'ie-doubletap': () => {
                    if (!uViewerSurZoom.estZoom) {
                      _surEntreeDansModeZoom();
                    } else {
                      _surSortieDuModeZoom();
                    }
                    this.controleur.$refreshSelf();
                  },
                });
            }
            $(this.node)
              .find('>.VoileDeFondViewer')
              .on('click', (aEvent) => {
                if (
                  !IE.estMobile ||
                  (!uViewerSurZoom.estZoom &&
                    !(
                      aEvent.pointerType !== 'touch' &&
                      (lIndicePrec >= 0 || lIndiceSuiv >= 0)
                    ))
                ) {
                  _fermerTransition();
                }
              });
            if (lIndicePrec >= 0) {
              $(this.node).on('swiperight', () => {
                const lScroll = $('#' + uSingleton_IdViewer).get(0);
                if (lScroll.scrollLeft === 0) {
                  _ouvrirViewer(lJImgsNav.get(lIndicePrec));
                }
              });
              if (uIdNavGauche) {
                Invocateur_1.Invocateur.desabonner([uIdNavGauche]);
              }
              uIdNavGauche = Invocateur_1.Invocateur.abonner(
                GNavigateur.getEventInvocateur('keyup'),
                (aEvent) => {
                  if (
                    !uViewerSurZoom.estZoom &&
                    [ToucheClavier_1.ToucheClavier.FlecheGauche].includes(
                      aEvent.which,
                    )
                  ) {
                    _ouvrirViewer(lJImgsNav.get(lIndicePrec));
                    ObjetHtml_1.GHtml.setFocus(aEvent.target.id);
                  }
                },
              );
            }
            if (lIndiceSuiv >= 0) {
              $(this.node).on('swipeleft', () => {
                const lScroll = $('#' + uSingleton_IdViewer).get(0);
                const lJImage = $('#' + uSingleton_IdViewer + ' img');
                const lWidth = lJImage.width();
                if (
                  lScroll.scrollLeft >=
                  Math.round10(lWidth - GNavigateur.clientL, -1)
                ) {
                  _ouvrirViewer(lJImgsNav.get(lIndiceSuiv));
                }
              });
              if (uIdNavDroite) {
                Invocateur_1.Invocateur.desabonner([uIdNavDroite]);
              }
              uIdNavDroite = Invocateur_1.Invocateur.abonner(
                GNavigateur.getEventInvocateur('keyup'),
                (aEvent) => {
                  if (
                    !uViewerSurZoom.estZoom &&
                    [ToucheClavier_1.ToucheClavier.FlecheDroite].includes(
                      aEvent.which,
                    )
                  ) {
                    _ouvrirViewer(lJImgsNav.get(lIndiceSuiv));
                    ObjetHtml_1.GHtml.setFocus(aEvent.target.id);
                  }
                },
              );
            }
            $(this.node).on('swipedown', () => {
              const lScroll = $('#' + uSingleton_IdViewer).get(0);
              if (lScroll.scrollTop === 0) {
                _fermerTransition();
              }
            });
          },
          nodeImg() {
            $(this.node).on('load', function () {
              this.classList.remove('loading');
              const lNatHeight = this.naturalHeight;
              const lNatWidth = this.naturalWidth;
              const lPourcentEcran = 0.9;
              let lRatio = 0;
              const lClientL =
                GNavigateur.clientL -
                (lIndicePrec >= 0 || lIndiceSuiv >= 0 ? 35 * 2 : 0);
              const lRatioImage = lNatHeight / lNatWidth;
              const lRatioEcran = GNavigateur.clientH / lClientL;
              if (lRatioEcran > lRatioImage) {
                lRatio = (lClientL * lPourcentEcran) / lNatWidth;
              } else {
                lRatio = (GNavigateur.clientH * lPourcentEcran) / lNatHeight;
              }
              lRatio = Math.min(lRatio, 2);
              lHeightDefaut = lNatHeight * lRatio;
              lWidthDefaut = lNatWidth * lRatio;
              $(this).css({ height: lHeightDefaut, width: lWidthDefaut });
              if (IE.estMobile) {
                _surEntreeDansModeZoom();
              }
            });
          },
          avecBandeauViewer() {
            return !IE.estMobile;
          },
          btnFermer: {
            event() {
              _fermerTransition();
            },
            getTitle() {
              return 'Fermer';
            },
          },
          btnNav: {
            event(aIndiceNode, aEvent) {
              _ouvrirViewer(lJImgsNav.get(aIndiceNode), aEvent);
              ObjetHtml_1.GHtml.setFocus(aEvent.target.id);
            },
          },
          btnZoom: {
            event(aEstZoomIn) {
              _surActionZoom(aEstZoomIn);
            },
            getDisabled(aEstZoomIn) {
              const lJImage = $('#' + uSingleton_IdViewer + ' img');
              const lWidth = lJImage.width();
              const lHeight = lJImage.height();
              if (!lWidth || !lWidthDefaut) {
                return !aEstZoomIn;
              }
              return aEstZoomIn
                ? Math.round10(lWidth, -1) >=
                    Math.round10(lWidthDefaut * Math.pow(1.5, 4), -1) ||
                    Math.round10(lHeight, -1) >=
                      Math.round10(lHeightDefaut * Math.pow(1.5, 4), -1)
                : !uViewerSurZoom.estZoom ||
                    Math.round10(lWidth, -1) <=
                      Math.round10(lWidthDefaut, -1) ||
                    Math.round10(lHeight, -1) <=
                      Math.round10(lHeightDefaut, -1);
            },
          },
          dragImg() {
            let lScrollLeftDepart = 0;
            let lScrollTopDepart = 0;
            return {
              start() {
                if (!IE.estMobile && uViewerSurZoom.estZoom) {
                  const lJImage = $('#' + uSingleton_IdViewer + ' img');
                  lJImage.css({ cursor: 'grabbing' });
                  const lScroll = $('#' + uSingleton_IdViewer).get(0);
                  lScrollLeftDepart = lScroll.scrollLeft;
                  lScrollTopDepart = lScroll.scrollTop;
                }
              },
              drag(aParamsDrag) {
                if (!IE.estMobile && uViewerSurZoom.estZoom) {
                  const lScroll = $('#' + uSingleton_IdViewer).get(0);
                  lScroll.scrollLeft = lScrollLeftDepart - aParamsDrag.offset.x;
                  lScroll.scrollTop = lScrollTopDepart - aParamsDrag.offset.y;
                }
              },
              stop() {
                if (!IE.estMobile && uViewerSurZoom.estZoom) {
                  const lJImage = $('#' + uSingleton_IdViewer + ' img');
                  lJImage.css({ cursor: 'grab' });
                }
              },
            };
          },
        };
        const lLibelleImage =
          (_a = aNode.getAttribute('data-libelle')) !== null && _a !== void 0
            ? _a
            : '';
        IEHtml.injectHTMLParams({
          element: IEZoneFenetre_1.ZoneFenetre.getElementZoneFenetre(),
          html: IE.jsx.str(
            'div',
            {
              id: uSingleton_IdViewer,
              class: [
                'ie-imgviewer-popup',
                aAvecAnimationOuverture ? '' : 'active',
              ],
              'ie-node': 'getNode',
              role: 'dialog',
              'aria-modal': 'true',
            },
            IE.jsx.str('div', {
              class: 'sr-only',
              tabindex: '0',
              'aria-hidden': 'true',
              'ie-node': 'nodeFocus(false)',
            }),
            IE.jsx.str('div', {
              class: 'VoileDeFondViewer',
              'aria-hidden': 'true',
            }),
            IE.jsx.str(
              'div',
              { class: 'BandeauViewer', 'ie-if': 'avecBandeauViewer' },
              IE.jsx.str('ie-btnicon', {
                id: uIdBtnZoomIn,
                'ie-model': (0, jsx_1.jsxFuncAttr)('btnZoom', [true]),
                class:
                  'icon_zoom_in btn-zoom-viewer zoom-in bt-activable bt-large',
                title: 'Agrandir',
              }),
              IE.jsx.str('ie-btnicon', {
                id: uIdBtnZoomOut,
                'ie-model': (0, jsx_1.jsxFuncAttr)('btnZoom', [false]),
                class:
                  'icon_zoom_out btn-zoom-viewer zoom-out bt-activable bt-large',
                title: 'Réduire',
              }),
              lIndicePrec >= 0
                ? IE.jsx.str('ie-btnicon', {
                    id: uIdBtnPrev,
                    'ie-model': (0, jsx_1.jsxFuncAttr)('btnNav', [lIndicePrec]),
                    class:
                      'icon_angle_left btn-carr-viewer prec bt-activable bt-large',
                    title:
                      'Précédent',
                    tabindex: '0',
                  })
                : '',
              IE.jsx.str(
                'div',
                {
                  id: uIdTitre,
                  class: 'TitreImage',
                  'ie-ellipsis': true,
                  tabindex: '0',
                },
                lLibelleImage,
              ),
              lIndiceSuiv >= 0
                ? IE.jsx.str('ie-btnicon', {
                    id: uIdBtnNext,
                    'ie-model': (0, jsx_1.jsxFuncAttr)('btnNav', [lIndiceSuiv]),
                    class:
                      'icon_angle_right btn-carr-viewer suiv bt-activable bt-large',
                    title: 'Suivant',
                    tabindex: '0',
                  })
                : '',
              IE.jsx.str('ie-btnicon', {
                id: uIdBtnFermer,
                'ie-model': 'btnFermer',
                class: 'icon_fermeture_widget btn-fermer bt-activable bt-large',
              }),
            ),
            IE.jsx.str(
              'div',
              { class: 'conteneur-img' },
              IE.jsx.str('img', {
                src: lUrl,
                class: ['AvecMenuContextuel', 'loading'],
                alt: 'Visionneuse d'image',
                'aria-labelledby': uIdTitre,
                'ie-node': 'nodeImg',
                'ie-draggable': !IE.estMobile ? 'dragImg' : false,
              }),
            ),
            IE.jsx.str('div', {
              class: 'sr-only',
              tabindex: '0',
              'aria-hidden': 'true',
              'ie-node': 'nodeFocus(true)',
            }),
          ),
          controleur: lControleur,
        });
        if (aAvecAnimationOuverture) {
          const lElement = ObjetHtml_1.GHtml.getElement(uSingleton_IdViewer);
          lElement.offsetWidth;
          lElement.classList.add('active');
        }
        if (!IE.estMobile) {
          ObjetHtml_1.GHtml.setFocus(uIdTitre);
        } else {
          _surEntreeDansModeZoom();
        }
      }
    }
    function _getUrlImg(aNode) {
      if (aNode && aNode.getAttribute) {
        let lStrUrl =
          aNode.getAttribute('src') || aNode.getAttribute('data-src');
        if (lStrUrl) {
          try {
            let lUrl = new URL(lStrUrl, location);
            lUrl.searchParams.delete('miniature');
            return lUrl.toString();
          } catch (e) {
            return lStrUrl;
          }
        }
      }
    }
    function _surEntreeDansModeZoom() {
      let lStyle = $('#' + uSingleton_IdViewer).get(0).style;
      uViewerSurZoom.styleIdViewer = {
        overflow: lStyle.overflow,
        display: lStyle.display,
      };
      lStyle = $('#' + uSingleton_IdViewer + ' .conteneur-img').get(0).style;
      uViewerSurZoom.styleIdArticle = {
        'min-height': lStyle.minHeight,
        'min-width': lStyle.minWidth,
      };
      lStyle = $('#' + uSingleton_IdViewer + ' img').get(0).style;
      uViewerSurZoom.styleIdViewerImg = {
        width: lStyle.width,
        height: lStyle.height,
        'max-width': lStyle.maxWidth,
        position: lStyle.position,
        margin: lStyle.margin,
        cursor: lStyle.cursor,
      };
      const lRatioZoom = IE.estMobile ? 1.25 : 1.5;
      const lWidthStart = lWidthDefaut * lRatioZoom;
      const lHeightStart = lHeightDefaut * lRatioZoom;
      $('#' + uSingleton_IdViewer).css({
        overflow: 'scroll',
        display: 'inline-block',
      });
      $('#' + uSingleton_IdViewer + ' .conteneur-img').css({
        'min-height': '100%',
        'min-width': '100%',
      });
      $('#' + uSingleton_IdViewer + ' img').css({
        width: lWidthStart + 'px',
        height: lHeightStart + 'px',
        'max-width': 'none',
        position: 'relative',
        margin: 'auto',
        cursor: 'grab',
      });
      $('#' + uSingleton_IdViewer).get(0).scrollLeft =
        (lWidthStart - GNavigateur.clientL) / 2;
      $('#' + uSingleton_IdViewer).get(0).scrollTop =
        (lHeightStart - GNavigateur.clientH) / 2;
      if (IE.estMobile) {
        $('meta[name=viewport]').get(0).content = 'width=device-width';
      }
      uViewerSurZoom.estZoom = true;
    }
    function _surSortieDuModeZoom() {
      if (IE.estMobile) {
        _fermerTransition();
      } else {
        $('#' + uSingleton_IdViewer).css(uViewerSurZoom.styleIdViewer);
        $('#' + uSingleton_IdViewer + ' .conteneur-img').css(
          uViewerSurZoom.styleIdArticle,
        );
        $('#' + uSingleton_IdViewer + ' img').css(
          uViewerSurZoom.styleIdViewerImg,
        );
        $('#' + uSingleton_IdViewer + ' > .VoileDeFondViewer').show();
        uViewerSurZoom.estZoom = false;
      }
    }
    function _fermer() {
      if (uSingleton_ViewerIsVisible) {
        uSingleton_ViewerIsVisible = false;
        uViewerSurZoom.estZoom = false;
        $(`#${uSingleton_IdViewer}`).remove();
      }
      if (IE.estMobile) {
        $('meta[name=viewport]').get(0).content = uViewerSurZoom.meta;
      }
      $(window).off('popstate.imgviewer');
      if (uState) {
        window.history.replaceState(uState, '');
      }
    }
    function _fermerTransition() {
      if (uSingleton_ViewerIsVisible) {
        $(`#${uSingleton_IdViewer}`)
          .removeClass('active')
          .on('transitionend', () => {
            _fermer();
            if (
              (uFocusPrecedent === null || uFocusPrecedent === void 0
                ? void 0
                : uFocusPrecedent.focus) &&
              $(uFocusPrecedent).length === 1
            ) {
              uFocusPrecedent.focus();
              uFocusPrecedent = null;
            }
          });
      }
    }
    function _surActionZoom(aEstZoomIn) {
      const lJImage = $('#' + uSingleton_IdViewer + ' img');
      const lWidth = lJImage.width();
      const lHeight = lJImage.height();
      const lScroll = $('#' + uSingleton_IdViewer).get(0);
      let lNewWidth = 0;
      let lNewHeight = 0;
      if (aEstZoomIn) {
        if (uViewerSurZoom.estZoom) {
          lNewWidth = lWidth * 1.5;
          lNewHeight = lHeight * 1.5;
          lJImage.width(lNewWidth);
          lJImage.height(lNewHeight);
          lScroll.scrollLeft += (lNewWidth - lWidth) / 2;
          lScroll.scrollTop += (lNewHeight - lHeight) / 2;
        } else {
          _surEntreeDansModeZoom();
        }
      } else {
        lNewWidth = lWidth / 1.5;
        lNewHeight = lHeight / 1.5;
        if (
          Math.round10(lNewWidth, -1) === Math.round10(lWidthDefaut, -1) &&
          Math.round10(lNewHeight, -1) === Math.round10(lHeightDefaut, -1)
        ) {
          _surSortieDuModeZoom();
        } else {
          lJImage.width(lNewWidth);
          lJImage.height(lNewHeight);
          lScroll.scrollLeft += (lNewWidth - lWidth) / 2;
          lScroll.scrollTop += (lNewHeight - lHeight) / 2;
        }
      }
    }
    $(document).ready(() => {
      $(document).on('keydown.imgviewer', (aEvent) => {
        if (uSingleton_ViewerIsVisible) {
          if (
            [
              ToucheClavier_1.ToucheClavier.Espace,
              ToucheClavier_1.ToucheClavier.RetourChariot,
            ].includes(aEvent.which)
          ) {
            if (
              ![uIdBtnZoomIn, uIdBtnZoomOut, uIdBtnNext, uIdBtnPrev].includes(
                aEvent.target.id,
              )
            ) {
              _fermerTransition();
            }
          }
          if ([ToucheClavier_1.ToucheClavier.Echap].includes(aEvent.which)) {
            _fermerTransition();
          }
        }
      });
      $(window).on('scroll.imgviewer resize.imgviewer', () => {
        if (!IE.estMobile || !uViewerSurZoom.estZoom) {
          _fermerTransition();
        }
      });
    });
    $(window).on('popstate.imgviewer', (event) => {
      event.preventDefault();
      _fermerTransition();
    });
    Invocateur_1.Invocateur.abonner('surAffichageFenetre', () => {
      _fermerTransition();
    });
    Invocateur_1.Invocateur.abonner(
      Invocateur_1.ObjetInvocateur.events.fermerFenetres,
      () => {
        _fermerTransition();
      },
    );
  },
  fn: 'iehtml.imgviewer.js',
});