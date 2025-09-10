IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireContactReferents = void 0;
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetFenetre_Message_1 = require('ObjetFenetre_Message');
    const TypeGenreDiscussion_1 = require('TypeGenreDiscussion');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const UtilitaireContactReferents = {
      contacterReferentHarcelement(aPereFenetre, aReferent) {
        if (aReferent) {
          const lListeDestinataires =
            new ObjetListeElements_1.ObjetListeElements();
          lListeDestinataires.add(aReferent);
          ouvrirFenetreContactReferent(
            aPereFenetre,
            lListeDestinataires,
            aReferent.getGenre(),
            TypeGenreDiscussion_1.TypeGenreDiscussion.GD_Harcelement,
          );
        }
      },
      contacterReferentsVieScolaire(aPereFenetre, aListeReferentsVieScolaire) {
        const lListeDestinataires =
          new ObjetListeElements_1.ObjetListeElements();
        lListeDestinataires.add(aListeReferentsVieScolaire);
        ouvrirFenetreContactReferent(
          aPereFenetre,
          lListeDestinataires,
          Enumere_Ressource_1.EGenreRessource.Personnel,
          TypeGenreDiscussion_1.TypeGenreDiscussion.GD_Discussion,
        );
      },
      avecAffichageContactReferentsVieScolaire(aGenreEspace) {
        return [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
        ].includes(aGenreEspace);
      },
      auMoinsUnReferentVieScolaireAccepteDiscussion(
        aListeReferentsVieScolaire,
      ) {
        let lAuMoinsUnReferentAvecDiscussion = false;
        if (aListeReferentsVieScolaire) {
          for (const lReferentVS of aListeReferentsVieScolaire) {
            if (lReferentVS && lReferentVS.avecDiscussion) {
              lAuMoinsUnReferentAvecDiscussion = true;
              break;
            }
          }
        }
        return lAuMoinsUnReferentAvecDiscussion;
      },
    };
    exports.UtilitaireContactReferents = UtilitaireContactReferents;
    function ouvrirFenetreContactReferent(
      aPereFenetre,
      aListeDestinataire,
      aGenreRessource,
      aGenreDiscussion,
    ) {
      const lFenetreMessage = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
        ObjetFenetre_Message_1.ObjetFenetre_Message,
        { pere: aPereFenetre },
      );
      lFenetreMessage.setDonnees({
        ListeRessources: aListeDestinataire,
        listeSelectionnee: aListeDestinataire,
        genreRessource: aGenreRessource,
      });
      lFenetreMessage.setGenreDiscussion(aGenreDiscussion);
    }
  },
  fn: 'utilitairecontactreferents.js',
});