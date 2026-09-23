IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireDocument = void 0;
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetFenetre_FichiersCloud_1 = require('@scolys/espace/script/professeur/Fenetre/ObjetFenetre_FichiersCloud');
    const UtilitaireGestionCloudEtPDF_1 = require('@scolys/produit/script/utilitaire/UtilitaireGestionCloudEtPDF');
    const UtilitaireDocumentCP_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireDocumentCP');
    const AccessApp_1 = require('@cp/script/AccessApp');
    class UtilitaireDocument extends UtilitaireDocumentCP_1.UtilitaireDocumentCP {
      static getOptionsSelecFile() {
        return {
          maxSize: (0, AccessApp_1.getApp)().droits.get(
            ObjetDroitsPN_1.TypeDroits.tailleMaxDocJointEtablissement,
          ),
          multiple: false,
        };
      }
      static ouvrirFenetreChoixFichierCloud(aCallbackDepotFichier, aParams) {
        UtilitaireGestionCloudEtPDF_1.UtilitaireGestionCloudEtPDF.creerFenetreGestion(
          {
            callbaskEvenement: (aLigne) => {
              if (aLigne >= 0) {
                const lService = GEtatUtilisateur.listeCloud.get(aLigne);
                UtilitaireDocument.ouvrirFenetreFichiersCloud({
                  service: lService,
                  callback: aCallbackDepotFichier,
                  avecMonoSelection: !!(aParams === null || aParams === void 0
                    ? void 0
                    : aParams.avecMonoSelection),
                  instance: aParams.instance,
                });
              }
            },
            modeGestion:
              UtilitaireGestionCloudEtPDF_1.UtilitaireGestionCloudEtPDF
                .modeGestion.Cloud,
          },
        );
      }
      static ouvrirFenetreFichiersCloud(aParams) {
        const lFenetreChoixFichierDepuisCloud =
          ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
            ObjetFenetre_FichiersCloud_1.ObjetFenetre_FichiersCloud,
            {
              pere: aParams.instance,
              evenement(aParam) {
                const lParams = { params: aParam };
                if (
                  aParam &&
                  aParam.listeNouveauxDocs &&
                  aParam.listeNouveauxDocs.count() > 0
                ) {
                  return aParams.callback(
                    Object.assign(lParams, {
                      eltFichier: aParam.listeNouveauxDocs.get(0),
                      listeFichiers: aParam.listeNouveauxDocs,
                    }),
                  );
                }
                aParams.callback(lParams);
              },
              initialiser(aFenetre) {
                aFenetre.setOptionsFenetre({
                  estMonoSelection: !!aParams.avecMonoSelection,
                });
              },
            },
          );
        lFenetreChoixFichierDepuisCloud.setDonnees({
          service: aParams.service.getGenre(),
        });
      }
    }
    exports.UtilitaireDocument = UtilitaireDocument;
  },
  fn: 'utilitairedocument.js',
});