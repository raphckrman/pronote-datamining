IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDonneesListeFlatDesign = void 0;
    const tslib_1 = require('tslib');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetDonneesListe_1 = require('ObjetDonneesListe');
    const tag_1 = require('tag');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const jsx_1 = require('jsx');
    require('ObjetDonneesListeFlatDesign.css');
    tslib_1.__exportStar(require('ObjetDonneesListe'), exports);
    class ObjetDonneesListeFlatDesign extends ObjetDonneesListe_1.ObjetDonneesListe {
      constructor(aDonnees) {
        super(aDonnees);
        this.setOptions({
          avecBoutonActionLigne: true,
          avecEdition: false,
          avecSuppression: false,
          avecEtatSaisie: false,
          avecEvnt_Creation: true,
          avecCB: false,
          avecEvnt_CB: true,
          avecCocheCBSurLigne: false,
          avecDeselectionSurNonSelectionnable: false,
          avecContenuTronque: false,
          avecDeploiement: true,
          avecEventDeploiementSurCellule: false,
          flatDesignMinimal: false,
          avecEllipsis: true,
          avecContextMenuSansSelection: true,
          avecIndentationSousInterTitre: false,
          avecFusionLignePereFils: false,
        });
        this.estFlatDesign = true;
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
      avecSurvolCelluleVisible(aParams) {
        return (
          this.options.avecSurvolCelluleVisible && this._avecSelection(aParams)
        );
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
      getControleurFiltres(aInstance, aInstanceListe) {
        return {};
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
                class: ['fd-style-intertitre', lNiveau],
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
                  'zone-deploiement',
                  lNiveauParente > 0
                    ? `indentation-fils-${lNiveauParente}`
                    : '',
                ],
                'aria-hidden': 'true',
              },
              function () {
                if (lEstUnDeploiement) {
                  const lAvecFils = this.avecFilsVisibleDePere(aParams.article);
                  const lDeploye = this._estDeploye(aParams.ligne) && lAvecFils;
                  const lDeploiementDisable =
                    !lAvecFils ||
                    (this.options.ignorerDeploiementSurRechercheTexte &&
                      this.paramsListe.avecRechercheTexteEnCours);
                  return IE.jsx.str('ie-btnicon', {
                    class: [
                      'btn-deploiement',
                      lDeploye ? 'icon_fleche_num_bas' : 'icon_fleche_num',
                    ],
                    'ie-node':
                      this.enImpression || lDeploiementDisable
                        ? false
                        : (0, jsx_1.jsxFuncAttr)('liste.nodeDeploiementLigne', [
                            aParams.ligne,
                            aParams.colonne,
                          ]),
                    title: 'Tout réduire / Tout déployer',
                    disabled: !!lDeploiementDisable,
                    tabindex: '-1',
                  });
                }
                return '';
              }.bind(this)(),
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
            'ie-model': (0, jsx_1.jsxFuncAttr)(
              'liste.cb_ligne_flatDesign',
              aParams.ligne,
            ),
            'ie-attr': this.options.avecCocheCBSurLigne
              ? false
              : (0, jsx_1.jsxFuncAttr)(
                  'liste.cb_ligne_flatDesign.getAttr',
                  aParams.ligne,
                ),
            id: lId,
            tabindex: this.options.avecCocheCBSurLigne ? '-1' : false,
            'aria-hidden': this.options.avecCocheCBSurLigne ? 'true' : false,
            'ie-textright': true,
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
            IE.jsx.str('div', { class: 'zone-gauche', id: lId }, (aTab) => {
              if (lCheckBox) {
                aTab.push(lCheckBox);
              }
              if (lZoneGauche) {
                aTab.push(lZoneGauche);
              }
            }),
          );
        }
        H.push(
          (0, tag_1.tag)('div', { class: 'zone-centrale' }, (aTabCentrale) => {
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
                      'zone-contenu-format',
                      lIconeGauche && lTitre && !lInfosSupp
                        ? 'align-center'
                        : '',
                    ],
                  },
                  (aTabContenuFormat) => {
                    if (lIconeGauche) {
                      const lHint =
                        lDonneesListe.getHintIconeGaucheContenuFormate(aParams);
                      const lTitle =
                        lHint && MethodesObjet_1.MethodesObjet.isString(lHint)
                          ? lHint
                          : false;
                      const lHintHtml = lHint;
                      const lId = this.getIdZone(
                        aParams,
                        ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign
                          .iconeGaucheContenuFormate,
                      );
                      if (lTitle && lHashIdsWAI[lId]) {
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
                            title: lTitle,
                            role: lTitle ? 'img' : 'presentation',
                            id: lId,
                            'aria-label': lTitle,
                            'ie-hint':
                              lHintHtml && lHintHtml.html
                                ? lHintHtml.html
                                : false,
                          },
                          !MethodesObjet_1.MethodesObjet.isString(lIconeGauche)
                            ? lIconeGauche.html || ''
                            : '',
                        ),
                      );
                    }
                    aTabContenuFormat.push(
                      IE.jsx.str('div', { class: 'zone-principale' }, () => {
                        const lTab = [];
                        if (lTitre) {
                          const lAttrWAI = lFuncGetAttrWAI(
                            ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign
                              .titre,
                          );
                          lTab.push(
                            IE.jsx.str(
                              'div',
                              Object.assign(
                                {
                                  class: 'titre-principal',
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
                            ObjetDonneesListeFlatDesign.ZoneCelluleFlatDesign
                              .infosSuppZonePrincipale,
                          );
                          lTab.push(
                            IE.jsx.str(
                              'div',
                              Object.assign(
                                {
                                  class: 'infos-supp',
                                  'ie-ellipsis': lAvecEllipsis,
                                },
                                lAttrWAI,
                              ),
                              lInfosSupp,
                            ),
                          );
                        }
                        return lTab.join('');
                      }),
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
                            { class: 'zone-complementaire' },
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
                  Object.assign({ class: 'zone-message' }, lAttrWAI),
                  lMessage,
                ),
              );
            }
          }),
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
          aParams._haspopup = true;
          H.push(
            IE.jsx.str(
              'div',
              {
                class:
                  'zone-droite' +
                  (this.paramsListe.versionMobile || GNavigateur.isTactile
                    ? ''
                    : ' btn-survol'),
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
                    'zone-message-large',
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
        return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Html;
      }
      _getClassCelluleConteneur(aParams) {
        const lEstInterTitre = this.estInterTitre(aParams.article);
        const lClasses = [lEstInterTitre ? 'fd_intertitre' : 'fd_ligne'];
        if (this.options.flatDesignMinimal) {
          lClasses.push('fd-design-minimal');
        }
        if (this.estLigneOff(aParams)) {
          lClasses.push('off');
        }
        if (lEstInterTitre && this.options.avecIndentationSousInterTitre) {
          lClasses.push('fd-intertitre-indent');
        }
        if (!lEstInterTitre) {
          if (
            this.avecSelection(aParams) ||
            (this.options.avecCocheCBSurLigne && this.avecCB(aParams))
          ) {
            lClasses.push('with-select');
          }
        }
        if (
          this.options.avecFusionLignePereFils &&
          aParams.article.pere &&
          aParams.article.pere &&
          aParams.article.pere.estUnDeploiement
        ) {
          lClasses.push('fd-perefils-fusion');
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
              html: lArticle.getLibelle(),
              wai: '',
              header: false,
              avecSelection: true,
              avecEtiquette: true,
              estVisible: true,
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
          return (
            lHtml +
            (0, tag_1.tag)(
              'div',
              { class: 'filtre-footer' },
              (0, tag_1.tag)(
                'ie-bouton',
                { 'ie-model': 'btnReinitFiltres', class: 'small-bt' },
                'Réinitialiser',
              ),
            )
          );
        }
        return '';
      }
      _getControleurFiltres(aInstance, aInstanceListe) {
        return Object.assign(
          {
            btnReinitFiltres: {
              event() {
                aInstance.reinitFiltres();
              },
            },
          },
          this.getControleurFiltres(aInstance, aInstanceListe) || {},
        );
      }
      _construireBtnAction(aParams) {
        return (0, tag_1.tag)('ie-btnicon', {
          class: 'icon_ellipsis_vertical',
          tabindex: '-1',
          'ie-model': tag_1.tag.funcAttr('liste.btnEllipsisLigne', [
            aParams.ligne,
          ]),
          title: 'Cliquer pour déployer les actions',
        });
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