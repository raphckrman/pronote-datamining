IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TUtilitaireDuree = TUtilitaireDuree;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const C_HeuresParJour = 24,
      C_MinutesParHeure = 60,
      C_SecondesParMinute = 60,
      C_MilliSecondesParSeconde = 1000,
      C_MinutesParJour = C_MinutesParHeure * C_HeuresParJour,
      C_SecondesParJour = C_SecondesParMinute * C_MinutesParJour;
    function TUtilitaireDuree() {}
    TUtilitaireDuree.dureeEnHeures = function (aDuree, aSansArrondi) {
      if (MethodesObjet_1.MethodesObjet.isNumber(aDuree)) {
        return _get(aDuree * C_HeuresParJour, aSansArrondi);
      }
      return 0;
    };
    TUtilitaireDuree.dureeEnHeuresMinutes = function (aDuree) {
      const lResult = {
        jours: 0,
        heures: 0,
        minutes: 0,
        toString: function (aFormat) {
          let lFormat = '%hh:%mm';
          if (aFormat === true) {
            lFormat = '%oh%sh%om%sm';
          } else if (typeof aFormat === 'string') {
            lFormat = aFormat;
          }
          lFormat = lFormat.replace(
            '%jj',
            (this.jours < 10 ? '0' : '') + this.jours,
          );
          lFormat = lFormat.replace('%xj', this.jours + '');
          lFormat = lFormat.replace(
            '%oj%sj',
            this.jours > 0
              ? this.jours +
                  'j'
              : '',
          );
          lFormat = lFormat.replace(
            '%oj',
            this.jours > 0 ? this.jours + '' : '',
          );
          lFormat = lFormat.replace(
            '%sj',
            'j',
          );
          lFormat = lFormat.replace(
            '%hh',
            (this.heures < 10 ? '0' : '') + this.heures,
          );
          lFormat = lFormat.replace('%xh', this.heures + '');
          lFormat = lFormat.replace(
            '%oh%sh',
            this.heures > 0
              ? this.heures +
                  'h'
              : '',
          );
          lFormat = lFormat.replace(
            '%oh',
            this.heures > 0 ? this.heures + '' : '',
          );
          lFormat = lFormat.replace(
            '%sh',
            'h',
          );
          lFormat = lFormat.replace(
            '%mm',
            (this.minutes < 10 ? '0' : '') + this.minutes,
          );
          lFormat = lFormat.replace('%xm', this.minutes + '');
          lFormat = lFormat.replace(
            '%om%sm',
            this.minutes > 0
              ? (this.heures > 0 && this.minutes < 10 ? '0' : '') +
                  this.minutes +
                  'min'
              : '',
          );
          lFormat = lFormat.replace(
            '%om',
            this.minutes > 0 ? this.minutes + '' : '',
          );
          lFormat = lFormat.replace(
            '%sm',
            'min',
          );
          return lFormat;
        },
      };
      if (MethodesObjet_1.MethodesObjet.isNumber(aDuree)) {
        let lDureeEnMS = _get(
          aDuree * C_MilliSecondesParSeconde * C_SecondesParJour,
        );
        lResult.heures = Math.floor(lDureeEnMS / (60 * 60 * 1000));
        lDureeEnMS = lDureeEnMS - lResult.heures * (60 * 60 * 1000);
        lResult.minutes = Math.floor(lDureeEnMS / (60 * 1000));
      }
      return lResult;
    };
    TUtilitaireDuree.dureeEnJoursHeuresMinutes = function (aDuree) {
      let lResult = TUtilitaireDuree.dureeEnHeuresMinutes(aDuree);
      lResult.jours = Math.floor(lResult.heures / C_HeuresParJour);
      lResult.heures = lResult.heures % C_HeuresParJour;
      return lResult;
    };
    TUtilitaireDuree.heuresEnDuree = function (aVal) {
      if (MethodesObjet_1.MethodesObjet.isNumber(aVal)) {
        return aVal / C_HeuresParJour;
      }
      return 0;
    };
    TUtilitaireDuree.dureeEnMin = function (aDuree, aSansArrondi) {
      if (MethodesObjet_1.MethodesObjet.isNumber(aDuree)) {
        return _get(aDuree * C_MinutesParJour, aSansArrondi);
      }
      return 0;
    };
    TUtilitaireDuree.minEnDuree = function (aVal) {
      if (MethodesObjet_1.MethodesObjet.isNumber(aVal)) {
        return aVal / C_MinutesParJour;
      }
      return 0;
    };
    TUtilitaireDuree.dureeEnMs = function (aDuree, aSansArrondi) {
      if (MethodesObjet_1.MethodesObjet.isNumber(aDuree)) {
        return _get(
          aDuree * C_MilliSecondesParSeconde * C_SecondesParJour,
          aSansArrondi,
        );
      }
      return 0;
    };
    TUtilitaireDuree.msEnDuree = function (aVal) {
      if (MethodesObjet_1.MethodesObjet.isNumber(aVal)) {
        return aVal / (C_MilliSecondesParSeconde * C_SecondesParJour);
      }
      return 0;
    };
    TUtilitaireDuree.minEnMs = function (aVal) {
      if (MethodesObjet_1.MethodesObjet.isNumber(aVal)) {
        return aVal * C_SecondesParMinute * C_MilliSecondesParSeconde;
      }
      return 0;
    };
    function _get(aVal, aSansArrondi) {
      return aSansArrondi === true ? aVal : Math.round(aVal);
    }
  },
  fn: 'utilitaireduree.js',
});