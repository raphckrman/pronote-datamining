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
    const GestionnaireBloc_1 = require('@cp/Espace/Script/GestionnaireBloc');
    const GestionnaireBloc_2 = require('@cp/Espace/Script/GestionnaireBloc');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const TypeGenreReponseInternetActualite_1 = require('@scolys/produit/script/enumere/TypeGenreReponseInternetActualite');
    const AccessApp_1 = require('@cp/script/AccessApp');
    class UtilitaireGenreRessource {
      constructor() {}
      getRessourceDocumentJoint() {
        return Enumere_Ressource_1.TypeHttpRessource
          .HttpRessource_DocumentJoint;
      }
      getRessourceAucune() {
        return Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Aucune;
      }
      getRessourceDocJointEtablissement() {
        return Enumere_Ressource_1.TypeHttpRessource
          .HttpRessource_DocJointEtablissement;
      }
      getRessourceEleve() {
        return Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve;
      }
      getRessourceParent() {
        return Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable;
      }
      getRessourceProf() {
        return Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant;
      }
      getRessourcePersonnel() {
        return Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel;
      }
      getRessourceEntreprise() {
        return Enumere_Ressource_1.TypeHttpRessource
          .HttpRessource_MaitreDeStage;
      }
      getRessourceInspecteur() {
        return Enumere_Ressource_1.TypeHttpRessource
          .HttpRessource_InspecteurPedagogique;
      }
      getRessourceClasse() {
        return Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe;
      }
      getRessourceGroupe() {
        return Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Groupe;
      }
    }
    exports.UtilitaireGenreRessource = UtilitaireGenreRessource;
    class UtilitaireGenreEspace {
      constructor() {}
      estEspaceParent(aGenreEspace) {
        return [
          Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent,
        ].includes(aGenreEspace);
      }
      estEspaceEntreprise(aGenreEspace) {
        return [
          Enumere_Espace_1.TypeGenreEspace.Espace_Entreprise,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Entreprise,
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
      constructor(aParams) {
        super(aParams);
        this.setUtilitaires({ genreRessource: new UtilitaireGenreRessource() });
      }
    }
    exports.GestionnaireBlocPN = GestionnaireBlocPN;
    class ObjetBlocPN extends GestionnaireBloc_2.ObjetBloc {
      constructor(aParams) {
        super(aParams);
        this.applicationSco = (0, AccessApp_1.getApp)();
        this.setUtilitaires({ genreRessource: new UtilitaireGenreRessource() });
      }
    }
    exports.ObjetBlocPN = ObjetBlocPN;
  },
  fn: 'gestionnaireblocpn.js',
});