IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetMenuContextuel = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const Enumere_Direction_1 = require('@cp/script/Enumere/Enumere_Direction');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const ObjetImage_1 = require('@cp/script/ObjetImage');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const GestionnaireModale_1 = require('@cp/Produit/Script/GestionnaireModale');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const Enumere_MenuCtxModeMixte_1 = require('@cp/Produit/Script/Enumere/Enumere_MenuCtxModeMixte');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const ObjetMenuContextuel_css_1 = require('@cp/Produit/Css/ObjetMenuContextuel.css');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const fonts_css_1 = require('@cp/Produit/Css/fonts.css');
    const IEHtml_Ripple_css_1 = require('@cp/Produit/Css/IEHtml.Ripple.css');
    const Divers_1 = require('@librairies/script/Divers/Divers');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    var EGenreLigneMenu;
    (function (EGenreLigneMenu) {
      EGenreLigneMenu[(EGenreLigneMenu['Separateur'] = 0)] = 'Separateur';
      EGenreLigneMenu[(EGenreLigneMenu['Commande'] = 1)] = 'Commande';
      EGenreLigneMenu[(EGenreLigneMenu['Deploiement'] = 2)] = 'Deploiement';
      EGenreLigneMenu[(EGenreLigneMenu['Titre'] = 3)] = 'Titre';
    })(EGenreLigneMenu || (EGenreLigneMenu = {}));
    const c_delaiFermetureSousMenu = 300;
    const c_delaiOuvertureSousMenu = 200;
    class ObjetMenuContextuel extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
        this.ListeLignes = new ObjetListeElements_1.ObjetListeElements();
        this._callbacksAfficherLignes = [];
        this.IdNomMenuContextuel = this.Nom + '_MenuContextuel';
        this.IdPremierElement = this.IdNomMenuContextuel;
        this.IdPrecedent = '';
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.startResizeNavigateur,
          () => {
            this.fermer();
          },
          this,
        );
        this.options = {
          largeurMaxLibelle: 400,
          preventScrollSurRestaurationFocus: false,
          estModeMixte: false,
          prioriteBlocageAbonnement:
            GestionnaireModale_1.GestionnaireModale.TypePrioriteBlocageInterface
              .standard,
          annulerSiPasDeCommandesActives: false,
        };
      }
      static afficher(aParametres) {
        var _a;
        const lParametres = Object.assign(
          { affichageSurInitCommandes: false },
          aParametres,
        );
        if (!lParametres.pere) {
          throw new Error('ObjetMenuContextuel.afficher - pas de pere');
        }
        if (!lParametres.initCommandes) {
          throw new Error('ObjetMenuContextuel.afficher - pas de pere');
        }
        const lInstance = new ObjetMenuContextuel({
          pere: lParametres.pere,
          evenement: lParametres.evenement,
        });
        lInstance.destructionSurFermeture = true;
        lInstance.setOptions(
          (_a = lParametres.options) !== null && _a !== void 0 ? _a : {},
        );
        const lDestroy = () => {
          if (lParametres.destroy) {
            lParametres.destroy();
            IEHtml_1.IEHtml.refresh();
          }
          lInstance.free();
        };
        IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(lInstance.getNom());
        const lJFenetre = $(`#${lInstance.getNom().escapeJQ()}`);
        lJFenetre.on('destroyed', () => {
          lDestroy();
        });
        lParametres.initCommandes.call(lParametres.pere, lInstance);
        if (!lInstance.contientAuMoinsUneLigne()) {
          lJFenetre.remove();
          return;
        }
        lInstance.surKeyUp = lParametres.surKeyUp;
        lInstance.surKeyPress = lParametres.surKeyPress;
        if (!lParametres.affichageSurInitCommandes) {
          lInstance.afficher(lParametres.id);
        }
        return lInstance;
      }
      static createSpecialMixte(aParams) {
        const lMenuContextuel = new ObjetMenuContextuel(aParams);
        lMenuContextuel.setOptions({ estModeMixte: true });
        IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(lMenuContextuel.getNom());
        return lMenuContextuel;
      }
      static forcerMenuContextuelNatif(aNode) {
        var _a, _b, _c;
        if (!aNode) {
          return false;
        }
        const lName =
          ((_a = aNode.tagName) === null || _a === void 0
            ? void 0
            : _a.toLowerCase()) || '';
        const lType =
          ((_c =
            (_b = aNode.type) === null || _b === void 0
              ? void 0
              : _b.toLowerCase) === null || _c === void 0
            ? void 0
            : _c.call(_b)) || '';
        const lInputConcerne =
          (lName === 'input' &&
            lType !== 'checkbox' &&
            lType !== 'radio' &&
            lType !== 'button') ||
          lName === 'textarea';
        if (lInputConcerne) {
          return true;
        }
        if (lName === 'a' && aNode.hasAttribute('href')) {
          return true;
        }
        if (lName === 'img' && aNode.hasAttribute('src')) {
          return true;
        }
        return false;
      }
      add(aLibelle, aActif, aCallback, aExtend) {
        this._add(aLibelle, aActif, aCallback, aExtend);
        return this;
      }
      addCommande(ANumeroCommande, ALibelle, AActif, aData, aCallbackAfficher) {
        return this._add(
          ALibelle,
          AActif,
          null,
          undefined,
          ANumeroCommande,
          aData,
          aCallbackAfficher,
        );
      }
      addTitre(aLibelle) {
        const lElement = new ObjetElement_1.ObjetElement(
          aLibelle,
          null,
          EGenreLigneMenu.Titre,
        );
        this._addElement(lElement);
        return lElement;
      }
      addSousMenu(aLibelle, aInitialisationSousMenu, aParametres) {
        const lElement = ObjetElement_1.ObjetElement.create({
          Libelle: aLibelle,
          Numero: null,
          Genre: EGenreLigneMenu.Deploiement,
          _initSousMenu: aInitialisationSousMenu,
          parametresSousMenu: aParametres,
        });
        this._addElement(lElement);
        return lElement;
      }
      addSelecFile(aLibelle, aExtend, aActif) {
        if (!aExtend || !aExtend.getOptionsSelecFile || !aExtend.addFiles) {
        }
        this._add(
          aLibelle,
          aActif !== false,
          null,
          $.extend({ estSelecFile: true }, aExtend),
        );
        return this;
      }
      addSeparateur() {
        delete this._prochaineCommandeAvecSeparateur;
        if (this.ListeLignes.count() > 0) {
          this.ListeLignes.addElement(
            new ObjetElement_1.ObjetElement('', -1, EGenreLigneMenu.Separateur),
          );
        }
      }
      getListeLignes() {
        return this.ListeLignes;
      }
      free() {
        if (!this.isDestroyed()) {
          super.free();
          this.fermer();
        }
      }
      _add(
        aLibelle,
        aActif,
        aCallback,
        aExtend,
        aNumeroCommande,
        aData,
        aCallbackAfficher,
      ) {
        const lElement = ObjetElement_1.ObjetElement.create({
          Libelle: Array.isArray(aLibelle) ? '' : aLibelle,
          tableauLibelles: Array.isArray(aLibelle) ? aLibelle : undefined,
          Numero: aNumeroCommande,
          Genre: EGenreLigneMenu.Commande,
          actif: aActif !== null && aActif !== void 0 ? aActif : true,
          data: aData,
          callbackAfficher: aCallbackAfficher,
          callbackValidation: null,
          setCallback: (aCallback) => {
            lElement.callbackValidation = aCallback;
            return lElement;
          },
        });
        this._addElement(lElement);
        if (aCallback && lElement.setCallback) {
          lElement.setCallback(aCallback);
        }
        if (aExtend) {
          Object.assign(lElement, aExtend);
        }
        return lElement;
      }
      jsxNodeMenuContextuel(aNode) {
        const lInstance = this;
        $(aNode).on({
          keydown: function (aEvent) {
            if (aEvent.which === ToucheClavier_1.ToucheClavier.Tab) {
              aEvent.preventDefault();
              return false;
            }
          },
          keypress: function (aEvent) {
            if (
              lInstance.surKeyPress &&
              lInstance.surKeyPress(aEvent) === true
            ) {
              lInstance.fermer(true);
            }
          },
          keyup: function (aEvent) {
            const lEstToucheFleche =
              ToucheClavier_1.ToucheClavierUtil.estToucheFleche(aEvent.which);
            const lEstToucheEchap =
              aEvent.which === ToucheClavier_1.ToucheClavier.Echap;
            if (lEstToucheFleche || lEstToucheEchap) {
              if (
                lInstance.estSousMenu &&
                lInstance._pereMenu &&
                (lEstToucheEchap ||
                  aEvent.which === ToucheClavier_1.ToucheClavier.FlecheGauche)
              ) {
                lInstance._pereMenu._stopperTimeoutsSousMenus();
                lInstance.fermer();
                delete lInstance._pereMenu._instanceSousMenu;
              } else {
                if (lEstToucheEchap) {
                  lInstance.fermer(true);
                  lInstance.callback.appel();
                }
                if (lEstToucheFleche) {
                  lInstance.navigationClavier(this.id);
                }
              }
              ObjetNavigateur_1.Navigateur.stopperEvenement(
                aEvent.originalEvent,
              );
            } else if (lInstance.surKeyUp) {
              if (lInstance.surKeyUp(aEvent) === true) {
                lInstance.fermer(true);
              }
            }
          },
        });
      }
      jsxMenuEventOut() {
        const lNodesExclus = [];
        let lCpt = 0;
        let lSousMenu = this._instanceSousMenu;
        while (lSousMenu && lCpt < 20) {
          const lNode = ObjetHtml_1.GHtml.getElement(lSousMenu.Nom);
          if (lNode) {
            lNodesExclus.push(lNode);
          }
          lSousMenu = lSousMenu._instanceSousMenu;
          lCpt += 1;
        }
        lCpt = 0;
        let lPereMenu = this._pereMenu;
        while (lPereMenu && lCpt < 20) {
          const lNode = ObjetHtml_1.GHtml.getElement(lPereMenu.Nom);
          if (lNode) {
            lNodesExclus.push(lNode);
          }
          lPereMenu = lPereMenu._pereMenu;
          lCpt += 1;
        }
        return {
          nodesExclus: lNodesExclus,
          callback: () => {
            this.fermer();
          },
        };
      }
      construireAffichage() {
        this._callbacksAfficherLignes = [];
        const lInfosMenu = {
          nbColonnesTexte: 1,
          nbColonnes: 1,
          avecDeploiement: false,
        };
        this.ListeLignes.parcourir((D) => {
          if (D.getGenre() !== EGenreLigneMenu.Separateur) {
            if (D.tableauLibelles) {
              lInfosMenu.nbColonnesTexte = Math.max(
                lInfosMenu.nbColonnesTexte,
                D.tableauLibelles.length,
              );
            }
          }
          if (D.getGenre() === EGenreLigneMenu.Deploiement) {
            lInfosMenu.avecDeploiement = true;
          }
          if (this.options.estModeMixte === true) {
            if (
              D.getGenre() === EGenreLigneMenu.Commande &&
              D.typeAffEnModeMixte ===
                Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.bouton
            ) {
              D.afficher = null;
            }
          }
        });
        lInfosMenu.nbColonnes =
          lInfosMenu.nbColonnesTexte + (lInfosMenu.avecDeploiement ? 1 : 0);
        return IE.jsx.str(
          'div',
          {
            id: this.IdNomMenuContextuel,
            role: 'menu',
            ie_node: this.jsxNodeMenuContextuel.bind(this),
            ie_eventout: this.jsxMenuEventOut.bind(this),
            class: [
              ObjetMenuContextuel_css_1.SObjetMenuContextuel
                .ObjetMenuContexutel,
            ],
            tabindex: '-1',
          },
          IE.jsx.str('ul', { role: 'presentation' }, (H) => {
            this.ListeLignes.parcourir((aLigne, aIndex) => {
              if (aLigne && aLigne.afficher !== null) {
                H.push(this._composeLigne(aLigne, aIndex, lInfosMenu));
              }
            });
          }),
        );
      }
      recupererDonnees() {
        ObjetStyle_1.GStyle.setDisplay(this.Nom, false);
      }
      contientAuMoinsUneLigne() {
        const lResult = !!this.ListeLignes && this.ListeLignes.count() > 0;
        if (lResult && this.options.annulerSiPasDeCommandesActives) {
          let lAvecLigneActives = false;
          this.ListeLignes.parcourir((aLigne) => {
            if (aLigne.actif !== false) {
              lAvecLigneActives = true;
              return false;
            }
          });
          if (!lAvecLigneActives) {
            return false;
          }
        }
        return lResult;
      }
      vider() {
        this.ListeLignes = new ObjetListeElements_1.ObjetListeElements();
        delete this._prochaineCommandeAvecSeparateur;
        if (this.EstAffiche) {
          this.fermer();
        }
      }
      getEstAfficher() {
        return this.EstAffiche;
      }
      avecSeparateurSurSuivant() {
        this._prochaineCommandeAvecSeparateur = true;
      }
      afficher(AId, aEstUnSousMenu) {
        var _a;
        var _b, _c;
        if (!this.EstAffiche) {
          if (!this.contientAuMoinsUneLigne()) {
            IE.log.addLog('Afficher : aucun élément à afficher');
            return;
          }
          ObjetHtml_1.GHtml.setHtml(this.Nom, this.construireAffichage(), {
            instance: this,
          });
          ObjetStyle_1.GStyle.setDisplay(this.Nom, true);
          if (AId) {
            if (typeof AId === 'string' || ObjetHtml_1.GHtml.estElement(AId)) {
              if (aEstUnSousMenu) {
                ObjetPosition_1.GPosition.placerFiche(this.Nom, AId, null, {
                  x: 0,
                  y: 0,
                });
              } else {
                ObjetPosition_1.GPosition.placerFiche(this.Nom, AId);
              }
            } else if ('type' in AId && 'timeStamp' in AId) {
              if (!AId.pageX && !AId.pageY) {
                if (ObjetHtml_1.GHtml.estElement(AId.target)) {
                  ObjetPosition_1.GPosition.placerFiche(this.Nom, AId.target);
                } else {
                  ObjetPosition_1.GPosition.placer(
                    this.Nom,
                    ObjetNavigateur_1.Navigateur.pointerX + 5,
                    ObjetNavigateur_1.Navigateur.pointerY + 5,
                  );
                }
              } else {
                ObjetPosition_1.GPosition.placer(
                  this.Nom,
                  ((_b = AId.pageX) !== null && _b !== void 0 ? _b : 0) + 5,
                  ((_c = AId.pageY) !== null && _c !== void 0 ? _c : 0) + 5,
                );
              }
            } else if (
              MethodesObjet_1.MethodesObjet.isNumber(AId.x) &&
              MethodesObjet_1.MethodesObjet.isNumber(AId.y)
            ) {
              ObjetPosition_1.GPosition.placer(this.Nom, AId.x, AId.y);
            }
          } else {
            ObjetPosition_1.GPosition.placer(
              this.Nom,
              ObjetNavigateur_1.Navigateur.pointerX + 5,
              ObjetNavigateur_1.Navigateur.pointerY + 5,
            );
          }
          this.EstAffiche = true;
          GestionnaireModale_1.GestionnaireModale.abonnementPremierPlan(
            true,
            this.Nom,
          );
          GestionnaireModale_1.GestionnaireModale.enPremierPlan(this.Nom);
          GestionnaireModale_1.GestionnaireModale.abonnementBlocageInterface(
            true,
            this.Nom,
            this.options.prioriteBlocageAbonnement,
          );
          this._focusPrecedent = document.activeElement;
          this.focusSurPremierElement();
          if (this._callbacksAfficherLignes) {
            this._callbacksAfficherLignes.forEach((aCallback) => {
              if (aCallback) {
                aCallback();
              }
            });
          }
        }
      }
      fermer(aToutFermer) {
        if (this.EstAffiche) {
          this.EstAffiche = false;
          this._stopperTimeoutsSousMenus();
          if (this._instanceSousMenu) {
            this._instanceSousMenu.fermer();
            delete this._instanceSousMenu;
          }
          try {
            if (
              this._focusPrecedent &&
              this._focusPrecedent.focus &&
              $(this._focusPrecedent).length === 1
            ) {
              this._focusPrecedent.focus({
                preventScroll: this.options.preventScrollSurRestaurationFocus,
              });
              this._focusPrecedent = null;
            }
          } catch (e) {}
          ObjetStyle_1.GStyle.setDisplay(this.Nom, false);
          this.effacer();
          this.resetTableauxNavigation();
          this.IdPrecedent = '';
          GestionnaireModale_1.GestionnaireModale.abonnementPremierPlan(
            false,
            this.Nom,
          );
          GestionnaireModale_1.GestionnaireModale.abonnementBlocageInterface(
            false,
            this.Nom,
          );
          if (this.destructionSurFermeture) {
            this.free();
          }
          if (aToutFermer && this._pereMenu) {
            this._pereMenu.fermer(true);
          }
          IEHtml_1.IEHtml.refresh();
        }
      }
      getZIndex() {
        return 1200;
      }
      surValidation(aPositionLigne) {
        const lLigne = this.ListeLignes.get(aPositionLigne);
        if (!lLigne) {
          return;
        }
        if (lLigne.getGenre() !== EGenreLigneMenu.Deploiement) {
          this.fermer(true);
          if (
            lLigne &&
            MethodesObjet_1.MethodesObjet.isFunction(lLigne.callbackValidation)
          ) {
            lLigne.callbackValidation.call(this.Pere || this, lLigne);
          } else {
            this.callback.appel(lLigne);
          }
        }
      }
      estObjetGraphiqueFenetre() {
        return true;
      }
      _ouvertureSousMenu(aLigne, aAvecDelai, aNode) {
        if (aLigne && this._instanceSousMenu) {
          clearTimeout(this._instanceSousMenu._timeoutFermetureSousMenu);
          this._instanceSousMenu.fermer();
          delete this._instanceSousMenu;
        }
        this._stopperTimeoutsSousMenus();
        if (this._avecSousMenu(aLigne)) {
          this._timeoutOuvertureSousMenu = setTimeout(
            () => {
              this._afficherSousMenu(aLigne, aNode);
            },
            aAvecDelai ? c_delaiOuvertureSousMenu : 0,
          );
        }
      }
      _stopperTimeoutsSousMenus() {
        if (this._timeoutFermetureSousMenu) {
          clearTimeout(this._timeoutFermetureSousMenu);
        }
        if (this._timeoutOuvertureSousMenu) {
          clearTimeout(this._timeoutOuvertureSousMenu);
        }
        this._timeoutFermetureSousMenu = undefined;
        this._timeoutOuvertureSousMenu = undefined;
        if (this._pereMenu) {
          this._pereMenu._stopperTimeoutsSousMenus();
        }
      }
      _avecSousMenu(aElement) {
        return (
          aElement &&
          aElement.getGenre() === EGenreLigneMenu.Deploiement &&
          !!aElement._initSousMenu
        );
      }
      _afficherSousMenu(aElementSousMenu, aNode) {
        var _a;
        const lThis = this;
        this._instanceSousMenu = ObjetMenuContextuel.afficher({
          pere: this,
          evenement: function (aLigne) {
            var _a;
            if (
              MethodesObjet_1.MethodesObjet.isFunction(
                (_a = aElementSousMenu.parametresSousMenu) === null ||
                  _a === void 0
                  ? void 0
                  : _a.callback,
              )
            ) {
              aElementSousMenu.parametresSousMenu.callback.call(
                this.Pere || this,
                aLigne,
              );
            } else {
              lThis.callback.appel(aLigne);
            }
          },
          initCommandes: aElementSousMenu._initSousMenu,
          affichageSurInitCommandes: true,
          options:
            ((_a = aElementSousMenu.parametresSousMenu) === null ||
            _a === void 0
              ? void 0
              : _a.options) || this.options,
          surKeyUp: this.surKeyUp,
          surKeyPress: this.surKeyPress,
        });
        if (this._instanceSousMenu) {
          this._instanceSousMenu._pereMenu = this;
          this._instanceSousMenu.estSousMenu = true;
          this._instanceSousMenu.afficher(aNode, true);
        }
      }
      _composeLigne(aLigne, aPositionLigne, aInfosMenu) {
        switch (aLigne.getGenre()) {
          case EGenreLigneMenu.Separateur:
            return this._composeSeparateur();
          case EGenreLigneMenu.Commande:
          case EGenreLigneMenu.Deploiement:
            return this._composeTexte(aLigne, aPositionLigne, aInfosMenu);
          case EGenreLigneMenu.Titre:
            return this._composeTitre(aLigne);
        }
        return '';
      }
      _getIdCelluleTexte(aPositionLigne) {
        return this.Nom + '_' + aPositionLigne;
      }
      _composeTitre(aLigne) {
        const H = [];
        H.push(
          IE.jsx.str(
            'li',
            {
              class: ObjetMenuContextuel_css_1.SObjetMenuContextuel.titre,
              role: 'presentation',
            },
            IE.jsx.str('h5', null, aLigne.getLibelle()),
          ),
        );
        return H.join('');
      }
      _composeSeparateur() {
        const H = [];
        H.push(
          IE.jsx.str('li', {
            class: ObjetMenuContextuel_css_1.SObjetMenuContextuel.separateur,
            role: 'separator',
          }),
        );
        return H.join('');
      }
      jsxNodeLigne(aLigne, aPositionLigne, aActif, aNode) {
        const lInstance = this;
        $(aNode).on({
          mousedown: function (aEvent) {
            if (aLigne.getGenre() === EGenreLigneMenu.Deploiement) {
              aEvent.stopPropagation();
              return false;
            }
          },
          pointerdown(aEvent) {
            if (lInstance._avecSousMenu(aLigne)) {
              lInstance._ouvertureSousMenu(aLigne, false, this);
              aEvent.stopPropagation();
              return false;
            }
          },
          mouseenter: function () {
            lInstance._ouvertureSousMenu(aLigne, true, this);
          },
          mouseover: function () {
            if (lInstance.estSousMenu) {
              if (lInstance._timeoutFermetureSousMenu) {
                clearTimeout(lInstance._timeoutFermetureSousMenu);
              }
              lInstance._timeoutFermetureSousMenu = undefined;
            }
          },
          mouseleave: function () {
            lInstance._stopperTimeoutsSousMenus();
            if (lInstance._instanceSousMenu) {
              lInstance._instanceSousMenu._timeoutFermetureSousMenu =
                setTimeout(() => {
                  lInstance._instanceSousMenu.fermer();
                  delete lInstance._instanceSousMenu;
                }, c_delaiFermetureSousMenu);
            }
            if (lInstance.estSousMenu) {
              lInstance._timeoutFermetureSousMenu = setTimeout(() => {
                let lRacineSousMenu = lInstance;
                let i = 0;
                while (
                  lRacineSousMenu._pereMenu &&
                  lRacineSousMenu._pereMenu.estSousMenu &&
                  i < 100
                ) {
                  lRacineSousMenu = lRacineSousMenu._pereMenu;
                  i++;
                }
                lRacineSousMenu.fermer();
              }, c_delaiFermetureSousMenu);
            }
          },
          click: function () {
            if (aActif && aLigne.getGenre() !== EGenreLigneMenu.Deploiement) {
              if (aLigne.surValidationElement) {
                aLigne.surValidationElement();
              } else {
                lInstance.surValidation(aPositionLigne);
              }
            }
          },
          keyup: function (aEvent) {
            var _a, _b, _c;
            lInstance.navigationClavier(this.id);
            if (
              aEvent.which === ToucheClavier_1.ToucheClavier.FlecheBas ||
              aEvent.which === ToucheClavier_1.ToucheClavier.FlecheHaut
            ) {
              aEvent.stopPropagation();
              return;
            }
            const lPourSousMenu =
              lInstance._avecSousMenu(aLigne) && !lInstance._instanceSousMenu;
            if (
              ToucheClavier_1.ToucheClavierUtil.estEventRetourChariot(aEvent) ||
              ToucheClavier_1.ToucheClavierUtil.estEventEspace(aEvent)
            ) {
              if (lPourSousMenu) {
                lInstance._ouvertureSousMenu(aLigne, false, this);
              } else if (aActif) {
                if (aLigne.surValidationElement) {
                  aLigne.surValidationElement();
                } else {
                  lInstance.surValidation(aPositionLigne);
                }
              }
            } else if (
              aEvent.which === ToucheClavier_1.ToucheClavier.FlecheDroite
            ) {
              if (lPourSousMenu) {
                lInstance._ouvertureSousMenu(aLigne, false, this);
              }
            } else if (
              aEvent.which === ToucheClavier_1.ToucheClavier.FlecheGauche
            ) {
              if (
                (_a = lInstance._pereMenu) === null || _a === void 0
                  ? void 0
                  : _a._instanceSousMenu
              ) {
                (_b = lInstance._pereMenu) === null || _b === void 0
                  ? void 0
                  : _b._stopperTimeoutsSousMenus();
                lInstance.fermer();
                (_c = lInstance._pereMenu) === null || _c === void 0
                  ? true
                  : delete _c._instanceSousMenu;
              }
            }
          },
        });
      }
      jsxModeleSelecFile(aLigne, aPositionLigne, aActif) {
        const lInstance = this;
        return {
          getOptionsSelecFile(aGetSelecFile) {
            var _a;
            aLigne.surValidationElement = aGetSelecFile();
            return Object.assign(
              {
                surOuvertureSelecteur: function () {
                  lInstance._stopperTimeoutsSousMenus();
                  setTimeout(() => {
                    lInstance._stopperTimeoutsSousMenus();
                  }, c_delaiFermetureSousMenu);
                },
              },
              (_a = aLigne.getOptionsSelecFile) === null || _a === void 0
                ? void 0
                : _a.call(aLigne),
            );
          },
          addFiles(aParams) {
            var _a;
            const lResult =
              aLigne && aActif
                ? (_a = aLigne.addFiles) === null || _a === void 0
                  ? void 0
                  : _a.call(aLigne, aParams, aLigne, aPositionLigne)
                : false;
            lInstance.surValidation(aPositionLigne);
            return lResult;
          },
          getDisabled() {
            return !aActif;
          },
        };
      }
      _composeTexte(aLigne, aPositionLigne, aInfosMenu) {
        var _a;
        const lId = this._getIdCelluleTexte(aPositionLigne);
        const lEstDeploiement =
          aLigne.getGenre() === EGenreLigneMenu.Deploiement;
        const lLibelles =
          (_a = aLigne.tableauLibelles) !== null && _a !== void 0
            ? _a
            : [aLigne.getLibelle()];
        const lNbColonnes = Math.max(
          lLibelles.length,
          aInfosMenu.nbColonnesTexte,
        );
        let lNumeroColonne;
        let lActif = aLigne.actif;
        if (lActif === null || lActif === undefined) {
          lActif = true;
        }
        lActif = !!lActif;
        if (aLigne.callbackAfficher) {
          this._callbacksAfficherLignes.push(() => {
            var _a;
            (_a = aLigne.callbackAfficher) === null || _a === void 0
              ? void 0
              : _a.call(this.Pere || this, lId, lActif, aLigne);
          });
        }
        const lHtml = IE.jsx.str(
          'li',
          {
            id: lId,
            ie_node: this.jsxNodeLigne.bind(
              this,
              aLigne,
              aPositionLigne,
              lActif,
            ),
            role: 'menuitem',
            tabindex: '-1',
            'aria-disabled': lActif === true ? false : 'true',
            'aria-haspopup':
              aInfosMenu.avecDeploiement && lEstDeploiement
                ? 'true'
                : aLigne.ariaHasPopup || false,
            class: [
              lActif && !aLigne.visuInactif
                ? ObjetMenuContextuel_css_1.SObjetMenuContextuel.activeColor
                : ObjetMenuContextuel_css_1.SObjetMenuContextuel.inactiveColor,
              lActif && !aLigne.visuInactif
                ? IEHtml_Ripple_css_1.SIEHtmlRipple.ieRipple
                : '',
            ],
            title: aLigne.title || false,
            ie_model:
              aLigne.estSelecFile && lActif
                ? this.jsxModeleSelecFile.bind(
                    this,
                    aLigne,
                    aPositionLigne,
                    lActif,
                  )
                : false,
            ie_selecfile: aLigne.estSelecFile && lActif,
          },
          (H) => {
            if (aLigne.iconeSvg) {
            }
            H.push(
              aLigne.imageFormate
                ? IE.jsx.str(
                    'div',
                    {
                      class:
                        ObjetMenuContextuel_css_1.SObjetMenuContextuel
                          .imgContain,
                      'aria-hidden': 'true',
                    },
                    aLigne.image ? aLigne.image : '',
                  )
                : IE.jsx.str(
                    'div',
                    {
                      class: [
                        ObjetMenuContextuel_css_1.SObjetMenuContextuel
                          .mcIconContain,
                        aLigne.libelleIcone
                          ? ObjetMenuContextuel_css_1.SObjetMenuContextuel
                              .iconText
                          : '',
                      ],
                      'aria-hidden': 'true',
                    },
                    aLigne.iconeSvg,
                    aLigne.libelleIcone,
                    aLigne.image &&
                      ObjetImage_1.GImage.compose(
                        aLigne.image,
                        aLigne.largeurImage ? aLigne.largeurImage : 16,
                      ),
                  ),
            );
            for (
              lNumeroColonne = 0;
              lNumeroColonne < lNbColonnes;
              lNumeroColonne++
            ) {
              let lInfoLibelle = '';
              if (lNumeroColonne < lLibelles.length) {
                lInfoLibelle = IE.jsx.str(
                  'div',
                  {
                    style: {
                      'max-width': this.options.largeurMaxLibelle
                        ? this.options.largeurMaxLibelle
                        : undefined,
                    },
                    class: [
                      ObjetMenuContextuel_css_1.SObjetMenuContextuel.libelle,
                    ],
                    ie_ellipsis:
                      !!this.options.largeurMaxLibelle && !IE.estMobile,
                  },
                  lLibelles[lNumeroColonne],
                );
              }
              H.push(
                IE.jsx.str(
                  'div',
                  {
                    class:
                      ObjetMenuContextuel_css_1.SObjetMenuContextuel
                        .libelleContain,
                  },
                  lNumeroColonne === 0
                    ? IE.jsx.str(
                        'div',
                        {
                          id: lId + '_',
                          class:
                            ObjetMenuContextuel_css_1.SObjetMenuContextuel
                              .libelle,
                        },
                        lInfoLibelle,
                      )
                    : lInfoLibelle,
                  aInfosMenu.avecDeploiement &&
                    lEstDeploiement &&
                    lNumeroColonne === lNbColonnes - 1 &&
                    IE.jsx.str('i', {
                      id: lId + '_flechedroite',
                      class: [
                        ObjetMenuContextuel_css_1.SObjetMenuContextuel
                          .btnDeploiement,
                        fonts_css_1.SF.icon_fleche_num,
                      ],
                      'aria-hidden': 'true',
                    }),
                ),
              );
            }
          },
        );
        if (this.IdPrecedent === '') {
          this.ajouterAuTableaux(
            this.IdPremierElement,
            lId,
            null,
            Enumere_Direction_1.EGenreDirection.SensNormal,
          );
        } else {
          this.ajouterAuTableaux(
            this.IdPrecedent,
            lId,
            null,
            Enumere_Direction_1.EGenreDirection.DeuxSenses,
          );
        }
        this.IdPrecedent = lId;
        return lHtml;
      }
      _addElement(aElement) {
        if (this._prochaineCommandeAvecSeparateur) {
          this.addSeparateur();
        }
        this.ListeLignes.add(aElement);
      }
    }
    exports.ObjetMenuContextuel = ObjetMenuContextuel;
    Divers_1.DiversLib.abonnerLoadingPage(() => {
      document.addEventListener('contextmenu', (aEvent) => {
        var _a, _b;
        if (
          document.querySelector(
            `.${ObjetMenuContextuel_css_1.SObjetMenuContextuel.ObjetMenuContexutel}`,
          ) &&
          !((_b =
            (_a = aEvent.target) === null || _a === void 0
              ? void 0
              : _a.closest) === null || _b === void 0
            ? void 0
            : _b.call(
                _a,
                `.${ObjetMenuContextuel_css_1.SObjetMenuContextuel.ObjetMenuContexutel}`,
              ))
        ) {
          if (IE.estMobile) {
            return true;
          }
          if (ObjetMenuContextuel.forcerMenuContextuelNatif(aEvent.target)) {
            return true;
          }
          aEvent.preventDefault();
          return false;
        }
        return true;
      });
    });
  },
  fn: 'objetmenucontextuel.js',
});