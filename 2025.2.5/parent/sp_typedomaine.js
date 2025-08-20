IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeDomaine = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_ChampsJSON_1 = require('Enumere_ChampsJSON');
    const ObjetElement_1 = require('ObjetElement');
    const TypeHttpVariable_1 = require('TypeHttpVariable');
    const ObjetListeElements_1 = require('ObjetListeElements');
    var ValeurSemaine;
    (function (ValeurSemaine) {
      ValeurSemaine['plein'] = '1';
      ValeurSemaine['vide'] = '0';
    })(ValeurSemaine || (ValeurSemaine = {}));
    class TypeDomaine {
      constructor(AValeurParDefaut, ANombreValeurs) {
        this.nombreValeurs = ANombreValeurs
          ? ANombreValeurs
          : TypeDomaine.C_MaxDomaineCycle;
        AValeurParDefaut =
          AValeurParDefaut === null ||
          AValeurParDefaut === undefined ||
          AValeurParDefaut === ''
            ? '[]'
            : AValeurParDefaut;
        this.Domaine = this._getDomaine(AValeurParDefaut, this.nombreValeurs);
        this.cache = {};
      }
      strToDomaine(aChaine, aNombreValeurs) {
        if (
          !(
            aChaine.charAt(0) === '[' &&
            aChaine.charAt(aChaine.length - 1) === ']'
          )
        ) {
          const lTab = aChaine.split('');
          if (aNombreValeurs !== null && aNombreValeurs >= 0) {
            lTab.length = aNombreValeurs;
          }
          return lTab.map((aVal) =>
            aVal === ValeurSemaine.plein
              ? ValeurSemaine.plein
              : ValeurSemaine.vide,
          );
        }
        aChaine = aChaine.substring(1, aChaine.length - 1);
        const R = new Array(
          aNombreValeurs !== TypeDomaine.CTailleOuverte ? aNombreValeurs : 0,
        );
        const T1 = aChaine.split(',');
        for (let I = 0; I < T1.length; I++) {
          const T2 = T1[I].split('..');
          const V1 = parseInt(T2[0]);
          const V2 = T2.length === 1 ? V1 : parseInt(T2[1]);
          for (let J = V1; J <= V2; J++) {
            R[J - 1] = ValeurSemaine.plein;
          }
        }
        if (this.nombreValeurs !== TypeDomaine.CTailleOuverte) {
          this.nombreValeurs = R.length;
        }
        return R;
      }
      toString() {
        let S = '',
          N = 0;
        for (let I = 0; I <= this.Domaine.length; I++) {
          if (this.Domaine[I] === ValeurSemaine.plein) {
            N++;
          } else if (N > 0) {
            if (S.length) {
              S += ',';
            }
            if (N > 1) {
              S += I + 1 - N + '..';
            }
            S += I;
            N = 0;
          }
        }
        return '[' + S + ']';
      }
      vider() {
        this.cache = {};
        this.setValeur(false, 1, this.getTaille());
        return this;
      }
      estVide() {
        return this.getNbrValeurs(true) === 0;
      }
      setValeur(AValeur, ADeb, AFin) {
        if (
          ADeb > this.getTaille() &&
          this.nombreValeurs !== TypeDomaine.CTailleOuverte
        ) {
          return;
        }
        this.cache = {};
        if (this.nombreValeurs !== TypeDomaine.CTailleOuverte) {
          ADeb = Math.borner(ADeb, 1, this.getTaille());
          AFin = Math.borner(
            AFin === null || AFin === undefined ? ADeb : AFin,
            1,
            this.getTaille(),
          );
        } else {
          ADeb = Math.max(ADeb, 1);
          AFin =
            AFin === null || AFin === undefined ? ADeb : Math.max(ADeb, AFin);
        }
        for (let I = ADeb - 1; I < AFin; I++) {
          this.Domaine[I] = AValeur ? ValeurSemaine.plein : ValeurSemaine.vide;
        }
        return this;
      }
      getValeur(APos) {
        return this.Domaine[APos - 1] === ValeurSemaine.plein;
      }
      getPremierePosition(aValeur) {
        for (let I = 0; I < this.Domaine.length; I++) {
          const lValeur =
            this.Domaine[I] === null || this.Domaine[I] === undefined
              ? ValeurSemaine.vide
              : this.Domaine[I];
          if (
            lValeur ===
            (aValeur === false ? ValeurSemaine.vide : ValeurSemaine.plein)
          ) {
            return I + 1;
          }
        }
        return -1;
      }
      enListeDomainesContinues() {
        const lResult = new ObjetListeElements_1.ObjetListeElements();
        let lValeurPrecedente;
        let lPeriode = new ObjetElement_1.ObjetElement('');
        for (let I = 0; I < this.Domaine.length; I++) {
          const lValeur =
            this.Domaine[I] === null || this.Domaine[I] === undefined
              ? ValeurSemaine.vide
              : this.Domaine[I];
          if (lValeur === ValeurSemaine.plein) {
            if (lPeriode.debut === undefined) {
              lPeriode.debut = I + 1;
            }
            if (
              lValeurPrecedente === ValeurSemaine.plein ||
              lPeriode.fin === undefined
            ) {
              lPeriode.fin = I + 1;
            }
          } else {
            if (lPeriode.debut !== undefined) {
              lResult.addElement(lPeriode);
            }
            lPeriode = new ObjetElement_1.ObjetElement('');
          }
          lValeurPrecedente = lValeur;
        }
        if (lPeriode.debut !== undefined) {
          lResult.addElement(lPeriode);
        }
        return lResult;
      }
      getDernierePosition(aValeur) {
        for (let I = this.Domaine.length - 1; I >= 0; I--) {
          const lValeur =
            this.Domaine[I] === null || this.Domaine[I] === undefined
              ? ValeurSemaine.vide
              : this.Domaine[I];
          if (
            lValeur ===
            (aValeur === false ? ValeurSemaine.vide : ValeurSemaine.plein)
          ) {
            return I + 1;
          }
        }
        return -1;
      }
      getNbrValeurs(AValeur) {
        let N = 0;
        const LValeur =
          AValeur || AValeur === null || AValeur === undefined
            ? ValeurSemaine.plein
            : ValeurSemaine.vide;
        if (this.cache['GetNbrValeurs_' + LValeur] !== undefined) {
          return this.cache['GetNbrValeurs_' + LValeur];
        }
        for (let I = 0; I < this.Domaine.length; I++) {
          if (this.Domaine[I] === LValeur) {
            N++;
          }
        }
        this.cache['GetNbrValeurs_' + LValeur] = N;
        return N;
      }
      estUnNombre() {
        return this.getNbrValeurs(true) <= 1;
      }
      getNombre() {
        return this.getNbrValeurs(true) === 1
          ? this.getPremierePosition(true)
          : 0;
      }
      getTaille() {
        return this.Domaine.length;
      }
      getIntersection(aDomaine) {
        if (!aDomaine) {
          return MethodesObjet_1.MethodesObjet.dupliquer(this);
        }
        const lTaille = Math.min(this.getTaille(), aDomaine.getTaille());
        const lIntersect = new TypeDomaine(null, lTaille);
        for (let I = 1; I <= lTaille; I++) {
          if (this.getValeur(I) && aDomaine.getValeur(I)) {
            lIntersect.setValeur(true, I);
          }
        }
        return lIntersect;
      }
      getInversion() {
        const lTaille = this.getTaille();
        const lInversion = new TypeDomaine(null, lTaille);
        for (let I = 1; I <= lTaille; I++) {
          lInversion.setValeur(!this.getValeur(I), I);
        }
        return lInversion;
      }
      getDomaineSoustraction(aDomaineASoustraire) {
        const lDomaine = MethodesObjet_1.MethodesObjet.dupliquer(this);
        if (
          !aDomaineASoustraire ||
          !aDomaineASoustraire.getTaille ||
          !aDomaineASoustraire.getValeur
        ) {
          return lDomaine;
        }
        for (
          let I = 1, lTaille = aDomaineASoustraire.getTaille();
          I <= lTaille;
          I++
        ) {
          if (aDomaineASoustraire.getValeur(I)) {
            lDomaine.setValeur(false, I);
          }
        }
        return lDomaine;
      }
      getDomaineUnion(aDomaineAAjouter) {
        const lDomaine = MethodesObjet_1.MethodesObjet.dupliquer(this);
        if (!aDomaineAAjouter) {
          return lDomaine;
        }
        for (
          let I = 1, lTaille = aDomaineAAjouter.getTaille();
          I <= lTaille;
          I++
        ) {
          if (aDomaineAAjouter.getValeur(I)) {
            lDomaine.setValeur(true, I);
          }
        }
        return lDomaine;
      }
      egal(aDomaine) {
        if (!aDomaine || !aDomaine.getTaille || !aDomaine.getValeur) {
          return false;
        }
        for (let I = 1, lTaille = this.getTaille(); I <= lTaille; I++) {
          if (this.getValeur(I) !== aDomaine.getValeur(I)) {
            return false;
          }
        }
        return true;
      }
      getSemaines() {
        if (this.cache['getSemaines'] !== undefined) {
          return this.cache['getSemaines'];
        }
        const lTaille = this.getTaille();
        const lSemaines = [];
        for (let I = 1; I <= lTaille; I++) {
          if (this.getValeur(I)) {
            lSemaines.push(I);
          }
        }
        this.cache['getSemaines'] = lSemaines;
        return lSemaines;
      }
      dupliquer() {
        const lDomaine = new TypeDomaine(null, this.nombreValeurs);
        lDomaine.Domaine = [].concat(this.Domaine);
        return lDomaine;
      }
      toJSON() {
        const lJSON = {};
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type] =
          TypeHttpVariable_1.TypeHttpVariable.TypeHttpDomaine;
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur] = this.toString();
        return lJSON;
      }
      _getDomaine(AValeurParDefaut, ANombreValeurs) {
        const lType = typeof AValeurParDefaut;
        let D;
        if (lType !== 'object' && lType !== 'string') {
          D = new Array(
            1 +
              (ANombreValeurs === null || ANombreValeurs === undefined
                ? TypeDomaine.C_MaxDomaineCycle
                : ANombreValeurs),
          )
            .join(
              lType === 'boolean' && AValeurParDefaut
                ? ValeurSemaine.plein
                : ValeurSemaine.vide,
            )
            .split('');
        }
        switch (lType) {
          case 'number':
            D[AValeurParDefaut - 1] = ValeurSemaine.plein;
            return D;
          case 'string':
            return this.strToDomaine(AValeurParDefaut, ANombreValeurs);
          case 'boolean':
            return D;
          default:
            return D;
        }
      }
    }
    exports.TypeDomaine = TypeDomaine;
    TypeDomaine.CTailleOuverte = -1;
    TypeDomaine.C_MaxDomaineCycle = 62;
  },
  fn: 'typedomaine.js',
});