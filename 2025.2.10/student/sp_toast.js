IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Toast = exports.ETypeToast = void 0;
    const ObjetHtml_1 = require('ObjetHtml');
    const GUID_1 = require('GUID');
    const ObjetChaine_1 = require('ObjetChaine');
    require('Toast.css');
    const AccessApp_1 = require('AccessApp');
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
            return 'info';
          case ETypeToast.alerte:
            return 'alert';
          case ETypeToast.succes:
            return 'success';
          case ETypeToast.erreur:
            return 'error';
          case ETypeToast.message:
            return 'message';
        }
      },
      getClasseIcon(aType) {
        switch (aType) {
          case ETypeToast.info:
            return 'icon_diffuser_information';
          case ETypeToast.alerte:
            return 'icon_exclamation';
          case ETypeToast.succes:
            return 'icon_ok';
          case ETypeToast.erreur:
            return 'icon_punition';
          case ETypeToast.message:
            return 'icon_diffuser_information';
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
        const lIconToast =
          aParam.icon !== null && aParam.icon !== undefined
            ? aParam.icon
            : ETypeToastUtil.getClasseIcon(aParam.type);
        return IE.jsx.str(
          'div',
          { class: ['toast ', lClassTypeToast, lClassPosition, lIconToast] },
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