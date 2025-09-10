IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TUtilitaireInformations = TUtilitaireInformations;
    const ObjetDroitsPN_1 = require('ObjetDroitsPN');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetChaine_1 = require('ObjetChaine');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const Enumere_TriElement_1 = require('Enumere_TriElement');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    const TypeEnsembleNombre_1 = require('TypeEnsembleNombre');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const TypeGenreReponseInternetActualite_1 = require('TypeGenreReponseInternetActualite');
    const UtilitaireListePeriodes_1 = require('UtilitaireListePeriodes');
    const AccessApp_1 = require('AccessApp');
    require('InfoSondage.css');
    function TUtilitaireInformations() {}
    TUtilitaireInformations.creerActualiteDiffusionDesResultatsSondage =
      function (aSondage, aListeCategories, aListePiecesJointesResultats) {
        let lCategorieParDefaut = null;
        if (!!aListeCategories) {
          aListeCategories.parcourir((D) => {
            if (!!D && D.estDefaut) {
              lCategorieParDefaut = D;
              return false;
            }
          });
          if (!lCategorieParDefaut) {
            lCategorieParDefaut = aListeCategories.getPremierElement();
          }
        }
        const lNouvelleActualite =
          TUtilitaireInformations.initialiserNouveauItem({
            categorie: lCategorieParDefaut,
          });
        lNouvelleActualite.setLibelle(
          'Résultats du sondage "%s"' || ''],
          ),
        );
        lNouvelleActualite.publie = true;
        lNouvelleActualite.estUneDiffusionDeResultatsSondage = true;
        const lStrTypeSondage = aSondage.reponseAnonyme
          ? 'Sondage anonyme'
          : 'Sondage nominatif';
        const lMessageNouvelleInformation =
          'Veuillez trouver ci-joint les résultats du %s "%s".', aSondage.getLibelle() || ''],
          );
        const lPremiereQuestion =
          lNouvelleActualite.listeQuestions.getPremierElement();
        lPremiereQuestion.texte = lMessageNouvelleInformation;
        if (!lPremiereQuestion.listePiecesJointes) {
          lPremiereQuestion.listePiecesJointes =
            new ObjetListeElements_1.ObjetListeElements();
        }
        aListePiecesJointesResultats.parcourir((D) => {
          lPremiereQuestion.listePiecesJointes.addElement(D);
        });
        return lNouvelleActualite;
      };
    TUtilitaireInformations.getListePiecesJointesDActualite = function (
      aActualite,
    ) {
      const lListePiecesJointes = new ObjetListeElements_1.ObjetListeElements();
      if (!!aActualite && !!aActualite.listeQuestions) {
        aActualite.listeQuestions.parcourir((aQuestion) => {
          if (!!aQuestion && !!aQuestion.listePiecesJointes) {
            aQuestion.listePiecesJointes.parcourir((aPJQuestion) => {
              lListePiecesJointes.addElement(aPJQuestion);
            });
          }
        });
      }
      return lListePiecesJointes;
    };
    function _calculeDateFinSondage(aDate) {
      let i = 0;
      let lDate = new Date(aDate.getTime());
      do {
        lDate = ObjetDate_1.GDate.getJourSuivant(lDate);
        if (
          !GParametres.JoursFeries.getValeur(
            ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
              IE.Cycles.dateDebutPremierCycle(),
              aDate,
            ) + 1,
          ) &&
          ObjetDate_1.GDate.estUnJourOuvre(lDate)
        ) {
          i++;
        }
      } while (i < 15 && lDate < ObjetDate_1.GDate.derniereDate);
      return lDate;
    }
    TUtilitaireInformations.appliquerModeleSurExistant = function (aParam) {
      const lModele = aParam.modele;
      const lInfoSond = aParam.infoSond;
      if (lInfoSond === null || lInfoSond === undefined) {
        return null;
      }
      if (lModele === null || lModele === undefined) {
        return lInfoSond;
      }
      if (lInfoSond.estVerrouille) {
        return lInfoSond;
      }
      if (lModele.estModele !== true) {
      }
      if (
        lInfoSond.estInformation !== lModele.estInformation ||
        lInfoSond.estSondage !== lModele.estSondage
      ) {
        return lInfoSond;
      }
      lInfoSond.setLibelle(lModele.getLibelle());
      lInfoSond.categorie = lModele.categorie;
      lInfoSond.estModele = false;
      if (lModele.listeQuestions) {
        lInfoSond.listeQuestions = _copierQuestions.call(
          this,
          lModele.listeQuestions,
        );
      }
      lInfoSond.reponseAnonyme = lModele.reponseAnonyme;
      return lInfoSond;
    };
    TUtilitaireInformations.initialiserNouveauItem = function (aParam) {
      const lInformation = aParam.actualite
        ? new ObjetElement_1.ObjetElement(
            '%s (copie de)'],
            ),
          )
        : new ObjetElement_1.ObjetElement('');
      let lGenreReponse = aParam.genreReponse
        ? aParam.genreReponse
        : TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .AvecAR;
      const lForcerAR = (0, AccessApp_1.getApp)().droits.get(
        ObjetDroitsPN_1.TypeDroits.fonctionnalites.forcerARInfos,
      );
      if (
        lGenreReponse ===
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .SansAR &&
        lForcerAR === true
      ) {
        lGenreReponse =
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .AvecAR;
      }
      lInformation.categorie = !aParam.categorie
        ? !aParam.actualite
          ? (0, AccessApp_1.getApp)()
              .getEtatUtilisateur()
              .listeCategories.get(aParam.indiceCategorieParDefaut)
          : aParam.actualite.categorie
        : aParam.categorie;
      lInformation.auteur = GEtatUtilisateur.getUtilisateur().getLibelle();
      lInformation.reponseAnonyme = false;
      lInformation.estInformation = [
        TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
          .AvecAR,
        TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
          .SansAR,
      ].includes(lGenreReponse);
      lInformation.estSondage = !lInformation.estInformation;
      lInformation.date = '';
      lInformation.publie =
        aParam.publie !== null && aParam.publie !== undefined
          ? aParam.publie
          : !aParam.actualite;
      lInformation.estModele = aParam.estModele === true;
      const lDateDebut = ObjetDate_1.GDate.getDateCourante();
      const lDateFin = lInformation.estInformation
        ? ObjetDate_1.GDate.derniereDate
        : _calculeDateFinSondage(lDateDebut);
      lInformation.dateDebut =
        aParam.actualite && aParam.actualite.dateDebut
          ? aParam.actualite.dateDebut
          : lDateDebut;
      lInformation.dateFin = aParam.actualite
        ? aParam.actualite.dateFin
        : lDateFin;
      lInformation.avecReponse = TUtilitaireInformations.avecReponse;
      lInformation.aToutRepondu = TUtilitaireInformations.aToutRepondu;
      lInformation.lue = false;
      lInformation.public = new ObjetElement_1.ObjetElement('');
      lInformation.genrePublic = -1;
      lInformation.visible = true;
      if (aParam.actualite && aParam.actualite.listeQuestions) {
        lInformation.listeQuestions = _copierQuestions.call(
          this,
          aParam.actualite.listeQuestions,
        );
      } else {
        lInformation.listeQuestions =
          new ObjetListeElements_1.ObjetListeElements();
        lInformation.listeQuestions.addElement(
          TUtilitaireInformations.creerQuestionOuTexteSondage({
            genreReponse: lGenreReponse,
          }),
        );
      }
      lInformation.estVerrouille = false;
      lInformation.nombreDestinataire = aParam.actualite
        ? aParam.actualite.nombreDestinataire
        : 0;
      lInformation.nomDestinataire = aParam.actualite
        ? aParam.actualite.nomDestinataire
        : 'Aucun';
      lInformation.detailPublic = aParam.actualite
        ? aParam.actualite.detailPublic
        : IE.jsx.str(
            'p',
            null,
            'Attention : il n'y a pas de destinataire',
          );
      lInformation.avecModificationPublic = !!(
        aParam.actualite || aParam.listePublic
      );
      lInformation.avecElevesRattaches = false;
      lInformation.genresPublicEntite = aParam.actualite
        ? MethodesObjet_1.MethodesObjet.dupliquer(
            aParam.actualite.genresPublicEntite,
          )
        : new TypeEnsembleNombre_1.TypeEnsembleNombre();
      lInformation.listePublicEntite = aParam.actualite
        ? MethodesObjet_1.MethodesObjet.dupliquer(
            aParam.actualite.listePublicEntite,
          )
        : new ObjetListeElements_1.ObjetListeElements();
      if (aParam.listePublic && aParam.genresPublic) {
        lInformation.listePublicEntite =
          new ObjetListeElements_1.ObjetListeElements();
        lInformation.listePublicIndividu =
          new ObjetListeElements_1.ObjetListeElements();
        if (
          aParam.genresPublic.length > 0 &&
          aParam.genresRessourceAffDestinataire
        ) {
          if (
            aParam.genresRessourceAffDestinataire.includes(
              Enumere_Ressource_1.EGenreRessource.Classe,
            ) ||
            aParam.genresRessourceAffDestinataire.includes(
              Enumere_Ressource_1.EGenreRessource.Groupe,
            )
          ) {
            lInformation.listePublicEntite = aParam.listePublic;
          } else {
            lInformation.listePublicIndividu = aParam.listePublic;
          }
        }
      } else {
        lInformation.listePublicEntite = aParam.actualite
          ? MethodesObjet_1.MethodesObjet.dupliquer(
              aParam.actualite.listePublicEntite,
            )
          : new ObjetListeElements_1.ObjetListeElements();
        lInformation.listePublicIndividu = aParam.actualite
          ? MethodesObjet_1.MethodesObjet.dupliquer(
              aParam.actualite.listePublicIndividu,
            )
          : new ObjetListeElements_1.ObjetListeElements();
      }
      lInformation.getDate = TUtilitaireInformations.getDate.bind(lInformation);
      return lInformation;
    };
    TUtilitaireInformations.creerQuestionOuTexteSondage = function (aParams) {
      const lParams = aParams || {};
      const lRang = lParams.rang ? lParams.rang : 1;
      const lGenreReponse =
        !lParams.genreReponse ||
        (lParams.genreReponse ===
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .SansAR &&
          (0, AccessApp_1.getApp)().droits.get(
            ObjetDroitsPN_1.TypeDroits.fonctionnalites.forcerARInfos,
          ))
          ? TypeGenreReponseInternetActualite_1
              .TypeGenreReponseInternetActualite.AvecAR
          : lParams.genreReponse;
      const lRangElement = lParams.rangElement ? lParams.rangElement : lRang;
      let lLibelle;
      if (
        !!aParams.genreReponse &&
        aParams.genreReponse ===
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .SansReponse
      ) {
        lLibelle = 'Texte %d';
      } else {
        lLibelle = 'Question %d';
      }
      const lResult = new ObjetElement_1.ObjetElement(lLibelle);
      lResult.rang = lRang;
      lResult.indice = lRangElement;
      lResult.genreReponse = lGenreReponse;
      lResult.texte = '';
      lResult.titre = '';
      lResult.tailleReponse = 200;
      lResult.listePiecesJointes =
        new ObjetListeElements_1.ObjetListeElements();
      lResult.listeChoix = new ObjetListeElements_1.ObjetListeElements();
      lResult.reponse = new ObjetElement_1.ObjetElement();
      if (
        lGenreReponse ===
        TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
          .Textuelle
      ) {
        lResult.reponse.valeurReponse = '';
      } else if (
        [
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .ChoixMultiple,
          TypeGenreReponseInternetActualite_1.TypeGenreReponseInternetActualite
            .ChoixUnique,
        ].includes(lGenreReponse)
      ) {
        lResult.reponse.valeurReponse =
          new TypeEnsembleNombre_1.TypeEnsembleNombre();
      }
      lResult.reponse.avecReponse = false;
      return lResult;
    };
    TUtilitaireInformations.getDate = function () {
      return (
        'du' +
        ObjetDate_1.GDate.formatDate(this.dateDebut, ' %JJ/%MM/%AAAA ') +
        'au' +
        ObjetDate_1.GDate.formatDate(this.dateFin, ' %JJ/%MM/%AAAA')
      );
    };
    TUtilitaireInformations.avecReponse = function () {
      let lResult = false;
      for (let i = 0; i < this.listeQuestions.count() && !lResult; i++) {
        const lQuestion = this.listeQuestions.get(i);
        lResult =
          lQuestion.reponse.avecReponse ||
          lQuestion.genreReponse ===
            TypeGenreReponseInternetActualite_1
              .TypeGenreReponseInternetActualite.SansAR;
      }
      return lResult;
    };
    TUtilitaireInformations.aToutRepondu = function () {
      let lResult = true;
      for (let i = 0; i < this.listeQuestions.count() && lResult; i++) {
        const lQuestion = this.listeQuestions.get(i);
        lResult =
          lQuestion.reponse.avecReponse ||
          [
            TypeGenreReponseInternetActualite_1
              .TypeGenreReponseInternetActualite.SansAR,
            TypeGenreReponseInternetActualite_1
              .TypeGenreReponseInternetActualite.SansReponse,
          ].includes(lQuestion.genreReponse);
      }
      return lResult;
    };
    function _copierQuestions(aListeQuestions) {
      const lResult = new ObjetListeElements_1.ObjetListeElements();
      for (let i = 0; i < aListeQuestions.count(); i++) {
        if (aListeQuestions.existe(i)) {
          const lElement = _copieQuestion(aListeQuestions.get(i));
          lElement.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
          lResult.addElement(lElement);
        }
      }
      return lResult;
    }
    function _copieQuestion(aQuestion) {
      const lNouvelleQuestion =
        TUtilitaireInformations.creerQuestionOuTexteSondage(aQuestion);
      lNouvelleQuestion.setLibelle(aQuestion.getLibelle());
      lNouvelleQuestion.rang = aQuestion.rang;
      lNouvelleQuestion.indice = aQuestion.indice;
      lNouvelleQuestion.genreReponse = aQuestion.genreReponse;
      lNouvelleQuestion.texte = aQuestion.texte;
      lNouvelleQuestion.tailleReponse = aQuestion.tailleReponse;
      lNouvelleQuestion.listePiecesJointes = _copierDocuments(
        aQuestion.listePiecesJointes,
      );
      lNouvelleQuestion.listeChoix = _copierChoixReponses(aQuestion.listeChoix);
      lNouvelleQuestion.avecMaximum = aQuestion.avecMaximum;
      lNouvelleQuestion.titre = aQuestion.titre;
      return lNouvelleQuestion;
    }
    function _copierDocuments(aListeDocuments) {
      const lResult = MethodesObjet_1.MethodesObjet.dupliquer(aListeDocuments);
      for (let i = 0; i < lResult.count(); i++) {
        if (lResult.existe(i)) {
          const lElement = lResult.get(i);
          lElement.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
        }
      }
      return lResult;
    }
    function _copierChoixReponses(aListeChoix) {
      const lResult = new ObjetListeElements_1.ObjetListeElements();
      for (let i = 0; i < aListeChoix.count(); i++) {
        if (aListeChoix.existe(i)) {
          const lElement = aListeChoix.get(i);
          const lChoix = new ObjetElement_1.ObjetElement(lElement.getLibelle());
          lChoix.rang = lElement.rang;
          lChoix.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
          if (
            lElement.estReponseLibre !== null &&
            lElement.estReponseLibre !== undefined
          ) {
            lChoix.estReponseLibre = lElement.estReponseLibre;
          }
          lResult.addElement(lChoix);
        }
      }
      return lResult;
    }
    TUtilitaireInformations.getIDReponse = function (aParams) {
      return aParams.instance.getNom() + '_reponse_' + aParams.indice;
    };
    TUtilitaireInformations.composeDocuments = function (
      aListeDocumentsJoints,
    ) {
      const lHtml = [];
      for (let I = 0; I < aListeDocumentsJoints.count(); I++) {
        const lDocumentJoint = aListeDocumentsJoints.get(I);
        lHtml.push(
          ObjetChaine_1.GChaine.composerUrlLienExterne({
            documentJoint: lDocumentJoint,
            genreRessource:
              Enumere_Ressource_1.EGenreRessource.DocJointEtablissement,
          }),
        );
      }
      return lHtml.join('<br/>');
    };
    TUtilitaireInformations.initListePeriodes = function () {
      return UtilitaireListePeriodes_1.TUtilitaireListePeriodes.construireListePeriodes(
        [
          UtilitaireListePeriodes_1.TUtilitaireListePeriodes.choix.aujourdhui,
          UtilitaireListePeriodes_1.TUtilitaireListePeriodes.choix
            .semaineCourante,
          UtilitaireListePeriodes_1.TUtilitaireListePeriodes.choix.moisCourant,
          UtilitaireListePeriodes_1.TUtilitaireListePeriodes.choix.annee,
          UtilitaireListePeriodes_1.TUtilitaireListePeriodes.choix.periodes,
          UtilitaireListePeriodes_1.TUtilitaireListePeriodes.choix.mois,
        ],
      );
    };
    TUtilitaireInformations.avecCumul = function (aListe) {
      if (
        [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          Enumere_Espace_1.EGenreEspace.Entreprise,
          Enumere_Espace_1.EGenreEspace.Mobile_Entreprise,
        ].includes(GEtatUtilisateur.GenreEspace)
      ) {
        if (
          (0, AccessApp_1.getApp)()
            .getEtatUtilisateur()
            .Identification.ListeRessources.count() > 1
        ) {
          return true;
        } else {
          const lGenre = [
            Enumere_Espace_1.EGenreEspace.Entreprise,
            Enumere_Espace_1.EGenreEspace.Mobile_Entreprise,
          ].includes(GEtatUtilisateur.GenreEspace)
            ? Enumere_Ressource_1.EGenreRessource.MaitreDeStage
            : Enumere_Ressource_1.EGenreRessource.Responsable;
          return (
            aListe.getIndiceElementParFiltre((aElement) => {
              return (
                aElement.public.getNumero() ===
                  GEtatUtilisateur.getUtilisateur().getNumero() &&
                aElement.public.getNumero() === lGenre
              );
            }) > -1
          );
        }
      } else {
        return false;
      }
    };
    TUtilitaireInformations.avecInfoPublic = function (aActualite) {
      if (
        [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          Enumere_Espace_1.EGenreEspace.Entreprise,
          Enumere_Espace_1.EGenreEspace.Mobile_Entreprise,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
        ].includes(GEtatUtilisateur.GenreEspace)
      ) {
        const lGenre = [
          Enumere_Espace_1.EGenreEspace.Entreprise,
          Enumere_Espace_1.EGenreEspace.Mobile_Entreprise,
        ].includes(GEtatUtilisateur.GenreEspace)
          ? Enumere_Ressource_1.EGenreRessource.MaitreDeStage
          : Enumere_Ressource_1.EGenreRessource.Responsable;
        const lEstActuDUtilisateur =
          aActualite.public.getNumero() ===
            GEtatUtilisateur.getUtilisateur().getNumero() &&
          aActualite.public.getGenre() === lGenre;
        return !lEstActuDUtilisateur;
      } else {
        return false;
      }
    };
    TUtilitaireInformations.formaterListePourCumul = function (aListe) {
      for (let I = 0; I < aListe.count(); I++) {
        const lElement = aListe.get(I);
        if (lElement.public) {
          let lCumulPere = aListe.getElementParNumeroEtGenre(
            lElement.public.getNumero(),
            lElement.public.getGenre(),
          );
          if (!lCumulPere) {
            const lGenre = [
              Enumere_Espace_1.EGenreEspace.Entreprise,
              Enumere_Espace_1.EGenreEspace.Mobile_Entreprise,
            ].includes(GEtatUtilisateur.GenreEspace)
              ? Enumere_Ressource_1.EGenreRessource.MaitreDeStage
              : Enumere_Ressource_1.EGenreRessource.Responsable;
            const lATitreIndividuel =
              lElement.public.getNumero() ===
                GEtatUtilisateur.getUtilisateur().getNumero() &&
              lElement.public.getGenre() === lGenre;
            const lLibelle = lATitreIndividuel
              ? 'À titre individuel'
              : 'Relatif à %s'
                      ? lElement.public.prenom
                      : lElement.public.getLibelle(),
                  ],
                );
            lCumulPere = new ObjetElement_1.ObjetElement(
              lLibelle,
              lElement.public.getNumero(),
              lElement.public.getGenre(),
            );
            lCumulPere.estUnDeploiement = true;
            lCumulPere.estDeploye = true;
            lCumulPere.aTitreIndividuel = lATitreIndividuel;
            aListe.addElement(lCumulPere);
          }
          lElement.pere = lCumulPere;
        }
      }
      aListe.setTri([
        ObjetTri_1.ObjetTri.initRecursif('pere', [
          ObjetTri_1.ObjetTri.init('aTitreIndividuel'),
          ObjetTri_1.ObjetTri.init((D) => {
            return D.estUnDeploiement ? D.getLibelle() : D.pere.getLibelle();
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return D.dateDebut;
          }, Enumere_TriElement_1.EGenreTriElement.Decroissant),
          ObjetTri_1.ObjetTri.init((D) => {
            return D.dateFin;
          }),
          ObjetTri_1.ObjetTri.init('Libelle'),
          ObjetTri_1.ObjetTri.init('Numero'),
        ]),
      ]);
      aListe.trier();
    };
  },
  fn: 'utilitaireinformations.js',
});