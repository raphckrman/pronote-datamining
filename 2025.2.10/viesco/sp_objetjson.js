IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetJSON = void 0;
    require('DeclarationJQuery');
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_ChampsJSON_1 = require('Enumere_ChampsJSON');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const TypeHttpVariable_1 = require('TypeHttpVariable');
    const TypeDomaine_1 = require('TypeDomaine');
    const TypeArrondi_1 = require('TypeArrondi');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const ObjetChaine_1 = require('ObjetChaine');
    const TypeNote_1 = require('TypeNote');
    const ObjetJSON = {
      parse(data, aParametres) {
        if (!data || typeof data !== 'string') {
          return null;
        }
        const lParametres = Object.assign(
          { ignorerEntites: false, JSONCollection: null },
          aParametres,
        );
        const lJSON = ObjetJSON.parseJSON(data);
        return ObjetJSON.parseVariables(lJSON, lParametres);
      },
      parseJSON(data) {
        let lJSON;
        try {
          lJSON = JSON.parse(data);
        } catch (e) {
          lJSON = null;
        }
        return lJSON;
      },
      parseVariables(aJSON, aParametres) {
        let lJSON;
        const lParametres = Object.assign(
          { ignorerEntites: false, JSONCollection: null },
          aParametres,
        );
        try {
          lJSON = _parseVariables(aJSON, lParametres);
        } catch (e) {
          lJSON = {};
        }
        return lJSON;
      },
      toJSON(aObjet, aParametres) {
        let lJSON;
        try {
          if (
            aParametres &&
            aParametres.ignorerEntites &&
            !aParametres.JSONCollection
          ) {
            lJSON = aObjet;
          } else {
            lJSON = ObjetJSON.preparerJSON(aObjet, aParametres);
          }
          return JSON.stringify(lJSON);
        } catch (e) {}
        return '';
      },
      preparerJSON(aObjet, aParametres) {
        const lChaine = JSON.stringify(aObjet);
        let lJSON = JSON.parse(lChaine);
        if (
          aParametres &&
          aParametres.ignorerEntites &&
          !aParametres.JSONCollection
        ) {
          return lJSON;
        }
        lJSON = _toJSON(lJSON, {
          ignorerEntites: !!(aParametres && aParametres.ignorerEntites),
          JSONCollection:
            aParametres && aParametres.JSONCollection
              ? aParametres.JSONCollection
              : null,
        });
        return lJSON;
      },
    };
    exports.ObjetJSON = ObjetJSON;
    function _parseElement(aJSON, aParametres) {
      const lElement = new ObjetElement_1.ObjetElement().fromJSON(aJSON);
      let lValeur;
      let lProp;
      if (aJSON) {
        if (lElement.Libelle) {
          lElement.Libelle = aParametres.ignorerEntites
            ? lElement.Libelle
            : ObjetChaine_1.GChaine.ajouterEntites(lElement.Libelle);
        }
        for (lProp in aJSON) {
          if (
            lProp !== ObjetElement_1.ObjetElement.const_JSON.libelle.JSON &&
            lProp !== ObjetElement_1.ObjetElement.const_JSON.numero.JSON &&
            lProp !== ObjetElement_1.ObjetElement.const_JSON.genre.JSON &&
            lProp !== ObjetElement_1.ObjetElement.const_JSON.position.JSON &&
            lProp !== ObjetElement_1.ObjetElement.const_JSON.actif.JSON
          ) {
            lValeur = aJSON[lProp];
            if (
              !_parseVariablesDeSource(lElement, lProp, lValeur, aParametres)
            ) {
              lElement[lProp] = lValeur;
            }
          }
        }
      }
      return lElement;
    }
    function _strToNote(aNote) {
      if (!TypeNote_1.TypeNote) {
        return null;
      }
      if (MethodesObjet_1.MethodesObjet.isArray(aNote)) {
        const T = [];
        for (const i in aNote) {
          T[i] = new TypeNote_1.TypeNote(aNote[i]);
        }
        return T;
      }
      return new TypeNote_1.TypeNote(aNote);
    }
    function _parseVariable(aJSON, aParametres) {
      if (!aJSON) {
        return null;
      }
      const lType = aJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type];
      const lValeur = aJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur];
      switch (lType) {
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpElement:
          if (MethodesObjet_1.MethodesObjet.isArray(lValeur)) {
            const lListeElements =
              new ObjetListeElements_1.ObjetListeElements();
            if (lValeur && lValeur.length) {
              for (let i = 0, lNb = lValeur.length; i < lNb; i++) {
                const lElement = _parseElement(lValeur[i], aParametres);
                lListeElements.addElement(lElement);
              }
            }
            return lListeElements;
          }
          return _parseElement(lValeur, aParametres);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpFichierBase64:
          if (
            aParametres &&
            aParametres.JSONCollection &&
            aParametres.JSONCollection.fichiers
          ) {
            const lFichierBase64 = aParametres.JSONCollection.fichiers[lValeur];
            aParametres.JSONCollection.fichiers[lValeur] = null;
            return lFichierBase64;
          }
          return '';
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpCardinal:
          return ObjetChaine_1.GChaine.strToCardinal(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpBoolean:
          return ObjetChaine_1.GChaine.strToBoolean(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpString:
          return ObjetChaine_1.GChaine.ajouterEntites(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpColor:
          return lValeur;
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpDateTime:
          return ObjetChaine_1.GChaine.strToDate(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpNote:
          return _strToNote(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpTraduction:
          return lValeur;
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpIP:
          return ObjetChaine_1.GChaine.strToIp(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpInteger:
          return ObjetChaine_1.GChaine.strToInteger(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpDouble:
          return ObjetChaine_1.GChaine.strToDouble(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpDomaine:
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpEnsemble:
          return new TypeDomaine_1.TypeDomaine(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpEnsembleCardinal:
          return new TypeDomaine_1.TypeDomaine(
            lValeur,
            TypeDomaine_1.TypeDomaine.CTailleOuverte,
          );
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpArrondi:
          return new TypeArrondi_1.TypeArrondi(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpHtml:
          return ObjetChaine_1.GChaine.htmlToSafeHtml(lValeur);
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpHtmlSafe:
          return lValeur;
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpEnsembleNombre:
          return new TypeEnsembleNombre_1.TypeEnsembleNombre().fromString(
            lValeur,
          );
        default:
          return lValeur;
      }
    }
    function _estVariable(aJSON) {
      if (
        aJSON &&
        aJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type] &&
        aJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur] !== undefined &&
        aJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type] >= 0
      ) {
        const lKeys = Object.keys(aJSON);
        if (
          lKeys.length === 2 &&
          ((lKeys[0] === Enumere_ChampsJSON_1.TypeChampsJSON.type &&
            lKeys[1] === Enumere_ChampsJSON_1.TypeChampsJSON.valeur) ||
            (lKeys[1] === Enumere_ChampsJSON_1.TypeChampsJSON.type &&
              lKeys[0] === Enumere_ChampsJSON_1.TypeChampsJSON.valeur))
        ) {
          return true;
        }
        return false;
      }
      return false;
    }
    function _estObjet(aValeur) {
      return aValeur && !aValeur.trim && typeof aValeur === 'object';
    }
    function _parseVariablesDeSource(
      aObjetResultat,
      aNomProprieteSource,
      aValeurSource,
      aParametres,
    ) {
      let lEstVariable;
      let lResult = true;
      if (MethodesObjet_1.MethodesObjet.isString(aValeurSource)) {
        aObjetResultat[aNomProprieteSource] = aParametres.ignorerEntites
          ? aValeurSource
          : ObjetChaine_1.GChaine.ajouterEntites(aValeurSource);
      } else if (_estObjet(aValeurSource)) {
        lEstVariable = false;
        if (!Array.isArray(aValeurSource)) {
          lEstVariable = _estVariable(aValeurSource);
        }
        aObjetResultat[aNomProprieteSource] = lEstVariable
          ? _parseVariable(aValeurSource, aParametres)
          : _parseVariables(aValeurSource, aParametres);
      } else {
        lResult = false;
      }
      return lResult;
    }
    function _parseVariables(aJSON, aParametres) {
      if (!aJSON) {
        return aJSON;
      }
      for (const i in aJSON) {
        _parseVariablesDeSource(aJSON, i, aJSON[i], aParametres);
      }
      return aJSON;
    }
    function _preparerVariableToJSON(aJSON, aParametres) {
      if (!aJSON) {
        return aJSON;
      }
      const lType = aJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type];
      switch (lType) {
        case TypeHttpVariable_1.TypeHttpVariable.TypeHttpFichierBase64:
          if (aParametres && aParametres.JSONCollection) {
            if (!aParametres.JSONCollection.fichiers) {
              aParametres.JSONCollection.fichiers = [];
            }
            aParametres.JSONCollection.fichiers.push(
              aJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur],
            );
            aJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur] =
              aParametres.JSONCollection.fichiers.length - 1;
            return aJSON;
          }
          return aJSON;
        default:
          return aJSON;
      }
    }
    function _toJSON(aJSON, aParametres) {
      if (!aJSON) {
        return aJSON;
      }
      let lValeur;
      for (const i in aJSON) {
        lValeur = aJSON[i];
        if (lValeur) {
          if (typeof lValeur === 'string') {
            if (!aParametres.ignorerEntites) {
              aJSON[i] = ObjetChaine_1.GChaine.enleverEntites(lValeur);
            }
          } else if (_estVariable(lValeur)) {
            aJSON[i] = _preparerVariableToJSON(lValeur, aParametres);
          } else if (
            lValeur !== true &&
            !lValeur.MAX_VALUE &&
            !lValeur.getDate &&
            typeof lValeur === 'object'
          ) {
            aJSON[i] = _toJSON(lValeur, aParametres);
          }
        }
      }
      return aJSON;
    }
  },
  fn: 'objetjson.js',
});