IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    var _a;
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.setObjetDate =
      exports.Styles =
      exports.REGEXP_TELEPHONE =
      exports.TAILLEMAX_INDICATIF_TELEPHONE =
      exports.REGEXP_INDICATIF_TELEPHONE =
      exports.MAX_LENGTH_Default =
      exports.C_eventsModifyInput =
      exports.C_eventsModifyCheckbox =
      exports.collectionIdentite =
      exports.outils =
      exports.empty =
      exports.injectHTMLParams =
      exports.injectHTML =
      exports.refresh =
      exports.ieData =
      exports.addClass =
      exports.addAttribut =
      exports.addBalise =
      exports.initControleur =
        void 0;
    require('DeclarationJQuery.js');
    require('jInputDisabled.js');
    require('jInputChecked.js');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const ControleSaisieEvenement_1 = require('ControleSaisieEvenement');
    const ObjetJSON_1 = require('ObjetJSON');
    const ObjetChaine_1 = require('ObjetChaine');
    const ToucheClavier_1 = require('ToucheClavier');
    const jsx_1 = require('jsx');
    const Divers_css_1 = require('Divers.css');
    const uBalises = {};
    const uAttributs = {};
    const uClassesCss = {};
    const uNodeNames = [];
    let lGUIDControleur1 = 1;
    let lGUIDControleur2 = 1;
    const C_id_event_iemodel = 'ie-model_verification';
    const C_RegExp_Match = /^\/(.*)\/([gim]*)$/;
    const uInvocateur = new Invocateur_1.ObjetInvocateur();
    let uTailleMaxTelephone = null;
    const lMapOutils = new Map();
    let uPromiseRefresh = null;
    jsx_1.JSXDictionaryCallbacks.addAttrAllowed('ie-model');
    jsx_1.JSXDictionaryCallbacks.addAttrAllowed('ie-if');
    var TypeAccesParametres;
    (function (TypeAccesParametres) {
      TypeAccesParametres[(TypeAccesParametres['default'] = 0)] = 'default';
      TypeAccesParametres[(TypeAccesParametres['jsxStrict'] = 1)] = 'jsxStrict';
    })(TypeAccesParametres || (TypeAccesParametres = {}));
    const lOutils = {
      nomInvocRefresh: '__refresh_node__',
      parseValueEvent: _parseValueEvent,
      getModel: _getModel,
      abonnerRefresh: _abonnerRefresh,
      getAccesParametres: _getAccesParametres,
      getAccesParametresModel: _getAccesParametresModel,
      injectHTML: _injectHTML,
      getContexteCourant: _getContexteCourant,
      getControleSaisieEvent: _getControleSaisieEvent,
      getAttributesDeNode: _getAttributesDeNode,
      getMapDeNode: _getMapDeNode,
      copyAttributs: _copyAttributs,
      gererInputCB: _gererInputCB,
      gererInputText: _gererInputText,
      addCommentaireDebug: _addCommentaireDebug,
      composantsAttributs: uAttributs,
      createSafeFragment: _createSafeFragment,
      caret: _caret,
      compile: _compile,
      addGetterHtml: _addGetterHtml,
      surInjectionHtml: _surInjectionHtml,
      surInjectionHtmlPromise: async function (aContexteCourant, aAfter) {
        return new Promise((aResolve, aReject) => {
          const lResult = lOutils.surInjectionHtml(
            aContexteCourant,
            () => {
              aResolve();
            },
            aAfter,
          );
          if (lResult !== true) {
            aReject();
          }
        });
      },
      abonneNodeEtNodeAfter(aAccesNode, aAccesNodeAfter, aContexteCourant) {
        if (aAccesNode && aAccesNode.estFonction) {
          this.surInjectionHtml(aContexteCourant, (aMeasure) => {
            if (aAccesNode.estFuncJSX) {
              aAccesNode.callback([
                aContexteCourant.node,
                aMeasure,
                aContexteCourant,
              ]);
            } else {
              aAccesNode.callback([aMeasure, aContexteCourant.data]);
            }
          });
        }
        if (aAccesNodeAfter && aAccesNodeAfter.estFonction) {
          this.surInjectionHtml(
            aContexteCourant,
            (aMeasure) => {
              if (aAccesNodeAfter.estFuncJSX) {
                aAccesNodeAfter.callback([
                  aContexteCourant.node,
                  aMeasure,
                  aContexteCourant,
                ]);
              } else {
                aAccesNodeAfter.callback([aMeasure, aContexteCourant.data]);
              }
            },
            true,
          );
        }
      },
      surNodeEtNodeAfter(aContexteCourant) {
        const lInfosGetNode = this.getAccesParametres(
          'node',
          'ie-model',
          aContexteCourant,
        );
        const lInfosGetNodeAfter = this.getAccesParametres(
          'nodeAfter',
          'ie-model',
          aContexteCourant,
        );
        lOutils.abonneNodeEtNodeAfter(
          lInfosGetNode,
          lInfosGetNodeAfter,
          aContexteCourant,
        );
      },
      replaceNode(aNodeAncien, aNodeNouveau) {
        if (
          aNodeAncien &&
          aNodeNouveau &&
          aNodeAncien.parentNode &&
          aNodeAncien.parentNode.replaceChild
        ) {
          aNodeAncien.parentNode.replaceChild(aNodeNouveau, aNodeAncien);
          $(aNodeAncien).remove();
        }
      },
      addObject(aId, aObject) {
        if (!aId || !aObject) {
          return false;
        }
        if (lMapOutils.has(aId)) {
          return false;
        }
        lMapOutils.set(aId, aObject);
        return true;
      },
      getObject(aId) {
        if (lMapOutils.has(aId)) {
          return lMapOutils.get(aId);
        }
        return null;
      },
      TypeAccesParametres: TypeAccesParametres,
    };
    function _surInjectionHtml(aContexteCourant, aMethode, aAfter) {
      if (!aContexteCourant || !aContexteCourant.contexte) {
        return;
      }
      if (!aContexteCourant.contexte.eventsInjectionHtml) {
        aContexteCourant.contexte.eventsInjectionHtml = [];
      }
      if (MethodesObjet_1.MethodesObjet.isFunction(aMethode)) {
        if (aAfter) {
          aContexteCourant.contexte.eventsInjectionHtml.unshift({
            methode: aMethode,
            after: true,
          });
        } else {
          aContexteCourant.contexte.eventsInjectionHtml.push({
            methode: aMethode,
            after: false,
          });
        }
        return true;
      } else {
      }
    }
    async function _$refreshSelf_controleur(aForcerSynchrone) {
      if (
        this.instance &&
        _estInstanceIdentite(this.instance) &&
        this.instance.isDestroyed()
      ) {
        this.$promRefreshSelf = null;
        return Promise.resolve();
      }
      if (this.$asyncPromise !== false && !aForcerSynchrone) {
        if (this.$promRefreshSelf && !this.$promRefreshSelf._isFullfilled) {
          return this.$promRefreshSelf;
        }
        this.$promRefreshSelf = new Promise((aResolve) => {
          setTimeout(() => {
            if (this.$promRefreshSelf) {
              this.$promRefreshSelf._isFullfilled = true;
              this.$promRefreshSelf = null;
            }
            aResolve(this.$invocateur.evenement(C_id_event_iemodel));
          }, 0);
        });
        return this.$promRefreshSelf;
      }
      this.$invocateur.evenement(C_id_event_iemodel);
      return Promise.resolve();
    }
    async function _$refresh_controleur(aForcerSynchrone) {
      if (this.$asyncPromise !== false && !aForcerSynchrone) {
        if (this.$promRefresh && !this.$promRefresh._isFullfilled) {
          return this.$promRefresh;
        }
        this.$promRefresh = new Promise((aResolve) => {
          setTimeout(() => {
            this.$promRefresh._isFullfilled = true;
            this.$promRefresh = null;
            aResolve(uInvocateur.evenement(C_id_event_iemodel));
          }, 0);
        });
        return this.$promRefresh;
      }
      uInvocateur.evenement(C_id_event_iemodel);
      return Promise.resolve();
    }
    function _initControleur(aControleur) {
      if (!aControleur.$GUID) {
        aControleur.$GUID = lGUIDControleur1 + '_' + lGUIDControleur2;
        if (lGUIDControleur1 === Number.MAX_VALUE) {
          lGUIDControleur1 = 1;
          lGUIDControleur2 += 1;
        } else {
          lGUIDControleur1 += 1;
        }
      }
      if (!aControleur.$refreshSelf) {
        aControleur.$refreshSelf = _$refreshSelf_controleur;
      }
      if (!aControleur.$refresh) {
        aControleur.$refresh = _$refresh_controleur;
      }
      if (!aControleur.$invocateur) {
        aControleur.$invocateur = new Invocateur_1.ObjetInvocateur();
      }
      return aControleur;
    }
    function _transfererFragmentDansHTML(
      aNodesFragment,
      aParent,
      aInsererAvantLeNode,
    ) {
      const lTab = _sliceNodes(aNodesFragment);
      while (aNodesFragment && aNodesFragment.firstChild) {
        aNodesFragment.removeChild(aNodesFragment.firstChild);
      }
      if (lTab.length === 0) {
        return;
      }
      let lSafeFragment =
        lTab.length > 1 ? _createSafeFragment(document) : null;
      lTab.forEach((aNode) => {
        if (lSafeFragment) {
          lSafeFragment.appendChild(aNode);
        } else {
          if (aInsererAvantLeNode) {
            aParent.insertBefore(aNode, aInsererAvantLeNode);
          } else {
            aParent.appendChild(aNode);
          }
        }
      });
      if (lSafeFragment) {
        if (aInsererAvantLeNode) {
          aParent.insertBefore(lSafeFragment, aInsererAvantLeNode);
        } else {
          aParent.appendChild(lSafeFragment);
        }
        lSafeFragment = null;
      }
      let lNode = lTab[0];
      if (lTab[1] && _estNoeudCommentaire(lNode)) {
        lNode = lTab[1];
      }
      return lNode;
    }
    function _sliceNodes(aNodes) {
      return aNodes && aNodes.length ? Array.from(aNodes) : [];
    }
    function _preInjectionHTML(aElementParent, aIgnorerScroll) {
      const lResult = {
        elementParent: aElementParent,
        parentDocument: false,
        initOverflowParent: false,
      };
      let lElement = aElementParent;
      let lParent;
      while (!lResult.parentDocument && lElement) {
        lParent = null;
        if (lElement.nodeType === 1) {
          if (lElement.parentElement) {
            lParent = lElement.parentElement;
          } else if (lElement.parentNode) {
            lParent = lElement.parentNode;
          }
        }
        lElement = lParent;
        lResult.parentDocument = lElement === document;
      }
      if (lResult.parentDocument && aIgnorerScroll !== true) {
        let lOverflow = $(aElementParent).css('overflow');
        lResult.initOverflowParent =
          lOverflow === 'auto' || lOverflow === 'scroll';
        lOverflow = null;
      }
      return lResult;
    }
    function _finaliserInjectionHTML(aPreInjectionHtml, aContexte) {
      if (aPreInjectionHtml.parentDocument) {
        if (
          aPreInjectionHtml.initOverflowParent &&
          aPreInjectionHtml.elementParent
        ) {
          aPreInjectionHtml.elementParent.scrollLeft = 0;
          aPreInjectionHtml.elementParent.scrollTop = 0;
        }
        try {
          if (
            aContexte &&
            aContexte.eventsInjectionHtml &&
            aContexte.eventsInjectionHtml.length > 0
          ) {
            let lMeasures = [];
            let lMutates = [];
            const lEventsInjectionHtml = aContexte.eventsInjectionHtml;
            delete aContexte.eventsInjectionHtml;
            const lMeasureMutate = {
              addMeasure: function (aMethode) {
                lMeasures.push(aMethode);
              },
              addMutate: function (aMethode) {
                lMutates.push(aMethode);
              },
            };
            const lExec = function () {
              lMeasures.forEach((aMethode) => {
                if (aMethode) {
                  aMethode();
                }
              });
              lMutates.forEach((aMethode) => {
                if (aMethode) {
                  aMethode();
                }
              });
            };
            lEventsInjectionHtml.forEach((aElement) => {
              if (aElement && !aElement.after && aElement.methode) {
                aElement.methode(lMeasureMutate);
              }
            });
            lExec();
            lMeasures = [];
            lMutates = [];
            lEventsInjectionHtml.forEach((aElement) => {
              if (aElement && aElement.after && aElement.methode) {
                aElement.methode(lMeasureMutate);
              }
            });
            lExec();
          }
        } catch (e) {}
      }
    }
    function _findFirstChild(aNode, aNiveau) {
      let lNode = aNode;
      let lNiveau = aNiveau;
      while (lNode && lNiveau > 0) {
        lNode = lNode.firstChild;
        lNiveau -= 1;
      }
      return lNode;
    }
    function _getPremiereBalise(aChaine) {
      if (!aChaine || !aChaine.search) {
        return '';
      }
      let lPosDebut = aChaine.search('<');
      if (lPosDebut < 0) {
        return '';
      }
      lPosDebut += 1;
      const lChaine = aChaine.slice(lPosDebut);
      let lPosFinSup = lChaine.search('>');
      let lPosFinEsp = lChaine.search(' ');
      if (lPosFinSup < 0 && lPosFinEsp < 0) {
        return '';
      }
      if (lPosFinSup < 0) {
        lPosFinSup = lChaine.length;
      }
      if (lPosFinEsp < 0) {
        lPosFinEsp = lChaine.length;
      }
      return aChaine
        .slice(lPosDebut, lPosDebut + Math.min(lPosFinSup, lPosFinEsp))
        .toLowerCase();
    }
    function _createSafeFragment(aDocument) {
      const list = [].concat(uNodeNames),
        safeFrag = (aDocument || document).createDocumentFragment();
      if (safeFrag.createElement) {
        while (list.length) {
          safeFrag.createElement(list.pop());
        }
      }
      return safeFrag;
    }
    function _injectEtCompilNode(aParametres) {
      let lSafe = _createSafeFragment(document);
      let lNodeParent;
      let lNiveauFirstChild;
      lNodeParent = lSafe.appendChild(document.createElement('div'));
      if (aParametres.html && aParametres.html.nodeType > 0) {
        switch (aParametres.html.nodeName.toLowerCase()) {
          case 'td':
            lNodeParent.appendChild(document.createElement('table'));
            lNodeParent.firstChild.appendChild(document.createElement('tbody'));
            lNodeParent.firstChild.firstChild.appendChild(
              document.createElement('tr'),
            );
            lNodeParent = lNodeParent.firstChild.firstChild.firstChild;
            break;
          case 'tr':
            lNodeParent.appendChild(document.createElement('table'));
            lNodeParent = lNodeParent.firstChild;
            lNodeParent.appendChild(document.createElement('tbody'));
            lNodeParent = lNodeParent.firstChild;
            break;
          case 'ul':
            lNodeParent.appendChild(document.createElement('ul'));
            lNodeParent = lNodeParent.firstChild;
            break;
          default:
            lNodeParent.appendChild(document.createElement('div'));
            lNodeParent = lNodeParent.firstChild;
        }
        lNodeParent.appendChild(aParametres.html);
      } else {
        lNiveauFirstChild = 1;
        switch (_getPremiereBalise(aParametres.html)) {
          case 'td':
            lNodeParent.insertAdjacentHTML(
              'beforeend',
              '<table><tbody><tr>' + aParametres.html + '</tr></tbody></table>',
            );
            lNiveauFirstChild = 3;
            break;
          case 'tr':
            lNodeParent.insertAdjacentHTML(
              'beforeend',
              '<table><tbody>' + aParametres.html + '</tbody></table>',
            );
            lNiveauFirstChild = 2;
            break;
          case 'li':
            lNodeParent.insertAdjacentHTML(
              'beforeend',
              '<ul>' + aParametres.html + '</ul>',
            );
            break;
          default:
            lNodeParent.insertAdjacentHTML(
              'beforeend',
              '<div>' + aParametres.html + '</div>',
            );
        }
        lNodeParent = _findFirstChild(lNodeParent, lNiveauFirstChild);
      }
      if (!aParametres.contexte) {
        aParametres.contexte = {};
      }
      aParametres.childNodes = lNodeParent.childNodes;
      _compile(
        aParametres.childNodes,
        aParametres.element,
        aParametres.controleur,
        aParametres.contexte,
        aParametres.invocateur,
        0,
      );
      lNodeParent = null;
      lSafe = null;
    }
    function _injectHTML(aParametres) {
      let lNode = null;
      if (aParametres.controleur) {
        if (aParametres.instance && !aParametres.controleur.instance) {
          aParametres.controleur.instance = aParametres.instance;
        }
        _initControleur(aParametres.controleur);
      }
      if (!aParametres.element || aParametres.element.nodeType === undefined) {
        return null;
      }
      const lPreInjectionHtml = _preInjectionHTML(
        aParametres.element,
        aParametres.ignorerScroll,
      );
      _injectEtCompilNode(aParametres);
      lNode = _transfererFragmentDansHTML(
        aParametres.childNodes,
        aParametres.element,
        aParametres.insererAvantLeNode,
      );
      aParametres.childNodes = null;
      _finaliserInjectionHTML(lPreInjectionHtml, aParametres.contexte);
      if (aParametres.clearJSX) {
        Invocateur_1.Invocateur.evenement(
          Invocateur_1.ObjetInvocateur.events.nettoyerJSX,
        );
      }
      return lNode;
    }
    function _remplirDataModel(aContexteCourant) {
      const lModele = aContexteCourant.node.getAttribute('ie-model');
      if (!lModele) {
        return null;
      }
      if (
        aContexteCourant.data.$modelObjectJSX &&
        aContexteCourant.data.$modelObjectJSX.valueGUID === lModele
      ) {
        return true;
      }
      const lMapJSX = jsx_1.JSXDictionaryCallbacks.getAndDelete(
        lModele,
        'ie-model',
      );
      if (
        lMapJSX &&
        MethodesObjet_1.MethodesObjet.isObject(lMapJSX) &&
        MethodesObjet_1.MethodesObjet.isFunction(lMapJSX.func)
      ) {
        let lModelJSX;
        try {
          lModelJSX = lMapJSX.func();
        } catch (e) {
          lModelJSX = null;
        }
        if (lModelJSX && MethodesObjet_1.MethodesObjet.isObject(lModelJSX)) {
          aContexteCourant.data.$modelObjectJSX = {
            model: lModelJSX,
            attr: lMapJSX.attr,
            name: lMapJSX.name,
            valueGUID: lModele,
          };
          return true;
        }
        return false;
      }
      const lModeleArg = _parseValueEvent(lModele, aContexteCourant.contexte);
      if (lModeleArg && lModeleArg.nom) {
        aContexteCourant.data.$modeleParsed = lModeleArg;
        aContexteCourant.data.$modeleValue = lModele;
      }
      return true;
    }
    function _getModel(aContexteCourant) {
      const lAvecModele = _remplirDataModel(aContexteCourant);
      let lModele;
      let lStrModel = '';
      if (aContexteCourant.data.$modelObjectJSX) {
        lModele = aContexteCourant.data.$modelObjectJSX;
        lStrModel = lModele.name || 'modèle JSX anonyme';
      } else {
        lModele = aContexteCourant.data.$modeleValue;
        lStrModel = lModele;
      }
      if (!lModele) {
        return null;
      }
      if (lAvecModele) {
        aContexteCourant.node.removeAttribute('ie-model');
        if (!aContexteCourant.ignorerCommentaires) {
          lOutils.addCommentaireDebug(
            aContexteCourant.node,
            `ie-model="${lStrModel}"`,
          );
        }
      }
      return lModele;
    }
    function _getControleSaisieEvent(aNode) {
      if (!aNode || !aNode.hasAttribute('ie-controlesaisie')) {
        return false;
      }
      aNode.removeAttribute('ie-controlesaisie');
      lOutils.addCommentaireDebug(aNode, 'ie-controleSaisie');
      return true;
    }
    function _callbackRefresh(aControleur, aData, aCallback) {
      if (aControleur && aControleur.$off && aControleur.$off()) {
        return;
      }
      try {
        aCallback();
      } catch (e) {}
    }
    function _abonnerRefresh(
      aCallback,
      aElementPourDestruction,
      aContexteCourant,
      aCallbackDestroy,
      aMutationObserverNoeudDetruit,
    ) {
      let lCallbacks = [];
      let lAjouterAbonnement = true;
      let lId;
      let lIdSelf;
      if (!aElementPourDestruction) {
        return;
      }
      if (aContexteCourant.data) {
        if (!aContexteCourant.data.$callbacksRefresh) {
          aContexteCourant.data.$callbacksRefresh = [];
        } else {
          lAjouterAbonnement = false;
        }
        lCallbacks = aContexteCourant.data.$callbacksRefresh;
      }
      lCallbacks.push(
        _callbackRefresh.bind(
          null,
          aContexteCourant.controleur,
          aContexteCourant.data,
          aCallback,
        ),
      );
      if (lAjouterAbonnement) {
        const lInvocateur = aContexteCourant.invocateur
          ? aContexteCourant.invocateur
          : uInvocateur;
        lId = lInvocateur.abonner(
          C_id_event_iemodel,
          () => {
            if (
              aContexteCourant.controleur &&
              aContexteCourant.controleur.instance &&
              _estInstanceIdentite(aContexteCourant.controleur.instance) &&
              aContexteCourant.controleur.instance.isDestroyed()
            ) {
              return;
            }
            const lNb = lCallbacks.length;
            for (let i = 0; i < lNb; i++) {
              lCallbacks[i]();
            }
          },
          null,
          false,
        );
        if (!aContexteCourant.invocateur && aContexteCourant.controleur) {
          lIdSelf = aContexteCourant.controleur.$invocateur.abonner(
            C_id_event_iemodel,
            () => {
              if (
                aContexteCourant.controleur &&
                aContexteCourant.controleur.instance &&
                _estInstanceIdentite(aContexteCourant.controleur.instance) &&
                aContexteCourant.controleur.instance.isDestroyed()
              ) {
                return;
              }
              const lNb = lCallbacks.length;
              for (let i = 0; i < lNb; i++) {
                lCallbacks[i]();
              }
            },
            null,
            false,
          );
        }
        let lDejaDetruit = false;
        let lObserver = null;
        const lDestroy = function () {
          if (lDejaDetruit) {
            return;
          }
          lInvocateur.desabonner([lId]);
          if (!aContexteCourant.invocateur && aContexteCourant.controleur) {
            aContexteCourant.controleur.$invocateur.desabonner([lIdSelf]);
          }
          if (aContexteCourant.data) {
            aContexteCourant.data.$destroy = true;
          }
          if (lObserver && lObserver.disconnect) {
            lObserver.disconnect();
            lObserver = null;
          }
          if (aCallbackDestroy) {
            aCallbackDestroy();
          }
          lDejaDetruit = true;
        };
        $(aElementPourDestruction).on('destroyed', lDestroy);
        if (aMutationObserverNoeudDetruit) {
          const lMutationObserver =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver;
          if (lMutationObserver) {
            lObserver = new lMutationObserver((mutations) => {
              mutations.every((mutation) => {
                if (!lDejaDetruit && mutation.type === 'childList') {
                  try {
                    if (aMutationObserverNoeudDetruit()) {
                      lDestroy();
                      return false;
                    }
                  } catch (e) {}
                }
                return true;
              });
            });
          }
          if (lObserver) {
            lObserver.observe(aElementPourDestruction, { childList: true });
          }
        }
      }
    }
    function _estInstanceIdentite(aInstance) {
      const lInstance = aInstance;
      return (
        lInstance &&
        lInstance.isDestroyed &&
        lInstance.setEtatSaisie &&
        typeof lInstance.isDestroyed === 'function' &&
        typeof lInstance.setEtatSaisie === 'function'
      );
    }
    function _getAccesParametres(
      aNomEnChaine,
      aAttrName,
      aContexteCourant,
      aTypeAccesParametres = TypeAccesParametres.default,
      aAccepteErreur,
      aIgnorerNomOrigine,
    ) {
      let lParsed = null;
      const lResult = {
        valide: false,
        estFonction: false,
        value: aAttrName,
        nom: aNomEnChaine,
        nomCommentaire: aNomEnChaine,
        args: [],
        getAncre: () => null,
      };
      if (aNomEnChaine) {
        if (aAttrName) {
          let lFuncJSX = null;
          if (
            aAttrName === 'ie-model' &&
            aContexteCourant.data.$modelObjectJSX &&
            aContexteCourant.data.$modelObjectJSX.model
          ) {
            lResult.estModelJSX = true;
            lFuncJSX =
              aContexteCourant.data.$modelObjectJSX.model[aNomEnChaine];
            if (!lFuncJSX) {
              return lResult;
            }
            if (aContexteCourant.data.$modelObjectJSX.name) {
              lResult.nomCommentaire =
                aContexteCourant.data.$modelObjectJSX.name;
            }
          }
          if (!lFuncJSX && aAttrName !== 'ie-model') {
            const lMapJSX = jsx_1.JSXDictionaryCallbacks.getAndDelete(
              aNomEnChaine,
              aAttrName,
            );
            if (lMapJSX && lMapJSX.func) {
              lFuncJSX = lMapJSX.func;
              if (lMapJSX.name) {
                lResult.nomCommentaire = lMapJSX.name;
              }
            } else {
            }
          }
          if (lFuncJSX) {
            if (MethodesObjet_1.MethodesObjet.isFunction(lFuncJSX)) {
              Object.assign(lResult, {
                valide: true,
                estFonction: true,
                estFuncJSX: true,
                callback: (aTabArguments) => {
                  try {
                    if (aTabArguments && aTabArguments.length) {
                      return lFuncJSX(...aTabArguments);
                    }
                    return lFuncJSX();
                  } catch (e) {}
                },
              });
              return lResult;
            }
            return lResult;
          }
        }
        if (aTypeAccesParametres === TypeAccesParametres.jsxStrict) {
          return lResult;
        }
        lParsed = _parseValueEvent(
          aNomEnChaine,
          aContexteCourant.contexte,
          aAccepteErreur,
        );
        if (lParsed) {
          aNomEnChaine = lParsed.nom;
        }
      }
      if (
        !aNomEnChaine &&
        aAttrName === 'ie-model' &&
        aContexteCourant.data.$modelObjectJSX
      ) {
        return lResult;
      }
      if (!aContexteCourant.controleur) {
        return lResult;
      }
      const lNomEnChaineOrigine = aNomEnChaine;
      if (
        aNomEnChaine &&
        (!aContexteCourant.data || !aContexteCourant.data.$modeleParsed)
      ) {
        if (!lParsed) {
          return lResult;
        }
      }
      let lAncreControleur = aContexteCourant.controleur;
      let lNom;
      if (aContexteCourant.data && aContexteCourant.data.$modeleParsed) {
        if (!lParsed || !lParsed.args || lParsed.args.length === 0) {
          lParsed = aContexteCourant.data.$modeleParsed;
        } else {
          lParsed.nom = aContexteCourant.data.$modeleParsed.nom;
        }
        if (aContexteCourant.data.$modeleParsed.nom) {
          aNomEnChaine = lParsed.nom + (aNomEnChaine ? '.' + aNomEnChaine : '');
        }
      }
      const lArgs = (lResult.args = lParsed ? lParsed.args : []);
      if (!aContexteCourant.controleur || !aNomEnChaine) {
        return lResult;
      }
      let lTab = aNomEnChaine.split('.');
      lNom = lTab.pop();
      lAncreControleur = MethodesObjet_1.MethodesObjet.get(
        aContexteCourant.controleur,
        lTab,
      );
      let lEstFonction =
        lAncreControleur &&
        lAncreControleur[lNom] !== undefined &&
        MethodesObjet_1.MethodesObjet.isFunction(lAncreControleur[lNom]);
      if (
        !lEstFonction &&
        aContexteCourant.data &&
        aContexteCourant.data.$modeleParsed &&
        !aIgnorerNomOrigine
      ) {
        const lTabHorsModele = lNomEnChaineOrigine.split('.');
        const lNomHorsModel = lTabHorsModele.pop();
        const lAncreControleurHorsModele = MethodesObjet_1.MethodesObjet.get(
          aContexteCourant.controleur,
          lTabHorsModele,
        );
        if (
          lAncreControleurHorsModele &&
          lAncreControleurHorsModele[lNom] !== undefined &&
          MethodesObjet_1.MethodesObjet.isFunction(
            lAncreControleurHorsModele[lNomHorsModel],
          )
        ) {
          lEstFonction = true;
          lAncreControleur = lAncreControleurHorsModele;
          lTab = lTabHorsModele;
          lNom = lNomHorsModel;
        }
      }
      const lTabRempli = lTab.length > 0;
      if (lEstFonction) {
        const lArgsCallback = lArgs || [];
        let lAvecArgsBoucleREPEAT = false;
        let lArray;
        for (let lIx = 0; lIx < lArgsCallback.length; lIx++) {
          if (lArgsCallback[lIx] && lArgsCallback[lIx].getterArray) {
            lAvecArgsBoucleREPEAT = true;
            break;
          }
        }
        lResult.valide = true;
        lResult.controleur = aContexteCourant.controleur;
        lResult.getAncre = function () {
          return lTabRempli
            ? MethodesObjet_1.MethodesObjet.get(
                aContexteCourant.controleur,
                lTab,
              )
            : aContexteCourant.controleur;
        };
        lResult.callback = function (aTabArguments) {
          const lAncre = lTabRempli
            ? MethodesObjet_1.MethodesObjet.get(
                aContexteCourant.controleur,
                lTab,
              )
            : aContexteCourant.controleur;
          if (!lAncre || !lAncre[lNom] || !lAncre[lNom].apply) {
            return '';
          }
          let lArgs = lArgsCallback;
          let lArgCallback;
          if (lAvecArgsBoucleREPEAT) {
            lArgs = new Array(lArgsCallback.length);
            for (
              let lIx = 0, lLength = lArgsCallback.length;
              lIx < lLength;
              lIx++
            ) {
              lArgCallback = lArgsCallback[lIx];
              if (lArgCallback && lArgCallback.getterArray) {
                const lArgCallbackRepeat = lArgCallback;
                lArray = lArgCallbackRepeat.getterArray();
                lArgs[lIx] = {
                  indice: lArgCallbackRepeat.indice,
                  element: lArray[lArgCallbackRepeat.indice],
                  tableau: lArray,
                  arguments: lArgCallbackRepeat.arguments,
                };
              } else {
                lArgs[lIx] = lArgsCallback[lIx];
              }
            }
          }
          try {
            return lAncre[lNom].apply(
              aContexteCourant,
              aTabArguments && aTabArguments.length > 0
                ? lArgs.concat(aTabArguments)
                : lArgs,
            );
          } catch (e) {}
        };
        lResult.estFonction = true;
        lResult.nom = lNom;
        return lResult;
      }
      lResult.valide = !!MethodesObjet_1.MethodesObjet.get(
        aContexteCourant.controleur.instance,
        lTab,
      );
      lResult.getAncre = function () {
        return lTabRempli
          ? MethodesObjet_1.MethodesObjet.get(
              aContexteCourant.controleur.instance,
              lTab,
            )
          : aContexteCourant.controleur.instance;
      };
      lResult.getAncreControleur =
        lAncreControleur && lAncreControleur[lNom] !== undefined
          ? function () {
              return lTabRempli
                ? MethodesObjet_1.MethodesObjet.get(
                    aContexteCourant.controleur,
                    lTab,
                  )
                : aContexteCourant.controleur;
            }
          : null;
      lResult.callback = function () {
        const lAncre = lTabRempli
          ? MethodesObjet_1.MethodesObjet.get(
              aContexteCourant.controleur.instance,
              lTab,
            )
          : aContexteCourant.controleur.instance;
        if (!lAncre) {
          return '';
        }
        return lAncre[lNom];
      };
      lResult.estFonction = false;
      lResult.nom = lNom;
      return lResult;
    }
    function _getAccesParametresModel(
      aNomEnChaine,
      aContexteCourant,
      aAccepteErreur,
    ) {
      return _getAccesParametres(
        aNomEnChaine,
        'ie-model',
        aContexteCourant,
        TypeAccesParametres.default,
        aAccepteErreur,
        true,
      );
    }
    function _addCommentaireDebug(aNode, aCommentaire) {}
    function _estNoeudCommentaire(aNode) {
      return !!aNode && aNode.nodeType === 8;
    }
    function _getContexteCourant(
      aControleur,
      aContexte,
      aNode,
      aData,
      aInvocateur,
    ) {
      return {
        controleur: aControleur,
        instance: aControleur ? aControleur.instance : null,
        contexte: aContexte,
        data: aData,
        node: aNode,
        invocateur: aInvocateur,
        invocateurNode: new Invocateur_1.ObjetInvocateur(true),
      };
    }
    function _getAttributesDeNode(aNode) {
      return _sliceNodes(aNode.attributes);
    }
    function _getMapDeNode(aNode) {
      const lMap = {};
      for (
        let attr,
          nAttrs = _getAttributesDeNode(aNode),
          j = 0,
          jj = nAttrs && nAttrs.length;
        j < jj;
        j++
      ) {
        attr = nAttrs[j];
        if (attr.name) {
          const lName = attr.name.toLowerCase();
          lMap[lName] = attr.value;
        }
      }
      return lMap;
    }
    function _copyAttributs(aNodeSource, aNodeCible, aCallback) {
      const lMap = _getMapDeNode(aNodeSource);
      const lJCible = $(aNodeCible);
      for (const llName in lMap) {
        try {
          if (!aCallback || aCallback(llName, lMap[llName], lMap) !== false) {
            lJCible.attr(llName, lMap[llName]);
          }
        } catch (e) {}
      }
      return lMap;
    }
    function _addGetterHtml(aContexteCourant, aInfosParametres, aWrapperHtml) {
      const lNodeDestination =
        aContexteCourant.nodeTransfertContenuDynamique || aContexteCourant.node;
      const lGetter = function () {
        const lResult = MethodesObjet_1.MethodesObjet.isFunction(
          aInfosParametres,
        )
          ? aInfosParametres(aContexteCourant.node, lNodeDestination)
          : aInfosParametres.estFuncJSX
            ? aInfosParametres.callback([
                aContexteCourant.node,
                lNodeDestination,
                aContexteCourant,
              ])
            : aInfosParametres.callback([
                lNodeDestination,
                aContexteCourant.data,
              ]);
        if (MethodesObjet_1.MethodesObjet.isNumber(lResult)) {
          return lResult + '';
        }
        return (lResult || '') + '';
      };
      const lWrapperHtml =
        aWrapperHtml ||
        function (aHtml) {
          return aHtml;
        };
      const lHtml = lGetter();
      if (
        !MethodesObjet_1.MethodesObjet.isFunction(aInfosParametres) &&
        !aInfosParametres.estFonction &&
        !MethodesObjet_1.MethodesObjet.isString(lHtml)
      ) {
        return;
      }
      const lInvocateur = new Invocateur_1.ObjetInvocateur();
      $(lNodeDestination).empty();
      try {
        lNodeDestination.innerHTML = lWrapperHtml(lHtml);
      } catch (e) {
        $(lNodeDestination).html(lWrapperHtml(lHtml));
      }
      aContexteCourant.invocateurNode.evenement(lOutils.nomInvocRefresh, {
        refreshHtml: true,
        html: lHtml,
      });
      _compile(
        lNodeDestination.childNodes,
        lNodeDestination,
        aContexteCourant.controleur,
        aContexteCourant.contexte,
        lInvocateur,
      );
      let lOldHtmlCompare = jsx_1.JSXDictionaryCallbacks.getStrCompare(lHtml);
      _abonnerRefresh(
        () => {
          const lGUIDs = jsx_1.JSXDictionaryCallbacks.getGUIDs();
          const lHtml = lGetter();
          const lHtmlCompare =
            jsx_1.JSXDictionaryCallbacks.getStrCompare(lHtml);
          if (lHtmlCompare !== lOldHtmlCompare) {
            lOldHtmlCompare = lHtmlCompare;
            IEHtml.empty(lNodeDestination);
            const lContexte = Object.assign({}, aContexteCourant.contexte);
            lContexte.eventsInjectionHtml = [];
            _injectHTML({
              element: lNodeDestination,
              html: lWrapperHtml(lHtml),
              controleur: aContexteCourant.controleur,
              contexte: lContexte,
              invocateur: lInvocateur,
            });
            jsx_1.JSXDictionaryCallbacks.clear(lGUIDs);
            aContexteCourant.invocateurNode.evenement(lOutils.nomInvocRefresh, {
              refreshHtml: true,
              html: lHtml,
            });
          } else {
            jsx_1.JSXDictionaryCallbacks.clear(lGUIDs);
            lInvocateur.evenement(C_id_event_iemodel);
          }
        },
        lNodeDestination,
        aContexteCourant,
      );
      return lNodeDestination;
    }
    function _parseArg(aArg, aEstChaine, aContexte) {
      if (aEstChaine) {
        return aArg;
      }
      if (aContexte && aContexte.repeat && aContexte.repeat[aArg]) {
        return aContexte.repeat[aArg];
      }
      if (aArg === 'null') {
        return null;
      }
      if (aArg === 'undefined') {
        return undefined;
      }
      if (aArg === 'true') {
        return true;
      }
      if (aArg === 'false') {
        return false;
      }
      let lNumber = parseInt(aArg, 10);
      if (isNaN(lNumber)) {
        lNumber = null;
        throw 'erreur _parseArg';
      }
      return lNumber;
    }
    function _parseValueEvent(aValue, aContexte, aSortieEnErreur) {
      if (!aValue) {
        return null;
      }
      const lResult = { nom: '', args: [] };
      let lEtat = 'rech_fonction';
      let lChar;
      let lNomFonction = '';
      let lArg = '';
      let LArgEstChaine = false;
      const lLength = aValue.length;
      const lSepDebut = '(';
      const lSepFin = ')';
      try {
        for (let lIPars = 0; lIPars < lLength; lIPars++) {
          lChar = aValue.charAt(lIPars);
          switch (lEtat) {
            case 'rech_fonction':
              if (lChar === lSepDebut || lIPars === lLength - 1) {
                lEtat = 'rech_param';
                if (lIPars === aValue.length - 1) {
                  lNomFonction += lChar;
                }
                lResult.nom = lNomFonction.trim();
                if (lResult.nom.length === 0) {
                  return null;
                }
                lArg = '';
              } else {
                lNomFonction += lChar;
              }
              break;
            case 'rech_param':
              if (lChar === lSepFin) {
                if (lIPars < lLength - 1) {
                  if (aValue.charAt(lIPars + 1) !== ';') {
                    throw 'erreur fermeture fonction';
                  }
                }
                lArg = lArg.trim();
                if (
                  LArgEstChaine ||
                  lArg.length > 0 ||
                  lResult.args.length > 0
                ) {
                  lResult.args.push(_parseArg(lArg, LArgEstChaine, aContexte));
                }
                lEtat = 'fin';
                break;
              }
              if (lChar === ',') {
                lResult.args.push(
                  _parseArg(lArg.trim(), LArgEstChaine, aContexte),
                );
                lArg = '';
                LArgEstChaine = false;
              } else if (lChar === "'") {
                if (lArg.trim().length > 0) {
                }
                lArg = '';
                lEtat = 'rech_chaine';
              } else {
                lArg += lChar;
              }
              break;
            case 'rech_chaine':
              if (
                lChar === "'" &&
                (aValue.charAt(lIPars + 1) === ')' ||
                  aValue.charAt(lIPars + 1) === ',')
              ) {
                lEtat = 'rech_param';
                LArgEstChaine = true;
                break;
              }
              lArg += lChar;
              break;
            case 'fin':
              if (lChar !== ';') {
                throw 'erreur fin fonction';
              }
              break;
            default:
              throw 'cas non géré';
          }
        }
      } catch (e) {
        if (aSortieEnErreur) {
          return null;
        }
      }
      return lResult;
    }
    function _positionnerObjetSelonAccesseur(aChaineAccesseur, aObjet) {
      if (!aObjet) {
        return null;
      }
      const lTab = aChaineAccesseur.split('.');
      let lResult = aObjet;
      for (let i = 0; i < lTab.length; i++) {
        lResult = lResult[lTab[i]];
        if (!lResult) {
          return null;
        }
      }
      return lResult;
    }
    function _caret(aElement, begin, end) {
      let range;
      if (!aElement) {
        return;
      }
      if (typeof begin === 'number') {
        end = typeof end === 'number' ? end : begin;
        const lValue = aElement.value;
        begin = Math.min(begin, lValue.length);
        end = Math.min(end, lValue.length);
        if (aElement.setSelectionRange) {
          aElement.setSelectionRange(begin, end);
        } else if (aElement.createTextRange) {
          range = aElement.createTextRange();
          range.collapse(true);
          range.moveEnd('character', end);
          range.moveStart('character', begin);
          range.select();
        }
      } else {
        if (aElement.setSelectionRange) {
          begin = aElement.selectionStart;
          end = aElement.selectionEnd;
        } else if (document.selection && document.selection.createRange) {
          range = document.selection.createRange();
          begin = 0 - range.duplicate().moveStart('character', -100000);
          end = begin + range.text.length;
        }
        return { begin: begin, end: end };
      }
    }
    function _verificationInputModel(
      aContexteCourant,
      aParametres,
      aPatternValidateRegex,
    ) {
      if (aParametres.data.$ignoreRefresh) {
        return;
      }
      let lValue;
      if (aParametres.getterValueInit) {
        if (aParametres.declencherExitChange) {
          if (aParametres.getterValue) {
            lValue = aParametres.getterValue();
          } else {
            return;
          }
        } else {
          lValue = aParametres.getterValueInit();
        }
      } else {
        if (!aParametres.getterValue) {
          return;
        }
        lValue = aParametres.getterValue();
      }
      let lValueInput;
      if (aParametres.saveValues.value !== lValue) {
        if (aParametres.estCB) {
          aParametres.eventActif = false;
          $(aParametres.node).inputChecked(lValue);
          aParametres.eventActif = true;
          aParametres.saveValues.value = aParametres.saveValues.inputValue =
            lValue;
        } else {
          aParametres.eventActif = false;
          lValueInput = lValue;
          if (aParametres.toDisplay) {
            lValueInput = aParametres.toDisplay(lValueInput);
          }
          if (aParametres.contentEditable) {
            aParametres.node.innerHTML = lValueInput;
          } else {
            aParametres.node.value = lValueInput;
          }
          aParametres.eventActif = true;
          if (aPatternValidateRegex) {
            const lAncreControleur = aParametres.data.$modeleParsed
              ? _positionnerObjetSelonAccesseur(
                  aParametres.data.$modeleParsed.nom,
                  aParametres.controleur,
                )
              : null;
            if (lAncreControleur) {
              aContexteCourant.$patternOK = aPatternValidateRegex(lValue);
            }
          }
          aParametres.saveValues.value = lValue;
          aParametres.saveValues.inputValue = lValueInput;
        }
      } else {
        if (
          aParametres.estCB &&
          aContexteCourant.data &&
          aContexteCourant.data.estRadioBouton &&
          lValue !== $(aContexteCourant.node).is(':checked')
        ) {
          $(aParametres.node).inputChecked(lValue);
        }
        if (aParametres.toDisplay) {
          lValueInput = aParametres.toDisplay(lValue);
          if (aParametres.saveValues.inputValue !== lValueInput) {
            aParametres.eventActif = false;
            if (aParametres.contentEditable) {
              aParametres.node.innerHTML = lValueInput;
            } else {
              aParametres.node.value = lValueInput;
            }
            aParametres.eventActif = true;
          }
        }
      }
      if (aParametres.getterDisabled) {
        lValue = !!aParametres.getterDisabled();
        if (lValue !== aParametres.saveDisabled) {
          $(aParametres.node).inputDisabled(lValue);
          aParametres.saveDisabled = lValue;
        }
      }
      if (aParametres.getterReadOnly) {
        lValue = !!aParametres.getterReadOnly();
        if (lValue !== aParametres.saveReadOnly) {
          $(aParametres.node).prop('readonly', lValue);
          aParametres.saveReadOnly = lValue;
        }
      }
    }
    function _affecterGetterSetterInputModel(
      aParametres,
      aContexteCourant,
      aEstCB,
    ) {
      let lValue, lAncre;
      const lInfosGetValueInit = _getAccesParametresModel(
        'getValueInit',
        aContexteCourant,
      );
      if (lInfosGetValueInit.estFonction) {
        aParametres.getterValueInit = function () {
          const lValue = lInfosGetValueInit.callback([aParametres.node]);
          if (aEstCB) {
            return !!lValue;
          }
          return (lValue !== null && lValue !== void 0 ? lValue : '') + '';
        };
      }
      const lInfosGetValue = _getAccesParametresModel(
        'getValue',
        aContexteCourant,
      );
      const lInfosGetSetModele = _getAccesParametres(
        '',
        'ie-model',
        aContexteCourant,
      );
      if (lInfosGetValue.estFonction) {
        aParametres.getterValue = function () {
          const lValue = lInfosGetValue.callback([aParametres.node]);
          if (aEstCB) {
            return !!lValue;
          }
          return (lValue !== null && lValue !== void 0 ? lValue : '') + '';
        };
      } else if (!aParametres.getterValueInit) {
        if (lInfosGetValue.estModelJSX) {
          aParametres.getterValue = function () {
            return '';
          };
        } else {
          lAncre = lInfosGetSetModele.getAncre();
          if (!lInfosGetSetModele.valide || !lAncre) {
            return false;
          }
          lValue = lAncre[lInfosGetSetModele.nom];
          if (lValue) {
            if (aEstCB && lValue !== true) {
              return false;
            }
            if (
              !aEstCB &&
              !MethodesObjet_1.MethodesObjet.isString(
                lAncre[lInfosGetSetModele.nom],
              )
            ) {
              return false;
            }
          }
          aParametres.getterValue = function () {
            const lValue = lInfosGetSetModele.callback([]);
            if (aEstCB) {
              return !!lValue;
            }
            return (lValue !== null && lValue !== void 0 ? lValue : '') + '';
          };
        }
      }
      let lForcerDisabled = false;
      const lInfosSetValue = _getAccesParametresModel(
        'setValue',
        aContexteCourant,
      );
      if (lInfosSetValue.estFonction) {
        aParametres.setterValue = function (aValue, aParametresSetter) {
          return lInfosSetValue.callback([aValue, aParametresSetter]);
        };
      } else if (!aParametres.getterValueInit) {
        if (lInfosSetValue.estModelJSX) {
          lForcerDisabled = true;
          aParametres.setterValue = function () {};
        } else {
          lAncre = lInfosGetSetModele.getAncre();
          if (!lInfosGetSetModele.valide || !lAncre) {
            return false;
          }
          aParametres.setterValue = function (aValue) {
            const lAncre = lInfosGetSetModele.getAncre();
            if (!lAncre) {
              return;
            }
            lAncre[lInfosGetSetModele.nom] = aValue;
          };
        }
      }
      const lInfosGetDisabled = _getAccesParametresModel(
        'getDisabled',
        aContexteCourant,
      );
      if (lForcerDisabled) {
        aParametres.getterDisabled = () => {
          return true;
        };
      } else if (lInfosGetDisabled.estFonction) {
        aParametres.getterDisabled = lInfosGetDisabled.callback.bind(null, [
          aParametres.node,
          aContexteCourant.data,
        ]);
      }
      const lInfosGetReadOnly = _getAccesParametresModel(
        'getReadOnly',
        aContexteCourant,
      );
      if (lInfosGetReadOnly.estFonction) {
        aParametres.getterReadOnly = lInfosGetReadOnly.callback.bind(null, [
          aParametres.node,
          aContexteCourant.data,
        ]);
      }
      const lInfosExitChange = _getAccesParametresModel(
        'exitChange',
        aContexteCourant,
      );
      if (lInfosExitChange.estFonction) {
        aParametres.infosExitChange = lInfosExitChange;
      }
      if (aParametres.getterValueInit && !aParametres.infosExitChange) {
        aParametres.getterValueInit = null;
      }
      const lInfosInterrompreEvent = _getAccesParametresModel(
        'interrompreEvent',
        aContexteCourant,
      );
      if (lInfosInterrompreEvent.estFonction) {
        aParametres.interrompreEvent = lInfosInterrompreEvent;
      }
      const lInfosNode = _getAccesParametresModel('node', aContexteCourant);
      if (lInfosNode.estFonction) {
        aParametres.infosNode = lInfosNode;
      }
      const lInfosNodeAfter = _getAccesParametresModel(
        'nodeAfter',
        aContexteCourant,
      );
      if (lInfosNodeAfter.estFonction) {
        aParametres.infosNodeAfter = lInfosNodeAfter;
      }
      const lInfoskeyupEnter = _getAccesParametresModel(
        'keyupEnter',
        aContexteCourant,
      );
      if (lInfoskeyupEnter.estFonction) {
        aParametres.infoskeyupEnter = lInfoskeyupEnter;
      }
      return true;
    }
    function _estNodeContentEditable(aNode) {
      if (
        aNode &&
        (aNode.isContentEditable || aNode.contentEditable === 'true')
      ) {
        const lNodeName = aNode.nodeName ? aNode.nodeName.toLowerCase() : '';
        return lNodeName !== 'input' && lNodeName !== 'textarea';
      }
      return false;
    }
    function _gererInputModele(
      aContexteCourant,
      aJNode,
      aEstCB,
      aAttributType,
      aMaxLength,
    ) {
      let lModele = null,
        lMask,
        lMatchMask,
        lPattern,
        lMatchPattern,
        lPatternValidateRegex,
        lTrim = false,
        lAvecAttrTrim = false,
        lValue = aEstCB ? false : '',
        lDisabled = false,
        lReadOnly = false,
        lInfosToDisplay = null,
        lInfosFromDisplay = null,
        lFuncExitChange = null,
        lEstTexteBrut = false;
      const lEstInputTime = aAttributType === 'time';
      const lSaveValues = {},
        lRefresh = aContexteCourant.contexte.refresh,
        lParametres = {
          node: aContexteCourant.node,
          controleur: aContexteCourant.controleur,
          data: aContexteCourant.data,
          estCB: aEstCB,
          saveValues: lSaveValues,
          eventActif: true,
          saveDisabled: false,
          getterValue: null,
          getterValueInit: null,
          setterValue: null,
          getterDisabled: null,
          getterReadOnly: null,
          toDisplay: null,
          fromDisplay: null,
          declencherExitChange: false,
          contentEditable: _estNodeContentEditable(aContexteCourant.node),
        };
      if (lParametres.contentEditable && aMaxLength > 0) {
        aMaxLength = 0;
      }
      if (aContexteCourant.node.hasAttribute('ie-etatsaisie')) {
        aContexteCourant.etatSaisie = true;
        aContexteCourant.node.removeAttribute('ie-etatsaisie');
        lOutils.addCommentaireDebug(aContexteCourant.node, 'ie-etatsaisie');
      }
      lModele = _getModel(aContexteCourant);
      if (lModele) {
        if (lModele) {
          Object.assign(lParametres, {
            modele: lModele,
            modeleArg: aContexteCourant.data.$modeleParsed,
          });
          if (
            !_affecterGetterSetterInputModel(
              lParametres,
              aContexteCourant,
              aEstCB,
            )
          ) {
            return;
          }
          if (lParametres.infosExitChange) {
            aContexteCourant.data.forceExitChange = function (aParametresExit) {
              if (lFuncExitChange) {
                lFuncExitChange(aParametresExit);
              }
            };
          }
          lValue = lParametres.getterValueInit
            ? lParametres.getterValueInit()
            : lParametres.getterValue();
          if (lParametres.getterDisabled) {
            lDisabled = lParametres.saveDisabled =
              !!lParametres.getterDisabled();
            aJNode.inputDisabled(lDisabled);
          }
          if (lParametres.getterReadOnly) {
            lReadOnly = lParametres.saveReadOnly =
              !!lParametres.getterReadOnly();
            aJNode.prop('readonly', lReadOnly);
          }
          if (aEstCB) {
            lValue = !!lValue;
            lSaveValues.value = lSaveValues.inputValue = lValue;
            aJNode.inputChecked(lValue);
          } else {
            lValue = lValue || '';
            lSaveValues.value = lSaveValues.inputValue = lValue;
            lAvecAttrTrim = aContexteCourant.node.hasAttribute('ie-trim');
            if (lAvecAttrTrim) {
              lOutils.addCommentaireDebug(aContexteCourant.node, 'ie-trim');
              aContexteCourant.node.removeAttribute('ie-trim');
            }
            lTrim =
              (aAttributType !== 'password' && lAvecAttrTrim) ||
              aContexteCourant.estIndicatifTelephone;
            if (lParametres.contentEditable) {
              lEstTexteBrut = true;
            } else if (
              aContexteCourant.estTelephone ||
              aContexteCourant.estIndicatifTelephone ||
              aAttributType === 'password' ||
              aAttributType === 'email'
            ) {
              lEstTexteBrut = true;
            } else if (aContexteCourant.node.hasAttribute('ie-textbrut')) {
              lEstTexteBrut = true;
              aContexteCourant.node.removeAttribute('ie-textbrut');
              lOutils.addCommentaireDebug(aContexteCourant.node, 'ie-textbrut');
            }
            if (!uTailleMaxTelephone) {
              uTailleMaxTelephone = ObjetChaine_1.GChaine.maskTelephone.replace(
                / /g,
                '',
              ).length;
            }
            lInfosToDisplay = _getAccesParametresModel(
              'toDisplay',
              aContexteCourant,
            );
            lInfosFromDisplay = _getAccesParametresModel(
              'fromDisplay',
              aContexteCourant,
            );
            lParametres.toDisplay = function (aChaine) {
              if (!lEstTexteBrut) {
                aChaine = ObjetChaine_1.GChaine.enleverEntites(aChaine);
              }
              if (aContexteCourant.estIndicatifTelephone) {
                aChaine =
                  '+ ' +
                  aChaine
                    .replace(IEHtml.REGEXP_INDICATIF_TELEPHONE, '')
                    .slice(0, IEHtml.TAILLEMAX_INDICATIF_TELEPHONE);
              }
              if (
                aContexteCourant.estTelephone &&
                ObjetChaine_1.GChaine &&
                ObjetChaine_1.GChaine.formatTelephone
              ) {
                aChaine = ObjetChaine_1.GChaine.formatTelephone(
                  aChaine
                    .replace(IEHtml.REGEXP_TELEPHONE, '')
                    .slice(0, uTailleMaxTelephone),
                );
              }
              if (lInfosToDisplay && lInfosToDisplay.estFonction) {
                aChaine = lInfosToDisplay.callback([
                  aChaine,
                  aContexteCourant.node,
                  aContexteCourant.data,
                ]);
              }
              return aChaine;
            };
            lParametres.fromDisplay = function (aChaine) {
              if (lInfosFromDisplay && lInfosFromDisplay.estFonction) {
                aChaine = lInfosFromDisplay.callback([
                  aChaine,
                  aContexteCourant.node,
                  aContexteCourant.data,
                ]);
              }
              if (!lEstTexteBrut) {
                aChaine = ObjetChaine_1.GChaine.ajouterEntites(aChaine);
              }
              if (lTrim && aChaine.trim) {
                aChaine = aChaine.trim();
              }
              if (aContexteCourant.estIndicatifTelephone) {
                aChaine = aChaine
                  .replace(/\+| /g, '')
                  .replace(IEHtml.REGEXP_INDICATIF_TELEPHONE, '')
                  .slice(0, IEHtml.TAILLEMAX_INDICATIF_TELEPHONE);
              }
              if (aContexteCourant.estTelephone) {
                aChaine = aChaine
                  .replace(/ /g, '')
                  .replace(IEHtml.REGEXP_TELEPHONE, '')
                  .slice(0, uTailleMaxTelephone);
              }
              return aChaine;
            };
            lValue = lSaveValues.inputValue = lParametres.toDisplay(lValue);
            if (lParametres.contentEditable) {
              aContexteCourant.node.innerHTML = lValue;
            } else {
              aContexteCourant.node.value = lValue;
            }
            lPattern = aContexteCourant.node.getAttribute('ie-pattern');
            lMatchPattern =
              lPattern && lPattern.match
                ? lPattern.match(C_RegExp_Match)
                : null;
            if (lMatchPattern) {
              const lRegExp = new RegExp(lMatchPattern[1], lMatchPattern[2]);
              lPatternValidateRegex = function (value) {
                return !value || lRegExp.test(value);
              };
              aContexteCourant.$patternOK = lPatternValidateRegex(
                lSaveValues.inputValue,
              );
            }
            if (lPattern) {
              lOutils.addCommentaireDebug(
                aContexteCourant.node,
                'ie-pattern="' + lPattern + '"',
              );
              aContexteCourant.node.removeAttribute('ie-pattern');
            }
          }
        }
      }
      if (!aEstCB) {
        lMask = aContexteCourant.node.getAttribute('ie-mask');
        if (lMask) {
          lOutils.addCommentaireDebug(
            aContexteCourant.node,
            'ie-mask="' + lMask + '"',
          );
          aContexteCourant.node.removeAttribute('ie-mask');
          if (lParametres.contentEditable) {
            lMask = '';
          }
        }
        if (lMask && !lModele) {
          lSaveValues.value = aContexteCourant.node.value;
        }
        lMatchMask = lMask && lMask.match ? lMask.match(C_RegExp_Match) : null;
      }
      if (lModele) {
        _abonnerRefresh(
          () => {
            _verificationInputModel(
              aContexteCourant,
              lParametres,
              lPatternValidateRegex,
            );
          },
          aContexteCourant.node,
          aContexteCourant,
        );
      }
      if (lModele || (!aEstCB && (lMatchMask || aMaxLength))) {
        aJNode.on(
          aEstCB ? IEHtml.C_eventsModifyCheckbox : IEHtml.C_eventsModifyInput,
          function (aEvent) {
            if (!lParametres.eventActif) {
              return;
            }
            let lNewValue = null,
              lNewInputValue = null,
              lValueInput,
              lCaret = null;
            if (aEstCB) {
              lNewValue = $(this).is(':checked');
            } else {
              lValueInput = lParametres.contentEditable
                ? this.innerHTML
                : this.value;
              lNewValue = lValueInput;
              lNewInputValue = lNewValue;
              if (
                lParametres.interrompreEvent &&
                lParametres.interrompreEvent.callback([
                  aEvent,
                  aContexteCourant.node,
                ])
              ) {
                return false;
              }
              if (
                aMaxLength > 0 &&
                lNewValue.length > aMaxLength &&
                !lParametres.contentEditable
              ) {
                const lTop = $(this).scrollTop();
                this.value = lNewValue = lNewValue.slice(0, aMaxLength);
                $(this).scrollTop(lTop);
              }
              if (lMatchMask && lNewValue.length > 0) {
                let lSanitize = '';
                let lCharMask = '';
                const lRegExpMask = new RegExp(lMatchMask[1], lMatchMask[2]);
                for (let lIx = 0; lIx < lNewValue.length; lIx++) {
                  lCharMask = lNewValue.charAt(lIx);
                  if (!lRegExpMask.test(lCharMask)) {
                    lSanitize += lCharMask;
                  }
                }
                if (lParametres.fromDisplay) {
                  lNewValue = lParametres.fromDisplay(lNewValue);
                }
                if (lSanitize !== lNewValue) {
                  const lNomProp = lParametres.contentEditable
                    ? 'innerHTML'
                    : 'value';
                  if (lSanitize === lSaveValues.value) {
                    if (lParametres.toDisplay) {
                      this[lNomProp] = lParametres.toDisplay(lSaveValues.value);
                    } else {
                      this[lNomProp] = lSaveValues.value;
                    }
                    return false;
                  }
                  lNewValue = lSanitize;
                  lNewInputValue = lSanitize;
                  if (lParametres.toDisplay) {
                    this[lNomProp] = lNewInputValue =
                      lParametres.toDisplay(lNewValue);
                  } else {
                    this[lNomProp] = lNewValue;
                  }
                }
              } else if (lParametres.fromDisplay) {
                lNewValue = lParametres.fromDisplay(lNewValue);
              }
              if (lParametres.toDisplay) {
                lNewInputValue = lParametres.toDisplay(lNewValue);
                if (
                  (lTrim && lNewInputValue.trim() !== lValueInput.trim()) ||
                  (!lTrim && lNewInputValue !== lValueInput)
                ) {
                  lCaret = null;
                  if (aContexteCourant.estTelephone) {
                    lCaret = _caret(this);
                    if (lValueInput.length < lSaveValues.inputValue.length) {
                      lCaret.begin = Math.max(
                        0,
                        lCaret.begin -
                          (lSaveValues.inputValue.length -
                            lNewInputValue.length) +
                          1,
                      );
                      if (lNewInputValue.charAt(lCaret.begin - 1) === ' ') {
                        lCaret.begin -= 1;
                      }
                      lCaret.change = true;
                    } else {
                      if (
                        lNewInputValue.length < lSaveValues.inputValue.length
                      ) {
                        lCaret.begin -=
                          lValueInput.length - lNewInputValue.length + 1;
                      }
                      if (lNewInputValue === lSaveValues.inputValue) {
                        lCaret.begin -=
                          lValueInput.length - lNewInputValue.length;
                      } else if (
                        lNewInputValue.charAt(lCaret.begin - 1) === ' '
                      ) {
                        lCaret.begin += 1;
                      } else if (
                        lNewInputValue.length > lSaveValues.inputValue.length &&
                        lCaret.begin > lSaveValues.inputValue.length
                      ) {
                        lCaret.begin = lNewInputValue.length;
                      }
                      lCaret.change = true;
                    }
                  }
                  if (lParametres.contentEditable) {
                    this.innerHTML = lNewInputValue;
                  } else {
                    this.value = lNewInputValue;
                  }
                  if (lCaret && lCaret.change) {
                    _caret(this, lCaret.begin);
                  }
                }
              }
            }
            if (lSaveValues.value !== lNewValue) {
              let lPatternOK, lCloneSave;
              if (lModele) {
                lPatternOK = true;
                if (lPatternValidateRegex) {
                  lPatternOK = lPatternValidateRegex(lNewValue);
                  aContexteCourant.$patternOK = lPatternOK;
                }
                lCloneSave =
                  MethodesObjet_1.MethodesObjet.dupliquer(lSaveValues);
              }
              lParametres.declencherExitChange = true;
              lSaveValues.value = lNewValue;
              lSaveValues.inputValue = lNewInputValue;
              if (aContexteCourant.etatSaisie) {
                if (
                  aContexteCourant.controleur &&
                  aContexteCourant.controleur.instance &&
                  _estInstanceIdentite(aContexteCourant.controleur.instance)
                ) {
                  aContexteCourant.controleur.instance.setEtatSaisie(true);
                } else {
                  Invocateur_1.Invocateur.evenement(
                    Invocateur_1.ObjetInvocateur.events.etatSaisie,
                    true,
                  );
                }
              }
              if (lModele) {
                const lParametresSetValue = {
                  node: this,
                  event: aEvent,
                  value: lNewValue,
                  inputValue: lNewInputValue,
                  textBrut: lEstTexteBrut,
                  oldValues: lCloneSave,
                  patternOK: lPatternOK,
                  selectionTexte: false,
                };
                if (lEstInputTime && uFuncDate.parseHeureMinute) {
                  lParametresSetValue.time =
                    uFuncDate.parseHeureMinute(lNewValue);
                }
                if (lParametres.setterValue) {
                  lParametres.setterValue(lNewValue, lParametresSetValue);
                }
                aContexteCourant.data.$ignoreRefresh = true;
                try {
                  lRefresh();
                } finally {
                  delete aContexteCourant.data.$ignoreRefresh;
                }
                if (aContexteCourant.data.$destroy === true) {
                  return;
                }
                _verificationInputModel(aContexteCourant, lParametres);
                if (lParametresSetValue.selectionTexte && !aEstCB) {
                  aContexteCourant.node.select();
                }
              }
            }
          },
        );
      }
      if (lTrim) {
        aJNode.on('change blur', function () {
          const lValue = lParametres.contentEditable
            ? this.innerHTML
            : this.value;
          const lValueTrim = lValue.trim();
          if (lValueTrim !== lValue) {
            lSaveValues.value = lValueTrim;
            lSaveValues.inputValue = lValueTrim;
            if (lParametres.contentEditable) {
              this.innerHTML = lValueTrim;
            } else {
              this.value = lValueTrim;
            }
          }
        });
      }
      if (lParametres.infosExitChange) {
        lFuncExitChange = function (aParamsExit) {
          const lParametresExitChange = Object.assign(aParamsExit || {}, {
            node: aContexteCourant.node,
            data: aContexteCourant.data,
            event: null,
          });
          let lValue = lSaveValues.value;
          if (lEstInputTime && uFuncDate.parseHeureMinute) {
            const lTime = uFuncDate.parseHeureMinute(lSaveValues.value);
            lParametresExitChange.time = lTime;
            const lStepStr = aContexteCourant.node.getAttribute('step');
            if (lStepStr) {
              const lStepInputTime_enM = Math.floor(
                parseInt(lStepStr, 10) / 60,
              );
              if (lStepInputTime_enM > 0) {
                const lReste = lTime.minute % lStepInputTime_enM;
                if (lReste <= lStepInputTime_enM / 2) {
                  lTime.minute = lTime.minute - lReste;
                } else {
                  lTime.minute = lTime.minute + (lStepInputTime_enM - lReste);
                }
              }
            }
            const lMinInputTimeStr = aContexteCourant.node.getAttribute('min');
            if (lMinInputTimeStr) {
              const lTimeMin = uFuncDate.parseHeureMinute(lMinInputTimeStr);
              if (lTimeMin.ok) {
                if (lTimeMin.heure > lTime.heure) {
                  lTime.heure = lTimeMin.heure;
                  lTime.minute = lTimeMin.minute;
                } else if (
                  lTimeMin.heure === lTime.heure &&
                  lTimeMin.minute > lTime.minute
                ) {
                  lTime.minute = lTimeMin.minute;
                }
              }
            }
            const lMaxInputTimeStr = aContexteCourant.node.getAttribute('max');
            if (lMaxInputTimeStr) {
              const lTimeMax = uFuncDate.parseHeureMinute(lMaxInputTimeStr);
              if (lTimeMax.ok) {
                if (lTime.heure > lTimeMax.heure) {
                  lTime.heure = lTimeMax.heure;
                  lTime.minute = lTimeMax.minute;
                } else if (
                  lTime.heure === lTimeMax.heure &&
                  lTime.minute > lTimeMax.minute
                ) {
                  lTime.minute = lTimeMax.minute;
                }
              }
            }
            const lDateModif = new Date();
            lDateModif.setHours(lTime.heure);
            lDateModif.setMinutes(lTime.minute);
            lValue = uFuncDate.formatDate(lDateModif, '%hh:%mm');
          }
          lParametres.infosExitChange.callback([lValue, lParametresExitChange]);
          _verificationInputModel(
            aContexteCourant,
            lParametres,
            lPatternValidateRegex,
          );
          lRefresh();
          if (lParametresExitChange.selectionTexte && !aEstCB) {
            aContexteCourant.node.select();
          }
        };
        let lEventsExitChange = 'blur focusout';
        if (!lEstInputTime) {
          lEventsExitChange += ' change';
        }
        aJNode.on(lEventsExitChange, (aEvent) => {
          if (!lParametres.declencherExitChange) {
            return;
          }
          lParametres.declencherExitChange = false;
          lFuncExitChange({ node: aJNode.get(0), event: aEvent });
        });
      }
      lOutils.abonneNodeEtNodeAfter(
        lParametres.infosNode,
        lParametres.infosNodeAfter,
        aContexteCourant,
      );
      if (lParametres.infoskeyupEnter) {
        aJNode.on('keyup', (aEvent) => {
          if (aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot) {
            lParametres.infoskeyupEnter.callback([
              aEvent,
              aContexteCourant.node,
            ]);
            lRefresh();
          }
        });
      }
      if (
        !aEstCB &&
        IE.estMobile &&
        aJNode.is(
          'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea',
        )
      ) {
        aJNode.on({
          focus() {
            _findElementPourGererActive_mobile(this).addClass('active');
          },
          blur() {
            if (
              this.value.length === 0 &&
              !aContexteCourant.node.getAttribute('placeholder')
            ) {
              _findElementPourGererActive_mobile(this).removeClass('active');
            }
          },
          'change input'() {
            if (
              this.value.length !== 0 ||
              aContexteCourant.node.getAttribute('placeholder')
            ) {
              _findElementPourGererActive_mobile(this).addClass('active');
            }
          },
        });
      }
    }
    function _findElementPourGererActive_mobile(aNode) {
      return $(aNode).closest('.input-field').find('>label, >.prefix');
    }
    function _gererInputCB(aContexteCourant, aAttributType) {
      _gererInputModele(
        aContexteCourant,
        $(aContexteCourant.node),
        true,
        aAttributType,
      );
    }
    function _gererMaxLengthInputText(
      aContexteCourant,
      aNode,
      aJNode,
      aEstInput,
      aAttributType,
    ) {
      const lAttrMaxLength = aNode.getAttribute('maxlength');
      let lMaxLength = 0;
      if (aEstInput) {
        if (
          aContexteCourant.estIndicatifTelephone ||
          aContexteCourant.estTelephone
        ) {
          return;
        }
        if (IEHtml.MAX_LENGTH_Default === 0) {
          return;
        }
        if (
          !lAttrMaxLength &&
          (aAttributType === 'text' ||
            aAttributType === '' ||
            aAttributType === 'number' ||
            aAttributType === 'email' ||
            aAttributType === 'url')
        ) {
          aJNode.attr('maxlength', IEHtml.MAX_LENGTH_Default);
        } else if (parseInt(lAttrMaxLength, 10) === 0) {
          aNode.removeAttribute('maxlength');
        }
      } else {
        lMaxLength = lAttrMaxLength
          ? parseInt(lAttrMaxLength, 10)
          : IEHtml.MAX_LENGTH_Default;
        if (isNaN(lMaxLength)) {
          lMaxLength = IEHtml.MAX_LENGTH_Default;
        }
      }
      return lMaxLength;
    }
    function _actualiserClassScrollTextArea(aNode) {
      if (aNode.scrollHeight > aNode.offsetHeight) {
        $(aNode).addClass('has-scroll');
      } else {
        $(aNode).removeClass('has-scroll');
      }
    }
    function _gererInputText(aContexteCourant, aAttributType) {
      let lJNode = $(aContexteCourant.node);
      const lEstInput = aContexteCourant.nodeName === 'input';
      const lEstTextArea = aContexteCourant.nodeName === 'textarea';
      if (lEstInput && aContexteCourant.node.hasAttribute('ie-indicatiftel')) {
        aContexteCourant.estIndicatifTelephone = true;
        lJNode.addClass('ie-indicatiftel');
        lOutils.addCommentaireDebug(aContexteCourant.node, 'ie-indicatiftel');
        aContexteCourant.node.removeAttribute('ie-indicatiftel');
      } else if (
        lEstInput &&
        aContexteCourant.node.hasAttribute('ie-telephone')
      ) {
        aContexteCourant.estTelephone = true;
        lJNode.addClass('ie-telephone');
        lOutils.addCommentaireDebug(aContexteCourant.node, 'ie-telephone');
        aContexteCourant.node.removeAttribute('ie-telephone');
      }
      const lMaxLength =
        lEstInput || lEstTextArea
          ? _gererMaxLengthInputText(
              aContexteCourant,
              aContexteCourant.node,
              lJNode,
              lEstInput,
              aAttributType,
            )
          : 0;
      if (lEstInput && aAttributType === 'time') {
        aContexteCourant.node.setAttribute('ie-mask', '/[^0-9:]/i');
        if (IE.estMobile) {
          aContexteCourant.node.setAttribute('pattern', '[0-9]{2}:[0-9]{2}');
        }
        aContexteCourant.node.setAttribute('size', '3');
      }
      if (
        lEstInput ||
        lEstTextArea ||
        aContexteCourant.data.$modeleValue ||
        aContexteCourant.data.$modelObjectJSX
      ) {
        _gererInputModele(
          aContexteCourant,
          lJNode,
          false,
          aAttributType,
          lMaxLength,
        );
      }
      if (lEstTextArea) {
        lOutils.surInjectionHtml(
          aContexteCourant,
          () => {
            _actualiserClassScrollTextArea(aContexteCourant.node);
          },
          true,
        );
        _abonnerRefresh(
          () => {
            _actualiserClassScrollTextArea(aContexteCourant.node);
          },
          aContexteCourant.node,
          aContexteCourant,
        );
        $(aContexteCourant.node).on(IEHtml.C_eventsModifyInput, function () {
          _actualiserClassScrollTextArea(this);
        });
      }
      lJNode = null;
    }
    function _getDataDeNode(aNode) {
      const lNodeValue = aNode.getAttribute('ie-data');
      let lData = null;
      if (
        lNodeValue &&
        lNodeValue.length > 2 &&
        lNodeValue.charAt(0) === '{' &&
        lNodeValue.charAt(lNodeValue.length - 1) === '}'
      ) {
        try {
          lData = ObjetJSON_1.ObjetJSON.parse(lNodeValue, {
            ignorerEntites: true,
          });
        } catch (e) {
          lData = null;
        }
      }
      return lData;
    }
    function _traiterIF(
      aNode,
      aNodeParent,
      aControleur,
      aContexte,
      aContexteCourant,
    ) {
      const lValueAttr = aNode.getAttribute('ie-if');
      aNode.removeAttribute('ie-if');
      aContexteCourant.node = aNode;
      if (!lValueAttr) {
        return true;
      }
      _remplirDataModel(aContexteCourant);
      const lInfos = _getAccesParametres(lValueAttr, 'ie-if', aContexteCourant);
      let lValue = !!lInfos.callback([aContexteCourant.node]);
      let lOldValue = lValue;
      const lChaineData = 'ie-if';
      const lNodeComm = document.createComment(lChaineData);
      let lEstInit = false;
      let lEstDestroyed = false;
      aNode.parentNode.insertBefore(lNodeComm, aNode);
      const lRefreshNode = () => {
        if (!lEstInit) {
          return;
        }
        if (lEstDestroyed) {
          return;
        }
        try {
          if (lValue) {
            if (
              !aNodeParent ||
              !aNodeParent.contains ||
              aNodeParent.contains(aContexteCourant.node) ||
              !aNodeParent.contains(lNodeComm)
            ) {
              return;
            }
            if (lNodeComm.nextSibling) {
              aNodeParent.insertBefore(
                aContexteCourant.node,
                lNodeComm.nextSibling,
              );
            } else {
              aNodeParent.appendChild(aContexteCourant.node);
            }
          } else {
            aNodeParent.removeChild(aContexteCourant.node);
          }
        } catch (e) {}
      };
      _abonnerRefresh(
        () => {
          lValue = !!lInfos.callback([aContexteCourant.node]);
          if (lOldValue !== lValue) {
            lOldValue = lValue;
            lRefreshNode();
          }
        },
        aNodeParent,
        aContexteCourant,
        () => {
          if (lEstDestroyed) {
            return;
          }
          lEstDestroyed = true;
          if (!lValue) {
            $(aContexteCourant.node).remove();
          }
        },
        () => {
          if (
            !lEstDestroyed &&
            aNodeParent &&
            aNodeParent.contains &&
            !aNodeParent.contains(lNodeComm)
          ) {
            return true;
          }
          return false;
        },
      );
      lOutils.surInjectionHtml(
        aContexteCourant,
        (aMeasure) => {
          lEstInit = true;
          if (!lValue) {
            lRefreshNode();
          }
        },
        true,
      );
      return true;
    }
    function _addNodeDeREPEAT(
      aNodeParent,
      aControleur,
      aCloneModele,
      aNomVariableBoucle,
      aIndice,
      aInfosAcces,
      aNodeComm,
      aContexte,
      aArrayNodes,
      aInvocateur,
      aInitialisationRepeat,
    ) {
      let lNodeAvant;
      lNodeAvant = aNodeComm;
      if (aIndice > 0) {
        lNodeAvant = aArrayNodes[aIndice - 1];
      }
      if (!aContexte.repeat) {
        aContexte.repeat = {};
      }
      const lContexte = Object.assign({}, aContexte),
        lContexteBoucles = {};
      if (!lContexte.eventsInjectionHtml) {
        lContexte.eventsInjectionHtml = aContexte.eventsInjectionHtml = [];
      }
      lContexteBoucles[aNomVariableBoucle] = {
        indice: aIndice,
        arguments: aInfosAcces.args,
        getterArray: function () {
          return aInfosAcces.callback([]) || [];
        },
      };
      lContexte.repeat = Object.assign(lContexteBoucles, aContexte.repeat);
      if (aInitialisationRepeat) {
        const lNodeClone = aCloneModele.cloneNode(true);
        aNodeParent.insertBefore(lNodeClone, lNodeAvant.nextSibling);
        aArrayNodes[aIndice] = _compileNode(
          lNodeClone,
          aNodeParent,
          aControleur,
          lContexte,
          aInvocateur,
        );
      } else {
        const lParams = {
          element: aNodeParent,
          html: aCloneModele.cloneNode(true),
          controleur: aControleur,
          contexte: lContexte,
          invocateur: aInvocateur,
          childNodes: null,
        };
        _injectEtCompilNode(lParams);
        aArrayNodes[aIndice] = _transfererFragmentDansHTML(
          lParams.childNodes,
          aNodeParent,
          lNodeAvant.nextSibling,
        );
        lParams.childNodes = null;
      }
    }
    function _getDiffTab(aTabOld, aTabNew) {
      const lLength = Math.max(aTabOld.length, aTabNew.length),
        lResult = [];
      for (let i = 0; i < lLength; i++) {
        if (aTabOld[i] !== aTabNew[i]) {
          lResult[i] = {
            supprimer: true,
            ajouter: aTabNew[i] !== null && aTabNew[i] !== undefined,
          };
        }
      }
      return lResult;
    }
    function _traiterREPEAT(aNode, aNodeParent, aControleur, aContexte, aData) {
      let lValueAttr = aNode.getAttribute('ie-repeat');
      aNode.removeAttribute('ie-repeat');
      if (!lValueAttr) {
        return true;
      }
      if (!aControleur) {
        return true;
      }
      const lTab = lValueAttr.split('in');
      if (lTab.length !== 2) {
        return true;
      }
      lValueAttr = lTab[1].trim();
      const lNomVariableBoucle = lTab[0].trim();
      if (!aContexte.repeat) {
        aContexte.repeat = {};
      }
      if (aContexte.repeat[lNomVariableBoucle]) {
        return true;
      }
      const lContexteCourant = _getContexteCourant(
        aControleur,
        aContexte,
        aNode,
        aData,
      );
      const lInfos = _getAccesParametres(
        lValueAttr,
        'ie-repeat',
        lContexteCourant,
      );
      let lArrayValue = [].concat(lInfos.callback([]) || []);
      const lChaineData = 'ie-repeat';
      const lNodeComm = document.createComment(lChaineData);
      const lArrayNodes = [];
      const lArrayComms = [];
      const lCloneModele = aNode.cloneNode(true);
      aNode.parentNode.insertBefore(lNodeComm, aNode);
      const lInvocateur = new Invocateur_1.ObjetInvocateur();
      _abonnerRefresh(
        () => {
          const lNewArrayValue = lInfos.callback([]) || [];
          const lDiff = _getDiffTab(lArrayValue, lNewArrayValue);
          let lArrayRemove;
          let lAvecModif = false;
          let lPreInjectionHtml;
          if (lDiff.length > 0) {
            lArrayRemove = [];
            for (let i = 0; i < lDiff.length; i++) {
              if (lDiff[i] && lDiff[i].supprimer) {
                lAvecModif = true;
                if (!lPreInjectionHtml) {
                  lPreInjectionHtml = _preInjectionHTML(aNodeParent, null);
                }
                lArrayRemove.push(lArrayNodes[i]);
                lArrayNodes[i] = null;
                if (i > 0 && lArrayComms[i]) {
                  lArrayRemove.push(lArrayComms[i]);
                  lArrayComms[i] = null;
                }
              }
            }
            if (lArrayRemove.length > 0) {
              $(lArrayRemove).remove();
            }
            for (let i = 0; i < lDiff.length; i++) {
              if (lDiff[i] && lDiff[i].ajouter) {
                lAvecModif = true;
                if (!lPreInjectionHtml) {
                  lPreInjectionHtml = _preInjectionHTML(aNodeParent, null);
                }
                _addNodeDeREPEAT(
                  aNodeParent,
                  aControleur,
                  lCloneModele,
                  lNomVariableBoucle,
                  i,
                  lInfos,
                  lNodeComm,
                  aContexte,
                  lArrayNodes,
                  lInvocateur,
                );
              }
            }
            lArrayValue = [].concat(lNewArrayValue);
            if (lAvecModif && lPreInjectionHtml) {
              _finaliserInjectionHTML(lPreInjectionHtml, aContexte);
            }
          }
          lInvocateur.evenement(C_id_event_iemodel);
        },
        aNodeParent,
        lContexteCourant,
        null,
        () => {
          if (
            aNodeParent &&
            aNodeParent.contains &&
            !aNodeParent.contains(lNodeComm)
          ) {
            return true;
          }
          return false;
        },
      );
      $(aNode).remove();
      for (let i = 0; i < lArrayValue.length; i++) {
        _addNodeDeREPEAT(
          aNodeParent,
          aControleur,
          lCloneModele,
          lNomVariableBoucle,
          i,
          lInfos,
          lNodeComm,
          aContexte,
          lArrayNodes,
          lInvocateur,
          true,
        );
      }
      return false;
    }
    function _compileNode(
      aNode,
      aNodeParent,
      aControleur,
      aContexte,
      aInvocateur,
      aProfondeur,
    ) {
      let lResultBalise,
        lNodeName,
        lNode = aNode,
        lData = null,
        lAvecAttributData = false,
        lJSONDebugData,
        lNameAttribut,
        lAvecCompilFils = true;
      const lProfondeur = aProfondeur || 0;
      const lContexteCourant = _getContexteCourant(
        aControleur,
        aContexte,
        aNode,
        null,
        aInvocateur,
      );
      if (lProfondeur > 1000) {
        return;
      }
      const lNodeType = lNode.nodeType;
      lNodeName = lNode.nodeName;
      if (lNodeType === 1 && !!lNodeName) {
        lNodeName = lNodeName ? lNodeName.toLowerCase() : '';
        if (!aContexte.refresh) {
          aContexte.refresh = function () {
            if (aControleur && aControleur.$refresh) {
              return aControleur.$refresh(true);
            }
            return IEHtml.refresh(true);
          };
        }
        if (!aContexte.refreshSelf) {
          aContexte.refreshSelf = async function () {
            if (aControleur && aControleur.$refreshSelf) {
              return aControleur.$refreshSelf(true);
            }
            return Promise.resolve();
          };
        }
        lJSONDebugData = null;
        lData = _getDataDeNode(lNode);
        lAvecAttributData = !!lData;
        if (!lData) {
          lData = {};
        }
        let lAvecIeRepeat = false;
        if (aNode.hasAttribute('ie-repeat')) {
          lAvecIeRepeat = true;
          if (
            !_traiterREPEAT(aNode, aNodeParent, aControleur, aContexte, lData)
          ) {
            return;
          }
        }
        lContexteCourant.data = lData;
        lContexteCourant.nodeName = lNodeName;
        if (aNode.hasAttribute('ie-if')) {
          if (
            !lAvecIeRepeat &&
            !_traiterIF(
              aNode,
              aNodeParent,
              aControleur,
              aContexte,
              lContexteCourant,
            )
          ) {
            return;
          }
        }
        _getModel(lContexteCourant);
        let lAvecTransformationNoeud = !!uBalises[lNodeName];
        let lNomBaliseTransform = lNodeName;
        if (!lAvecTransformationNoeud) {
          for (lNameAttribut in uBalises) {
            if (lNode.hasAttribute(lNameAttribut)) {
              lAvecTransformationNoeud = true;
              lNomBaliseTransform = lNameAttribut;
              lNode.removeAttribute(lNameAttribut);
              break;
            }
          }
        }
        if (lAvecTransformationNoeud) {
          lResultBalise = uBalises[lNomBaliseTransform](
            lContexteCourant,
            lOutils,
          );
          lAvecCompilFils =
            !lResultBalise || lResultBalise.avecCompileFils !== false;
          if (lResultBalise && lResultBalise.node) {
            lNode = lResultBalise.node;
            lContexteCourant.node = lNode;
            lNodeName = lNode.nodeName ? lNode.nodeName.toLowerCase() : '';
            lContexteCourant.nodeNameBefore = lContexteCourant.nodeName;
            lContexteCourant.nodeName = lNodeName;
          }
        }
        const lEstNodeInput = lNodeName === 'input';
        let lAttributType = '';
        if (lEstNodeInput) {
          lAttributType = (lNode.getAttribute('type') || '').toLowerCase();
        }
        if (
          lEstNodeInput &&
          (lAttributType === 'radio' || lAttributType === 'checkbox')
        ) {
          if (!lResultBalise || !lResultBalise.ignorerGererInputCB) {
            _gererInputCB(lContexteCourant, lAttributType);
          }
        } else if (
          lEstNodeInput ||
          lNodeName === 'textarea' ||
          _estNodeContentEditable(lNode)
        ) {
          if (!lResultBalise || !lResultBalise.ignorerInputText) {
            _gererInputText(lContexteCourant, lAttributType);
          }
        }
        if (lData && !$.isEmptyObject(lData)) {
          $(lNode).ieData(lData);
          if (lAvecAttributData) {
            if (lJSONDebugData) {
              lOutils.addCommentaireDebug(
                lNode,
                'ie-data="' + lJSONDebugData + '"',
              );
            }
            lNode.removeAttribute('ie-data');
          }
        }
        for (lNameAttribut in uAttributs) {
          if (lNode.hasAttribute(lNameAttribut)) {
            const lAttrValue = lNode.getAttribute(lNameAttribut);
            try {
              const lParametresCompile = {};
              lNode.removeAttribute(lNameAttribut);
              uAttributs[lNameAttribut](
                lContexteCourant,
                lNodeName,
                lAttrValue,
                lOutils,
                lParametresCompile,
                lNameAttribut,
              );
              if (lAvecCompilFils) {
                lAvecCompilFils = lParametresCompile.avecCompileFils !== false;
              }
            } catch (e) {}
          }
        }
        for (const lClass of Array.from(lNode.classList)) {
          if (uClassesCss[lClass]) {
            try {
              const lParametresCompile = {};
              uClassesCss[lClass](
                lContexteCourant,
                lNodeName,
                lOutils,
                lParametresCompile,
              );
              if (lAvecCompilFils) {
                lAvecCompilFils = lParametresCompile.avecCompileFils !== false;
              }
            } catch (e) {}
          }
        }
        _controleAccessibilite(lNode, lNodeName, lContexteCourant);
        if (
          lAvecCompilFils &&
          lNode.childNodes &&
          lNode.childNodes.length > 0
        ) {
          _compile(
            lNode.childNodes,
            lNode,
            aControleur,
            aContexte,
            aInvocateur,
            lProfondeur + 1,
          );
        }
        return lContexteCourant.node;
      }
    }
    function _controleAccessibilite(aNode, aNodeName, aContexteCourant) {
      var _a, _b;
      const lGetEstDansTiny = () =>
        !!aNode.closest(`.${Divers_css_1.StylesDivers.tinyView}`);
      if (
        aNodeName === 'i' &&
        !aNode.hasAttribute('role') &&
        (aNode.hasAttribute('aria-label') ||
          aNode.hasAttribute('aria-labelledby'))
      ) {
        aNode.setAttribute('role', 'img');
        if (!lGetEstDansTiny()) {
          IE.log.addLog(
            `Balise i avec aria-label/labelledby a role img manquant - ajouté automatiquement (a corriger) : ${aNode.outerHTML}`,
            null,
            IE.log.genre.Avertissement,
          );
        }
      }
      if (
        aNodeName === 'ul' &&
        !aNode.hasAttribute('role') &&
        !aNode.hasAttribute('tabindex') &&
        !aNode.classList.contains(Divers_css_1.StylesDivers.browserDefault)
      ) {
        _addCommentaireDebug(
          aNode,
          `(WAI) Controle si ul avec 1 fils li ou vide => role="presentation" sur ul et li`,
        );
        let lUlAvecRolePresentation = false;
        const lRefreshUL = () => {
          var _a;
          let lLiAvecTabInedx = false;
          const lTabLi = [];
          for (const lNode of _sliceNodes(aNode.childNodes)) {
            if (
              lNode.nodeType === 1 &&
              ((_a = lNode.nodeName) === null || _a === void 0
                ? void 0
                : _a.toLowerCase()) === 'li'
            ) {
              lTabLi.push(lNode);
              if (!lLiAvecTabInedx && lNode.hasAttribute('tabindex')) {
                lLiAvecTabInedx = true;
              }
            }
          }
          const lRolePresentationNew = !(lTabLi.length > 1) && !lLiAvecTabInedx;
          if (lUlAvecRolePresentation !== lRolePresentationNew) {
            lUlAvecRolePresentation = lRolePresentationNew;
            if (lRolePresentationNew) {
              aNode.setAttribute('role', 'presentation');
            } else {
              aNode.removeAttribute('role');
            }
            lTabLi.forEach((aNodeLI) => {
              if (lRolePresentationNew) {
                aNodeLI.setAttribute('role', 'presentation');
              } else {
                aNodeLI.removeAttribute('role');
              }
            });
          }
        };
        lRefreshUL();
        _abonnerRefresh(() => lRefreshUL(), aNode, aContexteCourant);
      }
    }
    function _compile(
      aNodeList,
      aNodeParent,
      aControleur,
      aContexte,
      aInvocateur,
      aProfondeur,
    ) {
      const lProfondeur = aProfondeur || 0;
      if (lProfondeur > 1000) {
        return;
      }
      const lChildNodes = _sliceNodes(aNodeList);
      let lNode;
      for (let i = 0; i < lChildNodes.length; i++) {
        lNode = lChildNodes[i];
        _compileNode(
          lNode,
          aNodeParent,
          aControleur,
          aContexte,
          aInvocateur,
          lProfondeur,
        );
      }
    }
    const IEHtml = {
      initControleur: _initControleur,
      addBalise(aBalise, aFonction) {
        aBalise = aBalise.toLowerCase();
        uBalises[aBalise] = aFonction;
        uNodeNames.push(aBalise);
      },
      addAttribut(aAttribut, aFonction) {
        aAttribut = aAttribut.toLowerCase();
        uAttributs[aAttribut] = aFonction;
        jsx_1.JSXDictionaryCallbacks.addAttrAllowed(aAttribut);
      },
      addClass(aClass, aFonction) {
        uClassesCss[aClass] = aFonction;
      },
      ieData(aObjet) {
        if (!aObjet) {
          return '';
        }
        const lChaine = ObjetJSON_1.ObjetJSON.toJSON(aObjet, {
          ignorerEntites: true,
        });
        if (!lChaine) {
          return '';
        }
        return ' ie-data="' + lChaine.replace(/"/g, '&quot;') + '" ';
      },
      async refresh(aForcerSynchrone) {
        if (aForcerSynchrone) {
          uInvocateur.evenement(C_id_event_iemodel);
          return;
        }
        if (uPromiseRefresh && !uPromiseRefresh._isFullfilled) {
          return uPromiseRefresh;
        }
        uPromiseRefresh = new Promise((aResolve) => {
          setTimeout(() => {
            uPromiseRefresh = null;
            uInvocateur.evenement(C_id_event_iemodel);
            aResolve();
          }, 0);
        });
        return uPromiseRefresh;
      },
      injectHTML(
        aElement,
        aHtml,
        aControleur,
        aIgnorerScroll,
        aInsererAvantNode,
        aAvecCommentaireConstructeur,
        aCommentaireHtmlDebug,
      ) {
        return _injectHTML({
          element: aElement,
          insererAvantLeNode: aInsererAvantNode,
          html: aHtml,
          controleur: aControleur,
          ignorerScroll: aIgnorerScroll,
          avecCommentaireConstructeur: aAvecCommentaireConstructeur !== false,
          commentaireHtmlDebug: aCommentaireHtmlDebug,
        });
      },
      injectHTMLParams: _injectHTML,
      empty(aNode) {
        if (aNode && aNode.getElementsByTagName) {
          $.cleanData(aNode.getElementsByTagName('*'));
        }
        while (aNode && aNode.firstChild) {
          aNode.removeChild(aNode.firstChild);
        }
      },
      outils: lOutils,
      collectionIdentite: {},
      C_eventsModifyCheckbox: 'IEChecked change input',
      C_eventsModifyInput: 'input change paste cut keydown keypress keyup',
      MAX_LENGTH_Default: 0,
      REGEXP_INDICATIF_TELEPHONE: /[^0-9]/gi,
      TAILLEMAX_INDICATIF_TELEPHONE: 3,
      REGEXP_TELEPHONE: /[^0-9]/gi,
      Styles: { debugWAIInputIgnoreAssert: 'd-wai-i' },
    };
    (_a = Object.assign({}, IEHtml)),
      (exports.initControleur = _a.initControleur),
      (exports.addBalise = _a.addBalise),
      (exports.addAttribut = _a.addAttribut),
      (exports.addClass = _a.addClass),
      (exports.ieData = _a.ieData),
      (exports.refresh = _a.refresh),
      (exports.injectHTML = _a.injectHTML),
      (exports.injectHTMLParams = _a.injectHTMLParams),
      (exports.empty = _a.empty),
      (exports.outils = _a.outils),
      (exports.collectionIdentite = _a.collectionIdentite),
      (exports.C_eventsModifyCheckbox = _a.C_eventsModifyCheckbox),
      (exports.C_eventsModifyInput = _a.C_eventsModifyInput),
      (exports.MAX_LENGTH_Default = _a.MAX_LENGTH_Default),
      (exports.REGEXP_INDICATIF_TELEPHONE = _a.REGEXP_INDICATIF_TELEPHONE),
      (exports.TAILLEMAX_INDICATIF_TELEPHONE =
        _a.TAILLEMAX_INDICATIF_TELEPHONE),
      (exports.REGEXP_TELEPHONE = _a.REGEXP_TELEPHONE),
      (exports.Styles = _a.Styles);
    exports.default = IEHtml;
    const uFuncDate = { formatDate: null, parseHeureMinute: null };
    const setObjetDate = function (aFormatDate, aParseHeureMinute) {
      uFuncDate.formatDate = aFormatDate;
      uFuncDate.parseHeureMinute = aParseHeureMinute;
    };
    exports.setObjetDate = setObjetDate;
    $.fn.extend({
      ieHtml(aHtml, aParametres) {
        const lParametres = {
          html: aHtml,
          ignorerScroll: false,
          controleur: null,
          instance: null,
          sansCompile: false,
          avecCommentaireConstructeur: true,
          commentaireHtmlDebug: '',
        };
        Object.assign(lParametres, aParametres);
        return this.empty().each(function () {
          if (lParametres.sansCompile) {
            this.innerHTML = aHtml;
          } else {
            while (this && this.firstChild) {
              this.removeChild(this.firstChild);
            }
            IEHtml.injectHTMLParams(
              Object.assign({ element: this }, lParametres),
            );
          }
        });
      },
    });
    $.fn.extend({
      ieHtmlAppend(aHtml, aParametres) {
        const lParametres = {
          ignorerScroll: false,
          controleur: null,
          sansCompile: false,
        };
        Object.assign(lParametres, aParametres);
        return this.each(function () {
          if (lParametres.sansCompile) {
            this.innerHTML += aHtml;
          } else {
            IEHtml.injectHTMLParams(
              Object.assign({ element: this, html: aHtml }, lParametres),
            );
          }
        });
      },
    });
    $.fn.extend({
      ieData(aData) {
        if (arguments.length > 0) {
          return this.each(function () {
            $(this).data('ieData', aData);
          });
        }
        return $(this).data('ieData');
      },
    });
    (function ($) {
      let u_SurEventMouse_0x0 = false;
      let u_timer_SurEventMouse_0x0;
      const u_estEventEn0x0 = function (aEvent) {
        return (
          (aEvent.pageX === 0 && aEvent.pageY === 0) ||
          (aEvent.clientX === 0 && aEvent.clientY === 0)
        );
      };
      const lUpdateMouseUp = function (aEvent) {
        u_SurEventMouse_0x0 = false;
        if (u_timer_SurEventMouse_0x0) {
          clearTimeout(u_timer_SurEventMouse_0x0);
          u_timer_SurEventMouse_0x0 = null;
        }
        if (u_estEventEn0x0(aEvent)) {
          u_SurEventMouse_0x0 = true;
          u_timer_SurEventMouse_0x0 = setTimeout(() => {
            u_SurEventMouse_0x0 = false;
            u_timer_SurEventMouse_0x0 = null;
          }, 100);
        }
      };
      $.fn.extend({
        eventValidation(aCallback, aKeepExistingEvent) {
          return this.each(function () {
            if (!aKeepExistingEvent) {
              $(this).off('.eventValidation');
            }
            $(this).on({
              'mouseup.eventValidation': function (aEvent) {
                lUpdateMouseUp(aEvent);
              },
              'click.eventValidation': function (aEvent) {
                if (!u_SurEventMouse_0x0 && u_estEventEn0x0(aEvent)) {
                  return;
                }
                u_SurEventMouse_0x0 = false;
                return aCallback.call(this, aEvent);
              },
              'keyup.eventValidation': function (aEvent) {
                if (
                  aEvent.which === ToucheClavier_1.ToucheClavier.Espace ||
                  aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot
                ) {
                  return aCallback.call(this, aEvent);
                }
              },
            });
          });
        },
      });
      $.event.special.validation = {
        setup() {
          const lJNode = $(this);
          lJNode.on({
            'mouseup.validation': function (aEvent) {
              lUpdateMouseUp(aEvent);
            },
            'click.validation': function (aEvent) {
              if (!u_SurEventMouse_0x0 && u_estEventEn0x0(aEvent)) {
                return;
              }
              u_SurEventMouse_0x0 = false;
              const lEventSimule = $.Event(
                'validation',
                Object.assign(aEvent, {
                  type: 'validation',
                  typeOrigine: aEvent.type,
                  originalEvent: aEvent.originalEvent,
                }),
              );
              return lJNode.trigger(lEventSimule);
            },
            'keyup.validation': function (aEvent) {
              if (
                aEvent.which === ToucheClavier_1.ToucheClavier.Espace ||
                aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot
              ) {
                const lEventSimule = $.Event(
                  'validation',
                  Object.assign(aEvent, {
                    type: 'validation',
                    typeOrigine: aEvent.type,
                    originalEvent: aEvent.originalEvent,
                  }),
                );
                return lJNode.trigger(lEventSimule);
              }
            },
          });
        },
        teardown() {
          $(this).off('mouseup.validation click.validation keyup.validation');
        },
      };
    })(jQuery);
    Invocateur_1.Invocateur.abonner(
      Invocateur_1.ObjetInvocateur.events.refreshIEHtml,
      (aForcerSynchrone = true) => {
        IEHtml.refresh(aForcerSynchrone);
      },
    );
  },
  fn: 'iehtml.js',
});