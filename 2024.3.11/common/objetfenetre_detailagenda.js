IE.fModule({
  f: function (exports, require, module, global) {
    const { ObjetFenetre } = require('ObjetFenetre.js');
    const { GDate } = require('ObjetDate.js');
    const { GChaine } = require('ObjetChaine.js');
    const { EGenreRessource } = require('Enumere_Ressource.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { EGenreEvenementListe } = require('Enumere_EvenementListe.js');
    const { UtilitaireVisios } = require('UtilitaireVisiosSco.js');
    const { tag } = require('tag.js');
    const { TypeGenreEvenementAgenda } = require('TypeGenreEvenementAgenda.js');
    const { UtilitaireUrl } = require('UtilitaireUrl.js');
    require('ObjetFenetre_DetailAgenda.css');
    class ObjetFenetre_DetailAgenda extends ObjetFenetre {
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
          titre: function () {
            return this.donnees
              ? `<span class="titreDetailAgenda" style="border-left-color:${this.donnees.CouleurCellule ? this.donnees.CouleurCellule : ''} ">${this.donnees.getLibelle()}</span>`
              : '';
          }.bind(this),
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
              lStrDates = GDate.strDates(
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
                  lStrPartage = GTraductions.getValeur(
                    'Agenda.EvenementPartage',
                  );
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
                !!aInstance.donnees.periodicite &&
                aInstance.donnees.estPeriodique
              ) {
                if (aInstance.donnees.periodicite.estEvtPerso) {
                  let lChaine =
                    (aInstance.donnees.DateDebut &&
                      aInstance.donnees.DateFin &&
                      GDate.strDates(
                        aInstance.donnees.DateDebut,
                        aInstance.donnees.DateFin,
                        { sansHoraire: aInstance.donnees.sansHoraire },
                      ).trim()) ||
                    '';
                  lStr = `${lChaine} - ${tag('i', { class: 'icons icon icon_refresh', 'ie-hint': `<div>${GTraductions.getValeur('Agenda.EvenementModifie')}</div>` })} ${GTraductions.getValeur('Agenda.EvenementModifie')}`;
                } else {
                  lStr = aInstance.donnees.periodicite.libelleDescription;
                }
              }
              return lStr;
            },
            getClass() {
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
            if (GChaine.contientAuMoinsUneURL(lCommentaire)) {
              lCommentaire = GChaine.ajouterLiensURL(lCommentaire);
            }
            return GChaine.replaceRCToHTML(lCommentaire);
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
                  genreEvenement: EGenreEvenementListe.Suppression,
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
              return _composeConseilClasse.call(this, aInstance.donnees);
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
                TypeGenreEvenementAgenda.tgea_Standard ||
                aInstance.donnees.getGenre() ===
                  TypeGenreEvenementAgenda.tgea_StandardPeriodique)
            ) {
              return true;
            }
            return false;
          },
          PublicationEtablisement: function () {
            return GTraductions.getValeur(
              'Fenetre_SaisieAgenda.partageSurPageEtablissement',
            );
          },
        });
      }
      setOptions(aOptions) {
        Object.assign(this.option, aOptions);
      }
      setDonnees(aDonnees) {
        this.donnees = aDonnees.detail;
        this.afficher(this.composeContenu());
        if (!!aDonnees.avecPublicationPageEtablissement) {
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
        const H = [];
        H.push('<section class="FenetreDetailAgenda">');
        H.push(
          '<section>',
          '<div ie-html="getDate" class="capitalize ie-sous-titre"></div>',
          '<div ie-html="Publie.getStr" ie-if="Publie.estPublie" class="ie-sous-titre icons iconic icon_fiche_cours_partage"></div>',
          `<div ie-if="avecPublicationPageEtablissement" ie-html="PublicationEtablisement" class="ie-sous-titre icons iconic icon_ecole"></div>`,
          `<div ie-html="Periodique.getStr" title="${GTraductions.getValeur('Agenda.AgendaHintEvtPEriodique')}" ie-if="Periodique.estPeriodique" ie-class="Periodique.getClass"></div>`,
          '<div ie-html="Auteur.getStrAuteur" ie-if="Auteur.avecAuteur" class="ie-sous-titre"></div>',
          '</section>',
          '<div ie-html="getCommentaire" ie-if="ConseilClasse.sansConseilClasse" class="m-top-xl commentaire"></div>',
          '<div ie-html="ConseilClasse.composeConseilClasse" ie-if="ConseilClasse.avecConseilClasse" class="m-top-xl commentaire"></div>',
        );
        if (
          this.donnees &&
          ((!!this.donnees.listeDocJoints &&
            this.donnees.listeDocJoints.count()) ||
            (!!this.donnees.listeFichiers &&
              this.donnees.listeFichiers.count()))
        ) {
          H.push('<section class="ctnListeDocJoints">');
          this.donnees.listeDocJoints.parcourir((aDocumentJoint) => {
            H.push(
              GChaine.composerUrlLienExterne({
                documentJoint: aDocumentJoint,
                genreRessource: EGenreRessource.DocJointEtablissement,
              }),
            );
          });
          if (this.donnees.listeFichiers) {
            H.push(
              UtilitaireUrl.construireListeUrls(this.donnees.listeFichiers),
            );
          }
          H.push(' </section>');
        }
        H.push('</section>');
        return H.join('');
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
        const H = [];
        H.push(
          `\n        <section class="compose-bas">\n            <ie-btnicon title="${GTraductions.getValeur('Dupliquer')}" class="icon_dupliquer avecFond i-medium" ie-model="btnDupliquer" ie-if="estDuplicable"></ie-btnicon>\n            <ie-btnicon title="${GTraductions.getValeur('Supprimer')}" class="icon_trash avecFond i-medium" ie-model="btnSupprimer" ie-if="estEditable"></ie-btnicon>\n        </section>\n    `,
        );
        return H.join('');
      }
    }
    function _composeConseilClasse(aEvenement) {
      const H = [];
      const lPresidentCC = !!aEvenement.presidentCC
        ? GTraductions.getValeur('Agenda.President') +
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
            ? GTraductions.getValeur('Agenda.ProfesseursPrincipaux')
            : GTraductions.getValeur('Agenda.ProfesseurPrincipal');
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
          GTraductions.getValeur('Agenda.ParentsDelegues') + ' : ';
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
          GTraductions.getValeur('Agenda.ElevesDelegues') + ' : ';
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
          tag(
            'div',
            { class: 'agenda-cc-visio' },
            tag(
              'ie-chips',
              {
                class: ['iconic', UtilitaireVisios.getNomIconePresenceVisios()],
                href: GChaine.verifierURLHttp(aEvenement.visio.url),
              },
              aEvenement.visio.libelleLien ||
                GTraductions.getValeur(
                  'FenetreSaisieVisiosCours.AccederAuCoursVirtuel',
                ),
            ),
            aEvenement.visio.commentaire
              ? tag(
                  'label',
                  GChaine.replaceRCToHTML(aEvenement.visio.commentaire),
                )
              : '',
          ),
        );
      }
      return H.join('');
    }
    module.exports = { ObjetFenetre_DetailAgenda };
  },
  fn: 'objetfenetre_detailagenda.js',
});