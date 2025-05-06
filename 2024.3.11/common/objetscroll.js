IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetScroll =
      exports.EGenreScrollEvenement =
      exports.EGenreScroll =
        void 0;
    require('ObjetScroll.css');
    const Callback_1 = require('Callback');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetStyle_1 = require('ObjetStyle');
    var EGenreScroll;
    (function (EGenreScroll) {
      EGenreScroll[(EGenreScroll['Vertical'] = 0)] = 'Vertical';
      EGenreScroll[(EGenreScroll['Horizontal'] = 1)] = 'Horizontal';
    })(EGenreScroll || (exports.EGenreScroll = EGenreScroll = {}));
    var EGenreScrollEvenement;
    (function (EGenreScrollEvenement) {
      EGenreScrollEvenement[(EGenreScrollEvenement['Deplacement'] = 0)] =
        'Deplacement';
      EGenreScrollEvenement[(EGenreScrollEvenement['TailleZone'] = 1)] =
        'TailleZone';
      EGenreScrollEvenement[(EGenreScrollEvenement['TailleContenu'] = 2)] =
        'TailleContenu';
      EGenreScrollEvenement[(EGenreScrollEvenement['TailleScroll'] = 3)] =
        'TailleScroll';
    })(
      EGenreScrollEvenement ||
        (exports.EGenreScrollEvenement = EGenreScrollEvenement = {}),
    );
    class ObjetScroll extends ObjetIdentite_1.Identite {
      constructor(aNom, aIdent, aPere, aEvenement, aGenre, aEvenementDecalage) {
        super(aNom, aIdent, aPere, aEvenement);
        if (typeof aNom === 'string') {
          this.Genre = aGenre;
        } else {
          this.Genre = aNom.genre;
        }
        this.Largeur = GNavigateur.getLargeurBarreDeScroll();
        this.tailleScrollPersonnalisee = false;
        this.tailleMin = 22;
        this.avecScrollEnTactile = false;
        this.Position = 0;
        this.nbLigneScroll = 2;
        this.pas = 0;
        this.callBackDecalage = new Callback_1.Callback(
          aPere,
          aEvenementDecalage,
        );
        this.zonesSansScrollTouch = [];
        this.styleSheetDisabled = ObjetStyle_1.GStyle.styleSheetDisabled();
      }
      getLargeur() {
        return this.Largeur;
      }
      setDonnees(...aParams) {
        let lElement;
        this.Position = 0;
        this.Zones = [];
        for (let I = 0; I < aParams.length; I++) {
          if (ObjetHtml_1.GHtml.elementExiste(this.getIdZone(aParams[I]))) {
            this.Zones.push(aParams[I]);
          }
        }
        if (this.Zones.length === 0) {
          if (aParams.length > 0) {
            return;
          } else {
            this.Zones.push(0);
          }
        }
        this.TailleZone = this.callback.appel(EGenreScrollEvenement.TailleZone);
        this.TailleContenu = this._getTailleContenu();
        if (
          !this.TailleZone ||
          this.styleSheetDisabled ||
          (global.GNavigateur &&
            GNavigateur.isLayoutTactile &&
            !this.avecScrollEnTactile &&
            (this.TailleContenu < this.TailleZone ||
              this.TailleContenu > this.TailleZone))
        ) {
          this.TailleZone = this.TailleContenu;
        }
        this.TailleZone = Math.min(this.TailleZone, this.TailleContenu);
        this.TailleZone = Math.max(this.TailleZone, 0);
        this.TailleContenu = Math.max(this.TailleContenu, 0);
        this.tailleScroll = this.TailleZone;
        if (this.tailleScrollPersonnalisee) {
          this.tailleScroll = Math.max(
            0,
            this.callback.appel(
              EGenreScrollEvenement.TailleScroll,
              this.TailleZone,
            ) || this.TailleZone,
          );
        }
        for (let I = 0; I < this.Zones.length; I++) {
          this.setTaille(this.getIdZone(this.Zones[I]), this.TailleZone);
        }
        this.Zones.forEach((aVal) => {
          $('#' + this.getIdZone(aVal).escapeJQ()).off(
            this.Genre === EGenreScroll.Vertical
              ? 'scroll.ObjetScrollV wheel.ObjetScrollV touchmove.ObjetScrollV pointermove.ObjetScrollV pointerdown.ObjetScrollV pointermove.ObjetScrollV'
              : 'scroll.ObjetScrollH wheel.ObjetScrollH touchmove.ObjetScrollH pointermove.ObjetScrollH pointerdown.ObjetScrollH pointermove.ObjetScrollH',
          );
        });
        if (this.TailleContenu > this.TailleZone) {
          if (this.pas === 0) {
            while (
              this.callback.appel(
                EGenreScrollEvenement.Deplacement,
                ++this.pas,
              ) === 0 &&
              this.pas < this.TailleContenu
            ) {
              continue;
            }
          }
          if (this.pas < 3) {
            this.pas = this.callback.appel(
              EGenreScrollEvenement.Deplacement,
              this.pas,
            );
          }
          ObjetHtml_1.GHtml.setHtml(this.getIdScroll(), this.compose(), {
            instance: this,
          });
          this._avecScrollConstruit = true;
          if (this.Genre === EGenreScroll.Vertical) {
            for (let I = 0; I < this.Zones.length; I++) {
              $('#' + this.getIdZone(this.Zones[I]).escapeJQ())
                .on(
                  'scroll.ObjetScrollV',
                  { instance: this, genre: this.Zones[I] },
                  (aEvent) => {
                    aEvent.data.instance.actualiser(aEvent.data.genre);
                  },
                )
                .on(
                  'wheel.ObjetScrollV',
                  { aObjet: this },
                  this.surMouseWheelV,
                );
              if (
                this._estTactile() &&
                this.zonesSansScrollTouch.indexOf(this.Zones[I]) === -1
              ) {
                $('#' + this.getIdZone(this.Zones[I]).escapeJQ()).on(
                  {
                    'pointerdown.ObjetScrollV': this.surPointerDownV,
                    'pointermove.ObjetScrollV': this.surPointerMoveV,
                    'touchmove.ObjetScrollV': this.surTouchMoveV,
                  },
                  { aObjet: this },
                );
              }
            }
          } else {
            for (let I = 0; I < this.Zones.length; I++) {
              $('#' + this.getIdZone(this.Zones[I]).escapeJQ())
                .on(
                  'scroll.ObjetScrollH',
                  { instance: this, genre: this.Zones[I] },
                  (aEvent) => {
                    aEvent.data.instance.actualiser(aEvent.data.genre);
                  },
                )
                .on(
                  'wheel.ObjetScrollH',
                  { aObjet: this },
                  this.surMouseWheelH,
                );
              if (
                this._estTactile() &&
                this.zonesSansScrollTouch.indexOf(this.Zones[I]) === -1
              ) {
                $('#' + this.getIdZone(this.Zones[I]).escapeJQ()).on(
                  {
                    'pointerdown.ObjetScrollH': this.surPointerDownH,
                    'pointermove.ObjetScrollH': this.surPointerMoveH,
                    'touchmove.ObjetScrollH': this.surTouchMoveH,
                  },
                  { aObjet: this },
                );
              }
            }
          }
        } else {
          if (this._avecScrollConstruit) {
            this._avecScrollConstruit = false;
            ObjetHtml_1.GHtml.setHtml(this.getIdScroll(), '');
          }
        }
        for (let I = 0; I < this.Zones.length; I++) {
          lElement = ObjetHtml_1.GHtml.getElement(
            this.getIdZone(this.Zones[I]),
          );
          if (lElement && lElement.style) {
            lElement.style.position = 'relative';
            lElement.style.boxSizing = 'content-box';
          }
        }
      }
      avecScrollVisible() {
        return this._avecScrollConstruit;
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getNodeScroll: function () {
            $(this.node).on('scroll', function () {
              const _getPosition = () => {
                return Math.round(
                  aInstance.Genre === EGenreScroll.Horizontal
                    ? this.scrollLeft
                    : this.scrollTop,
                );
              };
              if (!aInstance._tickingScroll) {
                if (window.requestAnimationFrame) {
                  window.requestAnimationFrame(() => {
                    aInstance.evenementSurScroll(_getPosition());
                    delete aInstance._tickingScroll;
                  });
                } else {
                  aInstance.evenementSurScroll(_getPosition());
                }
              }
              aInstance._tickingScroll = true;
            });
          },
        });
      }
      compose() {
        let LStyleScroll, LStyleContenu;
        const lTailleZone = this.tailleScroll,
          lTailleContenu = this._getTailleScrollDeTailleContenu(
            this.TailleContenu,
          );
        if (this.Genre === EGenreScroll.Horizontal) {
          LStyleScroll =
            'width:' +
            lTailleZone +
            'px; height:' +
            this.Largeur +
            'px; min-width:' +
            this.tailleMin +
            'px;';
          LStyleContenu =
            'width:' + lTailleContenu + 'px; height:' + this.Largeur + 'px;';
        } else {
          LStyleScroll =
            'height:' +
            lTailleZone +
            'px; width:' +
            this.Largeur +
            'px; min-height:' +
            this.tailleMin +
            'px;';
          LStyleContenu =
            'height:' + lTailleContenu + 'px; width:' + this.Largeur + 'px;';
        }
        return IE.jsx.str(
          'div',
          { class: 'ObjetScroll', style: LStyleScroll, role: 'presentation' },
          IE.jsx.str(
            'div',
            {
              id: this.Nom,
              'ie-node': 'getNodeScroll',
              class: [
                this.Genre === EGenreScroll.Horizontal
                  ? 'horizontal'
                  : 'vertical',
              ],
              style: LStyleScroll,
              tabindex: '-1',
              role: 'presentation',
            },
            IE.jsx.str('div', {
              class: 'real-scroll',
              style: LStyleContenu,
              role: 'presentation',
            }),
          ),
        );
      }
      vider() {
        ObjetHtml_1.GHtml.setDisplay(this.getIdScroll(), false);
      }
      evenementSurScroll(APosition) {
        if (MethodesObjet_1.MethodesObjet.isNumber(APosition)) {
          APosition = Math.round(APosition);
        }
        const LPosition = this.callback.appel(
          EGenreScrollEvenement.Deplacement,
          APosition === null || APosition === undefined
            ? this.getPosition()
            : this._getTailleContenuDeTailleScroll(APosition),
        );
        for (let I = 0; I < this.Zones.length; I++) {
          const lIdZone = this.getIdZone(this.Zones[I]);
          if (LPosition !== this.getPosition(lIdZone)) {
            this.setPosition(lIdZone, LPosition);
          }
        }
        this.callBackDecalage.appel(this.Position - LPosition);
        if (this.Position !== LPosition) {
          this.setPosition(this.Nom, LPosition);
        }
      }
      actualiser(I) {
        this.setPosition(this.Nom, this.getPosition(this.getIdZone(I)));
      }
      surModificationHeightContenu() {
        if (
          this.Genre === EGenreScroll.Horizontal ||
          !this.avecScrollVisible()
        ) {
          return false;
        }
        const lOldTailleContenu = this.TailleContenu;
        const lNewTailleContenu = this._getTailleContenu();
        if (lOldTailleContenu === lNewTailleContenu) {
          return true;
        }
        if (lNewTailleContenu <= this.TailleZone) {
          return false;
        }
        this.TailleContenu = lNewTailleContenu;
        const lTailleContenu = this._getTailleScrollDeTailleContenu(
          this.TailleContenu,
        );
        const lJScroll = $(`#${this.Nom.escapeJQ()}`);
        lJScroll.find('>.real-scroll').css('height', `${lTailleContenu}px`);
        return true;
      }
      _getTailleContenu() {
        let lResult = this.callback.appel(EGenreScrollEvenement.TailleContenu);
        if (!lResult || !MethodesObjet_1.MethodesObjet.isNumber(lResult)) {
          lResult = this.getTaille(this.getIdContenu(this.Zones[0]));
        }
        return lResult;
      }
      getPosition(aId) {
        const lNom = aId || this.Nom;
        const lElement = ObjetHtml_1.GHtml.getElement(lNom);
        let lPosition = 0;
        if (lElement) {
          lPosition =
            this.Genre === EGenreScroll.Horizontal
              ? lElement.scrollLeft
              : lElement.scrollTop;
          if (lNom === this.Nom) {
            lPosition = this._getTailleContenuDeTailleScroll(lPosition);
          }
        }
        return lPosition;
      }
      setPosition(ANom, APosition) {
        if (!MethodesObjet_1.MethodesObjet.isNumeric(APosition)) {
          return false;
        }
        this.Position = APosition;
        const lElement = ObjetHtml_1.GHtml.getElement(ANom);
        if (!lElement) {
          return;
        }
        if (ANom === this.Nom) {
          const lPositionScroll =
            this._getTailleScrollDeTailleContenu(APosition);
          if (this.Genre === EGenreScroll.Horizontal) {
            lElement.scrollLeft = lPositionScroll;
          } else {
            lElement.scrollTop = lPositionScroll;
          }
        } else {
          if (this.Genre === EGenreScroll.Horizontal) {
            lElement.scrollLeft = APosition;
          } else {
            lElement.scrollTop = APosition;
          }
        }
      }
      getTaille(ANom) {
        return this.Genre === EGenreScroll.Horizontal
          ? ObjetPosition_1.GPosition.getWidth(ANom)
          : ObjetPosition_1.GPosition.getHeight(ANom);
      }
      setTaille(ANom, ATaille) {
        return this.Genre === EGenreScroll.Horizontal
          ? ObjetPosition_1.GPosition.setWidth(ANom, ATaille)
          : ObjetPosition_1.GPosition.setHeight(ANom, ATaille);
      }
      getIdScroll() {
        return this.Nom + '_Scroll';
      }
      getIdZone(I) {
        let lNomPere = '';
        if (this.Pere && 'getNom' in this.Pere) {
          lNomPere = this.Pere.getNom();
        } else if (this.Pere) {
          lNomPere = this.Pere.Nom;
        }
        return lNomPere + '_Zone_' + (I === null || I === undefined ? 0 : I);
      }
      getIdContenu(I) {
        let lNomPere = '';
        if (this.Pere && 'getNom' in this.Pere) {
          lNomPere = this.Pere.getNom();
        } else if (this.Pere) {
          lNomPere = this.Pere.Nom;
        }
        return lNomPere + '_Contenu_' + (I === null || I === undefined ? 0 : I);
      }
      scrollTo(aScroll) {
        const lElement = ObjetHtml_1.GHtml.getElement(this.Nom);
        if (lElement) {
          const lPositionScroll = this._getTailleScrollDeTailleContenu(aScroll);
          this.evenementSurScroll(lPositionScroll);
          if (this.Genre === EGenreScroll.Vertical) {
            lElement.scrollTop = lPositionScroll;
          } else {
            lElement.scrollLeft = lPositionScroll;
          }
        }
      }
      estScrollSurBorne(aSurBorneDebut) {
        const lElement = ObjetHtml_1.GHtml.getElement(this.Nom);
        if (lElement) {
          const lVert = this.Genre === EGenreScroll.Vertical;
          if (aSurBorneDebut) {
            return lVert ? lElement.scrollTop === 0 : lElement.scrollLeft === 0;
          }
          return lVert
            ? lElement.offsetHeight + lElement.scrollTop >=
                lElement.scrollHeight
            : lElement.offsetWidth + lElement.scrollLeft >=
                lElement.scrollWidth;
        }
        return true;
      }
      callbackAppel(...aParams) {
        return this.callback.appel(...aParams);
      }
      scrollToElement(aElement) {
        if (this.TailleContenu <= this.TailleZone) {
          return;
        }
        let lJElement,
          e,
          eleHeight,
          eleWidth,
          eleTop = 0,
          eleLeft = 0,
          lMaxVisible,
          lPositionDestination;
        try {
          lJElement = e = $(aElement);
        } catch (err) {
          return;
        }
        if (e.length === 0) {
          return;
        }
        const lTabId = [];
        for (let I = 0; I < this.Zones.length; I++) {
          lTabId.push(this.getIdZone(this.Zones[I]));
        }
        while (!lTabId.includes(e.get(0).id)) {
          let lPosElement = e.position();
          eleTop += lPosElement.top;
          eleLeft += lPosElement.left;
          e = e.offsetParent();
          if (/^body|html$/i.test(e[0].nodeName)) {
            return;
          }
        }
        eleTop += e.get(0).scrollTop;
        eleLeft += e.get(0).scrollLeft;
        const lPosition = this.getPosition();
        lMaxVisible = lPosition + this.TailleZone;
        if (this.Genre === EGenreScroll.Vertical) {
          eleHeight = lJElement.outerHeight();
          if (eleTop < lPosition) {
            lPositionDestination = eleTop - this.Largeur;
          } else if (eleTop + eleHeight > lMaxVisible) {
            lPositionDestination =
              eleTop - this.TailleZone + eleHeight + this.Largeur;
          }
        } else {
          eleWidth = lJElement.outerWidth();
          if (eleLeft < lPosition) {
            lPositionDestination = eleLeft - this.Largeur;
          } else if (eleLeft + eleWidth > lMaxVisible) {
            lPositionDestination =
              eleLeft - this.TailleZone + eleWidth + this.Largeur;
          }
        }
        if (MethodesObjet_1.MethodesObjet.isNumber(lPositionDestination)) {
          this.scrollTo(
            this._getTailleScrollDeTailleContenu(
              Math.max(0, lPositionDestination),
            ),
          );
        }
        return true;
      }
      _affectationScroll(aElement, aScroll, aVertical, aSurTouch) {
        const lTaille = this._getTailleScrollDeTailleContenu(
          this.callback.appel(
            EGenreScrollEvenement.Deplacement,
            this._getTailleContenuDeTailleScroll(aScroll),
          ),
        );
        const lGetter = aVertical ? 'scrollTop' : 'scrollLeft';
        const lResult = aElement[lGetter] !== lTaille;
        aElement[lGetter] = lTaille;
        if (!$.contains(document, aElement)) {
          return true;
        }
        if (aSurTouch || aElement[lGetter] !== lTaille) {
          this.evenementSurScroll(aElement[lGetter]);
        }
        return lResult;
      }
      _blockScrollWheel(aEvent) {
        if (aEvent.ctrlKey || aEvent.shiftKey) {
          return true;
        }
        if (aEvent.originalEvent.__wheelSurCombo__) {
          return true;
        }
        return false;
      }
      surMouseWheelV(aEvent) {
        const lInstance = aEvent.data.aObjet;
        if (
          lInstance.styleSheetDisabled ||
          lInstance._blockScrollWheel(aEvent)
        ) {
          return;
        }
        if (!lInstance.avecScrollVisible()) {
          return;
        }
        let lDeltaY = aEvent.originalEvent.deltaY;
        if (isNaN(lDeltaY)) {
          lDeltaY = 0;
        }
        lDeltaY = lDeltaY > 0 ? Math.min(1, lDeltaY) : Math.max(-1, lDeltaY);
        const lElement = ObjetHtml_1.GHtml.getElement(lInstance.Nom);
        if (lElement && lDeltaY !== 0) {
          const lScroll =
            lElement.scrollTop +
            lInstance.nbLigneScroll * lInstance.pas * Math.round(lDeltaY);
          lInstance._affectationScroll(lElement, lScroll, true);
          return false;
        }
        return true;
      }
      surPointerDownV(aEvent) {
        aEvent.data.aObjet.scrollStartPosY =
          aEvent.pointerType === 'touch' && aEvent.originalEvent.isPrimary
            ? aEvent.originalEvent.pageY
            : null;
      }
      surPointerMoveV(aEvent) {
        if (
          aEvent.data.aObjet.scrollStartPosY === null ||
          aEvent.pointerType !== 'touch' ||
          !aEvent.originalEvent.isPrimary
        ) {
          return;
        }
        if (aEvent.target && aEvent.target.closest('.ie-draggable-handle')) {
          return;
        }
        const lInstance = aEvent.data.aObjet;
        const lElement = ObjetHtml_1.GHtml.getElement(lInstance.Nom);
        if (lElement) {
          const lPageY = aEvent.originalEvent.pageY;
          const lDecalage = lInstance.scrollStartPosY - lPageY;
          if (Math.abs(lDecalage) >= 1) {
            const lScroll = lElement.scrollTop + lDecalage;
            if (lInstance._affectationScroll(lElement, lScroll, true, true)) {
              lInstance.scrollStartPosY = lPageY;
            }
          }
        }
      }
      surTouchMoveV(aEvent) {
        if (aEvent.data.aObjet.scrollStartPosY === null) {
          return;
        }
        aEvent.originalEvent.preventDefault();
        return false;
      }
      surMouseWheelH(aEvent) {
        const lInstance = aEvent.data.aObjet;
        if (
          lInstance.styleSheetDisabled ||
          lInstance._blockScrollWheel(aEvent)
        ) {
          return;
        }
        if (!lInstance.avecScrollVisible()) {
          return;
        }
        let lDeltaX = aEvent.originalEvent.deltaX;
        if (isNaN(lDeltaX)) {
          lDeltaX = 0;
        }
        lDeltaX = lDeltaX > 0 ? Math.min(1, lDeltaX) : Math.max(-1, lDeltaX);
        const lElement = ObjetHtml_1.GHtml.getElement(lInstance.Nom);
        if (lElement && lDeltaX !== 0) {
          const lScroll =
            lElement.scrollLeft +
            lInstance.nbLigneScroll * lInstance.pas * Math.floor(lDeltaX);
          lInstance._affectationScroll(lElement, lScroll, false);
          return false;
        }
        return true;
      }
      surPointerDownH(aEvent) {
        const lInstance = aEvent.data.aObjet;
        lInstance.scrollStartPosX =
          aEvent.pointerType === 'touch' && aEvent.originalEvent.isPrimary
            ? aEvent.originalEvent.pageX
            : null;
      }
      surPointerMoveH(aEvent) {
        const lInstance = aEvent.data.aObjet;
        if (
          lInstance.scrollStartPosX === null ||
          aEvent.pointerType !== 'touch' ||
          !aEvent.originalEvent.isPrimary
        ) {
          return;
        }
        if (aEvent.target && aEvent.target.closest('.ie-draggable-handle')) {
          return;
        }
        const lElement = ObjetHtml_1.GHtml.getElement(lInstance.Nom);
        if (lElement) {
          const lPageX = aEvent.originalEvent.pageX;
          const lDecalage = lInstance.scrollStartPosX - lPageX;
          if (Math.abs(lDecalage) >= 1) {
            const lScroll = lElement.scrollLeft + lDecalage;
            if (lInstance._affectationScroll(lElement, lScroll, false, true)) {
              lInstance.scrollStartPosX = lPageX;
            }
          }
        }
      }
      surTouchMoveH(aEvent) {
        if (aEvent.data.aObjet.scrollStartPosX === null) {
          return;
        }
        aEvent.originalEvent.preventDefault();
        return false;
      }
      _estTactile() {
        return window.GNavigateur && window.GNavigateur.isTactile;
      }
      _getTailleScrollDeTailleContenu(aValeur) {
        if (
          !this.tailleScrollPersonnalisee ||
          this.tailleScroll === this.TailleZone ||
          this.tailleScroll <= 0
        ) {
          return aValeur;
        }
        return Math.round((aValeur * this.tailleScroll) / this.TailleZone);
      }
      _getTailleContenuDeTailleScroll(aValeur) {
        if (
          !this.tailleScrollPersonnalisee ||
          this.tailleScroll === this.TailleZone ||
          this.tailleScroll <= 0
        ) {
          return aValeur;
        }
        return Math.round((aValeur * this.TailleZone) / this.tailleScroll);
      }
    }
    exports.ObjetScroll = ObjetScroll;
  },
  fn: 'objetscroll.js',
});