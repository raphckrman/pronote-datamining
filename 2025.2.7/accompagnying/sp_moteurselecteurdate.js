IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MoteurSelecteurDate = void 0;
    const ObjetDate_1 = require('ObjetDate');
    class MoteurSelecteurDate {
      constructor(aParams) {
        (this.options = {
          premiereDate: ObjetDate_1.GDate.premiereDate,
          derniereDate: ObjetDate_1.GDate.derniereDate,
          premiereDateSaisissable: undefined,
          afficherPremiereDateSaisissable: true,
          avecSelectionSemaine: false,
          joursSemaineValide: null,
          domaineValide: undefined,
          joursFeries: null,
          joursValidesAnnuels: undefined,
          estJoursValidesAnnuelsSelonPremiereDate: false,
          joursMarques: undefined,
          estJoursMarquesSelonPremiereDate: false,
        }),
          this.setOptions(aParams);
      }
      setOptions(aOptions) {
        Object.assign(this.options, aOptions);
        if (
          this.options.premiereDate &&
          this.options.derniereDate &&
          this.options.derniereDate < this.options.premiereDate
        ) {
          this.options.derniereDate = new Date(
            this.options.premiereDate.getTime(),
          );
        }
        if (this.options.premiereDateSaisissable) {
          this.options.premiereDateSaisissable = this.getDateBornee(
            this.options.premiereDateSaisissable,
          );
        }
        return this;
      }
      estDateValide(aDate) {
        if (!aDate || !aDate.getDay) {
          return false;
        }
        if (!this.estDateDansBorne(aDate, true)) {
          return false;
        }
        if (!this.estJoursSemaineValide(aDate)) {
          return false;
        }
        if (!IE.Cycles) {
          return true;
        }
        const lDateDebCycle = IE.Cycles.dateDebutPremierCycle();
        const lNbjours =
          ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(lDateDebCycle, aDate) + 1;
        if (
          this.options.joursFeries &&
          this.options.joursFeries.getValeur(lNbjours)
        ) {
          return false;
        }
        const lNbJoursPremDate = this.options
          .estJoursValidesAnnuelsSelonPremiereDate
          ? ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
              this.options.premiereDate,
              aDate,
            )
          : ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(lDateDebCycle, aDate) +
            1;
        if (
          this.options.joursValidesAnnuels &&
          !this.options.joursValidesAnnuels.getValeur(lNbJoursPremDate)
        ) {
          return false;
        }
        if (this.options.domaineValide) {
          const lNumeroCycle = IE.Cycles.cycleDeLaDate(aDate);
          if (
            lNumeroCycle <= 0 ||
            !this.options.domaineValide.getValeur(lNumeroCycle)
          ) {
            return false;
          }
        }
        return true;
      }
      getPremiereDateValide() {
        return this.options.premiereDateSaisissable
          ? this.options.premiereDateSaisissable
          : this.options.premiereDate;
      }
      estJoursSemaineValide(aDate) {
        const lJour = ObjetDate_1.GDate.getJourDeDate(aDate);
        return this.options.joursSemaineValide
          ? this.options.joursSemaineValide.getValeur(lJour + 1)
          : true;
      }
      estDateDansBorne(aDate, aAvecDateValide) {
        const lPremiereDate = aAvecDateValide
          ? this.getPremiereDateValide()
          : this.options.premiereDate;
        if (
          lPremiereDate &&
          ObjetDate_1.GDate.getDifferenceJours(aDate, lPremiereDate) < 0
        ) {
          return false;
        }
        if (
          this.options.derniereDate &&
          ObjetDate_1.GDate.getDifferenceJours(
            aDate,
            this.options.derniereDate,
          ) > 0
        ) {
          return false;
        }
        return true;
      }
      getDateBornee(aDate, aAvecDateValide) {
        const lPremiereDate = aAvecDateValide
          ? this.getPremiereDateValide()
          : this.options.premiereDate;
        if (
          lPremiereDate &&
          aDate < lPremiereDate &&
          !ObjetDate_1.GDate.estJourEgal(aDate, lPremiereDate)
        ) {
          return new Date(lPremiereDate.getTime());
        }
        if (
          this.options.derniereDate &&
          aDate > this.options.derniereDate &&
          !ObjetDate_1.GDate.estJourEgal(aDate, this.options.derniereDate)
        ) {
          return new Date(this.options.derniereDate.getTime());
        }
        return new Date(aDate.getTime());
      }
      rechercheSuivantValide(aDate, aSensRechercheInverse) {
        if (this.options.avecSelectionSemaine) {
          return this._getSemaineSuivanteValide(
            aDate,
            aSensRechercheInverse,
            true,
          );
        } else {
          return this._getJourSuivantValide(aDate, aSensRechercheInverse, true);
        }
      }
      getDateSelonValidite(aDate) {
        if (this.options.derniereDate && aDate > this.options.derniereDate) {
          return (
            this._getJourSuivantValide(this.options.derniereDate, true) || aDate
          );
        }
        if (this.options.premiereDate && aDate < this.options.premiereDate) {
          return (
            this._getJourSuivantValide(this.options.premiereDate, false) ||
            aDate
          );
        }
        return this._getJourSuivantValide(aDate, false) || aDate;
      }
      _getJourSuivantValide(
        aDateCourant,
        aSensRechercheInverse,
        aAvecIncrement,
      ) {
        const lNrJours = aSensRechercheInverse ? -1 : 1;
        let lDateCourant = aAvecIncrement
          ? ObjetDate_1.GDate.getJourSuivant(aDateCourant, lNrJours)
          : aDateCourant;
        const lAvecArret =
          (aSensRechercheInverse && !this.getPremiereDateValide()) ||
          (!aSensRechercheInverse && !this.options.derniereDate);
        let lCompteurArret = 30;
        if (
          !this.estDateValide(lDateCourant) &&
          this.estDateDansBorne(lDateCourant, true)
        ) {
          do {
            lDateCourant = ObjetDate_1.GDate.getJourSuivant(
              lDateCourant,
              lNrJours,
            );
            if (lAvecArret) {
              lCompteurArret -= 1;
            }
          } while (
            !this.estDateValide(lDateCourant) &&
            this.estDateDansBorne(lDateCourant, true) &&
            lCompteurArret >= 0
          );
        }
        if (!this.estDateValide(lDateCourant)) {
          return null;
        } else {
          return lDateCourant;
        }
      }
      _getSemaineSuivanteValide(aDate, aSensRechercheInverse, aAvecIncrement) {
        let lDateCourant = aDate;
        const lNumeroCycle = IE.Cycles.cycleDeLaDate(lDateCourant);
        const lIncrement = aSensRechercheInverse ? -1 : 1;
        const lAvecArret =
          (aSensRechercheInverse && !this.getPremiereDateValide()) ||
          (!aSensRechercheInverse && !this.options.derniereDate);
        if (aAvecIncrement) {
          lDateCourant = aSensRechercheInverse
            ? IE.Cycles.dateDernierJourOuvreCycle(lNumeroCycle - 1)
            : IE.Cycles.dateDebutCycle(lNumeroCycle + 1);
        }
        if (
          !this.estDateValide(lDateCourant) &&
          this.estDateDansBorne(
            ObjetDate_1.GDate.getJourSuivant(lDateCourant, lIncrement),
            true,
          )
        ) {
          do {
            lDateCourant = ObjetDate_1.GDate.getJourSuivant(
              lDateCourant,
              lIncrement,
            );
          } while (
            !this.estDateValide(lDateCourant) &&
            this.estDateDansBorne(lDateCourant, true) &&
            !lAvecArret
          );
        }
        if (!this.estDateValide(lDateCourant)) {
          return null;
        }
        return this.getDateBornee(lDateCourant, true);
      }
    }
    exports.MoteurSelecteurDate = MoteurSelecteurDate;
  },
  fn: 'moteurselecteurdate.js',
});