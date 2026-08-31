IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetVignette = exports.ETypeEvntVignette = void 0;
    require('@cp/Espace/Css/ObjetVignette.css');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const Enumere_FormatDocJoint_1 = require('@cp/Produit/Script/Enumere/Enumere_FormatDocJoint');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_Chips_1 = require('@cp/Produit/Script/IEHtml.Chips');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const IEHtml_ImgViewer_1 = require('@cp/Produit/Script/IEHtml.ImgViewer');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    const IconeSvgCloud_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCloud');
    const IconeSvgGlobe_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgGlobe');
    const IconeSvgExternal_link_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgExternal_link');
    const IconeSvgCours_virtuel_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgCours_virtuel');
    const IconeSvgFile_alt_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFile_alt');
    const IconeSvgRemove_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgRemove');
    var ETypeEtatVignette;
    (function (ETypeEtatVignette) {
      ETypeEtatVignette['survol'] = 'survol';
      ETypeEtatVignette['selectionne'] = 'selectionne';
      ETypeEtatVignette['nonSelectionne'] = 'nonSelectionne';
    })(ETypeEtatVignette || (ETypeEtatVignette = {}));
    var ETypeEvntVignette;
    (function (ETypeEvntVignette) {
      ETypeEvntVignette['suppression'] = 'suppression';
      ETypeEvntVignette['editionLegende'] = 'editionLegende';
      ETypeEvntVignette['selectionVignette'] = 'selectionVignette';
    })(
      ETypeEvntVignette || (exports.ETypeEvntVignette = ETypeEvntVignette = {}),
    );
    class ObjetVignette extends ObjetIdentite_1.Identite {
      constructor() {
        super(...arguments);
        this.ids = { vignette: GUID_1.GUID.getId() };
        this.default = {
          largeur: 150,
          hauteur: 150,
          hauteurEntete: 30,
          avecImage: false,
          estDiapo: false,
          avecEtiquette: false,
          avecSelection: true,
          avecSurvol: true,
          avecSuppression: false,
          avecEditionLegende: false,
          sansBlocLibelle: false,
          altImage: '',
        };
        this.estSurvole = false;
        this.estSelectionne = false;
        this.donneesRecues = false;
      }
      jsxNodeDoc(aNode) {
        const lMap = {
          click: () => {
            this._ouvrirLien();
          },
        };
        $(aNode).on(lMap);
      }
      jsxNodeVignette(aNode) {
        if (this.param.avecSurvol === true) {
          const lMap = {
            mouseover: () => {
              this.estSurvole = true;
              this._actualiserSelonEtat();
            },
            mouseout: () => {
              this.estSurvole = false;
              this._actualiserSelonEtat();
            },
          };
          $(aNode).on(lMap);
        }
      }
      jsxModelInputLegendeVignette() {
        return {
          getValue: () => {
            return !!this.donnees ? this.donnees.data.libelle || '' : '';
          },
          setValue: (aValue) => {
            this.donnees.data.libelle = aValue;
            this.donnees.data.libelleEnModification = true;
          },
        };
      }
      setParam(aParam) {
        this.param = $.extend(this.default, aParam);
      }
      setDonnees(aParam) {
        this.donneesRecues = true;
        this.donnees = aParam;
        this.data = aParam.data;
        if (
          this.data.estSelectionne !== null &&
          this.data.estSelectionne !== undefined
        ) {
          this.estSelectionne = this.data.estSelectionne;
        }
      }
      jsxDisplayCheckboxSelection() {
        return this.param.avecSelection;
      }
      jsxModelCheckboxSelection() {
        return {
          getValue: () => {
            return !!this.donnees.data.estSelectionne;
          },
          setValue: (aValue) => {
            if (this.param.avecSelection) {
              const lData = this.donnees.data;
              lData.estSelectionne = aValue;
              this.estSelectionne = aValue;
              this._actualiserSelonEtat();
              this.callback.appel({
                evnt: ETypeEvntVignette.selectionVignette,
                data: lData,
                estSelectionne: aValue,
              });
            }
          },
        };
      }
      jsxModeleBoutonSupprimer() {
        return {
          event: (aEvent) => {
            const lMsg = 'Confirmez-vous la suppression de %s ?'
                    : ''),
              ],
            );
            (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
                message: lMsg,
                callback: (aAccepte) => {
                  this.evntSuppr(aAccepte);
                },
              });
            aEvent.stopPropagation();
          },
        };
      }
      afficher() {
        var _a, _b, _c, _d, _e;
        var _f, _g;
        const H = [];
        if (this.donneesRecues && this.param && this.donnees) {
          const lHeight =
            this.param.avecImage && this.param.hauteur > 0
              ? 'height:' + this.param.hauteur + 'px;'
              : '';
          const lWidth =
            this.param.avecImage && this.param.largeur > 0
              ? 'width:' + this.param.largeur + 'px;'
              : '';
          const lHautLien = this.param.hauteurEntete || 0;
          const lDivZoneImage = [];
          if (this.param.avecImage) {
            const lDivImage = [];
            if (this.donnees.estImg === true) {
              const lLibelleImgViewer = this.donnees.data.libelle;
              lDivImage.push(
                IE.jsx.str(IEHtml_ImgViewer_1.ImgViewer, {
                  src:
                    (_f = this.donnees.lien) !== null && _f !== void 0
                      ? _f
                      : '',
                  alt: lLibelleImgViewer || this.param.altImage,
                }),
              );
            } else {
              let lIcon = '';
              const lGenreFichier =
                Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
                  ObjetChaine_1.GChaine.extraireExtensionFichier(
                    (_g =
                      (_a = this.donnees.data.documentCasier) === null ||
                      _a === void 0
                        ? void 0
                        : _a.getLibelle()) !== null && _g !== void 0
                      ? _g
                      : '',
                  ),
                );
              if (
                lGenreFichier !==
                Enumere_FormatDocJoint_1.EFormatDocJoint.Inconnu
              ) {
                lIcon =
                  Enumere_FormatDocJoint_1.EFormatDocJointUtil.getSvgIconDeGenre(
                    lGenreFichier,
                  );
              } else {
                if (
                  ((_b = this.donnees.data.documentCasier) === null ||
                  _b === void 0
                    ? void 0
                    : _b.getGenre()) ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.Cloud
                ) {
                  lIcon = IE.jsx.str(IconeSvgCloud_1.IconeSvgCloud, null);
                } else if (
                  ((_c = this.donnees.data.documentCasier) === null ||
                  _c === void 0
                    ? void 0
                    : _c.getGenre()) ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
                ) {
                  lIcon = IE.jsx.str(IconeSvgGlobe_1.IconeSvgGlobe, null);
                } else if (
                  ((_d = this.donnees.data.documentCasier) === null ||
                  _d === void 0
                    ? void 0
                    : _d.getGenre()) ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.LienKiosque
                ) {
                  lIcon = IE.jsx.str(
                    IconeSvgExternal_link_1.IconeSvgExternal_link,
                    null,
                  );
                } else if (
                  ((_e = this.donnees.data.documentCasier) === null ||
                  _e === void 0
                    ? void 0
                    : _e.getGenre()) ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.LienVisio
                ) {
                  lIcon = IE.jsx.str(
                    IconeSvgCours_virtuel_1.IconeSvgCours_virtuel,
                    null,
                  );
                } else {
                  lIcon = IE.jsx.str(IconeSvgFile_alt_1.IconeSvgFile_alt, null);
                }
              }
              const lClasseTailleIcone = this.param.classeTailleIcone;
              lDivImage.push(
                IE.jsx.str(
                  'div',
                  {
                    class: ['docs-wrapper', lClasseTailleIcone],
                    ie_node: this.jsxNodeDoc.bind(this),
                  },
                  lIcon,
                  this.param.avecSelection
                    ? IE.jsx.str(
                        'div',
                        {
                          class: 'libelle m-top-l ellipsis-multilignes',
                          title: this.donnees.data.libelle,
                        },
                        ' ',
                        this.donnees.data.libelle,
                      )
                    : '',
                ),
              );
            }
            const lDivEtiquette = [];
            if (this.param.avecEtiquette && this.donnees.strEtiquette) {
              lDivEtiquette.push(
                IE.jsx.str(
                  IEHtml_Chips_1.ChipsEtiquette,
                  { class: 'etiquette color-theme' },
                  this.donnees.strEtiquette,
                ),
              );
            }
            const lElementSelectionOuSuppression = [];
            if (this.param.avecSelection) {
              lElementSelectionOuSuppression.push(
                IE.jsx.str(IEHtml_CheckboxRadio_1.Checkbox, {
                  class: 'actionHautDroite',
                  ie_model: this.jsxModelCheckboxSelection.bind(this),
                  ie_display: this.jsxDisplayCheckboxSelection.bind(this),
                }),
              );
            } else if (this.param.avecSuppression) {
              lElementSelectionOuSuppression.push(
                IE.jsx.str(
                  IEHtml_BtnImage_1.BtnIcon,
                  {
                    ie_model: this.jsxModeleBoutonSupprimer.bind(this),
                    ie_tooltiplabel: GlossaireCP_1.TradGlossaireCP.Supprimer,
                    class: 'actionHautDroite',
                  },
                  IE.jsx.str(IconeSvgRemove_1.IconeSvgRemove, null),
                ),
              );
            }
            lDivZoneImage.push(
              IE.jsx.str(
                'div',
                { class: 'zoneImage', style: lHeight },
                lDivImage.join(''),
                lDivEtiquette.join(''),
                lElementSelectionOuSuppression.join(''),
              ),
            );
          }
          const lDivLibelleOuLien = [];
          if (!this.param.avecSelection && !this.param.sansBlocLibelle) {
            lDivLibelleOuLien.push(
              '<div style="height:',
              lHautLien,
              'px;" class="zoneLibelle',
              this.param.avecImage ? '' : ' sansImage',
              this.param.avecEditionLegende ? ' edit' : '',
              !this.param.avecSelection ? ' centrer' : '',
              '">',
            );
            if (this.param.avecEditionLegende) {
              const lIdLegende = GUID_1.GUID.getId();
              lDivLibelleOuLien.push(
                '<div class="m-top-xl" style="width:100%">',
              );
              lDivLibelleOuLien.push(
                IE.jsx.str(
                  'label',
                  { class: 'ie-titre-petit', for: lIdLegende },
                  'Titre',
                ),
              );
              lDivLibelleOuLien.push(
                IE.jsx.str('input', {
                  type: 'text',
                  id: lIdLegende,
                  ie_model: this.jsxModelInputLegendeVignette.bind(this),
                  style: 'width:100%',
                  placeholder: 'Rédiger',
                }),
              );
              lDivLibelleOuLien.push('</div>');
            } else {
              lDivLibelleOuLien.push(
                IE.jsx.str(
                  'div',
                  { class: 'ellipsis-multilignes' },
                  this.donnees.data.libelle,
                ),
              );
            }
            lDivLibelleOuLien.push('</div>');
          }
          const lClasses = ['vignette nonSelectionne'];
          if (this.param.estDiapo) {
            lClasses.push('modeDiapo');
          }
          H.push(
            IE.jsx.str(
              'div',
              {
                class: lClasses.join(' '),
                id: this.ids.vignette,
                ie_node: this.jsxNodeVignette.bind(this),
                style: lWidth,
              },
              lDivZoneImage.join(''),
              lDivLibelleOuLien.join(''),
            ),
          );
        }
        return H.join('');
      }
      evntSuppr(aAccepte) {
        if (aAccepte !== Enumere_Action_1.EGenreAction.Valider) {
          return;
        }
        const lData = this.donnees.data;
        lData.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
        this.callback.appel({
          evnt: ETypeEvntVignette.suppression,
          data: lData,
          vignette: this.donnees,
        });
      }
      _getEtatCourant() {
        return this.param.avecSurvol && this.estSurvole === true
          ? ETypeEtatVignette.survol
          : this.param.avecSelection && this.estSelectionne
            ? ETypeEtatVignette.selectionne
            : ETypeEtatVignette.nonSelectionne;
      }
      getClassEtat() {
        const lEtat = this._getEtatCourant();
        switch (lEtat) {
          case ETypeEtatVignette.survol:
            return 'survol';
          case ETypeEtatVignette.selectionne:
            return 'selectionne';
          case ETypeEtatVignette.nonSelectionne:
            return 'nonSelectionne';
        }
      }
      _actualiserSelonEtat() {
        const lClassEtat = this.getClassEtat();
        $('#' + this.ids.vignette.escapeJQ())
          .removeClass('nonSelectionne survol selectionne')
          .addClass(lClassEtat);
      }
      _ouvrirLien() {
        window.open(this.donnees.lien);
      }
    }
    exports.ObjetVignette = ObjetVignette;
  },
  fn: 'objetvignette.js',
});