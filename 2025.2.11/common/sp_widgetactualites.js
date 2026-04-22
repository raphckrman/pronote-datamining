IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.WidgetActualites = void 0;
    const Enumere_TriElement_1 = require('Enumere_TriElement');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    const UtilitaireInformations_1 = require('UtilitaireInformations');
    const Enumere_Onglet_1 = require('Enumere_Onglet');
    const TypeEtatPublication_1 = require('TypeEtatPublication');
    const MoteurInfoSondage_1 = require('MoteurInfoSondage');
    const GestionnaireBlocPN_1 = require('GestionnaireBlocPN');
    const GestionnaireBlocPN_2 = require('GestionnaireBlocPN');
    const GestionnaireBlocPN_3 = require('GestionnaireBlocPN');
    const Enumere_EvenementWidget_1 = require('Enumere_EvenementWidget');
    const ObjetWidget_1 = require('ObjetWidget');
    const AccessApp_1 = require('AccessApp');
    class WidgetActualites extends ObjetWidget_1.Widget.ObjetWidget {
      constructor(...aParams) {
        super(...aParams);
        const lApplicationSco = (0, AccessApp_1.getApp)();
        this.etatUtilisateurSco = lApplicationSco.getEtatUtilisateur();
      }
      construire(aParams) {
        this.donnees = aParams.donnees;
        this.options =
          aParams.options !== null && aParams.options !== undefined
            ? aParams.options
            : { estModeSansAuth: false };
        if (this.options.estModeSansAuth === true) {
          this.moteur = new MoteurInfoSondage_1.MoteurInfoSondage({
            genreRessource: new GestionnaireBlocPN_1.UtilitaireGenreRessource(),
            genreEspace: new GestionnaireBlocPN_2.UtilitaireGenreEspace(),
            genreReponse: new GestionnaireBlocPN_3.UtilitaireGenreReponse(),
          });
        }
        this.listeActualites =
          this.donnees.listeModesAff[
            TypeEtatPublication_1.TypeModeAff.MA_Reception
          ].listeActualites;
        const lNbrElements = this.listeActualites.count();
        const lAvecCumul =
          this.options.estModeSansAuth === true
            ? false
            : UtilitaireInformations_1.TUtilitaireInformations.avecCumul(
                this.listeActualites,
              );
        this.listeActualites.setTri([
          ObjetTri_1.ObjetTri.init((a) => {
            return a.categorie ? a.categorie.getLibelle() : '';
          }),
        ]);
        this.listeActualites.trier();
        if (lAvecCumul) {
          UtilitaireInformations_1.TUtilitaireInformations.formaterListePourCumul(
            this.listeActualites,
          );
        } else {
          this.listeActualites.setTri([
            ObjetTri_1.ObjetTri.init(
              'dateDebut',
              Enumere_TriElement_1.EGenreTriElement.Decroissant,
            ),
            ObjetTri_1.ObjetTri.init(
              'dateCreation',
              Enumere_TriElement_1.EGenreTriElement.Decroissant,
            ),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]);
          this.listeActualites.trier();
        }
        let lNbrListes = 0;
        for (let i = 0, lNbr = this.listeActualites.count(); i < lNbr; i++) {
          if (this.listeActualites.get(i).estUnDeploiement) {
            lNbrListes++;
          }
        }
        const lWidget = {
          getHtml: this.composeWidgetActualites.bind(this),
          nbrElements: lNbrElements,
          nbrListes: lNbrListes,
          liste: this.listeActualites,
          afficherMessage: lNbrElements === 0,
        };
        $.extend(true, aParams.donnees, lWidget);
        aParams.construireWidget(this.donnees);
      }
      composeWidgetActualites() {
        const H = [];
        const lEstModeSansAuth = this.options.estModeSansAuth === true;
        if (this.listeActualites.count() > 0) {
          H.push('<ul class="liste-imbriquee">');
          for (let I = 0; I < this.listeActualites.count(); I++) {
            const lElement = this.listeActualites.get(I);
            lElement.avecReponse = lEstModeSansAuth
              ? false
              : UtilitaireInformations_1.TUtilitaireInformations.avecReponse;
            lElement.aToutRepondu =
              UtilitaireInformations_1.TUtilitaireInformations.aToutRepondu;
            if (lElement.estUnDeploiement) {
              if (I !== 0) {
                H.push('</ul></li>');
              }
              H.push(
                '<li>',
                '<div class="titre-parent Gras" role="heading" aria-level="3">',
                lElement.getLibelle(),
                '</div>',
              );
              H.push('<ul class="liste-clickable">');
            } else {
              if (I === 0) {
                H.push(
                  '<li><ul class="',
                  lEstModeSansAuth ? '' : 'liste-clickable',
                  '">',
                );
              }
              H.push(this.composeActualite(lElement, I));
            }
          }
          H.push('</ul></li>');
          H.push('</ul>');
        }
        return H.join('');
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(this), {
          surActualite(aIndiceActualite) {
            $(this.node).eventValidation(() => {
              aInstance._surActualite(aIndiceActualite);
            });
          },
        });
      }
      composeActualite(aActualite, i) {
        const H = [];
        const lID = this.donnees.id + '_div_' + i;
        const lLabel = aActualite.estInformation
          ? 'Afficher le détail de l'information'
          : 'Afficher le détail du sondage';
        let lTitre = aActualite.getLibelle();
        if (lTitre === null || lTitre === undefined || lTitre === '') {
          lTitre = 'Sans titre';
        }
        const lAriaLabel =
          ' aria-label="' +
          lLabel +
          (lTitre ? ' : ' + lTitre : '') +
          (aActualite.auteur
            ? ', ' +
              'par %s'
            : '') +
          '"';
        const lClass =
          'as-offset ' +
          (aActualite.estInformation
            ? 'icon_diffuser_information'
            : 'icon_diffuser_sondage');
        const lEstModeSansAuth = this.options.estModeSansAuth === true;
        H.push(
          '<li',
          lEstModeSansAuth ? ' class="' + lClass + '"' : '',
          lAriaLabel,
          '>',
        );
        if (lEstModeSansAuth) {
          H.push('<div class="full-width">');
        } else {
          H.push(
            '<a class="wrapper-link ',
            lClass,
            '" tabindex="0" id="',
            lID,
            '"',
            ' data-tooltip data-tooltip-text="' +
              (aActualite.estInformation
                ? 'Afficher le détail de l'information'
                : 'Afficher le détail du sondage') +
              '"',
            ' ie-node="surActualite(',
            i,
            ')"',
            lAriaLabel,
            '>',
          );
        }
        H.push('<div class="wrap">');
        H.push(
          IE.jsx.str(
            'div',
            {
              class: 'titre',
              role: 'heading',
              'aria-level': aActualite.pere ? 4 : 3,
            },
            lTitre,
          ),
          aActualite.auteur ? aActualite.auteur : '',
        );
        H.push('</div>');
        if (
          this.options.estModeSansAuth !== true &&
          (this.etatUtilisateurSco.GenreEspace ===
            Enumere_Espace_1.EGenreEspace.Parent ||
            this.etatUtilisateurSco.GenreEspace ===
              Enumere_Espace_1.EGenreEspace.Mobile_Parent) &&
          aActualite.prenom
        ) {
          H.push(
            '<div class="circle" ie-hint="',
            aActualite.prenom,
            '">' + aActualite.prenom.substring(0, 1).toUpperCase() + '</div>',
          );
        }
        if (lEstModeSansAuth) {
          if (aActualite.listeQuestions) {
            const lComposanteInfo = aActualite.listeQuestions.get(0);
            H.push('<div style="margin-top:1rem; margin-bottom : 1rem;">');
            H.push(
              this.moteur.composeComposanteInfoSondage({
                instance: this,
                actu: aActualite,
                composante: lComposanteInfo,
                indice: 0,
                avecLibelleQuestion: false,
                estAffEditionActualite: false,
                estModeSansAuth: lEstModeSansAuth,
              }),
            );
            H.push('</div>');
          }
          H.push('</div>');
        } else {
          H.push('</a>');
        }
        H.push('</li>');
        return H.join('');
      }
      _surActualite(i) {
        const lActuSelectionne = this.listeActualites.get(i);
        this.etatUtilisateurSco.setInfoSond(lActuSelectionne);
        const lGenreOnglet = Enumere_Onglet_1.EGenreOnglet.Informations;
        let lPageDestination;
        if (this.etatUtilisateurSco.estEspaceMobile()) {
          lPageDestination = { genreOngletDest: lGenreOnglet };
        } else {
          lPageDestination = { Onglet: lGenreOnglet };
        }
        this.callback.appel(
          this.donnees.genre,
          Enumere_EvenementWidget_1.EGenreEvenementWidget.NavigationVersPage,
          lPageDestination,
        );
      }
    }
    exports.WidgetActualites = WidgetActualites;
  },
  fn: 'widgetactualites.js',
});