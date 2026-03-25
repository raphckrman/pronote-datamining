IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SelectionRessource = void 0;
    const GUID_1 = require('GUID');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_EvenementListe_1 = require('Enumere_EvenementListe');
    const ObjetFenetre_1 = require('ObjetFenetre');
    const ObjetListe_1 = require('ObjetListe');
    const DonneesListe_SelectionRessource_1 = require('DonneesListe_SelectionRessource');
    const DonneesListe_SelectionRessource_fd_1 = require('DonneesListe_SelectionRessource_fd');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetTri_1 = require('ObjetTri');
    class ObjetFenetre_SelectionRessource extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          largeur: 350,
          hauteur: 500,
          listeBoutons: ['Valider'],
        });
        this.indexBtnValider = 0;
        const lId = GUID_1.GUID.getId();
        this.idConteneurFiltre = lId + '_Cfiltre';
        this.classFiltres = GUID_1.GUID.getClassCss();
        this._options = {
          selectionObligatoire: false,
          autoriseEltAucun: false,
          listeElementsAPositionnerEnPremier: null,
          filtres: null,
          gestionCumulRessource: null,
          avecBoutonRechercher: true,
          triListe: null,
          avecCocheRessources: true,
          getClassRessource: null,
          getHintRessource: null,
          optionsDonneesListe: null,
          avecBarreTitre: true,
          listeFlatDesign: false,
          selectionCumul: null,
          optionsListe: null,
        };
      }
      getOptions() {
        return this._options;
      }
      setOptionsFenetreSelectionRessource(aOptions) {
        $.extend(this._options, aOptions);
      }
      setSelectionObligatoire(aValeur) {
        this.setOptionsFenetreSelectionRessource({
          selectionObligatoire: aValeur,
        });
      }
      estSelectionObligatoire() {
        return this._options.selectionObligatoire;
      }
      setAutoriseEltAucun(aValeur) {
        this.setOptionsFenetreSelectionRessource({ autoriseEltAucun: aValeur });
      }
      setListeElementsAPositionnerEnPremier(aValeur) {
        this.setOptionsFenetreSelectionRessource({
          listeElementsAPositionnerEnPremier: aValeur,
        });
      }
      setDonnees(aParam) {
        if (aParam.titre) {
          this.setOptionsFenetre({ titre: aParam.titre });
        }
        this.listeRessourcesSelectionnees = aParam.listeRessourcesSelectionnees;
        this.genreRessource = aParam.genreRessource;
        this.construireListeRessource(
          aParam.listeRessources,
          aParam.listeRessourcesSelectionnees,
        );
        this._initialiserListe(this.getInstance(this.identListe));
        this.afficher();
        this._construireFiltres();
        if (!this.optionsFenetre.avecTailleSelonContenu) {
          this.surFixerTaille();
        }
        this._actualiserListe();
        if (this.optionsFenetre.avecTailleSelonContenu) {
          this.positionnerFenetre();
        }
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          cbFiltre: {
            getValue(aIndice) {
              const lFiltre = aInstance._options.filtres[aIndice];
              return lFiltre.checked;
            },
            setValue(aIndice, aValue) {
              aInstance._mettreAJourFiltre(aIndice, aValue);
            },
          },
        });
      }
      _construireFiltres() {
        if (!this._options.filtres || this._options.filtres.length === 0) {
          return;
        }
        const T = [];
        if (this._options.filtres) {
          for (const i in this._options.filtres) {
            const lFiltre = this._options.filtres[i];
            T.push(
              IE.jsx.str(
                'div',
                null,
                IE.jsx.str(
                  'ie-checkbox',
                  { 'ie-model': 'cbFiltre(' + i + ')' },
                  lFiltre.libelle,
                ),
              ),
            );
          }
        }
        ObjetHtml_1.GHtml.setHtml(this.idConteneurFiltre, T.join(''), {
          instance: this,
        });
        ObjetHtml_1.GHtml.setDisplay(this.idConteneurFiltre, true);
      }
      _mettreAJourFiltre(aNumeroFiltre, aChecked) {
        const lFiltre = this._options.filtres[aNumeroFiltre];
        lFiltre.checked = aChecked;
        if (lFiltre.callbackChecked) {
          lFiltre.callbackChecked(aChecked);
        }
        this._actualiserListe();
      }
      forcerMajListeSelection() {
        this._majListeSelection();
      }
      surValidation(ANumeroBouton) {
        if (ANumeroBouton === this.indexBtnValider) {
          this._majListeSelection();
        }
        this.fermer();
        this.callback.appel(
          this.genreRessource,
          this.listeRessourcesSelectionnees,
          ANumeroBouton,
          null,
        );
      }
      construireInstances() {
        this.identListe = this.add(
          ObjetListe_1.ObjetListe,
          this._evenementSurListe,
          this._initialiserListe,
        );
      }
      composeContenu() {
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            'div',
            { class: 'flex-contain cols full-height' },
            IE.jsx.str('div', {
              id: this.idConteneurFiltre,
              class: 'fix-bloc p-bottom',
              style: 'display:none',
            }),
            IE.jsx.str('div', {
              id: this.getNomInstance(this.identListe),
              class: 'fluid-bloc',
            }),
          ),
        );
      }
      construireListeRessource(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        if (aListeRessources) {
          let lRessource;
          const lNbr = aListeRessources.count();
          for (let i = 0; i < lNbr; i++) {
            const lElt = aListeRessources.get(i);
            if (
              (this._options.autoriseEltAucun || lElt.existeNumero()) &&
              !lElt.nePasAfficher
            ) {
              if (this._options.gestionCumulRessource) {
                this._options.gestionCumulRessource(lElt, this.listeRessources);
              }
              if (lElt.estUnDeploiement) {
                lRessource = lElt;
              } else {
                lRessource = MethodesObjet_1.MethodesObjet.dupliquer(
                  lElt,
                  true,
                );
                const lEltResSel =
                  aListeRessourcesSelectionnees.getElementParElement(
                    lRessource,
                  );
                if (lEltResSel) {
                  lRessource.selectionne = true;
                  lRessource.avecReponse = !!lEltResSel.avecReponse;
                  lRessource.nonModifiable = !!lEltResSel.nonModifiable;
                  lRessource.nonEditable = !!lEltResSel.nonEditable;
                } else {
                  lRessource.selectionne = false;
                }
              }
              this.listeRessources.addElement(lRessource);
            }
          }
        }
        if (this._options.triListe) {
          this.listeRessources.setTri(this._options.triListe);
        } else {
          this.listeRessources.setTri([
            ObjetTri_1.ObjetTri.initRecursif('pere', [
              ObjetTri_1.ObjetTri.init('Position'),
              ObjetTri_1.ObjetTri.init('Libelle'),
            ]),
          ]);
        }
        this.listeRessources.trier();
      }
      _initialiserListe(aInstance) {
        const lOptions = { ariaLabel: this.optionsFenetre.titre };
        if (this._options.listeFlatDesign) {
          Object.assign(lOptions, {
            skin: ObjetListe_1.ObjetListe.skin.flatDesign,
            avecCBToutCocher: !!(
              this._options.avecCocheRessources &&
              this._options.selectionCumul !== false
            ),
          });
        } else {
          Object.assign(lOptions, {
            colonnes: [
              {
                taille: 20,
                titre:
                  this._options.avecBarreTitre &&
                  this._options.avecCocheRessources &&
                  this._options.selectionCumul !== false
                    ? { estCoche: true }
                    : '',
              },
              {
                taille: '100%',
                titre: this._options.avecBarreTitre
                  ? 'Nom'
                  : null,
              },
            ],
          });
        }
        if (this._options.optionsListe) {
          $.extend(lOptions, this._options.optionsListe);
        }
        aInstance.setOptionsListe(lOptions);
      }
      _evenementSurListe(aParametres) {
        switch (aParametres.genreEvenement) {
          case Enumere_EvenementListe_1.EGenreEvenementListe
            .ModificationCBLigne:
          case Enumere_EvenementListe_1.EGenreEvenementListe.ApresEdition: {
            this.setBoutonActif(
              this.indexBtnValider,
              !this._options.selectionObligatoire ||
                this._nbRessourcesCochees() > 0,
            );
            break;
          }
        }
      }
      _creerObjetDonneesListe() {
        return this._options.listeFlatDesign
          ? new DonneesListe_SelectionRessource_fd_1.DonneesListe_SelectionRessource_fd(
              this.listeRessources,
            )
          : new DonneesListe_SelectionRessource_1.DonneesListe_SelectionRessource(
              this.listeRessources,
            );
      }
      _actualiserListe() {
        this.setBoutonActif(
          this.indexBtnValider,
          !this._options.selectionObligatoire ||
            this._nbRessourcesCochees() > 0,
        );
        const lDonneesListe = this._creerObjetDonneesListe();
        lDonneesListe._options = this._options;
        if (this._options.optionsDonneesListe) {
          lDonneesListe.setOptions(this._options.optionsDonneesListe);
        }
        const lBoutons = [];
        if (this._options.avecBoutonRechercher) {
          lBoutons.push({
            genre: ObjetListe_1.ObjetListe.typeBouton.rechercher,
          });
        }
        if (this._options.gestionCumulRessource) {
          lBoutons.push({ genre: ObjetListe_1.ObjetListe.typeBouton.deployer });
        }
        this.getInstance(this.identListe)
          .setOptionsListe({ boutons: lBoutons })
          .setDonnees(lDonneesListe);
        if (this.optionsFenetre.avecTailleSelonContenu) {
          this.positionnerFenetre();
          this.setCoordonnees();
        }
      }
      _nbRessourcesCochees() {
        let lNombre = 0;
        for (let i = 0, lNb = this.listeRessources.count(); i < lNb; i++) {
          if (this.listeRessources.get(i).selectionne) {
            lNombre++;
          }
        }
        return lNombre;
      }
      _getNbRessourcesSelectionnables() {
        let lCompteur = 0;
        for (let i = 0, lNb = this.listeRessources.count(); i < lNb; i++) {
          if (!this.listeRessources.get(i).estUnDeploiement) {
            lCompteur++;
          }
        }
        return lCompteur;
      }
      _majListeSelection() {
        this.listeRessourcesSelectionnees.vider();
        const lHashCache = new Map();
        const lNb = this.listeRessources.count();
        for (let i = 0; i < lNb; i++) {
          const lRessource = this.listeRessources.get(i);
          const lCle = lRessource.getCleHash();
          if (
            lRessource.selectionne &&
            !lRessource.estUnDeploiement &&
            !lHashCache.has(lCle)
          ) {
            this.listeRessourcesSelectionnees.addElement(
              MethodesObjet_1.MethodesObjet.dupliquer(lRessource),
            );
            lHashCache.set(lCle, true);
          }
        }
      }
    }
    exports.ObjetFenetre_SelectionRessource = ObjetFenetre_SelectionRessource;
  },
  fn: 'objetfenetre_selectionressource.js',
});