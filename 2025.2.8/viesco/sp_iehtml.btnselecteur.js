IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const ToucheClavier_1 = require('ToucheClavier');
    const AccessApp_1 = require('AccessApp');
    const IEHtml_BtnSelecteur_css_1 = require('IEHtml.BtnSelecteur.css');
    const fonts_css_1 = require('fonts.css');
    const IEHtml_Ripple_css_1 = require('IEHtml.Ripple.css');
    IEHtml.addBalise('ie-btnselecteur', (aContexteCourant, aOutils) => {
      const lEstMultilines = aContexteCourant.node.classList.contains(
        IEHtml_BtnSelecteur_css_1.StylesIEHtmlBtnSelecteur.multilignes,
      );
      const lInnerHtml = aContexteCourant.node.innerHTML;
      const lBtn = ObjetHtml_1.GHtml.htmlToDOM(
        IE.jsx.str(
          'div',
          {
            class: [
              IEHtml_BtnSelecteur_css_1.StylesIEHtmlBtnSelecteur.ieBtnselecteur,
              IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRipple,
            ],
            tabindex: '0',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str('div', {
            class: IEHtml_BtnSelecteur_css_1.StylesIEHtmlBtnSelecteur.bsIcone,
            'aria-hidden': 'true',
          }),
          IE.jsx.str(
            'div',
            {
              class:
                IEHtml_BtnSelecteur_css_1.StylesIEHtmlBtnSelecteur.bsLibelle,
              'ie-ellipsis': !lEstMultilines,
            },
            lInnerHtml,
          ),
        ),
      );
      const lJBtn = $(lBtn);
      const lDOMIcone = lJBtn
        .find(`>.${IEHtml_BtnSelecteur_css_1.StylesIEHtmlBtnSelecteur.bsIcone}`)
        .get(0);
      const lDOMLibelle = lJBtn
        .find(
          `>.${IEHtml_BtnSelecteur_css_1.StylesIEHtmlBtnSelecteur.bsLibelle}`,
        )
        .get(0);
      const lModele = aOutils.getModel(aContexteCourant);
      let lInfosGetLibelle = null;
      let lInfosEvent = null;
      let lInfosGetIcone = null;
      let lInfosGetHtmlIcone = null;
      let lDisabled =
        aContexteCourant.node.getAttribute('aria-disabled') === 'true';
      const lFuncActualiserDisabled = () => {
        if (lDisabled) {
          aContexteCourant.node.setAttribute('aria-disabled', 'true');
        } else {
          aContexteCourant.node.removeAttribute('aria-disabled');
        }
      };
      if (lModele) {
        lInfosEvent = aOutils.getAccesParametresModel(
          'event',
          aContexteCourant,
        );
        const lInfosGetDisabled = aOutils.getAccesParametresModel(
          'getDisabled',
          aContexteCourant,
        );
        lInfosGetLibelle = aOutils.getAccesParametresModel(
          'getLibelle',
          aContexteCourant,
        );
        lInfosGetIcone = aOutils.getAccesParametresModel(
          'getIcone',
          aContexteCourant,
        );
        lInfosGetHtmlIcone = aOutils.getAccesParametresModel(
          'getIconeHtml',
          aContexteCourant,
        );
        if (lInfosGetDisabled.estFonction) {
          lDisabled = !!lInfosGetDisabled.callback([lBtn]);
          lFuncActualiserDisabled();
          aOutils.abonnerRefresh(
            () => {
              const lDisabledNew = !!lInfosGetDisabled.callback([lBtn]);
              if (lDisabledNew !== lDisabled) {
                lDisabled = lDisabledNew;
                lFuncActualiserDisabled();
              }
            },
            lBtn,
            aContexteCourant,
          );
        }
      }
      let lHtmlPlaceHolder = '';
      aOutils.copyAttributs(aContexteCourant.node, lBtn, (aName, aValue) => {
        if (aName === 'class' && aValue) {
          lJBtn.addClass(aValue);
          return false;
        }
        if (aName === 'placeholder' && aValue) {
          lHtmlPlaceHolder = IE.jsx.str(
            'span',
            { class: 'as-placeholder', 'aria-disabled': 'true' },
            aValue,
          );
          return false;
        }
      });
      let lRole = lBtn.getAttribute('role');
      if (!lRole) {
        lRole = 'combobox';
        lBtn.setAttribute('role', lRole);
      }
      const lEstComboBox = lRole === 'combobox';
      if (lEstComboBox && !lBtn.hasAttribute('aria-expanded')) {
        lBtn.setAttribute('aria-expanded', 'false');
      }
      const lTitle = lBtn.getAttribute('title');
      if (
        lTitle &&
        !lBtn.getAttribute('aria-label') &&
        !lBtn.getAttribute('aria-labelledby')
      ) {
        lBtn.setAttribute('aria-label', lTitle);
      }
      if (lInfosEvent && lInfosEvent.estFonction) {
        lJBtn.eventValidation((aEvent) => {
          if (!lDisabled) {
            lInfosEvent.callback([aEvent, lBtn]);
          }
        });
        if (lEstComboBox) {
          lJBtn.on('keyup', function (aEvent) {
            if (aEvent.which === ToucheClavier_1.ToucheClavier.FlecheBas) {
              lInfosEvent.callback([aEvent, lBtn]);
            }
          });
        }
      }
      const lAvecGetHtmlIcone =
        lInfosGetHtmlIcone && lInfosGetHtmlIcone.estFonction;
      if (!lAvecGetHtmlIcone) {
        const lIconeDefault = fonts_css_1.StylesFonts.icon_ellipsis_horizontal;
        let lFuncGetIncon = () => {
          let lIcone = '';
          if (
            lInfosGetIcone === null || lInfosGetIcone === void 0
              ? void 0
              : lInfosGetIcone.estFonction
          ) {
            lIcone = lInfosGetIcone.callback([
              lBtn,
              lDOMIcone,
              aContexteCourant,
            ]);
          }
          if (!lIcone) {
            lIcone = lIconeDefault;
          }
          return lIcone;
        };
        const lAtrr = {
          'ie-class': (
            lInfosGetIcone === null || lInfosGetIcone === void 0
              ? void 0
              : lInfosGetIcone.estFonction
          )
            ? lFuncGetIncon
            : false,
          class: (
            lInfosGetIcone === null || lInfosGetIcone === void 0
              ? void 0
              : lInfosGetIcone.estFonction
          )
            ? false
            : lIconeDefault,
        };
        $(lDOMIcone).ieHtml(
          IE.jsx.str('i', Object.assign({ role: 'presentation' }, lAtrr)),
        );
      }
      aOutils.surNodeEtNodeAfter(aContexteCourant);
      aOutils.replaceNode(aContexteCourant.node, lBtn);
      aContexteCourant.node = lBtn;
      if (lInfosGetLibelle && lInfosGetLibelle.estFonction) {
        aContexteCourant.nodeTransfertContenuDynamique = lDOMLibelle;
        const lGet = {
          callback() {
            let lResult = lInfosGetLibelle.callback([lBtn]) || '';
            if (!lResult && lHtmlPlaceHolder) {
              lResult = lHtmlPlaceHolder;
            }
            return lResult;
          },
          estFonction: true,
        };
        aOutils.addGetterHtml(aContexteCourant, lGet);
      }
      if (lAvecGetHtmlIcone) {
        aContexteCourant.nodeTransfertContenuDynamique = lDOMIcone;
        aOutils.addGetterHtml(aContexteCourant, lInfosGetHtmlIcone);
      }
      if (
        (0, AccessApp_1.getApp)().estDebug() &&
        lEstComboBox &&
        !lBtn.getAttribute('aria-label') &&
        !lBtn.getAttribute('aria-labelledby')
      ) {
      }
      aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-btnselecteur');
      return { node: aContexteCourant.node, avecCompileFils: true };
    });
  },
  fn: 'iehtml.btnselecteur.js',
});