IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports._InterfaceConnexion = void 0;
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const Enumere_StructureAffichage_1 = require('@cp/script/Enumere/Enumere_StructureAffichage');
    const ObjetInterface_1 = require('@cp/script/ObjetInterface');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetMoteurConnexion_1 = require('@cp/Produit/Script/moteur/ObjetMoteurConnexion');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const Enumere_ErreurAcces_1 = require('@cp/Produit/Script/Enumere/Enumere_ErreurAcces');
    const UtilitaireRedirection_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireRedirection');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    class _InterfaceConnexion extends ObjetInterface_1.ObjetInterface {
      constructor(...aParams) {
        super(...aParams);
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
        this.applicationCP = (0, AccessApp_1.getApp)();
        this.options = {
          avecAnimation: true,
          genreImageConnexion: 0,
          urlImageConnexion: '',
          avecChoixConnexion: false,
          avecRetourEspace: false,
          stockageMDPActive: false,
          avecRecupIdMdp: false,
          pourInscription: false,
          requetes: { getRequeteIdent: null, getRequeteAuth: null },
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
        var _a, _b;
        this.moteurConnexion =
          new ObjetMoteurConnexion_1.ObjetMoteurConnexion();
        this.moteurConnexion.init({
          callback: this.callbackMoteur.bind(this),
          requetes: {
            getRequeteIdent: this.options.requetes.getRequeteIdent,
            getRequeteAuth: this.options.requetes.getRequeteAuth,
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
        if ((0, AccessApp_1.getApp)().getDemo()) {
          this.moteurConnexion.setLogin(
            'demonstration2',
          );
          this.moteurConnexion.setMotDePasse(
            'pronotevs',
          );
          $('#' + this.id.identification).attr('readonly', 'true');
          $('#' + this.id.motDePasse).attr('readonly', 'true');
          this.preremplir();
        } else {
          if (!ObjetNavigateur_1.Navigateur.isIpad) {
            $('#' + this.id.identification).focus();
          }
        }
        if (window.hookAccesDepuisAppli) {
          window.hookAccesDepuisAppli.call(this);
        } else if (this.applicationCP.smartAppBanner) {
          this.applicationCP.smartAppBanner.show();
        }
        (_b =
          (_a = this.applicationCP) === null || _a === void 0
            ? void 0
            : _a.messageAppBanner) === null || _b === void 0
          ? void 0
          : _b.show();
        GParametres.setDocumentTitle(
          GlossaireCP_1.TradGlossaireCP.PageConnexion,
        );
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
            (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
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
      jsxModelRadioChoixConnexion(aModeConnexion) {
        return () => {
          return {
            getValue: () => {
              return this.moteurConnexion
                ? aModeConnexion === this.moteurConnexion.genreConnexion
                : false;
            },
            setValue: (aValue) => {
              if (!!this.moteurConnexion) {
                this.moteurConnexion.setGenreConnexion(aModeConnexion);
              }
            },
            getName: () => {
              return `${this.Nom}_jsxModelRadioChoixConnexion`;
            },
          };
        };
      }
      jsxModelCheckboxStockageMDP() {
        return {
          getValue: () => {
            return !!this.moteurConnexion
              ? this.moteurConnexion.avecStockageMDP
              : false;
          },
          setValue: (aValue) => {
            if (!!this.moteurConnexion) {
              this.moteurConnexion.setStockageMdp(aValue);
            }
          },
        };
      }
      jsxDisplayChangementLangue() {
        return this.options.utilitaireChangementLangue.avecChoixLangues();
      }
      jsxGetHtmlChoixLangue() {
        return this.options.utilitaireChangementLangue.construire();
      }
      jsxModeleBoutonMontrerMasquerMDP() {
        return () => {
          return {
            event: () => {
              let lTrigger = $('.as-input.as-password').find('.btnImage');
              let lTarget = $('.as-input.as-password').find('input');
              lTrigger.toggleClass('icon_eye_close icon_eye_open');
              lTarget.attr('type') === 'password'
                ? lTarget.attr('type', 'text')
                : lTarget.attr('type', 'password');
            },
            getTitle: () => {
              return $('.as-input.as-password')
                .find('.btnImage')
                .hasClass('icon_eye_open')
                ? 'Voir le mot de passe'
                : 'Masquer le mot de passe';
            },
          };
        };
      }
      jsxModelBtnTexteExplicatif(aMessage) {
        return () => {
          return {
            event: () => {
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
                  lMessage = 'Cliquez pour commencer la procédure de récupération de vos identifiant et mot de passe.';
                  break;
                default:
                  break;
              }
              if (lMessage) {
                (0, AccessApp_1.getApp)()
                  .getMessage()
                  .afficher({ message: lMessage });
              }
            },
            getTitle: () => {
              return 'Informations';
            },
          };
        };
      }
      jsxDisplayRecuperationMDP() {
        return () => {
          return this.options.avecRecupIdMdp;
        };
      }
      jsxModelBoutonRecuperationMDP() {
        return () => {
          return {
            event: () => {
              if (
                !!this.moteurConnexion &&
                !this.applicationCP.getCommunication().requeteEnCours()
              ) {
                this.evenementRecupIdMDP();
              }
            },
          };
        };
      }
      jsxModelBoutonValidation() {
        return () => {
          return {
            event: () => {
              if (
                !!this.moteurConnexion &&
                !this.applicationCP.getCommunication().requeteEnCours()
              ) {
                this.moteurConnexion.identification(true);
              }
            },
            getDisabled: () => {
              return (
                !this.moteurConnexion ||
                !this.moteurConnexion.getLogin() ||
                !this.moteurConnexion.getMotDePasse()
              );
            },
          };
        };
      }
      jsxFuncAttrLogin() {
        var _a, _b;
        return {
          'aria-invalid':
            this.avecErreurSurClickConnecterPrecedent &&
            !(
              ((_b =
                (_a = this.moteurConnexion) === null || _a === void 0
                  ? void 0
                  : _a.getLogin(true)) === null || _b === void 0
                ? void 0
                : _b.length) > 0
            ),
        };
      }
      jsxFuncAttrMDP() {
        var _a, _b;
        return {
          'aria-invalid':
            this.avecErreurSurClickConnecterPrecedent &&
            !(
              ((_b =
                (_a = this.moteurConnexion) === null || _a === void 0
                  ? void 0
                  : _a.getMotDePasse(true)) === null || _b === void 0
                ? void 0
                : _b.length) > 0
            ),
        };
      }
      jsxModelLogin() {
        return {
          getValue: () => {
            return !!this.moteurConnexion
              ? this.moteurConnexion.getLogin(true)
              : '';
          },
          setValue: (aValue) => {
            if (!!this.moteurConnexion) {
              this.moteurConnexion.setLogin(aValue);
            }
          },
        };
      }
      jsxModelMdp() {
        return {
          getValue: () => {
            return !!this.moteurConnexion
              ? this.moteurConnexion.getMotDePasse(true)
              : '';
          },
          setValue: (aValue) => {
            if (!!this.moteurConnexion) {
              this.moteurConnexion.setMotDePasse(aValue);
            }
          },
          interrompreEvent: (aEvent) => {
            if (
              aEvent.type === 'keyup' &&
              aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot
            ) {
              if (
                !!this.moteurConnexion &&
                !this.applicationCP.getCommunication().requeteEnCours()
              ) {
                this.moteurConnexion.identification(true);
              }
              return true;
            }
          },
        };
      }
      jsxIfVisibiliteModeConnexion() {
        return !!this.options.avecChoixConnexion;
      }
      jsxDisplayVisibiliteRetourEspace() {
        return !!this.options.avecRetourEspace;
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
          !!this.applicationCP.acces &&
          (this.applicationCP.acces.estConnexionCAS() ||
            this.applicationCP.acces.estConnexionCookie())
        );
      }
      _echecAuthentification(aParams) {}
    }
    exports._InterfaceConnexion = _InterfaceConnexion;
  },
  fn: '_interfaceconnexion.js',
});