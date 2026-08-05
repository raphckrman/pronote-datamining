IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireQCM = void 0;
    const TypeEtatExecutionQCMPourRepondant_1 = require('@cp/Espace/Script/Enumeres/TypeEtatExecutionQCMPourRepondant');
    const TypeNumerotation_1 = require('@cp/Espace/Script/Enumeres/TypeNumerotation');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const UtilitaireDuree_1 = require('@cp/script/UtilitaireDuree');
    const TypeGenreAssociationQuestionQCM_1 = require('@cp/Espace/Script/Enumeres/TypeGenreAssociationQuestionQCM');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const UtilitaireAudio_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireAudio');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const TypeModeCorrectionQCM_1 = require('@cp/Espace/Script/Enumeres/TypeModeCorrectionQCM');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const TypeGenreExerciceDeQuestionnaire_1 = require('@cp/Espace/Script/Enumeres/TypeGenreExerciceDeQuestionnaire');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ComparateurChaines_1 = require('@cp/script/ComparateurChaines');
    const TypeQualificatifReponse_1 = require('@cp/Espace/Script/Enumeres/TypeQualificatifReponse');
    const ObjetVisuEleveQCM_css_1 = require('@cp/Produit/Css/ObjetVisuEleveQCM.css');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const IEHtml_Chips_1 = require('@cp/Produit/Script/IEHtml.Chips');
    const Categorie_1 = require('@cp/Produit/Script/Categorie');
    exports.UtilitaireQCM = {
      dessineIconeCategorieQCM(aCouleur, aAbbr) {
        return Categorie_1.Categorie.composeCarreCategorie({
          couleur: aCouleur,
          abr: aAbbr,
        });
      },
      initHeureDebutEtFin(aDate) {
        const lResult = { dateDebut: aDate, dateFin: aDate };
        try {
          const lPremiereHeure = ObjetDate_1.GDate.placeEnDateHeure(0);
          const lDerniereHeure = ObjetDate_1.GDate.placeEnDateHeure(
            GParametres.PlacesParJour - 1,
            true,
          );
          lResult.dateDebut = new Date(
            aDate.setHours(
              lPremiereHeure.getHours(),
              lPremiereHeure.getMinutes(),
            ),
          );
          lResult.dateFin = new Date(
            aDate.setHours(
              lDerniereHeure.getHours(),
              lDerniereHeure.getMinutes(),
            ),
          );
        } catch (e) {}
        return lResult;
      },
      initFenetreSelectionQCM(aInstance) {
        aInstance.setOptionsFenetre({
          titre: 'Sélectionner un QCM',
          largeur: 500,
          hauteur: 600,
          listeBoutons: [
            'Annuler',
            'Valider',
          ],
        });
      },
      surSelectionQCM(aObj, aEltQCM, aParam) {
        if (aEltQCM.getGenre() === aParam.genreAucune) {
          aObj.executionQCM = new ObjetElement_1.ObjetElement();
        } else {
          const lEstExecQCM = aEltQCM.getGenre() === aParam.genreExecQCM;
          if (lEstExecQCM) {
            aObj.executionQCM = aEltQCM;
          } else {
            if (!aObj.executionQCM) {
              aObj.executionQCM = new ObjetElement_1.ObjetElement(
                null,
                null,
                aParam.genreExecQCM,
              );
            }
          }
          if (lEstExecQCM === true) {
            aObj.executionQCM.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
          } else {
            aObj.executionQCM.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
          }
          $.extend(aObj.executionQCM, {
            autoriserLaNavigation: aEltQCM.autoriserLaNavigation,
            homogeneiserNbQuestParNiveau: aEltQCM.homogeneiserNbQuestParNiveau,
            jeuQuestionFixe: aEltQCM.jeuQuestionFixe,
            melangerLesQuestionsGlobalement:
              aEltQCM.melangerLesQuestionsGlobalement,
            melangerLesQuestionsParNiveau:
              aEltQCM.melangerLesQuestionsParNiveau,
            melangerLesReponses: aEltQCM.melangerLesReponses,
            modeDiffusionCorrige: aEltQCM.modeDiffusionCorrige,
            nombreQuestionsSoumises: aEltQCM.nombreQuestionsSoumises,
            dureeMaxQCM: aEltQCM.dureeMaxQCM,
            nbMaxTentative: aEltQCM.nbMaxTentative,
            dureeSupplementaire: aEltQCM.dureeSupplementaire,
            nombreQuestionsEnMoins: aEltQCM.nombreQuestionsEnMoins,
            ressentiRepondant: aEltQCM.ressentiRepondant,
            tolererFausses: aEltQCM.tolererFausses,
            acceptIncomplet: aEltQCM.acceptIncomplet,
            consigne: aEltQCM.consigne,
          });
          $.extend(true, aObj.executionQCM, {
            QCM: lEstExecQCM ? aEltQCM.QCM : aEltQCM,
            avecParamModifiables: true,
          });
        }
      },
      composeHintDeQuestionQCM(aThis, aIndexQuestion, aQuestion, aOptions) {
        const lOptions = Object.assign(
          {
            avecAffichageInfosCompetences: false,
            avecAffichageBareme: true,
            typeNumerotationQCM: TypeNumerotation_1.TypeNumerotation.n123,
          },
          aOptions,
        );
        const lAvecInfosCompetences =
          lOptions.avecAffichageInfosCompetences && !!aQuestion.infoCompetences;
        let lHtml = [];
        lHtml.push('<article class="hint-wrapper">');
        lHtml.push('<header>');
        lHtml.push('<div class="icon-contain">');
        lHtml.push(
          '<i role="presentation" class="icon_fleche_num_bas font-size-3xs"></i>',
        );
        lHtml.push('</div>');
        lHtml.push(
          '<span class="font-weight-semi-bold">',
          'Question',
          ' ',
          exports.UtilitaireQCM.composeNumerotation(
            lOptions.typeNumerotationQCM,
            aIndexQuestion + 1,
          ),
          '</span>',
        );
        let lMaxWidth =
          ObjetPosition_1.GPosition.getWidth(aThis.getNom()) - 100 - 20;
        lHtml.push('<ul class="libelles-contain">');
        if (lOptions.avecAffichageBareme) {
          lHtml.push(
            '<li>',
            '%d pts',
            '</li>',
          );
          lMaxWidth = lMaxWidth - 20 - 45;
        }
        const lLibelleQuestion = aQuestion.getLibelle();
        if (lLibelleQuestion) {
          lHtml.push('<li>', lLibelleQuestion, '</li>');
          lMaxWidth =
            lMaxWidth -
            20 -
            16 -
            ObjetChaine_1.GChaine.getLongueurChaineDansDiv(
              lLibelleQuestion,
              10,
              false,
              true,
            );
        }
        if (lAvecInfosCompetences) {
          lMaxWidth = Math.max(lMaxWidth - 16, 100);
          lHtml.push(
            '<li style=" max-width:' + lMaxWidth + 'px;" ie_ellipsis>',
            aQuestion.infoCompetences,
            '</li>',
          );
        }
        lHtml.push('</ul>');
        lHtml.push(
          '<div class="ico ',
          TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaireUtil.getClasseImage(
            aQuestion.getGenre(),
          ),
          '"></div>',
        );
        lHtml.push('</header>');
        lHtml.push('<div class="PageCorrigeQuestion">');
        if (lAvecInfosCompetences) {
          lHtml.push('<div class="info-competences" style="width:60%;">');
        }
        const lEnonce = exports.UtilitaireQCM.composeEnonce(aQuestion);
        if (!!lEnonce) {
          lHtml.push(
            IE.jsx.str(
              'div',
              { class: ['enonce', Divers_css_1.SD.tinyView] },
              lEnonce,
            ),
          );
        }
        if (aQuestion.image && aQuestion.image !== '') {
          const lBase64 = ObjetChaine_1.GChaine.supprimerRC(
            aQuestion.image,
          ).replaceAll('\n', '');
          lHtml.push(
            IE.jsx.str(
              'div',
              { class: 'media-contain' },
              IE.jsx.str('img', {
                alt: '',
                src: 'data:image/png;base64,' + lBase64,
                ie_eventmap: {
                  error: (_, aNode) =>
                    $(aNode)
                      .parent()
                      .html(
                        '<em>Votre navigateur ne supporte pas l'affichage des images</em>',
                      ),
                },
              }),
            ),
          );
        }
        if (
          aQuestion.mp3name &&
          aQuestion.mp3name !== '' &&
          aQuestion.mp3 &&
          aQuestion.mp3 !== ''
        ) {
          lHtml.push(
            UtilitaireAudio_1.UtilitaireAudio.construitChipsAudio({
              base64Audio: aQuestion.mp3,
              libelle: aQuestion.mp3name,
              classes: ['media-contain'],
            }),
          );
        }
        if (aQuestion.url && aQuestion.url !== '') {
          lHtml.push(
            IE.jsx.str(
              'div',
              { class: 'media-contain' },
              IE.jsx.str(
                IEHtml_Chips_1.Chips,
                {
                  href: aQuestion.url,
                  target: '_blank',
                  class: 'iconic icon_info_sondage_publier',
                },
                aQuestion.url,
              ),
            ),
          );
        }
        lHtml.push('<div class="zone-reponse">');
        lHtml.push(
          exports.UtilitaireQCM.composeReponsesCorrigeesDeQuestion(
            aQuestion,
            aIndexQuestion,
          ),
        );
        lHtml.push('</div>');
        if (lAvecInfosCompetences) {
          lHtml.push('</div>');
          lHtml.push(
            '<div class="InlineBlock AlignementHaut" style="width:40%;display:none;">',
          );
          if (
            aQuestion.listeEvaluations &&
            aQuestion.listeEvaluations.count() > 0
          ) {
            lHtml.push(
              '<ul style="margin:0;padding:0;list-style-type:disc;list-style-position:outside;">',
            );
            for (let i = 0; i < aQuestion.listeEvaluations.count(); i++) {
              const lCompetence = aQuestion.listeEvaluations.get(i);
              const lCodeCompetences = !!lCompetence.codeAvecPrefixe
                ? lCompetence.codeAvecPrefixe
                : '';
              lHtml.push(
                '<li>',
                lCompetence.getLibelle(),
                !!lCodeCompetences ? ' [' + lCodeCompetences + ']' : '',
                '</li>',
              );
            }
            lHtml.push('</ul>');
          }
          lHtml.push('</div>');
        }
        lHtml.push('</div>');
        lHtml.push('</article>');
        return lHtml.join('');
      },
      composeHintReponsesEleveDeQuestionQCM(
        aIndexQuestion,
        aQuestion,
        aReponseEleve,
        aOptions,
      ) {
        const lOptions = Object.assign(
          {
            typeNumerotationQCM: TypeNumerotation_1.TypeNumerotation.n123,
            avecAffichageNote: true,
            avecAffichageInfosCompetences: false,
          },
          aOptions,
        );
        const lQuestion = MethodesObjet_1.MethodesObjet.dupliquer(aQuestion);
        if (!!lQuestion.listeReponses && lQuestion.listeReponses.count() > 0) {
          lQuestion.listeReponses.parcourir((D, aIndice) => {
            if (!!aReponseEleve.ordreReponsesCopieEleve) {
              D.Position =
                aReponseEleve.ordreReponsesCopieEleve.indexOf(aIndice);
            }
          });
          lQuestion.listeReponses.setTri([
            ObjetTri_1.ObjetTri.init('Position'),
          ]);
          lQuestion.listeReponses.trier();
        }
        const lAvecInfosCompetences =
          lOptions.avecAffichageInfosCompetences && !!lQuestion.infoCompetences;
        const lEnonceQuestion = exports.UtilitaireQCM.composeEnonce(lQuestion);
        const lHtml = [];
        lHtml.push('<article class="hint-wrapper">');
        lHtml.push('<header>');
        lHtml.push(
          '<span class="font-weight-semi-bold">',
          'Question',
          ' ',
          exports.UtilitaireQCM.composeNumerotation(
            lOptions.typeNumerotationQCM,
            aIndexQuestion + 1,
          ),
          '</span>',
        );
        if (lQuestion.getLibelle()) {
          lHtml.push('<p>', lQuestion.getLibelle(), '</p>');
        }
        if (lOptions.avecAffichageNote) {
          lHtml.push(
            '<span class="score">',
            aReponseEleve.note || 0,
            ' / ',
            '%d pts',
            '</span>',
          );
        }
        if (lAvecInfosCompetences) {
          lHtml.push(
            '<span ie_ellipsis>',
            lQuestion.infoCompetences,
            '</span>',
          );
        }
        lHtml.push(
          '<div class="ico ',
          TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaireUtil.getClasseImage(
            lQuestion.getGenre(),
          ),
          '"></div>',
        );
        lHtml.push('</header>');
        lHtml.push('<div class="PageCorrigeQuestion">');
        if (aReponseEleve.nombreRejouee) {
          lHtml.push(
            IE.jsx.str(
              'div',
              { class: [Divers_css_1.SD.pAllS] },
              '*Rejouée %d fois',
            ),
          );
        }
        if (!!lEnonceQuestion) {
          lHtml.push(
            IE.jsx.str(
              'div',
              { class: ['enonce', Divers_css_1.SD.tinyView] },
              lEnonceQuestion,
            ),
          );
        }
        if (aQuestion.image && aQuestion.image !== '') {
          lHtml.push(
            IE.jsx.str(
              'div',
              { class: 'media-contain' },
              IE.jsx.str('img', {
                alt: '',
                src:
                  'data:image/png;base64,' +
                  ObjetChaine_1.GChaine.supprimerRC(aQuestion.image),
                ie_eventmap: {
                  error: (_, aNode) =>
                    $(aNode)
                      .parent()
                      .html(
                        '<em>Votre navigateur ne supporte pas l'affichage des images</em>',
                      ),
                },
              }),
            ),
          );
        }
        lHtml.push(
          '<div class="zone-reponse">',
          exports.UtilitaireQCM.composeReponsesFaitesEleve(
            lQuestion,
            aIndexQuestion,
            aReponseEleve.reponsesFaites,
          ),
          '</div>',
        );
        lHtml.push('</div>');
        lHtml.push('</article>');
        return lHtml.join('');
      },
      estReponsesSingleMultiAvecMiseEnForme(aQuestion) {
        let lAvecReponsesMisesEnForme = false;
        if (!!aQuestion.listeReponses) {
          for (const aReponse of aQuestion.listeReponses) {
            if (aReponse.image || aReponse.editionAvancee) {
              lAvecReponsesMisesEnForme = true;
              break;
            }
          }
        }
        return lAvecReponsesMisesEnForme;
      },
      composeEnonce(aQuestion) {
        let lArrayEnonceQuestion = [];
        if (aQuestion) {
          const lEstUneQuestionCloze =
            aQuestion.getGenre() ===
              TypeGenreExerciceDeQuestionnaire_1
                .TypeGenreExerciceDeQuestionnaire.GEQ_ClozeField ||
            aQuestion.getGenre() ===
              TypeGenreExerciceDeQuestionnaire_1
                .TypeGenreExerciceDeQuestionnaire.GEQ_ClozeFixed ||
            aQuestion.getGenre() ===
              TypeGenreExerciceDeQuestionnaire_1
                .TypeGenreExerciceDeQuestionnaire.GEQ_ClozeVariable;
          if (!lEstUneQuestionCloze) {
            lArrayEnonceQuestion.push(aQuestion.enonce);
          }
        }
        return lArrayEnonceQuestion.join('');
      },
      avecReponseRepondant(aReponsesRepondant) {
        let lResult = false;
        aReponsesRepondant.forEach((aReponse) => {
          if (aReponse !== '') {
            lResult = true;
          }
        });
        return lResult;
      },
      composeReponsesCorrigeesDeQuestion(
        aQuestion,
        aIndiceQuestion,
        aParametresSupplementaires,
        aEvaluationNote,
        aAvecAccessibilite,
      ) {
        let lHtml = [];
        if (
          aQuestion.getGenre() ===
            TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
              .GEQ_SingleChoice ||
          aQuestion.getGenre() ===
            TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
              .GEQ_MultiChoice
        ) {
          lHtml.push(
            exports.UtilitaireQCM._composeReponsesCorrigeesDeQuestionSingleOuMulti(
              aQuestion,
              aIndiceQuestion,
              aParametresSupplementaires,
              aEvaluationNote,
              aAvecAccessibilite,
            ),
          );
        } else if (
          aQuestion.getGenre() ===
            TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
              .GEQ_ShortAnswer ||
          aQuestion.getGenre() ===
            TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
              .GEQ_NumericalAnswer
        ) {
          lHtml.push(
            exports.UtilitaireQCM._composeReponsesCorrigeesDeQuestionShortOuNumeric(
              aQuestion,
              aIndiceQuestion,
              aEvaluationNote,
              aAvecAccessibilite,
            ),
          );
        } else if (
          aQuestion.getGenre() ===
          TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
            .GEQ_SpellAnswer
        ) {
          lHtml.push(
            exports.UtilitaireQCM._composeReponsesCorrigeesDeQuestionSpell(
              aQuestion,
              aIndiceQuestion,
              aEvaluationNote,
              aAvecAccessibilite,
            ),
          );
        } else if (
          aQuestion.getGenre() ===
          TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
            .GEQ_Matching
        ) {
          lHtml.push(
            exports.UtilitaireQCM._composeReponsesCorrigeesDeQuestionMatching(
              aQuestion,
              aIndiceQuestion,
              aParametresSupplementaires,
              aEvaluationNote,
              aAvecAccessibilite,
            ),
          );
        } else if (
          aQuestion.getGenre() ===
            TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
              .GEQ_ClozeField ||
          aQuestion.getGenre() ===
            TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
              .GEQ_ClozeFixed ||
          aQuestion.getGenre() ===
            TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
              .GEQ_ClozeVariable
        ) {
          lHtml.push(
            exports.UtilitaireQCM._composeReponsesCorrigeesDeQuestionCloze(
              aQuestion,
              aIndiceQuestion,
              aParametresSupplementaires,
              aEvaluationNote,
              aAvecAccessibilite,
            ),
          );
        }
        if (lHtml.length > 0) {
          lHtml.unshift('<div class="wrapperQuestionQCM">');
          lHtml.push('</div>');
        }
        return lHtml.join('');
      },
      _composeReponsesCorrigeesDeQuestionSingleOuMulti(
        aQuestion,
        aIndiceQuestion,
        aParametresSupplementaires,
        aEvaluationNote,
        aAvecAccessibilite,
      ) {
        var _a;
        const lEstQuestionAChoixUnique =
          aQuestion.getGenre() ===
          TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
            .GEQ_SingleChoice;
        const lFnEstUneBonneReponse = function (aReponse) {
          return lEstQuestionAChoixUnique
            ? aReponse.fractionReponse === 100
            : aReponse.fractionReponse > 0;
        };
        const lFnEstUneReponseCocheeParRepondant = function (
          aQuestion,
          aIndexReponse,
        ) {
          if (aQuestion.reponsesRepondant) {
            for (const x in aQuestion.reponsesRepondant) {
              if (aQuestion.reponsesRepondant[x] !== '') {
                if (
                  parseInt(aQuestion.reponsesRepondant[x]) - 1 ===
                  aIndexReponse
                ) {
                  return true;
                }
              }
            }
          }
          return false;
        };
        const lEvaluationNotePourQuestion = {
          validee: true,
          nbBonnesReponses: aQuestion.listeReponses
            .getListeElements((aReponse) => {
              return lFnEstUneBonneReponse(aReponse);
            })
            .count(),
          nbReponsesJustes: 0,
          question: aQuestion,
        };
        let lForcerFaux = false;
        for (let i = 0; i < aQuestion.listeReponses.count(); i++) {
          const lEstCochee = lFnEstUneReponseCocheeParRepondant(aQuestion, i);
          if (lEstCochee) {
            const lReponse = aQuestion.listeReponses.get(i);
            if (lFnEstUneBonneReponse(lReponse)) {
              lEvaluationNotePourQuestion.nbReponsesJustes += 1;
            } else {
              lForcerFaux = true;
            }
          }
        }
        if (aParametresSupplementaires) {
          if (
            !aParametresSupplementaires.acceptIncomplet &&
            lEvaluationNotePourQuestion.nbReponsesJustes !==
              lEvaluationNotePourQuestion.nbBonnesReponses
          ) {
            lEvaluationNotePourQuestion.nbReponsesJustes = 0;
          }
          if (!aParametresSupplementaires.tolererFausses && lForcerFaux) {
            lEvaluationNotePourQuestion.nbReponsesJustes = 0;
          }
        }
        if (aEvaluationNote) {
          aEvaluationNote[aIndiceQuestion] = lEvaluationNotePourQuestion;
        }
        const lEstAvecReponseMiseEnForme =
          exports.UtilitaireQCM.estReponsesSingleMultiAvecMiseEnForme(
            aQuestion,
          );
        const H = [];
        if (aAvecAccessibilite) {
          if (aQuestion.qualif === undefined) {
            aQuestion.qualif = _getResultatQuestion(
              aQuestion,
              lEvaluationNotePourQuestion,
              aParametresSupplementaires,
            );
          }
          let R = [];
          (_a = aQuestion.reponsesRepondant) === null || _a === void 0
            ? void 0
            : _a.forEach((i) => {
                const lReponse = aQuestion.listeReponses.get(i - 1);
                const Str = [];
                Str.push(
                  (lReponse.editionAvancee
                    ? lReponse.libelleHtml
                    : lReponse.getLibelle()) +
                    ' ' +
                    (lReponse.feedback
                      ? '(' +
                        'commentaire : %s' +
                        ') '
                      : ''),
                );
                if (
                  [
                    TypeQualificatifReponse_1.TypeQualificatifReponse
                      .qrBonnePartielle,
                    TypeQualificatifReponse_1.TypeQualificatifReponse.qrBonne,
                  ].includes(aQuestion.qualif) &&
                  !lFnEstUneBonneReponse(lReponse)
                ) {
                  Str.push(
                    '(' +
                      'Réponse fausse' +
                      ')',
                  );
                }
                R.push(Str.join(' '));
              });
          const lLibelleReponsesRepondant = R.join(
            ' ' + 'et' + ' ',
          );
          let J = [];
          aQuestion.listeReponses.parcourir((aReponse) => {
            if (lFnEstUneBonneReponse(aReponse)) {
              J.push(
                aReponse.editionAvancee
                  ? aReponse.libelleHtml
                  : aReponse.getLibelle(),
              );
            }
          });
          const lLibelleReponsesJustes = J.join(
            ' ' + 'et' + ' ',
          );
          const lResultat = _getLibelleResultat(
            aQuestion,
            lEvaluationNotePourQuestion,
            lLibelleReponsesRepondant,
            aParametresSupplementaires,
          );
          const lReponseAttendu =
            aQuestion.qualif !==
            TypeQualificatifReponse_1.TypeQualificatifReponse.qrBonne
              ? 'La réponse attendue est %s.'
              : '';
          H.push(
            IE.jsx.str(
              'div',
              { class: 'sr-only' },
              lResultat,
              ' ',
              lReponseAttendu,
            ),
          );
        }
        H.push('<ul class="cbr-group zone-reponse" aria-hidden="true">');
        for (let i = 0; i < aQuestion.listeReponses.count(); i++) {
          const lReponse = aQuestion.listeReponses.get(i);
          if (lReponse) {
            const lEstCochee = lFnEstUneReponseCocheeParRepondant(aQuestion, i);
            const lEstUneBonneReponse = lFnEstUneBonneReponse(lReponse);
            const lClassesLabel = ['cbr-corrige'];
            if (lEstAvecReponseMiseEnForme) {
              lClassesLabel.push('mis-en-forme');
            }
            if (lEstUneBonneReponse) {
              lClassesLabel.push('is-ok');
            } else if (lEstCochee) {
              lClassesLabel.push('is-ko');
            }
            const lTypeElement = lEstQuestionAChoixUnique
              ? 'radio'
              : 'checkbox';
            const lLibelleReponse = !lReponse.editionAvancee
              ? lReponse.getLibelle()
              : lReponse.libelleHtml;
            const lContenuCbrVisu = [];
            if (lEstAvecReponseMiseEnForme) {
              lContenuCbrVisu.push(
                IE.jsx.str(
                  'div',
                  { class: ['libelle', Divers_css_1.SD.tinyView] },
                  lLibelleReponse,
                ),
              );
              if (lReponse.image) {
                lContenuCbrVisu.push(
                  IE.jsx.str(
                    'div',
                    { class: 'thumbnail' },
                    IE.jsx.str('img', {
                      alt: '',
                      src:
                        'data:image/png;base64,' +
                        ObjetChaine_1.GChaine.supprimerRC(lReponse.image),
                    }),
                  ),
                );
              }
            } else {
              lContenuCbrVisu.push(
                '<span class="lib-text">',
                lLibelleReponse,
                '</span>',
              );
            }
            const lIdVisuReponse = 'cbr_' + aIndiceQuestion + '_visu' + i;
            const lStrResultat = lEstCochee
              ? lEstUneBonneReponse
                ? 'Réponse correcte'
                : 'Réponse fausse'
              : lEstUneBonneReponse
                ? 'Réponse attendue'
                : '';
            H.push(
              IE.jsx.str(
                'li',
                { class: lClassesLabel.join(' ') },
                lStrResultat
                  ? IE.jsx.str(
                      'div',
                      {
                        class: [
                          ObjetVisuEleveQCM_css_1.SObjetVisuEleveQCM
                            .qcmResultat,
                          lEstCochee &&
                            ObjetVisuEleveQCM_css_1.SObjetVisuEleveQCM
                              .isChecked,
                        ],
                      },
                      IE.jsx.str('i', {
                        class: 'icon-result',
                        role: 'presentation',
                      }),
                      IE.jsx.str('p', { class: 'message' }, lStrResultat),
                    )
                  : '',
                IE.jsx.str('input', {
                  type: lTypeElement,
                  'aria-labelledby': lIdVisuReponse,
                  disabled: true,
                  checked: lEstCochee ? 'checked' : undefined,
                }),
                IE.jsx.str(
                  'div',
                  { id: lIdVisuReponse, class: 'cbr-visu' },
                  IE.jsx.str('span', {
                    class: 'cbr-coche',
                    'aria-hidden': 'true',
                  }),
                  lContenuCbrVisu.join(''),
                ),
                lEstCochee && !!lReponse.feedback
                  ? IE.jsx.str(
                      'p',
                      { class: 'qcm-comment message' },
                      lReponse.feedback,
                    )
                  : '',
              ),
            );
          }
        }
        H.push('</ul>');
        return H.join('');
      },
      _composeReponsesCorrigeesDeQuestionShortOuNumeric(
        aQuestion,
        aIndiceQuestion,
        aEvaluationNote,
        aAvecAccessibilite,
      ) {
        const lEvaluationNotePourQuestion = {
          validee: true,
          nbBonnesReponses: 1,
          nbReponsesJustes: 0,
          question: aQuestion,
        };
        let lReponseRepondant = null;
        if (
          aQuestion.reponsesRepondant &&
          aQuestion.reponsesRepondant.length > 0
        ) {
          lReponseRepondant = aQuestion.reponsesRepondant[0];
        }
        const lEstQuestionDeTypeShortAnswer =
          aQuestion.getGenre() ===
          TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
            .GEQ_ShortAnswer;
        if (lReponseRepondant !== null) {
          if (!lEstQuestionDeTypeShortAnswer) {
            lReponseRepondant = lReponseRepondant.replace(/\s+/gi, '');
            lReponseRepondant = lReponseRepondant
              .replace(/\./, ',')
              .replace(/٫/gi, ',')
              .replace(/²/gi, '2')
              .replace(/³/gi, '3');
          }
        }
        const lCaseSensitive = aQuestion.casesensitive;
        const lFnEstMemeReponse = (aStrReponseQuestion, aStrReponseTestee) => {
          if (lEstQuestionDeTypeShortAnswer) {
            return _sontChainesIdentiques(
              aStrReponseQuestion,
              aStrReponseTestee,
              lCaseSensitive,
            );
          }
          return (
            ObjetChaine_1.GChaine.latinize(
              aStrReponseQuestion
                .replace(/\s+/gi, '')
                .replace(/\./, ',')
                .replace(/٫/gi, ',')
                .replace(/²/gi, '2')
                .replace(/³/gi, '3'),
            ).toLowerCase() === aStrReponseTestee
          );
        };
        const H = [];
        let lReponseRepondantEstBonneReponse = false;
        let lFeedbackAAfficher = '';
        let lLibelleReponsesRepondant = '';
        if (lReponseRepondant !== null) {
          if (aQuestion.listeReponses) {
            const lListeReponsesDeQuestionEgaleARepondant =
              aQuestion.listeReponses.getListeElements((aEle) => {
                return lFnEstMemeReponse(aEle.getLibelle(), lReponseRepondant);
              });
            if (lListeReponsesDeQuestionEgaleARepondant.count() > 0) {
              lReponseRepondantEstBonneReponse = true;
              lFeedbackAAfficher =
                lListeReponsesDeQuestionEgaleARepondant.get(0).feedback || '';
              lEvaluationNotePourQuestion.nbReponsesJustes = 1;
            }
          }
          if (
            !lReponseRepondantEstBonneReponse &&
            !!aQuestion.incorrectFeedback
          ) {
            lFeedbackAAfficher = aQuestion.incorrectFeedback;
          }
          lLibelleReponsesRepondant =
            lReponseRepondant +
            (lFeedbackAAfficher
              ? ' (' +
                'commentaire : %s' +
                ')'
              : '');
        }
        if (aAvecAccessibilite) {
          if (aQuestion.qualif === undefined) {
            aQuestion.qualif = _getResultatQuestion(
              aQuestion,
              lEvaluationNotePourQuestion,
            );
          }
          const lResultat = _getLibelleResultat(
            aQuestion,
            lEvaluationNotePourQuestion,
            lLibelleReponsesRepondant,
          );
          const lReponseAttendu =
            aQuestion.qualif !==
            TypeQualificatifReponse_1.TypeQualificatifReponse.qrBonne
              ? 'La réponse attendue est %s.'.getLibelle()],
                )
              : '';
          H.push(
            IE.jsx.str(
              'div',
              { class: 'sr-only' },
              lResultat,
              ' ',
              lReponseAttendu,
            ),
          );
        }
        const lClasseCSSReponse = lReponseRepondant
          ? lReponseRepondantEstBonneReponse
            ? 'is-ok'
            : 'is-ko'
          : 'is-none';
        const lClassNumeric =
          aQuestion.getGenre() ===
          TypeGenreExerciceDeQuestionnaire_1.TypeGenreExerciceDeQuestionnaire
            .GEQ_NumericalAnswer
            ? 'is-numeric'
            : '';
        const lStrResultat = lReponseRepondant
          ? lReponseRepondantEstBonneReponse
            ? 'Réponse correcte'
            : 'Réponse fausse'
          : '';
        const lHtmlReponseAttendu = !lReponseRepondantEstBonneReponse
          ? IE.jsx.str(
              'div',
              { class: 'is-none' },
              IE.jsx.str(
                'div',
                { class: 'qcm-resultat' },
                IE.jsx.str('i', { class: 'icon-result', role: 'presentation' }),
                IE.jsx.str(
                  'p',
                  { class: 'message' },
                  'Réponse attendue',
                ),
              ),
              IE.jsx.str(
                'p',
                { class: 'Gras taille-l message' },
                aQuestion.listeReponses.getLibelle(0),
              ),
            )
          : '';
        H.push(
          IE.jsx.str(
            'div',
            {
              class: ['zone-reponse', lClasseCSSReponse],
              'aria-hidden': 'true',
            },
            lStrResultat
              ? IE.jsx.str(
                  'div',
                  {
                    class:
                      ObjetVisuEleveQCM_css_1.SObjetVisuEleveQCM.qcmResultat,
                  },
                  IE.jsx.str('i', {
                    class: 'icon-result',
                    role: 'presentation',
                  }),
                  IE.jsx.str('p', null, lStrResultat),
                )
              : '',
            IE.jsx.str(
              'div',
              { class: ['reponse-input', lClassNumeric] },
              IE.jsx.str('span', null, lReponseRepondant),
            ),
            lFeedbackAAfficher
              ? IE.jsx.str(
                  'p',
                  { class: 'qcm-comment message' },
                  lFeedbackAAfficher,
                )
              : '',
            lHtmlReponseAttendu ? lHtmlReponseAttendu : '',
          ),
        );
        if (aEvaluationNote) {
          aEvaluationNote[aIndiceQuestion] = lEvaluationNotePourQuestion;
        }
        return H.join('');
      },
      _composeReponsesCorrigeesDeQuestionSpell(
        aQuestion,
        aIndiceQuestion,
        aEvaluationNote,
        aAvecAccessibilite,
      ) {
        const lEvaluationNotePourQuestion = {
          validee: true,
          nbBonnesReponses: 1,
          nbReponsesJustes: 0,
          question: aQuestion,
        };
        let lReponseRepondant = null;
        if (
          aQuestion.reponsesRepondant &&
          aQuestion.reponsesRepondant.length > 0
        ) {
          lReponseRepondant = aQuestion.reponsesRepondant[0];
          lReponseRepondant = ObjetChaine_1.GChaine.enleverEntites(
            lReponseRepondant.replace('’', "'"),
          );
        }
        const lCaseSensitive = aQuestion.casesensitive;
        const lEstBonneReponseRepondant =
          aQuestion.listeReponses
            .getListeElements((aEle) => {
              return _sontChainesIdentiques(
                ObjetChaine_1.GChaine.enleverEntites(aEle.getLibelle()) || '',
                lReponseRepondant,
                lCaseSensitive,
              );
            })
            .count() > 0;
        if (lEstBonneReponseRepondant) {
          lEvaluationNotePourQuestion.nbReponsesJustes = 1;
        }
        if (aEvaluationNote) {
          aEvaluationNote[aIndiceQuestion] = lEvaluationNotePourQuestion;
        }
        const lBonneReponse = ObjetChaine_1.GChaine.enleverEntites(
          aQuestion.listeReponses.get(0).getLibelle(),
        );
        const lFeedbackAAfficher = aQuestion.listeReponses.get(0).feedback;
        const H = [];
        if (aAvecAccessibilite) {
          if (aQuestion.qualif === undefined) {
            aQuestion.qualif = _getResultatQuestion(
              aQuestion,
              lEvaluationNotePourQuestion,
            );
          }
          let lLibelleReponsesRepondant = '';
          for (let i = 0; i < lBonneReponse.length; i++) {
            if (i === 0) {
              lLibelleReponsesRepondant = '<p>';
            }
            const lLettre =
              i <
              ((lReponseRepondant === null || lReponseRepondant === void 0
                ? void 0
                : lReponseRepondant.length) || 0)
                ? lReponseRepondant[i] === ' '
                  ? 'Espace'
                  : lReponseRepondant[i]
                : '';
            lLibelleReponsesRepondant += lLettre + ' ';
          }
          if (lLibelleReponsesRepondant.length) {
            lLibelleReponsesRepondant += '</p>';
          }
          let lLibelleReponsesJustes = '';
          for (let i = 0; i < lBonneReponse.length; i++) {
            if (i === 0) {
              lLibelleReponsesJustes = '<p>';
            }
            const lLettre =
              lBonneReponse[i] === ' '
                ? 'Espace'
                : lBonneReponse[i];
            lLibelleReponsesJustes += lLettre + ' ';
          }
          if (lLibelleReponsesRepondant.length) {
            lLibelleReponsesJustes += '</p>';
          }
          if (lFeedbackAAfficher) {
            if (lEstBonneReponseRepondant) {
              lLibelleReponsesRepondant +=
                ' (' +
                'commentaire : %s' +
                ')';
            } else {
              lLibelleReponsesJustes +=
                ' (' +
                'commentaire : %s' +
                ')';
            }
          }
          const lResultat = _getLibelleResultat(
            aQuestion,
            lEvaluationNotePourQuestion,
            lLibelleReponsesRepondant,
          );
          const lReponseAttendu =
            aQuestion.qualif !==
            TypeQualificatifReponse_1.TypeQualificatifReponse.qrBonne
              ? 'La réponse attendue est %s.'
              : '';
          H.push(
            IE.jsx.str(
              'div',
              { class: 'sr-only' },
              lResultat,
              ' ',
              lReponseAttendu,
            ),
          );
        }
        const lClasseCSSReponse = lReponseRepondant
          ? lEstBonneReponseRepondant
            ? 'user-choix is-ok'
            : 'is-ko'
          : 'is-none';
        const lStrResultat = lReponseRepondant
          ? lEstBonneReponseRepondant
            ? 'Réponse correcte'
            : 'Réponse fausse'
          : '';
        const lHtmlReponseAttendu = !lEstBonneReponseRepondant
          ? IE.jsx.str(
              'div',
              { class: 'is-none' },
              IE.jsx.str(
                'div',
                { class: 'qcm-resultat' },
                IE.jsx.str('i', { class: 'icon-result', role: 'presentation' }),
                IE.jsx.str(
                  'p',
                  { class: 'message' },
                  'Réponse attendue',
                ),
              ),
              IE.jsx.str(
                'p',
                { class: 'Gras taille-l message' },
                lBonneReponse,
              ),
            )
          : '';
        H.push(
          IE.jsx.str(
            'div',
            {
              class: ['zone-reponse', lClasseCSSReponse],
              'aria-hidden': 'true',
            },
            IE.jsx.str(
              'div',
              null,
              lStrResultat
                ? IE.jsx.str(
                    'div',
                    {
                      class:
                        ObjetVisuEleveQCM_css_1.SObjetVisuEleveQCM.qcmResultat,
                    },
                    IE.jsx.str('i', {
                      class: 'icon-result',
                      role: 'presentation',
                    }),
                    IE.jsx.str('p', { class: 'message' }, lStrResultat),
                  )
                : '',
              IE.jsx.str(
                'div',
                { class: ['reponse-input', 'spell-contain'] },
                () => {
                  const lHtml = [];
                  for (let i = 0; i < lBonneReponse.length; i++) {
                    const lLettre =
                      i <
                      ((lReponseRepondant === null ||
                      lReponseRepondant === void 0
                        ? void 0
                        : lReponseRepondant.length) || 0)
                        ? lReponseRepondant[i]
                        : '';
                    lHtml.push(
                      '<span>',
                      lLettre !== '' ? lLettre : '&nbsp;',
                      '</span>',
                    );
                  }
                  return lHtml.join('');
                },
              ),
              lFeedbackAAfficher
                ? IE.jsx.str(
                    'p',
                    { class: 'qcm-comment message' },
                    lFeedbackAAfficher,
                  )
                : '',
            ),
            lHtmlReponseAttendu ? lHtmlReponseAttendu : '',
          ),
        );
        return H.join('');
      },
      _composeReponsesCorrigeesDeQuestionMatching(
        aQuestion,
        aIndiceQuestion,
        aParametresSupplementaires,
        aEvaluationNote,
        aAvecAccessibilite,
      ) {
        const lEvaluationNotePourQuestion = {
          validee: true,
          nbBonnesReponses: aQuestion.listeReponses.count(),
          nbReponsesJustes: 0,
          question: aQuestion,
        };
        const lFnRetrouverReponseAPartirDuHash = (aQuestion, aHash) => {
          let lReponseTrouvee = null;
          for (const lReponse of aQuestion.listeReponses) {
            if (
              lReponse &&
              lReponse.associationB &&
              lReponse.associationB.hashContenu === aHash
            ) {
              lReponseTrouvee = lReponse;
              break;
            }
          }
          return lReponseTrouvee;
        };
        const lEstAvecReponsesRepondant = !!aQuestion.reponsesRepondant;
        const lHtml = [];
        let lLibelleReponsesRepondant = '';
        let lLibelleReponsesJustes = '';
        lHtml.push(
          '<div class="association-wrapper corrige" aria-hidden="true">',
        );
        for (let i = 0; i < aQuestion.listeReponses.count(); i++) {
          const lReponse = aQuestion.listeReponses.get(i);
          if (!lReponse || !lReponse.existe()) {
            continue;
          }
          const lBonneReponse = lReponse.bonneReponse;
          let lReponseDonnee;
          let lEstLaBonneReponse = false;
          if (lEstAvecReponsesRepondant) {
            const lHashReponseDonnee = aQuestion.reponsesRepondant[i];
            lReponseDonnee = lFnRetrouverReponseAPartirDuHash(
              aQuestion,
              lHashReponseDonnee,
            );
            if (!!lBonneReponse) {
              lEstLaBonneReponse =
                lHashReponseDonnee === lBonneReponse.hashContenu;
            }
            if (lEstLaBonneReponse) {
              lEvaluationNotePourQuestion.nbReponsesJustes += 1;
            }
          }
          const lIEModelAudio = aParametresSupplementaires
            ? aParametresSupplementaires.ieModelAudio
            : null;
          const lStrResultat = lReponseDonnee
            ? lEstLaBonneReponse
              ? 'Réponse correcte'
              : 'Réponse fausse'
            : '';
          const lHtmlReponseAttendu = !lEstLaBonneReponse
            ? IE.jsx.str(
                'div',
                { class: 'is-none' },
                IE.jsx.str(
                  'div',
                  { class: 'qcm-resultat' },
                  IE.jsx.str('i', {
                    class: 'icon-result',
                    role: 'presentation',
                  }),
                  IE.jsx.str(
                    'p',
                    { class: 'message' },
                    'Réponse attendue',
                  ),
                ),
                IE.jsx.str(
                  'p',
                  { class: 'Gras message' },
                  exports.UtilitaireQCM.getStringAffichageReponseMatching(
                    lBonneReponse,
                    true,
                    { indiceReponse: i, ieModelAudio: lIEModelAudio },
                  ),
                ),
              )
            : '';
          lLibelleReponsesRepondant +=
            (lLibelleReponsesRepondant !== '' ? ', ' : '') +
            exports.UtilitaireQCM.getLibelleAffichageReponseMatching(
              lReponse.associationA,
              { indiceReponse: i },
            ) +
            ' ' +
            'et' +
            ' ';
          lLibelleReponsesJustes +=
            (lLibelleReponsesJustes !== '' ? ', ' : '') +
            exports.UtilitaireQCM.getLibelleAffichageReponseMatching(
              lReponse.associationA,
              { indiceReponse: i },
            ) +
            ' ' +
            'et' +
            ' ';
          if (lEstAvecReponsesRepondant) {
            if (lReponseDonnee) {
              lLibelleReponsesRepondant +=
                exports.UtilitaireQCM.getLibelleAffichageReponseMatching(
                  lReponseDonnee.associationB,
                  {
                    indiceReponse: parseInt(
                      lReponseDonnee.associationB.hashContenu,
                    ),
                  },
                );
            } else {
              lLibelleReponsesRepondant +=
                'Aucune réponse donnée';
            }
          }
          lLibelleReponsesJustes +=
            exports.UtilitaireQCM.getLibelleAffichageReponseMatching(
              lBonneReponse,
              { indiceReponse: i },
            );
          const lCouleurResultat = lReponseDonnee
            ? lEstLaBonneReponse
              ? 'is-ok'
              : 'is-ko'
            : '';
          lHtml.push(
            IE.jsx.str(
              'div',
              { class: ['asso-item', lCouleurResultat] },
              exports.UtilitaireQCM.getStringAffichageReponseMatching(
                lReponse.associationA,
                true,
                { indiceReponse: i, ieModelAudio: lIEModelAudio },
              ),
              IE.jsx.str(
                'p',
                { class: 'Italique message' },
                'Associé(e) à :',
                lEstAvecReponsesRepondant && !lReponseDonnee
                  ? ' ' +
                      'Aucun élément associé'
                  : '',
              ),
              lStrResultat
                ? IE.jsx.str(
                    'div',
                    {
                      class:
                        ObjetVisuEleveQCM_css_1.SObjetVisuEleveQCM.qcmResultat,
                    },
                    IE.jsx.str('i', {
                      class: 'icon-result',
                      role: 'presentation',
                    }),
                    IE.jsx.str('p', { class: 'message' }, lStrResultat),
                  )
                : '',
              lEstAvecReponsesRepondant && lReponseDonnee
                ? exports.UtilitaireQCM.getStringAffichageReponseMatching(
                    lReponseDonnee.associationB,
                    true,
                    {
                      indiceReponse: parseInt(
                        lReponseDonnee.associationB.hashContenu,
                      ),
                      ieModelAudio: lIEModelAudio,
                    },
                  )
                : '',
              lHtmlReponseAttendu ? lHtmlReponseAttendu : '',
            ),
          );
        }
        lHtml.push('</div>');
        if (aAvecAccessibilite) {
          if (aQuestion.qualif === undefined) {
            aQuestion.qualif = _getResultatQuestion(
              aQuestion,
              lEvaluationNotePourQuestion,
              aParametresSupplementaires,
            );
          }
          const lResultat = _getLibelleResultat(
            aQuestion,
            lEvaluationNotePourQuestion,
            lLibelleReponsesRepondant,
          );
          const lReponseAttendu =
            aQuestion.qualif !==
            TypeQualificatifReponse_1.TypeQualificatifReponse.qrBonne
              ? 'La réponse attendue est %s.'
              : '';
          lHtml.push(
            IE.jsx.str(
              'div',
              { class: 'sr-only' },
              lResultat,
              ' ',
              lReponseAttendu,
            ),
          );
        }
        if (aEvaluationNote) {
          aEvaluationNote[aIndiceQuestion] = lEvaluationNotePourQuestion;
        }
        return lHtml.join('');
      },
      _composeReponsesCorrigeesDeQuestionCloze(
        aQuestion,
        aIndiceQuestion,
        aParametresSupplementaires,
        aEvaluationNote,
        aAvecAccessibilite,
      ) {
        var _a;
        const lEvaluationNotePourQuestion = {
          validee: true,
          nbBonnesReponses: 0,
          nbReponsesJustes: 0,
          question: aQuestion,
        };
        const lEnonceOriginel = aQuestion.enonceOriginel || aQuestion.enonce;
        const lEnonceOriginelAvecRempApostrophe = lEnonceOriginel
          .replace(/&#039;/gi, '&apos;')
          .replace(/’/g, "'")
          .replace(/«/g, '"')
          .replace(/»/g, '"');
        const lEstQuestionCaseSensitive = aQuestion.casesensitive !== false;
        const lListeReponsesJustes = [];
        lEnonceOriginelAvecRempApostrophe.replace(
          /{[0-9]*:(ShortAnswer|MultiChoice):(~*(%[0-9]{1,3}%|=)?[^~%#{}]+#?[^~%#{}]*)+}/gi,
          (ele) => {
            const lResponses = ele.match(
              /((multichoice:|shortanswer:|~)(%[0-9]{1,3}%|=)?[^~%#{}]+#?[^~%#{}]*)/gi,
            );
            for (const x in lResponses) {
              if (!MethodesObjet_1.MethodesObjet.isNumeric(x)) {
                continue;
              }
              const lNumber = parseInt(x);
              lResponses[lNumber] = lResponses[lNumber].replace(
                /^(multichoice:|shortanswer:)/i,
                '',
              );
              lResponses[lNumber] = lResponses[lNumber].replace(
                /^(:|~)?=/,
                '%100%',
              );
              lResponses[lNumber] = lResponses[lNumber].replace(
                /^(:|~)?([^~%#{}])/,
                '%0%$2',
              );
              let lResponse = lResponses[lNumber].split('%');
              lResponse.splice(
                2,
                1,
                lResponse[2].split('#')[0],
                lResponse[2].split('#')[1],
              );
              if (lResponse[1] === '100') {
                lListeReponsesJustes.push(lResponse[2].trim());
              }
            }
            return '';
          },
        );
        lEvaluationNotePourQuestion.nbBonnesReponses =
          lListeReponsesJustes.length;
        let lIndexElementInputSelectTrouve = 0;
        const lEnonceAvecReponse = lEnonceOriginelAvecRempApostrophe.replace(
          /{[0-9]*:(ShortAnswer|MultiChoice):(~*(%[0-9]{1,3}%|=)?[^~%#{}]+#?[^~%#{}]*)+}/gi,
          (ele) => {
            const lBonneReponse =
              lListeReponsesJustes[lIndexElementInputSelectTrouve];
            let lReponseRepondant = '';
            if (
              aQuestion.reponsesRepondant &&
              aQuestion.reponsesRepondant.length > 0 &&
              lIndexElementInputSelectTrouve <
                aQuestion.reponsesRepondant.length
            ) {
              lReponseRepondant =
                aQuestion.reponsesRepondant[lIndexElementInputSelectTrouve];
            }
            lIndexElementInputSelectTrouve++;
            let lRepondantABonneReponse = _sontChainesIdentiques(
              lReponseRepondant,
              lBonneReponse,
              lEstQuestionCaseSensitive,
            );
            if (lRepondantABonneReponse) {
              lEvaluationNotePourQuestion.nbReponsesJustes += 1;
            }
            const lClasseCSSReponse =
              lReponseRepondant && lRepondantABonneReponse ? 'is-ok' : 'is-ko';
            return IE.jsx.str(
              'div',
              { class: ['zone-reponse', 'inputs-corrige', lClasseCSSReponse] },
              IE.jsx.str('span', null, lReponseRepondant),
              IE.jsx.str('i', { class: 'icon-result', role: 'presentation' }),
            );
          },
        );
        lIndexElementInputSelectTrouve = 0;
        const lEnonceAvecCorrige = lEnonceOriginelAvecRempApostrophe.replace(
          /{[0-9]*:(ShortAnswer|MultiChoice):(~*(%[0-9]{1,3}%|=)?[^~%#{}]+#?[^~%#{}]*)+}/gi,
          (ele) => {
            const lBonneReponse =
              lListeReponsesJustes[lIndexElementInputSelectTrouve];
            lIndexElementInputSelectTrouve++;
            return IE.jsx.str(
              'div',
              { class: ['zone-reponse', 'inputs-corrige', 'is-none'] },
              IE.jsx.str('span', null, lBonneReponse),
            );
          },
        );
        if (aEvaluationNote) {
          aEvaluationNote[aIndiceQuestion] = lEvaluationNotePourQuestion;
        }
        const H = [];
        if (aAvecAccessibilite) {
          if (aQuestion.qualif === undefined) {
            aQuestion.qualif = _getResultatQuestion(
              aQuestion,
              lEvaluationNotePourQuestion,
            );
          }
          const lLibelleReponsesRepondant = [];
          (_a = aQuestion.reponsesRepondant) === null || _a === void 0
            ? void 0
            : _a.forEach((aReponse) => {
                if (aReponse !== '') {
                  lLibelleReponsesRepondant.push(aReponse);
                } else {
                  lLibelleReponsesRepondant.push(
                    'Aucune réponse donnée',
                  );
                }
              });
          const lResultat = _getLibelleResultat(
            aQuestion,
            lEvaluationNotePourQuestion,
            lLibelleReponsesRepondant.join(', '),
          );
          const lReponseAttendu =
            aQuestion.qualif !==
            TypeQualificatifReponse_1.TypeQualificatifReponse.qrBonne
              ? 'La réponse attendue est %s.'],
                )
              : '';
          H.push(
            IE.jsx.str(
              'div',
              { class: 'sr-only' },
              lResultat,
              ' ',
              lReponseAttendu,
              ' ',
              lEnonceAvecCorrige,
            ),
          );
        }
        H.push(
          IE.jsx.str(
            'div',
            { class: Divers_css_1.SD.tinyView, 'aria-hidden': 'true' },
            !(aParametresSupplementaires === null ||
            aParametresSupplementaires === void 0
              ? void 0
              : aParametresSupplementaires.estPrevisualisation)
              ? IE.jsx.str(
                  IE.jsx.fragment,
                  null,
                  lEnonceAvecReponse,
                  IE.jsx.str(
                    'div',
                    { class: 'legende-cloze' },
                    IE.jsx.str(
                      'span',
                      null,
                      'Légende :',
                    ),
                    IE.jsx.str(
                      'p',
                      { class: 'is-ok' },
                      IE.jsx.str('i', {
                        class: 'icon-result',
                        role: 'presentation',
                      }),
                      'Réponse correcte',
                    ),
                    IE.jsx.str(
                      'p',
                      { class: 'is-ko' },
                      IE.jsx.str('i', {
                        class: 'icon-result',
                        role: 'presentation',
                      }),
                      'Réponse fausse',
                    ),
                  ),
                  IE.jsx.str(
                    'p',
                    { class: 'is-none' },
                    IE.jsx.str('i', {
                      class: 'icon-result',
                      role: 'presentation',
                    }),
                    'Réponse attendue',
                  ),
                )
              : '',
            lEnonceAvecCorrige,
          ),
        );
        return H.join('');
      },
      verifierDateCorrection(aExecutionQCM) {
        if (
          aExecutionQCM.modeDiffusionCorrige !==
          TypeModeCorrectionQCM_1.TypeModeCorrectionQCM.FBQ_CorrigeALaDate
        ) {
          return;
        }
        if (!!aExecutionQCM.dateFinPublication) {
          if (
            !aExecutionQCM.dateCorrige ||
            ObjetDate_1.GDate.estAvantJour(
              aExecutionQCM.dateCorrige,
              aExecutionQCM.dateFinPublication,
            )
          ) {
            const lDate = ObjetDate_1.GDate.getJourSuivant(
              aExecutionQCM.dateFinPublication,
            );
            aExecutionQCM.dateCorrige = new Date(
              lDate.getFullYear(),
              lDate.getMonth(),
              lDate.getDate(),
            );
          }
        } else {
          if (
            !aExecutionQCM.dateCorrige ||
            ObjetDate_1.GDate.estAvantJour(
              aExecutionQCM.dateCorrige,
              ObjetDate_1.GDate.demain,
            )
          ) {
            const lDate = ObjetDate_1.GDate.demain;
            aExecutionQCM.dateCorrige = new Date(
              lDate.getFullYear(),
              lDate.getMonth(),
              lDate.getDate(),
            );
          }
        }
      },
      getIconeTypeExecutionQCM(aExecutionQCM) {
        let lNomIcone = '';
        if (!!aExecutionQCM) {
          if (aExecutionQCM.estLieADevoir && aExecutionQCM.estLieAEvaluation) {
            lNomIcone = 'icon_qcm_Evl_Devoir_20';
          } else if (aExecutionQCM.estLieADevoir) {
            lNomIcone = 'icon_saisie_note';
          } else if (aExecutionQCM.estLieAEvaluation) {
            lNomIcone = 'icon_saisie_evaluation';
          } else if (aExecutionQCM.estUnTAF) {
            if (aExecutionQCM.estUneActivite) {
              lNomIcone = 'icon_ecole';
            } else {
              lNomIcone = 'icon_home';
            }
          } else {
            lNomIcone = 'icon_taf';
          }
        }
        return lNomIcone;
      },
      composeNumerotation(aTypeNum, aNum) {
        if (aTypeNum === TypeNumerotation_1.TypeNumerotation.n123) {
          return aNum;
        } else if (aTypeNum === TypeNumerotation_1.TypeNumerotation.nABC) {
          return aphabetize(aNum).toUpperCase();
        } else if (aTypeNum === TypeNumerotation_1.TypeNumerotation.NRoman) {
          return romanize(aNum);
        }
        return '';
      },
      estCliquable(aExecutionQCM, aIgnorerTestCorrige) {
        return (
          !!aExecutionQCM.fichierDispo &&
          (GEtatUtilisateur.estEspacePourEleve()
            ? exports.UtilitaireQCM.estJouable(aExecutionQCM) ||
              (aIgnorerTestCorrige
                ? true
                : exports.UtilitaireQCM.estCorrige(aExecutionQCM))
            : !!GEtatUtilisateur.estEspacePourProf())
        );
      },
      estJouable(aExecutionQCM) {
        return (
          aExecutionQCM.estEnPublication === true &&
          ((aExecutionQCM.etatCloture !==
            TypeEtatExecutionQCMPourRepondant_1
              .TypeEtatExecutionQCMPourRepondant.EQR_DureeMaxDepassee &&
            aExecutionQCM.etatCloture !==
              TypeEtatExecutionQCMPourRepondant_1
                .TypeEtatExecutionQCMPourRepondant.EQR_Termine) ||
            aExecutionQCM.estRejouable ||
            (aExecutionQCM.nbMaxTentative > 1 &&
              aExecutionQCM.nbMaxTentative > aExecutionQCM.nbTentatives))
        );
      },
      estCorrige(aExecutionQCM) {
        return aExecutionQCM.publierCorrige === true;
      },
      getValeurContenuReponseMatching(aElementAssociation) {
        let lStrContenu;
        if (!!aElementAssociation) {
          switch (aElementAssociation.getGenre()) {
            case TypeGenreAssociationQuestionQCM_1.TypeGenreElementAssociation
              .GEA_Texte:
              lStrContenu = aElementAssociation.strTexte;
              break;
            case TypeGenreAssociationQuestionQCM_1.TypeGenreElementAssociation
              .GEA_Image:
              lStrContenu = ObjetChaine_1.GChaine.ajouterEntites(
                aElementAssociation.strImage,
              );
              break;
            case TypeGenreAssociationQuestionQCM_1.TypeGenreElementAssociation
              .GEA_Son:
              lStrContenu = ObjetChaine_1.GChaine.ajouterEntites(
                aElementAssociation.strSon,
              );
              break;
          }
        }
        return lStrContenu;
      },
      getLibelleAffichageReponseMatching(
        aElementAssociation,
        aParametresSupplementairesSon,
      ) {
        let lLibelleContenu = '';
        if (!!aElementAssociation) {
          switch (aElementAssociation.getGenre()) {
            case TypeGenreAssociationQuestionQCM_1.TypeGenreElementAssociation
              .GEA_Texte:
              lLibelleContenu = aElementAssociation.strTexte;
              break;
            case TypeGenreAssociationQuestionQCM_1.TypeGenreElementAssociation
              .GEA_Image:
              lLibelleContenu = aElementAssociation.strLibelleImage;
              break;
            case TypeGenreAssociationQuestionQCM_1.TypeGenreElementAssociation
              .GEA_Son: {
              let lIndiceReponseAudio = 0;
              if (
                !!aParametresSupplementairesSon &&
                aParametresSupplementairesSon.indiceReponse
              ) {
                lIndiceReponseAudio =
                  aParametresSupplementairesSon.indiceReponse;
              }
              lIndiceReponseAudio++;
              lLibelleContenu =
                aElementAssociation.strLibelleSon ||
                'Son' +
                  ' ' +
                  lIndiceReponseAudio;
              break;
            }
          }
        }
        return lLibelleContenu;
      },
      getStringAffichageReponseMatching(
        aElementAssociation,
        aPourVisuEleve = false,
        aParametresSupplementairesSon,
      ) {
        const H = [];
        if (!!aElementAssociation) {
          const lStrContenu =
            exports.UtilitaireQCM.getValeurContenuReponseMatching(
              aElementAssociation,
            );
          switch (aElementAssociation.getGenre()) {
            case TypeGenreAssociationQuestionQCM_1.TypeGenreElementAssociation
              .GEA_Texte:
              H.push(IE.jsx.str('span', { class: 'asso' }, lStrContenu));
              break;
            case TypeGenreAssociationQuestionQCM_1.TypeGenreElementAssociation
              .GEA_Image: {
              H.push(
                IE.jsx.str(
                  'div',
                  { class: 'asso with-img' },
                  IE.jsx.str('img', {
                    alt: aElementAssociation.strLibelleImage,
                    src:
                      'data:image/png;base64,' +
                      ObjetChaine_1.GChaine.supprimerRC(lStrContenu || ''),
                  }),
                ),
              );
              break;
            }
            case TypeGenreAssociationQuestionQCM_1.TypeGenreElementAssociation
              .GEA_Son:
              H.push('<div class="asso">');
              if (!!aPourVisuEleve) {
                let lIndiceReponseAudio = 0;
                if (
                  !!aParametresSupplementairesSon &&
                  aParametresSupplementairesSon.indiceReponse
                ) {
                  lIndiceReponseAudio =
                    aParametresSupplementairesSon.indiceReponse;
                }
                lIndiceReponseAudio++;
                const lLibelleSon =
                  aElementAssociation.strLibelleSon ||
                  'Son' +
                    ' ' +
                    lIndiceReponseAudio;
                const lChips =
                  UtilitaireAudio_1.UtilitaireAudio.construitChipsAudio({
                    base64Audio: ObjetChaine_1.GChaine.supprimerRC(
                      aElementAssociation.strSon || '',
                    ),
                    libelle: lLibelleSon,
                    ieModel:
                      aParametresSupplementairesSon === null ||
                      aParametresSupplementairesSon === void 0
                        ? void 0
                        : aParametresSupplementairesSon.ieModelAudio,
                  });
                H.push(lChips);
              } else {
                H.push(aElementAssociation.strNomFichier);
              }
              H.push('</div>');
              break;
          }
        }
        return H.join('');
      },
      getStrResumeModalites(aExec, aSansDuree) {
        const H = [];
        let lNbQuestions =
          aExec.nombreQuestionsSoumises > 0
            ? aExec.nombreQuestionsSoumises
            : aExec.QCM.nbQuestionsTotal;
        if (aExec.nombreQuestionsEnMoins) {
          lNbQuestions -= aExec.nombreQuestionsEnMoins;
        }
        lNbQuestions = Math.max(lNbQuestions, 1);
        if (lNbQuestions === 1) {
          H.push(
            '1 question',
          );
        } else {
          H.push(
            '%d questions',
          );
        }
        if (aExec.dureeMaxQCM > 0 && aSansDuree !== true) {
          let lDureeMax = aExec.dureeMaxQCM;
          if (aExec.dureeSupplementaire) {
            lDureeMax += aExec.dureeSupplementaire;
          }
          H.push(
            ' - ',
            'durée %d min',
            ]),
          );
        }
        return H.join('');
      },
      composeReponsesFaitesEleve(
        aCopieQuestion,
        aIndexQuestion,
        aReponsesEleveFaites,
      ) {
        aCopieQuestion.reponsesRepondant = aReponsesEleveFaites;
        return exports.UtilitaireQCM.composeReponsesCorrigeesDeQuestion(
          aCopieQuestion,
          aIndexQuestion,
        );
      },
    };
    function _getResultatQuestion(
      aQuestion,
      aEvaluationQuestionJouee,
      aParametresSupplementaires,
    ) {
      var _a;
      if (
        ((_a = aQuestion.reponsesRepondant) === null || _a === void 0
          ? void 0
          : _a.length) &&
        exports.UtilitaireQCM.avecReponseRepondant(aQuestion.reponsesRepondant)
      ) {
        if (
          aEvaluationQuestionJouee.nbBonnesReponses ===
          aEvaluationQuestionJouee.nbReponsesJustes
        ) {
          return TypeQualificatifReponse_1.TypeQualificatifReponse.qrBonne;
        } else if (
          (aParametresSupplementaires === null ||
          aParametresSupplementaires === void 0
            ? void 0
            : aParametresSupplementaires.acceptIncomplet) &&
          aEvaluationQuestionJouee.nbReponsesJustes > 0
        ) {
          return TypeQualificatifReponse_1.TypeQualificatifReponse
            .qrBonnePartielle;
        } else {
          return TypeQualificatifReponse_1.TypeQualificatifReponse.qrFausse;
        }
      } else {
        return TypeQualificatifReponse_1.TypeQualificatifReponse.qrSansReponse;
      }
    }
    function _getLibelleResultat(
      aQuestion,
      aEvaluationQuestionJouee,
      aLibelleReponsesRepondant,
      aParametresSupplementaires,
    ) {
      var _a;
      const lStrBonneReponse = 'Bonne réponse, vous avez répondu %s.';
      const lStrReponsePartielle = 'Réponse partielle, vous avez répondu %s.';
      const lStrMauvaiseReponse = 'Mauvaise réponse, vous avez répondu %s.';
      const lStrNonRepondu =
        'Non répondue' +
        '.';
      if (aQuestion.qualif !== undefined) {
        switch (aQuestion.qualif) {
          case TypeQualificatifReponse_1.TypeQualificatifReponse.qrBonne:
            return lStrBonneReponse;
          case TypeQualificatifReponse_1.TypeQualificatifReponse
            .qrBonnePartielle:
            return lStrReponsePartielle;
          case TypeQualificatifReponse_1.TypeQualificatifReponse.qrFausse:
            return lStrMauvaiseReponse;
          case TypeQualificatifReponse_1.TypeQualificatifReponse.qrSansReponse:
            return lStrNonRepondu;
        }
      } else {
        if (
          (_a = aQuestion.reponsesRepondant) === null || _a === void 0
            ? void 0
            : _a.length
        ) {
          if (
            aEvaluationQuestionJouee.nbBonnesReponses ===
            aEvaluationQuestionJouee.nbReponsesJustes
          ) {
            return lStrBonneReponse;
          } else if (
            (aParametresSupplementaires === null ||
            aParametresSupplementaires === void 0
              ? void 0
              : aParametresSupplementaires.acceptIncomplet) &&
            aEvaluationQuestionJouee.nbReponsesJustes > 0
          ) {
            return lStrReponsePartielle;
          } else {
            return lStrMauvaiseReponse;
          }
        } else {
          return lStrNonRepondu;
        }
      }
    }
    function aphabetize(aNum) {
      let lResult = '';
      while (aNum > 0) {
        aNum--;
        const lRemain = aNum % 26;
        lResult = String.fromCharCode(lRemain + 97) + lResult;
        aNum = (aNum - lRemain) / 26;
      }
      return lResult;
    }
    function romanize(aNum) {
      const lLookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      };
      let lRoman = '';
      for (const i in lLookup) {
        while (aNum >= lLookup[i]) {
          lRoman += i;
          aNum -= lLookup[i];
        }
      }
      return lRoman;
    }
    function _sontChainesIdentiques(aValeur1, aValeur2, aCaseSensitive) {
      return ComparateurChaines_1.ComparateurChaines.egal(aValeur1, aValeur2, {
        caseSensitive: aCaseSensitive,
        accentSensitive: aCaseSensitive,
        avecTrim: true,
        unifierEspacements: true,
        unifierCarWord: true,
      });
    }
  },
  fn: 'utilitaireqcm.js',
});