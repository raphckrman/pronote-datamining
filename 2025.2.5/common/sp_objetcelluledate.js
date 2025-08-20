IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetCelluleDate = void 0;
    require('Form-components.css');
    const ControleSaisieEvenement_1 = require('ControleSaisieEvenement');
    const Enumere_Event_1 = require('Enumere_Event');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetFenetre_Date_1 = require('ObjetFenetre_Date');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetCelluleBouton_1 = require('ObjetCelluleBouton');
    const MoteurSelecteurDate_1 = require('MoteurSelecteurDate');
    const ToucheClavier_1 = require('ToucheClavier');
    const ObjetWAI_1 = require('ObjetWAI');
    const AccessApp_1 = require('AccessApp');
    const Divers_css_1 = require('Divers.css');
    const ObjetHtml_1 = require('ObjetHtml');
    class ObjetCelluleDate extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.moteurDate = new MoteurSelecteurDate_1.MoteurSelecteurDate();
        this.options = this.moteurDate.options;
        this._optionsFenetre = {};
        this.setOptions({
          avecInitDateSiVide: IE.estMobile,
          avecControleDateInit: true,
          ariaLabel: '',
          ariaDescription: '',
          largeurComposant: IE.estMobile ? null : 75,
          hauteurComposant: 17,
          formatDate: '[%JJJ %JJ %MMM]',
          avecBoutonsPrecedentSuivant: false,
          genreBoutonCellule: IE.estMobile
            ? ObjetCelluleBouton_1.EGenreBoutonCellule.Aucun
            : ObjetCelluleBouton_1.EGenreBoutonCellule.Image,
          iconeGauche: IE.estMobile ? 'icon_calendar_empty' : '',
          classeCSSTexte: 'Gras',
          designMobile: IE.estMobile,
          placeHolder: '',
        });
      }
      detruireInstances() {
        this._fermerFenetreDate();
      }
      setOptionsObjetCelluleDate(aOptions) {
        $.extend(this.options, aOptions);
        if (this.options.fenetre) {
          this.setOptionsFenetre(this.options.fenetre);
        }
        return this;
      }
      setOptionsFenetre(aOptions) {
        Object.assign(this._optionsFenetre, aOptions);
      }
      setParametresFenetre(
        aPremierLundi,
        aPremiereDate,
        aDerniereDate,
        aActifJour,
        aActifSemaine,
        aJoursFeries,
        aAvecAucuneDate,
        aJoursMarques,
      ) {
        this.moteurDate.setOptions({
          premiereDate: aPremiereDate,
          derniereDate: aDerniereDate,
          joursSemaineValide: aActifJour,
          domaineValide: aActifSemaine,
          joursFeries: aJoursFeries,
          joursMarques: aJoursMarques,
        });
        if (aAvecAucuneDate !== undefined) {
          this._optionsFenetre.avecAucuneDate = aAvecAucuneDate;
        }
      }
      setPremiereDateSaisissable(aPremiereDateSaisissable, aAfficher) {
        this.moteurDate.setOptions({
          premiereDateSaisissable: aPremiereDateSaisissable,
          afficherPremiereDateSaisissable: aAfficher,
        });
      }
      setDerniereDateSaisissable(aDerniereDateSaisissable) {
        this.moteurDate.setOptions({ derniereDate: aDerniereDateSaisissable });
      }
      initialiser() {
        this.cellule = new ObjetCelluleBouton_1.ObjetCelluleBouton(
          this.Nom + '.cellule',
          null,
          this,
          this.surCellule,
        );
        this.setPremierElement(this.cellule.NomEdit);
        this.cellule.setOptionsObjetCelluleBouton(this.options);
        this.cellule.setOptionsObjetCelluleBouton({
          estSaisissable: false,
          avecZoneSaisie: false,
          roleWAI: ObjetWAI_1.EGenreRole.Combobox,
          popupWAI: 'dialog',
          ariaLabelledBy: this.getLabelledBy(),
          placeHolder: this.options.placeHolder,
          genreBouton: this.options.genreBoutonCellule,
          hauteur: this.options.hauteurComposant,
          largeur: this.options.largeurComposant,
          classTexte: this.options.classeCSSTexte,
          iconeGauche: this.options.avecBoutonsPrecedentSuivant
            ? ''
            : this.options.iconeGauche,
        });
        this.afficher();
        this.cellule.initialiser();
        this.cellule.setActif(this.Actif);
      }
      setDonnees(aDate, aAvecEvenement = false) {
        this.date = aDate;
        if (!this.date && this.options.avecInitDateSiVide) {
          this.date = (0, AccessApp_1.getApp)().getDemo()
            ? (0, AccessApp_1.getApp)().getDateDemo()
            : ObjetDate_1.GDate.getDateCourante();
        }
        if (this.options.avecControleDateInit && this.date) {
          this.date = this.moteurDate.getDateSelonValidite(this.date);
        }
        this._actualiserDate();
        if (aAvecEvenement) {
          this.surFenetreDate(null, this.date);
        }
      }
      jsxGetStyleObjetCelluleDate() {
        return {
          width:
            this.options.largeurComposant &&
            this.options.largeurComposant === '100%'
              ? '100%'
              : '',
        };
      }
      jsxGetClassObjetCelluleDate() {
        return this.getActif() ? '' : 'input-wrapper-disabled';
      }
      jsxModeleBoutonBtnPrecSui(aPrecedent) {
        return {
          event: () => {
            this._eventDateSuivante(aPrecedent);
          },
          getDisabled: () => {
            return this._getDisabledBtnPrecSuiv(aPrecedent);
          },
          getTitle: () => {
            return aPrecedent
              ? 'Précédent'
              : 'Suivant';
          },
        };
      }
      jsxGetNodeCellulePrecSuiv(aNode) {
        $(aNode).on({
          swipeleft: () => {
            if (!this._getDisabledBtnPrecSuiv(false)) {
              this._eventDateSuivante(false);
            }
          },
          swiperight: () => {
            if (!this._getDisabledBtnPrecSuiv(true)) {
              this._eventDateSuivante(true);
            }
          },
        });
      }
      construireAffichage() {
        if (!ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
          return '';
        }
        return IE.jsx.str(
          'div',
          {
            class: 'ObjetCelluleDate input-wrapper ',
            'ie-class': this.jsxGetClassObjetCelluleDate.bind(this),
            'ie-style': this.jsxGetStyleObjetCelluleDate.bind(this),
          },
          () => {
            if (this.options.avecBoutonsPrecedentSuivant) {
              return IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str('ie-btnicon', {
                  class: [
                    'icon_angle_left fix-bloc',
                    this.options.designMobile ? '' : ' icon btnImageIcon',
                  ],
                  'ie-model': this.jsxModeleBoutonBtnPrecSui.bind(this, true),
                  'aria-labelledby': this.getLabelledBy(),
                }),
                IE.jsx.str('div', {
                  id: this.cellule.getNom(),
                  class: 'fluid-bloc',
                  'ie-node': this.jsxGetNodeCellulePrecSuiv.bind(this),
                }),
                IE.jsx.str('ie-btnicon', {
                  class: [
                    'icon_angle_right fix-bloc',
                    this.options.designMobile ? '' : ' icon btnImageIcon',
                  ],
                  'ie-model': this.jsxModeleBoutonBtnPrecSui.bind(this, false),
                  style: 'flex: none;',
                  'aria-labelledby': this.getLabelledBy(),
                }),
              );
            }
            return IE.jsx.str('div', {
              id: this.cellule.getNom(),
              style: 'flex:1 1 auto;',
            });
          },
          IE.jsx.str(
            'span',
            {
              class: Divers_css_1.StylesDivers.srOnly,
              'aria-hidden': 'true',
              id: `${this.Nom}_labelwai`,
            },
            this.options.ariaLabel
              ? this.options.ariaLabel
              : 'Date',
          ),
        );
      }
      _actualiserDate() {
        if (this.cellule) {
          this.cellule.setLibelle(this._getChaineDate());
        }
      }
      getLabelledBy() {
        return this.options.ariaLabelledBy || `${this.Nom}_labelwai`;
      }
      surCellule(aGenreEvent, aEvent) {
        if (!this.Actif) {
          return;
        }
        switch (aGenreEvent) {
          case Enumere_Event_1.EEvent.SurClick: {
            this._ouvrirFenetreDate();
            break;
          }
          case Enumere_Event_1.EEvent.SurKeyUp: {
            if (
              aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot ||
              aEvent.which === ToucheClavier_1.ToucheClavier.FlecheBas
            ) {
              this._ouvrirFenetreDate();
            }
          }
        }
      }
      _ouvrirFenetreDate() {
        if (this.fenetreDate) {
          this._fermerFenetreDate();
        }
        if (this.options.avecAucuneDate !== undefined) {
          this._optionsFenetre.avecAucuneDate = this.options.avecAucuneDate;
        }
        this.fenetreDate = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_Date_1.ObjetFenetre_Date,
          { pere: this, evenement: this.surFenetreDate, initialiser: false },
          this._optionsFenetre,
        );
        this.fenetreDate.setOptionsFenetre({
          callbackApresFermer: () => {
            delete this.fenetreDate;
          },
        });
        this.fenetreDate.setMoteurDate(this.moteurDate);
        this.fenetreDate.initialiser();
        this.fenetreDate.setDonnees(this.date);
        this.fenetreDate.positionnerSousId(this.Nom);
      }
      _fermerFenetreDate() {
        if (this.fenetreDate) {
          this.fenetreDate.fermer();
        }
      }
      surFenetreDate(aGenreBouton, aDate) {
        this.date = aDate;
        this._actualiserDate();
        this._fermerFenetreDate();
        if (aDate) {
          (0, ControleSaisieEvenement_1.ControleSaisieEvenement)(() => {
            this.callback.appel(this.date, aGenreBouton);
          }, !this.ControleNavigation);
        }
      }
      getDate() {
        return this.date;
      }
      getBorneDates() {
        return {
          dateDebut: this.options.premiereDate,
          dateFin: this.options.derniereDate,
        };
      }
      setActif(AActif) {
        super.setActif(AActif);
        if (this.cellule) {
          this.cellule.setActif(AActif);
        }
        this.$refreshSelf();
      }
      getOptionsCelluleDate() {
        return this.options;
      }
      _getDisabledBtnPrecSuiv(aPrecedent) {
        if (!this.date || !this.getActif()) {
          return true;
        }
        return !this.moteurDate.rechercheSuivantValide(this.date, aPrecedent);
      }
      _eventDateSuivante(aPrecedent) {
        const lDate = this.moteurDate.rechercheSuivantValide(
          this.date,
          aPrecedent,
        );
        if (lDate) {
          this.surFenetreDate(null, lDate);
        }
        this.$refreshSelf();
      }
      _getPeriodeCourante() {
        const lCycleCourant = IE.Cycles.cycleDeLaDate(this.date);
        const lDateDeb = IE.Cycles.dateDebutCycle(lCycleCourant);
        const lDateFin = IE.Cycles.dateDernierJourOuvreCycle(lCycleCourant);
        return {
          dateDebut: lDateDeb,
          dateFin: lDateFin,
          estJourUnique: lDateDeb === lDateFin,
          estMoisUnique:
            lDateDeb.getMonth() === lDateFin.getMonth() &&
            lDateDeb.getFullYear() === lDateFin.getFullYear(),
          estAnneeUnique: lDateDeb.getFullYear() === lDateFin.getFullYear(),
        };
      }
      _getChaineDate() {
        if (!this.date) {
          return this.options.placeHolder ? '' : '&nbsp;';
        }
        if (this.options.avecSelectionSemaine) {
          const lPeriode = this._getPeriodeCourante();
          const lFormatDateDeb =
              '%J' +
              (lPeriode.estMoisUnique ? '' : ' %MMM') +
              (lPeriode.estAnneeUnique ? '' : ' %AA'),
            lFormatDateFin =
              '%J %MMM' + (lPeriode.estAnneeUnique ? '' : ' %AA');
          return 'du %0:s au %1:s',
              ObjetDate_1.GDate.formatDate(lPeriode.dateFin, lFormatDateFin),
            ],
          );
        } else {
          return ObjetDate_1.GDate.formatDate(
            this.date,
            this.options.formatDate,
          );
        }
      }
    }
    exports.ObjetCelluleDate = ObjetCelluleDate;
  },
  fn: 'objetcelluledate.js',
});