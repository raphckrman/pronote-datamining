IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDonneesListeFlatDesign = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetDonneesListeBase_1 = require('ObjetDonneesListeBase');
    const ObjetDonneesListeFlatDesign_css_1 = require('ObjetDonneesListeFlatDesign.css');
    const ObjetListeEspaceMobile_css_1 = require('ObjetListeEspaceMobile.css');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    class ObjetDonneesListeFlatDesign extends ObjetDonneesListeBase_1.ObjetDonneesListeBase {
      constructor(aDonnees) {
        super(aDonnees);
        this.estFlatDesign = true;
        this.setOptions({
          avecBoutonActionLigne: true,
          avecEvnt_Creation: true,
          avecCB: false,
          avecEvnt_CB: true,
          avecCocheCBSurLigne: false,
          avecDeselectionSurNonSelectionnable: false,
          avecDeploiement: true,
          avecEventDeploiementSurCellule: false,
          flatDesignMinimal: false,
          avecEllipsis: false,
          avecContextMenuSansSelection: true,
          avecIndentationSousInterTitre: false,
          avecFusionLignePereFils: false,
        });
      }
      getZoneGauche(aParams) {
        return '';
      }
      avecCB(aParams) {
        return this.options.avecCB;
      }
      getIconeGaucheContenuFormate(aParams) {
        return '';
      }
      getHintIconeGaucheContenuFormate(aParams) {
        return '';
      }
      getTitreZonePrincipale(aParams) {
        return aParams.article.getLibelle();
      }
      getInfosSuppZonePrincipale(aParams) {
        return '';
      }
      getZoneComplementaire(aParams) {
        return '';
      }
      getZoneMessage(aParams) {
        return '';
      }
      getZoneMessageLarge(aParams) {
        return '';
      }
      getAriaLabelZoneCellule(aParams, aZone) {
        return '';
      }
      getOrdreAriaLabelZoneCellule(aParams) {
        return [
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.lu,
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.checkbox,
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.zoneGauche,
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign
            .iconeGaucheContenuFormate,
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.titre,
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign
            .infosSuppZonePrincipale,
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.message,
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.messageLarge,
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.zoneComplementaire,
        ];
      }
      estLigneOff(aParams) {
        if (this.avecCB(aParams)) {
          return this.getDisabledCB(aParams);
        }
        return false;
      }
      avecBoutonActionLigne(aParams) {
        return (
          this.options.avecBoutonActionLigne &&
          !this.estInterTitre(aParams.article)
        );
      }
      estInterTitre(aArticle) {
        return !!aArticle.estInterTitre;
      }
      avecSeparateurLigneHautFlatdesign(aParamsCellule, aParamsCellulePrec) {
        return (
          aParamsCellule.article &&
          aParamsCellulePrec.article &&
          !this.estInterTitre(aParamsCellule.article) &&
          !this.estInterTitre(aParamsCellulePrec.article) &&
          !(
            this.options.avecFusionLignePereFils &&
            aParamsCellule.article.pere &&
            aParamsCellule.article.pere.estUnDeploiement
          )
        );
      }
      desactiverIndentationParente() {
        return false;
      }
      getValueCB(aParams) {
        return aParams.article ? aParams.article.estCoche : false;
      }
      setValueCB(aParams, aValue) {
        aParams.article.estCoche = aValue;
      }
      getDisabledCB(aParams) {
        return false;
      }
      getTotal(aEstHeader) {
        return null;
      }
      getLigneTotaleSelectionnable(aParamsCellule) {
        return null;
      }
      estLigneTotaleSelectionnable(aArticle) {
        return !!(aArticle && aArticle.estLigneTotale);
      }
      construireFiltres() {
        return '';
      }
      reinitFiltres() {}
      estFiltresParDefaut() {
        return false;
      }
      getLibelleDraggable(aParams) {
        const lTitre = this.getTitreZonePrincipale(aParams);
        const lInfosSupp = this.getInfosSuppZonePrincipale(aParams);
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          lTitre,
          lInfosSupp ? IE.jsx.str('br', null) + lInfosSupp : '',
        );
      }
      _getValeur(aParams) {
        const lAvecEllipsis = this.options.avecEllipsis;
        if (this.estInterTitre(aParams.article)) {
          let lNiveau = aParams.article.estInterTitre;
          if (
            lNiveau !== ObjetDonneesListeFlatDesign.typeInterTitre.h4 &&
            lNiveau !== ObjetDonneesListeFlatDesign.typeInterTitre.h5
          ) {
            lNiveau = ObjetDonneesListeFlatDesign.typeInterTitre.h3;
          }
          return {
            libelle: IE.jsx.str(
              'div',
              {
                class: [
                  ObjetDonneesListeFlatDesign_css_1
                    .StylesObjetDonneesListeFlatDesign.fdStyleIntertitre,
                  lNiveau,
                ],
                'ie-ellipsis': lAvecEllipsis,
              },
              aParams.article.getLibelle(),
            ),
          };
        }
        const lDonneesListe = this;
        const H = [];
        let lIdsLabelOrd = [];
        const lWAICellule = this.getOrdreAriaLabelZoneCellule(aParams);
        const lHashIdsWAI = {};
        if (Array.isArray(lWAICellule)) {
          for (const lVal of lWAICellule) {
            if (lVal !== ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.lu) {
              let lId = this.getIdZone(aParams, lVal);
              lHashIdsWAI[lId] = UtilisationZoneLabelWAI.declared;
              lIdsLabelOrd.push(lId);
            }
          }
        }
        const lFuncGetAttrWAI = (aZone) => {
          const lWAI = this.getAriaLabelZoneCellule(aParams, aZone);
          const lId = this.getIdZone(aParams, aZone);
          if (lHashIdsWAI[lId] && lWAI !== false) {
            lHashIdsWAI[lId] = UtilisationZoneLabelWAI.used;
          }
          return {
            id: lId,
            role: lWAI === false ? 'presentation' : false,
            'aria-label': !lWAI ? false : lWAI,
          };
        };
        const lEstUnDeploiement =
          !this.enConstruction_cacheRechercheTexte &&
          !aParams.enImpression &&
          this.estUnDeploiement(aParams);
        const lZoneGauche = this.getZoneGauche(aParams);
        const lNiveauParente = this.desactiverIndentationParente()
          ? 0
          : this._getNiveauParente(aParams);
        if (lEstUnDeploiement || lNiveauParente > 0) {
          H.push(
            IE.jsx.str(
              'div',
              {
                class: [
                  ObjetDonneesListeFlatDesign_css_1
                    .StylesObjetDonneesListeFlatDesign.zoneDeploiement,
                  lNiveauParente > 0
                    ? `indentation-fils-${lNiveauParente}`
                    : '',
                ],
              },
              () => {
                if (lEstUnDeploiement) {
                  const lAvecFils = this.avecFilsVisibleDePere(aParams.article);
                  const lDeploye = this._estDeploye(aParams.ligne) && lAvecFils;
                  const lDeploiementDisable =
                    !lAvecFils ||
                    (this.options.ignorerDeploiementSurRechercheTexte &&
                      this.paramsListe.avecRechercheTexteEnCours);
                  return IE.jsx.str('ie-btnicon', {
                    class: [
                      ObjetDonneesListeFlatDesign_css_1
                        .StylesObjetDonneesListeFlatDesign.btnDeploiement,
                      lDeploye ? 'icon_fleche_num_bas' : 'icon_fleche_num',
                    ],
                    'ie-node':
                      this.enImpression || lDeploiementDisable
                        ? false
                        : this.paramsListe.jsxNodeDeploiementLigne.bind(
                            this,
                            aParams,
                          ),
                    title: 'Tout réduire / Tout déployer',
                    disabled: !!lDeploiementDisable,
                    tabindex: '-1',
                  });
                }
                return '';
              },
            ),
          );
        }
        let lCheckBox = '';
        if (
          !this.enConstruction_cacheRechercheTexte &&
          !aParams.enImpression &&
          this.avecCB(aParams)
        ) {
          const lId = this.getIdZone(
            aParams,
            ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.checkbox,
          );
          if (!this.options.avecCocheCBSurLigne && lHashIdsWAI[lId]) {
            lHashIdsWAI[lId] = UtilisationZoneLabelWAI.used;
          }
          lCheckBox = IE.jsx.str('ie-checkbox', {
            'ie-model': this.paramsListe.jsxGetModelCBLigneFlatDesign.bind(
              this,
              aParams.ligne,
            ),
            'ie-attr': this.options.avecCocheCBSurLigne
              ? false
              : this.paramsListe.jsxGetAttrCBLigneFlatDesign.bind(
                  this,
                  aParams.ligne,
                ),
            id: lId,
            inert: !!this.options.avecCocheCBSurLigne,
            tabindex: this.options.avecCocheCBSurLigne ? '-1' : false,
            'aria-hidden': this.options.avecCocheCBSurLigne ? 'true' : false,
          });
        }
        if (lZoneGauche || lCheckBox) {
          const lId = this.getIdZone(
            aParams,
            ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.zoneGauche,
          );
          if (lHashIdsWAI[lId]) {
            lHashIdsWAI[lId] = UtilisationZoneLabelWAI.used;
          }
          H.push(
            IE.jsx.str(
              'div',
              {
                class:
                  ObjetDonneesListeFlatDesign_css_1
                    .StylesObjetDonneesListeFlatDesign.zoneGauche,
                id: lId,
              },
              (aTab) => {
                if (lCheckBox) {
                  aTab.push(lCheckBox);
                }
                if (lZoneGauche) {
                  aTab.push(lZoneGauche);
                }
              },
            ),
          );
        }
        H.push(
          IE.jsx.str(
            'div',
            {
              class:
                ObjetDonneesListeFlatDesign_css_1
                  .StylesObjetDonneesListeFlatDesign.zoneCentrale,
            },
            (aTabCentrale) => {
              const lTitre = lDonneesListe.getTitreZonePrincipale(aParams);
              const lInfosSupp =
                lDonneesListe.getInfosSuppZonePrincipale(aParams);
              const lCompl = lDonneesListe.getZoneComplementaire(aParams);
              const lIconeGauche =
                lDonneesListe.getIconeGaucheContenuFormate(aParams);
              if (lTitre || lInfosSupp || lCompl || lIconeGauche) {
                aTabCentrale.push(
                  IE.jsx.str(
                    'div',
                    {
                      class: [
                        ObjetDonneesListeFlatDesign_css_1
                          .StylesObjetDonneesListeFlatDesign.zoneContenuFormat,
                        lIconeGauche && lTitre && !lInfosSupp
                          ? 'align-center'
                          : '',
                      ],
                    },
                    (aTabContenuFormat) => {
                      if (lIconeGauche) {
                        const lHint =
                          lDonneesListe.getHintIconeGaucheContenuFormate(
                            aParams,
                          );
                        let lTooltipLabel = false;
                        if (lHint) {
                          if (MethodesObjet_1.MethodesObjet.isString(lHint)) {
                            lTooltipLabel = lHint;
                          } else if (lHint.html) {
                            lTooltipLabel = () => lHint.html;
                          }
                        }
                        const lId = this.getIdZone(
                          aParams,
                          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign
                            .iconeGaucheContenuFormate,
                        );
                        if (lHint && lHashIdsWAI[lId]) {
                          lHashIdsWAI[lId] = UtilisationZoneLabelWAI.used;
                        }
                        aTabContenuFormat.push(
                          IE.jsx.str(
                            'i',
                            {
                              class: [
                                'icon',
                                MethodesObjet_1.MethodesObjet.isString(
                                  lIconeGauche,
                                )
                                  ? lIconeGauche
                                  : lIconeGauche.css,
                              ],
                              role: lHint ? 'img' : 'presentation',
                              id: lId,
                              'ie-tooltiplabel': lTooltipLabel,
                            },
                            !MethodesObjet_1.MethodesObjet.isString(
                              lIconeGauche,
                            )
                              ? lIconeGauche.html || ''
                              : '',
                          ),
                        );
                      }
                      aTabContenuFormat.push(
                        IE.jsx.str(
                          'div',
                          {
                            class:
                              ObjetDonneesListeFlatDesign_css_1
                                .StylesObjetDonneesListeFlatDesign
                                .zonePrincipale,
                          },
                          () => {
                            const lTab = [];
                            if (lTitre) {
                              const lAttrWAI = lFuncGetAttrWAI(
                                ObjetDonneesListeFlatDesign
                                  .ZoneCelluleFlatDesign.titre,
                              );
                              lTab.push(
                                IE.jsx.str(
                                  'div',
                                  Object.assign(
                                    {
                                      class:
                                        ObjetDonneesListeFlatDesign_css_1
                                          .StylesObjetDonneesListeFlatDesign
                                          .titrePrincipal,
                                      'ie-ellipsis': lAvecEllipsis,
                                    },
                                    lAttrWAI,
                                  ),
                                  lTitre,
                                ),
                              );
                            }
                            if (lInfosSupp) {
                              const lAttrWAI = lFuncGetAttrWAI(
                                ObjetDonneesListeFlatDesign
                                  .ZoneCelluleFlatDesign
                                  .infosSuppZonePrincipale,
                              );
                              lTab.push(
                                IE.jsx.str(
                                  'div',
                                  Object.assign(
                                    {
                                      class:
                                        ObjetDonneesListeFlatDesign_css_1
                                          .StylesObjetDonneesListeFlatDesign
                                          .infosSupp,
                                      'ie-ellipsis': lAvecEllipsis,
                                    },
                                    lAttrWAI,
                                  ),
                                  lInfosSupp,
                                ),
                              );
                            }
                            return lTab.join('');
                          },
                        ),
                      );
                      if (lCompl) {
                        const lAttrWAI = lFuncGetAttrWAI(
                          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign
                            .zoneComplementaire,
                        );
                        aTabContenuFormat.push(
                          IE.jsx.str(
                            'div',
                            Object.assign(
                              {
                                class:
                                  ObjetDonneesListeFlatDesign_css_1
                                    .StylesObjetDonneesListeFlatDesign
                                    .zoneComplementaire,
                              },
                              lAttrWAI,
                            ),
                            lCompl,
                          ),
                        );
                      }
                    },
                  ),
                );
              }
              const lMessage = lDonneesListe.getZoneMessage(aParams);
              if (lMessage) {
                const lAttrWAI = lFuncGetAttrWAI(
                  ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.message,
                );
                aTabCentrale.push(
                  IE.jsx.str(
                    'div',
                    Object.assign(
                      {
                        class:
                          ObjetDonneesListeFlatDesign_css_1
                            .StylesObjetDonneesListeFlatDesign.zoneMessage,
                      },
                      lAttrWAI,
                    ),
                    lMessage,
                  ),
                );
              }
            },
          ),
        );
        if (
          !this.enConstruction_cacheRechercheTexte &&
          !aParams.enImpression &&
          this.avecBoutonActionLigne(aParams)
        ) {
          const lId = this.getIdZone(
            aParams,
            ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.boutonAction,
          );
          if (lHashIdsWAI[lId]) {
            lHashIdsWAI[lId] = UtilisationZoneLabelWAI.used;
          }
          H.push(
            IE.jsx.str(
              'div',
              {
                class: [
                  ObjetDonneesListeFlatDesign_css_1
                    .StylesObjetDonneesListeFlatDesign.zoneDroite,
                  this.paramsListe.versionMobile ||
                  ObjetNavigateur_1.Navigateur.isTactile
                    ? ''
                    : ObjetDonneesListeFlatDesign_css_1
                        .StylesObjetDonneesListeFlatDesign.btnSurvol,
                ],
                id: lId,
              },
              this._construireBtnAction(aParams),
            ),
          );
        }
        const lMessageLarge = this.getZoneMessageLarge(aParams);
        if (lMessageLarge) {
          const lAttrWAI = lFuncGetAttrWAI(
            ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.messageLarge,
          );
          H.push(
            IE.jsx.str(
              'div',
              Object.assign(
                {
                  class: [
                    ObjetDonneesListeFlatDesign_css_1
                      .StylesObjetDonneesListeFlatDesign.zoneMessageLarge,
                    lNiveauParente > 0
                      ? `indentation-fils-${lNiveauParente}`
                      : '',
                  ],
                },
                lAttrWAI,
              ),
              lMessageLarge,
            ),
          );
        }
        const lIds = [];
        if (
          this.paramsListe.idWAILigneLue &&
          Array.isArray(lWAICellule) &&
          lWAICellule.includes(
            ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign.lu,
          ) &&
          this.estLigneOff(aParams)
        ) {
          lIds.push(this.paramsListe.idWAILigneLue);
        }
        lIdsLabelOrd.forEach((aId) => {
          if (lHashIdsWAI[aId] === UtilisationZoneLabelWAI.used) {
            lIds.push(aId);
          }
        });
        return { libelle: H.join(''), idsLabel: lIds.join(' ') };
      }
      _avecSelection(aParams) {
        return (
          !this.estInterTitre(aParams.article) && this.avecSelection(aParams)
        );
      }
      getTypeValeur(aParams) {
        return ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule.Html;
      }
      _getClassCelluleConteneur(aParams) {
        const lEstInterTitre = this.estInterTitre(aParams.article);
        const lClasses = [
          lEstInterTitre
            ? ObjetDonneesListeFlatDesign_css_1
                .StylesObjetDonneesListeFlatDesign.fd_intertitre
            : ObjetDonneesListeFlatDesign_css_1
                .StylesObjetDonneesListeFlatDesign.fd_ligne,
        ];
        if (this.options.flatDesignMinimal) {
          lClasses.push('fd-design-minimal');
        }
        if (this.estLigneOff(aParams)) {
          lClasses.push(
            ObjetDonneesListeFlatDesign_css_1.StylesObjetDonneesListeFlatDesign
              .off,
          );
        }
        if (lEstInterTitre && this.options.avecIndentationSousInterTitre) {
          lClasses.push(
            ObjetDonneesListeFlatDesign_css_1.StylesObjetDonneesListeFlatDesign
              .fdIntertitreIndent,
          );
        }
        if (!lEstInterTitre) {
          if (
            this.avecSelection(aParams) ||
            (this.options.avecCocheCBSurLigne && this.avecCB(aParams))
          ) {
            lClasses.push(
              ObjetDonneesListeFlatDesign_css_1
                .StylesObjetDonneesListeFlatDesign.withSelect,
            );
          }
        }
        if (
          this.options.avecFusionLignePereFils &&
          aParams.article.pere &&
          aParams.article.pere &&
          aParams.article.pere.estUnDeploiement
        ) {
          lClasses.push(
            ObjetDonneesListeFlatDesign_css_1.StylesObjetDonneesListeFlatDesign
              .fdPerefilsFusion,
          );
        }
        const lClass = this.getClassCelluleConteneur(aParams);
        if (lClass) {
          lClasses.push(lClass);
        }
        return lClasses.join(' ');
      }
      _getEtatCocheSimple(aParams) {
        return !!this.getValueCB(aParams);
      }
      avecMenuContextuel(aParams) {
        return (
          super.avecMenuContextuel(aParams) &&
          this.avecBoutonActionLigne(aParams)
        );
      }
      _getVisible(aArticle, aParams) {
        if (this.estLigneTotaleSelectionnable(aArticle)) {
          return !!(aParams && aParams.contexteSelection);
        }
        if (!this.getVisible(aArticle)) {
          return false;
        }
        return true;
      }
      getHauteurMinCellule(aParams) {
        return this.options.flatDesignMinimal
          ? 28
          : this.options.hauteurMinCellule;
      }
      _getLigneTotaleSelectionnableFd(aLigne) {
        const lArticle = this.Donnees.get(aLigne);
        if (this.estLigneTotaleSelectionnable(lArticle)) {
          const lParams = this.paramsListe.getParams(0, aLigne);
          return Object.assign(
            {
              getHtml: () => lArticle.getLibelle(),
              wai: '',
              header: false,
              avecSelection: true,
              avecEtiquette: true,
              estVisible: true,
              totalDansScroll: false,
            },
            lParams,
            this.getLigneTotaleSelectionnable(lParams),
          );
        }
        return null;
      }
      _construireFiltres() {
        const lHtml = this.construireFiltres();
        if (lHtml) {
          const lModelBtnReinitFiltres = () => {
            const lModele = {
              event: () => {
                this.reinitFiltres();
              },
            };
            return lModele;
          };
          return (
            lHtml +
            IE.jsx.str(
              'div',
              {
                class:
                  ObjetListeEspaceMobile_css_1.StylesObjetListeEspaceMobile
                    .filtreFooter,
              },
              IE.jsx.str(
                'ie-bouton',
                { 'ie-model': lModelBtnReinitFiltres, class: 'small-bt' },
                'Réinitialiser',
              ),
            )
          );
        }
        return '';
      }
      _construireBtnAction(aParams) {
        return IE.jsx.str('ie-btnicon', {
          class: 'icon_ellipsis_vertical',
          tabindex: '-1',
          'ie-model': this.jsxBtnEllipsisLigne.bind(this, aParams),
          title: 'Cliquer pour déployer les actions',
        });
      }
      jsxBtnEllipsisLigne(aParams) {
        return {
          event: (eEvent, aNode) => {
            if (this.avecMenuContextuel(aParams)) {
              const lParams = this.paramsListe.getParams(
                aParams.colonne,
                aParams.ligne,
                { node: aNode },
              );
              this.paramsListe.ouvrirMenuContextuel(lParams);
            }
          },
        };
      }
      _getNiveauParente(aParams) {
        let lNiveau = 0;
        let lArticle = aParams ? aParams.article : null;
        while (lArticle && lArticle.pere) {
          lNiveau += 1;
          lArticle = lArticle.pere;
          if (lNiveau >= 10) {
            break;
          }
        }
        return lNiveau;
      }
      getIdZone(aParams, aZone) {
        return `${this.paramsListe.liste.getNom()}_${aParams.ligne}_${aParams.colonne}_fdz_${aZone}`;
      }
    }
    exports.ObjetDonneesListeFlatDesign = ObjetDonneesListeFlatDesign;
    var UtilisationZoneLabelWAI;
    (function (UtilisationZoneLabelWAI) {
      UtilisationZoneLabelWAI['declared'] = 'declared';
      UtilisationZoneLabelWAI['used'] = 'used';
    })(UtilisationZoneLabelWAI || (UtilisationZoneLabelWAI = {}));
    (function (ObjetDonneesListeFlatDesign) {
      let typeInterTitre;
      (function (typeInterTitre) {
        typeInterTitre['h3'] = 'h3';
        typeInterTitre['h4'] = 'h4';
        typeInterTitre['h5'] = 'h5';
      })(
        (typeInterTitre =
          ObjetDonneesListeFlatDesign.typeInterTitre ||
          (ObjetDonneesListeFlatDesign.typeInterTitre = {})),
      );
      let ZoneCelluleFlatDesign;
      (function (ZoneCelluleFlatDesign) {
        ZoneCelluleFlatDesign[(ZoneCelluleFlatDesign['lu'] = 0)] = 'lu';
        ZoneCelluleFlatDesign[(ZoneCelluleFlatDesign['checkbox'] = 1)] =
          'checkbox';
        ZoneCelluleFlatDesign[(ZoneCelluleFlatDesign['zoneGauche'] = 2)] =
          'zoneGauche';
        ZoneCelluleFlatDesign[
          (ZoneCelluleFlatDesign['iconeGaucheContenuFormate'] = 3)
        ] = 'iconeGaucheContenuFormate';
        ZoneCelluleFlatDesign[(ZoneCelluleFlatDesign['titre'] = 4)] = 'titre';
        ZoneCelluleFlatDesign[
          (ZoneCelluleFlatDesign['infosSuppZonePrincipale'] = 5)
        ] = 'infosSuppZonePrincipale';
        ZoneCelluleFlatDesign[
          (ZoneCelluleFlatDesign['zoneComplementaire'] = 6)
        ] = 'zoneComplementaire';
        ZoneCelluleFlatDesign[(ZoneCelluleFlatDesign['message'] = 7)] =
          'message';
        ZoneCelluleFlatDesign[(ZoneCelluleFlatDesign['messageLarge'] = 8)] =
          'messageLarge';
        ZoneCelluleFlatDesign[(ZoneCelluleFlatDesign['boutonAction'] = 9)] =
          'boutonAction';
      })(
        (ZoneCelluleFlatDesign =
          ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign ||
          (ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign = {})),
      );
    })(
      ObjetDonneesListeFlatDesign ||
        (exports.ObjetDonneesListeFlatDesign = ObjetDonneesListeFlatDesign =
          {}),
    );
  },
  fn: 'objetdonneeslisteflatdesign.js',
});