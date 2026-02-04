IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.InterfaceBandeauPiedCommune = void 0;
    const _InterfaceBandeauPied_1 = require('_InterfaceBandeauPied');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const UtilitaireRedirection_1 = require('UtilitaireRedirection');
    const Tooltip_1 = require('Tooltip');
    class InterfaceBandeauPiedCommune extends _InterfaceBandeauPied_1._ObjetAffichageBandeauPied {
      constructor(...aParams) {
        super(...aParams);
        const lGParametres = GParametres;
        this.options = {
          mention: lGParametres.publierMentions,
          urlConfidentialite: lGParametres.urlConfidentialite,
          siteIndex:
            lGParametres.urlSiteIndexEducation ||
            'https://www.index-education.com',
          urlInfosHebergement: lGParametres.urlInfosHebergement,
          logoProduitCss: lGParametres.logoProduitCss || '',
          estHebergeEnFrance: lGParametres.estHebergeEnFrance,
          avecBoutonMasquer: false,
          pageEtablissement: lGParametres.PageEtablissement || '',
          urlDeclarationAccessibilite: lGParametres.urlDeclarationAccessibilite,
          accessibiliteNonConforme: lGParametres.accessibiliteNonConforme,
        };
      }
      construireAffichage() {
        return this.composePage();
      }
      getCommande() {
        return false;
      }
      evenementBouton(aParam, aGenreBouton) {
        return super.evenementBouton(aParam, aGenreBouton);
      }
      avecTwitter() {
        return false;
      }
      avecBoutonAideContextuelle() {
        return false;
      }
      avecBoutonAccesProfil() {
        return false;
      }
      composeBoutonAccesProfil() {
        const H = [];
        return H.join('');
      }
      avecBoutonPersonnaliseProduit() {
        return false;
      }
      composeBoutonPersonnaliseProduit() {
        const H = [];
        return H.join('');
      }
      avecBoutonPageEtablissement() {
        return !!this.options.pageEtablissement;
      }
      jsxNodePageEtab(aNode) {
        $(aNode).eventValidation(() => {
          let lUrl = window.location.href.split('/');
          lUrl.pop();
          lUrl = lUrl.join('/') + '/';
          window.open(
            lUrl +
              this.options.pageEtablissement +
              new UtilitaireRedirection_1.UtilitaireRedirection().getParametresUrl(),
          );
        });
      }
      composeBoutonPageEtablissement() {
        return IE.jsx.str(
          'div',
          {
            tabindex: '0',
            role: 'link',
            class: 'ibp-pill icon_ecole',
            'aria-label': 'Page de l'établissement',
            'ie-node': this.jsxNodePageEtab.bind(this),
            'data-tooltip': Tooltip_1.Tooltip.Type.default,
          },
          IE.jsx.str(
            'p',
            { class: 'help-text' },
            ' ',
            'Page de l'établissement',
          ),
        );
      }
      espacesISO27001() {
        return true;
      }
    }
    exports.InterfaceBandeauPiedCommune = InterfaceBandeauPiedCommune;
  },
  fn: 'interfacebandeaupiedcommune.js',
});