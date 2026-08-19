IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_EditionUrl = void 0;
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    require('@cp/Espace/Css/ObjetFenetre_EditionUrl.css');
    const IEHtml_TextareaMax_1 = require('@cp/Produit/Script/IEHtml.TextareaMax');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const AccessApp_1 = require('@cp/script/AccessApp');
    class ObjetFenetre_EditionUrl extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.valeursInterdites = ['', 'http://', 'https://'];
        this.setOptionsFenetre({
          modale: true,
          titre: 'Editer un lien',
          listeBoutons: [
            {
              libelle: 'Annuler',
              theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
            },
            {
              libelle: 'Valider',
              valider: true,
              theme: Type_ThemeBouton_1.TypeThemeBouton.primaire,
            },
          ],
          avecTailleSelonContenu: true,
          largeur: 400,
        });
        this.optionsFenetreEditionUrl = {
          avecLibelle: true,
          avecCommentaire: true,
        };
      }
      setOptionsFenetreEditionUrl(aOptions) {
        Object.assign(this.optionsFenetreEditionUrl, aOptions);
      }
      getDisabledFenetreBtn(aBouton) {
        if (this.donnee && aBouton.valider === true) {
          return this.valeursInterdites.includes(this.donnee.url);
        }
        return (
          !!this.optionsFenetre.listeBoutonsInactifs &&
          this.optionsFenetre.listeBoutonsInactifs[aBouton.index] === true
        );
      }
      surValidation(ANumeroBouton) {
        if (
          ANumeroBouton === 1 &&
          this.donnee &&
          this.valeursInterdites.includes(this.donnee.url)
        ) {
          (0, AccessApp_1.getApp)()
            .getMessage()
            .afficher({
              type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
              message:
                'L'adresse internet est incorrecte.',
            });
        } else {
          super.surValidation(ANumeroBouton);
        }
      }
      setDonnees(aDonnee) {
        this.donnee = aDonnee;
        this.afficher();
      }
      jsxIfAffichageLibelle() {
        return this.optionsFenetreEditionUrl.avecLibelle;
      }
      jsxIfAffichageCommentaire() {
        return this.optionsFenetreEditionUrl.avecCommentaire;
      }
      jsxModelInputLien() {
        return {
          getValue: () => {
            return !!this.donnee && !!this.donnee.url ? this.donnee.url : '';
          },
          setValue: (aValue) => {
            this.donnee.url = aValue;
          },
        };
      }
      jsxModelInputLibelle() {
        return {
          getValue: () => {
            return !!this.donnee && !!this.donnee.libelle
              ? this.donnee.libelle
              : '';
          },
          setValue: (aValue) => {
            this.donnee.libelle = aValue;
          },
        };
      }
      jsxModelInputCommentaire() {
        return {
          getValue: () => {
            return !!this.donnee && !!this.donnee.commentaire
              ? this.donnee.commentaire
              : '';
          },
          setValue: (aValue) => {
            this.donnee.commentaire = aValue;
          },
        };
      }
      composeContenu() {
        const lIdInpLien = `${this.Nom}_inp_lien`;
        const lIdInpLib = `${this.Nom}_inp_lib`;
        const lIdInpComm = `${this.Nom}_inp_comm`;
        const lHtml = [];
        lHtml.push(
          IE.jsx.str(
            'div',
            { class: 'fen_edition_url' },
            IE.jsx.str(
              'label',
              { class: 'feu_libelle', for: lIdInpLien },
              'Lien',
              ' (',
              'Obligatoire'.toLowerCase(),
              ')',
            ),
            IE.jsx.str('input', {
              id: lIdInpLien,
              type: 'text',
              class: 'feu_input as-input',
              ie_model: this.jsxModelInputLien.bind(this),
            }),
            IE.jsx.str(
              'div',
              { ie_if: this.jsxIfAffichageLibelle.bind(this) },
              IE.jsx.str(
                'label',
                { class: 'feu_libelle avecMarge', for: lIdInpLib },
                'Libellé du lien',
              ),
              IE.jsx.str('input', {
                id: lIdInpLib,
                type: 'text',
                class: 'feu_input as-input',
                ie_model: this.jsxModelInputLibelle.bind(this),
              }),
            ),
            IE.jsx.str(
              'div',
              { ie_if: this.jsxIfAffichageCommentaire.bind(this) },
              IE.jsx.str(
                'label',
                { class: 'feu_libelle avecMarge', for: lIdInpComm },
                'Commentaire',
              ),
              IE.jsx.str(IEHtml_TextareaMax_1.TextareaMax, {
                id: lIdInpComm,
                class: 'feu_commentaire',
                ie_model: this.jsxModelInputCommentaire.bind(this),
                maxlength: '255',
              }),
            ),
          ),
        );
        return lHtml.join('');
      }
      getParametresValidation(aNumeroBouton) {
        const lParametres = super.getParametresValidation(aNumeroBouton);
        $.extend(lParametres, { donnee: this.donnee });
        return lParametres;
      }
      static creerInstanceFenetreEditionUrl(aParams) {
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_EditionUrl,
          {
            pere: aParams.pere,
            initialiser: aParams.initialiser,
            evenement: aParams.evenement,
          },
        );
        return lFenetre;
      }
    }
    exports.ObjetFenetre_EditionUrl = ObjetFenetre_EditionUrl;
  },
  fn: 'objetfenetre_editionurl.js',
});