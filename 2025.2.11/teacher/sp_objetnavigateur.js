IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Navigateur = exports.ObjetNavigateur = void 0;
    require('Divers.js');
    require('DeclarationJQuery.js');
    const Invocateur_1 = require('Invocateur');
    const ObjetSupport_1 = require('ObjetSupport');
    const ObjetPosition_1 = require('ObjetPosition');
    const ToucheClavier_1 = require('ToucheClavier');
    const TypeNote_1 = require('TypeNote');
    const Enumere_BoutonSouris_1 = require('Enumere_BoutonSouris');
    const Enumere_Event_1 = require('Enumere_Event');
    const AccessApp_1 = require('AccessApp');
    const IEHtml_DraggableDroppable_css_1 = require('IEHtml.DraggableDroppable.css');
    const IEHtml_DraggableDroppable_1 = require('IEHtml.DraggableDroppable');
    global.GNavigateur = null;
    let uTimerPresenceUtilisateur;
    let uTimerDeclencherVerifierPresenceUtilisateur = null;
    const c_dureeInteractionUtilisateur = 10 * 60 * 1000;
    let u_count_modal_mobile = 0;
    class ObjetNavigateur {
      constructor() {
        this.versionAndroid = [0, 0, 0];
        ObjetPosition_1.GPosition.setNavigateur(this);
        this.Nom = 'GNavigateur';
        this.OnEvent = [];
        this.nbBlocageClavier = 0;
        this.interactionUtilisateur = true;
        this.chargementTermine = false;
        if (document.body) {
          this.initialiser();
        } else {
          const lThis = this;
          $(document).ready(() => {
            lThis.initialiser();
          });
        }
        this.interfaceBloquee = false;
        this.declarationEvenements();
      }
      initialiser() {
        this.UserAgent = navigator.userAgent;
        const LIndex = this.UserAgent.lastIndexOf('MSIE');
        this.isIpad = this.UserAgent.lastIndexOf('iPad') !== -1;
        this.isIphone = this.UserAgent.lastIndexOf('iPhone') !== -1;
        this.isAndroid = this.UserAgent.lastIndexOf('Android') !== -1;
        this.isWinMob =
          this.UserAgent.toLowerCase().lastIndexOf('windows phone') !== -1 ||
          this.UserAgent.toLowerCase().lastIndexOf('windows mobile') !== -1;
        this.isEdge = this.UserAgent.lastIndexOf('Edge') !== -1;
        this.isMacOs = this.UserAgent.search(/Mac\s?OS/gi) > -1;
        if (this.isAndroid) {
          try {
            const lMatchAndroid = this.UserAgent.match(/android\s([0-9.]*)/i);
            if (lMatchAndroid && lMatchAndroid[1]) {
              const lVersionAndroid = lMatchAndroid[1].split('.');
              [0, 1, 2].forEach((aVal) => {
                this.versionAndroid[aVal] = parseInt(
                  lVersionAndroid[aVal] || '0',
                  10,
                );
              });
            }
          } catch (e) {}
        }
        if (this.isIpad || this.isIphone) {
          try {
            const lMatchIOS = (navigator.appVersion || '').match(
              /OS (\d+)_(\d+)_?(\d+)?/,
            );
            if (lMatchIOS) {
              this.isIOS = true;
              this.versionIOS = [
                parseInt(lMatchIOS[1], 10),
                parseInt(lMatchIOS[2], 10),
                parseInt(lMatchIOS[3] || '0', 10),
              ];
            }
          } catch (e) {}
        }
        if (this.isMacOs) {
          try {
            const lMatchMacOS = (navigator.appVersion || '').match(
              /Mac OS X (\d+)_(\d+)_?(\d+)?/,
            );
            if (lMatchMacOS) {
              this.versionMacOS = [
                parseInt(lMatchMacOS[1], 10),
                parseInt(lMatchMacOS[2], 10),
                parseInt(lMatchMacOS[3] || '0', 10),
              ];
            }
          } catch (e) {}
        }
        if (
          document.body.parentNode.parentNode.firstChild.nodeValue === null ||
          document.body.parentNode.parentNode.firstChild.nodeValue === undefined
        ) {
          this.IsIE9 =
            parseInt(this.UserAgent.substring(LIndex + 5, LIndex + 6), 10) ===
            9;
        }
        try {
          this.IsIE = LIndex !== -1;
        } catch (e) {
          this.IsIE = LIndex !== -1;
        }
        this.IsIE =
          LIndex !== -1 || this.UserAgent.lastIndexOf('Trident') !== -1;
        if (this.IsIE) {
          this.IEVersion = this.UserAgent.match(/MSIE (.*?);/)
            ? parseInt(this.UserAgent.match(/MSIE (.*?);/)[1], 10)
            : 0;
          this.IEModeCompatible = this.IEVersion > document.documentMode;
        }
        this.isIETouch = this.IsIE && /Touch/.test(this.UserAgent);
        this.isIE9Mobile =
          this.IsIE && /Windows Phone OS 7/.test(this.UserAgent);
        this.isTactile =
          this.isIpad || this.isIphone || this.isAndroid || this.isIETouch;
        this.IsWebKit = this.UserAgent.lastIndexOf('AppleWebKit/') > -1;
        this.IsGecko =
          !this.IsIE &&
          this.UserAgent.lastIndexOf('Gecko') > -1 &&
          this.UserAgent.lastIndexOf('KHTML') === -1;
        this.IsOpera =
          Object.prototype.toString.call(window.opera) === '[object Opera]';
        this.isSafari =
          this.UserAgent.search(/safari/gi) > -1 &&
          this.UserAgent.search(/chrome/gi) === -1;
        if (
          !this.isTactile &&
          this.isSafari &&
          this.isMacOs &&
          this.UserAgent.lastIndexOf('Macintosh') !== -1 &&
          'ontouchstart' in window &&
          window.navigator &&
          window.navigator.maxTouchPoints > 1 &&
          !this.isAndroid
        ) {
          this.isIpad = true;
          this.isTactile = true;
        }
        this.withContentEditable =
          this.IsIE ||
          this.IsOpera ||
          this.IsGecko ||
          (this.IsWebKit &&
            !this.isAndroid &&
            !this.isIphone &&
            !this.isIpad) ||
          (this.IsWebKit &&
            parseInt(this.UserAgent.match(/AppleWebKit\/(\d*)/)[1], 10) >= 534);
        ObjetSupport_1.Support.addInit(() => {
          _uniformisationTouch();
          if (
            ObjetSupport_1.Support.supportTouch &&
            (this.isIphone || this.isIpad)
          ) {
            _emulationContextMenu.call(this);
          }
          if (ObjetSupport_1.Support.supportTouch) {
            document.addEventListener(
              'touchmove',
              (aEvent) => {
                if (
                  aEvent.target.closest(
                    `.${IEHtml_DraggableDroppable_css_1.StylesIEHtmlDraggableDroppable.ieDraggableHandle}`,
                  ) &&
                  !aEvent.target.closest(
                    `.${IEHtml_DraggableDroppable_1.StylesIEHtmlDraggableDroppableSelecteur.ieDraggableHandleCancel}`,
                  )
                ) {
                  aEvent.preventDefault();
                }
              },
              { passive: false },
            );
          }
        });
        const lThis = this;
        document.addEventListener(
          'pointerdown',
          (aEvent) => {
            lThis.pointerX = aEvent.pageX;
            lThis.pointerY = aEvent.pageY;
          },
          { capture: true },
        );
        document.addEventListener(
          'pointermove',
          (aEvent) => {
            lThis.pointerX = aEvent.pageX;
            lThis.pointerY = aEvent.pageY;
          },
          { capture: true },
        );
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.eventIOAjax,
          this._surEventIOAjax.bind(this),
        );
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.patience,
          this._surPatience.bind(this),
        );
        this.setIsTactile(this.isTactile);
      }
      get ecranL() {
        return document.body.scrollWidth;
      }
      get ecranH() {
        return document.body.scrollHeight;
      }
      get clientL() {
        return document.body.clientWidth;
      }
      get clientH() {
        return document.body.clientHeight;
      }
      get isLayoutTactile() {
        return false;
      }
      resetCodeTouche() {
        this.CodeTouche = null;
        this.ShiftTouche = null;
        this.AltTouche = null;
        this.CtrlTouche = null;
        this.CmdTouche = null;
      }
      setIsTactile(aVal) {
        this.isTactile = aVal;
        if (aVal) {
          $(document.body).addClass('isTactile');
        } else {
          $(document.body).removeClass('isTactile');
        }
      }
      getBloquerClavier() {
        return this.nbBlocageClavier > 0;
      }
      _surBeforeUnload() {
        let lData;
        if (Invocateur_1.Invocateur) {
          lData = {};
          Invocateur_1.Invocateur.evenement(
            Invocateur_1.ObjetInvocateur.events.autorisationRechargementPage,
            lData,
          );
          if (lData.message) {
            return lData.message;
          }
        }
        if ((0, AccessApp_1.getApp)()) {
          (0, AccessApp_1.getApp)().unloadEnCours = true;
          setTimeout(() => {
            if ((0, AccessApp_1.getApp)()) {
              (0, AccessApp_1.getApp)().unloadEnCours = false;
            }
          }, 500);
        }
      }
      viderCache() {
        this.OnEvent = [];
        if (uTimerPresenceUtilisateur) {
          clearTimeout(uTimerPresenceUtilisateur);
        }
        if (uTimerDeclencherVerifierPresenceUtilisateur) {
          clearTimeout(uTimerDeclencherVerifierPresenceUtilisateur);
        }
      }
      getEventInvocateur(aGenreEvent) {
        return 'IIE_EventNavigateur_' + aGenreEvent;
      }
      stopperEvenement(AEvenement) {
        AEvenement = _getEvenement(AEvenement);
        if (AEvenement) {
          AEvenement.cancelBubble = true;
          if (AEvenement.stopPropagation) {
            AEvenement.stopPropagation();
          }
        }
      }
      bloquerValeurEvenement(aEvenement) {
        aEvenement = _getEvenement(aEvenement);
        if (aEvenement) {
          if (aEvenement.preventDefault) {
            aEvenement.preventDefault();
          } else {
            aEvenement.returnValue = false;
          }
        }
      }
      declarationEvenements() {
        try {
          const lThis = this;
          window.onerror = function (AMessage, AUrl, ALigne) {
            IE.log.addLog(
              'ObjetNavigateur.surError : ' +
                AMessage +
                '; ' +
                AUrl +
                '; Ligne : ' +
                ALigne,
              'ERROR',
              IE.log.genre.Erreur,
            );
            lThis.declencherEvenements(Enumere_Event_1.EEvent.SurError);
          };
          document.onclick = () => {
            this.declencherEvenements(Enumere_Event_1.EEvent.SurClick);
          };
          document.onkeyup = () => {
            this.altPrecedent = this.AltTouche;
            this.shiftPrecedent = this.ShiftTouche;
            this.ShiftTouche = null;
            this.AltTouche = null;
            this.CtrlTouche = null;
            this.CmdTouche = null;
            this.declencherEvenements(Enumere_Event_1.EEvent.SurKeyUp);
          };
          document.onkeypress = (e) => {
            this.setCaractereTouche(e);
            return this.declencherEvenements(
              Enumere_Event_1.EEvent.SurKeyPress,
            );
          };
          document.onmousemove = () => {
            this.enDeplacement();
            this.declencherEvenements(Enumere_Event_1.EEvent.SurMouseMove);
          };
          document.onmouseup = () => {
            this.SourisBouton = false;
            this.finDeplacement();
            this.declencherEvenements(Enumere_Event_1.EEvent.SurMouseUp);
          };
          document.onmousedown = () => {
            this.declencherEvenements(Enumere_Event_1.EEvent.SurMouseDown);
          };
          document.onselectstart = () => {
            this.declencherEvenements(Enumere_Event_1.EEvent.SurSelectStart);
          };
          $(document).on({
            keydown: (aEvent) => {
              if (aEvent.ctrlKey && aEvent.keyCode === 188) {
                Invocateur_1.Invocateur.evenement(
                  Invocateur_1.ObjetInvocateur.events.toucheDEBUG,
                );
              }
              return this.declencherEvenements(
                Enumere_Event_1.EEvent.SurKeyDown,
              );
            },
          });
          $(document).on(
            'click dblclick mousedown mouseup mousemove ' +
              'keydown keyup keypress ' +
              'touchstart touchend touchcancel touchmove ' +
              'pointerdown pointerup pointermove ' +
              'contextmenu ' +
              'ie-pointerdownlong ' +
              'ie-doubletap',
            function (event) {
              if (
                (event.type === 'click' || event.type === 'dblclick') &&
                event.which !== 1
              ) {
                return;
              }
              Invocateur_1.Invocateur.evenement(
                lThis.getEventInvocateur(event.type),
                event,
                this,
              );
            },
          );
          document.addEventListener(
            'pointerdown',
            function (aEvent) {
              Invocateur_1.Invocateur.evenement(
                `${lThis.getEventInvocateur(aEvent.type)}.capture`,
                aEvent,
                this,
              );
            },
            { capture: true },
          );
          document.addEventListener(
            'keydown',
            function (aEvent) {
              Invocateur_1.Invocateur.evenement(
                `${lThis.getEventInvocateur(aEvent.type)}.capture`,
                aEvent,
                this,
              );
            },
            { capture: true },
          );
          this._verifierPresenceUtilisateur();
          $(document).on('visibilitychange', () => {
            switch (document.hidden) {
              case true:
                lThis._utilisateurNonPresent();
                break;
              case false:
                lThis._verifierPresenceUtilisateur();
                break;
            }
          });
          const lEventMap = {};
          lEventMap.resize = (aEvent) => {
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.resizeNavigateur,
              aEvent,
            );
            this.surResize();
          };
          lEventMap.scroll = () => {
            this.declencherEvenements(Enumere_Event_1.EEvent.SurScroll);
          };
          lEventMap.load = () => {
            this.chargementTermine = true;
          };
          lEventMap.pagehide = () => {
            Invocateur_1.Invocateur.evenement(
              Invocateur_1.ObjetInvocateur.events.surRechargementPage,
            );
            this.viderCache();
          };
          lEventMap.beforeunload = this._surBeforeUnload;
          lEventMap.blur = () => {
            this.resetCodeTouche();
          };
          if (!IE.estMobile) {
            lEventMap.orientationchange = () => {
              if (lThis.isTactile) {
                lThis._surResize();
              }
            };
          }
          $(window).on(lEventMap, { instance: this });
          document.addEventListener(
            'mousedown',
            (aEvent) => {
              lThis.SourisBouton = true;
              lThis.BoutonSouris = lThis.getBoutonSouris(aEvent);
            },
            true,
          );
          document.addEventListener(
            'keydown',
            (aEvent) => {
              if (lThis) {
                lThis.setCodeTouche(aEvent);
                lThis.CaractereTouche = '';
              }
            },
            true,
          );
          document.addEventListener(
            'keypress',
            (aEvent) => {
              if (lThis) {
                lThis.setCaractereTouche(aEvent);
              }
            },
            true,
          );
          document.addEventListener(
            'keyup',
            (aEvent) => {
              if (lThis) {
                lThis.setCodeTouche(aEvent);
              }
            },
            true,
          );
        } catch (e) {
          IE.log.addLog(`exception - ${e}`);
        }
      }
      _surEventIOAjax(aParametres) {
        if (
          aParametres.init ||
          aParametres.actualisation ||
          aParametres.ignorerBlocageClavier
        ) {
          return;
        }
        this._surPatience(!!aParametres.emission);
      }
      _surPatience(aActiver) {
        this.nbBlocageClavier = this.nbBlocageClavier + (aActiver ? 1 : -1);
        this.nbBlocageClavier = Math.max(0, this.nbBlocageClavier);
      }
      getZIndexModalMobile(aAdd) {
        if (aAdd === true) {
          u_count_modal_mobile += 1;
        } else if (aAdd === false) {
          u_count_modal_mobile = Math.max(0, u_count_modal_mobile - 1);
        }
        return 1000 + u_count_modal_mobile * 2;
      }
      addEvent(AGenre, APere, AEvenement) {
        if (!this.chargementTermine) {
          return;
        }
        if (!AEvenement || !APere) {
          return;
        }
        if (!this.OnEvent[AGenre]) {
          this.OnEvent[AGenre] = [];
        }
        this.OnEvent[AGenre].push({ evenement: AEvenement, pere: APere });
      }
      delEvent(AGenre, APere) {
        const LNom = APere.getNom();
        const LArrayEvent = this.OnEvent[AGenre];
        if (!LArrayEvent) {
          IE.log.addLog(
            'delEvent sur un element non ajouté ! APere = ' + APere.getNom(),
            null,
            IE.log.genre.Erreur,
          );
          return;
        }
        let i = 0;
        while (i < LArrayEvent.length) {
          if (LArrayEvent[i].pere.getNom() === LNom) {
            this.OnEvent[AGenre].splice(i, 1);
          } else {
            i++;
          }
        }
      }
      declencherEvenements(AGenre) {
        let LContinuer;
        for (
          let I = 0;
          this.OnEvent[AGenre] && I < this.OnEvent[AGenre].length;
          I++
        ) {
          let lEvent = this.OnEvent[AGenre][I];
          LContinuer =
            !lEvent.evenement.call(lEvent.pere) && LContinuer !== false;
        }
        return LContinuer;
      }
      isToucheEspace() {
        return (
          this.CodeTouche === ToucheClavier_1.ToucheClavier.Espace &&
          !this.ShiftTouche
        );
      }
      isToucheRetourChariot() {
        return (
          this.CodeTouche === ToucheClavier_1.ToucheClavier.RetourChariot &&
          !this.ShiftTouche &&
          !this.AltTouche &&
          !this.CtrlTouche
        );
      }
      isToucheSelection() {
        return this.isToucheRetourChariot() || this.isToucheEspace();
      }
      isToucheMenuContextuel() {
        return (
          this.CodeTouche === ToucheClavier_1.ToucheClavier.ContextMenu ||
          (this.CodeTouche === ToucheClavier_1.ToucheClavier.RetourChariot &&
            !this.ShiftTouche &&
            (this.AltTouche || this.CtrlTouche))
        );
      }
      isToucheEchap() {
        return this.CodeTouche === ToucheClavier_1.ToucheClavier.Echap;
      }
      isToucheFlecheHaut() {
        return this.CodeTouche === ToucheClavier_1.ToucheClavier.FlecheHaut;
      }
      isToucheFlecheBas() {
        return this.CodeTouche === ToucheClavier_1.ToucheClavier.FlecheBas;
      }
      isToucheFlecheGauche() {
        return this.CodeTouche === ToucheClavier_1.ToucheClavier.FlecheGauche;
      }
      isToucheFlecheDroite() {
        return this.CodeTouche === ToucheClavier_1.ToucheClavier.FlecheDroite;
      }
      isToucheFleche() {
        return (
          this.isToucheFlecheHaut() ||
          this.isToucheFlecheBas() ||
          this.isToucheFlecheGauche() ||
          this.isToucheFlecheDroite()
        );
      }
      isToucheShiftTab() {
        return (
          this.CodeTouche === ToucheClavier_1.ToucheClavier.Tab &&
          this.ShiftTouche
        );
      }
      isToucheOnlyTab() {
        return (
          this.CodeTouche === ToucheClavier_1.ToucheClavier.Tab &&
          !this.ShiftTouche
        );
      }
      getToucheAltNum(ADeb, AFin) {
        let LCodeTouche;
        if (this.CodeTouche >= ToucheClavier_1.ToucheClavier.Numpad_0) {
          LCodeTouche =
            this.CodeTouche - ToucheClavier_1.ToucheClavier.Numpad_0;
          return this.altPrecedent &&
            !this.shiftPrecedent &&
            LCodeTouche >= ADeb &&
            LCodeTouche <= AFin
            ? LCodeTouche
            : null;
        }
        LCodeTouche = this.CodeTouche - ToucheClavier_1.ToucheClavier._0;
        return this.altPrecedent &&
          this.shiftPrecedent &&
          LCodeTouche >= ADeb &&
          LCodeTouche <= AFin
          ? LCodeTouche
          : null;
      }
      estCaractereDecimal() {
        return this.estCaractere('0-9');
      }
      estCaractereHexa() {
        return this.estCaractere('0-9abcdefABCDEF');
      }
      estCaractereDate() {
        return this.estCaractere('0-9');
      }
      estCaractereNote(
        aAvecLettre,
        aAvecVirgule,
        aAvecMoins,
        aCaractereAnnotation,
      ) {
        return TypeNote_1.TypeNote.estCaractereNote(
          this.CaractereTouche,
          aAvecLettre,
          aAvecVirgule,
          aAvecMoins,
          aCaractereAnnotation,
        );
      }
      estCaractereAlphaNumerique() {
        return (
          !this.AltTouche &&
          !this.CtrlTouche &&
          new RegExp('[0-9.a-z.A-Z]').test(this.CaractereTouche)
        );
      }
      estCaractere(aRegExp) {
        return ToucheClavier_1.ToucheClavierUtil.estCaractere(
          this.CaractereTouche,
          aRegExp,
        );
      }
      estSourisBoutonGauche() {
        return (
          this.BoutonSouris === Enumere_BoutonSouris_1.EGenreBoutonSouris.Gauche
        );
      }
      estSourisBoutonDroit() {
        return (
          this.BoutonSouris === Enumere_BoutonSouris_1.EGenreBoutonSouris.Droite
        );
      }
      setCaractereTouche(e) {
        e = e || window.event;
        this.CaractereTouche =
          e.charCode === 0 ? '' : String.fromCharCode(e.charCode || e.keyCode);
      }
      setCodeTouche(e) {
        e = e || window.event;
        this.CodeTouche = e.keyCode;
        this.ShiftTouche = e.shiftKey;
        this.AltTouche = e.altKey;
        this.CtrlTouche = e.ctrlKey;
        this.CmdTouche = e.metaKey;
      }
      getBoutonSouris(e) {
        if (e) {
          switch (e.button) {
            case 0:
              return Enumere_BoutonSouris_1.EGenreBoutonSouris.Gauche;
            case 2:
              return Enumere_BoutonSouris_1.EGenreBoutonSouris.Droite;
          }
        } else {
          switch (window.event.button) {
            case 1:
              return Enumere_BoutonSouris_1.EGenreBoutonSouris.Gauche;
            case 2:
              return Enumere_BoutonSouris_1.EGenreBoutonSouris.Droite;
          }
        }
      }
      getLargeurBarreDeScroll() {
        return ObjetSupport_1.Support.tailleScrollBar || 8;
      }
      getHost() {
        return window.location.href.slice(
          0,
          window.location.href.lastIndexOf('/') + 1,
        );
      }
      surResize() {
        if (!IE.estMobile && !this.isTactile) {
          this._surResize();
        }
      }
      _surResize() {
        if (IE.estMobile) {
          return;
        }
        if (this.EnResize) {
          window.clearTimeout(this.TimerResize);
        } else {
          this.EnResize = true;
          this.declencherEvenements(Enumere_Event_1.EEvent.SurPreResize);
        }
        this.declencherEvenements(Enumere_Event_1.EEvent.SurResize);
        this.TimerResize = setTimeout(() => {
          try {
            this.declencherEvenements(Enumere_Event_1.EEvent.SurPostResize);
            this.declencherEvenements(Enumere_Event_1.EEvent.SurFinResize);
          } finally {
            this.EnResize = false;
          }
        }, 300);
      }
      positionnerMenuContextuelSurId(aId, aDeltaX, aDeltaY) {
        const lElement = document.getElementById(aId);
        if (lElement) {
          this.pointerX = aDeltaX
            ? ObjetPosition_1.GPosition.getLeft(lElement) + aDeltaX
            : ObjetPosition_1.GPosition.getLeft(lElement);
          this.pointerY = aDeltaY
            ? ObjetPosition_1.GPosition.getTop(lElement) + aDeltaY
            : ObjetPosition_1.GPosition.getTop(lElement);
        }
      }
      debDeplacement(APere, AId) {
        this._idDeplacement = AId;
        this.Deplacement = true;
        this.DecalageX =
          this.pointerX -
          ObjetPosition_1.GPosition.getLeft(this._idDeplacement);
        this.DecalageY =
          this.pointerY - ObjetPosition_1.GPosition.getTop(this._idDeplacement);
      }
      enDeplacement() {
        if (this.Deplacement) {
          ObjetPosition_1.GPosition.placer(
            this._idDeplacement,
            this.pointerX - this.DecalageX,
            this.pointerY - this.DecalageY,
          );
        }
      }
      finDeplacement() {
        if (this.Deplacement) {
          this.Deplacement = false;
          this.declencherEvenements(Enumere_Event_1.EEvent.SurFinDeplacement);
          delete this._idDeplacement;
        }
      }
      _utilisateurNonPresent() {
        if (uTimerPresenceUtilisateur) {
          clearTimeout(uTimerPresenceUtilisateur);
          uTimerPresenceUtilisateur = null;
        }
        if (this.interactionUtilisateur) {
          Invocateur_1.Invocateur.evenement(
            Invocateur_1.ObjetInvocateur.events.modificationPresenceUtilisateur,
            false,
          );
          this.interactionUtilisateur = false;
        }
      }
      _verifierPresenceUtilisateur() {
        if (!this.interactionUtilisateur) {
          Invocateur_1.Invocateur.evenement(
            Invocateur_1.ObjetInvocateur.events.modificationPresenceUtilisateur,
            true,
          );
        }
        this.interactionUtilisateur = true;
        if (uTimerPresenceUtilisateur) {
          clearTimeout(uTimerPresenceUtilisateur);
          uTimerPresenceUtilisateur = null;
        }
        uTimerPresenceUtilisateur = setTimeout(
          this._utilisateurNonPresent.bind(this),
          c_dureeInteractionUtilisateur,
        );
        $(document).off(
          'mousedown keydown mousemove pointerdown touchstart',
          this._verifierPresenceUtilisateur.bind(this),
        );
        if (uTimerDeclencherVerifierPresenceUtilisateur) {
          clearTimeout(uTimerDeclencherVerifierPresenceUtilisateur);
          uTimerDeclencherVerifierPresenceUtilisateur = null;
        }
        uTimerDeclencherVerifierPresenceUtilisateur = setTimeout(() => {
          uTimerDeclencherVerifierPresenceUtilisateur = null;
          $(document).on(
            'mousedown keydown mousemove pointerdown touchstart',
            this._verifierPresenceUtilisateur.bind(this),
          );
        }, 1000 * 10);
      }
    }
    exports.ObjetNavigateur = ObjetNavigateur;
    function _emulationContextMenu() {
      const lDelai = 500;
      let uGestionTouch = null;
      const const_margesDeplacementContextMenu = 100;
      function _touchstart(event) {
        const lPosition =
          ObjetPosition_1.GPosition.getPositionEventJQuery(event);
        uGestionTouch = {
          x: lPosition.x,
          y: lPosition.y,
          timeStart: Date.now(),
        };
      }
      function _toucheend(aEvent) {
        let lGestionTouch = uGestionTouch;
        uGestionTouch = null;
        if (lGestionTouch && Date.now() - lGestionTouch.timeStart > lDelai) {
          const lPosition =
            ObjetPosition_1.GPosition.getPositionEventJQuery(aEvent);
          const lAccepterContextMenu =
            aEvent.target &&
            Math.abs(lPosition.x - lGestionTouch.x) <
              const_margesDeplacementContextMenu &&
            Math.abs(lPosition.y - lGestionTouch.y) <
              const_margesDeplacementContextMenu &&
            (!ObjetPosition_1.GPosition ||
              ObjetPosition_1.GPosition.positionDansZone(
                lPosition,
                aEvent.target,
              ));
          if (!lAccepterContextMenu) {
            return;
          }
          aEvent.stopImmediatePropagation();
          aEvent.preventDefault();
          const lEvent = $.Event('contextmenu', {
            pointerType: 'touch',
            originalEvent: aEvent.originalEvent,
          });
          setTimeout(() => {
            $(aEvent.target).trigger(lEvent);
          }, 0);
        }
      }
      $(document).on({
        touchstart: _touchstart,
        touchend: _toucheend,
        touchcancel() {
          uGestionTouch = {};
        },
        contextmenu() {
          uGestionTouch = {};
        },
      });
    }
    function _uniformisationTouch() {
      let uLongTouch = null,
        uLongTouchTimer,
        uLongTouchTimerFin,
        const_delaiLongTouch = 500,
        const_delaiLongTouchFin = 1500,
        const_margesDeplacementLongTouch = 50,
        const_delaiDoubleTap = 300,
        const_margesDeplacementDoubleTap = 50,
        uLastTap = { time: 0, target: null, x: 0, y: 0 };
      function _stopperLongTouch() {
        clearTimeout(uLongTouchTimer);
        clearTimeout(uLongTouchTimerFin);
        uLongTouch = null;
      }
      function _demarrageLongTouch(aEventOrigine) {
        _stopperLongTouch();
        uLongTouch = {
          pointerId: aEventOrigine.pointerId,
          x: aEventOrigine.clientX,
          y: aEventOrigine.clientY,
          ok: false,
        };
        uLongTouchTimer = setTimeout(() => {
          if (uLongTouch) {
            uLongTouch.ok = true;
          }
        }, const_delaiLongTouch);
        uLongTouchTimerFin = setTimeout(() => {
          if (uLongTouch) {
            _finaliserLongTouch(aEventOrigine, true);
          }
        }, const_delaiLongTouchFin);
      }
      function _eventDansMargesLongTouch(aEvent) {
        return (
          uLongTouch &&
          Math.abs(aEvent.clientX - uLongTouch.x) <
            const_margesDeplacementLongTouch &&
          Math.abs(aEvent.clientY - uLongTouch.y) <
            const_margesDeplacementLongTouch
        );
      }
      function _finaliserLongTouch(aEventOrigine, aSurTimer) {
        clearTimeout(uLongTouchTimer);
        clearTimeout(uLongTouchTimerFin);
        if (
          uLongTouch.ok &&
          uLongTouch.pointerId === aEventOrigine.pointerId &&
          _eventDansMargesLongTouch(aEventOrigine)
        ) {
          const lEventSimule = $.Event(
            'ie-pointerdownlong',
            Object.assign(aEventOrigine, {
              type: 'ie-pointerdownlong',
              surTimer: false,
            }),
          );
          if (aSurTimer) {
            lEventSimule.surTimer = true;
          }
          $(aEventOrigine.target).trigger(lEventSimule);
        }
        _stopperLongTouch();
      }
      function _detectDoubleTap(aEventOrigine) {
        const lCurrentTime = Date.now();
        const lDelaiTap = lCurrentTime - uLastTap.time;
        if (
          uLastTap.time > 0 &&
          lDelaiTap < const_delaiDoubleTap &&
          lDelaiTap > 0 &&
          uLastTap.target === aEventOrigine.target &&
          _eventDansMargesDoubleTap(aEventOrigine)
        ) {
          const lEventSimule = $.Event(
            'ie-doubletap',
            Object.assign(aEventOrigine, { type: 'ie-doubletap' }),
          );
          $(aEventOrigine.target).trigger(lEventSimule);
          uLastTap.time = 0;
          uLastTap.target = null;
          uLastTap.x = 0;
          uLastTap.y = 0;
        } else {
          uLastTap.time = lCurrentTime;
          uLastTap.target = aEventOrigine.target;
          uLastTap.x = aEventOrigine.clientX;
          uLastTap.y = aEventOrigine.clientY;
        }
      }
      function _eventDansMargesDoubleTap(aEvent) {
        return (
          uLastTap &&
          Math.abs(aEvent.clientX - uLastTap.x) <
            const_margesDeplacementDoubleTap &&
          Math.abs(aEvent.clientY - uLastTap.y) <
            const_margesDeplacementDoubleTap
        );
      }
      $(document).on({
        'pointerdown.pointerdownlong'(aEvent) {
          if (aEvent.target) {
            _demarrageLongTouch(aEvent);
          }
        },
        'pointerup.pointerdownlong'(aEvent) {
          if (aEvent.target && uLongTouch) {
            _finaliserLongTouch(aEvent);
          }
        },
        'pointermove.pointerdownlong'(aEvent) {
          if (uLongTouch) {
            if (
              uLongTouch.pointerId !== aEvent.pointerId ||
              !_eventDansMargesLongTouch(aEvent)
            ) {
              _stopperLongTouch();
            }
          }
        },
        'pointercancel.pointerdownlong'() {
          if (uLongTouch) {
            _stopperLongTouch();
          }
        },
        'scroll.pointerdownlong'() {
          if (uLongTouch) {
            _stopperLongTouch();
          }
        },
        'click.doubleTap'(aEvent) {
          if (aEvent.target) {
            _detectDoubleTap(aEvent);
          }
        },
      });
      _initSwipeEvent();
    }
    function _initSwipeEvent() {
      function triggerCustomEvent(obj, eventType, event, bubble) {
        const originalType = event.type;
        event.type = eventType;
        if (bubble) {
          $.event.trigger(event, undefined, obj);
        } else {
          $.event.dispatch.call(obj, event);
        }
        event.type = originalType;
      }
      const lJDocument = $(document);
      const lSwipe = {
        scrollSupressionThreshold: 30,
        durationThreshold: 1000,
        horizontalDistanceThreshold: exports.Navigateur.isIOS ? 60 : 30,
        verticalDistanceThreshold: exports.Navigateur.isIOS ? 60 : 30,
        getLocation: function (event) {
          const winPageX = window.pageXOffset;
          const winPageY = window.pageYOffset;
          let x = event.clientX;
          let y = event.clientY;
          if (
            (event.pageY === 0 && Math.floor(y) > Math.floor(event.pageY)) ||
            (event.pageX === 0 && Math.floor(x) > Math.floor(event.pageX))
          ) {
            x = x - winPageX;
            y = y - winPageY;
          } else if (y < event.pageY - winPageY || x < event.pageX - winPageX) {
            x = event.pageX - winPageX;
            y = event.pageY - winPageY;
          }
          return { x: x, y: y };
        },
        start: function (event) {
          const data = event.originalEvent.touches
              ? event.originalEvent.touches[0]
              : event,
            location = $.event.special.swipe.getLocation(data);
          return {
            time: new Date().getTime(),
            coords: [location.x, location.y],
            origin: $(event.target),
          };
        },
        stop: function (event) {
          const data = event.originalEvent.touches
              ? event.originalEvent.touches[0]
              : event,
            location = $.event.special.swipe.getLocation(data);
          return {
            time: new Date().getTime(),
            coords: [location.x, location.y],
          };
        },
        handleSwipe: function (start, stop, thisObject, origTarget) {
          if (
            stop.time - start.time <
            $.event.special.swipe.durationThreshold
          ) {
            let direction = null;
            if (
              Math.abs(start.coords[0] - stop.coords[0]) >
                $.event.special.swipe.horizontalDistanceThreshold &&
              Math.abs(start.coords[1] - stop.coords[1]) <
                $.event.special.swipe.verticalDistanceThreshold
            ) {
              direction =
                start.coords[0] > stop.coords[0] ? 'swipeleft' : 'swiperight';
            } else if (
              Math.abs(start.coords[0] - stop.coords[0]) <
                $.event.special.swipe.horizontalDistanceThreshold &&
              Math.abs(start.coords[1] - stop.coords[1]) >
                $.event.special.swipe.verticalDistanceThreshold
            ) {
              direction =
                start.coords[1] > stop.coords[1] ? 'swipeup' : 'swipedown';
            }
            if (direction) {
              triggerCustomEvent(
                thisObject,
                'swipe',
                $.Event('swipe', {
                  target: origTarget,
                  swipestart: start,
                  swipestop: stop,
                }),
                true,
              );
              triggerCustomEvent(
                thisObject,
                direction,
                $.Event(direction, {
                  target: origTarget,
                  swipestart: start,
                  swipestop: stop,
                }),
                true,
              );
              return true;
            }
          }
          return false;
        },
        eventInProgress: false,
        setup: function () {
          let events;
          const thisObject = this;
          const $this = $(thisObject);
          const context = {};
          events = $.data(this, 'mobile-events');
          if (!events) {
            events = { length: 0 };
            $.data(this, 'mobile-events', events);
          }
          events.length++;
          events.swipe = context;
          context.start = function (event) {
            $.event.special.swipe.eventInProgress = true;
            let stop;
            const start = $.event.special.swipe.start(event);
            const origTarget = event.target;
            let emitted = false;
            context.move = function (event) {
              if (
                !start ||
                event.isDefaultPrevented() ||
                event.originalEvent.changedTouches.length > 1
              ) {
                return;
              }
              stop = $.event.special.swipe.stop(event);
              if (!emitted) {
                emitted = $.event.special.swipe.handleSwipe(
                  start,
                  stop,
                  thisObject,
                  origTarget,
                );
                if (emitted) {
                  $.event.special.swipe.eventInProgress = false;
                }
              }
            };
            context.stop = function () {
              emitted = true;
              $.event.special.swipe.eventInProgress = false;
              lJDocument.off('touchmove', context.move);
              context.move = null;
            };
            lJDocument
              .on('touchmove', context.move)
              .one('touchend', context.stop);
          };
          $this.on('touchstart', context.start);
        },
        teardown: function () {
          let events, context;
          events = $.data(this, 'mobile-events');
          if (events) {
            context = events.swipe;
            delete events.swipe;
            events.length--;
            if (events.length === 0) {
              $.removeData(this, 'mobile-events');
            }
          }
          if (context) {
            if (context.start) {
              $(this).off('touchstart', context.start);
            }
            if (context.move) {
              lJDocument.off('touchmove', context.move);
            }
            if (context.stop) {
              lJDocument.off('touchend', context.stop);
            }
          }
        },
      };
      $.event.special.swipe = lSwipe;
      $.each(
        {
          swipeleft: 'swipe.left',
          swiperight: 'swipe.right',
          swipeup: 'swipe.up',
          swipedown: 'swipe.down',
        },
        (event, sourceEvent) => {
          $.event.special[event] = {
            setup: function () {
              $(this).bind(sourceEvent, $.noop);
            },
            teardown: function () {
              $(this).unbind(sourceEvent);
            },
          };
        },
      );
    }
    function _getEvenement(aEvenement) {
      return aEvenement || window.event;
    }
    exports.Navigateur = new ObjetNavigateur();
    global.GNavigateur = exports.Navigateur;
  },
  fn: 'objetnavigateur.js',
});