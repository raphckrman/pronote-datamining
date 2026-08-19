IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Identite = void 0;
    require('@librairies/script/Divers/Divers');
    require('@librairies/script/Divers/NamespaceIE');
    require('@librairies/script/ExtensionsObjetsNatifs/DeclarationExtensionsObjetNatif');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const Callback_1 = require('@librairies/script/Divers/Callback');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const Enumere_Direction_1 = require('@cp/script/Enumere/Enumere_Direction');
    const Enumere_OrientationAffichage_1 = require('@cp/script/Enumere/Enumere_OrientationAffichage');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const uGenerateurNumberIdentite = new GUID_1.UniqueNumberGenerator();
    class Identite {
      constructor(aParamsCreate) {
        this.pileAbonnementInvocateur = {};
        let lNumberConstructionCollection = null;
        let lStrGetterIdentite = '';
        this.Pere =
          (aParamsCreate === null || aParamsCreate === void 0
            ? void 0
            : aParamsCreate.pere) || {};
        this.Evenement =
          aParamsCreate === null || aParamsCreate === void 0
            ? void 0
            : aParamsCreate.evenement;
        this.estRacine = !!(
          aParamsCreate &&
          'estRacine' in aParamsCreate &&
          aParamsCreate.estRacine
        );
        if (
          aParamsCreate &&
          aParamsCreate.nomObjet &&
          aParamsCreate.pere &&
          aParamsCreate.pere instanceof Identite
        ) {
          this.Nom = aParamsCreate.pere.Nom + '.' + aParamsCreate.nomObjet;
        } else if (
          aParamsCreate === null || aParamsCreate === void 0
            ? void 0
            : aParamsCreate.nomComplet
        ) {
          this.Nom = aParamsCreate.nomComplet || '';
        } else {
          lNumberConstructionCollection = uGenerateurNumberIdentite.generate();
          lStrGetterIdentite = `_${lNumberConstructionCollection}`;
          this.Nom = `IE.Identite.collection.${lStrGetterIdentite}`;
          IE.Identite.collection[lStrGetterIdentite] = this;
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
        this.instancesADetruire = {};
        if (lStrGetterIdentite && lNumberConstructionCollection !== null) {
          this.ajouterCallbackSurDestruction(() => {
            if (IE.Identite.collection[lStrGetterIdentite]) {
              uGenerateurNumberIdentite.release(lNumberConstructionCollection);
              delete IE.Identite.collection[lStrGetterIdentite];
            }
          });
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
      getGenre() {
        return this.Genre;
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
        return false;
      }
      $refresh(aForcerSynchrone) {
        return IEHtml_1.IEHtml.refresh(aForcerSynchrone);
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
          const lElement = ObjetHtml_1.GHtml.getElement(this.Nom);
          if (lElement) {
            ObjetHtml_1.GHtml.setHtml(lElement, H, { instance: this });
          } else {
          }
        }
        this.recupererDonnees();
      }
      composeMessage(aMessage) {
        return IE.jsx.str(
          'div',
          { role: 'note' },
          IE.jsx.str(
            'p',
            {
              id: this.idMessageActionRequise,
              class:
                'font-weight-semi-bold taille-m text-center p-y-xl m-bottom-l',
            },
            aMessage,
          ),
        );
      }
      navigationClavier(AId) {
        if (ObjetNavigateur_1.Navigateur.isToucheFleche()) {
          this.focusSuivant(
            AId,
            ObjetNavigateur_1.Navigateur.isToucheFlecheGauche() ||
              ObjetNavigateur_1.Navigateur.isToucheFlecheDroite()
              ? Enumere_OrientationAffichage_1.EGenreOrientationAffichage
                  .Horizontal
              : Enumere_OrientationAffichage_1.EGenreOrientationAffichage
                  .Vertical,
            ObjetNavigateur_1.Navigateur.isToucheFlecheGauche() ||
              ObjetNavigateur_1.Navigateur.isToucheFlecheHaut()
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
        return !!(this._estDetruite || this.__enCoursDeDestruction);
      }
      _viderEvenements() {
        Invocateur_1.Invocateur.desabonner(this);
      }
    }
    exports.Identite = Identite;
  },
  fn: 'objetidentite.js',
});