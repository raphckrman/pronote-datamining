IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_PieceJointe = void 0;
    const DonneesListe_PieceJointe_1 = require('DonneesListe_PieceJointe');
    const DonneesListe_PieceJointeFlat_1 = require('DonneesListe_PieceJointeFlat');
    const ObjetFenetre_PieceJointeCP_1 = require('ObjetFenetre_PieceJointeCP');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetStyle_1 = require('ObjetStyle');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const Enumere_EvenementObjetSaisie_1 = require('Enumere_EvenementObjetSaisie');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetSaisiePN_1 = require('ObjetSaisiePN');
    const GUID_1 = require('GUID');
    class ObjetFenetre_PieceJointe extends ObjetFenetre_PieceJointeCP_1.ObjetFenetre_PieceJointeCP {
      constructor(...aParams) {
        super(...aParams);
        this.ids = {
          deploiementFiltres: GUID_1.GUID.getId(),
          zoneFiltres: GUID_1.GUID.getId(),
        };
        this.PourMemeMatiere = false;
        this.PourMemeClasseEtGroupe = false;
        this.DateDeb = GParametres.PremiereDate;
        this.DateFin = GParametres.DerniereDate;
        this.genrePeriodeFiltre = {
          jourCourant: 0,
          demiMois: 1,
          unMois: 2,
          troisMois: 3,
          sixMois: 4,
          unAn: 5,
        };
        this.setOptionsFenetre({
          avecColonneInfoBulle: false,
          avecBoutonSupprimer: !IE.estMobile,
          avecComposeBasInFooter: IE.estMobile,
          avecDeploiementFiltres: IE.estMobile,
          avecTitre: !IE.estMobile,
          avecCroixFermeture: !IE.estMobile,
        });
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          btnMaj: {
            getDisabled: function () {
              if (aInstance.estModeFlat()) {
                return true;
              }
              const lListe = aInstance.getListeEltsSelect();
              return (
                lListe.count() !== 1 ||
                !DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.suppressionAutoriseePJ(
                  lListe.get(0),
                  aInstance.parametres.genreRessourceDocJoint,
                )
              );
            },
          },
          btnSupp: {
            getDisabled: function () {
              if (aInstance.estModeFlat()) {
                return true;
              }
              const lListe = aInstance.getListeEltsSelect();
              if (lListe.count() === 0) {
                return true;
              }
              let lAvecSuppression = true;
              lListe.parcourir((D) => {
                if (
                  !DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.suppressionAutoriseePJ(
                    D,
                    aInstance.parametres.genreRessourceDocJoint,
                  )
                ) {
                  lAvecSuppression = false;
                  return false;
                }
              });
              return !lAvecSuppression;
            },
          },
          nodeDeploiementFiltres: function () {
            const lMap = {
              click: function () {
                const lEstDeploye =
                  $('#' + aInstance.ids.zoneFiltres.escapeJQ()).css(
                    'display',
                  ) !== 'none';
                if (lEstDeploye) {
                  $('#' + aInstance.ids.zoneFiltres.escapeJQ()).css(
                    'display',
                    'none',
                  );
                  $('#' + aInstance.ids.deploiementFiltres.escapeJQ())
                    .children()
                    .first()
                    .removeClass('icon_chevron_up')
                    .addClass('icon_chevron_down');
                } else {
                  $('#' + aInstance.ids.zoneFiltres.escapeJQ()).css(
                    'display',
                    '',
                  );
                  $('#' + aInstance.ids.deploiementFiltres.escapeJQ())
                    .children()
                    .first()
                    .removeClass('icon_chevron_down')
                    .addClass('icon_chevron_up');
                }
              },
            };
            $(this.node).on(lMap);
          },
          checkFiltreMemeMatiere: {
            getValue: function () {
              return !!aInstance.PourMemeMatiere;
            },
            setValue: function (aValeur) {
              aInstance.PourMemeMatiere = aValeur;
              aInstance.setDonneesListe();
            },
          },
          checkFiltreMemeClasseGroupe: {
            getValue: function () {
              return !!aInstance.PourMemeClasseEtGroupe;
            },
            setValue: function (aValeur) {
              aInstance.PourMemeClasseEtGroupe = aValeur;
              aInstance.setDonneesListe();
            },
          },
        });
      }
      avecGestionLibelleSurLiens() {
        return this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url;
      }
      construireInstances() {
        super.construireInstances();
        this.IdentCombo = this.add(
          ObjetSaisiePN_1.ObjetSaisiePN,
          this._evenementSurCombo,
          this._initialiserCombo,
        );
      }
      setOptions(aOptions) {
        this.setOptionsFenetre(aOptions);
        return this;
      }
      afficherFenetrePJ(aParam) {
        this._setDocumentsJointsActifs(
          aParam.listePJTot,
          aParam.listePJContexte,
        );
        this.setGenre(aParam.genreFenetrePJ);
        this.setDonnees({
          listePiecesJointes: aParam.listePJTot,
          genre: aParam.genrePJ,
          genreRessourceDocJoint: aParam.genreRessourcePJ,
          avecFiltre: aParam.avecFiltre,
          listePeriodes: aParam.listePeriodes
            ? aParam.listePeriodes
            : this._getListePeriodesParDefaut(),
          dateCours: aParam.dateCours,
          avecEtatSaisie: aParam.avecEtatSaisie,
          optionsSelecFile: aParam.optionsSelecFile,
          modeLien: aParam.modeLien,
          surValiderAvantFermer: aParam.surValiderAvantFermer,
          validationAuto: aParam.validationAuto,
          contenuCourant: aParam.contenuCourant,
          tafCourant: aParam.tafCourant,
          avecThemes: aParam.avecThemes,
          modeFlat: aParam.modeFlat || false,
        });
      }
      setDonnees(aParametres) {
        super.setDonnees(
          $.extend(
            {
              genre: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
              avecFiltre: { date: false, classeMatiere: false },
              listePeriodes: null,
              dateCours: null,
              genreRessourceDocJoint:
                Enumere_Ressource_1.EGenreRessource.DocumentJoint,
            },
            aParametres,
          ),
        );
        const lAvecDate =
          this.parametres.avecFiltre &&
          this.parametres.avecFiltre.date &&
          this.parametres.genreRessourceDocJoint !==
            Enumere_Ressource_1.EGenreRessource.DocJointEtablissement;
        this.getInstance(this.IdentCombo).setVisible(lAvecDate);
        this.DateCours = this.parametres.dateCours
          ? ObjetDate_1.GDate.getJour(this.parametres.dateCours)
          : this.parametres.dateCours;
        const lAvecFiltres =
          lAvecDate ||
          (this.parametres.avecFiltre &&
            this.parametres.avecFiltre.classeMatiere);
        ObjetStyle_1.GStyle.setDisplay(
          this.ids.deploiementFiltres,
          lAvecFiltres,
        );
        ObjetStyle_1.GStyle.setDisplay(
          this.Nom + '_Filtre_1',
          lAvecFiltres && lAvecDate,
        );
        ObjetStyle_1.GStyle.setDisplay(
          this.Nom + '_Filtre_2',
          lAvecFiltres && this.parametres.avecFiltre.classeMatiere,
        );
        this.surFixerTaille();
        if (this.parametres.listePeriodes && this.parametres.dateCours) {
          this.parametres.listePeriodes.setLibelle(
            0,
            ObjetDate_1.GDate.formatDate(
              this.parametres.dateCours,
              ObjetChaine_1.GChaine.format(
                'le %s',
                ['%JJ %MMMM'],
              ),
            ),
          );
        }
        const lInstance = this.getInstance(this.IdentCombo);
        lInstance.setLabel(
          this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
            ? 'Uniquement les sites internet utilisés'
            : 'Uniquement les pièces jointes utilisées',
        );
        lInstance.setDonnees(
          this.parametres.listePeriodes,
          this.parametres.genreRessourceDocJoint !==
            Enumere_Ressource_1.EGenreRessource.DocJointEtablissement
            ? 1
            : undefined,
        );
      }
      _getDonneesListe() {
        let lDonneesListe =
          new DonneesListe_PieceJointe_1.DonneesListe_PieceJointe(
            this.ListePiecesJointes,
            this.parametres.avecEtatSaisie,
            this.Genre,
            this.parametres.genreRessourceDocJoint,
            this.parametres.modeLien,
            this.avecGestionLibelleSurLiens(),
          );
        return lDonneesListe.setOptions({
          avecEtatSaisie: this.parametres.avecEtatSaisie,
          optionsSelecFile: this.parametres.optionsSelecFile,
          listeFichiers: this.ListeFichiers,
          avecMultiSelection: this.parametres.modeLien,
          avecBordure: !IE.estMobile,
        });
      }
      _getDonneesListeFlat() {
        let lDonneesListe =
          new DonneesListe_PieceJointeFlat_1.DonneesListe_PieceJointeFlat(
            this.ListePiecesJointes,
            this.parametres.avecEtatSaisie,
            this.Genre,
            this.parametres.genreRessourceDocJoint,
            this.parametres.modeLien,
            this.avecGestionLibelleSurLiens(),
            this.parametres.callbacks,
          );
        return lDonneesListe.setOptions({});
      }
      composeContenu() {
        const T = [];
        T.push(
          `<div id="${this.Nom}_parent" class="flex-contain cols full-height">`,
        );
        if (this.optionsFenetre.avecDeploiementFiltres) {
          T.push(
            '  <div ie-node="nodeDeploiementFiltres" id="',
            this.ids.deploiementFiltres,
            '" class="filtres-header">',
          );
          T.push('    <i class="icon_chevron_down" role="presentation"></i>');
          T.push(
            '    <h3>',
            this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
              ? 'Rechercher parmi les sites Internet'
              : 'Rechercher parmi les documents',
            '</h3>',
          );
          T.push('  </div>');
        }
        T.push(
          `    <div class="filtres-content" id="${this.ids.zoneFiltres}" ${this.optionsFenetre.avecDeploiementFiltres ? ` style="display:none;"` : ``}>`,
        );
        T.push(
          `      <div class="field-contain" id="${this.Nom}_Filtre_1" ${this.parametres.avecFiltre && this.parametres.avecFiltre.date ? `` : `style="display:none"`}>\n                    <div id="${this.getNomInstance(this.IdentCombo)}"></div>\n                  </div>`,
        );
        T.push(
          `      <div class="field-contain" id="${this.Nom}_Filtre_2" ${this.parametres.avecFiltre && this.parametres.avecFiltre.classeMatiere ? `` : `style="display:none"`}>\n                    <ie-checkbox class="m-right-l" ie-model="checkFiltreMemeMatiere">${'Pour les cours de la même matière'}</ie-checkbox>\n                    <ie-checkbox ie-model="checkFiltreMemeClasseGroupe">${'Pour les cours de la même classe ou du même groupe'}</ie-checkbox>\n                  </div>`,
        );
        T.push(`    </div>`);
        T.push(
          `    <div class="listeFenetrePJ fluid-bloc" id="${this.getNomInstanceListe()}"></div>`,
        );
        T.push(
          `    <div class="listeFenetrePJ fluid-bloc" id="${this.getNomInstanceListeFlat()}" style="display:none;"></div>`,
        );
        T.push(`</div>`);
        return T.join('');
      }
      setDonneesListe() {
        if (this.objPJListe) {
          this.objPJListe.setDonnees(
            !!this.parametres.avecFiltre,
            this.PourMemeMatiere,
            this.PourMemeClasseEtGroupe,
            this.DateDeb,
            this.DateFin,
            this.DateCours,
          );
          super.setDonneesListe();
        }
      }
      _initialiserCombo(aInstance) {
        const lStr =
          this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
            ? 'Uniquement les sites internet utilisés'
            : 'Uniquement les pièces jointes utilisées';
        const lParam = { labelWAICellule: lStr };
        const lLabel = lStr;
        $.extend(
          lParam,
          IE.estMobile
            ? { libelleHaut: lLabel, longueur: 200 }
            : { texteEdit: lLabel, longueur: 150 },
        );
        aInstance.setOptionsObjetSaisie(lParam);
      }
      _getListePeriodesParDefaut() {
        const lListePeriodesParDefaut =
          new ObjetListeElements_1.ObjetListeElements();
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'Aujourd'hui',
            this.genrePeriodeFiltre.jourCourant,
            this.genrePeriodeFiltre.jourCourant,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'depuis 15 jours',
            this.genrePeriodeFiltre.demiMois,
            this.genrePeriodeFiltre.demiMois,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'depuis 1 mois',
            this.genrePeriodeFiltre.unMois,
            this.genrePeriodeFiltre.unMois,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'depuis 3 mois',
            this.genrePeriodeFiltre.troisMois,
            this.genrePeriodeFiltre.troisMois,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'depuis 6 mois',
            this.genrePeriodeFiltre.sixMois,
            this.genrePeriodeFiltre.sixMois,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'sur toute l'année',
            this.genrePeriodeFiltre.unAn,
            this.genrePeriodeFiltre.unAn,
          ),
        );
        return lListePeriodesParDefaut;
      }
      _evenementSurCombo(aParams) {
        if (
          aParams.genreEvenement ===
          Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie.selection
        ) {
          const LNbrMois = [0, 0.5, 1, 3, 6];
          if (aParams.indice === this.genrePeriodeFiltre.unAn) {
            this.DateDeb = GParametres.PremiereDate;
            this.DateFin = GParametres.DerniereDate;
          } else {
            const lDate = this.DateCours ? this.DateCours : new Date();
            this.DateDeb = new Date(
              lDate.getTime() -
                30 * (1000 * 60 * 60 * 24) * LNbrMois[aParams.indice],
            );
            this.DateFin = lDate;
          }
          this.setDonneesListe();
        }
      }
    }
    exports.ObjetFenetre_PieceJointe = ObjetFenetre_PieceJointe;
  },
  fn: 'objetfenetre_piecejointe.js',
});