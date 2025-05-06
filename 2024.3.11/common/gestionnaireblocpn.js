IE.fModule({
  f: function (exports, require, module, global) {
    const { GestionnaireBloc } = require('GestionnaireBloc.js');
    const { ObjetBloc } = require('GestionnaireBloc.js');
    const { EGenreRessource } = require('Enumere_Ressource.js');
    const { EGenreEspace } = require('Enumere_Espace.js');
    const {
      TypeGenreReponseInternetActualite,
    } = require('TypeGenreReponseInternetActualite.js');
    class UtilitaireGenreRessource {
      constructor() {}
      getRessourceDocumentJoint() {
        return EGenreRessource.DocumentJoint;
      }
      getRessourceAucune() {
        return EGenreRessource.Aucune;
      }
      getRessourceDocJointEtablissement() {
        return EGenreRessource.DocJointEtablissement;
      }
      getRessourceEleve() {
        return EGenreRessource.Eleve;
      }
      getRessourceParent() {
        return EGenreRessource.Responsable;
      }
      getRessourceProf() {
        return EGenreRessource.Enseignant;
      }
      getRessourcePersonnel() {
        return EGenreRessource.Personnel;
      }
      getRessourceEntreprise() {
        return EGenreRessource.MaitreDeStage;
      }
      getRessourceInspecteur() {
        return EGenreRessource.InspecteurPedagogique;
      }
      getRessourceClasse() {
        return EGenreRessource.Classe;
      }
      getRessourceGroupe() {
        return EGenreRessource.Groupe;
      }
    }
    class UtilitaireGenreEspace {
      constructor() {}
      estEspaceParent(aGenreEspace) {
        return [
          EGenreEspace.Parent,
          EGenreEspace.Mobile_Parent,
          EGenreEspace.PrimParent,
          EGenreEspace.Mobile_PrimParent,
        ].includes(aGenreEspace);
      }
      estEspaceEntreprise(aGenreEspace) {
        return [EGenreEspace.Entreprise].includes(aGenreEspace);
      }
      estPourPrimaire() {
        return GEtatUtilisateur.pourPrimaire();
      }
    }
    class UtilitaireGenreReponse {
      constructor() {}
      estGenreSansReponse(aGenreReponse) {
        return [TypeGenreReponseInternetActualite.SansReponse].includes(
          aGenreReponse,
        );
      }
      estGenreChoixMultiple(aGenreReponse) {
        return [TypeGenreReponseInternetActualite.ChoixMultiple].includes(
          aGenreReponse,
        );
      }
      estGenreChoixUnique(aGenreReponse) {
        return [TypeGenreReponseInternetActualite.ChoixUnique].includes(
          aGenreReponse,
        );
      }
      estGenreTextuelle(aGenreReponse) {
        return [TypeGenreReponseInternetActualite.Textuelle].includes(
          aGenreReponse,
        );
      }
      estGenreAvecAR(aGenreReponse) {
        return [TypeGenreReponseInternetActualite.AvecAR].includes(
          aGenreReponse,
        );
      }
      estGenreSansAR(aGenreReponse) {
        return [TypeGenreReponseInternetActualite.SansAR].includes(
          aGenreReponse,
        );
      }
      getGenreSansReponse() {
        return TypeGenreReponseInternetActualite.SansReponse;
      }
      getGenreChoixMultiple() {
        return TypeGenreReponseInternetActualite.ChoixMultiple;
      }
      getGenreChoixUnique() {
        return TypeGenreReponseInternetActualite.ChoixUnique;
      }
      getGenreTextuelle() {
        return TypeGenreReponseInternetActualite.Textuelle;
      }
      getGenreAvecAR() {
        return TypeGenreReponseInternetActualite.AvecAR;
      }
      getGenreSansAR() {
        return TypeGenreReponseInternetActualite.SansAR;
      }
    }
    class GestionnaireBlocPN extends GestionnaireBloc {
      constructor(...aParams) {
        super(...aParams);
        this.setUtilitaires({ genreRessource: new UtilitaireGenreRessource() });
      }
    }
    class ObjetBlocPN extends ObjetBloc {
      constructor(...aParams) {
        super(...aParams);
        this.setUtilitaires({ genreRessource: new UtilitaireGenreRessource() });
      }
    }
    module.exports = {
      GestionnaireBlocPN,
      UtilitaireGenreRessource,
      UtilitaireGenreEspace,
      UtilitaireGenreReponse,
      ObjetBlocPN,
    };
  },
  fn: 'gestionnaireblocpn.js',
});