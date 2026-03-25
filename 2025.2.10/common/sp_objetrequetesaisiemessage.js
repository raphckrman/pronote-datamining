IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteSaisieMessage = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const Invocateur_1 = require('Invocateur');
    const CollectionRequetes_1 = require('CollectionRequetes');
    const TypeChaineHtml_1 = require('TypeChaineHtml');
    const TypeGenreDiscussion_1 = require('TypeGenreDiscussion');
    const Toast_1 = require('Toast');
    const ObjetTraduction_1 = require('ObjetTraduction');
    class ObjetRequeteSaisieMessage extends ObjetRequeteJSON_1.ObjetRequeteSaisie {
      async lancerRequete(aParam) {
        const lParam = Object.assign({ avecHtml: false }, aParam);
        this.JSON.commande = aParam.commande;
        switch (aParam.commande) {
          case 'viderCorbeille':
          case 'recupererMessageDesactivation':
            break;
          case 'signalement':
          case 'supprimerMessageGraphe':
            this.JSON.message = aParam.message;
            break;
          case 'purger':
            this.JSON.listeMessagesPurge =
              aParam.listeMessagesPurge.setSerialisateurJSON({
                ignorerEtatsElements: true,
              });
            this.JSON.nbMaxMessages = aParam.nbMaxMessages;
            break;
          case 'corbeille':
            this._serialiserlistePossessions(aParam.listePossessionsMessages);
            break;
          case 'entrerSortirConversation':
            this.JSON.possessionMessage = aParam.possessionMessage;
            this.JSON.entrer = aParam.entrer;
            break;
          case 'entrerSortirDiscussion':
            this.JSON.possessionMessage = aParam.possessionMessage;
            this.JSON.estSorti = aParam.estSorti;
            break;
          case 'modificationObjetDiscussion':
            this.JSON.possessionMessage = aParam.possessionMessage;
            this.JSON.objet = aParam.objet;
            break;
          case 'signalementSuppression':
          case 'suppression':
          case 'restauration':
          case 'pourLu':
          case 'archive':
          case 'pourOuvrirFermer':
            this.JSON.lu = aParam.lu;
            this.JSON.archiver = aParam.archiver;
            this.JSON.ouvrir = aParam.ouvrir;
            this._serialiserlistePossessions(
              lParam.message.listePossessionsMessages,
            );
            break;
          default:
            if (aParam.commande === 'brouillon') {
              this.JSON.brouillon = lParam.brouillon;
              if (lParam.brouillon && lParam.brouillon.ignorerPJ) {
                this.JSON.ignorerPJBrouillon = true;
              }
              this._serialiserTransferts(aParam);
            } else if (aParam.commande === 'transfert') {
              this._serialiserTransferts(aParam);
            } else {
              this.JSON.bouton = lParam.bouton;
              this.JSON.estCreationCarnetLiaison =
                lParam.estCreationCarnetLiaison;
              this.JSON.estCreationDossierDecrochage =
                lParam.estCreationDossierDecrochage;
              this.JSON.estCreationRechercheDeStage =
                lParam.estCreationRechercheDeStage;
              this.JSON.genreDiscussion = lParam.genreDiscussion;
              if (lParam.estCreationCarnetLiaison) {
                this.JSON.eleveCarnetLiaison = lParam.eleveCarnetLiaison;
              }
              if (lParam.estCreationDossierDecrochage) {
                this.JSON.dossier = lParam.dossier;
              }
              if (lParam.estCreationRechercheDeStage) {
                this.JSON.rechercheDeStage = lParam.rechercheDeStage;
              }
              if (
                lParam.genreDiscussion ===
                TypeGenreDiscussion_1.TypeGenreDiscussion.GD_Alerte
              ) {
                this.JSON.modeleAlerte = lParam.modeleAlerte;
                this.JSON.estExercice = lParam.estExercice;
              }
              if (lParam.brouillon && lParam.brouillon.existeNumero()) {
                this.JSON.brouillon = lParam.brouillon;
                if (lParam.brouillon.ignorerPJ) {
                  this.JSON.ignorerPJBrouillon = true;
                }
              }
            }
            this.JSON.messagePourReponse = lParam.messagePourReponse;
            this.JSON.objet = lParam.objet;
            if (lParam.avecHtml) {
              this.JSON.contenu = new TypeChaineHtml_1.TypeChaineHtml(
                lParam.contenu,
              );
            } else {
              this.JSON.contenu = lParam.contenu;
            }
            this.JSON.listeDestinataires = lParam.listeDestinataires;
            if (lParam.listeEtiquettes) {
              this.JSON.listeEtiquettes =
                lParam.listeEtiquettes.setSerialisateurJSON({
                  ignorerEtatsElements: true,
                });
            }
            if (lParam.listeFichiers) {
              this.JSON.listeFichiers =
                lParam.listeFichiers.setSerialisateurJSON({
                  methodeSerialisation: this._surValidationFichier,
                });
            }
        }
        Invocateur_1.Invocateur.evenement(
          'requeteSaisieMessage',
          false,
          this.callbackReussite.pere,
        );
        const lParams = await this.appelAsynchrone();
        return this._afficherMessagesSaisie(lParams);
      }
      actionApresRequete(aGenreReponse) {
        super.actionApresRequete(aGenreReponse);
        if (
          aGenreReponse === ObjetRequeteJSON_1.EGenreReponseSaisie.succes &&
          this.JSON
        ) {
          const lMessage = this._getMessageToast();
          if (lMessage) {
            Toast_1.Toast.afficher({
              type: Toast_1.ETypeToast.succes,
              msg: lMessage,
            });
          }
        }
      }
      apresReponseRequete() {
        Invocateur_1.Invocateur.evenement(
          'requeteSaisieMessage',
          true,
          this.callbackReussite.pere,
          this.JSONRapportSaisie,
        );
      }
      _serialiserlistePossessions(aListe) {
        aListe.setSerialisateurJSON({
          ignorerEtatsElements: true,
          nePasTrierPourValidation: true,
        });
        this.JSON.listePossessionsMessages = aListe;
      }
      _getMessageToast() {
        switch (this.JSON.commande) {
          case 'corbeille':
            return 'Mise à la corbeille effectuée';
          case 'viderCorbeille':
          case 'suppression':
            return 'Suppression définitive effectuée';
          case 'archive':
            return this.JSON.archiver
              ? 'Archivage effectué'
              : 'Désarchivage effectué';
          case 'pourOuvrirFermer':
            return this.JSON.ouvrir
              ? 'Réouverture effectuée'
              : 'Fermeture effectuée';
          case 'signalement':
            return 'Signalement effectué';
          case 'signalementSuppression':
            return 'Demande de suppression effectuée';
        }
        if (this.JSONRapportSaisie && this.JSONRapportSaisie.messageToast) {
          return this.JSONRapportSaisie.messageToast;
        }
        return '';
      }
      async _afficherMessagesSaisie(aParams) {
        if (aParams.JSONRapportSaisie && aParams.JSONRapportSaisie.EDTMessage) {
          await GApplication.getMessage().afficher({
            message: aParams.JSONRapportSaisie.EDTMessage,
          });
        }
        if (
          aParams.JSONRapportSaisie &&
          aParams.JSONRapportSaisie.listeMessagesDesactivation &&
          aParams.JSONRapportSaisie.listeMessagesDesactivation.length > 0
        ) {
          const H = [];
          aParams.JSONRapportSaisie.listeMessagesDesactivation.forEach(
            (aMess) => {
              H.push(
                '<div style="font-weight:600">' + aMess.titre + '</div>',
                '<div style="padding: 5px; font-style: italic">«' +
                  aMess.message +
                  '»</div>',
              );
            },
          );
          await GApplication.getMessage().afficher({ message: H.join('<br>') });
        }
        if (
          aParams.JSONRapportSaisie &&
          aParams.JSONRapportSaisie.messageRefusDest
        ) {
          const lStrMessage = IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str(
              'div',
              null,
              aParams.JSONRapportSaisie.messageRefusDest.titre,
            ),
            IE.jsx.str('br', null),
            IE.jsx.str(
              'div',
              null,
              aParams.JSONRapportSaisie.messageRefusDest.message,
            ),
          );
          await GApplication.getMessage().afficher({ message: lStrMessage });
        }
        return aParams;
      }
      _serialiserTransferts(aParam) {
        this.JSON.listeMessagesTransfert = aParam.listeMessagesTransfert;
        if (this.JSON.listeMessagesTransfert) {
          this.JSON.listeMessagesTransfert.setSerialisateurJSON({
            ignorerEtatsElements: true,
            nePasTrierPourValidation: true,
          });
        }
      }
      _surValidationFichier(aElement, aJSON) {
        const lIdFichier =
          aElement.idFichier !== undefined
            ? aElement.idFichier
            : aElement.Fichier !== undefined
              ? aElement.Fichier.idFichier
              : null;
        if (lIdFichier !== null) {
          aJSON.idFichier = '' + lIdFichier;
        }
        aJSON.nomFichier = aElement.nomFichier;
        aJSON.url = aElement.url;
      }
    }
    exports.ObjetRequeteSaisieMessage = ObjetRequeteSaisieMessage;
    CollectionRequetes_1.Requetes.inscrire(
      'SaisieMessage',
      ObjetRequeteSaisieMessage,
    );
  },
  fn: 'objetrequetesaisiemessage.js',
});