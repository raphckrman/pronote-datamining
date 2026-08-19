IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDonneesListeFlatDesign = void 0;
    require('@cp/Produit/Css/ObjetListeEspaceMobile.css');
    require('@cp/Mobile/Css/ObjetListe_Mobile.css');
    require('@cp/Espace/Css/ObjetListe_Desktop.css');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetDonneesListeBase_1 = require('@cp/script/ObjetDonneesListeBase');
    const ObjetDonneesListeFlatDesign_css_1 = require('@cp/script/css/ObjetDonneesListeFlatDesign.css');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IconeSvgFleche_num_bas_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFleche_num_bas');
    const IconeSvgFleche_num_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFleche_num');
    const IconeSvgEllipsis_vertical_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEllipsis_vertical');
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
        return !!this.options.avecCB;
      }
      getZoneIconeGaucheContenuFormate(aParams) {
        return '';
      }
      getTooltipZoneIconeGaucheContenuFormate(aParams) {
        return '';
      }
      getTitreZonePrincipale(aParams) {
        var _a;
        var _b;
        return (_b =
          (_a = aParams.article) === null || _a === void 0
            ? void 0
            : _a.getLibelle()) !== null && _b !== void 0
          ? _b
          : '';
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
          !!this.options.avecBoutonActionLigne &&
          !!aParams.article &&
          !this.estInterTitre(aParams.article)
        );
      }
      estInterTitre(aArticle) {
        return !!(aArticle && aArticle.estInterTitre);
      }
      avecSeparateurLigneHautFlatdesign(aParamsCellule, aParamsCellulePrec) {
        return !!(
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
        if (aParams.article) {
          aParams.article.estCoche = aValue;
        }
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
      lesFiltresSontVides() {
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
        var _a;
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
                  ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                    .fdStyleIntertitre,
                  lNiveau,
                ],
                ie_ellipsis: lAvecEllipsis,
              },
              (_a = aParams.article) === null || _a === void 0
                ? void 0
                : _a.getLibelle(),
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
                  ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                    .zoneDeploiement,
                  lNiveauParente > 0
                    ? `indentation-fils-${lNiveauParente}`
                    : '',
                ],
              },
              () => {
                if (lEstUnDeploiement) {
                  const lAvecFils = this.avecFilsVisibleDePere(aParams.article);
                  const lDeploye =
                    this._estDeploye(aParams.ligne || 0) && lAvecFils;
                  const lDeploiementDisable =
                    !lAvecFils ||
                    (this.options.ignorerDeploiementSurRechercheTexte &&
                      this.paramsListe.avecRechercheTexteEnCours);
                  return IE.jsx.str(
                    IEHtml_BtnImage_1.BtnIcon,
                    {
                      class: [
                        ObjetDonneesListeFlatDesign_css_1
                          .SObjetDonneesListeFlatDesign.btnDeploiement,
                      ],
                      ie_node:
                        this.enImpression || lDeploiementDisable
                          ? false
                          : this.paramsListe.jsxNodeDeploiementLigne.bind(
                              this,
                              aParams,
                            ),
                      title: lDeploye
                        ? GlossaireListe_1.TradGlossaireListe.ReduireLigne
                        : GlossaireListe_1.TradGlossaireListe.DeployerLigne,
                      disabled: !!lDeploiementDisable,
                      tabindex: '-1',
                    },
                    lDeploye
                      ? IE.jsx.str(
                          IconeSvgFleche_num_bas_1.IconeSvgFleche_num_bas,
                          null,
                        )
                      : IE.jsx.str(
                          IconeSvgFleche_num_1.IconeSvgFleche_num,
                          null,
                        ),
                  );
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
          lCheckBox = IE.jsx.str(IEHtml_CheckboxRadio_1.Checkbox, {
            ie_model: this.paramsListe.jsxGetModelCBLigneFlatDesign.bind(
              this,
              aParams.ligne,
            ),
            ie_attr: this.options.avecCocheCBSurLigne
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
                  ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                    .zoneGauche,
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
                ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                  .zoneCentrale,
            },
            (aTabCentrale) => {
              const lTitre = lDonneesListe.getTitreZonePrincipale(aParams);
              const lInfosSupp =
                lDonneesListe.getInfosSuppZonePrincipale(aParams);
              const lCompl = lDonneesListe.getZoneComplementaire(aParams);
              const lIconeSvgGauche =
                lDonneesListe.getZoneIconeGaucheContenuFormate(aParams);
              if (lTitre || lInfosSupp || lCompl || lIconeSvgGauche) {
                aTabCentrale.push(
                  IE.jsx.str(
                    'div',
                    {
                      class: [
                        ObjetDonneesListeFlatDesign_css_1
                          .SObjetDonneesListeFlatDesign.zoneContenuFormat,
                        lIconeSvgGauche && lTitre && !lInfosSupp
                          ? 'align-center'
                          : '',
                      ],
                    },
                    (aTabContenuFormat) => {
                      if (lIconeSvgGauche) {
                        const lHint =
                          lDonneesListe.getTooltipZoneIconeGaucheContenuFormate(
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
                            'div',
                            {
                              class:
                                ObjetDonneesListeFlatDesign_css_1
                                  .SObjetDonneesListeFlatDesign.icon,
                              role: lHint ? 'img' : false,
                              id: lId,
                              ie_tooltiplabel: lTooltipLabel,
                            },
                            lIconeSvgGauche,
                          ),
                        );
                      }
                      aTabContenuFormat.push(
                        IE.jsx.str(
                          'div',
                          {
                            class:
                              ObjetDonneesListeFlatDesign_css_1
                                .SObjetDonneesListeFlatDesign.zonePrincipale,
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
                                          .SObjetDonneesListeFlatDesign
                                          .titrePrincipal,
                                      ie_ellipsis: lAvecEllipsis,
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
                                          .SObjetDonneesListeFlatDesign
                                          .infosSupp,
                                      ie_ellipsis: lAvecEllipsis,
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
                                    .SObjetDonneesListeFlatDesign
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
                            .SObjetDonneesListeFlatDesign.zoneMessage,
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
                  ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                    .zoneDroite,
                  this.paramsListe.versionMobile ||
                  ObjetNavigateur_1.Navigateur.isTactile
                    ? ''
                    : ObjetDonneesListeFlatDesign_css_1
                        .SObjetDonneesListeFlatDesign.btnSurvol,
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
                      .SObjetDonneesListeFlatDesign.zoneMessageLarge,
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
        var _a, _b;
        const lEstInterTitre = this.estInterTitre(aParams.article);
        const lClasses = [
          lEstInterTitre
            ? ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                .fd_intertitre
            : ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                .fd_ligne,
        ];
        if (this.options.flatDesignMinimal) {
          lClasses.push('fd-design-minimal');
        }
        if (this.estLigneOff(aParams)) {
          lClasses.push(
            ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign.off,
          );
        }
        if (lEstInterTitre && this.options.avecIndentationSousInterTitre) {
          lClasses.push(
            ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
              .fdIntertitreIndent,
          );
        }
        if (!lEstInterTitre) {
          if (
            this.avecSelection(aParams) ||
            (this.options.avecCocheCBSurLigne && this.avecCB(aParams))
          ) {
            lClasses.push(
              ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
                .withSelect,
            );
          }
        }
        if (
          this.options.avecFusionLignePereFils &&
          ((_b =
            (_a = aParams.article) === null || _a === void 0
              ? void 0
              : _a.pere) === null || _b === void 0
            ? void 0
            : _b.estUnDeploiement)
        ) {
          lClasses.push(
            ObjetDonneesListeFlatDesign_css_1.SObjetDonneesListeFlatDesign
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
          : this.options.hauteurMinCellule || 0;
      }
      _getLigneTotaleSelectionnableFd(aLigne) {
        const lArticle = this.Donnees.get(aLigne);
        if (this.estLigneTotaleSelectionnable(lArticle)) {
          const lParams = this.paramsListe.getParams(0, aLigne);
          return Object.assign(
            {
              getHtml: () => {
                var _a;
                return (_a = lArticle.getLibelle()) !== null && _a !== void 0
                  ? _a
                  : '';
              },
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
        return this.construireFiltres();
      }
      _construireBtnAction(aParams) {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            class: [],
            tabindex: '-1',
            ie_model: this.jsxBtnEllipsisLigne.bind(this, aParams),
            title: GlossaireListe_1.TradGlossaireListe.BtnAction,
            'aria-haspopup': 'menu',
          },
          IE.jsx.str(
            IconeSvgEllipsis_vertical_1.IconeSvgEllipsis_vertical,
            null,
          ),
        );
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