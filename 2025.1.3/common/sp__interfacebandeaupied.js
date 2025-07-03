IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports._ObjetAffichageBandeauPied = void 0;
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const LocalStorage_1 = require('LocalStorage');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetFenetre_MentionsLegales_1 = require('ObjetFenetre_MentionsLegales');
    const ObjetRequeteMentionsLegales_1 = require('ObjetRequeteMentionsLegales');
    const ObjetFenetre_PlanSite_1 = require('ObjetFenetre_PlanSite');
    const ObjetHtml_1 = require('ObjetHtml');
    require('ObjetBandeauPied.css');
    const AccessApp_1 = require('AccessApp');
    const ObjetNavigateur_1 = require('ObjetNavigateur');
    const IEHtml_1 = require('IEHtml');
    const lCleLocalStorage = 'etatAffichageFooter';
    const lCookieLocalStorage = 'etatAffichageCookiesInfo';
    class _ObjetAffichageBandeauPied extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.etatUtilisateur = global.GEtatUtilisateur;
        this.hauteur = 20;
        this.genreCommande = {
          twitter: 'twitter',
          forum: 'forum',
          videos: 'videos',
          profil: 'pageprofil',
        };
        this.options = {
          mention: '',
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
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          btnPied: {
            event: function (aGenre) {
              aInstance.evenementBouton({ genreCmd: aGenre });
            },
          },
          btnMention: function () {
            $(this.node).eventValidation(() => {
              let lRequete =
                new ObjetRequeteMentionsLegales_1.ObjetRequeteMentionsLegales(
                  aInstance,
                  aInstance.actionSurMentionsLegales,
                );
              lRequete.lancerRequete();
            });
          },
          getAttrFooter() {
            return { 'aria-expanded': $('.footer-wrapper').hasClass('opened') };
          },
        });
      }
      jsxNodePied(aGenre, aNode) {
        $(aNode).eventValidation(() => {
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
      composeCookiesInfo() {
        const lbtnFermer = () => {
          return {
            event: (aEvent, aNode) => {
              let lGenreEspace = this.etatUtilisateur
                ? '_' + this.etatUtilisateur.GenreEspace
                : '';
              LocalStorage_1.IELocalStorage.setItem(
                lCookieLocalStorage + lGenreEspace,
                String(false),
              );
              $(aNode).parent().hide();
            },
          };
        };
        return IE.jsx.str(
          'div',
          { class: 'cookies-disclaimer' },
          IE.jsx.str(
            'p',
            null,
            `${'Seuls des cookies (ou informations stockées en local) de fonctionnement sont utilisés.'} ${'Pour plus d'informations, voir nos'} `,
            IE.jsx.str(
              'span',
              {
                role: 'button',
                tabindex: '0',
                class: 'as-link',
                'ie-node': 'btnMention',
                'aria-haspopup': 'dialog',
              },
              'Mentions légales',
              '.',
            ),
          ),
          IE.jsx.str(
            'ie-bouton',
            { 'ie-model': lbtnFermer },
            'Fermer',
          ),
        );
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
        if (this.afficherCookieInfo() && !(0, AccessApp_1.getApp)().getDemo()) {
          H.push(this.composeCookiesInfo());
        }
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
      afficherCookieInfo() {
        let lGenreEspace =
          this.etatUtilisateur !== undefined
            ? '_' + this.etatUtilisateur.GenreEspace
            : '';
        LocalStorage_1.IELocalStorage.getItem(
          lCookieLocalStorage + lGenreEspace,
        ) === null
          ? LocalStorage_1.IELocalStorage.setItem(
              lCookieLocalStorage + lGenreEspace,
              String(true),
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
      _composeAffichage() {
        const H = [];
        H.push(
          '<footer id="',
          this.Nom,
          '_footer" class="ObjetBandeauPied disable-dark-mode focusVisibleContrasted ' +
            (this.avecBoutonPersonnaliseProduit() ? ' bpp-canope' : '') +
            '"  ie-attr="getAttrFooter">',
        );
        if (this.options.avecBoutonMasquer) {
          const lshowPied = (aNode) => {
            $(aNode).eventValidation(() => {
              if (this.options.avecBoutonMasquer) {
                this.masquerFooter = !this.masquerFooter;
                LocalStorage_1.IELocalStorage.setItem(
                  lCleLocalStorage + '_' + this.etatUtilisateur.GenreEspace,
                  String(this.masquerFooter),
                );
                this.showHideFooter(aNode, this.masquerFooter);
                IEHtml_1.default.refresh();
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
              'ie-node': lshowPied,
              'ie-tooltiplabel': lTooltip,
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
            IE.jsx.str('ie-btnimage', {
              role: 'link',
              'ie-model': lBtn,
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
                'ie-node': 'btnMention',
                'aria-haspopup': 'dialog',
              },
              'Mentions légales',
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
        if (this.avecPlanSite()) {
          const lbtnPlanSite = (aNode) => {
            $(aNode).eventValidation(() => {
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
                'ie-node': lbtnPlanSite,
                'aria-haspopup': 'dialog',
              },
              'Plan du site',
            ),
          );
          if (lAvecLibelleHeberge) {
            H.push('<hr />');
          }
        }
        H.push('</div>');
        if (lAvecLibelleHeberge) {
          const lGetNode = (aNode) => {
            $(aNode).eventValidation(() => {
              window.open(this.options.urlInfosHebergement);
            });
          };
          H.push(
            IE.jsx.str(
              'div',
              {
                role: 'link',
                tabindex: '0',
                class: 'host-france-container ibp-command',
                'ie-node': ObjetNavigateur_1.Navigateur.isIOS
                  ? false
                  : lGetNode,
              },
              this.espacesISO27001()
                ? '<span class="certif-27001">' +
                    'Certifié ISO 27001' +
                    '</span>'
                : '',
              IE.jsx.str(
                'span',
                { class: 'host-text' },
                'Toutes vos données sont hébergées en France',
              ),
              IE.jsx.str('hr', null),
              IE.jsx.str('span', {
                class: 'logo-index-inverse',
                'aria-hidden': 'true',
              }),
              IE.jsx.str(
                'div',
                { class: 'flex-contain cols text-start' },
                'INDEX ÉDUCATION',
              ),
            ),
          );
        }
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
        H.push('</footer>');
        return H.join('');
      }
    }
    exports._ObjetAffichageBandeauPied = _ObjetAffichageBandeauPied;
  },
  fn: '_interfacebandeaupied.js',
});