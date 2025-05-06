IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireMenuContextuelNatif = void 0;
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