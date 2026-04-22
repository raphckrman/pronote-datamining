IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    String.prototype.ucfirst = function () {
      return this.replace(this.charAt(0), this.charAt(0).toUpperCase());
    };
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
      };
    }
    if (!String.prototype.trimStart) {
      String.prototype.trimStart = function () {
        return this.replace(/^\s+/, '');
      };
    }
    if (!String.prototype.trimEnd) {
      String.prototype.trimEnd = function () {
        return this.replace(/\s+$/, '');
      };
    }
    String.prototype.avecQuotes = function () {
      return '&quot;' + this + '&quot;';
    };
    String.prototype.enleverZero = function () {
      return parseFloat(this.replace(/,/g, '.')).toString();
    };
    String.prototype.escapeJQ = function () {
      return this.replace(/(:|\.|\[|\]|\/|#)/g, '\\$1');
    };
    String.prototype.replaceRCToHTML = function (aChaineRemplacement) {
      return !!this
        ? this.replace(/\r\n|\n|\r|&#32;/g, aChaineRemplacement || '<br>')
        : '';
    };
    String.prototype.toAttrValue = function () {
      return this.replace(/"/g, '&quot;');
    };
    String.prototype.toTitle = function () {
      return this.replace(/\r\n|\n|\r/g, '&#010;').toAttrValue();
    };
    String.prototype.ajouterEntites = function (aSansQuote) {
      let re = aSansQuote ? /([<>'&])/g : /([<>"'&])/g;
      return this.replace(re, (m) => {
        if (m === '<') {
          return '&lt;';
        }
        if (m === '>') {
          return '&gt;';
        }
        if (m === '"') {
          return '&quot;';
        }
        if (m === "'") {
          return '&#039;';
        }
        if (m === '&') {
          return '&amp;';
        }
        return m;
      });
    };
    String.prototype.enleverEntites = function () {
      let re = /&(lt|gt|quot|#039|amp);/g;
      return this.replace(re, (m) => {
        if (m === '&lt;') {
          return '<';
        }
        if (m === '&gt;') {
          return '>';
        }
        if (m === '&quot;') {
          return '"';
        }
        if (m === '&#039;') {
          return "'";
        }
        if (m === '&amp;') {
          return '&';
        }
        return m;
      });
    };
    String.prototype.format = function (aTabElements) {
      if (!Array.isArray(aTabElements)) {
        if (
          typeof aTabElements !== 'number' &&
          typeof aTabElements !== 'string'
        ) {
          return this;
        }
        aTabElements = [aTabElements];
      }
      const lMapElements = aTabElements.map((aElement) => {
        if (typeof aElement === 'function') {
          try {
            return aElement();
          } catch (e) {
            return '';
          }
        }
        return aElement;
      });
      const lFuncSubst = (aSubst, aCarSuiv) => {
        let lSubst = aSubst;
        if (aCarSuiv === 'd') {
          lSubst = parseInt(lSubst);
          if (isNaN(lSubst)) {
            lSubst = '';
          }
        }
        return lSubst;
      };
      let lIndex = 0;
      let lStrResult = '';
      let lCar;
      let lCarSuiv;
      let lIndexSubsSansNumero = 0;
      let lDieseEnCours = false;
      let lStrPourcentEnCours = '';
      let lStrNumeroSubst = '';
      let lNumeroSubst;
      const lRegNumber = new RegExp('[0-9]');
      const lRegExType = new RegExp('(s|d|e|f|g|n|m)');
      while (lIndex < this.length) {
        lCar = this[lIndex];
        lCarSuiv = this[lIndex + 1];
        if (lStrPourcentEnCours) {
          if (lCarSuiv && lCar === ':' && lCarSuiv.match(lRegExType)) {
            lNumeroSubst = parseInt(lStrPourcentEnCours);
            if (lNumeroSubst < lMapElements.length) {
              lStrResult += lFuncSubst(lMapElements[lNumeroSubst], lCarSuiv);
            }
            lIndex += 1;
            lStrPourcentEnCours = '';
          } else if (lCarSuiv && lCarSuiv.match(lRegNumber)) {
            lStrPourcentEnCours += lCarSuiv;
          } else {
            lStrResult += '%' + lStrPourcentEnCours + lCar;
            lStrPourcentEnCours = '';
          }
        } else if (lDieseEnCours) {
          lStrNumeroSubst += lCar;
          if (!lCarSuiv || !lCarSuiv.match(lRegNumber)) {
            lDieseEnCours = false;
            lNumeroSubst = parseInt(lStrNumeroSubst) - 1;
            if (lNumeroSubst < lMapElements.length) {
              lStrResult += lMapElements[lNumeroSubst];
            }
            lStrNumeroSubst = '';
          }
        } else {
          switch (lCar) {
            case '#':
              if (lCarSuiv.match(lRegNumber)) {
                lDieseEnCours = true;
              }
              break;
            case '%':
              if (lCarSuiv === 's' || lCarSuiv === 'd') {
                lIndex += 1;
                if (lIndexSubsSansNumero < lMapElements.length) {
                  lStrResult += lFuncSubst(
                    lMapElements[lIndexSubsSansNumero],
                    lCarSuiv,
                  );
                }
                lIndexSubsSansNumero += 1;
              } else if (lCarSuiv.match(lRegNumber)) {
                lStrPourcentEnCours = lCarSuiv;
                lIndex += 1;
              } else {
                lStrResult += lCar;
              }
              break;
            default:
              lStrResult += lCar;
          }
        }
        lIndex += 1;
      }
      return lStrResult;
    };
    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
      };
    }
    if (!String.prototype.endsWith) {
      String.prototype.endsWith = function (searchString, position) {
        let subjectString = this.toString();
        if (
          typeof position !== 'number' ||
          !isFinite(position) ||
          Math.floor(position) !== position ||
          position > subjectString.length
        ) {
          position = subjectString.length;
        }
        position -= searchString.length;
        let lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
    }
    if (!String.prototype.includes) {
      String.prototype.includes = function (search, start) {
        if (typeof start !== 'number') {
          start = 0;
        }
        if (start + search.length > this.length) {
          return false;
        } else {
          return this.indexOf(search, start) !== -1;
        }
      };
    }
    if (!String.prototype.replaceAll) {
      String.prototype.replaceAll = function (search, replacement) {
        if (typeof search !== 'string' && !(search instanceof RegExp)) {
        }
        const pattern =
          search instanceof RegExp ? search : new RegExp(search, 'g');
        return this.replace(pattern, replacement);
      };
    }
  },
  fn: 'string.js',
});