IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SIEHtmlComposants = void 0;
    const tslib_1 = require('tslib');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    require('@cp/Produit/Script/IEHtml.Load.Src');
    require('@cp/Produit/Script/IEHtml.AutoResize');
    require('@cp/Produit/Script/IEHtml.Collapsible');
    require('@cp/Produit/Script/IEHtml.VisibilityObserver');
    require('@cp/Produit/Script/IEHtml.ResizeObserver');
    require('@cp/Produit/Script/IEHtml.Ripple');
    require('@cp/Produit/Script/IEHtml.DraggableDroppable');
    require('@cp/Produit/Script/IEHtml.BtnImage');
    require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    require('@cp/Produit/Script/IEHtml.Identite');
    require('@cp/Espace/Script/IEHtml.Combo');
    require('@cp/Produit/Script/IEHtml.Bouton');
    require('@cp/Produit/Script/IEHtml.SelecFile');
    require('@cp/Produit/Script/IEHtml.TextareaMax');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const Tooltip_1 = require('@cp/Produit/Script/Tooltip');
    exports.SIEHtmlComposants = { ellipsisCancelTitle: 'ellipsisCancelTitle' };
    IEHtml_1.IEHtml.addAttribut(
      'ie_node',
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
        aOutils.abonneNodeEtNodeAfter(lInfos, null, aContexteCourant);
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `${aAttrName}="${lInfos.nomCommentaire || lValue}"${aContexteCourant.contexte.modeImpression ? ' <<modeImpression>>' : ''}`,
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_nodeafter',
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
        aOutils.abonneNodeEtNodeAfter(null, lInfos, aContexteCourant);
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie_nodeafter="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_eventmap',
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
        const lMap = lInfos.callback([aContexteCourant.node]);
        const lMapJQuery = {};
        Object.keys(lMap).forEach((aKey) => {
          if (lMap[aKey] && aKey !== 'name') {
            if (
              aContexteCourant.contexte.modeImpression &&
              aKey !== 'destroyed'
            ) {
              return;
            }
            lMapJQuery[aKey] = function (aEvent, ...aRest) {
              return lMap[aKey].call(this, aEvent, this, ...aRest);
            };
          }
        });
        const lKeys = Object.keys(lMapJQuery);
        if (lKeys.length > 0) {
          aOutils.surInjectionHtml(aContexteCourant, () => {
            $(aContexteCourant.node).on(lMapJQuery);
          });
        }
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `${aAttrName + (lMap.name ? `<"${lMap.name}">` : '')}="${lKeys.join(', ')}"`,
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_eventout',
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
        aOutils.surInjectionHtml(aContexteCourant, () => {
          const lSelec = 'pointerdown.eventout keydown.eventout';
          function _event(aEvent, ...aParams) {
            if (
              aContexteCourant.node !== aEvent.target &&
              (aEvent.isTrigger ||
                !ObjetHtml_1.GHtml.estDocument(aEvent.target)) &&
              !$.contains(aContexteCourant.node, aEvent.target)
            ) {
              const lResult = lInfos.callback([aEvent, aContexteCourant.node]);
              if (lResult && lResult.nodesExclus && lResult.callback) {
                if (
                  !lResult.nodesExclus.every ||
                  lResult.nodesExclus.every((aNode) => {
                    return (
                      !aNode ||
                      (aNode !== aEvent.target &&
                        !$.contains(aNode, aEvent.target))
                    );
                  })
                ) {
                  lResult.callback();
                }
              }
            }
          }
          $(aContexteCourant.node).on('destroyed', () => {
            $(document).off(lSelec, _event);
          });
          $(document).on(lSelec, _event);
        });
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie_eventout="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_html',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aParametresCompile,
        aAttrName,
      ) => {
        let lValue = aAttributValue || '';
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
        const lNodeDestination = aOutils.addGetterHtml(
          aContexteCourant,
          lInfos,
        );
        if (!lNodeDestination) {
          return;
        }
        aOutils.addCommentaireDebug(
          lNodeDestination,
          `${aAttrName}="${lInfos.nomCommentaire || lValue}"`,
        );
        aParametresCompile.avecCompileFils = false;
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_texte',
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
        const lNodeDestination =
          aContexteCourant.nodeTransfertContenuDynamique ||
          aContexteCourant.node;
        const lGetter = function () {
          const lResult = lInfos.callback([
            aContexteCourant.node,
            lNodeDestination,
            aContexteCourant.data,
          ]);
          if (MethodesObjet_1.MethodesObjet.isNumber(lResult)) {
            return lResult + '';
          }
          return (lResult || '') + '';
        };
        let lOldTexte = lGetter();
        $(lNodeDestination).ieHtml('');
        lNodeDestination.appendChild(document.createTextNode(lOldTexte));
        aOutils.abonnerRefresh(
          () => {
            const lTexte = lGetter();
            if (lTexte !== lOldTexte) {
              lOldTexte = lTexte;
              $(lNodeDestination).ieHtml('');
              lNodeDestination.appendChild(document.createTextNode(lTexte));
            }
          },
          lNodeDestination,
          aContexteCourant,
        );
        aOutils.addCommentaireDebug(
          lNodeDestination,
          'ie_texte="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_style',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        let lValue = aAttributValue || '';
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
        const lGetter = function () {
          const lStyle =
            lInfos.callback([aContexteCourant.node, aContexteCourant.data]) ||
            null;
          return lStyle || {};
        };
        let lObjetCss = lGetter();
        const lJNode = $(aContexteCourant.node);
        if (!lObjetCss) {
          return;
        }
        lJNode.css(lObjetCss);
        aOutils.abonnerRefresh(
          () => {
            const lNewStyleCss = lGetter();
            if (
              !MethodesObjet_1.MethodesObjet.objetsIdentiques(
                lNewStyleCss,
                lObjetCss,
              )
            ) {
              lObjetCss = lNewStyleCss;
              $(aContexteCourant.node).css(lObjetCss);
            }
          },
          aContexteCourant.node,
          aContexteCourant,
        );
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie_style="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_class',
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
        const lGetter = () => {
          return lInfos.callback([aContexteCourant.node]) || '';
        };
        let lClassCss = lGetter();
        if (lClassCss.length > 0) {
          $(aContexteCourant.node).addClass(lClassCss);
        }
        aOutils.abonnerRefresh(
          () => {
            const lNewClassCss = lGetter();
            if (lNewClassCss !== lClassCss) {
              $(aContexteCourant.node)
                .removeClass(lClassCss)
                .addClass(lNewClassCss);
              lClassCss = lNewClassCss;
            }
          },
          aContexteCourant.node,
          aContexteCourant,
        );
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `${aAttrName}="${lInfos.nomCommentaire || lValue}"`,
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_display',
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
        const lGetter = function () {
          return !!lInfos.callback([
            aContexteCourant.node,
            aContexteCourant.data,
          ]);
        };
        const lDisplay = lGetter();
        ObjetHtml_1.GHtml.setDisplay(aContexteCourant.node, lDisplay);
        let lOldDisplayValue = lDisplay;
        aOutils.abonnerRefresh(
          () => {
            const lDisplay = lGetter();
            if (lDisplay !== lOldDisplayValue) {
              lOldDisplayValue = lDisplay;
              ObjetHtml_1.GHtml.setDisplay(aContexteCourant.node, lDisplay);
            }
          },
          aContexteCourant.node,
          aContexteCourant,
        );
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie_display="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_attr',
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
        const lGetter = () => {
          return lInfos.callback([aContexteCourant.node]);
        };
        let lAttr = MethodesObjet_1.MethodesObjet.dupliquer(lGetter());
        if (lAttr) {
          $(aContexteCourant.node).attr(lAttr);
        }
        aOutils.abonnerRefresh(
          () => {
            const lNewAttr = lGetter();
            if (
              !MethodesObjet_1.MethodesObjet.objetsIdentiques(lNewAttr, lAttr)
            ) {
              lAttr = MethodesObjet_1.MethodesObjet.dupliquer(lNewAttr);
              $(aContexteCourant.node).attr(lAttr);
            }
          },
          aContexteCourant.node,
          aContexteCourant,
        );
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `${aAttrName}="${lInfos.nomCommentaire || lValue}"`,
        );
        return true;
      },
    );
    function _initEllipsis(
      aContexteCourant,
      aOutils,
      aAttributValue,
      aAttrName,
    ) {
      $(aContexteCourant.node).addClass('ie_ellipsis');
      if (
        !aContexteCourant.node.hasAttribute(Tooltip_1.Tooltip.attrType) &&
        !aContexteCourant.node.hasAttribute(Tooltip_1.Tooltip.attrDisabled)
      ) {
        aContexteCourant.node.setAttribute(
          Tooltip_1.Tooltip.attrType,
          Tooltip_1.Tooltip.Type.contentEllipsis,
        );
      }
    }
    IEHtml_1.IEHtml.addAttribut(
      'ie_ellipsis',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        _initEllipsis(aContexteCourant, aOutils, aAttributValue, aAttrName);
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie_ellipsis');
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_ellipsis_fixe',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        _initEllipsis(aContexteCourant, aOutils, aAttributValue, aAttrName);
        aOutils.surInjectionHtml(
          aContexteCourant,
          (aParams) => {
            let lWidth;
            aParams.addMeasure(() => {
              if (!aContexteCourant.node.style.width) {
                lWidth = $(aContexteCourant.node).width();
              }
            });
            aParams.addMutate(() => {
              if (lWidth !== undefined) {
                $(aContexteCourant.node).width(Math.ceil(lWidth));
              }
            });
          },
          true,
        );
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie_ellipsis_fixe');
        return true;
      },
    );
    IEHtml_1.IEHtml.addClass(
      Divers_css_1.SD.ellipsisMultilignes,
      (aContexteCourant, aNodeName, aOutils) => {
        var _a;
        if (
          !aContexteCourant.node.hasAttribute('title') &&
          !aContexteCourant.node.hasAttribute(Tooltip_1.Tooltip.attrType) &&
          !((_a = aContexteCourant.node.classList) === null || _a === void 0
            ? void 0
            : _a.contains(exports.SIEHtmlComposants.ellipsisCancelTitle))
        ) {
          aOutils.surInjectionHtml(aContexteCourant, () => {
            const lAttrTootip = ObjetHtml_1.GHtml.getAttr(
              aContexteCourant.node,
              Tooltip_1.Tooltip.attrType,
            );
            if (
              lAttrTootip &&
              lAttrTootip !== Tooltip_1.Tooltip.Type.contentOverflow
            ) {
              return;
            }
            if (!lAttrTootip) {
              ObjetHtml_1.GHtml.setAttr(
                aContexteCourant.node,
                Tooltip_1.Tooltip.attrType,
                Tooltip_1.Tooltip.Type.contentOverflow,
              );
            }
          });
        }
        return true;
      },
    );
    IEHtml_1.IEHtml.addAttribut(
      'ie_selecttextfocus',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        if (aNodeName !== 'input' && aNodeName !== 'textarea') {
          return true;
        }
        $(aContexteCourant.node).on({
          focus: function () {
            if (this.select) {
              this.select();
            }
          },
          mouseup: function (e) {
            e.preventDefault();
          },
        });
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie_selecttextfocus',
        );
        return true;
      },
    );
    IEHtml_1.IEHtml.addClass(
      'img-portrait',
      (aContexteCourant, aNodeName, aOutils) => {
        if (aNodeName === 'img') {
          const lSetSrcPortrait = () => {
            var _a, _b;
            (_a = aOutils.getObject('img-portrait')) === null || _a === void 0
              ? void 0
              : _a.onerror(aContexteCourant.node);
            (_b = aOutils.getObject('ImgViewer')) === null || _b === void 0
              ? void 0
              : _b.detachViewer(aContexteCourant.node);
          };
          const lUtils = IEHtml_1.IEHtml.outils.getObject('ie_load_src');
          if (lUtils) {
            if (lUtils.imgWithoutSrc(aContexteCourant.node)) {
              lSetSrcPortrait();
              aOutils.addCommentaireDebug(
                aContexteCourant.node,
                `img-portrait, ajout src ${c_srcPortrait}`,
              );
            } else if (
              aContexteCourant.node.hasAttribute('src') &&
              aContexteCourant.node.getAttribute('src') !== c_srcPortrait &&
              lUtils.imgWithoutLoadSrc(aContexteCourant.node)
            ) {
              $(aContexteCourant.node).one('error', function () {
                lSetSrcPortrait();
              });
            }
          }
        }
        return true;
      },
    );
    const c_srcPortrait = 'FichiersRessource/PortraitSilhouette.png';
    IEHtml_1.IEHtml.outils.addObject('img-portrait', {
      srcPortrait: c_srcPortrait,
      onerror: (aNode) => {
        aNode.setAttribute('src', c_srcPortrait);
        aNode.classList.add('img-portrait-empty');
      },
    });
    IEHtml_1.IEHtml.addClass(
      Divers_css_1.SD.tinyView,
      (aContexteCourant, aNodeName) => {
        $(aContexteCourant.node)
          .find('*[style]')
          .each(function () {
            var _a;
            if (
              ((_a = this.style) === null || _a === void 0
                ? void 0
                : _a.position) === 'fixed'
            ) {
              this.style.position = 'static';
            }
          });
        return true;
      },
    );
    tslib_1.__exportStar(require('@cp/Produit/Script/IEHtml'), exports);
  },
  fn: 'iehtmlcomposants.js',
});