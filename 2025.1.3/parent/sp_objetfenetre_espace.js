IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetreEspace = void 0;
    const _ObjetFenetre_1 = require('_ObjetFenetre');
    require('ObjetFenetre_Espace.css');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const ObjetStyle_1 = require('ObjetStyle');
    const Enumere_Event_1 = require('Enumere_Event');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const GestionnaireModale_1 = require('GestionnaireModale');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const AccessApp_1 = require('AccessApp');
    const Divers_css_1 = require('Divers.css');
    const ObjetFenetre_Espace_css_1 = require('ObjetFenetre_Espace.css');
    const uCoordonneesBackup = {};
    class ObjetFenetreEspace extends _ObjetFenetre_1._ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.Titre = '';
        this._initialiserOptionsFenetre();
        this.resetCoordonnees();
        if (this.Nom) {
          this.ajouterEvenementGlobal(
            Enumere_Event_1.EEvent.SurPreResize,
            this._preResizePositionnement,
          );
          this.ajouterEvenementGlobal(
            Enumere_Event_1.EEvent.SurPostResize,
            this._postResizePositionnement,
          );
        }
        Invocateur_1.Invocateur.abonner(
          `${ObjetNavigateur_1.Navigateur.getEventInvocateur('pointerdown')}.capture ${ObjetNavigateur_1.Navigateur.getEventInvocateur('keydown')}.capture`,
          (aEvent) => {
            if (
              this.optionsFenetre.fermerFenetreSurClicHorsFenetre &&
              this.EnAffichage &&
              aEvent.target &&
              !aEvent.target.closest(`#${this.Nom.escapeJQ()}`) &&
              !GestionnaireModale_1.GestionnaireModale.estJElementBloque(
                $('#' + this.Nom.escapeJQ()),
              )
            ) {
              this.fermer();
            }
          },
        );
        Object.assign(this.optionsInterne, {
          closeStart: () => {
            GestionnaireModale_1.GestionnaireModale.abonnementBlocageInterface(
              false,
              this.Nom,
            );
            if (this._interfaceEstBloquee) {
              GestionnaireModale_1.GestionnaireModale.bloquerInterface({
                bloquer: false,
                guidBlocage: this._guidBlocage,
              });
              delete this._interfaceEstBloquee;
            }
            GestionnaireModale_1.GestionnaireModale.abonnementPremierPlan(
              false,
              this.Nom,
            );
          },
          closeEnd: () => {
            ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
          },
        });
        this.getZIndex = function () {
          return 1100;
        };
      }
      detruireInstances() {
        if (!this.__surDestructionApresFermeture_) {
          this.fermer(false);
        }
      }
      setParametresGeneraux() {
        ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getTitre: function () {
            return aInstance.optionsFenetre.titre
              ? MethodesObjet_1.MethodesObjet.isFunction(
                  aInstance.optionsFenetre.titre,
                )
                ? aInstance.optionsFenetre.titre() || ''
                : aInstance.optionsFenetre.titre
              : aInstance.Titre || '';
          },
          avecBoutons: function () {
            return (
              aInstance.optionsFenetre.listeBoutons &&
              aInstance.optionsFenetre.listeBoutons.length > 0
            );
          },
          htmlRepeatBoutons: function (aBoutonRepeat) {
            let lMargin = 4;
            if (
              aBoutonRepeat.element.theme ===
                Type_ThemeBouton_1.TypeThemeBouton.primaire &&
              aBoutonRepeat.indice > 0 &&
              aBoutonRepeat.tableau[aBoutonRepeat.indice - 1] &&
              aBoutonRepeat.tableau[aBoutonRepeat.indice - 1].theme !==
                Type_ThemeBouton_1.TypeThemeBouton.primaire
            ) {
              lMargin = 8;
            }
            return aInstance.construireBouton(aBoutonRepeat, lMargin);
          },
        });
      }
      construireBouton(aBoutonRepeat, aMargin) {
        return [
          '<ie-bouton',
          ' id="',
          this._getIdBoutons(aBoutonRepeat.element.index),
          '"',
          ' ie-model="fenetreBtn(bouton)" class="',
          aBoutonRepeat.element.theme &&
          MethodesObjet_1.MethodesObjet.isString(aBoutonRepeat.element.theme)
            ? aBoutonRepeat.element.theme
            : '',
          '"',
          ' style="',
          this.optionsFenetre.listeBoutonsInvisibles[
            aBoutonRepeat.element.index
          ] === true
            ? 'display:none;'
            : '',
          'margin-left:',
          aMargin,
          'px;',
          '"',
          aBoutonRepeat.element.title
            ? ObjetHtml_1.GHtml.composeAttr(
                'title',
                aBoutonRepeat.element.title,
              )
            : '',
          '>',
          '</ie-bouton>',
        ].join('');
      }
      construireStructureAffichageAutre() {
        if (
          this.optionsFenetre.identConservationCoordonnees &&
          uCoordonneesBackup[this.optionsFenetre.identConservationCoordonnees]
        ) {
          this.coordonnees =
            uCoordonneesBackup[
              this.optionsFenetre.identConservationCoordonnees
            ] ||
            this.coordonnees ||
            {};
        }
        if (this.optionsFenetre.avecRetaillage && this.existeCoordonnees()) {
          if (this.coordonnees.width > 0) {
            this.optionsFenetre.largeur = this.coordonnees.width;
          }
          if (this.coordonnees.height > 0) {
            this.optionsFenetre.hauteur = this.coordonnees.height;
          }
        }
        let LStyle =
          this.optionsFenetre.largeur > 0
            ? 'width: ' + this.optionsFenetre.largeur + 'px;'
            : '';
        LStyle +=
          this.optionsFenetre.hauteur > 0
            ? 'min-height: ' + this.optionsFenetre.hauteur + 'px;'
            : this.optionsFenetre.hauteur === 'auto'
              ? ''
              : ObjetStyle_1.GStyle.composeHeight(100, '%');
        LStyle += ObjetStyle_1.GStyle.composeCouleurFond(
          this.optionsFenetre.couleurFond,
        );
        const lHtmlBas = this.composeBas();
        const lHtmlBoutons = this.composeBoutons();
        const lStyleContenuFenetre = [];
        if (this.optionsFenetre.hauteurMaxContenu > 0) {
          lStyleContenuFenetre.push(
            'max-height: ' + this.optionsFenetre.hauteurMaxContenu + 'px;',
          );
        }
        if (this.optionsFenetre.largeurMin > 0) {
          lStyleContenuFenetre.push(
            'min-width: ' + this.optionsFenetre.largeurMin + 'px;',
          );
        }
        if (this.optionsFenetre.hauteurMin > 0) {
          lStyleContenuFenetre.push(
            'min-height: ' + this.optionsFenetre.hauteurMin + 'px;',
          );
        }
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str('span', {
            class: Divers_css_1.StylesDivers.srOnly,
            tabindex: '0',
            'ie-node': this.jsxNodeFocusSurPremierOuDernierElement.bind(
              this,
              true,
            ),
          }),
          IE.jsx.str(
            'div',
            {
              id: this.NomFenetre,
              'ie-node': this.jsxNodeCreationNodeFenetre.bind(this),
              'aria-labelledby': this.optionsFenetre.avecTitre
                ? this.IdTitre
                : false,
              'aria-describedby': this.optionsFenetre.avecAriaDescribedByContenu
                ? this.IdContenu
                : false,
              class: [
                'ObjetFenetre_Espace ',
                this.optionsFenetre.cssFenetre || '',
              ],
              tabindex: '-1',
              role: this.optionsFenetre.roleWAI || 'dialog',
              'aria-modal': this.optionsFenetre.modale ? `true` : false,
            },
            IE.jsx.str(
              'div',
              {
                id: this.idFenetreContenu,
                class: ['Fenetre_Cadre ombre-cadre'],
                style: 'box-sizing:border-box; ' + LStyle,
              },
              this.optionsFenetre.avecTitre
                ? IE.jsx.str(
                    'div',
                    { class: 'Fenetre_Titre NePasImprimer' },
                    IE.jsx.str('h1', {
                      id: this.IdTitre,
                      class: 'ZoneDeplacementFenetre',
                      'ie-html': 'getTitre',
                      'ie-draggable': this.getDragFenetre.bind(this),
                      tabindex: '-1',
                    }),
                    IE.jsx.str(
                      'div',
                      {
                        class: 'cta-conteneur',
                        'ie-display': 'optionsFenetre.avecCroixFermeture',
                      },
                      IE.jsx.str('ie-btnimage', {
                        class: 'btnImageIcon as-button icon_fermeture_widget ',
                        'ie-model':
                          this.jsxModeleBoutonCroixFermeture.bind(this),
                        title:
                          'Fermer',
                      }),
                    ),
                  )
                : '',
              IE.jsx.str(
                'div',
                {
                  id: `${this.Nom}_Res`,
                  class: [
                    'Fenetre_Espace',
                    this.optionsFenetre.avecScroll
                      ? ObjetFenetre_Espace_css_1.StylesObjetFenetre_Espace
                          .Fenetre_Scroll
                      : '',
                    this.optionsFenetre.sansPaddingLR ? ' SansPaddingLR' : '',
                  ],
                },
                IE.jsx.str(
                  'div',
                  {
                    id: this.IdContenu,
                    class: [
                      'Fenetre_Contenu',
                      this.optionsFenetre.avecScrollY_force
                        ? ' overflow-y-scroll'
                        : '',
                    ],
                    style: lStyleContenuFenetre.join(''),
                  },
                  ObjetChaine_1.GChaine.simpleHtmlToSafeHtml(
                    this.composeContenu(),
                  ),
                ),
              ),
              lHtmlBas || lHtmlBoutons
                ? IE.jsx.str(
                    'div',
                    { class: 'NePasImprimer' },
                    IE.jsx.str(
                      'div',
                      { class: 'zone-bas' },
                      lHtmlBas !== ''
                        ? IE.jsx.str(
                            'div',
                            { class: 'zone-bas-gauche Fenetre_Bas' },
                            lHtmlBas,
                          )
                        : '',
                      lHtmlBoutons,
                    ),
                  )
                : '',
              this.optionsFenetre.avecRetaillage
                ? IE.jsx.str(
                    IE.jsx.fragment,
                    null,
                    IE.jsx.str('div', {
                      class: 'fenetre-resize right',
                      'ie-draggable': this.getDragResize.bind(this),
                    }),
                    IE.jsx.str('div', {
                      class: 'fenetre-resize bottom',
                      'ie-draggable': this.getDragResize.bind(this),
                    }),
                    IE.jsx.str('div', {
                      class: 'fenetre-resize left',
                      'ie-draggable': this.getDragResize.bind(this),
                    }),
                    IE.jsx.str('div', {
                      class: 'fenetre-resize top',
                      'ie-draggable': this.getDragResize.bind(this),
                    }),
                    IE.jsx.str('div', {
                      class: 'fenetre-resize coin Image_Retailler',
                      'ie-draggable': this.getDragResize.bind(this),
                    }),
                  )
                : '',
            ),
          ),
          IE.jsx.str('span', {
            class: Divers_css_1.StylesDivers.srOnly,
            tabindex: '0',
            'ie-node': this.jsxNodeFocusSurPremierOuDernierElement.bind(
              this,
              false,
            ),
          }),
        );
      }
      composeBoutons() {
        const H = [];
        H.push(
          '<div ie-if="avecBoutons" class="btn-conteneur">',
          '<div ie-repeat="bouton in listeBoutons" ie-html="htmlRepeatBoutons(bouton)"></div>',
          '</div>',
        );
        return H.join('');
      }
      existeCoordonnees() {
        return (
          this.optionsFenetre.conserverCoordonnees &&
          this.coordonnees !== null &&
          this.coordonnees !== undefined &&
          !!(this.coordonnees.left && this.coordonnees.top)
        );
      }
      resetCoordonnees() {
        this.coordonnees = Object.assign(this.coordonnees || {}, {
          left: null,
          top: null,
          width: null,
          height: null,
        });
      }
      setCoordonnees() {
        if (!this.optionsFenetre.conserverCoordonnees) {
          return;
        }
        Object.assign(this.coordonnees || {}, {
          left: ObjetPosition_1.GPosition.getLeft(this.Nom),
          top: ObjetPosition_1.GPosition.getTop(this.Nom),
          width: this.optionsFenetre.avecRetaillage
            ? this.optionsFenetre.largeur
            : null,
          height: this.optionsFenetre.avecRetaillage
            ? this.optionsFenetre.hauteur
            : null,
        });
        if (this.optionsFenetre.identConservationCoordonnees) {
          uCoordonneesBackup[this.optionsFenetre.identConservationCoordonnees] =
            this.coordonnees;
        }
        if (this.optionsFenetre.callbackDeplacer) {
          this.optionsFenetre.callbackDeplacer(this.coordonnees);
        }
      }
      positionnerFenetre(aParams) {
        const lParams = Object.assign(
          {
            left: null,
            top: null,
            id: '',
            positionSurSouris: false,
            positionSurSourisSiAffiche: false,
            enAffichage: null,
            centrerParDefaut: true,
          },
          aParams,
        );
        if (ObjetStyle_1.GStyle.styleSheetDisabled()) {
          return;
        }
        let lEnAffichage = this.EnAffichage;
        if (lParams.enAffichage === false || lParams.enAffichage === true) {
          lEnAffichage = lParams.enAffichage;
        }
        if (this.existeCoordonnees() && ObjetPosition_1.GPosition.placer) {
          ObjetPosition_1.GPosition.placer(
            this.Nom,
            this.coordonnees.left,
            this.coordonnees.top,
          );
        } else if (
          MethodesObjet_1.MethodesObjet.isNumber(lParams.top) &&
          MethodesObjet_1.MethodesObjet.isNumber(lParams.left) &&
          ObjetPosition_1.GPosition.placer
        ) {
          ObjetPosition_1.GPosition.placer(this.Nom, lParams.left, lParams.top);
        } else if (this.optionsFenetre.idPositionnement || lParams.id) {
          ObjetPosition_1.GPosition.placerFiche(
            this.Nom,
            this.optionsFenetre.idPositionnement || lParams.id,
            lEnAffichage,
          );
        } else if (
          this.optionsFenetre.positionSurSouris ||
          lParams.positionSurSouris
        ) {
          if (!lEnAffichage || lParams.positionSurSourisSiAffiche) {
            ObjetPosition_1.GPosition.placer(
              this.Nom,
              ObjetNavigateur_1.Navigateur.pointerX,
              ObjetNavigateur_1.Navigateur.pointerY,
            );
          }
        } else if (lParams.centrerParDefaut) {
          ObjetPosition_1.GPosition.centrer(this.Nom);
        }
        return this;
      }
      async afficher(aHtml) {
        var _a, _b;
        const lEnAffichage = this.EnAffichage;
        if (!lEnAffichage) {
          this._focusPrecedent = null;
          if (!ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
            return;
          }
          if (
            !this.optionsFenetre.bloquerFocus &&
            this.optionsFenetre.restaurerFocusSurFermeture
          ) {
            this._focusPrecedent = document.activeElement;
          }
          if (this.optionsFenetre.modale) {
            this._guidBlocage =
              GestionnaireModale_1.GestionnaireModale.bloquerInterface({
                bloquer: true,
                prioriteBlocage: this.optionsFenetre.prioriteBlocageAbonnement,
                opaciteVoile: this.optionsFenetre.opaciteVoileModale,
              });
            this._interfaceEstBloquee = true;
          }
          if (
            this.optionsFenetre.avecAbonnementPremierPlan ||
            this.optionsFenetre.modale
          ) {
            GestionnaireModale_1.GestionnaireModale.abonnementPremierPlan(
              true,
              this.Nom,
            );
            GestionnaireModale_1.GestionnaireModale.enPremierPlan(this.Nom);
          }
          if (this.optionsFenetre.avecAbonnementBlocage) {
            GestionnaireModale_1.GestionnaireModale.abonnementBlocageInterface(
              true,
              this.Nom,
              this.optionsFenetre.prioriteBlocageAbonnement,
            );
          }
          ObjetHtml_1.GHtml.setDisplay(this.Nom, true);
          Invocateur_1.Invocateur.evenement('surAffichageFenetre');
          this.EnAffichage = true;
          this.controleur.$refreshSelf(true);
          this.EnAffichage = false;
          if (aHtml) {
            ObjetHtml_1.GHtml.setHtml(this.IdContenu, aHtml, {
              controleur: this.controleur,
            });
          }
          if (this.optionsFenetre.positionnerFenetreSurAfficher) {
            this._creerResizeObserver();
            this.positionnerFenetre();
          }
          this.EnAffichage = true;
          this.surFixerTaille();
          if (this.surAfficher) {
            this.surAfficher();
          }
          (_b = (_a = this.optionsFenetre).callbackSurAfficher) === null ||
          _b === void 0
            ? void 0
            : _b.call(_a);
          this.$refreshSelf();
          this.promise = new Promise((aResolve) => {
            this._promiseResolve = aResolve;
          });
        }
        try {
          if (!this.optionsFenetre.bloquerFocus) {
            this.focusSurPremierElement();
          }
        } catch (e) {}
        return this.promise;
      }
      actualiser() {
        this.surFixerTaille();
        ObjetHtml_1.GHtml.setHtml(this.IdContenu, this.composeContenu(), {
          controleur: this.controleur,
        });
      }
      setBoutonLibelle(I, aLibelle) {
        if (
          MethodesObjet_1.MethodesObjet.isObject(
            this.optionsFenetre.listeBoutons[I],
          )
        ) {
          this.optionsFenetre.listeBoutons[I].libelle = aLibelle;
        } else {
          this.optionsFenetre.listeBoutons[I] = aLibelle;
        }
        this._structureBoutons = null;
        this.$refreshSelf();
      }
      positionnerSousId(aId) {
        if (ObjetHtml_1.GHtml.elementExiste(aId)) {
          ObjetPosition_1.GPosition.placer(
            this.Nom,
            ObjetPosition_1.GPosition.getLeft(aId) + 5,
            ObjetPosition_1.GPosition.getTop(aId) +
              ObjetPosition_1.GPosition.getHeight(aId) +
              7,
          );
          ObjetPosition_1.GPosition.placerFiche(this.Nom, aId, true);
          this.setCoordonnees();
        }
      }
      surFixerTaille() {
        if (
          !this.optionsFenetre.avecRetaillage &&
          $('#' + this.NomFenetre.escapeJQ()).width() <
            $('#' + this.idFenetreContenu.escapeJQ()).outerWidth()
        ) {
          $('#' + this.NomFenetre.escapeJQ()).css(
            'min-width',
            $('#' + this.idFenetreContenu.escapeJQ()).width() + 'px',
          );
        }
      }
      debutRetaillage() {
        this.surFixerTaille();
        $('#' + this.idFenetreContenu.escapeJQ()).css({
          'min-height':
            ObjetPosition_1.GPosition.getHeight(this.idFenetreContenu) + 'px',
          width:
            ObjetPosition_1.GPosition.getWidth(this.idFenetreContenu) + 'px',
        });
      }
      finRetaillage() {
        this.surFixerTaille();
        this.setCoordonnees();
      }
      getHeightMaxIdSelonEcran(aId) {
        return (
          ObjetNavigateur_1.Navigateur.ecranH -
          ($('#' + this.Nom.escapeJQ()).outerHeight() -
            $('#' + aId.escapeJQ()).height()) -
          10
        );
      }
      avecEventResizeNavigateur() {
        return false;
      }
      _initialiserOptionsFenetre() {
        this.setOptionsFenetre({
          modale: true,
          avecTitre: true,
          titre: '',
          largeur: 100,
          hauteur: 100,
          hauteurMaxContenu: 0,
          avecScroll: false,
          avecScrollY_force: false,
          marge: 12,
          avecTailleSelonContenu: false,
          avecPaddingContenu: true,
          avecCroixFermeture: true,
          indiceCroixFermeture: -1,
          cssFenetre:
            MethodesObjet_1.MethodesObjet.getObjectClass(this) + '_racine',
          avecRetaillage: false,
          largeurMin: 0,
          hauteurMin: 0,
          tailleBandeRetaillage: 3,
          callbackDeplacer: null,
          addParametresValidation: null,
          surValiderAvantFermer: null,
          callback: null,
          callbackFermer: null,
          callbackApresFermer: null,
          listeBoutons: [],
          listeBoutonsInvisibles: [],
          listeBoutonsInactifs: [],
          avecAbonnementBlocage: true,
          prioriteBlocageAbonnement:
            GestionnaireModale_1.GestionnaireModale.TypePrioriteBlocageInterface
              .standard,
          avecAbonnementPremierPlan: true,
          avecPositionnementResize: true,
          positionnerFenetreSurAfficher: true,
          idPositionnement: '',
          positionSurSouris: false,
          conserverCoordonnees: true,
          identConservationCoordonnees: '',
          avecAbonnementFermetureFenetreGenerale: true,
          bloquerFocus: false,
          restaurerFocusSurFermeture: true,
          fermerFenetreSurClicHorsFenetre: false,
          couleurFond: (0, AccessApp_1.getApp)().getCouleur().blanc,
          hauteurBandeau: (0, AccessApp_1.getApp)().hauteurBandeau,
          couleurFondBandeau: (0, AccessApp_1.getApp)().getCouleur().fenetre
            .bandeau.fond,
          couleurTexteBandeau: (0, AccessApp_1.getApp)().getCouleur().fenetre
            .bandeau.texte,
          avecAriaDescribedByContenu: false,
        });
      }
      _creerResizeObserver() {
        const lElement = ObjetHtml_1.GHtml.getElement(this.Nom);
        if (!lElement) {
          return;
        }
        let lPositionnerEnCours = false;
        let lObserver = new ResizeObserver((aObserveds) => {
          if (
            this.EnAffichage &&
            !lPositionnerEnCours &&
            aObserveds &&
            aObserveds[0] &&
            aObserveds[0].contentRect &&
            aObserveds[0].contentRect.height > 0
          ) {
            lPositionnerEnCours = true;
            try {
              this.positionnerFenetre();
            } finally {
              lPositionnerEnCours = false;
            }
          }
        });
        lObserver.observe(lElement);
        const lDisconnect = function (aEvent) {
          if (lObserver) {
            lObserver.disconnect();
            lObserver = null;
          }
          lElement.removeEventListener(aEvent.type, lDisconnect, true);
        };
        lElement.addEventListener('pointerdown', lDisconnect, true);
      }
      _preResizePositionnement() {
        if (
          !this.optionsFenetre.avecPositionnementResize ||
          !this.estAffiche()
        ) {
          return;
        }
        this._tempResize = {
          left: ObjetPosition_1.GPosition.getLeft(this.Nom),
          top: ObjetPosition_1.GPosition.getTop(this.Nom),
        };
        ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
      }
      _postResizePositionnement() {
        if (
          !this.optionsFenetre.avecPositionnementResize ||
          !this.estAffiche() ||
          !this._tempResize
        ) {
          return;
        }
        ObjetPosition_1.GPosition.placer(this.Nom, 0, 0);
        ObjetHtml_1.GHtml.setDisplay(this.Nom, true);
        ObjetPosition_1.GPosition.placer(
          this.Nom,
          this._tempResize.left,
          this._tempResize.top,
        );
        this.setCoordonnees();
        delete this._tempResize;
      }
      getDragFenetre() {
        return {
          start: (aParamsDrag) => {
            const lJFenetre = $(`#${this.Nom.escapeJQ()}`);
            aParamsDrag.rectFenetreStart =
              ObjetPosition_1.GPosition.getClientRect(lJFenetre.get(0));
            lJFenetre.addClass('on-drag');
            this._fenetreEnDeplacement = true;
          },
          drag: (aParamsDrag) => {
            const lJFenetre = $(`#${this.Nom.escapeJQ()}`);
            const lRect = ObjetPosition_1.GPosition.getClientRect(
              lJFenetre.get(0),
            );
            let lTop = Math.max(
              aParamsDrag.rectContrainte.top,
              aParamsDrag.rectFenetreStart.top + aParamsDrag.offset.y,
            );
            let lLeft = Math.max(
              aParamsDrag.rectContrainte.left,
              aParamsDrag.rectFenetreStart.left + aParamsDrag.offset.x,
            );
            lLeft = Math.min(
              lLeft,
              aParamsDrag.rectContrainte.left +
                aParamsDrag.rectContrainte.width -
                lRect.width,
            );
            lTop = Math.min(
              lTop,
              aParamsDrag.rectContrainte.top +
                Math.floor(aParamsDrag.rectContrainte.height) -
                Math.ceil(lRect.height) -
                1,
            );
            lJFenetre.css({ left: lLeft, top: lTop });
          },
          stop: () => {
            $(`#${this.Nom.escapeJQ()}`).removeClass('on-drag');
            this.setCoordonnees();
            this.focusSurPremierElement();
            setTimeout(() => {
              delete this._fenetreEnDeplacement;
            }, 0);
          },
        };
      }
      getDragResize(aNode) {
        let lCoin = {
          gauche: aNode.classList.contains('left'),
          droit:
            aNode.classList.contains('right') ||
            aNode.classList.contains('coin'),
          haut: aNode.classList.contains('top'),
          bas:
            aNode.classList.contains('bottom') ||
            aNode.classList.contains('coin'),
        };
        return {
          start: (aParamsDrag) => {
            const lClassCurseur =
              lCoin.bas && lCoin.droit
                ? 'AvecResize'
                : lCoin.droit || lCoin.gauche
                  ? 'AvecResizeHorizontal'
                  : 'AvecResizeVertical';
            aParamsDrag.divBloquant = ObjetHtml_1.GHtml.htmlToDOM(
              `<div class="overlay-resize ${lClassCurseur}"></div>`,
            );
            ObjetHtml_1.GHtml.insererElementDOM(
              ObjetHtml_1.GHtml.getElement(this.NomFenetre),
              aParamsDrag.divBloquant,
            );
            Object.assign(aParamsDrag, {
              OriginX: aParamsDrag.posStart.x,
              OriginY: aParamsDrag.posStart.y,
              OriginLargeur: ObjetPosition_1.GPosition.getWidth(
                this.idFenetreContenu,
              ),
              OriginHauteur: ObjetPosition_1.GPosition.getHeight(
                this.idFenetreContenu,
              ),
              Originleft: ObjetPosition_1.GPosition.getLeft(this.Nom),
              OriginTop: ObjetPosition_1.GPosition.getTop(this.Nom),
            });
            $(`#${this.Nom.escapeJQ()}`).addClass('on-drag');
            this.debutRetaillage();
          },
          drag: (aParamsDrag) => {
            const lJContenu = $('#' + this.idFenetreContenu.escapeJQ());
            let lDeplacementX;
            let lDeplacementY;
            if (lCoin.droit) {
              lDeplacementX = Math.borner(
                aParamsDrag.pos.x - aParamsDrag.OriginX,
                this.optionsFenetre.largeurMin - aParamsDrag.OriginLargeur,
                ObjetNavigateur_1.Navigateur.ecranL -
                  13 -
                  aParamsDrag.OriginLargeur -
                  ObjetPosition_1.GPosition.getLeft(this.idFenetreContenu),
              );
              this.optionsFenetre.largeur =
                aParamsDrag.OriginLargeur + lDeplacementX;
              lJContenu.css({
                width: aParamsDrag.OriginLargeur + lDeplacementX + 'px',
              });
            }
            if (lCoin.gauche) {
              lDeplacementX = Math.borner(
                aParamsDrag.pos.x - aParamsDrag.OriginX,
                -aParamsDrag.Originleft,
                aParamsDrag.OriginLargeur - this.optionsFenetre.largeurMin,
              );
              this.optionsFenetre.largeur =
                aParamsDrag.OriginLargeur - lDeplacementX;
              lJContenu.css({
                width: aParamsDrag.OriginLargeur - lDeplacementX + 'px',
              });
              this.coordonnees.left = aParamsDrag.Originleft + lDeplacementX;
              ObjetPosition_1.GPosition.setLeft(
                this.Nom,
                this.coordonnees.left,
              );
            }
            if (lCoin.bas) {
              lDeplacementY = Math.borner(
                aParamsDrag.pos.y - aParamsDrag.OriginY,
                this.optionsFenetre.hauteurMin - aParamsDrag.OriginHauteur,
                ObjetNavigateur_1.Navigateur.ecranH -
                  13 -
                  aParamsDrag.OriginHauteur -
                  ObjetPosition_1.GPosition.getTop(this.idFenetreContenu),
              );
              this.optionsFenetre.hauteur =
                aParamsDrag.OriginHauteur + lDeplacementY;
              lJContenu.css({
                'min-height': aParamsDrag.OriginHauteur + lDeplacementY + 'px',
              });
            }
            if (lCoin.haut) {
              lDeplacementY = Math.borner(
                aParamsDrag.pos.y - aParamsDrag.OriginY,
                -aParamsDrag.OriginTop,
                aParamsDrag.OriginHauteur - this.optionsFenetre.hauteurMin,
              );
              this.optionsFenetre.hauteur =
                aParamsDrag.OriginHauteur - lDeplacementY;
              lJContenu.css({
                'min-height': aParamsDrag.OriginHauteur - lDeplacementY + 'px',
              });
              this.coordonnees.top = aParamsDrag.OriginTop + lDeplacementY;
              ObjetPosition_1.GPosition.setTop(this.Nom, this.coordonnees.top);
            }
          },
          stop: (aParamsDrag) => {
            if (aParamsDrag.divBloquant) {
              ObjetHtml_1.GHtml.supprimerElementDOM(aParamsDrag.divBloquant);
            }
            $(`#${this.Nom.escapeJQ()}`).removeClass('on-drag');
            this.finRetaillage();
          },
        };
      }
    }
    exports.ObjetFenetreEspace = ObjetFenetreEspace;
  },
  fn: 'objetfenetre_espace.js',
});