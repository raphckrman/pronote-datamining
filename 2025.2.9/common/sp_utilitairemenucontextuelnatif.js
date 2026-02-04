IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireMenuContextuelNatif = void 0;
    const AccessApp_1 = require('AccessApp');
    const UtilitaireMenuContextuelNatif = {
      desactiverSurElement(aJElement) {
        if (IE.estMobile || !aJElement || !aJElement.length) {
          return;
        }
        return aJElement
          .off(
            'contextmenu.AvecMenuContextuel1 contextmenu.AvecMenuContextuel2',
          )
          .on(
            'contextmenu.AvecMenuContextuel1',
            UtilitaireMenuContextuelNatif.accepter,
          )
          .on(
            {
              'contextmenu.AvecMenuContextuel2': function (event) {
                event.originalEvent.__marqueurAutoriserMenuContextuel = true;
                return true;
              },
            },
            '.AvecMenuContextuel',
          );
      },
      accepter(aEvent) {
        var _a, _b, _c;
        if (aEvent.type !== 'contextmenu') {
          return false;
        }
        const lName =
          aEvent.target && aEvent.target.tagName
            ? aEvent.target.tagName.toLowerCase()
            : '';
        let lType = aEvent.target.type || '';
        lType = lType.toLowerCase();
        const lInputConcerne =
          (lName === 'input' &&
            lType !== 'checkbox' &&
            lType !== 'radio' &&
            lType !== 'button') ||
          lName === 'textarea';
        return (
          ((_c =
            (_b =
              (_a = (0, AccessApp_1.getApp)()) === null || _a === void 0
                ? void 0
                : _a.getOptionsDebug) === null || _b === void 0
              ? void 0
              : _b.call(_a)) === null || _c === void 0
            ? void 0
            : _c.menuContextuelNatif) ||
          (lInputConcerne &&
            !$(aEvent.target).hasClass('SansMenuContextuel')) ||
          (aEvent.originalEvent &&
            '__marqueurAutoriserMenuContextuel' in aEvent.originalEvent &&
            aEvent.originalEvent.__marqueurAutoriserMenuContextuel === true) ||
          $(aEvent.target).hasClass('AvecMenuContextuel')
        );
      },
    };
    exports.UtilitaireMenuContextuelNatif = UtilitaireMenuContextuelNatif;
  },
  fn: 'utilitairemenucontextuelnatif.js',
});