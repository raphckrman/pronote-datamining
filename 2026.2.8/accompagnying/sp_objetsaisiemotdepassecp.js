IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetSaisieMotDePasseCP = void 0;
    require('@cp/Produit/Css/ObjetSaisieMotDePasseCP.css');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const LienPolitiqueMotDePasse_1 = require('@cp/script/LienPolitiqueMotDePasse');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const ValidationMotDePasse_1 = require('@cp/script/ValidationMotDePasse');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const C_TailleMaxMotDePasse = 32;
    const C_TailleMinLogin = 2;
    const C_TailleMaxLogin = 128;
    class ObjetSaisieMotDePasseCP extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.avecErreurMDPActuel = false;
        this.avecErreurMDPNouveau = false;
        this.options = {
          classRequeteSaisie: null,
          donneesReglesMdp: null,
          callbackApresValidation: null,
          callbackFocusValidation: null,
          setReglesMDP: null,
          forcerModificationMdp: false,
          avecMDPActuel: true,
          avecReglesMDP: true,
          avecMdpNouveauDifferentDeActuel: true,
          pourMobile: false,
          attrInputActuel: {
            type: 'password',
            autocomplete: 'new-password',
            'aria-required': 'true',
          },
          attrInputNouveau: {
            type: 'password',
            autocomplete: 'new-password',
            'aria-required': 'true',
          },
          messageExplication: '',
          libelleMDPActuel: 'Mot de passe actuel',
          libelleNewMDP: 'Nouveau mot de passe',
          libelleConfirmNewMDP: 'Confirmation du nouveau',
          libelleEchecModification: 'Echec de la modification',
          libelleReussiteModification: 'Votre modification a bien été prise en compte',
          libelleMDPActuelIncorrect: 'Le mot de passe actuel n'est pas correct !',
          libelleConfirmationIncorrecte:
            'La confirmation ne correspond pas au nouveau mot de passe !',
        };
        this.mdp = { actuel: '', nouveau: '', confirmation: '' };
        const lId = GUID_1.GUID.getId();
        this.ids = {
          input1: lId + '_in1',
          input2: lId + '_in2',
          input3: lId + '_in3',
          validateur: lId + '_validateur',
          validateurMDPActuel: lId + '_valMDPActuel',
          validateurDiffConfirm: lId + '_DiffConfirm',
        };
      }
      setDonnees() {
        this.afficher(this._construireHtml());
        if (this.options.avecReglesMDP) {
          $('#' + this.ids.validateur.escapeJQ()).ieHtml(
            ValidationMotDePasse_1.ValidationMotDePasse.construire(
              this.options.donneesReglesMdp,
              null,
              this._getOptionsValidationMdp(),
            ),
          );
        }
      }
      jsxModeleBoutonMontrerMasquerMotDePasse(aIdInput) {
        return {
          event: () => {
            const lTarget = $('#' + aIdInput);
            lTarget.attr('type') === 'password'
              ? lTarget.attr('type', 'text')
              : lTarget.attr('type', 'password');
          },
          getTitle: () => {
            return $('#' + aIdInput).attr('type') === 'password'
              ? 'Voir le mot de passe'
              : 'Masquer le mot de passe';
          },
          getDisabled: () => {
            switch (aIdInput) {
              case this.ids.input1:
                return false;
              case this.ids.input2:
                return this.getDisabledNouveauMDP();
              case this.ids.input3:
                return this.getDisabledConfirmationMDP();
            }
            return true;
          },
        };
      }
      jsxFuncAttrNewMDP(aEstConfirmation) {
        return { 'aria-invalid': this.avecErreurMDPNouveau ? 'true' : 'false' };
      }
      jsxGetClassNewMDP(aEstNouveauMDP) {
        if (this.avecErreurMDPNouveau) {
          return 'is-dirty';
        }
        switch (this._getEtatNewPassword(aEstNouveauMDP)) {
          case 'disabled':
            return 'is-disabled';
        }
        return '';
      }
      avecValidationPossible() {
        return (
          (this.mdp.actuel.length > 0 || !this._avecMDPActuel()) &&
          this.mdp.confirmation.length > 0
        );
      }
      valider() {
        if (!this._controleAvantValidation()) {
          return;
        }
        if (this._requeteSaisieEnCours) {
          return;
        }
        this._requeteSaisieEnCours = true;
        if (this.options.classRequeteSecurisation) {
          return new this.options.classRequeteSecurisation(this)
            .setOptions({ gererMessageErreur: function () {}.bind(this) })
            .lancerRequete({
              action: this.options.actionRequeteSecurisation,
              ancienMDP: this.mdp.actuel,
              nouveauMDP: this.mdp.confirmation,
            })
            .finally(() => {
              this._requeteSaisieEnCours = false;
            })
            .then(
              (aJSON) => {
                this._surReponseSaisie({
                  JSON: aJSON,
                  avecErreur: false,
                  nouveauMDP: this.mdp.confirmation,
                });
              },
              (aParams) => {
                return (0, AccessApp_1.getApp)()
                  .getMessage()
                  .afficher({
                    titre: this.options.libelleEchecModification,
                    message: aParams ? aParams.message || '' : '',
                  })
                  .then(() => {
                    this.options.callbackApresValidation({ avecErreur: true });
                  });
              },
            );
        }
        return new this.options.classRequeteSaisie(this)
          .lancerRequete({
            ancienMDP: this.mdp.actuel,
            nouveauMDP: this.mdp.confirmation,
            forcerModification: this.options.forcerModificationMdp,
          })
          .then(
            (aParams) => {
              this._requeteSaisieEnCours = false;
              this._surReponseSaisie(aParams);
            },
            () => {
              this._requeteSaisieEnCours = false;
              return (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({ message: this.options.libelleEchecModification })
                .then(() => {
                  this.options.callbackApresValidation({ avecErreur: true });
                });
            },
          );
      }
      _avecMDPActuel() {
        return (
          !!this.options.avecMDPActuel && !this.options.forcerModificationMdp
        );
      }
      _getOptionsValidationMdp() {
        return {
          avecMdpDifferent: !!this.options.avecMdpNouveauDifferentDeActuel,
        };
      }
      jsxFuncAttrMDPActuel() {
        return { 'aria-invalid': this.avecErreurMDPActuel ? 'true' : 'false' };
      }
      jsxGetClassMDPActuel() {
        return this.avecErreurMDPActuel ? 'is-dirty' : '';
      }
      jsxGetClassMontrerMasquerMotDePasse(aId) {
        return $('#' + aId).attr('type') === 'password'
          ? 'icon_eye_open'
          : 'icon_eye_close';
      }
      jsxModelInputMdpActuel() {
        return {
          getValue: () => {
            return this.mdp.actuel;
          },
          setValue: (aValue) => {
            this.mdp.actuel = aValue;
          },
          node: (aNode) => {
            $(aNode).on('keyup', (event) => {
              if (event.which === ToucheClavier_1.ToucheClavier.RetourChariot) {
                ObjetHtml_1.GHtml.setFocus(this.ids.input2);
              }
            });
          },
        };
      }
      jsxModelInputMdpNouveau() {
        return {
          getValue: () => {
            return this.mdp.nouveau;
          },
          setValue: (aValue) => {
            this.mdp.nouveau = aValue;
          },
          getDisabled: () => {
            return this.getDisabledNouveauMDP();
          },
          node: (aNode) => {
            $(aNode).on('keyup', (event) => {
              if (event.which === ToucheClavier_1.ToucheClavier.RetourChariot) {
                ObjetHtml_1.GHtml.setFocus(this.ids.input3);
              }
            });
          },
        };
      }
      jsxModelInputMdpConfirmation() {
        return {
          getValue: () => {
            return this.mdp.confirmation;
          },
          setValue: (aValue) => {
            this.mdp.confirmation = aValue;
          },
          getDisabled: () => {
            return this.getDisabledConfirmationMDP();
          },
          node: (aNode) => {
            $(aNode).on('keyup', (event) => {
              if (
                event.which === ToucheClavier_1.ToucheClavier.RetourChariot &&
                this.options.callbackFocusValidation
              ) {
                this.options.callbackFocusValidation();
              }
            });
          },
        };
      }
      _construireHtml() {
        const H = [];
        H.push('<div class="ObjetSaisieMotDePasseCP">');
        if (this.options.messageExplication) {
          H.push(
            '<div class="BlocMessageEnTete">',
            this.options.messageExplication,
            '</div>',
          );
        }
        H.push('<div class="BlocContenu">');
        H.push('<div class="BlocMDP">');
        H.push(
          IE.jsx.str(
            'p',
            { class: 'p-bottom-l' },
            '* champs obligatoires',
          ),
        );
        if (this._avecMDPActuel()) {
          H.push(
            IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str(
                'label',
                { class: 'm-bottom', for: this.ids.input1 },
                this.options.libelleMDPActuel,
                ' *',
              ),
              IE.jsx.str(
                'div',
                {
                  class: 'as-input as-password',
                  ie_class: this.jsxGetClassMDPActuel.bind(this),
                },
                IE.jsx.str(
                  'input',
                  Object.assign(
                    {
                      ie_model: this.jsxModelInputMdpActuel.bind(this),
                      id: this.ids.input1,
                    },
                    this.options.attrInputActuel,
                    { ie_attr: this.jsxFuncAttrMDPActuel.bind(this) },
                  ),
                ),
                IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                  ie_class: this.jsxGetClassMontrerMasquerMotDePasse.bind(
                    this,
                    this.ids.input1,
                  ),
                  ie_model: this.jsxModeleBoutonMontrerMasquerMotDePasse.bind(
                    this,
                    this.ids.input1,
                  ),
                }),
              ),
            ),
          );
          H.push(
            IE.jsx.str('p', {
              class: 'p-top p-bottom message-invalide',
              id: this.ids.validateurMDPActuel,
            }),
          );
        }
        H.push(
          IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str(
              'label',
              { class: 'm-bottom', for: this.ids.input2 },
              this.options.libelleNewMDP,
              ' *',
            ),
            IE.jsx.str(
              'div',
              {
                class: 'as-input as-password confirm-wrapper',
                ie_class: this.jsxGetClassNewMDP.bind(this, true),
              },
              IE.jsx.str(
                'input',
                Object.assign(
                  {
                    ie_model: this.jsxModelInputMdpNouveau.bind(this),
                    class: 'full-width',
                    id: this.ids.input2,
                  },
                  this.options.attrInputNouveau,
                  { ie_attr: this.jsxFuncAttrNewMDP.bind(this, false) },
                ),
              ),
              IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                ie_class: this.jsxGetClassMontrerMasquerMotDePasse.bind(
                  this,
                  this.ids.input2,
                ),
                ie_model: this.jsxModeleBoutonMontrerMasquerMotDePasse.bind(
                  this,
                  this.ids.input2,
                ),
              }),
            ),
          ),
        );
        H.push(
          IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str(
              'label',
              { class: 'm-bottom', for: this.ids.input3 },
              this.options.libelleConfirmNewMDP,
              ' *',
            ),
            IE.jsx.str(
              'div',
              {
                class: 'as-input as-password confirm-wrapper',
                ie_class: this.jsxGetClassNewMDP.bind(this, false),
              },
              IE.jsx.str(
                'input',
                Object.assign(
                  {
                    ie_model: this.jsxModelInputMdpConfirmation.bind(this),
                    class: 'full-width',
                    id: this.ids.input3,
                  },
                  this.options.attrInputNouveau,
                  { ie_attr: this.jsxFuncAttrNewMDP.bind(this, true) },
                ),
              ),
              IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                ie_class: this.jsxGetClassMontrerMasquerMotDePasse.bind(
                  this,
                  this.ids.input3,
                ),
                ie_model: this.jsxModeleBoutonMontrerMasquerMotDePasse.bind(
                  this,
                  this.ids.input3,
                ),
              }),
            ),
          ),
        );
        H.push(
          IE.jsx.str('p', {
            class: 'p-top p-bottom message-invalide',
            id: this.ids.validateurDiffConfirm,
          }),
        );
        H.push('</div>');
        if (this.options.avecReglesMDP) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'BlocValidation' },
              IE.jsx.str('div', {
                class: 'validateur',
                id: this.ids.validateur,
              }),
            ),
          );
        }
        H.push('</div>');
        if (this.options.avecReglesMDP) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'link-icon' },
              LienPolitiqueMotDePasse_1.TLienPolitiqueMotDePasse.getLien(),
            ),
          );
        }
        H.push(
          IE.jsx.str(
            'div',
            { style: 'display:none' },
            IE.jsx.str('input', {
              type: 'password',
              class: IEHtml_1.IEHtml.Styles.debugWAIInputIgnoreAssert,
            }),
          ),
        );
        H.push(
          IE.jsx.str(
            'div',
            { style: 'display:none' },
            IE.jsx.str('input', {
              type: 'password',
              class: IEHtml_1.IEHtml.Styles.debugWAIInputIgnoreAssert,
            }),
          ),
        );
        H.push(
          IE.jsx.str(
            'div',
            { style: 'display:none' },
            IE.jsx.str('input', {
              type: 'password',
              class: IEHtml_1.IEHtml.Styles.debugWAIInputIgnoreAssert,
            }),
          ),
        );
        H.push('</div>');
        return H.join('');
      }
      _surReponseSaisie(aParams) {
        const lParams = Object.assign(
          { avecErreur: true, messageDejaAffiche: false, messageErreur: '' },
          aParams,
        );
        if (
          lParams.JSON &&
          (lParams.JSON.erreurMDP || lParams.JSON.messageErreur)
        ) {
          if (this.options.avecReglesMDP) {
            this.options.donneesReglesMdp = lParams.JSON.reglesSaisieMDP;
            if (this.options.setReglesMDP && lParams.JSON.reglesSaisieMDP) {
              this.options.setReglesMDP(lParams.JSON);
            }
          }
          const lErreursMDP = lParams.JSON.erreurMDP;
          let lErreursMDPPourValidation = lErreursMDP;
          let lMessage = '';
          if (lParams.JSON.messageErreur) {
            lMessage += lParams.JSON.messageErreur;
          } else if (lErreursMDP && lErreursMDP.erreurAncienMDP) {
            lMessage += this.options.libelleMDPActuelIncorrect + '<br><br>';
            lErreursMDPPourValidation = undefined;
          }
          if (this.options.avecReglesMDP && lErreursMDPPourValidation) {
            lMessage += ValidationMotDePasse_1.ValidationMotDePasse.construire(
              this.options.donneesReglesMdp,
              lErreursMDPPourValidation,
              this._getOptionsValidationMdp(),
            );
          }
          let lIdFocus = '';
          this.mdp.nouveau = '';
          this.mdp.confirmation = '';
          if (
            lParams.JSON.messageErreur ||
            (lErreursMDP && lErreursMDP.erreurAncienMDP)
          ) {
            this.avecErreurMDPActuel = true;
            this.mdp.actuel = '';
            lIdFocus = this.ids.input1;
            $(`#${this.ids.validateurMDPActuel.escapeJQ()}`).html(lMessage);
            $(`#${this.ids.input1.escapeJQ()}`).attr(
              'aria-describedby',
              this.ids.validateurMDPActuel,
            );
          } else {
            lIdFocus = this.ids.input2;
          }
          if (this.options.avecReglesMDP) {
            $('#' + this.ids.validateur.escapeJQ()).ieHtml(
              ValidationMotDePasse_1.ValidationMotDePasse.construire(
                this.options.donneesReglesMdp,
                lErreursMDPPourValidation,
                this._getOptionsValidationMdp(),
              ),
            );
            if (!this.avecErreurMDPActuel) {
              $(
                `#${this.ids.input2.escapeJQ()}, #${this.ids.input3.escapeJQ()}`,
              ).attr('aria-describedby', this.ids.validateur);
            }
          }
          return (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
              titre: this.options.libelleEchecModification,
              message: lMessage,
            })
            .then(() => {
              ObjetHtml_1.GHtml.setFocus(lIdFocus);
              IEHtml_1.IEHtml.refresh(true);
            });
        } else {
          if (lParams.avecErreur) {
            this.mdp.nouveau = '';
            this.mdp.confirmation = '';
          }
          let lPromise = Promise.resolve();
          if (!lParams.messageDejaAffiche) {
            if (lParams.avecErreur) {
              lPromise = (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({
                  message:
                    this.options.libelleEchecModification +
                    (lParams.messageErreur
                      ? '<br><br>' + lParams.messageErreur
                      : ''),
                });
            } else if (this.options.avecMessageReussiteModif) {
              lPromise = (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({
                  message: this.options.libelleReussiteModification,
                });
            }
          }
          lPromise.then(() => {
            this.options.callbackApresValidation(lParams);
          });
        }
      }
      _controleAvantValidation() {
        this.avecErreurMDPActuel = false;
        this.avecErreurMDPNouveau = false;
        $(`#${this.ids.validateurDiffConfirm.escapeJQ()}`).empty();
        $(`#${this.ids.validateurMDPActuel.escapeJQ()}`).empty();
        $(
          `#${this.ids.input1.escapeJQ()}, #${this.ids.input2.escapeJQ()}, #${this.ids.input3.escapeJQ()}`,
        ).attr('aria-describedby', null);
        if (
          this.mdp.confirmation &&
          this.mdp.confirmation !== this.mdp.nouveau &&
          this.options.libelleConfirmationIncorrecte
        ) {
          this.mdp.nouveau = '';
          this.mdp.confirmation = '';
          (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({ message: this.options.libelleConfirmationIncorrecte })
            .then(() => {
              $(`#${this.ids.validateurDiffConfirm.escapeJQ()}`).html(
                this.options.libelleConfirmationIncorrecte || '',
              );
              $(
                `#${this.ids.input2.escapeJQ()}, #${this.ids.input3.escapeJQ()}`,
              ).attr('aria-describedby', this.ids.validateurDiffConfirm);
              this.avecErreurMDPNouveau = true;
              if (this.options.avecReglesMDP) {
                $('#' + this.ids.validateur.escapeJQ()).ieHtml(
                  ValidationMotDePasse_1.ValidationMotDePasse.construire(
                    this.options.donneesReglesMdp,
                    null,
                    this._getOptionsValidationMdp(),
                  ),
                );
              }
              ObjetHtml_1.GHtml.setFocus(this.ids.input2);
              IEHtml_1.IEHtml.refresh(true);
            });
          return false;
        }
        return true;
      }
      getDisabledNouveauMDP() {
        return this.mdp.actuel.length === 0 && this._avecMDPActuel();
      }
      getDisabledConfirmationMDP() {
        return (
          (this.mdp.actuel.length === 0 && this._avecMDPActuel()) ||
          this.mdp.nouveau.length === 0
        );
      }
      _getEtatNewPassword(aEstNouveauMDP) {
        if (aEstNouveauMDP && this.getDisabledNouveauMDP()) {
          return 'disabled';
        }
        if (!aEstNouveauMDP && this.getDisabledConfirmationMDP()) {
          return 'disabled';
        }
        return this.mdp.confirmation.length === 0 ||
          this.mdp.confirmation === this.mdp.nouveau
          ? 'valid'
          : 'invalid';
      }
    }
    exports.ObjetSaisieMotDePasseCP = ObjetSaisieMotDePasseCP;
    ObjetSaisieMotDePasseCP.C_TailleMaxMotDePasse = C_TailleMaxMotDePasse;
    ObjetSaisieMotDePasseCP.C_TailleMinLogin = C_TailleMinLogin;
    ObjetSaisieMotDePasseCP.C_TailleMaxLogin = C_TailleMaxLogin;
  },
  fn: 'objetsaisiemotdepassecp.js',
});