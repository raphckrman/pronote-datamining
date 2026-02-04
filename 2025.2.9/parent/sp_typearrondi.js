IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeArrondi = void 0;
    const Enumere_ChampsJSON_1 = require('Enumere_ChampsJSON');
    const TypeHttpVariable_1 = require('TypeHttpVariable');
    const TypeNote_1 = require('TypeNote');
    const Enumere_Arrondi_1 = require('Enumere_Arrondi');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TradTypeArrondi = ObjetTraduction_1.TraductionsModule.getModule(
      'TypeArrondi',
      { Sans: '', Dixieme: '', Quart: '', Demi: '', Point: '' },
    );
    class TypeArrondi {
      constructor(aGenrePronote) {
        this.precision = 0;
        this.genre = Enumere_Arrondi_1.EGenreArrondi.sans;
        this.precisionMini =
          1 / Math.pow(10, TypeNote_1.TypeNote.decimalNotation);
        this.toType(aGenrePronote);
      }
      static getLibelleSelonPrecision(aPrecision) {
        switch (aPrecision) {
          case 0.1:
            return TradTypeArrondi.Dixieme;
          case 0.25:
            return TradTypeArrondi.Quart;
          case 0.5:
            return TradTypeArrondi.Demi;
          case 1.0:
            return TradTypeArrondi.Point;
        }
        return TradTypeArrondi.Sans;
      }
      getPrecision() {
        return this.precision;
      }
      getGenre() {
        return this.genre;
      }
      setPrecision(aPrecision) {
        this.precision = aPrecision;
      }
      setGenre(aGenre) {
        this.genre = aGenre;
      }
      arrondir(aValeur) {
        aValeur =
          Math.round(
            parseFloat(
              Number(aValeur / this.precisionMini).toFixed(
                TypeNote_1.TypeNote.decimalNotation,
              ),
            ),
          ) * this.precisionMini;
        switch (this.genre) {
          case Enumere_Arrondi_1.EGenreArrondi.superieur:
            return (
              Math.ceil(
                parseFloat(
                  Number(aValeur / this.precision).toFixed(
                    TypeNote_1.TypeNote.decimalNotation,
                  ),
                ),
              ) * this.precision
            );
          case Enumere_Arrondi_1.EGenreArrondi.inferieur:
            return (
              Math.floor(
                parseFloat(
                  Number(aValeur / this.precision).toFixed(
                    TypeNote_1.TypeNote.decimalNotation,
                  ),
                ),
              ) * this.precision
            );
          case Enumere_Arrondi_1.EGenreArrondi.plusProche:
            return (
              Math.round(
                parseFloat(
                  Number(aValeur / this.precision).toFixed(
                    TypeNote_1.TypeNote.decimalNotation,
                  ),
                ),
              ) * this.precision
            );
          default:
            return aValeur;
        }
      }
      toType(aGenrePronote) {
        this.precision = [
          this.precisionMini,
          0.1,
          0.25,
          0.5,
          1,
          0.1,
          0.25,
          0.5,
          1,
        ][aGenrePronote];
        this.genre =
          parseInt(aGenrePronote) !== 0
            ? parseInt(aGenrePronote) <= 4
              ? Enumere_Arrondi_1.EGenreArrondi.superieur
              : Enumere_Arrondi_1.EGenreArrondi.plusProche
            : Enumere_Arrondi_1.EGenreArrondi.sans;
      }
      toString() {
        switch (this.genre) {
          case Enumere_Arrondi_1.EGenreArrondi.sans:
            return 0;
          case Enumere_Arrondi_1.EGenreArrondi.superieur:
            switch (this.precision) {
              case 0.1:
                return 1;
              case 0.25:
                return 2;
              case 0.5:
                return 3;
              case 1:
                return 4;
              default:
                return 0;
            }
          case Enumere_Arrondi_1.EGenreArrondi.plusProche:
            switch (this.precision) {
              case 0.1:
                return 5;
              case 0.25:
                return 6;
              case 0.5:
                return 7;
              case 1:
                return 8;
              default:
                return 0;
            }
          default:
            return 0;
        }
      }
      strPrecision() {
        return TypeArrondi.getLibelleSelonPrecision(this.precision);
      }
      dupliquer() {
        const lArrondi = new TypeArrondi(0);
        lArrondi.precision = this.precision;
        lArrondi.genre = this.genre;
        return lArrondi;
      }
      toJSON() {
        const lJSON = {};
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type] =
          TypeHttpVariable_1.TypeHttpVariable.TypeHttpArrondi;
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur] = this.toString();
        return lJSON;
      }
    }
    exports.TypeArrondi = TypeArrondi;
  },
  fn: 'typearrondi.js',
});