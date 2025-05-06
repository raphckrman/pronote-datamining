IE.fModule({
  f: function (exports, require, module, global) {
    const { DonneesListe_PieceJointe } = require('DonneesListe_PieceJointe.js');
    const {
      DonneesListe_PieceJointeFlat,
    } = require('DonneesListe_PieceJointeFlat.js');
    const {
      ObjetFenetre_PieceJointeCP,
    } = require('ObjetFenetre_PieceJointeCP.js');
    const { GChaine } = require('ObjetChaine.js');
    const { GStyle } = require('ObjetStyle.js');
    const { EGenreDocumentJoint } = require('Enumere_DocumentJoint.js');
    const {
      EGenreEvenementObjetSaisie,
    } = require('Enumere_EvenementObjetSaisie.js');
    const { GDate } = require('ObjetDate.js');
    const { ObjetElement } = require('ObjetElement.js');
    const { ObjetListeElements } = require('ObjetListeElements.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { EGenreRessource } = require('Enumere_Ressource.js');
    const { ObjetSaisiePN } = require('ObjetSaisiePN.js');
    const { GUID } = require('GUID.js');
    class ObjetFenetre_PieceJointe extends ObjetFenetre_PieceJointeCP {
      constructor(...aParams) {
        super(...aParams);
        this.ids = {
          deploiementFiltres: GUID.getId(),
          zoneFiltres: GUID.getId(),
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
        return $.extend(true, super.getControleur(this), {
          btnMaj: {
            getDisabled: function () {
              if (aInstance.estModeFlat()) {
                return true;
              }
              const lListe = aInstance.getListeEltsSelect();
              return (
                lListe.count() !== 1 ||
                !DonneesListe_PieceJointe.suppressionAutoriseePJ(
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
                  !DonneesListe_PieceJointe.suppressionAutoriseePJ(
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
                  $('#' + this.ids.zoneFiltres.escapeJQ()).css('display') !==
                  'none';
                if (lEstDeploye) {
                  $('#' + this.ids.zoneFiltres.escapeJQ()).css(
                    'display',
                    'none',
                  );
                  $('#' + this.ids.deploiementFiltres.escapeJQ())
                    .children()
                    .first()
                    .removeClass('icon_chevron_up')
                    .addClass('icon_chevron_down');
                } else {
                  $('#' + this.ids.zoneFiltres.escapeJQ()).css('display', '');
                  $('#' + this.ids.deploiementFiltres.escapeJQ())
                    .children()
                    .first()
                    .removeClass('icon_chevron_down')
                    .addClass('icon_chevron_up');
                }
              }.bind(aInstance),
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
        return this.Genre === EGenreDocumentJoint.Url;
      }
      construireInstances(...aParams) {
        super.construireInstances(...aParams);
        this.IdentCombo = this.add(
          ObjetSaisiePN,
          _EvenementSurCombo,
          _InitialiserCombo,
        );
      }
      setOptions(aOptions) {
        this.setOptionsFenetre(aOptions);
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
            : _getListePeriodesParDefaut.call(this),
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
              genre: EGenreDocumentJoint.Fichier,
              avecFiltre: { date: false, classeMatiere: false },
              listePeriodes: null,
              dateCours: null,
              genreRessourceDocJoint: EGenreRessource.DocumentJoint,
            },
            aParametres,
          ),
        );
        const lAvecDate =
          this.parametres.avecFiltre &&
          this.parametres.avecFiltre.date &&
          this.parametres.genreRessourceDocJoint !==
            EGenreRessource.DocJointEtablissement;
        this.getInstance(this.IdentCombo).setVisible(lAvecDate);
        this.DateCours = this.parametres.dateCours
          ? GDate.getJour(this.parametres.dateCours)
          : this.parametres.dateCours;
        const lAvecFiltres =
          lAvecDate ||
          (this.parametres.avecFiltre &&
            this.parametres.avecFiltre.classeMatiere);
        GStyle.setDisplay(this.ids.deploiementFiltres, lAvecFiltres);
        GStyle.setDisplay(this.Nom + '_Filtre_1', lAvecFiltres && lAvecDate);
        GStyle.setDisplay(
          this.Nom + '_Filtre_2',
          lAvecFiltres && this.parametres.avecFiltre.classeMatiere,
        );
        this.surFixerTaille();
        if (this.parametres.listePeriodes && this.parametres.dateCours) {
          this.parametres.listePeriodes.setLibelle(
            0,
            GDate.formatDate(
              this.parametres.dateCours,
              GChaine.format(GTraductions.getValeur('fenetrePJ.le'), [
                '%JJ %MMMM',
              ]),
            ),
          );
        }
        const lInstance = this.getInstance(this.IdentCombo);
        lInstance.setLabel(
          this.Genre === EGenreDocumentJoint.Url
            ? GTraductions.getValeur(
                'fenetrePJ.filtre.uniquementLiensUtilisees',
              )
            : GTraductions.getValeur('fenetrePJ.filtre.uniquementPJUtilisees'),
        );
        lInstance.setDonnees(
          this.parametres.listePeriodes,
          this.parametres.genreRessourceDocJoint !==
            EGenreRessource.DocJointEtablissement
            ? 1
            : undefined,
        );
      }
      _getDonneesListe() {
        let lDonneesListe = new DonneesListe_PieceJointe(
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
        let lDonneesListe = new DonneesListe_PieceJointeFlat(
          this.ListePiecesJointes,
          this.parametres.avecEtatSaisie,
          this.Genre,
          this.parametres.genreRessourceDocJoint,
          this.parametres.modeLien,
          this.avecGestionLibelleSurLiens(),
          this.parametres.callbacks,
        );
        return lDonneesListe.setOptions({
          avecEtatSaisie: this.parametres.avecEtatSaisie,
          optionsSelecFile: this.parametres.optionsSelecFile,
          listeFichiers: this.ListeFichiers,
          avecMultiSelection: this.parametres.modeLien,
          avecBordure: !IE.estMobile,
        });
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
          T.push('    <i class="icon_chevron_down"></i>');
          T.push(
            '    <h3>',
            this.Genre === EGenreDocumentJoint.Url
              ? GTraductions.getValeur('fenetrePJ.filtre.titreRechercheSites')
              : GTraductions.getValeur('fenetrePJ.filtre.titreRecherchePJ'),
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
          `      <div class="field-contain" id="${this.Nom}_Filtre_2" ${this.parametres.avecFiltre && this.parametres.avecFiltre.classeMatiere ? `` : `style="display:none"`}>\n                    <ie-checkbox class="m-right-l" ie-model="checkFiltreMemeMatiere">${GTraductions.getValeur('fenetrePJ.filtre.memeMatiere')}</ie-checkbox>\n                    <ie-checkbox ie-model="checkFiltreMemeClasseGroupe">${GTraductions.getValeur('fenetrePJ.filtre.memeClasseGpe')}</ie-checkbox>\n                  </div>`,
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
            this.parametres.avecFiltre,
            this.PourMemeMatiere,
            this.PourMemeClasseEtGroupe,
            this.DateDeb,
            this.DateFin,
            this.DateCours,
          );
          super.setDonneesListe();
        }
      }
    }
    function _InitialiserCombo(aInstance) {
      const lStr =
        this.Genre === EGenreDocumentJoint.Url
          ? GTraductions.getValeur('fenetrePJ.filtre.uniquementLiensUtilisees')
          : GTraductions.getValeur('fenetrePJ.filtre.uniquementPJUtilisees');
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
    function _getListePeriodesParDefaut() {
      const lListePeriodesParDefaut = new ObjetListeElements();
      lListePeriodesParDefaut.addElement(
        new ObjetElement(
          GTraductions.getValeur('fenetrePJ.filtre.today'),
          this.genrePeriodeFiltre.jourCourant,
          this.genrePeriodeFiltre.jourCourant,
        ),
      );
      lListePeriodesParDefaut.addElement(
        new ObjetElement(
          GTraductions.getValeur('fenetrePJ.filtre.15jours'),
          this.genrePeriodeFiltre.demiMois,
          this.genrePeriodeFiltre.demiMois,
        ),
      );
      lListePeriodesParDefaut.addElement(
        new ObjetElement(
          GTraductions.getValeur('fenetrePJ.filtre.1mois'),
          this.genrePeriodeFiltre.unMois,
          this.genrePeriodeFiltre.unMois,
        ),
      );
      lListePeriodesParDefaut.addElement(
        new ObjetElement(
          GTraductions.getValeur('fenetrePJ.filtre.3mois'),
          this.genrePeriodeFiltre.troisMois,
          this.genrePeriodeFiltre.troisMois,
        ),
      );
      lListePeriodesParDefaut.addElement(
        new ObjetElement(
          GTraductions.getValeur('fenetrePJ.filtre.6mois'),
          this.genrePeriodeFiltre.sixMois,
          this.genrePeriodeFiltre.sixMois,
        ),
      );
      lListePeriodesParDefaut.addElement(
        new ObjetElement(
          GTraductions.getValeur('fenetrePJ.filtre.12mois'),
          this.genrePeriodeFiltre.unAn,
          this.genrePeriodeFiltre.unAn,
        ),
      );
      return lListePeriodesParDefaut;
    }
    function _EvenementSurCombo(aParams) {
      if (aParams.genreEvenement === EGenreEvenementObjetSaisie.selection) {
        const LNbrMois = [0, 0.5, 1, 3, 6];
        if (aParams.indice === this.genrePeriodeFiltre.unAn) {
          this.DateDeb = GParametres.PremiereDate;
          this.DateFin = GParametres.DerniereDate;
        } else {
          const lDate = this.DateCours ? this.DateCours : new Date();
          this.DateDeb = new Date(
            lDate - 30 * (1000 * 60 * 60 * 24) * LNbrMois[aParams.indice],
          );
          this.DateFin = lDate;
        }
        this.setDonneesListe();
      }
    }
    module.exports = ObjetFenetre_PieceJointe;
  },
  fn: 'objetfenetre_piecejointe.js',
});