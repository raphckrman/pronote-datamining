IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_AjoutImagesMultiple = void 0;
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const UtilitaireSelecFile_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireSelecFile');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const UtilitaireTraitementImage_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireTraitementImage');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const UtilitaireDocumentCP_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireDocumentCP');
    const GlossaireSelecFile_1 = require('@cp/script/Communication/GlossaireSelecFile');
    require('@scolys/espace/css/ObjetFenetre_AjoutImagesMultiple.css');
    const UtilitaireDocument_1 = require('@scolys/espace/script/professeur/UtilitaireDocument');
    class ObjetFenetre_AjoutImagesMultiple extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.applicationSco = (0, AccessApp_1.getApp)();
        this.id = {
          ctnChips: GUID_1.GUID.getId(),
          ctnImagesPreview: GUID_1.GUID.getId(),
        };
        this.optionsImagesMultiple = { avecChipsPJ: false, avecPreview: true };
        this.maxSize = this.applicationSco.droits.get(
          ObjetDroitsPN_1.TypeDroits.tailleMaxDocJointEtablissement,
        );
        this.setOptionsFenetre({
          hauteurMaxContenu: 600,
          modale: true,
          titre: 'Envoyer un fichier',
          largeur: 380,
          hauteur: 200,
          fermerFenetreSurClicHorsFenetre: true,
          listeBoutons: [
            'Annuler',
            'Valider',
          ],
        });
      }
      async setDonnees(aListe) {
        const lEstValide = await this.verificationFichiersValide(aListe);
        if (!lEstValide) {
          return;
        }
        this.liste = aListe;
        this.afficher(this.composeContenu());
        this._updateAffichage();
      }
      async verificationFichiersValide(aListe) {
        if (!aListe) {
          return false;
        }
        const lListeLibelleFichierNonValidePourPDF = [];
        aListe.parcourir((aFichier) => {
          if (
            !UtilitaireDocument_1.UtilitaireDocument.estFichierValidePourPDF(
              aFichier,
            )
          ) {
            lListeLibelleFichierNonValidePourPDF.push(aFichier.getLibelle());
          }
        });
        if (lListeLibelleFichierNonValidePourPDF.length > 0) {
          const lMessage =
            lListeLibelleFichierNonValidePourPDF.length === 1
              ? GlossaireSelecFile_1.TradGlossaireSelecFile.echecImagePDF_S.format(
                  [lListeLibelleFichierNonValidePourPDF[0]],
                )
              : GlossaireSelecFile_1.TradGlossaireSelecFile.echecImagesPDF_S.format(
                  lListeLibelleFichierNonValidePourPDF.join(', '),
                );
          await this.applicationSco
            .getMessage()
            .afficher({ message: lMessage });
        }
        return lListeLibelleFichierNonValidePourPDF.length === 0;
      }
      jsxModelBoutonDeposerImage() {
        return {
          getOptionsSelecFile: () => {
            return {
              avecResizeImage: true,
              maxSize: this.maxSize,
              multiple: false,
              avecTransformationFlux: false,
              accept:
                UtilitaireTraitementImage_1.UtilitaireTraitementImage.getTabMimePDFImage().join(
                  ', ',
                ),
            };
          },
          addFiles: (aParams) => {
            if (aParams.listeFichiers && aParams.listeFichiers.count() > 0) {
              if (
                !UtilitaireDocumentCP_1.UtilitaireDocumentCP.estFichierValidePourPDF(
                  aParams.listeFichiers.get(0),
                )
              ) {
                this.applicationSco
                  .getMessage()
                  .afficher({
                    message: ObjetChaine_1.GChaine.format(
                      GlossaireSelecFile_1.TradGlossaireSelecFile
                        .echecImagePDF_S,
                      [aParams.listeFichiers.get(0).getLibelle() || ''],
                    ),
                  });
              } else {
                this._addFile(aParams);
              }
            }
          },
        };
      }
      jsxIfAvecChipsPJ() {
        return (
          this.optionsImagesMultiple && this.optionsImagesMultiple.avecChipsPJ
        );
      }
      jsxIfAvecPreview() {
        return (
          this.optionsImagesMultiple && this.optionsImagesMultiple.avecPreview
        );
      }
      composeContenu() {
        return IE.jsx.str(
          'div',
          { class: 'ObjetFenetre_AjoutImagesMultiple', style: 'height : 100%' },
          IE.jsx.str(
            IEHtml_Bouton_1.Bouton,
            {
              class: [
                Type_ThemeBouton_1.TypeThemeBouton.primaire,
                'btn-width',
                'm-top-l',
              ],
              ie_model: this.jsxModelBoutonDeposerImage.bind(this),
              ie_selecfile: true,
            },
            'Déposer une image',
          ),
          IE.jsx.str('div', {
            class: 'ctnChips',
            id: this.id.ctnChips,
            ie_if: this.jsxIfAvecChipsPJ.bind(this),
          }),
          IE.jsx.str('div', {
            class: [
              'flex-contain cols',
              'm-top-l',
              'flex-gap-l',
              'ctnImagesPreview',
            ],
            id: this.id.ctnImagesPreview,
            ie_if: this.jsxIfAvecPreview.bind(this),
          }),
        );
      }
      surValidation(aNumeroBouton) {
        if (aNumeroBouton === 1) {
          const lListeRetour = this.liste.getListeElements((aElement) =>
            aElement.existe(),
          );
          if (lListeRetour.count() > 0) {
            const lNomPDF =
              UtilitaireDocumentCP_1.UtilitaireDocumentCP.getNomPdfGenere();
            const lMessagesErreur = [];
            UtilitaireSelecFile_1.UtilitaireSelecFile.genererPdfAsync(
              lListeRetour,
              lMessagesErreur,
              lNomPDF,
              Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
            ).then(() => {
              const lListeFichiersAEnvoyer =
                UtilitaireSelecFile_1.UtilitaireSelecFile.controleTailleFichiers(
                  lListeRetour,
                  lMessagesErreur,
                  this.maxSize,
                );
              if (lMessagesErreur.length > 0) {
                return GApplication.getMessage().afficher({
                  message: lMessagesErreur.join('<br>'),
                });
              }
              const lFichierPdfGenere = lListeFichiersAEnvoyer.get(0);
              this.callback.appel(
                Enumere_Action_1.EGenreAction.Valider,
                lFichierPdfGenere,
              );
            });
          }
        }
        this.fermer();
      }
      jsxModelChipsFichier(aIndice) {
        return () => {
          return {
            eventBtn: () => {
              if (this.optionsImagesMultiple.avecChipsPJ) {
                this.liste.remove(aIndice);
                this._updateAffichage();
              }
            },
          };
        };
      }
      _updateAffichage() {
        if (this.optionsImagesMultiple.avecChipsPJ) {
          ObjetHtml_1.GHtml.setHtml(
            this.id.ctnChips,
            UtilitaireUrl_1.UtilitaireUrl.construireListeUrls(this.liste, {
              genreFiltre: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
              genreRessource:
                Enumere_Ressource_1.TypeHttpRessource
                  .HttpRessource_DocumentJoint,
              jsxModelChips: this.jsxModelChipsFichier.bind(this),
              class: 'icon_fichier_image',
            }),
            { instance: this },
          );
        }
        if (this.optionsImagesMultiple.avecPreview) {
          this._construireListeImage();
        }
      }
      _construireListeImage() {
        ObjetHtml_1.GHtml.setHtml(this.id.ctnImagesPreview, '');
        this.liste.parcourir((aImage, aIndex) => {
          if (URL && URL.createObjectURL) {
            const lURL = URL.createObjectURL(aImage.file);
            if (lURL && aImage.file) {
              const lId = `${this.Nom}_image_${aIndex}`;
              ObjetHtml_1.GHtml.addHtml(
                this.id.ctnImagesPreview,
                IE.jsx.str('img', {
                  id: lId,
                  src: lURL,
                  alt: aImage.getLibelle(),
                  'aria-hidden': 'true',
                }),
              );
              const lImg = $('#' + lId.escapeJQ());
              lImg.attr('src', lURL);
              lImg.on('destroyed', () => URL.revokeObjectURL(lURL));
            }
          }
        });
      }
      _addFile(aParams) {
        this.liste.add(aParams.listeFichiers);
        this._updateAffichage();
      }
    }
    exports.ObjetFenetre_AjoutImagesMultiple = ObjetFenetre_AjoutImagesMultiple;
  },
  fn: 'objetfenetre_ajoutimagesmultiple.js',
});