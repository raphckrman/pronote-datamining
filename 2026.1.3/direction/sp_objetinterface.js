IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetInterface = void 0;
    require('@cp/script/css/ObjetInterface.css');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const Enumere_StructureAffichage_1 = require('@cp/script/Enumere/Enumere_StructureAffichage');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    class ObjetInterface extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
        this.Instances = [];
        this.GenreAffichage = [];
        this.NombreGenreAffichage = 0;
        this._pileFenetre = [];
        this.EnConstruction = false;
        this.avecBandeauBasculerEcran = false;
        this.EtatIdCourant = true;
        this.reinitialiser();
        this.AvecCadre = true;
        this.GenreStructure =
          Enumere_StructureAffichage_1.EStructureAffichage.Verticale;
        this.IdentZoneAlClient = -1;
        this.AddSurZone = [];
        this.idPremierObjet = '';
        if (this.Nom && this.avecEventResizeNavigateur()) {
          Invocateur_1.Invocateur.abonner(
            Invocateur_1.ObjetInvocateur.events.resizeNavigateur,
            () => {
              if (!IE.estMobile) {
                this._surResizeInterface();
              }
            },
            this,
          );
        }
      }
      reinitialiser() {
        this.detruireInstancesFils();
        this.Instances = [];
        this.GenreAffichage = [];
        this.NombreGenreAffichage = 0;
      }
      focusSurPremierElement() {}
      focusSurPremierObjet() {
        if (this.idPremierObjet) {
          ObjetHtml_1.GHtml.setFocus(this.idPremierObjet);
        } else {
          IE.log.addLog(
            '[' +
              MethodesObjet_1.MethodesObjet.getNomClassDeConstructeur(
                this.constructor,
              ) +
              '] Il est où mon premierobjet ?',
            '',
            IE.log.genre.Avertissement,
          );
        }
      }
      getObjetGraphique(aConstructor) {
        if (
          aConstructor &&
          MethodesObjet_1.MethodesObjet.isFunction(aConstructor)
        ) {
          const lInfosObjet = {
            nom: 'NON IDENTIFIE',
            estFenetre:
              aConstructor.prototype &&
              aConstructor.prototype.estObjetGraphiqueFenetre(),
            constructeur: aConstructor,
          };
          return lInfosObjet;
        }
        return null;
      }
      add(aClassIdentite, aEvenement, aInitialiser) {
        const lObjetGraphique = this.getObjetGraphique(aClassIdentite);
        if (!lObjetGraphique) {
          throw new Error('addInstance');
        }
        this.GenreAffichage[this.NombreGenreAffichage] = aClassIdentite;
        const lInstance = this._construireObjetGraphique(
          lObjetGraphique.constructeur,
          lObjetGraphique.nom,
          this.NombreGenreAffichage,
          aEvenement,
        );
        this.Instances[this.NombreGenreAffichage] = lInstance;
        if (aInitialiser && lInstance) {
          aInitialiser.call(this, lInstance);
        }
        return this.NombreGenreAffichage++;
      }
      getInstance(AIdent) {
        return this.Instances[AIdent];
      }
      existeInstance(aIdent) {
        return !!this.Instances[aIdent];
      }
      get avecBandeau() {
        const lAddSurZoneSansSeparateurSimple = this.AddSurZone.filter(
          (aElement) => {
            const lEstUnSeparateurSimple =
              MethodesObjet_1.MethodesObjet.isObject(aElement) &&
              'separateur' in aElement &&
              aElement.separateur &&
              Object.keys(aElement).length === 1;
            return !lEstUnSeparateurSimple;
          },
        );
        return (
          lAddSurZoneSansSeparateurSimple.length > 0 ||
          this.avecBandeauBasculerEcran
        );
      }
      getNomInstance(AIdent) {
        return this.getInstance(AIdent)
          ? this.getInstance(AIdent).getNom()
          : '';
      }
      getInstanceParNom(aNom) {
        for (let I = 0; I < this.NombreGenreAffichage; I++) {
          if (this.getNomInstance(I) === aNom) {
            return this.getInstance(I);
          }
        }
      }
      getZoneId(AIdent) {
        return this.construireNom(this.Nom + '.Instances', AIdent);
      }
      initialiser(aReset) {
        if (aReset) {
          this.reinitialiser();
        }
        this.EnConstruction = true;
        try {
          this.construireInstances();
          this.setParametresGeneraux();
          const lId = this.estRacine
            ? (0, AccessApp_1.getApp)().getIdConteneur()
            : this.Nom;
          const lElementExiste = ObjetHtml_1.GHtml.elementExiste(lId);
          const lHtmlConstruireAff =
            this._construireStructureAffichage(lElementExiste);
          if (lElementExiste) {
            ObjetHtml_1.GHtml.setHtml(lId, lHtmlConstruireAff, {
              instance: this,
            });
          } else {
            if (lHtmlConstruireAff) {
            }
          }
          const lResult = this.construireAffichage(true);
        } finally {
          this.EnConstruction = false;
        }
        this.recupererDonnees();
        this.surResizeInterface();
        return this;
      }
      getEnConstruction() {
        return this.EnConstruction;
      }
      appartientAZone(AIdent) {
        for (let I = 0; I < this.AddSurZone.length; I++) {
          const lElement = this.AddSurZone[I];
          if (
            (lElement === AIdent && lElement !== '') ||
            (lElement && lElement.ident === AIdent)
          ) {
            return true;
          }
        }
        return false;
      }
      construireStructureAffichageVerticale(lFooter) {
        var _a;
        const H = [];
        let lInfo;
        H.push(
          '<div class="interface_affV',
          this.AvecCadre ? ' interface_affV_padding' : '',
          !!lFooter ? lFooter : '',
          '">',
        );
        const lTabAffichages = [];
        for (let I = 0; I < this.NombreGenreAffichage; I++) {
          if (
            !this.appartientAZone(I) &&
            !((_a = this.getObjetGraphique(this.GenreAffichage[I])) === null ||
            _a === void 0
              ? void 0
              : _a.estFenetre)
          ) {
            lInfo = { estZoneClient: this.IdentZoneAlClient === I, indice: I };
            lTabAffichages.push(lInfo);
          }
        }
        for (let I = 0; I < lTabAffichages.length; I++) {
          lInfo = lTabAffichages[I];
          H.push(
            '<div id="' + this.getZoneId(lInfo.indice) + '"',
            lInfo.estZoneClient ? ' class="interface_affV_client"' : '',
            '></div>',
          );
        }
        if (this.NombreGenreAffichage === 0) {
          H.push('<div>' + this.composeMessage('') + '</div>');
        }
        H.push('</div>');
        return H.join('');
      }
      construireStructureAffichageAutre() {
        return '';
      }
      construireStructureFenetres() {
        var _a;
        this._effacerFenetres();
        const H = [];
        for (let I = 0; I < this.NombreGenreAffichage; I++) {
          const lInstance = this.Instances[I];
          if (
            ((_a = this.getObjetGraphique(this.GenreAffichage[I])) === null ||
            _a === void 0
              ? void 0
              : _a.estFenetre) &&
            lInstance
          ) {
            if (!this._pileFenetre) {
              this._pileFenetre = [];
            }
            this._pileFenetre.push(this.getZoneId(I));
            IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(
              this.getZoneId(I),
              lInstance &&
                'getZIndex' in lInstance &&
                MethodesObjet_1.MethodesObjet.isFunction(lInstance.getZIndex)
                ? lInstance.getZIndex()
                : '',
            );
          }
        }
        return H.join('');
      }
      construireInstances() {}
      setParametresGeneraux() {}
      construireStructureAffichage(aConteneurExiste = true) {
        const H = [];
        if (aConteneurExiste) {
          switch (this.GenreStructure) {
            case Enumere_StructureAffichage_1.EStructureAffichage.Verticale:
              H.push(this.construireStructureAffichageVerticale());
              break;
            default:
              H.push(this.construireStructureAffichageAutre());
              break;
          }
        }
        if (this.avecBandeau && !this.masquageBandeauForce) {
          this.construireStructureAffichageBandeau();
        }
        return H.join('');
      }
      construireStructureAffichageBandeau() {}
      construireAffichage(aSurInitialiserInterface) {
        var _a, _b, _c, _d;
        for (let I = 0; I < this.NombreGenreAffichage; I++) {
          if (this.Instances[I]) {
            if (
              !((_a = this.getObjetGraphique(this.GenreAffichage[I])) ===
                null || _a === void 0
                ? void 0
                : _a.estFenetre)
            ) {
              (_b = this.Instances[I]) === null || _b === void 0
                ? void 0
                : _b.setVisible(
                    ((_c = this.Instances[I]) === null || _c === void 0
                      ? void 0
                      : _c.Visible) || false,
                  );
            }
            (_d = this.Instances[I]) === null || _d === void 0
              ? void 0
              : _d.initialiser();
          }
        }
        return;
      }
      recupererDonnees(...aParams) {}
      construireObjetGraphique(ANomObjet, AIdent, AEvenement) {
        const lObjetGraphique = this.getObjetGraphique(ANomObjet);
        return lObjetGraphique
          ? this._construireObjetGraphique(
              lObjetGraphique.constructeur,
              lObjetGraphique.nom,
              AIdent,
              AEvenement,
            )
          : null;
      }
      setCallbackNavigation(aCallbackNavigation) {
        this._callbackNavigation = aCallbackNavigation;
      }
      actionSurValidation(...aParams) {
        if (this._callbackNavigation) {
          this._callbackNavigation();
          delete this._callbackNavigation;
        } else if (this.afficherPage) {
          this.afficherPage(...aParams);
        } else {
          this.recupererDonnees(...aParams);
        }
      }
      setIdCourant(AId) {
        if (this.EtatIdCourant && window.GEtatUtilisateur) {
          window.GEtatUtilisateur.IdCourant = AId;
        }
      }
      getIdCourant() {
        return window.GEtatUtilisateur
          ? window.GEtatUtilisateur.IdCourant
          : null;
      }
      setFocusIdCourant() {
        ObjetHtml_1.GHtml.setFocus(this.getIdCourant());
      }
      setEtatIdCourant(ABool) {
        this.EtatIdCourant =
          ABool !== null && ABool !== undefined ? ABool : true;
      }
      _surResizeInterface() {
        this.surResizeInterface();
      }
      surResizeInterface() {}
      detruireInstancesFils() {
        this._effacerFenetres();
        super.detruireInstancesFils();
        const lNbr = this.Instances ? this.Instances.length : 0;
        let lInstance;
        for (let I = 0; I < lNbr; I++) {
          lInstance = this.Instances[I];
          if (
            lInstance &&
            (!lInstance.isDestroyed || !lInstance.isDestroyed()) &&
            lInstance.free
          ) {
            IE.log.addLog(
              'detruireInstancesFils instance non detruite : ' +
                lInstance.getNom(),
            );
            lInstance.free();
          }
          this.Instances[I] = null;
        }
      }
      _construireObjetGraphique(aConstructeur, aNom, aIdent, aEvenement) {
        IE.log.addLog(
          'Interface Construire ' + aNom + ' (' + aIdent + ')',
          'OBJETINTERFACE_LOGNOM',
        );
        if (aConstructeur) {
          return new aConstructeur({
            nomObjet: 'Instances[' + aIdent + ']',
            pere: this,
            evenement: aEvenement,
          });
        }
        return null;
      }
      getPageImpression(AFormat) {
        return;
      }
      _construireStructureAffichage(aConteneurExiste = true) {
        const H = [];
        H.push(this.construireStructureFenetres());
        H.push(this.construireStructureAffichage(aConteneurExiste));
        return H.join('');
      }
      _effacerFenetres() {
        if (this._pileFenetre) {
          this._pileFenetre = [];
        }
      }
    }
    exports.ObjetInterface = ObjetInterface;
  },
  fn: 'objetinterface.js',
});