IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ControleSaisieEvenement = void 0;
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    let uSaisieEnCours = null,
      uSaisieEnCoursExecution = false;
    const ControleSaisieEvenement = (aCallback, aSansControleNavigation) => {
      if (!aCallback || !MethodesObjet_1.MethodesObjet.isFunction(aCallback)) {
        return;
      }
      if (
        aSansControleNavigation !== true &&
        window.GApplication &&
        !GApplication.getModeExclusif()
      ) {
        let lCallback = null;
        if (_avecSaisieEnCoursActive()) {
          lCallback = uSaisieEnCours.saisie.bind(null, aCallback);
          uSaisieEnCours = null;
        }
        if (
          lCallback ||
          (window.GEtatUtilisateur && window.GEtatUtilisateur.EtatSaisie)
        ) {
          let lPage =
            window.GEtatUtilisateur && window.GEtatUtilisateur.getPageCourante
              ? window.GEtatUtilisateur.getPageCourante()
              : null;
          if (!lPage) {
            lPage =
              window.GInterface && window.GInterface.getPageCourante
                ? window.GInterface.getPageCourante()
                : null;
          }
          if (!lPage || !('setCallbackNavigation' in lPage)) {
            aCallback();
            return;
          }
          if (!lCallback) {
            lCallback = lPage.valider ? lPage.valider.bind(lPage) : null;
          }
          if (!MethodesObjet_1.MethodesObjet.isFunction(lCallback)) {
            aCallback();
            return;
          }
          Invocateur_1.Invocateur.evenement(
            Invocateur_1.ObjetInvocateur.events.etatSaisie,
            false,
          );
          lPage.setCallbackNavigation(null);
          let lCallbackTransmis = false;
          if (!IE.estMobile) {
            lPage.setCallbackNavigation(aCallback);
            lCallbackTransmis = true;
          }
          const lResult = lCallback();
          if (lPage) {
            lPage.focusSurPremierObjet();
          }
          if (!lCallbackTransmis) {
            aCallback();
          }
          return lResult;
        }
      }
      return aCallback();
    };
    exports.ControleSaisieEvenement = ControleSaisieEvenement;
    function _avecSaisieEnCoursActive() {
      if (uSaisieEnCours) {
        if (
          uSaisieEnCours.instance &&
          MethodesObjet_1.MethodesObjet.isFunction(
            uSaisieEnCours.instance.isDestroyed,
          ) &&
          uSaisieEnCours.instance.isDestroyed()
        ) {
          uSaisieEnCours = null;
          return false;
        }
        return (
          MethodesObjet_1.MethodesObjet.isFunction(uSaisieEnCours.saisie) &&
          (!MethodesObjet_1.MethodesObjet.isFunction(uSaisieEnCours.actif) ||
            uSaisieEnCours.actif() === true)
        );
      }
      return false;
    }
    exports.ControleSaisieEvenement.saisieEnCours = (...aParams) => {
      if (window.GApplication && GApplication.getModeExclusif()) {
        uSaisieEnCours = null;
        uSaisieEnCoursExecution = false;
        return false;
      }
      if (_avecSaisieEnCoursActive()) {
        if (!uSaisieEnCoursExecution) {
          uSaisieEnCoursExecution = true;
          const lSaisieEnCours = uSaisieEnCours;
          uSaisieEnCours = null;
          Promise.resolve()
            .then(() => {
              return lSaisieEnCours.saisie(...aParams);
            })
            .catch((e) => {
              IE.log.addLog('erreur saisieEnCours ' + e);
            })
            .then(() => {
              uSaisieEnCoursExecution = false;
            });
        }
        return true;
      }
      return false;
    };
    exports.ControleSaisieEvenement.addSaisieEnCours = (aCallback) => {
      uSaisieEnCoursExecution = false;
      if (window.GApplication && GApplication.getModeExclusif()) {
        uSaisieEnCours = null;
        return;
      }
      const lSaisie = { actif: null, saisie: null, instance: null };
      if (MethodesObjet_1.MethodesObjet.isFunction(aCallback)) {
        lSaisie.saisie = aCallback;
      } else if (
        MethodesObjet_1.MethodesObjet.isObject(aCallback) &&
        MethodesObjet_1.MethodesObjet.isFunction(aCallback.saisie)
      ) {
        lSaisie.saisie = aCallback.saisie;
        lSaisie.actif = aCallback.actif;
        lSaisie.instance = aCallback.instance;
      }
      if (lSaisie.saisie) {
        uSaisieEnCours = lSaisie;
      } else {
        uSaisieEnCours = null;
      }
    };
  },
  fn: 'controlesaisieevenement.js',
});