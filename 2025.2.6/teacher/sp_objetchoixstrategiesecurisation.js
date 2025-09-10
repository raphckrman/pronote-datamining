IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetChoixStrategieSecurisation = void 0;
    require('ObjetChoixStrategieSecurisation.css');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const TypeSecurisationCompte_1 = require('TypeSecurisationCompte');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const jsx_1 = require('jsx');
    const TraductionsDoubleAuth_1 = require('TraductionsDoubleAuth');
    class ObjetChoixStrategieSecurisation extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.options = {
          modeAffichage:
            ObjetChoixStrategieSecurisation.typeAffichage.prefUtilisateur,
          modesPossibles: new TypeEnsembleNombre_1.TypeEnsembleNombre(),
          modeSecurisationParDefaut:
            TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
              .MGDA_SaisieCodePIN,
          callbackChoix: null,
        };
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          rbChoixStrat: {
            getValue: function (aGenre) {
              if (aInstance.donnees.mode === aGenre) {
                return true;
              }
              const lModesPossibles = aInstance.options.modesPossibles;
              switch (aGenre) {
                case TypeSecurisationCompte_1
                  .TypeModeGestionDoubleAuthentification.MGDA_SaisieCodePIN:
                  return (
                    aInstance.donnees.mode ===
                      TypeSecurisationCompte_1
                        .TypeModeGestionDoubleAuthentification
                        .MGDA_PasEncoreChoisi ||
                    (!lModesPossibles.contains(
                      TypeSecurisationCompte_1
                        .TypeModeGestionDoubleAuthentification
                        .MGDA_NotificationSeulement,
                    ) &&
                      !lModesPossibles.contains(
                        TypeSecurisationCompte_1
                          .TypeModeGestionDoubleAuthentification.MGDA_Inactive,
                      ))
                  );
                case TypeSecurisationCompte_1
                  .TypeModeGestionDoubleAuthentification
                  .MGDA_NotificationSeulement:
                  return (
                    (!lModesPossibles.contains(
                      TypeSecurisationCompte_1
                        .TypeModeGestionDoubleAuthentification
                        .MGDA_SaisieCodePIN,
                    ) &&
                      [
                        TypeSecurisationCompte_1
                          .TypeModeGestionDoubleAuthentification
                          .MGDA_SaisieCodePIN,
                        TypeSecurisationCompte_1
                          .TypeModeGestionDoubleAuthentification
                          .MGDA_PasEncoreChoisi,
                      ].indexOf(aInstance.donnees.mode) >= 0) ||
                    (!lModesPossibles.contains(
                      TypeSecurisationCompte_1
                        .TypeModeGestionDoubleAuthentification.MGDA_Inactive,
                    ) &&
                      aInstance.donnees.mode ===
                        TypeSecurisationCompte_1
                          .TypeModeGestionDoubleAuthentification.MGDA_Inactive)
                  );
                case TypeSecurisationCompte_1
                  .TypeModeGestionDoubleAuthentification.MGDA_Inactive:
                  return (
                    !lModesPossibles.contains(
                      TypeSecurisationCompte_1
                        .TypeModeGestionDoubleAuthentification
                        .MGDA_SaisieCodePIN,
                    ) &&
                    !lModesPossibles.contains(
                      TypeSecurisationCompte_1
                        .TypeModeGestionDoubleAuthentification
                        .MGDA_NotificationSeulement,
                    )
                  );
              }
              return false;
            },
            setValue: function (aGenre) {
              aInstance.options.callbackChoix(aGenre);
            },
            getDisabled: aInstance._getDisabled.bind(aInstance),
          },
          btnPIN: {
            event: function () {
              aInstance.options.callbackChoix(
                TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
                  .MGDA_SaisieCodePIN,
                true,
              );
            },
            getDisabled: function () {
              return (
                aInstance.donnees.mode !==
                  TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
                    .MGDA_SaisieCodePIN || aInstance._getDisabled()
              );
            },
          },
          getAttrRegles(aGenre) {
            return {
              class: aInstance.donnees.mode !== aGenre ? 'sr-only' : null,
              'aria-hidden': aInstance.donnees.mode !== aGenre ? 'true' : null,
            };
          },
        });
      }
      setDonnees(aDonnees) {
        this.donnees = aDonnees;
        this.afficher(this._construire());
      }
      _getDisabled() {
        var _a, _b;
        return (
          !!this.donnees.nonEditable ||
          ((_b = (_a = this.options).getDisabled) === null || _b === void 0
            ? void 0
            : _b.call(_a))
        );
      }
      _construire() {
        const lIdDescrFort = `${this.Nom}_descr_f`;
        const lIdDescrMoyen = `${this.Nom}_descr_m`;
        return IE.jsx.str(
          'div',
          {
            class: [
              'ObjetChoixStrategieSecurisation',
              this.options.modeAffichage ===
              ObjetChoixStrategieSecurisation.typeAffichage.prefUtilisateur
                ? 'css-affichage-pref'
                : '',
            ],
          },
          IE.jsx.str(
            'fieldset',
            { class: 'm-bottom-l' },
            IE.jsx.str(
              'legend',
              null,
              this.options.modeAffichage ===
                ObjetChoixStrategieSecurisation.typeAffichage.prefUtilisateur
                ? TraductionsDoubleAuth_1.TradDoubleAuth.LegendeStrategieCompte
                : TraductionsDoubleAuth_1.TradDoubleAuth.LegendeStrategie,
            ),
            IE.jsx.str('div', { class: 'css_Choix' }, (H) => {
              TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentificationUtil.getOrdreModeDoubleAuth(
                this.options.modeSecurisationParDefaut,
              ).forEach((aMode) => {
                switch (aMode) {
                  case TypeSecurisationCompte_1
                    .TypeModeGestionDoubleAuthentification.MGDA_SaisieCodePIN:
                    if (
                      this.options.modesPossibles.contains(
                        TypeSecurisationCompte_1
                          .TypeModeGestionDoubleAuthentification
                          .MGDA_SaisieCodePIN,
                      )
                    ) {
                      H.push(
                        IE.jsx.str(
                          'div',
                          { class: 'choix' },
                          IE.jsx.str(
                            'ie-radio',
                            {
                              class: 'css_rbMode as-chips',
                              'ie-model': (0, jsx_1.jsxFuncAttr)(
                                'rbChoixStrat',
                                [
                                  TypeSecurisationCompte_1
                                    .TypeModeGestionDoubleAuthentification
                                    .MGDA_SaisieCodePIN,
                                ],
                              ),
                              'aria-describedby': lIdDescrFort,
                            },
                            IE.jsx.str(
                              'span',
                              { class: 'choix-int' },
                              IE.jsx.str('i', {
                                class: 'icon_star',
                                role: 'presentation',
                              }),
                              IE.jsx.str('i', {
                                class: 'icon_star',
                                role: 'presentation',
                              }),
                              IE.jsx.str(
                                'span',
                                null,
                                TraductionsDoubleAuth_1.TradDoubleAuth
                                  .StrategieFort,
                              ),
                            ),
                          ),
                        ),
                      );
                    }
                    break;
                  case TypeSecurisationCompte_1
                    .TypeModeGestionDoubleAuthentification
                    .MGDA_NotificationSeulement:
                    if (
                      this.options.modesPossibles.contains(
                        TypeSecurisationCompte_1
                          .TypeModeGestionDoubleAuthentification
                          .MGDA_NotificationSeulement,
                      )
                    ) {
                      H.push(
                        IE.jsx.str(
                          'div',
                          { class: 'choix' },
                          IE.jsx.str(
                            'ie-radio',
                            {
                              class: 'css_rbMode as-chips',
                              'ie-model': (0, jsx_1.jsxFuncAttr)(
                                'rbChoixStrat',
                                [
                                  TypeSecurisationCompte_1
                                    .TypeModeGestionDoubleAuthentification
                                    .MGDA_NotificationSeulement,
                                ],
                              ),
                              'aria-describedby': lIdDescrMoyen,
                            },
                            IE.jsx.str(
                              'span',
                              { class: 'choix-int' },
                              IE.jsx.str('i', {
                                class: 'icon_star',
                                role: 'presentation',
                              }),
                              IE.jsx.str(
                                'span',
                                null,
                                TraductionsDoubleAuth_1.TradDoubleAuth
                                  .StrategieMoyen,
                              ),
                            ),
                          ),
                        ),
                      );
                    }
                    break;
                  case TypeSecurisationCompte_1
                    .TypeModeGestionDoubleAuthentification.MGDA_Inactive:
                    if (
                      this.options.modesPossibles.contains(
                        TypeSecurisationCompte_1
                          .TypeModeGestionDoubleAuthentification.MGDA_Inactive,
                      )
                    ) {
                      H.push(
                        IE.jsx.str(
                          'div',
                          { class: 'choix' },
                          IE.jsx.str(
                            'ie-radio',
                            {
                              class: 'css_rbMode as-chips',
                              'ie-model': (0, jsx_1.jsxFuncAttr)(
                                'rbChoixStrat',
                                [
                                  TypeSecurisationCompte_1
                                    .TypeModeGestionDoubleAuthentification
                                    .MGDA_Inactive,
                                ],
                              ),
                            },
                            IE.jsx.str(
                              'span',
                              { class: 'choix-int' },
                              TraductionsDoubleAuth_1.TradDoubleAuth
                                .StrategieAucun,
                            ),
                          ),
                        ),
                      );
                    }
                    break;
                  default:
                }
              });
            }),
          ),
          IE.jsx.str(
            'div',
            { class: 'css-regles' },
            this.construireRegles(
              TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
                .MGDA_SaisieCodePIN,
              lIdDescrFort,
            ),
            this.construireRegles(
              TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
                .MGDA_NotificationSeulement,
              lIdDescrMoyen,
            ),
          ),
          this.options.modesPossibles.contains(
            TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
              .MGDA_SaisieCodePIN,
          ) &&
            this.options.modeAffichage ===
              ObjetChoixStrategieSecurisation.typeAffichage.prefUtilisateur
            ? IE.jsx.str(
                'div',
                { class: 'css_btnPin' },
                IE.jsx.str(
                  'ie-bouton',
                  { 'ie-model': 'btnPIN', 'aria-haspopup': 'dialog' },
                  TraductionsDoubleAuth_1.TradDoubleAuth
                    .RenforcerButtonModifier,
                ),
              )
            : '',
          IE.jsx.str(
            'ie-chips',
            {
              href: GParametres.urlTutoVideoSecurite,
              target: '_blank',
              class: 'css_lienVideo iconic icon_question_sign',
              'ie-tooltiplabel':
                TraductionsDoubleAuth_1.TradDoubleAuth.EnSavoirPlusTitle,
            },
            TraductionsDoubleAuth_1.TradDoubleAuth.EnSavoirPlus,
          ),
        );
      }
      construireRegles(aMode, aId) {
        return IE.jsx.str(
          'div',
          {
            id: aId,
            'ie-attr': (0, jsx_1.jsxFuncAttr)('getAttrRegles', aMode),
          },
          IE.jsx.str(
            'span',
            null,
            TraductionsDoubleAuth_1.TradDoubleAuth.LegendeChoixStratTitre,
            ' :',
          ),
          IE.jsx.str(
            'ul',
            null,
            aMode !==
              TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
                .MGDA_SaisieCodePIN
              ? ''
              : IE.jsx.str(
                  'li',
                  null,
                  IE.jsx.str('i', {
                    class: 'icon_ok ico-green m-right',
                    role: 'presentation',
                  }),
                  TraductionsDoubleAuth_1.TradDoubleAuth.LegendeChoixStratPIN,
                ),
            IE.jsx.str(
              'li',
              null,
              IE.jsx.str('i', {
                class: 'icon_ok ico-green m-right',
                role: 'presentation',
              }),
              TraductionsDoubleAuth_1.TradDoubleAuth.LegendeChoixStratNotif,
            ),
          ),
        );
      }
    }
    exports.ObjetChoixStrategieSecurisation = ObjetChoixStrategieSecurisation;
    ObjetChoixStrategieSecurisation.typeAffichage = {
      prefUtilisateur: 'prefUtilisateur',
      securisation: 'securisation',
    };
  },
  fn: 'objetchoixstrategiesecurisation.js',
});