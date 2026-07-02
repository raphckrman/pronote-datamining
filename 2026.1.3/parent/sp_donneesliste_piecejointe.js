IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DonneesListe_PieceJointe = void 0;
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetFenetre_PieceJointeCP_1 = require('@cp/Produit/Script/ObjetFenetre_PieceJointeCP');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const IEHtml_Combo_1 = require('@cp/Espace/Script/IEHtml.Combo');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const Enumere_EvenementObjetSaisie_1 = require('@cp/script/Enumere/Enumere_EvenementObjetSaisie');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    class DonneesListe_PieceJointe extends ObjetFenetre_PieceJointeCP_1.DonneesListe_PieceJointeCP {
      constructor(...aParams) {
        super(...aParams);
        this.parametresSco = (0, AccessApp_1.getApp)().getObjetParametres();
        this.reinitFiltres();
      }
      getInfosSuppZonePrincipale(aParams) {
        const H = [];
        if (this.avecGestionLibelleSurLiens) {
          const lDonnee = aParams.article;
          H.push(lDonnee.url);
        }
        return H.join('');
      }
      getZoneMessage(aParams) {
        var _a;
        return this.options.avecThemes &&
          ((_a = aParams.article.ListeThemes) === null || _a === void 0
            ? void 0
            : _a.count())
          ? IE.jsx.str(
              IE.jsx.fragment,
              null,
              'Thème(s)',
              ' : ',
              aParams.article.ListeThemes.getTableauLibelles().join(', '),
            )
          : '';
      }
      construireFiltres() {
        var _a, _b, _c;
        return IE.jsx.str(
          'div',
          { class: 'filtres-content' },
          ((_a = this.options.avecFiltre) === null || _a === void 0
            ? void 0
            : _a.date) &&
            IE.jsx.str(
              'div',
              { class: 'field-contain' },
              IE.jsx.str(IEHtml_Combo_1.Combo, {
                ie_model: this.jsxComboModelDate.bind(this),
              }),
            ),
          ((_b = this.options.avecFiltre) === null || _b === void 0
            ? void 0
            : _b.classeMatiere) &&
            IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str(
                'div',
                { class: 'field-contain' },
                IE.jsx.str(
                  IEHtml_CheckboxRadio_1.Checkbox,
                  {
                    ie_model: this.jsxModelCheckboxFiltreMemeMatiere.bind(this),
                  },
                  'Pour les cours de la même matière',
                ),
              ),
              IE.jsx.str(
                'div',
                { class: 'field-contain' },
                IE.jsx.str(
                  IEHtml_CheckboxRadio_1.Checkbox,
                  {
                    ie_model:
                      this.jsxModelCheckboxFiltreMemeClasseGroupe.bind(this),
                  },
                  'Pour les cours de la même classe ou du même groupe',
                ),
              ),
            ),
          ((_c = this.options.avecFiltre) === null || _c === void 0
            ? void 0
            : _c.classeMatiere) &&
            IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str(
                'div',
                { class: 'field-contain' },
                IE.jsx.str(
                  IEHtml_CheckboxRadio_1.Checkbox,
                  {
                    ie_model:
                      this.jsxModelCheckboxFiltreAfficherProgression.bind(this),
                  },
                  'Afficher les pièces jointes issues des progressions',
                ),
              ),
            ),
        );
      }
      reinitFiltres() {
        this.PourMemeMatiere = false;
        this.PourMemeClasseEtGroupe = false;
        this.afficherProgression = false;
        if (this.filtreCombo) {
          this.filtreCombo.setSelection(1);
        }
      }
      lesFiltresSontVides() {
        return (
          !this.options.avecFiltre ||
          ((!this.options.avecFiltre.date ||
            this.listePeriodes.getIndiceParElement(
              this.filtreCombo.getSelection(),
            ) === 1) &&
            (!this.options.avecFiltre.classeMatiere ||
              (!this.PourMemeMatiere && !this.PourMemeClasseEtGroupe)) &&
            (!this.options.avecFiltre.afficherProgression ||
              !this.afficherProgression))
        );
      }
      jsxComboModelDate() {
        return {
          init: (aCombo) => {
            if (this.listePeriodes && this.DateCours) {
              this.listePeriodes.setLibelle(
                0,
                ObjetDate_1.GDate.formatDate(
                  this.DateCours,
                  ObjetChaine_1.GChaine.format(
                    'le %s',
                    ['%JJ %MMMM'],
                  ),
                ),
              );
            }
            aCombo.setOptionsObjetSaisie({
              libelleHaut:
                this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
                  ? 'Uniquement les sites internet utilisés'
                  : 'Uniquement les pièces jointes utilisées',
              longueur: 180,
            });
            aCombo.setDonneesObjetSaisie({
              liste: this.listePeriodes,
              selection:
                this.genreRessourceDocJoint !==
                Enumere_Ressource_1.TypeHttpRessource
                  .HttpRessource_DocJointEtablissement
                  ? 1
                  : undefined,
            });
            this.filtreCombo = aCombo;
          },
          event: (aParams) => {
            if (
              aParams.genreEvenement ===
                Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                  .selection &&
              aParams.estSelectionManuelle
            ) {
              const LNbrMois = [0, 0.5, 1, 3, 6];
              if (
                aParams.indice ===
                DonneesListe_PieceJointe.genrePeriodeFiltre.unAn
              ) {
                this.DateDeb = this.parametresSco.PremiereDate;
                this.DateFin = this.parametresSco.DerniereDate;
              } else {
                const lDate = this.DateCours ? this.DateCours : new Date();
                this.DateDeb = new Date(
                  lDate.getTime() -
                    30 * (1000 * 60 * 60 * 24) * LNbrMois[aParams.indice],
                );
                this.DateFin = lDate;
              }
              this.actualiserListe();
            }
          },
        };
      }
      jsxModelCheckboxFiltreMemeMatiere() {
        return {
          getValue: () => {
            return !!this.PourMemeMatiere;
          },
          setValue: (aValue) => {
            this.PourMemeMatiere = aValue;
            this.actualiserListe();
          },
        };
      }
      jsxModelCheckboxFiltreMemeClasseGroupe() {
        return {
          getValue: () => {
            return !!this.PourMemeClasseEtGroupe;
          },
          setValue: (aValue) => {
            this.PourMemeClasseEtGroupe = aValue;
            this.actualiserListe();
          },
        };
      }
      jsxModelCheckboxFiltreAfficherProgression() {
        return {
          getValue: () => {
            return !!this.afficherProgression;
          },
          setValue: (aValue) => {
            this.afficherProgression = aValue;
            this.actualiserListe();
          },
        };
      }
      setDonnees(aDonnees) {
        super.setDonnees(aDonnees);
        this.listePeriodes = aDonnees.donneesFiltre.listePeriodes;
        this.PourMemeMatiere = aDonnees.donneesFiltre.pourMemeMatiere;
        this.PourMemeClasseEtGroupe =
          aDonnees.donneesFiltre.pourMemeClasseEtGroupe;
        this.afficherProgression = aDonnees.donneesFiltre.afficherProgression;
        this.DateDeb = aDonnees.donneesFiltre.date.dateDebut;
        this.DateFin = aDonnees.donneesFiltre.date.dateFin;
        this.DateCours = aDonnees.donneesFiltre.date.dateCours;
      }
      getVisible(D) {
        const lEstDansDate =
          !D.Date || (D.Date >= this.DateDeb && D.Date <= this.DateFin);
        let lEstDuGenre = true;
        if (D.estDuGenre !== undefined) {
          lEstDuGenre = D.estDuGenre;
        }
        const lPourMemeMatiere =
          !this.options.avecFiltre ||
          !this.PourMemeMatiere ||
          D.PourMemeMatiere;
        const lPourProgression =
          !this.options.avecFiltre.afficherProgression ||
          !D.issuProgression ||
          (this.afficherProgression && D.issuProgression);
        return (
          D.getGenre() === this.Genre &&
          lEstDuGenre &&
          (D.Actif ||
            (lPourMemeMatiere &&
              (!this.PourMemeClasseEtGroupe || D.PourMemeClasseEtGroupe) &&
              lPourProgression &&
              lEstDansDate)) &&
          (D.getEtat() === Enumere_Etat_1.EGenreEtat.Creation ||
            D.existeNumero())
        );
      }
      editionAutorisee(aParams) {
        return (
          this.genreRessourceDocJoint !==
            Enumere_Ressource_1.TypeHttpRessource
              .HttpRessource_DocJointEtablissement ||
          this.suppressionAutoriseePJ(
            aParams.article,
            this.genreRessourceDocJoint,
          )
        );
      }
      suppressionAutoriseePJ(aPJ, aGenreRessource) {
        if (!aPJ) {
          return false;
        }
        if (
          aGenreRessource !==
          Enumere_Ressource_1.TypeHttpRessource
            .HttpRessource_DocJointEtablissement
        ) {
          return true;
        } else {
          return aPJ.modifiable !== false;
        }
      }
    }
    exports.DonneesListe_PieceJointe = DonneesListe_PieceJointe;
    (function (DonneesListe_PieceJointe) {
      let genrePeriodeFiltre;
      (function (genrePeriodeFiltre) {
        genrePeriodeFiltre[(genrePeriodeFiltre['jourCourant'] = 0)] =
          'jourCourant';
        genrePeriodeFiltre[(genrePeriodeFiltre['demiMois'] = 1)] = 'demiMois';
        genrePeriodeFiltre[(genrePeriodeFiltre['unMois'] = 2)] = 'unMois';
        genrePeriodeFiltre[(genrePeriodeFiltre['troisMois'] = 3)] = 'troisMois';
        genrePeriodeFiltre[(genrePeriodeFiltre['sixMois'] = 4)] = 'sixMois';
        genrePeriodeFiltre[(genrePeriodeFiltre['unAn'] = 5)] = 'unAn';
      })(
        (genrePeriodeFiltre =
          DonneesListe_PieceJointe.genrePeriodeFiltre ||
          (DonneesListe_PieceJointe.genrePeriodeFiltre = {})),
      );
    })(
      DonneesListe_PieceJointe ||
        (exports.DonneesListe_PieceJointe = DonneesListe_PieceJointe = {}),
    );
  },
  fn: 'donneesliste_piecejointe.js',
});