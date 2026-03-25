IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_PlanSite = void 0;
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const Invocateur_1 = require('Invocateur');
    const MethodesObjet_1 = require('MethodesObjet');
    const jsx_1 = require('jsx');
    class ObjetFenetre_PlanSite extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          largeur: 450,
          hauteur: 320,
          hauteurMaxContenu: 720,
          avecScroll: true,
          listeBoutons: ['Fermer'],
        });
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          naviguerVers(aGenreOnglet) {
            $(this.node).eventValidation(() => {
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.navigationOnglet,
                aGenreOnglet,
              );
            });
          },
        });
      }
      setDonnees() {
        this.afficher();
      }
      composeContenu() {
        return IE.jsx.str('ul', { class: 'browser-default' }, (H) => {
          const lTabOnglet = this.getTabOngletsVisibles();
          lTabOnglet.parcourir((aOnglet) => {
            H.push(
              this._ajouterLigne(
                aOnglet,
                aOnglet.sousOnglets && aOnglet.sousOnglets.count() === 0,
              ),
            );
          });
        });
      }
      getTabOngletsVisibles() {
        const lListeOnglet = new ObjetListeElements_1.ObjetListeElements();
        GEtatUtilisateur.listeOnglets.parcourir((aOnglet) => {
          const lOnglet = MethodesObjet_1.MethodesObjet.dupliquer(aOnglet);
          if (
            lOnglet.Actif &&
            (lOnglet.estUnOnglet || lOnglet.profondeur === 0)
          ) {
            lOnglet.sousOnglets = new ObjetListeElements_1.ObjetListeElements();
            lOnglet.sousOnglets =
              GEtatUtilisateur.listeOnglets.getListeElements((aElement) => {
                if (aElement.Actif && aElement.onglet) {
                  return lOnglet.getGenre() === aElement.onglet.getGenre();
                }
                return false;
              });
            lOnglet.sousOnglets.parcourir((aSousOnglet) => {
              if (aSousOnglet.avecSousOnglet) {
                aSousOnglet.sousOnglets =
                  new ObjetListeElements_1.ObjetListeElements();
                aSousOnglet.sousOnglets =
                  GEtatUtilisateur.listeOnglets.getListeElements(
                    (aSousElement) => {
                      if (aSousElement.Actif && aSousElement.onglet) {
                        return (
                          aSousOnglet.getGenre() ===
                          aSousElement.onglet.getGenre()
                        );
                      }
                      return false;
                    },
                  );
              }
            });
            lListeOnglet.add(lOnglet);
          }
        });
        return lListeOnglet;
      }
      surValidation() {
        this.fermer();
      }
      _ajouterPere(aOnglet) {
        if (aOnglet.sousOnglets && aOnglet.sousOnglets.count() > 0) {
          return IE.jsx.str('ul', { class: 'browser-default' }, (aTab) => {
            aOnglet.sousOnglets.parcourir((aSousOnglet) => {
              aTab.push(
                this._ajouterLigne(
                  aSousOnglet,
                  !aSousOnglet.sousOnglets ||
                    aSousOnglet.sousOnglets.count() === 0,
                ),
              );
            });
          });
        }
        return '';
      }
      _ajouterLigne(aOnglet, aAvecLien) {
        if (aAvecLien) {
          return IE.jsx.str(
            'li',
            null,
            IE.jsx.str(
              'a',
              {
                class: 'AvecMain',
                tabindex: '0',
                'ie-node': (0, jsx_1.jsxFuncAttr)(
                  'naviguerVers',
                  aOnglet.getGenre(),
                ),
              },
              aOnglet.getLibelle(),
            ),
            this._ajouterPere(aOnglet),
          );
        }
        return IE.jsx.str(
          'li',
          null,
          aOnglet.getLibelle().replace('<br>', ' '),
          this._ajouterPere(aOnglet),
        );
      }
    }
    exports.ObjetFenetre_PlanSite = ObjetFenetre_PlanSite;
  },
  fn: 'objetfenetre_plansite.js',
});