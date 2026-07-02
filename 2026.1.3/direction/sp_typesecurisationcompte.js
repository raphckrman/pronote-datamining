IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeGenreSourceConnexionUtil =
      exports.TypeModeGestionDoubleAuthentificationUtil =
      exports.C_LibelleAppareilMaxLength =
      exports.C_PinFixeLength =
      exports.C_MinPinLength =
      exports.C_MaxPinRetry =
      exports.TypeGenreSourceConnexion =
      exports.TypeModeGestionDoubleAuthentification =
      exports.TypeActionIHMSecurisationCompte =
      exports.TypeCommandeSecurisationCompteHttp =
        void 0;
    var TypeCommandeSecurisationCompteHttp;
    (function (TypeCommandeSecurisationCompteHttp) {
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp['csch_VerifierPIN'] = 0)
      ] = 'csch_VerifierPIN';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp[
          'csch_VerifierMotDePassePersonnalise'
        ] = 1)
      ] = 'csch_VerifierMotDePassePersonnalise';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp[
          'csch_LibellesSourceConnexionDejaConnus'
        ] = 2)
      ] = 'csch_LibellesSourceConnexionDejaConnus';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp[
          'csch_EnregistrerChoixUtilisateur'
        ] = 3)
      ] = 'csch_EnregistrerChoixUtilisateur';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp[
          'csch_AffecterModeDoubleAuthentification'
        ] = 4)
      ] = 'csch_AffecterModeDoubleAuthentification';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp['csch_AffecterCodePIN'] = 5)
      ] = 'csch_AffecterCodePIN';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp[
          'csch_RenommerSourceConnexionConnue'
        ] = 6)
      ] = 'csch_RenommerSourceConnexionConnue';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp[
          'csch_SupprimerSourceConnexionConnue'
        ] = 7)
      ] = 'csch_SupprimerSourceConnexionConnue';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp[
          'csch_AffecterMotDePassePersonnalise'
        ] = 8)
      ] = 'csch_AffecterMotDePassePersonnalise';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp['csch_ModifierLogin'] = 9)
      ] = 'csch_ModifierLogin';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp['csch_DemandeReinitialisationPIN'] =
          10)
      ] = 'csch_DemandeReinitialisationPIN';
      TypeCommandeSecurisationCompteHttp[
        (TypeCommandeSecurisationCompteHttp[
          'csch_VerifierCodeReinitialisationPIN'
        ] = 11)
      ] = 'csch_VerifierCodeReinitialisationPIN';
    })(
      TypeCommandeSecurisationCompteHttp ||
        (exports.TypeCommandeSecurisationCompteHttp =
          TypeCommandeSecurisationCompteHttp =
            {}),
    );
    var TypeActionIHMSecurisationCompte;
    (function (TypeActionIHMSecurisationCompte) {
      TypeActionIHMSecurisationCompte[
        (TypeActionIHMSecurisationCompte['AIHMSC_PersonnalisationMotDePasse'] =
          0)
      ] = 'AIHMSC_PersonnalisationMotDePasse';
      TypeActionIHMSecurisationCompte[
        (TypeActionIHMSecurisationCompte['AIHMSC_ChoixStrategie'] = 1)
      ] = 'AIHMSC_ChoixStrategie';
      TypeActionIHMSecurisationCompte[
        (TypeActionIHMSecurisationCompte['AIHMSC_ChoixCodePINetSource'] = 2)
      ] = 'AIHMSC_ChoixCodePINetSource';
      TypeActionIHMSecurisationCompte[
        (TypeActionIHMSecurisationCompte['AIHMSC_SaisieCodePINetSource'] = 3)
      ] = 'AIHMSC_SaisieCodePINetSource';
      TypeActionIHMSecurisationCompte[
        (TypeActionIHMSecurisationCompte['AIHMSC_ReinitCodePINetSource'] = 4)
      ] = 'AIHMSC_ReinitCodePINetSource';
      TypeActionIHMSecurisationCompte[
        (TypeActionIHMSecurisationCompte[
          'AIHMSC_SaisieSourcePourNotifSeulement'
        ] = 5)
      ] = 'AIHMSC_SaisieSourcePourNotifSeulement';
    })(
      TypeActionIHMSecurisationCompte ||
        (exports.TypeActionIHMSecurisationCompte =
          TypeActionIHMSecurisationCompte =
            {}),
    );
    var TypeModeGestionDoubleAuthentification;
    (function (TypeModeGestionDoubleAuthentification) {
      TypeModeGestionDoubleAuthentification[
        (TypeModeGestionDoubleAuthentification['MGDA_PasEncoreChoisi'] = 0)
      ] = 'MGDA_PasEncoreChoisi';
      TypeModeGestionDoubleAuthentification[
        (TypeModeGestionDoubleAuthentification['MGDA_Inactive'] = 1)
      ] = 'MGDA_Inactive';
      TypeModeGestionDoubleAuthentification[
        (TypeModeGestionDoubleAuthentification['MGDA_NotificationSeulement'] =
          2)
      ] = 'MGDA_NotificationSeulement';
      TypeModeGestionDoubleAuthentification[
        (TypeModeGestionDoubleAuthentification['MGDA_SaisieCodePIN'] = 3)
      ] = 'MGDA_SaisieCodePIN';
    })(
      TypeModeGestionDoubleAuthentification ||
        (exports.TypeModeGestionDoubleAuthentification =
          TypeModeGestionDoubleAuthentification =
            {}),
    );
    var TypeGenreSourceConnexion;
    (function (TypeGenreSourceConnexion) {
      TypeGenreSourceConnexion[
        (TypeGenreSourceConnexion['GSC_ClientLourd'] = 0)
      ] = 'GSC_ClientLourd';
      TypeGenreSourceConnexion[
        (TypeGenreSourceConnexion['GSC_ApplicationMobile'] = 1)
      ] = 'GSC_ApplicationMobile';
      TypeGenreSourceConnexion[
        (TypeGenreSourceConnexion['GSC_Navigateur'] = 2)
      ] = 'GSC_Navigateur';
    })(
      TypeGenreSourceConnexion ||
        (exports.TypeGenreSourceConnexion = TypeGenreSourceConnexion = {}),
    );
    exports.C_MaxPinRetry = 3;
    exports.C_MinPinLength = 4;
    exports.C_PinFixeLength = 4;
    exports.C_LibelleAppareilMaxLength = 30;
    const IconeSvgGlobe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgGlobe');
    const IconeSvgLaptop_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgLaptop');
    const IconeSvgMobile_phone_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgMobile_phone');
    exports.TypeModeGestionDoubleAuthentificationUtil = {
      getOrdreModeDoubleAuth(aModeParDefaut) {
        let lTabOrdre = [
          TypeModeGestionDoubleAuthentification.MGDA_SaisieCodePIN,
          TypeModeGestionDoubleAuthentification.MGDA_NotificationSeulement,
          TypeModeGestionDoubleAuthentification.MGDA_Inactive,
        ];
        if (
          aModeParDefaut === TypeModeGestionDoubleAuthentification.MGDA_Inactive
        ) {
          lTabOrdre = lTabOrdre.reverse();
        }
        return lTabOrdre;
      },
    };
    exports.TypeGenreSourceConnexionUtil = {
      getSvgIcone(aGenreSourceConnexion) {
        let lIcone = '';
        switch (aGenreSourceConnexion) {
          case TypeGenreSourceConnexion.GSC_ClientLourd:
            lIcone = IE.jsx.str(IconeSvgLaptop_1.IconeSvgLaptop, null);
            break;
          case TypeGenreSourceConnexion.GSC_ApplicationMobile:
            lIcone = IE.jsx.str(
              IconeSvgMobile_phone_1.IconeSvgMobile_phone,
              null,
            );
            break;
          case TypeGenreSourceConnexion.GSC_Navigateur:
            lIcone = IE.jsx.str(IconeSvgGlobe_1.IconeSvgGlobe, null);
            break;
          default:
        }
        return lIcone;
      },
    };
  },
  fn: 'typesecurisationcompte.js',
});