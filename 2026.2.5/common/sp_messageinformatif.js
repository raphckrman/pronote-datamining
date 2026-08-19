IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradMessageInformatif =
      exports.GenreMessageInformatif =
      exports.MessageInformatif =
        void 0;
    const tslib_1 = require('tslib');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IEHtml_BtnImage_css_1 = require('@cp/Produit/Css/IEHtml.BtnImage.css');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const MessageInformatif_module_css_1 = require('@cp/Produit/Css/MessageInformatif.module.css');
    const IconeSvgDiffuser_information_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_information');
    const IconeSvgExclamation_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgExclamation');
    const IconeSvgOk_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgOk');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const IEHtml_Bouton_css_1 = require('@cp/Produit/Css/IEHtml.Bouton.css');
    const IconeSvgFermeture_widget_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFermeture_widget');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const IconeSvgEye_open_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEye_open');
    const IconeSvgWarning_sign_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgWarning_sign');
    const IconeSvgEye_close_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEye_close');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const getClassMessageInfo = (aGenre) => {
      switch (aGenre) {
        case GenreMessageInformatif.Info:
          return 'is-info';
        case GenreMessageInformatif.Alert:
          return 'is-alert';
        case GenreMessageInformatif.Error:
          return 'is-error';
        case GenreMessageInformatif.Success:
          return 'is-success';
        default:
          return '';
      }
    };
    const getIconeInfo = (aGenre, aClass = []) => {
      switch (aGenre) {
        case GenreMessageInformatif.Info:
          return IE.jsx.str(
            IconeSvgDiffuser_information_1.IconeSvgDiffuser_information,
            { class: aClass },
          );
        case GenreMessageInformatif.Alert:
          return IE.jsx.str(IconeSvgExclamation_1.IconeSvgExclamation, {
            class: aClass,
          });
        case GenreMessageInformatif.Error:
          return IE.jsx.str(IconeSvgWarning_sign_1.IconeSvgWarning_sign, {
            class: aClass,
          });
        case GenreMessageInformatif.Success:
          return IE.jsx.str(IconeSvgOk_1.IconeSvgOk, { class: aClass });
        default:
          return '';
      }
    };
    const MessageInformatif = (_a) => {
      var {
          class: classCSS,
          noShadow,
          noClose,
          callbackSurFermeture,
          genreMessageInformatif,
          message,
          bouton,
          html,
          avecDeploiement,
          estDeploye,
        } = _a,
        rest = tslib_1.__rest(_a, [
          'class',
          'noShadow',
          'noClose',
          'callbackSurFermeture',
          'genreMessageInformatif',
          'message',
          'bouton',
          'html',
          'avecDeploiement',
          'estDeploye',
        ]);
      const lClass = classCSS !== null && classCSS !== void 0 ? classCSS : [];
      const lNoShadow =
        noShadow !== null && noShadow !== void 0 ? noShadow : false;
      const lNoClose = noClose !== null && noClose !== void 0 ? noClose : false;
      const lBtn = bouton !== null && bouton !== void 0 ? bouton : false;
      const lAvecDeploiement =
        avecDeploiement !== null && avecDeploiement !== void 0
          ? avecDeploiement
          : false;
      let lEstDeploye =
        estDeploye !== null && estDeploye !== void 0 ? estDeploye : false;
      const lClassMessageInformatif =
        MessageInformatif_module_css_1.SMessageInformatif.messageInformatif;
      const lClassWrapperMsgSup =
        MessageInformatif_module_css_1.SMessageInformatif.wrapperMsgSup;
      const lClassFooter =
        MessageInformatif_module_css_1.SMessageInformatif.footer;
      const lJsxModelFermeture = () => {
        return {
          event: (aEvent) => {
            const lDiv = aEvent.target.closest(`.${lClassMessageInformatif}`);
            if (lDiv) {
              ObjetStyle_1.GStyle.setDisplay(lDiv, false);
              callbackSurFermeture === null || callbackSurFermeture === void 0
                ? void 0
                : callbackSurFermeture();
            }
          },
        };
      };
      const lJsxModelBtnVoirPlus = () => {
        return {
          event: (aEvent) => {
            const lDivCtn = aEvent.target.closest(
              `.${lClassMessageInformatif}`,
            );
            if (lDivCtn) {
              const lWrapperMsg = lDivCtn.querySelector(
                `.${lClassWrapperMsgSup}`,
              );
              const lFooter = lDivCtn.querySelector(`.${lClassFooter}`);
              if (lWrapperMsg && lFooter) {
                lEstDeploye = !lEstDeploye;
                ObjetStyle_1.GStyle.setDisplay(lWrapperMsg, lEstDeploye);
                ObjetHtml_1.GHtml.setHtml(
                  lFooter,
                  composeBtnDeploye(lEstDeploye, lJsxModelBtnVoirPlus),
                );
              }
            }
            return;
          },
          getLibelle: () => {
            return lEstDeploye
              ? TradMessageInformatif.voirMoins
              : TradMessageInformatif.voirPlus;
          },
          getDisabled: () => {
            return false;
          },
        };
      };
      const lJsxDisplayBtnVoirPlus = () => {
        if (MethodesObjet_1.MethodesObjet.isString(html)) {
          return html.length > 0;
        }
        if (MethodesObjet_1.MethodesObjet.isFunction(html)) {
          const lResultFuncHtml = html();
          return MethodesObjet_1.MethodesObjet.isString(lResultFuncHtml)
            ? lResultFuncHtml.length > 0
            : false;
        }
        return false;
      };
      return IE.jsx.str(
        'div',
        Object.assign(
          {
            class: [
              lClassMessageInformatif,
              lNoShadow
                ? MessageInformatif_module_css_1.SMessageInformatif
                    .boxShadowNone
                : '',
              ...lClass,
            ],
            ie_class: () =>
              getClassMessageInfo(
                MethodesObjet_1.MethodesObjet.isFunction(genreMessageInformatif)
                  ? genreMessageInformatif()
                  : genreMessageInformatif,
              ),
          },
          rest,
        ),
        IE.jsx.str(
          'div',
          { class: [MessageInformatif_module_css_1.SMessageInformatif.header] },
          getIconeInfo(
            MethodesObjet_1.MethodesObjet.isFunction(genreMessageInformatif)
              ? genreMessageInformatif()
              : genreMessageInformatif,
            [MessageInformatif_module_css_1.SMessageInformatif.icon],
          ),
          IE.jsx.str(
            'div',
            {
              class: [
                MessageInformatif_module_css_1.SMessageInformatif.zoneCentrale,
              ],
            },
            IE.jsx.str(
              'div',
              {
                class: [
                  MessageInformatif_module_css_1.SMessageInformatif.message,
                ],
              },
              IE.jsx.str(
                'p',
                {
                  ie_html: MethodesObjet_1.MethodesObjet.isFunction(message)
                    ? message
                    : false,
                },
                MethodesObjet_1.MethodesObjet.isString(message) ? message : '',
              ),
            ),
            lBtn &&
              IE.jsx.str(
                'div',
                {
                  class: [
                    MessageInformatif_module_css_1.SMessageInformatif.bouton,
                  ],
                },
                IE.jsx.str(IEHtml_Bouton_1.Bouton, {
                  class: [
                    IEHtml_Bouton_css_1.SIEHtmlBouton.smallBt,
                    IEHtml_Bouton_css_1.SIEHtmlBouton.themeBoutonNeutre,
                  ],
                  ie_model: lBtn,
                }),
              ),
          ),
          !lNoClose &&
            IE.jsx.str(
              'div',
              {
                class: [
                  MessageInformatif_module_css_1.SMessageInformatif
                    .croixFermeture,
                ],
              },
              IE.jsx.str(
                IEHtml_BtnImage_1.BtnIcon,
                {
                  class: [IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImageIcon],
                  ie_model: lJsxModelFermeture,
                  title: TradMessageInformatif.masquerMessage,
                },
                IE.jsx.str(
                  IconeSvgFermeture_widget_1.IconeSvgFermeture_widget,
                  null,
                ),
              ),
            ),
        ),
        html &&
          IE.jsx.str(
            'div',
            { class: [MessageInformatif_module_css_1.SMessageInformatif.main] },
            IE.jsx.str(
              'div',
              {
                class: [lClassWrapperMsgSup],
                style: lAvecDeploiement && !lEstDeploye && { display: 'none' },
                ie_html: MethodesObjet_1.MethodesObjet.isFunction(html)
                  ? html
                  : false,
              },
              MethodesObjet_1.MethodesObjet.isString(html) ? html : '',
            ),
          ),
        lAvecDeploiement &&
          IE.jsx.str(
            'div',
            { class: [lClassFooter], ie_display: lJsxDisplayBtnVoirPlus },
            composeBtnDeploye(lEstDeploye, lJsxModelBtnVoirPlus),
          ),
      );
    };
    exports.MessageInformatif = MessageInformatif;
    const composeBtnDeploye = (aVal, aModel) => {
      return IE.jsx.str(IEHtml_Bouton_1.Bouton, {
        svg: aVal
          ? IE.jsx.str(IconeSvgEye_close_1.IconeSvgEye_close, null)
          : IE.jsx.str(IconeSvgEye_open_1.IconeSvgEye_open, null),
        class: [
          IEHtml_Bouton_css_1.SIEHtmlBouton.smallBt,
          IEHtml_Bouton_css_1.SIEHtmlBouton.themeBoutonNeutre,
        ],
        ie_model: aModel,
      });
    };
    var GenreMessageInformatif;
    (function (GenreMessageInformatif) {
      GenreMessageInformatif[(GenreMessageInformatif['Info'] = 0)] = 'Info';
      GenreMessageInformatif[(GenreMessageInformatif['Alert'] = 1)] = 'Alert';
      GenreMessageInformatif[(GenreMessageInformatif['Error'] = 2)] = 'Error';
      GenreMessageInformatif[(GenreMessageInformatif['Success'] = 3)] =
        'Success';
    })(
      GenreMessageInformatif ||
        (exports.GenreMessageInformatif = GenreMessageInformatif = {}),
    );
    const TradMessageInformatif = ObjetTraduction_1.TraductionsModule.getModule(
      'MessageInformatif',
      { voirPlus: '', voirMoins: '', masquerMessage: '' },
    );
    exports.TradMessageInformatif = TradMessageInformatif;
  },
  fn: 'messageinformatif.js',
});