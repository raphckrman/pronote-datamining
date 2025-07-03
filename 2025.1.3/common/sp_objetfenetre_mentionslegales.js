IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_MentionsLegales = void 0;
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetHtml_1 = require('ObjetHtml');
    const AccessApp_1 = require('AccessApp');
    class ObjetFenetre_MentionsLegales extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.idContenu = this.getNom() + '_Contenu';
        this.setOptionsFenetre({
          largeur: 450,
          hauteur: 320,
          listeBoutons: ['Fermer'],
        });
      }
      composerContenu(aParametres) {
        const H = [];
        H.push(
          IE.jsx.str(
            'p',
            { class: 'ie-titre-petit PetitEspaceBas' },
            'Adresse de l'école',
          ),
        );
        H.push(
          aParametres.adresseEtablissement &&
            IE.jsx.str('p', null, aParametres.adresseEtablissement),
        );
        H.push(
          IE.jsx.str(
            'p',
            { class: 'GrandEspaceHaut ie-titre-petit PetitEspaceBas' },
            'Forme juridique',
          ),
        );
        H.push(
          aParametres.formeJuridique &&
            IE.jsx.str('p', null, aParametres.formeJuridique),
        );
        H.push(
          IE.jsx.str(
            'p',
            { class: 'GrandEspaceHaut ie-titre-petit PetitEspaceBas' },
            'Hébergeur',
          ),
        );
        H.push(
          aParametres.hebergeur && IE.jsx.str('p', null, aParametres.hebergeur),
        );
        H.push(
          IE.jsx.str(
            'p',
            { class: 'GrandEspaceHaut ie-titre-petit PetitEspaceBas' },
            'Responsable de la publication',
          ),
        );
        H.push(
          aParametres.responsablePublication &&
            IE.jsx.str('p', null, aParametres.responsablePublication),
        );
        if (!!aParametres.informationsComplementaires) {
          H.push(
            IE.jsx.str(
              'p',
              { class: 'GrandEspaceHaut ie-titre-petit PetitEspaceBas' },
              'Informations complémentaires',
            ),
          );
          H.push(aParametres.informationsComplementaires);
        }
        H.push(
          IE.jsx.str(
            'h2',
            { class: 'ie-titre m-top-xxl m-bottom-xl' },
            'Utilisation des cookies :',
          ),
        );
        H.push(
          IE.jsx.str(
            'p',
            null,
            'Le fonctionnement de %s est garanti par l'utilisation de cookies fonctionnels, ces cookies sont nécessaires au fonctionnement du site. Le dépôt de ces cookies ne requiert pas votre consentement préalable.'().nomProduit],
            ),
            ' ',
            'Ces cookies ne sont envoyés qu'au serveur %s auquel vous êtes connecté.'().nomProduit],
            ),
          ),
        );
        H.push(
          IE.jsx.str(
            'p',
            { class: 'm-y' },
            'Ces cookies permettent :',
          ),
        );
        H.push(
          IE.jsx.str(
            'ul',
            { class: 'dot m-left xl' },
            IE.jsx.str(
              'li',
              null,
              'l'authentification auprès du service, d'assurer la sécurité du mécanisme d'authentification, et de limiter les tentatives d'accès robotisées ou inattendues (nom du cookie : CASTGC) ;',
            ),
            IE.jsx.str(
              'li',
              null,
              'la personnalisation de la langue utilisée lors de vos visites sur le site (nom du cookie : ielang).',
            ),
          ),
        );
        return H.join('');
      }
      setDonnees(aParam) {
        ObjetHtml_1.GHtml.setHtml(this.idContenu, this.composerContenu(aParam));
        this.afficher();
      }
      composeContenu() {
        return IE.jsx.str('div', { id: this.idContenu });
      }
      surValidation() {
        this.fermer();
      }
    }
    exports.ObjetFenetre_MentionsLegales = ObjetFenetre_MentionsLegales;
  },
  fn: 'objetfenetre_mentionslegales.js',
});