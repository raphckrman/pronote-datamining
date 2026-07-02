IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.BtnSelecteurPJ = exports.BtnSelecteur = void 0;
    const tslib_1 = require('tslib');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_BtnSelecteur_css_1 = require('@cp/Produit/Css/IEHtml.BtnSelecteur.css');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const IEHtml_Ripple_1 = require('@cp/Produit/Script/IEHtml.Ripple');
    const IconeSvgPiece_jointe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPiece_jointe');
    const IconeSvgPlus_fin_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPlus_fin');
    const Tooltip_1 = require('@cp/Produit/Script/Tooltip');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const IEHtml_Chips_1 = require('@cp/Produit/Script/IEHtml.Chips');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const BtnSelecteur = (_a) => {
      var { class: className, nowrap } = _a,
        aProps = tslib_1.__rest(_a, ['class', 'nowrap']);
      const lClasses = Array.isArray(className) ? className : [className || ''];
      if (nowrap) {
        lClasses.push(
          IEHtml_BtnSelecteur_css_1.SIEHtmlBtnSelecteur.bsChipsNowrap,
        );
      }
      return IE.jsx.str(
        'div',
        Object.assign(
          { [IEHtml_1.IEHtml.attrJsxComp]: 'BtnSelecteur', class: lClasses },
          aProps,
        ),
        aProps.children,
      );
    };
    exports.BtnSelecteur = BtnSelecteur;
    const BtnSelecteurPJ = (aProps) => {
      const lClasses = Array.isArray(aProps.class)
        ? aProps.class
        : [aProps.class || ''];
      delete aProps.class;
      return IE.jsx.str(
        'div',
        Object.assign(
          {
            [IEHtml_1.IEHtml.attrJsxComp]: 'BtnSelecteur',
            class: [
              IEHtml_BtnSelecteur_css_1.SIEHtmlBtnSelecteur.pj,
              ...lClasses,
            ],
          },
          aProps,
        ),
        aProps.children,
      );
    };
    exports.BtnSelecteurPJ = BtnSelecteurPJ;
    IEHtml_1.IEHtml.addJsxComponent(
      'BtnSelecteur',
      (aContexteCourant, aOutils) => {
        const lInnerHtml = aContexteCourant.node.innerHTML;
        const lEstSelecteurPJ = aContexteCourant.node.classList.contains(
          IEHtml_BtnSelecteur_css_1.SIEHtmlBtnSelecteur.pj,
        );
        const lId = lEstSelecteurPJ ? false : GUID_1.GUID.getId();
        const lIdLabelledByACreer = lId ? lId + '_lab' : false;
        const lClassesChips = [''];
        const lModele = aOutils.getModel(aContexteCourant);
        const lInfosGetLibelle = lModele
          ? aOutils.getAccesParametresModel('getLibelle', aContexteCourant)
          : undefined;
        const lInfosGetChips = lModele
          ? aOutils.getAccesParametresModel('getChips', aContexteCourant)
          : undefined;
        const lInfosEvent = lModele
          ? aOutils.getAccesParametresModel('event', aContexteCourant)
          : undefined;
        const lInfosGetIconeSvg = lModele
          ? aOutils.getAccesParametresModel('getIconeSvg', aContexteCourant)
          : undefined;
        const lInfosGetHtmlIcone = lModele
          ? aOutils.getAccesParametresModel('getIconeHtml', aContexteCourant)
          : undefined;
        const lInfosGetDisabled = lModele
          ? aOutils.getAccesParametresModel('getDisabled', aContexteCourant)
          : undefined;
        let lDisabled =
          aContexteCourant.node.getAttribute('aria-disabled') === 'true';
        if (
          lInfosGetChips === null || lInfosGetChips === void 0
            ? void 0
            : lInfosGetChips.estFonction
        ) {
        }
        const lGetModelDefautChips = () => {
          if (!lModele) {
            return undefined;
          }
          return () => ({ getDisabled: () => lDisabled });
        };
        let lIconeSvgDefault = lEstSelecteurPJ
          ? IE.jsx.str(IconeSvgPiece_jointe_1.IconeSvgPiece_jointe, null)
          : IE.jsx.str(IconeSvgPlus_fin_1.IconeSvgPlus_fin, null);
        const lBtnSelecteur = ObjetHtml_1.GHtml.htmlToDOM(
          IE.jsx.str(
            'div',
            {
              class: [
                IEHtml_BtnSelecteur_css_1.SIEHtmlBtnSelecteur.ieBtnselecteur,
                IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple,
              ],
              role: lEstSelecteurPJ ? 'button' : false,
              tabindex: lEstSelecteurPJ ? '0' : false,
              'aria-haspopup': lEstSelecteurPJ ? 'dialog' : false,
            },
            IE.jsx.str(
              'div',
              {
                class: [
                  IEHtml_BtnSelecteur_css_1.SIEHtmlBtnSelecteur.bsIcone,
                  IEHtml_Ripple_1.StylesCustomIEHTMLRipple.ieRippleAllowpass,
                ],
                'aria-hidden': lEstSelecteurPJ ? 'true' : false,
                role: lEstSelecteurPJ ? false : 'button',
                tabindex: lEstSelecteurPJ ? false : '0',
                'aria-describedby': lId,
                'aria-haspopup': lEstSelecteurPJ ? false : 'dialog',
              },
              lIconeSvgDefault,
            ),
            IE.jsx.str(
              'div',
              {
                class: IEHtml_BtnSelecteur_css_1.SIEHtmlBtnSelecteur.bsLibelle,
                ie_ellipsis: !lInnerHtml,
                id: lId,
                role: lId ? 'group' : false,
              },
              lInnerHtml && !lEstSelecteurPJ && !lInnerHtml.includes('<')
                ? IE.jsx.str(
                    IEHtml_Chips_1.Chips,
                    { class: lClassesChips, ie_model: lGetModelDefautChips() },
                    lInnerHtml,
                  )
                : lInnerHtml,
            ),
          ),
        );
        const lJBtnSelecteur = $(lBtnSelecteur);
        const lBtn = lJBtnSelecteur
          .find(`>.${IEHtml_BtnSelecteur_css_1.SIEHtmlBtnSelecteur.bsIcone}`)
          .get(0);
        const lDOMLibelle = lJBtnSelecteur
          .find(`>.${IEHtml_BtnSelecteur_css_1.SIEHtmlBtnSelecteur.bsLibelle}`)
          .get(0);
        const lFuncActualiserDisabled = () => {
          if (lDisabled) {
            if (!lEstSelecteurPJ) {
              lBtn.setAttribute('aria-disabled', 'true');
            }
            lBtnSelecteur.setAttribute('aria-disabled', 'true');
          } else {
            if (!lEstSelecteurPJ) {
              lBtn.removeAttribute('aria-disabled');
            }
            lBtnSelecteur.removeAttribute('aria-disabled');
          }
        };
        if (lModele) {
          if (
            lInfosGetDisabled === null || lInfosGetDisabled === void 0
              ? void 0
              : lInfosGetDisabled.estFonction
          ) {
            lDisabled = !!lInfosGetDisabled.callback([lBtnSelecteur]);
            lFuncActualiserDisabled();
            aOutils.abonnerRefresh(
              () => {
                const lDisabledNew = !!lInfosGetDisabled.callback([
                  lBtnSelecteur,
                ]);
                if (lDisabledNew !== lDisabled) {
                  lDisabled = lDisabledNew;
                  lFuncActualiserDisabled();
                }
              },
              lBtnSelecteur,
              aContexteCourant,
            );
          }
        }
        let lHtmlPlaceHolder = '';
        let lAvecAriaLabel = false;
        aOutils.copyAttributs(
          aContexteCourant.node,
          lBtnSelecteur,
          (aName, aValue) => {
            if (aName === 'class' && aValue) {
              lJBtnSelecteur.addClass(aValue);
              return false;
            }
            if (aName === 'placeholder') {
              if (aValue) {
                lHtmlPlaceHolder = IE.jsx.str(
                  'span',
                  { class: 'as-placeholder', 'aria-disabled': 'true' },
                  aValue,
                );
              }
              return false;
            }
            if (aName === 'role' || aName === 'aria-expanded') {
              return false;
            }
            if (
              !lEstSelecteurPJ &&
              (aName === 'aria-labelledby' ||
                aName === 'aria-label' ||
                aName === 'ie_tooltiplabel' ||
                aName === 'ie_tooltiplabel_static')
            ) {
              if (aValue) {
                if (lAvecAriaLabel) {
                  return false;
                }
                lAvecAriaLabel = true;
                let lIdLabelledBy = '';
                if (aName === 'aria-labelledby') {
                  lIdLabelledBy = aValue;
                } else if (lIdLabelledByACreer && aValue) {
                  lIdLabelledBy = lIdLabelledByACreer;
                  let lLabel = document.querySelector(
                    `#${lIdLabelledByACreer}`,
                  );
                  if (!lLabel) {
                    lLabel = ObjetHtml_1.GHtml.addHtml(
                      lBtnSelecteur,
                      IE.jsx.str(
                        'div',
                        {
                          id: lIdLabelledByACreer,
                          class: [Divers_css_1.SD.srOnly],
                          'aria-hidden': 'true',
                        },
                        aValue.ajouterEntites(),
                      ),
                    );
                  }
                }
                if (lIdLabelledBy) {
                  lBtn.setAttribute('aria-labelledby', lIdLabelledBy);
                  lDOMLibelle.setAttribute('aria-labelledby', lIdLabelledBy);
                  lBtn.setAttribute(
                    Tooltip_1.Tooltip.attrType,
                    Tooltip_1.Tooltip.Type.default,
                  );
                  lBtnSelecteur.setAttribute(
                    Tooltip_1.Tooltip.attrType,
                    Tooltip_1.Tooltip.Type.default,
                  );
                  lBtn.setAttribute(Tooltip_1.Tooltip.attrId, lIdLabelledBy);
                  lBtnSelecteur.setAttribute(
                    Tooltip_1.Tooltip.attrId,
                    lIdLabelledBy,
                  );
                }
              }
              return false;
            }
            if (!lEstSelecteurPJ && aName === 'aria-describedby') {
              if (aValue) {
                lBtn.setAttribute(aName, lId + ' ' + aValue);
              }
              return false;
            }
            return true;
          },
        );
        if (lInfosEvent && lInfosEvent.estFonction) {
          lJBtnSelecteur.on('validation', (aEvent) => {
            var _a;
            if (!lDisabled) {
              if (
                (_a = aEvent.originalEvent) === null || _a === void 0
                  ? void 0
                  : _a.eventValidationChips
              ) {
                return;
              }
              lInfosEvent.callback([aEvent, lBtnSelecteur]);
            }
          });
        }
        const lAvecGetHtmlIconeSvg =
          lInfosGetHtmlIcone && lInfosGetHtmlIcone.estFonction;
        aOutils.surNodeEtNodeAfter(aContexteCourant);
        aOutils.replaceNode(aContexteCourant.node, lBtnSelecteur);
        aContexteCourant.node = lBtnSelecteur;
        if (
          lInfosGetChips === null || lInfosGetChips === void 0
            ? void 0
            : lInfosGetChips.estFonction
        ) {
          aContexteCourant.nodeTransfertContenuDynamique = lDOMLibelle;
          const lGet = {
            callback() {
              const lResultEtiquettes =
                lInfosGetChips.callback([lBtnSelecteur]) || '';
              let lResutlTab = Array.isArray(lResultEtiquettes)
                ? lResultEtiquettes
                : [lResultEtiquettes];
              let lResultTabStr = lResutlTab.map((aDeclChips) => {
                if (!aDeclChips) {
                  return '';
                }
                if (MethodesObjet_1.MethodesObjet.isString(aDeclChips)) {
                  return IE.jsx.str(
                    IEHtml_Chips_1.Chips,
                    { class: lClassesChips, ie_model: lGetModelDefautChips() },
                    aDeclChips,
                  );
                }
                if (!aDeclChips.libelle) {
                  return '';
                }
                const lModel = {
                  event: aDeclChips.event,
                  eventBtn: aDeclChips.eventBtnSuppr,
                  getDisabled: () => lDisabled,
                };
                return IE.jsx.str(
                  IEHtml_Chips_1.Chips,
                  { class: lClassesChips, ie_model: () => lModel },
                  aDeclChips.libelle,
                );
              });
              let lResult = '';
              if (lResultTabStr.length > 1) {
                lResult = IE.jsx.str(
                  'ul',
                  null,
                  lResultTabStr
                    .map((aStr) => IE.jsx.str('li', null, aStr))
                    .join(''),
                );
              } else {
                lResult = lResultTabStr.join('');
              }
              if (!lResult && lHtmlPlaceHolder) {
                lResult = lHtmlPlaceHolder;
              }
              return lResult || '';
            },
            estFonction: true,
          };
          aOutils.addGetterHtml(aContexteCourant, lGet);
        } else if (
          lInfosGetLibelle === null || lInfosGetLibelle === void 0
            ? void 0
            : lInfosGetLibelle.estFonction
        ) {
          aContexteCourant.nodeTransfertContenuDynamique = lDOMLibelle;
          const lGet = {
            callback() {
              let lResult = lInfosGetLibelle.callback([lBtnSelecteur]) || '';
              if (!lResult && lHtmlPlaceHolder) {
                lResult = lHtmlPlaceHolder;
              }
              return lResult;
            },
            estFonction: true,
          };
          aOutils.addGetterHtml(aContexteCourant, lGet);
        }
        if (lAvecGetHtmlIconeSvg) {
          aContexteCourant.nodeTransfertContenuDynamique = lBtn;
          aOutils.addGetterHtml(aContexteCourant, lInfosGetHtmlIcone);
        } else if (
          lInfosGetIconeSvg === null || lInfosGetIconeSvg === void 0
            ? void 0
            : lInfosGetIconeSvg.estFonction
        ) {
          const lAccesParametres = {
            estFonction: true,
            nom: '',
            nomCommentaire: 'BtnSelecteur getIconeSvg',
            value: '',
            callback: () => {
              let lIconeSvg = '';
              if (
                lInfosGetIconeSvg === null || lInfosGetIconeSvg === void 0
                  ? void 0
                  : lInfosGetIconeSvg.estFonction
              ) {
                lIconeSvg = lInfosGetIconeSvg.callback([
                  lBtnSelecteur,
                  lBtn,
                  aContexteCourant,
                ]);
              }
              return lIconeSvg || lIconeSvgDefault;
            },
          };
          aContexteCourant.nodeTransfertContenuDynamique = lBtn;
          aOutils.addGetterHtml(aContexteCourant, lAccesParametres);
        }
        if (
          (0, AccessApp_1.getApp)().estDebug() &&
          !lEstSelecteurPJ &&
          !lAvecAriaLabel
        ) {
        }
        aOutils.addCommentaireDebug(
          aContexteCourant.node,
          `BtnSelecteur${lEstSelecteurPJ ? ' (BtnSelecteurPJ)' : ''}`,
        );
        return { node: aContexteCourant.node, avecCompileFils: true };
      },
    );
  },
  fn: 'iehtml.btnselecteur.js',
});