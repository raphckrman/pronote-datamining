IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ImgViewer = ImgViewer;
    exports.ImgViewerPortrait = ImgViewerPortrait;
    const tslib_1 = require('tslib');
    const IEHtml_ImgViewer_css_1 = require('@cp/Produit/Css/IEHtml.ImgViewer.css');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetSupport_1 = require('@cp/script/ObjetSupport');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const Tooltip_1 = require('@cp/Produit/Script/Tooltip');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetTraduction_2 = require('@cp/script/ObjetTraduction');
    const FocusTrap_1 = require('@cp/Produit/Script/FocusTrap');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    require('@cp/Produit/Script/IEHtml.Load.Src');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const Divers_1 = require('@librairies/script/Divers/Divers');
    const IEHtml_Load_Src_1 = require('@cp/Produit/Script/IEHtml.Load.Src');
    const TradImgViewer = ObjetTraduction_2.TraductionsModule.getModule(
      'ImgViewer',
      { altImage: '', ouvrirVisionneuse: '' },
    );
    const uSingleton_IdViewer = `id-imgviewer-${GUID_1.GUID.getId()}`;
    let uSingleton_ViewerIsVisible = false;
    let uEstStopPropagation = false;
    const uViewerSurZoom = {
      estZoom: false,
      styleIdViewer: {},
      styleIdArticle: {},
      styleIdViewerImg: {},
    };
    const uIdBandeau = 'Bandeau' + GUID_1.GUID.getId();
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
    let lClientL;
    let lClientH;
    let uState;
    let uFocusPrecedent = null;
    function ImgViewer(_a) {
      var { src } = _a,
        aProps = tslib_1.__rest(_a, ['src']);
      return IE.jsx.str(
        'img',
        Object.assign(
          { [IEHtml_1.IEHtml.attrJsxComp]: 'ImgViewer', ie_load_src: src },
          aProps,
        ),
      );
    }
    function ImgViewerPortrait(_a) {
      var { src, class: classeName } = _a,
        aProps = tslib_1.__rest(_a, ['src', 'class']);
      const lClasses = Array.isArray(classeName)
        ? classeName
        : [classeName || ''];
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        IEHtml_1.IEHtml.getCommentHtmlDebug('<ImgViewerPortrait>'),
        IE.jsx.str(
          'img',
          Object.assign(
            {
              [IEHtml_1.IEHtml.attrJsxComp]: 'ImgViewer',
              ie_load_src: src,
              class: ['img-portrait', ...lClasses],
            },
            aProps,
          ),
        ),
      );
    }
    (function (ImgViewer) {
      ImgViewer.StyleViewerContainer = 'imgviewer-container';
    })(ImgViewer || (exports.ImgViewer = ImgViewer = {}));
    let lIdDescribedBy;
    IEHtml_1.IEHtml.addJsxComponent(
      'ImgViewer',
      (aContexteCourant, aOutils, aNomBalise) => {
        var _a, _b, _c, _d;
        if (aContexteCourant.nodeName !== 'img') {
          return;
        }
        const lEsImgPortait =
          aContexteCourant.node.classList.contains('img-portrait');
        const _e = aOutils.getMapDeNode(aContexteCourant.node),
          {
            src,
            ['ie_load_src']: loadscr,
            alt,
            ['ie_node']: ienode,
            ['ie_eventmap']: ieeventmap,
            ['aria-haspopup']: haspopup,
            crossorigin,
            referrerPolicy,
            viewerimpression,
          } = _e,
          attrs = tslib_1.__rest(_e, [
            'src',
            'ie_load_src',
            'alt',
            'ie_node',
            'ie_eventmap',
            'aria-haspopup',
            'crossorigin',
            'referrerPolicy',
            'viewerimpression',
          ]);
        if (viewerimpression === 'true' || viewerimpression === '') {
          aOutils.addCommentaireDebug(
            aContexteCourant.node,
            `${aNomBalise} > viewerimpression`,
          );
          aContexteCourant.node.removeAttribute('viewerimpression');
          const lSrc = aContexteCourant.node.getAttribute('ie_load_src');
          if (lSrc) {
            aContexteCourant.node.setAttribute('src', lSrc);
            aContexteCourant.node.removeAttribute('ie_load_src');
          }
          aContexteCourant.node.classList.remove(
            IEHtml_ImgViewer_css_1.SIEHtmlImgViewer.ieImgviewer,
          );
          return { node: aContexteCourant.node, avecCompileFils: true };
        }
        const lSrcPortrait =
          (_a = IEHtml_1.IEHtml.outils.getObject('img-portrait')) === null ||
          _a === void 0
            ? void 0
            : _a.srcPortrait;
        if (
          ((_c = (_b = aContexteCourant.node).getAttribute) === null ||
          _c === void 0
            ? void 0
            : _c.call(_b, 'ie_load_src')) === lSrcPortrait
        ) {
          aContexteCourant.node.setAttribute('src', lSrcPortrait);
          aContexteCourant.node.removeAttribute('ie_load_src');
          aOutils.addCommentaireDebug(
            aContexteCourant.node,
            `${aNomBalise} annulé sur portrait`,
          );
          return;
        }
        if (
          !lEsImgPortait &&
          ((_d = aOutils.getObject('ie_load_src')) === null || _d === void 0
            ? void 0
            : _d.imgWithoutSrc(aContexteCourant.node))
        ) {
          aOutils.addCommentaireDebug(
            aContexteCourant.node,
            `!! ${aNomBalise} ignoré sans src !!`,
          );
          return;
        }
        if (!lIdDescribedBy) {
          lIdDescribedBy = GUID_1.GUID.getId();
          ObjetHtml_1.GHtml.addHtml(
            (0, AccessApp_1.getApp)().getIdConteneur(),
            IE.jsx.str(
              'span',
              {
                id: lIdDescribedBy,
                class: Divers_css_1.SD.srOnly,
                'aria-hidden': 'true',
              },
              TradImgViewer.ouvrirVisionneuse,
            ),
          );
        }
        const lDOMConteneur = ObjetHtml_1.GHtml.htmlToDOM(
          IE.jsx.str(
            'div',
            Object.assign(
              {
                role: 'button',
                tabindex: '0',
                'aria-haspopup': haspopup || 'dialog',
                'data-tooltip': Tooltip_1.Tooltip.Type.default,
                'aria-describedby': lIdDescribedBy,
                'data-tooltip-id': lIdDescribedBy,
              },
              attrs,
            ),
            IE.jsx.str('img', {
              src: src,
              ie_load_src: loadscr,
              alt: alt,
              crossorigin: crossorigin,
              referrerPolicy: referrerPolicy,
              ie_node: ienode,
              ie_eventmap: ieeventmap,
            }),
          ),
        );
        const lDOMImage = lDOMConteneur.firstChild;
        $(lDOMConteneur).addClass([
          IEHtml_ImgViewer_css_1.SIEHtmlImgViewer.ieImgviewer,
          IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple,
        ]);
        if (lEsImgPortait) {
          lDOMConteneur.classList.remove('img-portrait');
          lDOMImage.classList.add('img-portrait');
        }
        $(lDOMConteneur).on('validation', (aEvent) => {
          if (lDOMConteneur.getAttribute('aria-disabled') === 'true') {
            return;
          }
          uFocusPrecedent = document.activeElement;
          _ouvrirViewer(lDOMImage, aEvent, true);
          if (ObjetSupport_1.Support.supportEventOnPopState) {
            uState = MethodesObjet_1.MethodesObjet.dupliquer(
              window.history.state,
            );
            window.history.pushState({ popStateViewer: true }, '');
          }
        });
        aOutils.replaceNode(aContexteCourant.node, lDOMConteneur);
        aContexteCourant.node = lDOMConteneur;
        aOutils.addCommentaireDebug(aContexteCourant.node, `${aNomBalise}`);
        return { node: aContexteCourant.node, avecCompileFils: true };
      },
    );
    IEHtml_1.IEHtml.outils.addObject('ImgViewer', {
      detachViewer: detachViewer,
    });
    function detachViewer(aNode) {
      var _a, _b;
      const lParent =
        aNode === null || aNode === void 0 ? void 0 : aNode.parentElement;
      if (
        lParent &&
        ((_a = lParent.getAttribute) === null || _a === void 0
          ? void 0
          : _a.call(lParent, 'aria-disabled')) !== 'true' &&
        ((_b = lParent.classList) === null || _b === void 0
          ? void 0
          : _b.contains(IEHtml_ImgViewer_css_1.SIEHtmlImgViewer.ieImgviewer))
      ) {
        lParent.setAttribute('aria-disabled', 'true');
        lParent.setAttribute('tabindex', '-1');
        lParent.removeAttribute('aria-haspopup');
        lParent.removeAttribute('aria-describedby');
        lParent.removeAttribute('data-tooltip');
      }
    }
    async function _ouvrirViewer(aNode, aEvent, aAvecAnimationOuverture) {
      var _a;
      if (!aNode) {
        return;
      }
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
        const lNodeDiapos = aNode.closest(`.${ImgViewer.StyleViewerContainer}`);
        if (lNodeDiapos) {
          lJImgsNav = $(lNodeDiapos).find(
            `.${IEHtml_ImgViewer_css_1.SIEHtmlImgViewer.ieImgviewer}:not([aria-disabled=true])>img`,
          );
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
        uEstStopPropagation = false;
        const lJsxNode = (aNode) => {
          $(aNode).on({
            validation: () => {
              uEstStopPropagation = true;
            },
            destroyed: () => {
              if (uIdNavGauche) {
                Invocateur_1.Invocateur.desabonner([uIdNavGauche]);
              }
              if (uIdNavDroite) {
                Invocateur_1.Invocateur.desabonner([uIdNavDroite]);
              }
            },
          });
          if (!IE.estMobile) {
            $(aNode)
              .find('img')
              .on({
                'ie-doubletap': () => {
                  if (!uViewerSurZoom.estZoom) {
                    _surEntreeDansModeZoom();
                  } else {
                    _surSortieDuModeZoom();
                  }
                  IEHtml_1.IEHtml.refresh();
                },
              });
          }
          if (lIndicePrec >= 0) {
            if (uIdNavGauche) {
              Invocateur_1.Invocateur.desabonner([uIdNavGauche]);
            }
            uIdNavGauche = Invocateur_1.Invocateur.abonner(
              ObjetNavigateur_1.Navigateur.getEventInvocateur('keyup'),
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
            if (uIdNavDroite) {
              Invocateur_1.Invocateur.desabonner([uIdNavDroite]);
            }
            uIdNavDroite = Invocateur_1.Invocateur.abonner(
              ObjetNavigateur_1.Navigateur.getEventInvocateur('keyup'),
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
        };
        const lJsxNodeImage = (aNode) => {
          $(aNode).on('load', function () {
            this.classList.remove('loading');
            const lNatHeight = this.naturalHeight;
            const lNatWidth = this.naturalWidth;
            const lPourcentEcran = 0.9;
            let lRatio = 0;
            lClientL = ObjetNavigateur_1.Navigateur.clientL;
            lClientH =
              ObjetNavigateur_1.Navigateur.clientH -
              $('#' + uIdBandeau).outerHeight() * 2;
            const lRatioImage = lNatHeight / lNatWidth;
            const lRatioEcran = lClientH / lClientL;
            if (lRatioEcran > lRatioImage) {
              lRatio = (lClientL * lPourcentEcran) / lNatWidth;
            } else {
              lRatio = (lClientH * lPourcentEcran) / lNatHeight;
            }
            lRatio = Math.min(lRatio, 2);
            lHeightDefaut = lNatHeight * lRatio;
            lWidthDefaut = lNatWidth * lRatio;
            $(this).css({ height: lHeightDefaut, width: lWidthDefaut });
            if (IE.estMobile) {
              _surEntreeDansModeZoom();
            }
          });
        };
        const lJsxIfAvecBoutonZoom = () => {
          return !IE.estMobile;
        };
        const lJsxDragImg = () => {
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
        };
        const lJsxEventGlobal = {
          click: (aEvent) => {
            if (!uEstStopPropagation) {
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
            } else {
              uEstStopPropagation = false;
            }
          },
        };
        const lJsxModelBoutonFermer = () => {
          return {
            event: () => {
              _fermerTransition();
            },
            getTitle: () => {
              return 'Fermer';
            },
          };
        };
        const lJsxModelBoutonZoom = (aEstZoomIn) => {
          return {
            event: () => {
              _surActionZoom(aEstZoomIn);
            },
            getDisabled: () => {
              const lJImage = $('#' + uSingleton_IdViewer + ' img');
              const lWidth = lJImage.width() || 0;
              const lHeight = lJImage.height() || 0;
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
          };
        };
        const lJsxModelBoutonNav = (aIndiceNode) => {
          return {
            event: (aEvent) => {
              _ouvrirViewer(lJImgsNav.get(aIndiceNode), aEvent);
              ObjetHtml_1.GHtml.setFocus(aEvent.target.id);
            },
          };
        };
        const lLibelleImage =
          (_a = aNode.getAttribute('alt')) !== null && _a !== void 0 ? _a : '';
        const lHtmlImg = IE.jsx.str('img', {
          src: lUrl,
          class: ['loading'],
          alt: TradImgViewer.altImage,
          'aria-labelledby': uIdTitre,
          ie_node: lJsxNodeImage,
          ie_draggable: !IE.estMobile ? lJsxDragImg : false,
        });
        const lHtmlConteneurImage = IE.estMobile
          ? IE.jsx.str(
              'div',
              {
                class: IEHtml_ImgViewer_css_1.SIEHtmlImgViewer.zoomistContainer,
              },
              IE.jsx.str(
                'div',
                { class: 'zoomist-wrapper' },
                IE.jsx.str(
                  'div',
                  { class: 'conteneur-img zoomist-image' },
                  lHtmlImg,
                ),
              ),
            )
          : IE.jsx.str('div', { class: 'conteneur-img' }, lHtmlImg);
        IEHtml_1.IEHtml.injectHTMLParams({
          element: IEZoneFenetre_1.ZoneFenetre.getElementZoneFenetre(),
          html: IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str(
              'div',
              {
                id: uSingleton_IdViewer,
                class: [
                  IEHtml_ImgViewer_css_1.SIEHtmlImgViewer.ieImgviewerPopup,
                  aAvecAnimationOuverture ? '' : 'active',
                ],
                ie_eventmap: lJsxEventGlobal,
                role: 'dialog',
                'aria-modal': 'true',
              },
              IE.jsx.str(
                FocusTrap_1.FocusTrap,
                { ie_node: lJsxNode },
                IE.jsx.str(
                  'div',
                  { id: uIdBandeau, class: 'BandeauViewer' },
                  IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                    id: uIdBtnZoomIn,
                    ie_model: lJsxModelBoutonZoom.bind(null, true),
                    ie_if: lJsxIfAvecBoutonZoom,
                    class:
                      'icon_zoom_in btn-zoom-viewer zoom-in bt-activable bt-large',
                    title: GlossaireCP_1.TradGlossaireCP.Agrandir,
                  }),
                  IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                    id: uIdBtnZoomOut,
                    ie_model: lJsxModelBoutonZoom.bind(null, false),
                    ie_if: lJsxIfAvecBoutonZoom,
                    class:
                      'icon_zoom_out btn-zoom-viewer zoom-out bt-activable bt-large',
                    title: GlossaireCP_1.TradGlossaireCP.Reduire,
                  }),
                  lIndicePrec >= 0
                    ? IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                        id: uIdBtnPrev,
                        ie_model: lJsxModelBoutonNav.bind(null, lIndicePrec),
                        class:
                          'icon_angle_left btn-carr-viewer prec bt-activable bt-large',
                        title: GlossaireCP_1.TradGlossaireCP.Precedent,
                        tabindex: '0',
                      })
                    : '',
                  IE.jsx.str(
                    'div',
                    {
                      id: uIdTitre,
                      class: 'TitreImage',
                      ie_ellipsis: true,
                      tabindex: '0',
                    },
                    lLibelleImage,
                  ),
                  ' ',
                  lIndiceSuiv >= 0
                    ? IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                        id: uIdBtnNext,
                        ie_model: lJsxModelBoutonNav.bind(null, lIndiceSuiv),
                        class:
                          'icon_angle_right btn-carr-viewer suiv bt-activable bt-large',
                        title: GlossaireCP_1.TradGlossaireCP.Suivant,
                        tabindex: '0',
                      })
                    : '',
                  IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                    id: uIdBtnFermer,
                    ie_model: lJsxModelBoutonFermer,
                    class:
                      'icon_fermeture_widget btn-fermer bt-activable bt-large',
                  }),
                ),
                lHtmlConteneurImage,
              ),
            ),
            IE.jsx.str('div', {
              class: IEHtml_ImgViewer_css_1.SIEHtmlImgViewer.VoileDeFondViewer,
            }),
          ),
        });
        if (aAvecAnimationOuverture) {
          const lElement = ObjetHtml_1.GHtml.getElement(uSingleton_IdViewer);
          lElement === null || lElement === void 0
            ? void 0
            : lElement.offsetWidth;
          lElement === null || lElement === void 0
            ? void 0
            : lElement.classList.add('active');
        }
        const lZoomist = (0, AccessApp_1.getApp)().getGeneric('lib-zoomist');
        if (MethodesObjet_1.MethodesObjet.isFunction(lZoomist)) {
          await lZoomist(
            `.${IEHtml_ImgViewer_css_1.SIEHtmlImgViewer.zoomistContainer}`,
          );
        }
        ObjetHtml_1.GHtml.setFocus(uIdTitre);
      }
    }
    function _getUrlImg(aNode) {
      if (aNode && aNode.getAttribute) {
        let lStrUrl = aNode.getAttribute('src');
        if (!lStrUrl || lStrUrl === IEHtml_Load_Src_1.cDataImageBlank) {
          lStrUrl = aNode.getAttribute('data-src');
        }
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
      let lRatioZoom = 1;
      if (IE.estMobile) {
        const lDecalageBordure = 10;
        const lRatioL = (lClientL - lDecalageBordure) / lWidthDefaut;
        const lRatioH = (lClientH - lDecalageBordure) / lHeightDefaut;
        lRatioZoom = Math.min(lRatioL, lRatioH, 2);
      } else {
        lRatioZoom = 1.5;
      }
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
        (lWidthStart - ObjetNavigateur_1.Navigateur.clientL) / 2;
      $('#' + uSingleton_IdViewer).get(0).scrollTop =
        (lHeightStart - ObjetNavigateur_1.Navigateur.clientH) / 2;
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
        uViewerSurZoom.estZoom = false;
      }
    }
    function _fermer() {
      if (uSingleton_ViewerIsVisible) {
        uSingleton_ViewerIsVisible = false;
        uViewerSurZoom.estZoom = false;
        $(`#${uSingleton_IdViewer}`).remove();
        $(
          `.${IEHtml_ImgViewer_css_1.SIEHtmlImgViewer.VoileDeFondViewer}`,
        ).remove();
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
      const lWidth = lJImage.width() || 0;
      const lHeight = lJImage.height() || 0;
      const lScroll = $('#' + uSingleton_IdViewer).get(0);
      if (!lScroll) {
        return;
      }
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
    Divers_1.DiversLib.abonnerLoadingPage(() => {
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
        if (!IE.estMobile && !uViewerSurZoom.estZoom) {
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