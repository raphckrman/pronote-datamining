IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Support = void 0;
    require('DeclarationJQuery.js');
    const MethodesObjet_1 = require('MethodesObjet');
    const GenreNavigateur = { Standard: 1, Webkit: 2, Moz: 3, Opera: 4, IE: 5 };
    let Support = {
      init: false,
      GenreNavigateur: GenreNavigateur,
      supportFilterIE: false,
      supportEventOnPopState: false,
      supportEventPaste: false,
      supportEventInput: false,
      supportTouch: false,
      tactile: false,
      supportBorderRadius: _initTableau(),
      avecBorderRadius: false,
      supportGradient: _initTableau(),
      supportOpacity: _initTableau(),
      avecSupportOpacity: false,
      supportBoxShadow: _initTableau(),
      avecSupportBoxShadow: false,
      supportTransitions: _initTableau(),
      avecSupportTransitions: false,
      transitionEndEvent: '',
      supportTransforms: _initTableau(),
      avecSupportTransform: false,
      supportBackgroundSize: _initTableau(),
      avecBackgroundSize: false,
      bordureExterneDIV: false,
      bordureExterneTD: false,
      div100PourcentDansTDGardeHauteurTD: false,
      tailleScrollBar: 0,
      estOverlayScrollbar: false,
      scrollBarWidth: -1,
      avecSupportFileUpload: false,
      supportPointerEventsNone: false,
      supportCanvas: false,
      supportCanvasText: false,
      supportBlob: false,
      speechRecognition: false,
      speechSynthesis: false,
      contentEditable: false,
      permissionNotification: {
        defaut: 'default',
        granted: 'granted',
        denied: 'denied',
      },
      refreshNotification: null,
      addInit(aCallback) {
        if (this.init) {
          aCallback();
        } else {
          uPileInit.push(aCallback);
        }
      },
      toString() {
        let lChaine = '';
        let lValeur;
        let lChaineSupport;
        for (const lProp in Support) {
          lValeur = Support[lProp];
          if (MethodesObjet_1.MethodesObjet.isArray(lValeur)) {
            lChaine += lProp + ' - [';
            lChaineSupport = '';
            for (const i in lValeur) {
              if (lValeur[i]) {
                lChaineSupport +=
                  (lChaineSupport.length > 0 ? ', ' : '') +
                  MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
                    GenreNavigateur,
                    parseInt(i, 10),
                  );
              }
            }
            lChaine +=
              (lChaineSupport.length > 0 ? lChaineSupport : 'NON SUPPORTE') +
              ']\n';
          } else if (
            !MethodesObjet_1.MethodesObjet.isFunction(lValeur) &&
            !MethodesObjet_1.MethodesObjet.isObject(lValeur)
          ) {
            lChaine += lProp + ' - ' + Support[lProp] + '\n';
          }
        }
        return lChaine;
      },
    };
    exports.Support = Support;
    function _initTableau() {
      const lTableau = [];
      for (const lProp in GenreNavigateur) {
        lTableau[GenreNavigateur[lProp]] = false;
      }
      return lTableau;
    }
    let uPileInit = [];
    function _testerSupports(aDoc) {
      let lProp;
      const LExtensionsStyle = {};
      LExtensionsStyle[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.Standard,
        )
      ] = '';
      LExtensionsStyle[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.Webkit,
        )
      ] = 'Webkit';
      LExtensionsStyle[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.Moz,
        )
      ] = 'Moz';
      LExtensionsStyle[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.Opera,
        )
      ] = 'O';
      LExtensionsStyle[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.IE,
        )
      ] = 'MS';
      const lExtensionsCss = {};
      lExtensionsCss[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.Standard,
        )
      ] = '';
      lExtensionsCss[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.Webkit,
        )
      ] = '-webkit-';
      lExtensionsCss[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.Moz,
        )
      ] = '-moz-';
      lExtensionsCss[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.Opera,
        )
      ] = '-o-';
      lExtensionsCss[
        MethodesObjet_1.MethodesObjet.nomProprieteDeValeur(
          GenreNavigateur,
          GenreNavigateur.IE,
        )
      ] = '-ms-';
      const lElement = aDoc.createElement('div');
      function _contains(aChaine, aSousChaine) {
        return ('' + aChaine).indexOf(aSousChaine) !== -1;
      }
      function _getNomPropEtendu(aStyle, aExtension) {
        return aExtension.length > 0 ? aExtension + aStyle.ucfirst() : aStyle;
      }
      function _existeStyle(aStyle, aExtension) {
        return !MethodesObjet_1.MethodesObjet.isUndefined(
          lElement.style[_getNomPropEtendu(aStyle, aExtension)],
        );
      }
      function _leStyleContientLaChaine(aStyle, aExtension, aChaine) {
        const lStyle = lElement.style[_getNomPropEtendu(aStyle, aExtension)];
        return (
          !MethodesObjet_1.MethodesObjet.isUndefined(lStyle) &&
          _contains(lStyle, aChaine)
        );
      }
      Support.supportFilterIE = !MethodesObjet_1.MethodesObjet.isUndefined(
        lElement.style.filter,
      );
      if (!MethodesObjet_1.MethodesObjet.isUndefined(lElement.style.filter)) {
        lElement.style.filter =
          'progid:DXImageTransform.Microsoft.Gradient(gradientType=1,startColorStr=yellow,endColorStr=red);';
        Support.supportFilterIE = lElement.style.filter.length > 0;
      }
      for (lProp in LExtensionsStyle) {
        Support.supportBorderRadius[GenreNavigateur[lProp]] = _existeStyle(
          'borderRadius',
          LExtensionsStyle[lProp],
        );
        if (Support.supportBorderRadius[GenreNavigateur[lProp]]) {
          Support.avecBorderRadius = true;
        }
      }
      lElement.style.cssText =
        'background: linear-gradient(180deg, yellow, blue);';
      Support.supportGradient[GenreNavigateur.Standard] = _contains(
        lElement.style.background,
        'gradient',
      );
      lElement.style.cssText =
        'background: -ms-linear-gradient(180deg, yellow, blue);';
      Support.supportGradient[GenreNavigateur.IE] = _contains(
        lElement.style.background,
        'gradient',
      );
      lElement.style.cssText =
        'background: -webkit-gradient(180deg, left top, right top, from(blue), to(yellow));';
      Support.supportGradient[GenreNavigateur.Webkit] = _contains(
        lElement.style.background,
        'gradient',
      );
      lElement.style.cssText =
        'background: -moz-linear-gradient(180deg, yellow, blue);';
      Support.supportGradient[GenreNavigateur.Moz] = _contains(
        lElement.style.background,
        'gradient',
      );
      for (lProp in LExtensionsStyle) {
        lElement.style.cssText = lExtensionsCss[lProp] + 'opacity:.5;';
        Support.supportOpacity[GenreNavigateur[lProp]] =
          _leStyleContientLaChaine('opacity', LExtensionsStyle[lProp], '0.5');
        if (Support.supportOpacity[GenreNavigateur[lProp]]) {
          Support.avecSupportOpacity = true;
        }
      }
      for (lProp in LExtensionsStyle) {
        Support.supportBoxShadow[GenreNavigateur[lProp]] = _existeStyle(
          'boxShadow',
          LExtensionsStyle[lProp],
        );
        if (Support.supportBoxShadow[GenreNavigateur[lProp]]) {
          Support.avecSupportBoxShadow = true;
        }
      }
      for (lProp in LExtensionsStyle) {
        Support.supportBackgroundSize[GenreNavigateur[lProp]] = _existeStyle(
          'backgroundSize',
          LExtensionsStyle[lProp],
        );
        if (Support.supportBackgroundSize[GenreNavigateur[lProp]]) {
          Support.avecBackgroundSize = true;
        }
      }
      for (lProp in LExtensionsStyle) {
        Support.supportTransitions[GenreNavigateur[lProp]] = _existeStyle(
          'transitionProperty',
          LExtensionsStyle[lProp],
        );
        if (Support.supportTransitions[GenreNavigateur[lProp]]) {
          Support.avecSupportTransitions = true;
        }
      }
      Support.transitionEndEvent = (function () {
        const el = document.createElement('fakeelement');
        const transitions = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          MSTransition: 'msTransitionEnd',
          OTransition: 'oTransitionEnd',
          transition: 'transitionEnd',
        };
        for (const t in transitions) {
          if (el.style[t] !== undefined) {
            return transitions[t];
          }
        }
      })();
      let lNomTransform;
      for (const lProp in LExtensionsStyle) {
        lNomTransform = '';
        switch (GenreNavigateur[lProp]) {
          case GenreNavigateur.Standard:
            lNomTransform = 'transform';
            break;
          case GenreNavigateur.Webkit:
            lNomTransform = 'WebkitTransform';
            break;
          case GenreNavigateur.Moz:
            lNomTransform = 'MozTransform';
            break;
          case GenreNavigateur.Opera:
            lNomTransform = 'OTransform';
            break;
          case GenreNavigateur.IE:
            lNomTransform = 'msTransform';
            break;
        }
        Support.supportTransforms[GenreNavigateur[lProp]] =
          !MethodesObjet_1.MethodesObjet.isUndefined(
            lElement.style[lNomTransform],
          );
        if (Support.supportTransforms[GenreNavigateur[lProp]]) {
          Support.avecSupportTransform = true;
        }
      }
      Support.supportEventOnPopState =
        !MethodesObjet_1.MethodesObjet.isUndefined(window.onpopstate);
      Support.supportEventPaste = 'onpaste' in lElement;
      Support.supportEventInput = 'oninput' in lElement;
      Support.supportTouch =
        'ontouchstart' in window ||
        !!(window.DocumentTouch && document instanceof window.DocumentTouch);
      Support.tactile =
        Support.supportTouch || window.navigator.maxTouchPoints > 0;
      Support.avecSupportFileUpload = (function () {
        if (
          navigator.userAgent.match(
            /(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/,
          )
        ) {
          return false;
        }
        const el = document.createElement('input');
        el.type = 'file';
        return !el.disabled;
      })();
      Support.supportCanvas = !!aDoc.createElement('canvas').getContext;
      Support.supportCanvasText = !!(
        Support.supportCanvas &&
        typeof aDoc.createElement('canvas').getContext('2d').fillText ===
          'function'
      );
      Support.supportBlob = _supportBlob();
      Support.speechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition || null;
      Support.speechSynthesis = !!window.speechSynthesis;
      Support.contentEditable = false;
      if ('contentEditable' in document.documentElement) {
        lElement.contentEditable = 'true';
        Support.contentEditable = lElement.contentEditable === 'true';
      }
    }
    function _supportBlob() {
      let lBlob;
      try {
        lBlob = new Blob(['a'], { type: 'text/plain' });
      } catch (e1) {
        try {
          const BlobBuilder =
            window.MozBlobBuilder ||
            window.WebKitBlobBuilder ||
            window.BlobBuilder;
          if (e1.name === 'TypeError' && window.BlobBuilder) {
            const bb = new BlobBuilder();
            bb.append(['a']);
            lBlob = bb.getBlob('text/plain');
          } else if (e1.name === 'InvalidStateError') {
            lBlob = new Blob(['a'], { type: 'text/plain' });
          }
        } catch (e2) {
          return false;
        }
      }
      if (lBlob) {
        return true;
      }
      return false;
    }
    function _testerSupportHtml() {
      const lBody = document.getElementsByTagName('BODY')[0];
      const lElement = document.createElement('div');
      lBody.appendChild(lElement);
      const lTaille = 50;
      const lId = '_test_';
      lElement.innerHTML =
        '<div id="' +
        lId +
        '" style="height:auto;"><div style="height:' +
        lTaille +
        'px; padding:4px;">&nbsp;</div></div>';
      Support.bordureExterneDIV =
        document.getElementById(lId).offsetHeight === lTaille;
      lElement.innerHTML =
        '<table><tr><td class="PetitEspace" id="' +
        lId +
        '" style="height:' +
        lTaille +
        'px;"><div>&nbsp;</div></td></tr></table>';
      Support.bordureExterneTD =
        document.getElementById(lId).offsetHeight === lTaille;
      lElement.innerHTML =
        '<table style="position:absolute; z-index:-1; visibility:hidden"><tr>' +
        '<td style="height:' +
        lTaille +
        'px;">' +
        '<div id="' +
        lId +
        '" style="height:100%"><div style="height:' +
        (lTaille + 20) +
        'px;"></div></div>' +
        '</td></tr></table>';
      Support.div100PourcentDansTDGardeHauteurTD =
        document.getElementById(lId).offsetHeight === lTaille;
      lElement.innerHTML =
        '<div id="dessous" style="position:absolute;height:10px;width:10px;top:0;left:0;"></div>' +
        '<div id="dessus" style="position:absolute;height:10px;width:10px;top:0;left:0; pointer-events:none;"></div>';
      const lTrouve = document.elementFromPoint
        ? document.elementFromPoint(1, 1)
        : null;
      Support.supportPointerEventsNone = !!lTrouve && lTrouve.id === 'dessous';
      lElement.innerHTML = '<div style="overflow:scroll;"><div></div></div>';
      Support.tailleScrollBar =
        $(lElement).find('>div').get(0).offsetWidth -
        $(lElement).find('>div>div').get(0).offsetWidth;
      Support.estOverlayScrollbar = Support.tailleScrollBar === 0;
      lBody.removeChild(lElement);
    }
    $(window).on('load', () => {
      Support.init = true;
      _testerSupports(window.document);
      _testerSupportHtml();
      uPileInit.forEach((aCallback) => {
        aCallback();
      });
      uPileInit = [];
    });
  },
  fn: 'objetsupport.js',
});