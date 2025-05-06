IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetApplication = void 0;
    require('NamespaceIE.js');
    require('DeclarationExtensionsObjetNatif.js');
    require('Divers.js');
    require('IELog');
    require('jsx');
    require('IEHtmlComposants.js');
    require('DeclarationIndexFont.js');
    const DeferLoadingScript_1 = require('DeferLoadingScript');
    const ObjetMessageInformatif_1 = require('ObjetMessageInformatif');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetMessage_1 = require('ObjetMessage');
    Promise.resolve().then(() => require('pep.min.js'));
    global.GApplication = null;
    let uEstDebug = false;
    class ObjetApplication {
      constructor() {
        this.nomProduit = 'INDEX';
        this.hauteurBandeau = 22;
        this.estAppliMobile = false;
        this._objetMessage = null;
        this.mapObject = new Map();
        this.init();
        IEZoneFenetre_1.ZoneFenetre.idConteneurApp = this.getIdConteneur();
        this.messageInformatif =
          new ObjetMessageInformatif_1.ObjetMessageInformatif();
        if (!window.PointerEvent) {
          DeferLoadingScript_1.deferLoadingScript.loadAsync('pep_poly');
        }
      }
      init() {}
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
    }
    exports.ObjetApplication = ObjetApplication;
  },
  fn: 'objetapplication.js',
});