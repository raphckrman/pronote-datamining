IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports._InterfaceBandeauPied = void 0;
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const LocalStorage_1 = require('@librairies/script/Divers/LocalStorage');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetFenetre_MentionsLegales_1 = require('@cp/Produit/Script/Fenetre/ObjetFenetre_MentionsLegales');
    const ObjetRequeteMentionsLegales_1 = require('@cp/Espace/Script/Requetes/ObjetRequeteMentionsLegales');
    const ObjetFenetre_PlanSite_1 = require('@cp/Produit/Script/ObjetFenetre_PlanSite');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetNavigateur_1 = require('@cp/Produit/Script/ObjetNavigateur');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    require('@cp/Espace/Css/ObjetBandeauPied.css');
    const lCleLocalStorage = 'etatAffichageFooter';
    class _InterfaceBandeauPied extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.etatUtilisateur = global.GEtatUtilisateur;
        this.genreCommande = {
          twitter: 'twitter',
          forum: 'forum',
          videos: 'videos',
          profil: 'pageprofil',
        };
        this.options = {
          mention: '',
          urlConfidentialite: '',
          siteIndex: 'https://www.index-education.com',
          urlInfosHebergement: '',
          logoProduitCss: '',
          estHebergeEnFrance: '',
          avecBoutonMasquer: true,
          urlDeclarationAccessibilite: '',
        };
      }
      actionSurMentionsLegales(aParams) {
        let lFenetreMentionsLegales =
          ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
            ObjetFenetre_MentionsLegales_1.ObjetFenetre_MentionsLegales,
            { pere: this, initialiser: function () {} },
          );
        lFenetreMentionsLegales.setOptionsFenetre({
          titre: 'Mentions légales',
        });
        lFenetreMentionsLegales.setDonnees(aParams);
      }
      actionSurPlanSite() {
        let lFenetrePlanSite = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_PlanSite_1.ObjetFenetre_PlanSite,
          {
            pere: this,
            initialiser: function (aInstance) {
              aInstance.setOptionsFenetre({
                titre:
                  'Plan du site',
              });
            },
          },
        );
        lFenetrePlanSite.setDonnees();
      }
      jsxNodeBtnMentionsLegales(aNode) {
        $(aNode).on('validation', () => {
          let lRequete =
            new ObjetRequeteMentionsLegales_1.ObjetRequeteMentionsLegales(
              this,
              this.actionSurMentionsLegales,
            );
          lRequete.lancerRequete();
        });
      }
      jsxNodePied(aGenre, aNode) {
        $(aNode).on('validation', () => {
          this.evenementBouton({ genreCmd: aGenre });
        });
      }
      avecTwitter() {
        return false;
      }
      avecPlanSite() {
        return false;
      }
      avecBoutonAccesProfil() {
        return false;
      }
      avecBoutonPersonnaliseProduit() {
        return false;
      }
      avecBoutonPageEtablissement() {
        return false;
      }
      espacesISO27001() {
        return false;
      }
      evenementBouton(aParam, aGenreBouton) {
        if (aGenreBouton !== 1) {
          this.callback.appel(aParam);
        }
      }
      setDonnees(aParam) {
        if (!!aParam) {
          this.setOptions(aParam);
        }
        this.afficher(this.composePage());
        if (this.masquerFooter) {
          this.majTabIndexFocusables();
        }
      }
      composePage() {
        const H = [];
        this.masquerFooter = this.masquerBandeauPied();
        H.push(this._composeAffichage());
        return H.join('');
      }
      showHideFooter(aNode, aMasquerPied) {
        const lParentContainer = $(aNode).closest('.interface_affV');
        const lFooterWrapper = lParentContainer.find('.footer-wrapper');
        aNode.setAttribute('aria-expanded', aMasquerPied ? 'false' : 'true');
        if (aMasquerPied) {
          lFooterWrapper.toggleClass('opened closed');
          lParentContainer.removeClass('with-footer').addClass('no-footer');
        } else {
          lFooterWrapper.toggleClass('closed opened');
          lParentContainer.removeClass('no-footer').addClass('with-footer');
        }
        this.majTabIndexFocusables();
        $(window).resize();
      }
      majTabIndexFocusables() {
        ObjetHtml_1.GHtml.getElementsFocusablesDElement(
          ObjetHtml_1.GHtml.getElement(this.Nom),
        ).forEach((aNode, aIndex) => {
          if (aIndex > 0) {
            $(aNode).attr('tabindex', this.masquerFooter ? -1 : 0);
          }
        });
      }
      masquerBandeauPied() {
        return this.options.avecBoutonMasquer
          ? LocalStorage_1.IELocalStorage.getItem(
              lCleLocalStorage + '_' + this.etatUtilisateur.GenreEspace,
            ) === 'true'
          : false;
      }
      jsxFuncAttrFooter() {
        return { 'aria-expanded': $('.footer-wrapper').hasClass('opened') };
      }
      _composeAffichage() {
        return IE.jsx.str(
          'footer',
          {
            role: 'contentinfo',
            id: this.Nom + '_footer',
            class: [
              'ObjetBandeauPied disable-dark-mode focusVisibleContrasted ',
              this.avecBoutonPersonnaliseProduit() ? ' bpp-canope' : '',
            ],
            ie_attr: this.jsxFuncAttrFooter.bind(this),
          },
          (H) => {
            if (this.options.avecBoutonMasquer) {
              const lshowPied = (aNode) => {
                $(aNode).on('validation', () => {
                  if (this.options.avecBoutonMasquer) {
                    this.masquerFooter = !this.masquerFooter;
                    LocalStorage_1.IELocalStorage.setItem(
                      lCleLocalStorage + '_' + this.etatUtilisateur.GenreEspace,
                      String(this.masquerFooter),
                    );
                    this.showHideFooter(aNode, this.masquerFooter);
                    IEHtml_1.IEHtml.refresh();
                  }
                });
              };
              const lTooltip = () => {
                return $('.footer-wrapper').hasClass('opened')
                  ? 'Masquer le pied de page du site'
                  : 'Afficher le pied de page du site';
              };
              H.push(
                IE.jsx.str('div', {
                  tabindex: '0',
                  role: 'button',
                  class: 'footer-toggler icon_angle_down',
                  ie_node: lshowPied,
                  ie_tooltiplabel: lTooltip,
                  'aria-controls': this.Nom,
                  'aria-expanded': this.masquerFooter ? 'false' : 'true',
                }),
              );
            }
            const lAvecLibelleHeberge =
              this.options.siteIndex && this.options.estHebergeEnFrance;
            H.push(
              '<div class="ibp-bloc-left' +
                (!lAvecLibelleHeberge ? ' bloc-unique' : '') +
                '">',
            );
            if (this.avecTwitter()) {
              const lBtn = () => {
                return {
                  event: () => {
                    this.evenementBouton({
                      genreCmd: this.getCommande(this.genreCommande.twitter),
                    });
                  },
                };
              };
              H.push(
                IE.jsx.str(IEHtml_BtnImage_1.BtnImage, {
                  role: 'link',
                  ie_model: lBtn,
                  class: 'icon_twitter btnImageIcon ibp-command',
                  title: 'Suivre PRONOTE sur X, ex-Twitter',
                }),
                '<hr />',
              );
            }
            if (this.options.mention) {
              H.push(
                IE.jsx.str(
                  'div',
                  {
                    role: 'button',
                    tabindex: '0',
                    class: 'ibp-command legal-notice',
                    ie_node: this.jsxNodeBtnMentionsLegales.bind(this),
                    'aria-haspopup': 'dialog',
                  },
                  'Mentions légales',
                ),
              );
              H.push('<hr />');
            }
            if (this.options.urlConfidentialite) {
              H.push(
                IE.jsx.str(
                  'a',
                  {
                    class: 'ibp-command confidentialite',
                    href: this.options.urlConfidentialite,
                  },
                  'Confidentialité',
                ),
              );
              H.push('<hr />');
            }
            if (this.options.urlDeclarationAccessibilite) {
              H.push(
                IE.jsx.str(
                  IE.jsx.fragment,
                  null,
                  IE.jsx.str(
                    'a',
                    {
                      class: 'accessibilite',
                      href: this.options.urlDeclarationAccessibilite,
                    },
                    ObjetTraduction_1.GTraductions.getValeur(
                      this.options.accessibiliteNonConforme
                        ? 'PiedPage.AccessibiliteNonConformite'
                        : 'PiedPage.AccessibiliteConformite',
                    ),
                  ),
                  IE.jsx.str('hr', null),
                ),
              );
            }
            const lGetNodeSite = (aNode) => {
              $(aNode).on('validation', () => {
                window.open(this.options.urlInfosHebergement);
              });
            };
            if (this.avecPlanSite()) {
              const lbtnPlanSite = (aNode) => {
                $(aNode).on('validation', () => {
                  this.actionSurPlanSite();
                });
              };
              H.push(
                IE.jsx.str(
                  'div',
                  {
                    role: 'button',
                    tabindex: '0',
                    class: 'ibp-command site-map',
                    ie_node: lbtnPlanSite,
                    'aria-haspopup': 'dialog',
                  },
                  'Plan du site',
                ),
                IE.jsx.str('hr', null),
              );
            }
            if (lAvecLibelleHeberge) {
              H.push(
                IE.jsx.str(
                  'div',
                  {
                    role: 'link',
                    tabindex: '0',
                    class: 'host-france-container ibp-command',
                    ie_node: ObjetNavigateur_1.Navigateur.isIOS
                      ? false
                      : lGetNodeSite,
                  },
                  this.espacesISO27001()
                    ? '<span class="certif-27001">' +
                        'Service qualifié SecNumCloud' +
                        '</span>'
                    : '',
                  IE.jsx.str(
                    'span',
                    { class: 'host-text' },
                    'Toutes vos données sont hébergées en France',
                  ),
                ),
              );
            }
            H.push('</div>');
            H.push(
              IE.jsx.str(
                'div',
                {
                  role: 'link',
                  tabindex: '0',
                  class: 'host-france-container ibp-command',
                  ie_node: ObjetNavigateur_1.Navigateur.isIOS
                    ? false
                    : lGetNodeSite,
                  'aria-label': 'INDEX ÉDUCATION',
                },
                IE.jsx.str('span', { class: 'logo-index-inverse' }),
              ),
            );
            H.push('<div class="knowledge-container">');
            if (this.avecBoutonPersonnaliseProduit()) {
              H.push(this.composeBoutonPersonnaliseProduit());
            }
            if (this.avecBoutonAccesProfil()) {
              H.push(this.composeBoutonAccesProfil());
            }
            if (this.avecBoutonPageEtablissement()) {
              H.push(this.composeBoutonPageEtablissement());
            }
            H.push('</div>');
          },
        );
      }
    }
    exports._InterfaceBandeauPied = _InterfaceBandeauPied;
  },
  fn: '_interfacebandeaupied.js',
});