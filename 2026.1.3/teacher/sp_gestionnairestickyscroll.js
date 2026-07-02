IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GestionnaireStickyScroll = void 0;
    const GestionnaireStickyScroll_module_css_1 = require('@cp/Produit/Css/GestionnaireStickyScroll.module.css');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const SEUIL_HIDESHOW = 5;
    class GestionnaireStickyScroll {
      static getBottomSousStickyTop(aNode) {
        if (!this.actif) {
          return 0;
        }
        const lNodeScroll = ObjetHtml_1.GHtml.getParentScrollable(aNode);
        if (!lNodeScroll) {
          return 0;
        }
        let lPos = 0;
        this.getNodes(lNodeScroll, true).forEach((aNode) => {
          const lRect = ObjetPosition_1.GPosition.getClientRect(aNode);
          lPos = Math.max(lRect.bottom, lPos);
        });
        return lPos;
      }
      static activer() {
        if (!this.actif) {
          this.actif = true;
          if (!uResizeObserver && global.ResizeObserver) {
            uResizeObserver = new ResizeObserver((aEntries) => {
              if (!this.actif) {
                return;
              }
              for (const lEntries of aEntries) {
                const lElement = lEntries.target;
                if (ObjetHtml_1.GHtml.elementExiste(lElement)) {
                  if (lElement.classList.contains(this.stickyTop)) {
                    this.refreshNode(lElement, true, true);
                  } else if (lElement.classList.contains(this.stickyBottom)) {
                    this.refreshNode(lElement, false, true);
                  } else if (
                    lElement.classList.contains(
                      this.classeConteneurStickyFramework,
                    )
                  ) {
                    const lHasScroll =
                      lElement.scrollHeight > lElement.clientHeight;
                    if (lHasScroll) {
                      lElement.classList.remove(
                        GestionnaireStickyScroll_module_css_1
                          .SGestionnaireStickyScroll.withoutScroll,
                      );
                    } else {
                      lElement.classList.add(
                        GestionnaireStickyScroll_module_css_1
                          .SGestionnaireStickyScroll.withoutScroll,
                      );
                    }
                  }
                }
              }
            });
          }
          Invocateur_1.Invocateur.abonner(
            Invocateur_1.ObjetInvocateur.events.endResizeNavigateur,
            () => {
              this.surResizeNav();
            },
          );
        }
      }
      static addContainer(aElement) {
        if (!this.actif) {
          return;
        }
        if (!aElement) {
          return;
        }
        if (this.tabNodesContainer.includes(aElement)) {
          return;
        }
        const lNodeScroll = ObjetHtml_1.GHtml.getParentScrollable(aElement);
        if (!lNodeScroll) {
          return;
        }
        const lObserver = new MutationObserver((aMutations) => {
          var _a;
          const lTypeMotation =
            (_a = aMutations[0]) === null || _a === void 0 ? void 0 : _a.type;
          if (lTypeMotation === 'childList') {
            this.refreshContainer(aElement, true, true, false);
          }
        });
        lObserver.observe(aElement, { childList: true, subtree: true });
        aElement.dataset[this.dataHeightTop] = '0';
        if (aElement.dataset[this.dataHeightTopAV]) {
          delete aElement.dataset[this.dataHeightTopAV];
        }
        aElement.dataset[this.dataHeightBottom] = '0';
        delete aElement.dataset[this.dataContainerTopHide];
        this.tabNodesContainer.push(aElement);
        $(aElement).on('destroyed', () => {
          const lIndex = this.tabNodesContainer.indexOf(aElement);
          if (lIndex >= 0) {
            lObserver.disconnect();
            this.tabNodesContainer.splice(lIndex, 1);
          }
        });
        aElement.classList.add(this.classeConteneurStickyFramework);
        const lEstDansZoneFenetre = !!aElement.closest(
          `#${IEZoneFenetre_1.ZoneFenetre.idZoneFenetre}`,
        );
        if (lEstDansZoneFenetre) {
          uResizeObserver === null || uResizeObserver === void 0
            ? void 0
            : uResizeObserver.observe(aElement);
        }
        let lPositions = {
          stickyTop: 0,
          stickyBottom: 0,
          scrollTopInitialCurrent: lNodeScroll.scrollTop,
          scrollTopCurrent: 0,
          sensScrollTop: SensScroll.rien,
          sensScrollBottom: SensScroll.rien,
        };
        let lLastTouchMoveOuWheel = 0;
        lNodeScroll.addEventListener('wheel', () => {
          lPositions.scrollTopCurrent = lNodeScroll.scrollTop;
          lPositions.sensScrollTop = SensScroll.rien;
          lPositions.sensScrollBottom = SensScroll.rien;
          this.scrollEnCours = false;
          this.touchOuWheelDown = true;
          lLastTouchMoveOuWheel = Date.now();
        });
        lNodeScroll.addEventListener('touchstart', () => {
          lPositions.sensScrollTop = SensScroll.rien;
          lPositions.sensScrollBottom = SensScroll.rien;
          lPositions.scrollTopCurrent = lNodeScroll.scrollTop;
          this.scrollEnCours = false;
          this.touchOuWheelDown = true;
        });
        lNodeScroll.addEventListener('touchmove', () => {
          lLastTouchMoveOuWheel = Date.now();
        });
        lNodeScroll.addEventListener('touchend', () => {
          this.touchOuWheelDown = false;
        });
        const lIgnorerInvisibleScrollEnd = (aNode) => {
          const lRect = ObjetPosition_1.GPosition.getClientRect(aNode);
          if (!lRect.visible) {
            aNode.classList.remove(
              GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll
                .stickyVisible,
            );
            return true;
          }
          return false;
        };
        const lSurScrollEnd = (aSurForcerShowProgrammatique) => {
          if (!this.scrollEnCours && !aSurForcerShowProgrammatique) {
            return;
          }
          lPositions.scrollTopInitialCurrent = lNodeScroll.scrollTop;
          this.scrollEnCours = false;
          lLastTouchMoveOuWheel = 0;
          switch (lPositions.sensScrollTop) {
            case SensScroll.show: {
              delete aElement.dataset[this.dataContainerTopHide];
              this.getNodes(aElement, true).forEach((aNode) => {
                if (lIgnorerInvisibleScrollEnd(aNode)) {
                  return;
                }
                if (aSurForcerShowProgrammatique) {
                  aNode.classList.remove(
                    GestionnaireStickyScroll_module_css_1
                      .SGestionnaireStickyScroll.stickyVisible,
                  );
                } else {
                  aNode.classList.add(
                    GestionnaireStickyScroll_module_css_1
                      .SGestionnaireStickyScroll.stickyVisible,
                  );
                }
                this.setTranslateTop(aNode, 0);
                lPositions.stickyTop = 0;
              });
              break;
            }
            case SensScroll.hide: {
              const lHeightTop = parseInt(
                aElement.dataset[this.dataHeightTop] || '0',
              );
              aElement.dataset[this.dataContainerTopHide] = '1';
              this.getNodes(aElement, true).forEach((aNode) => {
                if (lIgnorerInvisibleScrollEnd(aNode)) {
                  return;
                }
                aNode.classList.add(
                  GestionnaireStickyScroll_module_css_1
                    .SGestionnaireStickyScroll.stickyVisible,
                );
                this.setTranslateTop(aNode, lHeightTop);
                lPositions.stickyTop = lHeightTop;
              });
              break;
            }
          }
          switch (lPositions.sensScrollBottom) {
            case SensScroll.show: {
              this.getNodes(aElement, false).forEach((aNode) => {
                if (lIgnorerInvisibleScrollEnd(aNode)) {
                  return;
                }
                if (aSurForcerShowProgrammatique) {
                  aNode.classList.remove(
                    GestionnaireStickyScroll_module_css_1
                      .SGestionnaireStickyScroll.stickyVisible,
                  );
                } else {
                  aNode.classList.add(
                    GestionnaireStickyScroll_module_css_1
                      .SGestionnaireStickyScroll.stickyVisible,
                  );
                }
                let lBottom = parseInt(
                  aNode.dataset[this.dataNodeBottom] || '0',
                );
                aNode.style.bottom = `${lBottom}px`;
                lPositions.stickyBottom = 0;
              });
              break;
            }
            case SensScroll.hide: {
              this.getNodes(aElement, false).forEach((aNode) => {
                if (lIgnorerInvisibleScrollEnd(aNode)) {
                  return;
                }
                aNode.classList.add(
                  GestionnaireStickyScroll_module_css_1
                    .SGestionnaireStickyScroll.stickyVisible,
                );
                const lDataHeightBottom = parseInt(
                  aElement.dataset[this.dataHeightBottom] || '0',
                );
                let lBottom =
                  parseInt(aNode.dataset[this.dataNodeBottom] || '0') -
                  lDataHeightBottom;
                if (aNode.classList.contains(this.stickyAlwaysVisible)) {
                  lBottom = Math.max(
                    ObjetPosition_1.GPosition.getRect(aNode).marginBottom,
                    lBottom,
                  );
                }
                aNode.style.bottom = `${lBottom}px`;
                lPositions.stickyBottom = lDataHeightBottom;
              });
              break;
            }
          }
          lPositions.sensScrollTop = SensScroll.rien;
          lPositions.sensScrollBottom = SensScroll.rien;
        };
        let lAvecEventScrollEnd = 'onscrollend' in lNodeScroll;
        if (lAvecEventScrollEnd) {
          lNodeScroll.addEventListener('scrollend', () => {
            lSurScrollEnd(false);
          });
        }
        lNodeScroll.addEventListener(
          'scroll',
          () => {
            const lIsToucheScroll = Date.now() - lLastTouchMoveOuWheel < 100;
            if (lIsToucheScroll || this.touchOuWheelDown) {
              this.scrollEnCours = true;
              lLastTouchMoveOuWheel = Date.now();
            } else {
              lPositions.sensScrollTop = SensScroll.show;
              lPositions.sensScrollBottom = SensScroll.show;
              lSurScrollEnd(true);
              return;
            }
            if (!lAvecEventScrollEnd) {
              if (this.timeoutScroll >= 0) {
                clearTimeout(this.timeoutScroll);
                this.timeoutScroll = -1;
              }
              this.timeoutScroll = setTimeout(() => {
                lSurScrollEnd(false);
                this.timeoutScroll = -1;
              }, 50);
            }
            const lDataHeightTop = parseInt(
              aElement.dataset[this.dataHeightTop] || '0',
            );
            const lDataHeightTopAlwaysVisible = parseInt(
              aElement.dataset[this.dataHeightTopAV] || '0',
            );
            const lDataHeightBottom = parseInt(
              aElement.dataset[this.dataHeightBottom] || '0',
            );
            const lNodesTop = this.getNodes(aElement, true);
            const lNodesBottom = this.getNodes(aElement, false);
            const lTabFuncMutate = [];
            let lScrollTopNew = lNodeScroll.scrollTop;
            const lEstScrollBas = lScrollTopNew > lPositions.scrollTopCurrent;
            const lDiffScroll = lScrollTopNew - lPositions.scrollTopCurrent;
            const lHorsSeuil =
              Math.abs(
                Math.abs(lScrollTopNew) -
                  Math.abs(lPositions.scrollTopInitialCurrent),
              ) >= SEUIL_HIDESHOW;
            if (lEstScrollBas) {
              const lSens = lHorsSeuil ? SensScroll.hide : SensScroll.show;
              lPositions.sensScrollTop = lSens;
              lPositions.sensScrollBottom = lSens;
              if (lDataHeightTop + 20 > lNodeScroll.clientHeight) {
                lPositions.sensScrollTop = SensScroll.rien;
              } else if (
                lScrollTopNew <
                lDataHeightTop - lDataHeightTopAlwaysVisible
              ) {
                lPositions.sensScrollTop = SensScroll.show;
              }
              if (lPositions.stickyTop < lDataHeightTop) {
                const lVal = Math.max(
                  0,
                  Math.min(lPositions.stickyTop + lDiffScroll, lDataHeightTop),
                );
                lPositions.stickyTop = lVal;
                lNodesTop.forEach((aNode) => {
                  lTabFuncMutate.push(() => {
                    aNode.classList.remove(
                      GestionnaireStickyScroll_module_css_1
                        .SGestionnaireStickyScroll.stickyVisible,
                    );
                    this.setTranslateTop(aNode, lVal);
                  });
                });
              }
              const lRestScroll = Math.max(
                0,
                lScrollTopNew +
                  lNodeScroll.clientHeight +
                  lDataHeightBottom -
                  lNodeScroll.scrollHeight,
              );
              if (lRestScroll > 0) {
                lPositions.sensScrollBottom = SensScroll.show;
              }
              const lRestScrollCurrent = Math.max(
                0,
                lScrollTopNew +
                  lNodeScroll.clientHeight +
                  lPositions.stickyBottom -
                  lNodeScroll.scrollHeight,
              );
              if (lRestScrollCurrent > 0) {
                lPositions.sensScrollBottom = SensScroll.show;
                lPositions.stickyBottom += -lRestScrollCurrent;
              }
              if (lPositions.stickyBottom < lDataHeightBottom) {
                const lVal = Math.max(
                  0,
                  Math.min(
                    lPositions.stickyBottom + lDiffScroll,
                    lDataHeightBottom,
                  ),
                );
                lPositions.stickyBottom = lVal;
                lNodesBottom.forEach((aNode) => {
                  let lBottom = parseInt(
                    aNode.dataset[this.dataNodeBottom] || '0',
                  );
                  lBottom = lBottom - lPositions.stickyBottom;
                  if (aNode.classList.contains(this.stickyAlwaysVisible)) {
                    lBottom = Math.max(
                      ObjetPosition_1.GPosition.getRect(aNode).marginBottom,
                      lBottom,
                    );
                  }
                  lTabFuncMutate.push(() => {
                    aNode.classList.remove(
                      GestionnaireStickyScroll_module_css_1
                        .SGestionnaireStickyScroll.stickyVisible,
                    );
                    aNode.style.bottom = `${lBottom}px`;
                  });
                });
              }
            } else {
              const lSens = lHorsSeuil ? SensScroll.show : SensScroll.hide;
              lPositions.sensScrollTop = lSens;
              lPositions.sensScrollBottom = lSens;
              if (lPositions.stickyTop > 0) {
                const lVal = Math.max(
                  0,
                  Math.min(lPositions.stickyTop + lDiffScroll, lDataHeightTop),
                );
                lPositions.stickyTop = lVal;
                lNodesTop.forEach((aNode) => {
                  lTabFuncMutate.push(() => {
                    aNode.classList.remove(
                      GestionnaireStickyScroll_module_css_1
                        .SGestionnaireStickyScroll.stickyVisible,
                    );
                    this.setTranslateTop(aNode, lVal);
                  });
                });
              }
              if (lPositions.stickyBottom > 0) {
                const lVal = Math.max(
                  0,
                  Math.min(
                    lPositions.stickyBottom + lDiffScroll,
                    lDataHeightBottom,
                  ),
                );
                lPositions.stickyBottom = lVal;
                lNodesBottom.forEach((aNode) => {
                  let lBottom = parseInt(
                    aNode.dataset[this.dataNodeBottom] || '0',
                  );
                  lBottom = lBottom - lPositions.stickyBottom;
                  if (aNode.classList.contains(this.stickyAlwaysVisible)) {
                    lBottom = Math.max(
                      ObjetPosition_1.GPosition.getRect(aNode).marginBottom,
                      lBottom,
                    );
                  }
                  lTabFuncMutate.push(() => {
                    aNode.classList.remove(
                      GestionnaireStickyScroll_module_css_1
                        .SGestionnaireStickyScroll.stickyVisible,
                    );
                    aNode.style.bottom = `${lBottom}px`;
                  });
                });
              }
            }
            lPositions.scrollTopCurrent = lScrollTopNew;
            for (const lFuncMutate of lTabFuncMutate) {
              lFuncMutate();
            }
          },
          { passive: true },
        );
      }
      static refreshContainer(aContainer, aAvecTop, aAvecBottom, aSurResize) {
        if (this.scrollEnCours) {
          return;
        }
        if (aAvecTop) {
          let lTop = 0;
          let lTopAlwaysVisible = 0;
          let lNodeTopLast;
          const lTabNodesRestore = [];
          const lNodesTop = this.getNodes(aContainer, true);
          lNodesTop.forEach((aNode, aIndex) => {
            const lNodeScroll = ObjetHtml_1.GHtml.getParentScrollable(aNode);
            if (!lNodeScroll) {
              return;
            }
            const lAlwaysVisible = aNode.classList.contains(
              this.stickyAlwaysVisible,
            );
            aNode.classList.remove(
              GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll
                .shadowTop,
            );
            const lScrollEnCours = lNodeScroll.scrollTop > 0;
            const lRect = ObjetPosition_1.GPosition.getClientRect(aNode);
            if (!lRect.visible) {
              aNode.classList.remove(
                GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll
                  .stickyVisible,
              );
              return;
            }
            lNodeTopLast = aNode;
            lTabNodesRestore.push({
              node: aNode,
              hide:
                lScrollEnCours &&
                aSurResize &&
                !!lNodeScroll.dataset[this.dataContainerTopHide],
            });
            aNode.style.transform = '';
            if (aIndex > 0) {
              const lVal = lTop + lRect.marginTop;
              aNode.style.top = lVal + 'px';
              aNode.dataset[this.dataNodeTop] = lVal + '';
              if (lAlwaysVisible && lVal > 0) {
                aNode.dataset[this.dataNodeAVTop] = lTopAlwaysVisible + '';
              }
            } else {
              lTop = 0;
            }
            lTop += lRect.outerHeight;
            if (lAlwaysVisible) {
              lTopAlwaysVisible += lRect.outerHeight;
            }
          });
          if (lNodeTopLast) {
            lNodeTopLast.classList.add(
              GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll
                .shadowTop,
            );
          }
          aContainer.dataset[this.dataHeightTop] = lTop + '';
          if (lTopAlwaysVisible > 0) {
            aContainer.dataset[this.dataHeightTopAV] = lTopAlwaysVisible + '';
          } else if (aContainer.dataset[this.dataHeightTopAV]) {
            delete aContainer.dataset[this.dataHeightTopAV];
          }
          for (const lInfosNode of lTabNodesRestore) {
            if (lInfosNode.hide) {
              this.setTranslateTop(lInfosNode.node, lTop);
            } else {
              lInfosNode.node.style.transform = '';
            }
          }
        }
        if (aAvecBottom) {
          let lNodeBottomLast;
          let lEstPartieVisible = false;
          const lTab = this.getNodes(aContainer, false);
          lTab.reverse();
          let lBottom = 0;
          let lBottomAlwaysHide = 0;
          lTab.forEach((aNode, aIndex) => {
            const lNodeScroll = ObjetHtml_1.GHtml.getParentScrollable(aNode);
            if (!lNodeScroll) {
              return;
            }
            aNode.classList.remove(
              GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll
                .shadowBottom,
            );
            const lRect = ObjetPosition_1.GPosition.getClientRect(aNode);
            if (!lRect.visible) {
              aNode.classList.remove(
                GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll
                  .stickyVisible,
              );
              return;
            }
            const lAlwaysVisible = aNode.classList.contains(
              this.stickyAlwaysVisible,
            );
            if (!aNode.classList.contains(this.stickyTransparent)) {
              lNodeBottomLast = aNode;
            }
            if (lAlwaysVisible && !lEstPartieVisible) {
              lEstPartieVisible = true;
            }
            let lVal = 0;
            if (aIndex > 0) {
              lVal = lBottom + lRect.marginBottom;
            } else {
              lVal = lRect.marginBottom;
            }
            aNode.style.bottom = lVal + 'px';
            aNode.dataset[this.dataNodeBottom] = lVal + '';
            if (!lEstPartieVisible) {
              lBottomAlwaysHide += lRect.outerHeight;
            }
            lBottom += lRect.outerHeight;
          });
          if (lNodeBottomLast) {
            lNodeBottomLast.classList.add(
              GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll
                .shadowBottom,
            );
          }
          aContainer.dataset[this.dataHeightBottom] = lBottomAlwaysHide + '';
        }
      }
      static setTranslateTop(aNode, aTranslate) {
        let lTranslate = aTranslate;
        if (
          lTranslate > 0 &&
          aNode.classList.contains(this.stickyAlwaysVisible)
        ) {
          const lTopAlwaysVisible = parseInt(
            aNode.dataset[this.dataNodeAVTop] || '0',
          );
          const lTop = parseInt(aNode.dataset[this.dataNodeTop] || '0');
          lTranslate = Math.min(lTranslate, lTop - lTopAlwaysVisible);
        }
        aNode.style.transform =
          lTranslate <= 0 ? 'translateY(0)' : `translateY(-${lTranslate}px)`;
      }
      static refreshNode(aNode, aPourTop, aSurResize) {
        if (!this.actif) {
          return false;
        }
        const lNodeConteneur = aNode.closest(
          `.${this.classeConteneurStickyFramework}`,
        );
        if (lNodeConteneur) {
          this.refreshContainer(
            lNodeConteneur,
            aPourTop,
            !aPourTop,
            aSurResize,
          );
          return true;
        }
        return false;
      }
      static addNode(aNode, aPourTop) {
        if (!this.actif) {
          return;
        }
        const lNodeScroll = ObjetHtml_1.GHtml.getParentScrollable(aNode);
        if (!lNodeScroll) {
          return;
        }
        GestionnaireStickyScroll.addContainer(lNodeScroll);
        if (this.refreshNode(aNode, aPourTop, false)) {
          uResizeObserver === null || uResizeObserver === void 0
            ? void 0
            : uResizeObserver.observe(aNode);
        }
      }
      static getNodes(aContainer, aEstTop) {
        const lTab = [];
        const lCss = aEstTop ? this.stickyTop : this.stickyBottom;
        aContainer.querySelectorAll(`.${lCss}`).forEach((aNode) => {
          const lNodeConteneur = aNode.closest(
            `.${this.classeConteneurStickyFramework}`,
          );
          if (lNodeConteneur === aContainer) {
            const lNodeImbrique = aNode.closest(
              `.${this.stickyTop}, .${this.stickyBottom}`,
            );
            if (!lNodeImbrique || lNodeImbrique === aNode) {
              lTab.push(aNode);
            }
          }
        });
        return lTab;
      }
      static surResizeNav() {
        for (const lNode of GestionnaireStickyScroll.tabNodesContainer) {
          GestionnaireStickyScroll.refreshContainer(lNode, true, true, true);
        }
      }
    }
    exports.GestionnaireStickyScroll = GestionnaireStickyScroll;
    GestionnaireStickyScroll.stickyTop =
      GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll.stickyTop;
    GestionnaireStickyScroll.stickyBottom =
      GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll.stickyBottom;
    GestionnaireStickyScroll.stickyAlwaysVisible =
      GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll.alwaysVisible;
    GestionnaireStickyScroll.stickyTransparent =
      GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll.stickyTransparent;
    GestionnaireStickyScroll.classeConteneurStickyFramework =
      GestionnaireStickyScroll_module_css_1.SGestionnaireStickyScroll.stickyFrameworkContainer;
    GestionnaireStickyScroll.dataHeightTop = 'stickyTop';
    GestionnaireStickyScroll.dataHeightTopAV = 'stickyTop_av';
    GestionnaireStickyScroll.dataHeightBottom = 'stickyBottom';
    GestionnaireStickyScroll.dataNodeBottom = 'bottom';
    GestionnaireStickyScroll.dataNodeTop = 'top';
    GestionnaireStickyScroll.dataNodeAVTop = 'top_av';
    GestionnaireStickyScroll.dataContainerTopHide = 'tophide';
    GestionnaireStickyScroll.tabNodesContainer = [];
    GestionnaireStickyScroll.actif = false;
    GestionnaireStickyScroll.scrollEnCours = false;
    GestionnaireStickyScroll.touchOuWheelDown = false;
    GestionnaireStickyScroll.timeoutScroll = -1;
    IEHtml_1.IEHtml.addClass(
      GestionnaireStickyScroll.stickyTop,
      (aContexteCourant, aNodeName) => {
        IEHtml_1.IEHtml.outils.surInjectionHtml(aContexteCourant, () =>
          GestionnaireStickyScroll.addNode(aContexteCourant.node, true),
        );
      },
    );
    IEHtml_1.IEHtml.addClass(
      GestionnaireStickyScroll.stickyBottom,
      (aContexteCourant, aNodeName) => {
        IEHtml_1.IEHtml.outils.surInjectionHtml(aContexteCourant, () =>
          GestionnaireStickyScroll.addNode(aContexteCourant.node, false),
        );
      },
    );
    var SensScroll;
    (function (SensScroll) {
      SensScroll[(SensScroll['rien'] = 0)] = 'rien';
      SensScroll[(SensScroll['hide'] = 1)] = 'hide';
      SensScroll[(SensScroll['show'] = 2)] = 'show';
    })(SensScroll || (SensScroll = {}));
    let uResizeObserver;
  },
  fn: 'gestionnairestickyscroll.js',
});