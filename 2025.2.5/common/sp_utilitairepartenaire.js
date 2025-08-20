IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypePartenaire = exports.TUtilitairePartenaire = void 0;
    const ObjetRequeteGenerationURLRecherchePartenaire_1 = require('ObjetRequeteGenerationURLRecherchePartenaire');
    const ObjetRequeteSaisieURLPartenaire_1 = require('ObjetRequeteSaisieURLPartenaire');
    const ObjetRequeteSaisieURLPartenaireCDI_1 = require('ObjetRequeteSaisieURLPartenaireCDI');
    var TypePartenaire;
    (function (TypePartenaire) {
      TypePartenaire['FastFamille'] = 'FAST';
    })(TypePartenaire || (exports.TypePartenaire = TypePartenaire = {}));
    const TUtilitairePartenaire = {
      windowURLPartenaire: null,
      target: '_blank',
      ouvrirPatience(aTarget) {
        try {
          if (!GApplication.estAppliMobile) {
            this.windowURLPartenaire = window.open(
              'message.html?G=patiencePartenaire',
              aTarget || this.target,
            );
          }
        } catch (e) {
          this.windowURLPartenaire = null;
        }
      },
      fermerPatience() {
        if (this.windowURLPartenaire) {
          this.windowURLPartenaire.close();
        }
      },
      ouvrirUrl(aUrl, aForcerPatience) {
        if (aForcerPatience) {
          TUtilitairePartenaire.ouvrirPatience();
        }
        if (this.windowURLPartenaire) {
          this.windowURLPartenaire.location.replace(aUrl);
        } else {
          window.open(aUrl, this.target);
        }
      },
      ouvrirURLPartenaireCDI(aLien) {
        TUtilitairePartenaire.ouvrirPatience();
        new ObjetRequeteSaisieURLPartenaireCDI_1.ObjetRequeteSaisieURLPartenaireCDI(
          this,
        )
          .lancerRequete(aLien)
          .then((aReponse) => {
            this._actionSurLienPartenaire(aReponse.JSONRapportSaisie.urlSSO);
          });
      },
      ouvrirURLPartenaire(aLien, aTypePartenaire) {
        TUtilitairePartenaire.ouvrirPatience(aTypePartenaire);
        new ObjetRequeteSaisieURLPartenaire_1.ObjetRequeteSaisieURLPartenaire(
          this,
        )
          .lancerRequete(aLien)
          .then((aReponse) => {
            this._actionSurLienPartenaire(aReponse.JSONRapportSaisie.urlSSO);
          });
      },
      ouvrirURLPartenaireRecherche(aObjetPartenaire, aTexteRecherche) {
        TUtilitairePartenaire.ouvrirPatience();
        new ObjetRequeteGenerationURLRecherchePartenaire_1.ObjetRequeteGenerationURLRecherchePartenaire(
          this,
        )
          .lancerRequete({
            portailCDI: aObjetPartenaire,
            recherche: aTexteRecherche,
          })
          .then((aReponse) => {
            this._actionSurLienPartenaire(aReponse.urlRecherche);
          });
      },
      _actionSurLienPartenaire(aUrlSSO) {
        if (aUrlSSO) {
          if (this.windowURLPartenaire) {
            setTimeout(() => {
              this.windowURLPartenaire.location.replace(aUrlSSO);
            }, 0);
          } else {
            window.open(aUrlSSO, this.target);
          }
        } else {
          TUtilitairePartenaire.fermerPatience();
        }
      },
    };
    exports.TUtilitairePartenaire = TUtilitairePartenaire;
  },
  fn: 'utilitairepartenaire.js',
});