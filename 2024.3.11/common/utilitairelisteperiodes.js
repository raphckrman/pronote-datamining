IE.fModule({
  f: function (exports, require, module, global) {
    const { MethodesObjet } = require('MethodesObjet.js');
    const { GDate } = require('ObjetDate.js');
    const { ObjetElement } = require('ObjetElement.js');
    const { ObjetListeElements } = require('ObjetListeElements.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { ObjetTri } = require('ObjetTri.js');
    function TUtilitaireListePeriodes() {}
    (function () {
      TUtilitaireListePeriodes.choix = {
        aujourdhui: 1,
        hier: 1,
        demain: 1,
        semaineCourante: 1,
        semainePrecedente: 1,
        semaineSuivante: 1,
        moisCourant: 1,
        periodes: 1,
        annee: 1,
        mois: 1,
      };
      MethodesObjet.indenterEnumere(TUtilitaireListePeriodes.choix);
      TUtilitaireListePeriodes.construireListePeriodes = function (
        aChoixPeriodes,
        aOptions,
      ) {
        const lListe = new ObjetListeElements(),
          lOptions = $.extend(
            {
              dateDebut: GParametres.PremiereDate,
              dateFin: GParametres.DerniereDate,
              dansBornes: function (aDate) {
                return (
                  (aDate > this.dateDebut ||
                    GDate.estJourEgal(aDate, this.dateDebut)) &&
                  (aDate < this.dateFin ||
                    GDate.estJourEgal(aDate, this.dateFin))
                );
              },
              datesOK: function (aDateDebut, aDateFin) {
                return this.dansBornes(aDateDebut) || this.dansBornes(aDateFin);
              },
              borner: function (aDate) {
                if (aDate < this.dateDebut) {
                  return new Date(this.dateDebut.getTime());
                }
                if (aDate > this.dateFin) {
                  return new Date(this.dateFin.getTime());
                }
                return aDate;
              },
            },
            aOptions,
          );
        if (MethodesObjet.isArray(aChoixPeriodes)) {
          for (let i = 0; i < aChoixPeriodes.length; i++) {
            _ajouterChoix(lListe, aChoixPeriodes[i], lOptions);
          }
        }
        return lListe;
      };
      function _ajouterChoix(aListe, aChoix, aOptions) {
        let lElement = null;
        let lDate;
        let lDateDebut;
        let lDateFin;
        let lCycle;
        function _ajouterElement(aLibelle, aDateDebut, aDateFin) {
          const lElement = new ObjetElement(aLibelle);
          lElement.dates = {
            debut: aOptions.borner(aDateDebut),
            fin: aOptions.borner(aDateFin),
          };
          lElement.choix = aChoix;
          aListe.addElement(lElement);
        }
        switch (aChoix) {
          case TUtilitaireListePeriodes.choix.aujourdhui:
            _ajouterElement(
              GTraductions.getValeur('Aujourdhui').ucfirst(),
              GDate.getDateCourante(),
              GDate.getDateCourante(),
            );
            break;
          case TUtilitaireListePeriodes.choix.hier:
            lDate = GDate.getJourSuivant(GDate.getDateCourante(), -1);
            if (aOptions.datesOK(lDate, lDate)) {
              _ajouterElement(
                GTraductions.getValeur('Hier').ucfirst(),
                lDate,
                lDate,
              );
            }
            break;
          case TUtilitaireListePeriodes.choix.demain:
            lDate = GDate.getJourSuivant(GDate.getDateCourante(), 1);
            if (aOptions.datesOK(lDate, lDate)) {
              _ajouterElement(
                GTraductions.getValeur('Demain').ucfirst(),
                lDate,
                lDate,
              );
            }
            break;
          case TUtilitaireListePeriodes.choix.semaineCourante:
            lCycle = IE.Cycles.cycleCourant();
            lDateDebut = IE.Cycles.dateDebutCycle(lCycle);
            lDateFin = IE.Cycles.dateFinCycle(lCycle);
            if (aOptions.datesOK(lDateDebut, lDateFin)) {
              _ajouterElement(
                GTraductions.getValeur('SemaineEnCours'),
                lDateDebut,
                lDateFin,
              );
            }
            break;
          case TUtilitaireListePeriodes.choix.semainePrecedente:
            lCycle = IE.Cycles.cycleCourant() - 1;
            if (IE.Cycles.cycleDansAnnee(lCycle) !== lCycle) {
              return;
            }
            lDateDebut = IE.Cycles.dateDebutCycle(lCycle);
            lDateFin = IE.Cycles.dateFinCycle(lCycle);
            if (aOptions.datesOK(lDateDebut, lDateFin)) {
              _ajouterElement(
                GTraductions.getValeur('SemainePrecedente'),
                lDateDebut,
                lDateFin,
              );
            }
            break;
          case TUtilitaireListePeriodes.choix.semaineSuivante:
            lCycle = IE.Cycles.cycleCourant() + 1;
            if (IE.Cycles.cycleDansAnnee(lCycle) !== lCycle) {
              return;
            }
            lDateDebut = IE.Cycles.dateDebutCycle(lCycle);
            lDateFin = IE.Cycles.dateFinCycle(lCycle);
            if (aOptions.datesOK(lDateDebut, lDateFin)) {
              _ajouterElement(
                GTraductions.getValeur('SemaineSuivante'),
                lDateDebut,
                lDateFin,
              );
            }
            break;
          case TUtilitaireListePeriodes.choix.moisCourant:
            lDate = GDate.getDateCourante();
            lDateDebut = GDate.getPremierJourDuMois(
              lDate.getFullYear(),
              lDate.getMonth(),
            );
            lDateFin = GDate.getDernierJourDuMois(
              lDate.getFullYear(),
              lDate.getMonth(),
            );
            if (aOptions.datesOK(lDateDebut, lDateFin)) {
              _ajouterElement(
                GTraductions.getValeur('MoisEnCours'),
                lDateDebut,
                lDateFin,
              );
            }
            break;
          case TUtilitaireListePeriodes.choix.periodes: {
            const lListePeriodesSaisie = new ObjetListeElements();
            GParametres.listePeriodes.parcourir((D) => {
              if (
                D.getGenre() > 0 &&
                D.getGenre() !== 3 &&
                aOptions.datesOK(D.dates.debut, D.dates.fin)
              ) {
                lElement = MethodesObjet.dupliquer(D);
                lElement.choix = aChoix;
                lElement.dates.debut = aOptions.borner(D.dates.debut);
                lElement.dates.fin = aOptions.borner(D.dates.fin);
                lListePeriodesSaisie.addElement(lElement);
              }
            });
            lListePeriodesSaisie.setTri([
              ObjetTri.init((D) => {
                return D.getGenre() === 3 ? 0 : 1;
              }),
              ObjetTri.init((D) => {
                return D.getGenre();
              }),
            ]);
            lListePeriodesSaisie.trier();
            aListe.add(lListePeriodesSaisie);
            break;
          }
          case TUtilitaireListePeriodes.choix.annee:
            GParametres.listePeriodes.parcourir((D) => {
              if (D.getGenre() === 3) {
                lElement = MethodesObjet.dupliquer(D);
                lElement.setLibelle(GTraductions.getValeur('AnneeComplete'));
                lElement.choix = aChoix;
                lElement.dates.debut = aOptions.borner(D.dates.debut);
                lElement.dates.fin = aOptions.borner(D.dates.fin);
                aListe.addElement(lElement);
                return false;
              }
            });
            break;
          case TUtilitaireListePeriodes.choix.mois:
            GDate.getListeMoisAPartirDeDate(
              aOptions.dateDebut,
              aOptions.dateFin,
            ).parcourir((D) => {
              _ajouterElement(D.getLibelle(), D.dateDebut, D.dateFin);
            });
            break;
          default:
        }
      }
    })();
    module.exports = { TUtilitaireListePeriodes };
  },
  fn: 'utilitairelisteperiodes.js',
});