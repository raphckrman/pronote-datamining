IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.tag = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const jsx = require('jsx');
    let u_collection = {
      br: { autoFermante: true },
      input: { autoFermante: true },
      img: { autoFermante: true },
    };
    const tag = function (aBalise, ...aParams) {
      let lNomBalise = aBalise;
      if (!lNomBalise || !lNomBalise.trim) {
        return '';
      }
      lNomBalise = lNomBalise.trim();
      if (!lNomBalise) {
        return '';
      }
      const T = ['<', lNomBalise];
      const lArgs = aParams;
      const lAttrs = lArgs[0];
      let lInner = '';
      if (lAttrs && MethodesObjet_1.MethodesObjet.isObject(lAttrs)) {
        T.push(_attrsToString(lAttrs));
        lArgs.shift();
      }
      if (lArgs.length > 0) {
        lArgs.forEach((aVal) => {
          let lInnerArg = aVal;
          if (
            lInnerArg &&
            MethodesObjet_1.MethodesObjet.isFunction(lInnerArg)
          ) {
            const lTabInner = [];
            lInnerArg = lInnerArg(lTabInner);
            if (lTabInner.length > 0) {
              lInnerArg = lTabInner.join('');
            }
          }
          if (lInnerArg === 0) {
            lInnerArg = lInnerArg + '';
          }
          if (lInnerArg) {
            lInner += lInnerArg;
          }
        });
      }
      if (
        !lInner &&
        u_collection[lNomBalise] &&
        u_collection[lNomBalise].autoFermante
      ) {
        T.push('>');
      } else {
        T.push('>');
        if (lInner) {
          T.push(lInner);
        }
        T.push('</', lNomBalise, '>');
      }
      return T.join('');
    };
    exports.tag = tag;
    function _attrsToString(aAttrs) {
      if (aAttrs && MethodesObjet_1.MethodesObjet.isString(aAttrs)) {
        return aAttrs;
      }
      if (aAttrs && MethodesObjet_1.MethodesObjet.isObject(aAttrs)) {
        const T = [];
        Object.keys(aAttrs).forEach((aKey) => {
          let lVal = aAttrs[aKey];
          if (lVal && Array.isArray(lVal)) {
            if (aKey === 'class') {
              const lTab = [];
              lVal.forEach((aVal) => {
                const lVal = aVal && aVal.trim ? aVal.trim() : '';
                if (lVal) {
                  lTab.push(lVal);
                }
              });
              lVal = lTab.join(' ');
            } else if (aKey === 'style') {
              const lTab = [];
              lVal.forEach((aVal) => {
                let lVal = aVal && aVal.trim ? aVal.trim() : '';
                if (lVal && lVal.length > 0) {
                  if (lVal[lVal.length - 1] !== ';') {
                    lVal += ';';
                  }
                  lTab.push(lVal);
                }
              });
              lVal = lTab.join(' ');
            } else {
              lVal = lVal.join(' ');
            }
          }
          if (lVal && lVal.trim && lVal.trim() === '') {
            return;
          }
          if (lVal === 0 || lVal > 0 || lVal === true || (lVal && lVal.trim)) {
            T.push(tag.composeAttr(aKey, lVal === true ? '' : lVal).trimEnd());
          }
        });
        return T.join('');
      }
      return '';
    }
    tag.toArg = jsx.toArg;
    tag.funcAttr = jsx.jsxFuncAttr;
    tag.composeAttr = function (aAttribut, aValue, aArgs) {
      if (!aAttribut || !aAttribut.trim) {
        return '';
      }
      let lAttribut = aAttribut.trim();
      if (!lAttribut) {
        return '';
      }
      lAttribut = ' ' + lAttribut;
      let lValue = aValue === 0 ? aValue + '' : aValue;
      if (!lValue || lValue === true) {
        return lAttribut + ' ';
      }
      if (MethodesObjet_1.MethodesObjet.isString(lValue) && lValue.replace) {
        if (aAttribut === 'title') {
          lValue = lValue.toTitle();
        } else {
          lValue = lValue.toAttrValue();
        }
      } else {
        if (!MethodesObjet_1.MethodesObjet.isNumber(lValue)) {
          return lAttribut + ' ';
        }
        lValue = lValue + '';
      }
      const lArgs = [];
      if (arguments.length > 2) {
        lArgs.push(aArgs);
      }
      return lAttribut + '="' + tag.funcAttr(lValue, ...lArgs) + '" ';
    };
    tag.styleToStr = function (aRule, aValue) {
      if (!aRule || !aRule.trim) {
        return '';
      }
      if (!aValue && aValue !== 0) {
        return '';
      }
      return (
        aRule +
        ':' +
        aValue +
        (typeof aValue === 'string' &&
        aValue.length > 0 &&
        aValue[aValue.length - 1] === ';'
          ? ''
          : ';')
      );
    };
  },
  fn: 'tag.js',
});