IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireTelephone = void 0;
    class UtilitaireTelephone {
      static formatTelephone(aChaine, aOptions) {
        if (!aChaine || !aChaine.trim) {
          return '';
        }
        let lMask =
          (aOptions === null || aOptions === void 0 ? void 0 : aOptions.mask) ||
          this.maskTelephone ||
          '';
        const lChaine = aChaine.trim().replace(/([^0-9\s])/g, '');
        lMask = this._reverseString(lMask.replace(/([^9\s])/g, ''));
        const lLengthCharMask = lMask.replace(/([^9])/g, '').length;
        const lNumeroSansEspace = lChaine.replace(/([^0-9])/g, '');
        const lEcart = Math.max(0, lNumeroSansEspace.length - lLengthCharMask);
        let lPartieDroite = this._reverseString(
          lNumeroSansEspace.slice(lEcart, lNumeroSansEspace.length),
        );
        let lPartieGaucheIntacte = '';
        let lPartieGauche = '';
        let lIndice = -1;
        let lResult = lMask.replace(/9/g, () => {
          lIndice += 1;
          return lPartieDroite[lIndice] || '';
        });
        if (
          aOptions === null || aOptions === void 0
            ? void 0
            : aOptions.ignorerTailleMask
        ) {
          lPartieGauche = lNumeroSansEspace.slice(0, lEcart);
          lIndice = 0;
          for (let i = 0; i < lChaine.length; i++) {
            if (lChaine.charAt(i) === ' ') {
              lPartieGaucheIntacte += ' ';
            } else {
              lPartieGaucheIntacte += lPartieGauche.charAt(lIndice);
              lIndice += 1;
              if (lIndice >= lPartieGauche.length) {
                break;
              }
            }
          }
        }
        return (lPartieGaucheIntacte + this._reverseString(lResult)).trim();
      }
      static _reverseString(a) {
        return a.split('').reverse().join('');
      }
      static formatTelephoneToData(aTel) {
        var _a;
        return (_a =
          aTel === null || aTel === void 0 ? void 0 : aTel.replace) === null ||
          _a === void 0
          ? void 0
          : _a
              .call(aTel, / /g, '')
              .replace(this.REGEXP_TELEPHONE, '')
              .slice(0, this.getMaskTelephone().replace(/ /g, '').length);
      }
      static formatIndicatifTel(aIndicatif) {
        var _a, _b, _c;
        return (
          '+ ' +
          ((_c =
            (_a =
              aIndicatif === null || aIndicatif === void 0
                ? void 0
                : aIndicatif.replace) === null || _a === void 0
              ? void 0
              : (_b = _a.call(aIndicatif, this.REGEXP_INDICATIF_TELEPHONE, ''))
                  .slice) === null || _c === void 0
            ? void 0
            : _c.call(_b, 0, this.TAILLEMAX_INDICATIF_TELEPHONE))
        );
      }
      static formatIndicatifTelToData(aIndicatif) {
        var _a;
        return (_a =
          aIndicatif === null || aIndicatif === void 0
            ? void 0
            : aIndicatif.replace) === null || _a === void 0
          ? void 0
          : _a
              .call(aIndicatif, /\+|/g, '')
              .replace(this.REGEXP_INDICATIF_TELEPHONE, '')
              .slice(0, this.TAILLEMAX_INDICATIF_TELEPHONE);
      }
      static getMaskTelephone() {
        return this.maskTelephone;
      }
      static setMaskTelephone(aMask) {
        this.maskTelephone = aMask;
      }
    }
    exports.UtilitaireTelephone = UtilitaireTelephone;
    UtilitaireTelephone.maskTelephone = '99 99 99 99 99 99';
    UtilitaireTelephone.REGEXP_TELEPHONE = /[^0-9]/gi;
    UtilitaireTelephone.REGEXP_INDICATIF_TELEPHONE = /[^0-9]/gi;
    UtilitaireTelephone.TAILLEMAX_INDICATIF_TELEPHONE = 3;
  },
  fn: 'utilitairetelephone.js',
});