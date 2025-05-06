IE.fModule({
  f: function (exports, require, module, global) {
    const IEHtml = require('IEHtml.js');
    const { ToucheClavier } = require('ToucheClavier.js');
    IEHtml.addClass('collapsible', (aContexteCourant) => {
      _refresh(aContexteCourant);
      const lObserver = new MutationObserver((aMutations) => {
        if (aMutations[0] && aMutations[0].type === 'childList') {
          _refresh(aContexteCourant);
        }
      });
      lObserver.observe(aContexteCourant.node, { childList: true });
      return true;
    });
    function _refresh(aContexteCourant) {
      const lJNode = $(aContexteCourant.node);
      const lJHeaders = lJNode
        .children('li')
        .children('.collapsible-header:not([data-iecollapsibleinit])');
      if (lJHeaders.length === 0) {
        return;
      }
      lJHeaders.attr({ tabindex: 0, 'data-iecollapsibleinit': true });
      const lEstAccordeon = !aContexteCourant.node.classList.contains(
        'collapsible-not-accordeon',
      );
      const lJActiveBodies = lJNode
        .children('li.active')
        .children('.collapsible-body');
      if (lEstAccordeon) {
        lJActiveBodies.first().css('display', 'block');
      } else {
        lJActiveBodies.css('display', 'block');
      }
      lJHeaders.each((aIndex, aElement) => {
        $(aElement).attr(
          'aria-expanded',
          $(aElement).parent().hasClass('active') ? 'true' : 'false',
        );
      });
      const lAction = (aEvent) => {
        const $header = $(aEvent.target).closest('.collapsible-header');
        if (aEvent.target && $header.length) {
          const $collapsible = $header.closest('.collapsible');
          if ($collapsible[0] === aContexteCourant.node) {
            const $collapsibleLi = $header.closest('li');
            const $collapsibleLis = $collapsible.children('li');
            const isActive = $collapsibleLi[0].classList.contains('active');
            const index = $collapsibleLis.index($collapsibleLi);
            if (isActive) {
              close(index);
            } else {
              open(index);
            }
          }
        }
      };
      lJHeaders.off('click.collapsible keydown.collapsible').on({
        'click.collapsible'(aEvent) {
          lAction(aEvent);
        },
        'keydown.collapsible'(aEvent) {
          if (
            [
              ToucheClavier.Espace,
              ToucheClavier.RetourChariot,
              ToucheClavier.Echap,
            ].includes(aEvent.which)
          ) {
            lAction(aEvent);
          }
        },
      });
      function open(index) {
        const $collapsibleLi = lJNode.children('li').eq(index);
        if (
          $collapsibleLi.length &&
          !$collapsibleLi[0].classList.contains('active')
        ) {
          if (lEstAccordeon) {
            const $collapsibleLis = lJNode.children('li');
            const $activeLis = lJNode.children('li.active');
            $activeLis.each((aIndex, aEl) => {
              const index = $collapsibleLis.index($(aEl));
              close(index);
            });
          }
          $collapsibleLi[0].classList.add('active');
          const lJBody = $collapsibleLi.children('.collapsible-body');
          $collapsibleLi
            .children('.collapsible-header')
            .attr('aria-expanded', 'true');
          lJBody.css({ display: 'block', height: 0, overflow: 'hidden' });
          const lHeight = lJBody[0].scrollHeight;
          const lPTop = lJBody.css('padding-top');
          const lPBottom = lJBody.css('padding-bottom');
          lJBody.css({ paddingTop: 0, paddingBottom: 0 });
          lJBody
            .css({
              height: lHeight + 'px',
              paddingTop: lPTop,
              paddingBottom: lPBottom,
            })
            .off('transitionend.collapsible')
            .one('transitionend.collapsible', () => {
              lJBody.css({
                height: '',
                paddingTop: '',
                paddingBottom: '',
                overflow: '',
              });
            });
        }
      }
      function close(index) {
        const $collapsibleLi = lJNode.children('li').eq(index);
        if (
          $collapsibleLi.length &&
          $collapsibleLi[0].classList.contains('active')
        ) {
          $collapsibleLi[0].classList.remove('active');
          const lJBody = $collapsibleLi.eq(0).children('.collapsible-body');
          $collapsibleLi
            .children('.collapsible-header')
            .attr('aria-expanded', 'false');
          const lHeight = lJBody[0].scrollHeight;
          const lPTop = lJBody.css('padding-top');
          const lPBottom = lJBody.css('padding-bottom');
          lJBody.css({
            display: 'block',
            height: lHeight + 'px',
            paddingTop: lPTop,
            paddingBottom: lPBottom,
            overflow: 'hidden',
          });
          lJBody.off('transitionend.collapsible');
          lJBody.get(0).offsetWidth;
          lJBody
            .css({ height: '0', paddingTop: 0, paddingBottom: 0 })
            .one('transitionend.collapsible', () => {
              lJBody.css({
                display: '',
                overflow: '',
                height: '',
                paddingTop: '',
                paddingBottom: '',
              });
            });
        }
      }
    }
  },
  fn: 'iehtml.collapsible.js',
});