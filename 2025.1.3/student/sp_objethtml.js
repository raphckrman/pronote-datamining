IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GHtml = exports.ObjetHtml = void 0;
    require('Divers');
    const MethodesObjet_1 = require('MethodesObjet');
    const IEHtml = require('IEHtml');
    const tag_1 = require('tag');
    const ObjetChaine_1 = require('ObjetChaine');
    const cTagsFocusables = [
      'audio',
      'button:not(:disabled)',
      'canvas:not(:disabled)',
      'details',
      'iframe',
      'input:not(:disabled)',
      'select:not(:disabled)',
      'summary',
      'textarea:not(:disabled)',
      'video',
    ];
    const cAttributsFocusables = [
      'accesskey',
      'contenteditable',
      'href',
      'tabindex',
    ];
    const cSelectorFocusables = `${cTagsFocusables.join(', ')}, ${cAttributsFocusables.map((a) => `[${a}]`).join(', ')}`;
    class ObjetHtml {
      elementExiste(aElement) {
        return !!this.getElement(aElement);
      }
      estElement(aElement) {
        return !!aElement && aElement.nodeType === 1;
      }
      estDocument(aElement) {
        return !!aElement && aElement.nodeType === 9;
      }
      estNoeudDeType(aElement, aTypeParent) {
        const lElement = this.getElement(aElement);
        return (
          this.estElement(lElement) &&
          lElement.nodeName.toUpperCase() === aTypeParent.toUpperCase()
        );
      }
      viderNode(aNode) {
        return IEHtml.empty(aNode);
      }
      getParent(aElement) {
        const lElement = this.getElement(aElement);
        if (this.estElement(lElement)) {
          if (lElement.parentElement) {
            return lElement.parentElement;
          }
          if (lElement.parentNode) {
            return lElement.parentNode;
          }
        }
        return null;
      }
      getParentOverflowNonVisible(aId) {
        const lParent = this.getParent(aId);
        if (lParent && lParent !== document.body) {
          try {
            if (
              global
                .getComputedStyle(lParent)
                .getPropertyValue('overflow-y') !== 'visible'
            ) {
              return lParent;
            }
          } catch (e) {
            return document.body;
          }
          return this.getParentOverflowNonVisible(lParent);
        }
        return document.body;
      }
      getParentScrollable(aId) {
        let lElement = this.getElement(aId);
        try {
          while (lElement) {
            if (lElement === document.documentElement) {
              return lElement;
            }
            let lAvecScroll = lElement.scrollTop > 0;
            if (!lAvecScroll) {
              const lOverflow = global
                .getComputedStyle(lElement)
                .getPropertyValue('overflow');
              lAvecScroll = lOverflow === 'auto' || lOverflow === 'scroll';
            }
            if (lAvecScroll) {
              return lElement;
            }
            lElement = this.getParent(lElement);
          }
        } catch (e) {}
        return null;
      }
      htmlToDOM(aHtml) {
        let lFrag = document.createDocumentFragment();
        let lDiv = document.createElement('div');
        let lNoeudDOM;
        lFrag.appendChild(lDiv);
        lDiv.insertAdjacentHTML('afterbegin', aHtml);
        if (lDiv.childNodes.length > 1) {
          lNoeudDOM = Array.from(lDiv.childNodes);
        } else {
          lNoeudDOM = lDiv.firstChild;
        }
        this.viderNode(lDiv);
        lDiv = null;
        lFrag = null;
        return lNoeudDOM;
      }
      insererElementDOM(aElementPere, aElement, aInsererEnPremier) {
        if (this.estElement(aElement) && this.estElement(aElementPere)) {
          if (aInsererEnPremier && aElementPere.firstChild) {
            aElementPere.insertBefore(aElement, aElementPere.firstChild);
          } else {
            aElementPere.appendChild(aElement);
          }
        }
      }
      addHtml(aId, aHtml, aParametres) {
        const lElement = this.getElement(aId);
        if (this.elementExiste(lElement) && lElement.appendChild) {
          const lParametres = Object.assign({}, aParametres);
          if (lParametres.instance && lParametres.instance.controleur) {
            lParametres.controleur = lParametres.instance.controleur;
          }
          if (lParametres.sansCompile) {
            lElement.insertAdjacentHTML('beforeend', aHtml);
          } else {
            IEHtml.injectHTML(
              lElement,
              aHtml,
              lParametres.controleur,
              lParametres.ignorerScroll,
              null,
              false,
            );
          }
        }
      }
      supprimerElementDOM(aId) {
        const lElement = this.getElement(aId);
        if (lElement) {
          $(lElement).remove();
        }
      }
      getElement(aId) {
        if (!aId) {
          return null;
        }
        if (typeof aId === 'string') {
          return document.getElementById(aId);
        }
        if (this.estElement(aId) || this.estDocument(aId)) {
          return aId;
        }
        return null;
      }
      getHtml(aId) {
        const E = this.getElement(aId);
        if (E) {
          return E.innerHTML;
        }
        return '';
      }
      getValue(aId) {
        const E = this.getElement(aId);
        if (E) {
          return ObjetChaine_1.GChaine.ajouterEntites(E.value);
        }
        return '';
      }
      estTextNode(aElement) {
        return aElement && aElement.nodeType === 3;
      }
      getTextesDeNode(aId) {
        let lResult = [];
        try {
          if (aId instanceof Node && this.estTextNode(aId)) {
            lResult.push(aId.nodeValue);
          } else if (
            aId instanceof Node ||
            MethodesObjet_1.MethodesObjet.isString(aId)
          ) {
            const lElement = this.getElement(aId);
            if (this.estTextNode(lElement)) {
              lResult.push(lElement.nodeValue);
            } else if (this.estElement(lElement) && lElement.childNodes) {
              for (let i = 0; i < lElement.childNodes.length; i++) {
                lResult = lResult.concat(
                  this.getTextesDeNode(lElement.childNodes[i]),
                );
              }
            }
          }
        } catch (e) {
          IE.log.addLog(
            'erreur getTextesDeNode : ' + e,
            null,
            IE.log.genre.Erreur,
          );
        }
        return lResult;
      }
      getClass(aId) {
        const E = this.getElement(aId);
        return E && E.className ? E.className : '';
      }
      addClass(aId, aClass) {
        this.modifierClass(aId, null, aClass);
      }
      delClass(aId, aClass) {
        this.modifierClass(aId, aClass, null);
      }
      modifierClass(aId, aClassSuppression, aClasseAjout) {
        if ((!aClassSuppression && !aClasseAjout) || !this.elementExiste(aId)) {
          return;
        }
        const lJElement =
          typeof aId === 'string' ? $('#' + aId.escapeJQ()) : $(aId);
        if (aClassSuppression) {
          lJElement.removeClass(aClassSuppression);
        }
        if (aClasseAjout) {
          lJElement.addClass(aClasseAjout);
        }
      }
      getClosestFocusable(aId) {
        const lNode = this.getElement(aId);
        if (lNode && lNode.closest) {
          let lNodeCB = lNode.closest('.iecb');
          if (lNodeCB) {
            return lNodeCB.querySelector('input');
          }
          return lNode.closest(cSelectorFocusables);
        }
        return null;
      }
      getClosestInteractive(aId) {
        const lNode = this.getElement(aId);
        if (lNode && lNode.closest) {
          let lNodeCB = lNode.closest('.iecb');
          if (lNodeCB) {
            return lNodeCB.querySelector('input');
          }
          return lNode.closest(cTagsFocusables.concat('a[href]').join(', '));
        }
        return null;
      }
      getElementsFocusablesDElement(aNode, aOptions) {
        const lNode = this.getElement(aNode);
        const lTab = [];
        if (lNode && lNode.querySelectorAll) {
          const lOptions = Object.assign(
            {
              ignoreAriaHidden: true,
              ignoreRolePresentation: true,
              avecTabindexNegatif: true,
            },
            aOptions,
          );
          const lNodes = lNode.querySelectorAll(cSelectorFocusables);
          if (lNodes) {
            Array.from(lNodes).forEach((lNode) => {
              if (lOptions.ignoreAriaHidden && lNode.closest('[aria-hidden]')) {
                return;
              }
              if (
                lOptions.ignoreRolePresentation &&
                ['presentation', 'none'].includes(lNode.role)
              ) {
                return;
              }
              if (
                !lOptions.avecTabindexNegatif &&
                lNode.getAttribute('tabindex') === '-1'
              ) {
                return;
              }
              lTab.push(lNode);
            });
          }
        }
        return lTab;
      }
      getDisplay(aId) {
        const E = this.getElement(aId);
        if (E) {
          if (E.style && E.style.display === 'none') {
            return false;
          } else if (!E.parentNode) {
            return true;
          } else {
            return this.getDisplay(E.parentNode);
          }
        }
        return false;
      }
      extraireNombreDId(aId, aIndiceAvant, aSeparateur) {
        let lOptions,
          T,
          lResult,
          lId = aId;
        if (!MethodesObjet_1.MethodesObjet.isString(lId)) {
          if (this.estElement(lId) && lId.id) {
            lId = lId.id;
          } else {
            return null;
          }
        }
        lOptions = {
          separateur: aSeparateur || '_',
          indiceAvant: aIndiceAvant || 0,
        };
        T = lId.split(lOptions.separateur);
        lResult = parseInt(
          T[Math.max(0, T.length - 1 - lOptions.indiceAvant)],
          10,
        );
        return MethodesObjet_1.MethodesObjet.isNumber(lResult) ? lResult : null;
      }
      getCheckBox(aId) {
        const E = this.getElement(aId);
        if (E) {
          return !!E.checked;
        }
        return false;
      }
      getElementEnFocus() {
        try {
          return document.activeElement;
        } catch (e) {
          return null;
        }
      }
      focusEstDansElement(aId) {
        const lElement = this.getElement(aId);
        if (this.estElement(lElement)) {
          const lElementFocus = this.getElementEnFocus();
          if (lElementFocus) {
            return (
              lElement === lElementFocus || $.contains(lElement, lElementFocus)
            );
          }
        }
        return false;
      }
      setClass(aId, aClass) {
        const E = this.getElement(aId);
        if (E) {
          E.className = aClass;
        }
      }
      setHtml(aId, aHtml, aIgnorerScroll) {
        const E = this.getElement(aId);
        if (E) {
          const lParametres = Object.assign({}, aIgnorerScroll);
          if (aIgnorerScroll === true) {
            lParametres.ignorerScroll = true;
          }
          if (lParametres.instance && lParametres.instance.controleur) {
            lParametres.controleur = lParametres.instance.controleur;
          }
          if (
            $.fn.ieHtml &&
            (!lParametres.instance || !lParametres.instance.IGNORER_IEHTML)
          ) {
            $(E).ieHtml(aHtml, lParametres);
          } else {
            if (E.getElementsByTagName) {
              $.cleanData(E.getElementsByTagName('*'));
            }
            E.innerHTML = aHtml;
            if (aIgnorerScroll !== true) {
              const lOverflow = $(E).css('overflow');
              if (lOverflow === 'auto' || lOverflow === 'scroll') {
                E.scrollLeft = 0;
                E.scrollTop = 0;
              }
            }
          }
        }
      }
      setTitle(aId, aTitle) {
        const E = this.getElement(aId);
        if (E) {
          E.title = _valeurToProp(aTitle);
        }
      }
      setValue(aId, aValue) {
        const E = this.getElement(aId);
        if (E) {
          E.value = _valeurToProp(aValue);
        }
      }
      setDisabled(aId, aDisabled) {
        const E = this.getElement(aId);
        if (E) {
          $(E).inputDisabled(aDisabled);
        }
      }
      setAvecMain(aId, aDisabled) {
        const E = this.getElement(aId);
        if (E) {
          $(E).toggleClass('AvecMain', !aDisabled);
        }
      }
      setDisplay(aId, aVisible, aSpeed) {
        const E = this.getElement(aId);
        if (E) {
          if (aVisible) {
            $(E).show(aSpeed);
          } else {
            $(E).hide(aSpeed);
          }
        }
      }
      setFocus(aId, aFocus, aAvecDecalage) {
        function _focus(aHtml, aElement) {
          if (!aHtml.elementExiste(aElement)) {
            return;
          }
          try {
            if (aFocus || aFocus === null || aFocus === undefined) {
              aElement.focus();
            } else {
              aElement.blur();
            }
          } catch (e) {
            IE.log.addLog(
              'Erreur ObjetHtml.setFocus : ' +
                e.toString() +
                ' ((fv) remarqué uniquement sur IE avec un delai)',
            );
          }
        }
        if (this.elementExiste(aId)) {
          try {
            if (this.getDisplay(aId)) {
              const lElement = this.getElement(aId);
              if (lElement) {
                let lAvecDecalage = aAvecDecalage,
                  lDecalage = 200;
                if (
                  MethodesObjet_1.MethodesObjet.isNumber(aAvecDecalage) &&
                  aAvecDecalage >= 0
                ) {
                  lAvecDecalage = true;
                  lDecalage = aAvecDecalage;
                }
                if (lAvecDecalage) {
                  setTimeout(_focus.bind(null, this, lElement), lDecalage);
                } else {
                  _focus(this, lElement);
                }
              }
            }
          } catch (e) {}
        }
      }
      setFocusEdit(aId) {
        if (this.elementExiste(aId)) {
          try {
            if (this.getDisplay(aId)) {
              const E = this.getElement(aId);
              if (E) {
                E.focus();
                E.value = E.value;
              }
            }
          } catch (e) {}
        }
      }
      setCursorAtEnd(aId) {
        try {
          const E = this.getElement(aId);
          if (E && E.value !== undefined) {
            const end = E.value.length;
            this.setSelectionEdit(E, end, end);
          }
        } catch (e) {}
      }
      setSelection(aId, aSelection) {
        const E = this.getElement(aId);
        if (E) {
          E.selectedIndex = aSelection;
        }
      }
      setSelectionEdit(aId, aBegin, aEnd) {
        if (this.elementExiste(aId)) {
          try {
            if (this.getDisplay(aId)) {
              const E = this.getElement(aId);
              if (E) {
                const begin = MethodesObjet_1.MethodesObjet.isNumber(aBegin)
                  ? aBegin
                  : 0;
                const end = MethodesObjet_1.MethodesObjet.isNumber(aEnd)
                  ? aEnd
                  : E.value.length;
                if (E.setSelectionRange) {
                  E.setSelectionRange(begin, end);
                } else if (E.createTextRange) {
                  const range = E.createTextRange();
                  range.collapse(true);
                  range.moveEnd('character', end);
                  range.moveStart('character', begin);
                  range.select();
                }
              }
            }
          } catch (e) {}
        }
      }
      setImage(aId, aSrc) {
        const E = this.getElement(aId);
        if (E) {
          E.src = aSrc;
        }
      }
      setAlt(aId, aValue) {
        const E = this.getElement(aId);
        if (E) {
          E.alt = aValue;
        }
      }
      setTexte(aId, aTexte) {
        const E = this.getElement(aId);
        if (E) {
          this.viderNode(E);
          E.appendChild(document.createTextNode(aTexte));
        }
      }
      composeBlanc() {
        return '<span style="font-size : 1px">&nbsp;</span>';
      }
      setCheckBox(aId, aValue) {
        if (aValue === undefined) {
          aValue = false;
        }
        const E = this.getElement(aId);
        if (E) {
          $(E).inputChecked(aValue);
        }
      }
      setLien(aId, aValue) {
        const E = this.getElement(aId);
        if (E && E.tagName.toUpperCase() === 'A') {
          E.href = aValue;
        }
      }
      setTabIndex(aId, aTabIndex) {
        const E = this.getElement(aId);
        if (E) {
          E.tabIndex = aTabIndex;
        }
      }
      toArg(aArgs) {
        return tag_1.tag.toArg(aArgs);
      }
      composeAttr(aAttribut, aValue, ...aArgs) {
        return tag_1.tag.composeAttr(aAttribut, aValue, ...aArgs);
      }
      deselectionTexte() {
        try {
          if (
            window.getSelection &&
            window.getSelection() &&
            window.getSelection().removeAllRanges
          ) {
            window.getSelection().removeAllRanges();
          }
        } catch (e) {}
      }
      nettoyerEditeurRiche(aJNode, aEditeurEquationMaxFileSize) {
        let lResult = false;
        if (aJNode && aJNode.find && aJNode.length > 0) {
          aJNode.find('img').each((index, ele) => {
            const lSrc = $(ele).attr('src');
            if ($(ele).attr('data-latex')) {
              if (lSrc && lSrc.length > (aEditeurEquationMaxFileSize || 4096)) {
                $(ele).remove();
                lResult = true;
              }
            } else if (
              lSrc &&
              (lSrc.search('data') > -1 || lSrc.startsWith('blob'))
            ) {
              $(ele).remove();
              lResult = true;
            }
          });
        }
        return lResult;
      }
      composeFondAucuneDonnee(aHtml) {
        return (
          '<div style="width:1px;height:1px;"></div><div class="message-vide card card-nodata"><div class="card-content">' +
          aHtml +
          '</div><div class="Image_No_Data" aria-hidden="true"></div></div>'
        );
      }
    }
    exports.ObjetHtml = ObjetHtml;
    function _valeurToProp(aValeur) {
      if (aValeur === null || aValeur === undefined) {
        return '';
      }
      if (MethodesObjet_1.MethodesObjet.isString(aValeur)) {
        return ObjetChaine_1.GChaine.enleverEntites(aValeur);
      }
      if (MethodesObjet_1.MethodesObjet.isNumber(aValeur)) {
        return aValeur + '';
      }
      return aValeur;
    }
    const GHtml = new ObjetHtml();
    exports.GHtml = GHtml;
  },
  fn: 'objethtml.js',
});