IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    require('ObjetListeEspaceMobile.css');
    require('ObjetListe.css');
    const MethodesObjet_1 = require('MethodesObjet');
    const _ObjetListe_1 = require('_ObjetListe');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_1 = require('ObjetStyle');
    const Enumere_TriElement_1 = require('Enumere_TriElement');
    const TypeFusionTitreListe_1 = require('TypeFusionTitreListe');
    const ObjetStyle_2 = require('ObjetStyle');
    const ObjetSupport_1 = require('ObjetSupport');
    const ObjetWAI_1 = require('ObjetWAI');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_Event_1 = require('Enumere_Event');
    const Invocateur_1 = require('Invocateur');
    const ObjetScroll_1 = require('ObjetScroll');
    const ObjetScroll_2 = require('ObjetScroll');
    const ObjetScroll_3 = require('ObjetScroll');
    const ObjetPosition_1 = require('ObjetPosition');
    const Enumere_EvenementListe_1 = require('Enumere_EvenementListe');
    const ObjetDonneesListe_1 = require('ObjetDonneesListe');
    const ObjetMenuContextuel_1 = require('ObjetMenuContextuel');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetFenetre_Date_1 = require('ObjetFenetre_Date');
    const ExportBlob_1 = require('ExportBlob');
    const _ObjetCouleur_1 = require('_ObjetCouleur');
    const ToucheClavier_1 = require('ToucheClavier');
    const ComparateurChaines_1 = require('ComparateurChaines');
    const tag_1 = require('tag');
    const UtilitaireMenuContextuelNatif_1 = require('UtilitaireMenuContextuelNatif');
    const ObjetFenetre_ParametrageColonnesListe_1 = require('ObjetFenetre_ParametrageColonnesListe');
    const ObjetDonneesListeFlatDesign_1 = require('ObjetDonneesListeFlatDesign');
    const jsx_1 = require('jsx');
    const IEHtml_1 = require('IEHtml');
    const _CONST_hauteurImageTri = 4;
    var EGenreZoneScroll;
    (function (EGenreZoneScroll) {
      EGenreZoneScroll[(EGenreZoneScroll['contenu'] = 1)] = 'contenu';
      EGenreZoneScroll[(EGenreZoneScroll['titre'] = 2)] = 'titre';
      EGenreZoneScroll[(EGenreZoneScroll['tri'] = 3)] = 'tri';
      EGenreZoneScroll[(EGenreZoneScroll['total'] = 4)] = 'total';
      EGenreZoneScroll[(EGenreZoneScroll['contenuFixe'] = 5)] = 'contenuFixe';
      EGenreZoneScroll[(EGenreZoneScroll['titreFixe'] = 6)] = 'titreFixe';
      EGenreZoneScroll[(EGenreZoneScroll['triFixe'] = 7)] = 'triFixe';
      EGenreZoneScroll[(EGenreZoneScroll['totalFixe'] = 8)] = 'totalFixe';
      EGenreZoneScroll[(EGenreZoneScroll['contenuFixeFin'] = 9)] =
        'contenuFixeFin';
      EGenreZoneScroll[(EGenreZoneScroll['titreFixeFin'] = 10)] =
        'titreFixeFin';
      EGenreZoneScroll[(EGenreZoneScroll['triFixeFin'] = 11)] = 'triFixeFin';
      EGenreZoneScroll[(EGenreZoneScroll['totalFixeFin'] = 12)] =
        'totalFixeFin';
    })(EGenreZoneScroll || (EGenreZoneScroll = {}));
    let uParseur = '',
      uTimerParseur = null;
    class ObjetListeEspace extends _ObjetListe_1.ObjetListe {
      constructor(...aParams) {
        super(...aParams);
        Object.assign(this.optionsInterne, {
          avecModeImpression: true,
          copierCellule: this._copierCellule.bind(this),
          collerCellule: this._collerCellule.bind(this),
          getClassListe: () => {
            return this._options.hauteurAdapteContenu ? 'hauteur-auto' : '';
          },
          initStructureDynamique: this._initStructureDynamique.bind(this),
        });
        this.IdPremierElement = this.getIdGridFocus(0);
      }
      composeImpression(aProportion) {
        return this._composeImpression(aProportion);
      }
      construireCopieCSV() {
        ExportBlob_1.ExportBlob.create(
          this._construireCopieCSV(),
          'Export CSV',
          'text/csv',
        );
      }
      resize() {
        this._surPreResize();
        this._surPostResize();
      }
      surPreResize() {
        this._surPreResize();
      }
      surPostResize() {
        this._surPostResize();
      }
      _init() {
        super._init();
        if (this.Nom) {
          if (this.avecEventResizeNavigateur()) {
            this.ajouterEvenementGlobal(
              Enumere_Event_1.EEvent.SurPreResize,
              this._surPreResize,
            );
            this.ajouterEvenementGlobal(
              Enumere_Event_1.EEvent.SurPostResize,
              this._surPostResize,
            );
          }
          Invocateur_1.Invocateur.abonner(
            GNavigateur.getEventInvocateur('keydown'),
            this._eventKeyDownApplication,
            this,
          );
          Invocateur_1.Invocateur.abonner(
            GNavigateur.getEventInvocateur('keyup') +
              ' ' +
              GNavigateur.getEventInvocateur('mousemove'),
            (event) => {
              if (this._cache.rolloverVisible && !event.ctrlKey) {
                this._gererRollover(false);
              }
            },
            this,
          );
          this.ScrollV = new ObjetScroll_1.ObjetScroll(
            this.Nom + '.ScrollV',
            null,
            this,
            this._evenementScrollV,
            ObjetScroll_2.EGenreScroll.Vertical,
          );
          this.ScrollV.pas = 50;
          this.ScrollH = new ObjetScroll_1.ObjetScroll(
            this.Nom + '.ScrollH',
            null,
            this,
            this._evenementScrollH.bind(this),
            ObjetScroll_2.EGenreScroll.Horizontal,
          );
          this.ScrollH.pas = 20;
        }
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          liste: {
            getNodeListe() {
              $(this.node).on({
                keydown: function (aEvent) {
                  if (
                    aEvent.ctrlKey &&
                    String.fromCharCode(aEvent.which).toLowerCase() === 'a' &&
                    aInstance._options.avecToutSelectionner &&
                    !aEvent.target.closest('input') &&
                    !aInstance._cache.editionEnCours &&
                    !aInstance._cache.creationEnCours &&
                    aInstance.Donnees &&
                    aInstance.Donnees.avecMultiSelection()
                  ) {
                    for (
                      let iLigne = 0;
                      iLigne < aInstance._cache.lignesSelectionnees.length;
                      iLigne++
                    ) {
                      if (!aInstance._etatSelectionCellule({ ligne: iLigne })) {
                        aInstance.selectionnerLigne({
                          ligne: iLigne,
                          selectionner: true,
                          _avecVisuCadreSelection: false,
                        });
                      }
                    }
                    aInstance._actualiserCadreSelection();
                    aEvent.preventDefault();
                  }
                },
                keypress(aEvent) {
                  if (
                    aEvent.target.closest('input, textarea') ||
                    aEvent.target.closest('.flecheTri')
                  ) {
                    return;
                  }
                  aInstance.gererParsingSurEventKey(aEvent);
                  if (
                    aInstance.Pere &&
                    aInstance.Evenement &&
                    aInstance.Donnees &&
                    aInstance.Donnees.options &&
                    aInstance.Donnees.options.avecEvnt_KeyPressListe
                  ) {
                    const lCallback = function () {
                      aInstance.Evenement.call(aInstance.Pere, {
                        instance: aInstance,
                        event: aEvent,
                        genreEvenement:
                          Enumere_EvenementListe_1.EGenreEvenementListe
                            .KeyPressListe,
                      });
                      aInstance._refreshSelf();
                    };
                    if (
                      aInstance.Donnees.options.avecTimeoutEvent_KeyPressListe
                    ) {
                      clearTimeout(aInstance._cache.timerKeyPress);
                      aInstance._cache.timerKeyPress = setTimeout(() => {
                        if (!aInstance.isDestroyed()) {
                          lCallback();
                        }
                      }, 0);
                    } else {
                      lCallback();
                    }
                  }
                },
                keyup: function (aEvent) {
                  if (aEvent.target.closest('input, textarea')) {
                    return;
                  }
                  if (
                    ToucheClavier_1.ToucheClavierUtil.estEventSupprimer(
                      aEvent,
                    ) &&
                    aInstance._avecSuppressionSelectionCourante(
                      aInstance._cache.selectionCellule.ligne,
                      aInstance._cache.selectionCellule.colonne,
                    )
                  ) {
                    aInstance._surSuppression();
                  } else if (
                    aInstance.Pere &&
                    aInstance.Evenement &&
                    aInstance.Donnees &&
                    aInstance.Donnees.options &&
                    aInstance.Donnees.options.avecEvnt_KeyUpListe
                  ) {
                    aInstance.Evenement.call(aInstance.Pere, {
                      instance: aInstance,
                      event: aEvent,
                      genreEvenement:
                        Enumere_EvenementListe_1.EGenreEvenementListe
                          .KeyUpListe,
                    });
                    aInstance._refreshSelf();
                  }
                  if (aInstance._estToucheNavigationFlechesClavier(aEvent)) {
                    aInstance._navigationFlechesClavier(aEvent, {
                      ligneEtColonneFixe: true,
                      forcerNavigationFocus: true,
                    });
                    GNavigateur.stopperEvenement(aEvent.originalEvent);
                  }
                },
                mousenter: function () {
                  aInstance._cache.mouseOUTListe = false;
                },
                mouseleave: function () {
                  aInstance._cache.mouseOUTListe = true;
                },
              });
            },
            getNodeAfterListe() {
              const lAvecBoutons = aInstance._avecBoutonsListeHautScroll();
              if (aInstance._options.borduresContenu_top || !lAvecBoutons) {
                let lTop =
                  (aInstance._zoneContenuAvecTraitHaut()
                    ? aInstance._options.borduresContenu_top
                    : 0) || 0;
                if (!lAvecBoutons) {
                  let lMax = 0;
                  aInstance._cache.infosZonesColonnes.forEach(
                    (aInfosZoneColonnes) => {
                      lMax = Math.max(
                        lMax,
                        ObjetPosition_1.GPosition.getHeight(
                          aInstance.ids.titre + aInfosZoneColonnes.indiceBloc,
                        ),
                      );
                    },
                  );
                  lTop += lMax;
                }
                $('#' + aInstance.ScrollV.getIdScroll().escapeJQ()).css(
                  'padding-top',
                  lTop + 'px',
                );
              }
            },
            getNodeScrollContenuParent() {
              $(this.node).on({
                contextmenu: function (event) {
                  if (
                    event.originalEvent &&
                    '__contextMenuSurContenu__' in event.originalEvent &&
                    event.originalEvent.__contextMenuSurContenu__
                  ) {
                    return;
                  }
                  const lParams = aInstance._getParamsCellule(null, -2, {
                    surFondListe: true,
                  });
                  if (
                    aInstance.Donnees.avecMenuContextuel(lParams) &&
                    !UtilitaireMenuContextuelNatif_1.UtilitaireMenuContextuelNatif.accepter(
                      event,
                    )
                  ) {
                    aInstance._ouvrirMenuContextuel(lParams);
                  }
                },
              });
            },
            getNodeScrollContenu() {
              const lEsTreeGrid = aInstance._estRoleTreeGrid();
              const lEventMapCelluleTd = {
                mousedown: aInstance._surMouseDownCellule,
                mouseup: aInstance._surMouseUpCellule,
                click: aInstance._surClickCellule,
                dblclick: aInstance._surDblClickCellule,
                keyup: aInstance._surKeyUpCellule,
                keydown: aInstance._surKeyDownCellule,
                contextmenu: aInstance._surContextMenuCellule,
                mouseenter: aInstance._surMouseEnterOverCellule,
                mouseover: aInstance._surMouseEnterOverCellule,
                focus() {
                  if (lEsTreeGrid) {
                    this.removeAttribute('aria-hidden');
                    aInstance.liaisonWAITitreColonne(
                      true,
                      true,
                      parseInt(this.dataset.colonne),
                    );
                    const lTreeGrid = ObjetHtml_1.GHtml.getElement(
                      aInstance.ids.WAIGrid + '_rowcell',
                    );
                    if (lTreeGrid) {
                      lTreeGrid.setAttribute('aria-owns', this.id);
                    }
                  }
                  ObjetHtml_1.GHtml.getElementsFocusablesDElement(this).forEach(
                    (aNode) => {
                      aNode.setAttribute('tabindex', '0');
                    },
                  );
                  const lTreeGridTri = ObjetHtml_1.GHtml.getElement(
                    aInstance.ids.WAIGrid + '_rowtri',
                  );
                  lTreeGridTri === null || lTreeGridTri === void 0
                    ? void 0
                    : lTreeGridTri.removeAttribute('aria-owns');
                },
                blur() {
                  if (lEsTreeGrid) {
                    aInstance.liaisonWAITitreColonne(
                      false,
                      true,
                      parseInt(this.dataset.colonne),
                    );
                    const lTreeGrid = ObjetHtml_1.GHtml.getElement(
                      aInstance.ids.WAIGrid + '_rowcell',
                    );
                    if (lTreeGrid) {
                      lTreeGrid.removeAttribute('aria-owns');
                    }
                  }
                  ObjetHtml_1.GHtml.getElementsFocusablesDElement(this).forEach(
                    (aNode) => {
                      aNode.setAttribute('tabindex', '-1');
                    },
                  );
                  if (lEsTreeGrid) {
                    this.setAttribute('aria-hidden', 'true');
                  }
                },
              };
              const lData = { instance: aInstance };
              $(this.node)
                .on(
                  lEventMapCelluleTd,
                  'div.liste_celluleGrid:not(:has(.Liste_Input_Texte))',
                  lData,
                )
                .on('mouseleave', () => {
                  aInstance._gererRollover(false);
                });
            },
            getNodeGridTotal() {
              $(this.node).on({
                focus(aEvent) {
                  var _a, _b, _c;
                  if (
                    !aEvent.relatedTarget ||
                    aEvent.relatedTarget.closest('.liste_cellule_total')
                  ) {
                    return;
                  }
                  if (
                    (_a = aInstance._cache.gridTotalAccess) === null ||
                    _a === void 0
                      ? void 0
                      : _a.nav
                  ) {
                    (_b = ObjetHtml_1.GHtml.getElement(
                      aInstance.getIdCelluleTotal(
                        aInstance._cache.gridTotalAccess.nav.colonne,
                        aInstance._cache.gridTotalAccess.nav.ligne,
                        true,
                      ),
                    )) === null || _b === void 0
                      ? void 0
                      : _b.focus();
                  } else {
                    const lCols = aInstance._cache.gridTotalAccess.ordres[0];
                    if (lCols && lCols.length > 0) {
                      (_c = ObjetHtml_1.GHtml.getElement(
                        aInstance.getIdCelluleTotal(
                          lCols[0],
                          aInstance._cache.gridTotalAccess.sansArticle ? -1 : 0,
                          true,
                        ),
                      )) === null || _c === void 0
                        ? void 0
                        : _c.focus();
                    }
                  }
                },
              });
            },
            getNodeCelluleTotalCell() {
              $(this.node).on({
                keyup(aEvent) {
                  aInstance.navigationClavierGridTotal(aEvent);
                },
              });
            },
            getNodeCelluleTotal() {
              const lData = { instance: aInstance };
              $(this.node).on(
                {
                  click: aInstance._surClickCelluleTotal,
                  focusin() {
                    var _a, _b;
                    aInstance._cache.gridTotalAccess.nav = {
                      ligne: parseInt(this.dataset.row),
                      colonne: parseInt(this.dataset.col),
                    };
                    this.removeAttribute('aria-hidden');
                    aInstance.liaisonWAITitreColonne(
                      true,
                      false,
                      aInstance._cache.gridTotalAccess.nav.colonne,
                    );
                    (_a = ObjetHtml_1.GHtml.getElement(
                      aInstance.ids.WAIGrid + 'total_rowcell',
                    )) === null || _a === void 0
                      ? void 0
                      : _a.setAttribute('aria-owns', this.id);
                    (_b = ObjetHtml_1.GHtml.getElement(
                      aInstance.ids.WAIGrid + '_gridTotal',
                    )) === null || _b === void 0
                      ? void 0
                      : _b.setAttribute('tabindex', '-1');
                  },
                  focusout() {
                    var _a, _b;
                    aInstance.liaisonWAITitreColonne(
                      false,
                      false,
                      aInstance._cache.gridTotalAccess.nav.colonne,
                    );
                    (_a = ObjetHtml_1.GHtml.getElement(
                      aInstance.ids.WAIGrid + 'total_rowcell',
                    )) === null || _a === void 0
                      ? void 0
                      : _a.removeAttribute('aria-owns');
                    this.setAttribute('aria-hidden', 'true');
                    (_b = ObjetHtml_1.GHtml.getElement(
                      aInstance.ids.WAIGrid + '_gridTotal',
                    )) === null || _b === void 0
                      ? void 0
                      : _b.setAttribute('tabindex', '0');
                  },
                },
                lData,
              );
            },
            getNodeTableTitre(aIndiceBloc) {
              if (aInstance._cache.infosZonesColonnes.length > 1) {
                $(this.node)
                  .find('.liste_titreGabLigne')
                  .each(function (aIndexLigne) {
                    if (!aInstance._cache.heightLigneTitre) {
                      aInstance._cache.heightLigneTitre = {};
                    }
                    if (!aInstance._cache.heightLigneTitre[aIndexLigne]) {
                      aInstance._cache.heightLigneTitre[aIndexLigne] = {
                        min: Number.MAX_VALUE,
                        max: -1,
                      };
                    }
                    const lInfosLigne =
                      aInstance._cache.heightLigneTitre[aIndexLigne];
                    const lHeight = $(this).height();
                    lInfosLigne[aIndiceBloc] = lHeight;
                    lInfosLigne.min = Math.min(lHeight, lInfosLigne.min);
                    lInfosLigne.max = Math.max(lHeight, lInfosLigne.max);
                  });
              }
            },
            getNodeAfterTableTitre(aIndiceBloc) {
              if (aInstance._cache.heightLigneTitre) {
                $(this.node)
                  .find('.liste_titreGabLigne')
                  .each(function (aIndexLigne) {
                    const lInfosLigne =
                      aInstance._cache.heightLigneTitre[aIndexLigne];
                    if (
                      lInfosLigne &&
                      lInfosLigne[aIndiceBloc] < lInfosLigne.max
                    ) {
                      $(this).height(lInfosLigne.max);
                    }
                  });
              }
              const lInfos = aInstance._cache.infosZonesColonnes[aIndiceBloc];
              if (aInstance._cache.colonnesTri) {
                aInstance._nodeTableTitrePourTri(this.node, lInfos);
              }
            },
            getOptionsEllipsisTitre(aAvecHint, aNbLignesMax) {
              return {
                nbLignesMax: aNbLignesMax,
                getJNodeHint: function (aNode) {
                  return $(aNode).parent();
                },
                avecHint: !!aAvecHint,
              };
            },
            getNodeAfterCurseurTri(aNumeroTri, aIndiceBloc) {
              const lInfos = aInstance._cache.infosZonesColonnes[aIndiceBloc];
              aInstance._positionnerCurseurTri(lInfos, this.node, aNumeroTri);
              $(this.node)
                .on({
                  contextmenu: function () {
                    aInstance.afficherMenuContextuelTri(
                      aInstance._triCourant.colonne[aNumeroTri],
                    );
                  },
                  keyup(aEvent) {
                    if (
                      aEvent.which ===
                        ToucheClavier_1.ToucheClavier.FlecheGauche ||
                      aEvent.which ===
                        ToucheClavier_1.ToucheClavier.FlecheDroite
                    ) {
                      const lNumeroColonne =
                        aInstance._triCourant.colonne[aNumeroTri];
                      const lInc =
                        aEvent.which ===
                        ToucheClavier_1.ToucheClavier.FlecheGauche
                          ? -1
                          : 1;
                      let lNumeroColonneTriRecherche = lNumeroColonne + lInc;
                      while (
                        lNumeroColonneTriRecherche <
                          aInstance._cache.listeCorrespondancesColonnes
                            .length &&
                        lNumeroColonneTriRecherche > 0 &&
                        (!aInstance._cache.colonnesTri[
                          lNumeroColonneTriRecherche
                        ] ||
                          !aInstance._estColonneVisible(
                            lNumeroColonneTriRecherche,
                          ) ||
                          !ObjetHtml_1.GHtml.getElement(
                            aInstance.getIdAriaTitreDeColonne(
                              lNumeroColonneTriRecherche,
                            ),
                          ))
                      ) {
                        lNumeroColonneTriRecherche += lInc;
                      }
                      if (
                        aInstance._cache.colonnesTri[
                          lNumeroColonneTriRecherche
                        ] &&
                        aInstance._estColonneVisible(
                          lNumeroColonneTriRecherche,
                        ) &&
                        ObjetHtml_1.GHtml.getElement(
                          aInstance.getIdAriaTitreDeColonne(
                            lNumeroColonneTriRecherche,
                          ),
                        )
                      ) {
                        aInstance._setColonneTri(
                          lNumeroColonneTriRecherche,
                          aInstance._triCourant.genre[aNumeroTri],
                          aNumeroTri,
                        );
                      }
                      aEvent.stopImmediatePropagation();
                    }
                  },
                  focus() {
                    const lTreeGrid = ObjetHtml_1.GHtml.getElement(
                      aInstance.ids.WAIGrid + '_rowtri',
                    );
                    lTreeGrid === null || lTreeGrid === void 0
                      ? void 0
                      : lTreeGrid.setAttribute(
                          'aria-owns',
                          aInstance.ids.curseurTri + aIndiceBloc + '_row',
                        );
                  },
                })
                .eventValidation(function () {
                  if ($(this).data('dragEnCours')) {
                    return;
                  }
                  const lGenreTri =
                    aInstance._triCourant.genre[aNumeroTri] ===
                    Enumere_TriElement_1.EGenreTriElement.Croissant
                      ? Enumere_TriElement_1.EGenreTriElement.Decroissant
                      : Enumere_TriElement_1.EGenreTriElement.Croissant;
                  aInstance._setColonneTri(
                    aInstance._triCourant.colonne[aNumeroTri],
                    lGenreTri,
                    aNumeroTri,
                  );
                });
            },
            dragCurseurTriDraggable(aNumeroTri, aIndiceBloc) {
              const lIdCurseurTriSurvol =
                aInstance.ids.curseurTriSurvol.escapeJQ() + aIndiceBloc;
              return {
                start(aParamsDrag) {
                  $(aParamsDrag.node).data('dragEnCours', true);
                  $('#' + lIdCurseurTriSurvol).data('dragEnCours', true);
                },
                drag(aParamsDrag) {
                  const lNumeroColonne = aInstance._getColonneDePositionLeft(
                    aParamsDrag.pos.x,
                    ObjetHtml_1.GHtml.getElement(
                      aInstance.ScrollH.getIdContenu(EGenreZoneScroll.tri),
                    ),
                    aInstance._cache.infosZonesColonnes[aIndiceBloc],
                  );
                  aParamsDrag.numeroColonneTri = lNumeroColonne;
                  const lRectContainer =
                    ObjetPosition_1.GPosition.getClientRect(
                      ObjetHtml_1.GHtml.getElement(
                        aInstance.ScrollH.getIdZone(EGenreZoneScroll.tri),
                      ),
                    );
                  let lLeft =
                    aParamsDrag.pos.x -
                    lRectContainer.left -
                    aParamsDrag.rect.width / 2;
                  lLeft = Math.max(lLeft, 0);
                  lLeft = Math.min(
                    lLeft,
                    lRectContainer.width - aParamsDrag.rect.width,
                  );
                  $(aParamsDrag.node).css({ left: lLeft });
                },
                stop(aParamsDrag) {
                  $(aParamsDrag.node).data('dragEnCours', null);
                  $('#' + lIdCurseurTriSurvol).data('dragEnCours', null);
                  if (
                    aParamsDrag.numeroColonneTri < 0 ||
                    !aInstance._cache.colonnesTri[aParamsDrag.numeroColonneTri]
                  ) {
                    return;
                  }
                  aInstance._setColonneTri(
                    aParamsDrag.numeroColonneTri,
                    aInstance._triCourant.genre[aNumeroTri],
                    aNumeroTri,
                  );
                },
              };
            },
            getClassTriGridTitre(aNumeroColonne) {
              return aInstance._triCourant.colonne.includes(aNumeroColonne)
                ? 'liste_gridTitre_cel-tri'
                : '';
            },
            getHintHtmlTitre: function (aLigne, aColonne) {
              if (
                aInstance.ListeTitres &&
                aInstance.ListeTitres[aLigne] &&
                aInstance.ListeTitres[aLigne][aColonne] &&
                aInstance.ListeTitres[aLigne][aColonne].titleHtml
              ) {
                const lTitle =
                  aInstance.ListeTitres[aLigne][aColonne].titleHtml;
                if (MethodesObjet_1.MethodesObjet.isFunction(lTitle)) {
                  return lTitle();
                }
                return lTitle;
              }
              return '';
            },
            nodeSurLigneCreationUnique(aLigne) {
              $(this.node).on({
                click: function () {
                  aInstance._surLigneCreationUnique(true, aLigne);
                },
                keyup: function (aEvent) {
                  aInstance._surLigneCreationUnique(
                    false,
                    aLigne,
                    ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(
                      aEvent,
                    ) ||
                      ToucheClavier_1.ToucheClavierUtil.estEventEdition(aEvent),
                  );
                },
              });
            },
            eventSurLigneCreation: function (aEvent) {
              switch (aEvent.type) {
                case 'click':
                  aInstance.surCreationDeb(false);
                  break;
                case 'keyup':
                  if (
                    ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(
                      aEvent,
                    ) ||
                    ToucheClavier_1.ToucheClavierUtil.estEventEdition(aEvent)
                  ) {
                    aInstance.surCreationDeb(false);
                  }
                  break;
              }
            },
            nodeAfterCellule() {
              ObjetHtml_1.GHtml.getElementsFocusablesDElement(this.node, {
                ignoreAriaHidden: false,
              }).forEach((aNode) => {
                aNode.setAttribute('tabindex', '-1');
              });
            },
            dragFantomeCellule(aLigne, aColonne) {
              return {
                getIdZone() {
                  return aInstance.idZone;
                },
                start(aParamsDrag) {
                  if (aInstance._cache.finEditionCreation) {
                    aInstance._cache.finEditionCreation();
                    return false;
                  }
                  const lParamsCellule = aInstance._getParamsCellule(
                    aColonne,
                    aLigne,
                    { draggable: true },
                  );
                  Object.assign(
                    aParamsDrag.data,
                    {
                      estObjetListe: true,
                      instance: aInstance,
                      avecSuppression:
                        aInstance._avecSuppressionSelectionCourante(
                          lParamsCellule.ligne,
                          lParamsCellule.colonne,
                        ),
                      libelle: aInstance._getLibelleDraggable(lParamsCellule),
                    },
                    lParamsCellule,
                  );
                },
                drag: function (aParamsDrag) {
                  const lData = aParamsDrag.data;
                  lData.horsZoneSuppression = false;
                  if (
                    !lData.droppableCourant &&
                    lData.avecSuppression &&
                    aParamsDrag.horsZone
                  ) {
                    lData.horsZoneSuppression = true;
                  }
                },
                stop: function (aParamsDrag) {
                  const lData = aParamsDrag.data;
                  if (lData) {
                    if (lData.horsZoneSuppression) {
                      aInstance._surSuppression();
                    } else {
                      ObjetHtml_1.GHtml.setFocus(
                        aInstance.getIdCellule(
                          lData.colonne,
                          lData.ligne,
                          true,
                        ),
                      );
                    }
                  }
                },
              };
            },
            dropCelluleDroppable(aLigne, aColonne) {
              const lParamsCellule = aInstance._getParamsCellule(-1, aLigne);
              return {
                accept(aParamsDrop) {
                  const lData = aParamsDrop.drag.data;
                  const lElement = $(aParamsDrop.drag.node);
                  return (
                    lData &&
                    aInstance.Donnees.autoriserDeplacementElementSurLigne(
                      lParamsCellule,
                      Object.assign({ jDraggable: lElement }, lData),
                    )
                  );
                },
                over(aParamsDrop) {
                  const lData = aParamsDrop.drag.data;
                  lData.getHtmlDetailsDraggable = function () {
                    return aInstance.Donnees.getHtmlDetailsDraggableOver(
                      lParamsCellule,
                      lData,
                    );
                  };
                  lData.celluleDroppableHover = {
                    ligne: aLigne,
                    colonne: aColonne,
                  };
                  lData.droppableCourant = aParamsDrop.drop.node;
                  lData.controleurDraggable.$refreshSelf();
                  aInstance._parcourirCellulesVoileBleu(
                    lParamsCellule,
                    (aNode) => {
                      $(aNode).addClass('voileDropCellule');
                    },
                  );
                  const lEstPremiereLigne =
                    lParamsCellule.ligne === aInstance._cache.lignesVisibles[0];
                  const lEstDerniereLigne =
                    lParamsCellule.ligne ===
                    aInstance._cache.lignesVisibles[
                      aInstance._cache.lignesVisibles.length - 1
                    ];
                  if (aInstance.Donnees.options.dragNDropLigneInsertion) {
                    const lJConteneur = $(
                      '#' + aInstance.ids.zoneFils.escapeJQ(),
                    );
                    const lRect = ObjetPosition_1.GPosition.getClientRect(
                      aParamsDrop.drop.node,
                    );
                    let lTop =
                      lRect.top +
                      (lParamsCellule.ligne < lData.ligne ? -1 : lRect.height) -
                      ObjetPosition_1.GPosition.getClientRect(
                        lJConteneur.get(0),
                      ).top -
                      1;
                    if (lEstPremiereLigne) {
                      lTop += 2;
                    } else if (lEstDerniereLigne) {
                      lTop += -2;
                    }
                    lJConteneur.ieHtmlAppend(
                      [
                        IE.jsx.str(
                          'div',
                          {
                            id:
                              aInstance.ids.dragInsertion +
                              lParamsCellule.ligne,
                            class: 'liste_dragInsertion',
                            style: { top: lTop },
                          },
                          IE.jsx.str('div', {
                            class: 'liste_dragInsertion_fg',
                          }),
                          IE.jsx.str('div', {
                            class: 'liste_dragInsertion_fd',
                          }),
                        ),
                      ].join(''),
                    );
                  }
                  const lIgnorerScroll =
                    (lEstPremiereLigne &&
                      aInstance.ScrollV.estScrollSurBorne(true)) ||
                    (lEstDerniereLigne &&
                      aInstance.ScrollV.estScrollSurBorne(false));
                  if (!lIgnorerScroll) {
                    setTimeout(() => {
                      aInstance.scrollTo({
                        ligne: lParamsCellule.ligne,
                        avecScrollTopLigne: false,
                        ecartForce: 10,
                      });
                    }, 50);
                  }
                },
                out(aParamsDrop) {
                  const lData = aParamsDrop.drag.data;
                  let lLigneDroppableChange = true;
                  if (
                    lData.celluleDroppableHover &&
                    lData.celluleDroppableHover.ligne === aLigne
                  ) {
                    if (lData.celluleDroppableHover.colonne === aColonne) {
                      lData.celluleDroppableHover = null;
                    } else {
                      lLigneDroppableChange = false;
                    }
                  }
                  if (lLigneDroppableChange) {
                    aInstance._parcourirCellulesVoileBleu(
                      lParamsCellule,
                      (aNode) => {
                        $(aNode).removeClass('voileDropCellule');
                      },
                    );
                    if (aInstance.Donnees.options.dragNDropLigneInsertion) {
                      $(
                        '#' +
                          (
                            aInstance.ids.dragInsertion + lParamsCellule.ligne
                          ).escapeJQ(),
                      ).remove();
                    }
                    if (lData.droppableCourant === aParamsDrop.drop.node) {
                      lData.droppableCourant = null;
                      lData.getHtmlDetailsDraggable = null;
                    }
                    lData.controleurDraggable.$refreshSelf();
                  }
                },
                drop(aParamsDrop) {
                  const lData = aParamsDrop.drag.data;
                  aInstance._parcourirCellulesVoileBleu(
                    lParamsCellule,
                    (aNode) => {
                      $(aNode).removeClass('voileDropCellule');
                    },
                  );
                  if (lData) {
                    if (aInstance.Donnees.options.dragNDropLigneInsertion) {
                      $(
                        '#' +
                          (
                            aInstance.ids.dragInsertion + lParamsCellule.ligne
                          ).escapeJQ(),
                      ).remove();
                    }
                    const lElement = $(aParamsDrop.drag.node);
                    aInstance._surDeplacementLigneSurAutreLigne(
                      lParamsCellule,
                      Object.assign({ jDraggable: lElement }, lData),
                    );
                  }
                },
              };
            },
          },
        });
      }
      _ouvrirFenetreParametrageColonnes() {
        ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_ParametrageColonnesListe_1.ObjetFenetre_ParametrageColonnesListe,
          {
            pere: this,
            evenement(aNumeroBouton, aParams) {
              if (aParams.bouton.valider) {
                this._cache.parametrageColonnes = aParams.parametrage;
                this._options.gestionModificationColonnes.setColonnes(
                  aParams.parametrage,
                );
                this._cache.calculsPreRenduAFaire = true;
                this._cache.calculsTailleColonnesAFaire = true;
                this._actualiser({
                  conserverSelection: true,
                  sansTriDonnees: true,
                });
              }
            },
          },
          {
            titre: 'Personnalisation de la liste',
            classObjetListe: ObjetListeEspace,
          },
        ).setDonnees({
          declarationColonnes: this._options.colonnes,
          parametrageColonnes: this._cache.parametrageColonnes,
          tableauColonnesCachees: this._cache.tableauColonnesCacheesOriginal,
        });
      }
      _gererModificationsColonnes() {
        this._cache.listeCorrespondancesColonnes = [];
        if (!this._options.gestionModificationColonnes) {
          this._cache.colonnes.listeTailles.forEach((a, aIndex) => {
            this._cache.listeCorrespondancesColonnes[aIndex] = aIndex;
          });
          return;
        }
        if (
          !MethodesObjet_1.MethodesObjet.isFunction(
            this._options.gestionModificationColonnes.getColonnes,
          ) ||
          !Array.isArray(this._options.colonnes)
        ) {
          return;
        }
        this._cache.parametrageColonnes =
          this._options.gestionModificationColonnes.getColonnes();
        if (
          !this._cache.parametrageColonnes ||
          !this._cache.parametrageColonnes.length
        ) {
          this._cache.parametrageColonnes = [];
          this._cache.colonnes.listeIds.forEach((aId) => {
            this._cache.parametrageColonnes.push({ id: aId });
          });
        }
        const lOriginalIds = [];
        this._options.colonnes.forEach((aCol, aIndex) => {
          this._cache.listeCorrespondancesColonnes[aIndex] = -1;
          lOriginalIds.push(aCol.id);
        });
        this._cache.colonnes.listeIds = [];
        this._cache.colonnes.listeTailles = [];
        this._cache.declarationsColonnes = [];
        this._cache.parametrageColonnes.forEach((aColonne) => {
          if (!aColonne) {
            return;
          }
          const lId = aColonne.id;
          const lDecl = this._cache.declColonnesByIds[lId];
          if (!lDecl) {
            return;
          }
          if (aColonne.visible === false) {
            return;
          }
          this._cache.declarationsColonnes.push(lDecl);
          const lNumeroColonne = this._cache.declarationsColonnes.length - 1;
          this._cache.colonnes.listeIds[lNumeroColonne] = lDecl.id;
          this._cache.colonnes.listeTailles[lNumeroColonne] = lDecl.taille || 0;
          this._cache.listeCorrespondancesColonnes[
            lOriginalIds.indexOf(lDecl.id)
          ] = lNumeroColonne;
        });
        if (
          this._cache.declarationsColonnes.length === 0 &&
          this._options.colonnes &&
          this._options.colonnes.length > 0
        ) {
          IE.log.addLog('Aucune colonne visible dans le parametrage');
          const lDecl =
            this._cache.declColonnesByIds[this._options.colonnes[0]];
          this._cache.declarationsColonnes.push(lDecl);
          this._cache.colonnes.listeIds[0] = lDecl.id;
          this._cache.colonnes.listeTailles[0] = lDecl.taille || 0;
          this._cache.listeCorrespondancesColonnes[0] = 0;
        }
      }
      _preparerBoutons() {
        super._preparerBoutons({
          createExportCSV: (aBouton) => {
            if (!ObjetSupport_1.Support.supportBlob) {
              IE.log.addLog(
                '_ObjetListe : bouton exportCSV sans support javascript du Blob => bouton ignoré',
              );
              return;
            }
            aBouton.class = 'icon_copier_liste';
            aBouton.title =
              'Copier la liste (format CSV)';
            if (
              !MethodesObjet_1.MethodesObjet.isFunction(aBouton.getNomFichier)
            ) {
              aBouton.getNomFichier = function () {
                return 'Export CSV';
              };
            }
            aBouton.getDisabled = function () {
              return false;
            };
            aBouton.event = (aParam) => {
              ExportBlob_1.ExportBlob.create(
                this._construireCopieCSV(),
                aParam.bouton.getNomFichier(),
                'text/csv',
              );
            };
          },
        });
        this.ScrollV.tailleScrollPersonnalisee =
          this._avecBoutonsListeHautScroll();
      }
      _backupScroll(aParams) {
        if (!aParams.conserverPositionScroll) {
          return { scrollTop: 0, scrollLeft: 0 };
        }
        let lScrollTop = 0;
        let lScrollLeft = 0;
        if (this._cache.avecScrollHorizontal) {
          lScrollLeft = $(
            '#' + this.ScrollH.getIdZone(EGenreZoneScroll.contenu).escapeJQ(),
          ).scrollLeft();
        }
        if (this.ScrollV.avecScrollVisible()) {
          lScrollTop = ObjetPosition_1.GPosition.getScrollTop(
            this.ScrollV.getIdZone(EGenreZoneScroll.contenu),
          );
        } else {
          const lElementScroll = ObjetHtml_1.GHtml.getParentScrollable(
            this.Nom,
          );
          if (lElementScroll) {
            return {
              elementScrollV: lElementScroll,
              scrollTop: lElementScroll.scrollTop,
              scrollLeft: lScrollLeft,
            };
          }
        }
        return {
          elementScrollV: ObjetHtml_1.GHtml.getElement(
            this.ScrollV.getIdZone(EGenreZoneScroll.contenu),
          ),
          estObjetScroll: true,
          scrollTop: lScrollTop,
          scrollLeft: lScrollLeft,
        };
      }
      _setScroll(aBackupScroll, aSurResizeHeightContenu) {
        let lUniquementActualisationHeightContenu = false;
        if (aSurResizeHeightContenu) {
          lUniquementActualisationHeightContenu =
            this.ScrollV.surModificationHeightContenu();
        }
        if (!lUniquementActualisationHeightContenu) {
          this.ScrollV.avecScrollEnTactile = this._options.avecScrollEnTactileV;
          this.ScrollV.setDonnees(
            EGenreZoneScroll.contenu,
            EGenreZoneScroll.contenuFixe,
            EGenreZoneScroll.contenuFixeFin,
          );
          if (this._cache.avecScrollHorizontal) {
            this.ScrollH.avecScrollEnTactile =
              this._options.avecScrollEnTactileH;
            this.ScrollH.setDonnees(
              EGenreZoneScroll.contenu,
              EGenreZoneScroll.titre,
              EGenreZoneScroll.tri,
              EGenreZoneScroll.total,
            );
          } else {
            this.ScrollH.setDonnees(null);
          }
          if (aBackupScroll) {
            if (aBackupScroll.elementScrollV && !aBackupScroll.estObjetScroll) {
              aBackupScroll.elementScrollV.scrollTop = aBackupScroll.scrollTop;
            } else {
              this.ScrollV.scrollTo(aBackupScroll.scrollTop);
            }
            if (this._cache.avecScrollHorizontal) {
              this.ScrollH.scrollTo(aBackupScroll.scrollLeft);
            }
          }
        }
        if (this._options.skin === _ObjetListe_1.ObjetListe.skin.flatDesign) {
          const lClassesOmbre = [];
          if (!this._cache.ombreTopForce) {
            lClassesOmbre.push('ombre-top');
          }
          if (!this._options.forcerOmbreScrollBottom) {
            lClassesOmbre.push('ombre-bottom');
          }
          if (lClassesOmbre.length > 0) {
            if (this.ScrollV.avecScrollVisible()) {
              $(`#${this.idZone.escapeJQ()}`).addClass(lClassesOmbre.join(' '));
            } else {
              $(`#${this.idZone.escapeJQ()}`).removeClass(
                lClassesOmbre.join(' '),
              );
            }
          }
        }
        this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
          const lJContenu = $(
            `#${this.ScrollV.getIdContenu(aInfosZoneColonnes.idScrollContenu).escapeJQ()}`,
          );
          const lJOmbres = $(
            `#${(this.ids.contenu + aInfosZoneColonnes.indiceBloc).escapeJQ()} > div.conteneur-ombre-zone > div.ombre`,
          );
          if (lJOmbres.length > 0 && lJContenu.length === 1) {
            lJOmbres.height(lJContenu.height()).css({ bottom: 'auto' });
          }
        });
      }
      _construireContenuRange(aInfosColonnes, aIndiceRange) {
        return this.construireContenuListeInterneLignes(
          aInfosColonnes,
          aIndiceRange,
        );
      }
      _getTabElementsPourRsizeObserver() {
        return [
          EGenreZoneScroll.contenu,
          EGenreZoneScroll.contenuFixe,
          EGenreZoneScroll.contenuFixeFin,
        ].map((aGenre) => {
          return ObjetHtml_1.GHtml.getElement(
            this.ScrollV.getIdContenu(aGenre),
          );
        });
      }
      _getInfosZonesColonnes(aCache) {
        function _addZone(aInfos) {
          const lInfos = Object.assign(
            {
              dernierBloc: true,
              indiceColonneDebut: 0,
              indiceColonneFin: 0,
              indiceBloc: aCache.infosZonesColonnes.length,
              idScrollTri: EGenreZoneScroll.tri,
              idScrollTitre: EGenreZoneScroll.titre,
              idScrollContenu: EGenreZoneScroll.contenu,
              idScrollTotal: EGenreZoneScroll.total,
              estBlocFixe: false,
              gabaritColonnesTitre: [],
              colonnesVisibles: [],
              largeurBloc: 0,
              indiceColVisibleDebut: 0,
            },
            aInfos,
          );
          for (
            let lColonne = lInfos.indiceColonneDebut;
            lColonne <= lInfos.indiceColonneFin;
            lColonne++
          ) {
            if (!aCache.tableauColonnesCachees[lColonne]) {
              lInfos.colonnesVisibles.push(lColonne);
            }
          }
          if (lInfos.colonnesVisibles.length > 0) {
            lInfos.indiceColonneDebut = lInfos.colonnesVisibles[0];
            lInfos.indiceColonneFin =
              lInfos.colonnesVisibles[lInfos.colonnesVisibles.length - 1];
            if (aCache.infosZonesColonnes.length > 0) {
              const lBlocPrec =
                aCache.infosZonesColonnes[aCache.infosZonesColonnes.length - 1];
              if (lBlocPrec) {
                lBlocPrec.dernierBloc = false;
                lInfos.indiceColVisibleDebut =
                  lBlocPrec.indiceColVisibleDebut +
                  lBlocPrec.colonnesVisibles.length;
              }
            }
            aCache.infosZonesColonnes.push(lInfos);
            return lInfos;
          }
          return null;
        }
        function _rechercheColonneVisible(aNumeroColonne, aRechercheAvant) {
          let lNumeroColonne = aNumeroColonne;
          while (
            lNumeroColonne >= 0 &&
            lNumeroColonne < aCache.tableauColonnesCachees.length
          ) {
            if (!aCache.tableauColonnesCachees[lNumeroColonne]) {
              return lNumeroColonne;
            }
            lNumeroColonne += aRechercheAvant ? -1 : 1;
          }
          return -1;
        }
        aCache.infosZonesColonnes = [];
        aCache.avecScrollHorizontal =
          this._options.scrollHorizontal !== false &&
          (!GNavigateur.isLayoutTactile || this._options.avecScrollEnTactileH);
        aCache.avecScrollHMultiZonePrevu =
          (!GNavigateur.isLayoutTactile ||
            this._options.avecScrollEnTactileH) &&
          this._options.scrollHorizontal &&
          this._options.scrollHorizontal !== true;
        if (!this.ListeTailles) {
          return;
        }
        let lDerniereColonneFixe = -1;
        let lColonneDebutFixeFin = this.ListeTailles.length - 1;
        let lAvecBlocFixeFin = false;
        let lColScrollDebut = null;
        let lColScrollFin = null;
        if (aCache.avecScrollHorizontal) {
          let lNumeroColonneAvecScroll = 0;
          let lNumeroColonneFinScroll = this.ListeTailles.length - 1;
          lColScrollDebut = this._options.scrollHorizontal;
          if (typeof this._options.scrollHorizontal === 'object') {
            if (this._options.scrollHorizontal.debut !== undefined) {
              lColScrollDebut = this._options.scrollHorizontal.debut;
            }
            if (this._options.scrollHorizontal.fin !== undefined) {
              lColScrollFin = this._options.scrollHorizontal.fin;
            }
          }
          if (MethodesObjet_1.MethodesObjet.isString(lColScrollDebut)) {
            lNumeroColonneAvecScroll =
              this.getNumeroColonneDIdColonne(lColScrollDebut);
          } else if (
            MethodesObjet_1.MethodesObjet.isNumber(lColScrollDebut) &&
            lColScrollDebut > 0
          ) {
            lNumeroColonneAvecScroll = lColScrollDebut;
          }
          if (lNumeroColonneAvecScroll > 0) {
            lNumeroColonneAvecScroll = _rechercheColonneVisible(
              lNumeroColonneAvecScroll,
              false,
            );
          }
          if (MethodesObjet_1.MethodesObjet.isString(lColScrollFin)) {
            lNumeroColonneFinScroll =
              this.getNumeroColonneDIdColonne(lColScrollFin);
          } else if (
            MethodesObjet_1.MethodesObjet.isNumber(lColScrollFin) &&
            lColScrollFin > 0
          ) {
            lNumeroColonneFinScroll = lColScrollFin;
          }
          if (lNumeroColonneFinScroll > 0) {
            lNumeroColonneFinScroll = _rechercheColonneVisible(
              lNumeroColonneFinScroll,
              true,
            );
          }
          if (lNumeroColonneAvecScroll > 0) {
            lDerniereColonneFixe = lNumeroColonneAvecScroll - 1;
          }
          if (
            lNumeroColonneFinScroll > 1 &&
            lNumeroColonneFinScroll < this.ListeTailles.length - 1 &&
            lNumeroColonneFinScroll > lNumeroColonneAvecScroll
          ) {
            lColonneDebutFixeFin = lNumeroColonneFinScroll;
          }
        }
        if (
          lColonneDebutFixeFin - lDerniereColonneFixe < 2 ||
          lDerniereColonneFixe >= this.ListeTailles.length - 1
        ) {
          aCache.avecScrollHorizontal = false;
        }
        lAvecBlocFixeFin = lColonneDebutFixeFin < this.ListeTailles.length - 1;
        if (
          !aCache.avecScrollHorizontal ||
          (lDerniereColonneFixe < 0 && !lAvecBlocFixeFin)
        ) {
          _addZone({
            indiceColonneDebut: 0,
            indiceColonneFin: this.ListeTailles.length - 1,
          });
          return;
        }
        if (lDerniereColonneFixe >= 0) {
          _addZone({
            estBlocFixe: true,
            indiceColonneDebut: 0,
            indiceColonneFin: lDerniereColonneFixe,
            idScrollTri: EGenreZoneScroll.triFixe,
            idScrollTitre: EGenreZoneScroll.titreFixe,
            idScrollContenu: EGenreZoneScroll.contenuFixe,
            idScrollTotal: EGenreZoneScroll.totalFixe,
          });
        }
        _addZone({
          indiceColonneDebut: lDerniereColonneFixe + 1,
          indiceColonneFin: lColonneDebutFixeFin,
        });
        if (lAvecBlocFixeFin) {
          _addZone({
            estBlocFixe: true,
            estBlocFixeDroite: true,
            indiceColonneDebut: lColonneDebutFixeFin + 1,
            indiceColonneFin: this.ListeTailles.length - 1,
            idScrollTri: EGenreZoneScroll.triFixeFin,
            idScrollTitre: EGenreZoneScroll.titreFixeFin,
            idScrollContenu: EGenreZoneScroll.contenuFixeFin,
            idScrollTotal: EGenreZoneScroll.totalFixeFin,
          });
        }
      }
      _construireAffichage() {
        let lLargeurTable;
        if (!this._cache.largeurTotalCalcule) {
          lLargeurTable = '100%';
        } else {
          lLargeurTable = this._getLargeurConteneur() + 'px';
        }
        const lEstTreeGrid = this._estRoleTreeGrid();
        return IE.jsx.str(
          'div',
          {
            'ie-node': 'liste.getNodeListe',
            'ie-nodeafter': 'liste.getNodeAfterListe',
            class: 'ObjetListe',
            role: 'group',
            'ie-class': 'liste.getClassListe',
            'ie-attr': 'liste.getAttrListe',
            style: this._cache.listeNonInitialisee
              ? ' visibility:hidden'
              : false,
          },
          (T) => {
            const lHtmlEntete = this._construireBoutonsEntete(lLargeurTable);
            if (lHtmlEntete) {
              T.push(IE.jsx.str('div', { role: 'presentation' }, lHtmlEntete));
            }
            if (lEstTreeGrid) {
              T.push(
                IE.jsx.str(
                  'span',
                  { class: 'sr-only' },
                  'Démarrer la navigation dans la liste avec la touche Tabulation',
                ),
              );
            }
            this._cache.ombreTopForce =
              this._options.skin === _ObjetListe_1.ObjetListe.skin.flatDesign &&
              !!(lHtmlEntete || this._options.forcerOmbreScrollTop);
            const lHtmlPiedDeListe = this._options.piedDeListe
              ? IE.jsx.str('div', {
                  id: this.idPiedDeListe,
                  class: 'liste-pied',
                })
              : '';
            T.push(
              IE.jsx.str(
                'div',
                {
                  id: this.idZone,
                  class: [
                    'liste_zone conteneur-ombre-zone ',
                    this._cache.ombreTopForce ? ' ombre-top' : '',
                    this._options.forcerOmbreScrollBottom
                      ? ' ombre-bottom'
                      : '',
                  ],
                  style: `width:${lLargeurTable}`,
                },
                () => {
                  let lResultZone = IE.jsx.str(
                    'div',
                    {
                      id: this.ids.zoneFils,
                      class: 'liste_zoneFils NoWrap',
                      role: lEstTreeGrid ? 'presentation' : 'tree',
                    },
                    (aTabGrid) => {
                      const lAvecTri = this.avecTriColonne();
                      const lAvecGridTotal = this._avecLigneTotal();
                      if (lEstTreeGrid) {
                        aTabGrid.push(
                          IE.jsx.str(
                            'div',
                            {
                              class: 'sr-only',
                              role: lEstTreeGrid ? 'treegrid' : 'tree',
                              'aria-rowcount': lEstTreeGrid
                                ? this._cache.lignesVisibles.length
                                : false,
                              'aria-describedby': this.ids.WAIDescribeTreeGrid,
                            },
                            this.ListeTitres
                              ? IE.jsx.str('div', {
                                  role: 'rowgroup',
                                  id: this.ids.WAIGrid + '_rowtitre',
                                })
                              : '',
                            lAvecTri
                              ? IE.jsx.str('div', {
                                  role: 'rowgroup',
                                  id: this.ids.WAIGrid + '_rowtri',
                                  'aria-describedby': this.ids.WAIDescribeTri,
                                })
                              : '',
                            IE.jsx.str('div', {
                              role: lEstTreeGrid ? 'rowgroup' : 'presentation',
                              id: this.ids.WAIGrid + '_rowcell',
                            }),
                          ),
                        );
                      }
                      const lTabTitre = [];
                      this._cache.infosZonesColonnes.forEach(
                        (aInfosZoneColonnes) => {
                          const lConstructionTitre = this._construireTitre(
                            aInfosZoneColonnes,
                            lAvecTri,
                          );
                          if (lConstructionTitre.html) {
                            lTabTitre.push(lConstructionTitre.html);
                          }
                        },
                      );
                      if (lTabTitre.length > 0) {
                        aTabGrid.push(
                          IE.jsx.str(
                            'div',
                            {
                              class: 'liste-heriar',
                              role: 'treegrid',
                              'aria-rowcount': '1',
                            },
                            lTabTitre.join(''),
                          ),
                        );
                      }
                      aTabGrid.push(
                        IE.jsx.str(
                          'div',
                          { class: 'liste-heriar', role: 'presentation' },
                          (aTab) => {
                            this._cache.infosZonesColonnes.forEach(
                              (aInfosZoneColonnes) => {
                                aTab.push(
                                  this._construireContenuListe(
                                    aInfosZoneColonnes,
                                  ),
                                );
                              },
                            );
                          },
                        ),
                      );
                      if (lAvecGridTotal) {
                        aTabGrid.push(
                          IE.jsx.str(
                            'div',
                            {
                              id: this.ids.WAIGrid + '_gridTotal',
                              class: 'sr-only',
                              role: 'treegrid',
                              'aria-rowcount':
                                this._getListeLignesTotal().count() +
                                (this.ListeTitres ? 1 : 0),
                              tabindex: '0',
                              'ie-node': 'liste.getNodeGridTotal',
                              'aria-describedby':
                                this.ids.WAIDescribeTreeGridTotal,
                            },
                            this.ListeTitres
                              ? IE.jsx.str('div', {
                                  role: 'rowgroup',
                                  id: this.ids.WAIGrid + 'total_rowtitre',
                                })
                              : '',
                            IE.jsx.str('div', {
                              role: 'rowgroup',
                              id: this.ids.WAIGrid + 'total_rowcell',
                            }),
                          ),
                        );
                        aTabGrid.push(
                          IE.jsx.str(
                            'div',
                            { class: 'liste-heriar', role: 'presentation' },
                            (aTab) => {
                              this._cache.infosZonesColonnes.forEach(
                                (aInfosZoneColonnes) => {
                                  aTab.push(
                                    this._construireLigneTotal(
                                      aInfosZoneColonnes,
                                    ),
                                  );
                                },
                              );
                            },
                          ),
                        );
                      }
                      let lAvecScrollH = false;
                      this._cache.infosZonesColonnes.forEach(
                        (aInfosZoneColonnes) => {
                          if (
                            !aInfosZoneColonnes.estBlocFixe &&
                            this._cache.avecScrollHorizontal &&
                            this._cache.reserverPlaceScrollHorizontal
                          ) {
                            lAvecScrollH = true;
                          }
                        },
                      );
                      if (lAvecScrollH) {
                        aTabGrid.push(
                          IE.jsx.str(
                            'div',
                            { class: 'liste-heriar', role: 'presentation' },
                            (aTab) => {
                              this._cache.infosZonesColonnes.forEach(
                                (aInfosZoneColonnes) => {
                                  if (aInfosZoneColonnes.estBlocFixe) {
                                    aTab.push(
                                      IE.jsx.str('div', {
                                        style: {
                                          width: aInfosZoneColonnes.largeurBloc,
                                        },
                                      }),
                                    );
                                  } else {
                                    aTab.push(
                                      IE.jsx.str('div', {
                                        id: this.ScrollH.getIdScroll(),
                                        role: 'presentation',
                                        style:
                                          ObjetStyle_1.GStyle.composeHeight(
                                            this.ScrollH.Largeur,
                                          ) +
                                          (this._options.borduresContenu_left >
                                            0 &&
                                          aInfosZoneColonnes.indiceBloc === 0
                                            ? 'padding-left:' +
                                              this._options
                                                .borduresContenu_left +
                                              'px;'
                                            : ''),
                                      }),
                                    );
                                  }
                                },
                              );
                            },
                          ),
                        );
                      }
                      if (
                        this._options.skin !==
                          _ObjetListe_1.ObjetListe.skin.flatDesign &&
                        lHtmlPiedDeListe
                      ) {
                        aTabGrid.push(lHtmlPiedDeListe);
                      }
                    },
                  );
                  lResultZone += IE.jsx.str(
                    'div',
                    {
                      class:
                        'liste_cont_btnscroll AlignementGauche InlineBlock AlignementHaut',
                    },
                    () => {
                      let lResult = '';
                      const lAvecBoutons = this._avecBoutonsListeHautScroll();
                      if (lAvecBoutons) {
                        lResult += IE.jsx.str(
                          'div',
                          { class: 'liste_btnsDroite' },
                          (aTab) => {
                            this._cache.boutons.forEach((aBouton, aIndex) => {
                              aTab.push(
                                IE.jsx.str(
                                  'div',
                                  {
                                    style:
                                      ObjetStyle_1.GStyle.composeWidth(
                                        this._options.tailleBoutons + 1,
                                      ) +
                                      ObjetStyle_1.GStyle.composeHeight(
                                        this._options.tailleBoutons + 1,
                                      ),
                                  },
                                  IE.jsx.str('ie-btnimage', {
                                    'ie-model': (0, jsx_1.jsxFuncAttr)(
                                      'liste.boutonListe',
                                      aIndex,
                                    ),
                                    title: aBouton.title || false,
                                    id: aBouton.id,
                                    class: ['btnImageIcon', aBouton.class],
                                  }),
                                ),
                              );
                            });
                          },
                        );
                      }
                      lResult += IE.jsx.str(
                        'div',
                        {
                          id: this.ScrollV.getIdScroll(),
                          class: 'AlignementBas',
                          style:
                            ObjetStyle_1.GStyle.composeWidth(
                              this.ScrollV.Largeur,
                            ) +
                            'min-height:' +
                            this.ScrollV.tailleMin +
                            'px;',
                        },
                        '\u00A0',
                      );
                      return lResult;
                    },
                  );
                  return lResultZone;
                },
              ),
            );
            T.push(this._construireTotalFD(false));
            if (
              this._options.skin === _ObjetListe_1.ObjetListe.skin.flatDesign &&
              lHtmlPiedDeListe
            ) {
              T.push(lHtmlPiedDeListe);
            }
            T.push(this.composeWAICommun());
          },
        );
      }
      avecTriColonne() {
        return this.Donnees && this.ListeTitres && !!this._cache.colonnesTri;
      }
      _getDessinCurseurTri(aParams) {
        const lParams = Object.assign(
          {
            triCroissant: true,
            tri: _ObjetListe_1.NSListe.FlecheTri.principal,
            width: this._options.widthTri,
            height: this._options.heightTri,
            top: 0,
            left: 0,
          },
          aParams,
        );
        if (lParams.tri === _ObjetListe_1.NSListe.FlecheTri.secondaire) {
          lParams.width += -2;
          lParams.height += -1;
        }
        const lWidth = lParams.width + lParams.left;
        const lHeight = lParams.height + lParams.top;
        return IE.jsx.str(
          'svg',
          {
            class: ['svg-tri', lParams.tri],
            width: lWidth + 'px',
            height: lHeight + 'px',
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'presentation',
          },
          IE.jsx.str('polygon', {
            points: ObjetChaine_1.GChaine.format(
              !lParams.triCroissant
                ? '%4:s,%3:s %1:s,%3:s %2:s,%0:s'
                : '%4:s,%0:s %1:s,%0:s %2:s,%3:s',
              [
                lParams.height - 2 + lParams.top + 1 + 0.5,
                lParams.width - 2 + lParams.left + 1 + 0.5,
                (lParams.width - 2) / 2 + lParams.left + 1 + 0.5,
                lParams.top + 1 + 0.5,
                lParams.left + 1 + 0.5,
              ],
            ),
          }),
        );
      }
      _setStyleCellule(aId, aColonne, aLigne, aSelectionne, aCreation) {
        if (!aId) {
          return;
        }
        super._setStyleCellule(aId, aColonne, aLigne, aSelectionne, aCreation);
        if (
          this._options.avecCadreSelection ||
          this._options.ignorerCouleurInlineCellule
        ) {
          return;
        }
        let lJeuxCouleurs;
        if (aCreation && !aSelectionne) {
          lJeuxCouleurs = this._options.couleursListe.editable;
        } else {
          lJeuxCouleurs = this._getJeuxCouleur(
            this._getParamsCellule(aColonne, aLigne),
            aSelectionne,
          );
        }
        ObjetStyle_1.GStyle.setCouleur(
          aId,
          lJeuxCouleurs.getFond(false),
          lJeuxCouleurs.getTexte(false),
        );
      }
      _actualiserZones(aZonesActualisation, aParamsActualiser) {
        if (aZonesActualisation.contenu) {
          this._initCacheLignes(aParamsActualiser);
        }
        const lFunc = (aCallbackContenu, aCallbackTotal) => {
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            if (aZonesActualisation.contenu) {
              $(
                ObjetHtml_1.GHtml.getElement(
                  this.getIdGridFocus(aInfosZoneColonnes.indiceBloc),
                ),
              ).remove();
              IEHtml_1.default.injectHTMLParams({
                element: ObjetHtml_1.GHtml.getElement(
                  this.ScrollV.getIdContenu(aInfosZoneColonnes.idScrollContenu),
                ),
                html: aCallbackContenu
                  ? aCallbackContenu(aInfosZoneColonnes)
                  : '',
                controleur: this.controleur,
                ignorerScroll: true,
              });
            }
            if (aZonesActualisation.total && this._avecLigneTotal()) {
              ObjetHtml_1.GHtml.setHtml(
                this.ScrollH.getIdZone(aInfosZoneColonnes.idScrollTotal),
                aCallbackTotal ? aCallbackTotal(aInfosZoneColonnes) : '',
                { controleur: this.controleur, ignorerScroll: true },
              );
            }
          });
        };
        lFunc();
        lFunc(
          (aInfosZoneColonnes) => {
            $(
              `#${this.ids.cadreSelection.escapeJQ() + aInfosZoneColonnes.indiceBloc}`,
            ).empty();
            return this.construireContenuListeInterne(aInfosZoneColonnes);
          },
          (aInfosZoneColonnes) =>
            this._construireContenuTotal(aInfosZoneColonnes).html,
        );
        this._controleHeightLigne();
      }
      _controleHeightLigne() {
        if (this._cache.infosZonesColonnes.length < 2) {
          return;
        }
        if (!this.Donnees || !this.ListeTailles) {
          return;
        }
        const lTabModif = [];
        const lRangeLignes = {
          debut: 0,
          fin: this._cache.lignesVisibles.length,
        };
        if (this._cache.refresh.avecConstructionDynamiqueContenu) {
          const lCacheRef = this._cache.refresh;
          lRangeLignes.debut =
            lCacheRef.structure[lCacheRef.mapRangesExist.min].deb;
          lRangeLignes.fin =
            lCacheRef.structure[lCacheRef.mapRangesExist.max].fin + 1;
        }
        let iIndice,
          lNumeroLigne,
          lHeightMinLigne,
          lHeightMaxLigne,
          lHeightIds,
          lId;
        for (
          iIndice = lRangeLignes.debut;
          iIndice < lRangeLignes.fin;
          iIndice++
        ) {
          lNumeroLigne = this._cache.lignesVisibles[iIndice];
          lHeightMinLigne = Number.MAX_VALUE;
          lHeightMaxLigne = -1;
          lHeightIds = {};
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            lId = this.getIdCellule(
              aInfosZoneColonnes.colonnesVisibles[0],
              lNumeroLigne,
            );
            lHeightIds[lId] = $(
              ObjetHtml_1.GHtml.getElement(
                this.getIdCellule(
                  aInfosZoneColonnes.colonnesVisibles[0],
                  lNumeroLigne,
                ),
              ),
            ).height();
            lHeightMinLigne = Math.min(lHeightIds[lId], lHeightMinLigne);
            lHeightMaxLigne = Math.max(lHeightIds[lId], lHeightMaxLigne);
          });
          if (lHeightMinLigne < lHeightMaxLigne) {
            for (lId in lHeightIds) {
              if (lHeightIds[lId] < lHeightMaxLigne) {
                lTabModif.push({ id: lId + '_div', height: lHeightMaxLigne });
              }
            }
          }
          lHeightIds = null;
        }
        lTabModif.forEach((aElement) => {
          ObjetPosition_1.GPosition.setHeight(aElement.id, aElement.height);
        });
      }
      _entrerDateCalendrier(aParams) {
        this.fenetreDate = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_Date_1.ObjetFenetre_Date,
          {
            pere: this,
            evenement: this._evenementFenetreDate.bind(this, aParams),
          },
        );
        this.fenetreDate.setOptionsFenetre({
          callbackApresFermer: () => {
            delete this.fenetreDate;
          },
        });
        this.Donnees._initialiserObjetGraphique(aParams, this.fenetreDate);
        this.Donnees._setDonneesObjetGraphique(aParams, this.fenetreDate);
        this.fenetreDate.positionnerSousId(this.IdCellule);
      }
      _initStructureDynamique() {
        const lCacheRef = this._cache.refresh;
        if (!lCacheRef.avecConstructionDynamiqueContenu) {
          return;
        }
        let lNbLignesRestantes = this._cache.lignesVisibles.length;
        const lRangeLignes = {
          debut: 0,
          fin: this._cache.lignesVisibles.length,
        };
        let lLigneDebut = 0;
        while (lNbLignesRestantes > 0) {
          let lNbLignes =
            lNbLignesRestantes < lCacheRef.nbLignes
              ? lNbLignesRestantes
              : lCacheRef.nbLignes;
          let iIndiceLigne = lLigneDebut;
          while (
            iIndiceLigne <= lLigneDebut + lNbLignes - 1 &&
            iIndiceLigne < this._cache.lignesVisibles.length
          ) {
            const lNumeroLigne = this._cache.lignesVisibles[iIndiceLigne];
            this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
              const lFusions = this._getFusionColonnesCelluleDeZone(
                lNumeroLigne,
                aInfosZoneColonnes,
              );
              aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
                const lParamsCellule = this._getParamsCellule(
                  aNumeroColonne,
                  lNumeroLigne,
                  {
                    celluleLignePrecedente:
                      lNumeroLigne > 0
                        ? this._getParamsCellule(
                            aNumeroColonne,
                            this._cache.lignesVisibles[iIndiceLigne - 1],
                          )
                        : null,
                    celluleLigneSuivante:
                      iIndiceLigne + 1 < lRangeLignes.fin
                        ? this._getParamsCellule(
                            aNumeroColonne,
                            this._cache.lignesVisibles[iIndiceLigne + 1],
                          )
                        : null,
                  },
                );
                const lNombreLignesEnFusion =
                  this._chercherLignesFusionVertical(
                    lParamsCellule,
                    iIndiceLigne,
                    lRangeLignes,
                    lFusions,
                    aInfosZoneColonnes,
                  );
                if (lNombreLignesEnFusion > 1) {
                  lNbLignes = Math.min(
                    Math.max(
                      lNbLignes,
                      iIndiceLigne + lNombreLignesEnFusion - lLigneDebut,
                    ),
                    lNbLignesRestantes,
                  );
                }
              });
            });
            iIndiceLigne += 1;
          }
          lCacheRef.structure.push({
            deb: lLigneDebut,
            fin: lLigneDebut + lNbLignes - 1,
            nbLignes: lNbLignes,
            height: -1,
          });
          lLigneDebut += lNbLignes;
          lNbLignesRestantes = Math.max(0, lNbLignesRestantes - lNbLignes);
        }
      }
      _getLibelleDraggable(aParamsCellule) {
        let lLibelle = this.Donnees.getLibelleDraggable(aParamsCellule);
        if (!lLibelle) {
          const lEstColonneAutorisee = (aParams) => {
            const lType = this.Donnees.getTypeValeur(aParams);
            return (
              [
                ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche,
                ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
                  .CocheDeploiement,
              ].indexOf(lType) < 0
            );
          };
          let lColonne = 0;
          if (
            this.Donnees.selectionParCellule(
              aParamsCellule.colonne,
              aParamsCellule.article,
            )
          ) {
            lColonne = aParamsCellule.colonne;
          } else if (this.ListeCreations && this.ListeCreations.length > 0) {
            lColonne = this.ListeCreations[0];
          }
          const lParams = this._getParamsCellule(
            lColonne,
            aParamsCellule.ligne,
            { surSuppression: true },
          );
          if (lEstColonneAutorisee(lParams)) {
            lLibelle = this.Donnees._getValeur(lParams);
          }
          if (!lLibelle) {
            this._cache.infosZonesColonnes.every((aInfosZoneColonnes) => {
              return aInfosZoneColonnes.colonnesVisibles.every(
                (aNumeroColonne) => {
                  const lParams = this._getParamsCellule(
                    aNumeroColonne,
                    aParamsCellule.ligne,
                    { surSuppression: true },
                  );
                  if (lEstColonneAutorisee(lParams)) {
                    lLibelle = this.Donnees._getValeur(lParams);
                  }
                  return !lLibelle;
                },
              );
            });
          }
        }
        if (!lLibelle) {
          lLibelle = '&nbsp;';
        }
        return lLibelle;
      }
      _eventKeyDownApplication(aEvent) {
        if (this._cache.rolloverVisible && !aEvent.ctrlKey) {
          this._gererRollover(false);
        } else if (
          !this._cache.rolloverVisible &&
          aEvent.ctrlKey &&
          !this._cache.mouseOUTListe &&
          this._avecRollover() &&
          MethodesObjet_1.MethodesObjet.isNumber(GNavigateur.pointerX) &&
          MethodesObjet_1.MethodesObjet.isNumber(GNavigateur.pointerY)
        ) {
          let lElement = document.elementFromPoint(
            GNavigateur.pointerX,
            GNavigateur.pointerY,
          );
          if (!lElement) {
            return;
          }
          let lJElement = $(lElement);
          let lInfos = null;
          while (
            lJElement &&
            lJElement.length > 0 &&
            lJElement.parents(
              '#' +
                this.ScrollV.getIdContenu(EGenreZoneScroll.contenu).escapeJQ(),
            ).length > 0
          ) {
            lElement = lJElement.get(0);
            if (
              lElement &&
              lElement.nodeName &&
              lElement.nodeName.toLowerCase() === 'td'
            ) {
              lInfos = this._extraireInfosId(lElement.id);
              if (lInfos) {
                break;
              }
            }
            lJElement = lJElement.parent();
          }
          if (lInfos) {
            this._gererRollover(true, lElement, lInfos);
          }
        }
      }
      _getColonneDePositionEvent(aEvent, aNode, aInfosZonesColonnes) {
        return this._getColonneDePositionLeft(
          ObjetPosition_1.GPosition.getPositionEventJQuery(aEvent).x,
          aNode,
          aInfosZonesColonnes,
        );
      }
      _getColonneDePositionLeft(aPosleft, aNode, aInfosZonesColonnes) {
        if (!MethodesObjet_1.MethodesObjet.isNumber(aPosleft)) {
          return -1;
        }
        let lNumeroColonne = -1;
        const lLeftBorne = Math.max(0, aPosleft - $(aNode).offset().left);
        aInfosZonesColonnes.gabaritColonnesTitre.every((aPos, aIndex) => {
          if (aPos && aPos.left >= 0) {
            if (aPos.left <= lLeftBorne) {
              lNumeroColonne = aIndex;
              return aPos.left + aPos.width <= lLeftBorne;
            }
          }
        });
        return lNumeroColonne;
      }
      _nodeTableTitrePourTri(aNode, aInfosZonesColonnes) {
        this._cache.survoleTitreTriVisible = false;
        const lHeightNode = ObjetPosition_1.GPosition.getHeight(aNode);
        $(
          '#' +
            (
              this.ScrollH.getIdZone(aInfosZonesColonnes.idScrollTri) +
              '_conteneur'
            ).escapeJQ(),
        ).css(
          'top',
          lHeightNode - Math.round(this._options.heightTri) + 1 + 'px',
        );
        const lIdSurvol =
            this.ids.survolTitre.escapeJQ() + aInfosZonesColonnes.indiceBloc,
          lIdCurseurTriSurvol =
            this.ids.curseurTriSurvol.escapeJQ() +
            aInfosZonesColonnes.indiceBloc;
        $('#' + lIdSurvol).height(lHeightNode);
        $(aNode).on(
          {
            'click contextmenu': function (aEvent) {
              aEvent.stopPropagation();
            },
            mousemove: function (aEvent) {
              if (lThis._cache.survoleTitreTriVisible) {
                $('#' + lIdSurvol).hide();
                $('#' + lIdCurseurTriSurvol).hide();
              }
              aEvent.stopPropagation();
            },
          },
          '.TitreListeSansTri',
        );
        const lThis = this;
        $(aNode).on({
          click: function (aEvent) {
            const lNumeroColonne = lThis._getColonneDePositionEvent(
              aEvent,
              this,
              aInfosZonesColonnes,
            );
            if (
              lNumeroColonne < 0 ||
              !lThis._cache.colonnesTri[lNumeroColonne]
            ) {
              if (lNumeroColonne < 0) {
                IE.log.addLog('_nodeTableTitrePourTri => colonne non trouvée');
              }
              return;
            }
            let lGenreTri = Enumere_TriElement_1.EGenreTriElement.Croissant;
            let lNumeroTri = lThis._triCourant.colonne.indexOf(lNumeroColonne);
            if (lNumeroTri === -1) {
              lNumeroTri = 0;
            }
            if (lThis._triCourant.colonne[lNumeroTri] === lNumeroColonne) {
              lGenreTri =
                lThis._triCourant.genre[lNumeroTri] ===
                Enumere_TriElement_1.EGenreTriElement.Croissant
                  ? Enumere_TriElement_1.EGenreTriElement.Decroissant
                  : Enumere_TriElement_1.EGenreTriElement.Croissant;
            }
            lThis.setColonneTri(lNumeroColonne, lGenreTri, lNumeroTri);
          },
          contextmenu: function (aEvent) {
            const lNumeroColonne = lThis._getColonneDePositionEvent(
              aEvent,
              this,
              aInfosZonesColonnes,
            );
            if (lNumeroColonne < 0) {
              IE.log.addLog('_nodeTableTitrePourTri => colonne non trouvée');
              return;
            }
            if (lThis._cache.colonnesTri[lNumeroColonne]) {
              lThis.afficherMenuContextuelTri(lNumeroColonne);
            }
          },
          mouseleave: function () {
            if (lThis._cache.survoleTitreTriVisible) {
              $('#' + lIdSurvol).hide();
              $('#' + lIdCurseurTriSurvol).hide();
            }
            lThis._cache.survoleTitreTriVisible = false;
          },
          mousemove: function (aEvent) {
            const lNumeroColonne = lThis._getColonneDePositionEvent(
              aEvent,
              this,
              aInfosZonesColonnes,
            );
            if (
              lNumeroColonne < 0 ||
              !lThis._cache.colonnesTri[lNumeroColonne]
            ) {
              if (lThis._cache.survoleTitreTriVisible) {
                $('#' + lIdSurvol).hide();
                $('#' + lIdCurseurTriSurvol).hide();
              }
              return;
            }
            const lPosition =
              aInfosZonesColonnes.gabaritColonnesTitre[lNumeroColonne];
            if (lPosition) {
              lThis._cache.survoleTitreTriVisible = true;
              $('#' + lIdSurvol)
                .show()
                .css({
                  left: lPosition.left + 'px',
                  width: lPosition.width + 'px',
                });
              let lSurColonneAvecTri = false;
              if (lThis._triCourant.colonne) {
                lThis._triCourant.colonne.forEach((aNumeroColonne) => {
                  if (aNumeroColonne === lNumeroColonne) {
                    lSurColonneAvecTri = true;
                  }
                });
              }
              if (
                lSurColonneAvecTri ||
                $('#' + lIdCurseurTriSurvol).data('dragEnCours')
              ) {
                $('#' + lIdCurseurTriSurvol).hide();
              } else {
                $('#' + lIdCurseurTriSurvol)
                  .show()
                  .css(
                    'left',
                    lThis._getLeftCurseurTri(
                      lPosition,
                      lNumeroColonne ===
                        aInfosZonesColonnes.colonnesVisibles[
                          aInfosZonesColonnes.colonnesVisibles.length - 1
                        ],
                    ) + 'px',
                  );
              }
            }
          },
        });
      }
      _getLigneElementParParseur(aParseur, aColonne) {
        let lLigne = -1;
        let lValeur;
        this._cache.lignesVisibles.every((aLigne) => {
          const lParams = this._getParamsCellule(aColonne, aLigne);
          lValeur = this.Donnees.getValeurPourParsing(lParams);
          if (lValeur && lValeur.toString) {
            lValeur = lValeur.toString();
          }
          lLigne = aLigne;
          if (
            lValeur &&
            ComparateurChaines_1.ComparateurChaines.compare(
              lValeur,
              aParseur,
            ) >= 0
          ) {
            return false;
          }
          return true;
        });
        return lLigne;
      }
      gererParsingSurEventKey(event) {
        let lColonne = this._options.parsingSurColonne;
        if (lColonne === ObjetListeEspace.parsingSurColonneTri) {
          if (this._triCourant.nombreTri > 0) {
            lColonne = this._triCourant.colonne[0];
          } else {
            return;
          }
        } else if (MethodesObjet_1.MethodesObjet.isString(lColonne)) {
          lColonne = this.getNumeroColonneDIdColonne(lColonne);
        }
        if (lColonne === -1) {
          return;
        }
        if (!this.Donnees) {
          return;
        }
        const lCar = ComparateurChaines_1.ComparateurChaines.normalize(
          String.fromCharCode(event.which),
        );
        if (
          !event.altKey &&
          !event.ctrlKey &&
          event.which !== 0 &&
          lCar.search(/[a-z0-9 ]/gi) >= 0
        ) {
          uParseur += lCar;
          clearTimeout(uTimerParseur);
          uTimerParseur = setTimeout(this._initParseur, 500);
          if (!this._estColonneVisible(lColonne)) {
            return;
          }
          const lLigne = this._getLigneElementParParseur(uParseur, lColonne);
          if (lLigne < 0) {
            this._initParseur();
            return;
          }
          if (this.Donnees.avecMultiSelection()) {
            for (
              let iLigne = 0;
              iLigne < this._cache.lignesSelectionnees.length;
              iLigne++
            ) {
              if (this._etatSelectionCellule({ ligne: iLigne })) {
                this.selectionnerLigne({ ligne: iLigne, selectionner: false });
              }
            }
          }
          this._surSelection(lColonne, lLigne, {
            forcerMonoSelection: true,
            surInteractionUtilisateur: true,
          });
          this.surSelectionEvenement(lColonne, lLigne, false);
        } else {
          this._initParseur();
        }
      }
      _construireCopieCSV() {
        let i,
          lNumeroLigne,
          lNumeroColonne,
          lType,
          lContenuLigne,
          lTitresLigne,
          lLibelle,
          lContenuValeurs,
          lValeur;
        const lResult = [];
        let lParamsCellule;
        const lEstColonneExportee = (aNumeroColonne) => {
          return (
            this._estColonneVisible(aNumeroColonne) &&
            (!this._cache.declarationsColonnes[aNumeroColonne] ||
              !this._cache.declarationsColonnes[aNumeroColonne]
                .ignorerExportCSV)
          );
        };
        const lGetValCSV = function (aValue) {
          if (typeof aValue === 'number') {
            return aValue;
          }
          return '"' + aValue + '"';
        };
        if (this.ListeTitres) {
          for (
            lNumeroLigne = 0;
            lNumeroLigne < this.ListeTitres.length;
            lNumeroLigne++
          ) {
            lContenuLigne = [];
            lTitresLigne = this.ListeTitres[lNumeroLigne];
            for (
              lNumeroColonne = 0;
              lNumeroColonne < this.ListeTailles.length;
              lNumeroColonne++
            ) {
              if (lEstColonneExportee(lNumeroColonne)) {
                lLibelle = '';
                if (lTitresLigne && lTitresLigne[lNumeroColonne]) {
                  lLibelle =
                    lTitresLigne[lNumeroColonne].libelleCSV ||
                    lTitresLigne[lNumeroColonne].libelle ||
                    '';
                }
                lContenuLigne.push(lLibelle);
              }
            }
            lResult.push(lContenuLigne.join(';'));
          }
        }
        if (this.Donnees) {
          for (i = 0; i < this._cache.lignesVisibles.length; i++) {
            lNumeroLigne = this._cache.lignesVisibles[i];
            lContenuLigne = [];
            for (
              lNumeroColonne = 0;
              lNumeroColonne < this.ListeTailles.length;
              lNumeroColonne++
            ) {
              if (lEstColonneExportee(lNumeroColonne)) {
                lParamsCellule = this._getParamsCellule(
                  lNumeroColonne,
                  lNumeroLigne,
                  {
                    surEdition: false,
                    surProportion: false,
                    surExportCSV: true,
                  },
                );
                lType = this.Donnees.getTypeValeur(lParamsCellule);
                lContenuValeurs = [];
                switch (lType) {
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
                    .CocheDeploiement:
                    break;
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche:
                    lValeur = this.Donnees._getValeur(lParamsCellule);
                    if (
                      lValeur === true ||
                      lValeur ===
                        ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte
                    ) {
                      lContenuValeurs.push('X');
                    } else if (
                      lValeur ===
                      ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
                    ) {
                      lContenuValeurs.push('P');
                    } else {
                      lContenuValeurs.push('');
                    }
                    break;
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Note:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
                    .ZoneTexte:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Image:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon:
                  case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Html:
                    lValeur =
                      this.Donnees.getValeurPourAffichage(lParamsCellule);
                    lContenuValeurs.push(lGetValCSV(lValeur));
                    break;
                  default:
                    lContenuValeurs.push(
                      this.Donnees._getValeur(lParamsCellule),
                    );
                    break;
                }
                lContenuLigne.push(lContenuValeurs.join(' - '));
              }
            }
            lResult.push(lContenuLigne.join(';'));
          }
        }
        if (this.Donnees && this._avecLigneTotal()) {
          this._getListeLignesTotal().parcourir((aArticle, aIndexLigne) => {
            lContenuLigne = [];
            for (
              lNumeroColonne = 0;
              lNumeroColonne < this.ListeTailles.length;
              lNumeroColonne++
            ) {
              if (lEstColonneExportee(lNumeroColonne)) {
                const lParams = this._getParamsCellule(lNumeroColonne, -1, {
                  surTotal: true,
                  surExportCSV: true,
                });
                if (aArticle) {
                  lParams.ligne = aIndexLigne;
                  lParams.article = aArticle;
                }
                const lContenuTotal = this.Donnees.getContenuTotal(lParams);
                lContenuLigne.push(lGetValCSV(lContenuTotal));
              }
            }
            lResult.push(lContenuLigne.join(';'));
          });
        }
        return ObjetChaine_1.GChaine.enleverEntites(
          lResult.join('\r\n').replace(/&nbsp;/gi, ''),
        );
      }
      _colonneEnFusionAvecColonnePrecedente(aTitresLigne, aNumeroColonne) {
        let lNumeroColVisiblePrec = aNumeroColonne - 1;
        while (
          lNumeroColVisiblePrec > 0 &&
          !this._estColonneVisible(lNumeroColVisiblePrec)
        ) {
          lNumeroColVisiblePrec += -1;
        }
        if (
          !aTitresLigne ||
          !aTitresLigne[aNumeroColonne] ||
          !aTitresLigne[lNumeroColVisiblePrec]
        ) {
          return false;
        }
        if (
          aTitresLigne[aNumeroColonne].fusion ===
          TypeFusionTitreListe_1.TypeFusionTitreListe.FusionGauche
        ) {
          return true;
        }
        if (
          aTitresLigne[aNumeroColonne].avecFusionColonne &&
          (((aTitresLigne[aNumeroColonne].libelle ||
            aTitresLigne[aNumeroColonne].libelle === '') &&
            aTitresLigne[aNumeroColonne].libelle ===
              aTitresLigne[lNumeroColVisiblePrec].libelle) ||
            (aTitresLigne[aNumeroColonne].libelleHtml &&
              aTitresLigne[aNumeroColonne].libelleHtml ===
                aTitresLigne[lNumeroColVisiblePrec].libelleHtml) ||
            (aTitresLigne[aNumeroColonne].classeCssImage &&
              aTitresLigne[aNumeroColonne].classeCssImage ===
                aTitresLigne[lNumeroColVisiblePrec].classeCssImage))
        ) {
          return true;
        }
        return false;
      }
      _construireTaillesGrid(aInfosZoneColonnes) {
        const lDecalageBordureHDuContenu =
          this._options.borduresCellule_horizontal - 1;
        const lResult = {
          width: 0,
          tabWidth: [],
          styleGrid: '',
          gabaritColonne: [],
        };
        const lTabStyleTemplate = [];
        aInfosZoneColonnes.colonnesVisibles.forEach(
          (aNumeroColonne, aIndex) => {
            let lWidthCol =
              this._cache.taillesColonne[aNumeroColonne].px +
              lDecalageBordureHDuContenu +
              2 * this._options.paddingCelluleLR;
            if (
              aIndex < aInfosZoneColonnes.colonnesVisibles.length - 1 ||
              (aInfosZoneColonnes.estBlocFixe &&
                !aInfosZoneColonnes.dernierBloc)
            ) {
              lWidthCol += 1;
            }
            if (
              aInfosZoneColonnes.estBlocFixeDroite &&
              aNumeroColonne === aInfosZoneColonnes.indiceColonneDebut
            ) {
              lWidthCol += 1;
            }
            lResult.gabaritColonne[aNumeroColonne] = {
              width: lWidthCol,
              left:
                lResult.width + (aInfosZoneColonnes.estBlocFixeDroite ? 1 : 0),
            };
            lResult.tabWidth.push({
              width: lWidthCol,
              colonne: aNumeroColonne,
            });
            lTabStyleTemplate.push(lWidthCol + 'px');
            lResult.width += lWidthCol;
          },
        );
        lResult.styleGrid =
          lTabStyleTemplate.length > 0
            ? 'grid-template-columns:' + lTabStyleTemplate.join(' ') + ';'
            : '';
        return lResult;
      }
      _construireTriActif(aInfosZoneColonnes, aIndiceTri) {
        const lNumeroCol = this._triCourant.colonne[aIndiceTri];
        const lTriCroissant =
          this._triCourant.genre[aIndiceTri] ===
          Enumere_TriElement_1.EGenreTriElement.Croissant;
        const lAvecDragTri = this._cache.infosZonesColonnes.length < 2;
        return IE.jsx.str(
          'div',
          {
            id:
              this.ids.curseurTri +
              aInfosZoneColonnes.indiceBloc +
              '_' +
              aIndiceTri,
            tabindex: '-1',
            'ie-nodeafter': (0, jsx_1.jsxFuncAttr)(
              'liste.getNodeAfterCurseurTri',
              [aIndiceTri, aInfosZoneColonnes.indiceBloc],
            ),
            'ie-draggable': lAvecDragTri
              ? (0, jsx_1.jsxFuncAttr)('liste.dragCurseurTriDraggable', [
                  aIndiceTri,
                  aInfosZoneColonnes.indiceBloc,
                ])
              : false,
            class: 'flecheTri flecheTriNonSurvol AvecMain',
            style: { height: this._options.heightTri },
            role: 'columnheader',
            'aria-colindex': this.getIndiceColonneVisibleDeColonne(lNumeroCol),
            'aria-sort': lTriCroissant ? 'ascending' : 'descending',
            'aria-haspopup': this._triCourant.nombreTri > 1 ? 'true' : false,
            'aria-describedby': this.getIdAriaTitreDeColonne(lNumeroCol),
          },
          IE.jsx.str(
            'span',
            { class: 'sr-only' },
            'Tri %d',
          ),
          this._getDessinCurseurTri({
            triCroissant: lTriCroissant,
            tri:
              aIndiceTri === 0
                ? _ObjetListe_1.NSListe.FlecheTri.principal
                : _ObjetListe_1.NSListe.FlecheTri.secondaire,
          }),
        );
      }
      _construireTitre(aInfosZoneColonnes, aAvecTri) {
        const T = [];
        let I;
        let lITri;
        const lHtmlTri = [];
        const lIdsArias = [];
        let iLigne, lTitresLigne, lNumeroDerniereColonneVisible;
        const lTaillesGrid = this._construireTaillesGrid(aInfosZoneColonnes);
        aInfosZoneColonnes.gabaritColonnesTitre = lTaillesGrid.gabaritColonne;
        if (aAvecTri) {
          lHtmlTri.push(
            '<div id="',
            this.ScrollH.getIdZone(aInfosZoneColonnes.idScrollTri) +
              '_conteneur" class="conteneurTri_scroll" role="presentation">',
          );
          lHtmlTri.push(
            '<div id="',
            this.ScrollH.getIdZone(aInfosZoneColonnes.idScrollTri),
            '" role="presentation">',
            '<div id="',
            this.ScrollH.getIdContenu(aInfosZoneColonnes.idScrollTri),
            '" class="tri_scroll_contenu" role="presentation" style="height:',
            this._options.heightTri,
            'px;',
            lTaillesGrid.width > 0
              ? ObjetStyle_1.GStyle.composeWidth(lTaillesGrid.width)
              : '',
            '">',
          );
          lHtmlTri.push(
            IE.jsx.str(
              'div',
              {
                role: 'row',
                'aria-rowindex': '2',
                id:
                  this.ids.curseurTri + aInfosZoneColonnes.indiceBloc + '_row',
              },
              ' ',
              (H) => {
                for (lITri = 0; lITri < this._triCourant.nombreTri; lITri++) {
                  H.push(this._construireTriActif(aInfosZoneColonnes, lITri));
                }
              },
            ),
          );
          lHtmlTri.push(
            IE.jsx.str(
              'div',
              {
                id: this.ids.curseurTriSurvol + aInfosZoneColonnes.indiceBloc,
                class: 'flecheTri',
                style: 'display:none;',
              },
              this._getDessinCurseurTri({
                tri: _ObjetListe_1.NSListe.FlecheTri.survol,
              }),
            ),
          );
        }
        this._cache.heightLigneTitre = null;
        const lAvecLigneCreation = this._avecLigneCreationTitreEnLigne();
        const lCssTitreZone = ['liste-titre-zone'];
        if (!this.ListeTitres && !lAvecLigneCreation) {
          lCssTitreZone.push('hide');
        }
        if (this._cache.avecScrollHorizontal) {
          lCssTitreZone.push('scroll-h');
        }
        if (aInfosZoneColonnes.dernierBloc) {
          lCssTitreZone.push('b-right');
        }
        if (aInfosZoneColonnes.indiceBloc === 0) {
          lCssTitreZone.push('b-left');
        }
        if (this.ListeTitres || lAvecLigneCreation) {
          T.push(
            '<div id="',
            this.ScrollH.getIdZone(aInfosZoneColonnes.idScrollTitre),
            '" class="' + lCssTitreZone.join(' ') + '" role="presentation">',
            '<div class="liste-titre-contenu" id="',
            this.ScrollH.getIdContenu(aInfosZoneColonnes.idScrollTitre),
            '" role="presentation">',
          );
          T.push(
            '<div class="liste_gridTitre" role="presentation"',
            this._cache.infosZonesColonnes.length > 1
              ? ObjetHtml_1.GHtml.composeAttr(
                  'ie-node',
                  'liste.getNodeTableTitre',
                  [aInfosZoneColonnes.indiceBloc],
                )
              : '',
            ObjetHtml_1.GHtml.composeAttr(
              'ie-nodeafter',
              'liste.getNodeAfterTableTitre',
              [aInfosZoneColonnes.indiceBloc],
            ),
            ' style="',
            lTaillesGrid.styleGrid,
            lTaillesGrid.width > 0
              ? ObjetStyle_1.GStyle.composeWidth(lTaillesGrid.width)
              : '',
            '">',
          );
        }
        let iColonne;
        const lColonnesGabaritCalculFusion = {};
        if (this.ListeTitres) {
          for (iLigne = 0; iLigne < this.ListeTitres.length; iLigne++) {
            lTitresLigne = this.ListeTitres[iLigne];
            const lMaxIndiceCol = Math.min(
              lTitresLigne.length,
              aInfosZoneColonnes.indiceColonneFin + 1,
            );
            lNumeroDerniereColonneVisible = -1;
            if (
              aInfosZoneColonnes.dernierBloc ||
              (!aInfosZoneColonnes.dernierBloc &&
                !aInfosZoneColonnes.estBlocFixe)
            ) {
              for (
                I = aInfosZoneColonnes.indiceColonneDebut;
                lTitresLigne && I < lMaxIndiceCol;
                I++
              ) {
                if (
                  !this._colonneEnFusionAvecColonnePrecedente(
                    lTitresLigne,
                    I,
                  ) &&
                  (this._estColonneVisible(I) ||
                    this._colonneEnFusionAvecColonnePrecedente(
                      lTitresLigne,
                      I + 1,
                    ))
                ) {
                  lNumeroDerniereColonneVisible = I;
                }
              }
            }
            let lIndiceBasCol = -1;
            for (
              let I = aInfosZoneColonnes.indiceColonneDebut;
              lTitresLigne && I < lMaxIndiceCol;
              I++
            ) {
              const lDescripteurTitre = lTitresLigne[I];
              const lEstColonneVisible = this._estColonneVisible(I);
              if (lEstColonneVisible) {
                lIndiceBasCol += 1;
              }
              if (
                ((!lDescripteurTitre.fusion &&
                  !this._colonneEnFusionAvecColonnePrecedente(
                    lTitresLigne,
                    I,
                  )) ||
                  (I === aInfosZoneColonnes.indiceColonneDebut &&
                    lDescripteurTitre.fusion ===
                      TypeFusionTitreListe_1.TypeFusionTitreListe
                        .FusionGauche)) &&
                (lEstColonneVisible ||
                  this._colonneEnFusionAvecColonnePrecedente(
                    lTitresLigne,
                    I + 1,
                  ))
              ) {
                let lNbCol = lEstColonneVisible ? 1 : 0;
                let lNbLigne = 1;
                for (let j = iLigne + 1; j < this.ListeTitres.length; j++) {
                  if (
                    this.ListeTitres[j][I].fusion !==
                    TypeFusionTitreListe_1.TypeFusionTitreListe.FusionHaute
                  ) {
                    break;
                  } else {
                    lNbLigne++;
                  }
                }
                const lIdAria = this.getIdAriaTitreDeColonne(I);
                const lEstLigneAvecIdAria =
                  iLigne + lNbLigne >= this.ListeTitres.length && !!lIdAria;
                let lAriaLabelTitre = '';
                if (this._cache.declarationsColonnes[I]) {
                  lAriaLabelTitre =
                    this._cache.declarationsColonnes[I].libelleWai || '';
                }
                if (!lAriaLabelTitre) {
                  if (lDescripteurTitre.title) {
                    lAriaLabelTitre = lDescripteurTitre.title;
                  }
                }
                for (
                  let iColonne = I + 1;
                  iColonne < lMaxIndiceCol;
                  iColonne++
                ) {
                  const lEstColonneEnFusionPrec =
                    this._colonneEnFusionAvecColonnePrecedente(
                      lTitresLigne,
                      iColonne,
                    );
                  const lEstColVisibleBoucle =
                    this._estColonneVisible(iColonne);
                  if (lEstColonneEnFusionPrec) {
                    if (lEstColVisibleBoucle) {
                      lNbCol++;
                    }
                  } else {
                    break;
                  }
                }
                if (lNbCol === 0) {
                  continue;
                }
                const lChaineTitre = lDescripteurTitre.libelle;
                const lClassImage = lDescripteurTitre.classeCssImage;
                const lChaineHtml = lDescripteurTitre.libelleHtml;
                let lNbLignesTexte = 0;
                if (lChaineTitre && !lClassImage && !lChaineHtml) {
                  lNbLignesTexte =
                    lDescripteurTitre.nbLignes === 0
                      ? 0
                      : lDescripteurTitre.nbLignes > 0 &&
                          MethodesObjet_1.MethodesObjet.isNumber(
                            lDescripteurTitre.nbLignes,
                          )
                        ? lDescripteurTitre.nbLignes
                        : 1;
                }
                const lCouleurFond = lDescripteurTitre.getCouleurFond
                  ? lDescripteurTitre.getCouleurFond(this._options)
                  : null;
                const lCouleurTexte = lDescripteurTitre.getCouleurTexte
                  ? lDescripteurTitre.getCouleurTexte(this._options)
                  : null;
                const lCss = ['Titre liste_gridTitre_cel'];
                if (iLigne > 0) {
                  lCss.push('b-top');
                }
                if (I !== lNumeroDerniereColonneVisible) {
                  lCss.push('b-right');
                }
                if (
                  aInfosZoneColonnes.estBlocFixeDroite &&
                  I === aInfosZoneColonnes.indiceColonneDebut
                ) {
                  lCss.push('b-left');
                }
                const lIndiceGridCol = lIndiceBasCol + 1;
                let lGridColumn = lIndiceGridCol + '';
                if (lNbCol > 1) {
                  lGridColumn += ' / ' + (lIndiceGridCol + lNbCol);
                }
                let lGridRow = iLigne + 1;
                let lGridRowStr = iLigne + 1 + '';
                if (lNbLigne > 1) {
                  lGridRowStr += ' / ' + (lGridRow + lNbLigne);
                }
                const lAriaLabelBy = `${lIdAria}_by`;
                T.push(
                  IE.jsx.str(
                    'div',
                    {
                      id: lEstLigneAvecIdAria ? lIdAria : false,
                      role: 'row',
                      'aria-rowindex': '1',
                      class: lCss,
                      'ie-class': aAvecTri
                        ? (0, jsx_1.jsxFuncAttr)('liste.getClassTriGridTitre', [
                            I,
                          ])
                        : false,
                      style:
                        this._composePaddingCellule() +
                        'grid-column:' +
                        lGridColumn +
                        ';' +
                        'grid-row:' +
                        lGridRowStr +
                        ';' +
                        'min-height:' +
                        this._options.hauteurCelluleTitreStandard +
                        'px;' +
                        (lCouleurFond
                          ? ObjetStyle_1.GStyle.composeCouleurFond(lCouleurFond)
                          : '') +
                        (lCouleurTexte
                          ? ObjetStyle_1.GStyle.composeCouleurTexte(
                              lCouleurTexte,
                            )
                          : ''),
                      title: lDescripteurTitre.title || false,
                      'ie-hint':
                        !lDescripteurTitre.title && lDescripteurTitre.titleHtml
                          ? (0, jsx_1.jsxFuncAttr)('liste.getHintHtmlTitre', [
                              iLigne,
                              I,
                            ])
                          : false,
                    },
                    () => {
                      let lStrFuncAttrEllipsis = (0, jsx_1.jsxFuncAttr)(
                        'liste.getOptionsEllipsisTitre',
                        [
                          !(
                            lDescripteurTitre.title ||
                            lDescripteurTitre.titleHtml
                          ),
                          lNbLignesTexte,
                        ],
                      );
                      return IE.jsx.str(
                        IE.jsx.fragment,
                        null,
                        IE.jsx.str(
                          'div',
                          {
                            style:
                              (lChaineHtml &&
                                lDescripteurTitre.ignorerOverflowHidden) ||
                              lDescripteurTitre.estCoche
                                ? false
                                : 'overflow:hidden;',
                            role: 'columnheader',
                            'aria-colindex':
                              this.getIndiceColonneVisibleDeColonne(I),
                            'aria-labelledby':
                              lEstLigneAvecIdAria && lAriaLabelTitre
                                ? lAriaLabelBy
                                : false,
                            'ie-ellipsis':
                              lNbLignesTexte === 1
                                ? lStrFuncAttrEllipsis
                                : false,
                            'ie-ellipsis-multiline':
                              lNbLignesTexte > 1 ? lStrFuncAttrEllipsis : false,
                          },
                          (lChaineHtml ? lChaineHtml : '') +
                            (lClassImage
                              ? IE.jsx.str(
                                  'div',
                                  {
                                    class: lClassImage,
                                    style:
                                      (lDescripteurTitre.largeurClasseCssImage
                                        ? 'width:' +
                                          lDescripteurTitre.largeurClasseCssImage +
                                          'px;'
                                        : '') +
                                      'margin-left:auto;margin-right:auto;',
                                  },
                                  '\u00A0',
                                )
                              : lChaineHtml
                                ? ''
                                : lDescripteurTitre.estCoche
                                  ? IE.jsx.str('ie-checkbox', {
                                      'ie-model': (0, jsx_1.jsxFuncAttr)(
                                        'liste.cocheTitreClassique',
                                        I,
                                      ),
                                      'ie-attr': (0, jsx_1.jsxFuncAttr)(
                                        'liste.cocheTitreClassique.getAttr',
                                        I,
                                      ),
                                    })
                                  : lNbLignesTexte > 1
                                    ? lChaineTitre
                                    : IE.jsx.str('span', null, lChaineTitre)),
                        ),
                        lEstLigneAvecIdAria && lAriaLabelTitre
                          ? IE.jsx.str(
                              'div',
                              { id: lAriaLabelBy, class: 'sr-only' },
                              lAriaLabelTitre,
                            )
                          : '',
                      );
                    },
                  ),
                );
                if (lEstLigneAvecIdAria) {
                  lIdsArias.push(lIdAria);
                }
                if (
                  !lColonnesGabaritCalculFusion[I] &&
                  lNbCol > 1 &&
                  iLigne === this.ListeTitres.length - 1 &&
                  aInfosZoneColonnes.gabaritColonnesTitre[I]
                ) {
                  const lLeft = aInfosZoneColonnes.gabaritColonnesTitre[I].left;
                  let lWidth = 0;
                  for (let iColonne = I; iColonne < I + lNbCol; iColonne++) {
                    lColonnesGabaritCalculFusion[iColonne] = true;
                    if (aInfosZoneColonnes.gabaritColonnesTitre[iColonne]) {
                      lWidth +=
                        aInfosZoneColonnes.gabaritColonnesTitre[iColonne].width;
                    }
                  }
                  for (iColonne = I; iColonne < I + lNbCol; iColonne++) {
                    if (aInfosZoneColonnes.gabaritColonnesTitre[iColonne]) {
                      aInfosZoneColonnes.gabaritColonnesTitre[iColonne] = {
                        width: lWidth,
                        left: lLeft,
                      };
                    }
                  }
                }
              }
            }
          }
          if (this._cache.infosZonesColonnes.length > 1) {
            for (iLigne = 0; iLigne < this.ListeTitres.length; iLigne++) {
              T.push(
                '<div class="liste_titreGabLigne" style="grid-column:1; grid-row:',
                iLigne + 1,
                '"></div>',
              );
            }
          }
        }
        if (this.ListeTitres || lAvecLigneCreation) {
          T.push('</div>');
          if (lAvecLigneCreation) {
            T.push(this.composeCreation(-1, lTaillesGrid, !!this.ListeTitres));
          }
          if (this._avecRollover()) {
            T.push(
              '<div id="',
              this.ids.rolloverTitre + aInfosZoneColonnes.indiceBloc,
              '" class="liste_conteneur_rollover titre">',
              (0, tag_1.tag)('div'),
              '</div>',
            );
          }
          if (aAvecTri && ObjetSupport_1.Support.supportPointerEventsNone) {
            T.push(
              '<div id="',
              this.ids.survolTitre + aInfosZoneColonnes.indiceBloc,
              '" class="voileBleuTitre">',
              '</div>',
            );
          }
          if (aAvecTri) {
            lHtmlTri.push('</div>', '</div>', '</div>');
          }
          T.push('</div>', '</div>');
        }
        const lResult = [];
        const lPaddingLeft =
            aInfosZoneColonnes.indiceBloc === 0
              ? this._options.borduresContenu_left - 1
              : 0,
          lPaddingRight = aInfosZoneColonnes.dernierBloc
            ? this._options.borduresContenu_right - 1
            : 0;
        const lHtml = this.ListeTitres || lAvecLigneCreation ? T.join('') : '';
        if (lHtml) {
          lResult.push(
            IE.jsx.str(
              'div',
              {
                id: this.ids.titre + aInfosZoneColonnes.indiceBloc,
                style:
                  'position:relative; ' +
                  (lPaddingLeft > 0
                    ? 'padding-left:' + lPaddingLeft + 'px;'
                    : '') +
                  (lPaddingRight > 0
                    ? 'padding-right:' + lPaddingRight + 'px;'
                    : ''),
                role: 'presentation',
              },
              lHtml,
              lHtmlTri.join(''),
            ),
          );
        }
        return { html: lResult.join(''), idsAria: lIdsArias.join(' ') };
      }
      _getJeuxCouleurNonSelection(aParamsCellule) {
        let lCouleurs = null;
        if (
          this._options.alternanceCouleurLigneContenu &&
          this._options.avecCouleurAlternanceParDefaut
        ) {
          lCouleurs =
            this._cache.couleursAlternanceParLigne[aParamsCellule.ligne] ===
            true
              ? this._options.couleurAlternance0
              : this._options.couleurAlternance1;
        } else if (
          this.Donnees.avecEdition(aParamsCellule) &&
          !this._getNonEditable()
        ) {
          lCouleurs = this._options.alternanceCouleurLigneContenu
            ? this._cache.couleursAlternanceParLigne[aParamsCellule.ligne] ===
              true
              ? this._options.couleursListe.editableAlternee1
              : this._options.couleursListe.editableAlternee2
            : this._options.couleursListe.editable;
        } else {
          lCouleurs = this._options.alternanceCouleurLigneContenu
            ? this._cache.couleursAlternanceParLigne[aParamsCellule.ligne] ===
              true
              ? this._options.couleursListe.nonEditableAlternee1
              : this._options.couleursListe.nonEditableAlternee2
            : this._options.couleursListe.nonEditable;
        }
        const LCouleurCellule = this.Donnees.getCouleurCellule(
          aParamsCellule,
          new _ObjetCouleur_1.ObjectCouleurCellule(
            lCouleurs.fond,
            lCouleurs.texte,
            lCouleurs.bordure,
          ),
        );
        if (LCouleurCellule !== null && LCouleurCellule !== undefined) {
          switch (LCouleurCellule) {
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Blanc:
              return this._options.couleursListe.editable;
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Gris:
              return this._options.couleursListe.nonEditable;
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule
              .Deploiement:
              return this._options.couleursListe.cumul[
                this.Donnees.getNiveauDeploiement(aParamsCellule)
              ];
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Fixe:
              return this._options.couleursListe.colonneFixe;
            case ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Total:
              return this._options.couleursListe.total;
            default:
              return LCouleurCellule;
          }
        } else {
          return lCouleurs;
        }
      }
      _getJeuxCouleur(aParamsCellule, aEstSelectionne) {
        const lJeuxCouleur = this._getJeuxCouleurNonSelection(aParamsCellule);
        if (aEstSelectionne) {
          return new _ObjetCouleur_1.ObjectCouleurCellule(
            '',
            '',
            lJeuxCouleur.bordure,
          );
        }
        return lJeuxCouleur;
      }
      _composePaddingCellule() {
        return ObjetChaine_1.GChaine.format('padding: %spx %spx;', [
          this._options.paddingCelluleTB,
          this._options.paddingCelluleLR,
        ]);
      }
      _getFusionColonnesCelluleDeZone(aLigne, aInfosZoneColonnes) {
        return this._getFusionColonnesCellule({
          colonnesVisibles: aInfosZoneColonnes.colonnesVisibles,
          ligne: aLigne,
          indiceColonneDebut: aInfosZoneColonnes.indiceColonneDebut,
          indiceColonneFin: aInfosZoneColonnes.indiceColonneFin,
          dernierBloc:
            aInfosZoneColonnes.dernierBloc ||
            (!aInfosZoneColonnes.dernierBloc &&
              !aInfosZoneColonnes.estBlocFixe),
        });
      }
      _fusionCelluleAvecLignePrecedente(
        aParamsCellule,
        aFusionColonnes,
        aInfosZoneColonnes,
      ) {
        const lAvecFusionLigne =
          this.Donnees.fusionCelluleAvecLignePrecedente(aParamsCellule);
        if (lAvecFusionLigne && aParamsCellule.celluleLignePrecedente) {
          const lFusionsLignePrec = this._getFusionColonnesCelluleDeZone(
            aParamsCellule.celluleLignePrecedente.ligne,
            aInfosZoneColonnes,
          );
          if (!lFusionsLignePrec) {
            return true;
          }
          if (
            !aFusionColonnes[aParamsCellule.colonne] &&
            !lFusionsLignePrec[aParamsCellule.colonne]
          ) {
            return true;
          }
          if (
            aFusionColonnes[aParamsCellule.colonne] &&
            lFusionsLignePrec[aParamsCellule.colonne] &&
            aFusionColonnes[aParamsCellule.colonne].debut ===
              lFusionsLignePrec[aParamsCellule.colonne].debut &&
            aFusionColonnes[aParamsCellule.colonne].fin ===
              lFusionsLignePrec[aParamsCellule.colonne].fin
          ) {
            return true;
          }
          return false;
        }
        return lAvecFusionLigne;
      }
      _chercherLignesFusionVertical(
        aParamsCellule,
        aIndiceLigne,
        aRangeLignes,
        aFusionColonnes,
        aInfosZoneColonnes,
      ) {
        let lNombreLignesEnFusion = 1;
        let lLigneSuivante;
        let lLignePrecedente;
        let lIndiceFusionLigne;
        if (
          aIndiceLigne > aRangeLignes.debut &&
          this._fusionCelluleAvecLignePrecedente(
            aParamsCellule,
            aFusionColonnes,
            aInfosZoneColonnes,
          )
        ) {
          if (
            aParamsCellule.celluleLignePrecedente &&
            this._estLigneVisible(aParamsCellule.celluleLignePrecedente.ligne)
          ) {
            return 0;
          }
          return 1;
        }
        for (
          lIndiceFusionLigne = aIndiceLigne + 1;
          lIndiceFusionLigne < aRangeLignes.fin;
          lIndiceFusionLigne++
        ) {
          lLigneSuivante = this._cache.lignesVisibles[lIndiceFusionLigne];
          lLignePrecedente = this._cache.lignesVisibles[lIndiceFusionLigne - 1];
          if (
            this._estLigneVisible(lLignePrecedente) &&
            this._fusionCelluleAvecLignePrecedente(
              this._getParamsCellule(aParamsCellule.colonne, lLigneSuivante, {
                celluleLignePrecedente: this._getParamsCellule(
                  aParamsCellule.colonne,
                  lLignePrecedente,
                ),
              }),
              this._getFusionColonnesCelluleDeZone(
                lLigneSuivante,
                aInfosZoneColonnes,
              ),
              aInfosZoneColonnes,
            )
          ) {
            this._cache.lignesFusionParColonne[
              aParamsCellule.colonne + '_' + lLigneSuivante
            ] = { ligneOrigine: aParamsCellule.ligne };
            const lCle = aParamsCellule.colonne + '_' + aParamsCellule.ligne;
            if (!this._cache.lignesFusionParColonne[lCle]) {
              this._cache.lignesFusionParColonne[lCle] = {
                ligneOrigine: aParamsCellule.ligne,
                lignesCumuls: {},
              };
            }
            this._cache.lignesFusionParColonne[lCle].lignesCumuls[
              lLigneSuivante
            ] = true;
            lNombreLignesEnFusion += 1;
          } else {
            return lNombreLignesEnFusion;
          }
        }
        return lNombreLignesEnFusion;
      }
      _hauteurAdapteAuContenu() {
        return (
          !!this._options.hauteurAdapteContenu &&
          (this._cache.lignesVisibles.length > 0 ||
            !!this._options.messageContenuVide)
        );
      }
      _construireCopySVG() {
        return IE.jsx.str(
          'div',
          { class: 'copySVG', 'aria-hidden': 'true' },
          IE.jsx.str(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '100%',
              height: '100%',
            },
            IE.jsx.str('rect', {
              x: '0',
              y: '0',
              width: '100%',
              height: '100%',
            }),
          ),
        );
      }
      _construireCellule(aParamsCellule, aParams) {
        const T = [];
        const lInfosContenu = this._composeContenuCellule(
          aParamsCellule,
          aParams.taille - aParams.indentation,
        );
        const lEstAlignVCenter = this.Donnees.alignVCenter(aParamsCellule);
        const lRoleGrid = this._estRoleTreeGrid();
        const lAvecSelecFile =
          !this._getNonEditable() && this.Donnees.avecSelecFile(aParamsCellule);
        const lAttrs = {
          id: aParams.id + '_div',
          class: [
            'liste_contenu_cellule',
            lEstAlignVCenter ? ' liste_cellule_alignVCenter' : '',
            'liste-cellule-focusable',
          ],
          style:
            aParams.indentation > 0
              ? `padding-left:${aParams.indentation}px;`
              : false,
        };
        if (!this.Donnees.enConstruction_cacheRechercheTexte) {
          let lAriaDescribedByTab = [];
          if (lRoleGrid) {
            const lIDColDescr =
              this.Donnees.getWAIIdColonnePourDescription(aParamsCellule);
            if (lIDColDescr) {
              const lNumCol = this.getNumeroColonneDIdColonne(lIDColDescr);
              if (lNumCol >= 0) {
                lAriaDescribedByTab.push(
                  `${this.getIdCellule(lNumCol, aParamsCellule.ligne)}_div`,
                );
              }
            }
            if (
              !this._getNonEditable() &&
              (this.Donnees.avecEdition(aParamsCellule) ||
                this.Donnees.avecEvenementEdition(aParamsCellule))
            ) {
              lAriaDescribedByTab.push(this.ids.WAICelluleEditable);
            }
          }
          Object.assign(
            lAttrs,
            'attrTitleCellule' in lInfosContenu
              ? lInfosContenu.attrTitleCellule
              : {},
            {
              'ie-model': lAvecSelecFile
                ? (0, jsx_1.jsxFuncAttr)('liste.modeleSelecFileCellule', [
                    aParamsCellule.ligne,
                    aParamsCellule.colonne,
                    false,
                  ])
                : false,
              'ie-selecfile': lAvecSelecFile,
              'ie-attr': (0, jsx_1.jsxFuncAttr)('liste.attrCellule', [
                aParamsCellule.ligne,
                aParamsCellule.colonne,
                lRoleGrid,
              ]),
              tabindex: '-1',
              'aria-haspopup': aParamsCellule._haspopup ? 'true' : false,
              'aria-expanded': aParamsCellule._estDeploiement
                ? !!aParamsCellule._estDeploiement.expanded + ''
                : false,
              'aria-describedby':
                lAriaDescribedByTab.length > 0
                  ? lAriaDescribedByTab.join(' ')
                  : false,
            },
          );
          if (lRoleGrid) {
            Object.assign(lAttrs, {
              role: 'gridcell',
              'aria-colindex': aParams.indiceColonneVisible,
              'aria-colspan':
                aParams.nombreColonnesFusion > 1
                  ? aParams.nombreColonnesFusion
                  : false,
              'aria-rowspan':
                aParams.nombreLignesEnFusion > 1
                  ? aParams.nombreLignesEnFusion
                  : false,
            });
          } else {
            let lStruct =
              this._cache.structArborescenceLignes[
                this._cache.lignesVisibles.indexOf(aParamsCellule.ligne)
              ];
            const lEstUnDeploiement =
              this.Donnees.estUnDeploiement(aParamsCellule);
            if (!lStruct) {
              lStruct = { level: 1, index: 1, count: 1 };
            }
            Object.assign(lAttrs, {
              role: 'treeitem',
              'aria-level': lStruct.level,
              'aria-posinset': lStruct.index,
              'aria-setsize': lStruct.count,
              'aria-expanded':
                !aParamsCellule._estDeploiement &&
                (lStruct.avecFilsVisible || lEstUnDeploiement)
                  ? !!(
                      (!lEstUnDeploiement && lStruct.avecFilsVisible) ||
                      this.Donnees._estDeploye(aParamsCellule.ligne)
                    ) + ''
                  : false,
            });
          }
        }
        T.push(
          IE.jsx.str(
            'div',
            Object.assign({}, lAttrs, {
              'ie-nodeafter': !this.Donnees.enConstruction_cacheRechercheTexte
                ? (0, jsx_1.jsxFuncAttr)('liste.nodeAfterCellule')
                : '',
            }),
            lInfosContenu.html,
          ),
          this.Donnees.estCelluleCopie(aParamsCellule)
            ? this._construireCopySVG()
            : '',
        );
        return T.join('');
      }
      construireContenuListeInterne(aInfosZoneColonnes) {
        const lCacheRef = this._cache.refresh;
        this._cache.couleursAlternanceParLigne = [];
        this._cache.positionsCelluleCadreSelection = {};
        const lStyleGabarit = tag_1.tag.styleToStr(
          'grid-column',
          `1/${aInfosZoneColonnes.colonnesVisibles.length + 1}`,
        );
        const lTaillesGrid = this._construireTaillesGrid(aInfosZoneColonnes);
        const lPremierBloc = aInfosZoneColonnes.indiceBloc === 0;
        return IE.jsx.str(
          'div',
          {
            id: this.getIdGridFocus(aInfosZoneColonnes.indiceBloc),
            class: ['SansMain liste_fixed', 'liste-focus-grid'],
            style:
              lTaillesGrid.styleGrid +
              (lTaillesGrid.width > 0
                ? ObjetStyle_1.GStyle.composeWidth(lTaillesGrid.width)
                : ''),
            role: this._estRoleTreeGrid() ? false : 'group',
            tabindex: lPremierBloc ? '0' : '-1',
            'ie-node': 'liste.getNodePremierElement',
          },
          (T) => {
            if (lCacheRef.avecConstructionDynamiqueContenu) {
              T.push(
                IE.jsx.str('div', {
                  'ie-node': (0, jsx_1.jsxFuncAttr)(
                    'liste.nodeGabaritRefresh',
                    [true, aInfosZoneColonnes.indiceBloc],
                  ),
                  class: 'gabarit-refresh',
                  style: lStyleGabarit,
                  role: 'presentation',
                }),
              );
            }
            T.push(
              this.construireContenuListeInterneLignes(aInfosZoneColonnes, 0),
            );
            if (lCacheRef.avecConstructionDynamiqueContenu) {
              T.push(
                IE.jsx.str('div', {
                  'ie-node': (0, jsx_1.jsxFuncAttr)(
                    'liste.nodeGabaritRefresh',
                    [false, aInfosZoneColonnes.indiceBloc],
                  ),
                  class: 'gabarit-refresh',
                  style: lStyleGabarit,
                  role: 'presentation',
                }),
              );
            }
          },
        );
      }
      construireContenuListeInterneLignes(aInfosZoneColonnes, aIndiceRange) {
        const T = [];
        let lJeuxCouleurs,
          lDerniereLigne,
          lStyleBordures,
          lCouleurBorduresCellules,
          lNumeroPremiereColonneFusion,
          lNumeroDerniereColonneFusion,
          lDerniereColonne,
          lNombreColonnesFusion,
          lPremiereColonne,
          lNombreLignesEnFusion,
          lClassLigne,
          lFusions,
          lCouleurAlternance = false,
          lAvecSeparateurDeploiement = false;
        let lErreurFusionLigne = false;
        const lNbColonnesVisibles = aInfosZoneColonnes.colonnesVisibles.length;
        const lNbLignesVisibles = this._cache.lignesVisibles.length;
        const lRoleGrid = this._estRoleTreeGrid();
        if (lNbLignesVisibles === 0 && this._options.messageContenuVide) {
          T.push(
            IE.jsx.str(
              'div',
              {
                class: 'liste_messageVide',
                style:
                  'grid-column: 1 / ' +
                  (aInfosZoneColonnes.colonnesVisibles.length + 1),
                role: lRoleGrid ? 'gridcell' : 'treeitem',
              },
              this._options.messageContenuVide,
            ),
          );
        }
        if (!this.Donnees || !this.ListeTailles) {
          return T.join('');
        }
        const lClasseRange = this._cache.refresh
          .avecConstructionDynamiqueContenu
          ? this._getClassRange(aIndiceRange)
          : '';
        const lRangeLignes = { debut: 0, fin: lNbLignesVisibles };
        if (this._cache.refresh.avecConstructionDynamiqueContenu) {
          const lStructure = this._cache.refresh.structure[aIndiceRange];
          lRangeLignes.debut = lStructure.deb;
          lRangeLignes.fin = lStructure.fin + 1;
        }
        const lAvecObserver =
          this._cache.refresh.avecConstructionDynamiqueContenu &&
          !this.Donnees.enConstruction_cacheRechercheTexte &&
          lRangeLignes.fin > lRangeLignes.debut;
        if (lAvecObserver) {
          T.push(
            (0, tag_1.tag)('div', {
              class: lClasseRange,
              style:
                'height:0; grid-column:1/' + (lNbColonnesVisibles + 1) + ';',
              'ie-nodeafter': (0, jsx_1.jsxFuncAttr)('liste.nodeObsRange', [
                true,
                aIndiceRange,
                aInfosZoneColonnes.indiceBloc,
              ]),
              role: 'presentation',
            }),
          );
        }
        let lParamCelluleLigne = null;
        for (
          let iIndice = lRangeLignes.debut;
          iIndice < lRangeLignes.fin;
          iIndice++
        ) {
          const J = this._cache.lignesVisibles[iIndice];
          lPremiereColonne = true;
          lAvecSeparateurDeploiement = false;
          lParamCelluleLigne = this._getParamsCellule(-1, J);
          if (
            (iIndice > 0 || aIndiceRange > 0) &&
            lNbColonnesVisibles === 1 &&
            !this.Donnees.enConstruction_cacheRechercheTexte &&
            this.Donnees instanceof
              ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign &&
            this.Donnees.avecSeparateurLigneHautFlatdesign &&
            this.Donnees.avecSeparateurLigneHautFlatdesign(
              lParamCelluleLigne,
              this._getParamsCellule(
                -1,
                this._cache.lignesVisibles[iIndice - 1],
              ),
            )
          ) {
            T.push(
              (0, tag_1.tag)('hr', {
                class: ['liste_sepligne', lClasseRange],
                role: 'presentation',
              }),
            );
          }
          let lAvecLigneDraggable =
            !this.Donnees.enConstruction_cacheRechercheTexte &&
            this.Donnees.avecLigneDraggable(lParamCelluleLigne);
          if (
            !lAvecLigneDraggable &&
            this._options.AvecSuppression &&
            !this._getNonEditable() &&
            this.Donnees
          ) {
            if (!GNavigateur.isTactile) {
              this._cache.infosZonesColonnes.every((aInfosZoneColonnes) => {
                return aInfosZoneColonnes.colonnesVisibles.every(
                  (aNumeroColonne) => {
                    const lParamsCellule = this._getParamsCellule(
                      aNumeroColonne,
                      J,
                      { surSuppression: true },
                    );
                    lAvecLigneDraggable =
                      this.Donnees._avecSuppression(lParamsCellule);
                    return !lAvecLigneDraggable;
                  },
                );
              });
            }
          }
          lFusions = this._getFusionColonnesCelluleDeZone(
            J,
            aInfosZoneColonnes,
          );
          let lIndiceColonneVisible = 1;
          aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
            if (!lFusions[aNumeroColonne] || !lFusions[aNumeroColonne].nbCol) {
              return;
            }
            const lParamsCellule = this._getParamsCellule(aNumeroColonne, J, {
              celluleLignePrecedente:
                J > 0
                  ? this._getParamsCellule(
                      aNumeroColonne,
                      this._cache.lignesVisibles[iIndice - 1],
                    )
                  : null,
              celluleLigneSuivante:
                iIndice + 1 < lNbLignesVisibles
                  ? this._getParamsCellule(
                      aNumeroColonne,
                      this._cache.lignesVisibles[iIndice + 1],
                    )
                  : null,
            });
            if (
              lPremiereColonne &&
              this._options.alternanceCouleurLigneContenu
            ) {
              const lResultAlternance =
                this.Donnees.avecAlternanceCouleurLigne(lParamsCellule);
              if (lResultAlternance === true || lResultAlternance === false) {
                lCouleurAlternance = lResultAlternance
                  ? !lCouleurAlternance
                  : lCouleurAlternance;
              } else if (
                MethodesObjet_1.MethodesObjet.isNumber(lResultAlternance)
              ) {
                lCouleurAlternance = lResultAlternance % 2 === 0;
              } else {
              }
              if (this.Donnees.estUnDeploiement(lParamsCellule)) {
                this._cache.couleursAlternanceParLigne[J] = lCouleurAlternance;
                lAvecSeparateurDeploiement =
                  this._options.avecTraitSeparationDeploiementAlternance &&
                  this._options.couleurAlternance0 &&
                  !!this._options.couleurAlternance0.fond;
              } else {
                this._cache.couleursAlternanceParLigne[J] = lCouleurAlternance;
              }
            }
            lNumeroPremiereColonneFusion = lFusions[aNumeroColonne].debut;
            lNumeroDerniereColonneFusion = lFusions[aNumeroColonne].fin;
            lDerniereColonne =
              aInfosZoneColonnes.indiceColonneFin ===
                lNumeroDerniereColonneFusion &&
              (aInfosZoneColonnes.dernierBloc ||
                (!aInfosZoneColonnes.dernierBloc &&
                  !aInfosZoneColonnes.estBlocFixe));
            let lTaille = lFusions[aNumeroColonne].taille;
            lNombreColonnesFusion = lFusions[aNumeroColonne].nbCol;
            if (
              this._cache.colonnesSansBordureDroit[
                lNumeroDerniereColonneFusion
              ] &&
              this._celluleAvecBordureDroite(lDerniereColonne)
            ) {
              lTaille += 1;
            }
            lNombreLignesEnFusion = this._chercherLignesFusionVertical(
              lParamsCellule,
              iIndice,
              lRangeLignes,
              lFusions,
              aInfosZoneColonnes,
            );
            lDerniereLigne =
              iIndice + lNombreLignesEnFusion >= lNbLignesVisibles;
            if (
              lNombreLignesEnFusion !== 1 &&
              this._cache.infosZonesColonnes.length > 1
            ) {
              lErreurFusionLigne = true;
            }
            if (lNombreLignesEnFusion <= 0) {
              lIndiceColonneVisible += lNombreColonnesFusion;
              return;
            }
            const lIndiceGridCol = lIndiceColonneVisible;
            let lGridColumn = lIndiceColonneVisible + '';
            if (lNombreColonnesFusion > 1) {
              lGridColumn += ' / ' + (lIndiceGridCol + lNombreColonnesFusion);
            }
            const lAriaColIndex = lIndiceColonneVisible + 1;
            lIndiceColonneVisible += lNombreColonnesFusion;
            let lGridRowEnd = '';
            if (lNombreLignesEnFusion > 1) {
              lGridRowEnd = `span ${lNombreLignesEnFusion}`;
            }
            let lCelluleSelectionnee = false;
            if (
              !this.Donnees.enConstruction_cacheRechercheTexte &&
              this.Donnees._avecSelection(lParamsCellule)
            ) {
              lCelluleSelectionnee = this._etatSelectionCellule({
                ligne: J,
                colonne: aNumeroColonne,
              });
            }
            lJeuxCouleurs = this._getJeuxCouleur(
              lParamsCellule,
              this._options.avecCadreSelection ? false : lCelluleSelectionnee,
            );
            lCouleurBorduresCellules =
              this._options.borduresCellule_couleur ||
              lJeuxCouleurs.getBordure(false);
            if (this.Donnees.enConstruction_cacheRechercheTexte) {
              lStyleBordures = '';
            } else {
              lStyleBordures =
                ((lDerniereLigne && this._hauteurAdapteAuContenu()) ||
                this._options.borduresCellule_vertical <= 0 ||
                !this.Donnees.avecBordureBas(lParamsCellule)
                  ? ''
                  : ObjetStyle_1.GStyle.composeCouleurBordure(
                      lCouleurBorduresCellules,
                      this._options.borduresCellule_vertical,
                      ObjetStyle_2.EGenreBordure.bas,
                    )) +
                (this._options.borduresCellule_vertical > 0 &&
                this.Donnees.avecBordureHaut(lParamsCellule)
                  ? ObjetStyle_1.GStyle.composeCouleurBordure(
                      lCouleurBorduresCellules,
                      this._options.borduresCellule_vertical,
                      ObjetStyle_2.EGenreBordure.haut,
                    )
                  : '') +
                (!this._celluleAvecBordureDroite(lDerniereColonne) ||
                this._cache.colonnesSansBordureDroit[
                  lNumeroDerniereColonneFusion
                ] ||
                (aInfosZoneColonnes.indiceColonneFin !==
                  lNumeroDerniereColonneFusion &&
                  !this.Donnees.avecBordureDroite(lParamsCellule))
                  ? ''
                  : ObjetStyle_1.GStyle.composeCouleurBordure(
                      lCouleurBorduresCellules,
                      this._options.borduresCellule_horizontal,
                      ObjetStyle_2.EGenreBordure.droite,
                    )) +
                (aInfosZoneColonnes.estBlocFixeDroite &&
                lNumeroPremiereColonneFusion ===
                  aInfosZoneColonnes.indiceColonneDebut &&
                this._options.borduresCellule_horizontal > 0
                  ? ObjetStyle_1.GStyle.composeCouleurBordure(
                      lCouleurBorduresCellules,
                      this._options.borduresCellule_horizontal,
                      ObjetStyle_2.EGenreBordure.gauche,
                    )
                  : '');
            }
            const lIndentation = Math.min(
              this.Donnees.getIndentationCellule(lParamsCellule) || 0,
              lTaille,
            );
            let lPadding = this.Donnees.getPadding(lParamsCellule);
            let lPaddingTB = this._options.paddingCelluleTB;
            let lPaddingLR = this._options.paddingCelluleLR;
            if (typeof lPadding === 'number' && lPadding >= 0) {
              lTaille += 2 * (this._options.paddingCelluleLR - lPadding);
              lPaddingTB = lPadding;
              lPaddingLR = lPadding;
            } else {
              lPadding = null;
            }
            const lHeightCellule = this._getHeightCellule(lParamsCellule);
            let lAvecMain =
              !this._getNonEditable() &&
              this.Donnees.avecEvenementEdition(lParamsCellule);
            if (!lAvecMain && !this._getNonEditable()) {
              const lTypeCellule = this.Donnees.getTypeValeur(lParamsCellule);
              lAvecMain =
                lTypeCellule ===
                  ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche &&
                this.Donnees.avecEdition(lParamsCellule);
            }
            lClassLigne = lAvecMain ? 'AvecMain ' : '';
            const LId = this.getIdCellule(aNumeroColonne, J);
            delete this._cache.ouvrirSelecteurFileParLigne[
              lParamsCellule.ligne + '_' + lParamsCellule.colonne
            ];
            this._cache.collectionFuncConstructCellule[
              lParamsCellule.ligne + '_' + lParamsCellule.colonne
            ] = this._construireCellule.bind(this, lParamsCellule, {
              id: LId,
              taille: lTaille,
              indentation: lIndentation,
              indiceColonneVisible:
                lAriaColIndex -
                1 +
                (aInfosZoneColonnes.indiceColVisibleDebut || 0),
              indiceLigneVisible: iIndice + 1,
              nombreColonnesFusion: lNombreColonnesFusion,
              nombreLignesEnFusion: lNombreLignesEnFusion,
            });
            let lAttrIEDrop = false;
            if (
              !this.Donnees.enConstruction_cacheRechercheTexte &&
              !GNavigateur.isTactile &&
              this.Donnees &&
              this.Donnees.avecLigneDroppable(lParamCelluleLigne)
            ) {
              lAttrIEDrop = (0, jsx_1.jsxFuncAttr)(
                'liste.dropCelluleDroppable',
                [lParamsCellule.ligne, lParamsCellule.colonne],
              );
            }
            const lRoleGrid = this._estRoleTreeGrid();
            T.push(
              IE.jsx.str(
                'div',
                {
                  id: LId,
                  role: !lRoleGrid ? 'presentation' : 'row',
                  'aria-hidden': lRoleGrid ? 'true' : false,
                  'data-colonne': lParamsCellule.colonne,
                  'aria-rowindex': lRoleGrid
                    ? iIndice + 1 + (this.ListeTitres ? 1 : 0)
                    : false,
                  class: [
                    'liste_celluleGrid',
                    `liste_celluleGrid_${iIndice + 1}`,
                    lCelluleSelectionnee ? 'selected' : '',
                    lClassLigne,
                    lClasseRange,
                  ],
                  'ie-class': (0, jsx_1.jsxFuncAttr)(
                    'liste.getClassCellulePere',
                    [lParamsCellule.ligne, lParamsCellule.colonne],
                  ),
                  style: [
                    tag_1.tag.styleToStr('grid-column', lGridColumn),
                    lGridRowEnd
                      ? tag_1.tag.styleToStr('grid-row-end', lGridRowEnd)
                      : '',
                    tag_1.tag.styleToStr('min-height', lHeightCellule + 'px'),
                    this._options.ignorerCouleurInlineCellule
                      ? ''
                      : ObjetStyle_1.GStyle.composeCouleurFond(
                          lJeuxCouleurs.getFond(false),
                        ),
                    this._options.ignorerCouleurInlineCellule
                      ? ''
                      : ObjetStyle_1.GStyle.composeCouleurTexte(
                          lJeuxCouleurs.getTexte(false),
                        ),
                    lStyleBordures,
                    tag_1.tag.styleToStr(
                      'padding',
                      lPaddingTB + 'px ' + lPaddingLR + 'px',
                    ),
                  ].join(''),
                  'ie-droppable': !this.Donnees
                    .enConstruction_cacheRechercheTexte
                    ? lAttrIEDrop
                    : '',
                  'ie-draggable-fantome': lAvecLigneDraggable
                    ? (0, jsx_1.jsxFuncAttr)('liste.dragFantomeCellule', [
                        lParamsCellule.ligne,
                        lParamsCellule.colonne,
                      ])
                    : false,
                },
                this._cache.collectionFuncConstructCellule[
                  lParamsCellule.ligne + '_' + lParamsCellule.colonne
                ](),
              ),
            );
            lPremiereColonne = false;
          });
          if (
            lAvecSeparateurDeploiement &&
            !this.Donnees.enConstruction_cacheRechercheTexte
          ) {
            T.push(
              IE.jsx.str('div', {
                class: ['liste_traitSepDeploiement', lClasseRange],
                style: {
                  'grid-column':
                    '1 / ' + (aInfosZoneColonnes.colonnesVisibles.length + 1),
                  margin: '1px ' + this._options.paddingCelluleLR + 'px',
                  'background-color': this._options.couleurAlternance0.fond,
                },
              }),
            );
          }
          if (
            this._cache.numeroLigneCreationDynamique === J &&
            !this.Donnees.enConstruction_cacheRechercheTexte
          ) {
            T.push(
              '<div class="liste_celluleGrid ' + lClasseRange + '" style="',
              'grid-column:',
              '1 / ',
              aInfosZoneColonnes.colonnesVisibles.length + 1,
              ';',
              '">',
              this.composeCreation(
                J,
                this._construireTaillesGrid(aInfosZoneColonnes),
              ),
              '</div>',
            );
          }
        }
        if (lAvecObserver) {
          T.push(
            (0, tag_1.tag)('div', {
              class: lClasseRange,
              style: 'height:0; grid-column:1/' + (lNbColonnesVisibles + 1),
              'ie-nodeafter': (0, jsx_1.jsxFuncAttr)('liste.nodeObsRange', [
                false,
                aIndiceRange,
                aInfosZoneColonnes.indiceBloc,
              ]),
              role: 'presentation',
            }),
          );
        }
        return T.join('');
      }
      _construireContenuListe(aInfosZoneColonnes) {
        const T = [];
        const lCouleurBorduresContenu =
          this._options.borduresContenu_couleur ||
          this._options.couleursListe.editable.getBordure(false);
        const lAvecOmbre =
          this._options.skin !== _ObjetListe_1.ObjetListe.skin.flatDesign;
        const lCss = ['conteneur-scroll-bloc conteneur-ombre-zone'];
        if (lAvecOmbre) {
          lCss.push('ombre-top');
          if (!aInfosZoneColonnes.dernierBloc) {
            lCss.push('ombre-top-droite');
          }
          if (aInfosZoneColonnes.indiceBloc > 0) {
            lCss.push('ombre-top-gauche');
          }
        }
        T.push(
          '<div id="',
          this.ids.contenu + aInfosZoneColonnes.indiceBloc,
          '" role="presentation">',
          '<div role="presentation"',
          ' class="' + lCss.join(' ') + '"',
          ' style="',
          this._options.borduresContenu_top > 0
            ? ObjetStyle_1.GStyle.composeCouleurBordure(
                lCouleurBorduresContenu,
                this._options.borduresContenu_top,
                ObjetStyle_2.EGenreBordure.haut,
              )
            : '',
          this._options.borduresContenu_right > 0 &&
            aInfosZoneColonnes.dernierBloc
            ? ObjetStyle_1.GStyle.composeCouleurBordure(
                lCouleurBorduresContenu,
                this._options.borduresContenu_right,
                ObjetStyle_2.EGenreBordure.droite,
              )
            : '',
          this._options.borduresContenu_bottom > 0 &&
            (this._cache.lignesVisibles.length > 0 ||
              !this._hauteurAdapteAuContenu())
            ? ObjetStyle_1.GStyle.composeCouleurBordure(
                lCouleurBorduresContenu,
                this._options.borduresContenu_bottom,
                ObjetStyle_2.EGenreBordure.bas,
              )
            : '',
          this._options.borduresContenu_left > 0 &&
            aInfosZoneColonnes.indiceBloc === 0
            ? ObjetStyle_1.GStyle.composeCouleurBordure(
                lCouleurBorduresContenu,
                this._options.borduresContenu_left,
                ObjetStyle_2.EGenreBordure.gauche,
              )
            : '',
          this._options.paddingContenu_LR
            ? 'padding:0 ' + this._options.paddingContenu_LR + 'px;'
            : '',
          '">',
        );
        if (lAvecOmbre) {
          T.push(this.construireOmbreZoneScroll(aInfosZoneColonnes));
        }
        if (this.ListeTailles) {
          T.push(
            (0, tag_1.tag)(
              'div',
              {
                id: this.ScrollV.getIdZone(aInfosZoneColonnes.idScrollContenu),
                style: 'overflow:hidden;position:relative;',
                'ie-node': (0, jsx_1.jsxFuncAttr)(
                  'liste.getNodeScrollContenuParent',
                  aInfosZoneColonnes.idScrollContenu,
                ),
                role: 'presentation',
              },
              (aHtmlZone) => {
                const lTaillesGrid =
                  this._construireTaillesGrid(aInfosZoneColonnes);
                aHtmlZone.push(
                  IE.jsx.str(
                    IE.jsx.fragment,
                    null,
                    IE.jsx.str('div', {
                      id:
                        this.ids.cadreSelection + aInfosZoneColonnes.indiceBloc,
                      class: 'liste_conteneurCadreSelection',
                      role: 'presentation',
                    }),
                    IE.jsx.str(
                      'div',
                      {
                        id: this.ScrollV.getIdContenu(
                          aInfosZoneColonnes.idScrollContenu,
                        ),
                        role: 'presentation',
                        'ie-node': (0, jsx_1.jsxFuncAttr)(
                          'liste.getNodeScrollContenu',
                        ),
                        style:
                          lTaillesGrid.width > 0
                            ? ObjetStyle_1.GStyle.composeWidth(
                                lTaillesGrid.width,
                              )
                            : false,
                      },
                      () => {
                        return (
                          (aInfosZoneColonnes.indiceBloc === 0
                            ? this._construireFiltres()
                            : '') +
                          this.construireContenuListeInterne(aInfosZoneColonnes)
                        );
                      },
                    ),
                  ),
                );
                if (this._avecRollover()) {
                  aHtmlZone.push(
                    IE.jsx.str(
                      'div',
                      {
                        id:
                          this.ids.rolloverContenuLigne +
                          aInfosZoneColonnes.indiceBloc,
                        class: 'liste_conteneur_rollover left',
                        style:
                          'left:' +
                          (aInfosZoneColonnes.indiceBloc === 0 ? 0 : -1) +
                          'px;',
                      },
                      IE.jsx.str('div', null),
                    ),
                  );
                  aHtmlZone.push(
                    IE.jsx.str(
                      'div',
                      {
                        id:
                          this.ids.rolloverContenuColonne +
                          aInfosZoneColonnes.indiceBloc,
                        class: 'liste_conteneur_rollover top',
                      },
                      IE.jsx.str('div', null),
                    ),
                  );
                  aHtmlZone.push(
                    IE.jsx.str(
                      'div',
                      {
                        id:
                          this.ids.rolloverContenuCellule +
                          aInfosZoneColonnes.indiceBloc,
                        class: 'liste_conteneur_rollover center',
                      },
                      IE.jsx.str('div', null),
                    ),
                  );
                }
              },
            ),
          );
        } else {
          T.push(
            IE.jsx.str('div', {
              id: this.IdPremierElement,
              tabindex: '-1',
              style: 'width:100%; height:100%; overflow:auto',
            }),
          );
        }
        T.push('</div></div>');
        return T.join('');
      }
      _composeImpression(aProportion) {
        if (this.Donnees) {
          this.Donnees.enImpression = true;
        }
        try {
          const lObjetLargeur = {};
          Invocateur_1.Invocateur.evenement(
            'LargeurZoneImpression',
            lObjetLargeur,
          );
          const lCache = {
            largeurPage: lObjetLargeur.width,
            avecScrollHorizontal: false,
          };
          this._calculColonnesCachees(lCache);
          this._getInfosZonesColonnes(lCache);
          const lTaillesColonnes = this._calculerTaillesColonnes(lCache, true);
          const lRatio = (aProportion || 100) / 100;
          const T = [];
          let lTaille, lNombreColonnesFusion;
          const lColonnesVisibles = [];
          if (this.ListeTailles) {
            for (let I = 0; I < this.ListeTailles.length; I++) {
              if (this._estColonneVisible(I, lCache)) {
                lColonnesVisibles.push(I);
              }
            }
          }
          const lLigneFixeTailleColonne = function (aTab) {
            aTab.push('<tr>');
            lColonnesVisibles.forEach((aNumeroColonne) => {
              aTab.push(
                IE.jsx.str(
                  'td',
                  {
                    style:
                      'height:0px;line-height:0px;padding-top: 0px; padding-bottom: 0px;',
                  },
                  IE.jsx.str(
                    'div',
                    {
                      style:
                        lTaillesColonnes[aNumeroColonne].px > 0
                          ? ObjetStyle_1.GStyle.composeWidth(
                              lTaillesColonnes[aNumeroColonne].px * lRatio + 1,
                            )
                          : '',
                    },
                    '\u00A0',
                  ),
                ),
              );
            });
            aTab.push('</tr>');
          };
          T.push('<table class="ObjetListe_Impression tableConteneur">');
          if (!this.ListeTitres && this.ListeTailles) {
            T.push('<tr style="font-size:0px;">');
            lColonnesVisibles.forEach((aNumeroColonne) => {
              T.push(
                IE.jsx.str('td', {
                  style:
                    'padding-left:2px; padding-right:3px; height: 0px;' +
                    (lTaillesColonnes[aNumeroColonne].px > 0
                      ? 'width:' + lTaillesColonnes[aNumeroColonne].px + 'px;'
                      : ''),
                }),
              );
            });
            T.push('</tr>');
          } else if (this.ListeTitres) {
            for (let iLigne = 0; iLigne < this.ListeTitres.length; iLigne++) {
              T.push('<tr class="AlignementMilieu trTitre">');
              const lTitresLigne = this.ListeTitres[iLigne];
              for (let I = 0; lTitresLigne && I < lTitresLigne.length; I++) {
                if (
                  !lTitresLigne[I].fusion &&
                  (this._estColonneVisible(I, lCache) ||
                    (lTitresLigne[I + 1] &&
                      lTitresLigne[I + 1].fusion ===
                        TypeFusionTitreListe_1.TypeFusionTitreListe
                          .FusionGauche))
                ) {
                  let lNbCol = this._estColonneVisible(I, lCache) ? 1 : 0;
                  let lNbLigne = 1;
                  let lTailleColonneCourante =
                    lNbCol > 0 ? lTaillesColonnes[I].px * lRatio - 1 : 0;
                  for (
                    let iColonne = I + 1;
                    iColonne < lTitresLigne.length;
                    iColonne++
                  ) {
                    if (
                      lTitresLigne[iColonne].fusion ===
                        TypeFusionTitreListe_1.TypeFusionTitreListe
                          .FusionGauche &&
                      this._estColonneVisible(iColonne, lCache)
                    ) {
                      lNbCol++;
                      lTailleColonneCourante +=
                        lTaillesColonnes[iColonne].px * lRatio - 1;
                    } else if (
                      lTitresLigne[iColonne].fusion ===
                        TypeFusionTitreListe_1.TypeFusionTitreListe
                          .FusionGauche &&
                      !this._estColonneVisible(iColonne, lCache)
                    ) {
                      continue;
                    } else {
                      break;
                    }
                  }
                  if (lNbCol === 0) {
                    break;
                  }
                  for (let j = iLigne + 1; j < this.ListeTitres.length; j++) {
                    if (
                      this.ListeTitres[j][I] &&
                      this.ListeTitres[j][I].fusion ===
                        TypeFusionTitreListe_1.TypeFusionTitreListe.FusionHaute
                    ) {
                      lNbLigne += 1;
                    } else {
                      break;
                    }
                  }
                  const lColSpan =
                    lNbCol === 1 ? '' : ' colspan="' + lNbCol + '"';
                  const lRowSpan =
                    lNbLigne === 1 ? '' : ' rowspan="' + lNbLigne + '"';
                  const lChaineTitre = lTitresLigne[I].libelle;
                  const lChaineHtml = lTitresLigne[I].libelleHtml;
                  const lAvecTri = this.Donnees && !!this._cache.colonnesTri;
                  const lEstTriColonne =
                    lAvecTri &&
                    this._cache.colonnesTri[I] &&
                    lNbCol === 1 &&
                    (iLigne === this.ListeTitres.length - 1 ||
                      lNbLigne + iLigne === this.ListeTitres.length);
                  T.push(
                    '<th style="font-size:',
                    1.1 * lRatio,
                    'rem;',
                    I === 0 ? 'border-left:#000 1px solid;' : '',
                    '"' + lRowSpan + lColSpan,
                    '>',
                  );
                  if (lEstTriColonne) {
                    const lNumeroTri = this._triCourant.colonne.indexOf(I);
                    const lCarTri =
                      lNumeroTri >= 0 &&
                      this._triCourant.colonne[lNumeroTri] === I
                        ? this._triCourant.genre[lNumeroTri] ===
                          Enumere_TriElement_1.EGenreTriElement.Croissant
                          ? '&#x25BC;'
                          : '&#x25B2;'
                        : '';
                    const lLeft = lTailleColonneCourante / 2 - 9 / 2;
                    T.push(
                      '<div style="position:relative; top:0px; height:' +
                        lRatio * _CONST_hauteurImageTri +
                        'px;">',
                      '<div style="position:absolute; z-index:1; top:-1px; left:',
                      lLeft,
                      'px; font-size:',
                      0.9 * lRatio,
                      'rem;line-height:',
                      0.9 * lRatio,
                      'rem;">',
                      lCarTri,
                      '</div>',
                      '&nbsp;</div>',
                    );
                  }
                  T.push(
                    IE.jsx.str(
                      'div',
                      {
                        style:
                          lTailleColonneCourante > 0
                            ? 'width:' + lTailleColonneCourante + 'px;'
                            : '',
                        class: !lChaineHtml ? 'ie-ellipsis' : false,
                      },
                      lChaineHtml
                        ? lChaineHtml
                        : IE.jsx.str('span', null, lChaineTitre),
                    ),
                    '</th>',
                  );
                }
              }
              T.push('</tr>');
            }
          }
          if (this.ListeTailles && this.Donnees) {
            const lLignesVisibles = [];
            for (let J = 0, lNb = this.Donnees.getNbrLignes(); J < lNb; J++) {
              if (this._estLigneVisible(J)) {
                lLignesVisibles.push(J);
              }
            }
            for (let iIndice = 0; iIndice < lLignesVisibles.length; iIndice++) {
              const J = lLignesVisibles[iIndice];
              const lFusions = this._getFusionColonnesCellule({
                colonnesVisibles: lColonnesVisibles,
                ligne: J,
                indiceColonneDebut: lColonnesVisibles[0],
                indiceColonneFin:
                  lColonnesVisibles[lColonnesVisibles.length - 1],
                dernierBloc: true,
                tailles: lTaillesColonnes,
              });
              T.push('<tr valign="top" class="trContenu">');
              let lPremiereColonne = true;
              lColonnesVisibles.forEach((aNumeroColonne) => {
                if (
                  !lFusions[aNumeroColonne] ||
                  !lFusions[aNumeroColonne].nbCol
                ) {
                  return;
                }
                const lParamsCellule = this._getParamsCellule(
                  aNumeroColonne,
                  J,
                );
                lTaille = lFusions[aNumeroColonne].taille * lRatio;
                lNombreColonnesFusion = lFusions[aNumeroColonne].nbCol;
                let lIndentation =
                  this.Donnees.getIndentationCellule(lParamsCellule) || 0;
                let lSelection = false;
                if (
                  this._options.avecSelectionLigneSurImpression &&
                  lPremiereColonne &&
                  this._etatSelectionCellule({ ligne: J, colonne: -1 })
                ) {
                  lSelection = true;
                  lIndentation += 8;
                }
                const lInfosContenu = this._composeContenu(
                  Object.assign(lParamsCellule, {
                    taille: lTaille - lIndentation,
                    enImpression: true,
                    surProportion: aProportion,
                    avecContenuTronque:
                      this.Donnees.avecContenuTronque(lParamsCellule),
                  }),
                  this.Donnees.getTypeValeur(lParamsCellule),
                );
                T.push(
                  IE.jsx.str(
                    'td',
                    {
                      class: lSelection ? 'ligneSelectionImp' : '',
                      style:
                        'font-size:' +
                        1.1 * lRatio +
                        'rem;' +
                        (lPremiereColonne ? 'border-left:#000 1px solid;' : ''),
                      colspan:
                        lNombreColonnesFusion > 1
                          ? lNombreColonnesFusion
                          : false,
                    },
                    IE.jsx.str(
                      'div',
                      {
                        style:
                          (lTaille > 0
                            ? 'width:' + (lTaille - lIndentation) + 'px;'
                            : '') +
                          (lIndentation > 0
                            ? 'padding-left:' + lIndentation + 'px;'
                            : ''),
                      },
                      lInfosContenu.html,
                    ),
                  ),
                );
                lPremiereColonne = false;
              });
              T.push('</tr>');
            }
            lLigneFixeTailleColonne(T);
          }
          T.push('</table>');
          if (this._avecLigneTotal() && this.ListeTailles) {
            T.push(
              IE.jsx.str(
                'table',
                {
                  class: 'ObjetListe_Impression tableConteneur',
                  style: 'margin-top:1em;',
                },
                (aTab) => {
                  const lLignes =
                    (this.Donnees
                      ? this.Donnees.getListeLignesTotal()
                      : null) ||
                    new ObjetListeElements_1.ObjetListeElements().addElement(
                      null,
                    );
                  lLignes.parcourir((aArticle, aIndex) => {
                    aTab.push(
                      IE.jsx.str('tr', { class: 'trTotal' }, (aTab) => {
                        lColonnesVisibles.forEach((aNumeroColonne) => {
                          const lParams = this._getParamsCellule(
                            aNumeroColonne,
                            -1,
                            { surTotal: true },
                          );
                          if (aArticle) {
                            lParams.ligne = aIndex;
                            lParams.article = aArticle;
                          }
                          const lSansBordureDroite =
                            this._cache.colonnesSansBordureDroit[
                              aNumeroColonne
                            ];
                          const lClassTotal = this.Donnees
                            ? this.Donnees.getClassTotal(lParams)
                            : '';
                          const lAvecBorduresTotal =
                            this.Donnees &&
                            this.Donnees.avecBordureTotalVisible(lParams);
                          let lStyleTotal = '';
                          if (lAvecBorduresTotal) {
                            lStyleTotal =
                              ObjetStyle_1.GStyle.composeCouleurBordure(
                                '#000',
                                1,
                                (lSansBordureDroite
                                  ? 0
                                  : ObjetStyle_2.EGenreBordure.droite) +
                                  ObjetStyle_2.EGenreBordure.bas +
                                  ObjetStyle_2.EGenreBordure.gauche,
                              );
                          }
                          const lContenuTotal = this.Donnees
                            ? this.Donnees.getContenuTotal(lParams)
                            : '';
                          aTab.push(
                            IE.jsx.str(
                              'td',
                              {
                                style:
                                  'font-size:' +
                                  1.1 * lRatio +
                                  'rem;' +
                                  lStyleTotal,
                                class: lClassTotal,
                              },
                              IE.jsx.str(
                                'div',
                                {
                                  style: ObjetStyle_1.GStyle.composeWidth(
                                    lTaillesColonnes[aNumeroColonne].px *
                                      lRatio,
                                  ),
                                },
                                lContenuTotal ? lContenuTotal : '&nbsp;',
                              ),
                            ),
                          );
                        });
                      }),
                    );
                  });
                  lLigneFixeTailleColonne(aTab);
                },
              ),
            );
          }
          return T.join('');
        } finally {
          if (this.Donnees) {
            this.Donnees.enImpression = false;
          }
        }
      }
      _avecLigneTotal() {
        const lListeTotal = this.Donnees
          ? this.Donnees.getListeLignesTotal()
          : null;
        return (
          this._options.avecLigneTotal ||
          (lListeTotal && lListeTotal.count() > 0)
        );
      }
      _getListeLignesTotal() {
        return (
          (this.Donnees ? this.Donnees.getListeLignesTotal() : null) ||
          new ObjetListeElements_1.ObjetListeElements().addElement(null)
        );
      }
      _construireContenuTotal(aInfosZoneColonnes) {
        const T = [];
        const lTaillesGrid = this._construireTaillesGrid(aInfosZoneColonnes);
        let lSansBordureDroite = false;
        let lClassTotal = '';
        let lContenuTotal = '';
        let lDerniereColonne = false;
        let lAvecBordureTotalVisible = false;
        let lAvecPremiereBordureGauche = false;
        const lLignes = this._getListeLignesTotal();
        const lNbLignes = lLignes.count();
        lLignes.parcourir((aArticle, aIndexLigne) => {
          if (!this._cache.gridTotalAccess.ordres[aIndexLigne]) {
            this._cache.gridTotalAccess.ordres[aIndexLigne] = [];
          }
          const lTabAcessLigne =
            this._cache.gridTotalAccess.ordres[aIndexLigne];
          this._cache.gridTotalAccess.sansArticle = true;
          let lFusions = null;
          if (this.Donnees) {
            lFusions = this._getFusionColonnesCellule({
              total: true,
              getParamsCellule: (aNumeroColonne) => {
                return this._getParamsCellule(aNumeroColonne, -1, {
                  surTotal: true,
                  ligne: aIndexLigne,
                  article: aArticle,
                });
              },
              colonnesVisibles: aInfosZoneColonnes.colonnesVisibles,
              indiceColonneDebut: aInfosZoneColonnes.indiceColonneDebut,
              indiceColonneFin: aInfosZoneColonnes.indiceColonneFin,
              dernierBloc:
                aInfosZoneColonnes.dernierBloc ||
                (!aInfosZoneColonnes.dernierBloc &&
                  !aInfosZoneColonnes.estBlocFixe),
            });
          }
          let lIndexColonne = 0;
          aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
            if (
              lFusions &&
              (!lFusions[aNumeroColonne] || !lFusions[aNumeroColonne].nbCol)
            ) {
              if (lTabAcessLigne.length > 0) {
                lTabAcessLigne.push(lTabAcessLigne[lTabAcessLigne.length - 1]);
              }
              return;
            }
            lTabAcessLigne.push(aNumeroColonne);
            lIndexColonne += 1;
            const lParams = this._getParamsCellule(aNumeroColonne, -1, {
              surTotal: true,
            });
            if (aArticle) {
              lParams.ligne = aIndexLigne;
              lParams.article = aArticle;
              this._cache.gridTotalAccess.sansArticle = false;
            }
            let lStyleTotal = '';
            let lBordures = 0;
            if (this.Donnees) {
              lParams.typeCellule = this.Donnees.getTypeCelluleTotal(lParams);
              lSansBordureDroite =
                this._cache.colonnesSansBordureDroit[
                  lFusions[aNumeroColonne].fin
                ];
              lDerniereColonne =
                aInfosZoneColonnes.dernierBloc &&
                aInfosZoneColonnes.indiceColonneFin ===
                  lFusions[aNumeroColonne].fin;
              lClassTotal = this.Donnees.getClassTotal(lParams);
              lAvecBordureTotalVisible =
                this.Donnees.avecBordureTotalVisible(lParams);
              if (
                lAvecBordureTotalVisible &&
                !lSansBordureDroite &&
                !lDerniereColonne
              ) {
                lBordures += ObjetStyle_2.EGenreBordure.droite;
                lClassTotal += ' b-right';
              }
              if (
                !lAvecBordureTotalVisible &&
                !lDerniereColonne &&
                !this._cache.colonnesSansBordureDroit[
                  lFusions[aNumeroColonne].fin + 1
                ]
              ) {
                const lParamsColSuivante = this._getParamsCellule(
                  lFusions[aNumeroColonne].fin + 1,
                  -1,
                  { surTotal: true, ligne: aIndexLigne, article: aArticle },
                );
                lParamsColSuivante.typeCellule =
                  this.Donnees.getTypeCelluleTotal(lParamsColSuivante);
                if (this.Donnees.avecBordureTotalVisible(lParamsColSuivante)) {
                  lBordures += ObjetStyle_2.EGenreBordure.droite;
                  lClassTotal += ' b-right';
                }
              }
              if (lAvecBordureTotalVisible) {
                lBordures += ObjetStyle_2.EGenreBordure.bas;
                lClassTotal += ' b-bottom';
              }
              if (!lAvecBordureTotalVisible && aIndexLigne < lNbLignes - 1) {
                const lParamsLigneSuiv = Object.assign({}, lParams, {
                  ligne: aIndexLigne + 1,
                  article: lLignes.get(aIndexLigne + 1),
                });
                lParamsLigneSuiv.typeCellule =
                  this.Donnees.getTypeCelluleTotal(lParamsLigneSuiv);
                if (this.Donnees.avecBordureTotalVisible(lParamsLigneSuiv)) {
                  lBordures += ObjetStyle_2.EGenreBordure.bas;
                  lClassTotal += ' b-bottom';
                }
              }
              if (
                aInfosZoneColonnes.indiceBloc === 0 &&
                lFusions[aNumeroColonne].debut === 0 &&
                aIndexLigne === 0
              ) {
                lAvecPremiereBordureGauche = lAvecBordureTotalVisible;
              }
              const lNbColonnes = lFusions[aNumeroColonne].nbCol;
              lStyleTotal =
                this._composePaddingCellule() +
                `min-height:${this._getHeightCellule(lParams)}px;` +
                this.Donnees.getStyleTotal(lParams) +
                'grid-column:' +
                lIndexColonne +
                (lNbColonnes > 1 ? ' / ' + (lIndexColonne + lNbColonnes) : '') +
                ';' +
                'grid-row:' +
                (aIndexLigne + 1) +
                ';';
              lContenuTotal = this.Donnees.getContenuTotal(lParams);
              if (lNbColonnes > 1) {
                lIndexColonne += lNbColonnes - 1;
              }
            }
            const lTaille =
              (lFusions
                ? lFusions[aNumeroColonne].taille
                : this._cache.taillesColonne[aNumeroColonne].px) +
              (lDerniereColonne ||
              ObjetStyle_2.EGenreBordure.avecBordure(
                lBordures,
                ObjetStyle_2.EGenreBordure.droite,
              )
                ? 0
                : 1) +
              (ObjetStyle_2.EGenreBordure.avecBordure(
                lBordures,
                ObjetStyle_2.EGenreBordure.gauche,
              )
                ? -1
                : 0);
            T.push(
              IE.jsx.str(
                'div',
                {
                  id: this.getIdCelluleTotal(
                    lParams.colonne,
                    lParams.ligne,
                    false,
                  ),
                  role: 'row',
                  'aria-rowindex': aIndexLigne + 1 + (this.ListeTitres ? 1 : 0),
                  'aria-hidden': 'true',
                  'data-row': lParams.ligne,
                  'data-col': lParams.colonne,
                  'ie-node': 'liste.getNodeCelluleTotal',
                  class: ['liste_cellule_total', lClassTotal],
                  style: lStyleTotal,
                },
                IE.jsx.str(
                  'div',
                  {
                    id: this.getIdCelluleTotal(
                      lParams.colonne,
                      lParams.ligne,
                      true,
                    ),
                    style: ObjetStyle_1.GStyle.composeWidth(lTaille),
                    role: 'gridcell',
                    tabindex: '-1',
                    'data-row': lParams.ligne,
                    'data-col': lParams.colonne,
                    'ie-node': 'liste.getNodeCelluleTotalCell',
                    'aria-colindex': this.getIndiceColonneVisibleDeColonne(
                      lParams.colonne,
                    ),
                  },
                  lContenuTotal ? lContenuTotal : '&nbsp;',
                ),
              ),
            );
          });
        });
        const lHtml = IE.jsx.str(
          'div',
          {
            id: this.ScrollH.getIdContenu(aInfosZoneColonnes.idScrollTotal),
            role: 'presentation',
            class: 'liste_scroll_total',
            style:
              lTaillesGrid.styleGrid +
              (lTaillesGrid.width > 0
                ? ObjetStyle_1.GStyle.composeWidth(lTaillesGrid.width)
                : ''),
          },
          T.join(''),
        );
        return {
          html: lHtml,
          avecPremiereBordureGauche: lAvecPremiereBordureGauche,
          avecDerniereBordureDroite:
            aInfosZoneColonnes.dernierBloc && lAvecBordureTotalVisible,
        };
      }
      _construireLigneTotal(aInfosZoneColonnes) {
        if (!this.ListeTailles) {
          return '';
        }
        const lTotal = this._construireContenuTotal(aInfosZoneColonnes);
        return IE.jsx.str(
          'div',
          {
            class: this.Donnees ? false : 'hide',
            style:
              aInfosZoneColonnes.indiceBloc === 0
                ? ObjetStyle_1.GStyle.composeCouleurBordure(
                    lTotal.avecPremiereBordureGauche
                      ? this._options.couleursListe.editable.getBordure(false)
                      : 'transparent',
                    1,
                    ObjetStyle_2.EGenreBordure.gauche,
                  )
                : '' + aInfosZoneColonnes.dernierBloc
                  ? ObjetStyle_1.GStyle.composeCouleurBordure(
                      lTotal.avecDerniereBordureDroite
                        ? this._options.couleursListe.editable.getBordure(false)
                        : 'transparent',
                      1,
                      ObjetStyle_2.EGenreBordure.droite,
                    )
                  : '',
          },
          IE.jsx.str(
            'div',
            {
              id: this.idTotaux + aInfosZoneColonnes.indiceBloc,
              class: 'conteneur-ombre-zone',
            },
            this.construireOmbreZoneScroll(aInfosZoneColonnes),
            IE.jsx.str(
              'div',
              {
                id: this.ScrollH.getIdZone(aInfosZoneColonnes.idScrollTotal),
                style: 'overflow:hidden;position:relative;',
              },
              lTotal.html,
            ),
          ),
        );
      }
      construireOmbreZoneScroll(aInfosZoneColonnes) {
        const T = [];
        if (!aInfosZoneColonnes.estBlocFixe) {
          if (aInfosZoneColonnes.indiceBloc > 0) {
            T.push(IE.jsx.str('div', { class: 'ombre gauche' }));
          }
          if (!aInfosZoneColonnes.dernierBloc) {
            T.push(IE.jsx.str('div', { class: 'ombre droite' }));
          }
        }
        return T.join('');
      }
      composeCreation(J, aTaillesGrid, aAvecTraitHaut) {
        const T = [];
        const LOnKeyUpNav =
          this.Nom +
          '.navigationClavier (id); if (GNavigateur.isToucheFleche ()) GNavigateur.stopperEvenement (event);';
        const lUneSeuleColonneCreation = this.ListeCreations.length === 1;
        let LId;
        const lNbColonnesVisible = lUneSeuleColonneCreation
          ? 1
          : aTaillesGrid.tabWidth.length;
        this._avecLigneCreationUnique = false;
        if (aTaillesGrid.tabWidth.length > 0) {
          this._avecLigneCreationUnique = true;
          LId = this._getIdCreation(-1, J);
          const lParams = this._getParamsCellule(-1, J, { surCreation: true });
          const lAvecInputFile =
            this.Donnees && this.Donnees.avecSelecFile(lParams);
          T.push(
            '<div id="',
            LId +
              '_Creation" role="row" tabindex="0" ie-node="liste.nodeSurLigneCreationUnique(',
            J,
            ')" class="ligne-creation-modele" style="',
            aTaillesGrid.width > 0
              ? ObjetStyle_1.GStyle.composeWidth(aTaillesGrid.width)
              : '',
            '">',
          );
          delete this._cache.ouvrirSelecteurFileParLigne[J + '_-1'];
          T.push(
            IE.jsx.str(
              'div',
              {
                id: LId,
                class: this.getClassCreation(),
                role: 'gridcell',
                style:
                  J === -1
                    ? aAvecTraitHaut
                      ? ObjetStyle_1.GStyle.composeCouleurBordure(
                          this._options.couleursListe.editable.getBordure(
                            false,
                          ),
                          1,
                          ObjetStyle_2.EGenreBordure.haut,
                        )
                      : ''
                    : ObjetStyle_1.GStyle.composeCouleurBordure(
                        this._options.couleursListe.editable.getBordure(false),
                        1,
                        ObjetStyle_2.EGenreBordure.bas,
                      ),
              },
              IE.jsx.str(
                'div',
                {
                  id: LId + '_div',
                  tabindex: '-1',
                  class: 'liste_celluleGrid divLigneCreation',
                  onkeyup: LOnKeyUpNav,
                  'aria-label':
                    ObjetWAI_1.GObjetWAI.getInfo(
                      ObjetWAI_1.EGenreObjet.NouvelElement,
                    ) +
                    ' ' +
                    ObjetWAI_1.GObjetWAI.getInfo(
                      ObjetWAI_1.EGenreObjet.AvecEdition,
                    ),
                  'ie-model': lAvecInputFile
                    ? (0, jsx_1.jsxFuncAttr)('liste.modeleSelecFileCellule', [
                        J,
                        -1,
                        true,
                      ])
                    : false,
                  'ie-selecfile': !!lAvecInputFile,
                  style: this._composePaddingCellule(),
                },
                IE.jsx.str(
                  'div',
                  {
                    style: `height:${this._getHeightCellule(lParams) - 2 * this._options.paddingCelluleTB}px;`,
                  },
                  IE.jsx.str(
                    'div',
                    null,
                    _ObjetListe_1.ObjetListe.getTitreCreation(
                      this._options.titreCreation,
                    ),
                  ),
                ),
              ),
            ),
          );
          T.push('</div>');
        }
        T.push(
          '<div id="',
          LId +
            '_Creation_Edit" tabindex="-1" ie-event="click-keyup->liste.eventSurLigneCreation"',
          ' class="liste-creation-edition"',
          ' style="',
          this._avecLigneCreationUnique ? 'display:none;' : '',
          !lUneSeuleColonneCreation ? aTaillesGrid.styleGrid : '',
          aTaillesGrid.width > 0
            ? ObjetStyle_1.GStyle.composeWidth(aTaillesGrid.width)
            : '',
          '">',
        );
        let lTaille;
        aTaillesGrid.tabWidth.every((aInfosCol, aIndex) => {
          if (
            !lUneSeuleColonneCreation ||
            this.ListeCreations[0] === aInfosCol.colonne ||
            this._colonneCreationUniqueEnErreur()
          ) {
            lTaille =
              lNbColonnesVisible === 1 ? aTaillesGrid.width : aInfosCol.width;
            const lEstDerniereColonne =
              lNbColonnesVisible === 1 ||
              aIndex === aTaillesGrid.tabWidth.length - 1;
            const lParams = this._getParamsCellule(aInfosCol.colonne, J, {
                surCreation: true,
              }),
              LId = this._getIdCreation(aInfosCol.colonne, J);
            const lListeBordures =
              J === -1
                ? (aAvecTraitHaut ? ObjetStyle_2.EGenreBordure.haut : 0) +
                  (!lEstDerniereColonne ? ObjetStyle_2.EGenreBordure.droite : 0)
                : ObjetStyle_2.EGenreBordure.bas +
                  (!lEstDerniereColonne
                    ? ObjetStyle_2.EGenreBordure.droite
                    : 0);
            T.push(
              IE.jsx.str(
                'div',
                {
                  id: LId,
                  class: this.getClassCreation() + ' Maigre',
                  role: 'presentation',
                  style:
                    this._composePaddingCellule() +
                    (lTaille > 0
                      ? ObjetStyle_1.GStyle.composeWidth(lTaille)
                      : '') +
                    (lListeBordures > 0
                      ? ObjetStyle_1.GStyle.composeCouleurBordure(
                          this._options.couleursListe.editable.getBordure(
                            false,
                          ),
                          1,
                          lListeBordures,
                        )
                      : ''),
                },
                IE.jsx.str(
                  'div',
                  {
                    id: LId + '_div',
                    tabindex: '-1',
                    role: 'presentation',
                    onkeyup: LOnKeyUpNav,
                    style: `height:${this._getHeightCellule(lParams) - 2 * this._options.paddingCelluleTB}px;`,
                    'arial-label': !this._avecLigneCreationUnique
                      ? ObjetWAI_1.GObjetWAI.getInfo(
                          ObjetWAI_1.EGenreObjet.NouvelElement,
                        ) +
                        ' ' +
                        ObjetWAI_1.GObjetWAI.getInfo(
                          ObjetWAI_1.EGenreObjet.AvecEdition,
                        )
                      : false,
                  },
                  lNbColonnesVisible === 1
                    ? _ObjetListe_1.ObjetListe.getTitreCreation(
                        this._options.titreCreation,
                      )
                    : '',
                ),
              ),
            );
            if (lUneSeuleColonneCreation) {
              return false;
            }
          }
          return true;
        });
        T.push('</div>');
        return T.join('');
      }
      _composeCoche(aParams) {
        const lValeur = this.Donnees._getValeur(aParams);
        const lHintHtml = this.Donnees.getHintHtmlForce(aParams);
        const lHint = this.Donnees.getHintForce(aParams);
        const lAttr = {
          'ie-hint': lHintHtml ? `'${lHintHtml}'` : false,
          title: !lHintHtml && lHint ? lHint : false,
        };
        if (typeof lValeur === 'string' && lValeur !== '') {
          return IE.jsx.str(
            'div',
            Object.assign(
              {
                role: 'checkbox',
                'aria-checked': 'true',
                'aria-label':
                  'Coché',
                class: lValeur,
                style: 'width:18px; margin:0 auto;',
              },
              lAttr,
            ),
            '\u00A0',
          );
        }
        if (
          lValeur === true ||
          lValeur === ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte
        ) {
          return IE.jsx.str(
            'i',
            Object.assign(
              {
                role: 'checkbox',
                'aria-checked': 'true',
                'aria-label':
                  'Coché',
                class: 'Image_CocheVerte as-icon m-y-none m-x-top i-large',
              },
              lAttr,
            ),
          );
        }
        if (
          lValeur === ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
        ) {
          return IE.jsx.str(
            'i',
            Object.assign(
              {
                role: 'checkbox',
                'aria-checked': 'mixed',
                'aria-label':
                  'Partiellement coché',
                class: 'IconCocheGrise  m-y-none m-x-top i-large',
              },
              lAttr,
            ),
            '\u00A0',
          );
        }
        if (
          !lValeur ||
          lValeur === ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Aucune
        ) {
          return IE.jsx.str(
            'div',
            Object.assign(
              { style: 'width: 18px; height:16px; margin:0 auto;' },
              lAttr,
              {
                role: 'checkbox',
                'aria-checked': 'false',
                'aria-label':
                  'Decoché',
              },
            ),
          );
        }
        return '';
      }
      _composeContenu(aParamsCellule, aTypeValeur) {
        switch (aTypeValeur) {
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Image:
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon:
            return {
              html: this.composeIconEtImage(
                aParamsCellule,
                aTypeValeur ===
                  ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Icon,
              ),
            };
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche:
            return {
              html:
                '<div class="AlignementMilieu" style="width: 100%;">' +
                this._composeCoche(aParamsCellule) +
                '</div>',
            };
          case ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
            .CocheDeploiement: {
            const lEstDeploiement =
              this.Donnees.estUnDeploiement(aParamsCellule);
            let lDeploye = false;
            if (lEstDeploiement) {
              lDeploye = this.Donnees._estDeploye(aParamsCellule.ligne);
              aParamsCellule._estDeploiement = { expanded: !!lDeploye };
            }
            return {
              html: lEstDeploiement
                ? '<div class="' +
                  (lDeploye
                    ? 'Image_DeploiementListe_Deploye'
                    : 'Image_DeploiementListe_NonDeploye') +
                  '">&nbsp;</div>'
                : '<div style="height:13px;"></div>',
            };
          }
        }
        const lInfosContenu = { html: '', attrTitleCellule: '' };
        const H = [];
        const lParams = Object.assign(aParamsCellule, {
          surEdition: false,
          typeValeur: aTypeValeur,
        });
        const lContenuAffichage = this.Donnees._getContenuAffichage(lParams);
        const lClassLigne =
          (this.Donnees.getClass(lParams) || '') +
          (lParams.avecContenuTronque ? ' Insecable' : '');
        let lStyle = this.Donnees.getStyle(lParams) || '';
        if (lStyle && lStyle.trim && lStyle.endsWith) {
          lStyle = lStyle.trim();
          if (!lStyle.endsWith(';')) {
            lStyle += ';';
          }
        }
        let lAttrTitle = {};
        if (!this.Donnees.enConstruction_cacheRechercheTexte) {
          if (lContenuAffichage.titleHtml) {
            if (lContenuAffichage.titleHtml.startsWith) {
              let lTitle = lContenuAffichage.titleHtml;
              if (!lTitle.startsWith("'") && !lTitle.endsWith("'")) {
                lTitle = `'${lTitle}'`;
              }
              lAttrTitle['ie-hint'] = lTitle;
            }
          } else {
            lAttrTitle.title = lContenuAffichage.title || false;
          }
        }
        if (!aParamsCellule.avecDeploiementDansCellule) {
          lInfosContenu.attrTitleCellule = lAttrTitle;
          lAttrTitle = {};
        }
        H.push(
          IE.jsx.str(
            'div',
            {
              style:
                lStyle +
                (lParams.taille > 0
                  ? ' width:' + lParams.taille + 'px;overflow:hidden;'
                  : '') +
                '',
              class: ['liste_contenu_ligne', lClassLigne ? lClassLigne : ''],
              title: lAttrTitle.title || false,
              'ie-title': lAttrTitle['ie-hint'] || false,
              'ie-ellipsis':
                lContenuAffichage.attrOverflow === 'ie-ellipsis' || false,
              'ie-hintoverflow':
                lContenuAffichage.attrOverflow === 'ie-hintoverflow' || false,
              'aria-labelledby': lContenuAffichage.idsLabel || false,
            },
            lContenuAffichage.valeur,
          ),
        );
        lInfosContenu.html = ObjetChaine_1.GChaine.avecEspaceSiVide(H.join(''));
        return lInfosContenu;
      }
      _composeContenuCellule(aParamsCellule, aLargeur) {
        const H = [];
        let lTaille = aLargeur;
        const lType = this.Donnees.getTypeValeur(aParamsCellule);
        let lHeightContenu =
          this.Donnees.getHauteurMinContenuCellule(aParamsCellule);
        if (!lHeightContenu) {
          lHeightContenu =
            this._getHeightCellule(aParamsCellule) -
            2 * this._options.paddingCelluleTB -
            1;
        }
        const lStyle = `min-height:${lHeightContenu}px;`;
        let lAvecDeploiement = false;
        if (
          this._deploiementSurCellule(aParamsCellule) &&
          lType !==
            ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule
              .CocheDeploiement &&
          this.Donnees.avecImageSurColonneDeploiement(aParamsCellule)
        ) {
          const lAvecEvent =
            !this.Donnees.avecEventDeploiementSurCellule(aParamsCellule);
          H.push(
            IE.jsx.str(
              'div',
              {
                class: [
                  'liste_contenu_cellule_deploiement',
                  lAvecEvent ? ' AvecMain' : '',
                ],
                style: lStyle,
                'ie-node': lAvecEvent
                  ? (0, jsx_1.jsxFuncAttr)('liste.nodeDeploiementLigne', [
                      aParamsCellule.ligne,
                      aParamsCellule.colonne,
                    ])
                  : '',
              },
              IE.jsx.str('div', {
                class: this.Donnees._estDeploye(aParamsCellule.ligne)
                  ? 'Image_DeploiementListe_Deploye'
                  : 'Image_DeploiementListe_NonDeploye',
              }),
            ),
          );
          lTaille = lTaille - 8 - 2;
          lAvecDeploiement = true;
        }
        const lInfosContenu = this._composeContenu(
          Object.assign(aParamsCellule, {
            taille: lTaille,
            avecContenuTronque: this.Donnees.avecContenuTronque(aParamsCellule),
            avecDeploiementDansCellule: lAvecDeploiement,
          }),
          lType,
        );
        H.push(
          IE.jsx.str(
            'div',
            {
              class: 'liste_contenu_cellule_contenu',
              style: ObjetStyle_1.GStyle.composeWidth(lTaille) + lStyle,
            },
            lInfosContenu.html,
          ),
        );
        lInfosContenu.html = H.join('');
        return lInfosContenu;
      }
      _surPreResize() {
        this._cache.calculsTailleColonnesAFaire = true;
        if (!this._donneesRecus) {
          return;
        }
        this.ScrollV.vider();
        if (this._cache.avecScrollHorizontal) {
          this.ScrollH.vider();
        }
        this._enResize = ObjetHtml_1.GHtml.getDisplay(this.Nom);
        if (!this._enResize) {
          return;
        }
        this._annulerCreation();
        this._finaliserEdition({ ignorerActualisation: true });
        this._nettoyerElementsEditionEnCours();
        clearTimeout(this._cache.rechercheTexte.timerSaisie);
        ObjetHtml_1.GHtml.setHtml(this.Nom, '&nbsp;', { ignorerScroll: true });
      }
      _surPostResize() {
        if (!this._donneesRecus) {
          return;
        }
        if (this._enResize && this.Actif) {
          this._actualiser({ conserverSelection: true, sansTriDonnees: true });
        }
        delete this._enResize;
      }
      afficherMenuContextuelTri(aColonne) {
        const lGetTri = (aNumeroTri) => {
          let lGenreTri = this._triCourant.genre[aNumeroTri];
          if (this._triCourant.colonne[aNumeroTri] === aColonne) {
            lGenreTri =
              this._triCourant.genre[aNumeroTri] ===
              Enumere_TriElement_1.EGenreTriElement.Croissant
                ? Enumere_TriElement_1.EGenreTriElement.Decroissant
                : Enumere_TriElement_1.EGenreTriElement.Croissant;
          }
          return lGenreTri;
        };
        if (this._triCourant.nombreTri > 1) {
          ObjetMenuContextuel_1.ObjetMenuContextuel.afficher({
            pere: this,
            initCommandes: (aInstance) => {
              for (let i = 0; i < this._triCourant.nombreTri; i++) {
                aInstance.add(
                  'Tri' +
                    ' ' +
                    (i + 1),
                  true,
                  function (aNumeroTri) {
                    this.setColonneTri(
                      aColonne,
                      lGetTri(aNumeroTri),
                      aNumeroTri,
                    );
                  }.bind(this, i),
                  {
                    imageFormate: true,
                    image: IE.jsx.str(
                      'div',
                      {
                        style:
                          'margin-left:auto; margin-right:auto; height:9px;',
                        class: 'AlignementMilieu',
                      },
                      this._getDessinCurseurTri({
                        tri:
                          i === 0
                            ? _ObjetListe_1.NSListe.FlecheTri.principal
                            : _ObjetListe_1.NSListe.FlecheTri.secondaire,
                        triCroissant:
                          lGetTri(i) ===
                          Enumere_TriElement_1.EGenreTriElement.Croissant,
                        top: 1,
                        left: 1,
                      }),
                    ),
                  },
                );
              }
            },
          });
        }
      }
      _surDblClickCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos) {
          return;
        }
        const lParams = lInstance._getParamsCellule(
          lInfos.colonne,
          lInfos.ligne,
        );
        if (lInstance.Donnees && lParams.ligne > -1) {
          if (lInstance.Donnees.avecEvenementSelectionDblClick(lParams)) {
            if (lInstance.Pere && lInstance.Evenement) {
              lInstance.callback.appel(
                lInstance._getParamsCallback(
                  Enumere_EvenementListe_1.EGenreEvenementListe
                    .SelectionDblClick,
                  lParams.colonne,
                  lParams.ligne,
                ),
                Enumere_EvenementListe_1.EGenreEvenementListe.SelectionDblClick,
                lParams.colonne,
                lParams.ligne,
              );
            }
          }
        }
      }
      _getHeightListeHorsContenu() {
        let lResult =
          ObjetPosition_1.GPosition.getHeight(this.ids.titre + '0') +
          (this._zoneContenuAvecTraitHaut()
            ? this._options.borduresContenu_top
            : 0) +
          this._options.borduresContenu_bottom;
        lResult +=
          this._options.borduresContenu_top +
          this._options.borduresContenu_bottom;
        if (
          this._cache.avecScrollHorizontal &&
          this._cache.reserverPlaceScrollHorizontal
        ) {
          lResult += this.ScrollH.Largeur;
        }
        if (this._options.piedDeListe && this._options.piedDeListe.height > 0) {
          lResult += this._options.piedDeListe.height + 5;
        }
        if (this._avecLigneTotal()) {
          lResult += $(
            ObjetHtml_1.GHtml.getElement(this.idTotaux + '0'),
          ).outerHeight(true);
        }
        $(
          `#${this.Nom.escapeJQ()} .liste_btnentete, #${this.Nom.escapeJQ()} .liste-totale-fd.liste-footer, #${this.Nom.escapeJQ()} .liste-totale-fd.liste-header`,
        ).each(function () {
          const lRect = ObjetPosition_1.GPosition.getClientRect(this);
          lResult += Math.ceil(lRect.outerHeight);
        });
        return lResult;
      }
      _surMouseDownCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        delete lInstance._cache.infosMouseDownCellule_apresFinEdition;
        if (!lInfos) {
          return;
        }
        lInstance._surEventDownLigne({
          event: aEvent,
          ligne: lInfos.ligne,
          colonne: lInfos.colonne,
          gestionShift: true,
          gestionMultiSelection: true,
        });
      }
      _surMouseUpCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        const lInfosMouseDown_afe =
          lInstance._cache.infosMouseDownCellule_apresFinEdition;
        delete lInstance._cache.infosMouseDownCellule_apresFinEdition;
        if (lInstance._estEventSansSelect(aEvent)) {
          return;
        }
        $(this).find('>article').focus();
        if (!lInfos) {
          return;
        }
        if (
          lInfos &&
          lInfosMouseDown_afe &&
          lInfosMouseDown_afe.ligne === lInfos.ligne &&
          lInfosMouseDown_afe.colonne === lInfos.colonne
        ) {
          lInstance._editionDebSurSelection(
            lInfos.colonne,
            lInfos.ligne,
            aEvent,
          );
        }
      }
      _surContextMenuCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (aEvent.originalEvent) {
          aEvent.originalEvent.__contextMenuSurContenu__ = true;
        }
        if (!lInfos || !lInstance.Donnees) {
          return;
        }
        const lParams = lInstance._getParamsCellule(
          lInfos.colonne,
          lInfos.ligne,
          { event: aEvent },
        );
        if (
          lInstance.Donnees.avecMenuContextuel(lParams) &&
          (lInstance.Donnees.options.avecContextMenuSansSelection ||
            lInstance._etatSelectionCellule({
              ligne: lParams.ligne,
              colonne: lParams.colonne,
            })) &&
          !UtilitaireMenuContextuelNatif_1.UtilitaireMenuContextuelNatif.accepter(
            aEvent,
          )
        ) {
          lInstance._ouvrirMenuContextuel(lParams);
        }
      }
      _getBlocDeNumeroColonne(aNumeroColonne) {
        let lInfosBloc = null;
        for (
          let lIndiceBloc = 0;
          lIndiceBloc < this._cache.infosZonesColonnes.length;
          lIndiceBloc++
        ) {
          lInfosBloc = this._cache.infosZonesColonnes[lIndiceBloc];
          if (
            aNumeroColonne >= lInfosBloc.indiceColonneDebut &&
            aNumeroColonne <= lInfosBloc.indiceColonneFin
          ) {
            break;
          }
        }
        return lInfosBloc;
      }
      _afficherRollover(aElement, aLigneColonne) {
        let lPosGabaritColonne = null;
        let lNumeroColonne = aLigneColonne.colonne;
        const lInfosBloc = this._getBlocDeNumeroColonne(aLigneColonne.colonne);
        if (!lInfosBloc) {
          return;
        }
        while (
          !lPosGabaritColonne &&
          lNumeroColonne >= lInfosBloc.indiceColonneDebut
        ) {
          lPosGabaritColonne = lInfosBloc.gabaritColonnesTitre[lNumeroColonne];
          if (!lPosGabaritColonne) {
            lNumeroColonne += -1;
          }
        }
        if (!lPosGabaritColonne) {
          return;
        }
        const lPosition = ObjetPosition_1.GPosition.getRect(aElement);
        let lWidth = lPosGabaritColonne.width + 1;
        let lWidthBloc;
        const lHeight = lPosition.height;
        let lLeftBloc;
        const lTop = lPosition.top + this.ScrollV.Position;
        const lEstPremiereLigne =
          aLigneColonne.ligne === this._cache.lignesVisibles[0];
        const lEstPremiereColonne =
          lInfosBloc.indiceBloc === 0 &&
          lInfosBloc.colonnesVisibles[0] === lNumeroColonne;
        const lEcartColonne = lEstPremiereColonne ? 1 : 0;
        const lEcartLigne = 0;
        let lForcerAffichageBlocPrec;
        let lEstBlocCourant;
        if (
          lInfosBloc.dernierBloc &&
          lInfosBloc.indiceColonneFin === lNumeroColonne &&
          this._cache.infosZonesColonnes.length > 1
        ) {
          lWidth += 1;
        }
        for (let lIBloc = 0; lIBloc <= lInfosBloc.indiceBloc; lIBloc++) {
          lForcerAffichageBlocPrec =
            lInfosBloc.indiceBloc > 0 &&
            lNumeroColonne === lInfosBloc.indiceColonneDebut &&
            lIBloc === lInfosBloc.indiceBloc - 1;
          lEstBlocCourant = lIBloc === lInfosBloc.indiceBloc;
          lLeftBloc = lEstBlocCourant
            ? lPosGabaritColonne.left - 1 + lEcartColonne
            : this._cache.infosZonesColonnes[lIBloc].largeurBloc - 1;
          lWidthBloc = lEstBlocCourant ? lWidth - lEcartColonne : 1;
          if (lEstBlocCourant || lForcerAffichageBlocPrec) {
            $('#' + this.ids.rolloverTitre.escapeJQ() + lIBloc)
              .show()
              .css({ left: lLeftBloc, width: lWidthBloc });
          } else {
            $('#' + this.ids.rolloverTitre.escapeJQ() + lIBloc).hide();
          }
          if (lEstPremiereColonne) {
            $('#' + this.ids.rolloverContenuLigne.escapeJQ() + lIBloc).hide();
          } else {
            $('#' + this.ids.rolloverContenuLigne.escapeJQ() + lIBloc)
              .show()
              .css({
                top: lTop - 1 + lEcartLigne,
                height: lHeight + 1 - lEcartLigne,
                width:
                  (lIBloc === 0 && lInfosBloc.indiceBloc > 0
                    ? this._cache.infosZonesColonnes[lIBloc].largeurBloc + 2
                    : lLeftBloc) + (lInfosBloc.indiceBloc > 0 ? 1 : 0),
              });
          }
          if (
            !lEstPremiereLigne &&
            (lEstBlocCourant || lForcerAffichageBlocPrec)
          ) {
            $('#' + this.ids.rolloverContenuColonne.escapeJQ() + lIBloc)
              .show()
              .css({ left: lLeftBloc, height: lTop, width: lWidthBloc });
          } else {
            $('#' + this.ids.rolloverContenuColonne.escapeJQ() + lIBloc).hide();
          }
          if (lEstBlocCourant || lForcerAffichageBlocPrec) {
            $('#' + this.ids.rolloverContenuCellule.escapeJQ() + lIBloc)
              .show()
              .css({
                left: lLeftBloc,
                top: lTop - 1 + lEcartLigne,
                height: lHeight + 1 - lEcartLigne,
                width: lWidthBloc,
              });
          } else {
            $('#' + this.ids.rolloverContenuCellule.escapeJQ() + lIBloc).hide();
          }
        }
        if (
          !lInfosBloc.dernierBloc &&
          !lInfosBloc.estBlocFixe &&
          lNumeroColonne === lInfosBloc.indiceColonneFin
        ) {
          const lIndiceBloc = lInfosBloc.indiceBloc + 1;
          $('#' + this.ids.rolloverTitre.escapeJQ() + lIndiceBloc)
            .show()
            .css({ left: -1, width: 0 });
          $('#' + this.ids.rolloverContenuColonne.escapeJQ() + lIndiceBloc)
            .show()
            .css({ left: -1, height: lTop, width: 0 });
          $('#' + this.ids.rolloverContenuCellule.escapeJQ() + lIndiceBloc)
            .show()
            .css({
              left: -1,
              top: lTop - 1 + lEcartLigne,
              height: lHeight + 1 - lEcartLigne,
              width: 0,
            });
        }
        return true;
      }
      _gererRollover(aAfficher, aElement, aLigneColonne) {
        if (
          aAfficher &&
          this._avecRollover() &&
          aElement &&
          aLigneColonne &&
          this._afficherRollover(aElement, aLigneColonne)
        ) {
          this._cache.rolloverVisible = true;
        } else if (this._cache.rolloverVisible) {
          this._cache.rolloverVisible = false;
          this._cache.infosZonesColonnes.forEach((aBloc) => {
            $(
              '#' + this.ids.rolloverTitre.escapeJQ() + aBloc.indiceBloc,
            ).hide();
            $(
              '#' + this.ids.rolloverContenuLigne.escapeJQ() + aBloc.indiceBloc,
            ).hide();
            $(
              '#' +
                this.ids.rolloverContenuColonne.escapeJQ() +
                aBloc.indiceBloc,
            ).hide();
            $(
              '#' +
                this.ids.rolloverContenuCellule.escapeJQ() +
                aBloc.indiceBloc,
            ).hide();
          });
        }
      }
      _parcourirCellulesVoileBleu(aParamsCellule, aFunc) {
        this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
          this._cache.lignesVisibles.forEach((aLigne) => {
            aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
              const lParamsCelluleCible = this._getParamsCellule(
                aNumeroColonne,
                aLigne,
              );
              if (
                this.Donnees.estConcerneParSurvolCelluleVisible(
                  lParamsCelluleCible,
                  aParamsCellule,
                )
              ) {
                const lNode = ObjetHtml_1.GHtml.getElement(
                  this.getIdCellule(aNumeroColonne, aLigne),
                );
                if (lNode) {
                  aFunc(lNode);
                }
              }
            });
          });
        });
      }
      _gererHoverSurCellule(aNode, aInfos, aEvent) {
        if (GNavigateur.isTactile) {
          return;
        }
        const lJNodeOrigine = $(aNode);
        const lParamsCellule = this._getParamsCellule(
          aInfos.colonne,
          aInfos.ligne,
        );
        if (
          !(aEvent.ctrlKey && this._avecRollover()) &&
          this.Donnees &&
          this.Donnees.avecSurvolCelluleVisible(lParamsCellule)
        ) {
          this._parcourirCellulesVoileBleu(lParamsCellule, (aNode) => {
            $(aNode).addClass('voileBleuCellule');
            lJNodeOrigine.one('mouseleave', () => {
              $(aNode).removeClass('voileBleuCellule');
            });
          });
        }
        if (this.Donnees && this.Donnees.avecDessinHover(lParamsCellule)) {
          let lAvecElementHaut = false;
          let lAvecElementBas = false;
          let lAvecDessinHover = false;
          const lClassDessinHover = 'dessinHoverListe';
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            const lNodeZone = ObjetHtml_1.GHtml.getElement(
              ObjetHtml_1.GHtml.getElement(
                this.ids.contenu + aInfosZoneColonnes.indiceBloc,
              ),
            );
            const lViewHeight = $(lNodeZone).height();
            this._cache.lignesVisibles.forEach((aLigne) => {
              aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
                const lParamsCelluleCible = this._getParamsCellule(
                  aNumeroColonne,
                  aLigne,
                );
                if (
                  this.Donnees.estConcerneParDessinHover(
                    lParamsCelluleCible,
                    lParamsCellule,
                  )
                ) {
                  let lDirection;
                  const lNode = ObjetHtml_1.GHtml.getElement(
                    this.getIdCellule(aNumeroColonne, aLigne),
                  );
                  if (lNode) {
                    lDirection =
                      ObjetDonneesListe_1.ObjetDonneesListe
                        .TypeDirectionElementSurvolCellule.droite;
                    if (lParamsCelluleCible.colonne < lParamsCellule.colonne) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.gauche;
                    }
                    const lJNode = $(lNode);
                    const lPosition = lJNode.position();
                    const lHeightCellule = lJNode.height();
                    if (lPosition.top + lHeightCellule / 2 < 0) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.haut;
                    } else if (
                      lPosition.top + lHeightCellule / 2 >
                      lViewHeight
                    ) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.bas;
                    }
                  } else {
                    if (aLigne < aInfos.ligne) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.haut;
                    } else if (aLigne > aInfos.ligne) {
                      lDirection =
                        ObjetDonneesListe_1.ObjetDonneesListe
                          .TypeDirectionElementSurvolCellule.bas;
                    } else {
                      return;
                    }
                  }
                  let lConteneur = null;
                  switch (lDirection) {
                    case ObjetDonneesListe_1.ObjetDonneesListe
                      .TypeDirectionElementSurvolCellule.haut:
                      if (!lAvecElementHaut) {
                        lConteneur = lNodeZone;
                        lAvecElementHaut = true;
                      }
                      break;
                    case ObjetDonneesListe_1.ObjetDonneesListe
                      .TypeDirectionElementSurvolCellule.bas:
                      if (!lAvecElementBas) {
                        lConteneur = lNodeZone;
                        lAvecElementBas = true;
                      }
                      break;
                    default:
                      lConteneur = lNode;
                  }
                  if (lConteneur !== null) {
                    lParamsCelluleCible.node = lConteneur;
                    lParamsCelluleCible.direction = lDirection;
                    lParamsCelluleCible.classHover = lClassDessinHover;
                    ObjetHtml_1.GHtml.addHtml(
                      lConteneur,
                      this.Donnees.construireHtmlHover(lParamsCelluleCible),
                    );
                    lAvecDessinHover = true;
                  }
                }
              });
            });
          });
          if (lAvecDessinHover) {
            const lNom = this.Nom.escapeJQ();
            lJNodeOrigine.one('mouseleave', () => {
              $('#' + lNom + ' .' + lClassDessinHover).remove();
            });
          }
        }
      }
      _surMouseEnterOverCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos || !lInstance.Donnees) {
          return;
        }
        if (aEvent.type === 'mouseenter') {
          lInstance._gererHoverSurCellule(this, lInfos, aEvent);
        }
        lInstance._gererRollover(
          aEvent.ctrlKey && aEvent.type === 'mouseover',
          this,
          lInfos,
        );
      }
      _surClickCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos) {
          return;
        }
        if (lInstance._estEventSansSelect(aEvent)) {
          return;
        }
        lInstance._editionDebSurSelection(lInfos.colonne, lInfos.ligne, aEvent);
        if (
          lInstance.Donnees &&
          lInstance.Donnees.options.avecCocheCBSurLigne
        ) {
          lInstance._modifierCBLigneFlatDesign(
            lInstance._getParamsCellule(lInfos.colonne, lInfos.ligne),
          );
        }
      }
      _surKeyUpCellule(aEvent) {
        const lInstance = aEvent.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos) {
          return;
        }
        if (
          lInstance._cache.creationEnCours ||
          lInstance._cache.editionEnCours
        ) {
          return;
        }
        const lParamsCellule = lInstance._getParamsCellule(
          lInfos.colonne,
          lInfos.ligne,
        );
        if (
          (ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent) ||
            ToucheClavier_1.ToucheClavierUtil.estEventEdition(aEvent)) &&
          lInstance._estEventSansSelect(aEvent)
        ) {
          return;
        }
        let lBoquerSelection = false;
        if (
          lInstance.Donnees &&
          lInstance._options.skin ===
            _ObjetListe_1.ObjetListe.skin.flatDesign &&
          lInstance.Donnees instanceof
            ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign &&
          lInstance.Donnees.avecCB &&
          lInstance.Donnees.avecCB(lParamsCellule) &&
          (ToucheClavier_1.ToucheClavierUtil.estEventEspace(aEvent) ||
            (ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(aEvent) &&
              !lInstance.Donnees._avecSelection(lParamsCellule)))
        ) {
          lInstance._modifierCBLigneFlatDesign(lParamsCellule);
          lBoquerSelection = true;
        }
        if (
          !lBoquerSelection &&
          (ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent) ||
            ToucheClavier_1.ToucheClavierUtil.estEventEdition(aEvent))
        ) {
          lInstance._surSelection(lInfos.colonne, lInfos.ligne, {
            surInteractionUtilisateur: true,
          });
          lInstance.surSelectionEvenement(lInfos.colonne, lInfos.ligne, true);
        }
        if (ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent)) {
          if (lInstance.surDeploiement(aEvent, lInfos.colonne, lInfos.ligne)) {
            return;
          }
          lInstance._editionDebSurSelection(
            lInfos.colonne,
            lInfos.ligne,
            aEvent,
          );
        }
        if (ToucheClavier_1.ToucheClavierUtil.estEventEdition(aEvent)) {
          lInstance.surEditionDeb(lInfos.colonne, lInfos.ligne);
        } else if (lInstance._estToucheNavigationFlechesClavier(aEvent)) {
          lInstance._navigationFlechesClavier(
            aEvent,
            Object.assign(lInfos, {
              ligneEtColonneFixe: true,
              forcerNavigationFocus: true,
            }),
          );
          aEvent.stopPropagation();
        }
      }
      _surKeyDownCellule(event) {
        const lInstance = event.data.instance;
        const lInfos = lInstance._extraireInfosId(this.id);
        if (!lInfos) {
          return;
        }
        if (
          !lInstance._cache.creationEnCours &&
          !lInstance._cache.editionEnCours &&
          event.ctrlKey &&
          !event.shiftKey
        ) {
          const lCar = String.fromCharCode(event.which).toLowerCase();
          if (lCar === 'c') {
            lInstance._copierCellule(
              lInstance._getParamsCellule(lInfos.colonne, lInfos.ligne),
            );
          } else if (lCar === 'v') {
            lInstance._collerCellule(
              lInstance._getParamsCellule(lInfos.colonne, lInfos.ligne),
            );
          }
        }
      }
      _copierCellule(aParamsCellule) {
        if (
          this.Donnees &&
          aParamsCellule &&
          this.Donnees.surCopier(aParamsCellule)
        ) {
          this._cache.infosZonesColonnes.forEach((aInfosZoneColonnes) => {
            this._cache.lignesVisibles.forEach((aLigne) => {
              aInfosZoneColonnes.colonnesVisibles.forEach((aNumeroColonne) => {
                const lParamsCelluleCible = this._getParamsCellule(
                  aNumeroColonne,
                  aLigne,
                );
                const lNode = ObjetHtml_1.GHtml.getElement(
                  this.getIdCellule(aNumeroColonne, aLigne),
                );
                if (lNode) {
                  const lJNodeSVG = $(lNode).find('.copySVG');
                  if (this.Donnees.estCelluleCopie(lParamsCelluleCible)) {
                    if (lJNodeSVG.length === 0) {
                      ObjetHtml_1.GHtml.addHtml(
                        lNode,
                        this._construireCopySVG(),
                      );
                    }
                  } else if (lJNodeSVG.length > 0) {
                    lJNodeSVG.remove();
                  }
                }
              });
            });
          });
        }
      }
      _collerCellule(aParamsCellule) {
        if (this.Donnees && aParamsCellule) {
          this.Donnees.surColler(aParamsCellule);
        }
      }
      _getLargeurConteneur() {
        this._cache.reserverPlaceScrollHorizontal = false;
        let lLargeur =
          this._cache.largeurTotalCalcule + this._getDiffLargeurContenu();
        if (this._cache.avecScrollHorizontal) {
          this._cache.reserverPlaceScrollHorizontal =
            this._options.avecReservationPlaceScrollHorizontal ||
            lLargeur > this._cache.largeurPage;
          lLargeur = Math.max(
            this._cache.largeurBlocFixe,
            Math.min(lLargeur, this._cache.largeurPage),
          );
        }
        return lLargeur;
      }
      getClassCreation() {
        return 'FondBlanc';
      }
      _avecLigneCreationTitreEnLigne() {
        return (
          !this.avecBoutonCreationDansEntete() && this._avecLigneCreationTitre()
        );
      }
      _zoneContenuAvecTraitHaut() {
        return !(this.ListeTitres && !this._avecLigneCreationTitreEnLigne());
      }
      _surDeplacementScroll() {
        if (!this._cache.timeout_ignorerScrollSortieEdition) {
          if (this._cache.finEditionCreation) {
            if (!this._cache.finEditionCreation.estCreation) {
              this._cache.finEditionCreation();
            }
          } else {
            this._nettoyerElementsEditionEnCours();
          }
        } else {
          const lJSurligneur = $('#' + this.ids.surligneur_edition.escapeJQ());
          if (lJSurligneur.length > 0) {
            const lData = lJSurligneur.data('positionnement');
            if (lData && lData.func) {
              lData.func();
            }
          }
        }
        $(`#${this.Nom.escapeJQ()} .liste_dragInsertion`).remove();
      }
      _evenementScrollV(aGenre, aScrollTop) {
        switch (aGenre) {
          case ObjetScroll_3.EGenreScrollEvenement.Deplacement:
            this._surDeplacementScroll();
            return aScrollTop;
          case ObjetScroll_3.EGenreScrollEvenement.TailleZone: {
            const lHeightListeHorsContenu = this._getHeightListeHorsContenu();
            if (this._hauteurAdapteAuContenu()) {
              aScrollTop = $(
                ObjetHtml_1.GHtml.getElement(
                  this.ScrollV.getIdContenu(EGenreZoneScroll.contenu),
                ),
              ).outerHeight();
              let lHeightMaxListe = null;
              if (
                MethodesObjet_1.MethodesObjet.isFunction(
                  this._options.getHauteurMaxAdapteListe,
                )
              ) {
                lHeightMaxListe = this._options.getHauteurMaxAdapteListe(
                  this.Nom,
                );
              }
              if (MethodesObjet_1.MethodesObjet.isNumber(lHeightMaxListe)) {
                aScrollTop = Math.min(
                  aScrollTop,
                  lHeightMaxListe - lHeightListeHorsContenu,
                );
              } else if (
                this._options.hauteurMaxAdapteContenu > 0 &&
                MethodesObjet_1.MethodesObjet.isNumber(
                  this._options.hauteurMaxAdapteContenu,
                )
              ) {
                aScrollTop = Math.min(
                  aScrollTop,
                  this._options.hauteurMaxAdapteContenu,
                );
              } else if (
                this._options.hauteurAdapteContenu !== Infinity &&
                this._cache.heightConteneur > 0 &&
                !this._options.hauteurMaxAdapteContenu
              ) {
                aScrollTop = Math.min(
                  aScrollTop,
                  this._cache.heightConteneur - lHeightListeHorsContenu,
                );
              }
            } else {
              aScrollTop =
                this._cache.heightConteneur - lHeightListeHorsContenu;
            }
            if (this._options.hauteurZoneContenuListeMin === -1) {
              if (this._cache.lignesVisibles.length > 0) {
                aScrollTop = Math.max(
                  aScrollTop,
                  $('#' + this.getIdCellule(0, 0).escapeJQ()).outerHeight(),
                );
              }
            } else {
              aScrollTop = Math.max(
                aScrollTop,
                this._options.hauteurZoneContenuListeMin,
              );
            }
            return Math.ceil(aScrollTop);
          }
          case ObjetScroll_3.EGenreScrollEvenement.TailleContenu:
            if (!this._hauteurAdapteAuContenu()) {
              const lHauteurContenu = ObjetPosition_1.GPosition.getHeight(
                this.ScrollV.getIdContenu(EGenreZoneScroll.contenu),
              );
              if (this.ScrollV.TailleZone > lHauteurContenu) {
                aScrollTop = this.ScrollV.TailleZone;
              } else {
                aScrollTop = lHauteurContenu - 1;
              }
            }
            return Math.ceil(aScrollTop);
          case ObjetScroll_3.EGenreScrollEvenement.TailleScroll:
            return Math.ceil(
              Math.max(
                this.ScrollV.tailleMin,
                this.ScrollV.TailleZone +
                  ObjetPosition_1.GPosition.getHeight(
                    this.ScrollV.getIdZone(EGenreZoneScroll.titre),
                  ) +
                  1 -
                  (this._avecBoutonsListeHautScroll()
                    ? (this._options.tailleBoutons + 1) *
                      this._cache.boutons.length
                    : 0) -
                  this._options.borduresContenu_bottom,
              ),
            );
        }
      }
      _getLargeurMaxZone() {
        return this._cache.largeurPage - this._getDiffLargeurContenu();
      }
      _evenementScrollH(aGenre, aScrollLeft) {
        switch (aGenre) {
          case ObjetScroll_3.EGenreScrollEvenement.Deplacement:
            this._surDeplacementScroll();
            return aScrollLeft;
          case ObjetScroll_3.EGenreScrollEvenement.TailleContenu:
            return aScrollLeft;
          case ObjetScroll_3.EGenreScrollEvenement.TailleZone: {
            let lTaille = this._cache.largeurTotalCalcule;
            const lTailleMax = this._getLargeurMaxZone();
            let lInc;
            if (lTaille > lTailleMax) {
              if (this._options.scrollHorizontalSurLargeurComplete) {
                lTaille = lTailleMax - this._cache.largeurBlocFixe;
              } else {
                lTaille = 0;
                this._cache.infosZonesColonnes.forEach((aInfos) => {
                  if (aInfos.estBlocFixe) {
                    return;
                  }
                  aInfos.colonnesVisibles.every((aNumeroColonne) => {
                    lInc =
                      this._cache.taillesColonne[aNumeroColonne].px +
                      2 * this._options.paddingCelluleLR +
                      1;
                    if (
                      lTaille + lInc >
                      lTailleMax - this._cache.largeurBlocFixe
                    ) {
                      return false;
                    }
                    lTaille += lInc;
                    return true;
                  });
                });
                if (lTaille === 0) {
                  lTaille = lTailleMax - this._cache.largeurBlocFixe;
                } else {
                  lTaille -= 1;
                }
              }
            }
            return Math.max(lTaille, this._options.largeurZoneContenuListeMin);
          }
        }
      }
      _avecRollover() {
        return !!(
          this._options.avecRollover &&
          ObjetSupport_1.Support.supportPointerEventsNone &&
          this.ListeTitres
        );
      }
      _initParseur() {
        uParseur = '';
        clearTimeout(uTimerParseur);
      }
      _evenementFenetreDate(aParams, aGenreBouton, aDate) {
        if (aGenreBouton === -1) {
          if (aParams.ligne === null || aParams.ligne === undefined) {
            this.surCreationFin(-1);
          } else {
            this._surEditionFin({
              colonne: aParams.colonne,
              ligne: aParams.ligne,
            });
          }
        } else {
          const lValeur =
            aGenreBouton === 1
              ? this.Donnees.getChaineDeDate(aDate, aParams)
              : null;
          if (aParams.ligne === null || aParams.ligne === undefined) {
            this._surCreation(lValeur);
          } else {
            this._surEdition(aParams, lValeur, true);
          }
        }
      }
      getIdGridFocus(aIndiceBloc) {
        return `${this.Nom}_grid_${aIndiceBloc}`;
      }
      _nettoyerElementsEditionEnCours() {
        super._nettoyerElementsEditionEnCours();
        if (this.fenetreDate) {
          this.fenetreDate.fermer();
          delete this.fenetreDate;
        }
      }
      _getLargeurScrollV() {
        return this.ScrollV ? this.ScrollV.Largeur : 0;
      }
      navigationClavierGridTotal(aEvent) {
        var _a, _b, _c, _d, _e, _f;
        if (this._estToucheNavigationFlechesClavier(aEvent)) {
          aEvent.stopPropagation();
          const lNav = this._cache.gridTotalAccess.nav;
          const lNavLigneCorrige = Math.max(0, lNav.ligne);
          const lOrdres = this._cache.gridTotalAccess.ordres;
          switch (aEvent.which) {
            case ToucheClavier_1.ToucheClavier.FlecheGauche: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lCols) {
                const lIndice = lCols.indexOf(lNav.colonne);
                if (lIndice > 0) {
                  (_a = ObjetHtml_1.GHtml.getElement(
                    this.getIdCelluleTotal(
                      lCols[lIndice - 1],
                      lNav.ligne,
                      true,
                    ),
                  )) === null || _a === void 0
                    ? void 0
                    : _a.focus();
                }
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.FlecheDroite: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lCols) {
                let lIndice = lCols.indexOf(lNav.colonne);
                let lTrouve = false;
                while (lIndice >= 0 && lIndice < lCols.length - 1 && !lTrouve) {
                  lIndice += 1;
                  if (lCols[lIndice] > lNav.colonne) {
                    (_b = ObjetHtml_1.GHtml.getElement(
                      this.getIdCelluleTotal(lCols[lIndice], lNav.ligne, true),
                    )) === null || _b === void 0
                      ? void 0
                      : _b.focus();
                    lTrouve = true;
                  }
                }
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.FlecheBas: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lNavLigneCorrige < lOrdres.length - 1) {
                let lIndiceCol = lCols.indexOf(lNav.colonne);
                const lColsSuiv = lOrdres[lNavLigneCorrige + 1];
                lIndiceCol = Math.min(lIndiceCol, lColsSuiv.length - 1);
                (_c = ObjetHtml_1.GHtml.getElement(
                  this.getIdCelluleTotal(
                    lColsSuiv[lIndiceCol],
                    lNavLigneCorrige + 1,
                    true,
                  ),
                )) === null || _c === void 0
                  ? void 0
                  : _c.focus();
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.FlecheHaut: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lNavLigneCorrige > 0) {
                let lIndiceCol = lCols.indexOf(lNav.colonne);
                const lColsPrec = lOrdres[lNavLigneCorrige - 1];
                lIndiceCol = Math.min(lIndiceCol, lColsPrec.length - 1);
                (_d = ObjetHtml_1.GHtml.getElement(
                  this.getIdCelluleTotal(
                    lColsPrec[lIndiceCol],
                    lNavLigneCorrige - 1,
                    true,
                  ),
                )) === null || _d === void 0
                  ? void 0
                  : _d.focus();
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.Debut: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lCols) {
                let lIndiceCol = lCols.indexOf(lNav.colonne);
                let lLigne = lNav.ligne;
                if (aEvent.ctrlKey) {
                  const lColsDebut = lOrdres[0];
                  lLigne = 0;
                  lIndiceCol = Math.min(lIndiceCol, lColsDebut.length - 1);
                } else {
                  lIndiceCol = 0;
                }
                if (lIndiceCol >= 0) {
                  (_e = ObjetHtml_1.GHtml.getElement(
                    this.getIdCelluleTotal(lCols[lIndiceCol], lLigne, true),
                  )) === null || _e === void 0
                    ? void 0
                    : _e.focus();
                  aEvent.preventDefault();
                }
              }
              break;
            }
            case ToucheClavier_1.ToucheClavier.Fin: {
              const lCols = lOrdres[lNavLigneCorrige];
              if (lCols) {
                let lIndiceCol = lCols.indexOf(lNav.colonne);
                let lLigne = lNav.ligne;
                if (aEvent.ctrlKey) {
                  lLigne = lOrdres.length - 1;
                  const lColsFin = lOrdres[lLigne];
                  lIndiceCol = Math.min(lIndiceCol, lColsFin.length - 1);
                } else {
                  lIndiceCol = lCols.length - 1;
                }
                if (lIndiceCol < lCols.length) {
                  (_f = ObjetHtml_1.GHtml.getElement(
                    this.getIdCelluleTotal(lCols[lIndiceCol], lLigne, true),
                  )) === null || _f === void 0
                    ? void 0
                    : _f.focus();
                  aEvent.preventDefault();
                }
              }
              break;
            }
          }
        }
      }
      liaisonWAITitreColonne(aActiver, aPourContenu, aNumeroColonne) {
        let lIdsConteneurTitre = aPourContenu
          ? this.ids.WAIGrid + '_rowtitre'
          : this.ids.WAIGrid + 'total_rowtitre';
        if (aActiver) {
          let lNumeroColTitre = aNumeroColonne;
          let lElementTitre = null;
          let lIdTitre = '';
          while (!lElementTitre && lNumeroColTitre >= 0) {
            lIdTitre = this.getIdAriaTitreDeColonne(lNumeroColTitre);
            lElementTitre = ObjetHtml_1.GHtml.getElement(lIdTitre);
            lNumeroColTitre += -1;
          }
          const lTreeGridTitre =
            ObjetHtml_1.GHtml.getElement(lIdsConteneurTitre);
          if (lTreeGridTitre) {
            lTreeGridTitre.setAttribute(
              'aria-owns',
              lElementTitre ? lIdTitre : '',
            );
          }
        } else {
          const lTreeGridTitre =
            ObjetHtml_1.GHtml.getElement(lIdsConteneurTitre);
          if (lTreeGridTitre) {
            lTreeGridTitre.removeAttribute('aria-owns');
          }
        }
      }
    }
    module.exports = ObjetListeEspace;
  },
  fn: 'objetliste_espace.js',
});