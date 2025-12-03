IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireMessagerie = UtilitaireMessagerie;
    require('UtilitaireMessagerie.css');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetStyle_1 = require('ObjetStyle');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const ObjetTri_1 = require('ObjetTri');
    const TypeGenreDiscussion_1 = require('TypeGenreDiscussion');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const TypeOrigineCreationEtiquetteMessage_1 = require('TypeOrigineCreationEtiquetteMessage');
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const Enumere_Action_1 = require('Enumere_Action');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const TypeHttpReponseMessage_1 = require('TypeHttpReponseMessage');
    const ObjetSupport_1 = require('ObjetSupport');
    const TypeStatutConnexion_1 = require('TypeStatutConnexion');
    const tag_1 = require('tag');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const UtilitaireUrl_1 = require('UtilitaireUrl');
    const ObjetRequeteListePublics_1 = require('ObjetRequeteListePublics');
    const ObjetRequeteListeRessourcesPourCommunication_1 = require('ObjetRequeteListeRessourcesPourCommunication');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetFenetre_SelectionPublic_1 = require('ObjetFenetre_SelectionPublic');
    const ObjetFenetre_SelectionPublic_PN_1 = require('ObjetFenetre_SelectionPublic_PN');
    const UtilitaireFenetreSelectionPublic_1 = require('UtilitaireFenetreSelectionPublic');
    const Cache_1 = require('Cache');
    const ObjetRequeteListeDiffusion_1 = require('ObjetRequeteListeDiffusion');
    const ObjetFenetre_SelectionListeDiffusion_1 = require('ObjetFenetre_SelectionListeDiffusion');
    const DonneesListe_SelectionDiffusion_1 = require('DonneesListe_SelectionDiffusion');
    const MethodesObjet_1 = require('MethodesObjet');
    const GUID_1 = require('GUID');
    const jsx_1 = require('jsx');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const Divers_css_1 = require('Divers.css');
    const C_TailleObjetMessage = 200;
    function UtilitaireMessagerie() {}
    UtilitaireMessagerie.palierNbMessages = 20;
    UtilitaireMessagerie.C_TailleObjetMessage = C_TailleObjetMessage;
    UtilitaireMessagerie.getDiscussion = function (aParam) {
      const H = [];
      let J;
      const lParams = Object.assign(
        {
          listeMessages: null,
          controleur: null,
          pere: null,
          callbackCommandesMessage: null,
          callbackBtnSignalantPourSupp: null,
          callbackAfficherSuivants: null,
        },
        aParam,
      );
      const lGUIDSyntheseVocale = GUID_1.GUID.getId();
      const lControleur = {};
      let lAvecCommandes = false;
      if (
        lParams.callbackCommandesMessage &&
        lParams.controleur &&
        !GApplication.droits.get(
          ObjetDroitsPN_1.TypeDroits.communication.discussionInterdit,
        )
      ) {
        lAvecCommandes = true;
        Object.assign(lControleur, {
          lireTexte: function (aIndice) {
            const lResult = [];
            const lMessage = lParams.listeMessages.get(aIndice);
            const lNextIndice = aIndice > 0 ? aIndice - 1 : undefined;
            if (lMessage.estUnAparte) {
              lResult.push(
                'Cette discussion ne concerne qu'une partie des destinataires',
              );
            }
            const lChaine =
              UtilitaireMessagerie.getLibelleParticipantsSyntheseVocale(
                lParams.pere,
                lMessage,
                this.node,
              );
            lResult.push(lChaine);
            if (lMessage.messageSignale) {
              lResult.push(lMessage.messageSignale + '. ');
            }
            if (lMessage.contenu) {
              let lContenu;
              if (lMessage.estHTML) {
                const lJNode = $(lMessage.contenu);
                lContenu = lJNode.text() || lJNode.val();
              } else {
                lContenu = lMessage.contenu.enleverEntites();
              }
              lResult.push(lContenu + '. ');
            }
            if (
              lMessage.listeDocumentsJoints &&
              lMessage.listeDocumentsJoints.count() > 0
            ) {
              lResult.push(
                lMessage.listeDocumentsJoints.getTableauLibelles().length > 1
                  ? 'Documents joints'
                  : 'Document joint',
                ' : ',
                lMessage.listeDocumentsJoints.getTableauLibelles().join(', '),
              );
            }
            if (lMessage.listeMessagesPourContexte) {
              const lNbMessagsContexte =
                lMessage.listeMessagesPourContexte.count();
              for (J = lNbMessagsContexte - 1; J >= 0; J--) {
                const lMessagePourContexte =
                  lMessage.listeMessagesPourContexte.get(J);
                let lArrDocs = [];
                if (
                  lMessagePourContexte.listeDocumentsJoints &&
                  lMessagePourContexte.listeDocumentsJoints.count() > 0
                ) {
                  lArrDocs = lArrDocs.concat(
                    lMessagePourContexte.listeDocumentsJoints.getTableauLibelles(),
                  );
                }
                if (lArrDocs.length > 0) {
                  lResult.push(
                    lArrDocs.length > 1
                      ? 'Documents joints'
                      : 'Document joint',
                    ' : ',
                    lArrDocs.join(', '),
                  );
                }
              }
            }
            const lID = lGUIDSyntheseVocale + aIndice.toString();
            const lObj = { text: lResult.join(' '), idCourant: lID };
            if (lNextIndice !== undefined) {
              lObj.idSuivant = lGUIDSyntheseVocale + lNextIndice.toString();
            }
            return lObj;
          },
          nodeCommande: function (aIndice) {
            $(this.node).on('contextmenu', function (aEvent) {
              const lNodeCopie = $(this).find('.visu_contenu').get(0);
              lParams.callbackCommandesMessage({
                indice: aIndice,
                messageVisu: lParams.listeMessages.get(aIndice),
                event: aEvent,
                elementCibleCopie: lNodeCopie,
                surMenuContextuel: true,
              });
            });
          },
          btnCommande: {
            event: function (aIndice, aEvent) {
              const lNodeCopie = $(this.node)
                .closest('li.message')
                .find('.visu_contenu')
                .get(0);
              lParams.callbackCommandesMessage({
                node: this.node,
                indice: aIndice,
                messageVisu: lParams.listeMessages.get(aIndice),
                event: aEvent,
                elementCibleCopie: lNodeCopie,
              });
            },
          },
        });
      }
      if (lParams.callbackAfficherSuivants) {
        Object.assign(lControleur, {
          onview: function (aNbMessages, aVisible) {
            if (aVisible) {
              lParams.callbackAfficherSuivants(aNbMessages);
              return false;
            }
          },
          lienAfficherSuivants: function (aNbMessages) {
            $(this.node).eventValidation(() => {
              lParams.callbackAfficherSuivants(aNbMessages);
            });
          },
        });
      }
      if (lParams.controleur) {
        lParams.controleur.__visuMessage__ = lControleur;
      }
      const lNbMessages = aParam.listeMessages.count();
      if (
        lParams.callbackAfficherSuivants &&
        aParam.nbMessagesTotal > 0 &&
        lNbMessages < aParam.nbMessagesTotal
      ) {
        H.push(
          '<div style="padding-top:5px;"',
          ObjetHtml_1.GHtml.composeAttr(
            'ie-visibility-observer',
            '__visuMessage__.onview',
            [lNbMessages + UtilitaireMessagerie.palierNbMessages],
          ),
          '>',
        );
        if (
          lNbMessages + UtilitaireMessagerie.palierNbMessages <
          aParam.nbMessagesTotal
        ) {
          H.push(
            '<div style="padding-top:5px; text-align:center;">',
            '<a tabindex="-1"',
            ObjetHtml_1.GHtml.composeAttr(
              'ie-node',
              '__visuMessage__.lienAfficherSuivants',
              [lNbMessages + UtilitaireMessagerie.palierNbMessages],
            ),
            ' class="LienAccueil AvecMain">',
            ObjetChaine_1.GChaine.format(
              'Afficher les %d messages suivants',
              [
                Math.min(
                  UtilitaireMessagerie.palierNbMessages,
                  aParam.nbMessagesTotal - lNbMessages,
                ),
              ],
            ),
            '</a>',
            '</div>',
          );
        }
        H.push('</div>');
      }
      H.push(
        (0, tag_1.tag)('ul', { class: 'utilMess_visu_messages' }, (H) => {
          for (let I = lNbMessages - 1; I >= 0; I--) {
            const lMessage = aParam.listeMessages.get(I);
            H.push(
              (0, tag_1.tag)(
                'li',
                {
                  class: [
                    'AvecSelectionTexte',
                    'message',
                    lMessage.brouillon ? 'brouillon' : '',
                    lMessage.emetteur ? 'emetteur' : '',
                    lMessage.estUnAparte ? 'aparte' : '',
                  ],
                  tabindex: 0,
                  'ie-synthesevocale': tag_1.tag.funcAttr(
                    '__visuMessage__.lireTexte',
                    I,
                  ),
                  'ie-node': lAvecCommandes
                    ? tag_1.tag.funcAttr('__visuMessage__.nodeCommande', I)
                    : '',
                },
                (H) => {
                  if (lMessage.estUnAparte) {
                    H.push(
                      IE.jsx.str('i', {
                        class: 'aparte icon_sous_discussion',
                        title: 'Cette discussion ne concerne qu'une partie des destinataires',
                      }),
                    );
                  }
                  const lLibelleParticipants =
                    UtilitaireMessagerie.getLibelleParticipants(
                      lMessage,
                      false,
                      aParam.btnModel,
                    );
                  const lMessageTitreDroite = IE.jsx.str(
                    'div',
                    { class: 'message_titre_droite' },
                    lMessage.libelleDate,
                    IE.jsx.str(
                      'div',
                      null,
                      UtilitaireMessagerie.dessinListeEtiquettes(
                        lMessage.listeEtiquettes,
                        true,
                      ),
                    ),
                  );
                  const lBtnCommande = [];
                  if (lAvecCommandes) {
                    lBtnCommande.push(
                      IE.jsx.str('ie-btnicon', {
                        'ie-model': '__visuMessage__.btnCommande(' + I + ')',
                        class: 'icon_ellipsis_vertical noSpeechSynthesis',
                        title:
                          'Cliquer pour déployer les actions',
                        'aria-haspopup': 'menu',
                      }),
                    );
                  }
                  H.push(
                    IE.jsx.str(
                      'div',
                      { class: 'message_titre' },
                      IE.jsx.str(
                        'div',
                        { class: 'flex-contain cols flex-gap' },
                        lLibelleParticipants,
                        lMessageTitreDroite,
                      ),
                      lBtnCommande.join(''),
                    ),
                  );
                  let lJsxModelBoutonSignalantSupp;
                  if (
                    lMessage.estSignalantPourSuppr &&
                    lParams.callbackBtnSignalantPourSupp &&
                    lParams.controleur
                  ) {
                    lJsxModelBoutonSignalantSupp = (aIndice) => {
                      return {
                        event: () => {
                          const lMessageVisu =
                            lParams.listeMessages.get(aIndice);
                          if (lMessageVisu && lMessageVisu.messConfirmSupp) {
                            GApplication.getMessage()
                              .afficher({
                                type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                                  .Confirmation,
                                message: lMessageVisu.messConfirmSupp,
                              })
                              .then((aGenreAction) => {
                                if (
                                  aGenreAction ===
                                  Enumere_Action_1.EGenreAction.Valider
                                ) {
                                  lParams.callbackBtnSignalantPourSupp({
                                    commande: 'supprimerMessageGraphe',
                                    message: lMessageVisu,
                                  });
                                }
                              });
                          }
                        },
                        getDisabled: () => {
                          return GApplication.droits.get(
                            ObjetDroitsPN_1.TypeDroits.estEnConsultation,
                          );
                        },
                      };
                    };
                  }
                  H.push(
                    (0, tag_1.tag)(
                      'div',
                      {
                        class: [
                          'visu_contenu',
                          lMessage.estHTML
                            ? Divers_css_1.StylesDivers.tinyView
                            : '',
                        ],
                      },
                      lMessage.messageSignale
                        ? IE.jsx.str(
                            'div',
                            { class: 'visu_signale' },
                            lMessage.messageSignale,
                          )
                        : '',
                      lMessage.estHTML
                        ? lMessage.contenu
                        : ObjetChaine_1.GChaine.replaceRCToHTML(
                            lMessage.contenu,
                          ),
                      lJsxModelBoutonSignalantSupp
                        ? IE.jsx.str(
                            'ie-bouton',
                            {
                              'ie-model': lJsxModelBoutonSignalantSupp.bind(
                                this,
                                I,
                              ),
                              class: Type_ThemeBouton_1.TypeThemeBouton.neutre,
                            },
                            'Supprimer',
                          )
                        : '',
                    ),
                  );
                  if (
                    lMessage.listeDocumentsJoints &&
                    lMessage.listeDocumentsJoints.count() > 0
                  ) {
                    H.push(_construirePJs(lMessage));
                  }
                  if (lMessage.listeMessagesPourContexte) {
                    const lNbMessagsContexte =
                      lMessage.listeMessagesPourContexte.count();
                    H.push('<hr/>');
                    for (J = lNbMessagsContexte - 1; J >= 0; J--) {
                      const lMessagePourContexte =
                        lMessage.listeMessagesPourContexte.get(J);
                      H.push(
                        (0, tag_1.tag)(
                          'div',
                          { class: 'visu_transfert' },
                          (H) => {
                            H.push(
                              UtilitaireMessagerie.getLibelleParticipants(
                                lMessagePourContexte,
                                true,
                                aParam.btnModel,
                              ),
                            );
                            const lClass =
                              lMessage.estMessageTransferant ||
                              lMessage.estSignalantPourSuppr ||
                              !lMessagePourContexte.emetteur
                                ? 'visu_transfert_indent'
                                : '';
                            H.push(
                              IE.jsx.str(
                                'div',
                                {
                                  class: [
                                    lClass,
                                    Divers_css_1.StylesDivers.tinyView,
                                  ],
                                },
                                lMessagePourContexte.contenu,
                              ),
                            );
                            if (
                              lMessagePourContexte.listeDocumentsJoints &&
                              lMessagePourContexte.listeDocumentsJoints.count() >
                                0
                            ) {
                              H.push(
                                IE.jsx.str(
                                  'div',
                                  { class: lClass },
                                  _construirePJs(lMessagePourContexte),
                                ),
                              );
                            }
                            if (J > 0) {
                              H.push('<hr/>');
                            }
                          },
                        ),
                      );
                    }
                  }
                  let lLibelleSupplementaireDuMessage = null;
                  if (!!lMessage.estCarnetLiaison && !!lMessage.avecDirecteur) {
                    lLibelleSupplementaireDuMessage =
                      '<span class="Image_CocheVerte as-icon InlineBlock AlignementHaut"></span><span class="PetitEspaceGauche">' +
                      'Directeur de l'école ajouté' +
                      '</span>';
                  }
                  if (!!lLibelleSupplementaireDuMessage) {
                    const lStyles = [
                      'position: absolute;',
                      'right: 5px;',
                      'bottom: 0;',
                      'background-color: #FFF;',
                      'border: solid 1px #E4E4E4;',
                      'border-radius: 1em;',
                      'padding: 0 5px;',
                      'transform: translateY(50%);',
                      'height: 1.5em;',
                      'line-height: 1.5em;',
                    ];
                    H.push(
                      '<div style="',
                      lStyles.join(''),
                      '">',
                      lLibelleSupplementaireDuMessage,
                      '</div>',
                    );
                  }
                },
              ),
            );
          }
        }),
      );
      return H.join('');
    };
    UtilitaireMessagerie.estMessageNonEditable = function (aMessage) {
      return (
        !aMessage ||
        aMessage.ferme ||
        aMessage.estSorti ||
        aMessage.estSignalantContenu ||
        aMessage.estSignalantPourSuppr ||
        (!aMessage.estUneDiscussion &&
          aMessage.pere &&
          UtilitaireMessagerie.estMessageNonEditable(
            UtilitaireMessagerie.getDiscussionRacine(aMessage),
          ))
      );
    };
    function _construirePJs(aMessage) {
      return UtilitaireUrl_1.UtilitaireUrl.construireListeUrls(
        aMessage.listeDocumentsJoints,
      );
    }
    UtilitaireMessagerie.getLibelleObjetDiscussion = function (aDiscussion) {
      const H = [];
      if (aDiscussion !== null && aDiscussion !== undefined) {
        H.push(
          (aDiscussion.profondeur ? '' : aDiscussion.objet + '&nbsp;') +
            '(' +
            aDiscussion.nombreMessages +
            ')',
        );
      }
      return H.join('');
    };
    UtilitaireMessagerie.getTitreFenetreDeMessage = function (aMessage) {
      if (aMessage && aMessage.objet) {
        let lStrPublic = '';
        if (aMessage.nbPublic > 1) {
          lStrPublic = '%d participants';
        } else if (aMessage.public) {
          lStrPublic = aMessage.public;
        }
        return aMessage.objet + (lStrPublic ? ` - ${lStrPublic}` : '');
      }
      return '';
    };
    UtilitaireMessagerie.getLibelleDiscussionAccessible = function (
      aDiscussion,
    ) {
      const H = [];
      if (aDiscussion) {
        H.push(UtilitaireMessagerie.getLibelleObjetDiscussion(aDiscussion));
        H.push('&nbsp;-&nbsp;' + aDiscussion.libelleDate);
      }
      return H.join('');
    };
    UtilitaireMessagerie.getDetailDiscussionAccessible = function (
      aDiscussion,
    ) {
      const H = [];
      if (aDiscussion) {
        if (aDiscussion.public) {
          H.push('<div>', aDiscussion.public, '</div>');
        } else {
        }
        if (aDiscussion.documentsJoints) {
          H.push('<div>', aDiscussion.documentsJoints, '</div>');
        }
      }
      return H.join('');
    };
    UtilitaireMessagerie.getLibelleParticipants = function (
      aMessage,
      aPourVisuTransfert = false,
      aBtnModel,
    ) {
      const H = [];
      if (aMessage.estMessageTransferant) {
        H.push(
          '<div>',
          aMessage.nbTransfert > 1
            ? ObjetChaine_1.GChaine.format(
                '%d messages transférés',
                [aMessage.nbTransfert],
              )
            : '1 message transféré',
          '</div>',
        );
      } else {
        H.push(
          '<div class="utilMessParticipants',
          aPourVisuTransfert ? ' transfert' : '',
          '">',
        );
        if (aMessage.brouillon) {
          H.push(
            '<div style="',
            ObjetStyle_1.GStyle.composeCouleurTexte('red'),
            '">[',
            'Brouillon',
            ']</div>',
          );
          if (aPourVisuTransfert) {
            H.push('<div>&nbsp;' + aMessage.libelleDate + '</div>');
          }
        } else {
          if (aMessage.estCarnetLiaison) {
            H.push(
              '<div ie-ellipsis style="max-width:250px;">',
              aMessage.public_gauche,
              '</div>',
            );
          } else {
            const lAvecBtn = aBtnModel && aMessage.nbPublic > 1;
            H.push(
              aMessage.public_gauche
                ? '<span class="participants_public" ' +
                    (aMessage.hint_gauche && !IE.estMobile
                      ? ObjetHtml_1.GHtml.composeAttr(
                          'ie-hint',
                          ObjetChaine_1.GChaine.replaceRCToHTML(
                            aMessage.hint_gauche,
                          ),
                        )
                      : '') +
                    ' ie-ellipsis >' +
                    aMessage.public_gauche +
                    '</span>'
                : IE.jsx.str('ie-btnicon', {
                    class: 'icon_intervenants message-btn-dest',
                    'ie-model': lAvecBtn
                      ? (0, jsx_1.jsxFuncAttr)(aBtnModel, [
                          aMessage.getNumero(),
                          true,
                        ])
                      : false,
                    'aria-haspopup': lAvecBtn ? 'dialog' : false,
                    'aria-label': lAvecBtn
                      ? 'Afficher les participants'
                      : false,
                    'ie-hint':
                      !IE.estMobile && lAvecBtn
                        ? (0, jsx_1.jsxFuncAttr)(aBtnModel + '.hintPublic', [
                            aMessage.getNumero(),
                            true,
                          ])
                        : false,
                  }),
            );
            H.push(
              IE.jsx.str(
                'i',
                {
                  class: ['icone', 'icon_fleche_droite'],
                  'aria-label': 'à',
                  role: 'img',
                },
                ' ',
              ),
            );
            if (aMessage.public_droite) {
              H.push(
                '<span class="participants_public"' +
                  (aMessage.hint_droite && !IE.estMobile
                    ? ObjetHtml_1.GHtml.composeAttr(
                        'ie-hint',
                        ObjetChaine_1.GChaine.replaceRCToHTML(
                          aMessage.hint_droite,
                        ),
                      )
                    : '') +
                  ' ie-ellipsis >' +
                  aMessage.public_droite +
                  ' </span>',
              );
            } else {
              if (!aMessage.brouillon && aMessage.nbPublic > 1) {
                H.push(
                  IE.jsx.str('ie-btnicon', {
                    class: 'icon_intervenants message-btn-dest',
                    'aria-label': 'Afficher les destinataires',
                    'ie-model': lAvecBtn
                      ? (0, jsx_1.jsxFuncAttr)(aBtnModel, [
                          aMessage.getNumero(),
                          false,
                        ])
                      : false,
                    'aria-haspopup': lAvecBtn ? 'dialog' : false,
                    'ie-hint':
                      !IE.estMobile && lAvecBtn
                        ? (0, jsx_1.jsxFuncAttr)(aBtnModel + '.hintPublic', [
                            aMessage.getNumero(),
                            false,
                          ])
                        : false,
                  }),
                );
              }
            }
          }
          if (aPourVisuTransfert) {
            H.push(
              '<div class="regular m-left-l">' +
                aMessage.libelleDate +
                '</div>',
            );
          }
        }
        if (aPourVisuTransfert) {
          H.push(
            UtilitaireMessagerie.dessinListeEtiquettes(
              aMessage.listeEtiquettes,
              true,
            ),
          );
        }
        H.push('</div>');
      }
      return H.join('');
    };
    UtilitaireMessagerie.getLibelleParticipantsSyntheseVocale = function (
      aInstance,
      aMessage,
      aNode,
    ) {
      const H = [];
      if (aMessage.estMessageTransferant) {
        H.push(
          aMessage.nbTransfert > 1
            ? ObjetChaine_1.GChaine.format(
                '%d messages transférés',
                [aMessage.nbTransfert],
              )
            : '1 message transféré',
        );
      } else {
        if (aMessage.brouillon) {
          H.push(
            'Brouillon' +
              '. ',
          );
          H.push(aMessage.libelleDate + '. ');
        } else {
          if (aMessage.estCarnetLiaison) {
            H.push(aMessage.public_gauche + '. ');
          } else {
            if (aMessage.public_gauche) {
              H.push(aMessage.public_gauche);
            }
            H.push('à');
            if (aMessage.public_droite) {
              H.push(aMessage.public_droite + '. ');
            } else {
              if (!aMessage.brouillon && aMessage.nbPublic > 1) {
                const lPublicD = '%d destinataires';
                H.push(lPublicD + '. ');
              }
            }
          }
          H.push(aMessage.libelleDate + '. ');
        }
      }
      return H.join(' ');
    };
    async function getListePublicMessagePromise(
      aInstance,
      aNumeroMessage,
      aEstPublicParticipant,
      aEstDestinatairesReponse,
    ) {
      const lParams = {
        message: new ObjetElement_1.ObjetElement('', aNumeroMessage),
        estPublicParticipant: aEstPublicParticipant,
        estDestinatairesReponse: aEstDestinatairesReponse,
      };
      const lReponse = await new ObjetRequeteSaisiePublicMessage(aInstance)
        .setOptions({ avecControleModeExclusif: false, messageDetail: '' })
        .lancerRequete(lParams);
      if (
        lReponse.genreReponse !== ObjetRequeteJSON_1.EGenreReponseSaisie.succes
      ) {
        return;
      }
      let lListeDest = lReponse.JSONReponse.listeDest;
      if (
        !lListeDest &&
        lReponse.JSONRapportSaisie &&
        lReponse.JSONRapportSaisie.listeDest
      ) {
        lListeDest = lReponse.JSONRapportSaisie.listeDest;
        lListeDest.avecConnection = true;
      }
      if (lListeDest) {
        lListeDest
          .setTri([
            ObjetTri_1.ObjetTri.init('Genre'),
            ObjetTri_1.ObjetTri.init('Position'),
          ])
          .trier();
      }
      return lListeDest;
    }
    UtilitaireMessagerie.afficherFenetreDestinatairesDeMessage =
      async function (
        aNumeroMessage,
        aEstPublicParticipant,
        aEstDestinatairesReponse,
      ) {
        const lListeDest = await getListePublicMessagePromise(
          this,
          aNumeroMessage,
          aEstPublicParticipant,
          aEstDestinatairesReponse,
        );
        if (!lListeDest || lListeDest.count() === 0) {
          return;
        }
        const lHtml = IE.jsx.str(
          'ul',
          { class: 'liste-destinataires' },
          (aTab) => {
            lListeDest.parcourir((aDest) => {
              const lLibelleSupp =
                UtilitaireMessagerie.getStrHintDetailDePublic(aDest);
              aTab.push(
                IE.jsx.str(
                  'li',
                  null,
                  lListeDest.avecConnection
                    ? UtilitaireMessagerie.contruirePublicConnecte(
                        aDest,
                        lLibelleSupp,
                      )
                    : aDest.getLibelle() + lLibelleSupp,
                ),
              );
            });
          },
        );
        ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_1.ObjetFenetre,
          { pere: this },
          {
            titre: aEstPublicParticipant
              ? '%d participants'],
                )
              : 'Liste des destinataires',
            largeur: 450,
            hauteur: !IE.estMobile ? 200 : null,
            hauteurMaxContenu: !IE.estMobile ? 600 : null,
            avecScroll: !IE.estMobile,
            fermerFenetreSurClicHorsFenetre: true,
            listeBoutons: ['Fermer'],
          },
        ).afficher(lHtml);
      };
    UtilitaireMessagerie.getStrHintPublicMessagePromise = async function (
      aInstance,
      aNumeroMessage,
      aEstPublicParticipant,
      aEstDestinatairesReponse,
      aNode,
    ) {
      const lKey = 'strHint' + !!aEstPublicParticipant;
      if (aNode) {
        const lData = $(aNode).data(lKey);
        if (lData) {
          return lData;
        }
      }
      const lListePublics = await getListePublicMessagePromise(
        aInstance,
        aNumeroMessage,
        aEstPublicParticipant,
        aEstDestinatairesReponse,
      );
      let lStr = '&nbsp;';
      if (lListePublics) {
        const lTab = [];
        lListePublics.parcourir((aPublic) => {
          let lLibelleSupp =
            UtilitaireMessagerie.getStrHintDetailDePublic(aPublic);
          if (lListePublics.avecConnection) {
            lTab.push(
              UtilitaireMessagerie.contruirePublicConnecte(
                aPublic,
                lLibelleSupp,
              ),
            );
          } else {
            lTab.push(aPublic.getLibelle() + lLibelleSupp);
          }
        });
        lStr = lTab.join(lListePublics.avecConnection ? '' : '<br>');
        const lNb = lListePublics.count();
        if (lNb > 0) {
          let lStrParticipants;
          if (aEstPublicParticipant) {
            lStrParticipants = '%d participants';
          } else if (lNb > 1) {
            lStrParticipants = '%d destinataires';
          } else {
            lStrParticipants = '%d destinataire';
          }
          lStr = IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str('b', null, lStrParticipants),
            IE.jsx.str('br', null),
            lStr,
          );
        }
      }
      if (aNode) {
        $(aNode).data(lKey, lStr);
      }
      return lStr;
    };
    UtilitaireMessagerie.getStrHintDetailDePublic = function (aPublic) {
      let lLibelle = '';
      if (aPublic.estSorti) {
        lLibelle +=
          '&nbsp;<i class="icon_sortir_reintegrer_conversation" style="font-size:1.1em;"></i>&nbsp;' +
          'Retiré(e)';
      }
      if (aPublic.refusMess) {
        lLibelle = ` - ${'Refuse les discussions'}`;
      }
      return lLibelle;
    };
    UtilitaireMessagerie.getIndiceDiscussion = function (
      aListeMessagerie,
      aMessage,
    ) {
      if (aMessage && aMessage.listePossessionsMessages) {
        for (let I = 0; I < aMessage.listePossessionsMessages.count(); I++) {
          const lPossessionMessage = aMessage.listePossessionsMessages.get(I);
          for (let J = 0; J < aListeMessagerie.count(); J++) {
            const lDiscussion = aListeMessagerie.get(J);
            for (
              let K = 0;
              K < lDiscussion.listePossessionsMessages.count();
              K++
            ) {
              if (
                lPossessionMessage.getNumero() ===
                  lDiscussion.listePossessionsMessages.getNumero(K) &&
                aMessage.estUneDiscussion === lDiscussion.estUneDiscussion &&
                ((aMessage.pere && lDiscussion.pere) ||
                  ((!aMessage.pere ||
                    aMessage.deDossierVS ||
                    aMessage.deRechercheStage) &&
                    !lDiscussion.pere))
              ) {
                return J;
              }
            }
          }
        }
      }
      return null;
    };
    UtilitaireMessagerie.getIndiceDiscussionDeMessageVisu = function (
      aListeMessagerie,
      aMessageVisu,
    ) {
      if (
        !aMessageVisu ||
        !aMessageVisu.possessionMessage ||
        !aListeMessagerie
      ) {
        return;
      }
      const lNumeroPossessionMessage =
        aMessageVisu.possessionMessage.existeNumero()
          ? aMessageVisu.possessionMessage
          : new ObjetElement_1.ObjetElement('', aMessageVisu.getNumero());
      const lMessage = new ObjetElement_1.ObjetElement();
      lMessage.listePossessionsMessages =
        new ObjetListeElements_1.ObjetListeElements();
      lMessage.listePossessionsMessages.addElement(lNumeroPossessionMessage);
      lMessage.estUneDiscussion = false;
      lMessage.pere = true;
      return UtilitaireMessagerie.getIndiceDiscussion(
        aListeMessagerie,
        lMessage,
      );
    };
    UtilitaireMessagerie.getIndicePere = function (aListeMessagerie, aMessage) {
      if (aMessage.indicePere >= 0) {
        return this.getIndicePere(
          aListeMessagerie,
          aListeMessagerie.get(aMessage.indicePere),
        );
      } else {
        return aMessage.indice;
      }
    };
    UtilitaireMessagerie.getDiscussionRacine = function (aMessage) {
      if (aMessage.pere) {
        return UtilitaireMessagerie.getDiscussionRacine(aMessage.pere);
      } else {
        return aMessage;
      }
    };
    UtilitaireMessagerie.estEgal = function (aMessage1, aMessage2) {
      if (aMessage1 && aMessage2) {
        if (aMessage1.estUneDiscussion && aMessage2.estUneDiscussion) {
          return (
            aMessage1.profondeur === aMessage2.profondeur &&
            aMessage1.objet === aMessage2.objet &&
            aMessage1.listePossessionsMessages.count() ===
              aMessage2.listePossessionsMessages.count() &&
            (aMessage1.listePossessionsMessages.count() === 0 ||
              aMessage1.listePossessionsMessages.getNumero(0) ===
                aMessage2.listePossessionsMessages.getNumero(0))
          );
        } else if (!aMessage1.estUneDiscussion && !aMessage2.estUneDiscussion) {
          return aMessage1.getNumero() === aMessage2.getNumero();
        }
      }
      return false;
    };
    UtilitaireMessagerie.avecPossessionPartageeEntreMessages = function (
      aMessage1,
      aMessage2,
    ) {
      let lResult = false;
      if (
        aMessage1 &&
        aMessage2 &&
        aMessage1.listePossessionsMessages &&
        aMessage2.listePossessionsMessages
      ) {
        aMessage1.listePossessionsMessages.parcourir((aPossession) => {
          if (
            aMessage2.listePossessionsMessages.getElementParElement(aPossession)
          ) {
            lResult = true;
            return false;
          }
        });
      }
      return lResult;
    };
    UtilitaireMessagerie.dessinCouleurEtiquette = function (aEtiquette) {
      if (!aEtiquette.couleur) {
        return '';
      }
      return [
        '<div class="utilMess_etiquette" style="',
        ObjetStyle_1.GStyle.composeCouleur(
          aEtiquette.couleur,
          GCouleur.getCouleurCorrespondance(aEtiquette.couleur),
        ),
        '"',
        ' title="',
        ObjetChaine_1.GChaine.toTitle(aEtiquette.getLibelle()),
        '">',
        aEtiquette.abr || '',
        '</div>',
      ].join('');
    };
    UtilitaireMessagerie.dessinListeEtiquettes = function (
      aListeEtiquettes,
      aAvecEspaceGaucheDebut = false,
    ) {
      if (!aListeEtiquettes || !aListeEtiquettes.parcourir) {
        return '';
      }
      const H = [];
      aListeEtiquettes.parcourir((aEtiquette, aIndex) => {
        const lHtml = UtilitaireMessagerie.dessinCouleurEtiquette(aEtiquette);
        if (lHtml) {
          H.push(
            '<div class="InlineBlock AlignementMilieuVertical Maigre',
            aAvecEspaceGaucheDebut && aIndex === 0 ? ' PetitEspaceGauche' : '',
            aIndex < aListeEtiquettes.count() - 1 ? ' PetitEspaceDroit' : '',
            '">',
            lHtml,
            '</div>',
          );
        }
      });
      return H.join('');
    };
    UtilitaireMessagerie.estMessageVisuChat = function (aMessageVisu) {
      if (aMessageVisu) {
        if (aMessageVisu.estChat) {
          return true;
        }
        switch (aMessageVisu.getGenre()) {
          case TypeGenreDiscussion_1.TypeGenreDiscussion.GD_ContactVS:
          case TypeGenreDiscussion_1.TypeGenreDiscussion.GD_Conversation:
          case TypeGenreDiscussion_1.TypeGenreDiscussion.GD_Alerte:
            return true;
        }
      }
      return false;
    };
    UtilitaireMessagerie.contruirePublicConnecte = function (
      aPublic,
      aLibelleSupp,
      aAvecStatutConexion = true,
    ) {
      if (!aPublic) {
        return '';
      }
      return [
        '<div class="utilMess_dest',
        aPublic.refusMess ? ' dest-refus' : '',
        '">',
        aPublic.refusMess
          ? ''
          : '<i class="' +
            TypeStatutConnexion_1.TypeGenreStatutConnexionUtil.getClassIcon(
              aPublic.statutConnexion,
            ) +
            '" aria-hidden="true"></i>',
        '<div class="utilMess_texte" ie-ellipsis>',
        aPublic.getLibelle(),
        aAvecStatutConexion
          ? (0, tag_1.tag)(
              'label',
              '&nbsp;-&nbsp;' +
                UtilitaireMessagerie.contruirePublicConnecteStatutConnexion(
                  aPublic,
                ),
            )
          : '',
        aLibelleSupp || '',
        '</div>',
        '</div>',
      ].join('');
    };
    UtilitaireMessagerie.contruirePublicConnecteStatutConnexion = function (
      aPublic,
    ) {
      if (!aPublic) {
        return '';
      }
      return aPublic.refusMess
        ? 'Refuse les discussions'
        : TypeStatutConnexion_1.TypeGenreStatutConnexionUtil.toLibelle(
            aPublic.statutConnexion,
          );
    };
    UtilitaireMessagerie.getIconeDEtiquette = function (aEtiquette) {
      if (!aEtiquette || !aEtiquette.getGenre) {
        return '';
      }
      const lPrimParent =
        GEtatUtilisateur.GenreEspace ===
          Enumere_Espace_1.EGenreEspace.PrimParent ||
        GEtatUtilisateur.GenreEspace ===
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent;
      if (aEtiquette.toutes) {
        return lPrimParent ? 'icon_discussion_cours' : 'icon_inbox';
      }
      if (aEtiquette.enCours) {
        return 'icon_discussion_cours';
      }
      if (aEtiquette.estFiltreDiscussionMesEleves) {
        return 'icon_utilisateur';
      }
      switch (aEtiquette.getGenre()) {
        case TypeOrigineCreationEtiquetteMessage_1
          .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Archive:
          return 'icon_archiver_discussion';
        case TypeOrigineCreationEtiquetteMessage_1
          .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Alerte:
          return 'icon_alerte_ppms';
        case TypeOrigineCreationEtiquetteMessage_1
          .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_ContactVS:
          return 'icon_conversation_contact_vie_sco';
        case TypeOrigineCreationEtiquetteMessage_1
          .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Conversation:
          return 'icon_conversation_cours';
        case TypeOrigineCreationEtiquetteMessage_1
          .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Brouillon:
          return 'icon_brouillon_discussion';
        case TypeOrigineCreationEtiquetteMessage_1
          .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle:
          return 'icon_trash';
        case TypeOrigineCreationEtiquetteMessage_1
          .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_CarnetLiaison:
          return 'icon_carnet_liaison';
        case TypeOrigineCreationEtiquetteMessage_1
          .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Harcelement:
          return 'icon_stop_harcelement';
      }
      return '';
    };
    UtilitaireMessagerie.construireImageEtiquette = function (aEtiquette) {
      const lResult = { icone: '', avecCompteurNonLu: true };
      const lIcone = UtilitaireMessagerie.getIconeDEtiquette(aEtiquette);
      if (lIcone) {
        lResult.icone = IE.jsx.str('i', {
          class: lIcone,
          role: 'presentation',
        });
      }
      if (
        TypeOrigineCreationEtiquetteMessage_1.TypeOrigineCreationEtiquetteMessageUtil.estEtiquettePerso(
          aEtiquette.getGenre(),
        )
      ) {
        lResult.icone = IE.jsx.str(
          'div',
          {
            class: 'utilMess_etiquette utilMess_etiquette_liste',
            role: 'presentation',
            style: {
              'background-color': aEtiquette.couleur,
              color: GCouleur.getCouleurCorrespondance(aEtiquette.couleur),
            },
          },
          aEtiquette.abr || '',
        );
        lResult.estImage = true;
      }
      if (
        aEtiquette.getGenre() ===
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Brouillon ||
        aEtiquette.getGenre() ===
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle
      ) {
        lResult.avecCompteurNonLu = false;
      }
      return lResult;
    };
    UtilitaireMessagerie.getNbNonlusDEtiquette = function (
      aEtiquette,
      aListeMessagerie,
    ) {
      let lNb = 0;
      if (aListeMessagerie && aEtiquette) {
        aListeMessagerie.parcourir((D) => {
          if (
            UtilitaireMessagerie.estDiscussionVisibleSelonEtiquette(
              D,
              aEtiquette,
            )
          ) {
            if (D.estUneDiscussion && D.profondeur === 0) {
              lNb += D.nbNonLus || 0;
            }
          }
        });
      }
      return lNb;
    };
    UtilitaireMessagerie.getIconeMessage = function (aMessage) {
      const lMessage = UtilitaireMessagerie.getDiscussionRacine(aMessage);
      let lResult = aMessage.estDiscussionEleve
        ? 'icon_utilisateur'
        : 'icon_discussion_cours';
      if (
        lMessage &&
        lMessage.listeEtiquettes &&
        lMessage.listeEtiquettes.count() > 0
      ) {
        lMessage.listeEtiquettes.parcourir((aEtiquette) => {
          const lIcone = UtilitaireMessagerie.getIconeDEtiquette(aEtiquette);
          if (lIcone) {
            lResult = lIcone;
            return false;
          }
        });
      }
      return lResult;
    };
    UtilitaireMessagerie.estDiscussionVisibleSelonEtiquette = function (
      aDiscussion,
      aEtiquette,
    ) {
      if (!aEtiquette) {
        return true;
      }
      if (aEtiquette.nonSelectionnable) {
        return false;
      }
      let lExclusions = [];
      let lAvecEtiquettes = [];
      let lEtiquetteFiltre = null;
      let lVisible = true;
      const lEstPrimParent =
        GEtatUtilisateur.GenreEspace ===
          Enumere_Espace_1.EGenreEspace.PrimParent ||
        GEtatUtilisateur.GenreEspace ===
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent;
      if (aEtiquette.toutes) {
        lExclusions = [
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle,
        ];
        if (lEstPrimParent) {
          lExclusions.push(
            TypeOrigineCreationEtiquetteMessage_1
              .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_CarnetLiaison,
          );
        }
      } else if (aEtiquette.enCours) {
        lExclusions = [
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle,
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Archive,
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Alerte,
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_ContactVS,
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Conversation,
        ];
      } else if (aEtiquette.estFiltreDiscussionMesEleves) {
        if (!aDiscussion.estDiscussionEleve) {
          return false;
        }
        lExclusions = [
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle,
        ];
      } else if (aEtiquette.estSansEtiquette) {
        lExclusions = [
          ...TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessageUtil.tabEtiquetesPersos,
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle,
        ];
      } else if (
        TypeOrigineCreationEtiquetteMessage_1.TypeOrigineCreationEtiquetteMessageUtil.estEtiquettePerso(
          aEtiquette.getGenre(),
        )
      ) {
        lExclusions = [
          TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle,
        ];
        lEtiquetteFiltre = aEtiquette;
      } else {
        switch (aEtiquette.getGenre()) {
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_CarnetLiaison:
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Archive:
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Conversation:
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Alerte:
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_ContactVS:
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Harcelement:
            lExclusions = [
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle,
            ];
            lEtiquetteFiltre = aEtiquette;
            break;
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Brouillon:
            lAvecEtiquettes = [
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Brouillon,
            ];
            lExclusions = [
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle,
            ];
            break;
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle:
            lExclusions = [];
            lAvecEtiquettes = [
              TypeOrigineCreationEtiquetteMessage_1
                .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle,
            ];
            break;
          default:
        }
      }
      lExclusions.forEach((aGenreExclu) => {
        aDiscussion.listeEtiquettes.parcourir((D) => {
          if (D.getGenre() === aGenreExclu) {
            lVisible = false;
            return false;
          }
        });
      });
      if (lVisible && lEtiquetteFiltre) {
        lVisible = false;
        aDiscussion.listeEtiquettes.parcourir((D) => {
          if (lEtiquetteFiltre.getNumero() === D.getNumero()) {
            lVisible = true;
            return false;
          }
        });
        if (
          lVisible &&
          lEstPrimParent &&
          lEtiquetteFiltre.getGenre() ===
            TypeOrigineCreationEtiquetteMessage_1
              .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_CarnetLiaison
        ) {
          if (!!aDiscussion.contexte && !!lEtiquetteFiltre.contexte) {
            lVisible =
              aDiscussion.contexte.getNumero() ===
              lEtiquetteFiltre.contexte.getNumero();
          }
        }
      }
      if (lVisible) {
        lAvecEtiquettes.forEach((aGenreEtiquette) => {
          lVisible = false;
          aDiscussion.listeEtiquettes.parcourir((D) => {
            if (D.getGenre() === aGenreEtiquette) {
              lVisible = true;
              return false;
            }
          });
        });
      }
      if (lVisible && aDiscussion.pere) {
        lVisible = UtilitaireMessagerie.estDiscussionVisibleSelonEtiquette(
          aDiscussion.pere,
          aEtiquette,
        );
      }
      return lVisible;
    };
    UtilitaireMessagerie.getEtiquetteInitSelonMessage = function (
      aListeEtiquettes,
      aEtiquetteOriginal,
      aAvecSelecteurEtiquette,
      aMessageSelectionne,
    ) {
      let lEtiquette = aEtiquetteOriginal;
      if (!aListeEtiquettes) {
        return lEtiquette;
      }
      if (lEtiquette) {
        lEtiquette = aListeEtiquettes.getElementParNumero(
          lEtiquette.getNumero(),
        );
      }
      let lEtiquetteToutes = null;
      aListeEtiquettes.parcourir((D) => {
        if (D.toutes) {
          lEtiquetteToutes = D;
          return false;
        }
      });
      if (!lEtiquette) {
        lEtiquette = lEtiquetteToutes;
        if (
          aAvecSelecteurEtiquette &&
          GApplication.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionAvancee,
          )
        ) {
          aListeEtiquettes.parcourir((D) => {
            if (D.enCours) {
              lEtiquette = D;
              return false;
            }
          });
        }
      }
      if (
        lEtiquette &&
        aAvecSelecteurEtiquette &&
        lEtiquette.enCours &&
        aMessageSelectionne &&
        lEtiquetteToutes &&
        !UtilitaireMessagerie.estDiscussionVisibleSelonEtiquette(
          aMessageSelectionne,
          lEtiquette,
        )
      ) {
        lEtiquette = lEtiquetteToutes;
      }
      if (
        lEtiquette &&
        aAvecSelecteurEtiquette &&
        aMessageSelectionne &&
        !UtilitaireMessagerie.estDiscussionVisibleSelonEtiquette(
          aMessageSelectionne,
          lEtiquette,
        )
      ) {
        aListeEtiquettes.parcourir((D) => {
          if (
            !D.enCours &&
            !D.toutes &&
            UtilitaireMessagerie.estDiscussionVisibleSelonEtiquette(
              aMessageSelectionne,
              D,
            )
          ) {
            lEtiquette = D;
            return false;
          }
        });
      }
      return lEtiquette;
    };
    UtilitaireMessagerie.getGenreReponse = function (
      aGenre,
      aAvecInclureParentsEleves,
    ) {
      if (
        aGenre ===
          TypeHttpReponseMessage_1.TypeHttpReponseMessage
            .rm_EnvoiATousSaufParentEleve &&
        aAvecInclureParentsEleves
      ) {
        return TypeHttpReponseMessage_1.TypeHttpReponseMessage.rm_EnvoiATous;
      }
      if (
        aGenre ===
          TypeHttpReponseMessage_1.TypeHttpReponseMessage
            .rm_RelanceATousSaufParentEleve &&
        aAvecInclureParentsEleves
      ) {
        return TypeHttpReponseMessage_1.TypeHttpReponseMessage.rm_Relance;
      }
      return aGenre;
    };
    UtilitaireMessagerie.estGenreDestinataireAutorise = function (
      aGenreRessource,
    ) {
      const lApp = GApplication;
      switch (aGenreRessource) {
        case Enumere_Ressource_1.EGenreRessource.Eleve:
          return lApp.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionEleves,
          );
        case Enumere_Ressource_1.EGenreRessource.Responsable:
          return lApp.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionParents,
          );
        case Enumere_Ressource_1.EGenreRessource.Enseignant:
          return lApp.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionProfesseurs,
          );
        case Enumere_Ressource_1.EGenreRessource.Personnel:
          return lApp.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionPersonnels,
          );
        default:
      }
      return false;
    };
    UtilitaireMessagerie.interdireReponseParentEleve = () => {
      return [
        Enumere_Espace_1.EGenreEspace.PrimEleve,
        Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
      ].includes(GEtatUtilisateur.GenreEspace);
    };
    UtilitaireMessagerie.unMessageContientLeDirecteur = function (
      aListeMessages,
    ) {
      let result = false;
      if (!!aListeMessages) {
        aListeMessages.parcourir((D) => {
          if (D.avecDirecteur) {
            result = true;
            return false;
          }
        });
      }
      return result;
    };
    UtilitaireMessagerie.avecEditionHtmlMessage = function () {
      return GApplication.droits.get(
        ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionAvancee,
      );
    };
    UtilitaireMessagerie.avecEditeurTiny = function () {
      return (
        ObjetNavigateur_1.Navigateur.withContentEditable &&
        ObjetSupport_1.Support.contentEditable &&
        UtilitaireMessagerie.avecEditionHtmlMessage()
      );
    };
    UtilitaireMessagerie.avecAjoutPieceJointeMessage = function () {
      return (
        ObjetSupport_1.Support.avecSupportFileUpload &&
        ![
          Enumere_Espace_1.EGenreEspace.Eleve,
          Enumere_Espace_1.EGenreEspace.Mobile_Eleve,
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.EGenreEspace.PrimEleve,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
        ].includes(GEtatUtilisateur.GenreEspace)
      );
    };
    UtilitaireMessagerie.getListeDestCarnetLiaisonDElevePrimParent = function (
      aNumeroEleve,
    ) {
      const lEleve =
        GEtatUtilisateur.Identification.ListeRessources.getElementParNumero(
          aNumeroEleve,
        );
      if (!lEleve || !lEleve.destinatairesCarnetLiaison) {
        return new ObjetListeElements_1.ObjetListeElements();
      }
      return lEleve.destinatairesCarnetLiaison;
    };
    UtilitaireMessagerie.getBrouillonDefaut = function () {
      const lBrouillon = new ObjetElement_1.ObjetElement();
      lBrouillon.contenu = '';
      lBrouillon.objet = '';
      lBrouillon.listeFichiers = new ObjetListeElements_1.ObjetListeElements();
      return lBrouillon;
    };
    UtilitaireMessagerie.avecListeDiffusionSelonEspace = function () {
      return (
        [
          Enumere_Espace_1.EGenreEspace.Professeur,
          Enumere_Espace_1.EGenreEspace.Mobile_Professeur,
          Enumere_Espace_1.EGenreEspace.PrimProfesseur,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimProfesseur,
          Enumere_Espace_1.EGenreEspace.Administrateur,
          Enumere_Espace_1.EGenreEspace.Mobile_Administrateur,
          Enumere_Espace_1.EGenreEspace.PrimDirection,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimDirection,
          Enumere_Espace_1.EGenreEspace.Etablissement,
          Enumere_Espace_1.EGenreEspace.Mobile_Etablissement,
          Enumere_Espace_1.EGenreEspace.PrimMairie,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimMairie,
        ].indexOf(GEtatUtilisateur.GenreEspace) >= 0
      );
    };
    UtilitaireMessagerie.getLibelleSuppListePublics = function (aArticle) {
      const H = [];
      if (aArticle) {
        switch (aArticle.getGenre()) {
          case Enumere_Ressource_1.EGenreRessource.Enseignant:
            if (aArticle.estPrincipal) {
              H.push(
                `<p><i role="presentation" class="icon_star m-right-s"></i>${'Professeur principal'}</p>`,
              );
            }
            if (aArticle.estTuteur) {
              H.push(
                `<p><i role="presentation" class="icon_star m-right-s"></i>${'Tuteur'}</p>`,
              );
            }
            if (aArticle.listeRessources) {
              H.push(
                aArticle.listeRessources.getTableauLibelles().join('<br>'),
              );
            }
            break;
          case Enumere_Ressource_1.EGenreRessource.Personnel:
            if (aArticle.estMonCpe) {
              H.push(
                `<p><i role="presentation" class="icon_star m-right-s"></i>${'Mon CPE'}</p>`,
              );
            }
            if (aArticle.fonction) {
              H.push(`<p>${aArticle.fonction.getLibelle()}</p>`);
            }
            break;
          case Enumere_Ressource_1.EGenreRessource.Eleve:
          case Enumere_Ressource_1.EGenreRessource.Responsable:
            if (aArticle.classesNiv) {
              H.push(
                `<p>${aArticle.classesNiv.getTableauLibelles().join(', ')}</p>`,
              );
            }
            break;
        }
      }
      return H.join('');
    };
    UtilitaireMessagerie.getLibelleSuppListePublicsGenreCumulFonction = (
      aArticle,
    ) => {
      if (aArticle) {
        switch (aArticle.getGenre()) {
          case Enumere_Ressource_1.EGenreRessource.Personnel:
            if (aArticle.estMonCpe) {
              return `<p class="m-bottom"><i role="presentation" class="icon_star m-right-s"></i>${'Mon CPE'}</p>`;
            }
            break;
        }
        return '';
      }
    };
    UtilitaireMessagerie.selectionnerListePublics = async (aParams) => {
      const lParams = Object.assign(
        {
          instance: null,
          genreRessource: null,
          avecIndicationDiscussionInterdit: true,
          listeRessourcesSelectionnees:
            new ObjetListeElements_1.ObjetListeElements(),
          uniquementAjouterDest: false,
          listeRessourcesInvisibles: null,
          estAlertePPMS: false,
        },
        aParams,
      );
      let lDonnees;
      let lListeRessources;
      const lGenreRessource = lParams.genreRessource;
      if (
        GApplication.droits.get(
          ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionAvancee,
        )
      ) {
        lDonnees =
          await new ObjetRequeteListePublics_1.ObjetRequeteListePublics(
            lParams.instance,
          ).lancerRequete({
            pourMessagerie: true,
            genres: [lParams.genreRessource],
            sansFiltreSurEleve: GApplication.droits.get(
              ObjetDroitsPN_1.TypeDroits.communication.toutesClasses,
            ),
            avecFonctionPersonnel: true,
          });
        lListeRessources = lDonnees.listePublic;
      } else {
        const lParametresRequete = {
          onglet: new ObjetElement_1.ObjetElement(
            '',
            0,
            lParams.genreRessource,
          ),
          filtreElement: GEtatUtilisateur.getMembre(),
        };
        if (
          [
            Enumere_Espace_1.EGenreEspace.Parent,
            Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          ].includes(GEtatUtilisateur.GenreEspace) &&
          lParams.genreRessource ===
            Enumere_Ressource_1.EGenreRessource.Responsable
        ) {
          $.extend(lParametresRequete, {
            filtreElement: new ObjetElement_1.ObjetElement('', 0, 6),
          });
        }
        lDonnees =
          await new ObjetRequeteListeRessourcesPourCommunication_1.ObjetRequeteListeRessourcesPourCommunication(
            lParams.instance,
          ).lancerRequete(lParametresRequete);
        lListeRessources = lDonnees.listeRessourcesPourCommunication;
        if (
          [
            Enumere_Ressource_1.EGenreRessource.Enseignant,
            Enumere_Ressource_1.EGenreRessource.Personnel,
          ].includes(lGenreRessource)
        ) {
          lListeRessources = lListeRessources.getListeElements((D) => {
            return D.avecDiscussion === true;
          });
        }
      }
      if (lParams.uniquementAjouterDest) {
        if (lParams.listeRessourcesInvisibles) {
          lListeRessources = lListeRessources.getListeElements((aElement) => {
            return !lParams.listeRessourcesInvisibles.getElementParNumero(
              aElement.getNumero(),
            );
          });
        }
        if (lListeRessources.count() === 0) {
          let lMessage = '';
          switch (lParams.genreRessource) {
            case Enumere_Ressource_1.EGenreRessource.Enseignant:
              lMessage = 'Tous les professeurs de l'établissement sont déjà destinataires du message';
              break;
            case Enumere_Ressource_1.EGenreRessource.Personnel:
              lMessage = 'Tous les personnels de l'établissement sont déjà destinataires du message';
              break;
            case Enumere_Ressource_1.EGenreRessource.Eleve:
              lMessage = 'Tous les élèves sont déjà destinataires du message';
              break;
            case Enumere_Ressource_1.EGenreRessource.Responsable:
              lMessage = 'Tous les responsables sont déjà destinataires du message';
              break;
            default:
          }
          await GApplication.getMessage().afficher({ message: lMessage });
          return null;
        }
      }
      let lGenreCumul = (0,
      UtilitaireFenetreSelectionPublic_1.getCumulPourFenetrePublic)(
        lParams.genreRessource,
        lDonnees.checked,
        lListeRessources.count(),
      );
      let lEstCasRespToResp = false;
      if (
        [Enumere_Ressource_1.EGenreRessource.Responsable].includes(
          lGenreRessource,
        ) &&
        [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
        ].includes(GEtatUtilisateur.GenreEspace)
      ) {
        lEstCasRespToResp = true;
        lGenreCumul =
          ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
            .respDelegues;
      }
      let lListeCumuls = new ObjetListeElements_1.ObjetListeElements();
      if (
        lGenreRessource === Enumere_Ressource_1.EGenreRessource.Eleve ||
        (lGenreRessource === Enumere_Ressource_1.EGenreRessource.Responsable &&
          !lEstCasRespToResp)
      ) {
        lListeCumuls.addElement(
          new ObjetElement_1.ObjetElement(
            'Classe',
            0,
            ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.classe,
            0,
          ),
        );
        lListeCumuls.addElement(
          new ObjetElement_1.ObjetElement(
            'Groupe',
            0,
            ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.groupe,
            1,
          ),
        );
        lListeCumuls.addElement(
          new ObjetElement_1.ObjetElement(
            'Ordre alphabétique',
            0,
            ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.initial,
            2,
          ),
        );
        if (
          lGenreRessource === Enumere_Ressource_1.EGenreRessource.Responsable
        ) {
          lListeCumuls.addElement(
            new ObjetElement_1.ObjetElement(
              'Nom des élèves',
              0,
              ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.nomEleves,
            ),
          );
        }
        if (lDonnees.listeServicesPeriscolaire) {
          lListeCumuls.addElement(
            new ObjetElement_1.ObjetElement(
              'Services périscolaires',
              0,
              ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.servicesPeriscolaire,
            ),
          );
        }
        if (lDonnees.listeProjetsAcc) {
          lListeCumuls.addElement(
            new ObjetElement_1.ObjetElement(
              'Projets d'accompagnement',
              0,
              ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.projetsAccompagnement,
            ),
          );
        }
        if (
          lGenreRessource === Enumere_Ressource_1.EGenreRessource.Eleve &&
          lListeRessources &&
          lListeRessources.count() > 0 &&
          MethodesObjet_1.MethodesObjet.isBoolean(
            lListeRessources.get(0).estAbsent,
          )
        ) {
          lListeCumuls.addElement(
            new ObjetElement_1.ObjetElement(
              'Absents/présents ce jour',
              0,
              ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.presentielEleve,
            ),
          );
        }
        if (
          lGenreRessource === Enumere_Ressource_1.EGenreRessource.Eleve ||
          lGenreRessource === Enumere_Ressource_1.EGenreRessource.Responsable
        ) {
          if (lDonnees.listeFamilles) {
            lDonnees.listeFamilles.parcourir((aFamille) => {
              const lFiltreFamille = new ObjetElement_1.ObjetElement(
                aFamille.getLibelle(),
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.famille,
              );
              lFiltreFamille.famille = aFamille;
              lListeCumuls.addElement(lFiltreFamille);
            });
          }
        }
      } else if (
        lGenreRessource === Enumere_Ressource_1.EGenreRessource.Enseignant &&
        [
          Enumere_Espace_1.EGenreEspace.Accompagnant,
          Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_Accompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.Tuteur,
          Enumere_Espace_1.EGenreEspace.Mobile_Tuteur,
        ].includes(GEtatUtilisateur.GenreEspace) &&
        GEtatUtilisateur.Identification.ListeRessources.count() > 1
      ) {
        lListeCumuls.addElement(
          new ObjetElement_1.ObjetElement(
            'Nom des élèves',
            0,
            ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.nomEleves,
          ),
        );
      } else if (
        lGenreRessource === Enumere_Ressource_1.EGenreRessource.Personnel
      ) {
        lListeCumuls.add(
          new ObjetElement_1.ObjetElement(
            'Ordre alphabétique',
            0,
            ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.sans,
            0,
          ),
        );
        lListeCumuls.add(
          new ObjetElement_1.ObjetElement(
            'Fonction',
            0,
            ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.fonction,
            1,
          ),
        );
      }
      if (lDonnees.listeNiveauxResponsabilite) {
        lParams.listeNiveauxResponsabilite =
          lDonnees.listeNiveauxResponsabilite;
      }
      return UtilitaireMessagerie.fenetreSelectionnerListePublics(
        Object.assign(
          {
            listeRessources: lListeRessources,
            listeCumuls: lListeCumuls,
            genreCumul: lGenreCumul,
          },
          lParams,
        ),
      );
    };
    UtilitaireMessagerie.fenetreSelectionnerListePublics = async (aParams) => {
      const lParams = Object.assign(
        {
          instance: null,
          genreRessource: null,
          listeRessources: new ObjetListeElements_1.ObjetListeElements(),
          listeRessourcesSelectionnees:
            new ObjetListeElements_1.ObjetListeElements(),
          avecIndicationDiscussionInterdit: false,
          uniquementAjouterDest: false,
          listeCumuls: null,
          genreCumul: null,
          estAlertePPMS: false,
        },
        aParams,
      );
      return await new Promise((aResolve) => {
        const lInstance = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          lParams.estAlertePPMS
            ? ObjetFenetre_SelectionPublic_1.ObjetFenetre_SelectionPublic
            : ObjetFenetre_SelectionPublic_PN_1.ObjetFenetre_SelectionPublic_PN,
          {
            pere: lParams.instance,
            evenement: function (aGenre, aListe, aNumeroBouton) {
              if (aNumeroBouton === 1) {
                aResolve(aListe);
              } else {
                aResolve(null);
              }
            },
          },
        );
        lInstance.setOptionsFenetreSelectionRessource({
          avecCocheRessources: true,
          afficherUtilisateurCourant: !lParams.uniquementAjouterDest,
        });
        if (lParams.listeCumuls && lParams.listeCumuls.count() > 0) {
          lInstance.setListeCumuls(lParams.listeCumuls);
        }
        if (lParams.genreCumul) {
          lInstance.setGenreCumulActif(lParams.genreCumul);
        }
        lInstance.setOptions({
          getInfosSuppZonePrincipale(aParams) {
            return UtilitaireMessagerie[
              lInstance.getGenreCumul() !==
              ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                .fonction
                ? 'getLibelleSuppListePublics'
                : 'getLibelleSuppListePublicsGenreCumulFonction'
            ](aParams.article);
          },
        });
        lInstance.setSelectionObligatoire(false);
        lInstance.setDonnees({
          listeRessources: lParams.listeRessources,
          listeRessourcesSelectionnees: lParams.listeRessourcesSelectionnees,
          genreRessource: lParams.genreRessource,
          avecIndicationDiscussionInterdit:
            lParams.avecIndicationDiscussionInterdit,
          titre:
            Enumere_Ressource_1.EGenreRessourceUtil.getTitreFenetreSelectionRessource(
              lParams.genreRessource,
            ),
          listeNiveauxResponsabilite: lParams.listeNiveauxResponsabilite,
        });
      });
    };
    UtilitaireMessagerie.selectionnerListeDiffusions = (aInstance) => {
      let lListeDiffusions = null;
      if (
        Cache_1.GCache &&
        Cache_1.GCache.general.existeDonnee('listeDiffusion_messagerie')
      ) {
        lListeDiffusions = Cache_1.GCache.general.getDonnee(
          'listeDiffusion_messagerie',
        );
      }
      return Promise.resolve()
        .then(() => {
          if (!lListeDiffusions) {
            return new ObjetRequeteListeDiffusion_1.ObjetRequeteListeDiffusion(
              aInstance,
            )
              .lancerRequete({ pourMessagerie: true })
              .then((aJSON) => {
                if (aJSON && aJSON.liste) {
                  lListeDiffusions = aJSON.liste;
                  if (Cache_1.GCache) {
                    Cache_1.GCache.general.setDonnee(
                      'listeDiffusion_messagerie',
                      lListeDiffusions,
                    );
                  }
                }
              });
          }
        })
        .then(() => {
          return new Promise((aResolve) => {
            if (!lListeDiffusions) {
              return null;
            }
            lListeDiffusions.parcourir((aElement) => {
              aElement.cmsActif = false;
            });
            ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
              ObjetFenetre_SelectionListeDiffusion_1.ObjetFenetre_SelectionListeDiffusion,
              {
                pere: aInstance,
                evenement: (aGenreBouton) => {
                  let lListeDiffusionsSelection =
                    new ObjetListeElements_1.ObjetListeElements();
                  if (aGenreBouton === 1) {
                    lListeDiffusionsSelection =
                      lListeDiffusions.getListeElements(
                        (aElement) => !!aElement.cmsActif,
                      );
                  }
                  aResolve(lListeDiffusionsSelection);
                },
              },
            ).setDonnees(
              new DonneesListe_SelectionDiffusion_1.DonneesListe_SelectionDiffusion(
                lListeDiffusions,
              ),
              false,
            );
          });
        });
    };
    UtilitaireMessagerie.avecListeDestinatairesProfsStatique = function () {
      return [
        Enumere_Espace_1.EGenreEspace.PrimEleve,
        Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
      ].includes(GEtatUtilisateur.GenreEspace);
    };
    UtilitaireMessagerie.getListeDestProfsDiscussionPrimEleveFormat = () => {
      let lListe = null;
      const lListeDest =
        GEtatUtilisateur.getUtilisateur().listeDestProfsDiscussionPrimEleve;
      if (lListeDest) {
        lListe = MethodesObjet_1.MethodesObjet.dupliquer(lListeDest);
        lListe
          .setTri([
            ObjetTri_1.ObjetTri.init('estPrincipal', -1),
            ObjetTri_1.ObjetTri.init('Position'),
          ])
          .trier()
          .parcourir((aProf) => {
            if (
              !aProf.estPrincipal &&
              aProf.listeRessources &&
              aProf.listeRessources.count() > 0 &&
              aProf.listeRessources.getTableauLibelles
            ) {
              aProf.setLibelle(
                `${aProf.getLibelle()} (${aProf.listeRessources.getTableauLibelles().join(', ')})`,
              );
            }
          });
      }
      return lListe;
    };
    UtilitaireMessagerie.getLibelleRaccourciMessPrimEleve = () => {
      const lListeDest =
        GEtatUtilisateur.getUtilisateur().listeDestProfsDiscussionPrimEleve;
      if (lListeDest && lListeDest.count() > 0) {
        return lListeDest.count() > 1
          ? 'Écrire un message'
          : 'Écrire un message à %s'],
            );
      }
      return '';
    };
    UtilitaireMessagerie.composeMettreEnCopie = (aParams) => {
      const H = [];
      H.push('<fieldset class="Gras">');
      H.push(
        '<legend>',
        'Mettre en copie',
        '</legend>',
      );
      if (aParams && aParams.avecDirection) {
        H.push(
          '<div><ie-checkbox ie-model="cbDestinataireDirecteur" class="m-left-xl m-top-l">',
          'la direction de l'école',
          '</ie-checkbox></div>',
        );
      }
      if (aParams && aParams.avecEnseigantDEleve) {
        H.push(
          '<div><ie-checkbox ie-model="cbDestinataireEnseignant" class="m-left-xl m-top-l">',
          'l'enseignant(e) de mon enfant',
          '</ie-checkbox></div>',
        );
      }
      H.push('</fieldset>');
      return H.join('');
    };
    UtilitaireMessagerie.creerDiscussionAvecMairie = (
      aObjetFenetre,
      aInstance,
    ) => {
      if (!UtilitaireMessagerie.controleMessagerieDesactivee()) {
        return;
      }
      const lFenetreMessage = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
        aObjetFenetre,
        { pere: aInstance },
      );
      lFenetreMessage.setOptionsFenetre({
        titre: 'Nouveau message à la mairie',
      });
      lFenetreMessage.setDonnees({
        ListeRessources:
          GEtatUtilisateur.Identification.ressource
            .destinatairePersonnelsMairie,
        listeSelectionnee: new ObjetListeElements_1.ObjetListeElements(),
        genreRessource: Enumere_Ressource_1.EGenreRessource.Personnel,
        message: { destinataireMairie: true },
      });
    };
    UtilitaireMessagerie.controleMessagerieDesactivee = () => {
      const lDroits = GApplication.droits;
      if (
        !lDroits.get(ObjetDroitsPN_1.TypeDroits.communication.avecDiscussion)
      ) {
        GApplication.getMessage().afficher({
          message: 'Les discussions sont désactivées',
        });
        return false;
      }
      if (
        lDroits.get(
          ObjetDroitsPN_1.TypeDroits.communication
            .discussionDesactiveeSelonHoraire,
        )
      ) {
        GApplication.getMessage().afficher({
          message: lDroits.get(
            ObjetDroitsPN_1.TypeDroits.communication
              .messageDiscussionDesactiveeSelonHoraire,
          ),
        });
        return false;
      }
      return true;
    };
    class ObjetRequeteSaisiePublicMessage extends ObjetRequeteJSON_1.ObjetRequeteSaisie {}
    CollectionRequetes_1.Requetes.inscrire(
      'SaisiePublicMessage',
      ObjetRequeteSaisiePublicMessage,
    );
  },
  fn: 'utilitairemessagerie.js',
});