IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ValidationMotDePasse = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const TypeOptionGenerationMotDePasse_1 = require('TypeOptionGenerationMotDePasse');
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
          'Le mot de passe doit' +
            ' :',
          '</li>',
        );
        H.push(
          _construireLigneValidateur(
            lErreursMDP ? lErreursMDP.erreurTailleMDP : undefined,
            MethodesObjet_1.MethodesObjet.isNumber(aReglesSaisieMotDePasse.max)
              ? ObjetChaine_1.GChaine.format(
                  'contenir entre %s et %s caractères',
                  [aReglesSaisieMotDePasse.min, aReglesSaisieMotDePasse.max],
                )
              : ObjetChaine_1.GChaine.format(
                  'contenir au moins %s caractères',
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
              'contenir au moins un caractère numérique',
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
              'contenir au moins une lettre',
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
              'contenir au moins un caractère spécial \n(ni lettre, ni chiffre)',
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
              'mélanger des minuscules et des majuscules',
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
              'être différent du nom et de l'identifiant',
              lOptions,
            ),
          );
        }
        if (lOptions.avecMdpDifferent) {
          H.push(
            _construireLigneValidateur(
              lErreursMDP ? !!lErreursMDP.MDPIdentique : undefined,
              'être différent du mot de passe actuel',
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
                ? 'Règle invalide'
                : 'Règle valide',
            })
          : '',
        IE.jsx.str('p', null, aTraduction),
      );
    }
  },
  fn: 'validationmotdepasse.js',
});