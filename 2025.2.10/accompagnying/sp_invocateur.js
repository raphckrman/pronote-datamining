IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Invocateur = exports.ObjetInvocateur = void 0;
    require('NamespaceIE');
    require('DeclarationJQuery.js');
    require('Divers.js');
    require('String');
    const GUID_1 = require('GUID');
    const MethodesObjet_1 = require('MethodesObjet');
    const lGUID_GlobalNomPile = new GUID_1.GUID.generateur();
    class ObjetInvocateur {
      constructor(aAbonnementInstanceInterdite = false) {
        this.abonnementInstanceInterdite = false;
        this.pile = {};
        this.pileEvents = {};
        this.generateurGUID = new GUID_1.GUID.generateur();
        this.abonnementInstanceInterdite = aAbonnementInstanceInterdite;
        this.nomPileInstance =
          '__pileInvocateur__' +
          (aAbonnementInstanceInterdite ? '' : lGUID_GlobalNomPile.get());
      }
      abonner(aEvent, aCallback, aInstance, aAvecAbonnementUnicite) {
        if (this.abonnementInstanceInterdite && aInstance) {
          throw new Error('interdiction');
        }
        return this._abonnerTous({
          e: aEvent,
          callB: aCallback,
          inst: aInstance,
          unicite: aAvecAbonnementUnicite !== false,
        });
      }
      abonnerUnique(aEvent, aCallback, aInstance, aAvecAbonnementUnicite) {
        return this._abonnerTous({
          e: aEvent,
          callB: aCallback,
          inst: aInstance,
          u: true,
          unicite: aAvecAbonnementUnicite !== false,
        });
      }
      desabonner(aParam1, aParam2, aParam3) {
        if (!aParam1) {
          return;
        }
        let lEvent, lInstance, lCallBack, lEventsASupprimer, lId;
        if (Array.isArray(aParam1)) {
          this._supprimerIds(aParam1);
          return;
        }
        if (typeof aParam1 === 'object') {
          lInstance = aParam1;
          if (typeof aParam2 !== 'object') {
            lCallBack = aParam2;
          }
        } else {
          lEvent = aParam1.toString();
          if (typeof aParam2 === 'object') {
            lInstance = aParam2;
          } else {
            lCallBack = aParam2;
            if (typeof aParam3 === 'object') {
              lInstance = aParam3;
            }
          }
        }
        if (lEvent) {
          const lTab = lEvent.split(' ');
          for (let i = 0; i < lTab.length; i++) {
            this._desabonnerParEvent(lTab[i].trim(), lInstance, lCallBack);
          }
        } else if (this.isInstanceAbonnable(lInstance)) {
          const lPile = lInstance.getPileAbonnement();
          const lPileInstance = lPile[this.nomPileInstance];
          if (lPileInstance) {
            lEventsASupprimer = [];
            for (lId in lPileInstance) {
              if (lPileInstance.hasOwnProperty(lId)) {
                if (lCallBack) {
                  if (this.pile[lId] && this.pile[lId].callB === lCallBack) {
                    lEventsASupprimer.push(lId);
                  }
                } else {
                  lEventsASupprimer.push(lId);
                }
              }
            }
            if (!lCallBack) {
              delete lPile[this.nomPileInstance];
            }
            this._supprimerIds(lEventsASupprimer);
          }
        }
      }
      evenement(aEvent, ...aArgs) {
        if (!aEvent) {
          return;
        }
        const lEvent = aEvent.toString();
        const lEvents = this.pileEvents[lEvent];
        let lId, lElement, lResult;
        const lEventsATraiter = [];
        let lAvecEvenement = false;
        if (lEvents) {
          for (lId in lEvents) {
            lAvecEvenement = true;
            lElement = this.pile[lId];
            if (lElement && lElement.callB) {
              lEventsATraiter.push(lElement);
            }
          }
        }
        if (!lAvecEvenement) {
          delete this.pileEvents[lEvent];
        }
        for (let i = 0, lLength = lEventsATraiter.length; i < lLength; i += 1) {
          lElement = lEventsATraiter[i];
          if (lElement && !lElement.__INACTIF__) {
            if (lElement.u) {
              this._supprimerIds([lElement.id]);
            }
            if (lElement.callB) {
              lResult = lElement.callB.call(lElement.inst, ...aArgs);
              if (lResult === false) {
                return;
              }
            }
          }
        }
      }
      _abonner(aParams) {
        if (!aParams.e || !aParams.e.toString) {
          return null;
        }
        aParams.e = aParams.e.toString();
        if (!aParams.callB) {
          return null;
        }
        const lInstanceAbo = this.isInstanceAbonnable(aParams.inst)
          ? aParams.inst
          : undefined;
        if (aParams.unicite) {
          this.desabonner(aParams.e, aParams.callB, lInstanceAbo);
        }
        if (!this.pileEvents[aParams.e]) {
          this.pileEvents[aParams.e] = {};
        }
        const lId = this.generateurGUID.get();
        aParams.id = lId;
        this.pile[lId] = aParams;
        this.pileEvents[aParams.e][lId] = true;
        if (lInstanceAbo) {
          const lPile = lInstanceAbo.getPileAbonnement();
          if (!lPile[this.nomPileInstance]) {
            lPile[this.nomPileInstance] = {};
          }
          lPile[this.nomPileInstance][lId] = true;
        }
        return lId;
      }
      _supprimerIds(aIds) {
        if (!aIds) {
          return;
        }
        let lId, i, lElement, lInstance, lLength;
        for (i = 0, lLength = aIds.length; i < lLength; i += 1) {
          lId = aIds[i];
          lElement = this.pile[lId];
          if (lElement) {
            lInstance = lElement.inst;
            if (this.isInstanceAbonnable(lInstance)) {
              const lPile = lInstance.getPileAbonnement();
              if (
                lPile &&
                lPile[this.nomPileInstance] &&
                lPile[this.nomPileInstance][lId]
              ) {
                delete lPile[this.nomPileInstance][lId];
                if ($.isEmptyObject(lPile[this.nomPileInstance])) {
                  delete lPile[this.nomPileInstance];
                }
              }
            }
            if (this.pileEvents[lElement.e]) {
              if (this.pileEvents[lElement.e][lId]) {
                delete this.pileEvents[lElement.e][lId];
              }
            }
            lElement = undefined;
            if (this.pile[lId]) {
              this.pile[lId].__INACTIF__ = true;
            }
            delete this.pile[lId];
          }
        }
      }
      _abonnerTous(aParam) {
        const lIds = [];
        let lEvent;
        if (aParam.e && aParam.e.split) {
          const lTab = aParam.e.split(' ');
          for (let i = 0, lNb = lTab.length; i < lNb; i++) {
            lEvent = lTab[i].trim();
            const lId = this._abonner({
              e: lEvent,
              callB: aParam.callB,
              inst: aParam.inst,
              unicite: aParam.unicite,
              u: aParam.u,
            });
            if (lId) {
              lIds.push(lId);
            }
          }
        }
        if (lIds.length === 0) {
          return null;
        }
        if (lIds.length === 1) {
          return lIds[0];
        }
        return lIds;
      }
      _desabonnerParEvent(aEvent, aInstance, aCallback) {
        const lEvents = this.pileEvents[aEvent];
        let lEventsASupprimer, lId, lElement;
        if (!lEvents) {
          return;
        }
        if (aInstance) {
          if (this.isInstanceAbonnable(aInstance)) {
            const lPileInstance =
              aInstance.getPileAbonnement()[this.nomPileInstance];
            if (!lPileInstance) {
              return;
            }
            lEventsASupprimer = [];
            for (lId in lPileInstance) {
              if (lPileInstance.hasOwnProperty(lId)) {
                lElement = this.pile[lId];
                if (lElement && lElement.e === aEvent) {
                  if (!aCallback || aCallback === lElement.callB) {
                    lEventsASupprimer.push(lId);
                  }
                }
              }
            }
          }
        } else if (aCallback) {
          lEventsASupprimer = [];
          for (lId in lEvents) {
            if (this.pile[lId] && this.pile[lId].callB === aCallback) {
              lEventsASupprimer.push(lId);
            }
          }
        } else {
          lEventsASupprimer = lEvents;
          delete this.pileEvents[aEvent];
        }
        if (
          lEventsASupprimer &&
          Array.isArray(lEventsASupprimer) &&
          lEventsASupprimer.length > 0
        ) {
          this._supprimerIds(lEventsASupprimer);
        }
      }
      isInstanceAbonnable(aInstance) {
        return !!(
          aInstance &&
          'getPileAbonnement' in aInstance &&
          MethodesObjet_1.MethodesObjet.isFunction(aInstance.getPileAbonnement)
        );
      }
    }
    exports.ObjetInvocateur = ObjetInvocateur;
    (function (ObjetInvocateur) {
      let events;
      (function (events) {
        events['initChiffrement'] = 'IIE_initChiffrement';
        events['patience'] = 'IIE_patience';
        events['modificationModeExclusif'] = 'IIE_modification_ModeExclusif';
        events['modeExclusif'] = 'IIE_ModeExclusif';
        events['modificationPresenceUtilisateur'] =
          'IIE_ModificationPresenceUtilisateur';
        events['interruption_Requete'] = 'IIE_Interruption_Requete';
        events['activationImpression'] = 'IIE_Activation_Impression';
        events['choixImpression'] = 'IIE_choix_impression';
        events['autorisationRechargementPage'] =
          'IIE_AutorisationRechargementPage';
        events['surRechargementPage'] = 'IIE_SurRechargementPage';
        events['etatSaisie'] = 'IIE_setEtatSaisie';
        events['fermerFenetres'] = 'IIE_fermer_fenetres';
        events['resizeNavigateur'] = 'IIE_resizeNavigateur';
        events['actualisationAffichage'] = 'IIE_actualisation_affichage';
        events['eventReponseUpload'] = 'IIE_eventReponseUpload';
        events['eventIOAjax'] = 'IIE_eventIOAjax';
        events['refreshIEHtml'] = 'IEE_refreshIEHtml';
        events['erreurCommunication'] = 'IEE_erreurCommunication';
        events['navigationOnglet'] = 'IEE_navigationOnglet';
        events['changerMembre'] = 'IEE_changerMembre';
        events['nettoyerJSX'] = 'IEE_nettoyerJSX';
        events['toucheDEBUG'] = 'IIE_ToucheDEBUG';
        events['DEBUG_log'] = 'IIE_ADDLOG';
        events['DEBUG_logRequete'] = 'IIE_ADDLOG_REQUETE';
      })((events = ObjetInvocateur.events || (ObjetInvocateur.events = {})));
    })(ObjetInvocateur || (exports.ObjetInvocateur = ObjetInvocateur = {}));
    exports.Invocateur = new ObjetInvocateur();
  },
  fn: 'invocateur.js',
});