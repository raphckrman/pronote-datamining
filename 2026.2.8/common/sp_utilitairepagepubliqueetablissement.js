IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitairePagePubliqueEtablissement = void 0;
    require('@scolys/produit/css/UtilitairePagePubliqueEtablissement.css');
    require('@cp/Produit/Css/pages_connexion.css');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const UtilitaireRedirection_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireRedirection');
    const Enumere_Widget_1 = require('@scolys/produit/script/enumere/Enumere_Widget');
    const WidgetMenu_1 = require('@scolys/espace/script/widget/WidgetMenu');
    const WidgetLienUtile_1 = require('@scolys/espace/script/widget/WidgetLienUtile');
    const WidgetAgenda_1 = require('@scolys/espace/script/widget/WidgetAgenda');
    const WidgetActualites_1 = require('@scolys/espace/script/widget/WidgetActualites');
    const WidgetEdito_1 = require('@scolys/espace/script/widget/WidgetEdito');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const UtilitaireWidget_1 = require('@cp/Espace/Script/Utilitaire/UtilitaireWidget');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const ObjetCycles_1 = require('@cp/script/ObjetCycles');
    const ObjetDeserialiser_1 = require('@scolys/espace/script/requete/ObjetDeserialiser');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetRequeteMentionsLegales_1 = require('@cp/Espace/Script/Requetes/ObjetRequeteMentionsLegales');
    const ObjetFenetre_MentionsLegales_1 = require('@cp/Produit/Script/Fenetre/ObjetFenetre_MentionsLegales');
    const ObjetGalerieCarrousel_1 = require('@cp/Produit/Script/ObjetGalerieCarrousel');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const ThemesCouleurs_1 = require('@cp/script/Theme/ThemesCouleurs');
    const Enumere_EvenementObjetSaisie_1 = require('@cp/script/Enumere/Enumere_EvenementObjetSaisie');
    const Enumere_EvenementWidget_1 = require('@cp/Produit/Script/Enumere/Enumere_EvenementWidget');
    const TypeGenreMiniature_1 = require('@cp/script/Enumere/TypeGenreMiniature');
    const ObjetFicheEtablissement_1 = require('@scolys/produit/script/ObjetFicheEtablissement');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IEHtml_Combo_1 = require('@cp/Espace/Script/IEHtml.Combo');
    const ObjetRequetePagePubliqueEtablissement_1 = require('@scolys/produit/script/requete/ObjetRequetePagePubliqueEtablissement');
    const IEHtml_Chips_1 = require('@cp/Produit/Script/IEHtml.Chips');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
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
      jsxComboModelAccesEspace() {
        return {
          init: (aCombo) => {
            const lNomApp = this.options.estPrimaire
              ? 'PRONOTE PRIMAIRE'
              : 'PRONOTE';
            aCombo.setOptionsObjetSaisie({
              longueur: this.options.estPrimaire ? 320 : 260,
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
          getDonnees: (aListe) => {
            let lListeEspaces = this.parametres.espaces;
            if (lListeEspaces !== null && lListeEspaces !== undefined) {
              return lListeEspaces;
            }
          },
          event: (aParams) => {
            if (
              aParams.genreEvenement ===
                Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                  .selection &&
              !!aParams.element
            ) {
              let lEspace = aParams.element;
              window.location.assign(
                this._getURLRacine() +
                  lEspace.url +
                  new UtilitaireRedirection_1.UtilitaireRedirection().getParametresUrl(),
              );
            }
          },
        };
      }
      jsxModelBoutonAccesEspace() {
        return {
          event: () => {
            this._evntBtnAccesEspace();
          },
        };
      }
      jsxNodeWidthTitle(aNode) {
        let widthWrapper = $(aNode).innerWidth();
        let widthTitre = $(aNode).find('section.identiteEtab').innerWidth();
        let widthBouton = $(aNode).find('section.accesEspaces').innerWidth();
        if (widthTitre + widthBouton > widthWrapper) {
          $(aNode).addClass('centered');
        }
      }
      construire(aParam, aDonneesRequete) {
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
          this.identGalerie = new ObjetGalerieCarrousel_1.ObjetGalerieCarrousel(
            { pere: this },
          );
        }
        ObjetHtml_1.GHtml.setHtml(this.parametres.id, this._construire());
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
        if (this.parametres.avecGaleriePhotos) {
          Invocateur_1.Invocateur.abonner(
            Invocateur_1.ObjetInvocateur.events.resizeNavigateur,
            () => {
              this._initCarrousel({
                instance: this.identGalerie,
                listePhotosGalerie: this.parametres.listePhotosGalerie,
              });
            },
          );
        }
      }
      declarerWidgets() {
        var _a, _b, _c, _d;
        return {
          menuDeLaCantine: {
            nomDonnees: 'menuDeLaCantine',
            genre: Enumere_Widget_1.TypeGenreHttpWidget.MenuDeLaCantine,
            id: GUID_1.GUID.getId(),
            classWidget: WidgetMenu_1.WidgetMenu,
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
            genre: Enumere_Widget_1.TypeGenreHttpWidget.LienUtile,
            id: GUID_1.GUID.getId(),
            classWidget: WidgetLienUtile_1.WidgetLienUtile,
            titre:
              ((_b =
                (_a = this.parametres) === null || _a === void 0
                  ? void 0
                  : _a.lienUtile) === null || _b === void 0
                ? void 0
                : _b.titre) || '',
            hint:
              ((_d =
                (_c = this.parametres) === null || _c === void 0
                  ? void 0
                  : _c.lienUtile) === null || _d === void 0
                ? void 0
                : _d.titre) || '',
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
            genre: Enumere_Widget_1.TypeGenreHttpWidget.Agenda,
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
            genre: Enumere_Widget_1.TypeGenreHttpWidget.Actualites,
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
          { instance: lInstanceWidget },
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
                  Enumere_Widget_1.TypeGenreHttpWidget.MenuDeLaCantine,
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
      _construireInstanceWidget(aDonneesWidget) {
        if (this.instancesWidgets[aDonneesWidget.genre]) {
          this.instancesWidgets[aDonneesWidget.genre].free();
        }
        try {
          this.instancesWidgets[aDonneesWidget.genre] =
            new aDonneesWidget.classWidget({
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
        H.push(`<header role="banner">`);
        H.push(
          `<div class="tpl-3cols">\n              <div class="tpl-marge"></div>\n              <div class="tpl-main">`,
        );
        let lAvecLiensUtiles = this._estVisibleLiensUtilesFavoris();
        H.push(
          IE.jsx.str(
            'div',
            {
              class:
                'bandeauHaut' + (lAvecLiensUtiles ? ' avecSeparateur' : ''),
              ie_node: this.jsxNodeWidthTitle.bind(this),
            },
            this._construireIdentiteEtablissement(),
            this._construireAccesEspaces(),
          ),
        );
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
            IE.jsx.str('img', {
              src: this.parametres.urlLogo,
              alt: 'Logo de l'établissement',
            }),
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
            IE.jsx.str(
              IEHtml_Bouton_1.Bouton,
              {
                class: 'themeBoutonPrimaire',
                ie_model: this.jsxModelBoutonAccesEspace.bind(this),
              },
              ObjetTraduction_1.GTraductions.getValeur(
                'pagePubliqueEtab.accederEspace',
                ['<span class="nomApp">' + lNomApp + '</span>'],
              ),
            ),
          );
        } else {
          H.push(
            IE.jsx.str(IEHtml_Combo_1.ComboDyn, {
              ie_model: this.jsxComboModelAccesEspace.bind(this),
            }),
          );
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
          H.push('<nav class="liensFavoris" role="navigation">');
          const lListeFavoris =
            this.parametres.lienUtile.listeLiens.getListeElements(
              (aElement) => {
                return aElement.estFavori === true;
              },
            );
          lListeFavoris.parcourir((aLienUtile) => {
            H.push(
              IE.jsx.str(
                IEHtml_Chips_1.Chips,
                {
                  ie_ellipsis: true,
                  href: ObjetChaine_1.GChaine.verifierURLHttp(aLienUtile.url),
                  ie_tooltipdescribe: !!aLienUtile.commentaire
                    ? aLienUtile.commentaire
                    : false,
                },
                aLienUtile.getLibelle(),
              ),
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
        var _a, _b;
        return this._construireSectionWidget({
          estVisible: this._estVisibleLiensUtiles(),
          classWidget: 'lienutile fluid-mobile',
          titre:
            ((_b =
              (_a = this.widgets) === null || _a === void 0
                ? void 0
                : _a.lienUtile) === null || _b === void 0
              ? void 0
              : _b.titre) || '',
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
      jsxDisplayGaleriePhotos() {
        return (
          this.parametres.avecGaleriePhotos === true &&
          !!this.parametres.listePhotosGalerie &&
          this.parametres.listePhotosGalerie.count() > 0
        );
      }
      _construireGaleriePhotos() {
        const H = [];
        if (this.parametres.avecGaleriePhotos) {
          H.push(
            IE.jsx.str(
              'article',
              {
                class:
                  'widget ' +
                  ThemesCouleurs_1.ThemesCouleurs.getClassThemeCourant() +
                  ' galerie',
                ie_display: this.jsxDisplayGaleriePhotos.bind(this),
              },
              IE.jsx.str(
                'header',
                null,
                IE.jsx.str(
                  'h3',
                  null,
                  ObjetTraduction_1.GTraductions.getValeur(
                    'pagePubliqueEtab.galeriePhotos',
                  ),
                ),
              ),
              IE.jsx.str('div', {
                id: this.identGalerie.getNom(),
                class: 'accueil-widget-content',
              }),
            ),
          );
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
        H.push('<footer role="contentinfo">');
        H.push(this._construireLiensFooter());
        H.push(this._construireCopyright());
        H.push('</footer>');
        return H.join('');
      }
      jsxDisplaySiteWeb() {
        return (
          this.parametres.avecSiteWeb === true &&
          this.parametres.SiteInternet !== ''
        );
      }
      jsxDisplayLienContact() {
        return (
          this.parametres.avecContact === true &&
          !!this.parametres.listeInformationsEtablissements
        );
      }
      jsxDisplayMentionsLegales() {
        return this.parametres.avecMentionsLegales === true;
      }
      jsxDisplayBoutonsReseauxSociaux() {
        return (
          this.parametres.avecReseauxSociaux === true &&
          (this.parametres.avecFacebook ||
            this.parametres.avecTwitter ||
            this.parametres.avecInstagram ||
            this.parametres.avecYouTube)
        );
      }
      jsxModeleBoutonReseauSocial(aGenre) {
        return {
          event: () => {
            let lUrl = '';
            switch (aGenre) {
              case GenreCommandeRS.twitter:
                lUrl = this.parametres.urlTwitter;
                break;
              case GenreCommandeRS.facebook:
                lUrl = this.parametres.urlFacebook;
                break;
              case GenreCommandeRS.instagram:
                lUrl = this.parametres.urlInstagram;
                break;
              case GenreCommandeRS.youtube:
                lUrl = this.parametres.urlYoutube;
                break;
            }
            if (lUrl !== '') {
              window.open(lUrl);
            }
          },
        };
      }
      jsxNodeContact(aNode) {
        $(aNode).on('validation', () => {
          const lFicheEtablissement =
            ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
              ObjetFicheEtablissement_1.ObjetFicheEtablissement,
              { pere: this },
              { callbackFermer: function () {} },
            );
          lFicheEtablissement.setDonnees({
            estSurMobile: this.options.estSurMobile,
            listeInformationsEtablissements:
              this.parametres.listeInformationsEtablissements,
            estEspaceAvecMembre: false,
            avecReglementAAccepter: false,
          });
        });
      }
      jsxNodeMentionsLegales(aNode) {
        $(aNode).on('validation', () => {
          new ObjetRequeteMentionsLegales_1.ObjetRequeteMentionsLegales(this)
            .lancerRequete()
            .then((aParams) => {
              let lFenetreMentionsLegales =
                ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
                  ObjetFenetre_MentionsLegales_1.ObjetFenetre_MentionsLegales,
                  { pere: this, initialiser: function () {} },
                );
              lFenetreMentionsLegales.setOptionsFenetre({
                titre: ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.mentionsLegales',
                ),
              });
              lFenetreMentionsLegales.setDonnees(aParams);
            });
        });
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
          '<nav class="liensInfosEtab" role="navigation">',
        );
        if (
          this.parametres.avecSiteWeb &&
          this.parametres.SiteInternet !== ''
        ) {
          H.push(
            IE.jsx.str(
              'div',
              { ie_display: this.jsxDisplaySiteWeb.bind(this), class: 'lien' },
              IE.jsx.str(
                'a',
                { href: this.parametres.SiteInternet },
                ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.siteWeb',
                ),
              ),
            ),
          );
        }
        if (
          this.parametres.avecContact &&
          this.parametres.listeInformationsEtablissements !== null &&
          this.parametres.listeInformationsEtablissements !== undefined
        ) {
          H.push(
            IE.jsx.str(
              'div',
              {
                role: 'link',
                ie_node: this.jsxNodeContact.bind(this),
                tabindex: '0',
                ie_display: this.jsxDisplayLienContact.bind(this),
                class: 'lien',
              },
              ObjetTraduction_1.GTraductions.getValeur(
                'pagePubliqueEtab.contact',
              ),
            ),
          );
        }
        if (this.parametres.avecMentionsLegales) {
          H.push(
            IE.jsx.str(
              'div',
              {
                role: 'link',
                ie_node: this.jsxNodeMentionsLegales.bind(this),
                tabindex: '0',
                ie_display: this.jsxDisplayMentionsLegales.bind(this),
                class: 'lien',
              },
              ObjetTraduction_1.GTraductions.getValeur(
                'pagePubliqueEtab.mentionsLegales',
              ),
            ),
          );
        }
        H.push('</nav>');
        H.push(
          IE.jsx.str(
            'div',
            {
              class: 'liensReseauxSoc',
              ie_display: this.jsxDisplayBoutonsReseauxSociaux.bind(this),
            },
            this.parametres.avecTwitter &&
              IE.jsx.str(IEHtml_BtnImage_1.BtnImage, {
                ie_model: this.jsxModeleBoutonReseauSocial.bind(
                  this,
                  GenreCommandeRS.twitter,
                ),
                class: 'icon_twitter btnImageIcon ibp-command',
                title: ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.twitter',
                ),
              }),
            this.parametres.avecFacebook &&
              IE.jsx.str(IEHtml_BtnImage_1.BtnImage, {
                ie_model: this.jsxModeleBoutonReseauSocial.bind(
                  this,
                  GenreCommandeRS.facebook,
                ),
                class: 'icon_facebook btnImageIcon ibp-command',
                title: ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.facebook',
                ),
              }),
            this.parametres.avecYouTube &&
              IE.jsx.str(IEHtml_BtnImage_1.BtnImage, {
                ie_model: this.jsxModeleBoutonReseauSocial.bind(
                  this,
                  GenreCommandeRS.youtube,
                ),
                class: 'icon_youtube btnImageIcon ibp-command',
                title: ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.youtube',
                ),
              }),
            this.parametres.avecInstagram &&
              IE.jsx.str(IEHtml_BtnImage_1.BtnImage, {
                ie_model: this.jsxModeleBoutonReseauSocial.bind(
                  this,
                  GenreCommandeRS.instagram,
                ),
                class: 'icon_instagram btnImageIcon ibp-command',
                title: ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.instagram',
                ),
              }),
          ),
        );
        H.push('</div>');
        return H.join('');
      }
      jsxNodeHebergeEnFrance(aNode) {
        $(aNode).on('validation', () => {
          if (this.parametres.urlSiteInfosHebergement) {
            window.open(this.parametres.urlSiteInfosHebergement);
          }
        });
      }
      jsxNodeLienSiteIndex(aNode) {
        $(aNode).on('validation', () => {
          if (this.parametres.urlSiteIndexEducation) {
            window.open(this.parametres.urlSiteIndexEducation);
          }
        });
      }
      _construireCopyright() {
        const H = [];
        H.push('<section class="copyright">');
        if (this.parametres.estHebergeEnFrance) {
          H.push(
            IE.jsx.str(
              'div',
              {
                tabindex: '0',
                role: 'link',
                class: 'host-france-container',
                ie_node: this.jsxNodeHebergeEnFrance.bind(this),
              },
              IE.jsx.str(
                'span',
                { class: 'host-text' },
                ObjetTraduction_1.GTraductions.getValeur(
                  'pagePubliqueEtab.hebergementDonneesFrance',
                ),
              ),
              IE.jsx.str(
                'div',
                { class: 'logo-index-contain' },
                IE.jsx.str('span', { class: 'logo-index-inverse' }),
              ),
              this._espacesISO27001()
                ? IE.jsx.str(
                    'span',
                    { class: 'certif-27001' },
                    ObjetTraduction_1.GTraductions.getValeur(
                      'pagePubliqueEtab.SecNumCloud',
                    ),
                  )
                : '',
            ),
          );
        }
        H.push(
          IE.jsx.str(
            'span',
            {
              tabindex: '0',
              role: 'link',
              ie_node: this.jsxNodeLienSiteIndex.bind(this),
            },
            ObjetTraduction_1.GTraductions.getValeur(
              'pagePubliqueEtab.copyright',
              [this.parametres.millesime],
            ),
          ),
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