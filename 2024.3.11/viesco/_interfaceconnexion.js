IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports._InterfaceConnexion = void 0;
    const ObjetChaine_1 = require('ObjetChaine');
    const Enumere_StructureAffichage_1 = require('Enumere_StructureAffichage');
    const ObjetInterface_1 = require('ObjetInterface');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetMoteurConnexion_1 = require('ObjetMoteurConnexion');
    const GUID_1 = require('GUID');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const ToucheClavier_1 = require('ToucheClavier');
    const Enumere_ErreurAcces_1 = require('Enumere_ErreurAcces');
    const UtilitaireRedirection_1 = require('UtilitaireRedirection');
    class _InterfaceConnexion extends ObjetInterface_1.ObjetInterface {
      constructor(...aParams) {
        super(...aParams);
        this.applicationProduit = GApplication;
        this.moteurConnexion = null;
        this.avecErreurSurClickConnecterPrecedent = false;
        this.id = {
          bandeau: GUID_1.GUID.getId(),
          btnConnexion: GUID_1.GUID.getId(),
          checkBox: GUID_1.GUID.getId(),
          choixLangue: GUID_1.GUID.getId(),
          connect: GUID_1.GUID.getId(),
          inscription: GUID_1.GUID.getId(),
          image: GUID_1.GUID.getId(),
          imageSuite: GUID_1.GUID.getId(),
          thisNom: this.Nom,
          msgErreur: GUID_1.GUID.getId(),
          wrapper: GUID_1.GUID.getId(),
          wrapperConnect: GUID_1.GUID.getId(),
          nameRadio: GUID_1.GUID.getId(),
          identification: GUID_1.GUID.getId(),
          motDePasse: GUID_1.GUID.getId(),
          checkSouvenir: GUID_1.GUID.getId(),
          pageConnexionAuto: GUID_1.GUID.getId(),
          waiIdentifiant: GUID_1.GUID.getId(),
          waiMotDePasse: GUID_1.GUID.getId(),
          waiRecupIdMdp: GUID_1.GUID.getId(),
        };
        this.options = {
          avecAnimation: true,
          genreImageConnexion: 0,
          urlImageConnexion: '',
          avecChoixConnexion: false,
          avecRetourEspace: false,
          stockageMDPActive: false,
          avecRecupIdMdp: false,
          pourInscription: false,
          requetes: { identification: '', authentification: '' },
        };
      }
      setParametresGeneraux() {
        this.GenreStructure =
          Enumere_StructureAffichage_1.EStructureAffichage.Autre;
      }
      setOptions(aOptions) {
        Object.assign(this.options, aOptions);
        if (
          window.location.search.search('redirect=1') > 0 &&
          GParametres.URLEspace
        ) {
          this.options.avecRetourEspace = true;
        } else {
          this.options.avecRetourEspace = false;
        }
        return this;
      }
      construireStructureAffichageAutre() {
        if (this.estConnexionSansInterface()) {
          return (
            '<div class="GrandEspaceHaut GrandEspaceGauche Gras" id="' +
            this.id.pageConnexionAuto +
            '">' +
            'Connexion à PRONOTE.net - Veuillez patienter...' +
            '</div>'
          );
        } else {
          return this.construirePage();
        }
      }
      recupererDonnees() {
        this.moteurConnexion =
          new ObjetMoteurConnexion_1.ObjetMoteurConnexion();
        this.moteurConnexion.init({
          callback: this.callbackMoteur.bind(this),
          requetes: {
            identification: this.options.requetes.identification,
            authentification: this.options.requetes.authentification,
          },
          stockageMDPActive: this.options.stockageMDPActive,
        });
        if (this.callbackInitSecurisationCompte) {
          this.moteurConnexion.setSecurisationCompte({
            callbackInitSecurisationCompte:
              this.callbackInitSecurisationCompte.bind(this),
            callbackPersonnalisationMDPPromise:
              this.callbackPersonnalisationMDPPromise.bind(this),
            callbackSecurisationDoubleAuthPromise:
              this.callbackSecurisationDoubleAuthPromise.bind(this),
          });
        }
        if (GApplication.getDemo()) {
          this.moteurConnexion.setLogin(
            ObjetTraduction_1.GTraductions.getValeur('Demo.Identifiant'),
          );
          this.moteurConnexion.setMotDePasse(
            ObjetTraduction_1.GTraductions.getValeur('Demo.MotDePasse'),
          );
          $('#' + this.id.identification).attr('readonly', 'true');
          $('#' + this.id.motDePasse).attr('readonly', 'true');
          this.preremplir();
        } else {
          if (!GNavigateur.isIpad) {
            $('#' + this.id.identification).focus();
          }
        }
        if (window.hookAccesDepuisAppli) {
          window.hookAccesDepuisAppli.call(this);
        } else if (this.applicationProduit.smartAppBanner) {
          this.applicationProduit.smartAppBanner.show();
        }
      }
      free() {
        super.free();
      }
      callbackMoteur(aParams) {
        switch (this.moteurConnexion.etat) {
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.aucun:
            break;
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.malInitialise:
            break;
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.autoInitialise:
            this.preremplir();
            break;
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.enIdentification:
            break;
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.identifie:
            break;
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.nonIdentifie:
            break;
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.enAuthentification:
            break;
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.authentifie:
            this._reussiteAuthentification(aParams);
            break;
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.nonAuthentifie:
            break;
          case ObjetMoteurConnexion_1.EtatMoteurConnexion.erreur: {
            let lAction;
            if (
              this.moteurConnexion.erreurCode ===
              Enumere_ErreurAcces_1.EGenreErreurAcces.Identification
            ) {
              lAction = () => {
                this.moteurConnexion.setMotDePasse('');
                this.moteurConnexion.setStockageMdp(false);
              };
            } else {
              lAction = () => {
                this.moteurConnexion.setLogin('');
                this.moteurConnexion.setMotDePasse('');
                this.moteurConnexion.setStockageMdp(false);
              };
            }
            this.avecErreurSurClickConnecterPrecedent = true;
            this.signalerErreur(this.moteurConnexion.erreur.erreurMessage);
            this.$refresh();
            GApplication.getMessage().afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              titre: this.moteurConnexion.erreur.erreurTitre,
              message: this.moteurConnexion.erreur.erreurMessage,
              callback: lAction,
            });
            this._echecAuthentification(aParams);
            break;
          }
          default:
            break;
        }
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getModel: {
            event(aMessage) {
              let lMessage = '';
              switch (aMessage) {
                case 'texteExplicatifModeConnexion':
                  lMessage =
                    '<strong>' +
                    'Choisissez le mode de connexion.' +
                    '</strong><br />' +
                    'En mode "Dans la classe" vous n\'aurez accès qu\'à la saisie des absences et du cahier de textes, pour plus de confidentialité.';
                  break;
                case 'texteExplicatifRecupIdMdp':
                  lMessage = ObjetTraduction_1.GTraductions.getValeur(
                    'connexion.RecuperationMDP.titre',
                  );
                  break;
                default:
                  break;
              }
              if (lMessage) {
                GApplication.getMessage().afficher({ message: lMessage });
              }
            },
            getTitle() {
              return 'Informations';
            },
          },
          choixConnexion: {
            getValue: function (aMode) {
              return aInstance.moteurConnexion
                ? aMode === aInstance.moteurConnexion.genreConnexion
                : false;
            },
            setValue: function (aValue) {
              if (!!aInstance.moteurConnexion) {
                aInstance.moteurConnexion.setGenreConnexion(aValue);
              }
            },
          },
          login: {
            getValue: function () {
              return !!aInstance.moteurConnexion
                ? aInstance.moteurConnexion.getLogin(true)
                : '';
            },
            setValue: function (aValue) {
              if (!!aInstance.moteurConnexion) {
                aInstance.moteurConnexion.setLogin(aValue);
              }
            },
          },
          getAttrLogin() {
            var _a, _b;
            return {
              'aria-invalid':
                aInstance.avecErreurSurClickConnecterPrecedent &&
                !(
                  ((_b =
                    (_a = aInstance.moteurConnexion) === null || _a === void 0
                      ? void 0
                      : _a.getLogin(true)) === null || _b === void 0
                    ? void 0
                    : _b.length) > 0
                ),
            };
          },
          motDePasse: {
            getValue: function () {
              return !!aInstance.moteurConnexion
                ? aInstance.moteurConnexion.getMotDePasse(true)
                : '';
            },
            setValue: function (aValue) {
              if (!!aInstance.moteurConnexion) {
                aInstance.moteurConnexion.setMotDePasse(aValue);
              }
            },
            interrompreEvent: function (aEvent) {
              if (
                aEvent.type === 'keyup' &&
                aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot
              ) {
                if (
                  !!aInstance.moteurConnexion &&
                  !aInstance.applicationProduit
                    .getCommunication()
                    .requeteEnCours()
                ) {
                  aInstance.moteurConnexion.identification(true);
                }
                return true;
              }
            },
          },
          getAttrMDP() {
            var _a, _b;
            return {
              'aria-invalid':
                aInstance.avecErreurSurClickConnecterPrecedent &&
                !(
                  ((_b =
                    (_a = aInstance.moteurConnexion) === null || _a === void 0
                      ? void 0
                      : _a.getMotDePasse(true)) === null || _b === void 0
                    ? void 0
                    : _b.length) > 0
                ),
            };
          },
          montrerMasquerMotDePasse: {
            event: function () {
              let lTrigger = $('.as-input.as-password').find('.btnImage');
              let lTarget = $('.as-input.as-password').find('input');
              lTrigger.toggleClass('icon_eye_close icon_eye_open');
              lTarget.attr('type') === 'password'
                ? lTarget.attr('type', 'text')
                : lTarget.attr('type', 'password');
            },
            getTitle: function () {
              return $('.as-input.as-password')
                .find('.btnImage')
                .hasClass('icon_eye_open')
                ? 'Voir le mot de passe'
                : 'Masquer le mot de passe';
            },
          },
          stockageMDP: {
            getValue: function () {
              return !!aInstance.moteurConnexion
                ? aInstance.moteurConnexion.avecStockageMDP
                : false;
            },
            setValue: function (aValue) {
              if (!!aInstance.moteurConnexion) {
                aInstance.moteurConnexion.setStockageMdp(aValue);
              }
            },
          },
          boutonRedirigerParent: {
            getDisabled: function () {
              return false;
            },
            event: function () {
              if (
                GParametres &&
                GParametres.infosInscription &&
                GParametres.infosInscription.espace &&
                GParametres.infosInscription.espace.url
              ) {
                const lUrl = window.location.href.split('/');
                lUrl.pop();
                lUrl.push(GParametres.infosInscription.espace.url);
                window.location.href = lUrl.join('/');
              }
            },
          },
          boutonCreation: {
            getDisabled: function () {
              return false;
            },
            event: function () {
              aInstance.eventCreation();
            },
          },
          btnConnexionInscription: {
            getDisabled: function () {
              return false;
            },
            event: function () {
              aInstance.options.pourInscription = false;
            },
          },
          boutonValidation: {
            getDisabled: function () {
              return (
                !aInstance.moteurConnexion ||
                !aInstance.moteurConnexion.getLogin() ||
                !aInstance.moteurConnexion.getMotDePasse()
              );
            },
            event: function () {
              if (
                !!aInstance.moteurConnexion &&
                !aInstance.applicationProduit
                  .getCommunication()
                  .requeteEnCours()
              ) {
                aInstance.moteurConnexion.identification(true);
              }
            },
          },
          boutonRecupMDP: {
            event: function () {
              if (
                !!aInstance.moteurConnexion &&
                !aInstance.applicationProduit
                  .getCommunication()
                  .requeteEnCours()
              ) {
                aInstance.evenementRecupIdMDP();
              }
            },
          },
          choixLangue: function () {
            return aInstance.options.utilitaireChangementLangue.construire(
              aInstance.controleur,
            );
          },
          visibiliteChangementLangue: function () {
            return aInstance.options.utilitaireChangementLangue.avecChoixLangues();
          },
          visibiliteModeConnexion: function () {
            return aInstance.options.avecChoixConnexion;
          },
          visibiliteRecupIdMdp: function () {
            return aInstance.options.avecRecupIdMdp;
          },
          visibiliteConnexion: function () {
            return !aInstance.options.pourInscription;
          },
          visibiliteInscription: function () {
            return aInstance.options.pourInscription;
          },
          visibiliteRedirigerParent: function () {
            return (
              aInstance.options.pourInscription &&
              GParametres &&
              GParametres.infosInscription &&
              GParametres.infosInscription.espace
            );
          },
          visibiliteRetourEspace: function () {
            return aInstance.options.avecRetourEspace;
          },
        });
      }
      eventCreation() {}
      evenementRecupIdMDP() {}
      retourEspaceBureau() {
        window.location.assign(
          GParametres.URLEspace +
            new UtilitaireRedirection_1.UtilitaireRedirection().getParametresUrl(
              {
                parametres: [{ parametre: 'fd', valeur: '1' }],
                parametresASupprimer: ['redirect'],
              },
            ),
        );
      }
      signalerErreur(aMessageErreur) {
        $('#' + this.id.msgErreur).html(
          ObjetChaine_1.GChaine.replaceRCToHTML(aMessageErreur),
        );
        $('#' + this.id.msgErreur).attr('aria-hidden', 'false');
        $('#' + this.id.msgErreur).show();
      }
      preremplir() {}
      traiterEvenementValidation(
        aLogin,
        aMotDePasse,
        aPourENT,
        aUuidAppliMobile,
      ) {
        this.moteurConnexion.genreEspace = GEtatUtilisateur.GenreEspace;
        if (!!aLogin) {
          this.moteurConnexion.login.Libelle = aLogin;
        }
        if (!!aMotDePasse) {
          this.moteurConnexion.motDePasse.Libelle = aMotDePasse;
        }
        this.moteurConnexion.pourENT = aPourENT ? aPourENT : false;
        this.moteurConnexion.avecStockageMDP = false;
        this.moteurConnexion.uuidAppliMobile =
          this.uuidAppliMobile || aUuidAppliMobile;
        this.moteurConnexion.identification();
      }
      estConnexionSansInterface() {
        return (
          this.applicationProduit.acces &&
          (this.applicationProduit.acces.estConnexionCAS() ||
            this.applicationProduit.acces.estConnexionCookie())
        );
      }
      _echecAuthentification(aParams) {}
    }
    exports._InterfaceConnexion = _InterfaceConnexion;
  },
  fn: '_interfaceconnexion.js',
});