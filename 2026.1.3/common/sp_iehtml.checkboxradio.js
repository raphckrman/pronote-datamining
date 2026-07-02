IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Switch = exports.Radio = exports.Checkbox = void 0;
    const IESwitch_css_1 = require('@cp/Espace/Css/IESwitch.css');
    const IEHtml_CheckboxRadio_css_1 = require('@cp/Produit/Css/IEHtml.CheckboxRadio.css');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const IconeSvgToggle_switch_off_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgToggle_switch_off');
    const IconeSvgToggle_switch_on_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgToggle_switch_on');
    const IconeSvgRadio_off_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgRadio_off');
    const IconeSvgRadio_on_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgRadio_on');
    const IconeSvgCheck_empty_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCheck_empty');
    const IconeSvgCase_on_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCase_on');
    const IconeSvgCase_indetermine_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCase_indetermine');
    const Checkbox = (aProps) => {
      return IE.jsx.str(
        'label',
        Object.assign(
          { [IEHtml_1.IEHtml.attrJsxComp]: TypeCBRadio.checkbox },
          aProps,
        ),
        aProps.children,
      );
    };
    exports.Checkbox = Checkbox;
    const Radio = (aProps) => {
      return IE.jsx.str(
        'label',
        Object.assign(
          { [IEHtml_1.IEHtml.attrJsxComp]: TypeCBRadio.radio },
          aProps,
        ),
        aProps.children,
      );
    };
    exports.Radio = Radio;
    const Switch = (aProps) => {
      return IE.jsx.str(
        'label',
        Object.assign(
          { [IEHtml_1.IEHtml.attrJsxComp]: TypeCBRadio.switch },
          aProps,
        ),
        aProps.children,
      );
    };
    exports.Switch = Switch;
    var TypeCBRadio;
    (function (TypeCBRadio) {
      TypeCBRadio['checkbox'] = 'Checkbox';
      TypeCBRadio['radio'] = 'Radio';
      TypeCBRadio['switch'] = 'Switch';
    })(TypeCBRadio || (TypeCBRadio = {}));
    const c_GenerateurGUID = new GUID_1.GenerateurGUID();
    function _creerCBEtRB(aContexteCourant, aType, aOutils) {
      const lInnerHTML = aContexteCourant.node.innerHTML;
      const lNomModele = aOutils.getModel(aContexteCourant);
      const lAvecIEHtml = aContexteCourant.node.hasAttribute('ie_html');
      const lAvecIETexte = aContexteCourant.node.hasAttribute('ie_texte');
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
      aContexteCourant.data.estRadioBouton = aType === TypeCBRadio.radio;
      const lIdInput = lMap['id'] || `cb-${c_GenerateurGUID.get()}-gen-for`;
      let lClassCss;
      let lClassSpan = '';
      if (aType === TypeCBRadio.switch) {
        lClassCss = IEHtml_CheckboxRadio_css_1.SIEHtmlCheckboxRadio.ieswitch;
        lClassSpan = IESwitch_css_1.SIESwitch.lever;
      } else {
        lClassCss = IEHtml_CheckboxRadio_css_1.SIEHtmlCheckboxRadio.iecb;
      }
      const lIconeGaucheSvg = lMap['svg'] || '';
      if (lIconeGaucheSvg) {
        delete lMap['svg'];
      }
      const lAsChips = aContexteCourant.node.classList.contains(
        IEHtml_CheckboxRadio_css_1.SIEHtmlCheckboxRadio.asChips,
      );
      let lIconesSvg = '';
      if (!lAsChips) {
        switch (aType) {
          case TypeCBRadio.checkbox: {
            lIconesSvg = IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str(IconeSvgCheck_empty_1.IconeSvgCheck_empty, {
                class: 'off',
              }),
              IE.jsx.str(IconeSvgCase_on_1.IconeSvgCase_on, { class: 'on' }),
              IE.jsx.str(IconeSvgCase_indetermine_1.IconeSvgCase_indetermine, {
                class: 'on',
              }),
            );
            break;
          }
          case TypeCBRadio.radio: {
            lIconesSvg = IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str(IconeSvgRadio_off_1.IconeSvgRadio_off, {
                class: 'off',
              }),
              IE.jsx.str(IconeSvgRadio_on_1.IconeSvgRadio_on, { class: 'on' }),
            );
            break;
          }
          case TypeCBRadio.switch: {
            lIconesSvg = IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str(
                IconeSvgToggle_switch_off_1.IconeSvgToggle_switch_off,
                { class: 'off' },
              ),
              IE.jsx.str(IconeSvgToggle_switch_on_1.IconeSvgToggle_switch_on, {
                class: 'on',
              }),
            );
            break;
          }
        }
      }
      const lHtmlLabel = IE.jsx.str(
        'label',
        { class: lClassCss, for: lIdInput },
        IE.jsx.str('input', {
          type: aType !== TypeCBRadio.radio ? 'checkbox' : 'radio',
          id: lIdInput,
          role: aType === TypeCBRadio.switch ? 'switch' : false,
          class: Divers_css_1.SD.srOnly,
        }),
        IE.jsx.str(
          'span',
          { class: lClassSpan || false, 'aria-hidden': 'true' },
          lIconesSvg,
        ),
        lIconeGaucheSvg,
        !lInnerHTML && lAvecLibelle ? IE.jsx.str('span', null) : '',
      );
      lJModele = $(
        aType === TypeCBRadio.switch
          ? IE.jsx.str(
              'div',
              { class: IESwitch_css_1.SIESwitch.switch },
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
        if (llName !== 'type') {
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
      if (aType === TypeCBRadio.checkbox) {
        lEtatIndetermine = !!lElementInput.indeterminate;
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
      if (aContexteCourant.data.$modelObjectJSX) {
        lContexteCourant = Object.assign({}, aContexteCourant);
        lContexteCourant.node = lElementInput;
        aOutils.gererInputCB(lContexteCourant, lMap.type);
      } else {
        lJInput.on(IEHtml_1.IEHtml.C_eventsModifyCheckbox, () => {
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
          IEHtml_CheckboxRadio_css_1.SIEHtmlCheckboxRadio.isDisabled,
        );
      }
      const lGetChecked = function () {
        return lJInput.is(':checked');
      };
      let lEstChecked = lGetChecked();
      if (lEstChecked) {
        lJLabelParent.addClass(
          IEHtml_CheckboxRadio_css_1.SIEHtmlCheckboxRadio.isChecked,
        );
      }
      const lGetIndeterminate = function () {
        var _a;
        if (aType === TypeCBRadio.checkbox) {
          return !!((_a = lJInput.get(0)) === null || _a === void 0
            ? void 0
            : _a.indeterminate);
        }
        return false;
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
                IEHtml_CheckboxRadio_css_1.SIEHtmlCheckboxRadio.isDisabled,
              );
            } else {
              lJLabelParent.removeClass(
                IEHtml_CheckboxRadio_css_1.SIEHtmlCheckboxRadio.isDisabled,
              );
            }
            lEstDisabled = lNewEstDisabled;
          }
          const lNewEstChecked = lGetChecked();
          if (lNewEstChecked !== lEstChecked) {
            if (lNewEstChecked) {
              lJLabelParent.addClass(
                IEHtml_CheckboxRadio_css_1.SIEHtmlCheckboxRadio.isChecked,
              );
            } else {
              lJLabelParent.removeClass(
                IEHtml_CheckboxRadio_css_1.SIEHtmlCheckboxRadio.isChecked,
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
      aOutils.addCommentaireDebug(lRacine, '' + aType);
      if (lAvecLibelle) {
        let lDest = lRacine;
        if (aType === TypeCBRadio.switch) {
          lDest = lRacine.firstChild;
        }
        if (lInnerHTML) {
          aOutils.injectHTML({
            element: lDest,
            html: IE.jsx.str('span', null, lInnerHTML),
            instance: aContexteCourant.instance,
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
    IEHtml_1.IEHtml.addJsxComponent(
      TypeCBRadio.checkbox,
      (aContexteCourant, aOutils) => {
        return _creerCBEtRB(aContexteCourant, TypeCBRadio.checkbox, aOutils);
      },
    );
    IEHtml_1.IEHtml.addJsxComponent(
      TypeCBRadio.radio,
      (aContexteCourant, aOutils) => {
        return _creerCBEtRB(aContexteCourant, TypeCBRadio.radio, aOutils);
      },
    );
    IEHtml_1.IEHtml.addJsxComponent(
      TypeCBRadio.switch,
      (aContexteCourant, aOutils) => {
        return _creerCBEtRB(aContexteCourant, TypeCBRadio.switch, aOutils);
      },
    );
  },
  fn: 'iehtml.checkboxradio.js',
});