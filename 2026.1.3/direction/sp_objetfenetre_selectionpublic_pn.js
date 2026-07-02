IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SelectionPublic_PN = void 0;
    const ObjetFenetre_SelectionPublic_1 = require('@cp/Espace/Script/Fenetres/ObjetFenetre_SelectionPublic');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const TypeGenreNiveauResponsabilite_1 = require('@scolys/produit/script/enumere/TypeGenreNiveauResponsabilite');
    const Enumere_EvenementListe_1 = require('@cp/script/Enumere/Enumere_EvenementListe');
    const TypeGenreNiveauResponsabilite_2 = require('@scolys/produit/script/enumere/TypeGenreNiveauResponsabilite');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const UtilitaireBoutonBandeau_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireBoutonBandeau');
    const UtilitaireFenetreSelectionPublic_1 = require('@scolys/espace/script/utilitaire/UtilitaireFenetreSelectionPublic');
    class ObjetFenetre_SelectionPublic_PN extends ObjetFenetre_SelectionPublic_1.ObjetFenetre_SelectionPublic {
      constructor(...aParams) {
        super(...aParams);
        this.avecListeDiffusion = false;
        this.applicationSco = (0, AccessApp_1.getApp)();
        this.etatUtilisateurSco = this.applicationSco.getEtatUtilisateur();
        this.avecFiltreSurProfs = ![
          Enumere_Espace_1.TypeGenreEspace.Espace_Eleve,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Eleve,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimEleve,
          Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Accompagnant,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimAccompagnant,
        ].includes(GEtatUtilisateur.GenreEspace);
      }
      estPourPrimaire() {
        return this.etatUtilisateurSco.pourPrimaire();
      }
      setDonnees(aParam) {
        this._construireFiltresListe(aParam);
        super.setDonnees(aParam);
      }
      setAvecListeDiffusion(aVal) {
        this.avecListeDiffusion = aVal;
      }
      async ouvrirFenetreListesDiffusion() {
        (0, UtilitaireFenetreSelectionPublic_1.ouvrirFenetreListesDiffusion)(
          [this.genreRessource],
          (aSelections) => {
            const lIndividuDejaVu = new Set();
            aSelections.parcourir((aElement) => {
              var _a;
              (_a = aElement.listePublicIndividu) === null || _a === void 0
                ? void 0
                : _a.parcourir((aIndividu) => {
                    if (aIndividu.getGenre() === this.genreRessource) {
                      if (lIndividuDejaVu.has(aIndividu.getNumero())) {
                        return;
                      }
                      lIndividuDejaVu.add(aIndividu.getNumero());
                    }
                  });
            });
            for (const lElementDansListeRessource of this.listeRessources) {
              if (lIndividuDejaVu.has(lElementDansListeRessource.getNumero())) {
                lElementDansListeRessource.selectionne = true;
              }
            }
            this.forcerMajListeSelection();
            this.actualiserAffichage();
          },
        );
      }
      jsxModeleBoutonAfficherListesDiffusion() {
        return {
          event: () => {
            this.ouvrirFenetreListesDiffusion();
          },
          getTitle: () => {
            return 'Initialiser avec une liste de diffusion';
          },
        };
      }
      getBoutonsListe() {
        const lBoutons = [];
        if (this.avecListeDiffusion) {
          lBoutons.push({
            getHtml: () =>
              UtilitaireBoutonBandeau_1.UtilitaireBoutonBandeau.getHtmlBtnListesDiffusion(
                this.jsxModeleBoutonAfficherListesDiffusion.bind(this),
                ['bt-large'],
              ),
          });
        }
        lBoutons.push(...super.getBoutonsListe());
        return lBoutons;
      }
      forcerDeploiementSurElementSelectionne() {
        const lElements = this.listeRessources.getListeElements(
          (aElem) => aElem.selectionne,
        );
        lElements.parcourir((aElement) => {
          const lIndice =
            this.listeRessources.getIndiceExisteParElement(aElement);
          if (MethodesObjet_1.MethodesObjet.isNumeric(lIndice)) {
            if (aElement.pere && aElement.pere.estUnDeploiement) {
              aElement.pere.estDeploye = true;
            }
            this.getInstance(this.identListe).actualiser();
            this.getInstance(this.identListe).selectionnerLigne({
              ligne: lIndice,
              avecEvenementModificationSelection: false,
              avecScroll: true,
            });
          }
        });
      }
      _evenementSurListe(aParametres) {
        switch (aParametres.genreEvenement) {
          case Enumere_EvenementListe_1.EGenreEvenementListe.Selection: {
            if (aParametres.article.estUnDeploiement) {
              return;
            }
            const lRessource = this.listeRessources.getElementParNumero(
              aParametres.article.getNumero(),
            );
            if (lRessource && !lRessource.estUnDeploiement) {
              this.listeRessourcesSelectionnees.vider();
              this.listeRessourcesSelectionnees.add(lRessource);
              this.validationAuto();
            }
            break;
          }
          default:
            super._evenementSurListe(aParametres);
        }
      }
      validationAuto() {
        this.fermer();
        this.callback.appel(
          this.genreRessource,
          this.listeRessourcesSelectionnees,
          this.indexBtnValider,
          this.listeRessourcesSelectionneesAvecInfoEleve,
        );
      }
      _construireListeRessourceAvecCumulPresentielEleve(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lEstDeployeParDefaut = this._options.estDeploye || false;
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        let lCumulPresent;
        let lCumulAbsent;
        let lNbPresents = 0;
        let lNbAbsents = 0;
        aListeRessources.parcourir((aEleve) => {
          const lEleve = MethodesObjet_1.MethodesObjet.dupliquer(aEleve);
          this.listeRessources.add(lEleve);
          if (!!aListeRessourcesSelectionnees.getElementParElement(lEleve)) {
            lEleve.selectionne = true;
          }
          let lCumul;
          if (lEleve.estAbsent) {
            if (!lCumulAbsent) {
              lCumulAbsent = ObjetElement_1.ObjetElement.create({
                Numero: 0,
                estUnDeploiement: true,
                estDeploye: lEstDeployeParDefaut,
                cumulAbsent: false,
              });
              this.listeRessources.add(lCumulAbsent);
            }
            lCumul = lCumulAbsent;
            lNbAbsents++;
          } else {
            if (!lCumulPresent) {
              lCumulPresent = ObjetElement_1.ObjetElement.create({
                Numero: 0,
                estUnDeploiement: true,
                estDeploye: lEstDeployeParDefaut,
                cumulAbsent: false,
              });
              this.listeRessources.add(lCumulPresent);
            }
            lCumul = lCumulPresent;
            lNbPresents++;
          }
          lEleve.pere = lCumul;
        });
        if (lCumulPresent) {
          lCumulPresent.setLibelle(
            'Sans absence ce jour (%s)',
          );
          if (!lCumulAbsent) {
            lCumulPresent.estDeploye = true;
          }
        }
        if (lCumulAbsent) {
          lCumulAbsent.setLibelle(
            'Avec absence ce jour (%s)',
          );
          if (!lCumulPresent) {
            lCumulAbsent.estDeploye = true;
          }
        }
        this.listeRessources
          .setTri([
            ObjetTri_1.ObjetTri.initRecursif('pere', [
              ObjetTri_1.ObjetTri.init('cumulAbsent'),
              ObjetTri_1.ObjetTri.init('Position'),
              ObjetTri_1.ObjetTri.init('Libelle'),
            ]),
          ])
          .trier();
      }
      _construireListeRessourceAvecCumulElevesClasse(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lCumulGroupe = ObjetElement_1.ObjetElement.create({
          Libelle: 'Sans classe',
          Numero: 0,
          Genre: 0,
          estDeploye: this._options.estDeploye || false,
          estUnDeploiement: true,
          __sansClasse__: true,
        });
        lCumulGroupe.setActif(true);
        const lCacheRessSelec = new Map();
        aListeRessourcesSelectionnees.parcourir((aElement) => {
          if (aElement && aElement.existe()) {
            let lCle =
              this.getCleHashElementAvecInformationEleveDansResponsable(
                aElement,
              );
            lCacheRessSelec.set(lCle, aElement);
          }
        });
        let lAvecGroupe = false;
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        const lListeCumulClasse = new ObjetListeElements_1.ObjetListeElements();
        const lListeCumulEleve = new ObjetListeElements_1.ObjetListeElements();
        for (let i = 0; i < aListeRessources.count(); i++) {
          const lRessource = MethodesObjet_1.MethodesObjet.dupliquer(
            aListeRessources.get(i),
          );
          if (!lRessource.existeNumero() || !lRessource.eleves) {
            continue;
          }
          for (let i = 0; i < lRessource.eleves.count(); i++) {
            const lEleve = MethodesObjet_1.MethodesObjet.dupliquer(
              lRessource.eleves.get(i),
            );
            let lCumulEleve = lListeCumulEleve.getElementParElement(lEleve);
            if (!lCumulEleve) {
              lCumulEleve = MethodesObjet_1.MethodesObjet.dupliquer(lEleve);
              lCumulEleve.estUnDeploiement = true;
              lCumulEleve.estDeploye = this._options.estDeploye || false;
              if (!lRessource.classes || lRessource.classes.count() === 0) {
                lAvecGroupe = true;
                lCumulEleve.pere = lCumulGroupe;
              } else if (lEleve.classe) {
                const lClasse = lEleve.classe;
                let lNiveau = lListeCumulClasse.getElementParNumero(
                  lClasse.getNumero(),
                );
                if (!lNiveau) {
                  const lSansClasse = !lClasse.getLibelle();
                  lNiveau = ObjetElement_1.ObjetElement.create({
                    Libelle:
                      lClasse.getLibelle() ||
                      'Sans classe',
                    Numero: lClasse.getNumero(),
                    Genre: 0,
                    estUnDeploiement: true,
                    estDeploye: this._options.estDeploye || false,
                    __sansClasse__: lSansClasse,
                  });
                  if (lClasse.estClasseMN) {
                    lNiveau.estClasseMN = true;
                  }
                  lListeCumulClasse.addElement(lNiveau);
                }
                lCumulEleve.pere = lNiveau;
                if (lClasse.estClasseMN && lClasse.classesNiv) {
                  lCumulEleve.classesNiv = lClasse.classesNiv;
                }
              }
              lListeCumulEleve.addElement(lCumulEleve);
            }
            const lCopieRessource =
              MethodesObjet_1.MethodesObjet.dupliquer(lRessource);
            lCopieRessource.pere = lCumulEleve;
            lCopieRessource.estDeploye = this._options.estDeploye || false;
            let lEltSelec = lCacheRessSelec.get(
              this.getCleHashElementAvecInformationEleveDansResponsable(
                lCopieRessource,
              ),
            );
            lCopieRessource.selectionne = !!lEltSelec;
            if (lEltSelec) {
              lCopieRessource.avecReponse = !!lEltSelec.avecReponse;
              lCopieRessource.nonModifiable = !!lEltSelec.nonModifiable;
            }
            this.listeRessources.add(lCopieRessource);
          }
        }
        if (lAvecGroupe) {
          this.listeRessources.addElement(lCumulGroupe);
        }
        for (let i = 0, lNbr = lListeCumulClasse.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulClasse.get(i));
        }
        for (let i = 0, lNbr = lListeCumulEleve.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulEleve.get(i));
        }
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.__sansClasse__;
            }),
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      _construireListeRessourceAvecCumulElevesGroupe(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        const lCumulSansGroupe = ObjetElement_1.ObjetElement.create({
          Libelle: 'Sans groupe',
          Numero: 0,
          Genre:
            ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.groupe,
          estDeploye: this._options.estDeploye || false,
          estUnDeploiement: true,
          __sans__: true,
        });
        lCumulSansGroupe.setActif(true);
        const lCacheRessSelec = new Map();
        aListeRessourcesSelectionnees.parcourir((aElement) => {
          if (aElement && aElement.existe()) {
            let lCle =
              this.getCleHashElementAvecInformationEleveDansResponsable(
                aElement,
              );
            lCacheRessSelec.set(lCle, aElement);
          }
        });
        const lAjouterRessource = (aParams) => {
          let lCumulEleve = lListeCumulEleve.getElementParFiltre((aElem) => {
            return (
              aElem.getNumero() === aParams.eleve.getNumero() &&
              aElem.pere &&
              aElem.pere === aParams.cumulGroupe
            );
          });
          if (!lCumulEleve) {
            lCumulEleve = MethodesObjet_1.MethodesObjet.dupliquer(
              aParams.eleve,
            );
            lCumulEleve.estUnDeploiement = true;
            lCumulEleve.estDeploye = !!this._options.estDeploye;
            lCumulEleve.pere = aParams.cumulGroupe;
            lListeCumulEleve.addElement(lCumulEleve);
          }
          const lCopieRessource = MethodesObjet_1.MethodesObjet.dupliquer(
            aParams.responsable,
          );
          lCopieRessource.pere = lCumulEleve;
          lCopieRessource.estDeploye = !!this._options.estDeploye;
          let lEltSelec = lCacheRessSelec.get(
            this.getCleHashElementAvecInformationEleveDansResponsable(
              lCopieRessource,
            ),
          );
          lCopieRessource.selectionne = !!lEltSelec;
          this.listeRessources.add(lCopieRessource);
        };
        let lAvecCumulSansGroupe = false;
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
        const lListeCumulGroupe = new ObjetListeElements_1.ObjetListeElements();
        const lListeCumulEleve = new ObjetListeElements_1.ObjetListeElements();
        for (let i = 0; i < aListeRessources.count(); i++) {
          const lRessource = MethodesObjet_1.MethodesObjet.dupliquer(
            aListeRessources.get(i),
          );
          if (!lRessource.existeNumero() || !lRessource.eleves) {
            continue;
          }
          for (let i = 0; i < lRessource.eleves.count(); i++) {
            const lEleve = MethodesObjet_1.MethodesObjet.dupliquer(
              lRessource.eleves.get(i),
            );
            if (!lEleve.groupes || lEleve.groupes.count() === 0) {
              lAvecCumulSansGroupe = true;
              lAjouterRessource({
                cumulGroupe: lCumulSansGroupe,
                eleve: lEleve,
                responsable: lRessource,
              });
            } else {
              for (let j = 0, lNbr2 = lEleve.groupes.count(); j < lNbr2; j++) {
                const lGroupe = MethodesObjet_1.MethodesObjet.dupliquer(
                  lEleve.groupes.get(j),
                );
                let lCumulGroupe = lListeCumulGroupe.getElementParNumero(
                  lGroupe.getNumero(),
                );
                if (!lCumulGroupe) {
                  const lSansClasse = !lEleve.groupes.getLibelle(j);
                  lCumulGroupe = ObjetElement_1.ObjetElement.create({
                    Libelle:
                      lEleve.groupes.getLibelle(j) ||
                      'Sans groupe',
                    Numero: lEleve.groupes.getNumero(j),
                    Genre:
                      ObjetFenetre_SelectionPublic_1
                        .TypeGenreCumulSelectionPublic.groupe,
                    estUnDeploiement: true,
                    estDeploye: !!this._options.estDeploye,
                    __sans__: lSansClasse,
                  });
                  lListeCumulGroupe.addElement(lCumulGroupe);
                }
                lAjouterRessource({
                  cumulGroupe: lCumulGroupe,
                  eleve: lEleve,
                  responsable: lRessource,
                });
              }
            }
          }
        }
        if (lAvecCumulSansGroupe) {
          this.listeRessources.addElement(lCumulSansGroupe);
        }
        for (let i = 0, lNbr = lListeCumulGroupe.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulGroupe.get(i));
        }
        for (let i = 0, lNbr = lListeCumulEleve.count(); i < lNbr; i++) {
          this.listeRessources.addElement(lListeCumulEleve.get(i));
        }
        this.listeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init((D) => {
              return !D.__sans__;
            }),
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        this.listeRessources.trier();
      }
      getCumulSansRegime() {
        return ObjetElement_1.ObjetElement.create({
          Libelle: 'Sans régime',
          Genre:
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_RegimeEleve,
          estUnDeploiement: true,
          estDeploye: !!this._options.estDeploye,
          Numero: 0,
          __sans__: true,
        });
      }
      _construireListeRessourceAvecCumulRegimeEleve(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        this._construireListeRessourceAvecCumulDePropsEleve({
          listeRessources: aListeRessources,
          listeRessourcesSelectionnees: aListeRessourcesSelectionnees,
          cumulSans: this.getCumulSansRegime(),
          propriete: 'regimeEleve',
        });
      }
      _construireListeRessourceAvecCumulRegime(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        this._construireListeRessourceAvecCumulDeProps({
          listeRessources: aListeRessources,
          listeRessourcesSelectionnees: aListeRessourcesSelectionnees,
          cumulSans: this.getCumulSansRegime(),
          propriete: 'regimeEleve',
        });
      }
      getCumulSansAutorisationSortie() {
        return ObjetElement_1.ObjetElement.create({
          Libelle: 'Sans autorisation de sortie',
          Genre: 0,
          estUnDeploiement: true,
          estDeploye: !!this._options.estDeploye,
          Numero: 0,
          __sans__: true,
        });
      }
      _construireListeRessourceAvecCumulDePropsEleve(aParams) {
        const lListeRessources = new ObjetListeElements_1.ObjetListeElements();
        const lCumulSans = aParams.cumulSans;
        let lAvecRessourceSans = false;
        const lListeCumul = new ObjetListeElements_1.ObjetListeElements();
        const lAjouterResponsable = (aParams) => {
          const lResource = ObjetElement_1.ObjetElement.create(
            Object.assign(
              Object.assign(
                {},
                MethodesObjet_1.MethodesObjet.dupliquer(aParams.responsable),
              ),
              {
                estUnDeploiement: false,
                estDeploye: !!this._options.estDeploye,
                pere: aParams.cumul,
              },
            ),
          );
          const lEstUnDoublon = !!lListeRessources.getElementParFiltre(
            (aElement) => {
              return (
                aElement.getNumero() === lResource.getNumero() &&
                aElement.getGenre() === lResource.getGenre() &&
                aElement.pere === lResource.pere
              );
            },
          );
          if (!lEstUnDoublon) {
            lListeRessources.add(lResource);
          }
        };
        aParams.listeRessources.parcourir((aRessource) => {
          const lResponsable = ObjetElement_1.ObjetElement.create(
            Object.assign(
              Object.assign(
                {},
                MethodesObjet_1.MethodesObjet.dupliquer(aRessource),
              ),
              {
                selectionne:
                  !!aParams.listeRessourcesSelectionnees.getElementParElement(
                    aRessource,
                  ),
              },
            ),
          );
          if (!lResponsable.existeNumero() || !lResponsable.eleves) {
            return;
          }
          lResponsable.eleves.parcourir((aEleve) => {
            if (!aEleve[aParams.propriete]) {
              lAvecRessourceSans = true;
              lAjouterResponsable({
                cumul: lCumulSans,
                responsable: lResponsable,
              });
              return;
            }
            let lCumul = lListeCumul.getElementParNumero(
              aEleve[aParams.propriete].getNumero(),
            );
            if (!lCumul) {
              lCumul = ObjetElement_1.ObjetElement.create(
                Object.assign(Object.assign({}, aEleve[aParams.propriete]), {
                  estUnDeploiement: true,
                  estDeploye: !!this._options.estDeploye,
                }),
              );
              lListeCumul.add(lCumul);
            }
            lAjouterResponsable({ cumul: lCumul, responsable: lResponsable });
          });
        });
        if (lAvecRessourceSans) {
          lListeCumul.add(lCumulSans);
        }
        lListeRessources.add(lListeCumul);
        lListeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        lListeRessources.trier();
        this.listeRessources = lListeRessources;
      }
      _construireListeRessourceAvecCumulDeProps(aParams) {
        const lListeRessources = new ObjetListeElements_1.ObjetListeElements();
        const lCumulSans = aParams.cumulSans;
        let lAvecRessourceSans = false;
        const lListeCumul = new ObjetListeElements_1.ObjetListeElements();
        aParams.listeRessources.parcourir((aRessource) => {
          const lRessource = ObjetElement_1.ObjetElement.create(
            Object.assign(
              Object.assign(
                {},
                MethodesObjet_1.MethodesObjet.dupliquer(aRessource),
              ),
              {
                selectionne:
                  !!aParams.listeRessourcesSelectionnees.getElementParElement(
                    aRessource,
                  ),
              },
            ),
          );
          if (!aRessource[aParams.propriete]) {
            lAvecRessourceSans = true;
            lRessource.pere = lCumulSans;
            lListeRessources.add(lRessource);
            return;
          }
          let lCumul = lListeCumul.getElementParNumero(
            aRessource[aParams.propriete].getNumero(),
          );
          if (!lCumul) {
            lCumul = ObjetElement_1.ObjetElement.create(
              Object.assign(Object.assign({}, aRessource[aParams.propriete]), {
                estUnDeploiement: true,
                estDeploye: !!this._options.estDeploye,
              }),
            );
            lListeCumul.add(lCumul);
          }
          lRessource.pere = lCumul;
          lListeRessources.add(lRessource);
        });
        if (lAvecRessourceSans) {
          lListeCumul.add(lCumulSans);
        }
        lListeRessources.add(lListeCumul);
        lListeRessources.setTri([
          ObjetTri_1.ObjetTri.initRecursif('pere', [
            ObjetTri_1.ObjetTri.init('Position'),
            ObjetTri_1.ObjetTri.init('Libelle'),
          ]),
        ]);
        lListeRessources.trier();
        this.listeRessources = lListeRessources;
      }
      _construireListeRessourceAvecCumulAutorisationsDeSortie(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        this._construireListeRessourceAvecCumulDeProps({
          listeRessources: aListeRessources,
          listeRessourcesSelectionnees: aListeRessourcesSelectionnees,
          cumulSans: this.getCumulSansAutorisationSortie(),
          propriete: 'autorisationDeSortie',
        });
      }
      _construireListeRessourceAvecCumulAutorisationsDeSortieEleve(
        aListeRessources,
        aListeRessourcesSelectionnees,
      ) {
        this._construireListeRessourceAvecCumulDePropsEleve({
          listeRessources: aListeRessources,
          listeRessourcesSelectionnees: aListeRessourcesSelectionnees,
          cumulSans: this.getCumulSansAutorisationSortie(),
          propriete: 'autorisationDeSortie',
        });
      }
      _construireFiltresListe(aParam) {
        const lEvnFiltre = () => {
          this.getInstance(this.identListe).actualiser();
        };
        if (
          aParam.genreRessource ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant &&
          this.avecFiltreSurProfs
        ) {
          let lProfsPrincipaux = false;
          let lProfsTuteurs = false;
          const lParamsFiltre = {
            funcFiltreVisible: (aArticle) => {
              const lAvecProfsPrincipaux =
                lProfsPrincipaux && aArticle.estProfPrincipal;
              const lAvecProfsTuteurs = lProfsTuteurs && aArticle.estProfTuteur;
              return (
                lAvecProfsPrincipaux ||
                lAvecProfsTuteurs ||
                (!lProfsPrincipaux && !lProfsTuteurs)
              );
            },
            htmlFiltre: () => {
              const lJSXFiltreProfPrincipaux = () => {
                return {
                  getValue: () => {
                    return lProfsPrincipaux;
                  },
                  setValue: (aValue) => {
                    lProfsPrincipaux = aValue;
                    lEvnFiltre();
                  },
                };
              };
              const lJSXFiltreTuteurs = () => {
                return {
                  getValue: () => {
                    return lProfsTuteurs;
                  },
                  setValue: (aValue) => {
                    lProfsTuteurs = aValue;
                    lEvnFiltre();
                  },
                };
              };
              return (0,
              UtilitaireFenetreSelectionPublic_1.getHtmlFiltreSelectionPublic)({
                modelCBProfPincipaux: lJSXFiltreProfPrincipaux.bind(this),
                modelCBTuteurs: lJSXFiltreTuteurs.bind(this),
              });
            },
            filtreParDefaut: () => {
              return !lProfsPrincipaux && !lProfsTuteurs;
            },
            reinitFiltres: () => {
              lProfsPrincipaux = false;
              lProfsTuteurs = false;
              lEvnFiltre();
            },
          };
          aParam.parametresFiltre = lParamsFiltre;
          return;
        }
        if (
          aParam.genreRessource ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve &&
          this.etatUtilisateurSco.getUtilisateur().getGenre() ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant &&
          this.applicationSco.droits.get(
            ObjetDroitsPN_1.TypeDroits.communication.toutesClasses,
          )
        ) {
          let lUniquementEnseigne = false;
          const lParamsFiltre = {
            funcFiltreVisible: (aArticle) => {
              return !lUniquementEnseigne || !!aArticle.enseigne;
            },
            htmlFiltre: () => {
              const lJSXCheckboxUniquementElevesEnseignes = () => {
                return {
                  getValue: () => {
                    return lUniquementEnseigne;
                  },
                  setValue: (aValue) => {
                    lUniquementEnseigne = aValue;
                    lEvnFiltre();
                  },
                };
              };
              const H = [];
              H.push(
                IE.jsx.str(
                  IEHtml_CheckboxRadio_1.Checkbox,
                  {
                    ie_model: lJSXCheckboxUniquementElevesEnseignes.bind(this),
                  },
                  'Uniquement les élèves auxquels j'enseigne',
                ),
              );
              return H.join('');
            },
            filtreParDefaut: () => {
              return !lUniquementEnseigne;
            },
            reinitFiltres: () => {
              lUniquementEnseigne = false;
              lEvnFiltre();
            },
          };
          aParam.parametresFiltre = lParamsFiltre;
        }
        if (
          aParam.genreRessource ===
            Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable &&
          aParam.listeNiveauxResponsabilite &&
          aParam.listeNiveauxResponsabilite.count() > 1
        ) {
          const llisteNiveauxResponsabilite = aParam.listeNiveauxResponsabilite;
          const lParamsFiltre = {
            funcFiltreVisible: (aArticle) => {
              let lVisible = false;
              if (
                aArticle.getGenre() !==
                Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable
              ) {
                return true;
              }
              if (this._options.avecInformationEleveDansListeResponsable) {
                const lEleveDuResponsable =
                  aArticle.eleves &&
                  aArticle.eleves.getElementParNumero(
                    aArticle.pere.getNumero(),
                  );
                if (
                  lEleveDuResponsable &&
                  lEleveDuResponsable.niveauResponsabilite
                ) {
                  const lNivResponsablilite =
                    llisteNiveauxResponsabilite.getElementParElement(
                      lEleveDuResponsable.niveauResponsabilite,
                    );
                  if (lNivResponsablilite) {
                    lVisible =
                      'actif' in lNivResponsablilite
                        ? lNivResponsablilite.actif
                        : true;
                  }
                }
              } else if (aArticle.niveauResponsabilite) {
                const lListeElevesDeResponsable =
                  this.getListeElevesDeResponsable(aArticle);
                const lListeNiveauResponsabilite =
                  lListeElevesDeResponsable.getTableau((aEleve) => {
                    var _a;
                    var _b;
                    return (_b =
                      (_a = aEleve.niveauResponsabilite) === null ||
                      _a === void 0
                        ? void 0
                        : _a.getGenre()) !== null && _b !== void 0
                      ? _b
                      : null;
                  });
                llisteNiveauxResponsabilite.parcourir(
                  (aNiveauResponsabilite) => {
                    if (
                      lListeNiveauResponsabilite.includes(
                        aNiveauResponsabilite.getGenre(),
                      )
                    ) {
                      lVisible =
                        aNiveauResponsabilite.actif === undefined
                          ? true
                          : aNiveauResponsabilite.actif;
                      return false;
                    }
                  },
                );
              }
              return lVisible;
            },
            htmlFiltre: () => {
              const lJSXCheckboxNiveauResponsabilite = (
                aNiveauResponsabilite,
              ) => {
                return {
                  getValue: () => {
                    let lActif = false;
                    if (aNiveauResponsabilite) {
                      if (aNiveauResponsabilite.actif === undefined) {
                        aNiveauResponsabilite.actif =
                          TypeGenreNiveauResponsabilite_1.TypeGenreNiveauResponsabiliteUtil.estFiltreParDefautActif(
                            aNiveauResponsabilite.getGenre(),
                          );
                      }
                      lActif = aNiveauResponsabilite.actif;
                    }
                    return lActif;
                  },
                  setValue: (aValue) => {
                    if (aNiveauResponsabilite) {
                      aNiveauResponsabilite.actif = aValue;
                    }
                    lEvnFiltre();
                  },
                };
              };
              const H = [];
              llisteNiveauxResponsabilite.parcourir(
                (aNiveauResponsabilite, aIndex) => {
                  const lClass = [];
                  const lEstEspaceParent = [
                    Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
                    Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
                  ].includes(GEtatUtilisateur.GenreEspace);
                  const lEstAutreContacts =
                    aNiveauResponsabilite.getGenre() ===
                    TypeGenreNiveauResponsabilite_2
                      .TypeGenreNiveauResponsabilite.gnrContact;
                  if (lEstEspaceParent && lEstAutreContacts) {
                    return;
                  }
                  if (aIndex < llisteNiveauxResponsabilite.count() - 1) {
                    lClass.push('p-bottom');
                  }
                  H.push(
                    IE.jsx.str(
                      'div',
                      { class: lClass },
                      IE.jsx.str(
                        IEHtml_CheckboxRadio_1.Checkbox,
                        {
                          ie_model: lJSXCheckboxNiveauResponsabilite.bind(
                            this,
                            aNiveauResponsabilite,
                          ),
                        },
                        aNiveauResponsabilite.getLibelle(),
                      ),
                    ),
                  );
                },
              );
              return H.join('');
            },
            filtreParDefaut: () => {
              let lFilteDef = true;
              llisteNiveauxResponsabilite.parcourir((aNiveauResponsabilite) => {
                if (lFilteDef) {
                  if (
                    TypeGenreNiveauResponsabilite_1.TypeGenreNiveauResponsabiliteUtil.estFiltreParDefautActif(
                      aNiveauResponsabilite.getGenre(),
                    )
                  ) {
                    lFilteDef = aNiveauResponsabilite.actif;
                  } else {
                    lFilteDef = !aNiveauResponsabilite.actif;
                  }
                  if (!lFilteDef) {
                    return false;
                  }
                }
              });
              return lFilteDef;
            },
            reinitFiltres: () => {
              llisteNiveauxResponsabilite.parcourir((aNiveauResponsabilite) => {
                aNiveauResponsabilite.actif =
                  TypeGenreNiveauResponsabilite_1.TypeGenreNiveauResponsabiliteUtil.estFiltreParDefautActif(
                    aNiveauResponsabilite.getGenre(),
                  );
              });
              lEvnFiltre();
            },
          };
          aParam.parametresFiltre = lParamsFiltre;
          if (!('avecFiltresVisibles' in aParam)) {
            aParam.avecFiltresVisibles = true;
          }
        }
      }
      getListeElevesDeResponsable(aArticle) {
        var _a;
        if (
          this.getGenreCumul() ===
          ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.classe
        ) {
          return (_a = aArticle.eleves) === null || _a === void 0
            ? void 0
            : _a.getListeElements((aEleve) => {
                var _a, _b, _c, _d;
                return ((_a = aEleve.classe) === null || _a === void 0
                  ? void 0
                  : _a.estClasseMN) && 'classesNiv' in aEleve.classe
                  ? !!aEleve.classe.classesNiv.getElementParNumero(
                      (_b = aArticle.pere) === null || _b === void 0
                        ? void 0
                        : _b.getNumero(),
                    )
                  : ((_c = aEleve.classe) === null || _c === void 0
                      ? void 0
                      : _c.getNumero()) ===
                      ((_d = aArticle.pere) === null || _d === void 0
                        ? void 0
                        : _d.getNumero());
              });
        }
        return aArticle.eleves;
      }
    }
    exports.ObjetFenetre_SelectionPublic_PN = ObjetFenetre_SelectionPublic_PN;
  },
  fn: 'objetfenetre_selectionpublic_pn.js',
});