IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetRequeteUploadFile = void 0;
    const IEHtml = require('IEHtml');
    const Invocateur_1 = require('Invocateur');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TypeEtatUpload_1 = require('TypeEtatUpload');
    const TypeEtatRequeteAjax_1 = require('TypeEtatRequeteAjax');
    const MethodesObjet_1 = require('MethodesObjet');
    const UploadFileAjax_1 = require('UploadFileAjax');
    const AccessApp_1 = require('AccessApp');
    const TypesRequeteJSON_1 = require('TypesRequeteJSON');
    let uIdFichier = 0;
    class ObjetRequeteUploadFile {
      constructor(aParametres) {
        this.estUneRequete = false;
        this.estUploadFile = true;
        this.etat = TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.initial;
        this.donnees = Object.assign(
          {
            listeFichiers: null,
            maxChunkSize: 100 * 1024,
            messageEchec: 'Echec lors de l'envoi du fichier',
            callbackDone: null,
            callback: null,
            callbackEach: null,
            getFormData: null,
            getUrl: null,
            callbackInterrupt: null,
            moduleMD5: null,
          },
          aParametres,
        );
        this.progression = {
          requete: this,
          listeFichiersEnAttente: this.donnees.listeFichiers.getListeElements(),
          nbReussi: 0,
          error: null,
        };
      }
      estVide() {
        return (
          !this.donnees ||
          !this.donnees.listeFichiers ||
          !this.donnees.listeFichiers.count ||
          this.donnees.listeFichiers.count() === 0
        );
      }
      envoiRequete(aParams) {
        this.etat = TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.envoye;
        Object.assign(this.donnees, aParams);
        const lSelf = this;
        let lParams = null;
        if (this.donnees.callbackInterrupt) {
          lParams = {
            htmlPied:
              '<ie-bouton ie-model="btnInterrupt">' +
              'Annuler l'envoi' +
              '</ie-bouton>',
            controleur: {
              btnInterrupt: {
                event: function () {
                  if (lSelf.progression.funcAbortRequete) {
                    lSelf.progression.funcAbortRequete();
                  }
                },
                getDisabled: function () {
                  return !lSelf.progression.funcAbortRequete;
                },
              },
            },
          };
        }
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.eventIOAjax,
          {
            emission: true,
            upload: true,
            nombreFichiers: this.donnees.listeFichiers.getNbrElementsExistes(),
            init: true,
            params: lParams,
          },
        );
        this._sendNextFile();
      }
      enAttente() {
        return (
          this.etat ===
            TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.preparationEnvoi ||
          this.etat === TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.envoye ||
          this.etat === TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.recu
        );
      }
      _eventAjaxIOProgression(aParams) {
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.eventIOAjax,
          {
            emission: true,
            upload: true,
            message:
              aParams.message ||
              'Transfert des pièces jointes',
            nombreFichiers: this.donnees.listeFichiers.getNbrElementsExistes(),
            ignorerBlocageClavier: true,
            progress: {
              personnalise: true,
              actualFile: this.progression.nbReussi + 1,
              percent: aParams.pourcent || 0,
              md5: aParams.md5 || false,
            },
          },
        );
      }
      _send(aFichier, aMD5) {
        return new Promise((aResolve) => {
          this._eventAjaxIOProgression({});
          if (!aFichier.idFichier) {
            uIdFichier += 1;
            aFichier.idFichier = 'reqUpl_' + uIdFichier + '_' + Date.now();
          }
          this.progression.json = null;
          const lFormData = this.donnees.getFormData(aFichier) || {};
          if (aMD5) {
            lFormData[TypesRequeteJSON_1.ConstantesUploadFile.md5] = aMD5;
          }
          return UploadFileAjax_1.UploadFileAjax.sendPromise({
            url: this.donnees.getUrl(),
            file: aFichier.file,
            remplisseurFormData: (aFormData, aFile) => {
              Object.keys(lFormData).forEach((aKeys) => {
                aFormData.append(aKeys, lFormData[aKeys]);
              });
              aFormData.append('files[]', aFile, aFichier.file.name);
            },
            maxChunkSize: this.donnees.maxChunkSize,
            fournisseurAbort: (aAbortRequete) => {
              this.progression.funcAbortRequete = aAbortRequete;
            },
            callbackProgress: (aParams) => {
              const lProgressBar = Math.round(aParams.pourcent);
              this._eventAjaxIOProgression({ pourcent: lProgressBar });
            },
          })
            .then(
              (aResult) => {
                if (
                  aResult.response &&
                  MethodesObjet_1.MethodesObjet.isNumber(aResult.response.etat)
                ) {
                  this.progression.json = aResult.response;
                  if (
                    aResult.response.etat ===
                    TypeEtatUpload_1.TypeEtatUpload.TEU_Reussi
                  ) {
                    this.progression.nbReussi += 1;
                  } else {
                    this.progression.error = {
                      message: aResult.response.message,
                    };
                  }
                } else {
                  this.progression.error = {};
                }
              },
              (aError) => {
                if (aError) {
                  if (aError.isAborted) {
                    this.progression.error = {
                      abort: true,
                      message: 'L'envoi de fichier a été annulé',
                    };
                  } else {
                    this.progression.error = { fail: true };
                  }
                  if (aError.response) {
                    this.progression.json = aError.response;
                    if (
                      this.progression.json &&
                      this.progression.json.message
                    ) {
                      this.progression.error.message =
                        this.progression.json.message;
                    }
                  }
                } else {
                  IE.log.addLog(`echec fichier ${aError}`);
                  this.progression.error = { fail: true };
                }
              },
            )
            .finally(() => {
              IEHtml.refresh(true);
              aResolve(aFichier);
            });
        });
      }
      _debloquerPatience() {
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.eventIOAjax,
          { emission: false, upload: true, debloquerForcer: true },
        );
      }
      _doneFile(aFichier) {
        this.progression.funcAbortRequete = null;
        IEHtml.refresh(true);
        let lErreurSession = null;
        const lSurAnnulationUpload =
          this.progression.error && this.progression.error.abort;
        if (
          !lSurAnnulationUpload &&
          this.donnees.callbackEach &&
          this.progression.json
        ) {
          lErreurSession = this.donnees.callbackEach(this.progression.json);
        }
        if (lErreurSession) {
          this.progression.error = {};
        }
        if (this.progression.error) {
          this.progression.listeFichiersEnAttente =
            new ObjetListeElements_1.ObjetListeElements();
          this._debloquerPatience();
          if (
            lSurAnnulationUpload &&
            !lErreurSession &&
            this.donnees.callbackInterrupt
          ) {
            this.donnees.callbackInterrupt();
          }
          Promise.resolve()
            .then(() => {
              if (!lErreurSession) {
                return (0, AccessApp_1.getApp)()
                  .getMessage()
                  .afficher({
                    titre: this.progression.error.titre || '',
                    message:
                      this.progression.error.message ||
                      this.donnees.messageEchec,
                  });
              }
            })
            .then(() => {
              this._doneAll(lErreurSession);
            });
        } else {
          this._sendNextFile();
        }
      }
      _doneAll(aErreurSession) {
        this.etat = TypeEtatRequeteAjax_1.TypeEtatRequeteAjax.recu;
        this._debloquerPatience();
        let lErreurSession = aErreurSession;
        if (
          this.progression &&
          this.progression.error &&
          this.progression.json &&
          this.progression.json.Erreur
        ) {
          lErreurSession = this.progression.json.Erreur;
        }
        if (this.donnees.callbackDone) {
          this.donnees.callbackDone({
            requete: this,
            progression: this.progression,
            erreurSession: lErreurSession,
            callback: this.donnees.callback,
          });
        }
        if (this.donnees.callback) {
          this.donnees.callback(this.progression);
        }
        IEHtml.refresh(true);
      }
      _sendNextFile() {
        if (this.progression.listeFichiersEnAttente.count() > 0) {
          const lFichier = this.progression.listeFichiersEnAttente.get(0);
          this.progression.listeFichiersEnAttente.remove(0);
          let lPromise = null;
          if (this.donnees.moduleMD5 && this.donnees.moduleMD5.calculMD5) {
            lPromise = this.donnees.moduleMD5.calculMD5({
              instance: this,
              fichier: lFichier,
              eventAjaxIOProgression: this._eventAjaxIOProgression,
            });
          }
          return Promise.resolve(lPromise)
            .then(
              (aMD5) => {
                return this._send(lFichier, aMD5);
              },
              () => {
                IE.log.addLog('Echec calcul md5 (erreur ou fichier trop gros)');
                return this._send(lFichier, '');
              },
            )
            .catch((aErreur) => {
              this.progression.error = {
                abort: true,
                message: 'L'envoi de fichier a été annulé',
              };
            })
            .then(() => {
              return this._doneFile(lFichier);
            });
        } else {
          this._doneAll();
        }
      }
    }
    exports.ObjetRequeteUploadFile = ObjetRequeteUploadFile;
  },
  fn: 'objetrequeteuploadfile.js',
});