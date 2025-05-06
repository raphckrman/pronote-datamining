IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TypeNote = void 0;
    const Enumere_ChampsJSON_1 = require('Enumere_ChampsJSON');
    const TypeHttpVariable_1 = require('TypeHttpVariable');
    const Enumere_Annotation_1 = require('Enumere_Annotation');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ToucheClavier_1 = require('ToucheClavier');
    const ObjetChaine_1 = require('ObjetChaine');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetTri_1 = require('ObjetTri');
    class TypeNote {
      constructor(aParametre, N) {
        this.note = '0.00';
        this.valeur = 0.0;
        this.genre = Enumere_Annotation_1.EGenreAnnotation.note;
        this.bareme = 0.0;
        if (typeof aParametre === 'string') {
          this.genre = this.getGenreNote(aParametre);
          this.valeur = this.noteToValeur(aParametre);
          this.note = this.estUneAnnotation()
            ? this.getChaineAnnotationDeGenre(this.genre)
            : this.valeurToNote(this.valeur, N);
          if (
            this.genre === Enumere_Annotation_1.EGenreAnnotation.absentZero ||
            this.genre === Enumere_Annotation_1.EGenreAnnotation.nonRenduZero
          ) {
            this.valeur = 0.0;
          } else if (
            this.genre === Enumere_Annotation_1.EGenreAnnotation.felicitations
          ) {
            const lAvecFelicitationAutorisee = TypeNote.estAnnotationPermise(
              Enumere_Annotation_1.EGenreAnnotation.felicitations,
            );
            if (lAvecFelicitationAutorisee) {
              this.bareme = this.getBaremeNote(aParametre);
              this.note = this.valeurToNote(this.bareme, N) + this.note;
              try {
                const lSurplusBareme =
                  TypeNote.getValeurSurplusBaremeAAppliquer(this.bareme);
                this.valeur = this.bareme + lSurplusBareme;
              } catch (error) {}
            } else {
              this.genre = Enumere_Annotation_1.EGenreAnnotation.note;
              this.bareme = this.getBaremeNote(aParametre);
              this.note = this.valeurToNote(this.bareme, N);
              this.valeur = this.bareme;
            }
          }
          this.chaine = aParametre;
        } else if (typeof aParametre === 'number') {
          this.note = this.valeurToNote(aParametre, N);
          this.valeur = aParametre;
          this.genre = Enumere_Annotation_1.EGenreAnnotation.note;
        }
      }
      getCaractereAnnotation(aArrayGenresNote) {
        const lCaractereAnnotation = {};
        for (const x in aArrayGenresNote) {
          switch (aArrayGenresNote[x]) {
            case Enumere_Annotation_1.EGenreAnnotation.absent:
              lCaractereAnnotation.Absent =
                'a';
              break;
            case Enumere_Annotation_1.EGenreAnnotation.dispense:
              lCaractereAnnotation.Dispense =
                'd';
              break;
            case Enumere_Annotation_1.EGenreAnnotation.nonNote:
              lCaractereAnnotation.NonNote =
                'n';
              break;
            case Enumere_Annotation_1.EGenreAnnotation.inapte:
              lCaractereAnnotation.Inapte =
                'i';
              break;
            case Enumere_Annotation_1.EGenreAnnotation.nonRendu:
              lCaractereAnnotation.NonRendu =
                'r';
              break;
            case Enumere_Annotation_1.EGenreAnnotation.absentZero:
              lCaractereAnnotation.AbsentZero =
                'z';
              break;
            case Enumere_Annotation_1.EGenreAnnotation.nonRenduZero:
              lCaractereAnnotation.NonRenduZero =
                'w';
              break;
            case Enumere_Annotation_1.EGenreAnnotation.felicitations:
              lCaractereAnnotation.Felicitations =
                '+';
              break;
          }
        }
        return lCaractereAnnotation;
      }
      getGenreNote(aChaine) {
        if (aChaine.split('|').length >= 2) {
          return parseInt(aChaine.split('|')[1]);
        }
        const lTabNotations = _getTableauNotations();
        for (const I in lTabNotations) {
          if (lTabNotations[I].toLowerCase() === aChaine.toLowerCase()) {
            return parseInt(I);
          } else if (
            parseInt(I) === Enumere_Annotation_1.EGenreAnnotation.felicitations
          ) {
            const lObjCaracteresAnnotation = this.getCaractereAnnotation([
              Enumere_Annotation_1.EGenreAnnotation.felicitations,
            ]);
            if (aChaine.indexOf(lObjCaracteresAnnotation.Felicitations) > 0) {
              return Enumere_Annotation_1.EGenreAnnotation.felicitations;
            }
          }
        }
        return Enumere_Annotation_1.EGenreAnnotation.note;
      }
      getBaremeNote(aChaine) {
        let lStrBareme = aChaine.split('|')[2];
        if (!!lStrBareme) {
          lStrBareme = lStrBareme.replace(',', '.');
        }
        return parseFloat(lStrBareme);
      }
      getNote() {
        return this.note;
      }
      getValeur() {
        return this.valeur;
      }
      getGenre() {
        return this.genre;
      }
      estUneValeur() {
        return !isNaN(this.valeur);
      }
      toString() {
        return this.note;
      }
      getNoteSansDecimaleForcee() {
        if (
          this.genre === Enumere_Annotation_1.EGenreAnnotation.note &&
          !isNaN(this.valeur)
        ) {
          return this.valeur.toString().replace('.', ',');
        }
        return this.getNote();
      }
      toStr() {
        let str;
        if (this.genre === Enumere_Annotation_1.EGenreAnnotation.note) {
          str = this.note;
        } else {
          str = '|' + this.genre;
          if (
            this.genre ===
              Enumere_Annotation_1.EGenreAnnotation.felicitations &&
            this.bareme !== null &&
            this.bareme !== undefined
          ) {
            str += '|' + this.bareme;
          }
        }
        return str;
      }
      toJSON() {
        const lJSON = {};
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type] =
          TypeHttpVariable_1.TypeHttpVariable.TypeHttpNote;
        lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur] = this.toStr();
        return lJSON;
      }
      noteToValeur(aStrNote) {
        return parseFloat(aStrNote.replace(',', '.'));
      }
      valeurToNote(aValeur, N) {
        let lValeurNb;
        if (typeof aValeur === 'number') {
          if (isNaN(aValeur)) {
            return '';
          }
          lValeurNb = aValeur;
        } else {
          lValeurNb = parseFloat(aValeur);
        }
        N = N === null || N === undefined ? TypeNote.decimalNotation : N;
        return ('' + lValeurNb.toFixed(N)).replace('.', ',');
      }
      estUneNoteVide() {
        return this.note === '';
      }
      estUneAnnotation() {
        return this.genre !== Enumere_Annotation_1.EGenreAnnotation.note;
      }
      estVide() {
        return this.note === '' && !this.estUneValeur();
      }
      estUneNoteValide(aNoteMin, aNoteMax, aAvecNotationSpecifique, aAvecVide) {
        if (this.estUneNoteVide()) {
          return aAvecVide === true;
        }
        if (aAvecNotationSpecifique) {
          if (this.genre !== Enumere_Annotation_1.EGenreAnnotation.note) {
            return true;
          }
        }
        let lChaine = this.note.replace(/\./g, ',');
        if (lChaine.indexOf(',') === -1) {
          lChaine += ',';
        }
        const lPosVirgule = lChaine.indexOf(',');
        const lNbrVirgule = lChaine.split(',').length - 1;
        const lPosMoins = lChaine.indexOf('-');
        const lPosVirguleMax = Math.max(
          ('' + parseInt(aNoteMin.toString())).length,
          ('' + parseInt(aNoteMax.toString())).length,
        );
        return (
          lPosMoins <= 0 &&
          lPosVirgule <= lPosVirguleMax &&
          lChaine.length - (lPosVirgule + 1) <= TypeNote.decimalNotation &&
          lNbrVirgule <= 1 &&
          this.valeur >= aNoteMin.getValeur() &&
          this.valeur <= aNoteMax.getValeur()
        );
      }
      getNoteEntier() {
        return this.estUneValeur()
          ? this.getNote().enleverZero()
          : this.getNote();
      }
      getBaremeEntier() {
        return '/' + this.getNote().enleverZero();
      }
      getBaremeEntierSansSlash() {
        return this.getNote().enleverZero();
      }
      getCoefficientEntier() {
        return this.getNote().enleverZero();
      }
      estBaremeParDefaut() {
        return TypeNote.baremeNotation
          ? this.getValeur() === TypeNote.baremeNotation.getValeur()
          : false;
      }
      estCoefficientParDefaut() {
        return this.valeur === 1;
      }
      getCoefficient() {
        if (this.estUneValeur()) {
          return this.getNote();
        } else {
          return 'xx.xx';
        }
      }
      getChaineAnnotationDeCaractere(aCaractere) {
        const lAnnotation = TypeNote.getGenreAnnotationDeRaccourci(aCaractere);
        if (!!lAnnotation) {
          return _getTableauNotations()[lAnnotation];
        }
      }
      getChaineAnnotationDeGenre(aGenre) {
        return _getTableauNotations()[aGenre];
      }
      egal(aNote) {
        return !!aNote && this.toStr() === aNote.toStr();
      }
      dupliquer() {
        const lNote = new TypeNote();
        lNote.note = this.note;
        lNote.valeur = this.valeur;
        lNote.genre = this.genre;
        return lNote;
      }
      static getValeurSurplusBaremeAAppliquer(aValeurBareme) {
        let lSurplusBaremeCalcule = 0;
        if (
          !!aValeurBareme &&
          !!TypeNote.surplusBareme &&
          TypeNote.surplusBareme.getValeur()
        ) {
          const lBaremeParDefaut = TypeNote.baremeNotation;
          if (
            !!lBaremeParDefaut &&
            aValeurBareme !== lBaremeParDefaut.getValeur()
          ) {
            lSurplusBaremeCalcule =
              (TypeNote.surplusBareme.getValeur() * aValeurBareme) /
              lBaremeParDefaut.getValeur();
          } else {
            lSurplusBaremeCalcule = TypeNote.surplusBareme.getValeur();
          }
        }
        return lSurplusBaremeCalcule;
      }
      static estAnnotationPermise(aGenreAnnotation) {
        const lListeAutorisee = TypeNote.listeAnnotationsAutorisees;
        return (
          !!aGenreAnnotation &&
          (!lListeAutorisee || lListeAutorisee.indexOf(aGenreAnnotation) !== -1)
        );
      }
      static avecVirgule() {
        return TypeNote.decimalNotation > 0;
      }
      static getGenreAnnotationDeRaccourci(aCaractere) {
        let lGenreAnnotation = null;
        if (!!aCaractere && aCaractere.toLowerCase) {
          switch (aCaractere.toLowerCase()) {
            case 'a':
              lGenreAnnotation = Enumere_Annotation_1.EGenreAnnotation.absent;
              break;
            case 'd':
              lGenreAnnotation = Enumere_Annotation_1.EGenreAnnotation.dispense;
              break;
            case 'n':
              lGenreAnnotation = Enumere_Annotation_1.EGenreAnnotation.nonNote;
              break;
            case 'i':
              lGenreAnnotation = Enumere_Annotation_1.EGenreAnnotation.inapte;
              break;
            case 'r':
              lGenreAnnotation = Enumere_Annotation_1.EGenreAnnotation.nonRendu;
              break;
            case 'z':
              lGenreAnnotation =
                Enumere_Annotation_1.EGenreAnnotation.absentZero;
              break;
            case 'w':
              lGenreAnnotation =
                Enumere_Annotation_1.EGenreAnnotation.nonRenduZero;
              break;
            case '+':
              lGenreAnnotation =
                Enumere_Annotation_1.EGenreAnnotation.felicitations;
              break;
          }
        }
        return lGenreAnnotation;
      }
      static estCaractereNote(
        aChar,
        aAvecLettre,
        aAvecVirgule,
        aAvecMoins,
        aCaractereAnnotation,
      ) {
        aAvecLettre =
          aAvecLettre === null || aAvecLettre === undefined
            ? true
            : aAvecLettre;
        aAvecVirgule =
          aAvecVirgule === null || aAvecVirgule === undefined
            ? true
            : aAvecVirgule;
        aAvecMoins =
          aAvecMoins === null || aAvecMoins === undefined ? true : aAvecMoins;
        aCaractereAnnotation =
          aCaractereAnnotation === null || aCaractereAnnotation === undefined
            ? ObjetTraduction_1.GTraductions.getValeur(
                'TypeNote.CaractereAnnotation',
              )
            : aCaractereAnnotation;
        let lRegExp = '0-9';
        if (aAvecLettre) {
          let lCarAnnot = '';
          for (const x in aCaractereAnnotation) {
            if (
              aCaractereAnnotation[x].toLowerCase &&
              aCaractereAnnotation[x] !== ' '
            ) {
              lCarAnnot += aCaractereAnnotation[x].toLowerCase();
            }
          }
          lRegExp += lCarAnnot + lCarAnnot.toUpperCase();
        }
        if (aAvecVirgule) {
          lRegExp += '.,';
        }
        if (aAvecMoins) {
          lRegExp += '-';
        }
        return ToucheClavier_1.ToucheClavierUtil.estCaractere(aChar, lRegExp);
      }
      static formatStrToNote(aChaine, aOptions = {}) {
        const lNote = new TypeNote(aChaine);
        let lValeurMin = 0;
        if (typeof aOptions.min === 'function') {
          lValeurMin = aOptions.min();
        } else if (!!aOptions.min) {
          lValeurMin = aOptions.min;
        }
        if (lNote.getGenre() > 0) {
          return aOptions.avecAnnotation ? lNote : null;
        }
        if (aChaine === '') {
          return aOptions.sansNotePossible ? lNote : null;
        }
        if (aChaine === ',' || aChaine === '.') {
          return aOptions && aOptions.avecVirgule && aOptions.sansNotePossible
            ? lNote
            : null;
        }
        if (aChaine === '-') {
          return lValeurMin < 0 ? lNote : null;
        }
        if (lNote.estUneValeur()) {
          const lTest =
            '0-9' +
            (aOptions.avecVirgule ? ',.' : '') +
            (lValeurMin < 0 ? '-' : '');
          if (new RegExp('^[' + lTest + ']+$').test(aChaine)) {
            return lNote;
          }
        }
        return null;
      }
      static validerNote(aValeur, aOptions = {}) {
        const lDefaultOptions = {
          avecVirgule: true,
          afficherAvecVirgule: true,
          avecAnnotation: true,
          sansNotePossible: true,
          min: 0,
          max: 100,
          titreMessageMinMax: '',
          messageMinMax:
            'La valeur doit être comprise entre %s et %s',
        };
        const lOptions = $.extend(lDefaultOptions, aOptions);
        if (typeof aValeur !== 'string') {
          aValeur = String(aValeur);
        }
        if (!lOptions.avecVirgule) {
          lOptions.afficherAvecVirgule = false;
        }
        let lResult;
        let lValueTemp = aValeur;
        if (lValueTemp.search(/^[0-9]*(,|\.)[0-9]+/) === 0) {
          const lRegExp = new RegExp(
            '^([0-9]*(,|\\.)[0-9]{' + TypeNote.decimalNotation + '}).*$',
          );
          lValueTemp = lValueTemp.replace(lRegExp, '$1');
        }
        const lNote = TypeNote.formatStrToNote(lValueTemp, lOptions);
        let lValeurMin;
        if (typeof lOptions.min === 'function') {
          lValeurMin = lOptions.min();
        } else {
          lValeurMin = lOptions.min;
        }
        let lValeurMax;
        if (typeof lOptions.max === 'function') {
          lValeurMax = lOptions.max();
        } else {
          lValeurMax = lOptions.max;
        }
        const lNoteMin = new TypeNote(lValeurMin),
          lNoteMax = new TypeNote(lValeurMax);
        if (
          !lNote ||
          !lNote.estUneNoteValide(
            lNoteMin,
            lNoteMax,
            lOptions.avecAnnotation,
            lOptions.sansNotePossible,
          ) ||
          lValueTemp === '-'
        ) {
          const lMessage = ObjetChaine_1.GChaine.format(
            lOptions.messageMinMax,
            [
              lOptions.afficherAvecVirgule
                ? lNoteMin.getNote()
                : lNoteMin.getNoteSansDecimaleForcee(),
              lOptions.afficherAvecVirgule
                ? lNoteMax.getNote()
                : lNoteMax.getNoteSansDecimaleForcee(),
            ],
          );
          lResult = {
            estValide: false,
            titre: lOptions.titreMessageMinMax,
            message: lMessage,
          };
        } else {
          lResult = { estValide: true, note: lNote };
        }
        return lResult;
      }
      static getTrisDefaut(aGetNote, aGenreTri) {
        if (!MethodesObjet_1.MethodesObjet.isFunction(aGetNote)) {
          return [];
        }
        return [
          ObjetTri_1.ObjetTri.init((D) => {
            const lNote = aGetNote(D);
            if (
              lNote &&
              (lNote.genre === Enumere_Annotation_1.EGenreAnnotation.note ||
                lNote.genre ===
                  Enumere_Annotation_1.EGenreAnnotation.felicitations) &&
              lNote.estUneValeur()
            ) {
              return lNote.valeur;
            }
            return -1000;
          }, aGenreTri),
          ObjetTri_1.ObjetTri.init((D) => {
            const lNote = aGetNote(D);
            if (lNote) {
              return lNote.genre === Enumere_Annotation_1.EGenreAnnotation.note
                ? -100
                : lNote.genre;
            }
            return -1000;
          }, aGenreTri),
        ];
      }
    }
    exports.TypeNote = TypeNote;
    TypeNote.decimalNotation = 2;
    TypeNote.baremeNotation = null;
    TypeNote.surplusBareme = null;
    TypeNote.listeAnnotationsAutorisees = null;
    let lTableauNotations = null;
    function _getTableauNotations() {
      if (!lTableauNotations) {
        lTableauNotations = [
          '',
          'Abs',
          'Disp',
          'N.Not',
          'Inap',
          'N.Rdu',
          'Abs' + '*',
          'N.Rdu' + '*',
          '+',
        ];
      }
      return lTableauNotations;
    }
  },
  fn: 'typenote.js',
});