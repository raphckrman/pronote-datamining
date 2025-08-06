IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetListeElements = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const MethodesTableau_1 = require('MethodesTableau');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const Enumere_TriElement_1 = require('Enumere_TriElement');
    const ObjetTri_1 = require('ObjetTri');
    const ObjetElement_1 = require('ObjetElement');
    const ComparateurChaines_1 = require('ComparateurChaines');
    class ObjetListeElements {
      constructor(aElement) {
        this.ListeElements = [];
        this._tris = null;
        this.serialisateurJSON = null;
        this.vider();
        if (aElement) {
          this.add(aElement);
        }
      }
      add(aElement) {
        if (aElement) {
          if (aElement instanceof ObjetElement_1.ObjetElement) {
            this.ListeElements.push(aElement);
            return this;
          }
          if (aElement instanceof ObjetListeElements) {
            aElement.parcourir((a) => {
              this.add(a);
            });
            return this;
          }
          if (Array.isArray(aElement)) {
            aElement.forEach((a) => {
              this.add(a);
            });
            return this;
          }
        }
        if (IE.log) {
          IE.log.addLog(
            'ObjetListeElements.add : aElement incorrect => ' + aElement,
          );
        }
        return this;
      }
      get(aIndex) {
        return this.ListeElements[aIndex];
      }
      remove(aIndexOuTabIndex) {
        if (
          aIndexOuTabIndex >= 0 &&
          MethodesObjet_1.MethodesObjet.isNumber(aIndexOuTabIndex)
        ) {
          MethodesTableau_1.MethodesTableau.supprimerElement(
            this.ListeElements,
            aIndexOuTabIndex,
          );
        } else if (aIndexOuTabIndex && Array.isArray(aIndexOuTabIndex)) {
          MethodesTableau_1.MethodesTableau.supprimerTabIndex(
            this.ListeElements,
            aIndexOuTabIndex,
          );
        }
        return this;
      }
      pop() {
        return this.ListeElements.pop();
      }
      count() {
        return this.ListeElements.length;
      }
      vider() {
        this.ListeElements = [];
        return this;
      }
      addElement(AElement, I) {
        if (I === null || I === undefined) {
          this.ListeElements.push(AElement);
        } else {
          this.ListeElements[I] = AElement;
        }
        return this;
      }
      insererElement(AElement, I) {
        MethodesTableau_1.MethodesTableau.insererElement(
          AElement,
          this.ListeElements,
          I,
        );
        return this;
      }
      getNbrElementsExistes(aGenre) {
        let N = 0;
        this.ListeElements.forEach((aElement) => {
          if (
            aElement.existe() &&
            (aGenre === null ||
              aGenre === undefined ||
              aElement.getGenre() === aGenre)
          ) {
            N++;
          }
        });
        return N;
      }
      getTabListeElements() {
        return this.ListeElements;
      }
      parcourir(aFunction, aThis) {
        if (
          !aFunction ||
          !MethodesObjet_1.MethodesObjet.isFunction(aFunction)
        ) {
          return this;
        }
        this.ListeElements.every((aElement, aIndex) => {
          return aFunction.call(aThis, aElement, aIndex, this) !== false;
        });
        return this;
      }
      getTableau(aFunction) {
        const T = [];
        if (
          !aFunction ||
          !MethodesObjet_1.MethodesObjet.isFunction(aFunction)
        ) {
          return T;
        }
        this.ListeElements.forEach((aElement, aIndex) => {
          T.push(aFunction(aElement, aIndex));
        });
        return T;
      }
      removeFilter(aFilter) {
        if (aFilter && MethodesObjet_1.MethodesObjet.isFunction(aFilter)) {
          const lTab = [];
          this.ListeElements.forEach((aElement, aIndex) => {
            if (aFilter(aElement, aIndex) !== true) {
              lTab.push(aElement);
            }
          });
          this.ListeElements = lTab;
        }
        return this;
      }
      getTableauLibelles(aGenre, aTrier, aAvecExiste) {
        const T = [];
        if (aTrier) {
          this.trier();
        }
        for (let I = 0; I < this.ListeElements.length; I++) {
          if (
            aGenre === null ||
            aGenre === undefined ||
            (MethodesObjet_1.MethodesObjet.isNumeric(aGenre) &&
              aGenre === this.getGenre(I)) ||
            (Array.isArray(aGenre) && aGenre.includes(this.getGenre(I)))
          ) {
            if (!aAvecExiste || this.existe(I)) {
              T.push(this.getLibelle(I) || '');
            }
          }
        }
        return T;
      }
      getTableauNumeros(aAvecExiste) {
        const T = [];
        for (let I = 0; I < this.ListeElements.length; I++) {
          if (!aAvecExiste || this.existe(I)) {
            T.push(this.getNumero(I));
          }
        }
        return T;
      }
      getTableauGenres() {
        const T = [];
        for (let I = 0; I < this.ListeElements.length; I++) {
          T.push(this.getGenre(I));
        }
        return T;
      }
      getCle() {
        return this.getTableauNumeros().sort().join('_');
      }
      getListeElements(aFiltre) {
        const lListe = new ObjetListeElements();
        for (let I = 0; I < this.ListeElements.length; I++) {
          if (!aFiltre || aFiltre(this.ListeElements[I], I)) {
            lListe.addElement(this.ListeElements[I]);
          }
        }
        return lListe;
      }
      getElementParFiltre(aFiltre) {
        return this.get(this.getIndiceElementParFiltre(aFiltre));
      }
      getIndiceElementParFiltre(aFiltre) {
        let lResult = -1;
        for (let I = 0; I < this.ListeElements.length && lResult < 0; I++) {
          if (!aFiltre || aFiltre(this.ListeElements[I])) {
            lResult = I;
          }
        }
        return lResult;
      }
      getElementParNumero(ANumero) {
        for (let I = 0, lNb = this.count(); I < lNb; I++) {
          if (this.existe(I) && this.getNumero(I) === ANumero) {
            return this.get(I);
          }
        }
      }
      getListeElementsParNumero(aNumero) {
        const lListe = new ObjetListeElements();
        this.parcourir((aElement) => {
          if (
            aElement &&
            aElement.existe() &&
            aElement.getNumero() === aNumero
          ) {
            lListe.addElement(aElement);
          }
        });
        return lListe;
      }
      getElementParGenre(aGenre) {
        for (let I = 0, lNb = this.count(); I < lNb; I++) {
          if (this.existe(I) && this.getGenre(I) === aGenre) {
            return this.get(I);
          }
        }
      }
      getNumero(I) {
        var _a;
        return (_a = this.ListeElements[I]) === null || _a === void 0
          ? void 0
          : _a.Numero;
      }
      getGenre(I) {
        var _a;
        return (_a = this.ListeElements[I]) === null || _a === void 0
          ? void 0
          : _a.Genre;
      }
      getLibelle(I) {
        var _a;
        return (_a = this.ListeElements[I]) === null || _a === void 0
          ? void 0
          : _a.Libelle;
      }
      getActif(I) {
        var _a;
        return (_a = this.ListeElements[I]) === null || _a === void 0
          ? void 0
          : _a.Actif;
      }
      getPosition(I) {
        var _a;
        return (_a = this.ListeElements[I]) === null || _a === void 0
          ? void 0
          : _a.Position;
      }
      existeNumero(I) {
        const N = this.getNumero(I);
        return !!(N && N !== '0');
      }
      existe(I) {
        var _a;
        return (_a = this.ListeElements[I]) === null || _a === void 0
          ? void 0
          : _a.existe();
      }
      pourValidation(I) {
        var _a;
        return (_a = this.ListeElements[I]) === null || _a === void 0
          ? void 0
          : _a.pourValidation();
      }
      setLibelle(I, ALibelle) {
        this.ListeElements[I].Libelle = ALibelle;
      }
      trierPourValidation() {
        ObjetTri_1.ObjetTri.trierTableau(this.ListeElements, [
          ObjetTri_1.ObjetTri.init('Etat'),
        ]);
      }
      existeElementPourValidation() {
        for (let I = 0, lNb = this.count(); I < lNb; I++) {
          if (this.pourValidation(I)) {
            return true;
          }
        }
        return false;
      }
      setTri(aTableauTris) {
        this._tris = aTableauTris;
        return this;
      }
      getTri() {
        return this._tris;
      }
      trier(aGenreTri) {
        if (this.ListeElements) {
          const lGenreTri =
            aGenreTri === Enumere_TriElement_1.EGenreTriElement.Decroissant
              ? aGenreTri
              : Enumere_TriElement_1.EGenreTriElement.Croissant;
          if (!this._tris) {
            this.setTri([
              ObjetTri_1.ObjetTri.init('Position'),
              ObjetTri_1.ObjetTri.init('Libelle'),
            ]);
          }
          const lTris = this._tris !== null ? [].concat(this._tris) : [];
          lTris.unshift(
            ObjetTri_1.ObjetTri.init((aElement) => {
              return (
                aElement.Visible === false ||
                aElement.getEtat() === Enumere_Etat_1.EGenreEtat.Suppression
              );
            }, lGenreTri),
          );
          ObjetTri_1.ObjetTri.trierTableau(this.ListeElements, lTris);
          if (lGenreTri === Enumere_TriElement_1.EGenreTriElement.Decroissant) {
            this.ListeElements.reverse();
          }
        }
        return this;
      }
      getIndiceParNumeroEtGenre(ANumero, AGenre, aAvecExiste) {
        if (
          this.ListeElements &&
          ((ANumero !== null && ANumero !== undefined) ||
            (AGenre !== null && AGenre !== undefined))
        ) {
          const N = this.count();
          for (let I = 0; I < N; I++) {
            const lElement = this.ListeElements[I];
            if (
              lElement &&
              lElement.egalParNumeroEtGenre(ANumero, AGenre, aAvecExiste)
            ) {
              return I;
            }
          }
        }
      }
      getIndiceExisteParNumeroEtGenre(ANumero, AGenre) {
        if (
          this.ListeElements &&
          ((ANumero !== null && ANumero !== undefined) ||
            (AGenre !== null && AGenre !== undefined))
        ) {
          const N = this.count();
          let J = -1;
          for (let I = 0; I < N; I++) {
            if (this.existe(I)) {
              J++;
              if (
                (ANumero === null ||
                  ANumero === undefined ||
                  this.getNumero(I) === ANumero) &&
                (AGenre === null ||
                  AGenre === undefined ||
                  this.getGenre(I) === AGenre)
              ) {
                return J;
              }
            }
          }
        }
      }
      getElementParNumeroEtGenre(ANumero, AGenre, aAvecExiste) {
        const lIndice = this.getIndiceParNumeroEtGenre(
          ANumero,
          AGenre,
          aAvecExiste,
        );
        if (lIndice !== undefined) {
          return this.get(lIndice);
        }
      }
      getIndiceParElement(aElement, aAvecExiste) {
        return aElement
          ? this.getIndiceParNumeroEtGenre(
              aElement.getNumero(),
              aElement.getGenre(),
              aAvecExiste,
            )
          : null;
      }
      getIndiceExisteParElement(aElement) {
        return this.getIndiceExisteParNumeroEtGenre(
          aElement.getNumero(),
          aElement.getGenre(),
        );
      }
      getElementParElement(aElement, aAvecExiste) {
        const lIndice = this.getIndiceParElement(aElement, aAvecExiste);
        if (lIndice !== undefined && lIndice !== null) {
          return this.get(lIndice);
        }
      }
      getIndiceParLibelle(ALibelle) {
        if (this.ListeElements) {
          const N = this.count();
          for (let I = 0; I < N; I++) {
            if (this.getLibelle(I) === ALibelle) {
              return I;
            }
          }
        }
      }
      getIndiceParParsingLibelle(aLibelle) {
        if (!this.ListeElements) {
          return -1;
        }
        if (
          !aLibelle ||
          aLibelle.length === 0 ||
          !MethodesObjet_1.MethodesObjet.isString(aLibelle)
        ) {
          return 0;
        }
        const N = this.count();
        let lIndice = 0;
        for (let I = 0; I < N; I++) {
          const lLibelle = this.getLibelle(I);
          if (
            ComparateurChaines_1.ComparateurChaines.compare(
              lLibelle,
              aLibelle,
            ) < 0
          ) {
            lIndice++;
          } else {
            break;
          }
        }
        return lIndice >= N ? lIndice - 1 : lIndice;
      }
      getElementParLibelle(ALibelle) {
        const lIndice = this.getIndiceParLibelle(ALibelle);
        if (lIndice !== undefined) {
          return this.get(lIndice);
        }
        return undefined;
      }
      getPremierElement() {
        let lResult;
        for (let i = 0, lNb = this.count(); i < lNb && !lResult; i++) {
          if (this.existe(i)) {
            lResult = this.get(i);
          }
        }
        return lResult;
      }
      getDernierElement() {
        return this.get(this.count() - 1);
      }
      listeIdentiqueParElementsOrdonnes(aListeElements) {
        if (!aListeElements || !aListeElements.count) {
          return false;
        }
        if (this === aListeElements) {
          return true;
        }
        if (this.count() !== aListeElements.count()) {
          return false;
        }
        let lResult = true;
        this.parcourir((aElement, aIndice) => {
          const lElement = aListeElements.get(aIndice);
          if (
            lElement &&
            aElement &&
            lElement.egalParNumeroEtGenre(
              aElement.getNumero(),
              aElement.getGenre(),
            )
          ) {
            return;
          }
          lResult = false;
          return false;
        });
        return lResult;
      }
      setSerialisateurJSON(aSerialisateur) {
        if (!this.serialisateurJSON) {
          this.serialisateurJSON = {
            ignorerEtatsElements: false,
            methodeSerialisation: undefined,
            nePasTrierPourValidation: false,
            avecLibelle: true,
          };
        }
        Object.assign(this.serialisateurJSON, aSerialisateur);
        return this;
      }
      toJSON() {
        let I,
          lNb,
          lAvecSerialisation = !!(
            this.serialisateurJSON &&
            this.serialisateurJSON.methodeSerialisation
          ),
          lResult = [],
          lListe = new ObjetListeElements();
        lListe.add(this);
        if (
          !this.serialisateurJSON ||
          !this.serialisateurJSON.nePasTrierPourValidation
        ) {
          lListe.trierPourValidation();
        }
        for (I = 0, lNb = lListe.count(); I < lNb; I++) {
          const lElement = lListe.get(I);
          if (lElement) {
            let lExisteElement =
              (this.serialisateurJSON &&
                this.serialisateurJSON.ignorerEtatsElements) ||
              lElement.pourValidation();
            let lJSONElement = null;
            if (lExisteElement || lAvecSerialisation) {
              lJSONElement = lElement.toJSON();
              if (
                this.serialisateurJSON &&
                !this.serialisateurJSON.avecLibelle
              ) {
                delete lJSONElement[
                  ObjetElement_1.ObjetElement.const_JSON.libelle.JSON
                ];
              }
              if (
                lAvecSerialisation &&
                this.serialisateurJSON &&
                typeof this.serialisateurJSON.methodeSerialisation ===
                  'function'
              ) {
                const lGarderElement =
                  this.serialisateurJSON.methodeSerialisation(
                    lElement,
                    lJSONElement,
                    I,
                  );
                lExisteElement =
                  lGarderElement === null || lGarderElement === undefined
                    ? lExisteElement
                    : lGarderElement;
              }
            }
            if (lExisteElement && lJSONElement) {
              lResult.push(lJSONElement);
            }
          }
        }
        return lResult;
      }
      fromJSON(aJSON, aMethodeDeserialisation, aTrier) {
        if (!aJSON || !MethodesObjet_1.MethodesObjet.isArray(aJSON)) {
          return this;
        }
        for (let i = 0, lNb = aJSON.length; i < lNb; i++) {
          const lElement = new ObjetElement_1.ObjetElement().fromJSON(aJSON[i]);
          if (
            !aMethodeDeserialisation ||
            aMethodeDeserialisation(aJSON[i], lElement, i) !== false
          ) {
            this.addElement(lElement);
          }
        }
        if (aTrier) {
          this.trier();
        }
        return this;
      }
      [Symbol.iterator]() {
        let lIndex = 0;
        return {
          next: () => {
            lIndex += 1;
            const lDone = lIndex > this.ListeElements.length;
            return {
              done: lDone,
              value: lDone ? undefined : this.ListeElements[lIndex - 1],
            };
          },
        };
      }
    }
    exports.ObjetListeElements = ObjetListeElements;
  },
  fn: 'objetlisteelements.js',
});