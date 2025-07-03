IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MoteurMessagerie = void 0;
    const UtilitaireMessagerie_1 = require('UtilitaireMessagerie');
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const ObjetElement_1 = require('ObjetElement');
    const TypeOrigineCreationEtiquetteMessage_1 = require('TypeOrigineCreationEtiquetteMessage');
    const ObjetTri_1 = require('ObjetTri');
    const ObjetRequeteListeMessagerie_1 = require('ObjetRequeteListeMessagerie');
    const ObjetRequeteListeMessages_1 = require('ObjetRequeteListeMessages');
    const ObjetRequeteSaisieMessage_1 = require('ObjetRequeteSaisieMessage');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const Enumere_Action_1 = require('Enumere_Action');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_TriElement_1 = require('Enumere_TriElement');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_EvenementObjetSaisie_1 = require('Enumere_EvenementObjetSaisie');
    const ObjetDate_1 = require('ObjetDate');
    const tag_1 = require('tag');
    const Invocateur_1 = require('Invocateur');
    const Enumere_Onglet_1 = require('Enumere_Onglet');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const TypeCommandeMessagerie_1 = require('TypeCommandeMessagerie');
    const Enumere_MenuCtxModeMixte_1 = require('Enumere_MenuCtxModeMixte');
    const TypeGenreDiscussion_1 = require('TypeGenreDiscussion');
    const MultipleObjetFenetre_ListeCategoriesDiscussion = require('ObjetFenetre_ListeCategoriesDiscussion');
    const ToucheClavier_1 = require('ToucheClavier');
    const ObjetMenuCtxMixte_1 = require('ObjetMenuCtxMixte');
    const ObjetListe_1 = require('ObjetListe');
    const Enumere_DonneesPersonnelles_1 = require('Enumere_DonneesPersonnelles');
    let uFenetreAvertissementASignaler = null;
    let uFenetreAvertissement = null;
    class MoteurMessagerie {
      constructor() {
        this.applicationSco = GApplication;
        this.options = {
          instance: null,
          avecCategoriesListeEtiquettes: true,
          estChat: false,
          discussionSelectionneeUniquementVisible: false,
          estDiscussionCommune: false,
          avecFiltreNonLues: false,
          avecTiny:
            UtilitaireMessagerie_1.UtilitaireMessagerie.avecEditeurTiny(),
          callbackBrouillonAvantSaisie: null,
          callbackAvantSaisie: null,
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
          { message: null, marquerCommeLu: false, nbMessagesVus: undefined },
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
                    .then(() => {
                      if (aParamsCallbackApresSaisie) {
                        return this.options.callbackApresSaisie(
                          aParamsCallbackApresSaisie,
                        );
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
                  brouillon: null,
                  messagePourReponse: null,
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
      avecIconeAvertissementListeMessagerie() {
        const lResult = this._avecAvertissementListeMessagerie();
        if (lResult) {
          if (uFenetreAvertissementASignaler === null) {
            uFenetreAvertissementASignaler = true;
          }
        }
        return lResult;
      }
      ouvrirFenetreAvertissement(aSurInitialisation) {
        if (
          aSurInitialisation &&
          !uFenetreAvertissementASignaler &&
          !uFenetreAvertissement
        ) {
          return;
        }
        if (uFenetreAvertissement) {
          uFenetreAvertissement.fermer();
          uFenetreAvertissement = null;
        }
        if (!this._avecAvertissementListeMessagerie()) {
          return;
        }
        uFenetreAvertissementASignaler = false;
        const lTitreFenetre = IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str('i', { class: 'icon_warning_sign' }),
          ' ',
          'Attention',
        );
        uFenetreAvertissement =
          ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
            ObjetFenetre_1.ObjetFenetre,
            { pere: this.options.instance },
            {
              largeur: 500,
              modale: false,
              cssFenetre: 'fenetre-messagerie-avertissement',
              titre: lTitreFenetre,
              listeBoutons: [
                'Fermer',
              ],
              callbackFermer: function () {
                uFenetreAvertissement = null;
              },
              identConservationCoordonnees: 'FenetreAvertissMotMess',
            },
          );
        uFenetreAvertissement.afficher(this._construirePanelAvertissement());
      }
      addCommandesMenuContextuelDiscussion(aParams) {
        const lParams = Object.assign(
          {
            moteur: this,
            message: null,
            listeMessages: null,
            listeMessagerie: this.donneesListeMessagerie.listeMessagerie,
            listeEtiquettes: this.donneesListeMessagerie.listeEtiquettes,
            menuContextuel: null,
            strSuperAdministrateurs:
              this.donneesListeMessagerie.strSuperAdministrateurs,
            callback: null,
            avecListeDestinataires: IE.estMobile,
            avecCommandes: true,
          },
          aParams,
        );
        if (lParams.avecListeDestinataires) {
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
            messageListeSelection: null,
            messageVisu: null,
            listeMessages:
              new ObjetListeElements_1.ObjetListeElements().addElement(
                aParams.messageVisu,
              ),
            elementCibleCopie: null,
            listeMessagerie: this.donneesListeMessagerie.listeMessagerie,
            listeEtiquettes: this.donneesListeMessagerie.listeEtiquettes,
            menuContextuel: null,
            strSuperAdministrateurs:
              this.donneesListeMessagerie.strSuperAdministrateurs,
            callback: null,
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
      ouvrirFenetreListeCategoriesDiscussion(
        aListeMessages,
        aListeEtiquettes,
        aCallback,
      ) {
        if (MultipleObjetFenetre_ListeCategoriesDiscussion) {
          let lAvecModif = false;
          const lFenetreListeCategoriesDiscussion =
            ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
              MultipleObjetFenetre_ListeCategoriesDiscussion.ObjetFenetre_ListeCategoriesDiscussion,
              { pere: this.options.instance },
              {
                surSaisieEtiquette: function () {
                  lAvecModif = true;
                },
                callbackFermer: function () {
                  if (lAvecModif) {
                    aCallback();
                  }
                },
              },
            );
          lFenetreListeCategoriesDiscussion.setDonnees({
            listeEtiquettes: aListeEtiquettes,
            listeMessages: aListeMessages,
          });
        }
      }
      getInfosTitreDroite(aMessage) {
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
            lInitiateur = lDiscussionRacine.initiateur;
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
        const lOptions = Object.assign(
          {
            instance: null,
            avecMenuActions: false,
            avecMenuPublic: false,
            callbackMenu: null,
          },
          aOptions,
        );
        const lThis = this;
        const lInstance = lOptions.instance || this.options.instance;
        const lControleur = lInstance.controleur;
        if (!lControleur) {
          return '';
        }
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
        const lIcone =
          UtilitaireMessagerie_1.UtilitaireMessagerie.getIconeMessage(aMessage);
        const H = [];
        if (lIcone) {
          H.push(
            IE.jsx.str('i', {
              class: [lIcone, 'icon-titre'],
              'aria-hidden': 'true',
            }),
          );
        }
        H.push(
          (0, tag_1.tag)(
            'div',
            { class: 'titre' },
            (0, tag_1.tag)('h2', { 'ie-ellipsis': true }, lInfosTitre.titre),
            lSousTitre
              ? (0, tag_1.tag)(
                  'div',
                  {
                    class: 'ie-sous-titre',
                    'ie-ellipsis': true,
                    'ie-hint':
                      lAvecInfosParticipants && !lOptions.ieNodeSousTitre
                        ? 'moteurMessagerie.hintPublicBandeauDroite'
                        : false,
                    'ie-node':
                      lAvecInfosParticipants && lOptions.ieNodeSousTitre
                        ? 'moteurMessagerie.nodePublicBandeauDroite'
                        : false,
                  },
                  lSousTitre,
                )
              : '',
          ),
        );
        if (
          lOptions.callbackMenu &&
          (lOptions.avecMenuPublic || lOptions.avecMenuActions)
        ) {
          H.push(
            IE.jsx.str('div', {
              'ie-identite': 'moteurMessagerie.getCtxMixteBandeauDroite',
            }),
          );
        }
        if (!lControleur.moteurMessagerie) {
          lControleur.moteurMessagerie = {};
        }
        lControleur.moteurMessagerie.hintPublicBandeauDroite = function () {
          return UtilitaireMessagerie_1.UtilitaireMessagerie.getStrHintPublicMessagePromise(
            lInstance,
            aMessage.messagePourParticipants.getNumero(),
            true,
            false,
            this.node,
          );
        };
        if (lOptions.ieNodeSousTitre) {
          lControleur.moteurMessagerie.nodePublicBandeauDroite = function () {
            return lOptions.ieNodeSousTitre(
              this.node,
              aMessage.messagePourParticipants.getNumero(),
            );
          };
        }
        lControleur.moteurMessagerie.getCtxMixteBandeauDroite = function () {
          return {
            class: ObjetMenuCtxMixte_1.ObjetMenuCtxMixte,
            pere: lInstance,
            init: function (aMenuCtxMixte) {
              lThis.menuCtxMixteBandeauDroite = aMenuCtxMixte;
              aMenuCtxMixte.setOptions({
                callbackAddCommandes: function (aMenu) {
                  lThis.addCommandesMenuContextuelDiscussion({
                    avecListeDestinataires: lOptions.avecMenuPublic,
                    avecCommandes: lOptions.avecMenuActions,
                    message: aMessage,
                    menuContextuel: aMenu,
                    callback: function (aParams, aCommande) {
                      lOptions.callbackMenu(aParams, aCommande);
                    },
                  });
                },
              });
            },
            destroy: function () {
              lThis.menuCtxMixteBandeauDroite = null;
            },
          };
        };
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
              { icon: 'icon_intervenants' },
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
                  icon: 'icon_archiver_discussion',
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
                null,
                { icon: 'icon_transferer_discussion' },
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
                { icon: 'icon_warning_sign' },
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
              !!MultipleObjetFenetre_ListeCategoriesDiscussion &&
              !!MultipleObjetFenetre_ListeCategoriesDiscussion.ObjetFenetre_ListeCategoriesDiscussion
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
                  ? 'Classer'
                  : 'Classer',
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
                { icon: 'icon_classer_discussion' },
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
                  icon: 'icon_trash',
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
                { icon: 'icon_undo' },
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
                { icon: 'icon_purger_messages' },
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
                { icon: 'icon_trash' },
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
                { icon: lLu ? 'icon_eye_open' : 'icon_eye_close' },
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
                { icon: 'icon_discussion_terminee' },
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
                { icon: 'icon_sortir_reintegrer_conversation' },
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
                { icon: 'icon_edit' },
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
                null,
                { icon: 'icon_affichage_widget' },
              );
            }
            break;
          case TypeCommandeMessagerie_1.TypeCommandeMessagerie
            .copierContenuVisu:
            if (
              aParams.messageVisu &&
              aParams.elementCibleCopie &&
              global.getSelection &&
              global.getSelection() &&
              global.getSelection().selectAllChildren
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
                { icon: 'icon_copier_liste' },
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
                { icon: 'icon_discussion_repondu' },
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
                { icon: 'icon_eye_open' },
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
        const H = [];
        H.push(
          '<b>',
          'Purge des anciens messages (discussions avec élèves et responsables)',
          '</b>',
          '<br>',
          '<br>',
          '<div class="listeMessagerie_messConfirm">',
          '<div class="Insecable">',
          'Seuls les',
          '</div>',
          '<div><ie-combo ie-model="combo"></ie-combo></div>',
          '<div>',
          'derniers messages',
          '</div>',
          '</div>',
          aPurgeSelection
            ? 'de la discussion sélectionnée seront conservés.'
            : 'de toutes vos discussions avec des élèves et responsables seront conservés.',
          '<br><br>',
          ObjetChaine_1.GChaine.replaceRCToHTML(
            'Tous les anciens messages non archivés vont être définitivement supprimés pour tous les destinataires.\nConfirmez-vous cette suppression ?',
          ),
        );
        const lChoix = [10, 20, 50, 100];
        const lIndiceSelection = 1;
        let lNbMaxMessages = lChoix[lIndiceSelection];
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        lChoix.forEach((aVal) => {
          lListe.addElement(new ObjetElement_1.ObjetElement(aVal + '', aVal));
        });
        const lControleur = {
          combo: {
            init: function (aCombo) {
              aCombo.setOptionsObjetSaisie({ longueur: 35 });
              aCombo.setDonnees(lListe, lIndiceSelection);
            },
            event: function (aParametres) {
              if (
                aParametres.genreEvenement ===
                  Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                    .selection &&
                aParametres.element
              ) {
                lNbMaxMessages = aParametres.element.getNumero();
              }
            },
          },
        };
        const lAction = await this.applicationSco
          .getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: H.join(''),
            controleur: lControleur,
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
        lFenetre.controleur.input = {
          getValue: function () {
            return lObjet;
          },
          setValue: function (aValue) {
            lObjet = aValue;
          },
          node: function () {
            $(this.node).on('keyup', (aEvent) => {
              if (
                aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot
              ) {
                lFenetre.setBoutonFocus({ valider: true });
              }
            });
          },
        };
        lFenetre.controleur.fenetreBtn.getDisabled = function (aBoutonRepeat) {
          return aBoutonRepeat.element.valider && !lObjet;
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
                'ie-model': 'input',
                'ie-trim': 'true',
                maxlength:
                  UtilitaireMessagerie_1.UtilitaireMessagerie
                    .C_TailleObjetMessage,
              }),
            ),
          )
          .then((aParams) => {
            if (aParams.bouton && aParams.bouton.valider && lObjet) {
              return {
                commande: 'modificationObjetDiscussion',
                possessionMessage: aMessage.dernierPossessionMessage,
                objet: lObjet,
              };
            }
          });
      }
      _avecAvertissementListeMessagerie() {
        return !!(
          this.donneesListeMessagerie &&
          (this.donneesListeMessagerie.avertissements ||
            this.donneesListeMessagerie.messagerieDesactivee)
        );
      }
      _construirePanelAvertissement() {
        const lAvertissements = this.donneesListeMessagerie
          ? this.donneesListeMessagerie.avertissements
          : null;
        const lThis = this;
        uFenetreAvertissement.controleur._panelAvert_ = {
          nodeAvertissements: function (aGenre) {
            $(this.node).eventValidation(() => {
              switch (aGenre) {
                case TypeCommandeAvertissementsMessage.purger:
                  lThis
                    ._getCommandePurgerMessagesPromise(
                      false,
                      lThis.donneesListeMessagerie.listeMessagerie,
                    )
                    .then((aCommandePurger) => {
                      if (aCommandePurger) {
                        return lThis.requeteSaisieMessage(
                          aCommandePurger,
                          true,
                        );
                      }
                    });
                  break;
                case TypeCommandeAvertissementsMessage.viderCorbeille:
                  lThis.saisieViderCorbeille(lAvertissements.nbCorbeille);
                  break;
                case TypeCommandeAvertissementsMessage.corbeilleInactif:
                  lThis._discussionsInactivesDansCorbeille();
                  break;
                default:
              }
            });
          },
          btnRecupererMessageDesactivation: {
            event: () => {
              lThis.requeteSaisieMessage(
                { commande: 'recupererMessageDesactivation' },
                true,
              );
            },
          },
          btnModifierPreferencesDesactivation: {
            event: function () {
              GEtatUtilisateur.setGenreAffichageCompteSelectionne(
                Enumere_DonneesPersonnelles_1.TypeFiltreAffichage.deconnexion,
              );
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.navigationOnglet,
                Enumere_Onglet_1.EGenreOnglet.InfosPerso,
              );
            },
          },
        };
        const H = [];
        H.push('<div class="panelAvert-conteneur">');
        if (lAvertissements) {
          H.push('<div>');
          H.push(
            '<b>',
            'Attention, votre messagerie contient plus de %d messages !',
            '</b>',
            '<br><br>',
            'Nous vous conseillons de ne conserver que les messages qui vous sont utiles :',
            '<ul>',
            '<li>',
            'Archivez les discussions que vous souhaitez conserver et supprimez les autres.',
            '</li>',
            '<li>',
            'Mettez fin à vos discussions une fois le sujet traité.',
            '</li>',
          );
          if (lAvertissements.avecPurge) {
            H.push(
              '<li><a class="Lien link"',
              ObjetHtml_1.GHtml.composeAttr(
                'ie-node',
                '_panelAvert_.nodeAvertissements',
                [TypeCommandeAvertissementsMessage.purger],
              ),
              ' tabindex="0">',
              'Purgez les anciens messages de vos discussions avec des élèves et responsables.',
              '</a></li>',
            );
          }
          H.push(
            '<li><a class="Lien link"',
            ObjetHtml_1.GHtml.composeAttr(
              'ie-node',
              '_panelAvert_.nodeAvertissements',
              [TypeCommandeAvertissementsMessage.corbeilleInactif],
            ),
            ' tabindex="0">',
            'Mettez à la corbeille les discussions inactives.',
            '</a></li>',
          );
          if (lAvertissements.nbCorbeille > 0) {
            H.push(
              '<li><a class="Lien link"',
              ObjetHtml_1.GHtml.composeAttr(
                'ie-node',
                '_panelAvert_.nodeAvertissements',
                [TypeCommandeAvertissementsMessage.viderCorbeille],
              ),
              ' tabindex="0">',
              'Videz la corbeille.',
              '</a></li>',
            );
          }
          H.push('</ul>');
          H.push('</div>');
        }
        if (this.donneesListeMessagerie.messagerieDesactivee) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'panelAvert-conteneur-desactive' },
              IE.jsx.str(
                'b',
                null,
                'Vous avez temporairement désactivé la réception de messages',
              ),
              IE.jsx.str(
                'ie-bouton',
                {
                  'ie-model': '_panelAvert_.btnRecupererMessageDesactivation',
                  class:
                    Type_ThemeBouton_1.TypeThemeBouton.neutre + ' small-bt',
                },
                'Récupérer les messages non reçus',
              ),
              IE.jsx.str(
                'ie-bouton',
                {
                  'ie-model':
                    '_panelAvert_.btnModifierPreferencesDesactivation',
                  class:
                    Type_ThemeBouton_1.TypeThemeBouton.neutre + ' small-bt',
                },
                'Modifier mes préférences de désactivation',
              ),
            ),
          );
        }
        H.push('</div>');
        return H.join('');
      }
      _discussionsInactivesDansCorbeille() {
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
                IE.jsx.str('ie-combo', { 'ie-model': 'combo' }),
              ),
              IE.jsx.str(
                'div',
                null,
                'derniers jours ?',
              ),
            ),
          ),
        );
        const lChoix = [15, 30, 60];
        const lIndiceSelection = 0;
        let lNbJours = lChoix[lIndiceSelection];
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        lChoix.forEach((aVal) => {
          lListe.addElement(new ObjetElement_1.ObjetElement(aVal + '', aVal));
        });
        const lControleur = {
          combo: {
            init: function (aCombo) {
              aCombo.setOptionsObjetSaisie({ longueur: 25 });
              aCombo.setDonnees(lListe, lIndiceSelection);
            },
            event: function (aParametres) {
              if (
                aParametres.genreEvenement ===
                  Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                    .selection &&
                aParametres.element
              ) {
                lNbJours = aParametres.element.getNumero();
              }
            },
          },
        };
        this.applicationSco
          .getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: H.join(''),
            controleur: lControleur,
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
              return D.getGenre() === Enumere_Ressource_1.EGenreRessource.Eleve;
            })
            .count();
          const lNbResponsables = aMessage.listeDestinataires
            .getListeElements((D_1) => {
              return (
                D_1.getGenre() ===
                Enumere_Ressource_1.EGenreRessource.Responsable
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
              throw new ErrorControleNbDest();
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
            Enumere_Espace_1.EGenreEspace.PrimParent ||
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.EGenreEspace.Mobile_PrimParent
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
            'Catégories',
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
              Libelle: 'Sans catégorie',
              estSansEtiquette: true,
            }),
          );
          lElement = new ObjetElement_1.ObjetElement(
            'Éditer les catégories',
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
            Enumere_Espace_1.EGenreEspace.PrimProfesseur,
            Enumere_Espace_1.EGenreEspace.Mobile_PrimProfesseur,
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
            Enumere_Espace_1.EGenreEspace.PrimParent ||
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.EGenreEspace.Mobile_PrimParent;
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
    class ErrorControleNbDest extends Error {
      constructor() {
        super(...arguments);
        this.refus = true;
        this.refus_controleNbDest = true;
      }
    }
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