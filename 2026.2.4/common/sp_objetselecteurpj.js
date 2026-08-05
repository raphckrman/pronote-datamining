IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetSelecteurPJ = void 0;
    const ObjetSelecteurPJCP_1 = require('@cp/Produit/Script/ObjetSelecteurPJCP');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const ObjetFenetre_PieceJointe_1 = require('@scolys/espace/script/ObjetFenetre_PieceJointe');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    class ObjetSelecteurPJ extends ObjetSelecteurPJCP_1.ObjetSelecteurPJCP {
      _initialiserOptions() {
        super._initialiserOptions();
        Object.assign(this._options, {
          genreRessourcePJ:
            Enumere_Ressource_1.TypeHttpRessource
              .HttpRessource_DocJointEtablissement,
        });
      }
      creerFenetrePieceJointe() {
        const lFenetrePieceJointe =
          ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
            ObjetFenetre_PieceJointe_1.ObjetFenetre_PieceJointe,
            {
              pere: this,
              evenement: this.evntEditionPJ.bind(this),
              initialiser: this.initEditionPJ.bind(this),
            },
          );
        return lFenetrePieceJointe;
      }
      callbackFenetreCloud(aParams, aCallbackParFichier, aCallbackFinal) {
        aParams.listeDocuments.parcourir((aElement) => {
          aCallbackParFichier(aElement);
        });
        aCallbackFinal();
      }
    }
    exports.ObjetSelecteurPJ = ObjetSelecteurPJ;
  },
  fn: 'objetselecteurpj.js',
});