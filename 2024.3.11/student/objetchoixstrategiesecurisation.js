IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetChoixStrategieSecurisation = void 0;
    require('ObjetChoixStrategieSecurisation.css');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TypeSecurisationCompte_1 = require('TypeSecurisationCompte');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const jsx_1 = require('jsx');
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
          getClassRegles(aGenre) {
            return aInstance.donnees.mode !== aGenre ? 'sr-only' : '';
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
                ? 'Niveau de sécurité pour renforcer mon compte parmi ceux proposé(s) par l'établissement :'
                : 'Choisissez le niveau à appliquer pour renforcer la sécurité de votre compte',
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
                                'Fort',
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
                                'Moyen',
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
                              'Aucun',
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
                  'Modifier mon code PIN',
                ),
              )
            : '',
          IE.jsx.str(
            'ie-chips',
            {
              href: GParametres.urlTutoVideoSecurite,
              target: '_blank',
              class: 'css_lienVideo iconic icon_question_sign',
            },
            'En savoir plus',
          ),
        );
      }
      construireRegles(aMode, aId) {
        return IE.jsx.str(
          'div',
          {
            id: aId,
            'ie-class': (0, jsx_1.jsxFuncAttr)('getClassRegles', aMode),
          },
          IE.jsx.str(
            'span',
            null,
            'A chaque connexion sur un nouvel appareil',
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
                  'Saisie du code PIN',
                ),
            IE.jsx.str(
              'li',
              null,
              IE.jsx.str('i', {
                class: 'icon_ok ico-green m-right',
                role: 'presentation',
              }),
              'Réception d'une notification',
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