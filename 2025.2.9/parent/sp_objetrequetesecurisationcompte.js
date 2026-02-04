IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteSecurisationComptePreference =
      exports.ObjetRequeteSecurisationCompteDoubleAuth = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const TypeSecurisationCompte_1 = require('TypeSecurisationCompte');
    const AccessApp_1 = require('AccessApp');
    class ObjetRequeteSecurisationCompteDoubleAuth extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
      lancerRequete(aParams) {
        this.JSON.action = aParams.action;
        const lComm = this.communication;
        switch (this.JSON.action) {
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_VerifierMotDePassePersonnalise:
            this.JSON.nouveauMDP = lComm.getChaineChiffreeAES(
              aParams.nouveauMDP,
            );
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_VerifierPIN:
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_VerifierCodeReinitialisationPIN:
            this.JSON.codePin = lComm.getChaineChiffreeAES(aParams.codePin);
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_LibellesSourceConnexionDejaConnus:
            this.JSON.libelle = aParams.libelle;
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_EnregistrerChoixUtilisateur:
            this.JSON.mode = aParams.mode;
            if (aParams.nouveauMDP) {
              this.JSON.nouveauMDP = lComm.getChaineChiffreeAES(
                aParams.nouveauMDP,
              );
            }
            if (aParams.codePin) {
              this.JSON.codePin = lComm.getChaineChiffreeAES(aParams.codePin);
            }
            if (aParams.reinitPIN_OK) {
              this.JSON.reinitPIN_OK = true;
              this.JSON.codePINVerifReinit = lComm.getChaineChiffreeAES(
                aParams.codePINVerifReinit,
              );
            }
            this.JSON.avecIdentification = aParams.avecIdentification;
            this.JSON.strIdentification = aParams.strIdentification;
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_DemandeReinitialisationPIN:
            break;
          default:
        }
        return this.appelAsynchrone();
      }
      actionApresRequete() {
        if (
          (0, AccessApp_1.getApp)().estAppliMobile &&
          this.JSONReponse.jetonConnexionAppliMobile
        ) {
          window.messageData.push({
            action: 'surAuth',
            data: this.JSONReponse.jetonConnexionAppliMobile,
          });
        }
        this.callbackReussite.appel(this.JSONReponse);
      }
    }
    exports.ObjetRequeteSecurisationCompteDoubleAuth =
      ObjetRequeteSecurisationCompteDoubleAuth;
    CollectionRequetes_1.Requetes.inscrire(
      'SecurisationCompteDoubleAuth',
      ObjetRequeteSecurisationCompteDoubleAuth,
    );
    class ObjetRequeteSecurisationComptePreference extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
      lancerRequete(aParams) {
        this.JSON.action = aParams.action;
        const lComm = this.communication;
        switch (this.JSON.action) {
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_AffecterMotDePassePersonnalise:
            this.JSON.ancienMDP = lComm.getChaineChiffreeAES(aParams.ancienMDP);
            this.JSON.nouveauMDP = lComm.getChaineChiffreeAES(
              aParams.nouveauMDP,
            );
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_ModifierLogin:
            this.JSON.ancienMDP = lComm.getChaineChiffreeAES(aParams.ancienMDP);
            this.JSON.identifiant = lComm.getChaineChiffreeAES(
              aParams.nouveauMDP,
            );
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_VerifierPIN:
            this.JSON.codePin = lComm.getChaineChiffreeAES(aParams.codePin);
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_AffecterModeDoubleAuthentification:
            this.JSON.mode = aParams.mode;
            if (aParams.ancienCodePin) {
              this.JSON.ancienCodePin = lComm.getChaineChiffreeAES(
                aParams.ancienCodePin,
              );
            }
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_AffecterCodePIN:
            this.JSON.codePin = lComm.getChaineChiffreeAES(aParams.codePin);
            if (aParams.ancienCodePin) {
              this.JSON.ancienCodePin = lComm.getChaineChiffreeAES(
                aParams.ancienCodePin,
              );
            }
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_SupprimerSourceConnexionConnue:
            this.JSON.identifiantSysteme = aParams.identifiantSysteme;
            this.JSON.genreSource = aParams.genreSource;
            break;
          case TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
            .csch_RenommerSourceConnexionConnue:
            this.JSON.identifiantSysteme = aParams.identifiantSysteme;
            this.JSON.genreSource = aParams.genreSource;
            this.JSON.libelleSaisi = aParams.libelleSaisi;
            break;
          default:
        }
        return this.appelAsynchrone();
      }
      actionApresRequete() {
        if (
          (0, AccessApp_1.getApp)().estAppliMobile &&
          this.JSONReponse.jetonConnexionAppliMobile
        ) {
          window.messageData.push({
            action: 'surAuth',
            data: this.JSONReponse.jetonConnexionAppliMobile,
          });
        }
        this.callbackReussite.appel(this.JSONReponse);
      }
    }
    exports.ObjetRequeteSecurisationComptePreference =
      ObjetRequeteSecurisationComptePreference;
    CollectionRequetes_1.Requetes.inscrire(
      'SecurisationComptePreference',
      ObjetRequeteSecurisationComptePreference,
    );
  },
  fn: 'objetrequetesecurisationcompte.js',
});