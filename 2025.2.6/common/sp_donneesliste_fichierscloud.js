IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DonneesListe_FichiersCloud = exports.TradFichiersCloud = void 0;
    const Enumere_TriElement_1 = require('Enumere_TriElement');
    const ObjetTri_1 = require('ObjetTri');
    const TTypeElementCloud_1 = require('TTypeElementCloud');
    const TTypeElementCloud_2 = require('TTypeElementCloud');
    const Enumere_FormatDocJoint_1 = require('Enumere_FormatDocJoint');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetDonneesListeFlatDesign_1 = require('ObjetDonneesListeFlatDesign');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TradFichiersCloud = ObjetTraduction_1.TraductionsModule.getModule(
      'FichiersCloud',
      {
        TitreFichierCloud: '',
        TailleFichierCloud: '',
        PartagerFichierCloud: '',
        ChoisirRepertoire_FichierCloud: '',
        GlissezDeposer_Cloud: '',
        Deposer_Cloud: '',
        TitreFenetreFormat: '',
        ExplicationFenetreFormat: '',
        ConfirmationFenetreFormat: '',
        FormatOrigine: '',
        FormatPdf: '',
        FormatPublication: '',
        ActualisationRepertoire: '',
        SelectionnerRepertoire_S: '',
        Hint_Repertoire: '',
      },
    );
    exports.TradFichiersCloud = TradFichiersCloud;
    class DonneesListe_FichiersCloud extends ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign {
      constructor(aDonnees) {
        const lListe = new ObjetListeElements_1.ObjetListeElements().add(
          aDonnees || new ObjetListeElements_1.ObjetListeElements(),
        );
        super(lListe);
        this.setOptions({
          avecBoutonActionLigne: false,
          avecEvnt_Selection: true,
          repertoirePere: null,
          estMonoSelection: false,
          uniquementRepertoireVisible: false,
          avecSelectionRepertoire: true,
          avecFormat: false,
        });
      }
      getIconeGaucheContenuFormate(aParams) {
        if (
          aParams.article.getGenre() ===
          TTypeElementCloud_1.TTypeElementCloud.tec_Fichier
        ) {
          return Enumere_FormatDocJoint_1.EFormatDocJointUtil.getClassIconDeGenre(
            Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
              ObjetChaine_1.GChaine.extraireExtensionFichier(
                aParams.article.getLibelle(),
              ),
            ),
          );
        }
        return 'icon_folder_close';
      }
      getHintIconeGaucheContenuFormate(aParams) {
        if (
          aParams.article.getGenre() ===
          TTypeElementCloud_1.TTypeElementCloud.tec_Dossier
        ) {
          return TradFichiersCloud.Hint_Repertoire;
        }
        return '';
      }
      getZoneComplementaire(aParams) {
        if (
          aParams.article.getGenre() ===
          TTypeElementCloud_1.TTypeElementCloud.tec_Fichier
        ) {
          return ObjetChaine_1.GChaine.tailleOctetsToStr(
            aParams.article.taille,
          );
        }
        return '';
      }
      getAriaLabelZoneCellule(aParams, aZone) {
        if (
          aZone ===
          ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign
            .ZoneCelluleFlatDesign.zoneComplementaire
        ) {
          const lStr = this.getZoneComplementaire(aParams);
          if (lStr) {
            return `${TradFichiersCloud.TailleFichierCloud} : ${lStr}`;
          }
        }
        return ``;
      }
      getZoneMessage(aParams) {
        if (
          this.options.avecFormat &&
          aParams.article.getGenre() ===
            TTypeElementCloud_1.TTypeElementCloud.tec_Fichier
        ) {
          const lVal =
            aParams.article.formatPub ===
            TTypeElementCloud_2.TypeFormatPublication.FP_Natif
              ? TradFichiersCloud.FormatOrigine
              : aParams.article.formatPub ===
                  TTypeElementCloud_2.TypeFormatPublication.FP_Pdf
                ? TradFichiersCloud.FormatPdf
                : '-';
          return IE.jsx.str(
            'p',
            null,
            TradFichiersCloud.FormatPublication,
            ' : ',
            lVal,
          );
        }
        return '';
      }
      avecSelection(aParams) {
        return (
          aParams.article.getGenre() ===
          TTypeElementCloud_1.TTypeElementCloud.tec_Dossier
        );
      }
      avecCB(aParams) {
        if (
          aParams.article.getGenre() ===
          TTypeElementCloud_1.TTypeElementCloud.tec_Dossier
        ) {
          return !!this.options.avecSelectionRepertoire;
        }
        return true;
      }
      setValueCB(aParams, aValue) {
        if (aValue && this.options.estMonoSelection) {
          this.Donnees.parcourir((aArticle) => {
            if (aArticle.estCoche) {
              aArticle.estCoche = false;
            }
          });
        }
        aParams.article.estCoche = aValue;
      }
      getVisible(aArticle) {
        return this.options.uniquementRepertoireVisible
          ? aArticle.getGenre() ===
              TTypeElementCloud_1.TTypeElementCloud.tec_Dossier
          : true;
      }
      getTri() {
        return [
          ObjetTri_1.ObjetTri.init(
            'Genre',
            Enumere_TriElement_1.EGenreTriElement.Decroissant,
          ),
          ObjetTri_1.ObjetTri.init('Libelle'),
        ];
      }
    }
    exports.DonneesListe_FichiersCloud = DonneesListe_FichiersCloud;
  },
  fn: 'donneesliste_fichierscloud.js',
});