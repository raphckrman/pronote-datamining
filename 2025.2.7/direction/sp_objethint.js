IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetHint = void 0;
    const GUID_1 = require('GUID');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const MethodesTableau_1 = require('MethodesTableau');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const ObjetSupport_1 = require('ObjetSupport');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const AccessApp_1 = require('AccessApp');
    let uTimeoutFondu = null;
    const uIdConteneur = GUID_1.GUID.getId();
    const uIdScroll = uIdConteneur + '_scroll';
    let uHintsEnAttente = [];
    let uHintEnCoursChargement = null;
    let uHintAffiche = null;
    let uHintInitialise = false;
    class ConteneurEventInvocateur {
      constructor() {
        this.pileAbonnementInvocateur = {};
      }
      getPileAbonnement() {
        return this.pileAbonnementInvocateur;
      }
    }
    const uConteneurEventInvocateur = new ConteneurEventInvocateur();
    const ObjetHint = {
      optionsDefault: {
        sansDelai: false,
        maxHeight: 500,
        maxWidth: 550,
        delaiTimer: 400,
        delaiFermeture: 0,
        sansDelaiFermetureSuppression: false,
      },
      getDisabled() {
        return !ObjetNavigateur_1.Navigateur;
      },
      start(aContenu, aOptions) {
        if (ObjetHint.getDisabled()) {
          IE.log.addLog('ObjetHint.start => disabled sur espaces mobiles');
          return;
        }
        if (!uHintInitialise) {
          uHintInitialise = true;
          $(document)
            .off('pointerdown.Hint keyup.Hint')
            .on('pointerdown.Hint keyup.Hint', (aEvent) => {
              _stopAll(aEvent);
            });
          $(window)
            .off('resize.Hint')
            .on('resize.Hint', (event) => {
              if (uHintAffiche && uHintAffiche.hintTouch) {
                return;
              }
              _stopAll(event);
            });
        }
        const lHint = Object.assign(
          { position: null, event: null, elementDOM: null },
          ObjetHint.optionsDefault,
          aOptions,
        );
        lHint.actif = false;
        if (!aContenu || aContenu === '') {
          return lHint;
        }
        if (lHint.elementDOM && lHint.elementDOM.setAttribute) {
          lHint.elementDOM.setAttribute('title', '');
        }
        lHint.actif = true;
        uHintsEnAttente.push(lHint);
        if (lHint.sansDelai) {
          _afficher(aContenu, lHint);
        } else {
          lHint.promiseTimerDelai = new Promise((aResolve) => {
            lHint.timer = setTimeout(() => {
              _afficher(aContenu, lHint);
              if (lHint.pomiseAfficher) {
                lHint.pomiseAfficher.then(() => {
                  aResolve();
                });
              } else {
                aResolve();
              }
            }, lHint.delaiTimer);
          });
        }
        return lHint;
      },
      stop(aHint) {
        if (aHint && aHint === uHintEnCoursChargement) {
          return false;
        }
        if (aHint) {
          const lARetirer = !aHint.estAffiche;
          _stopHint(aHint);
          if (lARetirer) {
            setTimeout(() => {
              _retirerHintPileAttente(aHint);
            }, 0);
          }
        } else {
          _stopAll();
        }
      },
      attach(aParam) {
        if (ObjetHint.getDisabled()) {
          IE.log.addLog('ObjetHint.attach > disabled sur espaces mobiles');
          return;
        }
        const lNamespace = aParam.namespace
            ? (aParam.namespace = '.' + aParam.namespace)
            : '.IEHint',
          lContenu = aParam.contenu,
          lInterrupt = aParam.interrupt,
          lMargeDeplacementTouch = 50,
          lIdentEventsTouch =
            ObjetNavigateur_1.Navigateur.getEventInvocateur('pointermove');
        let lHint;
        let lTimeoutTouch;
        const lStop = function () {
          if (lTimeoutTouch) {
            clearTimeout(lTimeoutTouch);
            lTimeoutTouch = null;
          }
          Invocateur_1.Invocateur.desabonner(
            lIdentEventsTouch,
            uConteneurEventInvocateur,
          );
          if (ObjetHint.stop(lHint) !== false) {
            lHint = null;
          }
        };
        if (!aParam.$Element) {
          return false;
        }
        if (aParam.off !== false) {
          aParam.$Element.off(
            ' pointerover' +
              lNamespace +
              ' pointerleave' +
              lNamespace +
              ' pointerout' +
              lNamespace +
              ' destroyed' +
              lNamespace +
              ' pointerdown' +
              lNamespace,
          );
        }
        const lElementDOM = aParam.$Element.get(0);
        const lMap = {};
        lMap['pointerover' + lNamespace] = function (event) {
          if (event.pointerType === 'touch') {
            return;
          }
          if (uHintEnCoursChargement) {
            return;
          }
          if (lInterrupt && lInterrupt.call(this, event)) {
            return;
          }
          const lContenuAAfficher = lContenu;
          lHint = ObjetHint.start(lContenuAAfficher, {
            event: event,
            elementDOM: lElementDOM,
          });
        };
        lMap['destroyed' + lNamespace] = function () {
          lStop();
        };
        lMap['pointerleave' + lNamespace + ' pointerout' + lNamespace] =
          function (aEvent) {
            if (aEvent.pointerType === 'touch') {
              return;
            }
            if (lHint && lHint.hintTouch) {
              return;
            }
            lStop();
          };
        lMap['pointerdown' + lNamespace] = function (event) {
          if (event.pointerType !== 'touch') {
            return;
          }
          if (lInterrupt && lInterrupt.call(this, event)) {
            return;
          }
          if (event.originalEvent.__hintSurEventPointerDown__) {
            return;
          }
          event.originalEvent.hintTouch = true;
          const lPositionEvent =
            ObjetPosition_1.GPosition.getPositionEventJQuery(event);
          lHint = ObjetHint.start(lContenu, {
            delaiTimer: 500,
            event: event,
            position: { x: lPositionEvent.x + 5, y: lPositionEvent.y + 5 },
            elementDOM: lElementDOM,
            avecTestDisplay: true,
          });
          if (!lHint || !lHint.promiseTimerDelai) {
            return;
          }
          const lTestDeplacement = function (aEvent) {
            if (lHint && lHint.actif && lHint.position) {
              const lPositionEvent =
                ObjetPosition_1.GPosition.getPositionEventJQuery(aEvent);
              if (
                Math.abs(lPositionEvent.x - lHint.position.x) >
                  lMargeDeplacementTouch ||
                Math.abs(lPositionEvent.y - lHint.position.y) >
                  lMargeDeplacementTouch
              ) {
                lStop();
              }
            }
          };
          Invocateur_1.Invocateur.desabonner(
            lIdentEventsTouch,
            uConteneurEventInvocateur,
          );
          Invocateur_1.Invocateur.abonner(
            lIdentEventsTouch,
            lTestDeplacement,
            uConteneurEventInvocateur,
          );
          lHint.promiseTimerDelai.then(() => {
            if (!lHint.estAffiche) {
              return;
            }
            event.originalEvent.__hintSurEventPointerDown__ = true;
            lHint.hintTouch = true;
            if (lHint.hintAvecScroll) {
              lHint.stopSurFinScroll = lStop;
              return;
            }
            if (lTimeoutTouch) {
              clearTimeout(lTimeoutTouch);
            }
            lTimeoutTouch = setTimeout(() => {
              lTimeoutTouch = null;
              if (lHint && lHint.actif && lHint.estAffiche) {
                lStop();
              }
            }, 1500);
          });
        };
        aParam.$Element.on(lMap);
        aParam.$Element = null;
      },
      nodeDansHint(aNode) {
        return $(aNode).parents('#' + uIdConteneur.escapeJQ()).length > 0;
      },
    };
    exports.ObjetHint = ObjetHint;
    function _stopHint(aHint) {
      if (!aHint || aHint === uHintEnCoursChargement) {
        return;
      }
      if (aHint.elementDOM && aHint.elementDOM.removeAttribute) {
        aHint.elementDOM.removeAttribute('title');
      }
      if (aHint.estAffiche) {
        uHintAffiche = null;
        $('#' + uIdConteneur.escapeJQ()).removeClass('visible');
        if (
          ObjetSupport_1.Support.avecSupportTransitions &&
          !aHint.sansDelaiFermetureSuppression
        ) {
          clearTimeout(uTimeoutFondu);
          uTimeoutFondu = setTimeout(() => {
            ObjetHtml_1.GHtml.supprimerElementDOM(uIdConteneur);
            uTimeoutFondu = null;
          }, 200);
        } else {
          ObjetHtml_1.GHtml.supprimerElementDOM(uIdConteneur);
        }
      }
      if (aHint.timerFermeture) {
        clearTimeout(aHint.timerFermeture);
        aHint.timerFermeture = null;
      }
      if (aHint.timer) {
        clearTimeout(aHint.timer);
        aHint.timer = null;
      }
      aHint.estAffiche = false;
      aHint.actif = false;
    }
    function _stopEnAttente() {
      let lHintEnAttente;
      for (let i = 0, lNb = uHintsEnAttente.length; i < lNb; i++) {
        lHintEnAttente = uHintsEnAttente[i];
        if (lHintEnAttente) {
          lHintEnAttente.actif = false;
          if (lHintEnAttente.timer) {
            clearTimeout(lHintEnAttente.timer);
            lHintEnAttente.timer = null;
          }
        }
      }
      uHintsEnAttente = [];
    }
    function _stopAll(event, aConserverHintEnCours) {
      if (event && event.originalEvent && event.originalEvent.hintTouch) {
        return;
      }
      if (uHintEnCoursChargement) {
        return;
      }
      if (uHintAffiche && !aConserverHintEnCours) {
        _stopHint(uHintAffiche);
      }
      _stopEnAttente();
    }
    function _getContenu(aContenu, aHint) {
      if (MethodesObjet_1.MethodesObjet.isFunction(aContenu)) {
        const lResult = aContenu(aHint);
        if (typeof lResult === 'string') {
          return lResult;
        }
        uHintEnCoursChargement = aHint;
        return lResult.finally(() => {
          setTimeout(() => {
            if (aHint === uHintEnCoursChargement) {
              uHintEnCoursChargement = null;
            }
          }, 50);
        });
      } else {
        return aContenu;
      }
    }
    function _retirerHintPileAttente(aHint) {
      const lIndice = uHintsEnAttente.indexOf(aHint);
      if (lIndice >= 0) {
        MethodesTableau_1.MethodesTableau.supprimerElement(
          uHintsEnAttente,
          lIndice,
        );
      }
    }
    function _loopAnimateScroll(aHint, aId, aHauteurAScroller) {
      const lDuree = (aHauteurAScroller * 1000) / 100;
      $(aId)
        .delay(1000)
        .animate(
          { scrollTop: aHauteurAScroller },
          {
            duration: lDuree,
            easing: 'linear',
            done() {
              if (aHint.stopSurFinScroll) {
                aHint.stopSurFinScroll();
              }
            },
          },
        )
        .delay(1000)
        .animate(
          { scrollTop: 0 },
          {
            duration: 300,
            done: function () {
              _loopAnimateScroll(aHint, aId, aHauteurAScroller);
            },
          },
        );
    }
    function _afficher(aContenu, aHint) {
      if (uHintEnCoursChargement) {
        return;
      }
      if (
        aHint.avecTestDisplay &&
        aHint.elementDOM &&
        !$(aHint.elementDOM).is(':visible')
      ) {
        return;
      }
      if (_avecTitleDansEventHint(aHint)) {
        return;
      }
      aHint.pomiseAfficher = Promise.resolve()
        .then(() => {
          return _getContenu(aContenu, aHint);
        })
        .then((aContenu) => {
          if (!aHint.actif || !aContenu || aContenu === '') {
            aHint.timer = null;
            aHint.actif = false;
            return;
          }
          const lContenu = aContenu;
          _retirerHintPileAttente(aHint);
          _stopAll();
          uHintAffiche = aHint;
          uHintAffiche.contenu = lContenu;
          clearTimeout(uTimeoutFondu);
          aHint.estAffiche = true;
          aHint.timer = null;
          if (aHint.delaiFermeture > 0) {
            aHint.timerFermeture = setTimeout(() => {
              _stopHint(aHint);
            }, aHint.delaiFermeture);
          }
          let lConteneur = ObjetHtml_1.GHtml.getElement(uIdConteneur);
          if (!ObjetHtml_1.GHtml.elementExiste(lConteneur)) {
            lConteneur = ObjetHtml_1.GHtml.htmlToDOM(
              '<div id="' + uIdConteneur + '" class="ie-hint"></div>',
            );
            ObjetHtml_1.GHtml.insererElementDOM(
              ObjetHtml_1.GHtml.getElement(
                (0, AccessApp_1.getApp)().getIdConteneur(),
              ),
              lConteneur,
            );
          }
          ObjetHtml_1.GHtml.setHtml(lConteneur, compose(lContenu, aHint));
          let lPositionEvent = {};
          if (!aHint.position && aHint.event && IE.estMobile) {
            lPositionEvent = ObjetPosition_1.GPosition.getPositionEventJQuery(
              aHint.event,
            );
          }
          const lPosition = Object.assign(
              {
                y: ObjetNavigateur_1.Navigateur.pointerY,
                x: ObjetNavigateur_1.Navigateur.pointerX,
              },
              lPositionEvent,
              aHint.position,
            ),
            lDecalage = aHint.position ? { x: 0, y: 0 } : { x: 0, y: 20 };
          const lJScroll = $('#' + uIdScroll.escapeJQ()),
            lHeightScroll = lJScroll.height(),
            lHeightContenu = lJScroll.children().height(),
            lAvecScroll = lHeightScroll < lHeightContenu;
          lJScroll.css('width', lJScroll.outerWidth());
          ObjetPosition_1.GPosition.placerFicheSource(
            uIdConteneur,
            lPosition.x,
            lPosition.x,
            lPosition.y,
            lPosition.y,
            false,
            lDecalage,
          );
          $(lConteneur).addClass('visible');
          if (lAvecScroll) {
            aHint.hintAvecScroll = true;
            _loopAnimateScroll(
              aHint,
              '#' + uIdScroll.escapeJQ(),
              lHeightContenu - lHeightScroll,
            );
          }
        });
    }
    function compose(aContenu, aHint) {
      return IE.jsx.str(
        'div',
        {
          id: uIdScroll,
          tabindex: '-1',
          class: 'ie-hint-cont',
          style: `max-height:${Math.min(aHint.maxHeight, ObjetNavigateur_1.Navigateur.ecranL)}px; max-width:${Math.min(aHint.maxWidth, ObjetNavigateur_1.Navigateur.ecranH)}px;`,
        },
        IE.jsx.str('div', null, aContenu),
      );
    }
    function _avecTitleDansEventHint(aHint) {
      var _a;
      if (
        !aHint ||
        !aHint.event ||
        !aHint.event.target ||
        !aHint.elementDOM ||
        aHint.event.target === aHint.elementDOM
      ) {
        return false;
      }
      let lResult = false;
      const lDOMTarget = aHint.event.target;
      if (
        (_a =
          lDOMTarget === null || lDOMTarget === void 0
            ? void 0
            : lDOMTarget.hasAttribute) === null || _a === void 0
          ? void 0
          : _a.call(lDOMTarget, 'title')
      ) {
        lResult = true;
      }
      if (!lResult) {
        $(lDOMTarget)
          .parentsUntil(aHint.elementDOM)
          .each((aIndex, aElement) => {
            var _a;
            if (
              !lResult &&
              ((_a = aElement.hasAttribute) === null || _a === void 0
                ? void 0
                : _a.call(aElement, 'title'))
            ) {
              lResult = true;
            }
          });
      }
      return lResult;
    }
  },
  fn: 'objethint.js',
});