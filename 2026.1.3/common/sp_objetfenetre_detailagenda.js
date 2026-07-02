IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_DetailAgenda = void 0;
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const TypeGenreEvenementAgenda_1 = require('@scolys/espace/script/enumere/TypeGenreEvenementAgenda');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const UtilitaireAgenda_1 = require('@scolys/produit/script/UtilitaireAgenda');
    const UtilitaireAgenda_2 = require('@scolys/produit/script/UtilitaireAgenda');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    require('@scolys/produit/css/ObjetFenetre_DetailAgenda.css');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const ObjetFenetre_Mobile_css_1 = require('@cp/Mobile/Css/ObjetFenetre_Mobile.css');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const IEHtml_Chips_1 = require('@cp/Produit/Script/IEHtml.Chips');
    const IconeSvgFiche_cours_partage_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFiche_cours_partage');
    const ObjetVignette_css_1 = require('@cp/Espace/Css/ObjetVignette.css');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    class ObjetFenetre_DetailAgenda extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        var _a, _b, _c, _d;
        var _e, _f;
        super(...aParams);
        this.droits = {
          publicationPageEtab:
            (_e =
              (_b =
                (_a = (0, AccessApp_1.getApp)()) === null || _a === void 0
                  ? void 0
                  : _a.droits) === null || _b === void 0
                ? void 0
                : _b.get(
                    ObjetDroitsPN_1.TypeDroits.communication
                      .avecPublicationPageEtablissement,
                  )) !== null && _e !== void 0
              ? _e
              : false,
          saisie:
            (_f =
              (_d =
                (_c = (0, AccessApp_1.getApp)()) === null || _c === void 0
                  ? void 0
                  : _c.droits) === null || _d === void 0
                ? void 0
                : _d.get(
                    ObjetDroitsPN_1.TypeDroits.agenda.avecSaisieAgenda,
                  )) !== null && _f !== void 0
              ? _f
              : false,
        };
        this.option = { avecBoutonActions: false };
        this.setOptionsFenetre({
          avecComposeBasInFooter: true,
          titre: () => {
            return this.donnees
              ? `<span class="titreDetailAgenda" style="border-left-color:${this.donnees.CouleurCellule ? this.donnees.CouleurCellule : ''} ">${this.donnees.getLibelle()}</span>`
              : '';
          },
        });
      }
      jsxIfAvecPublicationPageEtablissement() {
        if (
          this.droits.publicationPageEtab &&
          !!this.donnees &&
          this.donnees.publicationPageEtablissement &&
          this.donnees.publie &&
          this.droits.saisie &&
          (this.donnees.getGenre() ===
            TypeGenreEvenementAgenda_1.TypeGenreEvenementAgenda.tgea_Standard ||
            this.donnees.getGenre() ===
              TypeGenreEvenementAgenda_1.TypeGenreEvenementAgenda
                .tgea_StandardPeriodique)
        ) {
          return true;
        }
        return false;
      }
      setOptions(aOptions) {
        Object.assign(this.option, aOptions);
        return this;
      }
      setDonnees(aDonnees) {
        this.donnees = aDonnees.detail;
        this.afficher(this.composeContenu());
        if (!!aDonnees.evenementAgenda) {
          this.evenementAgenda = aDonnees.evenementAgenda;
        }
      }
      jsxGetClassEvenementPeriodique() {
        if (!this.donnees) {
          return '';
        }
        const lClass = [];
        lClass.push('ie-sous-titre');
        if (this.donnees.periodicite && !this.donnees.periodicite.estEvtPerso) {
          lClass.push('icons', 'iconic', 'icon_refresh');
        }
        return lClass.join(' ');
      }
      jsxIfEstPublie() {
        return !!this.donnees && this.donnees.publie && this.droits.saisie;
      }
      jsxGetHtmlDate() {
        let lStrDates = '';
        const lEstPasEventPerso = !(
          this.donnees &&
          this.donnees.periodicite &&
          this.donnees.periodicite.estEvtPerso
        );
        if (
          !!this.donnees &&
          lEstPasEventPerso &&
          this.donnees.DateDebut &&
          this.donnees.DateFin
        ) {
          lStrDates = ObjetDate_1.GDate.strDates(
            this.donnees.DateDebut,
            this.donnees.DateFin,
            { sansHoraire: this.donnees.sansHoraire },
          );
        }
        return lStrDates;
      }
      jsxGetHtmlListeAccompagnant() {
        return UtilitaireAgenda_2.UtilitaireAgenda.composeListeAccompagnant(
          this.donnees,
        );
      }
      jsxGetHtmlCommentaire() {
        let lCommentaire =
          !!this.donnees &&
          !!this.donnees.Commentaire &&
          this.donnees.Commentaire.length > 0
            ? this.donnees.Commentaire
            : '';
        if (ObjetChaine_1.GChaine.contientAuMoinsUneURL(lCommentaire)) {
          lCommentaire = ObjetChaine_1.GChaine.ajouterLiensURL(lCommentaire);
        }
        return ObjetChaine_1.GChaine.replaceRCToHTML(lCommentaire);
      }
      jsxIfAffichageNature() {
        return (
          !!this.donnees &&
          this.donnees.Genre ===
            TypeGenreEvenementAgenda_1.TypeGenreEvenementAgenda.tgea_JourFerie
        );
      }
      jsxGetHtmlPeriodique() {
        let lStr = '';
        if (
          this.donnees &&
          !!this.donnees.periodicite &&
          this.donnees.estPeriodique
        ) {
          if (this.donnees.periodicite.estEvtPerso) {
            let lChaine =
              (this.donnees.DateDebut &&
                this.donnees.DateFin &&
                ObjetDate_1.GDate.strDates(
                  this.donnees.DateDebut,
                  this.donnees.DateFin,
                  { sansHoraire: this.donnees.sansHoraire },
                ).trim()) ||
              '';
            lStr = `${lChaine} - ${IE.jsx.str('i', { role: 'presentation', class: 'icons icon_refresh' })} ${'Événement périodique modifié'}`;
          } else {
            lStr = this.donnees.periodicite.libelleDescription;
          }
        }
        return lStr;
      }
      jsxIfEstPeriodique() {
        let lEstPeriodicite = false;
        if (!!this.donnees && this.donnees.estPeriodique) {
          lEstPeriodicite = true;
        }
        return lEstPeriodicite;
      }
      jsxGetHtmlAuteur() {
        let lStrAuteur = '';
        if (!!this.donnees && !!this.donnees.strAuteur) {
          lStrAuteur = this.donnees.strAuteur;
        }
        return lStrAuteur;
      }
      jsxIfAvecAuteur() {
        let lAuteur = false;
        if (!!this.donnees && !!this.donnees.strAuteur) {
          lAuteur = true;
        }
        return lAuteur;
      }
      jsxIfAvecConseilDeClasse() {
        if (!!this.donnees && this.donnees.estConseilClasse) {
          return this.donnees.estConseilClasse;
        }
        return false;
      }
      jsxIfSansConseilDeClasse() {
        return !this.jsxIfAvecConseilDeClasse();
      }
      jsxGetHtmlConseilDeClasse() {
        return this.donnees && this.donnees.estConseilClasse
          ? this._composeConseilClasse(this.donnees)
          : '';
      }
      jsxAvecLieu() {
        return !!this.donnees && !!this.donnees.lieu;
      }
      jsxGetHtmlLieu() {
        return this.donnees && this.donnees.lieu
          ? 'Lieu' +
              ' : ' +
              this.donnees.lieu.getLibelle()
          : '';
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
              ie_html: this.jsxGetHtmlDate.bind(this),
              class: 'capitalize ie-sous-titre',
            }),
            IE.jsx.str(
              'div',
              {
                ie_if: this.jsxIfAffichageNature.bind(this),
                class: 'ie-sous-titre',
              },
              'Vacances ou jours fériés',
            ),
            IE.jsx.str('div', {
              ie_if: this.jsxAvecLieu.bind(this),
              ie_html: this.jsxGetHtmlLieu.bind(this),
              class: 'ie-sous-titre',
            }),
            IE.jsx.str('div', {
              ie_html: this.jsxGetHtmlListeAccompagnant.bind(this),
            }),
            IE.jsx.str(
              'div',
              {
                ie_if: this.jsxIfAvecPublicationPageEtablissement.bind(this),
                class: 'ie-sous-titre icons iconic icon_ecole',
              },
              'Publié sur la page établissement / écrans partenaires',
            ),
            IE.jsx.str('div', {
              ie_html: this.jsxGetHtmlPeriodique.bind(this),
              title: 'Evènement périodique',
              ie_if: this.jsxIfEstPeriodique.bind(this),
              ie_class: this.jsxGetClassEvenementPeriodique.bind(this),
            }),
            IE.jsx.str('div', {
              ie_html: this.jsxGetHtmlAuteur.bind(this),
              ie_if: this.jsxIfAvecAuteur.bind(this),
              class: 'ie-sous-titre',
            }),
            IE.jsx.str(
              IEHtml_Chips_1.ChipsEtiquette,
              {
                ie_if: this.jsxIfEstPublie.bind(this),
                class: [
                  ObjetVignette_css_1.SObjetVignette.etiquette,
                  Divers_css_1.SD.mY,
                ],
                svg: IE.jsx.str(
                  IconeSvgFiche_cours_partage_1.IconeSvgFiche_cours_partage,
                  null,
                ),
                ie_tooltipdescribe: 'Évènement partagé',
              },
              'Partagé',
            ),
          ),
          IE.jsx.str('div', {
            ie_html: this.jsxGetHtmlCommentaire.bind(this),
            ie_if: this.jsxIfSansConseilDeClasse.bind(this),
            class: 'm-top-l',
          }),
          IE.jsx.str('div', {
            ie_html: this.jsxGetHtmlConseilDeClasse.bind(this),
            ie_if: this.jsxIfAvecConseilDeClasse.bind(this),
            class: 'm-top-l commentaire',
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
                      UtilitaireUrl_1.UtilitaireUrl.composerUrlLienExterne({
                        documentJoint: aDocumentJoint,
                        genreRessource:
                          Enumere_Ressource_1.TypeHttpRessource
                            .HttpRessource_DocJointEtablissement,
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
      jsxIfEstDuplicable() {
        return (
          this.droits.saisie &&
          !!this.donnees &&
          !!this.donnees.proprietaire &&
          !this.donnees.estPeriodique
        );
      }
      jsxIfEstEditable() {
        return (
          this.droits.saisie && !!this.donnees && !!this.donnees.proprietaire
        );
      }
      jsxModelBoutonAction(aGenre) {
        return {
          event: () => {
            if (!!this.evenementAgenda && this.donnees) {
              this.evenementAgenda({
                article: this.donnees,
                genreEvenement: aGenre,
              });
              this.fermer();
            }
          },
          getDisabled: () => {
            return false;
          },
        };
      }
      composeBas() {
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          this.option.avecBoutonActions &&
            IE.jsx.str(
              'section',
              {
                class: [
                  ObjetFenetre_Mobile_css_1.SObjetFenetre_Mobile.composeBas,
                  Divers_css_1.SD.displayFlex,
                  Divers_css_1.SD.flexGap,
                ],
              },
              IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                title: 'Dupliquer',
                class: 'icon_dupliquer avecFond i-medium',
                ie_model: this.jsxModelBoutonAction.bind(
                  this,
                  UtilitaireAgenda_1.ActionsAgenda.Dupliquer,
                ),
                ie_if: this.jsxIfEstDuplicable.bind(this),
              }),
              IE.jsx.str(IEHtml_BtnImage_1.BtnIcon, {
                title: GlossaireCP_1.TradGlossaireCP.Supprimer,
                class: 'icon_trash avecFond i-medium',
                ie_model: this.jsxModelBoutonAction.bind(
                  this,
                  UtilitaireAgenda_1.ActionsAgenda.Supprimer,
                ),
                ie_if: this.jsxIfEstEditable.bind(this),
              }),
              IE.jsx.str(
                IEHtml_Bouton_1.Bouton,
                {
                  ie_model: this.jsxModelBoutonAction.bind(
                    this,
                    UtilitaireAgenda_1.ActionsAgenda.Modifier,
                  ),
                  ie_if: this.jsxIfEstEditable.bind(this),
                },
                GlossaireCP_1.TradGlossaireCP.Modifier,
              ),
            ),
        );
      }
      _composeConseilClasse(aEvenement) {
        return UtilitaireAgenda_2.UtilitaireAgenda.composeConseilClasse(
          aEvenement,
        );
      }
    }
    exports.ObjetFenetre_DetailAgenda = ObjetFenetre_DetailAgenda;
  },
  fn: 'objetfenetre_detailagenda.js',
});