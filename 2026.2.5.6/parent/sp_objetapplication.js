IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplication = void 0;
    require('@librairies/script/Divers/NamespaceIE');
    require('@librairies/script/ExtensionsObjetsNatifs/DeclarationExtensionsObjetNatif');
    require('@librairies/script/Divers/Divers');
    require('@librairies/script/Divers/IELog');
    require('@librairies/script/Outils/jsx');
    require('@cp/Produit/Script/IEHtmlComposants');
    require('@cp/Declaration/DeclarationIndexFont');
    const DeferLoadingScript_1 = require('@librairies/script/Divers/DeferLoadingScript');
    const ObjetMessageInformatif_1 = require('@cp/Produit/Script/ObjetMessageInformatif');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const ObjetMessage_1 = require('@cp/script/ObjetsGraphiques/ObjetMessage');
    require('pep.min');
    global.GCouleur = undefined;
    let uEstDebug = false;
    class ObjetApplication {
      constructor() {
        this.nomProduit = 'INDEX';
        this.nomProduitSysteme = 'INDEX';
        this.hauteurBandeau = 22;
        this.estAppliMobile = false;
        this._objetMessage = null;
        this.mapObject = new Map();
        this.mapGenerics = new Map();
        this.init();
        IEZoneFenetre_1.ZoneFenetre.idConteneurApp = this.getIdConteneur();
        try {
          this.declarer();
        } catch (e) {}
      }
      init() {}
      declarer() {
        this.messageInformatif =
          new ObjetMessageInformatif_1.ObjetMessageInformatif();
        if (!window.PointerEvent) {
          DeferLoadingScript_1.deferLoadingScript.loadAsync('pep_poly');
        }
      }
      getGeneric(aKey) {
        return this.mapGenerics.get(aKey);
      }
      setGeneric(aKey, aObject) {
        if (this.mapGenerics.has(aKey)) {
          if (aObject === null) {
            return this.mapGenerics.delete(aKey);
          }
          return false;
        }
        if (aObject === null) {
          return false;
        }
        const lResult = this.mapGenerics.has(aKey);
        this.mapGenerics.set(aKey, aObject);
        return lResult;
      }
      getObject(aKey) {
        return this.mapObject.get(aKey);
      }
      setObject(aKey, aObject) {
        if (aObject === null) {
          return this.mapObject.delete(aKey);
        }
        const lResult = this.mapObject.has(aKey);
        this.mapObject.set(aKey, aObject);
        return lResult;
      }
      getNom() {
        return 'GApplication';
      }
      getIdConteneur() {
        return 'div';
      }
      getDemo() {
        return false;
      }
      getDateDemo() {
        return new Date();
      }
      getMessage() {
        if (!this._objetMessage) {
          this._objetMessage = new ObjetMessage_1.ObjetMessage();
        }
        return this._objetMessage;
      }
      estDebug() {
        return uEstDebug;
      }
      getModeExclusif() {
        return false;
      }
      getCouleur() {
        return global.GCouleur;
      }
    }
    exports.ObjetApplication = ObjetApplication;
  },
  fn: 'objetapplication.js',
});