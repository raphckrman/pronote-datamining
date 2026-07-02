IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SelectionListeDiffusion = void 0;
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const ObjetFenetre_Liste_1 = require('@cp/script/ObjetsGraphiques/Fenetre/ObjetFenetre_Liste');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetListe_1 = require('@cp/Produit/Script/ObjetListe');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    class ObjetFenetre_SelectionListeDiffusion extends ObjetFenetre_Liste_1.ObjetFenetre_Liste {
      constructor(...aParams) {
        super(...aParams);
        this.avecLibelleListeFiltre = false;
        this.appSco = (0, AccessApp_1.getApp)();
        this.uniquementMesListes =
          this.appSco.parametresUtilisateur.get(
            'listeDiffusion.uniquementMesListes',
          ) || false;
        this.setOptionsFenetre({
          modale: true,
          titre: 'Listes de diffusion',
          largeur: 300,
          hauteur: 470,
          listeBoutons: [
            'Annuler',
            'Valider',
          ],
        });
      }
      initialiserListe(aInstance) {
        aInstance.setOptionsListe({
          ariaLabel: this.optionsFenetre.titre,
          skin: ObjetListe_1.ObjetListe.skin.flatDesign,
        });
      }
      composeContenu() {
        const lJsxCheckboxUniquementLesMiens = () => {
          return {
            getValue: () => {
              return this.appSco.parametresUtilisateur.get(
                'listeDiffusion.uniquementMesListes',
              );
            },
            setValue: (aValue) => {
              this.evenementSurCB(aValue);
            },
          };
        };
        return IE.jsx.str(
          'div',
          { class: 'flex-contain cols full-size' },
          this.avecLibelleListeFiltre &&
            IE.jsx.str(
              'p',
              { class: [Divers_css_1.SD.mBottom] },
              'Seules les listes avec la catégorie de destinataires sélectionnées sont affichées. Seuls les destinataires de la catégorie seront affichés',
            ),
          IE.jsx.str(
            'div',
            { class: 'fix-bloc p-all-l' },
            IE.jsx.str(
              IEHtml_CheckboxRadio_1.Checkbox,
              { ie_model: lJsxCheckboxUniquementLesMiens },
              ObjetChaine_1.GChaine.insecable(
                'Uniquement mes listes',
              ),
            ),
          ),
          IE.jsx.str('div', {
            class: 'fluid-bloc',
            id: this.getNomInstance(this.identListe),
          }),
        );
      }
      evenementSurCB(aValue) {
        this.uniquementMesListes = !!aValue;
        this.appSco.parametresUtilisateur.set(
          'listeDiffusion.uniquementMesListes',
          this.uniquementMesListes,
        );
        if (
          this.getInstance(this.identListe) &&
          this.getInstance(this.identListe).getDonneesListe()
        ) {
          this.getInstance(this.identListe)
            .getDonneesListe()
            .setUniquementMesListes(this.uniquementMesListes);
          this.getInstance(this.identListe).actualiser(true, false);
        }
      }
    }
    exports.ObjetFenetre_SelectionListeDiffusion =
      ObjetFenetre_SelectionListeDiffusion;
  },
  fn: 'objetfenetre_selectionlistediffusion.js',
});