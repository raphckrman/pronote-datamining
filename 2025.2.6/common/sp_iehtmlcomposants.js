IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StylesIEHtmlComposants = void 0;
    const tslib_1 = require('tslib');
    const IEHtml = require('IEHtml');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetHint_1 = require('ObjetHint');
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
    require('IEHtml.TextareaMax');
    const Divers_css_1 = require('Divers.css');
    const Tooltip_1 = require('Tooltip');
    exports.StylesIEHtmlComposants = {
      ellipsisCancelTitle: 'ellipsisCancelTitle',
    };
    IEHtml.addAttribut(
      'ie-node',
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
          `${aAttrName}="${lInfos.nomCommentaire || lValue}"`,
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-nodeafter',
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
          'ie-nodeafter="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-eventmap',
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
        if (!lInfos.estFuncJSX) {
          return true;
        }
        const lMap = lInfos.callback([aContexteCourant.node]);
        const lMapJQuery = {};
        Object.keys(lMap).forEach((aKey) => {
          if (lMap[aKey]) {
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
          `${aAttrName}="${lKeys.join(', ')}"`,
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-eventvalidation',
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
          $(aContexteCourant.node).eventValidation((aEvent) => {
            lInfos.callback([aEvent, aContexteCourant.node, aContexteCourant]);
          });
        });
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `${aAttrName}="${lInfos.nomCommentaire || lValue}"`,
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-event',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        const lValue = aAttributValue || '';
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
        const lInfos = aOutils.getAccesParametres(
          lMethode,
          aAttrName,
          aContexteCourant,
        );
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
          'ie-eventout="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-title',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        let lNom = aAttributValue || '';
        let lCommValue = lNom;
        let lGetter;
        let lOldValue = lNom;
        if (lNom) {
          const lInfos = aOutils.getAccesParametres(
            lNom,
            aAttrName,
            aContexteCourant,
            aOutils.TypeAccesParametres.default,
            true,
          );
          if (lInfos.estFonction) {
            lCommValue = lInfos.nomCommentaire;
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
          'ie-title' + (lNom ? '="' + lCommValue + '"' : ''),
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-hint',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        if (ObjetHint_1.ObjetHint.getDisabled()) {
          aOutils.addCommentaireDebug(
            aContexteCourant.node,
            'ie-hint (désactivé sur mobile !)',
          );
          return true;
        }
        const lNom = aAttributValue || '';
        let lCommValue = lNom;
        let lValue = lNom;
        if (
          lValue &&
          lValue.length > 2 &&
          lValue.charAt(0) === "'" &&
          lValue.charAt(lValue.length - 1) === "'"
        ) {
          lValue = lValue.slice(1, lValue.length - 1);
        } else if (lNom) {
          const lInfos = aOutils.getAccesParametres(
            lNom,
            aAttrName,
            aContexteCourant,
            aOutils.TypeAccesParametres.default,
            true,
          );
          if (lInfos.estFonction) {
            lCommValue = lInfos.nomCommentaire || lNom;
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
          'ie-hint' + (lCommValue ? '="' + lCommValue + '"' : ''),
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
          `${aAttrName}="${lInfos.nomCommentaire || lValue}"`,
        );
        aParametresCompile.avecCompileFils = false;
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-texte',
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
        if (!lInfos.valide) {
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
          'ie-texte="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-style',
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
        if (!lInfos.valide || !lInfos.estFonction) {
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
          'ie-style="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-class',
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
        if (!lInfos.valide) {
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
    IEHtml.addAttribut(
      'ie-display',
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
          'ie-display="' + (lInfos.nomCommentaire || lValue) + '"',
        );
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-attr',
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
      $(aContexteCourant.node).addClass('ie-ellipsis');
      if (
        !aContexteCourant.node.hasAttribute(Tooltip_1.Tooltip.attrType) &&
        !aContexteCourant.node.hasAttribute(Tooltip_1.Tooltip.attrDisabled)
      ) {
        aContexteCourant.node.setAttribute(
          Tooltip_1.Tooltip.attrType,
          Tooltip_1.Tooltip.Type.ellipsis,
        );
      }
    }
    IEHtml.addAttribut(
      'ie-ellipsis',
      (
        aContexteCourant,
        aNodeName,
        aAttributValue,
        aOutils,
        aComp,
        aAttrName,
      ) => {
        _initEllipsis(aContexteCourant, aOutils, aAttributValue, aAttrName);
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-ellipsis');
        return true;
      },
    );
    IEHtml.addAttribut(
      'ie-ellipsis-fixe',
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
    IEHtml.addClass(
      Divers_css_1.StylesDivers.ellipsisMultilignes,
      (aContexteCourant, aNodeName, aOutils) => {
        var _a;
        if (
          !aContexteCourant.node.hasAttribute('title') &&
          !aContexteCourant.node.hasAttribute(Tooltip_1.Tooltip.attrType) &&
          !((_a = aContexteCourant.node.classList) === null || _a === void 0
            ? void 0
            : _a.contains(exports.StylesIEHtmlComposants.ellipsisCancelTitle))
        ) {
          aOutils.surInjectionHtml(aContexteCourant, (aParams) => {
            const lText = $(aContexteCourant.node).text();
            if (!lText) {
              return;
            }
            let lAvecOverflow = false;
            aParams.addMeasure(() => {
              lAvecOverflow =
                aContexteCourant.node.clientHeight > 0 &&
                aContexteCourant.node.scrollHeight >
                  aContexteCourant.node.clientHeight;
            });
            aParams.addMutate(() => {
              if (lAvecOverflow) {
                aOutils.addCommentaireDebug(
                  aContexteCourant.node,
                  `tooltip ajouté par "${Divers_css_1.StylesDivers.ellipsisMultilignes}"`,
                );
                aContexteCourant.node.setAttribute(
                  Tooltip_1.Tooltip.attrType,
                  Tooltip_1.Tooltip.Type.default,
                );
                aContexteCourant.node.setAttribute(
                  Tooltip_1.Tooltip.attrText,
                  lText,
                );
              }
            });
          });
        }
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
    IEHtml.addClass('img-portrait', (aContexteCourant, aNodeName, aOutils) => {
      if (aNodeName === 'img') {
        const lSetSrcPortrait = () => {
          var _a;
          aContexteCourant.node.setAttribute('src', c_srcPortrait);
          aContexteCourant.node.classList.add('img-portrait-empty');
          (_a = aOutils.getObject('ie-imgviewer')) === null || _a === void 0
            ? void 0
            : _a.detachViewer(aContexteCourant.node);
        };
        const lUtils = IEHtml.outils.getObject('ie-load-src');
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
    });
    const c_srcPortrait = 'FichiersRessource/PortraitSilhouette.png';
    IEHtml.outils.addObject('img-portrait', { srcPortrait: c_srcPortrait });
    IEHtml.addClass(
      Divers_css_1.StylesDivers.tinyView,
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
    tslib_1.__exportStar(require('IEHtml'), exports);
  },
  fn: 'iehtmlcomposants.js',
});