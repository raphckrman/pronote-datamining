IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetEtatUtilisateurProfesseur = void 0;
    const ObjetEtatUtilisateur_Espace_1 = require('ObjetEtatUtilisateur_Espace');
    class ObjetEtatUtilisateurProfesseur extends ObjetEtatUtilisateur_Espace_1.ObjetEtatUtilisateur_Espace {
      initialiserEtatsParDefaut() {
        this.Aide = true;
        this.assistantSaisieActif = false;
        this.remplacerNiveauxDAcquisitions = false;
      }
      inverserEtatAssistantSaisie() {
        this.assistantSaisieActif = !this.assistantSaisieActif;
      }
    }
    exports.ObjetEtatUtilisateurProfesseur = ObjetEtatUtilisateurProfesseur;
  },
  fn: 'objetetatutilisateur.professeur.js',
});