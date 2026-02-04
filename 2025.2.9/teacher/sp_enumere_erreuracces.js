IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreErreurAcces = void 0;
    var EGenreErreurAcces;
    (function (EGenreErreurAcces) {
      EGenreErreurAcces[(EGenreErreurAcces['Aucune'] = 0)] = 'Aucune';
      EGenreErreurAcces[(EGenreErreurAcces['Identification'] = 1)] =
        'Identification';
      EGenreErreurAcces[(EGenreErreurAcces['Autorisation'] = 2)] =
        'Autorisation';
      EGenreErreurAcces[(EGenreErreurAcces['ConnexionClasse'] = 3)] =
        'ConnexionClasse';
      EGenreErreurAcces[(EGenreErreurAcces['AucuneRessource'] = 4)] =
        'AucuneRessource';
      EGenreErreurAcces[(EGenreErreurAcces['Connexion'] = 5)] = 'Connexion';
      EGenreErreurAcces[(EGenreErreurAcces['BloqueeEleve'] = 6)] =
        'BloqueeEleve';
      EGenreErreurAcces[(EGenreErreurAcces['FonctionAccompagnant'] = 7)] =
        'FonctionAccompagnant';
      EGenreErreurAcces[(EGenreErreurAcces['AccompagnantAucunEleve'] = 8)] =
        'AccompagnantAucunEleve';
      EGenreErreurAcces[(EGenreErreurAcces['Message'] = 9)] = 'Message';
      EGenreErreurAcces[(EGenreErreurAcces['CompteDesactive'] = 10)] =
        'CompteDesactive';
    })(
      EGenreErreurAcces || (exports.EGenreErreurAcces = EGenreErreurAcces = {}),
    );
  },
  fn: 'enumere_erreuracces.js',
});