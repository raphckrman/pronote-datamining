IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.WidgetEdito = void 0;
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetWidget_1 = require('ObjetWidget');
    class WidgetEdito extends ObjetWidget_1.Widget.ObjetWidget {
      construire(aParams) {
        this.donnees = aParams.donnees;
        const lWidget = { getHtml: this.composeWidgetEdito.bind(this) };
        $.extend(true, aParams.donnees, lWidget);
        aParams.construireWidget(this.donnees);
      }
      composeWidgetEdito() {
        const H = [];
        H.push(
          IE.jsx.str(
            'div',
            null,
            ObjetChaine_1.GChaine.replaceRCToHTML(this.donnees.contenu),
          ),
        );
        return H.join('');
      }
    }
    exports.WidgetEdito = WidgetEdito;
  },
  fn: 'widgetedito.js',
});