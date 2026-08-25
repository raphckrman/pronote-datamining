IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StylesCustomIEHTMLRipple = void 0;
    require('@cp/Produit/Css/IEHtml.Ripple.css');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const c_DureeActivate = 500;
    const c_DureeDeactivatee = 150;
    exports.StylesCustomIEHTMLRipple = {
      ieRippleAllowpass: 'ie-ripple-allowpass',
    };
    IEHtml_1.IEHtml.addClass(
      'ie-ripple',
      (aContexteCourant, aNodeName, aOutils) => {
        if (!ObjetNavigateur_1.Navigateur.isTactile) {
          return;
        }
        let lTimeoutActivate = null;
        let lTimeoutDeactivate = null;
        let lActivateEnd = {};
        const lEndDeactive = () => {
          aContexteCourant.node.classList.remove(
            IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleDeactivation,
          );
        };
        const lHide = () => {
          if (lActivateEnd && lActivateEnd.event && lActivateEnd.timeout) {
            lActivateEnd = {};
            aContexteCourant.node.classList.remove(
              IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleActivation,
            );
            aContexteCourant.node.classList.add(
              IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleDeactivation,
            );
            lTimeoutDeactivate = setTimeout(lEndDeactive, c_DureeDeactivatee);
          }
        };
        $(aContexteCourant.node).on({
          pointerdown(aEvent) {
            var _a;
            if (
              (_a = aEvent.originalEvent) === null || _a === void 0
                ? void 0
                : _a._interruptRipple_
            ) {
              return;
            }
            if (
              $(this).is(':disabled') ||
              $(this).hasClass('disabled') ||
              $(this).hasClass(
                IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleDisabled,
              ) ||
              $(this).attr('aria-disabled') === 'true'
            ) {
              return;
            }
            if (
              aEvent.target &&
              aEvent.target !== aContexteCourant.node &&
              aEvent.target.classList
            ) {
              if (
                aEvent.target.classList.contains(
                  IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple,
                )
              ) {
                return;
              }
              const lNode = ObjetHtml_1.GHtml.getClosestFocusable(
                aEvent.target,
              );
              if (
                lNode &&
                !lNode.classList.contains(
                  IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple,
                ) &&
                !lNode.classList.contains(
                  exports.StylesCustomIEHTMLRipple.ieRippleAllowpass,
                ) &&
                !!lNode.closest(
                  `.${IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple}`,
                )
              ) {
                return;
              }
            }
            if (
              aContexteCourant.node.classList.contains(
                IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleActivation,
              )
            ) {
              aContexteCourant.node.classList.remove(
                IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleActivation,
              );
              aContexteCourant.node.scrollTop;
            }
            clearTimeout(lTimeoutActivate);
            clearTimeout(lTimeoutDeactivate);
            lActivateEnd = {};
            lEndDeactive();
            aEvent.originalEvent._interruptRipple_ = true;
            aContexteCourant.node.classList.add(
              IEHtml_Ripple_css_1.SIEHtmlRipple.ieRippleActivation,
            );
            const lRect = ObjetPosition_1.GPosition.getClientRect(
              aContexteCourant.node,
            );
            let lPosEventRelatif = {
              x: aEvent.clientX - lRect.left,
              y: aEvent.clientY - lRect.top,
            };
            const lSizeMax = Math.max(lRect.width, lRect.height);
            const lSizeAfter = lSizeMax / 3;
            const lScale = (lSizeMax / lSizeAfter) * 2;
            const lPosX = lPosEventRelatif.x - lSizeAfter / 2;
            const lPosY = lPosEventRelatif.y - lSizeAfter / 2;
            $(aContexteCourant.node).css({
              '--ie-ripple-size': `${lSizeAfter}px`,
              '--ie-ripple-scale': lScale,
              '--ie-ripple-translate': `${lPosX}px, ${lPosY}px`,
            });
            lTimeoutActivate = setTimeout(() => {
              lActivateEnd.timeout = true;
              lHide();
            }, c_DureeActivate);
          },
          'touchend touchcancel mouseup mouseleave dragend'() {
            lActivateEnd.event = true;
            lHide();
          },
          destroyed() {
            clearTimeout(lTimeoutActivate);
            clearTimeout(lTimeoutDeactivate);
          },
        });
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-ripple');
        return true;
      },
    );
  },
  fn: 'iehtml.ripple.js',
});