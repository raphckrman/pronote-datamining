IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const tslib_1 = require('tslib');
    const IEHtml = require('IEHtml');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetHint_1 = require('ObjetHint');
    require('IEHtml.EllipisisMultiline.js');
    require('IEHtml.Load.Src.js');
    require('IEHtml.ImgViewer.js');
    require('IEHtml.AutoResize.js');
    require('IEHtml.Collapsible.js');
    require('IEHtml.VisibilityObserver.js');
    require('IEHtml.ResizeObserver.js');
    require('IEHtml.Ripple.js');
    require('IEHtml.DraggableDroppable.js');
    require('IEHtml.ZoneNavigation.js');
    require('IEHtml.BtnImage.js');
    require('IEHtml.CheckboxRadio.js');
    require('IEHtml.Identite.js');
    require('IEHtml.Chips.js');
    require('IEHtml.Combo.js');
    require('IEHtml.Bouton.js');
    require('IEHtml.BtnSelecteur.js');
    require('IEHtml.ZoneDessin.js');
    require('IEHtml.SelecFile');
    IEHtml.addAttribut(
      'ie-node',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lValue = aAttributValue || '';
        if (!lValue || !aContexteCourant.controleur) {
          return true;
        }
        const lInfos = aOutils.getAccesParametres(lValue, aContexteCourant);
        if (!lInfos.estFonction) {
          return true;
        }
        aOutils.surInjectionHtml(aContexteCourant, (...aParams) => {
          lInfos.callback(aParams);
        });
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie-node="' + lValue + '"',
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-nodeafter',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lValue = aAttributValue || '';
        if (!lValue || !aContexteCourant.controleur) {
          return true;
        }
        const lInfos = aOutils.getAccesParametres(lValue, aContexteCourant);
        if (!lInfos.estFonction) {
          return true;
        }
        aOutils.surInjectionHtml(
          aContexteCourant,
          (...aParams) => {
            lInfos.callback(aParams);
          },
          true,
        );
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie-nodeafter="' + lValue + '"',
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-event',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lValue = aAttributValue || '';
        if (!aContexteCourant.controleur) {
          return;
        }
        let lTab = lValue.split('->');
        if (lTab.length < 2) {
          return;
        }
        let lMethode;
        const lEvents = lTab[0].trim().split('-');
        let lSelecteur = null;
        lTab.shift();
        lMethode = lTab.join('->');
        if (lMethode.length > 2 && lMethode.charAt(0) === '{') {
          lTab = lMethode.split('}');
          if (lTab.length < 2) {
            return;
          }
          const lNomSelecteur = lTab[0].slice(1);
          lTab.shift();
          lMethode = lTab.join('}');
          if (aContexteCourant.data && aContexteCourant.data[lNomSelecteur]) {
            lSelecteur = aContexteCourant.data[lNomSelecteur];
          } else {
            lSelecteur = lNomSelecteur;
          }
        }
        const lInfos = aOutils.getAccesParametres(lMethode, aContexteCourant);
        if (!lInfos.valide || !lInfos.estFonction) {
          return;
        }
        if (lInfos) {
          const lCallbackEvent = function (aEvent) {
            return lInfos.callback([
              aEvent,
              this,
              aContexteCourant.node,
              aContexteCourant.data,
            ]);
          };
          if (lSelecteur) {
            $(aContexteCourant.node).on(
              lEvents.join(' '),
              lSelecteur,
              { controleur: aContexteCourant.controleur },
              lCallbackEvent,
            );
          } else {
            $(aContexteCourant.node).on(
              lEvents.join(' '),
              { controleur: aContexteCourant.controleur },
              lCallbackEvent,
            );
          }
          aOutils.addCommentaireDebug(
            aContexteCourant.node,
            'ie-event="' + lValue + '"',
          );
          return true;
        } else {
          aOutils.addCommentaireDebug(
            aContexteCourant.node,
            '[ECHEC] ie-event="' + lValue + '"',
          );
        }
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-eventout',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lValue = aAttributValue || '';
        if (!lValue || !aContexteCourant.controleur) {
          return true;
        }
        const lInfos = aOutils.getAccesParametres(lValue, aContexteCourant);
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
              const lResult = lInfos.callback([aEvent, ...aParams]);
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
          'ie-eventout="' + lValue + '"',
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-title',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lNom = aAttributValue || '';
        let lGetter;
        let lOldValue = lNom;
        if (lNom && aContexteCourant.controleur) {
          const lInfos = aOutils.getAccesParametres(
            lNom,
            aContexteCourant,
            true,
          );
          if (lInfos.estFonction) {
            lGetter = function () {
              const lResult =
                (lInfos.callback([
                  aContexteCourant.node,
                  aContexteCourant.data,
                ]) || '') + '';
              return lResult.replace &&
                ObjetChaine_1.GChaine &&
                ObjetChaine_1.GChaine.enleverEntites
                ? ObjetChaine_1.GChaine.enleverEntites(lResult)
                : '';
            };
          }
        }
        if (lGetter) {
          lOldValue = lGetter();
        } else if (lOldValue === 'undefined' || lOldValue === 'null') {
          return false;
        } else {
        }
        $(aContexteCourant.node).attr('title', lOldValue);
        if (lGetter) {
          aOutils.abonnerRefresh(
            () => {
              const lValue = lGetter().toString();
              if (lOldValue !== lValue) {
                lOldValue = lValue;
                $(aContexteCourant.node).attr('title', lOldValue);
              }
            },
            aContexteCourant.node,
            aContexteCourant,
          );
        }
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie-title' + (lNom ? '="' + lNom + '"' : ''),
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-hint',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        if (ObjetHint_1.ObjetHint.getDisabled()) {
          aOutils.addCommentaireDebug(
            aContexteCourant.node,
            'ie-hint (désactivé sur mobile !)',
          );
          return true;
        }
        const lNom = aAttributValue || '';
        let lValue = lNom;
        if (
          lValue &&
          lValue.length > 2 &&
          lValue.charAt(0) === "'" &&
          lValue.charAt(lValue.length - 1) === "'"
        ) {
          lValue = lValue.slice(1, lValue.length - 1);
        } else if (lNom && aContexteCourant.controleur) {
          const lInfos = aOutils.getAccesParametres(
            lNom,
            aContexteCourant,
            true,
          );
          if (lInfos.estFonction) {
            lValue = function (aHint) {
              const lResult = lInfos.callback([
                aHint,
                aContexteCourant.node,
                aContexteCourant.data,
              ]);
              if (lResult && lResult.then) {
                return lResult;
              }
              return (lResult || '') + '';
            };
          }
        }
        if (!lValue) {
          return true;
        }
        ObjetHint_1.ObjetHint.attach({
          $Element: $(aContexteCourant.node),
          namespace: 'iehint',
          contenu: lValue,
          off: false,
        });
        aContexteCourant.node.dataset.avecIeHint = 'true';
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          'ie-hint' + (lNom ? '="' + lNom + '"' : ''),
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-html',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aParametresCompile,
      ) => {
        let lValue = aAttributValue || '';
        if (!lValue) {
          return true;
        }
        if (!aContexteCourant.controleur) {
          return true;
        }
        const lInfos = aOutils.getAccesParametres(lValue, aContexteCourant);
        if (!lInfos.valide) {
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
          'ie-html="' + lValue + '"',
        );
        aParametresCompile.avecCompileFils = false;
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-texte',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lValue = aAttributValue || '';
        if (!lValue) {
          return true;
        }
        if (!aContexteCourant.controleur) {
          return true;
        }
        const lInfos = aOutils.getAccesParametres(lValue, aContexteCourant);
        if (!lInfos.valide) {
          return true;
        }
        const lNodeDestination =
          aContexteCourant.nodeTransfertContenuDynamique ||
          aContexteCourant.node;
        const lGetter = function () {
          const lResult = lInfos.callback([
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
          'ie-texte="' + lValue + '"',
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-style',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        let lValue = aAttributValue || '';
        if (!lValue) {
          return true;
        }
        if (!aContexteCourant.controleur) {
          return true;
        }
        const lInfos = aOutils.getAccesParametres(lValue, aContexteCourant);
        if (!lInfos.valide) {
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
        if (!lInfos.estFonction || !lObjetCss) {
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
          'ie-style="' + lValue + '"',
        );
        return true;
      },
    );
    (function () {
      IEHtml.addAttribut(
        'ie-class',
        (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
          const lValue = aAttributValue || '';
          if (!lValue || !aContexteCourant.controleur) {
            return true;
          }
          const lInfos = aOutils.getAccesParametres(lValue, aContexteCourant);
          if (!lInfos.valide) {
            return true;
          }
          let lClassCss = lInfos.callback() || '';
          if (lClassCss.length > 0) {
            $(aContexteCourant.node).addClass(lClassCss);
          }
          aOutils.abonnerRefresh(
            () => {
              const lNewClassCss = lInfos.callback() || '';
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
            'ie-class="' + lValue + '"',
          );
          return true;
        },
      );
    })();
    (function () {
      IEHtml.addAttribut(
        'ie-display',
        (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
          const lValue = aAttributValue || '';
          if (!lValue || !aContexteCourant.controleur) {
            return true;
          }
          const lInfos = aOutils.getAccesParametres(lValue, aContexteCourant);
          if (!lInfos.valide) {
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
            'ie-display="' + lValue + '"',
          );
          return true;
        },
      );
    })();
    IEHtml.addAttribut(
      'ie-attr',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lValue = aAttributValue || '';
        if (!lValue || !aContexteCourant.controleur) {
          return true;
        }
        const lInfos = aOutils.getAccesParametres(lValue, aContexteCourant);
        if (!lInfos.estFonction) {
          return true;
        }
        const lGetter = function () {
          return lInfos.callback([]);
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
          'ie-attr="' + lValue + '"',
        );
        return true;
      },
    );
    function _initEllipsis(aContexteCourant, aOutils, aAttributValue) {
      const lOptions = { getJNodeHint: null, avecHint: true };
      if (aAttributValue) {
        const lGetOptions = aOutils.getAccesParametres(
          aAttributValue,
          aContexteCourant,
        );
        if (lGetOptions.estFonction) {
          Object.assign(lOptions, lGetOptions.callback());
        } else {
        }
      }
      $(aContexteCourant.node).addClass('ie-ellipsis');
      if (lOptions.avecHint && !ObjetHint_1.ObjetHint.getDisabled()) {
        aOutils.surInjectionHtml(
          aContexteCourant,
          (aParams) => {
            if (ObjetHint_1.ObjetHint.nodeDansHint(aContexteCourant.node)) {
              return;
            }
            aParams.addMutate(() => {
              if (aContexteCourant.node.dataset.avecIeHint) {
                return;
              }
              ObjetHint_1.ObjetHint.attach({
                $Element: MethodesObjet_1.MethodesObjet.isFunction(
                  lOptions.getJNodeHint,
                )
                  ? lOptions.getJNodeHint(aContexteCourant.node)
                  : $(aContexteCourant.node),
                namespace: 'ellipsis',
                contenu: function () {
                  return $(aContexteCourant.node).html();
                },
                interrupt: function () {
                  const lJThis = $(aContexteCourant.node);
                  if (aContexteCourant.node.dataset.avecIeHint) {
                    return true;
                  }
                  if (lJThis.prop('title').length > 0) {
                    return true;
                  }
                  if (
                    Math.ceil(lJThis.outerWidth()) >= lJThis.prop('scrollWidth')
                  ) {
                    return true;
                  }
                },
              });
            });
          },
          true,
        );
      }
    }
    IEHtml.addAttribut(
      'ie-ellipsis',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        _initEllipsis(aContexteCourant, aOutils, aAttributValue);
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-ellipsis');
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-ellipsis-fixe',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        _initEllipsis(aContexteCourant, aOutils, aAttributValue);
        aOutils.surInjectionHtml(
          aContexteCourant,
          (aParams) => {
            let lWidth = null;
            aParams.addMeasure(() => {
              if (!aContexteCourant.node.style.width) {
                lWidth = $(aContexteCourant.node).width();
              }
            });
            aParams.addMutate(() => {
              if (lWidth !== null) {
                $(aContexteCourant.node).width(Math.ceil(lWidth));
              }
            });
          },
          true,
        );
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-ellipsis-fixe');
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-hintoverflow',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        aOutils.surInjectionHtml(
          aContexteCourant,
          (aParams) => {
            aParams.addMutate(() => {
              if (aContexteCourant.node.dataset.avecIeHint) {
                return;
              }
              ObjetHint_1.ObjetHint.attach({
                $Element: $(aContexteCourant.node),
                namespace: 'ie-hintoverflow',
                contenu: function () {
                  return $(aContexteCourant.node).html();
                },
                interrupt: function () {
                  const lJThis = $(this);
                  if (aContexteCourant.node.dataset.avecIeHint) {
                    return true;
                  }
                  if (lJThis.prop('title').length > 0) {
                    return true;
                  }
                  const lScrollH = lJThis.prop('scrollHeight') - 1;
                  const lScrollW = lJThis.prop('scrollWidth') - 1;
                  if (lScrollH < 5 || lScrollW < 5) {
                    return true;
                  }
                  if (
                    Math.ceil(lJThis.outerHeight()) >= lScrollH &&
                    Math.ceil(lJThis.outerWidth()) >= lScrollW
                  ) {
                    return true;
                  }
                },
              });
            });
          },
          true,
        );
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-hintoverflow');
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-selecttextfocus',
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
          'ie-selecttextfocus',
        );
        return true;
      },
    );
    IEHtml.addClass('tiny-view', (aContexteCourant, aNodeName) => {
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
    });
    tslib_1.__exportStar(require('IEHtml'), exports);
  },
  fn: 'iehtmlcomposants.js',
});