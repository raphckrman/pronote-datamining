IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ToucheClavierUtil = exports.ToucheClavier = void 0;
    const ToucheClavier = {
      Backspace: 8,
      Tab: 9,
      RetourChariot: 13,
      Espace: 32,
      Shift: 16,
      Ctrl: 17,
      Alt: 18,
      Windows: 91,
      ContextMenu: 93,
      Echap: 27,
      FlecheGauche: 37,
      FlecheDroite: 39,
      FlecheHaut: 38,
      FlecheBas: 40,
      Inserer: 45,
      Supprimer: 46,
      Debut: 36,
      Fin: 35,
      PageHaut: 33,
      PageBas: 34,
      _0: 48,
      _1: 49,
      _2: 50,
      _3: 51,
      _4: 52,
      _5: 53,
      _6: 54,
      _7: 55,
      _8: 56,
      _9: 57,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      AccoladeDroite: 222,
      AccoladeGauche: 220,
      Dollar: 223,
      CrochetGauche: 186,
      CrochetDroite: 192,
      Circonflexe: 221,
      PointInterrogation: 219,
      VerrMaj: 20,
      VerrNum: 144,
      F1: 115,
      F3: 114,
      F2: 113,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      ArretDefilement: 145,
      Pause: 19,
      Inferieur: 226,
      Virgule: 188,
      Tiret: 189,
      Point: 190,
      Section: 191,
      NumpadPlus: 107,
      NumpadMoins: 109,
      NumpadSlash: 111,
      NumpadStar: 106,
      Numpad_0: 96,
      Numpad_1: 97,
      Numpad_2: 98,
      Numpad_3: 99,
      Numpad_4: 100,
      Numpad_5: 101,
      Numpad_6: 102,
      Numpad_7: 103,
      Numpad_8: 104,
      Numpad_9: 105,
      NumpadPoint: 110,
    };
    exports.ToucheClavier = ToucheClavier;
    const ToucheClavierUtil = {
      estCaractere(aChar, aRegExp) {
        return aChar === '' || new RegExp('[' + aRegExp + ']').test(aChar);
      },
      estEventRetourChariot(aEventJQuery) {
        return (
          !!aEventJQuery &&
          aEventJQuery.which === ToucheClavier.RetourChariot &&
          !aEventJQuery.shiftKey &&
          !aEventJQuery.altKey &&
          !aEventJQuery.ctrlKey
        );
      },
      estEventEspace(aEventJQuery) {
        return (
          !!aEventJQuery &&
          aEventJQuery.which === ToucheClavier.Espace &&
          !aEventJQuery.shiftKey
        );
      },
      estEventSelection(aEventJQuery) {
        return (
          ToucheClavierUtil.estEventRetourChariot(aEventJQuery) ||
          ToucheClavierUtil.estEventEspace(aEventJQuery)
        );
      },
      estEventEdition(aEventJQuery) {
        return (
          !!aEventJQuery &&
          aEventJQuery.which === ToucheClavier.RetourChariot &&
          aEventJQuery.shiftKey &&
          !aEventJQuery.altKey &&
          !aEventJQuery.ctrlKey
        );
      },
      estEventSupprimer(aEventJQuery) {
        return (
          aEventJQuery &&
          ((aEventJQuery.which === ToucheClavier.Supprimer &&
            !aEventJQuery.shiftKey &&
            !aEventJQuery.altKey &&
            !aEventJQuery.ctrlKey) ||
            (aEventJQuery.which === ToucheClavier.Backspace &&
              aEventJQuery.metaKey))
        );
      },
      estEventCaractereAlphaNumerique(aEventJQuery) {
        return (
          !!aEventJQuery &&
          !aEventJQuery.altKey &&
          !aEventJQuery.ctrlKey &&
          new RegExp('[0-9.a-z.A-Z]').test(
            String.fromCharCode(aEventJQuery.which),
          )
        );
      },
      estToucheFleche(aTouche) {
        return (
          aTouche === ToucheClavier.FlecheBas ||
          aTouche === ToucheClavier.FlecheHaut ||
          aTouche === ToucheClavier.FlecheGauche ||
          aTouche === ToucheClavier.FlecheDroite
        );
      },
      ToucheRetourNavigation: ToucheClavier.Echap,
    };
    exports.ToucheClavierUtil = ToucheClavierUtil;
  },
  fn: 'toucheclavier.js',
});