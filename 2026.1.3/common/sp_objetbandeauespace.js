IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetBandeauEspace = void 0;
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const UtilitaireChangementLangue_1 = require('@cp/Produit/Script/UtilitaireChangementLangue');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ToucheClavier_1 = require('@cp/Produit/Script/ToucheClavier');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const Tooltip_1 = require('@cp/Produit/Script/Tooltip');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const GestionnaireModale_1 = require('@cp/Produit/Script/GestionnaireModale');
    const IconeSvgUniF2C3_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgUniF2C3');
    const IconeSvgQr_code_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgQr_code');
    const IconeSvgOff_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgOff');
    require('@cp/Produit/Css/ObjetBandeauEspace.css');
    class ObjetBandeauEspace extends ObjetIdentite_1.Identite {
      constructor(aParams = {}) {
        super(aParams);
        this.params = {
          labelConteneur: '',
          urlLogoEtab: GParametres.urlLogo,
          nomEtab: GParametres.NomEtablissementConnexion
            ? GParametres.NomEtablissementConnexion
            : GParametres.NomEtablissement,
          getNomUtil: undefined,
          attrUtil: null,
          ariaLabelUtil: '',
          classUtil: '',
          photo: undefined,
          avecLogoProduitCss: true,
          logoProduitCss: GParametres.logoProduitCss || '',
          logoProduitUrl:
            GParametres.urlSiteIndexEducation ||
            'https://www.index-education.com',
          labelLienProduit: GParametres.labelLienProduit || '',
          logoDepartementImage: '',
          logoDepartementLien: '',
          mention: GParametres.lienMentions,
          avecLangue: true,
          getObjetSelecteurMembre: undefined,
          htmlBoutonFicheEleve: undefined,
          htmlBoutonsAvantNotif: undefined,
          getObjetNotification: undefined,
          getObjetAide: undefined,
          htmlBoutons: '',
          iconesADroite: false,
          clickUtilisateur: undefined,
          clickDeconnexion: undefined,
          clickAccesMobile: undefined,
          clickEtablissement: null,
          isEDT: false,
          avecFicheEtablissement: false,
          avecLiensEvitement: false,
          liensEvitement: {
            menuOnglet: false,
            urlDeclarationAccessibilite: undefined,
            clickPlanSite: undefined,
          },
          avecImageCollectivite: true,
        };
      }
      jsxNodeRacine(aNode) {
        $(window).on('resize.ObjetBandeauEspace', () => {
          this._resize();
        });
        $(aNode).on('destroyed', () => {
          $(window).off('resize.ObjetBandeauEspace');
        });
      }
      jsxNodeNomEtablissement(aNode) {
        if (this.params.clickEtab) {
          $(aNode).on('click keyup', (aEvent) => {
            if (
              aEvent.type === 'keyup' &&
              !(
                aEvent.which === ToucheClavier_1.ToucheClavier.Espace ||
                aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot
              )
            ) {
              return;
            }
            aEvent.originalEvent.__clickZone__ = true;
            this.params.clickEtab();
          });
          return;
        }
      }
      jsxNodeCentre(aNode) {}
      jsxNodeEtablissement(aNode) {
        if (this.params.clickEtablissement) {
          $(aNode).on('validation', (aEvent) => {
            this.params.clickEtablissement();
            aEvent.stopPropagation();
          });
        }
      }
      jsxNodeUtil(aNode) {
        $(aNode).on('click keyup', (aEvent) => {
          if (
            aEvent.type === 'keyup' &&
            !(
              aEvent.which === ToucheClavier_1.ToucheClavier.Espace ||
              aEvent.which === ToucheClavier_1.ToucheClavier.RetourChariot
            )
          ) {
            return;
          }
          aEvent.originalEvent.__clickZone__ = true;
          this.params.clickUtilisateur(aEvent, aNode);
        });
      }
      jsxNodeNotif(aNode) {
        $(aNode).on('validation', (aEvent) => {
          aEvent.originalEvent.__clickZone__ = true;
        });
      }
      jsxGetHtmlUtil() {
        return this.params.getNomUtil ? this.params.getNomUtil() : '';
      }
      jsxNodeImgPhoto(aNode) {
        $(aNode).on('error', function () {
          $(this).parent().find('.ibe_util_photo_i').show();
          $(this).remove();
        });
      }
      jsxGetHtmlPhoto() {
        var _a;
        const lUrl = (
          (_a = this.params.photo) === null || _a === void 0
            ? void 0
            : _a.getUrlPhoto
        )
          ? this.params.photo.getUrlPhoto()
          : '';
        if (lUrl) {
          return [
            IE.jsx.str(
              IE.jsx.fragment,
              null,
              IE.jsx.str('img', {
                src: lUrl,
                style: 'width:100%;',
                ie_node: this.jsxNodeImgPhoto.bind(this),
                alt: this.params.getNomUtil
                  ? 'Photo de %s',
                    ])
                  : '',
              }),
              IE.jsx.str(
                'div',
                {
                  class: 'ibe_util_photo_i',
                  style: lUrl ? 'display:none' : false,
                },
                IE.jsx.str('i', { class: 'icon_utilisateur' }),
              ),
            ),
          ].join('');
        }
        return '';
      }
      setParametres(aParams) {
        Object.assign(this.params, aParams);
      }
      jsxEventValidationContenu() {
        var _a, _b;
        const lInterfaceRacine =
          (_b = (_a = (0, AccessApp_1.getApp)()).getInterfaceRacine) === null ||
          _b === void 0
            ? void 0
            : _b.call(_a);
        if (
          lInterfaceRacine === null || lInterfaceRacine === void 0
            ? void 0
            : lInterfaceRacine.setFocusPremierObjet
        ) {
          lInterfaceRacine.setFocusPremierObjet();
        } else {
          ObjetHtml_1.GHtml.setFocus($('#breadcrumbBandeau').get(0));
        }
      }
      jsxFuncAttrBanner() {
        return { tabindex: this.params.avecLiensEvitement ? -1 : 0 };
      }
      jsxFuncAttrUtil() {
        const lNom = this.params.getNomUtil ? this.params.getNomUtil() : '';
        const lLabelUtil = this.params.ariaLabelUtil;
        const lLibelle =
          (lNom ? lNom + (lLabelUtil ? ' - ' : '') : '') +
          (lLabelUtil ? lLabelUtil : '');
        return { 'aria-label': lLibelle };
      }
      jsxIfAvecUtil() {
        return this.params.getNomUtil ? !!this.params.getNomUtil() : false;
      }
      jsxIfAvecPhoto() {
        var _a;
        return (
          (_a = this.params.photo) === null || _a === void 0
            ? void 0
            : _a.getUrlPhoto
        )
          ? this.params.photo.getUrlPhoto() !== ''
          : false;
      }
      construireAffichage() {
        const lParams = Object.assign({}, this.params);
        if (lParams.getNomUtil) {
          lParams.labelConteneur =
            ObjetChaine_1.GChaine.enleverEntites(lParams.getNomUtil()) +
            ' ' +
            lParams.labelConteneur;
        }
        return IE.jsx.str(
          'header',
          {
            class: 'ObjetBandeauEspace',
            ie_node: this.jsxNodeRacine.bind(this),
            ie_attr: this.jsxFuncAttrBanner.bind(this),
            role: 'banner',
            'aria-label': lParams.labelConteneur,
          },
          (H) => {
            var _a;
            if (lParams.avecLiensEvitement && lParams.liensEvitement) {
              H.push(
                lParams.liensEvitement.menuOnglet
                  ? IE.jsx.str(
                      'a',
                      {
                        role: 'link',
                        class: 'evitement',
                        tabindex: '0',
                        ie_eventmap: {
                          validation: () =>
                            Invocateur_1.Invocateur.evenement(
                              'focus.menu_navigation',
                            ),
                        },
                      },
                      'Accéder au menu',
                    )
                  : '',
                IE.jsx.str(
                  'a',
                  {
                    role: 'link',
                    class: 'evitement',
                    tabindex: '0',
                    ie_eventmap: {
                      validation: this.jsxEventValidationContenu.bind(this),
                    },
                  },
                  'Accéder au contenu',
                ),
                lParams.liensEvitement.urlDeclarationAccessibilite
                  ? IE.jsx.str(
                      'a',
                      {
                        class: 'evitement',
                        tabindex: '0',
                        href: lParams.liensEvitement
                          .urlDeclarationAccessibilite,
                      },
                      'Déclaration d'accessibilité',
                    )
                  : '',
                lParams.liensEvitement.clickPlanSite
                  ? IE.jsx.str(
                      'a',
                      {
                        role: 'button',
                        'aria-haspopup': 'dialog',
                        class: 'evitement',
                        tabindex: '0',
                        ie_eventmap: {
                          validation: () => {
                            var _a, _b;
                            return (_b =
                              (_a = this.params.liensEvitement) === null ||
                              _a === void 0
                                ? void 0
                                : _a.clickPlanSite) === null || _b === void 0
                              ? void 0
                              : _b.call(_a);
                          },
                        },
                      },
                      'Plan du site',
                    )
                  : '',
              );
            }
            H.push('<div class="ibe_gauche">');
            const lImageCollectiviteDepartement =
              lParams.logoCollectiviteImage || lParams.logoDepartementImage;
            if (
              !!lImageCollectiviteDepartement &&
              lParams.avecImageCollectivite
            ) {
              let lLienCollectiviteDepartement = lParams.logoDepartementLien;
              let lLabelImageCollectiviteDepartement =
                'Logo du département';
              let lLabelUrlColletiviteDepartement =
                'Accéder au site du departement';
              if (
                lParams.logoCollectiviteLien &&
                lParams.logoCollectiviteImage
              ) {
                lLienCollectiviteDepartement = lParams.logoCollectiviteLien;
              }
              if (lParams.labelImageCollectivite) {
                lLabelImageCollectiviteDepartement =
                  lParams.labelImageCollectivite;
              }
              if (lParams.labelUrlCollectivite) {
                lLabelUrlColletiviteDepartement = lParams.labelUrlCollectivite;
              }
              const lgetNodeImage = (aNode) => {
                $(aNode).on({
                  load: () => {
                    this._resize();
                  },
                  error: () => {
                    $(aNode).parent().remove();
                  },
                });
              };
              H.push(
                IE.jsx.str(
                  'a',
                  {
                    href: lLienCollectiviteDepartement || false,
                    target: '_blank',
                    class: 'ibe_image_dep',
                    ie_tooltiplabel:
                      lLabelUrlColletiviteDepartement !== null &&
                      lLabelUrlColletiviteDepartement !== void 0
                        ? lLabelUrlColletiviteDepartement
                        : false,
                  },
                  IE.jsx.str('img', {
                    src: lImageCollectiviteDepartement,
                    alt: lLabelImageCollectiviteDepartement,
                    ie_node: lgetNodeImage,
                  }),
                ),
              );
            }
            if (lParams.urlLogoEtab) {
              const lgetNodeImage = (aNode) => {
                $(aNode).on({
                  load: () => {
                    this._resize();
                  },
                  error: () => {
                    $(aNode).remove();
                  },
                });
              };
              H.push(
                IE.jsx.str(
                  'div',
                  {
                    ie_node: this.jsxNodeNomEtablissement.bind(this),
                    class: [
                      'ibe_image_etab',
                      lParams.clickEtab ? 'ibe_actif' : '',
                    ],
                    role: 'presentation',
                  },
                  IE.jsx.str('img', {
                    src: lParams.urlLogoEtab,
                    alt: 'Logo de l'établissement',
                    ie_node: lgetNodeImage,
                  }),
                ),
              );
            }
            H.push('</div>');
            const lDivPhoto = [];
            if (lParams.photo) {
              lDivPhoto.push(
                IE.jsx.str(
                  'div',
                  Object.assign(
                    {
                      class: [
                        'ibe_util_photo',
                        lParams.clickUtilisateur ? ' ibe_actif' : '',
                      ],
                      ie_if: this.jsxIfAvecPhoto.bind(this),
                      ie_html: this.jsxGetHtmlPhoto.bind(this),
                      ie_node: this.jsxNodeUtil.bind(this),
                    },
                    lParams.attrUtil || {},
                    {
                      'aria-label':
                        ((_a = lParams.ariaLabelUtil) === null || _a === void 0
                          ? void 0
                          : _a.toAttrValue()) || false,
                      'aria-hidden': 'true',
                    },
                  ),
                ),
              );
            }
            const lDivNomEtablissement = [];
            if (lParams.nomEtab || lParams.avecFicheEtablissement) {
              const lBtnContacterEtablissement = [];
              if (lParams.avecFicheEtablissement) {
                lBtnContacterEtablissement.push(
                  IE.jsx.str(
                    IEHtml_BtnImage_1.BtnIcon,
                    {
                      class: 'AvecMain',
                      ie_tooltiplabel: 'Contacter l'établissement',
                      'aria-haspopup': 'dialog',
                    },
                    IE.jsx.str(IconeSvgUniF2C3_1.IconeSvgUniF2C3, null),
                  ),
                );
              }
              let lNodeNomEtablissement = false;
              const lClasses = [];
              if (!!lParams.nomEtab) {
                lNodeNomEtablissement = this.jsxNodeNomEtablissement.bind(this);
                lClasses.push('ibe_etab');
                if (lParams.clickEtab) {
                  lClasses.push('ibe_actif');
                }
              }
              lDivNomEtablissement.push(
                IE.jsx.str(
                  'div',
                  {
                    class: 'AvecMain ibe_etab_cont',
                    ie_node: this.jsxNodeEtablissement.bind(this),
                  },
                  IE.jsx.str(
                    'div',
                    {
                      ie_node: lNodeNomEtablissement,
                      class: lClasses.join(' '),
                    },
                    lBtnContacterEtablissement.join(''),
                    IE.jsx.str('span', null, lParams.nomEtab),
                  ),
                ),
              );
            }
            const lObjSelecteurMembre = [];
            if (lParams.getObjetSelecteurMembre) {
              lObjSelecteurMembre.push(
                IE.jsx.str('div', {
                  ie_identite: () => lParams.getObjetSelecteurMembre,
                }),
              );
            }
            const lDivBoutonFicheEleve = [];
            if (lParams.htmlBoutonFicheEleve) {
              lDivBoutonFicheEleve.push(
                IE.jsx.str(
                  'div',
                  { class: 'm-left-l' },
                  lParams.htmlBoutonFicheEleve,
                ),
              );
            }
            let lStyleDivCentre = false;
            if (
              lParams.getObjetSelecteurMembre ||
              (lParams.getObjetNotification && !lParams.iconesADroite)
            ) {
              lStyleDivCentre = false;
            } else {
              lStyleDivCentre = 'overflow:hidden;';
            }
            H.push(
              IE.jsx.str(
                'div',
                {
                  class: 'ibe_centre',
                  ie_node: this.jsxNodeCentre.bind(this),
                  style: lStyleDivCentre,
                },
                lDivPhoto.join(''),
                IE.jsx.str(
                  'div',
                  { class: 'ibe_etab_util' },
                  lDivNomEtablissement.join(''),
                  IE.jsx.str(
                    'div',
                    { class: 'ibe_util', ie_if: this.jsxIfAvecUtil.bind(this) },
                    IE.jsx.str(
                      'div',
                      Object.assign(
                        {
                          class: [
                            'ibe_util_texte',
                            lParams.clickUtilisateur && !lParams.isEDT
                              ? 'ibe_actif'
                              : '',
                          ],
                          ie_html: this.jsxGetHtmlUtil.bind(this),
                          ie_node: this.jsxNodeUtil.bind(this),
                          tabindex: '0',
                        },
                        lParams.attrUtil || {},
                        { ie_attr: this.jsxFuncAttrUtil.bind(this) },
                      ),
                    ),
                    lParams.iconesADroite
                      ? ''
                      : this._construireIcones(lParams),
                  ),
                ),
                lObjSelecteurMembre.join(''),
                lDivBoutonFicheEleve.join(''),
              ),
            );
            H.push(
              '<div class="ibe_droite',
              lParams.iconesADroite ? ' ibe_droite_fixe' : '',
              '">',
            );
            if (lParams.iconesADroite) {
              H.push(this._construireIcones(lParams));
            }
            if (
              lParams.avecLangue &&
              UtilitaireChangementLangue_1.UtilitaireChangementLangue.avecChoixLangues()
            ) {
              H.push(
                IE.jsx.str(
                  'div',
                  { class: 'ibe_langue' },
                  UtilitaireChangementLangue_1.UtilitaireChangementLangue.construire(
                    { avecEventFermeture: true },
                  ),
                ),
              );
            }
            if (lParams.logoProduitCss && lParams.avecLogoProduitCss) {
              H.push(
                IE.jsx.str(
                  'div',
                  { class: 'ibe_logo' },
                  IE.jsx.str('a', {
                    href: lParams.logoProduitUrl,
                    target: '_blank',
                    class: ['ibe_logo_image', lParams.logoProduitCss],
                    'aria-label': lParams.labelLienProduit,
                    'data-tooltip': Tooltip_1.Tooltip.Type.default,
                  }),
                ),
              );
            }
            H.push('</div>');
          },
        );
      }
      focusSurPremierElement() {
        if (
          GestionnaireModale_1.GestionnaireModale.estInterfaceBloqueAvecFocusFenetre()
        ) {
          return;
        }
        ObjetHtml_1.GHtml.setFocus(
          $('#' + this.Nom.escapeJQ() + ' .ObjetBandeauEspace').get(0),
        );
        clearTimeout(this._timeoutResize);
        this._timeoutResize = setTimeout(() => {
          this._resize();
        }, 100);
      }
      _resize() {
        const lSelec = '#' + this.Nom.escapeJQ();
        const lMaxWidthImage = Math.min(
          250,
          Math.round((ObjetNavigateur_1.Navigateur.clientL * 20) / 100),
        );
        $(
          lSelec + ' .ibe_image_dep img,' + lSelec + ' .ibe_image_etab img',
        ).css('max-width', lMaxWidthImage);
        const lJCentre = $(lSelec + ' .ibe_centre');
        const lRectDroit = ObjetPosition_1.GPosition.getClientRect(
          $(lSelec + ' .ibe_droite').get(0),
        );
        const lWidthGauche = Math.round($(lSelec + ' .ibe_gauche').width() + 5);
        const lWidthDroit = Math.round(lRectDroit.width + 5);
        const lMax = Math.max(
          IE.estMobile ? 100 : 250,
          ObjetNavigateur_1.Navigateur.clientL - lWidthGauche - lWidthDroit,
        );
        lJCentre.parent().css('justify-content', 'center');
        lJCentre.css({ 'max-width': lMax + 'px', 'margin-left': '' });
        const lElement = lJCentre.get(0);
        if (lElement) {
          const lRectCentre = ObjetPosition_1.GPosition.getClientRect(lElement);
          if (
            lRectCentre.left < lWidthGauche ||
            lRectCentre.right > lRectDroit.left
          ) {
            lJCentre.parent().css('justify-content', 'flex-start');
            lJCentre.css({ 'margin-left': lWidthGauche });
          }
        }
      }
      _construireIcones(aParams) {
        const H = [];
        if (aParams.htmlBoutonsAvantNotif) {
          H.push(aParams.htmlBoutonsAvantNotif);
        }
        if (aParams.getObjetNotification) {
          H.push(
            IE.jsx.str('div', {
              ie_identite: () => aParams.getObjetNotification,
              class: 'ibe_notification',
              ie_node: this.jsxNodeNotif.bind(this),
            }),
          );
        }
        if (aParams.getObjetAide) {
          H.push(
            IE.jsx.str('div', {
              ie_identite: () => aParams.getObjetAide,
              class: 'ibe_notification',
              ie_node: this.jsxNodeNotif.bind(this),
            }),
          );
        }
        if (aParams.htmlBoutons) {
          H.push(aParams.htmlBoutons);
        }
        if (aParams.clickAccesMobile) {
          const lJsxNodeAccesMobile = (aNode) => {
            $(aNode).on('validation', (aEvent) => {
              aEvent.originalEvent.__clickZone__ = true;
              aParams.clickAccesMobile();
            });
          };
          H.push(
            IE.jsx.str(
              'div',
              {
                class: 'ibe_iconebtn ibe_actif',
                tabindex: '0',
                role: 'button',
                ie_node: lJsxNodeAccesMobile,
                'aria-label': 'QR code de l'application',
                'data-tooltip': Tooltip_1.Tooltip.Type.default,
                'aria-haspopup': 'dialog',
              },
              IE.jsx.str(IconeSvgQr_code_1.IconeSvgQr_code, {
                class: 'svg-medium colorFoncee',
              }),
            ),
          );
        }
        if (aParams.clickDeconnexion && !aParams.isEDT) {
          const lJsxNodeDeconnexion = (aNode) => {
            $(aNode).on('validation', (aEvent) => {
              aEvent.originalEvent.__clickZone__ = true;
              aParams.clickDeconnexion();
            });
          };
          H.push(
            IE.jsx.str(
              'div',
              {
                class: 'ibe_iconebtn ibe_actif',
                tabindex: '0',
                role: 'button',
                ie_node: lJsxNodeDeconnexion,
                'aria-label': 'Se déconnecter',
                'data-tooltip': Tooltip_1.Tooltip.Type.default,
                'aria-haspopup': 'dialog',
              },
              IE.jsx.str(IconeSvgOff_1.IconeSvgOff, {
                class: 'svg-medium colorFoncee',
              }),
            ),
          );
        }
        return H.join('');
      }
    }
    exports.ObjetBandeauEspace = ObjetBandeauEspace;
  },
  fn: 'objetbandeauespace.js',
});