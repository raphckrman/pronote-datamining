IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetElement = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_Etat_1 = require('Enumere_Etat');
    let _numeroCreation = -1000;
    class ObjetElement {
      constructor(aLibelle, aNumero, aGenre, aPosition, aActif) {
        this.Libelle = aLibelle;
        this.Numero = aNumero;
        this.Genre = aGenre;
        this.Position = aPosition;
        this.Actif = aActif === null || aActif === undefined ? true : aActif;
        this.Etat = Enumere_Etat_1.EGenreEtat.Aucun;
        if (
          arguments.length === 1 &&
          MethodesObjet_1.MethodesObjet.isObject(aLibelle)
        ) {
          this.Libelle = undefined;
          Object.assign(this, aLibelle);
        }
      }
      static create(aProps) {
        const lElement = new ObjetElement();
        if (aProps && MethodesObjet_1.MethodesObjet.isObject(aProps)) {
          Object.assign(lElement, aProps);
        }
        return lElement;
      }
      toJSON() {
        return this._toJSON(this);
      }
      toJSONAll() {
        const lJSON = this._toJSON(this);
        return this._propToJSONHorsFormat(this, lJSON);
      }
      fromJSON(aJSON) {
        if (!aJSON) {
          return this;
        }
        const lJSON = aJSON;
        this.Libelle = lJSON[ObjetElement.const_JSON.libelle.JSON] || '';
        this.Numero =
          lJSON[ObjetElement.const_JSON.numero.JSON] === '0'
            ? 0
            : lJSON[ObjetElement.const_JSON.numero.JSON];
        this.Genre = lJSON[ObjetElement.const_JSON.genre.JSON];
        this.Position = lJSON[ObjetElement.const_JSON.position.JSON];
        if (lJSON[ObjetElement.const_JSON.actif.JSON] !== undefined) {
          this.Actif = lJSON[ObjetElement.const_JSON.actif.JSON];
        }
        return this;
      }
      copieJSON(aJSON) {
        for (const lProp in aJSON) {
          if (
            lProp !== ObjetElement.const_JSON.libelle.JSON &&
            lProp !== ObjetElement.const_JSON.numero.JSON &&
            lProp !== ObjetElement.const_JSON.genre.JSON &&
            lProp !== ObjetElement.const_JSON.position.JSON
          ) {
            this[lProp] = aJSON[lProp];
          }
        }
        return this;
      }
      copieToJSON(aJSON) {
        return this._propToJSONHorsFormat(this, aJSON);
      }
      getLibelle() {
        return this.Libelle;
      }
      getNumero() {
        return this.Numero;
      }
      getGenre() {
        return this.Genre;
      }
      getActif() {
        return this.Actif;
      }
      getPosition() {
        return this.Position;
      }
      getEtat() {
        return this.Etat;
      }
      getDonnees() {
        return this.donnees;
      }
      getCleHash() {
        return `${this.Numero}_${this.Genre}`;
      }
      existeNumero() {
        const lNumero = this.getNumero();
        if (
          lNumero &&
          lNumero !== 0 &&
          MethodesObjet_1.MethodesObjet.isNumber(lNumero)
        ) {
          return true;
        }
        if (typeof lNumero === 'string' && lNumero.match) {
          return !!lNumero.match(
            new RegExp(`^${ObjetElement.regexNumeroExiste}$`),
          );
        }
        return false;
      }
      existe() {
        return this.getEtat() !== Enumere_Etat_1.EGenreEtat.Suppression;
      }
      pourValidation() {
        return this._validationSaisie || false;
      }
      setLibelle(aLibelle) {
        this.Libelle = aLibelle;
      }
      setNumero(aNumero) {
        this.Numero = aNumero;
      }
      setActif(aActif) {
        this.Actif = aActif;
      }
      setDonnees(aDonnees) {
        this.donnees = aDonnees;
      }
      getGenreTable() {
        const lNumero = this.getNumero();
        if (typeof lNumero === 'string') {
          const lIndex = lNumero.indexOf(
            ObjetElement.const_JSON.separateurTableNumero,
          );
          if (lIndex > 0) {
            const lGenreTable = parseInt(lNumero.substring(0, lIndex), 10);
            if (MethodesObjet_1.MethodesObjet.isNumber(lGenreTable)) {
              return lGenreTable;
            }
          }
        }
        return 0;
      }
      egalParNumeroEtGenre(aNumero, aGenre, aAvecExiste) {
        if (
          (aNumero === null || aNumero === undefined) &&
          (aGenre === null || aGenre === undefined)
        ) {
          return false;
        }
        return (
          (!aAvecExiste || this.existe()) &&
          (aNumero === null ||
            aNumero === undefined ||
            this.getNumero() === aNumero) &&
          (aGenre === null ||
            aGenre === undefined ||
            this.getGenre() === aGenre)
        );
      }
      getCle() {
        return '_' + this.Genre + '_' + this.Numero;
      }
      setEtat(AEtat) {
        if (this.Etat === AEtat) {
          return this;
        }
        switch (AEtat) {
          case Enumere_Etat_1.EGenreEtat.Aucun:
            delete this._validationSaisie;
            this.Etat = Enumere_Etat_1.EGenreEtat.Aucun;
            break;
          case Enumere_Etat_1.EGenreEtat.Creation:
            if (this.Etat === Enumere_Etat_1.EGenreEtat.Aucun) {
              this._validationSaisie = true;
              this.Etat = Enumere_Etat_1.EGenreEtat.Creation;
              if (this.Numero === null || this.Numero === undefined) {
                this.Numero = ObjetElement.getNumeroCreation();
              }
            }
            break;
          case Enumere_Etat_1.EGenreEtat.Modification:
            if (
              this.Etat === Enumere_Etat_1.EGenreEtat.Aucun ||
              this.Etat === Enumere_Etat_1.EGenreEtat.FilsModification
            ) {
              this._validationSaisie = true;
              this.Etat =
                this.Numero !== 0 &&
                this.Numero !== null &&
                this.Numero !== undefined
                  ? Enumere_Etat_1.EGenreEtat.Modification
                  : Enumere_Etat_1.EGenreEtat.Creation;
              if (this.Numero === null || this.Numero === undefined) {
                this.Numero = ObjetElement.getNumeroCreation();
              }
            }
            break;
          case Enumere_Etat_1.EGenreEtat.Suppression:
            if (this.Etat === Enumere_Etat_1.EGenreEtat.Creation) {
              delete this._validationSaisie;
            } else {
              this._validationSaisie = true;
            }
            this.Etat = Enumere_Etat_1.EGenreEtat.Suppression;
            break;
          case Enumere_Etat_1.EGenreEtat.FilsModification:
            if (this.Etat === Enumere_Etat_1.EGenreEtat.Aucun) {
              this._validationSaisie = true;
              this.Etat = Enumere_Etat_1.EGenreEtat.FilsModification;
            }
            break;
        }
        return this;
      }
      afficher() {}
      static getNumeroCreation() {
        _numeroCreation += -1;
        return _numeroCreation;
      }
      _toJSON(aElement) {
        const lNumero = aElement.getNumero(),
          lGenre = aElement.getGenre(),
          lLibelle = aElement.getLibelle();
        const lJSON = {};
        lJSON[ObjetElement.const_JSON.numero.JSON] = lNumero;
        if (lGenre !== undefined && lGenre !== null) {
          lJSON[ObjetElement.const_JSON.genre.JSON] = lGenre;
        }
        if (lLibelle) {
          lJSON[ObjetElement.const_JSON.libelle.JSON] = lLibelle;
        }
        if (aElement.Etat) {
          lJSON[ObjetElement.const_JSON.etat.JSON] = aElement.Etat;
        }
        return lJSON;
      }
      _propToJSONHorsFormat(aSource, aCible) {
        let lProp;
        const lCible = aCible || {};
        const lKeys = Object.keys(aSource);
        for (let i = 0; i < lKeys.length; i++) {
          lProp = lKeys[i];
          if (
            aSource[lProp] !== undefined &&
            !MethodesObjet_1.MethodesObjet.isFunction(aSource[lProp]) &&
            lProp !== ObjetElement.const_JSON.libelle.champ &&
            lProp !== ObjetElement.const_JSON.numero.champ &&
            lProp !== ObjetElement.const_JSON.genre.champ &&
            lProp !== ObjetElement.const_JSON.position.champ &&
            lProp !== ObjetElement.const_JSON.etat.champ
          ) {
            lCible[lProp] = aSource[lProp];
          }
        }
        return lCible;
      }
    }
    exports.ObjetElement = ObjetElement;
    ObjetElement.const_JSON = {
      numero: { JSON: 'N', champ: 'Numero' },
      libelle: { JSON: 'L', champ: 'Libelle' },
      genre: { JSON: 'G', champ: 'Genre' },
      position: { JSON: 'P', champ: 'Position' },
      etat: { JSON: 'E', champ: 'Etat' },
      actif: { JSON: 'A', champ: 'Actif' },
      separateurTableNumero: '#',
    };
    ObjetElement.regexNumeroExiste = `[0-9]{1,3}${ObjetElement.const_JSON.separateurTableNumero}[a-zA-Z0-9\\-_]{43}`;
    ObjetElement.regexCaptureNumero = `(0|${ObjetElement.regexNumeroExiste})`;
  },
  fn: 'objetelement.js',
});