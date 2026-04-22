IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.DonneesListe_SelectionPublic = void 0;
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetDonneesListeFlatDesign_1 = require('ObjetDonneesListeFlatDesign');
    const ObjetDonneesListe_1 = require('ObjetDonneesListe');
    class DonneesListe_SelectionPublic extends ObjetDonneesListeFlatDesign_1.ObjetDonneesListeFlatDesign {
      constructor(aDonnees) {
        aDonnees.parcourir((D) => {
          if (!D.estUnDeploiement && D.selectionne && D.pere) {
            D.pere.selectionne = true;
          }
        });
        super(aDonnees);
        this.setOptions({
          avecSelection: false,
          avecTri: false,
          avecCB: true,
          avecEvnt_CB: true,
          avecCocheCBSurLigne: true,
          avecEvnt_Deploiement: true,
          avecEventDeploiementSurCellule: true,
          avecBoutonActionLigne: false,
        });
        this._cacheDoublonArticles = null;
      }
      avecSelection(aParams) {
        var _a;
        if (
          (_a = this._options.listeRessourceDesactiver) === null ||
          _a === void 0
            ? void 0
            : _a.getElementParNumero(aParams.article.getNumero())
        ) {
          return false;
        }
        return (
          super.avecSelection(aParams) && !aParams.article.estUnDeploiement
        );
      }
      getDisabledCB(aParams) {
        var _a;
        let D = aParams.article;
        if (
          (_a = this._options.listeRessourceDesactiver) === null ||
          _a === void 0
            ? void 0
            : _a.getElementParNumero(aParams.article.getNumero())
        ) {
          return true;
        }
        return (
          D.avecReponse ||
          D.nonModifiable ||
          D.refusMess ||
          (D.estUnDeploiement &&
            !(this._options && this._options.selectionCumul))
        );
      }
      getValueCB(aParams) {
        if (
          this._options.avecMonoSelectionSurResponsablesAvecRencontreSeparee &&
          this._options.avecInformationEleveDansListeResponsable
        ) {
          if (
            aParams.article.avecRencontresSepareesDesResponsables &&
            aParams.article.estUnDeploiement
          ) {
            const lFils = this.getArrayFilsVisiblesDePere(aParams.article);
            return (
              lFils.filter(
                (aFils) =>
                  'selectionne' in aFils.article && aFils.article.selectionne,
              ).length === 1
            );
          }
        }
        return aParams.article ? aParams.article.selectionne : false;
      }
      avecCB(aParams) {
        if (this._options.avecMonoSelectionDeFamille) {
          const lEstUnDeploimentClasse =
            '__sansClasse__' in aParams.article &&
            aParams.article.getGenre() === 0 &&
            aParams.article.estUnDeploiement;
          const lEstUnDeploimentGroupe =
            '__sans__' in aParams.article &&
            aParams.article.getGenre() === 9 &&
            aParams.article.estUnDeploiement;
          return (
            super.avecCB(aParams) &&
            !lEstUnDeploimentClasse &&
            !lEstUnDeploimentGroupe
          );
        }
        return super.avecCB(aParams);
      }
      estCocheSelonFilsSurLigneDeploiement(aArticle) {
        if (
          this._options.avecMonoSelectionSurResponsablesAvecRencontreSeparee &&
          this._options.avecInformationEleveDansListeResponsable
        ) {
          if (
            !!aArticle.avecRencontresSepareesDesResponsables &&
            aArticle.estUnDeploiement
          ) {
            return false;
          }
        }
        return super.estCocheSelonFilsSurLigneDeploiement(aArticle);
      }
      setValueCB(aParams, aValue) {
        aParams.article.selectionne = aValue;
        if (this._options.avecInformationEleveDansListeResponsable) {
          if (aParams.article.eleves && aParams.article.pere) {
            aParams.article.eleves.parcourir((aEleve) => {
              if (aEleve.getNumero() === aParams.article.pere.getNumero()) {
                aParams.article.eleveConcerne = aValue ? aEleve : undefined;
              }
            });
          }
        }
        if (this._options.avecMonoSelectionDeFamille) {
          this.handleMonoSelectionDeFamille(aParams);
        }
        this.gestionCacheDoublon(aParams.article, aValue);
        if (
          this._options.avecMonoSelectionSurResponsablesAvecRencontreSeparee
        ) {
          this.handleRencontresSepararees(aParams, aValue);
        }
      }
      gestionCacheDoublon(aArticle, aValue) {
        if (this._options.avecCacheDoublonArticles) {
          if (!this._cacheDoublonArticles) {
            this._cacheDoublonArticles = {};
            this.Donnees.parcourir((aElt) => {
              const lKey = _getKeyCache(aElt);
              if (!this._cacheDoublonArticles[lKey]) {
                this._cacheDoublonArticles[lKey] = [];
              }
              this._cacheDoublonArticles[lKey].push(aElt);
            });
          }
          const lTab = this._cacheDoublonArticles[_getKeyCache(aArticle)];
          if (lTab && lTab.forEach) {
            lTab.forEach((aElement) => {
              var _a, _b, _c;
              if (this._options.avecInformationEleveDansListeResponsable) {
                if (
                  (aArticle === null || aArticle === void 0
                    ? void 0
                    : aArticle.pere) &&
                  ((_a =
                    aArticle === null || aArticle === void 0
                      ? void 0
                      : aArticle.pere) === null || _a === void 0
                    ? void 0
                    : _a.getNumero()) ===
                    ((_c =
                      (_b =
                        aElement === null || aElement === void 0
                          ? void 0
                          : aElement.pere) === null || _b === void 0
                        ? void 0
                        : _b.getNumero) === null || _c === void 0
                      ? void 0
                      : _c.call(_b))
                ) {
                  aElement.selectionne = aArticle.selectionne;
                }
                return;
              }
              aElement.selectionne = aValue;
            });
          }
        }
      }
      handleRencontresSepararees(aParams, aValue) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (
          !((_b =
            (_a = aParams.article) === null || _a === void 0
              ? void 0
              : _a.pere) === null || _b === void 0
            ? void 0
            : _b.avecRencontresSepareesDesResponsables) &&
          !((_c = aParams.article) === null || _c === void 0
            ? void 0
            : _c.avecRencontresSepareesDesResponsables)
        ) {
          return;
        }
        if (!this._options.avecInformationEleveDansListeResponsable) {
          return;
        }
        const lEleveAvecRencontresSepareesDesResponsables = (
          (_e =
            (_d = aParams.article) === null || _d === void 0
              ? void 0
              : _d.pere) === null || _e === void 0
            ? void 0
            : _e.avecRencontresSepareesDesResponsables
        )
          ? aParams.article.pere
          : aParams.article;
        const lResponsables = this.getArrayFilsVisiblesDePere(
          lEleveAvecRencontresSepareesDesResponsables,
        );
        let lResponsablePreferentiel = null;
        for (let i = 0; i < lResponsables.length; i++) {
          const lResponsable = lResponsables[i].article;
          const lEstResponsablePreferentiel =
            (_g =
              (_f =
                lResponsable === null || lResponsable === void 0
                  ? void 0
                  : lResponsable.listeNumElevesResponsablePreferentiel) ===
                null || _f === void 0
                ? void 0
                : _f.includes(
                    lEleveAvecRencontresSepareesDesResponsables.getNumero(),
                  )) !== null && _g !== void 0
              ? _g
              : false;
          if (lEstResponsablePreferentiel) {
            lResponsablePreferentiel = lResponsable;
          }
          lResponsable.selectionne = false;
          this.gestionCacheDoublon(lResponsable, false);
        }
        if (!aValue) {
          return;
        }
        const lEstSelectionSurResponsable =
          lEleveAvecRencontresSepareesDesResponsables.getNumero() !==
          aParams.article.getNumero();
        if (lEstSelectionSurResponsable) {
          aParams.article.selectionne = true;
          this.gestionCacheDoublon(aParams.article, true);
          return;
        }
        if (!!lResponsablePreferentiel) {
          lResponsablePreferentiel.selectionne = true;
          this.gestionCacheDoublon(lResponsablePreferentiel, true);
        } else {
          lResponsables[0].article.selectionne = true;
          this.gestionCacheDoublon(lResponsables[0].article, true);
        }
      }
      handleMonoSelectionDeFamille(aParams) {
        const lPere = aParams.article.pere;
        if (!lPere && aParams.article.estUnDeploiement) {
          return;
        }
        this.Donnees.parcourir((aElt) => {
          if (aElt.selectionne && aElt.pere) {
            if (aElt.pere.getNumero() !== lPere.getNumero()) {
              aElt.selectionne = false;
            }
          }
        });
      }
      getTitreZonePrincipale(aParams) {
        var _a, _b;
        let D = aParams.article;
        let lLibelleMatieres = '';
        if (!D.estUnDeploiement && D.pere && D.eleves) {
          const lEleve = D.eleves.getElementParNumero(D.pere.getNumero());
          if (lEleve && lEleve.matieres) {
            lLibelleMatieres =
              '<div>' +
              lEleve.matieres.getTableauLibelles().join(', ') +
              '</div>';
          }
        }
        let lIconDetaches = '';
        if (
          this._options.avecIconElevesDetaches &&
          !D.estUnDeploiement &&
          D.estElevesDetachesDuCours
        ) {
          lIconDetaches = IE.jsx.str('i', {
            class: 'icon_eleve_detache EspaceGauche EspaceDroite',
            role: 'img',
            'aria-label': 'élève détaché',
          });
        }
        let lLibelle =
          (this._options &&
          this._options.avecIndicationDiscussionInterdit &&
          D.discussionInterdit
            ? '<span style="line-height: 18px; vertical-align: middle;">' +
              D.getLibelle() +
              '</span><div style="float:right;" class="EspaceGauche Image_MessagerieBloquee AlignementMilieuVertical" title="' +
              'Interdiction de participer aux discussions' +
              '"></div>'
            : D.libelleAffichage !== null && D.libelleAffichage !== undefined
              ? D.libelleAffichage
              : D.getLibelle()) +
          lIconDetaches +
          lLibelleMatieres;
        if (D.listeNumElevesResponsablePreferentiel) {
          if (
            D.listeNumElevesResponsablePreferentiel.includes(
              (_b =
                (_a = D.pere) === null || _a === void 0
                  ? void 0
                  : _a.getNumero) === null || _b === void 0
                ? void 0
                : _b.call(_a),
            )
          ) {
            lLibelle = `${lLibelle} (${'Préférentiel'})`;
          }
        }
        if (D.refusMess) {
          lLibelle = `${lLibelle} - ${'Refuse les discussions'}`;
        }
        return lLibelle;
      }
      getInfosSuppZonePrincipale(aParams) {
        if (this._options && this._options.getInfosSuppZonePrincipale) {
          return this._options.getInfosSuppZonePrincipale(aParams);
        }
        return '';
      }
      getZoneMessage(aParams) {
        if (this._options && this._options.getZoneMessage) {
          return this._options.getZoneMessage(aParams);
        }
        return '';
      }
      getTooltip(aParams) {
        if (this._options && this._options.getHintRessource) {
          return this._options.getHintRessource(aParams.article);
        }
        return '';
      }
      getClass(aParams) {
        if (this._options && this._options.getClassRessource) {
          return this._options.getClassRessource(aParams.article);
        }
        return '';
      }
      getVisible(D) {
        let lVisible = true;
        if (this._options && this._options.filtres) {
          for (const i in this._options.filtres) {
            const lFiltre = this._options.filtres[i];
            lVisible = lVisible && lFiltre.filtre(D, lFiltre.checked);
            if (!lVisible) {
              D.selectionne = false;
              return false;
            }
          }
        }
        if (this.options && this.options.funcFiltreVisible) {
          if (D.estUnDeploiement) {
            lVisible = this.avecFilsVisibleDePere(D);
          } else {
            lVisible = this.options.funcFiltreVisible(D, this.Donnees);
          }
          if (!lVisible) {
            return false;
          }
        }
        if (this._options && this._options.avecFiltreSelonAcceptRdv) {
          if (D.estUnDeploiement) {
            lVisible = this.avecFilsVisibleDePere(D);
          } else {
            lVisible = D.acceptRdv;
          }
          if (!lVisible) {
            return false;
          }
        }
        if (this._options && this._options.avecFiltreAucunAccesEspace) {
          if (D.estUnDeploiement) {
            lVisible = this.avecFilsVisibleDePere(D);
          } else {
            lVisible = D.accesParEspace === true;
          }
          if (!lVisible) {
            return false;
          }
        }
        if (D.estDirEnseignant === true) {
          lVisible = false;
          if (this._options && this._options.avecDirEnseignant === true) {
            lVisible = true;
          }
        }
        return lVisible;
      }
      construireFiltres() {
        if (!this.options.funcFiltreVisible || !this.options.htmlFiltre) {
          return '';
        }
        return this.options.htmlFiltre();
      }
      estFiltresParDefaut() {
        if (!this.options.funcFiltreVisible || !this.options.filtreParDefaut) {
          return true;
        }
        return this.options.filtreParDefaut();
      }
      reinitFiltres() {
        if (this.options.funcFiltreVisible && this.options.reinitFiltres) {
          this.options.reinitFiltres();
        }
      }
      getEtatCocheSelonFils(
        aElementPere,
        aParams,
        aMethodeAvecEdition,
        aPourCocheTout,
      ) {
        const lEtat = super.getEtatCocheSelonFils(
          aElementPere,
          aParams,
          aMethodeAvecEdition,
          aPourCocheTout,
        );
        if (
          this._options.avecMonoSelectionSurResponsablesAvecRencontreSeparee
        ) {
          if (aElementPere.avecRencontresSepareesDesResponsables) {
            if (
              lEtat === ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Grise
            ) {
              return ObjetDonneesListe_1.ObjetDonneesListe.EGenreCoche.Verte;
            }
          }
        }
        return lEtat;
      }
    }
    exports.DonneesListe_SelectionPublic = DonneesListe_SelectionPublic;
    function _getKeyCache(aElement) {
      return `${aElement.getNumero()}___${aElement.getGenre()}`;
    }
  },
  fn: 'donneesliste_selectionpublic.js',
});