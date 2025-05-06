IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireGestionCloudEtPDF = void 0;
    const ObjetFenetre_SelectionClouds_1 = require('ObjetFenetre_SelectionClouds');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetFenetre_FichiersCloud_1 = require('ObjetFenetre_FichiersCloud');
    const ObjetTraduction_1 = require('ObjetTraduction');
    exports.UtilitaireGestionCloudEtPDF = {
      modeGestion: { PDF: 'pdf', Cloud: 'cloud', PDFEtCloud: 'pdfEtCloud' },
      creerFenetreGestion(aParams) {
        const lAvecCloudDisponible = aParams.avecDepot
          ? GEtatUtilisateur.listeCloudDepotServeur.count() > 0
          : GEtatUtilisateur.avecCloudDisponibles();
        let lAvecPDF = [
          exports.UtilitaireGestionCloudEtPDF.modeGestion.PDF,
          exports.UtilitaireGestionCloudEtPDF.modeGestion.PDFEtCloud,
        ].includes(aParams.modeGestion);
        const lAvecCloud =
          [
            exports.UtilitaireGestionCloudEtPDF.modeGestion.Cloud,
            exports.UtilitaireGestionCloudEtPDF.modeGestion.PDFEtCloud,
          ].includes(aParams.modeGestion) && lAvecCloudDisponible;
        let lTitre;
        if (!!aParams.titre) {
          lTitre = aParams.titre;
        } else if (aParams.avecTitreSelonOnglet) {
          const lOnglet = GEtatUtilisateur.getOngletSelectionne();
          lTitre = lOnglet
            ? lOnglet.libelleLong
              ? lOnglet.libelleLong
              : lOnglet.getLibelle()
            : '';
        }
        if (!lTitre) {
          switch (aParams.modeGestion) {
            case exports.UtilitaireGestionCloudEtPDF.modeGestion.PDF:
            case exports.UtilitaireGestionCloudEtPDF.modeGestion.PDFEtCloud:
              lTitre = 'Génération de PDF';
              break;
            case exports.UtilitaireGestionCloudEtPDF.modeGestion.Cloud:
              lTitre = 'Choix du cloud';
              break;
            default:
              break;
          }
        }
        let lHauteur = 0;
        if (lAvecPDF) {
          lHauteur += 150;
        }
        if (lAvecCloud) {
          lHauteur += 250;
        }
        let lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_SelectionClouds_1.ObjetFenetre_SelectionClouds,
          {
            pere: this,
            evenement: function (aLigne, aService) {
              aParams.callbaskEvenement.call(this, aLigne, aService);
            },
            initialiser: function (aInstance) {
              aInstance.setOptionsFenetre({
                titre: lTitre,
                largeur: 380,
                hauteurMaxContenu: 600,
                hauteur: lHauteur,
                avecScroll: true,
                listeBoutons: [],
              });
            },
          },
        );
        if (aParams.avecMessage && aParams.message && aParams.message !== '') {
          lFenetre.setOptionsFenetreSelectionClouds({
            avecMessage: aParams.avecMessage,
          });
          lFenetre.setMessage(aParams.message);
        }
        if (aParams.avecBtnTelecharger) {
          lFenetre.setOptionsFenetreSelectionClouds({
            avecBtnTelecharger: aParams.avecBtnTelecharger,
          });
        }
        lFenetre.setDonnees({
          avecPDF: lAvecPDF,
          avecClouds: lAvecCloud,
          callbackParametrage: aParams.callbackParametrage,
          callbackTelechargement: aParams.callbackTelechargement,
          callbackFermeture: aParams.callbackFermeture,
          avecDepot: aParams.avecDepot,
        });
        lFenetre.afficher();
        return lFenetre;
      },
      async ouvrirFenetreCloud(aParams) {
        const lParams = Object.assign(
          {
            instance: {},
            modeGestion: exports.UtilitaireGestionCloudEtPDF.modeGestion.Cloud,
          },
          aParams,
        );
        return await new Promise((aResolve) => {
          exports.UtilitaireGestionCloudEtPDF.creerFenetreGestion(
            Object.assign(lParams, {
              callbaskEvenement: (aLigne) => {
                if (aLigne >= 0) {
                  const lService = GEtatUtilisateur.listeCloud.get(aLigne);
                  ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
                    ObjetFenetre_FichiersCloud_1.ObjetFenetre_FichiersCloud,
                    {
                      pere: lParams.instance || {},
                      evenement(aParam) {
                        if (
                          aParam.listeNouveauxDocs &&
                          aParam.listeNouveauxDocs.count() > 0
                        ) {
                          aResolve(aParam.listeNouveauxDocs);
                        }
                      },
                    },
                  ).setDonnees({ service: lService.getGenre() });
                }
              },
            }),
          );
        });
      },
    };
  },
  fn: 'utilitairegestioncloudetpdf.js',
});