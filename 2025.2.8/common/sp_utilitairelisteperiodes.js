IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TUtilitaireListePeriodes = void 0;
    const AccessApp_1 = require('AccessApp');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    class TUtilitaireListePeriodes {
      static construireListePeriodes(aChoixPeriodes, aOptions) {
        const lListe = new ObjetListeElements_1.ObjetListeElements(),
          lOptions = $.extend(
            {
              dateDebut: GParametres.PremiereDate,
              dateFin: GParametres.DerniereDate,
              dansBornes: function (aDate) {
                return (
                  (aDate > this.dateDebut ||
                    ObjetDate_1.GDate.estJourEgal(aDate, this.dateDebut)) &&
                  (aDate < this.dateFin ||
                    ObjetDate_1.GDate.estJourEgal(aDate, this.dateFin))
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
        if (MethodesObjet_1.MethodesObjet.isArray(aChoixPeriodes)) {
          for (let i = 0; i < aChoixPeriodes.length; i++) {
            TUtilitaireListePeriodes._ajouterChoix(
              lListe,
              aChoixPeriodes[i],
              lOptions,
            );
          }
        }
        return lListe;
      }
      static _ajouterChoix(aListe, aChoix, aOptions) {
        let lElement = null;
        let lDate;
        let lDateDebut;
        let lDateFin;
        let lCycle;
        function _ajouterElement(aLibelle, aDateDebut, aDateFin) {
          const lElement = ObjetElement_1.ObjetElement.create({
            Libelle: aLibelle,
            dates: {
              debut: aOptions.borner(aDateDebut),
              fin: aOptions.borner(aDateFin),
            },
            choix: aChoix,
          });
          aListe.addElement(lElement);
        }
        switch (aChoix) {
          case TUtilitaireListePeriodes.choix.aujourdhui:
            _ajouterElement(
              'Aujourd'hui'.ucfirst(),
              ObjetDate_1.GDate.getDateCourante(),
              ObjetDate_1.GDate.getDateCourante(),
            );
            break;
          case TUtilitaireListePeriodes.choix.hier:
            lDate = ObjetDate_1.GDate.getJourSuivant(
              ObjetDate_1.GDate.getDateCourante(),
              -1,
            );
            if (aOptions.datesOK(lDate, lDate)) {
              _ajouterElement(
                'Hier'.ucfirst(),
                lDate,
                lDate,
              );
            }
            break;
          case TUtilitaireListePeriodes.choix.demain:
            lDate = ObjetDate_1.GDate.getJourSuivant(
              ObjetDate_1.GDate.getDateCourante(),
              1,
            );
            if (aOptions.datesOK(lDate, lDate)) {
              _ajouterElement(
                'Demain'.ucfirst(),
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
                'Semaine en cours',
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
                'Semaine précédente',
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
                'Semaine suivante',
                lDateDebut,
                lDateFin,
              );
            }
            break;
          case TUtilitaireListePeriodes.choix.moisCourant:
            lDate = ObjetDate_1.GDate.getDateCourante();
            lDateDebut = ObjetDate_1.GDate.getPremierJourDuMois(
              lDate.getFullYear(),
              lDate.getMonth(),
            );
            lDateFin = ObjetDate_1.GDate.getDernierJourDuMois(
              lDate.getFullYear(),
              lDate.getMonth(),
            );
            if (aOptions.datesOK(lDateDebut, lDateFin)) {
              _ajouterElement(
                'Mois en cours',
                lDateDebut,
                lDateFin,
              );
            }
            break;
          case TUtilitaireListePeriodes.choix.periodes: {
            const lListePeriodesSaisie =
              new ObjetListeElements_1.ObjetListeElements();
            (0, AccessApp_1.getApp)()
              .getObjetParametres()
              .listePeriodes.parcourir((D) => {
                if (
                  D.getGenre() > 0 &&
                  D.getGenre() !== 3 &&
                  aOptions.datesOK(D.dates.debut, D.dates.fin)
                ) {
                  lElement = MethodesObjet_1.MethodesObjet.dupliquer(D);
                  lElement.choix = aChoix;
                  lElement.dates.debut = aOptions.borner(D.dates.debut);
                  lElement.dates.fin = aOptions.borner(D.dates.fin);
                  lListePeriodesSaisie.addElement(lElement);
                }
              });
            lListePeriodesSaisie.setTri([
              ObjetTri_1.ObjetTri.init((D) => {
                return D.getGenre() === 3 ? 0 : 1;
              }),
              ObjetTri_1.ObjetTri.init((D) => {
                return D.getGenre();
              }),
            ]);
            lListePeriodesSaisie.trier();
            aListe.add(lListePeriodesSaisie);
            break;
          }
          case TUtilitaireListePeriodes.choix.annee:
            (0, AccessApp_1.getApp)()
              .getObjetParametres()
              .listePeriodes.parcourir((D) => {
                if (D.getGenre() === 3) {
                  lElement = MethodesObjet_1.MethodesObjet.dupliquer(D);
                  lElement.setLibelle(
                    'Année complète',
                  );
                  lElement.choix = aChoix;
                  lElement.dates.debut = aOptions.borner(D.dates.debut);
                  lElement.dates.fin = aOptions.borner(D.dates.fin);
                  aListe.addElement(lElement);
                  return false;
                }
              });
            break;
          case TUtilitaireListePeriodes.choix.mois:
            ObjetDate_1.GDate.getListeMoisAPartirDeDate(
              aOptions.dateDebut,
              aOptions.dateFin,
            ).parcourir((D) => {
              _ajouterElement(D.getLibelle(), D.dateDebut, D.dateFin);
            });
            break;
          default:
        }
      }
    }
    exports.TUtilitaireListePeriodes = TUtilitaireListePeriodes;
    (function (TUtilitaireListePeriodes) {
      let choix;
      (function (choix) {
        choix[(choix['aujourdhui'] = 0)] = 'aujourdhui';
        choix[(choix['hier'] = 1)] = 'hier';
        choix[(choix['demain'] = 2)] = 'demain';
        choix[(choix['semaineCourante'] = 3)] = 'semaineCourante';
        choix[(choix['semainePrecedente'] = 4)] = 'semainePrecedente';
        choix[(choix['semaineSuivante'] = 5)] = 'semaineSuivante';
        choix[(choix['moisCourant'] = 6)] = 'moisCourant';
        choix[(choix['periodes'] = 7)] = 'periodes';
        choix[(choix['annee'] = 8)] = 'annee';
        choix[(choix['mois'] = 9)] = 'mois';
      })(
        (choix =
          TUtilitaireListePeriodes.choix ||
          (TUtilitaireListePeriodes.choix = {})),
      );
    })(
      TUtilitaireListePeriodes ||
        (exports.TUtilitaireListePeriodes = TUtilitaireListePeriodes = {}),
    );
  },
  fn: 'utilitairelisteperiodes.js',
});