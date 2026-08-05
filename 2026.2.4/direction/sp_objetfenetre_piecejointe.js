IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_PieceJointe = void 0;
    const DonneesListe_PieceJointe_1 = require('@scolys/produit/script/donneesliste/DonneesListe_PieceJointe');
    const ObjetFenetre_PieceJointeCP_1 = require('@cp/Produit/Script/ObjetFenetre_PieceJointeCP');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    class ObjetFenetre_PieceJointe extends ObjetFenetre_PieceJointeCP_1.ObjetFenetre_PieceJointeCP {
      constructor() {
        super(...arguments);
        this.parametresSco = (0, AccessApp_1.getApp)().getObjetParametres();
        this.PourMemeMatiere = false;
        this.PourMemeClasseEtGroupe = false;
        this.afficherProgression = false;
        this.DateDeb = this.parametresSco.PremiereDate;
        this.DateFin = this.parametresSco.DerniereDate;
      }
      avecGestionLibelleSurLiens() {
        return this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url;
      }
      afficherFenetrePJ(aParam) {
        this._setDocumentsJointsActifs(
          aParam.listePJTot,
          aParam.listePJContexte,
        );
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
        });
      }
      setDonnees(aParametres) {
        this.DateCours = aParametres.dateCours
          ? ObjetDate_1.GDate.getJour(aParametres.dateCours)
          : aParametres.dateCours;
        super.setDonnees(
          $.extend(
            {
              genre: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
              avecFiltre: {
                date: false,
                classeMatiere: false,
                afficherProgression: false,
              },
              listePeriodes: null,
              dateCours: null,
              genreRessourceDocJoint:
                Enumere_Ressource_1.TypeHttpRessource
                  .HttpRessource_DocumentJoint,
            },
            aParametres,
          ),
        );
        const lAvecDate =
          this.parametres.avecFiltre &&
          this.parametres.avecFiltre.date &&
          this.parametres.genreRessourceDocJoint !==
            Enumere_Ressource_1.TypeHttpRessource
              .HttpRessource_DocJointEtablissement;
        const lAvecFiltres =
          lAvecDate ||
          (this.parametres.avecFiltre &&
            (this.parametres.avecFiltre.classeMatiere ||
              this.parametres.avecFiltre.afficherProgression));
        if (lAvecFiltres) {
          this.getInstance(this.identListe).setOptionsListe(
            {
              boutons: [
                { genre: ObjetListe_1.ObjetListe.typeBouton.filtrer },
                { genre: ObjetListe_1.ObjetListe.typeBouton.rechercher },
              ],
            },
            true,
          );
        }
        this.surFixerTaille();
      }
      getDonneesListe() {
        let lDonneesListe =
          new DonneesListe_PieceJointe_1.DonneesListe_PieceJointe(
            this.ListePiecesJointes,
            this.Genre,
            this.parametres.genreRessourceDocJoint,
            this.avecGestionLibelleSurLiens(),
            this.parametres.callbacks,
          );
        return lDonneesListe.setOptions({
          optionsSelecFile: this.parametres.optionsSelecFile,
          avecCB: !this.parametres.modeLien,
          avecCocheCBSurLigne: !this.parametres.modeLien,
          avecSelection: this.parametres.modeLien,
        });
      }
      setDonneesListe() {
        if (this.objPJListe) {
          if (
            this.parametres.genreRessourceDocJoint !==
            Enumere_Ressource_1.TypeHttpRessource
              .HttpRessource_DocJointEtablissement
          ) {
            const lValeurParDefautFiltreDate =
              DonneesListe_PieceJointe_1.DonneesListe_PieceJointe
                .genrePeriodeFiltre.demiMois;
            const LNbrMois = [0, 0.5, 1, 3, 6];
            const lDate = this.DateCours ? this.DateCours : new Date();
            this.DateDeb = new Date(
              lDate.getTime() -
                30 *
                  (1000 * 60 * 60 * 24) *
                  LNbrMois[lValeurParDefautFiltreDate],
            );
          }
          this.objPJListe.setDonnees({
            options: {
              avecFiltre: this.parametres.avecFiltre,
              avecThemes: this.parametres.avecThemes,
              avecBoutonActualiser: this.optionsFenetre.avecBoutonActualiser,
            },
            donneesFiltre: {
              listePeriodes: this.parametres.listePeriodes,
              pourMemeMatiere: this.PourMemeMatiere,
              pourMemeClasseEtGroupe: this.PourMemeClasseEtGroupe,
              afficherProgression: this.afficherProgression,
              date: {
                dateDebut: this.DateDeb,
                dateFin: this.DateFin,
                dateCours: this.DateCours,
              },
            },
          });
          super.setDonneesListe();
        }
      }
      _getListePeriodesParDefaut() {
        const lListePeriodesParDefaut =
          new ObjetListeElements_1.ObjetListeElements();
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'Aujourd'hui',
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.jourCourant,
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.jourCourant,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'depuis 15 jours',
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.demiMois,
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.demiMois,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'depuis 1 mois',
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.unMois,
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.unMois,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'depuis 3 mois',
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.troisMois,
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.troisMois,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'depuis 6 mois',
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.sixMois,
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.sixMois,
          ),
        );
        lListePeriodesParDefaut.addElement(
          new ObjetElement_1.ObjetElement(
            'sur toute l'année',
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.unAn,
            DonneesListe_PieceJointe_1.DonneesListe_PieceJointe.genrePeriodeFiltre.unAn,
          ),
        );
        return lListePeriodesParDefaut;
      }
    }
    exports.ObjetFenetre_PieceJointe = ObjetFenetre_PieceJointe;
  },
  fn: 'objetfenetre_piecejointe.js',
});