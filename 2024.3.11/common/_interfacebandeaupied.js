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
          btnFermer: function () {
            $(this.node).eventValidation(function () {
              let lGenreEspace = aInstance.etatUtilisateur
                ? '_' + aInstance.etatUtilisateur.GenreEspace
                : '';
              LocalStorage_1.IELocalStorage.setItem(
                lCookieLocalStorage + lGenreEspace,
                String(false),
              );
              $(this).parent().hide();
            });
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
          btnPlanSite: function () {
            $(this.node).eventValidation(() => {
              aInstance.actionSurPlanSite();
            });
          },
          nodePied: function (aGenre) {
            $(this.node).eventValidation(() => {
              aInstance.evenementBouton({ genreCmd: aGenre });
            });
          },
          showPied: function () {
            $(this.node).eventValidation(() => {
              if (aInstance.options.avecBoutonMasquer) {
                aInstance.masquerFooter = !aInstance.masquerFooter;
                LocalStorage_1.IELocalStorage.setItem(
                  lCleLocalStorage +
                    '_' +
                    aInstance.etatUtilisateur.GenreEspace,
                  String(aInstance.masquerFooter),
                );
                aInstance.showHideFooter.call(
                  this.node,
                  aInstance.masquerFooter,
                );
                this.controleur.$refreshSelf();
              }
            });
          },
          getAttrShowPied() {
            return {
              title: $('.footer-wrapper').hasClass('opened')
                ? 'Masquer le pied de page du site'
                : 'Afficher le pied de page du site',
            };
          },
          getAttrFooter() {
            return { 'aria-expanded': $('.footer-wrapper').hasClass('opened') };
          },
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
        const H = [];
        H.push(`<div class="cookies-disclaimer">`);
        H.push(
          `<p>${'Seuls des cookies (ou informations stockées en local) de fonctionnement sont utilisés.'} ${'Pour plus d'informations, voir nos'} <span role="button" tabindex="0" class="as-link" ie-node="btnMention" aria-haspopup="dialog">${'Mentions légales'}.</span></p>`,
        );
        H.push(
          `<ie-bouton tabindex="0" aria-label="${'Fermer'}" ie-hint="${'Fermer'}" ie-node="btnFermer">${'Fermer'}</ie-bouton>`,
        );
        H.push(`</div>`);
        return H.join('');
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
      }
      composePage() {
        const lHtml = [];
        this.masquerFooter = this.masquerBandeauPied();
        if (this.afficherCookieInfo() && !GApplication.getDemo()) {
          lHtml.push(this.composeCookiesInfo());
        }
        lHtml.push(this._composeAffichage());
        return lHtml.join('');
      }
      showHideFooter(aMasquerPied) {
        const lParentContainer = $(this).closest('.interface_affV');
        const lFooterWrapper = lParentContainer.find('.footer-wrapper');
        if (aMasquerPied) {
          lFooterWrapper.toggleClass('opened closed');
          lParentContainer.removeClass('with-footer').addClass('no-footer');
          ObjetHtml_1.GHtml.getElementsFocusablesDElement(
            lFooterWrapper.get(0),
          ).forEach((aNode, aIndex) => {
            if (aIndex > 0) {
              $(aNode).attr('tabindex', -1);
            }
          });
        } else {
          lFooterWrapper.toggleClass('closed opened');
          lParentContainer.removeClass('no-footer').addClass('with-footer');
          ObjetHtml_1.GHtml.getElementsFocusablesDElement(
            lFooterWrapper.get(0),
          ).forEach((aNode, aIndex) => {
            if (aIndex > 0) {
              $(aNode).attr('tabindex', 0);
            }
          });
        }
        $(window).resize();
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
          '_footer" class="ObjetBandeauPied disable-dark-mode ' +
            (this.avecBoutonPersonnaliseProduit() ? ' bpp-canope' : '') +
            '"  ie-attr="getAttrFooter">',
        );
        if (this.options.avecBoutonMasquer) {
          H.push(
            IE.jsx.str('div', {
              tabindex: '0',
              role: 'button',
              class: 'footer-toggler icon_angle_down',
              'ie-node': 'showPied()',
              'ie-attr': 'getAttrShowPied',
              title: 'Masquer le pied de page du site',
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
          H.push(
            '<ie-btnimage ie-model="btnPied(' +
              this.getCommande(this.genreCommande.twitter) +
              ')" class="icon_twitter btnImageIcon ibp-command" title="' +
              'Suivre PRONOTE sur X, ex-Twitter' +
              '">' +
              '</ie-btnimage>',
            '<hr />',
          );
        }
        if (this.options.mention) {
          H.push(
            '<div role="button" tabindex="0" class="ibp-command legal-notice" ie-node="btnMention">',
            'Mentions légales',
            '</div>',
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
          H.push(
            '<div role="button" tabindex="0" class="ibp-command site-map" ie-node="btnPlanSite">',
            'Plan du site',
            '</div>',
          );
          if (lAvecLibelleHeberge) {
            H.push('<hr />');
          }
        }
        H.push('</div>');
        if (lAvecLibelleHeberge) {
          const lOnClic = GNavigateur.isIOS
            ? ''
            : `onclick="window.open ('${this.options.urlInfosHebergement}');" onkeyup="if(GNavigateur.isToucheSelection())window.open ('${this.options.urlInfosHebergement}');"`;
          H.push(
            `<div role="link" tabindex="0" class="host-france-container ibp-command" ${lOnClic}>`,
            this.espacesISO27001()
              ? '<span class="certif-27001">' +
                  'Certifié ISO 27001' +
                  '</span>'
              : '',
            '<span class="host-text">',
            'Toutes vos données sont hébergées en France',
            '</span>',
            '<hr />',
            '<span class="logo-index-inverse" aria-hidden="true"></span>',
            `<div class="flex-contain cols text-start">${'INDEX ÉDUCATION'}</div>`,
            '</div>',
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