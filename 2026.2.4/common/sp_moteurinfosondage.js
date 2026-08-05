IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.MoteurInfoSondage = exports.EGenreEvntMenuCtxBlocInfoSondage =
      void 0;
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const UtilitaireInfoSondage_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireInfoSondage');
    const EGenreEvntActu_1 = require('@cp/Produit/Script/Enumere/EGenreEvntActu');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const Enumere_TriElement_1 = require('@cp/script/Enumere/Enumere_TriElement');
    const Toast_1 = require('@cp/Produit/Script/Toast');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const TypeEnsembleNombre_1 = require('@cp/script/Type/TypeEnsembleNombre');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const Enumere_MenuCtxModeMixte_1 = require('@cp/Produit/Script/Enumere/Enumere_MenuCtxModeMixte');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const MoteurDestinataires_1 = require('@cp/Produit/Script/moteur/MoteurDestinataires');
    const UtilitaireSyntheseVocale_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireSyntheseVocale');
    const TypeGenreMiniature_1 = require('@cp/script/Enumere/TypeGenreMiniature');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const ObjetGalerieCarrousel_1 = require('@cp/Produit/Script/ObjetGalerieCarrousel');
    const IEHtml_TextareaMax_1 = require('@cp/Produit/Script/IEHtml.TextareaMax');
    const Tooltip_1 = require('@cp/Produit/Script/Tooltip');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const Categorie_1 = require('@cp/Produit/Script/Categorie');
    const IconeSvgTransferer_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTransferer_discussion');
    const IconeSvgNouvelle_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgNouvelle_discussion');
    const IconeSvgTrash_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTrash');
    const IconeSvgReply_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgReply');
    const IconeSvgQcm_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgQcm');
    const IconeSvgEye_close_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEye_close');
    const IconeSvgEye_open_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEye_open');
    const IconeSvgClasser_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgClasser_discussion');
    const IconeSvg_1 = require('@cp/Produit/Script/IconeSvg');
    const IconeSvgInfo_sondage_publier_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgInfo_sondage_publier');
    const IconeSvgEdt_permanence_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEdt_permanence');
    const IconeSvgOk_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgOk');
    const IconeSvgBrouillon_discussion_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgBrouillon_discussion');
    const IconeSvgDiffuser_sondage_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_sondage');
    const IconeSvgDiffuser_information_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_information');
    const IconeSvgEcole_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEcole');
    const IconeSvgInfo_sondage_non_publier_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgInfo_sondage_non_publier');
    const IconeSvgFermeture_widget_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFermeture_widget');
    const IconeSvgPlus_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPlus');
    const IconeSvgPencil_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgPencil');
    const IconeSvgCopier_liste_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCopier_liste');
    const IconeSvgFiche_cours_partage_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFiche_cours_partage');
    const IconeSvgUpload_alt_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgUpload_alt');
    require('@cp/Produit/Css/InfoSondage.css');
    var EGenreEvntMenuCtxBlocInfoSondage;
    (function (EGenreEvntMenuCtxBlocInfoSondage) {
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['editerActu'] = 1)
      ] = 'editerActu';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['supprimerActu'] = 2)
      ] = 'supprimerActu';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['dupliquerActu'] = 3)
      ] = 'dupliquerActu';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['publier'] = 4)
      ] = 'publier';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['depublier'] = 5)
      ] = 'depublier';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['marquerLu'] = 6)
      ] = 'marquerLu';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['marquerNonLu'] = 7)
      ] = 'marquerNonLu';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['supprimerConsult'] = 8)
      ] = 'supprimerConsult';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['demarrerDiscussion'] = 9)
      ] = 'demarrerDiscussion';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['creerModeleDepuisExistant'] = 10)
      ] = 'creerModeleDepuisExistant';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['recupererModele'] = 11)
      ] = 'recupererModele';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['voirResultats'] = 12)
      ] = 'voirResultats';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['gestionPartageModele'] = 13)
      ] = 'gestionPartageModele';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['exporterModele'] = 15)
      ] = 'exporterModele';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['publierPageEtablissement'] = 17)
      ] = 'publierPageEtablissement';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['depublierPageEtablissement'] = 18)
      ] = 'depublierPageEtablissement';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['relancerSelection'] = 19)
      ] = 'relancerSelection';
      EGenreEvntMenuCtxBlocInfoSondage[
        (EGenreEvntMenuCtxBlocInfoSondage['categoriser'] = 20)
      ] = 'categoriser';
    })(
      EGenreEvntMenuCtxBlocInfoSondage ||
        (exports.EGenreEvntMenuCtxBlocInfoSondage =
          EGenreEvntMenuCtxBlocInfoSondage =
            {}),
    );
    class MoteurInfoSondage {
      constructor(aParam, aJsxMethodes) {
        this.utilitaires = {
          genreReponse: aParam.genreReponse,
          genreRessource: aParam.genreRessource,
          genreEspace: aParam.genreEspace,
        };
        this.jsxMethodes =
          aJsxMethodes !== null && aJsxMethodes !== void 0
            ? aJsxMethodes
            : null;
        this.moteurDestinataires =
          new MoteurDestinataires_1.MoteurDestinataires(this.utilitaires);
      }
      composeComposanteInfoSondage(aParam) {
        if (aParam.actu.estSondage) {
          return this.composeComposanteSondage(aParam);
        } else {
          return this.composeComposanteInfo(aParam);
        }
      }
      jsxIdentiteCarrousel(aParam) {
        return {
          create: () =>
            new ObjetGalerieCarrousel_1.ObjetGalerieCarrousel({
              pere: aParam.instance,
            }),
          init: (aCarrousel) => {
            aCarrousel.setOptions(
              Object.assign(
                {
                  dimensionPhoto: 300,
                  nbMaxDiaposEnZoneVisible: 10,
                  justifieAGauche: true,
                  sansBlocLibelle: true,
                  altImage: 'Image de l'information',
                },
                aParam.optionsCarrousel,
              ),
            );
          },
          start: (aCarrousel) => {
            const lListeDiapos = new ObjetListeElements_1.ObjetListeElements();
            if (aParam.composante && aParam.composante.listePiecesJointes) {
              aParam.composante.listePiecesJointes.parcourir((aPJ) => {
                if (aPJ.avecMiniaturePossible) {
                  let lDiapo = new ObjetElement_1.ObjetElement();
                  lDiapo.setLibelle(aPJ.getLibelle());
                  aPJ.miniature =
                    TypeGenreMiniature_1.TypeGenreMiniature.GM_600;
                  lDiapo.documentCasier = aPJ;
                  lListeDiapos.add(lDiapo);
                }
              });
            }
            aCarrousel.setDonnees({ listeDiapos: lListeDiapos });
          },
        };
      }
      composePiecesJointes(aParam) {
        const H = [];
        const lListePJ = new ObjetListeElements_1.ObjetListeElements();
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
              UtilitaireUrl_1.UtilitaireUrl.construireListeUrls(lListePJ, {
                genreRessource:
                  this.utilitaires.genreRessource.getRessourceDocJointEtablissement(),
                separateur: '<br>',
              }),
              '</div>',
            );
          }
          if (lAvecImage) {
            H.push(
              IE.jsx.str('div', {
                ie_identite: this.jsxIdentiteCarrousel.bind(this, aParam),
              }),
            );
          }
        }
        return H.join('');
      }
      composeContenuTexte(aParam, aId) {
        const H = [];
        H.push(
          IE.jsx.str(
            'div',
            {
              class: Divers_css_1.SD.tinyView,
              id: this.getIdTexteComposante(aId),
            },
            this.getTexteComposante(aParam),
          ),
        );
        return H.join('');
      }
      getTexteComposante(aParam) {
        return aParam.composante.texte;
      }
      getIdReponse(aParam) {
        var _a, _b;
        return (
          ((_b = (_a = aParam.instance).getNom) === null || _b === void 0
            ? void 0
            : _b.call(_a)) +
          '_reponse_' +
          aParam.indice
        );
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
            H.push(
              IE.jsx.str(
                'h2',
                { class: 'titre-info-sondage' },
                lActu.getLibelle(),
              ),
            );
          }
          H.push('<p>');
          const lAvecNature =
            lActu.nature !== null && lActu.nature !== undefined;
          if (lAvecNature) {
            H.push(lActu.nature.getLibelle());
          }
          if (lEstModeReception && !!lActu.auteur) {
            H.push(lAvecNature ? ' - ' : '');
            H.push(lActu.auteur);
          }
          H.push('</p>');
          if (lEstModeReception && this.avecInfoPublic(lActu)) {
            H.push(IE.jsx.str('p', null, lActu.public.getLibelle()));
          }
          if (lEstModeReception && aParam.avecDate && lActu.dateDebut) {
            if (lActu.estSondage && lActu.dateDebut && lActu.dateFin) {
              H.push(
                IE.jsx.str(
                  'p',
                  null,
                  'Ouvert entre le %s et le %s',
                      this.getDateFormatSondage(
                        lActu.dateFin,
                        aParam.avecHoraire,
                      ),
                    ],
                  ),
                ),
              );
            } else if (lActu.dateDebut) {
              H.push(
                IE.jsx.str('p', null, this.getDateFormat(lActu.dateDebut)),
              );
            }
          }
          if (lActu.estSondage) {
            H.push('<p>');
            H.push(
              lActu.reponseAnonyme
                ? 'Ce sondage est anonyme'
                : 'Ce sondage est nominatif',
            );
            if (
              lActu.reponseAnonyme &&
              lActu.strInfoSondageAnonyme !== null &&
              lActu.strInfoSondageAnonyme !== undefined
            ) {
              H.push(' (', lActu.strInfoSondageAnonyme, ')');
            }
            H.push('</p>');
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
                    ? '%s personnes accèdent au sondage en consultation'
                    : '%s accède au sondage en consultation'],
                      );
                H.push(
                  IE.jsx.str('p', { class: 'partage-info-sondage' }, lStr),
                );
              }
            }
          }
          if (lEstModeDiffusion) {
            const lModeSuccinct = aParam.avecDetailPublicSuccinct === true;
            const lDetailPublic = lModeSuccinct
              ? lActu.detailPublicSuccinct
                ? ObjetChaine_1.GChaine.replaceRCToHTML(
                    lActu.detailPublicSuccinct,
                  )
                : ''
              : lActu.detailPublic
                ? lActu.detailPublic
                : '';
            const lClassPublic = lModeSuccinct
              ? 'publicSucc-info-sondage'
              : 'public-info-sondage';
            H.push('<p class="', lClassPublic, '">', lDetailPublic, '</p>');
          }
          const lAvecPourcentageTauxDeReponse =
            Object.prototype.hasOwnProperty.call(lActu, 'pourcentRepondu') &&
            MethodesObjet_1.MethodesObjet.isNumeric(lActu.pourcentRepondu);
          if (lAvecPourcentageTauxDeReponse) {
            const lTrad = ObjetTraduction_1.GTraductions.getValeur(
              lActu.estSondage
                ? 'infoSond.TauxReponse'
                : lActu.estInformation
                  ? 'infoSond.TauxLecture'
                  : '',
            );
            H.push(
              `<p>${lTrad} : <span class="Gras">${lActu.pourcentRepondu}</span> %</p>`,
            );
          }
          H.push('</div>');
          H.push('</div>');
          H.push('</div>');
        }
        return H.join('');
      }
      getDateFormat(aDate, aAvecHoraire = false) {
        const lFormat = ['%JJJ %JJ %MMM'];
        if (aAvecHoraire) {
          lFormat.push('%hh%sh%mm');
        }
        return ObjetDate_1.GDate.formatDate(aDate, lFormat.join(' '));
      }
      getDateFormatSondage(aDate, aAvecHoraire = false) {
        const lArrFormatDate = ['%JJ %MMMM'];
        if (aAvecHoraire) {
          lArrFormatDate.push('%hh%sh%mm');
        }
        return ObjetDate_1.GDate.formatDate(aDate, lArrFormatDate.join(' '));
      }
      composeDescriptifLecture(aActu, aParam) {
        const H = [];
        const lEstModeReception = aParam.estModeReception;
        const lEstModeDiffusion = !aParam.estModeReception;
        const lStr = aActu.estSondage
          ? 'Sondage'
          : 'Information';
        H.push(lStr + ' : ' + aActu.getLibelle().enleverEntites() + '. ');
        const lAvecNature = aActu.nature !== null && aActu.nature !== undefined;
        if (lAvecNature) {
          H.push(aActu.nature.getLibelle());
        }
        if (lEstModeReception && !!aActu.auteur) {
          H.push(lAvecNature ? '-' : '');
          H.push(aActu.auteur + '. ');
        }
        if (lEstModeReception && this.avecInfoPublic(aActu)) {
          H.push(aActu.public.getLibelle().enleverEntites() + '. ');
        }
        if (lEstModeReception && aActu.dateDebut) {
          H.push(
            this.getDateFormat(aActu.dateDebut, !!aParam.avecHoraire) + '. ',
          );
        }
        if (aActu.estSondage) {
          H.push(
            aActu.reponseAnonyme
              ? 'Ce sondage est anonyme'
              : 'Ce sondage est nominatif',
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
                  ? '%s personnes accèdent au sondage en consultation'
                  : '%s accède au sondage en consultation'],
                    );
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
          MethodesObjet_1.MethodesObjet.isNumeric(aActu.pourcentRepondu);
        if (lAvecPourcentageTauxDeReponse) {
          const lTrad = ObjetTraduction_1.GTraductions.getValeur(
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
                'Vous ne pouvez sélectionner que %d choix maximum'],
                ),
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
                UtilitaireSyntheseVocale_1.SyntheseVocale.getTextesDUneChaineHTML(
                  lHtmlChoix,
                );
              H.push(lArrTextes.join('. ') + '. ');
            }
            H.push(this.composePJLecture(lQuestion) + '. ');
          } else {
            if (lQuestion.texte) {
              const lTexte = `<div>${lQuestion.texte}</div>`;
              const lJNodeQ = $(lTexte);
              const lContenuQ = lJNodeQ.text() || lJNodeQ.val();
              if (lContenuQ) {
                H.push(lContenuQ + '. ');
              } else {
              }
            }
            H.push(this.composePJLecture(lQuestion) + '. ');
            if (this.estComposanteAvecAR(lParam)) {
              if (lQuestion.reponse.estRepondant === false) {
                H.push(
                  '%s a pris connaissance de cette information le %s',
                    ],
                  ),
                );
              } else {
                H.push(
                  'J'ai pris connaissance de cette information',
                );
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
          const lListePJ = new ObjetListeElements_1.ObjetListeElements();
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
                  ? 'Documents joints'
                  : 'Document joint',
                ' : ',
                lArrDocs.join(', '),
              );
            }
          }
        }
        return H.join(' ');
      }
      composeIconInfoSond(aParam) {
        return aParam.actualite.estSondage
          ? IE.jsx.str(IconeSvgDiffuser_sondage_1.IconeSvgDiffuser_sondage, {
              'aria-label':
                'Sondage',
            })
          : IE.jsx.str(
              IconeSvgDiffuser_information_1.IconeSvgDiffuser_information,
              {
                'aria-label': 'Information',
              },
            );
      }
      composeIconDiffusionPageEtablissement(aParam) {
        const H = [];
        if (
          !!aParam.actualite &&
          aParam.actualite.publicationPageEtablissement
        ) {
          const lInfos = this.getInfosPublication(aParam.actualite);
          const lColor = _getFlatClassColorPublication.call(this, lInfos);
          const lStr = 'Publié sur la page établissement / écrans partenaires';
          H.push(
            IE.jsx.str(IconeSvgEcole_1.IconeSvgEcole, {
              'aria-label': lStr,
              'data-tooltip': Tooltip_1.Tooltip.Type.default,
              class: lColor,
            }),
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
          const lCssColor = _getFlatClassColorPublication.call(this, lInfos);
          H.push(
            IE.jsx.str(
              'div',
              null,
              IE.jsx.str(IconeSvgEcole_1.IconeSvgEcole, { class: lCssColor }),
              'Publié sur la page établissement / écrans partenaires',
            ),
          );
        }
        return H.join('');
      }
      composeInfoDiffusionPageEtablissementLecture(aActu) {
        const H = [];
        if (!!aActu && aActu.publicationPageEtablissement) {
          const lStr = 'Publié sur la page établissement / écrans partenaires';
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
          IE.jsx.str('i', {
            'aria-label': lStr,
            'data-tooltip': Tooltip_1.Tooltip.Type.default,
            class: ['icon', lIcon, lColor],
            role: 'img',
          }),
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
          '<div class="infos-icon ',
          lCssColor,
          '">',
          lIcon,
          '<p class="libelle">',
          lStr + lDatesPublication,
          '</p></div>',
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
        return !!aParam.composante.avecMaximum;
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
        let lResult = ObjetTraduction_1.GTraductions.getValeur(
          lCleTraductionLibelleConflit,
          [aParam.rang],
        );
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
            '<p class="InfoSond_Question">',
            this.getLibelleComposante(aParam),
            '</p>',
          );
        }
        if (
          this.estComposanteQuestChoixMultiple(aParam) &&
          this.estComposanteAvecMaximum(aParam)
        ) {
          H.push(
            '<p class="InfoSond_NbChoixLimite">',
            'Vous ne pouvez sélectionner que %d choix maximum'],
            ),
            '</p>',
          );
        }
        H.push(this.composeContenuTexte(aParam, lId));
        H.push(this.composeReponsesSondage(aParam, lId));
        H.push(this.composePiecesJointes(aParam));
        return H.join('');
      }
      composeReponsesSondage(aParam, aId) {
        var _a;
        if (this.estComposanteQuestTextuelle(aParam)) {
          return IE.jsx.str(
            'div',
            { id: aId },
            this.composeReponseTextuelle(aParam, aId),
          );
        } else {
          const lEstChxUnique = this.estComposanteQuestChoixUnique(aParam);
          const lEstChxMultiple = this.estComposanteQuestChoixMultiple(aParam);
          if (lEstChxUnique || lEstChxMultiple) {
            const lStrQu = aParam.avecLibelleQuestion
              ? (_a = aParam.composante.getLibelle()) !== null && _a !== void 0
                ? _a
                : ''
              : '';
            const lStrAriaLabel = lEstChxUnique
              ? 'Choix unique pour la question %s'
              : 'Choix multiple pour la question %s';
            return IE.jsx.str(
              'div',
              { id: aId, role: 'group', 'aria-label': lStrAriaLabel },
              this.composeReponseChoix(aParam, aId),
            );
          }
        }
        return '';
      }
      composeReponseTextuelle(aParam, aId) {
        const H = [];
        let lDisabledValue =
          aParam.estAffEditionActualite ||
          (0, AccessApp_1.getApp)().getModeExclusif()
            ? 'disabled'
            : false;
        H.push(
          IE.jsx.str(
            'div',
            {
              style:
                'width:calc(100% - 1rem); margin-top:1rem; margin-bottom:1rem;',
            },
            IE.jsx.str(IEHtml_TextareaMax_1.TextareaMax, {
              'aria-label': aParam.composante.getLibelle(),
              tabindex: '-1',
              id: aId + '_0',
              ie_model: this.jsxMethodes
                ? this.jsxMethodes.textareaReponseTextuelle(aParam.indice)
                : () => {
                    return {
                      getValue: () => {
                        return '';
                      },
                      setValue: (aValue) => {},
                      getDisabled: () => {
                        return true;
                      },
                    };
                  },
              maxlength: aParam.composante.tailleReponse,
              placeholder: 'Saisissez votre réponse ici !',
              style: IE.estMobile ? '' : 'height:6rem;',
              disabled: lDisabledValue,
            }),
          ),
        );
        return H.join('');
      }
      composeReponseChoix(aParam, aId) {
        var _a, _b, _c;
        const H = [];
        const lComposante = aParam.composante;
        if (lComposante && lComposante.listeChoix) {
          const lEstQuestChoixMulti =
            this.estComposanteQuestChoixMultiple(aParam);
          const lEstAvecMax =
            lEstQuestChoixMulti && this.estComposanteAvecMaximum(aParam);
          const lNombreCoche = lEstAvecMax
            ? lComposante.reponse && lComposante.reponse.valeurReponse
              ? lComposante.reponse.valeurReponse.count()
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
                ? lComposante.reponse.valeurReponse.contains(lNr)
                : undefined;
            const lEstAffichageEnLectureSeule =
              aParam.estAffEditionActualite ||
              (0, AccessApp_1.getApp)().getModeExclusif();
            let lEstCocheDisabled = false;
            if (lEstAffichageEnLectureSeule) {
              lEstCocheDisabled = true;
            } else if (
              lEstAvecMax &&
              lNombreCoche >= lComposante.nombreReponsesMax
            ) {
              lEstCocheDisabled = !lValeurReponse;
            }
            const lIdCoche = aId + '_' + I;
            H.push('<div class="InfoSond_InfoCoche">');
            if (lEstQuestChoixMulti) {
              const lJsxModelCheckboxQuestionChoixMulti = () => {
                return {
                  getValue: () => {
                    return (
                      !!lComposante.reponse &&
                      !!lComposante.reponse.valeurReponse &&
                      lComposante.reponse.valeurReponse.contains(lNr)
                    );
                  },
                  setValue: (aValue) => {
                    if (aParam.instance && aParam.instance.surSaisieReponse) {
                      aParam.instance.surSaisieReponse(
                        aParam.indice,
                        '' + lNr,
                        aValue,
                      );
                    }
                  },
                  getDisabled: () => {
                    return lEstCocheDisabled;
                  },
                };
              };
              H.push(
                IE.jsx.str(
                  IEHtml_CheckboxRadio_1.Checkbox,
                  {
                    id: lIdCoche,
                    ie_model: lJsxModelCheckboxQuestionChoixMulti,
                  },
                  lReponseChoix.getLibelle(),
                ),
              );
            } else {
              const lJsxModelRadioChoixUnique = () => {
                return {
                  getValue: () => {
                    return (
                      !!lComposante.reponse &&
                      !!lComposante.reponse.valeurReponse &&
                      lComposante.reponse.valeurReponse.contains(lNr)
                    );
                  },
                  setValue: (aValue) => {
                    if (aParam.instance && aParam.instance.surSaisieReponse) {
                      aParam.instance.surSaisieReponse(
                        aParam.indice,
                        '' + lNr,
                        aValue,
                      );
                    }
                  },
                  getName: () => {
                    return `RadioChxUniq_${aId}`;
                  },
                  getDisabled: () => {
                    return lEstCocheDisabled;
                  },
                };
              };
              H.push(
                IE.jsx.str(
                  IEHtml_CheckboxRadio_1.Radio,
                  { id: lIdCoche, ie_model: lJsxModelRadioChoixUnique },
                  lReponseChoix.getLibelle(),
                ),
              );
            }
            if (lReponseChoix.estReponseLibre) {
              const lTailleMaxReponseLibre = 30;
              const lIdReponseLibre = this.getIdReponseInputTexteLibre(aId, I);
              let lReponseLibreDisabled = lEstAffichageEnLectureSeule;
              if (!lReponseLibreDisabled) {
                lReponseLibreDisabled = !lValeurReponse;
              }
              const lValeurReponseLibre = lComposante.reponse
                ? lComposante.reponse.valeurReponseLibre || ''
                : '';
              H.push(
                IE.jsx.str('input', {
                  type: 'text',
                  style: 'width:30rem;',
                  maxlength: lTailleMaxReponseLibre,
                  class: 'm-left-xl',
                  id: lIdReponseLibre,
                  disabled: lReponseLibreDisabled ? 'disabled' : false,
                  'aria-label': lReponseChoix.getLibelle(),
                  ie_model:
                    (_b =
                      (_a = aParam.instance) === null || _a === void 0
                        ? void 0
                        : _a.getModelReponseLibre) === null || _b === void 0
                      ? void 0
                      : _b.bind(aParam.instance, aParam.indice),
                  value: (
                    (_c = aParam.instance) === null || _c === void 0
                      ? void 0
                      : _c.getModelReponseLibre
                  )
                    ? false
                    : lValeurReponseLibre,
                }),
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
          return !!aParam.composante.avecAR;
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
        const lJsxModelCheckboxAccuseReception = () => {
          return {
            getValue: (aNode) => {
              return !!aParam.composante.reponse.avecReponse;
            },
            setValue: () => {
              aParam.instance.surSaisieReponse(aParam.indice);
            },
            getDisabled: () => {
              return aParam.composante.reponse.avecReponse
                ? true
                : (0, AccessApp_1.getApp)().getModeExclusif();
            },
          };
        };
        H.push('<div class="info-AR">');
        if (aParam.composante.reponse.estRepondant === false) {
          H.push(
            '%s a pris connaissance de cette information le %s',
              ],
            ),
          );
        } else {
          if (aParam.estAffEditionActualite) {
            if (aParam.composante.avecAR) {
              H.push(
                IE.jsx.str(
                  'p',
                  null,
                  'avec accusé de réception',
                ),
              );
            }
          } else {
            H.push(
              IE.jsx.str(
                IEHtml_CheckboxRadio_1.Checkbox,
                { ie_model: lJsxModelCheckboxAccuseReception },
                'J'ai pris connaissance de cette information',
              ),
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
                ? 'À titre individuel'
                : 'Relatif à %s',
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
              aListeInfoSond.addElement(lCumulPere);
            }
            lElement.pere = lCumulPere;
          }
        }
        aListeInfoSond.setTri([
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
            !!this.utilitaires.genreReponse.estGenreSansReponse(
              lQuestion.genreReponse,
            ) ||
            !!this.utilitaires.genreReponse.estGenreSansAR(
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
                ObjetDate_1.GDate.estAvantJour(
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
        return 'listeQuestions' in aActualite
          ? this.avecVisuReponsesDetails(aActualite)
          : this.avecVisuReponses(aActualite);
      }
      avecVisuReponses(aActualite) {
        var _a;
        var _b;
        return (_b =
          (_a = aActualite.informationListeContenu) === null || _a === void 0
            ? void 0
            : _a.avecCommandeVisuResultat) !== null && _b !== void 0
          ? _b
          : false;
      }
      avecVisuReponsesDetails(aActualite) {
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
          !!(
            aActualite.listePublicEntite.getNbrElementsExistes() > 0 ||
            aActualite.listePublicIndividu.getNbrElementsExistes() > 0 ||
            (this.utilitaires.genreEspace.estPourPrimaire() &&
              aActualite.avecDirecteur)
          )
        );
      }
      formatterListeActusPourBlocs(aParam) {
        for (let i = 0, lNbr = aParam.listeActualites.count(); i < lNbr; i++) {
          const lActu = aParam.listeActualites.get(i);
          lActu.DateDebut = lActu.dateDebut;
          lActu.avecReponse =
            UtilitaireInfoSondage_1.TUtilitaireInfoSondage.avecReponse.bind(
              lActu,
            );
          lActu.aToutRepondu =
            UtilitaireInfoSondage_1.TUtilitaireInfoSondage.aToutRepondu.bind(
              lActu,
            );
          lActu.getDate =
            UtilitaireInfoSondage_1.TUtilitaireInfoSondage.getDate.bind(lActu);
        }
      }
      getParamSaisie(aInfoSondage, aGenreEvnt, aParam) {
        if (
          aGenreEvnt === EGenreEvntActu_1.EGenreEvntActu.SurValidationSondage
        ) {
          aParam.avecMsgConfirm = true;
        }
        const lListeActualites = new ObjetListeElements_1.ObjetListeElements();
        lListeActualites.addElement(aInfoSondage);
        return {
          listeActualite: lListeActualites,
          validationDirecte: true,
          saisieActualite: aParam.modeAuteur,
        };
      }
      afficherToast(aActualite, aGenreEvnt, aParam) {
        let lMessage;
        switch (aGenreEvnt) {
          case EGenreEvntActu_1.EGenreEvntActu.SurValidationSondage:
            lMessage = 'Vos réponses ont été prises en compte. \nLe sondage reste publié jusqu'au %s.',
              ],
            );
            break;
          case EGenreEvntActu_1.EGenreEvntActu.SurAR:
            lMessage =
              'Vous avez pris connaissance de cette information';
            break;
          default:
            lMessage = '';
        }
        if (lMessage !== '') {
          Toast_1.Toast.fermer();
          Toast_1.Toast.afficher({
            msg: lMessage,
            type: Toast_1.ETypeToast.succes,
          });
          if (!!aParam.avecRecupDonnees && aParam.clbckRecupDonnees) {
            aParam.clbckRecupDonnees.call(aParam.pereRecupDonnees);
          }
        } else {
          if (!!aParam.avecRecupDonnees && aParam.clbckRecupDonnees) {
            aParam.clbckRecupDonnees.call(aParam.pereRecupDonnees);
          }
        }
      }
      initialiserNouveauItem(aParam) {
        const lInformation = new ObjetElement_1.ObjetElement('');
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
        if (aParam.nature !== null && aParam.nature !== undefined) {
          lInformation.nature = aParam.nature;
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
        const lDateDebut = ObjetDate_1.GDate.getDateCourante();
        const lDateFin = lInformation.estInformation
          ? _calculeDateFinInfo({ derniereDate: aParam.dateFinDerniereDate })
          : _calculeDateFinSondage(lDateDebut);
        if (aParam.avecHoraire) {
          lDateDebut.setHours(7);
          lDateFin.setHours(23);
        }
        lInformation.dateDebut =
          aParam.actualite && aParam.actualite.dateDebut
            ? aParam.actualite.dateDebut
            : lDateDebut;
        lInformation.dateFin = aParam.actualite
          ? aParam.actualite.dateFin
          : lDateFin;
        lInformation.avecReponse =
          UtilitaireInfoSondage_1.TUtilitaireInfoSondage.avecReponse;
        lInformation.aToutRepondu =
          UtilitaireInfoSondage_1.TUtilitaireInfoSondage.aToutRepondu;
        lInformation.lue = false;
        lInformation.public = new ObjetElement_1.ObjetElement('');
        lInformation.genrePublic = -1;
        lInformation.visible = true;
        if (
          aParam.actualite &&
          'listeQuestions' in aParam.actualite &&
          aParam.actualite.listeQuestions
        ) {
          lInformation.listeQuestions = this._copierQuestions(
            aParam.actualite.listeQuestions,
          );
        } else {
          lInformation.listeQuestions =
            new ObjetListeElements_1.ObjetListeElements();
          lInformation.listeQuestions.addElement(
            this.creerQuestionOuTexteSondage({ genreReponse: lGenreReponse }),
          );
        }
        lInformation.estVerrouille = false;
        lInformation.detailPublic =
          aParam.actualite && 'detailPublic' in aParam.actualite
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
        lInformation.genresPublicEntite =
          aParam.actualite && 'genresPublicEntite' in aParam.actualite
            ? MethodesObjet_1.MethodesObjet.dupliquer(
                aParam.actualite.genresPublicEntite,
              )
            : new TypeEnsembleNombre_1.TypeEnsembleNombre();
        lInformation.listePublicEntite =
          aParam.actualite && 'listePublicEntite' in aParam.actualite
            ? MethodesObjet_1.MethodesObjet.dupliquer(
                aParam.actualite.listePublicEntite,
              )
            : new ObjetListeElements_1.ObjetListeElements();
        lInformation.listePublicIndividu =
          aParam.actualite && 'listePublicIndividu' in aParam.actualite
            ? MethodesObjet_1.MethodesObjet.dupliquer(
                aParam.actualite.listePublicIndividu,
              )
            : new ObjetListeElements_1.ObjetListeElements();
        if (!aParam.estInformation) {
          lInformation.listeIndividusPartage = aParam.actualite
            ? MethodesObjet_1.MethodesObjet.dupliquer(
                aParam.actualite.listeIndividusPartage,
              )
            : new ObjetListeElements_1.ObjetListeElements();
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
          UtilitaireInfoSondage_1.TUtilitaireInfoSondage.getDate.bind(
            lInformation,
          );
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
          lLibelle = 'Texte %d';
        } else {
          lLibelle = 'Question %d';
        }
        const lResult = new ObjetElement_1.ObjetElement(lLibelle);
        lResult.rang = lRang;
        lResult.indice = lRangElement;
        lResult.genreReponse = lGenreReponse;
        if (lGenreReponse === null || lGenreReponse === undefined) {
          lResult.avecAR = true;
        } else {
          lResult.avecAR = !!lUtil.estGenreAvecAR(lGenreReponse);
        }
        lResult.texte = '';
        lResult.titre = '';
        lResult.tailleReponse = 200;
        lResult.listePiecesJointes =
          new ObjetListeElements_1.ObjetListeElements();
        lResult.listeChoix = new ObjetListeElements_1.ObjetListeElements();
        lResult.reponse = new ObjetElement_1.ObjetElement();
        if (lUtil.estGenreTextuelle(lGenreReponse)) {
          lResult.reponse.valeurReponse = '';
        } else if (
          lUtil.estGenreChoixUnique(lGenreReponse) ||
          lUtil.estGenreChoixMultiple(lGenreReponse)
        ) {
          lResult.reponse.valeurReponse =
            new TypeEnsembleNombre_1.TypeEnsembleNombre();
        }
        lResult.reponse.avecReponse = false;
        return lResult;
      }
      creerInfoDiffusionDesResultatsSondage(
        aSondage,
        aListeNatures,
        aListePiecesJointesResultats,
      ) {
        const lNatureParDefaut = _getNatureParDefaut.call(this, aListeNatures);
        const lNouvelleActualite = this.initialiserNouveauItem({
          nature: lNatureParDefaut,
          estInformation: true,
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
      }
      getListePiecesJointesDActualite(aActualite) {
        const lListePiecesJointes =
          new ObjetListeElements_1.ObjetListeElements();
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
        const lMessage = 'Cette opération n'est pas disponible depuis la version mobile';
        Toast_1.Toast.afficher({
          msg: lMessage,
          type: Toast_1.ETypeToast.info,
        });
      }
      initCommandesMenuCtxDInfoSond(aMenu, aActualite, aParam) {
        if (aParam.avecEditionActualite) {
          return this.initCommandesMenuCtxDInfoSondDiffusion(
            aMenu,
            aActualite,
            aParam,
          );
        } else {
          return this.initCommandesMenuCtxDInfoSondReception(
            aMenu,
            aActualite,
            aParam,
          );
        }
      }
      initCommandesMenuCtxDInfoSondDiffusion(aMenu, aActualite, aParam) {
        let lAvecAuMoinsUneCommandeAffichee = false;
        if (!(0, AccessApp_1.getApp)().getModeExclusif()) {
          const lAvecDroitSaisie = aParam.droitSaisie;
          const lAvecDroitSaisieModele = aParam.droitSaisieModele;
          const lDroitPublicationPageEtablissement =
            !!aParam.droitPublicationPageEtablissement &&
            !!aActualite &&
            aActualite.estInformation;
          const lEstCtxModele = aParam.estCtxModeles === true;
          if (lAvecDroitSaisie) {
            const lEstAuteurActu = aActualite.estAuteur;
            let lAvecEditer = true;
            if (aParam.estCtxModeles && !lAvecDroitSaisieModele) {
              lAvecEditer = false;
            }
            if (lAvecEditer) {
              aMenu.add(
                'Modifier',
                lAvecDroitSaisie && lEstAuteurActu,
                (aLigneMenu) => {
                  if (IE.estMobile && aActualite.estSondage) {
                    this.afficherInfoNonDispoSurMobile();
                  } else {
                    aParam.evenementMenuContextuel(
                      aActualite,
                      EGenreEvntActu_1.EGenreEvntActu.SurMenuCtxActu,
                      { cmd: aLigneMenu },
                    );
                  }
                },
                {
                  iconeSvg: IE.jsx.str(IconeSvgPencil_1.IconeSvgPencil, null),
                  Numero: EGenreEvntMenuCtxBlocInfoSondage.editerActu,
                  typeAffEnModeMixte:
                    Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                  ariaHasPopup: 'dialog',
                },
              );
              lAvecAuMoinsUneCommandeAffichee = true;
            }
            if (lEstCtxModele) {
              aMenu.add(
                'Utiliser le modèle',
                lAvecDroitSaisie,
                (aLigneMenu) => {
                  if (IE.estMobile && aActualite.estSondage) {
                    this.afficherInfoNonDispoSurMobile();
                  } else {
                    aParam.evenementMenuContextuel(
                      aActualite,
                      EGenreEvntActu_1.EGenreEvntActu.SurMenuCtxActu,
                      { cmd: aLigneMenu },
                    );
                  }
                },
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgTransferer_discussion_1.IconeSvgTransferer_discussion,
                    null,
                  ),
                  Numero: EGenreEvntMenuCtxBlocInfoSondage.recupererModele,
                  typeAffEnModeMixte:
                    Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                  ariaHasPopup: 'dialog',
                },
              );
              lAvecAuMoinsUneCommandeAffichee = true;
              const lAvecGestionDuPartage =
                aActualite.avecGestionPartage &&
                !!aActualite.listeModalitesParPublic;
              if (lAvecGestionDuPartage) {
                aMenu.add(
                  'Partagé avec',
                  lAvecDroitSaisie,
                  (aLigneMenu) => {
                    aParam.evenementMenuContextuel(
                      aActualite,
                      EGenreEvntActu_1.EGenreEvntActu.SurMenuCtxActu,
                      { cmd: aLigneMenu },
                    );
                  },
                  {
                    iconeSvg: IE.jsx.str(
                      IconeSvgFiche_cours_partage_1.IconeSvgFiche_cours_partage,
                      null,
                    ),
                    Numero:
                      EGenreEvntMenuCtxBlocInfoSondage.gestionPartageModele,
                    typeAffEnModeMixte:
                      Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.ellipsis,
                    ariaHasPopup: 'dialog',
                  },
                );
              }
              if (!IE.estMobile && aActualite.estSondage) {
                aMenu.add(
                  'Sauvegarder dans un fichier',
                  lAvecDroitSaisie,
                  (aLigneMenu) => {
                    aParam.evenementMenuContextuel(
                      aActualite,
                      EGenreEvntActu_1.EGenreEvntActu.SurMenuCtxActu,
                      { cmd: aLigneMenu },
                    );
                  },
                  {
                    iconeSvg: IE.jsx.str(
                      IconeSvgUpload_alt_1.IconeSvgUpload_alt,
                      null,
                    ),
                    Numero: EGenreEvntMenuCtxBlocInfoSondage.exporterModele,
                    typeAffEnModeMixte:
                      Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.ellipsis,
                  },
                );
              }
            }
            if (!lEstCtxModele) {
              aMenu.add(
                'Dupliquer',
                lAvecDroitSaisie,
                () => {
                  if (IE.estMobile && aActualite.estSondage) {
                    this.afficherInfoNonDispoSurMobile();
                  } else {
                    const lActualite =
                      MethodesObjet_1.MethodesObjet.dupliquer(aActualite);
                    lActualite.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
                    lActualite.estADupliquer = true;
                    lActualite.dupliquerPublic = true;
                    aParam.evenementMenuContextuel(
                      lActualite,
                      EGenreEvntActu_1.EGenreEvntActu.SurCreationActu,
                    );
                  }
                },
                {
                  iconeSvg: IE.jsx.str(
                    IconeSvgCopier_liste_1.IconeSvgCopier_liste,
                    null,
                  ),
                  Numero: EGenreEvntMenuCtxBlocInfoSondage.dupliquerActu,
                  typeAffEnModeMixte:
                    Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.ellipsis,
                },
              );
              lAvecAuMoinsUneCommandeAffichee = true;
              if (aActualite.publie) {
                aMenu.add(
                  'Ne pas publier',
                  lAvecDroitSaisie && lEstAuteurActu,
                  () => {
                    _changerEtatPublie.call(this, aActualite, false, aParam);
                  },
                  {
                    iconeSvg: IE.jsx.str(
                      IconeSvgInfo_sondage_non_publier_1.IconeSvgInfo_sondage_non_publier,
                      null,
                    ),
                    Numero: EGenreEvntMenuCtxBlocInfoSondage.depublier,
                    typeAffEnModeMixte:
                      Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                  },
                );
              } else {
                aMenu.add(
                  'Publier',
                  this._estPublicationAutorisee(aActualite, aParam),
                  () => {
                    _changerEtatPublie.call(this, aActualite, true, aParam);
                  },
                  {
                    iconeSvg: IE.jsx.str(
                      IconeSvgInfo_sondage_publier_1.IconeSvgInfo_sondage_publier,
                      null,
                    ),
                    Numero: EGenreEvntMenuCtxBlocInfoSondage.publier,
                    typeAffEnModeMixte:
                      Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                  },
                );
              }
              if (lDroitPublicationPageEtablissement) {
                if (aActualite.publicationPageEtablissement) {
                  aMenu.add(
                    'Ne pas publier sur la page établissement / écrans partenaires',
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
                      iconeSvg: IE.jsx.str(
                        IconeSvg_1.IconeSvg,
                        null,
                        IE.jsx.str(IconeSvgEcole_1.IconeSvgEcole, null),
                        IE.jsx.str(
                          IconeSvgFermeture_widget_1.IconeSvgFermeture_widget,
                          { class: 'icone-badge' },
                        ),
                      ),
                      Numero:
                        EGenreEvntMenuCtxBlocInfoSondage.depublierPageEtablissement,
                      typeAffEnModeMixte:
                        Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                    },
                  );
                } else {
                  aMenu.add(
                    'Publier sur la page établissement / écrans partenaires',
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
                      iconeSvg: IE.jsx.str(IconeSvgEcole_1.IconeSvgEcole, null),
                      Numero:
                        EGenreEvntMenuCtxBlocInfoSondage.publierPageEtablissement,
                      typeAffEnModeMixte:
                        Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                    },
                  );
                }
              }
              if (aParam.avecModeles === true && lAvecDroitSaisieModele) {
                aMenu.add(
                  'Créer un modèle',
                  lAvecDroitSaisie && lEstAuteurActu,
                  () => {
                    const lActualite =
                      MethodesObjet_1.MethodesObjet.dupliquer(aActualite);
                    lActualite.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
                    lActualite.estAModeliser = true;
                    aParam.evenementMenuContextuel(
                      lActualite,
                      EGenreEvntActu_1.EGenreEvntActu.SurCreationActu,
                    );
                  },
                  {
                    iconeSvg: aActualite.estSondage
                      ? IE.jsx.str(
                          IconeSvg_1.IconeSvg,
                          null,
                          IE.jsx.str(
                            IconeSvgDiffuser_sondage_1.IconeSvgDiffuser_sondage,
                            null,
                          ),
                          IE.jsx.str(IconeSvgPlus_1.IconeSvgPlus, {
                            class: 'icone-badge',
                          }),
                        )
                      : IE.jsx.str(
                          IconeSvg_1.IconeSvg,
                          null,
                          IE.jsx.str(
                            IconeSvgDiffuser_information_1.IconeSvgDiffuser_information,
                            null,
                          ),
                          IE.jsx.str(IconeSvgPlus_1.IconeSvgPlus, {
                            class: 'icone-badge',
                          }),
                        ),
                    Numero:
                      EGenreEvntMenuCtxBlocInfoSondage.creerModeleDepuisExistant,
                    typeAffEnModeMixte:
                      Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.ellipsis,
                  },
                );
              }
            }
            if (aParam.avecCategorie) {
              let lActif = true;
              if (lEstCtxModele) {
                lActif = !aActualite.estPartage;
              }
              this.ajouterCommandeCategoriser(aMenu, {
                actualite: aActualite,
                evenementMenuContextuel: aParam.evenementMenuContextuel,
                actif: lActif,
              });
              lAvecAuMoinsUneCommandeAffichee = true;
            }
            let lAvecSupprimer = true;
            if (aParam.estCtxModeles && !lAvecDroitSaisieModele) {
              lAvecSupprimer = false;
            }
            if (lAvecSupprimer) {
              aMenu.add(
                'Supprimer',
                lAvecDroitSaisie && lEstAuteurActu,
                () => {
                  const lMsgConfirmSuppression = aActualite.estVerrouille
                    ? 'La sélection contient des réponses. Etes-vous sûr de tout supprimer ?'
                    : GlossaireListe_1.TradGlossaireListe.suppressionSelection;
                  (0, AccessApp_1.getApp)()
                    .getMessage()
                    .afficher({
                      type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                        .Confirmation,
                      message: lMsgConfirmSuppression,
                      callback: _evntSuppressionActu.bind(
                        this,
                        aActualite,
                        aParam,
                      ),
                    });
                },
                {
                  iconeSvg: IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null),
                  Numero: EGenreEvntMenuCtxBlocInfoSondage.supprimerActu,
                  typeAffEnModeMixte:
                    Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                  ariaHasPopup: 'dialog',
                },
              );
              lAvecAuMoinsUneCommandeAffichee = true;
            }
            const lAvecBoutonRelance =
              aActualite.nbIndividusSansReponses > 0 &&
              aActualite.pourcentRepondu < 100 &&
              aActualite.publie &&
              (ObjetDate_1.GDate.estAvantJourCourant(aActualite.dateDebut) ||
                ObjetDate_1.GDate.estJourCourant(aActualite.dateDebut)) &&
              !ObjetDate_1.GDate.estAvantJourCourant(aActualite.dateFin);
            if (lAvecBoutonRelance) {
              aMenu.add(
                'Renvoyer une notification aux non répondants',
                true,
                (aLigneMenu) => {
                  const lMsgConfirm = ObjetTraduction_1.GTraductions.getValeur(
                    aActualite.estSondage
                      ? 'actualites.ConfirmationSondage'
                      : aActualite.estInformation
                        ? 'actualites.ConfirmationInformation'
                        : '',
                    [aActualite.nbIndividusSansReponses],
                  );
                  (0, AccessApp_1.getApp)()
                    .getMessage()
                    .afficher({
                      type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                        .Confirmation,
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
                  iconeSvg: IE.jsx.str(IconeSvgReply_1.IconeSvgReply, null),
                  Numero: EGenreEvntMenuCtxBlocInfoSondage.relancerSelection,
                  typeAffEnModeMixte:
                    Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.ellipsis,
                },
              );
              lAvecAuMoinsUneCommandeAffichee = true;
            }
            if (!lEstCtxModele) {
              if (
                aParam.avecVisuResultats &&
                this.estAvecVisuReponses(aActualite)
              ) {
                aMenu.add(
                  'Voir les réponses',
                  true,
                  (aLigneMenu) => {
                    aParam.evenementMenuContextuel(
                      aActualite,
                      EGenreEvntActu_1.EGenreEvntActu.SurMenuCtxActu,
                      { cmd: aLigneMenu },
                    );
                  },
                  {
                    iconeSvg: IE.jsx.str(IconeSvgQcm_1.IconeSvgQcm, null),
                    Numero: EGenreEvntMenuCtxBlocInfoSondage.voirResultats,
                    typeAffEnModeMixte:
                      Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.bouton,
                    ariaHasPopup: 'dialog',
                  },
                );
                lAvecAuMoinsUneCommandeAffichee = true;
              }
            }
          }
        }
        return lAvecAuMoinsUneCommandeAffichee;
      }
      initCommandesMenuCtxDInfoSondReception(aMenu, aActualite, aParam) {
        let lAvecAuMoinsUneCommandeAffichee = false;
        if (!(0, AccessApp_1.getApp)().getModeExclusif()) {
          if (aActualite.lue) {
            aMenu.add(
              'Marquer comme non lu',
              aActualite.lue,
              () => {
                _changerEtatLue.call(this, aActualite, false, aParam);
              },
              {
                iconeSvg: IE.jsx.str(
                  IconeSvgEye_close_1.IconeSvgEye_close,
                  null,
                ),
                Numero: EGenreEvntMenuCtxBlocInfoSondage.marquerNonLu,
                typeAffEnModeMixte:
                  Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
              },
            );
          } else {
            aMenu.add(
              'Marquer comme lu',
              !aActualite.lue,
              () => {
                _changerEtatLue.call(this, aActualite, true, aParam);
              },
              {
                iconeSvg: IE.jsx.str(IconeSvgEye_open_1.IconeSvgEye_open, null),
                Numero: EGenreEvntMenuCtxBlocInfoSondage.marquerLu,
                typeAffEnModeMixte:
                  Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
              },
            );
          }
          lAvecAuMoinsUneCommandeAffichee = true;
          if (aParam.avecCategorie) {
            this.ajouterCommandeCategoriser(aMenu, {
              actualite: aActualite,
              evenementMenuContextuel: aParam.evenementMenuContextuel,
            });
          }
          if (aParam.avecSuppressionActusRecues) {
            aMenu.add(
              'Supprimer',
              true,
              () => {
                (0, AccessApp_1.getApp)()
                  .getMessage()
                  .afficher({
                    type: Enumere_BoiteMessage_1.EGenreBoiteMessage
                      .Confirmation,
                    message:
                      GlossaireListe_1.TradGlossaireListe.suppressionSelection,
                    callback: function (aGenreAction) {
                      if (
                        aGenreAction === Enumere_Action_1.EGenreAction.Valider
                      ) {
                        _changerEtatSupprimee(aActualite, aParam);
                      }
                    }.bind(this),
                  });
              },
              {
                iconeSvg: IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null),
                Numero: EGenreEvntMenuCtxBlocInfoSondage.supprimerConsult,
                typeAffEnModeMixte:
                  Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                ariaHasPopup: 'dialog',
              },
            );
          }
          if (
            aParam.avecDiscussion &&
            aActualite.elmauteur &&
            aActualite.elmauteur.avecDiscussion
          ) {
            aMenu.avecSeparateurSurSuivant();
            aMenu.add(
              'Démarrer une discussion',
              true,
              (aLigneMenu) => {
                aParam.evenementMenuContextuel(
                  aActualite,
                  EGenreEvntActu_1.EGenreEvntActu.SurMenuCtxActu,
                  { cmd: aLigneMenu },
                );
              },
              {
                iconeSvg: IE.jsx.str(
                  IconeSvgNouvelle_discussion_1.IconeSvgNouvelle_discussion,
                  null,
                ),
                Numero: EGenreEvntMenuCtxBlocInfoSondage.demarrerDiscussion,
                typeAffEnModeMixte:
                  Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
                ariaHasPopup: 'dialog',
              },
            );
          }
        }
        return lAvecAuMoinsUneCommandeAffichee;
      }
      ajouterCommandeCategoriser(aMenu, aParams) {
        var _a;
        aMenu.add(
          'Catégoriser',
          (_a = aParams.actif) !== null && _a !== void 0 ? _a : true,
          (aLigne) => {
            if (aParams.evenementMenuContextuel) {
              aParams.evenementMenuContextuel(
                aParams.actualite,
                EGenreEvntActu_1.EGenreEvntActu.SurMenuCtxActu,
                { cmd: aLigne },
              );
            }
          },
          {
            iconeSvg: IE.jsx.str(
              IconeSvgClasser_discussion_1.IconeSvgClasser_discussion,
              null,
            ),
            typeAffEnModeMixte:
              Enumere_MenuCtxModeMixte_1.ETypeAffEnModeMixte.icon,
            Numero: EGenreEvntMenuCtxBlocInfoSondage.categoriser,
            ariaHasPopup: 'dialog',
          },
        );
      }
      verifierEtatModification(aParam) {
        const lDonnee = aParam.donnee;
        const lDonneeOrigine = aParam.donneeOrigine;
        const lTest =
          lDonnee.getLibelle() !== lDonneeOrigine.getLibelle() ||
          (lDonnee.nature !== null &&
            lDonnee.nature !== undefined &&
            lDonneeOrigine.nature !== null &&
            lDonneeOrigine.nature !== undefined &&
            lDonnee.nature.getNumero() !== lDonneeOrigine.nature.getNumero()) ||
          lDonnee.publie !== lDonneeOrigine.publie ||
          !ObjetDate_1.GDate.estJourEgal(
            lDonnee.dateDebut,
            lDonneeOrigine.dateDebut,
          ) ||
          !ObjetDate_1.GDate.estJourEgal(
            lDonnee.dateFin,
            lDonneeOrigine.dateFin,
          ) ||
          lDonnee.listeQuestions.existeElementPourValidation() ||
          lDonnee.avecModificationPublic ||
          lDonnee.publicationPageEtablissement !==
            lDonneeOrigine.publicationPageEtablissement ||
          !!lDonnee.partageAEteModifie;
        return lTest
          ? Enumere_Etat_1.EGenreEtat.Modification
          : Enumere_Etat_1.EGenreEtat.Aucun;
      }
      validerEdition(aParam) {
        const lListeActualites = new ObjetListeElements_1.ObjetListeElements();
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
          var _a;
          if (aActu.estInformation) {
            (_a = aActu.listeQuestions) === null || _a === void 0
              ? void 0
              : _a.parcourir((aQuestion) => {
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
      getInfosPublication(aActualite) {
        const lEstPubliee = aActualite.publie === true;
        let lEnCours = false;
        let lFutur = false;
        let lPassee = false;
        if (lEstPubliee) {
          lEnCours = ObjetDate_1.GDate.dateEntreLesDates(
            ObjetDate_1.GDate.getDateHeureCourante(false),
            aActualite.dateDebut,
            aActualite.dateFin,
            true,
          );
          lFutur = ObjetDate_1.GDate.estAvantJour(
            ObjetDate_1.GDate.getDateHeureCourante(false),
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
        return this._copieQuestion(aQuestion);
      }
      _copierQuestions(aListeQuestions) {
        const lResult = new ObjetListeElements_1.ObjetListeElements();
        for (let i = 0; i < aListeQuestions.count(); i++) {
          if (aListeQuestions.existe(i)) {
            const lElement = this._copieQuestion(aListeQuestions.get(i));
            lElement.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
            lResult.addElement(lElement);
          }
        }
        return lResult;
      }
      _copieQuestion(aQuestion) {
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
        lNouvelleQuestion.listeChoix = _copierChoixReponses(
          aQuestion.listeChoix,
        );
        lNouvelleQuestion.avecMaximum = aQuestion.avecMaximum;
        lNouvelleQuestion.nombreReponsesMax = aQuestion.nombreReponsesMax;
        lNouvelleQuestion.titre = aQuestion.titre;
        return lNouvelleQuestion;
      }
      _estPublicationAutorisee(aArticle, aParam) {
        const lAvecPublic = this.moteurDestinataires.avecDestinataires({
          donnee: aArticle,
        });
        const lEstAuteurActu = aArticle.estAuteur;
        return !!aParam.droitSaisie && lAvecPublic && !!lEstAuteurActu;
      }
      setListeCategories(aListe) {
        this.listeCategories = aListe;
      }
      getCategorie(aCategorie, aListeCategories = this.listeCategories) {
        return aListeCategories === null || aListeCategories === void 0
          ? void 0
          : aListeCategories.getElementParNumero(aCategorie.getNumero());
      }
      getIconeCategorie(aCategorie, aListeCategories = this.listeCategories) {
        const lCategorie = this.getCategorie(aCategorie, aListeCategories);
        if (!lCategorie) {
          return '';
        }
        return IE.jsx.str(
          Categorie_1.CarreCategorie,
          {
            couleur: lCategorie.couleur,
            tooltiplabel: lCategorie.getLibelle(),
          },
          lCategorie.abr,
        );
      }
      getListeIconesCategorie(
        aCategories,
        aListeCategories = this.listeCategories,
      ) {
        if (
          !(aCategories === null || aCategories === void 0
            ? void 0
            : aCategories.count())
        ) {
          return '';
        }
        return IE.jsx.str(
          'ul',
          { class: [Divers_css_1.SD.flexContain, Divers_css_1.SD.flexGap] },
          aCategories.getTableau((aCategorie) =>
            IE.jsx.str(
              'li',
              null,
              this.getIconeCategorie(aCategorie, aListeCategories),
            ),
          ),
        );
      }
      avecCetteCategorie(aActu, aCategorie) {
        var _a, _b;
        const lEstSansCategorie =
          !aCategorie ||
          ('estSansCategorie' in aCategorie && aCategorie.estSansCategorie);
        return lEstSansCategorie
          ? ((_a = aActu.listeCategories) === null || _a === void 0
              ? void 0
              : _a.count()) === 0
          : !!((_b = aActu.listeCategories) === null || _b === void 0
              ? void 0
              : _b.getElementParFiltre(
                  (aCategorieActu) =>
                    aCategorie.getNumero() === aCategorieActu.getNumero(),
                ));
      }
    }
    exports.MoteurInfoSondage = MoteurInfoSondage;
    function _getIconePublication(aInfos) {
      if (aInfos.estPubliee) {
        if (aInfos.estFutur) {
          return IE.jsx.str(
            IconeSvg_1.IconeSvg,
            null,
            IE.jsx.str(
              IconeSvgInfo_sondage_publier_1.IconeSvgInfo_sondage_publier,
              null,
            ),
            ' ',
            IE.jsx.str(IconeSvgEdt_permanence_1.IconeSvgEdt_permanence, {
              class: 'icone-badge',
            }),
          );
        } else if (aInfos.estPassee) {
          return IE.jsx.str(
            IconeSvgInfo_sondage_publier_1.IconeSvgInfo_sondage_publier,
            null,
          );
        } else if (aInfos.estEnCours) {
          return IE.jsx.str(
            IconeSvg_1.IconeSvg,
            null,
            IE.jsx.str(
              IconeSvgInfo_sondage_publier_1.IconeSvgInfo_sondage_publier,
              null,
            ),
            ' ',
            IE.jsx.str(IconeSvgOk_1.IconeSvgOk, {
              class: 'icone-badge badge-success',
            }),
          );
        }
      } else {
        return IE.jsx.str(
          IconeSvgBrouillon_discussion_1.IconeSvgBrouillon_discussion,
          null,
        );
      }
      return '';
    }
    function _getFlatClassColorPublication(aInfos) {
      return aInfos.estPubliee && !aInfos.estPassee ? 'on' : 'off';
    }
    function _getStrPublication(aInfos) {
      return aInfos.estPubliee
        ? aInfos.estEnCours
          ? 'Publié'
          : aInfos.estFutur
            ? 'Publication à venir'
            : 'Publication passée'
        : 'Brouillon';
    }
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
    function _calculeDateFinInfo(aParam) {
      if (
        aParam !== null &&
        aParam !== undefined &&
        aParam.derniereDate === true
      ) {
        return ObjetDate_1.GDate.derniereDate;
      } else {
        const lDerniereSemaine = IE.Cycles.nombreCyclesAnneeScolaire();
        return IE.Cycles.dateDernierJourOuvreCycle(lDerniereSemaine);
      }
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
    function _getNatureParDefaut(aListeNatures) {
      let lNatureParDefaut = null;
      if (!!aListeNatures) {
        aListeNatures.parcourir((D) => {
          if (!!D && D.estDefaut) {
            lNatureParDefaut = D;
            return false;
          }
        });
        if (!lNatureParDefaut) {
          lNatureParDefaut = aListeNatures.getPremierElement();
        }
      }
      return lNatureParDefaut;
    }
    function _changerEtatPublie(aArticle, aPublie, aParam) {
      if (aArticle && aParam.avecEditionActualite) {
        aArticle.publie = aPublie;
        if (!aArticle.publie && aArticle.estInformation) {
          aArticle.publicationPageEtablissement = false;
        }
        aArticle.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        aParam.evenementMenuContextuel(
          aArticle,
          EGenreEvntActu_1.EGenreEvntActu.SurValidationModif,
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
        aArticle.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
        aParam.evenementMenuContextuel(
          aArticle,
          EGenreEvntActu_1.EGenreEvntActu.SurValidationModif,
        );
      }
    }
    function _evntSuppressionActu(aArticle, aParam, aGenreAction) {
      if (aGenreAction === Enumere_Action_1.EGenreAction.Valider) {
        aArticle.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
        aArticle.visible = false;
        aParam.evenementMenuContextuel(
          aArticle,
          EGenreEvntActu_1.EGenreEvntActu.SurValidationModif,
        );
      }
    }
    function _changerEtatLue(aArticle, aEtat, aParam) {
      if (aArticle.lue !== aEtat) {
        aArticle.lue = aEtat;
        aArticle.marqueLueSeulement = true;
        aParam.evenementMenuContextuel(
          aArticle,
          EGenreEvntActu_1.EGenreEvntActu.SurValidationDirecte,
          { avecRecupDonnees: true },
        );
      }
    }
    function _changerEtatSupprimee(aArticle, aParam) {
      aArticle.supprimee = true;
      aArticle.marqueLueSeulement = true;
      aParam.evenementMenuContextuel(
        aArticle,
        EGenreEvntActu_1.EGenreEvntActu.SurValidationDirecte,
        { avecRecupDonnees: true },
      );
    }
    function _evntRelanceActu(aActualite, aParams, aLigneMenu, aGenreAction) {
      if (aGenreAction === Enumere_Action_1.EGenreAction.Valider) {
        aParams.evenementMenuContextuel(
          aActualite,
          EGenreEvntActu_1.EGenreEvntActu.SurMenuCtxActu,
          { cmd: aLigneMenu },
        );
      }
    }
  },
  fn: 'moteurinfosondage.js',
});