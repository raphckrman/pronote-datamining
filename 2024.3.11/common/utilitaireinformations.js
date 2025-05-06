IE.fModule({
  f: function (exports, require, module, global) {
    const { TypeDroits } = require('ObjetDroitsPN.js');
    const { MethodesObjet } = require('MethodesObjet.js');
    const { GChaine } = require('ObjetChaine.js');
    const { GStyle } = require('ObjetStyle.js');
    const { EGenreEtat } = require('Enumere_Etat.js');
    const { EGenreTriElement } = require('Enumere_TriElement.js');
    const { GDate } = require('ObjetDate.js');
    const { ObjetElement } = require('ObjetElement.js');
    const { ObjetListeElements } = require('ObjetListeElements.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { ObjetTri } = require('ObjetTri.js');
    const { GObjetWAI, EGenreAttribut } = require('ObjetWAI.js');
    const { TypeDomaine } = require('TypeDomaine.js');
    const { TypeEnsembleNombre } = require('TypeEnsembleNombre.js');
    const { EGenreEspace } = require('Enumere_Espace.js');
    const { EGenreRessource } = require('Enumere_Ressource.js');
    const {
      TypeGenreReponseInternetActualite,
    } = require('TypeGenreReponseInternetActualite.js');
    const { TUtilitaireListePeriodes } = require('UtilitaireListePeriodes.js');
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
          GTraductions.getValeur(
            'actualites.Edition.TitreDiffusionResultatsDuSondage',
            [aSondage.getLibelle() || ''],
          ),
        );
        lNouvelleActualite.publie = true;
        lNouvelleActualite.estUneDiffusionDeResultatsSondage = true;
        const lStrTypeSondage = aSondage.reponseAnonyme
          ? GTraductions.getValeur('actualites.Anonyme')
          : GTraductions.getValeur('actualites.Nominatif');
        const lMessageNouvelleInformation = GTraductions.getValeur(
          'actualites.Edition.MessageDiffusionResultatsDuSondage',
          [lStrTypeSondage.toLowerCase(), aSondage.getLibelle() || ''],
        );
        const lPremiereQuestion =
          lNouvelleActualite.listeQuestions.getPremierElement();
        lPremiereQuestion.texte = lMessageNouvelleInformation;
        if (!lPremiereQuestion.listePiecesJointes) {
          lPremiereQuestion.listePiecesJointes = new ObjetListeElements();
        }
        aListePiecesJointesResultats.parcourir((D) => {
          lPremiereQuestion.listePiecesJointes.addElement(D);
        });
        return lNouvelleActualite;
      };
    TUtilitaireInformations.getListePiecesJointesDActualite = function (
      aActualite,
    ) {
      const lListePiecesJointes = new ObjetListeElements();
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
        lDate = GDate.getJourSuivant(lDate);
        if (
          !GParametres.JoursFeries.getValeur(
            GDate.getNbrJoursEntreDeuxDates(
              IE.Cycles.dateDebutPremierCycle(),
              aDate,
            ) + 1,
          ) &&
          GDate.estUnJourOuvre(lDate)
        ) {
          i++;
        }
      } while (i < 15 && lDate < GDate.derniereDate);
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
        ? new ObjetElement(
            GTraductions.getValeur('actualites.Edition.CopieDe', [
              aParam.actualite.getLibelle(),
            ]),
          )
        : new ObjetElement('');
      let lGenreReponse = aParam.genreReponse
        ? aParam.genreReponse
        : TypeGenreReponseInternetActualite.AvecAR;
      const lForcerAR = GApplication.droits.get(
        TypeDroits.fonctionnalites.forcerARInfos,
      );
      if (
        lGenreReponse === TypeGenreReponseInternetActualite.SansAR &&
        lForcerAR === true
      ) {
        lGenreReponse = TypeGenreReponseInternetActualite.AvecAR;
      }
      lInformation.categorie = !aParam.categorie
        ? !aParam.actualite
          ? GEtatUtilisateur.listeCategories.get(this.indiceCategorieParDefaut)
          : aParam.actualite.categorie
        : aParam.categorie;
      lInformation.auteur = GEtatUtilisateur.getUtilisateur().getLibelle();
      lInformation.reponseAnonyme = false;
      lInformation.estInformation = [
        TypeGenreReponseInternetActualite.AvecAR,
        TypeGenreReponseInternetActualite.SansAR,
      ].includes(lGenreReponse);
      lInformation.estSondage = !lInformation.estInformation;
      lInformation.date = '';
      lInformation.publie =
        aParam.publie !== null && aParam.publie !== undefined
          ? aParam.publie
          : !aParam.actualite;
      lInformation.estModele = aParam.estModele === true;
      const lDateDebut = GDate.getDateCourante();
      const lDateFin = lInformation.estInformation
        ? GDate.derniereDate
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
      lInformation.public = new ObjetElement('');
      lInformation.genrePublic = -1;
      lInformation.visible = true;
      if (aParam.actualite && aParam.actualite.listeQuestions) {
        lInformation.listeQuestions = _copierQuestions.call(
          this,
          aParam.actualite.listeQuestions,
        );
      } else {
        lInformation.listeQuestions = new ObjetListeElements();
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
        : GTraductions.getValeur('actualites.Aucun');
      lInformation.detailPublic = aParam.actualite
        ? aParam.actualite.detailPublic
        : GTraductions.getValeur('actualites.AucunDestinataire');
      lInformation.avecModificationPublic = !!(
        aParam.actualite || aParam.listePublic
      );
      lInformation.avecElevesRattaches = false;
      lInformation.genresPublicEntite = aParam.actualite
        ? MethodesObjet.dupliquer(aParam.actualite.genresPublicEntite)
        : new TypeEnsembleNombre();
      lInformation.listePublicEntite = aParam.actualite
        ? MethodesObjet.dupliquer(aParam.actualite.listePublicEntite)
        : new ObjetListeElements();
      if (aParam.listePublic && aParam.genresPublic) {
        lInformation.listePublicEntite = new ObjetListeElements();
        lInformation.listePublicIndividu = new ObjetListeElements();
        if (aParam.genresPublic.length > 0) {
          if (
            this.getGenresRessourceAffDestinataire().includes(
              EGenreRessource.Classe,
            ) ||
            this.getGenresRessourceAffDestinataire().includes(
              EGenreRessource.Groupe,
            )
          ) {
            lInformation.listePublicEntite = aParam.listePublic;
          } else {
            lInformation.listePublicIndividu = aParam.listePublic;
          }
        }
      } else {
        lInformation.listePublicEntite = aParam.actualite
          ? MethodesObjet.dupliquer(aParam.actualite.listePublicEntite)
          : new ObjetListeElements();
        lInformation.listePublicIndividu = aParam.actualite
          ? MethodesObjet.dupliquer(aParam.actualite.listePublicIndividu)
          : new ObjetListeElements();
      }
      lInformation.getDate = TUtilitaireInformations.getDate.bind(lInformation);
      return lInformation;
    };
    TUtilitaireInformations.creerQuestionOuTexteSondage = function (aParams) {
      const lParams = aParams || {};
      const lRang = lParams.rang ? lParams.rang : 1;
      const lGenreReponse =
        !lParams.genreReponse ||
        (lParams.genreReponse === TypeGenreReponseInternetActualite.SansAR &&
          GApplication.droits.get(TypeDroits.fonctionnalites.forcerARInfos))
          ? TypeGenreReponseInternetActualite.AvecAR
          : lParams.genreReponse;
      const lRangElement = lParams.rangElement ? lParams.rangElement : lRang;
      let lLibelle;
      if (
        !!aParams.genreReponse &&
        aParams.genreReponse === TypeGenreReponseInternetActualite.SansReponse
      ) {
        lLibelle = GTraductions.getValeur('actualites.Edition.TexteN', [
          lRangElement,
        ]);
      } else {
        lLibelle = GTraductions.getValeur('actualites.Edition.QuestionN', [
          lRangElement,
        ]);
      }
      const lResult = new ObjetElement(lLibelle);
      lResult.rang = lRang;
      lResult.indice = lRangElement;
      lResult.genreReponse = lGenreReponse;
      lResult.texte = '';
      lResult.titre = '';
      lResult.tailleReponse = 200;
      lResult.listePiecesJointes = new ObjetListeElements();
      lResult.listeChoix = new ObjetListeElements();
      lResult.reponse = new ObjetElement();
      if (lGenreReponse === TypeGenreReponseInternetActualite.Textuelle) {
        lResult.reponse.valeurReponse = '';
      } else if (
        [
          TypeGenreReponseInternetActualite.ChoixMultiple,
          TypeGenreReponseInternetActualite.ChoixUnique,
        ].includes(lGenreReponse)
      ) {
        lResult.reponse.valeurReponse = new TypeDomaine();
      }
      lResult.reponse.avecReponse = false;
      return lResult;
    };
    TUtilitaireInformations.getDate = function () {
      return (
        GTraductions.getValeur('Du') +
        GDate.formatDate(this.dateDebut, ' %JJ/%MM/%AAAA ') +
        GTraductions.getValeur('Au') +
        GDate.formatDate(this.dateFin, ' %JJ/%MM/%AAAA')
      );
    };
    TUtilitaireInformations.avecReponse = function () {
      let lResult = false;
      for (let i = 0; i < this.listeQuestions.count() && !lResult; i++) {
        const lQuestion = this.listeQuestions.get(i);
        lResult =
          lQuestion.reponse.avecReponse ||
          lQuestion.genreReponse === TypeGenreReponseInternetActualite.SansAR;
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
            TypeGenreReponseInternetActualite.SansAR,
            TypeGenreReponseInternetActualite.SansReponse,
          ].includes(lQuestion.genreReponse);
      }
      return lResult;
    };
    function _copierQuestions(aListeQuestions) {
      const lResult = new ObjetListeElements();
      for (let i = 0; i < aListeQuestions.count(); i++) {
        if (aListeQuestions.existe(i)) {
          const lElement = _copieQuestion(aListeQuestions.get(i));
          lElement.setEtat(EGenreEtat.Creation);
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
      const lResult = MethodesObjet.dupliquer(aListeDocuments);
      for (let i = 0; i < lResult.count(); i++) {
        if (lResult.existe(i)) {
          const lElement = lResult.get(i);
          lElement.setEtat(EGenreEtat.Creation);
        }
      }
      return lResult;
    }
    function _copierChoixReponses(aListeChoix) {
      const lResult = new ObjetListeElements();
      for (let i = 0; i < aListeChoix.count(); i++) {
        if (aListeChoix.existe(i)) {
          const lElement = aListeChoix.get(i);
          const lChoix = new ObjetElement(lElement.getLibelle());
          lChoix.rang = lElement.rang;
          lChoix.setEtat(EGenreEtat.Creation);
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
      return aParams.instance.Nom + '_reponse_' + aParams.indice;
    };
    TUtilitaireInformations.composeReponse = function (aParams) {
      const H = [];
      if (aParams.avecLibelleQuestion) {
        H.push(
          '<div class="Actu_Question" style="padding: 2px 0px;">',
          aParams.question.genreReponse !==
            TypeGenreReponseInternetActualite.SansReponse
            ? aParams.question.getLibelle()
            : '',
          '</div>',
        );
      }
      const lIdReponse = TUtilitaireInformations.getIDReponse(aParams);
      if (
        aParams.question.genreReponse ===
          TypeGenreReponseInternetActualite.ChoixMultiple &&
        aParams.question.avecMaximum
      ) {
        H.push(
          '<div style="padding: 2px 0px 1px 0px;">',
          GTraductions.getValeur('actualites.Edition.NbrMaxChoix', [
            aParams.question.nombreReponsesMax,
          ]),
          '</div>',
        );
      }
      H.push(
        '<div id="titre_',
        lIdReponse,
        '" class="AvecSelectionTexte" style="padding: 2px 0px 1px 0px;">',
        aParams.question.texte,
        '</div>',
      );
      H.push('<div id="', lIdReponse, '" class="PetitEspaceBas">');
      let lSurKeyUp = '';
      let lSurSaisie = '';
      switch (aParams.question.genreReponse) {
        case TypeGenreReponseInternetActualite.AvecAR:
          lSurKeyUp =
            aParams.instance.Nom + '.surKeyUpReponse (' + aParams.indice + ');';
          lSurSaisie =
            aParams.instance.Nom + '.surSaisieReponse(' + aParams.indice + ');';
          H.push('<div class="Actu_AR">');
          if (aParams.question.reponse.estRepondant === false) {
            H.push(
              GTraductions.getValeur('actualites.XAPrisConnaissanceLeX', [
                aParams.question.reponse.strRepondant,
                GDate.formatDate(
                  aParams.question.reponse.reponduLe,
                  '%JJ/%MM/%AAAA',
                ),
              ]),
            );
          } else {
            H.push(
              '<ie-checkbox tabindex="-1" id="',
              lIdReponse,
              '_0" class="',
              this._classActualiteSaisieDirect,
              '" ',
              GObjetWAI.composeAttribut({
                genre: EGenreAttribut.label,
                valeur: GTraductions.getValeur('accueil.prisConnaissance'),
              }),
              'onclick="',
              lSurSaisie,
              '"',
              'onkeyup=" ',
              lSurKeyUp,
              '"',
              aParams.question.reponse.avecReponse
                ? ' checked="checked" disabled'
                : aParams.estAffEditionActualite
                  ? ' disabled'
                  : '',
              '><label class="EspaceGauche" for="',
              lIdReponse,
              '">',
              GTraductions.getValeur('accueil.prisConnaissance'),
              '</label></ie-checkbox>',
            );
          }
          H.push('</div>');
          break;
        case TypeGenreReponseInternetActualite.Textuelle:
          lSurSaisie =
            aParams.instance.Nom +
            '.surSaisieReponse (' +
            aParams.indice +
            ',value);';
          H.push(
            '<div style="padding:1px 1px;"><textarea maxlength="0" tabindex="-1" id="',
            lIdReponse,
            '_0" class="Texte10" style="width: 100%; overflow : hidden; ',
            GStyle.composeCouleurBordure(GCouleur.grisClair),
            '" rows="3" ',
            GObjetWAI.composeAttribut({
              genre: EGenreAttribut.label,
              valeur: GTraductions.getValeur('accueil.saisirReponse'),
            }),
            'onkeyup="',
            lSurSaisie,
            '" maxlength="' +
              aParams.question.tailleReponse +
              '" placeholder="',
            GTraductions.getValeur('actualites.SaisirReponse'),
            '"',
            aParams.estAffEditionActualite ? ' disabled' : '',
            '>',
            aParams.question.reponse.valeurReponse,
            '</textarea></div>',
          );
          break;
        case TypeGenreReponseInternetActualite.ChoixUnique:
        case TypeGenreReponseInternetActualite.ChoixMultiple: {
          const lNombreCoche =
            aParams.question &&
            aParams.question.reponse &&
            aParams.question.reponse.valeurReponse
              ? aParams.question.reponse.valeurReponse.getNbrValeurs()
              : 0;
          for (let I = 0; I < aParams.question.listeChoix.count(); I++) {
            const lNr = I + 1;
            const lValeurReponse =
              aParams.question.reponse && aParams.question.reponse.valeurReponse
                ? aParams.question.reponse.valeurReponse.getValeur(lNr)
                : undefined;
            let lDisabled = false;
            if (
              aParams.question.genreReponse ===
                TypeGenreReponseInternetActualite.ChoixMultiple &&
              aParams.question.avecMaximum &&
              lNombreCoche >= aParams.question.nombreReponsesMax
            ) {
              lDisabled = !lValeurReponse;
            }
            const ieInput =
              aParams.question.genreReponse ===
              TypeGenreReponseInternetActualite.ChoixMultiple
                ? 'ie-checkbox'
                : 'ie-radio';
            lSurSaisie =
              aParams.instance.Nom +
              '.surSaisieReponse (' +
              aParams.indice +
              ', value, checked);';
            H.push(
              '<div class="Actu_InfoCoche NoWrap" ><',
              ieInput,
              ' class="InlineBlock AlignementMilieuVertical" id="',
              lIdReponse,
              '_',
              I,
              '" name="coches_',
              lIdReponse,
              '" ',
              GObjetWAI.composeAttribut({
                genre: EGenreAttribut.label,
                valeur: aParams.question.listeChoix.getLibelle(I),
              }),
              'onclick="',
              lSurSaisie,
              '" value="',
              lNr,
              '"' +
                (lValeurReponse ? ' checked="checked"' : '') +
                (aParams.estAffEditionActualite || lDisabled
                  ? ' disabled'
                  : '') +
                ' ></',
              ieInput,
              '><label class="EspaceGauche InlineBlock AlignementMilieuVertical" for="',
              lIdReponse,
              '_',
              I,
              '">' +
                aParams.question.listeChoix.getLibelle(I) +
                '</label></div>',
            );
          }
          break;
        }
        default:
          break;
      }
      H.push('</div>');
      if (
        aParams.question.listePiecesJointes &&
        aParams.question.listePiecesJointes.count() > 0
      ) {
        H.push(
          '<div class="PetitEspace">',
          TUtilitaireInformations.composeDocuments(
            aParams.question.listePiecesJointes,
          ),
          '</div>',
        );
      }
      return H.join('');
    };
    TUtilitaireInformations.composeDocuments = function (
      aListeDocumentsJoints,
    ) {
      const lHtml = [];
      for (let I = 0; I < aListeDocumentsJoints.count(); I++) {
        const lDocumentJoint = aListeDocumentsJoints.get(I);
        lHtml.push(
          GChaine.composerUrlLienExterne({
            documentJoint: lDocumentJoint,
            genreRessource: EGenreRessource.DocJointEtablissement,
          }),
        );
      }
      return lHtml.join('<br/>');
    };
    TUtilitaireInformations.initListePeriodes = function () {
      return TUtilitaireListePeriodes.construireListePeriodes([
        TUtilitaireListePeriodes.choix.aujourdhui,
        TUtilitaireListePeriodes.choix.semaineCourante,
        TUtilitaireListePeriodes.choix.moisCourant,
        TUtilitaireListePeriodes.choix.annee,
        TUtilitaireListePeriodes.choix.periodes,
        TUtilitaireListePeriodes.choix.mois,
      ]);
    };
    TUtilitaireInformations.avecCumul = function (aListe) {
      if (
        [
          EGenreEspace.Parent,
          EGenreEspace.Mobile_Parent,
          EGenreEspace.Entreprise,
        ].includes(GEtatUtilisateur.GenreEspace)
      ) {
        if (GEtatUtilisateur.Identification.ListeRessources.count() > 1) {
          return true;
        } else {
          const lGenre =
            GEtatUtilisateur.GenreEspace === EGenreEspace.Entreprise
              ? EGenreRessource.MaitreDeStage
              : EGenreRessource.Responsable;
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
          EGenreEspace.Parent,
          EGenreEspace.Mobile_Parent,
          EGenreEspace.Entreprise,
          EGenreEspace.PrimParent,
          EGenreEspace.Mobile_PrimParent,
        ].includes(GEtatUtilisateur.GenreEspace)
      ) {
        const lGenre =
          GEtatUtilisateur.GenreEspace === EGenreEspace.Entreprise
            ? EGenreRessource.MaitreDeStage
            : EGenreRessource.Responsable;
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
            const lGenre =
              GEtatUtilisateur.GenreEspace === EGenreEspace.Entreprise
                ? EGenreRessource.MaitreDeStage
                : EGenreRessource.Responsable;
            const lATitreIndividuel =
              lElement.public.getNumero() ===
                GEtatUtilisateur.getUtilisateur().getNumero() &&
              lElement.public.getGenre() === lGenre;
            const lLibelle = lATitreIndividuel
              ? GTraductions.getValeur('actualites.ATitreIndividuel')
              : GTraductions.getValeur('actualites.AProposDe', [
                  lElement.public.prenom &&
                  GEtatUtilisateur.GenreEspace !== EGenreEspace.Entreprise
                    ? lElement.public.prenom
                    : lElement.public.getLibelle(),
                ]);
            lCumulPere = new ObjetElement(
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
      aListe.setTri(
        ObjetTri.initRecursif('pere', [
          ObjetTri.init('aTitreIndividuel'),
          ObjetTri.init((D) => {
            return D.estUnDeploiement ? D.getLibelle() : D.pere.getLibelle();
          }),
          ObjetTri.init((D) => {
            return D.dateDebut;
          }, EGenreTriElement.Decroissant),
          ObjetTri.init((D) => {
            return D.dateFin;
          }),
          ObjetTri.init('Libelle'),
          ObjetTri.init('Numero'),
        ]),
      );
      aListe.trier();
    };
    module.exports = { TUtilitaireInformations };
  },
  fn: 'utilitaireinformations.js',
});