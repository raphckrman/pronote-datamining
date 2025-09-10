IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreEvenementListe = void 0;
    var EGenreEvenementListe;
    (function (EGenreEvenementListe) {
      EGenreEvenementListe[(EGenreEvenementListe['Selection'] = 0)] =
        'Selection';
      EGenreEvenementListe[(EGenreEvenementListe['Creation'] = 1)] = 'Creation';
      EGenreEvenementListe[(EGenreEvenementListe['Edition'] = 2)] = 'Edition';
      EGenreEvenementListe[(EGenreEvenementListe['Suppression'] = 3)] =
        'Suppression';
      EGenreEvenementListe[(EGenreEvenementListe['Deploiement'] = 4)] =
        'Deploiement';
      EGenreEvenementListe[(EGenreEvenementListe['ApresCreation'] = 5)] =
        'ApresCreation';
      EGenreEvenementListe[(EGenreEvenementListe['ApresEdition'] = 6)] =
        'ApresEdition';
      EGenreEvenementListe[(EGenreEvenementListe['ApresSuppression'] = 7)] =
        'ApresSuppression';
      EGenreEvenementListe[(EGenreEvenementListe['SelectionClick'] = 8)] =
        'SelectionClick';
      EGenreEvenementListe[(EGenreEvenementListe['ApresErreurCreation'] = 9)] =
        'ApresErreurCreation';
      EGenreEvenementListe[(EGenreEvenementListe['SelectionDblClick'] = 10)] =
        'SelectionDblClick';
      EGenreEvenementListe[(EGenreEvenementListe['KeyPressListe'] = 11)] =
        'KeyPressListe';
      EGenreEvenementListe[(EGenreEvenementListe['KeyUpListe'] = 12)] =
        'KeyUpListe';
      EGenreEvenementListe[(EGenreEvenementListe['SelectionClickTotal'] = 13)] =
        'SelectionClickTotal';
      EGenreEvenementListe[(EGenreEvenementListe['ModificationCBLigne'] = 14)] =
        'ModificationCBLigne';
      EGenreEvenementListe[
        (EGenreEvenementListe['ModificationSelection'] = 15)
      ] = 'ModificationSelection';
    })(
      EGenreEvenementListe ||
        (exports.EGenreEvenementListe = EGenreEvenementListe = {}),
    );
  },
  fn: 'enumere_evenementliste.js',
});