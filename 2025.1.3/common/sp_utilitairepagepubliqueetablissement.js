IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitairePagePubliqueEtablissement = void 0;
    require('UtilitairePagePubliqueEtablissement.css');
    require('pages_connexion.css');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const UtilitaireMenuContextuelNatif_1 = require('UtilitaireMenuContextuelNatif');
    const UtilitaireRedirection_1 = require('UtilitaireRedirection');
    const Enumere_Widget_1 = require('Enumere_Widget');
    const MultipleWidgetMenu = require('WidgetMenu');
    const WidgetLienUtile_1 = require('WidgetLienUtile');
    const WidgetAgenda_1 = require('WidgetAgenda');
    const WidgetActualites_1 = require('WidgetActualites');
    const WidgetEdito_1 = require('WidgetEdito');
    const GUID_1 = require('GUID');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const UtilitaireWidget_1 = require('UtilitaireWidget');
    const ObjetDate_1 = require('ObjetDate');
    const ObjetCycles_1 = require('ObjetCycles');
    const ObjetDeserialiser_1 = require('ObjetDeserialiser');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetRequeteMentionsLegales_1 = require('ObjetRequeteMentionsLegales');
    const ObjetFenetre_MentionsLegales_1 = require('ObjetFenetre_MentionsLegales');
    const ObjetGalerieCarrousel_1 = require('ObjetGalerieCarrousel');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetChaine_1 = require('ObjetChaine');
    const Invocateur_1 = require('Invocateur');
    const ThemesCouleurs_1 = require('ThemesCouleurs');
    const Enumere_EvenementObjetSaisie_1 = require('Enumere_EvenementObjetSaisie');
    const Enumere_EvenementWidget_1 = require('Enumere_EvenementWidget');
    const LocalStorage_1 = require('LocalStorage');
    const TypeGenreMiniature_1 = require('TypeGenreMiniature');
    const ObjetFicheEtablissement_1 = require('ObjetFicheEtablissement');
    const ObjetRequetePagePubliqueEtablissement_1 = require('ObjetRequetePagePubliqueEtablissement');
    const lCookieLocalStorage = 'etatAffichageCookiesInfo';
    var GenreCommandeRS;
    (function (GenreCommandeRS) {
      GenreCommandeRS[(GenreCommandeRS['twitter'] = 1)] = 'twitter';
      GenreCommandeRS[(GenreCommandeRS['facebook'] = 2)] = 'facebook';
      GenreCommandeRS[(GenreCommandeRS['youtube'] = 3)] = 'youtube';
      GenreCommandeRS[(GenreCommandeRS['instagram'] = 4)] = 'instagram';
    })(GenreCommandeRS || (GenreCommandeRS = {}));
    class UtilitairePagePubliqueEtablissement {
      constructor(aOptions) {
        this.options = aOptions;
      }
      getControleur(aInstance) {
        const lControleur = {
          getVisibiliteGaleriePhotos: function () {
            return (
              aInstance.parametres.avecGaleriePhotos === true &&
              aInstance.parametres.listePhotosGalerie !== null &&
              aInstance.parametres.listePhotosGalerie !== undefined &&
              aInstance.parametres.listePhotosGalerie.count() > 0
            );
          },
          getVisibiliteSiteWeb: function () {
            return (
              aInstance.parametres.avecSiteWeb === true &&
              aInstance.parametres.SiteInternet !== ''
            );
          },
          getVisibiliteContact: function () {
            return (
              aInstance.parametres.avecContact === true &&
              aInstance.parametres.listeInformationsEtablissements !== null &&
              aInstance.parametres.listeInformationsEtablissements !== undefined
            );
          },
          getNodeContact: function () {
            $(this.node).on({
              click: function () {
                ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
                  ObjetFicheEtablissement_1.ObjetFicheEtablissement,
                  { pere: aInstance },
                  { callbackFermer: function () {} },
                ).setDonnees({
                  estSurMobile: aInstance.options.estSurMobile,
                  listeInformationsEtablissements:
                    aInstance.parametres.listeInformationsEtablissements,
                  estEspaceAvecMembre: false,
                  avecReglementAAccepter: false,
                });
              },
            });
          },
          getVisibiliteMentionsLegales: function () {
            return aInstance.parametres.avecMentionsLegales === true;
          },
          getNodeMentionsLegales: function () {
            $(this.node).on({
              click: function () {
                return new ObjetRequeteMentionsLegales_1.ObjetRequeteMentionsLegales(
                  aInstance,
                )
                  .lancerRequete()
                  .then((aParams) => {
                    let lFenetreMentionsLegales =
                      ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
                        ObjetFenetre_MentionsLegales_1.ObjetFenetre_MentionsLegales,
                        { pere: aInstance, initialiser: function () {} },
                      );
                    lFenetreMentionsLegales.setOptionsFenetre({
                      titre: ObjetTraduction_1.GTraductions.getValeur(
                        'pagePubliqueEtab.mentionsLegales',
                      ),
                    });
                    lFenetreMentionsLegales.setDonnees(aParams);
                  });
              },
            });
          },
          btnFermer: function () {
            $(this.node).eventValidation(function () {
              let lGenreEspace =
                global.GEtatUtilisateur !== undefined
                  ? '_' + GEtatUtilisateur.GenreEspace
                  : '';
              LocalStorage_1.IELocalStorage.setItem(
                lCookieLocalStorage + lGenreEspace,
                false,
              );
              $(this).parent().hide();
            });
          },
          getVisibiliteReseauxSociaux: function () {
            return (
              aInstance.parametres.avecReseauxSociaux === true &&
              (aInstance.parametres.avecFacebook ||
                aInstance.parametres.avecTwitter ||
                aInstance.parametres.avecInstagram ||
                aInstance.parametres.avecYouTube)
            );
          },
          btnReseauxSociaux: {
            event: function (aGenre) {
              switch (aGenre) {
                case GenreCommandeRS.twitter:
                  if (aInstance.parametres.urlTwitter !== '') {
                    window.open(aInstance.parametres.urlTwitter);
                  }
                  break;
                case GenreCommandeRS.facebook:
                  if (aInstance.parametres.urlFacebook !== '') {
                    window.open(aInstance.parametres.urlFacebook);
                  }
                  break;
                case GenreCommandeRS.instagram:
                  if (aInstance.parametres.urlInstagram !== '') {
                    window.open(aInstance.parametres.urlInstagram);
                  }
                  break;
                case GenreCommandeRS.youtube:
                  if (aInstance.parametres.urlYoutube !== '') {
                    window.open(aInstance.parametres.urlYoutube);
                  }
                  break;
              }
            },
          },
          btnAccesEspaces: {
            getDisabled: function () {
              return false;
            },
            event: function () {
              aInstance._evntBtnAccesEspace();
            },
          },
          comboAccesEspaces: {
            init: function (aCombo) {
              const lNomApp = aInstance.options.estPrimaire
                ? 'PRONOTE PRIMAIRE'
                : 'PRONOTE';
              aCombo.setOptionsObjetSaisie({
                longueur: aInstance.options.estPrimaire ? 320 : 260,
                labelWAICellule: ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.accederEspace',
                  [lNomApp],
                ),
                placeHolder: ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.accederEspace',
                  ['<span class="nomApp">' + lNomApp + '</span>'],
                ),
              });
            },
            getDonnees: function () {
              let lListeEspaces = aInstance.parametres.espaces;
              if (lListeEspaces !== null && lListeEspaces !== undefined) {
                return lListeEspaces;
              }
            },
            event: function (aParametres) {
              if (
                aParametres.genreEvenement ===
                  Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                    .selection &&
                !!aParametres.element
              ) {
                let lEspace = aParametres.element;
                window.location.assign(
                  aInstance._getURLRacine() +
                    lEspace.url +
                    new UtilitaireRedirection_1.UtilitaireRedirection().getParametresUrl(),
                );
              }
            },
          },
          getWidthTitle: function () {
            let widthWrapper = $(this.node).innerWidth();
            let widthTitre = $(this.node)
              .find('section.identiteEtab')
              .innerWidth();
            let widthBouton = $(this.node)
              .find('section.accesEspaces')
              .innerWidth();
            return widthTitre + widthBouton > widthWrapper
              ? $(this.node).addClass('centered')
              : '';
          },
        };
        return lControleur;
      }
      construire(aParam, aDonneesRequete) {
        this.controleur = this.getControleur(this);
        this.parametres = Object.assign(
          {
            id: '',
            avecLiensUtilesFavoris: false,
            avecBanniere: false,
            avecEdito: false,
            avecInformations: false,
            avecAgenda: false,
            avecLiensUtiles: false,
            avecMenuCantine: false,
            avecGaleriePhotos: false,
            avecSiteWeb: false,
            avecContact: false,
            avecReseauxSociaux: false,
            avecTwitter: false,
            urlTwitter: '',
            avecFacebook: false,
            urlFacebook: '',
            avecYouTube: false,
            urlYoutube: '',
            avecInstagram: false,
            urlInstagram: '',
            NomEtablissementConnexion: '',
            urlLogo: null,
            espaces: null,
          },
          aParam,
        );
        this.donneesRequete = aDonneesRequete;
        if (this.parametres.agenda) {
          this.parametres.agenda.listeEvenements =
            new ObjetDeserialiser_1.ObjetDeserialiser().getListeEvenements(
              this.parametres.agenda.listeEvenements,
              true,
            );
        }
        if (
          this.parametres.actualites &&
          this.parametres.actualites.listeModesAff
        ) {
          this.parametres.actualites.tabModeAff =
            this.parametres.actualites.listeModesAff;
        }
        this.widgets = this.declarerWidgets();
        this.instancesWidgets = [];
        this.instancierWidgets();
        if (this.parametres.avecGaleriePhotos) {
          this.identGalerie = ObjetIdentite_1.Identite.creerInstance(
            ObjetGalerieCarrousel_1.ObjetGalerieCarrousel,
            { pere: this },
          );
        }
        ObjetHtml_1.GHtml.setHtml(this.parametres.id, this._construire(), {
          controleur: this.controleur,
        });
        this.options.parametresCommun.setDocumentTitle.call(
          this.parametres,
          ObjetTraduction_1.GTraductions.getValeur(
            'pagePubliqueEtab.titlePage',
          ),
        );
        this.construireHtmlWidgets();
        if (this.parametres.avecGaleriePhotos) {
          this._initCarrousel({
            instance: this.identGalerie,
            listePhotosGalerie: this.parametres.listePhotosGalerie,
          });
        }
        UtilitaireMenuContextuelNatif_1.UtilitaireMenuContextuelNatif.desactiverSurElement(
          $(document),
        );
        if (this.parametres.avecGaleriePhotos) {
          Invocateur_1.Invocateur.abonner(
            Invocateur_1.ObjetInvocateur.events.resizeNavigateur,
            () => {
              this._initCarrousel({
                instance: this.identGalerie,
                listePhotosGalerie: this.parametres.listePhotosGalerie,
              });
            },
            this,
          );
        }
      }
      declarerWidgets() {
        return {
          menuDeLaCantine: {
            nomDonnees: 'menuDeLaCantine',
            genre: Enumere_Widget_1.EGenreWidget.menuDeLaCantine,
            id: GUID_1.GUID.getId(),
            classWidget: MultipleWidgetMenu
              ? MultipleWidgetMenu.WidgetMenu
              : null,
            titre: 'Menu de la cantine',
            hint: 'Le menu du jour',
            message:
              'Aucun menu',
            existeWidget: () => {
              return (
                !this.parametres ||
                (this.parametres.menuDeLaCantine.listeRepas !== null &&
                  this.parametres.menuDeLaCantine.listeRepas !== undefined)
              );
            },
            isCollapsible: false,
          },
          lienUtile: {
            nomDonnees: 'lienUtile',
            genre: Enumere_Widget_1.EGenreWidget.lienUtile,
            id: GUID_1.GUID.getId(),
            classWidget: WidgetLienUtile_1.WidgetLienUtile,
            titre: 'Liens utiles',
            hint: 'Liens utiles',
            message: 'Aucun lien utile',
            existeWidget: () => {
              let lExisteWidget = false;
              if (this.parametres) {
                const lListeLiens = this.parametres.lienUtile
                  ? this.parametres.lienUtile.listeLiens
                  : null;
                if (lListeLiens && lListeLiens.count() > 0) {
                  let lContientAuMoinsUnLienNonFavori = false;
                  lListeLiens.parcourir((aLien) => {
                    if (!aLien.estFavori) {
                      lContientAuMoinsUnLienNonFavori = true;
                      return false;
                    }
                  });
                  if (lContientAuMoinsUnLienNonFavori) {
                    lExisteWidget = true;
                  }
                }
              }
              return lExisteWidget;
            },
            isCollapsible: false,
          },
          agenda: {
            nomDonnees: 'agenda',
            genre: Enumere_Widget_1.EGenreWidget.agenda,
            classWidget: WidgetAgenda_1.WidgetAgenda,
            id: GUID_1.GUID.getId(),
            titre: 'Agenda',
            hint: 'L'agenda des 10 prochains évènements',
            message: 'Aucun évènement à venir',
            existeWidget: () => {
              return (
                !this.parametres || !!this.parametres.agenda.listeEvenements
              );
            },
            isCollapsible: true,
          },
          actualites: {
            nomDonnees: 'actualites',
            genre: Enumere_Widget_1.EGenreWidget.actualites,
            classWidget: WidgetActualites_1.WidgetActualites,
            id: GUID_1.GUID.getId(),
            titre:
              'Informations & Sondages',
            hint: '',
            message: 'Aucune nouvelle information',
            existeWidget: () => {
              return (
                !this.parametres ||
                !this.parametres.actualites ||
                !!(
                  this.parametres.actualites.tabModeAff &&
                  this.parametres.actualites.tabModeAff[0].listeActualites
                )
              );
            },
            isCollapsible: true,
            nbrItemsVisible: IE.estMobile ? 1 : 3,
          },
          edito: {
            nomDonnees: 'edito',
            genre: -100,
            classWidget: WidgetEdito_1.WidgetEdito,
            id: GUID_1.GUID.getId(),
            titre:
              this.parametres && this.parametres.edito
                ? this.parametres.edito.titre
                : '',
            hint: '',
            existeWidget: () => {
              return (
                !this.parametres ||
                !this.parametres.edito ||
                !!(this.parametres.edito.titre && this.parametres.edito.contenu)
              );
            },
            isCollapsible: false,
          },
        };
      }
      instancierWidgets() {
        if (this._estVisibleMenuCantine({ estPublieUniquement: true })) {
          $.extend(
            true,
            this.widgets.menuDeLaCantine,
            this.parametres.menuDeLaCantine,
          );
          this._construireInstanceWidget(this.widgets.menuDeLaCantine);
        }
        if (this._estVisibleLiensUtiles({ estPublieUniquement: true })) {
          $.extend(true, this.widgets.lienUtile, this.parametres.lienUtile);
          this._construireInstanceWidget(this.widgets.lienUtile);
        }
        if (this._estVisibleAgenda({ estPublieUniquement: true })) {
          $.extend(true, this.widgets.agenda, this.parametres.agenda);
          this._construireInstanceWidget(this.widgets.agenda);
        }
        if (this._estVisibleInformations({ estPublieUniquement: true })) {
          $.extend(true, this.widgets.actualites, this.parametres.actualites);
          this._construireInstanceWidget(this.widgets.actualites);
        }
        if (this._estVisibleEdito({ estPublieUniquement: true })) {
          $.extend(true, this.widgets.edito, this.parametres.edito);
          this._construireInstanceWidget(this.widgets.edito);
        }
      }
      construireHtmlWidgets() {
        if (this._estVisibleMenuCantine()) {
          this._construireHtmlWidget(this.widgets.menuDeLaCantine);
        }
        if (this._estVisibleLiensUtiles()) {
          this._construireHtmlWidget(this.widgets.lienUtile);
        }
        if (this._estVisibleAgenda()) {
          this._construireHtmlWidget(this.widgets.agenda);
        }
        if (this._estVisibleInformations()) {
          this._construireHtmlWidget(this.widgets.actualites, {
            estModeSansAuth: true,
          });
        }
        if (this._estVisibleEdito()) {
          this._construireHtmlWidget(this.widgets.edito);
        }
      }
      construireWidget(aWidget) {
        const lInstanceWidget = this.instancesWidgets[aWidget.genre];
        ObjetHtml_1.GHtml.setHtml(
          aWidget.id,
          UtilitaireWidget_1.UtilitaireWidget.composeContenuWidget(aWidget),
          { instance: lInstanceWidget || this },
        );
        UtilitaireWidget_1.UtilitaireWidget.actualiserFooter(aWidget);
        UtilitaireWidget_1.UtilitaireWidget.afficherMasquerListe(aWidget);
      }
      recupererDonneesWidget(aTabWidgets) {
        const lActualiserUniquementWidget =
          aTabWidgets !== null && aTabWidgets !== undefined;
        if (lActualiserUniquementWidget) {
          this.donneesRequete.widgets = aTabWidgets;
        }
        new ObjetRequetePagePubliqueEtablissement_1.ObjetRequetePagePubliqueEtablissement(
          this,
        )
          .lancerRequete(this.donneesRequete)
          .then((aParam) => {
            $.extend(this.parametres, aParam);
            if (lActualiserUniquementWidget) {
              if (
                aTabWidgets.includes(
                  Enumere_Widget_1.EGenreWidget.menuDeLaCantine,
                )
              ) {
                this._actualiserMenuDeLaCantine();
              }
            }
          });
      }
      initGlobales() {
        this._initDatesEtCyclesCasPagePubliqueEtablissement();
      }
      initDonneesRequete() {
        return {
          menuDeLaCantine: {
            date: GApplication.getDateDemo()
              ? GApplication.getDateDemo()
              : this.options.parametresCommun.JourOuvre,
          },
        };
      }
      composeCookiesInfo() {
        const H = [];
        H.push(`<div class="cookies-disclaimer">`);
        H.push(
          `<p>${'Seuls des cookies (ou informations stockées en local) de fonctionnement sont utilisés.'} ${'Pour plus d'informations, voir nos'} <span role="button" tabindex="0" class="as-link" ie-node="getNodeMentionsLegales" aria-haspopup="dialog">${'Mentions légales'}.</span></p>`,
        );
        H.push(
          `<ie-bouton tabindex="0" aria-label="${'Fermer'}" ie-hint="${'Fermer'}" ie-node="btnFermer">${'Fermer'}</ie-bouton>`,
        );
        H.push(`</div>`);
        return H.join('');
      }
      afficherCookieInfo() {
        let lGenreEspace =
          global.GEtatUtilisateur !== undefined
            ? '_' + GEtatUtilisateur.GenreEspace
            : '';
        LocalStorage_1.IELocalStorage.getItem(lCookieLocalStorage) === null
          ? LocalStorage_1.IELocalStorage.setItem(
              lCookieLocalStorage + lGenreEspace,
              true,
            )
          : LocalStorage_1.IELocalStorage.getItem(
              lCookieLocalStorage + lGenreEspace,
            );
        return (
          LocalStorage_1.IELocalStorage.getItem(
            lCookieLocalStorage + lGenreEspace,
          ) === 'true'
        );
      }
      _construireInstanceWidget(aDonneesWidget) {
        if (this.instancesWidgets[aDonneesWidget.genre]) {
          this.instancesWidgets[aDonneesWidget.genre].free();
        }
        try {
          this.instancesWidgets[aDonneesWidget.genre] =
            ObjetIdentite_1.Identite.creerInstance(aDonneesWidget.classWidget, {
              pere: this,
              evenement: this._surEvenementWidget.bind(this),
            });
        } catch (e) {
          this.instancesWidgets[aDonneesWidget.genre] = null;
          console.error(e);
          return '';
        }
        Object.assign(this.instancesWidgets[aDonneesWidget.genre], {
          donneesRequete: this.donneesRequete,
        });
        return '';
      }
      _surEvenementWidget(aGenreWidgetSource, aGenreEvenement) {
        switch (aGenreEvenement) {
          case Enumere_EvenementWidget_1.EGenreEvenementWidget.ActualiserWidget:
            this.recupererDonneesWidget([aGenreWidgetSource]);
            break;
          default:
            break;
        }
      }
      _construireHtmlWidget(aDonneesWidget, aOptionsWidget) {
        try {
          this.instancesWidgets[aDonneesWidget.genre].construire({
            instance: this,
            donnees: aDonneesWidget,
            construireWidget: this.construireWidget.bind(this),
            options: aOptionsWidget,
          });
        } catch (e) {
          console.error(e);
        }
      }
      _actualiserMenuDeLaCantine() {
        this.instancierWidgets();
        this.construireHtmlWidgets();
      }
      _construire() {
        const H = [];
        H.push('<div class="utilPagePubliqueEtab">');
        H.push(this._construireEntete());
        H.push(
          `<div class="tpl-3cols">\n    <div class="tpl-marge"></div>\n      <div class="tpl-main">`,
        );
        H.push(this._construireCorps());
        H.push(
          `</div>\n            <div class="tpl-marge"></div>\n      </div>`,
        );
        H.push(this._construirePied());
        H.push('</div>');
        return H.join('');
      }
      _construireSectionWidget(aParam) {
        const H = [];
        if (aParam.estVisible) {
          H.push(
            '<article class="widget' +
              (!IE.estMobile
                ? ' ' +
                  ThemesCouleurs_1.ThemesCouleurs.getClassThemeCourant() +
                  ' '
                : ' ') +
              aParam.classWidget,
            '">',
          );
          H.push('<header>' + '<h3>' + aParam.titre + '</h3>' + '</header>');
          H.push(
            '<div class="accueil-widget-content" id="' + aParam.id + '"><div>',
          );
          H.push('</article>');
        }
        return H.join('');
      }
      _construireEntete() {
        const H = [];
        H.push(`<header>`);
        H.push(
          `<div class="tpl-3cols">\n              <div class="tpl-marge"></div>\n              <div class="tpl-main">`,
        );
        let lAvecLiensUtiles = this._estVisibleLiensUtilesFavoris();
        H.push(
          `      <div class="bandeauHaut ${lAvecLiensUtiles ? ` avecSeparateur` : ``}" ie-node="getWidthTitle">`,
        );
        H.push(this._construireIdentiteEtablissement());
        H.push(this._construireAccesEspaces());
        H.push(`      </div>`);
        if (lAvecLiensUtiles) {
          H.push(this._construireLiensUtilesFavoris());
        }
        H.push(`  </div>`);
        H.push(`  <div class="tpl-marge"></div>\n            </div>`);
        H.push(this._construireBanniere());
        H.push(`</header>`);
        return H.join('');
      }
      _construireIdentiteEtablissement() {
        const H = [];
        H.push('<section class="identiteEtab">');
        if (this.parametres.urlLogo) {
          H.push(
            '<img src="',
            this.parametres.urlLogo,
            '" alt="',
            'Logo de l'établissement',
            '" />',
          );
        }
        H.push('<h4>' + this.parametres.NomEtablissementConnexion + '</h4>');
        H.push('</section>');
        return H.join('');
      }
      _construireAccesEspaces() {
        const lNomApp = this.options.estPrimaire
          ? 'PRONOTE PRIMAIRE'
          : 'PRONOTE';
        const H = [];
        H.push('<section class="accesEspaces">');
        let lUrlRedirectionChoixEspace = this.parametres.urlConnexionEspaces;
        if (
          lUrlRedirectionChoixEspace !== null &&
          lUrlRedirectionChoixEspace !== undefined
        ) {
          H.push(
            '<ie-bouton class="themeBoutonPrimaire" ie-model="btnAccesEspaces">',
            ObjetTraduction_1.GTraductions.getValeur(
              'pagePubliqueEtab.accederEspace',
              ['<span class="nomApp">' + lNomApp + '</span>'],
            ),
            '</ie-bouton>',
          );
        } else {
          H.push('<ie-combo ie-model="comboAccesEspaces" ></ie-combo>');
        }
        H.push('</section>');
        return H.join('');
      }
      _estVisibleLiensUtilesFavoris() {
        return (
          this.parametres.avecLiensUtilesFavoris &&
          this.parametres.lienUtile.listeLiens &&
          this.parametres.lienUtile.listeLiens.count() > 0 &&
          this.parametres.lienUtile.listeLiens
            .getListeElements((aElement) => {
              return aElement.estFavori === true;
            })
            .count() > 0
        );
      }
      _construireLiensUtilesFavoris() {
        const H = [];
        if (this._estVisibleLiensUtilesFavoris()) {
          H.push('<nav class="liensFavoris">');
          const lListeFavoris =
            this.parametres.lienUtile.listeLiens.getListeElements(
              (aElement) => {
                return aElement.estFavori === true;
              },
            );
          lListeFavoris.parcourir((aLienUtile) => {
            H.push(
              '<ie-chips ie-ellipsis href="',
              ObjetChaine_1.GChaine.verifierURLHttp(aLienUtile.url),
              '" ',
              aLienUtile.commentaire
                ? ' ie-hint="' + aLienUtile.commentaire + '"'
                : '',
              '>',
              aLienUtile.getLibelle(),
              '</ie-chips>',
            );
          });
          H.push('</nav>');
        }
        return H.join('');
      }
      _construireBanniere() {
        const H = [];
        if (this.parametres.avecBanniere) {
          let lUrlBanniere = '';
          if (
            this.parametres.listePhotosBanniere !== null &&
            this.parametres.listePhotosBanniere !== undefined &&
            this.parametres.listePhotosBanniere.count() === 1
          ) {
            lUrlBanniere = ObjetChaine_1.GChaine.creerUrlBruteLienExterne(
              this.parametres.listePhotosBanniere.get(0),
              { genreRessource: null },
            );
          }
          H.push(
            '<div class="banniere ',
            lUrlBanniere === ''
              ? this.options.estPrimaire
                ? 'imgParDefautPrimaire'
                : 'imgParDefaut'
              : '',
            ' " ',
            lUrlBanniere !== ''
              ? `style="background-image: url('${lUrlBanniere}');"`
              : '',
            '>',
          );
          if (this.parametres.texteBanniere !== '') {
            H.push(
              `\n              <div class="text-banniere">\n                <h1>${this.parametres.texteBanniere}</h1>\n              </div>`,
            );
          }
          H.push(`</div>`);
        }
        return H.join('');
      }
      _construireCorps() {
        const H = [];
        let lZonePrincipaleHidden =
          !this.parametres.avecEdito && !this.parametres.avecInformations;
        let lZoneAsideHidden =
          !this.parametres.avecAgenda &&
          !this.parametres.avecLiensUtiles &&
          !this.parametres.avecMenuCantine;
        H.push(
          `<section class="corps${lZonePrincipaleHidden ? ` no-zone-principale` : ''}${lZoneAsideHidden ? ` no-zone-aside` : ''} ">`,
        );
        if (!lZonePrincipaleHidden) {
          H.push('<div class="zonePrincipale">');
          H.push(this._construireEdito());
          H.push(this._construireInformations());
          H.push('</div>');
        }
        if (!lZoneAsideHidden) {
          H.push('<div class="zoneAside">');
          H.push(this._construireAgenda());
          H.push(this._construireLiensUtiles());
          H.push(this._construireMenuCantine());
          H.push('</div>');
        }
        H.push('<div class="zoneFooter">');
        H.push(this._construireGaleriePhotos());
        H.push('</div>');
        H.push(`     </section>`);
        return H.join('');
      }
      _construireEdito() {
        return this._construireSectionWidget({
          estVisible: this._estVisibleEdito(),
          classWidget: 'edito',
          titre:
            this.parametres && this.parametres.edito
              ? this.parametres.edito.titre
              : ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.edito',
                ),
          id: this.widgets.edito.id,
        });
      }
      _estVisibleSectionWidget(aParam, aParamWidget) {
        const lEstPublie = aParamWidget.estPublie;
        if ((aParam && aParam.estPublieUniquement === true) || !lEstPublie) {
          return lEstPublie;
        }
        const lExisteDonnees =
          aParamWidget.data && aParamWidget.data.existeWidget.call(this);
        return lEstPublie && lExisteDonnees;
      }
      _estVisibleEdito(aParam) {
        return this._estVisibleSectionWidget(aParam, {
          estPublie: this.parametres.avecEdito === true,
          data: this.widgets.edito,
        });
      }
      _estVisibleInformations(aParam) {
        return this._estVisibleSectionWidget(aParam, {
          estPublie: this.parametres.avecInformations === true,
          data: this.widgets.actualites,
        });
      }
      _construireInformations() {
        return this._construireSectionWidget({
          estVisible: this._estVisibleInformations(),
          classWidget: 'actualites',
          titre: ObjetTraduction_1.GTraductions.getValeur(
            'pagePubliqueEtab.informations',
          ),
          id: this.widgets.actualites.id,
        });
      }
      _estVisibleAgenda(aParam) {
        return this._estVisibleSectionWidget(aParam, {
          estPublie: this.parametres.avecAgenda === true,
          data: this.widgets.agenda,
        });
      }
      _construireAgenda() {
        return this._construireSectionWidget({
          estVisible: this._estVisibleAgenda(),
          classWidget: 'agenda fluid-mobile',
          titre: 'Agenda',
          id: this.widgets.agenda.id,
        });
      }
      _estVisibleLiensUtiles(aParam) {
        return this._estVisibleSectionWidget(aParam, {
          estPublie: this.parametres.avecLiensUtiles === true,
          data: this.widgets.lienUtile,
        });
      }
      _construireLiensUtiles() {
        return this._construireSectionWidget({
          estVisible: this._estVisibleLiensUtiles(),
          classWidget: 'lienutile fluid-mobile',
          titre: 'Liens utiles',
          id: this.widgets.lienUtile.id,
        });
      }
      _estVisibleMenuCantine(aParam) {
        return this._estVisibleSectionWidget(aParam, {
          estPublie: this.parametres.avecMenuCantine === true,
          data: this.widgets.menuDeLaCantine,
        });
      }
      _construireMenuCantine() {
        return this._construireSectionWidget({
          estVisible: this._estVisibleMenuCantine(),
          classWidget: 'menudelacantine fluid-mobile',
          titre: 'Menu de la cantine',
          id: this.widgets.menuDeLaCantine.id,
        });
      }
      _construireGaleriePhotos() {
        const H = [];
        if (this.parametres.avecGaleriePhotos) {
          H.push(
            '<article class="widget ' +
              ThemesCouleurs_1.ThemesCouleurs.getClassThemeCourant() +
              ' galerie" ie-display="getVisibiliteGaleriePhotos">',
          );
          H.push(
            '<header>' +
              '<h3>' +
              ObjetTraduction_1.GTraductions.getValeur(
                'pagePubliqueEtab.galeriePhotos',
              ) +
              '</h3>' +
              '</header>',
          );
          H.push(
            '<div id="',
            this.identGalerie.getNom(),
            '" class="accueil-widget-content" ></div>',
          );
          H.push('</article>');
        }
        return H.join('');
      }
      _initCarrousel(aParams) {
        aParams.instance.setOptions({
          dimensionPhoto: 300,
          nbMaxDiaposEnZoneVisible: 4,
          avecSuppression: false,
          avecEditionLegende: false,
          afficherNomFichierSiLibelleVide: false,
          altImage: ObjetTraduction_1.GTraductions.getValeur(
            'pagePubliqueEtab.altImgViewer',
          ),
        });
        const lListeImages = aParams.listePhotosGalerie;
        const lListeDiapos = new ObjetListeElements_1.ObjetListeElements();
        lListeImages.parcourir((aImgPE) => {
          let lDiapo = new ObjetElement_1.ObjetElement();
          lDiapo.setLibelle(aImgPE.descriptif);
          aImgPE.miniature = TypeGenreMiniature_1.TypeGenreMiniature.GM_600;
          lDiapo.documentCasier = aImgPE;
          lListeDiapos.add(lDiapo);
        });
        aParams.instance.initialiser();
        aParams.instance.setDonnees({
          listeDiapos: lListeDiapos,
          ressourceDocJoint: null,
        });
      }
      _construirePied() {
        const H = [];
        if (this.afficherCookieInfo() && !GApplication.getDemo()) {
          H.push(this.composeCookiesInfo());
        }
        H.push('<footer>');
        H.push(this._construireLiensFooter());
        H.push(this._construireCopyright());
        H.push('</footer>');
        return H.join('');
      }
      _construireLiensFooter() {
        const H = [];
        let lLFooterEstVide =
          !this.parametres.avecContact &&
          (this.parametres.listeInformationsEtablissements === null ||
            this.parametres.listeInformationsEtablissements === undefined) &&
          !this.parametres.avecMentionsLegales &&
          (!this.parametres.avecSiteWeb ||
            this.parametres.SiteInternet === '') &&
          !this.parametres.avecTwitter &&
          !this.parametres.avecFacebook &&
          !this.parametres.avecYouTube &&
          !this.parametres.avecInstagram;
        H.push(
          '<div class="liensFooter',
          lLFooterEstVide ? ' est-vide' : '',
          '">',
          '<nav class="liensInfosEtab">',
        );
        if (
          this.parametres.avecSiteWeb &&
          this.parametres.SiteInternet !== ''
        ) {
          H.push(
            '<div ie-display="getVisibiliteSiteWeb" class="lien"><a href="',
            this.parametres.SiteInternet,
            '">',
            ObjetTraduction_1.GTraductions.getValeur(
              'pagePubliqueEtab.siteWeb',
            ),
            '</a></div>',
          );
        }
        if (
          this.parametres.avecContact &&
          this.parametres.listeInformationsEtablissements !== null &&
          this.parametres.listeInformationsEtablissements !== undefined
        ) {
          H.push(
            '<div role="link" ie-node="getNodeContact" tabindex="0" ie-display="getVisibiliteContact" class="lien">',
            ObjetTraduction_1.GTraductions.getValeur(
              'pagePubliqueEtab.contact',
            ),
            '</div>',
          );
        }
        if (this.parametres.avecMentionsLegales) {
          H.push(
            '<div role="link" ie-node="getNodeMentionsLegales" tabindex="0" ie-display="getVisibiliteMentionsLegales" class="lien">',
            ObjetTraduction_1.GTraductions.getValeur(
              'pagePubliqueEtab.mentionsLegales',
            ),
            '</div>',
          );
        }
        H.push('</nav>');
        H.push(
          '<div class="liensReseauxSoc" ie-display="getVisibiliteReseauxSociaux">',
        );
        if (this.parametres.avecTwitter) {
          H.push(
            '<ie-btnimage ie-model="btnReseauxSociaux(' +
              GenreCommandeRS.twitter +
              ')" class="icon_twitter btnImageIcon ibp-command" title="' +
              ObjetTraduction_1.GTraductions.getValeur(
                'pagePubliqueEtab.twitter',
              ) +
              '">' +
              '</ie-btnimage>',
          );
        }
        if (this.parametres.avecFacebook) {
          H.push(
            '<ie-btnimage ie-model="btnReseauxSociaux(' +
              GenreCommandeRS.facebook +
              ')" class="icon_facebook btnImageIcon ibp-command" title="' +
              ObjetTraduction_1.GTraductions.getValeur(
                'pagePubliqueEtab.facebook',
              ) +
              '">' +
              '</ie-btnimage>',
          );
        }
        if (this.parametres.avecYouTube) {
          H.push(
            '<ie-btnimage ie-model="btnReseauxSociaux(' +
              GenreCommandeRS.youtube +
              ')" class="icon_youtube btnImageIcon ibp-command" title="' +
              ObjetTraduction_1.GTraductions.getValeur(
                'pagePubliqueEtab.youtube',
              ) +
              '">' +
              '</ie-btnimage>',
          );
        }
        if (this.parametres.avecInstagram) {
          H.push(
            '<ie-btnimage ie-model="btnReseauxSociaux(' +
              GenreCommandeRS.instagram +
              ')" class="icon_instagram btnImageIcon ibp-command" title="' +
              ObjetTraduction_1.GTraductions.getValeur(
                'pagePubliqueEtab.instagram',
              ) +
              '">' +
              '</ie-btnimage>',
          );
        }
        H.push('</div>');
        H.push('</div>');
        return H.join('');
      }
      _construireCopyright() {
        const H = [];
        H.push('<section class="copyright">');
        if (this.parametres.estHebergeEnFrance) {
          H.push(
            '<div tabindex="0" role="link" class="host-france-container" onclick="window.open (\'',
            this.parametres.urlSiteInfosHebergement,
            '\');" onkeyup="if(GNavigateur.isToucheSelection())window.open (\'',
            this.parametres.urlSiteInfosHebergement,
            '\');">',
            '<span class="host-text">',
            ObjetTraduction_1.GTraductions.getValeur(
              'pagePubliqueEtab.hebergementDonneesFrance',
            ),
            '</span>',
            '<div class="logo-index-contain"><span class="logo-index-inverse"></span></div>',
            this._espacesISO27001()
              ? '<span class="certif-27001">' +
                  ObjetTraduction_1.GTraductions.getValeur(
                    'pagePubliqueEtab.certifISO27001',
                  ) +
                  '</span>'
              : '',
            '</div>',
          );
        }
        H.push(
          '<span tabindex="0" role="link" onclick="window.open (\'',
          this.parametres.urlSiteIndexEducation,
          '\');" onkeyup="if(GNavigateur.isToucheSelection())window.open (\'',
          this.parametres.urlSiteIndexEducation,
          '\');">',
          ObjetTraduction_1.GTraductions.getValeur(
            'pagePubliqueEtab.copyright',
            [this.parametres.millesime],
          ),
          '</span>',
        );
        H.push('</section>');
        return H.join('');
      }
      _espacesISO27001() {
        return !this.options.estPrimaire;
      }
      _getURLRacine() {
        const lUrl = window.location.href.split('/');
        lUrl.pop();
        return lUrl.join('/') + '/';
      }
      _evntBtnAccesEspace() {
        const lUrlRel = this.parametres.urlConnexionEspaces;
        if (lUrlRel !== null && lUrlRel !== undefined) {
          let lUrl =
            this._getURLRacine() +
            lUrlRel +
            new UtilitaireRedirection_1.UtilitaireRedirection().getParametresUrl();
          window.location.assign(lUrl);
        }
      }
      _initDatesEtCyclesCasPagePubliqueEtablissement() {
        ObjetDate_1.GDate.setDonnees(
          this.options.parametresCommun.PremierLundi,
          this.options.parametresCommun.PremiereDate,
          this.options.parametresCommun.DerniereDate,
          null,
          null,
          null,
          null,
          null,
          null,
          this.options.parametresCommun.JoursOuvres,
        );
        IE.Cycles = new ObjetCycles_1.ObjetCycles();
        IE.Cycles.init({
          premiereDate: this.options.parametresCommun.PremiereDate,
          derniereDate: this.options.parametresCommun.DerniereDate,
          joursOuvresParCycle:
            this.options.parametresCommun.joursDemiPension.count(),
          joursOuvres: this.options.parametresCommun.joursDemiPension,
        });
      }
    }
    exports.UtilitairePagePubliqueEtablissement =
      UtilitairePagePubliqueEtablissement;
  },
  fn: 'utilitairepagepubliqueetablissement.js',
});