IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.deferLoadingScript = void 0;
    require('NamespaceIE');
    require('Divers');
    const Invocateur_1 = require('Invocateur');
    const Chronometre_1 = require('Chronometre');
    const lModules = {},
      isOpera =
        typeof window.opera !== 'undefined' &&
        window.opera.toString() === '[object Opera]',
      uUrlsProcess = {},
      options = { done: null, fail: null, messageChargement: '' };
    let lModuleEnCours = null,
      lSupportASync,
      lHead = null;
    const uPileChargementEnCours = {};
    function createNode(config) {
      const node = config.xhtml
        ? document.createElementNS(
            'http://www.w3.org/1999/xhtml',
            'html:script',
          )
        : document.createElement('script');
      if (config.scriptType) {
        node.type = config.scriptType;
      }
      node.async = false;
      return node;
    }
    function removeListener(node, func, name, ieName) {
      if (node.detachEvent && !isOpera) {
        if (ieName) {
          node.detachEvent(ieName, func);
        }
      } else {
        node.removeEventListener(name, func, false);
      }
    }
    function _getHead() {
      if (!lHead) {
        lHead = document.getElementsByTagName('head')[0];
      }
      return lHead;
    }
    function createLoaderScript(aUrl, aCallback, aParams) {
      let lLoader = null;
      function finScript(evt) {
        const node = evt.currentTarget || evt.srcElement;
        removeListener(node, onScriptLoad, 'load', 'onreadystatechange');
        removeListener(node, onScriptError, 'error');
        return node;
      }
      function onScriptLoad(evt) {
        if (
          evt.type === 'load' ||
          /^(complete|loaded)$/.test(
            (evt.currentTarget || evt.srcElement).readyState,
          )
        ) {
          finScript(evt);
          lLoader.loaded = true;
          lLoader.finChargement();
        }
      }
      lLoader = {
        url: aUrl,
        loaded: false,
        loadedFail: false,
        chrono: null,
        supportASync: false,
        timerFail: -1,
        params: aParams,
        load: function () {
          if (this.loaded) {
            this.finChargement();
            return;
          }
          const node = createNode({});
          if (lSupportASync === undefined) {
            if (!document.addEventListener) {
              lSupportASync = false;
            } else {
              lSupportASync = 'async' in node;
            }
          }
          if (
            node.attachEvent &&
            !(
              node.attachEvent.toString &&
              node.attachEvent.toString().indexOf('[native code') < 0
            ) &&
            !isOpera
          ) {
            node.attachEvent('onreadystatechange', onScriptLoad);
            lSupportASync = false;
          } else {
            node.addEventListener('load', onScriptLoad, false);
            node.addEventListener('error', onScriptError, false);
          }
          node.src = this.url;
          if (lSupportASync && this.params.accepteASync) {
            node.async = false;
          }
          _getHead().appendChild(node);
          const lSelf = this;
          this.timerFail = setTimeout(() => {
            lSelf.loadedTimeoutFail = true;
            onScriptError({ currentTarget: node });
          }, aParams.timeoutFailScript);
          if (lSupportASync && this.params.accepteASync && this.next) {
            this.params._compteurTimeout += 1;
            if (
              this.params.timeoutLoad >= 0 &&
              this.params._compteurTimeout >= this.params.nbPourDelaiTimeout
            ) {
              this.params._compteurTimeout = 0;
              setTimeout(() => {
                lSelf.next.load();
              }, this.params.timeoutLoad);
            } else {
              Promise.resolve().then(() => {
                this.next.load();
              });
            }
          }
        },
        finChargement: function () {
          clearTimeout(this.timerFail);
          aCallback(this);
          if (this.next && !(lSupportASync && this.params.accepteASync)) {
            this.next.load();
          }
        },
      };
      function onScriptError(evt) {
        finScript(evt);
        lLoader.loadedFail = true;
        lLoader.finChargement();
      }
      return lLoader;
    }
    function _loadSingletonModule(aNom, aParams) {
      const lNom = aNom.toLowerCase(),
        lModule = lModules[lNom];
      lModule.nom = lNom;
      lModule.params = aParams;
      const _callbackFin = (aEchec) => {
        if (aEchec) {
          if (options.fail) {
            options.fail(aNom, lModule);
          }
          if (aParams.fail) {
            aParams.fail(aNom, lModule);
          }
        } else {
          if (options.done) {
            options.done(aNom, lModule);
          }
          aParams.done(aNom, lModule);
        }
      };
      if (uPileChargementEnCours[lNom]) {
        uPileChargementEnCours[lNom].push(_callbackFin);
        return;
      }
      uPileChargementEnCours[lNom] = [];
      const lCallbackPile = (aEchec) => {
        _callbackFin();
        if (uPileChargementEnCours[lNom]) {
          const lTab = uPileChargementEnCours[lNom];
          delete uPileChargementEnCours[lNom];
          lTab.forEach((aFunc) => {
            aFunc(aEchec);
          });
        }
      };
      if (!aParams || !aParams.done) {
        lCallbackPile(true);
        return exports.deferLoadingScript;
      }
      if (!lModule) {
        lCallbackPile(true);
        return exports.deferLoadingScript;
      }
      lModuleEnCours = lNom;
      let lUrl, i, lScript, LPrevScript;
      function _callback(aLoader) {
        if (lModule.interrupt) {
          return;
        }
        if (aLoader.loadedFail) {
          aLoader.next = null;
          lModule.interrupt = true;
          uUrlsProcess[aLoader.url].failed = true;
          lCallbackPile(true);
          return;
        }
        uUrlsProcess[aLoader.url].resolved = true;
        if (!aLoader.next) {
          lCallbackPile();
        }
      }
      let lSurStartLoading = true;
      lModule.first = null;
      for (i = 0; i < lModule.urls.length; i++) {
        lUrl = lModule.urls[i];
        if (!uUrlsProcess[lUrl]) {
          uUrlsProcess[lUrl] = { started: true };
          if (lSurStartLoading) {
            lSurStartLoading = false;
          }
          lScript = createLoaderScript(lUrl, _callback, aParams);
          if (LPrevScript) {
            LPrevScript.next = lScript;
          }
          if (!lModule.first) {
            lModule.first = lScript;
          }
          LPrevScript = lScript;
        }
      }
      if (lModule.first) {
        lModule.first.load(lModule);
      } else {
        lCallbackPile();
      }
    }
    exports.deferLoadingScript = {
      add(aNom, aUrls) {
        const lNom = aNom.toLowerCase(),
          lModule = { urls: [], count: 0 };
        let lUrl, i;
        lModules[lNom] = lModule;
        for (i = 0; i < aUrls.length; i++) {
          lUrl = aUrls[i];
          lModule.urls.push(lUrl);
        }
        return exports.deferLoadingScript;
      },
      contains(aNom) {
        return !!lModules[aNom.toLowerCase()];
      },
      setOptions(aOptions) {
        Object.assign(options, aOptions);
        return exports.deferLoadingScript;
      },
      load(aNom, aParam) {
        if (typeof aNom === 'string') {
          exports.deferLoadingScript.load([aNom], aParam);
          return;
        }
        function _loadSingletonDeTableau(aNomsTraites, aParam, aDone, aFail) {
          if (aNomsTraites.length === 0) {
            lModuleEnCours = null;
            if (aParam.eventIO !== false) {
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.patience,
                false,
              );
            }
            aDone();
            return;
          }
          aParam.done = function () {
            aNomsTraites.shift();
            if (aParam.timeoutLoadGroupe >= 0) {
              setTimeout(() => {
                _loadSingletonDeTableau(aNomsTraites, aParam, aDone, aFail);
              }, aParam.timeoutLoadGroupe);
            } else {
              Promise.resolve().then(() => {
                _loadSingletonDeTableau(aNomsTraites, aParam, aDone, aFail);
              });
            }
          };
          aParam.fail = function (aNom) {
            aNomsTraites = [];
            if (aParam.eventIO !== false) {
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.patience,
                false,
              );
            }
            if (aFail) {
              aFail(aNom);
            }
          };
          aParam._compteurTimeout = 0;
          if (exports.deferLoadingScript.contains(aNomsTraites[0])) {
            if (aParam.eventIOExt) {
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.patience,
                false,
              );
            }
            if (aParam.eventIO !== false) {
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.patience,
                true,
                {
                  actualisation: true,
                  message: (
                    options.messageChargement +
                    ' ' +
                    aNomsTraites[0]
                  ).trim(),
                },
              );
            }
            _loadSingletonModule(aNomsTraites[0], aParam);
          } else {
            aParam.done();
          }
        }
        const lParams = Object.assign(
          {
            done: null,
            fail: null,
            eventIO: false,
            timeoutLoadGroupe: -1,
            timeoutLoad: -1,
            nbPourDelaiTimeout: 1,
            accepteASync: true,
            timeoutFailScript: 3 * 60 * 1000,
          },
          aParam,
        );
        if (Array.isArray(aNom)) {
          const lDone = lParams.done,
            lFail = lParams.fail;
          if (lParams.eventIO !== false) {
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.patience,
              true,
              { message: options.messageChargement },
            );
          }
          _loadSingletonDeTableau(aNom, lParams, lDone, lFail);
          return exports.deferLoadingScript;
        } else {
          return exports.deferLoadingScript;
        }
      },
      loadAsync(aNom, aParam) {
        return new Promise((aResolve, aReject) => {
          const lParams = Object.assign(aParam || {}, {
            done: function (aParam) {
              aResolve(aParam);
            },
            fail: function (aParam) {
              aReject(aParam);
            },
          });
          exports.deferLoadingScript.load(aNom, lParams);
        });
      },
      afficherPatience() {
        var _a;
        if (!lModuleEnCours) {
          return false;
        }
        const lModule = lModules[lModuleEnCours.toLowerCase()];
        if (!lModule || !lModule.nom || !lModule.params) {
          return false;
        }
        lModule.params.eventIO = true;
        lModule.params.eventIOExt = true;
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.patience,
          true,
          { message: (options.messageChargement + ' ' + lModule.nom).trim() },
        );
        return true;
      },
    };
  },
  fn: 'deferloadingscript.js',
});