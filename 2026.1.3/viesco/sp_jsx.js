IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.JSXUtils = void 0;
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
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
    const _transformCssProperties = (aCss) => {
      const lResult = {};
      Object.keys(aCss).map((aKey) => {
        let lValueStyle = aCss[aKey];
        const lKeyStyle = toKebabCase(aKey);
        if (MethodesObjet_1.MethodesObjet.isNumber(lValueStyle)) {
          const lEstDiffDeZero = lValueStyle !== 0;
          lValueStyle = lValueStyle.toString();
          if (
            !(lKeyStyle in listePropsCssSansAjoutUnite) &&
            lEstDiffDeZero &&
            lKeyStyle.indexOf('--') !== 0
          ) {
            lValueStyle += 'px';
          }
        }
        if (lKeyStyle && MethodesObjet_1.MethodesObjet.isString(lKeyStyle)) {
          if (!lValueStyle) {
            lResult[lKeyStyle] = false;
          } else if (
            lValueStyle &&
            MethodesObjet_1.MethodesObjet.isString(lValueStyle)
          ) {
            lResult[lKeyStyle] = lValueStyle;
          } else {
          }
        }
      });
      return lResult;
    };
    const makeAttribute = (name, value) => `${name}="${value}"`;
    const attributeToString = (aAttributes) => (name) => {
      let lValue = aAttributes[name];
      const lTypeOfValue = typeof lValue;
      if (lValue === false || lValue === null || lTypeOfValue === 'undefined') {
        return '';
      }
      const formattedName = name.toLowerCase();
      if (lValue === true) {
        return formattedName;
      }
      let lIsString = lTypeOfValue === 'string';
      let lIsNumber = false;
      let lIsArray = false;
      let lIsObject = false;
      let lIsDate = false;
      let lIsFunc = false;
      if (!lIsString) {
        lIsNumber = MethodesObjet_1.MethodesObjet.isNumber(lValue);
        if (!lIsNumber) {
          lIsArray = Array.isArray(lValue);
          if (!lIsArray) {
            lIsDate = MethodesObjet_1.MethodesObjet.isDate(lValue);
            if (!lIsDate) {
              lIsFunc = MethodesObjet_1.MethodesObjet.isFunction(lValue);
              if (!lIsFunc) {
                lIsObject = MethodesObjet_1.MethodesObjet.isObject(lValue);
                if (lIsObject) {
                  if (formattedName === 'ie_eventmap') {
                    const lMapping = lValue;
                    lValue = () => lMapping;
                    lIsFunc = true;
                    lIsObject = false;
                  } else if (
                    formattedName !== 'style' &&
                    formattedName !== 'class'
                  ) {
                  }
                }
              }
            }
          }
        }
      }
      if (lValue && lIsFunc) {
        const lGUID = JSXUtils.DictionaryCallbacks.add(name, lValue);
        return makeAttribute(formattedName, lGUID);
      }
      if (lIsDate) {
        return makeAttribute(formattedName, lValue.toISOString());
      }
      if (formattedName === 'class' && lIsArray) {
        const lTab = [];
        lValue.forEach((aVal) => {
          const lVal = aVal && aVal.trim ? aVal.trim() : '';
          if (lVal) {
            lTab.push(lVal);
          }
        });
        lValue = lTab.join(' ');
      } else if (
        formattedName === 'style' &&
        lValue &&
        lIsObject &&
        !Array.isArray(lValue) &&
        lIsObject &&
        !lIsDate
      ) {
        const lArr = [];
        const lCssTransform = _transformCssProperties(lValue);
        Object.keys(lCssTransform).forEach((aKey) => {
          let lValueStyle = lCssTransform[aKey];
          if (lValueStyle) {
            lArr.push(`${aKey}:${lValueStyle};`);
          }
        });
        if (lArr.length === 0) {
          return '';
        }
        lValue = lArr.join('');
      }
      let lStr = lValue + '';
      if (lStr === c_strObjectToString) {
        return '';
      }
      if (
        lStr === '' &&
        !c_attributsAAfficherMemeSiLaValeurEstVide.includes(formattedName)
      ) {
        return '';
      }
      if (formattedName === 'title') {
        lStr = lStr.toTitle();
      } else {
        lStr = lStr.toAttrValue();
      }
      return makeAttribute(formattedName, lStr);
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
    const c_attributsAAfficherMemeSiLaValeurEstVide = [
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
          'source',
        ].indexOf(tagName) > -1
      );
    };
    function str(name, attributes = {}, ...contents) {
      if (typeof name === 'function') {
        return name(
          Object.assign(Object.assign({}, attributes || {}), {
            children: contents,
          }),
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
    const fragment = (attributes) => {
      var _a;
      return contentsToString(
        (_a =
          attributes === null || attributes === void 0
            ? void 0
            : attributes.children) !== null && _a !== void 0
          ? _a
          : null,
      );
    };
    const listePropsCssSansAjoutUnite = {
      'animation-iteration-count': true,
      'aspect-ratio': true,
      'border-image': true,
      'border-image-outset': true,
      'border-image-slice': true,
      'border-image-width': true,
      'box-flex': true,
      'box-flex-group': true,
      'box-ordinal-group': true,
      'column-count': true,
      columns: true,
      flex: true,
      'flex-grow': true,
      'flex-positive': true,
      'flex-shrink': true,
      'flex-negative': true,
      'flex-order': true,
      'grid-area': true,
      'grid-row': true,
      'grid-row-end': true,
      'grid-row-span': true,
      'grid-row-start': true,
      'grid-column': true,
      'grid-column-end': true,
      'grid-column-span': true,
      'grid-column-start': true,
      'font-weight': true,
      'line-clamp': true,
      'line-height': true,
      opacity: true,
      order: true,
      orphans: true,
      'tab-size': true,
      widows: true,
      'z-index': true,
      zoom: true,
      'fill-opacity': true,
      'flood-opacity': true,
      'stop-opacity': true,
      'stroke-dasharray': true,
      'stroke-dashoffset': true,
      'stroke-miterlimit': true,
      'stroke-opacity': true,
      'stroke-width': true,
      'font-size-adjust': true,
      'initial-letter': true,
      'math-depth': true,
      'shape-image-threshold': true,
      'base-palette': true,
    };
    class JSXUtils {
      static toArg(aArgs) {
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
    }
    exports.JSXUtils = JSXUtils;
    (function (JSXUtils) {
      class DictionaryCallbacks {
        static add(aAttr, aFunc) {
          if (this.modeSimulation) {
            return '';
          }
          const lGUID = `_$_${this.GUID.get()}_$_`;
          let lName = '';
          if (!this.attrsAllowed.has(aAttr)) {
            return '';
          }
          this.recGUID.set(lGUID, { func: aFunc, attr: aAttr, name: lName });
          return lGUID;
        }
        static delete(aGUID, aAttr) {
          const lObj = this.recGUID.get(aGUID);
          if (!lObj) {
            return false;
          }
          this.recGUID.delete(aGUID);
          return true;
        }
        static getAndDelete(aGUID, aAttr) {
          if (!aGUID) {
            return null;
          }
          let lObj = this.recGUID.get(aGUID);
          if (lObj) {
            this.delete(aGUID, aAttr);
            if (lObj.attr !== aAttr) {
              return null;
            }
            return lObj;
          }
          return null;
        }
        static clear(aMapGUIDAIgnorer, aAvecAssert) {
          let lResult = true;
          const lTabErreurs = [];
          if (aMapGUIDAIgnorer && aMapGUIDAIgnorer.size > 0) {
            const lKeys = this.recGUID.keys();
            for (const lKey of lKeys) {
              if (!aMapGUIDAIgnorer.has(lKey)) {
                if (IE.estDebug && aAvecAssert) {
                  lTabErreurs.push(this.recGUID.get(lKey));
                }
                this.recGUID.delete(lKey);
                lResult = false;
              }
            }
          } else {
            if (this.recGUID.size > 0) {
              lResult = false;
              if (IE.estDebug && aAvecAssert) {
                lTabErreurs.push(...this.recGUID.values());
              }
            }
            this.recGUID.clear();
          }
          if (lTabErreurs.length > 0) {
            let lTabStr = lTabErreurs
              .slice(0, 20)
              .map((aVal) => ` -> ${aVal.attr}="${aVal.name || 'anonyme'}"`);
          }
          if (this.recGUID.size === 0) {
            this.GUID = new GUID_1.GenerateurGUID();
          }
          return lResult;
        }
        static getGUIDs() {
          if (this.recGUID.size === 0) {
            return null;
          }
          const lMap = new Map();
          for (const lKey of this.recGUID.keys()) {
            lMap.set(lKey, true);
          }
          return lMap;
        }
        static addAttrAllowed(aAttr) {
          this.attrsAllowed.set(aAttr, true);
        }
        static getStrCompare(aHtml) {
          if (aHtml && aHtml.replace) {
            return aHtml.replace(
              /(="_\$_g\d+(x\d+)?_\$_")/g,
              '="guid_compare"',
            );
          }
          return aHtml;
        }
        static getStrSimulation(aGetString) {
          this.modeSimulation = true;
          try {
            return aGetString();
          } finally {
            this.modeSimulation = false;
          }
        }
        static valueIsGUID(aValue) {
          if (aValue && aValue.replace) {
            return !!aValue.match(/_\$_g\d+(x\d+)?_\$_/g);
          }
          return false;
        }
      }
      DictionaryCallbacks.GUID = new GUID_1.GenerateurGUID();
      DictionaryCallbacks.recGUID = new Map();
      DictionaryCallbacks.attrsAllowed = new Map();
      DictionaryCallbacks.modeSimulation = false;
      JSXUtils.DictionaryCallbacks = DictionaryCallbacks;
    })(JSXUtils || (exports.JSXUtils = JSXUtils = {}));
    Invocateur_1.Invocateur.abonner(
      Invocateur_1.ObjetInvocateur.events.nettoyerJSX,
      () => {
        JSXUtils.DictionaryCallbacks.clear(null, true);
      },
    );
    IE.jsx = { str, fragment };
    (function (JSXUtils) {
      JSXUtils.transformCssProperties = _transformCssProperties;
    })(JSXUtils || (exports.JSXUtils = JSXUtils = {}));
  },
  fn: 'jsx.js',
});