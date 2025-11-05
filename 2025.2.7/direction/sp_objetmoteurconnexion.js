IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetMoteurConnexion = exports.EtatMoteurConnexion = void 0;
    const LocalStorage_1 = require('LocalStorage');
    const ObjetElement_1 = require('ObjetElement');
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_Cryptage_1 = require('Enumere_Cryptage');
    const ObjetCryptage_1 = require('ObjetCryptage');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_ErreurAcces_1 = require('Enumere_ErreurAcces');
    const TypeSecurisationCompte_1 = require('TypeSecurisationCompte');
    const UtilitaireDeconnexion_1 = require('UtilitaireDeconnexion');
    const ObjetRequeteSecurisationCompte_1 = require('ObjetRequeteSecurisationCompte');
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const ValidationMotDePasse_1 = require('ValidationMotDePasse');
    const AccessApp_1 = require('AccessApp');
    var EtatMoteurConnexion;
    (function (EtatMoteurConnexion) {
      EtatMoteurConnexion[(EtatMoteurConnexion['aucun'] = 0)] = 'aucun';
      EtatMoteurConnexion[(EtatMoteurConnexion['malInitialise'] = 1)] =
        'malInitialise';
      EtatMoteurConnexion[(EtatMoteurConnexion['autoInitialise'] = 8)] =
        'autoInitialise';
      EtatMoteurConnexion[(EtatMoteurConnexion['enIdentification'] = 2)] =
        'enIdentification';
      EtatMoteurConnexion[(EtatMoteurConnexion['identifie'] = 3)] = 'identifie';
      EtatMoteurConnexion[(EtatMoteurConnexion['nonIdentifie'] = 4)] =
        'nonIdentifie';
      EtatMoteurConnexion[(EtatMoteurConnexion['enAuthentification'] = 5)] =
        'enAuthentification';
      EtatMoteurConnexion[(EtatMoteurConnexion['authentifie'] = 6)] =
        'authentifie';
      EtatMoteurConnexion[(EtatMoteurConnexion['nonAuthentifie'] = 7)] =
        'nonAuthentifie';
      EtatMoteurConnexion[(EtatMoteurConnexion['erreur'] = 9)] = 'erreur';
    })(
      EtatMoteurConnexion ||
        (exports.EtatMoteurConnexion = EtatMoteurConnexion = {}),
    );
    class ObjetMoteurConnexion {
      constructor() {
        this.avecControleReglesMDP = false;
        this.application = (0, AccessApp_1.getApp)();
        this.const = {
          Cookie_Identification:
            (0, AccessApp_1.getApp)().nomProduit + '_Identification',
          Cookie_Authentification:
            (0, AccessApp_1.getApp)().nomProduit + '_Authentification',
          Cookie_Espace: (0, AccessApp_1.getApp)().nomProduit + '_Espace',
          Cookie_estCAS: (0, AccessApp_1.getApp)().nomProduit + '_EstCas',
        };
        this.reset(true);
      }
      reset(aFull = false) {
        this.stockageMDPActif =
          LocalStorage_1.IELocalStorage.actif &&
          !(0, AccessApp_1.getApp)().getDemo();
        this.avecStockageMDP = false;
        this.estAppliMobile = (0, AccessApp_1.getApp)().estAppliMobile;
        this.modeValidationAppliMobile =
          MethodesObjet_1.MethodesObjet.isFunction(
            GParametres.getCookieValidationAppli,
          ) &&
          GParametres.getCookieValidationAppli() &&
          document.cookie.indexOf(
            GParametres.getCookieValidationAppli() + '=',
          ) > -1;
        this.modeValidationAppliMobileJeton = false;
        this.nomRessource = '';
        this.ressourceInternet = new ObjetElement_1.ObjetElement();
        this.genreConnexion = 0;
        this.login = new ObjetElement_1.ObjetElement();
        this.motDePasse = new ObjetElement_1.ObjetElement();
        this.alea = '';
        this.pourENT = false;
        this.demandeConnexionAuto = false;
        this.enConnexionAuto = false;
        this.demandeConnexionAppliMobile = false;
        this.demandeConnexionAppliMobileJeton = false;
        this.enConnexionAppliMobile = false;
        this.uuidAppliMobile = '';
        this.loginTokenSAV = '';
        this.tokenSAV = '';
        this.erreurCode = Enumere_ErreurAcces_1.EGenreErreurAcces.Aucune;
        this.erreur = { erreurTitre: null, erreurMessage: null };
        this.informationsAppareil = null;
        if (aFull) {
          this.stockageMDPActive = false;
          this.genreEspace = null;
          this.callback = null;
          this.requetes = {
            parametres: null,
            listeRessources: null,
            getRequeteIdent: null,
            getRequeteAuth: null,
          };
        }
        this.etat = EtatMoteurConnexion.aucun;
      }
      init(aParam) {
        this.callback = aParam.callback;
        this.requetes.listeRessources = aParam.requetes.listeRessources || null;
        this.requetes.getRequeteIdent = aParam.requetes.getRequeteIdent || null;
        this.requetes.getRequeteAuth = aParam.requetes.getRequeteAuth || null;
        this.stockageMDPActive = aParam.stockageMDPActive || false;
        this.etat = EtatMoteurConnexion.aucun;
        this.genreEspace = GEtatUtilisateur.getNumeroGenreEspace();
        if (this.stockageMDPActif && this.stockageMDPActive) {
          this.login = new ObjetElement_1.ObjetElement(
            LocalStorage_1.IELocalStorage.getItem(
              this.const.Cookie_Identification,
            ),
          );
          this.motDePasse = new ObjetElement_1.ObjetElement(
            LocalStorage_1.IELocalStorage.getItem(
              this.const.Cookie_Authentification,
            ),
          );
          this.avecStockageMDP =
            !!this.getLogin() &&
            !!this.getMotDePasse() &&
            parseInt(
              LocalStorage_1.IELocalStorage.getItem(this.const.Cookie_Espace),
            ) === this.genreEspace;
          if (!this.avecStockageMDP) {
            this.setStockageMdp(false);
          } else {
            this.etat = EtatMoteurConnexion.autoInitialise;
            this.callback();
          }
        }
        if (window && window.opener) {
          window.addEventListener(
            'message',
            this.messageTokenSAV.bind(this),
            false,
          );
          window.opener.postMessage(JSON.stringify({ loaded: true }), '*');
        }
      }
      setSecurisationCompte(aSecurisationCompte) {
        this.securisationCompte = aSecurisationCompte;
      }
      setLogin(aLogin) {
        if (this.login) {
          this.login.setLibelle(aLogin);
        }
      }
      getLogin(aPourVisu = false) {
        const lLoginBrut = this.login.getLibelle();
        let lLogin = lLoginBrut;
        if (
          lLogin &&
          !this.pourENT &&
          this.login.getGenre() &&
          parseInt(this.login.getGenre().toString()) > 0
        ) {
          lLogin = lLogin.toLowerCase().trim();
        }
        return aPourVisu ? lLoginBrut : lLogin;
      }
      setMotDePasse(aMdp) {
        if (this.motDePasse) {
          this.motDePasse.setLibelle(aMdp);
        }
      }
      getMotDePasseBrut() {
        return this.motDePasse.getLibelle() || '';
      }
      getMotDePasse(aPourVisu = false) {
        let lMotDePasse = this.getMotDePasseBrut();
        if (
          lMotDePasse &&
          !this.pourENT &&
          this.motDePasse.getGenre() &&
          parseInt(this.motDePasse.getGenre().toString()) > 0
        ) {
          lMotDePasse = lMotDePasse.toLowerCase();
        }
        return aPourVisu && this.avecStockageMDP && !!lMotDePasse
          ? '********'
          : aPourVisu && !!lMotDePasse
            ? lMotDePasse
            : !!lMotDePasse && lMotDePasse.trim
              ? forge.md.sha256
                  .create()
                  .update(this.alea)
                  .update(forge.util.encodeUtf8(lMotDePasse.trim()))
                  .digest()
                  .toHex()
                  .toUpperCase()
              : '';
      }
      setGenreConnexion(aGenre) {
        if (GEtatUtilisateur.setGenreConnexion) {
          GEtatUtilisateur.setGenreConnexion(aGenre);
        }
        this.genreConnexion = aGenre;
      }
      getGenreConnexion() {
        return this.genreConnexion;
      }
      aMotDePasseStocke() {
        return !!LocalStorage_1.IELocalStorage.getItem(
          this.const.Cookie_Authentification,
        );
      }
      getCle() {
        return this.tokenSAV
          ? this.tokenSAV
          : (this.pourENT ? '' : this.getLogin()) + this.getMotDePasse();
      }
      setStockageMdp(aActif) {
        if (
          this.stockageMDPActif &&
          this.stockageMDPActive &&
          this.avecStockageMDP === true &&
          aActif === false
        ) {
          this.avecStockageMDP = false;
          this.reset();
          this.viderStockageMDP();
        } else if (this.stockageMDPActif && this.stockageMDPActive) {
          this.avecStockageMDP = aActif;
        }
      }
      setTokenSAV(aToken) {
        let lMsg = forge.random.generate(
          Math.max(2, Math.floor(Math.random() * 100) % 10),
        );
        let lTotal = 0;
        for (let i = 0; i < lMsg.length; i++) {
          lTotal += lMsg.charCodeAt(i);
        }
        if (lTotal % 255 !== 0) {
          lMsg += String.fromCharCode(255 - (lTotal % 255));
        }
        this.tokenSAV = aToken;
        this.stockageMDPActive = false;
        this.demandeConnexionAuto = false;
        this.enConnexionAuto = false;
        this.demandeConnexionAppliMobile = false;
        this.demandeConnexionAppliMobileJeton = false;
        this.enConnexionAppliMobile = false;
        this.modeValidationAppliMobile = false;
        this.loginTokenSAV = ObjetCryptage_1.GCryptage.encrypter({
          genreCryptage: Enumere_Cryptage_1.EGenreCryptage.AES,
          chaine: lMsg,
          cle: ObjetCryptage_1.GCryptage.getBuffer(this.tokenSAV),
          iv: this.getObjetCommunication().getIvAES(),
        });
      }
      viderStockageMDP() {
        LocalStorage_1.IELocalStorage.removeItem(
          this.const.Cookie_Identification,
        );
        LocalStorage_1.IELocalStorage.removeItem(
          this.const.Cookie_Authentification,
        );
        LocalStorage_1.IELocalStorage.removeItem(this.const.Cookie_Espace);
        LocalStorage_1.IELocalStorage.removeItem(this.const.Cookie_estCAS);
      }
      getObjetCommunication() {
        return this.application.getCommunication();
      }
      getNouveauChallenge(aChallenge) {
        const lChallenge = ObjetCryptage_1.GCryptage.decrypter({
          genreCryptage: Enumere_Cryptage_1.EGenreCryptage.AES,
          chaine: aChallenge,
          cle: ObjetCryptage_1.GCryptage.getBuffer(this.getCle()),
          iv: this.getObjetCommunication().getIvAES(),
          avecAlea: true,
        });
        return ObjetCryptage_1.GCryptage.encrypter({
          genreCryptage: Enumere_Cryptage_1.EGenreCryptage.AES,
          chaine: lChallenge,
          cle: ObjetCryptage_1.GCryptage.getBuffer(this.getCle()),
          iv: this.getObjetCommunication().getIvAES(),
        });
      }
      validationLoginMdp() {
        this.demandeConnexionAuto =
          !this.modeValidationAppliMobile &&
          !this.estAppliMobile &&
          !this.aMotDePasseStocke() &&
          this.avecStockageMDP;
        this.enConnexionAuto =
          !this.modeValidationAppliMobile &&
          !this.estAppliMobile &&
          this.aMotDePasseStocke() &&
          this.avecStockageMDP;
        this.demandeConnexionAppliMobile = this.modeValidationAppliMobile;
        this.demandeConnexionAppliMobileJeton =
          this.modeValidationAppliMobile && this.modeValidationAppliMobileJeton;
        this.enConnexionAppliMobile = this.application.estAppliMobile;
        return !!(
          MethodesObjet_1.MethodesObjet.isFunction(this.callback) &&
          ((!!this.getLogin() &&
            !!this.getMotDePasse() &&
            (!this.estAppliMobile || !!this.uuidAppliMobile)) ||
            (this.tokenSAV && this.loginTokenSAV))
        );
      }
      async identification(aIdentificationManuelle = false) {
        this.avecControleReglesMDP = false;
        if (this.validationLoginMdp()) {
          if (this.etat === EtatMoteurConnexion.authentifie) {
            return;
          }
          this.avecControleReglesMDP = aIdentificationManuelle;
          this.etat = EtatMoteurConnexion.enIdentification;
          const lReponse = await this.requetes
            .getRequeteIdent(this)
            .lancerRequete({
              genreConnexion: this.genreConnexion,
              genreEspace: this.genreEspace,
              identifiant: this.getLogin(),
              pourENT: this.pourENT,
              enConnexionAuto: this.enConnexionAuto,
              demandeConnexionAuto: this.demandeConnexionAuto,
              enConnexionAppliMobile: this.enConnexionAppliMobile,
              demandeConnexionAppliMobile: this.demandeConnexionAppliMobile,
              demandeConnexionAppliMobileJeton:
                this.demandeConnexionAppliMobileJeton,
              uuidAppliMobile: this.uuidAppliMobile,
              loginTokenSAV: this.loginTokenSAV,
              informationsAppareil: this.informationsAppareil,
            });
          this.apresIdentification(lReponse);
        } else {
          this.etat = EtatMoteurConnexion.malInitialise;
          this.callback();
        }
      }
      apresIdentification(aParam) {
        this.etat = EtatMoteurConnexion.identifie;
        if (this.demandeConnexionAppliMobile && aParam.login) {
          this.login = new ObjetElement_1.ObjetElement(aParam.login);
        }
        this.ressourceInternet =
          aParam.utilisateur || new ObjetElement_1.ObjetElement('');
        this.login.Genre = aParam.modeCompLog || 0;
        this.motDePasse.Genre = aParam.modeCompMdp || 0;
        this.alea = aParam.alea || '';
        if (this.getMotDePasse() || (this.tokenSAV && this.loginTokenSAV)) {
          const lNouveauChallenge = this.getNouveauChallenge(aParam.challenge);
          this.authentification(lNouveauChallenge);
        }
      }
      async authentification(aNouveauChallenge) {
        this.etat = EtatMoteurConnexion.enAuthentification;
        const lReponse = await this.requetes
          .getRequeteAuth(this)
          .lancerRequete({
            genreConnexion: this.genreConnexion,
            identifiant: this.getLogin(),
            pourENT: this.pourENT,
            ressourceInternet: this.ressourceInternet,
            nomRessource: this.nomRessource,
            genreRecherche: this.genreRecherche,
            enConnexionAuto: this.enConnexionAuto,
            demandeConnexionAuto: this.demandeConnexionAuto,
            enConnexionAppliMobile: this.enConnexionAppliMobile,
            demandeConnexionAppliMobile: this.demandeConnexionAppliMobile,
            demandeConnexionAppliMobileJeton:
              this.demandeConnexionAppliMobileJeton,
            uuidAppliMobile: this.uuidAppliMobile,
            loginTokenSAV: this.loginTokenSAV,
            challenge: aNouveauChallenge,
          });
        this.apresAuthentification(lReponse);
      }
      apresAuthentification(aParam) {
        var _a, _b, _c;
        if (MethodesObjet_1.MethodesObjet.isNumeric(aParam.Acces)) {
          this.etat = EtatMoteurConnexion.erreur;
          this.setMessageErreur(aParam.Acces, aParam.AccesMessage);
          if (window && window.opener && this.tokenSAV) {
            window.removeEventListener(
              'message',
              this.messageTokenSAV.bind(this),
              false,
            );
            window.opener.postMessage(
              JSON.stringify({ result: aParam.Acces, erreur: this.erreur }),
              '*',
            );
          }
          if (window.messageData) {
            window.messageData.push({
              action: 'erreurAuth',
              message: this.erreur.erreurMessage,
            });
          } else if (
            (_c =
              (_b =
                (_a =
                  window === null || window === void 0
                    ? void 0
                    : window.webkit) === null || _a === void 0
                  ? void 0
                  : _a.messageHandlers) === null || _b === void 0
                ? void 0
                : _b.cordova_iab) === null || _c === void 0
              ? void 0
              : _c.postMessage
          ) {
            window.webkit.messageHandlers.cordova_iab.postMessage(
              JSON.stringify({
                action: 'erreurAuthAjout',
                message: this.erreur.erreurMessage,
              }),
            );
          }
          this.callback(aParam);
        } else if (aParam.cle) {
          if (aParam.codePINFixe) {
            GEtatUtilisateur.setCodePINFixe(aParam.codePINFixe);
          }
          GEtatUtilisateur.setReglesSaisieMotDePasse(aParam);
          const lObjCommunication = this.getObjetCommunication();
          lObjCommunication.setCleAES(
            ObjetCryptage_1.GCryptage.decrypter({
              genreCryptage: Enumere_Cryptage_1.EGenreCryptage.AES,
              chaine: aParam.cle,
              cle: ObjetCryptage_1.GCryptage.getBuffer(this.getCle()),
              iv: lObjCommunication.getIvAES(),
              enBytes: true,
            }),
          );
          this._apresAuthentificationReussie(aParam);
        } else {
          this.etat = EtatMoteurConnexion.nonAuthentifie;
          if (window && window.opener && this.tokenSAV) {
            window.removeEventListener(
              'message',
              this.messageTokenSAV.bind(this),
              false,
            );
            window.opener.postMessage(JSON.stringify({ result: -1 }), '*');
          }
          this.callback(aParam);
        }
      }
      setMessageErreur(AGenreErreur, aMessage) {
        this.erreur = { erreurTitre: null, erreurMessage: null };
        this.erreurCode = AGenreErreur;
        switch (AGenreErreur) {
          case Enumere_ErreurAcces_1.EGenreErreurAcces.Identification:
            this.erreur = {
              erreurMessage: 'Votre identifiant ou votre mot de passe est incorrect.\nPour information, la saisie du mot de passe doit respecter les minuscules et majuscules.',
              avecCallback: true,
            };
            break;
          case Enumere_ErreurAcces_1.EGenreErreurAcces.Autorisation:
            this.erreur = {
              erreurMessage: 'Vous n'avez pas accès à l'#1.\nContactez l'établissement afin qu'il mette à jour votre profil d'autorisations.'],
              ),
              erreurTitre: 'Accès refusé',
            };
            break;
          case Enumere_ErreurAcces_1.EGenreErreurAcces.ConnexionClasse:
            this.erreur = {
              erreurMessage: 'Vous n'avez pas les autorisations nécessaires pour accéder aux affichages liés au mode de connexion 'Dans la classe'.',
            };
            break;
          case Enumere_ErreurAcces_1.EGenreErreurAcces.AucuneRessource:
            this.erreur = {
              erreurMessage: 'Vous n'avez pas accès à l'#1.\nContactez l'établissement afin qu'il mette à jour votre fiche de renseignements.'],
              ),
              erreurTitre: 'Accès refusé',
            };
            break;
          case Enumere_ErreurAcces_1.EGenreErreurAcces.Connexion:
            this.erreur = {
              erreurMessage: 'Vous n'avez pas les autorisations nécessaires pour accéder aux affichages',
            };
            break;
          case Enumere_ErreurAcces_1.EGenreErreurAcces.BloqueeEleve:
            this.erreur = {
              erreurMessage: 'Suite à votre départ de l'établissement, votre connexion à l'Espace élèves a été bloquée.',
            };
            break;
          case Enumere_ErreurAcces_1.EGenreErreurAcces.FonctionAccompagnant:
            this.erreur = {
              erreurMessage: 'Vous n'avez pas accès à l'#1.\nContactez l'établissement afin qu'il mette à jour votre fonction.'],
              ),
            };
            break;
          case Enumere_ErreurAcces_1.EGenreErreurAcces.AccompagnantAucunEleve:
            this.erreur = {
              erreurMessage: 'Vous n'avez pas accès à l'#1.\nContactez l'établissement afin qu'il vous affecte les élèves que vous accompagnez.'],
              ),
            };
            break;
          case Enumere_ErreurAcces_1.EGenreErreurAcces.CompteDesactive:
            this.erreur = {
              erreurMessage: 'Vous n'avez pas accès à l'%s.\nVotre compte a été désactivé.'],
              ),
            };
            break;
          case Enumere_ErreurAcces_1.EGenreErreurAcces.Message:
            this.erreur = {
              erreurMessage: aMessage ? aMessage.message || '' : '',
              erreurTitre: aMessage ? aMessage.titre || '' : '',
            };
            break;
          default:
            break;
        }
      }
      _authentificationTokenSAV() {
        this.setTokenSAV(this.tokenSAV);
        this.identification();
      }
      messageTokenSAV(aEvent) {
        if (aEvent && aEvent.data) {
          const lData = JSON.parse(aEvent.data);
          if (lData && lData.tokenSAV) {
            this.tokenSAV = lData.tokenSAV;
            this._authentificationTokenSAV();
          }
        }
      }
      _avecSecurisationDoubleAuth(aParam) {
        return (
          aParam &&
          aParam.actionsDoubleAuth &&
          aParam.actionsDoubleAuth.contains &&
          (aParam.actionsDoubleAuth.contains(
            TypeSecurisationCompte_1.TypeActionIHMSecurisationCompte
              .AIHMSC_ChoixStrategie,
          ) ||
            aParam.actionsDoubleAuth.contains(
              TypeSecurisationCompte_1.TypeActionIHMSecurisationCompte
                .AIHMSC_SaisieCodePINetSource,
            ) ||
            aParam.actionsDoubleAuth.contains(
              TypeSecurisationCompte_1.TypeActionIHMSecurisationCompte
                .AIHMSC_SaisieSourcePourNotifSeulement,
            ))
        );
      }
      _avecPersonnalisationMDP(aParam) {
        return (
          aParam &&
          aParam.actionsDoubleAuth &&
          aParam.actionsDoubleAuth.contains &&
          aParam.actionsDoubleAuth.contains(
            TypeSecurisationCompte_1.TypeActionIHMSecurisationCompte
              .AIHMSC_PersonnalisationMotDePasse,
          )
        );
      }
      _requeteSecurisationCompteEnregistrementPromise(aParams) {
        const lParams = Object.assign(
          {
            action:
              TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
                .csch_EnregistrerChoixUtilisateur,
          },
          aParams.valeursSecurisationCompte,
        );
        return new ObjetRequeteSecurisationCompte_1.ObjetRequeteSecurisationCompteDoubleAuth(
          this,
        )
          .lancerRequete(lParams)
          .catch((aReponse) => {
            return Promise.resolve()
              .then(() => {
                if (aReponse && aReponse.promiseMessage) {
                  return aReponse.promiseMessage;
                }
              })
              .then(() => {
                return Promise.reject();
              });
          });
      }
      _securisationComptePromise(aParam) {
        this.securisationCompte.callbackInitSecurisationCompte();
        aParam.valeursSecurisationCompte = {};
        return Promise.resolve()
          .then(() => {
            if (this._avecPersonnalisationMDP(aParam)) {
              this.avecControleReglesMDP = false;
              return this.securisationCompte
                .callbackPersonnalisationMDPPromise(aParam)
                .then((aResult) => {
                  if (aResult.reussite && aResult.paramForcerMDP) {
                    if (aResult.paramForcerMDP.nouveauMDP) {
                      aParam.valeursSecurisationCompte.nouveauMDP =
                        aResult.paramForcerMDP.nouveauMDP;
                    }
                    Object.assign(aParam, aResult.paramForcerMDP);
                  } else {
                    return Promise.reject();
                  }
                });
            }
          })
          .then(() => {
            if (this._avecSecurisationDoubleAuth(aParam)) {
              return this.securisationCompte
                .callbackSecurisationDoubleAuthPromise(aParam)
                .then((aResult) => {
                  if (aResult && aResult.suivant && aResult.donnees) {
                    Object.assign(
                      aParam.valeursSecurisationCompte,
                      aResult.donnees,
                    );
                  } else {
                    return Promise.reject();
                  }
                });
            }
          })
          .then(() => {
            if (
              this._avecSecurisationDoubleAuth(aParam) ||
              this._avecPersonnalisationMDP(aParam) ||
              aParam.changementStrategieImpose
            ) {
              return this._requeteSecurisationCompteEnregistrementPromise(
                aParam,
              );
            }
          });
      }
      _apresAuthentificationReussie(aParam) {
        if (aParam.login) {
          this.login.Libelle = aParam.login;
        }
        const lJetonConnexionAppliMobile = aParam.jetonConnexionAppliMobile;
        const lJetonConnexionAuto = aParam.jetonConnexionAuto;
        if (lJetonConnexionAuto) {
          LocalStorage_1.IELocalStorage.setItem(
            this.const.Cookie_Authentification,
            lJetonConnexionAuto,
          );
          LocalStorage_1.IELocalStorage.setItem(
            this.const.Cookie_Identification,
            this.getLogin(),
          );
          LocalStorage_1.IELocalStorage.setItem(
            this.const.Cookie_Espace,
            this.genreEspace !== undefined && this.genreEspace !== null
              ? this.genreEspace.toString()
              : '',
          );
        }
        if (window && window.opener && this.tokenSAV) {
          window.removeEventListener(
            'message',
            this.messageTokenSAV.bind(this),
            false,
          );
          window.opener.postMessage(JSON.stringify({ result: 0 }), '*');
        }
        if (
          this.modeValidationAppliMobile ||
          document.cookie.indexOf('validationAppliMobile=') > -1
        ) {
          window.loginState = {
            status: 0,
            libelle: aParam.libelleUtil,
            login: this.getLogin(true),
            mdp: lJetonConnexionAppliMobile,
          };
          if (document.cookie.indexOf('validationAppliMobile=') > -1) {
            document.cookie =
              'validationAppliMobile=;expires=' + new Date(0).toUTCString();
            document.cookie =
              'appliMobile=1;expires=' +
              new Date(
                new Date().getTime() + 365 * 24 * 60 * 60 * 1000,
              ).toUTCString();
          }
          return;
        }
        if (this.application.estAppliMobile) {
          window.messageData.push({
            action: 'surAuth',
            data: lJetonConnexionAppliMobile,
          });
        }
        Promise.resolve()
          .then(() => {
            if (aParam.actionsDoubleAuth) {
              return this._securisationComptePromise(aParam);
            }
          })
          .then(
            () => {
              this._authentifieTotalement(aParam);
            },
            (aArg) => {
              if (aArg) {
              }
              UtilitaireDeconnexion_1.UtilitaireDeconnexion.deconnexion().then(
                () => {
                  window.location.reload();
                },
              );
            },
          );
      }
      _authentifieTotalement(aParam) {
        var _a;
        this.etat = EtatMoteurConnexion.authentifie;
        if (this.avecControleReglesMDP && !this.pourENT && !this.tokenSAV) {
          const lEtatUtil = this.application.getEtatUtilisateur();
          if (
            lEtatUtil.reglesSaisieMotDePasse &&
            lEtatUtil.reglesSaisieMotDePasse.init
          ) {
            if (
              !ValidationMotDePasse_1.ValidationMotDePasse.leMotDePasseRespecteReglesSecurite(
                (_a = this.getMotDePasseBrut()) === null || _a === void 0
                  ? void 0
                  : _a.trim(),
                lEtatUtil.reglesSaisieMotDePasse,
              )
            ) {
              aParam.motDePasseInvalide = true;
            }
          } else {
          }
        }
        this.callback(aParam);
      }
    }
    exports.ObjetMoteurConnexion = ObjetMoteurConnexion;
    (function (ObjetMoteurConnexion) {
      class ObjetRequeteIdentificationCP extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
      ObjetMoteurConnexion.ObjetRequeteIdentificationCP =
        ObjetRequeteIdentificationCP;
      class ObjetRequeteAuthentificationCP extends ObjetRequeteJSON_1.ObjetRequeteConsultation {}
      ObjetMoteurConnexion.ObjetRequeteAuthentificationCP =
        ObjetRequeteAuthentificationCP;
    })(
      ObjetMoteurConnexion ||
        (exports.ObjetMoteurConnexion = ObjetMoteurConnexion = {}),
    );
  },
  fn: 'objetmoteurconnexion.js',
});