IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Toast = exports.ETypeToast = void 0;
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    require('@cp/Produit/Css/Toast.css');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IconeSvgDiffuser_info_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_info');
    const IconeSvgExclamation_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgExclamation');
    const IconeSvgOk_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgOk');
    const IconeSvgPunition_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPunition');
    var ETypeToast;
    (function (ETypeToast) {
      ETypeToast['info'] = 'info';
      ETypeToast['alerte'] = 'alerte';
      ETypeToast['succes'] = 'succes';
      ETypeToast['erreur'] = 'erreur';
      ETypeToast['message'] = 'message';
    })(ETypeToast || (exports.ETypeToast = ETypeToast = {}));
    const ETypeToastUtil = {
      getClasseCss(aType) {
        switch (aType) {
          case ETypeToast.info:
            return 'is-info';
          case ETypeToast.alerte:
            return 'is-alert';
          case ETypeToast.succes:
            return 'is-success';
          case ETypeToast.erreur:
            return 'is-error';
          case ETypeToast.message:
            return 'is-info';
        }
      },
      getIconeSvg(aType) {
        switch (aType) {
          case ETypeToast.info:
            return IE.jsx.str(
              IconeSvgDiffuser_info_1.IconeSvgDiffuser_info,
              null,
            );
          case ETypeToast.alerte:
            return IE.jsx.str(IconeSvgExclamation_1.IconeSvgExclamation, null);
          case ETypeToast.succes:
            return IE.jsx.str(IconeSvgOk_1.IconeSvgOk, null);
          case ETypeToast.erreur:
            return IE.jsx.str(IconeSvgPunition_1.IconeSvgPunition, null);
          case ETypeToast.message:
            return IE.jsx.str(
              IconeSvgDiffuser_info_1.IconeSvgDiffuser_info,
              null,
            );
        }
      },
      getClassePosition(aType) {
        switch (aType) {
          case ETypeToast.erreur:
            return 'top';
          default:
            return IE.estMobile ? '' : 'to-right';
        }
      },
    };
    const uIdConteneurToast = GUID_1.GUID.getId();
    let uTimeoutFermeture = null;
    class Toast {
      static getHtmlToast(aParam) {
        const lClassTypeToast = ETypeToastUtil.getClasseCss(aParam.type);
        const lClassPosition = ETypeToastUtil.getClassePosition(aParam.type);
        return IE.jsx.str(
          'div',
          { class: ['toast ', lClassTypeToast, lClassPosition] },
          ETypeToastUtil.getIconeSvg(aParam.type),
          IE.jsx.str(
            'p',
            { role: 'alert', 'aria-live': 'assertive' },
            ObjetChaine_1.GChaine.replaceRCToHTML(aParam.msg),
          ),
        );
      }
      static afficher(aParam) {
        const lParams = Object.assign(
          { msg: '', type: ETypeToast.succes, dureeAffichage: 4500 },
          aParam,
        );
        Toast.fermer();
        const lIdPere = (0, AccessApp_1.getApp)().getIdConteneur();
        const lConteneurPere = ObjetHtml_1.GHtml.getElement(lIdPere);
        if (lConteneurPere) {
          const lConteneurToast = document.createElement('div');
          lConteneurToast.innerHTML = Toast.getHtmlToast(lParams);
          lConteneurToast.id = uIdConteneurToast;
          lConteneurPere.appendChild(lConteneurToast);
        }
        return Toast.showToast(lParams).then(() => {
          Toast.fermer();
        });
      }
      static showToast(aParam) {
        return new Promise((aResolve) => {
          const _target = $('.toast');
          _target.siblings('.toast').removeClass('shown');
          !_target.hasClass('shown')
            ? _target.addClass('shown')
            : _target.removeClass('shown');
          uTimeoutFermeture = setTimeout(() => {
            uTimeoutFermeture = null;
            _target.removeClass('shown');
            aResolve();
          }, aParam.dureeAffichage);
        });
      }
      static fermer() {
        const lIdPere = (0, AccessApp_1.getApp)().getIdConteneur();
        const lConteneurPere = ObjetHtml_1.GHtml.getElement(lIdPere);
        if (lConteneurPere !== null && lConteneurPere !== undefined) {
          const lConteneurToast =
            ObjetHtml_1.GHtml.getElement(uIdConteneurToast);
          if (lConteneurToast) {
            lConteneurPere.removeChild(lConteneurToast);
            ObjetHtml_1.GHtml.supprimerElementDOM(uIdConteneurToast);
            if (uTimeoutFermeture) {
              clearTimeout(uTimeoutFermeture);
              uTimeoutFermeture = null;
            }
          }
        }
      }
    }
    exports.Toast = Toast;
  },
  fn: 'toast.js',
});