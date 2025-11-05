IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetParametresUtilisateur = void 0;
    const ObjetRequeteJSON_1 = require('ObjetRequeteJSON');
    const MethodesObjet_1 = require('MethodesObjet');
    const CollectionRequetes_1 = require('CollectionRequetes');
    class ObjetParametresUtilisateur {
      constructor() {
        this.init();
      }
      get(aChaine) {
        switch (aChaine) {
          default: {
            let lValue = MethodesObjet_1.MethodesObjet.get(
              this._parametres,
              aChaine,
            );
            if (lValue === undefined) {
              lValue = false;
            }
            return lValue;
          }
        }
      }
      set(aChaine, aValeur, aIgnorerSaisie) {
        const lAncienneValeur = MethodesObjet_1.MethodesObjet.get(
          this._parametres,
          aChaine,
        );
        let lResult = false;
        if (aChaine.trim && aChaine.split) {
          const lSplit = aChaine.split('.');
          let lObjet = this._parametres;
          const lLength = lSplit.length;
          for (let i = 0; i < lLength - 1; i++) {
            if (!MethodesObjet_1.MethodesObjet.isObject(lObjet[lSplit[i]])) {
              lObjet[lSplit[i]] = {};
            }
            lObjet = lObjet[lSplit[i]];
          }
        }
        switch (aChaine) {
          case 'widgets':
            this._parametres.widgets = aValeur;
            lResult = true;
            break;
          default:
            lResult = MethodesObjet_1.MethodesObjet.set(
              this._parametres,
              aChaine,
              aValeur,
            );
            if (lResult) {
              lResult =
                aValeur !== lAncienneValeur ||
                MethodesObjet_1.MethodesObjet.isObject(aValeur);
            }
        }
        if (lResult && !aIgnorerSaisie) {
          this._save();
        }
      }
      has(aChaine) {
        switch (aChaine) {
          default: {
            const lValue = MethodesObjet_1.MethodesObjet.get(
              this._parametres,
              aChaine,
            );
            if (lValue !== undefined) {
              return true;
            }
          }
        }
        return false;
      }
      init() {
        this._parametres = {};
      }
      chargerJSON(aJSON) {
        if (aJSON) {
          this._parametres = aJSON;
        }
      }
      _save() {
        new ObjetRequeteSaisieParametresUtilisateur().lancerRequete(
          this._parametres,
        );
      }
    }
    exports.ObjetParametresUtilisateur = ObjetParametresUtilisateur;
    class ObjetRequeteSaisieParametresUtilisateur extends ObjetRequeteJSON_1.ObjetRequeteConsultation {
      constructor() {
        super(null, () => {});
        this.setOptions({ sansBlocageInterface: true });
      }
      lancerRequete(aParam) {
        this.JSON.parametres = aParam;
        return this.appelAsynchrone();
      }
      actionApresRequete() {
        this.callbackReussite.appel();
      }
    }
    CollectionRequetes_1.Requetes.inscrire(
      'SaisieParametresUtilisateur',
      ObjetRequeteSaisieParametresUtilisateur,
    );
  },
  fn: 'objetparametresutilisateur.js',
});