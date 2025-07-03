IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml_BtnImage_css_1 = require('IEHtml.BtnImage.css');
    const IEHtml = require('IEHtml');
    const Invocateur_1 = require('Invocateur');
    const ObjetHtml_1 = require('ObjetHtml');
    const ControleSaisieEvenement_1 = require('ControleSaisieEvenement');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const Divers_css_1 = require('Divers.css');
    const Tooltip_1 = require('Tooltip');
    const fonts_css_1 = require('fonts.css');
    const Tooltip_module_css_1 = require('Tooltip.module.css');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TradBtnImage = ObjetTraduction_1.TraductionsModule.getModule(
      'BtnImage',
      { InformationsComplementaires: '' },
    );
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
    IEHtml.addBalise('ie-btnimage', (aContexteCourant, aOutils) => {
      return _ieBtn(false, false, aContexteCourant, aOutils);
    });
    IEHtml.addBalise('ie-btnicon', (aContexteCourant, aOutils) => {
      return _ieBtn(true, false, aContexteCourant, aOutils);
    });
    IEHtml.addBalise('ie-btntooltip', (aContexteCourant, aOutils) => {
      return _ieBtn(true, true, aContexteCourant, aOutils);
    });
    function _ieBtn(aForcerIcone, aEstBtnTooltip, aContexteCourant, aOutils) {
      let lEstIcone;
      let lEstSVG;
      let lInfosGetSelection;
      function _actualiser(aJBouton, aData, aEtat) {
        if (lEstIcone) {
          if (aData.$selection) {
            aJBouton.addClass('btnImageSelection');
          } else {
            aJBouton.removeClass('btnImageSelection');
          }
          if (lInfosGetSelection && lInfosGetSelection.valide) {
            aJBouton.attr('aria-pressed', aData.$selection ? 'true' : 'false');
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
          IEHtml_BtnImage_css_1.StylesIEHtmlBtnImage.btnImageIcon,
        );
      lEstIcone =
        lEstIconeStandard ||
        $(aContexteCourant.node).hasClass('btn-bandeau') ||
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
      const lBouton = lEstIcone
        ? ObjetHtml_1.GHtml.htmlToDOM(
            IE.jsx.str('i', {
              role: 'button',
              tabindex: '0',
              'aria-label': aEstBtnTooltip
                ? TradBtnImage.InformationsComplementaires
                : false,
              'ie-tooltipdescribe': lFuncToolTipDescr,
              'data-tooltip-align': aEstBtnTooltip
                ? Tooltip_1.Tooltip.Align.top
                : false,
            }),
          )
        : ObjetHtml_1.GHtml.htmlToDOM(
            IE.jsx.str('div', { role: 'button', tabindex: '0' }),
          );
      const lJBouton = $(lBouton);
      lJBouton.ieData(aContexteCourant.data);
      const lTestWAILabel = () => {
        var _a;
        const lNode = lJBouton.get(0);
        if (
          lNode &&
          lNode.getAttribute &&
          !['none', 'presentation'].includes(lNode.getAttribute('role')) &&
          !((_a = lNode.closest) === null || _a === void 0
            ? void 0
            : _a.call(lNode, '[aria-hidden="true"]')) &&
          !lNode.classList.contains(IEHtml.Styles.debugWAIInputIgnoreAssert)
        ) {
          lNode.classList.add(Divers_css_1.StylesDivers.debugWAIBk);
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
        aContexteCourant.node.hasAttribute('ie-tooltiplabel') ||
        aContexteCourant.node.hasAttribute('ie-tooltiplabel-static');
      let lAvecLabelAccessible =
        lAvecTooltiplabel ||
        aContexteCourant.node.hasAttribute('aria-label') ||
        aContexteCourant.node.hasAttribute('aria-labelledby');
      let lLabelWAIManquant = !lAvecLabelAccessible;
      const lSetDisabled = function (aDisabled) {
        if (aDisabled) {
          lJBouton.attr('aria-disabled', 'true');
          lJBouton.addClass(
            IEHtml_BtnImage_css_1.StylesIEHtmlBtnImage.btnImageDisable,
          );
          if (aEstBtnTooltip) {
            lBouton.setAttribute(Tooltip_1.Tooltip.attrDisabled, 'true');
          }
        } else {
          lJBouton.get(0).removeAttribute('aria-disabled');
          lJBouton.removeClass(
            IEHtml_BtnImage_css_1.StylesIEHtmlBtnImage.btnImageDisable,
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
        }
      });
      if (aEstBtnTooltip) {
        lBouton.classList.add(
          IEHtml_BtnImage_css_1.StylesIEHtmlBtnImage.btnTooltip,
          fonts_css_1.StylesFonts.icon_diffuser_info,
          Divers_css_1.StylesDivers.ThemeBleu,
        );
        lBouton.setAttribute(
          Tooltip_1.Tooltip.attrType,
          Tooltip_1.Tooltip.Type.default,
        );
        lBouton.setAttribute(Tooltip_1.Tooltip.attrBtn, 'true');
        lBouton.setAttribute(
          Tooltip_1.Tooltip.attrClass,
          Tooltip_module_css_1.StylesTooltip.btntooltip,
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
          lJBouton.eventValidation(function (event) {
            if (lData.$disabled) {
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
            : lInfosGetSelection.valide
        ) {
          lGetSelection = function () {
            return !!lInfosGetSelection.callback([
              aContexteCourant.node,
              aContexteCourant.data,
            ]);
          };
          lData.$selection = lGetSelection();
        }
        if (
          lInfosGetDisabled === null || lInfosGetDisabled === void 0
            ? void 0
            : lInfosGetDisabled.valide
        ) {
          lGetterDisabled = function () {
            return !!lInfosGetDisabled.callback([
              lBouton,
              aContexteCourant.data,
            ]);
          };
          if (
            lInfosGetDisabled.estFonction ||
            !lGetterDisabled() ||
            lGetterDisabled() === true
          ) {
            lDisabled = !!lGetterDisabled();
          } else {
            lGetterDisabled = null;
            IE.log.addLog(
              'echec getDisabled de ie-bouton, propriété incorrecte du model "' +
                lModele +
                '"',
            );
          }
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
        .addClass(IEHtml_BtnImage_css_1.StylesIEHtmlBtnImage.btnImage)
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
      aOutils.addCommentaireDebug(lRacine, lNodeName);
      if (lInnerHtml) {
        aOutils.injectHTML({
          element: lRacine,
          html: lInnerHtml,
          controleur: aContexteCourant.controleur,
          ignorerScroll: true,
          contexte: aContexteCourant.contexte,
        });
      }
      return { node: lRacine, avecCompileFils: false };
    }
  },
  fn: 'iehtml.btnimage.js',
});