IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_PieceJointeCP = exports.DonneesListe_PieceJointeCP =
      void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetPosition_1 = require('ObjetPosition');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const Enumere_EvenementListe_1 = require('Enumere_EvenementListe');
    require('IEHtml.SelecFile.js');
    const ObjetDonneesListe_1 = require('ObjetDonneesListe');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetListe_1 = require('ObjetListe');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    const ObjetElement_1 = require('ObjetElement');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetFenetre_EditionUrl_1 = require('ObjetFenetre_EditionUrl');
    const Enumere_Action_1 = require('Enumere_Action');
    class DonneesListe_PieceJointeCP extends ObjetDonneesListe_1.ObjetDonneesListe {
      constructor(
        aDonnees,
        aGenre,
        aGenreRessourceDocJoint,
        aAvecInActifVisible,
        aMultiSelection,
        aAvecGestionLibelleSurLiens,
      ) {
        super(aDonnees);
        this.Genre = aGenre;
        this.genreRessourceDocJoint = aGenreRessourceDocJoint;
        this.avecInActifVisible = aAvecInActifVisible;
        this.avecGestionLibelleSurLiens = aAvecGestionLibelleSurLiens;
        this.creerIndexUnique(['Libelle', 'Genre']);
        this.setOptions({ avecMultiSelection: aMultiSelection !== false });
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
          (D.Actif || this.avecInActifVisible) &&
          D.existeNumero()
        );
      }
      getCouleurCellule() {
        return ObjetDonneesListe_1.ObjetDonneesListe.ECouleurCellule.Blanc;
      }
      initArticle(D, V) {
        if (this.avecGestionLibelleSurLiens) {
          D.Libelle = V[2];
          D.url = ObjetChaine_1.GChaine.verifierURLHttp(V[1]);
          D.Genre = this.Genre;
          D.descriptif = '';
          D.Fichier = V[-1];
        } else {
          D.Libelle = V[1];
          D.Genre = this.Genre;
          D.descriptif = '';
          D.Fichier = V[-1];
        }
      }
      surCreation(D, V) {
        this.initArticle(D, V);
        if (D.Fichier) {
          D.Fichier.Libelle = V[1];
          D.Fichier.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
          this.options.listeFichiers.addElement(D.Fichier);
        }
        D.Actif = true;
        D.nbRelations = 1;
        D.Editable = true;
        D.Date = this.DateCours;
      }
      avecSelecFile(aParams) {
        return (
          aParams.surCreation &&
          this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier
        );
      }
      getOptionsSelecFile() {
        return Object.assign({ multiple: true }, this.options.optionsSelecFile);
      }
      getValeurParDefaut(aParams) {
        return aParams.colonne === 1 &&
          this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
          ? 'http://'
          : '';
      }
      surEdition(aParams, V) {
        if (this.avecGestionLibelleSurLiens) {
          switch (aParams.colonne) {
            case 0: {
              aParams.article.Actif = V;
              break;
            }
            case 1: {
              aParams.article.url = V;
              break;
            }
            case 2: {
              aParams.article.Libelle = V;
              break;
            }
          }
        } else {
          switch (aParams.colonne) {
            case 0: {
              aParams.article.Actif = V;
              break;
            }
            case 1: {
              if (
                this.Genre ===
                Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier
              ) {
                const lExtension =
                  ObjetChaine_1.GChaine.extraireExtensionFichier(
                    aParams.article.Libelle,
                  );
                V = V + '.' + lExtension;
              }
              aParams.article.Libelle = V;
              if (aParams.article.Fichier) {
                aParams.article.Fichier.Libelle = V;
              }
              break;
            }
            case 2: {
              if (
                this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
              ) {
                aParams.article.descriptif = V;
              }
            }
          }
        }
      }
      autoriserChaineVideSurEdition(aParams) {
        return this.avecGestionLibelleSurLiens && aParams.colonne === 2;
      }
      avecEvenementApresEdition() {
        return true;
      }
      avecEvenementApresCreation() {
        return true;
      }
      avecEdition(aParams) {
        return (
          (aParams.colonne < 2 ||
            this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url) &&
          aParams.colonne !== 3
        );
      }
      enModification(aParams) {
        return aParams.colonne > 0;
      }
      getValeur(aParams) {
        if (this.avecGestionLibelleSurLiens) {
          switch (aParams.colonne) {
            case 0:
              return aParams.article.Actif;
            case 1:
              return aParams.article.url;
            case 2:
              return aParams.article.Libelle ? aParams.article.Libelle : '';
            case 3:
              return aParams.article.ListeThemes &&
                aParams.article.ListeThemes.count()
                ? aParams.article.ListeThemes.getTableauLibelles().join(', ')
                : '';
            default:
              return '';
          }
        } else {
          switch (aParams.colonne) {
            case 0:
              return aParams.article.Actif;
            case 1:
              return aParams.surEdition &&
                this.Genre ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier
                ? ObjetChaine_1.GChaine.extraireNomFichier(
                    aParams.article.Libelle,
                  )
                : aParams.article.Libelle;
            case 2: {
              const lValeur = [];
              if (
                this.Genre ===
                Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier
              ) {
                if (
                  aParams.article.getEtat() !==
                  Enumere_Etat_1.EGenreEtat.Creation
                ) {
                  const lURL = ObjetChaine_1.GChaine.creerUrlBruteLienExterne(
                    aParams.article,
                    { genreRessource: this.genreRessourceDocJoint },
                  );
                  lValeur.push('<a href="', lURL, '" target="_blank">');
                  lValeur.push(
                    '<i class="icon_download_alt" style="',
                    IE.estMobile ? 'font-size:1.6rem' : 'font-size:1.8rem',
                    '"></i>',
                  );
                  lValeur.push('</a>');
                }
              } else {
                if (!!aParams.article.descriptif) {
                  lValeur.push(aParams.article.descriptif);
                }
              }
              return lValeur.join('');
            }
            case 3:
              return aParams.article.ListeThemes &&
                aParams.article.ListeThemes.count()
                ? aParams.article.ListeThemes.getTableauLibelles().join(', ')
                : '';
          }
        }
        return '';
      }
      getTypeValeur(aParams) {
        switch (aParams.colonne) {
          case 0:
            return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche;
          case 1:
            return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
          case 2:
            return this.Genre ===
              Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier
              ? ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Html
              : ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.ZoneTexte;
          case 3:
            return ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
        }
        return;
      }
      initialisationObjetContextuel(aParametres) {
        aParametres.avecCreation = false;
        super.initialisationObjetContextuel(aParametres);
      }
    }
    exports.DonneesListe_PieceJointeCP = DonneesListe_PieceJointeCP;
    class ObjetFenetre_PieceJointeCP extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
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
          avecColonneInfoBulle: true,
          avecBoutonSupprimer: true,
        });
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getDisplayMAJ: function () {
            if (aInstance.estModeFlat()) {
              return false;
            } else {
              return (
                aInstance.Genre ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier &&
                aInstance.optionsFenetre.avecBoutonActualiser
              );
            }
          },
          btnMaj: {
            event: function () {
              if (aInstance.estModeFlat()) {
                return;
              }
              aInstance._ouvrirSelecteur();
            },
            getDisabled: function () {
              if (aInstance.estModeFlat()) {
                return true;
              }
              const lListe = aInstance.getListeEltsSelect();
              return lListe.count() !== 1;
            },
            getOptionsSelecFile(aGetSelecFile) {
              if (aInstance.estModeFlat()) {
                return;
              }
              aInstance._ouvrirSelecteur = aGetSelecFile();
              if (
                !!aInstance.optionsFenetre.avecFiltreExtensionSurRemplacer &&
                aInstance.getListeEltsSelect().count() === 1
              ) {
                let lExt;
                const lElm = aInstance.getListeEltsSelect().getPremierElement();
                if (lElm) {
                  lExt = ObjetChaine_1.GChaine.extraireExtensionFichier(
                    lElm.getLibelle(),
                  );
                }
                if (!!lExt) {
                  Object.assign(aInstance.parametres.optionsSelecFile, {
                    accept: '.' + lExt,
                    extensions: [lExt],
                  });
                }
              }
              return aInstance.parametres.optionsSelecFile;
            },
            addFiles: function (aParams) {
              if (aInstance.estModeFlat()) {
                return;
              }
              if (aParams.eltFichier) {
                aInstance._selecFile(aParams.eltFichier);
              }
            },
          },
          getDisplayBtnSuppr: function () {
            return !aInstance.estModeFlat();
          },
          btnSupp: {
            event: function () {
              if (aInstance.estModeFlat()) {
                return;
              }
              aInstance.getInstanceListe().surSuppression();
            },
            getDisabled: function () {
              if (aInstance.estModeFlat()) {
                return true;
              }
              return aInstance.getListeEltsSelect().count() === 0;
            },
          },
        });
      }
      construireInstances() {
        this.IdentListe = this.add(
          ObjetListe_1.ObjetListe,
          this.evenementSurListe,
          this.initialiserListe,
        );
        this.identListeFlat = this.add(
          ObjetListe_1.ObjetListe,
          this.evntSurListeFlat,
          this.initListeFlat,
        );
      }
      avecGestionLibelleSurLiens() {
        return false;
      }
      initialiserListe(AInstance) {
        const lColonnes = [];
        let lColonnesCachees = [];
        let lListeCreations = 1;
        if (this.avecGestionLibelleSurLiens()) {
          lColonnes.push(
            {
              taille: 20,
              titre: { classeCssImage: 'Image_CocheVerte as-icon' },
            },
            {
              taille: '100%',
              titre: {
                libelle: 'Sites internet',
              },
            },
            {
              taille: 160,
              titre: {
                libelle: 'Nom du document',
              },
            },
          );
          if (this.parametres.avecThemes) {
            lColonnes.push({
              taille: 80,
              titre: {
                libelle: 'Thème(s)',
              },
            });
          }
        } else {
          lColonnes.push({ taille: 20 }, { taille: '100%' });
          if (
            this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier
          ) {
            lColonnes.push({ taille: 20 });
          } else if (
            this.optionsFenetre.avecColonneInfoBulle ||
            this.avecGestionLibelleSurLiens()
          ) {
            lColonnes.push({ taille: 200 });
          }
          if (this.parametres.avecThemes) {
            lColonnes.push({ taille: 80 });
          }
        }
        if (this.avecGestionLibelleSurLiens()) {
          lListeCreations = [1];
        }
        if (this.parametres.modeLien === true) {
          lListeCreations = [1];
          lColonnesCachees = [0];
        }
        AInstance.setOptionsListe(
          {
            nonEditable: false,
            avecCelluleEditableTriangle: false,
            colonnes: lColonnes,
            listeCreations: lListeCreations,
            avecLigneCreation: true,
            boutons: this.optionsFenetre.avecBoutonSupprimer
              ? [{ genre: ObjetListe_1.ObjetListe.typeBouton.supprimer }]
              : [],
            colonnesCachees: lColonnesCachees,
          },
          true,
        );
      }
      initListeFlat(aInstance) {
        aInstance.setOptionsListe(
          {
            skin: ObjetListe_1.ObjetListe.skin.flatDesign,
            nonEditableSurModeExclusif: true,
            nonEditable: false,
            avecCelluleEditableTriangle: false,
            avecLigneCreation: true,
            boutons: [],
          },
          true,
        );
      }
      getEltLien() {
        const lListeElement = this.getInstance(
          this.IdentListe,
        ).getListeElementsSelection();
        if (lListeElement.count() === 1) {
          return lListeElement.get(0);
        }
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
        if (aListePJTotal && aListePJContexte) {
          aListePJTotal.parcourir((aPJDeListeTotale) => {
            let lExisteDansContexte = false;
            if (aListePJContexte) {
              lExisteDansContexte = !!aListePJContexte.getElementParNumero(
                aPJDeListeTotale.getNumero(),
              );
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
        this.setGenre(aParam.genreFenetrePJ);
        this.setDonnees({
          listePiecesJointes: aParam.listePJTot,
          genre: aParam.genrePJ,
          genreRessourceDocJoint: aParam.genreRessourcePJ,
          avecInActifVisible: aParam.avecInActifVisible,
          avecEtatSaisie: aParam.avecEtatSaisie,
          optionsSelecFile: Object.assign(aParam.optionsSelecFile, {
            avecTransformationFlux_versCloud: false,
          }),
          modeLien: aParam.modeLien,
          surValiderAvantFermer: aParam.surValiderAvantFermer,
          validationAuto: aParam.validationAuto,
          contenuCourant: aParam.contenuCourant,
          tafCourant: aParam.tafCourant,
          avecThemes: aParam.avecThemes,
          modeFlat: aParam.modeFlat || false,
        });
      }
      ajouterPiecesJointesAvecAppelCallback(
        aListeNouveauxFichiers,
        aGenreDocJoint,
        aListePJTotale,
        aListePJContexte,
        aAvecCallback = true,
      ) {
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
            if (aAvecCallback) {
              this.callback.appel();
            }
          } else {
            GApplication.getMessage().afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message: lControleAjoutDoc.msg,
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
              lResultControle.msg = 'Un document portant le même nom existe déjà parmi vos pièces jointes. Pour le joindre à nouveau, ouvrez le gestionnaire de pièces jointes.';
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
          optionsSelecFile: null,
          modeLien: false,
          validationAuto: null,
          contenuCourant: null,
          tafCourant: null,
          avecThemes: false,
          modeFlat: false,
        };
        $.extend(this.parametres, aParametres);
        const lEstModeFlat = this.estModeFlat();
        if (lEstModeFlat) {
          $.extend(this.parametres, {
            callbacks: {
              editerSiteWeb: this._ouvrirFenetreEditionSiteWeb.bind(this),
              supprimerSiteWeb: this._supprimerSiteWeb.bind(this),
            },
          });
        }
        this.ListePiecesJointes = this.parametres.listePiecesJointes;
        this.Genre = this.parametres.genre;
        this.avecEtatSaisie = this.parametres.avecEtatSaisie;
        if (this.avecGestionLibelleSurLiens()) {
          ObjetPosition_1.GPosition.setWidth(this.IdContenu, 560);
        } else {
          ObjetPosition_1.GPosition.setWidth(
            this.IdContenu,
            this.optionsFenetre.largeur,
          );
        }
        const lOptionsFenetre = {
          listeBoutons: this.parametres.modeLien
            ? this.listeBoutonsModeLien
            : this.listeBoutons,
          surValiderAvantFermer: this.parametres.surValiderAvantFermer,
          titre: this.optionsFenetre.avecTitre
            ? this.Genre === Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
              ? 'Sites internet'
              : 'Nom du document'
            : '',
        };
        this.setOptionsFenetre(lOptionsFenetre);
        this.afficher();
        this.surFixerTaille();
        ObjetHtml_1.GHtml.setDisplay(this.getNomInstanceListe(), !lEstModeFlat);
        ObjetHtml_1.GHtml.setDisplay(
          this.getNomInstanceListeFlat(),
          lEstModeFlat,
        );
        if (lEstModeFlat) {
          this.initListeFlat(this.getInstanceListeFlat());
        } else {
          this.getInstanceListe().effacer();
          this.initialiserListe(this.getInstanceListe());
        }
        this.objPJListe = this.getDonneesListeSelonModeFlat();
        this.setDonneesListe();
        this.$refreshSelf();
      }
      getListeEltsSelect() {
        return this.getInstance(this.IdentListe).getListeElementsSelection();
      }
      getInstanceListe() {
        return this.getInstance(this.IdentListe);
      }
      getNomInstanceListe() {
        return this.getNomInstance(this.IdentListe);
      }
      getInstanceListeFlat() {
        return this.getInstance(this.identListeFlat);
      }
      getNomInstanceListeFlat() {
        return this.getNomInstance(this.identListeFlat);
      }
      getInstanceListeSelonModeFlat() {
        return this.estModeFlat()
          ? this.getInstanceListeFlat()
          : this.getInstanceListe();
      }
      getDonneesListeSelonModeFlat() {
        return this.estModeFlat()
          ? this._getDonneesListeFlat()
          : this._getDonneesListe();
      }
      estModeFlat() {
        return this.parametres.modeFlat === true;
      }
      _getDonneesListe() {
        return new DonneesListe_PieceJointeCP(
          this.ListePiecesJointes,
          this.Genre,
          this.parametres.genreRessourceDocJoint,
          this.parametres.avecInActifVisible,
          this.parametres.modeLien,
        ).setOptions({
          avecEtatSaisie: this.parametres.avecEtatSaisie,
          optionsSelecFile: this.parametres.optionsSelecFile,
          listeFichiers: this.ListeFichiers,
          avecMultiSelection: this.parametres.modeLien,
        });
      }
      _getDonneesListeFlat() {
        return null;
      }
      reset() {
        this.ListeFichiers = new ObjetListeElements_1.ObjetListeElements();
      }
      composeContenu() {
        const T = [];
        T.push(
          '<div id="' +
            this.getNomInstanceListe() +
            '" class="full-height"></div>',
        );
        T.push(
          '<div id="' +
            this.getNomInstanceListeFlat() +
            '" class="full-height" style="display:none;"></div>',
        );
        return T.join('');
      }
      composeBas() {
        const T = [];
        T.push(
          `<div class="compose-bas flex-contain flex-center justify-end">`,
        );
        T.push(`<div ie-display="getDisplayMAJ" class="m-right-l">`);
        T.push(
          IE.estMobile
            ? `<ie-btnicon ie-model="btnMaj" class="icon_refresh avecFond i-medium" ie-selecfile title="${'Mettre à jour'}"></ie-btnicon>`
            : `<ie-bouton ie-model="btnMaj" ie-selecfile>${'Mettre à jour'}</ie-bouton>`,
        );
        T.push(`</div>`);
        T.push(
          IE.estMobile
            ? `<ie-btnicon ie-display="getDisplayBtnSuppr" ie-model="btnSupp" class="icon_trash avecFond i-medium" title="${'Supprimer'}"></ie-btnicon>`
            : `<ie-bouton ie-display="getDisplayBtnSuppr" ie-model="btnSupp">${'Supprimer'}</ie-bouton>`,
        );
        T.push(`</div>`);
        return T.join('');
      }
      actualiserDonneesListe(aParam) {
        this.ListePiecesJointes = this.parametres.listePiecesJointes =
          aParam.listePiecesJointes;
        this.objPJListe = this.getDonneesListeSelonModeFlat();
        let lInstanceListe = this.getInstanceListeSelonModeFlat();
        if (this.objPJListe) {
          lInstanceListe.setDonnees(this.objPJListe);
        }
      }
      setDonneesListe() {
        let lInstanceListe = this.getInstanceListeSelonModeFlat();
        if (this.objPJListe) {
          lInstanceListe.setDonnees(this.objPJListe);
        }
      }
      evenementSurListe(aParametres, AGenreEvenementListe, I) {
        if (
          AGenreEvenementListe ===
          Enumere_EvenementListe_1.EGenreEvenementListe.ApresEdition
        ) {
          if (I === 1 && this.listePJContexte && aParametres.article) {
            const lPJ = this.listePJContexte.getElementParNumero(
              aParametres.article.getNumero(),
            );
            if (lPJ) {
              lPJ.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
            }
          }
        }
        if (
          AGenreEvenementListe ===
            Enumere_EvenementListe_1.EGenreEvenementListe.ApresEdition ||
          AGenreEvenementListe ===
            Enumere_EvenementListe_1.EGenreEvenementListe.ApresCreation
        ) {
          if (
            !!this.parametres.validationAuto &&
            this.ListePiecesJointes.existeElementPourValidation()
          ) {
            this.parametres.validationAuto();
          }
        }
      }
      evntSurListeFlat(aParametres, AGenreEvenementListe) {
        switch (AGenreEvenementListe) {
          case Enumere_EvenementListe_1.EGenreEvenementListe.Creation:
            this._ouvrirFenetreEditionSiteWeb({
              estCreation: true,
              donneesListe: aParametres.instance.getDonneesListe(),
            });
            break;
        }
      }
      _supprimerSiteWeb(aParam) {
        GApplication.getMessage()
          .afficher({
            type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
            message: 'Voulez-vous supprimer la sélection ?',
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
      _ouvrirFenetreEditionSiteWeb(aParam) {
        const lFenetreEditionSiteWeb =
          ObjetFenetre_EditionUrl_1.ObjetFenetre_EditionUrl.creerInstanceFenetreEditionUrl(
            {
              pere: this,
              evenement: (aValider, aParams) => {
                if (
                  !!aParams &&
                  !!aParams.bouton &&
                  aParams.bouton.valider &&
                  !!aParams.donnee
                ) {
                  const lDataOut = aParams.donnee;
                  const lUrl = lDataOut.url;
                  let lUrlConforme = true;
                  if (this.avecGestionLibelleSurLiens) {
                    if (
                      lUrl.toLowerCase() === 'http://' ||
                      lUrl.toLowerCase() === 'https://'
                    ) {
                      lUrlConforme = false;
                    }
                  }
                  if (lUrlConforme) {
                    if (!aParam.donneesListe) {
                      return;
                    }
                    let lEstUnDoublon = false;
                    let lMsg = '';
                    const lLibelle = lDataOut.libelle || '';
                    if (aParam.estCreation) {
                      let lNouvelleUrl = ObjetElement_1.ObjetElement.create({
                        Libelle: lLibelle,
                        Numero: ObjetElement_1.ObjetElement.getNumeroCreation(),
                        Genre: Enumere_DocumentJoint_1.EGenreDocumentJoint.Url,
                        url: lUrl,
                        libelle: lLibelle,
                        commentaire: lDataOut.commentaire || '',
                        Date: this.DateCours,
                        PourMemeMatiere: true,
                        PourMemeClasseEtGroupe: true,
                      });
                      lEstUnDoublon =
                        aParam.donneesListe.estUnDoublon(lNouvelleUrl);
                      if (!lEstUnDoublon) {
                        lNouvelleUrl.setEtat(
                          Enumere_Etat_1.EGenreEtat.Creation,
                        );
                        this.ListePiecesJointes.addElement(lNouvelleUrl);
                      } else {
                        lMsg =
                          aParam.donneesListe.getMessageDoublon(lNouvelleUrl);
                      }
                    } else {
                      let lEltEnEdition = aParam.data;
                      let lEltTempPourControle =
                        new ObjetElement_1.ObjetElement(
                          lDataOut.libelle,
                          lEltEnEdition.getNumero(),
                          lEltEnEdition.getGenre(),
                        );
                      $.extend(lEltTempPourControle, lDataOut);
                      lEstUnDoublon =
                        aParam.donneesListe.estUnDoublon(lEltTempPourControle);
                      if (!lEstUnDoublon) {
                        lEltEnEdition.setLibelle(lDataOut.libelle);
                        $.extend(lEltEnEdition, lDataOut);
                        lEltEnEdition.setEtat(
                          Enumere_Etat_1.EGenreEtat.Modification,
                        );
                      } else {
                        lMsg =
                          aParam.donneesListe.getMessageDoublon(
                            lEltTempPourControle,
                          );
                      }
                    }
                    if (lEstUnDoublon && lMsg !== '') {
                      GApplication.getMessage().afficher({
                        type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                          .Information,
                        message: lMsg,
                      });
                    }
                    this.actualiserDonneesListe({
                      listePiecesJointes: this.ListePiecesJointes,
                    });
                  } else {
                    GApplication.getMessage().afficher({
                      type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                        .Information,
                      message:
                        'L'adresse internet est incorrecte.',
                    });
                  }
                }
              },
            },
          );
        lFenetreEditionSiteWeb.setOptionsFenetreEditionUrl({
          avecCommentaire: false,
        });
        let lData = aParam.estCreation
          ? { libelle: '', url: 'http://' }
          : {
              url: aParam.data.url,
              libelle: aParam.data.getLibelle(),
              commentaire: aParam.data.commentaire,
            };
        lFenetreEditionSiteWeb.setDonnees(lData);
      }
      _selecFile(aFichier) {
        this.ListeFichiers.addElement(aFichier);
        const lPJSelectionne = this.getListeEltsSelect().get(0);
        if (!lPJSelectionne) {
          return;
        }
        aFichier.setNumero(lPJSelectionne.getNumero());
        aFichier.setLibelle(lPJSelectionne.getLibelle());
        aFichier.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        lPJSelectionne.Fichier = aFichier;
        lPJSelectionne.idFichier = aFichier.idFichier;
        lPJSelectionne.Libelle = aFichier.Libelle;
        lPJSelectionne.nomOriginal = aFichier.nomOriginal;
        lPJSelectionne.file = aFichier.file;
        lPJSelectionne.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        if (this.avecEtatSaisie) {
          this.setEtatSaisie(true);
        }
      }
    }
    exports.ObjetFenetre_PieceJointeCP = ObjetFenetre_PieceJointeCP;
  },
  fn: 'objetfenetre_piecejointecp.js',
});