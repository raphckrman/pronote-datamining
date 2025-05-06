IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ETypeSwitch =
      exports.EGenreDestinataire =
      exports.EListeIds =
      exports.EGenreTelephone =
      exports.EGenreTypeContenu =
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
      TypeFiltreAffichage['autorisationSortie'] = 'autorisationSortie';
      TypeFiltreAffichage['documentsAFournir'] = 'documentsAFournir';
      TypeFiltreAffichage['autresContacts'] = 'autresContacts';
      TypeFiltreAffichage['profilPrimEnfant'] = 'profilPrimEnfant';
      TypeFiltreAffichage['parametres'] = 'parametres';
      TypeFiltreAffichage['style'] = 'style';
      TypeFiltreAffichage['deconnexion'] = 'deconnexion';
      TypeFiltreAffichage['cahierDeTexte'] = 'cahierDeTexte';
      TypeFiltreAffichage['generalites'] = 'generalites';
      TypeFiltreAffichage['interTitre'] = 'interTitre';
      TypeFiltreAffichage['messagerieSignature'] = 'messagerieSignature';
      TypeFiltreAffichage['iCal'] = 'calendrierICal';
    })(
      TypeFiltreAffichage ||
        (exports.TypeFiltreAffichage = TypeFiltreAffichage = {}),
    );
    var EGenreTypeContenu;
    (function (EGenreTypeContenu) {
      EGenreTypeContenu[(EGenreTypeContenu['Notifications'] = 0)] =
        'Notifications';
      EGenreTypeContenu[(EGenreTypeContenu['Autorisations'] = 1)] =
        'Autorisations';
      EGenreTypeContenu[(EGenreTypeContenu['DroitImage'] = 2)] = 'DroitImage';
      EGenreTypeContenu[(EGenreTypeContenu['DerniereConnexion'] = 3)] =
        'DerniereConnexion';
      EGenreTypeContenu[(EGenreTypeContenu['MotDePasse'] = 4)] = 'MotDePasse';
      EGenreTypeContenu[(EGenreTypeContenu['Identifiant'] = 5)] = 'Identifiant';
      EGenreTypeContenu[(EGenreTypeContenu['Informations'] = 6)] =
        'Informations';
      EGenreTypeContenu[(EGenreTypeContenu['InfosCompteEnfant'] = 7)] =
        'InfosCompteEnfant';
      EGenreTypeContenu[(EGenreTypeContenu['INE'] = 8)] = 'INE';
      EGenreTypeContenu[(EGenreTypeContenu['AutorisationSortie'] = 9)] =
        'AutorisationSortie';
      EGenreTypeContenu[(EGenreTypeContenu['ProjetsAccompagnement'] = 10)] =
        'ProjetsAccompagnement';
      EGenreTypeContenu[(EGenreTypeContenu['__InformationsMedicales'] = 11)] =
        '__InformationsMedicales';
      EGenreTypeContenu[
        (EGenreTypeContenu['__RestrictionsAlimentaires'] = 12)
      ] = '__RestrictionsAlimentaires';
      EGenreTypeContenu[(EGenreTypeContenu['Coordonnees'] = 13)] =
        'Coordonnees';
      EGenreTypeContenu[(EGenreTypeContenu['PreferencesContact'] = 14)] =
        'PreferencesContact';
      EGenreTypeContenu[
        (EGenreTypeContenu['AutorisationsSupplementaires'] = 15)
      ] = 'AutorisationsSupplementaires';
      EGenreTypeContenu[(EGenreTypeContenu['AutorisationsMessages'] = 17)] =
        'AutorisationsMessages';
      EGenreTypeContenu[(EGenreTypeContenu['DepotDocuments'] = 18)] =
        'DepotDocuments';
      EGenreTypeContenu[(EGenreTypeContenu['CommunicationParents'] = 19)] =
        'CommunicationParents';
      EGenreTypeContenu[
        (EGenreTypeContenu['ContenuCommunicationParents'] = 20)
      ] = 'ContenuCommunicationParents';
      EGenreTypeContenu[(EGenreTypeContenu['Medecin'] = 21)] = 'Medecin';
      EGenreTypeContenu[(EGenreTypeContenu['Allergies'] = 22)] = 'Allergies';
      EGenreTypeContenu['sourcesConnexions'] = 'sourcesConnexions';
      EGenreTypeContenu['Signature'] = 'signature';
      EGenreTypeContenu['Accessibilite'] = 'Accessibilite';
      EGenreTypeContenu['Personnalisation'] = 'Personnalisation';
      EGenreTypeContenu['CahierDeTexte'] = 'CahierDeTexte';
      EGenreTypeContenu['Deconnexion'] = 'Deconnexion';
      EGenreTypeContenu['Generalites'] = 'Generalites';
      EGenreTypeContenu['messagerieSignature'] = 'messagerieSignature';
      EGenreTypeContenu['iCal'] = 'CalendrierICal';
    })(
      EGenreTypeContenu || (exports.EGenreTypeContenu = EGenreTypeContenu = {}),
    );
    var EGenreTelephone;
    (function (EGenreTelephone) {
      EGenreTelephone[(EGenreTelephone['mail'] = 1)] = 'mail';
      EGenreTelephone[(EGenreTelephone['telFixe'] = 2)] = 'telFixe';
      EGenreTelephone[(EGenreTelephone['telPort'] = 3)] = 'telPort';
      EGenreTelephone[(EGenreTelephone['fax'] = 4)] = 'fax';
    })(EGenreTelephone || (exports.EGenreTelephone = EGenreTelephone = {}));
    var EListeIds;
    (function (EListeIds) {
      EListeIds['identifiant'] = '_ident';
      EListeIds['mdp'] = '_mdp';
      EListeIds['email'] = '_email';
      EListeIds['cbSMS'] = 'cbSMS';
      EListeIds['cbMail'] = 'cbMail';
      EListeIds['cbMailEtab'] = 'cbMailEtab';
      EListeIds['cbParent'] = 'cbParent';
      EListeIds['cbCourrier'] = 'cbCourrier';
      EListeIds['cbMsgParent'] = 'cbMsgParent';
      EListeIds['cbMsgEleve'] = 'cbMsgEleve';
      EListeIds['cbMsgProfsPerso'] = 'cbMsgProfsPerso';
      EListeIds['cbMsgContactVS'] = 'cbMsgContactVS';
      EListeIds['cbNotifs'] = 'cbNotif';
      EListeIds['comboDelai'] = 'comboNotif';
      EListeIds['cbNotifsTravaux'] = 'cbNotifTravaux';
      EListeIds['comboDelaiTravaux'] = 'comboNotifTravaux';
      EListeIds['cbDroitImage'] = 'cbDroitImage';
      EListeIds['cbExposerDossierMedical'] = 'cbExposerDosierMedical';
      EListeIds['cbAutoriserHospitalisation'] = 'cbAutoriserHospitalisation';
      EListeIds['cbAutoriserAllergies'] = 'cbAutoriserAllergies';
      EListeIds['cbDestinataireBulletin'] = 'cbDestinataireBulletin';
      EListeIds['cbDestinataireInfosEleve'] = 'cbDestinataireInfosEleve';
      EListeIds['cbDestinataireInfosProf'] = 'cbDestinataireInfosProf';
      EListeIds['cbDestinataireInfosGen'] = 'cbDestinataireInfosGen';
      EListeIds['mdpEnfant'] = 'mdp_enfant';
      EListeIds['sideNav'] = '_idSideNav';
      EListeIds['sideInterlocuteurs'] = '_idSideNavInterlocuteurs';
      EListeIds['sidePreferences'] = '_idSideNavPreferences';
      EListeIds['sideInformations'] = '_idSideNavInformations';
      EListeIds['sideCommunicationParents'] = 'idsideCommunicationParents';
      EListeIds['autoriserSignature'] = 'idAutoriserSignature';
      EListeIds['bntAjouterSignature'] = 'idBtnAjoutSignature';
      EListeIds['cbAcceptDemandeRdv'] = 'cbAcceptDemandeRdv';
    })(EListeIds || (exports.EListeIds = EListeIds = {}));
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