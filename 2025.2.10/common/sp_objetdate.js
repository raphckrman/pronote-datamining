IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GDate = exports.ObjetDate = exports.TradDate = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    const TypeDomaine_1 = require('TypeDomaine');
    const TypeFormatDureeEnChaine_1 = require('TypeFormatDureeEnChaine');
    const UtilitaireDuree_1 = require('UtilitaireDuree');
    const IEHtml = require('IEHtml');
    const ObjetTraduction_2 = require('ObjetTraduction');
    const TradDate = ObjetTraduction_2.TraductionsModule.getModule('Date', {
      Mois: ['', '', '', '', '', '', '', '', '', '', '', ''],
      MoisCourt: ['', '', '', '', '', '', '', '', '', '', '', ''],
    });
    exports.TradDate = TradDate;
    class ObjetDate {
      constructor() {
        this.DureeMillisecondes = 1;
        this.DureeSecondes = 1000 * this.DureeMillisecondes;
        this.DureeMinutes = 60 * this.DureeSecondes;
        this.DureeHeures = 60 * this.DureeMinutes;
        this.DureeJours = 24 * this.DureeHeures;
        this.DureeSemaines = 7 * this.DureeJours;
        this.semainesParAn = 52;
        this.aujourdhui = new Date();
        this.demain = new Date();
        this.demain.setDate(this.demain.getDate() + 1);
        this.hier = new Date();
        this.hier.setDate(this.hier.getDate() - 1);
        this.parametres = {
          numeroPremiereSemaine: null,
          formatDureeEnChaine:
            TypeFormatDureeEnChaine_1.TypeFormatDureeEnChaine.fdcHeuresMinutes,
        };
        this._cacheSemainesCalendaires = {};
      }
      setDonnees(
        APremierLundi,
        aPremiereDate,
        aDerniereDate,
        APlacesParJour,
        APlacesParHeure,
        ADureeSequence,
        APremiereHeure,
        AListeHeures1,
        AListeHeures2,
        aJoursOuvres,
        aJour,
      ) {
        this.PremierLundi = APremierLundi;
        this.premiereDate = aPremiereDate;
        this.derniereDate = aDerniereDate;
        this.PlacesParJour = APlacesParJour;
        this.PlacesParHeure = APlacesParHeure;
        this.DureeSequence = ADureeSequence;
        this.PremiereHeure = APremiereHeure;
        this.ListeHeures =
          AListeHeures1 || new ObjetListeElements_1.ObjetListeElements();
        this.ListeHeuresFin = AListeHeures2;
        this.joursOuvres =
          aJoursOuvres || new TypeDomaine_1.TypeDomaine(true, 7);
        this.jour = this.getDateDemiJour(aJour || new Date());
      }
      setParametresDate(aParams) {
        Object.assign(this.parametres, aParams);
        return this;
      }
      getDerniereDate() {
        return this.derniereDate;
      }
      estUnJourOuvre(aDate) {
        return this.joursOuvres.getValeur(GDate.getJourDeDate(aDate) + 1);
      }
      estDateEgale(aDate1, aDate2) {
        if (aDate1 && aDate2) {
          if (!this.estDateValide(aDate1) || !this.estDateValide(aDate2)) {
            return false;
          }
          return aDate1.getTime() - aDate2.getTime() === 0;
        } else {
          return false;
        }
      }
      estJourEgal(aDate1, aDate2) {
        return (
          aDate1 &&
          aDate2 &&
          aDate1.getDate() === aDate2.getDate() &&
          aDate1.getMonth() === aDate2.getMonth() &&
          aDate1.getFullYear() === aDate2.getFullYear()
        );
      }
      estJourSemaineEgal(aDate1, aDate2) {
        return (
          aDate1 &&
          aDate2 &&
          aDate1.getDay() === aDate2.getDay() &&
          aDate1.getMonth() === aDate2.getMonth() &&
          aDate1.getFullYear() === aDate2.getFullYear()
        );
      }
      estJourCourant(aDate, aBorner) {
        return this.estJourEgal(aDate, this.getDateCourante(aBorner));
      }
      estAvantJourCourant(aDate, aBorner) {
        if (aDate) {
          if (!this.estDateValide(aDate)) {
            return false;
          }
          return aDate.getTime() - this.getDateCourante(aBorner).getTime() < 0;
        } else {
          return false;
        }
      }
      estAvantJour(aDate1, aDate2) {
        if (aDate1 && aDate2) {
          if (!this.estDateValide(aDate1) || !this.estDateValide(aDate2)) {
            return false;
          }
          return aDate1.getTime() - aDate2.getTime() < 0;
        }
      }
      estDateValide(aDate) {
        return (
          MethodesObjet_1.MethodesObjet.isDate(aDate) && !isNaN(aDate.getTime())
        );
      }
      getDateJour(aDate, aBorner = false) {
        let lDate = aDate;
        if (!this.estDateValide(aDate)) {
          lDate = new Date();
        }
        if (aBorner) {
          lDate = this.getDateBornee(lDate);
        }
        return new Date(lDate.getFullYear(), lDate.getMonth(), lDate.getDate());
      }
      getPrecedentJourOuvre(aDate) {
        let lDate = aDate;
        do {
          lDate = this.getJourSuivant(lDate, -1);
        } while (!this.estUnJourOuvre(lDate) && lDate > this.premiereDate);
        return lDate;
      }
      getProchainJourOuvre(aDate) {
        let lDate = aDate;
        do {
          lDate = this.getJourSuivant(lDate);
        } while (!this.estUnJourOuvre(lDate) && lDate < this.derniereDate);
        return lDate;
      }
      getDateBornee(aDate) {
        if (
          aDate < this.premiereDate &&
          !this.estJourEgal(aDate, this.premiereDate)
        ) {
          return new Date(this.premiereDate.getTime());
        }
        if (
          aDate > this.derniereDate &&
          !this.estJourEgal(aDate, this.derniereDate)
        ) {
          return new Date(this.derniereDate.getTime());
        }
        return aDate;
      }
      getDateCourante(aBorner = false) {
        let lDate = new Date();
        lDate = new Date(
          lDate.getFullYear(),
          lDate.getMonth(),
          lDate.getDate(),
        );
        return aBorner === false ? lDate : this.getDateBornee(lDate);
      }
      getDateHeureCourante() {
        return this.getDateBornee(new Date());
      }
      dateEntreLesDates(
        aDate,
        aBorneDateDebut,
        aBorneDateFin,
        aComparaisonTime = false,
      ) {
        if (!aDate) {
          return false;
        }
        return (
          (!aBorneDateDebut ||
            aDate >= aBorneDateDebut ||
            (aComparaisonTime !== true &&
              this.estJourEgal(aDate, aBorneDateDebut))) &&
          (!aBorneDateFin ||
            aDate <= aBorneDateFin ||
            (aComparaisonTime !== true &&
              this.estJourEgal(aDate, aBorneDateFin)))
        );
      }
      estDateJourAvant(aDate1, aDate2) {
        if (aDate1 && aDate2) {
          if (!this.estDateValide(aDate1) || !this.estDateValide(aDate2)) {
            return false;
          }
          return (
            this.estAvantJour(aDate1, aDate2) &&
            !this.estJourEgal(aDate1, aDate2)
          );
        } else {
          return false;
        }
      }
      estDateDansAnneeScolaire(aDate) {
        return this.dateEntreLesDates(
          aDate,
          this.premiereDate,
          this.derniereDate,
        );
      }
      getDateDemiJour(aDate) {
        return new Date(
          aDate.getFullYear(),
          aDate.getMonth(),
          aDate.getDate(),
          12,
        );
      }
      premierJourOuvreDeLaSemaine(aNrSemaine) {
        return IE.Cycles.datePremierJourOuvreCycle(aNrSemaine);
      }
      dernierJourOuvreDeLaSemaine(aNrSemaine) {
        return IE.Cycles.dateDernierJourOuvreCycle(aNrSemaine);
      }
      getJour(aDate, N = 0) {
        return new Date(
          aDate.getFullYear(),
          aDate.getMonth(),
          aDate.getDate(),
          N === null || N === undefined ? 0 : 24 * N,
        );
      }
      getJourDeSemaine(ADate, B) {
        return (7 + ADate.getDay() - (B ? this.PremierLundi.getDay() : 1)) % 7;
      }
      getSemaineSuivante(ADate, N = 1) {
        return new Date(
          ADate.getTime() +
            (N === null || N === undefined ? 1 : N) * this.DureeSemaines,
        );
      }
      getJourSuivant(ADate, N = 1) {
        if (!ADate || !ADate.getTime) {
          return null;
        }
        let lDate = new Date(ADate.getTime());
        const lNombreJours = MethodesObjet_1.MethodesObjet.isNumber(N) ? N : 1;
        lDate.setDate(lDate.getDate() + lNombreJours);
        if (
          Math.abs(lNombreJours) === 1 &&
          ADate.getDate() === lDate.getDate()
        ) {
          const lDateCorrigee = new Date(ADate.getTime());
          lDateCorrigee.setHours(ADate.getHours() + 1);
          if (lDateCorrigee.getDate() !== ADate.getDate()) {
            lDateCorrigee.setHours(ADate.getHours() - 1);
          }
          lDateCorrigee.setDate(lDateCorrigee.getDate() + lNombreJours);
          lDate = lDateCorrigee;
        }
        return lDate;
      }
      estAnneeBissextile(aAnnee) {
        return new Date(aAnnee, 1, 29).getDate() === 29;
      }
      estUnJourDuWE(AAnnee, AMois, AJour) {
        const D = new Date(AAnnee, AMois, AJour).getDay();
        return D === 0 || D === 6;
      }
      getNombreJoursDuMois(AAnnee, AMois) {
        AMois = (AMois + 1) % 12;
        if (AMois === 0) {
          AAnnee++;
        }
        return new Date(AAnnee, AMois, 0).getDate();
      }
      getPremierJourDuMois(AAnnee, AMois) {
        return new Date(AAnnee, AMois, 1, 12);
      }
      getPremierLundiDuMois(AAnnee, AMois) {
        const LJour = this.getPremierJourDuMois(AAnnee, AMois),
          lJourPremierLundi = this.PremierLundi
            ? GDate.getJourDeSemaine(this.PremierLundi)
            : 0;
        return this.getJourSuivant(
          LJour,
          (lJourPremierLundi - (7 + GDate.getJourDeSemaine(LJour))) % 7,
        );
      }
      getDernierJourDuMois(AAnnee, AMois) {
        return new Date(
          AAnnee,
          AMois,
          this.getNombreJoursDuMois(AAnnee, AMois),
          12,
        );
      }
      estUnJourDuMois(AAnnee, AMois, AJour) {
        return new Date(AAnnee, AMois, AJour).getMonth() === AMois;
      }
      estHeureIdentique(aDate1, aDate2) {
        return (
          aDate1.getHours() === aDate2.getHours() &&
          aDate1.getMinutes() === aDate2.getMinutes()
        );
      }
      jourEstDansLaPeriode(AAnnee, AMois, AJour, ADateDebut, ADateFin) {
        const LDate = new Date(AAnnee, AMois, AJour);
        return LDate >= ADateDebut && LDate <= ADateFin;
      }
      strMoisCourt(AAnnee, AMois, AAvecAnnee) {
        return (
          TradDate.MoisCourt[AMois] + (AAvecAnnee ? '&nbsp;' + AAnnee : '')
        );
      }
      nombreMoisSurPeriode(ADateDebut, ADateFin) {
        return (
          12 * (ADateFin.getFullYear() - ADateDebut.getFullYear()) +
          (ADateFin.getMonth() - ADateDebut.getMonth()) +
          1
        );
      }
      nombresSemainesDansLAnnee(aSemaine) {
        let lDate;
        if (aSemaine > 0) {
          lDate = IE.Cycles.dateDebutCycle(aSemaine);
        } else {
          lDate = this.PremierLundi;
        }
        return this.getNombresSemainesPourLAnnee(lDate.getFullYear());
      }
      getNombresSemainesPourLAnnee(aAnnee) {
        const lDate = new Date(aAnnee, 0, 1);
        const lDay = this.getJourDeDate(lDate);
        return lDay === 3 ||
          (lDay === 2 && this.estAnneeBissextile(lDate.getFullYear()))
          ? this.semainesParAn + 1
          : this.semainesParAn;
      }
      getJourDeDate(ADate) {
        return (ADate.getDay() + 7 - 1) % 7;
      }
      getFuseau(aDate) {
        return aDate ? aDate.getTimezoneOffset() / 60 : 0;
      }
      getEcartFuseau(aDate1, aDate2) {
        return this.getFuseau(aDate1) - this.getFuseau(aDate2);
      }
      getSemaine(aDate) {
        return IE.Cycles.cycleDeLaDate(aDate || new Date());
      }
      getNbrJoursDepuisPremiereLundi(aDate) {
        return this.getNbrJoursEntreDeuxDates(this.PremierLundi, aDate);
      }
      getNbrJoursEntreDeuxDates(aDateDebut, aDateFin) {
        if (
          !aDateDebut ||
          !aDateDebut.getFullYear ||
          !aDateFin ||
          !aDateFin.getFullYear
        ) {
          return 0;
        }
        return (
          Date.UTC(
            aDateFin.getFullYear(),
            aDateFin.getMonth(),
            aDateFin.getDate(),
          ) /
            this.DureeJours -
          Date.UTC(
            aDateDebut.getFullYear(),
            aDateDebut.getMonth(),
            aDateDebut.getDate(),
          ) /
            this.DureeJours
        );
      }
      getSemaineCalendaire() {
        return (
          1 +
          Math.round(
            (this.PremierLundi.getTime() -
              new Date(this.PremierLundi.getFullYear(), 0, 1).getTime()) /
              this.DureeSemaines,
          )
        );
      }
      semaineToCalendaire(aSemaine, aNumeroPremiereSemaine) {
        let lNumero = aNumeroPremiereSemaine;
        if (!MethodesObjet_1.MethodesObjet.isNumber(lNumero)) {
          lNumero = this.parametres.numeroPremiereSemaine;
        }
        if (!MethodesObjet_1.MethodesObjet.isNumber(lNumero)) {
          lNumero = 1;
        }
        if (lNumero < 0) {
          if (!this._cacheSemainesCalendaires[aSemaine]) {
            const lNbSemaines = this.nombresSemainesDansLAnnee(aSemaine);
            if (aSemaine <= 1) {
              this._cacheSemainesCalendaires[aSemaine] =
                ((aSemaine - 1 + (this.getSemaineCalendaire() - 1)) %
                  lNbSemaines) +
                1;
            } else if (aSemaine > 0) {
              let lSemaineCalPrec =
                this._cacheSemainesCalendaires[aSemaine - 1];
              if (!lSemaineCalPrec) {
                lSemaineCalPrec = this.semaineToCalendaire(
                  aSemaine - 1,
                  lNumero,
                );
              }
              this._cacheSemainesCalendaires[aSemaine] =
                lSemaineCalPrec + 1 > lNbSemaines ? 1 : lSemaineCalPrec + 1;
            }
          }
          return this._cacheSemainesCalendaires[aSemaine];
        }
        return aSemaine + lNumero - 1;
      }
      strDateCalendaireDeSemaine(aSemaine, avecDuAu) {
        const lNumeroSemaine = this.semaineToCalendaire(aSemaine);
        const H = [];
        H.push(
          'Semaine' +
            ' ' +
            lNumeroSemaine,
        );
        if (avecDuAu === true) {
          const lDateDeb = this.formatDate(
            this.premierJourOuvreDeLaSemaine(aSemaine),
            '%JJ/%MM/%AAAA',
          );
          const lDateFin = this.formatDate(
            this.dernierJourOuvreDeLaSemaine(aSemaine),
            '%JJ/%MM/%AAAA',
          );
          H.push(', ');
          H.push(
            'du' + ' ' + lDateDeb,
          );
          H.push(' ');
          H.push(
            'au' + ' ' + lDateFin,
          );
        }
        return H.join('');
      }
      getDifferenceJours(aDate1, aDate2) {
        const lJour1 = aDate1
          ? Math.floor(this.getJour(aDate1).getTime() / this.DureeJours)
          : 0;
        const lJour2 = aDate2
          ? Math.floor(this.getJour(aDate2).getTime() / this.DureeJours)
          : 0;
        return lJour1 - lJour2;
      }
      getDifferenceJoursPar24h(aDate1, aDate2) {
        const lDureeInMs =
          this.estDateValide(aDate1) && this.estDateValide(aDate2)
            ? aDate1.getTime() - aDate2.getTime()
            : 0;
        return Math.floor(lDureeInMs / this.DureeJours);
      }
      getDifferenceTime(aDate1, aDate2) {
        const lDureeInMs =
          this.estDateValide(aDate1) && this.estDateValide(aDate2)
            ? aDate1.getTime() - aDate2.getTime()
            : 0;
        const reste_heures =
          lDureeInMs -
          Math.floor(lDureeInMs / this.DureeJours) * this.DureeJours;
        const nb_heures = Math.floor(reste_heures / this.DureeHeures);
        const reste_minutes =
          lDureeInMs -
          Math.floor(lDureeInMs / this.DureeHeures) * this.DureeHeures;
        const nb_minutes = Math.floor(reste_minutes / this.DureeMinutes);
        const reste_secondes =
          lDureeInMs -
          Math.floor(lDureeInMs / this.DureeMinutes) * this.DureeMinutes;
        const nb_secondes = Math.floor(reste_secondes / this.DureeSecondes);
        return (
          (nb_heures < 10 ? '0' : '') +
          nb_heures +
          ':' +
          (nb_minutes < 10 ? '0' : '') +
          nb_minutes +
          ':' +
          (nb_secondes < 10 ? '0' : '') +
          nb_secondes
        );
      }
      formatDate(ADate, AFormat) {
        if (!ADate || !MethodesObjet_1.MethodesObjet.isDate(ADate)) {
          IE.log.addLog(
            "ObjetDate.formatDate, ADate n'est pas une date : " + ADate,
          );
          return '';
        }
        if (!AFormat || !MethodesObjet_1.MethodesObjet.isString(AFormat)) {
          IE.log.addLog(
            "ObjetDate.formatDate, AFormat n'est pas format valide : " +
              AFormat,
          );
          return '';
        }
        AFormat = AFormat.replace(
          /\[(.*?)\]/gi,
          !this.estJourEgal(ADate, this.aujourdhui)
            ? !this.estJourEgal(ADate, this.demain)
              ? !this.estJourEgal(ADate, this.hier)
                ? '$1'
                : 'Hier'
              : 'Demain'
            : 'Aujourd'hui',
        );
        const LHour = ADate.getHours();
        const LMinute = ADate.getMinutes();
        const LSecond = ADate.getSeconds();
        const LDay = this.getJourDeDate(ADate);
        const LDate = ADate.getDate();
        const LMonth = ADate.getMonth() + 1;
        const LYear = ADate.getFullYear();
        AFormat = AFormat.replace('%hh', (LHour < 10 ? '0' : '') + LHour);
        AFormat = AFormat.replace('%xh', LHour + '');
        AFormat = AFormat.replace('%mm', (LMinute < 10 ? '0' : '') + LMinute);
        AFormat = AFormat.replace('%ss', (LSecond < 10 ? '0' : '') + LSecond);
        AFormat = AFormat.replace(
          '%sh',
          'h',
        );
        AFormat = AFormat.replace(
          '%JJJJ',
          'dimanche'[LDay],
        );
        AFormat = AFormat.replace(
          '%Jjjj',
          'dimanche'[LDay].ucfirst(),
        );
        AFormat = AFormat.replace(
          '%JJJ',
          'dim.'[LDay],
        );
        AFormat = AFormat.replace(
          '%Jjj',
          'dim.'[
            LDay
          ].ucfirst(),
        );
        AFormat = AFormat.replace('%JJ', (LDate < 10 ? '0' : '') + LDate);
        AFormat = AFormat.replace('%J', LDate + '');
        AFormat = AFormat.replace('%MMMM', TradDate.Mois[LMonth - 1]);
        AFormat = AFormat.replace('%MMM', TradDate.MoisCourt[LMonth - 1]);
        AFormat = AFormat.replace(
          '%Mmm',
          TradDate.MoisCourt[LMonth - 1].ucfirst(),
        );
        AFormat = AFormat.replace('%MM', (LMonth < 10 ? '0' : '') + LMonth);
        AFormat = AFormat.replace('%AAAA', LYear + '');
        AFormat = AFormat.replace(
          '%AA',
          (LYear % 100 < 10 ? '0' : '') + (LYear % 100),
        );
        return AFormat;
      }
      estDateParticulier(ADate) {
        return (
          this.estJourEgal(ADate, this.aujourdhui) ||
          this.estJourEgal(ADate, this.demain) ||
          this.estJourEgal(ADate, this.hier)
        );
      }
      formatDureeEnMillisecondes(
        aDureeEnMillisecondes,
        aFormat,
        aForcerFormatDuree,
      ) {
        if (!MethodesObjet_1.MethodesObjet.isNumber(aDureeEnMillisecondes)) {
          return '';
        }
        let lFormatDureeEnChaine = this.parametres.formatDureeEnChaine;
        if (MethodesObjet_1.MethodesObjet.isNumber(aForcerFormatDuree)) {
          lFormatDureeEnChaine = aForcerFormatDuree;
        }
        switch (lFormatDureeEnChaine) {
          case TypeFormatDureeEnChaine_1.TypeFormatDureeEnChaine
            .fdcHeuresMinutes:
          case TypeFormatDureeEnChaine_1.TypeFormatDureeEnChaine
            .fdcPersonnalise: {
            let lFormat = aFormat || '%hh%sh%mm';
            lFormat = lFormat.replace(
              '%sh',
              'h',
            );
            if (
              lFormat.lastIndexOf('%hh') > -1 ||
              lFormat.lastIndexOf('%xh') > -1
            ) {
              const LHour = Math.floor(
                aDureeEnMillisecondes / this.DureeHeures,
              );
              lFormat = lFormat.replace('%hh', (LHour < 10 ? '0' : '') + LHour);
              lFormat = lFormat.replace('%xh', LHour + '');
              aDureeEnMillisecondes =
                aDureeEnMillisecondes - LHour * this.DureeHeures;
            }
            if (
              lFormat.lastIndexOf('%mm') > -1 ||
              lFormat.lastIndexOf('%xm') > -1
            ) {
              const LMinute = Math.floor(
                aDureeEnMillisecondes / this.DureeMinutes,
              );
              lFormat = lFormat.replace(
                '%mm',
                (LMinute < 10 ? '0' : '') + LMinute,
              );
              lFormat = lFormat.replace('%xm', LMinute + '');
              aDureeEnMillisecondes =
                aDureeEnMillisecondes - LMinute * this.DureeMinutes;
            }
            const LSecond = Math.floor(
              aDureeEnMillisecondes / this.DureeSecondes,
            );
            lFormat = lFormat.replace(
              '%ss',
              (LSecond < 10 ? '0' : '') + LSecond,
            );
            return lFormat;
          }
          case TypeFormatDureeEnChaine_1.TypeFormatDureeEnChaine
            .fdcHeuresCentiemes: {
            const lNbHeures = Math.floor(
              aDureeEnMillisecondes / GDate.DureeHeures,
            );
            let lMinutesEnCentiemes = Math.floor(
              (aDureeEnMillisecondes / GDate.DureeHeures - lNbHeures) * 100,
            );
            if (lMinutesEnCentiemes < 10) {
              lMinutesEnCentiemes = '0' + lMinutesEnCentiemes;
            }
            return lNbHeures + ',' + lMinutesEnCentiemes;
          }
          case TypeFormatDureeEnChaine_1.TypeFormatDureeEnChaine.fdcSequences: {
            const lNbSequences = Math.round10(
              aDureeEnMillisecondes /
                UtilitaireDuree_1.TUtilitaireDuree.dureeEnMs(
                  this.DureeSequence,
                ),
              -2,
            );
            const lPartieEntiere = Math.floor(lNbSequences);
            let lPartieDecimale = Math.floor(
              (lNbSequences - lPartieEntiere) * 100,
            );
            if (lPartieDecimale < 10) {
              lPartieDecimale = '0' + lPartieDecimale;
            }
            return lPartieEntiere + ',' + lPartieDecimale;
          }
          default:
        }
        return '';
      }
      dureeEnMillisecondesToHMS(aDureeEnMillisecondes) {
        const lResult = { heures: 0, minutes: 0, secondes: 0 };
        if (!MethodesObjet_1.MethodesObjet.isNumber(aDureeEnMillisecondes)) {
          return lResult;
        }
        lResult.heures = Math.floor(aDureeEnMillisecondes / this.DureeHeures);
        aDureeEnMillisecondes =
          aDureeEnMillisecondes - lResult.heures * this.DureeHeures;
        lResult.minutes = Math.floor(aDureeEnMillisecondes / this.DureeMinutes);
        aDureeEnMillisecondes =
          aDureeEnMillisecondes - lResult.minutes * this.DureeMinutes;
        lResult.secondes = Math.floor(
          aDureeEnMillisecondes / this.DureeSecondes,
        );
        return lResult;
      }
      hmsToDureeEnMillisecondes(aHMS) {
        const lHMS = {
          heures: aHMS && aHMS.heures ? aHMS.heures : 0,
          minutes: aHMS && aHMS.minutes ? aHMS.minutes : 0,
          secondes: aHMS && aHMS.secondes ? aHMS.secondes : 0,
        };
        return (
          lHMS.heures * this.DureeHeures +
          lHMS.minutes * this.DureeMinutes +
          lHMS.secondes * this.DureeSecondes
        );
      }
      formatDureeEnPlaces(aPlaces, aFormat, aForcerFormatDuree) {
        if (!MethodesObjet_1.MethodesObjet.isNumber(aPlaces)) {
          return '';
        }
        return this.formatDureeEnMillisecondes(
          this.nombrePlacesEnMillisecondes(aPlaces),
          aFormat,
          aForcerFormatDuree,
        );
      }
      enCentiemeDHeure(aDureeEnMillisecondes) {
        const lDuree = Math.floor(aDureeEnMillisecondes);
        if (!MethodesObjet_1.MethodesObjet.isNumber(lDuree)) {
          return '';
        }
        const lNbHeures = Math.floor(lDuree / GDate.DureeHeures);
        let lMinutesEnCentiemes = Math.floor(
          (lDuree / GDate.DureeHeures - lNbHeures) * 100,
        );
        if (lMinutesEnCentiemes < 10) {
          lMinutesEnCentiemes = '0' + lMinutesEnCentiemes;
        }
        return lNbHeures + ',' + lMinutesEnCentiemes;
      }
      strSemaine(
        aNumeroSemaine,
        aFormatDebut,
        aFormatFin,
        aSeparateur1,
        aSeparateur2,
        aSeparateur3,
      ) {
        const lDateDeb = this.formatDate(
          this.premierJourOuvreDeLaSemaine(aNumeroSemaine),
          aFormatDebut,
        );
        const lDateFin = this.formatDate(
          this.dernierJourOuvreDeLaSemaine(aNumeroSemaine),
          aFormatFin,
        );
        return (
          (aSeparateur1 || '') +
          lDateDeb +
          (aSeparateur2 || '') +
          lDateFin +
          (aSeparateur3 || '')
        );
      }
      strSemaineSelonCycle(
        aCycle,
        aNumeroSemaine,
        aFormatDebut,
        aFormatFin,
        aSeparateur1,
        aSeparateur2,
        aSeparateur3,
      ) {
        const lDateDeb = this.formatDate(
          aCycle.datePremierJourOuvreCycle(aNumeroSemaine),
          aFormatDebut,
        );
        const lDateFin = this.formatDate(
          aCycle.dateDernierJourOuvreCycle(aNumeroSemaine),
          aFormatFin,
        );
        return (
          (aSeparateur1 || '') +
          lDateDeb +
          (aSeparateur2 || '') +
          lDateFin +
          (aSeparateur3 || '')
        );
      }
      strDomaine(
        aDomaine,
        aFormatDebut,
        aFormatFin,
        aSeparateur1,
        aSeparateur2,
        aSeparateur3,
      ) {
        const lDateDeb = this.formatDate(
          IE.Cycles.datePremierJourOuvreCycle(aDomaine.getPremierePosition()),
          aFormatDebut,
        );
        const lDateFin = this.formatDate(
          IE.Cycles.dateDernierJourOuvreCycle(aDomaine.getDernierePosition()),
          aFormatFin,
        );
        return (
          (aSeparateur1 || '') +
          lDateDeb +
          (aSeparateur2 || '') +
          lDateFin +
          (aSeparateur3 || '')
        );
      }
      strDates(aDateDebut, aDateFin, aParams) {
        const lParams = {
          sansHoraire: false,
          sansCrochet: false,
          formatDate: '%J %MMMM',
        };
        $.extend(lParams, aParams);
        const formatHeure =
          ' %hh' +
          'h' +
          '%mm';
        const lResult = [];
        if (GDate.getNbrJoursEntreDeuxDates(aDateDebut, aDateFin) >= 1) {
          if (lParams.sansHoraire) {
            lResult.push(
              this.formatDate(
                aDateDebut,
                'du' +
                  ' ' +
                  lParams.formatDate,
              ),
            );
            lResult.push(' ');
            lResult.push(
              this.formatDate(
                aDateFin,
                'au' +
                  ' ' +
                  lParams.formatDate,
              ),
            );
          } else {
            lResult.push(
              this.formatDate(
                aDateDebut,
                'du' +
                  ' ' +
                  lParams.formatDate,
              ) +
                ' ' +
                (estMinuit.call(this, aDateDebut)
                  ? ''
                  : GDate.formatDate(
                      aDateDebut,
                      'à' +
                        formatHeure,
                    )),
            );
            lResult.push(' ');
            lResult.push(
              this.formatDate(
                aDateFin,
                'au' +
                  ' ' +
                  lParams.formatDate,
              ) +
                ' ' +
                (estMinuit.call(this, aDateFin)
                  ? ''
                  : GDate.formatDate(
                      aDateFin,
                      'à' +
                        formatHeure,
                    )),
            );
          }
        } else if (GDate.estDateEgale(aDateDebut, aDateFin)) {
          lResult.push(
            GDate.formatDate(
              aDateDebut,
              (lParams.sansCrochet ? '' : '[') +
                'le' +
                ' ' +
                lParams.formatDate +
                (lParams.sansCrochet ? '' : ']'),
            ),
          );
          lResult.push(' ');
          lResult.push(
            lParams.sansHoraire
              ? ''
              : estMinuit.call(this, aDateFin)
                ? ''
                : GDate.formatDate(
                    aDateFin,
                    'à' + formatHeure,
                  ),
          );
        } else {
          lResult.push(
            GDate.formatDate(
              aDateDebut,
              (lParams.sansCrochet ? '' : '[') +
                'le' +
                ' ' +
                lParams.formatDate +
                (lParams.sansCrochet ? '' : ']'),
            ),
          );
          lResult.push(' ');
          lResult.push(
            lParams.sansHoraire
              ? ''
              : this.formatDate(
                  aDateDebut,
                  'de' + formatHeure,
                ) +
                  ' ' +
                  GDate.formatDate(
                    aDateFin,
                    'à' + formatHeure,
                  ),
          );
        }
        return lResult.join('');
      }
      strDatesAvecDemiJournees(
        aDateDebut,
        aDateDebutEstMatin,
        aDateFin,
        aDateFinEstMatin,
        aParams,
      ) {
        const lParams = { formatDate: '%JJ/%MM' };
        $.extend(lParams, aParams);
        const lResult = [];
        if (!aDateFin || GDate.estJourEgal(aDateDebut, aDateFin)) {
          const lEstJourneeComplete =
            !!aDateFin &&
            GDate.estJourEgal(aDateDebut, aDateFin) &&
            aDateDebutEstMatin !== aDateFinEstMatin;
          lResult.push(
            GDate.formatDate(
              aDateDebut,
              '[' +
                'le' +
                ' ' +
                lParams.formatDate +
                ']',
            ),
          );
          if (!lEstJourneeComplete) {
            lResult.push(
              ' ',
              aDateDebutEstMatin
                ? 'matin'
                : 'après-midi',
            );
          }
        } else {
          lResult.push(
            this.formatDate(
              aDateDebut,
              'du' +
                ' ' +
                lParams.formatDate,
            ),
          );
          if (!aDateDebutEstMatin) {
            lResult.push(
              ' ',
              'après-midi',
            );
          }
          lResult.push(' ');
          lResult.push(
            this.formatDate(
              aDateFin,
              'au' +
                ' ' +
                lParams.formatDate,
            ),
          );
          if (!!aDateFinEstMatin) {
            lResult.push(
              ' ',
              'matin',
            );
          }
        }
        return lResult.join('');
      }
      placeAnnuelleEnDate(APlace, AEstDateFin) {
        const LJour = this.getJourSuivant(
          IE.Cycles.dateDebutPremierCycle(),
          Math.floor(APlace / this.PlacesParJour),
        );
        const lHrMin = this._getHrMinDeListeHeures(
          APlace % this.PlacesParJour,
          AEstDateFin,
        );
        return new Date(
          LJour.getFullYear(),
          LJour.getMonth(),
          LJour.getDate(),
          lHrMin.h,
          lHrMin.m,
        );
      }
      dateEnPlaceAnnuelle(aDate, aEstDateFin = false) {
        const lPlaceAnnuelleJour =
          this.getNbrJoursEntreDeuxDates(
            IE.Cycles.dateDebutPremierCycle(),
            aDate,
          ) * this.PlacesParJour;
        if (lPlaceAnnuelleJour < 0) {
          return 0;
        }
        return lPlaceAnnuelleJour + this._dateEnPlaceJour(aDate, aEstDateFin);
      }
      placeParJourEnDate(APlace) {
        const LJour = this.getDateCourante();
        const lHrMin = this._getHrMinDeListeHeures(APlace);
        return new Date(
          LJour.getFullYear(),
          LJour.getMonth(),
          LJour.getDate(),
          lHrMin.h,
          lHrMin.m,
        );
      }
      dateEnPlaceHebdomadaire(ADate, AEstDateFin = false) {
        let lJour = 0;
        const lResult = IE.Cycles.dateEnCycleEtJourCycle(ADate, null);
        if (lResult.trouve) {
          lJour = lResult.indice;
        } else {
          const lResult = IE.Cycles.dateEnCycleEtJourCycle(
            ADate,
            IE.Cycles.recherche.autoriserPrecedents,
          );
          if (lResult.trouve) {
            return lResult.indice * this.PlacesParJour - 1;
          }
        }
        return (
          lJour * this.PlacesParJour + this._dateEnPlaceJour(ADate, AEstDateFin)
        );
      }
      placeEnDate(aNumeroCycle, aPlace, aEstPlaceFin = false, aInstanceCycles) {
        const lCycles = aInstanceCycles || IE.Cycles,
          lNumeroJour = Math.floor(aPlace / this.PlacesParJour),
          lNumeroCycle = Math.max(1, aNumeroCycle),
          LJour = lCycles.jourCycleEnDate(lNumeroJour, lNumeroCycle);
        let lPlaceJour = aPlace % this.PlacesParJour;
        if (
          lNumeroJour >
          lCycles.cache.datesAfficheesParCycle[lNumeroCycle].length
        ) {
          lPlaceJour = this.PlacesParJour - 1;
        }
        const lHrMin = this._getHrMinDeListeHeures(lPlaceJour, aEstPlaceFin);
        return lHrMin && lHrMin.ok
          ? new Date(
              LJour.getFullYear(),
              LJour.getMonth(),
              LJour.getDate(),
              lHrMin.h,
              lHrMin.m,
            )
          : new Date(LJour.getFullYear(), LJour.getMonth(), LJour.getDate());
      }
      placeEnDateHeure(aPlace, aEstPlaceFin = false) {
        return this.placeEnDate(1, aPlace, aEstPlaceFin);
      }
      nombrePlacesEnDuree(aPlaces) {
        if (!MethodesObjet_1.MethodesObjet.isNumber(aPlaces)) {
          return 0;
        }
        return (aPlaces * this.DureeSequence) / this.PlacesParHeure;
      }
      minutesEnNombrePlaces(aDureeEnMinutes) {
        if (!MethodesObjet_1.MethodesObjet.isNumber(aDureeEnMinutes)) {
          return 0;
        }
        const lDuree1PlaceEnMinutes =
          UtilitaireDuree_1.TUtilitaireDuree.dureeEnMin(
            this.nombrePlacesEnDuree(1),
          );
        const lResult = aDureeEnMinutes / lDuree1PlaceEnMinutes;
        if (lResult !== Math.floor(lResult)) {
        }
        return lResult;
      }
      nombrePlacesEnMillisecondes(aPlaces) {
        return UtilitaireDuree_1.TUtilitaireDuree.dureeEnMs(
          this.nombrePlacesEnDuree(aPlaces),
        );
      }
      getDateDeChaine(aChaine, aDateDebut, aDateFin) {
        aDateDebut = aDateDebut || this.PremierLundi;
        aDateFin = aDateFin || this.derniereDate;
        const T = aChaine.split('/');
        if (T[2] && T[2].length === 2) {
          T[2] = '20' + T[2];
        }
        const lDate = new Date(T[2], T[1] - 1, T[0]);
        const lEstValide =
          (lDate.getFullYear() === parseInt(T[2]) ||
            lDate.getFullYear() === parseInt('20' + T[2], 10)) &&
          lDate.getMonth() === Number(T[1] - 1) &&
          lDate.getDate() === parseInt(T[0]) &&
          lDate >= aDateDebut &&
          lDate <= aDateFin;
        return lEstValide ? lDate : null;
      }
      getListeSemaines(aSemaineDebut, aSemaineFin, aGenreTri) {
        let lLibelle, LDateDeb, LDateFin;
        const lSemaineCourante = IE.Cycles.cycleDeLaDate(new Date());
        const lListeSemaines = new ObjetListeElements_1.ObjetListeElements();
        const lSemaineDeb = Math.max(0, aSemaineDebut);
        const lSemaineFin = Math.min(
          IE.Cycles.nombreCyclesAnneeScolaire(),
          aSemaineFin,
        );
        for (let lSemaine = lSemaineDeb; lSemaine <= lSemaineFin; lSemaine++) {
          if (lSemaine === lSemaineCourante) {
            lLibelle =
              'Semaine en cours';
          } else if (lSemaine === lSemaineCourante + 1) {
            lLibelle =
              'Semaine suivante';
          } else if (lSemaine === lSemaineCourante - 1) {
            lLibelle =
              'Semaine précédente';
          } else {
            LDateDeb = GDate.formatDate(
              IE.Cycles.dateDebutCycle(lSemaine),
              '%JJ/%MM',
            );
            LDateFin = GDate.formatDate(
              IE.Cycles.dateDernierJourOuvreCycle(lSemaine),
              '%JJ/%MM',
            );
            lLibelle =
              'du' +
              ' ' +
              LDateDeb +
              ' ' +
              'au' +
              ' ' +
              LDateFin;
          }
          lListeSemaines.addElement(
            new ObjetElement_1.ObjetElement(lLibelle, null, lSemaine),
          );
        }
        lListeSemaines.setTri([ObjetTri_1.ObjetTri.init('Genre')]);
        lListeSemaines.trier(aGenreTri);
        return lListeSemaines;
      }
      getListeMoisAPartirDeDate(
        aDateDebut,
        aDateFin,
        aFormatMois = '%MMMM %AAAA',
      ) {
        const lListeMois = new ObjetListeElements_1.ObjetListeElements();
        let lElement,
          lAnnee,
          lMois,
          lDate,
          lVrai = true;
        const lPremiereDate = aDateDebut || this.premiereDate,
          lDerniereDate = aDateFin || this.derniereDate,
          lAnneeDebut = lPremiereDate.getFullYear(),
          lMoisDebut = lPremiereDate.getMonth(),
          lAnneeFin = lDerniereDate.getFullYear(),
          lMoisFin = lDerniereDate.getMonth();
        if (
          this.estAvantJour(lPremiereDate, lDerniereDate) ||
          this.estJourEgal(lPremiereDate, lDerniereDate)
        ) {
          lMois = lMoisDebut;
          lAnnee = lAnneeDebut;
          while (lVrai) {
            if (
              (lMois >= lMoisFin && lAnnee >= lAnneeFin) ||
              lAnnee > lAnneeFin
            ) {
              lVrai = false;
            }
            lDate = new Date(lAnnee, lMois);
            lElement = new ObjetElement_1.ObjetElement(
              GDate.formatDate(lDate, aFormatMois).ucfirst(),
            );
            lElement.annee = lAnnee;
            lElement.mois = lMois;
            lDate = this.getPremierJourDuMois(lAnnee, lMois);
            lElement.dateDebut = lDate >= lPremiereDate ? lDate : lPremiereDate;
            lDate = this.getDernierJourDuMois(lAnnee, lMois);
            lElement.dateFin = lDate <= lDerniereDate ? lDate : lDerniereDate;
            lListeMois.addElement(lElement);
            lMois += 1;
            if (lMois > 11) {
              lAnnee += 1;
              lMois = 0;
            }
          }
        }
        return lListeMois;
      }
      parseHeureMinute(aValue, aDureeMinEnMin = 0, aDureeMaxEnMin = 1440) {
        function _estUnChiffre(aCar) {
          return /[0-9]/.test(aCar);
        }
        const lResult = { heure: 0, minute: 0, ok: false, erreurMinMax: false };
        const lDureeMinEnMin = aDureeMinEnMin || 0,
          lDureeMaxEnMin = aDureeMaxEnMin || 24 * 60;
        if (!MethodesObjet_1.MethodesObjet.isString(aValue)) {
          return lResult;
        }
        const lValue = aValue.trim();
        let lHeure,
          lMinute = 0;
        let lIndice = 0;
        let lZeroDevant = false;
        if (!_estUnChiffre(lValue[lIndice]) && lValue[lIndice] !== '+') {
          return lResult;
        }
        if (lValue[lIndice] === '+') {
          lIndice += 1;
          while (lIndice < lValue.length && lValue[lIndice] === ' ') {
            lIndice += 1;
          }
        }
        lZeroDevant = lValue[lIndice] === '0';
        lHeure = 0;
        while (lIndice < lValue.length && _estUnChiffre(lValue[lIndice])) {
          lHeure = lHeure * 10 + parseInt(lValue[lIndice], 10);
          lIndice += 1;
        }
        while (lIndice < lValue.length && !_estUnChiffre(lValue[lIndice])) {
          lIndice += 1;
        }
        if (lIndice >= lValue.length) {
          if (lZeroDevant || (lHeure >= 100 && lHeure * 60 >= lDureeMaxEnMin)) {
            lMinute = lHeure % 100;
            lHeure = Math.floor(lHeure / 100);
          } else {
            lMinute = 0;
          }
        } else {
          lMinute = 0;
          while (lIndice < lValue.length && _estUnChiffre(lValue[lIndice])) {
            lMinute = lMinute * 10 + parseInt(lValue[lIndice], 10);
            lIndice += 1;
          }
          while (lIndice < lValue.length && !_estUnChiffre(lValue[lIndice])) {
            lIndice += 1;
          }
          if (lIndice < lValue.length) {
            return lResult;
          }
        }
        if (lMinute >= 60 || lMinute < 0 || lHeure < 0) {
          return lResult;
        }
        lResult.heure = lHeure;
        lResult.minute = lMinute;
        if (
          lHeure * 60 + lMinute < lDureeMinEnMin ||
          lHeure * 60 + lMinute >= lDureeMaxEnMin
        ) {
          lResult.erreurMinMax = true;
          return lResult;
        }
        lResult.ok = true;
        return lResult;
      }
      dateEnPlaceJour(aDate, AEstDateFin = false) {
        return this._dateEnPlaceJour(aDate, AEstDateFin);
      }
      _dateEnPlaceJour(ADate, AEstDateFin) {
        let I;
        let lNbMinutesLibelleHeure;
        const lNbMinutesLibelleHeureDebut = this._getNbrMinutesLibelleHeure(0);
        for (I = this.PlacesParJour - 1; I >= 0; I--) {
          lNbMinutesLibelleHeure = this._getNbrMinutesLibelleHeure(I);
          if (lNbMinutesLibelleHeure < lNbMinutesLibelleHeureDebut) {
            lNbMinutesLibelleHeure += 24 * 60;
          }
          if (
            _GetNbrMinutes.call(this, ADate) - (AEstDateFin ? 1 : 0) >=
            lNbMinutesLibelleHeure
          ) {
            break;
          }
        }
        return Math.max(I, 0);
      }
      _getHrMinDeListeHeures(aPlace, aEstPlaceFin) {
        const lResult = { h: 0, m: 0, ok: false };
        let lChaine = null;
        let lElement = null;
        if (aEstPlaceFin) {
          lElement = this.ListeHeuresFin
            ? this.ListeHeuresFin.get(aPlace)
            : this.ListeHeures.get(aPlace + 1);
        } else {
          lElement = this.ListeHeures.get(aPlace);
        }
        if (lElement) {
          lChaine = lElement.getLibelle();
        }
        if (!lChaine || !lChaine.indexOf || !lChaine.split) {
          return lResult;
        }
        let lTab = lChaine.split(ObjetDate.separateurHeureDelphi);
        if (lTab.length < 2) {
          lTab = lChaine.split(':');
          if (lTab.length < 2) {
            return lResult;
          }
        }
        lResult.h = parseInt(lTab[0], 0) || 0;
        if (lTab.length > 1) {
          lResult.m = parseInt(lTab[1], 0) || 0;
        }
        lResult.ok = true;
        return lResult;
      }
      _getNbrMinutesLibelleHeure(I) {
        const lHrMin = this._getHrMinDeListeHeures(I);
        return lHrMin.h * 60 + lHrMin.m;
      }
    }
    exports.ObjetDate = ObjetDate;
    ObjetDate.separateurHeureDelphi = 'h';
    function estMinuit(aDate) {
      const lHeure = aDate.getHours();
      const lMin = aDate.getMinutes();
      return lHeure === 0 && lMin === 0;
    }
    function _GetNbrMinutes(aDate) {
      return aDate.getHours() * 60 + aDate.getMinutes();
    }
    const GDate = new ObjetDate();
    exports.GDate = GDate;
    IEHtml.setObjetDate(
      GDate.formatDate.bind(GDate),
      GDate.parseHeureMinute.bind(GDate),
    );
  },
  fn: 'objetdate.js',
});