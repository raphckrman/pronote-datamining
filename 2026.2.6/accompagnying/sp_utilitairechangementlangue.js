IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireChangementLangue = void 0;
    require('@cp/Produit/Css/ChangementLangue.css');
    const LocalStorage_1 = require('@librairies/script/Divers/LocalStorage');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ControleSaisieEvenement_1 = require('@cp/script/ControleSaisieEvenement');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_EvenementObjetSaisie_1 = require('@cp/script/Enumere/Enumere_EvenementObjetSaisie');
    const UtilitaireChangementLangueProduit_1 = require('@cp/Produit/Script/UtilitaireChangementLangueProduit');
    const IEHtml_Combo_1 = require('@cp/Espace/Script/IEHtml.Combo');
    const AccessApp_1 = require('@cp/script/AccessApp');
    exports.UtilitaireChangementLangue = Object.assign(
      {
        avecChoixLangues: function () {
          return (
            !(0, AccessApp_1.getApp)().estAppliMobile &&
            GParametres.listeLangues &&
            GParametres.listeLangues.count() > 1
          );
        },
        getListeLangues: function () {
          const lListe = MethodesObjet_1.MethodesObjet.dupliquer(
            GParametres.listeLangues,
          );
          lListe.parcourir((D) => {
            D.Libelle = D.description;
            const lImage = exports.UtilitaireChangementLangue.getImageCss(
              D.langID,
            );
            D.imageDrapeau = lImage
              ? IE.jsx.str('div', {
                  class: exports.UtilitaireChangementLangue.getImageCss(
                    D.langID,
                  ),
                  role: 'img',
                  'aria-label': D.Libelle,
                })
              : '';
            D.libelleHtml = lImage
              ? IE.jsx.str(
                  'div',
                  { class: 'flag-img' },
                  IE.jsx.str('div', { 'aria-hidden': 'true' }, D.imageDrapeau),
                  IE.jsx.str(
                    'div',
                    {
                      class: 'flag-label',
                      ie_ellipsis: true,
                      lang: exports.UtilitaireChangementLangue.getCodeLangueIso639(
                        D.langID,
                      ),
                    },
                    D.Libelle,
                  ),
                )
              : D.Libelle;
          });
          lListe.trier();
          return lListe;
        },
        modifierLangue: function (aLangue) {
          if (!LocalStorage_1.IELocalStorage.actif) {
            (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                titre: 'Changement de langue impossible!',
                message: 'Le changement de langue nécessite que le stockage des cookies soit autorisé.',
              });
            return;
          }
          if (!aLangue || !aLangue.langID) {
            return;
          }
          (0, ControleSaisieEvenement_1.ControleSaisieEvenement)(() => {
            (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
                message: 'Le changement de langue nécessite le rechargement de la page.\nConfirmez-vous ce changement ?',
                callback: function (aGenre) {
                  if (aGenre === Enumere_Action_1.EGenreAction.Valider) {
                    exports.UtilitaireChangementLangue.affecterLangue(
                      aLangue.langID,
                    );
                  }
                },
              });
          });
        },
        construire: function (aOptions) {
          if (!this.avecChoixLangues()) {
            return '';
          }
          let lIndiceSelection = -1;
          const lListe = exports.UtilitaireChangementLangue.getListeLangues();
          const lJsxModelComboChangementLangue = () => {
            return {
              init: (aCombo) => {
                aCombo.setOptionsObjetSaisie({
                  iconeGauche: '',
                  longueur: 22,
                  largeurListe: 180,
                  avecBouton: false,
                  avecEventSurFermetureListe:
                    !!aOptions && !!aOptions.avecEventFermeture,
                  getContenuCellule: function () {
                    const lElement = lListe.get(lIndiceSelection);
                    if (lElement) {
                      return { libelleHtml: lElement.imageDrapeau };
                    }
                  },
                  optionsBouton: {
                    avecBordures: false,
                    titleForce: 'Changer la langue',
                    classeZone: '',
                  },
                });
                aCombo.setDonneesObjetSaisie({
                  liste: lListe,
                  selection: lIndiceSelection,
                });
              },
              event: (aParams) => {
                if (
                  aParams.genreEvenement ===
                    Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                      .selection &&
                  aParams.combo.InteractionUtilisateur &&
                  aParams.indice !== lIndiceSelection
                ) {
                  exports.UtilitaireChangementLangue.modifierLangue(
                    aParams.element,
                  );
                }
              },
              getDisabled: () => {
                return lListe.count() < 2;
              },
            };
          };
          lListe.parcourir((aElement, aIndex) => {
            if (aElement.langID === GParametres.langID) {
              lIndiceSelection = aIndex;
              return false;
            }
          });
          if (lIndiceSelection < 0) {
            lIndiceSelection = 0;
          }
          return IE.jsx.str(IEHtml_Combo_1.Combo, {
            class: 'flag-conteneur',
            ie_model: lJsxModelComboChangementLangue,
          });
        },
      },
      UtilitaireChangementLangueProduit_1.UtilitaireChangementLangueProduit,
    );
  },
  fn: 'utilitairechangementlangue.js',
});