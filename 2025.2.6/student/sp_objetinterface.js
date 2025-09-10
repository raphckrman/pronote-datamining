IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetInterface = void 0;
    require('ObjetInterface.css');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_Event_1 = require('Enumere_Event');
    const Enumere_StructureAffichage_1 = require('Enumere_StructureAffichage');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const ObjetWAI_1 = require('ObjetWAI');
    const AccessApp_1 = require('AccessApp');
    class ObjetInterface extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.Instances = [];
        this.GenreAffichage = [];
        this.NombreGenreAffichage = 0;
        this._pileInfosFenetres = [];
        this._pileFenetre = [];
        this.EnConstruction = false;
        this.EtatIdCourant = true;
        this.reinitialiser();
        this.AvecCadre = true;
        this.GenreStructure =
          Enumere_StructureAffichage_1.EStructureAffichage.Verticale;
        this.IdentZoneAlClient = -1;
        this.AddSurZone = [];
        this.idPremierObjet = '';
        if (this.Nom && this.avecEventResizeNavigateur()) {
          this.ajouterEvenementGlobal(
            Enumere_Event_1.EEvent.SurResize,
            this._surResizeInterface,
          );
        }
      }
      reinitialiser() {
        this.detruireInstancesFils();
        this.Instances = [];
        this.GenreAffichage = [];
        this.NombreGenreAffichage = 0;
        this._pileInfosFenetres = [];
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
      addInstance(aParametres) {
        const lParametres = {
          objet: null,
          constructionFenetre: false,
          evenement: null,
          init: null,
          ident: null,
          traductions: null,
        };
        $.extend(lParametres, aParametres);
        const lObjetGraphique = this.getObjetGraphique(lParametres.objet);
        if (!lObjetGraphique) {
          IE.log.addLog(
            'ObjetInterface.addInstance : "' +
              (lObjetGraphique ? lObjetGraphique.nom : lParametres.objet) +
              '" n"existe pas!',
            null,
            IE.log.genre.Avertissement,
          );
          return null;
        }
        if (lParametres.ident !== null && lParametres.ident !== undefined) {
          this.NombreGenreAffichage = lParametres.ident;
        }
        this.GenreAffichage[this.NombreGenreAffichage] = lParametres.objet;
        if (lObjetGraphique) {
          if (lParametres.constructionFenetre) {
            this._pileInfosFenetres[this.NombreGenreAffichage] = {
              ident: this.NombreGenreAffichage,
              genre: lParametres.objet,
              evenement: lParametres.evenement,
              init: lParametres.init,
              traductions: lParametres.traductions,
              coordonnees: { left: 0, top: 0 },
            };
          } else {
            const lInstance = this._construireObjetGraphique(
              lObjetGraphique.constructeur,
              lObjetGraphique.nom,
              this.NombreGenreAffichage,
              lParametres.evenement,
            );
            this.Instances[this.NombreGenreAffichage] = lInstance;
            if (lParametres.init) {
              lParametres.init.call(this, lInstance);
            }
          }
        }
        return this.NombreGenreAffichage++;
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
      add(aClassIdentite, AEvenement, AInitialiser, aTraductions, I) {
        return this.addInstance({
          objet: aClassIdentite,
          evenement: AEvenement,
          init: AInitialiser,
          traductions: aTraductions,
          ident: I,
        });
      }
      addFenetre(aClassFenetre, AEvenement, AInitialiser, aTraductions, I) {
        return this.addInstance({
          objet: aClassFenetre,
          constructionFenetre: true,
          evenement: AEvenement,
          init: AInitialiser,
          traductions: aTraductions,
          ident: I,
        });
      }
      del() {
        this.Instances[this.NombreGenreAffichage] = null;
        this.NombreGenreAffichage--;
      }
      getInstance(AIdent) {
        let lInstance = this.Instances[AIdent];
        if (
          !this.Instances[AIdent] &&
          this.getObjetGraphique(this.GenreAffichage[AIdent]) &&
          this.getObjetGraphique(this.GenreAffichage[AIdent]).estFenetre &&
          this._pileInfosFenetres[AIdent] &&
          !this.__enCoursDeDestruction
        ) {
          lInstance = this.creerFenetre(AIdent);
        }
        return lInstance;
      }
      existeInstance(aIdent) {
        return !!this.Instances[aIdent];
      }
      creerFenetre(AIdent) {
        let lInstance;
        if (this._pileInfosFenetres[AIdent]) {
          const lInfosFenetre = this._pileInfosFenetres[AIdent];
          const lObjetGraphique = this.getObjetGraphique(lInfosFenetre.genre);
          lInstance = this._construireObjetGraphique(
            lObjetGraphique.constructeur,
            lObjetGraphique.nom,
            AIdent,
            lInfosFenetre.evenement,
          );
          lInstance.destructionSurFermeture = true;
          const lSelf = this;
          lInstance.ajouterCallbackSurDestruction(() => {
            if (
              AIdent !== undefined &&
              lSelf.Instances[AIdent] &&
              lSelf._pileInfosFenetres[AIdent]
            ) {
              lSelf.Instances[AIdent] = null;
              const lIndice = lSelf._pileFenetre.indexOf(
                lSelf.getZoneId(AIdent),
              );
              if (lIndice >= 0) {
                lSelf._pileFenetre[lIndice] = null;
              }
            }
          });
          if (!this._pileFenetre) {
            this._pileFenetre = [];
          }
          this._pileFenetre.push(this.getZoneId(AIdent));
          IEZoneFenetre_1.ZoneFenetre.ajouterFenetre(
            this.getZoneId(AIdent),
            lInstance.getZIndex ? lInstance.getZIndex() : '',
          );
          if (lInfosFenetre.init) {
            lInfosFenetre.init.call(this, lInstance);
          }
          lInstance.coordonnees = lInfosFenetre.coordonnees;
          lInstance.initialiser();
          this.Instances[AIdent] = lInstance;
        }
        return lInstance;
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
          ObjetHtml_1.GHtml.setHtml(
            this.estRacine
              ? (0, AccessApp_1.getApp)().getIdConteneur()
              : this.Nom,
            this._construireStructureAffichage(),
            { instance: this },
          );
          this.construireAffichage();
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
        const H = [];
        let lInfo;
        H.push(
          '<div class="interface_affV',
          this.AvecCadre ? ' interface_affV_padding' : '',
          !!lFooter ? lFooter : '',
          '" ',
          ObjetWAI_1.GObjetWAI.composeRole(ObjetWAI_1.EGenreRole.Presentation),
          '>',
        );
        const lTabAffichages = [];
        for (let I = 0; I < this.NombreGenreAffichage; I++) {
          if (
            !this.appartientAZone(I) &&
            !this.getObjetGraphique(this.GenreAffichage[I]).estFenetre
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
        this._effacerFenetres();
        const H = [];
        for (let I = 0; I < this.NombreGenreAffichage; I++) {
          const lInstance = this.Instances[I];
          if (
            this.getObjetGraphique(this.GenreAffichage[I]).estFenetre &&
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
      construireStructureAffichage() {
        const H = [];
        switch (this.GenreStructure) {
          case Enumere_StructureAffichage_1.EStructureAffichage.Verticale:
            H.push(this.construireStructureAffichageVerticale());
            break;
          default:
            H.push(this.construireStructureAffichageAutre());
            break;
        }
        if (this.AddSurZone.length || this.avecBandeau) {
          this.construireStructureAffichageBandeau();
        }
        return H.join('');
      }
      construireStructureAffichageBandeau() {}
      construireAffichage() {
        for (let I = 0; I < this.NombreGenreAffichage; I++) {
          if (this.Instances[I]) {
            if (!this.getObjetGraphique(this.GenreAffichage[I]).estFenetre) {
              this.Instances[I].setVisible(this.Instances[I].Visible);
            }
            this.Instances[I].initialiser();
          }
        }
        return '';
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
      _construireStructureAffichage() {
        const H = [];
        H.push(this.construireStructureFenetres());
        H.push(this.construireStructureAffichage());
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