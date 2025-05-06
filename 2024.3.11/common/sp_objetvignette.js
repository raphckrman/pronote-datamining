IE.fModule({
  f: function (exports, require, module, global) {
    require('ObjetVignette.css');
    const { Identite } = require('ObjetIdentite.js');
    const { GUID } = require('GUID.js');
    const { GHtml } = require('ObjetHtml.js');
    const { EGenreEtat } = require('Enumere_Etat.js');
    const { EGenreBoiteMessage } = require('Enumere_BoiteMessage.js');
    const { EGenreAction } = require('Enumere_Action.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { GChaine } = require('ObjetChaine.js');
    const { EGenreDocumentJoint } = require('Enumere_DocumentJoint.js');
    const {
      EFormatDocJoint,
      EFormatDocJointUtil,
    } = require('Enumere_FormatDocJoint.js');
    const ETypeEtatVignette = {
      survol: 'survol',
      selectionne: 'selectionne',
      nonSelectionne: 'nonSelectionne',
    };
    const ETypeEvntVignette = {
      suppression: 'suppression',
      editionLegende: 'editionLegende',
      selectionVignette: 'selectionVignette',
    };
    class ObjetVignette extends Identite {
      constructor(...aParams) {
        super(...aParams);
        this.ids = { vignette: GUID.getId() };
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
                  this.estSurvole = true;
                  _actualiserSelonEtat.call(this);
                }.bind(aInstance),
                mouseout: function () {
                  this.estSurvole = false;
                  _actualiserSelonEtat.call(this);
                }.bind(aInstance),
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
                _actualiserSelonEtat.call(aInstance);
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
              const lMsg = GTraductions.getValeur('MsgConfirmSupprDe', [
                aInstance.donnees.data.libelle ||
                  (aInstance.donnees.data.documentCasier
                    ? aInstance.donnees.data.documentCasier.getLibelle()
                    : ''),
              ]);
              GApplication.getMessage().afficher({
                type: EGenreBoiteMessage.Confirmation,
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
                _ouvrirLien.call(this);
              }.bind(aInstance),
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
                      _ouvrirLien.call(this);
                    }.bind(aInstance),
                  });
                $(this).remove();
              },
            };
            $(this.node).on(lMap);
          },
          getNodeDoc: function () {
            const lMap = {
              click: function () {
                _ouvrirLien.call(this);
              }.bind(aInstance),
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
            GHtml.composeAttr('ie-node', 'getNodeVignette'),
            ' style="',
            lWidth,
            '">',
          );
          if (this.param.avecImage) {
            H.push('<div class="zoneImage" style="', lHeight, '">');
            if (this.donnees.estImg === true) {
              const lLibelleImgViewer = this.donnees.data.libelle;
              H.push(
                '<img ie-load-src="',
                this.donnees.lien,
                '" ',
                this.param.avecImgViewer
                  ? ' ie-imgviewer '
                  : 'ie-node="getNodePhoto" ',
                this.param.avecImgViewer
                  ? 'data-libelle="' +
                      GChaine.toAttrValue(lLibelleImgViewer) +
                      '"'
                  : '',
                ' alt="',
                GChaine.toAttrValue(this.param.altImage || lLibelleImgViewer),
                '" tabindex="0"/>',
              );
            } else {
              let lIcon = '';
              const lGenreFichier = EFormatDocJointUtil.getGenreDeFichier(
                GChaine.extraireExtensionFichier(
                  this.donnees.data.documentCasier.getLibelle(),
                ),
              );
              if (lGenreFichier !== EFormatDocJoint.Inconnu) {
                lIcon = EFormatDocJointUtil.getClassIconDeGenre(lGenreFichier);
              } else {
                if (
                  this.donnees.data.documentCasier.getGenre() ===
                  EGenreDocumentJoint.Cloud
                ) {
                  lIcon = 'icon_cloud';
                } else if (
                  this.donnees.data.documentCasier.getGenre() ===
                  EGenreDocumentJoint.Url
                ) {
                  lIcon = 'icon_globe';
                } else if (
                  this.donnees.data.documentCasier.getGenre() ===
                  EGenreDocumentJoint.LienKiosque
                ) {
                  lIcon = 'icon_external_link';
                } else if (
                  this.donnees.data.documentCasier.getGenre() ===
                  EGenreDocumentJoint.LienVisio
                ) {
                  lIcon = 'icon_cours_virtuel';
                } else {
                  lIcon = 'icon_file_alt';
                }
              }
              const lTaillePoliceIcone = this.param.taillePoliceIcone;
              H.push(
                '<div class="docs-wrapper" ie-node="getNodeDoc">',
                '<i class="',
                lIcon,
                '" style="font-size:',
                lTaillePoliceIcone,
                'px;"></i>',
                this.param.avecSelection
                  ? '<div class="libelle m-top-l ellipsis-multilignes" title="' +
                      this.donnees.data.libelle +
                      '">' +
                      this.donnees.data.libelle +
                      '</div>'
                  : '',
                '</div>',
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
                GTraductions.getValeur('blog.billet.titre'),
                '</div>',
              );
              H.push(
                '<input type="text" class="round-style" ie-model="legendeVignette" style="width:100%" placeholder="',
                GTraductions.getValeur('blog.billet.rediger'),
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
        if (aAccepte !== EGenreAction.Valider) {
          return;
        }
        const lData = this.donnees.data;
        lData.setEtat(EGenreEtat.Suppression);
        this.callback.appel({
          evnt: ETypeEvntVignette.suppression,
          data: lData,
          vignette: this.donnees,
        });
      }
    }
    function _getEtatCourant() {
      return this.param.avecSurvol && this.estSurvole === true
        ? ETypeEtatVignette.survol
        : this.param.avecSelection && this.estSelectionne
          ? ETypeEtatVignette.selectionne
          : ETypeEtatVignette.nonSelectionne;
    }
    function getClassEtat() {
      const lEtat = _getEtatCourant.call(this);
      switch (lEtat) {
        case ETypeEtatVignette.survol:
          return 'survol';
        case ETypeEtatVignette.selectionne:
          return 'selectionne';
        case ETypeEtatVignette.nonSelectionne:
          return 'nonSelectionne';
      }
    }
    function _actualiserSelonEtat() {
      const lClassEtat = getClassEtat.call(this);
      $('#' + this.ids.vignette.escapeJQ())
        .removeClass('nonSelectionne survol selectionne')
        .addClass(lClassEtat);
    }
    function _ouvrirLien() {
      window.open(this.donnees.lien);
    }
    module.exports = { ObjetVignette, ETypeEvntVignette };
  },
  fn: 'objetvignette.js',
});