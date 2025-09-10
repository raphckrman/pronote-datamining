IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetMenuContextuel = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const ObjetStyle_1 = require('ObjetStyle');
    const Enumere_Direction_1 = require('Enumere_Direction');
    const Enumere_Event_1 = require('Enumere_Event');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetImage_1 = require('ObjetImage');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const GestionnaireModale_1 = require('GestionnaireModale');
    const ToucheClavier_1 = require('ToucheClavier');
    const Enumere_MenuCtxModeMixte_1 = require('Enumere_MenuCtxModeMixte');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const AccessApp_1 = require('AccessApp');
    const ObjetMenuContextuel_css_1 = require('ObjetMenuContextuel.css');
    const IEHtml_1 = require('IEHtml');
    const EGenreLigneMenu = {
      Separateur: 0,
      Commande: 1,
      Deploiement: 2,
      Titre: 3,
    };
    const c_delaiFermetureSousMenu = 300;
    const c_delaiOuvertureSousMenu = 200;
    class ObjetMenuContextuel extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.ListeLignes = new ObjetListeElements_1.ObjetListeElements();
        this._callbacksAfficherLignes = [];
        this.IdNomMenuContextuel = this.Nom + '_MenuContextuel';
        this.IdPremierElement = this.IdNomMenuContextuel;
        this.IdPrecedent = '';
        this.ajouterEvenementGlobal(
          Enumere_Event_1.EEvent.SurPreResize,
          this.fermer,
        );
        this.options = {
          largeurMin: null,
          largeurMaxLibelle: 400,
          largeurColonneGauche: 25,
          couleurFond: (0, AccessApp_1.getApp)().getCouleur().blanc,
          couleurBordureDroiteImage: (0, AccessApp_1.getApp)().getCouleur()
            .bordure,
          heightLigne: 16,
          preventScrollSurRestaurationFocus: false,
          estModeMixte: false,
        };
      }
      static afficher(aParametres) {
        const lParametres = Object.assign(
          {
            pere: null,
            evenement: null,
            initCommandes: null,
            affichageSurInitCommandes: false,
            id: null,
            options: null,
          },
          aParametres,
        );
        if (!lParametres.pere) {
          return null;
        }
        if (!lParametres.initCommandes) {
          return null;
        }
        const lInstance = new ObjetMenuContextuel({
          pere: lParametres.pere,
          evenement: lParametres.evenement,
        });
        lInstance.destructionSurFermeture = true;
        lInstance.setOptions(lParametres.options);
        IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(lInstance.getNom());
        $('#' + lInstance.getNom().escapeJQ()).on('destroyed', () => {
          if (lParametres.destroy) {
            lParametres.destroy();
            IEHtml_1.default.refresh();
          }
          lInstance.free();
        });
        lParametres.initCommandes.call(lParametres.pere, lInstance);
        if (!lInstance.contientAuMoinsUneLigne()) {
          return;
        }
        lInstance.surKeyUp = lParametres.surKeyUp;
        lInstance.surKeyPress = lParametres.surKeyPress;
        if (!lParametres.affichageSurInitCommandes) {
          lInstance.setDonnees(lParametres.id);
        }
        return lInstance;
      }
      add(aLibelle, aActif, aCallback, aExtend) {
        const lElement = this.addCommande(0, aLibelle, aActif);
        lElement.setCallback(aCallback);
        if (aExtend) {
          $.extend(lElement, aExtend);
        }
        return this;
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
        const lElement = new ObjetElement_1.ObjetElement(
          aLibelle,
          null,
          EGenreLigneMenu.Deploiement,
        );
        lElement._initSousMenu = aInitialisationSousMenu;
        lElement.parametresSousMenu = $.extend(
          { callback: null, options: null },
          aParametres,
        );
        this._addElement(lElement);
        return lElement;
      }
      addCommande(ANumeroCommande, ALibelle, AActif, aData, aCallbackAfficher) {
        const LElement = new ObjetElement_1.ObjetElement(
          ALibelle,
          ANumeroCommande,
          EGenreLigneMenu.Commande,
        );
        LElement.actif =
          AActif !== null && AActif !== undefined ? AActif : true;
        LElement.data = aData;
        LElement.callbackAfficher = aCallbackAfficher;
        LElement.callbackValidation = null;
        LElement.setCallback = function (aCallback) {
          this.callbackValidation = aCallback;
          return this;
        };
        this._addElement(LElement);
        return LElement;
      }
      addSelecFile(aLibelle, aExtend, aActif) {
        if (!aExtend || !aExtend.getOptionsSelecFile || !aExtend.addFiles) {
        }
        return this.add(
          aLibelle,
          aActif !== false,
          null,
          $.extend({ estSelecFile: true }, aExtend),
        );
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
      jsxNodeMenuContextuel(aNode) {
        const lInstance = this;
        $(aNode).on({
          mouseout: function () {
            if (lInstance.ligne) {
              lInstance.selectionnerLigne(false, lInstance.ligne);
            }
          },
          keydown: function (aEvent) {
            if (aEvent.which === ToucheClavier_1.ToucheClavier.Tab) {
              aEvent.preventDefault();
              lInstance.fermer(true);
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
          lNodesExclus.push(ObjetHtml_1.GHtml.getElement(lSousMenu.Nom));
          lSousMenu = lSousMenu._instanceSousMenu;
          lCpt += 1;
        }
        lCpt = 0;
        let lPereMenu = this._pereMenu;
        while (lPereMenu && lCpt < 20) {
          lNodesExclus.push(ObjetHtml_1.GHtml.getElement(lPereMenu.Nom));
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
            const lLibelle = D.getLibelle();
            if (Array.isArray(lLibelle)) {
              lInfosMenu.nbColonnesTexte = Math.max(
                lInfosMenu.nbColonnesTexte,
                lLibelle.length,
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
            'ie-node': this.jsxNodeMenuContextuel.bind(this),
            'ie-eventout': this.jsxMenuEventOut.bind(this),
            class:
              ObjetMenuContextuel_css_1.StylesObjetMenuContextuel
                .ObjetMenuContexutel,
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
      getIdCelluleTexteParCommande(aGenreCommande) {
        const lIndice = this.ListeLignes.getIndiceParNumeroEtGenre(
          aGenreCommande,
          EGenreLigneMenu.Commande,
        );
        return lIndice >= 0 ? this._getIdCelluleTexte(lIndice) : false;
      }
      recupererDonnees() {
        ObjetStyle_1.GStyle.setDisplay(this.Nom, false);
      }
      setParametres(aMinLargeur, aAfficherAbbreviation) {
        this.setOptions({
          largeurMin: aMinLargeur,
          largeurColonneGauche: aAfficherAbbreviation ? 30 : undefined,
        });
      }
      setDonnees(aID, aListeElements, aGenre, aAfficher) {
        if (aAfficher !== false) {
          this.afficher(aID);
        }
      }
      contientAuMoinsUneLigne() {
        return !!this.ListeLignes && this.ListeLignes.count() > 0;
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
      avecSeparateurSurSuivant(aAnnuler) {
        if (aAnnuler === true) {
          delete this._prochaineCommandeAvecSeparateur;
        } else {
          this._prochaineCommandeAvecSeparateur = true;
        }
        return this;
      }
      activerCommande(ANumeroCommande, AActiver) {
        const LElement = this.ListeLignes.getElementParNumeroEtGenre(
          ANumeroCommande,
          EGenreLigneMenu.Commande,
        );
        if (LElement) {
          LElement.actif = AActiver;
          ObjetHtml_1.GHtml.setHtml(this.Nom, this.construireAffichage(), {
            controleur: this.controleur,
          });
        }
      }
      setLibelleCommande(ANumeroCommande, ALibelle) {
        const LElement = this.ListeLignes.getElementParNumeroEtGenre(
          ANumeroCommande,
          EGenreLigneMenu.Commande,
        );
        if (LElement) {
          LElement.Libelle = ALibelle;
          ObjetHtml_1.GHtml.setHtml(this.Nom, this.construireAffichage(), {
            controleur: this.controleur,
          });
        }
      }
      afficher(AId, aEstUnSousMenu) {
        if (!this.EstAffiche) {
          this.ligne = null;
          if (!this.contientAuMoinsUneLigne()) {
            IE.log.addLog('Afficher : aucun élément à afficher');
            return;
          }
          ObjetHtml_1.GHtml.setHtml(this.Nom, this.construireAffichage(), {
            controleur: this.controleur,
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
                  AId.pageX + 5,
                  AId.pageY + 5,
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
          IEHtml_1.default.refresh();
        }
      }
      surSelection(aId, aActif, aPositionLigne) {
        if (this.ligne) {
          this.selectionnerLigne(false, this.ligne);
        }
        this.ligne = this.ListeLignes.get(aPositionLigne);
        this.ligne.id = aId;
        this.ligne.actif = aActif;
        this.selectionnerLigne(true, this.ligne);
      }
      selectionnerLigne(aSelectionner, aLigne) {
        if (!aLigne) {
          return;
        }
        ObjetHtml_1.GHtml.modifierClass(
          aLigne.id,
          aSelectionner ? 'no-focus' : 'on-focus',
          aSelectionner ? 'on-focus' : 'no-focus',
        );
      }
      selectionnerLigneParPosition(aId, aSelectionner, aPosition) {
        const lLigne = this.ListeLignes.get(aPosition);
        lLigne.id = aId;
        lLigne.actif = true;
        this.selectionnerLigne(aSelectionner, lLigne);
      }
      getZIndex() {
        return 1200;
      }
      surValidation(aPositionLigne) {
        this.ligne = this.ListeLignes.get(aPositionLigne);
        this.ligne.id = this._getIdCelluleTexte(aPositionLigne);
        if (this.ligne.getGenre() !== EGenreLigneMenu.Deploiement) {
          this.fermer(true);
          if (
            this.ligne &&
            MethodesObjet_1.MethodesObjet.isFunction(
              this.ligne.callbackValidation,
            )
          ) {
            this.ligne.callbackValidation.call(this.Pere || this, this.ligne);
          } else {
            this.callback.appel(this.ligne);
          }
        }
      }
      estObjetGraphiqueFenetre() {
        return true;
      }
      _ouvertureSousMenu(aElement, aAvecDelai) {
        if (aElement && this._instanceSousMenu) {
          clearTimeout(this._instanceSousMenu._timeoutFermetureSousMenu);
          this._instanceSousMenu.fermer();
          delete this._instanceSousMenu;
        }
        this._stopperTimeoutsSousMenus();
        if (this._avecSousMenu(aElement)) {
          this._timeoutOuvertureSousMenu = setTimeout(
            () => {
              this._afficherSousMenu(aElement);
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
        this._timeoutFermetureSousMenu = null;
        this._timeoutOuvertureSousMenu = null;
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
      _afficherSousMenu(aElementSousMenu) {
        const lThis = this;
        this._instanceSousMenu = ObjetMenuContextuel.afficher({
          pere: this,
          evenement: function (aLigne) {
            if (
              MethodesObjet_1.MethodesObjet.isFunction(
                aElementSousMenu.parametresSousMenu.callback,
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
          options: aElementSousMenu.parametresSousMenu.options || this.options,
          surKeyUp: this.surKeyUp,
          surKeyPress: this.surKeyPress,
        });
        if (this._instanceSousMenu) {
          this._instanceSousMenu._pereMenu = this;
          this._instanceSousMenu.estSousMenu = true;
          this._instanceSousMenu.afficher(aElementSousMenu.id, true);
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
      }
      _getIdCelluleTexte(aPositionLigne) {
        return this.Nom + '_' + aPositionLigne;
      }
      _composeTitre(aLigne) {
        const H = [];
        H.push(
          '<li class="titre" role="presentation">',
          '<h5>',
          aLigne.getLibelle(),
          '</h5>',
          '</li>',
        );
        return H.join('');
      }
      _composeSeparateur() {
        const H = [];
        H.push(IE.jsx.str('li', { class: 'separateur', role: 'separator' }));
        return H.join('');
      }
      jsxNodeLigne(aLigne, aPositionLigne, aActif, aNode) {
        const lInstance = this;
        $(aNode).on({
          focus() {
            lInstance.selectionnerLigneParPosition(
              this.id,
              true,
              aPositionLigne,
            );
          },
          blur() {
            lInstance.selectionnerLigneParPosition(
              this.id,
              false,
              aPositionLigne,
            );
          },
          mousedown: function (aEvent) {
            if (aLigne.getGenre() === EGenreLigneMenu.Deploiement) {
              aEvent.stopPropagation();
              return false;
            }
          },
          pointerdown(aEvent) {
            if (aEvent.pointerType === 'touch') {
              lInstance.surSelection(this.id, aActif, aPositionLigne);
            }
            if (lInstance._avecSousMenu(aLigne)) {
              lInstance.surSelection(this.id, aActif, aPositionLigne);
              lInstance._ouvertureSousMenu(aLigne, false);
              aEvent.stopPropagation();
              return false;
            }
          },
          mouseenter: function () {
            lInstance._ouvertureSousMenu(aLigne, true);
          },
          mouseover: function () {
            if (lInstance.estSousMenu) {
              if (lInstance._timeoutFermetureSousMenu) {
                clearTimeout(lInstance._timeoutFermetureSousMenu);
              }
              lInstance._timeoutFermetureSousMenu = null;
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
          mousemove() {
            lInstance.surSelection(this.id, aActif, aPositionLigne);
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
            lInstance.navigationClavier(this.id);
            if (
              ToucheClavier_1.ToucheClavierUtil.estToucheFleche(aEvent.which)
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
                lInstance._ouvertureSousMenu(aLigne, false);
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
                lInstance._ouvertureSousMenu(aLigne, false);
              }
            } else if (
              aEvent.which === ToucheClavier_1.ToucheClavier.FlecheGauche
            ) {
              lInstance._pereMenu._stopperTimeoutsSousMenus();
              lInstance.fermer();
              delete lInstance._pereMenu._instanceSousMenu;
            }
          },
        });
      }
      jsxModeleSelecFile(aLigne, aPositionLigne, aActif) {
        const lInstance = this;
        return {
          getOptionsSelecFile(aGetSelecFile) {
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
              aLigne.getOptionsSelecFile(),
            );
          },
          addFiles(aParams) {
            const lResult =
              aLigne && aActif
                ? aLigne.addFiles(aParams, aLigne, aPositionLigne)
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
        const lId = this._getIdCelluleTexte(aPositionLigne);
        const lEstDeploiement =
          aLigne.getGenre() === EGenreLigneMenu.Deploiement;
        const lLibelles = Array.isArray(aLigne.getLibelle())
          ? aLigne.getLibelle()
          : [aLigne.getLibelle()];
        const lNbColonnes = Math.max(
          lLibelles.length,
          aInfosMenu.nbColonnesTexte,
        );
        let lNumeroColonne;
        let lInfoLibelle;
        let lActif = aLigne.actif;
        if (lActif === null || lActif === undefined) {
          lActif = true;
        }
        lActif = !!lActif;
        if (aLigne.callbackAfficher) {
          this._callbacksAfficherLignes.push(() => {
            aLigne.callbackAfficher.call(
              this.Pere || this,
              lId,
              lActif,
              aLigne,
            );
          });
        }
        const lHtml = IE.jsx.str(
          'li',
          {
            id: lId,
            'ie-node': this.jsxNodeLigne.bind(
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
                ? 'active-color'
                : ' inactive-color',
            ],
            title: aLigne.title || false,
            'ie-model':
              aLigne.estSelecFile && lActif
                ? this.jsxModeleSelecFile.bind(
                    this,
                    aLigne,
                    aPositionLigne,
                    lActif,
                  )
                : false,
            'ie-selecfile': aLigne.estSelecFile && lActif,
          },
          (H) => {
            H.push(
              aLigne.imageFormate
                ? '<div class="img-contain" aria-hidden="true">' +
                    (aLigne.image ? aLigne.image : '') +
                    '</div>'
                : '<div class="mc-icon-contain" aria-hidden="true">' +
                    (aLigne.icon
                      ? '<i class="' +
                        aLigne.icon +
                        '">' +
                        (aLigne.libelleIcone || '') +
                        '</i>'
                      : '' +
                        (aLigne.image
                          ? ObjetImage_1.GImage.compose(
                              aLigne.image,
                              aLigne.largeurImage ? aLigne.largeurImage : 16,
                            )
                          : '')) +
                    '</div>',
            );
            for (
              lNumeroColonne = 0;
              lNumeroColonne < lNbColonnes;
              lNumeroColonne++
            ) {
              lInfoLibelle = [];
              if (lNumeroColonne < lLibelles.length) {
                lInfoLibelle = [
                  '<div style="',
                  (this.options.largeurMaxLibelle
                    ? 'max-width: ' + this.options.largeurMaxLibelle + 'px;'
                    : '') +
                    '" class="libelle" ' +
                    (this.options.largeurMaxLibelle && !IE.estMobile
                      ? ' ie-ellipsis'
                      : '') +
                    '>' +
                    lLibelles[lNumeroColonne] +
                    '</div>',
                ];
              }
              H.push('<div class="libelle-contain">');
              if (lNumeroColonne === 0) {
                H.push(
                  IE.jsx.str(
                    IE.jsx.fragment,
                    null,
                    IE.jsx.str(
                      'div',
                      { id: lId + '_', class: 'libelle' },
                      lInfoLibelle.join(''),
                    ),
                  ),
                );
              } else {
                H.push(lInfoLibelle.join(''));
              }
              if (aInfosMenu.avecDeploiement) {
                H.push(
                  lEstDeploiement
                    ? '<i id="' +
                        lId +
                        '_flechedroite" class="btn-deploiement icon_fleche_num" aria-hidden="true"></i>'
                    : '',
                );
              }
              H.push('</div>');
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
        this.ListeLignes.addElement(aElement);
      }
    }
    exports.ObjetMenuContextuel = ObjetMenuContextuel;
  },
  fn: 'objetmenucontextuel.js',
});