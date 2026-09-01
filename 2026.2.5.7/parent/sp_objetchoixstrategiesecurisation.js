IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetChoixStrategieSecurisation = void 0;
    require('@cp/Produit/Css/ObjetChoixStrategieSecurisation.css');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const TypeSecurisationCompte_1 = require('@cp/Produit/Script/Type/TypeSecurisationCompte');
    const TypeEnsembleNombre_1 = require('@cp/script/Type/TypeEnsembleNombre');
    const TraductionsDoubleAuth_1 = require('@cp/script/TraductionsDoubleAuth');
    const IEHtml_Chips_1 = require('@cp/Produit/Script/IEHtml.Chips');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const IconeSvgStar_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgStar');
    const IconeSvgQuestion_sign_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgQuestion_sign');
    const IconeSvgOk_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgOk');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
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
          callbackChoix: undefined,
        };
      }
      jsxModelRadioChoixStategieSecurisation(aGenre) {
        return {
          getValue: () => {
            if (this.donnees.mode === aGenre) {
              return true;
            }
            const lModesPossibles = this.options.modesPossibles;
            switch (aGenre) {
              case TypeSecurisationCompte_1
                .TypeModeGestionDoubleAuthentification.MGDA_SaisieCodePIN:
                return (
                  this.donnees.mode ===
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
                      .TypeModeGestionDoubleAuthentification.MGDA_SaisieCodePIN,
                  ) &&
                    [
                      TypeSecurisationCompte_1
                        .TypeModeGestionDoubleAuthentification
                        .MGDA_SaisieCodePIN,
                      TypeSecurisationCompte_1
                        .TypeModeGestionDoubleAuthentification
                        .MGDA_PasEncoreChoisi,
                    ].indexOf(this.donnees.mode) >= 0) ||
                  (!lModesPossibles.contains(
                    TypeSecurisationCompte_1
                      .TypeModeGestionDoubleAuthentification.MGDA_Inactive,
                  ) &&
                    this.donnees.mode ===
                      TypeSecurisationCompte_1
                        .TypeModeGestionDoubleAuthentification.MGDA_Inactive)
                );
              case TypeSecurisationCompte_1
                .TypeModeGestionDoubleAuthentification.MGDA_Inactive:
                return (
                  !lModesPossibles.contains(
                    TypeSecurisationCompte_1
                      .TypeModeGestionDoubleAuthentification.MGDA_SaisieCodePIN,
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
          setValue: (aValue) => {
            var _a, _b;
            (_b = (_a = this.options).callbackChoix) === null || _b === void 0
              ? void 0
              : _b.call(_a, aGenre);
          },
          getName: () => {
            return `${this.Nom}_jsxModelRadioChoixStategieSecurisation`;
          },
          getDisabled: () => {
            return this._getDisabled();
          },
        };
      }
      jsxModelBoutonPIN() {
        return {
          event: () => {
            var _a, _b;
            (_b = (_a = this.options).callbackChoix) === null || _b === void 0
              ? void 0
              : _b.call(
                  _a,
                  TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
                    .MGDA_SaisieCodePIN,
                  true,
                );
          },
          getDisabled: () => {
            return (
              this.donnees.mode !==
                TypeSecurisationCompte_1.TypeModeGestionDoubleAuthentification
                  .MGDA_SaisieCodePIN || this._getDisabled()
            );
          },
        };
      }
      setDonnees(aDonnees) {
        this.donnees = aDonnees;
        this.afficher(this._construire());
      }
      _getDisabled() {
        var _a, _b;
        return (
          !!this.donnees.nonEditable ||
          !!((_b = (_a = this.options).getDisabled) === null || _b === void 0
            ? void 0
            : _b.call(_a))
        );
      }
      _construire() {
        if (!ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
          return '';
        }
        const lIdDescrFort = `${this.Nom}_descr_f`;
        const lIdDescrMoyen = `${this.Nom}_descr_m`;
        const lIdLegende = `${this.Nom}_legende`;
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
            'div',
            {
              class: 'm-bottom-l',
              role: 'radiogroup',
              'aria-labelledby': lIdLegende,
            },
            IE.jsx.str(
              'p',
              { id: lIdLegende },
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
                            IEHtml_CheckboxRadio_1.Radio,
                            {
                              class: 'css_rbMode as-chips',
                              ie_model:
                                this.jsxModelRadioChoixStategieSecurisation.bind(
                                  this,
                                  TypeSecurisationCompte_1
                                    .TypeModeGestionDoubleAuthentification
                                    .MGDA_SaisieCodePIN,
                                ),
                              'aria-describedby': lIdDescrFort,
                            },
                            IE.jsx.str(
                              'span',
                              { class: 'choix-int' },
                              IE.jsx.str(IconeSvgStar_1.IconeSvgStar, null),
                              IE.jsx.str(IconeSvgStar_1.IconeSvgStar, null),
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
                            IEHtml_CheckboxRadio_1.Radio,
                            {
                              class: 'css_rbMode as-chips',
                              ie_model:
                                this.jsxModelRadioChoixStategieSecurisation.bind(
                                  this,
                                  TypeSecurisationCompte_1
                                    .TypeModeGestionDoubleAuthentification
                                    .MGDA_NotificationSeulement,
                                ),
                              'aria-describedby': lIdDescrMoyen,
                            },
                            IE.jsx.str(
                              'span',
                              { class: 'choix-int' },
                              IE.jsx.str(IconeSvgStar_1.IconeSvgStar, null),
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
                            IEHtml_CheckboxRadio_1.Radio,
                            {
                              class: 'css_rbMode as-chips',
                              ie_model:
                                this.jsxModelRadioChoixStategieSecurisation.bind(
                                  this,
                                  TypeSecurisationCompte_1
                                    .TypeModeGestionDoubleAuthentification
                                    .MGDA_Inactive,
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
                  IEHtml_Bouton_1.Bouton,
                  {
                    ie_model: this.jsxModelBoutonPIN.bind(this),
                    'aria-haspopup': 'dialog',
                  },
                  TraductionsDoubleAuth_1.TradDoubleAuth
                    .RenforcerButtonModifier,
                ),
              )
            : '',
          IE.jsx.str(
            IEHtml_Chips_1.Chips,
            {
              href: GParametres.urlTutoVideoSecurite,
              target: '_blank',
              svg: IE.jsx.str(
                IconeSvgQuestion_sign_1.IconeSvgQuestion_sign,
                null,
              ),
              class: 'css_lienVideo',
              ie_tooltiplabel:
                TraductionsDoubleAuth_1.TradDoubleAuth.EnSavoirPlusTitle,
            },
            TraductionsDoubleAuth_1.TradDoubleAuth.EnSavoirPlus,
          ),
        );
      }
      jsxFuncAttrRegles(aGenre) {
        return {
          class: this.donnees.mode !== aGenre ? 'sr-only' : null,
          'aria-hidden': this.donnees.mode !== aGenre ? 'true' : null,
        };
      }
      construireRegles(aMode, aId) {
        return IE.jsx.str(
          'div',
          { id: aId, ie_attr: this.jsxFuncAttrRegles.bind(this, aMode) },
          IE.jsx.str(
            'p',
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
                  IE.jsx.str(IconeSvgOk_1.IconeSvgOk, {
                    class: 'color-success m-right',
                  }),
                  TraductionsDoubleAuth_1.TradDoubleAuth.LegendeChoixStratPIN,
                ),
            IE.jsx.str(
              'li',
              null,
              IE.jsx.str(IconeSvgOk_1.IconeSvgOk, {
                class: 'color-success m-right',
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