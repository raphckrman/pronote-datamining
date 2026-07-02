IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre = void 0;
    const ObjetInterface_1 = require('@cp/script/ObjetInterface');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const Enumere_StructureAffichage_1 = require('@cp/script/Enumere/Enumere_StructureAffichage');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const MethodesTableau_1 = require('@librairies/script/Outils/MethodesTableau');
    const GestionnaireModale_1 = require('@cp/Produit/Script/GestionnaireModale');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const ObjetMenuContextuel_css_1 = require('@cp/Produit/Css/ObjetMenuContextuel.css');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const FocusTrap_1 = require('@cp/Produit/Script/FocusTrap');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IEHtml_BtnImage_css_1 = require('@cp/Produit/Css/IEHtml.BtnImage.css');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetFenetre_Espace_css_1 = require('@cp/Espace/Css/ObjetFenetre_Espace.css');
    const ObjetFenetre_Mobile_css_1 = require('@cp/Mobile/Css/ObjetFenetre_Mobile.css');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const ObjetMenuContextuel_1 = require('@cp/Produit/Script/ObjetMenuContextuel');
    const IEHtml_Combo_1 = require('@cp/Espace/Script/IEHtml.Combo');
    const GestionnaireStickyScroll_1 = require('@cp/Produit/Script/GestionnaireStickyScroll');
    const IconeSvgFermeture_widget_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFermeture_widget');
    const IconeSvgFullscreen_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFullscreen');
    const TradObjetFenetre = ObjetTraduction_1.TraductionsModule.getModule(
      'ObjetFenetre',
      {
        Deplacer: '',
        DeplacerHD: '',
        DeplacerHG: '',
        DeplacerBD: '',
        DeplacerBG: '',
        DeplacerCentrer: '',
        Transformer: '',
        Agrandir: '',
        Reduire: '',
      },
    );
    const uCoordonneesBackup = {};
    class ObjetFenetre extends ObjetInterface_1.ObjetInterface {
      constructor(aParams) {
        super(aParams);
        this._structureBoutons = [];
        this.__surDestructionApresFermeture_ = false;
        this._guidBlocage = undefined;
        this.ecartTailleFenetre = 13;
        this._openEndInitialMobile = false;
        this.openAnimFinishedMobile = false;
        this._initialiserOptionsFenetre();
        this.resetCoordonnees();
        this.EnAffichage = false;
        this.promise = null;
        this._promiseResolve = null;
        this.NomFenetre = this.Nom + '_Fenetre';
        this.idFenetreContenu = this.Nom + '_FenetreContenu';
        this.IdTitre = this.Nom + '_Titre';
        this.IdTitreImage = this.IdTitre + '_image';
        this.IdContenu = this.Nom + '_Contenu';
        this.IdPremierElement = this.NomFenetre;
        this.GenreStructure =
          Enumere_StructureAffichage_1.EStructureAffichage.Autre;
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.fermerFenetres,
          (aForcer) => {
            if (
              aForcer ||
              this.optionsFenetre.avecAbonnementFermetureFenetreGenerale
            ) {
              if (this.estAffiche() && !this.isDestroyed()) {
                this.fermer();
              }
            }
          },
          this,
        );
        if (!IE.estMobile) {
          if (this.Nom) {
            Invocateur_1.Invocateur.abonner(
              Invocateur_1.ObjetInvocateur.events.startResizeNavigateur,
              () => {
                this._preResizePositionnement();
              },
              this,
            );
            Invocateur_1.Invocateur.abonner(
              Invocateur_1.ObjetInvocateur.events.endResizeNavigateur,
              () => {
                this._postResizePositionnement();
              },
              this,
            );
          }
          Invocateur_1.Invocateur.abonner(
            `${ObjetNavigateur_1.Navigateur.getEventInvocateur('pointerdown')}.capture ${ObjetNavigateur_1.Navigateur.getEventInvocateur('keydown')}.capture`,
            (aEvent) => {
              if (
                this.optionsFenetre.fermerFenetreSurClicHorsFenetre &&
                this.estAffiche() &&
                !this.isDestroyed() &&
                aEvent.target &&
                !aEvent.target.closest(`#${this.Nom.escapeJQ()}`) &&
                !GestionnaireModale_1.GestionnaireModale.estJElementBloque(
                  $('#' + this.Nom.escapeJQ()),
                ) &&
                !aEvent.target.closest(
                  `.${ObjetMenuContextuel_css_1.SObjetMenuContextuel.ObjetMenuContexutel}`,
                )
              ) {
                this.fermer();
              }
            },
            this,
          );
        }
      }
      free() {
        if (this.isDestroyed()) {
          return;
        }
        super.free();
        if (IE.estMobile) {
          $('#' + this.Nom.escapeJQ()).remove();
        }
      }
      detruireInstances() {
        if (
          !IE.estMobile &&
          !this.__surDestructionApresFermeture_ &&
          this.estAffiche()
        ) {
          this.fermer(false);
        }
      }
      _initialiserOptionsFenetre() {
        let lOptions = {
          roleWAI: 'dialog',
          listeBoutonsInvisibles: [],
          opaciteVoileModale:
            GestionnaireModale_1.GestionnaireModale.OpaciteVoileBloquant
              .default,
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
          cssFenetre:
            MethodesObjet_1.MethodesObjet.getObjectClass(this) + '_racine',
          avecRetaillage: false,
          largeurMin: 0,
          hauteurMin: 0,
          tailleBandeRetaillage: 3,
          callbackDeplacer: undefined,
          addParametresValidation: undefined,
          surValiderAvantFermer: undefined,
          callback: undefined,
          callbackFermer: undefined,
          callbackApresFermer: undefined,
          listeBoutons: IE.estMobile
            ? ['Fermer']
            : [],
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
          fermerFenetreSurClicHorsFenetre: IE.estMobile,
          couleurFond: (0, AccessApp_1.getApp)().getCouleur().blanc,
          hauteurBandeau: (0, AccessApp_1.getApp)().hauteurBandeau,
          couleurFondBandeau: (0, AccessApp_1.getApp)().getCouleur().fenetre
            .bandeau.fond,
          couleurTexteBandeau: (0, AccessApp_1.getApp)().getCouleur().fenetre
            .bandeau.texte,
          avecAriaDescribedByContenu: false,
          avecTailleSelonContenuMobile: false,
          avecFooterFlottant: IE.estMobile,
          sansPaddingContenu: false,
          themeMenuDark: false,
          avecCroixFermetureMobile: IE.estMobile,
          estFicheMobile: false,
          avecComposeBasInFooter: false,
          avecAnimationOuverture: IE.estMobile,
          avecAnimationFermeture: IE.estMobile,
        };
        this.optionsFenetre = lOptions;
        this._structureBoutons = null;
      }
      setParametresGeneraux() {
        if (!IE.estMobile) {
          ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
        }
      }
      getZIndex() {
        return 1100;
      }
      setOptionsFenetre(aOptions) {
        Object.assign(this.optionsFenetre, aOptions);
        this._structureBoutons = null;
        this.$refresh();
        return this;
      }
      _getOptionsFenetre() {
        return this.optionsFenetre;
      }
      setBoutonActif(I, AActif) {
        if (this.optionsFenetre.listeBoutonsInactifs) {
          this.optionsFenetre.listeBoutonsInactifs[I] = !AActif;
          this.$refresh();
        }
      }
      jsxIfAvecTitreMobile() {
        return (
          !!this.optionsFenetre.titre ||
          !!this.optionsFenetre.avecCroixFermetureMobile
        );
      }
      construireStructureMobile() {
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            FocusTrap_1.FocusTrap,
            { nodeQuiPrendFocusSiAucunElementFocusable: this.IdTitre },
            IE.jsx.str(
              'div',
              {
                id: this.NomFenetre,
                ie_node: this.jsxNodeCreationNodeFenetre.bind(this),
                class: [
                  !this.optionsFenetre.avecTailleSelonContenuMobile
                    ? ' height-max'
                    : '',
                  'ObjetFenetre_Mobile',
                  this.optionsFenetre.cssFenetre || '',
                  this.optionsFenetre.themeMenuDark
                    ? 'couleur-menu-dark disable-dark-mode'
                    : '',
                ],
                role: this.optionsFenetre.roleWAI || 'dialog',
                'aria-modal': this.optionsFenetre.modale ? `true` : false,
              },
              IE.jsx.str(
                'div',
                { class: 'FormSaisie ofm-design' },
                IE.jsx.str(
                  'header',
                  {
                    class: [
                      GestionnaireStickyScroll_1.GestionnaireStickyScroll
                        .stickyTop,
                      GestionnaireStickyScroll_1.GestionnaireStickyScroll
                        .stickyAlwaysVisible,
                    ],
                  },
                  IE.jsx.str('div', {
                    id: this.IdTitre,
                    class: 'Fenetre_Titre',
                    ie_html: this.jsxGetHtmlTitreMobile.bind(this),
                    ie_if: this.jsxIfAvecTitreMobile.bind(this),
                    tabindex: '-1',
                    ie_draggable: this.optionsFenetre.avecCroixFermetureMobile
                      ? this.jsxDragTitre.bind(this)
                      : false,
                  }),
                  IE.jsx.str(
                    'div',
                    {
                      ie_if: this.jsxIfAvecBtnFermetureMobile.bind(this),
                      class: [
                        ObjetFenetre_Mobile_css_1.SObjetFenetre_Mobile
                          .btnFermeture,
                      ],
                    },
                    IE.jsx.str(
                      'div',
                      null,
                      IE.jsx.str(
                        IEHtml_BtnImage_1.BtnIcon,
                        {
                          ie_model:
                            this.jsxModeleBoutonCroixFermeture.bind(this),
                          title:
                            'Fermer',
                          class: [IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple],
                        },
                        IE.jsx.str(
                          IconeSvgFermeture_widget_1.IconeSvgFermeture_widget,
                          null,
                        ),
                      ),
                    ),
                  ),
                ),
                IE.jsx.str(
                  'div',
                  {
                    class: [
                      'navigation-contain',
                      GestionnaireStickyScroll_1.GestionnaireStickyScroll
                        .stickyTop,
                      GestionnaireStickyScroll_1.GestionnaireStickyScroll
                        .stickyAlwaysVisible,
                    ],
                    ie_class: this.jsxGetClassStickyScrollMobile.bind(this),
                  },
                  this.optionsFenetre.getComboModelNavigationMobile &&
                    IE.jsx.str(IEHtml_Combo_1.Combo, {
                      ie_model:
                        this.optionsFenetre.getComboModelNavigationMobile,
                    }),
                ),
                IE.jsx.str('section', {
                  class: [
                    ObjetFenetre_Mobile_css_1.SObjetFenetre_Mobile.content,
                    this.optionsFenetre.sansPaddingContenu
                      ? 'without-padding'
                      : '',
                  ],
                  style: 'display:none;',
                  ie_node: this.jsxGetNodeContentMobile.bind(this),
                }),
                IE.jsx.str('footer', {
                  class: [
                    GestionnaireStickyScroll_1.GestionnaireStickyScroll
                      .stickyBottom,
                    this.optionsFenetre.avecFooterFlottant
                      ? GestionnaireStickyScroll_1.GestionnaireStickyScroll
                          .stickyAlwaysVisible
                      : '',
                  ],
                  ie_class: this.jsxGetClassStickyScrollMobile.bind(this),
                  ie_html: this.jsxGetHtmlFooterMobile.bind(this),
                }),
              ),
            ),
            IE.jsx.str('div', {
              class: 'ObjetFenetre_Mobile-overlay hide',
              ie_eventmap: {
                name: 'eventmapoverlay',
                validation: () => this.jsxNodeOverlayValidationMobile(),
              },
            }),
          ),
        );
      }
      construireStructureDesktop() {
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
        const lHtmlBoutons = this.composeBoutonsDesktop();
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
          IE.jsx.str(
            FocusTrap_1.FocusTrap,
            { nodeQuiPrendFocusSiAucunElementFocusable: this.IdTitre },
            IE.jsx.str(
              'div',
              {
                id: this.NomFenetre,
                ie_node: this.jsxNodeCreationNodeFenetre.bind(this),
                'aria-labelledby': this.optionsFenetre.avecTitre
                  ? this.IdTitre
                  : false,
                'aria-describedby': this.optionsFenetre
                  .avecAriaDescribedByContenu
                  ? this.IdContenu
                  : false,
                class: [
                  ObjetFenetre_Espace_css_1.SObjetFenetre_Espace
                    .ObjetFenetre_Espace,
                  this.optionsFenetre.cssFenetre || '',
                ],
                tabindex: '-1',
                role: this.optionsFenetre.roleWAI || 'dialog',
                'aria-modal': 'true',
              },
              IE.jsx.str(
                'div',
                {
                  id: this.idFenetreContenu,
                  class: ['Fenetre_Cadre ombre-cadre'],
                  style: 'box-sizing:border-box; ' + LStyle,
                },
                this.optionsFenetre.avecTitre &&
                  IE.jsx.str(
                    'div',
                    {
                      class:
                        ObjetFenetre_Espace_css_1.SObjetFenetre_Espace
                          .Fenetre_Titre,
                    },
                    IE.jsx.str('h1', {
                      id: this.IdTitre,
                      class:
                        ObjetFenetre_Espace_css_1.SObjetFenetre_Espace
                          .ZoneDeplacementFenetre,
                      ie_html: this._getTitreFenetre.bind(this),
                      ie_draggable: this.getDragFenetre.bind(this),
                      tabindex: '-1',
                    }),
                  ),
                IE.jsx.str(
                  'div',
                  {
                    class:
                      ObjetFenetre_Espace_css_1.SObjetFenetre_Espace
                        .ctaConteneur,
                  },
                  IE.jsx.str(
                    IEHtml_BtnImage_1.BtnIcon,
                    {
                      class: [
                        IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImageIcon,
                        ObjetFenetre_Espace_css_1.SObjetFenetre_Espace.asButton,
                      ],
                      ie_model: this.jsxModeleBoutonCroixFermeture.bind(this),
                      title: 'Fermer',
                    },
                    IE.jsx.str(
                      IconeSvgFermeture_widget_1.IconeSvgFermeture_widget,
                      null,
                    ),
                  ),
                  this.construireBtnDeplacer(
                    ObjetFenetre_Espace_css_1.SObjetFenetre_Espace.asButton,
                  ),
                ),
                IE.jsx.str(
                  'div',
                  {
                    id: `${this.Nom}_Res`,
                    class: [
                      'Fenetre_Espace',
                      this.optionsFenetre.avecScroll
                        ? ObjetFenetre_Espace_css_1.SObjetFenetre_Espace
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
                (lHtmlBas || lHtmlBoutons) &&
                  IE.jsx.str(
                    'div',
                    null,
                    IE.jsx.str(
                      'div',
                      { class: 'zone-bas' },
                      lHtmlBas !== '' &&
                        IE.jsx.str(
                          'div',
                          { class: 'zone-bas-gauche Fenetre_Bas' },
                          lHtmlBas,
                        ),
                      lHtmlBoutons,
                    ),
                  ),
                this.optionsFenetre.avecRetaillage &&
                  IE.jsx.str(
                    IE.jsx.fragment,
                    null,
                    IE.jsx.str('div', {
                      class: 'fenetre-resize right',
                      ie_draggable: this.getDragResize.bind(this),
                    }),
                    IE.jsx.str('div', {
                      class: 'fenetre-resize bottom',
                      ie_draggable: this.getDragResize.bind(this),
                    }),
                    IE.jsx.str('div', {
                      class: 'fenetre-resize left',
                      ie_draggable: this.getDragResize.bind(this),
                    }),
                    IE.jsx.str('div', {
                      class: 'fenetre-resize top',
                      ie_draggable: this.getDragResize.bind(this),
                    }),
                    IE.jsx.str('div', {
                      class: 'fenetre-resize coin Image_Retailler',
                      ie_draggable: this.getDragResize.bind(this),
                    }),
                  ),
              ),
            ),
          ),
        );
      }
      construireStructureAffichageAutre() {
        if (IE.estMobile) {
          return this.construireStructureMobile();
        }
        return this.construireStructureDesktop();
      }
      jsxNodeOverlayValidationMobile() {
        if (
          this.EnAffichage &&
          this.openAnimFinishedMobile &&
          (!this.optionsFenetre.modale ||
            this.optionsFenetre.fermerFenetreSurClicHorsFenetre)
        ) {
          this.eventSurCroixFermeture();
        }
      }
      _composerMobile(aHtml) {
        const H = [
          IE.jsx.str(
            'div',
            { class: 'wrapper-contenu' },
            IE.jsx.str(
              'div',
              { id: this.IdContenu, class: 'Fenetre_Contenu' },
              aHtml || this.composeContenu(),
            ),
          ),
        ];
        if (!this.optionsFenetre.avecComposeBasInFooter) {
          const lHtmlBas = this.composeBas ? this.composeBas() : '';
          if (lHtmlBas) {
            H.push(
              IE.jsx.str(
                'div',
                {
                  class: [
                    ObjetFenetre_Mobile_css_1.SObjetFenetre_Mobile.Fenetre_Bas,
                    GestionnaireStickyScroll_1.GestionnaireStickyScroll
                      .stickyBottom,
                    GestionnaireStickyScroll_1.GestionnaireStickyScroll
                      .stickyAlwaysVisible,
                  ],
                },
                lHtmlBas,
              ),
            );
          }
        }
        return H.join('');
      }
      jsxGetNodeContentMobile(aNode) {
        ObjetHtml_1.GHtml.setHtml(
          aNode,
          this._composerMobile(
            this.optionsFenetre.estFicheMobile ? '&nbsp;' : '',
          ),
        );
      }
      jsxGetHtmlFooterMobile() {
        let lHtml =
          this.optionsFenetre.avecComposeBasInFooter && this.composeBas
            ? this.composeBas()
            : '';
        const lHtmlBoutons = this.jsxGetHtmlRepeatBoutons();
        if (lHtmlBoutons) {
          lHtml += IE.jsx.str('div', { class: 'as-fluid-wrap' }, lHtmlBoutons);
        }
        return lHtml;
      }
      jsxIfAvecBtnFermetureMobile() {
        return !!this.optionsFenetre.avecCroixFermetureMobile;
      }
      jsxGetClassStickyScrollMobile() {
        let lResult = this._getClassScrollContentMobile(
          $('#' + this.NomFenetre.escapeJQ()),
        );
        if (!lResult) {
          lResult = this._getClassScrollContentMobile(
            this._getJContentMobile(),
          );
        }
        return lResult;
      }
      jsxGetHtmlTitreMobile() {
        const lTitre = this._getTitreFenetre() || '';
        return '<h1 class="ie-titre">' + lTitre + '</h1>';
      }
      _getJContentMobile() {
        return $('#' + this.NomFenetre.escapeJQ()).find('>div>section.content');
      }
      _getClassScrollContentMobile(aJNode) {
        if (aJNode.length === 1) {
          if (aJNode.prop('scrollHeight') > Math.ceil(aJNode.outerHeight())) {
            return 'avec-scroll';
          }
        }
        return '';
      }
      jsxAvecBoutonsDesktop() {
        return (
          !!this.optionsFenetre.listeBoutons &&
          this.optionsFenetre.listeBoutons.length > 0
        );
      }
      composeBoutonsDesktop() {
        return IE.jsx.str(
          'div',
          {
            ie_if: this.jsxAvecBoutonsDesktop.bind(this),
            class: 'btn-conteneur',
            ie_html: this.jsxGetHtmlRepeatBoutons.bind(this),
          },
          ' ',
        );
      }
      getListeBoutons() {
        var _a;
        if (!this._structureBoutons) {
          this._structureBoutons = [];
          const T = this._structureBoutons;
          (_a = this.optionsFenetre.listeBoutons) === null || _a === void 0
            ? void 0
            : _a.forEach((aElement, aIndex) => {
                const lElement = {
                  index: undefined,
                  libelle: undefined,
                  theme: undefined,
                  sansFermeture: undefined,
                };
                if (typeof aElement === 'string') {
                  lElement.libelle = aElement;
                } else {
                  Object.assign(lElement, aElement);
                }
                if (aElement) {
                  lElement.index = aIndex;
                  lElement.theme = lElement.theme
                    ? lElement.theme
                    : lElement.libelle ===
                        'Valider'
                      ? Type_ThemeBouton_1.TypeThemeBouton.primaire
                      : Type_ThemeBouton_1.TypeThemeBouton.secondaire;
                  lElement.sansFermeture = lElement.sansFermeture
                    ? lElement.sansFermeture
                    : false;
                  T.push(lElement);
                }
              });
        }
        return this._structureBoutons || [];
      }
      jsxModelBoutonFenetre(aBouton) {
        return {
          event: () => {
            this.eventFenetreBtn(aBouton);
          },
          getDisabled: () => {
            return this.getDisabledFenetreBtn(aBouton);
          },
        };
      }
      eventFenetreBtn(aBouton) {
        var _a, _b;
        this.surValidation(
          (_b =
            (_a = aBouton.index) !== null && _a !== void 0
              ? _a
              : ObjetFenetre.cIndiceCroixFermeture) !== null && _b !== void 0
            ? _b
            : -1,
        );
      }
      getLibelleFenetreBtn(aBouton) {
        return aBouton.libelle;
      }
      getDisabledFenetreBtn(aBouton) {
        if (aBouton.getDisabled) {
          return aBouton.getDisabled();
        }
        return (
          !!this.optionsFenetre.listeBoutonsInactifs &&
          this.optionsFenetre.listeBoutonsInactifs[aBouton.index || -1] === true
        );
      }
      composeContenu() {
        return '';
      }
      jsxNodeCreationNodeFenetre(aNode) {
        const lInstance = this;
        $(aNode).on({
          keyup(aEvent) {
            if (aEvent.which === ToucheClavier_1.ToucheClavier.Echap) {
              lInstance.eventSurCroixFermeture();
            }
          },
          'pointerdown focusin'() {
            if (!IE.estMobile) {
              GestionnaireModale_1.GestionnaireModale.enPremierPlan(
                lInstance.getNom(),
              );
            }
          },
        });
      }
      focusSurPremierElement() {
        if (ObjetHtml_1.GHtml.elementExiste(this.IdTitre)) {
          ObjetHtml_1.GHtml.setFocus(this.IdTitre);
          return;
        }
        this.focusSurPremierOuDernierElement(false);
      }
      focusSurPremierOuDernierElement(aDernierElementFocus) {
        var _a;
        const lTab = ObjetHtml_1.GHtml.getElementsFocusablesDElement(
          this.NomFenetre,
          { avecTabindexNegatif: false },
        );
        if (lTab.length > 0) {
          const lNode = aDernierElementFocus ? lTab[lTab.length - 1] : lTab[0];
          (_a = lNode === null || lNode === void 0 ? void 0 : lNode.focus) ===
            null || _a === void 0
            ? void 0
            : _a.call(lNode);
          let lFocusReussi = true;
          try {
            lFocusReussi = !!lNode && document.activeElement === lNode;
          } catch (e) {}
          if (lFocusReussi) {
            return;
          }
        }
        if (ObjetHtml_1.GHtml.elementExiste(this.IdTitre)) {
          ObjetHtml_1.GHtml.setFocus(this.IdTitre);
        } else {
        }
      }
      getBoutonNumero(aNumeroBouton) {
        let lBouton = {};
        if (this.optionsFenetre.listeBoutons) {
          const lBoutonFenetre =
            this.optionsFenetre.listeBoutons[aNumeroBouton];
          if (typeof lBoutonFenetre === 'string') {
            lBouton = { libelle: lBoutonFenetre };
          } else {
            lBouton = lBoutonFenetre;
          }
        }
        return lBouton || { annuler: true };
      }
      setBoutonVisible(I, aVisible) {
        if (this.optionsFenetre.listeBoutonsInvisibles) {
          this.optionsFenetre.listeBoutonsInvisibles[I] = !aVisible;
        }
        this.$refresh();
      }
      getParametresValidation(aNumeroBouton) {
        const lParametres = {
          instance: this,
          bouton: this.getBoutonNumero(aNumeroBouton),
          numeroBouton: aNumeroBouton,
        };
        if (
          MethodesObjet_1.MethodesObjet.isFunction(
            this.optionsFenetre.addParametresValidation,
          )
        ) {
          Object.assign(
            lParametres,
            this.optionsFenetre.addParametresValidation.call(
              this.Pere,
              lParametres,
            ),
          );
        }
        return lParametres;
      }
      promiseResolve(aParams) {
        if (this._promiseResolve) {
          this._promiseResolve(aParams);
          this._promiseResolve = null;
        }
      }
      surValidation(ANumeroBouton) {
        const lParams = this.getParametresValidation(ANumeroBouton);
        this.promiseResolve(lParams);
        if (this.optionsFenetre.surValiderAvantFermer) {
          this.optionsFenetre.surValiderAvantFermer.call(this.Pere, lParams);
        }
        if (
          !lParams ||
          !lParams.bouton ||
          typeof lParams.bouton !== 'object' ||
          !lParams.bouton.sansFermeture
        ) {
          this.fermer();
        }
        if (this.optionsFenetre.callback) {
          this.optionsFenetre.callback.call(this.Pere, ANumeroBouton, lParams);
        }
        this.callback.appel(ANumeroBouton, lParams);
      }
      async fermer(aSurInteractionUtilisateur) {
        if (!this.estAffiche() || this._estDetruite) {
          return;
        }
        if (!IE.estMobile) {
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
        }
        try {
          if (this._focusPrecedent && $(this._focusPrecedent).length === 1) {
            if (ObjetHtml_1.GHtml.focusEstDansElement(this.Nom)) {
              $(this._focusPrecedent).focus();
            }
            this._focusPrecedent = null;
          }
        } catch (e) {}
        this.EnAffichage = false;
        if (this.surFermer) {
          this.surFermer();
        }
        if (
          MethodesObjet_1.MethodesObjet.isFunction(
            this.optionsFenetre.callbackFermer,
          )
        ) {
          this.optionsFenetre.callbackFermer();
        }
        if (
          MethodesObjet_1.MethodesObjet.isFunction(
            this.optionsFenetre.callbackApresFermer,
          )
        ) {
          this.optionsFenetre.callbackApresFermer();
        }
        this.promiseResolve({ surFermer: true });
        this.$refresh();
        if (IE.estMobile) {
          await this._fermetureAnimationPromise();
        }
        if (!this.isDestroyed()) {
          ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
        }
        if (this.destructionSurFermeture && !this.__enCoursDeDestruction) {
          this.__surDestructionApresFermeture_ = true;
          this.free();
        }
        return;
      }
      async afficher(aHtmlAffichage) {
        if (this.isDestroyed()) {
          return Promise.reject();
        }
        if (IE.estMobile) {
          return this.afficherMobile(aHtmlAffichage);
        }
        return this.afficherDesktop(aHtmlAffichage);
      }
      async afficherMobile(aHtmlAffichage) {
        if (this.isDestroyed()) {
          return Promise.reject();
        }
        const lEnAffichage_old = this.EnAffichage;
        this.EnAffichage = true;
        if (!lEnAffichage_old) {
          this._focusPrecedent = null;
          if (
            !this.optionsFenetre.bloquerFocus &&
            this.optionsFenetre.restaurerFocusSurFermeture
          ) {
            this._focusPrecedent = document.activeElement;
          }
        }
        Invocateur_1.Invocateur.evenement('surAffichageFenetre');
        if (
          !lEnAffichage_old &&
          ObjetHtml_1.GHtml.elementExiste(this.NomFenetre)
        ) {
          this._ouvertureAnimationPromise();
        }
        const lJContenu = this._getJContentMobile();
        if (MethodesObjet_1.MethodesObjet.isString(aHtmlAffichage)) {
          lJContenu.ieHtml(this._composerMobile(aHtmlAffichage)).show();
        }
        lJContenu.show();
        this.$refresh();
        this.promise = new Promise((aResolve) => {
          this._promiseResolve = aResolve;
        });
        return this.promise;
      }
      async afficherDesktop(aHtmlAffichage) {
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
          this.$refresh(true);
          this.EnAffichage = false;
          if (MethodesObjet_1.MethodesObjet.isString(aHtmlAffichage)) {
            ObjetHtml_1.GHtml.setHtml(this.IdContenu, aHtmlAffichage, {
              instance: this,
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
          this.$refresh();
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
      surAfficher() {}
      actualiser() {
        this.surFixerTaille();
        ObjetHtml_1.GHtml.setHtml(this.IdContenu, this.composeContenu(), {
          instance: this,
        });
      }
      surFermer() {}
      estAffiche() {
        return this.EnAffichage === true;
      }
      jsxModeleBoutonCroixFermeture() {
        return {
          event: () => {
            this.eventSurCroixFermeture();
          },
        };
      }
      jsxModeleBoutonDeplacer() {
        return {
          event: (aEvent, aNode) => {
            ObjetMenuContextuel_1.ObjetMenuContextuel.afficher({
              pere: this,
              initCommandes: (aMenu) => {
                aMenu.addTitre(TradObjetFenetre.Deplacer);
                aMenu.add(TradObjetFenetre.DeplacerHD, true, () => {
                  this.positionnerFenetre({
                    top: 0,
                    left: ObjetNavigateur_1.Navigateur.ecranL,
                    ignorerCoordonnees: true,
                  });
                });
                aMenu.add(TradObjetFenetre.DeplacerHG, true, () => {
                  this.positionnerFenetre({
                    top: 0,
                    left: 0,
                    ignorerCoordonnees: true,
                  });
                });
                aMenu.add(TradObjetFenetre.DeplacerBD, true, () => {
                  this.positionnerFenetre({
                    top: ObjetNavigateur_1.Navigateur.ecranH,
                    left: ObjetNavigateur_1.Navigateur.ecranL,
                    ignorerCoordonnees: true,
                  });
                });
                aMenu.add(TradObjetFenetre.DeplacerBG, true, () => {
                  this.positionnerFenetre({
                    top: ObjetNavigateur_1.Navigateur.ecranH,
                    left: 0,
                    ignorerCoordonnees: true,
                  });
                });
                aMenu.add(TradObjetFenetre.DeplacerCentrer, true, () => {
                  const lPosSourisBak = this.optionsFenetre.positionSurSouris;
                  const lPosIdBak = this.optionsFenetre.idPositionnement;
                  try {
                    this.optionsFenetre.positionSurSouris = false;
                    this.optionsFenetre.idPositionnement = undefined;
                    this.positionnerFenetre({
                      centrerParDefaut: true,
                      ignorerCoordonnees: true,
                    });
                  } finally {
                    this.optionsFenetre.idPositionnement = lPosIdBak;
                    this.optionsFenetre.positionSurSouris = lPosSourisBak;
                  }
                });
                if (this.optionsFenetre.avecRetaillage) {
                  aMenu.avecSeparateurSurSuivant();
                  aMenu.addTitre(TradObjetFenetre.Transformer);
                  aMenu.add(TradObjetFenetre.Agrandir, true, () => {
                    this.agrandirReduireFenetre(true);
                  });
                  aMenu.add(TradObjetFenetre.Reduire, true, () => {
                    this.agrandirReduireFenetre(false);
                  });
                }
              },
              id: aNode,
              options: {
                prioriteBlocageAbonnement:
                  this.optionsFenetre.prioriteBlocageAbonnement,
              },
            });
          },
        };
      }
      agrandirReduireFenetre(aAgrandir) {
        const lEcart = this.ecartTailleFenetre * 2;
        const lCssRetaillage = {
          width: aAgrandir
            ? Math.max(
                this.optionsFenetre.largeurMin || 0,
                ObjetNavigateur_1.Navigateur.ecranL - lEcart,
              )
            : Math.min(
                this.optionsFenetre.largeurMin || 0,
                ObjetNavigateur_1.Navigateur.ecranL - lEcart,
              ),
          'min-height': aAgrandir
            ? Math.max(
                this.optionsFenetre.hauteurMin || 0,
                ObjetNavigateur_1.Navigateur.ecranH - lEcart,
              )
            : Math.min(
                this.optionsFenetre.hauteurMin || 0,
                ObjetNavigateur_1.Navigateur.ecranH - lEcart,
              ),
        };
        this.debutRetaillage();
        $('#' + this.idFenetreContenu.escapeJQ()).css(lCssRetaillage);
        this.surFixerTaille();
        ObjetPosition_1.GPosition.centrer(this.Nom);
        this.setCoordonnees();
      }
      construireBtnDeplacer(aCssSupp = '') {
        return IE.jsx.str(
          IEHtml_BtnImage_1.BtnIcon,
          {
            class: [
              IEHtml_BtnImage_css_1.SIEHtmlBtnImage.btnImageIcon,
              aCssSupp,
            ],
            ie_model: this.jsxModeleBoutonDeplacer.bind(this),
            title: TradObjetFenetre.Deplacer,
            'aria-haspopup': 'menu',
          },
          IE.jsx.str(IconeSvgFullscreen_1.IconeSvgFullscreen, null),
        );
      }
      eventSurCroixFermeture() {
        this.surValidation(ObjetFenetre.cIndiceCroixFermeture);
      }
      setBoutonFocus(aVal, avecDecalageFocus) {
        let lIndice = aVal;
        if (MethodesObjet_1.MethodesObjet.isObject(aVal)) {
          lIndice = MethodesTableau_1.MethodesTableau.indexOfMask(
            this.optionsFenetre.listeBoutons,
            aVal,
          );
        }
        if (lIndice >= 0) {
          ObjetHtml_1.GHtml.setFocus(
            this._getIdBoutons(lIndice),
            true,
            avecDecalageFocus,
          );
        }
        return this;
      }
      composeBas() {
        return this.optionsFenetre.htmlFooter || '';
      }
      positionnerFenetre(aParams) {
        if (IE.estMobile) {
          return this;
        }
        const lParams = Object.assign(
          {
            left: undefined,
            top: undefined,
            id: '',
            positionSurSouris: false,
            positionSurSourisSiAffiche: false,
            enAffichage: undefined,
            centrerParDefaut: true,
          },
          aParams,
        );
        if (ObjetStyle_1.GStyle.styleSheetDisabled()) {
          return this;
        }
        let lEnAffichage = this.EnAffichage;
        if (lParams.enAffichage === false || lParams.enAffichage === true) {
          lEnAffichage = lParams.enAffichage;
        }
        if (
          !lParams.ignorerCoordonnees &&
          this.existeCoordonnees() &&
          ObjetPosition_1.GPosition.placer
        ) {
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
      existeCoordonnees() {
        return (
          !IE.estMobile &&
          !!this.optionsFenetre.conserverCoordonnees &&
          this.coordonnees !== null &&
          this.coordonnees !== undefined &&
          !!(this.coordonnees.left && this.coordonnees.top)
        );
      }
      setCoordonnees() {
        if (IE.estMobile) {
          return;
        }
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
      positionnerSousId(aId) {
        if (IE.estMobile) {
          return;
        }
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
        if (IE.estMobile) {
          return;
        }
        if (
          !this.optionsFenetre.avecRetaillage &&
          Math.floor($('#' + this.NomFenetre.escapeJQ()).width() || 0) <
            Math.floor(
              $('#' + this.idFenetreContenu.escapeJQ()).outerWidth() || 0,
            )
        ) {
          $('#' + this.NomFenetre.escapeJQ()).css(
            'min-width',
            $('#' + this.idFenetreContenu.escapeJQ()).width() + 'px',
          );
        }
      }
      _getIdBoutons(aIndice) {
        return this.Nom + '_btns_' + aIndice;
      }
      setBoutonLibelle(I, aLibelle) {
        if (this.optionsFenetre.listeBoutons) {
          if (
            MethodesObjet_1.MethodesObjet.isObject(
              this.optionsFenetre.listeBoutons[I],
            )
          ) {
            this.optionsFenetre.listeBoutons[I].libelle = aLibelle;
          } else {
            this.optionsFenetre.listeBoutons[I] = aLibelle;
          }
        }
        this._structureBoutons = null;
        this.$refresh();
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
      estObjetGraphiqueFenetre() {
        return true;
      }
      avecEventResizeNavigateur() {
        return false;
      }
      jsxGetHtmlRepeatBoutons() {
        let lIndice = 0;
        const lHtml = [];
        let lTabBoutons = this.getListeBoutons();
        for (const lBouton of lTabBoutons) {
          let lMargin = 0;
          if (!IE.estMobile) {
            lMargin = 4;
            if (
              lBouton.theme === Type_ThemeBouton_1.TypeThemeBouton.primaire &&
              lIndice > 0 &&
              lTabBoutons[lIndice - 1] &&
              lTabBoutons[lIndice - 1].theme !==
                Type_ThemeBouton_1.TypeThemeBouton.primaire
            ) {
              lMargin = 8;
            }
          }
          lHtml.push(this.construireBouton(lBouton, lMargin));
          lIndice++;
        }
        return lHtml.join('');
      }
      construireBouton(aBouton, aMargin) {
        const lClasses = [];
        if (
          aBouton.theme &&
          MethodesObjet_1.MethodesObjet.isString(aBouton.theme)
        ) {
          lClasses.push(aBouton.theme);
        }
        return IE.jsx.str(
          IEHtml_Bouton_1.Bouton,
          {
            id: this._getIdBoutons(aBouton.index),
            ie_model: this.jsxModelBoutonFenetre.bind(this, aBouton),
            class: lClasses.join(' '),
            style: {
              marginLeft: IE.estMobile ? undefined : aMargin,
              display:
                this.optionsFenetre.listeBoutonsInvisibles &&
                this.optionsFenetre.listeBoutonsInvisibles[aBouton.index] ===
                  true
                  ? 'none'
                  : undefined,
            },
            ie_tooltipdescribe: aBouton.tooltip || false,
          },
          this.getLibelleFenetreBtn(aBouton),
        );
      }
      getDragFenetre() {
        if (IE.estMobile) {
          return null;
        }
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
            lJFenetre.css({ left: Math.max(0, lLeft), top: Math.max(0, lTop) });
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
      _getTitreFenetre() {
        return this.optionsFenetre.titre
          ? MethodesObjet_1.MethodesObjet.isFunction(this.optionsFenetre.titre)
            ? this.optionsFenetre.titre() || ''
            : this.optionsFenetre.titre
          : '';
      }
      initAfficher(aParametres) {
        var _a;
        this.destructionSurFermeture =
          (_a =
            aParametres === null || aParametres === void 0
              ? void 0
              : aParametres.destructionSurFermeture) !== null && _a !== void 0
            ? _a
            : true;
        IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(
          this.getNom(),
          this.getZIndex ? this.getZIndex() : 1100,
        );
        $('#' + this.getNom().escapeJQ()).on('destroyed', () => {
          var _a;
          (_a =
            aParametres === null || aParametres === void 0
              ? void 0
              : aParametres.surFermeture) === null || _a === void 0
            ? void 0
            : _a.call(aParametres, this);
          if (this.destructionSurFermeture) {
            this.free();
          }
        });
        if (
          aParametres === null || aParametres === void 0
            ? void 0
            : aParametres.options
        ) {
          this.setOptionsFenetre(aParametres.options);
        }
        if (
          (aParametres === null || aParametres === void 0
            ? void 0
            : aParametres.initialiser) !== false
        ) {
          if (
            MethodesObjet_1.MethodesObjet.isFunction(
              aParametres === null || aParametres === void 0
                ? void 0
                : aParametres.initialiser,
            )
          ) {
            aParametres.initialiser.call(this.Pere, this);
          }
          this.initialiser();
        }
        return this;
      }
      resetCoordonnees() {
        if (IE.estMobile) {
          return;
        }
        this.coordonnees = Object.assign(this.coordonnees || {}, {
          left: null,
          top: null,
          width: null,
          height: null,
        });
      }
      _preResizePositionnement() {
        if (IE.estMobile) {
          return;
        }
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
        if (IE.estMobile) {
          return;
        }
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
        if (this.optionsFenetre.avecRetaillage) {
          const lRectFenetre = ObjetPosition_1.GPosition.getClientRect(
            this.idFenetreContenu,
          );
          const lCssRetaillage = {};
          const lEcart = this.ecartTailleFenetre * 2;
          if (
            lRectFenetre.width + lRectFenetre.left >
            ObjetNavigateur_1.Navigateur.ecranL - lEcart
          ) {
            lCssRetaillage.width = Math.max(
              this.optionsFenetre.largeurMin || 0,
              ObjetNavigateur_1.Navigateur.ecranL - lEcart,
            );
          }
          if (
            lRectFenetre.height + lRectFenetre.top >
            ObjetNavigateur_1.Navigateur.ecranH - lEcart
          ) {
            lCssRetaillage['min-height'] = Math.max(
              this.optionsFenetre.hauteurMin || 0,
              ObjetNavigateur_1.Navigateur.ecranH - lEcart,
            );
          }
          if (
            MethodesObjet_1.MethodesObjet.isNumber(
              lCssRetaillage['min-height'],
            ) ||
            MethodesObjet_1.MethodesObjet.isNumber(lCssRetaillage.width)
          ) {
            this.debutRetaillage();
            $('#' + this.idFenetreContenu.escapeJQ()).css(lCssRetaillage);
            this.surFixerTaille();
          }
        }
        this.setCoordonnees();
        delete this._tempResize;
      }
      jsxDragTitre() {
        const lThis = this;
        return {
          drag(aParamsDrag) {
            const lDecalage = Math.min(0, -aParamsDrag.offset.y);
            $(`#${lThis.NomFenetre.escapeJQ()}`).css('bottom', lDecalage);
          },
          stop(aParamsDrag) {
            if (aParamsDrag.offset.y > 0) {
              const lJFenetre = $(`#${lThis.NomFenetre.escapeJQ()}`);
              if (aParamsDrag.offset.y < 50) {
                lJFenetre.data('_ouverture_drag', true);
                lThis._ouvertureAnimationPromise();
              } else {
                lThis.eventSurCroixFermeture();
              }
            }
          },
        };
      }
      async _ouvertureAnimationPromise() {
        if (!IE.estMobile) {
          return;
        }
        this.openAnimFinishedMobile = false;
        return new Promise((aResolve) => {
          const lJFenetre = $('#' + this.NomFenetre.escapeJQ());
          const lJInstance = $(`#${this.Nom.escapeJQ()}`);
          lJInstance.css(
            'z-index',
            ObjetNavigateur_1.Navigateur.getZIndexModalMobile(true),
          );
          lJInstance.show();
          const lJOverlay = lJInstance.find('.ObjetFenetre_Mobile-overlay');
          lJOverlay.removeClass('hide');
          let lAvecOpacite = true;
          if (lJFenetre.data('_ouverture_drag') === true) {
            lAvecOpacite = false;
            lJFenetre.data('_ouverture_drag', null);
          }
          lJFenetre.finish().animate(
            { bottom: '0%' },
            {
              duration: this.optionsFenetre.avecAnimationOuverture ? 300 : 0,
              step(aNow, fx) {
                if (lAvecOpacite) {
                  lJOverlay.css({ opacity: fx.pos });
                }
              },
              done: () => {
                var _a, _b, _c;
                this.openAnimFinishedMobile = true;
                if (!this._openEndInitialMobile) {
                  (_a = this.surAfficher) === null || _a === void 0
                    ? void 0
                    : _a.call(this);
                  (_c = (_b = this.optionsFenetre).callbackSurAfficher) ===
                    null || _c === void 0
                    ? void 0
                    : _c.call(_b);
                }
                this._openEndInitialMobile =
                  !this.optionsFenetre.estFicheMobile;
                if (!this.optionsFenetre.bloquerFocus) {
                  this.focusSurPremierElement();
                }
                this.$refresh();
                aResolve();
              },
            },
          );
        });
      }
      async _fermetureAnimationPromise() {
        if (!IE.estMobile) {
          return;
        }
        const lJFenetre = $('#' + this.NomFenetre.escapeJQ());
        const lJInstance = $(`#${this.Nom.escapeJQ()}`);
        lJInstance.css(
          'z-index',
          ObjetNavigateur_1.Navigateur.getZIndexModalMobile(false),
        );
        const lJOverlay = lJInstance.find('.ObjetFenetre_Mobile-overlay');
        return new Promise((aResolve) => {
          lJFenetre.finish().animate(
            { bottom: '-100%' },
            {
              duration: this.optionsFenetre.avecAnimationFermeture ? 200 : 0,
              step(aNow, fx) {
                lJOverlay.css({ opacity: 1 - fx.pos });
              },
              done: () => {
                lJInstance.hide();
                lJOverlay.addClass('hide');
                aResolve();
              },
            },
          );
        });
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
                  this.ecartTailleFenetre -
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
                  this.ecartTailleFenetre -
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
      _creerResizeObserver() {
        if (IE.estMobile) {
          return;
        }
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
      getHeightMaxIdSelonEcran(aId) {
        return (
          ObjetNavigateur_1.Navigateur.ecranH -
          ($('#' + this.Nom.escapeJQ()).outerHeight() -
            $('#' + aId.escapeJQ()).height()) -
          10
        );
      }
      static creerInstanceFenetre(aConstructeur, aParametres, aOptionsFenetre) {
        return new aConstructeur(aParametres).initAfficher({
          initialiser:
            aParametres === null || aParametres === void 0
              ? void 0
              : aParametres.initialiser,
          destructionSurFermeture:
            aParametres === null || aParametres === void 0
              ? void 0
              : aParametres.destructionSurFermeture,
          options: aOptionsFenetre,
        });
      }
    }
    exports.ObjetFenetre = ObjetFenetre;
    (function (ObjetFenetre) {
      ObjetFenetre.cIndiceCroixFermeture = -1;
    })(ObjetFenetre || (exports.ObjetFenetre = ObjetFenetre = {}));
  },
  fn: 'objetfenetre.js',
});