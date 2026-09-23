IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitairePartenaire = exports.TypePartenaire = void 0;
    const ObjetRequeteGenerationURLRecherchePartenaire_1 = require('@scolys/espace/script/requete/ObjetRequeteGenerationURLRecherchePartenaire');
    const ObjetRequeteSaisieURLPartenaire_1 = require('@scolys/espace/script/requete/ObjetRequeteSaisieURLPartenaire');
    const ObjetRequeteSaisieURLPartenaireCDI_1 = require('@scolys/espace/script/requete/ObjetRequeteSaisieURLPartenaireCDI');
    const UtilitairePatienceCP_1 = require('@cp/Produit/Script/Utilitaire/UtilitairePatienceCP');
    var TypePartenaire;
    (function (TypePartenaire) {
      TypePartenaire['FastFamille'] = 'FAST';
      TypePartenaire['Agate'] = 'AGATE';
      TypePartenaire['Applicam'] = 'Applicam';
      TypePartenaire['Ard'] = 'ARD';
      TypePartenaire['EsiDoc'] = 'CDI';
    })(TypePartenaire || (exports.TypePartenaire = TypePartenaire = {}));
    class UtilitairePartenaire extends UtilitairePatienceCP_1.UtilitairePatienceCP {
      ouvrirURLPartenaireCDI(aLien) {
        this.ouvrirPatience();
        new ObjetRequeteSaisieURLPartenaireCDI_1.ObjetRequeteSaisieURLPartenaireCDI(
          this,
        )
          .lancerRequete(aLien)
          .then((aReponse) => {
            this.actionSurLienPartenaire(aReponse.JSONRapportSaisie.urlSSO);
          });
      }
      ouvrirURLPartenaire(aLien) {
        this.ouvrirPatience();
        new ObjetRequeteSaisieURLPartenaire_1.ObjetRequeteSaisieURLPartenaire(
          this,
        )
          .lancerRequete(aLien)
          .then((aReponse) => {
            this.actionSurLienPartenaire(aReponse.JSONRapportSaisie.urlSSO);
          });
      }
      ouvrirURLPartenaireRecherche(aObjetPartenaire, aTexteRecherche) {
        this.ouvrirPatience();
        new ObjetRequeteGenerationURLRecherchePartenaire_1.ObjetRequeteGenerationURLRecherchePartenaire(
          this,
        )
          .lancerRequete({
            portailCDI: aObjetPartenaire,
            recherche: aTexteRecherche,
          })
          .then((aReponse) => {
            this.actionSurLienPartenaire(aReponse.urlRecherche);
          });
      }
      actionSurLienPartenaire(aUrlSSO) {
        if (aUrlSSO) {
          this.ouvrirUrl(aUrlSSO);
        } else {
          this.fermerPatience();
        }
      }
    }
    exports.UtilitairePartenaire = UtilitairePartenaire;
  },
  fn: 'utilitairepartenaire.js',
});