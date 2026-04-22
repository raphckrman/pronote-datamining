IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetCycles = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const TypeDomaine_1 = require('TypeDomaine');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const ObjetDate_1 = require('ObjetDate');
    const C_JourCycleHorsGrille = -1;
    const C_MaxJoursParSemaine = 7;
    const { C_MaxDomaineCycle } = TypeDomaine_1.TypeDomaine;
    const C_NbJoursCaches = C_MaxDomaineCycle * 7 + 21;
    var EnumRecherche;
    (function (EnumRecherche) {
      EnumRecherche[(EnumRecherche['strict'] = 0)] = 'strict';
      EnumRecherche[(EnumRecherche['autoriserSuivants'] = 1)] =
        'autoriserSuivants';
      EnumRecherche[(EnumRecherche['autoriserPrecedents'] = 2)] =
        'autoriserPrecedents';
    })(EnumRecherche || (EnumRecherche = {}));
    class ObjetCycles {
      constructor() {
        this.donneesCycles = {
          premiereDate: null,
          derniereDate: null,
          dateDebutPremierCycle: null,
          joursOuvresParCycle: null,
          premierJourSemaine: 2,
          joursOuvres: null,
          joursFeries: new TypeEnsembleNombre_1.TypeEnsembleNombre(),
          cyclesSansFeries: false,
          cyclesHebdomadaire: true,
        };
        this.cache = {
          datePremierJourOuvre: null,
          cycleEtIndiceParDate: [],
          datesAfficheesParCycle: [],
          bornesCycles: [],
          nombreCyclesAnneeScolaire: null,
          domaineFerie: null,
          indicesJoursOuvres: null,
        };
        this.recherche = EnumRecherche;
      }
      init(aParametres) {
        $.extend(this.donneesCycles, aParametres);
        this._calculer();
        return this;
      }
      nombreJoursOuvresParCycle() {
        return this.donneesCycles.joursOuvresParCycle;
      }
      dateDebutPremierCycle() {
        return new Date(this.cache.bornesCycles[1].DateDebut);
      }
      dateFinDernierCycle() {
        return new Date(
          this.cache.bornesCycles[this.cache.nombreCyclesAnneeScolaire].DateFin,
        );
      }
      dateEnCycleEtJourCycle(aDate, aTypeRecherche) {
        let LDate;
        let LCycleEtIndice = { cycle: -1, indice: C_JourCycleHorsGrille };
        let lResult = { trouve: false };
        try {
          LDate = aDate;
          if (LDate < this.dateDebutPremierCycle()) {
            if (aTypeRecherche !== ObjetCycles.recherche.autoriserSuivants) {
              return lResult;
            }
            LDate = this.dateDebutPremierCycle();
          }
          if (LDate > this.dateFinDernierCycle()) {
            if (aTypeRecherche !== ObjetCycles.recherche.autoriserPrecedents) {
              return lResult;
            }
            LDate = this.dateFinDernierCycle();
          }
          while (
            LCycleEtIndice.indice === C_JourCycleHorsGrille &&
            LDate >= this.dateDebutPremierCycle() &&
            LDate <= this.dateFinDernierCycle()
          ) {
            LCycleEtIndice = this.cycleEtIndiceCycleDeDate(LDate);
            if (LCycleEtIndice.indice === C_JourCycleHorsGrille) {
              switch (aTypeRecherche) {
                case ObjetCycles.recherche.autoriserSuivants:
                  LDate = ObjetDate_1.GDate.getJourSuivant(LDate, 1);
                  break;
                case ObjetCycles.recherche.autoriserPrecedents:
                  LDate = ObjetDate_1.GDate.getJourSuivant(LDate, -1);
                  break;
                default:
                  return lResult;
              }
            }
          }
        } finally {
          lResult.cycle = LCycleEtIndice.cycle;
          lResult.indice = LCycleEtIndice.indice;
          lResult.trouve = lResult.indice !== C_JourCycleHorsGrille;
        }
        return lResult;
      }
      nombreCyclesAnneeScolaire() {
        return this.cache.nombreCyclesAnneeScolaire;
      }
      cycleDeLaDate(aDate) {
        const LDate = this._getDateBornee(aDate),
          lObj = this.cycleEtIndiceCycleDeDate(LDate);
        return lObj ? lObj.cycle : 0;
      }
      dateEnJourCycle(aDate) {
        const lTimeJour = new Date(
          aDate.getFullYear(),
          aDate.getMonth(),
          aDate.getDate(),
        ).getTime();
        if (!this._cacheDateEnJourCycle) {
          this._cacheDateEnJourCycle = {};
        }
        if (
          !this._cacheDateEnJourCycle[lTimeJour] &&
          this._cacheDateEnJourCycle[lTimeJour] !== 0
        ) {
          const lResult = this.dateEnCycleEtJourCycle(
            aDate,
            ObjetCycles.recherche.autoriserPrecedents,
          );
          if (lResult.trouve) {
            this._cacheDateEnJourCycle[lTimeJour] = lResult.indice;
          }
        }
        const lJourCycle = this._cacheDateEnJourCycle[lTimeJour];
        return lJourCycle === undefined ? 0 : lJourCycle;
      }
      cycleCourant() {
        return this.cycleDeLaDate(new Date());
      }
      dateDebutCycle(aCycle) {
        const lDate =
          this.cache.bornesCycles[
            Math.borner(aCycle, 1, this.nombreCyclesAnneeScolaire())
          ].DateDebut;
        return MethodesObjet_1.MethodesObjet.isDate(lDate)
          ? new Date(lDate)
          : lDate;
      }
      dateFinCycle(aCycle) {
        const lDate =
          this.cache.bornesCycles[
            Math.borner(aCycle, 1, this.nombreCyclesAnneeScolaire())
          ].DateFin;
        return MethodesObjet_1.MethodesObjet.isDate(lDate)
          ? new Date(lDate)
          : lDate;
      }
      datePremierJourOuvreCycle(aCycle) {
        const lCycle = Math.borner(aCycle, 1, this.nombreCyclesAnneeScolaire());
        let lResult = null;
        for (
          let lIndice = 0;
          lIndice < this.donneesCycles.joursOuvresParCycle;
          lIndice++
        ) {
          lResult = this.cache.datesAfficheesParCycle[lCycle][lIndice] || null;
          if (lResult !== null) {
            break;
          }
        }
        return MethodesObjet_1.MethodesObjet.isDate(lResult)
          ? new Date(lResult)
          : lResult;
      }
      dateDernierJourOuvreCycle(aCycle) {
        const lCycle = Math.borner(aCycle, 1, this.nombreCyclesAnneeScolaire());
        let lIndice = this.donneesCycles.joursOuvresParCycle;
        let lResult = null;
        while (lResult === null && lIndice >= 0) {
          lResult = this.cache.datesAfficheesParCycle[lCycle][lIndice] || null;
          lIndice += -1;
        }
        return MethodesObjet_1.MethodesObjet.isDate(lResult)
          ? new Date(lResult)
          : lResult;
      }
      jourCycleEnDate(AJourCycle, ACycle) {
        if (ACycle < 1) {
          return this.dateDebutPremierCycle();
        }
        if (ACycle > this.cache.nombreCyclesAnneeScolaire) {
          return this.dateFinCycle(this.cache.nombreCyclesAnneeScolaire);
        }
        if (AJourCycle < 0) {
          return this.dateDebutCycle(ACycle);
        }
        if (!this.cache.datesAfficheesParCycle[ACycle]) {
          return this.dateDebutPremierCycle();
        }
        if (AJourCycle >= this.cache.datesAfficheesParCycle[ACycle].length) {
          return this.dateFinCycle(ACycle);
        }
        const lDate = this.cache.datesAfficheesParCycle[ACycle][AJourCycle];
        return MethodesObjet_1.MethodesObjet.isDate(lDate)
          ? new Date(lDate)
          : lDate;
      }
      estDateFerie(aDate) {
        if (this.donneesCycles.joursFeries) {
          const lJourAnnuel = ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
            this.dateDebutPremierCycle(),
            aDate,
          );
          return this.donneesCycles.joursFeries.contains(lJourAnnuel + 1);
        }
        return false;
      }
      getDomaineFerie() {
        if (!this.cache.domaineFerie) {
          this.cache.domaineFerie = new TypeDomaine_1.TypeDomaine();
          let lJourCycle,
            LSemaineFeriee,
            lNombreCycles = this.nombreCyclesAnneeScolaire(),
            lNombreJoursCycle = this.nombreJoursOuvresParCycle(),
            lDate;
          for (let lCycle = 1; lCycle <= lNombreCycles; lCycle += 1) {
            LSemaineFeriee = true;
            for (
              lJourCycle = 0;
              lJourCycle < lNombreJoursCycle && LSemaineFeriee;
              lJourCycle += 1
            ) {
              lDate = this.jourCycleEnDate(lJourCycle, lCycle);
              LSemaineFeriee =
                this.estDateFerie(lDate) || !this._dateDansBorne(lDate);
            }
            this.cache.domaineFerie.setValeur(LSemaineFeriee, lCycle);
          }
        }
        return this.cache.domaineFerie;
      }
      cycleDansAnnee(aCycle) {
        return Math.max(1, Math.min(this.nombreCyclesAnneeScolaire(), aCycle));
      }
      indicesJoursOuvres() {
        if (!this.cache.indicesJoursOuvres) {
          this.cache.indicesJoursOuvres = [];
          if (this.donneesCycles.cyclesHebdomadaire) {
            for (let i = 0; i < 7; i++) {
              if (this.donneesCycles.joursOuvres.contains(i)) {
                let lJour = (i + this.donneesCycles.premierJourSemaine - 2) % 7;
                if (lJour < 0) {
                  lJour = 6;
                }
                this.cache.indicesJoursOuvres.push(lJour);
              }
            }
          } else {
            for (let i = 0; i < this.donneesCycles.joursOuvresParCycle; i++) {
              this.cache.indicesJoursOuvres.push(i);
            }
          }
        }
        return this.cache.indicesJoursOuvres;
      }
      _calculer() {
        let lDatesAIgnorer = new TypeEnsembleNombre_1.TypeEnsembleNombre(),
          lEnSemaine,
          lJourSemaine,
          iJour,
          iCycle,
          lIndiceCycle,
          lJourHebdo,
          LCycle,
          IDate,
          LIndiceJourAnnee,
          LPasToutRempli,
          lTab,
          i;
        this._cacheDateEnJourCycle = null;
        if (
          !this.donneesCycles.joursOuvres ||
          this.donneesCycles.joursOuvres.count() === 0
        ) {
          return;
        }
        if (
          this.donneesCycles.cyclesSansFeries &&
          this.donneesCycles.joursFeries
        ) {
          lTab = this.donneesCycles.joursFeries.items();
          for (i in lTab) {
            lDatesAIgnorer.add(
              ObjetDate_1.GDate.getJourSuivant(
                this.donneesCycles.dateDebutPremierCycle,
                lTab[i] - 1,
              ).getTime(),
            );
          }
        }
        this.cache.datePremierJourOuvre = this.donneesCycles.premiereDate;
        lEnSemaine =
          lDatesAIgnorer.count() === 0 &&
          this.donneesCycles.joursOuvresParCycle %
            this.donneesCycles.joursOuvres.count() ===
            0;
        if (lEnSemaine) {
          lJourSemaine = this.cache.datePremierJourOuvre.getDay() + 1;
          while (lJourSemaine !== this.donneesCycles.premierJourSemaine) {
            this.cache.datePremierJourOuvre = ObjetDate_1.GDate.getJourSuivant(
              this.cache.datePremierJourOuvre,
              -1,
            );
            lJourSemaine = this.cache.datePremierJourOuvre.getDay() + 1;
          }
        }
        for (iJour = 0; iJour <= C_NbJoursCaches; iJour++) {
          this.cache.cycleEtIndiceParDate[iJour] = {
            cycle: 1,
            indice: C_JourCycleHorsGrille,
          };
        }
        for (iCycle = 0; iCycle <= ObjetCycles.C_MaxDomaineCycle; iCycle += 1) {
          this.cache.datesAfficheesParCycle[iCycle] = [];
          this.cache.bornesCycles[iCycle] = {
            DateDebut: new Date(0),
            DateFin: new Date(0),
          };
        }
        this.cache.bornesCycles[1].DateDebut = this.cache.datePremierJourOuvre;
        lIndiceCycle = -1;
        lJourHebdo =
          _DateEnJourHebdo(
            this.cache.datePremierJourOuvre,
            this.donneesCycles.premierJourSemaine,
          ) - 1;
        LCycle = 0;
        let lIncDate = 0;
        this.cache.nombreCyclesAnneeScolaire = 0;
        LIndiceJourAnnee = 0;
        LPasToutRempli = true;
        while (LPasToutRempli) {
          IDate = ObjetDate_1.GDate.getJourSuivant(
            this.cache.datePremierJourOuvre,
            lIncDate,
          );
          lIncDate++;
          lJourHebdo = _IncJourHebdo(lJourHebdo);
          if (
            lDatesAIgnorer.contains(IDate.getTime()) ||
            (!lEnSemaine &&
              IDate.getTime() < this.donneesCycles.premiereDate.getTime()) ||
            !this.donneesCycles.joursOuvres.contains(lJourHebdo)
          ) {
            if (LIndiceJourAnnee <= C_NbJoursCaches) {
              this.cache.cycleEtIndiceParDate[LIndiceJourAnnee] = {
                cycle: Math.max(1, LCycle),
                indice: C_JourCycleHorsGrille,
              };
            }
          } else {
            lIndiceCycle =
              (lIndiceCycle + 1) % this.donneesCycles.joursOuvresParCycle;
            if (lIndiceCycle === 0) {
              LCycle += 1;
            }
            if (LIndiceJourAnnee <= C_NbJoursCaches) {
              this.cache.cycleEtIndiceParDate[LIndiceJourAnnee] = {
                cycle: LCycle,
                indice: lIndiceCycle,
              };
            }
            if (LCycle <= ObjetCycles.C_MaxDomaineCycle) {
              this.cache.datesAfficheesParCycle[LCycle][lIndiceCycle] = IDate;
            }
            if (lIndiceCycle === 0 && LCycle > 1) {
              if (LCycle <= ObjetCycles.C_MaxDomaineCycle) {
                this.cache.bornesCycles[LCycle].DateDebut = new Date(
                  IDate.getTime(),
                );
              }
              if (LCycle - 1 <= ObjetCycles.C_MaxDomaineCycle) {
                this.cache.bornesCycles[LCycle - 1].DateFin =
                  ObjetDate_1.GDate.getJourSuivant(IDate, -1);
              }
            }
          }
          if (
            ObjetDate_1.GDate.estJourEgal(
              IDate,
              this.donneesCycles.derniereDate,
            )
          ) {
            this.cache.nombreCyclesAnneeScolaire = LCycle;
          }
          LIndiceJourAnnee += 1;
          LPasToutRempli =
            LCycle <= ObjetCycles.C_MaxDomaineCycle ||
            LIndiceJourAnnee <= C_NbJoursCaches;
        }
      }
      cycleEtIndiceCycleDeDate(aDate) {
        const lDate = ObjetDate_1.GDate.getJour(aDate);
        const LDateRef = this.cache.bornesCycles[1].DateDebut;
        let lResult = { cycle: -1, indice: C_JourCycleHorsGrille };
        if (
          lDate.getTime() >= LDateRef.getTime() &&
          lDate.getTime() <=
            this.cache.bornesCycles[
              this.cache.nombreCyclesAnneeScolaire
            ].DateFin.getTime()
        ) {
          lResult =
            this.cache.cycleEtIndiceParDate[
              ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(LDateRef, lDate)
            ];
        }
        return lResult;
      }
      _getDateBornee(aDate) {
        if (aDate < this.donneesCycles.premiereDate) {
          return new Date(this.donneesCycles.premiereDate.getTime());
        }
        if (aDate > this.donneesCycles.derniereDate) {
          return new Date(this.donneesCycles.derniereDate.getTime());
        } else {
          return aDate;
        }
      }
      _dateDansBorne(aDate) {
        return (
          (aDate >= this.donneesCycles.premiereDate ||
            ObjetDate_1.GDate.estJourEgal(
              aDate,
              this.donneesCycles.premiereDate,
            )) &&
          (aDate <= this.donneesCycles.derniereDate ||
            ObjetDate_1.GDate.estJourEgal(
              aDate,
              this.donneesCycles.derniereDate,
            ))
        );
      }
    }
    exports.ObjetCycles = ObjetCycles;
    ObjetCycles.C_IndicePremierJourCycle = 0;
    ObjetCycles.C_IndiceDernierJourCycle = Number.MAX_VALUE;
    ObjetCycles.C_IndiceDernierJourOuvreCycle = Number.MAX_VALUE - 1;
    ObjetCycles.C_MaxDomaineCycle = C_MaxDomaineCycle;
    ObjetCycles.recherche = EnumRecherche;
    function _DateEnJourHebdo(ADate, APremierJourSemaine) {
      let LPremierJour = APremierJourSemaine;
      if (LPremierJour > C_MaxJoursParSemaine) {
        LPremierJour = LPremierJour - C_MaxJoursParSemaine;
      }
      let LJourTt = ADate.getDay() + 1;
      if (LJourTt >= LPremierJour) {
        return LJourTt - LPremierJour;
      }
      return LJourTt + C_MaxJoursParSemaine - LPremierJour;
    }
    function _IncJourHebdo(aJourHebdo) {
      return (aJourHebdo + 1) % C_MaxJoursParSemaine;
    }
  },
  fn: 'objetcycles.js',
});