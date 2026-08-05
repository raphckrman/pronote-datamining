IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireMessagerie = void 0;
    require('@scolys/produit/css/UtilitaireMessagerie.css');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetRequeteJSON_1 = require('@cp/script/Communication/ObjetRequeteJSON');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const TypeGenreDiscussion_1 = require('@cp/Espace/Script/Enumeres/TypeGenreDiscussion');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const TypeOrigineCreationEtiquetteMessage_1 = require('@scolys/espace/script/enumere/TypeOrigineCreationEtiquetteMessage');
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const TypeHttpReponseMessage_1 = require('@scolys/produit/script/enumere/TypeHttpReponseMessage');
    const ObjetSupport_1 = require('@cp/script/ObjetSupport');
    const TypeStatutConnexion_1 = require('@scolys/espace/script/enumere/TypeStatutConnexion');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const ObjetRequeteListePublics_1 = require('@scolys/produit/script/requete/ObjetRequeteListePublics');
    const ObjetRequeteListeRessourcesPourCommunication_1 = require('@scolys/produit/script/requete/ObjetRequeteListeRessourcesPourCommunication');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetFenetre_SelectionPublic_1 = require('@cp/Espace/Script/Fenetres/ObjetFenetre_SelectionPublic');
    const ObjetFenetre_SelectionPublic_PN_1 = require('@scolys/espace/script/ObjetFenetre_SelectionPublic_PN');
    const UtilitaireFenetreSelectionPublic_1 = require('@scolys/espace/script/utilitaire/UtilitaireFenetreSelectionPublic');
    const Cache_1 = require('@scolys/produit/script/Cache');
    const ObjetRequeteListeDiffusion_1 = require('@scolys/produit/script/requete/ObjetRequeteListeDiffusion');
    const ObjetFenetre_SelectionListeDiffusion_1 = require('@scolys/espace/script/ObjetFenetre_SelectionListeDiffusion');
    const DonneesListe_SelectionDiffusion_1 = require('@scolys/espace/script/donneesliste/DonneesListe_SelectionDiffusion');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const Categorie_1 = require('@cp/Produit/Script/Categorie');
    const IconeSvgDiscussion_cours_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiscussion_cours');
    const IconeSvgInbox_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgInbox');
    const IconeSvgUtilisateur_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgUtilisateur');
    const IconeSvgArchiver_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgArchiver_discussion');
    const IconeSvgAlerte_ppms_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAlerte_ppms');
    const IconeSvgConversation_contact_vie_sco_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgConversation_contact_vie_sco');
    const IconeSvgConversation_cours_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgConversation_cours');
    const IconeSvgBrouillon_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgBrouillon_discussion');
    const IconeSvgTrash_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTrash');
    const IconeSvgCarnet_liaison_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCarnet_liaison');
    const IconeSvgStop_harcelement_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgStop_harcelement');
    const C_TailleObjetMessage = 200;
    class UtilitaireMessagerie {
      static getDiscussion(aParam) {
        const H = [];
        let J;
        const lGUIDSyntheseVocale = GUID_1.GUID.getId();
        const lJSXLireTexte = (aIndice, aNode) => {
          const lResult = [];
          const lMessage = aParam.listeMessages.get(aIndice);
          const lNextIndice = aIndice > 0 ? aIndice - 1 : undefined;
          if (lMessage.estUnAparte) {
            lResult.push(
              'Cette discussion ne concerne qu'une partie des destinataires',
            );
          }
          const lChaine =
            UtilitaireMessagerie.getLibelleParticipantsSyntheseVocale(
              aParam.pere,
              lMessage,
              aNode,
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
        };
        const lJsxModelBoutonCommande = (aIndice) => {
          return {
            event: (aEvent, aNode) => {
              var _a;
              const lNodeCopie = $(aNode)
                .closest('li.message')
                .find('.visu_contenu')
                .get(0);
              (_a = aParam.callbackCommandesMessage) === null || _a === void 0
                ? void 0
                : _a.call(aParam, {
                    indice: aIndice,
                    messageVisu: aParam.listeMessages.get(aIndice),
                    event: aEvent,
                    elementCibleCopie: lNodeCopie,
                    surMenuContextuel: false,
                  });
            },
          };
        };
        let lAvecCommandes = false;
        let lJsxNodeCommande = false;
        if (
          aParam.callbackCommandesMessage &&
          !GApplication.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.discussionInterdit,
          )
        ) {
          lAvecCommandes = true;
          lJsxNodeCommande = (aIndice) => {
            return (aNode) => {
              $(aNode).on('contextmenu', function (aEvent) {
                var _a;
                const lNodeCopie = $(this).find('.visu_contenu').get(0);
                (_a = aParam.callbackCommandesMessage) === null || _a === void 0
                  ? void 0
                  : _a.call(aParam, {
                      indice: aIndice,
                      messageVisu: aParam.listeMessages.get(aIndice),
                      event: aEvent,
                      elementCibleCopie: lNodeCopie,
                      surMenuContextuel: true,
                    });
              });
            };
          };
        }
        let lJsxNodeLienAfficherSuivants = false;
        if (aParam.callbackAfficherSuivants) {
          lJsxNodeLienAfficherSuivants = (aNbMessages) => {
            return (aNode) => {
              $(aNode).on('validation', () => {
                aParam.callbackAfficherSuivants(aNbMessages);
              });
            };
          };
        }
        const lNbMessages = aParam.listeMessages.count();
        if (
          aParam.callbackAfficherSuivants &&
          aParam.nbMessagesTotal > 0 &&
          lNbMessages < aParam.nbMessagesTotal
        ) {
          const lFuncVisibility = (aVisible) => {
            if (aVisible) {
              aParam.callbackAfficherSuivants(
                lNbMessages + UtilitaireMessagerie.palierNbMessages,
              );
              return false;
            }
          };
          H.push(
            IE.jsx.str(
              'div',
              {
                style: 'padding-top:5px;',
                ie_visibility_observer: lFuncVisibility,
              },
              () => {
                if (
                  lNbMessages + UtilitaireMessagerie.palierNbMessages <
                  aParam.nbMessagesTotal
                ) {
                  return [
                    IE.jsx.str(
                      'div',
                      { style: 'padding-top:5px; text-align:center;' },
                      IE.jsx.str(
                        'a',
                        {
                          tabindex: '-1',
                          ie_node: lJsxNodeLienAfficherSuivants
                            ? lJsxNodeLienAfficherSuivants.bind(
                                this,
                                lNbMessages +
                                  UtilitaireMessagerie.palierNbMessages,
                              )
                            : false,
                          class: 'LienAccueil',
                        },
                        ObjetChaine_1.GChaine.format(
                          'Afficher les %d messages suivants',
                          [
                            Math.min(
                              UtilitaireMessagerie.palierNbMessages,
                              aParam.nbMessagesTotal - lNbMessages,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ].join('');
                }
              },
            ),
          );
        }
        H.push(
          IE.jsx.str('ul', { class: 'utilMess_visu_messages' }, (H) => {
            for (let I = lNbMessages - 1; I >= 0; I--) {
              const lMessage = aParam.listeMessages.get(I);
              H.push(
                IE.jsx.str(
                  'li',
                  {
                    class: [
                      'AvecSelectionTexte',
                      'message',
                      lMessage.brouillon ? 'brouillon' : '',
                      lMessage.emetteur ? 'emetteur' : '',
                      lMessage.estUnAparte ? 'aparte' : '',
                    ],
                    ie_synthesevocale: lJSXLireTexte.bind(this, I),
                    ie_node: lJsxNodeCommande
                      ? lJsxNodeCommande.bind(this, I)
                      : false,
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
                      IE.jsx.str('p', null, lMessage.libelleDate),
                      UtilitaireMessagerie.dessinListeEtiquettes(
                        lMessage.listeEtiquettes,
                        true,
                      ),
                    );
                    const lBtnCommande = [];
                    if (lAvecCommandes) {
                      lBtnCommande.push(
                        IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                          ie_model: lJsxModelBoutonCommande.bind(this, I),
                          class: 'icon_ellipsis_vertical noSpeechSynthesis',
                          title: GlossaireListe_1.TradGlossaireListe.BtnAction,
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
                      aParam.callbackBtnSignalantPourSupp
                    ) {
                      lJsxModelBoutonSignalantSupp = (aIndice) => {
                        return {
                          event: () => {
                            const lMessageVisu =
                              aParam.listeMessages.get(aIndice);
                            if (lMessageVisu && lMessageVisu.messConfirmSupp) {
                              GApplication.getMessage()
                                .afficher({
                                  type: Enumere_BoiteMessage_1
                                    .EGenreBoiteMessage.Confirmation,
                                  message: lMessageVisu.messConfirmSupp,
                                })
                                .then((aGenreAction) => {
                                  if (
                                    aGenreAction ===
                                    Enumere_Action_1.EGenreAction.Valider
                                  ) {
                                    aParam.callbackBtnSignalantPourSupp({
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
                      IE.jsx.str(
                        'div',
                        {
                          class: [
                            'visu_contenu',
                            lMessage.estHTML ? Divers_css_1.SD.tinyView : '',
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
                              IEHtml_Bouton_1.Bouton,
                              {
                                ie_model: lJsxModelBoutonSignalantSupp.bind(
                                  this,
                                  I,
                                ),
                                class:
                                  Type_ThemeBouton_1.TypeThemeBouton.neutre,
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
                          IE.jsx.str(
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
                                  { class: [lClass, Divers_css_1.SD.tinyView] },
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
                    if (
                      !!lMessage.estCarnetLiaison &&
                      !!lMessage.avecDirecteur
                    ) {
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
      }
      static estMessageNonEditable(aMessage) {
        return !!(
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
      }
      static getLibelleObjetDiscussion(aDiscussion) {
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
      }
      static getTitreFenetreDeMessage(aMessage) {
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
      }
      static getLibelleDiscussionAccessible(aDiscussion) {
        const H = [];
        if (aDiscussion) {
          H.push(UtilitaireMessagerie.getLibelleObjetDiscussion(aDiscussion));
          H.push('&nbsp;-&nbsp;' + aDiscussion.libelleDate);
        }
        return H.join('');
      }
      static getDetailDiscussionAccessible(aDiscussion) {
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
      }
      static getLibelleParticipants(
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
                '<div ie_ellipsis style="max-width:250px;">',
                aMessage.public_gauche || '',
                '</div>',
              );
            } else {
              const lAvecBtn = !!aBtnModel && aMessage.nbPublic > 1;
              H.push(
                aMessage.public_gauche
                  ? IE.jsx.str(
                      'p',
                      {
                        class: 'participants_public',
                        ie_tooltipdescribe:
                          aMessage.hint_gauche && !IE.estMobile
                            ? () =>
                                ObjetChaine_1.GChaine.replaceRCToHTML(
                                  aMessage.hint_gauche,
                                )
                            : false,
                        ie_ellipsis: true,
                      },
                      aMessage.public_gauche,
                    )
                  : IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                      class: 'icon_intervenants message-btn-dest',
                      ie_model: lAvecBtn
                        ? aBtnModel(aMessage.getNumero(), true)
                        : false,
                      'aria-haspopup': lAvecBtn ? 'dialog' : false,
                      'aria-label': lAvecBtn
                        ? 'Afficher les participants'
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
                  IE.jsx.str(
                    'p',
                    {
                      class: 'participants_public',
                      ie_tooltipdescribe:
                        aMessage.hint_droite && !IE.estMobile
                          ? () =>
                              ObjetChaine_1.GChaine.replaceRCToHTML(
                                aMessage.hint_droite,
                              )
                          : false,
                      ie_ellipsis: true,
                    },
                    aMessage.public_droite,
                  ),
                );
              } else {
                if (!aMessage.brouillon && aMessage.nbPublic > 1) {
                  H.push(
                    IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                      class: 'icon_intervenants message-btn-dest',
                      'aria-label': 'Afficher les destinataires',
                      ie_model: lAvecBtn
                        ? aBtnModel(aMessage.getNumero(), false)
                        : false,
                      'aria-haspopup': lAvecBtn ? 'dialog' : false,
                    }),
                  );
                }
              }
            }
            if (aPourVisuTransfert) {
              H.push(
                IE.jsx.str(
                  'p',
                  { class: 'font-weight-regular m-left-l' },
                  aMessage.libelleDate,
                ),
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
      }
      static getLibelleParticipantsSyntheseVocale(aInstance, aMessage, aNode) {
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
      }
      static async afficherFenetreDestinatairesDeMessage(
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
        UtilitaireMessagerie.afficherFenetreDestinatairesDeListePublics(
          lListeDest,
          aEstPublicParticipant,
        );
      }
      static afficherFenetreDestinatairesDeListePublics(
        aListePublics,
        aEstPublicParticipant,
      ) {
        if (!aListePublics || aListePublics.count() === 0) {
          return;
        }
        const lHtml = IE.jsx.str(
          'ul',
          { class: 'liste-destinataires' },
          (aTab) => {
            aListePublics.parcourir((aDest) => {
              const lLibelleSupp =
                UtilitaireMessagerie.getStrHintDetailDePublic(aDest);
              aTab.push(
                IE.jsx.str(
                  'li',
                  null,
                  aListePublics.avecConnection
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
      }
      static getStrHintDetailDePublic(aPublic) {
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
      }
      static getIndiceDiscussion(aListeMessagerie, aMessage) {
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
      }
      static getIndiceDiscussionDeMessageVisu(aListeMessagerie, aMessageVisu) {
        if (
          !aMessageVisu ||
          !aMessageVisu.possessionMessage ||
          !aListeMessagerie
        ) {
          return null;
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
      }
      static getIndicePere(aListeMessagerie, aMessage) {
        if (aMessage.indicePere >= 0) {
          return this.getIndicePere(
            aListeMessagerie,
            aListeMessagerie.get(aMessage.indicePere),
          );
        } else {
          return aMessage.indice;
        }
      }
      static getDiscussionRacine(aMessage) {
        if (aMessage.pere) {
          return UtilitaireMessagerie.getDiscussionRacine(aMessage.pere);
        } else {
          return aMessage;
        }
      }
      static estEgal(aMessage1, aMessage2) {
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
          } else if (
            !aMessage1.estUneDiscussion &&
            !aMessage2.estUneDiscussion
          ) {
            return aMessage1.getNumero() === aMessage2.getNumero();
          }
        }
        return false;
      }
      static avecPossessionPartageeEntreMessages(aMessage1, aMessage2) {
        let lResult = false;
        if (
          aMessage1 &&
          aMessage2 &&
          aMessage1.listePossessionsMessages &&
          aMessage2.listePossessionsMessages
        ) {
          aMessage1.listePossessionsMessages.parcourir((aPossession) => {
            if (
              aMessage2.listePossessionsMessages.getElementParElement(
                aPossession,
              )
            ) {
              lResult = true;
              return false;
            }
          });
        }
        return lResult;
      }
      static dessinCouleurEtiquette(aEtiquette) {
        if (!aEtiquette.couleur) {
          return '';
        }
        return IE.jsx.str(
          Categorie_1.CarreCategorie,
          {
            couleur: aEtiquette.couleur,
            tooltiplabel: aEtiquette.getLibelle(),
          },
          aEtiquette.abr,
        );
      }
      static dessinListeEtiquettes(
        aListeEtiquettes,
        aAvecEspaceGaucheDebut = false,
      ) {
        if (!aListeEtiquettes || !aListeEtiquettes.parcourir) {
          return '';
        }
        return IE.jsx.str(
          'ul',
          { class: [Divers_css_1.SD.flexContain, Divers_css_1.SD.flexGap] },
          aListeEtiquettes.getTableau((aEtiquette, aIndex) => {
            const lHtml =
              UtilitaireMessagerie.dessinCouleurEtiquette(aEtiquette);
            return (
              lHtml &&
              IE.jsx.str(
                'li',
                {
                  class: [
                    Divers_css_1.SD.Maigre,
                    aAvecEspaceGaucheDebut &&
                      aIndex === 0 &&
                      Divers_css_1.SD.PetitEspaceGauche,
                  ],
                },
                lHtml,
              )
            );
          }),
        );
      }
      static estMessageVisuChat(aMessageVisu) {
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
      }
      static contruirePublicConnecte(
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
          '<div class="utilMess_texte" ie_ellipsis>',
          aPublic.getLibelle(),
          aAvecStatutConexion
            ? IE.jsx.str(
                'label',
                null,
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
      }
      static contruirePublicConnecteStatutConnexion(aPublic) {
        if (!aPublic) {
          return '';
        }
        return aPublic.refusMess
          ? 'Refuse les discussions'
          : TypeStatutConnexion_1.TypeGenreStatutConnexionUtil.toLibelle(
              aPublic.statutConnexion,
            );
      }
      static getIconeSvgDEtiquette(aEtiquette) {
        if (!aEtiquette || !aEtiquette.getGenre) {
          return '';
        }
        const lPrimParent =
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent ||
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent;
        if (aEtiquette.toutes) {
          return lPrimParent
            ? IE.jsx.str(
                IconeSvgDiscussion_cours_1.IconeSvgDiscussion_cours,
                null,
              )
            : IE.jsx.str(IconeSvgInbox_1.IconeSvgInbox, null);
        }
        if (aEtiquette.enCours) {
          return IE.jsx.str(
            IconeSvgDiscussion_cours_1.IconeSvgDiscussion_cours,
            null,
          );
        }
        if (aEtiquette.estFiltreDiscussionMesEleves) {
          return IE.jsx.str(IconeSvgUtilisateur_1.IconeSvgUtilisateur, null);
        }
        switch (aEtiquette.getGenre()) {
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Archive:
            return IE.jsx.str(
              IconeSvgArchiver_discussion_1.IconeSvgArchiver_discussion,
              null,
            );
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Alerte:
            return IE.jsx.str(IconeSvgAlerte_ppms_1.IconeSvgAlerte_ppms, null);
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_ContactVS:
            return IE.jsx.str(
              IconeSvgConversation_contact_vie_sco_1.IconeSvgConversation_contact_vie_sco,
              null,
            );
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Conversation:
            return IE.jsx.str(
              IconeSvgConversation_cours_1.IconeSvgConversation_cours,
              null,
            );
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Brouillon:
            return IE.jsx.str(
              IconeSvgBrouillon_discussion_1.IconeSvgBrouillon_discussion,
              null,
            );
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Poubelle:
            return IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null);
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_CarnetLiaison:
            return IE.jsx.str(
              IconeSvgCarnet_liaison_1.IconeSvgCarnet_liaison,
              null,
            );
          case TypeOrigineCreationEtiquetteMessage_1
            .TypeOrigineCreationEtiquetteMessage.OCEM_Pre_Harcelement:
            return IE.jsx.str(
              IconeSvgStop_harcelement_1.IconeSvgStop_harcelement,
              null,
            );
        }
        return '';
      }
      static construireImageEtiquette(aEtiquette) {
        const lResult = { icone: '', avecCompteurNonLu: true };
        const lIcone = UtilitaireMessagerie.getIconeSvgDEtiquette(aEtiquette);
        if (lIcone) {
          lResult.icone = lIcone;
        }
        if (
          TypeOrigineCreationEtiquetteMessage_1.TypeOrigineCreationEtiquetteMessageUtil.estEtiquettePerso(
            aEtiquette.getGenre(),
          )
        ) {
          lResult.icone = IE.jsx.str(
            Categorie_1.CarreCategorie,
            { couleur: aEtiquette.couleur },
            aEtiquette.abr,
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
      }
      static getNbNonlusDEtiquette(aEtiquette, aListeMessagerie) {
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
      }
      static getIconeSvgMessage(aMessage) {
        const lMessage = UtilitaireMessagerie.getDiscussionRacine(aMessage);
        let lResult = aMessage.estDiscussionEleve
          ? IE.jsx.str(IconeSvgUtilisateur_1.IconeSvgUtilisateur, null)
          : IE.jsx.str(
              IconeSvgDiscussion_cours_1.IconeSvgDiscussion_cours,
              null,
            );
        if (
          lMessage &&
          lMessage.listeEtiquettes &&
          lMessage.listeEtiquettes.count() > 0
        ) {
          lMessage.listeEtiquettes.parcourir((aEtiquette) => {
            const lIcone =
              UtilitaireMessagerie.getIconeSvgDEtiquette(aEtiquette);
            if (lIcone) {
              lResult = lIcone;
              return false;
            }
          });
        }
        return lResult;
      }
      static estDiscussionVisibleSelonEtiquette(aDiscussion, aEtiquette) {
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
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent ||
          GEtatUtilisateur.GenreEspace ===
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent;
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
      }
      static getEtiquetteInitSelonMessage(
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
      }
      static getGenreReponse(aGenre, aAvecInclureParentsEleves) {
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
      }
      static estGenreDestinataireAutorise(aGenreRessource) {
        const lApp = GApplication;
        switch (aGenreRessource) {
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve:
            return lApp.droits.get(
              ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionEleves,
            );
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
            return lApp.droits.get(
              ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionParents,
            );
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
            return lApp.droits.get(
              ObjetDroitsPN_1.TypeDroits.communication
                .avecDiscussionProfesseurs,
            );
          case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
            return lApp.droits.get(
              ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionPersonnels,
            );
          default:
        }
        return false;
      }
      static interdireReponseParentEleve() {
        return [
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimEleve,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      static unMessageContientLeDirecteur(aListeMessages) {
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
      }
      static avecEditionHtmlMessage() {
        return GApplication.droits.get(
          ObjetDroitsPN_1.TypeDroits.communication.avecDiscussionAvancee,
        );
      }
      static avecEditeurTiny() {
        return (
          ObjetNavigateur_1.Navigateur.withContentEditable &&
          ObjetSupport_1.Support.contentEditable &&
          UtilitaireMessagerie.avecEditionHtmlMessage()
        );
      }
      static avecAjoutPieceJointeMessage() {
        return (
          ObjetSupport_1.Support.avecSupportFileUpload &&
          ![
            Enumere_Espace_1.TypeGenreEspace.Espace_Eleve,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Eleve,
            Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent,
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve,
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimEleve,
          ].includes(GEtatUtilisateur.GenreEspace)
        );
      }
      static getListeDestCarnetLiaisonDElevePrimParent(aNumeroEleve) {
        const lEleve =
          GEtatUtilisateur.Identification.ListeRessources.getElementParNumero(
            aNumeroEleve,
          );
        if (!lEleve || !lEleve.destinatairesCarnetLiaison) {
          return new ObjetListeElements_1.ObjetListeElements();
        }
        return lEleve.destinatairesCarnetLiaison;
      }
      static getBrouillonDefaut() {
        const lBrouillon = new ObjetElement_1.ObjetElement();
        lBrouillon.contenu = '';
        lBrouillon.objet = '';
        lBrouillon.listeFichiers =
          new ObjetListeElements_1.ObjetListeElements();
        return lBrouillon;
      }
      static avecListeDiffusionSelonEspace() {
        return (
          [
            Enumere_Espace_1.TypeGenreEspace.Espace_Professeur,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Professeur,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimProfesseur,
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimProfesseur,
            Enumere_Espace_1.TypeGenreEspace.Espace_Administrateur,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Administrateur,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimDirection,
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimDirection,
            Enumere_Espace_1.TypeGenreEspace.Espace_Etablissement,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Etablissement,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimMairie,
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimMairie,
          ].indexOf(GEtatUtilisateur.GenreEspace) >= 0
        );
      }
      static getLibelleSuppListePublics(aArticle) {
        const H = [];
        if (aArticle) {
          switch (aArticle.getGenre()) {
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
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
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
              if (aArticle.estMonCpe) {
                H.push(
                  `<p><i role="presentation" class="icon_star m-right-s"></i>${'CPE de mon enfant'}</p>`,
                );
              }
              if (aArticle.fonction) {
                H.push(`<p>${aArticle.fonction.getLibelle()}</p>`);
              }
              break;
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve:
            case Enumere_Ressource_1.TypeHttpRessource
              .HttpRessource_Responsable:
              if (aArticle.classesNiv) {
                H.push(
                  `<p>${aArticle.classesNiv.getTableauLibelles().join(', ')}</p>`,
                );
              }
              break;
          }
        }
        return H.join('');
      }
      static getLibelleSuppListePublicsGenreCumulFonction(aArticle) {
        if (aArticle) {
          switch (aArticle.getGenre()) {
            case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
              if (aArticle.estMonCpe) {
                return `<p class="m-bottom"><i role="presentation" class="icon_star m-right-s"></i>${'CPE de mon enfant'}</p>`;
              }
              break;
          }
          return '';
        }
        return '';
      }
      static async selectionnerListePublics(aParams) {
        const lParams = Object.assign(
          {
            genreRessource: undefined,
            avecIndicationDiscussionInterdit: true,
            listeRessourcesSelectionnees:
              new ObjetListeElements_1.ObjetListeElements(),
            uniquementAjouterDest: false,
            listeRessourcesInvisibles: undefined,
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
              Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
              Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
            ].includes(GEtatUtilisateur.GenreEspace) &&
            lParams.genreRessource ===
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable
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
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant,
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
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
              case Enumere_Ressource_1.TypeHttpRessource
                .HttpRessource_Enseignant:
                lMessage = 'Tous les professeurs de l'établissement sont déjà destinataires du message';
                break;
              case Enumere_Ressource_1.TypeHttpRessource
                .HttpRessource_Personnel:
                lMessage = 'Tous les personnels de l'établissement sont déjà destinataires du message';
                break;
              case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve:
                lMessage = 'Tous les élèves sont déjà destinataires du message';
                break;
              case Enumere_Ressource_1.TypeHttpRessource
                .HttpRessource_Responsable:
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
          [
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable,
          ].includes(lGenreRessource) &&
          [
            Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
          ].includes(GEtatUtilisateur.GenreEspace)
        ) {
          lEstCasRespToResp = true;
          lGenreCumul =
            ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
              .respDelegues;
        }
        let lListeCumuls = new ObjetListeElements_1.ObjetListeElements();
        if (
          lGenreRessource ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve ||
          (lGenreRessource ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable &&
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
            lGenreRessource ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable
          ) {
            lListeCumuls.addElement(
              new ObjetElement_1.ObjetElement(
                'Nom des élèves',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.nomEleves,
              ),
            );
            lListeCumuls.addElement(
              new ObjetElement_1.ObjetElement(
                'Régime des élèves',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.regimeEleve,
              ),
            );
            lListeCumuls.addElement(
              new ObjetElement_1.ObjetElement(
                'Autorisation de sortie des élèves',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.autorisationsDeSortieEleve,
              ),
            );
          }
          if (
            lGenreRessource ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve
          ) {
            lListeCumuls.addElement(
              new ObjetElement_1.ObjetElement(
                'Régime de demi-pension',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.regime,
              ),
            );
            lListeCumuls.addElement(
              new ObjetElement_1.ObjetElement(
                'Autorisation de sortie',
                0,
                ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.autorisationsDeSortie,
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
            lGenreRessource ===
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve &&
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
            lGenreRessource ===
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve ||
            lGenreRessource ===
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable
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
          lGenreRessource ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant &&
          [
            Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant,
            Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Accompagnant,
            Enumere_Espace_1.TypeGenreEspace.Mobile_PrimAccompagnant,
            Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur,
            Enumere_Espace_1.TypeGenreEspace.Mobile_Tuteur,
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
          lGenreRessource ===
          Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel
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
      }
      static async fenetreSelectionnerListePublics(aParams) {
        const lParams = Object.assign(
          {
            genreRessource: undefined,
            listeRessources: new ObjetListeElements_1.ObjetListeElements(),
            listeRessourcesSelectionnees:
              new ObjetListeElements_1.ObjetListeElements(),
            avecIndicationDiscussionInterdit: false,
            uniquementAjouterDest: false,
            listeCumuls: undefined,
            genreCumul: undefined,
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
          lInstance.setOptionsFenetreSelectionRessource({
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
              Enumere_Ressource_1.TypeHttpRessourceUtil.getTitreFenetreSelectionRessource(
                lParams.genreRessource,
              ),
            listeNiveauxResponsabilite: lParams.listeNiveauxResponsabilite,
          });
        });
      }
      static selectionnerListeDiffusions(aInstance) {
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
      }
      static avecListeDestinatairesProfsStatique() {
        return [
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimEleve,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      static getListeDestProfsDiscussionPrimEleveFormat() {
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
      }
      static getLibelleRaccourciMessPrimEleve() {
        const lListeDest =
          GEtatUtilisateur.getUtilisateur().listeDestProfsDiscussionPrimEleve;
        if (lListeDest && lListeDest.count() > 0) {
          return lListeDest.count() > 1
            ? 'Écrire un message'
            : 'Écrire un message à %s'],
              );
        }
        return '';
      }
      static composeMettreEnCopie(aParams) {
        const H = [];
        H.push('<fieldset class="Gras">');
        H.push(
          '<legend>',
          'Mettre en copie',
          '</legend>',
        );
        if (aParams && aParams.jsxCheckboxDestinataireDirecteur) {
          H.push(
            IE.jsx.str(
              'div',
              null,
              IE.jsx.str(
                IEHtml_CheckboxRadio_1.Checkbox,
                {
                  ie_model: aParams.jsxCheckboxDestinataireDirecteur,
                  class: 'm-left-xl m-top-l',
                },
                'la direction de l'école',
              ),
            ),
          );
        }
        if (aParams && aParams.jsxCheckboxAvecEnseigantDEleve) {
          H.push(
            IE.jsx.str(
              'div',
              null,
              IE.jsx.str(
                IEHtml_CheckboxRadio_1.Checkbox,
                {
                  ie_model: aParams.jsxCheckboxAvecEnseigantDEleve,
                  class: 'm-left-xl m-top-l',
                },
                'l'enseignant(e) de mon enfant',
              ),
            ),
          );
        }
        H.push('</fieldset>');
        return H.join('');
      }
      static creerDiscussionAvecMairie(aObjetFenetre, aInstance) {
        if (!UtilitaireMessagerie.controleMessagerieDesactivee()) {
          return;
        }
        const lFenetreMessage =
          ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(aObjetFenetre, {
            pere: aInstance,
          });
        lFenetreMessage.setOptionsFenetre({
          titre: 'Nouveau message à la mairie',
        });
        lFenetreMessage.setDonnees({
          ListeRessources:
            GEtatUtilisateur.Identification.ressource
              .destinatairePersonnelsMairie,
          listeSelectionnee: new ObjetListeElements_1.ObjetListeElements(),
          genreRessource:
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
          message: { destinataireMairie: true },
        });
      }
      static controleMessagerieDesactivee(aEstUnChat = false) {
        const lDroits = GApplication.droits;
        if (aEstUnChat) {
          if (
            !lDroits.get(
              ObjetDroitsPN_1.TypeDroits.communication.avecMessageInstantane,
            )
          ) {
            GApplication.getMessage().afficher({
              message: 'Les discussions sont désactivées',
            });
            return false;
          }
        } else {
          if (
            !lDroits.get(
              ObjetDroitsPN_1.TypeDroits.communication.avecDiscussion,
            )
          ) {
            GApplication.getMessage().afficher({
              message: 'Les discussions sont désactivées',
            });
            return false;
          }
        }
        return true;
      }
    }
    exports.UtilitaireMessagerie = UtilitaireMessagerie;
    UtilitaireMessagerie.palierNbMessages = 20;
    UtilitaireMessagerie.C_TailleObjetMessage = C_TailleObjetMessage;
    UtilitaireMessagerie.dessinSansEtiquette = () => {
      return IE.jsx.str(Categorie_1.CarreCategorie, {
        couleur: Categorie_1.Categorie.c_couleurSansCategorie,
      });
    };
    function _construirePJs(aMessage) {
      return UtilitaireUrl_1.UtilitaireUrl.construireListeUrls(
        aMessage.listeDocumentsJoints,
      );
    }
    async function getListePublicMessagePromise(
      aInstance,
      aNumeroMessage,
      aEstPublicParticipant,
      aEstDestinatairesReponse,
    ) {
      const lParams = {
        message: new ObjetElement_1.ObjetElement('', aNumeroMessage),
        estPublicParticipant: aEstPublicParticipant,
        estDestinatairesReponse: !!aEstDestinatairesReponse,
      };
      const lReponse = await new ObjetRequeteSaisiePublicMessage(aInstance)
        .setOptions({ avecControleModeExclusif: false, messageDetail: '' })
        .lancerRequete(lParams);
      if (
        lReponse.genreReponse !== ObjetRequeteJSON_1.EGenreReponseSaisie.succes
      ) {
        return null;
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
    class ObjetRequeteSaisiePublicMessage extends ObjetRequeteJSON_1.ObjetRequeteSaisie {}
    ObjetRequeteSaisiePublicMessage.inscrire('SaisiePublicMessage');
  },
  fn: 'utilitairemessagerie.js',
});