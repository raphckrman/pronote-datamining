IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.WidgetActualites = void 0;
    const Enumere_TriElement_1 = require('@cp/script/Enumere/Enumere_TriElement');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const UtilitaireInformations_1 = require('@scolys/espace/script/utilitaire/UtilitaireInformations');
    const TypeGenreOngletInternet_1 = require('@scolys/produit/script/enumere/TypeGenreOngletInternet');
    const TypeEtatPublication_1 = require('@scolys/produit/script/enumere/TypeEtatPublication');
    const MoteurInfoSondage_1 = require('@cp/Produit/Script/moteur/MoteurInfoSondage');
    const GestionnaireBlocPN_1 = require('@scolys/espace/script/GestionnaireBlocPN');
    const GestionnaireBlocPN_2 = require('@scolys/espace/script/GestionnaireBlocPN');
    const GestionnaireBlocPN_3 = require('@scolys/espace/script/GestionnaireBlocPN');
    const Enumere_EvenementWidget_1 = require('@cp/Produit/Script/Enumere/Enumere_EvenementWidget');
    const ObjetWidget_1 = require('@cp/script/ObjetWidget');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const UtilitaireWidget_1 = require('@cp/Espace/Script/Utilitaire/UtilitaireWidget');
    const IconeSvgDiffuser_information_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_information');
    const IconeSvgDiffuser_sondage_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgDiffuser_sondage');
    class WidgetActualites extends ObjetWidget_1.Widget.ObjetWidget {
      constructor(aParams) {
        super(aParams);
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
            return a.nature ? a.nature.getLibelle() : '';
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
              H.push(this.composeActualite(lElement));
            }
          }
          H.push('</ul></li>');
          H.push('</ul>');
        }
        return H.join('');
      }
      composeActualite(aActualite) {
        const lLabel = aActualite.estInformation
          ? 'Afficher le détail de l'information'
          : 'Afficher le détail du sondage';
        const lTitre =
          aActualite.getLibelle() ||
          'Sans titre';
        const lAriaLabel =
          lLabel +
          (lTitre ? ' : ' + lTitre : '') +
          ('auteur' in aActualite && aActualite.auteur
            ? ', ' +
              'par %s'
            : '');
        const lIcone = aActualite.estInformation
          ? IE.jsx.str(
              IconeSvgDiffuser_information_1.IconeSvgDiffuser_information,
              null,
            )
          : IE.jsx.str(
              IconeSvgDiffuser_sondage_1.IconeSvgDiffuser_sondage,
              null,
            );
        if (this.options.estModeSansAuth) {
          return IE.jsx.str(
            'li',
            null,
            lIcone,
            IE.jsx.str(
              'div',
              { class: 'wrap' },
              IE.jsx.str(
                'div',
                {
                  class: 'titre',
                  role: 'heading',
                  'aria-level': aActualite.pere ? 4 : 3,
                },
                lTitre,
              ),
              'auteur' in aActualite && aActualite.auteur,
              'listeQuestions' in aActualite &&
                aActualite.listeQuestions &&
                IE.jsx.str(
                  'div',
                  { style: 'margin-top:1rem; margin-bottom : 1rem;' },
                  this.moteur.composeComposanteInfoSondage({
                    instance: this,
                    actu: aActualite,
                    composante: aActualite.listeQuestions.get(0),
                    indice: 0,
                    avecLibelleQuestion: false,
                    estAffEditionActualite: false,
                    estModeSansAuth: true,
                  }),
                ),
            ),
          );
        } else {
          return IE.jsx.str(
            UtilitaireWidget_1.LigneWidgetLink,
            {
              ie_tooltipdescribe: lLabel,
              'aria-label': lAriaLabel,
              class: ['full-width', 'flex-contain'],
              iconeSvg: lIcone,
              childrenHorsWrap:
                [
                  Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
                  Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
                ].includes(this.etatUtilisateurSco.GenreEspace) &&
                aActualite.prenom &&
                IE.jsx.str(
                  'div',
                  { class: 'circle', ie_tooltiplabel: aActualite.prenom },
                  aActualite.prenom.substring(0, 1).toUpperCase(),
                ),
              validation: this.surActualite.bind(this, aActualite),
            },
            IE.jsx.str(
              'div',
              {
                class: 'titre',
                role: 'heading',
                'aria-level': aActualite.pere ? 4 : 3,
              },
              lTitre,
            ),
            'auteur' in aActualite && aActualite.auteur,
          );
        }
      }
      surActualite(aActualite) {
        this.etatUtilisateurSco.setInfoSond(aActualite);
        const lGenreOnglet =
          TypeGenreOngletInternet_1.TypeGenreOngletInternet.Onglet_Informations;
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