IE.fModule({
  f: function (exports, require, module, global) {
    const { GTraductions } = require('ObjetTraduction.js');
    const { GChaine } = require('ObjetChaine.js');
    const { GDate } = require('ObjetDate.js');
    const { GHtml } = require('ObjetHtml.js');
    const { TUtilitaireInfoSondage } = require('UtilitaireInfoSondage.js');
    const { EGenreEvntActu } = require('EGenreEvntActu.js');
    const { ObjetListeElements } = require('ObjetListeElements.js');
    const { ObjetElement } = require('ObjetElement.js');
    const { ObjetTri } = require('ObjetTri.js');
    const { EGenreTriElement } = require('Enumere_TriElement.js');
    const { Toast, ETypeToast } = require('Toast.js');
    const { MethodesObjet } = require('MethodesObjet.js');
    const { TypeEnsembleNombre } = require('TypeEnsembleNombre.js');
    const { TypeDomaine } = require('TypeDomaine.js');
    const { EGenreEtat } = require('Enumere_Etat.js');
    const { EGenreBoiteMessage } = require('Enumere_BoiteMessage.js');
    const { EGenreAction } = require('Enumere_Action.js');
    const { ETypeAffEnModeMixte } = require('Enumere_MenuCtxModeMixte.js');
    const { UtilitaireUrl } = require('UtilitaireUrl.js');
    const { MoteurDestinataires } = require('MoteurDestinataires.js');
    const { SyntheseVocale } = require('UtilitaireSyntheseVocale.js');
    require('InfoSondage.css');
    const EGenreEvntMenuCtxBlocInfoSondage = {
      editerActu: 1,
      supprimerActu: 2,
      dupliquerActu: 3,
      publier: 4,
      depublier: 5,
      marquerLu: 6,
      marquerNonLu: 7,
      supprimerConsult: 8,
      demarrerDiscussion: 9,
      creerModeleDepuisExistant: 10,
      recupererModele: 11,
      voirResultats: 12,
      publierModele: 13,
      nePasPublierModele: 14,
      exporterModele: 15,
      publierPageEtablissement: 17,
      depublierPageEtablissement: 18,
      relancerSelection: 19,
    };
    class MoteurInfoSondage {
      constructor(aParam) {
        this.utilitaires = {
          genreReponse: aParam.genreReponse,
          genreRessource: aParam.genreRessource,
          genreEspace: aParam.genreEspace,
        };
        this.moteurDestinataires = new MoteurDestinataires(this.utilitaires);
      }
      composeComposanteInfoSondage(aParam) {
        if (aParam.actu.estSondage) {
          return this.composeComposanteSondage(aParam);
        } else {
          return this.composeComposanteInfo(aParam);
        }
      }
      composePiecesJointes(aParam) {
        const H = [];
        const lListePJ = new ObjetListeElements();
        let lAvecImage = false;
        if (
          !!aParam.composante.listePiecesJointes &&
          aParam.composante.listePiecesJointes.count()
        ) {
          aParam.composante.listePiecesJointes.parcourir((aElement) => {
            if (!aElement.avecMiniaturePossible) {
              lListePJ.add(aElement);
            } else {
              lAvecImage = true;
            }
          });
          if (lListePJ.count()) {
            H.push(
              '<div style="margin-top: 1.5rem;">',
              UtilitaireUrl.construireListeUrls(lListePJ, {
                genreRessource:
                  this.utilitaires.genreRessource.getRessourceDocJointEtablissement(),
                separateur: '<br>',
              }),
              '</div>',
            );
          }
          if (lAvecImage) {
            H.push(
              `<div ie-identite="getCarrouselInfoSondage('${aParam.composante.getNumero()}')"></div>`,
            );
          }
        }
        return H.join('');
      }
      composeContenuTexte(aParam, aId) {
        const H = [];
        H.push(
          '<div class="tiny-view" id="',
          this.getIdTexteComposante(aId),
          '">',
          this.getTexteComposante(aParam),
          '</div>',
        );
        return H.join('');
      }
      getTexteComposante(aParam) {
        return aParam.composante.texte;
      }
      getIdReponse(aParam) {
        return aParam.instance.Nom + '_reponse_' + aParam.indice;
      }
      getIdReponseInputTexteLibre(aId, I) {
        return aId + '_reponselibre_' + I;
      }
      getIdTexteComposante(aId) {
        return 'titre_' + aId;
      }
      composeDescriptif(aParam) {
        const lActu = aParam.actualite;
        const lEstModeReception = !aParam.avecEditionActualite;
        const lEstModeDiffusion = aParam.avecEditionActualite;
        const H = [];
        if (lActu) {
          H.push('<div class="Actu_InfoSondage">');
          H.push(
            '<div class="zoneTitreIntegral-info-sondage ',
            lEstModeDiffusion ? 'modeDiffusion' : '',
            '">',
          );
          H.push(this.composeIconInfoSond({ actualite: lActu }));
          H.push('<div class="zoneTitre-info-sondage">');
          if (aParam.avecTitre) {
            H.push('<div class="titre-info-sondage">');
            H.push(lActu.getLibelle());
            H.push('</div>');
          }
          H.push('<div>');
          const lAvecCategorie =
            lActu.categorie !== null && lActu.categorie !== undefined;
          if (lAvecCategorie) {
            H.push(lActu.categorie.getLibelle());
          }
          if (lEstModeReception && !!lActu.auteur) {
            H.push(lAvecCategorie ? ' - ' : '');
            H.push(lActu.auteur);
          }
          H.push('</div>');
          if (lEstModeReception && this.avecInfoPublic(lActu)) {
            H.push('<div>');
            H.push(lActu.public.getLibelle());
            H.push('</div>');
          }
          if (lEstModeReception && aParam.avecDate) {
            H.push('<div>');
            H.push(GDate.formatDate(lActu.dateDebut, '%JJJ %JJ %MMMM'));
            H.push('</div>');
          }
          if (lActu.estSondage) {
            H.push('<div>');
            H.push(
              lActu.reponseAnonyme
                ? GTraductions.getValeur('actualites.InfoAnonyme')
                : GTraductions.getValeur('actualites.InfoNominatif'),
            );
            if (
              lActu.reponseAnonyme &&
              lActu.strInfoSondageAnonyme !== null &&
              lActu.strInfoSondageAnonyme !== undefined
            ) {
              H.push(' (', lActu.strInfoSondageAnonyme, ')');
            }
            H.push('</div>');
          }
          if (lEstModeDiffusion && !lActu.estModele) {
            H.push(
              '<div class="publication-info-sondage">',
              this.composeInfoPublication(aParam),
              this.composeInfoDiffusionPageEtablissement(aParam),
              '</div>',
            );
            if (
              !lActu.estInformation &&
              lActu.listeIndividusPartage !== null &&
              lActu.listeIndividusPartage !== undefined
            ) {
              const lNbrPartage = lActu.listeIndividusPartage.count();
              if (lNbrPartage > 0) {
                const lStr =
                  lNbrPartage > 1
                    ? GTraductions.getValeur('infoSond.detailPartageSondN', [
                        lNbrPartage,
                      ])
                    : GTraductions.getValeur('infoSond.detailPartageSondage', [
                        lActu.listeIndividusPartage.getLibelle(0),
                      ]);
                H.push('<div class="partage-info-sondage">', lStr, '</div>');
              }
            }
          }
          if (lEstModeDiffusion) {
            const lModeSuccinct = aParam.avecDetailPublicSuccinct === true;
            const lDetailPublic = lModeSuccinct
              ? lActu.detailPublicSuccinct
                ? GChaine.replaceRCToHTML(lActu.detailPublicSuccinct)
                : ''
              : lActu.detailPublic
                ? lActu.detailPublic
                : '';
            const lClassPublic = lModeSuccinct
              ? 'publicSucc-info-sondage'
              : 'public-info-sondage';
            H.push('<div class="', lClassPublic, '">', lDetailPublic, '</div>');
          }
          const lAvecPourcentageTauxDeReponse =
            Object.prototype.hasOwnProperty.call(lActu, 'pourcentRepondu') &&
            MethodesObjet.isNumeric(lActu.pourcentRepondu);
          if (lAvecPourcentageTauxDeReponse) {
            const lTrad = GTraductions.getValeur(
              lActu.estSondage
                ? 'infoSond.TauxReponse'
                : lActu.estInformation
                  ? 'infoSond.TauxLecture'
                  : '',
            );
            H.push(
              `<div>${lTrad} : <span class="Gras">${lActu.pourcentRepondu}</span> %</div>`,
            );
          }
          H.push('</div>');
          H.push('</div>');
          H.push('</div>');
        }
        return H.join('');
      }
      composeDescriptifLecture(aActu, aEstModeReception) {
        const H = [];
        const lEstModeReception = aEstModeReception;
        const lEstModeDiffusion = !aEstModeReception;
        const lStr = aActu.estSondage
          ? GTraductions.getValeur('infoSond.sondage')
          : GTraductions.getValeur('infoSond.information');
        H.push(lStr + ' : ' + aActu.getLibelle().enleverEntites() + '. ');
        const lAvecCategorie =
          aActu.categorie !== null && aActu.categorie !== undefined;
        if (lAvecCategorie) {
          H.push(aActu.categorie.getLibelle());
        }
        if (lEstModeReception && !!aActu.auteur) {
          H.push(lAvecCategorie ? '-' : '');
          H.push(aActu.auteur + '. ');
        }
        if (lEstModeReception && this.avecInfoPublic(aActu)) {
          H.push(aActu.public.getLibelle().enleverEntites() + '. ');
        }
        if (lEstModeReception) {
          H.push(GDate.formatDate(aActu.dateDebut, '%JJJ %JJ %MMMM') + '. ');
        }
        if (aActu.estSondage) {
          H.push(
            aActu.reponseAnonyme
              ? GTraductions.getValeur('actualites.InfoAnonyme')
              : GTraductions.getValeur('actualites.InfoNominatif'),
          );
          if (
            aActu.reponseAnonyme &&
            aActu.strInfoSondageAnonyme !== null &&
            aActu.strInfoSondageAnonyme !== undefined
          ) {
            const lContenu = aActu.strInfoSondageAnonyme.enleverEntites();
            if (lContenu) {
              H.push(' (', lContenu, ')');
            }
          }
          H.push('. ');
        }
        if (lEstModeDiffusion && !aActu.estModele) {
          H.push(
            this.composeInfoPublicationLecture(aActu),
            this.composeInfoDiffusionPageEtablissementLecture(aActu),
          );
          if (
            !aActu.estInformation &&
            aActu.listeIndividusPartage !== null &&
            aActu.listeIndividusPartage !== undefined
          ) {
            const lNbrPartage = aActu.listeIndividusPartage.count();
            if (lNbrPartage > 0) {
              const lStr =
                lNbrPartage > 1
                  ? GTraductions.getValeur('infoSond.detailPartageSondN', [
                      lNbrPartage,
                    ])
                  : GTraductions.getValeur('infoSond.detailPartageSondage', [
                      aActu.listeIndividusPartage.getLibelle(0),
                    ]);
              H.push(lStr);
            }
          }
        }
        if (lEstModeDiffusion && aActu.detailPublic) {
          const lJNode = $(aActu.detailPublic);
          const lContenu = lJNode.text() || lJNode.val();
          H.push(lContenu);
        }
        const lAvecPourcentageTauxDeReponse =
          Object.prototype.hasOwnProperty.call(aActu, 'pourcentRepondu') &&
          MethodesObjet.isNumeric(aActu.pourcentRepondu);
        if (lAvecPourcentageTauxDeReponse) {
          const lTrad = GTraductions.getValeur(
            aActu.estSondage
              ? 'infoSond.TauxReponse'
              : aActu.estInformation
                ? 'infoSond.TauxLecture'
                : '',
          );
          H.push(`${lTrad} : ${aActu.pourcentRepondu}%. `);
        }
        for (let i = 0, lNbr = aActu.listeQuestions.count(); i < lNbr; i++) {
          const lQuestion = aActu.listeQuestions.get(i);
          const lParam = {
            actu: aActu,
            composante: lQuestion,
            indice: i,
            avecLibelleQuestion: aActu.listeQuestions.count() > 1,
            estAffEditionActualite: lEstModeDiffusion,
          };
          if (aActu.estSondage) {
            if (
              lParam.avecLibelleQuestion &&
              this.estComposanteQuestion(lParam)
            ) {
              H.push(lQuestion.getLibelle().enleverEntites() + '. ');
            }
            if (
              this.estComposanteQuestChoixMultiple(lParam) &&
              this.estComposanteAvecMaximum(lParam)
            ) {
              H.push(
                GTraductions.getValeur('actualites.Edition.NbrMaxChoix', [
                  this.getNbReponsesMaxDeComposante(lParam),
                ]),
              );
            }
            const lJNodeQ = $(lQuestion.texte);
            const lContenuQ = lJNodeQ.text() || lJNodeQ.val();
            H.push(lContenuQ + '. ');
            if (this.estComposanteQuestTextuelle(lParam) && lQuestion.reponse) {
              H.push(
                lQuestion.reponse.valeurReponse
                  ? lQuestion.reponse.valeurReponse + '. '
                  : '',
              );
            } else if (
              this.estComposanteQuestChoixUnique(lParam) ||
              this.estComposanteQuestChoixMultiple(lParam)
            ) {
              const lHtmlChoix = this.composeReponseChoix(lParam, '');
              const lArrTextes =
                SyntheseVocale.getTextesDUneChaineHTML(lHtmlChoix);
              H.push(lArrTextes.join('. ') + '. ');
            }
            H.push(this.composePJLecture(lQuestion) + '. ');
          } else {
            const lJNodeQ = $(lQuestion.texte);
            const lContenuQ = lJNodeQ.text() || lJNodeQ.val();
            H.push(lContenuQ + '. ');
            H.push(this.composePJLecture(lQuestion) + '. ');
            if (this.estComposanteAvecAR(lParam)) {
              if (lQuestion.reponse.estRepondant === false) {
                H.push(
                  GTraductions.getValeur('actualites.XAPrisConnaissanceLeX', [
                    lQuestion.reponse.strRepondant,
                    GDate.formatDate(
                      lQuestion.reponse.reponduLe,
                      '%JJ/%MM/%AAAA',
                    ),
                  ]),
                );
              } else {
                H.push(GTraductions.getValeur('accueil.prisConnaissance'));
              }
            }
          }
        }
        return H.join(' ');
      }
      composePJLecture(aQuestion) {
        const H = [];
        if (
          !!aQuestion.listePiecesJointes &&
          aQuestion.listePiecesJointes.count()
        ) {
          const lListePJ = new ObjetListeElements();
          aQuestion.listePiecesJointes.parcourir((aElement) => {
            if (!aElement.avecMiniaturePossible) {
              lListePJ.add(aElement);
            }
          });
          if (lListePJ.count()) {
            let lArrDocs = lListePJ.getTableauLibelles();
            if (lArrDocs.length > 0) {
              H.push(
                lArrDocs.length > 1
                  ? GTraductions.getValeur('actualites.DocumentsJoints')
                  : GTraductions.getValeur('actualites.DocumentJoint'),
                ' : ',
                lArrDocs.join(', '),
              );
            }
          }
        }
        return H.join(' ');
      }
      composeIconInfoSond(aParam) {
        const lIcon = aParam.actualite.estSondage
          ? 'icon_diffuser_sondage'
          : 'icon_diffuser_information';
        const lStr = aParam.actualite.estSondage
          ? GTraductions.getValeur('infoSond.sondage')
          : GTraductions.getValeur('infoSond.information');
        return (
          '<i role="img" aria-label="' +
          lStr +
          '" class="' +
          lIcon +
          ' icon-titre" aria-hidden="true"></i>'
        );
      }
      composeIconDiffusionPageEtablissement(aParam) {
        const H = [];
        if (
          !!aParam.actualite &&
          aParam.actualite.publicationPageEtablissement
        ) {
          const lInfos = this.getInfosPublication(aParam.actualite);
          const lIcon = 'icon_ecole';
          const lColor = _getFlatClassColorPublication.call(this, lInfos);
          const lStr = GTraductions.getValeur(
            'actualites.Edition.DiffuseSurPageEtab',
          );
          H.push(
            '<i role="img" alt="',
            lStr,
            '" title="',
            lStr,
            '" class="icon ' + lIcon + ' ' + lColor + '"></i>',
          );
        }
        return H.join('');
      }
      composeInfoDiffusionPageEtablissement(aParam) {
        const H = [];
        if (
          !!aParam.actualite &&
          aParam.actualite.publicationPageEtablissement
        ) {
          const lInfos = this.getInfosPublication(aParam.actualite);
          const lIcon = 'icon_ecole';
          const lCssColor = _getFlatClassColorPublication.call(this, lInfos);
          const lStr = GTraductions.getValeur(
            'actualites.Edition.DiffuseSurPageEtab',
          );
          H.push(
            '<div><div class="infos-icon ',
            lIcon,
            ' ',
            lCssColor,
            '">',
            lStr,
            '</div></div>',
          );
        }
        return H.join('');
      }
      composeInfoDiffusionPageEtablissementLecture(aActu) {
        const H = [];
        if (!!aActu && aActu.publicationPageEtablissement) {
          const lStr = GTraductions.getValeur(
            'actualites.Edition.DiffuseSurPageEtab',
          );
          H.push(lStr);
        }
        return H.join('');
      }
      composeIconPublication(aParam) {
        const lInfos = this.getInfosPublication(aParam.actualite);
        const lIcon = _getIconePublication.call(this, lInfos);
        const lColor = _getFlatClassColorPublication.call(this, lInfos);
        const lStr = _getStrPublication.call(this, lInfos);
        const H = [];
        H.push(
          '<i title="',
          lStr,
          '" class="icon ' + lIcon + ' ' + lColor + '"></i>',
        );
        return H.join('');
      }
      composeInfoPublication(aParam) {
        const lActu = aParam.actualite;
        const H = [];
        const lInfos = this.getInfosPublication(lActu);
        const lIcon = _getIconePublication.call(this, lInfos);
        const lCssColor = _getFlatClassColorPublication.call(this, lInfos);
        const lStr = _getStrPublication.call(this, lInfos);
        const lDatesPublication =
          lInfos.estPubliee && lActu.date ? ' - ' + lActu.date : '';
        H.push(
          '<div class="infos-icon has-text ',
          lIcon,
          ' ',
          lCssColor,
          '"><span class="libelle">',
          lStr + lDatesPublication,
          '</span></div>',
        );
        return H.join('');
      }
      composeInfoPublicationLecture(aActu) {
        const H = [];
        const lInfos = this.getInfosPublication(aActu);
        const lStr = _getStrPublication.call(this, lInfos);
        const lDatesPublication =
          lInfos.estPubliee && aActu.date ? ' - ' + aActu.date : '';
        H.push(lStr + lDatesPublication);
        return H.join('');
      }
      estComposanteTexte(aParam) {
        return this.utilitaires.genreReponse.estGenreSansReponse(
          aParam.composante.genreReponse,
        );
      }
      estComposanteQuestion(aParam) {
        return !this.estComposanteTexte(aParam);
      }
      estComposanteQuestChoixMultiple(aParam) {
        return this.utilitaires.genreReponse.estGenreChoixMultiple(
          aParam.composante.genreReponse,
        );
      }
      estComposanteQuestChoixUnique(aParam) {
        return this.utilitaires.genreReponse.estGenreChoixUnique(
          aParam.composante.genreReponse,
        );
      }
      estComposanteQuestTextuelle(aParam) {
        return this.utilitaires.genreReponse.estGenreTextuelle(
          aParam.composante.genreReponse,
        );
      }
      estComposanteAvecMaximum(aParam) {
        return aParam.composante.avecMaximum;
      }
      getNbReponsesMaxDeComposante(aParam) {
        return aParam.composante.nombreReponsesMax;
      }
      getLibelleComposante(aParam) {
        return aParam.composante.getLibelle();
      }
      getLibelleAffichageComposanteQuest(aParam) {
        const lComposante = aParam.composante;
        const lAvecAbbr =
          lComposante.titre !== null &&
          lComposante.titre !== undefined &&
          lComposante.titre !== '';
        const lEstTxt = this.utilitaires.genreReponse.estGenreSansReponse(
          lComposante.genreReponse,
        );
        const lCleTraductionLibelleConflit = lAvecAbbr
          ? lEstTxt
            ? 'actualites.Edition.AbbrTxtN'
            : 'actualites.Edition.AbbrQuN'
          : lEstTxt
            ? 'actualites.Edition.TexteN'
            : 'actualites.Edition.QuestionN';
        let lResult = GTraductions.getValeur(lCleTraductionLibelleConflit, [
          aParam.rang,
        ]);
        if (lAvecAbbr) {
          lResult = lResult + ' : ' + lComposante.titre;
        }
        return lResult;
      }
      composeComposanteSondage(aParam) {
        const H = [];
        const lId = this.getIdReponse(aParam);
        if (aParam.avecLibelleQuestion && this.estComposanteQuestion(aParam)) {
          H.push(
            '<div class="InfoSond_Question">',
            this.getLibelleComposante(aParam),
            '</div>',
          );
        }
        if (
          this.estComposanteQuestChoixMultiple(aParam) &&
          this.estComposanteAvecMaximum(aParam)
        ) {
          H.push(
            '<div class="InfoSond_NbChoixLimite">',
            GTraductions.getValeur('actualites.Edition.NbrMaxChoix', [
              this.getNbReponsesMaxDeComposante(aParam),
            ]),
            '</div>',
          );
        }
        H.push(this.composeContenuTexte(aParam, lId));
        H.push(this.composeReponsesSondage(aParam, lId));
        H.push(this.composePiecesJointes(aParam));
        return H.join('');
      }
      composeReponsesSondage(aParam, aId) {
        const H = [];
        H.push('<div id="', aId, '">');
        if (this.estComposanteQuestTextuelle(aParam)) {
          H.push(this.composeReponseTextuelle(aParam, aId));
        } else if (
          this.estComposanteQuestChoixUnique(aParam) ||
          this.estComposanteQuestChoixMultiple(aParam)
        ) {
          H.push(this.composeReponseChoix(aParam, aId));
        }
        H.push('</div>');
        return H.join('');
      }
      composeReponseTextuelle(aParam, aId) {
        const H = [];
        H.push(
          '<div style="width:calc(100% - 1rem); margin-top:1rem; margin-bottom:1rem;">',
        );
        H.push(
          '<ie-textareamax tabindex="-1" id="',
          aId,
          '_0" ',
          GHtml.composeAttr(
            'ie-model',
            'surSaisieReponseTextuelle',
            aParam.indice,
          ),
          ' maxlength="' + aParam.composante.tailleReponse + '" placeholder="',
          GTraductions.getValeur('actualites.SaisirReponse'),
          '" ',
          IE.estMobile ? '' : ' style="height:6rem;" rows="6" ',
          aParam.estAffEditionActualite || GApplication.getModeExclusif()
            ? ' disabled'
            : '',
          '></ie-textareamax>',
        );
        H.push('</div>');
        return H.join('');
      }
      composeReponseChoix(aParam, aId) {
        const H = [];
        const lComposante = aParam.composante;
        if (lComposante) {
          const lEstQuestChoixMulti =
            this.estComposanteQuestChoixMultiple(aParam);
          const lEstAvecMax =
            lEstQuestChoixMulti && this.estComposanteAvecMaximum(aParam);
          const lNombreCoche = lEstAvecMax
            ? lComposante.reponse && lComposante.reponse.valeurReponse
              ? lComposante.reponse.valeurReponse.getNbrValeurs()
              : 0
            : 0;
          for (
            let I = 0, lNbr = lComposante.listeChoix.count();
            I < lNbr;
            I++
          ) {
            const lReponseChoix = lComposante.listeChoix.get(I);
            const lNr = I + 1;
            const lValeurReponse =
              !aParam.estAffEditionActualite &&
              lComposante.reponse &&
              lComposante.reponse.valeurReponse
                ? lComposante.reponse.valeurReponse.getValeur(lNr)
                : undefined;
            const lEstAffichageEnLectureSeule =
              aParam.estAffEditionActualite || GApplication.getModeExclusif();
            let lEstCocheDisabled = false;
            if (lEstAffichageEnLectureSeule) {
              lEstCocheDisabled = true;
            } else if (
              lEstAvecMax &&
              lNombreCoche >= lComposante.nombreReponsesMax
            ) {
              lEstCocheDisabled = !lValeurReponse;
            }
            const ieInput = lEstQuestChoixMulti ? 'ie-checkbox' : 'ie-radio';
            const lSurSaisie = aParam.instance
              ? aParam.instance.Nom +
                '.surSaisieReponse (' +
                aParam.indice +
                ', value, checked);'
              : '';
            const lIdCoche = aId + '_' + I;
            H.push('<div class="InfoSond_InfoCoche" >');
            H.push(
              '<',
              ieInput,
              ' ie-textright id="',
              lIdCoche,
              '" name="coches_',
              aId,
              '"',
              ' onclick="',
              lSurSaisie,
              '" value="',
              lNr,
              '"' +
                (lValeurReponse ? ' checked="checked"' : '') +
                (lEstCocheDisabled ? ' disabled' : '') +
                ' >',
            );
            H.push(lReponseChoix.getLibelle());
            H.push('</', ieInput, '>');
            if (lReponseChoix.estReponseLibre) {
              const lTailleMaxReponseLibre = 30;
              const lIdReponseLibre = this.getIdReponseInputTexteLibre(aId, I);
              let lReponseLibreDisabled = lEstAffichageEnLectureSeule;
              if (!lReponseLibreDisabled) {
                lReponseLibreDisabled = !lValeurReponse;
              }
              const lSurSaisieTexteLibre = aParam.instance
                ? aParam.instance.Nom +
                  '.surSaisieReponseLibre (' +
                  aParam.indice +
                  ', value);'
                : '';
              const lValeurReponseLibre = lComposante.reponse
                ? lComposante.reponse.valeurReponseLibre || ''
                : '';
              H.push(
                `<input type="text" style="width:30rem;" maxlength="${lTailleMaxReponseLibre}" class="like-input m-left-xl" id="${lIdReponseLibre}" `,
                lReponseLibreDisabled ? ' disabled' : '',
                ` onkeyup="${lSurSaisieTexteLibre}" value="${lValeurReponseLibre}"/>`,
              );
            }
            H.push('</div>');
          }
        }
        return H.join('');
      }
      estComposanteAvecAR(aParam) {
        const lEstAvecAR = this.utilitaires.genreReponse.estGenreAvecAR(
          aParam.composante.genreReponse,
        );
        if (lEstAvecAR !== null) {
          return lEstAvecAR;
        } else {
          return aParam.composante.avecAR;
        }
      }
      composeComposanteInfo(aParam) {
        const H = [];
        const lId = this.getIdReponse(aParam);
        H.push(this.composeContenuTexte(aParam, lId));
        H.push(this.composePiecesJointes(aParam));
        if (aParam && aParam.estModeSansAuth !== true) {
          H.push(this.composeReponseInfo(aParam));
        }
        return H.join('');
      }
      composeReponseInfo(aParam) {
        const H = [];
        if (this.estComposanteAvecAR(aParam)) {
          H.push('<div style="margin-top: 1.5rem;">');
          H.push(this.composeReponseAvecAR(aParam));
          H.push('</div>');
        }
        return H.join('');
      }
      composeReponseAvecAR(aParam) {
        const H = [];
        aParam.instance.controleur['cbAR'] = {
          getValue() {
            return aParam.composante.reponse.avecReponse;
          },
          setValue(aChecked) {
            aParam.instance.surSaisieReponse(aParam.indice);
          },
          getDisabled() {
            return aParam.composante.reponse.avecReponse
              ? true
              : GApplication.getModeExclusif();
          },
        };
        H.push('<div class="info-AR">');
        if (aParam.composante.reponse.estRepondant === false) {
          H.push(
            GTraductions.getValeur('actualites.XAPrisConnaissanceLeX', [
              aParam.composante.reponse.strRepondant,
              GDate.formatDate(
                aParam.composante.reponse.reponduLe,
                '%JJ/%MM/%AAAA',
              ),
            ]),
          );
        } else {
          if (aParam.estAffEditionActualite) {
            if (aParam.composante.avecAR) {
              H.push(
                `<p>${GTraductions.getValeur('actualites.Edition.AvecAR')}</p>`,
              );
            }
          } else {
            H.push(
              '<ie-checkbox ie-model="cbAR">',
              GTraductions.getValeur('accueil.prisConnaissance'),
              '</ie-checkbox>',
            );
          }
        }
        H.push('</div>');
        return H.join('');
      }
      avecInfoPublic(aActualite) {
        const lEspace = GEtatUtilisateur.GenreEspace;
        const lEstEspaceParent =
          this.utilitaires.genreEspace.estEspaceParent(lEspace);
        const lEstEspaceEntreprise =
          this.utilitaires.genreEspace.estEspaceEntreprise(lEspace);
        if (lEstEspaceParent || lEstEspaceEntreprise) {
          const lUtilisateurConnecte = GEtatUtilisateur.getUtilisateur();
          const lGenre = lEstEspaceEntreprise
            ? this.utilitaires.genreRessource.getRessourceEntreprise()
            : this.utilitaires.genreRessource.getRessourceParent();
          const lEstActuDUtilisateur =
            aActualite.public.getNumero() ===
              lUtilisateurConnecte.getNumero() &&
            aActualite.public.getGenre() === lGenre;
          return !lEstActuDUtilisateur;
        }
        return false;
      }
      avecCumul(aListeInfoSond) {
        const lEspace = GEtatUtilisateur.GenreEspace;
        const lEstEspaceParent =
          this.utilitaires.genreEspace.estEspaceParent(lEspace);
        const lEstEspaceEntreprise =
          this.utilitaires.genreEspace.estEspaceEntreprise(lEspace);
        if (lEstEspaceParent || lEstEspaceEntreprise) {
          if (GEtatUtilisateur.avecPlusieursMembres()) {
            return true;
          } else {
            const lGenre = lEstEspaceEntreprise
              ? this.utilitaires.genreRessource.getRessourceEntreprise()
              : this.utilitaires.genreRessource.getRessourceParent();
            const lUtilisateurConnecte = GEtatUtilisateur.getUtilisateur();
            return (
              aListeInfoSond.getIndiceElementParFiltre((aElement) => {
                return (
                  aElement.public.getNumero() ===
                    lUtilisateurConnecte.getNumero() &&
                  aElement.public.getGenre() === lGenre
                );
              }) > -1
            );
          }
        } else {
          return false;
        }
      }
      formaterListePourCumul(aListeInfoSond) {
        const lEspace = GEtatUtilisateur.GenreEspace;
        const lEstEspaceEntreprise =
          this.utilitaires.genreEspace.estEspaceEntreprise(lEspace);
        const lGenre = lEstEspaceEntreprise
          ? this.utilitaires.genreRessource.getRessourceEntreprise()
          : this.utilitaires.genreRessource.getRessourceParent();
        const lUtilisateurConnecte = GEtatUtilisateur.getUtilisateur();
        for (let i = 0, lNbr = aListeInfoSond.count(); i < lNbr; i++) {
          const lElement = aListeInfoSond.get(i);
          if (lElement.public) {
            let lCumulPere = aListeInfoSond.getElementParNumeroEtGenre(
              lElement.public.getNumero(),
              lElement.public.getGenre(),
            );
            if (!lCumulPere) {
              const lATitreIndividuel =
                lElement.public.getNumero() ===
                  lUtilisateurConnecte.getNumero() &&
                lElement.public.getGenre() === lGenre;
              const lLibelle = lATitreIndividuel
                ? GTraductions.getValeur('actualites.ATitreIndividuel')
                : GTraductions.getValeur('actualites.AProposDe', [
                    lElement.public.prenom && !lEstEspaceEntreprise
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
              aListeInfoSond.addElement(lCumulPere);
            }
            lElement.pere = lCumulPere;
          }
        }
        aListeInfoSond.setTri(
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
        aListeInfoSond.trier();
      }
      aToutRepondu(aActualite) {
        let lResult = true;
        for (
          let i = 0, lNbr = aActualite.listeQuestions.count();
          i < lNbr && lResult;
          i++
        ) {
          const lQuestion = aActualite.listeQuestions.get(i);
          lResult =
            lQuestion.reponse.avecReponse ||
            this.utilitaires.genreReponse.estGenreSansReponse(
              lQuestion.genreReponse,
            ) ||
            this.utilitaires.genreReponse.estGenreSansAR(
              lQuestion.genreReponse,
            );
        }
        return lResult;
      }
      getDerniereReponse(aActualite) {
        let lResult = null;
        aActualite.listeQuestions.parcourir((aQuestion) => {
          if (
            aQuestion.reponse.avecReponse &&
            !this.utilitaires.genreReponse.estGenreSansReponse(
              aQuestion.genreReponse,
            ) &&
            !this.utilitaires.genreReponse.estGenreSansAR(
              aQuestion.genreReponse,
            )
          ) {
            if (!lResult) {
              lResult = aQuestion;
            } else {
              if (
                GDate.estAvantJour(
                  lResult.reponse.reponduLe,
                  aQuestion.reponse.reponduLe,
                )
              ) {
                lResult = aQuestion;
              }
            }
          }
        });
        return lResult;
      }
      estAvecVisuReponses(aActualite) {
        const lPremierQ = aActualite.listeQuestions.getPremierElement();
        return (
          ((aActualite.estSondage && !IE.estMobile) ||
            (!aActualite.estSondage &&
              !!lPremierQ &&
              ((lPremierQ.genreReponse !== null &&
                lPremierQ.genreReponse !== undefined &&
                !this.utilitaires.genreReponse.estGenreSansAR(
                  lPremierQ.genreReponse,
                )) ||
                lPremierQ.avecAR === true))) &&
          (aActualite.listePublicEntite.getNbrElementsExistes() > 0 ||
            aActualite.listePublicIndividu.getNbrElementsExistes() > 0 ||
            (this.utilitaires.genreEspace.estPourPrimaire() &&
              aActualite.avecDirecteur))
        );
      }
      formatterListeActusPourBlocs(aParam) {
        for (let i = 0, lNbr = aParam.listeActualites.count(); i < lNbr; i++) {
          const lActu = aParam.listeActualites.get(i);
          lActu.DateDebut = lActu.dateDebut;
          lActu.avecReponse = TUtilitaireInfoSondage.avecReponse.bind(lActu);
          lActu.aToutRepondu = TUtilitaireInfoSondage.aToutRepondu.bind(lActu);
          lActu.getDate = TUtilitaireInfoSondage.getDate.bind(lActu);
        }
      }
      getParamSaisie(aInfoSondage, aGenreEvnt, aParam) {
        if (aGenreEvnt === EGenreEvntActu.SurValidationSondage) {
          aParam.avecMsgConfirm = true;
        }
        const lListeActualites = new ObjetListeElements();
        lListeActualites.addElement(aInfoSondage);
        return {
          listeActualite: lListeActualites,
          validationDirecte: true,
          saisieActualite: aParam.modeAuteur,
        };
      }
      afficherToast(aActualite, aGenreEvnt, aParam) {
        let lMessage, lIcon;
        switch (aGenreEvnt) {
          case EGenreEvntActu.SurValidationSondage:
            lMessage = GTraductions.getValeur(
              'actualites.msgConfirmValidation',
              [GDate.formatDate(aActualite.dateFin, '%J/%MM/%AAAA')],
            );
            lIcon = 'icon_diffuser_sondage';
            break;
          case EGenreEvntActu.SurAR:
            lMessage = GTraductions.getValeur('infoSond.msgSurAR');
            lIcon = null;
            break;
          default:
            lMessage = '';
        }
        if (lMessage !== '') {
          Toast.fermer();
          Toast.afficher({
            msg: lMessage,
            type: ETypeToast.succes,
            icon: lIcon,
          });
          if (!!aParam.avecRecupDonnees) {
            aParam.clbckRecupDonnees.call(aParam.pereRecupDonnees);
          }
        } else {
          if (!!aParam.avecRecupDonnees) {
            aParam.clbckRecupDonnees.call(aParam.pereRecupDonnees);
          }
        }
      }
      initialiserNouveauItem(aParam) {
        const lInformation = new ObjetElement('');
        let lGenreReponse =
          aParam.genreReponse !== null && aParam.genreReponse !== undefined
            ? aParam.genreReponse
            : this.utilitaires.genreReponse.getGenreAvecAR();
        if (aParam.forcerAR === true) {
          if (this.utilitaires.genreReponse.estGenreSansAR(lGenreReponse)) {
            lGenreReponse = this.utilitaires.genreReponse.getGenreAvecAR();
          } else {
            lInformation.avecAR = true;
          }
        }
        if (aParam.categorie !== null && aParam.categorie !== undefined) {
          lInformation.categorie = aParam.categorie;
        }
        lInformation.auteur = GEtatUtilisateur.getUtilisateur().getLibelle();
        if (!aParam.estInformation) {
          lInformation.reponseAnonyme = false;
        }
        lInformation.estInformation = aParam.estInformation;
        lInformation.estSondage = !lInformation.estInformation;
        lInformation.date = '';
        lInformation.publie =
          aParam.publie !== null && aParam.publie !== undefined
            ? aParam.publie
            : !aParam.actualite;
        lInformation.estModele = aParam.estModele === true;
        const lDateDebut = GDate.getDateCourante();
        const lDateFin = lInformation.estInformation
          ? _calculeDateFinInfo({ derniereDate: aParam.dateFinDerniereDate })
          : _calculeDateFinSondage(lDateDebut);
        lInformation.dateDebut =
          aParam.actualite && aParam.actualite.dateDebut
            ? aParam.actualite.dateDebut
            : lDateDebut;
        lInformation.dateFin = aParam.actualite
          ? aParam.actualite.dateFin
          : lDateFin;
        lInformation.avecReponse = TUtilitaireInfoSondage.avecReponse;
        lInformation.aToutRepondu = TUtilitaireInfoSondage.aToutRepondu;
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
            this.creerQuestionOuTexteSondage({ genreReponse: lGenreReponse }),
          );
        }
        lInformation.estVerrouille = false;
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
        lInformation.listePublicIndividu = aParam.actualite
          ? MethodesObjet.dupliquer(aParam.actualite.listePublicIndividu)
          : new ObjetListeElements();
        if (!aParam.estInformation) {
          lInformation.listeIndividusPartage = aParam.actualite
            ? MethodesObjet.dupliquer(aParam.actualite.listeIndividusPartage)
            : new ObjetListeElements();
        }
        if (aParam.listePublic && aParam.genresPublic) {
          if (aParam.genresPublic.length > 0) {
            const lEstGenreClasseOuGroupe = aParam.genresPublic.includes(
              this.utilitaires.genreRessource.getRessourceClasse(),
              this.utilitaires.genreRessource.getRessourceGroupe(),
            );
            if (lEstGenreClasseOuGroupe) {
              lInformation.listePublicEntite = aParam.listePublic;
            } else {
              lInformation.listePublicIndividu = aParam.listePublic;
            }
          }
        }
        lInformation.getDate =
          TUtilitaireInfoSondage.getDate.bind(lInformation);
        return lInformation;
      }
      creerQuestionOuTexteSondage(aParams) {
        const lUtil = this.utilitaires.genreReponse;
        const lParams = aParams || {};
        const lRang = lParams.rang ? lParams.rang : 1;
        const lGenreReponse =
          lParams.genreReponse === null ||
          lParams.genreReponse === undefined ||
          (lUtil.estGenreSansAR(lParams.genreReponse) && aParams.forcerAR)
            ? lUtil.getGenreAvecAR()
            : lParams.genreReponse;
        const lRangElement = lParams.rangElement ? lParams.rangElement : lRang;
        let lLibelle;
        if (
          !!aParams.genreReponse &&
          lUtil.estGenreSansReponse(aParams.genreReponse)
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
        if (lGenreReponse === null || lGenreReponse === undefined) {
          lResult.avecAR = true;
        } else {
          lResult.avecAR = lUtil.estGenreAvecAR(lGenreReponse);
        }
        lResult.texte = '';
        lResult.titre = '';
        lResult.tailleReponse = 200;
        lResult.listePiecesJointes = new ObjetListeElements();
        lResult.listeChoix = new ObjetListeElements();
        lResult.reponse = new ObjetElement();
        if (lUtil.estGenreTextuelle(lGenreReponse)) {
          lResult.reponse.valeurReponse = '';
        } else if (
          lUtil.estGenreChoixUnique(lGenreReponse) ||
          lUtil.estGenreChoixMultiple(lGenreReponse)
        ) {
          lResult.reponse.valeurReponse = new TypeDomaine();
        }
        lResult.reponse.avecReponse = false;
        return lResult;
      }
      creerInfoDiffusionDesResultatsSondage(
        aSondage,
        aListeCategories,
        aListePiecesJointesResultats,
      ) {
        const lCategorieParDefaut = _getCategorieParDefaut.call(
          this,
          aListeCategories,
        );
        const lNouvelleActualite = this.initialiserNouveauItem({
          categorie: lCategorieParDefaut,
          estInformation: true,
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
      }
      getListePiecesJointesDActualite(aActualite) {
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
      }
      afficherInfoNonDispoSurMobile() {
        const lMessage = GTraductions.getValeur('infoSond.nonDispoSurMobile');
        Toast.afficher({ msg: lMessage, type: ETypeToast.info });
      }
      initCommandesMenuCtxDInfoSond(aMenu, aActualite, aParam) {
        if (aParam.avecEditionActualite) {
          this.initCommandesMenuCtxDInfoSondDiffusion(
            aMenu,
            aActualite,
            aParam,
          );
        } else {
          this.initCommandesMenuCtxDInfoSondReception(
            aMenu,
            aActualite,
            aParam,
          );
        }
      }
      initCommandesMenuCtxDInfoSondDiffusion(aMenu, aActualite, aParam) {
        if (!GApplication.getModeExclusif()) {
          const lAvecDroitSaisie = aParam.droitSaisie;
          const lDroitPublicationPageEtablissement =
            !!aParam.droitPublicationPageEtablissement &&
            !!aActualite &&
            aActualite.estInformation;
          const lEstCtxModele = aParam.estCtxModeles === true;
          if (lAvecDroitSaisie) {
            const lEstAuteurActu = aActualite.estAuteur;
            aMenu.add(
              GTraductions.getValeur('actualites.Edition.Modification'),
              lAvecDroitSaisie && lEstAuteurActu,
              (aLigneMenu) => {
                if (IE.estMobile && aActualite.estSondage) {
                  this.afficherInfoNonDispoSurMobile();
                } else {
                  aParam.evenementMenuContextuel(
                    aActualite,
                    EGenreEvntActu.SurMenuCtxActu,
                    { cmd: aLigneMenu },
                  );
                }
              },
              {
                icon: 'icon_pencil',
                Numero: EGenreEvntMenuCtxBlocInfoSondage.editerActu,
                typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
              },
            );
            if (lEstCtxModele) {
              aMenu.add(
                GTraductions.getValeur('actualites.utiliserModele'),
                lAvecDroitSaisie,
                (aLigneMenu) => {
                  if (IE.estMobile && aActualite.estSondage) {
                    this.afficherInfoNonDispoSurMobile();
                  } else {
                    aParam.evenementMenuContextuel(
                      aActualite,
                      EGenreEvntActu.SurMenuCtxActu,
                      { cmd: aLigneMenu },
                    );
                  }
                },
                {
                  icon: 'icon_transferer_discussion',
                  Numero: EGenreEvntMenuCtxBlocInfoSondage.recupererModele,
                  typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
                },
              );
              if (lEstAuteurActu) {
                const lEstPartage = aActualite.estModelePartage === true;
                aMenu.add(
                  lEstPartage
                    ? GTraductions.getValeur('actualites.nePasPartagerModele')
                    : GTraductions.getValeur('actualites.partagerModele'),
                  lAvecDroitSaisie && lEstAuteurActu,
                  () => {
                    _changerEtatPartageModele.call(
                      this,
                      aActualite,
                      !lEstPartage,
                      aParam,
                    );
                  },
                  {
                    icon: lEstPartage
                      ? 'icon_retirer_bibliotheque'
                      : 'icon_sondage_bibliotheque',
                    Numero: lEstPartage
                      ? EGenreEvntMenuCtxBlocInfoSondage.nePasPublierModele
                      : EGenreEvntMenuCtxBlocInfoSondage.publierModele,
                    typeAffEnModeMixte: ETypeAffEnModeMixte.ellipsis,
                  },
                );
              }
              if (!IE.estMobile && aActualite.estSondage) {
                aMenu.add(
                  GTraductions.getValeur('actualites.exporterModeleSondage'),
                  lAvecDroitSaisie,
                  (aLigneMenu) => {
                    aParam.evenementMenuContextuel(
                      aActualite,
                      EGenreEvntActu.SurMenuCtxActu,
                      { cmd: aLigneMenu },
                    );
                  },
                  {
                    icon: 'icon_upload_alt',
                    Numero: EGenreEvntMenuCtxBlocInfoSondage.exporterModele,
                    typeAffEnModeMixte: ETypeAffEnModeMixte.ellipsis,
                  },
                );
              }
            }
            if (!lEstCtxModele) {
              aMenu.add(
                GTraductions.getValeur('actualites.Edition.Dupliquer'),
                lAvecDroitSaisie,
                () => {
                  if (IE.estMobile && aActualite.estSondage) {
                    this.afficherInfoNonDispoSurMobile();
                  } else {
                    const lActualite = MethodesObjet.dupliquer(aActualite);
                    lActualite.setEtat(EGenreEtat.Modification);
                    lActualite.estADupliquer = true;
                    lActualite.dupliquerPublic = true;
                    aParam.evenementMenuContextuel(
                      lActualite,
                      EGenreEvntActu.SurCreationActu,
                    );
                  }
                },
                {
                  icon: 'icon_copier_liste',
                  Numero: EGenreEvntMenuCtxBlocInfoSondage.dupliquerActu,
                  typeAffEnModeMixte: ETypeAffEnModeMixte.ellipsis,
                },
              );
              if (aActualite.publie) {
                aMenu.add(
                  GTraductions.getValeur('actualites.Edition.Depublier'),
                  lAvecDroitSaisie && lEstAuteurActu,
                  () => {
                    _changerEtatPublie.call(this, aActualite, false, aParam);
                  },
                  {
                    icon: 'icon_info_sondage_non_publier',
                    Numero: EGenreEvntMenuCtxBlocInfoSondage.depublier,
                    typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
                  },
                );
              } else {
                aMenu.add(
                  GTraductions.getValeur('actualites.Edition.Publier'),
                  _estPublicationAutorisee.call(this, aActualite, aParam),
                  () => {
                    _changerEtatPublie.call(this, aActualite, true, aParam);
                  },
                  {
                    icon: 'icon_info_sondage_publier',
                    Numero: EGenreEvntMenuCtxBlocInfoSondage.publier,
                    typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
                  },
                );
              }
              if (lDroitPublicationPageEtablissement) {
                if (aActualite.publicationPageEtablissement) {
                  aMenu.add(
                    GTraductions.getValeur(
                      'actualites.Edition.DepublierPageEtab',
                    ),
                    lAvecDroitSaisie && lEstAuteurActu,
                    () => {
                      _changerPublicationPageEtablissement.call(
                        this,
                        aActualite,
                        false,
                        aParam,
                      );
                    },
                    {
                      icon: 'icon_ecole mix-icon_fermeture_widget i-small',
                      Numero:
                        EGenreEvntMenuCtxBlocInfoSondage.depublierPageEtablissement,
                      typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
                    },
                  );
                } else {
                  aMenu.add(
                    GTraductions.getValeur(
                      'actualites.Edition.PublierPageEtab',
                    ),
                    lAvecDroitSaisie && lEstAuteurActu && aActualite.publie,
                    () => {
                      _changerPublicationPageEtablissement.call(
                        this,
                        aActualite,
                        true,
                        aParam,
                      );
                    },
                    {
                      icon: 'icon_ecole',
                      Numero:
                        EGenreEvntMenuCtxBlocInfoSondage.publierPageEtablissement,
                      typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
                    },
                  );
                }
              }
              if (aParam.avecModeles === true) {
                aMenu.add(
                  GTraductions.getValeur('actualites.creerModele'),
                  lAvecDroitSaisie && lEstAuteurActu,
                  () => {
                    const lActualite = MethodesObjet.dupliquer(aActualite);
                    lActualite.setEtat(EGenreEtat.Modification);
                    lActualite.estAModeliser = true;
                    aParam.evenementMenuContextuel(
                      lActualite,
                      EGenreEvntActu.SurCreationActu,
                    );
                  },
                  {
                    icon: aActualite.estSondage
                      ? 'icon_diffuser_sondage mix-icon_plus'
                      : 'icon_diffuser_information mix-icon_plus',
                    Numero:
                      EGenreEvntMenuCtxBlocInfoSondage.creerModeleDepuisExistant,
                    typeAffEnModeMixte: ETypeAffEnModeMixte.ellipsis,
                  },
                );
              }
            }
            aMenu.add(
              GTraductions.getValeur('actualites.Edition.Supprimer'),
              lAvecDroitSaisie && lEstAuteurActu,
              () => {
                const lMsgConfirmSuppression = aActualite.estVerrouille
                  ? GTraductions.getValeur('actualites.ConfirmationSuppression')
                  : GTraductions.getValeur('liste.suppressionSelection');
                GApplication.getMessage().afficher({
                  type: EGenreBoiteMessage.Confirmation,
                  message: lMsgConfirmSuppression,
                  callback: _evntSuppressionActu.bind(this, aActualite, aParam),
                });
              },
              {
                icon: 'icon_trash',
                Numero: EGenreEvntMenuCtxBlocInfoSondage.supprimerActu,
                typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
              },
            );
            const lAvecBoutonRelance =
              aActualite.nbIndividusSansReponses > 0 &&
              aActualite.pourcentRepondu < 100 &&
              aActualite.publie &&
              (GDate.estAvantJourCourant(aActualite.dateDebut) ||
                GDate.estJourCourant(aActualite.dateDebut)) &&
              !GDate.estAvantJourCourant(aActualite.dateFin);
            if (lAvecBoutonRelance) {
              aMenu.add(
                GTraductions.getValeur('actualites.RelancerNonRepondants'),
                true,
                (aLigneMenu) => {
                  const lMsgConfirm = GTraductions.getValeur(
                    aActualite.estSondage
                      ? 'actualites.ConfirmationSondage'
                      : aActualite.estInformation
                        ? 'actualites.ConfirmationInformation'
                        : '',
                    [aActualite.nbIndividusSansReponses],
                  );
                  GApplication.getMessage().afficher({
                    type: EGenreBoiteMessage.Confirmation,
                    message: lMsgConfirm,
                    callback: _evntRelanceActu.bind(
                      this,
                      aActualite,
                      aParam,
                      aLigneMenu,
                    ),
                  });
                },
                {
                  icon: 'icon_reply',
                  Numero: EGenreEvntMenuCtxBlocInfoSondage.relancerSelection,
                  typeAffEnModeMixte: ETypeAffEnModeMixte.ellipsis,
                },
              );
            }
            if (!lEstCtxModele) {
              if (
                aParam.avecVisuResultats &&
                this.estAvecVisuReponses(aActualite)
              ) {
                aMenu.add(
                  GTraductions.getValeur('actualites.Edition.OngletResultats'),
                  true,
                  (aLigneMenu) => {
                    aParam.evenementMenuContextuel(
                      aActualite,
                      EGenreEvntActu.SurMenuCtxActu,
                      { cmd: aLigneMenu },
                    );
                  },
                  {
                    icon: 'icon_qcm',
                    Numero: EGenreEvntMenuCtxBlocInfoSondage.voirResultats,
                    typeAffEnModeMixte: ETypeAffEnModeMixte.bouton,
                  },
                );
              }
            }
          }
        }
      }
      initCommandesMenuCtxDInfoSondReception(aMenu, aActualite, aParam) {
        if (!GApplication.getModeExclusif()) {
          if (aActualite.lue) {
            aMenu.add(
              GTraductions.getValeur('actualites.MarquerNonLu'),
              aActualite.lue,
              () => {
                _changerEtatLue.call(this, aActualite, false, aParam);
              },
              {
                icon: 'icon_eye_close',
                Numero: EGenreEvntMenuCtxBlocInfoSondage.marquerNonLu,
                typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
              },
            );
          } else {
            aMenu.add(
              GTraductions.getValeur('actualites.MarquerLu'),
              !aActualite.lue,
              () => {
                _changerEtatLue.call(this, aActualite, true, aParam);
              },
              {
                icon: 'icon_eye_open',
                Numero: EGenreEvntMenuCtxBlocInfoSondage.marquerLu,
                typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
              },
            );
          }
          if (aParam.avecSuppressionActusRecues) {
            aMenu.add(
              GTraductions.getValeur('actualites.MarquerSupprimee'),
              true,
              () => {
                GApplication.getMessage().afficher({
                  type: EGenreBoiteMessage.Confirmation,
                  message: GTraductions.getValeur('liste.suppressionSelection'),
                  callback: function (aGenreAction) {
                    if (aGenreAction === EGenreAction.Valider) {
                      _changerEtatSupprimee.call(this, aActualite, aParam);
                    }
                  }.bind(this),
                });
              },
              {
                icon: 'icon_trash',
                Numero: EGenreEvntMenuCtxBlocInfoSondage.supprimerConsult,
                typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
              },
            );
          }
          if (
            aParam.avecDiscussion &&
            aActualite.elmauteur &&
            aActualite.elmauteur.avecDiscussion
          ) {
            aMenu.addSeparateur();
            aMenu.add(
              GTraductions.getValeur('actualites.discussion.demarrer'),
              true,
              (aLigneMenu) => {
                aParam.evenementMenuContextuel(
                  aActualite,
                  EGenreEvntActu.SurMenuCtxActu,
                  { cmd: aLigneMenu },
                );
              },
              {
                icon: 'icon_nouvelle_discussion',
                Numero: EGenreEvntMenuCtxBlocInfoSondage.demarrerDiscussion,
                typeAffEnModeMixte: ETypeAffEnModeMixte.icon,
              },
            );
          }
        }
      }
      verifierEtatModification(aParam) {
        const lDonnee = aParam.donnee;
        const lDonneeOrigine = aParam.donneeOrigine;
        const lTest =
          lDonnee.getLibelle() !== lDonneeOrigine.getLibelle() ||
          (lDonnee.categorie !== null &&
            lDonnee.categorie !== undefined &&
            lDonneeOrigine.categorie !== null &&
            lDonneeOrigine.categorie !== undefined &&
            lDonnee.categorie.getNumero() !==
              lDonneeOrigine.categorie.getNumero()) ||
          lDonnee.publie !== lDonneeOrigine.publie ||
          !GDate.estJourEgal(lDonnee.dateDebut, lDonneeOrigine.dateDebut) ||
          !GDate.estJourEgal(lDonnee.dateFin, lDonneeOrigine.dateFin) ||
          lDonnee.listeQuestions.existeElementPourValidation() ||
          lDonnee.avecModificationPublic ||
          lDonnee.publicationPageEtablissement !==
            lDonneeOrigine.publicationPageEtablissement ||
          !!lDonnee.partageAEteModifie;
        return lTest ? EGenreEtat.Modification : EGenreEtat.Aucun;
      }
      validerEdition(aParam) {
        const lListeActualites = new ObjetListeElements();
        lListeActualites.addElement(aParam.donnee);
        const lObjetSaisie = {
          listeActualite: lListeActualites,
          validationDirecte: false,
          saisieActualite: true,
          listeDocuments: aParam.listePJ,
          genresAffDestinataire: aParam.genresRessAffDestinataire,
        };
        aParam.envoyerRequete(lObjetSaisie);
      }
      formatterDonnees(aParam) {
        aParam.listeInfoSond.parcourir((aActu) => {
          if (aActu.estInformation) {
            aActu.listeQuestions.parcourir((aQuestion) => {
              aQuestion.avecAR =
                aParam.forcerAR === true ||
                this.estComposanteAvecAR({ composante: aQuestion });
            });
          }
        });
      }
      formatterDonneesAvantSaisie(aParam) {
        aParam.listeInfoSond.parcourir((aActu) => {
          if (aActu.estInformation) {
            aActu.listeQuestions.parcourir((aQuestion) => {
              aQuestion.genreReponse = aQuestion.avecAR
                ? this.utilitaires.genreReponse.getGenreAvecAR()
                : this.utilitaires.genreReponse.getGenreSansAR();
            });
          }
        });
      }
      composeFormText(aParam) {
        const H = [];
        H.push(
          '<input type="text" id="',
          aParam.id,
          '" ie-node="',
          aParam.node,
          '" ie-model="',
          aParam.model,
          '" class="',
          aParam.classCss,
          '" />',
        );
        return H.join('');
      }
      getInfosPublication(aActualite) {
        const lEstPubliee = aActualite.publie === true;
        let lEnCours = false;
        let lFutur = false;
        let lPassee = false;
        if (lEstPubliee) {
          lEnCours = GDate.dateEntreLesDates(
            GDate.getDateCourante(false),
            aActualite.dateDebut,
            aActualite.dateFin,
            true,
          );
          lFutur = GDate.estDateJourAvant(
            GDate.getDateCourante(false),
            aActualite.dateDebut,
          );
          lPassee = !lEnCours && !lFutur;
        }
        return {
          estPubliee: lEstPubliee,
          estEnCours: lEnCours,
          estFutur: lFutur,
          estPassee: lPassee,
        };
      }
      dupliquerQuestion(aQuestion) {
        return _copieQuestion.call(this, aQuestion);
      }
    }
    function _getIconePublication(aInfos) {
      if (aInfos.estPubliee) {
        if (aInfos.estFutur) {
          return 'icon_info_sondage_publier mix-icon_edt_permanence';
        } else if (aInfos.estPassee) {
          return 'icon_info_sondage_publier';
        } else if (aInfos.estEnCours) {
          return 'icon_info_sondage_publier mix-icon_ok';
        }
      } else {
        return 'icon_brouillon_discussion';
      }
      return '';
    }
    function _getFlatClassColorPublication(aInfos) {
      return aInfos.estPubliee && !aInfos.estPassee ? 'on' : 'off';
    }
    function _getStrPublication(aInfos) {
      return aInfos.estPubliee
        ? aInfos.estEnCours
          ? GTraductions.getValeur('actualites.Publie')
          : aInfos.estFutur
            ? GTraductions.getValeur('infoSond.publicationFutur')
            : GTraductions.getValeur('infoSond.publicationPassee')
        : GTraductions.getValeur('actualites.NonPubliee');
    }
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
    function _calculeDateFinInfo(aParam) {
      if (
        aParam !== null &&
        aParam !== undefined &&
        aParam.derniereDate === true
      ) {
        return GDate.derniereDate;
      } else {
        const lDerniereSemaine = IE.Cycles.nombreCyclesAnneeScolaire();
        return IE.Cycles.dateDernierJourOuvreCycle(lDerniereSemaine);
      }
    }
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
      const lNouvelleQuestion = this.creerQuestionOuTexteSondage(aQuestion);
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
      lNouvelleQuestion.nombreReponsesMax = aQuestion.nombreReponsesMax;
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
    function _getCategorieParDefaut(aListeCategories) {
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
      return lCategorieParDefaut;
    }
    function _changerEtatPartageModele(aArticle, aPartage, aParam) {
      if (aArticle.estModelePartage !== aPartage) {
        aArticle.estModelePartage = aPartage;
        aArticle.changePartageModeleSeulement = true;
        aParam.evenementMenuContextuel(
          aArticle,
          EGenreEvntActu.SurValidationDirecte,
          { avecRecupDonnees: true },
        );
      }
    }
    function _changerEtatPublie(aArticle, aPublie, aParam) {
      if (aArticle && aParam.avecEditionActualite) {
        aArticle.publie = aPublie;
        if (!aArticle.publie && aArticle.estInformation) {
          aArticle.publicationPageEtablissement = false;
        }
        aArticle.setEtat(EGenreEtat.Modification);
        aParam.evenementMenuContextuel(
          aArticle,
          EGenreEvntActu.SurValidationModif,
        );
      }
    }
    function _changerPublicationPageEtablissement(aArticle, aPublie, aParam) {
      const lDroitPublicationPageEtablissement =
        aParam.avecEditionActualite &&
        !!aParam.droitPublicationPageEtablissement &&
        !!aArticle &&
        aArticle.estInformation;
      if (lDroitPublicationPageEtablissement) {
        aArticle.publicationPageEtablissement = aPublie;
        aArticle.setEtat(EGenreEtat.Modification);
        aParam.evenementMenuContextuel(
          aArticle,
          EGenreEvntActu.SurValidationModif,
        );
      }
    }
    function _estPublicationAutorisee(aArticle, aParam) {
      const lAvecPublic = this.moteurDestinataires.avecDestinataires({
        donnee: aArticle,
      });
      const lEstAuteurActu = aArticle.estAuteur;
      return aParam.droitSaisie && lAvecPublic && !!lEstAuteurActu;
    }
    function _evntSuppressionActu(aArticle, aParam, aGenreAction) {
      if (aGenreAction === EGenreAction.Valider) {
        aArticle.setEtat(EGenreEtat.Suppression);
        aArticle.visible = false;
        aParam.evenementMenuContextuel(
          aArticle,
          EGenreEvntActu.SurValidationModif,
        );
      }
    }
    function _changerEtatLue(aArticle, aEtat, aParam) {
      if (aArticle.lue !== aEtat) {
        aArticle.lue = aEtat;
        aArticle.marqueLueSeulement = true;
        aParam.evenementMenuContextuel(
          aArticle,
          EGenreEvntActu.SurValidationDirecte,
          { avecRecupDonnees: true },
        );
      }
    }
    function _changerEtatSupprimee(aArticle, aParam) {
      aArticle.supprimee = true;
      aArticle.marqueLueSeulement = true;
      aParam.evenementMenuContextuel(
        aArticle,
        EGenreEvntActu.SurValidationDirecte,
        { avecRecupDonnees: true },
      );
    }
    function _evntRelanceActu(aActualite, aParams, aLigneMenu, aGenreAction) {
      if (aGenreAction === EGenreAction.Valider) {
        aParams.evenementMenuContextuel(
          aActualite,
          EGenreEvntActu.SurMenuCtxActu,
          { cmd: aLigneMenu },
        );
      }
    }
    module.exports = { MoteurInfoSondage, EGenreEvntMenuCtxBlocInfoSondage };
  },
  fn: 'moteurinfosondage.js',
});