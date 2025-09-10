IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StylesCustomIEHTMLRipple = void 0;
    require('IEHtml.Ripple.css');
    const IEHtml = require('IEHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const ObjetHtml_1 = require('ObjetHtml');
    const IEHtml_Ripple_css_1 = require('IEHtml.Ripple.css');
    const c_DureeActivate = 500;
    const c_DureeDeactivatee = 150;
    exports.StylesCustomIEHTMLRipple = {
      ieRippleAllowpass: 'ie-ripple-allowpass',
    };
    IEHtml.addClass('ie-ripple', (aContexteCourant, aNodeName, aOutils) => {
      if (!IE.estMobile) {
        return;
      }
      let lTimeoutActivate = null;
      let lTimeoutDeactivate = null;
      let lActivateEnd = {};
      const lEndDeactive = () => {
        aContexteCourant.node.classList.remove(
          IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRippleDeactivation,
        );
      };
      const lHide = () => {
        if (lActivateEnd && lActivateEnd.event && lActivateEnd.timeout) {
          lActivateEnd = {};
          aContexteCourant.node.classList.remove(
            IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRippleActivation,
          );
          aContexteCourant.node.classList.add(
            IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRippleDeactivation,
          );
          lTimeoutDeactivate = setTimeout(lEndDeactive, c_DureeDeactivatee);
        }
      };
      $(aContexteCourant.node).on({
        pointerdown(aEvent) {
          if (
            $(this).is(':disabled') ||
            $(this).hasClass('disabled') ||
            $(this).hasClass(
              IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRippleDisabled,
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
                IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRipple,
              )
            ) {
              return;
            }
            const lNode = ObjetHtml_1.GHtml.getClosestFocusable(aEvent.target);
            if (
              lNode &&
              !lNode.classList.contains(
                IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRipple,
              ) &&
              !lNode.classList.contains(
                exports.StylesCustomIEHTMLRipple.ieRippleAllowpass,
              ) &&
              !!lNode.closest(
                `.${IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRipple}`,
              )
            ) {
              return;
            }
          }
          if (
            aContexteCourant.node.classList.contains(
              IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRippleActivation,
            )
          ) {
            aContexteCourant.node.classList.remove(
              IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRippleActivation,
            );
            aContexteCourant.node.scrollTop;
          }
          clearTimeout(lTimeoutActivate);
          clearTimeout(lTimeoutDeactivate);
          lActivateEnd = {};
          lEndDeactive();
          aContexteCourant.node.classList.add(
            IEHtml_Ripple_css_1.StylesIEHtmlRipple.ieRippleActivation,
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
    });
  },
  fn: 'iehtml.ripple.js',
});