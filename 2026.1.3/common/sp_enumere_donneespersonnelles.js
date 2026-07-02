IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ETypeSwitch =
      exports.EGenreDestinataire =
      exports.EGenreTelephone =
      exports.TypeFiltreAffichage =
        void 0;
    var TypeFiltreAffichage;
    (function (TypeFiltreAffichage) {
      TypeFiltreAffichage['securisation'] = 'securisation';
      TypeFiltreAffichage['coords'] = 'coords';
      TypeFiltreAffichage['communication'] = 'communication';
      TypeFiltreAffichage['notification'] = 'notification';
      TypeFiltreAffichage['droitImage'] = 'droitImage';
      TypeFiltreAffichage['signature'] = 'signature';
      TypeFiltreAffichage['profilPrimEnfant'] = 'profilPrimEnfant';
      TypeFiltreAffichage['style'] = 'style';
      TypeFiltreAffichage['deconnexion'] = 'deconnexion';
      TypeFiltreAffichage['cahierDeTexte'] = 'cahierDeTexte';
      TypeFiltreAffichage['generalites'] = 'generalites';
      TypeFiltreAffichage['interTitre'] = 'interTitre';
      TypeFiltreAffichage['iCal'] = 'calendrierICal';
    })(
      TypeFiltreAffichage ||
        (exports.TypeFiltreAffichage = TypeFiltreAffichage = {}),
    );
    var EGenreTelephone;
    (function (EGenreTelephone) {
      EGenreTelephone[(EGenreTelephone['mail'] = 1)] = 'mail';
      EGenreTelephone[(EGenreTelephone['telFixe'] = 2)] = 'telFixe';
      EGenreTelephone[(EGenreTelephone['telPort'] = 3)] = 'telPort';
      EGenreTelephone[(EGenreTelephone['fax'] = 4)] = 'fax';
    })(EGenreTelephone || (exports.EGenreTelephone = EGenreTelephone = {}));
    var EGenreDestinataire;
    (function (EGenreDestinataire) {
      EGenreDestinataire[(EGenreDestinataire['SMS'] = 1)] = 'SMS';
      EGenreDestinataire[(EGenreDestinataire['Email'] = 2)] = 'Email';
      EGenreDestinataire[(EGenreDestinataire['Courrier'] = 3)] = 'Courrier';
    })(
      EGenreDestinataire ||
        (exports.EGenreDestinataire = EGenreDestinataire = {}),
    );
    var ETypeSwitch;
    (function (ETypeSwitch) {
      ETypeSwitch[(ETypeSwitch['Bulletin'] = 1)] = 'Bulletin';
      ETypeSwitch[(ETypeSwitch['InfosEleve'] = 2)] = 'InfosEleve';
      ETypeSwitch[(ETypeSwitch['InfosProfesseur'] = 3)] = 'InfosProfesseur';
      ETypeSwitch[(ETypeSwitch['InfosGenerales'] = 4)] = 'InfosGenerales';
    })(ETypeSwitch || (exports.ETypeSwitch = ETypeSwitch = {}));
  },
  fn: 'enumere_donneespersonnelles.js',
});