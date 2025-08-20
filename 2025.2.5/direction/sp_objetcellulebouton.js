IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetCelluleBouton = exports.EGenreBoutonCellule = void 0;
    require('Form-components.css');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_Event_1 = require('Enumere_Event');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetWAI_1 = require('ObjetWAI');
    const MethodesObjet_1 = require('MethodesObjet');
    const IEHtml_1 = require('IEHtml');
    const AccessApp_1 = require('AccessApp');
    const IEHtml_Ripple_1 = require('IEHtml.Ripple');
    const IEHtml_Ripple_css_1 = require('IEHtml.Ripple.css');
    const Divers_css_1 = require('Divers.css');
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
        this.idZone = this.Nom + '_Zone';
        this.NomEdit = this.Nom + '_Edit';
        this.NomDescr = this.Nom + '_Descr';
        this.idTexte = this.NomEdit;
        this.idBouton = this.Nom + '_Bouton';
        this.libelle = '';
        this.options = {
          hauteur: 18,
          largeur: 80,
          genreBouton: EGenreBoutonCellule.Aucun,
          iconeGauche: '',
          avecBordures: true,
          avecCouleurFondBouton: true,
          avecFocusVisibleTexte: true,
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
          roleWAI: ObjetWAI_1.EGenreRole.Button,
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
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          ifLibelleHaut: function () {
            return !!aInstance.options.libelleHaut;
          },
          htmlLibelleHaut: function () {
            return aInstance.options.libelleHaut;
          },
          getClassZone: function () {
            return (
              'Texte' +
              aInstance.options.taillePolice +
              ' ' +
              aInstance.options.classeZone +
              ' CelluleBoutonZoneJQ' +
              (aInstance.Actif ? ' AvecMain' : '')
            );
          },
          getStyleConteneur: function () {
            return {
              width:
                aInstance.options.largeur &&
                aInstance.options.largeur === '100%'
                  ? '100%'
                  : '',
            };
          },
          getClass_ocb_cont() {
            return !aInstance.Actif
              ? IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRippleDisabled
              : '';
          },
          getStyleContenu: function () {
            if (!IE.estMobile) {
              return {
                width:
                  aInstance.options.largeur &&
                  aInstance.options.largeur !== '100%'
                    ? aInstance.options.largeur + 'px'
                    : '',
              };
            } else {
              return {};
            }
          },
          getAttrContenu() {
            const lAriaLabel =
              aInstance.options.ariaLabel ||
              aInstance.options.titleForce ||
              null;
            const lAttr = {
              'aria-disabled': aInstance.Actif ? null : true,
              'aria-label': lAriaLabel,
              'aria-labelledby': lAriaLabel
                ? null
                : aInstance.options.ariaLabelledBy || null,
              'aria-describedby': aInstance.options.ariaDescribedBy || null,
              'aria-controls': aInstance.options.ariaControls || null,
            };
            if (aInstance.options.roleWAI === ObjetWAI_1.EGenreRole.Combobox) {
              lAttr['aria-expanded'] = !!aInstance.options.ariaExpanded;
            }
            return lAttr;
          },
          getTitleDescriptionEdit: function () {
            return !aInstance.options.titleForce
              ? aInstance.estLibelleHTML
                ? ''
                : aInstance.libelle &&
                    typeof aInstance.options.largeur === 'number' &&
                    ObjetChaine_1.GChaine.getLongueurChaineDansDiv(
                      aInstance.libelle,
                      aInstance.options.taillePolice,
                      false,
                    ) >= aInstance.options.largeur
                  ? ObjetChaine_1.GChaine.enleverEntites(aInstance.libelle)
                  : ''
              : aInstance.options.titleForce;
          },
          edit: {
            getValue: function () {
              return aInstance.libelle;
            },
            setValue: function (aValue) {
              aInstance.libelle = aValue;
              if (aInstance.options.setValue) {
                aInstance.options.setValue(aValue, aInstance);
              }
            },
            getDisabled: function () {
              return !aInstance.Actif;
            },
            node: function () {
              if (!aInstance.options.estSaisissable) {
                $(this.node).on('focus', function () {
                  ObjetHtml_1.GHtml.setFocus(this, false);
                });
              }
              $(this.node).on('keyup blur focusout', (aEvent) => {
                aInstance._surEventEdit(aEvent);
              });
            },
            getNodeSansSaisie: function () {
              $(this.node).on(
                'mousedown click keyup blur focusout',
                (aEvent) => {
                  aInstance._surEventEdit(aEvent);
                },
              );
            },
            getClassEdit: function () {
              return (
                'CelluleBoutonNomEditJQ Texte' +
                aInstance.options.taillePolice +
                ' ' +
                (aInstance.options.classTexte || '') +
                (aInstance.Actif
                  ? aInstance.options.estSaisissable
                    ? ' AvecTexte'
                    : ' AvecMain'
                  : '') +
                ' ' +
                (aInstance.options.classBackground || '')
              );
            },
            getStylePourBoutonNonEditable: function () {
              return {
                'background-color': aInstance.Actif
                  ? ''
                  : (0, AccessApp_1.getApp)().getCouleur().nonEditable.fond,
              };
            },
          },
          getHtmlConsult: function () {
            if (aInstance.libelle || !aInstance.options.placeHolder) {
              return ObjetChaine_1.GChaine.avecEspaceSiVide(
                aInstance.estLibelleHTML
                  ? aInstance.libelle
                  : ObjetChaine_1.GChaine.insecable(aInstance.libelle),
              );
            } else if (aInstance.options.placeHolder) {
              if (typeof aInstance.options.placeHolder === 'string') {
                return IE.jsx.str(
                  'span',
                  { class: 'as-placeholder', 'aria-disabled': 'true' },
                  aInstance.options.placeHolder,
                );
              }
              if (aInstance.options.placeHolder.libelleHtml) {
                return ObjetChaine_1.GChaine.avecEspaceSiVide(
                  aInstance.options.placeHolder.libelleHtml,
                );
              }
            }
          },
          getNodeBouton: function () {
            $(this.node).on('mousedown click keyup', (aEvent) => {
              if (!aInstance.Actif) {
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
                aInstance.callback.appel(lEvent, aEvent, false);
                if (
                  aInstance.Pere &&
                  aInstance.Pere instanceof ObjetIdentite_1.Identite &&
                  aInstance.Pere.$refreshSelf
                ) {
                  aInstance.Pere.$refreshSelf();
                }
              }
            });
          },
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
        this.$refreshSelf();
      }
      construireAffichage() {
        const H = [];
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
        H.push(
          '<div ie-if="ifLibelleHaut" ie-html="htmlLibelleHaut" class="LibelleHaut"></div>',
        );
        H.push(
          '<div class="input-wrapper" ie-style="getStyleConteneur">',
          '<div class="ocb_cont as-input ',
          lClasseBtn,
          !this.options.avecZoneSaisie
            ? ' ' + IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRipple
            : '',
          '" ie-class="getClass_ocb_cont">',
        );
        if (this.options.iconeGauche) {
          H.push(
            IE.jsx.str('i', {
              class: ['ocb_icone_gauche', this.options.iconeGauche],
              'ie-node': 'edit.getNodeSansSaisie',
              'aria-hidden': 'true',
            }),
          );
        }
        const lStrAttrsWAI = {
          role: ObjetWAI_1.GObjetWAI.strRole(this.options.roleWAI),
          'aria-haspopup': this.options.popupWAI || false,
          'aria-required': this.options.required ? 'true' : false,
          'aria-description': this.options.ariaDescription || false,
          'aria-expanded':
            this.options.roleWAI === ObjetWAI_1.EGenreRole.Combobox
              ? 'false'
              : false,
        };
        if (this.options.avecZoneSaisie) {
          H.push(
            IE.jsx.str(
              'input',
              Object.assign(
                {
                  type: 'text',
                  'ie-model': 'edit',
                  'ie-trim': !!this.options.editAvecTrim,
                  id: this.NomEdit,
                  class: Divers_css_1.StylesDivers.browserDefault,
                  'ie-style': 'getStyleContenu',
                  'ie-attr': 'getAttrContenu',
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
                  'ie-title': 'getTitleDescriptionEdit',
                  'ie-selecttextfocus': !!this.options.selectionSaisieSurFocus,
                  readonly: !this.options.estSaisissable,
                  'aria-readonly': this.options.estSaisissable ? false : 'true',
                  'ie-ellipsis': !this.options.estSaisissable,
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
            ),
          );
        } else {
          H.push(
            IE.jsx.str(
              'div',
              Object.assign(
                {
                  class: [
                    'ocb-libelle',
                    IEHtml_Ripple_1.StylesCustomIEHTMLRipple.ieRippleAllowpass,
                  ],
                  tabindex: this.options.withTabulation ? '0' : '',
                  id: this.idTexte,
                  'ie-html': 'getHtmlConsult',
                  'ie-style': 'getStyleContenu',
                  'ie-attr': 'getAttrContenu',
                  'ie-node': 'edit.getNodeSansSaisie',
                  'ie-ellipsis': !this.options.titleForce,
                  title: this.options.titleForce || false,
                },
                lStrAttrsWAI,
                {
                  'aria-live':
                    this.options.roleWAI === ObjetWAI_1.EGenreRole.Combobox
                      ? 'polite'
                      : false,
                  'aria-relevant':
                    this.options.roleWAI === ObjetWAI_1.EGenreRole.Combobox
                      ? 'text'
                      : false,
                },
              ),
            ),
          );
        }
        if (this.avecBouton) {
          H.push(
            IE.jsx.str('div', {
              class: 'ocb_bouton',
              'ie-node': 'getNodeBouton',
              role: 'presentation',
            }),
          );
        }
        H.push('</div>');
        H.push('</div>');
        return H.join('');
      }
      recupererDonnees() {
        if (!ObjetHtml_1.GHtml.elementExiste(this.idZone)) {
          return;
        }
        let lEventMap = {};
        if (this.options.avecFocusVisibleTexte) {
          lEventMap = {
            focusin: function () {
              $(this)
                .find('.CelluleBoutonNomEditJQ')
                .css(
                  'outline',
                  (0, AccessApp_1.getApp)().getCouleur().texte + ' dotted 1px',
                );
            },
            focusout: function () {
              $(this).find('.CelluleBoutonNomEditJQ').css('outline', 'none');
            },
          };
        }
        $('#' + this.Nom.escapeJQ())
          .on(lEventMap, { instance: this })
          .data('couleurFocus', (0, AccessApp_1.getApp)().getCouleur().texte);
      }
      setActif(AActif) {
        super.setActif(AActif);
        this.$refreshSelf();
      }
      setLibelle(aLibelle) {
        this.libelle = aLibelle;
        this.estLibelleHTML = false;
        this.$refreshSelf();
      }
      setLibelleHtml(aLibelleHtml) {
        if (this.options.avecZoneSaisie) {
          return;
        }
        this.estLibelleHTML = true;
        this.libelle = aLibelleHtml;
        this.$refreshSelf();
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
        this.$refreshSelf();
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
          IEHtml_1.default.refresh();
        }
      }
    }
    exports.ObjetCelluleBouton = ObjetCelluleBouton;
  },
  fn: 'objetcellulebouton.js',
});