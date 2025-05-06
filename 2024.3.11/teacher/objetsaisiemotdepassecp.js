IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetSaisieMotDePasseCP = void 0;
    require('ObjetSaisieMotDePasseCP.css');
    const IEHtml = require('IEHtml');
    const ObjetHtml_1 = require('ObjetHtml');
    const LienPolitiqueMotDePasse_1 = require('LienPolitiqueMotDePasse');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ToucheClavier_1 = require('ToucheClavier');
    const ValidationMotDePasse_1 = require('ValidationMotDePasse');
    const GUID_1 = require('GUID');
    const ObjetIdentite_1 = require('ObjetIdentite');
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
          attrInputActuel:
            'type = "password" autocomplete = "new-password" aria-required="true"',
          attrInputNouveau:
            'type = "password" autocomplete = "new-password" aria-required="true"',
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
        ObjetHtml_1.GHtml.setFocus(
          !this._avecMDPActuel() ? this.ids.input2 : this.ids.input1,
        );
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          mdp: {
            actuel: {
              getValue: function () {
                return aInstance.mdp.actuel;
              },
              setValue: function (aValue) {
                aInstance.mdp.actuel = aValue;
              },
              node: function () {
                $(this.node).on('keyup', (event) => {
                  if (
                    event.which === ToucheClavier_1.ToucheClavier.RetourChariot
                  ) {
                    ObjetHtml_1.GHtml.setFocus(aInstance.ids.input2);
                  }
                });
              },
            },
            nouveau: {
              getValue: function () {
                return aInstance.mdp.nouveau;
              },
              setValue: function (aValue) {
                aInstance.mdp.nouveau = aValue;
              },
              getDisabled: function () {
                return (
                  aInstance.mdp.actuel.length === 0 &&
                  aInstance._avecMDPActuel()
                );
              },
              node: function () {
                $(this.node).on('keyup', (event) => {
                  if (
                    event.which === ToucheClavier_1.ToucheClavier.RetourChariot
                  ) {
                    ObjetHtml_1.GHtml.setFocus(aInstance.ids.input3);
                  }
                });
              },
            },
            confirmation: {
              getValue: function () {
                return aInstance.mdp.confirmation;
              },
              setValue: function (aValue) {
                aInstance.mdp.confirmation = aValue;
              },
              getDisabled: function () {
                return (
                  (aInstance.mdp.actuel.length === 0 &&
                    aInstance._avecMDPActuel()) ||
                  aInstance.mdp.nouveau.length === 0
                );
              },
              node: function () {
                $(this.node).on('keyup', (event) => {
                  if (
                    event.which ===
                      ToucheClavier_1.ToucheClavier.RetourChariot &&
                    aInstance.options.callbackFocusValidation
                  ) {
                    aInstance.options.callbackFocusValidation();
                  }
                });
              },
              getHint: function () {
                return aInstance.mdp.confirmation.length === 0 ||
                  aInstance.mdp.confirmation === aInstance.mdp.nouveau
                  ? null
                  : aInstance.options.libelleConfirmationIncorrecte;
              },
            },
          },
          montrerMasquerMotDePasse: {
            getModel: {
              event: function (aId) {
                const lTarget = $('#' + aId);
                lTarget.attr('type') === 'password'
                  ? lTarget.attr('type', 'text')
                  : lTarget.attr('type', 'password');
              },
            },
            getClass(aId) {
              return $('#' + aId).attr('type') === 'password'
                ? 'icon_eye_open'
                : 'icon_eye_close';
            },
            getTitle(aId) {
              return $('#' + aId).attr('type') === 'password'
                ? 'Voir le mot de passe'
                : 'Masquer le mot de passe';
            },
          },
          getClassMDPActuel() {
            return aInstance.avecErreurMDPActuel ? 'is-dirty' : '';
          },
          getClassNewMDP() {
            if (aInstance.avecErreurMDPNouveau) {
              return 'is-dirty';
            }
            switch (aInstance._getEtatNewPassword()) {
              case 'disabled':
                return 'is-disabled';
            }
            return '';
          },
          getAttrMDPActuel() {
            return {
              'aria-invalid': aInstance.avecErreurMDPActuel ? 'true' : 'false',
            };
          },
          getAttrNewMDP(aEstConfirmation) {
            return {
              'aria-invalid': aInstance.avecErreurMDPNouveau ? 'true' : 'false',
            };
          },
        });
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
                return GApplication.getMessage()
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
              return GApplication.getMessage()
                .afficher({ message: this.options.libelleEchecModification })
                .then(() => {
                  this.options.callbackApresValidation({ avecErreur: true });
                });
            },
          );
      }
      _avecMDPActuel() {
        return (
          this.options.avecMDPActuel && !this.options.forcerModificationMdp
        );
      }
      _getOptionsValidationMdp() {
        return {
          avecMdpDifferent: this.options.avecMdpNouveauDifferentDeActuel,
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
            '   <label for="',
            this.ids.input1,
            '">',
            this.options.libelleMDPActuel,
            ' *</label>',
            '   <div class="as-input as-password" ie-class="getClassMDPActuel">',
            '       <input ie-model="mdp.actuel" id="',
            this.ids.input1,
            '" ',
            this.options.attrInputActuel,
            ' ie-attr="getAttrMDPActuel"/>',
            '       <ie-btnicon ie-class="montrerMasquerMotDePasse.getClass(\'',
            this.ids.input1,
            '\')" ie-model="montrerMasquerMotDePasse.getModel(\'',
            this.ids.input1,
            '\')" ie-title="montrerMasquerMotDePasse.getTitle(\'',
            this.ids.input1,
            '\')"></ie-btnicon>',
            '   </div>',
          );
          H.push(
            IE.jsx.str('p', {
              class: 'p-top p-bottom message-invalide',
              id: this.ids.validateurMDPActuel,
            }),
          );
        }
        H.push(
          '   <label for="',
          this.ids.input2,
          '">',
          this.options.libelleNewMDP,
          ' *</label>',
          '   <div class="as-input as-password confirm-wrapper" ie-class="getClassNewMDP">',
          '       <input ie-model="mdp.nouveau" class="full-width" id="',
          this.ids.input2,
          '" ',
          this.options.attrInputNouveau,
          ' ie-attr="getAttrNewMDP(false)" />',
          '       <ie-btnicon ie-class="montrerMasquerMotDePasse.getClass(\'',
          this.ids.input2,
          '\')" ie-model="montrerMasquerMotDePasse.getModel(\'',
          this.ids.input2,
          '\')" ie-title="montrerMasquerMotDePasse.getTitle(\'',
          this.ids.input2,
          '\')"></ie-btnicon>',
          '   </div>',
        );
        H.push(
          '   <label for="',
          this.ids.input3,
          '">',
          this.options.libelleConfirmNewMDP,
          ' *</label>',
          '   <div class="as-input as-password confirm-wrapper" ie-class="getClassNewMDP">',
          '       <input ie-model="mdp.confirmation" class="full-width" id="',
          this.ids.input3,
          '" ',
          this.options.attrInputNouveau,
          ' ie-hint="getHint" ie-attr="getAttrNewMDP(true)"/>',
          '       <ie-btnicon ie-class="montrerMasquerMotDePasse.getClass(\'',
          this.ids.input3,
          '\')" ie-model="montrerMasquerMotDePasse.getModel(\'',
          this.ids.input3,
          '\')" ie-title="montrerMasquerMotDePasse.getTitle(\'',
          this.ids.input3,
          '\')"></ie-btnicon>',
          '   </div>',
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
              { class: 'link-as-button' },
              LienPolitiqueMotDePasse_1.TLienPolitiqueMotDePasse.getLien(),
            ),
          );
        }
        H.push('<div style="display:none"><input type="password" /></div>');
        H.push('<div style="display:none"><input type="password" /></div>');
        H.push('<div style="display:none"><input type="password" /></div>');
        H.push('</div>');
        return H.join('');
      }
      _surReponseSaisie(aParams) {
        const lParams = Object.assign(
          {
            avecErreur: true,
            JSON: null,
            messageDejaAffiche: false,
            messageErreur: '',
          },
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
            lErreursMDPPourValidation = null;
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
          return GApplication.getMessage()
            .afficher({
              titre: this.options.libelleEchecModification,
              message: lMessage,
            })
            .then(() => {
              ObjetHtml_1.GHtml.setFocus(lIdFocus);
              IEHtml.refresh();
            });
        } else {
          if (lParams.avecErreur) {
            this.mdp.nouveau = '';
            this.mdp.confirmation = '';
          }
          let lPromise = Promise.resolve();
          if (!lParams.messageDejaAffiche) {
            if (lParams.avecErreur) {
              lPromise = GApplication.getMessage().afficher({
                message:
                  this.options.libelleEchecModification +
                  (lParams.messageErreur
                    ? '<br><br>' + lParams.messageErreur
                    : ''),
              });
            } else if (this.options.avecMessageReussiteModif) {
              lPromise = GApplication.getMessage().afficher({
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
          GApplication.getMessage()
            .afficher({ message: this.options.libelleConfirmationIncorrecte })
            .then(() => {
              $(`#${this.ids.validateurDiffConfirm.escapeJQ()}`).html(
                this.options.libelleConfirmationIncorrecte,
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
              IEHtml.refresh();
            });
          return false;
        }
        return true;
      }
      _getEtatNewPassword() {
        return this.mdp.actuel.length === 0 && this._avecMDPActuel()
          ? 'disabled'
          : this.mdp.confirmation.length === 0 ||
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