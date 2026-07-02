IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireDocumentCP = void 0;
    const Enumere_FormatDocJoint_1 = require('@cp/Produit/Script/Enumere/Enumere_FormatDocJoint');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const UtilitaireTraitementImage_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireTraitementImage');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const TradUtilitaireDocumentCP =
      ObjetTraduction_1.TraductionsModule.getModule('UtilitaireDocumentCP', {
        FichierTexte: '',
        FichierPDF: '',
        FichierExcel: '',
        FichierArchive: '',
        FichierImage: '',
        FichierSon: '',
        FichierVideo: '',
        FichierDiaporama: '',
        Fichier: '',
      });
    class UtilitaireDocumentCP {
      static getIconFromFileName(aNomFichier) {
        let lIcon = '';
        if (aNomFichier) {
          const lSuffixe =
            ObjetChaine_1.GChaine.extraireExtensionFichier(aNomFichier);
          lIcon = Enumere_FormatDocJoint_1.EFormatDocJointUtil.getIconDeGenre(
            Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
              lSuffixe,
            ),
            {
              ie_tooltiplabel:
                UtilitaireDocumentCP.getTitleFromFileName(aNomFichier),
            },
          );
        }
        return lIcon;
      }
      static ouvrirUrl(aDocument, aParams = {}) {
        const lParams = Object.assign({ forcerURLComplete: true }, aParams);
        const lUrl = ObjetChaine_1.GChaine.creerUrlBruteLienExterne(
          aDocument,
          lParams,
        );
        window.open(lUrl);
      }
      static getIconPDF() {
        return Enumere_FormatDocJoint_1.EFormatDocJointUtil.getIconDeGenre(
          Enumere_FormatDocJoint_1.EFormatDocJoint.Pdf,
          {
            ie_tooltiplabel: UtilitaireDocumentCP.getTitleFromGenre(
              Enumere_FormatDocJoint_1.EFormatDocJoint.Pdf,
            ),
          },
        );
      }
      static getNomPdfGenere() {
        let lNomPDF;
        lNomPDF =
          GEtatUtilisateur.getMembre().getLibelle() +
          '_' +
          ObjetDate_1.GDate.formatDate(
            ObjetDate_1.GDate.getDateHeureCourante(),
            '%JJ%MM%AAAA_%hh%mm%ss',
          ) +
          '.pdf';
        if (!!lNomPDF) {
          lNomPDF = lNomPDF.replace(/ /g, '');
        }
        if (!lNomPDF) {
          lNomPDF =
            ObjetDate_1.GDate.formatDate(
              ObjetDate_1.GDate.getDateHeureCourante(),
              '%JJ%MM%AAAA_%hh%mm%ss',
            ) + '.pdf';
        }
        return lNomPDF;
      }
      static estFichierValidePourPDF(aFichier) {
        return !!(
          aFichier &&
          aFichier.file &&
          aFichier.file.type &&
          UtilitaireTraitementImage_1.UtilitaireTraitementImage.getTabMimePDFImage().includes(
            aFichier.file.type,
          )
        );
      }
      static getTitleFromGenre(aGenre) {
        switch (aGenre) {
          case Enumere_FormatDocJoint_1.EFormatDocJoint.Texte:
            return TradUtilitaireDocumentCP.FichierTexte;
          case Enumere_FormatDocJoint_1.EFormatDocJoint.Pdf:
            return TradUtilitaireDocumentCP.FichierPDF;
          case Enumere_FormatDocJoint_1.EFormatDocJoint.Excel:
            return TradUtilitaireDocumentCP.FichierExcel;
          case Enumere_FormatDocJoint_1.EFormatDocJoint.Archive:
            return TradUtilitaireDocumentCP.FichierArchive;
          case Enumere_FormatDocJoint_1.EFormatDocJoint.Image:
            return TradUtilitaireDocumentCP.FichierImage;
          case Enumere_FormatDocJoint_1.EFormatDocJoint.Son:
            return TradUtilitaireDocumentCP.FichierSon;
          case Enumere_FormatDocJoint_1.EFormatDocJoint.Video:
            return TradUtilitaireDocumentCP.FichierVideo;
          case Enumere_FormatDocJoint_1.EFormatDocJoint.Diapo:
            return TradUtilitaireDocumentCP.FichierDiaporama;
          case Enumere_FormatDocJoint_1.EFormatDocJoint.Geogebra:
            return TradUtilitaireDocumentCP.Fichier;
          default:
            return TradUtilitaireDocumentCP.Fichier;
        }
      }
      static getTitleFromFileName(aNomFichier) {
        if (!aNomFichier) {
          return '';
        }
        const lSuffixe =
          ObjetChaine_1.GChaine.extraireExtensionFichier(aNomFichier);
        const lGenre =
          Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
            lSuffixe,
          );
        return UtilitaireDocumentCP.getTitleFromGenre(lGenre);
      }
    }
    exports.UtilitaireDocumentCP = UtilitaireDocumentCP;
  },
  fn: 'utilitairedocumentcp.js',
});