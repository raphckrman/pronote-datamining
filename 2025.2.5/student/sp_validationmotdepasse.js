IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ValidationMotDePasse = exports.TradValidationMotDePasse = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const TypeOptionGenerationMotDePasse_1 = require('TypeOptionGenerationMotDePasse');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TradValidationMotDePasse =
      ObjetTraduction_1.TraductionsModule.getModule('ValidationMotDePasse', {
        titre: '',
        longueurMDPMinMax: '',
        longueurMDPMin: '',
        chiffre: '',
        lettre: '',
        special: '',
        MajMin: '',
        login: '',
        mdpDifferent: '',
        RegleValide: '',
        RegleInvalide: '',
      });
    exports.TradValidationMotDePasse = TradValidationMotDePasse;
    exports.ValidationMotDePasse = {
      leMotDePasseRespecteReglesSecurite(aMDP, aReglesSaisieMotDePasse) {
        if (
          !aMDP ||
          !aReglesSaisieMotDePasse ||
          !aReglesSaisieMotDePasse.regles ||
          !aReglesSaisieMotDePasse.regles.contains ||
          !MethodesObjet_1.MethodesObjet.isString(aMDP)
        ) {
          return false;
        }
        if (
          aMDP.length < aReglesSaisieMotDePasse.min ||
          (aReglesSaisieMotDePasse.max > 0 &&
            aMDP.length > aReglesSaisieMotDePasse.max)
        ) {
          return false;
        }
        if (
          aReglesSaisieMotDePasse.regles.contains(
            TypeOptionGenerationMotDePasse_1.TypeOptionGenerationMotDePasse
              .OGMDP_AvecAuMoinsUneLettre,
          )
        ) {
          if (!aMDP.match(/[a-z]/gi)) {
            return false;
          }
        }
        if (
          aReglesSaisieMotDePasse.regles.contains(
            TypeOptionGenerationMotDePasse_1.TypeOptionGenerationMotDePasse
              .OGMDP_AvecAuMoinsUnChiffre,
          )
        ) {
          if (!aMDP.match(/[0-9]/g)) {
            return false;
          }
        }
        if (
          aReglesSaisieMotDePasse.regles.contains(
            TypeOptionGenerationMotDePasse_1.TypeOptionGenerationMotDePasse
              .OGMDP_AvecMelangeMinusculeMajuscule,
          )
        ) {
          if (!(aMDP.match(/[a-z]/g) && aMDP.match(/[A-Z]/g))) {
            return false;
          }
        }
        if (
          aReglesSaisieMotDePasse.regles.contains(
            TypeOptionGenerationMotDePasse_1.TypeOptionGenerationMotDePasse
              .OGMDP_AvecAuMoinsUnCaractereSpecial,
          )
        ) {
          if (aMDP.replace(/[a-z0-9]/gi, '').length === 0) {
            return false;
          }
        }
        return true;
      },
      construire(aReglesSaisieMotDePasse, aErreursMDP, aOptions) {
        const H = [];
        let lErreursMDP;
        const lOptions = {
          avecEspace: true,
          avecMdpDifferent: false,
          avecMDPDifferentLogin: true,
        };
        $.extend(lOptions, aOptions);
        if (aErreursMDP) {
          lErreursMDP = {
            erreurTailleMDP: false,
            reglesNonRespectes: new TypeEnsembleNombre_1.TypeEnsembleNombre(),
          };
          $.extend(lErreursMDP, aErreursMDP);
        }
        H.push('<ul>');
        H.push(
          '<li class="',
          lOptions.avecEspace ? 'm-bottom' : '',
          ' Gras">',
          TradValidationMotDePasse.titre + ' :',
          '</li>',
        );
        H.push(
          _construireLigneValidateur(
            lErreursMDP ? lErreursMDP.erreurTailleMDP : undefined,
            MethodesObjet_1.MethodesObjet.isNumber(aReglesSaisieMotDePasse.max)
              ? ObjetChaine_1.GChaine.format(
                  TradValidationMotDePasse.longueurMDPMinMax,
                  [aReglesSaisieMotDePasse.min, aReglesSaisieMotDePasse.max],
                )
              : ObjetChaine_1.GChaine.format(
                  TradValidationMotDePasse.longueurMDPMin,
                  [aReglesSaisieMotDePasse.min],
                ),
            lOptions,
          ),
        );
        if (
          aReglesSaisieMotDePasse.regles.contains(
            TypeOptionGenerationMotDePasse_1.TypeOptionGenerationMotDePasse
              .OGMDP_AvecAuMoinsUnChiffre,
          )
        ) {
          H.push(
            _construireLigneValidateur(
              lErreursMDP
                ? lErreursMDP.reglesNonRespectes.contains(
                    TypeOptionGenerationMotDePasse_1
                      .TypeOptionGenerationMotDePasse
                      .OGMDP_AvecAuMoinsUnChiffre,
                  )
                : undefined,
              TradValidationMotDePasse.chiffre,
              lOptions,
            ),
          );
        }
        if (
          aReglesSaisieMotDePasse.regles.contains(
            TypeOptionGenerationMotDePasse_1.TypeOptionGenerationMotDePasse
              .OGMDP_AvecAuMoinsUneLettre,
          )
        ) {
          H.push(
            _construireLigneValidateur(
              lErreursMDP
                ? lErreursMDP.reglesNonRespectes.contains(
                    TypeOptionGenerationMotDePasse_1
                      .TypeOptionGenerationMotDePasse
                      .OGMDP_AvecAuMoinsUneLettre,
                  )
                : undefined,
              TradValidationMotDePasse.lettre,
              lOptions,
            ),
          );
        }
        if (
          aReglesSaisieMotDePasse.regles.contains(
            TypeOptionGenerationMotDePasse_1.TypeOptionGenerationMotDePasse
              .OGMDP_AvecAuMoinsUnCaractereSpecial,
          )
        ) {
          H.push(
            _construireLigneValidateur(
              lErreursMDP
                ? lErreursMDP.reglesNonRespectes.contains(
                    TypeOptionGenerationMotDePasse_1
                      .TypeOptionGenerationMotDePasse
                      .OGMDP_AvecAuMoinsUnCaractereSpecial,
                  )
                : undefined,
              TradValidationMotDePasse.special,
              lOptions,
            ),
          );
        }
        if (
          aReglesSaisieMotDePasse.regles.contains(
            TypeOptionGenerationMotDePasse_1.TypeOptionGenerationMotDePasse
              .OGMDP_AvecMelangeMinusculeMajuscule,
          )
        ) {
          H.push(
            _construireLigneValidateur(
              lErreursMDP
                ? lErreursMDP.reglesNonRespectes.contains(
                    TypeOptionGenerationMotDePasse_1
                      .TypeOptionGenerationMotDePasse
                      .OGMDP_AvecMelangeMinusculeMajuscule,
                  )
                : undefined,
              TradValidationMotDePasse.MajMin,
              lOptions,
            ),
          );
        }
        if (
          lOptions.avecMDPDifferentLogin ||
          aReglesSaisieMotDePasse.regles.contains(
            TypeOptionGenerationMotDePasse_1.TypeOptionGenerationMotDePasse
              .OGMDP_AvecControleIdentifiantDifferent,
          )
        ) {
          H.push(
            _construireLigneValidateur(
              lErreursMDP
                ? lErreursMDP.reglesNonRespectes.contains(
                    TypeOptionGenerationMotDePasse_1
                      .TypeOptionGenerationMotDePasse
                      .OGMDP_AvecControleIdentifiantDifferent,
                  )
                : undefined,
              TradValidationMotDePasse.login,
              lOptions,
            ),
          );
        }
        if (lOptions.avecMdpDifferent) {
          H.push(
            _construireLigneValidateur(
              lErreursMDP ? !!lErreursMDP.MDPIdentique : undefined,
              TradValidationMotDePasse.mdpDifferent,
              lOptions,
            ),
          );
        }
        H.push('</ul>');
        return H.join('');
      },
    };
    function _construireLigneValidateur(aEchec, aTraduction, aOptions) {
      return IE.jsx.str(
        'li',
        {
          class: [
            'flex-contain flex-center flex-gap p-bottom',
            aEchec === undefined ? ' p-left-xl' : '',
          ],
        },
        aEchec !== undefined
          ? IE.jsx.str('i', {
              role: 'img',
              class: [
                'm-top-s ',
                !aEchec ? 'icon_ok ico-green' : 'icon_remove ico-red',
              ],
              'aria-label': aEchec
                ? TradValidationMotDePasse.RegleInvalide
                : TradValidationMotDePasse.RegleValide,
            })
          : '',
        IE.jsx.str('p', null, aTraduction),
      );
    }
  },
  fn: 'validationmotdepasse.js',
});