IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.fragment = exports.c_attributsAAfficherMemeSiLaValeurEstVide =
      void 0;
    exports.str = str;
    exports.toArg = toArg;
    exports.jsxFuncAttr = jsxFuncAttr;
    const MethodesObjet_1 = require('MethodesObjet');
    const capitalACharCode = 'A'.charCodeAt(0);
    const capitalZCharCode = 'Z'.charCodeAt(0);
    const isUpper = (input, index) => {
      const charCode = input.charCodeAt(index);
      return capitalACharCode <= charCode && capitalZCharCode >= charCode;
    };
    const toKebabCase = (camelCased) => {
      let kebabCased = '';
      for (let i = 0; i < camelCased.length; i++) {
        const prevUpperCased = i > 0 ? isUpper(camelCased, i - 1) : true;
        const currentUpperCased = isUpper(camelCased, i);
        const nextUpperCased =
          i < camelCased.length - 1 ? isUpper(camelCased, i + 1) : true;
        if (
          (!prevUpperCased && currentUpperCased) ||
          (currentUpperCased && !nextUpperCased)
        ) {
          kebabCased += '-';
          kebabCased += camelCased[i].toLowerCase();
        } else {
          kebabCased += camelCased[i];
        }
      }
      return kebabCased;
    };
    const attributeToString = (aAttributes) => (name) => {
      let lValue = aAttributes[name];
      if (lValue === null || typeof lValue === 'undefined') {
        return '';
      }
      const formattedName = name.toLowerCase();
      const makeAttribute = (value) => `${formattedName}="${value}"`;
      if (formattedName === 'class' && Array.isArray(lValue)) {
        const lTab = [];
        lValue.forEach((aVal) => {
          const lVal = aVal && aVal.trim ? aVal.trim() : '';
          if (lVal) {
            lTab.push(lVal);
          }
        });
        lValue = lTab.join(' ');
      }
      if (
        formattedName === 'style' &&
        lValue &&
        !Array.isArray(lValue) &&
        typeof lValue === 'object' &&
        MethodesObjet_1.MethodesObjet.isObject(lValue) &&
        !MethodesObjet_1.MethodesObjet.isDate(lValue)
      ) {
        const lArr = [];
        const lPropsStyle = Object.keys(lValue);
        lPropsStyle.map((aKey) => {
          let lValueStyle = lValue[aKey];
          const lKeyStyle = toKebabCase(aKey);
          if (MethodesObjet_1.MethodesObjet.isNumber(lValueStyle)) {
            lValueStyle = lValueStyle.toString() + 'px';
          }
          if (
            lValueStyle &&
            lKeyStyle &&
            MethodesObjet_1.MethodesObjet.isString(lKeyStyle) &&
            MethodesObjet_1.MethodesObjet.isString(lValueStyle)
          ) {
            lArr.push(`${lKeyStyle}:${lValueStyle};`);
          }
        });
        if (lArr.length === 0) {
          return '';
        }
        lValue = lArr.join('');
      }
      if (lValue instanceof Date) {
        return makeAttribute(lValue.toISOString());
      } else {
        switch (typeof lValue) {
          case 'boolean':
            if (lValue) {
              return formattedName;
            } else {
              return '';
            }
          default: {
            let lStr = lValue + '';
            if (lStr === c_strObjectToString) {
              return '';
            }
            if (
              lStr === '' &&
              !exports.c_attributsAAfficherMemeSiLaValeurEstVide.includes(
                formattedName,
              )
            ) {
              return '';
            }
            if (formattedName === 'title') {
              lStr = lStr.toTitle();
            } else {
              lStr = lStr.toAttrValue();
            }
            return makeAttribute(lStr);
          }
        }
      }
    };
    const attributesToString = (aAttributes) => {
      if (aAttributes) {
        const lVal = Object.keys(aAttributes)
          .filter((attribute) => attribute !== 'children')
          .map(attributeToString(aAttributes))
          .filter((attribute) => attribute.length)
          .join(' ');
        return lVal ? ' ' + lVal : '';
      } else {
        return '';
      }
    };
    const c_strObjectToString = '[object Object]';
    exports.c_attributsAAfficherMemeSiLaValeurEstVide = [
      'alt',
      'title',
      'placeholder',
      'aria-label',
      'aria-description',
    ];
    const contentsToString = (contents) => {
      if (contents) {
        return contents
          .map((aElements) => {
            if (
              MethodesObjet_1.MethodesObjet.isString(aElements) ||
              MethodesObjet_1.MethodesObjet.isNumber(aElements)
            ) {
              return aElements;
            }
            if (MethodesObjet_1.MethodesObjet.isFunction(aElements)) {
              const lTab = [];
              const lResultBrut = aElements(lTab);
              let lResult;
              if (lTab.length > 0) {
                lResult = lTab.join('');
              } else {
                lResult = lResultBrut || '';
              }
              return contentsToString([lResult]);
            }
            if (Array.isArray(aElements)) {
              return contentsToString(aElements);
            }
            if (
              aElements &&
              aElements.toString &&
              !MethodesObjet_1.MethodesObjet.isBoolean(aElements) &&
              !MethodesObjet_1.MethodesObjet.isDate(aElements)
            ) {
              const lStr = aElements.toString();
              if (lStr === c_strObjectToString) {
                return '';
              }
              return lStr;
            }
            return '';
          })
          .join('');
      } else {
        return '';
      }
    };
    const isVoidElement = (tagName) => {
      return (
        [
          'area',
          'base',
          'br',
          'col',
          'command',
          'embed',
          'hr',
          'img',
          'input',
          'keygen',
          'link',
          'meta',
          'param',
          'source',
          'track',
          'wbr',
        ].indexOf(tagName) > -1
      );
    };
    function str(name, attributes = {}, ...contents) {
      const children = (attributes && attributes.children) || contents;
      if (typeof name === 'function') {
        return name(
          children ? Object.assign({ children }, attributes) : attributes,
          contents,
        );
      } else {
        const tagName = name.toLowerCase();
        if (isVoidElement(tagName) && !contents.length) {
          return `<${tagName}${attributesToString(attributes)}>`;
        } else {
          return `<${tagName}${attributesToString(attributes)}>${contentsToString(contents)}</${tagName}>`;
        }
      }
    }
    const fragment = (attributes, contents) => contentsToString(contents);
    exports.fragment = fragment;
    function toArg(aArgs) {
      let lArray;
      if (Array.isArray(aArgs)) {
        lArray = aArgs;
      } else {
        lArray = [aArgs];
      }
      const lTab = [];
      lArray.forEach((aArg) => {
        if (aArg === null || typeof aArg === 'undefined') {
          lTab.push(aArg + '');
        } else if (
          typeof aArg === 'string' ||
          MethodesObjet_1.MethodesObjet.isDate(aArg)
        ) {
          lTab.push(`'${aArg}'`);
        } else if (typeof aArg === 'object' || typeof aArg === 'function') {
          lTab.push(null + '');
        } else {
          lTab.push(aArg.toString());
        }
      });
      return lTab.join(',').toAttrValue();
    }
    function jsxFuncAttr(aNomFonction, aArgs) {
      if (!aNomFonction || !aNomFonction.replace) {
        return '';
      }
      let lResult = aNomFonction;
      if (arguments.length > 1) {
        lResult += `(${toArg(aArgs)})`;
      }
      return lResult;
    }
    IE.jsx = { str, fragment: exports.fragment };
  },
  fn: 'jsx.js',
});