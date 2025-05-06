IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.InterfaceSelecteurDate = void 0;
    require('InterfaceSelectionDate.css');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_EvenementObjetSaisie_1 = require('Enumere_EvenementObjetSaisie');
    const Enumere_StructureAffichage_1 = require('Enumere_StructureAffichage');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetInterface_1 = require('ObjetInterface');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const tag_1 = require('tag');
    const MoteurSelecteurDate_1 = require('MoteurSelecteurDate');
    const ToucheClavier_1 = require('ToucheClavier');
    class InterfaceSelecteurDate extends ObjetInterface_1.ObjetInterface {
      constructor(...aParams) {
        super(...aParams);
        this.IdContenu = this.Nom + '_Contenu';
        this.nbrLignes = 6;
        this.nbrColonnes = 7;
        this.idJours = this.Nom + '_Jours';
        this.parametres = {
          listeMois: new ObjetListeElements_1.ObjetListeElements(),
          indiceMoisCourant: -1,
        };
        this.moteurDate = new MoteurSelecteurDate_1.MoteurSelecteurDate();
      }
      setMoteurDate(aMoteurDate) {
        this.moteurDate = aMoteurDate;
      }
      setParametresGeneraux() {
        this.GenreStructure =
          Enumere_StructureAffichage_1.EStructureAffichage.Autre;
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          comboMois: {
            init(aCombo) {
              aInstance.comboMois = aCombo;
              aCombo.setOptionsObjetSaisie({
                longueur: aInstance._avecComboAnnee() ? 80 : 120,
                avecDesignMobile: IE.estMobile,
                avecBouton: !IE.estMobile,
                avecBoutonsPrecSuiv: true,
                labelWAICellule: 'Sélectionner un mois',
              });
            },
            event: aInstance._eventSurSelecMois.bind(aInstance),
            getDisabled() {
              const lListeArticles = aInstance.comboMois.getListeElements();
              return !lListeArticles || lListeArticles.count() < 2;
            },
          },
          comboAnnee: {
            init(aCombo) {
              aInstance.comboAnnee = aCombo;
              aCombo.setOptionsObjetSaisie({
                longueur: 40,
                avecDesignMobile: IE.estMobile,
                avecBouton: !IE.estMobile,
                avecBoutonsPrecSuiv: true,
                labelWAICellule: 'Sélectionner une année',
              });
            },
            event: aInstance._eventSelecAnnee.bind(aInstance),
            getDisabled() {
              const lListeArticles = aInstance.comboAnnee.getListeElements();
              return !lListeArticles || lListeArticles.count() < 2;
            },
          },
        });
      }
      construireStructureAffichageAutre() {
        const H = [];
        H.push(
          '<div class="InterfaceSelectionDate" id="',
          this.IdContenu,
          '"></div>',
        );
        return H.join('');
      }
      setDonnees(aDate, aAvecDate) {
        if (aAvecDate === undefined) {
          aAvecDate = true;
        }
        this.dateCourante = ObjetDate_1.GDate.getDateCourante(
          this.moteurDate.options.bornerDateCourante,
        );
        this.avecDate = aDate !== null && aDate !== undefined && aAvecDate;
        this.date = this.avecDate
          ? this.moteurDate.getDateBornee.call(this, aDate)
          : this.dateCourante;
        const lDateBornee = this.moteurDate.getDateBornee(this.date);
        if (!this._avecComboAnnee()) {
          this.parametres.listeMois =
            ObjetDate_1.GDate.getListeMoisAPartirDeDate(
              this.moteurDate.options.premiereDate,
              this.moteurDate.options.derniereDate,
            );
        } else {
          this.parametres.listeMois = this._construireListeMoisDAnnee(
            lDateBornee.getFullYear(),
          );
        }
        ObjetHtml_1.GHtml.setHtml(this.IdContenu, this.composeContenu(), {
          controleur: this.controleur,
        });
        this.afficher();
        if (this.comboAnnee) {
          this._construireListeAnnees(this.date);
        }
        this.parametres.indiceMoisCourant = this._getIndiceMoisDeDate(
          this.date,
        );
        this.comboMois.setDonnees(
          this.parametres.listeMois,
          this.parametres.indiceMoisCourant,
        );
        $('#' + this.idJours.escapeJQ()).on(
          {
            focusin: function (event) {
              const lInfo = _getLigneEtColonne(this);
              event.data.instance.surSurvol(lInfo.i, lInfo.j, true);
            },
            focusout: function (event) {
              const lInfo = _getLigneEtColonne(this);
              event.data.instance.surSurvol(lInfo.i, lInfo.j, false);
            },
            keyup: function (event) {
              const lInfo = _getLigneEtColonne(this);
              event.data.instance._surKeyUp(lInfo.i, lInfo.j, event);
            },
            pointerover: function (event) {
              const lInfo = _getLigneEtColonne(this);
              event.data.instance.surSurvol(lInfo.i, lInfo.j, true);
            },
            pointerout: function (event) {
              const lInfo = _getLigneEtColonne(this);
              event.data.instance.surSurvol(lInfo.i, lInfo.j, false);
            },
            click: function (event) {
              const lInfo = _getLigneEtColonne(this);
              event.data.instance.surSelection(lInfo.i, lInfo.j);
            },
          },
          'td.date',
          { instance: this },
        );
      }
      composeContenu() {
        if (this.dateCourante === null || this.dateCourante === undefined) {
          return '';
        }
        const lAvecComboAnnee = this._avecComboAnnee();
        const T = [];
        T.push(
          (0, tag_1.tag)(
            'div',
            { class: ['combos-container'] },
            (0, tag_1.tag)('ie-combo', {
              'ie-model': 'comboMois',
              class: 'combo-selecteur',
            }),
            lAvecComboAnnee
              ? (0, tag_1.tag)('ie-combo', {
                  'ie-model': 'comboAnnee',
                  class: 'combo-selecteur',
                })
              : '',
          ),
          (0, tag_1.tag)('div', { id: this.idJours }),
        );
        return T.join('');
      }
      composeJour(I, J) {
        const lHtml = [];
        const lDate = ObjetDate_1.GDate.getJourSuivant(
          this.premierLundiDuMois,
          I * 7 + J,
        );
        const lPremDateSais = this.moteurDate.getPremiereDateValide();
        const lEstJoursActif = this.estJourActif(I, J);
        const lEstJourCourant = ObjetDate_1.GDate.estJourCourant(lDate, false);
        let lEstDateSelectionnee = false;
        const lId = this.Nom + '_' + I + '_' + J;
        const lIdTD = this.Nom + '_td_' + I + '_' + J;
        let lClass = ['date'];
        if (lEstJoursActif) {
          lClass.push('actif');
        }
        if (this.estJourDuMois(I, J)) {
          lClass.push('current-month');
        }
        if (lEstJourCourant) {
          lClass.push('current-date');
        }
        if (this.avecDate) {
          if (
            this.moteurDate.options.avecSelectionSemaine && IE.Cycles
              ? lEstJoursActif &&
                IE.Cycles.cycleDeLaDate(lDate) ===
                  IE.Cycles.cycleDeLaDate(this.date)
              : ObjetDate_1.GDate.estJourEgal(lDate, this.date)
          ) {
            lClass.push('selected-date');
            lEstDateSelectionnee = true;
          }
        }
        if (ObjetDate_1.GDate.estDateJourAvant(lDate, this.dateCourante)) {
          lClass.push('previous-date');
        }
        if (this.estJourMarque(lDate)) {
          lClass.push('with-mark');
        }
        if (
          this.moteurDate.options.afficherPremiereDateSaisissable &&
          this.moteurDate.options.premiereDateSaisissable &&
          ObjetDate_1.GDate.estJourEgal(
            lDate,
            this.moteurDate.options.premiereDateSaisissable,
          ) &&
          !ObjetDate_1.GDate.estJourEgal(
            this.moteurDate.options.premiereDateSaisissable,
            this.moteurDate.options.premiereDate,
          )
        ) {
          lClass.push('first-selectable-date');
        }
        if (I === 0) {
          lClass.push('b-top');
        }
        if (I === this.nbrLignes - 1) {
          lClass.push('b-bottom');
        }
        if (J === 0) {
          lClass.push('b-left');
        }
        if (J === this.nbrColonnes - 1) {
          lClass.push('b-right');
        }
        const lTabIndex =
          !lPremDateSais ||
          ObjetDate_1.GDate.estJourEgal(lDate, lPremDateSais) ||
          (I === 0 &&
            J === 0 &&
            ObjetDate_1.GDate.getDifferenceJours(lDate, lPremDateSais) > 0)
            ? '0'
            : '-1';
        lHtml.push(
          IE.jsx.str(
            'td',
            {
              role: 'gridcell',
              id: lIdTD,
              class: lClass,
              tabindex: lTabIndex,
              'aria-disabled': lEstJoursActif ? false : 'true',
              'aria-current': lEstJourCourant ? 'date' : false,
              'aria-selected': lEstDateSelectionnee ? 'true' : 'false',
              'aria-label': ObjetDate_1.GDate.formatDate(
                lDate,
                '%JJJJ %J %MMM %AAAA',
              ),
            },
            IE.jsx.str(
              'div',
              null,
              IE.jsx.str(
                'div',
                { id: lId },
                IE.jsx.str(
                  'div',
                  null,
                  IE.jsx.str(
                    'div',
                    null,
                    ObjetDate_1.GDate.formatDate(lDate, '%J'),
                  ),
                ),
              ),
            ),
          ),
        );
        return lHtml.join('');
      }
      surSurvol(I, J, aSurvol) {
        const lId = this.Nom + '_td_' + I + '_' + J;
        if (
          this.ICourant &&
          this.JCourant &&
          this.JCourant !== -1 &&
          (this.ICourant !== I || this.JCourant !== J)
        ) {
          this.surSurvol(this.ICourant, this.JCourant, false);
        }
        if (aSurvol) {
          this.ICourant = I;
          this.JCourant = J;
          ObjetHtml_1.GHtml.setFocus(lId);
        }
      }
      surSelection(I, J) {
        if (!this.estJourActif(I, J)) {
          return;
        }
        if ('surValidation' in this.Pere) {
          this.Pere.date = ObjetDate_1.GDate.getDateJour(
            ObjetDate_1.GDate.getJourSuivant(
              this.premierLundiDuMois,
              I * 7 + J,
            ),
          );
          this.Pere.surValidation(1, this.mois, this.annee);
        }
      }
      estJourDuMois(I, J) {
        const lDate = ObjetDate_1.GDate.getJourSuivant(
          this.premierLundiDuMois,
          I * 7 + J,
        );
        const lMois = lDate.getMonth();
        return lMois === this.mois && this.moteurDate.estDateDansBorne(lDate);
      }
      estJourActif(I, J) {
        return this.estJourValide(I, J);
      }
      estJourValide(I, J) {
        if (!IE.Cycles) {
          return true;
        }
        const lDate = ObjetDate_1.GDate.getJourSuivant(
          this.premierLundiDuMois,
          I * 7 + J,
        );
        return this.moteurDate.estDateValide(lDate);
      }
      estJourSemaineOuvre(J) {
        return this.moteurDate.options.joursSemaineValide
          ? this.moteurDate.options.joursSemaineValide.getValeur(J + 1)
          : true;
      }
      estJourMarque(aDate) {
        if (!IE.Cycles) {
          return false;
        }
        const lNbJours = this.moteurDate.options
          .estJoursMarquesSelonPremiereDate
          ? ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
              this.moteurDate.options.premiereDate,
              aDate,
            )
          : ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
              IE.Cycles.dateDebutPremierCycle(),
              aDate,
            ) + 1;
        return this.moteurDate.options.joursMarques
          ? this.moteurDate.options.joursMarques.getValeur(lNbJours)
          : false;
      }
      _avecComboAnnee() {
        return (
          !this.moteurDate.options.premiereDate ||
          !this.moteurDate.options.derniereDate
        );
      }
      _eventSurSelecMois(aParams) {
        if (
          aParams.genreEvenement ===
            Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
              .selection &&
          aParams.element
        ) {
          this.parametres.indiceMoisCourant = aParams.indice;
          this._actualiserSelonMoisCourant(aParams.element);
        }
      }
      _eventSelecAnnee(aParams) {
        if (
          aParams.genreEvenement ===
          Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie.selection
        ) {
          this.parametres.listeMois = this._construireListeMoisDAnnee(
            aParams.element.annee,
          );
          let lMoisTrouve = false;
          this.parametres.listeMois.parcourir((aMoisListe, aIndex) => {
            if (this.parametres.indiceMoisCourant === aIndex) {
              lMoisTrouve = true;
              return false;
            }
          });
          if (!lMoisTrouve) {
            this.parametres.indiceMoisCourant =
              aParams.indice > this.parametres.indiceAnnee
                ? 0
                : this.parametres.listeMois.count() - 1;
          }
          this.parametres.indiceAnnee = aParams.indice;
          this.comboMois.setDonnees(
            this.parametres.listeMois,
            this.parametres.indiceMoisCourant,
          );
        }
      }
      _getIndiceMoisDeDate(aDate) {
        const lAnnee = aDate.getFullYear();
        const lMois = aDate.getMonth();
        let lIndice = 0;
        this.parametres.listeMois.parcourir((D, aIndex) => {
          if (D.mois === lMois && D.annee === lAnnee) {
            lIndice = aIndex;
            return false;
          }
        });
        return lIndice;
      }
      _actualiserSelonMoisCourant(aArticleMois) {
        this.mois = aArticleMois.mois;
        this.annee = aArticleMois.annee;
        this.premierJourDuMois = ObjetDate_1.GDate.getPremierJourDuMois(
          aArticleMois.annee,
          aArticleMois.mois,
        );
        this.premierLundiDuMois = ObjetDate_1.GDate.getPremierLundiDuMois(
          aArticleMois.annee,
          aArticleMois.mois,
        );
        this.$refreshSelf();
        this._afficherJoursDeMoisCourant();
      }
      _construireListeMoisDAnnee(aAnnee) {
        let lPremiereDate = ObjetDate_1.GDate.getPremierJourDuMois(aAnnee, 0);
        let lDerniereDate = ObjetDate_1.GDate.getDernierJourDuMois(aAnnee, 11);
        if (
          this.moteurDate.options.premiereDate &&
          this.moteurDate.options.premiereDate > lPremiereDate
        ) {
          lPremiereDate = this.moteurDate.options.premiereDate;
        }
        if (
          this.moteurDate.options.derniereDate &&
          this.moteurDate.options.derniereDate < lDerniereDate
        ) {
          lDerniereDate = this.moteurDate.options.derniereDate;
        }
        const lListe = ObjetDate_1.GDate.getListeMoisAPartirDeDate(
          lPremiereDate,
          lDerniereDate,
          '%MMMM',
        );
        return lListe;
      }
      _construireListeAnnees(aDate) {
        const lListeAnnees = new ObjetListeElements_1.ObjetListeElements();
        const lAnneeCourante = aDate.getFullYear();
        let lAnneeDebut = lAnneeCourante;
        let lAnneeFin = lAnneeCourante;
        if (this.moteurDate.options.premiereDate) {
          lAnneeDebut = this.moteurDate.options.premiereDate.getFullYear();
        } else {
          lAnneeDebut = lAnneeCourante - 100;
        }
        if (this.moteurDate.options.derniereDate) {
          lAnneeFin = this.moteurDate.options.derniereDate.getFullYear();
        } else {
          lAnneeFin = lAnneeCourante + 100;
        }
        this.parametres.indiceAnnee = 0;
        for (let lAnnee = lAnneeDebut; lAnnee <= lAnneeFin; lAnnee++) {
          lListeAnnees.add(
            ObjetElement_1.ObjetElement.create({
              Libelle: lAnnee + '',
              annee: lAnnee,
            }),
          );
          if (lAnneeCourante === lAnnee) {
            this.parametres.indiceAnnee = lListeAnnees.count() - 1;
          }
        }
        this.comboAnnee.setDonnees(lListeAnnees, this.parametres.indiceAnnee);
      }
      _getJourPremierSemaine() {
        return ObjetDate_1.GDate.PremierLundi
          ? ObjetDate_1.GDate.getJourDeDate(ObjetDate_1.GDate.PremierLundi)
          : 0;
      }
      _afficherJoursDeMoisCourant() {
        const T = [];
        T.push(
          '<table class="full-width Texte10 EspaceHaut m-top-l" role="grid">',
        );
        T.push('<tr class="titre-jours" role="row">');
        for (let J = 0; J < this.nbrColonnes; J++) {
          const lJour = (J + this._getJourPremierSemaine()) % 7;
          T.push(
            IE.jsx.str(
              'th',
              {
                role: 'columnheader',
                class: this.estJourSemaineOuvre(lJour) ? ' ouvre' : '',
                'aria-label':
                  'dimanche'[lJour],
              },
              'dim.'[lJour],
            ),
          );
        }
        T.push('</tr>');
        for (let I = 0; I < this.nbrLignes; I++) {
          T.push('<tr class="jours" role="row">');
          for (let J = 0; J < this.nbrColonnes; J++) {
            T.push(this.composeJour(I, J));
          }
          T.push('</tr>');
        }
        T.push('</table>');
        ObjetHtml_1.GHtml.setHtml(this.idJours, T.join(''), true);
      }
      _surKeyUp(I, J, aEvent) {
        if (ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent)) {
          if (this.estJourValide(I, J)) {
            this.surSelection(I, J);
          }
        } else if (
          aEvent.which === ToucheClavier_1.ToucheClavier.FlecheHaut &&
          I > 0
        ) {
          this.surSurvol(I, J, false);
          this.surSurvol(I - 1, J, true);
        } else if (
          aEvent.which === ToucheClavier_1.ToucheClavier.FlecheBas &&
          I + 1 < this.nbrLignes
        ) {
          this.surSurvol(I, J, false);
          this.surSurvol(I + 1, J, true);
        } else if (
          aEvent.which === ToucheClavier_1.ToucheClavier.FlecheGauche &&
          J > 0
        ) {
          this.surSurvol(I, J, false);
          this.surSurvol(I, J - 1, true);
        } else if (
          aEvent.which === ToucheClavier_1.ToucheClavier.FlecheDroite &&
          J + 1 < this.nbrColonnes
        ) {
          this.surSurvol(I, J, false);
          this.surSurvol(I, J + 1, true);
        } else if (aEvent.which === ToucheClavier_1.ToucheClavier.Debut) {
          this.surSurvol(I, J, false);
          this.surSurvol(aEvent.ctrlKey ? 0 : I, 0, true);
        } else if (aEvent.which === ToucheClavier_1.ToucheClavier.Fin) {
          this.surSurvol(I, J, false);
          this.surSurvol(
            aEvent.ctrlKey ? this.nbrLignes - 1 : I,
            this.nbrColonnes - 1,
            true,
          );
        }
      }
    }
    exports.InterfaceSelecteurDate = InterfaceSelecteurDate;
    function _getLigneEtColonne(aElement) {
      return {
        i: ObjetHtml_1.GHtml.extraireNombreDId(aElement.id, 1),
        j: ObjetHtml_1.GHtml.extraireNombreDId(aElement.id),
      };
    }
  },
  fn: 'interfaceselecteurdate.js',
});