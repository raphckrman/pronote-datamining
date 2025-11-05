IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetBandeauEspace = void 0;
    const ObjetIdentite_1 = require('ObjetIdentite');
    const UtilitaireChangementLangue_1 = require('UtilitaireChangementLangue');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetHtml_1 = require('ObjetHtml');
    const ToucheClavier_1 = require('ToucheClavier');
    const ObjetWAI_1 = require('ObjetWAI');
    const ObjetPosition_1 = require('ObjetPosition');
    const Invocateur_1 = require('Invocateur');
    require('ObjetBandeauEspace.css');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const Tooltip_1 = require('Tooltip');
    const Divers_css_1 = require('Divers.css');
    const GUID_1 = require('GUID');
    class ObjetBandeauEspace extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.params = {
          labelConteneur: '',
          urlLogoEtab: GParametres.urlLogo,
          nomEtab: GParametres.NomEtablissementConnexion
            ? GParametres.NomEtablissementConnexion
            : GParametres.NomEtablissement,
          getNomUtil: null,
          attrUtil: '',
          ariaLabelUtil: '',
          classUtil: '',
          photo: null,
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
          getObjetSelecteurMembre: null,
          htmlBoutonFicheEleve: null,
          htmlBoutonsAvantNotif: null,
          getObjetNotification: null,
          getObjetAide: null,
          htmlBoutons: '',
          iconesADroite: false,
          clickUtilisateur: null,
          clickDeconnexion: null,
          clickAccesMobile: null,
          clickEtablissement: null,
          isEDT: false,
          controleur: null,
          avecFicheEtablissement: false,
          avecLiensEvitement: false,
          liensEvitement: {
            menuOnglet: false,
            urlDeclarationAccessibilite: null,
            clickPlanSite: null,
          },
          avecImageCollectivite: true,
        };
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          getNodeRacine: function () {
            $(window).on('resize.ObjetBandeauEspace', () => {
              aInstance._resize();
            });
            $(this.node).on('destroyed', () => {
              $(window).off('resize.ObjetBandeauEspace');
            });
          },
          getNodeCentre: function () {},
          getNodeNomEtab: function () {
            if (aInstance.params.clickEtab) {
              $(this.node).on('click keyup', (aEvent) => {
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
                aInstance.params.clickEtab();
              });
              return;
            }
          },
          nodeEtablissement: function () {
            if (aInstance.params.clickEtablissement) {
              $(this.node).eventValidation((aEvent) => {
                aInstance.params.clickEtablissement();
                aEvent.stopPropagation();
              });
            }
          },
          util: {
            avecUtil: function () {
              return aInstance.params.getNomUtil
                ? !!aInstance.params.getNomUtil()
                : false;
            },
            getNodeUtil: function () {
              $(this.node).on('click keyup', function (aEvent) {
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
                aInstance.params.clickUtilisateur(aEvent, this);
              });
            },
            getHtmlUtil: function () {
              return aInstance.params.getNomUtil
                ? aInstance.params.getNomUtil()
                : '';
            },
            avecPhoto: function () {
              return aInstance.params.photo.getUrlPhoto
                ? aInstance.params.photo.getUrlPhoto() !== ''
                : false;
            },
            getNodeImgPhoto: function () {
              $(this.node).on('error', function () {
                $(this).parent().find('.ibe_util_photo_i').show();
                $(this).remove();
              });
            },
            getHtmlPhoto: function () {
              const lUrl = aInstance.params.photo.getUrlPhoto
                ? aInstance.params.photo.getUrlPhoto()
                : '';
              if (lUrl) {
                return [
                  IE.jsx.str('img', {
                    src: lUrl,
                    style: 'width:100%;',
                    'ie-node': 'util.getNodeImgPhoto',
                    alt: aInstance.params.getNomUtil
                      ? 'Photo de %s',
                        ])
                      : '',
                  }),
                  '<div class="ibe_util_photo_i"',
                  lUrl ? ' style="display:none"' : '',
                  '>',
                  '<i class="icon_utilisateur"></i>',
                  '</div>',
                ].join('');
              }
              return '';
            },
            getAttrUtil: function () {
              const lNom = aInstance.params.getNomUtil
                ? aInstance.params.getNomUtil()
                : '';
              const lLabelUtil = aInstance.params.ariaLabelUtil;
              const lLibelle =
                (lNom ? lNom + (lLabelUtil ? ' - ' : '') : '') +
                (lLabelUtil ? lLabelUtil : '');
              return { 'aria-label': lLibelle };
            },
          },
          getNodeNotif: function () {
            $(this.node).eventValidation((aEvent) => {
              aEvent.originalEvent.__clickZone__ = true;
            });
          },
          getObjetSelecteurMembre: function () {
            return aInstance.params.getObjetSelecteurMembre;
          },
          getObjetNotification: function () {
            return aInstance.params.getObjetNotification;
          },
          getObjetAide: function () {
            return aInstance.params.getObjetAide;
          },
          getAttrBanner() {
            return { tabindex: aInstance.params.avecLiensEvitement ? -1 : 0 };
          },
          nodeContenu() {
            $(this.node).eventValidation(() => {
              if (global.GInterface && GInterface.setFocusPremierObjet) {
                GInterface.setFocusPremierObjet();
              } else {
                ObjetHtml_1.GHtml.setFocus($('#breadcrumbBandeau').get(0));
              }
            });
          },
          nodeMenu() {
            $(this.node).eventValidation(() => {
              Invocateur_1.Invocateur.evenement('focus.menu_navigation');
            });
          },
          nodePlanSite() {
            $(this.node).eventValidation(() => {
              aInstance.params.liensEvitement.clickPlanSite();
            });
          },
        });
      }
      setParametres(aParams) {
        Object.assign(this.params, aParams);
        if (this.params.controleur) {
          Object.assign(this.controleur, this.params.controleur);
        }
      }
      construireAffichage() {
        const lParams = Object.assign({}, this.params);
        if (lParams.getNomUtil) {
          lParams.labelConteneur =
            ObjetChaine_1.GChaine.enleverEntites(lParams.getNomUtil()) +
            ' ' +
            lParams.labelConteneur;
        }
        const H = [];
        H.push(
          '<div class="ObjetBandeauEspace" ie-node="getNodeRacine" ie-attr="getAttrBanner" role="banner" aria-label="',
          ObjetChaine_1.GChaine.toTitle(lParams.labelConteneur),
          '">',
        );
        if (lParams.avecLiensEvitement) {
          H.push(
            lParams.liensEvitement.menuOnglet
              ? `<a class="evitement" tabindex="0" ie-node="nodeMenu">${'Accéder au menu'}</a>`
              : '',
            `<a class="evitement" tabindex="0" ie-node="nodeContenu">${'Accéder au contenu'}</a>`,
            lParams.liensEvitement.urlDeclarationAccessibilite
              ? `<a class="evitement" tabindex="0" href="${lParams.liensEvitement.urlDeclarationAccessibilite}">${'Déclaration d'accessibilité'}</a>`
              : '',
            lParams.liensEvitement.clickPlanSite
              ? `<a class="evitement" tabindex="0" ie-node="nodePlanSite">${'Plan du site'}</a>`
              : '',
          );
        }
        H.push('<div class="ibe_gauche">');
        const lImageCollectiviteDepartement =
          lParams.logoCollectiviteImage || lParams.logoDepartementImage;
        if (!!lImageCollectiviteDepartement && lParams.avecImageCollectivite) {
          let lLienCollectiviteDepartement = lParams.logoDepartementLien;
          if (lParams.logoCollectiviteLien && lParams.logoCollectiviteImage) {
            lLienCollectiviteDepartement = lParams.logoCollectiviteLien;
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
          const lId = GUID_1.GUID.getId();
          H.push(
            IE.jsx.str(
              'a',
              {
                href: lLienCollectiviteDepartement || false,
                target: '_blank',
                class: 'ibe_image_dep',
                'data-tooltip': lParams.logoDepartementLien
                  ? Tooltip_1.Tooltip.Type.default
                  : false,
                'data-tooltip-id': lParams.logoDepartementLien ? lId : false,
              },
              IE.jsx.str('img', {
                src: lImageCollectiviteDepartement,
                alt: 'Logo du département',
                'ie-node': lgetNodeImage,
              }),
              lParams.logoDepartementLien
                ? IE.jsx.str(
                    'span',
                    { class: Divers_css_1.StylesDivers.srOnly, id: lId },
                    'Accéder au site du departement',
                  )
                : '',
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
                'ie-node': 'getNodeNomEtab',
                class: ['ibe_image_etab', lParams.clickEtab ? 'ibe_actif' : ''],
                role: 'presentation',
              },
              IE.jsx.str('img', {
                src: lParams.urlLogoEtab,
                alt: 'Logo de l'établissement',
                'ie-node': lgetNodeImage,
              }),
            ),
          );
        }
        H.push('</div>');
        H.push(
          '<div class="ibe_centre" ie-node="getNodeCentre"',
          lParams.getObjetSelecteurMembre ||
            (lParams.getObjetNotification && !lParams.iconesADroite)
            ? ''
            : ' style="overflow:hidden;"',
          '>',
        );
        if (lParams.photo) {
          H.push(
            '<div class="ibe_util_photo',
            lParams.clickUtilisateur ? ' ibe_actif' : '',
            '" ie-if="util.avecPhoto" ie-html="util.getHtmlPhoto" ie-node="util.getNodeUtil" ',
            lParams.attrUtil,
            lParams.ariaLabelUtil
              ? ObjetWAI_1.GObjetWAI.composeAttribut({
                  genre: ObjetWAI_1.EGenreAttribut.label,
                  valeur: lParams.ariaLabelUtil,
                })
              : '',
            ' aria-hidden="true"></div>',
          );
        }
        H.push(
          '<div class="ibe_etab_util">',
          lParams.nomEtab || lParams.avecFicheEtablissement
            ? [
                '<div class="AvecMain ibe_etab_cont" ie-node="nodeEtablissement">',
                '<div ',
                lParams.nomEtab
                  ? 'ie-node="getNodeNomEtab" class="ibe_etab' +
                    (lParams.clickEtab ? ' ibe_actif' : '') +
                    '"'
                  : '',
                '>',
                lParams.avecFicheEtablissement
                  ? IE.jsx.str('ie-btnimage', {
                      class:
                        'icon_uniF2C3 btnImageIcon InlineBlock EspaceDroit AvecMain',
                      'ie-tooltiplabel':
                        'Contacter l'établissement',
                      'aria-haspopup': 'dialog',
                    })
                  : '',
                lParams.nomEtab,
                '</div>',
                '</div>',
              ].join('')
            : '',
          '<div class="ibe_util" ie-if="util.avecUtil">',
          '<div class="ibe_util_texte',
          lParams.clickUtilisateur && !lParams.isEDT ? ' ibe_actif' : '',
          '" ie-html="util.getHtmlUtil" ie-node="util.getNodeUtil" tabindex="0" ie-attr="util.getAttrUtil" ',
          lParams.attrUtil,
          '></div>',
          lParams.iconesADroite ? '' : _construireIcones.call(this, lParams),
          '</div>',
          '</div>',
        );
        if (lParams.getObjetSelecteurMembre) {
          H.push('<div ie-identite="getObjetSelecteurMembre"></div>');
        }
        if (lParams.htmlBoutonFicheEleve) {
          H.push(
            '<div class="m-left-l">',
            lParams.htmlBoutonFicheEleve,
            '</div>',
          );
        }
        H.push('</div>');
        H.push(
          '<div class="ibe_droite',
          lParams.iconesADroite ? ' ibe_droite_fixe' : '',
          '">',
        );
        if (lParams.iconesADroite) {
          H.push(_construireIcones.call(this, lParams));
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
                this.controleur,
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
        H.push('</div>', '</div>');
        return H.join('');
      }
      focusSurPremierElement() {
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
    }
    exports.ObjetBandeauEspace = ObjetBandeauEspace;
    function _construireIcones(aParams) {
      const H = [];
      if (aParams.htmlBoutonsAvantNotif) {
        H.push(aParams.htmlBoutonsAvantNotif);
      }
      if (aParams.getObjetNotification) {
        H.push(
          IE.jsx.str('div', {
            'ie-identite': 'getObjetNotification',
            class: 'ibe_notification',
            'ie-node': 'getNodeNotif',
          }),
        );
      }
      if (aParams.getObjetAide) {
        H.push(
          IE.jsx.str('div', {
            'ie-identite': 'getObjetAide',
            class: 'ibe_notification',
            'ie-node': 'getNodeNotif',
          }),
        );
      }
      if (aParams.htmlBoutons) {
        H.push(aParams.htmlBoutons);
      }
      if (aParams.clickAccesMobile) {
        const lgetNodeAccesMobile = (aNode) => {
          $(aNode).eventValidation((aEvent) => {
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
              'ie-node': lgetNodeAccesMobile,
              'aria-label': 'QR code de l'application',
              'data-tooltip': Tooltip_1.Tooltip.Type.default,
              'aria-haspopup': 'dialog',
            },
            IE.jsx.str('i', {
              class: 'icon_qr_code colorFoncee',
              'aria-hidden': 'true',
            }),
          ),
        );
      }
      if (aParams.clickDeconnexion && !aParams.isEDT) {
        const lgetNodeDeconnexion = (aNode) => {
          $(aNode).eventValidation((aEvent) => {
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
              'ie-node': lgetNodeDeconnexion,
              'aria-label': 'Se déconnecter',
              'data-tooltip': Tooltip_1.Tooltip.Type.default,
              'aria-haspopup': 'dialog',
            },
            IE.jsx.str('i', {
              class: 'icon_off colorFoncee',
              'aria-hidden': 'true',
            }),
          ),
        );
      }
      return H.join('');
    }
  },
  fn: 'objetbandeauespace.js',
});