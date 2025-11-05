IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SaisieMdpCP = void 0;
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetSaisieMotDePasseCP_1 = require('ObjetSaisieMotDePasseCP');
    const ObjetChaine_1 = require('ObjetChaine');
    class ObjetFenetre_SaisieMdpCP extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          titre: ObjetChaine_1.GChaine.insecable(
            'Personnalisation du mot de passe',
          ),
          listeBoutons: [
            'Annuler',
            {
              valider: true,
              libelle: 'Valider',
            },
          ],
          avecTailleSelonContenu: true,
          largeur: 300,
          optionsMDP: { forcerModificationMdp: false },
        });
      }
      construireInstances() {
        this.identMDP = this.add(
          ObjetSaisieMotDePasseCP_1.ObjetSaisieMotDePasseCP,
        );
      }
      composeContenu() {
        return [
          '<div id="',
          this.getInstance(this.identMDP).getNom(),
          '"></div>',
        ].join('');
      }
      setDonnees(aDonneesReglesMdp) {
        this.afficher();
        this.getInstance(this.identMDP)
          .setOptions(
            Object.assign(this.optionsFenetre.optionsMDP || {}, {
              donneesReglesMdp: aDonneesReglesMdp,
              callbackFocusValidation: () => {
                this.setBoutonFocus({ valider: true });
              },
              callbackApresValidation: (aParams) => {
                if (aParams) {
                  this.fermer();
                  this.callback.appel(!aParams.avecErreur, aParams);
                }
              },
            }),
          )
          .setDonnees();
        this.positionnerFenetre();
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          fenetreBtn: {
            getDisabled: function (aBoutonRepeat) {
              return aBoutonRepeat.element.valider
                ? !aInstance
                    .getInstance(aInstance.identMDP)
                    .avecValidationPossible()
                : false;
            },
          },
        });
      }
      surValidation(ANumeroBouton) {
        const lBouton = this.getBoutonNumero(ANumeroBouton);
        if (lBouton && lBouton.valider) {
          this.getInstance(this.identMDP).valider();
        } else {
          this.fermer();
          this.callback.appel(false);
        }
      }
    }
    exports.ObjetFenetre_SaisieMdpCP = ObjetFenetre_SaisieMdpCP;
  },
  fn: 'objetfenetre_saisiemdpcp.js',
});