IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_Date = void 0;
    const InterfaceSelecteurDate_1 = require('@cp/script/InterfaceSelecteurDate');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const MoteurSelecteurDate_1 = require('@cp/script/MoteurSelecteurDate');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    class ObjetFenetre_Date extends ObjetFenetre_1.ObjetFenetre {
      constructor(aParams) {
        super(aParams);
        this.setOptionsFenetre({
          titre: 'Choisir un jour',
          largeur: 330,
          hauteur: 100,
          fermerFenetreSurClicHorsFenetre: IE.estMobile,
          avecTailleSelonContenu: true,
          avecTailleSelonContenuMobile: true,
          listeBoutons: ['Fermer'],
          avecAucuneDate: false,
        });
        this.moteurDate = new MoteurSelecteurDate_1.MoteurSelecteurDate();
      }
      composeContenu() {
        const T = [];
        T.push(
          '<div id="',
          this.getNomInstance(this.identSelecteur),
          '" class="ContentBox"></div>',
        );
        return T.join('');
      }
      setParametres(
        aPremierLundi,
        aPremiereDate,
        aDerniereDate,
        aActifJour,
        aActifSemaine,
        aJoursFeries,
        aAvecAucuneDate,
      ) {
        this.setOptionsMoteurDate({
          premiereDate: aPremiereDate,
          derniereDate: aDerniereDate,
          joursSemaineValide: aActifJour,
          domaineValide: aActifSemaine,
          joursFeries: aJoursFeries,
        });
        if (aAvecAucuneDate !== undefined) {
          this.setOptionsFenetre({ avecAucuneDate: aAvecAucuneDate });
        }
      }
      setMoteurDate(aMoteurDate) {
        this.moteurDate = aMoteurDate;
      }
      setOptionsMoteurDate(aOptions) {
        this.moteurDate.setOptions(aOptions);
      }
      setDonnees(aDate) {
        this.afficher();
        this.date = aDate;
        if (this.optionsFenetre.avecAucuneDate) {
          this.setOptionsFenetre({
            listeBoutons: [
              'Aucune date',
            ],
          });
        }
        const lInterface = this.getInstance(this.identSelecteur);
        if (MethodesObjet_1.MethodesObjet.isString(this.optionsFenetre.titre)) {
          lInterface.setAriaLabel(this.optionsFenetre.titre);
        }
        lInterface.setDonnees(aDate);
      }
      construireInstances() {
        this.identSelecteur = this.add(
          InterfaceSelecteurDate_1.InterfaceSelecteurDate,
          null,
          (aInstance) => {
            aInstance.setMoteurDate(this.moteurDate);
          },
        );
      }
      setJoursMarques(aJoursMarques) {
        this.moteurDate.setOptions({ joursMarques: aJoursMarques });
      }
      setPremiereDateSaisissable(aPremiereDateSaisissable, aAfficher) {
        this.moteurDate.setOptions({
          premiereDateSaisissable:
            aPremiereDateSaisissable || this.moteurDate.options.premiereDate,
          afficherPremiereDateSaisissable: aAfficher ? aAfficher : false,
        });
      }
      surValidation(aGenreBouton) {
        if (
          aGenreBouton === -1 ||
          aGenreBouton === 0 ||
          this.moteurDate.estDateDansBorne(this.date)
        ) {
          this.fermer();
          this.callback.appel(aGenreBouton, this.date);
        }
      }
    }
    exports.ObjetFenetre_Date = ObjetFenetre_Date;
  },
  fn: 'objetfenetre_date.js',
});