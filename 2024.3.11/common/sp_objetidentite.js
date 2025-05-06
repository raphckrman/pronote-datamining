IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Identite = void 0;
    require('Divers.js');
    require('NamespaceIE');
    require('DeclarationExtensionsObjetNatif');
    const IEHtml = require('IEHtml');
    const Callback_1 = require('Callback');
    const GUID_1 = require('GUID');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_1 = require('ObjetStyle');
    const Enumere_Direction_1 = require('Enumere_Direction');
    const Enumere_OrientationAffichage_1 = require('Enumere_OrientationAffichage');
    const IEZoneFenetre_1 = require('IEZoneFenetre');
    const lGenerateurGUID = new GUID_1.GUID.generateur();
    class Identite {
      constructor(ANom, AIdent, APere, AEvenement) {
        this.pileAbonnementInvocateur = {};
        if (typeof ANom === 'string') {
          this.Nom = this.construireNom(ANom, AIdent);
          this.Pere = APere;
          this.Evenement = AEvenement;
        } else {
          const lParametres = {
            nomComplet: '',
            nomObjet: undefined,
            pere: null,
            evenement: undefined,
          };
          $.extend(lParametres, ANom);
          this.Pere = lParametres.pere;
          this.Evenement = lParametres.evenement;
          if (
            lParametres.nomObjet &&
            lParametres.pere &&
            lParametres.pere instanceof Identite
          ) {
            this.Nom = lParametres.pere.Nom + '.' + lParametres.nomObjet;
          } else {
            this.Nom = lParametres.nomComplet || '';
          }
        }
        this.callback = new Callback_1.Callback(this.Pere, this.Evenement);
        this._callbacksSurDestruction = [];
        if (this.Pere && this.Pere instanceof Identite) {
          this.Pere.ajouterInstanceADetruire(this);
        }
        this.options = {};
        this.Actif = true;
        this.Visible = true;
        this.TableauGauche = {};
        this.TableauDroite = {};
        this.TableauHaut = {};
        this.TableauBas = {};
        this.IdPremierElement = '';
        this.idMessageActionRequise = GUID_1.GUID.getId();
        this.tabIndex = 0;
        this.pileEvenementGlobaux = [];
        this.instancesADetruire = {};
        this.controleur = IEHtml.initControleur(this.getControleur(this) || {});
        if (this.controleur) {
          this.controleur.instance = this;
        }
      }
      setOptions(aOptions) {
        Object.assign(this.options, aOptions);
        return this;
      }
      getOptions() {
        return this.options;
      }
      getPileAbonnement() {
        return this.pileAbonnementInvocateur;
      }
      setParametres(...aParams) {}
      setAvecTabulation(AAvecTabIndex) {
        this.tabIndex =
          AAvecTabIndex === null || AAvecTabIndex === undefined || AAvecTabIndex
            ? 0
            : -1;
      }
      setDonnees(...aParams) {}
      recupererDonnees() {}
      construireAffichage(...aParams) {
        return '&nbsp;';
      }
      setGenre(AGenre) {
        this.Genre = AGenre;
      }
      setActif(AActif) {
        this.Actif = AActif;
      }
      getActif() {
        return this.Actif;
      }
      setVisible(AVisible) {
        ObjetStyle_1.GStyle.setDisplay(this.Nom, (this.Visible = AVisible));
      }
      estUneInteractionUtilisateur() {
        return this.InteractionUtilisateur !== false;
      }
      setEtatSaisie(aEtatSaisie) {
        if (this.Pere && this.Pere instanceof Identite) {
          this.Pere.setEtatSaisie(aEtatSaisie);
        } else {
          Invocateur_1.Invocateur.evenement(
            Invocateur_1.ObjetInvocateur.events.etatSaisie,
            aEtatSaisie,
          );
        }
      }
      setControleNavigation(AControleNavigation) {
        this.ControleNavigation = AControleNavigation;
      }
      getEtatSaisie() {
        if (this.Pere && this.Pere instanceof Identite) {
          return this.Pere.getEtatSaisie();
        }
      }
      $refresh() {
        return this.controleur.$refresh();
      }
      $refreshSelf() {
        return this.controleur.$refreshSelf();
      }
      getControleur(aInstance) {
        return {};
      }
      avecEventResizeNavigateur() {
        return this.Pere && this.Pere instanceof Identite
          ? this.Pere.avecEventResizeNavigateur()
          : true;
      }
      construireNom(ANom, AIdent) {
        return AIdent === null || AIdent === undefined
          ? ANom
          : ANom + '[' + AIdent + ']';
      }
      getNom() {
        return this.Nom;
      }
      effacer(aMessage) {
        if (aMessage === null || aMessage === undefined) {
          aMessage = '&nbsp;';
        }
        ObjetHtml_1.GHtml.setHtml(this.Nom, aMessage);
      }
      afficher(H, ...aParams) {
        let lHtml = '';
        if (H === null || H === undefined) {
          lHtml = this.construireAffichage();
        } else if (aParams.length === 0 && typeof H === 'string') {
          lHtml = H;
        } else {
        }
        if (lHtml) {
          ObjetHtml_1.GHtml.setHtml(this.Nom, lHtml, { instance: this });
        }
      }
      initialiser() {
        const H = this.construireAffichage();
        if (H) {
          ObjetHtml_1.GHtml.setHtml(this.Nom, H, { instance: this });
        }
        this.recupererDonnees();
      }
      composeMessage(aMessage) {
        return IE.jsx.str(
          'div',
          { role: 'note', tabindex: '0' },
          IE.jsx.str(
            'p',
            {
              id: this.idMessageActionRequise,
              class: 'semi-bold taille-m text-center p-y-xl m-bottom-l',
            },
            aMessage,
          ),
        );
      }
      navigationClavier(AId) {
        if (GNavigateur.isToucheFleche()) {
          this.focusSuivant(
            AId,
            GNavigateur.isToucheFlecheGauche() ||
              GNavigateur.isToucheFlecheDroite()
              ? Enumere_OrientationAffichage_1.EGenreOrientationAffichage
                  .Horizontal
              : Enumere_OrientationAffichage_1.EGenreOrientationAffichage
                  .Vertical,
            GNavigateur.isToucheFlecheGauche() ||
              GNavigateur.isToucheFlecheHaut()
              ? Enumere_Direction_1.EGenreDirection.SensInverse
              : Enumere_Direction_1.EGenreDirection.SensNormal,
          );
        }
      }
      focusSuivant(AId, AOrientation, ADirection) {
        const lIdSuivant = this.getIdNavigationSuivant(
          AId,
          AOrientation,
          ADirection,
        );
        if (lIdSuivant) {
          ObjetHtml_1.GHtml.setFocus(lIdSuivant);
        }
      }
      getIdNavigationSuivant(aId, aOrientation, aDirection) {
        return aOrientation ===
          Enumere_OrientationAffichage_1.EGenreOrientationAffichage.Horizontal
          ? aDirection === Enumere_Direction_1.EGenreDirection.SensNormal
            ? this.TableauDroite[aId]
            : this.TableauGauche[aId]
          : aDirection === Enumere_Direction_1.EGenreDirection.SensNormal
            ? this.TableauBas[aId]
            : this.TableauHaut[aId];
      }
      ajouterAuTableaux(APremierId, ADeuxiemeId, AHorizontal, AVertical) {
        switch (AHorizontal) {
          case Enumere_Direction_1.EGenreDirection.DeuxSenses:
            this.TableauDroite[APremierId] = ADeuxiemeId;
            this.TableauGauche[ADeuxiemeId] = APremierId;
            break;
          case Enumere_Direction_1.EGenreDirection.SensNormal:
            this.TableauDroite[APremierId] = ADeuxiemeId;
            break;
          case Enumere_Direction_1.EGenreDirection.SensInverse:
            this.TableauGauche[ADeuxiemeId] = APremierId;
            break;
        }
        switch (AVertical) {
          case Enumere_Direction_1.EGenreDirection.DeuxSenses:
            this.TableauBas[APremierId] = ADeuxiemeId;
            this.TableauHaut[ADeuxiemeId] = APremierId;
            break;
          case Enumere_Direction_1.EGenreDirection.SensNormal:
            this.TableauBas[APremierId] = ADeuxiemeId;
            break;
          case Enumere_Direction_1.EGenreDirection.SensInverse:
            this.TableauHaut[ADeuxiemeId] = APremierId;
            break;
        }
      }
      resetTableauxNavigation() {
        this.TableauGauche = {};
        this.TableauDroite = {};
        this.TableauHaut = {};
        this.TableauBas = {};
      }
      estObjetGraphiqueFenetre() {
        return false;
      }
      getId(APositionId) {
        if (this.TabId && APositionId < this.TabId.length) {
          return this.TabId[APositionId];
        }
      }
      focusSurPremierElement() {
        ObjetHtml_1.GHtml.setFocus(this.IdPremierElement);
      }
      setPremierElement(AElement) {
        this.IdPremierElement = AElement;
      }
      getPremierElement() {
        return this.IdPremierElement;
      }
      ajouterInstanceADetruire(aInstance) {
        if (aInstance && aInstance.Nom) {
          this.instancesADetruire[aInstance.Nom] = aInstance;
        }
      }
      enleverInstanceADetruire(aInstance) {
        if (aInstance && aInstance.Nom) {
          this.instancesADetruire[aInstance.Nom] = null;
        }
      }
      ajouterEvenementGlobal(aEvenement, aMethode) {
        if (!GNavigateur.addEvent) {
          return;
        }
        if (!aMethode) {
          return;
        }
        GNavigateur.addEvent(aEvenement, this, aMethode);
        this.pileEvenementGlobaux.push({
          evenement: aEvenement,
          methode: aMethode,
        });
        return this.pileEvenementGlobaux.length - 1;
      }
      viderEvenementGlobaux() {
        for (let i = 0; i < this.pileEvenementGlobaux.length; i++) {
          GNavigateur.delEvent(this.pileEvenementGlobaux[i].evenement, this);
        }
        this.pileEvenementGlobaux = [];
      }
      detruireInstances() {}
      free() {
        if (this.isDestroyed()) {
          return;
        }
        this.__enCoursDeDestruction = true;
        try {
          this._viderEvenements();
          this.detruireInstancesFils();
          if (this.detruireInstances) {
            this.detruireInstances();
          }
          if (this.estObjetGraphiqueFenetre()) {
            if (ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
              IEZoneFenetre_1.ZoneFenetre.enleverFenetre(this.Nom);
            }
          } else if (
            !this.Pere ||
            !(
              '__enCoursDeDestruction' in this.Pere &&
              this.Pere.__enCoursDeDestruction
            )
          ) {
            ObjetHtml_1.GHtml.setHtml(this.Nom, '', true);
          }
          if (this.Pere && this.Pere instanceof Identite) {
            this.Pere.enleverInstanceADetruire(this);
          }
          if (this._callbacksSurDestruction.length > 0) {
            this._callbacksSurDestruction.forEach((aCallback) => {
              aCallback();
            });
          }
        } catch (e) {
        } finally {
          delete this.__enCoursDeDestruction;
          this._estDetruite = true;
        }
      }
      detruireInstancesFils() {
        for (const lNom in this.instancesADetruire) {
          if (this.instancesADetruire.hasOwnProperty(lNom)) {
            const lInstance = this.instancesADetruire[lNom];
            if (lInstance && !lInstance._estDetruite && lInstance.free) {
              lInstance.free();
            }
            this.instancesADetruire[lNom] = null;
          }
        }
      }
      ajouterCallbackSurDestruction(aCallback) {
        this._callbacksSurDestruction.push(aCallback);
        return this;
      }
      isDestroyed() {
        return this._estDetruite || this.__enCoursDeDestruction;
      }
      static creerInstance(aConstructeur, aParametres) {
        if (!aConstructeur) {
          return null;
        }
        const lNom = lGenerateurGUID.get(),
          lNomComplet = 'IE.Identite.collection.' + lNom;
        $.extend(aParametres, { nomComplet: lNomComplet });
        const lInstance = new aConstructeur(aParametres);
        if (aParametres.options) {
          lInstance.setOptions(aParametres.options);
        }
        lInstance.ajouterCallbackSurDestruction(() => {
          if (IE.Identite.collection[lNom]) {
            delete IE.Identite.collection[lNom];
          }
        });
        IE.Identite.collection[lNom] = lInstance;
        return lInstance;
      }
      _viderEvenements() {
        Invocateur_1.Invocateur.desabonner(this);
        this.viderEvenementGlobaux();
      }
    }
    exports.Identite = Identite;
  },
  fn: 'objetidentite.js',
});