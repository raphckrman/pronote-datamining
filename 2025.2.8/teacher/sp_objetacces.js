IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetAcces = void 0;
    const Enumere_Acces_1 = require('Enumere_Acces');
    class ObjetAcces {
      constructor(
        aGenreAcces,
        aGenreEspace,
        aGenreOnglet,
        aGenreSousOnglet,
        aNumeroRessource,
        aNumeroRessourceSecondaire,
      ) {
        this.genre = aGenreAcces;
        this.genreEspace = aGenreEspace;
        this.genreOnglet = aGenreOnglet;
        this.genreSousOnglet = aGenreSousOnglet;
        this.numeroRessource = aNumeroRessource;
        this.numeroRessourceSecondaire = aNumeroRessourceSecondaire;
        this.avecRecherche = false;
        this.initialisation();
      }
      initialisation() {
        this.utilisateur = {};
        this.utilisateur.nom = '';
        this.utilisateur.libelleRecherche = '';
        this.utilisateur.identifiant = '';
        this.utilisateur.password = '';
      }
      setNom(aNom, aLibelleRecherche) {
        this.utilisateur.nom = aNom;
        this.utilisateur.libelleRecherche = aLibelleRecherche;
      }
      getNom() {
        return this.utilisateur.nom;
      }
      setIdentification(aIdentifiant, aPassword) {
        this.utilisateur.identifiant = aIdentifiant;
        this.utilisateur.password = aPassword ? aPassword : '@direct';
      }
      estConnexionCAS() {
        return (
          this.genre ===
            Enumere_Acces_1.TypeHttpAcces.HttpAcces_ConnexionJetonEspace ||
          this.genre ===
            Enumere_Acces_1.TypeHttpAcces.HttpAcces_ConnexionJetonDirect
        );
      }
      estConnexionCookie() {
        return (
          this.genre === Enumere_Acces_1.TypeHttpAcces.HttpAcces_ConnexionCookie
        );
      }
      estConnexionDirect() {
        if (
          this.genre === Enumere_Acces_1.TypeHttpAcces.HttpAcces_ConnexionDirect
        ) {
        }
        const lResult =
          this.genre ===
          Enumere_Acces_1.TypeHttpAcces.HttpAcces_ConnexionJetonDirect;
        return lResult;
      }
      estConnexionEspaceEtudiant() {
        if (
          this.genre === Enumere_Acces_1.TypeHttpAcces.HttpAcces_ConnexionEspace
        ) {
        }
        const lResult =
          this.genre ===
          Enumere_Acces_1.TypeHttpAcces.HttpAcces_ConnexionJetonEspace;
        return lResult;
      }
    }
    exports.ObjetAcces = ObjetAcces;
  },
  fn: 'objetacces.js',
});