IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetTri = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_TriElement_1 = require('Enumere_TriElement');
    const ComparateurChaines_1 = require('ComparateurChaines');
    class ObjetTri {
      static init(aNomChamp, aGenreTri, aCaseSensitive, aIgnorerAccents) {
        return {
          estFonction: MethodesObjet_1.MethodesObjet.isFunction(aNomChamp),
          estAccesseurChaine:
            typeof aNomChamp === 'string' && aNomChamp.indexOf('.') >= 0,
          nomChamp: aNomChamp,
          ordreTri:
            aGenreTri === Enumere_TriElement_1.EGenreTriElement.Decroissant
              ? aGenreTri
              : Enumere_TriElement_1.EGenreTriElement.Croissant,
          caseSensitive: aCaseSensitive === true,
          accentSensitive: aIgnorerAccents !== true,
        };
      }
      static initRecursif(aNomChampPere, aTris) {
        const lTris = aTris;
        return {
          triRecursif: true,
          nomChampPere: aNomChampPere,
          tris: lTris,
          ordreTri: Enumere_TriElement_1.EGenreTriElement.Croissant,
        };
      }
      static trierTableau(aTableau, aTris) {
        if (!aTableau || !aTableau.sort || !aTris || aTableau.length < 2) {
          return;
        }
        const lLength = aTableau.length;
        const lTableau = new Array(lLength);
        let lValeur;
        for (let i = 0; i < lLength; i++) {
          lValeur = aTableau[i];
          if (lValeur !== undefined || lValeur !== null) {
            lTableau[i] = { contenu: lValeur, cache: [], ordre: i };
          } else {
            lTableau[i] = lValeur;
          }
        }
        lTableau.sort((a, b) => {
          return ObjetTri._comparer(aTris, a, b);
        });
        for (let i = 0; i < lLength; i++) {
          lValeur = lTableau[i];
          if (lValeur !== undefined || lValeur !== null) {
            aTableau[i] = lValeur.contenu;
          } else {
            aTableau[i] = lValeur;
          }
        }
      }
      static _construirePilePere(aValeur, aNomChampePere, aPile) {
        let lObjet = aValeur;
        while (
          lObjet &&
          lObjet[aNomChampePere] &&
          MethodesObjet_1.MethodesObjet.isObject(lObjet[aNomChampePere]) &&
          !aPile.includes(lObjet[aNomChampePere])
        ) {
          lObjet = lObjet[aNomChampePere];
          aPile.push(lObjet);
        }
      }
      static _comparerTriRecursif(A, B, aTri) {
        let lPileParentA = [A.contenu],
          lPileParentB = [B.contenu],
          i,
          lResult,
          j,
          lNb,
          lTri,
          lCount,
          lA,
          lB;
        if (!aTri.tris) {
          return false;
        }
        ObjetTri._construirePilePere(
          A.contenu,
          aTri.nomChampPere,
          lPileParentA,
        );
        ObjetTri._construirePilePere(
          B.contenu,
          aTri.nomChampPere,
          lPileParentB,
        );
        lPileParentA.reverse();
        lPileParentB.reverse();
        lCount = Math.max(lPileParentA.length, lPileParentB.length);
        for (i = 0; i < lCount; i++) {
          lA = lPileParentA[i];
          lB = lPileParentB[i];
          if ((!lA && lB) || (!lA && !lB)) {
            return -aTri.ordreTri;
          } else if (lA && !lB) {
            return aTri.ordreTri;
          } else if (lA === lB) {
            continue;
          }
          for (j = 0, lNb = aTri.tris.length; j < lNb; j++) {
            lTri = aTri.tris[j];
            lResult = ObjetTri._comparerTri(lA, lB, lTri, -1, false, i);
            if (lResult !== false) {
              return lResult;
            }
          }
        }
        return false;
      }
      static _getValeurPourTri(aTri, aElement, aProfondeur) {
        let lResult;
        if (aTri.estFonction) {
          lResult = aTri.nomChamp(aElement, aProfondeur);
        } else if (aTri.estAccesseurChaine) {
          lResult = MethodesObjet_1.MethodesObjet.get(aElement, aTri.nomChamp);
        } else {
          if (!aElement) {
            return aElement;
          }
          lResult = aElement[aTri.nomChamp];
        }
        return ComparateurChaines_1.ComparateurChaines.getValeurPourTri(
          lResult,
          {
            caseSensitive: aTri.caseSensitive,
            accentSensitive: aTri.accentSensitive,
          },
        );
      }
      static _comparerTri(A, B, aTri, aIndiceTri, aAvecCacheTri, aProfondeur) {
        let lChampTriA;
        let lChampTriB;
        if (aAvecCacheTri) {
          if (!A.cache[aIndiceTri]) {
            lChampTriA = ObjetTri._getValeurPourTri(
              aTri,
              A.contenu,
              aProfondeur,
            );
            A.cache[aIndiceTri] = { valeur: lChampTriA };
          } else {
            lChampTriA = A.cache[aIndiceTri].valeur;
          }
          if (!B.cache[aIndiceTri]) {
            lChampTriB = ObjetTri._getValeurPourTri(
              aTri,
              B.contenu,
              aProfondeur,
            );
            B.cache[aIndiceTri] = { valeur: lChampTriB };
          } else {
            lChampTriB = B.cache[aIndiceTri].valeur;
          }
        } else {
          lChampTriA = ObjetTri._getValeurPourTri(aTri, A, aProfondeur);
          lChampTriB = ObjetTri._getValeurPourTri(aTri, B, aProfondeur);
        }
        if (
          lChampTriA === lChampTriB ||
          (lChampTriA === undefined && lChampTriB === null) ||
          (lChampTriB === undefined && lChampTriA === null)
        ) {
          return false;
        }
        const lResult = ComparateurChaines_1.ComparateurChaines.compareChamps(
          lChampTriA,
          lChampTriB,
          {
            caseSensitive: aTri.caseSensitive,
            accentSensitive: aTri.accentSensitive,
          },
        );
        if (lResult === false) {
          return false;
        }
        return lResult * aTri.ordreTri;
      }
      static _comparer(aTris, A, B) {
        let i, lNb, lTri, lResult;
        for (i = 0, lNb = aTris.length; i < lNb; i++) {
          lTri = aTris[i];
          if (!lTri) {
            return 0;
          }
          if (lTri.triRecursif) {
            lResult = ObjetTri._comparerTriRecursif(A, B, lTri);
          } else {
            lResult = ObjetTri._comparerTri(A, B, lTri, i, true, 0);
          }
          if (lResult !== false) {
            return lResult;
          }
        }
        return A.ordre - B.ordre;
      }
    }
    exports.ObjetTri = ObjetTri;
    ObjetTri.genreTri = Enumere_TriElement_1.EGenreTriElement;
  },
  fn: 'objettri.js',
});