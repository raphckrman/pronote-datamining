IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteConsultation =
      exports.ObjetRequeteSaisie =
      exports.ObjetRequeteJSON =
      exports.utils =
      exports.EGenreReponseSaisie =
      exports.c_constantesJSON =
        void 0;
    require('Divers');
    const Callback_1 = require('Callback');
    const Invocateur_1 = require('Invocateur');
    const ObjetTraduction_1 = require('ObjetTraduction');
    var c_constantesJSON;
    (function (c_constantesJSON) {
      c_constantesJSON['noeudJSON'] = 'D';
      c_constantesJSON['Signature'] = 'Signature';
      c_constantesJSON['SignatureAttente'] = '_SignatureAttente_';
      c_constantesJSON['Donnees'] = 'data';
    })(c_constantesJSON || (exports.c_constantesJSON = c_constantesJSON = {}));
    var EGenreReponseSaisie;
    (function (EGenreReponseSaisie) {
      EGenreReponseSaisie['erreur'] = 'reponseSaisie_erreur';
      EGenreReponseSaisie['annulation'] = 'reponseSaisie_annulation';
      EGenreReponseSaisie['succes'] = 'reponseSaisie_succes';
    })(
      EGenreReponseSaisie ||
        (exports.EGenreReponseSaisie = EGenreReponseSaisie = {}),
    );
    const utils = {
      getIdentNotification(aIdent) {
        return 'notificationsRequete_' + aIdent;
      },
    };
    exports.utils = utils;
    Invocateur_1.Invocateur.abonner(
      'deserialisation_notificationsPolling',
      (aJSONRacine) => {
        const lJSON = aJSONRacine[c_constantesJSON.Signature];
        if (lJSON) {
          if (lJSON.ModeExclusif !== undefined) {
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.modificationModeExclusif,
              lJSON.ModeExclusif,
            );
          }
          if (ObjetRequeteJSON.modules.deserialiserPolling) {
            ObjetRequeteJSON.modules.deserialiserPolling(lJSON, aJSONRacine);
          }
          Invocateur_1.Invocateur.evenement(
            Invocateur_1.ObjetInvocateur.events.refreshIEHtml,
          );
        }
      },
    );
    class ObjetRequeteJSON {
      constructor(aPere, aEvenementSurReussite, aEvenementSurEchec) {
        this.communication = GApplication.getCommunication();
        this.setOptions(null);
        const lSelf = this;
        const lPere = aPere;
        this.callbackReussite = new Callback_1.Callback(
          lPere || {},
          (...aParams) => {
            if (lPere && lPere.isDestroyed && lPere.isDestroyed()) {
              IE.log.addLog('callbackReussite avec un pere detruit');
              return;
            }
            const lResult = aEvenementSurReussite
                ? aEvenementSurReussite.apply(aPere, aParams)
                : null,
              lResultPromesse = lSelf._executionFonctionPromesse(
                lSelf.reussitePromesse,
                aParams,
              );
            lSelf._refreshHTML(!!aEvenementSurReussite);
            return aEvenementSurReussite ? lResult : lResultPromesse;
          },
        );
        if (!this.estUneSaisie) {
          this.callbackEchec = new Callback_1.Callback(
            lPere || {},
            (...aParams) => {
              if (lPere && lPere.isDestroyed && lPere.isDestroyed()) {
                IE.log.addLog('callbackEchec avec un pere detruit');
                return;
              }
              const lResult = aEvenementSurEchec
                  ? aEvenementSurEchec.apply(aPere, aParams)
                  : null,
                lResultPromesse = lSelf._executionFonctionPromesse(
                  lSelf.echecPromesse,
                  aParams,
                );
              lSelf._refreshHTML(!!aEvenementSurReussite);
              return aEvenementSurEchec ? lResult : lResultPromesse;
            },
          );
        }
        this.reussitePromesse = null;
        this.echecPromesse = null;
        this._jsonRacineParametres = {};
        this.JSON = {};
        if (ObjetRequeteJSON.modules.modifierRechercheSignature) {
          this.modifierRechercheSignature =
            ObjetRequeteJSON.modules.modifierRechercheSignature;
        }
        if (ObjetRequeteJSON.modules.initialiser) {
          const lFunc = (aJSONSignature) => {
            this._jsonRacineParametres[c_constantesJSON.Signature] =
              aJSONSignature;
          };
          ObjetRequeteJSON.modules.initialiser(lFunc);
        }
        if (ObjetRequeteJSON.modules.factoryModuleUploadCloud) {
          this.moduleUploadCloud =
            ObjetRequeteJSON.modules.factoryModuleUploadCloud();
        }
      }
      static declarerModules(aModules) {
        Object.assign(ObjetRequeteJSON.modules, aModules);
      }
      setOptions(aOptions) {
        if (!this.options) {
          this.options = {
            avecRefreshHTML: true,
            avecControleModeExclusif: false,
            messageDetail: '',
            gererMessageErreur: null,
            sansBlocageInterface: false,
            titreEchecModeExclusif: 'Usage exclusif',
            messageEchecModeExclusif: 'La saisie est impossible en mode consultation',
          };
        }
        Object.assign(this.options, aOptions);
        return this;
      }
      _reponseRequete(aJSONRacine, aErreurCommunication) {
        this._jsonRacine = aJSONRacine || {};
        this.JSONReponse = {};
        this.JSONSignature = {};
        if (aErreurCommunication) {
          this.JSONReponse.erreurCommunication = aErreurCommunication;
        }
        if (this._jsonRacine[c_constantesJSON.Donnees]) {
          this.JSONReponse = this._jsonRacine[c_constantesJSON.Donnees];
        }
        if (this._jsonRacine[c_constantesJSON.Signature]) {
          this.JSONSignature = this._jsonRacine[c_constantesJSON.Signature];
        }
        this.traiterReponseRequete(aErreurCommunication);
        this.apresReponseRequete();
      }
      traiterReponseRequete(aErreurCommunication) {}
      apresReponseRequete() {}
      serialiserJSON() {
        if (this._jsonRacineParametres) {
          if (this.JSON && !$.isEmptyObject(this.JSON)) {
            this._jsonRacineParametres[c_constantesJSON.Donnees] = this.JSON;
          }
        }
      }
      async appelAsynchrone() {
        if (
          this.options.avecControleModeExclusif &&
          GApplication.getModeExclusif()
        ) {
          const lPromiseMessage = GApplication.getMessage().afficher({
            titre: this.options.titreEchecModeExclusif,
            message: this.options.messageEchecModeExclusif,
          });
          return Promise.reject({
            modeExclusif: true,
            promiseMessage: lPromiseMessage,
          });
        }
        if (!this._jsonRacineParametres) {
          IE.log.addLog(
            "La requete n'a pas de json definit !",
            null,
            IE.log.genre.Avertissement,
          );
        }
        if (this.moduleUploadCloud && this.moduleUploadCloud.actif()) {
          return this.moduleUploadCloud.lancer().then(() => {
            return this._serialisationJSONEtEnvoieRequeteSaisie();
          });
        }
        return this._serialisationJSONEtEnvoieRequeteSaisie();
      }
      lancerRequete(...aParametres) {
        if (aParametres.length > 0) {
          Object.assign(this.JSON, aParametres[0]);
        }
        return this.appelAsynchrone();
      }
      addUpload(aParams) {
        this.paramsUpload = aParams;
        if (aParams && aParams.listeDJCloud) {
          if (this.moduleUploadCloud && this.moduleUploadCloud.setListePJs) {
            this.moduleUploadCloud.setListePJs(aParams.listeDJCloud);
          } else {
          }
        }
        return this;
      }
      deserialiserSignature() {
        if (ObjetRequeteJSON.modules.deserialiserSignature) {
          ObjetRequeteJSON.modules.deserialiserSignature(this.JSONSignature);
        }
      }
      _refreshHTML(aAvecEvenementSurReussite) {
        if (this.options.avecRefreshHTML) {
          Invocateur_1.Invocateur.evenement(
            Invocateur_1.ObjetInvocateur.events.refreshIEHtml,
          );
          if (!aAvecEvenementSurReussite) {
            setTimeout(() => {
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.refreshIEHtml,
              );
            }, 0);
          }
        }
      }
      _executionFonctionPromesse(aMethodes, aArguments) {
        let lResult;
        if (aMethodes) {
          if (aArguments.length === 0) {
            lResult = aMethodes();
          } else if (aArguments.length === 1) {
            lResult = aMethodes(aArguments[0]);
          } else {
            lResult = aMethodes(Array.prototype.slice.call(aArguments));
          }
        }
        return lResult;
      }
      _serialisationJSONEtEnvoieRequeteSaisie() {
        return new Promise((aResolve, aReject) => {
          this.reussitePromesse = aResolve;
          this.echecPromesse = aReject;
          this.serialiserJSON();
          const lParams = {
            nom: this.nom,
            json: this._jsonRacineParametres,
            callbackPere: this,
            callbackEvenement: this._reponseRequete,
            numeroRequete: undefined,
            messageDetail: this.options.messageDetail,
            requetePrioritaire: this.options.requetePrioritaire,
            sansBlocageInterface: !!this.options.sansBlocageInterface,
            estRequeteDeconnexion: this.options.estRequeteDeconnexion,
            paramsUpload: this.paramsUpload,
          };
          this.paramsUpload = null;
          this.communication.appelFonctionAsynchroneXML(lParams);
        });
      }
    }
    exports.ObjetRequeteJSON = ObjetRequeteJSON;
    ObjetRequeteJSON.modules = {};
    class ObjetRequeteSaisie extends ObjetRequeteJSON {
      constructor(...aParams) {
        super(...aParams);
        this.setOptions({
          avecControleModeExclusif: true,
          messageDetail: 'Validation en cours',
          titreEchecValidation: 'La validation a échoué.',
          titreAnnulationValidation: '',
          afficherMessageErreur: true,
        });
      }
      actionApresRequete(aGenreReponse) {
        this.callbackReussite.appel({
          JSONRapportSaisie: this.JSONRapportSaisie,
          JSONReponse: this.JSONReponse,
          genreReponse: aGenreReponse,
          messageErreur: this.messageErreur,
          promiseMessage: this.promiseMessage,
        });
      }
      traiterReponseRequete(aErreurCommunication) {
        this.actionApresRequete(
          this.traiterReponseSaisie(aErreurCommunication),
        );
      }
      _getMessageErreurSaisie(aMessagesErreurRapportSaisie, aReponse, aTitre) {
        let lDetails = '';
        if (
          aMessagesErreurRapportSaisie &&
          Array.isArray(aMessagesErreurRapportSaisie)
        ) {
          lDetails = aMessagesErreurRapportSaisie.join('\n');
        }
        let lTitre = aTitre || '';
        if (!lTitre) {
          switch (aReponse) {
            case EGenreReponseSaisie.erreur:
              lTitre = this.options.titreEchecValidation || '';
              break;
            case EGenreReponseSaisie.annulation:
              lTitre = this.options.titreAnnulationValidation || '';
              break;
          }
        }
        if (lTitre || lDetails) {
          this.messageErreur = { titre: lTitre, message: lDetails || '' };
        }
      }
      traiterReponseSaisieMessage(
        aMessagesErreurRapportSaisie,
        aReponse,
        aTitre,
      ) {
        this._getMessageErreurSaisie(
          aMessagesErreurRapportSaisie,
          aReponse,
          aTitre,
        );
        if (this.messageErreur && this.options.afficherMessageErreur) {
          this.promiseMessage = GApplication.getMessage().afficher(
            this.messageErreur,
          );
        }
      }
      traiterReponseSaisie(aErreurCommunication) {
        let lReponse = aErreurCommunication
          ? EGenreReponseSaisie.erreur
          : EGenreReponseSaisie.succes;
        if (!this.JSONRapportSaisie) {
          this.JSONRapportSaisie =
            this._jsonRacine && this._jsonRacine.RapportSaisie
              ? this._jsonRacine.RapportSaisie
              : {};
        }
        let lMessagesErreurRapportSaisie = !this.JSONRapportSaisie
          ? null
          : this.JSONRapportSaisie._messagesErreur_
            ? this.JSONRapportSaisie._messagesErreur_
            : this.JSONRapportSaisie._erreurSaisie_
              ? []
              : null;
        if (!lMessagesErreurRapportSaisie) {
          lMessagesErreurRapportSaisie =
            this.JSONSignature && this.JSONSignature.Erreur
              ? this.JSONSignature.MessageErreur
                ? [this.JSONSignature.MessageErreur]
                : []
              : null;
        }
        const lTitreErreur = !this.JSONRapportSaisie
          ? null
          : this.JSONRapportSaisie.titre_Messages_Erreur || '';
        if (this.reponseEnErreur()) {
          lReponse = EGenreReponseSaisie.erreur;
        } else if (lMessagesErreurRapportSaisie) {
          lReponse = EGenreReponseSaisie.annulation;
        }
        if (lMessagesErreurRapportSaisie) {
          this.traiterReponseSaisieMessage(
            lMessagesErreurRapportSaisie,
            lReponse,
            lTitreErreur,
          );
        }
        this.deserialiserSignature();
        if (
          !lMessagesErreurRapportSaisie &&
          this.options.avecControleModeExclusif &&
          GApplication.getModeExclusif()
        ) {
          lReponse = EGenreReponseSaisie.annulation;
          this.messageErreur = {
            titre: this.options.titreEchecModeExclusif,
            message: this.options.messageEchecModeExclusif,
          };
          if (this.options.afficherMessageErreur) {
            this.promiseMessage = GApplication.getMessage().afficher(
              this.messageErreur,
            );
          }
        }
        return lReponse;
      }
      reponseEnErreur() {
        return (
          (this.JSONRapportSaisie && this.JSONRapportSaisie._erreurSaisie_) ||
          (this.JSONSignature && this.JSONSignature.Erreur)
        );
      }
    }
    exports.ObjetRequeteSaisie = ObjetRequeteSaisie;
    ObjetRequeteSaisie.prototype.estUneSaisie = true;
    class ObjetRequeteConsultation extends ObjetRequeteJSON {
      constructor(...aParams) {
        super(...aParams);
        this._evenementEchec = aParams[2];
        this.setOptions({
          gererMessageErreur: function (aMessage) {
            const lMessage =
              aMessage && aMessage.length > 0
                ? aMessage
                : 'Une erreur s'est produite';
            try {
              return GApplication.getMessage().afficher({ message: lMessage });
            } catch (e) {}
          },
        });
      }
      traiterReponseRequete(aErreurCommunication) {
        if (!aErreurCommunication) {
          this.deserialiserSignature();
        }
        if (
          this.callbackEchec.evenement &&
          this.JSONSignature &&
          this.JSONSignature.Erreur
        ) {
          this.traiterReponseEchecConsultation();
        } else {
          this.actionApresRequete();
        }
      }
      traiterReponseEchecConsultation() {
        const lMessage =
          this.JSONSignature && this.JSONSignature.MessageErreur
            ? this.JSONSignature.MessageErreur
            : '';
        IE.log.addLog(
          'Erreur de consultation controlé avec le message : ' + lMessage,
          null,
          IE.log.genre.Avertissement,
        );
        let lParametresEchec = lMessage;
        if (!this._evenementEchec) {
          if (this.options.gererMessageErreur) {
            lParametresEchec = {
              promiseMessage: this.options.gererMessageErreur(lMessage),
              message: lMessage,
            };
          }
        }
        if (this.callbackEchec.appel(lParametresEchec)) {
          this.actionApresRequete();
        }
      }
      actionApresRequete() {
        this.callbackReussite.appel(this.JSONReponse);
      }
    }
    exports.ObjetRequeteConsultation = ObjetRequeteConsultation;
  },
  fn: 'objetrequetejson.js',
});