IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetEtatUtilisateurCP = void 0;
    const Invocateur_1 = require('Invocateur');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const ThemesCouleurs_1 = require('ThemesCouleurs');
    global.GEtatUtilisateur = null;
    class ObjetEtatUtilisateurCP {
      constructor() {
        this.EtatSaisie = false;
        this.codePINFixe = false;
        this.IdCourant = '';
        this.reglesSaisieMotDePasse = {
          min: 0,
          max: 0,
          regles: new TypeEnsembleNombre_1.TypeEnsembleNombre(),
          init: false,
        };
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.etatSaisie,
          this.setEtatSaisie.bind(this),
        );
      }
      get listeOnglets() {
        return this._listeOnglets;
      }
      set listeOnglets(aValeur) {
        this._listeOnglets = aValeur;
      }
      setEtatSaisie(aEtat) {
        this.EtatSaisie = aEtat;
      }
      estEspaceEleve() {
        return false;
      }
      estEspaceParent() {
        return false;
      }
      estEspacePourEleve() {
        return false;
      }
      estEspacePourProf() {
        return false;
      }
      avecImports() {
        return false;
      }
      avecFicheEtablissement() {
        return false;
      }
      estModeAccessible() {
        return false;
      }
      estAvecThemeAccessible() {
        return ThemesCouleurs_1.ThemesCouleurs.getModeAccessible();
      }
      getUtilisateur() {
        return null;
      }
      estEspaceAvecMembre() {
        return false;
      }
      avecPlusieursMembres() {
        return false;
      }
      getMembre() {
        return null;
      }
      setNumeroEleve(aNumeroMembre) {
        return null;
      }
      avecPageAccueil() {
        return false;
      }
      getNumeroGenreEspace() {
        return this.GenreEspace;
      }
      getGenreOnglet() {
        return null;
      }
      getLibelleLongOnglet() {
        return '';
      }
      setTriListe(aParams) {
        const lParams = Object.assign(
          {
            liste: null,
            tri: undefined,
            colonnesTriables: true,
            identifiant: 'id',
            onglet: '',
          },
          aParams,
        );
        if (
          !lParams.liste ||
          !lParams.liste.setOptionsListe ||
          !lParams.identifiant ||
          !lParams.colonnesTriables
        ) {
          return;
        }
        if (!this._trisListe_) {
          this._trisListe_ = {};
        }
        const lCle = lParams.onglet + '|' + lParams.identifiant;
        if (!this._trisListe_[lCle]) {
          this._trisListe_[lCle] = lParams.tri;
        }
        aParams.liste.setOptionsListe({
          colonnesTriables: lParams.colonnesTriables,
          numeroColonneTriDefaut: () => {
            return this._trisListe_[lCle];
          },
          evenementSurTri: (aColonnesTris) => {
            this._trisListe_[lCle] = aColonnesTris;
          },
        });
        return this;
      }
      setCodePINFixe(aVal) {
        this.codePINFixe = !!aVal;
      }
      getCodePINFixe() {
        return this.codePINFixe;
      }
      setReglesSaisieMotDePasse(aJSON) {
        if (aJSON && aJSON.reglesSaisieMDP) {
          $.extend(this.reglesSaisieMotDePasse, aJSON.reglesSaisieMDP);
          this.reglesSaisieMotDePasse.init = true;
        }
      }
      espacesAvecBoutonsTimeLine() {
        return true;
      }
      getUniquementNonLues() {
        if (
          this.uniquementNonLues !== null &&
          this.uniquementNonLues !== undefined
        ) {
          return this.uniquementNonLues;
        } else {
          return false;
        }
      }
      setUniquementNonLues(aBoolean) {
        this.uniquementNonLues = aBoolean;
      }
      avecCloudDisponibles() {
        return this.listeCloud && this.listeCloud.count() > 0;
      }
      avecGestionAppareilPhoto() {
        return (
          IE.estMobile &&
          !(GNavigateur.isAndroid && GApplication.estAppliMobile)
        );
      }
      getPageCourante() {
        return this.pageCourante;
      }
      setPageCourante(aInstancePage) {
        this.pageCourante = aInstancePage;
      }
      estAvecCodeCompetences() {
        return false;
      }
    }
    exports.ObjetEtatUtilisateurCP = ObjetEtatUtilisateurCP;
  },
  fn: 'objetetatutilisateurcp.js',
});