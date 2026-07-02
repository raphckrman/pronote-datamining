IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MoteurMessagerie = void 0;
    const UtilitaireMessagerie_1 = require('@scolys/produit/script/utilitaire/UtilitaireMessagerie');
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const TypeOrigineCreationEtiquetteMessage_1 = require('@scolys/espace/script/enumere/TypeOrigineCreationEtiquetteMessage');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const ObjetRequeteListeMessagerie_1 = require('@scolys/produit/script/requete/ObjetRequeteListeMessagerie');
    const ObjetRequeteListeMessages_1 = require('@scolys/produit/script/requete/ObjetRequeteListeMessages');
    const ObjetRequeteSaisieMessage_1 = require('@scolys/produit/script/requete/ObjetRequeteSaisieMessage');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const Enumere_TriElement_1 = require('@cp/script/Enumere/Enumere_TriElement');
    const Enumere_EvenementObjetSaisie_1 = require('@cp/script/Enumere/Enumere_EvenementObjetSaisie');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const TypeCommandeMessagerie_1 = require('@scolys/produit/script/enumere/TypeCommandeMessagerie');
    const Enumere_MenuCtxModeMixte_1 = require('@cp/Produit/Script/Enumere/Enumere_MenuCtxModeMixte');
    const TypeGenreDiscussion_1 = require('@cp/Espace/Script/Enumeres/TypeGenreDiscussion');
    const ObjetFenetre_ListeCategoriesDiscussion_1 = require('@scolys/espace/script/ObjetFenetre_ListeCategoriesDiscussion');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const ObjetMenuCtxMixte_1 = require('@cp/Produit/Script/ObjetMenuCtxMixte');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    const IEHtml_Combo_1 = require('@cp/Espace/Script/IEHtml.Combo');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Categorie_1 = require('@cp/Produit/Script/Categorie');
    const IconeSvgIntervenants_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgIntervenants');
    const IconeSvgTrash_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTrash');
    const IconeSvgUndo_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgUndo');
    const IconeSvgPurger_messages_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPurger_messages');
    const IconeSvgSortir_reintegrer_conversation_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgSortir_reintegrer_conversation');
    const IconeSvgEye_open_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEye_open');
    const IconeSvgEye_close_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEye_close');
    const IconeSvgDiscussion_repondu_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiscussion_repondu');
    const IconeSvgCopier_liste_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCopier_liste');
    const IconeSvgEdit_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEdit');
    const IconeSvgWarning_sign_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgWarning_sign');
    const IconeSvgArchiver_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgArchiver_discussion');
    const IconeSvgTransferer_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTransferer_discussion');
    const IconeSvgClasser_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgClasser_discussion');
    const IconeSvgDiscussion_terminee_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiscussion_terminee');
    const IconeSvgAffichage_widget_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAffichage_widget');
    const UtilitaireDroitALaDeconnexion_1 = require('@scolys/produit/script/utilitaire/UtilitaireDroitALaDeconnexion');
    const UtilitaireMessagerie_css_1 = require('@scolys/produit/css/UtilitaireMessagerie.css');
    const MessageInformatif_1 = require('@cp/Produit/Script/MessageInformatif');
    const IEHtml_Bouton_css_1 = require('@cp/Produit/Css/IEHtml.Bouton.css');
    const GestionnaireStickyScroll_1 = require('@cp/Produit/Script/GestionnaireStickyScroll');
    const MessageInformatif_module_css_1 = require('@cp/Produit/Css/MessageInformatif.module.css');
    class MoteurMessagerie {
      constructor() {
        this.applicationSco = (0, AccessApp_1.getApp)();
        this.avecFenetreListeCategoriesDiscussion = [
          Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Professeur,
          Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Etablissement,
          Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimDirection,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Administrateur,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimProfesseur,
          Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Accompagnant,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimAccompagnant,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimMairie,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimMairie,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimPeriscolaire,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimPeriscolaire,
          Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Tuteur,
        ].includes(this.applicationSco.getEtatUtilisateur().GenreEspace);
        this.visibiliteMessageInformatif = {
          messagerieDesactive: true,
          messageAvertissements: true,
        };
        this.options = {
          instance: undefined,
          avecCategoriesListeEtiquettes: true,
          estChat: false,
          discussionSelectionneeUniquementVisible: false,
          estDiscussionCommune: false,
          avecFiltreNonLues: false,
          avecTiny:
            UtilitaireMessagerie_1.UtilitaireMessagerie.avecEditeurTiny(),
          callbackBrouillonAvantSaisie: undefined,
          callbackAvantSaisie: undefined,
          callbackApresSaisie: function () {},
        };
        this.donneesListeMessagerie = {};
      }
      setOptions(aOptions) {
        Object.assign(this.options, aOptions);
        return this;
      }
      async requeteListeMessagerie(aDonnees) {
        const lReponse =
          await new ObjetRequeteListeMessagerie_1.ObjetRequeteListeMessagerie(
            this.options.instance,
          ).lancerRequete(aDonnees);
        this.donneesListeMessagerie = lReponse;
        this._traiterListeEtiquette(
          this.donneesListeMessagerie.listeEtiquettes,
          this.options.avecCategoriesListeEtiquettes,
        );
        return this.donneesListeMessagerie;
      }
      async requeteMessagesVisu(aDonnees) {
        const lDonnees = Object.assign(
          { marquerCommeLu: false, nbMessagesVus: undefined },
          aDonnees,
        );
        if (!lDonnees.message) {
          return Promise.reject();
        }
        const lReponse =
          await new ObjetRequeteListeMessages_1.ObjetRequeteListeMessages(
            this.options.instance,
          ).lancerRequete(lDonnees);
        if (lReponse.listeBoutons) {
          lReponse.listeBoutons
            .setTri([
              ObjetTri_1.ObjetTri.init(
                'Genre',
                Enumere_TriElement_1.EGenreTriElement.Decroissant,
              ),
            ])
            .trier();
        }
        return lReponse;
      }
      requeteSaisieMessage(
        aMessage,
        aAvecSauvegardeBrouillon,
        aParamsCallbackApresSaisie,
      ) {
        if (!this.options.instance) {
          return Promise.reject();
        }
        return Promise.resolve()
          .then(() => {
            if (
              aAvecSauvegardeBrouillon &&
              this.options.callbackBrouillonAvantSaisie
            ) {
              return this.options.callbackBrouillonAvantSaisie(
                aAvecSauvegardeBrouillon,
              );
            }
          })
          .then(() => {
            if (aMessage) {
              return this._controleUtilisateurDansDestinataires(aMessage)
                .then(() => {
                  let lListeFichiers =
                    aMessage.listeFichiers ||
                    new ObjetListeElements_1.ObjetListeElements();
                  if (
                    !lListeFichiers &&
                    aMessage.brouillon &&
                    aMessage.brouillon.listeFichiers
                  ) {
                    lListeFichiers = aMessage.brouillon.listeFichiers;
                  }
                  aMessage.avecHtml =
                    UtilitaireMessagerie_1.UtilitaireMessagerie.avecEditionHtmlMessage();
                  if (
                    aMessage.avecHtml &&
                    aMessage.contenu &&
                    !IE.estMobile &&
                    !this.options.avecTiny
                  ) {
                    aMessage.contenu = ObjetChaine_1.GChaine.replaceRCToHTML(
                      aMessage.contenu,
                    );
                  }
                  if (this.options.callbackAvantSaisie) {
                    this.options.callbackAvantSaisie();
                  }
                  return new ObjetRequeteSaisieMessage_1.ObjetRequeteSaisieMessage(
                    this.options.instance,
                  )
                    .addUpload({
                      listeFichiers: lListeFichiers,
                      listeDJCloud: lListeFichiers,
                    })
                    .lancerRequete(aMessage)
                    .then((aResultSaisie) => {
                      if (aParamsCallbackApresSaisie || aResultSaisie) {
                        return this.options.callbackApresSaisie({
                          paramsCallbackApresSaisie: aParamsCallbackApresSaisie,
                          resultSaisie: aResultSaisie,
                        });
                      }
                    })
                    .then(() => {
                      return { saisieMessageOK: true };
                    });
                })
                .catch(() => {});
            } else {
              return Promise.reject();
            }
          });
      }
      saisieViderCorbeille(aNbMessages) {
        this.applicationSco
          .getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: 'Êtes-vous sûr de vouloir supprimer définitivement ces %d messages ?',
          })
          .then((aGenreAction) => {
            if (aGenreAction === Enumere_Action_1.EGenreAction.Valider) {
              return this.requeteSaisieMessage(
                { commande: 'viderCorbeille' },
                true,
                MoteurMessagerie.TypeApresSaisieMessage.vider,
              );
            }
          });
      }
      saisieBrouillon(aBrouillon, aMessagePourReponse) {
        return this.requeteSaisieMessage({
          commande: 'brouillon',
          brouillon: aBrouillon,
          messagePourReponse: aMessagePourReponse,
          objet: aBrouillon.objet,
          contenu: aBrouillon.contenu,
          listeDestinataires: aBrouillon.listeDestinataires,
          listeFichiers: aBrouillon.listeFichiers,
        });
      }
      supprimerBrouillonConfirmationPromise(aBrouillon) {
        const lMessage = MethodesObjet_1.MethodesObjet.dupliquer(aBrouillon);
        lMessage.listePossessionsMessages =
          new ObjetListeElements_1.ObjetListeElements();
        lMessage.listePossessionsMessages.addElement(
          MethodesObjet_1.MethodesObjet.dupliquer(aBrouillon),
        );
        return this.applicationSco
          .getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: 'Voulez-vous supprimer définitivement le brouillon et vider la saisie ?',
          })
          .then((aAccepte) => {
            if (aAccepte === Enumere_Action_1.EGenreAction.Valider) {
              return this.requeteSaisieMessage({
                commande: 'suppression',
                message: lMessage,
              });
            }
          });
      }
      sauvegarderCreationBrouillon(aMessage) {
        if (
          this.avecSauvegardeBrouillonAutorise() &&
          this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionAvancee,
          ) &&
          ((aMessage.listeDestinataires &&
            aMessage.listeDestinataires.count() > 0) ||
            aMessage.contenu ||
            (!aMessage.listeMessagesTransfert && aMessage.objet) ||
            (aMessage.listeFichiers && aMessage.listeFichiers.count() > 0))
        ) {
          return this.applicationSco
            .getMessage()
            .afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
              message: 'Ce message n'est pas sauvegardé, voulez-vous enregistrer le brouillon ?\nVotre discussion sera placée dans vos brouillons.',
            })
            .then((aAccepte) => {
              if (aAccepte === Enumere_Action_1.EGenreAction.Valider) {
                return this.requeteSaisieMessage({
                  commande: aMessage.listeMessagesTransfert
                    ? 'transfert'
                    : 'brouillon',
                  brouillon: undefined,
                  messagePourReponse: undefined,
                  objet: aMessage.objet,
                  contenu: aMessage.contenu,
                  listeDestinataires: aMessage.listeDestinataires,
                  listeMessagesTransfert: aMessage.listeMessagesTransfert,
                  listeFichiers: aMessage.listeFichiers,
                });
              }
            });
        } else {
          return Promise.resolve();
        }
      }
      avecSauvegardeBrouillonAutorise() {
        return (
          !this.options.estChat &&
          !this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.estEnConsultation,
          )
        );
      }
      autoriserAjoutPJ() {
        return (
          !this.options.estChat &&
          UtilitaireMessagerie_1.UtilitaireMessagerie.avecAjoutPieceJointeMessage()
        );
      }
      getMessageMessageInformatif() {
        const { heureDebut, heureFin, avecHoraire } =
          UtilitaireDroitALaDeconnexion_1.UtilitaireDroitALaDeconnexion.getHeureDebutFinDeconnexionMessagerie(
            this.applicationSco.getEtatUtilisateur(),
          );
        if (heureDebut && heureFin && avecHoraire) {
          return UtilitaireDroitALaDeconnexion_1.TradUtilitaireDroitALaDeconnexion.messagerieDesactiver.format(
            [heureDebut, heureFin],
          );
        }
        return 'Vous avez temporairement désactivé la réception de messages';
      }
      avecMessageAvertissements() {
        var _a;
        return (
          this.visibiliteMessageInformatif.messageAvertissements &&
          !!((_a = this.donneesListeMessagerie) === null || _a === void 0
            ? void 0
            : _a.avertissements)
        );
      }
      getLibelleMessageInformatifAvertissements() {
        const lAvertissements = this.donneesListeMessagerie
          ? this.donneesListeMessagerie.avertissements
          : null;
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          !!lAvertissements &&
            'Attention, votre messagerie contient plus de %d messages !',
        );
      }
      getHtmlBoutonMessageInformatifAvertissements() {
        if (!this.avecMessageAvertissements()) {
          return '';
        }
        const lAvertissements = this.donneesListeMessagerie
          ? this.donneesListeMessagerie.avertissements
          : null;
        const lJsxModelBouton = (aGenre) => {
          return {
            event: () => {
              switch (aGenre) {
                case TypeCommandeAvertissementsMessage.purger:
                  this._getCommandePurgerMessagesPromise(
                    false,
                    this.donneesListeMessagerie.listeMessagerie,
                  ).then((aCommandePurger) => {
                    if (aCommandePurger) {
                      return this.requeteSaisieMessage(aCommandePurger, true);
                    }
                  });
                  break;
                case TypeCommandeAvertissementsMessage.viderCorbeille:
                  if (lAvertissements) {
                    this.saisieViderCorbeille(lAvertissements.nbCorbeille);
                  }
                  break;
                case TypeCommandeAvertissementsMessage.corbeilleInactif:
                  this._discussionsInactivesDansCorbeille();
                  break;
                default:
              }
            },
          };
        };
        const composeBtn = (aLibelle, aType) => {
          return IE.jsx.str(
            IEHtml_Bouton_1.Bouton,
            {
              ie_model: lJsxModelBouton.bind(this, aType),
              'aria-haspopup': 'dialog',
              class: [
                IEHtml_Bouton_css_1.SIEHtmlBouton.themeBoutonNeutre,
                IEHtml_Bouton_css_1.SIEHtmlBouton.smallBt,
                MessageInformatif_module_css_1.SMessageInformatif.isWrap,
              ],
            },
            aLibelle,
          );
        };
        return IE.jsx.str(
          'div',
          null,
          IE.jsx.str(
            'p',
            null,
            'Nous vous conseillons de ne conserver que les messages qui vous sont utiles :',
          ),
          IE.jsx.str(
            'ul',
            {
              class: [
                Divers_css_1.SD.displayFlex,
                Divers_css_1.SD.flexDirectionColumn,
                Divers_css_1.SD.flexGap,
              ],
            },
            IE.jsx.str(
              'li',
              null,
              'Archivez les discussions que vous souhaitez conserver et supprimez les autres.',
            ),
            IE.jsx.str(
              'li',
              null,
              'Mettez fin à vos discussions une fois le sujet traité.',
            ),
            lAvertissements.avecPurge &&
              IE.jsx.str(
                'li',
                null,
                composeBtn(
                  'Purgez les anciens messages de vos discussions avec des élèves et responsables.',
                  TypeCommandeAvertissementsMessage.purger,
                ),
              ),
            IE.jsx.str(
              'li',
              null,
              composeBtn(
                'Mettez à la corbeille les discussions inactives.',
                TypeCommandeAvertissementsMessage.corbeilleInactif,
              ),
            ),
            lAvertissements.nbCorbeille > 0 &&
              IE.jsx.str(
                'li',
                null,
                composeBtn(
                  'Videz la corbeille.',
                  TypeCommandeAvertissementsMessage.viderCorbeille,
                ),
              ),
          ),
        );
      }
      getHtmlBoutonMessageInformatifMessagerieDesactivee() {
        if (!this.donneesListeMessagerie.messagerieDesactivee) {
          return '';
        }
        return IE.jsx.str(
          'div',
          {
            class: [
              Divers_css_1.SD.displayFlex,
              Divers_css_1.SD.flexGap,
              Divers_css_1.SD.flexWrap,
            ],
          },
          UtilitaireDroitALaDeconnexion_1.UtilitaireDroitALaDeconnexion.avecCommandeRecuperationMessagerie() &&
            IE.jsx.str(
              IEHtml_Bouton_1.Bouton,
              {
                ie_model:
                  this.jsxModelBoutonRecupererMessageDesactivation.bind(this),
                class: Type_ThemeBouton_1.TypeThemeBouton.neutre + ' small-bt',
              },
              'Récupérer les messages non reçus',
            ),
          UtilitaireDroitALaDeconnexion_1.UtilitaireDroitALaDeconnexion.getBoutonModifierPreferencesDesactivation(),
        );
      }
      getMessagesInformatif() {
        return IE.jsx.str(
          'div',
          {
            class: [
              Divers_css_1.SD.displayFlex,
              Divers_css_1.SD.flexGap,
              Divers_css_1.SD.flexDirectionColumn,
              IE.estMobile &&
                GestionnaireStickyScroll_1.GestionnaireStickyScroll.stickyTop,
            ],
          },
          UtilitaireDroitALaDeconnexion_1.UtilitaireDroitALaDeconnexion.getMessageInformatif(
            {
              ie_if: () => this._avecAvertissementListeMessagerie(),
              message: () => this.getMessageMessageInformatif(),
              html: () =>
                this.getHtmlBoutonMessageInformatifMessagerieDesactivee(),
              callbackSurFermeture: () =>
                (this.visibiliteMessageInformatif.messagerieDesactive = false),
            },
          ),
          IE.jsx.str(MessageInformatif_1.MessageInformatif, {
            ie_if: () => this.avecMessageAvertissements(),
            genreMessageInformatif:
              MessageInformatif_1.GenreMessageInformatif.Alert,
            message: () => this.getLibelleMessageInformatifAvertissements(),
            html: () => this.getHtmlBoutonMessageInformatifAvertissements(),
            noShadow: true,
            avecDeploiement: true,
            callbackSurFermeture: () =>
              (this.visibiliteMessageInformatif.messageAvertissements = false),
          }),
        );
      }
      addCommandesMenuContextuelDiscussion(aParams) {
        const lParams = Object.assign(
          {
            moteur: this,
            message: undefined,
            listeMessages: undefined,
            listeMessagerie: this.donneesListeMessagerie.listeMessagerie,
            listeEtiquettes: this.donneesListeMessagerie.listeEtiquettes,
            strSuperAdministrateurs:
              this.donneesListeMessagerie.strSuperAdministrateurs,
            avecListeDestinataires: IE.estMobile,
            avecCommandes: true,
          },
          aParams,
        );
        if (lParams.avecListeDestinataires && aParams.message) {
          const lMessage =
            aParams.message.messagePourParticipants ||
            aParams.message.messagePourReponse;
          if (
            lMessage &&
            !this.applicationSco.droits.get(
              ObjetDroitsPN_1.TypeDroits.estEnConsultation,
            ) &&
            !this.applicationSco.droits.get(
              ObjetDroitsPN_1.TypeDroits.communication.discussionInterdit,
            )
          ) {
            this._addCommandeMenuContextuel(
              Object.assign(
                {
                  genre:
                    TypeCommandeMessagerie_1.TypeCommandeMessagerie
                      .afficherDestinataires,
                  numeroMessage: lMessage.getNumero(),
                  estPublicParticipant: false,
                  estDestinatairesReponse: true,
                },
                lParams,
              ),
            );
            lParams.menuContextuel.avecSeparateurSurSuivant();
          }
        }
        if (!lParams.avecCommandes) {
          return;
        }
        this._addCommandeMenuContextuel(
          Object.assign(
            { genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.lu },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            { genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.nonLu },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            { genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.archiver },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie.desarchiver,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.transferer,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .modifierCategories,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .discussionEnFenetre,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .modificationObjetDiscussion,
            },
            lParams,
          ),
        );
        lParams.menuContextuel.avecSeparateurSurSuivant();
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .fermerDiscussion,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .ouvrirDiscussion,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.restaurer,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.corbeille,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            { genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.purger },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.supprimer,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .entrerSortirDiscussion,
            },
            lParams,
          ),
        );
        lParams.menuContextuel.avecSeparateurSurSuivant();
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .signalerSuppression,
            },
            lParams,
          ),
        );
      }
      addCommandesMenuContextuelVisuMessage(aParams) {
        const lParams = Object.assign(
          {
            moteur: this,
            messageListeSelection: undefined,
            messageVisu: undefined,
            listeMessages: new ObjetListeElements_1.ObjetListeElements().add(
              aParams.messageVisu,
            ),
            elementCibleCopie: undefined,
            listeMessagerie: this.donneesListeMessagerie.listeMessagerie,
            listeEtiquettes: this.donneesListeMessagerie.listeEtiquettes,
            strSuperAdministrateurs:
              this.donneesListeMessagerie.strSuperAdministrateurs,
            avecListeDestinataires: IE.estMobile,
          },
          aParams,
        );
        if (!lParams.messageVisu || !lParams.listeMessagerie) {
          return;
        }
        lParams.indiceListeMessagerie =
          UtilitaireMessagerie_1.UtilitaireMessagerie.getIndiceDiscussionDeMessageVisu(
            lParams.listeMessagerie,
            lParams.messageVisu,
          );
        lParams.message = lParams.listeMessagerie.get(
          lParams.indiceListeMessagerie,
        );
        if (!lParams.message) {
          return;
        }
        if (lParams.avecListeDestinataires && lParams.messageVisu) {
          this._addCommandeMenuContextuel(
            Object.assign(
              {
                genre:
                  TypeCommandeMessagerie_1.TypeCommandeMessagerie
                    .afficherDestinataires,
                numeroMessage: lParams.messageVisu.getNumero(),
                estPublicParticipant: false,
                estDestinatairesReponse: false,
              },
              lParams,
            ),
          );
          lParams.menuContextuel.avecSeparateurSurSuivant();
        }
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .afficherDiscussion,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie.repondreMessage,
            },
            lParams,
          ),
        );
        if (lParams.message.brouillon) {
          this._addCommandeMenuContextuel(
            Object.assign(
              {
                genre:
                  TypeCommandeMessagerie_1.TypeCommandeMessagerie.supprimer,
              },
              lParams,
            ),
          );
        }
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .copierContenuVisu,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.transferer,
            },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            { genre: TypeCommandeMessagerie_1.TypeCommandeMessagerie.signaler },
            lParams,
          ),
        );
        this._addCommandeMenuContextuel(
          Object.assign(
            {
              genre:
                TypeCommandeMessagerie_1.TypeCommandeMessagerie
                  .modifierCategories,
            },
            lParams,
          ),
        );
      }
      async ouvrirFenetreListeCategoriesDiscussion(
        aListeMessages,
        aListeEtiquettes,
        aCallback,
      ) {
        if (this.avecFenetreListeCategoriesDiscussion) {
          const lFenetre =
            new ObjetFenetre_ListeCategoriesDiscussion_1.ObjetFenetre_ListeCategoriesDiscussion(
              { pere: this.options.instance },
            ).initAfficher({});
          const lResult = await lFenetre.setDonneesDiscussion({
            listeEtiquettes: aListeEtiquettes,
            listeMessages: aListeMessages,
          });
          if (
            lResult === null || lResult === void 0
              ? void 0
              : lResult.avecModification
          ) {
            aCallback();
          }
        }
      }
      getInfosTitreDroite(aMessage) {
        var _a;
        if (!aMessage || !this.donneesListeMessagerie.listeMessagerie) {
          return { titre: '' };
        }
        let lTitre = '';
        if (aMessage.estUneDiscussion) {
          if (
            aMessage.nbBrouillons === 1 &&
            aMessage.nbBrouillons === aMessage.nombreMessages
          ) {
            lTitre = this._getLibelleBrouillonNonEnvoye(
              aMessage,
              this.donneesListeMessagerie.listeMessagerie,
            );
          }
        } else {
          if (
            aMessage.brouillon &&
            aMessage.pere.nbBrouillons === 1 &&
            aMessage.pere.nbBrouillons === aMessage.pere.nombreMessages
          ) {
            lTitre = this._getLibelleBrouillonNonEnvoye(
              aMessage,
              this.donneesListeMessagerie.listeMessagerie,
              aMessage,
            );
          }
        }
        let lInitiateur = '';
        if (lTitre === '') {
          const lDiscussionRacine =
            UtilitaireMessagerie_1.UtilitaireMessagerie.getDiscussionRacine(
              aMessage,
            );
          if (this._estMessageDetiquetteChat(aMessage)) {
            lTitre =
              lDiscussionRacine.initiateur ||
              'Moi';
            lInitiateur =
              (_a = lDiscussionRacine.initiateur) !== null && _a !== void 0
                ? _a
                : '';
          } else {
            lTitre =
              lDiscussionRacine.objet ||
              'Discussion (sans objet)';
          }
        }
        if (
          this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.discussionInterdit,
          )
        ) {
          lTitre +=
            ' (' +
            'en consultation'.ucfirst() +
            ')';
        }
        return { titre: lTitre, initiateur: lInitiateur };
      }
      composeTitreBandeauDeMessageVisu(aMessage, aOptions) {
        if (!aMessage || !this.donneesListeMessagerie.listeMessagerie) {
          return '';
        }
        const lInstance = aOptions.instance || this.options.instance;
        const lInfosTitre = this.getInfosTitreDroite(aMessage);
        let lSousTitre = '';
        let lAvecInfosParticipants = false;
        if (aMessage.estUneDiscussion) {
          if (aMessage.public) {
            lSousTitre = aMessage.public;
            if (lSousTitre === lInfosTitre.initiateur) {
              lSousTitre =
                'Moi';
            }
          } else if (aMessage.nbPublic > 1) {
            lSousTitre = ObjetChaine_1.GChaine.format(
              '%d participants',
              [aMessage.nbPublic || 0],
            );
            if (aMessage.messagePourParticipants) {
              lAvecInfosParticipants = true;
            }
          }
        }
        if (aMessage.strPublicLong) {
          lSousTitre = aMessage.strPublicLong;
        }
        const lIconeSvg =
          UtilitaireMessagerie_1.UtilitaireMessagerie.getIconeSvgMessage(
            aMessage,
          );
        const H = [];
        if (lIconeSvg) {
          H.push(
            IE.jsx.str(
              'div',
              {
                class: [
                  UtilitaireMessagerie_css_1.SUtilitaireMessagerie.iconTitre,
                ],
              },
              lIconeSvg,
            ),
          );
        }
        H.push(
          IE.jsx.str(
            'div',
            { class: 'titre' },
            IE.jsx.str('h2', { ie_ellipsis: true }, lInfosTitre.titre),
            lSousTitre
              ? IE.jsx.str(
                  'p',
                  {
                    role: lAvecInfosParticipants ? 'button' : false,
                    class: [
                      lAvecInfosParticipants
                        ? Divers_css_1.SD.SouligneSurvol
                        : '',
                      lAvecInfosParticipants ? 'AvecMain' : '',
                      Divers_css_1.SD.ieSousTitre,
                    ],
                    ie_ellipsis: true,
                    ie_eventmap: lAvecInfosParticipants
                      ? {
                          validation: () =>
                            UtilitaireMessagerie_1.UtilitaireMessagerie.afficherFenetreDestinatairesDeMessage(
                              aMessage.messagePourParticipants.getNumero(),
                              true,
                              false,
                            ),
                        }
                      : false,
                    tabindex: lAvecInfosParticipants ? 0 : false,
                    'aria-haspopup': lAvecInfosParticipants ? 'dialog' : false,
                    ie_tooltipdescribe_static: lAvecInfosParticipants
                      ? 'Afficher les participants'
                      : false,
                  },
                  lSousTitre,
                )
              : '',
          ),
        );
        if (
          aOptions.callbackMenu &&
          (aOptions.avecMenuPublic || aOptions.avecMenuActions)
        ) {
          const lGetCtxMixteBandeauDroite = () => {
            return {
              create: () =>
                new ObjetMenuCtxMixte_1.ObjetMenuCtxMixte({ pere: lInstance }),
              init: (aMenuCtxMixte) => {
                this.menuCtxMixteBandeauDroite = aMenuCtxMixte;
                aMenuCtxMixte.setOptions({
                  callbackAddCommandes: (aMenu) => {
                    this.addCommandesMenuContextuelDiscussion({
                      avecListeDestinataires: aOptions.avecMenuPublic,
                      avecCommandes: aOptions.avecMenuActions,
                      message: aMessage,
                      menuContextuel: aMenu,
                      callback: function (aParams, aCommande) {
                        aOptions.callbackMenu(aParams, aCommande);
                      },
                    });
                  },
                });
              },
              destroy: () => {
                this.menuCtxMixteBandeauDroite = undefined;
              },
            };
          };
          H.push(IE.jsx.str('div', { ie_identite: lGetCtxMixteBandeauDroite }));
        }
        return H.join('');
      }
      actualiserMenuCtxMixteBandeauDroite() {
        if (this.menuCtxMixteBandeauDroite) {
          this.menuCtxMixteBandeauDroite.actualiser();
        }
      }
      modifierVisibiliteListeMessagerie(aMessageSelectionne) {
        let lEtatVisible = true;
        let lIndicePere = null;
        if (
          this.options.discussionSelectionneeUniquementVisible &&
          aMessageSelectionne
        ) {
          lIndicePere =
            UtilitaireMessagerie_1.UtilitaireMessagerie.getIndiceDiscussion(
              this.donneesListeMessagerie.listeMessagerie,
              aMessageSelectionne,
            );
        }
        const lVoirUniquementNonLues =
          this.applicationSco.parametresUtilisateur.get(
            'Communication.DiscussionNonLues',
          );
        for (
          let i = 0;
          i < this.donneesListeMessagerie.listeMessagerie.count();
          i++
        ) {
          const lMessage = this.donneesListeMessagerie.listeMessagerie.get(i);
          lMessage.visible = true;
          lEtatVisible = true;
          if (this.options.avecFiltreNonLues) {
            if (
              lMessage.estUneDiscussion &&
              lVoirUniquementNonLues &&
              !this._selectionEstMessageOuMessageFilsDeDiscussion(
                aMessageSelectionne,
                lMessage,
              )
            ) {
              lEtatVisible = !lMessage.lu;
            }
            if (lVoirUniquementNonLues) {
              lMessage.visible = lEtatVisible;
            }
          }
          if (
            this.options.discussionSelectionneeUniquementVisible &&
            lIndicePere !== null
          ) {
            if (
              lIndicePere !==
              UtilitaireMessagerie_1.UtilitaireMessagerie.getIndicePere(
                this.donneesListeMessagerie.listeMessagerie,
                lMessage,
              )
            ) {
              lMessage.visible = false;
            }
          }
          if (this.options.estDiscussionCommune) {
            const lUniquementLesCommunes = this.uniquementLesCommunes;
            if (lUniquementLesCommunes && lMessage.visibleFiltre === false) {
              lMessage.visible = false;
            }
            if (lMessage.listePossessionsMessages) {
              lMessage.listePossessionsMessages.parcourir((D) => {
                D.ignorerSerialisation =
                  lUniquementLesCommunes && D.visibleFiltre === false;
              });
            }
          }
        }
      }
      getNbMessagesSupprimablesPoubelle() {
        let lCpt = 0;
        if (
          this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionAvancee,
          ) &&
          this.donneesListeMessagerie.listeMessagerie
        ) {
          const lEtiquette = new ObjetElement_1.ObjetElement(
            '',
            0,
            TypeOrigineCreationEtiquetteMessage_1.TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle,
          );
          this.donneesListeMessagerie.listeMessagerie.parcourir((D) => {
            if (
              UtilitaireMessagerie_1.UtilitaireMessagerie.estDiscussionVisibleSelonEtiquette(
                D,
                lEtiquette,
              )
            ) {
              if (!D.estUneDiscussion) {
                lCpt += 1;
              }
            }
          });
        }
        return lCpt;
      }
      static saisieSortirConversation(aInstance, aMessage, aPossessionMessage) {
        let lPossessionMessage = aPossessionMessage;
        if (
          !lPossessionMessage &&
          aMessage &&
          aMessage.listePossessionsMessages
        ) {
          lPossessionMessage = aMessage.listePossessionsMessages.get(
            aMessage.listePossessionsMessages.count() - 1,
          );
        }
        if (lPossessionMessage) {
          return new ObjetRequeteSaisieMessage_1.ObjetRequeteSaisieMessage(
            aInstance,
          ).lancerRequete({
            commande: 'entrerSortirConversation',
            entrer: false,
            possessionMessage: lPossessionMessage,
          });
        }
        return Promise.reject();
      }
      _selectionEstMessageOuMessageFilsDeDiscussion(
        aMessageSelectionne,
        aDiscussion,
      ) {
        if (aMessageSelectionne && aDiscussion) {
          if (aMessageSelectionne.estUneDiscussion) {
            return (
              UtilitaireMessagerie_1.UtilitaireMessagerie.getIndiceDiscussion(
                this.donneesListeMessagerie.listeMessagerie,
                aMessageSelectionne,
              ) ===
              UtilitaireMessagerie_1.UtilitaireMessagerie.getIndiceDiscussion(
                this.donneesListeMessagerie.listeMessagerie,
                aDiscussion,
              )
            );
          }
          if (!aMessageSelectionne.estUneDiscussion) {
            return (
              UtilitaireMessagerie_1.UtilitaireMessagerie.getIndicePere(
                this.donneesListeMessagerie.listeMessagerie,
                aMessageSelectionne,
              ) ===
              UtilitaireMessagerie_1.UtilitaireMessagerie.getIndicePere(
                this.donneesListeMessagerie.listeMessagerie,
                aDiscussion,
              )
            );
          }
        }
        return false;
      }
      _addCommandeMenuContextuel(aParams) {
        var _a, _b;
        const lCallback = function (aCommande) {
          aParams.callback(aParams, aCommande);
        };
        const lSaisie = function (aCommande, aNePasSauvegarderBrouillons) {
          aParams.moteur
            .requeteSaisieMessage(aCommande, !aNePasSauvegarderBrouillons)
            .then((aResult) => {
              if (aResult && aResult.saisieMessageOK === true) {
                return lCallback();
              }
            });
        };
        function _add(aTrad, aFunc, aExtendMenu, aActif) {
          aParams.menuContextuel.add(
            aTrad,
            aActif !== false,
            () => {
              if (aFunc) {
                aFunc();
              } else {
                lCallback();
              }
            },
            aExtendMenu,
          );
        }
        const lEnConsult =
          this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.estEnConsultation,
          ) ||
          this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.discussionInterdit,
          );
        const lDiscussionAvancee = this.applicationSco.droits.get(
          ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionAvancee,
        );
        const lEstBrouillon =
          (!aParams.message.estUneDiscussion && aParams.message.brouillon) ||
          (aParams.message.estUneDiscussion &&
            (aParams.message.nbBrouillons || 0) >=
              aParams.message.nombreMessages);
        switch (aParams.genre) {
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .afficherDestinataires:
            _add(
              'Liste des destinataires',
              lCallback,
              {
                iconeSvg: IE.jsx.str(
                  IconeSvgIntervenants_1.IconeSvgIntervenants,
                  null,
                ),
              },
            );
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.archiver:
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.desarchiver: {
            const lArchiver =
              aParams.genre ===
              TypeCommandeMessagerie_1.TypeCommandeMessagerie.archiver;
            if (
              !lEnConsult &&
              lDiscussionAvancee &&
              aParams.message &&
              aParams.message.estUneDiscussion &&
              lArchiver === !aParams.message.archive &&
              !aParams.message.poubelle &&
              !aParams.message.estNonPossede
            ) {
              _add(
                lArchiver
                  ? 'Archiver'
                  : 'Désarchiver',
                () => {
                  lSaisie({
                    commande: 'archive',
                    archiver: lArchiver,
                    message: aParams.message,
                  });
                },
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgArchiver_discussion_1.IconeSvgArchiver_discussion,
                    null,
                  ),
                  typeAffEnModeMixte:
                    Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                },
              );
            }
            break;
          }
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.transferer:
            if (
              !IE.estMobile &&
              !lEnConsult &&
              lDiscussionAvancee &&
              aParams.message &&
              !aParams.message.estNonPossede &&
              !UtilitaireMessagerie_1.UtilitaireMessagerie.estMessageNonEditable(
                aParams.message,
              ) &&
              !lEstBrouillon
            ) {
              _add(
                aParams.message.estUneDiscussion
                  ? 'Transférer à'
                  : 'Transférer le message',
                undefined,
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgTransferer_discussion_1.IconeSvgTransferer_discussion,
                    null,
                  ),
                  ariaHasPopup: 'dialog',
                },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.signaler:
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .signalerSuppression:
            if (
              !lEnConsult &&
              lDiscussionAvancee &&
              !lEstBrouillon &&
              aParams.strSuperAdministrateurs &&
              !UtilitaireMessagerie_1.UtilitaireMessagerie.estMessageNonEditable(
                aParams.message,
              ) &&
              !aParams.message.estNonPossede
            ) {
              const lPourSignaler =
                aParams.genre ===
                TypeCommandeMessagerie_1.TypeCommandeMessagerie.signaler;
              const lActif = lPourSignaler
                ? !aParams.message.estUneDiscussion
                : !!aParams.message.estUneDiscussion &&
                  aParams.message.profondeur === 0;
              _add(
                lPourSignaler
                  ? 'Signaler un contenu inapproprié dans le message à %s'
                  : 'Demander la suppression de cette discussion à %s',
                () => {
                  let lStrObjetDiscussion = '';
                  const lDiscussionRacine =
                    UtilitaireMessagerie_1.UtilitaireMessagerie.getDiscussionRacine(
                      aParams.message,
                    );
                  if (lDiscussionRacine && lDiscussionRacine.objet) {
                    lStrObjetDiscussion = `"${lDiscussionRacine.objet}"`;
                  }
                  this.applicationSco
                    .getMessage()
                    .afficher({
                      type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                        .Confirmation,
                      message: lPourSignaler
                        ? 'Confirmez-vous le signalement de contenu inapproprié dans le message %s ?'
                        : 'Confirmez-vous la demande de suppression de la discussion %s ?',
                    })
                    .then((aGenreAction) => {
                      if (
                        aGenreAction === Enumere_Action_1.EGenreAction.Valider
                      ) {
                        lSaisie({
                          commande: lPourSignaler
                            ? 'signalement'
                            : 'signalementSuppression',
                          message: aParams.message,
                        });
                      }
                    });
                },
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgWarning_sign_1.IconeSvgWarning_sign,
                    null,
                  ),
                  ariaHasPopup: 'dialog',
                },
                lActif,
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .modifierCategories:
            if (
              !lEnConsult &&
              lDiscussionAvancee &&
              aParams.message &&
              !aParams.message.estNonPossede &&
              aParams.listeEtiquettes &&
              aParams.listeMessagerie &&
              this.avecFenetreListeCategoriesDiscussion
            ) {
              _add(
                aParams.message.listeEtiquettes &&
                  aParams.message.listeEtiquettes
                    .getListeElements((D) => {
                      return TypeOrigineCreationEtiquetteMessage_1.TypeOrigineCreationEtiquetteMessageUtil.estEtiquettePerso(
                        D.getGenre(),
                      );
                    })
                    .count() > 0
                  ? 'Catégoriser'
                  : 'Catégoriser',
                () => {
                  let lListeMessages =
                    aParams.listeMessages ||
                    new ObjetListeElements_1.ObjetListeElements();
                  if (!aParams.listeMessages) {
                    if (aParams.message.estUneDiscussion) {
                      lListeMessages = aParams.listeMessagerie.getListeElements(
                        (D) => {
                          return D.pere === aParams.message;
                        },
                      );
                    } else {
                      lListeMessages.add(aParams.message);
                    }
                  }
                  aParams.moteur.ouvrirFenetreListeCategoriesDiscussion(
                    lListeMessages,
                    aParams.listeEtiquettes,
                    () => {
                      lCallback();
                    },
                  );
                },
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgClasser_discussion_1.IconeSvgClasser_discussion,
                    null,
                  ),
                  ariaHasPopup: 'dialog',
                },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.corbeille:
            if (
              !lEnConsult &&
              aParams.message &&
              aParams.message.estUneDiscussion &&
              aParams.message.profondeur === 0 &&
              !aParams.message.poubelle &&
              !aParams.message.estNonPossede
            ) {
              _add(
                'Mettre à la corbeille',
                () => {
                  lSaisie({
                    commande: 'corbeille',
                    listePossessionsMessages: aParams.message
                      ? aParams.message.listePossessionsMessages
                      : new ObjetListeElements_1.ObjetListeElements(),
                  });
                },
                {
                  iconeSvg: IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null),
                  typeAffEnModeMixte:
                    Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.restaurer:
            if (!lEnConsult && aParams.message && aParams.message.poubelle) {
              _add(
                'Restaurer',
                () => {
                  lSaisie({
                    commande: 'restauration',
                    message: aParams.message,
                  });
                },
                { iconeSvg: IE.jsx.str(IconeSvgUndo_1.IconeSvgUndo, null) },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.purger:
            if (
              !lEnConsult &&
              aParams.message &&
              aParams.message.messagePurge
            ) {
              _add(
                'Purger les anciens messages de la discussion',
                () => {
                  this._getCommandePurgerMessagesPromise(
                    true,
                    new ObjetListeElements_1.ObjetListeElements().add(
                      aParams.message,
                    ),
                  ).then((aParams) => {
                    if (aParams) {
                      lSaisie(aParams);
                    }
                  });
                },
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgPurger_messages_1.IconeSvgPurger_messages,
                    null,
                  ),
                },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.supprimer:
            if (
              !lEnConsult &&
              aParams.message &&
              ((aParams.message.estUneDiscussion && aParams.message.poubelle) ||
                lEstBrouillon) &&
              !aParams.message.estNonPossede
            ) {
              _add(
                aParams.message.estUneDiscussion
                  ? 'Supprimer définitivement'
                  : 'Supprimer définitivement le brouillon',
                () => {
                  return this.applicationSco
                    .getMessage()
                    .afficher({
                      type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                        .Confirmation,
                      message: 'Les messages sélectionnés vont être supprimés définitivement',
                    })
                    .then((aAccepte) => {
                      if (aAccepte === Enumere_Action_1.EGenreAction.Valider) {
                        lSaisie({
                          commande: 'suppression',
                          message: aParams.message,
                        });
                      }
                    });
                },
                { iconeSvg: IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null) },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.lu:
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.nonLu: {
            const lLu =
              aParams.genre ===
              TypeCommandeMessagerie_1.TypeCommandeMessagerie.lu;
            if (
              !lEnConsult &&
              aParams.message &&
              !aParams.message.estNonPossede &&
              lLu === !aParams.message.lu
            ) {
              _add(
                lLu
                  ? 'Marquer comme lu'
                  : 'Marquer comme non lu',
                () => {
                  lSaisie({
                    commande: 'pourLu',
                    lu: lLu,
                    message: aParams.message,
                  });
                },
                {
                  iconeSvg: lLu
                    ? IE.jsx.str(IconeSvgEye_open_1.IconeSvgEye_open, null)
                    : IE.jsx.str(IconeSvgEye_close_1.IconeSvgEye_close, null),
                },
              );
            }
            break;
          }
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.fermerDiscussion:
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .ouvrirDiscussion: {
            const lOuvrir =
              aParams.genre ===
              TypeCommandeMessagerie_1.TypeCommandeMessagerie.ouvrirDiscussion;
            if (
              !lEnConsult &&
              lDiscussionAvancee &&
              aParams.message &&
              ((lOuvrir && aParams.message.ouvrable) ||
                (!lOuvrir && aParams.message.fermable)) &&
              !aParams.message.estNonPossede &&
              !aParams.message.estSorti
            ) {
              _add(
                lOuvrir
                  ? 'Rouvrir'
                  : 'Mettre fin',
                () => {
                  return this.applicationSco
                    .getMessage()
                    .afficher({
                      type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                        .Confirmation,
                      message: lOuvrir
                        ? 'Tous les participants pourront de nouveau répondre aux discussions sélectionnées.\n\nÊtes-vous sûr de vouloir rouvrir ces discussions ?'
                        : 'Les discussions sélectionnées seront toujours visibles par les participants mais plus personne ne pourra répondre.\n\nÊtes-vous sûr de vouloir mettre fin à ces discussions ?',
                    })
                    .then((aGenreAction) => {
                      if (
                        aGenreAction === Enumere_Action_1.EGenreAction.Valider
                      ) {
                        lSaisie({
                          commande: 'pourOuvrirFermer',
                          ouvrir: lOuvrir,
                          message: aParams.message,
                        });
                      }
                    });
                },
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgDiscussion_terminee_1.IconeSvgDiscussion_terminee,
                    null,
                  ),
                },
              );
            }
            break;
          }
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .entrerSortirDiscussion:
            if (
              !lEnConsult &&
              aParams.message &&
              aParams.message.avecIODicussion &&
              !lEstBrouillon &&
              aParams.message.dernierPossessionMessage
            ) {
              _add(
                aParams.message.estSorti
                  ? 'Réintégrer'
                  : 'Se retirer',
                () => {
                  lSaisie({
                    commande: 'entrerSortirDiscussion',
                    estSorti: aParams.message.estSorti,
                    possessionMessage: aParams.message.dernierPossessionMessage,
                  });
                },
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgSortir_reintegrer_conversation_1.IconeSvgSortir_reintegrer_conversation,
                    null,
                  ),
                },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .modificationObjetDiscussion:
            if (
              !lEnConsult &&
              aParams.message &&
              aParams.message.avecModifObjet &&
              aParams.message.dernierPossessionMessage
            ) {
              _add(
                'Modifier l'objet de la discussion',
                () => {
                  return this._editerObjetDiscussionPromise(
                    aParams.moteur,
                    aParams.message,
                  ).then((aParams) => {
                    if (aParams && aParams.commande) {
                      lSaisie(aParams);
                    }
                  });
                },
                {
                  iconeSvg: IE.jsx.str(IconeSvgEdit_1.IconeSvgEdit, null),
                  ariaHasPopup: 'dialog',
                },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .discussionEnFenetre:
            if (
              !IE.estMobile &&
              !lEnConsult &&
              aParams.message &&
              aParams.message.messageFenetre &&
              aParams.message.dernierPossessionMessage &&
              !aParams.message.estNonPossede
            ) {
              _add(
                aParams.message.messageFenetre.getGenre() ===
                  TypeGenreDiscussion_1.TypeGenreDiscussion.GD_Conversation
                  ? 'Isoler dans une fenêtre'
                  : 'Isoler dans une fenêtre',
                undefined,
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgAffichage_widget_1.IconeSvgAffichage_widget,
                    null,
                  ),
                  ariaHasPopup: 'dialog',
                },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .copierContenuVisu:
            if (
              aParams.messageVisu &&
              aParams.elementCibleCopie &&
              ((_b =
                (_a = global.getSelection) === null || _a === void 0
                  ? void 0
                  : _a.call(global)) === null || _b === void 0
                ? void 0
                : _b.selectAllChildren)
            ) {
              _add(
                'Copier le texte du message sélectionné',
                () => {
                  window
                    .getSelection()
                    .selectAllChildren(aParams.elementCibleCopie);
                  try {
                    document.execCommand('copy');
                  } catch (e) {}
                },
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgCopier_liste_1.IconeSvgCopier_liste,
                    null,
                  ),
                },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie.repondreMessage:
            if (
              !this.applicationSco.droits.get(
                ObjetDroitsPN_1.TypeDroits.communication.discussionInterdit,
              ) &&
              aParams.messageListeSelection &&
              aParams.message &&
              !aParams.message.estNonPossede &&
              !aParams.message.estCarnetLiaison &&
              aParams.messageListeSelection.estUneDiscussion &&
              !UtilitaireMessagerie_1.UtilitaireMessagerie.estMessageNonEditable(
                aParams.message,
              )
            ) {
              _add(
                aParams.message.brouillon
                  ? 'Reprendre le brouillon'
                  : 'Répondre au message',
                lCallback,
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgDiscussion_repondu_1.IconeSvgDiscussion_repondu,
                    null,
                  ),
                },
                !lEnConsult,
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .afficherDiscussion:
            if (
              !this.applicationSco.droits.get(
                ObjetDroitsPN_1.TypeDroits.communication.discussionInterdit,
              ) &&
              aParams.messageListeSelection &&
              aParams.message &&
              !aParams.message.estNonPossede &&
              !aParams.message.brouillon &&
              !aParams.messageListeSelection.estUneDiscussion
            ) {
              _add(
                'Afficher la discussion du message',
                lCallback,
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgEye_open_1.IconeSvgEye_open,
                    null,
                  ),
                },
                !lEnConsult,
              );
            }
            break;
          default:
        }
      }
      _estMessageDetiquetteChat(aMessage) {
        let lEstChat = false;
        if (aMessage && aMessage.listeEtiquettes) {
          aMessage.listeEtiquettes.parcourir((aEtiquette) => {
            if (
              [
                TypeOrigineCreationEtiquetteMessage_1
                  .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Alerte,
                TypeOrigineCreationEtiquetteMessage_1
                  .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_ContactVS,
                TypeOrigineCreationEtiquetteMessage_1
                  .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Conversation,
              ].indexOf(aEtiquette.getGenre()) >= 0
            ) {
              lEstChat = true;
              return false;
            }
          });
        }
        return lEstChat;
      }
      _getLibelleBrouillonNonEnvoye(
        aDiscussion,
        aListeMessagerie,
        aMessageBrouillon,
      ) {
        let lMessageBrouillon = aMessageBrouillon;
        if (!lMessageBrouillon && aListeMessagerie) {
          const lNumeroPossession =
            aDiscussion.listePossessionsMessages.getNumero(0);
          aListeMessagerie.parcourir((aMessage) => {
            if (
              !aMessage.estUneDiscussion &&
              aMessage.brouillon &&
              aMessage.listePossessionsMessages &&
              aMessage.listePossessionsMessages.getNumero(0) ===
                lNumeroPossession
            ) {
              lMessageBrouillon = aMessage;
              return false;
            }
          });
        }
        if (lMessageBrouillon && lMessageBrouillon.transferant) {
          return 'Brouillon d'une nouvelle discussion (transfert)';
        }
        return 'Brouillon d'une nouvelle discussion';
      }
      async _getCommandePurgerMessagesPromise(aPurgeSelection, aListeMessages) {
        const lListeMessagesPurge =
          new ObjetListeElements_1.ObjetListeElements();
        aListeMessages.parcourir((aMessage) => {
          if (aMessage.messagePurge) {
            lListeMessagesPurge.addElement(aMessage.messagePurge);
          }
        });
        if (
          !lListeMessagesPurge ||
          !lListeMessagesPurge.count ||
          lListeMessagesPurge.count() === 0
        ) {
          return null;
        }
        const lChoix = [10, 20, 50, 100];
        const lIndiceSelection = 1;
        let lNbMaxMessages = lChoix[lIndiceSelection];
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        lChoix.forEach((aVal) => {
          lListe.addElement(new ObjetElement_1.ObjetElement(aVal + '', aVal));
        });
        const lJsxComboModelNbDernieresConversationsPourPurge = () => {
          return {
            init: (aCombo) => {
              aCombo.setOptionsObjetSaisie({
                longueur: 35,
                labelWAICellule: 'Nombre des derniers messages conservés lors de la purge des anciens messages',
              });
              aCombo.setDonneesObjetSaisie({
                liste: lListe,
                selection: lIndiceSelection,
              });
            },
            event: (aParams) => {
              if (
                aParams.genreEvenement ===
                  Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                    .selection &&
                aParams.element
              ) {
                lNbMaxMessages = aParams.element.getNumero();
              }
            },
          };
        };
        const H = [];
        H.push(
          IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str(
              'b',
              null,
              'Purge des anciens messages (discussions avec élèves et responsables)',
            ),
            IE.jsx.str('br', null),
            IE.jsx.str('br', null),
            IE.jsx.str(
              'div',
              { class: 'listeMessagerie_messConfirm' },
              IE.jsx.str(
                'div',
                { class: 'Insecable' },
                'Seuls les',
              ),
              IE.jsx.str(
                'div',
                null,
                IE.jsx.str(IEHtml_Combo_1.Combo, {
                  ie_model: lJsxComboModelNbDernieresConversationsPourPurge,
                }),
              ),
              IE.jsx.str(
                'div',
                null,
                'derniers messages',
              ),
            ),
            aPurgeSelection
              ? 'de la discussion sélectionnée seront conservés.'
              : 'de toutes vos discussions avec des élèves et responsables seront conservés.',
            IE.jsx.str('br', null),
            IE.jsx.str('br', null),
            ObjetChaine_1.GChaine.replaceRCToHTML(
              'Tous les anciens messages non archivés vont être définitivement supprimés pour tous les destinataires.\nConfirmez-vous cette suppression ?',
            ),
          ),
        );
        const lAction = await this.applicationSco
          .getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: H.join(''),
            width: 430,
          });
        if (lAction === Enumere_Action_1.EGenreAction.Valider) {
          return {
            commande: 'purger',
            listeMessagesPurge: lListeMessagesPurge,
            nbMaxMessages: lNbMaxMessages,
          };
        }
        return null;
      }
      _editerObjetDiscussionPromise(aMoteur, aMessage) {
        let lObjet = aMessage.objet;
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_1.ObjetFenetre,
          { pere: aMoteur.options.instance },
          {
            titre: 'Modifier l'objet de la discussion',
            listeBoutons: [
              'Annuler',
              {
                valider: true,
                libelle: 'Valider',
              },
            ],
            largeur: 300,
          },
        );
        const lModel = () => {
          return {
            getValue: function () {
              return lObjet !== null && lObjet !== void 0 ? lObjet : '';
            },
            setValue: function (aValue) {
              lObjet = aValue;
            },
            node: function (aNode) {
              $(aNode).on('keyup', (aEvent) => {
                if (
                  aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot
                ) {
                  lFenetre.setBoutonFocus({ valider: true });
                }
              });
            },
          };
        };
        lFenetre.getDisabledFenetreBtn = (aBouton) => {
          return !!aBouton.valider && !lObjet;
        };
        return lFenetre
          .afficher(
            IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str(
                'span',
                null,
                'Saisir le nouvel objet de la discussion',
              ),
              IE.jsx.str('br', null),
              IE.jsx.str('br', null),
              IE.jsx.str('input', {
                type: 'text',
                class: 'full-width',
                ie_model: lModel,
                ie_trim: true,
                maxlength:
                  UtilitaireMessagerie_1.UtilitaireMessagerie
                    .C_TailleObjetMessage,
                'aria-label': 'Saisir le nouvel objet de la discussion',
              }),
            ),
          )
          .then((aParams) => {
            var _a;
            if (
              ((_a =
                aParams === null || aParams === void 0
                  ? void 0
                  : aParams.bouton) === null || _a === void 0
                ? void 0
                : _a.valider) &&
              lObjet
            ) {
              return {
                commande: 'modificationObjetDiscussion',
                possessionMessage: aMessage.dernierPossessionMessage,
                objet: lObjet,
              };
            }
          });
      }
      _avecAvertissementListeMessagerie() {
        return (
          this.visibiliteMessageInformatif.messagerieDesactive &&
          !!(
            this.donneesListeMessagerie &&
            (this.donneesListeMessagerie.avertissements ||
              this.donneesListeMessagerie.messagerieDesactivee)
          )
        );
      }
      jsxModelBoutonRecupererMessageDesactivation() {
        return {
          event: () => {
            this.requeteSaisieMessage(
              { commande: 'recupererMessageDesactivation' },
              true,
            );
          },
        };
      }
      _discussionsInactivesDansCorbeille() {
        const lChoix = [15, 30, 60];
        const lIndiceSelection = 0;
        let lNbJours = lChoix[lIndiceSelection];
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        lChoix.forEach((aVal) => {
          lListe.addElement(new ObjetElement_1.ObjetElement(aVal + '', aVal));
        });
        const lJsxComboModelNbJoursASupprimer = () => {
          return {
            init: (aCombo) => {
              aCombo.setOptionsObjetSaisie({ longueur: 25 });
              aCombo.setDonneesObjetSaisie({
                liste: lListe,
                selection: lIndiceSelection,
              });
            },
            event: (aParams) => {
              if (
                aParams.genreEvenement ===
                  Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                    .selection &&
                aParams.element
              ) {
                lNbJours = aParams.element.getNumero();
              }
            },
          };
        };
        const H = [];
        H.push(
          IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str(
              'b',
              null,
              'Mise à la corbeille des discussions inactives',
            ),
            IE.jsx.str('br', null),
            IE.jsx.str('br', null),
            'Confirmez-vous la mise à la corbeille de toutes les discussions',
            IE.jsx.str(
              'div',
              { class: 'listeMessagerie_messConfirm' },
              IE.jsx.str(
                'div',
                { class: 'Insecable' },
                'n'ayant pas eu de messages dans les',
              ),
              IE.jsx.str(
                'div',
                null,
                IE.jsx.str(IEHtml_Combo_1.Combo, {
                  ie_model: lJsxComboModelNbJoursASupprimer,
                }),
              ),
              IE.jsx.str(
                'div',
                null,
                'derniers jours ?',
              ),
            ),
          ),
        );
        this.applicationSco
          .getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: H.join(''),
            width: 370,
          })
          .then((aAccepte) => {
            if (aAccepte !== Enumere_Action_1.EGenreAction.Valider) {
              return;
            }
            const lNow = new Date();
            const lListePossessionsMessages =
              new ObjetListeElements_1.ObjetListeElements();
            this.donneesListeMessagerie.listeMessagerie.parcourir(
              (aMessage) => {
                if (
                  aMessage &&
                  aMessage.dateActivite &&
                  aMessage.listePossessionsMessages &&
                  ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
                    aMessage.dateActivite,
                    lNow,
                  ) > lNbJours
                ) {
                  lListePossessionsMessages.add(
                    aMessage.listePossessionsMessages,
                  );
                }
              },
            );
            if (lListePossessionsMessages.count() > 0) {
              return this.requeteSaisieMessage(
                {
                  commande: 'corbeille',
                  listePossessionsMessages: lListePossessionsMessages,
                },
                true,
                MoteurMessagerie.TypeApresSaisieMessage.vider,
              );
            }
          });
      }
      async _controleNbDestinatairesResponEleve(aMessage) {
        if (
          aMessage.commande !== 'brouillon' &&
          aMessage.listeDestinataires &&
          aMessage.avecControleNbDest !== false
        ) {
          const lNbEleves = aMessage.listeDestinataires
            .getListeElements((D) => {
              return (
                D.getGenre() ===
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve
              );
            })
            .count();
          const lNbResponsables = aMessage.listeDestinataires
            .getListeElements((D_1) => {
              return (
                D_1.getGenre() ===
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable
              );
            })
            .count();
          if (lNbEleves + lNbResponsables > 100) {
            const lGenreAction = await this.applicationSco
              .getMessage()
              .afficher({
                type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
                message:
                  !aMessage.message &&
                  (!aMessage.messagePourReponse ||
                    !aMessage.messagePourReponse.existeNumero())
                    ? 'Êtes-vous sûr de vouloir démarrer une nouvelle discussion avec autant d'élèves (%d) ou de responsables (%d) ?\nUne information pourrait être plus appropriée.'
                    : 'Êtes-vous sûr de vouloir ajouter autant d'élèves (%d) ou de responsables (%d) à la discussion ?',
              });
            if (lGenreAction === Enumere_Action_1.EGenreAction.NePasValider) {
              throw new Error();
            }
          }
        }
      }
      async _controleUtilisateurDansDestinataires(aMessage) {
        await this._controleNbDestinatairesResponEleve(aMessage);
        if (
          aMessage.commande !== 'brouillon' &&
          aMessage.listeDestinataires &&
          aMessage.listeDestinataires.count() >= 1 &&
          aMessage.listeDestinataires.getElementParElement(
            GEtatUtilisateur.getUtilisateur(),
          )
        ) {
          const lGenreAction = await this.applicationSco
            .getMessage()
            .afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
              message: 'Êtes-vous sûr de vouloir faire partie des destinataires du message ?',
            });
          if (lGenreAction === Enumere_Action_1.EGenreAction.NePasValider) {
            aMessage.listeDestinataires.remove(
              aMessage.listeDestinataires.getIndiceParElement(
                GEtatUtilisateur.getUtilisateur(),
              ),
            );
          }
        }
      }
      _traiterListeEtiquette(aListeEtiquettes, aAvecCategories) {
        let lNumeroBidon = 1;
        const lGetNumeroBidon = () => {
          const lResult = lNumeroBidon;
          lNumeroBidon += 1;
          return lResult;
        };
        const lAvecDiscussionAvancee = this.applicationSco.droits.get(
          ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionAvancee,
        );
        const lAvecCategories =
          aAvecCategories !== false && lAvecDiscussionAvancee;
        let lLibelleEtiquetteToutes =
          'Toutes';
        if (
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent ||
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent
        ) {
          lLibelleEtiquetteToutes = 'Mes messages';
        }
        let lElement = new ObjetElement_1.ObjetElement(
          lLibelleEtiquetteToutes,
          lGetNumeroBidon(),
        );
        lElement.toutes = true;
        aListeEtiquettes.addElement(lElement);
        if (lAvecDiscussionAvancee) {
          lElement = new ObjetElement_1.ObjetElement(
            'En cours',
            lGetNumeroBidon(),
          );
          lElement.enCours = true;
          aListeEtiquettes.insererElement(lElement, 1);
        }
        let lCumulEtiquettesPerso = null;
        if (lAvecCategories) {
          lCumulEtiquettesPerso = new ObjetElement_1.ObjetElement(
            Categorie_1.TradCategorie.categories,
            lGetNumeroBidon(),
          );
          lCumulEtiquettesPerso.cumulEtiquettePerso = true;
          lCumulEtiquettesPerso.estUnDeploiement = true;
          lCumulEtiquettesPerso.estDeploye = false;
          lCumulEtiquettesPerso.nonSelectionnable = true;
          aListeEtiquettes.addElement(lCumulEtiquettesPerso);
          aListeEtiquettes.add(
            ObjetElement_1.ObjetElement.create({
              pere: lCumulEtiquettesPerso,
              Libelle: Categorie_1.TradCategorie.sansCategorie,
              estSansEtiquette: true,
            }),
          );
          lElement = new ObjetElement_1.ObjetElement(
            Categorie_1.TradCategorie.editerCategories,
            lGetNumeroBidon(),
          );
          lElement.categories = true;
          lElement.pere = lCumulEtiquettesPerso;
          lElement.nonSelectionnable = true;
          aListeEtiquettes.addElement(lElement);
          lElement = new ObjetElement_1.ObjetElement(
            'Historiques',
          );
          lElement.estInterTitreHistorique = true;
          lElement.estInterTitre = ObjetListe_1.ObjetListe.typeInterTitre.h5;
          lElement.nonSelectionnable = true;
          aListeEtiquettes.addElement(lElement);
        }
        if (
          [
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur,
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimProfesseur,
          ].includes(GEtatUtilisateur.GenreEspace) &&
          this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionEleves,
          )
        ) {
          aListeEtiquettes.add(
            ObjetElement_1.ObjetElement.create({
              Libelle: 'Mes élèves',
              Numero: lGetNumeroBidon(),
              estFiltreDiscussionMesEleves: true,
            }),
          );
        }
        aListeEtiquettes.parcourir((aEtiquette) => {
          if (
            TypeOrigineCreationEtiquetteMessage_1.TypeOrigineCreationEtiquetteMessageUtil.estEtiquettePerso(
              aEtiquette.getGenre(),
            )
          ) {
            if (lCumulEtiquettesPerso) {
              aEtiquette.pere = lCumulEtiquettesPerso;
            }
            if (aEtiquette.couleur) {
              aEtiquette.libelleHtml =
                '<div class="InlineBlock AlignementMilieuVertical PetitEspaceDroit">' +
                UtilitaireMessagerie_1.UtilitaireMessagerie.dessinCouleurEtiquette(
                  aEtiquette,
                ) +
                '</div>' +
                '<div class="InlineBlock AlignementMilieuVertical">' +
                aEtiquette.getLibelle() +
                '</div>';
            }
          }
        });
        const lEstPrimParent =
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent ||
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent;
        const lTriEtiquettes = [];
        if (lEstPrimParent) {
          lTriEtiquettes.push(
            ObjetTri_1.ObjetTri.init((D) => {
              return (
                D.getGenre() !==
                TypeOrigineCreationEtiquetteMessage_1
                  .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_CarnetLiaison
              );
            }),
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.toutes;
            }),
          );
        } else {
          lTriEtiquettes.push(
            ObjetTri_1.ObjetTri.init((D) => {
              return lAvecDiscussionAvancee ? !D.enCours : !D.toutes;
            }),
            ObjetTri_1.ObjetTri.init((D) => {
              return (
                D.getGenre() !==
                TypeOrigineCreationEtiquetteMessage_1
                  .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Brouillon
              );
            }),
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.cumulEtiquettePerso;
            }),
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.estSansEtiquette;
            }),
            ObjetTri_1.ObjetTri.init((D) => {
              return !TypeOrigineCreationEtiquetteMessage_1.TypeOrigineCreationEtiquetteMessageUtil.estEtiquettePerso(
                D.getGenre(),
              );
            }),
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.categories;
            }),
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.estInterTitreHistorique;
            }),
            ObjetTri_1.ObjetTri.init((D) => {
              return (
                D.getGenre() !==
                TypeOrigineCreationEtiquetteMessage_1
                  .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_CarnetLiaison
              );
            }),
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.estFiltreDiscussionMesEleves;
            }),
          );
        }
        lTriEtiquettes.push(
          ObjetTri_1.ObjetTri.init((D) => {
            return (
              D.getGenre() !==
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Conversation
            );
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return (
              D.getGenre() !==
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Alerte
            );
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return (
              D.getGenre() !==
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_ContactVS
            );
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return (
              D.getGenre() !==
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Harcelement
            );
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return !D.toutes;
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return (
              D.getGenre() !==
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Archive
            );
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return (
              D.getGenre() !==
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle
            );
          }),
          ObjetTri_1.ObjetTri.init('Libelle'),
        );
        aListeEtiquettes.setTri(lTriEtiquettes).trier();
      }
    }
    exports.MoteurMessagerie = MoteurMessagerie;
    (function (MoteurMessagerie) {
      let TypeApresSaisieMessage;
      (function (TypeApresSaisieMessage) {
        TypeApresSaisieMessage['vider'] = 'vider';
      })(
        (TypeApresSaisieMessage =
          MoteurMessagerie.TypeApresSaisieMessage ||
          (MoteurMessagerie.TypeApresSaisieMessage = {})),
      );
    })(MoteurMessagerie || (exports.MoteurMessagerie = MoteurMessagerie = {}));
    var TypeCommandeAvertissementsMessage;
    (function (TypeCommandeAvertissementsMessage) {
      TypeCommandeAvertissementsMessage['purger'] = 'purger';
      TypeCommandeAvertissementsMessage['viderCorbeille'] = 'viderCorbeille';
      TypeCommandeAvertissementsMessage['corbeilleInactif'] =
        'corbeilleInactif';
    })(
      TypeCommandeAvertissementsMessage ||
        (TypeCommandeAvertissementsMessage = {}),
    );
  },
  fn: 'moteurmessagerie.js',
});