IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const ToucheClavier_1 = require('ToucheClavier');
    require('IEHtml.BtnSelecteur.css');
    IEHtml.addBalise('ie-btnselecteur', (aContexteCourant, aOutils) => {
      const lEstMultilines =
        aContexteCourant.node.classList.contains('multilignes');
      const lInnerHtml = aContexteCourant.node.innerHTML;
      const lBtn = ObjetHtml_1.GHtml.htmlToDOM(
        IE.jsx.str(
          'div',
          {
            class: ['ie-btnselecteur', 'ie-ripple'],
            tabindex: '0',
            'aria-haspopup': 'dialog',
          },
          IE.jsx.str('div', { class: 'bs-icone', 'aria-hidden': 'true' }),
          IE.jsx.str(
            'div',
            { class: 'bs-libelle', 'ie-ellipsis': !lEstMultilines },
            lInnerHtml,
          ),
        ),
      );
      const lJBtn = $(lBtn);
      const lDOMIcone = lJBtn.find('>.bs-icone').get(0);
      const lDOMLibelle = lJBtn.find('>.bs-libelle').get(0);
      const lModele = aOutils.getModel(aContexteCourant);
      let lInfosGetLibelle = null;
      let lInfosEvent = null;
      let lInfosGetHtmIcone = null;
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
        lInfosGetHtmIcone = aOutils.getAccesParametresModel(
          'getIcone',
          aContexteCourant,
        );
        if (lInfosGetDisabled.estFonction) {
          lDisabled = !!lInfosGetDisabled.callback([]);
          lFuncActualiserDisabled();
          aOutils.abonnerRefresh(
            () => {
              const lDisabledNew = !!lInfosGetDisabled.callback([]);
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
        lInfosGetHtmIcone && lInfosGetHtmIcone.estFonction;
      if (!lAvecGetHtmlIcone) {
        $(lDOMIcone).html(
          IE.jsx.str('i', {
            class: IE.estMobile ? 'icon_ul' : 'icon_ellipsis_horizontal',
          }),
        );
      }
      aOutils.surNodeEtNodeAfter(aContexteCourant);
      aOutils.replaceNode(aContexteCourant.node, lBtn);
      aContexteCourant.node = lBtn;
      if (lInfosGetLibelle && lInfosGetLibelle.estFonction) {
        aContexteCourant.nodeTransfertContenuDynamique = lDOMLibelle;
        const lGet = {
          callback() {
            let lResult = lInfosGetLibelle.callback([]) || '';
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
        aOutils.addGetterHtml(aContexteCourant, lInfosGetHtmIcone);
      }
      if (
        GApplication.estDebug() &&
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