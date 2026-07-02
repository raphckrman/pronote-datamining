IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireActionContextuelle = void 0;
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const UtilitaireGestionCloudEtPDF_1 = require('@scolys/produit/script/utilitaire/UtilitaireGestionCloudEtPDF');
    const ObjetFenetre_PanierRessourceKiosque_1 = require('@scolys/espace/script/ObjetFenetre_PanierRessourceKiosque');
    const UtilitaireActionContextuelleCP_1 = require('@cp/Produit/Script/UtilitaireActionContextuelleCP');
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const ObjetRequeteListeQCMCumuls_1 = require('@scolys/espace/script/requete/ObjetRequeteListeQCMCumuls');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const ObjetFenetre_PieceJointe_1 = require('@scolys/espace/script/ObjetFenetre_PieceJointe');
    const ObjetFenetre_AjoutImagesMultiple_1 = require('@scolys/espace/script/ObjetFenetre_AjoutImagesMultiple');
    class UtilitaireActionContextuelle extends UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP {
      constructor(aParams = {}) {
        super(aParams);
        this.application = (0, AccessApp_1.getApp)();
        this.etatUtilisateur = this.application.getEtatUtilisateur();
      }
      verificationActions() {
        super.verificationActions();
        this.verificationCloudENEJ();
      }
      verificationCloudENEJ() {
        const lInfosCloud = this.getAction(
          UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP
            .EGenreAction.AjouterDepuisCloud,
        );
        if (!lInfosCloud) {
          return;
        }
        const lInfosCloudEnej = this.getAction(
          UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP
            .EGenreAction.AjouterDepuisCloudENEJ,
        );
        if (!lInfosCloudEnej) {
          const lIndiceCloudEnej = this.infosActions.indexOf(lInfosCloud) + 1;
          this.ajouterAction(
            {
              genre:
                UtilitaireActionContextuelleCP_1.UtilitaireActionContextuelleCP
                  .EGenreAction.AjouterDepuisCloudENEJ,
              params: lInfosCloud.params,
            },
            lIndiceCloudEnej,
          );
        }
      }
      addBouton(aParams) {
        return super.addBouton(aParams);
      }
      addBtn(aGenre, aParams) {
        return super.addBtn(aGenre, aParams);
      }
      getDonneesQCM(aParamJSON, aDonnees) {
        return new ObjetRequeteListeQCMCumuls_1.ObjetRequeteListeQCMCumuls(
          this,
        ).lancerRequete(aParamJSON, aDonnees);
      }
      getTailleMaxDocJointEtablissement() {
        return this.application.droits.get(
          ObjetDroitsPN_1.TypeDroits.tailleMaxDocJointEtablissement,
        );
      }
      eventAjouterLienKiosque(aInfos) {
        var _a;
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_PanierRessourceKiosque_1.ObjetFenetre_PanierRessourceKiosque,
          {
            pere: this,
            evenement: (aParams) => {
              if (aParams && aParams.genreBouton === 1) {
                aInfos.params.callback({
                  genre: aInfos.genre,
                  liste: aParams.liste,
                  selection: aParams.selection,
                });
              }
            },
          },
        );
        lFenetre.setOptions(
          (_a = aInfos.params.options) !== null && _a !== void 0
            ? _a
            : { avecMultiSelection: true },
        );
        if (aInfos.params.optionsFenetre) {
          lFenetre.setOptionsFenetre(aInfos.params.optionsFenetre);
        }
        lFenetre.afficherFenetre();
      }
      async eventAjouterDepuisCloud(aInfos) {
        const lListeDocuments =
          await UtilitaireGestionCloudEtPDF_1.UtilitaireGestionCloudEtPDF.ouvrirFenetreCloud(
            {
              instance: this,
              optionFenetreFichiersCloud:
                aInfos.params.optionFenetreFichiersCloud,
            },
          );
        aInfos.params.callback({
          listeDocuments: lListeDocuments,
          genre: aInfos.genre,
        });
      }
      async eventAjouterDepuisCloudENEJ(aInfos) {
        const lListeDocuments =
          await UtilitaireGestionCloudEtPDF_1.UtilitaireGestionCloudEtPDF.ouvrirFenetreChoixFichierCloud(
            {
              instance: this,
              service: this.etatUtilisateur.getCloudENEJ(),
              optionsFenetre: aInfos.params.optionFenetreFichiersCloud,
            },
          );
        aInfos.params.callback({
          listeDocuments: lListeDocuments,
          genre: aInfos.genre,
        });
      }
      eventAjouterImagesMultiples(aParamsInput, aInfos) {
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_AjoutImagesMultiple_1.ObjetFenetre_AjoutImagesMultiple,
          {
            pere: this,
            evenement: (aNumeroBouton, aFichierPDF) => {
              if (aNumeroBouton === 0 && aFichierPDF) {
                aInfos.params.callback({
                  genre: aInfos.genre,
                  fichierPDF: aFichierPDF,
                });
              }
            },
          },
        );
        lFenetre.setDonnees(aParamsInput.listeFichiers);
      }
      getGenreRessourcesQCM() {
        return {
          genreQCM: Enumere_Ressource_1.TypeHttpRessource.HttpRessource_QCM,
          genreNiveau:
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Niveau,
          genreMatiere:
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Matiere,
          genreAucun:
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Aucune,
        };
      }
      getClassFenetrePJ() {
        return ObjetFenetre_PieceJointe_1.ObjetFenetre_PieceJointe;
      }
      avecRessourceGranulaire() {
        return this.etatUtilisateur.avecRessourcesGranulaire;
      }
    }
    exports.UtilitaireActionContextuelle = UtilitaireActionContextuelle;
  },
  fn: 'utilitaireactioncontextuelle.js',
});