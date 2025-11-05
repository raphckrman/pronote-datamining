IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_EditionUrl = void 0;
    const ObjetChaine_1 = require('ObjetChaine');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const ObjetTraduction_1 = require('ObjetTraduction');
    require('ObjetFenetre_EditionUrl.css');
    class ObjetFenetre_EditionUrl extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
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
        });
        this.optionsFenetreEditionUrl = {
          avecLibelle: true,
          avecCommentaire: true,
        };
      }
      setOptionsFenetreEditionUrl(aOptions) {
        Object.assign(this.optionsFenetreEditionUrl, aOptions);
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          avecAffichageLibelle() {
            return aInstance.optionsFenetreEditionUrl.avecLibelle;
          },
          avecAffichageCommentaire() {
            return aInstance.optionsFenetreEditionUrl.avecCommentaire;
          },
          inputLien: {
            getValue: function () {
              return !!aInstance.donnee && !!aInstance.donnee.url
                ? aInstance.donnee.url
                : '';
            },
            setValue: function (aValue) {
              aInstance.donnee.url = aValue;
            },
            exitChange: function (aValue) {
              const lChaine = ObjetChaine_1.GChaine.supprimerEspaces(aValue);
              const lUrl = ObjetChaine_1.GChaine.encoderUrl(
                ObjetChaine_1.GChaine.verifierURLHttp(lChaine),
              );
              aInstance.donnee.url = lUrl;
            },
          },
          inputLibelle: {
            getValue: function () {
              return !!aInstance.donnee && !!aInstance.donnee.libelle
                ? aInstance.donnee.libelle
                : '';
            },
            setValue: function (aValue) {
              aInstance.donnee.libelle = aValue;
            },
          },
          inputCommentaire: {
            getValue: function () {
              return !!aInstance.donnee && !!aInstance.donnee.commentaire
                ? aInstance.donnee.commentaire
                : '';
            },
            setValue: function (aValue) {
              aInstance.donnee.commentaire = aValue;
            },
          },
          fenetreBtn: {
            getDisabled: function (aBoutonRepeat) {
              if (aInstance.donnee && aBoutonRepeat.element.valider === true) {
                return aInstance.donnee.url === '';
              }
              return (
                aInstance.optionsFenetre.listeBoutonsInactifs &&
                aInstance.optionsFenetre.listeBoutonsInactifs[
                  aBoutonRepeat.element.index
                ] === true
              );
            },
          },
        });
      }
      setDonnees(aDonnee) {
        this.donnee = aDonnee;
        this.afficher();
      }
      composeContenu() {
        const lIdInpLien = `${this.Nom}_inp_lien`;
        const lIdInpLib = `${this.Nom}_inp_lib`;
        const lIdInpComm = `${this.Nom}_inp_comm`;
        const lHtml = [];
        lHtml.push(
          IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str(
              'div',
              { class: 'fen_edition_url' },
              IE.jsx.str(
                'label',
                { class: 'feu_libelle', for: lIdInpLien },
                'Lien',
                ' *',
              ),
              IE.jsx.str('input', {
                id: lIdInpLien,
                type: 'text',
                class: 'feu_input as-input',
                'ie-model': 'inputLien',
              }),
              IE.jsx.str(
                'div',
                { 'ie-if': 'avecAffichageLibelle' },
                IE.jsx.str(
                  'label',
                  { class: 'feu_libelle avecMarge', for: lIdInpLib },
                  'Libellé du lien',
                ),
                IE.jsx.str('input', {
                  id: lIdInpLib,
                  type: 'text',
                  class: 'feu_input as-input',
                  'ie-model': 'inputLibelle',
                }),
              ),
              IE.jsx.str(
                'div',
                { 'ie-if': 'avecAffichageCommentaire' },
                IE.jsx.str(
                  'label',
                  { class: 'feu_libelle avecMarge', for: lIdInpComm },
                  'Commentaire',
                ),
                IE.jsx.str('ie-textareamax', {
                  id: lIdInpComm,
                  class: 'feu_commentaire',
                  'ie-model': 'inputCommentaire',
                  maxlength: '255',
                }),
              ),
            ),
          ),
        );
        return lHtml.join('');
      }
      composeBas() {
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            'div',
            { class: 'feu_obligatoire' },
            '* ',
            'Champ obligatoire',
          ),
        );
      }
      getParametresValidation(aNumeroBouton) {
        const lParametres = super.getParametresValidation(aNumeroBouton);
        $.extend(lParametres, { donnee: this.donnee });
        return lParametres;
      }
      static creerInstanceFenetreEditionUrl(aParams) {
        const lFenetre = ObjetFenetre_1.ObjetFenetre.creerInstanceFenetre(
          ObjetFenetre_EditionUrl,
          { pere: aParams.pere, evenement: aParams.evenement },
          { largeur: 540 },
        );
        return lFenetre;
      }
    }
    exports.ObjetFenetre_EditionUrl = ObjetFenetre_EditionUrl;
  },
  fn: 'objetfenetre_editionurl.js',
});