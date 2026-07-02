IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.BtnTooltip = exports.BtnImage = exports.BtnIcon = void 0;
    const tslib_1 = require('tslib');
    const IEHtml_BtnImage_css_1 = require('@cp/Produit/Css/IEHtml.BtnImage.css');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ControleSaisieEvenement_1 = require('@cp/script/ControleSaisieEvenement');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const Tooltip_1 = require('@cp/Produit/Script/Tooltip');
    const Tooltip_module_css_1 = require('@cp/Produit/Css/Tooltip.module.css');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const DebugCP_module_css_1 = require('@cp/Produit/Css/DebugCP.module.css');
    const IconeSvgDiffuser_info_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_info');
    const ObjetJSON_1 = require('@cp/script/ObjetJSON');
    const TradBtnImage = ObjetTraduction_1.TraductionsModule.getModule(
      'BtnImage',
      { InformationsComplementaires: '' },
    );
    const BtnIcon = (aProps) => {
      return IE.jsx.str(
        'div',
        Object.assign({ [IEHtml_1.IEHtml.attrJsxComp]: 'BtnIcon' }, aProps),
        aProps.children,
      );
    };
    exports.BtnIcon = BtnIcon;
    const BtnImage = (aProps) => {
      return IE.jsx.str(
        'div',
        Object.assign({ [IEHtml_1.IEHtml.attrJsxComp]: 'BtnImage' }, aProps),
        aProps.children,
      );
    };
    exports.BtnImage = BtnImage;
    const BtnTooltip = (_a) => {
      var { getTooltip, getDisabled, node, nodeAfter } = _a,
        aProps = tslib_1.__rest(_a, [
          'getTooltip',
          'getDisabled',
          'node',
          'nodeAfter',
        ]);
      const lModele = {
        getTooltip: getTooltip,
        getDisabled: getDisabled,
        node: node,
        nodeAfter: nodeAfter,
      };
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        IEHtml_1.IEHtml.getCommentHtmlDebug('BtnTooltip', lModele),
        IE.jsx.str(
          'div',
          Object.assign({}, aProps, {
            [IEHtml_1.IEHtml.attrJsxComp]: 'BtnTooltip',
            ie_model: () => lModele,
          }),
          IE.jsx.str(IconeSvgDiffuser_info_1.IconeSvgDiffuser_info, null),
        ),
      );
    };
    exports.BtnTooltip = BtnTooltip;
    exports.BtnTooltip.getTooltipMrFiche = (aTradMrFiche) => {
      return () => {
        const lMrFiche = ObjetJSON_1.ObjetJSON.parse(aTradMrFiche);
        if (
          !(lMrFiche === null || lMrFiche === void 0
            ? void 0
            : lMrFiche.html) ||
          !(lMrFiche === null || lMrFiche === void 0 ? void 0 : lMrFiche.titre)
        ) {
          return '';
        }
        const lHtml = lMrFiche.html.replaceAll(
          'color: #888888;',
          'color: var(--theme-neutre-sombre);',
        );
        return IE.jsx.str(
          'div',
          { class: Divers_css_1.SD.pAll },
          IE.jsx.str(
            'div',
            { class: [Divers_css_1.SD.ieTitre, Divers_css_1.SD.pBottomL] },
            lMrFiche.titre,
          ),
          lHtml,
        );
      };
    };
    var TypeEtatBtnImage;
    (function (TypeEtatBtnImage) {
      TypeEtatBtnImage[(TypeEtatBtnImage['NonSelectionne'] = 0)] =
        'NonSelectionne';
      TypeEtatBtnImage[(TypeEtatBtnImage['Inactif'] = 1)] = 'Inactif';
      TypeEtatBtnImage[(TypeEtatBtnImage['ClicNonSelectionne'] = 2)] =
        'ClicNonSelectionne';
      TypeEtatBtnImage[(TypeEtatBtnImage['Selectionne'] = 3)] = 'Selectionne';
      TypeEtatBtnImage[(TypeEtatBtnImage['SurvolNonSelectionne'] = 4)] =
        'SurvolNonSelectionne';
      TypeEtatBtnImage[(TypeEtatBtnImage['SurvolSelectionne'] = 5)] =
        'SurvolSelectionne';
    })(TypeEtatBtnImage || (TypeEtatBtnImage = {}));
    IEHtml_1.IEHtml.addJsxComponent(
      'BtnImage',
      (aContexteCourant, aOutils, aNomBalise) => {
        return _ieBtn(false, false, aContexteCourant, aOutils, aNomBalise);
      },
    );
    IEHtml_1.IEHtml.addJsxComponent(
      'BtnIcon',
      (aContexteCourant, aOutils, aNomBalise) => {
        return _ieBtn(true, false, aContexteCourant, aOutils, aNomBalise);
      },
    );
    IEHtml_1.IEHtml.addJsxComponent(
      'BtnTooltip',
      (aContexteCourant, aOutils, aNomBalise) => {
        return _ieBtn(true, true, aContexteCourant, aOutils, aNomBalise);
      },
    );
    function _ieBtn(
      aForcerIcone,
      aEstBtnTooltip,
      aContexteCourant,
      aOutils,
      aNomBalise,
    ) {
      let lEstIcone;
      let lEstSVG;
      let lInfosGetSelection;
      let lAvecAriaPressed = false;
      function _actualiser(aJBouton, aData, aEtat) {
        if (lAvecAriaPressed) {
          aJBouton.attr('aria-pressed', aData.$selection ? 'true' : 'false');
        }
        if (lEstIcone) {
          if (aData.$selection) {
            aJBouton.addClass('btnImageSelection');
          } else {
            aJBouton.removeClass('btnImageSelection');
          }
        }
        if (lEstIcone || lEstSVG) {
          return;
        }
        if (!aData.$disabled) {
          if (aData.$selection) {
            aData.$genre = aEtat.survol
              ? TypeEtatBtnImage.SurvolSelectionne
              : TypeEtatBtnImage.Selectionne;
          } else if (aEtat.clique) {
            aData.$genre = TypeEtatBtnImage.ClicNonSelectionne;
          } else {
            aData.$genre = aEtat.survol
              ? TypeEtatBtnImage.SurvolNonSelectionne
              : TypeEtatBtnImage.NonSelectionne;
          }
        } else {
          aData.$genre = TypeEtatBtnImage.Inactif;
        }
        aJBouton.css(
          'background-position',
          -aData.$width * aData.$genre + 'px 0',
        );
      }
      const lEtat = { clique: false, survol: false };
      Object.assign(aContexteCourant.data, {
        $width: 20,
        $selection: false,
        $genre: TypeEtatBtnImage.NonSelectionne,
        $disabled: false,
      });
      const lData = aContexteCourant.data;
      const lNodeName = aContexteCourant.node.nodeName.toLowerCase();
      const lInnerHtml = aContexteCourant.node.innerHTML;
      lEstSVG = !!lInnerHtml && $(aContexteCourant.node).find('svg').length > 0;
      const lEstIconeStandard =
        aForcerIcone ||
        $(aContexteCourant.node).hasClass(
          IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImageIcon,
        );
      lEstIcone =
        lEstIconeStandard ||
        $(aContexteCourant.node).hasClass('ObjetBoutonMenu_icone');
      let lGetterTooltip;
      const lFuncToolTipDescr = aEstBtnTooltip
        ? () => {
            if (lGetterTooltip) {
              return lGetterTooltip();
            }
            return '';
          }
        : false;
      let lTabIndexRef = '0';
      const lBouton = lEstIcone
        ? ObjetHtml_1.GHtml.htmlToDOM(
            IE.jsx.str('i', {
              role: 'button',
              tabindex: lTabIndexRef,
              'aria-label': aEstBtnTooltip
                ? TradBtnImage.InformationsComplementaires
                : false,
              ie_tooltipdescribe: lFuncToolTipDescr,
              'data-tooltip-align': aEstBtnTooltip
                ? Tooltip_1.Tooltip.Align.top
                : false,
            }),
          )
        : ObjetHtml_1.GHtml.htmlToDOM(
            IE.jsx.str('div', { role: 'button', tabindex: lTabIndexRef }),
          );
      const lJBouton = $(lBouton);
      lJBouton.ieData(aContexteCourant.data);
      const lTestWAILabel = () => {
        var _a;
        const lNode = lJBouton.get(0);
        if (
          lNode &&
          lNode.getAttribute &&
          !['none', 'presentation'].includes(
            lNode.getAttribute('role') || '',
          ) &&
          !((_a = lNode.closest) === null || _a === void 0
            ? void 0
            : _a.call(lNode, '[aria-hidden="true"]')) &&
          !lNode.classList.contains(
            IEHtml_1.IEHtml.Styles.debugWAIInputIgnoreAssert,
          )
        ) {
          lNode.classList.add(DebugCP_module_css_1.SDebugCP.debugWAIBk);
        }
      };
      let lInfosEvent,
        lInfosGetDisabled,
        lInfosGetTitle,
        lInfosGetTooltip,
        lAvecControleSaisie,
        lDisabled = false,
        lModele = aOutils.getModel(aContexteCourant);
      const lAvecTooltiplabel =
        aContexteCourant.node.hasAttribute('ie_tooltiplabel') ||
        aContexteCourant.node.hasAttribute('ie_tooltiplabel_static');
      let lAvecLabelAccessible =
        lAvecTooltiplabel ||
        aContexteCourant.node.hasAttribute('aria-label') ||
        aContexteCourant.node.hasAttribute('aria-labelledby');
      let lLabelWAIManquant = !lAvecLabelAccessible;
      const lSetDisabled = function (aDisabled) {
        if (aDisabled) {
          lJBouton.attr('aria-disabled', 'true');
          if (lTabIndexRef !== undefined) {
            lJBouton.attr('tabindex', '-1');
          }
          lJBouton.addClass(
            IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImageDisable,
          );
          if (aEstBtnTooltip) {
            lBouton.setAttribute(Tooltip_1.Tooltip.attrDisabled, 'true');
          }
        } else {
          lJBouton.get(0).removeAttribute('aria-disabled');
          if (lTabIndexRef !== undefined) {
            lJBouton.attr('tabindex', lTabIndexRef);
          } else {
            lJBouton.get(0).removeAttribute('tabindex');
          }
          lJBouton.removeClass(
            IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImageDisable,
          );
          if (aEstBtnTooltip) {
            lBouton.removeAttribute(Tooltip_1.Tooltip.attrDisabled);
          }
        }
      };
      aOutils.copyAttributs(aContexteCourant.node, lBouton, (aName, aValue) => {
        if (
          aName === 'title' &&
          aValue &&
          (!lInfosGetTitle || !lInfosGetTitle.estFonction)
        ) {
          if (aEstBtnTooltip) {
            return false;
          }
          if (lAvecTooltiplabel) {
            return false;
          }
          lJBouton.attr('aria-label', aValue);
          lJBouton.attr(
            Tooltip_1.Tooltip.attrType,
            Tooltip_1.Tooltip.Type.default,
          );
          lLabelWAIManquant = false;
          return false;
        } else if (aName === 'aria-label') {
          if (aEstBtnTooltip) {
            return false;
          }
          if (lAvecTooltiplabel) {
            return false;
          }
          lJBouton.attr(
            Tooltip_1.Tooltip.attrType,
            Tooltip_1.Tooltip.Type.default,
          );
          return true;
        } else if (aName === 'disabled') {
          lDisabled = true;
          return false;
        } else if (aName === 'tabindex') {
          lTabIndexRef = aValue;
          return true;
        }
      });
      if (aEstBtnTooltip) {
        lBouton.classList.add(
          IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnTooltip,
          Divers_css_1.SD.ThemeBleu,
        );
        lBouton.setAttribute(
          Tooltip_1.Tooltip.attrType,
          Tooltip_1.Tooltip.Type.default,
        );
        lBouton.setAttribute(Tooltip_1.Tooltip.attrBtn, 'true');
        lBouton.setAttribute(
          Tooltip_1.Tooltip.attrClass,
          Tooltip_module_css_1.STooltip.btntooltip,
        );
      }
      if (lModele) {
        let lGetSelection;
        let lGetterDisabled;
        if (aEstBtnTooltip) {
          lInfosGetTooltip = aOutils.getAccesParametresModel(
            'getTooltip',
            aContexteCourant,
          );
          if (!lInfosGetTooltip.estFonction) {
          } else {
            lGetterTooltip = () => {
              return lInfosGetTooltip.callback([lBouton, lData]);
            };
          }
        } else {
          lInfosEvent = aOutils.getAccesParametresModel(
            'event',
            aContexteCourant,
          );
          lInfosGetSelection = aOutils.getAccesParametresModel(
            'getSelection',
            aContexteCourant,
          );
          lInfosGetTitle = aOutils.getAccesParametresModel(
            'getTitle',
            aContexteCourant,
          );
        }
        lInfosGetDisabled = aOutils.getAccesParametresModel(
          'getDisabled',
          aContexteCourant,
        );
        const lRefresh = aContexteCourant.contexte.refresh;
        lAvecControleSaisie = aOutils.getControleSaisieEvent(lJBouton.get(0));
        if (
          lInfosEvent === null || lInfosEvent === void 0
            ? void 0
            : lInfosEvent.estFonction
        ) {
          lJBouton.on('validation', function (event) {
            if (lData.$disabled || aContexteCourant.contexte.modeImpression) {
              return;
            }
            const lAction = () => {
              const lResult = lInfosEvent.callback([
                event,
                this,
                aContexteCourant.data,
              ]);
              lRefresh();
              return lResult;
            };
            if (lAvecControleSaisie) {
              (0, ControleSaisieEvenement_1.ControleSaisieEvenement)(lAction);
            } else {
              return lAction();
            }
          });
        }
        if (
          lInfosGetSelection === null || lInfosGetSelection === void 0
            ? void 0
            : lInfosGetSelection.estFonction
        ) {
          lGetSelection = function () {
            return !!lInfosGetSelection.callback([
              aContexteCourant.node,
              aContexteCourant.data,
            ]);
          };
          lData.$selection = lGetSelection();
          lAvecAriaPressed = !!(lInfosGetSelection === null ||
          lInfosGetSelection === void 0
            ? void 0
            : lInfosGetSelection.estFonction);
          if (lAvecAriaPressed) {
            const lInfosGetDisabledAriaPressed =
              aOutils.getAccesParametresModel(
                'getDisabledAriaPressed',
                aContexteCourant,
              );
            if (
              lInfosGetDisabledAriaPressed === null ||
              lInfosGetDisabledAriaPressed === void 0
                ? void 0
                : lInfosGetDisabledAriaPressed.estFonction
            ) {
              lAvecAriaPressed = !lInfosGetDisabledAriaPressed.callback([
                aContexteCourant.node,
                aContexteCourant.data,
              ]);
            }
          }
        }
        if (
          lInfosGetDisabled === null || lInfosGetDisabled === void 0
            ? void 0
            : lInfosGetDisabled.estFonction
        ) {
          lGetterDisabled = function () {
            return !!lInfosGetDisabled.callback([
              lBouton,
              aContexteCourant.data,
            ]);
          };
          lDisabled = !!lGetterDisabled();
        }
        if (
          lInfosGetTitle === null || lInfosGetTitle === void 0
            ? void 0
            : lInfosGetTitle.estFonction
        ) {
          Tooltip_1.Tooltip.addNodeLabelDescribe(
            lBouton,
            'tooltip btnicon',
            true,
            lInfosGetTitle,
            true,
          );
          lLabelWAIManquant = false;
        }
        if (lGetSelection || lGetterDisabled) {
          aOutils.abonnerRefresh(
            () => {
              let lActualiser = false;
              if (lGetSelection) {
                const lSelection = lGetSelection();
                if (lSelection !== lData.$selection) {
                  lData.$selection = lSelection;
                  lActualiser = true;
                }
              }
              if (lGetterDisabled) {
                const lDisabled = !!lGetterDisabled();
                if (lDisabled !== lData.$disabled) {
                  lData.$disabled = lDisabled;
                  if (lDisabled) {
                    lTabIndexRef = lJBouton.attr('tabindex');
                  }
                  lSetDisabled(lDisabled);
                  lActualiser = true;
                }
              }
              if (lActualiser) {
                _actualiser(lJBouton, aContexteCourant.data, lEtat);
              }
            },
            lBouton,
            aContexteCourant,
          );
        }
      }
      if (!lBouton.style.width) {
        if (!lEstSVG && !lEstIconeStandard) {
          lBouton.style.width = lData.$width + 'px';
        }
      } else {
        lData.$width = parseInt(lBouton.style.width, 10) || lData.$width;
      }
      lData.$disabled = lDisabled;
      _actualiser(lJBouton, aContexteCourant.data, lEtat);
      if (lDisabled) {
        lSetDisabled(lDisabled);
      }
      lJBouton
        .addClass(IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImage)
        .on('focusin mouseover', () => {
          lEtat.survol = true;
          _actualiser(lJBouton, aContexteCourant.data, lEtat);
        })
        .on('focusout mouseout', () => {
          lEtat.survol = false;
          _actualiser(lJBouton, aContexteCourant.data, lEtat);
        })
        .on('pointerdown', () => {
          lEtat.clique = true;
          _actualiser(lJBouton, aContexteCourant.data, lEtat);
          Invocateur_1.Invocateur.abonnerUnique(
            ObjetNavigateur_1.Navigateur.getEventInvocateur('pointerup'),
            () => {
              lEtat.clique = false;
              _actualiser(lJBouton, aContexteCourant.data, lEtat);
            },
          );
        });
      const lRacine = lJBouton.get(0);
      aOutils.replaceNode(aContexteCourant.node, lRacine);
      if (lModele) {
        aOutils.surNodeEtNodeAfter(aContexteCourant);
      }
      aOutils.addCommentaireDebug(lRacine, aNomBalise);
      if (lInnerHtml) {
        aOutils.injectHTML({
          element: lRacine,
          html: lInnerHtml,
          instance: aContexteCourant.instance,
          ignorerScroll: true,
          contexte: aContexteCourant.contexte,
        });
      }
      return { node: lRacine, avecCompileFils: false };
    }
  },
  fn: 'iehtml.btnimage.js',
});