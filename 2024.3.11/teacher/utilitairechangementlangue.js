IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireChangementLangue = void 0;
    require('ChangementLangue.css');
    const LocalStorage_1 = require('LocalStorage');
    const MethodesObjet_1 = require('MethodesObjet');
    const ControleSaisieEvenement_1 = require('ControleSaisieEvenement');
    const Enumere_Action_1 = require('Enumere_Action');
    const Enumere_BoiteMessage_1 = require('Enumere_BoiteMessage');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_EvenementObjetSaisie_1 = require('Enumere_EvenementObjetSaisie');
    const UtilitaireChangementLangueProduit_1 = require('UtilitaireChangementLangueProduit');
    exports.UtilitaireChangementLangue = Object.assign(
      {
        avecChoixLangues: function () {
          return (
            !GApplication.estAppliMobile &&
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
                      'ie-ellipsis': true,
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
            GApplication.getMessage().afficher({
              titre: 'Changement de langue impossible!',
              message: 'Le changement de langue nécessite que le stockage des cookies soit autorisé.',
            });
            return;
          }
          if (!aLangue || !aLangue.langID) {
            return;
          }
          (0, ControleSaisieEvenement_1.ControleSaisieEvenement)(() => {
            GApplication.getMessage().afficher({
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
        construire: function (aControleur, aOptions) {
          if (!aControleur) {
            return '';
          }
          if (!this.avecChoixLangues()) {
            return '';
          }
          let lIndiceSelection = -1;
          const lListe = exports.UtilitaireChangementLangue.getListeLangues();
          aControleur.comboChangementLangue = {
            init: function (aInstance) {
              aInstance.setOptionsObjetSaisie({
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
                  avecFocusVisibleTexte: false,
                  titleForce: 'Changer la langue',
                  classeZone: '',
                },
              });
              aInstance.setDonnees(lListe, lIndiceSelection);
            },
            event: function (aParametres, aCombo) {
              if (
                aParametres.genreEvenement ===
                  Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                    .selection &&
                aCombo.InteractionUtilisateur &&
                aParametres.indice !== lIndiceSelection
              ) {
                exports.UtilitaireChangementLangue.modifierLangue(
                  aParametres.element,
                );
              }
            },
            getDisabled: function () {
              return lListe.count() < 2;
            },
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
          return '<ie-combo class="flag-conteneur" ie-model="comboChangementLangue"></ie-combo>';
        },
      },
      UtilitaireChangementLangueProduit_1.UtilitaireChangementLangueProduit,
    );
  },
  fn: 'utilitairechangementlangue.js',
});