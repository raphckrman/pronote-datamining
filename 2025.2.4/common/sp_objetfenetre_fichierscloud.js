IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_FichiersCloud = void 0;
    const DonneesListe_FichiersCloud_1 = require('DonneesListe_FichiersCloud');
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetListe_1 = require('ObjetListe');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TTypeElementCloud_1 = require('TTypeElementCloud');
    const TypeStatutInterrogationCloud_1 = require('TypeStatutInterrogationCloud');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const Enumere_Action_1 = require('Enumere_Action');
    const UtilitaireBoutonBandeau_1 = require('UtilitaireBoutonBandeau');
    const ObjetRequeteCloudAttente_1 = require('ObjetRequeteCloudAttente');
    const UtilitaireOAuth2_1 = require('UtilitaireOAuth2');
    const UtilitaireRequetesCloud_1 = require('UtilitaireRequetesCloud');
    const Enumere_EvenementListe_1 = require('Enumere_EvenementListe');
    require('ObjetFenetre_FichiersCloud.css');
    class ObjetFenetre_FichiersCloud extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          titre:
            DonneesListe_FichiersCloud_1.TradFichiersCloud.TitreFichierCloud,
          hauteur: 700,
          modale: true,
          listeBoutons: [
            {
              libelle:
                'Fermer',
              theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
            },
            {
              theme: Type_ThemeBouton_1.TypeThemeBouton.primaire,
              estValider: true,
            },
          ],
          avecComposeBasInFooter: true,
          modeSelectionRepertoirePourUpload: false,
          estMonoSelection: false,
        });
      }
      construireInstances() {
        this.idListe = this.add(
          ObjetListe_1.ObjetListe,
          this._eventListe,
          (aInstance) => {
            aInstance.setOptionsListe({
              skin: ObjetListe_1.ObjetListe.skin.flatDesign,
              avecCBToutCocher: this.optionsFenetre
                .modeSelectionRepertoirePourUpload
                ? false
                : ObjetListe_1.ObjetListe.typeLibelleCocheCBEntete
                    .compteurSelec,
              boutons: [
                {
                  class: 'icon_refresh',
                  event: () => {
                    this._actualiserDossierDIdPartage(
                      this.idPartageDossierSelection,
                    );
                  },
                  getDisabled: () => {
                    return !this._estIdPartageValide(
                      this.idPartageDossierSelection,
                    );
                  },
                  title:
                    DonneesListe_FichiersCloud_1.TradFichiersCloud
                      .ActualisationRepertoire,
                },
                { genre: ObjetListe_1.ObjetListe.typeBouton.rechercher },
              ],
            });
          },
        );
      }
      setDonnees(aParam) {
        this.listeCloud = GEtatUtilisateur.listeCloud;
        this.idPartageDossierSelection = null;
        if (
          !aParam ||
          !MethodesObjet_1.MethodesObjet.isNumber(aParam.service)
        ) {
          return;
        }
        if (!aParam.inscriptionSeule) {
          this.afficher();
        }
        this.param = aParam;
        if (!aParam.inscriptionSeule) {
          this.setOptionsFenetre({
            titre:
              DonneesListe_FichiersCloud_1.TradFichiersCloud.TitreFichierCloud.format(
                [
                  this.listeCloud
                    .getElementParNumeroEtGenre(null, aParam.service)
                    .getLibelle(),
                ],
              ),
          });
        }
        this.idPartageDossierSelection = null;
        new ObjetRequeteCloudAttente_1.ObjetRequeteCloudAttente(this)
          .lancerRequete({ service: aParam.service, recupFichiers: true })
          .then((aParams) => {
            this._surReponseCloudAttente(aParams);
          });
        this.$refreshSelf();
      }
      jsxModeleChipsFilAriane(aIdPartage, aEstDerniereChips) {
        return {
          event: () => {
            this._actualiserDossierDIdPartage(aIdPartage);
          },
          getSelected: () => {
            return aEstDerniereChips;
          },
        };
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          btnMrFiche: {
            event() {
              GApplication.getMessage().afficher({
                idRessource: 'mficheliencloud',
              });
            },
            getTitle() {
              return ObjetTraduction_1.GTraductions.getTitreMFiche(
                'mficheliencloud',
              );
            },
          },
          getHtmlFilAriane() {
            const H = [];
            const lTab = aInstance._getTabParentsDIdPartage(
              aInstance.idPartageDossierSelection,
            );
            lTab.forEach((aDossier, aIndex) => {
              H.push(
                IE.jsx.str(
                  'ie-chips',
                  {
                    'ie-model': aInstance.jsxModeleChipsFilAriane.bind(
                      aInstance,
                      aDossier.idPartage,
                      aIndex === lTab.length - 1,
                    ),
                    title:
                      DonneesListe_FichiersCloud_1.TradFichiersCloud.SelectionnerRepertoire_S.format(
                        [aDossier.getLibelle()],
                      ),
                  },
                  aDossier.getLibelle(),
                ),
              );
            });
            return H.join(
              IE.jsx.str('i', {
                class: 'icon_chevron_right',
                role: 'presentation',
              }),
            );
          },
          btnUpload: {
            getOptionsSelecFile() {
              return {
                maxSize:
                  UtilitaireRequetesCloud_1.UtilitaireRequetesCloud
                    .c_TailleMaxUpload_cloud,
                multiple: true,
                avecResizeImage: false,
                avecTransformationFlux: false,
              };
            },
            addFiles: function (aParams) {
              aInstance._uploadListeFichiersVersCloud(aParams.listeFichiers);
            },
            getClass() {
              return aInstance.param &&
                aInstance.param.service &&
                aInstance._estIdPartageValide(
                  aInstance.idPartageDossierSelection,
                )
                ? ''
                : 'hide';
            },
          },
          fenetreBtn: {
            getLibelle(aBoutonRepeat) {
              if (aBoutonRepeat.element.estValider) {
                return aInstance.optionsFenetre
                  .modeSelectionRepertoirePourUpload
                  ? DonneesListe_FichiersCloud_1.TradFichiersCloud
                      .ChoisirRepertoire_FichierCloud
                  : DonneesListe_FichiersCloud_1.TradFichiersCloud
                      .PartagerFichierCloud;
              }
              return aBoutonRepeat.element.libelle;
            },
            getDisabled(aBoutonRepeat) {
              if (
                aBoutonRepeat.element.estValider &&
                aInstance.param &&
                aInstance.param.racineFichier
              ) {
                let lResult = 0;
                aInstance._parcoursDossiersRacine((aElement) => {
                  if (aElement.estCoche) {
                    lResult += 1;
                  }
                });
                return lResult === 0;
              }
              return false;
            },
          },
        });
      }
      surValidation(aGenreBouton) {
        const lBouton = this.getBoutonNumero(aGenreBouton);
        Promise.resolve()
          .then(() => {
            if (lBouton && lBouton.estValider && this.param.racineFichier) {
              const lListeSelection = this.getSelection(
                this.param.racineFichier,
              );
              const lListePubPDF = lListeSelection.getListeElements((aEle) => {
                return aEle.pubPdf;
              });
              if (
                this.listeCloud.getElementParNumeroEtGenre(
                  null,
                  this.param.service,
                ).avecChoixFormat &&
                lListePubPDF.count() > 0
              ) {
                return GApplication.getMessage()
                  .afficher({
                    type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                      .Confirmation,
                    titre:
                      DonneesListe_FichiersCloud_1.TradFichiersCloud
                        .TitreFenetreFormat,
                    message: this._composeMessage(lListePubPDF),
                    controleur: {
                      radioFormat: {
                        getValue: function (aIdPartage, aFormat) {
                          return (
                            lListeSelection
                              .getListeElements((aEle) => {
                                return aEle.idPartage === aIdPartage;
                              })
                              .get(0).formatPub === aFormat
                          );
                        },
                        setValue: function (aIdPartage, aFormat) {
                          lListeSelection
                            .getListeElements((aEle) => {
                              return aEle.idPartage === aIdPartage;
                            })
                            .get(0).formatPub = aFormat;
                        },
                      },
                    },
                  })
                  .then((aGenreAction) => {
                    if (
                      aGenreAction === Enumere_Action_1.EGenreAction.Valider
                    ) {
                      return lListeSelection;
                    }
                  });
              }
              return lListeSelection;
            }
          })
          .then((aListeSelection) => {
            if (aListeSelection && aListeSelection.count) {
              const lListeDocs = new ObjetListeElements_1.ObjetListeElements();
              if (
                lBouton &&
                lBouton.estValider &&
                aListeSelection.count() > 0
              ) {
                aListeSelection.parcourir((aElement) => {
                  const lNewElement = new ObjetElement_1.ObjetElement(
                    aElement.getLibelle(),
                    null,
                    Enumere_DocumentJoint_1.EGenreDocumentJoint.Cloud,
                  );
                  lNewElement.service = this.param.service;
                  lNewElement.idPartage = aElement.idPartage;
                  lNewElement.url = aElement.url;
                  lNewElement.publiPdf = aElement.pubPdf
                    ? aElement.formatPub
                    : TTypeElementCloud_1.TypeFormatPublication.FP_Natif;
                  lNewElement.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
                  lListeDocs.add(lNewElement);
                });
              }
              this.callback.appel({
                bouton: aGenreBouton,
                estValider: !!(lBouton && lBouton.estValider),
                service: this.param.service,
                listeSelection: aListeSelection,
                listeNouveauxDocs: lListeDocs,
              });
            }
          })
          .finally(() => {
            this.fermer();
          });
      }
      composeContenu() {
        const H = [];
        H.push(
          IE.jsx.str(
            'div',
            { class: 'bloc' },
            IE.jsx.str(
              'div',
              { class: 'entete-cloud' },
              IE.jsx.str('div', {
                class: 'fil-ariane-cloud',
                'ie-html': 'getHtmlFilAriane',
              }),
            ),
            IE.jsx.str('div', {
              id: this.getNomInstance(this.idListe),
              class: 'liste-fichiers',
            }),
            !this.optionsFenetre.modeSelectionRepertoirePourUpload
              ? IE.estMobile
                ? IE.jsx.str(
                    'ie-bouton',
                    {
                      class: 'selecfile-button themeBoutonNeutre',
                      'ie-model': 'btnUpload',
                      'ie-selecfile': true,
                      'ie-class': 'btnUpload.getClass',
                    },
                    DonneesListe_FichiersCloud_1.TradFichiersCloud
                      .Deposer_Cloud,
                  )
                : IE.jsx.str(
                    'div',
                    {
                      class: 'selecfile-droppable',
                      'ie-model': 'btnUpload',
                      'ie-selecfile': true,
                      'ie-class': 'btnUpload.getClass',
                      role: 'button',
                      tabindex: '0',
                    },
                    DonneesListe_FichiersCloud_1.TradFichiersCloud
                      .GlissezDeposer_Cloud,
                  )
              : '',
          ),
        );
        return H.join('');
      }
      composeBas() {
        const H = [];
        if (!this.optionsFenetre.modeSelectionRepertoirePourUpload) {
          H.push(
            '<div>',
            UtilitaireBoutonBandeau_1.UtilitaireBoutonBandeau.getHtmlBtnMonsieurFiche(
              'btnMrFiche',
            ),
            '</div>',
          );
        }
        return H.join('');
      }
      getSelection(aRacine) {
        const lResult = new ObjetListeElements_1.ObjetListeElements();
        const lNb = aRacine.listeFichier ? aRacine.listeFichier.count() : 0;
        for (let i = 0; i < lNb; i++) {
          const lElement = aRacine.listeFichier.get(i);
          if (lElement.estCoche) {
            const lNewElement = new ObjetElement_1.ObjetElement(
              lElement.getLibelle(),
              lElement.getGenre(),
            );
            lNewElement.idPartage = lElement.idPartage;
            lNewElement.formatPub = lElement.formatPub;
            lNewElement.pubPdf = lElement.pubPdf;
            lResult.addElement(lNewElement);
          }
          if (
            lElement.getGenre() ===
            TTypeElementCloud_1.TTypeElementCloud.tec_Dossier
          ) {
            lResult.add(this.getSelection(lElement));
          }
        }
        return lResult;
      }
      _surReponseCloudAttente(aParamCloud, aEnAuthCloud = false) {
        if (
          'status' in aParamCloud &&
          aParamCloud.status ===
            TypeStatutInterrogationCloud_1.TypeStatutInterrogationCloud
              .sic_OK &&
          !aEnAuthCloud
        ) {
          if (!this.param.inscriptionSeule) {
            this.idPartageDossierSelection = null;
            if ('idPartage' in aParamCloud && aParamCloud.idPartage) {
              this.idPartageDossierSelection = aParamCloud.idPartage;
              const lDossier = this._getDossierDIdPartageDansRacine(
                this.idPartageDossierSelection,
              );
              if (lDossier && aParamCloud.racineFichier) {
                const lElementService =
                  this.listeCloud.getElementParNumeroEtGenre(
                    null,
                    aParamCloud.service,
                  );
                this._setDonneesListe(
                  new DonneesListe_FichiersCloud_1.DonneesListe_FichiersCloud(
                    aParamCloud.racineFichier.listeFichier,
                  ),
                  lElementService,
                );
                this.getInstance(this.idListe).focusSurPremierElement();
              }
            } else if (
              'racineFichier' in aParamCloud &&
              aParamCloud.racineFichier
            ) {
              const lElementService =
                this.listeCloud.getElementParNumeroEtGenre(
                  null,
                  aParamCloud.service,
                );
              this.param = aParamCloud;
              this.idPartageDossierSelection =
                aParamCloud.racineFichier.idPartage;
              this._setDonneesListe(
                new DonneesListe_FichiersCloud_1.DonneesListe_FichiersCloud(
                  this.param.racineFichier.listeFichier,
                ),
                lElementService,
              );
            } else {
            }
          } else {
            if (
              MethodesObjet_1.MethodesObjet.isFunction(
                this.param.callbackInscriptionSeule,
              )
            ) {
              this.param.callbackInscriptionSeule();
            }
            this.fermer();
          }
        } else if (
          'status' in aParamCloud &&
          aParamCloud.status ===
            TypeStatutInterrogationCloud_1.TypeStatutInterrogationCloud
              .sic_TokenInvalide &&
          !aEnAuthCloud
        ) {
          UtilitaireOAuth2_1.UtilitaireOAuth2.authentificationPromise(
            aParamCloud.idOAuth2,
          ).then(
            () => {
              new ObjetRequeteCloudAttente_1.ObjetRequeteCloudAttente(this)
                .lancerRequete(aParamCloud)
                .then((aParamsReponse) => {
                  let lService =
                    GEtatUtilisateur.listeCloud.getElementParNumeroEtGenre(
                      null,
                      aParamCloud.service,
                    );
                  if (!!lService) {
                    lService.idOAuth2 = aParamCloud.idOAuth2;
                  }
                  lService =
                    GEtatUtilisateur.listeCloudDepotServeur.getElementParNumeroEtGenre(
                      null,
                      aParamCloud.service,
                    );
                  if (!!lService) {
                    lService.idOAuth2 = aParamCloud.idOAuth2;
                  }
                  if (aParamCloud.partageFichier) {
                    this.valider(aParamsReponse);
                  } else {
                    this._surReponseCloudAttente(
                      aParamsReponse,
                      aParamCloud.oauth,
                    );
                  }
                });
            },
            () => {
              this.fermer();
            },
          );
        } else {
          GApplication.getMessage()
            .afficher({
              message:
                aParamCloud.message ||
                'Une erreur s'est produite',
            })
            .then(() => {
              this.fermer();
            });
        }
      }
      _eventListe(aParametres) {
        switch (aParametres.genreEvenement) {
          case Enumere_EvenementListe_1.EGenreEvenementListe.Selection: {
            if (
              aParametres.article.getGenre() ===
              TTypeElementCloud_1.TTypeElementCloud.tec_Dossier
            ) {
              this._actualiserDossierDIdPartage(aParametres.article.idPartage);
            }
            break;
          }
        }
      }
      _setDonneesListe(aDonneesListe, aElementService) {
        this.getInstance(this.idListe).setDonnees(
          aDonneesListe.setOptions({
            estMonoSelection: this.optionsFenetre.estMonoSelection,
            uniquementRepertoireVisible:
              this.optionsFenetre.modeSelectionRepertoirePourUpload,
            avecSelectionRepertoire:
              (aElementService && aElementService.avecPartageDossier) ||
              this.optionsFenetre.modeSelectionRepertoirePourUpload,
            avecFormat: aElementService && aElementService.avecChoixFormat,
          }),
        );
      }
      _requeteRecupFichiersDIdPartage(aIdPartage) {
        if (!this._estIdPartageValide(aIdPartage)) {
          return null;
        }
        return new ObjetRequeteCloudAttente_1.ObjetRequeteCloudAttente(this)
          .lancerRequete({
            service: this.param.service,
            idPartage: aIdPartage,
            recupFichiers: true,
          })
          .then((aParams) => {
            if (
              !aParams.racineFichier ||
              aIdPartage !== aParams.racineFichier.idPartage
            ) {
              return null;
            }
            this._parcoursDossiersRacine((aElement, aPere) => {
              if (aElement.idPartage === aIdPartage) {
                aElement.listeFichier = aParams.racineFichier.listeFichier;
                aElement.pere = aPere;
              }
            });
            return aParams;
          })
          .catch((e) => {
            return null;
          });
      }
      _actualiserDossierDIdPartage(aIdPartage) {
        this._requeteRecupFichiersDIdPartage(aIdPartage).then((aParams) => {
          this.getInstance(this.idListe).reset();
          this._deselectionnerTout(this.param.racineFichier);
          if (aParams) {
            aParams.idPartage = aIdPartage;
            return this._surReponseCloudAttente(aParams);
          }
        });
      }
      _composeMessage(aListeFichiers) {
        const H = [];
        H.push(
          '<div class="Gras">',
          DonneesListe_FichiersCloud_1.TradFichiersCloud
            .ExplicationFenetreFormat,
          '</div>',
        );
        H.push('<div class="EspaceHaut EspaceGauche">');
        aListeFichiers.parcourir((aEle) => {
          H.push(
            '<div><span>' +
              aEle.getLibelle() +
              '</span><ie-radio ie-model="radioFormat(\'' +
              aEle.idPartage +
              "'," +
              TTypeElementCloud_1.TypeFormatPublication.FP_Natif,
            ')" class="EspaceHaut">',
            DonneesListe_FichiersCloud_1.TradFichiersCloud.FormatOrigine,
            '</ie-radio><ie-radio ie-model="radioFormat(\'' +
              aEle.idPartage +
              "'," +
              TTypeElementCloud_1.TypeFormatPublication.FP_Pdf,
            ')" class="EspaceHaut">',
            DonneesListe_FichiersCloud_1.TradFichiersCloud.FormatPdf,
            '</ie-radio></div>',
          );
        });
        H.push('</div>');
        H.push(
          '<div class="GrandEspaceHaut">',
          DonneesListe_FichiersCloud_1.TradFichiersCloud
            .ConfirmationFenetreFormat,
          '</div>',
        );
        return H.join('');
      }
      _uploadListeFichiersVersCloud(aListeFichiers) {
        if (
          aListeFichiers &&
          aListeFichiers.count() > 0 &&
          this._estIdPartageValide(this.idPartageDossierSelection)
        ) {
          const lListeFichiersResultat =
            new ObjetListeElements_1.ObjetListeElements();
          return UtilitaireRequetesCloud_1.UtilitaireRequetesCloud.requeteUploadVersCloudListFichiers(
            {
              idPartageDossier: this.idPartageDossierSelection,
              service: this.param.service,
              listeFichiersATraiter: aListeFichiers,
              listeFichiersResultat: lListeFichiersResultat,
            },
          ).then(
            () => {
              if (lListeFichiersResultat.count() > 0) {
                return this._requeteRecupFichiersDIdPartage(
                  this.idPartageDossierSelection,
                ).then((aParams) => {
                  if (!aParams || !aParams.racineFichier) {
                    return;
                  }
                  this._parcoursDossiersRacine((aFichierSource) => {
                    if (
                      aFichierSource.selection &&
                      aFichierSource.getGenre() ===
                        TTypeElementCloud_1.TTypeElementCloud.tec_Fichier
                    ) {
                      aParams.racineFichier.listeFichier.parcourir(
                        (aFichier) => {
                          if (aFichier.idPartage === aFichierSource.idPartage) {
                            aFichier.selection = true;
                          }
                        },
                      );
                    }
                  });
                  lListeFichiersResultat.parcourir((aFichierUpload) => {
                    if (
                      aFichierUpload.idPartage &&
                      aParams.racineFichier &&
                      aParams.racineFichier.listeFichier
                    ) {
                      aParams.racineFichier.listeFichier.parcourir(
                        (aFichier) => {
                          if (
                            aFichier.idPartage === aFichierUpload.idPartage &&
                            aFichier.getGenre() ===
                              TTypeElementCloud_1.TTypeElementCloud.tec_Fichier
                          ) {
                            aFichier.selection = true;
                            return false;
                          }
                        },
                      );
                    }
                  });
                  aParams.idPartage = this.idPartageDossierSelection;
                  return this._surReponseCloudAttente(aParams);
                });
              }
            },
            () => {},
          );
        }
      }
      _parcoursDossiers(aDossier, aFunc, aParent) {
        if (aDossier) {
          if (aFunc(aDossier, aParent) === false) {
            return false;
          }
          if (
            aDossier.getGenre() ===
              TTypeElementCloud_1.TTypeElementCloud.tec_Dossier &&
            aDossier.listeFichier &&
            aDossier.listeFichier.parcourir
          ) {
            aDossier.listeFichier.parcourir((aElement) => {
              return this._parcoursDossiers(aElement, aFunc, aDossier);
            });
          }
        }
      }
      _parcoursDossiersRacine(aFunc) {
        return this._parcoursDossiers(this.param.racineFichier, aFunc);
      }
      _getDossierDIdPartageDansRacine(aIdPartage) {
        let lResult = null;
        if (!this._estIdPartageValide(aIdPartage)) {
          return null;
        }
        this._parcoursDossiersRacine((aDossier) => {
          if (aDossier.idPartage === aIdPartage) {
            lResult = aDossier;
            return false;
          }
        });
        return lResult;
      }
      _getTabParentsDIdPartage(aIdPartage) {
        const lTab = [];
        let lDossier = this._getDossierDIdPartageDansRacine(aIdPartage);
        if (lDossier) {
          lTab.push(lDossier);
          while (lDossier.pere) {
            lDossier = this._getDossierDIdPartageDansRacine(
              lDossier.pere.idPartage,
            );
            if (lDossier) {
              lTab.push(lDossier);
            }
          }
        }
        return lTab.reverse();
      }
      _deselectionnerTout(aElementArbre) {
        this._parcoursDossiers(aElementArbre, (aElement) => {
          if (aElement.estCoche) {
            aElement.estCoche = false;
          }
        });
      }
      _estIdPartageValide(aIdPartage) {
        return !!aIdPartage || aIdPartage === '';
      }
    }
    exports.ObjetFenetre_FichiersCloud = ObjetFenetre_FichiersCloud;
  },
  fn: 'objetfenetre_fichierscloud.js',
});