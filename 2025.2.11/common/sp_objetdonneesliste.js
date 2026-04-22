IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDonneesListe = void 0;
    const ObjetStyle_1 = require('ObjetStyle');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetIndexsUnique_1 = require('ObjetIndexsUnique');
    const ObjetDonneesListeBase_1 = require('ObjetDonneesListeBase');
    const ObjetChaine_1 = require('ObjetChaine');
    const MethodesObjet_1 = require('MethodesObjet');
    const UtilitaireDuree_1 = require('UtilitaireDuree');
    const TypeNote_1 = require('TypeNote');
    const AccessApp_1 = require('AccessApp');
    class ObjetDonneesListe extends ObjetDonneesListeBase_1.ObjetDonneesListeBase {
      constructor(aDonnees) {
        super(aDonnees);
        this.triCourant = null;
        this.setOptions({
          selectionParCellule: false,
          avecEdition: true,
          avecSuppression: true,
          editionApresSelection: true,
          editionSurSelectionApresFinEdition: false,
          avecEvnt_Edition: false,
          avecEvnt_ApresEdition: false,
          avecEvnt_ApresEditionValidationSansModification: false,
          avecEvnt_Suppression: false,
          avecEvnt_ApresSuppression: false,
          avecMultiSelectionSurLigneFusion: true,
          avecCelluleSuivanteSurFinEdition: false,
          avecEtatSaisie: true,
          avecInterruptionSuppression: false,
          avecTrimSurEdition: false,
          avecNavigationClavierFlechesEnEdition: false,
          avecContenuTronque: false,
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
        });
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
      avecEtatSaisie(aParams) {
        return this.options.avecEtatSaisie;
      }
      creerIndexUnique(aChamps) {
        if (!this._indexsUnique) {
          this._indexsUnique = new ObjetIndexsUnique_1.ObjetIndexsUnique();
        }
        this._indexsUnique.ajouterIndex(aChamps);
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
      avecContenuTronque(aParams) {
        return this.options.avecContenuTronque;
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
      avecEvenementEdition(aParams) {
        return this.options.avecEvnt_Edition;
      }
      avecEvenementSuppression(aParams) {
        return this.options.avecEvnt_Suppression;
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
      estCelluleWAIRowHeader(aParams) {
        return false;
      }
      getWAIInputEdition(aParams) {
        return '';
      }
      avecTrimSurEdition(aParams) {
        return this.options.avecTrimSurEdition;
      }
      autoriserChaineVideSurEdition(aParams) {
        return false;
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
      initialiserObjetGraphique(aParams, aInstance) {
        return null;
      }
      setDonneesObjetGraphique(aParams, aInstance) {
        return null;
      }
      getCouleurCellule(aParams, aCouleurCellule) {
        return undefined;
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
      _getStyleTotal(aParams) {
        const lCoul = (0, AccessApp_1.getApp)().getCouleur();
        switch (aParams.typeCellule) {
          case ObjetDonneesListe.typeCelluleTotal.defaut:
            return (
              ObjetStyle_1.GStyle.composeCouleurFond(lCoul.liste.total.fond) +
              ObjetStyle_1.GStyle.composeCouleurTexte(lCoul.liste.total.texte)
            );
          case ObjetDonneesListe.typeCelluleTotal.fond:
            return '';
          case ObjetDonneesListe.typeCelluleTotal.editable:
            return ObjetStyle_1.GStyle.composeCouleurFond(
              lCoul.liste.editable.fond,
            );
          case ObjetDonneesListe.typeCelluleTotal.alterne:
            return (
              ObjetStyle_1.GStyle.composeCouleurFond(
                lCoul.liste.moyenneAlternee2.fond,
              ) + ObjetStyle_1.GStyle.composeCouleurTexte(lCoul.noir)
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
          (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
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
      getListeSupprimables(aListeSelections, aParamsCellule) {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        aListeSelections.parcourir((aElement) => {
          if (this.avecSuppression(aParamsCellule)) {
            lListe.addElement(aElement);
          }
        });
        return lListe;
      }
      enModification(aParams) {
        return true;
      }
      getControleCaracteresInput(aParams) {
        return null;
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
      getTailleTexteMax(aParams) {
        return 0;
      }
      _getTailleTexteMax(aParams) {
        switch (this.getTypeValeur(aParams)) {
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule.Texte:
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule
            .ZoneTexte:
            return this.getTailleTexteMax(aParams);
          default:
            return 0;
        }
      }
      _initialiserObjetGraphique(aParams, aInstance) {
        return this.initialiserObjetGraphique(aParams, aInstance);
      }
      _setDonneesObjetGraphique(aParams, aInstance) {
        return this.setDonneesObjetGraphique(aParams, aInstance);
      }
      getMessage() {
        return this.Message;
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
      setTriCourantDeListe(aTri) {
        this.triCourant = aTri;
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
      getMessageFormat(aParams) {
        switch (this.getTypeValeur(aParams)) {
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule.Date:
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule
            .DateCalendrier:
            return 'La date doit être de la forme dd/mm/aaaa';
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule
            .HeureMinute: {
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
      getValeurParDefaut(aParams) {
        return '';
      }
      getOptionsNote(aParams) {
        return { afficherAvecVirgule: true, hintSurErreur: false };
      }
      _getValeur(aParams) {
        const lValeur =
          aParams.ligne === null || aParams.ligne === undefined
            ? this.getValeurParDefaut(aParams)
            : this.getValeur(aParams);
        switch (this.getTypeValeur(aParams)) {
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule.Texte:
            return lValeur;
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule
            .ZoneTexte:
            return lValeur;
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule.Html:
            return lValeur;
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule.Date:
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule
            .DateCalendrier:
            return this.getChaineDeDate(lValeur, aParams);
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule.Coche:
            return lValeur;
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule
            .CocheDeploiement:
            return '';
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule.Icon:
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule.Image:
            return lValeur;
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule
            .HeureMinute:
            if (MethodesObjet_1.MethodesObjet.isDate(lValeur)) {
              return ObjetDate_1.GDate.formatDate(lValeur, '%hh%sh%mm');
            } else if (MethodesObjet_1.MethodesObjet.isNumber(lValeur)) {
              return UtilitaireDuree_1.TUtilitaireDuree.dureeEnHeuresMinutes(
                lValeur,
              ).toString('%hh%sh%mm');
            }
            return '';
          case ObjetDonneesListeBase_1.ObjetDonneesListeBase.ETypeCellule
            .Note: {
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
      getParametresSelectionnerCelluleSuivanteFinEdition(aParams) {
        return {
          orientationVerticale: true,
          avecCelluleEditable: true,
          entrerEdition: true,
          avecSelection: true,
        };
      }
    }
    exports.ObjetDonneesListe = ObjetDonneesListe;
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
      let typeCelluleTotal;
      (function (typeCelluleTotal) {
        typeCelluleTotal['defaut'] = 'defaut';
        typeCelluleTotal['fond'] = 'fond';
        typeCelluleTotal['editable'] = 'editable';
        typeCelluleTotal['alterne'] = 'alterne';
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