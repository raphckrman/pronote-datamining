IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetreRecupIdMDP = void 0;
    require('ObjetFenetreRecupIdMDP.css');
    const Invocateur_1 = require('Invocateur');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const LienPolitiqueMotDePasse_1 = require('LienPolitiqueMotDePasse');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ToucheClavier_1 = require('ToucheClavier');
    const ValidationMotDePasse_1 = require('ValidationMotDePasse');
    const UtilitaireEmail_1 = require('UtilitaireEmail');
    const UtilitaireRecupMDP_1 = require('UtilitaireRecupMDP');
    const tag_1 = require('tag');
    const ObjetRequeteRecupIdMDP_1 = require('ObjetRequeteRecupIdMDP');
    const ObjetHtml_1 = require('ObjetHtml');
    class ObjetFenetreRecupIdMDP extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.idStage = this.Nom + '_stage';
        this.idNom = this.Nom + '_nom';
        this.idPrenom = this.Nom + '_prenom';
        this.idCourriel = this.Nom + '_courriel';
        this.idCode = this.Nom + '_codesec';
        this.idMdp = this.Nom + '_mdp';
        this.idMdpbis = this.Nom + '_mdpbis';
        this.idValidationMdp = this.Nom + '_validMdp';
        this.stage = 1;
        this.courriel = '';
        this._nom = '';
        this._prenom = '';
        this.code = '';
        this.options = { avecRecupParParent: false };
        this.setOptionsFenetre({
          titre: 'Récupérer votre identifiant / mot de passe',
          largeur: 675,
          hauteur: 330,
          listeBoutons: [
            'Annuler',
          ],
          largeurMin: 550,
          hauteurMin: 323,
          avecCroixFermeture: false,
          fermerFenetreSurClicHorsFenetre: false,
          estCreation: false,
        });
      }
      free() {
        super.free();
        Invocateur_1.Invocateur.desabonner(
          Invocateur_1.ObjetInvocateur.events.autorisationRechargementPage,
        );
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          classEtape: function (aEtape) {
            const lClass = ['etape', 'fluid-bloc'];
            if (aEtape !== aInstance.stage) {
              lClass.push('is-disabled');
            }
            return lClass.join(' ');
          },
          inputMail: {
            getValue: function () {
              return aInstance.courriel;
            },
            setValue: function (aValue) {
              aInstance.courriel = aValue;
            },
            keyupEnter: function () {
              if (
                UtilitaireEmail_1.TUtilitaireEmail.estValide(
                  aInstance.courriel.trim(),
                )
              ) {
                aInstance.evenementBouton();
              }
            },
            getStyleCourriel: function () {
              return {
                color:
                  aInstance.courriel &&
                  !UtilitaireEmail_1.TUtilitaireEmail.estValide(
                    aInstance.courriel.trim(),
                  )
                    ? 'red'
                    : '',
              };
            },
            getDisabled: function () {
              return aInstance.stage !== 1;
            },
          },
          inputNom: {
            getValue: function () {
              return aInstance._nom;
            },
            setValue: function (aValue) {
              aInstance._nom = aValue;
            },
            getDisabled: function () {
              return aInstance.stage !== 1;
            },
          },
          inputPrenom: {
            getValue: function () {
              return aInstance._prenom;
            },
            setValue: function (aValue) {
              aInstance._prenom = aValue;
            },
            getDisabled: function () {
              return aInstance.stage !== 1;
            },
          },
          inputCode: {
            getValue: function () {
              return aInstance.code;
            },
            setValue: function (aValue) {
              aInstance.code = aValue;
            },
            keyupEnter: function () {
              aInstance.evenementBouton();
            },
            getStyle: function () {
              return {
                color:
                  aInstance.code &&
                  !UtilitaireRecupMDP_1.UtilitaireRecupMDP.estCodeValide(
                    aInstance.code,
                  )
                    ? 'red'
                    : '',
              };
            },
            getDisabled: function () {
              return aInstance.stage !== 2;
            },
          },
          iMDP: {
            getValue: function (aNr) {
              if (!!aInstance.mds) {
                return aInstance.mds[aNr] || '';
              }
              return '';
            },
            setValue: function (aNr, aValue) {
              if (!aInstance.mds) {
                aInstance.mds = {};
              }
              aInstance.mds[aNr] = aValue;
            },
            getDisabled: function () {
              return aInstance.stage !== 3;
            },
          },
          btn: {
            visible: function (etape) {
              return aInstance.stage === etape;
            },
            etape: {
              event: function () {
                aInstance.evenementBouton();
              },
              getDisabled: function (etape) {
                if (etape === 1) {
                  return (
                    !UtilitaireEmail_1.TUtilitaireEmail.estValide(
                      aInstance.courriel.trim(),
                    ) && !aInstance.optionsFenetre.estCreation
                  );
                } else if (etape === 2) {
                  return aInstance.code.trim() === '';
                } else if (etape === 3) {
                  return $('#' + aInstance.idMdp.escapeJQ()).val() === '';
                }
              },
            },
          },
          montrerMasquerMotDePasse: {
            getModel: {
              event: function (aId) {
                const lTarget = ObjetHtml_1.GHtml.getElement(aId);
                lTarget.type =
                  lTarget.type === 'password' ? 'text' : 'password';
                this.controleur.$refreshSelf();
              },
            },
            getClass(aId) {
              const lTarget = ObjetHtml_1.GHtml.getElement(aId);
              return (lTarget === null || lTarget === void 0
                ? void 0
                : lTarget.type) === 'password'
                ? 'icon_eye_open'
                : 'icon_eye_close';
            },
            getTitle(aId) {
              const lTarget = ObjetHtml_1.GHtml.getElement(aId);
              return (lTarget === null || lTarget === void 0
                ? void 0
                : lTarget.type) === 'password'
                ? 'Voir le mot de passe'
                : 'Masquer le mot de passe';
            },
          },
        });
      }
      composeContenu() {
        const lTraductionsRecupMDP =
          UtilitaireRecupMDP_1.UtilitaireRecupMDP.getTraductions(
            this.optionsFenetre.estCreation,
            this.options.avecRecupParParent,
          );
        return (0, tag_1.tag)(
          'div',
          { class: ['ObjetRecupIdMdp'] },
          (0, tag_1.tag)(
            'p',
            { class: ['message'] },
            lTraductionsRecupMDP.texteHeader,
          ),
          (0, tag_1.tag)(
            'div',
            { class: ['RecupIDMdp_Global_wrapper'] },
            this.composeEtape1(lTraductionsRecupMDP),
            this.composeEtape2(lTraductionsRecupMDP),
            this.composeEtape3(lTraductionsRecupMDP),
            (0, tag_1.tag)(
              'div',
              { class: ['lien-conteneur'] },
              LienPolitiqueMotDePasse_1.TLienPolitiqueMotDePasse.getLien(),
            ),
          ),
        );
      }
      composeEtape1(aTraductions) {
        const lLabel = `${aTraductions.texteStage} 1 : ${aTraductions.texteStage1} ${!this.optionsFenetre.estCreation ? `<span>${aTraductions.texteStage1_bis}</span>` : ''}`;
        const lBtn = (0, tag_1.tag)('ie-btnicon', {
          class: ['icon_envoyer', 'bt-activable', 'bt-big'],
          'ie-model': tag_1.tag.funcAttr('btn.etape', [1]),
          'ie-display': tag_1.tag.funcAttr('btn.visible', [1]),
          title: 'Valider',
        });
        return (0, tag_1.tag)(
          'div',
          { class: ['flex-contain', 'cols', 'etape_main'] },
          (0, tag_1.tag)('label', { for: this.idCourriel }, lLabel),
          (0, tag_1.tag)(
            'div',
            { class: ['etape_wrapper'] },
            (0, tag_1.tag)(
              'div',
              { 'ie-class': tag_1.tag.funcAttr('classEtape', [1]) },
              this.composeCoordonnees(aTraductions),
            ),
            (0, tag_1.tag)(
              'div',
              { class: ['etape_btn', 'fix-bloc', 'self-end'] },
              lBtn,
            ),
          ),
        );
      }
      composeCoordonnees(aTraductions) {
        if (this.optionsFenetre.estCreation) {
          return [
            (0, tag_1.tag)(
              'div',
              { class: ['input-field'] },
              (0, tag_1.tag)(
                'label',
                { for: this.idNom },
                aTraductions.texteNom,
              ),
              (0, tag_1.tag)('input', {
                id: this.idNom,
                name: 'nom',
                class: ['round-style'],
                type: 'text',
                'aria-required': 'true',
                'ie-model': 'inputNom',
                tabindex: '0',
              }),
            ),
            (0, tag_1.tag)(
              'div',
              { class: ['input-field'] },
              (0, tag_1.tag)(
                'label',
                { for: this.idPrenom },
                aTraductions.textePrenom,
              ),
              (0, tag_1.tag)('input', {
                id: this.idPrenom,
                name: 'prenom',
                class: ['round-style'],
                type: 'text',
                'aria-required': 'true',
                'ie-model': 'inputPrenom',
                tabindex: '0',
              }),
            ),
            (0, tag_1.tag)(
              'div',
              { class: ['input-field'] },
              (0, tag_1.tag)(
                'label',
                { for: this.idCourriel },
                aTraductions.texteEMail,
              ),
              (0, tag_1.tag)('input', {
                id: this.idCourriel,
                name: 'courriel',
                class: ['round-style'],
                type: 'email',
                'aria-required': 'true',
                'ie-model': 'inputMail',
                'ie-style': 'getStyleCourriel',
                tabindex: '0',
              }),
            ),
          ].join('');
        } else {
          return (0, tag_1.tag)(
            'div',
            { class: ['input-field'] },
            (0, tag_1.tag)('input', {
              id: this.idCourriel,
              name: 'courriel',
              class: ['round-style'],
              type: 'email',
              'aria-required': 'true',
              'ie-model': 'inputMail',
              'ie-style': 'getStyleCourriel',
              tabindex: '0',
            }),
          );
        }
      }
      composeEtape2(aTraductions) {
        const lLabel = `${aTraductions.texteStage} 2 : ${aTraductions.texteStage2}`;
        const lBtn = (0, tag_1.tag)('ie-btnicon', {
          class: ['icon_envoyer', 'bt-activable', 'bt-big'],
          'ie-model': tag_1.tag.funcAttr('btn.etape', [2]),
          'ie-display': tag_1.tag.funcAttr('btn.visible', [2]),
          title: 'Valider',
        });
        return (0, tag_1.tag)(
          'div',
          { class: ['flex-contain', 'cols', 'etape_main'] },
          (0, tag_1.tag)('label', { for: this.idCode }, lLabel),
          (0, tag_1.tag)(
            'div',
            { class: ['etape_wrapper'] },
            (0, tag_1.tag)(
              'div',
              { 'ie-class': tag_1.tag.funcAttr('classEtape', [2]) },
              (0, tag_1.tag)(
                'div',
                { class: ['input-field'] },
                (0, tag_1.tag)('input', {
                  id: this.idCode,
                  'ie-model': 'inputCode',
                  class: ['round-style'],
                  type: 'text',
                  disabled: 'disabled',
                  tabindex: '0',
                  'aria-required': 'true',
                }),
              ),
            ),
            (0, tag_1.tag)(
              'div',
              { class: ['etape_btn', 'fix-bloc', 'self-end'] },
              lBtn,
            ),
          ),
        );
      }
      composeEtape3(aTraductions) {
        const lLabel = `${aTraductions.texteStage} 3 : ${aTraductions.texteStage3}`;
        const lBtn = (0, tag_1.tag)('ie-btnicon', {
          class: ['icon_disquette_pleine', 'bt-activable', 'bt-big'],
          'ie-model': tag_1.tag.funcAttr('btn.etape', [3]),
          'ie-display': tag_1.tag.funcAttr('btn.visible', [3]),
          title: 'Valider',
        });
        return (0, tag_1.tag)(
          'div',
          { class: ['flex-contain', 'cols', 'etape_main'] },
          (0, tag_1.tag)('label', { id: `${this.Nom}_group_mdp` }, lLabel),
          (0, tag_1.tag)(
            'div',
            { class: ['etape_wrapper'] },
            (0, tag_1.tag)(
              'div',
              {
                'ie-class': tag_1.tag.funcAttr('classEtape', [3]),
                role: 'group',
                'aria-labelledby': `${this.Nom}_group_mdp`,
              },
              (0, tag_1.tag)(
                'div',
                { class: ['input-field', 'mdp'] },
                (0, tag_1.tag)(
                  'label',
                  { for: this.idMdp },
                  aTraductions.texteMdp,
                ),
                (0, tag_1.tag)(
                  'div',
                  { class: ['as-input', 'as-password'] },
                  (0, tag_1.tag)('input', {
                    id: this.idMdp,
                    'ie-model': 'iMDP(1)',
                    type: 'password',
                    disabled: 'disabled',
                    tabindex: '0',
                    'aria-required': 'true',
                    'auto-complete': 'new-password',
                  }),
                  (0, tag_1.tag)('ie-btnicon', {
                    class: ['icon_eye_open'],
                    'ie-model':
                      "montrerMasquerMotDePasse.getModel('" + this.idMdp + "')",
                    'ie-class':
                      "montrerMasquerMotDePasse.getClass('" + this.idMdp + "')",
                    'ie-title':
                      "montrerMasquerMotDePasse.getTitle('" + this.idMdp + "')",
                  }),
                ),
              ),
              (0, tag_1.tag)(
                'div',
                { class: ['input-field', 'mdp'] },
                (0, tag_1.tag)(
                  'label',
                  { for: this.idMdpbis },
                  aTraductions.texteConfirmation,
                ),
                (0, tag_1.tag)(
                  'div',
                  { class: ['as-input', 'as-password'] },
                  (0, tag_1.tag)('input', {
                    id: this.idMdpbis,
                    'ie-model': 'iMDP(2)',
                    type: 'password',
                    disabled: 'disabled',
                    tabindex: '0',
                    'aria-required': 'true',
                    'auto-complete': 'new-password',
                  }),
                  (0, tag_1.tag)('ie-btnicon', {
                    class: ['icon_eye_open'],
                    'ie-model':
                      "montrerMasquerMotDePasse.getModel('" +
                      this.idMdpbis +
                      "')",
                    'ie-class':
                      "montrerMasquerMotDePasse.getClass('" +
                      this.idMdpbis +
                      "')",
                    'ie-title':
                      "montrerMasquerMotDePasse.getTitle('" +
                      this.idMdpbis +
                      "')",
                  }),
                ),
              ),
            ),
            (0, tag_1.tag)(
              'div',
              { class: ['etape_btn', 'fix-bloc', 'self-end'] },
              lBtn,
            ),
          ),
          (0, tag_1.tag)('div', {
            id: this.idValidationMdp,
            class: ['validationMdp'],
          }),
        );
      }
      evenementBouton() {
        if (
          this.optionsFenetre.estCreation &&
          (this._nom.trim() === '' ||
            this._prenom.trim() === '' ||
            !UtilitaireEmail_1.TUtilitaireEmail.estValide(this.courriel.trim()))
        ) {
          const lMessage = [
            'Vous devez impérativement renseignent les informations suivantes :',
            '<br />',
          ];
          lMessage.push('<ul>');
          if (this._nom.trim() === '') {
            lMessage.push(
              '<li>',
              'Nom',
              '</li>',
            );
          }
          if (this._prenom.trim() === '') {
            lMessage.push(
              '<li>',
              'Prénom',
              '</li>',
            );
          }
          if (
            !UtilitaireEmail_1.TUtilitaireEmail.estValide(this.courriel.trim())
          ) {
            lMessage.push(
              '<li>',
              'E-mail valide',
              '</li>',
            );
          }
          lMessage.push('</ul>');
          GApplication.getMessage().afficher({
            titre: 'Validation impossible',
            message: lMessage.join(''),
          });
        } else {
          this.evenementBoutonApresVerification();
        }
      }
      async evenementBoutonApresVerification() {
        const lData = { etape: this.stage };
        let lEnvoyer = false;
        if (this.optionsFenetre.estCreation) {
          lData.estCreation = this.optionsFenetre.estCreation;
        }
        if (this.stage === 1) {
          lData.courriel = this.courriel.trim();
          lData.nom = this._nom.trim();
          lData.prenom = this._prenom.trim();
          lEnvoyer = true;
          const lTraduction = this.optionsFenetre.estCreation
            ? 'La création d'un compte sur l'Espace Inscription se fait en 3 étapes, vous ne devez en aucun cas fermer cette fenêtre tant que vous n'avez pas rempli les 3 étapes.'
            : 'La récupération de vos identifiant et mot de passe se fait en 3 étapes, vous ne devez en aucun cas fermer cette fenêtre tant que vous n'avez pas rempli les 3 étapes.';
          Invocateur_1.Invocateur.desabonner(
            Invocateur_1.ObjetInvocateur.events.autorisationRechargementPage,
          );
          Invocateur_1.Invocateur.abonner(
            Invocateur_1.ObjetInvocateur.events.autorisationRechargementPage,
            (aData) => {
              alert(lTraduction);
              aData.message = lTraduction;
            },
          );
        } else if (this.stage === 2) {
          if (
            !UtilitaireRecupMDP_1.UtilitaireRecupMDP.estCodeValide(this.code)
          ) {
            await GApplication.getMessage().afficher({
              message: 'Le code de sécurité saisie n'a pas un format valide',
            });
            $(`#${this.idCode.escapeJQ()}`).focus();
            return;
          } else {
            this.actionSurRecupererDonnees();
          }
        } else if (this.stage === 3) {
          const lMdp = $('#' + this.idMdp.escapeJQ()).val();
          const lMdpBis = $('#' + this.idMdpbis.escapeJQ()).val();
          if (!lMdp || lMdp !== lMdpBis) {
            GApplication.getMessage().afficher({
              message: 'La confirmation ne correspond pas au nouveau mot de passe !',
            });
            $('#' + this.idMdpbis.escapeJQ())
              .val('')
              .focus();
            return;
          }
          lData.codeSecurite = this.code;
          lData.mdp = forge.util.encodeUtf8(lMdp.trim());
          if (this.optionsFenetre.estCreation) {
            lData.courriel = this.courriel.trim();
            lData.nom = this._nom.trim();
            lData.prenom = this._prenom.trim();
          }
          lEnvoyer = true;
        } else {
          location.reload();
        }
        if (lEnvoyer) {
          this.actionSurRecupererDonnees(
            await new ObjetRequeteRecupIdMDP_1.ObjetRequeteRecupIdMDP(
              this,
            ).lancerRequete(lData),
          );
        }
      }
      surValidation() {
        if (this.stage === 1) {
          this.fermer();
        } else {
          location.reload();
        }
      }
      async actionSurRecupererDonnees(aResult) {
        if (
          aResult &&
          !aResult.requeteReussite &&
          (!aResult.JSONSignature || !aResult.JSONSignature.Erreur)
        ) {
          Invocateur_1.Invocateur.desabonner(
            Invocateur_1.ObjetInvocateur.events.autorisationRechargementPage,
          );
          await GApplication.getMessage().afficher({
            titre: aResult.messageErreur ? aResult.messageErreur.titre : '',
            message:
              aResult.messageErreur && aResult.messageErreur.message
                ? aResult.messageErreur.message
                : this.optionsFenetre.estCreation
                  ? 'Echec de la création du compte'
                  : 'Echec de la récupération du mot de passe',
          });
          location.reload();
          return;
        }
        this.erreurSMTP = aResult && aResult.erreurSMTP;
        const lTraductionsRecupMDP =
          UtilitaireRecupMDP_1.UtilitaireRecupMDP.getTraductions(
            this.optionsFenetre.estCreation,
            this.options.avecRecupParParent,
          );
        if (this.stage === 1) {
          if (aResult.mailEnvoye) {
            this.setBoutonActif(0, false);
            this.stage = 2;
            const lThis = this;
            await GApplication.getMessage().afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message: lTraductionsRecupMDP.texteMailOk,
            });
            $('#' + lThis.idCode.escapeJQ()).focus();
          } else if (aResult.nbrUtilisateurs >= 0) {
            if (this.optionsFenetre.estCreation) {
              let lMessage = lTraductionsRecupMDP.texteStage2_ko_multi;
              if (aResult.nbrUtilisateurs === 1) {
                lMessage =
                  '<span class="Gras">' +
                  lTraductionsRecupMDP.texteStage2_ko_creation +
                  '</span><br />' +
                  lTraductionsRecupMDP.texteStage2_ko_creation2 +
                  '<br />' +
                  lTraductionsRecupMDP.texteStage2_ko_creation3;
              }
              await GApplication.getMessage().afficher({
                titre: 'Création impossible',
                message: lMessage,
              });
              this.fermer();
            } else if (
              aResult.nbrUtilisateurs === 0 ||
              aResult.nbrUtilisateurs > 1
            ) {
              let lMessage = `<span class="Gras">${lTraductionsRecupMDP.texteStage2_ko_titre}</span><br /><br />`;
              if (aResult.nbrUtilisateurs === 0) {
                lMessage += `${lTraductionsRecupMDP.texteStage2_ko_zero}<br />`;
                if (this.options.avecRecupParParent) {
                  lMessage += lTraductionsRecupMDP.texteStage2_ko_parent;
                } else {
                  lMessage += lTraductionsRecupMDP.texteStage2_ko_zero2;
                }
              } else {
                lMessage += `${lTraductionsRecupMDP.texteStage2_ko_multi}<br />`;
                if (this.options.avecRecupParParent) {
                  lMessage += lTraductionsRecupMDP.texteStage2_ko_parent;
                } else {
                  lMessage += lTraductionsRecupMDP.texteStage2_ko_multi2;
                }
              }
              await GApplication.getMessage().afficher({ message: lMessage });
              $('#' + this.idCourriel.escapeJQ()).focus();
            }
          } else {
            await GApplication.getMessage().afficher({
              titre: aResult.messageErreur ? aResult.messageErreur.titre : '',
              message: aResult.messageErreur
                ? aResult.messageErreur.message
                : 'Les paramètres permettant la récupération des mots de passe oubliés ne sont pas correctement définis.\nVeuillez contacter l'établissement.',
            });
            Invocateur_1.Invocateur.desabonner(
              Invocateur_1.ObjetInvocateur.events.autorisationRechargementPage,
            );
            this.fermer();
          }
        } else if (this.stage === 2) {
          this.stage = 3;
          if (GEtatUtilisateur.reglesSaisieMotDePasse.init) {
            $('#' + this.idValidationMdp.escapeJQ()).html(
              ValidationMotDePasse_1.ValidationMotDePasse.construire(
                GEtatUtilisateur.reglesSaisieMotDePasse,
                null,
                { avecEspace: false },
              ),
            );
          }
          setTimeout(() => {
            $('#' + this.idMdp.escapeJQ()).focus();
          }, 400);
        } else if (this.stage === 3) {
          if (aResult.erreurMDP) {
            const lJMdp = $('#' + this.idMdp.escapeJQ());
            await GApplication.getMessage().afficher({
              titre: 'Echec de la modification',
              message: ValidationMotDePasse_1.ValidationMotDePasse.construire(
                GEtatUtilisateur.reglesSaisieMotDePasse,
                aResult.erreurMDP,
              ),
            });
            lJMdp.focus();
            $('#' + this.idValidationMdp.escapeJQ()).html(
              ValidationMotDePasse_1.ValidationMotDePasse.construire(
                GEtatUtilisateur.reglesSaisieMotDePasse,
                aResult.erreurMDP,
                { avecEspace: false },
              ),
            );
            $('#' + this.idMdp.escapeJQ()).val('');
            $('#' + this.idMdpbis.escapeJQ()).val('');
          } else {
            this.stage = -1;
            if (!aResult.estEchec) {
              this.setOptionsFenetre({
                listeBoutons: [lTraductionsRecupMDP.texteTerminer],
              });
              this.setBoutonActif(0, true);
              Invocateur_1.Invocateur.desabonner(
                Invocateur_1.ObjetInvocateur.events
                  .autorisationRechargementPage,
              );
              if (this.optionsFenetre.estCreation) {
                await GApplication.getMessage().afficher({
                  titre: lTraductionsRecupMDP.texteStage3_ok_creation,
                  message: lTraductionsRecupMDP.texteStage3_ok_creationbis,
                });
                this.fermer();
                this.callback.appel(this.stage, {
                  identifiant: this.courriel.trim(),
                });
              } else {
                await GApplication.getMessage().afficher({
                  message: lTraductionsRecupMDP.texteStage3_ok,
                });
                location.reload();
              }
            } else {
              Invocateur_1.Invocateur.desabonner(
                Invocateur_1.ObjetInvocateur.events
                  .autorisationRechargementPage,
              );
              await GApplication.getMessage().afficher({
                titre: aResult.messageErreur ? aResult.messageErreur.titre : '',
                message:
                  aResult.messageErreur && aResult.messageErreur.message
                    ? aResult.messageErreur.message
                    : 'Echec de la récupération du mot de passe',
              });
              location.reload();
            }
          }
        }
      }
      recupererDonnees() {
        super.recupererDonnees();
        $('#' + this.idCourriel.escapeJQ()).focus();
        $('#' + this.idMdp.escapeJQ() + ', #' + this.idMdpbis.escapeJQ()).on(
          'keyup blur',
          { aObjet: this },
          this.estMdpValide,
        );
      }
      async afficher() {
        if (this.erreurSMTP) {
          GApplication.getMessage().afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
            message: 'Les paramètres permettant la récupération des mots de passe oubliés ne sont pas correctement définis.\nVeuillez contacter l'établissement.',
          });
          Invocateur_1.Invocateur.desabonner(
            Invocateur_1.ObjetInvocateur.events.autorisationRechargementPage,
          );
          this.fermer();
        } else {
          super.afficher();
        }
      }
      estMdpValide(event) {
        const lMdp = $('#' + event.data.aObjet.idMdp.escapeJQ()).val();
        const lIsOkMdp = lMdp.trim().length > 0;
        if (
          lIsOkMdp &&
          event.type === 'keyup' &&
          event.which === ToucheClavier_1.ToucheClavier.RetourChariot
        ) {
          event.data.aObjet.evenementBouton();
        }
      }
    }
    exports.ObjetFenetreRecupIdMDP = ObjetFenetreRecupIdMDP;
  },
  fn: 'objetfenetre_recupidmdp.js',
});