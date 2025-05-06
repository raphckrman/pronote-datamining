IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetSelecteurPJ = void 0;
    const ObjetSelecteurPJCP_1 = require('ObjetSelecteurPJCP');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetFenetre_PieceJointe = require('ObjetFenetre_PieceJointe');
    const UtilitaireGestionCloudEtPDF_1 = require('UtilitaireGestionCloudEtPDF');
    class ObjetSelecteurPJ extends ObjetSelecteurPJCP_1.ObjetSelecteurPJCP {
      _initialiserOptions() {
        super._initialiserOptions();
        Object.assign(this._options, {
          genreRessourcePJ:
            Enumere_Ressource_1.EGenreRessource.DocJointEtablissement,
        });
      }
      construireInstances() {
        super.construireInstances();
        if (ObjetFenetre_PieceJointe) {
          this.identEditionPJ = this.addFenetre(
            ObjetFenetre_PieceJointe,
            this.evntEditionPJ,
            this.initEditionPJ,
          );
        }
      }
      ouvrirFenetreChoixListeCloud(aCallbackParFichier, aCallbackFinal) {
        UtilitaireGestionCloudEtPDF_1.UtilitaireGestionCloudEtPDF.ouvrirFenetreCloud(
          { instance: this },
        ).then((aListeDocuments) => {
          aListeDocuments.parcourir((aElement) => {
            aCallbackParFichier(aElement);
          });
          aCallbackFinal();
        });
      }
    }
    exports.ObjetSelecteurPJ = ObjetSelecteurPJ;
  },
  fn: 'objetselecteurpj.js',
});