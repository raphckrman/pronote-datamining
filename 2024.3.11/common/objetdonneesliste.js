IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDonneesListe = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetStyle_1 = require('ObjetStyle');
    const Enumere_CommandeMenu_1 = require('Enumere_CommandeMenu');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetIndexsUnique_1 = require('ObjetIndexsUnique');
    const TypeNote_1 = require('TypeNote');
    const ObjetHtml_1 = require('ObjetHtml');
    const UtilitaireDuree_1 = require('UtilitaireDuree');
    class ObjetDonneesListe {
      constructor(aDonnees) {
        this.estFlatDesign = false;
        this.mapPereFils = null;
        this.Donnees = !aDonnees
          ? new ObjetListeElements_1.ObjetListeElements()
          : aDonnees;
        this.enImpression = false;
        this.enConstruction_cacheRechercheTexte = false;
        this.options = {
          avecSelection: true,
          avecEdition: true,
          avecSuppression: true,
          editionApresSelection: true,
          editionSurSelectionApresFinEdition: false,
          avecEvnt_Selection: false,
          avecEvnt_ModificationSelection: false,
          avecEvnt_SelectionClick: false,
          avecEvnt_SelectionDblClick: false,
          avecEvnt_Edition: false,
          avecEvnt_ApresEdition: false,
          avecEvnt_ApresEditionValidationSansModification: false,
          avecEvnt_Creation: false,
          avecEvnt_ApresCreation: false,
          avecEvnt_Suppression: false,
          avecEvnt_ApresSuppression: false,
          avecEvnt_KeyPressListe: false,
          avecTimeoutEvent_KeyPressListe: true,
          avecEvnt_KeyUpListe: false,
          avecEvnt_Deploiement: false,
          avecSurvolCelluleVisible: true,
          avecMultiSelection: false,
          selectionParCellule: false,
          avecMultiSelectionSurCtrl: true,
          avecMultiSelectionSurShift: true,
          avecMultiSelectionSurLigneFusion: true,
          avecSelectionSurNavigationClavier: false,
          avecNavigationClavierFlechesEnEdition: false,
          avecCelluleSuivanteSurFinEdition: false,
          avecRechercheSelectionMiroir: false,
          avecDeselectionSurNonSelectionnable: true,
          avecDeselectionMonoSelectionClick: false,
          avecDeselectionMonoSelectionClickCtrl: false,
          avecEtatSaisie: true,
          avecTri: true,
          avecContenuTronque: false,
          avecEllipsisContenuTronque: true,
          avecDeploiement: false,
          avecDeploiementSurColonne: true,
          avecImageSurColonneDeploiement: false,
          avecEventDeploiementSurCellule: true,
          avecInterruptionSuppression: false,
          avecTrimSurEdition: false,
          indentationCelluleEnfant: 12,
          hauteurMinCellule: ObjetDonneesListe.hauteurMinCellule,
          hauteurMinContenuCellule: 0,
          alignVCenter: false,
          avecLigneDraggable: false,
          avecLigneDroppable: false,
          dragNDropLigneInsertion: true,
          avecHtmlDetailsDraggableOver: true,
          getValeur: null,
          nonEditable: false,
          avecPereVisibleSurRechercheTexte: true,
          ignorerDeploiementSurRechercheTexte: true,
          racineCss: MethodesObjet_1.MethodesObjet.getObjectClass(this),
        };
        this.paramsListe = {
          liste: null,
          idWAILigneLue: '',
          versionMobile: false,
          getIdsColonnes: null,
          getParams: null,
          avecRechercheTexteEnCours: false,
        };
      }
      setOptions(aOptions) {
        $.extend(this.options, aOptions);
        return this;
      }
      getControleur(aDonneeListe, aListe) {
        return null;
      }
      avecSelection(aParams) {
        return this.options.avecSelection;
      }
      avecDeselection(aParams) {
        return this.avecMultiSelection()
          ? true
          : this.options.avecDeselectionMonoSelectionClickCtrl ||
              this.options.avecDeselectionMonoSelectionClick;
      }
      selectionParCellule(aColonne, aArticle) {
        return this.options.selectionParCellule;
      }
      avecEdition(aParams) {
        return this.options.avecEdition;
      }
      avecEditionApresSelection(aParams) {
        if (aParams.typeValeur === ObjetDonneesListe.ETypeCellule.Coche) {
          return false;
        }
        return this.options.editionApresSelection;
      }
      getColonneTransfertEdition(aParams) {
        return null;
      }
      avecSuppression(aParams) {
        return this.options.avecSuppression;
      }
      avecEtatSaisie(aParamsCellule) {
        return this.options.avecEtatSaisie;
      }
      avecTri() {
        return this.options.avecTri;
      }
      avecMenuContextuel(aParams) {
        return aParams.article && aParams.ligne >= 0
          ? this.options.avecContextMenuSansSelection ||
              this.avecSelection(aParams)
          : false;
      }
      avecContenuTronque(aParams) {
        return this.options.avecContenuTronque;
      }
      avecDeploiement() {
        return this.options.avecDeploiement;
      }
      avecDeploiementSurColonne(aParams) {
        return this.options.avecDeploiementSurColonne;
      }
      avecImageSurColonneDeploiement(aParams) {
        return this.options.avecImageSurColonneDeploiement;
      }
      avecEventDeploiementSurCellule(aParams) {
        return this.options.avecEventDeploiementSurCellule;
      }
      getIndentationCelluleSelonParente(aParams) {
        if (!aParams) {
          return 0;
        }
        let lIndent = 0,
          lArticle = aParams.article;
        while (lArticle && lArticle.pere) {
          lIndent += this.options.indentationCelluleEnfant || 0;
          lArticle = lArticle.pere;
        }
        return lIndent;
      }
      getIndentationCellule(aParams) {
        return 0;
      }
      avecAlternanceCouleurLigne(aParamsCellule) {
        if (
          this.estUnDeploiement(aParamsCellule) ||
          (aParamsCellule.celluleLignePrecedente &&
            this.estUnDeploiement(aParamsCellule.celluleLignePrecedente))
        ) {
          return 0;
        }
        return true;
      }
      surDeploiement(I, J, D) {
        D.estDeploye = !D.estDeploye;
      }
      avecEvenementSelection(aParams) {
        return this.options.avecEvnt_Selection;
      }
      avecEvenementSelectionClick(aParams) {
        return this.options.avecEvnt_SelectionClick;
      }
      avecEvenementSelectionDblClick(aParams) {
        return this.options.avecEvnt_SelectionDblClick;
      }
      avecEvenementCreation() {
        return this.options.avecEvnt_Creation;
      }
      avecEvenementEdition(aParams) {
        return this.options.avecEvnt_Edition;
      }
      avecEvenementSuppression(aParams) {
        return this.options.avecEvnt_Suppression;
      }
      avecEvenementDeploiement(aParams) {
        return this.options.avecEvnt_Deploiement;
      }
      avecEvenementApresCreation() {
        return this.options.avecEvnt_ApresCreation;
      }
      avecEvenementApresErreurCreation() {
        return false;
      }
      avecEvenementApresEdition(aParams) {
        return this.options.avecEvnt_ApresEdition;
      }
      avecEvenementApresSuppression() {
        return this.options.avecEvnt_ApresSuppression;
      }
      avecInterruptionSuppression() {
        return this.options.avecInterruptionSuppression;
      }
      surSelectionLigne(aLigne, aDonnee, aSelectionner) {}
      surSelection(aColonne, aDonnee, aLigne, aSelectionner) {}
      surCreation(D, V, J) {
        return;
      }
      avecCreationElementsDynamique(aListeValeurs, aLigneCreation) {
        return false;
      }
      surEdition(aParams, V) {}
      forcerActualisationListeSurEdition(aParams) {
        return true;
      }
      surSuppression(aArticle) {
        aArticle.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
      }
      avecSelecFile(aParams) {
        return false;
      }
      getOptionsSelecFile(aParams) {
        return null;
      }
      evenementSurSelecFile(aParams, aParamsSelecFile) {}
      avecLigneDraggable(aParams) {
        return this.options.avecLigneDraggable;
      }
      getLibelleDraggable(aParams) {
        return '';
      }
      getHtmlDetailsDraggableOver(aParams, aDataDrag) {
        if (!this.options.avecHtmlDetailsDraggableOver) {
          return '';
        }
        return (
          '<div class="draggable_details_Deplacer"></div><label>' +
          (this.options.dragNDropLigneInsertion
            ? 'Changer de rang'
            : 'Echanger de rang') +
          '</label>'
        );
      }
      avecLigneDroppable(aParams) {
        return this.options.avecLigneDroppable;
      }
      autoriserDeplacementElementSurLigne(
        aParamsLigneDestination,
        aParamsSource,
      ) {
        return (
          aParamsSource.instance &&
          aParamsLigneDestination.instance &&
          aParamsSource.instance.getNom() ===
            aParamsLigneDestination.instance.getNom() &&
          aParamsLigneDestination.article &&
          aParamsSource.article &&
          aParamsLigneDestination.ligne !== aParamsSource.ligne
        );
      }
      surDeplacementElementSurLigne(aParamsLigneDestination, aParamsSource) {
        return false;
      }
      getEtatSurEdition(aParams) {
        return Enumere_Etat_1.EGenreEtat.Modification;
      }
      editionConfirmation(aParams) {
        return false;
      }
      suppressionImpossible(D, aListeSelections) {
        return false;
      }
      suppressionConfirmation(D, aListeSelections) {
        return true;
      }
      getTri(aColonneDeTri, aGenreTri) {
        return null;
      }
      getVisible(aDonnee) {
        return true;
      }
      getValeur(aParams) {
        if (MethodesObjet_1.MethodesObjet.isFunction(this.options.getValeur)) {
          return this.options.getValeur(aParams);
        }
        return aParams.article ? aParams.article.getLibelle() : '';
      }
      getValeurParDefaut(aParams) {
        return '';
      }
      getWAIIdColonnePourDescription(aParams) {
        return '';
      }
      getWAIInputEdition(aParams) {
        return '';
      }
      getValeurPourTri(aColonne, aArticle) {
        return this.getValeur(
          this.paramsListe.getParams(aColonne, -1, {
            surTri: true,
            article: aArticle,
          }),
        );
      }
      getValeurPourAffichage(aParams) {
        return this.getValeur(aParams);
      }
      getHintHtmlForce(aParams) {
        return '';
      }
      getHintForce(aParams) {
        return '';
      }
      getTypeValeur(aParams) {
        return ObjetDonneesListe.ETypeCellule.Texte;
      }
      getTailleTexteMax(aParams) {
        return 0;
      }
      avecTrimSurEdition(aParams) {
        return this.options.avecTrimSurEdition;
      }
      autoriserChaineVideSurEdition(aParams) {
        return false;
      }
      getCouleurCellule(aParams, aCouleurCellule) {
        return undefined;
      }
      getClassCelluleConteneur(aParams) {
        return '';
      }
      getClass(aParams) {
        return '';
      }
      getStyle(aParams) {
        return '';
      }
      alignVCenter(aParams) {
        return this.options.alignVCenter;
      }
      getPadding(aParams) {
        return false;
      }
      getNiveauDeploiement(aParams) {
        return 1;
      }
      getColonneDeFusion(aParamsCellule) {
        return null;
      }
      fusionCelluleAvecColonnePrecedente(aParams) {
        return false;
      }
      fusionCelluleAvecLignePrecedente(aParamsCellule) {
        return false;
      }
      avecBordureDroite(aParams) {
        return true;
      }
      avecBordureBas(aParams) {
        return true;
      }
      avecBordureHaut(aParams) {
        return false;
      }
      initialiserObjetGraphique(aParams, aInstance) {
        return null;
      }
      setDonneesObjetGraphique(aParams, aInstance) {
        return null;
      }
      avecMultiSelection() {
        return this.options.avecMultiSelection;
      }
      avecMultiSelectionSurCtrl() {
        return this.options.avecMultiSelectionSurCtrl;
      }
      avecMultiSelectionSurShift() {
        return this.options.avecMultiSelectionSurShift;
      }
      estSelectionCibleMiroirDeSelectionSource(
        aParamsCelluleSource,
        aParamsCelluleCible,
      ) {
        return (
          !!aParamsCelluleSource.article.getNumero() &&
          aParamsCelluleSource.article.getNumero() ===
            aParamsCelluleCible.article.getNumero()
        );
      }
      getListeLignesTotal() {
        return null;
      }
      getContenuTotal(aParams) {
        return '';
      }
      getTypeCelluleTotal(aParams) {
        return ObjetDonneesListe.typeCelluleTotal.defaut;
      }
      getStyleTotal(aParams) {
        switch (aParams.typeCellule) {
          case ObjetDonneesListe.typeCelluleTotal.defaut:
            return (
              ObjetStyle_1.GStyle.composeCouleurFond(
                GCouleur.liste.total.fond,
              ) +
              ObjetStyle_1.GStyle.composeCouleurTexte(
                GCouleur.liste.total.texte,
              )
            );
          case ObjetDonneesListe.typeCelluleTotal.fond:
            return ObjetStyle_1.GStyle.composeCouleurTexte(
              GCouleur.liste.texte,
            );
          case ObjetDonneesListe.typeCelluleTotal.editable:
            return ObjetStyle_1.GStyle.composeCouleurFond(
              GCouleur.liste.editable.fond,
            );
          default:
        }
        return '';
      }
      getClassTotal(aParams) {
        return '';
      }
      avecBordureTotalVisible(aParams) {
        return aParams.typeCellule !== ObjetDonneesListe.typeCelluleTotal.fond;
      }
      getColonneDeFusionTotal(aParams) {
        return null;
      }
      avecEvenementSelectionClickTotal(aParams) {
        return false;
      }
      getMessageDoublon(aElement) {
        return aElement && aElement.getLibelle()
          ? '"%s" est déjà dans la liste !',
            ])
          : 'Ce nom est déjà dans la liste !';
      }
      getMessageCreationImpossible(aErreur) {
        return 'Création impossible';
      }
      getMessageEditionImpossible(aParams, aErreur) {
        return 'Edition impossible';
      }
      getMessageEditionConfirmation(aParams) {
        return '';
      }
      getMessageSuppressionImpossible(aDonnee, aListeSelections) {
        return 'Suppression impossible';
      }
      getMessageSuppressionConfirmation(aDonnee, aListeSelections) {
        return 'Voulez-vous supprimer la sélection ?';
      }
      getMessageTailleMaximaleSaisie() {
        return 'Vous avez atteint la taille maximale possible.';
      }
      editionRefusee(aParams) {
        const lMessageRefus = this.getMessageEditionRefusee(aParams);
        if (lMessageRefus) {
          const lEstString = typeof lMessageRefus === 'string';
          GApplication.getMessage().afficher({
            titre: lEstString ? '' : lMessageRefus.titre || '',
            message: lEstString ? lMessageRefus : lMessageRefus.message,
          });
          return true;
        }
        return false;
      }
      getMessageEditionRefusee(aParams) {
        return '';
      }
      remplirMenuContextuel(aParametres) {
        if (!aParametres.menuContextuel) {
          return false;
        }
        if (aParametres.surFondListe) {
          return false;
        }
        let lAvecCommandeActive = false;
        let lCommande;
        if (aParametres.avecCreation) {
          lCommande = aParametres.menuContextuel.addCommande(
            Enumere_CommandeMenu_1.EGenreCommandeMenu.Creation,
            'Créer',
            !aParametres.nonEditable,
          );
          if (lCommande.actif) {
            lAvecCommandeActive = true;
          }
        }
        lCommande = aParametres.menuContextuel.addCommande(
          Enumere_CommandeMenu_1.EGenreCommandeMenu.Edition,
          'Modifier',
          !aParametres.nonEditable &&
            (!aParametres.listeSelection ||
              aParametres.listeSelection.count() <= 1) &&
            this.avecEdition(aParametres),
        );
        if (lCommande.actif) {
          lAvecCommandeActive = true;
        }
        lCommande = aParametres.menuContextuel.addCommande(
          Enumere_CommandeMenu_1.EGenreCommandeMenu.Suppression,
          'Supprimer',
          !aParametres.nonEditable &&
            aParametres &&
            aParametres.avecSuppression &&
            this._avecSuppression(aParametres),
        );
        if (lCommande.actif) {
          lAvecCommandeActive = true;
        }
        return lAvecCommandeActive;
      }
      getListeSupprimables(aListeSelections, aParamsCellule) {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        aListeSelections.parcourir((aElement) => {
          if (this.avecSuppression(aParamsCellule)) {
            lListe.addElement(aElement);
          }
        });
        return lListe;
      }
      initialisationObjetContextuel(aParametres) {
        if (!aParametres.menuContextuel) {
          return;
        }
        const lAvecCommandeActive = this.remplirMenuContextuel(aParametres);
        if (lAvecCommandeActive !== false) {
          aParametres.menuContextuel.setDonnees(aParametres.id);
        }
      }
      evenementMenuContextuel(aParametres) {
        return false;
      }
      enModification(aParams) {
        return true;
      }
      getControleCaracteresInput(aParams) {
        return null;
      }
      _avecSelection(aParams) {
        return this.avecSelection(aParams);
      }
      _avecDeselection(aParams) {
        return this.avecDeselection(aParams);
      }
      _avecSuppression(aParams) {
        if (aParams.listeSelection && aParams.listeSelection.count() > 0) {
          let lAvecSuppression = false;
          aParams.listeSelection.parcourir((aElement) => {
            if (this.avecSuppression(aParams)) {
              lAvecSuppression = true;
              return false;
            }
          });
          return lAvecSuppression;
        }
        return this.avecSuppression(aParams);
      }
      _getVisible(aDonnee, aParams) {
        return this.getVisible(aDonnee);
      }
      _surSelectionLigne(aLigne, aSelectionner) {
        return this.surSelectionLigne(
          aLigne,
          this.Donnees.get(aLigne),
          aSelectionner,
        );
      }
      _surSelection(aColonne, aLigne, aSelectionner) {
        return this.surSelection(
          aColonne,
          this.Donnees.get(aLigne),
          aColonne,
          aSelectionner,
        );
      }
      _getTailleTexteMax(aParams) {
        switch (this.getTypeValeur(aParams)) {
          case ObjetDonneesListe.ETypeCellule.Texte:
          case ObjetDonneesListe.ETypeCellule.ZoneTexte:
            return this.getTailleTexteMax(aParams);
          default:
            return 0;
        }
      }
      estUnDeploiement(aParams) {
        return aParams && aParams.article && aParams.article.estUnDeploiement;
      }
      estUnDeploiementValide(aParams) {
        return (
          this.estUnDeploiement(aParams) &&
          this.avecFilsVisibleDePere(aParams.article)
        );
      }
      _estDeploye(aLigne) {
        return this._articleDeploye(this.Donnees.get(aLigne));
      }
      _initialiserObjetGraphique(aParams, aInstance) {
        return this.initialiserObjetGraphique(aParams, aInstance);
      }
      _setDonneesObjetGraphique(aParams, aInstance) {
        return this.setDonneesObjetGraphique(aParams, aInstance);
      }
      getIndice(aDonnee) {
        for (let J = 0; J < this.getNbrLignes(); J++) {
          if (this.Donnees.get(J) === aDonnee) {
            return J;
          }
        }
        return -1;
      }
      getMessage() {
        return this.Message;
      }
      _getValeur(aParams) {
        const lValeur =
          aParams.ligne === null || aParams.ligne === undefined
            ? this.getValeurParDefaut(aParams)
            : this.getValeur(aParams);
        switch (this.getTypeValeur(aParams)) {
          case ObjetDonneesListe.ETypeCellule.Texte:
            return lValeur;
          case ObjetDonneesListe.ETypeCellule.ZoneTexte:
            return lValeur;
          case ObjetDonneesListe.ETypeCellule.Html:
            return lValeur;
          case ObjetDonneesListe.ETypeCellule.Date:
          case ObjetDonneesListe.ETypeCellule.DateCalendrier:
            return this.getChaineDeDate(lValeur, aParams);
          case ObjetDonneesListe.ETypeCellule.Coche:
            return lValeur;
          case ObjetDonneesListe.ETypeCellule.CocheDeploiement:
            return '';
          case ObjetDonneesListe.ETypeCellule.Icon:
          case ObjetDonneesListe.ETypeCellule.Image:
            return lValeur;
          case ObjetDonneesListe.ETypeCellule.HeureMinute:
            if (MethodesObjet_1.MethodesObjet.isDate(lValeur)) {
              return ObjetDate_1.GDate.formatDate(lValeur, '%hh%sh%mm');
            } else if (MethodesObjet_1.MethodesObjet.isNumber(lValeur)) {
              return UtilitaireDuree_1.TUtilitaireDuree.dureeEnHeuresMinutes(
                lValeur,
              ).toString('%hh%sh%mm');
            }
            return '';
          case ObjetDonneesListe.ETypeCellule.Note: {
            const lOptionsNote = this.getOptionsNote(aParams);
            if (!lValeur) {
              return aParams.surEdition
                ? null
                : lOptionsNote && lOptionsNote.texteSiVide
                  ? lOptionsNote.texteSiVide
                  : '';
            }
            if (lValeur instanceof TypeNote_1.TypeNote) {
              if (aParams.surEdition) {
                return lValeur;
              }
              let lLibelle =
                lOptionsNote && !lOptionsNote.afficherAvecVirgule
                  ? lValeur.getNoteSansDecimaleForcee()
                  : lValeur.getNote();
              if (lOptionsNote && lOptionsNote.avecParenthese) {
                lLibelle = '(' + lLibelle + ')';
              }
              if (lOptionsNote && !!lOptionsNote.suffixe) {
                lLibelle = lLibelle + lOptionsNote.suffixe;
              }
              if (lOptionsNote && lOptionsNote.avecTiret) {
                lLibelle = '-';
              }
              return lLibelle;
            }
          }
        }
        return lValeur;
      }
      _getContenuAffichage(aParams) {
        const lVal = this._getValeur(aParams);
        const lContenu = { valeur: '', title: '' };
        if (MethodesObjet_1.MethodesObjet.isString(lVal)) {
          lContenu.valeur = lVal;
        } else if (
          lVal &&
          MethodesObjet_1.MethodesObjet.isObject(lVal) &&
          'libelle' in lVal
        ) {
          const lValFD = lVal;
          lContenu.valeur = lValFD.libelle;
          lContenu.idsLabel = lValFD.idsLabel;
        } else {
          lContenu.valeur = lVal;
        }
        if (!this.enImpression) {
          let lHintForce = this.getHintHtmlForce(aParams);
          if (lHintForce) {
            lContenu.titleHtml = lHintForce;
          } else {
            lHintForce = this.getHintForce(aParams);
            if (lHintForce) {
              lContenu.title = lHintForce;
            }
          }
        }
        if (aParams.avecContenuTronque) {
          switch (aParams.typeValeur) {
            case ObjetDonneesListe.ETypeCellule.Texte:
            case ObjetDonneesListe.ETypeCellule.ZoneTexte: {
              const lChaineAffichage = this.getValeurPourAffichage(aParams);
              lContenu.valeur = lChaineAffichage;
              if (
                !this.enImpression &&
                !lContenu.titleHtml &&
                !lContenu.title
              ) {
                lContenu.attrOverflow = this.options.avecEllipsisContenuTronque
                  ? 'ie-ellipsis'
                  : 'ie-hintoverflow';
              }
            }
          }
        }
        lContenu.valeur = ObjetChaine_1.GChaine.avecEspaceSiVide(
          lContenu.valeur + '',
        );
        if (aParams.typeValeur !== ObjetDonneesListe.ETypeCellule.Html) {
          lContenu.valeur = lContenu.valeur
            .replace(/\r\n/g, '<br>')
            .replace(/\n/g, '<br>');
        }
        return lContenu;
      }
      getOptionsNote(aParams) {
        return { afficherAvecVirgule: true, hintSurErreur: false };
      }
      getValeurPourParsing(aParams) {
        return this._getValeur(aParams);
      }
      getChaineDeDate(aDate, aParams) {
        return MethodesObjet_1.MethodesObjet.isDate(aDate)
          ? ObjetDate_1.GDate.formatDate(aDate, '%JJ/%MM/%AA')
          : '';
      }
      setValeur(aParams) {
        switch (this.getTypeValeur(aParams)) {
          case ObjetDonneesListe.ETypeCellule.Texte:
          case ObjetDonneesListe.ETypeCellule.ZoneTexte:
          case ObjetDonneesListe.ETypeCellule.Html:
            return aParams.valeur;
          case ObjetDonneesListe.ETypeCellule.Date:
          case ObjetDonneesListe.ETypeCellule.DateCalendrier: {
            if (aParams.valeur === null || aParams.valeur === undefined) {
              return '';
            }
            const lValeur = aParams.valeur.split('/');
            if (lValeur[2].length === 2) {
              lValeur[2] = '20' + lValeur[2];
            }
            const lDate = new Date(
              parseInt(lValeur[2]),
              parseInt(lValeur[1]) - 1,
              parseInt(lValeur[0]),
            );
            if (!isNaN(lDate) && lValeur[0].charAt(0) === '0') {
              lValeur[0] = lValeur[0].charAt(1);
            }
            return isNaN(lDate) ||
              !(
                lDate.getFullYear() === parseInt(lValeur[2]) &&
                lDate.getMonth() === parseInt(lValeur[1]) - 1 &&
                lDate.getDate() === parseInt(lValeur[0])
              )
              ? null
              : lDate;
          }
          case ObjetDonneesListe.ETypeCellule.Coche: {
            const lValeur = this.getValeur(aParams);
            if (lValeur === ObjetDonneesListe.EGenreCoche.Verte) {
              return ObjetDonneesListe.EGenreCoche.Aucune;
            }
            if (lValeur === ObjetDonneesListe.EGenreCoche.Grise) {
              return ObjetDonneesListe.EGenreCoche.Verte;
            }
            if (
              lValeur === ObjetDonneesListe.EGenreCoche.Aucune ||
              lValeur === undefined
            ) {
              return ObjetDonneesListe.EGenreCoche.Verte;
            }
            return ObjetDonneesListe.EGenreCoche.Aucune;
          }
          case ObjetDonneesListe.ETypeCellule.HeureMinute: {
            const lHeureMinute = ObjetDate_1.GDate.parseHeureMinute(
              aParams.valeur,
            );
            return lHeureMinute && lHeureMinute.ok ? lHeureMinute : null;
          }
        }
        return aParams.valeur;
      }
      getMessageFormat(aParams) {
        switch (this.getTypeValeur(aParams)) {
          case ObjetDonneesListe.ETypeCellule.Date:
          case ObjetDonneesListe.ETypeCellule.DateCalendrier:
            return 'La date doit être de la forme dd/mm/aaaa';
          case ObjetDonneesListe.ETypeCellule.HeureMinute: {
            const lBorneDebut =
                '0' +
                'h' +
                '00',
              lBorneFin =
                '24' +
                'h' +
                '00';
            return ObjetChaine_1.GChaine.format(
              'L'heure doit être comprise entre %s et %s',
              [lBorneDebut, lBorneFin],
            );
          }
        }
        return null;
      }
      estUnDoublon(aDonnee) {
        if (this._indexsUnique && this._indexsUnique.existeIndex()) {
          const lNb = this.getNbrLignes();
          for (let J = 0; J < lNb; J++) {
            const lDonnee = this.Donnees.get(J);
            if (
              lDonnee !== aDonnee &&
              lDonnee.getEtat() !== Enumere_Etat_1.EGenreEtat.Suppression
            ) {
              if (this._indexsUnique.estDoublon(aDonnee, lDonnee)) {
                return true;
              }
            }
          }
        }
        return false;
      }
      _surCreation(aListeValeurs, aLigneCreation, aParams) {
        function _creerElement() {
          const lDonnee = new ObjetElement_1.ObjetElement();
          lDonnee.Numero = ObjetElement_1.ObjetElement.getNumeroCreation();
          return lDonnee;
        }
        function _ajouterElement(aElement, aLigne) {
          if (!this.estUnDoublon(aElement)) {
            aElement.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
            this.Donnees.addElement(aElement);
            this.trier();
            aLigne = this.getIndice(aElement);
          } else {
            this.Message = this.getMessageDoublon(aElement);
          }
          return aLigne;
        }
        this.Message = null;
        let lResult = -1;
        let lErreur_Format = -1;
        const lListeValeurs = [];
        let lParams;
        lListeValeurs[-1] = aListeValeurs[-1];
        lListeValeurs.data = aListeValeurs.data;
        for (let I = 0; I < aListeValeurs.length; I++) {
          if (aListeValeurs[I] !== null && aListeValeurs[I] !== undefined) {
            lParams = Object.assign(aParams, {
              colonne: I,
              ligne: -1,
              valeur: aListeValeurs[I],
            });
            lListeValeurs[I] = this.setValeur(lParams);
            if (lListeValeurs[I] === null || lListeValeurs[I] === undefined) {
              lErreur_Format = I;
            }
          }
        }
        if (lErreur_Format === -1) {
          const lAvecCreationDynamique = this.avecCreationElementsDynamique(
            lListeValeurs,
            aLigneCreation,
          );
          let lDonneeCreation;
          if (lAvecCreationDynamique) {
            lDonneeCreation = new ObjetListeElements_1.ObjetListeElements();
          } else {
            lDonneeCreation = _creerElement();
          }
          const lErreur = this.surCreation(
            lDonneeCreation,
            lListeValeurs,
            aLigneCreation,
          );
          if (lErreur === null || lErreur === undefined) {
            if (
              lAvecCreationDynamique &&
              lDonneeCreation instanceof ObjetListeElements_1.ObjetListeElements
            ) {
              if (lDonneeCreation.count() === 0) {
                this.Message = this.getMessageCreationImpossible(lErreur);
              } else {
                lDonneeCreation.parcourir((aElement) => {
                  lResult = _ajouterElement.call(this, aElement, lResult);
                });
              }
            } else {
              lResult = _ajouterElement.call(this, lDonneeCreation, lResult);
            }
          } else {
            this.Message = this.getMessageCreationImpossible(lErreur);
          }
        } else {
          lParams = this.paramsListe.getParams(lErreur_Format, lResult);
          this.Message = this.getMessageFormat(Object.assign(aParams, lParams));
        }
        return lResult;
      }
      _surEdition(aParams) {
        this.Message = null;
        const lValeur = this.setValeur(aParams);
        if (lValeur !== null && lValeur !== undefined) {
          const lValeurPrecedente = this.getValeur(aParams);
          const lErreur = this.surEdition(aParams, lValeur);
          const lSurEdition_after = (aParams, aError) => {
            if (aError === null || aError === undefined) {
              if (!this.estUnDoublon(aParams.article)) {
                if (this.enModification(aParams)) {
                  aParams.article.setEtat(this.getEtatSurEdition(aParams));
                }
                if (!aParams.sansTriDonnees) {
                  this.trier();
                }
                aParams.ligne = this.getIndice(aParams.article);
              } else {
                this.Message = this.getMessageDoublon(aParams.article);
                aParams.valeur = lValeurPrecedente;
                this.surEdition(aParams, lValeurPrecedente);
              }
            } else {
              this.Message = this.getMessageEditionImpossible(aParams, aError);
              aParams.valeur = lValeurPrecedente;
              this.surEdition(aParams, lValeurPrecedente);
            }
          };
          if (lErreur && lErreur instanceof Promise) {
            return lErreur.then((aError) => {
              if (aError && aError.annulerEdition) {
                aParams.valeur = lValeurPrecedente;
                return aError;
              }
              lSurEdition_after(aParams, aError);
            });
          } else {
            lSurEdition_after(aParams, lErreur);
          }
        } else {
          this.Message = this.getMessageFormat(aParams);
        }
      }
      _editionConfirmation(aParams) {
        this.Message = null;
        if (this.editionConfirmation(aParams)) {
          this.Message = this.getMessageEditionConfirmation(aParams);
          return true;
        }
      }
      _surSuppression(aLigne, aListeSuppressions) {
        if (aListeSuppressions && aListeSuppressions.parcourir) {
          aListeSuppressions.parcourir((aElement) => {
            this.surSuppression(aElement);
          });
        } else {
          const lDonnee = this.Donnees.get(aLigne);
          this.surSuppression(lDonnee);
        }
        this.trier();
        return -1;
      }
      _suppressionImpossible(aLigne, aListeSelections) {
        this.Message = null;
        const lDonnee = this.Donnees.get(aLigne);
        if (this.suppressionImpossible(lDonnee, aListeSelections)) {
          this.Message = this.getMessageSuppressionImpossible(
            lDonnee,
            aListeSelections,
          );
          return true;
        }
      }
      _suppressionConfirmation(aLigne, aListeSelections) {
        this.Message = null;
        const lDonnee = this.Donnees.get(aLigne);
        if (this.suppressionConfirmation(lDonnee, aListeSelections)) {
          this.Message = this.getMessageSuppressionConfirmation(
            lDonnee,
            aListeSelections,
          );
          return !!this.Message;
        }
      }
      estVisible(aLigne, aParams) {
        return this._estDonneesVisible(this.Donnees.get(aLigne), aParams);
      }
      trier() {
        if (this.avecTri() && this.Donnees) {
          const lColonne = this.triCourant
            ? this.triCourant.colonne.length === 1
              ? this.triCourant.colonne[0]
              : this.triCourant.colonne
            : null;
          const lGenre = this.triCourant
            ? this.triCourant.genre.length === 1
              ? this.triCourant.genre[0]
              : this.triCourant.genre
            : null;
          const lTri = this.getTri(lColonne, lGenre);
          if (lTri) {
            this.Donnees.setTri(lTri);
          }
          this.Donnees.trier();
        }
      }
      getNbrLignes() {
        return this.Donnees ? this.Donnees.count() : 0;
      }
      creerIndexUnique(aChamps) {
        if (!this._indexsUnique) {
          this._indexsUnique = new ObjetIndexsUnique_1.ObjetIndexsUnique();
        }
        this._indexsUnique.ajouterIndex(aChamps);
      }
      calculCacheListeFilsDirectsDePere() {
        this.mapPereFils = new Map();
        this.Donnees.parcourir((aArticle, aIndex) => {
          if (aArticle) {
            if (!this.mapPereFils.has(aArticle)) {
              this.mapPereFils.set(aArticle, []);
            }
            if (aArticle.pere) {
              if (!this.mapPereFils.has(aArticle.pere)) {
                this.mapPereFils.set(aArticle.pere, []);
              }
              let lParamsFils = this.mapPereFils.get(aArticle.pere);
              lParamsFils.push({ ligne: aIndex, article: aArticle });
            }
          }
        });
      }
      avecFilsVisibleDePere(aArticlePere) {
        return this._getArrayFilsVisiblesDePere(aArticlePere, true).length > 0;
      }
      getArrayFilsVisiblesDePere(aArticlePere) {
        return this._getArrayFilsVisiblesDePere(aArticlePere, false);
      }
      _getArrayFilsVisiblesDePere(aArticlePere, aArretSurPremierFils) {
        let lResult;
        if (aArticlePere) {
          if (!this.mapPereFils) {
            this.calculCacheListeFilsDirectsDePere();
          }
          const lResultTous = this.mapPereFils.get(aArticlePere);
          if (lResultTous) {
            lResult = [];
            lResultTous.every((aFils) => {
              if (this._getVisible(aFils.article)) {
                lResult.push(aFils);
                if (aArretSurPremierFils) {
                  return false;
                }
              }
              return true;
            });
            return lResult;
          }
        }
        lResult = [];
        this.Donnees.parcourir((aArticle, aIndex) => {
          if (
            ((!aArticlePere && !aArticle.pere) ||
              aArticle.pere === aArticlePere) &&
            this._getVisible(aArticle)
          ) {
            lResult.push({ article: this.Donnees.get(aIndex), ligne: aIndex });
            if (aArretSurPremierFils) {
              return false;
            }
          }
        });
        return lResult;
      }
      _getEtatCocheSimple(aParams) {
        return this._getValeur(aParams);
      }
      getEtatCocheSelonFils(
        aElementPere,
        aParams,
        aMethodeAvecEdition,
        aPourCocheTout,
      ) {
        if (
          aElementPere &&
          (!aElementPere.estUnDeploiement ||
            !this.estCocheSelonFilsSurLigneDeploiement(aElementPere))
        ) {
          return this._getEtatCocheSimple(aParams);
        }
        let lEtat = ObjetDonneesListe.EGenreCoche.Aucune,
          lInit = false;
        let lArrayParcours = [];
        if (aPourCocheTout) {
          this.Donnees.parcourir((aArticle, aIndex) => {
            if (this._getVisible(aArticle)) {
              lArrayParcours.push({ article: aArticle, ligne: aIndex });
            }
          });
        } else {
          lArrayParcours = this.getArrayFilsVisiblesDePere(aElementPere);
        }
        lArrayParcours.every((aElementParcours) => {
          const lParams = Object.assign({}, aParams, aElementParcours, {
            pourCocheTout: !!aPourCocheTout,
          });
          if (
            (aMethodeAvecEdition &&
              MethodesObjet_1.MethodesObjet.isFunction(aMethodeAvecEdition) &&
              aMethodeAvecEdition(lParams)) ||
            this.avecEdition(lParams)
          ) {
            if (this.estCocheSelonFilsSurLigneDeploiement(lParams.article)) {
              const lEtatFils = this.getEtatCocheSelonFils(
                lParams.article,
                lParams,
                aMethodeAvecEdition,
              );
              if (
                lEtatFils === ObjetDonneesListe.EGenreCoche.Verte &&
                lEtat === ObjetDonneesListe.EGenreCoche.Aucune
              ) {
                lEtat = lInit
                  ? ObjetDonneesListe.EGenreCoche.Grise
                  : ObjetDonneesListe.EGenreCoche.Verte;
              } else if (lEtatFils === ObjetDonneesListe.EGenreCoche.Grise) {
                lEtat = ObjetDonneesListe.EGenreCoche.Grise;
              } else if (
                lEtatFils === ObjetDonneesListe.EGenreCoche.Aucune &&
                lEtat === ObjetDonneesListe.EGenreCoche.Verte
              ) {
                lEtat = ObjetDonneesListe.EGenreCoche.Grise;
              }
            } else {
              const lValeur = this._getEtatCocheSimple(lParams);
              if (
                (!lValeur ||
                  lValeur === ObjetDonneesListe.EGenreCoche.Aucune) &&
                lEtat === ObjetDonneesListe.EGenreCoche.Verte
              ) {
                lEtat = ObjetDonneesListe.EGenreCoche.Grise;
              }
              if (
                (lValeur === true ||
                  lValeur === ObjetDonneesListe.EGenreCoche.Verte) &&
                lEtat === ObjetDonneesListe.EGenreCoche.Aucune
              ) {
                lEtat = lInit
                  ? ObjetDonneesListe.EGenreCoche.Grise
                  : ObjetDonneesListe.EGenreCoche.Verte;
              }
            }
            if (lEtat === ObjetDonneesListe.EGenreCoche.Grise) {
              return false;
            }
            lInit = true;
          }
          return true;
        });
        return lEtat;
      }
      estCocheSelonFilsSurLigneDeploiement(aArticle) {
        return true;
      }
      getTableauLignesModifieesCocheTitre(aColonne, aValeur) {
        const T = [];
        const lNb = this.Donnees.count();
        for (let i = 0; i < lNb; i++) {
          if (this._getVisible(this.Donnees.get(i))) {
            T.push(i);
          }
        }
        return T;
      }
      surEditionCocheTitre(aListeParamsCellule, aValeur) {
        if (!!aListeParamsCellule) {
          for (let i = 0; i < aListeParamsCellule.length; i++) {
            const lErreur = this.surEdition(aListeParamsCellule[i], aValeur);
            if (lErreur === null || lErreur === undefined) {
              if (this.enModification(aListeParamsCellule[i])) {
                aListeParamsCellule[i].article.setEtat(
                  this.getEtatSurEdition(aListeParamsCellule[i]),
                );
              }
            }
          }
        }
        return null;
      }
      rechercheTexteForcerLignePrecSuivVisible(
        aParamsLigneVisible,
        aParamsLignePrecSuivCachee,
      ) {
        return false;
      }
      getId(aNumeroColonne) {
        return this.paramsListe.getIdsColonnes()[aNumeroColonne];
      }
      getNumeroColonneDId(aId) {
        return this.paramsListe.getIdsColonnes().indexOf(aId);
      }
      avecSurvolCelluleVisible(aParams) {
        return this.options.avecSurvolCelluleVisible;
      }
      estConcerneParSurvolCelluleVisible(aParams, aParamsCelluleHover) {
        if (aParams.ligne < 0) {
          return false;
        }
        if (
          this.selectionParCellule(
            aParamsCelluleHover.colonne,
            aParamsCelluleHover.article,
          )
        ) {
          return (
            aParamsCelluleHover.ligne === aParams.ligne &&
            aParamsCelluleHover.colonne === aParams.colonne
          );
        }
        if (aParams.ligne >= 0 && aParams.ligne === aParamsCelluleHover.ligne) {
          return true;
        }
        if (
          this.options.avecMultiSelectionSurLigneFusion &&
          aParams.ligne >= 0 &&
          aParamsCelluleHover.ligne >= 0 &&
          aParams.ligne !== aParamsCelluleHover.ligne
        ) {
          const lFusionHover =
            this.lignesFusionParColonne[
              aParamsCelluleHover.colonne + '_' + aParamsCelluleHover.ligne
            ];
          if (
            lFusionHover &&
            lFusionHover.lignesCumuls &&
            lFusionHover.lignesCumuls[aParams.ligne]
          ) {
            return true;
          }
          const lFusionCourant =
            this.lignesFusionParColonne[aParams.colonne + '_' + aParams.ligne];
          if (
            lFusionCourant &&
            lFusionCourant.lignesCumuls &&
            lFusionCourant.lignesCumuls[aParamsCelluleHover.ligne]
          ) {
            return true;
          }
        }
        return false;
      }
      avecDessinHover(aParams) {
        return false;
      }
      estConcerneParDessinHover(aParams, aParamsCelluleHover) {
        return false;
      }
      construireHtmlHover(aParams) {
        if (!aParams.node) {
          return '';
        }
        const H = [];
        const lHeight = 22;
        const lWidthCorpsFleche = 10;
        const lWidthPointeFleche = 11;
        const lHeightCorpsFleche = 10;
        const lWidth = lWidthCorpsFleche + lWidthPointeFleche;
        const lCouleurBord = 'white';
        const lCouleur = GCouleur.selection.fond;
        let lStyle = '';
        switch (aParams.direction) {
          case ObjetDonneesListe.TypeDirectionElementSurvolCellule.droite:
          case ObjetDonneesListe.TypeDirectionElementSurvolCellule.gauche:
            lStyle +=
              'top:' +
              Math.round($(aParams.node).height() / 2 - lHeight / 2) +
              'px;';
            break;
          case ObjetDonneesListe.TypeDirectionElementSurvolCellule.haut:
            lStyle += 'top:0px;';
            break;
          case ObjetDonneesListe.TypeDirectionElementSurvolCellule.bas:
            lStyle += 'bottom:0px;';
            break;
        }
        switch (aParams.direction) {
          case ObjetDonneesListe.TypeDirectionElementSurvolCellule.droite:
            lStyle += 'left: -' + (lWidth + 1) + 'px;';
            break;
          case ObjetDonneesListe.TypeDirectionElementSurvolCellule.gauche:
            lStyle += 'right: -' + (lWidth + 1) + 'px;';
            break;
          case ObjetDonneesListe.TypeDirectionElementSurvolCellule.haut:
          case ObjetDonneesListe.TypeDirectionElementSurvolCellule.bas:
            lStyle +=
              'left:' +
              Math.round($(aParams.node).width() / 2 - lWidth / 2) +
              'px;';
            break;
        }
        H.push(
          '<div class="',
          aParams.classHover,
          ' dessinHoverListe_',
          aParams.direction,
          '" style="',
          lStyle,
          '">',
        );
        H.push(
          '<svg xmlns="http://www.w3.org/2000/svg" width="',
          lWidth + 1,
          '" height="',
          lHeight + 1,
          '">',
          ObjetChaine_1.GChaine.format(
            '<line x1="0" y1="%0:s" x2="%1:s" y2="%0:s" stroke="%3:s" stroke-width="%2:s" />',
            [lHeight / 2, lWidthCorpsFleche, lHeightCorpsFleche, lCouleurBord],
          ),
          ObjetChaine_1.GChaine.format(
            '<polygon points="%2:s 0, %3:s %1:s, %2:s %0:s" fill="%4:s" stroke-width="1" stroke="%5:s"/>',
            [
              lHeight,
              lHeight / 2,
              lWidthCorpsFleche,
              lWidth,
              lCouleur,
              lCouleurBord,
            ],
          ),
          ObjetChaine_1.GChaine.format(
            '<line x1="1" y1="%0:s" x2="%1:s" y2="%0:s" stroke="%3:s" stroke-width="%2:s" />',
            [
              lHeight / 2,
              lWidthCorpsFleche + 1,
              lHeightCorpsFleche - 2,
              lCouleur,
            ],
          ),
          '</svg>',
        );
        H.push('</div>');
        if (
          aParams.direction ===
            ObjetDonneesListe.TypeDirectionElementSurvolCellule.droite ||
          aParams.direction ===
            ObjetDonneesListe.TypeDirectionElementSurvolCellule.gauche
        ) {
          H.push(
            '<div class="' +
              aParams.classHover +
              ' dessinHoverListe_cadre"></div>',
          );
        }
        return H.join('');
      }
      estCelluleCopie(aParams) {
        return false;
      }
      surCopier(aParams) {
        return false;
      }
      surColler(aParams) {
        return false;
      }
      getHauteurMinCellule(aParams) {
        return this.options.hauteurMinCellule;
      }
      getHauteurMinContenuCellule(aParams) {
        return this.options.hauteurMinContenuCellule;
      }
      getParametresSelectionnerCelluleSuivanteFinEdition(aParams) {
        return {
          orientationVerticale: true,
          avecCelluleEditable: true,
          entrerEdition: true,
          avecSelection: true,
        };
      }
      setTriCourantDeListe(aTri) {
        this.triCourant = aTri;
      }
      _getClassCelluleConteneur(aParams) {
        return this.getClassCelluleConteneur(aParams);
      }
      _setParamsListe(aParams) {
        Object.assign(this.paramsListe, aParams);
        return this;
      }
      actualiserListe(aParamsActualiser) {
        this.paramsListe.actualiserListe(aParamsActualiser);
      }
      _estDonneesVisible(aDonnees, aParams) {
        if (!aDonnees) {
          return false;
        }
        if (
          aDonnees.pere &&
          this.avecDeploiement() &&
          (this._articleDeploye(aDonnees.pere) === false ||
            !this._estDonneesVisible(aDonnees.pere))
        ) {
          return false;
        }
        if (
          aDonnees.getEtat() === Enumere_Etat_1.EGenreEtat.Suppression ||
          !this._getVisible(aDonnees, aParams)
        ) {
          return false;
        }
        return true;
      }
      _articleDeploye(aArticle) {
        if (
          this.options.ignorerDeploiementSurRechercheTexte &&
          (this.enConstruction_cacheRechercheTexte ||
            this.paramsListe.avecRechercheTexteEnCours)
        ) {
          return true;
        }
        return !!(aArticle && aArticle.estDeploye !== false);
      }
    }
    exports.ObjetDonneesListe = ObjetDonneesListe;
    ObjetDonneesListe.hauteurMinCellule = 40;
    ObjetDonneesListe.EGenreCoche = { Verte: true, Grise: null, Aucune: false };
    (function (ObjetDonneesListe) {
      let ECouleurCellule;
      (function (ECouleurCellule) {
        ECouleurCellule[(ECouleurCellule['Blanc'] = 0)] = 'Blanc';
        ECouleurCellule[(ECouleurCellule['Gris'] = 1)] = 'Gris';
        ECouleurCellule[(ECouleurCellule['Deploiement'] = 2)] = 'Deploiement';
        ECouleurCellule[(ECouleurCellule['Fixe'] = 3)] = 'Fixe';
        ECouleurCellule[(ECouleurCellule['Total'] = 4)] = 'Total';
      })(
        (ECouleurCellule =
          ObjetDonneesListe.ECouleurCellule ||
          (ObjetDonneesListe.ECouleurCellule = {})),
      );
      let TypeDirectionElementSurvolCellule;
      (function (TypeDirectionElementSurvolCellule) {
        TypeDirectionElementSurvolCellule['haut'] = 'haut';
        TypeDirectionElementSurvolCellule['bas'] = 'bas';
        TypeDirectionElementSurvolCellule['gauche'] = 'gauche';
        TypeDirectionElementSurvolCellule['droite'] = 'droite';
      })(
        (TypeDirectionElementSurvolCellule =
          ObjetDonneesListe.TypeDirectionElementSurvolCellule ||
          (ObjetDonneesListe.TypeDirectionElementSurvolCellule = {})),
      );
      let ETypeCellule;
      (function (ETypeCellule) {
        ETypeCellule[(ETypeCellule['Texte'] = 0)] = 'Texte';
        ETypeCellule[(ETypeCellule['ZoneTexte'] = 1)] = 'ZoneTexte';
        ETypeCellule[(ETypeCellule['Html'] = 2)] = 'Html';
        ETypeCellule[(ETypeCellule['Date'] = 3)] = 'Date';
        ETypeCellule[(ETypeCellule['Note'] = 4)] = 'Note';
        ETypeCellule[(ETypeCellule['Coche'] = 5)] = 'Coche';
        ETypeCellule[(ETypeCellule['CocheDeploiement'] = 6)] =
          'CocheDeploiement';
        ETypeCellule[(ETypeCellule['Image'] = 7)] = 'Image';
        ETypeCellule[(ETypeCellule['Icon'] = 8)] = 'Icon';
        ETypeCellule[(ETypeCellule['DateCalendrier'] = 9)] = 'DateCalendrier';
        ETypeCellule[(ETypeCellule['HeureMinute'] = 10)] = 'HeureMinute';
      })(
        (ETypeCellule =
          ObjetDonneesListe.ETypeCellule ||
          (ObjetDonneesListe.ETypeCellule = {})),
      );
      let typeCelluleTotal;
      (function (typeCelluleTotal) {
        typeCelluleTotal['defaut'] = 'defaut';
        typeCelluleTotal['fond'] = 'fond';
        typeCelluleTotal['editable'] = 'editable';
      })(
        (typeCelluleTotal =
          ObjetDonneesListe.typeCelluleTotal ||
          (ObjetDonneesListe.typeCelluleTotal = {})),
      );
    })(
      ObjetDonneesListe || (exports.ObjetDonneesListe = ObjetDonneesListe = {}),
    );
  },
  fn: 'objetdonneesliste.js',
});