IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_PieceJointeCP = exports.DonneesListe_PieceJointeCP =
      void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const Enumere_EvenementListe_1 = require('@cp/script/Enumere/Enumere_EvenementListe');
    require('@cp/Produit/Script/IEHtml.SelecFile');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const ObjetFenetre_EditionUrl_1 = require('@cp/Espace/Script/Fenetres/ObjetFenetre_EditionUrl');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetDonneesListeFlatDesign_1 = require('@cp/script/ObjetDonneesListeFlatDesign');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    const GlossaireSelecFile_1 = require('@cp/script/Communication/GlossaireSelecFile');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const IconeSvgDownload_alt_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDownload_alt');
    const IconeSvgRefresh_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgRefresh');
    const IconeSvgTrash_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTrash');
    const IconeSvgPencil_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPencil');
    class DonneesListe_PieceJointeCP extends ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign {
      constructor(
        aDonnees,
        aGenre,
        aGenreRessourceDocJoint,
        aAvecGestionLibelleSurLiens,
        aCallbacks,
      ) {
        super(aDonnees);
        this.Genre = aGenre;
        this.genreRessourceDocJoint = aGenreRessourceDocJoint;
        this.avecGestionLibelleSurLiens = aAvecGestionLibelleSurLiens;
        this.callbacks = aCallbacks;
        this.setOptions({
          avecCB: true,
          avecCocheCBSurLigne: true,
          avecEvnt_Creation: true,
          avecSelection: false,
          avecBoutonActionLigne: true,
        });
      }
      getValueCB(aParams) {
        return aParams.article ? !!aParams.article.Actif : false;
      }
      setValueCB(aParams, aValue) {
        aParams.article.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        aParams.article.Actif = aValue;
      }
      getInfosSuppZonePrincipale(aParams) {
        return aParams.article.descriptif || '';
      }
      setDonnees(aDonnees) {
        this.setOptions(aDonnees.options);
      }
      getTri() {
        return [ObjetTri_1.ObjetTri.init('Libelle')];
      }
      getVisible(D) {
        let lEstDuGenre = true;
        if (D.estDuGenre !== undefined) {
          lEstDuGenre = D.estDuGenre;
        }
        return (
          D.getGenre() === this.Genre &&
          lEstDuGenre &&
          (D.getEtat() === Enumere_Etat_1.EGenreEtat.Creation ||
            D.existeNumero())
        );
      }
      avecSelecFile(aParams) {
        return (
          !!aParams.surCreation &&
          this.Genre !== Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
        );
      }
      getOptionsSelecFile() {
        return Object.assign({ multiple: true }, this.options.optionsSelecFile);
      }
      evenementSurSelecFile(aParams, aParamsSelecFile) {
        this.callbacks.ajouterDocumentSurSelecFile(
          aParamsSelecFile.listeFichiers,
        );
      }
      editionAutorisee(aParams) {
        return this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url;
      }
      suppressionAutoriseePJ(aPJ, aGenreRessource) {
        return this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url;
      }
      remplirMenuContextuel(aParams) {
        const lMenu = aParams.menuContextuel;
        const lArticle = aParams.article;
        lMenu.add(
          GlossaireCP_1.TradGlossaireCP.Modifier,
          this.editionAutorisee(aParams),
          () => {
            if (
              this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
            ) {
              this.callbacks.editerSiteWeb({
                estCreation: false,
                data: lArticle,
              });
            } else {
              this.callbacks.editerDocument(lArticle);
            }
          },
          { iconeSvg: IE.jsx.str(IconeSvgPencil_1.IconeSvgPencil, null) },
        );
        if (this.Genre !== Enumere_DocumentJoint_1.EGenreDocumentJoint.Url) {
          lMenu.add(
            'Télécharger',
            lArticle.getEtat() !== Enumere_Etat_1.EGenreEtat.Creation,
            () => {
              window.open(
                ObjetChaine_1.GChaine.creerUrlBruteLienExterne(lArticle, {
                  genreRessource: this.genreRessourceDocJoint,
                }),
              );
            },
            {
              iconeSvg: IE.jsx.str(
                IconeSvgDownload_alt_1.IconeSvgDownload_alt,
                null,
              ),
            },
          );
          if (this.options.avecBoutonActualiser) {
            lMenu.add(
              'Mettre à jour',
              lArticle.getEtat() !== Enumere_Etat_1.EGenreEtat.Creation,
              () => {},
              {
                iconeSvg: IE.jsx.str(IconeSvgRefresh_1.IconeSvgRefresh, null),
                estSelecFile: true,
                getOptionsSelecFile: () => {
                  if (
                    !!this.options.avecFiltreExtensionSurRemplacer &&
                    lArticle
                  ) {
                    const lExt = ObjetChaine_1.GChaine.extraireExtensionFichier(
                      lArticle.getLibelle(),
                    );
                    if (!!lExt) {
                      Object.assign(this.options.optionsSelecFile, {
                        accept: '.' + lExt,
                        extensions: [lExt],
                      });
                    }
                  }
                  return this.options.optionsSelecFile;
                },
                addFiles: (aParametresInput) => {
                  this.callbacks.majDocument(
                    lArticle,
                    aParametresInput.eltFichier,
                  );
                },
              },
            );
          }
        }
        lMenu.add(
          GlossaireCP_1.TradGlossaireCP.Supprimer,
          this.suppressionAutoriseePJ(lArticle, this.genreRessourceDocJoint),
          () => {
            this.callbacks.supprimerPJ({ data: lArticle });
          },
          { iconeSvg: IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null) },
        );
        return true;
      }
    }
    exports.DonneesListe_PieceJointeCP = DonneesListe_PieceJointeCP;
    class ObjetFenetre_PieceJointeCP extends ObjetFenetre_1.ObjetFenetre {
      constructor(aParams) {
        super(aParams);
        this.ListePiecesJointes = new ObjetListeElements_1.ObjetListeElements();
        this.ListeFichiers = new ObjetListeElements_1.ObjetListeElements();
        this.parametres = {};
        this.listeBoutons = [
          'Fermer',
        ];
        this.listeBoutonsModeLien = [
          'Valider',
        ];
        this.setOptionsFenetre({
          hauteur: 500,
          largeur: 450,
          listeBoutons: this.listeBoutons,
          avecBoutonActualiser: true,
        });
      }
      construireInstances() {
        this.identListe = this.add(ObjetListe_1.ObjetListe, this.evntSurListe);
      }
      avecGestionLibelleSurLiens() {
        return false;
      }
      initListe(aInstance) {
        aInstance.setOptionsListe(
          {
            skin: ObjetListe_1.ObjetListe.skin.flatDesign,
            nonEditableSurModeExclusif: true,
            nonEditable: false,
            avecCelluleEditableTriangle: false,
            avecBoutonCreation: true,
            boutons: [{ genre: ObjetListe_1.ObjetListe.typeBouton.rechercher }],
            messageContenuVide:
              this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
                ? 'Aucun site internet'
                : 'Aucun document',
            ariaLabel: () => this._getTitreFenetre(),
          },
          true,
        );
      }
      getEltLien() {
        return this.getInstance(this.identListe).getElementSelection();
      }
      getLien() {
        let lEltLien = this.getEltLien();
        let lLien = '';
        if (lEltLien !== null && lEltLien !== undefined) {
          lLien = ObjetChaine_1.GChaine.creerUrlBruteLienExterne(lEltLien);
        }
        return lLien;
      }
      _setDocumentsJointsActifs(aListePJTotal, aListePJContexte) {
        if (aListePJTotal) {
          aListePJTotal.parcourir((aPJDeListeTotale) => {
            let lExisteDansContexte = false;
            if (aListePJContexte) {
              lExisteDansContexte = !!(aListePJContexte === null ||
              aListePJContexte === void 0
                ? void 0
                : aListePJContexte.getElementParNumero(
                    aPJDeListeTotale.getNumero(),
                  ));
            }
            aPJDeListeTotale.setActif(lExisteDansContexte);
          });
        }
      }
      afficherFenetrePJ(aParam) {
        this.listePJContexte = aParam.listePJContexte;
        this._setDocumentsJointsActifs(
          aParam.listePJTot,
          aParam.listePJContexte,
        );
        this.setDonnees({
          listePiecesJointes: aParam.listePJTot,
          genre: aParam.genrePJ,
          genreRessourceDocJoint: aParam.genreRessourcePJ,
          avecInActifVisible: aParam.avecInActifVisible,
          avecEtatSaisie: aParam.avecEtatSaisie,
          optionsSelecFile: Object.assign(aParam.optionsSelecFile || {}, {
            avecTransformationFlux_versCloud: false,
          }),
          modeLien: aParam.modeLien,
          surValiderAvantFermer: aParam.surValiderAvantFermer,
          validationAuto: aParam.validationAuto,
          contenuCourant: aParam.contenuCourant,
          tafCourant: aParam.tafCourant,
          avecThemes: aParam.avecThemes,
        });
      }
      ajouterPiecesJointesAvecAppelCallback(
        aListeNouveauxFichiers,
        aGenreDocJoint,
        aListePJTotale,
        aListePJContexte,
        aAvecCallback = true,
      ) {
        var _a;
        if (aListeNouveauxFichiers) {
          let lControleAjoutDoc;
          if (
            aGenreDocJoint === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
          ) {
            lControleAjoutDoc = { succes: true };
          } else {
            lControleAjoutDoc = this.controlerFichiersSelectionnes(
              aListeNouveauxFichiers,
              aListePJTotale,
            );
          }
          if (lControleAjoutDoc.succes) {
            this._setDocumentsJointsActifs(aListePJTotale, aListePJContexte);
            aListeNouveauxFichiers.parcourir((aNouveauFichier) => {
              this._ajouterPieceJointeAvecAppelCallback(
                aNouveauFichier,
                aGenreDocJoint,
                aListePJTotale,
              );
            });
            if (
              !!this.parametres.validationAuto &&
              this.ListePiecesJointes.existeElementPourValidation()
            ) {
              this.parametres.validationAuto();
            }
            if (aAvecCallback) {
              this.callback.appel();
            }
          } else {
            (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
                message:
                  (_a = lControleAjoutDoc.msg) !== null && _a !== void 0
                    ? _a
                    : '',
              });
          }
        }
      }
      _ajouterPieceJointeAvecAppelCallback(
        aEltFichier,
        aGenreDocJoint,
        aListePJTotale,
      ) {
        this.ListeFichiers.addElement(aEltFichier);
        aEltFichier.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        const lNouveauDocJoint = new ObjetElement_1.ObjetElement(
          aEltFichier.getLibelle(),
        );
        lNouveauDocJoint.Genre = aGenreDocJoint;
        lNouveauDocJoint.url = aEltFichier.url || lNouveauDocJoint.getLibelle();
        lNouveauDocJoint.Fichier = aEltFichier;
        lNouveauDocJoint.idFichier = aEltFichier.idFichier;
        lNouveauDocJoint.nomOriginal = aEltFichier.nomOriginal;
        lNouveauDocJoint.file = aEltFichier.file;
        lNouveauDocJoint.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        aListePJTotale.addElement(lNouveauDocJoint);
      }
      controlerFichiersSelectionnes(aListeFichiersAControler, aListePJTotale) {
        const lResultControle = { succes: true, msg: '' };
        if (aListeFichiersAControler && aListeFichiersAControler.count() > 0) {
          aListeFichiersAControler.parcourir((aFichierAControler) => {
            if (
              this._isLibelleFichierExiste(
                aListePJTotale,
                aFichierAControler.getLibelle(),
              )
            ) {
              lResultControle.succes = false;
              lResultControle.msg =
                GlossaireSelecFile_1.TradGlossaireSelecFile.msgEchecLibelleFichierAvecInfo;
            }
            if (!lResultControle.succes) {
              return false;
            }
          });
        }
        return lResultControle;
      }
      _isLibelleFichierExiste(aListeFichiers, aNomFichier) {
        let lExisteFichier = false;
        if (aListeFichiers && aListeFichiers.count() > 0 && aNomFichier) {
          aListeFichiers.parcourir((aFichier) => {
            if (aFichier.existe()) {
              const lLibelleFichier = aFichier.getLibelle();
              if (
                lLibelleFichier &&
                lLibelleFichier.toLowerCase &&
                aNomFichier.toLowerCase
              ) {
                if (
                  lLibelleFichier.trim().toLowerCase() ===
                  aNomFichier.trim().toLowerCase()
                ) {
                  lExisteFichier = true;
                  return false;
                }
              }
            }
          });
        }
        return lExisteFichier;
      }
      setDonnees(aParametres) {
        this.parametres = {
          listePiecesJointes: new ObjetListeElements_1.ObjetListeElements(),
          genre: Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
          genreRessourceDocJoint: null,
          avecInActifVisible: false,
          avecEtatSaisie: true,
          optionsSelecFile: undefined,
          modeLien: false,
          validationAuto: null,
          contenuCourant: null,
          tafCourant: null,
          avecThemes: false,
        };
        $.extend(this.parametres, aParametres);
        $.extend(this.parametres, {
          callbacks: {
            ajouterDocumentSurSelecFile:
              this._ajouterDocumentSurSelecFile.bind(this),
            majDocument: this._majDocument.bind(this),
            editerSiteWeb: this._ouvrirFenetreEditionSiteWeb.bind(this),
            editerDocument: this._ouvrirFenetreEditionDocument.bind(this),
            supprimerPJ: this._supprimerPJ.bind(this),
          },
        });
        this.ListePiecesJointes = this.parametres.listePiecesJointes;
        this.Genre = this.parametres.genre;
        this.avecEtatSaisie = this.parametres.avecEtatSaisie;
        this.setOptionsFenetre({
          listeBoutons: this.parametres.modeLien
            ? this.listeBoutonsModeLien
            : this.listeBoutons,
          surValiderAvantFermer: this.parametres.surValiderAvantFermer,
          titre:
            this.optionsFenetre.titre ||
            (this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
              ? 'Sites internet'
              : 'Documents déjà utilisés'),
        });
        this.afficher();
        this.surFixerTaille();
        this.initListe(this.getInstance(this.identListe));
        this.objPJListe = this.getDonneesListe();
        this.setDonneesListe();
        this.$refresh();
      }
      getDonneesListe() {
        let lDonneesListe = new DonneesListe_PieceJointeCP(
          this.ListePiecesJointes,
          this.Genre,
          this.parametres.genreRessourceDocJoint,
          this.avecGestionLibelleSurLiens(),
          this.parametres.callbacks,
        );
        return lDonneesListe.setOptions({
          optionsSelecFile: this.parametres.optionsSelecFile,
        });
      }
      reset() {
        this.ListeFichiers = new ObjetListeElements_1.ObjetListeElements();
      }
      composeContenu() {
        return IE.jsx.str('div', {
          id: this.getInstance(this.identListe).getNom(),
          class: 'full-height',
        });
      }
      actualiserDonneesListe(aParam) {
        this.ListePiecesJointes = this.parametres.listePiecesJointes =
          aParam.listePiecesJointes;
        this._setDocumentsJointsActifs(
          this.ListePiecesJointes,
          this.listePJContexte,
        );
        this.objPJListe = this.getDonneesListe();
        this.setDonneesListe();
      }
      setDonneesListe() {
        if (this.objPJListe) {
          this.getInstance(this.identListe).setDonnees(this.objPJListe);
        }
      }
      surValidation(ANumeroBouton) {
        if (
          this.avecEtatSaisie &&
          this.ListePiecesJointes.getElementParFiltre(
            (aPJ) => Enumere_Etat_1.EGenreEtat.Aucun !== aPJ.getEtat(),
          )
        ) {
          this.setEtatSaisie(true);
        }
        super.surValidation(ANumeroBouton);
      }
      evntSurListe(aParametres, AGenreEvenementListe) {
        switch (AGenreEvenementListe) {
          case Enumere_EvenementListe_1.EGenreEvenementListe.Creation:
            this._ouvrirFenetreEditionSiteWeb({ estCreation: true });
            break;
        }
      }
      _supprimerPJ(aParam) {
        (0, AccessApp_1.getApp)()
          .getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: GlossaireListe_1.TradGlossaireListe.suppressionSelection,
          })
          .then((aGenreAction) => {
            if (aGenreAction === Enumere_Action_1.EGenreAction.Valider) {
              aParam.data.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
              this.actualiserDonneesListe({
                listePiecesJointes: this.ListePiecesJointes,
              });
            }
          });
      }
      _ajouterDocumentSurSelecFile(aListeNouveauxFichiers) {
        this.ajouterPiecesJointesAvecAppelCallback(
          aListeNouveauxFichiers,
          Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
          this.ListePiecesJointes,
          this.listePJContexte,
          false,
        );
        this.actualiserDonneesListe({
          listePiecesJointes: this.ListePiecesJointes,
        });
      }
      _majDocument(aDocument, aNouveauFichier) {
        this.ListeFichiers.addElement(aNouveauFichier);
        aNouveauFichier.setNumero(aDocument.getNumero());
        aNouveauFichier.setLibelle(aDocument.getLibelle());
        aNouveauFichier.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        aDocument.Fichier = aNouveauFichier;
        aDocument.idFichier = aNouveauFichier.idFichier;
        aDocument.Libelle = aNouveauFichier.Libelle;
        aDocument.nomOriginal = aNouveauFichier.nomOriginal;
        aDocument.file = aNouveauFichier.file;
        aDocument.nbRelations = 1;
        aDocument.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        if (this.avecEtatSaisie) {
          this.setEtatSaisie(true);
        }
      }
      _ouvrirFenetreEditionSiteWeb(aParam) {
        const lAvecGestionLibelleSurLiens = this.avecGestionLibelleSurLiens();
        const lValeurParDefaut = 'https://';
        const lData = aParam.estCreation
          ? {
              libelle: lAvecGestionLibelleSurLiens ? '' : lValeurParDefaut,
              url: lValeurParDefaut,
              commentaire: '',
            }
          : {
              url: lAvecGestionLibelleSurLiens
                ? aParam.data.url
                : aParam.data.getLibelle(),
              libelle: aParam.data.getLibelle(),
              commentaire: aParam.data.descriptif,
            };
        const lFenetreEditionSiteWeb =
          ObjetFenetre_EditionUrl_1.ObjetFenetre_EditionUrl.creerInstanceFenetreEditionUrl(
            {
              pere: this,
              initialiser: (aInstance) => {
                if (aParam.estCreation) {
                  aInstance.setOptionsFenetre({
                    titre: 'Ajouter un lien',
                  });
                }
              },
              evenement: (aValider, aParams) => {
                if (
                  !!aParams &&
                  !!aParams.bouton &&
                  aParams.bouton.valider &&
                  !!aParams.donnee
                ) {
                  const lDataOut = aParams.donnee;
                  const lUrl = lDataOut.url;
                  let lEstUnDoublon = false;
                  let lMsg = '';
                  const lLibelle = lAvecGestionLibelleSurLiens
                    ? lDataOut.libelle || ''
                    : lUrl;
                  if (aParam.estCreation) {
                    let lNouvelleUrl = ObjetElement_1.ObjetElement.create({
                      Libelle: lLibelle,
                      Numero: ObjetElement_1.ObjetElement.getNumeroCreation(),
                      Genre: Enumere_DocumentJoint_1.EGenreDocumentJoint.Url,
                      url: lUrl,
                      libelle: lLibelle,
                      commentaire: lDataOut.commentaire || '',
                      descriptif: lDataOut.commentaire || '',
                      Date: this.DateCours,
                      PourMemeMatiere: true,
                      PourMemeClasseEtGroupe: true,
                    });
                    this.ListePiecesJointes.parcourir((aSite) => {
                      if (
                        aSite.getEtat() !==
                          Enumere_Etat_1.EGenreEtat.Suppression &&
                        ((aSite.url &&
                          lNouvelleUrl.url &&
                          aSite.url === lNouvelleUrl.url) ||
                          (aSite.getLibelle() &&
                            lNouvelleUrl.getLibelle() &&
                            aSite.getLibelle() === lNouvelleUrl.getLibelle()))
                      ) {
                        lEstUnDoublon = true;
                      }
                    });
                    if (!lEstUnDoublon) {
                      lNouvelleUrl.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
                      this.ListePiecesJointes.add(lNouvelleUrl);
                    } else {
                      lMsg =
                        GlossaireListe_1.TradGlossaireListe.doublonNom.format([
                          lNouvelleUrl.getLibelle() || lNouvelleUrl.url || '',
                        ]);
                    }
                  } else {
                    let lEltEnEdition = aParam.data;
                    const lEstLibelleModifie =
                      lData.libelle !== lDataOut.libelle;
                    const lEstUrlModifie = lData.url !== lDataOut.url;
                    this.ListePiecesJointes.parcourir((aSite) => {
                      if (
                        aSite.getEtat() !==
                          Enumere_Etat_1.EGenreEtat.Suppression &&
                        ((lEstUrlModifie &&
                          aSite.url &&
                          lDataOut.url &&
                          aSite.url === lDataOut.url) ||
                          (lEstLibelleModifie &&
                            aSite.getLibelle() &&
                            lDataOut.libelle &&
                            aSite.getLibelle() === lDataOut.libelle))
                      ) {
                        lEstUnDoublon = true;
                      }
                    });
                    if (!lEstUnDoublon) {
                      lEltEnEdition.setLibelle(
                        lAvecGestionLibelleSurLiens
                          ? lDataOut.libelle
                          : lDataOut.url,
                      );
                      $.extend(lEltEnEdition, lDataOut);
                      lEltEnEdition.descriptif = lDataOut.commentaire;
                      lEltEnEdition.setEtat(
                        Enumere_Etat_1.EGenreEtat.Modification,
                      );
                    } else {
                      lMsg =
                        GlossaireListe_1.TradGlossaireListe.doublonNom.format([
                          lDataOut.libelle || lDataOut.url || '',
                        ]);
                    }
                  }
                  if (lEstUnDoublon && lMsg !== '') {
                    (0, AccessApp_1.getApp)()
                      .getMessage()
                      .afficher({
                        type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                          .Information,
                        message: lMsg,
                      });
                  }
                  this.actualiserDonneesListe({
                    listePiecesJointes: this.ListePiecesJointes,
                  });
                }
              },
            },
          );
        lFenetreEditionSiteWeb.setOptionsFenetreEditionUrl({
          avecCommentaire: !lAvecGestionLibelleSurLiens,
          avecLibelle: lAvecGestionLibelleSurLiens,
        });
        lFenetreEditionSiteWeb.setDonnees(lData);
      }
      _ouvrirFenetreEditionDocument(aDocument) {
        const lDocument = MethodesObjet_1.MethodesObjet.dupliquer(aDocument);
        const lTitre = 'Editer un document';
        const lIdExtension = GUID_1.GUID.getId();
        const lExtension =
          '.' +
          ObjetChaine_1.GChaine.extraireExtensionFichier(
            lDocument.getLibelle(),
          );
        const lJsxModelEditionNomDocument = () => {
          return {
            getValueInit: () => {
              return ObjetChaine_1.GChaine.extraireNomFichier(
                lDocument.getLibelle(),
              );
            },
            exitChange: (aValue) => {
              if (aValue !== '') {
                lDocument.setLibelle(aValue + lExtension);
              }
            },
          };
        };
        ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_1.ObjetFenetre,
          {
            pere: this,
            initialiser: (aInstance) => {
              aInstance.setOptionsFenetre({
                modale: true,
                titre: lTitre,
                listeBoutons: [
                  {
                    libelle:
                      'Annuler',
                    theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
                  },
                  {
                    libelle:
                      'Valider',
                    valider: true,
                    theme: Type_ThemeBouton_1.TypeThemeBouton.primaire,
                  },
                ],
                hauteur: 180,
                largeur: 350,
              });
            },
            evenement: (_, aParams) => {
              var _a;
              if (
                ((_a = aParams.bouton) === null || _a === void 0
                  ? void 0
                  : _a.valider) &&
                aDocument.getLibelle() !== lDocument.getLibelle()
              ) {
                let lEstUnDoublon = false;
                this.ListePiecesJointes.parcourir((aPJ) => {
                  if (
                    aPJ.getEtat() !== Enumere_Etat_1.EGenreEtat.Suppression &&
                    aPJ.getLibelle() === lDocument.getLibelle()
                  ) {
                    lEstUnDoublon = true;
                  }
                });
                if (lEstUnDoublon) {
                  (0, AccessApp_1.getApp)()
                    .getMessage()
                    .afficher({
                      type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                        .Information,
                      message:
                        GlossaireListe_1.TradGlossaireListe.doublonNom.format([
                          lDocument.getLibelle(),
                        ]),
                    });
                } else {
                  aDocument.setLibelle(lDocument.getLibelle());
                  if (
                    aDocument.getEtat() !== Enumere_Etat_1.EGenreEtat.Creation
                  ) {
                    aDocument.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
                  }
                  this.actualiserDonneesListe({
                    listePiecesJointes: this.ListePiecesJointes,
                  });
                }
              }
            },
          },
        ).afficher(
          IE.jsx.str(
            'div',
            { class: 'flex-contain' },
            IE.jsx.str('input', {
              'aria-label': lTitre,
              'aria-describedby': lIdExtension,
              type: 'text',
              class: 'as-input full-width',
              ie_model: lJsxModelEditionNomDocument.bind(this),
            }),
            IE.jsx.str(
              'div',
              { class: 'ie-titre align-self-center m-left', id: lIdExtension },
              lExtension,
            ),
          ),
        );
      }
    }
    exports.ObjetFenetre_PieceJointeCP = ObjetFenetre_PieceJointeCP;
  },
  fn: 'objetfenetre_piecejointecp.js',
});