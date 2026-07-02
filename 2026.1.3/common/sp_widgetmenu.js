IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.WidgetMenu = void 0;
    const ObjetWidget_1 = require('@cp/script/ObjetWidget');
    const ObjetCelluleDate_1 = require('@cp/script/ObjetsGraphiques/ObjetCelluleDate');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const TypeDomaine_1 = require('@cp/script/Type/TypeDomaine');
    const Enumere_Repas_1 = require('@scolys/espace/script/enumere/Enumere_Repas');
    const TypeOrigineCreationLabelAlimentaire_1 = require('@scolys/espace/script/enumere/TypeOrigineCreationLabelAlimentaire');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const UtilitaireMenus_1 = require('@scolys/produit/script/utilitaire/UtilitaireMenus');
    const Enumere_EvenementWidget_1 = require('@cp/Produit/Script/Enumere/Enumere_EvenementWidget');
    const AccessApp_1 = require('@cp/script/AccessApp');
    class WidgetMenu extends ObjetWidget_1.Widget.ObjetWidget {
      constructor(aParams) {
        super(aParams);
        const lApplicationSco = (0, AccessApp_1.getApp)();
        this.parametresSco = lApplicationSco.getObjetParametres();
      }
      creerObjetsMenu() {
        this.dateMenu = new ObjetCelluleDate_1.ObjetCelluleDate({
          pere: this,
          evenement: this._evenementComboMenu,
        });
      }
      initialiserObjetsMenu() {
        this.dateMenu.setOptionsObjetCelluleDate({
          formatDate: '[%JJJ %JJ %MMM]',
          avecBoutonsPrecedentSuivant: true,
          classeCSSTexte: 'Maigre',
          largeurComposant: 100,
        });
        const lActifJour = new TypeDomaine_1.TypeDomaine();
        this.parametresSco.joursDemiPension.each((i) => {
          lActifJour.setValeur(true, i + 1);
        });
        this.dateMenu.setParametresFenetre(
          this.parametresSco.PremierLundi,
          this.parametresSco.PremiereDate,
          this.parametresSco.DerniereDate,
          lActifJour,
        );
        this.dateMenu.initialiser();
        this.dateMenu.setDonnees(this.donneesRequete.menuDeLaCantine.date);
      }
      construire(aParams) {
        this.donnees = aParams.donnees;
        this.creerObjetsMenu();
        const lNbRepas = this.donnees.listeRepas
          ? this.donnees.listeRepas.count()
          : 0;
        const lWidget = {
          getHtml: this.composeWidgetMenu.bind(this),
          nbrElements: null,
          afficherMessage: lNbRepas === 0,
          listeElementsGraphiques: [{ id: this.dateMenu.getNom() }],
        };
        $.extend(true, this.donnees, lWidget);
        aParams.construireWidget(this.donnees);
        this.initialiserObjetsMenu();
      }
      composeWidgetMenu() {
        const H = [];
        const lListeIconesLabel = new ObjetListeElements_1.ObjetListeElements();
        const lListeIconesAllergene =
          new ObjetListeElements_1.ObjetListeElements();
        for (
          let i = 0, nbrRepas = this.donnees.listeRepas.count();
          i < nbrRepas;
          i++
        ) {
          const lRepas = this.donnees.listeRepas.get(i);
          const lEstRepasDuSoir =
            lRepas.getGenre() === Enumere_Repas_1.EGenreRepas.Soir;
          if (nbrRepas === 2 || lEstRepasDuSoir || lRepas.getLibelle()) {
            let lLibelleRepas = [
              'Repas de midi',
              'Repas du soir',
            ][lRepas.getGenre()];
            if (lRepas.getLibelle()) {
              if (lLibelleRepas !== '') {
                lLibelleRepas += ' : ';
              }
              lLibelleRepas += lRepas.getLibelle();
            }
            if (lEstRepasDuSoir) {
              H.push(`<div class="divider"></div>`);
            }
            H.push('<h3 class="underline">');
            H.push(lLibelleRepas);
            H.push('</h3>');
          }
          H.push('<ul class="one-line">');
          for (let j = 0; j < lRepas.listePlats.count(); j++) {
            const lPlat = lRepas.listePlats.get(j);
            H.push('<li>', '<div class="conteneur-aliments">');
            const lListeAliments = lPlat.listeAliments.trier();
            lListeAliments.parcourir((aElement) => {
              H.push(`<div class="aliment m-y-s">`);
              H.push(`<div>${aElement.getLibelle()}</div>`);
              const lAvecIcones =
                aElement.listeLabelsAlimentaires.count() > 0 ||
                aElement.listeAllergenesAlimentaire.count() > 0;
              if (lAvecIcones) {
                H.push(`<div>`);
                aElement.listeLabelsAlimentaires.parcourir((aElem) => {
                  H.push(this._getIconeAlimentaire(aElem));
                  if (
                    !lListeIconesLabel.getElementParNumero(aElem.getNumero())
                  ) {
                    lListeIconesLabel.addElement(aElem);
                  }
                });
                aElement.listeAllergenesAlimentaire.parcourir((aElem) => {
                  H.push(
                    UtilitaireMenus_1.UtilitaireMenus.composeAllergene(aElem),
                  );
                  if (!lListeIconesAllergene.getElementParElement(aElem)) {
                    lListeIconesAllergene.addElement(aElem);
                  }
                });
                H.push(`</div>`);
              }
              H.push(`</div>`);
            });
            H.push('</div>', '</li>');
          }
          H.push('</ul>');
        }
        if (this.donnees.listeRepas.count() > 0) {
          const lAvecIcons =
            lListeIconesLabel.count() > 0 || lListeIconesAllergene.count() > 0;
          if (lAvecIcons) {
            H.push('<div class="legende" aria-hidden="true">');
          }
          if (lListeIconesLabel.count() > 0) {
            lListeIconesLabel.parcourir((aElem) => {
              H.push(
                IE.jsx.str(
                  'span',
                  { class: 'menu' },
                  this._getIconeAlimentaire(aElem),
                  aElem.getLibelle(),
                ),
              );
            });
          }
          if (lListeIconesAllergene.count() > 0) {
            lListeIconesAllergene.parcourir((aElem) => {
              H.push(
                IE.jsx.str(
                  'span',
                  { class: 'menu' },
                  UtilitaireMenus_1.UtilitaireMenus.composeAllergene(aElem),
                  aElem.getLibelle(),
                ),
              );
            });
          }
          if (lAvecIcons) {
            H.push('</div>');
          }
        }
        return H.join('');
      }
      _evenementComboMenu(aDate) {
        this.donneesRequete.menuDeLaCantine.date = aDate;
        this.donnees.semaineSelectionnee = IE.Cycles.cycleDeLaDate(
          this.donneesRequete.menuDeLaCantine.date,
        );
        this.callback.appel(
          this.donnees.genre,
          Enumere_EvenementWidget_1.EGenreEvenementWidget.ActualiserWidget,
        );
      }
      _getIconeAlimentaire(aElem) {
        const H = [];
        if (
          aElem.getGenre() ===
            TypeOrigineCreationLabelAlimentaire_1
              .TypeOrigineCreationLabelAlimentaire.OCLA_Utilisateur &&
          !!aElem.icone
        ) {
          H.push(
            IE.jsx.str('img', {
              class: 'label-alimentaire',
              src: `data:image/png;base64,${aElem.icone}`,
              alt: aElem.getLibelle(),
              ie_tooltiplabel: aElem.getLibelle(),
            }),
          );
        } else {
          const lStyle = aElem.couleur ? `color:${aElem.couleur}` : '';
          H.push(
            TypeOrigineCreationLabelAlimentaire_1.TypeOrigineCreationLabelAlimentaireUtil.getIconeSvg(
              aElem.getGenre(),
              aElem.getLibelle(),
              lStyle,
            ),
          );
        }
        return H.join('');
      }
    }
    exports.WidgetMenu = WidgetMenu;
  },
  fn: 'widgetmenu.js',
});