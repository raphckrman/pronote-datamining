IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IESwitch_css_1 = require('IESwitch.css');
    const IEHtml_CheckboxRadio_css_1 = require('IEHtml.CheckboxRadio.css');
    const IEHtml = require('IEHtml');
    const GUID_1 = require('GUID');
    const AccessApp_1 = require('AccessApp');
    const Divers_css_1 = require('Divers.css');
    var TypeCBRadio;
    (function (TypeCBRadio) {
      TypeCBRadio['checkbox'] = 'checkbox';
      TypeCBRadio['radio'] = 'radio';
      TypeCBRadio['switch'] = 'switch';
    })(TypeCBRadio || (TypeCBRadio = {}));
    const c_GenerateurGUID = new GUID_1.GenerateurGUID();
    function _creerCBEtRB(aContexteCourant, aType, aOutils) {
      const lInnerHTML = aContexteCourant.node.innerHTML;
      const lNomModele = aOutils.getModel(aContexteCourant);
      const lAvecIEHtml = aContexteCourant.node.hasAttribute('ie-html');
      const lAvecIETexte = aContexteCourant.node.hasAttribute('ie-texte');
      const lInfosGetLibelle = lNomModele
        ? aOutils.getAccesParametresModel('getLibelle', aContexteCourant)
        : null;
      const lAvecGetLibelle = lInfosGetLibelle && lInfosGetLibelle.estFonction;
      const lAvecLibelle =
        lInnerHTML.length > 0 || lAvecIEHtml || lAvecIETexte || lAvecGetLibelle;
      let lJModele;
      let lJInput;
      let lRacine;
      let llName;
      let lContexteCourant;
      const lMap = aOutils.getMapDeNode(aContexteCourant.node);
      let lEventMap;
      let lEtatIndetermine = false;
      let lSubstitution = true;
      let lEstDroite = false;
      if (!lEstDroite && aContexteCourant.node.hasAttribute('ie-textleft')) {
        lEstDroite = true;
      }
      aContexteCourant.data.estRadioBouton = aType === TypeCBRadio.radio;
      const lIdInput = lMap['id'] || `cb-${c_GenerateurGUID.get()}-gen-for`;
      let lClassCss;
      let lClassSpan = '';
      if (aType === TypeCBRadio.switch) {
        lClassCss =
          IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.ieswitch +
          ' ' +
          (lEstDroite
            ? IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.iecbrbdroite
            : IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio
                .iecbrbgauche);
        lClassSpan = IESwitch_css_1.StylesIESwitch.lever;
      } else {
        lClassCss =
          IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.iecb +
          ' ' +
          (lEstDroite
            ? IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.iecbrbdroite
            : IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio
                .iecbrbgauche);
      }
      if (
        $(aContexteCourant.node).hasClass(
          IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.asChips,
        )
      ) {
        let lImageIconChips =
          aContexteCourant.node.getAttribute('ie-icon') || '';
        if (lImageIconChips) {
          aContexteCourant.node.removeAttribute('ie-icon');
        }
        lClassCss += ' ' + lImageIconChips;
      }
      const lHtmlLabel = IE.jsx.str(
        'label',
        { class: lClassCss, for: lIdInput },
        IE.jsx.str('input', {
          type: aType !== TypeCBRadio.radio ? 'checkbox' : 'radio',
          id: lIdInput,
          role: aType === TypeCBRadio.switch ? 'switch' : false,
          class: Divers_css_1.StylesDivers.srOnly,
        }),
        IE.jsx.str('span', {
          class: lClassSpan || false,
          'aria-hidden': 'true',
        }),
        !lInnerHTML && lAvecLibelle ? IE.jsx.str('span', null) : '',
      );
      lJModele = $(
        aType === TypeCBRadio.switch
          ? IE.jsx.str(
              'div',
              { class: IESwitch_css_1.StylesIESwitch.switch },
              lHtmlLabel,
            )
          : lHtmlLabel,
      );
      lJInput = lJModele.find('input');
      lRacine = lJModele.get(0);
      const lElementInput = lJInput.get(0);
      lJModele.ieData(aContexteCourant.data);
      Object.assign(aContexteCourant.data, {
        $couleurActif: '',
        $couleurInactif: (0, AccessApp_1.getApp)().getCouleur().nonEditable
          .texte,
        $AvecMain: true,
      });
      for (llName in lMap) {
        if (
          llName !== 'type' &&
          llName !== 'ie-textleft' &&
          llName !== 'ie-icon'
        ) {
          try {
            if (
              llName === 'style' ||
              llName === 'title' ||
              aOutils.composantsAttributs[llName] ||
              llName === 'aria-hidden' ||
              llName === 'inert'
            ) {
              lJModele.attr(llName, lMap[llName]);
              if (!lSubstitution && llName !== 'style') {
                lJInput.removeAttr(llName);
              }
            } else if (llName === 'class') {
              lJModele.addClass(lMap[llName]);
            } else {
              if (lSubstitution) {
                lJInput.attr(llName, lMap[llName]);
              }
            }
          } catch (e) {}
        }
      }
      if (aType === TypeCBRadio.radio && lNomModele) {
        let lName = '';
        const lInfosGetName = aOutils.getAccesParametresModel(
          'getName',
          aContexteCourant,
        );
        if (
          lInfosGetName === null || lInfosGetName === void 0
            ? void 0
            : lInfosGetName.estFonction
        ) {
          lName = lInfosGetName.callback([aContexteCourant.node]);
        }
        if (lName) {
          lJInput.attr('name', lName);
        }
      }
      if (
        aType === TypeCBRadio.radio &&
        !lMap.name &&
        lNomModele &&
        aContexteCourant.data.$modeleParsed &&
        aContexteCourant.controleur
      ) {
        lJInput.attr(
          'name',
          aContexteCourant.controleur.$GUID +
            '_' +
            aContexteCourant.data.$modeleParsed.nom,
        );
      }
      if (aType === TypeCBRadio.checkbox) {
        lEtatIndetermine = lElementInput.indeterminate;
        if (lNomModele) {
          const lInfosGetIndeterminate = aOutils.getAccesParametresModel(
            'getIndeterminate',
            aContexteCourant,
          );
          if (lInfosGetIndeterminate.estFonction) {
            lEtatIndetermine = !!lInfosGetIndeterminate.callback([
              aContexteCourant.node,
            ]);
            aOutils.abonnerRefresh(
              () => {
                const lEtat = !!lInfosGetIndeterminate.callback([
                  aContexteCourant.node,
                ]);
                if (lEtat !== lElementInput.indeterminate) {
                  lEtatIndetermine = lEtat;
                  lElementInput.indeterminate = lEtatIndetermine;
                }
              },
              lElementInput,
              aContexteCourant,
            );
          }
        }
      }
      lEventMap = {};
      lEventMap.focus = function () {
        $(this).parent().triggerHandler('focusin');
      };
      lEventMap.blur = function () {
        $(this).parent().triggerHandler('focusout');
      };
      lJInput.on(lEventMap);
      if (
        aContexteCourant.data.$modeleValue ||
        aContexteCourant.data.$modelObjectJSX
      ) {
        lContexteCourant = Object.assign({}, aContexteCourant);
        lContexteCourant.node = lElementInput;
        aOutils.gererInputCB(lContexteCourant, lMap.type);
      } else {
        lJInput.on(IEHtml.C_eventsModifyCheckbox, () => {
          aContexteCourant.contexte.refresh();
        });
      }
      if (lEtatIndetermine) {
        lElementInput.indeterminate = lEtatIndetermine;
      }
      const lJLabelParent = lJInput.closest('label');
      const lGetDisabled = function () {
        return lJInput.is(':disabled');
      };
      let lEstDisabled = lGetDisabled();
      if (lEstDisabled) {
        lJLabelParent.addClass(
          IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.isDisabled,
        );
      }
      const lGetChecked = function () {
        return lJInput.is(':checked');
      };
      let lEstChecked = lGetChecked();
      if (lEstChecked) {
        lJLabelParent.addClass(
          IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.isChecked,
        );
      }
      const lGetIndeterminate = function () {
        return lJInput.is(':indeterminate');
      };
      let lEstIndeterminate = lGetIndeterminate();
      if (lEstIndeterminate) {
        lJLabelParent.addClass('is-indeterminate');
      }
      aOutils.abonnerRefresh(
        () => {
          const lNewEstDisabled = lGetDisabled();
          if (lNewEstDisabled !== lEstDisabled) {
            if (lNewEstDisabled) {
              lJLabelParent.addClass(
                IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.isDisabled,
              );
            } else {
              lJLabelParent.removeClass(
                IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.isDisabled,
              );
            }
            lEstDisabled = lNewEstDisabled;
          }
          const lNewEstChecked = lGetChecked();
          if (lNewEstChecked !== lEstChecked) {
            if (lNewEstChecked) {
              lJLabelParent.addClass(
                IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.isChecked,
              );
            } else {
              lJLabelParent.removeClass(
                IEHtml_CheckboxRadio_css_1.StylesIEHtmlCheckboxRadio.isChecked,
              );
            }
            lEstChecked = lNewEstChecked;
          }
          const lNewEstIndeterminate = lGetIndeterminate();
          if (lNewEstIndeterminate !== lEstIndeterminate) {
            if (lNewEstIndeterminate) {
              lJLabelParent.addClass('is-indeterminate');
            } else {
              lJLabelParent.removeClass('is-indeterminate');
            }
            lEstIndeterminate = lNewEstIndeterminate;
          }
        },
        lElementInput,
        aContexteCourant,
      );
      if (lSubstitution) {
        aOutils.replaceNode(aContexteCourant.node, lRacine);
      }
      aOutils.addCommentaireDebug(lRacine, 'ie-' + aType);
      if (lAvecLibelle) {
        let lDest = lRacine;
        if (aType === TypeCBRadio.switch) {
          lDest = lRacine.firstChild;
        }
        if (lInnerHTML) {
          aOutils.injectHTML({
            element: lDest,
            html: IE.jsx.str('span', null, lInnerHTML),
            controleur: aContexteCourant.controleur,
            ignorerScroll: true,
            contexte: aContexteCourant.contexte,
          });
        }
        aContexteCourant.nodeTransfertContenuDynamique = lDest.lastChild;
        if (lAvecGetLibelle) {
          aOutils.addGetterHtml(aContexteCourant, lInfosGetLibelle);
        }
      }
      aContexteCourant.node = lRacine;
      return { node: aContexteCourant.node, avecCompileFils: false };
    }
    IEHtml.addBalise('ie-checkbox', (aContexteCourant, aOutils) => {
      return _creerCBEtRB(aContexteCourant, TypeCBRadio.checkbox, aOutils);
    });
    IEHtml.addBalise('ie-radio', (aContexteCourant, aOutils) => {
      return _creerCBEtRB(aContexteCourant, TypeCBRadio.radio, aOutils);
    });
    IEHtml.addBalise('ie-switch', (aContexteCourant, aOutils) => {
      return _creerCBEtRB(aContexteCourant, TypeCBRadio.switch, aOutils);
    });
  },
  fn: 'iehtml.checkboxradio.js',
});