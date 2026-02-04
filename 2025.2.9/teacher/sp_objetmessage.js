IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetMessage = void 0;
    const ObjetChaine_1 = require('ObjetChaine');
    const Enumere_Action_1 = require('Enumere_Action');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const MethodesObjet_1 = require('MethodesObjet');
    const Invocateur_1 = require('Invocateur');
    const GestionnaireModale_1 = require('GestionnaireModale');
    const ObjetJSON_1 = require('ObjetJSON');
    const ObjetMessage_module_css_1 = require('ObjetMessage.module.css');
    const AccessApp_1 = require('AccessApp');
    class ObjetMessage {
      constructor() {
        this.EnAffichage = false;
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.erreurCommunication,
          () => {
            this.fermer(Enumere_Action_1.EGenreAction.Annuler);
          },
        );
      }
      async afficher(aParametres) {
        if (this.EnAffichage) {
          if (!this._pileMessage) {
            this._pileMessage = [];
          }
          this._pileMessage.push(aParametres);
          IE.log.addLog(
            'ObjetMessage.afficher : un message est deja visible, le nouveau message est empilé : ' +
              aParametres.message,
            null,
            IE.log.genre.Avertissement,
          );
          return new Promise((aResolve) => {
            aParametres.resolvePromise = aResolve;
          });
        }
        this.Accepte = Enumere_Action_1.EGenreAction.Valider;
        this.EnAffichage = true;
        return new Promise((aResolve) => {
          const lParametres = $.extend(
            {
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              titre: '',
              message: '',
              callback: null,
              controleur: null,
              delaiFermeture: null,
              avecDecalageFocusBouton: false,
              idRessource: null,
              mrFiche: undefined,
              width: null,
              getDisabledBouton: null,
              demanderConfirmation: true,
              restaurerFocusSurFermeture: true,
              listeBoutons: null,
              resolvePromise: aResolve,
            },
            aParametres,
          );
          if (
            lParametres.type ===
              Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation &&
            lParametres.demanderConfirmation === false
          ) {
            this.Accepte = Enumere_Action_1.EGenreAction.Valider;
            this.EnAffichage = false;
            this._fermer(lParametres);
            return;
          }
          if (lParametres.idRessource || lParametres.mrFiche) {
            let lTradMrFiche = lParametres.mrFiche;
            if (!lTradMrFiche && lParametres.idRessource) {
              const lChaine = ObjetTraduction_1.GTraductions.getValeur(
                lParametres.idRessource,
              );
              if (lChaine !== '') {
                lTradMrFiche = ObjetJSON_1.ObjetJSON.parse(lChaine);
              } else {
              }
            }
            if (
              lTradMrFiche &&
              lTradMrFiche.titre &&
              lTradMrFiche.html &&
              lTradMrFiche.type >= 0
            ) {
              lParametres.type = this._typeEditeurToBoiteMessage(
                lTradMrFiche.type,
              );
              lParametres.titre = lTradMrFiche.titre;
              lParametres.message = IE.jsx.str(
                'div',
                {
                  class: ObjetMessage_module_css_1.StylesObjetMessage.mrFiche,
                  style:
                    'width:' +
                    lTradMrFiche.width +
                    'px;min-height:' +
                    lTradMrFiche.height +
                    'px;',
                },
                lTradMrFiche.html,
              );
            } else {
            }
          }
          const lDetailsMessage = this._construireMessage(lParametres);
          this.fenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
            ObjetFenetreInterneMessage,
            {
              pere: this,
              initialiser: (aInstance) => {
                if (lParametres.controleur) {
                  $.extend(true, aInstance.controleur, lParametres.controleur);
                }
                aInstance.genreActionFenetre =
                  Enumere_Action_1.EGenreAction.Annuler;
                aInstance.setOptionsFenetre({
                  modale: true,
                  roleWAI: 'alertdialog',
                  prioriteBlocageAbonnement:
                    GestionnaireModale_1.GestionnaireModale
                      .TypePrioriteBlocageInterface.message,
                  cssFenetre:
                    ObjetMessage_module_css_1.StylesObjetMessage.ObjetMessage +
                    ' ObjetMessage_' +
                    lParametres.type,
                  avecTailleSelonContenuMobile: true,
                  avecPositionnementResize: false,
                  avecCroixFermeture: false,
                  titre: lDetailsMessage.titre,
                  listeBoutons: lDetailsMessage.listeBoutons,
                  avecTailleSelonContenu: true,
                  restaurerFocusSurFermeture:
                    lParametres.restaurerFocusSurFermeture,
                  avecAriaDescribedByContenu: true,
                  surValiderAvantFermer: (aParams) => {
                    if (
                      aParams.bouton &&
                      aParams.bouton.genreAction !== undefined
                    ) {
                      aInstance.genreActionFenetre = aParams.bouton.genreAction;
                    }
                  },
                  callbackApresFermer: () => {
                    clearTimeout(this._timeoutFermeture);
                    this.EnAffichage = false;
                    delete this.fenetre;
                    this.Accepte = aInstance.genreActionFenetre;
                    this._fermer(lParametres);
                  },
                });
              },
            },
          );
          if (
            MethodesObjet_1.MethodesObjet.isFunction(
              lParametres.getDisabledBouton,
            )
          ) {
            this.fenetre.controleur.fenetreBtn.getDisabled = function (
              aBoutonRepeat,
            ) {
              return lParametres.getDisabledBouton(aBoutonRepeat.element);
            };
          }
          this.fenetre.afficher(lDetailsMessage.html.join(''));
          this.fenetre.setBoutonFocus(0, lParametres.avecDecalageFocusBouton);
          if (lParametres.delaiFermeture) {
            const lDelai =
              lParametres.delaiFermeture === true
                ? 30 * 1000
                : lParametres.delaiFermeture;
            this._timeoutFermeture = setTimeout(() => {
              if (this.fenetre) {
                this.fermer(Enumere_Action_1.EGenreAction.Valider);
              }
            }, lDelai);
          }
        }).catch((aArg) => {
          throw aArg;
        });
      }
      fermer(aGenreAction) {
        if (this.fenetre) {
          if (aGenreAction !== null && aGenreAction !== undefined) {
            this.fenetre.genreActionFenetre = aGenreAction;
          }
          this.fenetre.fermer();
        }
      }
      _construireMessage(aParametres) {
        const lResult = { titre: '', listeBoutons: [], html: [] };
        if (aParametres.titre && !aParametres.message) {
          aParametres.message = aParametres.titre;
          aParametres.titre = '';
        }
        if (aParametres.titre) {
          lResult.titre = aParametres.titre + '';
        } else {
          switch (aParametres.type) {
            case Enumere_BoiteMessage_1.EGenreBoiteMessage.Information:
            case Enumere_BoiteMessage_1.EGenreBoiteMessage.MrFiche:
              lResult.titre = 'Information';
              break;
            case Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation:
              lResult.titre = 'Confirmation';
              break;
            default:
          }
        }
        lResult.titre = IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str('i', {
            class: ObjetMessage_module_css_1.StylesObjetMessage.iconeTitre,
            'aria-hidden': 'true',
          }),
          lResult.titre,
        );
        const lFuncGetClasse = (aNode) => {
          if (aNode.scrollHeight > aNode.clientHeight) {
            return ObjetMessage_module_css_1.StylesObjetMessage.contenuScroll;
          }
          return '';
        };
        lResult.html.push(
          aParametres.idRessource || aParametres.mrFiche
            ? aParametres.message
            : IE.estMobile
              ? ObjetChaine_1.GChaine.replaceRCToHTML(aParametres.message + '')
              : IE.jsx.str(
                  'p',
                  {
                    class: ObjetMessage_module_css_1.StylesObjetMessage.contenu,
                    'ie-class': lFuncGetClasse,
                    style: { width: aParametres.width },
                  },
                  ObjetChaine_1.GChaine.replaceRCToHTML(
                    aParametres.message + '',
                  ),
                ),
        );
        if (aParametres.listeBoutons) {
          lResult.listeBoutons = aParametres.listeBoutons;
          lResult.listeBoutons.forEach((aBouton) => {
            switch (aBouton.theme) {
              case Type_ThemeBouton_1.TypeThemeBouton.neutre:
                break;
              case Type_ThemeBouton_1.TypeThemeBouton.primaire:
                aBouton.theme = Type_ThemeBouton_1.TypeThemeBouton.primaire;
                break;
              default:
                aBouton.theme = Type_ThemeBouton_1.TypeThemeBouton.secondaire;
                break;
            }
          });
        } else {
          switch (aParametres.type) {
            case Enumere_BoiteMessage_1.EGenreBoiteMessage.Information:
            case Enumere_BoiteMessage_1.EGenreBoiteMessage.MrFiche:
              lResult.listeBoutons.push({
                libelle:
                  'Fermer',
                genreAction: Enumere_Action_1.EGenreAction.Valider,
                theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
                typeMessage: aParametres.type,
              });
              break;
            case Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation:
              lResult.listeBoutons.push(
                {
                  libelle:
                    'Oui',
                  genreAction: Enumere_Action_1.EGenreAction.Valider,
                  theme: Type_ThemeBouton_1.TypeThemeBouton.primaire,
                  typeMessage: aParametres.type,
                },
                {
                  libelle:
                    'Non',
                  genreAction: Enumere_Action_1.EGenreAction.NePasValider,
                  theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
                  typeMessage: aParametres.type,
                },
              );
              break;
            default:
          }
        }
        return lResult;
      }
      _fermer(aParametres) {
        if (aParametres.callback) {
          if (
            'appel' in aParametres.callback &&
            MethodesObjet_1.MethodesObjet.isFunction(aParametres.callback.appel)
          ) {
            aParametres.callback.appel(this.Accepte);
          } else {
            aParametres.callback(this.Accepte);
          }
        }
        aParametres.resolvePromise(this.Accepte);
        if (this._pileMessage && this._pileMessage.length > 0) {
          const lApp = (0, AccessApp_1.getApp)();
          if (lApp && lApp.SESSION_FINI) {
            return;
          }
          const lParametres = this._pileMessage.pop();
          if (this._pileMessage.length === 0) {
            delete this._pileMessage;
          }
          setTimeout(() => {
            this.afficher(lParametres);
          }, 200);
        }
      }
      _typeEditeurToBoiteMessage(aGenreEditeur) {
        switch (aGenreEditeur) {
          case 2:
            return Enumere_BoiteMessage_1.EGenreBoiteMessage.Information;
          case 4:
            return Enumere_BoiteMessage_1.EGenreBoiteMessage.MrFiche;
          case 3:
            return Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation;
          default:
            return Enumere_BoiteMessage_1.EGenreBoiteMessage.Information;
        }
      }
    }
    exports.ObjetMessage = ObjetMessage;
    class ObjetFenetreInterneMessage extends ObjetFenetre_1.ObjetFenetre {}
  },
  fn: 'objetmessage.js',
});