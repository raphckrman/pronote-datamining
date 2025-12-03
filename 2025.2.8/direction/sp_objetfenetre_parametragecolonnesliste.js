IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_ParametrageColonnesListe = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetElement_1 = require('ObjetElement');
    const TypeFusionTitreListe_1 = require('TypeFusionTitreListe');
    const ObjetDonneesListe_1 = require('ObjetDonneesListe');
    const _ObjetListe_1 = require('_ObjetListe');
    class ObjetFenetre_ParametrageColonnesListe extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          avecTailleSelonContenu: true,
          listeBoutons: [
            'Annuler',
            {
              valider: true,
              libelle: 'Valider',
            },
          ],
          addParametresValidation: (aParams) => {
            const lParametrage = [];
            if (aParams.bouton.valider) {
              this.listeColonnes.parcourir((aElement) => {
                if (aElement.visible) {
                  lParametrage.push({ id: aElement.declaration.id });
                } else {
                  lParametrage.push({
                    id: aElement.declaration.id,
                    visible: false,
                  });
                }
              });
            }
            return { parametrage: lParametrage };
          },
        });
      }
      construireInstances() {
        const ConstructorObjetListe = this.optionsFenetre.classObjetListe;
        this.identListe = this.add(ConstructorObjetListe, null, (aInstance) => {
          aInstance.setOptionsListe({
            colonnes: [
              { id: colonnes.coche, taille: 20 },
              { id: colonnes.libelle, taille: 200 },
            ],
            hauteurAdapteContenu: true,
            hauteurMaxAdapteContenu: 400,
            boutons: [
              { genre: _ObjetListe_1.ObjetListe.typeBouton.monter },
              { genre: _ObjetListe_1.ObjetListe.typeBouton.descendre },
            ],
          });
        });
      }
      composeContenu() {
        return [
          '<div id="' +
            this.getNomInstance(this.identListe) +
            '" style="height:100%"></div>',
        ].join('');
      }
      setDonnees(aParams) {
        this.afficher();
        this.listeColonnes = new ObjetListeElements_1.ObjetListeElements();
        const lListeNonTrouve = new ObjetListeElements_1.ObjetListeElements();
        const lTitreFusionGauche = [];
        aParams.declarationColonnes.forEach((aDeclaration, aIndex) => {
          const lIndex = _chercherIdColonne(
              aParams.parametrageColonnes,
              aDeclaration.id,
            ),
            lElement = new ObjetElement_1.ObjetElement();
          lElement.declaration = aDeclaration;
          lElement.indexDeclaration = aIndex;
          lElement.visible = true;
          if (
            aParams.tableauColonnesCachees &&
            aParams.tableauColonnesCachees[aIndex] === true
          ) {
            lElement.estCachee = true;
          }
          let lTitre = aDeclaration.titre;
          if (!Array.isArray(lTitre)) {
            lTitre = [lTitre];
          }
          lElement.Libelle = '';
          lTitre.forEach((aTitre, aIndex) => {
            let lLibelle = aTitre;
            if (MethodesObjet_1.MethodesObjet.isObject(aTitre)) {
              lLibelle = '';
              if (aTitre.libelleParametrageColonne) {
                lLibelle = aTitre.libelleParametrageColonne;
              } else if (aTitre.libelle) {
                lLibelle = aTitre.libelle;
              }
            }
            if (
              lLibelle ===
              TypeFusionTitreListe_1.TypeFusionTitreListe.FusionHaute
            ) {
              return;
            }
            if (
              lLibelle ===
                TypeFusionTitreListe_1.TypeFusionTitreListe.FusionGauche &&
              lTitreFusionGauche[aIndex]
            ) {
              lLibelle = lTitreFusionGauche[aIndex];
            }
            if (MethodesObjet_1.MethodesObjet.isString(lLibelle)) {
              lTitreFusionGauche[aIndex] = lLibelle;
              lElement.Libelle += (aIndex > 0 ? ' > ' : '') + lLibelle;
            }
          });
          if (lIndex >= 0) {
            lElement.visible =
              aParams.parametrageColonnes[lIndex].visible !== false;
            this.listeColonnes.addElement(lElement, lIndex);
          } else {
            lListeNonTrouve.addElement(lElement);
          }
        });
        this.listeColonnes.add(lListeNonTrouve);
        this.getInstance(this.identListe).setDonnees(
          new DonneesListe_ParametrageColonnesListe(this.listeColonnes),
        );
      }
    }
    exports.ObjetFenetre_ParametrageColonnesListe =
      ObjetFenetre_ParametrageColonnesListe;
    function _chercherIdColonne(aParametrage, aId) {
      let lIndex = -1;
      if (Array.isArray(aParametrage)) {
        aParametrage.every((aElement, aIndex) => {
          if (aElement && aElement.id === aId) {
            lIndex = aIndex;
            return false;
          }
          return true;
        });
      }
      return lIndex;
    }
    class DonneesListe_ParametrageColonnesListe extends ObjetDonneesListe_1.ObjetDonneesListe {
      constructor(aListe) {
        super(aListe);
        this.setOptions({
          avecSuppression: false,
          avecEtatSaisie: false,
          avecTri: false,
          avecLigneDroppable: true,
          avecLigneDraggable: true,
        });
      }
      getValeur(aParams) {
        switch (aParams.idColonne) {
          case colonnes.coche:
            return aParams.article.visible;
          case colonnes.libelle:
            return aParams.article.getLibelle();
        }
      }
      getTypeValeur(aParams) {
        return aParams.idColonne === colonnes.coche
          ? ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Coche
          : ObjetDonneesListe_1.ObjetDonneesListe.ETypeCellule.Texte;
      }
      getVisible(D) {
        return !!D && !D.estCachee;
      }
      avecEdition(aParams) {
        if (aParams.article && aParams.article.declaration.nonSupprimable) {
          return false;
        }
        if (
          aParams.article &&
          aParams.article.visible &&
          aParams.idColonne === colonnes.coche
        ) {
          let lNbVisibles = 0;
          this.Donnees.parcourir((aArticle) => {
            if (aArticle.visible) {
              lNbVisibles += 1;
            }
          });
          if (lNbVisibles < 2) {
            return false;
          }
        }
        return aParams.idColonne === colonnes.coche;
      }
      surEdition(aParams, V) {
        aParams.article.visible = V;
      }
      getCouleurCellule(aParams, aCouleurCellule) {
        if (aParams.idColonne === colonnes.libelle) {
          if (aParams.article.declaration.nonSupprimable) {
            aCouleurCellule.texte = 'var(--color-red-foncee)';
          } else if (aParams.article.declaration.nonDeplacable) {
            aCouleurCellule.texte = 'gray';
          }
        }
        return aCouleurCellule;
      }
      getClass(aParams) {
        if (
          aParams.idColonne === colonnes.libelle &&
          aParams.article.declaration.nonDeplacable
        ) {
          return 'Italique';
        }
      }
      autoriserDeplacementElementSurLigne(
        aParamsLigneDestination,
        aParamsSource,
      ) {
        const lAutoriserParent = super.autoriserDeplacementElementSurLigne(
          aParamsLigneDestination,
          aParamsSource,
        );
        return (
          lAutoriserParent &&
          !aParamsLigneDestination.article.declaration.nonDeplacable &&
          !aParamsSource.article.declaration.nonDeplacable
        );
      }
      surDeplacementElementSurLigne(aParamsLigneDestination, aParamsSource) {
        this.Donnees.remove(aParamsSource.ligne).insererElement(
          aParamsSource.article,
          aParamsLigneDestination.ligne,
        );
      }
    }
    var colonnes;
    (function (colonnes) {
      colonnes['coche'] = 'coche';
      colonnes['libelle'] = 'libelle';
    })(colonnes || (colonnes = {}));
  },
  fn: 'objetfenetre_parametragecolonnesliste.js',
});