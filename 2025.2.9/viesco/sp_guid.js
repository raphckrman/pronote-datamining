IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UniqueNumberGenerator =
      exports.GUID =
      exports.GenerateurGUID =
        void 0;
    require('NamespaceIE');
    let lGUID_id = 1;
    let lGUID_ClassCss = 1;
    class GenerateurGUID {
      constructor() {
        this.fGUID = 1;
        this.fCompteur = 0;
      }
      get() {
        let lResult = 'g';
        if (this.fCompteur > 0) {
          lResult += this.fCompteur + 'x';
        }
        lResult += this.fGUID;
        if (this.fGUID === Number.MAX_VALUE) {
          this.fGUID = 1;
          this.fCompteur += 1;
        } else {
          this.fGUID += 1;
        }
        return lResult;
      }
    }
    exports.GenerateurGUID = GenerateurGUID;
    let GUID = {
      getId() {
        const lResult = 'id_' + lGUID_id;
        lGUID_id += 1;
        return lResult;
      },
      getClassCss() {
        const lResult = 'c_' + lGUID_ClassCss;
        lGUID_ClassCss += 1;
        return lResult;
      },
      generateur: GenerateurGUID,
      getGUIDDelphiVide() {
        return '{00000000-0000-0000-0000-000000000000}';
      },
    };
    exports.GUID = GUID;
    class UniqueNumberGenerator {
      constructor() {
        this.currentNumber = 1;
        this.releasedNumbers = new Set();
        this.activeNumbers = new Set();
      }
      generate() {
        let lNum;
        if (this.releasedNumbers.size > 0) {
          lNum = this.releasedNumbers.values().next().value;
          this.releasedNumbers.delete(lNum);
        } else {
          lNum = this.currentNumber++;
        }
        this.activeNumbers.add(lNum);
        return lNum;
      }
      release(num) {
        if (this.activeNumbers.has(num)) {
          this.activeNumbers.delete(num);
          this.releasedNumbers.add(num);
        }
      }
      isActive(num) {
        return this.activeNumbers.has(num);
      }
    }
    exports.UniqueNumberGenerator = UniqueNumberGenerator;
  },
  fn: 'guid.js',
});