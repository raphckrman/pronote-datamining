IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_Date = void 0;
    const InterfaceSelecteurDate_1 = require('InterfaceSelecteurDate');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const MoteurSelecteurDate_1 = require('MoteurSelecteurDate');
    class ObjetFenetre_Date extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          titre: 'Choisir un jour',
          largeur: 330,
          hauteur: 100,
          fermerFenetreSurClicHorsFenetre: IE.estMobile,
          avecTailleSelonContenu: true,
          listeBoutons: ['Fermer'],
          avecAucuneDate: false,
        });
        this.moteurDate = new MoteurSelecteurDate_1.MoteurSelecteurDate();
        this.parametres = {
          listeMois: new ObjetListeElements_1.ObjetListeElements(),
          indiceMoisCourant: -1,
        };
      }
      composeContenu() {
        const T = [];
        T.push(
          '<div id="',
          this.getInstance(this.identSelecteur).getNom(),
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
        this.getInstance(this.identSelecteur).setDonnees(aDate);
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