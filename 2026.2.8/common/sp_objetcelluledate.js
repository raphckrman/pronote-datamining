IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetCelluleDate = void 0;
    exports.SelecteurDate = SelecteurDate;
    const tslib_1 = require('tslib');
    require('@cp/Produit/Css/Form-components.css');
    const ControleSaisieEvenement_1 = require('@cp/script/ControleSaisieEvenement');
    const Enumere_Event_1 = require('@cp/script/Enumere/Enumere_Event');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const ObjetFenetre_Date_1 = require('@cp/script/ObjetsGraphiques/Fenetre/ObjetFenetre_Date');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetCelluleBouton_1 = require('@cp/script/ObjetsGraphiques/ObjetCelluleBouton');
    const MoteurSelecteurDate_1 = require('@cp/script/MoteurSelecteurDate');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IconeSvgAngle_left_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAngle_left');
    const IconeSvgAngle_right_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgAngle_right');
    function SelecteurDate(_a) {
      var _b;
      var {
          model,
          ['aria-label']: ariaLabel,
          ['aria-labelledby']: ariaLabelledby,
          ['aria-describedby']: ariadescribedby,
        } = _a,
        aProps = tslib_1.__rest(_a, [
          'model',
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
        ]);
      let lDate;
      let lCelluleDate;
      let lDisabled = false;
      const lModel = model();
      const lGetIdent = () => {
        return {
          create: () =>
            new ObjetCelluleDate({
              pere: lModel.pere,
              evenement: (aDate) => {
                lModel.setDate(aDate, lCelluleDate);
              },
            }),
          init: (aCellule, aContexte) => {
            if (ariaLabel || ariaLabelledby || ariadescribedby) {
              aCellule.setOptionsObjetCelluleDate({
                ariaLabel: ariaLabel || '',
                ariaLabelledBy: ariaLabelledby || '',
                ariaDescribedBy: ariadescribedby || '',
              });
            }
            lModel.init(aCellule);
            lCelluleDate = aCellule;
            if (lModel.getDisabled) {
              lDisabled = lModel.getDisabled(lCelluleDate);
              if (lDisabled) {
                lCelluleDate.setActif(!lDisabled);
              }
            }
            lDate = lModel.getDate(lCelluleDate);
            if (lDate) {
              lCelluleDate.setDonnees(lDate);
            }
            IEHtml_1.IEHtml.outils.abonnerRefresh(
              () => {
                if (!lCelluleDate) {
                  return;
                }
                const lDateNew = lModel.getDate(lCelluleDate);
                if (
                  !!lDateNew !== !!lDate ||
                  (lDateNew &&
                    lDate &&
                    !ObjetDate_1.GDate.estJourEgal(lDateNew, lDate))
                ) {
                  lDate = lDateNew;
                  lCelluleDate.setDonnees(lDate);
                }
                if (lModel.getDisabled) {
                  const lDisabledNew = lModel.getDisabled(lCelluleDate);
                  if (lDisabledNew !== lDisabled) {
                    lDisabled = lDisabledNew;
                    lCelluleDate.setActif(!lDisabled);
                  }
                }
              },
              aContexte.node,
              aContexte,
            );
          },
          destroy: (aSelecteurDate) => {
            var _a;
            lCelluleDate = undefined;
            (_a = lModel.destroy) === null || _a === void 0
              ? void 0
              : _a.call(lModel, aSelecteurDate);
          },
        };
      };
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        IEHtml_1.IEHtml.getCommentHtmlDebug(
          `<SelecteurDate> (ObjetCelluleDate) model="${(_b = model.name) !== null && _b !== void 0 ? _b : 'JSX anonyme'}"`,
        ),
        IE.jsx.str(
          'div',
          Object.assign({}, aProps, { ie_identite: lGetIdent }),
        ),
      );
    }
    class ObjetCelluleDate extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
        this.idContenuWaiLabel = `${this.Nom}_labelwai`;
        this.idContenuWaiDate = `${this.Nom}_labelwai_c`;
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
        this.cellule = new ObjetCelluleBouton_1.ObjetCelluleBouton({
          pere: this,
          evenement: this.surCellule,
        });
        this.setPremierElement(this.cellule.NomEdit);
        this.cellule.setOptionsObjetCelluleBouton(this.options);
        this.cellule.setOptionsObjetCelluleBouton({
          estSaisissable: false,
          avecZoneSaisie: false,
          roleWAI: 'button',
          popupWAI: 'dialog',
          ariaLabel: '',
          ariaLabelledBy: this.getLabelledBy() + ' ' + this.idContenuWaiDate,
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
        this._actualiserDate();
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
              ? GlossaireCP_1.TradGlossaireCP.Precedent
              : GlossaireCP_1.TradGlossaireCP.Suivant;
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
            ie_class: this.jsxGetClassObjetCelluleDate.bind(this),
            ie_style: this.jsxGetStyleObjetCelluleDate.bind(this),
          },
          () => {
            if (this.options.avecBoutonsPrecedentSuivant) {
              return IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str(
                  IEHtml_BtnImage_1.BtnIcon,
                  {
                    class: [
                      'fix-bloc',
                      this.options.designMobile ? '' : ' icon btnImageIcon',
                    ],
                    ie_model: this.jsxModeleBoutonBtnPrecSui.bind(this, true),
                    'aria-labelledby': this.getLabelledBy(),
                    'aria-describedby': this.idContenuWaiDate,
                  },
                  IE.jsx.str(IconeSvgAngle_left_1.IconeSvgAngle_left, null),
                ),
                IE.jsx.str('div', {
                  id: this.cellule.getNom(),
                  class: 'fluid-bloc',
                  ie_node: this.jsxGetNodeCellulePrecSuiv.bind(this),
                }),
                IE.jsx.str(
                  IEHtml_BtnImage_1.BtnIcon,
                  {
                    class: [
                      'fix-bloc',
                      this.options.designMobile ? '' : ' icon btnImageIcon',
                    ],
                    ie_model: this.jsxModeleBoutonBtnPrecSui.bind(this, false),
                    style: 'flex: none;',
                    'aria-labelledby': this.getLabelledBy(),
                    'aria-describedby': this.idContenuWaiDate,
                  },
                  IE.jsx.str(IconeSvgAngle_right_1.IconeSvgAngle_right, null),
                ),
              );
            }
            return IE.jsx.str('div', {
              id: this.cellule.getNom(),
              style: 'flex:1 1 auto;',
            });
          },
          IE.jsx.str(
            'p',
            {
              class: Divers_css_1.SD.srOnly,
              'aria-hidden': 'true',
              id: this.idContenuWaiLabel,
            },
            this.options.ariaLabel
              ? this.options.ariaLabel
              : 'Date',
          ),
          IE.jsx.str(
            'p',
            {
              class: Divers_css_1.SD.srOnly,
              'aria-hidden': 'true',
              id: this.idContenuWaiDate,
            },
            this._getChaineDate(true),
          ),
        );
      }
      _actualiserDate() {
        if (this.cellule) {
          this.cellule.setLibelle(this._getChaineDate(false));
          ObjetHtml_1.GHtml.setHtml(
            this.idContenuWaiDate,
            this._getChaineDate(true),
          );
        }
      }
      getLabelledBy() {
        return this.options.ariaLabelledBy || this.idContenuWaiLabel;
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
        this.fenetreDate = new ObjetFenetre_Date_1.ObjetFenetre_Date({
          pere: this,
          evenement: this.surFenetreDate,
        }).initAfficher({
          initialiser: false,
          options: Object.assign(this._optionsFenetre, {
            callbackApresFermer: () => {
              delete this.fenetreDate;
            },
          }),
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
        this.$refresh();
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
        this.$refresh();
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
      _getChaineDate(aPourWAI) {
        if (!this.date) {
          if (aPourWAI) {
            if (!this.options.placeHolder) {
              return '';
            }
            return MethodesObjet_1.MethodesObjet.isObject(
              this.options.placeHolder,
            )
              ? this.options.placeHolder.libelleHtml || ''
              : this.options.placeHolder;
          }
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
    new ObjetCelluleDate({ evenement: (aDate) => {} });
  },
  fn: 'objetcelluledate.js',
});