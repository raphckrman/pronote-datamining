IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Tooltip = void 0;
    const GUID_1 = require('GUID');
    const IEHtml_1 = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const ObjetPosition_1 = require('ObjetPosition');
    const Tooltip_module_css_1 = require('Tooltip.module.css');
    const ToucheClavier_1 = require('ToucheClavier');
    class Tooltip {
      static getNodeConteneur() {
        if (
          !this.nodeConteneur ||
          !ObjetHtml_1.GHtml.elementExiste(this.idConteneur)
        ) {
          this.nodeConteneur = IEHtml_1.default.injectHTMLParams({
            html: IE.jsx.str('div', {
              'aria-hidden': 'true',
              id: this.idConteneur,
            }),
            element:
              ObjetHtml_1.GHtml.getElement(GApplication.getIdConteneur()) ||
              document.body,
            ignorerScroll: true,
          });
        }
        return this.nodeConteneur;
      }
      static getHtmlArrow() {
        return IE.jsx.str(
          'div',
          { class: Tooltip_module_css_1.StylesTooltip.arrow },
          IE.jsx.str('div', null),
        );
      }
      static getNodeLabelTooltip() {
        this.getNodeConteneur();
        if (!ObjetHtml_1.GHtml.elementExiste(this.idNodelabelTooltip)) {
          IEHtml_1.default.injectHTMLParams({
            html: IE.jsx.str(
              'div',
              {
                role: 'tooltip',
                id: this.idNodelabelTooltip,
                class: [
                  Tooltip_module_css_1.StylesTooltip.tooltip,
                  Tooltip_module_css_1.StylesTooltip.hide,
                ],
              },
              IE.jsx.str('div', {
                class: Tooltip_module_css_1.StylesTooltip.label,
              }),
              this.getHtmlArrow(),
            ),
            element: this.nodeConteneur,
            ignorerScroll: true,
          });
        }
        return ObjetHtml_1.GHtml.getElement(this.idNodelabelTooltip);
      }
      static addNodeLabelDescribe(
        aNode,
        aIEAttrname,
        aEstPourLabel,
        aInfosLabel,
        aEstDynamique,
      ) {
        var _a, _b, _c, _d, _e, _f;
        IEHtml_1.default.outils.addCommentaireDebug(
          aNode,
          aEstPourLabel && !aInfosLabel.estFonction
            ? `${aIEAttrname} <-> aria-label`
            : `${aIEAttrname}="${aInfosLabel.nomCommentaire || aInfosLabel.value}"`,
        );
        let lFuncTootlip;
        let lStrToolTip = '';
        if (aInfosLabel.estFonction) {
          lFuncTootlip = () => {
            var _a, _b;
            return (
              ((_b =
                (_a = aInfosLabel.callback([aNode])) === null || _a === void 0
                  ? void 0
                  : _a.replaceRCToHTML) === null || _b === void 0
                ? void 0
                : _b.call(_a)) || ''
            );
          };
          if (!aEstDynamique) {
            lStrToolTip = lFuncTootlip();
            lFuncTootlip = undefined;
          }
        } else {
          lStrToolTip =
            (_f =
              (_d =
                (_b =
                  (_a = aInfosLabel.nom) === null || _a === void 0
                    ? void 0
                    : _a.ajouterEntites) === null || _b === void 0
                  ? void 0
                  : (_c = _b.call(_a)).replaceRCToHTML) === null ||
              _d === void 0
                ? void 0
                : (_e = _d.call(_c)).trim) === null || _f === void 0
              ? void 0
              : _f.call(_e);
          if (!lStrToolTip) {
            return;
          }
        }
        const lType = this.getTypeNode(aNode);
        if (!lType) {
          aNode.setAttribute(Tooltip.attrType, Tooltip.Type.default);
        } else if (lType !== Tooltip.Type.default) {
          return;
        }
        this.getNodeConteneur();
        if (aEstPourLabel && !aInfosLabel.estFonction) {
          aNode.setAttribute('aria-label', aInfosLabel.nom);
          return;
        }
        const lUniqueNumber = this.uniqueNumberGenerator.generate();
        const lId = `id_tooltip_${lUniqueNumber}`;
        const lAttr = aEstPourLabel ? 'aria-labelledby' : 'aria-describedby';
        aNode.setAttribute(
          lAttr,
          [aNode.getAttribute(lAttr) || '', lId].join(' ').trim(),
        );
        aNode.setAttribute(this.attrId, lId);
        const lNode = IEHtml_1.default.injectHTMLParams({
          html: IE.jsx.str(
            'div',
            {
              role: 'tooltip',
              class: [
                Tooltip_module_css_1.StylesTooltip.tooltip,
                Tooltip_module_css_1.StylesTooltip.hide,
              ],
              id: lId,
            },
            IE.jsx.str(
              'div',
              {
                class: Tooltip_module_css_1.StylesTooltip.label,
                'ie-html': lFuncTootlip || false,
              },
              lStrToolTip || '',
            ),
            this.getHtmlArrow(),
          ),
          element: this.nodeConteneur,
          ignorerScroll: true,
        });
        $(aNode).on('destroyed.tooltip', () => {
          this.uniqueNumberGenerator.release(lUniqueNumber);
          lNode.remove();
        });
      }
      static cancelOpenClose() {
        if (this.timerOpen) {
          clearTimeout(this.timerOpen);
          this.timerOpen = undefined;
        }
      }
      static cancelTimerClose() {
        if (this.timerClose) {
          clearTimeout(this.timerClose);
          this.timerClose = undefined;
        }
      }
      static getAlign(aNode) {
        var _a;
        let lAlign = aNode.getAttribute(Tooltip.attrAlign);
        if (!lAlign) {
          const lNode =
            (_a = aNode.closest) === null || _a === void 0
              ? void 0
              : _a.call(aNode, `[${Tooltip.attrAlign}]`);
          if (lNode) {
            lAlign = lNode.getAttribute(Tooltip.attrAlign);
          }
        }
        if (!lAlign || !Tooltip.Align[lAlign]) {
          lAlign = Tooltip.Align.bottom;
        }
        return lAlign;
      }
      static getTypeNode(aNode) {
        let lType = null;
        if (aNode.hasAttribute(Tooltip.attrType)) {
          lType = aNode.getAttribute(Tooltip.attrType);
          if (!lType || !Tooltip.Type[lType]) {
            lType = Tooltip.Type.default;
          }
          return lType;
        }
      }
      static positionnerTooltip(aNodeSource, aNodeTooltip, aRectSource) {
        let lAlign = this.getAlign(aNodeSource);
        let lAlignFinal = lAlign;
        const lRectTooltip =
          ObjetPosition_1.GPosition.getClientRect(aNodeTooltip);
        let lRectSource = aRectSource;
        const lNodeOverflow =
          ObjetHtml_1.GHtml.getParentOverflowNonVisible(aNodeSource);
        if (lNodeOverflow) {
          const lRectOverflow =
            ObjetPosition_1.GPosition.getClientRect(lNodeOverflow);
          const lLeft = Math.max(aRectSource.left, lRectOverflow.left);
          const lTop = Math.max(aRectSource.top, lRectOverflow.top);
          const lBottom = Math.min(aRectSource.bottom, lRectOverflow.bottom);
          const lRight = Math.min(aRectSource.right, lRectOverflow.right);
          lRectSource = {
            left: lLeft,
            top: lTop,
            bottom: lBottom,
            right: lRight,
          };
        }
        lRectSource.top = Math.max(lRectSource.top, 0);
        lRectSource.left = Math.max(lRectSource.left, 0);
        lRectSource.bottom = Math.min(
          lRectSource.bottom,
          ObjetNavigateur_1.Navigateur.ecranH,
        );
        lRectSource.right = Math.min(
          lRectSource.right,
          ObjetNavigateur_1.Navigateur.ecranL,
        );
        const lCenterSource =
          lRectSource.left + (lRectSource.right - lRectSource.left) / 2;
        const lPos = {
          left: lCenterSource - lRectTooltip.width / 2,
          top:
            lAlign === Tooltip.Align.bottom
              ? lRectSource.bottom + this.ecartNode
              : lRectSource.top - this.ecartNode - lRectTooltip.height,
          width: lRectTooltip.width,
          height: lRectTooltip.height,
        };
        switch (lAlign) {
          case Tooltip.Align.bottom: {
            if (
              lPos.top + lRectTooltip.height >
              ObjetNavigateur_1.Navigateur.ecranH - this.ecartBordEcran
            ) {
              if (
                lRectSource.top <
                ObjetNavigateur_1.Navigateur.ecranH - lRectSource.bottom
              ) {
                ObjetPosition_1.GPosition.setHeight(
                  aNodeTooltip,
                  ObjetNavigateur_1.Navigateur.ecranH -
                    lPos.top -
                    this.ecartBordEcran,
                );
              } else {
                lPos.top =
                  lRectSource.top - this.ecartNode - lRectTooltip.height;
                lAlignFinal = Tooltip.Align.top;
              }
            }
            break;
          }
          case Tooltip.Align.top: {
            if (
              lRectTooltip.height >
              lRectSource.top - this.ecartNode - this.ecartBordEcran
            ) {
              if (
                lRectSource.top >
                ObjetNavigateur_1.Navigateur.ecranH - lRectSource.bottom
              ) {
                ObjetPosition_1.GPosition.setHeight(
                  aNodeTooltip,
                  lRectSource.top - this.ecartNode - this.ecartBordEcran,
                );
              } else {
                lPos.top = lRectSource.bottom + this.ecartNode;
                lAlignFinal = Tooltip.Align.bottom;
              }
            }
            break;
          }
        }
        if (
          lPos.left + lPos.width + this.ecartBordEcran >
          ObjetNavigateur_1.Navigateur.ecranL
        ) {
          lPos.left = Math.max(
            this.ecartBordEcran,
            ObjetNavigateur_1.Navigateur.ecranL -
              lPos.width -
              this.ecartBordEcran,
          );
        }
        lPos.left = Math.max(this.ecartBordEcran, lPos.left);
        lPos.top = Math.max(this.ecartBordEcran, lPos.top);
        const lJArrow = $(aNodeTooltip).find(
          `.${Tooltip_module_css_1.StylesTooltip.arrow}`,
        );
        switch (lAlignFinal) {
          case Tooltip.Align.bottom: {
            lJArrow.removeClass(Tooltip_module_css_1.StylesTooltip.arrowTop);
            break;
          }
          case Tooltip.Align.top: {
            lJArrow.addClass(Tooltip_module_css_1.StylesTooltip.arrowTop);
            break;
          }
        }
        ObjetPosition_1.GPosition.setLeft(
          lJArrow.get(0),
          lCenterSource - lPos.left - this.tailleArrow,
        );
        ObjetPosition_1.GPosition.setPosition(
          aNodeTooltip,
          lPos.left,
          lPos.top,
          false,
        );
      }
      static isDisabled(aNode) {
        var _a, _b;
        if (
          (_a =
            aNode === null || aNode === void 0
              ? void 0
              : aNode.hasAttribute) === null || _a === void 0
            ? void 0
            : _a.call(aNode, Tooltip.attrDisabled)
        ) {
          return (
            ((_b = aNode.getAttribute) === null || _b === void 0
              ? void 0
              : _b.call(aNode, Tooltip.attrDisabled)) !== 'false'
          );
        }
        return false;
      }
      static getNodeClosest(aNode, aSurClick) {
        var _a, _b;
        if (!aNode) {
          return null;
        }
        let lNode = null;
        lNode =
          (_a = aNode.closest) === null || _a === void 0
            ? void 0
            : _a.call(aNode, `[${Tooltip.attrType}]`);
        if (lNode) {
          if (this.isDisabled(lNode)) {
            return null;
          }
          const lSurClick =
            ((_b = lNode.getAttribute) === null || _b === void 0
              ? void 0
              : _b.call(lNode, Tooltip.attrBtn)) === 'true';
          if (lSurClick === aSurClick) {
            return lNode;
          }
          return null;
        }
        return null;
      }
      static getContenuTooltip(aNode) {
        var _a;
        const lIdTooltip =
          (_a = aNode.getAttribute) === null || _a === void 0
            ? void 0
            : _a.call(aNode, Tooltip.attrId);
        const lType = this.getTypeNode(aNode);
        if (lType === Tooltip.Type.ellipsis) {
          return aNode.innerHTML;
        }
        if (lIdTooltip) {
          const lNodes = this.getNodeTooltip(aNode);
          if (lNodes.nodeCopie) {
            return lNodes.nodeCopie.innerHTML;
          }
          return $(lNodes.node)
            .find(`.${Tooltip_module_css_1.StylesTooltip.label}`)
            .get(0).innerHTML;
        }
        let lLabel =
          aNode.getAttribute(Tooltip.attrText) ||
          aNode.getAttribute(Tooltip.attrHtml);
        if (lLabel) {
          return;
        }
        return aNode.getAttribute('aria-label');
      }
      static getNodeTooltip(aNode) {
        var _a;
        const lIdTooltip =
          (_a =
            aNode === null || aNode === void 0
              ? void 0
              : aNode.getAttribute) === null || _a === void 0
            ? void 0
            : _a.call(aNode, Tooltip.attrId);
        if (lIdTooltip) {
          const lNodeTooltip = ObjetHtml_1.GHtml.getElement(lIdTooltip);
          if (
            !(lNodeTooltip === null || lNodeTooltip === void 0
              ? void 0
              : lNodeTooltip.closest(`#${this.idConteneur}`))
          ) {
            return {
              node: this.getNodeLabelTooltip(),
              nodeCopie: lNodeTooltip,
            };
          }
          return { node: lNodeTooltip };
        }
        return { node: this.getNodeLabelTooltip() };
      }
      static show(aNode, aAfficher, aDelai) {
        var _a;
        if (aNode.dataset.avecIeHint) {
          return;
        }
        const lType = this.getTypeNode(aNode);
        const lEstEllipsis = lType === Tooltip.Type.ellipsis;
        let lEstTooltipDedie = false;
        let lEstTooltipLabel = false;
        const lIdTooltip =
          (_a = aNode.getAttribute) === null || _a === void 0
            ? void 0
            : _a.call(aNode, Tooltip.attrId);
        let lNodeTooltip = null;
        let lNodeCopieId = null;
        if (lEstEllipsis) {
          if (aAfficher) {
            const lJNode = $(aNode);
            if (Math.ceil(lJNode.outerWidth()) >= lJNode.prop('scrollWidth')) {
              if (aNode.parentElement) {
                const lNodeParent = Tooltip.getNodeClosest(
                  aNode.parentElement,
                  false,
                );
                if (lNodeParent) {
                  Tooltip.show(lNodeParent, aAfficher, aDelai);
                }
              }
              return;
            }
          }
          lNodeTooltip = this.getNodeTooltip(aNode).node;
          lNodeCopieId = aNode;
        } else if (lIdTooltip) {
          const lNodes = this.getNodeTooltip(aNode);
          lNodeTooltip = lNodes.node;
          lEstTooltipDedie = true;
          if (lNodes.nodeCopie) {
            lNodeCopieId = lNodes.nodeCopie;
            lNodeTooltip = lNodes.node;
            lEstTooltipDedie = false;
          }
        } else {
          lNodeTooltip = this.getNodeTooltip(aNode).node;
          lEstTooltipLabel = true;
        }
        if (!lNodeTooltip) {
          return;
        }
        const lIsVisible = !lNodeTooltip.classList.contains(
          Tooltip_module_css_1.StylesTooltip.hide,
        );
        if (this.nodeDisplay === aNode && lIsVisible === aAfficher) {
          this.cancelTimerClose();
          return;
        }
        if (aAfficher) {
          const lTitle = aNode.getAttribute('title');
          if (lTitle) {
            return;
          }
          if (lTitle !== '') {
            aNode.setAttribute('title', '');
          }
        }
        this.cancelTimerClose();
        const lJText = $(lNodeTooltip).find(
          `.${Tooltip_module_css_1.StylesTooltip.label}`,
        );
        if (aAfficher) {
          if (lIdTooltip && !this.getContenuTooltip(aNode)) {
            this.hideAll();
            return;
          }
          if (this.nodeDisplay !== aNode) {
            this.hideAll();
          }
          const lDisplay = () => {
            var _a, _b, _c, _d, _e;
            this.hideAll();
            if (lJText.length !== 1) {
              return;
            }
            const lRectSource = ObjetPosition_1.GPosition.getClientRect(aNode);
            if (lRectSource.width === 0 || lRectSource.height === 0) {
              return;
            }
            if (lEstTooltipLabel) {
              let lAvecTraitementEnTexte = true;
              let lLabel = aNode.getAttribute(Tooltip.attrText);
              if (!lLabel) {
                lLabel = aNode.getAttribute(Tooltip.attrHtml);
                if (lLabel) {
                  lAvecTraitementEnTexte = false;
                } else {
                  lLabel = aNode.getAttribute('aria-label');
                }
              }
              if (!lLabel) {
                return;
              }
              lJText.get(0).innerHTML = lAvecTraitementEnTexte
                ? (_c =
                    (_a = lLabel.ajouterEntites) === null || _a === void 0
                      ? void 0
                      : (_b = _a.call(lLabel)).replaceRCToHTML) === null ||
                  _c === void 0
                  ? void 0
                  : _c.call(_b)
                : lLabel;
            } else if (lNodeCopieId) {
              lJText.get(0).innerHTML =
                (_e =
                  (_d = lNodeCopieId.innerHTML) === null || _d === void 0
                    ? void 0
                    : _d.replaceRCToHTML) === null || _e === void 0
                  ? void 0
                  : _e.call(_d);
              lJText.find('*').each(function () {
                if (this.hasAttribute('id')) {
                  this.removeAttribute('id');
                }
              });
            }
            if (lIdTooltip && !this.getContenuTooltip(aNode)) {
              return;
            }
            const lClassTooltip = aNode.getAttribute(Tooltip.attrClass);
            this.nodeDisplay = aNode;
            lNodeTooltip.setAttribute(
              'class',
              [
                Tooltip_module_css_1.StylesTooltip.tooltip,
                lClassTooltip || '',
              ].join(' '),
            );
            this.positionnerTooltip(aNode, lNodeTooltip, lRectSource);
          };
          if (aDelai) {
            this.timerOpen = setTimeout(() => {
              this.timerOpen = undefined;
              lDisplay();
            }, aDelai);
          } else {
            lDisplay();
          }
        } else {
          this.cancelOpenClose();
          const lHide = () => {
            this.nodeDisplay = undefined;
            if (!lEstTooltipDedie) {
              lJText.empty();
            }
            this.hideAll();
          };
          if (aDelai) {
            this.timerClose = setTimeout(() => {
              this.timerClose = undefined;
              lHide();
            }, aDelai);
          } else {
            lHide();
          }
        }
      }
      static hideAll() {
        this.nodeDisplay = undefined;
        $(this.nodeConteneur)
          .find(`>:not(.${Tooltip_module_css_1.StylesTooltip.hide})`)
          .each(function () {
            this.setAttribute(
              'class',
              [
                Tooltip_module_css_1.StylesTooltip.tooltip,
                Tooltip_module_css_1.StylesTooltip.hide,
              ].join(' '),
            );
            this.removeAttribute('style');
          });
        this.cancelOpenClose();
        this.cancelTimerClose();
      }
      static init() {
        $(document).on({
          'mouseover.tooltip'(aEvent) {
            if (IE.estMobile) {
              return;
            }
            let lNode = Tooltip.getNodeClosest(aEvent.target, false);
            if (lNode) {
              Tooltip.show(lNode, true, Tooltip.options.delayOpenHover);
            }
          },
          'mouseout.tooltip'(aEvent) {
            if (IE.estMobile) {
              return;
            }
            let lNode = Tooltip.getNodeClosest(aEvent.target, false);
            if (lNode) {
              Tooltip.show(lNode, false, Tooltip.options.delayCloseHover);
            }
          },
          'focusin.tooltip'(aEvent) {
            var _a, _b;
            if (
              ((_b =
                (_a = aEvent.target) === null || _a === void 0
                  ? void 0
                  : _a.hasAttribute) === null || _b === void 0
                ? void 0
                : _b.call(_a, Tooltip.attrType)) &&
              !Tooltip.isDisabled(aEvent.target)
            ) {
              Tooltip.show(aEvent.target, true, Tooltip.options.delayOpenFocus);
            }
          },
          'focusout.tooltip'(aEvent) {
            var _a, _b;
            if (
              (_b =
                (_a = aEvent.target) === null || _a === void 0
                  ? void 0
                  : _a.hasAttribute) === null || _b === void 0
                ? void 0
                : _b.call(_a, Tooltip.attrType)
            ) {
              Tooltip.show(aEvent.target, false);
            }
          },
          'click.tooltip'(aEvent) {
            let lNode = Tooltip.getNodeClosest(aEvent.target, true);
            if (lNode) {
              Tooltip.show(lNode, true);
            }
          },
          'pointerdown.tooltip'() {
            setTimeout(() => {
              Tooltip.hideAll();
            }, 0);
          },
          'keydown.tooltip'(aEvent) {
            if (
              aEvent.key === ToucheClavier_1.ToucheClavier.Espace ||
              aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot
            ) {
              Tooltip.hideAll();
            }
          },
        });
        document.addEventListener(
          'keydown',
          (aEvent) => {
            if (aEvent.key === ToucheClavier_1.ToucheClavierKey.Escape) {
              Tooltip.hideAll();
            }
          },
          true,
        );
        $(window).on({
          'resize.tooltip': () => {
            Tooltip.hideAll();
          },
        });
      }
    }
    exports.Tooltip = Tooltip;
    Tooltip.attrType = 'data-tooltip';
    Tooltip.attrId = 'data-tooltip-id';
    Tooltip.attrAlign = 'data-tooltip-align';
    Tooltip.attrText = 'data-tooltip-text';
    Tooltip.attrHtml = 'data-tooltip-html';
    Tooltip.attrDisabled = 'data-tooltip-disabled';
    Tooltip.attrClass = 'data-tooltip-class';
    Tooltip.attrBtn = 'data-tooltip-btn';
    Tooltip.options = {
      delayOpenHover: 300,
      delayCloseHover: 100,
      delayOpenFocus: 100,
    };
    Tooltip.idConteneur = GUID_1.GUID.getId();
    Tooltip.idNodelabelTooltip = GUID_1.GUID.getId();
    Tooltip.ecartBordEcran = 3;
    Tooltip.ecartNode = 8;
    Tooltip.tailleArrow = 5;
    Tooltip.uniqueNumberGenerator = new GUID_1.UniqueNumberGenerator();
    (function (Tooltip) {
      let Type;
      (function (Type) {
        Type['default'] = 'default';
        Type['ellipsis'] = 'ellipsis';
      })((Type = Tooltip.Type || (Tooltip.Type = {})));
      let Align;
      (function (Align) {
        Align['top'] = 'top';
        Align['bottom'] = 'bottom';
      })((Align = Tooltip.Align || (Tooltip.Align = {})));
    })(Tooltip || (exports.Tooltip = Tooltip = {}));
    Tooltip.init();
    IEHtml_1.default.addAttribut(
      'ie-tooltiplabel',
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
          aOutils.TypeAccesParametres.jsxStrict,
        );
        Tooltip.addNodeLabelDescribe(
          aContexteCourant.node,
          aAttrName,
          true,
          lInfos,
          true,
        );
        return true;
      },
    );
    IEHtml_1.default.addAttribut(
      'ie-tooltiplabel-static',
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
          aOutils.TypeAccesParametres.jsxStrict,
        );
        Tooltip.addNodeLabelDescribe(
          aContexteCourant.node,
          aAttrName,
          true,
          lInfos,
          false,
        );
        return true;
      },
    );
    IEHtml_1.default.addAttribut(
      'ie-tooltipdescribe',
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
          aOutils.TypeAccesParametres.jsxStrict,
        );
        Tooltip.addNodeLabelDescribe(
          aContexteCourant.node,
          aAttrName,
          false,
          lInfos,
          true,
        );
        return true;
      },
    );
    IEHtml_1.default.addAttribut(
      'ie-tooltipdescribe-static',
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
          aOutils.TypeAccesParametres.jsxStrict,
        );
        Tooltip.addNodeLabelDescribe(
          aContexteCourant.node,
          aAttrName,
          false,
          lInfos,
          false,
        );
        return true;
      },
    );
  },
  fn: 'tooltip.js',
});