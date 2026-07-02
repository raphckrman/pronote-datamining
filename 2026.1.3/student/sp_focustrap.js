IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.FocusTrap = void 0;
    const tslib_1 = require('tslib');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const FocusTrap = (_a) => {
      var { children, nodeQuiPrendFocusSiAucunElementFocusable } = _a,
        aProps = tslib_1.__rest(_a, [
          'children',
          'nodeQuiPrendFocusSiAucunElementFocusable',
        ]);
      const lId = 'FocusTrap_' + GUID_1.GUID.getId();
      const gererFocus = (aBorneSup) => {
        var _a;
        try {
          const lElements = ObjetHtml_1.GHtml.getElementsFocusablesDElement(
            lId,
            { avecTabindexNegatif: false },
          );
          let lNode;
          if (lElements.length > 0) {
            lNode = aBorneSup ? lElements[lElements.length - 1] : lElements[0];
            (_a = lNode === null || lNode === void 0 ? void 0 : lNode.focus) ===
              null || _a === void 0
              ? void 0
              : _a.call(lNode);
          }
          let lFocusReussi = true;
          lFocusReussi = !!lNode && document.activeElement === lNode;
          if (lFocusReussi) {
            return;
          }
          if (
            ObjetHtml_1.GHtml.elementExiste(
              nodeQuiPrendFocusSiAucunElementFocusable,
            )
          ) {
            ObjetHtml_1.GHtml.setFocus(
              nodeQuiPrendFocusSiAucunElementFocusable,
            );
          } else {
          }
        } catch (e) {}
      };
      const composeBorne = (aBorneSup) => {
        return IE.jsx.str('span', {
          role: 'button',
          'aria-hidden': 'true',
          class: Divers_css_1.SD.srOnly,
          tabindex: '0',
          ie_eventmap: { focus: gererFocus.bind(this, aBorneSup) },
        });
      };
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        composeBorne(true),
        IE.jsx.str(
          'div',
          Object.assign(
            { id: lId, class: Divers_css_1.SD.displayContents },
            aProps,
          ),
          children,
        ),
        composeBorne(false),
      );
    };
    exports.FocusTrap = FocusTrap;
  },
  fn: 'focustrap.js',
});