IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SelectionClasseGroupe = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const ObjetFenetre_SelectionRessource_1 = require('ObjetFenetre_SelectionRessource');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    const Type_ThemeBouton_1 = require('Type_ThemeBouton');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const ObjetListe_1 = require('ObjetListe');
    const ObjetDonneesListeFlatDesign_1 = require('ObjetDonneesListeFlatDesign');
    class ObjetFenetre_SelectionClasseGroupe extends ObjetFenetre_SelectionRessource_1.ObjetFenetre_SelectionRessource {
      constructor(...aParams) {
        super(...aParams);
        this.avecCumul = false;
        this.setOptionsFenetre({
          listeBoutons: [
            {
              libelle: 'Annuler',
              theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
            },
            {
              libelle: 'Valider',
              theme: Type_ThemeBouton_1.TypeThemeBouton.primaire,
            },
          ],
          largeur: 450,
          hauteur: 700,
        });
        this.setOptionsFenetreSelectionRessource({
          avecBarreTitre: true,
          optionsListe: {
            nonEditable: false,
            avecCelluleEditableTriangle: false,
            boutons: [{ genre: ObjetListe_1.ObjetListe.typeBouton.rechercher }],
          },
        });
        this.setSelectionObligatoire(true);
        this.indexBtnValider = 1;
      }
      setAvecCumul(aAvecCumul) {
        this.avecCumul = aAvecCumul;
      }
      setDonnees(aParam) {
        this.listeRessourcesSelectionnees = aParam.listeRessourcesSelectionnees;
        this.genreRessource = Enumere_Ressource_1.EGenreRessource.Classe;
        if (this.avecCumul) {
          this._construireListeRessourceAvecCumul(
            aParam.listeRessources,
            aParam.listeRessourcesSelectionnees,
          );
        } else {
          this.construireListeRessource(
            aParam.listeRessources,
            aParam.listeRessourcesSelectionnees,
          );
        }
        if (aParam.titre) {
          this.setOptionsFenetre({ titre: aParam.titre });
        } else {
          this.setOptionsFenetre({
            titre: 'Sélectionner des classes',
          });
        }
        this.afficher();
        this._actualiserListe();
        if (aParam.genreRessource) {
          this.genreRessource = aParam.genreRessource;
        }
      }
      _initialiserListe(aInstance) {
        const lColonnes = [{ id: '', taille: '100%' }];
        let lOptions = {
          colonnes: lColonnes,
          skin: ObjetListe_1.ObjetListe.skin.flatDesign,
          avecCBToutCocher: !!this._options.avecCocheRessources,
          forcerOmbreScrollBottom: true,
          ariaLabel: () => {
            return this.optionsFenetre.titre;
          },
        };
        if (this._options.optionsListe) {
          $.extend(lOptions, this._options.optionsListe);
        }
        aInstance.setOptionsListe(lOptions);
      }
      _actualiserListe() {
        this.setBoutonActif(
          this.indexBtnValider,
          !this.estSelectionObligatoire() || this._nbRessourcesCochees() > 0,
        );
        this.getInstance(this.identListe).setDonnees(
          new DonneesListe_SelectionClasseGroupe(this.listeRessources),
        );
      }
      _construireListeRessourceAvecCumul(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        let lCumulGroupe = new ObjetElement_1.ObjetElement(
          'Groupes',
          0,
          Enumere_Ressource_1.EGenreRessource.Groupe,
        );
        lCumulGroupe.estDeploye = false;
        lCumulGroupe.estUnDeploiement = true;
        lCumulGroupe.setActif(true);
        let lListeCumul = new ObjetListeElements_1.ObjetListeElements(),
          lAvecGroupe = false;
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        for (let i = 0; i < aListeRessources.count(); i++) {
          if (aListeRessources.get(i).existeNumero()) {
            let lRessource = MethodesObjet_1.MethodesObjet.dupliquer(
              aListeRessources.get(i),
            );
            if (
              lRessource.getGenre() ===
              Enumere_Ressource_1.EGenreRessource.Groupe
            ) {
              lAvecGroupe = true;
              lRessource.pere = lCumulGroupe;
            } else {
              let lNiveau = lListeCumul.get(
                lListeCumul.getIndiceParNumeroEtGenre(
                  lRessource.niveau.getNumero(),
                ),
              );
              if (!lNiveau) {
                lNiveau = new ObjetElement_1.ObjetElement(
                  lRessource.niveau.getLibelle(),
                  lRessource.niveau.getNumero(),
                  0,
                );
                lNiveau.estUnDeploiement = true;
                lNiveau.estDeploye = false;
                lListeCumul.addElement(lNiveau);
              }
              lRessource.pere = lNiveau;
            }
            const lRessourceTrouve =
              aListeRessourcesSelectionnees.getElementParElement(lRessource);
            lRessource.selectionne = !!(
              lRessourceTrouve &&
              lRessourceTrouve.getEtat() !==
                Enumere_Etat_1.EGenreEtat.Suppression
            );
            this.listeRessources.addElement(lRessource);
          }
        }
        if (lAvecGroupe) {
          this.listeRessources.addElement(lCumulGroupe);
        }
        for (let i = 0; i < lListeCumul.count(); i++) {
          this.listeRessources.addElement(lListeCumul.get(i));
        }
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.init((D) => {
            return D.getGenre() === Enumere_Ressource_1.EGenreRessource.Groupe;
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return D.pere ? D.pere.getLibelle() : D.getLibelle();
          }),
          ObjetTri_1.ObjetTri.init((D) => {
            return !!D.pere;
          }),
          ObjetTri_1.ObjetTri.init('Libelle'),
        ]);
        this.listeRessources.trier();
      }
    }
    exports.ObjetFenetre_SelectionClasseGroupe =
      ObjetFenetre_SelectionClasseGroupe;
    class DonneesListe_SelectionClasseGroupe extends ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign {
      constructor(ADonnees) {
        super(ADonnees);
        this.setOptions({
          avecSelection: false,
          avecTri: false,
          avecCB: true,
          avecEvnt_CB: true,
          avecCocheCBSurLigne: true,
          avecDeploiement: true,
          avecEvnt_Deploiement: true,
          avecEventDeploiementSurCellule: true,
          avecBoutonActionLigne: false,
        });
      }
      getDisabledCB(aParams) {
        let D = aParams.article;
        return !!D.nonEditable;
      }
      getValueCB(aParams) {
        return aParams.article ? aParams.article.selectionne : false;
      }
      setValueCB(aParams, aValue) {
        aParams.article.selectionne = aValue;
      }
      getTitreZonePrincipale(aParams) {
        let D = aParams.article;
        return D.getLibelle();
      }
      desactiverIndentationParente() {
        return true;
      }
    }
  },
  fn: 'objetfenetre_selectionclassegroupe.js',
});