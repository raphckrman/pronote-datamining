IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ToucheClavierUtil =
      exports.ToucheClavier =
      exports.ToucheClavierKey =
        void 0;
    var ToucheClavierKey;
    (function (ToucheClavierKey) {
      ToucheClavierKey['Backspace'] = 'Backspace';
      ToucheClavierKey['Tab'] = 'Tab';
      ToucheClavierKey['Clear'] = 'Clear';
      ToucheClavierKey['Enter'] = 'Enter';
      ToucheClavierKey['Shift'] = 'Shift';
      ToucheClavierKey['Control'] = 'Control';
      ToucheClavierKey['Alt'] = 'Alt';
      ToucheClavierKey['Pause'] = 'Pause';
      ToucheClavierKey['CapsLock'] = 'CapsLock';
      ToucheClavierKey['Escape'] = 'Escape';
      ToucheClavierKey['Space'] = ' ';
      ToucheClavierKey['PageUp'] = 'PageUp';
      ToucheClavierKey['PageDown'] = 'PageDown';
      ToucheClavierKey['End'] = 'End';
      ToucheClavierKey['Home'] = 'Home';
      ToucheClavierKey['ArrowLeft'] = 'ArrowLeft';
      ToucheClavierKey['ArrowUp'] = 'ArrowUp';
      ToucheClavierKey['ArrowRight'] = 'ArrowRight';
      ToucheClavierKey['ArrowDown'] = 'ArrowDown';
      ToucheClavierKey['Insert'] = 'Insert';
      ToucheClavierKey['Delete'] = 'Delete';
      ToucheClavierKey['F1'] = 'F1';
      ToucheClavierKey['F2'] = 'F2';
      ToucheClavierKey['F3'] = 'F3';
      ToucheClavierKey['F4'] = 'F4';
      ToucheClavierKey['F5'] = 'F5';
      ToucheClavierKey['F6'] = 'F6';
      ToucheClavierKey['F7'] = 'F7';
      ToucheClavierKey['F8'] = 'F8';
      ToucheClavierKey['F9'] = 'F9';
      ToucheClavierKey['F10'] = 'F10';
      ToucheClavierKey['F11'] = 'F11';
      ToucheClavierKey['F12'] = 'F12';
      ToucheClavierKey['NumLock'] = 'NumLock';
      ToucheClavierKey['ScrollLock'] = 'ScrollLock';
      ToucheClavierKey['Meta'] = 'Meta';
    })(ToucheClavierKey || (exports.ToucheClavierKey = ToucheClavierKey = {}));
    var ToucheClavier;
    (function (ToucheClavier) {
      ToucheClavier[(ToucheClavier['Backspace'] = 8)] = 'Backspace';
      ToucheClavier[(ToucheClavier['Tab'] = 9)] = 'Tab';
      ToucheClavier[(ToucheClavier['RetourChariot'] = 13)] = 'RetourChariot';
      ToucheClavier[(ToucheClavier['Espace'] = 32)] = 'Espace';
      ToucheClavier[(ToucheClavier['Shift'] = 16)] = 'Shift';
      ToucheClavier[(ToucheClavier['Ctrl'] = 17)] = 'Ctrl';
      ToucheClavier[(ToucheClavier['Alt'] = 18)] = 'Alt';
      ToucheClavier[(ToucheClavier['Windows'] = 91)] = 'Windows';
      ToucheClavier[(ToucheClavier['ContextMenu'] = 93)] = 'ContextMenu';
      ToucheClavier[(ToucheClavier['Echap'] = 27)] = 'Echap';
      ToucheClavier[(ToucheClavier['FlecheGauche'] = 37)] = 'FlecheGauche';
      ToucheClavier[(ToucheClavier['FlecheDroite'] = 39)] = 'FlecheDroite';
      ToucheClavier[(ToucheClavier['FlecheHaut'] = 38)] = 'FlecheHaut';
      ToucheClavier[(ToucheClavier['FlecheBas'] = 40)] = 'FlecheBas';
      ToucheClavier[(ToucheClavier['Inserer'] = 45)] = 'Inserer';
      ToucheClavier[(ToucheClavier['Supprimer'] = 46)] = 'Supprimer';
      ToucheClavier[(ToucheClavier['Debut'] = 36)] = 'Debut';
      ToucheClavier[(ToucheClavier['Fin'] = 35)] = 'Fin';
      ToucheClavier[(ToucheClavier['PageHaut'] = 33)] = 'PageHaut';
      ToucheClavier[(ToucheClavier['PageBas'] = 34)] = 'PageBas';
      ToucheClavier[(ToucheClavier['_0'] = 48)] = '_0';
      ToucheClavier[(ToucheClavier['_1'] = 49)] = '_1';
      ToucheClavier[(ToucheClavier['_2'] = 50)] = '_2';
      ToucheClavier[(ToucheClavier['_3'] = 51)] = '_3';
      ToucheClavier[(ToucheClavier['_4'] = 52)] = '_4';
      ToucheClavier[(ToucheClavier['_5'] = 53)] = '_5';
      ToucheClavier[(ToucheClavier['_6'] = 54)] = '_6';
      ToucheClavier[(ToucheClavier['_7'] = 55)] = '_7';
      ToucheClavier[(ToucheClavier['_8'] = 56)] = '_8';
      ToucheClavier[(ToucheClavier['_9'] = 57)] = '_9';
      ToucheClavier[(ToucheClavier['A'] = 65)] = 'A';
      ToucheClavier[(ToucheClavier['B'] = 66)] = 'B';
      ToucheClavier[(ToucheClavier['C'] = 67)] = 'C';
      ToucheClavier[(ToucheClavier['D'] = 68)] = 'D';
      ToucheClavier[(ToucheClavier['E'] = 69)] = 'E';
      ToucheClavier[(ToucheClavier['F'] = 70)] = 'F';
      ToucheClavier[(ToucheClavier['G'] = 71)] = 'G';
      ToucheClavier[(ToucheClavier['H'] = 72)] = 'H';
      ToucheClavier[(ToucheClavier['I'] = 73)] = 'I';
      ToucheClavier[(ToucheClavier['J'] = 74)] = 'J';
      ToucheClavier[(ToucheClavier['K'] = 75)] = 'K';
      ToucheClavier[(ToucheClavier['L'] = 76)] = 'L';
      ToucheClavier[(ToucheClavier['M'] = 77)] = 'M';
      ToucheClavier[(ToucheClavier['N'] = 78)] = 'N';
      ToucheClavier[(ToucheClavier['O'] = 79)] = 'O';
      ToucheClavier[(ToucheClavier['P'] = 80)] = 'P';
      ToucheClavier[(ToucheClavier['Q'] = 81)] = 'Q';
      ToucheClavier[(ToucheClavier['R'] = 82)] = 'R';
      ToucheClavier[(ToucheClavier['S'] = 83)] = 'S';
      ToucheClavier[(ToucheClavier['T'] = 84)] = 'T';
      ToucheClavier[(ToucheClavier['U'] = 85)] = 'U';
      ToucheClavier[(ToucheClavier['V'] = 86)] = 'V';
      ToucheClavier[(ToucheClavier['W'] = 87)] = 'W';
      ToucheClavier[(ToucheClavier['X'] = 88)] = 'X';
      ToucheClavier[(ToucheClavier['Y'] = 89)] = 'Y';
      ToucheClavier[(ToucheClavier['Z'] = 90)] = 'Z';
      ToucheClavier[(ToucheClavier['AccoladeDroite'] = 222)] = 'AccoladeDroite';
      ToucheClavier[(ToucheClavier['AccoladeGauche'] = 220)] = 'AccoladeGauche';
      ToucheClavier[(ToucheClavier['Dollar'] = 223)] = 'Dollar';
      ToucheClavier[(ToucheClavier['CrochetGauche'] = 186)] = 'CrochetGauche';
      ToucheClavier[(ToucheClavier['CrochetDroite'] = 192)] = 'CrochetDroite';
      ToucheClavier[(ToucheClavier['Circonflexe'] = 221)] = 'Circonflexe';
      ToucheClavier[(ToucheClavier['PointInterrogation'] = 219)] =
        'PointInterrogation';
      ToucheClavier[(ToucheClavier['VerrMaj'] = 20)] = 'VerrMaj';
      ToucheClavier[(ToucheClavier['VerrNum'] = 144)] = 'VerrNum';
      ToucheClavier[(ToucheClavier['F1'] = 115)] = 'F1';
      ToucheClavier[(ToucheClavier['F3'] = 114)] = 'F3';
      ToucheClavier[(ToucheClavier['F2'] = 113)] = 'F2';
      ToucheClavier[(ToucheClavier['F5'] = 116)] = 'F5';
      ToucheClavier[(ToucheClavier['F6'] = 117)] = 'F6';
      ToucheClavier[(ToucheClavier['F7'] = 118)] = 'F7';
      ToucheClavier[(ToucheClavier['F8'] = 119)] = 'F8';
      ToucheClavier[(ToucheClavier['F9'] = 120)] = 'F9';
      ToucheClavier[(ToucheClavier['F10'] = 121)] = 'F10';
      ToucheClavier[(ToucheClavier['F11'] = 122)] = 'F11';
      ToucheClavier[(ToucheClavier['F12'] = 123)] = 'F12';
      ToucheClavier[(ToucheClavier['ArretDefilement'] = 145)] =
        'ArretDefilement';
      ToucheClavier[(ToucheClavier['Pause'] = 19)] = 'Pause';
      ToucheClavier[(ToucheClavier['Inferieur'] = 226)] = 'Inferieur';
      ToucheClavier[(ToucheClavier['Virgule'] = 188)] = 'Virgule';
      ToucheClavier[(ToucheClavier['Tiret'] = 189)] = 'Tiret';
      ToucheClavier[(ToucheClavier['Point'] = 190)] = 'Point';
      ToucheClavier[(ToucheClavier['Section'] = 191)] = 'Section';
      ToucheClavier[(ToucheClavier['NumpadPlus'] = 107)] = 'NumpadPlus';
      ToucheClavier[(ToucheClavier['NumpadMoins'] = 109)] = 'NumpadMoins';
      ToucheClavier[(ToucheClavier['NumpadSlash'] = 111)] = 'NumpadSlash';
      ToucheClavier[(ToucheClavier['NumpadStar'] = 106)] = 'NumpadStar';
      ToucheClavier[(ToucheClavier['Numpad_0'] = 96)] = 'Numpad_0';
      ToucheClavier[(ToucheClavier['Numpad_1'] = 97)] = 'Numpad_1';
      ToucheClavier[(ToucheClavier['Numpad_2'] = 98)] = 'Numpad_2';
      ToucheClavier[(ToucheClavier['Numpad_3'] = 99)] = 'Numpad_3';
      ToucheClavier[(ToucheClavier['Numpad_4'] = 100)] = 'Numpad_4';
      ToucheClavier[(ToucheClavier['Numpad_5'] = 101)] = 'Numpad_5';
      ToucheClavier[(ToucheClavier['Numpad_6'] = 102)] = 'Numpad_6';
      ToucheClavier[(ToucheClavier['Numpad_7'] = 103)] = 'Numpad_7';
      ToucheClavier[(ToucheClavier['Numpad_8'] = 104)] = 'Numpad_8';
      ToucheClavier[(ToucheClavier['Numpad_9'] = 105)] = 'Numpad_9';
      ToucheClavier[(ToucheClavier['NumpadPoint'] = 110)] = 'NumpadPoint';
    })(ToucheClavier || (exports.ToucheClavier = ToucheClavier = {}));
    exports.ToucheClavierUtil = {
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
          exports.ToucheClavierUtil.estEventRetourChariot(aEventJQuery) ||
          exports.ToucheClavierUtil.estEventEspace(aEventJQuery)
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
  },
  fn: 'toucheclavier.js',
});