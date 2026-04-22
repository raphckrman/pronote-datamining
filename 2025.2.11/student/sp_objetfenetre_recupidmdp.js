IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetreRecupIdMDP = void 0;
    require('ObjetFenetreRecupIdMdp.css');
    const Invocateur_1 = require('Invocateur');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const LienPolitiqueMotDePasse_1 = require('LienPolitiqueMotDePasse');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ToucheClavier_1 = require('ToucheClavier');
    const ValidationMotDePasse_1 = require('ValidationMotDePasse');
    const UtilitaireEmail_1 = require('UtilitaireEmail');
    const UtilitaireRecupMDP_1 = require('UtilitaireRecupMDP');
    const ObjetRequeteRecupIdMDP_1 = require('ObjetRequeteRecupIdMDP');
    const ObjetHtml_1 = require('ObjetHtml');
    const AccessApp_1 = require('AccessApp');
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
      jsxGetClassEtape(aNumeroEtape) {
        const lClass = ['etape', 'fluid-bloc'];
        if (aNumeroEtape !== this.stage) {
          lClass.push('is-disabled');
        }
        return lClass.join(' ');
      }
      jsxGetStyleSaisieEmail() {
        return {
          color:
            this.courriel &&
            !UtilitaireEmail_1.TUtilitaireEmail.estValide(this.courriel.trim())
              ? 'red'
              : '',
        };
      }
      jsxModeleInputMail() {
        return {
          getValue: () => {
            return this.courriel;
          },
          setValue: (aValue) => {
            this.courriel = aValue;
          },
          keyupEnter: () => {
            if (
              UtilitaireEmail_1.TUtilitaireEmail.estValide(this.courriel.trim())
            ) {
              this.evenementBouton();
            }
          },
          getDisabled: () => {
            return this.stage !== 1;
          },
        };
      }
      jsxModeleInputNom() {
        return {
          getValue: () => {
            return this._nom;
          },
          setValue: (aValue) => {
            this._nom = aValue;
          },
          getDisabled: () => {
            return this.stage !== 1;
          },
        };
      }
      jsxModeleInputPrenom() {
        return {
          getValue: () => {
            return this._prenom;
          },
          setValue: (aValue) => {
            this._prenom = aValue;
          },
          getDisabled: () => {
            return this.stage !== 1;
          },
        };
      }
      jsxModeleInputCode() {
        return {
          getValue: () => {
            return this.code;
          },
          setValue: (aValue) => {
            this.code = aValue;
          },
          keyupEnter: () => {
            this.evenementBouton();
          },
          getDisabled: () => {
            return this.stage !== 2;
          },
        };
      }
      jsxModeleInputMDP(aNumeroMDP) {
        return {
          getValue: () => {
            if (!!this.mds) {
              return this.mds[aNumeroMDP] || '';
            }
            return '';
          },
          setValue: (aValue) => {
            if (!this.mds) {
              this.mds = {};
            }
            this.mds[aNumeroMDP] = aValue;
          },
          getDisabled: () => {
            return this.stage !== 3;
          },
        };
      }
      jsxDisplayBoutonValider(aNumeroEtape) {
        return this.stage === aNumeroEtape;
      }
      jsxModeleBoutonValider(aNumeroEtape) {
        return {
          event: () => {
            this.evenementBouton();
          },
          getDisabled: () => {
            if (aNumeroEtape === 1) {
              return (
                !UtilitaireEmail_1.TUtilitaireEmail.estValide(
                  this.courriel.trim(),
                ) && !this.optionsFenetre.estCreation
              );
            } else if (aNumeroEtape === 2) {
              return this.code.trim() === '';
            } else if (aNumeroEtape === 3) {
              return $('#' + this.idMdp.escapeJQ()).val() === '';
            }
          },
        };
      }
      jsxModeleBoutonMontrerMasquerMDP(aId) {
        return {
          event: () => {
            const lTarget = ObjetHtml_1.GHtml.getElement(aId);
            lTarget.type = lTarget.type === 'password' ? 'text' : 'password';
            this.$refresh();
          },
          getTitle: () => {
            const lTarget = ObjetHtml_1.GHtml.getElement(aId);
            return (lTarget === null || lTarget === void 0
              ? void 0
              : lTarget.type) === 'password'
              ? 'Voir le mot de passe'
              : 'Masquer le mot de passe';
          },
        };
      }
      jsxGetClassMontrerMasquerMDP(aId) {
        const lTarget = ObjetHtml_1.GHtml.getElement(aId);
        return (lTarget === null || lTarget === void 0
          ? void 0
          : lTarget.type) === 'password'
          ? 'icon_eye_open'
          : 'icon_eye_close';
      }
      composeContenu() {
        const lTraductionsRecupMDP =
          UtilitaireRecupMDP_1.UtilitaireRecupMDP.getTraductions(
            this.optionsFenetre.estCreation,
            this.options.avecRecupParParent,
          );
        return IE.jsx.str(
          'div',
          { class: 'ObjetRecupIdMdp' },
          IE.jsx.str(
            'p',
            { class: 'message' },
            lTraductionsRecupMDP.texteHeader,
          ),
          IE.jsx.str(
            'div',
            { class: 'RecupIDMdp_Global_wrapper' },
            this.composeEtape1(lTraductionsRecupMDP),
            this.composeEtape2(lTraductionsRecupMDP),
            this.composeEtape3(lTraductionsRecupMDP),
            IE.jsx.str(
              'div',
              { class: 'lien-conteneur' },
              LienPolitiqueMotDePasse_1.TLienPolitiqueMotDePasse.getLien(),
            ),
          ),
        );
      }
      composeEtape1(aTraductions) {
        const lLabel = `${aTraductions.texteStage} 1 : ${aTraductions.texteStage1} ${!this.optionsFenetre.estCreation ? `<span>${aTraductions.texteStage1_bis}</span>` : ''}`;
        const lBtn = IE.jsx.str('ie-btnicon', {
          class: 'icon_envoyer bt-activable bt-big',
          'ie-model': this.jsxModeleBoutonValider.bind(this, 1),
          'ie-display': this.jsxDisplayBoutonValider.bind(this, 1),
          title: 'Valider',
        });
        return IE.jsx.str(
          'div',
          { class: 'flex-contain cols etape_main' },
          IE.jsx.str('label', { for: this.idCourriel }, lLabel),
          IE.jsx.str(
            'div',
            { class: 'etape_wrapper' },
            IE.jsx.str(
              'div',
              { 'ie-class': this.jsxGetClassEtape.bind(this, 1) },
              this.composeCoordonnees(aTraductions),
            ),
            IE.jsx.str('div', { class: 'etape_btn fix-bloc self-end' }, lBtn),
          ),
        );
      }
      composeCoordonnees(aTraductions) {
        if (this.optionsFenetre.estCreation) {
          return IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str(
              'div',
              { class: 'input-field' },
              IE.jsx.str('label', { for: this.idNom }, aTraductions.texteNom),
              IE.jsx.str('input', {
                id: this.idNom,
                type: 'text',
                name: 'nom',
                'aria-required': 'true',
                'ie-model': this.jsxModeleInputNom.bind(this),
                tabindex: '0',
              }),
            ),
            IE.jsx.str(
              'div',
              { class: 'input-field' },
              IE.jsx.str(
                'label',
                { for: this.idPrenom },
                aTraductions.textePrenom,
              ),
              IE.jsx.str('input', {
                id: this.idPrenom,
                type: 'text',
                name: 'prenom',
                'aria-required': 'true',
                'ie-model': this.jsxModeleInputPrenom.bind(this),
                tabindex: '0',
              }),
            ),
            IE.jsx.str(
              'div',
              { class: 'input-field' },
              IE.jsx.str(
                'label',
                { for: this.idCourriel },
                aTraductions.texteEMail,
              ),
              IE.jsx.str('input', {
                id: this.idCourriel,
                type: 'email',
                name: 'courriel',
                'aria-required': 'true',
                'ie-model': this.jsxModeleInputMail.bind(this),
                'aria-label': aTraductions.texteEMail,
                'ie-style': this.jsxGetStyleSaisieEmail.bind(this),
                tabindex: '0',
              }),
            ),
          );
        } else {
          return IE.jsx.str(
            'div',
            { class: 'input-field' },
            IE.jsx.str('input', {
              type: 'email',
              id: this.idCourriel,
              name: 'courriel',
              'aria-required': 'true',
              'ie-model': this.jsxModeleInputMail.bind(this),
              'ie-style': this.jsxGetStyleSaisieEmail.bind(this),
              tabindex: '0',
            }),
          );
        }
      }
      composeEtape2(aTraductions) {
        const lLabel = `${aTraductions.texteStage} 2 : ${aTraductions.texteStage2}`;
        const lBtn = IE.jsx.str('ie-btnicon', {
          class: 'icon_envoyer bt-activable bt-big',
          'ie-model': this.jsxModeleBoutonValider.bind(this, 2),
          'ie-display': this.jsxDisplayBoutonValider.bind(this, 2),
          title: 'Valider',
        });
        return IE.jsx.str(
          'div',
          { class: 'flex-contain cols etape_main' },
          IE.jsx.str('label', { for: this.idCode }, lLabel),
          IE.jsx.str(
            'div',
            { class: 'etape_wrapper' },
            IE.jsx.str(
              'div',
              { 'ie-class': this.jsxGetClassEtape.bind(this, 2) },
              IE.jsx.str(
                'div',
                { class: 'input-field' },
                IE.jsx.str('input', {
                  type: 'text',
                  id: this.idCode,
                  'ie-model': this.jsxModeleInputCode.bind(this),
                  disabled: 'disabled',
                  tabindex: '0',
                  'aria-required': 'true',
                }),
              ),
            ),
            IE.jsx.str('div', { class: 'etape_btn fix-bloc self-end' }, lBtn),
          ),
        );
      }
      composeEtape3(aTraductions) {
        const lIdLabel = this.Nom + '_group_mdp';
        const lLabel = `${aTraductions.texteStage} 3 : ${aTraductions.texteStage3}`;
        const lBtn = IE.jsx.str('ie-btnicon', {
          class: 'icon_disquette_pleine bt-activable bt-big',
          'ie-model': this.jsxModeleBoutonValider.bind(this, 3),
          'ie-display': this.jsxDisplayBoutonValider.bind(this, 3),
          title: 'Valider',
        });
        return IE.jsx.str(
          'div',
          { class: 'flex-contain cols etape_main' },
          IE.jsx.str('label', { id: lIdLabel }, lLabel),
          IE.jsx.str(
            'div',
            { class: 'etape_wrapper' },
            IE.jsx.str(
              'div',
              {
                'ie-class': this.jsxGetClassEtape.bind(this, 3),
                role: 'group',
                'aria-labelledby': lIdLabel,
              },
              IE.jsx.str(
                'div',
                { class: 'input-field mdp' },
                IE.jsx.str('label', { for: this.idMdp }, aTraductions.texteMdp),
                IE.jsx.str(
                  'div',
                  { class: 'as-input as-password' },
                  IE.jsx.str('input', {
                    type: 'password',
                    id: this.idMdp,
                    'ie-model': this.jsxModeleInputMDP.bind(this, 1),
                    disabled: 'disabled',
                    tabindex: '0',
                    'aria-required': 'true',
                    autocomplete: 'new-password',
                  }),
                  IE.jsx.str('ie-btnicon', {
                    class: 'icon_eye_open',
                    'ie-model': this.jsxModeleBoutonMontrerMasquerMDP.bind(
                      this,
                      this.idMdp,
                    ),
                    'ie-class': this.jsxGetClassMontrerMasquerMDP.bind(
                      this,
                      this.idMdp,
                    ),
                  }),
                ),
              ),
              IE.jsx.str(
                'div',
                { class: 'input-field mdp' },
                IE.jsx.str(
                  'label',
                  { for: this.idMdpbis },
                  aTraductions.texteConfirmation,
                ),
                IE.jsx.str(
                  'div',
                  { class: 'as-input as-password' },
                  IE.jsx.str('input', {
                    type: 'password',
                    id: this.idMdpbis,
                    'ie-model': this.jsxModeleInputMDP.bind(this, 2),
                    disabled: 'disabled',
                    tabindex: '0',
                    'aria-required': 'true',
                    autocomplete: 'new-password',
                  }),
                  IE.jsx.str('ie-btnicon', {
                    class: 'icon_eye_open',
                    'ie-model': this.jsxModeleBoutonMontrerMasquerMDP.bind(
                      this,
                      this.idMdpbis,
                    ),
                    'ie-class': this.jsxGetClassMontrerMasquerMDP.bind(
                      this,
                      this.idMdpbis,
                    ),
                  }),
                ),
              ),
            ),
            IE.jsx.str('div', { class: 'etape_btn fix-bloc self-end' }, lBtn),
          ),
          IE.jsx.str('div', {
            id: this.idValidationMdp,
            class: 'validationMdp',
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
          (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
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
            await (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
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
            (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
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
          await (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
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
            await (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
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
              await (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({
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
              await (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({ message: lMessage });
              $('#' + this.idCourriel.escapeJQ()).focus();
            }
          } else {
            await (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
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
            await (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
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
                await (0, AccessApp_1.getApp)()
                  .getMessage()
                  .afficher({
                    titre: lTraductionsRecupMDP.texteStage3_ok_creation,
                    message: lTraductionsRecupMDP.texteStage3_ok_creationbis,
                  });
                this.fermer();
                this.callback.appel(this.stage, {
                  identifiant: this.courriel.trim(),
                });
              } else {
                await (0, AccessApp_1.getApp)()
                  .getMessage()
                  .afficher({ message: lTraductionsRecupMDP.texteStage3_ok });
                location.reload();
              }
            } else {
              Invocateur_1.Invocateur.desabonner(
                Invocateur_1.ObjetInvocateur.events
                  .autorisationRechargementPage,
              );
              await (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({
                  titre: aResult.messageErreur
                    ? aResult.messageErreur.titre
                    : '',
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
          (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
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