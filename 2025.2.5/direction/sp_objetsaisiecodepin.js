IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetSaisieCodePIN = void 0;
    require('ObjetSaisieCodePIN.css');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const SecurisationCompte = require('TypeSecurisationCompte');
    const UtilitaireDeconnexion_1 = require('UtilitaireDeconnexion');
    const TypeSecurisationCompte_1 = require('TypeSecurisationCompte');
    const ObjetRequeteSecurisationCompte_1 = require('ObjetRequeteSecurisationCompte');
    const jsx_1 = require('jsx');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ToucheClavier_1 = require('ToucheClavier');
    const TraductionsDoubleAuth_1 = require('TraductionsDoubleAuth');
    const AccessApp_1 = require('AccessApp');
    var TypeEtape;
    (function (TypeEtape) {
      TypeEtape['val'] = 'val';
      TypeEtape['confirm'] = 'confirm';
      TypeEtape['controlePINOuReinit'] = 'controlePINOuReinit';
      TypeEtape['finValidation'] = 'finValidation';
    })(TypeEtape || (TypeEtape = {}));
    const C_ReinitPINLength = 6;
    class ObjetSaisieCodePIN extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.options = {
          classeRequete: null,
          modePIN: ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlePIN,
          avecReinitPIN: false,
          emailOcculte: '',
        };
        this.codePin = {};
        this._init();
        this.Actif = true;
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          avecBoutons(aEtape) {
            return aInstance.codePin.etapeConfirmation === aEtape;
          },
          btnVal: {
            event(aVal, aEtape) {
              switch (aEtape) {
                case TypeEtape.val:
                  aInstance.codePin.val += aVal;
                  break;
                case TypeEtape.confirm:
                  aInstance.codePin.confirm += aVal;
                  break;
                case TypeEtape.controlePINOuReinit: {
                  aInstance.codePin.valControlePIN += aVal;
                  break;
                }
                default:
              }
              const lNb = aInstance.getNbPIN(aEtape);
              if (lNb > 0 && aInstance.getCodePINDEtape(aEtape).length >= lNb) {
                if (aInstance._getDisabled(aEtape)) {
                  return;
                }
                aInstance._surValider();
              }
            },
            node(aVal, aEtape) {
              $(this.node).on('keyup', function (aEvent) {
                if (aEvent.which === ToucheClavier_1.ToucheClavier.Backspace) {
                  aInstance.clearBtn(aEtape);
                  aInstance.$refreshSelf();
                }
              });
            },
            getDisabled(aVal, aEtape) {
              return aInstance._getDisabled(aEtape);
            },
          },
          btnClear: {
            event(aEtape) {
              aInstance.clearBtn(aEtape);
            },
            getDisabled(aEtape) {
              return aInstance._getDisabled(aEtape, true);
            },
          },
          btnValider: {
            event(aEtape) {
              aInstance._surValider();
            },
            getDisabled(aEtape) {
              if (aInstance._getDisabled(aEtape)) {
                return true;
              }
              if (
                aInstance.getCodePINDEtape(aEtape).length <
                SecurisationCompte.C_MinPinLength
              ) {
                return true;
              }
              return false;
            },
          },
          btnPINOubli: {
            async event() {
              const lJSONReponse = await new aInstance.options.classeRequete(
                aInstance,
              ).lancerRequete({
                action:
                  TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
                    .csch_DemandeReinitialisationPIN,
              });
              if (!lJSONReponse.ok) {
                return;
              }
              await (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({
                  message:
                    TraductionsDoubleAuth_1.TradDoubleAuth.EMailReinitialisationPIN_S.format(
                      [aInstance.options.emailOcculte],
                    ),
                });
              const lResultFenetre =
                await ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
                  ObjetFenetre_ReinitPIN,
                  { pere: this },
                ).afficher(aInstance.options.emailOcculte);
              if (lResultFenetre && lResultFenetre.resultReinitPIN) {
                if (lResultFenetre.resultReinitPIN.reinitPIN_OK) {
                  aInstance.callback.appel(lResultFenetre.resultReinitPIN);
                }
              }
            },
          },
          getHtmlMessagePin: function () {
            return aInstance._construireMessagePINVerification();
          },
          getClassContVisuPIN(aEtape) {
            return aInstance.codePin.etapeConfirmation !== aEtape
              ? 'disabled'
              : '';
          },
          getClassVisuPIN(aEtape) {
            return aInstance.codePin.etapeConfirmation === aEtape
              ? 'active'
              : '';
          },
          getHtmlVisuPIN(aEtape, aNbPIN) {
            let lNbSaisie = aInstance.getCodePINDEtape(aEtape).length;
            if (aNbPIN > 0) {
              let lResult = '';
              for (let lNb = 0; lNb < aNbPIN; lNb++) {
                lResult += IE.jsx.str(
                  'span',
                  { class: 'scp-PIN' },
                  IE.jsx.str('i', {
                    class: ['icon_rond', lNb >= lNbSaisie ? 'hide' : ''],
                    role: 'presentation',
                  }),
                );
              }
              return lResult;
            } else {
              if (lNbSaisie > 0) {
                let lResult = '';
                for (let lNb = 0; lNb < lNbSaisie; lNb++) {
                  lResult += IE.jsx.str('i', {
                    class: 'icon_rond',
                    role: 'presentation',
                  });
                }
                return lResult;
              }
              return IE.jsx.str('i', {
                class: 'icon_rond hide',
                role: 'presentation',
              });
            }
          },
          getHtmlAlertControleInitialPIN() {
            if (aInstance.codePin.saisiePinVerifie) {
              switch (aInstance.options.modePIN) {
                case ObjetSaisieCodePIN.ModeSaisieValiderPIN.ReInitPIN:
                  return TraductionsDoubleAuth_1.TradDoubleAuth
                    .WAI_CodeReinitValide;
                case ObjetSaisieCodePIN.ModeSaisieValiderPIN
                  .ControlerModifierPIN:
                  return TraductionsDoubleAuth_1.TradDoubleAuth
                    .WAI_MonCodeValide;
                default:
              }
            }
            return '';
          },
        });
      }
      setDonnees(aDonnees) {
        this.donnees = aDonnees;
        this._init();
        this.codePin.valControlePIN = '';
        if (
          this.options.modePIN ===
            ObjetSaisieCodePIN.ModeSaisieValiderPIN.ReInitPIN ||
          this.options.modePIN ===
            ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlerModifierPIN
        ) {
          this.codePin.etapeConfirmation = TypeEtape.controlePINOuReinit;
        }
        this.afficher(this._construire());
      }
      surValider() {
        this._surValider(true);
      }
      clearBtn(aEtape) {
        if (aEtape === TypeEtape.controlePINOuReinit) {
          this._init(true);
        } else {
          const lEtape = this.codePin.etapeConfirmation;
          this._init();
          if (this.codePin.etapeConfirmation !== lEtape) {
            this.focusSurClavierVisible();
          }
        }
      }
      _init(aInitPourReinit = false) {
        if (aInitPourReinit) {
          Object.assign(this.codePin, {
            valControlePIN: '',
            etapeConfirmation: TypeEtape.controlePINOuReinit,
            saisiePinVerifie: false,
          });
        } else {
          Object.assign(this.codePin, {
            val: '',
            confirm: '',
            etapeConfirmation: TypeEtape.val,
            saisiePinVerifie: false,
          });
          this.callback.appel(null);
        }
      }
      getCodePINDEtape(aEtape) {
        switch (aEtape) {
          case TypeEtape.val:
            return this.codePin.val;
          case TypeEtape.confirm:
            return this.codePin.confirm;
          case TypeEtape.controlePINOuReinit:
            return this.codePin.valControlePIN;
        }
        return '';
      }
      _construireMessagePINVerification() {
        if (this.codePin.saisiePinVerifie) {
          return [
            IE.jsx.str('i', { class: 'icon_ok', role: 'presentation' }),
            TraductionsDoubleAuth_1.TradDoubleAuth.ValiderCodeValide,
          ].join('');
        }
        if (this.codePin.nbEchecVerifie > 0) {
          const H = [];
          if (this.codePin.nbEchecVerifie >= SecurisationCompte.C_MaxPinRetry) {
            H.push(
              TraductionsDoubleAuth_1.TradDoubleAuth.ValiderCodePinInvalide,
            );
          } else {
            H.push(
              IE.jsx.str('i', { class: 'icon_remove', role: 'presentation' }),
              TraductionsDoubleAuth_1.TradDoubleAuth.NouvelAppareilTentatives.format(
                [
                  SecurisationCompte.C_MaxPinRetry -
                    this.codePin.nbEchecVerifie,
                ],
              ),
            );
          }
          return H.join('');
        }
      }
      async _surValider(aAppelValiderExterne) {
        const lEstControleReInitPIN =
          this.options.modePIN ===
            ObjetSaisieCodePIN.ModeSaisieValiderPIN.ReInitPIN &&
          this.codePin.etapeConfirmation === TypeEtape.controlePINOuReinit;
        const lEstControleAncienPIN =
          this.options.modePIN ===
            ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlerModifierPIN &&
          this.codePin.etapeConfirmation === TypeEtape.controlePINOuReinit;
        if (
          this.options.modePIN !==
            ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlePIN &&
          !lEstControleReInitPIN &&
          !lEstControleAncienPIN
        ) {
          if (this.codePin.etapeConfirmation === TypeEtape.val) {
            if (
              this.getNbPIN(TypeEtape.val) === 0 &&
              this.codePin.val.length < SecurisationCompte.C_MinPinLength
            ) {
              await (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({
                  message:
                    TraductionsDoubleAuth_1.TradDoubleAuth.PinInsuffisant.format(
                      [SecurisationCompte.C_MinPinLength],
                    ),
                });
              return;
            }
            this.codePin.etapeConfirmation = TypeEtape.confirm;
            await this.focusSurClavierVisible();
            return;
          }
          if (this.codePin.etapeConfirmation === TypeEtape.confirm) {
            if (this.codePin.val !== this.codePin.confirm) {
              this.codePin.confirm = '';
              await (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({
                  message:
                    TraductionsDoubleAuth_1.TradDoubleAuth.PinNonConfirme,
                });
              return;
            }
            this.codePin.etapeConfirmation = TypeEtape.finValidation;
          }
        }
        if (
          this.options.modePIN ===
            ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlePIN ||
          lEstControleReInitPIN ||
          lEstControleAncienPIN
        ) {
          const lValPIN =
            lEstControleReInitPIN || lEstControleAncienPIN
              ? this.codePin.valControlePIN
              : this.codePin.val;
          if (aAppelValiderExterne && !lValPIN) {
            await (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                message: TraductionsDoubleAuth_1.TradDoubleAuth.InfoSaisiePIN,
              });
            return;
          }
          const lReponseJSON = await new this.options.classeRequete(
            this,
          ).lancerRequete({
            action: lEstControleReInitPIN
              ? TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
                  .csch_VerifierCodeReinitialisationPIN
              : TypeSecurisationCompte_1.TypeCommandeSecurisationCompteHttp
                  .csch_VerifierPIN,
            codePin: lValPIN,
          });
          try {
            if (lReponseJSON && lReponseJSON.result) {
              this.codePin.saisiePinVerifie = true;
              if (lEstControleReInitPIN || lEstControleAncienPIN) {
                this.callback.appel({ codePINVerifReinit: lValPIN });
                this.codePin.etapeConfirmation = TypeEtape.val;
                await this.focusSurClavierVisible();
                return;
              } else {
                this.callback.appel({ codePin: lValPIN }, aAppelValiderExterne);
              }
            } else {
              throw new Error('echec securisation');
            }
          } catch (e) {
            this._init(lEstControleReInitPIN || lEstControleAncienPIN);
            this.codePin.nbEchecVerifie = this.codePin.nbEchecVerifie || 0;
            this.codePin.nbEchecVerifie += 1;
            const lAvecDeco =
              this.codePin.nbEchecVerifie >= SecurisationCompte.C_MaxPinRetry;
            await (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                message:
                  TraductionsDoubleAuth_1.TradDoubleAuth
                    .ValiderCodePinInvalide +
                  (lAvecDeco
                    ? ''
                    : '<br>' +
                      TraductionsDoubleAuth_1.TradDoubleAuth.NouvelAppareilTentatives.format(
                        [
                          SecurisationCompte.C_MaxPinRetry -
                            this.codePin.nbEchecVerifie,
                        ],
                      )),
              });
            await this.focusSurClavierVisible();
            if (lAvecDeco) {
              return UtilitaireDeconnexion_1.UtilitaireDeconnexion.deconnexion();
            }
          }
        } else {
          this.callback.appel({ codePin: this.codePin.val });
        }
      }
      async focusSurClavierVisible() {
        await this.$refreshSelf();
        $(`#${this.Nom.escapeJQ()} .scp_boutons button`)
          .first()
          .trigger('focus');
      }
      _getDisabled(aEtape, aEstBtnClear) {
        if (!this.Actif) {
          return true;
        }
        let lDisabled =
          this.donnees.mode !==
          TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
            .MGDA_SaisieCodePIN;
        if (lDisabled) {
          this._init();
          this.$refreshSelf();
        }
        if (
          this.donnees.mode ===
            TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
              .MGDA_SaisieCodePIN &&
          this.options.modePIN ===
            ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlePIN &&
          (this.codePin.saisiePinVerifie ||
            this.codePin.nbEchecVerifie >= SecurisationCompte.C_MaxPinRetry)
        ) {
          lDisabled = true;
        }
        if (
          aEstBtnClear !== true &&
          this.donnees.mode ===
            TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
              .MGDA_SaisieCodePIN &&
          this.codePin.etapeConfirmation === TypeEtape.finValidation
        ) {
          lDisabled = true;
        }
        return lDisabled;
      }
      _construire() {
        const lControlePIN =
          this.options.modePIN ===
          ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlePIN;
        const lControlerModifierPIN =
          this.options.modePIN ===
          ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlerModifierPIN;
        const lReinitPIN =
          this.options.modePIN ===
          ObjetSaisieCodePIN.ModeSaisieValiderPIN.ReInitPIN;
        const lIdTitre = `${this.Nom}_titre`;
        let lTitre = '';
        switch (this.options.modePIN) {
          case ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlePIN:
          case ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlerModifierPIN: {
            lTitre =
              this.options.estAffCompte || lControlerModifierPIN
                ? TraductionsDoubleAuth_1.TradDoubleAuth
                    .NouvelAppareilRenseignerPIN
                : TraductionsDoubleAuth_1.TradDoubleAuth.ValiderInfoPIN;
            break;
          }
          case ObjetSaisieCodePIN.ModeSaisieValiderPIN.ReInitPIN:
            lTitre =
              TraductionsDoubleAuth_1.TradDoubleAuth.ProcedureReInitialisationCodePIN_S.format(
                this.options.emailOcculte,
              );
            break;
          case ObjetSaisieCodePIN.ModeSaisieValiderPIN.DefinirPIN:
            lTitre =
              TraductionsDoubleAuth_1.TradDoubleAuth.MessageCreationCodePIN;
            break;
          default:
        }
        const lNbPIN_val = this.getNbPIN(TypeEtape.val);
        const lAriaLabelVal =
          this.getlabelCodePINDEtape(TypeEtape.val) +
          ' : ' +
          (lNbPIN_val === 0
            ? TraductionsDoubleAuth_1.TradDoubleAuth.WAI_SaisiePINEtValider_D.format(
                [SecurisationCompte.C_MinPinLength],
              )
            : TraductionsDoubleAuth_1.TradDoubleAuth.WAI_SaisiePIN_D.format([
                lNbPIN_val,
              ]));
        return IE.jsx.str(
          'div',
          { class: 'ObjetSaisieCodePIN' },
          lTitre ? IE.jsx.str('span', { id: lIdTitre }, lTitre) : '',
          IE.jsx.str(
            'div',
            {
              class: 'scp_zone',
              role: lTitre ? 'group' : false,
              'aria-labelledby': lTitre ? lIdTitre : false,
            },
            () => {
              if (lReinitPIN || lControlerModifierPIN) {
                const lAriaLabel = lReinitPIN
                  ? TraductionsDoubleAuth_1.TradDoubleAuth.WAI_ProcedureReInitialisationCodePIN_DS.format(
                      [C_ReinitPINLength, this.options.emailOcculte],
                    )
                  : lNbPIN_val === 0
                    ? TraductionsDoubleAuth_1.TradDoubleAuth
                        .WAI_ControleCodePINCourant
                    : TraductionsDoubleAuth_1.TradDoubleAuth
                        .WAI_ControleCodePINCourantFixe;
                return IE.jsx.str(
                  'div',
                  {
                    class: 'scp-etape',
                    role: 'group',
                    'aria-label': lAriaLabel,
                  },
                  this.construireVisuCode(TypeEtape.controlePINOuReinit),
                  this.construireClavier(TypeEtape.controlePINOuReinit),
                  IE.jsx.str('span', {
                    class: 'sr-only',
                    role: 'alert',
                    'ie-html': 'getHtmlAlertControleInitialPIN',
                  }),
                );
              }
              return '';
            },
            IE.jsx.str(
              'div',
              {
                class: 'scp-etape',
                role: 'group',
                'aria-label': lAriaLabelVal.trim(),
              },
              this.construireVisuCode(TypeEtape.val),
              this.construireClavier(TypeEtape.val),
              lControlePIN
                ? IE.jsx.str('div', {
                    'ie-html': 'getHtmlMessagePin',
                    class: 'scp_messagePin',
                  })
                : '',
            ),
            !lControlePIN
              ? IE.jsx.str(
                  'div',
                  {
                    class: 'scp-etape',
                    role: 'group',
                    'aria-label':
                      this.getNbPIN(TypeEtape.confirm) === 0
                        ? TraductionsDoubleAuth_1.TradDoubleAuth
                            .WAI_ConfirmPINEtValider
                        : TraductionsDoubleAuth_1.TradDoubleAuth.WAI_ConfirmPIN,
                  },
                  this.construireVisuCode(TypeEtape.confirm),
                  this.construireClavier(TypeEtape.confirm),
                )
              : '',
          ),
          () => {
            if (!this.options.avecReinitPIN && lControlePIN) {
              return IE.jsx.str(
                'p',
                null,
                TraductionsDoubleAuth_1.TradDoubleAuth.NouvelAppareilOubliPIN,
              );
            }
          },
          () => {
            if (
              GParametres.urlFAQEnregistrementDoubleAuth &&
              !this.options.estAffCompte &&
              (lControlePIN ||
                this.options.modePIN ===
                  ObjetSaisieCodePIN.ModeSaisieValiderPIN.DefinirPIN)
            ) {
              return IE.jsx.str(
                'ie-chips',
                {
                  class: 'scp-link-pied iconic icon_question_sign',
                  href: GParametres.urlFAQEnregistrementDoubleAuth,
                },
                TraductionsDoubleAuth_1.TradDoubleAuth.LienFAQPIN,
              );
            }
          },
        );
      }
      getNbPIN(aEtape) {
        if (
          aEtape === TypeEtape.controlePINOuReinit &&
          this.options.modePIN ===
            ObjetSaisieCodePIN.ModeSaisieValiderPIN.ReInitPIN
        ) {
          return C_ReinitPINLength;
        }
        return GEtatUtilisateur.getCodePINFixe()
          ? SecurisationCompte.C_PinFixeLength
          : 0;
      }
      getlabelCodePINDEtape(aEtape) {
        switch (aEtape) {
          case TypeEtape.val: {
            switch (this.options.modePIN) {
              case ObjetSaisieCodePIN.ModeSaisieValiderPIN.ReInitPIN:
              case ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlerModifierPIN:
                return TraductionsDoubleAuth_1.TradDoubleAuth.NouveauCodePIN;
              case ObjetSaisieCodePIN.ModeSaisieValiderPIN.DefinirPIN:
                return TraductionsDoubleAuth_1.TradDoubleAuth.PremierPIN;
              default:
                return TraductionsDoubleAuth_1.TradDoubleAuth.MonCodePIN;
            }
          }
          case TypeEtape.confirm: {
            return TraductionsDoubleAuth_1.TradDoubleAuth.ConfirmPIN;
          }
          case TypeEtape.controlePINOuReinit: {
            return this.options.modePIN ===
              ObjetSaisieCodePIN.ModeSaisieValiderPIN.ReInitPIN
              ? TraductionsDoubleAuth_1.TradDoubleAuth.CodeRecuPIN
              : TraductionsDoubleAuth_1.TradDoubleAuth.MonCodePIN;
          }
        }
        return '';
      }
      construireVisuCode(aEtape) {
        const lTitre = this.getlabelCodePINDEtape(aEtape);
        const lNbPIN = this.getNbPIN(aEtape);
        return IE.jsx.str(
          'div',
          {
            class: 'scp-visu-pin',
            'aria-hidden': 'true',
            'ie-class': (0, jsx_1.jsxFuncAttr)('getClassContVisuPIN', aEtape),
          },
          IE.jsx.str('span', { class: 'scp-visu-pin-label' }, lTitre, ' :'),
          IE.jsx.str(
            'span',
            {
              class: ['scp-visu-pin-image', lNbPIN > 0 ? 'scp-blocs-pin' : ''],
            },
            IE.jsx.str('span', {
              'ie-html': (0, jsx_1.jsxFuncAttr)('getHtmlVisuPIN', [
                aEtape,
                lNbPIN,
              ]),
              'ie-class': (0, jsx_1.jsxFuncAttr)('getClassVisuPIN', aEtape),
            }),
          ),
        );
      }
      construireClavier(aEtape) {
        const lNbPIN = this.getNbPIN(aEtape);
        return IE.jsx.str(
          'ul',
          {
            class: ['scp_boutons', lNbPIN === 0 ? 'scp-valider' : ''],
            'ie-if': (0, jsx_1.jsxFuncAttr)('avecBoutons', aEtape),
          },
          (aTab) => {
            const lTab = [];
            for (let i = 0; i < 10; i++) {
              lTab.push(i);
            }
            while (lTab.length > 0) {
              const lIndice = Math.floor(Math.random() * lTab.length);
              const lVal = lTab[lIndice];
              lTab.splice(lIndice, 1);
              aTab.push(
                IE.jsx.str(
                  'li',
                  null,
                  IE.jsx.str(
                    'ie-bouton',
                    {
                      class: 'themeBoutonNeutre',
                      'ie-model': (0, jsx_1.jsxFuncAttr)('btnVal', [
                        lVal,
                        aEtape,
                      ]),
                    },
                    lVal,
                  ),
                ),
              );
            }
            aTab.push(
              IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str(
                  'li',
                  { class: 'scp_btnclear' },
                  IE.jsx.str(
                    'ie-bouton',
                    {
                      class: 'themeBoutonNeutre',
                      'ie-model': (0, jsx_1.jsxFuncAttr)('btnClear', aEtape),
                      title: TraductionsDoubleAuth_1.TradDoubleAuth.Effacer,
                      'aria-label':
                        TraductionsDoubleAuth_1.TradDoubleAuth.Effacer,
                    },
                    IE.jsx.str('i', {
                      class: 'icon_delete_clavier_mobile',
                      role: 'presentation',
                    }),
                  ),
                ),
                lNbPIN === 0
                  ? IE.jsx.str(
                      'li',
                      { class: 'scp_btnvalider' },
                      IE.jsx.str(
                        'ie-bouton',
                        {
                          class: 'themeBoutonPrimaire',
                          'ie-model': (0, jsx_1.jsxFuncAttr)(
                            'btnValider',
                            aEtape,
                          ),
                        },
                        'Valider',
                      ),
                    )
                  : '',
              ),
            );
            if (
              aEtape === TypeEtape.val &&
              this.options.modePIN ===
                ObjetSaisieCodePIN.ModeSaisieValiderPIN.ControlePIN &&
              this.options.avecReinitPIN
            ) {
              aTab.push(
                IE.jsx.str(
                  'li',
                  { class: 'scp-reinitPIN' },
                  IE.jsx.str(
                    'ie-bouton',
                    {
                      class: 'themeBoutonNeutre small-bt',
                      'ie-model': 'btnPINOubli',
                      title:
                        TraductionsDoubleAuth_1.TradDoubleAuth
                          .HintReinitialiserMonCodePIN,
                      'aria-haspopup': 'dialog',
                    },
                    TraductionsDoubleAuth_1.TradDoubleAuth
                      .ReinitialiserMonCodePIN,
                  ),
                ),
              );
            }
          },
        );
      }
    }
    exports.ObjetSaisieCodePIN = ObjetSaisieCodePIN;
    (function (ObjetSaisieCodePIN) {
      let ModeSaisieValiderPIN;
      (function (ModeSaisieValiderPIN) {
        ModeSaisieValiderPIN['ControlePIN'] = 'ControlePIN';
        ModeSaisieValiderPIN['ControlerModifierPIN'] = 'ControlerModifierPIN';
        ModeSaisieValiderPIN['DefinirPIN'] = 'DefinirPIN';
        ModeSaisieValiderPIN['ReInitPIN'] = 'ReInitPIN';
      })(
        (ModeSaisieValiderPIN =
          ObjetSaisieCodePIN.ModeSaisieValiderPIN ||
          (ObjetSaisieCodePIN.ModeSaisieValiderPIN = {})),
      );
    })(
      ObjetSaisieCodePIN ||
        (exports.ObjetSaisieCodePIN = ObjetSaisieCodePIN = {}),
    );
    class ObjetFenetre_ReinitPIN extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.resultReinitPIN = {};
        this.setOptionsFenetre({
          titre:
            TraductionsDoubleAuth_1.TradDoubleAuth.TitreReInitialisationCodePIN,
          listeBoutons: ['Annuler'],
          addParametresValidation: () => {
            return { resultReinitPIN: this.resultReinitPIN };
          },
        });
      }
      construireInstances() {
        this.identPIN = this.add(ObjetSaisieCodePIN, (aParams) => {
          if (aParams && aParams.codePINVerifReinit) {
            this.resultReinitPIN.codePINVerifReinit =
              aParams.codePINVerifReinit;
          } else if (aParams) {
            this.resultReinitPIN.codePin = aParams.codePin;
            this.resultReinitPIN.reinitPIN_OK = true;
            this.surValidation(undefined);
          }
        });
      }
      composeContenu() {
        return IE.jsx.str('div', { id: this.getNomInstance(this.identPIN) });
      }
      afficher(aEmailOcculte) {
        this.getInstance(this.identPIN)
          .setOptions({
            classeRequete:
              ObjetRequeteSecurisationCompte_1.ObjetRequeteSecurisationCompteDoubleAuth,
            modePIN: ObjetSaisieCodePIN.ModeSaisieValiderPIN.ReInitPIN,
            emailOcculte: aEmailOcculte,
          })
          .setDonnees({
            mode: TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
              .MGDA_SaisieCodePIN,
          });
        return super.afficher();
      }
    }
  },
  fn: 'objetsaisiecodepin.js',
});