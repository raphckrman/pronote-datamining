IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ChipsEtiquette = exports.Chips = void 0;
    const tslib_1 = require('tslib');
    require('@cp/Produit/Css/IEHtml.Chips.css');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const Tooltip_1 = require('@cp/Produit/Script/Tooltip');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const IconeSvgFermeture_widget_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFermeture_widget');
    const IEHtml_Chips_css_1 = require('@cp/Produit/Css/IEHtml.Chips.css');
    const Chips = (_a) => {
      var { svg } = _a,
        aProps = tslib_1.__rest(_a, ['svg']);
      if ('href' in aProps) {
        return IE.jsx.str(
          'a',
          Object.assign({ [IEHtml_1.IEHtml.attrJsxComp]: 'Chips' }, aProps, {
            'data-iconesvg': svg,
          }),
          aProps.children,
        );
      }
      return IE.jsx.str(
        'div',
        Object.assign({ [IEHtml_1.IEHtml.attrJsxComp]: 'Chips' }, aProps, {
          'data-iconesvg': svg,
        }),
        aProps.children,
      );
    };
    exports.Chips = Chips;
    const ChipsEtiquette = (_a) => {
      var { class: className, svg } = _a,
        aProps = tslib_1.__rest(_a, ['class', 'svg']);
      const lClasses = [
        IEHtml_Chips_css_1.SIEHtmlChips.tagStyle,
        ...(Array.isArray(className)
          ? className
          : className
            ? [className]
            : []),
      ];
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        IEHtml_1.IEHtml.getCommentHtmlDebug(`<ChipsEtiquette>`),
        IE.jsx.str(
          'div',
          Object.assign(
            { [IEHtml_1.IEHtml.attrJsxComp]: 'Chips', class: lClasses },
            aProps,
            { 'data-iconesvg': svg },
          ),
          aProps.children,
        ),
      );
    };
    exports.ChipsEtiquette = ChipsEtiquette;
    IEHtml_1.IEHtml.addJsxComponent('Chips', (aContexteCourant, aOutils) => {
      const lModele = aOutils.getModel(aContexteCourant);
      const lInnerHtml = aContexteCourant.node.innerHTML;
      const lHref = aContexteCourant.node.getAttribute('href');
      const lOptions = {
        avecBtn: true,
        titleBtn: GlossaireCP_1.TradGlossaireCP.Supprimer,
        disabled: false,
        selected: false,
      };
      const lEstEtiquette = aContexteCourant.node.classList.contains(
        IEHtml_Chips_css_1.SIEHtmlChips.tagStyle,
      );
      const lSvg = aContexteCourant.node.dataset.iconesvg || '';
      const lHtmlInterneChips = IE.jsx.str(
        IE.jsx.fragment,
        null,
        lSvg &&
          IE.jsx.str(
            'span',
            { class: IEHtml_Chips_css_1.SIEHtmlChips.chipsSvg },
            lSvg,
          ),
        IE.jsx.str(
          'span',
          { class: IEHtml_Chips_css_1.SIEHtmlChips.text, ie_ellipsis: true },
          lInnerHtml,
        ),
      );
      aContexteCourant.node.removeAttribute('data-iconesvg');
      const lInfosEvent = lModele
        ? aOutils.getAccesParametresModel('event', aContexteCourant)
        : undefined;
      const lInfosEventBtn = lModele
        ? aOutils.getAccesParametresModel('eventBtn', aContexteCourant)
        : undefined;
      const lInfosGetDisabled = lModele
        ? aOutils.getAccesParametresModel('getDisabled', aContexteCourant)
        : undefined;
      const lInfosGetOptions = lModele
        ? aOutils.getAccesParametresModel('getOptions', aContexteCourant)
        : undefined;
      const lInfosGetLibelle = lModele
        ? aOutils.getAccesParametresModel('getLibelle', aContexteCourant)
        : undefined;
      const lInfosGetSelected = lModele
        ? aOutils.getAccesParametresModel('getSelected', aContexteCourant)
        : undefined;
      let lAvecBtnSuppr = false;
      let lAvecBtnChips =
        !lEstEtiquette &&
        !lHref &&
        !!(lInfosEvent === null || lInfosEvent === void 0
          ? void 0
          : lInfosEvent.estFonction);
      const lElementChips = ObjetHtml_1.GHtml.htmlToDOM(
        IE.jsx.str(
          'div',
          null,
          lEstEtiquette
            ? lHtmlInterneChips
            : lHref
              ? IE.jsx.str(
                  'a',
                  {
                    href: lHref,
                    target: '_blank',
                    class: IEHtml_Chips_css_1.SIEHtmlChips.chipsBtn,
                  },
                  lHtmlInterneChips,
                )
              : lAvecBtnChips
                ? IE.jsx.str(
                    'button',
                    { class: IEHtml_Chips_css_1.SIEHtmlChips.chipsBtn },
                    lHtmlInterneChips,
                  )
                : IE.jsx.str(
                    'div',
                    { class: IEHtml_Chips_css_1.SIEHtmlChips.chipsBtn },
                    lHtmlInterneChips,
                  ),
        ),
      );
      const lJChips = $(lElementChips);
      let lJBtnSuppr = null;
      const lNodeInteractif = lEstEtiquette ? null : lElementChips.firstChild;
      const lJText = lJChips.find(`.${IEHtml_Chips_css_1.SIEHtmlChips.text}`);
      let lFuncGetLabelBtnSuppr = null;
      let lLabelBtnSuppr_bak = '';
      const lRefresh = aContexteCourant.contexte.refresh;
      aOutils.copyAttributs(
        aContexteCourant.node,
        lElementChips,
        (aName, aValue) => {
          switch (aName) {
            case 'href':
            case 'target': {
              if (lNodeInteractif) {
                ObjetHtml_1.GHtml.setAttr(lNodeInteractif, aName, aValue);
              }
              return false;
            }
            case 'disabled': {
              if (lNodeInteractif && lAvecBtnChips) {
                ObjetHtml_1.GHtml.setAttr(lNodeInteractif, aName, aValue);
              }
              return false;
            }
          }
          return true;
        },
      );
      if (lModele) {
        if (
          lInfosGetOptions === null || lInfosGetOptions === void 0
            ? void 0
            : lInfosGetOptions.estFonction
        ) {
          Object.assign(lOptions, lInfosGetOptions.callback([lElementChips]));
        }
        if (lOptions.avecBtn && lInfosEventBtn && lInfosEventBtn.estFonction) {
          lAvecBtnSuppr = true;
          if (lEstEtiquette) {
            lAvecBtnSuppr = false;
          }
        }
        let lGetterDisabled;
        if (
          (lInfosGetDisabled === null || lInfosGetDisabled === void 0
            ? void 0
            : lInfosGetDisabled.estFonction) &&
          lNodeInteractif
        ) {
          lGetterDisabled = function () {
            return !!lInfosGetDisabled.callback([lElementChips]);
          };
          lOptions.disabled = lGetterDisabled();
        }
        const lSetDisabled = function () {
          if (!lNodeInteractif) {
            return;
          }
          if (lHref) {
            ObjetHtml_1.GHtml.setAttr(
              lNodeInteractif,
              'href',
              lOptions.disabled ? null : lHref,
            );
          } else if (lAvecBtnChips) {
            ObjetHtml_1.GHtml.setAttr(
              lNodeInteractif,
              'disabled',
              !!lOptions.disabled,
            );
          }
          if (!lAvecBtnChips) {
            ObjetHtml_1.GHtml.setAttr(
              lNodeInteractif,
              'aria-disabled',
              lOptions.disabled ? 'true' : null,
            );
          }
          if (
            lJBtnSuppr === null || lJBtnSuppr === void 0
              ? void 0
              : lJBtnSuppr.get(0)
          ) {
            ObjetHtml_1.GHtml.setAttr(
              lJBtnSuppr.get(0),
              'disabled',
              !!lOptions.disabled,
            );
          }
          if (lOptions.disabled) {
            lJChips.addClass('disabled');
          } else {
            lJChips.removeClass('disabled');
          }
        };
        let lSetterPressed;
        if (
          (lInfosGetSelected === null || lInfosGetSelected === void 0
            ? void 0
            : lInfosGetSelected.estFonction) &&
          !lEstEtiquette
        ) {
          lSetterPressed = () => {
            lOptions.selected = !!lInfosGetSelected.callback([lElementChips]);
            lOptions.selected
              ? lJChips.addClass('pressed')
              : lJChips.removeClass('pressed');
            if (lAvecBtnChips || lHref) {
              ObjetHtml_1.GHtml.setAttr(
                lNodeInteractif,
                'aria-pressed',
                lOptions.selected ? 'true' : 'false',
              );
            }
          };
          lSetterPressed();
        }
        if (
          lGetterDisabled ||
          (lInfosGetSelected === null || lInfosGetSelected === void 0
            ? void 0
            : lInfosGetSelected.estFonction)
        ) {
          aOutils.abonnerRefresh(
            () => {
              if (lGetterDisabled) {
                const lDisabled = !!lGetterDisabled();
                if (lDisabled !== lOptions.disabled) {
                  lOptions.disabled = lDisabled;
                  lSetDisabled();
                }
              }
              if (
                (lInfosGetSelected === null || lInfosGetSelected === void 0
                  ? void 0
                  : lInfosGetSelected.estFonction) &&
                lSetterPressed
              ) {
                const lEstSelected = !!lInfosGetSelected.callback([
                  lElementChips,
                ]);
                if (lEstSelected !== lOptions.selected) {
                  lSetterPressed();
                }
              }
            },
            lElementChips,
            aContexteCourant,
          );
        }
        if (lAvecBtnSuppr && lNodeInteractif) {
          lFuncGetLabelBtnSuppr = () => {
            return `${lOptions.titleBtn} ${lJText.text()}`;
          };
          lLabelBtnSuppr_bak = lFuncGetLabelBtnSuppr();
          lJChips.append(
            IE.jsx.str(
              'button',
              {
                class: [IEHtml_Chips_css_1.SIEHtmlChips.chipsBtnSuppr],
                'aria-label': lLabelBtnSuppr_bak,
                'data-tooltip': Tooltip_1.Tooltip.Type.default,
              },
              IE.jsx.str(
                IconeSvgFermeture_widget_1.IconeSvgFermeture_widget,
                null,
              ),
            ),
          );
          lJBtnSuppr = lJChips.find(
            `>.${IEHtml_Chips_css_1.SIEHtmlChips.chipsBtnSuppr}`,
          );
          lNodeInteractif.classList.add(IEHtml_Chips_css_1.SIEHtmlChips.hasBtn);
        }
        if (lOptions.disabled) {
          lSetDisabled();
        }
      } else {
        if (!lHref && lNodeInteractif && lAvecBtnChips) {
          ObjetHtml_1.GHtml.setAttr(lNodeInteractif, 'disabled', true);
        }
      }
      let lClass = IEHtml_Chips_css_1.SIEHtmlChips.ieChips;
      if (lNodeInteractif && (lAvecBtnChips || lHref)) {
        $(lNodeInteractif).on('validation', (aEvent) => {
          var _a;
          if (
            (_a = aEvent.originalEvent) === null || _a === void 0
              ? void 0
              : _a.eventChipsBtnSuppr
          ) {
            return;
          }
          if (lOptions.disabled) {
            if (lHref) {
              return false;
            }
            return;
          }
          if (lInfosEvent && lInfosEvent.estFonction) {
            if (aEvent.originalEvent) {
              aEvent.originalEvent.eventValidationChips = true;
            }
            const lResult = lInfosEvent.callback([aEvent, lElementChips]);
            lRefresh();
            return lResult;
          }
        });
        lClass +=
          ' avec-event ' +
          [
            IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple,
            IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleClaire,
          ].join(' ');
      }
      if (lJBtnSuppr && lNodeInteractif && lInfosEventBtn) {
        lJBtnSuppr.on('validation', (aEvent) => {
          if (lOptions.disabled) {
            return;
          }
          if (aEvent.originalEvent) {
            aEvent.originalEvent.eventChipsBtnSuppr = true;
            aEvent.originalEvent.eventValidationChips = true;
          }
          let lResult = lInfosEventBtn.callback([aEvent, lElementChips]);
          lRefresh();
          if (lHref) {
            lResult = false;
          }
          return lResult;
        });
        if (lAvecBtnChips || lHref) {
          $(lNodeInteractif).on('keyup', (aEvent) => {
            if (lOptions.disabled) {
              return;
            }
            if (
              ToucheClavier_1.ToucheClavierUtil.estEventSupprimer(aEvent) ||
              aEvent.which === ToucheClavier_1.ToucheClavier.Backspace
            ) {
              const lResult = lInfosEventBtn.callback([aEvent, lElementChips]);
              lRefresh();
              return lResult;
            }
          });
        }
      }
      lJChips.addClass(lClass);
      const lRacine = lElementChips;
      aOutils.replaceNode(aContexteCourant.node, lRacine);
      aContexteCourant.node = lRacine;
      if (lModele) {
        aOutils.surNodeEtNodeAfter(aContexteCourant);
      }
      aContexteCourant.nodeTransfertContenuDynamique = lJText.get(0);
      if (lInfosGetLibelle && lInfosGetLibelle.estFonction) {
        if (aContexteCourant.nodeTransfertContenuDynamique) {
          aOutils.addGetterHtml(aContexteCourant, lInfosGetLibelle);
          if (lFuncGetLabelBtnSuppr) {
            aOutils.abonnerRefresh(
              () => {
                if (lInfosGetLibelle) {
                  const lLabelBtnSuppr = lFuncGetLabelBtnSuppr();
                  if (lLabelBtnSuppr !== lLabelBtnSuppr_bak) {
                    lLabelBtnSuppr_bak = lLabelBtnSuppr;
                    lJBtnSuppr
                      .get(0)
                      .setAttribute('aria-label', lLabelBtnSuppr);
                  }
                }
              },
              lElementChips,
              aContexteCourant,
            );
          }
        }
      }
      aOutils.addCommentaireDebug(lRacine, '<Chips>');
      return { node: lRacine, avecCompileFils: true };
    });
  },
  fn: 'iehtml.chips.js',
});