IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetBlocPN =
      exports.UtilitaireGenreReponse =
      exports.UtilitaireGenreEspace =
      exports.UtilitaireGenreRessource =
      exports.GestionnaireBlocPN =
        void 0;
    const GestionnaireBloc_1 = require('GestionnaireBloc');
    const GestionnaireBloc_2 = require('GestionnaireBloc');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const TypeGenreReponseInternetActualite_1 = require('TypeGenreReponseInternetActualite');
    const AccessApp_1 = require('AccessApp');
    class UtilitaireGenreRessource {
      constructor() {}
      getRessourceDocumentJoint() {
        return Enumere_Ressource_1.EGenreRessource.DocumentJoint;
      }
      getRessourceAucune() {
        return Enumere_Ressource_1.EGenreRessource.Aucune;
      }
      getRessourceDocJointEtablissement() {
        return Enumere_Ressource_1.EGenreRessource.DocJointEtablissement;
      }
      getRessourceEleve() {
        return Enumere_Ressource_1.EGenreRessource.Eleve;
      }
      getRessourceParent() {
        return Enumere_Ressource_1.EGenreRessource.Responsable;
      }
      getRessourceProf() {
        return Enumere_Ressource_1.EGenreRessource.Enseignant;
      }
      getRessourcePersonnel() {
        return Enumere_Ressource_1.EGenreRessource.Personnel;
      }
      getRessourceEntreprise() {
        return Enumere_Ressource_1.EGenreRessource.MaitreDeStage;
      }
      getRessourceInspecteur() {
        return Enumere_Ressource_1.EGenreRessource.InspecteurPedagogique;
      }
      getRessourceClasse() {
        return Enumere_Ressource_1.EGenreRessource.Classe;
      }
      getRessourceGroupe() {
        return Enumere_Ressource_1.EGenreRessource.Groupe;
      }
    }
    exports.UtilitaireGenreRessource = UtilitaireGenreRessource;
    class UtilitaireGenreEspace {
      constructor() {}
      estEspaceParent(aGenreEspace) {
        return [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
        ].includes(aGenreEspace);
      }
      estEspaceEntreprise(aGenreEspace) {
        return [
          Enumere_Espace_1.EGenreEspace.Entreprise,
          Enumere_Espace_1.EGenreEspace.Mobile_Entreprise,
        ].includes(aGenreEspace);
      }
      estPourPrimaire() {
        return (0, AccessApp_1.getApp)().getEtatUtilisateur().pourPrimaire();
      }
    }
    exports.UtilitaireGenreEspace = UtilitaireGenreEspace;
    class UtilitaireGenreReponse {
      constructor() {}
      estGenreSansReponse(aGenreReponse) {
        return [
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .SansReponse,
        ].includes(aGenreReponse);
      }
      estGenreChoixMultiple(aGenreReponse) {
        return [
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .ChoixMultiple,
        ].includes(aGenreReponse);
      }
      estGenreChoixUnique(aGenreReponse) {
        return [
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .ChoixUnique,
        ].includes(aGenreReponse);
      }
      estGenreTextuelle(aGenreReponse) {
        return [
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .Textuelle,
        ].includes(aGenreReponse);
      }
      estGenreAvecAR(aGenreReponse) {
        return [
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .AvecAR,
        ].includes(aGenreReponse);
      }
      estGenreSansAR(aGenreReponse) {
        return [
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .SansAR,
        ].includes(aGenreReponse);
      }
      getGenreSansReponse() {
        return TypeGenreReponseInternetActualite_1
          .TypeGenreReponseInternetActualite.SansReponse;
      }
      getGenreChoixMultiple() {
        return TypeGenreReponseInternetActualite_1
          .TypeGenreReponseInternetActualite.ChoixMultiple;
      }
      getGenreChoixUnique() {
        return TypeGenreReponseInternetActualite_1
          .TypeGenreReponseInternetActualite.ChoixUnique;
      }
      getGenreTextuelle() {
        return TypeGenreReponseInternetActualite_1
          .TypeGenreReponseInternetActualite.Textuelle;
      }
      getGenreAvecAR() {
        return TypeGenreReponseInternetActualite_1
          .TypeGenreReponseInternetActualite.AvecAR;
      }
      getGenreSansAR() {
        return TypeGenreReponseInternetActualite_1
          .TypeGenreReponseInternetActualite.SansAR;
      }
    }
    exports.UtilitaireGenreReponse = UtilitaireGenreReponse;
    class GestionnaireBlocPN extends GestionnaireBloc_1.GestionnaireBloc {
      constructor(...aParams) {
        super(...aParams);
        this.setUtilitaires({ genreRessource: new UtilitaireGenreRessource() });
      }
    }
    exports.GestionnaireBlocPN = GestionnaireBlocPN;
    class ObjetBlocPN extends GestionnaireBloc_2.ObjetBloc {
      constructor(...aParams) {
        super(...aParams);
        this.setUtilitaires({ genreRessource: new UtilitaireGenreRessource() });
      }
    }
    exports.ObjetBlocPN = ObjetBlocPN;
  },
  fn: 'gestionnaireblocpn.js',
});