IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreEvenementWidget = void 0;
    var EGenreEvenementWidget;
    (function (EGenreEvenementWidget) {
      EGenreEvenementWidget[(EGenreEvenementWidget['NavigationVersPage'] = 0)] =
        'NavigationVersPage';
      EGenreEvenementWidget[(EGenreEvenementWidget['SaisieWidget'] = 1)] =
        'SaisieWidget';
      EGenreEvenementWidget[
        (EGenreEvenementWidget['AfficherExecutionQCM'] = 2)
      ] = 'AfficherExecutionQCM';
      EGenreEvenementWidget[(EGenreEvenementWidget['ActualiserWidget'] = 3)] =
        'ActualiserWidget';
      EGenreEvenementWidget[
        (EGenreEvenementWidget['EvenementPersonnalise'] = 4)
      ] = 'EvenementPersonnalise';
    })(
      EGenreEvenementWidget ||
        (exports.EGenreEvenementWidget = EGenreEvenementWidget = {}),
    );
  },
  fn: 'enumere_evenementwidget.js',
});