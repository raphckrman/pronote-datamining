IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireRequetesCloud = void 0;
    const ObjetRequeteCloudAttente_1 = require('ObjetRequeteCloudAttente');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const UtilitaireOAuth2_1 = require('UtilitaireOAuth2');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const TTypeElementCloud_1 = require('TTypeElementCloud');
    const TypeStatutInterrogationCloud_1 = require('TypeStatutInterrogationCloud');
    const c_TailleMaxUpload_cloud = 52428800;
    const UtilitaireRequetesCloud = {
      c_TailleMaxUpload_cloud: c_TailleMaxUpload_cloud,
      requetePartageListeFichiers(aListePJs) {
        const lListeATraiter = aListePJs.getListeElements((aEle) => {
          return (
            aEle.getGenre() ===
              Enumere_DocumentJoint_1.EGenreDocumentJoint.Cloud &&
            aEle.existe() &&
            aEle.service !== undefined &&
            !aEle.traite
          );
        });
        if (lListeATraiter.count() > 0) {
          const lElement = lListeATraiter.get(0);
          lElement.partageFichier = true;
          return new ObjetRequeteCloudAttente_1.ObjetRequeteCloudAttente()
            .lancerRequete({
              service: lElement.service,
              idPartage: lElement.idPartage,
              partageFichier: lElement.partageFichier,
              publiPdf: lElement.publiPdf,
            })
            .then((aJSON) => {
              if (
                aJSON.status ===
                TypeStatutInterrogationCloud_1.TypeStatutInterrogationCloud
                  .sic_OK
              ) {
                lElement.url = aJSON.urlPartage;
                lElement.traite = true;
                return;
              }
              if (
                aJSON.status ===
                TypeStatutInterrogationCloud_1.TypeStatutInterrogationCloud
                  .sic_TokenInvalide
              ) {
                if (lElement.avecTokenInvalide) {
                  return Promise.reject();
                }
                lElement.avecTokenInvalide = true;
                if (aJSON.idOAuth2) {
                  return UtilitaireOAuth2_1.UtilitaireOAuth2.authentificationPromise(
                    aJSON.idOAuth2,
                  );
                }
                return Promise.reject();
              }
              lElement.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
              lElement.traite = true;
              return GApplication.getMessage().afficher({
                type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
                message:
                  'Une erreur s'est produite' +
                  ' : ' +
                  (aJSON.message || '') +
                  ' (' +
                  aJSON.status +
                  ')',
              });
            })
            .then(() => {
              return UtilitaireRequetesCloud.requetePartageListeFichiers(
                aListePJs,
              );
            })
            .catch((aError) => {});
        }
        return Promise.resolve();
      },
      requeteUploadVersCloudListFichiers(aParams) {
        const lParams = Object.assign(
          {
            idPartageDossier: null,
            service: null,
            listeFichiersATraiter: null,
            listeFichiersResultat: null,
          },
          aParams,
        );
        if (
          !MethodesObjet_1.MethodesObjet.isNumber(lParams.service) ||
          (!lParams.idPartageDossier && lParams.idPartageDossier !== '') ||
          !lParams.listeFichiersATraiter ||
          !lParams.listeFichiersATraiter.count ||
          !lParams.listeFichiersResultat
        ) {
          return Promise.reject();
        }
        if (lParams.listeFichiersATraiter.count() === 0) {
          return Promise.resolve(true);
        }
        const lIndiceFichierATraiter = 0;
        const lFichier = lParams.listeFichiersATraiter.get(
          lIndiceFichierATraiter,
        );
        return Promise.resolve()
          .then(() => {
            if (lFichier) {
              const lIdFichierBackup = lFichier.idFichier;
              return new ObjetRequeteCloudAttente_1.ObjetRequeteCloudAttente()
                .addUpload({
                  listeFichiers:
                    new ObjetListeElements_1.ObjetListeElements().add(lFichier),
                  annulerSurAbortUpload: true,
                  annulerSurErreurUpload: true,
                })
                .lancerRequete({
                  upload: true,
                  service: lParams.service,
                  idDossier: lParams.idPartageDossier,
                  nomFichier: lFichier.getLibelle(),
                  idFichier: lFichier.idFichier,
                })
                .then((aJSON) => {
                  if (aJSON.upload && aJSON.fichier) {
                    const lElementCloud = ObjetElement_1.ObjetElement.create({
                      Libelle: aJSON.fichier.getLibelle(),
                      Genre: Enumere_DocumentJoint_1.EGenreDocumentJoint.Cloud,
                      service: lParams.service,
                      idPartage: aJSON.fichier.idPartage,
                      publiPdf: aJSON.fichier.pubPdf
                        ? aJSON.fichier.formatPub
                        : TTypeElementCloud_1.TypeFormatPublication.FP_Natif,
                      url: aJSON.fichier.url,
                    });
                    lElementCloud.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
                    lParams.listeFichiersResultat.add(lElementCloud);
                    return;
                  }
                  if (
                    aJSON.status ===
                    TypeStatutInterrogationCloud_1.TypeStatutInterrogationCloud
                      .sic_TokenInvalide
                  ) {
                    if (lParams.avecTokenInvalide) {
                      return Promise.reject();
                    }
                    lParams.avecTokenInvalide = true;
                    if (aJSON.idOAuth2) {
                      return UtilitaireOAuth2_1.UtilitaireOAuth2.authentificationPromise(
                        aJSON.idOAuth2,
                      ).then(() => {
                        if (lIdFichierBackup) {
                          lFichier.idFichier = lIdFichierBackup;
                        }
                        return { refaireUpload: true };
                      });
                    }
                  }
                  if (aJSON.erreurCommunication) {
                    return null;
                  }
                  return GApplication.getMessage()
                    .afficher({
                      type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                        .Information,
                      message:
                        'Une erreur s'est produite' +
                        ' : ' +
                        (aJSON.message || '') +
                        ' (' +
                        aJSON.status +
                        ')',
                    })
                    .then(() => null);
                });
            }
          })
          .then((aParams) => {
            if (!aParams || !aParams.refaireUpload) {
              lParams.listeFichiersATraiter.remove(lIndiceFichierATraiter);
            }
            return UtilitaireRequetesCloud.requeteUploadVersCloudListFichiers(
              lParams,
            );
          });
      },
    };
    exports.UtilitaireRequetesCloud = UtilitaireRequetesCloud;
  },
  fn: 'utilitairerequetescloud.js',
});