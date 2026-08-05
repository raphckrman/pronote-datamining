IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetCelluleBouton = exports.EGenreBoutonCellule = void 0;
    require('@cp/Produit/Css/Form-components.css');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const Enumere_Event_1 = require('@cp/script/Enumere/Enumere_Event');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const IEHtml_Ripple_1 = require('@cp/Produit/Script/IEHtml.Ripple');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    var EGenreBoutonCellule;
    (function (EGenreBoutonCellule) {
      EGenreBoutonCellule[(EGenreBoutonCellule['Aucun'] = 0)] = 'Aucun';
      EGenreBoutonCellule[(EGenreBoutonCellule['Fleche'] = 1)] = 'Fleche';
      EGenreBoutonCellule[(EGenreBoutonCellule['Loupe'] = 2)] = 'Loupe';
      EGenreBoutonCellule[(EGenreBoutonCellule['Points'] = 3)] = 'Points';
      EGenreBoutonCellule[(EGenreBoutonCellule['Image'] = 4)] = 'Image';
    })(
      EGenreBoutonCellule ||
        (exports.EGenreBoutonCellule = EGenreBoutonCellule = {}),
    );
    class ObjetCelluleBouton extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.NomEdit = this.Nom + '_Edit';
        this.idTexte = this.NomEdit;
        this.libelle = '';
        this.options = {
          hauteur: 18,
          largeur: 80,
          genreBouton: EGenreBoutonCellule.Aucun,
          iconeGauche: '',
          avecBordures: true,
          avecCouleurFondBouton: true,
          avecZoneSaisie: true,
          estSaisissable: false,
          selectionSaisieSurFocus: false,
          taillePolice: 10,
          classeZone: 'FondBlanc',
          classTexte: '',
          classBackground: '',
          styleZoneTexte: '',
          styleBouton: '',
          placeHolder: '',
          libelleHaut: '',
          withTabulation: true,
          roleWAI: 'button',
          ariaLabel: '',
          popupWAI: false,
          ariaLabelledBy: '',
          ariaDescribedBy: '',
          desactiverAideSaisie: false,
          ariaExpanded: false,
          required: false,
          titleForce: '',
          setValue: null,
          editAvecTrim: false,
          ariaControls: '',
          ariaDescription: '',
        };
        this.setOptionsObjetCelluleBouton({
          estSaisissable: true,
          genreBouton: EGenreBoutonCellule.Fleche,
        });
        this.IdPremierElement = this.NomEdit;
      }
      jsxNodeSansSaisie(aNode) {
        $(aNode).on('mousedown click keyup blur focusout', (aEvent) => {
          this._surEventEdit(aEvent);
        });
      }
      jsxModelInputEdit() {
        return {
          getValue: () => {
            return this.libelle;
          },
          setValue: (aValue) => {
            this.libelle = aValue;
            if (this.options.setValue) {
              this.options.setValue(aValue, this);
            }
          },
          getDisabled: () => {
            return !this.Actif;
          },
          node: (aNode) => {
            if (!this.options.estSaisissable) {
              $(aNode).on('focus', function () {
                ObjetHtml_1.GHtml.setFocus(this, false);
              });
            }
            $(aNode).on('keyup blur focusout', (aEvent) => {
              this._surEventEdit(aEvent);
            });
          },
        };
      }
      jsxNodeBouton(aNode) {
        $(aNode).on('mousedown click keyup', (aEvent) => {
          if (!this.Actif) {
            return;
          }
          let lEvent = null;
          switch (aEvent.type) {
            case 'mousedown':
              lEvent = Enumere_Event_1.EEvent.SurMouseDown;
              break;
            case 'click':
              lEvent = Enumere_Event_1.EEvent.SurClick;
              break;
            case 'keyup':
              lEvent = Enumere_Event_1.EEvent.SurKeyUp;
              break;
          }
          if (lEvent !== null) {
            this.callback.appel(lEvent, aEvent, false);
            IEHtml_1.IEHtml.refresh();
          }
        });
      }
      setParametresPN(aAvecBouton, aLargeur, aHauteur, aClassTexte) {
        this.setOptionsObjetCelluleBouton({
          genreBouton: aAvecBouton
            ? EGenreBoutonCellule.Fleche
            : EGenreBoutonCellule.Aucun,
          largeur: aLargeur,
          hauteur: aHauteur ? aHauteur : 15,
          classTexte: aClassTexte ? aClassTexte : 'Gras',
          estSaisissable: false,
          avecZoneSaisie: false,
        });
      }
      setOptionsObjetCelluleBouton(aOptions) {
        $.extend(this.options, aOptions);
        this.avecBouton =
          this.options.genreBouton !== EGenreBoutonCellule.Aucun;
        this.$refresh();
      }
      jsxGetClassOcbCont() {
        return !this.Actif
          ? IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleDisabled
          : '';
      }
      jsxGetStyleConteneur() {
        return {
          width:
            this.options.largeur && this.options.largeur === '100%'
              ? '100%'
              : '',
        };
      }
      jsxGetStyleContenu() {
        if (!IE.estMobile) {
          return {
            width:
              this.options.largeur && this.options.largeur !== '100%'
                ? this.options.largeur + 'px'
                : '',
          };
        } else {
          return {};
        }
      }
      jsxIfAffichageLibelleHaut() {
        return !!this.options.libelleHaut;
      }
      jsxGetHtmlLibelleHaut() {
        var _a;
        return (_a = this.options.libelleHaut) !== null && _a !== void 0
          ? _a
          : '';
      }
      jsxGetHtmlConsult() {
        if (this.libelle || !this.options.placeHolder) {
          return ObjetChaine_1.GChaine.avecEspaceSiVide(
            this.estLibelleHTML
              ? this.libelle
              : ObjetChaine_1.GChaine.insecable(this.libelle),
          );
        } else if (this.options.placeHolder) {
          if (typeof this.options.placeHolder === 'string') {
            return IE.jsx.str(
              'span',
              { class: 'as-placeholder', 'aria-disabled': 'true' },
              this.options.placeHolder,
            );
          }
          if (this.options.placeHolder.libelleHtml) {
            return ObjetChaine_1.GChaine.avecEspaceSiVide(
              this.options.placeHolder.libelleHtml,
            );
          }
        }
        return '';
      }
      construireAffichage() {
        if (!ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
          return '';
        }
        let lClasseBtn = '';
        switch (this.options.genreBouton) {
          case EGenreBoutonCellule.Fleche:
            lClasseBtn = 'as-select ';
            break;
          case EGenreBoutonCellule.Loupe:
            lClasseBtn = 'as-search';
            break;
          case EGenreBoutonCellule.Points:
            lClasseBtn = 'as-multi-choix';
            break;
          case EGenreBoutonCellule.Image:
            lClasseBtn = 'as-date-picker';
            break;
        }
        const lStrAttrsWAI = {
          role: this.options.roleWAI,
          'aria-haspopup': this.options.popupWAI || false,
          'aria-required': this.options.required ? 'true' : false,
          'aria-description': this.options.ariaDescription || false,
          'aria-expanded':
            this.options.roleWAI === 'combobox' ? 'false' : false,
        };
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str('div', {
            ie_if: this.jsxIfAffichageLibelleHaut.bind(this),
            ie_html: this.jsxGetHtmlLibelleHaut.bind(this),
            class: 'p-left p-bottom-none',
          }),
          IE.jsx.str(
            'div',
            {
              class: 'input-wrapper',
              ie_style: this.jsxGetStyleConteneur.bind(this),
            },
            IE.jsx.str(
              'div',
              {
                class: [
                  'ocb_cont as-input ',
                  lClasseBtn,
                  !this.options.avecZoneSaisie
                    ? ' ' + IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple
                    : '',
                ],
                ie_class: this.jsxGetClassOcbCont.bind(this),
              },
              this.options.iconeGauche &&
                IE.jsx.str('i', {
                  class: ['ocb_icone_gauche', this.options.iconeGauche],
                  ie_node: this.jsxNodeSansSaisie.bind(this),
                  'aria-hidden': 'true',
                }),
              this.options.avecZoneSaisie
                ? IE.jsx.str(
                    'input',
                    Object.assign(
                      {
                        type: 'text',
                        ie_model: this.jsxModelInputEdit.bind(this),
                        ie_trim: !!this.options.editAvecTrim,
                        id: this.NomEdit,
                        class: Divers_css_1.SD.browserDefault,
                        ie_style: this.jsxGetStyleContenu.bind(this),
                        ie_attr: this.jsxGetAttrContenu.bind(this),
                        autocomplete: this.options.desactiverAideSaisie
                          ? 'off'
                          : false,
                        autocorrect: this.options.desactiverAideSaisie
                          ? 'off'
                          : false,
                        autocapitalize: this.options.desactiverAideSaisie
                          ? 'off'
                          : false,
                        spellcheck: this.options.desactiverAideSaisie
                          ? 'false'
                          : false,
                        ie_selecttextfocus:
                          !!this.options.selectionSaisieSurFocus,
                        readonly: !this.options.estSaisissable,
                        'aria-readonly': this.options.estSaisissable
                          ? false
                          : 'true',
                        ie_ellipsis: !this.options.estSaisissable,
                      },
                      lStrAttrsWAI,
                      {
                        'aria-autocomplete': 'list',
                        placeholder:
                          this.options.placeHolder &&
                          MethodesObjet_1.MethodesObjet.isString(
                            this.options.placeHolder,
                          )
                            ? this.options.placeHolder
                            : false,
                      },
                    ),
                  )
                : IE.jsx.str(
                    'div',
                    Object.assign(
                      {
                        class: [
                          'ocb-libelle',
                          IEHtml_Ripple_1.StylesCustomIEHTMLRipple
                            .ieRippleAllowpass,
                        ],
                        tabindex: this.options.withTabulation && 0,
                        id: this.idTexte,
                        ie_html: this.jsxGetHtmlConsult.bind(this),
                        ie_style: this.jsxGetStyleContenu.bind(this),
                        ie_attr: this.jsxGetAttrContenu.bind(this),
                        ie_node: this.jsxNodeSansSaisie.bind(this),
                        ie_ellipsis: !this.options.titleForce,
                      },
                      lStrAttrsWAI,
                      {
                        'aria-live':
                          this.options.roleWAI === 'combobox'
                            ? 'polite'
                            : false,
                        'aria-relevant':
                          this.options.roleWAI === 'combobox' ? 'text' : false,
                      },
                    ),
                  ),
              this.avecBouton &&
                IE.jsx.str('div', {
                  class: 'ocb_bouton',
                  ie_node: this.jsxNodeBouton.bind(this),
                  role: 'presentation',
                }),
            ),
          ),
        );
      }
      jsxGetAttrContenu() {
        const lAriaLabel =
          this.options.ariaLabel || this.options.titleForce || null;
        const lAttr = {
          'aria-disabled': !this.Actif,
          'aria-label': lAriaLabel,
          'aria-labelledby': lAriaLabel
            ? null
            : this.options.ariaLabelledBy || null,
          'aria-describedby': this.options.ariaDescribedBy || null,
          'aria-controls': this.options.ariaControls || null,
          title: this.options.titleForce || null,
        };
        if (this.options.roleWAI === 'combobox') {
          lAttr['aria-expanded'] = !!this.options.ariaExpanded;
        }
        return lAttr;
      }
      setActif(AActif) {
        super.setActif(AActif);
        this.$refresh();
      }
      setLibelle(aLibelle) {
        this.libelle = aLibelle;
        this.estLibelleHTML = false;
        this.$refresh();
      }
      setLibelleHtml(aLibelleHtml) {
        if (this.options.avecZoneSaisie) {
          return;
        }
        this.estLibelleHTML = true;
        this.libelle = aLibelleHtml;
        this.$refresh();
      }
      getLibelle() {
        return this.libelle;
      }
      setLargeur(aLargeur) {
        this.setOptionsObjetCelluleBouton({
          largeur: aLargeur ? aLargeur : undefined,
        });
      }
      setTitle(aTitle) {
        this.setOptionsObjetCelluleBouton({ titleForce: aTitle });
      }
      setFocus() {
        ObjetHtml_1.GHtml.setFocus(this.NomEdit);
      }
      setAvecBouton(aAvecBouton) {
        if (this.avecBouton === aAvecBouton) {
          return;
        }
        this.avecBouton = aAvecBouton;
        this.$refresh();
      }
      _surEventEdit(aEvent) {
        if (!this.Actif) {
          return;
        }
        let lEvent = null;
        switch (aEvent.type) {
          case 'keyup':
            lEvent = Enumere_Event_1.EEvent.SurKeyUp;
            break;
          case 'blur':
            lEvent = Enumere_Event_1.EEvent.SurBlur;
            break;
          case 'focusout':
            lEvent = Enumere_Event_1.EEvent.SurFocusOut;
            break;
          case 'mousedown':
            lEvent = Enumere_Event_1.EEvent.SurMouseDown;
            break;
          case 'click':
            lEvent = Enumere_Event_1.EEvent.SurClick;
            break;
          default:
        }
        if (lEvent) {
          this.callback.appel(lEvent, aEvent, true);
          IEHtml_1.IEHtml.refresh();
        }
      }
    }
    exports.ObjetCelluleBouton = ObjetCelluleBouton;
  },
  fn: 'objetcellulebouton.js',
});