IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetVignette = exports.ETypeEvntVignette = void 0;
    require('ObjetVignette.css');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const GUID_1 = require('GUID');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const Enumere_Action_1 = require('Enumere_Action');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetChaine_1 = require('ObjetChaine');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const Enumere_FormatDocJoint_1 = require('Enumere_FormatDocJoint');
    const AccessApp_1 = require('AccessApp');
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
          avecImgViewer: true,
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
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getNodeVignette: function () {
            if (aInstance.param.avecSurvol === true) {
              const lMap = {
                mouseover: function () {
                  aInstance.estSurvole = true;
                  aInstance._actualiserSelonEtat();
                }.bind(aInstance),
                mouseout: function () {
                  aInstance.estSurvole = false;
                  aInstance._actualiserSelonEtat();
                },
              };
              $(this.node).on(lMap);
            }
          },
          cbSelection: {
            getValue: function () {
              return aInstance.donnees.data.estSelectionne;
            },
            setValue: function (aValue) {
              if (aInstance.param.avecSelection) {
                const lData = aInstance.donnees.data;
                lData.estSelectionne = aValue;
                aInstance.estSelectionne = aValue;
                aInstance._actualiserSelonEtat();
                aInstance.callback.appel({
                  evnt: ETypeEvntVignette.selectionVignette,
                  data: lData,
                  estSelectionne: aValue,
                });
              }
            },
          },
          estCbSelectionVisible: function () {
            return aInstance.param.avecSelection;
          },
          btnSuppr: {
            event(aEvent) {
              const lMsg = 'Confirmez-vous la suppression de %s ?'
                      : ''),
                ],
              );
              (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({
                  type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
                  message: lMsg,
                  callback: function (aAccepte) {
                    aInstance.evntSuppr(aAccepte);
                  },
                });
              aEvent.stopPropagation();
            },
          },
          legendeVignette: {
            getValue: function () {
              return !!aInstance.donnees ? aInstance.donnees.data.libelle : '';
            },
            setValue: function (aValue) {
              aInstance.donnees.data.libelle = aValue;
              aInstance.donnees.data.libelleEnModification = true;
            },
          },
          getNodePhoto: function () {
            const lMap = {
              click: function () {
                aInstance._ouvrirLien();
              },
              error: function () {
                $(this)
                  .parent()
                  .append(
                    '<div style="text-align:center; width:100%;" ie-node="getNodeDoc"><i class="icon_warning_sign" style="font-size:30px;"></i></div>',
                  );
                $(this)
                  .parent()
                  .on({
                    click: function () {
                      aInstance._ouvrirLien();
                    },
                  });
                $(this).remove();
              },
            };
            $(this.node).on(lMap);
          },
          getNodeDoc: function () {
            const lMap = {
              click: function () {
                aInstance._ouvrirLien();
              },
            };
            $(this.node).on(lMap);
          },
        });
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
      afficher() {
        const H = [];
        if (this.donneesRecues) {
          const lHeight =
            this.param.avecImage && this.param.hauteur > 0
              ? 'height:' + this.param.hauteur + 'px;'
              : '';
          const lWidth =
            this.param.avecImage && this.param.largeur > 0
              ? 'width:' + this.param.largeur + 'px;'
              : '';
          const lHautLien = this.param.hauteurEntete;
          H.push(
            '<div class="vignette ',
            this.param.estDiapo ? ' modeDiapo ' : '',
            ' nonSelectionne" id="',
            this.ids.vignette,
            '" ',
            ObjetHtml_1.GHtml.composeAttr('ie-node', 'getNodeVignette'),
            ' style="',
            lWidth,
            '">',
          );
          if (this.param.avecImage) {
            H.push('<div class="zoneImage" style="', lHeight, '">');
            if (this.donnees.estImg === true) {
              const lLibelleImgViewer = this.donnees.data.libelle;
              H.push(
                IE.jsx.str('img', {
                  'ie-load-src': this.donnees.lien,
                  'ie-imgviewer': this.param.avecImgViewer || false,
                  'ie-node': this.param.avecImgViewer ? false : 'getNodePhoto',
                  'data-libelle': this.param.avecImgViewer
                    ? lLibelleImgViewer
                    : false,
                  alt: lLibelleImgViewer || this.param.altImage,
                  tabindex: '0',
                }),
              );
            } else {
              let lIcon = '';
              const lGenreFichier =
                Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
                  ObjetChaine_1.GChaine.extraireExtensionFichier(
                    this.donnees.data.documentCasier.getLibelle(),
                  ),
                );
              if (
                lGenreFichier !==
                Enumere_FormatDocJoint_1.EFormatDocJoint.Inconnu
              ) {
                lIcon =
                  Enumere_FormatDocJoint_1.EFormatDocJointUtil.getClassIconDeGenre(
                    lGenreFichier,
                  );
              } else {
                if (
                  this.donnees.data.documentCasier.getGenre() ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.Cloud
                ) {
                  lIcon = 'icon_cloud';
                } else if (
                  this.donnees.data.documentCasier.getGenre() ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
                ) {
                  lIcon = 'icon_globe';
                } else if (
                  this.donnees.data.documentCasier.getGenre() ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.LienKiosque
                ) {
                  lIcon = 'icon_external_link';
                } else if (
                  this.donnees.data.documentCasier.getGenre() ===
                  Enumere_DocumentJoint_1.EGenreDocumentJoint.LienVisio
                ) {
                  lIcon = 'icon_cours_virtuel';
                } else {
                  lIcon = 'icon_file_alt';
                }
              }
              const lTaillePoliceIcone = this.param.taillePoliceIcone;
              H.push(
                IE.jsx.str(
                  'div',
                  { class: 'docs-wrapper', 'ie-node': 'getNodeDoc' },
                  IE.jsx.str('i', {
                    class: lIcon,
                    style: { 'font-size': lTaillePoliceIcone },
                    role: 'presentation',
                  }),
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
            if (this.param.avecEtiquette && this.donnees.strEtiquette) {
              H.push(
                '<ie-chips class="etiquette tag-style color-theme">',
                this.donnees.strEtiquette,
                '</ie-chips>',
              );
            }
            if (this.param.avecSelection) {
              H.push(
                '<ie-checkbox class="actionHautDroite" ie-model="cbSelection" ie-display="estCbSelectionVisible"></ie-checkbox>',
              );
            } else if (this.param.avecSuppression) {
              H.push(
                '<ie-btnicon ie-model="btnSuppr" class="icon_remove actionHautDroite"></ie-btnicon>',
              );
            }
            H.push('</div>');
          }
          if (!this.param.avecSelection && !this.param.sansBlocLibelle) {
            H.push(
              '<div style="height:',
              lHautLien,
              'px;" class="zoneLibelle',
              this.param.avecImage ? '' : ' sansImage',
              this.param.avecEditionLegende ? ' edit' : '',
              !this.param.avecSelection ? ' centrer' : '',
              '">',
            );
            if (this.param.avecEditionLegende) {
              H.push('<div class="m-top-xl" style="width:100%">');
              H.push(
                '<div class="ie-titre-petit">',
                'Titre',
                '</div>',
              );
              H.push(
                '<input type="text"  ie-model="legendeVignette" style="width:100%" placeholder="',
                'Rédiger',
                '"/>',
              );
              H.push('</div>');
            } else {
              H.push(
                '<div class="ellipsis-multilignes" title="',
                this.donnees.data.libelle,
                '">',
                this.donnees.data.libelle,
                '</div>',
              );
            }
            H.push('</div>');
          }
          H.push('</div>');
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