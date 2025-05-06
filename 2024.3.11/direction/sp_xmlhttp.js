IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.getXmlHttp = getXmlHttp;
    try {
      global.Document.prototype.loadXML = function (S) {
        const LDocument = new DOMParser().parseFromString(S, 'text/xml');
        while (this.hasChildNodes()) {
          this.removeChild(this.lastChild);
        }
        for (let I = 0; I < LDocument.childNodes.length; I++) {
          this.appendChild(this.importNode(LDocument.childNodes[I], true));
        }
      };
    } catch (e) {}
    try {
      global.Document.prototype.__defineGetter__('xml', function () {
        return new XMLSerializer().serializeToString(this);
      });
    } catch (e) {}
    function getXmlHttp() {
      try {
        if (global.XMLHttpRequest) {
          return new XMLHttpRequest();
        }
        const lActiveX = global.ActiveXObject;
        if (lActiveX) {
          try {
            return new lActiveX('Msxml2.XMLHTTP');
          } catch (e) {
            return new lActiveX('Microsoft.XMLHTTP');
          }
        }
      } catch (e) {
        throw new Error('XmlHttp> ' + e);
      }
    }
  },
  fn: 'xmlhttp.js',
});