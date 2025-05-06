IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ComparateurChaines = void 0;
    let uSupportLocaleCompare = false,
      uSupportCollator = !!(window.Intl && window.Intl.Collator),
      uLocales,
      uCollator = uSupportCollator
        ? new window.Intl.Collator(uLocales, { sensitivity: 'accent' })
        : null,
      uCollatorCaseSensitive = uSupportCollator
        ? new window.Intl.Collator(uLocales, { sensitivity: 'variant' })
        : null,
      uCollator_NonCaseSensitive_IgnoreAccent = uSupportCollator
        ? new window.Intl.Collator(uLocales, { sensitivity: 'base' })
        : null,
      uCollator_CaseSensitive_IgnoreAccent = uSupportCollator
        ? new window.Intl.Collator(uLocales, { sensitivity: 'case' })
        : null;
    const ComparateurChaines = {
      egal(aStrA, aStrB, aOptions) {
        return ComparateurChaines.compare(aStrA, aStrB, aOptions) === 0;
      },
      compare(aStrA, aStrB, aOptions) {
        const lOptions = Object.assign(
          {
            caseSensitive: false,
            accentSensitive: false,
            avecTrim: false,
            unifierEspacements: false,
            unifierCarWord: false,
          },
          aOptions,
        );
        const lResult = ComparateurChaines.compareChamps(
          ComparateurChaines.getValeurPourTri(aStrA, lOptions),
          ComparateurChaines.getValeurPourTri(aStrB, lOptions),
          lOptions,
        );
        return lResult === false ? 0 : lResult;
      },
      normalize(aChaine) {
        if (typeof aChaine !== 'string') {
          return '';
        }
        if (aChaine && aChaine.normalize) {
          return aChaine.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }
        return ComparateurChaines.latinize(aChaine);
      },
      latinize(aChaine) {
        return aChaine && aChaine.replace
          ? aChaine.replace(
              new RegExp('[' + _latinize() + ']', 'gi'),
              _latinize,
            )
          : '';
      },
      getValeurPourTri(aChamp, aOptions) {
        let lResult = aChamp;
        if (!lResult) {
          return lResult;
        }
        if (lResult.getTime) {
          return lResult.getTime();
        }
        if (lResult.enleverEntites) {
          lResult = lResult.enleverEntites();
          if (
            !uSupportLocaleCompare &&
            !uSupportCollator &&
            !aOptions.accentSensitive
          ) {
            lResult = ComparateurChaines.normalize(lResult);
          }
          if (aOptions.avecTrim) {
            lResult = lResult.trim();
          }
          if (aOptions.unifierEspacements) {
            lResult = lResult.replace(/\s+/gi, ' ');
          }
          if (aOptions.unifierCarWord) {
            lResult = lResult.replace(/’/g, "'").replace(/«|»/g, '"');
          }
        }
        if (
          !aOptions.caseSensitive &&
          !uSupportCollator &&
          !uSupportLocaleCompare &&
          lResult &&
          lResult.toLowerCase
        ) {
          lResult = lResult.toLowerCase();
        }
        return lResult;
      },
      compareChamps: function (aChampA, aChampB, aOptions) {
        const lChampAString = aChampA && aChampA.localeCompare;
        const lChampBString = aChampB && aChampB.localeCompare;
        if (
          (uSupportLocaleCompare || uSupportCollator) &&
          lChampAString &&
          lChampBString
        ) {
          let lResult = 0;
          if (uSupportCollator) {
            const lCollator = aOptions.caseSensitive
              ? aOptions.accentSensitive
                ? uCollatorCaseSensitive
                : uCollator_CaseSensitive_IgnoreAccent
              : aOptions.accentSensitive
                ? uCollator
                : uCollator_NonCaseSensitive_IgnoreAccent;
            if (lCollator) {
              lResult = lCollator.compare(aChampA, aChampB);
            }
          } else {
            lResult = aChampA.localeCompare(aChampB, 'fr', {
              sensitivity: aOptions.caseSensitive
                ? aOptions.accentSensitive
                  ? 'variant'
                  : 'case'
                : aOptions.accentSensitive
                  ? 'accent'
                  : 'base',
            });
          }
          if (lResult < 0) {
            return -1;
          }
          if (lResult > 0) {
            return 1;
          }
          return false;
        }
        const lChampANull = aChampA === undefined || aChampA === null,
          lChampBNull = aChampB === undefined || aChampB === null;
        if (lChampANull && lChampBNull) {
          return false;
        }
        if (lChampAString && aChampB === ComparateurChaines.MAX_STRING) {
          return -1;
        }
        if (lChampBString && aChampA === ComparateurChaines.MAX_STRING) {
          return 1;
        }
        if (aChampA > aChampB || lChampBNull) {
          return 1;
        }
        if (aChampA < aChampB || lChampANull) {
          return -1;
        }
        return false;
      },
      MAX_STRING: { MAX_STRING: true },
    };
    exports.ComparateurChaines = ComparateurChaines;
    try {
      if (''.localeCompare) {
        uSupportLocaleCompare =
          'e'.localeCompare('é', 'fr', { sensitivity: 'base' }) === 0;
      }
    } catch (e) {
      uSupportLocaleCompare = false;
    }
    let uCache_regexLatinize = null;
    function _latinize(aMatch) {
      let x;
      const lTranslate = {
        á: 'a',
        à: 'a',
        â: 'a',
        ä: 'a',
        ã: 'a',
        ç: 'c',
        é: 'e',
        è: 'e',
        ê: 'e',
        ë: 'e',
        í: 'i',
        ì: 'i',
        î: 'i',
        ï: 'i',
        ñ: 'n',
        ó: 'o',
        ò: 'o',
        ô: 'o',
        ö: 'o',
        õ: 'o',
        ő: 'o',
        ß: 'ss',
        š: 'szz',
        ú: 'u',
        ù: 'u',
        û: 'u',
        ü: 'u',
        ű: 'u',
        ý: 'y',
        ÿ: 'y',
        æ: 'ae',
        œ: 'oe',
      };
      if (!aMatch) {
        if (!uCache_regexLatinize) {
          const lRegex = [];
          for (x in lTranslate) {
            lRegex.push(x);
          }
          uCache_regexLatinize = lRegex.join('');
        }
        return uCache_regexLatinize;
      }
      const lMatchLower = aMatch.toLowerCase();
      const lIsUpperCase = lMatchLower !== aMatch;
      return lIsUpperCase
        ? lTranslate[lMatchLower].ucfirst()
        : lTranslate[lMatchLower];
    }
  },
  fn: 'comparateurchaines.js',
});