IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetreEspace = void 0;
    const _ObjetFenetre_1 = require('_ObjetFenetre');
    require('ObjetFenetre_Espace.css');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const ObjetStyle_1 = require('ObjetStyle');
    const Enumere_Event_1 = require('Enumere_Event');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetWAI_1 = require('ObjetWAI');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const GestionnaireModale_1 = require('GestionnaireModale');
    const tag_1 = require('tag');
    const ObjetChaine_1 = require('ObjetChaine');
    const uCoordonneesBackup = {};
    class ObjetFenetreEspace extends _ObjetFenetre_1._ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.Titre = '';
        this._initialiserOptionsFenetre();
        this.resetCoordonnees();
        if (this.Nom) {
          this.ajouterEvenementGlobal(
            Enumere_Event_1.EEvent.SurPreResize,
            this._preResizePositionnement,
          );
          this.ajouterEvenementGlobal(
            Enumere_Event_1.EEvent.SurPostResize,
            this._postResizePositionnement,
          );
        }
        Invocateur_1.Invocateur.abonner(
          `${GNavigateur.getEventInvocateur('pointerdown')}.capture ${GNavigateur.getEventInvocateur('keydown')}.capture`,
          (aEvent) => {
            if (
              this.optionsFenetre.fermerFenetreSurClicHorsFenetre &&
              this.EnAffichage &&
              aEvent.target &&
              !aEvent.target.closest(`#${this.Nom.escapeJQ()}`) &&
              !GestionnaireModale_1.GestionnaireModale.estJElementBloque(
                $('#' + this.Nom.escapeJQ()),
              )
            ) {
              this.fermer();
            }
          },
        );
        Object.assign(this.optionsInterne, {
          closeStart: () => {
            GestionnaireModale_1.GestionnaireModale.abonnementBlocageInterface(
              false,
              this.Nom,
            );
            if (this._interfaceEstBloquee) {
              GestionnaireModale_1.GestionnaireModale.bloquerInterface({
                bloquer: false,
                guidBlocage: this._guidBlocage,
              });
              delete this._interfaceEstBloquee;
            }
            GestionnaireModale_1.GestionnaireModale.abonnementPremierPlan(
              false,
              this.Nom,
            );
          },
          closeEnd: () => {
            ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
          },
        });
        this.getZIndex = function () {
          return 1100;
        };
      }
      detruireInstances() {
        if (!this.__surDestructionApresFermeture_) {
          this.fermer(false);
        }
      }
      setParametresGeneraux() {
        ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getNodeFenetre: function () {
            aInstance._surCreationNodeFenetre(this.node);
          },
          getDragFenetre() {
            return aInstance._getDragFenetre(aInstance);
          },
          getTitre: function () {
            return aInstance.optionsFenetre.titre
              ? MethodesObjet_1.MethodesObjet.isFunction(
                  aInstance.optionsFenetre.titre,
                )
                ? aInstance.optionsFenetre.titre() || ''
                : aInstance.optionsFenetre.titre
              : aInstance.Titre || '';
          },
          btnCroixFermeture: {
            event: function () {
              aInstance.surValidation(
                aInstance.optionsFenetre.indiceCroixFermeture,
              );
            },
          },
          avecZoneBas: function () {
            return (
              !!aInstance.composeBas() ||
              (aInstance.optionsFenetre.listeBoutons &&
                aInstance.optionsFenetre.listeBoutons.length > 0)
            );
          },
          avecBoutons: function () {
            return (
              aInstance.optionsFenetre.listeBoutons &&
              aInstance.optionsFenetre.listeBoutons.length > 0
            );
          },
          htmlRepeatBoutons: function (aBoutonRepeat) {
            let lMargin = 4;
            if (
              aBoutonRepeat.element.theme ===
                Type_ThemeBouton_1.TypeThemeBouton.primaire &&
              aBoutonRepeat.indice > 0 &&
              aBoutonRepeat.tableau[aBoutonRepeat.indice - 1] &&
              aBoutonRepeat.tableau[aBoutonRepeat.indice - 1].theme !==
                Type_ThemeBouton_1.TypeThemeBouton.primaire
            ) {
              lMargin = 8;
            }
            return aInstance.construireBouton(aBoutonRepeat, lMargin);
          },
          getDragResize() {
            return aInstance._getDragResize(aInstance, this.node);
          },
        });
      }
      construireBouton(aBoutonRepeat, aMargin) {
        return [
          '<ie-bouton',
          ' id="',
          this._getIdBoutons(aBoutonRepeat.element.index),
          '"',
          ' ie-model="fenetreBtn(bouton)" class="',
          aBoutonRepeat.element.theme &&
          MethodesObjet_1.MethodesObjet.isString(aBoutonRepeat.element.theme)
            ? aBoutonRepeat.element.theme
            : '',
          '"',
          ' style="',
          this.optionsFenetre.listeBoutonsInvisibles[
            aBoutonRepeat.element.index
          ] === true
            ? 'display:none;'
            : '',
          'margin-left:',
          aMargin,
          'px;',
          '"',
          aBoutonRepeat.element.title
            ? ObjetHtml_1.GHtml.composeAttr(
                'title',
                aBoutonRepeat.element.title,
              )
            : '',
          '>',
          '</ie-bouton>',
        ].join('');
      }
      focusSurPremierElement() {
        if (ObjetHtml_1.GHtml.elementExiste(this.IdTitre)) {
          ObjetHtml_1.GHtml.setFocus(this.IdTitre);
        } else {
        }
      }
      construireStructureAffichageAutre() {
        const lHTML = [];
        if (
          this.optionsFenetre.identConservationCoordonnees &&
          uCoordonneesBackup[this.optionsFenetre.identConservationCoordonnees]
        ) {
          this.coordonnees =
            uCoordonneesBackup[
              this.optionsFenetre.identConservationCoordonnees
            ] ||
            this.coordonnees ||
            {};
        }
        if (this.optionsFenetre.avecRetaillage && this.existeCoordonnees()) {
          if (this.coordonnees.width > 0) {
            this.optionsFenetre.largeur = this.coordonnees.width;
          }
          if (this.coordonnees.height > 0) {
            this.optionsFenetre.hauteur = this.coordonnees.height;
          }
        }
        let LStyle =
          this.optionsFenetre.largeur > 0
            ? 'width: ' + this.optionsFenetre.largeur + 'px;'
            : '';
        LStyle +=
          this.optionsFenetre.hauteur > 0
            ? 'min-height: ' + this.optionsFenetre.hauteur + 'px;'
            : this.optionsFenetre.hauteur === 'auto'
              ? ''
              : ObjetStyle_1.GStyle.composeHeight(100, '%');
        LStyle += ObjetStyle_1.GStyle.composeCouleurFond(
          this.optionsFenetre.couleurFond,
        );
        lHTML.push(
          '<span class="sr-only" tabindex="0" onfocus="' +
            this.Nom +
            '.focusSurPremierElement();"></span>',
          '<div id="',
          this.NomFenetre,
          '"',
          ' ie-node="getNodeFenetre"',
          this.optionsFenetre.avecTitre
            ? ObjetWAI_1.GObjetWAI.composeAttribut({
                genre: ObjetWAI_1.EGenreAttribut.labelledby,
                valeur: this.IdTitre,
              })
            : '',
          this.optionsFenetre.avecAriaDescribedByContenu
            ? ` aria-describedby="${this.IdContenu}"`
            : '',
          ' class="ObjetFenetre_Espace ',
          this.optionsFenetre.cssFenetre || '',
          '" tabindex="-1" role="',
          this.optionsFenetre.roleWAI || 'dialog',
          '"',
          this.optionsFenetre.modale ? ` aria-modal="true"` : '',
          '>',
          '<div id="',
          this.idFenetreContenu,
          '" class="Fenetre_Cadre ombre-cadre" style="box-sizing:border-box; ',
          LStyle,
          '">',
        );
        const lHtmlBas = this.composeBas();
        const lHtmlBoutons = this.composeBoutons();
        if (this.optionsFenetre.avecTitre) {
          lHTML.push(
            '<div class="Fenetre_Titre NePasImprimer">',
            '<h1 id="',
            this.IdTitre,
            '" class="ZoneDeplacementFenetre" ie-html="getTitre" ie-draggable="getDragFenetre" tabindex="0">',
            '</h1>',
            '<div class="cta-conteneur" ie-display="optionsFenetre.avecCroixFermeture">',
            '<ie-btnimage class="btnImageIcon as-button icon_fermeture_widget " ie-model="btnCroixFermeture" title="',
            'Fermer',
            '"></ie-btnimage>',
            '</div>',
            '</div>',
          );
        }
        const lStyleContenuFenetre = [];
        if (this.optionsFenetre.hauteurMaxContenu > 0) {
          lStyleContenuFenetre.push(
            'max-height: ' + this.optionsFenetre.hauteurMaxContenu + 'px;',
          );
        }
        if (this.optionsFenetre.largeurMin > 0) {
          lStyleContenuFenetre.push(
            'min-width: ' + this.optionsFenetre.largeurMin + 'px;',
          );
        }
        if (this.optionsFenetre.hauteurMin > 0) {
          lStyleContenuFenetre.push(
            'min-height: ' + this.optionsFenetre.hauteurMin + 'px;',
          );
        }
        lHTML.push(
          '<div id="',
          this.Nom + '_Res" class="Fenetre_Espace',
          this.optionsFenetre.avecScroll ? ' Fenetre_Scroll' : '',
          this.optionsFenetre.sansPaddingLR ? ' SansPaddingLR' : '',
          '">',
          '<div id="',
          this.IdContenu,
          '" class="Fenetre_Contenu',
          this.optionsFenetre.avecScrollY_force ? ' overflow-y-scroll' : '',
          '"',
          ' style="',
          lStyleContenuFenetre.join(''),
          '"',
          '>',
          ObjetChaine_1.GChaine.simpleHtmlToSafeHtml(this.composeContenu()),
          '</div>',
          '</div>',
        );
        lHTML.push(
          '<div ie-display="avecZoneBas" class="NePasImprimer">',
          '<div class="zone-bas">',
          lHtmlBas !== ''
            ? '<div class="zone-bas-gauche Fenetre_Bas">' + lHtmlBas + '</div>'
            : '',
          lHtmlBoutons,
          '</div>',
          '</div>',
        );
        if (this.optionsFenetre.avecRetaillage) {
          lHTML.push(
            (0, tag_1.tag)('div', {
              class: 'fenetre-resize right',
              'ie-draggable': 'getDragResize',
            }),
            (0, tag_1.tag)('div', {
              class: 'fenetre-resize bottom',
              'ie-draggable': 'getDragResize',
            }),
            (0, tag_1.tag)('div', {
              class: 'fenetre-resize left',
              'ie-draggable': 'getDragResize',
            }),
            (0, tag_1.tag)('div', {
              class: 'fenetre-resize top',
              'ie-draggable': 'getDragResize',
            }),
            (0, tag_1.tag)('div', {
              class: 'fenetre-resize coin Image_Retailler',
              'ie-draggable': 'getDragResize',
            }),
          );
        }
        lHTML.push('</div>');
        lHTML.push(
          '</div>',
          '<span class="sr-only" tabindex="0" onfocus="' +
            this.Nom +
            '.focusSurPremierElement();"></span>',
        );
        return lHTML.join('');
      }
      composeBoutons() {
        const lHTML = [];
        lHTML.push(
          '<div ie-if="avecBoutons" class="btn-conteneur">',
          '<div ie-repeat="bouton in listeBoutons" ie-html="htmlRepeatBoutons(bouton)"></div>',
          '</div>',
        );
        return lHTML.join('');
      }
      existeCoordonnees() {
        return (
          this.optionsFenetre.conserverCoordonnees &&
          this.coordonnees !== null &&
          this.coordonnees !== undefined &&
          !!(this.coordonnees.left && this.coordonnees.top)
        );
      }
      resetCoordonnees() {
        this.coordonnees = Object.assign(this.coordonnees || {}, {
          left: null,
          top: null,
          width: null,
          height: null,
        });
      }
      setCoordonnees() {
        if (!this.optionsFenetre.conserverCoordonnees) {
          return;
        }
        Object.assign(this.coordonnees || {}, {
          left: ObjetPosition_1.GPosition.getLeft(this.Nom),
          top: ObjetPosition_1.GPosition.getTop(this.Nom),
          width: this.optionsFenetre.avecRetaillage
            ? this.optionsFenetre.largeur
            : null,
          height: this.optionsFenetre.avecRetaillage
            ? this.optionsFenetre.hauteur
            : null,
        });
        if (this.optionsFenetre.identConservationCoordonnees) {
          uCoordonneesBackup[this.optionsFenetre.identConservationCoordonnees] =
            this.coordonnees;
        }
        if (this.optionsFenetre.callbackDeplacer) {
          this.optionsFenetre.callbackDeplacer(this.coordonnees);
        }
      }
      positionnerFenetre(aParams) {
        const lParams = Object.assign(
          {
            left: null,
            top: null,
            id: '',
            positionSurSouris: false,
            positionSurSourisSiAffiche: false,
            enAffichage: null,
            centrerParDefaut: true,
          },
          aParams,
        );
        if (ObjetStyle_1.GStyle.styleSheetDisabled()) {
          return;
        }
        let lEnAffichage = this.EnAffichage;
        if (lParams.enAffichage === false || lParams.enAffichage === true) {
          lEnAffichage = lParams.enAffichage;
        }
        if (this.existeCoordonnees() && ObjetPosition_1.GPosition.placer) {
          ObjetPosition_1.GPosition.placer(
            this.Nom,
            this.coordonnees.left,
            this.coordonnees.top,
          );
        } else if (
          MethodesObjet_1.MethodesObjet.isNumber(lParams.top) &&
          MethodesObjet_1.MethodesObjet.isNumber(lParams.left) &&
          ObjetPosition_1.GPosition.placer
        ) {
          ObjetPosition_1.GPosition.placer(this.Nom, lParams.left, lParams.top);
        } else if (this.optionsFenetre.idPositionnement || lParams.id) {
          ObjetPosition_1.GPosition.placerFiche(
            this.Nom,
            this.optionsFenetre.idPositionnement || lParams.id,
            lEnAffichage,
          );
        } else if (
          this.optionsFenetre.positionSurSouris ||
          lParams.positionSurSouris
        ) {
          if (!lEnAffichage || lParams.positionSurSourisSiAffiche) {
            ObjetPosition_1.GPosition.placer(
              this.Nom,
              GNavigateur.pointerX,
              GNavigateur.pointerY,
            );
          }
        } else if (lParams.centrerParDefaut) {
          ObjetPosition_1.GPosition.centrer(this.Nom);
        }
        return this;
      }
      async afficher(aHtml) {
        const lEnAffichage = this.EnAffichage;
        if (!lEnAffichage) {
          this._focusPrecedent = null;
          if (!ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
            return;
          }
          if (
            !this.optionsFenetre.bloquerFocus &&
            this.optionsFenetre.restaurerFocusSurFermeture
          ) {
            this._focusPrecedent = document.activeElement;
          }
          if (this.optionsFenetre.modale) {
            this._guidBlocage =
              GestionnaireModale_1.GestionnaireModale.bloquerInterface({
                bloquer: true,
                prioriteBlocage: this.optionsFenetre.prioriteBlocageAbonnement,
                opaciteVoile: this.optionsFenetre.opaciteVoileModale,
              });
            this._interfaceEstBloquee = true;
          }
          if (
            this.optionsFenetre.avecAbonnementPremierPlan ||
            this.optionsFenetre.modale
          ) {
            GestionnaireModale_1.GestionnaireModale.abonnementPremierPlan(
              true,
              this.Nom,
            );
            GestionnaireModale_1.GestionnaireModale.enPremierPlan(this.Nom);
          }
          if (this.optionsFenetre.avecAbonnementBlocage) {
            GestionnaireModale_1.GestionnaireModale.abonnementBlocageInterface(
              true,
              this.Nom,
              this.optionsFenetre.prioriteBlocageAbonnement,
            );
          }
          ObjetHtml_1.GHtml.setDisplay(this.Nom, true);
          Invocateur_1.Invocateur.evenement('surAffichageFenetre');
          this.EnAffichage = true;
          this.controleur.$refreshSelf(true);
          this.EnAffichage = false;
          if (aHtml) {
            ObjetHtml_1.GHtml.setHtml(this.IdContenu, aHtml, {
              controleur: this.controleur,
            });
          }
          if (this.optionsFenetre.positionnerFenetreSurAfficher) {
            this._creerResizeObserver();
            this.positionnerFenetre();
          }
          this.EnAffichage = true;
          this.surFixerTaille();
          if (this.surAfficher) {
            this.surAfficher();
          }
          this.$refreshSelf();
          this.promise = new Promise((aResolve) => {
            this._promiseResolve = aResolve;
          });
        }
        try {
          if (!this.optionsFenetre.bloquerFocus) {
            this.focusSurPremierElement();
          }
        } catch (e) {}
        return this.promise;
      }
      actualiser() {
        this.surFixerTaille();
        ObjetHtml_1.GHtml.setHtml(this.IdContenu, this.composeContenu(), {
          controleur: this.controleur,
        });
      }
      setBoutonLibelle(I, aLibelle) {
        if (
          MethodesObjet_1.MethodesObjet.isObject(
            this.optionsFenetre.listeBoutons[I],
          )
        ) {
          this.optionsFenetre.listeBoutons[I].libelle = aLibelle;
        } else {
          this.optionsFenetre.listeBoutons[I] = aLibelle;
        }
        this._structureBoutons = null;
        this.$refreshSelf();
      }
      positionnerSousId(aId) {
        if (ObjetHtml_1.GHtml.elementExiste(aId)) {
          ObjetPosition_1.GPosition.placer(
            this.Nom,
            ObjetPosition_1.GPosition.getLeft(aId) + 5,
            ObjetPosition_1.GPosition.getTop(aId) +
              ObjetPosition_1.GPosition.getHeight(aId) +
              7,
          );
          this.setCoordonnees();
        }
      }
      surFixerTaille() {
        if (
          !this.optionsFenetre.avecRetaillage &&
          $('#' + this.NomFenetre.escapeJQ()).width() <
            $('#' + this.idFenetreContenu.escapeJQ()).outerWidth()
        ) {
          $('#' + this.NomFenetre.escapeJQ()).css(
            'min-width',
            $('#' + this.idFenetreContenu.escapeJQ()).width() + 'px',
          );
        }
      }
      debutRetaillage() {
        this.surFixerTaille();
        $('#' + this.idFenetreContenu.escapeJQ()).css({
          'min-height':
            ObjetPosition_1.GPosition.getHeight(this.idFenetreContenu) + 'px',
          width:
            ObjetPosition_1.GPosition.getWidth(this.idFenetreContenu) + 'px',
        });
      }
      finRetaillage() {
        this.surFixerTaille();
        this.setCoordonnees();
      }
      getHeightMaxIdSelonEcran(aId) {
        return (
          GNavigateur.ecranH -
          ($('#' + this.Nom.escapeJQ()).outerHeight() -
            $('#' + aId.escapeJQ()).height()) -
          10
        );
      }
      avecEventResizeNavigateur() {
        return false;
      }
      _initialiserOptionsFenetre() {
        this.setOptionsFenetre({
          modale: true,
          avecTitre: true,
          titre: '',
          largeur: 100,
          hauteur: 100,
          hauteurMaxContenu: 0,
          avecScroll: false,
          avecScrollY_force: false,
          marge: 12,
          avecTailleSelonContenu: false,
          avecPaddingContenu: true,
          avecCroixFermeture: true,
          indiceCroixFermeture: -1,
          cssFenetre:
            MethodesObjet_1.MethodesObjet.getObjectClass(this) + '_racine',
          avecRetaillage: false,
          largeurMin: 0,
          hauteurMin: 0,
          tailleBandeRetaillage: 3,
          callbackDeplacer: null,
          addParametresValidation: null,
          surValiderAvantFermer: null,
          callback: null,
          callbackFermer: null,
          callbackApresFermer: null,
          listeBoutons: [],
          listeBoutonsInvisibles: [],
          listeBoutonsInactifs: [],
          avecAbonnementBlocage: true,
          prioriteBlocageAbonnement:
            GestionnaireModale_1.GestionnaireModale.TypePrioriteBlocageInterface
              .standard,
          avecAbonnementPremierPlan: true,
          avecPositionnementResize: true,
          positionnerFenetreSurAfficher: true,
          idPositionnement: '',
          positionSurSouris: false,
          conserverCoordonnees: true,
          identConservationCoordonnees: '',
          avecAbonnementFermetureFenetreGenerale: true,
          bloquerFocus: false,
          restaurerFocusSurFermeture: true,
          fermerFenetreSurClicHorsFenetre: false,
          couleurFond: GCouleur.blanc,
          hauteurBandeau: GApplication.hauteurBandeau,
          couleurFondBandeau: GCouleur.fenetre.bandeau.fond,
          couleurTexteBandeau: GCouleur.fenetre.bandeau.texte,
          avecAriaDescribedByContenu: false,
        });
      }
      _surCreationNodeFenetre(aNode) {
        const lInstance = this;
        Invocateur_1.Invocateur.desabonner(
          Invocateur_1.ObjetInvocateur.events.fermerFenetres,
          this,
        );
        Invocateur_1.Invocateur.abonner(
          Invocateur_1.ObjetInvocateur.events.fermerFenetres,
          (aForcer) => {
            if (
              aForcer ||
              this.optionsFenetre.avecAbonnementFermetureFenetreGenerale
            ) {
              this.fermer();
            }
          },
        );
        $(aNode).on({
          keyup() {
            if (GNavigateur.isToucheEchap && GNavigateur.isToucheEchap()) {
              lInstance.surValidation(
                lInstance.optionsFenetre.indiceCroixFermeture,
              );
            }
          },
          pointerdown() {
            GestionnaireModale_1.GestionnaireModale.enPremierPlan(
              lInstance.getNom(),
            );
          },
        });
      }
      _creerResizeObserver() {
        const lElement = ObjetHtml_1.GHtml.getElement(this.Nom);
        if (!lElement) {
          return;
        }
        let lPositionnerEnCours = false;
        let lObserver = new ResizeObserver((aObserveds) => {
          if (
            this.EnAffichage &&
            !lPositionnerEnCours &&
            aObserveds &&
            aObserveds[0] &&
            aObserveds[0].contentRect &&
            aObserveds[0].contentRect.height > 0
          ) {
            lPositionnerEnCours = true;
            try {
              this.positionnerFenetre();
            } finally {
              lPositionnerEnCours = false;
            }
          }
        });
        lObserver.observe(lElement);
        const lDisconnect = function (aEvent) {
          if (lObserver) {
            lObserver.disconnect();
            lObserver = null;
          }
          lElement.removeEventListener(aEvent.type, lDisconnect, true);
        };
        lElement.addEventListener('pointerdown', lDisconnect, true);
      }
      _preResizePositionnement() {
        if (
          !this.optionsFenetre.avecPositionnementResize ||
          !this.estAffiche()
        ) {
          return;
        }
        this._tempResize = {
          left: ObjetPosition_1.GPosition.getLeft(this.Nom),
          top: ObjetPosition_1.GPosition.getTop(this.Nom),
        };
        ObjetHtml_1.GHtml.setDisplay(this.Nom, false);
      }
      _postResizePositionnement() {
        if (
          !this.optionsFenetre.avecPositionnementResize ||
          !this.estAffiche() ||
          !this._tempResize
        ) {
          return;
        }
        ObjetPosition_1.GPosition.placer(this.Nom, 0, 0);
        ObjetHtml_1.GHtml.setDisplay(this.Nom, true);
        ObjetPosition_1.GPosition.placer(
          this.Nom,
          this._tempResize.left,
          this._tempResize.top,
        );
        this.setCoordonnees();
        delete this._tempResize;
      }
      _getDragFenetre(aInstance) {
        return {
          start(aParamsDrag) {
            const lJFenetre = $(`#${aInstance.Nom.escapeJQ()}`);
            aParamsDrag.rectFenetreStart =
              ObjetPosition_1.GPosition.getClientRect(lJFenetre.get(0));
            lJFenetre.addClass('on-drag');
            aInstance._fenetreEnDeplacement = true;
          },
          drag(aParamsDrag) {
            const lJFenetre = $(`#${aInstance.Nom.escapeJQ()}`);
            const lRect = ObjetPosition_1.GPosition.getClientRect(
              lJFenetre.get(0),
            );
            let lTop = Math.max(
              aParamsDrag.rectContrainte.top,
              aParamsDrag.rectFenetreStart.top + aParamsDrag.offset.y,
            );
            let lLeft = Math.max(
              aParamsDrag.rectContrainte.left,
              aParamsDrag.rectFenetreStart.left + aParamsDrag.offset.x,
            );
            lLeft = Math.min(
              lLeft,
              aParamsDrag.rectContrainte.left +
                aParamsDrag.rectContrainte.width -
                lRect.width,
            );
            lTop = Math.min(
              lTop,
              aParamsDrag.rectContrainte.top +
                aParamsDrag.rectContrainte.height -
                lRect.height,
            );
            lJFenetre.css({ left: lLeft, top: lTop });
          },
          stop() {
            $(`#${aInstance.Nom.escapeJQ()}`).removeClass('on-drag');
            aInstance.setCoordonnees();
            aInstance.focusSurPremierElement();
            setTimeout(() => {
              delete aInstance._fenetreEnDeplacement;
            }, 0);
          },
        };
      }
      _getDragResize(aInstance, aNode) {
        let lCoin = {
          gauche: aNode.classList.contains('left'),
          droit:
            aNode.classList.contains('right') ||
            aNode.classList.contains('coin'),
          haut: aNode.classList.contains('top'),
          bas:
            aNode.classList.contains('bottom') ||
            aNode.classList.contains('coin'),
        };
        return {
          start(aParamsDrag) {
            const lClassCurseur =
              lCoin.bas && lCoin.droit
                ? 'AvecResize'
                : lCoin.droit || lCoin.gauche
                  ? 'AvecResizeHorizontal'
                  : 'AvecResizeVertical';
            aParamsDrag.divBloquant = ObjetHtml_1.GHtml.htmlToDOM(
              `<div class="overlay-resize ${lClassCurseur}"></div>`,
            );
            ObjetHtml_1.GHtml.insererElementDOM(
              ObjetHtml_1.GHtml.getElement(aInstance.NomFenetre),
              aParamsDrag.divBloquant,
            );
            Object.assign(aParamsDrag, {
              OriginX: aParamsDrag.posStart.x,
              OriginY: aParamsDrag.posStart.y,
              OriginLargeur: ObjetPosition_1.GPosition.getWidth(
                aInstance.idFenetreContenu,
              ),
              OriginHauteur: ObjetPosition_1.GPosition.getHeight(
                aInstance.idFenetreContenu,
              ),
              Originleft: ObjetPosition_1.GPosition.getLeft(aInstance.Nom),
              OriginTop: ObjetPosition_1.GPosition.getTop(aInstance.Nom),
            });
            $(`#${aInstance.Nom.escapeJQ()}`).addClass('on-drag');
            aInstance.debutRetaillage();
          },
          drag(aParamsDrag) {
            const lJContenu = $('#' + aInstance.idFenetreContenu.escapeJQ());
            let lDeplacementX;
            let lDeplacementY;
            if (lCoin.droit) {
              lDeplacementX = Math.borner(
                aParamsDrag.pos.x - aParamsDrag.OriginX,
                aInstance.optionsFenetre.largeurMin - aParamsDrag.OriginLargeur,
                GNavigateur.ecranL -
                  13 -
                  aParamsDrag.OriginLargeur -
                  ObjetPosition_1.GPosition.getLeft(aInstance.idFenetreContenu),
              );
              aInstance.optionsFenetre.largeur =
                aParamsDrag.OriginLargeur + lDeplacementX;
              lJContenu.css({
                width: aParamsDrag.OriginLargeur + lDeplacementX + 'px',
              });
            }
            if (lCoin.gauche) {
              lDeplacementX = Math.borner(
                aParamsDrag.pos.x - aParamsDrag.OriginX,
                -aParamsDrag.Originleft,
                aParamsDrag.OriginLargeur - aInstance.optionsFenetre.largeurMin,
              );
              aInstance.optionsFenetre.largeur =
                aParamsDrag.OriginLargeur - lDeplacementX;
              lJContenu.css({
                width: aParamsDrag.OriginLargeur - lDeplacementX + 'px',
              });
              aInstance.coordonnees.left =
                aParamsDrag.Originleft + lDeplacementX;
              ObjetPosition_1.GPosition.setLeft(
                aInstance.Nom,
                aInstance.coordonnees.left,
              );
            }
            if (lCoin.bas) {
              lDeplacementY = Math.borner(
                aParamsDrag.pos.y - aParamsDrag.OriginY,
                aInstance.optionsFenetre.hauteurMin - aParamsDrag.OriginHauteur,
                GNavigateur.ecranH -
                  13 -
                  aParamsDrag.OriginHauteur -
                  ObjetPosition_1.GPosition.getTop(aInstance.idFenetreContenu),
              );
              aInstance.optionsFenetre.hauteur =
                aParamsDrag.OriginHauteur + lDeplacementY;
              lJContenu.css({
                'min-height': aParamsDrag.OriginHauteur + lDeplacementY + 'px',
              });
            }
            if (lCoin.haut) {
              lDeplacementY = Math.borner(
                aParamsDrag.pos.y - aParamsDrag.OriginY,
                -aParamsDrag.OriginTop,
                aParamsDrag.OriginHauteur - aInstance.optionsFenetre.hauteurMin,
              );
              aInstance.optionsFenetre.hauteur =
                aParamsDrag.OriginHauteur - lDeplacementY;
              lJContenu.css({
                'min-height': aParamsDrag.OriginHauteur - lDeplacementY + 'px',
              });
              aInstance.coordonnees.top = aParamsDrag.OriginTop + lDeplacementY;
              ObjetPosition_1.GPosition.setTop(
                aInstance.Nom,
                aInstance.coordonnees.top,
              );
            }
          },
          stop(aParamsDrag) {
            if (aParamsDrag.divBloquant) {
              ObjetHtml_1.GHtml.supprimerElementDOM(aParamsDrag.divBloquant);
            }
            $(`#${aInstance.Nom.escapeJQ()}`).removeClass('on-drag');
            aInstance.finRetaillage();
          },
        };
      }
    }
    exports.ObjetFenetreEspace = ObjetFenetreEspace;
  },
  fn: 'objetfenetre_espace.js',
});