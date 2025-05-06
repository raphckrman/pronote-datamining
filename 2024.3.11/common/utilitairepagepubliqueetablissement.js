IE.fModule({
  f: function (exports, require, module, global) {
    require('UtilitairePagePubliqueEtablissement.css');
    require('pages_connexion.css');
    const { GHtml } = require('ObjetHtml.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const {
      UtilitaireMenuContextuelNatif,
    } = require('UtilitaireMenuContextuelNatif.js');
    const { UtilitaireRedirection } = require('UtilitaireRedirection.js');
    const { EGenreWidget } = require('Enumere_Widget.js');
    const MultipleWidgetMenu = require('WidgetMenu.js');
    const { WidgetLienUtile } = require('WidgetLienUtile.js');
    const { WidgetAgenda } = require('WidgetAgenda.js');
    const { WidgetActualites } = require('WidgetActualites.js');
    const { WidgetEdito } = require('WidgetEdito.js');
    const { GUID } = require('GUID.js');
    const { Identite } = require('ObjetIdentite.js');
    const { UtilitaireWidget } = require('UtilitaireWidget.js');
    const { Requetes } = require('CollectionRequetes.js');
    const { ObjetRequeteConsultation } = require('ObjetRequeteJSON.js');
    const { GDate } = require('ObjetDate.js');
    const { ObjetCycles } = require('ObjetCycles.js');
    const { ObjetDeserialiser } = require('ObjetDeserialiser.js');
    const { ObjetFenetre } = require('ObjetFenetre.js');
    const {
      ObjetRequeteMentionsLegales,
    } = require('ObjetRequeteMentionsLegales.js');
    const {
      ObjetFenetre_MentionsLegales,
    } = require('ObjetFenetre_MentionsLegales.js');
    const { ObjetGalerieCarrousel } = require('ObjetGalerieCarrousel.js');
    const { ObjetListeElements } = require('ObjetListeElements.js');
    const { ObjetElement } = require('ObjetElement.js');
    const { GChaine } = require('ObjetChaine.js');
    const { ObjetInvocateur, Invocateur } = require('Invocateur.js');
    const { ThemesCouleurs } = require('ThemesCouleurs.js');
    const {
      EGenreEvenementObjetSaisie,
    } = require('Enumere_EvenementObjetSaisie.js');
    const { EGenreEvenementWidget } = require('Enumere_EvenementWidget.js');
    const { IELocalStorage } = require('LocalStorage.js');
    const { TypeGenreMiniature } = require('TypeGenreMiniature.js');
    const { ObjetFicheEtablissement } = require('ObjetFicheEtablissement.js');
    const lCookieLocalStorage = 'etatAffichageCookiesInfo';
    class UtilitairePagePubliqueEtablissement {
      constructor(aOptions) {
        this.options = aOptions;
        this.genreCommandeRS = {
          twitter: 1,
          facebook: 2,
          youtube: 3,
          instagram: 4,
        };
      }
      getControleur(aInstance) {
        const lControleur = {
          getVisibiliteGaleriePhotos: function () {
            return (
              this.parametres.avecGaleriePhotos === true &&
              this.parametres.listePhotosGalerie !== null &&
              this.parametres.listePhotosGalerie !== undefined &&
              this.parametres.listePhotosGalerie.count() > 0
            );
          }.bind(aInstance),
          getVisibiliteSiteWeb: function () {
            return (
              this.parametres.avecSiteWeb === true &&
              this.parametres.SiteInternet !== ''
            );
          }.bind(aInstance),
          getVisibiliteContact: function () {
            return (
              this.parametres.avecContact === true &&
              this.parametres.listeInformationsEtablissements !== null &&
              this.parametres.listeInformationsEtablissements !== undefined
            );
          }.bind(aInstance),
          getNodeContact: function () {
            $(this.node).on({
              click: function () {
                ObjetFenetre.creerInstanceFenetre(
                  ObjetFicheEtablissement,
                  { pere: this },
                  { callbackFermer: function () {} },
                ).setDonnees({
                  estSurMobile: this.options.estSurMobile,
                  listeInformationsEtablissements:
                    this.parametres.listeInformationsEtablissements,
                  estEspaceAvecMembre: false,
                  avecReglementAAccepter: false,
                });
              }.bind(aInstance),
            });
          },
          getVisibiliteMentionsLegales: function () {
            return this.parametres.avecMentionsLegales === true;
          }.bind(aInstance),
          getNodeMentionsLegales: function () {
            $(this.node).on({
              click: function () {
                return new ObjetRequeteMentionsLegales(aInstance)
                  .lancerRequete()
                  .then((aParams) => {
                    let lFenetreMentionsLegales =
                      ObjetFenetre.creerInstanceFenetre(
                        ObjetFenetre_MentionsLegales,
                        { pere: this, initialiser: function () {} },
                      );
                    lFenetreMentionsLegales.setOptionsFenetre({
                      titre: GTraductions.getValeur(
                        'pagePubliqueEtab.mentionsLegales',
                      ),
                    });
                    lFenetreMentionsLegales.setDonnees(aParams);
                  });
              }.bind(aInstance),
            });
          },
          btnFermer: function () {
            $(this.node).eventValidation(function () {
              let lGenreEspace =
                global.GEtatUtilisateur !== undefined
                  ? '_' + GEtatUtilisateur.GenreEspace
                  : '';
              IELocalStorage.setItem(lCookieLocalStorage + lGenreEspace, false);
              $(this).parent().hide();
            });
          },
          getVisibiliteReseauxSociaux: function () {
            return (
              this.parametres.avecReseauxSociaux === true &&
              (this.parametres.avecFacebook ||
                this.parametres.avecTwitter ||
                this.parametres.avecInstagram ||
                this.parametres.avecYouTube)
            );
          }.bind(aInstance),
          btnReseauxSociaux: {
            event: function (aGenre) {
              switch (aGenre) {
                case this.genreCommandeRS.twitter:
                  if (this.parametres.urlTwitter !== '') {
                    window.open(this.parametres.urlTwitter);
                  }
                  break;
                case this.genreCommandeRS.facebook:
                  if (this.parametres.urlFacebook !== '') {
                    window.open(this.parametres.urlFacebook);
                  }
                  break;
                case this.genreCommandeRS.instagram:
                  if (this.parametres.urlInstagram !== '') {
                    window.open(this.parametres.urlInstagram);
                  }
                  break;
                case this.genreCommandeRS.youtube:
                  if (this.parametres.urlYoutube !== '') {
                    window.open(this.parametres.urlYoutube);
                  }
                  break;
              }
            }.bind(aInstance),
          },
          btnAccesEspaces: {
            getDisabled: function () {
              return false;
            },
            event: function () {
              _evntBtnAccesEspace.call(aInstance, { nodeBouton: this.node });
            },
          },
          comboAccesEspaces: {
            init: function (aCombo) {
              const lNomApp = this.options.estPrimaire
                ? 'PRONOTE PRIMAIRE'
                : 'PRONOTE';
              aCombo.setOptionsObjetSaisie({
                longueur: this.options.estPrimaire ? 320 : 260,
                labelWAICellule: GTraductions.getValeur(
                  'pagePubliqueEtab.accederEspace',
                  [lNomApp],
                ),
                placeHolder: GTraductions.getValeur(
                  'pagePubliqueEtab.accederEspace',
                  ['<span class="nomApp">' + lNomApp + '</span>'],
                ),
              });
            }.bind(aInstance),
            getDonnees: function () {
              let lListeEspaces = aInstance.parametres.espaces;
              if (lListeEspaces !== null && lListeEspaces !== undefined) {
                return lListeEspaces;
              }
            },
            event: function (aParametres) {
              if (
                aParametres.genreEvenement ===
                  EGenreEvenementObjetSaisie.selection &&
                !!aParametres.element
              ) {
                let lEspace = aParametres.element;
                window.location.assign(
                  _getURLRacine.call() +
                    lEspace.url +
                    new UtilitaireRedirection().getParametresUrl(),
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
            new ObjetDeserialiser().getListeEvenements(
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
          this.identGalerie = Identite.creerInstance(ObjetGalerieCarrousel, {
            pere: this,
          });
        }
        GHtml.setHtml(this.parametres.id, _construire.call(this), {
          controleur: this.controleur,
        });
        this.construireHtmlWidgets();
        if (this.parametres.avecGaleriePhotos) {
          _initCarrousel.call(this, {
            instance: this.identGalerie,
            listePhotosGalerie: this.parametres.listePhotosGalerie,
          });
        }
        UtilitaireMenuContextuelNatif.desactiverSurElement($(document));
        if (this.parametres.avecGaleriePhotos) {
          Invocateur.abonner(
            ObjetInvocateur.events.resizeNavigateur,
            () => {
              _initCarrousel.call(this, {
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
            genre: EGenreWidget.menuDeLaCantine,
            id: GUID.getId(),
            classWidget: MultipleWidgetMenu
              ? MultipleWidgetMenu.WidgetMenu
              : null,
            titre: GTraductions.getValeur('accueil.menu'),
            hint: GTraductions.getValeur('accueil.info.menu'),
            message: GTraductions.getValeur('accueil.pasDeMenu'),
            existeWidget() {
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
            genre: EGenreWidget.lienUtile,
            id: GUID.getId(),
            classWidget: WidgetLienUtile,
            titre: GTraductions.getValeur('accueil.lienUtile.titre'),
            hint: GTraductions.getValeur('accueil.lienUtile.titre'),
            message: GTraductions.getValeur('accueil.lienUtile.message'),
            existeWidget() {
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
            genre: EGenreWidget.agenda,
            classWidget: WidgetAgenda,
            id: GUID.getId(),
            titre: GTraductions.getValeur('accueil.agenda.titre'),
            hint: GTraductions.getValeur('accueil.info.agenda'),
            message: GTraductions.getValeur('accueil.aucuneAgenda'),
            existeWidget() {
              return !this.parametres || this.parametres.agenda.listeEvenements;
            },
            isCollapsible: true,
          },
          actualites: {
            nomDonnees: 'actualites',
            genre: EGenreWidget.actualites,
            classWidget: WidgetActualites,
            id: GUID.getId(),
            titre: GTraductions.getValeur('accueil.actualites'),
            hint: '',
            message: GTraductions.getValeur('accueil.aucuneActualite'),
            existeWidget() {
              return (
                !this.parametres ||
                !this.parametres.actualites ||
                (this.parametres.actualites.tabModeAff &&
                  this.parametres.actualites.tabModeAff[0].listeActualites)
              );
            },
            isCollapsible: true,
            nbrItemsVisible: IE.estMobile ? 1 : 3,
          },
          edito: {
            nomDonnees: 'edito',
            genre: EGenreWidget.edito,
            classWidget: WidgetEdito,
            id: GUID.getId(),
            titre:
              this.parametres && this.parametres.edito
                ? this.parametres.edito.titre
                : '',
            hint: '',
            existeWidget() {
              return (
                !this.parametres ||
                !this.parametres.edito ||
                (this.parametres.edito.titre && this.parametres.edito.contenu)
              );
            },
            isCollapsible: false,
          },
        };
      }
      instancierWidgets() {
        if (_estVisible_MenuCantine.call(this, { estPublieUniquement: true })) {
          $.extend(
            true,
            this.widgets.menuDeLaCantine,
            this.parametres.menuDeLaCantine,
          );
          _construireInstanceWidget.call(this, this.widgets.menuDeLaCantine);
        }
        if (_estVisible_LiensUtiles.call(this, { estPublieUniquement: true })) {
          $.extend(true, this.widgets.lienUtile, this.parametres.lienUtile);
          _construireInstanceWidget.call(this, this.widgets.lienUtile);
        }
        if (_estVisible_Agenda.call(this, { estPublieUniquement: true })) {
          $.extend(true, this.widgets.agenda, this.parametres.agenda);
          _construireInstanceWidget.call(this, this.widgets.agenda);
        }
        if (
          _estVisible_Informations.call(this, { estPublieUniquement: true })
        ) {
          $.extend(true, this.widgets.actualites, this.parametres.actualites);
          _construireInstanceWidget.call(this, this.widgets.actualites);
        }
        if (_estVisible_Edito.call(this, { estPublieUniquement: true })) {
          $.extend(true, this.widgets.edito, this.parametres.edito);
          _construireInstanceWidget.call(this, this.widgets.edito);
        }
      }
      construireHtmlWidgets() {
        if (_estVisible_MenuCantine.call(this)) {
          _construireHtmlWidget.call(this, this.widgets.menuDeLaCantine);
        }
        if (_estVisible_LiensUtiles.call(this)) {
          _construireHtmlWidget.call(this, this.widgets.lienUtile);
        }
        if (_estVisible_Agenda.call(this)) {
          _construireHtmlWidget.call(this, this.widgets.agenda);
        }
        if (_estVisible_Informations.call(this)) {
          _construireHtmlWidget.call(this, this.widgets.actualites, {
            estModeSansAuth: true,
          });
        }
        if (_estVisible_Edito.call(this)) {
          _construireHtmlWidget.call(this, this.widgets.edito);
        }
      }
      construireWidget(aWidget) {
        const lInstanceWidget = this.instancesWidgets[aWidget.genre];
        GHtml.setHtml(
          aWidget.id,
          UtilitaireWidget.composeContenuWidget(aWidget),
          { instance: lInstanceWidget || this },
        );
        UtilitaireWidget.actualiserFooter(aWidget);
        UtilitaireWidget.afficherMasquerListe(aWidget);
      }
      recupererDonneesWidget(aTabWidgets) {
        const lActualiserUniquementWidget =
          aTabWidgets !== null && aTabWidgets !== undefined;
        if (lActualiserUniquementWidget) {
          this.donneesRequete.widgets = aTabWidgets;
        }
        Requetes.inscrire(
          'PagePubliqueEtablissement',
          ObjetRequeteConsultation,
        );
        Requetes('PagePubliqueEtablissement', this)
          .lancerRequete(this.donneesRequete)
          .then((aParam) => {
            $.extend(this.parametres, aParam);
            if (lActualiserUniquementWidget) {
              if (aTabWidgets.includes(EGenreWidget.menuDeLaCantine)) {
                _actualiserMenuDeLaCantine.call(this);
              }
            }
          });
      }
      initGlobales() {
        _initDatesEtCyclesCasPagePubliqueEtablissement.call(this);
      }
      initDonneesRequete() {
        return {
          menuDeLaCantine: {
            date: GApplication.getDateDemo()
              ? GApplication.getDateDemo()
              : GParametres.JourOuvre,
          },
        };
      }
      composeCookiesInfo() {
        const H = [];
        H.push(`<div class="cookies-disclaimer">`);
        H.push(
          `<p>${GTraductions.getValeur('PiedPage.CookieInfo_Message_1')} ${GTraductions.getValeur('PiedPage.CookieInfo_Message_2')} <span role="button" tabindex="0" class="as-link" ie-node="getNodeMentionsLegales" aria-haspopup="dialog">${GTraductions.getValeur('PiedPage.mentionsLegales')}.</span></p>`,
        );
        H.push(
          `<ie-bouton tabindex="0" aria-label="${GTraductions.getValeur('Fermer')}" ie-hint="${GTraductions.getValeur('Fermer')}" ie-node="btnFermer">${GTraductions.getValeur('Fermer')}</ie-bouton>`,
        );
        H.push(`</div>`);
        return H.join('');
      }
      afficherCookieInfo() {
        let lGenreEspace =
          global.GEtatUtilisateur !== undefined
            ? '_' + GEtatUtilisateur.GenreEspace
            : '';
        IELocalStorage.getItem(lCookieLocalStorage) === null
          ? IELocalStorage.setItem(lCookieLocalStorage + lGenreEspace, true)
          : IELocalStorage.getItem(lCookieLocalStorage + lGenreEspace);
        return (
          IELocalStorage.getItem(lCookieLocalStorage + lGenreEspace) === 'true'
        );
      }
    }
    function _construireInstanceWidget(aDonneesWidget) {
      if (this.instancesWidgets[aDonneesWidget.genre]) {
        this.instancesWidgets[aDonneesWidget.genre].free();
      }
      try {
        this.instancesWidgets[aDonneesWidget.genre] = Identite.creerInstance(
          aDonneesWidget.classWidget,
          { pere: this, evenement: _surEvenementWidget.bind(this) },
        );
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
    function _surEvenementWidget(aGenreWidgetSource, aGenreEvenement) {
      switch (aGenreEvenement) {
        case EGenreEvenementWidget.ActualiserWidget:
          this.recupererDonneesWidget([aGenreWidgetSource]);
          break;
        default:
          break;
      }
    }
    function _construireHtmlWidget(aDonneesWidget, aOptionsWidget) {
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
    function _actualiserMenuDeLaCantine() {
      this.instancierWidgets();
      this.construireHtmlWidgets();
    }
    function _construire() {
      const H = [];
      H.push('<div class="utilPagePubliqueEtab">');
      H.push(_construireEntete.call(this));
      H.push(
        `<div class="tpl-3cols">\n  <div class="tpl-marge"></div>\n    <div class="tpl-main">`,
      );
      H.push(_construireCorps.call(this));
      H.push(`</div>\n          <div class="tpl-marge"></div>\n    </div>`);
      H.push(_construirePied.call(this));
      H.push('</div>');
      return H.join('');
    }
    function _construireSectionWidget(aParam) {
      const H = [];
      if (aParam.estVisible) {
        H.push(
          '<article class="widget' +
            (!IE.estMobile
              ? ' ' + ThemesCouleurs.getClassThemeCourant() + ' '
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
    function _construireEntete() {
      const H = [];
      H.push(`<header>`);
      H.push(
        `<div class="tpl-3cols">\n            <div class="tpl-marge"></div>\n            <div class="tpl-main">`,
      );
      let lAvecLiensUtiles = _estVisible_LiensUtilesFavoris.call(this);
      H.push(
        `      <div class="bandeauHaut ${lAvecLiensUtiles ? ` avecSeparateur` : ``}" ie-node="getWidthTitle">`,
      );
      H.push(_construireIdentiteEtablissement.call(this));
      H.push(_construireAccesEspaces.call(this));
      H.push(`      </div>`);
      if (lAvecLiensUtiles) {
        H.push(_construireLiensUtilesFavoris.call(this));
      }
      H.push(`  </div>`);
      H.push(`  <div class="tpl-marge"></div>\n          </div>`);
      H.push(_construireBanniere.call(this));
      H.push(`</header>`);
      return H.join('');
    }
    function _construireIdentiteEtablissement() {
      const H = [];
      H.push('<section class="identiteEtab">');
      if (this.parametres.urlLogo) {
        H.push(
          '<img src="',
          this.parametres.urlLogo,
          '" alt="',
          GTraductions.getValeur('BandeauEspace.LogoEtablissement'),
          '" />',
        );
      }
      H.push('<h4>' + this.parametres.NomEtablissementConnexion + '</h4>');
      H.push('</section>');
      return H.join('');
    }
    function _construireAccesEspaces() {
      const lNomApp = this.options.estPrimaire ? 'PRONOTE PRIMAIRE' : 'PRONOTE';
      const H = [];
      H.push('<section class="accesEspaces">');
      let lUrlRedirectionChoixEspace = this.parametres.urlConnexionEspaces;
      if (
        lUrlRedirectionChoixEspace !== null &&
        lUrlRedirectionChoixEspace !== undefined
      ) {
        H.push(
          '<ie-bouton class="themeBoutonPrimaire" ie-model="btnAccesEspaces">',
          GTraductions.getValeur('pagePubliqueEtab.accederEspace', [
            '<span class="nomApp">' + lNomApp + '</span>',
          ]),
          '</ie-bouton>',
        );
      } else {
        H.push('<ie-combo ie-model="comboAccesEspaces" ></ie-combo>');
      }
      H.push('</section>');
      return H.join('');
    }
    function _estVisible_LiensUtilesFavoris() {
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
    function _construireLiensUtilesFavoris() {
      const H = [];
      if (_estVisible_LiensUtilesFavoris.call(this)) {
        H.push('<nav class="liensFavoris">');
        const lListeFavoris =
          this.parametres.lienUtile.listeLiens.getListeElements((aElement) => {
            return aElement.estFavori === true;
          });
        lListeFavoris.parcourir((aLienUtile) => {
          H.push(
            '<ie-chips ie-ellipsis href="',
            GChaine.verifierURLHttp(aLienUtile.url),
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
    function _construireBanniere() {
      const H = [];
      if (this.parametres.avecBanniere) {
        let lUrlBanniere = '';
        if (
          this.parametres.listePhotosBanniere !== null &&
          this.parametres.listePhotosBanniere !== undefined &&
          this.parametres.listePhotosBanniere.count() === 1
        ) {
          lUrlBanniere = GChaine.creerUrlBruteLienExterne(
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
            `<div class="tpl-3cols">\n                <div class="tpl-marge"></div>\n                <div class="tpl-main">\n                  <div class="conteneurTexte">\n                      <h1>${this.parametres.texteBanniere}</h1>\n                  </div>\n                </div>\n                <div class="tpl-marge"></div>\n              </div>`,
          );
        }
        H.push(`</div>`);
      }
      return H.join('');
    }
    function _construireCorps() {
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
        H.push(_construireEdito.call(this));
        H.push(_construireInformations.call(this));
        H.push('</div>');
      }
      if (!lZoneAsideHidden) {
        H.push('<div class="zoneAside">');
        H.push(_construireAgenda.call(this));
        H.push(_construireLiensUtiles.call(this));
        H.push(_construireMenuCantine.call(this));
        H.push('</div>');
      }
      H.push('<div class="zoneFooter">');
      H.push(_construireGaleriePhotos.call(this));
      H.push('</div>');
      H.push(`     </section>`);
      return H.join('');
    }
    function _construireEdito() {
      return _construireSectionWidget.call(this, {
        estVisible: _estVisible_Edito.call(this),
        classWidget: 'edito',
        titre:
          this.parametres && this.parametres.edito
            ? this.parametres.edito.titre
            : GTraductions.getValeur('pagePubliqueEtab.edito'),
        id: this.widgets.edito.id,
      });
    }
    function _estVisibleSectionWidget(aParam, aParamWidget) {
      const lEstPublie = aParamWidget.estPublie;
      if ((aParam && aParam.estPublieUniquement === true) || !lEstPublie) {
        return lEstPublie;
      }
      const lExisteDonnees =
        aParamWidget.data && aParamWidget.data.existeWidget.call(this);
      return lEstPublie && lExisteDonnees;
    }
    function _estVisible_Edito(aParam) {
      return _estVisibleSectionWidget.call(this, aParam, {
        estPublie: this.parametres.avecEdito === true,
        data: this.widgets.edito,
      });
    }
    function _estVisible_Informations(aParam) {
      return _estVisibleSectionWidget.call(this, aParam, {
        estPublie: this.parametres.avecInformations === true,
        data: this.widgets.actualites,
      });
    }
    function _construireInformations() {
      return _construireSectionWidget.call(this, {
        estVisible: _estVisible_Informations.call(this),
        classWidget: 'actualites',
        titre: GTraductions.getValeur('pagePubliqueEtab.informations'),
        id: this.widgets.actualites.id,
      });
    }
    function _estVisible_Agenda(aParam) {
      return _estVisibleSectionWidget.call(this, aParam, {
        estPublie: this.parametres.avecAgenda === true,
        data: this.widgets.agenda,
      });
    }
    function _construireAgenda() {
      return _construireSectionWidget.call(this, {
        estVisible: _estVisible_Agenda.call(this),
        classWidget: 'agenda fluid-mobile',
        titre: GTraductions.getValeur('accueil.agenda.titre'),
        id: this.widgets.agenda.id,
      });
    }
    function _estVisible_LiensUtiles(aParam) {
      return _estVisibleSectionWidget.call(this, aParam, {
        estPublie: this.parametres.avecLiensUtiles === true,
        data: this.widgets.lienUtile,
      });
    }
    function _construireLiensUtiles() {
      return _construireSectionWidget.call(this, {
        estVisible: _estVisible_LiensUtiles.call(this),
        classWidget: 'lienutile fluid-mobile',
        titre: GTraductions.getValeur('accueil.lienUtile.titre'),
        id: this.widgets.lienUtile.id,
      });
    }
    function _estVisible_MenuCantine(aParam) {
      return _estVisibleSectionWidget.call(this, aParam, {
        estPublie: this.parametres.avecMenuCantine === true,
        data: this.widgets.menuDeLaCantine,
      });
    }
    function _construireMenuCantine() {
      return _construireSectionWidget.call(this, {
        estVisible: _estVisible_MenuCantine.call(this),
        classWidget: 'menudelacantine fluid-mobile',
        titre: GTraductions.getValeur('accueil.menu'),
        id: this.widgets.menuDeLaCantine.id,
      });
    }
    function _construireGaleriePhotos() {
      const H = [];
      if (this.parametres.avecGaleriePhotos) {
        H.push(
          '<article class="widget ' +
            ThemesCouleurs.getClassThemeCourant() +
            ' galerie" ie-display="getVisibiliteGaleriePhotos">',
        );
        H.push(
          '<header>' +
            '<h3>' +
            GTraductions.getValeur('pagePubliqueEtab.galeriePhotos') +
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
    function _initCarrousel(aParams) {
      aParams.instance.setOptions({
        dimensionPhoto: 300,
        nbMaxDiaposEnZoneVisible: 4,
        avecSuppression: false,
        avecEditionLegende: false,
        afficherNomFichierSiLibelleVide: false,
        altImage: GTraductions.getValeur('pagePubliqueEtab.altImgViewer'),
      });
      const lListeImages = aParams.listePhotosGalerie;
      const lListeDiapos = new ObjetListeElements();
      lListeImages.parcourir((aImgPE) => {
        let lDiapo = new ObjetElement();
        lDiapo.setLibelle(aImgPE.descriptif);
        aImgPE.miniature = TypeGenreMiniature.GM_600;
        lDiapo.documentCasier = aImgPE;
        lListeDiapos.add(lDiapo);
      });
      aParams.instance.initialiser();
      aParams.instance.setDonnees({
        listeDiapos: lListeDiapos,
        ressourceDocJoint: null,
      });
    }
    function _construirePied() {
      const H = [];
      this.afficherCookieInfo = this.afficherCookieInfo();
      if (this.afficherCookieInfo && !GApplication.getDemo()) {
        H.push(this.composeCookiesInfo());
      }
      H.push('<footer>');
      H.push(_construireLiensFooter.call(this));
      H.push(_construireCopyright.call(this));
      H.push('</footer>');
      return H.join('');
    }
    function _construireLiensFooter() {
      const H = [];
      let lLFooterEstVide =
        !this.parametres.avecContact &&
        (this.parametres.listeInformationsEtablissements === null ||
          this.parametres.listeInformationsEtablissements === undefined) &&
        !this.parametres.avecMentionsLegales &&
        (!this.parametres.avecSiteWeb || this.parametres.SiteInternet === '') &&
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
      if (this.parametres.avecSiteWeb && this.parametres.SiteInternet !== '') {
        H.push(
          '<div ie-display="getVisibiliteSiteWeb" class="lien"><a href="',
          this.parametres.SiteInternet,
          '">',
          GTraductions.getValeur('pagePubliqueEtab.siteWeb'),
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
          GTraductions.getValeur('pagePubliqueEtab.contact'),
          '</div>',
        );
      }
      if (this.parametres.avecMentionsLegales) {
        H.push(
          '<div role="link" ie-node="getNodeMentionsLegales" tabindex="0" ie-display="getVisibiliteMentionsLegales" class="lien">',
          GTraductions.getValeur('pagePubliqueEtab.mentionsLegales'),
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
            this.genreCommandeRS.twitter +
            ')" class="icon_twitter btnImageIcon ibp-command" title="' +
            GTraductions.getValeur('pagePubliqueEtab.twitter') +
            '">' +
            '</ie-btnimage>',
        );
      }
      if (this.parametres.avecFacebook) {
        H.push(
          '<ie-btnimage ie-model="btnReseauxSociaux(' +
            this.genreCommandeRS.facebook +
            ')" class="icon_facebook btnImageIcon ibp-command" title="' +
            GTraductions.getValeur('pagePubliqueEtab.facebook') +
            '">' +
            '</ie-btnimage>',
        );
      }
      if (this.parametres.avecYouTube) {
        H.push(
          '<ie-btnimage ie-model="btnReseauxSociaux(' +
            this.genreCommandeRS.youtube +
            ')" class="icon_youtube btnImageIcon ibp-command" title="' +
            GTraductions.getValeur('pagePubliqueEtab.youtube') +
            '">' +
            '</ie-btnimage>',
        );
      }
      if (this.parametres.avecInstagram) {
        H.push(
          '<ie-btnimage ie-model="btnReseauxSociaux(' +
            this.genreCommandeRS.instagram +
            ')" class="icon_instagram btnImageIcon ibp-command" title="' +
            GTraductions.getValeur('pagePubliqueEtab.instagram') +
            '">' +
            '</ie-btnimage>',
        );
      }
      H.push('</div>');
      H.push('</div>');
      return H.join('');
    }
    function _construireCopyright() {
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
          GTraductions.getValeur('pagePubliqueEtab.hebergementDonneesFrance'),
          '</span>',
          '<div class="logo-index-contain"><span class="logo-index-inverse"></span></div>',
          _espacesISO27001.call(this)
            ? '<span class="certif-27001">' +
                GTraductions.getValeur('pagePubliqueEtab.certifISO27001') +
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
        GTraductions.getValeur('pagePubliqueEtab.copyright', [
          this.parametres.millesime,
        ]),
        '</span>',
      );
      H.push('</section>');
      return H.join('');
    }
    function _espacesISO27001() {
      return !this.options.estPrimaire;
    }
    function _getURLRacine() {
      const lUrl = window.location.href.split('/');
      lUrl.pop();
      return lUrl.join('/') + '/';
    }
    function _evntBtnAccesEspace() {
      const lUrlRel = this.parametres.urlConnexionEspaces;
      if (lUrlRel !== null && lUrlRel !== undefined) {
        let lUrl =
          _getURLRacine.call() +
          lUrlRel +
          new UtilitaireRedirection().getParametresUrl();
        window.location.assign(lUrl);
      }
    }
    function _initDatesEtCyclesCasPagePubliqueEtablissement() {
      GDate.setDonnees(
        GParametres.PremierLundi,
        GParametres.PremiereDate,
        GParametres.DerniereDate,
        null,
        null,
        null,
        null,
        null,
        null,
        GParametres.JoursOuvres,
      );
      IE.Cycles = new ObjetCycles();
      IE.Cycles.init({
        premiereDate: GParametres.PremiereDate,
        derniereDate: GParametres.DerniereDate,
        joursOuvresParCycle: GParametres.joursDemiPension.count(),
        joursOuvres: GParametres.joursDemiPension,
      });
    }
    module.exports = { UtilitairePagePubliqueEtablissement };
  },
  fn: 'utilitairepagepubliqueetablissement.js',
});