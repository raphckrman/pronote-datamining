IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireSelecFile = void 0;
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const UtilitaireTraitementImage_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireTraitementImage');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const GlossaireSelecFile_1 = require('@cp/script/Communication/GlossaireSelecFile');
    let uIdFichier = 0;
    const UtilitaireSelecFile = {
      C_MaxSize: 500 * 1024 * 1024,
      addFileDansListe(aFile, aListeFichiers, aGenrePJ) {
        const lElement = new ObjetElement_1.ObjetElement('', null, aGenrePJ);
        lElement.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
        let lLibelle = ObjetChaine_1.GChaine.enleverChemin(aFile.name);
        if (lLibelle && lLibelle.replace) {
          lLibelle = lLibelle.replace(/[:/\\*?"<>|]/g, '_');
        }
        if (lLibelle === 'image.jpg') {
          lLibelle = `image_${Date.now()}.jpg`;
        }
        lElement.Libelle = ObjetChaine_1.GChaine.ajouterEntites(lLibelle);
        lElement.nomOriginal = lLibelle;
        lElement.file = aFile;
        try {
          if (aFile.lastModified) {
            lElement.lastModified = aFile.lastModified;
          }
        } catch (error) {}
        uIdFichier += 1;
        lElement.idFichier = 'selecfile_' + uIdFichier + '_' + Date.now();
        aListeFichiers.addElement(lElement);
      },
      controleTailleFichiers(aListeFichiers, aMessagesErreur, aMaxSize) {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        aListeFichiers.parcourir((aFichier) => {
          if (
            aMaxSize > 0 &&
            !UtilitaireSelecFile.estFichierCloudPartage(aFichier) &&
            aFichier.file &&
            aFichier.file.size > aMaxSize
          ) {
            let lVal = Math.floor(aMaxSize / 1024);
            let lUnite = 'Ko';
            if (
              lVal > 1024 * 10 ||
              (lVal > 1024 && Math.floor(lVal / 1024) === lVal / 1024)
            ) {
              lVal = Math.floor(lVal / 1024);
              lUnite = 'Mo';
            }
            aMessagesErreur.push(
              ObjetChaine_1.GChaine.format('%s (%s)', [
                GlossaireSelecFile_1.TradGlossaireSelecFile.msgEchecTailleFichier.format(
                  [lVal, lUnite],
                ),
                aFichier.getLibelle(),
              ]),
            );
          } else {
            lListe.addElement(aFichier);
          }
        });
        return lListe;
      },
      estFichierCloudPartage(aFichier) {
        return !!(
          aFichier &&
          aFichier.idPartage &&
          aFichier.getGenre &&
          aFichier.getGenre() ===
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Cloud
        );
      },
      extraireListeFichiersCloudsPartage(aListeFichiers) {
        const lListeFichiersClouds =
          new ObjetListeElements_1.ObjetListeElements();
        if (aListeFichiers && aListeFichiers.parcourir) {
          const lTabFichiers = [...aListeFichiers.getTabListeElements()];
          lTabFichiers.forEach((aFichier, aIndex) => {
            if (UtilitaireSelecFile.estFichierCloudPartage(aFichier)) {
              lListeFichiersClouds.add(aFichier);
              aListeFichiers.remove(aIndex);
            }
          });
        }
        return lListeFichiersClouds;
      },
      genererPdfAsync(
        aListeFichiers,
        aMessagesErreur,
        aNomPDFaGenerer,
        aGenrePDF,
      ) {
        return UtilitaireTraitementImage_1.UtilitaireTraitementImage.genererPdfAsync(
          aListeFichiers,
        )
          .then((aParamPDF) => {
            aListeFichiers.vider();
            if (aParamPDF && aParamPDF.file) {
              if (aNomPDFaGenerer) {
                aParamPDF.file.name = aNomPDFaGenerer;
              }
              UtilitaireSelecFile.addFileDansListe(
                aParamPDF.file,
                aListeFichiers,
                aGenrePDF,
              );
            }
          })
          .catch((aParamsReject) => {
            aListeFichiers.vider();
            if (aMessagesErreur.length > 0) {
              aMessagesErreur.push('');
            }
            aMessagesErreur.push(
              ObjetChaine_1.GChaine.format(
                GlossaireSelecFile_1.TradGlossaireSelecFile.echecImagePDF_S,
                [(aParamsReject ? aParamsReject.nom : '') || ''],
              ),
            );
          });
      },
    };
    exports.UtilitaireSelecFile = UtilitaireSelecFile;
  },
  fn: 'utilitaireselecfile.js',
});