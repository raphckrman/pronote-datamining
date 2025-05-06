IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    const IEHtml = require('IEHtml');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_EvenementObjetSaisie_1 = require('Enumere_EvenementObjetSaisie');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetSaisie_1 = require('ObjetSaisie');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetIdentite_1 = require('ObjetIdentite');
    IEHtml.addBalise('ie-combo', (aContexteCourant, aOutils) => {
      function _listesIdentiques(aListe1, aListe2) {
        return aListe1 && aListe1.listeIdentiqueParElementsOrdonnes
          ? aListe1.listeIdentiqueParElementsOrdonnes(aListe2)
          : false;
      }
      const lModele = aOutils.getModel(aContexteCourant),
        const_forcerActualisation = 'forcer_Actualisation';
      if (!lModele) {
        return;
      }
      const lInfosEvent = aOutils.getAccesParametresModel(
          'event',
          aContexteCourant,
        ),
        lInfosInit = aOutils.getAccesParametresModel('init', aContexteCourant),
        lInfosGetDonnees = aOutils.getAccesParametresModel(
          'getDonnees',
          aContexteCourant,
        ),
        lInfosGetIndice = aOutils.getAccesParametresModel(
          'getIndiceSelection',
          aContexteCourant,
        ),
        lInfosSetIndice = aOutils.getAccesParametresModel(
          'setIndiceSelection',
          aContexteCourant,
        ),
        lInfosGetLibelle = aOutils.getAccesParametresModel(
          'getLibelle',
          aContexteCourant,
        ),
        lInfosDestroy = aOutils.getAccesParametresModel(
          'destroy',
          aContexteCourant,
        ),
        lInfosGetDisabled = aOutils.getAccesParametresModel(
          'getDisabled',
          aContexteCourant,
        ),
        lAvecControleSaisie = aOutils.getControleSaisieEvent(aContexteCourant),
        lRefresh = aContexteCourant.contexte.refresh;
      let lListeSelectionsBackup = null;
      const lStrAriaLabel = aContexteCourant.node.getAttribute('aria-label');
      if (lStrAriaLabel) {
        aContexteCourant.node.removeAttribute('aria-label');
      }
      const lStrAriaLabelledBy =
        aContexteCourant.node.getAttribute('aria-labelledby');
      if (lStrAriaLabelledBy) {
        aContexteCourant.node.removeAttribute('aria-labelledby');
      }
      const lStrAriaDescribedBy =
        aContexteCourant.node.getAttribute('aria-describedby');
      if (lStrAriaDescribedBy) {
        aContexteCourant.node.removeAttribute('aria-describedby');
      }
      let lInstanceCombo = ObjetIdentite_1.Identite.creerInstance(
        ObjetSaisie_1.ObjetSaisie,
        {
          pere: aContexteCourant.controleur,
          evenement: function (aParams) {
            const lParametres = aParams;
            const lCallback = function () {
              if (
                lParametres.genreEvenement ===
                Enumere_EvenementObjetSaisie_1.EGenreEvenementObjetSaisie
                  .selection
              ) {
                if (
                  (lParametres.estComboMultiSelection &&
                    !_listesIdentiques(
                      lParametres.listeSelections,
                      lListeSelectionsBackup,
                    )) ||
                  (MethodesObjet_1.MethodesObjet.isNumber(lParametres.indice) &&
                    lParametres.indice !== aContexteCourant.data.$indice) ||
                  aContexteCourant.data.$indice === const_forcerActualisation
                ) {
                  if (lInfosSetIndice.estFonction) {
                    lInfosSetIndice.callback([
                      lParametres.estComboMultiSelection
                        ? lParametres.listeSelections
                        : lParametres.indice,
                      lInstanceCombo,
                      aContexteCourant.data,
                    ]);
                  }
                  aContexteCourant.data.$indice = lParametres.indice;
                }
              }
              if (lInfosEvent.estFonction) {
                lInfosEvent.callback([
                  lParametres,
                  lInstanceCombo,
                  aContexteCourant.data,
                ]);
              }
              lRefresh();
            };
            lCallback();
          },
        },
      );
      lInstanceCombo.ControleNavigation = !!lAvecControleSaisie;
      const lRacine = ObjetHtml_1.GHtml.htmlToDOM(
          '<div id="' + lInstanceCombo.getNom() + '"></div>',
        ),
        lJRacine = $(lRacine);
      if (
        IE.estMobile &&
        !aContexteCourant.node.classList.contains('combo-classic')
      ) {
        if (aContexteCourant.node.classList.contains('membre-combo')) {
          lInstanceCombo.setOptionsObjetSaisie({
            iconeGauche: '',
            avecBouton: true,
          });
        } else if (aContexteCourant.node.classList.contains('search-contain')) {
          lInstanceCombo.setOptionsObjetSaisie({
            avecDesignMobile: true,
            iconeGauche: '',
            avecBouton: true,
          });
        } else {
          lInstanceCombo.setOptionsObjetSaisie({
            avecDesignMobile: true,
            iconeGauche: 'icon_reorder',
            avecBouton: false,
          });
        }
      }
      if (lStrAriaLabel || lStrAriaLabelledBy || lStrAriaDescribedBy) {
        lInstanceCombo.setOptionsObjetSaisie({
          labelWAICellule: lStrAriaLabel || '',
          labelledById: lStrAriaLabelledBy || '',
          describedById: lStrAriaDescribedBy || '',
        });
      }
      const lParams = {
        liste: new ObjetListeElements_1.ObjetListeElements(),
        indice: -1,
      };
      if (lInfosInit.estFonction) {
        lInfosInit.callback([lInstanceCombo, aContexteCourant.data]);
      }
      const lRemplirListe = (aNode, aParams, aAEstFils) => {
        if (aNode && aNode.childNodes) {
          for (let i = 0; i < aNode.childNodes.length; i++) {
            const lNode = aNode.childNodes[i];
            const lNodeName = lNode.nodeName.toLowerCase();
            if (lNodeName && lNodeName === 'option') {
              const lArticle = ObjetElement_1.ObjetElement.create({
                Libelle: lNode.innerHTML,
                Numero: lNode.value,
                node: lNode,
                avecIndentation: aAEstFils,
              });
              aParams.liste.add(lArticle);
              if (lNode.getAttribute('selected') === 'selected') {
                aParams.indice = aParams.liste.count() - 1;
              }
            } else if (lNodeName && lNodeName === 'optgroup') {
              const lLibelle = lNode.getAttribute('label') || '';
              aParams.liste.add(
                ObjetElement_1.ObjetElement.create({
                  Libelle: lLibelle,
                  AvecSelection: false,
                  estCumul: true,
                  node: lNode,
                }),
              );
              lRemplirListe(lNode, aParams, true);
            }
          }
        }
      };
      lRemplirListe(aContexteCourant.node, lParams);
      if (lParams.liste.count() > 0) {
        lInstanceCombo.setDonneesObjetSaisie({
          liste: lParams.liste,
          selection: lParams.indice,
          options: {
            getClassElement(aParams) {
              if (aParams.element.estCumul) {
                return 'liste-fond-cumul';
              } else if (aParams.element.avecIndentation) {
                return 'element-indentation';
              }
              return '';
            },
          },
        });
        if (lParams.indice < 0) {
          lInstanceCombo.initSelection(0);
        }
      }
      aOutils.injectHTML({
        element: lRacine,
        html: lInstanceCombo.construireAffichage(),
        controleur: lInstanceCombo.controleur,
        ignorerScroll: true,
        contexte: aContexteCourant.contexte,
      });
      lJRacine.ieData(aContexteCourant.data);
      lJRacine.on('destroyed', () => {
        if (lInfosDestroy.estFonction) {
          lInfosDestroy.callback([lInstanceCombo, aContexteCourant.data]);
        }
        lInstanceCombo.free();
        lInstanceCombo = null;
      });
      aOutils.surInjectionHtml(aContexteCourant, () => {
        lInstanceCombo.recupererDonnees();
        let lActualiserSelection;
        const lDemarrerGetIndice = function () {
          if (lInfosGetIndice.estFonction) {
            let lGetterIndice;
            lActualiserSelection = function () {
              if (!lInstanceCombo) {
                return;
              }
              let lIndice = lGetterIndice();
              const lEstListe =
                lInstanceCombo.getDonneesPourHTMLCombo().options.multiSelection;
              if (
                (lEstListe &&
                  (!lListeSelectionsBackup ||
                    !lListeSelectionsBackup.preventionBoucle) &&
                  !_listesIdentiques(lIndice, lListeSelectionsBackup)) ||
                (!lEstListe && lIndice !== aContexteCourant.data.$indice) ||
                aContexteCourant.data.$indice === const_forcerActualisation
              ) {
                if (lEstListe) {
                  if (
                    lIndice &&
                    lIndice instanceof ObjetListeElements_1.ObjetListeElements
                  ) {
                    lListeSelectionsBackup = lIndice;
                  } else {
                    lListeSelectionsBackup =
                      new ObjetListeElements_1.ObjetListeElements();
                  }
                  lListeSelectionsBackup.preventionBoucle = true;
                  lInstanceCombo.setListeSelections(lIndice);
                } else {
                  const lIndiceNumber = lIndice;
                  aContexteCourant.data.$indice = lIndiceNumber;
                  if (
                    lInstanceCombo.getNbElementsVisible() === 0 &&
                    lIndiceNumber < 0
                  ) {
                    lInstanceCombo.surValidation(false, lIndiceNumber);
                  } else if (lIndiceNumber >= 0) {
                    lInstanceCombo.setSelection(lIndiceNumber);
                  }
                }
              } else if (
                lListeSelectionsBackup &&
                lListeSelectionsBackup.preventionBoucle
              ) {
                lListeSelectionsBackup.preventionBoucle = false;
              }
            };
            lGetterIndice = function () {
              let lIndice =
                lInfosGetIndice.callback([
                  lInstanceCombo,
                  aContexteCourant.data,
                ]) || 0;
              if (
                !lInstanceCombo.getDonneesPourHTMLCombo().options.multiSelection
              ) {
                lIndice = lInstanceCombo.chercherIndiceSelectionSelonSens(
                  lIndice,
                  false,
                );
              }
              return lIndice;
            };
            const lIndice = lGetterIndice();
            if (
              lInstanceCombo.getDonneesPourHTMLCombo().options.multiSelection
            ) {
              if (
                lIndice &&
                lIndice instanceof ObjetListeElements_1.ObjetListeElements
              ) {
                lListeSelectionsBackup = lIndice;
              } else {
                lListeSelectionsBackup =
                  new ObjetListeElements_1.ObjetListeElements();
              }
              lInstanceCombo.setListeSelections(lListeSelectionsBackup);
            } else {
              aContexteCourant.data.$indice = lIndice;
              if (lIndice >= 0) {
                lInstanceCombo.setSelection(lIndice);
              }
            }
            aOutils.abonnerRefresh(
              lActualiserSelection,
              lRacine,
              aContexteCourant,
            );
          }
        };
        if (lInfosGetDonnees.estFonction) {
          const lGetterDonnees = function () {
            return (
              lInfosGetDonnees.callback([
                lInstanceCombo.getListeElements(),
                lInstanceCombo,
                aContexteCourant.data,
              ]) || null
            );
          };
          const lDonnees = lGetterDonnees();
          let lComboInitialise = false;
          if (lDonnees && lDonnees.count) {
            lInstanceCombo.setDonneesObjetSaisie({ liste: lDonnees });
            lDemarrerGetIndice();
            lComboInitialise = true;
          }
          aOutils.abonnerRefresh(
            () => {
              if (!lInstanceCombo) {
                IE.log.addLog("lInstanceCombo n'existe pas");
                return null;
              }
              const lDonnees = lGetterDonnees();
              const lListeCourante = lInstanceCombo.getListeElements();
              if (
                lDonnees &&
                lDonnees.count &&
                lListeCourante !== lDonnees &&
                !(
                  lDonnees.count() === 0 &&
                  lListeCourante &&
                  lListeCourante.count &&
                  lListeCourante.count() === 0
                )
              ) {
                lInstanceCombo.setDonneesObjetSaisie({ liste: lDonnees });
                aContexteCourant.data.$indice = const_forcerActualisation;
                if (!lComboInitialise) {
                  lDemarrerGetIndice();
                  lComboInitialise = true;
                } else if (lActualiserSelection) {
                  lActualiserSelection();
                }
              }
            },
            lRacine,
            aContexteCourant,
          );
        } else {
          lDemarrerGetIndice();
        }
        if (lInfosGetLibelle.estFonction) {
          const lGetterLibelle = function () {
            return lInfosGetLibelle.callback([
              lInstanceCombo,
              aContexteCourant.data,
            ]);
          };
          const lLibelle = lGetterLibelle();
          if (lLibelle === '' || (lLibelle && lLibelle.length > 0)) {
            lInstanceCombo.setContenu(lLibelle);
          }
          aOutils.abonnerRefresh(
            () => {
              if (!lInstanceCombo) {
                IE.log.addLog("lInstanceCombo n'existe pas");
                return null;
              }
              const lLibelle = lGetterLibelle();
              if (
                (lLibelle === '' || (lLibelle && lLibelle.length > 0)) &&
                lLibelle !==
                  lInstanceCombo.getDonneesPourHTMLCombo().bouton.getLibelle()
              ) {
                lInstanceCombo.setContenu(lLibelle);
              }
            },
            lRacine,
            aContexteCourant,
          );
        }
      });
      if (lInfosGetDisabled.estFonction) {
        const lGetterDisabled = function () {
          return !!lInfosGetDisabled.callback([
            lInstanceCombo,
            aContexteCourant.data,
          ]);
        };
        const lEstDisabled = lGetterDisabled();
        aContexteCourant.data.$disabled = lEstDisabled;
        if (lEstDisabled) {
          lInstanceCombo.setActif(false);
        }
        aOutils.abonnerRefresh(
          () => {
            if (!lInstanceCombo) {
              IE.log.addLog("lInstanceCombo n'existe pas");
              return null;
            }
            const lEstDisabled = lGetterDisabled();
            if (lEstDisabled !== aContexteCourant.data.$disabled) {
              aContexteCourant.data.$disabled = lEstDisabled;
              lInstanceCombo.setActif(!lEstDisabled);
            }
          },
          lRacine,
          aContexteCourant,
        );
      }
      if (lModele && aContexteCourant.data.$modeleParsed) {
        aOutils.surNodeEtNodeAfter(aContexteCourant);
      }
      aOutils.copyAttributs(aContexteCourant.node, lRacine, (aName) => {
        if (aName === 'id') {
          return false;
        }
      });
      lJRacine.addClass('ObjetSaisie ie-combo');
      aOutils.replaceNode(aContexteCourant.node, lRacine);
      aOutils.addCommentaireDebug(
        lRacine,
        'ie-combo ie-model="' + lModele + '"',
      );
      if (lStrAriaLabel) {
        aOutils.addCommentaireDebug(
          lRacine,
          `transfert aria-label="${lStrAriaLabel}"`,
        );
      }
      if (lStrAriaLabelledBy) {
        aOutils.addCommentaireDebug(
          lRacine,
          `transfert aria-labelledby="${lStrAriaLabelledBy}"`,
        );
      }
      if (lStrAriaDescribedBy) {
        aOutils.addCommentaireDebug(
          lRacine,
          `transfert aria-describedby="${lStrAriaDescribedBy}"`,
        );
      }
      return { node: lRacine, avecCompileFils: false };
    });
  },
  fn: 'iehtml.combo.js',
});