IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_DetailAgenda = void 0;
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetChaine_1 = require('ObjetChaine');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_EvenementListe_1 = require('Enumere_EvenementListe');
    const UtilitaireVisiosSco_1 = require('UtilitaireVisiosSco');
    const TypeGenreEvenementAgenda_1 = require('TypeGenreEvenementAgenda');
    const UtilitaireUrl_1 = require('UtilitaireUrl');
    const MethodesObjet_1 = require('MethodesObjet');
    require('ObjetFenetre_DetailAgenda.css');
    class ObjetFenetre_DetailAgenda extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.option = {
          estFenetreAgenda: false,
          estEspaceProf: false,
          droitSaisie: false,
        };
        this.setOptionsFenetre({
          avecComposeBasInFooter: true,
          positionSurSouris: !this.option.estFenetreAgenda,
          titre: () => {
            return this.donnees
              ? `<span class="titreDetailAgenda" style="border-left-color:${this.donnees.CouleurCellule ? this.donnees.CouleurCellule : ''} ">${this.donnees.getLibelle()}</span>`
              : '';
          },
        });
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getDate: function () {
            let lStrDates = '';
            const lEstPasEventPerso = !(
              aInstance.donnees &&
              aInstance.donnees.periodicite &&
              aInstance.donnees.periodicite.estEvtPerso
            );
            if (
              !!aInstance.donnees &&
              lEstPasEventPerso &&
              aInstance.donnees.DateDebut &&
              aInstance.donnees.DateFin
            ) {
              lStrDates = ObjetDate_1.GDate.strDates(
                aInstance.donnees.DateDebut,
                aInstance.donnees.DateFin,
                { sansHoraire: aInstance.donnees.sansHoraire },
              );
            }
            return lStrDates;
          },
          Publie: {
            estPublie: function () {
              let lEstPartage = false;
              if (
                !!aInstance.donnees &&
                aInstance.donnees.publie &&
                aInstance.option.estEspaceProf
              ) {
                lEstPartage = true;
              }
              return lEstPartage;
            },
            getStr: function () {
              let lStrPartage = '';
              if (!!aInstance.donnees) {
                if (aInstance.donnees.publie) {
                  lStrPartage = 'Évènement partagé';
                }
              }
              return lStrPartage;
            },
          },
          Periodique: {
            estPeriodique: function () {
              let lEstPeriodicite = false;
              if (!!aInstance.donnees && aInstance.donnees.estPeriodique) {
                lEstPeriodicite = true;
              }
              return lEstPeriodicite;
            },
            getStr: function () {
              let lStr = '';
              if (
                aInstance.donnees &&
                !!aInstance.donnees.periodicite &&
                aInstance.donnees.estPeriodique
              ) {
                if (aInstance.donnees.periodicite.estEvtPerso) {
                  let lChaine =
                    (aInstance.donnees.DateDebut &&
                      aInstance.donnees.DateFin &&
                      ObjetDate_1.GDate.strDates(
                        aInstance.donnees.DateDebut,
                        aInstance.donnees.DateFin,
                        { sansHoraire: aInstance.donnees.sansHoraire },
                      ).trim()) ||
                    '';
                  lStr = `${lChaine} - ${IE.jsx.str('i', { role: 'presentation', class: 'icons icon_refresh' })} ${'Événement périodique modifié'}`;
                } else {
                  lStr = aInstance.donnees.periodicite.libelleDescription;
                }
              }
              return lStr;
            },
            getClass() {
              if (!aInstance.donnees) {
                return '';
              }
              const lClass = [];
              lClass.push('ie-sous-titre');
              if (
                aInstance.donnees.periodicite &&
                !aInstance.donnees.periodicite.estEvtPerso
              ) {
                lClass.push('icons', 'iconic', 'icon_refresh');
              }
              return lClass.join(' ');
            },
          },
          Auteur: {
            avecAuteur: function () {
              let lAuteur = false;
              if (!!aInstance.donnees && !!aInstance.donnees.strAuteur) {
                lAuteur = true;
              }
              return lAuteur;
            },
            getStrAuteur: function () {
              let lStrAuteur = '';
              if (!!aInstance.donnees && !!aInstance.donnees.strAuteur) {
                lStrAuteur = aInstance.donnees.strAuteur;
              }
              return lStrAuteur;
            },
          },
          getCommentaire: function () {
            let lCommentaire =
              !!aInstance.donnees &&
              !!aInstance.donnees.Commentaire &&
              aInstance.donnees.Commentaire.length > 0
                ? aInstance.donnees.Commentaire
                : '';
            if (ObjetChaine_1.GChaine.contientAuMoinsUneURL(lCommentaire)) {
              lCommentaire =
                ObjetChaine_1.GChaine.ajouterLiensURL(lCommentaire);
            }
            return ObjetChaine_1.GChaine.replaceRCToHTML(lCommentaire);
          },
          estEditable: function () {
            if (
              IE.estMobile &&
              aInstance.option.droitSaisie &&
              !!aInstance.donnees &&
              !!aInstance.donnees.proprietaire
            ) {
              return true;
            } else {
              return false;
            }
          },
          estDuplicable: function () {
            if (
              IE.estMobile &&
              aInstance.option.droitSaisie &&
              !!aInstance.donnees &&
              !!aInstance.donnees.proprietaire &&
              !aInstance.donnees.estPeriodique
            ) {
              return true;
            } else {
              return false;
            }
          },
          btnDupliquer: {
            event() {
              if (!!aInstance.evenementDupliquer && aInstance.donnees) {
                aInstance.evenementDupliquer(aInstance.donnees);
                aInstance.fermer();
              }
            },
          },
          btnSupprimer: {
            event() {
              if (!!aInstance.evenementAgenda && aInstance.donnees) {
                const lParam = {
                  article: aInstance.donnees,
                  genreEvenement:
                    Enumere_EvenementListe_1.EGenreEvenementListe.Suppression,
                };
                aInstance.evenementAgenda(lParam);
                aInstance.fermer();
              }
            },
          },
          ConseilClasse: {
            avecConseilClasse: function () {
              if (!!aInstance.donnees && aInstance.donnees.estConseilClasse) {
                return aInstance.donnees.estConseilClasse;
              } else {
                return false;
              }
            },
            sansConseilClasse: function () {
              if (!!aInstance.donnees && !aInstance.donnees.estConseilClasse) {
                return !aInstance.donnees.estConseilClasse;
              } else {
                return false;
              }
            },
            composeConseilClasse: function () {
              return aInstance.donnees && aInstance.donnees.estConseilClasse
                ? aInstance._composeConseilClasse(aInstance.donnees)
                : '';
            },
          },
          avecPublicationPageEtablissement: function () {
            if (
              aInstance.avecPublicationPageEtablissement &&
              !!aInstance.donnees &&
              aInstance.donnees.publicationPageEtablissement &&
              aInstance.donnees.publie &&
              aInstance.option.estEspaceProf &&
              (aInstance.donnees.getGenre() ===
                TypeGenreEvenementAgenda_1.TypeGenreEvenementAgenda
                  .tgea_Standard ||
                aInstance.donnees.getGenre() ===
                  TypeGenreEvenementAgenda_1.TypeGenreEvenementAgenda
                    .tgea_StandardPeriodique)
            ) {
              return true;
            }
            return false;
          },
          PublicationEtablisement: function () {
            return 'Publié sur la page établissement';
          },
        });
      }
      setOptions(aOptions) {
        Object.assign(this.option, aOptions);
        return this;
      }
      setDonnees(aDonnees) {
        this.donnees = aDonnees.detail;
        this.afficher(this.composeContenu());
        if (
          'avecPublicationPageEtablissement' in aDonnees &&
          aDonnees.avecPublicationPageEtablissement &&
          MethodesObjet_1.MethodesObjet.isBoolean(
            aDonnees.avecPublicationPageEtablissement,
          )
        ) {
          this.avecPublicationPageEtablissement =
            aDonnees.avecPublicationPageEtablissement;
        }
        if (!!aDonnees.evenementAgenda) {
          this.evenementAgenda = aDonnees.evenementAgenda;
        }
        if (!!aDonnees.evenementDupliquer) {
          this.evenementDupliquer = aDonnees.evenementDupliquer;
        }
      }
      composeContenu() {
        var _a, _b, _c, _d, _e, _f, _g;
        const lAvecDocJoints =
          ((_b =
            (_a = this.donnees) === null || _a === void 0
              ? void 0
              : _a.listeDocJoints) === null || _b === void 0
            ? void 0
            : _b.count()) > 0;
        const lAvecListeFichiers =
          ((_d =
            (_c = this.donnees) === null || _c === void 0
              ? void 0
              : _c.listeFichiers) === null || _d === void 0
            ? void 0
            : _d.count()) > 0;
        return IE.jsx.str(
          'section',
          { class: 'FenetreDetailAgenda' },
          IE.jsx.str(
            'section',
            null,
            IE.jsx.str('div', {
              'ie-html': 'getDate',
              class: 'capitalize ie-sous-titre',
            }),
            IE.jsx.str('div', {
              'ie-html': 'Publie.getStr',
              'ie-if': 'Publie.estPublie',
              class: 'ie-sous-titre icons iconic icon_fiche_cours_partage',
            }),
            IE.jsx.str('div', {
              'ie-if': 'avecPublicationPageEtablissement',
              'ie-html': 'PublicationEtablisement',
              class: 'ie-sous-titre icons iconic icon_ecole',
            }),
            IE.jsx.str('div', {
              'ie-html': 'Periodique.getStr',
              title: 'Evènement périodique',
              'ie-if': 'Periodique.estPeriodique',
              'ie-class': 'Periodique.getClass',
            }),
            IE.jsx.str('div', {
              'ie-html': 'Auteur.getStrAuteur',
              'ie-if': 'Auteur.avecAuteur',
              class: 'ie-sous-titre',
            }),
          ),
          IE.jsx.str('div', {
            'ie-html': 'getCommentaire',
            'ie-if': 'ConseilClasse.sansConseilClasse',
            class: 'm-top-xl commentaire',
          }),
          IE.jsx.str('div', {
            'ie-html': 'ConseilClasse.composeConseilClasse',
            'ie-if': 'ConseilClasse.avecConseilClasse',
            class: 'm-top-xl commentaire',
          }),
          (lAvecDocJoints || lAvecListeFichiers) &&
            IE.jsx.str(
              'section',
              { class: 'ctnListeDocJoints' },
              lAvecDocJoints &&
                ((_f =
                  (_e = this.donnees) === null || _e === void 0
                    ? void 0
                    : _e.listeDocJoints) === null || _f === void 0
                  ? void 0
                  : _f.getTableau((aDocumentJoint) =>
                      ObjetChaine_1.GChaine.composerUrlLienExterne({
                        documentJoint: aDocumentJoint,
                        genreRessource:
                          Enumere_Ressource_1.EGenreRessource
                            .DocJointEtablissement,
                      }),
                    )),
              lAvecListeFichiers &&
                ((_g = this.donnees) === null || _g === void 0
                  ? void 0
                  : _g.listeFichiers) &&
                UtilitaireUrl_1.UtilitaireUrl.construireListeUrls(
                  this.donnees.listeFichiers,
                ),
            ),
        );
      }
      surValidation(aIndice) {
        if (
          !!this.donnees &&
          !!this.donnees.proprietaire &&
          IE.estMobile &&
          this.option.droitSaisie &&
          aIndice === 0
        ) {
          this.callback.appel({ element: this.donnees });
        }
        this.fermer();
      }
      composeBas() {
        return IE.jsx.str(
          'section',
          { class: 'compose-bas' },
          IE.jsx.str('ie-btnicon', {
            title: 'Dupliquer',
            class: 'icon_dupliquer avecFond i-medium',
            'ie-model': 'btnDupliquer',
            'ie-if': 'estDuplicable',
          }),
          IE.jsx.str('ie-btnicon', {
            title: 'Supprimer',
            class: 'icon_trash avecFond i-medium',
            'ie-model': 'btnSupprimer',
            'ie-if': 'estEditable',
          }),
        );
      }
      _composeConseilClasse(aEvenement) {
        const H = [];
        const lPresidentCC = !!aEvenement.presidentCC
          ? 'Président' +
            ' : ' +
            aEvenement.presidentCC
          : '';
        let lProfPrincipaux = '';
        if (
          !!aEvenement.listeProfsPrincipaux &&
          aEvenement.listeProfsPrincipaux.count() > 0
        ) {
          lProfPrincipaux =
            aEvenement.listeProfsPrincipaux.count() > 1
              ? 'Professeurs principaux'
              : 'Professeur principal';
          lProfPrincipaux +=
            ' : ' +
            aEvenement.listeProfsPrincipaux.getTableauLibelles().join(', ');
        }
        let lParentDelegues = '';
        if (
          !!aEvenement.listeDeleguesParents &&
          aEvenement.listeDeleguesParents.count() > 0
        ) {
          lParentDelegues =
            'Parents délégués' +
            ' : ';
          lParentDelegues += aEvenement.listeDeleguesParents
            .getTableauLibelles()
            .join(', ');
        }
        let lElevesDelegues = '';
        if (
          !!aEvenement.listeDeleguesEleves &&
          aEvenement.listeDeleguesEleves.count() > 0
        ) {
          lElevesDelegues =
            'Élèves délégués' +
            ' : ';
          lElevesDelegues += aEvenement.listeDeleguesEleves
            .getTableauLibelles()
            .join(', ');
        }
        H.push(
          '<div class="Espace">',
          '<ul class="list-as-menu">',
          lPresidentCC ? '<li> ' + lPresidentCC + '</li>' : '',
          lProfPrincipaux ? '<li> ' + lProfPrincipaux + '</li>' : '',
          lParentDelegues ? '<li> ' + lParentDelegues + '</li>' : '',
          lElevesDelegues ? '<li> ' + lElevesDelegues + '</li>' : '',
          '</ul>',
          '</div>',
        );
        if (aEvenement.visio && aEvenement.visio.url) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'agenda-cc-visio' },
              IE.jsx.str(
                'ie-chips',
                {
                  class: [
                    'iconic',
                    UtilitaireVisiosSco_1.UtilitaireVisios.getNomIconePresenceVisios(),
                  ],
                  href: ObjetChaine_1.GChaine.verifierURLHttp(
                    aEvenement.visio.url,
                  ),
                },
                aEvenement.visio.libelleLien ||
                  'Lancer la visio',
              ),
              aEvenement.visio.commentaire
                ? IE.jsx.str(
                    'label',
                    null,
                    ObjetChaine_1.GChaine.replaceRCToHTML(
                      aEvenement.visio.commentaire,
                    ),
                  )
                : '',
            ),
          );
        }
        return H.join('');
      }
    }
    exports.ObjetFenetre_DetailAgenda = ObjetFenetre_DetailAgenda;
  },
  fn: 'objetfenetre_detailagenda.js',
});