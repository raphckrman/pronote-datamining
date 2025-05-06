IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GCache = void 0;
    const _Cache_1 = require('_Cache');
    class Cache extends _Cache_1._Cache {
      constructor() {
        super();
        this._init();
      }
      _init() {
        this.general = new _Cache_1._Cache();
        this.ficheScolaire = new _Cache_1._Cache();
        this.resultatsClasses = new _Cache_1._Cache();
        this.dossierVS = new _Cache_1._Cache();
        this.agenda = new _Cache_1._Cache();
        this.livretScolaire = new _Cache_1._Cache();
        this.creneauxLibres = new _Cache_1._Cache();
      }
      reset() {
        this._init();
      }
    }
    exports.GCache = new Cache();
  },
  fn: 'cache.js',
});