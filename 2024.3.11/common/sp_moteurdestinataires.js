IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MoteurDestinataires = void 0;
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Toast_1 = require('Toast');
    class MoteurDestinataires {
      constructor(aParam) {
        this.utilitaires = { genreEspace: aParam.genreEspace };
      }
      controlerSurValidation(aParam) {
        const lDonnee = aParam.donnee;
        const lNbPublicEntite =
          lDonnee.listePublicEntite.getNbrElementsExistes();
        const lNbGenreEntite = lDonnee.genresPublicEntite.count();
        const lAvecIndividus =
          lDonnee.listePublicIndividu.getNbrElementsExistes() > 0 ||
          (this.utilitaires.genreEspace.estPourPrimaire() &&
            !!lDonnee.avecDirecteur);
        let lMessagePbDestinataires = null;
        if (lDonnee.publicationPageEtablissement !== true) {
          if (lNbGenreEntite > 0 && lNbPublicEntite === 0) {
            lMessagePbDestinataires = 'Vous avez sélectionné des destinataires liés aux classes/groupes. Veuillez sélectionner au moins une classe ou un groupe.';
          } else if (lNbGenreEntite === 0 && lNbPublicEntite > 0) {
            lMessagePbDestinataires = 'Vous avez sélectionné des classes/groupes. Veuillez sélectionner au moins un destinataire (Equipe pédagogique, Personnels, ... ).';
          } else if (lNbPublicEntite === 0 && !lAvecIndividus) {
            lMessagePbDestinataires = 'Veuillez sélectionner un destinataire.';
          }
        }
        if (lMessagePbDestinataires !== null) {
          if (IE.estMobile) {
            Toast_1.Toast.afficher({
              msg: lMessagePbDestinataires,
              type: Toast_1.ETypeToast.info,
            });
          } else {
            GApplication.getMessage().afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message: lMessagePbDestinataires,
            });
          }
          return false;
        } else {
          return true;
        }
      }
      avecDestinataires(aParam) {
        const lDonnee = aParam.donnee;
        return (
          (lDonnee.listePublicEntite !== null &&
            lDonnee.listePublicEntite !== undefined &&
            lDonnee.listePublicEntite.getNbrElementsExistes() > 0 &&
            lDonnee.genresPublicEntite !== null &&
            lDonnee.genresPublicEntite !== undefined &&
            lDonnee.genresPublicEntite.count() > 0) ||
          (lDonnee.listePublicIndividu !== null &&
            lDonnee.listePublicIndividu !== undefined &&
            lDonnee.listePublicIndividu.getNbrElementsExistes() > 0) ||
          !!lDonnee.avecDirecteur
        );
      }
    }
    exports.MoteurDestinataires = MoteurDestinataires;
  },
  fn: 'moteurdestinataires.js',
});