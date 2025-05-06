IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('IEHtml.Chips.css');
    const IEHtml = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetWAI_1 = require('ObjetWAI');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ToucheClavier_1 = require('ToucheClavier');
    IEHtml.addBalise('ie-chips', (aContexteCourant, aOutils) => {
      const lModele = aOutils.getModel(aContexteCourant);
      const lInnerHtml = aContexteCourant.node.innerHTML;
      const lHref = aContexteCourant.node.getAttribute('href');
      const lOptions = {
        avecBtn: true,
        classIconeBtn: 'icon_fermeture_widget ',
        titleBtn: 'Supprimer',
        disabled: false,
        selected: false,
      };
      const lHtmlInterneChips = IE.jsx.str(
        'div',
        { class: 'text', 'ie-ellipsis': true },
        lInnerHtml,
      );
      const lElementChips = ObjetHtml_1.GHtml.htmlToDOM(
        lHref
          ? IE.jsx.str(
              'a',
              { href: lHref, target: '_blank' },
              lHtmlInterneChips,
            )
          : IE.jsx.str('div', { tabindex: '0' }, lHtmlInterneChips),
      );
      const lJChips = $(lElementChips);
      let lJBtnSuppr = null;
      let lJRoleButton = $(lElementChips);
      const lJText = lJChips.find('.text');
      let lInfosEvent;
      let lInfosEventBtn;
      let lInfosGetDisabled;
      let lInfosGetOptions;
      let lInfosGetLibelle;
      let lAvecBtnSuppr = false;
      let lFuncGetLabelBtnSuppr = null;
      let lLabelBtnSuppr_bak = '';
      const lRefresh = aContexteCourant.contexte.refresh;
      if (lModele && aContexteCourant.data.$modeleParsed) {
        lInfosEvent = aOutils.getAccesParametresModel(
          'event',
          aContexteCourant,
        );
        lInfosEventBtn = aOutils.getAccesParametresModel(
          'eventBtn',
          aContexteCourant,
        );
        lInfosGetDisabled = aOutils.getAccesParametresModel(
          'getDisabled',
          aContexteCourant,
        );
        const lInfosGetSelected = aOutils.getAccesParametresModel(
          'getSelected',
          aContexteCourant,
        );
        lInfosGetOptions = aOutils.getAccesParametresModel(
          'getOptions',
          aContexteCourant,
        );
        lInfosGetLibelle = aOutils.getAccesParametresModel(
          'getLibelle',
          aContexteCourant,
        );
        if (lInfosGetOptions.estFonction) {
          Object.assign(lOptions, lInfosGetOptions.callback([lElementChips]));
        }
        if (
          lOptions.avecBtn &&
          lOptions.classIconeBtn &&
          lInfosEventBtn &&
          lInfosEventBtn.estFonction
        ) {
          lAvecBtnSuppr = true;
          lJRoleButton = lJText;
        }
        let lGetterDisabled;
        if (lInfosGetDisabled.estFonction) {
          lGetterDisabled = function () {
            return !!lInfosGetDisabled.callback([]);
          };
          lOptions.disabled = lGetterDisabled();
        }
        const lSetDisabled = function () {
          var _a;
          if (lOptions.disabled) {
            lJRoleButton.attr(
              ObjetWAI_1.GObjetWAI.getAttribut(
                ObjetWAI_1.EGenreAttribut.disabled,
              ),
              'true',
            );
            lJBtnSuppr === null || lJBtnSuppr === void 0
              ? void 0
              : lJBtnSuppr.attr(
                  ObjetWAI_1.GObjetWAI.getAttribut(
                    ObjetWAI_1.EGenreAttribut.disabled,
                  ),
                  'true',
                );
            lJChips.addClass('disabled');
          } else {
            lJRoleButton
              .get(0)
              .removeAttribute(
                ObjetWAI_1.GObjetWAI.getAttribut(
                  ObjetWAI_1.EGenreAttribut.disabled,
                ),
              );
            (_a =
              lJBtnSuppr === null || lJBtnSuppr === void 0
                ? void 0
                : lJBtnSuppr.get(0)) === null || _a === void 0
              ? void 0
              : _a.removeAttribute(
                  ObjetWAI_1.GObjetWAI.getAttribut(
                    ObjetWAI_1.EGenreAttribut.disabled,
                  ),
                );
            lJChips.removeClass('disabled');
          }
        };
        if (lInfosGetSelected.estFonction) {
          lOptions.selected = !!lInfosGetSelected.callback([]);
          lOptions.selected
            ? lJChips.addClass('pressed')
            : lJChips.removeClass('pressed');
          lJRoleButton.attr('aria-pressed', lOptions.selected + '');
        }
        if (lGetterDisabled || lInfosGetSelected.estFonction) {
          aOutils.abonnerRefresh(
            () => {
              if (lGetterDisabled) {
                const lDisabled = !!lGetterDisabled();
                if (lDisabled !== lOptions.disabled) {
                  lOptions.disabled = lDisabled;
                  lSetDisabled();
                }
              }
              if (lInfosGetSelected.estFonction) {
                const lEstSelected = !!lInfosGetSelected.callback([]);
                if (lEstSelected !== lOptions.selected) {
                  lOptions.selected = lEstSelected;
                  lOptions.selected
                    ? lJChips.addClass('pressed')
                    : lJChips.removeClass('pressed');
                  lJRoleButton.attr('aria-pressed', lOptions.selected + '');
                }
              }
            },
            lElementChips,
            aContexteCourant,
          );
        }
        if (lAvecBtnSuppr) {
          lFuncGetLabelBtnSuppr = () => {
            return `${lOptions.titleBtn} ${lJText.text()}`;
          };
          lLabelBtnSuppr_bak = lFuncGetLabelBtnSuppr();
          lJChips.append(
            IE.jsx.str('i', {
              class: ['btn', lOptions.classIconeBtn],
              role: 'button',
              tabindex: '0',
              'aria-label': lLabelBtnSuppr_bak,
            }),
          );
          lJBtnSuppr = lJChips.find('>i');
        }
        if (lOptions.disabled) {
          lSetDisabled();
        }
      }
      aOutils.copyAttributs(aContexteCourant.node, lElementChips);
      if (!lHref && lInfosEvent && lInfosEvent.estFonction) {
        lJChips.get(0).removeAttribute('tabindex');
        lJRoleButton.get(0).setAttribute('role', 'button');
        lJRoleButton.get(0).setAttribute('tabindex', '0');
      }
      let lClass = 'ie-chips' + (lHref ? ' AvecMenuContextuel' : '');
      if ((lInfosEvent && lInfosEvent.estFonction) || lHref) {
        lJChips.eventValidation((aEvent) => {
          if (aEvent.originalEvent && '__eventBtn__' in aEvent.originalEvent) {
            return;
          }
          if (lOptions.disabled) {
            if (lHref) {
              return false;
            }
            return;
          }
          if (lInfosEvent && lInfosEvent.estFonction) {
            const lResult = lInfosEvent.callback([aEvent]);
            lRefresh();
            return lResult;
          }
        });
        lClass += ' avec-event ie-ripple ie-ripple-claire';
      }
      if (lJBtnSuppr) {
        lJBtnSuppr.eventValidation((aEvent) => {
          if (lOptions.disabled) {
            return;
          }
          if (aEvent.originalEvent) {
            aEvent.originalEvent.__eventBtn__ = true;
          }
          let lResult = lInfosEventBtn.callback([aEvent]);
          lRefresh();
          if (lHref) {
            lResult = false;
          }
          return lResult;
        });
        lJChips.on('keyup', (aEvent) => {
          if (lOptions.disabled) {
            return;
          }
          if (
            ToucheClavier_1.ToucheClavierUtil.estEventSupprimer(aEvent) ||
            aEvent.which === ToucheClavier_1.ToucheClavier.Backspace
          ) {
            const lResult = lInfosEventBtn.callback([aEvent]);
            lRefresh();
            return lResult;
          }
        });
      }
      lJChips.addClass(lClass);
      const lRacine = lElementChips;
      aOutils.replaceNode(aContexteCourant.node, lRacine);
      aContexteCourant.node = lRacine;
      if (lModele && aContexteCourant.data.$modeleParsed) {
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
      aOutils.addCommentaireDebug(lRacine, 'ie-chips');
      return { node: lRacine, avecCompileFils: true };
    });
  },
  fn: 'iehtml.chips.js',
});