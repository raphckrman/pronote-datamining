IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ComboDyn = exports.Combo = void 0;
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const Enumere_EvenementObjetSaisie_1 = require('@cp/script/Enumere/Enumere_EvenementObjetSaisie');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetSaisie_1 = require('@cp/script/ObjetsGraphiques/ObjetSaisie');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetSaisie_css_1 = require('@cp/Produit/Css/ObjetSaisie.css');
    const Combo = (aProps) => {
      return IE.jsx.str(
        'div',
        Object.assign({ [IEHtml_1.IEHtml.attrJsxComp]: 'Combo' }, aProps),
        aProps.children,
      );
    };
    exports.Combo = Combo;
    const ComboDyn = (aProps) => {
      return IE.jsx.str(
        'div',
        Object.assign({ [IEHtml_1.IEHtml.attrJsxComp]: 'Combo' }, aProps),
      );
    };
    exports.ComboDyn = ComboDyn;
    IEHtml_1.IEHtml.addJsxComponent('Combo', (aContexteCourant, aOutils) => {
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
      const lEstRequired =
        aContexteCourant.node.getAttribute('aria-required') === 'true';
      if (lEstRequired) {
        aContexteCourant.node.removeAttribute('aria-required');
      }
      let lInstanceCombo = new ObjetSaisie_1.ObjetSaisie({
        pere: {},
        evenement: (aParams) => {
          const lParametres = aParams;
          const lCallback = function () {
            if (!lInstanceCombo) {
              return;
            }
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
      });
      const lRacine = ObjetHtml_1.GHtml.htmlToDOM(
          IE.jsx.str('div', { id: lInstanceCombo.getNom() }),
        ),
        lJRacine = $(lRacine);
      const lAvecControleSaisie = aOutils.getControleSaisieEvent(
        aContexteCourant.node,
      );
      lInstanceCombo.ControleNavigation = !!lAvecControleSaisie;
      if (
        IE.estMobile &&
        !aContexteCourant.node.classList.contains('combo-classic')
      ) {
        if (aContexteCourant.node.classList.contains('membre-combo')) {
        } else if (aContexteCourant.node.classList.contains('search-contain')) {
          lInstanceCombo.setOptionsObjetSaisie({ avecDesignMobile: true });
        } else {
          lInstanceCombo.setOptionsObjetSaisie({ avecDesignMobile: true });
        }
      }
      if (lStrAriaLabel || lStrAriaLabelledBy || lStrAriaDescribedBy) {
        lInstanceCombo.setOptionsObjetSaisie({
          labelWAICellule: lStrAriaLabel || '',
          ariaLabelledBy: lStrAriaLabelledBy || '',
          ariaDescribedBy: lStrAriaDescribedBy || '',
        });
      }
      if (lEstRequired) {
        lInstanceCombo.setOptionsObjetSaisie({ required: true });
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
              if (
                lNode.hasAttribute('selected') &&
                lNode.getAttribute('selected') !== 'false'
              ) {
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
        html: lInstanceCombo.construireHtml(),
        instance: lInstanceCombo,
        ignorerScroll: true,
        contexte: aContexteCourant.contexte,
      });
      lJRacine.ieData(aContexteCourant.data);
      lJRacine.on('destroyed', () => {
        if (!lInstanceCombo) {
          return;
        }
        if (lInfosDestroy.estFonction) {
          lInfosDestroy.callback([lInstanceCombo, aContexteCourant.data]);
        }
        lInstanceCombo.free();
        lInstanceCombo = null;
      });
      aOutils.surInjectionHtml(aContexteCourant, () => {
        if (!lInstanceCombo) {
          return;
        }
        lInstanceCombo.recupererDonnees();
        let lActualiserSelection;
        const lDemarrerGetIndice = function () {
          if (lInfosGetIndice.estFonction) {
            if (!lInstanceCombo) {
              throw new Error(`lInstanceCombo deja detruite ?`);
            }
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
              if (!lInstanceCombo) {
                throw new Error(`lInstanceCombo deja detruite ?`);
              }
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
            if (!lInstanceCombo) {
              throw new Error(`lInstanceCombo deja detruite ?`);
            }
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
            if (!lInstanceCombo) {
              throw new Error(`lInstanceCombo deja detruite ?`);
            }
            return lInfosGetLibelle.callback([
              lInstanceCombo,
              aContexteCourant.data,
            ]);
          };
          const lLibelle = lGetterLibelle();
          if (MethodesObjet_1.MethodesObjet.isString(lLibelle)) {
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
                MethodesObjet_1.MethodesObjet.isString(lLibelle) &&
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
          if (!lInstanceCombo) {
            throw new Error(`lInstanceCombo deja detruite ?`);
          }
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
      if (lModele) {
        aOutils.surNodeEtNodeAfter(aContexteCourant);
      }
      aOutils.copyAttributs(aContexteCourant.node, lRacine, (aName) => {
        if (aName === 'id') {
          return false;
        }
      });
      lJRacine.addClass(
        `${ObjetSaisie_css_1.SObjetSaisie.ObjetSaisie} ${ObjetSaisie_css_1.SObjetSaisie.Combo}`,
      );
      aOutils.replaceNode(aContexteCourant.node, lRacine);
      aOutils.addCommentaireDebug(lRacine, 'Combo');
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