IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireRecupMDP = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetTraduction_1 = require('ObjetTraduction');
    exports.UtilitaireRecupMDP = {
      getTraductions: function (aEstCreation, aAvecResetParParent) {
        return {
          texteHeader: aEstCreation
            ? 'La création d'un compte sur l'Espace Inscription se fait en 3 étapes, vous ne devez en aucun cas fermer cette fenêtre tant que vous n'avez pas rempli les 3 étapes.'
            : 'La récupération de vos identifiant et mot de passe se fait en 3 étapes, vous ne devez en aucun cas fermer cette fenêtre tant que vous n'avez pas rempli les 3 étapes.',
          texteStage1: aEstCreation
            ? 'Saisissez vos coordonnées'
            : 'Saisissez votre adresse e-mail',
          texteStage1_bis: '(celle que vous avez donnée à l'établissement)',
          texteStage2: 'Saisissez votre code de sécurité reçu par e-mail',
          texteStage3: aEstCreation
            ? 'Définissez votre mot de passe'
            : 'Définissez votre nouveau mot de passe',
          texteStage: 'Etape',
          texteStage2_ok: 'Nous vous avons envoyé un e-mail avec votre identifiant et un code de sécurité valable pendant 15 minutes et uniquement sur cette page.',
          texteStage2_ko_titre: 'Récupération impossible',
          texteStage2_ko_multi: 'L'adresse e-mail renseignée est associée à plusieurs comptes.',
          texteStage2_ko_multi2: 'Contactez le responsable de votre établissement afin qu'il réinitialise votre mot de passe.',
          texteStage2_ko_zero: 'L'adresse e-mail renseignée n'a pas été trouvée.',
          texteStage2_ko_zero2: 'Contactez le responsable de votre établissement afin d'obtenir vos identifiants.',
          texteStage2_ko_parent: aAvecResetParParent
            ? 'Le mot de passe nécessaire à la connexion sur l'Espace Élèves peut être modifié par les parents (Espace Parents > Informations personnelles > Compte enfant).'
            : '',
          texteStage2_ko_creation: 'Un compte existe déjà avec cette adresse e-mail.',
          texteStage2_ko_creation2: 'Pour vous y connecter veuillez cliquer sur le bouton "Vous avez déjà une inscription en cours".',
          texteStage2_ko_creation3: 'Si vous avez oublié le mot de passe associé à ce compte, cliquez sur "Récupérer votre mot de passe" dans la fenêtre de connexion.',
          texteStage3_ok: 'Votre mot de passe a été mis à jour',
          texteStage3_ok_creation: 'Votre compte a bien été créé.',
          texteStage3_ok_creationbis: 'Vous pouvez vous connecter à l'Espace Inscription en utilisant votre adresse e-mail comme identifiant.',
          texteStage3_ko: 'Une erreur s'est produite.\nContactez le responsable de votre établissement afin qu'il réinitialise votre mot de passe.',
          texteMailOk: 'Le code de sécurité, indispensable à l'étape 2, a été envoyé à l'adresse mail saisie ci-dessus.',
          texteMdp: 'Mot de passe :',
          texteConfirmation: 'Confirmation :',
          texteTerminer: 'Terminer',
          texteNom: 'Nom',
          textePrenom: 'Prénom',
          texteEMail: 'E-mail',
          texteEMailValide: 'E-mail valide',
        };
      },
      estCodeValide: function (aCode) {
        let lIsOkCode = false;
        if (
          aCode &&
          RegExp(
            '[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}',
          ).test(aCode)
        ) {
          const lTabAlpha =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          let lTotal = 0;
          for (const lChar of aCode) {
            if (
              lChar !== '-' &&
              !MethodesObjet_1.MethodesObjet.isFunction(lChar)
            ) {
              lTotal += lTabAlpha.indexOf(lChar) + 1;
            }
          }
          if (lTotal % 62 === 0) {
            lIsOkCode = true;
          }
        }
        return lIsOkCode;
      },
    };
  },
  fn: 'utilitairerecupmdp.js',
});