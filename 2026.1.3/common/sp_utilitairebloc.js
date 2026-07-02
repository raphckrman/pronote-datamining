IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EGenreBoutonBloc = exports.EGenreProfondeurBloc = void 0;
    exports.TUtilitaireBloc = TUtilitaireBloc;
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const Enumere_ModeAffichageTimeline_1 = require('@cp/script/Enumere/Enumere_ModeAffichageTimeline');
    const UtilitaireAudio_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireAudio');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_Chips_1 = require('@cp/Produit/Script/IEHtml.Chips');
    const GlossaireListe_1 = require('@cp/Produit/Script/GlossaireListe');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    require('@cp/Espace/Css/UtilitaireBloc.css');
    var EGenreProfondeurBloc;
    (function (EGenreProfondeurBloc) {
      EGenreProfondeurBloc[(EGenreProfondeurBloc['petite'] = 0)] = 'petite';
      EGenreProfondeurBloc[(EGenreProfondeurBloc['moyenne'] = 1)] = 'moyenne';
      EGenreProfondeurBloc[(EGenreProfondeurBloc['grande'] = 2)] = 'grande';
    })(
      EGenreProfondeurBloc ||
        (exports.EGenreProfondeurBloc = EGenreProfondeurBloc = {}),
    );
    var EGenreBoutonBloc;
    (function (EGenreBoutonBloc) {
      EGenreBoutonBloc[(EGenreBoutonBloc['bouton'] = 0)] = 'bouton';
      EGenreBoutonBloc[(EGenreBoutonBloc['texte'] = 1)] = 'texte';
      EGenreBoutonBloc[(EGenreBoutonBloc['chips'] = 3)] = 'chips';
      EGenreBoutonBloc[(EGenreBoutonBloc['chipsAudio'] = 4)] = 'chipsAudio';
    })(EGenreBoutonBloc || (exports.EGenreBoutonBloc = EGenreBoutonBloc = {}));
    function TUtilitaireBloc() {}
    TUtilitaireBloc.compose = function (aParams) {
      const lDefault = {
        titre: '',
        estSelectionne: false,
        estPlie: false,
        sansContenu: false,
        htmlContenu: '',
        widthColDroite: 150,
        widthBtnAction: 120,
        jsxNodeEventPropagationTitreBloc: false,
        infoSousTitre: { avecInfo: false, strInfo: '' },
        infoTitre: { avecInfo: false, strInfo: '' },
        marqueurV: {
          avecMarqueur: true,
          couleur: (0, AccessApp_1.getApp)().getCouleur().themeNeutre.sombre,
        },
        documents: {
          genreRessource: aParams.genreRessourceDocumentJoint,
          avecDocuments: false,
          listeDocuments: new ObjetListeElements_1.ObjetListeElements(),
        },
        ombre: { avecOmbre: true },
        bordure: {
          avecBordure: false,
          couleur: (0, AccessApp_1.getApp)().getCouleur().themeNeutre.claire,
        },
        avecMargeGauche: true,
        couleursBloc: {
          fondBloc: 'var(--color-background)',
          fondTitre: 'var(--color-background)',
        },
        menuContextuel: { actif: false, jsxModelBouton: null, param: {} },
        boutonsActions: [],
      };
      const lParams = $.extend(true, {}, lDefault, aParams);
      return this.composeHtml({
        param: lParams,
        titre: this.composeTitre(lParams),
        contenu: this.composeContenu(lParams),
      });
    };
    TUtilitaireBloc.composeHtml = function (aParams) {
      const H = [];
      const lEstListe =
        aParams.param.modeAffichage ===
        Enumere_ModeAffichageTimeline_1.EModeAffichageTimeline.liste;
      const lAvecArrondis =
        aParams.param.modeAffichage !==
        Enumere_ModeAffichageTimeline_1.EModeAffichageTimeline.compact;
      const lStyle = [];
      if (
        (!aParams.param.ombre || !aParams.param.ombre.avecOmbre) &&
        aParams.param.bordure &&
        aParams.param.bordure.avecBordure
      ) {
        lStyle.push(
          ObjetStyle_1.GStyle.composeCouleurBordure(
            aParams.param.bordure.couleur,
          ),
        );
      }
      if (!lEstListe) {
        lStyle.push('position:relative;margin: 0px 5px 10px 5px;');
      }
      if (aParams.param.couleursBloc) {
        lStyle.push(
          ObjetStyle_1.GStyle.composeCouleurFond(
            aParams.param.couleursBloc.fondBloc,
          ),
        );
      }
      const lClassSelection = aParams.param.estSelectionne ? 'selection' : '';
      const lClasses = [];
      if (lEstListe) {
        lClasses.push('DivBlocListe');
      } else {
        lClasses.push('DivBloc');
      }
      if (!!lClassSelection) {
        lClasses.push(lClassSelection);
      }
      if (lAvecArrondis && !lEstListe) {
        lClasses.push('ArrondisBloc z-depth-1');
      }
      if (aParams.param.avecMargeGauche && !lEstListe) {
        lClasses.push('MargeGaucheBloc');
      }
      const lCouleurTexteTitre = 'var(--color-text)';
      const lDisplayInfoComp =
        aParams.param.infoTitre &&
        aParams.param.infoTitre.avecInfo &&
        aParams.param.infoTitre.strInfo
          ? 'display:block;'
          : 'display:none';
      const HInfoComplementaire = [];
      HInfoComplementaire.push(
        IE.jsx.str(
          'div',
          {
            style:
              'min-width:150px;color : ' +
              lCouleurTexteTitre +
              ';' +
              lDisplayInfoComp,
            class:
              'UtilitaireBloc_itemInverse Bloc_InfoCompl ' +
              (aParams.param.infoTitre &&
              aParams.param.infoTitre.avecInfo &&
              aParams.param.infoTitre.alignement
                ? aParams.param.infoTitre.alignement
                : 'AlignementDroit AlignementHaut EspaceHaut'),
          },
          aParams.param.infoTitre && aParams.param.infoTitre.avecInfo
            ? aParams.param.infoTitre.strInfo
            : '&nbsp;',
        ),
      );
      const lDate = aParams.param.dateAffichee || new Date();
      const lCouleurBloc = ObjetDate_1.GDate.estAvantJourCourant(lDate)
        ? (0, AccessApp_1.getApp)().getCouleur().themeNeutre.legere2
        : (0, AccessApp_1.getApp)().getCouleur().themeCouleur.claire;
      const lCouleurTexte = ObjetDate_1.GDate.estAvantJourCourant(lDate)
        ? (0, AccessApp_1.getApp)().getCouleur().themeNeutre.foncee
        : (0, AccessApp_1.getApp)().getCouleur().themeCouleur.foncee;
      const HContenu = [];
      if (aParams.param.sansContenu !== true) {
        const lAvecZoneAction =
          (aParams.param.menuContextuel &&
            aParams.param.menuContextuel.actif) ||
          (aParams.param.boutonsActions &&
            aParams.param.boutonsActions.length > 0);
        const lClassVertical =
          aParams.param.modeAffichage ===
          Enumere_ModeAffichageTimeline_1.EModeAffichageTimeline.grille
            ? 'containerVertical'
            : '';
        HContenu.push(
          IE.jsx.str(
            'div',
            { class: 'UtilitaireBloc_containerNormal ' + lClassVertical },
            IE.jsx.str(
              'div',
              { class: 'Bloc_Contenu UtilitaireBloc_itemNormal' },
              IE.jsx.str('div', null, aParams.contenu),
            ),
            IE.jsx.str(
              'div',
              {
                class: 'UtilitaireBloc_itemNormal',
                style: lAvecZoneAction ? 'display:block' : 'display:none',
              },
              lAvecZoneAction ? this.composeZoneBoutonsAction(aParams) : '',
            ),
          ),
        );
        if (aParams.param.documents && aParams.param.documents.avecDocuments) {
          HContenu.push(
            IE.jsx.str('div', null, this.composeEspaceDocuments(aParams)),
          );
        }
      }
      const lJsxNodeElementPliable = (aNode) => {
        $(aNode).on('validation', (aEvent) => {
          aEvent.stopPropagation();
        });
      };
      H.push(
        IE.jsx.str(
          'div',
          {
            style: lStyle.join(''),
            class: lClasses.join(' '),
            ie_node: aParams.param.jsxNodeEventPropagationTitreBloc,
            id: 'event_' + GUID_1.GUID.getId(),
            role: 'button',
            tabindex: aParams.param.estPlie ? '0' : '-1',
          },
          IE.jsx.str(
            'div',
            { class: 'Timeline UtilitaireBloc_containerGauche' },
            IE.jsx.str(
              'div',
              {
                class: 'UtilitaireBloc_itemGauche',
                style: lEstListe ? '' : 'display:none;',
              },
              IE.jsx.str(
                'div',
                {
                  class:
                    'UtilitaireBloc_Date AlignementMilieu ie_ellipsis ' +
                    lClassSelection,
                  style:
                    'font-weight:bold;' +
                    (aParams.param.estSelectionne
                      ? ''
                      : ObjetStyle_1.GStyle.composeCouleurFond(lCouleurBloc)),
                },
                IE.jsx.str(
                  'span',
                  {
                    style:
                      ObjetStyle_1.GStyle.composeCouleurTexte(lCouleurTexte),
                  },
                  ObjetDate_1.GDate.formatDate(lDate, '%JJ'),
                ),
                IE.jsx.str(
                  'span',
                  {
                    style:
                      ObjetStyle_1.GStyle.composeCouleurTexte(lCouleurTexte),
                  },
                  ObjetDate_1.GDate.formatDate(lDate, '%MMM'),
                ),
              ),
            ),
            IE.jsx.str(
              'div',
              { class: 'UtilitaireBloc_itemGauche' },
              IE.jsx.str(
                'div',
                { class: 'AvecMain UtilitaireBloc_containerInverse' },
                IE.jsx.str(
                  'div',
                  {
                    class: 'UtilitaireBloc_itemInverse',
                    style: 'display:inline-flex',
                  },
                  this.composeCelluleMarqueur(aParams, false, false),
                  IE.jsx.str(
                    'div',
                    {
                      style:
                        'color : ' +
                        lCouleurTexteTitre +
                        '; ' +
                        ObjetStyle_1.GStyle.composeWidthCalc(4),
                    },
                    aParams.titre,
                  ),
                ),
                HInfoComplementaire.join(''),
              ),
              IE.jsx.str(
                'div',
                {
                  class: 'elementPliable',
                  style: aParams.param.estPlie === true ? 'display:none; ' : '',
                  ie_node: lJsxNodeElementPliable,
                },
                HContenu.join(''),
              ),
            ),
          ),
        ),
      );
      return H.join('');
    };
    TUtilitaireBloc.composeCelluleMarqueur = function (
      aParams,
      avecTop,
      avecBottom,
    ) {
      const H = [];
      if (aParams.param.marqueurV && aParams.param.marqueurV.avecMarqueur) {
        const lArrondiTop = avecTop ? 'border-top-left-radius: 20px 30px;' : '';
        const lArrondiBottom = avecBottom
          ? 'border-bottom-left-radius: 20px 30px;'
          : '';
        H.push(
          '<div class="celluleMarqueur" style="width:3px; background-color:',
          aParams.param.marqueurV.couleur,
          '; ',
          lArrondiTop,
          ' ',
          lArrondiBottom,
          ' border-radius:3px;">&nbsp;</div>',
        );
      }
      return H.join('');
    };
    TUtilitaireBloc.composeBtnAction = function (aBouton) {
      var _a, _b, _c;
      const H = [];
      const lIdBtnAction = GUID_1.GUID.getId();
      const lClassesBouton = [];
      lClassesBouton.push(Type_ThemeBouton_1.TypeThemeBouton.secondaire);
      lClassesBouton.push('small-bt');
      let lGenreAffichageBouton = aBouton.genreAffichage;
      if (lGenreAffichageBouton === undefined) {
        lGenreAffichageBouton = EGenreBoutonBloc.bouton;
      }
      if (lGenreAffichageBouton === EGenreBoutonBloc.bouton) {
        H.push(
          IE.jsx.str(
            IEHtml_Bouton_1.Bouton,
            {
              id: lIdBtnAction,
              ie_model:
                (_a = aBouton.jsxModels) === null || _a === void 0
                  ? void 0
                  : _a.btnAction,
              class: lClassesBouton.join(' '),
            },
            aBouton.libelle,
          ),
        );
      } else if (lGenreAffichageBouton === EGenreBoutonBloc.texte) {
        H.push(
          IE.jsx.str(
            'div',
            { id: lIdBtnAction, class: 'btn-texte' },
            aBouton.libelle,
          ),
        );
      } else if (lGenreAffichageBouton === EGenreBoutonBloc.chips) {
        H.push(
          IE.jsx.str(
            'div',
            null,
            IE.jsx.str(
              IEHtml_Chips_1.Chips,
              {
                ie_model:
                  (_b = aBouton.jsxModels) === null || _b === void 0
                    ? void 0
                    : _b.chipsAction,
              },
              aBouton.libelle,
            ),
          ),
        );
      } else if (lGenreAffichageBouton === EGenreBoutonBloc.chipsAudio) {
        H.push(
          IE.jsx.str(
            'div',
            null,
            UtilitaireAudio_1.UtilitaireAudio.construitChipsAudio({
              libelle: aBouton.libelle,
              url: aBouton.url,
              ieModel:
                (_c = aBouton.jsxModels) === null || _c === void 0
                  ? void 0
                  : _c.chipsAudio,
              idAudio: aBouton.id,
            }),
          ),
        );
      }
      return H.join('');
    };
    TUtilitaireBloc.composeEspaceDocuments = function (aParam) {
      const H = [];
      let lListeDocuments = '';
      if (!!aParam.param.documents && !!aParam.param.documents.listeDocuments) {
        lListeDocuments = UtilitaireUrl_1.UtilitaireUrl.construireListeUrls(
          aParam.param.documents.listeDocuments,
          { genreRessource: aParam.param.documents.genreRessource },
        );
      }
      H.push(
        '<div style="',
        ObjetStyle_1.GStyle.composeCouleurFond(
          (0, AccessApp_1.getApp)().getCouleur().fond,
        ),
        'margin:.8rem .4rem .8rem 0;">',
      );
      H.push(
        '<div style="',
        ObjetStyle_1.GStyle.composeCouleurTexte(
          (0, AccessApp_1.getApp)().getCouleur().grisTresFonce,
        ),
        '">',
        'Documents',
        '</div>',
      );
      H.push(
        '<div style="word-break: break-all;">',
        lListeDocuments,
        ' </div>',
      );
      H.push('</div>');
      return H.join('');
    };
    TUtilitaireBloc.composeZoneBoutonsAction = function (aParams) {
      const H = [];
      const lIdBtn = GUID_1.GUID.getId();
      H.push('<div class="zone-boutons-action">');
      if (aParams.param.menuContextuel && aParams.param.menuContextuel.actif) {
        const lJsxModelBouton = aParams.param.menuContextuel.jsxModelBouton;
        if (lJsxModelBouton) {
          if (IE.estMobile) {
            const lVisibility = 'visible';
            H.push(
              IE.jsx.str(IEHtml_BtnImage_1.BtnImage, {
                id: lIdBtn,
                ie_model: lJsxModelBouton,
                class: 'btnImageIcon icon_ellipsis_vertical',
                style:
                  'padding:1rem; ' +
                  (IE.estMobile ? 'font-size:1.2rem;' : 'font-size:2rem;') +
                  ' color: ' +
                  (0, AccessApp_1.getApp)().getCouleur().themeCouleur.foncee +
                  '; visibility:' +
                  lVisibility,
                title: GlossaireListe_1.TradGlossaireListe.BtnAction,
              }),
            );
          } else {
            let lLibelle = aParams.param.menuContextuel.libelle || '';
            if (!lLibelle) {
              lLibelle = 'Editer';
            }
            H.push(
              IE.jsx.str(
                IEHtml_Bouton_1.Bouton,
                { id: lIdBtn, ie_model: lJsxModelBouton, class: 'small-bt' },
                lLibelle,
              ),
            );
          }
        }
      }
      if (
        aParams.param.boutonsActions &&
        aParams.param.boutonsActions.length > 0
      ) {
        aParams.param.boutonsActions.forEach((aBouton) => {
          H.push(this.composeBtnAction(aBouton));
        });
      }
      H.push('</div>');
      return H.join('');
    };
    TUtilitaireBloc.composeTitre = function (aParams) {
      var _a;
      const H = [];
      H.push('<div class="Bloc_Titre_container Espace">');
      H.push(
        IE.jsx.str(
          'div',
          { class: 'Bloc_Titre' },
          aParams.titre ? aParams.titre : '&nbsp;',
        ),
      );
      if (
        (_a = aParams.infoSousTitre) === null || _a === void 0
          ? void 0
          : _a.avecInfo
      ) {
        H.push('<div class="Bloc_SSTitre">');
        H.push(aParams.infoSousTitre.strInfo);
        H.push('</div>');
      }
      H.push('</div>');
      return H.join('');
    };
    TUtilitaireBloc.composeContenu = function (aParams) {
      const H = [];
      if (!!aParams.htmlContenu) {
        H.push('<div style="color : var(--color-text); height:100%;">');
        H.push(aParams.htmlContenu);
        H.push('</div>');
      } else {
        H.push(this.composeMsgAucuneDonnee(aParams));
      }
      return H.join('');
    };
    TUtilitaireBloc.composeMsgAucuneDonnee = function (aParams) {
      const H = [];
      H.push(
        '<div class="PetitEspace Italique" style="margin: 3px;">',
        aParams.msg ? aParams.msg : '',
        '</div>',
      );
      return H.join('');
    };
  },
  fn: 'utilitairebloc.js',
});